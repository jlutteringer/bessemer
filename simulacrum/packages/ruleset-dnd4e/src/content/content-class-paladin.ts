import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import { ClassesSection } from '@simulacrum/ruleset-dnd4e/content/content-classes'
import * as ClassPaladin from '@simulacrum/ruleset-dnd4e/class/class-paladin'
import * as PaladinPowers from '@simulacrum/ruleset-dnd4e/class/paladin-power'

export const PaladinSection = Content.defineSection('classes/paladin', {
  parent: ClassesSection,
  content: {
    name: 'Paladin',
    description:
      '_“I am the righteous shield of Moradin and a sword in his mighty hand! I fear no evil!”_\n\nPaladins are indomitable warriors who’ve pledged their prowess to something greater than themselves. Paladins smite enemies with divine authority, bolster the courage of nearby companions, and radiate as if a beacon of inextinguishable hope. Paladins are transfigured on the field of battle, exemplars of divine ethos in action.\n\nTo you is given the responsibility to unflinchingly stand before an enemy’s charge, smiting them with your sword while protecting your allies with your sacrifice. Where others waver and wonder, your motivation is pure and simple, and your devotion is your strength. Where others scheme and steal, you take the high road, refusing to allow the illusions of temptation to dissuade you from your obligations.\n\nTake up your blessed sword and sanctified shield, brave warrior, and charge forward to hallowed glory!',
  },
})

export const PaladinClassTraitsSection = Content.linkEntity(PaladinSection, ClassPaladin.Paladin)

export const PaladinOverviewSection = Content.defineSection('classes/paladin-overview', {
  parent: PaladinSection,
  content: {
    name: 'Paladin Overview',
    description:
      '**Characteristics:** Like the [fighter](trait:fighter), you are extremely durable. You wear the best armor available, and your defenses are very high. You can force enemies to fight you rather than your weaker allies by using powers to challenge your enemies. Your ranged attack ability is not very good, but you are very capable in melee.\n\n**Religion:** Warriors wielding divine power can be found in the service of any deity, even evil or chaotic evil ones. However, the majority of paladins serve good or lawful good deities such as [Avandra](trait:deity/avandra), [Bahamut](trait:deity/bahamut), [Moradin](trait:deity/moradin), or [Pelor](trait:deity/pelor).\n\n**Races:** Most paladins are [humans](trait:race/human) or [dwarves](trait:race/dwarf). These races have strong traditions of pious warriors choosing to devote themselves to divine service. Dragonborn and half-elves make good paladins, too.',
  },
})

export const CreatingAPaladinSection = Content.defineSection('classes/creating-a-paladin', {
  parent: PaladinSection,
  content: {
    name: 'Creating a Paladin',
    description:
      'Paladins rely on [Strength](characteristic:strength), [Charisma](characteristic:charisma), and [Wisdom](characteristic:wisdom) for most of their key abilities and powers. [Constitution](characteristic:constitution) is useful as well, although no paladin powers are specifically based on Constitution. Paladins start with two common builds: the avenging paladin and the protecting paladin.',
  },
})

export const AvengingPaladinSection = Content.defineSection('classes/avenging-paladin', {
  parent: CreatingAPaladinSection,
  content: {
    name: 'Avenging Paladin',
    description:
      'You burn with the desire to punish the wicked and smite the unbelievers. In your view, the best way to safeguard your allies is to destroy your enemies with divine power and overwhelming attacks. Choose [Strength](characteristic:strength) as your highest ability score, since your most damaging attacks are based on Strength. [Charisma](characteristic:charisma) should be your second-best ability score, and [Wisdom](characteristic:wisdom) your third. Consider wielding a big two-handed weapon such as a greatsword or greataxe, and choose powers that deliver the highest amount of damage.\n\n**Suggested Feat:** [Power Attack](trait:feat/power-attack) (Human Feat: [Human Perseverance](trait:feat/human-perseverance))\n\n**Suggested Skills:** [Endurance](characteristic:skill/endurance), [Heal](characteristic:skill/heal), [Intimidate](characteristic:skill/intimidate), [Religion](characteristic:skill/religion)\n\n**Suggested At-Will Powers:** _[holy strike](ability:paladin/power/holy-strike)_, _[valiant strike](ability:paladin/power/valiant-strike)_\n\n**Suggested Encounter Power:** _[radiant smite](ability:paladin/power/radiant-smite)_\n\n**Suggested Daily Power:** _[paladin’s judgment](ability:paladin/power/paladins-judgment)_',
  },
})

