export * from '@simulacrum/ruleset/trait'
import { Trait, TraitReference } from '@simulacrum/ruleset/trait'
import { Assertions } from '@bessemer/cornerstone'
import { Ruleset } from '@simulacrum/engine/ruleset'
import { TraitFilter } from '@simulacrum/ruleset/trait'
import * as Archetypes from '@simulacrum/engine/archetype'
import { Arrays } from '@bessemer/cornerstone'

export const getTrait = (trait: TraitReference, ruleset: Ruleset): Trait => {
  const matchingTrait = ruleset.traits.find((it) => it.id === trait)
  Assertions.assertPresent(matchingTrait, () => `Unable to find Trait for Reference: ${JSON.stringify(trait)}`)
  return matchingTrait
}

export const getTraits = (traits: Array<TraitReference>, ruleset: Ruleset): Array<Trait> => {
  return traits.map((trait) => getTrait(trait, ruleset))
}

export const applyFilter = (traits: Array<Trait>, filter: TraitFilter): Array<Trait> => {
  let filteredTraits = traits
  if (!Arrays.isEmpty(filter.archetypes)) {
    filteredTraits = filteredTraits.filter((it) => Archetypes.matchesFilter(filter.archetypes, it.archetypes))
  }
  if (!Arrays.isEmpty(filter.specificOptions)) {
    filteredTraits = filteredTraits.filter((it) => Arrays.contains(filter.specificOptions, it.id))
  }

  return filteredTraits
}
