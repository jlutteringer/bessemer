import { GameTimeUnit, RelativeAmount } from '@simulacrum/common/types'
import { EvaluateExpression, Expression } from '@bessemer/cornerstone/expression'
import { Reference } from '@bessemer/cornerstone/reference'
import { Assertions, Patches } from '@bessemer/cornerstone'
import { Patch } from '@bessemer/cornerstone/patch'
import * as Attributes from '@simulacrum/common/attribute'
import { Modifier } from '@simulacrum/common/attribute'
import { Ruleset } from '@simulacrum/common/ruleset'

export type ResourcePool = {
  size: Expression<number>
  refresh: Array<CooldownRate>
}

export type CooldownRate = {
  period: GameTimeUnit
  amount: Expression<number> | RelativeAmount
}

export type ResourcePoolReference = Reference<'ResourcePoolDefinition'>

export type ResourcePoolProps = ResourcePool & {
  name: string
  description: string
}

export type ResourcePoolDefinition = ResourcePoolProps & { id: ResourcePoolReference }

export type ResourcePoolState = {
  resource: ResourcePoolDefinition
  value: number
}

export type ResourceCost = {
  cost: Expression<number>
  resource?: ResourcePoolReference
}

export type ResourceCostProps = {
  cost: Expression<number>
  resource?: ResourcePoolDefinition
}

export const defineResourcePool = (reference: string, props: ResourcePoolProps): ResourcePoolDefinition => {
  return {
    id: reference as ResourcePoolReference,
    ...props,
  }
}

export const getResourcePool = (resourcePool: ResourcePoolReference, ruleset: Ruleset): ResourcePoolDefinition => {
  const { resourcePools, abilities } = ruleset
  const matchingResourcePool =
    resourcePools.find((it) => it.id === resourcePool) ?? abilities.find((it) => it.resource?.id === resourcePool)?.resource
  Assertions.assertPresent(matchingResourcePool, () => `Unable to find Resource Pool for Reference: ${JSON.stringify(resourcePool)}`)
  return matchingResourcePool
}

export const applyModifiers = <T extends ResourcePool>(resourcePool: T, modifiers: Array<Modifier<unknown>>, evaluate: EvaluateExpression): T => {
  const { activeModifiers } = Attributes.evaluateModifiers(modifiers, evaluate)
  return Patches.resolve(
    resourcePool,
    activeModifiers.map((it) => it.value as Patch<T>),
    evaluate
  )
}

export const buildInitialState = (
  reference: ResourcePoolReference,
  modifiers: Array<Modifier<unknown>>,
  evaluate: EvaluateExpression,
  ruleset: Ruleset
): ResourcePoolState => {
  const resourcePool = applyModifiers(getResourcePool(reference, ruleset), modifiers, evaluate)
  return { resource: resourcePool, value: evaluate(resourcePool.size) }
}
