import { Abilities, Attributes, Effects } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { Armor, Shield } from '@simulacrum/ruleset-pf2e/archetype'
import { ArmorLoadout, ShieldLoadout } from '@simulacrum/ruleset-pf2e/loadout'
import {
  Acrobatics,
  ArmorClass,
  Athletics,
  Dexterity,
  HeavyArmor,
  LightArmor,
  MediumArmor,
  Speed,
  Stealth,
  Strength,
  Thievery,
  UnarmoredDefense,
} from '@simulacrum/ruleset-pf2e/characteristic'

// Worn armor sets AC to 10 + Dexterity (up to the armor's cap) + your proficiency with its category + its item bonus.
// Meeting its Strength requirement removes its check penalty and reduces its Speed penalty by 5 feet.

export const ExplorersClothing = Abilities.defineAbility('armor/explorers-clothing', {
  name: "Explorer's Clothing",
  description:
    "*Comfort*\n\n**Price** 1 sp\n\n**AC Bonus** +0\n\n**Dex Cap** +5\n\n**Check Penalty** —\n\n**Speed Penalty** —\n\n**Strength** —\n\n**Bulk** L\n\n**Category** Unarmored\n\n**Group** Cloth\n\nAdventurers who don't wear armor travel in durable clothing. Though it's not armor and uses your unarmored defense proficiency, it still has a Dex Cap and can grant an item bonus to [AC](characteristic:armor-class) if etched with _armor potency_ runes.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nAccoutrements of Bone, Armorskin Robes, Crystal Lattice, Energy Shield Tunic, Laboratory Coat, Robe of Beneficence, Robes Of Xin-edasseril, Sorshen's Scintillating Garment, Suit of False Impression",
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 5]), UnarmoredDefense.variable, 0])))
    ),
  ],
})

export const PaddedArmor = Abilities.defineAbility('armor/padded-armor', {
  name: 'Padded Armor',
  description:
    "*Comfort*\n\n**Price** 2 sp\n\n**AC Bonus** +1\n\n**Dex Cap** +3\n\n**Check Penalty** —\n\n**Speed Penalty** —\n\n**Strength** +0\n\n**Bulk** L\n\n**Category** Light\n\n**Group** Cloth\n\nThis armor is simply a layer of heavy, quilted cloth, but it is sometimes used because it's so inexpensive. Padded armor is easier to damage and destroy than other types of armor. Heavy armor comes with a padded armor undercoat included in its Price, though it loses the [comfort](content:traits/comfort) trait when worn under heavy armor. You can wear just that padded armor undercoat to sleep in, if your heavy armor is destroyed, or when otherwise not wearing the full heavy armor. This allows you to keep magic armor invested and benefit from the power of any runes on the associated heavy armor, but no one else can wear your heavy armor without the padded undercoat.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nBalloon Padding, Scene Stealer's Tunic, Wilderness Weave",
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 3]), LightArmor.variable, 1])))
    ),
  ],
})

export const LeatherArmor = Abilities.defineAbility('armor/leather-armor', {
  name: 'Leather Armor',
  description:
    "**Price** 2 gp\n\n**AC Bonus** +1\n\n**Dex Cap** +4\n\n**Check Penalty** -1\n\n**Speed Penalty** —\n\n**Strength** +0\n\n**Bulk** 1\n\n**Category** Light\n\n**Group** Leather\n\nA mix of flexible and molded boiled leather, a suit of this type of armor provides some protection with maximum flexibility.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nAnkhrav Carapace, Arachnid Harness, Assassin's Skin, Buoyant Buckle, [Crafting](characteristic:skill/crafting) Leathers, Crushing Coils, Deep Pockets, Dragonaut's Wingsuit, Eagle Wing, Electric Eelskin, Lifting Leather, Lion's Pelt, Ooze Skin, Ooze Skin, Shadow Shroud",
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 4]), LightArmor.variable, 1])))
    ),
    Effects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(-1), { condition: Expressions.lessThan(Strength.variable, 0) })),
    Effects.modifyCharacteristic(Acrobatics, Attributes.modifier(Patches.sum(-1), { condition: Expressions.lessThan(Strength.variable, 0) })),
    Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(-1), { condition: Expressions.lessThan(Strength.variable, 0) })),
    Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(-1), { condition: Expressions.lessThan(Strength.variable, 0) })),
  ],
})

