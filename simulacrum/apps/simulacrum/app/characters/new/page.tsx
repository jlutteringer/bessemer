import * as RulesetApi from '@simulacrum/common/ruleset/ruleset-api'
import { getApiContext } from '@simulacrum/application/api'
import { CharacterBuilder } from '@simulacrum/ui/character/builder/CharacterBuilder'

const NewCharacterPage = async () => {
  const rulesets = await RulesetApi.listRulesets(await getApiContext())
  return (
    <CharacterBuilder
      characterId={null}
      rulesets={rulesets}
    />
  )
}

export default NewCharacterPage
