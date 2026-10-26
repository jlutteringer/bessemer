import { CharacterEffects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/tag/saving-throw-proficiency'
import { Class } from '@simulacrum/ruleset-dnd5e/tag'

export const Level1 = Traits.defineTrait('druid/level-1', {
  name: 'Druid',
  tags: [Class],
  effects: [CharacterEffects.gainTrait(SavingThrowProficiencies.Intelligence), CharacterEffects.gainTrait(SavingThrowProficiencies.Wisdom)],
})

export const Level2 = Traits.defineTrait('druid/level-2', {
  name: 'Druid (2)',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  tags: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('druid/level-3', {
  name: 'Druid (3)',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  tags: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('druid/level-4', {
  name: 'Druid (4)',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  tags: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('druid/level-5', {
  name: 'Druid (5)',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  tags: [Class],
  effects: [],
})
