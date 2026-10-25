import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import { ClassesSection } from '@simulacrum/ruleset-dnd4e/content/content-classes'
import * as ClassWarlock from '@simulacrum/ruleset-dnd4e/class/class-warlock'
import * as WarlockPower from '@simulacrum/ruleset-dnd4e/class/warlock-power'

export const WarlockSection = Content.defineSection('classes/warlock', {
  parent: ClassesSection,
  content: {
    name: 'Warlock',
    description:
      '_“The darkness holds no terror for me, demon! I curse you now under the Sign of Ill Omen!”_\n\nWarlocks channel arcane might wrested from primeval entities. They commune with infernal intelligences and fey spirits, scour enemies with potent blasts of eldritch power, and bedevil foes with hexing curses. Armed with esoteric secrets and dangerous lore, warlocks are clever and resourceful foes.\n\nHowever you came to your arcane knowledge, you need not accept the poor reputation warlocks sometimes endure. You could be a libram-toting scholar captivated by ominous lore, a foot-loose wanderer searching for elusive ultimate truths, a devil-touched hunter using infernal spells to eliminate evil, or even a black-clad mercenary who uses sinister trappings to discourage prying strangers and unwanted attention. On the other hand, you could be a true diabolist using your gifts to tyrannize the weak—some warlocks unfortunately are exactly that.\n\nThe pacts are complete. The rites have concluded. The signs are drawn in blood, and the seals are broken. Your destiny beckons.',
  },
})

export const WarlockOverviewSection = Content.defineSection('classes/warlock-overview', {
  parent: WarlockSection,
  content: {
    name: 'Warlock Overview',
    description:
      '**Characteristics:** You have excellent short-ranged attack ability, and your powers confuse or weaken your opponent. You can shift easily from ranged attacks to melee attacks. However, you are not very resilient and rely on powers of evasion and concealment to avoid attack.\n\n**Religion:** Warlocks favor deities of cleverness, arcane power, or secrets. These include [Corellon](trait:deity/corellon), [Ioun](trait:deity/ioun), and [Sehanine](trait:deity/sehanine). Evil warlocks often revere Asmodeus or Vecna.\n\n**Races:** [Tieflings](content:races/tiefling) are natural warlocks and are drawn to this path. [Halflings](content:races/halfling), [half-elves](content:races/half-elf), and [humans](trait:race/human) make formidable warlocks as well.',
  },
})

export const WarlockClassTraitsSection = Content.linkEntity(WarlockSection, ClassWarlock.Warlock)

export const CreatingAWarlockSection = Content.defineSection('classes/creating-a-warlock', {
  parent: WarlockSection,
  content: {
    name: 'Creating a Warlock',
    description:
      'The two basic builds of warlock are the deceptive warlock and the scourge warlock. Warlocks rely on [Charisma](characteristic:charisma), [Constitution](characteristic:constitution), and [Intelligence](characteristic:intelligence). No warlock powers or class features depend on [Strength](characteristic:strength), [Dexterity](characteristic:dexterity), or [Wisdom](characteristic:wisdom).',
  },
})

export const DeceptiveWarlockSection = Content.defineSection('classes/deceptive-warlock', {
  parent: CreatingAWarlockSection,
  content: {
    name: 'Deceptive Warlock',
    description:
      'You prefer spells that deal a little less damage, but that inflict a variety of penalties and negative conditions on your foe. You’d rather fight at range and avoid getting caught in close-up battles. Most of your attack powers depend on [Charisma](characteristic:charisma), so that should be your best score. Many of your powers receive a bonus if you have a good [Intelligence](characteristic:intelligence) score, so that should be your second-best score. [Constitution](characteristic:constitution) should be your third choice since you might want to choose some Constitution-based powers. You need it for a good [Fortitude](characteristic:fortitude) defense anyway.\n\nDeceptive warlocks should choose the [fey pact](trait:warlock/pact/fey) or the [star pact](trait:warlock/pact/star) (see “[Class Features](content:classes/warlock-class-features)”).\n\n**Suggested Feat:** [Improved Misty Step](trait:feat/improved-misty-step) (Human feat: [Human Perseverance](trait:feat/human-perseverance))\n\n**Suggested Skills:** [Arcana](characteristic:skill/arcana), [Bluff](characteristic:skill/bluff), [Insight](characteristic:skill/insight), [Thievery](characteristic:skill/thievery)\n\n**Suggested At-Will Powers:** [eldritch blast](ability:warlock/power/eldritch-blast), [eyebite](ability:warlock/power/eyebite)\n\n**Suggested Encounter Power:** [witchfire](ability:warlock/power/witchfire)\n\n**Suggested Daily Power:** [curse of the dark dream](ability:warlock/power/curse-of-the-dark-dream)',
  },
})

