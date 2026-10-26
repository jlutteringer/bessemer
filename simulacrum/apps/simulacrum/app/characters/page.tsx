import { redirect } from 'next/navigation'
import { getSession } from '@simulacrum/application/auth/session'
import { getApiContext } from '@simulacrum/application/api'
import { CharacterSection } from '@simulacrum/ui/character/CharacterSection'
import { CharacterApi } from '@simulacrum/common'

const CharactersPage = async () => {
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }

  const characters = await CharacterApi.listCharacters(await getApiContext())
  return <CharacterSection characters={characters} />
}

export default CharactersPage
