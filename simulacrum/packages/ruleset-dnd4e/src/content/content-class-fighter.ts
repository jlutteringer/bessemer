import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import { ClassesSection } from '@simulacrum/ruleset-dnd4e/content/content-classes'
import * as ClassFighter from '@simulacrum/ruleset-dnd4e/class/class-fighter'
import * as FighterPowers from '@simulacrum/ruleset-dnd4e/class/fighter-power'

export const FighterSection = Content.defineSection('classes/fighter', {
  parent: ClassesSection,
  content: {
    name: 'Fighter',
    description:
      '_“You’ll have to deal with me first, dragon!”_\n\nFighters are determined combat adepts trained to protect the other members of their adventuring groups. Fighters define the front line by bashing and slicing foes into submission while reflecting enemy attacks through the use of heavy armor. Fighters draw weapons for gold, for glory, for duty, and for the mere joy of unrestrained martial exercise.\n\nRegardless of your level of skill and the specific weapons you eventually master, your motivations determine who you defend and who you slay. You could be a noble champion who pledges your blade to gallant causes, a calculating mercenary who cares more for the clink of gold than praise, a homeless prince on the run from assassins, or a blood-loving thug looking for the next good fight.\n\nYour future is yours. When you unsheathe your weapon, what battle cry flies from your lips?',
  },
})

export const FighterClassTraitsSection = Content.linkEntity(FighterSection, ClassFighter.Fighter)

export const FighterOverviewSection = Content.defineSection('classes/fighter-overview', {
  parent: FighterSection,
  content: {
    name: 'Fighter Overview',
    description:
      '**Characteristics:** You are extremely tough, with a great [Armor Class](characteristic:armor-class) and lots of [hit points](characteristic:hit-points). You have extraordinary resilience against physical attack. You don’t have much ability to fight at range, but you excel in melee combat. You have special abilities that make it dangerous for enemies to ignore you, so you can contain foes and keep them away from your friends.\n\n**Religion:** Fighters naturally favor deities of war, combat, adventure, or valor. [Bahamut](trait:deity/bahamut) and [Kord](trait:deity/kord) are popular, as is [Avandra](trait:deity/avandra). Many unaligned or evil fighters pay homage to Bane, the god of war.\n\n**Races:** Fighters come from all races. Dragonborn, [dwarves](trait:race/dwarf), and [humans](trait:race/human) are the most common fighters.',
  },
})

export const CreatingAFighterSection = Content.defineSection('classes/creating-a-fighter', {
  parent: FighterSection,
  content: {
    name: 'Creating a Fighter',
    description:
      'You can choose any fighter powers you like for your character, but fighters naturally fall into two basic groups: the great weapon fighter and the guardian fighter. All fighters rely on [Strength](characteristic:strength). Fighters also need [Constitution](characteristic:constitution), [Dexterity](characteristic:dexterity), or [Wisdom](characteristic:wisdom), depending on which weapon they favor. See “[Fighters and Melee Weapons](content:classes/fighters-and-melee-weapons)” for more information.',
  },
})

export const GreatWeaponFighterSection = Content.defineSection('classes/great-weapon-fighter', {
  parent: CreatingAFighterSection,
  content: {
    name: 'Great Weapon Fighter',
    description:
      'You’re interested in dealing out the most damage you can. You prefer big two-handed weapons such as the greatsword or greataxe. You’re more interested in fighting hard than fighting smart. Your best ability score is definitely [Strength](characteristic:strength). A good [Constitution](characteristic:constitution) improves your ability to use high damage weapons, such as axes and hammers. Plus, extra hit points always help. Select powers that work well with two-handed weapons to make the most of this build.\n\n**Suggested Feat:** [Power Attack](trait:feat/power-attack) (Human feat: [Action Surge](trait:feat/action-surge))\n\n**Suggested Skills:** [Athletics](characteristic:skill/athletics), [Endurance](characteristic:skill/endurance), [Intimidate](characteristic:skill/intimidate)\n\n**Suggested At-Will Powers:** _[cleave](ability:fighter/power/cleave)_, _[reaping strike](ability:fighter/power/reaping-strike)_\n\n**Suggested Encounter Power:** _[spinning sweep](ability:fighter/power/spinning-sweep)_\n\n**Suggested Daily Power:** _[brute strike](ability:fighter/power/brute-strike)_',
  },
})

