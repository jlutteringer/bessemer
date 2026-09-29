import { Trait, TraitFilter, TraitFilterProps, TraitReference } from '@simulacrum/common/trait'
import { ProgressionTables, Traits } from '@simulacrum/common'
import { ProgressionTable } from '@simulacrum/common/progression-table'
import { Reference } from '@bessemer/cornerstone/reference'
import { Arrays, Assertions, Eithers, Objects } from '@bessemer/cornerstone'
import { EvaluateExpression } from '@bessemer/cornerstone/expression'
import { ApplicationContext } from '@simulacrum/common/application'

export enum CharacterOptionType {
  SelectTrait = 'SelectTrait',
}

export type CharacterOptionReference = Reference<'CharacterOption'>

export type CharacterOptionValueReference = TraitReference
export type CharacterOptionValue = Trait

export type CharacterOption = { id: CharacterOptionReference } & {
  type: CharacterOptionType
  traitFilter: TraitFilter
}

export type CharacterChoice = {
  option: CharacterOptionReference
  values: Array<CharacterOptionValue>
  inactiveValues: Array<CharacterOptionValue>
}

export type CharacterSelection = {
  option: CharacterOptionReference
  selection: CharacterOptionValueReference
}

export type EvaluateCharacterOptionsResult = {
  selections: ProgressionTable<CharacterSelection>
  choices: ProgressionTable<CharacterChoice>
}

export const selectTraitOption = (reference: string, traitFilter: TraitFilterProps): CharacterOption => {
  return {
    id: reference as CharacterOptionReference,
    type: CharacterOptionType.SelectTrait,
    traitFilter: Traits.filter(traitFilter),
  }
}

export const evaluateChoice = (
  option: CharacterOption,
  selectedTraits: Array<TraitReference>,
  evaluate: EvaluateExpression,
  context: ApplicationContext
): CharacterChoice => {
  let traits = Traits.applyFilter(context.client.ruleset.traits, option.traitFilter)

  traits = traits.filter((trait) => {
    // Filter out traits we have already selected
    return !Arrays.contains(selectedTraits, trait.id)
  })

  const [values, inactiveValues] = Arrays.bisect(traits, (trait) => {
    const prerequisitesSatisfied = trait.prerequisites.every(evaluate)
    return prerequisitesSatisfied ? Eithers.left(trait) : Eithers.right(trait)
  })

  return {
    option: option.id,
    values,
    inactiveValues,
  }
}

export const buildSelection = (option: CharacterOptionReference | CharacterOption, selection: CharacterOptionValue | Trait): CharacterSelection => {
  return {
    option: typeof option === 'string' ? option : option.id,
    selection: selection.id,
  }
}

export const getSelection = (
  selections: ProgressionTable<CharacterSelection>,
  option: CharacterOptionReference | CharacterOption,
  level: number
): CharacterSelection | null => {
  const selectionArray = selections[level] ?? []
  const matchingSelection = selectionArray.find((it) => it.option === (typeof option === 'string' ? option : option.id))
  return matchingSelection ?? null
}

export const hasSelection = (
  selections: ProgressionTable<CharacterSelection>,
  option: CharacterOptionReference | CharacterOption,
  level: number
): boolean => {
  return Objects.isPresent(getSelection(selections, option, level))
}

export const isSelected = (
  selections: ProgressionTable<CharacterSelection>,
  option: CharacterOptionReference | CharacterOption,
  selection: CharacterOptionValue | Trait
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
  const entry = ProgressionTables.getEntries(choices).find(([_, choice]) => choice.option === selection.option)
  Assertions.assertPresent(entry)

  const [level, choice] = entry
  Assertions.assert(isAllowedValue(choice, selection.selection))

  return level
}
