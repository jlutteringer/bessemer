import { redirect } from 'next/navigation'
import { getSession } from '@simulacrum/application/auth/session'
import { getApiContext } from '@simulacrum/application/api'
import { CharacterBuilder } from '@simulacrum/ui/character/builder/CharacterBuilder'
import { RulesetApi } from '@simulacrum/common'

const NewCharacterPage = async () => {
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }

  const rulesets = await RulesetApi.listRulesets(await getApiContext())
  return (
    <CharacterBuilder
      character={null}
      rulesets={rulesets}
    />
  )
}

export default NewCharacterPage
