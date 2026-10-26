import { Arrays } from '@bessemer/cornerstone'
import { Ruleset, RulesetExtension } from '@simulacrum/ruleset/ruleset'
import { RulesetSummary } from '@simulacrum/common/ruleset/ruleset'

export namespace RulesetProjections {
  export const projectRulesetSummary = (ruleset: Ruleset, extensions: Array<RulesetExtension>): RulesetSummary => ({
    id: ruleset.id,
    name: ruleset.name,
    hasRulebook: !Arrays.isEmpty(ruleset.content),
    extensions: extensions.map((it) => ({ id: it.id, name: it.name })),
  })
}
