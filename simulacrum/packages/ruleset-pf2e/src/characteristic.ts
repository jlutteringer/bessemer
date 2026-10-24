import { Characteristics } from '@simulacrum/ruleset'
import { Characteristic } from '@simulacrum/ruleset/characteristic'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { ObjectPaths } from '@bessemer/cornerstone'

export const AttributesGroup = Characteristics.defineGroup('attributes', { name: 'Attributes' })
export const StatisticsGroup = Characteristics.defineGroup('statistics', { name: 'Statistics' })
export const DefensesGroup = Characteristics.defineGroup('defenses', { name: 'Defenses' })
export const SkillsGroup = Characteristics.defineGroup('skills', { name: 'Skills' })
export const ProficienciesGroup = Characteristics.defineGroup('proficiencies', { name: 'Proficiencies' })

// Attribute modifiers start at +0 and come entirely from boosts and flaws
export const Strength: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('strength', {
    name: 'Strength',
    description:
      "Strength measures your character's physical power. Strength is important if your character plans to engage in hand-to-hand combat. Your [Strength modifier](characteristic:strength) gets added to melee damage rolls and determines how much your character can carry.\n\nYour Strength modifier starts at +0. Each attribute boost increases it by 1 and each flaw decreases it by 1. See [Attribute Modifier](content:playing-the-game/attribute-modifier).",
    path: ObjectPaths.from('strength'),
  }),
  baseValue: 0,
})

export const Dexterity: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('dexterity', {
    name: 'Dexterity',
    description:
      "Dexterity measures your character's agility, balance, and reflexes. Dexterity is important if your character plans to make attacks with ranged weapons or use stealth to surprise foes. Your [Dexterity modifier](characteristic:dexterity) is also added to your character's [AC](characteristic:armor-class) and [Reflex](characteristic:reflex) saving throws.\n\nYour Dexterity modifier starts at +0. Each attribute boost increases it by 1 and each flaw decreases it by 1. See [Attribute Modifier](content:playing-the-game/attribute-modifier).",
    path: ObjectPaths.from('dexterity'),
  }),
  baseValue: 0,
})

export const Constitution: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('constitution', {
    name: 'Constitution',
    description:
      "Constitution measures your character's health and stamina. Constitution is important for all characters, especially those who fight in close range. Your [Constitution modifier](characteristic:constitution) is added to your [Hit Points](characteristic:hit-points) and [Fortitude](characteristic:fortitude) saving throws.\n\nYour Constitution modifier starts at +0. Each attribute boost increases it by 1 and each flaw decreases it by 1. See [Attribute Modifier](content:playing-the-game/attribute-modifier).",
    path: ObjectPaths.from('constitution'),
  }),
  baseValue: 0,
})

export const Intelligence: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('intelligence', {
    name: 'Intelligence',
    description:
      'Intelligence measures how well your character can learn and reason. A high Intelligence allows your character to analyze situations and understand patterns, and it means they can become trained in additional skills and might be able to master additional languages.\n\nYour Intelligence modifier starts at +0. Each attribute boost increases it by 1 and each flaw decreases it by 1. See [Attribute Modifier](content:playing-the-game/attribute-modifier).',
    path: ObjectPaths.from('intelligence'),
  }),
  baseValue: 0,
})

export const Wisdom: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('wisdom', {
    name: 'Wisdom',
    description:
      "Wisdom measures your character's common sense, awareness, and intuition. High Wisdom helps your character detect hidden things and resist mental effects. Your [Wisdom modifier](characteristic:wisdom) is added to your [Perception](characteristic:perception) and [Will saving throws](characteristic:will).\n\nYour Wisdom modifier starts at +0. Each attribute boost increases it by 1 and each flaw decreases it by 1. See [Attribute Modifier](content:playing-the-game/attribute-modifier).",
    path: ObjectPaths.from('wisdom'),
  }),
  baseValue: 0,
})

