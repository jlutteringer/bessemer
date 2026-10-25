import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import * as Characteristic from '@simulacrum/ruleset-dnd4e/characteristic'

export const SkillsSection = Content.defineSection('skills', {
  content: {
    name: 'Skills',
    description:
      'Has your character studied ancient tomes that describe the nature of magic and the structure of the universe? Do you have a golden tongue that can pass off the most outrageous lies as truth? Do you have a knack for getting information out of people, or have you trained in balance and tumbling? These capabilities are represented in the game by skills.\n\n' +
      'As an adventurer, you have a basic level of competence in every skill, and you get more competent as you advance in level. Your ability scores affect your use of skills; a halfling rogue with a high [Dexterity](characteristic:dexterity) is better at [Acrobatics](characteristic:skill/acrobatics) than a clumsy dwarf paladin with a lower Dexterity. Your aptitude at a skill is measured in the game with a skill check—a d20 roll that determines whether and sometimes how well you succeed at any skill-based task you might attempt.\n\n' +
      'This chapter tells you everything you need to know about skills:\n\n' +
      '- **[Skill Training](content:skills/skill-training):** How skill training works, including how you learn additional trained skills.\n' +
      '- **[Using Skills](content:skills/using-skills):** How you make a skill check, what your target number is, and how to make a check without rolling a die.\n' +
      '- **[Knowledge Skills](content:skills/knowledge-skills):** General rules for the skills that determine how much you know about the D&D universe and the creatures that populate it.\n' +
      '- **[Skill Descriptions](content:skills/skill-descriptions):** Descriptions of what you can do with the game’s skills, from Acrobatics to Thievery.',
  },
})

export const SkillTrainingSection = Content.defineSection('skills/skill-training', {
  parent: SkillsSection,
  content: {
    name: 'Skill Training',
    description:
      'Training in a skill means that you have some combination of formal instruction, practical experience, and natural aptitude using that skill.\n\n' +
      'When you select a skill to be trained in, you gain a permanent +5 bonus to that skill. You can’t gain training in a skill more than once.\n\n' +
      'The entry for your class in [Chapter 4](content:classes) tells you how many skills you’re trained in and what skills you can choose at 1st level. For example, if you’re a 1st-level [warlock](trait:warlock), you can pick four skills from a list of eight. You can take the [Skill Training](trait:feat/skill-training) feat to gain training in a skill even if it’s not on your class skill list. Some multiclass feats also give skill training.\n\n' +
      'The table below shows the skills available in the game, the ability modifier you use when you make that kind of skill check, and which classes have that skill as a class skill.\n\n' +
      '| Skill | Key Ability | Class Skill for . . . |\n' +
      '| :--- | :--- | :--- |\n' +
      '| [Acrobatics](characteristic:skill/acrobatics) | Dex | Ranger, rogue |\n' +
      '| [Arcana](characteristic:skill/arcana) | Int | Cleric, warlock, wizard |\n' +
      '| [Athletics](characteristic:skill/athletics) | Str | Fighter, ranger, rogue, warlord |\n' +
      '| [Bluff](characteristic:skill/bluff) | Cha | Rogue, warlock |\n' +
      '| [Diplomacy](characteristic:skill/diplomacy) | Cha | Cleric, paladin, warlord, wizard |\n' +
      '| [Dungeoneering](characteristic:skill/dungeoneering) | Wis | Ranger, rogue, wizard |\n' +
      '| [Endurance](characteristic:skill/endurance) | Con | Fighter, paladin, ranger, warlord |\n' +
      '| [Heal](characteristic:skill/heal) | Wis | Cleric, fighter, paladin, ranger, warlord |\n' +
      '| [History](characteristic:skill/history) | Int | Cleric, paladin, warlock, warlord, wizard |\n' +
      '| [Insight](characteristic:skill/insight) | Wis | Cleric, paladin, rogue, warlock, wizard |\n' +
      '| [Intimidate](characteristic:skill/intimidate) | Cha | Fighter, paladin, rogue, warlock, warlord |\n' +
      '| [Nature](characteristic:skill/nature) | Wis | Ranger, wizard |\n' +
      '| [Perception](characteristic:skill/perception) | Wis | Ranger, rogue |\n' +
      '| [Religion](characteristic:skill/religion) | Int | Cleric, paladin, warlock, wizard |\n' +
      '| [Stealth](characteristic:skill/stealth) | Dex | Ranger, rogue |\n' +
      '| [Streetwise](characteristic:skill/streetwise) | Cha | Fighter, rogue, warlock |\n' +
      '| [Thievery](characteristic:skill/thievery) | Dex | Rogue, warlock |',
  },
})

export const UsingSkillsSection = Content.defineSection('skills/using-skills', {
  parent: SkillsSection,
  content: {
    name: 'Using Skills',
    description:
      'When you use a skill, you make a skill check. This check represents your training, your natural talent (your ability modifier), your overall experience (one-half your level), other applicable factors (relevant bonuses), and sheer luck (a die roll).\n\n' +
      'The DM tells you if a skill check is appropriate in a given situation or directs you to make a check if circumstances call for one.',
  },
})

export const SkillCheckBonusesSection = Content.defineSection('skills/skill-check-bonuses', {
  parent: UsingSkillsSection,
  content: {
    name: 'Skill Check Bonuses',
    description:
      'When you create your character, you should determine your base skill check bonus for each skill you know. Your base skill check bonus for a skill includes the following:\n\n' +
      '- One-half your level\n' +
      '- Your ability score modifier (each skill is based on one of your ability scores)\n' +
      '- A +5 bonus if you’re trained in the skill\n\n' +
      'In addition, some or all of the following factors might apply to your base skill check bonus:\n\n' +
      '- Armor check penalty, if you’re wearing some kinds of armor (see [Chapter 7](content:equipment)) and making a check using [Strength](characteristic:strength), [Dexterity](characteristic:dexterity), or [Constitution](characteristic:constitution) as the key ability\n' +
      '- Racial or feat bonuses\n' +
      '- An item bonus from a magic item\n' +
      '- A power bonus\n' +
      '- Any untyped bonus that might apply',
  },
})

