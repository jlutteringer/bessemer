import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('druid/level-1', {
  name: 'Druid',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Level2 = Traits.defineTrait('druid/level-2', {
  name: 'Druid (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('druid/level-3', {
  name: 'Druid (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('druid/level-4', {
  name: 'Druid (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('druid/level-5', {
  name: 'Druid (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
