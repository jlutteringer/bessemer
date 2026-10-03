import { Trait } from '@simulacrum/common/trait'
import { Archetype } from '@simulacrum/common/archetype'
import { ResourcePoolDefinition } from '@simulacrum/common/resource-pool'
import { LoadoutType } from '@simulacrum/common/loadout'
import { ProgressionTable } from '@simulacrum/common/progression-table'
import { Effect } from '@simulacrum/common/effect'
import { Ability } from '@simulacrum/common/ability'
import { Characteristic, CharacteristicGroup } from '@simulacrum/common/characteristic'
import { Reference } from '@bessemer/cornerstone/reference'

export type RulesetReference = Reference<'Ruleset'>

export type Ruleset = { id: RulesetReference } & {
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
