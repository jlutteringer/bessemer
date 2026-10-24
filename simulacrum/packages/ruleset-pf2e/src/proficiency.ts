import { CharacterValues } from '@simulacrum/ruleset'
import { NumericExpressions } from '@bessemer/cornerstone/expression'

// The proficiency bonus for each rank: your level plus 2, 4, 6 or 8. Untrained adds nothing.
export const Trained = NumericExpressions.sum([CharacterValues.Level, 2])
export const Expert = NumericExpressions.sum([CharacterValues.Level, 4])
export const Master = NumericExpressions.sum([CharacterValues.Level, 6])
export const Legendary = NumericExpressions.sum([CharacterValues.Level, 8])
