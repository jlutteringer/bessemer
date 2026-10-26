import {
  ArrayExpressions,
  EvaluateExpression,
  Expression,
  Expressions,
  NumericExpressions,
  ReducingExpression,
} from '@bessemer/cornerstone/expression'
import { Patch } from '@bessemer/cornerstone/patch'
import { CharacterEffectSource } from '@simulacrum/ruleset/character-effect'
import { Combinability } from '@bessemer/cornerstone/combinable'
import { Arrays, Combinables, Equalitors, Objects, Patches, Sets } from '@bessemer/cornerstone'

export interface Valued<T> {
  value: T
}

export const valued = <T>(value: T): Valued<T> => {
  return { value }
}

export interface Attribute<T> {
  baseValue: Expression<T>
  optimizer: ReducingExpression<T, T> | null
}

export interface Modifier<T> {
  patch: Patch<T>
  combinability: Combinability
  condition?: Expression<boolean>
  source?: CharacterEffectSource
}

export const attribute = <T>(baseValue: Expression<T>, optimizer: ReducingExpression<T, T> | null = null): Attribute<T> => {
  return {
    baseValue,
    optimizer,
  }
}

export const modifier = <T>(
  patch: Patch<T>,
  options?: {
    combinability?: Combinability
    condition?: Expression<boolean>
  }
): Modifier<T> => {
  return {
    patch,
    combinability: options?.combinability ?? Combinables.DefaultCombinability,
    ...(Objects.isPresent(options?.condition) ? { condition: options?.condition } : {}),
  }
}
