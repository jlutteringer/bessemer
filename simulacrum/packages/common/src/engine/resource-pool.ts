import { ExpressionEvaluator } from '@bessemer/cornerstone/expression/expression-evaluator'
export * from '@simulacrum/ruleset/resource-pool'
import { ResourcePool, ResourcePoolDefinition, ResourcePoolReference } from '@simulacrum/ruleset/resource-pool'
import { Valued } from '@simulacrum/ruleset/attribute'
import { Expression, Expressions } from '@bessemer/cornerstone/expression'
import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'
import * as Attributes from '@simulacrum/common/engine/attribute'
import { Modifier, ModifierValue } from '@simulacrum/common/engine/attribute'
import * as Rulesets from '@simulacrum/common/engine/ruleset'
import { Ruleset } from '@simulacrum/common/engine/ruleset'

export interface ResourcePoolValue extends ResourcePoolDefinition, Valued<number> {
  activeModifiers: Array<ModifierValue<ResourcePool>>
  inactiveModifiers: Array<Modifier<ResourcePool>>
}

export const LargestResourcePoolExpression = ExpressionInternal.defineExpression({
  expressionKey: 'ResourcePool.Largest',
  builder: (operands: Array<Expression<ResourcePool>>) => {
    return { operands }
  },
  resolver: ({ operands }, evaluate): ResourcePool => {
    const pools = operands.map((it) => evaluate(it))
    const sizes = pools.map((it) => evaluate(it.size))
    return pools[sizes.reduce((best, it, index) => (it > sizes[best]! ? index : best), 0)]!
  },
})

export const getResourcePoolById = (resourcePool: ResourcePoolReference, ruleset: Ruleset): ResourcePoolDefinition => {
  return Rulesets.getEntityById(resourcePool, ruleset)
}

export const evaluateResourcePool = (
  resourcePool: ResourcePoolDefinition,
  modifiers: Array<Modifier<ResourcePool>>,
  evaluator: ExpressionEvaluator
): ResourcePoolValue => {
  const attribute = Attributes.attribute<ResourcePool>(resourcePool, Expressions.reference(LargestResourcePoolExpression))
  const { value, activeModifiers, inactiveModifiers } = Attributes.evaluateAttribute(attribute, modifiers, evaluator, {
    optimizer: evaluator.withDefinitions([LargestResourcePoolExpression]),
  })

  return { ...resourcePool, ...value, value: evaluator.evaluate(value.size), activeModifiers, inactiveModifiers }
}

export const buildInitialState = (
  reference: ResourcePoolReference,
  modifiers: Array<Modifier<ResourcePool>>,
  evaluator: ExpressionEvaluator,
  ruleset: Ruleset
): ResourcePoolValue => {
  return evaluateResourcePool(getResourcePoolById(reference, ruleset), modifiers, evaluator)
}
