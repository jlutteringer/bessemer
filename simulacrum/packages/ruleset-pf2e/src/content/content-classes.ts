import { Content } from '@simulacrum/ruleset'
import * as ClassBard from '@simulacrum/ruleset-pf2e/class/class-bard'
import * as BardMuse from '@simulacrum/ruleset-pf2e/class/bard-muse'
import * as BardSpellcasting from '@simulacrum/ruleset-pf2e/class/bard-spellcasting'
import * as BardFeat from '@simulacrum/ruleset-pf2e/class/bard-feat'
import * as BardFocusSpell from '@simulacrum/ruleset-pf2e/class/bard-focus-spell'
import * as ClassCleric from '@simulacrum/ruleset-pf2e/class/class-cleric'
import * as ClericDoctrine from '@simulacrum/ruleset-pf2e/class/cleric-doctrine'
import * as ClericDomain from '@simulacrum/ruleset-pf2e/class/cleric-domain'
import * as ClericFeat from '@simulacrum/ruleset-pf2e/class/cleric-feat'
import * as ClericFocusSpell from '@simulacrum/ruleset-pf2e/class/cleric-focus-spell'
import * as ClassDruid from '@simulacrum/ruleset-pf2e/class/class-druid'
import * as DruidOrder from '@simulacrum/ruleset-pf2e/class/druid-order'
import * as DruidFeat from '@simulacrum/ruleset-pf2e/class/druid-feat'
import * as DruidFocusSpell from '@simulacrum/ruleset-pf2e/class/druid-focus-spell'
import * as ClassFighter from '@simulacrum/ruleset-pf2e/class/class-fighter'
import * as FighterFeat from '@simulacrum/ruleset-pf2e/class/fighter-feat'
import * as ClassRanger from '@simulacrum/ruleset-pf2e/class/class-ranger'
import * as RangerFeat from '@simulacrum/ruleset-pf2e/class/ranger-feat'
import * as RangerFocusSpell from '@simulacrum/ruleset-pf2e/class/ranger-focus-spell'
import * as ClassRogue from '@simulacrum/ruleset-pf2e/class/class-rogue'
import * as RogueRacket from '@simulacrum/ruleset-pf2e/class/rogue-racket'
import * as RogueFeat from '@simulacrum/ruleset-pf2e/class/rogue-feat'
import * as ClassWitch from '@simulacrum/ruleset-pf2e/class/class-witch'
import * as WitchPatron from '@simulacrum/ruleset-pf2e/class/witch-patron'
import * as WitchLesson from '@simulacrum/ruleset-pf2e/class/witch-lesson'
import * as WitchFeat from '@simulacrum/ruleset-pf2e/class/witch-feat'
import * as WitchFocusSpell from '@simulacrum/ruleset-pf2e/class/witch-focus-spell'
import * as ClassWizard from '@simulacrum/ruleset-pf2e/class/class-wizard'
import * as WizardFeature from '@simulacrum/ruleset-pf2e/class/wizard-feature'
import * as WizardSchool from '@simulacrum/ruleset-pf2e/class/wizard-school'
import * as WizardFeat from '@simulacrum/ruleset-pf2e/class/wizard-feat'
import * as WizardFocusSpell from '@simulacrum/ruleset-pf2e/class/wizard-focus-spell'
import * as AnimalCompanion from '@simulacrum/ruleset-pf2e/companion/animal-companion'
import * as Familiar from '@simulacrum/ruleset-pf2e/companion/familiar'

export const ClassesSection = Content.defineSection('classes', {
  content: {
    name: 'Classes',
    description:
      "Just as your character's ancestry plays a key role in expressing their identity and worldview, their class indicates the training they have and will improve upon as an adventurer. Choosing your character's class is perhaps the most important decision you will make for them. Groups of players often create characters whose skills and abilities complement each other mechanically—for example, ensuring your party includes a healer, a combat-oriented character, a stealthy character, and someone with command over magic—so you may wish to discuss options with your group before deciding.\n\nThe rules within each class allow you to bring a wealth of character concepts to life. Perhaps you want to create a brilliant but scatterbrained wizard who can rattle off complex formulas for magic items but has trouble remembering his best friend's birthday. Or perhaps you want your character to be a muscle?bound swordswoman who becomes as immovable as a mountain when she hoists a shield. Maybe they'll be a hot?tempered witch whose gesticulating fingers pulse with power granted through dealings with a mysterious patron. The choices you make for your character within their class—such as a cleric's choice of deity, a fighter's choice of weapon, or a school where a wizard studied—bring these visions to life within the context of the rules and the world.\n\nThe entries on the pages that follow describe 8 classes in Pathfinder. Each entry contains the information you need to play a character of that class, as well as how to develop them from their humble beginnings at 1st level to the dizzying heights of power at 20th level. In addition to the class entries, you might need to reference the following sections, which detail additional character options and how to advance your character in level.\n\n- **Leveling Up** on page 29 tells you how to make your character stronger when you get enough Experience Points to reach a new level.\n\n- **Companions and Familiars** on page 206 provides rules to create an animal companion or a familiar to share your adventures with. You must have a class feature or feat that grants you a companion or familiar to use these rules.\n\n- **Archetypes** on page 215 gives you thematic options that allow you to further customize your character's abilities. Though these rules are not recommended for beginners, the archetypes in this book allow you to gain abilities from other classes starting at 2nd level.",
  },
})

export const ReadingClassEntriesSection = Content.defineSection('classes/reading-class-entries', {
  parent: ClassesSection,
  content: {
    name: 'Reading Class Entries',
    description:
      'Every class entry includes information about typical members of the class, plus suggestions for roleplaying characters of that class and playing these characters in the game’s various modes. Each class provides your character with an attribute boost to a key attribute; a number of Hit Points they receive at each level; proficiency ranks for various abilities, equipment, and skills; special abilities from their class features; and more. Your character’s class entry also provides the information needed when they gain levels, so it will be a vital reference throughout the course of your campaign.',
  },
})

export const PlayingTheClassSection = Content.defineSection('classes/playing-the-class', {
  parent: ReadingClassEntriesSection,
  content: {
    name: 'Playing the Class',
    description:
      'The first section of each class describes the interests and tendencies typical of that class, as well as information on how others view them. This can help inspire you as you determine your character’s actions and define their personality, but you aren’t obligated to play your character as this section describes.',
  },
})

export const KeyAttributeSection = Content.defineSection('classes/key-attribute', {
  parent: ReadingClassEntriesSection,
  content: {
    name: 'Key Attribute',
    description:
      "This is the attribute modifier that a member of your class cares about the most. Many of your most useful and powerful abilities are tied to this attribute in some way.\n\nFor instance, this is the attribute modifier you'll use to determine the Difficulty Class (DC) associated with your character's class features and feats. This is called your class DC. If your character is a member of a spellcasting class, this key attribute is used to calculate spell DCs and similar values.\n\nMost classes are associated with one key attribute modifier, but some allow you to choose from two options. For instance, if you're a fighter, you can choose either Strength or Dexterity as your key attribute. A fighter who chooses Strength will excel in hand to hand combat, while those who choose Dexterity prefer ranged or finesse weapons.\n\nAdditionally, when you choose your character's class, they gain an attribute boost to their key attribute modifier, increasing that attribute modifier by 1. For more about attribute boosts, see page 19.",
  },
})

export const HitPointsSection = Content.defineSection('classes/hit-points', {
  parent: ReadingClassEntriesSection,
  content: {
    name: 'Hit Points',
    description:
      "This section tells you how many Hit Points your character gains from their class at each level. To determine your character's starting Hit Points, add together the Hit Points they got when you chose their ancestry and the amount listed in this entry, which equals your Constitution modifier plus a fixed number. Classes that intend for characters to rush into battle with weapons bared gain a higher number of Hit Points each level, while those for characters who cast spells or engage in trickery gain fewer.\n\nEach time your character gains a level, they increase their maximum Hit Points by the amount listed in this entry. For more about calculating your character's Constitution modifier and determining their Hit Points, see page 24.",
  },
})

export const InitialProficienciesSection = Content.defineSection('classes/initial-proficiencies', {
  parent: ReadingClassEntriesSection,
  content: {
    name: 'Initial Proficiencies',
    description:
      "When you choose your character's class, they gain a set of initial proficiencies. Proficiencies measure your character's ability to perform tasks, use abilities, and succeed at checks. Proficiency ranks range from trained to legendary. For instance, a character who is trained with a longbow can use it effectively, while a person who is legendary with the weapon might be able to split an arrow from 100 paces away!\n\nEach class entry specifies your character's initial proficiency rank in Perception, saving throws, attacks, defenses, and class DC. You gain the trained proficiency rank in several skills—the exact number depends on your class, and some classes specify certain additional skills that you're trained in. If your class would make you trained in a skill you're already trained in (typically due to your background), you can select another skill to become trained in.\n\nA proficiency rank can unlock various feats and class features, and it also helps determine the modifier for any check you roll or DC you calculate related to that statistic. If your character is trained in Perception, a saving throw, or another statistic, they gain a proficiency bonus equal to their level + 2, while if they have expert proficiency, they gain a proficiency bonus equal to their level + 4. For more about proficiency ranks, see page 11.\n\nSpellcasting classes grant a proficiency rank for spell attacks and DCs, which are further detailed in each class's entry. These classes rarely use their class DC.\n\nIf something isn't listed in your character's class entry, their proficiency rank in that statistic is untrained unless they gain training from another source. If your character is untrained in something, you add a proficiency bonus of +0 when attempting a check or calculating a DC related to that statistic.",
  },
})

export const AdvancementTableSection = Content.defineSection('classes/advancement-table', {
  parent: ReadingClassEntriesSection,
  content: {
    name: 'Advancement Table',
    description:
      'This table summarizes the feats, skill increases, attribute boosts, and other benefits your character gains as they advance in level. The first column of the class table indicates a level, and the second column lists each feature your character receives when they reach that level. The 1st-level entry includes a reminder to select your ancestry and background.',
  },
})

export const ClassFeaturesSection = Content.defineSection('classes/class-features', {
  parent: ReadingClassEntriesSection,
  content: {
    name: 'Class Features',
    description:
      'This section presents all the abilities the class grants your character. An ability gained at a higher level lists the required level next to the ability’s name. All classes include the class features detailed below, and each class also gets special class features specific to it. Many class features require you to choose between options. Unless the specific ability states otherwise, such decisions can’t be changed without retraining (as explained on page 440).',
  },
})

export const ClassFeatsSection = Content.defineSection('classes/class-feats', {
  parent: ClassFeaturesSection,
  content: {
    name: 'Class Feats',
    description:
      'This section specifies the levels at which your character gains class feats—special feats that only members of that class can access. Class feats are granted beginning at 1st or 2nd level, depending on the class. Specific class feats are detailed at the end of each class entry.',
  },
})

export const SkillFeatsSection = Content.defineSection('classes/skill-feats', {
  parent: ClassFeaturesSection,
  content: {
    name: 'Skill Feats',
    description:
      'This section specifies the levels at which your character gains feats with the skill trait, called skill feats. Skill feats can be found in Chapter 5: Feats, beginning on page 248. At 2nd level and every 2 levels thereafter, most classes gain a skill feat, though rogues gain them earlier and more often. Your character must be trained in the corresponding skill to take a skill feat.',
  },
})

