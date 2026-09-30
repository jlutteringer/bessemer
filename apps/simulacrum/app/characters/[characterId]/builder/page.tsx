import { notFound } from 'next/navigation'
import { Results, Ulids } from '@bessemer/cornerstone'
import { CharacterBuilder } from '@simulacrum/ui/character/builder/CharacterBuilder'

const CharacterBuilderPage = async ({ params }: { params: Promise<{ characterId: string }> }) => {
  const { characterId } = await params
  const result = Ulids.parse(characterId)
  if (Results.isFailure(result)) {
    notFound()
  }

  return <CharacterBuilder characterId={result} />
}

export default CharacterBuilderPage
