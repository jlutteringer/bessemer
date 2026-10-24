import { Content } from '@simulacrum/ruleset'
import * as AncestryDwarf from '@simulacrum/ruleset-pf2e/ancestry/ancestry-dwarf'
import * as AncestryElf from '@simulacrum/ruleset-pf2e/ancestry/ancestry-elf'
import * as AncestryGnome from '@simulacrum/ruleset-pf2e/ancestry/ancestry-gnome'
import * as AncestryGoblin from '@simulacrum/ruleset-pf2e/ancestry/ancestry-goblin'
import * as AncestryHalfling from '@simulacrum/ruleset-pf2e/ancestry/ancestry-halfling'
import * as AncestryHuman from '@simulacrum/ruleset-pf2e/ancestry/ancestry-human'
import * as AncestryLeshy from '@simulacrum/ruleset-pf2e/ancestry/ancestry-leshy'
import * as AncestryOrc from '@simulacrum/ruleset-pf2e/ancestry/ancestry-orc'
import * as VersatileHeritage from '@simulacrum/ruleset-pf2e/ancestry/versatile-heritage'
import * as Background from '@simulacrum/ruleset-pf2e/background'

export const AncestriesBackgroundsSection = Content.defineSection('ancestries-and-backgrounds', {
  content: {
    name: 'Ancestries & Backgrounds',
    description:
      "Your character's ancestry determines which people they call their own, whether it's diverse and ambitious humans, insular but vivacious elves, traditionalist and family-focused dwarves, or any of the other folk who call Golarion home. A character's ancestry and their experiences prior to their life as an adventurer—represented by a background—might be key parts of their identity, shape how they see the world, and help them find their place in it.\n\nA character has one ancestry and one background, both of which you select during character creation. You'll also select a number of languages for your character. Once chosen, your ancestry and background can't be changed.\n\nThis chapter is divided into four parts:\n\n- **Ancestries** express the culture your character hails from. Within ancestries are heritages—subgroups that have unique characteristics. An ancestry provides attribute boosts (and perhaps attribute flaws), Hit Points,ancestry feats, and sometimes additional abilities.\n\n- **Versatile heritages**, starting on page 74, are heritage options available to all ancestries for extra customization, such as a character who has a mixed ancestry or one with a more unique or unusual origin.\n\n- **Backgrounds**, starting on page 84, describe training or environments your character experienced before becoming an adventurer. Your character's background provides attribute boosts, skill training, and a skill feat.\n\n- **Languages**, starting on page 89, let your character communicate with the wonderful and weird people and creatures of the world.",
  },
})

export const AncestryEntriesSection = Content.defineSection('ancestries-and-backgrounds/ancestry-entries', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Ancestry Entries',
    description: 'Each entry includes details about the ancestry and presents the rules elements described below',
  },
})

export const HitPointsSection = Content.defineSection('ancestries-and-backgrounds/hit-points', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Hit Points',
    description:
      'This tells you how many Hit Points your character gains from their ancestry at 1st level. You’ll add the Hit Points from your character’s class (including their Constitution modifier) to this number. For more on calculating Hit Points, see Step 7: Record Class Details, on page 24.',
  },
})

export const SizeSection = Content.defineSection('ancestries-and-backgrounds/size', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Size',
    description:
      'This tells you the physical size of members of the ancestry. Medium corresponds roughly to the height and weight range of a human adult, and Small is roughly half that.',
  },
})

export const SpeedSection = Content.defineSection('ancestries-and-backgrounds/speed', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Speed',
    description: 'This entry lists how far a member of the ancestry can move each time they spend an action (such as Stride) to do so.',
  },
})

export const AttributeBoostsFlawsSection = Content.defineSection('ancestries-and-backgrounds/attribute-boosts-flaws', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Attribute Boosts & Flaws',
    description:
      'When creating a character of this ancestry, you apply attribute boosts to increases some attribute modifiers, and possibly attribute flaws to decrease others (depending on the ancestry). For more about attribute boosts and flaws, see page 19.\n\n**Alternate Ancestry Boosts**: Because of the wide variety of people within any ancestry, you can always choose to take two free boosts to represent your character, even if the ancestry normally has three boosts and a flaw.',
  },
})

export const LanguagesSection = Content.defineSection('ancestries-and-backgrounds/languages', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Languages',
    description:
      'This tells you the languages that members of the ancestry speak at 1st level. If your Intelligence modifier is +1 or higher, you can select more languages from a list given here. More about languages can be found [here](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages).',
  },
})

export const TraitsSection = Content.defineSection('ancestries-and-backgrounds/traits', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Traits',
    description:
      "The traits for this book's ancestries have no rules benefit, but are important for determining how spells, effects, and other aspects of the game interact with your character.",
  },
})

export const SpecialAbilitiesSection = Content.defineSection('ancestries-and-backgrounds/special-abilities', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Special Abilities',
    description:
      'Any other entries in the sidebar represent abilities, senses, and other qualities all members of the ancestry manifest. These are omitted for ancestries with no special rules.',
  },
})

export const HeritagesSection = Content.defineSection('ancestries-and-backgrounds/heritages', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Heritages',
    description:
      'You select a heritage at 1st level to reflect abilities passed down to you from your ancestors or common among those of your ancestry in the environment where you were born or grew up. You have only one heritage and can’t change it later. A heritage is not the same as a culture or ethnicity, though some cultures or ethnicities might have more or fewer members from a particular heritage.',
  },
})

export const AncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/ancestry-feats', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Ancestry Feats',
    description:
      'This section presents ancestry feats, which allow you to customize your character. You gain your first ancestry feat at 1st level, and you gain another at 5th level, 9th level, 13th level, and 17th level, as indicated in the class advancement table in the descriptions of each class.\n\nAncestry feats are organized by level. As a starting character, you can choose from only 1st-level ancestry feats, but later choices can be made from any feat of your level or lower. These feats also sometimes list prerequisites—requirements that your character must fulfill to select that feat.',
  },
})

