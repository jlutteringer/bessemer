import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import { ClassesSection } from '@simulacrum/ruleset-dnd4e/content/content-classes'
import * as ClassRanger from '@simulacrum/ruleset-dnd4e/class/class-ranger'
import * as RangerPowers from '@simulacrum/ruleset-dnd4e/class/ranger-power'

export const RangerSection = Content.defineSection('classes/ranger', {
  parent: ClassesSection,
  content: {
    name: 'Ranger',
    description:
      '_“I’ll get the one in the back. That’s one hobgoblin who’ll regret ever lifting a bow.”_\n\nRangers are watchful warriors who roam past the horizon to safeguard a region, a principle, or a way of life. Masters of bow and blade, rangers excel at hit-and-run assaults and can quickly and silently eliminate foes. Rangers lay superb ambushes and excel at avoiding danger.\n\nAs a ranger, you possess almost supernaturally keen senses and a deep appreciation for untamed wilderness. With your knowledge of the natural world, you are able to track enemies through nearly any landscape, using the smallest clue to set your course, even sometimes the calls and songs of beasts and birds. Your severe demeanor promises a deadly conclusion to any enemy you hunt.\n\nWhen you catch sight of your quarry, will the transgressor perish by swift bow shots from a distance, or by the twofold blades that glint and glitter in each of your battle-scarred hands?',
  },
})

export const RangerClassTraitsSection = Content.linkEntity(RangerSection, ClassRanger.Ranger)

export const RangerOverviewSection = Content.defineSection('classes/ranger-overview', {
  parent: RangerSection,
  content: {
    name: 'Ranger Overview',
    description:
      '**Characteristics:** You combine fast, hard-hitting melee attack power with excellent ranged attack ability, and shift easily from melee to ranged combat. You are moderately resilient in battle, but you prefer hit-and-run attacks or ambushes to prolonged slugging matches. Hit hard, get out; that’s the ranger’s way.\n\n**Religion:** Rangers favor deities of nature and of the hunt. They often revere [Kord](trait:deity/kord), [Melora](trait:deity/melora), or [the Raven Queen](trait:deity/raven-queen). Evil or chaotic evil rangers usually worship Gruumsh or Zehir.\n\n**Races:** Elves are ideal archer rangers. [Humans](trait:race/human), halflings, dragonborn, and eladrin are all sometimes drawn to the wandering life of a two-blade ranger.',
  },
})

export const CreatingARangerSection = Content.defineSection('classes/creating-a-ranger', {
  parent: RangerSection,
  content: {
    name: 'Creating a Ranger',
    description:
      'Rangers depend on [Strength](characteristic:strength), [Dexterity](characteristic:dexterity), and [Wisdom](characteristic:wisdom) for most of their powers. [Constitution](characteristic:constitution) is also useful, since it helps them stand up to damage. The two ranger builds presented here are the archer ranger and the melee ranger.',
  },
})

export const ArcherRangerSection = Content.defineSection('classes/archer-ranger', {
  parent: CreatingARangerSection,
  content: {
    name: 'Archer Ranger',
    description:
      'You are a master of the bow (or, rarely, the crossbow, sling, or thrown weapon). You prefer ranged attack powers, and you resort to melee only when there are no good targets left for your arrows. Most of your attack powers use [Dexterity](characteristic:dexterity), so Dexterity should be your highest ability score. You find yourself in melee from time to time, so [Strength](characteristic:strength) is a good choice for your second-highest score. [Wisdom](characteristic:wisdom) should be your third-best ability score. Choose powers that reflect your preference for ranged weapons.\n\n**Suggested Feat:** [Agile Hunter](trait:feat/agile-hunter) (Human feat: [Human Perseverance](trait:feat/human-perseverance))\n\n**Suggested Skills:** [Endurance](characteristic:skill/endurance), [Heal](characteristic:skill/heal), [Nature](characteristic:skill/nature), [Perception](characteristic:skill/perception), [Stealth](characteristic:skill/stealth)\n\n**Suggested At-Will Powers:** _[careful attack](ability:ranger/power/careful-attack)_, _[nimble strike](ability:ranger/power/nimble-strike)_\n\n**Suggested Encounter Power:** _[evasive strike](ability:ranger/power/evasive-strike)_\n\n**Suggested Daily Power:** _[split the tree](ability:ranger/power/split-the-tree)_',
  },
})

