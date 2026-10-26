import { AbilityEffect } from '@simulacrum/ruleset/character-effect'
import * as ResourcePools from '@simulacrum/ruleset/resource-pool'
import { ResourceCost, ResourceCostProps, ResourcePool, ResourcePoolDefinition } from '@simulacrum/ruleset/resource-pool'
import { buildReference, RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import * as Tiptap from '@bessemer/core/tiptap'
import { Expression } from '@bessemer/cornerstone/expression'
import { Objects, Patches } from '@bessemer/cornerstone'
import { Patch, Patchable } from '@bessemer/cornerstone/patch'
import * as Tags from '@simulacrum/ruleset/tag'
import { AbilityTag, AbilityTagReference, TagFilter, TagFilterProps } from '@simulacrum/ruleset/tag'
import * as Targetings from '@simulacrum/ruleset/targeting'
import { Targeting, TargetingProps } from '@simulacrum/ruleset/targeting'
import * as ActionTests from '@simulacrum/ruleset/action-test'
import { ActionEffect } from '@simulacrum/ruleset/action-effect'
import { Valued } from '@simulacrum/ruleset/attribute'
import * as Attributes from '@simulacrum/ruleset/attribute'
import { ActionTest, ActionTestProps } from '@simulacrum/ruleset/action-test'
import { ActionType, ActionTypeReference } from '@simulacrum/ruleset/action-type'
import { LoadoutType, LoadoutTypeReference } from '@simulacrum/ruleset/loadout'

export type AbilityReference = RulesetEntityReference<typeof RulesetEntityType.Ability>

export interface Ability extends RulesetEntity {
  id: AbilityReference

  tags: Array<AbilityTagReference>
  prerequisites: Array<Expression<boolean>>
  effects: Array<AbilityEffect>
  actions: Array<AbilityAction>
  resource: ResourcePoolDefinition | null
  universal: boolean
  loadout: LoadoutTypeReference | null
}

export interface AbilityAction {
  name: string | null
  description: RichTextJson | null

  action: ActionTypeReference
  annotation: string | null
  costs: Array<ResourceCost>
  targeting: Targeting
  test: ActionTest | null
  effects: Array<Valued<ActionEffect>>
}

export type AbilityProps = RulesetEntityProps & {
  tags?: Array<AbilityTag>
  prerequisites?: Array<Expression<boolean>>
  effects?: Array<AbilityEffect>
  actions?: Array<AbilityActionProps>

  resource?: ResourcePool
  costs?: Array<ResourceCostProps>

  universal?: boolean
  loadout?: LoadoutType
}

export type AbilityActionProps = {
  name?: string
  description?: string
  action: ActionType
  annotation?: string

  costs?: Array<ResourceCostProps>
  targeting?: TargetingProps
  test?: ActionTestProps
  effects?: Array<ActionEffect>
}

const resolveCost = ({ cost, resource }: ResourceCostProps): ResourceCost => {
  return Objects.isNil(resource) ? { cost } : { cost, resource: resource.id }
}

const resolveAction = (props: AbilityActionProps, defaultCosts: Array<ResourceCost>): AbilityAction => {
  return {
    name: props.name ?? null,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
    action: props.action.id,
    annotation: props.annotation ?? null,
    costs: Objects.isNil(props.costs) ? defaultCosts : props.costs.map(resolveCost),
    targeting: Targetings.resolve(props.targeting ?? {}),
    test: Objects.isNil(props.test) ? null : ActionTests.resolve(props.test),
    effects: (props.effects ?? []).map(Attributes.valued),
  }
}

type DefinedAbility<P extends AbilityProps> = Ability & (P extends { resource: ResourcePool } ? { resource: ResourcePoolDefinition } : {})

export const defineAbility = <P extends AbilityProps>(reference: string, props: P): DefinedAbility<P> => {
  const resource = Objects.isNil(props.resource) ? null : ResourcePools.defineResourcePool(reference, { name: props.name, ...props.resource })

  const costs = (props.costs ?? []).map(resolveCost)

  return {
    id: buildReference(RulesetEntityType.Ability, reference),
    name: props.name,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
    tags: (props.tags ?? []).map((it) => it.id),
    prerequisites: props.prerequisites ?? [],
    effects: props.effects ?? [],
    actions: (props.actions ?? []).map((it) => resolveAction(it, costs)),
    resource,
    universal: props.universal ?? true,
    loadout: props.loadout?.id ?? null,
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
  tags?: TagFilterProps<AbilityTag>
  specificOptions?: Array<Ability>
}

export type AbilityFilter = {
  tags: TagFilter<AbilityTagReference>
  specificOptions: Array<AbilityReference>
}

export const filter = (props: AbilityFilterProps): AbilityFilter => {
  return {
    tags: Tags.filter(props.tags ?? []),
    specificOptions: (props.specificOptions ?? []).map((it) => it.id),
  }
}