export const ScourgeWarlockSection = Content.defineSection('classes/scourge-warlock', {
  parent: CreatingAWarlockSection,
  content: {
    name: 'Scourge Warlock',
    description:
      'No subtlety here—you want to deal damage. You’re tougher than the deceptive warlock, and you’ve got powers to help you attack and defend in melee, as well as excellent ranged attacks. Your best attack powers depend on [Constitution](characteristic:constitution)—make that your best ability score. Choose [Intelligence](characteristic:intelligence) second because it provides special bonuses to many of your powers and improves your [Reflex](characteristic:reflex) defense and [AC](characteristic:armor-class), too. [Charisma](characteristic:charisma) is clearly your third choice.\n\nScourge warlocks should choose the [infernal pact](trait:warlock/pact/infernal) or the [star pact](trait:warlock/pact/star) (see “[Class Features](content:classes/warlock-class-features)”).\n\n**Suggested Feat:** [Improved Dark One’s Blessing](trait:feat/improved-dark-ones-blessing) (Human feat: [Action Surge](trait:feat/action-surge))\n\n**Suggested Skills:** [Arcana](characteristic:skill/arcana), [History](characteristic:skill/history), [Intimidate](characteristic:skill/intimidate), [Streetwise](characteristic:skill/streetwise)\n\n**Suggested At-Will Powers:** [eldritch blast](ability:warlock/power/eldritch-blast), [hellish rebuke](ability:warlock/power/hellish-rebuke)\n\n**Suggested Encounter Power:** [vampiric embrace](ability:warlock/power/vampiric-embrace)\n\n**Suggested Daily Power:** [flames of Phlegethos](ability:warlock/power/flames-of-phlegethos)',
  },
})

export const WarlockClassFeaturesSection = Content.defineSection('classes/warlock-class-features', {
  parent: WarlockSection,
  content: { name: 'Warlock Class Features', description: 'You have the following class features.' },
})

export const EldritchBlastFeatureSection = Content.linkEntity(WarlockClassFeaturesSection, ClassWarlock.EldritchBlastFeature)
export const EldritchPactSection = Content.linkEntity(WarlockClassFeaturesSection, ClassWarlock.SelectEldritchPact)
export const FeyPactSection = Content.linkEntity(EldritchPactSection, ClassWarlock.FeyPact)
export const MistyStepSection = Content.linkEntity(FeyPactSection, ClassWarlock.MistyStep)
export const InfernalPactSection = Content.linkEntity(EldritchPactSection, ClassWarlock.InfernalPact)
export const DarkOnesBlessingSection = Content.linkEntity(InfernalPactSection, ClassWarlock.DarkOnesBlessing)
export const StarPactSection = Content.linkEntity(EldritchPactSection, ClassWarlock.StarPact)
export const FateOfTheVoidSection = Content.linkEntity(StarPactSection, ClassWarlock.FateOfTheVoid)
export const PrimeShotSection = Content.linkEntity(WarlockClassFeaturesSection, ClassWarlock.PrimeShot)
export const ShadowWalkSection = Content.linkEntity(WarlockClassFeaturesSection, ClassWarlock.ShadowWalk)
export const WarlocksCurseSection = Content.linkEntity(WarlockClassFeaturesSection, ClassWarlock.WarlocksCurse)

