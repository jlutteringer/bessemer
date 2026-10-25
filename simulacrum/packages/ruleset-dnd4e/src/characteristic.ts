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
  template: Characteristics.defineTemplate('skill/acrobatics', {
    name: 'Acrobatics',
    description:
      '**Key Ability:** Dexterity · _Armor Check Penalty_\n\n' +
      'You can perform an acrobatic stunt, keep your balance while walking on narrow or unstable surfaces, slip free of a grab or restraints, or take less damage from a fall.',
    path: ObjectPaths.from('skillAcrobatics'),
  }),
  baseValue: NumericExpressions.sum([DexterityModifier.variable, HalfLevel]),
})

export const Arcana: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/arcana', {
    name: 'Arcana',
    description:
      '**Key Ability:** Intelligence\n\n' +
      'You have picked up knowledge about magic-related lore and magic effects. This knowledge extends to information about the following planes of existence, including the creatures native to those planes: the Elemental Chaos, the Feywild, and the Shadowfell.\n\n' +
      'If you have selected this skill as a trained skill, your knowledge represents academic study, either formalized or as a hobby. Also, those trained in the skill have a chance to know something about the mysterious Far Realm (but not about its creatures, which fall under [Dungeoneering](characteristic:skill/dungeoneering)).',
    path: ObjectPaths.from('skillArcana'),
  }),
  baseValue: NumericExpressions.sum([IntelligenceModifier.variable, HalfLevel]),
})

export const Athletics: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/athletics', {
    name: 'Athletics',
    description:
      '**Key Ability:** Strength · _Armor Check Penalty_\n\n' +
      'Make an Athletics check to attempt physical activities that rely on muscular strength, including climbing, escaping from a grab, jumping, and swimming.',
    path: ObjectPaths.from('skillAthletics'),
  }),
  baseValue: NumericExpressions.sum([StrengthModifier.variable, HalfLevel]),
})

export const Bluff: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/bluff', {
    name: 'Bluff',
    description:
      '**Key Ability:** Charisma\n\n' +
      'You can make what’s false appear to be true, what’s outrageous seem plausible, and what’s suspicious seem ordinary. You make a Bluff check to fast-talk a guard, con a merchant, gamble, pass off a disguise or fake documentation, and otherwise tell lies.\n\n' +
      'Your Bluff check is opposed by an observer’s [Insight](characteristic:skill/insight) check. Your check might be opposed by multiple Insight checks, depending on how many observers can see and hear you and care about what’s going on. During a skill challenge, you might need to beat your observers’ Insight checks multiple times to succeed at bluffing them.\n\n' +
      '**Bluff:** [Standard action](action-type:standard-action) in combat or part of a skill challenge.\n\n' +
      '- **Opposed Check:** Bluff vs. Insight.\n' +
      '- **Gain Combat Advantage:** Once per combat encounter, you can try to gain combat advantage against an adjacent enemy by feinting. As a standard action, make a Bluff check opposed by the enemy’s Insight check. If you succeed, you gain combat advantage against the enemy until the end of your next turn.\n' +
      '- **Create a Diversion to Hide:** Once per combat encounter, you can create a diversion to hide. As a standard action, make a Bluff check opposed by the Insight check of an enemy that can see you (if multiple enemies can see you, your Bluff check is opposed by each enemy’s Insight check). If you succeed, you create a diversion and can immediately make a [Stealth](characteristic:skill/stealth) check to hide.',
    path: ObjectPaths.from('skillBluff'),
  }),
  baseValue: NumericExpressions.sum([CharismaModifier.variable, HalfLevel]),
})

export const Diplomacy: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/diplomacy', {
    name: 'Diplomacy',
    description:
      '**Key Ability:** Charisma\n\n' +
      'You can influence others with your tact, subtlety, and social grace. Make a Diplomacy check to change opinions, to inspire good will, to haggle with a patron, to demonstrate proper etiquette and decorum, or to negotiate a deal in good faith.\n\n' +
      'A Diplomacy check is made against a DC set by the DM. The target’s general attitude toward you (friendly or unfriendly, peaceful or hostile) and other conditional modifiers (such as what you might be seeking to accomplish or what you’re asking for) might apply to the DC. Diplomacy is usually used in a skill challenge that requires a number of successes, but the DM might call for a Diplomacy check in other situations.',
    path: ObjectPaths.from('skillDiplomacy'),
  }),
  baseValue: NumericExpressions.sum([CharismaModifier.variable, HalfLevel]),
})

