import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { EvaluateExpression, Expression } from '@bessemer/cornerstone/expression'
import { Uris, Objects } from '@bessemer/cornerstone'
import * as Tiptap from '@bessemer/core/tiptap'
import { RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntitySchema, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import Zod from 'zod'

export type ResourcePool = {
  size: Expression<number>
  refresh: Array<CooldownRate>
}

export type CooldownRate = {
  period: GameTimeUnit
  amount: Expression<number> | RelativeAmount
}

export type ResourcePoolReference = RulesetEntityReference<typeof RulesetEntityType.ResourcePool>

export type ResourcePoolProps = RulesetEntityProps & ResourcePool

export const ResourcePoolDefinitionSchema = RulesetEntitySchema.extend({
  id: Zod.string().transform((it) => it as ResourcePoolReference),
  size: Zod.custom<Expression<number>>(),
  refresh: Zod.array(
    Zod.object({
      period: Zod.enum(GameTimeUnit),
      amount: Zod.union([Zod.enum(RelativeAmount), Zod.custom<Expression<number>>()]),
    })
  ),
})

export type ResourcePoolDefinition = RulesetEntity &
  ResourcePool & {
    id: ResourcePoolReference
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
  return ResourcePoolDefinitionSchema.parse({
    id: Uris.format({ scheme: RulesetEntityType.ResourcePool, location: { path: reference } }),
    name: props.name,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
    size: props.size,
    refresh: props.refresh,
  })
}