export const WarlockImplementsSection = Content.defineSection('classes/warlock-implements', {
  parent: WarlockSection,
  content: {
    name: 'Implements',
    description:
      'Warlocks make use of rods and wands to help channel and direct their arcane powers. A warlock wielding a magic rod or wand can add its enhancement bonus to the attack rolls and the damage rolls of warlock powers, as well as warlock paragon path powers, that have the implement keyword. Without a rod or a wand, a warlock can still use these powers, but he or she doesn’t gain the bonus provided by the magic implement.\n\nA _pact blade,_ a special magic dagger, can also be used as an implement for warlock powers, as well as warlock paragon powers. These daggers are highly sought after by warlocks.',
  },
})

export const WarlockPowersSection = Content.defineSection('classes/warlock-powers', {
  parent: WarlockSection,
  content: {
    name: 'Warlock Powers',
    description:
      'Your powers are also known as spells. Each power is associated with one of the three eldritch pacts, but you aren’t limited to choosing powers associated with your pact. In fact, most warlocks choose at least a few powers from outside their pact to give themselves a wider range of options.\n\nSpells of the infernal pact use your [Constitution](characteristic:constitution) score. The dark energy you wield is inherently harmful to the mortal body, and only through sheer physical resolve and discipline can you wield it safely. Fey pact spells rely on [Charisma](characteristic:charisma). Your force of will and your ability to bargain with the fey is key to spells of this type. Star pact spells require you to be physically inured to the rigors of otherworldly energy (Constitution), and also ambitious and driven enough to impose your willpower on the strands of fate (Charisma).',
  },
})

export const WarlockLevel1AtWillSpellsSection = Content.defineSection('classes/warlock-level-1-at-will-spells', {
  parent: WarlockPowersSection,
  content: { name: 'Level 1 At-Will Spells' },
})

export const DireRadianceSection = Content.linkEntity(WarlockLevel1AtWillSpellsSection, ClassWarlock.DireRadiance)
export const EldritchBlastSection = Content.linkEntity(WarlockLevel1AtWillSpellsSection, ClassWarlock.EldritchBlast)
export const EyebiteSection = Content.linkEntity(WarlockLevel1AtWillSpellsSection, ClassWarlock.Eyebite)
export const HellishRebukeSection = Content.linkEntity(WarlockLevel1AtWillSpellsSection, ClassWarlock.HellishRebuke)

export const WarlockLevel1EncounterSpellsSection = Content.defineSection('classes/warlock-level-1-encounter-spells', {
  parent: WarlockPowersSection,
  content: { name: 'Level 1 Encounter Spells' },
})

export const DiabolicGraspSection = Content.linkEntity(WarlockLevel1EncounterSpellsSection, WarlockPower.DiabolicGrasp)
export const DreadfulWordSection = Content.linkEntity(WarlockLevel1EncounterSpellsSection, WarlockPower.DreadfulWord)
export const VampiricEmbraceSection = Content.linkEntity(WarlockLevel1EncounterSpellsSection, WarlockPower.VampiricEmbrace)
export const WitchfireSection = Content.linkEntity(WarlockLevel1EncounterSpellsSection, WarlockPower.Witchfire)

export const WarlockLevel1DailySpellsSection = Content.defineSection('classes/warlock-level-1-daily-spells', {
  parent: WarlockPowersSection,
  content: { name: 'Level 1 Daily Spells' },
})

export const ArmorOfAgathysSection = Content.linkEntity(WarlockLevel1DailySpellsSection, WarlockPower.ArmorOfAgathys)
export const CurseOfTheDarkDreamSection = Content.linkEntity(WarlockLevel1DailySpellsSection, WarlockPower.CurseOfTheDarkDream)
export const DreadStarSection = Content.linkEntity(WarlockLevel1DailySpellsSection, WarlockPower.DreadStar)
export const FlamesOfPhlegethosSection = Content.linkEntity(WarlockLevel1DailySpellsSection, WarlockPower.FlamesOfPhlegethos)

export const WarlockLevel2UtilitySpellsSection = Content.defineSection('classes/warlock-level-2-utility-spells', {
  parent: WarlockPowersSection,
  content: { name: 'Level 2 Utility Spells' },
})

