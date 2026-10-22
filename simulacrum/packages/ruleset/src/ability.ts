import { AbilityEffect } from '@simulacrum/ruleset/effect'
import * as ResourcePools from '@simulacrum/ruleset/resource-pool'
import { ResourceCost, ResourceCostProps, ResourcePool, ResourcePoolDefinition } from '@simulacrum/ruleset/resource-pool'
import { buildReference, RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import * as Tiptap from '@bessemer/core/tiptap'
import { EvaluateExpression, Expression } from '@bessemer/cornerstone/expression'
import { Arrays, Assertions, Objects, Patches } from '@bessemer/cornerstone'
import { Patch, Patchable } from '@bessemer/cornerstone/patch'
import * as Archetypes from '@simulacrum/ruleset/archetype'
import * as Targetings from '@simulacrum/ruleset/targeting'
import { Targeting, TargetingProps } from '@simulacrum/ruleset/targeting'
import { ActionType, ActionTypeReference } from '@simulacrum/ruleset/action-type'
import { Archetype, ArchetypeFilter, ArchetypeFilterProps, ArchetypeReference } from '@simulacrum/ruleset/archetype'

export type AbilityReference = RulesetEntityReference<typeof RulesetEntityType.Ability>

export type Ability = RulesetEntity & {
  id: AbilityReference

  archetypes: Array<ArchetypeReference>
  prerequisites: Array<Expression<boolean>>
  effects: Array<AbilityEffect>
  actions: Array<AbilityAction>
  resource: ResourcePoolDefinition | null
}

export type AbilityAction = {
  name: string | null
  description: RichTextJson | null

  action: ActionTypeReference
  costs: Array<ResourceCost>
  targeting: Targeting
}

export type AbilityProps = RulesetEntityProps & {
  archetypes?: Array<Archetype>
  prerequisites?: Array<Expression<boolean>>
  effects?: Array<AbilityEffect>
  actions?: Array<AbilityActionProps>

  resource?: ResourcePool
  costs?: Array<ResourceCostProps>
}

export type AbilityActionProps = {
  name?: string
  description?: string
  action: ActionType

  costs?: Array<ResourceCostProps>
  targeting?: TargetingProps
}

const resolveCost = ({ cost, resource }: ResourceCostProps): ResourceCost => {
  return Objects.isNil(resource) ? { cost } : { cost, resource: resource.id }
}

const resolveAction = (props: AbilityActionProps, defaultCosts: Array<ResourceCost>): AbilityAction => {
  return {
    name: props.name ?? null,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
    action: props.action.id,
    costs: Objects.isNil(props.costs) ? defaultCosts : props.costs.map(resolveCost),
    targeting: Targetings.resolve(props.targeting ?? {}),
  }
}

type DefinedAbility<P extends AbilityProps> = Ability & (P extends { resource: ResourcePool } ? { resource: ResourcePoolDefinition } : {})

export const defineAbility = <P extends AbilityProps>(reference: string, props: P): DefinedAbility<P> => {
  const resource = Objects.isNil(props.resource)
    ? null
    : ResourcePools.defineResourcePool(reference, { name: props.name, description: '', ...props.resource })

  const costs = (props.costs ?? []).map(resolveCost)

  return {
    id: buildReference(RulesetEntityType.Ability, reference),
    name: props.name,
    description: Tiptap.markdownToJson(props.description),
    archetypes: (props.archetypes ?? []).map((it) => it.id),
    prerequisites: props.prerequisites ?? [],
    effects: props.effects ?? [],
    actions: (props.actions ?? []).map((it) => resolveAction(it, costs)),
    resource,
  } as DefinedAbility<P>
}

export type AbilityPatchProps = Required<Pick<AbilityProps, 'name' | 'prerequisites' | 'effects' | 'actions'>>

export const resolvePatch = (patch: Patch<AbilityPatchProps>): Patch<Ability> => {
  if (patch.type !== Patches.PatchType.Patch) {
    throw new Error('Ability patches must patch individual properties')
  }

  const { actions, ...properties } = patch.patch
  return Patches.patch<Ability>({
    ...properties,
    ...(Objects.isPresent(actions) ? { actions: mapListPatch<AbilityActionProps, AbilityAction>(actions, (it) => resolveAction(it, [])) } : {}),
  })
}

const mapListPatch = <T, N>(patch: Patch<Array<T>> | Patchable<Array<T>>, mapper: (value: T) => N): Patch<Array<N>> => {
  if (!Patches.isPatch(patch) || patch.type === Patches.PatchType.Patch || !Array.isArray(patch.value)) {
    throw new Error('Ability patches must set or concatenate a literal list')
  }

  return { ...patch, value: patch.value.map(mapper) } as Patch<Array<N>>
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
