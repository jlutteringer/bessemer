import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { CharacterDto, CreateCharacterRequest, UpdateCharacterRequest } from '@simulacrum/common/character/character'
import { UserDto } from '@simulacrum/common/user/user'
import { Prisma } from '@simulacrum/api/generated/prisma/client'
import { ApplicationContext } from '@simulacrum/api/context'
import * as Projections from '@simulacrum/api/projection/projection'
import { CharacterProjections } from '@simulacrum/api/character/character-projections'
import { CharacterInclude, StoredCharacterRecord } from '@simulacrum/api/character/character-entity'

export namespace CharacterService {
  const toColumns = (character: UpdateCharacterRequest) => {
    const record: StoredCharacterRecord = {
      initialValues: character.initialValues,
      selections: character.selections,
      selectedAbilities: character.selectedAbilities,
    }

    return { name: character.name, level: character.level, record: record as Prisma.InputJsonObject }
  }

  export const listCharacters = async (user: UserDto, context: ApplicationContext): Promise<Array<CharacterDto>> => {
    const characters = await context.prisma.character.findMany({
      where: { ownerId: user.id },
      include: CharacterInclude,
      orderBy: { createdAt: 'asc' },
    })
    return CharacterProjections.projectCharacter(characters, context)
  }

  export const findCharacter = async (user: UserDto, characterId: UuidV7, context: ApplicationContext): Promise<CharacterDto | null> => {
    const character = await context.prisma.character.findFirst({ where: { id: characterId, ownerId: user.id }, include: CharacterInclude })
    return character === null ? null : Projections.projectOne(character, CharacterProjections.projectCharacter, context)
  }

  export const createCharacter = async (user: UserDto, request: CreateCharacterRequest, context: ApplicationContext): Promise<CharacterDto> => {
    const character = await context.prisma.character.create({
      data: {
        ownerId: user.id,
        rulesetId: request.ruleset.id,
        rulesetExtensionIds: request.ruleset.extensions,
        ...toColumns(request),
      },
      include: CharacterInclude,
    })
    return Projections.projectOne(character, CharacterProjections.projectCharacter, context)
  }

  export const updateCharacter = async (
    user: UserDto,
    characterId: UuidV7,
    request: UpdateCharacterRequest,
    context: ApplicationContext
  ): Promise<CharacterDto | null> => {
    const { count } = await context.prisma.character.updateMany({
      where: { id: characterId, ownerId: user.id },
      data: toColumns(request),
    })

    return count === 0 ? null : findCharacter(user, characterId, context)
  }

  export const deleteCharacter = async (user: UserDto, characterId: UuidV7, context: ApplicationContext): Promise<boolean> => {
    const { count } = await context.prisma.character.deleteMany({ where: { id: characterId, ownerId: user.id } })
    return count > 0
  }
}
