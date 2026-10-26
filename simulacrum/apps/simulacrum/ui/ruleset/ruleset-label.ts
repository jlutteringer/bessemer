import { RulesetConfigurationSummary } from '@simulacrum/common/ruleset/ruleset'

export const getRulesetLabel = (ruleset: RulesetConfigurationSummary): string => {
  return [ruleset.name, ...ruleset.extensions.map((it) => it.name)].join(' + ')
}
