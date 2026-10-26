'use server'

import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { revalidatePath } from 'next/cache'
import { CharacterDto, CreateCharacterRequest, UpdateCharacterRequest } from '@simulacrum/common/character/character'
import { getApiContext } from '@simulacrum/application/api'
import { CharacterApi } from '@simulacrum/common'

export const createCharacter = async (request: CreateCharacterRequest): Promise<CharacterDto> => {
  const created = await CharacterApi.createCharacter(request, await getApiContext())
  revalidatePath('/characters')
  return created
}

export const updateCharacter = async (characterId: UuidV7, request: UpdateCharacterRequest): Promise<CharacterDto | null> => {
  const updated = await CharacterApi.updateCharacter(characterId, request, await getApiContext())
  revalidatePath('/characters')
  return updated
}

export const deleteCharacter = async (characterId: UuidV7): Promise<void> => {
  await CharacterApi.deleteCharacter(characterId, await getApiContext())
  revalidatePath('/characters')
}
