import { redirect } from 'next/navigation'
import * as CharacterApi from '@simulacrum/common/character/character-api'
import { getSession } from '@simulacrum/application/auth/session'
import { getApiContext } from '@simulacrum/application/api'
import { CharacterSection } from '@simulacrum/ui/character/CharacterSection'

const CharactersPage = async () => {
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }

  const characters = await CharacterApi.listCharacters(await getApiContext())
  return <CharacterSection characters={characters} />
}

export default CharactersPage
