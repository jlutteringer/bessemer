export * from '@simulacrum/ruleset/trait'
import { Trait, TraitReference } from '@simulacrum/ruleset/trait'
import { Assertions } from '@bessemer/cornerstone'
import { Ruleset } from '@simulacrum/engine/ruleset'

export const getTrait = (trait: TraitReference, ruleset: Ruleset): Trait => {
  const matchingTrait = ruleset.traits.find((it) => it.id === trait)
  Assertions.assertPresent(matchingTrait, () => `Unable to find Trait for Reference: ${JSON.stringify(trait)}`)
  return matchingTrait
}

export const getTraits = (traits: Array<TraitReference>, ruleset: Ruleset): Array<Trait> => {
  return traits.map((trait) => getTrait(trait, ruleset))
}
