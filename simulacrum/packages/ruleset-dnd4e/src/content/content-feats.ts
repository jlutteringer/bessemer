import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import * as Feats from '@simulacrum/ruleset-dnd4e/feat'
import * as DivinityFeats from '@simulacrum/ruleset-dnd4e/divinity-feat'
import * as Races from '@simulacrum/ruleset-dnd4e/race'
import * as ClassFighter from '@simulacrum/ruleset-dnd4e/class/class-fighter'
import * as ClassPaladin from '@simulacrum/ruleset-dnd4e/class/class-paladin'
import * as ClassRanger from '@simulacrum/ruleset-dnd4e/class/class-ranger'
import * as ClassRogue from '@simulacrum/ruleset-dnd4e/class/class-rogue'
import * as ClassWarlock from '@simulacrum/ruleset-dnd4e/class/class-warlock'
import * as ClassWarlord from '@simulacrum/ruleset-dnd4e/class/class-warlord'
import * as ClassWizard from '@simulacrum/ruleset-dnd4e/class/class-wizard'

export const FeatsSection = Content.defineSection('feats', {
  content: {
    name: 'Feats',
    description:
      'As you advance in level, you gain a number of benefits that improve your capabilities. These benefits are called feats. Typically, a feat doesn’t give you a new ability, but instead improves something you’re already able to do. A feat might provide a bonus to a skill check, grant a bonus to one of your defense scores, or allow you to ignore a particular restriction or penalty in certain situations. Some feats also allow you to use skills in different ways, alter the effects of your powers, improve your racial traits, or even grant you capabilities from another class.\n\nThis chapter discusses all aspects of feats:\n\n- **[Choosing Feats](content:feats/choosing-feats):** How you gain feats and how they work.\n- **[Feat Descriptions](content:feats/feat-descriptions):** Full explanation of each feat and what it does.\n- **[Multiclass Feats](content:feats/multiclass-feats):** Discussion of the multiclassing rules and the feats involved.',
  },
})

export const ChoosingFeatsSection = Content.defineSection('feats/choosing-feats', {
  parent: FeatsSection,
  content: {
    name: 'Choosing Feats',
    description:
      'When you create a 1st-level character, you select one feat. (If you’re [human](trait:race/human), you have an additional feat at 1st level, so you start with two feats.) You gain an additional feat at every even-numbered level and at 11th and 21st levels. When you choose a feat, you must meet the feat’s prerequisites.\n\nGenerally, you can’t take the same feat more than once, and most of the time you wouldn’t want to. A few feats, however, specify that you can take the same feat multiple times. That means you can apply the bonus from the feat to more than one situation—multiple weapon groups, powers you know, and so on.',
  },
})

export const HowFeatsWorkSection = Content.defineSection('feats/how-feats-work', {
  parent: ChoosingFeatsSection,
  content: {
    name: 'How Feats Work',
    description:
      'Most feats give you small, static bonuses to one of the numbers on your character sheet. When picking feats, there’s one important rule to remember about these bonuses: Bonuses of the same type don’t add together (or stack).\n\nSome of these bonuses apply in any situation. These are defined as feat bonuses: Great Fortitude gives you a +2 feat bonus to your [Fortitude](characteristic:fortitude) defense, and that bonus is always in effect. If you have two feat bonuses that apply to the same number, only the higher bonus applies—the bonuses don’t add together. So if you have both [Alertness](trait:feat/alertness) (which gives you a +2 feat bonus to [Perception](characteristic:skill/perception) checks) and [Dragonborn Senses](content:feats/dragonborn-senses) (which gives you a +1 feat bonus to Perception checks), you have only a +2 bonus—the bonuses don’t add up to +3.\n\nA bonus that’s untyped (such as one expressed as simply a “+2 bonus”) usually applies only in certain situations. These situational bonuses reward particular combat tactics. For example, [Combat Reflexes](trait:feat/combat-reflexes) gives you a +1 bonus to attack rolls with opportunity attacks. Unlike feat bonuses, however, untyped bonuses stack with themselves. If you have both Defensive Advantage (which gives you a +2 bonus to your AC against a foe when you have combat advantage) and [Defensive Mobility](trait:feat/defensive-mobility) (a feat that gives you a +2 bonus to your [AC](characteristic:armor-class) against opportunity attacks), you have a +4 bonus as long as both circumstances apply.\n\nBonuses of different types stack as well. If you have Fleet-Footed and [Fast Runner](content:feats/fast-runner), you have a +1 feat bonus to your [speed](characteristic:speed) all the time (from Fleet-Footed), and an additional +2 bonus when you charge or run (from Fast Runner). So your speed when you charge is 3 higher than it would be if you had neither feat.\n\nFor more details, see “[Bonuses and Penalties](content:combat/bonuses-and-penalties),” page 275.\n\n**Feats and Keywords:** When a feat provides a benefit related to using a power that has a keyword, that benefit applies when you use a power of a magic item, as well as when you use a power granted by your class, your race, or another feat.',
  },
})

export const TypesOfFeatsSection = Content.defineSection('feats/types-of-feats', {
  parent: ChoosingFeatsSection,
  content: { name: 'Types of Feats', description: 'A few types of feats have special rules that apply to all feats of the same category.' },
})

export const ClassFeatsSection = Content.defineSection('feats/class-feats', {
  parent: TypesOfFeatsSection,
  content: {
    name: 'Class Feats',
    description:
      'Class feats help characters of a specific class improve their class features and powers, or specialize their capabilities along the lines of their builds. A class feat is denoted by the name of a class in brackets after the name of the feat: [Expanded Spellbook](trait:feat/expanded-spellbook) [Wizard] is a feat that only [wizards](trait:wizard) can take.\n\nClass feats are also available to characters who have taken a multiclass feat in the class the feat is associated with. For example, if you’re a [fighter](trait:fighter) who has the [Sneak of Shadows](content:feats/sneak-of-shadows) feat, you can take [Press the Advantage](trait:feat/press-the-advantage), which is a [rogue](trait:rogue) feat.',
  },
})

export const DivinityFeatsSection = Content.defineSection('feats/divinity-feats', {
  parent: TypesOfFeatsSection,
  content: {
    name: 'Divinity Feats',
    description:
      'Divinity feats grant characters who have the Channel Divinity class feature ([clerics](trait:cleric) and [paladins](trait:paladin)) the use of special powers from their deity. The power associated with each of these feats follows the feat description. A divinity feat is denoted by “Divinity” in brackets after the name of the feat.',
  },
})

