import { Archetypes } from '@simulacrum/ruleset'

export const Class = Archetypes.defineArchetype('class', { name: 'Class', description: '' })

// Class archetypes, used to mark which class spell lists a spell is on
export const Bard = Archetypes.defineArchetype('bard', { name: 'Bard', description: '' })
export const Cleric = Archetypes.defineArchetype('cleric', { name: 'Cleric', description: '' })
export const Wizard = Archetypes.defineArchetype('wizard', { name: 'Wizard', description: '' })