export const Dungeoneering: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/dungeoneering', {
    name: 'Dungeoneering',
    description:
      '**Key Ability:** Wisdom\n\n' +
      'You have picked up knowledge and skills related to dungeoneering, including finding your way through dungeon complexes, navigating winding caverns, recognizing dungeon hazards, and foraging for food in the Underdark.\n\n' +
      'If you have selected this skill as a trained skill, your knowledge represents formalized study or extensive experience, and you have a better chance of knowing esoteric information in this field. Also, those trained in the skill can identify creatures of the Far Realm that lair and hunt in dungeons and underground settings.',
    path: ObjectPaths.from('skillDungeoneering'),
  }),
  baseValue: NumericExpressions.sum([WisdomModifier.variable, HalfLevel]),
})

export const Endurance: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/endurance', {
    name: 'Endurance',
    description:
      '**Key Ability:** Constitution · _Armor Check Penalty_\n\n' +
      'Make an Endurance check to stave off ill effects and to push yourself beyond normal physical limits. You can hold your breath for long periods of time, forestall the debilitating effects of hunger and thirst, and swim or tread water for extended periods.\n\n' +
      'Some environmental hazards—including extreme temperatures, violent weather, and diseases—require you to make an Endurance check to resist and delay debilitating effects.\n\n' +
      'Chapter 3 of the _Dungeon Master’s Guide_ contains rules for enduring extreme weather, disease, and hunger and thirst.\n\n' +
      '**Endurance:** No action required.\n\n' +
      '- **DC:** See the table. The check DC varies based on the situation and the level of a hazard.\n' +
      '- **Success:** You endure a particular situation.\n' +
      '- **Failure:** You can’t try again until circumstances change or a certain amount of time has elapsed.\n\n' +
      '| Task | Endurance DC |\n' +
      '| :--- | :--- |\n' +
      '| Endure extreme weather | Base 15 |\n' +
      '| Resist disease | Varies |\n' +
      '| Ignore hunger | 10 + 2 per day |\n' +
      '| Ignore thirst | 15 + 4 per day |\n' +
      '| Hold breath (each round after 5) | 10 + 1 per round |\n' +
      '| Swim or tread water (after 1 hour) | 15 + 2 per hour |',
    path: ObjectPaths.from('skillEndurance'),
  }),
  baseValue: NumericExpressions.sum([ConstitutionModifier.variable, HalfLevel]),
})

export const Heal: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/heal', {
    name: 'Heal',
    description: '**Key Ability:** Wisdom\n\nYou know how to help someone recover from wounds or debilitating conditions, including disease.',
    path: ObjectPaths.from('skillHeal'),
  }),
  baseValue: NumericExpressions.sum([WisdomModifier.variable, HalfLevel]),
})

export const History: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/history', {
    name: 'History',
    description:
      '**Key Ability:** Intelligence\n\n' +
      'You have picked up knowledge related to the history of a region and beyond, including the chronological record of significant events and an explanation of their causes. This includes information pertaining to royalty and other leaders, wars, legends, significant personalities, laws, customs, traditions, and memorable events.\n\n' +
      'If you have selected this skill as a trained skill, your knowledge represents academic study, either formalized or as a hobby, and you have a better chance of knowing esoteric information in this field.\n\n' +
      'Make a History check to remember a useful bit of historical knowledge or to recognize a historical clue. See “[Knowledge Checks](content:skills/knowledge-checks),” page 180.',
    path: ObjectPaths.from('skillHistory'),
  }),
  baseValue: NumericExpressions.sum([IntelligenceModifier.variable, HalfLevel]),
})