export const GuardianFighterSection = Content.defineSection('classes/guardian-fighter', {
  parent: CreatingAFighterSection,
  content: {
    name: 'Guardian Fighter',
    description:
      'To fight better, you fight smarter. You’re willing to trade offense for superior defenses and better ability to control the battlefield around you. You fight with a [heavy shield](ability:shield/heavy) and a good one-handed weapon, such as a longsword, flail, or battleaxe. Like the great weapon fighter, you make [Strength](characteristic:strength) your best ability score. After that, prioritize your [Dexterity](characteristic:dexterity) to take advantage of weapons that can be improved by Dexterity-based feats, or your [Wisdom](characteristic:wisdom) to make the most of the [combat superiority](trait:fighter/combat-superiority) class feature. You’re hard to hurt and hard to move away from. Select powers that make use of your one-handed weapon and shield, as well as take advantage of your higher Dexterity score.\n\n**Suggested Feat:** [Weapon Focus](trait:feat/weapon-focus) (Human feat: [Human Perseverance](trait:feat/human-perseverance))\n\n**Suggested Skills:** [Heal](characteristic:skill/heal), [Intimidate](characteristic:skill/intimidate), [Streetwise](characteristic:skill/streetwise)\n\n**Suggested At-Will Powers:** _[sure strike](ability:fighter/power/sure-strike)_, _[tide of iron](ability:fighter/power/tide-of-iron)_\n\n**Suggested Encounter Power:** _[covering attack](ability:fighter/power/covering-attack)_\n\n**Suggested Daily Power:** _[comeback strike](ability:fighter/power/comeback-strike)_',
  },
})

export const FighterClassFeaturesSection = Content.defineSection('classes/fighter-class-features', {
  parent: FighterSection,
  content: {
    name: 'Fighter Class Features',
    description:
      'Some of your most important characteristics are the ability to wear very good armor, your exceptional hit point total, and your mastery of all military weapons. In addition, you have three unique class features.',
  },
})

export const CombatChallengeSection = Content.linkEntity(FighterClassFeaturesSection, ClassFighter.CombatChallenge)
export const CombatSuperioritySection = Content.linkEntity(FighterClassFeaturesSection, ClassFighter.CombatSuperiority)
export const FighterWeaponTalentSection = Content.linkEntity(FighterClassFeaturesSection, ClassFighter.SelectWeaponTalent)

export const FightersAndMeleeWeaponsSection = Content.defineSection('classes/fighters-and-melee-weapons', {
  parent: FighterSection,
  content: {
    name: 'Fighters and Melee Weapons',
    description:
      'Fighters master intricacies of melee weapon skill that other characters can’t match. Unlike other classes, fighters have many encounter powers that work better when used with specific groups of melee weapons (see the table below). Powers associated with a weapon group favor a particular ability score mix, so that fighters with high [Constitution](characteristic:constitution) are likely to want to use axes, hammers, or picks, while fighters with high [Dexterity](characteristic:dexterity) are more likely to favor heavy blades, light blades, flails, or spears. The weapon feats described in [Chapter 6](content:feats) that provide optimized abilities for specific groups of weapons favor the same ability score mixes, so the list below notes the melee weapon groups and the ability score that is most likely to help you optimize your fighter abilities with that weapon group.\n\n**Melee Weapon Groups and Associated Statistics**\n\n- **Axe:** Constitution and higher than normal Strength (battleaxe, handaxe, greataxe, halberd)\n- **Flail:** Dexterity (flail, heavy flail, spiked chain)\n- **Hammer:** Constitution (maul, throwing hammer, warhammer)\n- **Heavy Blade:** Dexterity (bastard sword, falchion, glaive, greatsword, longsword, scimitar, scythe)\n- **Light Blade:** Dexterity alone is sometimes enough (dagger, katar, rapier, short sword, shuriken, sickle)\n- **Mace:** Constitution (club, great club, mace, morningstar)\n- **Pick:** Constitution [and rarely Dexterity] (war pick)\n- **Polearm:** Wisdom [and rarely Dexterity] (glaive, halberd, longspear)\n- **Spear:** Dexterity (javelin, longspear, spear)\n- **Staff:** Constitution (quarterstaff)\n\nMost melee weapon groups, with the exception of light blades, require some element of [Strength](characteristic:strength) to access the weapon feats that improve their importance. (Light blades have some feats that require only Dexterity, though other light blade feats also require a modicum of Strength.) The list of weapon groups above mentions the ability score _other than Strength_ that helps access the feats that improve a specific group of weapons, as well as fighter powers that are tied to specific groups of weapons.\n\nStrength is mentioned in the list only if a weapon group has unusually high requirements for Strength.\n\nA few weapons, including most polearms, are part of multiple groups and can therefore be approached from different optimal ability score builds.',
  },
})

export const FighterPowersSection = Content.defineSection('classes/fighter-powers', {
  parent: FighterSection,
  content: {
    name: 'Fighter Powers',
    description:
      'Your powers are called exploits. Some work better for great weapon fighters and some work better for guardian fighters, but you can choose any power you like when you reach a level that allows you to choose a new power. The choice of weapon you make also provides benefits to certain fighter powers.',
  },
})

export const Level1AtWillExploitsSection = Content.defineSection('classes/fighter-level-1-at-will-exploits', {
  parent: FighterPowersSection,
  content: { name: 'Level 1 At-Will Exploits' },
})

export const CleaveSection = Content.linkEntity(Level1AtWillExploitsSection, FighterPowers.Cleave)
export const ReapingStrikeSection = Content.linkEntity(Level1AtWillExploitsSection, FighterPowers.ReapingStrike)
export const SureStrikeSection = Content.linkEntity(Level1AtWillExploitsSection, FighterPowers.SureStrike)
export const TideOfIronSection = Content.linkEntity(Level1AtWillExploitsSection, FighterPowers.TideOfIron)

