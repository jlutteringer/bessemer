import { Trait, TraitReference } from '@simulacrum/ruleset/trait'
import { ResourcePoolDefinition, ResourcePoolReference } from '@simulacrum/ruleset/resource-pool'
import { CharacterOption } from '@simulacrum/ruleset/character-option'
import { Ability, AbilityReference } from '@simulacrum/ruleset/ability'
import { Characteristic, CharacteristicReference } from '@simulacrum/ruleset/characteristic'
import { Modifier } from '@simulacrum/ruleset/attribute'
import { RichText } from '@bessemer/cornerstone/rich-text'
import { LoadoutType, LoadoutTypeReference } from '@simulacrum/ruleset/loadout'

export enum EffectTypeEnum {
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
}

export interface Effect {
  type: EffectTypeEnum
  source?: EffectSource
}

export enum EffectSourceType {
  Ruleset = 'Ruleset',
  Trait = 'Trait',
  Ability = 'Ability',
}

export type EffectSource =
  | { type: EffectSourceType.Ruleset }
  | { type: EffectSourceType.Trait; trait: TraitReference }
  | { type: EffectSourceType.Ability; ability: AbilityReference }

export type EffectType<T extends Effect> = { type: EffectTypeEnum }

export const Descriptive: EffectType<DescriptiveEffect> = { type: EffectTypeEnum.Descriptive }

export type DescriptiveEffect = Effect & {
  type: EffectTypeEnum.Descriptive
  description: RichText
}

export const GainCharacterOption: EffectType<GainCharacterOptionEffect> = { type: EffectTypeEnum.GainCharacterOption }

export type GainCharacterOptionEffect = Effect & {
  type: EffectTypeEnum.GainCharacterOption
  option: CharacterOption
}

export const GainTrait: EffectType<GainTraitEffect> = { type: EffectTypeEnum.GainTrait }

export type GainTraitEffect = Effect & {
  type: EffectTypeEnum.GainTrait
  trait: TraitReference
}

export const GainCharacteristic: EffectType<GainCharacteristicEffect> = { type: EffectTypeEnum.GainCharacteristic }

export type GainCharacteristicEffect = Effect & {
  type: EffectTypeEnum.GainCharacteristic
  characteristic: CharacteristicReference<unknown>
}

export const ModifyCharacteristic: EffectType<ModifyCharacteristicEffect> = { type: EffectTypeEnum.ModifyCharacteristic }

export type ModifyCharacteristicEffect = Effect & {
  type: EffectTypeEnum.ModifyCharacteristic
  characteristic: CharacteristicReference<unknown>
  modifier: Modifier<unknown>
}

// The effects an ability can have
export type AbilityEffect = DescriptiveEffect | ModifyCharacteristicEffect

export const GainAbility: EffectType<GainAbilityEffect> = { type: EffectTypeEnum.GainAbility }

export type GainAbilityEffect = Effect & {
  type: EffectTypeEnum.GainAbility
  name: string
  ability: AbilityReference
  loadout: LoadoutTypeReference | null
}

export const GainResourcePool: EffectType<GainResourcePoolEffect> = { type: EffectTypeEnum.GainResourcePool }

export type GainResourcePoolEffect = Effect & {
  type: EffectTypeEnum.GainResourcePool
  resourcePool: ResourcePoolReference
}

export const ModifyResourcePool: EffectType<ModifyResourcePoolEffect> = { type: EffectTypeEnum.ModifyResourcePool }

export type ModifyResourcePoolEffect = Effect & {
  type: EffectTypeEnum.ModifyResourcePool
  resourcePool: ResourcePoolReference
  modifier: Modifier<unknown>
}

export const ModifyAbility: EffectType<ModifyAbilityEffect> = { type: EffectTypeEnum.ModifyAbility }

export type ModifyAbilityEffect = Effect & {
  type: EffectTypeEnum.ModifyAbility
  ability: AbilityReference
  modifier: Modifier<unknown>
}

export const GainLoadoutSlot: EffectType<GainLoadoutSlotEffect> = { type: EffectTypeEnum.GainLoadoutSlot }

export type GainLoadoutSlotEffect = Effect & {
  type: EffectTypeEnum.GainLoadoutSlot
  loadoutType: LoadoutTypeReference
}

export const descriptive = (description: RichText): DescriptiveEffect => {
  return {
    type: EffectTypeEnum.Descriptive,
    description,
  }
}

export const gainCharacterOption = (option: CharacterOption): GainCharacterOptionEffect => {
  return {
    type: EffectTypeEnum.GainCharacterOption,
    option,
  }
}

export const gainTrait = (trait: Trait): GainTraitEffect => {
  return {
    type: EffectTypeEnum.GainTrait,
    trait: trait.id,
  }
}

export const gainAbility = (ability: Ability, loadout: LoadoutType | null = null): GainAbilityEffect => {
  return {
    type: EffectTypeEnum.GainAbility,
    name: `Gain Ability: ${ability.name}`,
    ability: ability.id,
    loadout: loadout?.id ?? null,
  }
}

export const gainCharacteristic = (characteristic: Characteristic<number>): GainCharacteristicEffect => {
  return {
    type: EffectTypeEnum.GainCharacteristic,
    characteristic: characteristic.id,
  }
}

export const modifyCharacteristic = (characteristic: Characteristic<number>, modifier: Modifier<unknown>): ModifyCharacteristicEffect => {
  return {
    type: EffectTypeEnum.ModifyCharacteristic,
    characteristic: characteristic.id,
    modifier,
  }
}

export const gainResourcePool = (resourcePool: ResourcePoolDefinition): GainResourcePoolEffect => {
  return {
    type: EffectTypeEnum.GainResourcePool,
    resourcePool: resourcePool.id,
  }
}

export const modifyAbility = (ability: Ability, modifier: Modifier<unknown>): ModifyAbilityEffect => {
  return {
    type: EffectTypeEnum.ModifyAbility,
    ability: ability.id,
    modifier,
  }
}

export const modifyResourcePool = (resourcePool: ResourcePoolDefinition, modifier: Modifier<unknown>): ModifyResourcePoolEffect => {
  return {
    type: EffectTypeEnum.ModifyResourcePool,
    resourcePool: resourcePool.id,
    modifier,
  }
}

export const gainLoadoutSlot = (loadoutType: LoadoutType): GainLoadoutSlotEffect => {
  return {
    type: EffectTypeEnum.GainLoadoutSlot,
    loadoutType: loadoutType.id,
  }
}
