export * from '@simulacrum/ruleset/archetype'
import { Archetype, ArchetypeReference } from '@simulacrum/ruleset/archetype'
import { Assertions } from '@bessemer/cornerstone'
import { Ruleset } from '@simulacrum/engine/ruleset'
import { ArchetypeFilter } from '@simulacrum/ruleset/archetype'
import { Arrays } from '@bessemer/cornerstone'

export const getArchetype = (archetype: ArchetypeReference, ruleset: Ruleset): Archetype => {
  const matchingArchetype = ruleset.archetypes.find((it) => it.id === archetype)
  Assertions.assertPresent(matchingArchetype, () => `Unable to find Archetype for Reference: ${JSON.stringify(archetype)}`)
  return matchingArchetype
}

export const matchesFilter = (filter: ArchetypeFilter, targetArchetypes: Array<ArchetypeReference>): boolean => {
  return filter.every((group) => Arrays.some(group, (it) => Arrays.contains(targetArchetypes, it)))
}
