import { Objects } from '@bessemer/cornerstone'
import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { Characters } from '@simulacrum/common/engine/engine'
import { CharacterDto, CharacterSummaryDto, CreateCharacterRequest, UpdateCharacterRequest } from '@simulacrum/common/character/character'
import { UserDto } from '@simulacrum/common/user/user'
import { Prisma } from '@simulacrum/api/generated/prisma/client'
import { ApplicationContext } from '@simulacrum/api/context'
import * as Projections from '@simulacrum/api/projection/projection'
import { CharacterProjections } from '@simulacrum/api/character/character-projections'
import { CharacterEntity, CharacterInclude, StoredCharacterRecord } from '@simulacrum/api/character/character-entity'
import { RulesetProjections } from '@simulacrum/api/ruleset/ruleset-projections'
import { RulesetService } from '@simulacrum/api/ruleset/ruleset-service'

export namespace CharacterService {
  const toColumns = (character: UpdateCharacterRequest) => {
    const record: StoredCharacterRecord = {
      initialValues: character.initialValues,
      selections: character.selections,
      selectedAbilities: character.selectedAbilities,
    }

    return { name: character.name, level: character.level, record: record as Prisma.InputJsonObject }
  }

  const normalizeCharacter = async (character: CharacterEntity, context: ApplicationContext): Promise<CharacterEntity> => {
    const ruleset = RulesetService.resolveConfiguration(RulesetProjections.projectRulesetConfiguration(character))
    if (Objects.isNil(ruleset)) {
      return character
    }

    const stored = character.record as unknown as StoredCharacterRecord
    const normalized = Characters.normalizeCharacter({ ...stored, name: character.name, level: character.level }, ruleset)
    if (Objects.deepEqual(normalized.selections, stored.selections) && Objects.deepEqual(normalized.selectedAbilities, stored.selectedAbilities)) {
      return character
    }

    return context.prisma.character.update({ where: { id: character.id }, data: toColumns(normalized), include: CharacterInclude })
  }

  export const listCharacters = async (user: UserDto, context: ApplicationContext): Promise<Array<CharacterSummaryDto>> => {
    const characters = await context.prisma.character.findMany({
      where: { ownerId: user.id },
      include: CharacterInclude,
      orderBy: { createdAt: 'asc' },
    })
    return CharacterProjections.projectCharacterSummary(characters, context)
  }

  export const findCharacter = async (user: UserDto, characterId: UuidV7, context: ApplicationContext): Promise<CharacterDto | null> => {
    const character = await context.prisma.character.findFirst({ where: { id: characterId, ownerId: user.id }, include: CharacterInclude })
    if (character === null) {
      return null
    }

    return Projections.projectOne(await normalizeCharacter(character, context), CharacterProjections.projectCharacter, context)
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
