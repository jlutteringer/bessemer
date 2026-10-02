import { CharacterRecord, CharacterSheet } from '@simulacrum/common/character/character'
import { CharacterOption, CharacterOptionType, CharacterOptionValue, CharacterSelection } from '@simulacrum/common/character/character-option'
import { CharacterOptions, Characters } from '@simulacrum/common/character'
import { Abilities, Archetypes, Effects, ProgressionTables, Traits } from '@simulacrum/common'
import { Trait, TraitReference } from '@simulacrum/common/trait'
import { ProgressionTable } from '@simulacrum/common/progression-table'
import { Characteristic, CharacteristicValue } from '@simulacrum/common/characteristic'
import { ApplicationContext } from '@simulacrum/common/application'
import { Ability, ActionType } from '@simulacrum/common/ability'
import { LoadoutTypeReference } from '@simulacrum/common/loadout'
import { Arrays, ObjectPaths, Objects } from '@bessemer/cornerstone'

export const MaxLevel = 20
export const MinAbilityScore = 1
export const MaxAbilityScore = 30
const DefaultInitialValue = 10

/**
 * A single choice the character gets at a given level, along with the values (traits or abilities) that can fill it. Values whose
 * prerequisites aren't met at that point are left out.
 */
export type CharacterOptionChoice = {
  key: string
  level: number
  option: CharacterOption
  selection: CharacterOptionValue | null
  values: Array<CharacterOptionValue>
}

/**
 * The characteristics a player sets directly (e.g. ability scores), as opposed to ones derived from other values.
 */
export const getInitialValueCharacteristics = (context: ApplicationContext): Array<Characteristic<number>> => {
  return context.client.ruleset.playerCharacteristics.filter((it) => Objects.isNil(it.baseValue)) as Array<Characteristic<number>>
}

/**
 * The characteristics worked out from other values (e.g. ability modifiers, Proficiency Bonus, or Hit Points), as opposed to ones the
 * player sets directly.
 */
export const getDerivedCharacteristics = (context: ApplicationContext): Array<Characteristic<number>> => {
  return context.client.ruleset.playerCharacteristics.filter((it) => Objects.isPresent(it.baseValue)) as Array<Characteristic<number>>
}

/**
 * The form field name for a characteristic's initial value, e.g. "initialValues.strength".
 */
