import { Tags } from '@simulacrum/ruleset'

export const Ancestry = Tags.defineTraitTag('ancestry', { name: 'Ancestry' })
export const Heritage = Tags.defineTraitTag('heritage', { name: 'Heritage' })
export const VersatileHeritage = Tags.defineTraitTag('heritage/versatile', { name: 'Versatile Heritage' })
export const Background = Tags.defineTraitTag('background', { name: 'Background' })
export const Class = Tags.defineTraitTag('class', { name: 'Class' })
export const ClassFeature = Tags.defineTraitTag('class-feature', { name: 'Class Feature' })
export const Feat = Tags.defineTraitTag('feat', { name: 'Feat' })
export const AncestryFeat = Tags.defineTraitTag('feat/ancestry', { name: 'Ancestry Feat' })
export const ClassFeat = Tags.defineTraitTag('feat/class', { name: 'Class Feat' })
export const GeneralFeat = Tags.defineTraitTag('feat/general', { name: 'General Feat' })
export const SkillFeat = Tags.defineTraitTag('feat/skill', { name: 'Skill Feat' })
export const DwarfFeat = Tags.defineTraitTag('feat/dwarf', { name: 'Dwarf Feat' })
export const ElfFeat = Tags.defineTraitTag('feat/elf', { name: 'Elf Feat' })
export const GnomeFeat = Tags.defineTraitTag('feat/gnome', { name: 'Gnome Feat' })
export const GoblinFeat = Tags.defineTraitTag('feat/goblin', { name: 'Goblin Feat' })
export const HalflingFeat = Tags.defineTraitTag('feat/halfling', { name: 'Halfling Feat' })
export const HumanFeat = Tags.defineTraitTag('feat/human', { name: 'Human Feat' })
export const LeshyFeat = Tags.defineTraitTag('feat/leshy', { name: 'Leshy Feat' })
export const OrcFeat = Tags.defineTraitTag('feat/orc', { name: 'Orc Feat' })
export const ChangelingFeat = Tags.defineTraitTag('feat/changeling', { name: 'Changeling Feat' })
export const NephilimFeat = Tags.defineTraitTag('feat/nephilim', { name: 'Nephilim Feat' })
export const AiuvarinFeat = Tags.defineTraitTag('feat/aiuvarin', { name: 'Aiuvarin Feat' })
export const DromaarFeat = Tags.defineTraitTag('feat/dromaar', { name: 'Dromaar Feat' })
export const BardFeat = Tags.defineTraitTag('feat/bard', { name: 'Bard Feat' })
export const ClericFeat = Tags.defineTraitTag('feat/cleric', { name: 'Cleric Feat' })
export const DruidFeat = Tags.defineTraitTag('feat/druid', { name: 'Druid Feat' })
export const FighterFeat = Tags.defineTraitTag('feat/fighter', { name: 'Fighter Feat' })
export const RangerFeat = Tags.defineTraitTag('feat/ranger', { name: 'Ranger Feat' })
export const RogueFeat = Tags.defineTraitTag('feat/rogue', { name: 'Rogue Feat' })
export const WitchFeat = Tags.defineTraitTag('feat/witch', { name: 'Witch Feat' })
export const WizardFeat = Tags.defineTraitTag('feat/wizard', { name: 'Wizard Feat' })
export const FeatLevel1 = Tags.defineTraitTag('feat/level-1', { name: 'Level 1' })
export const FeatLevel2 = Tags.defineTraitTag('feat/level-2', { name: 'Level 2' })
export const FeatLevel3 = Tags.defineTraitTag('feat/level-3', { name: 'Level 3' })
export const FeatLevel4 = Tags.defineTraitTag('feat/level-4', { name: 'Level 4' })
export const FeatLevel5 = Tags.defineTraitTag('feat/level-5', { name: 'Level 5' })
export const FeatLevel6 = Tags.defineTraitTag('feat/level-6', { name: 'Level 6' })
export const FeatLevel7 = Tags.defineTraitTag('feat/level-7', { name: 'Level 7' })
export const FeatLevel8 = Tags.defineTraitTag('feat/level-8', { name: 'Level 8' })
export const FeatLevel9 = Tags.defineTraitTag('feat/level-9', { name: 'Level 9' })
export const FeatLevel10 = Tags.defineTraitTag('feat/level-10', { name: 'Level 10' })
export const Spell = Tags.defineAbilityTag('spell', { name: 'Spell' })
export const Cantrip = Tags.defineAbilityTag('spell/cantrip', { name: 'Cantrip' })
export const FocusSpell = Tags.defineAbilityTag('spell/focus', { name: 'Focus Spell' })
export const SpellRank1 = Tags.defineAbilityTag('spell/rank-1', { name: 'Rank 1' })
export const SpellRank2 = Tags.defineAbilityTag('spell/rank-2', { name: 'Rank 2' })
export const SpellRank3 = Tags.defineAbilityTag('spell/rank-3', { name: 'Rank 3' })
export const SpellRank4 = Tags.defineAbilityTag('spell/rank-4', { name: 'Rank 4' })
export const SpellRank5 = Tags.defineAbilityTag('spell/rank-5', { name: 'Rank 5' })
export const Arcane = Tags.defineAbilityTag('spell/tradition/arcane', { name: 'Arcane' })
export const Divine = Tags.defineAbilityTag('spell/tradition/divine', { name: 'Divine' })
export const Occult = Tags.defineAbilityTag('spell/tradition/occult', { name: 'Occult' })
export const Primal = Tags.defineAbilityTag('spell/tradition/primal', { name: 'Primal' })
export const AncestryBoost = Tags.defineTraitTag('attribute/ancestry-boost', { name: 'Ancestry Boost' })
export const BackgroundBoost = Tags.defineTraitTag('attribute/background-boost', { name: 'Background Boost' })
export const KeyAttribute = Tags.defineTraitTag('attribute/key', { name: 'Key Attribute' })
export const Level1Boost = Tags.defineTraitTag('attribute/level-1-boost', { name: 'Level 1 Boost' })
export const Level5Boost = Tags.defineTraitTag('attribute/level-5-boost', { name: 'Level 5 Boost' })
export const TrainedSkill = Tags.defineTraitTag('skill/trained', { name: 'Trained Skill' })
export const ExpertSkill = Tags.defineTraitTag('skill/expert', { name: 'Expert Skill' })
export const MasterSkill = Tags.defineTraitTag('skill/master', { name: 'Master Skill' })
export const Lore = Tags.defineTraitTag('skill/lore', { name: 'Lore' })
export const Armor = Tags.defineAbilityTag('armor', { name: 'Armor' })
export const Shield = Tags.defineAbilityTag('shield', { name: 'Shield' })
export const Ally = Tags.defineCreatureTag('target/ally', { name: 'Ally' })
export const Enemy = Tags.defineCreatureTag('target/enemy', { name: 'Enemy' })

