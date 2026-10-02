import { Trait, TraitFilter, TraitFilterProps, TraitReference } from '@simulacrum/common/trait'
import { Abilities, ProgressionTables, Traits } from '@simulacrum/common'
import { Ability, AbilityFilter, AbilityFilterProps, AbilityReference } from '@simulacrum/common/ability'
import { LoadoutType, LoadoutTypeReference } from '@simulacrum/common/loadout'
import { ProgressionTable } from '@simulacrum/common/progression-table'
import { Reference } from '@bessemer/cornerstone/reference'
import { Arrays, Assertions, Eithers, Objects } from '@bessemer/cornerstone'
import { EvaluateExpression } from '@bessemer/cornerstone/expression'
import { ApplicationContext } from '@simulacrum/common/application'

export enum CharacterOptionType {
  SelectTrait = 'SelectTrait',
  SelectAbility = 'SelectAbility',
}

export type CharacterOptionReference = Reference<'CharacterOption'>

export type CharacterOptionValueReference = TraitReference | AbilityReference
export type CharacterOptionValue = Trait | Ability

type CharacterOptionProps = {
  id: CharacterOptionReference
  label: string | null
}

export type SelectTraitOption = CharacterOptionProps & {
  type: CharacterOptionType.SelectTrait
  filter: TraitFilter
}

export type SelectAbilityOption = CharacterOptionProps & {
  type: CharacterOptionType.SelectAbility
  filter: AbilityFilter
  loadout: LoadoutTypeReference | null
}

export type CharacterOption = SelectTraitOption | SelectAbilityOption

export type CharacterChoice = {
  option: CharacterOption
  selection: CharacterSelection | null
  values: Array<CharacterOptionValue>
  inactiveValues: Array<CharacterOptionValue>
}

export type CharacterSelection = {
  option: CharacterOptionReference
  selection: CharacterOptionValueReference
}

export const selectTraitOption = (reference: string, filter: TraitFilterProps, label: string | null = null): SelectTraitOption => {
  return {
    id: reference as CharacterOptionReference,
    type: CharacterOptionType.SelectTrait,
    filter: Traits.filter(filter),
    label,
  }
}

export const selectAbilityOption = (
  reference: string,
  filter: AbilityFilterProps,
  label: string | null = null,
  loadout: LoadoutType | null = null
): SelectAbilityOption => {
  return {
    id: reference as CharacterOptionReference,
    type: CharacterOptionType.SelectAbility,
    filter: Abilities.filter(filter),
    loadout: loadout?.id ?? null,
    label,
  }
}

const getOptionValues = (option: CharacterOption, context: ApplicationContext): Array<CharacterOptionValue> => {
  switch (option.type) {
    case CharacterOptionType.SelectTrait:
      return Traits.applyFilter(context.client.ruleset.traits, option.filter)
    case CharacterOptionType.SelectAbility:
      return Abilities.applyFilter(context.client.ruleset.abilities, option.filter)
  }
}

export const evaluateChoice = (
  option: CharacterOption,
  held: { traits: Array<TraitReference>; abilities: Array<AbilityReference> },
  evaluate: EvaluateExpression,
  context: ApplicationContext
): CharacterChoice => {
  const available = getOptionValues(option, context).filter((value) => {
    return option.type === CharacterOptionType.SelectTrait
      ? (value as Trait).repeatable || !Arrays.contains(held.traits, value.id)
      : !Arrays.contains(held.abilities, value.id)
  })

  const [values, inactiveValues] = Arrays.bisect(available, (value) => {
    const prerequisitesSatisfied = value.prerequisites.every(evaluate)
    return prerequisitesSatisfied ? Eithers.left(value) : Eithers.right(value)
  })

  const [valuesWithoutPrerequisites, valuesWithPrerequisites] = Arrays.partition(values, (it) => !Arrays.isEmpty(it.prerequisites))

  return {
    option,
    selection: null,
    values: [...valuesWithPrerequisites, ...valuesWithoutPrerequisites],
    inactiveValues,
  }
}

export const getSelectedValue = (choice: CharacterChoice): CharacterOptionValue | null => {
  return Objects.isNil(choice.selection) ? null : choice.values.find((it) => it.id === choice.selection!.selection) ?? null
}

export const buildSelection = (option: CharacterOptionReference | CharacterOption, selection: CharacterOptionValue): CharacterSelection => {
  return {
    option: typeof option === 'string' ? option : option.id,
    selection: selection.id,
  }
}

export const isSelected = (
  selections: ProgressionTable<CharacterSelection>,
  option: CharacterOptionReference | CharacterOption,
  selection: CharacterOptionValue
): boolean => {
  const matchingSelections = ProgressionTables.getValues(selections).filter((it) => it.option === (typeof option === 'string' ? option : option.id))
  return Objects.isPresent(matchingSelections.find((it) => it.selection === selection.id))
}

export const isAllowedValue = (choice: CharacterChoice, optionValue: CharacterOptionValueReference) => {
  return Arrays.contains(
    choice.values.map((it) => it.id),
    optionValue
  )
}

export const validateSelection = (choices: ProgressionTable<CharacterChoice>, selection: CharacterSelection): number => {
  const entry = ProgressionTables.getEntries(choices).find(([_, choice]) => choice.option.id === selection.option && Objects.isNil(choice.selection))
  Assertions.assertPresent(entry)

  const [level, choice] = entry
  Assertions.assert(isAllowedValue(choice, selection.selection))

  return level
}
