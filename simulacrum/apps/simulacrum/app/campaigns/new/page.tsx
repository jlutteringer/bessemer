import { redirect } from 'next/navigation'
import { getSession } from '@simulacrum/application/auth/session'
import { getApiContext } from '@simulacrum/application/api'
import { CampaignCreate } from '@simulacrum/ui/campaign/CampaignCreate'
import { RulesetApi } from '@simulacrum/common'

const NewCampaignPage = async () => {
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }

  const rulesets = await RulesetApi.listRulesets(await getApiContext())
  return <CampaignCreate rulesets={rulesets} />
}

export default NewCampaignPage
