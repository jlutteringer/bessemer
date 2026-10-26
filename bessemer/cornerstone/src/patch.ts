import { ArrayExpressions, Expression, Expressions, NumericExpressions, ReducingExpression } from '@bessemer/cornerstone/expression'
import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'
import { ExpressionEvaluator } from '@bessemer/cornerstone/expression/expression-evaluator'
import { UnknownRecord } from 'type-fest'
import * as Objects from '@bessemer/cornerstone/object'

export enum PatchType {
  Set = 'Patch.Set',
  Apply = 'Patch.Apply',
  Patch = 'Patch.Patch',
}

export type SetPatch<T> = {
  type: PatchType.Set
  value: Expression<T>
}

export type ApplyPatch<T> = {
  type: PatchType.Apply
  value: Expression<T>
  reducer: ReducingExpression<T, T>
}

export type PatchPatch<T> = {
  type: PatchType.Patch
  patch: Patchable<T>
}

export type Patch<T> = SetPatch<T> | ApplyPatch<T> | PatchPatch<T>

export type PatchValue<T> = {
  value: T
  patch: Patch<T>
}

export type Patchable<T> = {
  [P in keyof T]?: NonNullable<T[P]> extends Array<infer U>
    ? Patch<U[]> | Patchable<U[]>
    : NonNullable<T[P]> extends object
    ? Patch<T[P]> | Patchable<NonNullable<T[P]>>
    : Patch<T[P]> | T[P]
}

const PatchTypes = new Set<unknown>(Object.values(PatchType))

export const isPatch = (value: unknown): value is Patch<unknown> => {
  return Objects.isObject(value) && PatchTypes.has(value.type)
}

export const set = <T>(value: Expression<T>): Patch<T> => {
  return {
    type: PatchType.Set,
    value: value as any,
  }
}

export const apply = <T>(value: Expression<T>, reducer: ReducingExpression<T, T>): Patch<T> => {
  return {
    type: PatchType.Apply,
    value,
    reducer,
  }
}

export const patch = <T extends object, N extends Patchable<T> = Patchable<T>>(patch: N): Patch<T> => {
  return {
    type: PatchType.Patch,
    patch,
  }
}

export const sum = (value: Expression<number>): Patch<number> => {
  return apply(value, Expressions.reference(NumericExpressions.SumExpression))
}

export const multiply = (value: Expression<number>): Patch<number> => {
  return apply(value, Expressions.reference(NumericExpressions.MultiplyExpression))
}

export const concatenate = <T extends Array<Expression<unknown>>>(value: Expression<T>): Patch<T> => {
  return apply(value, Expressions.reference(ArrayExpressions.ConcatenateExpression)) as Patch<T>
}

export type ResolvePatchesResult<T> = {
  value: T
  patchValues: Array<PatchValue<T>>
}

export const resolveWithDetails = <T>(value: T, patches: Array<Patch<T>>, evaluator: ExpressionEvaluator): ResolvePatchesResult<T> => {
  let currentValue: T = value

  const patchValues = patches.map((patch) => {
    switch (patch.type) {
      case PatchType.Set:
        currentValue = evaluator.evaluate(patch.value)
        break
      case PatchType.Apply:
        currentValue = evaluator.evaluate(evaluator.dereference(patch.reducer, [currentValue, patch.value]))
        break
      case PatchType.Patch:
        currentValue = applyPatch(currentValue, patch.patch, evaluator)
        break
      default:
        throw new Error(`Unrecognized PatchType for value: ${JSON.stringify(patch)}`)
    }

    return { value: currentValue, patch }
  })

  return { value: currentValue, patchValues }
}

export const resolve = <T>(value: T, patches: Array<Patch<T>>, evaluator: ExpressionEvaluator): T => {
  return resolveWithDetails(value, patches, evaluator).value
}

export const isApplicable = <T>(value: T, patch: Patch<T>): boolean => {
  switch (patch.type) {
    case PatchType.Set:
      return true
    case PatchType.Apply:
      return !Objects.isNil(value)
    case PatchType.Patch:
      return !Objects.isNil(value) && isPatchableApplicable(value, patch.patch)
  }
}

const isPatchableApplicable = (value: unknown, patchable: unknown): boolean => {
  return Object.entries(patchable as UnknownRecord).every(([key, it]) => {
    const current = (value as UnknownRecord)[key]
    if (isPatch(it)) {
      return isApplicable(current, it)
    }

    if (Objects.isObject(it) && !ExpressionInternal.isExpression(it)) {
      return !Objects.isNil(current) && isPatchableApplicable(current, it)
    }

    return true
  })
}

const applyPatch = <T>(value: T, patch: Patchable<T>, evaluator: ExpressionEvaluator): T => {
  return Objects.deepMergeWith(value, patch, (value, patch) => {
    if (Objects.isNil(patch)) {
      return value
    }

    if (!isPatch(patch)) {
      return ExpressionInternal.isExpression(patch) ? patch : undefined
    }

    return evaluator.evaluate(resolve(value, [patch as Patch<T>], evaluator))
  })
}
