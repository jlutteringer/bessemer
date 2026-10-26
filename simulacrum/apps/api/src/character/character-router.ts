import { Uuid7 } from '@bessemer/cornerstone'
import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { Router } from 'express'
import { CreateCharacterRequestSchema, UpdateCharacterRequestSchema } from '@simulacrum/common/character/character'
import { requireAuth } from '@simulacrum/api/auth'
import { createApplicationContext } from '@simulacrum/api/context'
import { UserService } from '@simulacrum/api/user/user-service'
import { CharacterService } from '@simulacrum/api/character/character-service'

export const CharacterRouter = Router()

CharacterRouter.use('/characters', requireAuth)

const parseCharacterId = (value: string): UuidV7 | null => {
  const result = Uuid7.Schema.safeParse(value)
  return result.success ? result.data : null
}

CharacterRouter.get('/characters', async (_request, response) => {
  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  const characters = await CharacterService.listCharacters(user, context)
  response.json(characters)
})

CharacterRouter.get('/characters/:characterId', async (request, response) => {
  const characterId = parseCharacterId(request.params.characterId)
  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  const character = characterId === null ? null : await CharacterService.findCharacter(user, characterId, context)
  if (character === null) {
    response.status(404).json({ error: 'character_not_found' })
    return
  }

  response.json(character)
})

CharacterRouter.post('/characters', async (request, response) => {
  const record = CreateCharacterRequestSchema.safeParse(request.body)
  if (!record.success) {
    response.status(400).json({ error: 'invalid_character' })
    return
  }

  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  const character = await CharacterService.createCharacter(user, record.data, context)
  response.status(201).json(character)
})

CharacterRouter.put('/characters/:characterId', async (request, response) => {
  const record = UpdateCharacterRequestSchema.safeParse(request.body)
  if (!record.success) {
    response.status(400).json({ error: 'invalid_character' })
    return
  }

  const characterId = parseCharacterId(request.params.characterId)
  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  const character = characterId === null ? null : await CharacterService.updateCharacter(user, characterId, record.data, context)
  if (character === null) {
    response.status(404).json({ error: 'character_not_found' })
    return
  }

  response.json(character)
})

CharacterRouter.delete('/characters/:characterId', async (request, response) => {
  const characterId = parseCharacterId(request.params.characterId)
  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  const deleted = characterId !== null && (await CharacterService.deleteCharacter(user, characterId, context))
  if (!deleted) {
    response.status(404).json({ error: 'character_not_found' })
    return
  }

  response.status(204).end()
})