export const GeneralFeatsSection = Content.defineSection('classes/general-feats', {
  parent: ClassFeaturesSection,
  content: {
    name: 'General Feats',
    description:
      'This section specifies the levels at which your character gains general feats. Most classes grant a general feat at 3rd level and every 4 levels thereafter. At each of these levels, you can select any general feat (including skill feats) as long as your character qualifies for it. More information can be found in Chapter 5: Feats (page 248).',
  },
})

export const SkillIncreasesSection = Content.defineSection('classes/skill-increases', {
  parent: ClassFeaturesSection,
  content: {
    name: 'Skill Increases',
    description:
      "This section specifies the levels at which your character can increase their proficiency rank in a skill. At 3rd level and every 2 levels thereafter, most classes grant a skill increase, though rogues gain them earlier and more often. Your character can use a skill increase to either become trained in one skill in which they're untrained or become an expert in one skill in which they're already trained.\n\nIf your character is at least 7th level, they can use a skill increase to become a master of a skill in which they're already an expert. If they're at least 15th level, they can use an increase to become legendary in a skill in which they're already a master.",
  },
})

export const AttributeBoostsSection = Content.defineSection('classes/attribute-boosts', {
  parent: ClassFeaturesSection,
  content: {
    name: 'Attribute Boosts',
    description:
      'At 5th level and every 5 levels thereafter, your character boosts four different attribute modifiers. This is described briefly in the class. For the full details on attribute modifiers and applying them during character creation, see page 19.',
  },
})

export const AncestryFeatsSection = Content.defineSection('classes/ancestry-feats', {
  parent: ClassFeaturesSection,
  content: {
    name: 'Ancestry Feats',
    description:
      'This section serves as a reminder of the ancestry feats your character gains at 5th, 9th, 13th, and 17th levels. Ancestry feats are detailed in each ancestry entry in Chapter 2, which begins on page 240.',
  },
})

export const BardSection = Content.linkEntity(ClassesSection, ClassBard.Bard)

export const CompositionSpellsSection = Content.linkEntity(BardSection, ClassBard.CompositionSpells)

export const MusesSection = Content.linkEntity(BardSection, ClassBard.Muses)

export const EnigmaSection = Content.linkEntity(MusesSection, BardMuse.Enigma)

export const MaestroSection = Content.linkEntity(MusesSection, BardMuse.Maestro)

export const PolymathSection = Content.linkEntity(MusesSection, BardMuse.Polymath)

export const WarriorSection = Content.linkEntity(MusesSection, BardMuse.Warrior)

export const ReflexExpertiseSection = Content.linkEntity(BardSection, ClassBard.ReflexExpertise)

export const SignatureSpellsSection = Content.linkEntity(BardSection, ClassBard.SignatureSpells)

export const BardSpellcastingSection = Content.linkEntity(BardSection, BardSpellcasting.BardSpellcasting)

export const SpellRepertoireSection = Content.linkEntity(BardSection, BardSpellcasting.SpellRepertoire)

export const BardFeatsSection = Content.defineSection('classes/bard-feats', { parent: BardSection, content: { name: 'Bard Feats' } })

export const BardicLoreSection = Content.linkEntity(BardFeatsSection, BardFeat.BardicLore)

export const HymnOfHealingSection = Content.linkEntity(BardFeatsSection, BardFeat.HymnOfHealing)

export const LingeringCompositionSection = Content.linkEntity(BardFeatsSection, BardFeat.LingeringComposition)

export const MartialPerformanceSection = Content.linkEntity(BardFeatsSection, BardFeat.MartialPerformance)

export const ReachSpellSection = Content.linkEntity(BardFeatsSection, BardFeat.ReachSpell)

export const VersatilePerformanceSection = Content.linkEntity(BardFeatsSection, BardFeat.VersatilePerformance)

export const WellVersedSection = Content.linkEntity(BardFeatsSection, BardFeat.WellVersed)

export const CantripExpansionSection = Content.linkEntity(BardFeatsSection, BardFeat.CantripExpansion)

export const DirectedAudienceSection = Content.linkEntity(BardFeatsSection, BardFeat.DirectedAudience)

export const EmotionalPushSection = Content.linkEntity(BardFeatsSection, BardFeat.EmotionalPush)

export const EsotericPolymathSection = Content.linkEntity(BardFeatsSection, BardFeat.EsotericPolymath)

export const LoremastersEtudeSection = Content.linkEntity(BardFeatsSection, BardFeat.LoremastersEtude)

export const MultifariousMuseSection = Content.linkEntity(BardFeatsSection, BardFeat.MultifariousMuse)

export const MultifariousMuseEnigmaSection = Content.linkEntity(MultifariousMuseSection, BardFeat.MultifariousMuseEnigma)

export const MultifariousMuseMaestroSection = Content.linkEntity(MultifariousMuseSection, BardFeat.MultifariousMuseMaestro)

export const MultifariousMusePolymathSection = Content.linkEntity(MultifariousMuseSection, BardFeat.MultifariousMusePolymath)

export const MultifariousMuseWarriorSection = Content.linkEntity(MultifariousMuseSection, BardFeat.MultifariousMuseWarrior)

export const SongOfStrengthSection = Content.linkEntity(BardFeatsSection, BardFeat.SongOfStrength)

export const UpliftingOvertureSection = Content.linkEntity(BardFeatsSection, BardFeat.UpliftingOverture)

export const CombatReadingSection = Content.linkEntity(BardFeatsSection, BardFeat.CombatReading)

export const CourageousAdvanceSection = Content.linkEntity(BardFeatsSection, BardFeat.CourageousAdvance)

export const InTuneSection = Content.linkEntity(BardFeatsSection, BardFeat.InTune)

export const MelodiousSpellSection = Content.linkEntity(BardFeatsSection, BardFeat.MelodiousSpell)

export const RallyingAnthemSection = Content.linkEntity(BardFeatsSection, BardFeat.RallyingAnthem)

export const RitualResearcherSection = Content.linkEntity(BardFeatsSection, BardFeat.RitualResearcher)

export const TripleTimeSection = Content.linkEntity(BardFeatsSection, BardFeat.TripleTime)

export const VersatileSignatureSection = Content.linkEntity(BardFeatsSection, BardFeat.VersatileSignature)

export const BardFocusSpellsSection = Content.defineSection('classes/bard-focus-spells', {
  parent: BardSection,
  content: { name: 'Bard Focus Spells' },
})

export const CounterPerformanceSection = Content.linkEntity(BardFocusSpellsSection, BardFocusSpell.CounterPerformance)

export const BardFocusSpellsHymnOfHealingSection = Content.linkEntity(BardFocusSpellsSection, BardFocusSpell.HymnOfHealing)

export const BardFocusSpellsLingeringCompositionSection = Content.linkEntity(BardFocusSpellsSection, BardFocusSpell.LingeringComposition)

export const BardFocusSpellsLoremastersEtudeSection = Content.linkEntity(BardFocusSpellsSection, BardFocusSpell.LoremastersEtude)

export const ClericSection = Content.linkEntity(ClassesSection, ClassCleric.Cleric)

export const DeitySection = Content.linkEntity(ClericSection, ClassCleric.Deity)

export const HolySection = Content.linkEntity(DeitySection, ClericDoctrine.Holy)

export const UnholySection = Content.linkEntity(DeitySection, ClericDoctrine.Unholy)

export const NoSanctificationSection = Content.linkEntity(DeitySection, ClericDoctrine.NoSanctification)

export const ClericSpellcastingSection = Content.linkEntity(ClericSection, ClassCleric.ClericSpellcasting)

export const DivineFontSection = Content.linkEntity(ClericSection, ClassCleric.DivineFont)

export const HealingFontSection = Content.linkEntity(DivineFontSection, ClericDoctrine.HealingFont)

export const HarmfulFontSection = Content.linkEntity(DivineFontSection, ClericDoctrine.HarmfulFont)

export const DoctrineSection = Content.linkEntity(ClericSection, ClassCleric.Doctrine)

export const CloisteredClericSection = Content.linkEntity(DoctrineSection, ClericDoctrine.CloisteredCleric)

export const WarpriestSection = Content.linkEntity(DoctrineSection, ClericDoctrine.Warpriest)

export const PerceptionExpertiseSection = Content.linkEntity(ClericSection, ClassCleric.PerceptionExpertise)

export const ClericDomainsSection = Content.defineSection('classes/cleric-domains', { parent: ClericSection, content: { name: 'Cleric Domains' } })

export const AirDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.AirDomain)

export const AmbitionDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.AmbitionDomain)

export const CitiesDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.CitiesDomain)

export const ConfidenceDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.ConfidenceDomain)

export const CreationDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.CreationDomain)

export const DarknessDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.DarknessDomain)

export const DeathDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.DeathDomain)

export const DestructionDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.DestructionDomain)

export const DreamsDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.DreamsDomain)

export const EarthDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.EarthDomain)

export const FamilyDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.FamilyDomain)

export const FateDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.FateDomain)

export const FireDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.FireDomain)

export const FreedomDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.FreedomDomain)

export const HealingDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.HealingDomain)

export const IndulgenceDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.IndulgenceDomain)

export const KnowledgeDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.KnowledgeDomain)

export const LuckDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.LuckDomain)

export const MagicDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.MagicDomain)

export const MightDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.MightDomain)

export const MoonDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.MoonDomain)

export const NatureDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.NatureDomain)

export const NightmaresDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.NightmaresDomain)

export const PainDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.PainDomain)

export const PassionDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.PassionDomain)

export const PerfectionDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.PerfectionDomain)

export const ProtectionDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.ProtectionDomain)

export const SecrecyDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.SecrecyDomain)

export const SunDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.SunDomain)

export const TravelDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.TravelDomain)

export const TrickeryDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.TrickeryDomain)

export const TruthDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.TruthDomain)

export const TyrannyDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.TyrannyDomain)

export const UndeathDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.UndeathDomain)

export const WaterDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.WaterDomain)

export const WealthDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.WealthDomain)

export const ZealDomainSection = Content.linkEntity(ClericDomainsSection, ClericDomain.ZealDomain)

export const ClericFeatsSection = Content.defineSection('classes/cleric-feats', { parent: ClericSection, content: { name: 'Cleric Feats' } })

export const DomainInitiateSection = Content.linkEntity(ClericFeatsSection, ClericDomain.DomainInitiate)

export const DeadlySimplicitySection = Content.linkEntity(ClericFeatsSection, ClericFeat.DeadlySimplicity)

export const DivineCastigationSection = Content.linkEntity(ClericFeatsSection, ClericFeat.DivineCastigation)

export const HarmingHandsSection = Content.linkEntity(ClericFeatsSection, ClericFeat.HarmingHands)

export const HealingHandsSection = Content.linkEntity(ClericFeatsSection, ClericFeat.HealingHands)

export const PremonitionOfAvoidanceSection = Content.linkEntity(ClericFeatsSection, ClericFeat.PremonitionOfAvoidance)

export const CommunalHealingSection = Content.linkEntity(ClericFeatsSection, ClericFeat.CommunalHealing)

export const EmblazonArmamentSection = Content.linkEntity(ClericFeatsSection, ClericFeat.EmblazonArmament)

export const PanicTheDeadSection = Content.linkEntity(ClericFeatsSection, ClericFeat.PanicTheDead)

export const RapidResponseSection = Content.linkEntity(ClericFeatsSection, ClericFeat.RapidResponse)

export const SapLifeSection = Content.linkEntity(ClericFeatsSection, ClericFeat.SapLife)

export const VersatileFontSection = Content.linkEntity(ClericFeatsSection, ClericFeat.VersatileFont)