export const StuddedLeatherArmor = Abilities.defineAbility('armor/studded-leather-armor', {
  name: 'Studded Leather Armor',
  description:
    "**Price** 3 gp\n\n**AC Bonus** +2\n\n**Dex Cap** +3\n\n**Check Penalty** -1\n\n**Speed Penalty** —\n\n**Strength** +1\n\n**Bulk** 1\n\n**Category** Light\n\n**Group** Leather\n\nThis leather armor is reinforced with metal studs and sometimes small metal plates, providing most of the flexibility of leather armor with more robust protection.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nAutoload Leathers, Devil's Bargain, Grisly Brigandine, Hodag Leather, Locust Leather, Umbral Armor, Wasp Guard, Winged Terror",
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 3]), LightArmor.variable, 2])))
    ),
    Effects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(-1), { condition: Expressions.lessThan(Strength.variable, 1) })),
    Effects.modifyCharacteristic(Acrobatics, Attributes.modifier(Patches.sum(-1), { condition: Expressions.lessThan(Strength.variable, 1) })),
    Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(-1), { condition: Expressions.lessThan(Strength.variable, 1) })),
    Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(-1), { condition: Expressions.lessThan(Strength.variable, 1) })),
  ],
})

export const ChainShirt = Abilities.defineAbility('armor/chain-shirt', {
  name: 'Chain Shirt',
  description:
    "*Flexible, Noisy*\n\n**Price** 5 gp\n\n**AC Bonus** +2\n\n**Dex Cap** +3\n\n**Check Penalty** -1\n\n**Speed Penalty** —\n\n**Strength** +1\n\n**Bulk** 1\n\n**Category** Light\n\n**Group** Chain\n\nSometimes called a hauberk, this is a long shirt constructed of the same metal rings as chainmail. However, it is much lighter than chainmail and protects only the torso, upper arms, and upper legs of its wearer.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nBlade Byrnie, Chained Mist, Invisible Chain Shirt, Lion's Pelt, Moonlit Chain",
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 3]), LightArmor.variable, 2])))
    ),
    Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(-1))),
    Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(-1), { condition: Expressions.lessThan(Strength.variable, 1) })),
  ],
})

export const HideArmor = Abilities.defineAbility('armor/hide-armor', {
  name: 'Hide Armor',
  description:
    '**Price** 2 gp\n\n**AC Bonus** +3\n\n**Dex Cap** +2\n\n**Check Penalty** -2\n\n**Speed Penalty** -5 ft.\n\n**Strength** +2\n\n**Bulk** 2\n\n**Category** Medium\n\n**Group** Leather\n\nA mix of furs, sturdy hide, and sometimes molded boiled leather, this armor provides protection due to its layers of leather, though its bulkiness slows the wearer down and decreases mobility.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nAurochs Hide Armor, Frost Furs, Ghoul Hide, Onslaught Hide, Troll Hide, Troll Hide, Trollhound Vest, Wolfjaw Armor, Zeto Geki Hide Armor',
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 2]), MediumArmor.variable, 3])))
    ),
    Effects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 2) })),
    Effects.modifyCharacteristic(Acrobatics, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 2) })),
    Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 2) })),
    Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 2) })),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(-5))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5), { condition: Expressions.greaterThanOrEqual(Strength.variable, 2) })),
  ],
})

export const ScaleMail = Abilities.defineAbility('armor/scale-mail', {
  name: 'Scale Mail',
  description:
    '**Price** 4 gp\n\n**AC Bonus** +3\n\n**Dex Cap** +2\n\n**Check Penalty** -2\n\n**Speed Penalty** -5 ft.\n\n**Strength** +2\n\n**Bulk** 2\n\n**Category** Medium\n\n**Group** Composite\n\nScale mail consists of many metal scales sewn onto a reinforced leather backing, often in the form of a long shirt that protects the torso, arms, and legs.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nImpenetrable Scale, Mamlambo Scale',
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 2]), MediumArmor.variable, 3])))
    ),
    Effects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 2) })),
    Effects.modifyCharacteristic(Acrobatics, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 2) })),
    Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 2) })),
    Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 2) })),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(-5))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5), { condition: Expressions.greaterThanOrEqual(Strength.variable, 2) })),
  ],
})

export const ChainMail = Abilities.defineAbility('armor/chain-mail', {
  name: 'Chain Mail',
  description:
    '*Flexible, Noisy*\n\n**Price** 6 gp\n\n**AC Bonus** +4\n\n**Dex Cap** +1\n\n**Check Penalty** -2\n\n**Speed Penalty** -5 ft.\n\n**Strength** +3\n\n**Bulk** 2\n\n**Category** Medium\n\n**Group** Chain\n\nA suit of chain mail consists of several pieces of armor composed of small metal rings linked together in a protective mesh. It typically includes a chain shirt, leggings, a pair of arms, and a coif, collectively protecting most of the body.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nHoly Chain, Message Mail, Mitigation Mail, Parachute Mail, Reactive Mail, Thunder Mail',
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 1]), MediumArmor.variable, 4])))
    ),
    Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(-2))),
    Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(-5))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5), { condition: Expressions.greaterThanOrEqual(Strength.variable, 3) })),
  ],
})

