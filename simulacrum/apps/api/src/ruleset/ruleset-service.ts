import { Dnd4e } from '@simulacrum/ruleset-dnd4e'
import { Dnd5e } from '@simulacrum/ruleset-dnd5e'
import { ForgeOfTheArtificer } from '@simulacrum/ruleset-dnd5e/eberron-forge-of-the-artificer'
import { KhydrianDrift } from '@simulacrum/ruleset-khydrian-drift'
import { Pf2e } from '@simulacrum/ruleset-pf2e'
import { Ruleset, RulesetExtension, RulesetExtensionReference, RulesetReference } from '@simulacrum/ruleset/ruleset'
import * as Rulesets from '@simulacrum/common/engine/ruleset'

export namespace RulesetService {
  const rulesets: Array<Ruleset> = [Dnd5e, Dnd4e, Pf2e, KhydrianDrift]
  const extensions: Array<RulesetExtension> = [ForgeOfTheArtificer]

  export const listRulesets = (): Array<Ruleset> => {
    return rulesets
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
