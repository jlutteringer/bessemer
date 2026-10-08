import { Trait } from '@simulacrum/ruleset/trait'
import { Archetype } from '@simulacrum/ruleset/archetype'
import { ResourcePoolDefinition } from '@simulacrum/ruleset/resource-pool'
import { LoadoutType } from '@simulacrum/ruleset/loadout'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { Effect } from '@simulacrum/ruleset/effect'
import { Ability } from '@simulacrum/ruleset/ability'
import { Characteristic, CharacteristicGroup } from '@simulacrum/ruleset/characteristic'
import { Reference } from '@bessemer/cornerstone/reference'

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
  progressionTable: ProgressionTable<Effect>
}

export type Ruleset = { id: RulesetReference } & AbstractRuleset

export type RulesetExtension = { id: RulesetExtensionReference } & AbstractRuleset & {
    ruleset: RulesetReference
  }

export type RulesetConfiguration = {
  id: RulesetReference
  extensions: Array<RulesetExtensionReference>
}