export const AllTags = [
  Ancestry,
  Heritage,
  VersatileHeritage,
  Background,
  Class,
  ClassFeature,
  Feat,
  AncestryFeat,
  ClassFeat,
  GeneralFeat,
  SkillFeat,
  DwarfFeat,
  ElfFeat,
  GnomeFeat,
  GoblinFeat,
  HalflingFeat,
  HumanFeat,
  LeshyFeat,
  OrcFeat,
  ChangelingFeat,
  NephilimFeat,
  AiuvarinFeat,
  DromaarFeat,
  BardFeat,
  ClericFeat,
  DruidFeat,
  FighterFeat,
  RangerFeat,
  RogueFeat,
  WitchFeat,
  WizardFeat,
  FeatLevel1,
  FeatLevel2,
  FeatLevel3,
  FeatLevel4,
  FeatLevel5,
  FeatLevel6,
  FeatLevel7,
  FeatLevel8,
  FeatLevel9,
  FeatLevel10,
  Spell,
  Cantrip,
  FocusSpell,
  SpellRank1,
  SpellRank2,
  SpellRank3,
  SpellRank4,
  SpellRank5,
  Arcane,
  Divine,
  Occult,
  Primal,
  AncestryBoost,
  BackgroundBoost,
  KeyAttribute,
  Level1Boost,
  Level5Boost,
  TrainedSkill,
  ExpertSkill,
  MasterSkill,
  Lore,
  Armor,
  Shield,
  Ally,
  Enemy,
]
