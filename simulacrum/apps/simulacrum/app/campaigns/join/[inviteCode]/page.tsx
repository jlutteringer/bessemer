import { notFound, redirect } from 'next/navigation'
import * as CampaignApi from '@simulacrum/common/campaign/campaign-api'
import { getSession } from '@simulacrum/application/auth/session'
import { getApiContext } from '@simulacrum/application/api'
import { CampaignJoin } from '@simulacrum/ui/campaign/CampaignJoin'

const JoinCampaignPage = async ({ params }: { params: Promise<{ inviteCode: string }> }) => {
  const { inviteCode } = await params
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }

  const invite = await CampaignApi.fetchInvite(inviteCode, await getApiContext())
  if (invite === null) {
    notFound()
  }

  if (invite.isMember) {
    redirect(`/campaigns/${invite.campaign.id}`)
  }

  return (
    <CampaignJoin
      invite={invite}
      inviteCode={inviteCode}
    />
  )
}

export default JoinCampaignPage