export const Insight: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/insight', {
    name: 'Insight',
    description:
      '**Key Ability:** Wisdom\n\n' +
      'You can discern intent and decipher body language during social interactions. You make an Insight check to comprehend motives, to read between the lines, to get a sense of moods and attitudes, and to determine how truthful someone is being.\n\n' +
      'You use Insight to counter a [Bluff](characteristic:skill/bluff) check, and Insight is used as the social counterpart to the [Perception](characteristic:skill/perception) skill. In skill challenges that require a number of successes, use Insight checks to oppose someone’s Bluff checks. Insight can also be used to gain clues, figure out how well you might be doing in a social situation, and to determine if someone is under the influence of an outside force.\n\n' +
      'Whenever you use Insight, you’re making a best guess as to what you think a motive or attitude is or how truthful a target is being. Insight is not an exact science or a supernatural power; it represents your ability to get a sense of how a person is behaving.\n\n' +
      '**Insight:** No action required when countering a Bluff check, [minor action](action-type:minor-action) in combat, or part of a skill challenge. Requires some amount of interaction to get a read on a target.\n\n' +
      '- **DC:** See the table. If you’re trying to see through a bluff, this is an opposed check against your opponent’s Bluff check.\n' +
      '- **Success:** You counter a Bluff check, gain a clue about a social situation, sense an outside influence on someone, or recognize an effect as illusory.\n' +
      '- **Failure:** You can’t try again until circumstances change.\n' +
      '- **Recognizing an Effect as Illusory:** The DM might use your passive Insight check to determine if you notice the telltale signs of an illusion effect. Noticing such an effect doesn’t break the illusion, but you recognize the effect as illusory.\n\n' +
      '| Task | Insight DC |\n' +
      '| :--- | :--- |\n' +
      '| Sense motives, attitudes | 10 + creature’s level |\n' +
      '| Sense outside influence | 25 + effect’s level |\n' +
      '| Recognize effect as illusory | 15 + effect’s level |',
    path: ObjectPaths.from('skillInsight'),
  }),
  baseValue: NumericExpressions.sum([WisdomModifier.variable, HalfLevel]),
})

export const Intimidate: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/intimidate', {
    name: 'Intimidate',
    description:
      '**Key Ability:** Charisma\n\n' +
      'Make an Intimidate check to influence others through hostile actions, overt threats, and deadly persuasion.\n\n' +
      'Intimidate can be used in combat encounters or as part of a skill challenge that requires a number of successes. Your Intimidate checks are made against a target’s [Will](characteristic:will) defense or a DC set by the DM. The target’s general attitude toward you and other conditional modifiers (such as what you might be seeking to accomplish or what you’re asking for) might apply to the DC.\n\n' +
      '**Intimidate:** [Standard action](action-type:standard-action) in combat or part of a skill challenge.\n\n' +
      '- **Opposed Check:** Intimidate vs. Will (see the table for modifiers to your target’s defense). If you can’t speak a language your target understands, you take a –5 penalty to your check. If you attempt to intimidate multiple enemies at once, make a separate Intimidate check against each enemy’s Will defense. Each target must be able to see and hear you.\n' +
      '- **Success:** You force a bloodied target to surrender, get a target to reveal secrets against its will, or cow a target into taking some other action.\n' +
      '- **Failure:** If you attempted to intimidate the target during combat, you can’t try again against that target during this encounter.\n' +
      '- **Target Becomes Hostile:** Using Intimidate usually makes a target hostile toward you, even if you don’t succeed on the check.\n\n' +
      '| Enemy is . . . | Will Defense Modifier |\n' +
      '| :--- | :--- |\n' +
      '| Hostile | +10 |\n' +
      '| Unfriendly | +5 |',
    path: ObjectPaths.from('skillIntimidate'),
  }),
  baseValue: NumericExpressions.sum([CharismaModifier.variable, HalfLevel]),
})

