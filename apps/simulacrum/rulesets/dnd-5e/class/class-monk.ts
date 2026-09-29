import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Monk = Traits.defineTrait('b6b6a8e2-0e01-46df-94ba-90a50e33870c', {
  name: 'Monk',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Monk2 = Traits.defineTrait('db938af6-97cb-4867-9df5-1e6592a87fd5', {
  name: 'Monk (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Monk)],
  archetypes: [Class],
  effects: [],
})

export const Monk3 = Traits.defineTrait('c29498cc-f9d1-4fba-b56c-74fed691259f', {
  name: 'Monk (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Monk2)],
  archetypes: [Class],
  effects: [],
})

export const Monk4 = Traits.defineTrait('18e6fb32-50af-4ecb-a886-5b81126c1f2b', {
  name: 'Monk (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Monk3)],
  archetypes: [Class],
  effects: [],
})

export const Monk5 = Traits.defineTrait('24d23c2e-8d4c-44c7-bb04-f2854818d2ca', {
  name: 'Monk (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Monk4)],
  archetypes: [Class],
  effects: [],
})