export const BeguilingTongueSection = Content.linkEntity(WarlockLevel2UtilitySpellsSection, WarlockPower.BeguilingTongue)
export const EtherealStrideSection = Content.linkEntity(WarlockLevel2UtilitySpellsSection, WarlockPower.EtherealStride)
export const FiendishResilienceSection = Content.linkEntity(WarlockLevel2UtilitySpellsSection, WarlockPower.FiendishResilience)
export const ShadowVeilSection = Content.linkEntity(WarlockLevel2UtilitySpellsSection, WarlockPower.ShadowVeil)

export const WarlockLevel3EncounterSpellsSection = Content.defineSection('classes/warlock-level-3-encounter-spells', {
  parent: WarlockPowersSection,
  content: { name: 'Level 3 Encounter Spells' },
})

export const EldritchRainSection = Content.linkEntity(WarlockLevel3EncounterSpellsSection, WarlockPower.EldritchRain)
export const FieryBoltSection = Content.linkEntity(WarlockLevel3EncounterSpellsSection, WarlockPower.FieryBolt)
export const FrigidDarknessSection = Content.linkEntity(WarlockLevel3EncounterSpellsSection, WarlockPower.FrigidDarkness)
export const OtherwindStrideSection = Content.linkEntity(WarlockLevel3EncounterSpellsSection, WarlockPower.OtherwindStride)

export const WarlockLevel5DailySpellsSection = Content.defineSection('classes/warlock-level-5-daily-spells', {
  parent: WarlockPowersSection,
  content: { name: 'Level 5 Daily Spells' },
})

export const AvernianEruptionSection = Content.linkEntity(WarlockLevel5DailySpellsSection, WarlockPower.AvernianEruption)
export const CrownOfMadnessSection = Content.linkEntity(WarlockLevel5DailySpellsSection, WarlockPower.CrownOfMadness)
export const CurseOfTheBloodyFangsSection = Content.linkEntity(WarlockLevel5DailySpellsSection, WarlockPower.CurseOfTheBloodyFangs)
export const HungerOfHadarSection = Content.linkEntity(WarlockLevel5DailySpellsSection, WarlockPower.HungerOfHadar)

export const WarlockLevel6UtilitySpellsSection = Content.defineSection('classes/warlock-level-6-utility-spells', {
  parent: WarlockPowersSection,
  content: { name: 'Level 6 Utility Spells' },
})

export const DarkOnesOwnLuckSection = Content.linkEntity(WarlockLevel6UtilitySpellsSection, WarlockPower.DarkOnesOwnLuck)
export const FeySwitchSection = Content.linkEntity(WarlockLevel6UtilitySpellsSection, WarlockPower.FeySwitch)
export const ShroudOfBlackSteelSection = Content.linkEntity(WarlockLevel6UtilitySpellsSection, WarlockPower.ShroudOfBlackSteel)
export const SpiderClimbSection = Content.linkEntity(WarlockLevel6UtilitySpellsSection, WarlockPower.SpiderClimb)

export const WarlockLevel7EncounterSpellsSection = Content.defineSection('classes/warlock-level-7-encounter-spells', {
  parent: WarlockPowersSection,
  content: { name: 'Level 7 Encounter Spells' },
})

export const HowlOfDoomSection = Content.linkEntity(WarlockLevel7EncounterSpellsSection, WarlockPower.HowlOfDoom)
export const InfernalMoonCurseSection = Content.linkEntity(WarlockLevel7EncounterSpellsSection, WarlockPower.InfernalMoonCurse)
export const MireTheMindSection = Content.linkEntity(WarlockLevel7EncounterSpellsSection, WarlockPower.MireTheMind)
export const SignOfIllOmenSection = Content.linkEntity(WarlockLevel7EncounterSpellsSection, WarlockPower.SignOfIllOmen)

export const WarlockLevel9DailySpellsSection = Content.defineSection('classes/warlock-level-9-daily-spells', {
  parent: WarlockPowersSection,
  content: { name: 'Level 9 Daily Spells' },
})