export const Nature: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/nature', {
    name: 'Nature',
    description:
      '**Key Ability:** Wisdom\n\n' +
      'You have picked up knowledge and skills related to nature, including finding your way through the wilderness, recognizing natural hazards, dealing with and identifying natural creatures, and living off the land.\n\n' +
      'If you have selected this skill as a trained skill, your knowledge represents formalized study or extensive experience, and you have a better chance of knowing esoteric information in this field.',
    path: ObjectPaths.from('skillNature'),
  }),
  baseValue: NumericExpressions.sum([WisdomModifier.variable, HalfLevel]),
})

export const Perception: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/perception', {
    name: 'Perception',
    description:
      '**Key Ability:** Wisdom\n\n' +
      'Make a Perception check to notice clues, detect secret doors, spot imminent dangers, find traps, follow tracks, listen for sounds behind a closed door, or locate hidden objects.\n\n' +
      'This skill is used against another creature’s [Stealth](characteristic:skill/stealth) check or against a DC set by the DM. In most situations, the DM uses your passive Perception check result to determine if you notice a clue or an imminent danger.\n\n' +
      '**Perception:** No action required—either you notice something or you don’t. Your DM usually uses your passive Perception check result. If you want to use the skill actively, you need to take a [standard action](action-type:standard-action) or spend 1 minute listening or searching, depending on the task.\n\n' +
      '- **Opposed Check:** Perception vs. Stealth when trying to spot or hear a creature using Stealth. Your check might be modified by distance or if you’re listening through a door or a wall (see the table).\n' +
      '- **DC:** See the table for DCs when you’re trying to hear or spot something, searching an area, or looking for tracks.\n' +
      '- **Success:** You spot or hear something.\n' +
      '- **Failure:** You can’t try again unless circumstances change.\n' +
      '- **Searching:** When actively searching an area or looking for something specific, assume you’re searching each adjacent square. The DM might allow you to do this as a standard action, but usually searching requires at least 1 minute.\n\n' +
      '| Listen | Perception DC |\n' +
      '| :--- | :--- |\n' +
      '| Battle | 0 |\n' +
      '| Normal conversation | 10 |\n' +
      '| Whispers | 20 |\n' +
      '| Through a door | +5 |\n' +
      '| Through a wall | +10 |\n' +
      '| More than 10 squares away | +2 |\n\n' +
      '| Spot or Search | Perception DC |\n' +
      '| :--- | :--- |\n' +
      '| Barely hidden | 10 |\n' +
      '| Well hidden | 25 |\n' +
      '| More than 10 squares away | +2 |\n\n' +
      '| Find Tracks | Perception DC |\n' +
      '| :--- | :--- |\n' +
      '| Soft ground (snow, loose dirt, mud) | 15 |\n' +
      '| Hard ground (wood or stone) | 25 |\n' +
      '| Rain or snow since tracks were made | +10 |\n' +
      '| Each day since tracks were made | +2 |\n' +
      '| Quarry obscured its tracks | +5 |\n' +
      '| Huge or larger creature | –5 |\n' +
      '| Group of ten or more | –5 |',
    path: ObjectPaths.from('skillPerception'),
  }),
  baseValue: NumericExpressions.sum([WisdomModifier.variable, HalfLevel]),
})

export const Religion: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/religion', {
    name: 'Religion',
    description:
      '**Key Ability:** Intelligence\n\n' +
      'You have picked up knowledge about gods, religious traditions and ceremonies, divine effects, holy symbols, and theology. This knowledge extends to information about the undead and the Astral Sea, including the creatures of that plane.\n\n' +
      'If you have selected this skill as a trained skill, your knowledge represents academic study, either formalized or as a hobby, and you have a better chance of knowing esoteric information in this field.',
    path: ObjectPaths.from('skillReligion'),
  }),
  baseValue: NumericExpressions.sum([IntelligenceModifier.variable, HalfLevel]),
})