export const TypesOfFeatsMulticlassFeatsSection = Content.defineSection('feats/types-of-feats-multiclass-feats', {
  parent: TypesOfFeatsSection,
  content: {
    name: 'Multiclass Feats',
    description:
      'Multiclass feats are a special category of feats. The complete rules for multiclassing and the associated feats are found on [page 208](content:feats/multiclass-feats). Most multiclass feats are denoted by a bracketed phrase that includes “Multiclass” followed by the name of a class: [Student of Battle](content:feats/student-of-battle) [Multiclass Warlord], for example, is the feat that lets you gain a feature of the [warlord](trait:warlord) class.\n\nThree of the multiclass feats in this book are of a different sort—they allow you to exchange a class power you have from your primary class for a power of the same type from the class you have chosen to multiclass in. These feats are denoted by a bracketed phrase that includes “Multiclass” followed by the type of power (Encounter, Utility, or Daily) that can be exchanged.',
  },
})

export const RacialFeatsSection = Content.defineSection('feats/racial-feats', {
  parent: TypesOfFeatsSection,
  content: {
    name: 'Racial Feats',
    description:
      'Racial feats are available only to characters of a specific race. They build on the innate talents of each race and help you create a character who feels like an ideal representative of your race. A racial feat is denoted by the name of a race in brackets after the name of the feat: [Lost in the Crowd](content:feats/lost-in-the-crowd) [Halfling] is a feat that only halflings can take.',
  },
})

export const FeatDescriptionsSection = Content.defineSection('feats/feat-descriptions', {
  parent: FeatsSection,
  content: {
    name: 'Feat Descriptions',
    description:
      'The feats in this chapter are presented in the format described below.\n\n> **Linguist**\n>\n> **Prerequisite:** Int 13\n>\n> **Benefit:** Choose three languages. You can now speak, read, and write those languages fluently.\n>\n> **Special:** You can take this feat more than once. Each time you select this feat, choose three new languages to learn.\n\nIn the header that gives the name of the feat, the type of feat (if appropriate) appears in brackets after the name.',
  },
})

export const PrerequisitesSection = Content.defineSection('feats/prerequisites', {
  parent: FeatDescriptionsSection,
  content: {
    name: 'Prerequisite(s)',
    description:
      'You must meet these additional requirements to take the feat. If you ever lose a prerequisite for a feat (for example, if you use the retraining system to replace training in a prerequisite skill with training in a different skill), you can’t use that feat thereafter. If this entry is absent, the feat has no prerequisites.',
  },
})

export const BenefitSection = Content.defineSection('feats/benefit', {
  parent: FeatDescriptionsSection,
  content: {
    name: 'Benefit',
    description: 'This section (which might be more than one paragraph) describes the advantage you gain when you take the feat.',
  },
})

export const SpecialSection = Content.defineSection('feats/special', {
  parent: FeatDescriptionsSection,
  content: {
    name: 'Special',
    description:
      'Occasionally, special rules apply to a feat. This entry specifies whether you can take the same feat multiple times and any provisions that apply if you do so. It also can indicate any other requirement for using the feat.',
  },
})