export const Charisma: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('charisma', {
    name: 'Charisma',
    description:
      "Charisma measures your character's personal magnetism and strength of personality. A high [Charisma modifier](characteristic:charisma) helps you build relationships and influence the thoughts and moods of others with social skills.\n\nYour Charisma modifier starts at +0. Each attribute boost increases it by 1 and each flaw decreases it by 1. See [Attribute Modifier](content:playing-the-game/attribute-modifier).",
    path: ObjectPaths.from('charisma'),
  }),
  baseValue: 0,
})

// Proficiency bonuses with each category of weapon and armor. Armor adds its own to AC while worn.
export const UnarmedAttacks: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/unarmed-attacks', {
    name: 'Unarmed Attacks',
    description:
      "Your proficiency bonus with [unarmed attacks](content:equipment/unarmed-attacks) such as a fist, added to attack rolls you make with them.\n\nWhen making an attack roll, determine the result by rolling 1d20 and adding your attack modifier for the weapon or unarmed attack you're using. Modifiers for melee and ranged attacks are calculated differently.\n\n**Melee attack roll result = d20 roll + Strength modifier (or optionally Dexterity modifier for a finesse weapon) + proficiency bonus + other bonuses + penalties**\n\n**Ranged attack roll result = d20 roll + Dexterity modifier + proficiency bonus + other bonuses + penalties**\n\nProficiency is a system that measures a character's aptitude at a specific task or quality, and it has five ranks: untrained, trained, expert, master, and legendary. Proficiency gives you a bonus that's added when determining the following modifiers and statistics: AC, attack rolls, [Perception](characteristic:perception), saving throws, skills, and the effectiveness of spells. If you're untrained, your proficiency bonus is +0. If you're trained, expert, master, or legendary, your proficiency bonus equals your level plus 2, 4, 6, or 8, respectively.",
    path: ObjectPaths.from('unarmedAttacks'),
  }),
  baseValue: 0,
})

export const SimpleWeapons: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/simple-weapons', {
    name: 'Simple Weapons',
    description:
      "Your proficiency bonus with simple weapons, added to attack rolls you make with them.\n\nWhen making an attack roll, determine the result by rolling 1d20 and adding your attack modifier for the weapon or unarmed attack you're using. Modifiers for melee and ranged attacks are calculated differently.\n\n**Melee attack roll result = d20 roll + Strength modifier (or optionally Dexterity modifier for a finesse weapon) + proficiency bonus + other bonuses + penalties**\n\n**Ranged attack roll result = d20 roll + Dexterity modifier + proficiency bonus + other bonuses + penalties**\n\nProficiency is a system that measures a character's aptitude at a specific task or quality, and it has five ranks: untrained, trained, expert, master, and legendary. Proficiency gives you a bonus that's added when determining the following modifiers and statistics: AC, attack rolls, [Perception](characteristic:perception), saving throws, skills, and the effectiveness of spells. If you're untrained, your proficiency bonus is +0. If you're trained, expert, master, or legendary, your proficiency bonus equals your level plus 2, 4, 6, or 8, respectively.",
    path: ObjectPaths.from('simpleWeapons'),
  }),
  baseValue: 0,
})

export const MartialWeapons: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/martial-weapons', {
    name: 'Martial Weapons',
    description:
      "Your proficiency bonus with martial weapons, added to attack rolls you make with them.\n\nWhen making an attack roll, determine the result by rolling 1d20 and adding your attack modifier for the weapon or unarmed attack you're using. Modifiers for melee and ranged attacks are calculated differently.\n\n**Melee attack roll result = d20 roll + Strength modifier (or optionally Dexterity modifier for a finesse weapon) + proficiency bonus + other bonuses + penalties**\n\n**Ranged attack roll result = d20 roll + Dexterity modifier + proficiency bonus + other bonuses + penalties**\n\nProficiency is a system that measures a character's aptitude at a specific task or quality, and it has five ranks: untrained, trained, expert, master, and legendary. Proficiency gives you a bonus that's added when determining the following modifiers and statistics: AC, attack rolls, [Perception](characteristic:perception), saving throws, skills, and the effectiveness of spells. If you're untrained, your proficiency bonus is +0. If you're trained, expert, master, or legendary, your proficiency bonus equals your level plus 2, 4, 6, or 8, respectively.",
    path: ObjectPaths.from('martialWeapons'),
  }),
  baseValue: 0,
})

