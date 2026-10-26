import { Uuid7 } from '@bessemer/cornerstone'
import { notFound, redirect } from 'next/navigation'
import * as CampaignApi from '@simulacrum/common/campaign/campaign-api'
import * as CharacterApi from '@simulacrum/common/character/character-api'
import * as UserApi from '@simulacrum/common/user/user-api'
import { getSession } from '@simulacrum/application/auth/session'
import { getApiContext } from '@simulacrum/application/api'
import { CampaignDetail } from '@simulacrum/ui/campaign/CampaignDetail'

const CampaignPage = async ({ params }: { params: Promise<{ campaignId: string }> }) => {
  const { campaignId } = await params
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }

  const id = Uuid7.Schema.safeParse(campaignId)
  if (!id.success) {
    notFound()
  }

  const context = await getApiContext()
  const [campaign, user, characters] = await Promise.all([
    CampaignApi.fetchCampaign(id.data, context),
    UserApi.fetchCurrentUser(context),
    CharacterApi.listCharacters(context),
  ])

  if (campaign === null) {
    notFound()
  }

  return (
    <CampaignDetail
      campaign={campaign}
      currentUserId={user.id}
      characters={characters}
      inviteUrl={`${process.env.AMPLIFY_APP_ORIGIN}/campaigns/join/${campaign.inviteCode}`}
    />
  )
}

export default CampaignPage
