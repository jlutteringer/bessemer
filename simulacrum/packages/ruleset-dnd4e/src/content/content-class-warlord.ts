import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import { ClassesSection } from '@simulacrum/ruleset-dnd4e/content/content-classes'
import * as ClassWarlord from '@simulacrum/ruleset-dnd4e/class/class-warlord'
import * as WarlordPowers from '@simulacrum/ruleset-dnd4e/class/warlord-power'

export const WarlordSection = Content.defineSection('classes/warlord', {
  parent: ClassesSection,
  content: {
    name: 'Warlord',
    description:
      '_“Onward to victory! They cannot stand before us!”_\n\n' +
      'Warlords are accomplished and competent battle leaders. Warlords stand on the front line issuing commands and bolstering their allies while leading the battle with weapon in hand. Warlords know how to rally a team to win a fight.\n\n' +
      'Your ability to lead others to victory is a direct result of your history. You could be a minor warchief looking to make a name for yourself, a pious knight-commander on leave from your militant order, a youthful noble eager to apply years of training to life outside the castle walls, a calculating mercenary captain, or a courageous marshal of the borderlands who fights to protect the frontier. Regardless of your background, you are a skillful warrior with an uncanny gift for leadership.\n\n' +
      'The weight of your armor is not a hindrance; it is a familiar comfort. The worn weapon grip molds to your hand as if it were a natural extension of your arm. It’s time to fight and to lead.',
  },
})

export const WarlordClassTraitsSection = Content.linkEntity(WarlordSection, ClassWarlord.Warlord)

export const WarlordOverviewSection = Content.defineSection('classes/warlord-overview', {
  parent: WarlordSection,
  content: {
    name: 'Warlord Overview',
    description:
      '**Characteristics:** You are a strong warrior in melee, able to stand beside the fighter or paladin in your party. Your powers grant allies immediate actions (usually moves or attacks), provide bonuses to attack or defense, and grant healing in the midst of battle.\n\n' +
      '**Religion:** Warlords favor martial gods such as Bahamut and Kord, and those who have a particular eye for strategy or leadership esteem Ioun or Erathis. Evil and unaligned warlords often worship Bane.\n\n' +
      '**Races:** Dragonborn make excellent inspiring warlords, and half-elves are equally inspiring leaders. Eladrin are skilled tactical warlords. Tiefling warlords are versatile, combining powers from both builds, and humans can excel at either path.',
  },
})

export const CreatingAWarlordSection = Content.defineSection('classes/creating-a-warlord', {
  parent: WarlordSection,
  content: {
    name: 'Creating a Warlord',
    description:
      'The two warlord builds are inspiring warlord and tactical warlord. Some warlords lean more on their [Charisma](characteristic:charisma), while others rely on [Intelligence](characteristic:intelligence), but [Strength](characteristic:strength) is important to every warlord.',
  },
})

export const InspiringWarlordSection = Content.defineSection('classes/inspiring-warlord', {
  parent: CreatingAWarlordSection,
  content: {
    name: 'Inspiring Warlord',
    description:
      'You lead by exhortation, encouragement, and inspiration. Your powers help your allies find new surges of courage and endurance within themselves, helping them heal, shrug off debilitating conditions, and defend themselves from attack. Your attack powers rely on [Strength](characteristic:strength), so that should be your best ability score. The benefits you give your allies, though, depend almost entirely on [Charisma](characteristic:charisma), so make that second best. [Intelligence](characteristic:intelligence) is your best third choice, so you can dabble in other warlord powers and to help your [Reflex](characteristic:reflex) defense. Select powers that make the best use of your high Charisma score.\n\n' +
      '**Suggested Feat:** [Inspired Recovery](trait:feat/inspired-recovery) (Human feat: [Toughness](trait:feat/toughness))\n\n' +
      '**Suggested Skills:** [Athletics](characteristic:skill/athletics), [Diplomacy](characteristic:skill/diplomacy), [Heal](characteristic:skill/heal), [History](characteristic:skill/history)\n\n' +
      '**Suggested At-Will Powers:** _[commander’s strike](ability:warlord/power/commanders-strike)_, _[furious smash](ability:warlord/power/furious-smash)_\n\n' +
      '**Suggested Encounter Power:** _[guarding attack](ability:warlord/power/guarding-attack)_\n\n' +
      '**Suggested Daily Power:** _[bastion of defense](ability:warlord/power/bastion-of-defense)_',
  },
})