export const DwarfSection = Content.linkEntity(AncestriesBackgroundsSection, AncestryDwarf.Dwarf)

export const DwarfHeritagesSection = Content.defineSection('ancestries-and-backgrounds/dwarf-heritages', {
  parent: DwarfSection,
  content: { name: 'Dwarf Heritages' },
})

export const DeathWardenDwarfSection = Content.linkEntity(DwarfHeritagesSection, AncestryDwarf.DeathWardenDwarf)

export const ForgeDwarfSection = Content.linkEntity(DwarfHeritagesSection, AncestryDwarf.ForgeDwarf)

export const RockDwarfSection = Content.linkEntity(DwarfHeritagesSection, AncestryDwarf.RockDwarf)

export const StrongBloodedDwarfSection = Content.linkEntity(DwarfHeritagesSection, AncestryDwarf.StrongBloodedDwarf)

export const AncientBloodedDwarfSection = Content.linkEntity(DwarfHeritagesSection, AncestryDwarf.AncientBloodedDwarf)

export const DwarfAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/dwarf-ancestry-feats', {
  parent: DwarfSection,
  content: { name: 'Dwarf Ancestry Feats' },
})

export const DwarvenDoughtinessSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.DwarvenDoughtiness)

export const DwarvenLoreSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.DwarvenLore)

export const DwarvenWeaponFamiliaritySection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.DwarvenWeaponFamiliarity)

export const MountainStrategySection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.MountainStrategy)

export const RockRunnerSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.RockRunner)

export const StonemasonsEyeSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.StonemasonsEye)

export const UnburdenedIronSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.UnburdenedIron)

export const BoulderRollSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.BoulderRoll)

export const DefyTheDarknessSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.DefyTheDarkness)

export const DwarvenReinforcementSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.DwarvenReinforcement)

export const ElfSection = Content.linkEntity(AncestriesBackgroundsSection, AncestryElf.Elf)

export const ElfHeritagesSection = Content.defineSection('ancestries-and-backgrounds/elf-heritages', {
  parent: ElfSection,
  content: { name: 'Elf Heritages' },
})

export const AncientElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.AncientElf)

export const ArcticElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.ArcticElf)

export const CavernElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.CavernElf)

export const SeerElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.SeerElf)

export const WhisperElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.WhisperElf)

export const WoodlandElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.WoodlandElf)

export const ElfAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/elf-ancestry-feats', {
  parent: ElfSection,
  content: { name: 'Elf Ancestry Feats' },
})

export const AncestralLongevitySection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.AncestralLongevity)

export const ElvenLoreSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.ElvenLore)

export const ElvenWeaponFamiliaritySection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.ElvenWeaponFamiliarity)

export const ForlornSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.Forlorn)

export const NimbleElfSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.NimbleElf)

export const OtherworldlyMagicSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.OtherworldlyMagic)

export const UnwaveringMienSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.UnwaveringMien)

export const AgelessPatienceSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.AgelessPatience)

export const AncestralSuspicionSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.AncestralSuspicion)

export const MartialExperienceSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.MartialExperience)

export const GnomeSection = Content.linkEntity(AncestriesBackgroundsSection, AncestryGnome.Gnome)

export const GnomeHeritagesSection = Content.defineSection('ancestries-and-backgrounds/gnome-heritages', {
  parent: GnomeSection,
  content: { name: 'Gnome Heritages' },
})

export const ChameleonGnomeSection = Content.linkEntity(GnomeHeritagesSection, AncestryGnome.ChameleonGnome)

export const FeyTouchedGnomeSection = Content.linkEntity(GnomeHeritagesSection, AncestryGnome.FeyTouchedGnome)

export const SensateGnomeSection = Content.linkEntity(GnomeHeritagesSection, AncestryGnome.SensateGnome)

export const UmbralGnomeSection = Content.linkEntity(GnomeHeritagesSection, AncestryGnome.UmbralGnome)

export const WellspringGnomeSection = Content.linkEntity(GnomeHeritagesSection, AncestryGnome.WellspringGnome)

export const GnomeAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/gnome-ancestry-feats', {
  parent: GnomeSection,
  content: { name: 'Gnome Ancestry Feats' },
})

export const AnimalAccompliceSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.AnimalAccomplice)

export const AnimalElocutionistSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.AnimalElocutionist)

export const FeyFellowshipSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.FeyFellowship)

export const FirstWorldMagicSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.FirstWorldMagic)

export const GnomeObsessionSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.GnomeObsession)

export const GnomeWeaponFamiliaritySection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.GnomeWeaponFamiliarity)

export const IllusionSenseSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.IllusionSense)

export const RazzleDazzleSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.RazzleDazzle)

export const EnergizedFontSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.EnergizedFont)

export const ProjectPersonaSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.ProjectPersona)

export const GoblinSection = Content.linkEntity(AncestriesBackgroundsSection, AncestryGoblin.Goblin)

export const GoblinHeritagesSection = Content.defineSection('ancestries-and-backgrounds/goblin-heritages', {
  parent: GoblinSection,
  content: { name: 'Goblin Heritages' },
})

export const CharhideGoblinSection = Content.linkEntity(GoblinHeritagesSection, AncestryGoblin.CharhideGoblin)

export const IrongutGoblinSection = Content.linkEntity(GoblinHeritagesSection, AncestryGoblin.IrongutGoblin)

export const RazortoothGoblinSection = Content.linkEntity(GoblinHeritagesSection, AncestryGoblin.RazortoothGoblin)

export const SnowGoblinSection = Content.linkEntity(GoblinHeritagesSection, AncestryGoblin.SnowGoblin)

export const UnbreakableGoblinSection = Content.linkEntity(GoblinHeritagesSection, AncestryGoblin.UnbreakableGoblin)

export const GoblinAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/goblin-ancestry-feats', {
  parent: GoblinSection,
  content: { name: 'Goblin Ancestry Feats' },
})

export const BurnItSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.BurnIt)

export const CityScavengerSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.CityScavenger)

