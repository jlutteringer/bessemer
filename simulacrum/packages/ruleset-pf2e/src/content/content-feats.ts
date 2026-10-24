import { Content } from '@simulacrum/ruleset'
import * as GeneralFeat from '@simulacrum/ruleset-pf2e/feat/general-feat'
import * as SkillFeat from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const FeatsSection = Content.defineSection('feats', {
  content: {
    name: 'Feats',
    description:
      "All kinds of experiences and training can shape your character beyond what you learn by advancing in your class. Abilities that require a degree of training but can be learned by anyone—not only members of certain ancestries or classes—are called general feats.\n\nFor most classes, you gain a general feat when you reach 3rd level and every 4 levels thereafter. Each time you gain a general feat, you can select any feat with the [general](content:traits/general) trait whose prerequisites you satisfy.\n\nGeneral feats also include a subcategory of skill feats, which expand on what you can accomplish via skills. These feats also have the [skill](content:traits/skill) trait. Most characters gain skill feats at 2nd level and every 2 levels thereafter. When you gain a skill feat, you must select a general feat with the skill trait; you can't select a general feat that lacks the skill trait. The level of a skill feat is typically the minimum level at which a character could meet its proficiency prerequisite.\n\nIn addition to the skill feats specifically associated with each skill, there are some that can be taken with various skills or even all skills, like [Assurance](trait:feat/assurance).",
  },
})

export const GeneralFeatsSection = Content.defineSection('feats/general-feats', { parent: FeatsSection, content: { name: 'General Feats' } })

export const AdoptedAncestrySection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.AdoptedAncestry)

export const ArmorProficiencySection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.ArmorProficiency)

export const ArmorProficiencyLightArmorSection = Content.linkEntity(ArmorProficiencySection, GeneralFeat.ArmorProficiencyLightArmor)

export const ArmorProficiencyMediumArmorSection = Content.linkEntity(ArmorProficiencySection, GeneralFeat.ArmorProficiencyMediumArmor)

export const ArmorProficiencyHeavyArmorSection = Content.linkEntity(ArmorProficiencySection, GeneralFeat.ArmorProficiencyHeavyArmor)

export const BreathControlSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.BreathControl)

export const CannyAcumenSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.CannyAcumen)

export const CannyAcumenFortitudeSection = Content.linkEntity(CannyAcumenSection, GeneralFeat.CannyAcumenFortitude)

export const CannyAcumenReflexSection = Content.linkEntity(CannyAcumenSection, GeneralFeat.CannyAcumenReflex)

export const CannyAcumenWillSection = Content.linkEntity(CannyAcumenSection, GeneralFeat.CannyAcumenWill)

export const CannyAcumenPerceptionSection = Content.linkEntity(CannyAcumenSection, GeneralFeat.CannyAcumenPerception)

export const DiehardSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.Diehard)

export const FastRecoverySection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.FastRecovery)

export const FeatherStepSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.FeatherStep)

export const FleetSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.Fleet)

export const IncredibleInitiativeSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.IncredibleInitiative)

export const PetSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.Pet)

export const RideSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.Ride)

export const ShieldBlockSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.ShieldBlock)

export const ToughnessSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.Toughness)

export const WeaponProficiencySection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.WeaponProficiency)

export const AncestralParagonSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.AncestralParagon)

export const PrescientPlannerSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.PrescientPlanner)

export const UntrainedImprovisationSection = Content.linkEntity(GeneralFeatsSection, GeneralFeat.UntrainedImprovisation)

export const SkillFeatsSection = Content.defineSection('feats/skill-feats', { parent: FeatsSection, content: { name: 'Skill Feats' } })

export const AdditionalLoreSection = Content.linkEntity(SkillFeatsSection, SkillFeat.AdditionalLore)

export const AlchemicalCraftingSection = Content.linkEntity(SkillFeatsSection, SkillFeat.AlchemicalCrafting)

export const ArcaneSenseSection = Content.linkEntity(SkillFeatsSection, SkillFeat.ArcaneSense)

