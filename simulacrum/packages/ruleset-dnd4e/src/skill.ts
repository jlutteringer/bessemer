import { Archetypes, Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import * as Characteristics from '@simulacrum/ruleset-dnd4e/characteristic'
import { FeatBonus } from '@simulacrum/ruleset-dnd4e/bonus-type'

export const TrainedSkill = Archetypes.defineTraitArchetype('trained-skill', { name: 'Trained Skill' })
export const SkillFocus = Archetypes.defineTraitArchetype('skill-focus', { name: 'Skill Focus' })

export const TrainedAcrobatics = Traits.defineTrait('skill/acrobatics/trained', {
  name: 'Trained: Acrobatics',
  description: 'You gain a +5 bonus to Acrobatics checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Acrobatics, Attributes.modifier(Patches.sum(5)))],
})

export const AcrobaticsFocus = Traits.defineTrait('skill/acrobatics/focus', {
  name: 'Skill Focus: Acrobatics',
  description: 'You have a +3 feat bonus to Acrobatics checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedAcrobatics)],
  effects: [Effects.modifyCharacteristic(Characteristics.Acrobatics, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedArcana = Traits.defineTrait('skill/arcana/trained', {
  name: 'Trained: Arcana',
  description: 'You gain a +5 bonus to Arcana checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Arcana, Attributes.modifier(Patches.sum(5)))],
})

export const ArcanaFocus = Traits.defineTrait('skill/arcana/focus', {
  name: 'Skill Focus: Arcana',
  description: 'You have a +3 feat bonus to Arcana checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedArcana)],
  effects: [Effects.modifyCharacteristic(Characteristics.Arcana, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedAthletics = Traits.defineTrait('skill/athletics/trained', {
  name: 'Trained: Athletics',
  description: 'You gain a +5 bonus to Athletics checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Athletics, Attributes.modifier(Patches.sum(5)))],
})

export const AthleticsFocus = Traits.defineTrait('skill/athletics/focus', {
  name: 'Skill Focus: Athletics',
  description: 'You have a +3 feat bonus to Athletics checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [Effects.modifyCharacteristic(Characteristics.Athletics, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedBluff = Traits.defineTrait('skill/bluff/trained', {
  name: 'Trained: Bluff',
  description: 'You gain a +5 bonus to Bluff checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Bluff, Attributes.modifier(Patches.sum(5)))],
})

export const BluffFocus = Traits.defineTrait('skill/bluff/focus', {
  name: 'Skill Focus: Bluff',
  description: 'You have a +3 feat bonus to Bluff checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedBluff)],
  effects: [Effects.modifyCharacteristic(Characteristics.Bluff, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedDiplomacy = Traits.defineTrait('skill/diplomacy/trained', {
  name: 'Trained: Diplomacy',
  description: 'You gain a +5 bonus to Diplomacy checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Diplomacy, Attributes.modifier(Patches.sum(5)))],
})

export const DiplomacyFocus = Traits.defineTrait('skill/diplomacy/focus', {
  name: 'Skill Focus: Diplomacy',
  description: 'You have a +3 feat bonus to Diplomacy checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedDiplomacy)],
  effects: [Effects.modifyCharacteristic(Characteristics.Diplomacy, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedDungeoneering = Traits.defineTrait('skill/dungeoneering/trained', {
  name: 'Trained: Dungeoneering',
  description: 'You gain a +5 bonus to Dungeoneering checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Dungeoneering, Attributes.modifier(Patches.sum(5)))],
})

export const DungeoneeringFocus = Traits.defineTrait('skill/dungeoneering/focus', {
  name: 'Skill Focus: Dungeoneering',
  description: 'You have a +3 feat bonus to Dungeoneering checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedDungeoneering)],
  effects: [Effects.modifyCharacteristic(Characteristics.Dungeoneering, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedEndurance = Traits.defineTrait('skill/endurance/trained', {
  name: 'Trained: Endurance',
  description: 'You gain a +5 bonus to Endurance checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Endurance, Attributes.modifier(Patches.sum(5)))],
})

export const EnduranceFocus = Traits.defineTrait('skill/endurance/focus', {
  name: 'Skill Focus: Endurance',
  description: 'You have a +3 feat bonus to Endurance checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedEndurance)],
  effects: [Effects.modifyCharacteristic(Characteristics.Endurance, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedHeal = Traits.defineTrait('skill/heal/trained', {
  name: 'Trained: Heal',
  description: 'You gain a +5 bonus to Heal checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Heal, Attributes.modifier(Patches.sum(5)))],
})

export const HealFocus = Traits.defineTrait('skill/heal/focus', {
  name: 'Skill Focus: Heal',
  description: 'You have a +3 feat bonus to Heal checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedHeal)],
  effects: [Effects.modifyCharacteristic(Characteristics.Heal, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedHistory = Traits.defineTrait('skill/history/trained', {
  name: 'Trained: History',
  description: 'You gain a +5 bonus to History checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.History, Attributes.modifier(Patches.sum(5)))],
})

export const HistoryFocus = Traits.defineTrait('skill/history/focus', {
  name: 'Skill Focus: History',
  description: 'You have a +3 feat bonus to History checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedHistory)],
  effects: [Effects.modifyCharacteristic(Characteristics.History, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedInsight = Traits.defineTrait('skill/insight/trained', {
  name: 'Trained: Insight',
  description: 'You gain a +5 bonus to Insight checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Insight, Attributes.modifier(Patches.sum(5)))],
})

export const InsightFocus = Traits.defineTrait('skill/insight/focus', {
  name: 'Skill Focus: Insight',
  description: 'You have a +3 feat bonus to Insight checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedInsight)],
  effects: [Effects.modifyCharacteristic(Characteristics.Insight, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedIntimidate = Traits.defineTrait('skill/intimidate/trained', {
  name: 'Trained: Intimidate',
  description: 'You gain a +5 bonus to Intimidate checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Intimidate, Attributes.modifier(Patches.sum(5)))],
})

export const IntimidateFocus = Traits.defineTrait('skill/intimidate/focus', {
  name: 'Skill Focus: Intimidate',
  description: 'You have a +3 feat bonus to Intimidate checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedIntimidate)],
  effects: [Effects.modifyCharacteristic(Characteristics.Intimidate, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedNature = Traits.defineTrait('skill/nature/trained', {
  name: 'Trained: Nature',
  description: 'You gain a +5 bonus to Nature checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Nature, Attributes.modifier(Patches.sum(5)))],
})

export const NatureFocus = Traits.defineTrait('skill/nature/focus', {
  name: 'Skill Focus: Nature',
  description: 'You have a +3 feat bonus to Nature checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedNature)],
  effects: [Effects.modifyCharacteristic(Characteristics.Nature, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedPerception = Traits.defineTrait('skill/perception/trained', {
  name: 'Trained: Perception',
  description: 'You gain a +5 bonus to Perception checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Perception, Attributes.modifier(Patches.sum(5)))],
})

export const PerceptionFocus = Traits.defineTrait('skill/perception/focus', {
  name: 'Skill Focus: Perception',
  description: 'You have a +3 feat bonus to Perception checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedPerception)],
  effects: [Effects.modifyCharacteristic(Characteristics.Perception, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedReligion = Traits.defineTrait('skill/religion/trained', {
  name: 'Trained: Religion',
  description: 'You gain a +5 bonus to Religion checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Religion, Attributes.modifier(Patches.sum(5)))],
})

export const ReligionFocus = Traits.defineTrait('skill/religion/focus', {
  name: 'Skill Focus: Religion',
  description: 'You have a +3 feat bonus to Religion checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedReligion)],
  effects: [Effects.modifyCharacteristic(Characteristics.Religion, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedStealth = Traits.defineTrait('skill/stealth/trained', {
  name: 'Trained: Stealth',
  description: 'You gain a +5 bonus to Stealth checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Stealth, Attributes.modifier(Patches.sum(5)))],
})

export const StealthFocus = Traits.defineTrait('skill/stealth/focus', {
  name: 'Skill Focus: Stealth',
  description: 'You have a +3 feat bonus to Stealth checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedStealth)],
  effects: [Effects.modifyCharacteristic(Characteristics.Stealth, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedStreetwise = Traits.defineTrait('skill/streetwise/trained', {
  name: 'Trained: Streetwise',
  description: 'You gain a +5 bonus to Streetwise checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Streetwise, Attributes.modifier(Patches.sum(5)))],
})

export const StreetwiseFocus = Traits.defineTrait('skill/streetwise/focus', {
  name: 'Skill Focus: Streetwise',
  description: 'You have a +3 feat bonus to Streetwise checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedStreetwise)],
  effects: [Effects.modifyCharacteristic(Characteristics.Streetwise, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const TrainedThievery = Traits.defineTrait('skill/thievery/trained', {
  name: 'Trained: Thievery',
  description: 'You gain a +5 bonus to Thievery checks.',
  archetypes: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Characteristics.Thievery, Attributes.modifier(Patches.sum(5)))],
})

export const ThieveryFocus = Traits.defineTrait('skill/thievery/focus', {
  name: 'Skill Focus: Thievery',
  description: 'You have a +3 feat bonus to Thievery checks.',
  archetypes: [SkillFocus],
  prerequisites: [Traits.traitPrerequisite(TrainedThievery)],
  effects: [Effects.modifyCharacteristic(Characteristics.Thievery, Attributes.modifier(Patches.sum(3), { combinability: FeatBonus }))],
})

export const AllSkillTraits = [
  TrainedAcrobatics,
  AcrobaticsFocus,
  TrainedArcana,
  ArcanaFocus,
  TrainedAthletics,
  AthleticsFocus,
  TrainedBluff,
  BluffFocus,
  TrainedDiplomacy,
  DiplomacyFocus,
  TrainedDungeoneering,
  DungeoneeringFocus,
  TrainedEndurance,
  EnduranceFocus,
  TrainedHeal,
  HealFocus,
  TrainedHistory,
  HistoryFocus,
  TrainedInsight,
  InsightFocus,
  TrainedIntimidate,
  IntimidateFocus,
  TrainedNature,
  NatureFocus,
  TrainedPerception,
  PerceptionFocus,
  TrainedReligion,
  ReligionFocus,
  TrainedStealth,
  StealthFocus,
  TrainedStreetwise,
  StreetwiseFocus,
  TrainedThievery,
  ThieveryFocus,
]

export const SelectAnySkill = CharacterOptions.selectTraitOption('skill/select-any', {
  name: 'Trained Skill',
  filter: { archetypes: [TrainedSkill] },
})

export const SelectSkillFocus = CharacterOptions.selectTraitOption('skill/select-focus', {
  name: 'Skill Focus',
  filter: { archetypes: [SkillFocus] },
})
