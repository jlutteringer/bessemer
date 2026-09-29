import { CharacterBuilder } from '@simulacrum/ui/character/builder/CharacterBuilder'

const CharacterBuilderPage = async ({ params }: { params: Promise<{ characterId: string }> }) => {
  const { characterId } = await params
  return <CharacterBuilder characterId={characterId} />
}

export default CharacterBuilderPage