export const AssuranceSection = Content.linkEntity(SkillFeatsSection, SkillFeat.Assurance)

export const BargainHunterSection = Content.linkEntity(SkillFeatsSection, SkillFeat.BargainHunter)

export const BattleMedicineSection = Content.linkEntity(SkillFeatsSection, SkillFeat.BattleMedicine)

export const CatFallSection = Content.linkEntity(SkillFeatsSection, SkillFeat.CatFall)

export const CharmingLiarSection = Content.linkEntity(SkillFeatsSection, SkillFeat.CharmingLiar)

export const CombatClimberSection = Content.linkEntity(SkillFeatsSection, SkillFeat.CombatClimber)

export const CourtlyGracesSection = Content.linkEntity(SkillFeatsSection, SkillFeat.CourtlyGraces)

export const DubiousKnowledgeSection = Content.linkEntity(SkillFeatsSection, SkillFeat.DubiousKnowledge)

export const ExperiencedProfessionalSection = Content.linkEntity(SkillFeatsSection, SkillFeat.ExperiencedProfessional)

export const ExperiencedSmugglerSection = Content.linkEntity(SkillFeatsSection, SkillFeat.ExperiencedSmuggler)

export const ExperiencedTrackerSection = Content.linkEntity(SkillFeatsSection, SkillFeat.ExperiencedTracker)

export const FascinatingPerformanceSection = Content.linkEntity(SkillFeatsSection, SkillFeat.FascinatingPerformance)

export const ForagerSection = Content.linkEntity(SkillFeatsSection, SkillFeat.Forager)

export const GroupCoercionSection = Content.linkEntity(SkillFeatsSection, SkillFeat.GroupCoercion)

export const GroupImpressionSection = Content.linkEntity(SkillFeatsSection, SkillFeat.GroupImpression)

export const HeftyHaulerSection = Content.linkEntity(SkillFeatsSection, SkillFeat.HeftyHauler)

export const HobnobberSection = Content.linkEntity(SkillFeatsSection, SkillFeat.Hobnobber)

export const ImpressivePerformanceSection = Content.linkEntity(SkillFeatsSection, SkillFeat.ImpressivePerformance)

export const IntimidatingGlareSection = Content.linkEntity(SkillFeatsSection, SkillFeat.IntimidatingGlare)

export const LengthyDiversionSection = Content.linkEntity(SkillFeatsSection, SkillFeat.LengthyDiversion)

export const LieToMeSection = Content.linkEntity(SkillFeatsSection, SkillFeat.LieToMe)

export const MultilingualSection = Content.linkEntity(SkillFeatsSection, SkillFeat.Multilingual)

export const NaturalMedicineSection = Content.linkEntity(SkillFeatsSection, SkillFeat.NaturalMedicine)

export const NoCauseForAlarmSection = Content.linkEntity(SkillFeatsSection, SkillFeat.NoCauseForAlarm)

export const OddityIdentificationSection = Content.linkEntity(SkillFeatsSection, SkillFeat.OddityIdentification)

export const PickpocketSection = Content.linkEntity(SkillFeatsSection, SkillFeat.Pickpocket)

export const QuickCoercionSection = Content.linkEntity(SkillFeatsSection, SkillFeat.QuickCoercion)

export const QuickIdentificationSection = Content.linkEntity(SkillFeatsSection, SkillFeat.QuickIdentification)

export const QuickJumpSection = Content.linkEntity(SkillFeatsSection, SkillFeat.QuickJump)

export const QuickRepairSection = Content.linkEntity(SkillFeatsSection, SkillFeat.QuickRepair)

export const QuickSqueezeSection = Content.linkEntity(SkillFeatsSection, SkillFeat.QuickSqueeze)

export const ReadLipsSection = Content.linkEntity(SkillFeatsSection, SkillFeat.ReadLips)

export const RecognizeSpellSection = Content.linkEntity(SkillFeatsSection, SkillFeat.RecognizeSpell)

