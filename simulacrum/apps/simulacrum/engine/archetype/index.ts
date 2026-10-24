export * from '@simulacrum/ruleset/archetype'
import { ArchetypeEntityType, ArchetypeReference } from '@simulacrum/ruleset/archetype'
import { RulesetEntityTypes } from '@simulacrum/ruleset/ruleset'
import { Ruleset } from '@simulacrum/engine/ruleset'
import { ArchetypeFilter } from '@simulacrum/ruleset/archetype'
import { Arrays } from '@bessemer/cornerstone'
import * as Rulesets from '@simulacrum/engine/ruleset'

export const getArchetypeById = <T extends ArchetypeEntityType>(archetype: ArchetypeReference<T>, ruleset: Ruleset): RulesetEntityTypes[T] => {
  return Rulesets.getEntityById(archetype, ruleset)
}

export const matchesFilter = (filter: ArchetypeFilter, targetArchetypes: Array<ArchetypeReference>): boolean => {
  return filter.every((group) => Arrays.some(group, (it) => Arrays.contains(targetArchetypes, it)))
}
