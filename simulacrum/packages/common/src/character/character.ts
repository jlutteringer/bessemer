import Zod from 'zod'
import { Uuid7 } from '@bessemer/cornerstone'
import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { RulesetConfiguration } from '@simulacrum/ruleset/ruleset'
import { CharacterRecord } from '@simulacrum/common/engine/character/character'
import { BaseEntityDto, BaseEntityShape } from '@simulacrum/common/entity/entity'
import { RulesetConfigurationSummary, RulesetConfigurationSummarySchema } from '@simulacrum/common/ruleset/ruleset'
import { UserSummaryDto, UserSummarySchema } from '@simulacrum/common/user/user'

export type CharacterSummaryDto = {
  id: UuidV7
  name: string
  level: number
  owner: UserSummaryDto
  ruleset: RulesetConfigurationSummary
}

export const CharacterSummarySchema = Zod.object({
  id: Uuid7.Schema,
  name: Zod.string(),
  level: Zod.number(),
  owner: UserSummarySchema,
  ruleset: RulesetConfigurationSummarySchema,
}) satisfies Zod.ZodType<CharacterSummaryDto>

export type CharacterDto = BaseEntityDto &
  CharacterSummaryDto &
  CharacterRecord & {
    campaignId: UuidV7 | null
  }

export const CharacterSchema: Zod.ZodType<CharacterDto> = CharacterSummarySchema.extend({
  ...BaseEntityShape,
  initialValues: Zod.custom<CharacterRecord['initialValues']>(),
  selections: Zod.custom<CharacterRecord['selections']>(),
  selectedAbilities: Zod.custom<CharacterRecord['selectedAbilities']>(),
  campaignId: Uuid7.Schema.nullable(),
})

export type CreateCharacterRequest = CharacterRecord & {
  ruleset: RulesetConfiguration
}

export const CreateCharacterRequestSchema: Zod.ZodType<CreateCharacterRequest> = Zod.custom<CreateCharacterRequest>()

export type UpdateCharacterRequest = CharacterRecord

export const UpdateCharacterRequestSchema: Zod.ZodType<UpdateCharacterRequest> = Zod.custom<UpdateCharacterRequest>()
