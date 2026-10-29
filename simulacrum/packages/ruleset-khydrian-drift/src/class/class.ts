import { CharacterValues } from '@simulacrum/ruleset'
import { Expressions } from '@bessemer/cornerstone/expression'

export const SubclassLevelPrerequisite = Expressions.greaterThanOrEqual(CharacterValues.Level, 4)
