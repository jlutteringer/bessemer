import { Uuid7 } from '@bessemer/cornerstone'
import { notFound, redirect } from 'next/navigation'
import * as CharacterApi from '@simulacrum/common/character/character-api'
import * as RulesetApi from '@simulacrum/common/ruleset/ruleset-api'
import { getSession } from '@simulacrum/application/auth/session'
import { getApiContext } from '@simulacrum/application/api'
import { CharacterBuilder } from '@simulacrum/ui/character/builder/CharacterBuilder'

const CharacterBuilderPage = async ({ params }: { params: Promise<{ characterId: string }> }) => {
  const { characterId } = await params
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }

  const id = Uuid7.Schema.safeParse(characterId)
  if (!id.success) {
    notFound()
  }

  const context = await getApiContext()
  const [character, rulesets] = await Promise.all([CharacterApi.fetchCharacter(id.data, context), RulesetApi.listRulesets(context)])
  if (character === null) {
    notFound()
  }

  return (
    <CharacterBuilder
      character={character}
      rulesets={rulesets}
    />
  )
}

export default CharacterBuilderPage
