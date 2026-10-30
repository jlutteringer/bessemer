import { ArrayExpressions, Expressions, NumericExpressions, StringExpressions } from '@bessemer/cornerstone/expression'

test('TODO', () => {
  NumericExpressions.sum([Expressions.variable('VitalityPoints'), 10])

  Expressions.equals([NumericExpressions.sum([Expressions.variable('VitalityPoints'), 10]), 5])

  Expressions.and([
    Expressions.lessThan(NumericExpressions.sum([Expressions.variable('VitalityPoints'), 10]), 15),
    StringExpressions.substring('one', 'two'),
  ])

  Expressions.equals([5, null])
})

test('filter keeps the items that match the predicate', () => {
  const expression = ArrayExpressions.filter(Expressions.variable<Array<number>>('values'), (it) => Expressions.greaterThan(it, 2))
  expect(Expressions.evaluate(expression, { variables: { values: [1, 2, 3, 4] } })).toEqual([3, 4])
})

test('map transforms each item', () => {
  const expression = ArrayExpressions.map(Expressions.variable<Array<number>>('values'), (it) => NumericExpressions.sum([it, 1]))
  expect(Expressions.evaluate(expression, { variables: { values: [1, 2, 3] } })).toEqual([2, 3, 4])
})

test('nested lambdas can refer to the outer item', () => {
  const expression = ArrayExpressions.map(Expressions.variable<Array<number>>('thresholds'), (threshold) =>
    ArrayExpressions.filter(Expressions.variable<Array<number>>('values'), (value) => Expressions.greaterThan(value, threshold))
  )
  expect(Expressions.evaluate(expression, { variables: { thresholds: [1, 3], values: [1, 2, 3, 4] } })).toEqual([[2, 3, 4], [4]])
})

test('lambda variables are named deterministically', () => {
  const build = () => ArrayExpressions.map(Expressions.variable<Array<number>>('values'), (it) => NumericExpressions.sum([it, 1]))
  expect(build()).toEqual(build())
})

test('a lambda built separately keeps its own item when reused inside another lambda', () => {
  const large = ArrayExpressions.filter(Expressions.variable<Array<number>>('values'), (it) => Expressions.greaterThan(it, 2))
  const expression = ArrayExpressions.map(Expressions.variable<Array<number>>('thresholds'), () => large)
  expect(Expressions.evaluate(expression, { variables: { thresholds: [0, 1], values: [1, 2, 3] } })).toEqual([[3], [3]])
})

test('count returns the number of items, including after a filter', () => {
  const values = Expressions.variable<Array<number>>('values')
  const context = { variables: { values: [1, 2, 3, 4] } }
  expect(Expressions.evaluate(ArrayExpressions.count(values), context)).toEqual(4)
  expect(Expressions.evaluate(ArrayExpressions.count(ArrayExpressions.filter(values, (it) => Expressions.greaterThan(it, 2))), context)).toEqual(2)
})
