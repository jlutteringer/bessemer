import { Archetypes, Attributes, Effects, Traits } from '@simulacrum/common'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { Patches } from '@bessemer/cornerstone'

export const SavingThrowProficiency = Archetypes.defineArchetype('saving-throw-proficiency', { name: 'Saving Throw Proficiency' })

export const Strength = Traits.defineTrait('saving-throw-proficiency/strength', {
  name: 'Strength Saving Throw',
  description: '<p>You are proficient in <strong>Strength</strong> saving throws, adding your Proficiency Bonus to them.</p>',
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
  description: '<p>You are proficient in <strong>Dexterity</strong> saving throws, adding your Proficiency Bonus to them.</p>',
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
  description: '<p>You are proficient in <strong>Constitution</strong> saving throws, adding your Proficiency Bonus to them.</p>',
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
  description: '<p>You are proficient in <strong>Intelligence</strong> saving throws, adding your Proficiency Bonus to them.</p>',
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
  description: '<p>You are proficient in <strong>Wisdom</strong> saving throws, adding your Proficiency Bonus to them.</p>',
  archetypes: [SavingThrowProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.WisdomSave, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Charisma = Traits.defineTrait('saving-throw-proficiency/charisma', {
  name: 'Charisma Saving Throw',
  description: '<p>You are proficient in <strong>Charisma</strong> saving throws, adding your Proficiency Bonus to them.</p>',
  archetypes: [SavingThrowProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.CharismaSave,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})
