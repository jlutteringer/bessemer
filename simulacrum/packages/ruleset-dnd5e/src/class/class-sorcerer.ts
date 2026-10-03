import { Effects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/archetype/saving-throw-proficiency'
import { Class } from '@simulacrum/ruleset-dnd5e/archetype'

export const Level1 = Traits.defineTrait('sorcerer/level-1', {
  name: 'Sorcerer',
  description: '',
  archetypes: [Class],
  effects: [Effects.gainTrait(SavingThrowProficiencies.Constitution), Effects.gainTrait(SavingThrowProficiencies.Charisma)],
})

export const Level2 = Traits.defineTrait('sorcerer/level-2', {
  name: 'Sorcerer (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('sorcerer/level-3', {
  name: 'Sorcerer (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('sorcerer/level-4', {
  name: 'Sorcerer (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('sorcerer/level-5', {
  name: 'Sorcerer (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [],
})
