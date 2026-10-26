import { redirect } from 'next/navigation'
import * as CampaignApi from '@simulacrum/common/campaign/campaign-api'
import { getSession } from '@simulacrum/application/auth/session'
import { getApiContext } from '@simulacrum/application/api'
import { CampaignList } from '@simulacrum/ui/campaign/CampaignList'

const CampaignsPage = async () => {
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }

  const campaigns = await CampaignApi.listCampaigns(await getApiContext())
  return <CampaignList campaigns={campaigns} />
}

export default CampaignsPage
