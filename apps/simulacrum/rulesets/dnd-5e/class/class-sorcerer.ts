import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('d8817975-c5aa-47f7-a5ab-ade33f132909', {
  name: 'Sorcerer',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Level2 = Traits.defineTrait('3dbbb412-bc4f-49d8-9a98-01c6a978de9a', {
  name: 'Sorcerer (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('fcc38f09-3327-4851-ae12-f159de2064fe', {
  name: 'Sorcerer (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('f28642c0-51b5-4360-a36b-740b0a8d0670', {
  name: 'Sorcerer (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('76561275-cf0c-4520-8f2d-cbf0981c8877', {
  name: 'Sorcerer (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