export const AdvancedWeapons: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/advanced-weapons', {
    name: 'Advanced Weapons',
    description:
      "Your proficiency bonus with advanced weapons, added to attack rolls you make with them.\n\nWhen making an attack roll, determine the result by rolling 1d20 and adding your attack modifier for the weapon or unarmed attack you're using. Modifiers for melee and ranged attacks are calculated differently.\n\n**Melee attack roll result = d20 roll + Strength modifier (or optionally Dexterity modifier for a finesse weapon) + proficiency bonus + other bonuses + penalties**\n\n**Ranged attack roll result = d20 roll + Dexterity modifier + proficiency bonus + other bonuses + penalties**\n\nProficiency is a system that measures a character's aptitude at a specific task or quality, and it has five ranks: untrained, trained, expert, master, and legendary. Proficiency gives you a bonus that's added when determining the following modifiers and statistics: AC, attack rolls, [Perception](characteristic:perception), saving throws, skills, and the effectiveness of spells. If you're untrained, your proficiency bonus is +0. If you're trained, expert, master, or legendary, your proficiency bonus equals your level plus 2, 4, 6, or 8, respectively.",
    path: ObjectPaths.from('advancedWeapons'),
  }),
  baseValue: 0,
})

export const UnarmoredDefense: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/unarmored-defense', {
    name: 'Unarmored Defense',
    description:
      "Your proficiency bonus to [Armor Class](characteristic:armor-class) while you are not wearing armor.\n\nThe armor’s category—unarmored, light armor, medium armor, or heavy armor—indicates which proficiency bonus you use while wearing the armor.\n\n**Armor Class = 10 + Dexterity modifier (up to your armor's Dex Cap) + proficiency bonus + armor's item bonus to AC + other bonuses + penalties** Use your proficiency bonus for the category (light, medium, or heavy) or for the specific type of armor you're wearing. If you're not wearing armor, use your proficiency in unarmored defense.\n\nProficiency is a system that measures a character's aptitude at a specific task or quality, and it has five ranks: untrained, trained, expert, master, and legendary. Proficiency gives you a bonus that's added when determining the following modifiers and statistics: AC, attack rolls, [Perception](characteristic:perception), saving throws, skills, and the effectiveness of spells. If you're untrained, your proficiency bonus is +0. If you're trained, expert, master, or legendary, your proficiency bonus equals your level plus 2, 4, 6, or 8, respectively.",
    path: ObjectPaths.from('unarmoredDefense'),
  }),
  baseValue: 0,
})

export const LightArmor: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/light-armor', {
    name: 'Light Armor',
    description:
      "Your proficiency bonus to [Armor Class](characteristic:armor-class) while wearing light armor.\n\nThe armor’s category—unarmored, light armor, medium armor, or heavy armor—indicates which proficiency bonus you use while wearing the armor.\n\n**Armor Class = 10 + Dexterity modifier (up to your armor's Dex Cap) + proficiency bonus + armor's item bonus to AC + other bonuses + penalties** Use your proficiency bonus for the category (light, medium, or heavy) or for the specific type of armor you're wearing. If you're not wearing armor, use your proficiency in unarmored defense.\n\nProficiency is a system that measures a character's aptitude at a specific task or quality, and it has five ranks: untrained, trained, expert, master, and legendary. Proficiency gives you a bonus that's added when determining the following modifiers and statistics: AC, attack rolls, [Perception](characteristic:perception), saving throws, skills, and the effectiveness of spells. If you're untrained, your proficiency bonus is +0. If you're trained, expert, master, or legendary, your proficiency bonus equals your level plus 2, 4, 6, or 8, respectively.",
    path: ObjectPaths.from('lightArmor'),
  }),
  baseValue: 0,
})

