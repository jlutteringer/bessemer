import { AbilityEffect } from '@simulacrum/ruleset/effect'
import * as ResourcePools from '@simulacrum/ruleset/resource-pool'
import { ResourceCost, ResourceCostProps, ResourcePool, ResourcePoolDefinition } from '@simulacrum/ruleset/resource-pool'
import { Reference } from '@bessemer/cornerstone/reference'
import { RichText } from '@bessemer/cornerstone/rich-text'
import { EvaluateExpression, Expression } from '@bessemer/cornerstone/expression'
import { Arrays, Assertions, Objects, Patches } from '@bessemer/cornerstone'
import * as Archetypes from '@simulacrum/ruleset/archetype'
import { Targeting } from '@simulacrum/ruleset/targeting'
import { Archetype, ArchetypeFilter, ArchetypeFilterProps, ArchetypeReference } from '@simulacrum/ruleset/archetype'

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
  targeting: Targeting
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
    targeting?: Targeting
  }>

  resource?: ResourcePool
  costs?: Array<ResourceCostProps>
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
      targeting: it.targeting ?? {},
    })),
    resource,
  } as DefinedAbility<P>
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