export const SkillCheckSection = Content.defineSection('skills/skill-check', {
  parent: UsingSkillsSection,
  content: {
    name: 'Skill Check',
    description:
      'To make a skill check, roll 1d20 and add the following:\n\n' +
      '- Your base skill check bonus with the skill\n' +
      '- All situational modifiers that apply\n' +
      '- Bonuses and penalties from powers affecting you\n\n' +
      'The total is your check result.',
  },
})

export const DifficultyClassSection = Content.defineSection('skills/difficulty-class', {
  parent: UsingSkillsSection,
  content: {
    name: 'Difficulty Class',
    description:
      'When you make skill checks, high results are best. You’re always trying to meet or beat a certain number. Often, that’s a fixed number, called a Difficulty Class (DC). The DC depends on what you’re trying to accomplish and is ultimately set by the Dungeon Master. The skill entries in this chapter give sample DCs for each skill. The DM sets the DCs for specific situations based on level, conditions, and circumstances, as detailed in the _Dungeon Master’s Guide_. All DCs assume acting in situations that are far from mundane; the DM should call for checks only in dramatic situations.',
  },
})

export const OpposedChecksSection = Content.defineSection('skills/opposed-checks', {
  parent: UsingSkillsSection,
  content: {
    name: 'Opposed Checks',
    description:
      'Sometimes, you make a skill check as a test of your skill in one area against another character’s skill in the same area or in a different one. When you use [Stealth](characteristic:skill/stealth), for example, you’re testing your ability to hide against someone else’s ability to spot hidden things (the [Perception](characteristic:skill/perception) skill). These skill contests are called opposed checks. When you make an opposed check, both characters roll, and the higher check result wins. If there’s a tie, the character with the higher check modifier wins. If it’s still a tie, both sides roll again to break the tie.',
  },
})

export const ChecksWithoutRollsSection = Content.defineSection('skills/checks-without-rolls', {
  parent: UsingSkillsSection,
  content: {
    name: 'Checks without Rolls',
    description:
      'In some situations, luck does not affect whether you succeed or fail. In a calm environment (outside an encounter), when dealing with a mundane task, you can rely on sheer ability to achieve results.',
  },
})

export const Take10Section = Content.defineSection('skills/take-10', {
  parent: ChecksWithoutRollsSection,
  content: {
    name: 'Take 10',
    description:
      'When you’re not in a rush, not being threatened or distracted (when you’re outside an encounter), and when you’re dealing with a mundane task, you can choose to take 10. Instead of rolling a d20, determine your skill check result as if you had rolled the average (10). When you take 10, your result equals your skill modifiers (including one-half your level) + 10. For mundane tasks, taking 10 usually results in a success.',
  },
})

export const Take10SidebarSection = Content.defineSection('skills/take-10-sidebar', {
  parent: Take10Section,
  content: {
    name: 'Take 10',
    description: 'Your check result when you take 10 is equal to 10 + your base skill check bonus for a particular skill.',
  },
})

export const PassiveChecksSection = Content.defineSection('skills/passive-checks', {
  parent: ChecksWithoutRollsSection,
  content: {
    name: 'Passive Checks',
    description:
      'When you’re not actively using a skill, you’re assumed to be taking 10 for any opposed checks using that skill. Passive checks are most commonly used for [Perception](characteristic:skill/perception) checks and [Insight](characteristic:skill/insight) checks, but the DM might also use your passive check result with skills such as [Arcana](characteristic:skill/arcana) or [Dungeoneering](characteristic:skill/dungeoneering) to decide how much to tell you about a monster at the start of an encounter.\n\n' +
      'For example, if you’re walking through an area you expect to be safe and thus aren’t actively looking around for danger, you’re taking 10 on your Perception check to notice hidden objects or enemies. If your Perception check is high enough, or a creature rolls poorly on its [Stealth](characteristic:skill/stealth) check, you might notice the creature even if you aren’t actively looking for it.',
  },
})

export const CooperationSection = Content.defineSection('skills/cooperation', {
  parent: UsingSkillsSection,
  content: {
    name: 'Cooperation',
    description:
      'In some situations, you and your allies can work together to use a skill; your allies can help you make a skill check by making a check themselves. Each ally who gets a result of 10 or higher gives you a +2 bonus to your check. Up to four allies can help you, for a maximum bonus of +8. If you have a choice, let the character in your group who has the highest base skill check bonus take the lead, while the other characters cooperate to give bonuses to the check. See “[Aid Another](content:combat/aid-another),” page 287, for how to cooperate in combat.',
  },
})

