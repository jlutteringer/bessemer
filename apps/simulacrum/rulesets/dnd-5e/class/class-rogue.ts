import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('rogue/level-1', {
  name: 'Rogue',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Level2 = Traits.defineTrait('rogue/level-2', {
  name: 'Rogue (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('rogue/level-3', {
  name: 'Rogue (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('rogue/level-4', {
  name: 'Rogue (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('rogue/level-5', {
  name: 'Rogue (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