export const WarpriestsArmorSection = Content.linkEntity(ClericFeatsSection, ClericFeat.WarpriestsArmor)

export const ChannelSmiteSection = Content.linkEntity(ClericFeatsSection, ClericFeat.ChannelSmite)

export const DirectedChannelSection = Content.linkEntity(ClericFeatsSection, ClericFeat.DirectedChannel)

export const DivineInfusionSection = Content.linkEntity(ClericFeatsSection, ClericFeat.DivineInfusion)

export const RaiseSymbolSection = Content.linkEntity(ClericFeatsSection, ClericFeat.RaiseSymbol)

export const RestorativeStrikeSection = Content.linkEntity(ClericFeatsSection, ClericFeat.RestorativeStrike)

export const SacredGroundSection = Content.linkEntity(ClericFeatsSection, ClericFeat.SacredGround)

export const ClericFocusSpellsSection = Content.defineSection('classes/cleric-focus-spells', {
  parent: ClericSection,
  content: { name: 'Cleric Focus Spells' },
})

export const AgileFeetSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.AgileFeet)

export const AppearanceOfWealthSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.AppearanceOfWealth)

export const AthleticRushSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.AthleticRush)

export const BitOfLuckSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.BitOfLuck)

export const CharmingTouchSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.CharmingTouch)

export const CloakOfShadowSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.CloakOfShadow)

export const CreativeSplashSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.CreativeSplash)

export const CryOfDestructionSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.CryOfDestruction)

export const DazzlingFlashSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.DazzlingFlash)

export const DeathsCallSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.DeathsCall)

export const FaceInTheCrowdSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.FaceInTheCrowd)

export const FireRaySection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.FireRay)

export const HealersBlessingSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.HealersBlessing)

export const HurtlingStoneSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.HurtlingStone)

export const IgniteAmbitionSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.IgniteAmbition)

export const MagicsVesselSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.MagicsVessel)

export const MoonbeamSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.Moonbeam)

export const OverstuffSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.Overstuff)

export const PerfectedMindSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.PerfectedMind)

export const ProtectorsSacrificeSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.ProtectorsSacrifice)

export const PushingGustSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.PushingGust)

export const ReadFateSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.ReadFate)

export const SavorTheStingSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.SavorTheSting)

export const ScholarlyRecollectionSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.ScholarlyRecollection)

export const SoothingWordsSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.SoothingWords)

export const SuddenShiftSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.SuddenShift)

export const SweetDreamSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.SweetDream)

export const TidalSurgeSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.TidalSurge)

export const TouchOfObedienceSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.TouchOfObedience)

export const TouchOfUndeathSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.TouchOfUndeath)

export const UnimpededStrideSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.UnimpededStride)

export const VeilOfConfidenceSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.VeilOfConfidence)

export const VibrantThornsSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.VibrantThorns)

export const WakingNightmareSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.WakingNightmare)

export const WeaponSurgeSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.WeaponSurge)

export const WhisperingQuietSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.WhisperingQuiet)

export const WordOfTruthSection = Content.linkEntity(ClericFocusSpellsSection, ClericFocusSpell.WordOfTruth)

export const DruidSection = Content.linkEntity(ClassesSection, ClassDruid.Druid)

export const DruidSpellcastingSection = Content.linkEntity(DruidSection, ClassDruid.DruidSpellcasting)

export const AnathemaSection = Content.linkEntity(DruidSection, ClassDruid.DruidAnathema)

export const DruidicOrderSection = Content.linkEntity(DruidSection, ClassDruid.DruidicOrderFeature)

export const AnimalOrderSection = Content.linkEntity(DruidicOrderSection, DruidOrder.AnimalOrder)

export const LeafOrderSection = Content.linkEntity(DruidicOrderSection, DruidOrder.LeafOrder)

export const StormOrderSection = Content.linkEntity(DruidicOrderSection, DruidOrder.StormOrder)

export const UntamedOrderSection = Content.linkEntity(DruidicOrderSection, DruidOrder.UntamedOrder)

export const ShieldBlockSection = Content.linkEntity(DruidSection, ClassDruid.DruidShieldBlock)

export const VoiceOfNatureSection = Content.linkEntity(DruidSection, ClassDruid.VoiceOfNature)

export const WildsongSection = Content.linkEntity(DruidSection, ClassDruid.Wildsong)

export const DruidPerceptionExpertiseSection = Content.linkEntity(DruidSection, ClassDruid.DruidPerceptionExpertise)

export const FortitudeExpertiseSection = Content.linkEntity(DruidSection, ClassDruid.DruidFortitudeExpertise)

export const DruidReflexExpertiseSection = Content.linkEntity(DruidSection, ClassDruid.DruidReflexExpertise)

export const DruidFeatsSection = Content.defineSection('classes/druid-feats', { parent: DruidSection, content: { name: 'Druid Feats' } })

export const AnimalCompanionSection = Content.linkEntity(DruidFeatsSection, DruidFeat.AnimalCompanion)

export const AnimalEmpathyDruidSection = Content.linkEntity(DruidFeatsSection, DruidFeat.AnimalEmpathyDruid)

export const LeshyFamiliarSection = Content.linkEntity(DruidFeatsSection, DruidFeat.LeshyFamiliar)

export const PlantEmpathySection = Content.linkEntity(DruidFeatsSection, DruidFeat.PlantEmpathy)

export const StormBornSection = Content.linkEntity(DruidFeatsSection, DruidFeat.StormBorn)

export const UntamedFormSection = Content.linkEntity(DruidFeatsSection, DruidFeat.UntamedForm)

export const VerdantWeaponSection = Content.linkEntity(DruidFeatsSection, DruidFeat.VerdantWeapon)

export const WidenSpellSection = Content.linkEntity(DruidFeatsSection, DruidFeat.WidenSpell)

export const CallOfTheWildSection = Content.linkEntity(DruidFeatsSection, DruidFeat.CallOfTheWild)

export const EnhancedFamiliarSection = Content.linkEntity(DruidFeatsSection, DruidFeat.EnhancedFamiliar)

export const PoisonResistanceSection = Content.linkEntity(DruidFeatsSection, DruidFeat.PoisonResistance)

export const AnthropomorphicShapeSection = Content.linkEntity(DruidFeatsSection, DruidFeat.AnthropomorphicShape)

export const ElementalSummonsSection = Content.linkEntity(DruidFeatsSection, DruidFeat.ElementalSummons)

export const ForestPassageSection = Content.linkEntity(DruidFeatsSection, DruidFeat.ForestPassage)

export const FormControlSection = Content.linkEntity(DruidFeatsSection, DruidFeat.FormControl)

export const LeshyFamiliarSecretsSection = Content.linkEntity(DruidFeatsSection, DruidFeat.LeshyFamiliarSecrets)

export const MatureAnimalCompanionDruidSection = Content.linkEntity(DruidFeatsSection, DruidFeat.MatureAnimalCompanionDruid)

export const SnowdriftSpellSection = Content.linkEntity(DruidFeatsSection, DruidFeat.SnowdriftSpell)

export const OrderExplorerSection = Content.linkEntity(DruidFeatsSection, DruidOrder.OrderExplorer)

export const OrderExplorerAnimalSection = Content.linkEntity(OrderExplorerSection, DruidOrder.OrderExplorerAnimal)

export const OrderExplorerLeafSection = Content.linkEntity(OrderExplorerSection, DruidOrder.OrderExplorerLeaf)

export const OrderExplorerStormSection = Content.linkEntity(OrderExplorerSection, DruidOrder.OrderExplorerStorm)

export const OrderExplorerUntamedSection = Content.linkEntity(OrderExplorerSection, DruidOrder.OrderExplorerUntamed)

export const OrderMagicSection = Content.linkEntity(DruidFeatsSection, DruidOrder.OrderMagic)

export const OrderMagicAnimalSection = Content.linkEntity(OrderMagicSection, DruidOrder.OrderMagicAnimal)

export const OrderMagicLeafSection = Content.linkEntity(OrderMagicSection, DruidOrder.OrderMagicLeaf)

export const OrderMagicStormSection = Content.linkEntity(OrderMagicSection, DruidOrder.OrderMagicStorm)

export const OrderMagicUntamedSection = Content.linkEntity(OrderMagicSection, DruidOrder.OrderMagicUntamed)

export const DruidFocusSpellsSection = Content.defineSection('classes/druid-focus-spells', {
  parent: DruidSection,
  content: { name: 'Druid Focus Spells' },
})

export const CornucopiaSection = Content.linkEntity(DruidFocusSpellsSection, DruidFocusSpell.Cornucopia)

export const HealAnimalSection = Content.linkEntity(DruidFocusSpellsSection, DruidFocusSpell.HealAnimal)

export const TempestSurgeSection = Content.linkEntity(DruidFocusSpellsSection, DruidFocusSpell.TempestSurge)

export const DruidFocusSpellsUntamedFormSection = Content.linkEntity(DruidFocusSpellsSection, DruidFocusSpell.UntamedForm)

export const UntamedShiftSection = Content.linkEntity(DruidFocusSpellsSection, DruidFocusSpell.UntamedShift)

export const FighterSection = Content.linkEntity(ClassesSection, ClassFighter.Fighter)

export const ReactiveStrikeSection = Content.linkEntity(FighterSection, ClassFighter.ReactiveStrike)

export const FighterShieldBlockSection = Content.linkEntity(FighterSection, ClassFighter.FighterShieldBlock)

export const BraverySection = Content.linkEntity(FighterSection, ClassFighter.Bravery)

export const FighterWeaponMasterySection = Content.linkEntity(FighterSection, ClassFighter.FighterWeaponMastery)

export const FighterFeatsSection = Content.defineSection('classes/fighter-feats', { parent: FighterSection, content: { name: 'Fighter Feats' } })

export const CombatAssessmentSection = Content.linkEntity(FighterFeatsSection, FighterFeat.CombatAssessment)

export const DoubleSliceSection = Content.linkEntity(FighterFeatsSection, FighterFeat.DoubleSlice)

export const ExactingStrikeSection = Content.linkEntity(FighterFeatsSection, FighterFeat.ExactingStrike)

export const PointBlankStanceSection = Content.linkEntity(FighterFeatsSection, FighterFeat.PointBlankStance)

export const ReactiveShieldSection = Content.linkEntity(FighterFeatsSection, FighterFeat.ReactiveShield)

export const SnaggingStrikeSection = Content.linkEntity(FighterFeatsSection, FighterFeat.SnaggingStrike)

export const SuddenChargeSection = Content.linkEntity(FighterFeatsSection, FighterFeat.SuddenCharge)

export const ViciousSwingSection = Content.linkEntity(FighterFeatsSection, FighterFeat.ViciousSwing)

export const AggressiveBlockSection = Content.linkEntity(FighterFeatsSection, FighterFeat.AggressiveBlock)

export const AssistingShotSection = Content.linkEntity(FighterFeatsSection, FighterFeat.AssistingShot)

export const BladeBrakeSection = Content.linkEntity(FighterFeatsSection, FighterFeat.BladeBrake)

export const BrutishShoveSection = Content.linkEntity(FighterFeatsSection, FighterFeat.BrutishShove)

export const CombatGrabSection = Content.linkEntity(FighterFeatsSection, FighterFeat.CombatGrab)

export const DuelingParrySection = Content.linkEntity(FighterFeatsSection, FighterFeat.DuelingParry)

export const IntimidatingStrikeSection = Content.linkEntity(FighterFeatsSection, FighterFeat.IntimidatingStrike)