export const SchooledInSecretsSection = Content.linkEntity(SkillFeatsSection, SkillFeat.SchooledInSecrets)

export const SeasonedSection = Content.linkEntity(SkillFeatsSection, SkillFeat.Seasoned)

export const SignLanguageSection = Content.linkEntity(SkillFeatsSection, SkillFeat.SignLanguage)

export const SkillTrainingSection = Content.linkEntity(SkillFeatsSection, SkillFeat.SkillTraining)

export const SpecialtyCraftingSection = Content.linkEntity(SkillFeatsSection, SkillFeat.SpecialtyCrafting)

export const SteadyBalanceSection = Content.linkEntity(SkillFeatsSection, SkillFeat.SteadyBalance)

export const StreetwiseSection = Content.linkEntity(SkillFeatsSection, SkillFeat.Streetwise)

export const StudentOfTheCanonSection = Content.linkEntity(SkillFeatsSection, SkillFeat.StudentOfTheCanon)

export const SubtleTheftSection = Content.linkEntity(SkillFeatsSection, SkillFeat.SubtleTheft)

export const SurveyWildlifeSection = Content.linkEntity(SkillFeatsSection, SkillFeat.SurveyWildlife)

export const TerrainExpertiseSection = Content.linkEntity(SkillFeatsSection, SkillFeat.TerrainExpertise)

export const TerrainStalkerSection = Content.linkEntity(SkillFeatsSection, SkillFeat.TerrainStalker)

export const TitanWrestlerSection = Content.linkEntity(SkillFeatsSection, SkillFeat.TitanWrestler)

export const TrainAnimalSection = Content.linkEntity(SkillFeatsSection, SkillFeat.TrainAnimal)

export const TrickMagicItemSection = Content.linkEntity(SkillFeatsSection, SkillFeat.TrickMagicItem)

export const UnderwaterMarauderSection = Content.linkEntity(SkillFeatsSection, SkillFeat.UnderwaterMarauder)

export const VirtuosicPerformerSection = Content.linkEntity(SkillFeatsSection, SkillFeat.VirtuosicPerformer)

export const AutomaticKnowledgeSection = Content.linkEntity(SkillFeatsSection, SkillFeat.AutomaticKnowledge)

export const BondedAnimalSection = Content.linkEntity(SkillFeatsSection, SkillFeat.BondedAnimal)

export const CommunalCraftingSection = Content.linkEntity(SkillFeatsSection, SkillFeat.CommunalCrafting)

export const ConfabulatorSection = Content.linkEntity(SkillFeatsSection, SkillFeat.Confabulator)

export const ContinualRecoverySection = Content.linkEntity(SkillFeatsSection, SkillFeat.ContinualRecovery)

export const GladHandSection = Content.linkEntity(SkillFeatsSection, SkillFeat.GladHand)

export const IntimidatingProwessSection = Content.linkEntity(SkillFeatsSection, SkillFeat.IntimidatingProwess)

export const InventorSection = Content.linkEntity(SkillFeatsSection, SkillFeat.Inventor)

export const LastingCoercionSection = Content.linkEntity(SkillFeatsSection, SkillFeat.LastingCoercion)

export const MagicalCraftingSection = Content.linkEntity(SkillFeatsSection, SkillFeat.MagicalCrafting)

export const MagicalShorthandSection = Content.linkEntity(SkillFeatsSection, SkillFeat.MagicalShorthand)

export const NimbleCrawlSection = Content.linkEntity(SkillFeatsSection, SkillFeat.NimbleCrawl)

export const PowerfulLeapSection = Content.linkEntity(SkillFeatsSection, SkillFeat.PowerfulLeap)

export const QuickDisguiseSection = Content.linkEntity(SkillFeatsSection, SkillFeat.QuickDisguise)

export const QuietAlliesSection = Content.linkEntity(SkillFeatsSection, SkillFeat.QuietAllies)