export const HeroicTierFeatsSection = Content.defineSection('feats/heroic-tier-feats', {
  parent: FeatDescriptionsSection,
  content: {
    name: 'Heroic Tier Feats',
    description:
      'Any feat in the following section is available to a character of any level who meets the prerequisites. Heroic tier feats are the only feats you can take if you are 10th level or lower.\n\n| Name | Prerequisites | Benefit |\n| :--- | :--- | :--- |\n| Action Surge | Human | +3 to attacks when you spend an action point |\n| Agile Hunter | Dex 15, ranger, Hunter’s Quarry class feature | Shift as a free action after scoring a critical hit |\n| Alertness | — | No combat advantage when surprised, +2 to Perception |\n| Armor of Bahamut | Channel Divinity class feature, must worship Bahamut | Use Channel Divinity to invoke _armor of Bahamut_ |\n| Armor Proficiency (Chainmail) | Str 13, Con 13, training with leather or hide armor | Training with chainmail armor |\n| Armor Proficiency (Leather) | — | Training with leather armor |\n| Armor Proficiency (Hide) | Str 13, Con 13, training with leather armor | Training with hide armor |\n| Armor Proficiency (Plate) | Str 15, Con 15, training with scale armor | Training with plate armor |\n| Armor Proficiency (Scale) | Str 13, Con 13, training with chainmail | Training with scale armor |\n| Astral Fire | Dex 13, Cha 13 | +1 damage with fire or radiant power |\n| Avandra’s Rescue | Channel Divinity class feature, must worship Avandra | Use Channel Divinity to invoke _Avandra’s rescue_ |\n| Backstabber | Rogue, Sneak Attack class feature | Sneak Attack dice increase to d8s |\n| Blade Opportunist | Str 13, Dex 13 | +2 to opportunity attacks with heavy blade or light blade |\n| Burning Blizzard | Int 13, Wis 13 | +1 damage with acid or cold power |\n| Combat Reflexes | Dex 13 | +1 to opportunity attacks |\n| Corellon’s Grace | Channel Divinity class feature, must worship Corellon | Use Channel Divinity to invoke Corellon’s grace |\n| Dark Fury | Con 13, Wis 13 | +1 damage with necrotic or psychic power |\n| Defensive Mobility | — | +2 to AC against opportunity attacks |\n| Distracting Shield | Wis 15, fighter, Combat Challenge class feature | Target hit by opportunity attack takes –2 to attack rolls |\n| Dodge Giants | Dwarf | +1 to AC and Reflex against attacks of Large or larger foes |\n| Dragonborn Frenzy | Dragonborn | +2 damage when bloodied |\n| Dragonborn Senses | Dragonborn | Low-light vision, +1 to Perception |\n| Durable | — | Increase number of healing surges by 2 |\n| Dwarven Weapon Training | Dwarf | +2 damage and proficiency with axes and hammers |\n| Eladrin Soldier | Eladrin | +2 damage and proficiency with longswords and spears |\n| Elven Precision | Elf | +2 to reroll with _elven accuracy_ |\n| Enlarged Dragon Breath | Dragonborn, _dragon breath_ racial power | Dragon breath becomes blast 5 |\n| Escape Artist | Trained in Acrobatics | Escape a grab as minor action, +2 to Acrobatics |\n| Expanded Spellbook | Wis 13, wizard | Add additional daily spell to spellbook |\n| Far Shot | Dex 13 | Increase projectile weapon range by 5 squares |\n| Far Throw | Str 13 | Increase thrown weapon range by 2 squares |\n| Fast Runner | Con 13 | +2 to speed when you charge or run |\n| Ferocious Rebuke | Tiefling, _infernal wrath_ racial power | Push 1 square with _infernal wrath_ |\n| Group Insight | Half-Elf | Grant allies +1 to Insight and initiative |\n| Halfling Agility | Halfling, _second chance_ racial power | Attacker takes a –2 penalty with _second chance_ reroll |\n| Harmony of Erathis | Channel Divinity class feature, must worship Erathis | Use Channel Divinity to invoke _harmony of Erathis_ |\n| Healing Hands | Paladin, _lay on hands_ power | Add Cha modifier to damage healed with _lay on hands_ |\n| Hellfire Blood | Tiefling | +1 attack and damage with fire and fear powers |\n| Human Perseverance | Human | +1 to saving throws |\n| Improved Dark One’s Blessing | Con 15, warlock, infernal pact | Pact boon grants 3 additional temporary hit points |\n| Improved Fate of the Void | Con 13 or Cha 13, warlock, star pact | Pact boon grants additional +1 bonus to die roll |\n| Improved Initiative | — | +4 to initiative checks |\n| Improved Misty Step | Int 13, warlock, fey pact | Pact boon grants additional 2 squares of teleport |\n| Inspired Recovery | Warlord, Inspiring Presence class feature | Grant ally saving throw with Cha modifier bonus |\n| Ioun’s Poise | Channel Divinity class feature, must worship Ioun | Use Channel Divinity to invoke _Ioun’s poise_ |\n| Jack of All Trades | Int 13 | +2 to untrained skill checks |\n| Kord’s Favor | Channel Divinity class feature, must worship Kord | Use Channel Divinity to invoke _Kord’s favor_ |\n| Lethal Hunter | Ranger, Hunter’s Quarry class feature | Hunter’s Quarry damage dice increase to d8s |\n| Light Step | Elf | Add to overland speed of group, +1 to Acrobatics and Stealth |\n| Linguist | Int 13 | Learn three new languages |\n| Long Jumper | Trained in Athletics | Make standing jumps as if from a running start, +1 to Athletics |\n| Lost in the Crowd | Halfling | +2 to AC when adjacent to at least two larger enemies |\n| Melora’s Tide | Channel Divinity class feature, must worship Melora | Use Channel Divinity to invoke _Melora’s tide_ |\n| Moradin’s Resolve | Channel Divinity class feature, must worship Moradin | Use Channel Divinity to invoke _Moradin’s resolve_ |\n| Mounted Combat | — | Gain access to the special abilities of your mount |\n| Nimble Blade | Dex 15 | +1 to attacks with light blade and combat advantage |\n| Pelor’s Radiance | Channel Divinity class feature, must worship Pelor | Use Channel Divinity to invoke _Pelor’s radiance_ |\n| Potent Challenge | Con 15, fighter, Combat Challenge class feature | Add Con modifier damage to target hit with opportunity attack |\n| Power Attack | Str 15 | +2 damage for –2 to attack |\n| Powerful Charge | Str 13 | +2 damage, +2 to bull rush on a charge |\n| Precise Hunter | Wis 15, ranger, Hunter’s Quarry class feature | Allies gain +1 attack against target hit by critical hit |\n| Press the Advantage | Cha 15, rogue | Retain combat advantage with a critical hit |\n| Quick Draw | Dex 13 | Draw a weapon with attack action, +2 to initiative |\n| Raging Storm | Con 13, Dex 13 | +1 damage with lightning or thunder power |\n| Raven Queen’s Blessing | Channel Divinity class feature, must worship the Raven Queen | Use Channel Divinity to invoke _Raven Queen’s blessing_ |\n| Ritual Caster | Trained in Arcana or Religion | Master and perform rituals |\n| Sehanine’s Reversal | Channel Divinity class feature, must worship Sehanine | Use Channel Divinity to invoke _Sehanine’s reversal_ |\n| Shield Proficiency (Heavy) | Str 15, Shield Proficiency (Light) | Proficiency with heavy shields |\n| Shield Proficiency (Light) | Str 13 | Proficiency with light shields |\n| Shield Push | Fighter, Combat Challenge class feature | Push 1 square to target hit by Combat Challenge attack |\n| Skill Focus | Training in chosen skill | +3 to checks with chosen skill |\n| Skill Training | — | Gain training in one skill |\n| Sure Climber | Trained in Athletics | Climb at normal speed on any surface, +1 to Athletics |\n| Surprise Knockdown | Str 15, rogue | Knock target prone with critical hit |\n| Tactical Assault | Warlord, Tactical Presence class feature | Ally gains bonus to damage equal to your Int modifier |\n| Toughness | — | Gain 5 additional hit points per tier |\n| Two-Weapon Defense | Dex 13, Two-Weapon Fighting | +1 to AC and Reflex while holding a weapon in each hand |\n| Two-Weapon Fighting | Dex 13 | +1 damage while holding a melee weapon in each hand |\n| Weapon Focus | — | +1 damage with chosen weapon group |\n| Weapon Proficiency | — | Gain proficiency with the weapon of your choice |\n| Wintertouched | — | Gain combat advantage against foe vulnerable to cold |',
  },
})

export const LinkActionSurgeSection = Content.linkEntity(HeroicTierFeatsSection, Races.ActionSurge)

export const LinkAgileHunterSection = Content.linkEntity(HeroicTierFeatsSection, ClassRanger.AgileHunter)

export const LinkAlertnessSection = Content.linkEntity(HeroicTierFeatsSection, Feats.Alertness)

export const LinkArmorOfBahamutSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.ArmorOfBahamut)

export const LinkArmorOfBahamutPowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.ArmorOfBahamutPower)

export const LinkArmorProficiencyChainmailSection = Content.linkEntity(HeroicTierFeatsSection, Feats.ArmorProficiencyChainmail)

