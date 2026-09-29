import { GameTimeUnit, RelativeAmount } from '@simulacrum/common/types'
import { EvaluateExpression, Expression } from '@bessemer/cornerstone/expression'
import { Reference } from '@bessemer/cornerstone/reference'
import { Assertions } from '@bessemer/cornerstone'
import { ApplicationContext } from '@simulacrum/common/application'

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
  path: string
  description: string
}

export type ResourcePoolDefinition = ResourcePoolProps & { id: ResourcePoolReference } & {}

export type ResourcePoolState = {
  resource: ResourcePoolReference
  value: number
}

export type ResourceCost = {
  cost: Expression<number>
  resource: ResourcePool | ResourcePoolReference
}

export const defineResourcePool = (reference: string, props: ResourcePoolProps): ResourcePoolDefinition => {
  return {
    id: reference as ResourcePoolReference,
    ...props,
  }
}

export const getResourcePool = (resourcePool: ResourcePoolReference, context: ApplicationContext): ResourcePoolDefinition => {
  const matchingResourcePool = context.client.ruleset.resourcePools.find((it) => it.id === resourcePool)
  Assertions.assertPresent(matchingResourcePool, () => `Unable to find Resource Pool for Reference: ${JSON.stringify(resourcePool)}`)
  return matchingResourcePool
}

export const buildInitialState = (
  reference: ResourcePoolReference,
  evaluate: EvaluateExpression,
  context: ApplicationContext
): [string, ResourcePoolState] => {
  const resourcePool = getResourcePool(reference, context)
  return [
    resourcePool.path,
    {
      resource: resourcePool.id,
      value: evaluate(resourcePool.size),
    },
  ]
}
