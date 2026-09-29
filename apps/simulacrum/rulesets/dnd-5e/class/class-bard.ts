import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('c5859806-b4d7-4302-b85a-294648ab26de', {
  name: 'Bard',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Level2 = Traits.defineTrait('47a0e735-0356-4d42-aca3-6464e33dfd27', {
  name: 'Bard (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('c731ea07-ca99-486e-9356-eb958a03723a', {
  name: 'Bard (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('e82bc7e4-125f-40c7-9f14-3a4fe75faa8f', {
  name: 'Bard (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('3700811a-8f6d-4583-9775-d2394082b455', {
  name: 'Bard (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