export const SkillChallengesSection = Content.defineSection('skills/skill-challenges', {
  parent: UsingSkillsSection,
  content: {
    name: 'Skill Challenges',
    description:
      'A skill challenge is an encounter in which your skills, rather than your combat abilities, take center stage. In contrast to an obstacle that requires one successful skill check, a skill challenge is a complex situation in which you must make several successful checks, often using a variety of skills, before you can claim success in the encounter.\n\n' +
      'The _Dungeon Master’s Guide_ contains rules for skill challenges, and each encounter has its own guidelines and requirements. In one skill challenge, you might use a [Diplomacy](characteristic:skill/diplomacy) check to entreat a duke to send soldiers into a mountain pass, a [History](characteristic:skill/history) check to remind him what happened when his ancestors neglected the pass’s defense, and an [Insight](characteristic:skill/insight) check to realize that having your fighter companion lean on the duke with an [Intimidate](characteristic:skill/intimidate) check wouldn’t help your cause. In another skill challenge, you might use [Nature](characteristic:skill/nature) checks and [Perception](characteristic:skill/perception) checks to track cultists through a jungle, a [Religion](characteristic:skill/religion) check to predict a likely spot for their hidden temple, and an [Endurance](characteristic:skill/endurance) check to fight off the effects of illness and exhaustion over the course of days in the jungle.\n\n' +
      'Whatever the details of a skill challenge, the basic structure of a skill challenge is straightforward. Your goal is to accumulate a specific number of victories (usually in the form of successful skill checks) before you get too many defeats (failed checks). It’s up to you to think of ways you can use your skills to meet the challenges you face.',
  },
})

export const KnowledgeSkillsSection = Content.defineSection('skills/knowledge-skills', {
  parent: SkillsSection,
  content: {
    name: 'Knowledge Skills',
    description:
      'Some skills deal with knowledge about a particular topic: [Arcana](characteristic:skill/arcana), [Dungeoneering](characteristic:skill/dungeoneering), [History](characteristic:skill/history), [Nature](characteristic:skill/nature), and [Religion](characteristic:skill/religion). You can use such a skill to remember a useful bit of information in its field of knowledge or to recognize a clue related to it. You can also use such a skill to identify certain kinds of monsters, as noted in a skill’s description.\n\n' +
      'The check DC increases based on the specific topic and how common the knowledge is. The check DC increases based on the specific topic and how common the knowledge is. Sometimes your DM might decide that the information you seek is available only to characters trained in an appropriate knowledge skill.\n\n' +
      '**Paragon and Epic Tiers:** If the knowledge pertains to the paragon tier or the epic tier, the DC increases as shown on the tables later in this section.',
  },
})

export const KnowledgeChecksSection = Content.defineSection('skills/knowledge-checks', {
  parent: KnowledgeSkillsSection,
  content: {
    name: 'Knowledge Checks',
    description:
      'Regardless of the knowledge skill you’re using, refer to the rules here when making a knowledge check.\n\n' +
      '**Common Knowledge:** This includes the kind of general information that is commonly known about a given topic.\n\n' +
      '**Expert Knowledge:** This includes the kind of specialized information that only an expert in the field of study could possibly know.\n\n' +
      '**Master Knowledge:** This includes the kind of esoteric information that only a master in the field of study could possibly know.\n\n' +
      '**Knowledge Skill:** No action required—either you know the answer or you don’t.\n\n' +
      '- **DC:** See the table.\n' +
      '- **Success:** You recall a useful bit of information in your field of knowledge or recognize a clue related to it.\n' +
      '- **Failure:** You don’t recall any pertinent information. The DM might allow you to make a new check if further information comes to light.\n\n' +
      '| Level of Knowledge | DC |\n' +
      '| :--- | :--- |\n' +
      '| Common | 15 |\n' +
      '| Expert | 20 |\n' +
      '| Master | 25 |\n' +
      '| Paragon tier | +10 |\n' +
      '| Epic tier | +15 |',
  },
})

export const MonsterKnowledgeChecksSection = Content.defineSection('skills/monster-knowledge-checks', {
  parent: KnowledgeSkillsSection,
  content: {
    name: 'Monster Knowledge Checks',
    description:
      'Regardless of the knowledge skill you’re using, refer to the rules here when making a check to identify a monster.\n\n' +
      '**Monster Knowledge:** No action required—either you know the answer or you don’t.\n\n' +
      '- **DC:** See the table.\n' +
      '- **Success:** You identify a creature as well as its type, typical temperament, and keywords. Higher results give you information about the creature’s powers, resistances, and vulnerabilities.\n' +
      '- **Failure:** You don’t recall any pertinent information. The DM might allow you to make a new check if further information comes to light.\n\n' +
      '| Monster Knowledge | DC |\n' +
      '| :--- | :--- |\n' +
      '| Name, type, and keywords | 15 |\n' +
      '| Powers | 20 |\n' +
      '| Resistances and vulnerabilities | 25 |\n' +
      '| Paragon tier creature | +5 |\n' +
      '| Epic tier creature | +10 |',
  },
})

export const SkillDescriptionsSection = Content.defineSection('skills/skill-descriptions', {
  parent: SkillsSection,
  content: {
    name: 'Skill Descriptions',
    description:
      'The first line of a skill description shows the name of the skill, followed by the key ability for that skill. You use the ability modifier for that ability score to figure out your base skill check bonus.\n\n' +
      'For skills based on [Strength](characteristic:strength), [Constitution](characteristic:constitution), and [Dexterity](characteristic:dexterity), the description includes a reminder that your armor check penalty applies to that skill.\n\n' +
      'The skill description explains the different ways you can use the skill and provides typical DCs. Each description also specifies what kind of action is required to use the skill.',
  },
})

export const AcrobaticsSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Acrobatics)

export const AcrobaticStuntSection = Content.defineSection('skills/acrobatic-stunt', {
  parent: AcrobaticsSection,
  content: {
    name: 'Acrobatic Stunt',
    description:
      'Make an [Acrobatics](characteristic:skill/acrobatics) check to swing from a chandelier, somersault over an opponent, slide down a staircase on your shield, or attempt any other acrobatic stunt that you can imagine and that your DM agrees to let you try. The DM sets the DC based on the complexity of the stunt and the danger of the situation. If the stunt fails, you fall prone in the square where you began the stunt (the DM might change where you land, depending on the specific stunt and situation). Your DM always has the right to say that a stunt won’t work in a particular situation or to set a high DC.\n\n' +
      '**Acrobatic Stunt:** [Standard action](action-type:standard-action) or [move action](action-type:move-action), depending on the stunt.\n\n' +
      '- **DC:** Base DC 15.\n' +
      '- **Success:** You perform an acrobatic stunt.\n' +
      '- **Failure:** You fail to pull off the stunt and might fall or suffer some other consequence.',
  },
})