export const Breastplate = Abilities.defineAbility('armor/breastplate', {
  name: 'Breastplate',
  description:
    "**Price** 8 gp\n\n**AC Bonus** +4\n\n**Dex Cap** +1\n\n**Check Penalty** -2\n\n**Speed Penalty** -5 ft.\n\n**Strength** +3\n\n**Bulk** 2\n\n**Category** Medium\n\n**Group** Plate\n\nThough referred to as a breastplate, this type of armor consists of several pieces of plate or half-plate armor (see below) that protect the torso, chest, neck, and sometimes the hips and lower legs. It strategically grants some of the protection of plate while allowing greater flexibility and speed.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nBreastplate of the Mountain, Rebounding Breastplate, Warleader's Bulwark",
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 1]), MediumArmor.variable, 4])))
    ),
    Effects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Acrobatics, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(-2), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(-5))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5), { condition: Expressions.greaterThanOrEqual(Strength.variable, 3) })),
  ],
})

export const SplintMail = Abilities.defineAbility('armor/splint-mail', {
  name: 'Splint Mail',
  description:
    "**Price** 13 gp\n\n**AC Bonus** +5\n\n**Dex Cap** +1\n\n**Check Penalty** -3\n\n**Speed Penalty** -10 ft.\n\n**Strength** +3\n\n**Bulk** 3\n\n**Category** Heavy\n\n**Group** Composite\n\nThis type of armor is chain mail reinforced with flexible, interlocking metal plates, typically located on the wearer's torso, upper arms, and legs. A suit of this armor comes with an undercoat of [padded armor](ability:armor/padded-armor) (see above) and a pair of gauntlets.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nLife-Saver Mail, Mariner's Splint",
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 1]), HeavyArmor.variable, 5])))
    ),
    Effects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Acrobatics, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(-10))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5), { condition: Expressions.greaterThanOrEqual(Strength.variable, 3) })),
  ],
})

export const HalfPlate = Abilities.defineAbility('armor/half-plate', {
  name: 'Half Plate',
  description:
    "**Price** 18 gp\n\n**AC Bonus** +5\n\n**Dex Cap** +1\n\n**Check Penalty** -3\n\n**Speed Penalty** -10 ft.\n\n**Strength** +3\n\n**Bulk** 3\n\n**Category** Heavy\n\n**Group** Plate\n\nHalf plate consists of most of the upper body plates used in [full plate](ability:armor/full-plate), with lighter or sparser steel plate protection for the arms and legs. This provides some of the protection of full plate with greater flexibility and speed. A suit of this armor comes with an undercoat of [padded armor](ability:armor/padded-armor) and a pair of gauntlets.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nCommand Cuirass, Dragon Turtle Plate, Lion's Armor",
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 1]), HeavyArmor.variable, 5])))
    ),
    Effects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Acrobatics, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 3) })),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(-10))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5), { condition: Expressions.greaterThanOrEqual(Strength.variable, 3) })),
  ],
})

export const FullPlate = Abilities.defineAbility('armor/full-plate', {
  name: 'Full Plate',
  description:
    "*Bulwark*\n\n**Price** 30 gp\n\n**AC Bonus** +6\n\n**Dex Cap** +0\n\n**Check Penalty** -3\n\n**Speed Penalty** -10 ft.\n\n**Strength** +4\n\n**Bulk** 4\n\n**Category** Heavy\n\n**Group** Plate\n\nPlate mail consists of interlocking plates that encase nearly the entire body in a carapace of steel. It is costly and heavy, and the wearer often requires help to don it correctly, but it provides some of the best defense armor can supply. A suit of this armor comes with an undercoat of [padded armor](ability:armor/padded-armor) and a pair of gauntlets.\n\n**Armor Specialization Effects**\n\nCertain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed below. Only medium and heavy armors have armor specialization effects.\n\n[Click here for the full rules on Armor Specialization Effects](content:equipment/armor-specialization-effects).\n\n**Specific Magic Armor**\n\nAlkenstar Phalanx, Bismuth Armor, Deep Sea Plate, Dragon Turtle Armor, Dragonplate, Gleaming Cuirass, Hero's Plate, Incendiary Plate, Juggernaut Plate, Mantis Plate, Plate of Yled, Powered Full Plate, Powered Full Plate, Tideplate, Unholy Plate",
  archetypes: [Armor],
  loadout: ArmorLoadout,
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([10, NumericExpressions.min([Dexterity.variable, 0]), HeavyArmor.variable, 6])))
    ),
    Effects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 4) })),
    Effects.modifyCharacteristic(Acrobatics, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 4) })),
    Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 4) })),
    Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(-3), { condition: Expressions.lessThan(Strength.variable, 4) })),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(-10))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5), { condition: Expressions.greaterThanOrEqual(Strength.variable, 4) })),
  ],
})