export const LinkArmorProficiencyHideSection = Content.linkEntity(HeroicTierFeatsSection, Feats.ArmorProficiencyHide)

export const LinkArmorProficiencyLeatherSection = Content.linkEntity(HeroicTierFeatsSection, Feats.ArmorProficiencyLeather)

export const LinkArmorProficiencyPlateSection = Content.linkEntity(HeroicTierFeatsSection, Feats.ArmorProficiencyPlate)

export const LinkArmorProficiencyScaleSection = Content.linkEntity(HeroicTierFeatsSection, Feats.ArmorProficiencyScale)

export const AstralFireSection = Content.defineSection('feats/astral-fire', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Astral Fire',
    description:
      '**Prerequisites:** [Dex](characteristic:dexterity) 13, [Cha](characteristic:charisma) 13\n\n**Benefit:** You gain a +1 feat bonus to damage rolls when you use a power that has the fire or radiant keyword.\n\nAt 11th level, this bonus increases to +2. At 21st level, it increases to +3.',
  },
})

export const LinkAvandrasRescueSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.AvandrasRescue)

export const LinkAvandrasRescuePowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.AvandrasRescuePower)

export const LinkBackstabberSection = Content.linkEntity(HeroicTierFeatsSection, ClassRogue.Backstabber)

export const BladeOpportunistSection = Content.defineSection('feats/blade-opportunist', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Blade Opportunist',
    description:
      '**Prerequisites:** [Str](characteristic:strength) 13, [Dex](characteristic:dexterity) 13\n\n**Benefit:** You gain a +2 bonus to opportunity attack rolls with a heavy blade or a light blade.',
  },
})

export const LinkBurningBlizzardSection = Content.linkEntity(HeroicTierFeatsSection, Feats.BurningBlizzard)

export const LinkCombatReflexesSection = Content.linkEntity(HeroicTierFeatsSection, Feats.CombatReflexes)

export const LinkCorellonsGraceSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.CorellonsGrace)

export const LinkCorellonsGracePowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.CorellonsGracePower)

export const DarkFurySection = Content.defineSection('feats/dark-fury', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Dark Fury',
    description:
      '**Prerequisites:** [Con](characteristic:constitution) 13, [Wis](characteristic:wisdom) 13\n\n**Benefit:** You gain a +1 feat bonus to damage rolls when you use a power that has the necrotic or psychic keyword.\n\nAt 11th level, this bonus increases to +2. At 21st level, it increases to +3.',
  },
})

export const LinkDefensiveMobilitySection = Content.linkEntity(HeroicTierFeatsSection, Feats.DefensiveMobility)

export const LinkDistractingShieldSection = Content.linkEntity(HeroicTierFeatsSection, ClassFighter.DistractingShield)

export const LinkDodgeGiantsSection = Content.linkEntity(HeroicTierFeatsSection, Races.DodgeGiants)

export const DragonbornFrenzySection = Content.defineSection('feats/dragonborn-frenzy', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Dragonborn Frenzy [Dragonborn]',
    description:
      '**Prerequisite:** Dragonborn\n\n**Benefit:** While you are [bloodied](characteristic:bloodied), you gain a +2 bonus to damage rolls.',
  },
})

export const DragonbornSensesSection = Content.defineSection('feats/dragonborn-senses', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Dragonborn Senses [Dragonborn]',
    description:
      '**Prerequisite:** Dragonborn\n\n**Benefit:** You gain low-light vision.\n\nYou gain a +1 feat bonus to [Perception](characteristic:skill/perception) checks.',
  },
})

export const LinkDurableSection = Content.linkEntity(HeroicTierFeatsSection, Feats.Durable)

export const LinkDwarvenWeaponTrainingSection = Content.linkEntity(HeroicTierFeatsSection, Races.DwarvenWeaponTraining)

export const EladrinSoldierSection = Content.defineSection('feats/eladrin-soldier', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Eladrin Soldier [Eladrin]',
    description:
      '**Prerequisite:** Eladrin\n\n**Benefit:** You gain proficiency with all spears and a +2 feat bonus to damage rolls with longswords and all spears.',
  },
})

export const ElvenPrecisionSection = Content.defineSection('feats/elven-precision', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Elven Precision [Elf]',
    description:
      '**Prerequisites:** Elf, _elven accuracy_ racial power\n\n**Benefit:** When you use the _elven accuracy_ power, you gain a +2 bonus to the new attack roll.',
  },
})

export const EnlargedDragonBreathSection = Content.defineSection('feats/enlarged-dragon-breath', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Enlarged Dragon Breath [Dragonborn]',
    description:
      '**Prerequisites:** Dragonborn, _dragon breath_ racial power\n\n**Benefit:** When you use your _dragon breath_ power, you can choose to make it blast 5 instead of blast 3.',
  },
})

export const EscapeArtistSection = Content.defineSection('feats/escape-artist', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Escape Artist',
    description:
      '**Prerequisite:** Trained in [Acrobatics](characteristic:skill/acrobatics)\n\n**Benefit:** You can attempt to escape a grab as a [minor action](action-type:minor-action), instead of as a [move action](action-type:move-action).\n\nYou gain a +2 feat bonus to Acrobatics checks.',
  },
})

export const LinkExpandedSpellbookSection = Content.linkEntity(HeroicTierFeatsSection, ClassWizard.ExpandedSpellbook)

export const FarShotSection = Content.defineSection('feats/far-shot', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Far Shot',
    description:
      '**Prerequisite:** [Dex](characteristic:dexterity) 13\n\n**Benefit:** When you use a projectile weapon such as a bow or a crossbow, increase both the normal range and the long range by 5 squares.',
  },
})

export const FarThrowSection = Content.defineSection('feats/far-throw', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Far Throw',
    description:
      '**Prerequisite:** [Str](characteristic:strength) 13\n\n**Benefit:** When you use a thrown weapon such as a dagger or a javelin, increase both the normal range and the long range by 2 squares.',
  },
})

export const FastRunnerSection = Content.defineSection('feats/fast-runner', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Fast Runner',
    description:
      '**Prerequisite:** [Con](characteristic:constitution) 13\n\n**Benefit:** You gain a +2 bonus to [speed](characteristic:speed) when you charge or run.',
  },
})