export const BalanceSection = Content.defineSection('skills/balance', {
  parent: AcrobaticsSection,
  content: {
    name: 'Balance',
    description:
      'Make an [Acrobatics](characteristic:skill/acrobatics) check to move across a surface less than 1 foot wide (such as a ledge or a tightrope) or across an unstable surface (such as a wind-tossed rope bridge or a rocking log).\n\n' +
      '**Balance:** Part of a [move action](action-type:move-action).\n\n' +
      '- **DC:** See the table.\n' +
      '- **Success:** You can move one-half your [speed](characteristic:speed) across a narrow or unstable surface.\n' +
      '- **Fail by 4 or Less:** You stay in the square you started in and lose the rest of your move action, but you don’t fall. You can try again as part of a move action.\n' +
      '- **Fail by 5 or More:** You fall off the surface (see “[Falling](content:combat/falling),” page 284) and lose the rest of your move action. If you are trying to move across an unstable surface that isn’t narrow, you instead fall prone in the square you started in. You can try again as part of a move action if you’re still on the surface.\n' +
      '- **Grant Combat Advantage:** While you are balancing, enemies have combat advantage against you.\n' +
      '- **Taking Damage:** If you take damage, you must make a new Acrobatics check to remain standing.\n\n' +
      '| Surface | Acrobatics DC |\n' +
      '| :--- | :--- |\n' +
      '| Narrow or unstable | 20 |\n' +
      '| Very narrow (less than 6 inches) | +5 |\n' +
      '| Narrow and unstable | +5 |',
  },
})

export const AcrobaticsEscapeFromAGrabSection = Content.defineSection('skills/acrobatics-escape-from-a-grab', {
  parent: AcrobaticsSection,
  content: {
    name: 'Escape from a Grab',
    description:
      'Make an [Acrobatics](characteristic:skill/acrobatics) check to wriggle out of a grab (see “[Escape](content:combat/escape),” page 288). You can also make escape attempts to get away from other immobilizing effects, as directed by your DM.',
  },
})

export const EscapeFromRestraintsSection = Content.defineSection('skills/escape-from-restraints', {
  parent: AcrobaticsSection,
  content: {
    name: 'Escape from Restraints',
    description:
      'Make an [Acrobatics](characteristic:skill/acrobatics) check to slip free of restraints.\n\n' +
      '**Escape from Restraints:** 5 minutes.\n\n' +
      '- **DC:** Base DC 20. The DC is determined by the type of restraint and its quality, as set by the DM.\n' +
      '- **Fast Escape:** You can make an escape attempt as a [standard action](action-type:standard-action), but the DC increases by 10.\n' +
      '- **Success:** You slip free of a physical restraint.\n' +
      '- **Failure:** You can try again only if someone else aids you.',
  },
})

export const ReduceFallingDamageSection = Content.defineSection('skills/reduce-falling-damage-trained-only', {
  parent: AcrobaticsSection,
  content: {
    name: 'Reduce Falling Damage (Trained Only)',
    description:
      'If you fall or jump down from a height, you can make an [Acrobatics](characteristic:skill/acrobatics) check to reduce the amount of falling damage you take.\n\n' +
      '**Reduce Falling Damage:** [Free action](action-type:free-action) if you fall or a [move action](action-type:move-action) if you jump down.\n\n' +
      '- **Damage Reduced:** Make an Acrobatics check, and reduce the amount of falling damage you take by one-half your check result (round down).\n\n' +
      '_Example:_ The floor beneath Kora swings open over a pit, and she makes an Acrobatics check to reduce the falling damage. The pit is 40 feet deep, resulting in 24 points of damage (from a roll of 4d10). Her Acrobatics check result is 21, which reduces the damage by 10. She takes 14 points of damage from the fall.',
  },
})

export const ArcanaSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Arcana)

export const ArcanaKnowledgeSection = Content.defineSection('skills/arcana-knowledge', {
  parent: ArcanaSection,
  content: {
    name: 'Arcana Knowledge',
    description:
      'Make an [Arcana](characteristic:skill/arcana) check to recall a useful bit of magic-related knowledge or to recognize a magic-related clue. See “[Knowledge Checks](content:skills/knowledge-checks),” page 180.\n\n' +
      'You must be trained in Arcana to remember information about the Far Realm, which requires master knowledge (DC 25) at least.',
  },
})

export const ArcanaMonsterKnowledgeSection = Content.defineSection('skills/arcana-monster-knowledge', {
  parent: ArcanaSection,
  content: {
    name: 'Monster Knowledge',
    description:
      '_Elemental, Fey, and Shadow_\n\n' +
      'Make an [Arcana](characteristic:skill/arcana) check to identify a creature that has the elemental, the fey, or the shadow origin (a creature of the Elemental Chaos, the Feywild, or the Shadowfell), or is a construct. See “[Monster Knowledge Checks](content:skills/monster-knowledge-checks),” page 180.',
  },
})

