import { Arrays } from '@bessemer/cornerstone'
import { Ruleset, RulesetConfiguration, RulesetExtension, RulesetExtensionReference, RulesetReference } from '@simulacrum/ruleset/ruleset'
import { RulesetConfigurationSummary, RulesetSummary } from '@simulacrum/common/ruleset/ruleset'
import { RulesetRegistry } from '@simulacrum/api/ruleset/ruleset-registry'

export namespace RulesetProjections {
  export const projectRulesetConfiguration = (entity: { rulesetId: string; rulesetExtensionIds: Array<string> }): RulesetConfiguration => ({
    id: entity.rulesetId as RulesetReference,
    extensions: entity.rulesetExtensionIds.map((it) => it as RulesetExtensionReference),
  })

  export const projectRulesetConfigurationSummary = (entity: {
    rulesetId: string
    rulesetExtensionIds: Array<string>
  }): RulesetConfigurationSummary => {
    const configuration = projectRulesetConfiguration(entity)
    const ruleset = RulesetRegistry.rulesets.find((it) => it.id === configuration.id)

    return {
      id: configuration.id,
      name: ruleset?.name ?? configuration.id,
      extensions: configuration.extensions.map((id) => ({ id, name: RulesetRegistry.extensions.find((it) => it.id === id)?.name ?? id })),
    }
  }

  export const projectRulesetSummary = (ruleset: Ruleset, extensions: Array<RulesetExtension>): RulesetSummary => ({
    id: ruleset.id,
    name: ruleset.name,
    hasRulebook: !Arrays.isEmpty(ruleset.content),
    extensions: extensions.map((it) => ({ id: it.id, name: it.name })),
  })
}
