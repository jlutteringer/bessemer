export * from '@simulacrum/ruleset/ruleset'
import { Ruleset, RulesetReference } from '@simulacrum/ruleset/ruleset'
import { Assertions } from '@bessemer/cornerstone'

export const getRuleset = (reference: RulesetReference, rulesets: Array<Ruleset>): Ruleset => {
  const ruleset = rulesets.find((it) => it.id === reference)
  Assertions.assertPresent(ruleset, () => `Unable to find Ruleset for Reference: ${reference}`)
  return ruleset
}
