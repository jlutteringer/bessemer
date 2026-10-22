import { TraitReference } from '@simulacrum/ruleset/trait'
import { Expressions, ExpressionVariable } from '@bessemer/cornerstone/expression'

export const Level: ExpressionVariable<number> = Expressions.variable('Level')
export const Traits: ExpressionVariable<Array<TraitReference>> = Expressions.variable('Traits')