export const ProtectingPaladinSection = Content.defineSection('classes/protecting-paladin', {
  parent: CreatingAPaladinSection,
  content: {
    name: 'Protecting Paladin',
    description:
      'You emphasize defense, guarding your allies, and healing and bolstering them with a few of your powers. You do not deal as much damage as the avenging paladin, but you are better at dealing with a wider array of situations. Your best ability score should be [Charisma](characteristic:charisma). Choose [Strength](characteristic:strength) for your second-best score (you’ll want a few Strength-based attacks), and [Wisdom](characteristic:wisdom) as your third-best score. The protecting paladin works best as a shield-carrying warrior, so you should probably use a [heavy shield](ability:shield/heavy) and a one-handed weapon such as a longsword or a warhammer. Select powers that help your allies, along with a few damage-dealing powers for when the need arises.\n\n**Suggested Feat:** [Healing Hands](trait:feat/healing-hands) (Human feat: [Action Surge](trait:feat/action-surge))\n\n**Suggested Skills:** [Diplomacy](characteristic:skill/diplomacy), [Heal](characteristic:skill/heal), [Insight](characteristic:skill/insight), [Religion](characteristic:skill/religion)\n\n**Suggested At-Will Powers:** _[bolstering strike](ability:paladin/power/bolstering-strike)_, _[enfeebling strike](ability:paladin/power/enfeebling-strike)_\n\n**Suggested Encounter Power:** _[shielding smite](ability:paladin/power/shielding-smite)_\n\n**Suggested Daily Power:** _[radiant delirium](ability:paladin/power/radiant-delirium)_',
  },
})

export const PaladinImplementSection = Content.defineSection('classes/paladin-implement', {
  parent: PaladinSection,
  content: {
    name: 'Implement',
    description:
      'Paladins make use of holy symbols to help channel and direct their divine powers. A paladin wearing or holding a magic holy symbol can add its enhancement bonus to the attack rolls and the damage rolls of paladin powers, as well as paladin paragon path powers, that have the implement keyword. Without a holy symbol, a paladin can still use these powers, but he or she doesn’t gain the bonus provided by the magic implement.\n\nA _holy avenger,_ a special magic weapon, can also be used as an implement for paladin powers, as well as paladin paragon path powers. These weapons are highly sought after by paladins.',
  },
})

export const PaladinsAndDeitiesSection = Content.defineSection('classes/paladins-and-deities', {
  parent: PaladinSection,
  content: {
    name: 'Paladins and Deities',
    description:
      'As fervent crusaders in their chosen cause, paladins must choose a deity. Paladins choose a specific faith to serve, as well as an alignment. You must choose an alignment identical to the alignment of your patron deity; a paladin of a good deity must be good, a paladin of a lawful good deity must be lawful good, and a paladin of an unaligned deity must be unaligned. Evil and chaotic evil paladins do exist in the world, but they are almost always villains, not player characters.\n\n| Good, Lawful Good, and Unaligned Deities | | |\n| :--- | :--- | :--- |\n| [Avandra](trait:deity/avandra) | Good | Change, luck, trade, travel |\n| [Bahamut](trait:deity/bahamut) | Lawful Good | Justice, honor, nobility, protection |\n| [Corellon](trait:deity/corellon) | Unaligned | Arcane magic, spring, beauty, the arts |\n| [Erathis](trait:deity/erathis) | Unaligned | Civilization, invention, laws |\n| [Ioun](trait:deity/ioun) | Unaligned | Knowledge, prophecy, skill |\n| [Kord](trait:deity/kord) | Unaligned | Storms, strength, battle |\n| [Melora](trait:deity/melora) | Unaligned | Wilderness, sea |\n| [Moradin](trait:deity/moradin) | Lawful Good | Creation, artisans, family |\n| [Pelor](trait:deity/pelor) | Good | Sun, summer, agriculture, time |\n| [Raven Queen](trait:deity/raven-queen) | Unaligned | Death, fate, winter |\n| [Sehanine](trait:deity/sehanine) | Unaligned | Trickery, moon, love, autumn |\n\nPaladins are not granted their powers directly by their deity, but instead through various rites performed when they first become paladins. Most of these rites involve days of prayer, vigils, tests and trials, and ritual purification followed by a knighting ceremony, but each faith has its own methods. This ceremony of investiture gives a paladin the ability to wield divine powers. Once initiated, the paladin is a paladin forevermore. How justly, honorably, or compassionately the paladin wields those powers from that day forward is up to him, and paladins who stray too far from the tenets of their faith are punished by other members of the faithful.',
  },
})

