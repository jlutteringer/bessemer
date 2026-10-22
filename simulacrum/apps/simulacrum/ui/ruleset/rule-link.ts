import { Objects, Results, Strings, Uris } from '@bessemer/cornerstone'
import { Ruleset } from '@simulacrum/ruleset/ruleset'
import { RulesetEntity, RulesetEntityReference } from '@simulacrum/ruleset/ruleset-entity'
import { RulesetEntities } from '@simulacrum/ruleset'
import { Rulesets } from '@simulacrum/engine'

export const parse = (href: string): RulesetEntityReference | null => {
  const result = Uris.parseString(href)
  if (Results.isFailure(result)) {
    return null
  }

  const { scheme, location } = result
  if (Objects.isNil(scheme) || Strings.isBlank(location.path) || !RulesetEntities.isRulesetEntityType(scheme)) {
    return null
  }

  return href as RulesetEntityReference
}

export const resolve = (link: RulesetEntityReference, ruleset: Ruleset): RulesetEntity | null => {
  return Rulesets.findEntityById(link, ruleset)
}
