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
    path: ObjectPaths.from('strength'),
  }),
  baseValue: 0,
})

export const Dexterity: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('dexterity', {
    name: 'Dexterity',
    path: ObjectPaths.from('dexterity'),
  }),
  baseValue: 0,
})

export const Constitution: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('constitution', {
    name: 'Constitution',
    path: ObjectPaths.from('constitution'),
  }),
  baseValue: 0,
})

export const Intelligence: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('intelligence', {
    name: 'Intelligence',
    path: ObjectPaths.from('intelligence'),
  }),
  baseValue: 0,
})

export const Wisdom: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('wisdom', {
    name: 'Wisdom',
    path: ObjectPaths.from('wisdom'),
  }),
  baseValue: 0,
})

export const Charisma: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('charisma', {
    name: 'Charisma',
    path: ObjectPaths.from('charisma'),
  }),
  baseValue: 0,
})

// Proficiency bonuses with each category of weapon and armor. Armor adds its own to AC while worn.
export const UnarmedAttacks: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/unarmed-attacks', {
    name: 'Unarmed Attacks',
    path: ObjectPaths.from('unarmedAttacks'),
  }),
  baseValue: 0,
})

export const SimpleWeapons: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/simple-weapons', {
    name: 'Simple Weapons',
    path: ObjectPaths.from('simpleWeapons'),
  }),
  baseValue: 0,
})

export const MartialWeapons: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/martial-weapons', {
    name: 'Martial Weapons',
    path: ObjectPaths.from('martialWeapons'),
  }),
  baseValue: 0,
})

export const AdvancedWeapons: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/advanced-weapons', {
    name: 'Advanced Weapons',
    path: ObjectPaths.from('advancedWeapons'),
  }),
  baseValue: 0,
})

export const UnarmoredDefense: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/unarmored-defense', {
    name: 'Unarmored Defense',
    path: ObjectPaths.from('unarmoredDefense'),
  }),
  baseValue: 0,
})

export const LightArmor: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/light-armor', {
    name: 'Light Armor',
    path: ObjectPaths.from('lightArmor'),
  }),
  baseValue: 0,
})

export const MediumArmor: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/medium-armor', {
    name: 'Medium Armor',
    path: ObjectPaths.from('mediumArmor'),
  }),
  baseValue: 0,
})

export const HeavyArmor: Characteristic = Characteristics.defineCharacteristic({
  group: ProficienciesGroup,
  template: Characteristics.defineTemplate('proficiency/heavy-armor', {
    name: 'Heavy Armor',
    path: ObjectPaths.from('heavyArmor'),
  }),
  baseValue: 0,
})

// Ancestry, class and Constitution add to hit points; ancestry sets Speed
export const HitPoints: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('hit-points', {
    name: 'Hit Points',
    path: ObjectPaths.from('hitPoints'),
  }),
  baseValue: 0,
})

export const Speed: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('speed', {
    name: 'Speed',
    path: ObjectPaths.from('speed'),
  }),
  baseValue: 0,
})

export const Perception: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('perception', {
    name: 'Perception',
    description:
      "Your character's Perception modifier measures how alert they are and is equal to their proficiency bonus in Perception plus their Wisdom modifier. …",
    path: ObjectPaths.from('perception'),
  }),
  baseValue: Wisdom.variable,
})

// A class's key attribute adds to its class DC; spellcasting classes add their spellcasting attribute and proficiency
export const ClassDC: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('class-dc', {
    name: 'Class DC',
    path: ObjectPaths.from('classDC'),
  }),
  baseValue: 10,
})

export const SpellAttack: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('spell-attack', {
    name: 'Spell Attack',
    path: ObjectPaths.from('spellAttack'),
  }),
  baseValue: 0,
})

export const SpellDC: Characteristic = Characteristics.defineCharacteristic({
  group: StatisticsGroup,
  template: Characteristics.defineTemplate('spell-dc', {
    name: 'Spell DC',
    path: ObjectPaths.from('spellDC'),
  }),
  baseValue: 10,
})

// Unarmored AC; armor replaces it while worn (see armor.ts)
export const ArmorClass: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('armor-class', {
    name: 'Armor Class',
    path: ObjectPaths.from('armorClass'),
  }),
  baseValue: NumericExpressions.sum([10, Dexterity.variable, UnarmoredDefense.variable]),
})

export const Fortitude: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('fortitude', {
    name: 'Fortitude',
    path: ObjectPaths.from('fortitude'),
  }),
  baseValue: Constitution.variable,
})

