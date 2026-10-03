import { Effects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/archetype/saving-throw-proficiency'
import { Class } from '@simulacrum/ruleset-dnd5e/archetype'

export const Level1 = Traits.defineTrait('monk/level-1', {
  name: 'Monk',
  description: '',
  archetypes: [Class],
  effects: [Effects.gainTrait(SavingThrowProficiencies.Strength), Effects.gainTrait(SavingThrowProficiencies.Dexterity)],
})

export const Level2 = Traits.defineTrait('monk/level-2', {
  name: 'Monk (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('monk/level-3', {
  name: 'Monk (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('monk/level-4', {
  name: 'Monk (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('monk/level-5', {
  name: 'Monk (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