export const DetectMagicSection = Content.defineSection('skills/detect-magic-trained-only', {
  parent: ArcanaSection,
  content: {
    name: 'Detect Magic (Trained Only)',
    description:
      'Your knowledge of magic allows you to identify magical effects and sense the presence of magic.\n\n' +
      '**Identify Conjuration or Zone:** [Minor action](action-type:minor-action).\n\n' +
      '- **DC:** DC 15 + one-half the power’s level. You must be able to see the effect of the conjuration or zone.\n' +
      '- **Success:** You identify the power used to create the effect and its power source and keywords.\n' +
      '- **Failure:** You can’t try to identify the effect again during this encounter.\n\n' +
      '**Identify Ritual:** [Standard action](action-type:standard-action).\n\n' +
      '- **DC:** DC 20 + one-half the ritual’s level. You must be able to see or otherwise detect the ritual’s effects.\n' +
      '- **Success:** You identify the ritual and its category.\n' +
      '- **Failure:** You can’t try to identify the ritual again until after an extended rest.\n\n' +
      '**Identify Magical Effect:** Standard action.\n\n' +
      '- **DC:** DC 20 + one-half the effect’s level, if any. You must be able to see or otherwise detect the effect.\n' +
      '- **Not a Power or a Ritual:** The magical effect must be neither from a magic item nor the product of a power or a ritual.\n' +
      '- **Success:** You learn the effect’s name, power source, and keywords, if any of those apply.\n' +
      '- **Failure:** You can’t try to identify the effect again until after an extended rest.\n\n' +
      '**Sense the Presence of Magic:** 1 minute.\n\n' +
      '- **DC:** DC 20 + one-half the level of a magic item, power (conjuration or zone), ritual, or magical phenomenon within range.\n' +
      '- **Area of Detection:** You can detect magic within a number of squares equal to 5 + your level in every direction, and you can ignore any sources of magical energy you’re already aware of. Ignore all barriers; you can detect magic through walls, doors, and such.\n' +
      '- **Success:** You detect each source of magical energy whose DC you meet. You learn the magic’s power source, if any. If the source of magical energy is within line of sight, you pinpoint its location. If it’s not within line of sight, you know the direction from which the magical energy emanates, but you don’t know the distance to it.\n' +
      '- **Failure:** Either you detected nothing or there was nothing in range to detect. You can’t try again in this area until after an extended rest.',
  },
})

export const AthleticsSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Athletics)

export const ClimbSection = Content.defineSection('skills/climb', {
  parent: AthleticsSection,
  content: {
    name: 'Climb',
    description:
      'Make an [Athletics](characteristic:skill/athletics) check to climb up or down a surface. Different circumstances and surfaces make climbing easier or harder.\n\n' +
      '**Climb:** Part of a [move action](action-type:move-action).\n\n' +
      '- **DC:** See the table. If you use a climber’s kit, you get a +2 bonus to your Athletics check. If you can brace yourself between two surfaces, you get a +5 bonus to your check.\n' +
      '- **Success:** You climb at one-half your [speed](characteristic:speed). When you climb to reach the top of a surface, such as when you climb out of a pit, the distance to reach the top includes allowing you to arrive in the square adjacent to the surface. The last square of movement places you on that square.\n' +
      '- **Fail by 4 or Less:** You stay where you started and lose the rest of your move action, but you don’t fall. You can try again as part of a move action.\n' +
      '- **Fail by 5 or More:** You fall (see “[Falling](content:combat/falling),” page 284) and lose the rest of your move action.\n' +
      '- **Grant Combat Advantage:** While you are climbing, all enemies have combat advantage against you.\n' +
      '- **Uses Movement:** Count the number of squares you climb as part of your move.\n' +
      '- **Taking Damage:** If you take damage while climbing, you must make a Climb check using the DC for the surface you’re climbing. If that damage makes you [bloodied](characteristic:bloodied), increase the DC by 5. If you fail the check, you fall from your current height. If you try to catch hold when you fall, add the damage you take to the DC to catch yourself.\n' +
      '- **Catch Hold:** If you fall while climbing, you can make an Athletics check as a [free action](action-type:free-action) to catch hold of something to stop your fall. The base DC to catch hold of something is the DC of the surface you were climbing plus 5, modified by circumstances. You can make one check to catch hold. If you fail, you can’t try again unless the DM rules otherwise.\n' +
      '- **Climb Speed:** While climbing, creatures that have a climb speed (such as monstrous spiders) use that speed, ignore difficult terrain, do not grant combat advantage because of climbing, and do not make Athletics checks to climb.\n\n' +
      '| Surface | Athletics DC |\n' +
      '| :--- | :--- |\n' +
      '| Ladder | 0 |\n' +
      '| Rope | 10 |\n' +
      '| Uneven surface (cave wall) | 15 |\n' +
      '| Rough surface (brick wall) | 20 |\n' +
      '| Slippery surface | +5 |\n' +
      '| Unusually smooth surface | +5 |',
  },
})

export const AthleticsEscapeFromAGrabSection = Content.defineSection('skills/athletics-escape-from-a-grab', {
  parent: AthleticsSection,
  content: {
    name: 'Escape from a Grab',
    description:
      'Make an [Athletics](characteristic:skill/athletics) check to muscle out of a grab (see “[Escape](content:combat/escape),” page 288). You can also make escape attempts to get away from other immobilizing effects, as directed by your DM.',
  },
})