export const PaladinClassFeaturesSection = Content.defineSection('classes/paladin-class-features', {
  parent: PaladinSection,
  content: {
    name: 'Paladin Class Features',
    description:
      'Your armor, your shield, and your weapon are the most important tools of your trade. In addition, you have the following class features.',
  },
})

export const ChannelDivinitySection = Content.linkEntity(PaladinClassFeaturesSection, ClassPaladin.ChannelDivinityFeature)
export const DivineChallengeSection = Content.linkEntity(PaladinClassFeaturesSection, ClassPaladin.DivineChallengeFeature)
export const LayOnHandsSection = Content.linkEntity(PaladinClassFeaturesSection, ClassPaladin.LayOnHandsFeature)

export const PaladinPowersSection = Content.defineSection('classes/paladin-powers', {
  parent: PaladinSection,
  content: {
    name: 'Paladin Powers',
    description:
      'Paladin powers are called prayers. In battle, paladins rely on their deities to strengthen their sword-arms and fortify them against the attacks of their enemies.',
  },
})

export const PaladinClassFeaturePowersSection = Content.defineSection('classes/paladin-class-feature-powers', {
  parent: PaladinPowersSection,
  content: {
    name: 'Class Features',
    description:
      'The paladin has three class features that work like powers: [Channel Divinity](trait:paladin/channel-divinity), _[divine challenge](ability:paladin/power/divine-challenge)_, and _[lay on hands](ability:paladin/power/lay-on-hands)_. The Channel Divinity class feature encompasses multiple powers, two of which (_[divine mettle](ability:paladin/power/divine-mettle)_ and _[divine strength](ability:paladin/power/divine-strength)_) are presented below.',
  },
})

export const DivineMettleSection = Content.linkEntity(PaladinClassFeaturePowersSection, ClassPaladin.DivineMettle)
export const DivineStrengthSection = Content.linkEntity(PaladinClassFeaturePowersSection, ClassPaladin.DivineStrength)
export const DivineChallengePowerSection = Content.linkEntity(PaladinClassFeaturePowersSection, ClassPaladin.DivineChallenge)
export const LayOnHandsPowerSection = Content.linkEntity(PaladinClassFeaturePowersSection, ClassPaladin.LayOnHands)

export const Level1AtWillPrayersSection = Content.defineSection('classes/paladin-level-1-at-will-prayers', {
  parent: PaladinPowersSection,
  content: { name: 'Level 1 At-Will Prayers' },
})

export const BolsteringStrikeSection = Content.linkEntity(Level1AtWillPrayersSection, PaladinPowers.BolsteringStrike)
export const EnfeeblingStrikeSection = Content.linkEntity(Level1AtWillPrayersSection, PaladinPowers.EnfeeblingStrike)
export const HolyStrikeSection = Content.linkEntity(Level1AtWillPrayersSection, PaladinPowers.HolyStrike)
export const ValiantStrikeSection = Content.linkEntity(Level1AtWillPrayersSection, PaladinPowers.ValiantStrike)

export const Level1EncounterPrayersSection = Content.defineSection('classes/paladin-level-1-encounter-prayers', {
  parent: PaladinPowersSection,
  content: { name: 'Level 1 Encounter Prayers' },
})

export const FearsomeSmiteSection = Content.linkEntity(Level1EncounterPrayersSection, PaladinPowers.FearsomeSmite)
export const PiercingSmiteSection = Content.linkEntity(Level1EncounterPrayersSection, PaladinPowers.PiercingSmite)
export const RadiantSmiteSection = Content.linkEntity(Level1EncounterPrayersSection, PaladinPowers.RadiantSmite)
export const ShieldingSmiteSection = Content.linkEntity(Level1EncounterPrayersSection, PaladinPowers.ShieldingSmite)