export const LightningSwapSection = Content.linkEntity(FighterFeatsSection, FighterFeat.LightningSwap)

export const LungeSection = Content.linkEntity(FighterFeatsSection, FighterFeat.Lunge)

export const ReboundingTossSection = Content.linkEntity(FighterFeatsSection, FighterFeat.ReboundingToss)

export const SleekRepositionSection = Content.linkEntity(FighterFeatsSection, FighterFeat.SleekReposition)

export const BarrelingChargeSection = Content.linkEntity(FighterFeatsSection, FighterFeat.BarrelingCharge)

export const DoubleShotSection = Content.linkEntity(FighterFeatsSection, FighterFeat.DoubleShot)

export const DualHandedAssaultSection = Content.linkEntity(FighterFeatsSection, FighterFeat.DualHandedAssault)

export const PartingShotSection = Content.linkEntity(FighterFeatsSection, FighterFeat.PartingShot)

export const PowerfulShoveSection = Content.linkEntity(FighterFeatsSection, FighterFeat.PowerfulShove)

export const QuickReversalSection = Content.linkEntity(FighterFeatsSection, FighterFeat.QuickReversal)

export const ShieldedStrideSection = Content.linkEntity(FighterFeatsSection, FighterFeat.ShieldedStride)

export const SlamDownSection = Content.linkEntity(FighterFeatsSection, FighterFeat.SlamDown)

export const SwipeSection = Content.linkEntity(FighterFeatsSection, FighterFeat.Swipe)

export const TwinParrySection = Content.linkEntity(FighterFeatsSection, FighterFeat.TwinParry)

export const RangerSection = Content.linkEntity(ClassesSection, ClassRanger.Ranger)

export const HuntPreySection = Content.linkEntity(RangerSection, ClassRanger.HuntPrey)

export const HuntersEdgeSection = Content.linkEntity(RangerSection, ClassRanger.HuntersEdgeFeature)

export const FlurrySection = Content.linkEntity(HuntersEdgeSection, ClassRanger.FlurryEdge)

export const OutwitSection = Content.linkEntity(HuntersEdgeSection, ClassRanger.OutwitEdge)

export const PrecisionSection = Content.linkEntity(HuntersEdgeSection, ClassRanger.PrecisionEdge)

export const WillExpertiseSection = Content.linkEntity(RangerSection, ClassRanger.RangerWillExpertise)

export const RangerWeaponExpertiseSection = Content.linkEntity(RangerSection, ClassRanger.RangerWeaponExpertise)

export const TracklessJourneySection = Content.linkEntity(RangerSection, ClassRanger.TracklessJourney)

export const RangerFeatsSection = Content.defineSection('classes/ranger-feats', { parent: RangerSection, content: { name: 'Ranger Feats' } })

export const CrossbowAceSection = Content.linkEntity(RangerFeatsSection, RangerFeat.CrossbowAce)

export const HuntedShotSection = Content.linkEntity(RangerFeatsSection, RangerFeat.HuntedShot)

export const InitiateWardenSection = Content.linkEntity(RangerFeatsSection, RangerFeat.InitiateWarden)

export const InitiateWardenAdditionalSpellSection = Content.linkEntity(RangerFeatsSection, RangerFeat.InitiateWardenAdditional)

export const MonsterHunterSection = Content.linkEntity(RangerFeatsSection, RangerFeat.MonsterHunter)

export const TwinTakedownSection = Content.linkEntity(RangerFeatsSection, RangerFeat.TwinTakedown)

export const AnimalEmpathySection = Content.linkEntity(RangerFeatsSection, RangerFeat.AnimalEmpathy)

export const FavoredTerrainSection = Content.linkEntity(RangerFeatsSection, RangerFeat.FavoredTerrain)

export const HuntersAimSection = Content.linkEntity(RangerFeatsSection, RangerFeat.HuntersAim)

export const MonsterWardenSection = Content.linkEntity(RangerFeatsSection, RangerFeat.MonsterWarden)

export const QuickDrawSection = Content.linkEntity(RangerFeatsSection, RangerFeat.QuickDraw)

export const AdvancedWardenSection = Content.linkEntity(RangerFeatsSection, RangerFeat.AdvancedWarden)

export const CompanionsCrySection = Content.linkEntity(RangerFeatsSection, RangerFeat.CompanionsCry)

export const DisruptPreySection = Content.linkEntity(RangerFeatsSection, RangerFeat.DisruptPrey)

export const FarShotSection = Content.linkEntity(RangerFeatsSection, RangerFeat.FarShot)

export const FavoredPreySection = Content.linkEntity(RangerFeatsSection, RangerFeat.FavoredPrey)

export const RunningReloadSection = Content.linkEntity(RangerFeatsSection, RangerFeat.RunningReload)

export const ScoutsWarningSection = Content.linkEntity(RangerFeatsSection, RangerFeat.ScoutsWarning)

export const RangerFocusSpellsSection = Content.defineSection('classes/ranger-focus-spells', {
  parent: RangerSection,
  content: { name: 'Ranger Focus Spells' },
})

export const GravityWeaponSection = Content.linkEntity(RangerFocusSpellsSection, RangerFocusSpell.GravityWeapon)

export const HealCompanionSection = Content.linkEntity(RangerFocusSpellsSection, RangerFocusSpell.HealCompanion)

export const MagicHideSection = Content.linkEntity(RangerFocusSpellsSection, RangerFocusSpell.MagicHide)

export const AnimalFeatureSection = Content.linkEntity(RangerFocusSpellsSection, RangerFocusSpell.AnimalFeature)

export const EnlargeCompanionSection = Content.linkEntity(RangerFocusSpellsSection, RangerFocusSpell.EnlargeCompanion)

export const HuntersLuckSection = Content.linkEntity(RangerFocusSpellsSection, RangerFocusSpell.HuntersLuck)

export const SoothingMistSection = Content.linkEntity(RangerFocusSpellsSection, RangerFocusSpell.SoothingMist)

export const EphemeralTrackingSection = Content.linkEntity(RangerFocusSpellsSection, RangerFocusSpell.EphemeralTracking)

export const RangersBrambleSection = Content.linkEntity(RangerFocusSpellsSection, RangerFocusSpell.RangersBramble)

export const RogueSection = Content.linkEntity(ClassesSection, ClassRogue.Rogue)

export const RoguesRacketSection = Content.linkEntity(RogueSection, ClassRogue.RoguesRacketFeature)

export const MastermindSection = Content.linkEntity(RoguesRacketSection, RogueRacket.MastermindRacket)

export const RuffianSection = Content.linkEntity(RoguesRacketSection, RogueRacket.RuffianRacket)

export const ScoundrelSection = Content.linkEntity(RoguesRacketSection, RogueRacket.ScoundrelRacket)

export const ThiefSection = Content.linkEntity(RoguesRacketSection, RogueRacket.ThiefRacket)

export const SneakAttackSection = Content.linkEntity(RogueSection, ClassRogue.SneakAttack)

export const SurpriseAttackSection = Content.linkEntity(RogueSection, ClassRogue.SurpriseAttack)

export const DenyAdvantageSection = Content.linkEntity(RogueSection, ClassRogue.DenyAdvantage)

export const WeaponTricksSection = Content.linkEntity(RogueSection, ClassRogue.WeaponTricks)

export const RogueFeatsSection = Content.defineSection('classes/rogue-feats', { parent: RogueSection, content: { name: 'Rogue Feats' } })

export const NimbleDodgeSection = Content.linkEntity(RogueFeatsSection, RogueFeat.NimbleDodge)

export const OverextendingFeintSection = Content.linkEntity(RogueFeatsSection, RogueFeat.OverextendingFeint)

export const PlantEvidenceSection = Content.linkEntity(RogueFeatsSection, RogueFeat.PlantEvidence)

export const TrapFinderSection = Content.linkEntity(RogueFeatsSection, RogueFeat.TrapFinder)

export const TumbleBehindSection = Content.linkEntity(RogueFeatsSection, RogueFeat.TumbleBehindRogue)

export const TwinFeintSection = Content.linkEntity(RogueFeatsSection, RogueFeat.TwinFeint)

export const YoureNextSection = Content.linkEntity(RogueFeatsSection, RogueFeat.YoureNext)

export const BrutalBeatingSection = Content.linkEntity(RogueFeatsSection, RogueFeat.BrutalBeating)

export const CleverGambitSection = Content.linkEntity(RogueFeatsSection, RogueFeat.CleverGambit)

export const DistractingFeintSection = Content.linkEntity(RogueFeatsSection, RogueFeat.DistractingFeint)

export const MobilitySection = Content.linkEntity(RogueFeatsSection, RogueFeat.Mobility)

export const StrongArmSection = Content.linkEntity(RogueFeatsSection, RogueFeat.StrongArm)

export const UnbalancingBlowSection = Content.linkEntity(RogueFeatsSection, RogueFeat.UnbalancingBlow)

export const UnderhandedAssaultSection = Content.linkEntity(RogueFeatsSection, RogueFeat.UnderhandedAssault)

export const DreadStrikerSection = Content.linkEntity(RogueFeatsSection, RogueFeat.DreadStriker)

export const HeadStompSection = Content.linkEntity(RogueFeatsSection, RogueFeat.HeadStomp)

export const MugSection = Content.linkEntity(RogueFeatsSection, RogueFeat.Mug)

export const PoisonWeaponSection = Content.linkEntity(RogueFeatsSection, RogueFeat.PoisonWeapon)

export const PredictableSection = Content.linkEntity(RogueFeatsSection, RogueFeat.Predictable)

export const ReactivePursuitSection = Content.linkEntity(RogueFeatsSection, RogueFeat.ReactivePursuit)

export const SabotageSection = Content.linkEntity(RogueFeatsSection, RogueFeat.Sabotage)

export const ScoundrelsSurpriseSection = Content.linkEntity(RogueFeatsSection, RogueFeat.ScoundrelsSurprise)

export const TheHarderTheyFallSection = Content.linkEntity(RogueFeatsSection, RogueFeat.TheHarderTheyFallRogue)

export const TwinDistractionSection = Content.linkEntity(RogueFeatsSection, RogueFeat.TwinDistraction)

export const WitchSection = Content.linkEntity(ClassesSection, ClassWitch.Witch)

export const PatronSection = Content.linkEntity(WitchSection, ClassWitch.WitchPatron)

export const FaithsFlamekeeperSection = Content.linkEntity(PatronSection, WitchPatron.FaithsFlamekeeper)

export const SilenceInSnowSection = Content.linkEntity(PatronSection, WitchPatron.SilenceInSnow)

export const SpinnerOfThreadsSection = Content.linkEntity(PatronSection, WitchPatron.SpinnerOfThreads)

export const StarlessShadowSection = Content.linkEntity(PatronSection, WitchPatron.StarlessShadow)

export const TheInscribedOneSection = Content.linkEntity(PatronSection, WitchPatron.TheInscribedOne)

export const TheResentmentSection = Content.linkEntity(PatronSection, WitchPatron.TheResentment)

export const WildingStewardSection = Content.linkEntity(PatronSection, WitchPatron.WildingSteward)

export const WitchSpellcastingSection = Content.linkEntity(WitchSection, ClassWitch.WitchSpellcasting)

export const FamiliarSection = Content.linkEntity(WitchSection, ClassWitch.WitchFamiliar)

export const HexSpellsSection = Content.linkEntity(WitchSection, ClassWitch.WitchHexSpells)

export const MagicalFortitudeSection = Content.linkEntity(WitchSection, ClassWitch.WitchMagicalFortitude)