export const Reflex: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('reflex', {
    name: 'Reflex',
    path: ObjectPaths.from('reflex'),
  }),
  baseValue: Dexterity.variable,
})

export const Will: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('will', {
    name: 'Will',
    path: ObjectPaths.from('will'),
  }),
  baseValue: Wisdom.variable,
})

export const Acrobatics: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/acrobatics', {
    name: 'Acrobatics',
    description:
      'Acrobatics measures your ability to perform tasks requiring coordination and grace. When you use the Escape basic action, you can use your Acrobatics …',
    path: ObjectPaths.from('acrobatics'),
  }),
  baseValue: Dexterity.variable,
})

export const Arcana: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/arcana', {
    name: 'Arcana',
    description: 'Arcana measures how much you know about arcane magic and creatures.',
    path: ObjectPaths.from('arcana'),
  }),
  baseValue: Intelligence.variable,
})

export const Athletics: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/athletics', {
    name: 'Athletics',
    description:
      'Athletics allows you to perform deeds of physical prowess. Most Athletics actions let you move about the environment (Climb, High Jump, Long Jump, …',
    path: ObjectPaths.from('athletics'),
  }),
  baseValue: Strength.variable,
})

export const Crafting: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/crafting', {
    name: 'Crafting',
    description: 'You can use this skill to create and repair items.',
    path: ObjectPaths.from('crafting'),
  }),
  baseValue: Intelligence.variable,
})

export const Deception: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/deception', {
    name: 'Deception',
    description:
      "You can trick and mislead others using disguises, lies, and other forms of subterfuge. Deception often has a drawback if you get found out, and it's …",
    path: ObjectPaths.from('deception'),
  }),
  baseValue: Charisma.variable,
})

export const Diplomacy: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/diplomacy', {
    name: 'Diplomacy',
    description: 'You influence others through negotiation and flattery, or find out information through friendly chats.',
    path: ObjectPaths.from('diplomacy'),
  }),
  baseValue: Charisma.variable,
})

export const Intimidation: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/intimidation', {
    name: 'Intimidation',
    description:
      'You bend others to your will using threats. Unlike Deception or Diplomacy, Intimidation is typically a blunt instrument with little room for nuance …',
    path: ObjectPaths.from('intimidation'),
  }),
  baseValue: Charisma.variable,
})

export const Medicine: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/medicine', {
    name: 'Medicine',
    description:
      'You can patch up wounds and help people recover from diseases and poisons. Treat Wounds is especially useful, allowing your adventuring party to heal …',
    path: ObjectPaths.from('medicine'),
  }),
  baseValue: Wisdom.variable,
})

export const Nature: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/nature', {
    name: 'Nature',
    description: 'You know about the natural world, and you command and train animals and magical beasts.',
    path: ObjectPaths.from('nature'),
  }),
  baseValue: Wisdom.variable,
})

export const Occultism: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/occultism', {
    name: 'Occultism',
    description: 'You know a great deal about ancient philosophies, esoteric lore, obscure mysticism, and supernatural creatures.',
    path: ObjectPaths.from('occultism'),
  }),
  baseValue: Intelligence.variable,
})

export const Performance: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/performance', {
    name: 'Performance',
    description:
      'You are skilled at a form of performance, using your talents to impress a crowd or make a living. Basic Competence  Some performances require you to …',
    path: ObjectPaths.from('performance'),
  }),
  baseValue: Charisma.variable,
})

export const Religion: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/religion', {
    name: 'Religion',
    description:
      'The secrets of deities, dogma, faith, and the realms of divine creatures both sublime and sinister are open to you. You also understand how magic …',
    path: ObjectPaths.from('religion'),
  }),
  baseValue: Wisdom.variable,
})

export const Society: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/society', {
    name: 'Society',
    description:
      'You understand the people and systems that make civilization run, and you know the historical events that make societies what they are today. …',
    path: ObjectPaths.from('society'),
  }),
  baseValue: Intelligence.variable,
})

export const Stealth: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/stealth', {
    name: 'Stealth',
    description: 'You are skilled at avoiding detection, allowing you to slip past foes, hide, or conceal an item.',
    path: ObjectPaths.from('stealth'),
  }),
  baseValue: Dexterity.variable,
})

export const Survival: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/survival', {
    name: 'Survival',
    description:
      'You are adept at living in the wilderness, foraging for food and building shelter, and with training you discover the secrets of tracking and hiding …',
    path: ObjectPaths.from('survival'),
  }),
  baseValue: Wisdom.variable,
})

export const Thievery: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/thievery', {
    name: 'Thievery',
    description: 'You are trained in a particular set of skills favored by thieves and miscreants.',
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