export const CurseOfTheBlackFrostSection = Content.linkEntity(WarlockLevel9DailySpellsSection, WarlockPower.CurseOfTheBlackFrost)
export const IronSpikeOfDisSection = Content.linkEntity(WarlockLevel9DailySpellsSection, WarlockPower.IronSpikeOfDis)
export const SummonsOfKhiradSection = Content.linkEntity(WarlockLevel9DailySpellsSection, WarlockPower.SummonsOfKhirad)
export const ThiefOfFiveFatesSection = Content.linkEntity(WarlockLevel9DailySpellsSection, WarlockPower.ThiefOfFiveFates)

export const WarlockLevel10UtilitySpellsSection = Content.defineSection('classes/warlock-level-10-utility-spells', {
  parent: WarlockPowersSection,
  content: { name: 'Level 10 Utility Spells' },
})

export const AmbassadorImpSection = Content.linkEntity(WarlockLevel10UtilitySpellsSection, WarlockPower.AmbassadorImp)
export const ShadowFormSection = Content.linkEntity(WarlockLevel10UtilitySpellsSection, WarlockPower.ShadowForm)
export const ShieldingShadesSection = Content.linkEntity(WarlockLevel10UtilitySpellsSection, WarlockPower.ShieldingShades)
export const WarlocksLeapSection = Content.linkEntity(WarlockLevel10UtilitySpellsSection, WarlockPower.WarlocksLeap)

export const WarlockContent: Array<ContentSection> = [
  WarlockSection,
  WarlockOverviewSection,
  WarlockClassTraitsSection,
  CreatingAWarlockSection,
  DeceptiveWarlockSection,
  ScourgeWarlockSection,
  WarlockClassFeaturesSection,
  EldritchBlastFeatureSection,
  EldritchPactSection,
  FeyPactSection,
  MistyStepSection,
  InfernalPactSection,
  DarkOnesBlessingSection,
  StarPactSection,
  FateOfTheVoidSection,
  PrimeShotSection,
  ShadowWalkSection,
  WarlocksCurseSection,
  WarlockImplementsSection,
  WarlockPowersSection,
  WarlockLevel1AtWillSpellsSection,
  DireRadianceSection,
  EldritchBlastSection,
  EyebiteSection,
  HellishRebukeSection,
  WarlockLevel1EncounterSpellsSection,
  DiabolicGraspSection,
  DreadfulWordSection,
  VampiricEmbraceSection,
  WitchfireSection,
  WarlockLevel1DailySpellsSection,
  ArmorOfAgathysSection,
  CurseOfTheDarkDreamSection,
  DreadStarSection,
  FlamesOfPhlegethosSection,
  WarlockLevel2UtilitySpellsSection,
  BeguilingTongueSection,
  EtherealStrideSection,
  FiendishResilienceSection,
  ShadowVeilSection,
  WarlockLevel3EncounterSpellsSection,
  EldritchRainSection,
  FieryBoltSection,
  FrigidDarknessSection,
  OtherwindStrideSection,
  WarlockLevel5DailySpellsSection,
  AvernianEruptionSection,
  CrownOfMadnessSection,
  CurseOfTheBloodyFangsSection,
  HungerOfHadarSection,
  WarlockLevel6UtilitySpellsSection,
  DarkOnesOwnLuckSection,
  FeySwitchSection,
  ShroudOfBlackSteelSection,
  SpiderClimbSection,
  WarlockLevel7EncounterSpellsSection,
  HowlOfDoomSection,
  InfernalMoonCurseSection,
  MireTheMindSection,
  SignOfIllOmenSection,
  WarlockLevel9DailySpellsSection,
  CurseOfTheBlackFrostSection,
  IronSpikeOfDisSection,
  SummonsOfKhiradSection,
  ThiefOfFiveFatesSection,
  WarlockLevel10UtilitySpellsSection,
  AmbassadorImpSection,
  ShadowFormSection,
  ShieldingShadesSection,
  WarlocksLeapSection,
]