export const TwoBladeRangerSection = Content.defineSection('classes/two-blade-ranger', {
  parent: CreatingARangerSection,
  content: {
    name: 'Two-Blade Ranger',
    description:
      'You like to get up close and rely on the ranger’s famous two-weapon fighting style. Naturally, you prefer melee attack powers, and that means [Strength](characteristic:strength) should be your highest ability score. For your second ability, [Dexterity](characteristic:dexterity) is a good choice because it improves your [AC](characteristic:armor-class). Make [Wisdom](characteristic:wisdom) your third choice, since it adds to your [Will](characteristic:will) defense and provides a bonus to many of your powers. Choose powers that reflect your preference for fighting with two melee weapons.\n\n**Suggested Feat:** [Lethal Hunter](trait:feat/lethal-hunter) (Human feat: [Action Surge](trait:feat/action-surge))\n\n**Suggested Skills:** [Acrobatics](characteristic:skill/acrobatics), [Dungeoneering](characteristic:skill/dungeoneering), [Endurance](characteristic:skill/endurance), [Heal](characteristic:skill/heal), [Perception](characteristic:skill/perception)\n\n**Suggested At-Will Powers:** _[hit and run](ability:ranger/power/hit-and-run)_, _[twin strike](ability:ranger/power/twin-strike)_\n\n**Suggested Encounter Power:** _[dire wolverine strike](ability:ranger/power/dire-wolverine-strike)_\n\n**Suggested Daily Power:** _[jaws of the wolf](ability:ranger/power/jaws-of-the-wolf)_',
  },
})

export const RangerClassFeaturesSection = Content.defineSection('classes/ranger-class-features', {
  parent: RangerSection,
  content: {
    name: 'Ranger Class Features',
    description: 'Your class features depend largely on the build and fighting style you choose.',
  },
})

export const FightingStyleSection = Content.defineSection('classes/ranger-fighting-style', {
  parent: RangerClassFeaturesSection,
  content: {
    name: 'Fighting Style',
    description: 'Choose one of the following fighting styles and gain its benefit.',
  },
})

export const ArcherFightingStyleSection = Content.linkEntity(FightingStyleSection, ClassRanger.ArcherFightingStyle)
export const TwoBladeFightingStyleSection = Content.linkEntity(FightingStyleSection, ClassRanger.TwoBladeFightingStyle)
export const HuntersQuarrySection = Content.linkEntity(RangerClassFeaturesSection, ClassRanger.HuntersQuarry)
export const PrimeShotSection = Content.linkEntity(RangerClassFeaturesSection, ClassRanger.PrimeShot)

export const RangerPowersSection = Content.defineSection('classes/ranger-powers', {
  parent: RangerSection,
  content: {
    name: 'Ranger Powers',
    description:
      'Your powers are bold exploits derived from your relentless training in archery and swordplay. At higher levels, you have access to special stance powers (see “[Keyword Categories](content:classes/keyword-categories),” page 55).',
  },
})

export const Level1AtWillExploitsSection = Content.defineSection('classes/ranger-level-1-at-will-exploits', {
  parent: RangerPowersSection,
  content: { name: 'Level 1 At-Will Exploits' },
})

export const CarefulAttackSection = Content.linkEntity(Level1AtWillExploitsSection, RangerPowers.CarefulAttack)
export const HitAndRunSection = Content.linkEntity(Level1AtWillExploitsSection, RangerPowers.HitAndRun)
export const NimbleStrikeSection = Content.linkEntity(Level1AtWillExploitsSection, RangerPowers.NimbleStrike)
export const TwinStrikeSection = Content.linkEntity(Level1AtWillExploitsSection, RangerPowers.TwinStrike)

export const Level1EncounterExploitsSection = Content.defineSection('classes/ranger-level-1-encounter-exploits', {
  parent: RangerPowersSection,
  content: { name: 'Level 1 Encounter Exploits' },
})

