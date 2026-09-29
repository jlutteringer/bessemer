import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Druid = Traits.defineTrait('63782419-6553-47da-987b-c5c989c4b22c', {
  name: 'Druid',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Druid2 = Traits.defineTrait('132ba265-6168-4272-8003-29c17b12ee44', {
  name: 'Druid (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Druid)],
  archetypes: [Class],
  effects: [],
})

export const Druid3 = Traits.defineTrait('5dffe638-f9e1-480d-b206-fd6bb5bbea50', {
  name: 'Druid (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Druid2)],
  archetypes: [Class],
  effects: [],
})

export const Druid4 = Traits.defineTrait('cc83904f-d9f4-4385-aa80-e4157cf47d39', {
  name: 'Druid (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Druid3)],
  archetypes: [Class],
  effects: [],
})

export const Druid5 = Traits.defineTrait('40912dda-6714-42aa-a334-a789c8a2f7a6', {
  name: 'Druid (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Druid4)],
  archetypes: [Class],
  effects: [],
})