export const GoblinLoreSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.GoblinLore)

export const GoblinScuttleSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.GoblinScuttle)

export const GoblinSongSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.GoblinSong)

export const GoblinWeaponFamiliaritySection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.GoblinWeaponFamiliarity)

export const JunkTinkerSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.JunkTinker)

export const RoughRiderSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.RoughRider)

export const VerySneakySection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.VerySneaky)

export const KneecapSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.Kneecap)

export const LoudSingerSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.LoudSinger)

export const VandalSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.Vandal)

export const HalflingSection = Content.linkEntity(AncestriesBackgroundsSection, AncestryHalfling.Halfling)

export const HalflingHeritagesSection = Content.defineSection('ancestries-and-backgrounds/halfling-heritages', {
  parent: HalflingSection,
  content: { name: 'Halfling Heritages' },
})

export const GutsyHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.GutsyHalfling)

export const HillockHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.HillockHalfling)

export const NomadicHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.NomadicHalfling)

export const TwilightHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.TwilightHalfling)

export const WildwoodHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.WildwoodHalfling)

export const JinxedHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.JinxedHalfling)

export const HalflingAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/halfling-ancestry-feats', {
  parent: HalflingSection,
  content: { name: 'Halfling Ancestry Feats' },
})

export const DistractingShadowsSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.DistractingShadows)

export const FolksyPatterSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.FolksyPatter)

export const HalflingLoreSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.HalflingLore)

export const HalflingLuckSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.HalflingLuck)

export const HalflingWeaponFamiliaritySection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.HalflingWeaponFamiliarity)

export const PrairieRiderSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.PrairieRider)

export const SureFeetSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.SureFeet)

export const TitanSlingerSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.TitanSlinger)

export const UnfetteredHalflingSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.UnfetteredHalfling)

export const WatchfulHalflingSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.WatchfulHalfling)

export const CulturalAdaptabilitySection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.CulturalAdaptability)

export const StepLivelySection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.StepLively)

export const HumanSection = Content.linkEntity(AncestriesBackgroundsSection, AncestryHuman.Human)

export const HumanHeritagesSection = Content.defineSection('ancestries-and-backgrounds/human-heritages', {
  parent: HumanSection,
  content: { name: 'Human Heritages' },
})

export const SkilledHumanSection = Content.linkEntity(HumanHeritagesSection, AncestryHuman.SkilledHuman)

export const VersatileHumanSection = Content.linkEntity(HumanHeritagesSection, AncestryHuman.VersatileHuman)

export const HumanAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/human-ancestry-feats', {
  parent: HumanSection,
  content: { name: 'Human Ancestry Feats' },
})

export const AdaptedCantripSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.AdaptedCantrip)

export const CooperativeNatureSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.CooperativeNature)

export const GeneralTrainingSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.GeneralTraining)

export const HaughtyObstinacySection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.HaughtyObstinacy)

export const NaturalAmbitionSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.NaturalAmbition)

export const NaturalSkillSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.NaturalSkill)

export const UnconventionalWeaponrySection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.UnconventionalWeaponry)

export const AdaptiveAdeptSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.AdaptiveAdept)

export const CleverImproviserSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.CleverImproviser)

export const SenseAlliesSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.SenseAllies)

export const LeshySection = Content.linkEntity(AncestriesBackgroundsSection, AncestryLeshy.Leshy)

export const LeshyHeritagesSection = Content.defineSection('ancestries-and-backgrounds/leshy-heritages', {
  parent: LeshySection,
  content: { name: 'Leshy Heritages' },
})

export const CactusLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.CactusLeshy)

export const FruitLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.FruitLeshy)

export const FungusLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.FungusLeshy)

export const GourdLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.GourdLeshy)

export const LeafLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.LeafLeshy)

export const LotusLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.LotusLeshy)

export const RootLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.RootLeshy)

export const SeaweedLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.SeaweedLeshy)

export const VineLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.VineLeshy)

export const LeshyAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/leshy-ancestry-feats', {
  parent: LeshySection,
  content: { name: 'Leshy Ancestry Feats' },
})

export const GraspingReachSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.GraspingReach)

export const HarmlesslyCuteSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.HarmlesslyCute)

export const LeshyLoreSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.LeshyLore)

export const LeshySuperstitionSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.LeshySuperstition)

export const SeedpodSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.Seedpod)

export const ShadowOfTheWildsSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.ShadowOfTheWilds)

export const UndauntedSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.Undaunted)

export const AnchoringRootsSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.AnchoringRoots)

export const LeshyGlideSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.LeshyGlide)

export const RitualReversionSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.RitualReversion)

export const SpeakWithKindredSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.SpeakWithKindred)

export const OrcSection = Content.linkEntity(AncestriesBackgroundsSection, AncestryOrc.Orc)

export const OrcHeritagesSection = Content.defineSection('ancestries-and-backgrounds/orc-heritages', {
  parent: OrcSection,
  content: { name: 'Orc Heritages' },
})

export const BadlandsOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.BadlandsOrc)

export const BattleReadyOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.BattleReadyOrc)

export const DeepOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.DeepOrc)

export const GraveOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.GraveOrc)

export const HoldScarredOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.HoldScarredOrc)

export const RainfallOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.RainfallOrc)

export const WinterOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.WinterOrc)

export const OrcAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/orc-ancestry-feats', {
  parent: OrcSection,
  content: { name: 'Orc Ancestry Feats' },
})

export const BeastTrainerSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.BeastTrainer)

export const IronFistsSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.IronFists)

export const OrcFerocitySection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.OrcFerocity)

export const OrcLoreSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.OrcLore)

export const OrcSuperstitionSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.OrcSuperstition)

export const HoldMarkSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.HoldMark)

export const HoldMarkBurningSunSection = Content.linkEntity(HoldMarkSection, AncestryOrc.HoldMarkBurningSun)

export const HoldMarkDeathsHeadSection = Content.linkEntity(HoldMarkSection, AncestryOrc.HoldMarkDeathsHead)

