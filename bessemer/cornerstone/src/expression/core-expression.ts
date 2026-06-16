import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'
import { Expression } from '@bessemer/cornerstone/expression'
import { BasicType } from '@bessemer/cornerstone/types'
import { Arrays, Assertions, Objects, Signatures } from '@bessemer/cornerstone'
import { Signable } from '@bessemer/cornerstone/signature'
import { Result } from '@bessemer/cornerstone/result'
import * as Results from '@bessemer/cornerstone/result'

export const ValueExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Value',
  builder: (value: unknown) => {
    return { value }
  },
  resolver: ({ value }, evaluate, context) => {
    return value
  },
})

export const isValue = <T>(expression: Expression<T>): boolean => {
  return ExpressionInternal.isRawValue(expression) || ExpressionInternal.isType(expression, ValueExpression)
}

export const getValue = <T>(expression: Expression<T>): Result<T> => {
  if (ExpressionInternal.isType(expression, ValueExpression)) {
    return Results.success(expression.value as T)
  } else if (ExpressionInternal.isRawValue(expression)) {
    return Results.success(expression)
  } else {
    return Results.failure()
  }
}

export const VariableExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Variable',
  builder: (name: string) => {
    return { name }
  },
  resolver: ({ name }, evaluate, context) => {
    const value = context.variables[name]
    Assertions.assertPresent(value)
    return value
  },
})

export const NotExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Not',
  builder: (value: Expression<boolean>) => {
    return { value }
  },
  resolver: (expression, evaluate) => {
    return !evaluate(expression.value)
  },
})

export const AndExpression = ExpressionInternal.defineExpression({
  expressionKey: 'And',
  builder: (operands: Array<Expression<boolean>>) => {
    return { operands }
  },
  resolver: (expression, evaluate) => {
    const values = expression.operands.map((it) => evaluate(it))
    const falseValue = values.find((it) => !it)
    return Objects.isNil(falseValue)
  },
})

export const OrExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Or',
  builder: (operands: Array<Expression<boolean>>) => {
    return { operands }
  },
  resolver: (expression, evaluate) => {
    const values = expression.operands.map((it) => evaluate(it))
    const trueValue = values.find((it) => it)
    return Objects.isPresent(trueValue)
  },
})

export const EqualsExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Equals',
  builder: (operands: Array<Expression<Signable>>) => {
    return { operands }
  },
  resolver: (expression, evaluate) => {
    const values = expression.operands.map((it) => evaluate(it)).map(Signatures.sign)

    if (values.length === 0) {
      return true
    }

    const first = values[0]
    return values.every((val) => val === first)
  },
})

export const ContainsExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Contains',
  builder: (collection: Expression<Array<Signable>>, operands: Array<Expression<Signable>>) => {
    return { collection, operands }
  },
  resolver: (expression, evaluate) => {
    const collection = evaluate(expression.collection)
    const values = expression.operands.map((it) => evaluate(it))
    return Arrays.containsAll(collection, values)
  },
})

export const LessThanExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Basic.LessThan',
  builder: (left: Expression<BasicType>, right: Expression<BasicType>) => {
    return { left, right }
  },
  resolver: ({ left, right }, evaluate) => {
    return evaluate(left) < evaluate(right)
  },
})

export const LessThanOrEqualExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Basic.LessThanOrEqual',
  builder: (left: Expression<BasicType>, right: Expression<BasicType>) => {
    return { left, right }
  },
  resolver: ({ left, right }, evaluate) => {
    return evaluate(left) <= evaluate(right)
  },
})

export const GreaterThanExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Basic.GreaterThan',
  builder: (left: Expression<BasicType>, right: Expression<BasicType>) => {
    return { left, right }
  },
  resolver: ({ left, right }, evaluate) => {
    return evaluate(left) > evaluate(right)
  },
})

export const GreaterThanOrEqualExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Basic.GreaterThanOrEqual',
  builder: (left: Expression<BasicType>, right: Expression<BasicType>) => {
    return { left, right }
  },
  resolver: ({ left, right }, evaluate) => {
    return evaluate(left) >= evaluate(right)
  },
})
