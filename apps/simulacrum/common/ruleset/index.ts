import { Trait } from '@simulacrum/common/trait'
import { Archetype } from '@simulacrum/common/archetype'
import { ResourcePoolDefinition } from '@simulacrum/common/resource-pool'
import { LoadoutType } from '@simulacrum/common/loadout'
import { ProgressionTable } from '@simulacrum/common/progression-table'
import { Effect } from '@simulacrum/common/effect'
import { Ability } from '@simulacrum/common/ability'
import { Characteristic, CharacteristicGroup } from '@simulacrum/common/characteristic'
import { Reference } from '@bessemer/cornerstone/reference'
import { Assertions } from '@bessemer/cornerstone'

export type RulesetReference = Reference<'Ruleset'>
export type RulesetExtensionReference = Reference<'RulesetExtension'>

export type AbstractRuleset = {
  name: string
  creatureCharacteristics: Array<Characteristic<unknown>>
  playerCharacteristics: Array<Characteristic<unknown>>
  characteristicGroups: Array<CharacteristicGroup>
  archetypes: Array<Archetype>
  traits: Array<Trait>
  abilities: Array<Ability>
  resourcePools: Array<ResourcePoolDefinition>
  loadoutTypes: Array<LoadoutType>
}

export type Ruleset = { id: RulesetReference } & AbstractRuleset & {
    progressionTable: ProgressionTable<Effect>
  }

export type RulesetExtension = { id: RulesetExtensionReference } & AbstractRuleset & {
    ruleset: RulesetReference
  }

export const getRuleset = (reference: RulesetReference, rulesets: Array<Ruleset>): Ruleset => {
  const ruleset = rulesets.find((it) => it.id === reference)
  Assertions.assertPresent(ruleset, () => `Unable to find Ruleset for Reference: ${reference}`)
  return ruleset
}