export const Buckler = Abilities.defineAbility('shield/buckler', {
  name: 'Buckler',
  description:
    "**Price** 1 gp\n\n**AC Bonus** 1\n\n**Speed Penalty** —\n\n**Bulk** L\n\n**Hardness** 3\n\n**HP (BT)** 6 (3)\n\nThis very small shield is a favorite of duelists and quick, lightly armored warriors. It's typically made of steel and strapped to your forearm. You can [Raise a Shield](content:playing-the-game/raise-a-shield) with your buckler as long as you have that hand free or are holding a light object that's not a weapon in that hand.\n\n**Specific Magic Shields**\n\nArcher's Bulwark, Bivouac Targe, Fan Buckler, Floating Shield, Glamorous Buckler, Reflecting Shield, Sapling Shield, Shield of Mental [Fortitude](characteristic:fortitude), Shield of Silent Words, Verdant Buckler, War Mage's Buckler",
  archetypes: [Shield],
  loadout: ShieldLoadout,
  effects: [],
})

export const WoodenShield = Abilities.defineAbility('shield/wooden-shield', {
  name: 'Wooden Shield',
  description:
    '**Price** 1 gp\n\n**AC Bonus** 2\n\n**Speed Penalty** —\n\n**Bulk** 1\n\n**Hardness** 3\n\n**HP (BT)** 12 (6)\n\nThough they come in a variety of shapes and sizes, the protection offered by wooden shields comes from the stoutness of their materials. While wooden shields are less expensive than steel shields, they break more easily.\n\n**Specific Magic Shields**\n\nBloodroot Shield, Burr Shield, Exploding Shield, Staff-Storing Shield, Sun Slayer, Tiger Shield',
  archetypes: [Shield],
  loadout: ShieldLoadout,
  effects: [],
})

export const SteelShield = Abilities.defineAbility('shield/steel-shield', {
  name: 'Steel Shield',
  description:
    "**Price** 2 gp\n\n**AC Bonus** 2\n\n**Speed Penalty** —\n\n**Bulk** 1\n\n**Hardness** 5\n\n**HP (BT)** 20 (10)\n\nLike wooden shields, steel shields come in a variety of shapes and sizes. Though more expensive than wooden shields, they are much more durable.\n\n**Specific Magic Shields**\n\nClockwork Shield, Coward's Shield, Dragon Shield, Dragonslayer's Shield, Emergency [Escape](content:playing-the-game/escape) Shield, Energized Shield, Force Shield, Forge Warden, Imposing Shield, Indestructible Shield, Lion's Shield, Magnetic Shield, Magnetic Shield, Martyr's Shield, Martyr's Shield, Medusa's Scream, Sensei's Parasol, Shield of Endurance, Shield of the Bear, Spellguard Shield, Spellshock Shield, Spined Shield, Stifling Shield, Sturdy Shield",
  archetypes: [Shield],
  loadout: ShieldLoadout,
  effects: [],
})

export const TowerShield = Abilities.defineAbility('shield/tower-shield', {
  name: 'Tower Shield',
  description:
    '**Price** 10 gp\n\n**AC Bonus** 2 (+4 2 )\n\n**Speed Penalty** -5 ft.\n\n**Bulk** 4\n\n**Hardness** 5\n\n**HP (BT)** 20 (10)\n\nThese massive shields can be used to provide cover to nearly the entire body. Due to their size, they are typically made of wood reinforced with metal.\n\n2 Getting the higher bonus for a tower shield requires using the [Take Cover](content:playing-the-game/take-cover) action while the shield is raised.\n\n**Specific Magic Shields**\n\nArctic Worm Chitin Shield, Resolute Shield, Sapling Shield, Siege Shield, Testudo Shield, Warding Escutcheon',
  archetypes: [Shield],
  loadout: ShieldLoadout,
  effects: [Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(-5)))],
})

export const AllArmor = [
  ExplorersClothing,
  PaddedArmor,
  LeatherArmor,
  StuddedLeatherArmor,
  ChainShirt,
  HideArmor,
  ScaleMail,
  ChainMail,
  Breastplate,
  SplintMail,
  HalfPlate,
  FullPlate,
  Buckler,
  WoodenShield,
  SteelShield,
  TowerShield,
]
