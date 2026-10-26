import { CharacterEffects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/tag/saving-throw-proficiency'
import { Class } from '@simulacrum/ruleset-dnd5e/tag'

export const Level1 = Traits.defineTrait('monk/level-1', {
  name: 'Monk',
  tags: [Class],
  effects: [CharacterEffects.gainTrait(SavingThrowProficiencies.Strength), CharacterEffects.gainTrait(SavingThrowProficiencies.Dexterity)],
})

export const Level2 = Traits.defineTrait('monk/level-2', {
  name: 'Monk (2)',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  tags: [Class],
  effects: [],
})

export const Level3 = Traits.defineTrait('monk/level-3', {
  name: 'Monk (3)',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  tags: [Class],
  effects: [],
})

export const Level4 = Traits.defineTrait('monk/level-4', {
  name: 'Monk (4)',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  tags: [Class],
  effects: [],
})

export const Level5 = Traits.defineTrait('monk/level-5', {
  name: 'Monk (5)',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  tags: [Class],
  effects: [],
})
