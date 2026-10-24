import { Trait } from '@simulacrum/ruleset/trait'
import { Archetype } from '@simulacrum/ruleset/archetype'
import { ResourcePoolDefinition } from '@simulacrum/ruleset/resource-pool'
import { LoadoutType } from '@simulacrum/ruleset/loadout'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { Effect } from '@simulacrum/ruleset/effect'
import { Ability } from '@simulacrum/ruleset/ability'
import { Characteristic, CharacteristicGroup } from '@simulacrum/ruleset/characteristic'
import { ContentEntity, ContentSection } from '@simulacrum/ruleset/content'
import { ActionType } from '@simulacrum/ruleset/action-type'
import { Reference } from '@bessemer/cornerstone/reference'
import { RulesetEntity, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { CharacterOption } from '@simulacrum/ruleset/character-option'

export type RulesetEntityTypes = {
  [RulesetEntityType.ActionType]: ActionType
  [RulesetEntityType.Archetype]: Archetype
  [RulesetEntityType.Trait]: Trait
  [RulesetEntityType.Ability]: Ability
  [RulesetEntityType.Characteristic]: Characteristic
  [RulesetEntityType.CharacteristicGroup]: CharacteristicGroup
  [RulesetEntityType.CharacterOption]: CharacterOption
  [RulesetEntityType.ResourcePool]: ResourcePoolDefinition
  [RulesetEntityType.LoadoutType]: LoadoutType
  [RulesetEntityType.Content]: ContentEntity
}

export type RulesetReference = Reference<'Ruleset'>
export type RulesetExtensionReference = Reference<'RulesetExtension'>

export type AbstractRuleset = {
  name: string
  entities: Array<RulesetEntity>
  progressionTable: ProgressionTable<Effect>
  content: Array<ContentSection>
}

export type Ruleset = { id: RulesetReference } & AbstractRuleset

export type RulesetExtension = { id: RulesetExtensionReference } & AbstractRuleset & {
    ruleset: RulesetReference
  }

export type RulesetConfiguration = {
  id: RulesetReference
  extensions: Array<RulesetExtensionReference>
}
