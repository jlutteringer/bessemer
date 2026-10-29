import { TraitReference } from '@simulacrum/ruleset/trait'
import { AbilityReference } from '@simulacrum/ruleset/ability'
import { Expressions, ExpressionVariable } from '@bessemer/cornerstone/expression'

export const Level: ExpressionVariable<number> = Expressions.variable('Level')
export const Traits: ExpressionVariable<Array<TraitReference>> = Expressions.variable('Traits')
export const Abilities: ExpressionVariable<Array<AbilityReference>> = Expressions.variable('Abilities')
