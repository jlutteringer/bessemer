import { Trait, TraitReference } from '@simulacrum/ruleset/trait'
import { ResourcePoolDefinition, ResourcePoolReference } from '@simulacrum/ruleset/resource-pool'
import { CharacterOption } from '@simulacrum/ruleset/character-option'
import * as Abilities from '@simulacrum/ruleset/ability'
import { Ability, AbilityPatchProps, AbilityReference } from '@simulacrum/ruleset/ability'
import { Characteristic, CharacteristicReference } from '@simulacrum/ruleset/characteristic'
import { Modifier } from '@simulacrum/ruleset/attribute'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import * as Tiptap from '@bessemer/core/tiptap'
import { LoadoutType, LoadoutTypeReference } from '@simulacrum/ruleset/loadout'
import { Expression } from '@bessemer/cornerstone/expression'
import { ActionEffect, ActionEffectFilter } from '@simulacrum/ruleset/action-effect'

export enum CharacterEffectTypeEnum {
  Descriptive = 'Descriptive',
  GainCharacterOption = 'GainCharacterOption',
  GainTrait = 'GainTrait',
  GainCharacteristic = 'GainCharacteristic',
  ModifyCharacteristic = 'ModifyCharacteristic',
  GainAbility = 'GainAbility',
  ModifyAbility = 'ModifyAbility',
  GainResourcePool = 'GainResourcePool',
  ModifyResourcePool = 'ModifyResourcePool',
  GainLoadoutSlot = 'GainLoadoutSlot',
  Conditional = 'Conditional',
  ModifyActionEffect = 'ModifyActionEffect',
}

export interface CharacterEffect {
  type: CharacterEffectTypeEnum
  source?: CharacterEffectSource
}

export enum CharacterEffectSourceType {
  Ruleset = 'Ruleset',
  Trait = 'Trait',
  Ability = 'Ability',
}

export type CharacterEffectSource =
  | { type: CharacterEffectSourceType.Ruleset }
  | { type: CharacterEffectSourceType.Trait; trait: TraitReference }
  | { type: CharacterEffectSourceType.Ability; ability: AbilityReference }

export type CharacterEffectType<T extends CharacterEffect> = { type: CharacterEffectTypeEnum }

export const Descriptive: CharacterEffectType<DescriptiveEffect> = { type: CharacterEffectTypeEnum.Descriptive }

export type DescriptiveEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.Descriptive
  description: RichTextJson
}

export const GainCharacterOption: CharacterEffectType<GainCharacterOptionEffect> = { type: CharacterEffectTypeEnum.GainCharacterOption }

export type GainCharacterOptionEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.GainCharacterOption
  option: CharacterOption
}

export const Conditional: CharacterEffectType<ConditionalEffect> = { type: CharacterEffectTypeEnum.Conditional }

export type ConditionalEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.Conditional
  condition: Expression<boolean>
  effects: Array<CharacterEffect>
}

export const GainTrait: CharacterEffectType<GainTraitEffect> = { type: CharacterEffectTypeEnum.GainTrait }

export type GainTraitEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.GainTrait
  trait: TraitReference
}

export const GainCharacteristic: CharacterEffectType<GainCharacteristicEffect> = { type: CharacterEffectTypeEnum.GainCharacteristic }

export type GainCharacteristicEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.GainCharacteristic
  characteristic: CharacteristicReference
}

export const ModifyCharacteristic: CharacterEffectType<ModifyCharacteristicEffect> = { type: CharacterEffectTypeEnum.ModifyCharacteristic }

export type ModifyCharacteristicEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.ModifyCharacteristic
  characteristic: CharacteristicReference
  modifier: Modifier<unknown>
}

// The effects an ability can have
export type AbilityEffect = DescriptiveEffect | ModifyCharacteristicEffect

export const GainAbility: CharacterEffectType<GainAbilityEffect> = { type: CharacterEffectTypeEnum.GainAbility }

export type GainAbilityEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.GainAbility
  name: string
  ability: AbilityReference
  loadout: LoadoutTypeReference | null
}

export const GainResourcePool: CharacterEffectType<GainResourcePoolEffect> = { type: CharacterEffectTypeEnum.GainResourcePool }

export type GainResourcePoolEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.GainResourcePool
  resourcePool: ResourcePoolReference
}

