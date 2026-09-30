import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('cleric/level-1', {
  name: 'Cleric',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Level2 = Traits.defineTrait('cleric/level-2', {
  name: 'Cleric (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('cleric/level-3', {
  name: 'Cleric (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('cleric/level-4', {
  name: 'Cleric (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('cleric/level-5', {
  name: 'Cleric (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