export const WitchSpellcastingArcaneSection = Content.linkEntity(WitchSection, WitchPatron.WitchArcaneSpellcasting)

export const WitchSpellcastingDivineSection = Content.linkEntity(WitchSection, WitchPatron.WitchDivineSpellcasting)

export const WitchSpellcastingOccultSection = Content.linkEntity(WitchSection, WitchPatron.WitchOccultSpellcasting)

export const WitchSpellcastingPrimalSection = Content.linkEntity(WitchSection, WitchPatron.WitchPrimalSpellcasting)

export const WitchLessonsSection = Content.defineSection('classes/witch-lessons', { parent: WitchSection, content: { name: 'Witch Lessons' } })

export const LessonOfDreamsSection = Content.linkEntity(WitchLessonsSection, WitchLesson.LessonOfDreams)

export const LessonOfLifeSection = Content.linkEntity(WitchLessonsSection, WitchLesson.LessonOfLife)

export const LessonOfProtectionSection = Content.linkEntity(WitchLessonsSection, WitchLesson.LessonOfProtection)

export const LessonOfVengeanceSection = Content.linkEntity(WitchLessonsSection, WitchLesson.LessonOfVengeance)

export const LessonOfTheElementsSection = Content.linkEntity(WitchLessonsSection, WitchLesson.LessonOfTheElements)

export const LessonOfMischiefSection = Content.linkEntity(WitchLessonsSection, WitchLesson.LessonOfMischief)

export const LessonOfShadowSection = Content.linkEntity(WitchLessonsSection, WitchLesson.LessonOfShadow)

export const LessonOfSnowSection = Content.linkEntity(WitchLessonsSection, WitchLesson.LessonOfSnow)

export const WitchFeatsSection = Content.defineSection('classes/witch-feats', { parent: WitchSection, content: { name: 'Witch Feats' } })

export const CackleSection = Content.linkEntity(WitchFeatsSection, WitchFeat.Cackle)

export const CauldronSection = Content.linkEntity(WitchFeatsSection, WitchFeat.Cauldron)

export const CounterspellSection = Content.linkEntity(WitchFeatsSection, WitchFeat.Counterspell)

export const WitchsArmamentsSection = Content.linkEntity(WitchFeatsSection, WitchFeat.WitchsArmaments)

export const WitchsArmamentsEldritchNailsSection = Content.linkEntity(WitchsArmamentsSection, WitchFeat.WitchsArmamentsEldritchNails)

export const WitchsArmamentsIronTeethSection = Content.linkEntity(WitchsArmamentsSection, WitchFeat.WitchsArmamentsIronTeeth)

export const WitchsArmamentsLivingHairSection = Content.linkEntity(WitchsArmamentsSection, WitchFeat.WitchsArmamentsLivingHair)

export const BasicLessonSection = Content.linkEntity(WitchFeatsSection, WitchFeat.BasicLesson)

export const ConcealSpellSection = Content.linkEntity(WitchFeatsSection, WitchFeat.ConcealSpell)

export const FamiliarsLanguageSection = Content.linkEntity(WitchFeatsSection, WitchFeat.FamiliarsLanguage)

export const RitesOfConvocationSection = Content.linkEntity(WitchFeatsSection, WitchFeat.RitesOfConvocation)

export const SympatheticStrikeSection = Content.linkEntity(WitchFeatsSection, WitchFeat.SympatheticStrike)

export const WitchFocusSpellsSection = Content.defineSection('classes/witch-focus-spells', {
  parent: WitchSection,
  content: { name: 'Witch Focus Spells' },
})

export const BloodWardSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.BloodWard)

export const WitchFocusSpellsCackleSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.Cackle)

export const ElementalBetrayalSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.ElementalBetrayal)

export const LifeBoostSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.LifeBoost)

export const NeedleOfVengeanceSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.NeedleOfVengeance)

export const PatronsPuppetSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.PatronsPuppet)

export const PhaseFamiliarSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.PhaseFamiliar)

export const VeilOfDreamsSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.VeilOfDreams)

export const DeceiversCloakSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.DeceiversCloak)

export const MaliciousShadowSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.MaliciousShadow)

export const PersonalBlizzardSection = Content.linkEntity(WitchFocusSpellsSection, WitchFocusSpell.PersonalBlizzard)

export const WizardSection = Content.linkEntity(ClassesSection, ClassWizard.Wizard)

export const ArcaneThesisSection = Content.linkEntity(WizardSection, ClassWizard.ArcaneThesisFeature)

export const ExperimentalSpellshapingSection = Content.linkEntity(ArcaneThesisSection, ClassWizard.ExperimentalSpellshaping)

export const ImprovedFamiliarAttunementSection = Content.linkEntity(ArcaneThesisSection, ClassWizard.ImprovedFamiliarAttunement)

export const SpellBlendingSection = Content.linkEntity(ArcaneThesisSection, ClassWizard.SpellBlending)

export const SpellSubstitutionSection = Content.linkEntity(ArcaneThesisSection, ClassWizard.SpellSubstitution)

export const StaffNexusSection = Content.linkEntity(ArcaneThesisSection, ClassWizard.StaffNexus)

export const WizardSpellcastingSection = Content.linkEntity(WizardSection, WizardFeature.WizardSpellcasting)

export const ArcaneBondSection = Content.linkEntity(WizardSection, WizardFeature.ArcaneBond)

export const WizardFeatsSection = Content.linkEntity(WizardSection, WizardFeature.WizardFeats)

export const WizardReflexExpertiseSection = Content.linkEntity(WizardSection, WizardFeature.ReflexExpertise)

export const ArcaneSchoolSection = Content.linkEntity(WizardSection, WizardSchool.ArcaneSchoolFeature)

export const SchoolOfArsGrammaticaSection = Content.linkEntity(ArcaneSchoolSection, WizardSchool.ArsGrammatica)

export const SchoolOfBattleMagicSection = Content.linkEntity(ArcaneSchoolSection, WizardSchool.BattleMagic)

export const SchoolOfCivicWizardrySection = Content.linkEntity(ArcaneSchoolSection, WizardSchool.CivicWizardry)

export const SchoolOfMentalismSection = Content.linkEntity(ArcaneSchoolSection, WizardSchool.Mentalism)

export const SchoolOfProteanFormSection = Content.linkEntity(ArcaneSchoolSection, WizardSchool.ProteanForm)

export const SchoolOfUnifiedMagicalTheorySection = Content.linkEntity(ArcaneSchoolSection, WizardSchool.UnifiedMagicalTheory)

export const SchoolOfTheBoundarySection = Content.linkEntity(ArcaneSchoolSection, WizardSchool.Boundary)

export const WizardWizardFeatsSection = Content.defineSection('classes/wizard-feats', { parent: WizardSection, content: { name: 'Wizard Feats' } })

export const WizardWizardFeatsFamiliarSection = Content.linkEntity(WizardWizardFeatsSection, WizardFeat.Familiar)

export const SpellbookProdigySection = Content.linkEntity(WizardWizardFeatsSection, WizardFeat.SpellbookProdigy)

export const EnergyAblationSection = Content.linkEntity(WizardWizardFeatsSection, WizardFeat.EnergyAblation)

export const NonlethalSpellSection = Content.linkEntity(WizardWizardFeatsSection, WizardFeat.NonlethalSpell)

export const BespellStrikesSection = Content.linkEntity(WizardWizardFeatsSection, WizardFeat.BespellStrikes)

export const CallWizardlyToolsSection = Content.linkEntity(WizardWizardFeatsSection, WizardFeat.CallWizardlyTools)

export const LinkedFocusSection = Content.linkEntity(WizardWizardFeatsSection, WizardFeat.LinkedFocus)

export const SpellProtectionArraySection = Content.linkEntity(WizardWizardFeatsSection, WizardFeat.SpellProtectionArray)

export const WizardFocusSpellsSection = Content.defineSection('classes/wizard-focus-spells', {
  parent: WizardSection,
  content: { name: 'Wizard Focus Spells' },
})

export const CharmingPushSection = Content.linkEntity(WizardFocusSpellsSection, WizardFocusSpell.CharmingPush)

export const EarthworksSection = Content.linkEntity(WizardFocusSpellsSection, WizardFocusSpell.Earthworks)

export const ForceBoltSection = Content.linkEntity(WizardFocusSpellsSection, WizardFocusSpell.ForceBolt)

export const FortifySummoningSection = Content.linkEntity(WizardFocusSpellsSection, WizardFocusSpell.FortifySummoning)

export const HandOfTheApprenticeSection = Content.linkEntity(WizardFocusSpellsSection, WizardFocusSpell.HandOfTheApprentice)

export const ProtectiveWardsSection = Content.linkEntity(WizardFocusSpellsSection, WizardFocusSpell.ProtectiveWards)

export const ScrambleBodySection = Content.linkEntity(WizardFocusSpellsSection, WizardFocusSpell.ScrambleBody)

export const CompanionsSection = Content.defineSection('classes/companions', {
  parent: ClassesSection,
  content: {
    name: 'Companions',
    description:
      'Some adventurers travel with loyal allies known as animal companions and familiars. The former begin as young animals but acquire impressive physical abilities as you level up, while the latter share a magical bond with you.\n\nAnimal companions and familiars are special benefits for certain classes or class feats. If you simply want a pet regardless of your class, you can take the Pet feat (page 259). You can have a familiar or pet, but not both. Because animal companions function much differently, you can have both an animal companion and a familiar or pet.',
  },
})

export const AnimalCompanionsSection = Content.defineSection('classes/animal-companions', {
  parent: CompanionsSection,
  content: {
    name: 'Animal Companions',
    description:
      'An animal companion is a loyal comrade who follows your orders. Your animal companion has the animal and minion traits, and it gains 2 actions during your turn if you use the Command an Animal action to command it; this replaces the usual effects of Command an Animal, and you don’t need to attempt a Nature check. If your companion dies, you can spend a week of downtime to replace it at no cost. You can have only one animal companion at a time.\n\nA list of available animal companions can be found here.',
  },
})

export const YoungAnimalCompanionsSection = Content.defineSection('classes/young-animal-companions', {
  parent: AnimalCompanionsSection,
  content: {
    name: 'Young Animal Companions',
    description:
      "The following are the base statistics for a young animal companion, the first animal companion most characters get. You adjust these statistics depending on the type of animal you choose. Animal companions calculate their modifiers and DCs just as you do with one difference: the only item bonuses they can benefit from are to Speed and AC (their maximum item bonus to AC is +3). As you gain levels, you might be able to make your companion stronger by [advancing it](content:classes/companion-advancement). An animal companion's starting statistics are as follows.\n**Level:** Your animal companion's level is equal to yours.\n**Proficiencies:** Your animal companion is trained in its unarmed attacks, unarmored defense, barding (a type of armor for animals), all saving throws, Perception, Acrobatics, and Athletics. Animal companions can't use abilities that require greater Intelligence, such as Coerce or Decipher Writing, even if trained in the appropriate skill, unless they have a specialization that allows it.\n**Attribute Modifiers:** An animal companion begins with base attribute modifiers listed in its stat block.\n**Hit Points:** Your animal companion has ancestry Hit Points from its type, plus a number of Hit Points equal to 6 plus its Constitution modifier for each level you have.",
  },
})

