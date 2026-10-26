import Zod from 'zod'
import { Uuid7 } from '@bessemer/cornerstone'
import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { RulesetConfiguration } from '@simulacrum/ruleset/ruleset'
import { BaseEntityDto, BaseEntityShape } from '@simulacrum/common/entity/entity'
import { CharacterSummaryDto, CharacterSummarySchema } from '@simulacrum/common/character/character'
import { RulesetConfigurationSchema, RulesetConfigurationSummary, RulesetConfigurationSummarySchema } from '@simulacrum/common/ruleset/ruleset'
import { UserSummaryDto, UserSummarySchema } from '@simulacrum/common/user/user'

export type CampaignSummaryDto = {
  id: UuidV7
  name: string
  owner: UserSummaryDto
  ruleset: RulesetConfigurationSummary
}

export const CampaignSummarySchema = Zod.object({
  id: Uuid7.Schema,
  name: Zod.string(),
  owner: UserSummarySchema,
  ruleset: RulesetConfigurationSummarySchema,
}) satisfies Zod.ZodType<CampaignSummaryDto>

export type CampaignDto = BaseEntityDto &
  CampaignSummaryDto & {
    inviteCode: string
    members: Array<UserSummaryDto>
    characters: Array<CharacterSummaryDto>
  }

export const CampaignSchema: Zod.ZodType<CampaignDto> = CampaignSummarySchema.extend({
  ...BaseEntityShape,
  inviteCode: Zod.string(),
  members: Zod.array(UserSummarySchema),
  characters: Zod.array(CharacterSummarySchema),
})

export type CampaignInviteDto = {
  campaign: CampaignSummaryDto
  isMember: boolean
}

export const CampaignInviteSchema: Zod.ZodType<CampaignInviteDto> = Zod.object({
  campaign: CampaignSummarySchema,
  isMember: Zod.boolean(),
})

export type CreateCampaignRequest = {
  name: string
  ruleset: RulesetConfiguration
}

export const CreateCampaignRequestSchema: Zod.ZodType<CreateCampaignRequest> = Zod.object({
  name: Zod.string().trim().min(1),
  ruleset: RulesetConfigurationSchema,
})

export type UpdateCampaignRequest = {
  name: string
}

export const UpdateCampaignRequestSchema: Zod.ZodType<UpdateCampaignRequest> = Zod.object({
  name: Zod.string().trim().min(1),
})
