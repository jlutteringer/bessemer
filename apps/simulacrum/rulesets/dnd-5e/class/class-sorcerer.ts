import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Sorcerer = Traits.defineTrait('d8817975-c5aa-47f7-a5ab-ade33f132909', {
  name: 'Sorcerer',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Sorcerer2 = Traits.defineTrait('3dbbb412-bc4f-49d8-9a98-01c6a978de9a', {
  name: 'Sorcerer (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Sorcerer)],
  archetypes: [Class],
  effects: [],
})

export const Sorcerer3 = Traits.defineTrait('fcc38f09-3327-4851-ae12-f159de2064fe', {
  name: 'Sorcerer (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Sorcerer2)],
  archetypes: [Class],
  effects: [],
})

export const Sorcerer4 = Traits.defineTrait('f28642c0-51b5-4360-a36b-740b0a8d0670', {
  name: 'Sorcerer (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Sorcerer3)],
  archetypes: [Class],
  effects: [],
})

export const Sorcerer5 = Traits.defineTrait('76561275-cf0c-4520-8f2d-cbf0981c8877', {
  name: 'Sorcerer (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Sorcerer4)],
  archetypes: [Class],
  effects: [],
})