export const getInitialValueFieldName = (characteristic: Characteristic<number>): `initialValues.${string}` => {
  return `initialValues.${characteristic.path.map((it) => (Array.isArray(it) ? it[0] : it)).join('.')}`
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
 * Fills `choice` with `value`, replacing the choice's current selection. Passing `null` clears the choice. Only this choice's selection
 * is touched, since the same option can be granted more than once at a level (e.g. three weapon masteries).
 */
export const selectValue = (
  character: CharacterRecord,
  choice: CharacterOptionChoice,
  value: CharacterOptionValue | null,
  context: ApplicationContext
): CharacterRecord => {
  const row = [...(character.selections[choice.level] ?? [])]
  const newSelection = Objects.isNil(value) ? [] : [{ option: choice.option.id, selection: value.id }]
  const existingIndex = Objects.isNil(choice.selection)
    ? -1
    : row.findIndex((it) => it.option === choice.option.id && it.selection === choice.selection!.id)

  if (existingIndex === -1) {
    row.push(...newSelection)
  } else {
    row.splice(existingIndex, 1, ...newSelection)
  }

  return normalizeSelections({ ...character, selections: { ...character.selections, [choice.level]: row } }, context)
}

/**
 * Fills a group of choices for the same option at the same level (e.g. the three weapon mastery choices) with `values`, replacing the
 * group's current selections. Values beyond the number of choices are ignored.
 */
export const selectValuesForChoices = (
  character: CharacterRecord,
  choices: Array<CharacterOptionChoice>,
  values: Array<CharacterOptionValue>,
  context: ApplicationContext
): CharacterRecord => {
  const { level, option } = choices[0]!
  const row = [...(character.selections[level] ?? [])]

  choices.forEach((choice) => {
    const index = Objects.isNil(choice.selection) ? -1 : row.findIndex((it) => it.option === option.id && it.selection === choice.selection!.id)
    if (index !== -1) {
      row.splice(index, 1)
    }
  })

  row.push(...values.slice(0, choices.length).map((value) => ({ option: option.id, selection: value.id })))
  return normalizeSelections({ ...character, selections: { ...character.selections, [level]: row } }, context)
}

// Drops any selections that are no longer valid, e.g. a fighting style after the Fighter class selection is changed, along with any
// loadout abilities that no longer fit, e.g. cantrips after the Wizard class selection is removed
const normalizeSelections = (character: CharacterRecord, context: ApplicationContext): CharacterRecord => {
  const sheet = Characters.buildCharacterDefinition(character, context)
  return { ...character, selections: sheet.selections, selectedAbilities: sheet.selectedAbilities }
}

/**
 * The abilities the character could put in its slots of `loadoutType`, e.g. the cantrips a Wizard knows.
 */
export const getLoadoutAbilities = (sheet: CharacterSheet, loadoutType: LoadoutTypeReference): Array<Ability> => {
  return sheet.abilities.filter((it) => it.loadout === loadoutType).map((it) => it.ability)
}

/**
 * Puts `abilities` in the character's slots of `loadoutType`, replacing what's there. Abilities beyond the number of slots are left out.
 */
export const selectLoadoutAbilities = (
  character: CharacterRecord,
  loadoutType: LoadoutTypeReference,
  abilities: Array<Ability>,
  context: ApplicationContext
): CharacterRecord => {
  const loadoutAbilities = getLoadoutAbilities(Characters.buildCharacterDefinition(character, context), loadoutType).map((it) => it.id)
  const otherAbilities = Arrays.difference(character.selectedAbilities, loadoutAbilities)
  return normalizeSelections({ ...character, selectedAbilities: [...otherAbilities, ...abilities.map((it) => it.id)] }, context)
}

/**
 * Labels an option by its own label if it has one, otherwise by the archetypes its traits are drawn from, e.g. "Class" or
 * "Fighting Style".
 */
export const getOptionLabel = (option: CharacterOption, context: ApplicationContext): string => {
  if (Objects.isPresent(option.label)) {
    return option.label
  }

  const archetypeNames = option.filter.archetypes.map((it) => Archetypes.getArchetype(it, context).name)
  return !Arrays.isEmpty(archetypeNames) ? archetypeNames.join(' / ') : option.type === CharacterOptionType.SelectTrait ? 'Trait' : 'Ability'
}

// Whether an option's value is a trait, as opposed to an ability (which has actions)
export const isTrait = (value: CharacterOptionValue): value is Trait => {
  return !('actions' in value)
}

/**
 * Labels an option's value (a trait or an ability) by the archetypes it belongs to, e.g. "Rank 2 / Evocation" or "Class".
 */
export const getValueCaption = (value: CharacterOptionValue, context: ApplicationContext): string => {
  return value.archetypes.map((it) => Archetypes.getArchetype(it, context).name).join(' / ')
}

export const getCharacterOptionChoices = (sheet: CharacterSheet): Array<CharacterOptionChoice> => {
  return ProgressionTables.getEntries(sheet.choices).map(([level, choice], index) => ({
    key: `${level}-${choice.option.id}-${index}`,
    level,
    option: choice.option,
    selection: CharacterOptions.getSelectedValue(choice),
    values: choice.values,
  }))
}

/**
 * A characteristic's value once the character's effects are applied, e.g. an ability score after a Background's increase.
 */
export const getCharacteristicValue = (sheet: CharacterSheet, characteristic: Characteristic<number>): number => {
  // FUTURE excessive casting - see Characters.buildExpressionContext
  const value = ObjectPaths.getValue(characteristic.path as any, sheet.characteristics) as any as CharacteristicValue<number>
  return value.value
}

/**
 * The traits `trait` grants outright that the character has, e.g. a Background's skill proficiencies, along with any those grant in
 * turn, and the level each one applied at. A granted trait with prerequisites may apply at a later level than the trait granting it.
 */
export const getGrantedTraits = (
  trait: Trait,
  heldTraits: ProgressionTable<TraitReference>,
  context: ApplicationContext
): Array<{ trait: Trait; level: number }> => {
  return Effects.filter(trait.effects, Effects.GainTrait).flatMap((it) => {
    const entry = ProgressionTables.getEntries(heldTraits).find(([_, heldTrait]) => heldTrait === it.trait)
    if (Objects.isNil(entry)) {
      return []
    }

    const grantedTrait = Traits.getTrait(it.trait, context)
    return [{ trait: grantedTrait, level: entry[0] }, ...getGrantedTraits(grantedTrait, heldTraits, context)]
  })
}

const ActionTypeLabels: Record<ActionType, string> = {
  [ActionType.Standard]: 'Action',
  [ActionType.Bonus]: 'Bonus Action',
  [ActionType.Reaction]: 'Reaction',
  [ActionType.Free]: 'Free',
}

export const getActionTypeLabel = (actionType: ActionType): string => {
  return ActionTypeLabels[actionType]
}

/**
 * Labels what it takes to use an ability, e.g. "Bonus Action", or "Free or Reaction" when its actions differ. Null if it has no actions.
 */
export const getActionLabel = (ability: Ability): string | null => {
  const actionTypes = Arrays.dedupe(ability.actions.map((it) => it.action))
  return Arrays.isEmpty(actionTypes) ? null : actionTypes.map(getActionTypeLabel).join(' or ')
}

/**
 * Whether an ability's actions are worth listing one by one: when any of them has a description of its own (e.g. the options of a
 * transformation). Otherwise the ability's description covers them, and its action label is enough.
 */
export const hasDescribedActions = (ability: Ability): boolean => {
  return ability.actions.some((it) => Objects.isPresent(it.description))
}