export const TacticalWarlordSection = Content.defineSection('classes/tactical-warlord', {
  parent: CreatingAWarlordSection,
  content: {
    name: 'Tactical Warlord',
    description:
      'Your leadership takes the form of quick commands, cunning strategies, and tactical superiority. Your powers guide your allies to extra and more powerful attacks, as well as helping them move quickly in combat situations. You also assist your allies by moving your enemies around or knocking them prone. You use [Strength](characteristic:strength) for your attack powers, so make that your best ability score. [Intelligence](characteristic:intelligence) is secondary, because your Intelligence determines just how effective a leader you are. [Charisma](characteristic:charisma) should be your third best score, so you can dabble in other warlord powers and to improve your [Will](characteristic:will) defense. Select powers that make the best use of your high Intelligence score.\n\n' +
      '**Suggested Feat:** [Tactical Assault](trait:feat/tactical-assault) (Human feat: [Weapon Focus](trait:feat/weapon-focus))\n\n' +
      '**Suggested Skills:** [Endurance](characteristic:skill/endurance), [Heal](characteristic:skill/heal), [History](characteristic:skill/history), [Intimidate](characteristic:skill/intimidate)\n\n' +
      '**Suggested At-Will Powers:** _[viper’s strike](ability:warlord/power/vipers-strike)_, _[wolf pack tactics](ability:warlord/power/wolf-pack-tactics)_\n\n' +
      '**Suggested Encounter Power:** _[warlord’s favor](ability:warlord/power/warlords-favor)_\n\n' +
      '**Suggested Daily Power:** _[lead the attack](ability:warlord/power/lead-the-attack)_',
  },
})

export const WarlordClassFeaturesSection = Content.defineSection('classes/warlord-class-features', {
  parent: WarlordSection,
  content: { name: 'Warlord Class Features', description: 'All warlords have these class features.' },
})

export const CombatLeaderSection = Content.linkEntity(WarlordClassFeaturesSection, ClassWarlord.CombatLeader)

export const CommandingPresenceSection = Content.linkEntity(WarlordClassFeaturesSection, ClassWarlord.SelectCommandingPresence)

export const InspiringWordFeatureSection = Content.linkEntity(WarlordClassFeaturesSection, ClassWarlord.InspiringWordFeature)

export const WarlordPowersSection = Content.defineSection('classes/warlord-powers', {
  parent: WarlordSection,
  content: {
    name: 'Warlord Powers',
    description:
      'Your powers are martial exploits, deeds of extraordinary skill and daring learned through trial and blood-soaked error. Some powers are better for the inspiring warlord and others for the tactical warlord, but you’re free to choose any powers you like.',
  },
})

export const WarlordPowersClassFeatureSection = Content.defineSection('classes/warlord-powers-class-feature', {
  parent: WarlordPowersSection,
  content: {
    name: 'Class Feature',
    description: 'The warlord’s _[inspiring word](trait:warlord/inspiring-word)_ class feature works like a power and is presented below.',
  },
})

export const InspiringWordSection = Content.linkEntity(WarlordPowersClassFeatureSection, ClassWarlord.InspiringWord)

export const WarlordLevel1AtWillExploitsSection = Content.defineSection('classes/warlord-level-1-at-will-exploits', {
  parent: WarlordPowersSection,
  content: { name: 'Level 1 At-Will Exploits' },
})

export const CommandersStrikeSection = Content.linkEntity(WarlordLevel1AtWillExploitsSection, WarlordPowers.CommandersStrike)
export const FuriousSmashSection = Content.linkEntity(WarlordLevel1AtWillExploitsSection, WarlordPowers.FuriousSmash)
export const VipersStrikeSection = Content.linkEntity(WarlordLevel1AtWillExploitsSection, WarlordPowers.VipersStrike)
export const WolfPackTacticsSection = Content.linkEntity(WarlordLevel1AtWillExploitsSection, WarlordPowers.WolfPackTactics)

export const WarlordLevel1EncounterExploitsSection = Content.defineSection('classes/warlord-level-1-encounter-exploits', {
  parent: WarlordPowersSection,
  content: { name: 'Level 1 Encounter Exploits' },
})

export const GuardingAttackSection = Content.linkEntity(WarlordLevel1EncounterExploitsSection, WarlordPowers.GuardingAttack)
export const HammerAndAnvilSection = Content.linkEntity(WarlordLevel1EncounterExploitsSection, WarlordPowers.HammerAndAnvil)
export const LeafOnTheWindSection = Content.linkEntity(WarlordLevel1EncounterExploitsSection, WarlordPowers.LeafOnTheWind)
export const WarlordsFavorSection = Content.linkEntity(WarlordLevel1EncounterExploitsSection, WarlordPowers.WarlordsFavor)

