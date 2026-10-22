export * from '@simulacrum/ruleset/archetype'
import { Archetype, ArchetypeReference } from '@simulacrum/ruleset/archetype'
import { Ruleset } from '@simulacrum/engine/ruleset'
import { ArchetypeFilter } from '@simulacrum/ruleset/archetype'
import { Arrays } from '@bessemer/cornerstone'
import * as Rulesets from '@simulacrum/engine/ruleset'

export const getArchetypeById = (archetype: ArchetypeReference, ruleset: Ruleset): Archetype => {
  return Rulesets.getEntityById(archetype, ruleset)
}

export const matchesFilter = (filter: ArchetypeFilter, targetArchetypes: Array<ArchetypeReference>): boolean => {
  return filter.every((group) => Arrays.some(group, (it) => Arrays.contains(targetArchetypes, it)))
}