export const JumpSection = Content.defineSection('skills/jump', {
  parent: AthleticsSection,
  content: {
    name: 'Jump',
    description:
      'Make an [Athletics](characteristic:skill/athletics) check to jump vertically to reach a dangling rope or a high ledge or to jump horizontally to leap across a pit, a patch of difficult terrain, a low wall, or some other obstacle.\n\n' +
      '**High Jump:** Part of a [move action](action-type:move-action).\n\n' +
      '- **Distance Jumped Vertically:** Make an Athletics check and divide your check result by 10 (round down). This is the number of feet you can leap up. The result determines the height that your feet clear with a jump. To determine if you can reach something while leaping, add your character’s height plus one-third rounded down (a 6-foot-tall character would add 8 feet to the final distance, and a 4-foot-tall character would add 5 feet).\n' +
      '- **Running Start:** If you move at least 2 squares before making the jump, divide your check result by 5, not 10.\n' +
      '- **Uses Movement:** Count the number of squares you jump as part of your move. If you run out of movement, you fall. You can end your first move in midair if you double move ([page 284](content:combat/double-move)).\n\n' +
      '_Example:_ Marc, a 6-foot-tall human, attempts a high jump to catch a rope dangling 12 feet overhead. His check result is 26. With a running start, he leaps the distance (26 ÷ 5 = 5 feet, plus his height and one-third for a final reach of 13 feet). If Marc leaps from a standing position, he can’t quite reach the end of the rope (26 ÷ 10 = 2 feet for a final reach of 10 feet).\n\n' +
      '**Long Jump:** Part of a move action.\n\n' +
      '- **Distance Jumped Horizontally:** Make an Athletics check and divide your check result by 10 (don’t round the result). This is the number of squares you can leap across. You land in the square determined by your result. If you end up over a pit or a chasm, you fall and lose the rest of your move action.\n' +
      '- **Distance Cleared Vertically:** The vertical distance you clear is equal to one-quarter of the distance you jumped horizontally. If you could not clear the vertical distance of an obstacle along the way, you hit the obstacle, fall prone, and lose the rest of your move action.\n' +
      '- **Running Start:** If you move at least 2 squares before making the jump, divide your check result by 5, not 10.\n' +
      '- **Uses Movement:** Count the number of squares you jump as part of your move. If you run out of movement, you fall. You can end your first move in midair if you double move ([page 284](content:combat/double-move)).\n\n' +
      '_Example:_ Marc attempts a long jump to clear a 5-foot-high wall of thorns and the 10-foot-wide pit beyond it. His check result is 24. With a running start, he easily jumps the distance (24 ÷ 5 = 4.8 squares or 24 feet) and clears the wall (24 ÷ 4 = 6 feet). If Marc jumps from a standing position, he can’t quite make it across the pit (24 ÷ 10 = 2.4 squares or 12 feet) and doesn’t clear the wall (12 ÷ 4 = 3 feet). He hits the wall of thorns and falls prone before reaching the pit.',
  },
})

export const SwimSection = Content.defineSection('skills/swim', {
  parent: AthleticsSection,
  content: {
    name: 'Swim',
    description:
      'Make an [Athletics](characteristic:skill/athletics) check to swim or to tread water. Different conditions make swimming harder. See the [Endurance](characteristic:skill/endurance) skill for information on swimming or treading water for an hour or more.\n\n' +
      '**Swim or Tread Water:** Part of a [move action](action-type:move-action).\n\n' +
      '- **DC:** See the table.\n' +
      '- **Success:** You swim at one-half your [speed](characteristic:speed), or you stay afloat and tread water.\n' +
      '- **Fail by 4 or Less:** Stay where you are and lose the rest of your move action. You can try again as part of a move action.\n' +
      '- **Fail by 5 or More:** Sink 1 square and risk suffocation by drowning (details are in Chapter 9 of the _Dungeon Master’s Guide_).\n' +
      '- **Uses Movement:** Count the number of squares you swim as part of your move.\n' +
      '- **Swim Speed:** While swimming, creatures that have a swim speed (such as sahuagin) use that speed and do not make Athletics checks to swim.\n\n' +
      '| Water | Athletics DC |\n' +
      '| :--- | :--- |\n' +
      '| Calm | 10 |\n' +
      '| Rough | 15 |\n' +
      '| Stormy | 20 |',
  },
})

export const BluffSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Bluff)

export const DiplomacySection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Diplomacy)

export const DungeoneeringSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Dungeoneering)

export const DungeoneeringKnowledgeSection = Content.defineSection('skills/dungeoneering-knowledge', {
  parent: DungeoneeringSection,
  content: {
    name: 'Dungeoneering Knowledge',
    description:
      'Make a [Dungeoneering](characteristic:skill/dungeoneering) check to remember a useful bit of knowledge about an underground environment or to recognize an underground hazard or clue. See “[Knowledge Checks](content:skills/knowledge-checks),” page 180.\n\n' +
      'Examples of dungeoneering knowledge include determining cardinal directions while underground (common), recognizing a dangerous underground plant (expert), or spotting new construction or noticing a change in depth while exploring an area (expert).',
  },
})

export const DungeoneeringForageSection = Content.defineSection('skills/dungeoneering-forage', {
  parent: DungeoneeringSection,
  content: {
    name: 'Forage',
    description:
      'Make a [Dungeoneering](characteristic:skill/dungeoneering) check to locate and gather enough food and water to last for 24 hours. You can do this only in underground environments that approximate outdoor wilderness—caverns or underground complexes containing pools of water, edible fungus or lichen, small vermin, and the like.\n\n' +
      '**Forage:** 1 hour.\n\n' +
      '- **DC:** DC 15 to find food and water for one person, DC 25 for up to five people. The DM might adjust the DC in different environments (5 lower in a cultivated environment or 5 higher in a barren one).\n' +
      '- **Success:** You find enough food and water for 24 hours.\n' +
      '- **Failure:** You find no food or water. You can forage again but in a different area.',
  },
})

