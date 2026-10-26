import { notFound } from 'next/navigation'
import { Objects } from '@bessemer/cornerstone'
import { RulesetReference } from '@simulacrum/common/engine/ruleset'
import * as RulesetApi from '@simulacrum/common/ruleset/ruleset-api'
import { getApiContext } from '@simulacrum/application/api'
import { RulebookReader } from '@simulacrum/ui/rulebook/Rulebook'

const RulebookRulesetPage = async ({ params }: { params: Promise<{ rulesetId: string }> }) => {
  const { rulesetId } = await params
  const ruleset = await RulesetApi.fetchRuleset(rulesetId as RulesetReference, await getApiContext(), [])
  if (Objects.isNil(ruleset)) {
    notFound()
  }

  return <RulebookReader ruleset={ruleset} />
}

export default RulebookRulesetPage