export const MediumArmor: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/medium-armor', {
    name: 'Medium Armor',
    description:
      "Your proficiency bonus to [Armor Class](characteristic:armor-class) while wearing medium armor.\n\nThe armor’s category—unarmored, light armor, medium armor, or heavy armor—indicates which proficiency bonus you use while wearing the armor.\n\n**Armor Class = 10 + Dexterity modifier (up to your armor's Dex Cap) + proficiency bonus + armor's item bonus to AC + other bonuses + penalties** Use your proficiency bonus for the category (light, medium, or heavy) or for the specific type of armor you're wearing. If you're not wearing armor, use your proficiency in unarmored defense.\n\nProficiency is a system that measures a character's aptitude at a specific task or quality, and it has five ranks: untrained, trained, expert, master, and legendary. Proficiency gives you a bonus that's added when determining the following modifiers and statistics: AC, attack rolls, [Perception](characteristic:perception), saving throws, skills, and the effectiveness of spells. If you're untrained, your proficiency bonus is +0. If you're trained, expert, master, or legendary, your proficiency bonus equals your level plus 2, 4, 6, or 8, respectively.",
    path: ObjectPaths.from('mediumArmor'),
  }),
  baseValue: 0,
})

export const HeavyArmor: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/heavy-armor', {
    name: 'Heavy Armor',
    description:
      "Your proficiency bonus to [Armor Class](characteristic:armor-class) while wearing heavy armor.\n\nThe armor’s category—unarmored, light armor, medium armor, or heavy armor—indicates which proficiency bonus you use while wearing the armor.\n\n**Armor Class = 10 + Dexterity modifier (up to your armor's Dex Cap) + proficiency bonus + armor's item bonus to AC + other bonuses + penalties** Use your proficiency bonus for the category (light, medium, or heavy) or for the specific type of armor you're wearing. If you're not wearing armor, use your proficiency in unarmored defense.\n\nProficiency is a system that measures a character's aptitude at a specific task or quality, and it has five ranks: untrained, trained, expert, master, and legendary. Proficiency gives you a bonus that's added when determining the following modifiers and statistics: AC, attack rolls, [Perception](characteristic:perception), saving throws, skills, and the effectiveness of spells. If you're untrained, your proficiency bonus is +0. If you're trained, expert, master, or legendary, your proficiency bonus equals your level plus 2, 4, 6, or 8, respectively.",
    path: ObjectPaths.from('heavyArmor'),
  }),
  baseValue: 0,
})

// Ancestry, class and Constitution add to hit points; ancestry sets Speed
export const HitPoints: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('hit-points', {
    name: 'Hit Points',
    description:
      "[Hit Points](content:playing-the-game/hit-points) represent the amount of punishment a creature can take before it falls [unconscious](content:conditions/unconscious) and begins [dying](content:conditions/dying). Damage decreases [Hit Points](characteristic:hit-points) on a 1-to-1 basis, while healing restores Hit Points at the same rate.\n\nAt 1st level, your maximum Hit Points equal the Hit Points from your ancestry plus the Hit Points from your class plus your Constitution modifier. Each time you gain a level, your maximum Hit Points increase by your class's Hit Points plus your Constitution modifier.\n\nSee [Hit Points](content:playing-the-game/hit-points).",
    path: ObjectPaths.from('hitPoints'),
  }),
  baseValue: 0,
})

export const Speed: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('speed', {
    name: 'Speed',
    description:
      "Speed is the distance a character can move using a single action, measured in feet.\n\nMost characters and monsters have a [Speed](characteristic:speed) statistic that indicates how quickly they can move across the ground. This statistic is referred to as land Speed when it's necessary to differentiate it from special Speeds.\n\nWhen you use the [Stride](content:playing-the-game/stride) action, you move a number of feet equal to your Speed. Numerous other abilities also allow you to move, from [Crawling](content:playing-the-game/crawl) to [Leaping](content:playing-the-game/leap), and most of them are based on your Speed in some way. Whenever a rule mentions your Speed without specifying a type, it's referring to your land Speed.",
    path: ObjectPaths.from('speed'),
  }),
  baseValue: 0,
})

export const Perception: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('perception', {
    name: 'Perception',
    description:
      "Perception measures your character's ability to notice hidden objects or unusual situations, and it usually determines how quickly the character springs into action in combat.\n\nYour character's [Perception](characteristic:perception) modifier measures how alert they are and is equal to their proficiency bonus in Perception plus their [Wisdom modifier](characteristic:wisdom).\n\nSee [Perception](content:playing-the-game/perception).",
    path: ObjectPaths.from('perception'),
  }),
  baseValue: Wisdom.variable,
})

