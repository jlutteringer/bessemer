import { Effects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/tag/saving-throw-proficiency'
import { Class } from '@simulacrum/ruleset-dnd5e/tag'

export const Level1 = Traits.defineTrait('paladin/level-1', {
  name: 'Paladin',
  tags: [Class],
  effects: [Effects.gainTrait(SavingThrowProficiencies.Wisdom), Effects.gainTrait(SavingThrowProficiencies.Charisma)],
})

export const Level2 = Traits.defineTrait('paladin/level-2', {
  name: 'Paladin (2)',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  tags: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('paladin/level-3', {
  name: 'Paladin (3)',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  tags: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('paladin/level-4', {
  name: 'Paladin (4)',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  tags: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('paladin/level-5', {
  name: 'Paladin (5)',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  tags: [Class],
  effects: [],
})