export const HoldMarkDefiledCorpseSection = Content.linkEntity(HoldMarkSection, AncestryOrc.HoldMarkDefiledCorpse)

export const HoldMarkEmptyHandSection = Content.linkEntity(HoldMarkSection, AncestryOrc.HoldMarkEmptyHand)

export const OrcWeaponFamiliaritySection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.OrcWeaponFamiliarity)

export const TusksSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.Tusks)

export const AthleticMightSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.AthleticMight)

export const BloodyBlowsSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.BloodyBlows)

export const DefyDeathSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.DefyDeath)

export const ScarThickSkinSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.ScarThickSkin)

export const VersatileHeritagesSection = Content.defineSection('ancestries-and-backgrounds/versatile-heritages', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Versatile Heritages',
    description:
      "The peoples of Golarion are many, and they have a long history of intermingling or dabbling with forces capable of altering the very fabric of a mortal body or soul. The children born to such parents might have traits from each of their parents or physiological manifestations of the forces their ancestors were influenced by, manifesting as a specific heritage.\n\nThe most common of these by far are the aiuvarin and dromaar versatile heritages, usually born to a human parent on one side and either an elf or orc parent on the other. Other individuals are born under far stranger circumstances, such as having a parent who was affected by monstrous, undead, or extraplanar energies. As these circumstances aren't unique to a single ancestry, these heritages—called versatile heritages—are likewise shared by many ancestries.\n\nGolarion is home to a variety of versatile heritages. Some are born to unusual creatures or arise through specific mundane or supernatural circumstances. Many, however, result from an infusion of extraplanar energy, whether through direct parentage, more distant ancestors, or simply direct exposure to the quintessence of that plane. These individuals are known as planar scions.\n\nBecause the circumstances that give rise to versatile heritages aren't limited to a single ancestry, a versatile heritage can be chosen by a character of nearly any ancestry. Some versatile heritages are more common among some ancestries than others, and some might list additional restrictions specific to that heritage. Your GM may place other restrictions on which ancestries can use a given versatile heritage based on the story and setting.",
  },
})

export const UnlimitedPossibilitiesSection = Content.defineSection('ancestries-and-backgrounds/unlimited-possibilities', {
  parent: VersatileHeritagesSection,
  content: {
    name: 'Unlimited Possibilities!',
    description:
      'Though a character can have only one heritage and one lineage feat, the possible permutations of a character’s background and family tree are virtually unlimited. An aiuvarin character might still have a changeling parent whose nature is visible in the coloration of their eyes even if they don’t have access to changeling ancestry feats, and a pitborn dwarf might very well have an ancestor with fey influences on their bloodline, reflected with a fey muse or patron gained through their class alongside their ancestral fiendishness.',
  },
})

export const PlayingAVersatileHeritageSection = Content.defineSection('ancestries-and-backgrounds/playing-a-versatile-heritage', {
  parent: VersatileHeritagesSection,
  content: {
    name: 'Playing a Versatile Heritage',
    description:
      "To play a character with a versatile heritage, first select your ancestry, just like you would for any character. You gain Hit Points, size, Speed, attribute boosts and attribute flaws, languages, traits, and other abilities from that ancestry. Then, instead of choosing a heritage from those normally available to that ancestry, apply your chosen versatile heritage. You gain all the features from your versatile heritage, some of which might modify or replace statistics, abilities, or traits from your ancestry.\n\nSince a versatile heritage is a heritage, you can have only one, and you can't have any other heritage in addition to your versatile heritage.\n\nSometimes a versatile heritage might give you an ability that conflicts with an ability from your ancestry. In these cases, you choose which of the conflicting abilities your character has.\n\nWhen selecting ancestry feats, you can choose from those available to your ancestry as well as those specific to your versatile heritage.",
  },
})

export const LineageFeatsSection = Content.defineSection('ancestries-and-backgrounds/lineage-feats', {
  parent: PlayingAVersatileHeritageSection,
  content: {
    name: 'Lineage Feats',
    description:
      'Some ancestry feats within a versatile heritage have the lineage trait. These feats specify a physiological lineage your character has—such as the type of hag that birthed a changeling character, or the type of extraplanar entity that influenced a nephilim’s birth. You can have only one lineage feat; you can select such a feat only at 1st level, and you can’t retrain into or out of this feat.',
  },
})

export const InThisBookSection = Content.defineSection('ancestries-and-backgrounds/in-this-book', {
  parent: VersatileHeritagesSection,
  content: { name: 'In This Book', description: 'This book includes the rules for three kinds of versatile heritages' },
})

export const ChangelingSection = Content.defineSection('ancestries-and-backgrounds/changeling', {
  parent: InThisBookSection,
  content: {
    name: 'Changeling',
    description:
      "Children of the malevolent, magical creatures known as hags, changelings share some of their mothers' abilities, such as sharp claws and occult magic. Many changelings experience or dread the psychic summons of their hag mothers, known as the Call, urging them to seek out their mothers so they might be transformed into hags themselves.\n\nChangeling lineages affect the appearance of one of the changeling's eyes, and are as follows: brine may for the child of a sea hag, callow may for a sweet hag, dream may for a cuckoo hag, and slag may for an iron hag.",
  },
})

export const ChangelingChangelingSection = Content.linkEntity(ChangelingSection, VersatileHeritage.ChangelingHeritage)

export const ChangelingFeatsSection = Content.defineSection('ancestries-and-backgrounds/changeling-feats', {
  parent: ChangelingChangelingSection,
  content: { name: 'Changeling Feats' },
})

export const BrineMaySection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.BrineMay)

export const CallowMaySection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.CallowMay)

export const DreamMaySection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.DreamMay)

export const SlagMaySection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.SlagMay)

export const ChangelingLoreSection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.ChangelingLore)

export const HagClawsSection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.HagClaws)

export const HagsSightSection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.HagsSight)

export const CalledSection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.Called)

export const MistChildSection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.MistChild)

