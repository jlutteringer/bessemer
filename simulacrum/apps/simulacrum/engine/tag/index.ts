export * from '@simulacrum/ruleset/tag'
import { TagEntityType, TagReference } from '@simulacrum/ruleset/tag'
import { RulesetEntityTypes } from '@simulacrum/ruleset/ruleset'
import { Ruleset } from '@simulacrum/engine/ruleset'
import { TagFilter } from '@simulacrum/ruleset/tag'
import { Arrays } from '@bessemer/cornerstone'
import * as Rulesets from '@simulacrum/engine/ruleset'

export const getTagById = <T extends TagEntityType>(tag: TagReference<T>, ruleset: Ruleset): RulesetEntityTypes[T] => {
  return Rulesets.getEntityById(tag, ruleset)
}

export const matchesFilter = (filter: TagFilter, targetTags: Array<TagReference>): boolean => {
  return filter.every((group) => Arrays.some(group, (it) => Arrays.contains(targetTags, it)))
}