export const WarlordLevel1DailyExploitsSection = Content.defineSection('classes/warlord-level-1-daily-exploits', {
  parent: WarlordPowersSection,
  content: { name: 'Level 1 Daily Exploits' },
})

export const BastionOfDefenseSection = Content.linkEntity(WarlordLevel1DailyExploitsSection, WarlordPowers.BastionOfDefense)
export const LeadTheAttackSection = Content.linkEntity(WarlordLevel1DailyExploitsSection, WarlordPowers.LeadTheAttack)
export const PinTheFoeSection = Content.linkEntity(WarlordLevel1DailyExploitsSection, WarlordPowers.PinTheFoe)
export const WhiteRavenOnslaughtSection = Content.linkEntity(WarlordLevel1DailyExploitsSection, WarlordPowers.WhiteRavenOnslaught)

export const WarlordLevel2UtilityExploitsSection = Content.defineSection('classes/warlord-level-2-utility-exploits', {
  parent: WarlordPowersSection,
  content: { name: 'Level 2 Utility Exploits' },
})

export const AidTheInjuredSection = Content.linkEntity(WarlordLevel2UtilityExploitsSection, WarlordPowers.AidTheInjured)
export const CrescendoOfViolenceSection = Content.linkEntity(WarlordLevel2UtilityExploitsSection, WarlordPowers.CrescendoOfViolence)
export const KnightsMoveSection = Content.linkEntity(WarlordLevel2UtilityExploitsSection, WarlordPowers.KnightsMove)
export const ShakeItOffSection = Content.linkEntity(WarlordLevel2UtilityExploitsSection, WarlordPowers.ShakeItOff)

export const WarlordLevel3EncounterExploitsSection = Content.defineSection('classes/warlord-level-3-encounter-exploits', {
  parent: WarlordPowersSection,
  content: { name: 'Level 3 Encounter Exploits' },
})

export const HoldTheLineSection = Content.linkEntity(WarlordLevel3EncounterExploitsSection, WarlordPowers.HoldTheLine)
export const InspiringWarCrySection = Content.linkEntity(WarlordLevel3EncounterExploitsSection, WarlordPowers.InspiringWarCry)
export const SteelMonsoonSection = Content.linkEntity(WarlordLevel3EncounterExploitsSection, WarlordPowers.SteelMonsoon)
export const WarlordsStrikeSection = Content.linkEntity(WarlordLevel3EncounterExploitsSection, WarlordPowers.WarlordsStrike)

export const WarlordLevel5DailyExploitsSection = Content.defineSection('classes/warlord-level-5-daily-exploits', {
  parent: WarlordPowersSection,
  content: { name: 'Level 5 Daily Exploits' },
})

export const StandTheFallenSection = Content.linkEntity(WarlordLevel5DailyExploitsSection, WarlordPowers.StandTheFallen)
export const TurningPointSection = Content.linkEntity(WarlordLevel5DailyExploitsSection, WarlordPowers.TurningPoint)
export const VillainsNightmareSection = Content.linkEntity(WarlordLevel5DailyExploitsSection, WarlordPowers.VillainsNightmare)

export const WarlordContent: Array<ContentSection> = [
  WarlordSection,
  WarlordClassTraitsSection,
  WarlordOverviewSection,
  CreatingAWarlordSection,
  InspiringWarlordSection,
  TacticalWarlordSection,
  WarlordClassFeaturesSection,
  CombatLeaderSection,
  CommandingPresenceSection,
  InspiringWordFeatureSection,
  WarlordPowersSection,
  WarlordPowersClassFeatureSection,
  InspiringWordSection,
  WarlordLevel1AtWillExploitsSection,
  CommandersStrikeSection,
  FuriousSmashSection,
  VipersStrikeSection,
  WolfPackTacticsSection,
  WarlordLevel1EncounterExploitsSection,
  GuardingAttackSection,
  HammerAndAnvilSection,
  LeafOnTheWindSection,
  WarlordsFavorSection,
  WarlordLevel1DailyExploitsSection,
  BastionOfDefenseSection,
  LeadTheAttackSection,
  PinTheFoeSection,
  WhiteRavenOnslaughtSection,
  WarlordLevel2UtilityExploitsSection,
  AidTheInjuredSection,
  CrescendoOfViolenceSection,
  KnightsMoveSection,
  ShakeItOffSection,
  WarlordLevel3EncounterExploitsSection,
  HoldTheLineSection,
  InspiringWarCrySection,
  SteelMonsoonSection,
  WarlordsStrikeSection,
  WarlordLevel5DailyExploitsSection,
  StandTheFallenSection,
  TurningPointSection,
  VillainsNightmareSection,
]
