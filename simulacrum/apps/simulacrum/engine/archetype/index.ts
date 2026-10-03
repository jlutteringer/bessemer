export * from '@simulacrum/ruleset/archetype'
import { Archetype, ArchetypeReference } from '@simulacrum/ruleset/archetype'
import { Assertions } from '@bessemer/cornerstone'
import { Ruleset } from '@simulacrum/engine/ruleset'

export const getArchetype = (archetype: ArchetypeReference, ruleset: Ruleset): Archetype => {
  const matchingArchetype = ruleset.archetypes.find((it) => it.id === archetype)
  Assertions.assertPresent(matchingArchetype, () => `Unable to find Archetype for Reference: ${JSON.stringify(archetype)}`)
  return matchingArchetype
}
