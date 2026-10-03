export * from '@simulacrum/ruleset/character-option'
import {
  CharacterChoice,
  CharacterOption,
  CharacterOptionReference,
  CharacterOptionType,
  CharacterOptionValue,
  CharacterOptionValueReference,
  CharacterSelection,
} from '@simulacrum/ruleset/character-option'
import { Trait, TraitReference } from '@simulacrum/engine/trait'
import { Abilities, ProgressionTables, Traits } from '@simulacrum/engine'
import { AbilityReference } from '@simulacrum/engine/ability'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { Arrays, Assertions, Eithers, Objects } from '@bessemer/cornerstone'
import { EvaluateExpression } from '@bessemer/cornerstone/expression'
import { Ruleset } from '@simulacrum/engine/ruleset'

export const evaluateChoice = (
  option: CharacterOption,
  held: { traits: Array<TraitReference>; abilities: Array<AbilityReference> },
  evaluate: EvaluateExpression,
  ruleset: Ruleset
): CharacterChoice => {
  const available = getOptionValues(option, ruleset).filter((value) => {
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

const getOptionValues = (option: CharacterOption, ruleset: Ruleset): Array<CharacterOptionValue> => {
  switch (option.type) {
    case CharacterOptionType.SelectTrait:
      return Traits.applyFilter(ruleset.traits, option.filter)
    case CharacterOptionType.SelectAbility:
      return Abilities.applyFilter(ruleset.abilities, option.filter)
  }
}