export const Level1EncounterExploitsSection = Content.defineSection('classes/fighter-level-1-encounter-exploits', {
  parent: FighterPowersSection,
  content: { name: 'Level 1 Encounter Exploits' },
})

export const CoveringAttackSection = Content.linkEntity(Level1EncounterExploitsSection, FighterPowers.CoveringAttack)
export const PassingAttackSection = Content.linkEntity(Level1EncounterExploitsSection, FighterPowers.PassingAttack)
export const SpinningSweepSection = Content.linkEntity(Level1EncounterExploitsSection, FighterPowers.SpinningSweep)
export const SteelSerpentStrikeSection = Content.linkEntity(Level1EncounterExploitsSection, FighterPowers.SteelSerpentStrike)

export const Level1DailyExploitsSection = Content.defineSection('classes/fighter-level-1-daily-exploits', {
  parent: FighterPowersSection,
  content: { name: 'Level 1 Daily Exploits' },
})

export const BruteStrikeSection = Content.linkEntity(Level1DailyExploitsSection, FighterPowers.BruteStrike)
export const ComebackStrikeSection = Content.linkEntity(Level1DailyExploitsSection, FighterPowers.ComebackStrike)
export const VillainsMenaceSection = Content.linkEntity(Level1DailyExploitsSection, FighterPowers.VillainsMenace)

export const Level2UtilityExploitsSection = Content.defineSection('classes/fighter-level-2-utility-exploits', {
  parent: FighterPowersSection,
  content: { name: 'Level 2 Utility Exploits' },
})

export const BoundlessEnduranceSection = Content.linkEntity(Level2UtilityExploitsSection, FighterPowers.BoundlessEndurance)
export const GetOverHereSection = Content.linkEntity(Level2UtilityExploitsSection, FighterPowers.GetOverHere)
export const NoOpeningSection = Content.linkEntity(Level2UtilityExploitsSection, FighterPowers.NoOpening)
export const UnstoppableSection = Content.linkEntity(Level2UtilityExploitsSection, FighterPowers.Unstoppable)

export const Level3EncounterExploitsSection = Content.defineSection('classes/fighter-level-3-encounter-exploits', {
  parent: FighterPowersSection,
  content: { name: 'Level 3 Encounter Exploits' },
})

export const ArmorPiercingThrustSection = Content.linkEntity(Level3EncounterExploitsSection, FighterPowers.ArmorPiercingThrust)
export const CrushingBlowSection = Content.linkEntity(Level3EncounterExploitsSection, FighterPowers.CrushingBlow)
export const DanceOfSteelSection = Content.linkEntity(Level3EncounterExploitsSection, FighterPowers.DanceOfSteel)
export const PreciseStrikeSection = Content.linkEntity(Level3EncounterExploitsSection, FighterPowers.PreciseStrike)
export const RainOfBlowsSection = Content.linkEntity(Level3EncounterExploitsSection, FighterPowers.RainOfBlows)
export const SweepingBlowSection = Content.linkEntity(Level3EncounterExploitsSection, FighterPowers.SweepingBlow)

export const Level5DailyExploitsSection = Content.defineSection('classes/fighter-level-5-daily-exploits', {
  parent: FighterPowersSection,
  content: { name: 'Level 5 Daily Exploits' },
})

export const CrackTheShellSection = Content.linkEntity(Level5DailyExploitsSection, FighterPowers.CrackTheShell)
export const DizzyingBlowSection = Content.linkEntity(Level5DailyExploitsSection, FighterPowers.DizzyingBlow)
export const RainOfSteelSection = Content.linkEntity(Level5DailyExploitsSection, FighterPowers.RainOfSteel)

export const FighterContent: Array<ContentSection> = [
  FighterSection,
  FighterClassTraitsSection,
  FighterOverviewSection,
  CreatingAFighterSection,
  GreatWeaponFighterSection,
  GuardianFighterSection,
  FighterClassFeaturesSection,
  CombatChallengeSection,
  CombatSuperioritySection,
  FighterWeaponTalentSection,
  FightersAndMeleeWeaponsSection,
  FighterPowersSection,
  Level1AtWillExploitsSection,
  CleaveSection,
  ReapingStrikeSection,
  SureStrikeSection,
  TideOfIronSection,
  Level1EncounterExploitsSection,
  CoveringAttackSection,
  PassingAttackSection,
  SpinningSweepSection,
  SteelSerpentStrikeSection,
  Level1DailyExploitsSection,
  BruteStrikeSection,
  ComebackStrikeSection,
  VillainsMenaceSection,
  Level2UtilityExploitsSection,
  BoundlessEnduranceSection,
  GetOverHereSection,
  NoOpeningSection,
  UnstoppableSection,
  Level3EncounterExploitsSection,
  ArmorPiercingThrustSection,
  CrushingBlowSection,
  DanceOfSteelSection,
  PreciseStrikeSection,
  RainOfBlowsSection,
  SweepingBlowSection,
  Level5DailyExploitsSection,
  CrackTheShellSection,
  DizzyingBlowSection,
  RainOfSteelSection,
]
