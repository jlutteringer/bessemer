import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('bard/level-1', {
  name: 'Bard',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Level2 = Traits.defineTrait('bard/level-2', {
  name: 'Bard (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('bard/level-3', {
  name: 'Bard (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('bard/level-4', {
  name: 'Bard (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('bard/level-5', {
  name: 'Bard (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
