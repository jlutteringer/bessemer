import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { randomBytes } from 'node:crypto'
import { CampaignDto, CampaignInviteDto, CreateCampaignRequest, UpdateCampaignRequest } from '@simulacrum/common/campaign/campaign'
import { UserDto } from '@simulacrum/common/user/user'
import { ApplicationContext } from '@simulacrum/api/context'
import * as Projections from '@simulacrum/api/projection/projection'
import { CampaignProjections } from '@simulacrum/api/campaign/campaign-projections'
import { CampaignInclude, CampaignSummaryInclude } from '@simulacrum/api/campaign/campaign-entity'

export namespace CampaignService {
  const generateInviteCode = (): string => {
    return randomBytes(12).toString('base64url')
  }

  const findCampaignForMember = async (user: UserDto, campaignId: UuidV7, context: ApplicationContext) => {
    return context.prisma.campaign.findFirst({
      where: { id: campaignId, members: { some: { userId: user.id } } },
      include: CampaignInclude,
    })
  }

  export const listCampaigns = async (user: UserDto, context: ApplicationContext): Promise<Array<CampaignDto>> => {
    const campaigns = await context.prisma.campaign.findMany({
      where: { members: { some: { userId: user.id } } },
      include: CampaignInclude,
      orderBy: { createdAt: 'asc' },
    })

    return CampaignProjections.projectCampaign(campaigns, context)
  }

  export const findCampaign = async (user: UserDto, campaignId: UuidV7, context: ApplicationContext): Promise<CampaignDto | null> => {
    const campaign = await findCampaignForMember(user, campaignId, context)
    return campaign === null ? null : Projections.projectOne(campaign, CampaignProjections.projectCampaign, context)
  }

  export const createCampaign = async (user: UserDto, request: CreateCampaignRequest, context: ApplicationContext): Promise<CampaignDto> => {
    const campaign = await context.prisma.campaign.create({
      data: {
        ownerId: user.id,
        name: request.name,
        rulesetId: request.ruleset.id,
        rulesetExtensionIds: request.ruleset.extensions,
        inviteCode: generateInviteCode(),
        members: { create: { userId: user.id } },
      },
      include: CampaignInclude,
    })

    return Projections.projectOne(campaign, CampaignProjections.projectCampaign, context)
  }

  export const updateCampaign = async (
    user: UserDto,
    campaignId: UuidV7,
    request: UpdateCampaignRequest,
    context: ApplicationContext
  ): Promise<CampaignDto | null> => {
    await context.prisma.campaign.update({ where: { id: campaignId }, data: { name: request.name } })
    return findCampaign(user, campaignId, context)
  }

  export const deleteCampaign = async (campaignId: UuidV7, context: ApplicationContext): Promise<void> => {
    await context.prisma.campaign.delete({ where: { id: campaignId } })
  }

  export const resetInviteCode = async (user: UserDto, campaignId: UuidV7, context: ApplicationContext): Promise<CampaignDto | null> => {
    await context.prisma.campaign.update({ where: { id: campaignId }, data: { inviteCode: generateInviteCode() } })
    return findCampaign(user, campaignId, context)
  }

  export const findInvite = async (user: UserDto, inviteCode: string, context: ApplicationContext): Promise<CampaignInviteDto | null> => {
    const campaign = await context.prisma.campaign.findUnique({
      where: { inviteCode },
      include: { ...CampaignSummaryInclude, members: { where: { userId: user.id } } },
    })

    if (campaign === null) {
      return null
    }

    return {
      campaign: await Projections.projectOne(campaign, CampaignProjections.projectCampaignSummary, context),
      isMember: campaign.members.length > 0,
    }
  }

  export const joinCampaign = async (user: UserDto, inviteCode: string, context: ApplicationContext): Promise<CampaignDto | null> => {
    const campaign = await context.prisma.campaign.findUnique({ where: { inviteCode } })
    if (campaign === null) {
      return null
    }

    await context.prisma.campaignMember.createMany({ data: { campaignId: campaign.id, userId: user.id }, skipDuplicates: true })
    return findCampaign(user, campaign.id as UuidV7, context)
  }

  export const removeMember = async (campaignId: UuidV7, userId: UuidV7, context: ApplicationContext): Promise<void> => {
    await context.prisma.$transaction([
      context.prisma.character.updateMany({ where: { campaignId, ownerId: userId }, data: { campaignId: null } }),
      context.prisma.campaignMember.deleteMany({ where: { campaignId, userId } }),
    ])
  }

  export const addCharacter = async (
    user: UserDto,
    campaignId: UuidV7,
    characterId: UuidV7,
    context: ApplicationContext
  ): Promise<CampaignDto | null> => {
    await context.prisma.character.update({ where: { id: characterId }, data: { campaignId } })
    return findCampaign(user, campaignId, context)
  }

  export const removeCharacter = async (
    user: UserDto,
    campaignId: UuidV7,
    characterId: UuidV7,
    context: ApplicationContext
  ): Promise<CampaignDto | null> => {
    await context.prisma.character.updateMany({ where: { id: characterId, campaignId }, data: { campaignId: null } })
    return findCampaign(user, campaignId, context)
  }
}
