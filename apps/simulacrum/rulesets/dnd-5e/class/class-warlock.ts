import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('47b029f5-b197-4cf8-9ed9-1a1013330890', {
  name: 'Warlock',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Level2 = Traits.defineTrait('f717e691-43db-49cf-b0d9-e209099bb7a7', {
  name: 'Warlock (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('39b61885-e7f9-4202-a60c-60fe3839ee89', {
  name: 'Warlock (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('8aab9505-5386-4d4f-94c2-af07d17c87fe', {
  name: 'Warlock (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('71ccd537-9caa-4c30-8627-9ee110ca58a0', {
  name: 'Warlock (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
