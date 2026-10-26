export * from '@simulacrum/ruleset/attribute'
import { Attribute, Modifier, Valued } from '@simulacrum/ruleset/attribute'
import { EvaluateExpression, Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { ExpressionEvaluator } from '@bessemer/cornerstone/expression/expression-evaluator'
import { Arrays, Combinables, Objects, Patches } from '@bessemer/cornerstone'
import { Patch, PatchType } from '@bessemer/cornerstone/patch'

export type Attributable<T> =
  | {
      [P in keyof T]: T[P] extends Array<infer U> ? [Attributable<U>] : T[P] extends object | undefined ? Attributable<T[P]> : Attribute<T[P]>
    }
  | Attribute<number>
  | Attribute<string>

export interface AttributeValue<T> extends Valued<T> {
  initialValue: T
  activeModifiers: Array<ModifierValue<T>>
  inactiveModifiers: Array<Modifier<T>>
  attribute: Attribute<T>
}

export interface ModifierValue<T> extends Valued<T> {
  modifier: Modifier<T>
}

export type EvaluateModifiersResponse<T> = {
  activeModifiers: Array<Modifier<T>>
  inactiveModifiers: Array<Modifier<T>>
}

export const buildModifierValue = <T>(value: T, modifier: Modifier<T>): ModifierValue<T> => {
  return { value, modifier }
}

export const evaluateModifiers = <T>(modifiers: Array<Modifier<T>>, evaluate: EvaluateExpression): EvaluateModifiersResponse<T> => {
  const activeModifiers: Array<Modifier<T>> = []
  const inactiveModifiers: Array<Modifier<T>> = []

  for (const modifier of modifiers) {
    if (Objects.isNil(modifier.condition)) {
      activeModifiers.push(modifier)
    } else {
      const result = evaluate(modifier.condition)
      if (result) {
        activeModifiers.push(modifier)
      } else {
        inactiveModifiers.push(modifier)
      }
    }
  }

  return { activeModifiers, inactiveModifiers }
}

export const simpleAttributeValue = <T>(value: T, attribute: Attribute<T>): AttributeValue<T> => {
  return {
    value,
    initialValue: value,
    activeModifiers: [],
    inactiveModifiers: [],
    attribute,
  }
}

export const getPatchPhase = (patch: Patch<unknown>): number => {
  if (patch.type === PatchType.Set) {
    return 0
  }

  if (patch.type === PatchType.Apply && Objects.deepEqual(patch.reducer, Expressions.reference(NumericExpressions.MultiplyExpression))) {
    return 2
  }

  return 1
}

export type AttributeEvaluators = {
  resolver?: ExpressionEvaluator
  optimizer?: ExpressionEvaluator
}

export const evaluateAttribute = <T>(
  attribute: Attribute<T>,
  modifiers: Array<Modifier<T>>,
  evaluator: ExpressionEvaluator,
  evaluators: AttributeEvaluators = {}
): AttributeValue<T> => {
  const initialValue = evaluator.evaluate(attribute.baseValue)
  const { activeModifiers, inactiveModifiers } = evaluateModifiers(modifiers, evaluator.evaluate)
  const applicableModifiers = activeModifiers.filter((it) => Patches.isApplicable(initialValue, it.patch))

  const candidates = Combinables.combinations(applicableModifiers).map((combination) => {
    const orderedModifiers = Arrays.sortBy(combination, (it) => getPatchPhase(it.patch))
    const { value, patchValues } = Patches.resolveWithDetails(
      initialValue,
      orderedModifiers.map((it) => it.patch),
      evaluators.resolver ?? evaluator
    )

    return { value, modifiers: orderedModifiers.map((it, index) => buildModifierValue(patchValues[index]!.value, it)) }
  })

  if (Arrays.isEmpty(candidates)) {
    return { value: initialValue, initialValue, attribute, activeModifiers: [], inactiveModifiers: [...inactiveModifiers, ...activeModifiers] }
  }

  const winner = candidates.length === 1 ? candidates[0]! : candidates[selectOptimal(attribute, candidates, evaluators.optimizer ?? evaluator)]!
  const winningModifiers = winner.modifiers.map((it) => it.modifier)
  return {
    value: winner.value,
    initialValue,
    attribute,
    activeModifiers: winner.modifiers,
    inactiveModifiers: [...inactiveModifiers, ...activeModifiers.filter((it) => !winningModifiers.includes(it))],
  }
}

type ModifierCandidate<T> = {
  value: T
  modifiers: Array<ModifierValue<T>>
}

const selectOptimal = <T>(attribute: Attribute<T>, candidates: Array<ModifierCandidate<T>>, optimizer: ExpressionEvaluator): number => {
  if (Objects.isNil(attribute.optimizer)) {
    return candidates.reduce((best, it, index) => (it.modifiers.length > candidates[best]!.modifiers.length ? index : best), 0)
  }

  const values = candidates.map((it) => it.value)
  const best = optimizer.evaluate(optimizer.dereference(attribute.optimizer, values))
  return values.findIndex((it) => Objects.deepEqual(it, best))
}