// A class's key attribute adds to its class DC; spellcasting classes add their spellcasting attribute and proficiency
export const ClassDC: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('class-dc', {
    name: 'Class DC',
    description:
      "A [class DC](characteristic:class-dc) sets the difficulty for certain abilities granted by your character's class. This DC equals 10 plus their proficiency bonus for their class DC (typically +3 for most 1st-level characters) plus the modifier for the class's key attribute modifier.",
    path: ObjectPaths.from('classDC'),
  }),
  baseValue: 10,
})

export const SpellAttack: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('spell-attack', {
    name: 'Spell Attack',
    description:
      "If you cast spells, you might need to make a [spell attack roll](characteristic:spell-attack). These rolls are usually made when you cast a spell that targets a creature's [AC](characteristic:armor-class).\n\nThe attribute modifier for a spell attack roll depends on how you gained the spell. If your class grants you spellcasting, use your key attribute modifier (such as Intelligence for a [wizard](trait:wizard)). Innate spells use your [Charisma modifier](characteristic:charisma) unless the ability that granted them states otherwise. Focus spells and other sources of spells specify which attribute modifier you use for spell attack modifiers in the ability that granted them. If you have spells from multiple sources or traditions, you might use different attribute modifiers for spell attack modifiers for these different sources of spells. For example, a [dwarf](trait:ancestry/dwarf) [cleric](trait:cleric) with the Stonewalker ancestry feat would use her Charisma modifier when casting [_one with stone_](ability:spell/one-with-stone) from that feat, since it's a divine innate spell, but she would use her [Wisdom modifier](characteristic:wisdom) when casting [_heal_](ability:spell/heal) and other spells using her cleric divine spellcasting.\n\nIf you have the ability to cast spells, you'll have a proficiency rank for your spell attack modifier, so you'll always add a proficiency bonus. Spell attack rolls can benefit from circumstance bonuses and status bonuses, though item bonuses to spell attack rolls are rare. Penalties affect spell attack rolls just like any other attack roll—including your [multiple attack penalty](content:playing-the-game/multiple-attack-penalty).\n\nCalculate a **spell attack roll** with the following formula.\n\n**Spell attack roll result = d20 roll + spellcasting attribute modifier + proficiency bonus + other bonuses + penalties**\n\n**Writing Down Statistics**\n\nWhen creating your character and adventuring you'll record the total modifier for various important checks on your character sheet. Since many bonuses and penalties are due to the immediate circumstances, spells, and other temporary magical effects, you typically won't apply them to your notations.\n\nFor example, the number you write down for your **attack modifier** with your battle axe would likely be your [Strength modifier](characteristic:strength) + your proficiency bonus with martial weapons. Your **spell attack modifier** is typically just your spellcasting attribute modifier + your proficiency bonus, and your **spell DC** is usually the same number + 10.\n\nItem bonuses and penalties are often more persistent, so you will often want to record them ahead of time. For instance, if you upgraded your battle axe with a +1 weapon potency rune, you'll want to add the +1 item bonus into your attack modifier with the battle axe, since you will include that bonus every time you attack with that weapon.",
    path: ObjectPaths.from('spellAttack'),
  }),
  baseValue: 0,
})

export const SpellDC: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('spell-dc', {
    name: 'Spell DC',
    description:
      'Many times, instead of requiring you to make a [spell attack roll](characteristic:spell-attack), the spells you cast will require those within the area or targeted by the spell to attempt a saving throw against your **spell DC** to determine how the spell affects them. Calculate it using the following formula.\n\n**Spell DC = 10 + spellcasting attribute modifier + proficiency bonus + other bonuses + penalties**',
    path: ObjectPaths.from('spellDC'),
  }),
  baseValue: 10,
})