export const CompanionTypesSection = Content.defineSection('classes/companion-types', {
  parent: AnimalCompanionsSection,
  content: {
    name: 'Companion Types',
    description:
      "The species of animal you choose is called your companion's type. Each companion type has its own statistics, as follows.\n**Size** The companion's size\n**Unarmed Attacks** One or more entries with the companion's unarmed attacks and their traits and damage\n**Attribute Modifiers** Starting attribute modifiers\n**Hit Points** The companion's ancestry Hit Points\n**Skill** An additional trained skill your companion has\n**Senses** Special senses your companion has\n**Speed** Your companion's Speeds\n**Special** If present, this lists any special ability your companion has, such as whether it often serves as a mount.\n**Support Benefit** A special benefit you gain by Commanding the Animal to use the Support action (see below).\n**Advanced Maneuver** A powerful new action your companion learns how to use if it becomes a nimble or savage animal companion.\n\n**Riding Animal Companions**\n\nYou or an ally can ride your animal companion as long as it is at least one size larger than the rider. If it is carrying a rider, the animal companion can use only its land Speed, and it can’t move and Support you on the same turn. However, if your companion has the mount special ability, it’s especially suited for riding and ignores both of these restrictions.",
  },
})

export const SupportSection = Content.defineSection('classes/support', {
  parent: CompanionTypesSection,
  content: {
    name: 'Support',
    description:
      '◆\n\n**Requirements** The creature is an animal companion.\n\nYour animal companion supports you. You gain the benefits listed in the companion type’s Support Benefit entry. If the animal uses the Support action, the only other actions it can use on this turn are basic move actions to get into position to take advantage of the Support benefits; if it has already used any other action this turn, it can’t Support you.',
  },
})

export const ApeSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Ape)

export const ArborealSaplingSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.ArborealSapling)

export const BadgerSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Badger)

export const BatSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Bat)

export const BearSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Bear)

export const BirdSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Bird)

export const BoarSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Boar)

export const CatSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Cat)

export const CrocodileSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Crocodile)

export const DromaeosaurSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Dromaeosaur)

export const HorseSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Horse)

export const RidingDrakeSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.RidingDrake)

export const ScorpionSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Scorpion)

export const SharkSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Shark)

export const SnakeSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Snake)

export const WolfSection = Content.linkEntity(CompanionTypesSection, AnimalCompanion.Wolf)

export const CompanionAdvancementSection = Content.defineSection('classes/companion-advancement', {
  parent: AnimalCompanionsSection,
  content: {
    name: 'Companion Advancement',
    description:
      'You can advance an animal companion, usually due to one of your class feat choices. Normally, you can advance a young animal companion to a mature animal companion, advance a mature companion to either a nimble or savage companion, and advance a nimble or savage companion into a specialized companion.',
  },
})

export const MatureAnimalCompanionsSection = Content.defineSection('classes/mature-animal-companions', {
  parent: CompanionAdvancementSection,
  content: {
    name: 'Mature Animal Companions',
    description:
      'When you advance a young animal companion to a mature animal companion:\n\n- If your companion is Medium or smaller, it grows by one size.\n\n- Increase its Strength, Dexterity, Constitution, and Wisdom modifiers by 1.\n\n- Increase its proficiency rank for Perception and all saving throws to expert. Increase its proficiency ranks in Intimidation, Stealth, and Survival to trained, and if it was already trained in one of those skills from its type, increase its proficiency rank in that skill to expert.\n\n- Increase its unarmed attack damage from one die to two dice (for instance 1d8 to 2d8)',
  },
})

export const NimbleAnimalCompanionsSection = Content.defineSection('classes/nimble-animal-companions', {
  parent: CompanionAdvancementSection,
  content: {
    name: 'Nimble Animal Companions',
    description:
      'To advance a mature animal companion to a nimble animal companion:\n\n- Increase its Dexterity modifier by 2 and its Strength, Constitution, and Wisdom modifiers by 1.\n\n- Increase its proficiency ranks in Acrobatics to expert.\n\n- It deals 2 additional damage with its unarmed attacks. Its attacks become magical for the purpose of ignoring resistances.\n\n- It learns the advanced maneuver for its type.',
  },
})

export const SavageAnimalCompanionsSection = Content.defineSection('classes/savage-animal-companions', {
  parent: CompanionAdvancementSection,
  content: {
    name: 'Savage Animal Companions',
    description:
      'To advance a mature animal companion to a savage animal companion:\n\n- If your companion is Medium or smaller, it grows by one size.\n\n- Increase its Strength modifier by 2 and its Dexterity, Constitution, and Wisdom modifiers by 1.\n\n- Increase its proficiency rank in Athletics to expert.\n\n- It deals 3 additional damage with its unarmed attacks. Its attacks become magical for the purpose of ignoring resistances.\n\n- It learns the advanced maneuver for its type.',
  },
})

export const SpecializedAnimalCompanionsSection = Content.defineSection('classes/specialized-animal-companions', {
  parent: CompanionAdvancementSection,
  content: {
    name: 'Specialized Animal Companions',
    description:
      "Specialized animal companions are more intelligent and engage in more complex behaviors. Most animal companions can have only one specialization. The first time an animal gains a specialization, it also gains the following.\n\n- Its proficiency rank for unarmed attacks increases to expert.\n\n- Its proficiency ranks for saving throws and Perception increase to master.\n\n- Increase its Dexterity modifier by 1 and its Intelligence modifier by 2.\n\n- Its unarmed attack damage increases from two dice to three dice, and it increases its additional damage with unarmed attacks from 2 to 4 or from 3 to 6.\n\n- The extra benefit of the specialization listed below.\n\n**Ambusher:** In your companion's natural environment, it can use a Sneak action even if it's currently observed. Its proficiency rank in Stealth increases to expert (or master if it was already an expert from its type), and its Dexterity modifier increases by 1. Its proficiency rank for unarmored defense increases to expert.\n\n**Bully:** Your companion terrorizes foes with dominance displays and pushes them around the battlefield. Its proficiency ranks for Athletics and Intimidation increase to expert (or master if it was already expert from its type), its Strength modifier increases by 1, and its Charisma modifier increases by 3.\n\n**Daredevil:** Your companion joins the fray with graceful leaps and dives. It gains the deny advantage ability, so it isn't off-guard to hidden, undetected, or flanking creatures unless such a creature's level is greater than yours. Its proficiency rank in Acrobatics increases to master, and its Dexterity modifier increases by 1. Its proficiency rank in unarmored defense increases to expert.\n\n**Racer:** Your companion races. It gains a +10-foot status bonus to its Speed, swim Speed, or fly Speed (your choice). Its proficiency in Fortitude saves increases to legendary, and its Constitution modifier increases by 1.\n\n**Tracker:** Your companion is an incredible tracker. It can move at full Speed while following tracks. Its proficiency rank in Survival increases to expert (or master if it was already an expert from its type), and its Wisdom modifier increases by 1.\n\n**Wrecker:** Your companion smashes things. Its unarmed attacks ignore half an object's Hardness. Its Athletics proficiency increases to master, and its Strength modifier increases by 1.",
  },
})

export const FamiliarsSection = Content.defineSection('classes/familiars', {
  parent: CompanionsSection,
  content: {
    name: 'Familiars',
    description:
      'Familiars are mystically bonded creatures tied to your magic. Most familiars were originally animals, though the ritual of becoming a familiar makes them something more. You gain the [Pet](trait:feat/pet) general feat, except that your pet has special abilities. Common choices for familiars include bats, cats, foxes, ravens, and snakes. Some familiars are different, usually described in the ability that granted you a familiar; for example, a druid’s leshy familiar has the plant or fungus trait instead of animal. You can replace a familiar or gain a new one as described in the Pet feat. A familiar is different from a basic pet in the following ways.',
  },
})

export const ModifiersAndACSection = Content.defineSection('classes/modifiers-and-ac', {
  parent: FamiliarsSection,
  content: {
    name: 'Modifiers and AC',
    description:
      'For Perception, Acrobatics, and Stealth, you can have your familiar use your spellcasting attribute modifier + your level instead of 3 + your level if it’s higher.',
  },
})

export const CommunicationSection = Content.defineSection('classes/communication', {
  parent: FamiliarsSection,
  content: {
    name: 'Communication',
    description:
      'Your familiar can communicate empathically with you as long as it’s within 1 mile of you, sharing emotions. It doesn’t understand or speak languages normally, but it can gain speech from a familiar ability.',
  },
})

export const SelectingFamiliarAndMasterAbilitiesSection = Content.defineSection('classes/selecting-familiar-and-master-abilities', {
  parent: FamiliarsSection,
  content: {
    name: 'Selecting Familiar and Master Abilities',
    description:
      'Instead of choosing two abilities only when you gain your familiar as you do with a normal pet, you can choose the two abilities each day during your daily preparations. You can choose from familiar abilities and master abilities. You can choose the pet abilities from the feat as familiar abilities as well. You can’t swap out abilities that are innate to your familiar. For example, you couldn’t choose not to give a raven familiar flying.',
  },
})

export const FamiliarAbilitiesSection = Content.defineSection('classes/familiar-abilities', {
  parent: FamiliarsSection,
  content: {
    name: 'Familiar Abilities',
    description:
      "Familiar abilities primarily affect the familiar itself. A familiar can have no more than one ability that changes its creature trait (such as construct or plant). You can choose a pet ability (from the Pet feat, page 259) as a familiar ability: amphibious, burrower, climber, darkvision, echolocation, fast movement, flier, manual dexterity, scent, or tough (see the sidebar).\n\n**Pet Feat Abilities**\n\nThe following abilities you can choose from the Pet general feat (page 259) are repeated here for convenience.\n\n- **Amphibious** It gains the amphibious trait, allowing it to breathe in both air and water, and has both a land Speed and a swim Speed, each equal to its highest land Speed or swim Speed.\n\n- **Burrower** It gains a burrow Speed of 5 feet, allowing it to dig Tiny holes.\n\n- **Climber** It gains a climb Speed of 25 feet.\n\n- **Darkvision** It gains darkvision.\n\n- **Echolocation** It can use hearing as a precise sense within 20 feet.\n\n- **Fast Movement** Increase one of the pet's Speeds from 25 feet to 40 feet.\n\n- **Flier** It gains a fly Speed of 25 feet.\n\n- **Manual Dexterity** It can use up to two of its limbs as if they were hands to perform manipulate actions.\n\n- **Scent** It can use scent as an imprecise sense within 30 feet\n\n- **Tough** Your pet's max HP increase by 2 per level\n\n**Targeting Companions**\n\nSome spells and abilities can affect your companion. When “companion” is used in a stat block, it refers to animal companions, familiars, and types of companions appearing in other books—such as elemental companions. Some spells are even more specific. For example, if the spell says, “**Targets** your familiar,” you could cast it only on a familiar, not other kinds of companions. If you Cast a Spell that can benefit only a type of creature you don't have, such as Casting a Spell that can target only a familiar when you don't have a familiar, the spell does nothing.\n\nIf the spell would affect an ability the creature doesn't have, the spell doesn't give the creature that ability unless the spell says it does. For example, a spell that causes your companion to make a Strike wouldn't let a familiar make a Strike but would give it all other benefits of the spell.",
  },
})

export const ManualDexteritySection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.ManualDexterity)

export const PlantSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Plant)

export const ResistanceSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Resistance)

export const SpeechSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Speech)

export const ToughSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Tough)

export const AccompanistSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Accompanist)

export const AmphibiousSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Amphibious)

export const BurrowerSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Burrower)

export const ClimberSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Climber)

export const ConstructSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Construct)

export const DamageAvoidanceSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.DamageAvoidance)

export const DarkvisionSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Darkvision)