export const FerociousRebukeSection = Content.defineSection('feats/ferocious-rebuke', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Ferocious Rebuke [Tiefling]',
    description:
      '**Prerequisites:** Tiefling, _infernal wrath_ racial power\n\n**Benefit:** When you use the _infernal wrath_ power and hit with an attack, you can push the target 1 square in addition to any damage you deal.',
  },
})

export const GroupInsightSection = Content.defineSection('feats/group-insight', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Group Insight [Half-Elf]',
    description:
      '**Prerequisite:** Half-elf\n\n**Benefit:** You grant allies within 10 squares of you a +1 racial bonus to [Insight](characteristic:skill/insight) checks and [initiative](characteristic:initiative) checks.',
  },
})

export const HalflingAgilitySection = Content.defineSection('feats/halfling-agility', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Halfling Agility [Halfling]',
    description:
      '**Prerequisites:** Halfling, _second chance_ racial power\n\n**Benefit:** When you use your halfling _second chance_ ability, the attacker takes a –2 penalty to the new attack roll.',
  },
})

export const LinkHarmonyOfErathisSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.HarmonyOfErathis)

export const LinkHarmonyOfErathisPowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.HarmonyOfErathisPower)

export const LinkHealingHandsSection = Content.linkEntity(HeroicTierFeatsSection, ClassPaladin.HealingHands)

export const HellfireBloodSection = Content.defineSection('feats/hellfire-blood', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Hellfire Blood [Tiefling]',
    description:
      '**Prerequisite:** Tiefling\n\n**Benefit:** You gain a +1 feat bonus to attack rolls and damage rolls when you use a power that has the fire or fear keyword.',
  },
})

export const LinkHumanPerseveranceSection = Content.linkEntity(HeroicTierFeatsSection, Races.HumanPerseverance)

export const LinkImprovedDarkOnesBlessingSection = Content.linkEntity(HeroicTierFeatsSection, ClassWarlock.ImprovedDarkOnesBlessing)

export const LinkImprovedFateOfTheVoidSection = Content.linkEntity(HeroicTierFeatsSection, ClassWarlock.ImprovedFateOfTheVoid)

export const LinkImprovedInitiativeSection = Content.linkEntity(HeroicTierFeatsSection, Feats.ImprovedInitiative)

export const LinkImprovedMistyStepSection = Content.linkEntity(HeroicTierFeatsSection, ClassWarlock.ImprovedMistyStep)

export const LinkInspiredRecoverySection = Content.linkEntity(HeroicTierFeatsSection, ClassWarlord.InspiredRecovery)

export const LinkIounsPoiseSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.IounsPoise)

export const LinkIounsPoisePowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.IounsPoisePower)

export const LinkJackOfAllTradesSection = Content.linkEntity(HeroicTierFeatsSection, Feats.JackOfAllTrades)

export const LinkKordsFavorSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.KordsFavor)

export const LinkKordsFavorPowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.KordsFavorPower)

export const LinkLethalHunterSection = Content.linkEntity(HeroicTierFeatsSection, ClassRanger.LethalHunter)

export const LightStepSection = Content.defineSection('feats/light-step', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Light Step [Elf]',
    description:
      '**Prerequisite:** Elf\n\n**Benefit:** For the purpose of hourly or daily travel rates, add 1 to your overland speed and the speed of all allies in your traveling group.\n\nAdd 5 to the DC required to find or follow your tracks. If traveling with allies, you can share this benefit with up to five other characters.\n\nYou gain a +1 feat bonus to [Acrobatics](characteristic:skill/acrobatics) checks and [Stealth](characteristic:skill/stealth) checks.',
  },
})

export const LinkLinguistSection = Content.linkEntity(HeroicTierFeatsSection, Feats.Linguist)

export const LongJumperSection = Content.defineSection('feats/long-jumper', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Long Jumper',
    description:
      '**Prerequisite:** Trained in [Athletics](characteristic:skill/athletics)\n\n**Benefit:** You can make all long jumps as if you had a running start.\n\nYou also gain a +1 feat bonus to Athletics checks.',
  },
})

export const LostInTheCrowdSection = Content.defineSection('feats/lost-in-the-crowd', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Lost in the Crowd [Halfling]',
    description:
      '**Prerequisite:** Halfling\n\n**Benefit:** You gain a +2 bonus to [AC](characteristic:armor-class) when you are adjacent to at least two enemies larger than you.',
  },
})

export const LinkMelorasTideSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.MelorasTide)

export const LinkMelorasTidePowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.MelorasTidePower)

export const LinkMoradinsResolveSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.MoradinsResolve)

export const LinkMoradinsResolvePowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.MoradinsResolvePower)

export const MountedCombatSection = Content.defineSection('feats/mounted-combat', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Mounted Combat',
    description:
      '**Benefit:** When you ride a creature, you gain access to any special mount abilities it confers to its rider. Not every creature has these abilities. The _Dungeon Master’s Guide_ has more information on mounts and mounted combat.\n\nWhile you are riding a creature, the creature can make any [Athletics](characteristic:skill/athletics), [Acrobatics](characteristic:skill/acrobatics), [Endurance](characteristic:skill/endurance), or [Stealth](characteristic:skill/stealth) checks using your base skill check bonus rather than its own if yours is higher.',
  },
})

export const NimbleBladeSection = Content.defineSection('feats/nimble-blade', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Nimble Blade',
    description:
      '**Prerequisite:** [Dex](characteristic:dexterity) 15\n\n**Benefit:** When you attack with a light blade and you have combat advantage, you gain a +1 bonus to attack rolls.',
  },
})

export const LinkPelorsRadianceSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.PelorsRadiance)

export const LinkPelorsRadiancePowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.PelorsRadiancePower)

export const LinkPotentChallengeSection = Content.linkEntity(HeroicTierFeatsSection, ClassFighter.PotentChallenge)

export const LinkPowerAttackSection = Content.linkEntity(HeroicTierFeatsSection, Feats.PowerAttack)

export const PowerfulChargeSection = Content.defineSection('feats/powerful-charge', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Powerful Charge',
    description:
      '**Prerequisite:** [Str](characteristic:strength) 13\n\n**Benefit:** When you charge, you gain a +2 bonus to damage and a +2 bonus to bull rush attempts.',
  },
})

