import { notFound } from 'next/navigation'
import { Results, Ulids } from '@bessemer/cornerstone'
import * as RulesetApi from '@simulacrum/common/ruleset/ruleset-api'
import { getApiContext } from '@simulacrum/application/api'
import { CharacterBuilder } from '@simulacrum/ui/character/builder/CharacterBuilder'

const CharacterBuilderPage = async ({ params }: { params: Promise<{ characterId: string }> }) => {
  const { characterId } = await params
  const result = Ulids.parse(characterId)
  if (Results.isFailure(result)) {
    notFound()
  }

  const rulesets = await RulesetApi.listRulesets(await getApiContext())
  return (
    <CharacterBuilder
      characterId={result}
      rulesets={rulesets}
    />
  )
}

export default CharacterBuilderPage