export const DragonSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Dragon)

export const EcholocationSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Echolocation)

export const ElementalSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Elemental)

export const FastMovementSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.FastMovement)

export const FlierSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Flier)

export const FocusedRejuvenationSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.FocusedRejuvenation)

export const FungusSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Fungus)

export const IndependentSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Independent)

export const KinspeechSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Kinspeech)

export const MajorResistanceSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.MajorResistance)

export const MastersFormSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.MastersForm)

export const PartnerInCrimeSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.PartnerInCrime)

export const PlantFormSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.PlantForm)

export const ScentSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Scent)

export const SkilledSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Skilled)

export const SpellcastingSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Spellcasting)

export const ToolbearerSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Toolbearer)

export const TouchTelepathySection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.TouchTelepathy)

export const ValetSection = Content.linkEntity(FamiliarAbilitiesSection, Familiar.Valet)

export const MasterAbilitiesSection = Content.defineSection('classes/master-abilities', {
  parent: FamiliarsSection,
  content: { name: 'Master Abilities', description: 'Master abilities primarily affect you or the magic that passes between you and your familiar.' },
})

export const AbsorbFamiliarSection = Content.linkEntity(MasterAbilitiesSection, Familiar.AbsorbFamiliar)

export const CantripConnectionSection = Content.linkEntity(MasterAbilitiesSection, Familiar.CantripConnection)

export const FamiliarFocusSection = Content.linkEntity(MasterAbilitiesSection, Familiar.FamiliarFocus)

export const InnateSurgeSection = Content.linkEntity(MasterAbilitiesSection, Familiar.InnateSurge)

export const LifelinkSection = Content.linkEntity(MasterAbilitiesSection, Familiar.Lifelink)

export const RecallFamiliarSection = Content.linkEntity(MasterAbilitiesSection, Familiar.RecallFamiliar)

export const RestorativeFamiliarSection = Content.linkEntity(MasterAbilitiesSection, Familiar.RestorativeFamiliar)

export const ShareSensesSection = Content.linkEntity(MasterAbilitiesSection, Familiar.ShareSenses)

export const SpellBatterySection = Content.linkEntity(MasterAbilitiesSection, Familiar.SpellBattery)

export const SpellDeliverySection = Content.linkEntity(MasterAbilitiesSection, Familiar.SpellDelivery)

export const ArchetypesSection = Content.defineSection('classes/archetypes', {
  parent: ClassesSection,
  content: {
    name: 'Archetypes',
    description:
      "Character concepts come in infinite possibilities, but you might find that the feats and skill choices from a single class aren't sufficient to fully realize your character. Archetypes allow you to expand the scope of your character's class.\n\nYou gain an archetype by selecting archetype feats instead of your normal feats. First, find the archetype that best fits your character concept. Then select that archetype's dedication feat, using one of your class feat choices. Once you've taken the dedication feat, you can select any feat from that archetype, as long as you meet its prerequisites. Most archetype feats are taken in place of class feats, and so these are called archetype class feats.\n\nAn archetype feat is subject to any restrictions on the class feat it replaces. For example, if you had an ability at 6th level that granted you a bonus class feat, but that class feat had to be 4th level or lower and have the dwarf trait, you could use that class feat to take an archetype class feat, but only one of 4th level or lower with the dwarf trait.",
  },
})

export const DedicationDetailsSection = Content.defineSection('classes/dedication-details', {
  parent: ArchetypesSection,
  content: {
    name: 'Dedication Details',
    description:
      'Each archetype’s dedication feat represents your character’s dedicated effort learning a new set of abilities, making it impossible to split your focus and pursue another archetype at the same time. Once you take a dedication feat, you can’t select a different dedication feat until you complete your dedication by taking two other feats from your current archetype. You can’t retrain a dedication feat as long as you have any other feats from that archetype.',
  },
})

export const MulticlassDedicationsSection = Content.defineSection('classes/multiclass-dedications', {
  parent: DedicationDetailsSection,
  content: {
    name: 'Multiclass Dedications',
    description:
      'All archetypes in this book have the multiclass trait. These allow you to diversify your training into another class’s specialties. You can’t select a multiclass archetype’s dedication feat if you are already a member of that class.',
  },
})

export const AdditionalFeatsSection = Content.defineSection('classes/additional-feats', {
  parent: ArchetypesSection,
  content: {
    name: 'Additional Feats',
    description:
      'Some archetypes include a list of “Additional Feats” that appear in other sources. The list includes each feat’s level, which might be different than normal when gained from the archetype. You can take the feat as an archetype feat of that level, meaning it counts toward the number of feats required by the archetype’s dedication feat. When selected this way, a feat that normally has a class’s trait (such as the fighter trait) doesn’t have that class trait.',
  },
})

export const FeatsThatGrantFeatsSection = Content.defineSection('classes/feats-that-grant-feats', {
  parent: ArchetypesSection,
  content: {
    name: 'Feats that Grant Feats',
    description:
      'Sometimes an archetype feat lets you select another feat, such as a class feat of a lower level. You must always meet any prerequisites of the feat you gain in this way. These always count as only one feat for the purposes of your dedication; for example, taking the cleric archetype’s Basic Dogma feat to gain the Healing Hands class feat counts as only one feat, not two.',
  },
})

export const SpellcastingArchetypesSection = Content.defineSection('classes/spellcasting-archetypes', {
  parent: ArchetypesSection,
  content: {
    name: 'Spellcasting Archetypes',
    description:
      "Some archetypes grant you a substantial degree of spellcasting, albeit delayed compared to a character from a spellcasting class. The spellcasting ability from a spellcasting archetype also allows you to use [Cast a Spell](content:spells/cast-a-spell) activations of items (such as scrolls, staves, and wands).\n\nSpellcasting archetypes always grant the ability to cast cantrips in their dedication, and then they have a basic spellcasting feat, an expert spellcasting feat, and a master spellcasting feat. These feats share their name with the archetype; for instance, the druid's master spellcasting feat is called Master Druid Spellcasting. All spell slots you gain from spellcasting archetypes are subject to the restrictions within the archetype. For instance, the witch archetype allows you to pick a patron when you take its dedication feat. If you pick patron granting occult spells, the archetype then grants you spell slots you can use only to cast occult spells you prepare as a [witch](trait:witch), even if you are a [bard](trait:bard) with occult spells in your repertoire.\n\n**Basic Spellcasting Feat:** Usually available at 4th level, these feats grant a 1st-rank spell slot. At 6th level, they grant you a 2nd-rank spell slot, and if you have a spell repertoire, you can select one spell from your repertoire as a signature spell. At 8th level, they grant you a 3rd-rank spell slot. Archetypes refer to these benefits as the “basic spellcasting benefits.”\n\n**Expert Spellcasting Feat:** Typically taken at 12th level, these feats make you an expert in spell attack modifiers and spell DCs and grant you a 4th-rank spell slot. If you have a spell repertoire, you can select a second spell from your repertoire as a signature spell. At 14th level, they grant you a 5th-rank spell slot, and at 16th level, they grant you a 6th-rank spell slot. Archetypes refer to these benefits as the “expert spellcasting benefits.”\n\n**Master Spellcasting Feat:** Usually found at 18th level, these feats make you a master in spell attack modifiers and spell DCs and grant you a 7th-rank spell slot. If you have a spell repertoire, you can select a third spell from your repertoire as a signature spell. At 20th level, they grant you an 8th-rank spell slot. Archetypes refer to these benefits as the “master spellcasting benefits.”",
  },
})

export const SpecialArchetypesSection = Content.defineSection('classes/special-archetypes', {
  parent: ArchetypesSection,
  content: {
    name: 'Special Archetypes',
    description:
      'Some archetype feats in other books have the skill trait, allowing you to take them in place of a skill feat rather than a class feat. A skill feat still counts to satisfy the requirement of the dedication. There are also class archetypes that can modify your class’s abilities as soon as 1st level. You can never have more than one class archetype.',
  },
})

