import Zod from 'zod'
import { Uris } from '@bessemer/cornerstone'
import { ValueOf } from 'type-fest'
import { RichTextJson, RichTextJsonSchema } from '@bessemer/cornerstone/rich-text'
import { NominalType } from '@bessemer/cornerstone/types'

export const RulesetEntityType = {
  ActionType: 'action-type',
  Archetype: 'archetype',
  Trait: 'trait',
  Ability: 'ability',
  Characteristic: 'characteristic',
  CharacteristicGroup: 'characteristic-group',
  CharacterOption: 'character-option',
  ResourcePool: 'resource-pool',
  LoadoutType: 'loadout-type',
  Content: 'content',
} as const

export type RulesetEntityType = ValueOf<typeof RulesetEntityType>

const RulesetEntityTypes = new Set<string>(Object.values(RulesetEntityType))

export const isRulesetEntityType = (value: string): value is RulesetEntityType => {
  return RulesetEntityTypes.has(value)
}

export type RulesetEntityReference<T extends RulesetEntityType = RulesetEntityType> = NominalType<string, ['RulesetEntityReference', T]>

export const RulesetEntitySchema = Zod.object({
  id: Zod.string().transform((it) => it as RulesetEntityReference),
  name: Zod.string(),
  description: RichTextJsonSchema,
})

export type RulesetEntity = {
  id: RulesetEntityReference
  name: string
  description: RichTextJson
}

export type RulesetEntityProps = {
  name: string
  description: string
}

export const buildReference = <T extends RulesetEntityType>(type: T, reference: string): RulesetEntityReference<T> => {
  return Uris.format({ scheme: type, location: { path: reference } }) as string as RulesetEntityReference<T>
}
