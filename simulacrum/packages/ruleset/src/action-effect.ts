import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import * as Tiptap from '@bessemer/core/tiptap'
import { Objects } from '@bessemer/cornerstone'
import { Expression } from '@bessemer/cornerstone/expression'
import { Duration } from '@simulacrum/ruleset/duration'
import { CreatureTag, CreatureTagReference } from '@simulacrum/ruleset/tag'
import { DamageType, DamageTypeReference } from '@simulacrum/ruleset/damage'
import { Roll, RollOperand } from '@simulacrum/ruleset/roll'
import * as Rolls from '@simulacrum/ruleset/roll'
import { Patch } from '@bessemer/cornerstone/patch'
import { Patches } from '@bessemer/cornerstone'
import * as Tags from '@simulacrum/ruleset/tag'
import { AbilityTag, AbilityTagReference, TagFilter, TagFilterProps } from '@simulacrum/ruleset/tag'
import { Ability, AbilityReference } from '@simulacrum/ruleset/ability'

export enum ActionEffectType {
  Descriptive = 'Descriptive',
  Condition = 'Condition',
  Damage = 'Damage',
}

export type ActionDamage = {
  amount: Expression<Roll>
  potency: Expression<number>
  type: DamageTypeReference
}

export type ActionDamageProps = {
  amount: Expression<Roll>
  type: DamageType
}

export type DescriptiveActionEffect = {
  type: ActionEffectType.Descriptive
  description: RichTextJson
  duration: Duration | null
}

export type ConditionActionEffect = {
  type: ActionEffectType.Condition
  condition: CreatureTagReference
  damage: ActionDamage | null
  duration: Duration | null
}

export type DamageActionEffect = {
  type: ActionEffectType.Damage
  damage: ActionDamage
}

export type ActionEffect = DescriptiveActionEffect | ConditionActionEffect | DamageActionEffect

export type ActionEffectOptions = {
  duration?: Duration
}

export type ConditionActionEffectOptions = ActionEffectOptions & {
  damage?: ActionDamageProps
}

export const descriptive = (description: string, options?: ActionEffectOptions): DescriptiveActionEffect => {
  return {
    type: ActionEffectType.Descriptive,
    description: Tiptap.markdownToJson(description),
    duration: options?.duration ?? null,
  }
}

export const condition = (condition: CreatureTag, options?: ConditionActionEffectOptions): ConditionActionEffect => {
  return {
    type: ActionEffectType.Condition,
    condition: condition.id,
    damage: Objects.isNil(options?.damage) ? null : { amount: options.damage.amount, type: options.damage.type.id, potency: 0 },
    duration: options?.duration ?? null,
  }
}

export const damage = (amount: Expression<Roll>, type: DamageType): DamageActionEffect => {
  return {
    type: ActionEffectType.Damage,
    damage: { amount, type: type.id, potency: 0 },
  }
}

export type ActionEffectFilter<E extends ActionEffect = ActionEffect> = {
  effectTypes: Array<E['type']>
  abilities: Array<AbilityReference>
  abilityTags: TagFilter<AbilityTagReference>
  damageTypes: Array<DamageTypeReference>
  conditions: Array<CreatureTagReference>
}

export type ActionEffectFilterProps = {
  abilities?: Array<Ability>
  abilityTags?: TagFilterProps<AbilityTag>
}

const buildFilter = <E extends ActionEffect>(
  effectTypes: Array<E['type']>,
  props: ActionEffectFilterProps & { damageTypes?: Array<DamageType>; conditions?: Array<CreatureTag> }
): ActionEffectFilter<E> => {
  return {
    effectTypes,
    abilities: (props.abilities ?? []).map((it) => it.id),
    abilityTags: Tags.filter(props.abilityTags ?? []),
    damageTypes: (props.damageTypes ?? []).map((it) => it.id),
    conditions: (props.conditions ?? []).map((it) => it.id),
  }
}

export const damageFilter = (
  props: ActionEffectFilterProps & { damageTypes?: Array<DamageType> }
): ActionEffectFilter<DamageActionEffect | ConditionActionEffect> => {
  return buildFilter<DamageActionEffect | ConditionActionEffect>([ActionEffectType.Damage, ActionEffectType.Condition], props)
}

export const conditionFilter = (props: ActionEffectFilterProps & { conditions?: Array<CreatureTag> }): ActionEffectFilter<ConditionActionEffect> => {
  return buildFilter<ConditionActionEffect>([ActionEffectType.Condition], props)
}

export const addDamage = (bonus: RollOperand): Patch<DamageActionEffect | ConditionActionEffect> => {
  return Patches.patch<DamageActionEffect | ConditionActionEffect>({ damage: { amount: Rolls.add(bonus) } })
}

export const increasePotency = (amount: Expression<number>): Patch<DamageActionEffect | ConditionActionEffect> => {
  return Patches.patch<DamageActionEffect | ConditionActionEffect>({ damage: { potency: Patches.sum(amount) } })
}

export const extendDuration = (rounds: Expression<number>): Patch<DescriptiveActionEffect | ConditionActionEffect> => {
  return Patches.patch<DescriptiveActionEffect | ConditionActionEffect>({ duration: { rounds: Patches.sum(rounds) } })
}