export const PreciseHunterSection = Content.defineSection('feats/precise-hunter', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Precise Hunter [Ranger]',
    description:
      '**Prerequisites:** [Wis](characteristic:wisdom) 15, [ranger](trait:ranger), [Hunter’s Quarry](trait:ranger/hunters-quarry) class feature\n\n**Benefit:** When you score a critical hit against the target of your Hunter’s Quarry with a ranged attack, your allies gain a +1 bonus to attack rolls against that target until the start of your next turn.',
  },
})

export const LinkPressTheAdvantageSection = Content.linkEntity(HeroicTierFeatsSection, ClassRogue.PressTheAdvantage)

export const QuickDrawSection = Content.defineSection('feats/quick-draw', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Quick Draw',
    description:
      '**Prerequisite:** [Dex](characteristic:dexterity) 13\n\n**Benefit:** You can draw a weapon (or an object stored in a belt pouch, bandolier, or similar container, such as a potion) as part of the same action used to attack with the weapon or use the object.\n\nYou also gain a +2 feat bonus to [initiative](characteristic:initiative) checks.',
  },
})

export const RagingStormSection = Content.defineSection('feats/raging-storm', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Raging Storm',
    description:
      '**Prerequisites:** [Con](characteristic:constitution) 13, [Dex](characteristic:dexterity) 13\n\n**Benefit:** You gain a +1 feat bonus to damage rolls when you use a power that has the lightning or thunder keyword.\n\nAt 11th level, this bonus increases to +2. At 21st level, it increases to +3.',
  },
})

export const LinkRavenQueensBlessingSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.RavenQueensBlessing)

export const LinkRavenQueensBlessingPowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.RavenQueensBlessingPower)

export const LinkRitualCasterSection = Content.linkEntity(HeroicTierFeatsSection, Feats.RitualCaster)

export const LinkSehaninesReversalSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.SehaninesReversal)

export const LinkSehaninesReversalPowerSection = Content.linkEntity(HeroicTierFeatsSection, DivinityFeats.SehaninesReversalPower)

export const LinkShieldProficiencyHeavySection = Content.linkEntity(HeroicTierFeatsSection, Feats.ShieldProficiencyHeavy)

export const LinkShieldProficiencyLightSection = Content.linkEntity(HeroicTierFeatsSection, Feats.ShieldProficiencyLight)

export const LinkShieldPushSection = Content.linkEntity(HeroicTierFeatsSection, ClassFighter.ShieldPush)

export const LinkSkillFocusSection = Content.linkEntity(HeroicTierFeatsSection, Feats.SkillFocus)

export const LinkSkillTrainingSection = Content.linkEntity(HeroicTierFeatsSection, Feats.SkillTraining)

export const SureClimberSection = Content.defineSection('feats/sure-climber', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Sure Climber',
    description:
      '**Prerequisite:** Trained in [Athletics](characteristic:skill/athletics)\n\n**Benefit:** A successful Athletics check allows you to climb at your normal speed, rather than half speed.\n\nYou also gain a +1 feat bonus to Athletics checks.',
  },
})

export const LinkSurpriseKnockdownSection = Content.linkEntity(HeroicTierFeatsSection, ClassRogue.SurpriseKnockdown)

export const LinkTacticalAssaultSection = Content.linkEntity(HeroicTierFeatsSection, ClassWarlord.TacticalAssault)

export const LinkToughnessSection = Content.linkEntity(HeroicTierFeatsSection, Feats.Toughness)

export const TwoWeaponDefenseSection = Content.defineSection('feats/two-weapon-defense', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Two-Weapon Defense',
    description:
      '**Prerequisites:** [Dex](characteristic:dexterity) 13, [Two-Weapon Fighting](content:feats/two-weapon-fighting)\n\n**Benefit:** While holding a melee weapon in each hand, you gain a +1 shield bonus to [AC](characteristic:armor-class) and [Reflex](characteristic:reflex).',
  },
})

export const TwoWeaponFightingSection = Content.defineSection('feats/two-weapon-fighting', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Two-Weapon Fighting',
    description:
      '**Prerequisite:** [Dex](characteristic:dexterity) 13\n\n**Benefit:** While holding a melee weapon in each hand, you gain a +1 bonus to damage rolls with your main weapon.',
  },
})

export const LinkWeaponFocusSection = Content.linkEntity(HeroicTierFeatsSection, Feats.WeaponFocus)

export const LinkWeaponProficiencySection = Content.linkEntity(HeroicTierFeatsSection, Feats.WeaponProficiency)

export const WintertouchedSection = Content.defineSection('feats/wintertouched', {
  parent: HeroicTierFeatsSection,
  content: {
    name: 'Wintertouched',
    description:
      '**Benefit:** When attacking a creature that is vulnerable to cold, you gain combat advantage when you use a power that has the cold keyword.',
  },
})

export const MulticlassFeatsSection = Content.defineSection('feats/multiclass-feats', {
  parent: FeatsSection,
  content: {
    name: 'Multiclass Feats',
    description:
      'Multiclass feats allow you to dabble in the class features and powers of another class. You might be a fighter who dips his toe into wizardry, or a warlock who wants a smattering of rogue abilities. Each class has a class-specific multiclass feat that gives you access to features from that class.\n\n| Name | Prerequisites | Benefit |\n| :--- | :--- | :--- |\n| Initiate of the Faith | Wis 13 | Cleric: Religion skill, _healing word_ 1/day |\n| Student of the Sword | Str 13 | Fighter: skill training, +1 to attack and mark 1/encounter |\n| Soldier of the Faith | Str 13, Cha 13 | Paladin: skill training, _divine challenge_ 1/encounter |\n| Warrior of the Wild | Str 13 or Dex 13 | Ranger: skill training, designate prey 1/encounter |\n| Sneak of Shadows | Dex 13 | Rogue: Thievery skill, Sneak Attack 1/encounter |\n| Pact Initiate | Cha 13 | Warlock: skill training, _eldritch blast_ 1/encounter |\n| Student of Battle | Str 13 | Warlord: skill training, _inspiring word_ 1/day |\n| Arcane Initiate | Int 13 | Wizard: Arcana skill, wizard power 1/encounter |\n| Novice Power | Any class-specific multiclass feats, 4th level | Swap one encounter power with one of multiclass |\n| Acolyte Power | Any class-specific multiclass feats, 8th level | Swap one utility power with one of multiclass |\n| Adept Power | Any class-specific multiclass feats, 10th level | Swap one daily power with one of multiclass |',
  },
})