export const Stealth: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/stealth', {
    name: 'Stealth',
    description:
      '**Key Ability:** Dexterity · _Armor Check Penalty_\n\n' +
      'Make a Stealth check to conceal yourself from enemies, slink past guards, slip away without being noticed, and sneak up on people without being seen or heard.\n\n' +
      'This skill is used against another creature’s [Perception](characteristic:skill/perception) check or against a DC set by the DM.\n\n' +
      '**Stealth:** Part of whatever action you are trying to perform stealthily.\n\n' +
      '- **Opposed Check:** Stealth vs. Perception (see the table for modifiers to your check). If there are multiple observers, your Stealth check is opposed by each observer’s Perception check.\n' +
      '- **Cover or Concealment:** Unless a creature is distracted, you must have cover against or concealment from the creature to make a Stealth check. You have to maintain cover or concealment to remain unnoticed. If a creature has unblocked line of sight to you (that is, you lack any cover or concealment), the creature automatically sees you (no Perception check required).\n' +
      '- **Superior Cover or Total Concealment:** If you have superior cover or total concealment, a creature can’t see you and can’t be sure of your exact location. If its Perception check beats your Stealth check, though, it knows you are present, knows the direction to your location, and has a vague idea of the distance between the two of you. If its Perception check beats your Stealth check by 10 or more, the creature can pinpoint your location until the end of your next turn, even if you move.\n' +
      '- **Distracted Creature:** If a creature is distracted, you can attempt to hide from that creature even when you don’t have cover or concealment. In combat, creatures are assumed to be paying attention in all directions. Outside combat, a creature might be paying attention to something in a certain direction, allowing you to hide behind the creature’s back. You make a Stealth check as normal to avoid the creature’s notice, since it might hear you.\n' +
      '- **Success:** You avoid notice, unheard and hidden from view. If you later attack or shout, you’re no longer hidden.\n' +
      '- **Failure:** You can’t try again unless observers become distracted or you manage to obtain cover or concealment.\n' +
      '- **Combat Advantage:** You have combat advantage against a target that isn’t aware of you.\n' +
      '- **Light Source:** Observers automatically see you if you’re carrying a light source.\n\n' +
      '| You . . . | Stealth Modifier |\n' +
      '| :--- | :--- |\n' +
      '| Speak | –5 |\n' +
      '| Move more than 2 squares | –5 |\n' +
      '| Run | –10 |',
    path: ObjectPaths.from('skillStealth'),
  }),
  baseValue: NumericExpressions.sum([DexterityModifier.variable, HalfLevel]),
})

export const Streetwise: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/streetwise', {
    name: 'Streetwise',
    description:
      '**Key Ability:** Charisma\n\n' +
      'When in a settlement—a village, a town, or a city—make a Streetwise check to find out what’s going on, who the movers and shakers are, where to get what you need (and how to get there), and where not to go.\n\n' +
      '**Streetwise:** Using this skill takes 1 hour and might be part of a skill challenge.\n\n' +
      '- **DC:** See the table.\n' +
      '- **Success:** You collect a useful bit of information, gather rumors, find out about available jobs, or locate the best deal.\n' +
      '- **Failure:** You can try again, but you might draw attention to yourself if you keep chasing after the same information.\n\n' +
      '| Settlement and Information | Streetwise DC |\n' +
      '| :--- | :--- |\n' +
      '| Typical settlement | 15 |\n' +
      '| Hostile settlement | 20 |\n' +
      '| Totally alien settlement | 30 |\n' +
      '| Information is readily available | –2 |\n' +
      '| Information is hard to come by | +5 |\n' +
      '| Information is secret or closely guarded | +10 |',
    path: ObjectPaths.from('skillStreetwise'),
  }),
  baseValue: NumericExpressions.sum([CharismaModifier.variable, HalfLevel]),
})

export const Thievery: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/thievery', {
    name: 'Thievery',
    description:
      '**Key Ability:** Dexterity · _Armor Check Penalty_\n\n' +
      'You have picked up thieving abilities and can perform tasks that require nerves of steel and a steady hand: disabling traps, opening locks, picking pockets, and sleight of hand.\n\n' +
      'The DM might decide that some uses of this skill are so specialized that you are required to be trained in it to have a chance of succeeding.',
    path: ObjectPaths.from('skillThievery'),
  }),
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