export const DireWolverineStrikeSection = Content.linkEntity(Level1EncounterExploitsSection, RangerPowers.DireWolverineStrike)
export const EvasiveStrikeSection = Content.linkEntity(Level1EncounterExploitsSection, RangerPowers.EvasiveStrike)
export const FoxsCunningSection = Content.linkEntity(Level1EncounterExploitsSection, RangerPowers.FoxsCunning)
export const TwoFangedStrikeSection = Content.linkEntity(Level1EncounterExploitsSection, RangerPowers.TwoFangedStrike)

export const Level1DailyExploitsSection = Content.defineSection('classes/ranger-level-1-daily-exploits', {
  parent: RangerPowersSection,
  content: { name: 'Level 1 Daily Exploits' },
})

export const HuntersBearTrapSection = Content.linkEntity(Level1DailyExploitsSection, RangerPowers.HuntersBearTrap)
export const JawsOfTheWolfSection = Content.linkEntity(Level1DailyExploitsSection, RangerPowers.JawsOfTheWolf)
export const SplitTheTreeSection = Content.linkEntity(Level1DailyExploitsSection, RangerPowers.SplitTheTree)
export const SuddenStrikeSection = Content.linkEntity(Level1DailyExploitsSection, RangerPowers.SuddenStrike)

export const Level2UtilityExploitsSection = Content.defineSection('classes/ranger-level-2-utility-exploits', {
  parent: RangerPowersSection,
  content: { name: 'Level 2 Utility Exploits' },
})

export const CrucialAdviceSection = Content.linkEntity(Level2UtilityExploitsSection, RangerPowers.CrucialAdvice)
export const UnbalancingParrySection = Content.linkEntity(Level2UtilityExploitsSection, RangerPowers.UnbalancingParry)
export const YieldGroundSection = Content.linkEntity(Level2UtilityExploitsSection, RangerPowers.YieldGround)

export const Level3EncounterExploitsSection = Content.defineSection('classes/ranger-level-3-encounter-exploits', {
  parent: RangerPowersSection,
  content: { name: 'Level 3 Encounter Exploits' },
})

export const CutAndRunSection = Content.linkEntity(Level3EncounterExploitsSection, RangerPowers.CutAndRun)
export const DisruptiveStrikeSection = Content.linkEntity(Level3EncounterExploitsSection, RangerPowers.DisruptiveStrike)
export const ShadowWaspStrikeSection = Content.linkEntity(Level3EncounterExploitsSection, RangerPowers.ShadowWaspStrike)
export const ThundertuskBoarStrikeSection = Content.linkEntity(Level3EncounterExploitsSection, RangerPowers.ThundertuskBoarStrike)

export const Level5DailyExploitsSection = Content.defineSection('classes/ranger-level-5-daily-exploits', {
  parent: RangerPowersSection,
  content: { name: 'Level 5 Daily Exploits' },
})

export const ExcruciatingShotSection = Content.linkEntity(Level5DailyExploitsSection, RangerPowers.ExcruciatingShot)
export const FrenziedSkirmishSection = Content.linkEntity(Level5DailyExploitsSection, RangerPowers.FrenziedSkirmish)
export const SplinteringShotSection = Content.linkEntity(Level5DailyExploitsSection, RangerPowers.SplinteringShot)
export const TwoWolfPounceSection = Content.linkEntity(Level5DailyExploitsSection, RangerPowers.TwoWolfPounce)

export const Level6UtilityExploitsSection = Content.defineSection('classes/ranger-level-6-utility-exploits', {
  parent: RangerPowersSection,
  content: { name: 'Level 6 Utility Exploits' },
})

export const EvadeAmbushSection = Content.linkEntity(Level6UtilityExploitsSection, RangerPowers.EvadeAmbush)
export const SkilledCompanionSection = Content.linkEntity(Level6UtilityExploitsSection, RangerPowers.SkilledCompanion)
export const WeaveThroughTheFraySection = Content.linkEntity(Level6UtilityExploitsSection, RangerPowers.WeaveThroughTheFray)

export const Level7EncounterExploitsSection = Content.defineSection('classes/ranger-level-7-encounter-exploits', {
  parent: RangerPowersSection,
  content: { name: 'Level 7 Encounter Exploits' },
})