// Unarmored AC; armor replaces it while worn (see armor.ts)
export const ArmorClass: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('armor-class', {
    name: 'Armor Class',
    description:
      "All creatures in the game have an [Armor Class](content:playing-the-game/armor-class). This score represents how hard it is to hit and damage a creature. It serves as the Difficulty Class for hitting a creature with an attack.\n\nAttack rolls are compared to a special Difficulty Class called [Armor Class](characteristic:armor-class) (AC), which measures how hard it is for your foes to hit you with [Strikes](content:playing-the-game/strike), [spell attack rolls](characteristic:spell-attack), and other attacks. Just like for any other check and DC, the result of an attack roll must meet or exceed your AC to be successful, which allows your foe to deal damage to you. Armor Class is calculated using the following formula.\n\n**Armor Class = 10 + Dexterity modifier** (up to your armor's Dex Cap) **+ proficiency bonus + armor's item bonus to AC + other bonuses + penalties** Use your proficiency bonus for the category (light, medium, or heavy) or the specific type of armor you're wearing. If you're not wearing armor, use your proficiency in unarmored defense.\n\nArmor Class can benefit from bonuses with a variety of sources, much like attack rolls. Armor itself grants an item bonus, so other item bonuses usually won't apply to your AC, but magic armor can increase the item bonus granted by your armor.\n\nPenalties to AC come from situations and effects in much the same way bonuses do. Circumstance penalties come from unfavorable situations, and status penalties come from effects that impede your abilities or from [broken](content:conditions/broken) armor. You take an item penalty when you wear [shoddy armor](content:equipment/shoddy-items).",
    path: ObjectPaths.from('armorClass'),
  }),
  baseValue: NumericExpressions.sum([10, Dexterity.variable, UnarmoredDefense.variable]),
})

export const Fortitude: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('fortitude', {
    name: 'Fortitude',
    description:
      "**Fortitude** saving throws allow you to reduce the effects of abilities and afflictions that can debilitate the body. They use your [Constitution modifier](characteristic:constitution) and are calculated as shown in the formula below.\n\n**Fortitude save result = d20 roll + Constitution modifier + proficiency bonus + other bonuses + penalties**\n\nWhen a creature is subject to a dangerous effect that must be avoided, it attempts a saving throw to mitigate the effect. You attempt a saving throw automatically—you don't have to use an action or a reaction. Unlike for most checks, the character who isn't acting rolls the d20 for a saving throw, and the creature who is acting provides the DC.\n\nThere are three types of saving throws: Fortitude (to resist diseases, poisons, and physical effects), [Reflex](characteristic:reflex) (to evade effects a character could quickly dodge), and Will (to resist effects that target the mind and personality).\n\nSee [Saving Throws](content:playing-the-game/saving-throws).",
    path: ObjectPaths.from('fortitude'),
  }),
  baseValue: Constitution.variable,
})

export const Reflex: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('reflex', {
    name: 'Reflex',
    description:
      "**Reflex** saving throws measure how well you can respond quickly to a situation and how gracefully you can avoid effects that have been thrown at you. They use your [Dexterity modifier](characteristic:dexterity) and are calculated as shown in the formula below.\n\n**Reflex save result = d20 roll + Dexterity modifier + proficiency bonus + other bonuses + penalties**\n\nWhen a creature is subject to a dangerous effect that must be avoided, it attempts a saving throw to mitigate the effect. You attempt a saving throw automatically—you don't have to use an action or a reaction. Unlike for most checks, the character who isn't acting rolls the d20 for a saving throw, and the creature who is acting provides the DC.\n\nThere are three types of saving throws: Fortitude (to resist diseases, poisons, and physical effects), [Reflex](characteristic:reflex) (to evade effects a character could quickly dodge), and Will (to resist effects that target the mind and personality).\n\nSee [Saving Throws](content:playing-the-game/saving-throws).",
    path: ObjectPaths.from('reflex'),
  }),
  baseValue: Dexterity.variable,
})

