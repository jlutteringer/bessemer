export * from '@simulacrum/ruleset/resource-pool'
import { ResourcePool, ResourcePoolDefinition, ResourcePoolReference } from '@simulacrum/ruleset/resource-pool'
import { EvaluateExpression } from '@bessemer/cornerstone/expression'
import { Assertions, Patches } from '@bessemer/cornerstone'
import { Patch } from '@bessemer/cornerstone/patch'
import * as Attributes from '@simulacrum/engine/attribute'
import { Modifier } from '@simulacrum/engine/attribute'
import { Ruleset } from '@simulacrum/engine/ruleset'

export type ResourcePoolState = {
  resource: ResourcePoolDefinition
  value: number
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