export const PlanarScionsNephilimSection = Content.defineSection('ancestries-and-backgrounds/planar-scions-nephilim', {
  parent: InThisBookSection,
  content: {
    name: 'Planar Scions: Nephilim',
    description:
      'Life is present everywhere across the planes of the Multiverse, and the intermingling of mortals from the Universe with extraplanar energy is no rare thing. Whether their origins are from a direct physical relationship between a mortal and an extraplanar being or from some other infusion of extraplanar energy, mortals who carry the power of another plane are known as planar scions. There are numerous types of planar scions, just as there are countless types of beings across the planes whose power might be shared with a mortal. This book focuses on nephilim, planar scions from planes strongly associated with concepts of good, evil, order, or dissolution, and presents lineages associated with fiendish and celestial beings.\n\nNephilim are planar scions—mortals influenced by planes beyond the Universe—whose bodies or spirits have been influenced by energies from an outer plane, often one strongly associated with mortal religions or philosophies, like Elysium or the Outer Rifts. Some nephilim are even born with seemingly contradictory influences, displaying traits of both celestials and fiends.\n\nThe angelkin, lawbringers, and musetouched lineages each represent different aspects of the celestial planes, while the grimspawn, hellspawn, and pitborn lineages represent beings with fiendish bloodlines or influences.',
  },
})

export const NephilimSection = Content.linkEntity(PlanarScionsNephilimSection, VersatileHeritage.NephilimHeritage)

export const NephilimFeatsSection = Content.defineSection('ancestries-and-backgrounds/nephilim-feats', {
  parent: NephilimSection,
  content: { name: 'Nephilim Feats' },
})

export const AngelkinSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Angelkin)

export const GrimspawnSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Grimspawn)

export const HellspawnSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Hellspawn)

export const LawbringerSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Lawbringer)

export const MusetouchedSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Musetouched)

export const PitbornSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Pitborn)

export const BestialManifestationSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.BestialManifestation)

export const HaloSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Halo)

export const NephilimEyesSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.NephilimEyes)

export const NephilimLoreSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.NephilimLore)

export const NimbleHoovesSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.NimbleHooves)

export const BlessedBloodNephilimSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.BlessedBloodNephilim)

export const ExtraplanarSupplicationSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.ExtraplanarSupplication)

export const NephilimResistanceSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.NephilimResistance)

export const ScionOfManyPlanesSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.ScionOfManyPlanes)

export const SkillfulTailSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.SkillfulTail)

export const MixedAncestryHeritagesSection = Content.defineSection('ancestries-and-backgrounds/mixed-ancestry-heritages', {
  parent: InThisBookSection,
  content: {
    name: 'Mixed Ancestry Heritages',
    description:
      "Golarion has numerous metropolises where people from a wide variety of ancestries intermingle. Moreover, adventurers of all backgrounds and ancestries often find themselves thrust together and discover that from adversity can come common ground, and even love. As a result, the world is full of people whose bloodline can be traced to at least two different ancestries. The most common examples of this are aiuvarins and dromaars, who have elf and orc ancestors respectively. While all known dromaars and aiuvarins in the Inner Sea share human as the other part of their origin, it's possible that other combinations could exist.\n\nThis section also describes how to create a custom mixed ancestry heritage when creating your own world.",
  },
})

export const AiuvarinSection = Content.linkEntity(MixedAncestryHeritagesSection, VersatileHeritage.AiuvarinHeritage)

export const AiuvarinFeatsSection = Content.defineSection('ancestries-and-backgrounds/aiuvarin-feats', {
  parent: AiuvarinSection,
  content: { name: 'Aiuvarin Feats' },
})

export const EarnedGlorySection = Content.linkEntity(AiuvarinFeatsSection, VersatileHeritage.EarnedGlory)

export const ElfAtavismSection = Content.linkEntity(AiuvarinFeatsSection, VersatileHeritage.ElfAtavism)

export const InspireImitationSection = Content.linkEntity(AiuvarinFeatsSection, VersatileHeritage.InspireImitation)

export const SupernaturalCharmSection = Content.linkEntity(AiuvarinFeatsSection, VersatileHeritage.SupernaturalCharm)

export const DromaarSection = Content.linkEntity(MixedAncestryHeritagesSection, VersatileHeritage.DromaarHeritage)

export const DromaarFeatsSection = Content.defineSection('ancestries-and-backgrounds/dromaar-feats', {
  parent: DromaarSection,
  content: { name: 'Dromaar Feats' },
})

export const MonstrousPeacemakerSection = Content.linkEntity(DromaarFeatsSection, VersatileHeritage.MonstrousPeacemaker)

export const OrcSightSection = Content.linkEntity(DromaarFeatsSection, VersatileHeritage.OrcSight)

export const MixedAncestrySection = Content.defineSection('ancestries-and-backgrounds/mixed-ancestry', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Mixed Ancestry',
    description:
      "You can choose a mixed ancestry to represent having two ancestral lines for your character. This doesn't preclude having more than two ancestries in your genealogy, but you'll need to work with your GM if you want to have more than two reflected in the rules. The possible combinations of ancestries are immeasurable, though most people in the Inner Sea region are familiar with only aiuvarins and dromaars, as those are the most common people of mixed ancestry they encounter.\n\n**Custom Mixed Heritage**: You can work with your GM to create a mixed heritage for an ancestry other than elf or orc. A custom mixed-ancestry heritage is an uncommon heritage. Choose an ancestry to tie to the heritage. You gain any traits of that ancestry and a new trait for your combined ancestry, similar to how the aiuvarin heritage below grants the “elf” and “aiuvarin” traits. You also gain low-light vision if the ancestry tied to the heritage has low-light vision or darkvision. The heritage lets you select ancestry feats for the chosen ancestry in addition to those from your base ancestry. The aiuvarin and dromaar heritages both have special feats, but a custom heritage will need you to work with your GM to create or adapt some.",
  },
})

