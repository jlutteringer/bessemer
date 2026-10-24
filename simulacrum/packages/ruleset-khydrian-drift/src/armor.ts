import { Abilities, Archetypes, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { ArmorLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Patches } from '@bessemer/cornerstone'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { AttributeCap, ArmorClass, ProficiencyBonus } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Armor = Archetypes.defineAbilityArchetype('armor', { name: 'Armor' })

export const ArmorProficiency = Archetypes.defineTraitArchetype('armor-proficiency', { name: 'Armor Proficiency' })

export const LightArmorProficiency = Traits.defineTrait('armor-proficiency/light', {
  name: 'Light Armor Proficiency',
  description: 'You can wear light armor.',
  archetypes: [ArmorProficiency],
  effects: [],
})

export const MediumArmorProficiency = Traits.defineTrait('armor-proficiency/medium', {
  name: 'Medium Armor Proficiency',
  description: 'You can wear medium armor.',
  archetypes: [ArmorProficiency],
  effects: [],
})

export const HeavyArmorProficiency = Traits.defineTrait('armor-proficiency/heavy', {
  name: 'Heavy Armor Proficiency',
  description: 'You can wear heavy armor.',
  archetypes: [ArmorProficiency],
  effects: [],
})

export const NoArmor = Abilities.defineAbility('armor/none', {
  name: 'No Armor',
  archetypes: [Armor],
  loadout: ArmorLoadout,
})

export const LightArmor = Abilities.defineAbility('armor/light', {
  name: 'Light Armor',
  archetypes: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(LightArmorProficiency)],
  effects: [Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.sum(1)))],
})

export const MediumArmor = Abilities.defineAbility('armor/medium', {
  name: 'Medium Armor',
  archetypes: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(MediumArmorProficiency)],
  effects: [Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.sum(3)))],
})

export const HeavyArmor = Abilities.defineAbility('armor/heavy', {
  name: 'Heavy Armor',
  archetypes: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(HeavyArmorProficiency)],
  effects: [
    Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.set(NumericExpressions.sum([12, ProficiencyBonus.variable, AttributeCap])))),
  ],
})

export const AllArmorProficiencies = [LightArmorProficiency, MediumArmorProficiency, HeavyArmorProficiency]

export const AllArmor = [NoArmor, LightArmor, MediumArmor, HeavyArmor]
