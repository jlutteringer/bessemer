import { Effects, Traits } from '@simulacrum/common'
import * as SavingThrowProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/saving-throw-proficiency'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'

export const Level1 = Traits.defineTrait('ranger/level-1', {
  name: 'Ranger',
  description: '',
  archetypes: [Class],
  effects: [Effects.gainTrait(SavingThrowProficiencies.Strength), Effects.gainTrait(SavingThrowProficiencies.Dexterity)],
})

export const Level2 = Traits.defineTrait('ranger/level-2', {
  name: 'Ranger (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('ranger/level-3', {
  name: 'Ranger (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('ranger/level-4', {
  name: 'Ranger (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('ranger/level-5', {
  name: 'Ranger (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
