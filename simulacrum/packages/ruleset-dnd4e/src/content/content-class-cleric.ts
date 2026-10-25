import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import { ClassesSection } from '@simulacrum/ruleset-dnd4e/content/content-classes'
import * as ClassCleric from '@simulacrum/ruleset-dnd4e/class/class-cleric'
import * as ClericPowers from '@simulacrum/ruleset-dnd4e/class/cleric-power'

export const ClericSection = Content.defineSection('classes/cleric', {
  parent: ClassesSection,
  content: {
    name: 'Cleric',
    description:
      '_“Have courage, my friends! Pelor favors us today!”_\n\nClerics are battle leaders who are invested with divine power. They blast foes with magical prayers, bolster and heal companions, and lead the way to victory with a mace in one hand and a holy symbol in the other. Clerics run the gamut from humble servants of the common folk to ruthless enforcers of evil gods.\n\nAs a cleric, the deity (or deities) you choose to revere goes a long way toward defining you, or at least how other people in the world see you. You could be a platinum-garbed envoy of [Bahamut](trait:deity/bahamut) seeking justice throughout the land, a shadowy follower of [Sehanine](trait:deity/sehanine) with a roguish streak, a burly disciple of [Kord](trait:deity/kord) who believes the virtue of strength is sufficient for all challenges, or a dwarf cleric of [Moradin](trait:deity/moradin) bringing honor to the denizens of your mountain home.\n\nWill you protect what is sacred to your god, quest for legendary holy artifacts, pursue a life of evangelical adventuring, or attempt all these deeds and more?',
  },
})

export const ClericClassTraitsSection = Content.linkEntity(ClericSection, ClassCleric.Cleric)

export const ClericOverviewSection = Content.defineSection('classes/cleric-overview', {
  parent: ClericSection,
  content: {
    name: 'Cleric Overview',
    description:
      '**Characteristics:** You are an extremely good healer. You have a mix of melee and ranged powers. Most of your attacks deal only moderate damage, but they safeguard your allies or provide bonuses to their attacks.\n\n**Religion:** A cleric can choose to worship any deity, but steer clear of choosing an evil or chaotic evil deity unless you have permission from your DM to choose one.\n\n**Races:** [Humans](trait:race/human) and [dwarves](trait:race/dwarf) make ideal clerics. Elves, half-elves, and dragonborn are good clerics too, but they rarely have the same values of piety and reverence found in many human and dwarven cultures. Certain gods attract a preponderance of clerics of a particular race—for example, many (but not all) clerics of [Moradin](trait:deity/moradin) are dwarves—but in general, all races respect all gods to at least some degree. The race you play and the deity your character worships have little effect on your cleric’s ability to utilize divine powers.',
  },
})

export const CreatingAClericSection = Content.defineSection('classes/creating-a-cleric', {
  parent: ClericSection,
  content: {
    name: 'Creating a Cleric',
    description:
      'The cleric has two basic builds to start: the battle cleric and the devoted cleric. Clerics rely on [Strength](characteristic:strength) for their melee attacks and [Wisdom](characteristic:wisdom) for their healing and non-melee prayers. [Charisma](characteristic:charisma) also aids their abilities.',
  },
})

export const BattleClericSection = Content.defineSection('classes/battle-cleric', {
  parent: CreatingAClericSection,
  content: {
    name: 'Battle Cleric',
    description:
      'If you choose to concentrate on melee, you find a good assortment of strikes to your liking. To achieve this build, make [Strength](characteristic:strength) your primary score. Make [Wisdom](characteristic:wisdom) your secondary score and assign [Charisma](characteristic:charisma) as your tertiary score. Make sure to concentrate on powers that work with melee attacks, since these play to your key ability scores.\n\n**Suggested Feat:** [Weapon Focus](trait:feat/weapon-focus) (Human feat: [Action Surge](trait:feat/action-surge))\n\n**Suggested Skills:** [Diplomacy](characteristic:skill/diplomacy), [Heal](characteristic:skill/heal), [Insight](characteristic:skill/insight), [Religion](characteristic:skill/religion)\n\n**Suggested At-Will Powers:** _[righteous brand](ability:cleric/power/righteous-brand)_, _[priest’s shield](ability:cleric/power/priests-shield)_\n\n**Suggested Encounter Power:** _[wrathful thunder](ability:cleric/power/wrathful-thunder)_\n\n**Suggested Daily Power:** _[avenging flame](ability:cleric/power/avenging-flame)_',
  },
})

