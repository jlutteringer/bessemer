'use server'

import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { revalidatePath } from 'next/cache'
import { CampaignDto, CreateCampaignRequest, UpdateCampaignRequest } from '@simulacrum/common/campaign/campaign'
import { getApiContext } from '@simulacrum/application/api'
import { CampaignApi } from '@simulacrum/common'

const revalidate = () => {
  revalidatePath('/campaigns', 'layout')
  revalidatePath('/characters')
}

export const createCampaign = async (request: CreateCampaignRequest): Promise<CampaignDto> => {
  const campaign = await CampaignApi.createCampaign(request, await getApiContext())
  revalidate()
  return campaign
}

export const updateCampaign = async (campaignId: UuidV7, request: UpdateCampaignRequest): Promise<CampaignDto | null> => {
  const campaign = await CampaignApi.updateCampaign(campaignId, request, await getApiContext())
  revalidate()
  return campaign
}

export const deleteCampaign = async (campaignId: UuidV7): Promise<void> => {
  await CampaignApi.deleteCampaign(campaignId, await getApiContext())
  revalidate()
}

export const resetInviteCode = async (campaignId: UuidV7): Promise<void> => {
  await CampaignApi.resetInviteCode(campaignId, await getApiContext())
  revalidate()
}

export const joinCampaign = async (inviteCode: string): Promise<CampaignDto | null> => {
  const campaign = await CampaignApi.joinCampaign(inviteCode, await getApiContext())
  revalidate()
  return campaign
}

export const removeMember = async (campaignId: UuidV7, userId: UuidV7): Promise<void> => {
  await CampaignApi.removeMember(campaignId, userId, await getApiContext())
  revalidate()
}

export const addCharacter = async (campaignId: UuidV7, characterId: UuidV7): Promise<void> => {
  await CampaignApi.addCharacter(campaignId, characterId, await getApiContext())
  revalidate()
}

export const removeCharacter = async (campaignId: UuidV7, characterId: UuidV7): Promise<void> => {
  await CampaignApi.removeCharacter(campaignId, characterId, await getApiContext())
  revalidate()
}