export const BackgroundsSection = Content.defineSection('ancestries-and-backgrounds/backgrounds', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Backgrounds',
    description:
      "Backgrounds allow you to customize your character based on their life before adventuring. This is the next step in their life story after their ancestry, which reflects the circumstances of their birth. Your character's background can help you learn or portray more about their personality while also suggesting what sorts of things they're likely to know. Consider what events set your character on their path to the life of an adventurer and how those circumstances relate to their background.\n\nAt 1st level, when you create your character, you gain a background of your choice. This decision is permanent; you can't change it at later levels. Each background listed here grants two boosts, a skill feat, and the trained proficiency rank in two skills, one of which is a Lore skill. If you gain the trained proficiency rank in a skill from your background and would then gain the trained proficiency rank in the same skill from your class at 1st level, you instead become trained in another skill of your choice.\n\nLore skills represent deep knowledge of a specific subject and are described on page 240. If a Lore skill involves a choice (for instance, a choice of terrain), explain your preference to the GM, who has the final say on whether it's acceptable or not. If you'd like some suggestions, the Common Lore Subcategories sidebar on page 240 lists a number of Lore skills that are suitable for most campaigns.\n\nSkill feats expand the functions of your skills andappear in Chapter 5: Feats.",
  },
})

export const AcolyteSection = Content.linkEntity(BackgroundsSection, Background.Acolyte)

export const AcrobatSection = Content.linkEntity(BackgroundsSection, Background.Acrobat)

export const AnimalWhispererSection = Content.linkEntity(BackgroundsSection, Background.AnimalWhisperer)

export const ArtisanSection = Content.linkEntity(BackgroundsSection, Background.Artisan)

export const ArtistSection = Content.linkEntity(BackgroundsSection, Background.Artist)

export const BanditSection = Content.linkEntity(BackgroundsSection, Background.Bandit)

export const BarkeepSection = Content.linkEntity(BackgroundsSection, Background.Barkeep)

export const BarristerSection = Content.linkEntity(BackgroundsSection, Background.Barrister)

export const BountyHunterSection = Content.linkEntity(BackgroundsSection, Background.BountyHunter)

export const CharlatanSection = Content.linkEntity(BackgroundsSection, Background.Charlatan)

export const CookSection = Content.linkEntity(BackgroundsSection, Background.Cook)

export const CriminalSection = Content.linkEntity(BackgroundsSection, Background.Criminal)

export const CultistSection = Content.linkEntity(BackgroundsSection, Background.Cultist)

export const DetectiveSection = Content.linkEntity(BackgroundsSection, Background.Detective)

export const EmissarySection = Content.linkEntity(BackgroundsSection, Background.Emissary)

export const EntertainerSection = Content.linkEntity(BackgroundsSection, Background.Entertainer)

export const FarmhandSection = Content.linkEntity(BackgroundsSection, Background.Farmhand)

export const FieldMedicSection = Content.linkEntity(BackgroundsSection, Background.FieldMedic)

export const FortuneTellerSection = Content.linkEntity(BackgroundsSection, Background.FortuneTeller)

export const GamblerSection = Content.linkEntity(BackgroundsSection, Background.Gambler)

export const GladiatorSection = Content.linkEntity(BackgroundsSection, Background.Gladiator)

export const GuardSection = Content.linkEntity(BackgroundsSection, Background.Guard)

export const HerbalistSection = Content.linkEntity(BackgroundsSection, Background.Herbalist)

export const HermitSection = Content.linkEntity(BackgroundsSection, Background.Hermit)

export const HunterSection = Content.linkEntity(BackgroundsSection, Background.Hunter)

export const LaborerSection = Content.linkEntity(BackgroundsSection, Background.Laborer)

export const MartialDiscipleSection = Content.linkEntity(BackgroundsSection, Background.MartialDisciple)

export const MartialDiscipleAcrobaticsSection = Content.linkEntity(MartialDiscipleSection, Background.MartialDiscipleAcrobatics)

export const MartialDiscipleAthleticsSection = Content.linkEntity(MartialDiscipleSection, Background.MartialDiscipleAthletics)

export const MerchantSection = Content.linkEntity(BackgroundsSection, Background.Merchant)

export const MinerSection = Content.linkEntity(BackgroundsSection, Background.Miner)

export const NobleSection = Content.linkEntity(BackgroundsSection, Background.Noble)

export const NomadSection = Content.linkEntity(BackgroundsSection, Background.Nomad)

export const PrisonerSection = Content.linkEntity(BackgroundsSection, Background.Prisoner)

export const RaisedByBeliefSection = Content.linkEntity(BackgroundsSection, Background.RaisedByBelief)

export const SailorSection = Content.linkEntity(BackgroundsSection, Background.Sailor)

export const ScholarSection = Content.linkEntity(BackgroundsSection, Background.Scholar)

export const ScoutSection = Content.linkEntity(BackgroundsSection, Background.Scout)

export const StreetUrchinSection = Content.linkEntity(BackgroundsSection, Background.StreetUrchin)

export const TeacherSection = Content.linkEntity(BackgroundsSection, Background.Teacher)

export const TinkerSection = Content.linkEntity(BackgroundsSection, Background.Tinker)

export const WarriorSection = Content.linkEntity(BackgroundsSection, Background.Warrior)

