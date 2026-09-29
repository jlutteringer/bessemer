import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('46584a28-cb93-4ddb-adac-0e40c107dff7', {
  name: 'Paladin',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Level2 = Traits.defineTrait('cd191684-0e5c-416d-846e-0685633d7d7f', {
  name: 'Paladin (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('f3217884-907e-4c0d-b49d-f467c037ec5c', {
  name: 'Paladin (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('4466573e-91bc-4bc6-8646-064640963109', {
  name: 'Paladin (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('2371e077-60e9-406c-859f-231a8d212560', {
  name: 'Paladin (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