export const Level1DailyPrayersSection = Content.defineSection('classes/paladin-level-1-daily-prayers', {
  parent: PaladinPowersSection,
  content: { name: 'Level 1 Daily Prayers' },
})

export const OnPainOfDeathSection = Content.linkEntity(Level1DailyPrayersSection, PaladinPowers.OnPainOfDeath)
export const PaladinsJudgmentSection = Content.linkEntity(Level1DailyPrayersSection, PaladinPowers.PaladinsJudgment)
export const RadiantDeliriumSection = Content.linkEntity(Level1DailyPrayersSection, PaladinPowers.RadiantDelirium)

export const Level2UtilityPrayersSection = Content.defineSection('classes/paladin-level-2-utility-prayers', {
  parent: PaladinPowersSection,
  content: { name: 'Level 2 Utility Prayers' },
})

export const AstralSpeechSection = Content.linkEntity(Level2UtilityPrayersSection, PaladinPowers.AstralSpeech)
export const MartyrsBlessingSection = Content.linkEntity(Level2UtilityPrayersSection, PaladinPowers.MartyrsBlessing)
export const SacredCircleSection = Content.linkEntity(Level2UtilityPrayersSection, PaladinPowers.SacredCircle)

export const Level3EncounterPrayersSection = Content.defineSection('classes/paladin-level-3-encounter-prayers', {
  parent: PaladinPowersSection,
  content: { name: 'Level 3 Encounter Prayers' },
})

export const ArcingSmiteSection = Content.linkEntity(Level3EncounterPrayersSection, PaladinPowers.ArcingSmite)
export const InvigoratingSmiteSection = Content.linkEntity(Level3EncounterPrayersSection, PaladinPowers.InvigoratingSmite)
export const RighteousSmiteSection = Content.linkEntity(Level3EncounterPrayersSection, PaladinPowers.RighteousSmite)
export const StaggeringSmiteSection = Content.linkEntity(Level3EncounterPrayersSection, PaladinPowers.StaggeringSmite)

export const Level5DailyPrayersSection = Content.defineSection('classes/paladin-level-5-daily-prayers', {
  parent: PaladinPowersSection,
  content: { name: 'Level 5 Daily Prayers' },
})

export const HallowedCircleSection = Content.linkEntity(Level5DailyPrayersSection, PaladinPowers.HallowedCircle)
export const MartyrsRetributionSection = Content.linkEntity(Level5DailyPrayersSection, PaladinPowers.MartyrsRetribution)
export const SignOfVulnerabilitySection = Content.linkEntity(Level5DailyPrayersSection, PaladinPowers.SignOfVulnerability)

export const PaladinContent: Array<ContentSection> = [
  PaladinSection,
  PaladinClassTraitsSection,
  PaladinOverviewSection,
  CreatingAPaladinSection,
  AvengingPaladinSection,
  ProtectingPaladinSection,
  PaladinImplementSection,
  PaladinsAndDeitiesSection,
  PaladinClassFeaturesSection,
  ChannelDivinitySection,
  DivineChallengeSection,
  LayOnHandsSection,
  PaladinPowersSection,
  PaladinClassFeaturePowersSection,
  DivineMettleSection,
  DivineStrengthSection,
  DivineChallengePowerSection,
  LayOnHandsPowerSection,
  Level1AtWillPrayersSection,
  BolsteringStrikeSection,
  EnfeeblingStrikeSection,
  HolyStrikeSection,
  ValiantStrikeSection,
  Level1EncounterPrayersSection,
  FearsomeSmiteSection,
  PiercingSmiteSection,
  RadiantSmiteSection,
  ShieldingSmiteSection,
  Level1DailyPrayersSection,
  OnPainOfDeathSection,
  PaladinsJudgmentSection,
  RadiantDeliriumSection,
  Level2UtilityPrayersSection,
  AstralSpeechSection,
  MartyrsBlessingSection,
  SacredCircleSection,
  Level3EncounterPrayersSection,
  ArcingSmiteSection,
  InvigoratingSmiteSection,
  RighteousSmiteSection,
  StaggeringSmiteSection,
  Level5DailyPrayersSection,
  HallowedCircleSection,
  MartyrsRetributionSection,
  SignOfVulnerabilitySection,
]
