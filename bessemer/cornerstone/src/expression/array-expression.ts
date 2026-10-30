import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'
import { EvaluateExpression, Expression, ExpressionVariable } from '@bessemer/cornerstone/expression'
import { Arrays, Objects } from '@bessemer/cornerstone'
import { Dictionary } from '@bessemer/cornerstone/types'
import { ValueExpression, VariableExpression } from '@bessemer/cornerstone/expression/core-expression'

export const ConcatenateExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Array.Concatenate',
  builder: (operands: Array<Expression<Array<Expression<unknown>>>>) => {
    return { operands }
  },
  resolver: ({ operands }, evaluate) => {
    const values = evaluate(operands).map((it) => evaluate(it))
    return Arrays.flatten(values)
  },
})

export const concatenate = ConcatenateExpression.builder

export const FirstExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Array.First',
  builder: (operands: Array<Expression<Array<Expression<unknown>>>>) => {
    return { operands }
  },
  resolver: ({ operands }, evaluate) => {
    const values = evaluate(operands).map((it) => evaluate(it))
    return Arrays.first(values)
  },
})

export const first = FirstExpression.builder

export type Lambda<ReturnType> = {
  variable: string
  body: Expression<ReturnType>
}

let lambdaDepth = 0

const lambda = <T, ReturnType>(body: (item: ExpressionVariable<T>) => Expression<ReturnType>): Lambda<ReturnType> => {
  const variable = `$item${lambdaDepth}`
  lambdaDepth++
  try {
    return { variable, body: body(VariableExpression.builder(variable) as ExpressionVariable<T>) }
  } finally {
    lambdaDepth--
  }
}

const isLambda = (value: Dictionary<unknown>): value is Lambda<unknown> => {
  return typeof value['variable'] === 'string' && 'body' in value
}

const substitute = (value: Expression<unknown>, variable: string, item: unknown): unknown => {
  if (ExpressionInternal.isType(value, VariableExpression) && value.name === variable) {
    return ValueExpression.builder(item)
  }

  if (Array.isArray(value)) {
    return value.map((it) => substitute(it, variable, item))
  }

  if (Objects.isObject(value) && !(isLambda(value) && value.variable === variable)) {
    return Objects.mapValues(value, (it) => substitute(it, variable, item))
  }

  return value
}

const apply = <ReturnType>({ variable, body }: Lambda<ReturnType>, item: unknown, evaluate: EvaluateExpression): ReturnType => {
  return evaluate(substitute(body, variable, item) as Expression<ReturnType>)
}

export const FilterExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Array.Filter',
  builder: (list: Expression<Array<unknown>>, predicate: Lambda<boolean>) => {
    return { list, predicate }
  },
  resolver: ({ list, predicate }, evaluate) => {
    return evaluate(list).filter((it) => apply(predicate, it, evaluate))
  },
})

export const filter = <T>(list: Expression<Array<T>>, predicate: (item: ExpressionVariable<T>) => Expression<boolean>): Expression<Array<T>> => {
  return FilterExpression.builder(list, lambda(predicate)) as Expression<Array<T>>
}

export const MapExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Array.Map',
  builder: (list: Expression<Array<unknown>>, mapper: Lambda<unknown>) => {
    return { list, mapper }
  },
  resolver: ({ list, mapper }, evaluate) => {
    return evaluate(list).map((it) => apply(mapper, it, evaluate))
  },
})

export const map = <T, ReturnType>(
  list: Expression<Array<T>>,
  mapper: (item: ExpressionVariable<T>) => Expression<ReturnType>
): Expression<Array<ReturnType>> => {
  return MapExpression.builder(list, lambda(mapper)) as Expression<Array<ReturnType>>
}

export const LengthExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Array.Length',
  builder: (list: Expression<Array<unknown>>) => {
    return { list }
  },
  resolver: ({ list }, evaluate) => {
    return evaluate(list).length
  },
})

export const length = (list: Expression<Array<unknown>>): Expression<number> => {
  return LengthExpression.builder(list) as Expression<number>
}
