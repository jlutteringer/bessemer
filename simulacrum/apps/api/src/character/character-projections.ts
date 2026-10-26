import { Instants, Uuid7 } from '@bessemer/cornerstone'
import { CharacterDto, CharacterSummaryDto } from '@simulacrum/common/character/character'
import * as Projections from '@simulacrum/api/projection/projection'
import { RulesetProjections } from '@simulacrum/api/ruleset/ruleset-projections'
import { UserProjections } from '@simulacrum/api/user/user-projections'
import { CharacterEntity, StoredCharacterRecord } from '@simulacrum/api/character/character-entity'

export namespace CharacterProjections {
  export const projectCharacterSummary = Projections.projector(
    async (characters: Array<CharacterEntity>, context): Promise<Array<CharacterSummaryDto>> => {
      const owners = await Projections.mapProjection(
        characters.map((it) => it.owner),
        UserProjections.projectUserSummary,
        context
      )

      return characters.map((character) => ({
        id: Uuid7.from(character.id),
        name: character.name,
        level: character.level,
        owner: owners.get(character.owner)!,
        ruleset: RulesetProjections.projectRulesetConfigurationSummary(character),
        campaignId: character.campaignId === null ? null : Uuid7.from(character.campaignId),
      }))
    }
  )

  export const projectCharacter = Projections.projector(async (characters: Array<CharacterEntity>, context): Promise<Array<CharacterDto>> => {
    const summaries = await Projections.mapProjection(characters, projectCharacterSummary, context)

    return characters.map((character) => ({
      ...summaries.get(character)!,
      createdAt: Instants.toLiteral(character.createdAt),
      updatedAt: Instants.toLiteral(character.updatedAt),
      ...(character.record as unknown as StoredCharacterRecord),
    }))
  })
}
