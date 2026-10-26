import Zod from 'zod'
import { Uuid7 } from '@bessemer/cornerstone'
import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { Zotch } from '@bessemer/zotch'
import {
  CampaignDto,
  CampaignInviteDto,
  CampaignInviteSchema,
  CampaignSchema,
  CreateCampaignRequest,
  CreateCampaignRequestSchema,
  UpdateCampaignRequest,
  UpdateCampaignRequestSchema,
} from '@simulacrum/common/campaign/campaign'
import { ApiContext, AuthorizationHeadersSchema, getAuthorizationHeaders, isNotFound, unwrapResult } from '@simulacrum/common/api/api'

export const CampaignApi = Zotch.api({
  listCampaigns: {
    method: 'get',
    path: '/campaigns',
    response: Zod.array(CampaignSchema),
    headers: AuthorizationHeadersSchema,
  },
  fetchCampaign: {
    method: 'get',
    path: '/campaigns/:campaignId',
    params: { campaignId: Uuid7.Schema },
    response: CampaignSchema,
    headers: AuthorizationHeadersSchema,
  },
  createCampaign: {
    method: 'post',
    path: '/campaigns',
    body: CreateCampaignRequestSchema,
    response: CampaignSchema,
    headers: AuthorizationHeadersSchema,
  },
  updateCampaign: {
    method: 'put',
    path: '/campaigns/:campaignId',
    params: { campaignId: Uuid7.Schema },
    body: UpdateCampaignRequestSchema,
    response: CampaignSchema,
    headers: AuthorizationHeadersSchema,
  },
  deleteCampaign: {
    method: 'delete',
    path: '/campaigns/:campaignId',
    params: { campaignId: Uuid7.Schema },
    response: Zod.void(),
    headers: AuthorizationHeadersSchema,
  },
  resetInviteCode: {
    method: 'post',
    path: '/campaigns/:campaignId/invite-code',
    params: { campaignId: Uuid7.Schema },
    response: CampaignSchema,
    headers: AuthorizationHeadersSchema,
  },
  fetchInvite: {
    method: 'get',
    path: '/campaigns/invites/:inviteCode',
    params: { inviteCode: Zod.string() },
    response: CampaignInviteSchema,
    headers: AuthorizationHeadersSchema,
  },
  joinCampaign: {
    method: 'post',
    path: '/campaigns/invites/:inviteCode/join',
    params: { inviteCode: Zod.string() },
    response: CampaignSchema,
    headers: AuthorizationHeadersSchema,
  },
  removeMember: {
    method: 'delete',
    path: '/campaigns/:campaignId/members/:userId',
    params: { campaignId: Uuid7.Schema, userId: Uuid7.Schema },
    response: Zod.void(),
    headers: AuthorizationHeadersSchema,
  },
  addCharacter: {
    method: 'put',
    path: '/campaigns/:campaignId/characters/:characterId',
    params: { campaignId: Uuid7.Schema, characterId: Uuid7.Schema },
    response: CampaignSchema,
    headers: AuthorizationHeadersSchema,
  },
  removeCharacter: {
    method: 'delete',
    path: '/campaigns/:campaignId/characters/:characterId',
    params: { campaignId: Uuid7.Schema, characterId: Uuid7.Schema },
    response: CampaignSchema,
    headers: AuthorizationHeadersSchema,
  },
})

const client = Zotch.client(CampaignApi)

export const listCampaigns = async (context: ApiContext): Promise<Array<CampaignDto>> => {
  const response = await client.listCampaigns({
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  return unwrapResult(response)
}

export const fetchCampaign = async (campaignId: UuidV7, context: ApiContext): Promise<CampaignDto | null> => {
  const response = await client.fetchCampaign({
    params: { campaignId },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (isNotFound(response)) {
    return null
  }

  return unwrapResult(response)
}

export const createCampaign = async (request: CreateCampaignRequest, context: ApiContext): Promise<CampaignDto> => {
  const response = await client.createCampaign({
    body: request,
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  return unwrapResult(response)
}

export const updateCampaign = async (campaignId: UuidV7, request: UpdateCampaignRequest, context: ApiContext): Promise<CampaignDto | null> => {
  const response = await client.updateCampaign({
    params: { campaignId },
    body: request,
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (isNotFound(response)) {
    return null
  }

  return unwrapResult(response)
}

export const deleteCampaign = async (campaignId: UuidV7, context: ApiContext): Promise<void> => {
  const response = await client.deleteCampaign({
    params: { campaignId },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (isNotFound(response)) {
    return
  }

  unwrapResult(response)
}

export const resetInviteCode = async (campaignId: UuidV7, context: ApiContext): Promise<CampaignDto | null> => {
  const response = await client.resetInviteCode({
    params: { campaignId },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (isNotFound(response)) {
    return null
  }

  return unwrapResult(response)
}

export const fetchInvite = async (inviteCode: string, context: ApiContext): Promise<CampaignInviteDto | null> => {
  const response = await client.fetchInvite({
    params: { inviteCode },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (isNotFound(response)) {
    return null
  }

  return unwrapResult(response)
}

export const joinCampaign = async (inviteCode: string, context: ApiContext): Promise<CampaignDto | null> => {
  const response = await client.joinCampaign({
    params: { inviteCode },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (isNotFound(response)) {
    return null
  }

  return unwrapResult(response)
}

export const removeMember = async (campaignId: UuidV7, userId: UuidV7, context: ApiContext): Promise<void> => {
  const response = await client.removeMember({
    params: { campaignId, userId },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (isNotFound(response)) {
    return
  }

  unwrapResult(response)
}

export const addCharacter = async (campaignId: UuidV7, characterId: UuidV7, context: ApiContext): Promise<CampaignDto> => {
  const response = await client.addCharacter({
    params: { campaignId, characterId },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  return unwrapResult(response)
}

export const removeCharacter = async (campaignId: UuidV7, characterId: UuidV7, context: ApiContext): Promise<CampaignDto> => {
  const response = await client.removeCharacter({
    params: { campaignId, characterId },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  return unwrapResult(response)
}
