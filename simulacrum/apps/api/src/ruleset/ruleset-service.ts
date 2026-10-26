import { Ruleset, RulesetExtension, RulesetExtensionReference, RulesetReference } from '@simulacrum/ruleset/ruleset'
import * as Rulesets from '@simulacrum/common/engine/ruleset'
import { RulesetSummary } from '@simulacrum/common/ruleset/ruleset'
import { RulesetProjections } from '@simulacrum/api/ruleset/ruleset-projections'
import { RulesetRegistry } from '@simulacrum/api/ruleset/ruleset-registry'

export namespace RulesetService {
  const { rulesets, extensions } = RulesetRegistry

  export const listRulesets = (): Array<RulesetSummary> => {
    return rulesets.map((it) => RulesetProjections.projectRulesetSummary(it, getAvailableExtensions(it)))
  }

  export const findRuleset = (rulesetId: RulesetReference): Ruleset | null => {
    return rulesets.find((it) => it.id === rulesetId) ?? null
  }

  export const getAvailableExtensions = (ruleset: Ruleset): Array<RulesetExtension> => {
    return Rulesets.getAvailableExtensions(ruleset, extensions)
  }

  export const resolveRuleset = (ruleset: Ruleset, extensionIds: Array<RulesetExtensionReference>): Ruleset => {
    return Rulesets.resolveRuleset({ id: ruleset.id, extensions: extensionIds }, rulesets, extensions)
  }
}
