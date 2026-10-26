import Zod from 'zod'
import { Uuid7 } from '@bessemer/cornerstone'
import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { Zotch } from '@bessemer/zotch'
import {
  CharacterDto,
  CharacterSchema,
  CreateCharacterRequest,
  CreateCharacterRequestSchema,
  UpdateCharacterRequest,
  UpdateCharacterRequestSchema,
} from '@simulacrum/common/character/character'
import { ApiContext, AuthorizationHeadersSchema, getAuthorizationHeaders, isNotFound, unwrapResult } from '@simulacrum/common/api/api'

export const CharacterApi = Zotch.api({
  listCharacters: {
    method: 'get',
    path: '/characters',
    response: Zod.array(CharacterSchema),
    headers: AuthorizationHeadersSchema,
  },
  fetchCharacter: {
    method: 'get',
    path: '/characters/:characterId',
    params: { characterId: Uuid7.Schema },
    response: CharacterSchema,
    headers: AuthorizationHeadersSchema,
  },
  createCharacter: {
    method: 'post',
    path: '/characters',
    body: CreateCharacterRequestSchema,
    response: CharacterSchema,
    headers: AuthorizationHeadersSchema,
  },
  updateCharacter: {
    method: 'put',
    path: '/characters/:characterId',
    params: { characterId: Uuid7.Schema },
    body: UpdateCharacterRequestSchema,
    response: CharacterSchema,
    headers: AuthorizationHeadersSchema,
  },
  deleteCharacter: {
    method: 'delete',
    path: '/characters/:characterId',
    params: { characterId: Uuid7.Schema },
    response: Zod.void(),
    headers: AuthorizationHeadersSchema,
  },
})

const client = Zotch.client(CharacterApi)

export const listCharacters = async (context: ApiContext): Promise<Array<CharacterDto>> => {
  const response = await client.listCharacters({
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  return unwrapResult(response)
}

export const fetchCharacter = async (characterId: UuidV7, context: ApiContext): Promise<CharacterDto | null> => {
  const response = await client.fetchCharacter({
    params: { characterId },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (isNotFound(response)) {
    return null
  }

  return unwrapResult(response)
}

export const createCharacter = async (request: CreateCharacterRequest, context: ApiContext): Promise<CharacterDto> => {
  const response = await client.createCharacter({
    body: request,
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  return unwrapResult(response)
}

export const updateCharacter = async (characterId: UuidV7, request: UpdateCharacterRequest, context: ApiContext): Promise<CharacterDto | null> => {
  const response = await client.updateCharacter({
    params: { characterId },
    body: request,
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (isNotFound(response)) {
    return null
  }

  return unwrapResult(response)
}

export const deleteCharacter = async (characterId: UuidV7, context: ApiContext): Promise<void> => {
  const response = await client.deleteCharacter({
    params: { characterId },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (isNotFound(response)) {
    return
  }

  unwrapResult(response)
}
