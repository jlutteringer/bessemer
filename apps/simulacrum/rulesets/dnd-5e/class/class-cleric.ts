import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Cleric = Traits.defineTrait('1c820f73-f7ae-48fa-a514-c29a03f3c19c', {
  name: 'Cleric',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Cleric2 = Traits.defineTrait('18483adb-0985-4195-824b-b701b2493f4c', {
  name: 'Cleric (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  archetypes: [Class],
  effects: [],
})

export const Cleric3 = Traits.defineTrait('539dfc4e-aa93-4d6a-a515-c458481569ea', {
  name: 'Cleric (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Cleric2)],
  archetypes: [Class],
  effects: [],
})

export const Cleric4 = Traits.defineTrait('e535d3a2-7005-4c95-973a-2b1fafd24167', {
  name: 'Cleric (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Cleric3)],
  archetypes: [Class],
  effects: [],
})

export const Cleric5 = Traits.defineTrait('caba9d70-460e-46e5-be00-a5d1c282d9af', {
  name: 'Cleric (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Cleric4)],
  archetypes: [Class],
  effects: [],
})
