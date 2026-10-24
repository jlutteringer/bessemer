import { Archetypes } from '@simulacrum/ruleset'

export const Ancestry = Archetypes.defineArchetype('ancestry', { name: 'Ancestry' })
export const Heritage = Archetypes.defineArchetype('heritage', { name: 'Heritage' })
export const VersatileHeritage = Archetypes.defineArchetype('heritage/versatile', { name: 'Versatile Heritage' })
export const Background = Archetypes.defineArchetype('background', { name: 'Background' })
export const Class = Archetypes.defineArchetype('class', { name: 'Class' })
export const ClassFeature = Archetypes.defineArchetype('class-feature', { name: 'Class Feature' })
export const Feat = Archetypes.defineArchetype('feat', { name: 'Feat' })
export const AncestryFeat = Archetypes.defineArchetype('feat/ancestry', { name: 'Ancestry Feat' })
export const ClassFeat = Archetypes.defineArchetype('feat/class', { name: 'Class Feat' })
export const GeneralFeat = Archetypes.defineArchetype('feat/general', { name: 'General Feat' })
export const SkillFeat = Archetypes.defineArchetype('feat/skill', { name: 'Skill Feat' })
export const DwarfFeat = Archetypes.defineArchetype('feat/dwarf', { name: 'Dwarf Feat' })
export const ElfFeat = Archetypes.defineArchetype('feat/elf', { name: 'Elf Feat' })
export const GnomeFeat = Archetypes.defineArchetype('feat/gnome', { name: 'Gnome Feat' })
export const GoblinFeat = Archetypes.defineArchetype('feat/goblin', { name: 'Goblin Feat' })
export const HalflingFeat = Archetypes.defineArchetype('feat/halfling', { name: 'Halfling Feat' })
export const HumanFeat = Archetypes.defineArchetype('feat/human', { name: 'Human Feat' })
export const LeshyFeat = Archetypes.defineArchetype('feat/leshy', { name: 'Leshy Feat' })
export const OrcFeat = Archetypes.defineArchetype('feat/orc', { name: 'Orc Feat' })
export const ChangelingFeat = Archetypes.defineArchetype('feat/changeling', { name: 'Changeling Feat' })
export const NephilimFeat = Archetypes.defineArchetype('feat/nephilim', { name: 'Nephilim Feat' })
export const AiuvarinFeat = Archetypes.defineArchetype('feat/aiuvarin', { name: 'Aiuvarin Feat' })
export const DromaarFeat = Archetypes.defineArchetype('feat/dromaar', { name: 'Dromaar Feat' })
export const BardFeat = Archetypes.defineArchetype('feat/bard', { name: 'Bard Feat' })
export const ClericFeat = Archetypes.defineArchetype('feat/cleric', { name: 'Cleric Feat' })
export const DruidFeat = Archetypes.defineArchetype('feat/druid', { name: 'Druid Feat' })
export const FighterFeat = Archetypes.defineArchetype('feat/fighter', { name: 'Fighter Feat' })
export const RangerFeat = Archetypes.defineArchetype('feat/ranger', { name: 'Ranger Feat' })
export const RogueFeat = Archetypes.defineArchetype('feat/rogue', { name: 'Rogue Feat' })
export const WitchFeat = Archetypes.defineArchetype('feat/witch', { name: 'Witch Feat' })
export const WizardFeat = Archetypes.defineArchetype('feat/wizard', { name: 'Wizard Feat' })
export const FeatLevel1 = Archetypes.defineArchetype('feat/level-1', { name: 'Level 1' })
export const FeatLevel2 = Archetypes.defineArchetype('feat/level-2', { name: 'Level 2' })
export const FeatLevel3 = Archetypes.defineArchetype('feat/level-3', { name: 'Level 3' })
export const FeatLevel4 = Archetypes.defineArchetype('feat/level-4', { name: 'Level 4' })
export const FeatLevel5 = Archetypes.defineArchetype('feat/level-5', { name: 'Level 5' })
export const Spell = Archetypes.defineArchetype('spell', { name: 'Spell' })
export const Cantrip = Archetypes.defineArchetype('spell/cantrip', { name: 'Cantrip' })
export const FocusSpell = Archetypes.defineArchetype('spell/focus', { name: 'Focus Spell' })
export const SpellRank1 = Archetypes.defineArchetype('spell/rank-1', { name: 'Rank 1' })
export const SpellRank2 = Archetypes.defineArchetype('spell/rank-2', { name: 'Rank 2' })
export const SpellRank3 = Archetypes.defineArchetype('spell/rank-3', { name: 'Rank 3' })
export const Arcane = Archetypes.defineArchetype('spell/tradition/arcane', { name: 'Arcane' })
export const Divine = Archetypes.defineArchetype('spell/tradition/divine', { name: 'Divine' })
export const Occult = Archetypes.defineArchetype('spell/tradition/occult', { name: 'Occult' })
export const Primal = Archetypes.defineArchetype('spell/tradition/primal', { name: 'Primal' })
export const AncestryBoost = Archetypes.defineArchetype('attribute/ancestry-boost', { name: 'Ancestry Boost' })
export const BackgroundBoost = Archetypes.defineArchetype('attribute/background-boost', { name: 'Background Boost' })
export const KeyAttribute = Archetypes.defineArchetype('attribute/key', { name: 'Key Attribute' })
export const Level1Boost = Archetypes.defineArchetype('attribute/level-1-boost', { name: 'Level 1 Boost' })
export const Level5Boost = Archetypes.defineArchetype('attribute/level-5-boost', { name: 'Level 5 Boost' })
export const TrainedSkill = Archetypes.defineArchetype('skill/trained', { name: 'Trained Skill' })
export const ExpertSkill = Archetypes.defineArchetype('skill/expert', { name: 'Expert Skill' })
export const Lore = Archetypes.defineArchetype('skill/lore', { name: 'Lore' })
export const Armor = Archetypes.defineArchetype('armor', { name: 'Armor' })
export const Shield = Archetypes.defineArchetype('shield', { name: 'Shield' })

export const AllArchetypes = [
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
  Spell,
  Cantrip,
  FocusSpell,
  SpellRank1,
  SpellRank2,
  SpellRank3,
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
  Lore,
  Armor,
  Shield,
]
