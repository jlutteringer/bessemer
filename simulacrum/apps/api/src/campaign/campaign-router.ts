import { Uuid7 } from '@bessemer/cornerstone'
import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { Router, type Response } from 'express'
import { requireAuth } from '@simulacrum/api/auth'
import { createApplicationContext } from '@simulacrum/api/context'
import { UserService } from '@simulacrum/api/user/user-service'
import { CharacterService } from '@simulacrum/api/character/character-service'
import { CampaignService } from '@simulacrum/api/campaign/campaign-service'
import { Rulesets } from '@simulacrum/common'
import { CreateCampaignRequestSchema, UpdateCampaignRequestSchema } from '@simulacrum/common/campaign/campaign'

export const CampaignRouter = Router()

CampaignRouter.use('/campaigns', requireAuth)

const parseId = (value: string): UuidV7 | null => {
  const result = Uuid7.Schema.safeParse(value)
  return result.success ? result.data : null
}

const sendError = (response: Response, status: number, error: string) => {
  response.status(status).json({ error })
}

const loadCampaign = async (campaignIdParam: string, response: Response) => {
  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  const campaignId = parseId(campaignIdParam)
  const campaign = campaignId === null ? null : await CampaignService.findCampaign(user, campaignId, context)
  if (campaign === null) {
    sendError(response, 404, 'campaign_not_found')
    return null
  }

  return { context, user, campaign }
}

CampaignRouter.get('/campaigns', async (_request, response) => {
  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  response.json(await CampaignService.listCampaigns(user, context))
})

CampaignRouter.post('/campaigns', async (request, response) => {
  const body = CreateCampaignRequestSchema.safeParse(request.body)
  if (!body.success) {
    sendError(response, 400, 'invalid_campaign')
    return
  }

  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  response.status(201).json(await CampaignService.createCampaign(user, body.data, context))
})

CampaignRouter.get('/campaigns/invites/:inviteCode', async (request, response) => {
  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  const invite = await CampaignService.findInvite(user, request.params.inviteCode, context)
  if (invite === null) {
    sendError(response, 404, 'invite_not_found')
    return
  }

  response.json(invite)
})

CampaignRouter.post('/campaigns/invites/:inviteCode/join', async (request, response) => {
  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  const campaign = await CampaignService.joinCampaign(user, request.params.inviteCode, context)
  if (campaign === null) {
    sendError(response, 404, 'invite_not_found')
    return
  }

  response.json(campaign)
})

CampaignRouter.get('/campaigns/:campaignId', async (request, response) => {
  const loaded = await loadCampaign(request.params.campaignId, response)
  if (loaded !== null) {
    response.json(loaded.campaign)
  }
})

CampaignRouter.put('/campaigns/:campaignId', async (request, response) => {
  const body = UpdateCampaignRequestSchema.safeParse(request.body)
  if (!body.success) {
    sendError(response, 400, 'invalid_campaign')
    return
  }

  const loaded = await loadCampaign(request.params.campaignId, response)
  if (loaded === null) {
    return
  }

  const { context, user, campaign } = loaded
  if (campaign.owner.id !== user.id) {
    sendError(response, 403, 'not_campaign_owner')
    return
  }

  response.json(await CampaignService.updateCampaign(user, campaign.id, body.data, context))
})

CampaignRouter.delete('/campaigns/:campaignId', async (request, response) => {
  const loaded = await loadCampaign(request.params.campaignId, response)
  if (loaded === null) {
    return
  }

  const { context, user, campaign } = loaded
  if (campaign.owner.id !== user.id) {
    sendError(response, 403, 'not_campaign_owner')
    return
  }

  await CampaignService.deleteCampaign(campaign.id, context)
  response.status(204).end()
})

CampaignRouter.post('/campaigns/:campaignId/invite-code', async (request, response) => {
  const loaded = await loadCampaign(request.params.campaignId, response)
  if (loaded === null) {
    return
  }

  const { context, user, campaign } = loaded
  if (campaign.owner.id !== user.id) {
    sendError(response, 403, 'not_campaign_owner')
    return
  }

  response.json(await CampaignService.resetInviteCode(user, campaign.id, context))
})

CampaignRouter.delete('/campaigns/:campaignId/members/:userId', async (request, response) => {
  const loaded = await loadCampaign(request.params.campaignId, response)
  if (loaded === null) {
    return
  }

  const { context, user, campaign } = loaded
  const member = campaign.members.find((it) => it.id === request.params.userId)
  if (member === undefined) {
    sendError(response, 404, 'member_not_found')
    return
  }

  if (member.id === campaign.owner.id) {
    sendError(response, 400, 'owner_cannot_leave')
    return
  }

  if (campaign.owner.id !== user.id && member.id !== user.id) {
    sendError(response, 403, 'not_campaign_owner')
    return
  }

  await CampaignService.removeMember(campaign.id, member.id, context)
  response.status(204).end()
})

CampaignRouter.put('/campaigns/:campaignId/characters/:characterId', async (request, response) => {
  const loaded = await loadCampaign(request.params.campaignId, response)
  if (loaded === null) {
    return
  }

  const { context, user, campaign } = loaded
  const characterId = parseId(request.params.characterId)
  const character = characterId === null ? null : await CharacterService.findCharacter(user, characterId, context)
  if (character === null) {
    sendError(response, 404, 'character_not_found')
    return
  }

  if (character.campaignId !== null && character.campaignId !== campaign.id) {
    sendError(response, 409, 'character_in_another_campaign')
    return
  }

  if (!Rulesets.isSameConfiguration(Rulesets.toConfiguration(character.ruleset), Rulesets.toConfiguration(campaign.ruleset))) {
    sendError(response, 400, 'ruleset_mismatch')
    return
  }

  response.json(await CampaignService.addCharacter(user, campaign.id, character.id, context))
})

CampaignRouter.delete('/campaigns/:campaignId/characters/:characterId', async (request, response) => {
  const loaded = await loadCampaign(request.params.campaignId, response)
  if (loaded === null) {
    return
  }

  const { context, user, campaign } = loaded
  const character = campaign.characters.find((it) => it.id === request.params.characterId)
  if (character === undefined) {
    sendError(response, 404, 'character_not_found')
    return
  }

  if (character.owner.id !== user.id && campaign.owner.id !== user.id) {
    sendError(response, 403, 'not_character_owner')
    return
  }

  response.json(await CampaignService.removeCharacter(user, campaign.id, character.id, context))
})
