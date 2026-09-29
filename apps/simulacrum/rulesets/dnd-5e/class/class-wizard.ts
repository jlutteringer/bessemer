import { Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('53fd3960-04d1-424a-89ad-32b67a5acf6a', {
  name: 'Wizard',
  description: '',
  archetypes: [Class],
  effects: [],
})

export const Level2 = Traits.defineTrait('2b2b550e-8bd6-4afc-861b-91258e01f7ab', {
  name: 'Wizard (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('c1c8834a-ed90-466e-a5eb-55b93612ba96', {
  name: 'Wizard (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('5a74b60c-9257-4189-90b7-00827b3db1ac', {
  name: 'Wizard (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('7d00a95c-1777-4575-b4da-bbd531ef63ff', {
  name: 'Wizard (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
