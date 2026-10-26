export * from '@simulacrum/ruleset/damage'
import { Potency } from '@simulacrum/ruleset/damage'
import { Roll, RollOperand } from '@simulacrum/ruleset/roll'
import { ActionDamage } from '@simulacrum/ruleset/action-effect'
import { Rolls } from '@simulacrum/ruleset'
import { ExpressionContext, Expressions } from '@bessemer/cornerstone/expression'
import { Maths } from '@bessemer/cornerstone'

export const evaluate = (expression: RollOperand, context: ExpressionContext): Roll => {
  return Rolls.toRoll(Expressions.evaluate<Roll | number>(expression, context, Rolls.Definitions))
}

export const buildDamageContext = (damage: ActionDamage, context: ExpressionContext): ExpressionContext => {
  const potency = context.variables[Potency.name]
  if (!Maths.isNumber(potency)) {
    return context
  }

  const bonus = Expressions.evaluate(damage.potency, context)
  return { variables: { ...context.variables, ...Expressions.buildVariable(Potency, potency + bonus) } }
}

export const evaluateDamage = (damage: ActionDamage, context: ExpressionContext): Roll => {
  return evaluate(damage.amount, buildDamageContext(damage, context))
}

export const buildPotencyContext = (context: ExpressionContext, potency: number): ExpressionContext => {
  return { variables: { ...context.variables, ...Expressions.buildVariable(Potency, potency) } }
}
