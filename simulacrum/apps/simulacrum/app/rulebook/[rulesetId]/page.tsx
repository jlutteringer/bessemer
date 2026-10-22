import { RulesetReference } from '@simulacrum/engine/ruleset'
import { RulebookReader } from '@simulacrum/ui/rulebook/Rulebook'

const RulebookRulesetPage = async ({ params }: { params: Promise<{ rulesetId: string }> }) => {
  const { rulesetId } = await params
  return <RulebookReader rulesetId={rulesetId as RulesetReference} />
}

export default RulebookRulesetPage
