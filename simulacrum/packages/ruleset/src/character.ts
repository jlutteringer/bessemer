import { Trait, TraitReference } from '@simulacrum/ruleset/trait'
import { EvaluateExpression, ExpressionContext, Expressions, ExpressionVariable } from '@bessemer/cornerstone/expression'

export namespace CharacterValues {
  export const Level: ExpressionVariable<number> = Expressions.variable('Level')
  export const Traits: ExpressionVariable<Array<TraitReference>> = Expressions.variable('Traits')
}