export const DevotedClericSection = Content.defineSection('classes/devoted-cleric', {
  parent: CreatingAClericSection,
  content: {
    name: 'Devoted Cleric',
    description:
      'With this build, you choose to stand back and concentrate your abilities on keeping your fellow adventurers healthy and optimized. To this end, choose powers that grant bonuses and healing, such as _[divine glow](ability:cleric/power/divine-glow)_ and _[beacon of hope](ability:cleric/power/beacon-of-hope)_. Assign your highest ability score to [Wisdom](characteristic:wisdom), with [Charisma](characteristic:charisma) secondary and [Strength](characteristic:strength) tertiary. Make sure to concentrate on powers that use Wisdom for attacks, since this is your highest ability score.\n\n**Suggested Feat:** Channel Divinity feat associated with your deity (Human feat: [Human Perseverance](trait:feat/human-perseverance))\n\n**Suggested Skills:** [Arcana](characteristic:skill/arcana), [Heal](characteristic:skill/heal), [History](characteristic:skill/history), [Religion](characteristic:skill/religion)\n\n**Suggested At-Will Powers:** _[lance of faith](ability:cleric/power/lance-of-faith)_, _[sacred flame](ability:cleric/power/sacred-flame)_\n\n**Suggested Encounter Power:** _[healing strike](ability:cleric/power/healing-strike)_\n\n**Suggested Daily Power:** _[beacon of hope](ability:cleric/power/beacon-of-hope)_',
  },
})

export const ClericClassFeaturesSection = Content.defineSection('classes/cleric-class-features', {
  parent: ClericSection,
  content: {
    name: 'Cleric Class Features',
    description:
      'Clerics are capable combatants who wield simple weapons in battle—maces and similar weapons have long been symbols of divine authority. In addition, all clerics have the class features described below.',
  },
})

export const ChannelDivinitySection = Content.linkEntity(ClericClassFeaturesSection, ClassCleric.ClericChannelDivinity)
export const HealersLoreSection = Content.linkEntity(ClericClassFeaturesSection, ClassCleric.HealersLore)
export const HealingWordFeatureSection = Content.linkEntity(ClericClassFeaturesSection, ClassCleric.HealingWordFeature)
export const RitualCastingSection = Content.linkEntity(ClericClassFeaturesSection, ClassCleric.RitualCasting)

export const ClericsAndDeitiesSection = Content.defineSection('classes/clerics-and-deities', {
  parent: ClericSection,
  content: {
    name: 'Clerics and Deities',
    description:
      'All clerics choose a specific faith to which they devote themselves. Usually this faith is the worship of a specific patron deity—for example, [Moradin](trait:deity/moradin), [Pelor](trait:deity/pelor), or [Erathis](trait:deity/erathis). Sometimes clerics are devoted to churches that venerate groups of deities or even philosophies.\n\nAs a cleric, your deity does not directly grant you powers. Instead, your ordination or investiture as a cleric grants you the ability to wield divine powers. Clerics are usually formally ordained by existing clerics who perform a special ritual to do so, but on rare occasions a deity moves to directly ordain a worthy worshiper without any sort of priestly hierarchy involved. What you do with your powers once you are ordained is up to you, although if you flagrantly and openly defy your deity’s tenets, you quickly earn the enmity of the faithful.\n\n**Good, Lawful Good, and Unaligned Deities**\n\n| Deity | Alignment | Areas of Influence |\n| :--- | :--- | :--- |\n| [Avandra](trait:deity/avandra) | Good | Change, luck, trade, travel |\n| [Bahamut](trait:deity/bahamut) | Lawful good | Justice, honor, nobility, protection |\n| [Corellon](trait:deity/corellon) | Unaligned | Arcane magic, spring, beauty, the arts |\n| [Erathis](trait:deity/erathis) | Unaligned | Civilization, invention, laws |\n| [Ioun](trait:deity/ioun) | Unaligned | Knowledge, prophecy, skill |\n| [Kord](trait:deity/kord) | Unaligned | Storms, strength, battle |\n| [Melora](trait:deity/melora) | Unaligned | Wilderness, sea |\n| [Moradin](trait:deity/moradin) | Lawful good | Creation, artisans, family |\n| [Pelor](trait:deity/pelor) | Good | Sun, summer, agriculture, time |\n| [Raven Queen](trait:deity/raven-queen) | Unaligned | Death, fate, winter |\n| [Sehanine](trait:deity/sehanine) | Unaligned | Trickery, moon, love, autumn |\n\n**Evil and Chaotic Evil Deities**\n\n| Deity | Alignment | Areas of Influence |\n| :--- | :--- | :--- |\n| Asmodeus | Evil | Power, domination, tyranny |\n| Bane | Evil | War, conquest |\n| Gruumsh | Chaotic evil | Turmoil, destruction |\n| Lolth | Chaotic evil | Spiders, shadows, lies |\n| Tiamat | Evil | Wealth, greed, vengeance |\n| Torog | Evil | Underdark, imprisonment |\n| Vecna | Evil | Undeath, secrets |\n| Zehir | Evil | Darkness, poison, serpents |\n\nYou must choose a deity compatible with your alignment: Good clerics serve good deities, lawful good clerics serve lawful good deities, and so on. If a deity is unaligned, your alignment doesn’t matter, so a deity such as Melora has good, lawful good, evil, chaotic evil, and unaligned clerics in her service. Similarly, if you’re unaligned, you can serve any god. For example, Pelor is served by both good clerics and unaligned clerics, but never by evil, chaotic evil, or lawful good clerics.\n\nFor most games, you should choose a good, lawful good, or unaligned deity for your cleric. Ask your Dungeon Master before you select an evil or chaotic evil deity.',
  },
})

