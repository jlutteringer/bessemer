import { Trait, TraitReference } from '@simulacrum/common/trait'
import { ResourcePoolDefinition, ResourcePoolReference } from '../resource-pool'
import { CharacterOption } from '@simulacrum/common/character/character-option'
import { Ability, AbilityReference } from '@simulacrum/common/ability'
import { Characteristic, CharacteristicReference } from '@simulacrum/common/characteristic'
import { Modifier } from '@simulacrum/common/attribute'

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

export const filter = <T extends Effect>(effects: Array<Effect>, type: EffectType<T>): Array<T> => {
  const matchingEffects = effects.filter((it) => it.type === type.type)
  return matchingEffects as Array<T>
}

export const sourceEffects = (effects: Array<Effect>, source: EffectSource): Array<Effect> => {
  return effects.map((it) => {
    return { ...it, source }
  })
}

export const Descriptive: EffectType<DescriptiveEffect> = { type: EffectTypeEnum.Descriptive }
export type DescriptiveEffect = Effect & {
  type: EffectTypeEnum.Descriptive
  description: string
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

export const GainAbility: EffectType<GainAbilityEffect> = { type: EffectTypeEnum.GainAbility }
export type GainAbilityEffect = Effect & {
  type: EffectTypeEnum.GainAbility
  name: string
  ability: AbilityReference
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

export const descriptive = (description: string): DescriptiveEffect => {
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

export const gainTrait = (trait: TraitReference | Trait): GainTraitEffect => {
  return {
    type: EffectTypeEnum.GainTrait,
    trait: typeof trait === 'string' ? trait : trait.id,
  }
}

export const gainAbility = (ability: Ability): GainAbilityEffect => {
  return {
    type: EffectTypeEnum.GainAbility,
    name: `Gain Ability: ${ability.name}`,
    ability: ability.id,
  }
}

export const gainCharacteristic = (characteristic: CharacteristicReference<number> | Characteristic<number>): GainCharacteristicEffect => {
  return {
    type: EffectTypeEnum.GainCharacteristic,
    characteristic: typeof characteristic === 'string' ? characteristic : characteristic.id,
  }
}

export const modifyCharacteristic = (
  characteristic: CharacteristicReference<number> | Characteristic<number>,
  modifier: Modifier<unknown>
): ModifyCharacteristicEffect => {
  return {
    type: EffectTypeEnum.ModifyCharacteristic,
    characteristic: typeof characteristic === 'string' ? characteristic : characteristic.id,
    modifier,
  }
}

export const gainResourcePool = (resourcePool: ResourcePoolReference | ResourcePoolDefinition): GainResourcePoolEffect => {
  return {
    type: EffectTypeEnum.GainResourcePool,
    resourcePool: typeof resourcePool === 'string' ? resourcePool : resourcePool.id,
  }
}

export const modifyResourcePool = (
  resourcePool: ResourcePoolReference | ResourcePoolDefinition,
  modifier: Modifier<unknown>
): ModifyResourcePoolEffect => {
  return {
    type: EffectTypeEnum.ModifyResourcePool,
    resourcePool: typeof resourcePool === 'string' ? resourcePool : resourcePool.id,
    modifier,
  }
}
