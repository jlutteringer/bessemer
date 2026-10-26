import { CharacterEffects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/tag/saving-throw-proficiency'
import { Class } from '@simulacrum/ruleset-dnd5e/tag'

export const Level1 = Traits.defineTrait('ranger/level-1', {
  name: 'Ranger',
  tags: [Class],
  effects: [CharacterEffects.gainTrait(SavingThrowProficiencies.Strength), CharacterEffects.gainTrait(SavingThrowProficiencies.Dexterity)],
})

export const Level2 = Traits.defineTrait('ranger/level-2', {
  name: 'Ranger (2)',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  tags: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('ranger/level-3', {
  name: 'Ranger (3)',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  tags: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('ranger/level-4', {
  name: 'Ranger (4)',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  tags: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('ranger/level-5', {
  name: 'Ranger (5)',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  tags: [Class],
  effects: [],
})