export const Will: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('will', {
    name: 'Will',
    description:
      "**Will** saving throws measure how well you can resist attacks to your mind and spirit. They use your [Wisdom modifier](characteristic:wisdom) and are calculated as shown in the formula below.\n\n**Will save result = d20 roll + Wisdom modifier + proficiency bonus + other bonuses + penalties**\n\nWhen a creature is subject to a dangerous effect that must be avoided, it attempts a saving throw to mitigate the effect. You attempt a saving throw automatically—you don't have to use an action or a reaction. Unlike for most checks, the character who isn't acting rolls the d20 for a saving throw, and the creature who is acting provides the DC.\n\nThere are three types of saving throws: Fortitude (to resist diseases, poisons, and physical effects), [Reflex](characteristic:reflex) (to evade effects a character could quickly dodge), and Will (to resist effects that target the mind and personality).\n\nSee [Saving Throws](content:playing-the-game/saving-throws).",
    path: ObjectPaths.from('will'),
  }),
  baseValue: Wisdom.variable,
})

export const Acrobatics: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/acrobatics', {
    name: 'Acrobatics',
    description:
      'Acrobatics measures your ability to perform tasks requiring coordination and grace. When you use the [Escape](content:playing-the-game/escape) basic action, you can use your Acrobatics modifier instead of your unarmed attack modifier. You can also use it for the basic actions [Arrest a Fall](content:playing-the-game/arrest-a-fall) and [Grab an Edge](content:playing-the-game/grab-an-edge) instead of [Reflex](characteristic:reflex).\n\nSee [Using Acrobatics](content:skills/using-acrobatics).',
    path: ObjectPaths.from('acrobatics'),
  }),
  baseValue: Dexterity.variable,
})

export const Arcana: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/arcana', {
    name: 'Arcana',
    description: 'Arcana measures how much you know about arcane magic and creatures.\n\nSee [Using Arcana](content:skills/using-arcana).',
    path: ObjectPaths.from('arcana'),
  }),
  baseValue: Intelligence.variable,
})

export const Athletics: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/athletics', {
    name: 'Athletics',
    description:
      "Athletics allows you to perform deeds of physical prowess. Most Athletics actions let you move about the environment ([Climb](content:skills/climb), [High Jump](content:skills/high-jump), [Long Jump](content:skills/long-jump), [Swim](content:skills/swim)) or control your opponent's movement in combat ([Grapple](content:skills/grapple), [Reposition](content:skills/reposition), [Shove](content:skills/shove), [Trip](content:skills/trip), and [Disarm](content:skills/disarm)). [Escape](content:playing-the-game/escape): When you use the Escape basic action, you can use your Athletics modifier instead of your unarmed attack modifier.\n\nSee [Using Athletics](content:skills/using-athletics).",
    path: ObjectPaths.from('athletics'),
  }),
  baseValue: Strength.variable,
})

export const Crafting: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/crafting', {
    name: 'Crafting',
    description: 'You can use this skill to create and repair items.\n\nSee [Using Crafting](content:skills/using-crafting).',
    path: ObjectPaths.from('crafting'),
  }),
  baseValue: Intelligence.variable,
})

export const Deception: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/deception', {
    name: 'Deception',
    description:
      "You can trick and mislead others using disguises, lies, and other forms of subterfuge. Deception often has a drawback if you get found out, and it's often best to be out of town by the time this happens.\n\nSee [Using Deception](content:skills/using-deception).",
    path: ObjectPaths.from('deception'),
  }),
  baseValue: Charisma.variable,
})

export const Diplomacy: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/diplomacy', {
    name: 'Diplomacy',
    description:
      'You influence others through negotiation and flattery, or find out information through friendly chats.\n\nSee [Using Diplomacy](content:skills/using-diplomacy).',
    path: ObjectPaths.from('diplomacy'),
  }),
  baseValue: Charisma.variable,
})

export const Intimidation: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/intimidation', {
    name: 'Intimidation',
    description:
      'You bend others to your will using threats. Unlike [Deception](characteristic:skill/deception) or [Diplomacy](characteristic:skill/diplomacy), Intimidation is typically a blunt instrument with little room for nuance or care.\n\nSee [Using Intimidation](content:skills/using-intimidation).',
    path: ObjectPaths.from('intimidation'),
  }),
  baseValue: Charisma.variable,
})

