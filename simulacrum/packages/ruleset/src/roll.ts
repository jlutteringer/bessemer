import { Maths, Patches } from '@bessemer/cornerstone'
import { Expression, ExpressionDefinitions, Expressions } from '@bessemer/cornerstone/expression'
import { Patch } from '@bessemer/cornerstone/patch'
import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'

export enum RollType {
  Dice = 'Dice',
  Constant = 'Constant',
  Sum = 'Sum',
  Multiply = 'Multiply',
}

export type DiceRoll = {
  type: RollType.Dice
  count: number
  sides: number
}

export type ConstantRoll = {
  type: RollType.Constant
  value: number
}

export type SumRoll = {
  type: RollType.Sum
  terms: Array<Roll>
}

export type MultiplyRoll = {
  type: RollType.Multiply
  roll: Roll
  factor: number
}

export type Roll = DiceRoll | ConstantRoll | SumRoll | MultiplyRoll

export const constant = (value: number): ConstantRoll => {
  return { type: RollType.Constant, value }
}

const buildDice = (count: number, sides: number): Roll => {
  return count === 0 ? constant(0) : { type: RollType.Dice, count, sides }
}

const buildSum = (terms: Array<Roll>): Roll => {
  const flattened = terms.flatMap((it) => (it.type === RollType.Sum ? it.terms : [it]))
  const total = flattened.reduce((sum, it) => (it.type === RollType.Constant ? sum + it.value : sum), 0)
  const rolled = flattened.filter((it) => it.type !== RollType.Constant)
  const combined = total === 0 ? rolled : [...rolled, constant(total)]

  if (combined.length === 0) {
    return constant(0)
  }

  return combined.length === 1 ? combined[0]! : { type: RollType.Sum, terms: combined }
}

const buildMultiply = (roll: Roll, factor: number): Roll => {
  if (factor === 1) {
    return roll
  }

  if (roll.type === RollType.Constant) {
    return constant(roll.value * factor)
  }

  if (roll.type === RollType.Multiply) {
    return buildMultiply(roll.roll, roll.factor * factor)
  }

  return { type: RollType.Multiply, roll, factor }
}

export const toRoll = (value: Roll | number): Roll => {
  return Maths.isNumber(value) ? constant(value) : value
}

export const average = (roll: Roll): number => {
  switch (roll.type) {
    case RollType.Dice:
      return (roll.count * (roll.sides + 1)) / 2
    case RollType.Constant:
      return roll.value
    case RollType.Sum:
      return roll.terms.reduce((total, it) => total + average(it), 0)
    case RollType.Multiply:
      return average(roll.roll) * roll.factor
  }
}

export const formatFactor = (label: string, factor: number, isCompound: boolean): string => {
  const operand = isCompound ? `(${label})` : label
  const divisor = 1 / factor
  return Number.isInteger(divisor) ? `${operand} / ${divisor}` : `${operand} × ${factor}`
}

export const format = (roll: Roll): string => {
  switch (roll.type) {
    case RollType.Dice:
      return `${roll.count}d${roll.sides}`
    case RollType.Constant:
      return String(roll.value)
    case RollType.Sum:
      return roll.terms
        .map((it, index) => {
          if (index === 0) {
            return format(it)
          }

          return it.type === RollType.Constant && it.value < 0 ? ` − ${Math.abs(it.value)}` : ` + ${format(it)}`
        })
        .join('')
    case RollType.Multiply:
      return formatFactor(format(roll.roll), roll.factor, roll.roll.type === RollType.Sum)
  }
}

export const DiceExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Roll.Dice',
  builder: (count: Expression<number>, sides: number) => {
    return { count, sides }
  },
  resolver: ({ count, sides }, evaluate): Roll => {
    return buildDice(evaluate(count), sides)
  },
})

export const dice = DiceExpression.builder

export type RollOperand = Expression<Roll> | Expression<number>

export const SumExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Roll.Sum',
  builder: (initialOperands: Array<RollOperand>) => {
    const operands: Array<RollOperand> = initialOperands.flatMap((it) => (ExpressionInternal.isType(it, SumExpression) ? it.operands : [it]))
    return { operands }
  },
  resolver: ({ operands }, evaluate): Roll => {
    return buildSum(operands.map((it) => toRoll(evaluate(it))))
  },
})

export const sum = SumExpression.builder

export const MultiplyExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Roll.Multiply',
  builder: (roll: RollOperand, factor: Expression<number>) => {
    return { roll, factor }
  },
  resolver: ({ roll, factor }, evaluate): Roll => {
    return buildMultiply(toRoll(evaluate(roll)), evaluate(factor))
  },
})

export const multiply = MultiplyExpression.builder

export const add = (bonus: RollOperand): Patch<Expression<Roll>> => {
  return Patches.apply(bonus as Expression<Roll>, Expressions.reference(SumExpression) as any)
}

export const Definitions: ExpressionDefinitions = [DiceExpression, SumExpression, MultiplyExpression]
