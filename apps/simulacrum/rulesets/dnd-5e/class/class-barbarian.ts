import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('ecd05aa9-18b3-48eb-ab53-1271e60d4330', {
  name: 'Barbarian',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Level2 = Traits.defineTrait('21274b64-e1b8-4db0-98ed-a0a8080cb147', {
  name: 'Barbarian (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('b3053f27-9c2f-431d-80b0-5b6c63b77326', {
  name: 'Barbarian (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('7a6cc8b0-8f97-4b94-a55f-d1cb17e80c70', {
  name: 'Barbarian (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('6ad5872e-1a07-4e75-a10d-ce146c6926ea', {
  name: 'Barbarian (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