export const Medicine: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/medicine', {
    name: 'Medicine',
    description:
      'You can patch up wounds and help people recover from diseases and poisons. [Treat Wounds](content:skills/treat-wounds) is especially useful, allowing your adventuring party to heal up between fights. It can be made more efficient with skill feats like [Continual Recovery](trait:feat/continual-recovery) and [Ward Medic](trait:feat/ward-medic).\n\nSee [Using Medicine](content:skills/using-medicine).',
    path: ObjectPaths.from('medicine'),
  }),
  baseValue: Wisdom.variable,
})

export const Nature: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/nature', {
    name: 'Nature',
    description:
      'You know about the natural world, and you command and train animals and magical beasts.\n\nSee [Using Nature](content:skills/using-nature).',
    path: ObjectPaths.from('nature'),
  }),
  baseValue: Wisdom.variable,
})

export const Occultism: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/occultism', {
    name: 'Occultism',
    description:
      'You know a great deal about ancient philosophies, esoteric lore, obscure mysticism, and supernatural creatures.\n\nSee [Using Occultism](content:skills/using-occultism).',
    path: ObjectPaths.from('occultism'),
  }),
  baseValue: Intelligence.variable,
})

export const Performance: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/performance', {
    name: 'Performance',
    description:
      'You are skilled at a form of performance, using your talents to impress a crowd or make a living.\n\nSee [Using Performance](content:skills/using-performance).',
    path: ObjectPaths.from('performance'),
  }),
  baseValue: Charisma.variable,
})

export const Religion: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/religion', {
    name: 'Religion',
    description:
      'The secrets of deities, dogma, faith, and the realms of divine creatures both sublime and sinister are open to you. You also understand how magic works, though your training imparts a religious slant to that knowledge.\n\nSee [Using Religion](content:skills/using-religion).',
    path: ObjectPaths.from('religion'),
  }),
  baseValue: Wisdom.variable,
})

export const Society: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/society', {
    name: 'Society',
    description:
      'You understand the people and systems that make civilization run, and you know the historical events that make societies what they are today. Further, you can use that knowledge to navigate the complex physical, societal, and economic workings of settlements.\n\nSee [Using Society](content:skills/using-society).',
    path: ObjectPaths.from('society'),
  }),
  baseValue: Intelligence.variable,
})

export const Stealth: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/stealth', {
    name: 'Stealth',
    description:
      'You are skilled at avoiding detection, allowing you to slip past foes, hide, or conceal an item.\n\nSee [Using Stealth](content:skills/using-stealth).',
    path: ObjectPaths.from('stealth'),
  }),
  baseValue: Dexterity.variable,
})

export const Survival: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/survival', {
    name: 'Survival',
    description:
      'You are adept at living in the wilderness, foraging for food and building shelter, and with training you discover the secrets of tracking and hiding your trail.\n\nSee [Using Survival](content:skills/using-survival).',
    path: ObjectPaths.from('survival'),
  }),
  baseValue: Wisdom.variable,
})

export const Thievery: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/thievery', {
    name: 'Thievery',
    description:
      'You are trained in a particular set of skills favored by thieves and miscreants.\n\nSee [Using Thievery](content:skills/using-thievery).',
    path: ObjectPaths.from('thievery'),
  }),
  baseValue: Dexterity.variable,
})

export const AllCharacteristics = [
  Strength,
  Dexterity,
  Constitution,
  Intelligence,
  Wisdom,
  Charisma,
  UnarmedAttacks,
  SimpleWeapons,
  MartialWeapons,
  AdvancedWeapons,
  UnarmoredDefense,
  LightArmor,
  MediumArmor,
  HeavyArmor,
  HitPoints,
  Speed,
  Perception,
  ClassDC,
  SpellAttack,
  SpellDC,
  ArmorClass,
  Fortitude,
  Reflex,
  Will,
  Acrobatics,
  Arcana,
  Athletics,
  Crafting,
  Deception,
  Diplomacy,
  Intimidation,
  Medicine,
  Nature,
  Occultism,
  Performance,
  Religion,
  Society,
  Stealth,
  Survival,
  Thievery,
]

export const AllCharacteristicGroups = [AttributesGroup, StatisticsGroup, DefensesGroup, SkillsGroup, ProficienciesGroup]
