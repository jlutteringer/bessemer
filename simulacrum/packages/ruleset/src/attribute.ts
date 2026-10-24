import {
  ArrayExpressions,
  EvaluateExpression,
  Expression,
  Expressions,
  NumericExpressions,
  ReducingExpression,
} from '@bessemer/cornerstone/expression'
import { Patch } from '@bessemer/cornerstone/patch'
import { EffectSource } from '@simulacrum/ruleset/effect'
import { Combinability } from '@bessemer/cornerstone/combinable'
import { Arrays, Combinables, Equalitors, Objects, Patches, Sets } from '@bessemer/cornerstone'

export type Attribute<T> = {
  baseValue: Expression<T>
  optimizer: ReducingExpression<T, T>
}

export type Modifier<T> = {
  value: Patch<T>
  combinability: Combinability
  condition?: Expression<boolean>
  source?: EffectSource
}

export const attribute = <T>(baseValue: Expression<T>, optimizer: ReducingExpression<T, T>): Attribute<T> => {
  return {
    baseValue,
    optimizer,
  }
}

export const modifier = <T>(
  value: Patch<T>,
  options?: {
    combinability?: Combinability
    condition?: Expression<boolean>
  }
): Modifier<T> => {
  return {
    value,
    combinability: options?.combinability ?? Combinables.DefaultCombinability,
    ...(Objects.isPresent(options?.condition) ? { condition: options?.condition } : {}),
  }
}
