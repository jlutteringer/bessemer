import { CharacterRecord, CharacterSheet } from '@simulacrum/engine/character/character'
import { CharacterOption, CharacterOptionValue, CharacterSelection } from '@simulacrum/engine/character/character-option'
import { Abilities, Tags, Characteristics, Effects, ProgressionTables, Traits, CharacterOptions, Characters } from '@simulacrum/engine'
import { Trait, TraitReference } from '@simulacrum/engine/trait'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { Characteristic, CharacteristicGroup } from '@simulacrum/engine/characteristic'
import { Ruleset, RulesetConfiguration } from '@simulacrum/engine/ruleset'
import { Ability } from '@simulacrum/engine/ability'
import { LoadoutTypeReference } from '@simulacrum/engine/loadout'
import { Arrays, ObjectPaths, Objects } from '@bessemer/cornerstone'
import { getPassiveEffects } from '@simulacrum/ui/components/ruleset-entity-model'

export const MaxLevel = 20
const DefaultInitialValue = 0

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
export const getInitialValueCharacteristics = (ruleset: Ruleset): Array<Characteristic> => {
  return Characteristics.getCharacteristics(ruleset).filter((it) => Objects.isNil(it.baseValue))
}

export type CharacteristicSection = {
  group: CharacteristicGroup | null
  characteristics: Array<Characteristic>
}

/**
 * The character's characteristics, grouped in the order the ruleset lists its groups, followed by any that aren't in a group.
 */
export const getCharacteristicSections = (ruleset: Ruleset): Array<CharacteristicSection> => {
  const characteristicGroups = Characteristics.getCharacteristicGroups(ruleset)
  const characteristics = Characteristics.getCharacteristics(ruleset)

  const sections = [
    ...characteristicGroups.map((group) => ({ group, characteristics: characteristics.filter((it) => it.group === group.id) })),
    { group: null, characteristics: characteristics.filter((it) => !characteristicGroups.some((group) => group.id === it.group)) },
  ]

  return sections.filter((it) => !Arrays.isEmpty(it.characteristics))
}

/**
 * The form field name for a characteristic's initial value, e.g. "initialValues.strength".
 */
export const getInitialValueFieldName = (characteristic: Characteristic): `initialValues.${string}` => {
  return `initialValues.${characteristic.path.map((it) => (Array.isArray(it) ? it[0] : it)).join('.')}`
}

export const setInitialValue = (character: CharacterRecord, characteristic: Characteristic, value: number): CharacterRecord => {
  const initialValues = ObjectPaths.applyAnyValue(characteristic.path, character.initialValues, value) as CharacterRecord['initialValues']
  return { ...character, initialValues }
}

export const newCharacter = (configuration: RulesetConfiguration, ruleset: Ruleset): CharacterRecord => {
  const character: CharacterRecord = {
    ruleset: configuration,
    name: '',
    level: 1,
    initialValues: {},
    selections: ProgressionTables.empty(1),
    selectedAbilities: [],
  }

  return getInitialValueCharacteristics(ruleset).reduce((it, characteristic) => setInitialValue(it, characteristic, DefaultInitialValue), character)
}

export const setLevel = (character: CharacterRecord, level: number, ruleset: Ruleset): CharacterRecord => {
  return normalizeSelections({ ...character, level, selections: resizeSelections(character.selections, level) }, ruleset)
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
  ruleset: Ruleset
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

  return normalizeSelections({ ...character, selections: { ...character.selections, [choice.level]: row } }, ruleset)
}

/**
 * Fills a group of choices for the same option at the same level (e.g. the three weapon mastery choices) with `values`, replacing the
 * group's current selections. Values beyond the number of choices are ignored.
 */
export const selectValuesForChoices = (
  character: CharacterRecord,
  choices: Array<CharacterOptionChoice>,
  values: Array<CharacterOptionValue>,
  ruleset: Ruleset
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
  return normalizeSelections({ ...character, selections: { ...character.selections, [level]: row } }, ruleset)
}

// Drops any selections that are no longer valid, e.g. a fighting style after the Fighter class selection is changed, along with any
// loadout abilities that no longer fit, e.g. cantrips after the Wizard class selection is removed
const normalizeSelections = (character: CharacterRecord, ruleset: Ruleset): CharacterRecord => {
  const sheet = Characters.buildCharacterDefinition(character, ruleset)
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
  ruleset: Ruleset
): CharacterRecord => {
  const loadoutAbilities = getLoadoutAbilities(Characters.buildCharacterDefinition(character, ruleset), loadoutType).map((it) => it.id)
  const otherAbilities = Arrays.difference(character.selectedAbilities, loadoutAbilities)
  return normalizeSelections({ ...character, selectedAbilities: [...otherAbilities, ...abilities.map((it) => it.id)] }, ruleset)
}

// Whether an option's value is a trait, as opposed to an ability (which has actions)
export const isTrait = (value: CharacterOptionValue): value is Trait => {
  return !('actions' in value)
}

export const getPassiveTraits = (sheet: CharacterSheet, ruleset: Ruleset): Array<Trait> => {
  return Traits.getTraitsByIds(Arrays.dedupe(ProgressionTables.getValues(sheet.traits)), ruleset).filter(
    (it) => !Arrays.isEmpty(getPassiveEffects(it))
  )
}

/**
 * Labels an option's value (a trait or an ability) by the tags it belongs to, e.g. "Rank 2 / Evocation" or "Class".
 */
export const getValueCaption = (value: CharacterOptionValue, ruleset: Ruleset): string => {
  return value.tags.map((it) => Tags.getTagById(it, ruleset).name).join(' / ')
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
 * The traits `trait` grants outright that the character has, e.g. a Background's skill proficiencies, along with any those grant in
 * turn, and the level each one applied at. A granted trait with prerequisites may apply at a later level than the trait granting it.
 */
export const getGrantedTraits = (
  trait: Trait,
  heldTraits: ProgressionTable<TraitReference>,
  ruleset: Ruleset
): Array<{ trait: Trait; level: number }> => {
  return Effects.filter(trait.effects, Effects.GainTrait).flatMap((it) => {
    const entry = ProgressionTables.getEntries(heldTraits).find(([_, heldTrait]) => heldTrait === it.trait)
    if (Objects.isNil(entry)) {
      return []
    }

    const grantedTrait = Traits.getTraitById(it.trait, ruleset)
    return [{ trait: grantedTrait, level: entry[0] }, ...getGrantedTraits(grantedTrait, heldTraits, ruleset)]
  })
}
