import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import { ClassesSection } from '@simulacrum/ruleset-dnd4e/content/content-classes'
import * as ClassRogue from '@simulacrum/ruleset-dnd4e/class/class-rogue'
import * as RoguePower from '@simulacrum/ruleset-dnd4e/class/rogue-power'

export const RogueSection = Content.defineSection('classes/rogue', {
  parent: ClassesSection,
  content: {
    name: 'Rogue',
    description:
      '_“You look surprised to see me. If you’d been paying attention, you might still be alive.”_\n\nRogues are cunning and elusive adversaries. Rogues slip into and out of shadows on a whim, pass anywhere across the field of battle without fear of reprisal, and appear suddenly only to drive home a lethal blade.\n\nAs a rogue, you might face others’ preconceptions regarding your motivations, but your nature is your own to mold. You could be an agent fresh from the deposed king’s shattered intelligence network, an accused criminal on the lam seeking to clear your name, a wiry performer whose goals transcend the theatrical stage, a kid trying to turn around your hard-luck story, or a daredevil thrill-seeker who can’t get enough of the adrenaline rush of conflict. Or perhaps you are merely in it for the gold, after all.\n\nWith a blade up your sleeve and a concealing cloak across your shoulders, you stride forth, eyes alight with anticipation. What worldly wonders and rewards are yours for the taking?',
  },
})

export const RogueOverviewSection = Content.defineSection('classes/rogue-overview', {
  parent: RogueSection,
  content: {
    name: 'Rogue Overview',
    description:
      '**Characteristics:** [Combat advantage](content:combat/combat-advantage) provides the full benefit of your powers, and a combination of skills and powers helps you gain and keep that advantage over your foes. You are a master of skills, from [Stealth](characteristic:skill/stealth) and [Thievery](characteristic:skill/thievery) to [Bluff](characteristic:skill/bluff) and [Acrobatics](characteristic:skill/acrobatics).\n\n**Religion:** Rogues prefer deities of the night, luck, freedom, and adventure, such as [Sehanine](trait:deity/sehanine) and [Avandra](trait:deity/avandra). Evil and chaotic evil rogues often favor Lolth or Zehir.\n\n**Races:** Those with a love for secrets exchanged in shadows and change for its own sake make ideal rogues, including [elves](content:races/elf), [tieflings](content:races/tiefling), and [halflings](content:races/halfling).',
  },
})

export const RogueClassTraitsSection = Content.linkEntity(RogueSection, ClassRogue.Rogue)

export const CreatingARogueSection = Content.defineSection('classes/creating-a-rogue', {
  parent: RogueSection,
  content: {
    name: 'Creating a Rogue',
    description:
      'The trickster rogue and the brawny rogue are the two rogue builds, one relying on bluffs and feints, the other on brute strength. [Dexterity](characteristic:dexterity), [Charisma](characteristic:charisma), and [Strength](characteristic:strength) are the rogue’s most important ability scores.',
  },
})

export const BrawnyRogueSection = Content.defineSection('classes/brawny-rogue', {
  parent: CreatingARogueSection,
  content: {
    name: 'Brawny Rogue',
    description:
      'You like powers that deal plenty of damage, aided by your [Strength](characteristic:strength), and also stun, immobilize, knock down, or push your foes. Your attacks use [Dexterity](characteristic:dexterity), so keep that your highest ability score. Strength should be a close second—it increases your damage directly, and it can determine other effects of your attacks. [Charisma](characteristic:charisma) is a good third ability score, particularly if you want to dabble in powers from the other rogue build. Select the [brutal scoundrel](trait:rogue/tactics/brutal-scoundrel) rogue tactic, and look for powers that pack a lot of damage into every punch.\n\n**Suggested Feat:** [Weapon Focus](trait:feat/weapon-focus) (Human feat: [Toughness](trait:feat/toughness))\n\n**Suggested Skills:** [Athletics](characteristic:skill/athletics), [Dungeoneering](characteristic:skill/dungeoneering), [Intimidate](characteristic:skill/intimidate), [Stealth](characteristic:skill/stealth), [Streetwise](characteristic:skill/streetwise), [Thievery](characteristic:skill/thievery)\n\n**Suggested At-Will Powers:** [piercing strike](ability:rogue/power/piercing-strike), [riposte strike](ability:rogue/power/riposte-strike)\n\n**Suggested Encounter Power:** [torturous strike](ability:rogue/power/torturous-strike)\n\n**Suggested Daily Power:** [easy target](ability:rogue/power/easy-target)',
  },
})

