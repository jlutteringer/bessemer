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
  description:
    'Jackets, mantles, woven robes, and padded vests don’t, by themselves, provide any significant protection. However, you can imbue them with protective magic. Cloth armor doesn’t slow you down or hinder your movement at all. All characters are proficient with cloth armor. Feyweave armor is woven with techniques perfected by the eladrin. Starweave armor is fashioned after patterns created in the divine dominions of the Astral Sea.',
  tags: [Armor],
  loadout: ArmorLoadout,
  effects: [Effects.descriptive('**Light armor** · Armor bonus +0 · Check — · Speed —')],
})

export const LeatherArmor = Abilities.defineAbility('armor/leather', {
  name: 'Leather Armor',
  description:
    'Leather armor is sturdier than cloth armor. It protects vital areas with multiple layers of boiled-leather plates, while covering the limbs with supple leather that provides a small amount of protection. Feyleather armor is cured by an elven method that leaves the armor supple but tougher than normal leather. Starleather armor is infused with the raw spiritual matter of the Astral Sea, making it light and strong.',
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
  description:
    'Thicker and heavier than leather, hide armor is composed of skin from any creature that has a tough hide, such as a bear, a griffon, or a dragon. Hide armor can bind and slightly hinder your precision, but it’s light enough that it doesn’t affect your speed. Darkhide armor is a superior tiefling armor cured in fire and infused with shadow. Elderhide armor involves scouring with elemental forces.',
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
  description:
    'Metal rings woven together into a shirt, leggings, and a hood make up a suit of chainmail. Chainmail grants good protection, but it’s cumbersome, so it reduces your mobility and agility. Forgemail armor is made with superior metallurgy and a chainmaking technique mastered by dwarves. Spiritmail armor is made with techniques from the divine dominions of the Astral Sea.',
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
  description:
    'Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing flexibility and agility. Mundane scale armor uses metal plates. Wyrmscale is made using ancient techniques the dragonborn invented to mimic the strength of overlapping dragon scales, and elderscale is a similar armor scoured with elemental forces.',
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
  description:
    'The heaviest type of armor, made up of shaped plates of metal or similarly resilient material, plate provides the most armor protection. The cost for its superior fortification is mobility and agility. Legend holds that Moradin made the first godplate armor, and ancient dwarf smiths copied his patterns imperfectly to make warplate armor.',
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
  description:
    'You need to use your shield hand to wield a light shield properly. You can still use that hand to hold another item, to climb, or the like. However, you can’t use your shield hand to make attacks.',
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
  description:
    'When you use a heavy shield, you gain a greater bonus to your [AC](characteristic:armor-class) and [Reflex](characteristic:reflex) defense, but you can’t use your shield hand for any other task.',
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
