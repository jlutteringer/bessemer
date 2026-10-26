import { redirect } from 'next/navigation'
import * as RulesetApi from '@simulacrum/common/ruleset/ruleset-api'
import { getSession } from '@simulacrum/application/auth/session'
import { getApiContext } from '@simulacrum/application/api'
import { CampaignCreate } from '@simulacrum/ui/campaign/CampaignCreate'

const NewCampaignPage = async () => {
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }

  const rulesets = await RulesetApi.listRulesets(await getApiContext())
  return <CampaignCreate rulesets={rulesets} />
}

export default NewCampaignPage
