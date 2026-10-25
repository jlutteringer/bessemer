import { Abilities, Tags, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { ArmorLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Patches } from '@bessemer/cornerstone'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { ArmorClass, ProficiencyBonus } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Armor = Tags.defineAbilityTag('armor', { name: 'Armor' })

export const ArmorProficiency = Tags.defineTraitTag('armor-proficiency', { name: 'Armor Proficiency' })

export const LightArmorProficiency = Traits.defineTrait('armor-proficiency/light', {
  name: 'Light Armor Proficiency',
  description: 'You can wear light armor.',
  tags: [ArmorProficiency],
  effects: [],
})

export const MediumArmorProficiency = Traits.defineTrait('armor-proficiency/medium', {
  name: 'Medium Armor Proficiency',
  description: 'You can wear medium armor.',
  tags: [ArmorProficiency],
  effects: [],
})

export const HeavyArmorProficiency = Traits.defineTrait('armor-proficiency/heavy', {
  name: 'Heavy Armor Proficiency',
  description: 'You can wear heavy armor.',
  tags: [ArmorProficiency],
  effects: [],
})

export const NoArmor = Abilities.defineAbility('armor/none', {
  name: 'No Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
})

export const LightArmor = Abilities.defineAbility('armor/light', {
  name: 'Light Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(LightArmorProficiency)],
  effects: [Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.sum(3)))],
})

export const MediumArmor = Abilities.defineAbility('armor/medium', {
  name: 'Medium Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(MediumArmorProficiency)],
  effects: [Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.sum(6)))],
})

export const HeavyArmor = Abilities.defineAbility('armor/heavy', {
  name: 'Heavy Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(HeavyArmorProficiency)],
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([12, NumericExpressions.multiply([2, ProficiencyBonus.variable])])))
    ),
  ],
})

export const AllArmorProficiencies = [LightArmorProficiency, MediumArmorProficiency, HeavyArmorProficiency]

export const AllArmor = [NoArmor, LightArmor, MediumArmor, HeavyArmor]
