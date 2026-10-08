export * from '@simulacrum/ruleset/ruleset'
import { Ruleset, RulesetConfiguration, RulesetExtension, RulesetExtensionReference, RulesetReference } from '@simulacrum/ruleset/ruleset'
import * as ProgressionTables from '@simulacrum/engine/progression-table'
import { Assertions } from '@bessemer/cornerstone'

export const getRuleset = (reference: RulesetReference, rulesets: Array<Ruleset>): Ruleset => {
  const ruleset = rulesets.find((it) => it.id === reference)
  Assertions.assertPresent(ruleset, () => `Unable to find Ruleset for Reference: ${reference}`)
  return ruleset
}

export const getRulesetExtension = (reference: RulesetExtensionReference, extensions: Array<RulesetExtension>): RulesetExtension => {
  const extension = extensions.find((it) => it.id === reference)
  Assertions.assertPresent(extension, () => `Unable to find RulesetExtension for Reference: ${reference}`)
  return extension
}

export const getAvailableExtensions = (ruleset: Ruleset, extensions: Array<RulesetExtension>): Array<RulesetExtension> => {
  return extensions.filter((it) => it.ruleset === ruleset.id)
}

export const resolveRuleset = (configuration: RulesetConfiguration, rulesets: Array<Ruleset>, extensions: Array<RulesetExtension>): Ruleset => {
  const ruleset = getRuleset(configuration.id, rulesets)
  return configuration.extensions.map((it) => getRulesetExtension(it, extensions)).reduce(applyExtension, ruleset)
}

const applyExtension = (ruleset: Ruleset, extension: RulesetExtension): Ruleset => {
  Assertions.assert(
    extension.ruleset === ruleset.id,
    () => `RulesetExtension: ${extension.id} extends Ruleset: ${extension.ruleset}, not Ruleset: ${ruleset.id}`
  )

  const merge = <T extends { id: string }>(base: Array<T>, additions: Array<T>): Array<T> => {
    const duplicate = additions.find((it) => base.some((existing) => existing.id === it.id))
    Assertions.assert(duplicate === undefined, () => `RulesetExtension: ${extension.id} redefines: ${duplicate?.id}`)
    return [...base, ...additions]
  }

  return {
    ...ruleset,
    creatureCharacteristics: merge(ruleset.creatureCharacteristics, extension.creatureCharacteristics),
    playerCharacteristics: merge(ruleset.playerCharacteristics, extension.playerCharacteristics),
    characteristicGroups: merge(ruleset.characteristicGroups, extension.characteristicGroups),
    archetypes: merge(ruleset.archetypes, extension.archetypes),
    traits: merge(ruleset.traits, extension.traits),
    abilities: merge(ruleset.abilities, extension.abilities),
    resourcePools: merge(ruleset.resourcePools, extension.resourcePools),
    loadoutTypes: merge(ruleset.loadoutTypes, extension.loadoutTypes),
    progressionTable: ProgressionTables.merge(ruleset.progressionTable, extension.progressionTable),
  }
}
