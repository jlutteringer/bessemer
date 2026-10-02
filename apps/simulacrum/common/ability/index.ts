import { LoadoutTypeReference } from '@simulacrum/common/loadout'
import { Effect, EffectSourceType } from '@simulacrum/common/effect'
import { ResourceCost } from '@simulacrum/common/resource-pool'
import { Reference } from '@bessemer/cornerstone/reference'
import { RichText } from '@bessemer/cornerstone/rich-text'
import { Expression } from '@bessemer/cornerstone/expression'
import { Arrays, Assertions } from '@bessemer/cornerstone'
import * as Archetypes from '@simulacrum/common/archetype'
import { Archetype, ArchetypeFilter, ArchetypeFilterProps, ArchetypeReference } from '@simulacrum/common/archetype'
import { ApplicationContext } from '@simulacrum/common/application'

export enum ActionType {
  Free = 'Free',
  Bonus = 'Bonus',
  Standard = 'Standard',
  Reaction = 'Reaction',
}

export type AbilityReference = Reference<'Ability'>

export type Ability = { id: AbilityReference } & {
  name: string
  description: RichText

  archetypes: Array<ArchetypeReference>
  prerequisites: Array<Expression<boolean>>
  effects: Array<Effect>
  actions: Array<AbilityAction>
  costs: Array<ResourceCost>
}

export type AbilityAction = {
  name: string | null
  description: RichText | null

  action: ActionType
  costs: Array<ResourceCost>
}

export type AbilityProps = {
  name: string
  description: RichText

  archetypes?: Array<Archetype>
  prerequisites?: Array<Expression<boolean>>
  effects?: Array<Effect>
  actions?: Array<{
    name?: string
    description?: RichText
    action: ActionType

    costs?: Array<ResourceCost>
  }>

  costs?: Array<ResourceCost>
}

export type AbilityState = {
  ability: Ability
  loadout: LoadoutTypeReference | null
}

export const defineAbility = (reference: string, props: AbilityProps): Ability => {
  return {
    id: reference as AbilityReference,
    name: props.name,
    description: props.description,
    archetypes: (props.archetypes ?? []).map((it) => it.id),
    prerequisites: props.prerequisites ?? [],
    effects: props.effects ?? [],
    actions: (props.actions ?? []).map((it) => ({
      name: it.name ?? null,
      description: it.description ?? null,
      action: it.action,
      costs: it.costs ?? [],
    })),
    costs: props.costs ?? [],
  }
}

export const getAbility = (reference: AbilityReference, context: ApplicationContext): Ability => {
  const ability = context.client.ruleset.abilities.find((it) => it.id === reference)
  Assertions.assertPresent(ability)
  return ability
}

export const getAbilities = (abilities: Array<AbilityReference>, context: ApplicationContext): Array<Ability> => {
  return abilities.map((it) => getAbility(it, context))
}

export type AbilityFilterProps = {
  archetypes?: ArchetypeFilterProps
  specificOptions?: Array<AbilityReference | Ability>
}

export type AbilityFilter = {
  archetypes: ArchetypeFilter
  specificOptions: Array<AbilityReference>
}

export const filter = (props: AbilityFilterProps): AbilityFilter => {
  return {
    archetypes: Archetypes.filter(props.archetypes ?? []),
    specificOptions: (props.specificOptions ?? []).map((it) => (typeof it === 'string' ? it : it.id)),
  }
}

export const applyFilter = (abilities: Array<Ability>, filter: AbilityFilter): Array<Ability> => {
  let filteredAbilities = abilities
  if (!Arrays.isEmpty(filter.archetypes)) {
    filteredAbilities = filteredAbilities.filter((it) => Archetypes.matchesFilter(filter.archetypes, it.archetypes))
  }
  if (!Arrays.isEmpty(filter.specificOptions)) {
    filteredAbilities = filteredAbilities.filter((it) => Arrays.contains(filter.specificOptions, it.id))
  }

  return filteredAbilities
}

export const getEffectsForAbility = (ability: Ability): Array<Effect> => {
  return ability.effects.map((effect) => {
    const sourcedEffect: Effect = { ...effect, source: { type: EffectSourceType.Ability, ability: ability.id } }
    return sourcedEffect
  })
}

// TODO
export const buildInitialState = (ability: AbilityReference, loadout: LoadoutTypeReference | null, context: ApplicationContext): AbilityState => {
  return { ability: getAbility(ability, context), loadout }
}
