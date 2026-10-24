import { Archetypes } from '@simulacrum/ruleset'

export const Ancestry = Archetypes.defineTraitArchetype('ancestry', { name: 'Ancestry' })
export const Heritage = Archetypes.defineTraitArchetype('heritage', { name: 'Heritage' })
export const VersatileHeritage = Archetypes.defineTraitArchetype('heritage/versatile', { name: 'Versatile Heritage' })
export const Background = Archetypes.defineTraitArchetype('background', { name: 'Background' })
export const Class = Archetypes.defineTraitArchetype('class', { name: 'Class' })
export const ClassFeature = Archetypes.defineTraitArchetype('class-feature', { name: 'Class Feature' })
export const Feat = Archetypes.defineTraitArchetype('feat', { name: 'Feat' })
export const AncestryFeat = Archetypes.defineTraitArchetype('feat/ancestry', { name: 'Ancestry Feat' })
export const ClassFeat = Archetypes.defineTraitArchetype('feat/class', { name: 'Class Feat' })
export const GeneralFeat = Archetypes.defineTraitArchetype('feat/general', { name: 'General Feat' })
export const SkillFeat = Archetypes.defineTraitArchetype('feat/skill', { name: 'Skill Feat' })
export const DwarfFeat = Archetypes.defineTraitArchetype('feat/dwarf', { name: 'Dwarf Feat' })
export const ElfFeat = Archetypes.defineTraitArchetype('feat/elf', { name: 'Elf Feat' })
export const GnomeFeat = Archetypes.defineTraitArchetype('feat/gnome', { name: 'Gnome Feat' })
export const GoblinFeat = Archetypes.defineTraitArchetype('feat/goblin', { name: 'Goblin Feat' })
export const HalflingFeat = Archetypes.defineTraitArchetype('feat/halfling', { name: 'Halfling Feat' })
export const HumanFeat = Archetypes.defineTraitArchetype('feat/human', { name: 'Human Feat' })
export const LeshyFeat = Archetypes.defineTraitArchetype('feat/leshy', { name: 'Leshy Feat' })
export const OrcFeat = Archetypes.defineTraitArchetype('feat/orc', { name: 'Orc Feat' })
export const ChangelingFeat = Archetypes.defineTraitArchetype('feat/changeling', { name: 'Changeling Feat' })
export const NephilimFeat = Archetypes.defineTraitArchetype('feat/nephilim', { name: 'Nephilim Feat' })
export const AiuvarinFeat = Archetypes.defineTraitArchetype('feat/aiuvarin', { name: 'Aiuvarin Feat' })
export const DromaarFeat = Archetypes.defineTraitArchetype('feat/dromaar', { name: 'Dromaar Feat' })
export const BardFeat = Archetypes.defineTraitArchetype('feat/bard', { name: 'Bard Feat' })
export const ClericFeat = Archetypes.defineTraitArchetype('feat/cleric', { name: 'Cleric Feat' })
export const DruidFeat = Archetypes.defineTraitArchetype('feat/druid', { name: 'Druid Feat' })
export const FighterFeat = Archetypes.defineTraitArchetype('feat/fighter', { name: 'Fighter Feat' })
export const RangerFeat = Archetypes.defineTraitArchetype('feat/ranger', { name: 'Ranger Feat' })
export const RogueFeat = Archetypes.defineTraitArchetype('feat/rogue', { name: 'Rogue Feat' })
export const WitchFeat = Archetypes.defineTraitArchetype('feat/witch', { name: 'Witch Feat' })
export const WizardFeat = Archetypes.defineTraitArchetype('feat/wizard', { name: 'Wizard Feat' })
export const FeatLevel1 = Archetypes.defineTraitArchetype('feat/level-1', { name: 'Level 1' })
export const FeatLevel2 = Archetypes.defineTraitArchetype('feat/level-2', { name: 'Level 2' })
export const FeatLevel3 = Archetypes.defineTraitArchetype('feat/level-3', { name: 'Level 3' })
export const FeatLevel4 = Archetypes.defineTraitArchetype('feat/level-4', { name: 'Level 4' })
export const FeatLevel5 = Archetypes.defineTraitArchetype('feat/level-5', { name: 'Level 5' })
export const Spell = Archetypes.defineAbilityArchetype('spell', { name: 'Spell' })
export const Cantrip = Archetypes.defineAbilityArchetype('spell/cantrip', { name: 'Cantrip' })
export const FocusSpell = Archetypes.defineAbilityArchetype('spell/focus', { name: 'Focus Spell' })
export const SpellRank1 = Archetypes.defineAbilityArchetype('spell/rank-1', { name: 'Rank 1' })
export const SpellRank2 = Archetypes.defineAbilityArchetype('spell/rank-2', { name: 'Rank 2' })
export const SpellRank3 = Archetypes.defineAbilityArchetype('spell/rank-3', { name: 'Rank 3' })
export const Arcane = Archetypes.defineAbilityArchetype('spell/tradition/arcane', { name: 'Arcane' })
export const Divine = Archetypes.defineAbilityArchetype('spell/tradition/divine', { name: 'Divine' })
export const Occult = Archetypes.defineAbilityArchetype('spell/tradition/occult', { name: 'Occult' })
export const Primal = Archetypes.defineAbilityArchetype('spell/tradition/primal', { name: 'Primal' })
export const AncestryBoost = Archetypes.defineTraitArchetype('attribute/ancestry-boost', { name: 'Ancestry Boost' })
export const BackgroundBoost = Archetypes.defineTraitArchetype('attribute/background-boost', { name: 'Background Boost' })
export const KeyAttribute = Archetypes.defineTraitArchetype('attribute/key', { name: 'Key Attribute' })
export const Level1Boost = Archetypes.defineTraitArchetype('attribute/level-1-boost', { name: 'Level 1 Boost' })
export const Level5Boost = Archetypes.defineTraitArchetype('attribute/level-5-boost', { name: 'Level 5 Boost' })
export const TrainedSkill = Archetypes.defineTraitArchetype('skill/trained', { name: 'Trained Skill' })
export const ExpertSkill = Archetypes.defineTraitArchetype('skill/expert', { name: 'Expert Skill' })
export const Lore = Archetypes.defineTraitArchetype('skill/lore', { name: 'Lore' })
export const Armor = Archetypes.defineAbilityArchetype('armor', { name: 'Armor' })
export const Shield = Archetypes.defineAbilityArchetype('shield', { name: 'Shield' })
export const Ally = Archetypes.defineCreatureArchetype('target/ally', { name: 'Ally' })
export const Enemy = Archetypes.defineCreatureArchetype('target/enemy', { name: 'Enemy' })

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
  Ally,
  Enemy,
]