export const ClassSpecificFeatsSection = Content.defineSection('feats/class-specific-feats', {
  parent: MulticlassFeatsSection,
  content: {
    name: 'Class-Specific Feats',
    description:
      'There are two restrictions on your choice of a class-specific multiclass feat. First, you can’t take a multiclass feat for your own class. Second, once you take a multiclass feat, you can’t take a class-specific feat for a different class. You can dabble in a second class but not a third.\n\nA character who has taken a class-specific multiclass feat counts as a member of that class for the purpose of meeting prerequisites for taking other feats and qualifying for paragon paths. For example, a character who takes Initiate of the Faith counts as a cleric for the purpose of selecting feats that have cleric as a prerequisite. These feats can qualify you for other feats; for example, a warlock who takes Sneak of Shadows can use the rogue’s [Sneak Attack](trait:rogue/sneak-attack) class feature, which means that he meets the prerequisite for the [Backstabber](trait:feat/backstabber) feat.',
  },
})

export const InitiateOfTheFaithSection = Content.defineSection('feats/initiate-of-the-faith', {
  parent: ClassSpecificFeatsSection,
  content: {
    name: 'Initiate of the Faith [Multiclass Cleric]',
    description:
      '**Prerequisite:** [Wis](characteristic:wisdom) 13\n\n**Benefit:** You gain training in the [Religion](characteristic:skill/religion) skill.\n\nOnce per day, you can use the cleric’s _[healing word](trait:cleric/healing-word)_ power.\n\nIn addition, you can use a holy symbol as an implement when using a cleric power or a cleric paragon path power.',
  },
})

export const StudentOfTheSwordSection = Content.defineSection('feats/student-of-the-sword', {
  parent: ClassSpecificFeatsSection,
  content: {
    name: 'Student of the Sword [Multiclass Fighter]',
    description:
      '**Prerequisite:** [Str](characteristic:strength) 13\n\n**Benefit:** You gain training in one skill from the fighter’s class skill list.\n\nChoose either one-handed melee weapons or two-handed melee weapons. Once per encounter as a [free action](action-type:free-action), you can add a +1 bonus to the next attack roll you make with a weapon of that category. Whether the attack hits or misses, you mark the target until the end of your next turn.',
  },
})

export const SoldierOfTheFaithSection = Content.defineSection('feats/soldier-of-the-faith', {
  parent: ClassSpecificFeatsSection,
  content: {
    name: 'Soldier of the Faith [Multiclass Paladin]',
    description:
      '**Prerequisites:** [Str](characteristic:strength) 13, [Cha](characteristic:charisma) 13\n\n**Benefit:** You gain training in one skill from the paladin’s class skill list.\n\nOnce per encounter, you can use the paladin’s _[divine challenge](trait:paladin/divine-challenge)_ power.\n\nIn addition, you can use a holy symbol or a holy avenger as an implement when using a paladin power or a paladin paragon path power.',
  },
})

export const WarriorOfTheWildSection = Content.defineSection('feats/warrior-of-the-wild', {
  parent: ClassSpecificFeatsSection,
  content: {
    name: 'Warrior of the Wild [Multiclass Ranger]',
    description:
      '**Prerequisite:** [Str](characteristic:strength) 13 or [Dex](characteristic:dexterity) 13\n\n**Benefit:** You gain training in one skill from the ranger’s class skill list.\n\nOnce per encounter, you can use the ranger’s [Hunter’s Quarry](trait:ranger/hunters-quarry) class feature.',
  },
})

export const SneakOfShadowsSection = Content.defineSection('feats/sneak-of-shadows', {
  parent: ClassSpecificFeatsSection,
  content: {
    name: 'Sneak of Shadows [Multiclass Rogue]',
    description:
      '**Prerequisite:** [Dex](characteristic:dexterity) 13\n\n**Benefit:** You gain training in the [Thievery](characteristic:skill/thievery) skill.\n\nOnce per encounter, you can use the rogue’s [Sneak Attack](trait:rogue/sneak-attack) class feature.',
  },
})

export const PactInitiateSection = Content.defineSection('feats/pact-initiate', {
  parent: ClassSpecificFeatsSection,
  content: {
    name: 'Pact Initiate [Multiclass Warlock]',
    description:
      '**Prerequisite:** [Cha](characteristic:charisma) 13\n\n**Benefit:** You gain training in one skill from the warlock’s class skill list.\n\nChoose a warlock pact. You gain the pact’s at-will power as an encounter power, and you can pursue the warlock paragon path based on that pact.\n\nIn addition, you can use a rod, a wand, or a pact blade as an implement when using a warlock power or a warlock paragon path power.',
  },
})

export const StudentOfBattleSection = Content.defineSection('feats/student-of-battle', {
  parent: ClassSpecificFeatsSection,
  content: {
    name: 'Student of Battle [Multiclass Warlord]',
    description:
      '**Prerequisite:** [Str](characteristic:strength) 13\n\n**Benefit:** You gain training in one skill from the warlord’s class skill list.\n\nOnce per day, you can use the warlord’s _[inspiring word](trait:warlord/inspiring-word)_ power.',
  },
})

export const ArcaneInitiateSection = Content.defineSection('feats/arcane-initiate', {
  parent: ClassSpecificFeatsSection,
  content: {
    name: 'Arcane Initiate [Multiclass Wizard]',
    description:
      '**Prerequisite:** [Int](characteristic:intelligence) 13\n\n**Benefit:** You gain training in the [Arcana](characteristic:skill/arcana) skill.\n\nChoose a 1st-level wizard at-will power. You can use that power once per encounter.\n\nIn addition, you can use an orb, a staff, or a wand as an implement when using a wizard power or a wizard paragon path power.',
  },
})