export const DungeoneeringMonsterKnowledgeSection = Content.defineSection('skills/dungeoneering-monster-knowledge', {
  parent: DungeoneeringSection,
  content: {
    name: 'Monster Knowledge',
    description:
      '_Aberrant_\n\n' +
      'Make a [Dungeoneering](characteristic:skill/dungeoneering) check to identify a creature that has the aberrant origin (a creature of the Far Realm). See “[Monster Knowledge Checks](content:skills/monster-knowledge-checks),” page 180.',
  },
})

export const EnduranceSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Endurance)

export const HealSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Heal)

export const FirstAidSection = Content.defineSection('skills/first-aid', {
  parent: HealSection,
  content: {
    name: 'First Aid',
    description:
      'Make a [Heal](characteristic:skill/heal) check to administer first aid.\n\n' +
      '**First Aid:** [Standard action](action-type:standard-action).\n\n' +
      '- **DC:** Varies depending on the task you’re attempting.\n' +
      '- **Use Second Wind:** Make a DC 10 Heal check to allow an adjacent character to use his or her [second wind](ability:common/second-wind) ([page 291](content:combat/second-wind)) without the character having to spend an action. The character doesn’t gain the defense bonuses normally granted by second wind.\n' +
      '- **Stabilize the Dying:** Make a DC 15 Heal check to stabilize an adjacent dying character. If you succeed, the character can stop making death saving throws until he or she takes damage. The character’s current [hit point](characteristic:hit-points) total doesn’t change as a result of being stabilized.\n' +
      '- **Grant a Saving Throw:** Make a DC 15 Heal check. If you succeed, an adjacent ally can immediately make a saving throw, or the ally gets a +2 bonus to a saving throw at the end of his or her next turn.',
  },
})

export const TreatDiseaseSection = Content.defineSection('skills/treat-disease', {
  parent: HealSection,
  content: {
    name: 'Treat Disease',
    description:
      'Make a [Heal](characteristic:skill/heal) check to treat a character suffering from a disease. Chapter 3 of the _Dungeon Master’s Guide_ has more information about disease.\n\n' +
      '**Treat Disease:** Part of the diseased character’s extended rest. You must attend the character periodically throughout the extended rest, and you make your Heal check when the rest ends.\n\n' +
      '- **Replaces Endurance:** Your Heal check result determines the disease’s effects if the result is higher than the diseased character’s [Endurance](characteristic:skill/endurance) check result.',
  },
})

export const HistorySection = Content.linkEntity(SkillDescriptionsSection, Characteristic.History)

export const InsightSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Insight)

export const IntimidateSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Intimidate)

export const NatureSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Nature)

export const NatureForageSection = Content.defineSection('skills/nature-forage', {
  parent: NatureSection,
  content: {
    name: 'Forage',
    description:
      'Make a [Nature](characteristic:skill/nature) check to locate and gather enough food and water to last for 24 hours.\n\n' +
      '**Forage:** 1 hour.\n\n' +
      '- **DC:** DC 15 to find food and water for one person, DC 25 for up to five people. The DM might adjust the DC in different environments (5 lower in a cultivated environment or 5 higher in a barren one).\n' +
      '- **Success:** You find enough food and water for 24 hours.\n' +
      '- **Failure:** You find no food or water. You can forage again but in a different area.',
  },
})

export const HandleAnimalSection = Content.defineSection('skills/handle-animal', {
  parent: NatureSection,
  content: {
    name: 'Handle Animal',
    description:
      'Make a [Nature](characteristic:skill/nature) check to calm down a natural beast, teach a natural beast some tricks, or otherwise handle a natural beast. Handling a natural beast is usually part of a skill challenge that requires a number of successes.',
  },
})

export const NatureKnowledgeSection = Content.defineSection('skills/nature-knowledge', {
  parent: NatureSection,
  content: {
    name: 'Nature Knowledge',
    description:
      'Make a [Nature](characteristic:skill/nature) check to remember a useful bit of knowledge about the natural world—about terrain, climate, weather, plants, and seasons—or to recognize a nature-related clue. See “[Knowledge Checks](content:skills/knowledge-checks),” page 180.\n\n' +
      'Examples of Nature knowledge include determining cardinal directions or finding a path (common), recognizing a dangerous plant or another natural hazard (master), or predicting a coming change in the weather (expert).',
  },
})

export const NatureMonsterKnowledgeSection = Content.defineSection('skills/nature-monster-knowledge', {
  parent: NatureSection,
  content: {
    name: 'Monster Knowledge',
    description:
      '_Natural_\n\n' +
      'Make a [Nature](characteristic:skill/nature) check to identify a creature that has the natural origin (a creature of the natural world). See “[Monster Knowledge Checks](content:skills/monster-knowledge-checks),” page 180.',
  },
})

export const PerceptionSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Perception)

export const ReligionSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Religion)

export const ReligionKnowledgeSection = Content.defineSection('skills/religion-knowledge', {
  parent: ReligionSection,
  content: {
    name: 'Religion Knowledge',
    description:
      'Make a [Religion](characteristic:skill/religion) check to remember a useful bit of religious knowledge or to recognize a religion-related clue. See “[Knowledge Checks](content:skills/knowledge-checks),” page 180.',
  },
})

export const ReligionMonsterKnowledgeSection = Content.defineSection('skills/religion-monster-knowledge', {
  parent: ReligionSection,
  content: {
    name: 'Monster Knowledge',
    description:
      '_Immortal or Undead_\n\n' +
      'Make a [Religion](characteristic:skill/religion) check to identify a creature that has the immortal origin (a creature of the Astral Sea) or the undead keyword. See “[Monster Knowledge Checks](content:skills/monster-knowledge-checks),” page 180.',
  },
})

export const StealthSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Stealth)

export const StreetwiseSection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Streetwise)

export const ThieverySection = Content.linkEntity(SkillDescriptionsSection, Characteristic.Thievery)

