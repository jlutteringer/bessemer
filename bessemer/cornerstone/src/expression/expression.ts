import { DeferredExpressionEvaluator, ExpressionEvaluator } from '@bessemer/cornerstone/expression/expression-evaluator'
import { NilableBasicType } from '@bessemer/cornerstone/types'
import {
  ArrayExpressions,
  EvaluateExpression,
  Expression,
  ExpressionContext,
  ExpressionDefinition,
  ExpressionDefinitions,
  ExpressionReference,
  ExpressionVariable,
  NumericExpressions,
  ParameterizedVariable,
  StringExpressions,
} from '@bessemer/cornerstone/expression'
import { Signatures } from '@bessemer/cornerstone'
import { UnknownRecord } from 'type-fest'
import {
  AndExpression,
  ContainsExpression,
  EqualsExpression,
  GreaterThanExpression,
  GreaterThanOrEqualExpression,
  LessThanExpression,
  LessThanOrEqualExpression,
  NotExpression,
  OrExpression,
  ValueExpression,
  VariableExpression,
} from '@bessemer/cornerstone/expression/core-expression'
import { ExpressionMapper } from '@bessemer/cornerstone/expression/expression-mapper'

export const evaluate = <T>(expression: Expression<T>, context: ExpressionContext, definitions: ExpressionDefinitions = []): T => {
  return createEvaluator(context, definitions).evaluate(expression)
}

/**
 * Creates an ExpressionEvaluator bound to the given context. The evaluator knows the default
 * expression definitions plus any additional definitions provided, and can both evaluate
 * expressions and dereference expression references (such as the reducer of an apply patch).
 *
 * **Example**
 *
 * ```ts
 * import { Expressions, NumericExpressions } from "@bessemer/cornerstone/expression"
 *
 * const evaluator = Expressions.createEvaluator({ variables: { level: 3 } })
 * console.log(evaluator.evaluate(NumericExpressions.sum([1, Expressions.variable('level')]))) // 4
 * ```
 *
 * @category evaluation
 */
export const createEvaluator = (context: ExpressionContext, definitions: ExpressionDefinitions = []): ExpressionEvaluator => {
  return new ExpressionEvaluator([...DEFAULT_EXPRESSION_DEFINITIONS, ...definitions], context)
}

/**
 * Creates an ExpressionEvaluator that builds expressions without evaluating them. Dereferencing
 * works exactly as it does for `createEvaluator`, but `evaluate` returns its input unchanged,
 * which makes it useful for resolving patches symbolically and evaluating the result later.
 *
 * **Example**
 *
 * ```ts
 * import { Expressions } from "@bessemer/cornerstone/expression"
 * import { Patches } from "@bessemer/cornerstone"
 *
 * const level = Expressions.variable<number>('level')
 * const result = Patches.resolve<Expression<number>>(level, [Patches.sum(2)], Expressions.createDeferredEvaluator())
 * console.log(result) // { expressionKey: 'Numeric.Sum', operands: [{ expressionKey: 'Variable', name: 'level' }, 2] }
 * ```
 *
 * @category evaluation
 */
export const createDeferredEvaluator = (definitions: ExpressionDefinitions = []): ExpressionEvaluator => {
  return new DeferredExpressionEvaluator([...DEFAULT_EXPRESSION_DEFINITIONS, ...definitions], defaultContext())
}

export const evaluateDefault = <T>(expression: Expression<T>): T => {
  return evaluate(expression, defaultContext())
}

export const map = <MappingType, ContextType>(
  expression: Expression<unknown>,
  mapper: ExpressionMapper<MappingType, ContextType>,
  context: ContextType
): MappingType => {
  return mapper.map(expression, context)
}

export const evaluator = (context: ExpressionContext, definitions: ExpressionDefinitions = []): EvaluateExpression => {
  return (it) => evaluate(it, context, definitions)
}

export const defaultEvaluator = (): EvaluateExpression => {
  return evaluator(defaultContext())
}

export const defaultContext = (): ExpressionContext => {
  return { variables: {} }
}

export const dereference = <ReturnType, ArgumentType extends Array<unknown>>(
  reference: ExpressionReference<ReturnType, ArgumentType>,
  ...args: ArgumentType
): Expression<ReturnType> => {
  return createEvaluator(defaultContext()).dereference(reference, ...args)
}

export const parameterizedVariable = <ValueType, ParameterType extends Array<NilableBasicType>>(
  name: string
): ParameterizedVariable<ValueType, ParameterType> => {
  return {
    apply(...parameters: ParameterType): ExpressionVariable<ValueType> {
      const parameterString = parameters.map(Signatures.sign).join('.')
      return variable(`${name}.${parameterString}`)
    },
  }
}

export const buildVariable = <T>(variable: ExpressionVariable<T>, value: T): UnknownRecord => {
  return { [variable.name]: value }
}

export const reference = <ReturnType, ArgumentType extends Array<unknown>, ExpressionType extends Expression<ReturnType>>(
  expressionDefinition: ExpressionDefinition<ReturnType, ArgumentType, ExpressionType>
): ExpressionReference<ReturnType, ArgumentType> => {
  return { expressionKey: expressionDefinition.expressionKey }
}

export const value = <T>(value: T): Expression<T> => {
  return ValueExpression.builder(value) as Expression<T>
}

export const variable = <T>(name: string): ExpressionVariable<T> => {
  return VariableExpression.builder(name) as ExpressionVariable<T>
}

export const not = NotExpression.builder

export const and = AndExpression.builder

export const or = OrExpression.builder

export const equals = EqualsExpression.builder

export const contains = ContainsExpression.builder

export const lessThan = LessThanExpression.builder

export const lessThanOrEqual = LessThanOrEqualExpression.builder

export const greaterThan = GreaterThanExpression.builder

export const greaterThanOrEqual = GreaterThanOrEqualExpression.builder

const DEFAULT_EXPRESSION_DEFINITIONS: ExpressionDefinitions = [
  ValueExpression,
  VariableExpression,
  NotExpression,
  AndExpression,
  OrExpression,
  ContainsExpression,
  EqualsExpression,
  LessThanExpression,
  LessThanOrEqualExpression,
  GreaterThanExpression,
  GreaterThanOrEqualExpression,
  NumericExpressions.SumExpression,
  NumericExpressions.MultiplyExpression,
  NumericExpressions.BoundExpression,
  NumericExpressions.RoundExpression,
  NumericExpressions.MaxExpression,
  NumericExpressions.MinExpression,
  StringExpressions.ConcatenateExpression,
  StringExpressions.SubstringExpression,
  StringExpressions.UppercaseExpression,
  ArrayExpressions.ConcatenateExpression,
  ArrayExpressions.FirstExpression,
]
