import { Tags } from '@simulacrum/ruleset'

export const Class = Tags.defineTraitTag('class', { name: 'Class' })

export const Primary = Tags.defineTraitTag('primary', { name: 'Primary' })

export const Allied = Tags.defineCreatureTag('allied', {
  name: 'Allied',
  description: 'A creature that is friendly to you, including creatures on your side of a fight.',
})

export const Hostile = Tags.defineCreatureTag('hostile', {
  name: 'Hostile',
  description: 'A creature that is hostile to you, including creatures on the opposing side of a fight.',
})