export const AncestriesBackgroundsLanguagesSection = Content.defineSection('ancestries-and-backgrounds/ancestries-and-backgrounds/languages', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Languages',
    description:
      "The people of the Inner Sea region speak dozens of different languages, along with hundreds of dialects and regional variations. While a character can generally get by with Taldane, also known as Common, knowing another language is vital in some regions. Being able to speak these tongues can help you with negotiation, spying on enemies, or just conducting simple commerce. Languages also afford you the chance to contextualize your character in the world and give meaning to your other character choices.\n\nYour ancestry entry states which languages you know at 1st level. Typically, this means you can both speak and read these languages. Having a positive Intelligence modifier grants a number of additional languages equal to your Intelligence modifier. You can choose these languages from the list presented in your character's ancestry entry and from those available from your region or ethnicity. Ask your GM if there's a language you want to select that isn't on these lists.\n\nThe languages presented here are grouped according to how common they are throughout the Inner Sea region. Languages that are common are regularly encountered around the Inner Sea, even among those who aren't native speakers. Languages that are uncommon (see the Uncommon Languages table and Regional Languages) are most frequently spoken by native speakers, but they are also spoken by certain scholars and others interested in the associated cultures.\n\nMany uncommon languages are spoken by natives of other planes who rarely appear near the Inner Sea unless summoned. Mortals learning these languages might spend a lifetime without meeting a native speaker.\n\nIt is possible for your character to learn languages later in their adventuring career. Selecting the Multilingual feat, for example, grants a character two new languages chosen from those listed below. If your Intelligence changes later on, you also adjust your number of languages accordingly. Other abilities and effects might grant access to common or uncommon languages, as detailed in their descriptions. Rare or secret languages can only be discovered through play.\n\n## Common Languages\n\n| **Language** | **Speakers** |\n|---|---|\n| Common | Humans, dwarves, elves, halflings, and other common ancestries |\n| Draconic | Dragons, reptilian humanoids |\n| Dwarven | Dwarves |\n| Elven | Elves, aiuvarins |\n| Fey | Fey, centaurs, plant and fungus creatures |\n| Gnomish | Gnomes |\n| Goblin | Goblins, hobgoblins, bugbears |\n| Halfling | Halflings |\n| Jotun | Giants, ogres, trolls, ettins, cyclopes |\n| Orcish | Orcs, dromaars |\n| Sakvroth | Subterranean civilizations, serpentfolk |\n| |\n\n## Uncommon Languages\n\n| Language | Speakers |\n|---|---|\n| Aklo | Evil fey, otherworldly monsters |\n| Chthonian | Demons |\n| Diabolic | Devils |\n| Empyrean | Angels and other celestials |\n| Kholo | The hyena-like kholos |\n| Necril | Ghouls, intelligent undead |\n| Petran | Earth elemental creatures |\n| Pyric | Fire elemental creatures |\n| Shadowtongue | Nidalese, Netherworld creatures |\n| Sussuran | Air elemental creatures, flying creatures |\n| Thalassic | Aquatic creatures, water elemental creatures |\n| Muan | Wood elemental creatures |\n| Talican | Metal elemental creatures |",
  },
})

export const RegionalLanguagesSection = Content.defineSection('ancestries-and-backgrounds/regional-languages', {
  parent: AncestriesBackgroundsLanguagesSection,
  content: {
    name: 'Regional Languages',
    description:
      "Regional languages depend on the game world you're playing in. Chapter 1: Introduction lists the regional languages of the Pathfinder world and [where they're spoken](content:introduction/regional-languages).\n\nRegional languages are uncommon, but characters from that region have access to choose them at character creation. For characters with less exposure to the region or language, check with your GM to make sure speaking that language makes sense for your character.\n\nMost characters learn the Common language. This is the most widely used language in the region where the campaign takes place. In the Inner Sea region of Golarion, the Common tongue is Taldane, for example. Characters with Common might face a language barrier if they travel somewhere with a different Common language.",
  },
})

export const SignLanguageSection = Content.defineSection('ancestries-and-backgrounds/sign-language', {
  parent: AncestriesBackgroundsLanguagesSection,
  content: {
    name: 'Sign Language',
    description:
      'The language entry for most characters lists languages they use to communicate in spoken words. However, you might know the signed languages associated with the languages you know, or how to read lips. You can learn these by taking the Sign Language or Read Lips skill feats, or both. If you are creating a character who is deaf, hard of hearing, or unable to speak, discuss with your GM whether it makes sense for your character to know sign languages or lip reading. If so, your GM might allow you to select one of these feats for free (even if you don’t meet the prerequisites) to represent your character concept.',
  },
})

