import { Archetypes } from '@simulacrum/ruleset'

export const Class = Archetypes.defineTraitArchetype('class', { name: 'Class' })

// Class archetypes, used to mark which class spell lists a spell is on
export const Bard = Archetypes.defineAbilityArchetype('bard', { name: 'Bard' })
export const Cleric = Archetypes.defineAbilityArchetype('cleric', { name: 'Cleric' })
export const Wizard = Archetypes.defineAbilityArchetype('wizard', { name: 'Wizard' })
