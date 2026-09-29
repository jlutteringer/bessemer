import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Rogue = Traits.defineTrait('e288de9b-784d-4ae4-a2b5-2232df37adb9', {
  name: 'Rogue',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Rogue2 = Traits.defineTrait('12b71e59-e9ba-4e5c-b826-60acd108359d', {
  name: 'Rogue (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  archetypes: [Class],
  effects: [],
})

export const Rogue3 = Traits.defineTrait('d66e02f5-857b-498d-bf21-0644b2502f55', {
  name: 'Rogue (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Rogue2)],
  archetypes: [Class],
  effects: [],
})

export const Rogue4 = Traits.defineTrait('d3704e65-2f0e-4b7d-bd3f-220e1004fe28', {
  name: 'Rogue (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Rogue3)],
  archetypes: [Class],
  effects: [],
})

export const Rogue5 = Traits.defineTrait('36c80193-4761-4ecd-9a97-dbcb25aaf25a', {
  name: 'Rogue (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Rogue4)],
  archetypes: [Class],
  effects: [],
})