export const TricksterRogueSection = Content.defineSection('classes/trickster-rogue', {
  parent: CreatingARogueSection,
  content: {
    name: 'Trickster Rogue',
    description:
      'You like powers that deceive and misdirect your foes. You dart in and out of the fray in combat, dodging your enemies’ attacks or redirecting them to other foes. Most of your attack powers rely on [Dexterity](characteristic:dexterity), so that should be your best ability score. [Charisma](characteristic:charisma) is important for a few attacks, for Charisma-based skills you sometimes use in place of attacks, and for other effects that depend on successful attacks, so make Charisma your second-best score. [Strength](characteristic:strength) is useful if you want to choose powers intended for the other rogue build. Select the [artful dodger](trait:rogue/tactics/artful-dodger) rogue tactic. Look for powers that take advantage of your high Charisma score, as well as those that add to your trickster nature.\n\n**Suggested Feat:** [Backstabber](trait:feat/backstabber) (Human feat: [Human Perseverance](trait:feat/human-perseverance))\n\n**Suggested Skills:** [Acrobatics](characteristic:skill/acrobatics), [Bluff](characteristic:skill/bluff), [Insight](characteristic:skill/insight), [Perception](characteristic:skill/perception), [Stealth](characteristic:skill/stealth), [Thievery](characteristic:skill/thievery)\n\n**Suggested At-Will Powers:** [deft strike](ability:rogue/power/deft-strike), [sly flourish](ability:rogue/power/sly-flourish)\n\n**Suggested Encounter Power:** [positioning strike](ability:rogue/power/positioning-strike)\n\n**Suggested Daily Power:** [trick strike](ability:rogue/power/trick-strike)',
  },
})

export const RogueClassFeaturesSection = Content.defineSection('classes/rogue-class-features', {
  parent: RogueSection,
  content: { name: 'Rogue Class Features', description: 'All rogues share these class features.' },
})

export const FirstStrikeSection = Content.linkEntity(RogueClassFeaturesSection, ClassRogue.FirstStrike)
export const RogueTacticsSection = Content.linkEntity(RogueClassFeaturesSection, ClassRogue.SelectRogueTactics)
export const ArtfulDodgerSection = Content.linkEntity(RogueTacticsSection, ClassRogue.ArtfulDodger)
export const BrutalScoundrelSection = Content.linkEntity(RogueTacticsSection, ClassRogue.BrutalScoundrel)
export const RogueWeaponTalentSection = Content.linkEntity(RogueClassFeaturesSection, ClassRogue.RogueWeaponTalent)
export const SneakAttackSection = Content.linkEntity(RogueClassFeaturesSection, ClassRogue.SneakAttack)

export const RoguePowersSection = Content.defineSection('classes/rogue-powers', {
  parent: RogueSection,
  content: {
    name: 'Rogue Powers',
    description:
      'Your powers are daring exploits that draw on your personal cunning, agility, and expertise. Some powers reward a high [Charisma](characteristic:charisma) and are well suited for the trickster rogue, and others reward a high [Strength](characteristic:strength) and appeal to the brawny rogue, but you are free to choose any power you like.',
  },
})

export const RogueLevel1AtWillExploitsSection = Content.defineSection('classes/rogue-level-1-at-will-exploits', {
  parent: RoguePowersSection,
  content: { name: 'Level 1 At-Will Exploits' },
})

export const DeftStrikeSection = Content.linkEntity(RogueLevel1AtWillExploitsSection, RoguePower.DeftStrike)
export const PiercingStrikeSection = Content.linkEntity(RogueLevel1AtWillExploitsSection, RoguePower.PiercingStrike)
export const RiposteStrikeSection = Content.linkEntity(RogueLevel1AtWillExploitsSection, RoguePower.RiposteStrike)
export const SlyFlourishSection = Content.linkEntity(RogueLevel1AtWillExploitsSection, RoguePower.SlyFlourish)

export const RogueLevel1EncounterExploitsSection = Content.defineSection('classes/rogue-level-1-encounter-exploits', {
  parent: RoguePowersSection,
  content: { name: 'Level 1 Encounter Exploits' },
})

export const DazingStrikeSection = Content.linkEntity(RogueLevel1EncounterExploitsSection, RoguePower.DazingStrike)
export const KingsCastleSection = Content.linkEntity(RogueLevel1EncounterExploitsSection, RoguePower.KingsCastle)
export const PositioningStrikeSection = Content.linkEntity(RogueLevel1EncounterExploitsSection, RoguePower.PositioningStrike)
export const TorturousStrikeSection = Content.linkEntity(RogueLevel1EncounterExploitsSection, RoguePower.TorturousStrike)