export const DisableTrapSection = Content.defineSection('skills/disable-trap', {
  parent: ThieverySection,
  content: {
    name: 'Disable Trap',
    description:
      'Make a [Thievery](characteristic:skill/thievery) check to prevent a trap from triggering. You need to be aware of a trap to try to disable it. Make a [Perception](characteristic:skill/perception) check to find a hidden trap.\n\n' +
      '**Disable Trap:** [Standard action](action-type:standard-action) in combat or part of a skill challenge.\n\n' +
      '- **DC:** See the table. You get a +2 bonus to the check if you use thieves’ tools.\n' +
      '- **Delay Trap:** You get a +5 bonus to the check if you try to delay a trap, rather than disable it.\n' +
      '- **Success:** You disable or delay the trap. Disabling a trap makes it harmless until it resets. Delaying a trap makes the trapped area safe for passage until the end of your next turn.\n' +
      '- **Fail by 4 or Less:** Nothing happens. You can try again as a new action.\n' +
      '- **Fail by 5 or More:** You trigger the trap.\n\n' +
      '| Trap | Thievery DC |\n' +
      '| :--- | :--- |\n' +
      '| Heroic tier | 20 |\n' +
      '| Paragon tier | 30 |\n' +
      '| Epic tier | 35 |',
  },
})

export const OpenLockSection = Content.defineSection('skills/open-lock', {
  parent: ThieverySection,
  content: {
    name: 'Open Lock',
    description:
      'Make a [Thievery](characteristic:skill/thievery) check to pick a lock.\n\n' +
      '**Open Lock:** [Standard action](action-type:standard-action) in combat or part of a skill challenge.\n\n' +
      '- **DC:** See the table. You get a +2 bonus to the check if you use thieves’ tools.\n' +
      '- **Success:** You pick the lock.\n' +
      '- **Failure:** You can try again as a new action.\n\n' +
      '| Lock | Thievery DC |\n' +
      '| :--- | :--- |\n' +
      '| Heroic tier | 20 |\n' +
      '| Paragon tier | 30 |\n' +
      '| Epic tier | 35 |',
  },
})

export const PickPocketSection = Content.defineSection('skills/pick-pocket', {
  parent: ThieverySection,
  content: {
    name: 'Pick Pocket',
    description:
      'Make a [Thievery](characteristic:skill/thievery) check to lift a small object (such as a purse or an amulet) from a creature without that creature being aware of the theft. It must be an object that the creature isn’t holding.\n\n' +
      '**Pick Pocket:** [Standard action](action-type:standard-action).\n\n' +
      '- **DC:** DC 20 + your target’s level. If in combat, you take a –10 penalty to your check.\n' +
      '- **Success:** You lift a small object from the target without the target noticing.\n' +
      '- **Fail by 4 or Less:** You don’t get the object, but the target didn’t notice. You can try again as a new action.\n' +
      '- **Fail by 5 or More:** You don’t get the object, and the target notices your failed attempt.',
  },
})

export const SleightOfHandSection = Content.defineSection('skills/sleight-of-hand', {
  parent: ThieverySection,
  content: {
    name: 'Sleight of Hand',
    description:
      'Make a [Thievery](characteristic:skill/thievery) check to palm an unattended object small enough to fit into your hand (such as a coin or a ring) or to perform an act of legerdemain.\n\n' +
      '**Sleight of Hand:** [Standard action](action-type:standard-action) in combat or part of a skill challenge.\n\n' +
      '- **DC:** Base DC 15.\n' +
      '- **Success:** You palm an unattended, small object or perform an act of legerdemain.\n' +
      '- **Failure:** You can still pick up the object, but onlookers see you pick it up, or they see through your act of legerdemain.',
  },
})

export const SkillsContent: Array<ContentSection> = [
  SkillsSection,
  SkillTrainingSection,
  UsingSkillsSection,
  SkillCheckBonusesSection,
  SkillCheckSection,
  DifficultyClassSection,
  OpposedChecksSection,
  ChecksWithoutRollsSection,
  Take10Section,
  Take10SidebarSection,
  PassiveChecksSection,
  CooperationSection,
  SkillChallengesSection,
  KnowledgeSkillsSection,
  KnowledgeChecksSection,
  MonsterKnowledgeChecksSection,
  SkillDescriptionsSection,
  AcrobaticsSection,
  AcrobaticStuntSection,
  BalanceSection,
  AcrobaticsEscapeFromAGrabSection,
  EscapeFromRestraintsSection,
  ReduceFallingDamageSection,
  ArcanaSection,
  ArcanaKnowledgeSection,
  ArcanaMonsterKnowledgeSection,
  DetectMagicSection,
  AthleticsSection,
  ClimbSection,
  AthleticsEscapeFromAGrabSection,
  JumpSection,
  SwimSection,
  BluffSection,
  DiplomacySection,
  DungeoneeringSection,
  DungeoneeringKnowledgeSection,
  DungeoneeringForageSection,
  DungeoneeringMonsterKnowledgeSection,
  EnduranceSection,
  HealSection,
  FirstAidSection,
  TreatDiseaseSection,
  HistorySection,
  InsightSection,
  IntimidateSection,
  NatureSection,
  NatureForageSection,
  HandleAnimalSection,
  NatureKnowledgeSection,
  NatureMonsterKnowledgeSection,
  PerceptionSection,
  ReligionSection,
  ReligionKnowledgeSection,
  ReligionMonsterKnowledgeSection,
  StealthSection,
  StreetwiseSection,
  ThieverySection,
  DisableTrapSection,
  OpenLockSection,
  PickPocketSection,
  SleightOfHandSection,
]