export const ModifyResourcePool: CharacterEffectType<ModifyResourcePoolEffect> = { type: CharacterEffectTypeEnum.ModifyResourcePool }

export type ModifyResourcePoolEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.ModifyResourcePool
  resourcePool: ResourcePoolReference
  modifier: Modifier<unknown>
}

export const ModifyAbility: CharacterEffectType<ModifyAbilityEffect> = { type: CharacterEffectTypeEnum.ModifyAbility }

export type ModifyAbilityEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.ModifyAbility
  ability: AbilityReference
  modifier: Modifier<unknown>
}

export const ModifyActionEffect: CharacterEffectType<ModifyActionEffectCharacterEffect> = { type: CharacterEffectTypeEnum.ModifyActionEffect }

export type ModifyActionEffectCharacterEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.ModifyActionEffect
  filter: ActionEffectFilter
  modifier: Modifier<ActionEffect>
}

export const GainLoadoutSlot: CharacterEffectType<GainLoadoutSlotEffect> = { type: CharacterEffectTypeEnum.GainLoadoutSlot }

export type GainLoadoutSlotEffect = CharacterEffect & {
  type: CharacterEffectTypeEnum.GainLoadoutSlot
  loadoutType: LoadoutTypeReference
}

export const descriptive = (description: string): DescriptiveEffect => {
  return {
    type: CharacterEffectTypeEnum.Descriptive,
    description: Tiptap.markdownToJson(description),
  }
}

export const gainCharacterOption = (option: CharacterOption): GainCharacterOptionEffect => {
  return {
    type: CharacterEffectTypeEnum.GainCharacterOption,
    option,
  }
}

export const conditional = (condition: Expression<boolean>, effects: Array<CharacterEffect>): ConditionalEffect => {
  return {
    type: CharacterEffectTypeEnum.Conditional,
    condition,
    effects,
  }
}

export const gainTrait = (trait: Trait): GainTraitEffect => {
  return {
    type: CharacterEffectTypeEnum.GainTrait,
    trait: trait.id,
  }
}

export const gainAbility = (ability: Ability, loadout?: LoadoutType | null): GainAbilityEffect => {
  return {
    type: CharacterEffectTypeEnum.GainAbility,
    name: `Gain Ability: ${ability.name}`,
    ability: ability.id,
    loadout: loadout === undefined ? ability.loadout : loadout?.id ?? null,
  }
}

export const gainCharacteristic = (characteristic: Characteristic): GainCharacteristicEffect => {
  return {
    type: CharacterEffectTypeEnum.GainCharacteristic,
    characteristic: characteristic.id,
  }
}

export const modifyCharacteristic = (characteristic: Characteristic, modifier: Modifier<unknown>): ModifyCharacteristicEffect => {
  return {
    type: CharacterEffectTypeEnum.ModifyCharacteristic,
    characteristic: characteristic.id,
    modifier,
  }
}

export const gainResourcePool = (resourcePool: ResourcePoolDefinition): GainResourcePoolEffect => {
  return {
    type: CharacterEffectTypeEnum.GainResourcePool,
    resourcePool: resourcePool.id,
  }
}

export const modifyAbility = (ability: Ability, modifier: Modifier<AbilityPatchProps>): ModifyAbilityEffect => {
  return {
    type: CharacterEffectTypeEnum.ModifyAbility,
    ability: ability.id,
    modifier: { ...modifier, patch: Abilities.resolvePatch(modifier.patch) },
  }
}

export const modifyResourcePool = (resourcePool: ResourcePoolDefinition, modifier: Modifier<unknown>): ModifyResourcePoolEffect => {
  return {
    type: CharacterEffectTypeEnum.ModifyResourcePool,
    resourcePool: resourcePool.id,
    modifier,
  }
}

export const gainLoadoutSlot = (loadoutType: LoadoutType): GainLoadoutSlotEffect => {
  return {
    type: CharacterEffectTypeEnum.GainLoadoutSlot,
    loadoutType: loadoutType.id,
  }
}

export const modifyActionEffect = <E extends ActionEffect>(
  filter: ActionEffectFilter<E>,
  modifier: Modifier<E>
): ModifyActionEffectCharacterEffect => {
  return {
    type: CharacterEffectTypeEnum.ModifyActionEffect,
    filter: filter as ActionEffectFilter,
    modifier: modifier as Modifier<ActionEffect>,
  }
}
