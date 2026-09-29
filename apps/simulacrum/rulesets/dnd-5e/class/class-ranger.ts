import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Ranger = Traits.defineTrait('d163bb64-4c3e-431d-9d3a-fb27c2eb1d9d', {
  name: 'Ranger',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Ranger2 = Traits.defineTrait('5cbe960a-71f3-4c9d-bf6e-08b4cff22dc9', {
  name: 'Ranger (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  archetypes: [Class],
  effects: [],
})

export const Ranger3 = Traits.defineTrait('4de09336-6a6c-4231-98ba-9bc389319561', {
  name: 'Ranger (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Ranger2)],
  archetypes: [Class],
  effects: [],
})

export const Ranger4 = Traits.defineTrait('67133a43-5e5e-474f-8f6e-4f6c2540c758', {
  name: 'Ranger (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Ranger3)],
  archetypes: [Class],
  effects: [],
})

export const Ranger5 = Traits.defineTrait('e2edda60-00ec-446b-882a-68d08b60b28c', {
  name: 'Ranger (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Ranger4)],
  archetypes: [Class],
  effects: [],
})
