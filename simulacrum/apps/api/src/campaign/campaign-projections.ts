import { Instants, Uuid7 } from '@bessemer/cornerstone'
import { CampaignDto, CampaignSummaryDto } from '@simulacrum/common/campaign/campaign'
import * as Projections from '@simulacrum/api/projection/projection'
import { RulesetProjections } from '@simulacrum/api/ruleset/ruleset-projections'
import { UserProjections } from '@simulacrum/api/user/user-projections'
import { CharacterProjections } from '@simulacrum/api/character/character-projections'
import { CampaignEntity, CampaignSummaryEntity } from '@simulacrum/api/campaign/campaign-entity'

export namespace CampaignProjections {
  export const projectCampaignSummary = Projections.projector(
    async (campaigns: Array<CampaignSummaryEntity>, context): Promise<Array<CampaignSummaryDto>> => {
      const owners = await Projections.mapProjection(
        campaigns.map((it) => it.owner),
        UserProjections.projectUserSummary,
        context
      )

      return campaigns.map((campaign) => ({
        id: Uuid7.from(campaign.id),
        name: campaign.name,
        owner: owners.get(campaign.owner)!,
        ruleset: RulesetProjections.projectRulesetConfigurationSummary(campaign),
      }))
    }
  )

  export const projectCampaign = Projections.projector(async (campaigns: Array<CampaignEntity>, context): Promise<Array<CampaignDto>> => {
    const users = await Projections.mapProjection(
      campaigns.flatMap((it) => [it.owner, ...it.members.map((member) => member.user)]),
      UserProjections.projectUserSummary,
      context
    )

    const characters = await Projections.mapProjection(
      campaigns.flatMap((it) => it.characters),
      CharacterProjections.projectCharacterSummary,
      context
    )

    return campaigns.map((campaign) => ({
      id: Uuid7.from(campaign.id),
      createdAt: Instants.toLiteral(campaign.createdAt),
      updatedAt: Instants.toLiteral(campaign.updatedAt),
      name: campaign.name,
      owner: users.get(campaign.owner)!,
      ruleset: RulesetProjections.projectRulesetConfigurationSummary(campaign),
      inviteCode: campaign.inviteCode,
      members: campaign.members.map((it) => users.get(it.user)!),
      characters: campaign.characters.map((it) => characters.get(it)!),
    }))
  })
}