export const RogueLevel1DailyExploitsSection = Content.defineSection('classes/rogue-level-1-daily-exploits', {
  parent: RoguePowersSection,
  content: { name: 'Level 1 Daily Exploits' },
})

export const BlindingBarrageSection = Content.linkEntity(RogueLevel1DailyExploitsSection, RoguePower.BlindingBarrage)
export const EasyTargetSection = Content.linkEntity(RogueLevel1DailyExploitsSection, RoguePower.EasyTarget)
export const TrickStrikeSection = Content.linkEntity(RogueLevel1DailyExploitsSection, RoguePower.TrickStrike)

export const RogueLevel2UtilityExploitsSection = Content.defineSection('classes/rogue-level-2-utility-exploits', {
  parent: RoguePowersSection,
  content: { name: 'Level 2 Utility Exploits' },
})

export const FleetingGhostSection = Content.linkEntity(RogueLevel2UtilityExploitsSection, RoguePower.FleetingGhost)
export const GreatLeapSection = Content.linkEntity(RogueLevel2UtilityExploitsSection, RoguePower.GreatLeap)
export const MasterOfDeceitSection = Content.linkEntity(RogueLevel2UtilityExploitsSection, RoguePower.MasterOfDeceit)
export const QuickFingersSection = Content.linkEntity(RogueLevel2UtilityExploitsSection, RoguePower.QuickFingers)
export const TumbleSection = Content.linkEntity(RogueLevel2UtilityExploitsSection, RoguePower.Tumble)

export const RogueLevel3EncounterExploitsSection = Content.defineSection('classes/rogue-level-3-encounter-exploits', {
  parent: RoguePowersSection,
  content: { name: 'Level 3 Encounter Exploits' },
})

export const BaitAndSwitchSection = Content.linkEntity(RogueLevel3EncounterExploitsSection, RoguePower.BaitAndSwitch)
export const SetupStrikeSection = Content.linkEntity(RogueLevel3EncounterExploitsSection, RoguePower.SetupStrike)
export const ToppleOverSection = Content.linkEntity(RogueLevel3EncounterExploitsSection, RoguePower.ToppleOver)
export const TrickstersBladeSection = Content.linkEntity(RogueLevel3EncounterExploitsSection, RoguePower.TrickstersBlade)

export const RogueLevel5DailyExploitsSection = Content.defineSection('classes/rogue-level-5-daily-exploits', {
  parent: RoguePowersSection,
  content: { name: 'Level 5 Daily Exploits' },
})

export const CleverRiposteSection = Content.linkEntity(RogueLevel5DailyExploitsSection, RoguePower.CleverRiposte)
export const DeepCutSection = Content.linkEntity(RogueLevel5DailyExploitsSection, RoguePower.DeepCut)
export const WalkingWoundedSection = Content.linkEntity(RogueLevel5DailyExploitsSection, RoguePower.WalkingWounded)

export const RogueContent: Array<ContentSection> = [
  RogueSection,
  RogueOverviewSection,
  RogueClassTraitsSection,
  CreatingARogueSection,
  BrawnyRogueSection,
  TricksterRogueSection,
  RogueClassFeaturesSection,
  FirstStrikeSection,
  RogueTacticsSection,
  ArtfulDodgerSection,
  BrutalScoundrelSection,
  RogueWeaponTalentSection,
  SneakAttackSection,
  RoguePowersSection,
  RogueLevel1AtWillExploitsSection,
  DeftStrikeSection,
  PiercingStrikeSection,
  RiposteStrikeSection,
  SlyFlourishSection,
  RogueLevel1EncounterExploitsSection,
  DazingStrikeSection,
  KingsCastleSection,
  PositioningStrikeSection,
  TorturousStrikeSection,
  RogueLevel1DailyExploitsSection,
  BlindingBarrageSection,
  EasyTargetSection,
  TrickStrikeSection,
  RogueLevel2UtilityExploitsSection,
  FleetingGhostSection,
  GreatLeapSection,
  MasterOfDeceitSection,
  QuickFingersSection,
  TumbleSection,
  RogueLevel3EncounterExploitsSection,
  BaitAndSwitchSection,
  SetupStrikeSection,
  ToppleOverSection,
  TrickstersBladeSection,
  RogueLevel5DailyExploitsSection,
  CleverRiposteSection,
  DeepCutSection,
  WalkingWoundedSection,
]