export const PowerSwapFeatsSection = Content.defineSection('feats/power-swap-feats', {
  parent: MulticlassFeatsSection,
  content: {
    name: 'Power-Swap Feats',
    description:
      'The Novice Power, Acolyte Power, and Adept Power feats give you access to a power from the class for which you took a class-specific multiclass feat. That power replaces a power you would normally have from your primary class. When you take one of these power-swap feats, you give up a power of your choice from your primary class and replace it with a power of the same level or lower from the class you have multiclassed in.\n\nAny time you gain a level, you can alter that decision. Effectively, pretend you’re choosing the power-swap feat for the first time at the new level you’ve just gained. You gain back the power that you gave up originally from your primary class, lose the power that you chose from your second class, and make the trade again. You give up a different power from your primary class and replace it with a new power of the same level from your second class.\n\nYou can’t use power-swap feats to replace powers you gain from your paragon path or epic destiny.\n\nIf you use retraining to replace a power-swap feat with another feat, you lose any power gained from the power-swap feat and regain a power of the same level from your primary class.',
  },
})

export const NovicePowerSection = Content.defineSection('feats/novice-power', {
  parent: PowerSwapFeatsSection,
  content: {
    name: 'Novice Power [Multiclass Encounter]',
    description:
      '**Prerequisites:** Any class-specific multiclass feat, 4th level\n\n**Benefit:** You can swap one encounter attack power you know for one encounter attack power of the same level or lower from the class you multiclassed into.',
  },
})

export const ParagonMulticlassingSection = Content.defineSection('feats/paragon-multiclassing', {
  parent: MulticlassFeatsSection,
  content: {
    name: 'Paragon Multiclassing',
    description:
      'If you have the Novice Power, Acolyte Power, and Adept Power feats for a class, you can choose to continue to gain powers from that class rather than take a paragon path. If you choose this option, you gain several benefits.\n\nAt 11th level, you can choose to replace one of your at-will powers with an at-will power from your second class.\n\nIn place of the paragon path encounter power gained at 11th level, you can select any encounter power of 7th level or lower from your second class.\n\nIn place of the paragon path utility power gained at 12th level, you can select any utility power of 10th level or lower from your second class.\n\nIn place of the paragon path daily power gained at 20th level, you can select any daily power of 19th level or lower from your second class.',
  },
})

export const FeatsContent: Array<ContentSection> = [
  FeatsSection,
  ChoosingFeatsSection,
  HowFeatsWorkSection,
  TypesOfFeatsSection,
  ClassFeatsSection,
  DivinityFeatsSection,
  TypesOfFeatsMulticlassFeatsSection,
  RacialFeatsSection,
  FeatDescriptionsSection,
  PrerequisitesSection,
  BenefitSection,
  SpecialSection,
  HeroicTierFeatsSection,
  LinkActionSurgeSection,
  LinkAgileHunterSection,
  LinkAlertnessSection,
  LinkArmorOfBahamutSection,
  LinkArmorOfBahamutPowerSection,
  LinkArmorProficiencyChainmailSection,
  LinkArmorProficiencyHideSection,
  LinkArmorProficiencyLeatherSection,
  LinkArmorProficiencyPlateSection,
  LinkArmorProficiencyScaleSection,
  AstralFireSection,
  LinkAvandrasRescueSection,
  LinkAvandrasRescuePowerSection,
  LinkBackstabberSection,
  BladeOpportunistSection,
  LinkBurningBlizzardSection,
  LinkCombatReflexesSection,
  LinkCorellonsGraceSection,
  LinkCorellonsGracePowerSection,
  DarkFurySection,
  LinkDefensiveMobilitySection,
  LinkDistractingShieldSection,
  LinkDodgeGiantsSection,
  DragonbornFrenzySection,
  DragonbornSensesSection,
  LinkDurableSection,
  LinkDwarvenWeaponTrainingSection,
  EladrinSoldierSection,
  ElvenPrecisionSection,
  EnlargedDragonBreathSection,
  EscapeArtistSection,
  LinkExpandedSpellbookSection,
  FarShotSection,
  FarThrowSection,
  FastRunnerSection,
  FerociousRebukeSection,
  GroupInsightSection,
  HalflingAgilitySection,
  LinkHarmonyOfErathisSection,
  LinkHarmonyOfErathisPowerSection,
  LinkHealingHandsSection,
  HellfireBloodSection,
  LinkHumanPerseveranceSection,
  LinkImprovedDarkOnesBlessingSection,
  LinkImprovedFateOfTheVoidSection,
  LinkImprovedInitiativeSection,
  LinkImprovedMistyStepSection,
  LinkInspiredRecoverySection,
  LinkIounsPoiseSection,
  LinkIounsPoisePowerSection,
  LinkJackOfAllTradesSection,
  LinkKordsFavorSection,
  LinkKordsFavorPowerSection,
  LinkLethalHunterSection,
  LightStepSection,
  LinkLinguistSection,
  LongJumperSection,
  LostInTheCrowdSection,
  LinkMelorasTideSection,
  LinkMelorasTidePowerSection,
  LinkMoradinsResolveSection,
  LinkMoradinsResolvePowerSection,
  MountedCombatSection,
  NimbleBladeSection,
  LinkPelorsRadianceSection,
  LinkPelorsRadiancePowerSection,
  LinkPotentChallengeSection,
  LinkPowerAttackSection,
  PowerfulChargeSection,
  PreciseHunterSection,
  LinkPressTheAdvantageSection,
  QuickDrawSection,
  RagingStormSection,
  LinkRavenQueensBlessingSection,
  LinkRavenQueensBlessingPowerSection,
  LinkRitualCasterSection,
  LinkSehaninesReversalSection,
  LinkSehaninesReversalPowerSection,
  LinkShieldProficiencyHeavySection,
  LinkShieldProficiencyLightSection,
  LinkShieldPushSection,
  LinkSkillFocusSection,
  LinkSkillTrainingSection,
  SureClimberSection,
  LinkSurpriseKnockdownSection,
  LinkTacticalAssaultSection,
  LinkToughnessSection,
  TwoWeaponDefenseSection,
  TwoWeaponFightingSection,
  LinkWeaponFocusSection,
  LinkWeaponProficiencySection,
  WintertouchedSection,
  MulticlassFeatsSection,
  ClassSpecificFeatsSection,
  InitiateOfTheFaithSection,
  StudentOfTheSwordSection,
  SoldierOfTheFaithSection,
  WarriorOfTheWildSection,
  SneakOfShadowsSection,
  PactInitiateSection,
  StudentOfBattleSection,
  ArcaneInitiateSection,
  PowerSwapFeatsSection,
  NovicePowerSection,
  ParagonMulticlassingSection,
]