export const AncestriesAndBackgroundsContent = [
  AncestriesBackgroundsSection,
  AncestryEntriesSection,
  HitPointsSection,
  SizeSection,
  SpeedSection,
  AttributeBoostsFlawsSection,
  LanguagesSection,
  TraitsSection,
  SpecialAbilitiesSection,
  HeritagesSection,
  AncestryFeatsSection,
  DwarfSection,
  DwarfHeritagesSection,
  DeathWardenDwarfSection,
  ForgeDwarfSection,
  RockDwarfSection,
  StrongBloodedDwarfSection,
  AncientBloodedDwarfSection,
  DwarfAncestryFeatsSection,
  DwarvenDoughtinessSection,
  DwarvenLoreSection,
  DwarvenWeaponFamiliaritySection,
  MountainStrategySection,
  RockRunnerSection,
  StonemasonsEyeSection,
  UnburdenedIronSection,
  BoulderRollSection,
  DefyTheDarknessSection,
  DwarvenReinforcementSection,
  ElfSection,
  ElfHeritagesSection,
  AncientElfSection,
  ArcticElfSection,
  CavernElfSection,
  SeerElfSection,
  WhisperElfSection,
  WoodlandElfSection,
  ElfAncestryFeatsSection,
  AncestralLongevitySection,
  ElvenLoreSection,
  ElvenWeaponFamiliaritySection,
  ForlornSection,
  NimbleElfSection,
  OtherworldlyMagicSection,
  UnwaveringMienSection,
  AgelessPatienceSection,
  AncestralSuspicionSection,
  MartialExperienceSection,
  GnomeSection,
  GnomeHeritagesSection,
  ChameleonGnomeSection,
  FeyTouchedGnomeSection,
  SensateGnomeSection,
  UmbralGnomeSection,
  WellspringGnomeSection,
  GnomeAncestryFeatsSection,
  AnimalAccompliceSection,
  AnimalElocutionistSection,
  FeyFellowshipSection,
  FirstWorldMagicSection,
  GnomeObsessionSection,
  GnomeWeaponFamiliaritySection,
  IllusionSenseSection,
  RazzleDazzleSection,
  EnergizedFontSection,
  ProjectPersonaSection,
  GoblinSection,
  GoblinHeritagesSection,
  CharhideGoblinSection,
  IrongutGoblinSection,
  RazortoothGoblinSection,
  SnowGoblinSection,
  UnbreakableGoblinSection,
  GoblinAncestryFeatsSection,
  BurnItSection,
  CityScavengerSection,
  GoblinLoreSection,
  GoblinScuttleSection,
  GoblinSongSection,
  GoblinWeaponFamiliaritySection,
  JunkTinkerSection,
  RoughRiderSection,
  VerySneakySection,
  KneecapSection,
  LoudSingerSection,
  VandalSection,
  HalflingSection,
  HalflingHeritagesSection,
  GutsyHalflingSection,
  HillockHalflingSection,
  NomadicHalflingSection,
  TwilightHalflingSection,
  WildwoodHalflingSection,
  JinxedHalflingSection,
  HalflingAncestryFeatsSection,
  DistractingShadowsSection,
  FolksyPatterSection,
  HalflingLoreSection,
  HalflingLuckSection,
  HalflingWeaponFamiliaritySection,
  PrairieRiderSection,
  SureFeetSection,
  TitanSlingerSection,
  UnfetteredHalflingSection,
  WatchfulHalflingSection,
  CulturalAdaptabilitySection,
  StepLivelySection,
  HumanSection,
  HumanHeritagesSection,
  SkilledHumanSection,
  VersatileHumanSection,
  HumanAncestryFeatsSection,
  AdaptedCantripSection,
  CooperativeNatureSection,
  GeneralTrainingSection,
  HaughtyObstinacySection,
  NaturalAmbitionSection,
  NaturalSkillSection,
  UnconventionalWeaponrySection,
  AdaptiveAdeptSection,
  CleverImproviserSection,
  SenseAlliesSection,
  LeshySection,
  LeshyHeritagesSection,
  CactusLeshySection,
  FruitLeshySection,
  FungusLeshySection,
  GourdLeshySection,
  LeafLeshySection,
  LotusLeshySection,
  RootLeshySection,
  SeaweedLeshySection,
  VineLeshySection,
  LeshyAncestryFeatsSection,
  GraspingReachSection,
  HarmlesslyCuteSection,
  LeshyLoreSection,
  LeshySuperstitionSection,
  SeedpodSection,
  ShadowOfTheWildsSection,
  UndauntedSection,
  AnchoringRootsSection,
  LeshyGlideSection,
  RitualReversionSection,
  SpeakWithKindredSection,
  OrcSection,
  OrcHeritagesSection,
  BadlandsOrcSection,
  BattleReadyOrcSection,
  DeepOrcSection,
  GraveOrcSection,
  HoldScarredOrcSection,
  RainfallOrcSection,
  WinterOrcSection,
  OrcAncestryFeatsSection,
  BeastTrainerSection,
  IronFistsSection,
  OrcFerocitySection,
  OrcLoreSection,
  OrcSuperstitionSection,
  HoldMarkSection,
  HoldMarkBurningSunSection,
  HoldMarkDeathsHeadSection,
  HoldMarkDefiledCorpseSection,
  HoldMarkEmptyHandSection,
  OrcWeaponFamiliaritySection,
  TusksSection,
  AthleticMightSection,
  BloodyBlowsSection,
  DefyDeathSection,
  ScarThickSkinSection,
  VersatileHeritagesSection,
  UnlimitedPossibilitiesSection,
  PlayingAVersatileHeritageSection,
  LineageFeatsSection,
  InThisBookSection,
  ChangelingSection,
  ChangelingChangelingSection,
  ChangelingFeatsSection,
  BrineMaySection,
  CallowMaySection,
  DreamMaySection,
  SlagMaySection,
  ChangelingLoreSection,
  HagClawsSection,
  HagsSightSection,
  CalledSection,
  MistChildSection,
  PlanarScionsNephilimSection,
  NephilimSection,
  NephilimFeatsSection,
  AngelkinSection,
  GrimspawnSection,
  HellspawnSection,
  LawbringerSection,
  MusetouchedSection,
  PitbornSection,
  BestialManifestationSection,
  HaloSection,
  NephilimEyesSection,
  NephilimLoreSection,
  NimbleHoovesSection,
  BlessedBloodNephilimSection,
  ExtraplanarSupplicationSection,
  NephilimResistanceSection,
  ScionOfManyPlanesSection,
  SkillfulTailSection,
  MixedAncestryHeritagesSection,
  AiuvarinSection,
  AiuvarinFeatsSection,
  EarnedGlorySection,
  ElfAtavismSection,
  InspireImitationSection,
  SupernaturalCharmSection,
  DromaarSection,
  DromaarFeatsSection,
  MonstrousPeacemakerSection,
  OrcSightSection,
  MixedAncestrySection,
  BackgroundsSection,
  AcolyteSection,
  AcrobatSection,
  AnimalWhispererSection,
  ArtisanSection,
  ArtistSection,
  BanditSection,
  BarkeepSection,
  BarristerSection,
  BountyHunterSection,
  CharlatanSection,
  CookSection,
  CriminalSection,
  CultistSection,
  DetectiveSection,
  EmissarySection,
  EntertainerSection,
  FarmhandSection,
  FieldMedicSection,
  FortuneTellerSection,
  GamblerSection,
  GladiatorSection,
  GuardSection,
  HerbalistSection,
  HermitSection,
  HunterSection,
  LaborerSection,
  MartialDiscipleSection,
  MartialDiscipleAcrobaticsSection,
  MartialDiscipleAthleticsSection,
  MerchantSection,
  MinerSection,
  NobleSection,
  NomadSection,
  PrisonerSection,
  RaisedByBeliefSection,
  SailorSection,
  ScholarSection,
  ScoutSection,
  StreetUrchinSection,
  TeacherSection,
  TinkerSection,
  WarriorSection,
  AncestriesBackgroundsLanguagesSection,
  RegionalLanguagesSection,
  SignLanguageSection,
]