export const ClericImplementSection = Content.defineSection('classes/cleric-implement', {
  parent: ClericSection,
  content: {
    name: 'Implement',
    description:
      'Clerics make use of holy symbols to help channel and direct their divine powers. A cleric wearing or holding a magic holy symbol can add its enhancement bonus to the attack rolls and the damage rolls of cleric powers, as well as cleric paragon path powers, that have the implement keyword. Without a holy symbol, a cleric can still use these powers, but he or she doesn’t gain the bonus provided by the magic implement.',
  },
})

export const ClericPowersSection = Content.defineSection('classes/cleric-powers', {
  parent: ClericSection,
  content: {
    name: 'Cleric Powers',
    description:
      'Your cleric powers are called prayers. Some are better for the battle cleric and some are better for the devoted cleric, but a cleric can choose any power when making a power selection.',
  },
})

export const ClericClassFeaturePowersSection = Content.defineSection('classes/cleric-class-feature-powers', {
  parent: ClericPowersSection,
  content: {
    name: 'Class Features',
    description:
      'The cleric has two class features that work like powers: [Channel Divinity](trait:cleric/channel-divinity) and _[healing word](ability:cleric/feature/healing-word)_. The Channel Divinity class feature encompasses multiple powers, two of which (_[divine fortune](ability:cleric/feature/divine-fortune)_ and _[turn undead](ability:cleric/feature/turn-undead)_) are presented below.',
  },
})

export const DivineFortuneSection = Content.linkEntity(ClericClassFeaturePowersSection, ClassCleric.DivineFortune)
export const TurnUndeadSection = Content.linkEntity(ClericClassFeaturePowersSection, ClassCleric.TurnUndead)
export const HealingWordSection = Content.linkEntity(ClericClassFeaturePowersSection, ClassCleric.HealingWord)

export const Level1AtWillPrayersSection = Content.defineSection('classes/cleric-level-1-at-will-prayers', {
  parent: ClericPowersSection,
  content: { name: 'Level 1 At-Will Prayers' },
})

export const LanceOfFaithSection = Content.linkEntity(Level1AtWillPrayersSection, ClericPowers.LanceOfFaith)
export const PriestsShieldSection = Content.linkEntity(Level1AtWillPrayersSection, ClericPowers.PriestsShield)
export const RighteousBrandSection = Content.linkEntity(Level1AtWillPrayersSection, ClericPowers.RighteousBrand)
export const SacredFlameSection = Content.linkEntity(Level1AtWillPrayersSection, ClericPowers.SacredFlame)

export const Level1EncounterPrayersSection = Content.defineSection('classes/cleric-level-1-encounter-prayers', {
  parent: ClericPowersSection,
  content: { name: 'Level 1 Encounter Prayers' },
})

export const CauseFearSection = Content.linkEntity(Level1EncounterPrayersSection, ClericPowers.CauseFear)
export const DivineGlowSection = Content.linkEntity(Level1EncounterPrayersSection, ClericPowers.DivineGlow)
export const HealingStrikeSection = Content.linkEntity(Level1EncounterPrayersSection, ClericPowers.HealingStrike)
export const WrathfulThunderSection = Content.linkEntity(Level1EncounterPrayersSection, ClericPowers.WrathfulThunder)

export const Level1DailyPrayersSection = Content.defineSection('classes/cleric-level-1-daily-prayers', {
  parent: ClericPowersSection,
  content: { name: 'Level 1 Daily Prayers' },
})

