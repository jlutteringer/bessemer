import { Characteristics, CharacterValues } from '@simulacrum/ruleset'
import { Characteristic } from '@simulacrum/ruleset/characteristic'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { ObjectPaths } from '@bessemer/cornerstone'
import { RoundingMode } from '@bessemer/cornerstone/math'

export const AbilitiesGroup = Characteristics.defineGroup('abilities', { name: 'Abilities' })
export const CombatGroup = Characteristics.defineGroup('combat', { name: 'Combat' })
export const DefensesGroup = Characteristics.defineGroup('defenses', { name: 'Defenses' })
export const SkillsGroup = Characteristics.defineGroup('skills', { name: 'Skills' })

// Many of a character's numbers add one-half its level, rounded down
export const HalfLevel = NumericExpressions.round(NumericExpressions.multiply([CharacterValues.Level, 0.5]), 0, RoundingMode.Floor)

export const Strength: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('strength', { name: 'Strength', path: ObjectPaths.from('strength') }),
  initialValue: true,
})

export const Constitution: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('constitution', { name: 'Constitution', path: ObjectPaths.from('constitution') }),
  initialValue: true,
})

export const Dexterity: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('dexterity', { name: 'Dexterity', path: ObjectPaths.from('dexterity') }),
  initialValue: true,
})

export const Intelligence: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('intelligence', { name: 'Intelligence', path: ObjectPaths.from('intelligence') }),
  initialValue: true,
})

export const Wisdom: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('wisdom', { name: 'Wisdom', path: ObjectPaths.from('wisdom') }),
  initialValue: true,
})

export const Charisma: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('charisma', { name: 'Charisma', path: ObjectPaths.from('charisma') }),
  initialValue: true,
})

export const StrengthModifier: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('strength-modifier', {
    name: 'Strength Modifier',
    path: ObjectPaths.from('strengthModifier'),
  }),
  baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Strength.variable, -10]), 0.5]), 0, RoundingMode.Floor),
})

export const ConstitutionModifier: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('constitution-modifier', {
    name: 'Constitution Modifier',
    path: ObjectPaths.from('constitutionModifier'),
  }),
  baseValue: NumericExpressions.round(
    NumericExpressions.multiply([NumericExpressions.sum([Constitution.variable, -10]), 0.5]),
    0,
    RoundingMode.Floor
  ),
})

export const DexterityModifier: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('dexterity-modifier', {
    name: 'Dexterity Modifier',
    path: ObjectPaths.from('dexterityModifier'),
  }),
  baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Dexterity.variable, -10]), 0.5]), 0, RoundingMode.Floor),
})

export const IntelligenceModifier: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('intelligence-modifier', {
    name: 'Intelligence Modifier',
    path: ObjectPaths.from('intelligenceModifier'),
  }),
  baseValue: NumericExpressions.round(
    NumericExpressions.multiply([NumericExpressions.sum([Intelligence.variable, -10]), 0.5]),
    0,
    RoundingMode.Floor
  ),
})

export const WisdomModifier: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('wisdom-modifier', { name: 'Wisdom Modifier', path: ObjectPaths.from('wisdomModifier') }),
  baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Wisdom.variable, -10]), 0.5]), 0, RoundingMode.Floor),
})

export const CharismaModifier: Characteristic = Characteristics.defineCharacteristic({
  group: AbilitiesGroup,
  template: Characteristics.defineTemplate('charisma-modifier', {
    name: 'Charisma Modifier',
    path: ObjectPaths.from('charismaModifier'),
  }),
  baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Charisma.variable, -10]), 0.5]), 0, RoundingMode.Floor),
})

// Class adds its hit points at 1st level and per level gained; the Constitution score is added once, at 1st level
export const HitPoints: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: Characteristics.defineTemplate('hit-points', { name: 'Hit Points', path: ObjectPaths.from('hitPoints') }),
  baseValue: Constitution.variable,
})

export const Bloodied: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: Characteristics.defineTemplate('bloodied', { name: 'Bloodied', path: ObjectPaths.from('bloodied') }),
  baseValue: NumericExpressions.round(NumericExpressions.multiply([HitPoints.variable, 0.5]), 0, RoundingMode.Floor),
})

// Class adds its healing surges per day
export const HealingSurges: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: Characteristics.defineTemplate('healing-surges', { name: 'Healing Surges', path: ObjectPaths.from('healingSurges') }),
  baseValue: ConstitutionModifier.variable,
})

export const SurgeValue: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: Characteristics.defineTemplate('surge-value', { name: 'Surge Value', path: ObjectPaths.from('surgeValue') }),
  baseValue: NumericExpressions.round(NumericExpressions.multiply([HitPoints.variable, 0.25]), 0, RoundingMode.Floor),
})

export const Initiative: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: Characteristics.defineTemplate('initiative', { name: 'Initiative', path: ObjectPaths.from('initiative') }),
  baseValue: NumericExpressions.sum([DexterityModifier.variable, HalfLevel]),
})

// Race sets the base speed
export const Speed: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: Characteristics.defineTemplate('speed', { name: 'Speed', path: ObjectPaths.from('speed') }),
  baseValue: 0,
})

// Unarmored or in light armor; heavy armor replaces the ability modifier
export const ArmorClass: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('armor-class', { name: 'Armor Class', path: ObjectPaths.from('armorClass') }),
  baseValue: NumericExpressions.sum([10, HalfLevel, NumericExpressions.max([DexterityModifier.variable, IntelligenceModifier.variable])]),
})

