import { Reference } from '@bessemer/cornerstone/reference'
import { Arrays, Assertions } from '@bessemer/cornerstone'
import { ApplicationContext } from '@simulacrum/common/application'

export type ArchetypeReference = Reference<'Archetype'>

export type ArchetypeProps = {
  name: string
}

export type Archetype = { id: ArchetypeReference } & ArchetypeProps & {}

export const defineArchetype = (reference: string, props: ArchetypeProps): Archetype => {
  return {
    id: reference as ArchetypeReference,
    ...props,
  }
}

export const getArchetype = (archetype: ArchetypeReference, context: ApplicationContext): Archetype => {
  const matchingArchetype = context.client.ruleset.archetypes.find((it) => it.id === archetype)
  Assertions.assertPresent(matchingArchetype, () => `Unable to find Archetype for Reference: ${JSON.stringify(archetype)}`)
  return matchingArchetype
}

export const matchesFilter = (filterArchetypes: Array<ArchetypeReference>, targetArchetypes: Array<ArchetypeReference>): boolean => {
  return !Arrays.isEmpty(targetArchetypes) && Arrays.containsAll(filterArchetypes, targetArchetypes)
}
