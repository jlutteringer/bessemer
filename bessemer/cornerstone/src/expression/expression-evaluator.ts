import { Expression, ExpressionContext, ExpressionDefinitions, ExpressionReference } from '@bessemer/cornerstone/expression'
import { Assertions } from '@bessemer/cornerstone'
import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'

export class ExpressionEvaluator {
  constructor(protected readonly expressionDefinitions: ExpressionDefinitions, protected readonly context: ExpressionContext) {}

  evaluate = <T>(expression: Expression<T>): T => {
    if (ExpressionInternal.isRawValue(expression)) {
      return expression
    }

    const matchingExpressionDefinition = this.expressionDefinitions.find((it) => it.expressionKey === expression.expressionKey)
    Assertions.assertPresent(matchingExpressionDefinition)
    return matchingExpressionDefinition.resolver(expression, this.evaluate, this.context) as T
  }

  withDefinitions = (definitions: ExpressionDefinitions): ExpressionEvaluator => {
    return new ExpressionEvaluator([...this.expressionDefinitions, ...definitions], this.context)
  }

  dereference = <ReturnType, ArgumentType extends Array<unknown>>(
    reference: ExpressionReference<ReturnType, ArgumentType>,
    ...args: ArgumentType
  ): Expression<ReturnType> => {
    const matchingExpressionDefinition = this.expressionDefinitions.find((it) => it.expressionKey === reference.expressionKey)
    Assertions.assertPresent(matchingExpressionDefinition, () => `Unable to find Expression Definition for type: ${reference.expressionKey}`)
    return matchingExpressionDefinition.builder(...args)
  }
}

export class DeferredExpressionEvaluator extends ExpressionEvaluator {
  override evaluate = <T>(expression: Expression<T>): T => {
    return expression as T
  }

  override withDefinitions = (definitions: ExpressionDefinitions): ExpressionEvaluator => {
    return new DeferredExpressionEvaluator([...this.expressionDefinitions, ...definitions], this.context)
  }
}