export const ClassesContent = [
  ClassesSection,
  ReadingClassEntriesSection,
  PlayingTheClassSection,
  KeyAttributeSection,
  HitPointsSection,
  InitialProficienciesSection,
  AdvancementTableSection,
  ClassFeaturesSection,
  ClassFeatsSection,
  SkillFeatsSection,
  GeneralFeatsSection,
  SkillIncreasesSection,
  AttributeBoostsSection,
  AncestryFeatsSection,
  BardSection,
  CompositionSpellsSection,
  MusesSection,
  EnigmaSection,
  MaestroSection,
  PolymathSection,
  WarriorSection,
  ReflexExpertiseSection,
  SignatureSpellsSection,
  BardSpellcastingSection,
  SpellRepertoireSection,
  BardFeatsSection,
  BardicLoreSection,
  HymnOfHealingSection,
  LingeringCompositionSection,
  MartialPerformanceSection,
  ReachSpellSection,
  VersatilePerformanceSection,
  WellVersedSection,
  CantripExpansionSection,
  DirectedAudienceSection,
  EmotionalPushSection,
  EsotericPolymathSection,
  LoremastersEtudeSection,
  MultifariousMuseSection,
  MultifariousMuseEnigmaSection,
  MultifariousMuseMaestroSection,
  MultifariousMusePolymathSection,
  MultifariousMuseWarriorSection,
  SongOfStrengthSection,
  UpliftingOvertureSection,
  CombatReadingSection,
  CourageousAdvanceSection,
  InTuneSection,
  MelodiousSpellSection,
  RallyingAnthemSection,
  RitualResearcherSection,
  TripleTimeSection,
  VersatileSignatureSection,
  BardFocusSpellsSection,
  CounterPerformanceSection,
  BardFocusSpellsHymnOfHealingSection,
  BardFocusSpellsLingeringCompositionSection,
  BardFocusSpellsLoremastersEtudeSection,
  ClericSection,
  DeitySection,
  HolySection,
  UnholySection,
  NoSanctificationSection,
  ClericSpellcastingSection,
  DivineFontSection,
  HealingFontSection,
  HarmfulFontSection,
  DoctrineSection,
  CloisteredClericSection,
  WarpriestSection,
  PerceptionExpertiseSection,
  ClericDomainsSection,
  AirDomainSection,
  AmbitionDomainSection,
  CitiesDomainSection,
  ConfidenceDomainSection,
  CreationDomainSection,
  DarknessDomainSection,
  DeathDomainSection,
  DestructionDomainSection,
  DreamsDomainSection,
  EarthDomainSection,
  FamilyDomainSection,
  FateDomainSection,
  FireDomainSection,
  FreedomDomainSection,
  HealingDomainSection,
  IndulgenceDomainSection,
  KnowledgeDomainSection,
  LuckDomainSection,
  MagicDomainSection,
  MightDomainSection,
  MoonDomainSection,
  NatureDomainSection,
  NightmaresDomainSection,
  PainDomainSection,
  PassionDomainSection,
  PerfectionDomainSection,
  ProtectionDomainSection,
  SecrecyDomainSection,
  SunDomainSection,
  TravelDomainSection,
  TrickeryDomainSection,
  TruthDomainSection,
  TyrannyDomainSection,
  UndeathDomainSection,
  WaterDomainSection,
  WealthDomainSection,
  ZealDomainSection,
  ClericFeatsSection,
  DomainInitiateSection,
  DeadlySimplicitySection,
  DivineCastigationSection,
  HarmingHandsSection,
  HealingHandsSection,
  PremonitionOfAvoidanceSection,
  CommunalHealingSection,
  EmblazonArmamentSection,
  PanicTheDeadSection,
  RapidResponseSection,
  SapLifeSection,
  VersatileFontSection,
  WarpriestsArmorSection,
  ChannelSmiteSection,
  DirectedChannelSection,
  DivineInfusionSection,
  RaiseSymbolSection,
  RestorativeStrikeSection,
  SacredGroundSection,
  ClericFocusSpellsSection,
  AgileFeetSection,
  AppearanceOfWealthSection,
  AthleticRushSection,
  BitOfLuckSection,
  CharmingTouchSection,
  CloakOfShadowSection,
  CreativeSplashSection,
  CryOfDestructionSection,
  DazzlingFlashSection,
  DeathsCallSection,
  FaceInTheCrowdSection,
  FireRaySection,
  HealersBlessingSection,
  HurtlingStoneSection,
  IgniteAmbitionSection,
  MagicsVesselSection,
  MoonbeamSection,
  OverstuffSection,
  PerfectedMindSection,
  ProtectorsSacrificeSection,
  PushingGustSection,
  ReadFateSection,
  SavorTheStingSection,
  ScholarlyRecollectionSection,
  SoothingWordsSection,
  SuddenShiftSection,
  SweetDreamSection,
  TidalSurgeSection,
  TouchOfObedienceSection,
  TouchOfUndeathSection,
  UnimpededStrideSection,
  VeilOfConfidenceSection,
  VibrantThornsSection,
  WakingNightmareSection,
  WeaponSurgeSection,
  WhisperingQuietSection,
  WordOfTruthSection,
  DruidSection,
  DruidSpellcastingSection,
  AnathemaSection,
  DruidicOrderSection,
  AnimalOrderSection,
  LeafOrderSection,
  StormOrderSection,
  UntamedOrderSection,
  ShieldBlockSection,
  VoiceOfNatureSection,
  WildsongSection,
  DruidPerceptionExpertiseSection,
  FortitudeExpertiseSection,
  DruidReflexExpertiseSection,
  DruidFeatsSection,
  AnimalCompanionSection,
  AnimalEmpathyDruidSection,
  LeshyFamiliarSection,
  PlantEmpathySection,
  StormBornSection,
  UntamedFormSection,
  VerdantWeaponSection,
  WidenSpellSection,
  CallOfTheWildSection,
  EnhancedFamiliarSection,
  PoisonResistanceSection,
  AnthropomorphicShapeSection,
  ElementalSummonsSection,
  ForestPassageSection,
  FormControlSection,
  LeshyFamiliarSecretsSection,
  MatureAnimalCompanionDruidSection,
  SnowdriftSpellSection,
  OrderExplorerSection,
  OrderExplorerAnimalSection,
  OrderExplorerLeafSection,
  OrderExplorerStormSection,
  OrderExplorerUntamedSection,
  OrderMagicSection,
  OrderMagicAnimalSection,
  OrderMagicLeafSection,
  OrderMagicStormSection,
  OrderMagicUntamedSection,
  DruidFocusSpellsSection,
  CornucopiaSection,
  HealAnimalSection,
  TempestSurgeSection,
  DruidFocusSpellsUntamedFormSection,
  UntamedShiftSection,
  FighterSection,
  ReactiveStrikeSection,
  FighterShieldBlockSection,
  BraverySection,
  FighterWeaponMasterySection,
  FighterFeatsSection,
  CombatAssessmentSection,
  DoubleSliceSection,
  ExactingStrikeSection,
  PointBlankStanceSection,
  ReactiveShieldSection,
  SnaggingStrikeSection,
  SuddenChargeSection,
  ViciousSwingSection,
  AggressiveBlockSection,
  AssistingShotSection,
  BladeBrakeSection,
  BrutishShoveSection,
  CombatGrabSection,
  DuelingParrySection,
  IntimidatingStrikeSection,
  LightningSwapSection,
  LungeSection,
  ReboundingTossSection,
  SleekRepositionSection,
  BarrelingChargeSection,
  DoubleShotSection,
  DualHandedAssaultSection,
  PartingShotSection,
  PowerfulShoveSection,
  QuickReversalSection,
  ShieldedStrideSection,
  SlamDownSection,
  SwipeSection,
  TwinParrySection,
  RangerSection,
  HuntPreySection,
  HuntersEdgeSection,
  FlurrySection,
  OutwitSection,
  PrecisionSection,
  WillExpertiseSection,
  RangerWeaponExpertiseSection,
  TracklessJourneySection,
  RangerFeatsSection,
  CrossbowAceSection,
  HuntedShotSection,
  InitiateWardenSection,
  InitiateWardenAdditionalSpellSection,
  MonsterHunterSection,
  TwinTakedownSection,
  AnimalEmpathySection,
  FavoredTerrainSection,
  HuntersAimSection,
  MonsterWardenSection,
  QuickDrawSection,
  AdvancedWardenSection,
  CompanionsCrySection,
  DisruptPreySection,
  FarShotSection,
  FavoredPreySection,
  RunningReloadSection,
  ScoutsWarningSection,
  RangerFocusSpellsSection,
  GravityWeaponSection,
  HealCompanionSection,
  MagicHideSection,
  AnimalFeatureSection,
  EnlargeCompanionSection,
  HuntersLuckSection,
  SoothingMistSection,
  EphemeralTrackingSection,
  RangersBrambleSection,
  RogueSection,
  RoguesRacketSection,
  MastermindSection,
  RuffianSection,
  ScoundrelSection,
  ThiefSection,
  SneakAttackSection,
  SurpriseAttackSection,
  DenyAdvantageSection,
  WeaponTricksSection,
  RogueFeatsSection,
  NimbleDodgeSection,
  OverextendingFeintSection,
  PlantEvidenceSection,
  TrapFinderSection,
  TumbleBehindSection,
  TwinFeintSection,
  YoureNextSection,
  BrutalBeatingSection,
  CleverGambitSection,
  DistractingFeintSection,
  MobilitySection,
  StrongArmSection,
  UnbalancingBlowSection,
  UnderhandedAssaultSection,
  DreadStrikerSection,
  HeadStompSection,
  MugSection,
  PoisonWeaponSection,
  PredictableSection,
  ReactivePursuitSection,
  SabotageSection,
  ScoundrelsSurpriseSection,
  TheHarderTheyFallSection,
  TwinDistractionSection,
  WitchSection,
  PatronSection,
  FaithsFlamekeeperSection,
  SilenceInSnowSection,
  SpinnerOfThreadsSection,
  StarlessShadowSection,
  TheInscribedOneSection,
  TheResentmentSection,
  WildingStewardSection,
  WitchSpellcastingSection,
  FamiliarSection,
  HexSpellsSection,
  MagicalFortitudeSection,
  WitchSpellcastingArcaneSection,
  WitchSpellcastingDivineSection,
  WitchSpellcastingOccultSection,
  WitchSpellcastingPrimalSection,
  WitchLessonsSection,
  LessonOfDreamsSection,
  LessonOfLifeSection,
  LessonOfProtectionSection,
  LessonOfVengeanceSection,
  LessonOfTheElementsSection,
  LessonOfMischiefSection,
  LessonOfShadowSection,
  LessonOfSnowSection,
  WitchFeatsSection,
  CackleSection,
  CauldronSection,
  CounterspellSection,
  WitchsArmamentsSection,
  WitchsArmamentsEldritchNailsSection,
  WitchsArmamentsIronTeethSection,
  WitchsArmamentsLivingHairSection,
  BasicLessonSection,
  ConcealSpellSection,
  FamiliarsLanguageSection,
  RitesOfConvocationSection,
  SympatheticStrikeSection,
  WitchFocusSpellsSection,
  BloodWardSection,
  WitchFocusSpellsCackleSection,
  ElementalBetrayalSection,
  LifeBoostSection,
  NeedleOfVengeanceSection,
  PatronsPuppetSection,
  PhaseFamiliarSection,
  VeilOfDreamsSection,
  DeceiversCloakSection,
  MaliciousShadowSection,
  PersonalBlizzardSection,
  WizardSection,
  ArcaneThesisSection,
  ExperimentalSpellshapingSection,
  ImprovedFamiliarAttunementSection,
  SpellBlendingSection,
  SpellSubstitutionSection,
  StaffNexusSection,
  WizardSpellcastingSection,
  ArcaneBondSection,
  WizardFeatsSection,
  WizardReflexExpertiseSection,
  ArcaneSchoolSection,
  SchoolOfArsGrammaticaSection,
  SchoolOfBattleMagicSection,
  SchoolOfCivicWizardrySection,
  SchoolOfMentalismSection,
  SchoolOfProteanFormSection,
  SchoolOfUnifiedMagicalTheorySection,
  SchoolOfTheBoundarySection,
  WizardWizardFeatsSection,
  WizardWizardFeatsFamiliarSection,
  SpellbookProdigySection,
  EnergyAblationSection,
  NonlethalSpellSection,
  BespellStrikesSection,
  CallWizardlyToolsSection,
  LinkedFocusSection,
  SpellProtectionArraySection,
  WizardFocusSpellsSection,
  CharmingPushSection,
  EarthworksSection,
  ForceBoltSection,
  FortifySummoningSection,
  HandOfTheApprenticeSection,
  ProtectiveWardsSection,
  ScrambleBodySection,
  CompanionsSection,
  AnimalCompanionsSection,
  YoungAnimalCompanionsSection,
  CompanionTypesSection,
  SupportSection,
  ApeSection,
  ArborealSaplingSection,
  BadgerSection,
  BatSection,
  BearSection,
  BirdSection,
  BoarSection,
  CatSection,
  CrocodileSection,
  DromaeosaurSection,
  HorseSection,
  RidingDrakeSection,
  ScorpionSection,
  SharkSection,
  SnakeSection,
  WolfSection,
  CompanionAdvancementSection,
  MatureAnimalCompanionsSection,
  NimbleAnimalCompanionsSection,
  SavageAnimalCompanionsSection,
  SpecializedAnimalCompanionsSection,
  FamiliarsSection,
  ModifiersAndACSection,
  CommunicationSection,
  SelectingFamiliarAndMasterAbilitiesSection,
  FamiliarAbilitiesSection,
  ManualDexteritySection,
  PlantSection,
  ResistanceSection,
  SpeechSection,
  ToughSection,
  AccompanistSection,
  AmphibiousSection,
  BurrowerSection,
  ClimberSection,
  ConstructSection,
  DamageAvoidanceSection,
  DarkvisionSection,
  DragonSection,
  EcholocationSection,
  ElementalSection,
  FastMovementSection,
  FlierSection,
  FocusedRejuvenationSection,
  FungusSection,
  IndependentSection,
  KinspeechSection,
  MajorResistanceSection,
  MastersFormSection,
  PartnerInCrimeSection,
  PlantFormSection,
  ScentSection,
  SkilledSection,
  SpellcastingSection,
  ToolbearerSection,
  TouchTelepathySection,
  ValetSection,
  MasterAbilitiesSection,
  AbsorbFamiliarSection,
  CantripConnectionSection,
  FamiliarFocusSection,
  InnateSurgeSection,
  LifelinkSection,
  RecallFamiliarSection,
  RestorativeFamiliarSection,
  ShareSensesSection,
  SpellBatterySection,
  SpellDeliverySection,
  ArchetypesSection,
  DedicationDetailsSection,
  MulticlassDedicationsSection,
  AdditionalFeatsSection,
  FeatsThatGrantFeatsSection,
  SpellcastingArchetypesSection,
  SpecialArchetypesSection,
]
