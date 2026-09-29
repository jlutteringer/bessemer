import { CharacterRecord, CharacterSheet } from '@simulacrum/common/character/character'
import { CharacterOption, CharacterSelection } from '@simulacrum/common/character/character-option'
import { CharacterOptions, Characters } from '@simulacrum/common/character'
import { Archetypes, Effects, ProgressionTables, Traits } from '@simulacrum/common'
import { Trait } from '@simulacrum/common/trait'
import { ProgressionTable } from '@simulacrum/common/progression-table'
import { Effect } from '@simulacrum/common/effect'
import { Characteristic } from '@simulacrum/common/characteristic'
import { ApplicationContext } from '@simulacrum/common/application'
import { EvaluateExpression, Expressions } from '@bessemer/cornerstone/expression'
import { ObjectPaths } from '@bessemer/cornerstone'

export const MaxLevel = 20
const DefaultInitialValue = 10

/**
 * A single trait choice the character gets at a given level, along with the traits that can fill it. Traits whose
 * prerequisites aren't met at that level are left out.
 */
export type TraitSlot = {
  key: string
  level: number
  option: CharacterOption
  selection: Trait | null
  values: Array<Trait>
}

/**
 * The characteristics a player sets directly (e.g. ability scores), as opposed to ones derived from other values.
 */
export const getInitialValueCharacteristics = (context: ApplicationContext): Array<Characteristic<number>> => {
  return context.client.ruleset.playerCharacteristics.filter((it) => it.baseValue === null) as Array<Characteristic<number>>
}

export const getInitialValue = (character: CharacterRecord, characteristic: Characteristic<number>): number => {
  const value: unknown = ObjectPaths.getValue(characteristic.path as any, character.initialValues)
  return typeof value === 'number' ? value : DefaultInitialValue
}

export const setInitialValue = (character: CharacterRecord, characteristic: Characteristic<number>, value: number): CharacterRecord => {
  const initialValues = ObjectPaths.applyAnyValue(characteristic.path, character.initialValues, value) as CharacterRecord['initialValues']
  return { ...character, initialValues }
}

export const newCharacter = (context: ApplicationContext): CharacterRecord => {
  const character: CharacterRecord = {
    name: '',
    level: 1,
    initialValues: {},
    selections: ProgressionTables.empty(1),
    selectedAbilities: [],
  }

  return getInitialValueCharacteristics(context).reduce((it, characteristic) => setInitialValue(it, characteristic, DefaultInitialValue), character)
}

export const setLevel = (character: CharacterRecord, level: number, context: ApplicationContext): CharacterRecord => {
  return normalizeSelections({ ...character, level, selections: resizeSelections(character.selections, level) }, context)
}

// Resizes a selections table to `level`, dropping any selections above it
const resizeSelections = (selections: ProgressionTable<CharacterSelection>, level: number): ProgressionTable<CharacterSelection> => {
  return ProgressionTables.capAtLevel(ProgressionTables.merge(ProgressionTables.empty<CharacterSelection>(level), selections), level)
}

/**
 * The character as it stood on reaching `level`: at that level, with only the selections made at lower levels.
 */
const buildLevelSnapshot = (character: CharacterRecord, level: number, context: ApplicationContext): CharacterSheet => {
  const selections = resizeSelections(ProgressionTables.capAtLevel(character.selections, level - 1), level)
  return Characters.buildCharacterDefinition({ ...character, level, selections }, context)
}

/**
 * Selects `trait` for `option` at `level`, replacing any existing selection for that option. Passing `null` clears the selection.
 */
export const selectTrait = (
  character: CharacterRecord,
  level: number,
  option: CharacterOption,
  trait: Trait | null,
  context: ApplicationContext
): CharacterRecord => {
  const row = (character.selections[level] ?? []).filter((it) => it.option !== option.id)
  const updatedRow = trait === null ? row : [...row, { option: option.id, selection: trait.id }]
  return normalizeSelections({ ...character, selections: { ...character.selections, [level]: updatedRow } }, context)
}

// Drops any selections that are no longer valid, e.g. a fighting style after the Fighter class selection is changed
const normalizeSelections = (character: CharacterRecord, context: ApplicationContext): CharacterRecord => {
  return { ...character, selections: Characters.buildCharacterDefinition(character, context).selections }
}

/**
 * Labels an option by the archetypes its traits are drawn from, e.g. "Class" or "Fighting Style".
 */
export const getOptionLabel = (option: CharacterOption, context: ApplicationContext): string => {
  const archetypeNames = option.traitFilter.archetypes.map((it) => Archetypes.getArchetype(it, context).name)
  return archetypeNames.length > 0 ? archetypeNames.join(' / ') : 'Trait'
}

export const getTraitSlots = (character: CharacterRecord, context: ApplicationContext): Array<TraitSlot> => {
  const sheet = Characters.buildCharacterDefinition(character, context)
  const selectedTraits = ProgressionTables.getValues(sheet.traits)
  const slots: Array<TraitSlot> = []

  // Options come from the ruleset's progression table and, recursively, from the effects of the traits selected to fill them
  const visit = (effects: Array<Effect>, level: number, evaluate: EvaluateExpression) => {
    Effects.filter(effects, Effects.GainCharacterOption).forEach((effect) => {
      const option = effect.option
      const selection = CharacterOptions.getSelection(sheet.selections, option, level)
      // Exclude this slot's own selection so it still shows up as one of the slot's values
      const otherSelectedTraits = selectedTraits.filter((it) => it !== selection?.selection)
      const choice = CharacterOptions.evaluateChoice(option, otherSelectedTraits, evaluate, context)
      const trait = selection === null ? null : Traits.getTrait(selection.selection, context)

      slots.push({
        key: `${level}-${option.id}-${slots.length}`,
        level,
        option,
        selection: trait,
        values: choice.values,
      })

      if (trait !== null) {
        visit(trait.effects, level, evaluate)
      }
    })
  }

  for (let level = 1; level <= sheet.level; level++) {
    // Prerequisites for a level's choices are evaluated against the character as it stood on reaching that level
    const evaluate = Expressions.evaluator(Characters.buildExpressionContext(buildLevelSnapshot(character, level, context), context))
    visit(context.client.ruleset.progressionTable[level] ?? [], level, evaluate)
  }

  return slots
}
