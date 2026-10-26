import { getApiContext } from '@simulacrum/application/api'
import { RulebookIndex } from '@simulacrum/ui/rulebook/Rulebook'
import { RulesetApi } from '@simulacrum/common'

const RulebookPage = async () => {
  const rulesets = await RulesetApi.listRulesets(await getApiContext())
  return <RulebookIndex rulesets={rulesets} />
}

export default RulebookPage
