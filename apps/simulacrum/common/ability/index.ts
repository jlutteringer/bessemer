import { LoadoutTypeReference } from '@simulacrum/common/loadout'
import { AbilityEffect } from '@simulacrum/common/effect'
import * as ResourcePools from '@simulacrum/common/resource-pool'
import { ResourceCost, ResourceCostProps, ResourcePool, ResourcePoolDefinition } from '@simulacrum/common/resource-pool'
import { Reference } from '@bessemer/cornerstone/reference'
import { RichText } from '@bessemer/cornerstone/rich-text'
import { EvaluateExpression, Expression } from '@bessemer/cornerstone/expression'
import { Patch } from '@bessemer/cornerstone/patch'
import * as Attributes from '@simulacrum/common/attribute'
import { Modifier } from '@simulacrum/common/attribute'
import { Arrays, Assertions, Objects, Patches } from '@bessemer/cornerstone'
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

  archetypes: Array<ArchetypeReference>
  prerequisites: Array<Expression<boolean>>
  effects: Array<AbilityEffect>
  actions: Array<AbilityAction>
  resource: ResourcePoolDefinition | null
}

export type AbilityAction = {
  name: string | null
  description: RichText | null

  action: ActionType
  costs: Array<ResourceCost>
}

export type AbilityProps = {
  name: string

  archetypes?: Array<Archetype>
  prerequisites?: Array<Expression<boolean>>
  effects?: Array<AbilityEffect>
  actions?: Array<{
    name?: string
    description?: RichText
    action: ActionType

    costs?: Array<ResourceCostProps>
  }>

  resource?: ResourcePool
  costs?: Array<ResourceCostProps>
}

export type AbilityState = {
  ability: Ability
  loadout: LoadoutTypeReference | null
}

type DefinedAbility<P extends AbilityProps> = Ability & (P extends { resource: ResourcePool } ? { resource: ResourcePoolDefinition } : {})

export const defineAbility = <P extends AbilityProps>(reference: string, props: P): DefinedAbility<P> => {
  const resource = Objects.isNil(props.resource)
    ? null
    : ResourcePools.defineResourcePool(reference, { name: props.name, description: '', ...props.resource })

  const resolveCost = ({ cost, resource }: ResourceCostProps): ResourceCost => {
    return Objects.isNil(resource) ? { cost } : { cost, resource: resource.id }
  }

  const costs = (props.costs ?? []).map(resolveCost)

  return {
    id: reference as AbilityReference,
    name: props.name,
    archetypes: (props.archetypes ?? []).map((it) => it.id),
    prerequisites: props.prerequisites ?? [],
    effects: props.effects ?? [],
    actions: (props.actions ?? []).map((it) => ({
      name: it.name ?? null,
      description: it.description ?? null,
      action: it.action,
      costs: Objects.isNil(it.costs) ? costs : it.costs.map(resolveCost),
    })),
    resource,
  } as DefinedAbility<P>
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
  specificOptions?: Array<Ability>
}

export type AbilityFilter = {
  archetypes: ArchetypeFilter
  specificOptions: Array<AbilityReference>
}

export const filter = (props: AbilityFilterProps): AbilityFilter => {
  return {
    archetypes: Archetypes.filter(props.archetypes ?? []),
    specificOptions: (props.specificOptions ?? []).map((it) => it.id),
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

export const applyModifiers = (ability: Ability, modifiers: Array<Modifier<unknown>>, evaluate: EvaluateExpression): Ability => {
  const { activeModifiers } = Attributes.evaluateModifiers(modifiers, evaluate)
  return Patches.resolve(
    ability,
    activeModifiers.map((it) => it.value as Patch<Ability>),
    evaluate
  )
}

export const buildInitialState = (
  ability: AbilityReference,
  loadout: LoadoutTypeReference | null,
  modifiers: Array<Modifier<unknown>>,
  evaluate: EvaluateExpression,
  context: ApplicationContext
): AbilityState => {
  return { ability: applyModifiers(getAbility(ability, context), modifiers, evaluate), loadout }
}
