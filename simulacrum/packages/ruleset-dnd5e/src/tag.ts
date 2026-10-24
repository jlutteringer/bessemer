import { Tags } from '@simulacrum/ruleset'

export const Class = Tags.defineTraitTag('class', { name: 'Class' })

// Class tags, used to mark which class spell lists a spell is on
export const Bard = Tags.defineAbilityTag('bard', { name: 'Bard' })
export const Cleric = Tags.defineAbilityTag('cleric', { name: 'Cleric' })
export const Wizard = Tags.defineAbilityTag('wizard', { name: 'Wizard' })
