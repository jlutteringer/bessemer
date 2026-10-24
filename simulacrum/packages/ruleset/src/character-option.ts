import { Objects } from '@bessemer/cornerstone'
import { Trait, TraitFilter, TraitFilterProps, TraitReference } from '@simulacrum/ruleset/trait'
import { Abilities, Traits } from '@simulacrum/ruleset'
import { Ability, AbilityFilter, AbilityFilterProps, AbilityReference } from '@simulacrum/ruleset/ability'
import { LoadoutType, LoadoutTypeReference } from '@simulacrum/ruleset/loadout'
import * as Tiptap from '@bessemer/core/tiptap'
import { buildReference, RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { Ruleset } from '@simulacrum/ruleset/ruleset'

export enum CharacterOptionType {
  SelectTrait = 'SelectTrait',
  SelectAbility = 'SelectAbility',
}

export type CharacterOptionReference = RulesetEntityReference<typeof RulesetEntityType.CharacterOption>

export type CharacterOptionValueReference = TraitReference | AbilityReference

export type CharacterOptionValue = Trait | Ability

type CharacterOptionBase = RulesetEntity & {
  id: CharacterOptionReference
}

export type SelectTraitOption = CharacterOptionBase & {
  type: CharacterOptionType.SelectTrait
  filter: TraitFilter
}

export type SelectAbilityOption = CharacterOptionBase & {
  type: CharacterOptionType.SelectAbility
  filter: AbilityFilter
  loadout?: LoadoutTypeReference | null
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

export type SelectTraitOptionProps = RulesetEntityProps & {
  filter: TraitFilterProps
}

export const selectTraitOption = (reference: string, props: SelectTraitOptionProps): SelectTraitOption => {
  return {
    id: buildReference(RulesetEntityType.CharacterOption, reference),
    name: props.name,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
    type: CharacterOptionType.SelectTrait,
    filter: Traits.filter(props.filter),
  }
}

export type SelectAbilityOptionProps = RulesetEntityProps & {
  filter: AbilityFilterProps
  loadout?: LoadoutType | null
}

export const selectAbilityOption = (reference: string, props: SelectAbilityOptionProps): SelectAbilityOption => {
  return {
    id: buildReference(RulesetEntityType.CharacterOption, reference),
    name: props.name,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
    type: CharacterOptionType.SelectAbility,
    filter: Abilities.filter(props.filter),
    ...(props.loadout === undefined ? {} : { loadout: props.loadout?.id ?? null }),
  }
}
