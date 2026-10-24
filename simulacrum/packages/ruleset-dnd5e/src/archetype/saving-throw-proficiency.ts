import { Archetypes, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import { Patches } from '@bessemer/cornerstone'

export const SavingThrowProficiency = Archetypes.defineTraitArchetype('saving-throw-proficiency', { name: 'Saving Throw Proficiency' })

export const Strength = Traits.defineTrait('saving-throw-proficiency/strength', {
  name: 'Strength Saving Throw',
  description: 'You are proficient in **Strength** saving throws, adding your Proficiency Bonus to them.',
  archetypes: [SavingThrowProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.StrengthSave,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Dexterity = Traits.defineTrait('saving-throw-proficiency/dexterity', {
  name: 'Dexterity Saving Throw',
  description: 'You are proficient in **Dexterity** saving throws, adding your Proficiency Bonus to them.',
  archetypes: [SavingThrowProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.DexteritySave,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Constitution = Traits.defineTrait('saving-throw-proficiency/constitution', {
  name: 'Constitution Saving Throw',
  description: 'You are proficient in **Constitution** saving throws, adding your Proficiency Bonus to them.',
  archetypes: [SavingThrowProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.ConstitutionSave,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Intelligence = Traits.defineTrait('saving-throw-proficiency/intelligence', {
  name: 'Intelligence Saving Throw',
  description: 'You are proficient in **Intelligence** saving throws, adding your Proficiency Bonus to them.',
  archetypes: [SavingThrowProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.IntelligenceSave,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Wisdom = Traits.defineTrait('saving-throw-proficiency/wisdom', {
  name: 'Wisdom Saving Throw',
  description: 'You are proficient in **Wisdom** saving throws, adding your Proficiency Bonus to them.',
  archetypes: [SavingThrowProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.WisdomSave, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Charisma = Traits.defineTrait('saving-throw-proficiency/charisma', {
  name: 'Charisma Saving Throw',
  description: 'You are proficient in **Charisma** saving throws, adding your Proficiency Bonus to them.',
  archetypes: [SavingThrowProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.CharismaSave,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})