export const ClawsOfTheGriffonSection = Content.linkEntity(Level7EncounterExploitsSection, RangerPowers.ClawsOfTheGriffon)
export const HawksTalonSection = Content.linkEntity(Level7EncounterExploitsSection, RangerPowers.HawksTalon)
export const SpikesOfTheManticoreSection = Content.linkEntity(Level7EncounterExploitsSection, RangerPowers.SpikesOfTheManticore)
export const SweepingWhirlwindSection = Content.linkEntity(Level7EncounterExploitsSection, RangerPowers.SweepingWhirlwind)

export const Level9DailyExploitsSection = Content.defineSection('classes/ranger-level-9-daily-exploits', {
  parent: RangerPowersSection,
  content: { name: 'Level 9 Daily Exploits' },
})

export const AttacksOnTheRunSection = Content.linkEntity(Level9DailyExploitsSection, RangerPowers.AttacksOnTheRun)
export const CloseQuartersShotSection = Content.linkEntity(Level9DailyExploitsSection, RangerPowers.CloseQuartersShot)
export const SprayOfArrowsSection = Content.linkEntity(Level9DailyExploitsSection, RangerPowers.SprayOfArrows)
export const SwirlingLeavesOfSteelSection = Content.linkEntity(Level9DailyExploitsSection, RangerPowers.SwirlingLeavesOfSteel)

export const Level10UtilityExploitsSection = Content.defineSection('classes/ranger-level-10-utility-exploits', {
  parent: RangerPowersSection,
  content: { name: 'Level 10 Utility Exploits' },
})

export const ExpeditiousStrideSection = Content.linkEntity(Level10UtilityExploitsSection, RangerPowers.ExpeditiousStride)
export const OpenTheRangeSection = Content.linkEntity(Level10UtilityExploitsSection, RangerPowers.OpenTheRange)
export const UndauntedStrideSection = Content.linkEntity(Level10UtilityExploitsSection, RangerPowers.UndauntedStride)

export const RangerContent: Array<ContentSection> = [
  RangerSection,
  RangerClassTraitsSection,
  RangerOverviewSection,
  CreatingARangerSection,
  ArcherRangerSection,
  TwoBladeRangerSection,
  RangerClassFeaturesSection,
  FightingStyleSection,
  ArcherFightingStyleSection,
  TwoBladeFightingStyleSection,
  HuntersQuarrySection,
  PrimeShotSection,
  RangerPowersSection,
  Level1AtWillExploitsSection,
  CarefulAttackSection,
  HitAndRunSection,
  NimbleStrikeSection,
  TwinStrikeSection,
  Level1EncounterExploitsSection,
  DireWolverineStrikeSection,
  EvasiveStrikeSection,
  FoxsCunningSection,
  TwoFangedStrikeSection,
  Level1DailyExploitsSection,
  HuntersBearTrapSection,
  JawsOfTheWolfSection,
  SplitTheTreeSection,
  SuddenStrikeSection,
  Level2UtilityExploitsSection,
  CrucialAdviceSection,
  UnbalancingParrySection,
  YieldGroundSection,
  Level3EncounterExploitsSection,
  CutAndRunSection,
  DisruptiveStrikeSection,
  ShadowWaspStrikeSection,
  ThundertuskBoarStrikeSection,
  Level5DailyExploitsSection,
  ExcruciatingShotSection,
  FrenziedSkirmishSection,
  SplinteringShotSection,
  TwoWolfPounceSection,
  Level6UtilityExploitsSection,
  EvadeAmbushSection,
  SkilledCompanionSection,
  WeaveThroughTheFraySection,
  Level7EncounterExploitsSection,
  ClawsOfTheGriffonSection,
  HawksTalonSection,
  SpikesOfTheManticoreSection,
  SweepingWhirlwindSection,
  Level9DailyExploitsSection,
  AttacksOnTheRunSection,
  CloseQuartersShotSection,
  SprayOfArrowsSection,
  SwirlingLeavesOfSteelSection,
  Level10UtilityExploitsSection,
  ExpeditiousStrideSection,
  OpenTheRangeSection,
  UndauntedStrideSection,
]