export const RapidMantelSection = Content.linkEntity(SkillFeatsSection, SkillFeat.RapidMantel)

export const RobustRecoverySection = Content.linkEntity(SkillFeatsSection, SkillFeat.RobustRecovery)

export const UnmistakableLoreSection = Content.linkEntity(SkillFeatsSection, SkillFeat.UnmistakableLore)

export const UnusualTreatmentSection = Content.linkEntity(SkillFeatsSection, SkillFeat.UnusualTreatment)

export const WardMedicSection = Content.linkEntity(SkillFeatsSection, SkillFeat.WardMedic)

export const WaryDisarmamentSection = Content.linkEntity(SkillFeatsSection, SkillFeat.WaryDisarmament)

export const FeatsContent = [
  FeatsSection,
  GeneralFeatsSection,
  AdoptedAncestrySection,
  ArmorProficiencySection,
  ArmorProficiencyLightArmorSection,
  ArmorProficiencyMediumArmorSection,
  ArmorProficiencyHeavyArmorSection,
  BreathControlSection,
  CannyAcumenSection,
  CannyAcumenFortitudeSection,
  CannyAcumenReflexSection,
  CannyAcumenWillSection,
  CannyAcumenPerceptionSection,
  DiehardSection,
  FastRecoverySection,
  FeatherStepSection,
  FleetSection,
  IncredibleInitiativeSection,
  PetSection,
  RideSection,
  ShieldBlockSection,
  ToughnessSection,
  WeaponProficiencySection,
  AncestralParagonSection,
  PrescientPlannerSection,
  UntrainedImprovisationSection,
  SkillFeatsSection,
  AdditionalLoreSection,
  AlchemicalCraftingSection,
  ArcaneSenseSection,
  AssuranceSection,
  BargainHunterSection,
  BattleMedicineSection,
  CatFallSection,
  CharmingLiarSection,
  CombatClimberSection,
  CourtlyGracesSection,
  DubiousKnowledgeSection,
  ExperiencedProfessionalSection,
  ExperiencedSmugglerSection,
  ExperiencedTrackerSection,
  FascinatingPerformanceSection,
  ForagerSection,
  GroupCoercionSection,
  GroupImpressionSection,
  HeftyHaulerSection,
  HobnobberSection,
  ImpressivePerformanceSection,
  IntimidatingGlareSection,
  LengthyDiversionSection,
  LieToMeSection,
  MultilingualSection,
  NaturalMedicineSection,
  NoCauseForAlarmSection,
  OddityIdentificationSection,
  PickpocketSection,
  QuickCoercionSection,
  QuickIdentificationSection,
  QuickJumpSection,
  QuickRepairSection,
  QuickSqueezeSection,
  ReadLipsSection,
  RecognizeSpellSection,
  SchooledInSecretsSection,
  SeasonedSection,
  SignLanguageSection,
  SkillTrainingSection,
  SpecialtyCraftingSection,
  SteadyBalanceSection,
  StreetwiseSection,
  StudentOfTheCanonSection,
  SubtleTheftSection,
  SurveyWildlifeSection,
  TerrainExpertiseSection,
  TerrainStalkerSection,
  TitanWrestlerSection,
  TrainAnimalSection,
  TrickMagicItemSection,
  UnderwaterMarauderSection,
  VirtuosicPerformerSection,
  AutomaticKnowledgeSection,
  BondedAnimalSection,
  CommunalCraftingSection,
  ConfabulatorSection,
  ContinualRecoverySection,
  GladHandSection,
  IntimidatingProwessSection,
  InventorSection,
  LastingCoercionSection,
  MagicalCraftingSection,
  MagicalShorthandSection,
  NimbleCrawlSection,
  PowerfulLeapSection,
  QuickDisguiseSection,
  QuietAlliesSection,
  RapidMantelSection,
  RobustRecoverySection,
  UnmistakableLoreSection,
  UnusualTreatmentSection,
  WardMedicSection,
  WaryDisarmamentSection,
]
