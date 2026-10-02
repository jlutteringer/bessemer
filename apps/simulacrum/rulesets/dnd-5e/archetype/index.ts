import { Archetypes } from '@simulacrum/common'

export const Class = Archetypes.defineArchetype('class', { name: 'Class' })

// Class archetypes, used to mark which class spell lists a spell is on
export const Cleric = Archetypes.defineArchetype('cleric', { name: 'Cleric' })
export const Wizard = Archetypes.defineArchetype('wizard', { name: 'Wizard' })
