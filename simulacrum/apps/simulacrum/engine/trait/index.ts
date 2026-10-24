export * from '@simulacrum/ruleset/trait'
import { Trait, TraitReference } from '@simulacrum/ruleset/trait'
import { Ruleset } from '@simulacrum/engine/ruleset'
import { TraitFilter } from '@simulacrum/ruleset/trait'
import * as Tags from '@simulacrum/engine/tag'
import { Arrays } from '@bessemer/cornerstone'
import * as Rulesets from '@simulacrum/engine/ruleset'
import { RulesetEntities } from '@simulacrum/ruleset'

export const getTraits = (ruleset: Ruleset): Array<Trait> => {
  return Rulesets.getEntities(ruleset, RulesetEntities.RulesetEntityType.Trait)
}

export const getTraitById = (trait: TraitReference, ruleset: Ruleset): Trait => {
  return Rulesets.getEntityById(trait, ruleset)
}

export const getTraitsByIds = (traits: Array<TraitReference>, ruleset: Ruleset): Array<Trait> => {
  return traits.map((trait) => getTraitById(trait, ruleset))
}

export const applyFilter = (traits: Array<Trait>, filter: TraitFilter): Array<Trait> => {
  let filteredTraits = traits
  if (!Arrays.isEmpty(filter.tags)) {
    filteredTraits = filteredTraits.filter((it) => Tags.matchesFilter(filter.tags, it.tags))
  }
  if (!Arrays.isEmpty(filter.specificOptions)) {
    filteredTraits = filteredTraits.filter((it) => Arrays.contains(filter.specificOptions, it.id))
  }

  return filteredTraits
}
