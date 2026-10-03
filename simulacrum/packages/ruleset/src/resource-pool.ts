import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { EvaluateExpression, Expression } from '@bessemer/cornerstone/expression'
import { Reference } from '@bessemer/cornerstone/reference'

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
