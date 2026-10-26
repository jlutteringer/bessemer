import * as RulesetApi from '@simulacrum/common/ruleset/ruleset-api'
import { getApiContext } from '@simulacrum/application/api'
import { RulebookIndex } from '@simulacrum/ui/rulebook/Rulebook'

const RulebookPage = async () => {
  const rulesets = await RulesetApi.listRulesets(await getApiContext())
  return <RulebookIndex rulesets={rulesets} />
}

export default RulebookPage
