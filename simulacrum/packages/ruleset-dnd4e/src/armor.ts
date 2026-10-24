import { Abilities, Tags, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { ArmorLoadout, ShieldLoadout } from '@simulacrum/ruleset-dnd4e/loadout'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { ArmorClass, HalfLevel, Reflex } from '@simulacrum/ruleset-dnd4e/characteristic'
import { ArmorBonus, ShieldBonus } from '@simulacrum/ruleset-dnd4e/bonus-type'

export const ArmorProficiency = Tags.defineTraitTag('armor-proficiency', { name: 'Armor Proficiency' })
export const Armor = Tags.defineAbilityTag('armor', { name: 'Armor' })

// Everyone is proficient with cloth armor

export const LeatherProficiency = Traits.defineTrait('armor-proficiency/leather', {
  name: 'Proficiency: Leather Armor',
  description: 'You can use leather armor effectively.',
  tags: [ArmorProficiency],
  effects: [],
})

export const HideProficiency = Traits.defineTrait('armor-proficiency/hide', {
  name: 'Proficiency: Hide Armor',
  description: 'You can use hide armor effectively.',
  tags: [ArmorProficiency],
  effects: [],
})

export const ChainmailProficiency = Traits.defineTrait('armor-proficiency/chainmail', {
  name: 'Proficiency: Chainmail',
  description: 'You can use chainmail effectively.',
  tags: [ArmorProficiency],
  effects: [],
})

export const ScaleProficiency = Traits.defineTrait('armor-proficiency/scale', {
  name: 'Proficiency: Scale Armor',
  description: 'You can use scale armor effectively.',
  tags: [ArmorProficiency],
  effects: [],
})

export const PlateProficiency = Traits.defineTrait('armor-proficiency/plate', {
  name: 'Proficiency: Plate Armor',
  description: 'You can use plate armor effectively.',
  tags: [ArmorProficiency],
  effects: [],
})

export const LightShieldProficiency = Traits.defineTrait('armor-proficiency/light-shield', {
  name: 'Proficiency: Light Shields',
  description: 'You can use light shields effectively.',
  tags: [ArmorProficiency],
  effects: [],
})

export const HeavyShieldProficiency = Traits.defineTrait('armor-proficiency/heavy-shield', {
  name: 'Proficiency: Heavy Shields',
  description: 'You can use heavy shields effectively.',
  tags: [ArmorProficiency],
  effects: [],
})

// Light armor adds its bonus on top of the higher of your Dexterity or Intelligence modifier

export const ClothArmor = Abilities.defineAbility('armor/cloth', {
  name: 'Cloth Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  effects: [Effects.descriptive('**Light armor** · Armor bonus +0 · Check — · Speed —')],
})

export const LeatherArmor = Abilities.defineAbility('armor/leather', {
  name: 'Leather Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(LeatherProficiency)],
  effects: [
    Effects.descriptive('**Light armor** · Armor bonus +2 · Check — · Speed —'),
    Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.sum(2), { combinability: ArmorBonus })),
  ],
})

export const HideArmor = Abilities.defineAbility('armor/hide', {
  name: 'Hide Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(HideProficiency)],
  effects: [
    Effects.descriptive('**Light armor** · Armor bonus +3 · Check –1 · Speed —'),
    Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.sum(3), { combinability: ArmorBonus })),
  ],
})

// Heavy armor adds no ability modifier: AC is 10 + one-half your level + the armor bonus

export const Chainmail = Abilities.defineAbility('armor/chainmail', {
  name: 'Chainmail',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(ChainmailProficiency)],
  effects: [
    Effects.descriptive('**Heavy armor** · Armor bonus +6 · Check –1 · Speed –1'),
    Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.set(NumericExpressions.sum([10, HalfLevel, 6])))),
  ],
})

export const ScaleArmor = Abilities.defineAbility('armor/scale', {
  name: 'Scale Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(ScaleProficiency)],
  effects: [
    Effects.descriptive('**Heavy armor** · Armor bonus +7 · Check — · Speed –1'),
    Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.set(NumericExpressions.sum([10, HalfLevel, 7])))),
  ],
})

export const PlateArmor = Abilities.defineAbility('armor/plate', {
  name: 'Plate Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(PlateProficiency)],
  effects: [
    Effects.descriptive('**Heavy armor** · Armor bonus +8 · Check –2 · Speed –1'),
    Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.set(NumericExpressions.sum([10, HalfLevel, 8])))),
  ],
})

// A shield's bonus applies to both AC and Reflex

export const LightShield = Abilities.defineAbility('shield/light', {
  name: 'Light Shield',
  tags: [Armor],
  loadout: ShieldLoadout,
  prerequisites: [Traits.traitPrerequisite(LightShieldProficiency)],
  effects: [
    Effects.descriptive('Shield bonus +1 to AC and Reflex · Check —'),
    Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.sum(1), { combinability: ShieldBonus })),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(1), { combinability: ShieldBonus })),
  ],
})

export const HeavyShield = Abilities.defineAbility('shield/heavy', {
  name: 'Heavy Shield',
  tags: [Armor],
  loadout: ShieldLoadout,
  prerequisites: [Traits.traitPrerequisite(HeavyShieldProficiency)],
  effects: [
    Effects.descriptive('Shield bonus +2 to AC and Reflex · Check –2'),
    Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.sum(2), { combinability: ShieldBonus })),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(2), { combinability: ShieldBonus })),
  ],
})

export const AllArmorProficiencies = [
  LeatherProficiency,
  HideProficiency,
  ChainmailProficiency,
  ScaleProficiency,
  PlateProficiency,
  LightShieldProficiency,
  HeavyShieldProficiency,
]

export const AllArmor = [ClothArmor, LeatherArmor, HideArmor, Chainmail, ScaleArmor, PlateArmor, LightShield, HeavyShield]
