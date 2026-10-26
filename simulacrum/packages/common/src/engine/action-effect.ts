export * from '@simulacrum/ruleset/action-effect'
import { ActionEffect, ActionEffectFilter, ActionEffectType, ActionDamage } from '@simulacrum/ruleset/action-effect'
import { ActionTest } from '@simulacrum/ruleset/action-test'
import { ModifyActionEffectCharacterEffect } from '@simulacrum/ruleset/character-effect'
import { Rolls } from '@simulacrum/ruleset'
import { Ability, AbilityValue } from '@simulacrum/common/engine/ability'
import { Attribute, AttributeValue, Modifier } from '@simulacrum/common/engine/attribute'
import * as Attributes from '@simulacrum/common/engine/attribute'
import * as Tags from '@simulacrum/common/engine/tag'
import { CharacterSheet } from '@simulacrum/common/engine/character/character'
import { Ruleset } from '@simulacrum/common/engine/ruleset'
import { Abilities, CharacterEffects, Characteristics, Characters, Damage, Rulesets } from '@simulacrum/common/engine/engine'
import { Expression, ExpressionContext, Expressions } from '@bessemer/cornerstone/expression'
import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'
import { ExpressionEvaluator } from '@bessemer/cornerstone/expression/expression-evaluator'
import { Arrays, Objects } from '@bessemer/cornerstone'

export type ActionEffectValue = AttributeValue<ActionEffect>

export const getDamage = (effect: ActionEffect): ActionDamage | null => {
  return effect.type === ActionEffectType.Descriptive ? null : effect.damage
}

export const matchesFilter = (filter: ActionEffectFilter, effect: ActionEffect, ability: Ability): boolean => {
  if (!filter.effectTypes.includes(effect.type)) {
    return false
  }

  if (!Arrays.isEmpty(filter.abilities) && !filter.abilities.includes(ability.id)) {
    return false
  }

  if (!Tags.matchesFilter(filter.abilityTags, ability.tags)) {
    return false
  }

  const damage = getDamage(effect)
  if (!Arrays.isEmpty(filter.damageTypes) && (Objects.isNil(damage) || !filter.damageTypes.includes(damage.type))) {
    return false
  }

  return Arrays.isEmpty(filter.conditions) || (effect.type === ActionEffectType.Condition && filter.conditions.includes(effect.condition))
}

const getScore = (effect: ActionEffect, context: ExpressionContext): [number, number] => {
  const damage = getDamage(effect)
  const duration = effect.type === ActionEffectType.Damage ? null : effect.duration
  return [
    Objects.isNil(damage) ? 0 : Rolls.average(Damage.evaluateDamage(damage, context)),
    Objects.isNil(duration) ? 0 : Expressions.evaluate(duration.rounds, context),
  ]
}

const compareScores = (first: [number, number], second: [number, number]): number => {
  return first[0] !== second[0] ? first[0] - second[0] : first[1] - second[1]
}

export const StrongestActionEffectExpression = ExpressionInternal.defineExpression({
  expressionKey: 'ActionEffect.Strongest',
  builder: (operands: Array<Expression<ActionEffect>>) => {
    return { operands }
  },
  resolver: ({ operands }, evaluate, context): ActionEffect => {
    const effects = operands.map((it) => evaluate(it))
    const scores = effects.map((it) => getScore(it, context))
    return effects[scores.reduce((best, it, index) => (compareScores(it, scores[best]!) > 0 ? index : best), 0)]!
  },
})

const getPotency = (test: ActionTest | null, character: CharacterSheet, ruleset: Ruleset): number | null => {
  return Objects.isNil(test) ? null : Characteristics.getCharacteristicValue(character, Rulesets.getEntityById(test.offense, ruleset)).value
}

const buildAttribute = (effect: ActionEffect): Attribute<ActionEffect> => {
  return Attributes.attribute(effect, Expressions.reference(StrongestActionEffectExpression))
}

export const buildSimpleValue = (effect: ActionEffect): ActionEffectValue => {
  return Attributes.simpleAttributeValue(effect, buildAttribute(effect))
}

export const evaluateActionEffect = (
  effect: ActionEffect,
  modifiers: Array<Modifier<ActionEffect>>,
  evaluator: ExpressionEvaluator,
  optimizer: ExpressionEvaluator
): ActionEffectValue => {
  return Attributes.evaluateAttribute(buildAttribute(effect), modifiers, evaluator, {
    resolver: Expressions.createDeferredEvaluator(Rolls.Definitions),
    optimizer,
  })
}

export const evaluateAbility = (
  ability: AttributeValue<Ability>,
  effects: Array<ModifyActionEffectCharacterEffect>,
  character: CharacterSheet,
  evaluator: ExpressionEvaluator,
  ruleset: Ruleset
): AbilityValue => {
  const context = Characters.buildExpressionContext(character, ruleset)
  const potencies = new Map(ability.value.actions.map((action) => [action, getPotency(action.test, character, ruleset)]))
  const optimizers = new Map(
    ability.value.actions.map((action) => [
      action,
      Expressions.createEvaluator(Damage.buildPotencyContext(context, potencies.get(action) ?? 0), [
        StrongestActionEffectExpression,
        ...Rolls.Definitions,
      ]),
    ])
  )

  return Abilities.mapActionEffects(
    ability,
    (effect, action) => {
      const modifiers = effects.filter((it) => matchesFilter(it.filter, effect, ability.value)).map(CharacterEffects.sourceModifier)
      return evaluateActionEffect(effect, modifiers, evaluator, optimizers.get(action)!)
    },
    (action) => potencies.get(action) ?? null
  )
}