export const Fortitude: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('fortitude', { name: 'Fortitude', path: ObjectPaths.from('fortitude') }),
  baseValue: NumericExpressions.sum([10, HalfLevel, NumericExpressions.max([StrengthModifier.variable, ConstitutionModifier.variable])]),
})

export const Reflex: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('reflex', { name: 'Reflex', path: ObjectPaths.from('reflex') }),
  baseValue: NumericExpressions.sum([10, HalfLevel, NumericExpressions.max([DexterityModifier.variable, IntelligenceModifier.variable])]),
})

export const Will: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: Characteristics.defineTemplate('will', { name: 'Will', path: ObjectPaths.from('will') }),
  baseValue: NumericExpressions.sum([10, HalfLevel, NumericExpressions.max([WisdomModifier.variable, CharismaModifier.variable])]),
})

// Trained skills add 5 (see skill.ts)
export const Acrobatics: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/acrobatics', { name: 'Acrobatics', path: ObjectPaths.from('skillAcrobatics') }),
  baseValue: NumericExpressions.sum([DexterityModifier.variable, HalfLevel]),
})

export const Arcana: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/arcana', { name: 'Arcana', path: ObjectPaths.from('skillArcana') }),
  baseValue: NumericExpressions.sum([IntelligenceModifier.variable, HalfLevel]),
})

export const Athletics: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/athletics', { name: 'Athletics', path: ObjectPaths.from('skillAthletics') }),
  baseValue: NumericExpressions.sum([StrengthModifier.variable, HalfLevel]),
})

export const Bluff: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/bluff', { name: 'Bluff', path: ObjectPaths.from('skillBluff') }),
  baseValue: NumericExpressions.sum([CharismaModifier.variable, HalfLevel]),
})

export const Diplomacy: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/diplomacy', { name: 'Diplomacy', path: ObjectPaths.from('skillDiplomacy') }),
  baseValue: NumericExpressions.sum([CharismaModifier.variable, HalfLevel]),
})

export const Dungeoneering: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/dungeoneering', {
    name: 'Dungeoneering',
    path: ObjectPaths.from('skillDungeoneering'),
  }),
  baseValue: NumericExpressions.sum([WisdomModifier.variable, HalfLevel]),
})

export const Endurance: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/endurance', { name: 'Endurance', path: ObjectPaths.from('skillEndurance') }),
  baseValue: NumericExpressions.sum([ConstitutionModifier.variable, HalfLevel]),
})

export const Heal: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/heal', { name: 'Heal', path: ObjectPaths.from('skillHeal') }),
  baseValue: NumericExpressions.sum([WisdomModifier.variable, HalfLevel]),
})

export const History: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/history', { name: 'History', path: ObjectPaths.from('skillHistory') }),
  baseValue: NumericExpressions.sum([IntelligenceModifier.variable, HalfLevel]),
})

export const Insight: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/insight', { name: 'Insight', path: ObjectPaths.from('skillInsight') }),
  baseValue: NumericExpressions.sum([WisdomModifier.variable, HalfLevel]),
})

export const Intimidate: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/intimidate', { name: 'Intimidate', path: ObjectPaths.from('skillIntimidate') }),
  baseValue: NumericExpressions.sum([CharismaModifier.variable, HalfLevel]),
})

export const Nature: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/nature', { name: 'Nature', path: ObjectPaths.from('skillNature') }),
  baseValue: NumericExpressions.sum([WisdomModifier.variable, HalfLevel]),
})

export const Perception: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/perception', { name: 'Perception', path: ObjectPaths.from('skillPerception') }),
  baseValue: NumericExpressions.sum([WisdomModifier.variable, HalfLevel]),
})

export const Religion: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/religion', { name: 'Religion', path: ObjectPaths.from('skillReligion') }),
  baseValue: NumericExpressions.sum([IntelligenceModifier.variable, HalfLevel]),
})

export const Stealth: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/stealth', { name: 'Stealth', path: ObjectPaths.from('skillStealth') }),
  baseValue: NumericExpressions.sum([DexterityModifier.variable, HalfLevel]),
})

export const Streetwise: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/streetwise', { name: 'Streetwise', path: ObjectPaths.from('skillStreetwise') }),
  baseValue: NumericExpressions.sum([CharismaModifier.variable, HalfLevel]),
})

export const Thievery: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/thievery', { name: 'Thievery', path: ObjectPaths.from('skillThievery') }),
  baseValue: NumericExpressions.sum([DexterityModifier.variable, HalfLevel]),
})

export const AllAbilities = [Strength, Constitution, Dexterity, Intelligence, Wisdom, Charisma]

export const AllSkills = [
  Acrobatics,
  Arcana,
  Athletics,
  Bluff,
  Diplomacy,
  Dungeoneering,
  Endurance,
  Heal,
  History,
  Insight,
  Intimidate,
  Nature,
  Perception,
  Religion,
  Stealth,
  Streetwise,
  Thievery,
]

export const AllCharacteristics: Array<Characteristic> = [
  ...AllAbilities,
  StrengthModifier,
  ConstitutionModifier,
  DexterityModifier,
  IntelligenceModifier,
  WisdomModifier,
  CharismaModifier,
  HitPoints,
  Bloodied,
  HealingSurges,
  SurgeValue,
  Initiative,
  Speed,
  ArmorClass,
  Fortitude,
  Reflex,
  Will,
  ...AllSkills,
]

export const AllCharacteristicGroups = [AbilitiesGroup, CombatGroup, DefensesGroup, SkillsGroup]