export const AvengingFlameSection = Content.linkEntity(Level1DailyPrayersSection, ClericPowers.AvengingFlame)
export const BeaconOfHopeSection = Content.linkEntity(Level1DailyPrayersSection, ClericPowers.BeaconOfHope)
export const CascadeOfLightSection = Content.linkEntity(Level1DailyPrayersSection, ClericPowers.CascadeOfLight)
export const GuardianOfFaithSection = Content.linkEntity(Level1DailyPrayersSection, ClericPowers.GuardianOfFaith)

export const Level2UtilityPrayersSection = Content.defineSection('classes/cleric-level-2-utility-prayers', {
  parent: ClericPowersSection,
  content: { name: 'Level 2 Utility Prayers' },
})

export const BlessSection = Content.linkEntity(Level2UtilityPrayersSection, ClericPowers.Bless)
export const CureLightWoundsSection = Content.linkEntity(Level2UtilityPrayersSection, ClericPowers.CureLightWounds)
export const DivineAidSection = Content.linkEntity(Level2UtilityPrayersSection, ClericPowers.DivineAid)
export const SanctuarySection = Content.linkEntity(Level2UtilityPrayersSection, ClericPowers.Sanctuary)
export const ShieldOfFaithSection = Content.linkEntity(Level2UtilityPrayersSection, ClericPowers.ShieldOfFaith)

export const Level3EncounterPrayersSection = Content.defineSection('classes/cleric-level-3-encounter-prayers', {
  parent: ClericPowersSection,
  content: { name: 'Level 3 Encounter Prayers' },
})

export const BlazingBeaconSection = Content.linkEntity(Level3EncounterPrayersSection, ClericPowers.BlazingBeacon)
export const CommandSection = Content.linkEntity(Level3EncounterPrayersSection, ClericPowers.Command)
export const DauntingLightSection = Content.linkEntity(Level3EncounterPrayersSection, ClericPowers.DauntingLight)
export const SplitTheSkySection = Content.linkEntity(Level3EncounterPrayersSection, ClericPowers.SplitTheSky)

export const Level5DailyPrayersSection = Content.defineSection('classes/cleric-level-5-daily-prayers', {
  parent: ClericPowersSection,
  content: { name: 'Level 5 Daily Prayers' },
})

export const ConsecratedGroundSection = Content.linkEntity(Level5DailyPrayersSection, ClericPowers.ConsecratedGround)
export const RuneOfPeaceSection = Content.linkEntity(Level5DailyPrayersSection, ClericPowers.RuneOfPeace)
export const SpiritualWeaponSection = Content.linkEntity(Level5DailyPrayersSection, ClericPowers.SpiritualWeapon)
export const WeaponOfTheGodsSection = Content.linkEntity(Level5DailyPrayersSection, ClericPowers.WeaponOfTheGods)

export const ClericContent: Array<ContentSection> = [
  ClericSection,
  ClericClassTraitsSection,
  ClericOverviewSection,
  CreatingAClericSection,
  BattleClericSection,
  DevotedClericSection,
  ClericClassFeaturesSection,
  ChannelDivinitySection,
  HealersLoreSection,
  HealingWordFeatureSection,
  RitualCastingSection,
  ClericsAndDeitiesSection,
  ClericImplementSection,
  ClericPowersSection,
  ClericClassFeaturePowersSection,
  DivineFortuneSection,
  TurnUndeadSection,
  HealingWordSection,
  Level1AtWillPrayersSection,
  LanceOfFaithSection,
  PriestsShieldSection,
  RighteousBrandSection,
  SacredFlameSection,
  Level1EncounterPrayersSection,
  CauseFearSection,
  DivineGlowSection,
  HealingStrikeSection,
  WrathfulThunderSection,
  Level1DailyPrayersSection,
  AvengingFlameSection,
  BeaconOfHopeSection,
  CascadeOfLightSection,
  GuardianOfFaithSection,
  Level2UtilityPrayersSection,
  BlessSection,
  CureLightWoundsSection,
  DivineAidSection,
  SanctuarySection,
  ShieldOfFaithSection,
  Level3EncounterPrayersSection,
  BlazingBeaconSection,
  CommandSection,
  DauntingLightSection,
  SplitTheSkySection,
  Level5DailyPrayersSection,
  ConsecratedGroundSection,
  RuneOfPeaceSection,
  SpiritualWeaponSection,
  WeaponOfTheGodsSection,
]
