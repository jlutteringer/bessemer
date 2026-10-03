import { Trait, TraitFilter, TraitFilterProps, TraitReference } from '@simulacrum/ruleset/trait'
import { Abilities, ProgressionTables, Traits } from '@simulacrum/ruleset'
import { Ability, AbilityFilter, AbilityFilterProps, AbilityReference } from '@simulacrum/ruleset/ability'
import { LoadoutType, LoadoutTypeReference } from '@simulacrum/ruleset/loadout'
import { Reference } from '@bessemer/cornerstone/reference'
import { Ruleset } from '@simulacrum/ruleset/ruleset'

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
