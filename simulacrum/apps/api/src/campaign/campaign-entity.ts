import { Prisma } from '@simulacrum/api/generated/prisma/client'
import { UserInclude } from '@simulacrum/api/user/user-entity'
import { CharacterInclude } from '@simulacrum/api/character/character-entity'

export const CampaignSummaryInclude = { owner: { include: UserInclude } } as const satisfies Prisma.CampaignInclude

export type CampaignSummaryEntity = Prisma.CampaignGetPayload<{ include: typeof CampaignSummaryInclude }>

export const CampaignInclude = {
  ...CampaignSummaryInclude,
  members: { include: { user: { include: UserInclude } }, orderBy: { createdAt: 'asc' } },
  characters: { include: CharacterInclude, orderBy: { createdAt: 'asc' } },
} as const satisfies Prisma.CampaignInclude

export type CampaignEntity = Prisma.CampaignGetPayload<{ include: typeof CampaignInclude }>
