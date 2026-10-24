import { Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { ExpertSkill, TrainedSkill } from '@simulacrum/ruleset-pf2e/tag'
import {
  Acrobatics,
  Arcana,
  Athletics,
  Crafting,
  Deception,
  Diplomacy,
  Intimidation,
  Medicine,
  Nature,
  Occultism,
  Performance,
  Religion,
  Society,
  Stealth,
  Survival,
  Thievery,
} from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Expert, Trained } from '@simulacrum/ruleset-pf2e/proficiency'

export const TrainedAcrobatics = Traits.defineTrait('skill/acrobatics/trained', {
  name: 'Trained in Acrobatics',
  description: 'You are trained in Acrobatics, adding your level + 2 to Acrobatics checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Acrobatics, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertAcrobatics = Traits.defineTrait('skill/acrobatics/expert', {
  name: 'Expert in Acrobatics',
  description: 'You are an expert in Acrobatics, adding your level + 4 to Acrobatics checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedAcrobatics)],
  effects: [Effects.modifyCharacteristic(Acrobatics, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedArcana = Traits.defineTrait('skill/arcana/trained', {
  name: 'Trained in Arcana',
  description: 'You are trained in Arcana, adding your level + 2 to Arcana checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Arcana, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertArcana = Traits.defineTrait('skill/arcana/expert', {
  name: 'Expert in Arcana',
  description: 'You are an expert in Arcana, adding your level + 4 to Arcana checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedArcana)],
  effects: [Effects.modifyCharacteristic(Arcana, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedAthletics = Traits.defineTrait('skill/athletics/trained', {
  name: 'Trained in Athletics',
  description: 'You are trained in Athletics, adding your level + 2 to Athletics checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertAthletics = Traits.defineTrait('skill/athletics/expert', {
  name: 'Expert in Athletics',
  description: 'You are an expert in Athletics, adding your level + 4 to Athletics checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [Effects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedCrafting = Traits.defineTrait('skill/crafting/trained', {
  name: 'Trained in Crafting',
  description: 'You are trained in Crafting, adding your level + 2 to Crafting checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Crafting, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertCrafting = Traits.defineTrait('skill/crafting/expert', {
  name: 'Expert in Crafting',
  description: 'You are an expert in Crafting, adding your level + 4 to Crafting checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedCrafting)],
  effects: [Effects.modifyCharacteristic(Crafting, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedDeception = Traits.defineTrait('skill/deception/trained', {
  name: 'Trained in Deception',
  description: 'You are trained in Deception, adding your level + 2 to Deception checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Deception, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertDeception = Traits.defineTrait('skill/deception/expert', {
  name: 'Expert in Deception',
  description: 'You are an expert in Deception, adding your level + 4 to Deception checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedDeception)],
  effects: [Effects.modifyCharacteristic(Deception, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedDiplomacy = Traits.defineTrait('skill/diplomacy/trained', {
  name: 'Trained in Diplomacy',
  description: 'You are trained in Diplomacy, adding your level + 2 to Diplomacy checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Diplomacy, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertDiplomacy = Traits.defineTrait('skill/diplomacy/expert', {
  name: 'Expert in Diplomacy',
  description: 'You are an expert in Diplomacy, adding your level + 4 to Diplomacy checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedDiplomacy)],
  effects: [Effects.modifyCharacteristic(Diplomacy, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedIntimidation = Traits.defineTrait('skill/intimidation/trained', {
  name: 'Trained in Intimidation',
  description: 'You are trained in Intimidation, adding your level + 2 to Intimidation checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Intimidation, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertIntimidation = Traits.defineTrait('skill/intimidation/expert', {
  name: 'Expert in Intimidation',
  description: 'You are an expert in Intimidation, adding your level + 4 to Intimidation checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedIntimidation)],
  effects: [Effects.modifyCharacteristic(Intimidation, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedMedicine = Traits.defineTrait('skill/medicine/trained', {
  name: 'Trained in Medicine',
  description: 'You are trained in Medicine, adding your level + 2 to Medicine checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Medicine, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertMedicine = Traits.defineTrait('skill/medicine/expert', {
  name: 'Expert in Medicine',
  description: 'You are an expert in Medicine, adding your level + 4 to Medicine checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedMedicine)],
  effects: [Effects.modifyCharacteristic(Medicine, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedNature = Traits.defineTrait('skill/nature/trained', {
  name: 'Trained in Nature',
  description: 'You are trained in Nature, adding your level + 2 to Nature checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Nature, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertNature = Traits.defineTrait('skill/nature/expert', {
  name: 'Expert in Nature',
  description: 'You are an expert in Nature, adding your level + 4 to Nature checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedNature)],
  effects: [Effects.modifyCharacteristic(Nature, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedOccultism = Traits.defineTrait('skill/occultism/trained', {
  name: 'Trained in Occultism',
  description: 'You are trained in Occultism, adding your level + 2 to Occultism checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Occultism, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertOccultism = Traits.defineTrait('skill/occultism/expert', {
  name: 'Expert in Occultism',
  description: 'You are an expert in Occultism, adding your level + 4 to Occultism checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedOccultism)],
  effects: [Effects.modifyCharacteristic(Occultism, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedPerformance = Traits.defineTrait('skill/performance/trained', {
  name: 'Trained in Performance',
  description: 'You are trained in Performance, adding your level + 2 to Performance checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Performance, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertPerformance = Traits.defineTrait('skill/performance/expert', {
  name: 'Expert in Performance',
  description: 'You are an expert in Performance, adding your level + 4 to Performance checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedPerformance)],
  effects: [Effects.modifyCharacteristic(Performance, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedReligion = Traits.defineTrait('skill/religion/trained', {
  name: 'Trained in Religion',
  description: 'You are trained in Religion, adding your level + 2 to Religion checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Religion, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertReligion = Traits.defineTrait('skill/religion/expert', {
  name: 'Expert in Religion',
  description: 'You are an expert in Religion, adding your level + 4 to Religion checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedReligion)],
  effects: [Effects.modifyCharacteristic(Religion, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedSociety = Traits.defineTrait('skill/society/trained', {
  name: 'Trained in Society',
  description: 'You are trained in Society, adding your level + 2 to Society checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Society, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertSociety = Traits.defineTrait('skill/society/expert', {
  name: 'Expert in Society',
  description: 'You are an expert in Society, adding your level + 4 to Society checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedSociety)],
  effects: [Effects.modifyCharacteristic(Society, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedStealth = Traits.defineTrait('skill/stealth/trained', {
  name: 'Trained in Stealth',
  description: 'You are trained in Stealth, adding your level + 2 to Stealth checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertStealth = Traits.defineTrait('skill/stealth/expert', {
  name: 'Expert in Stealth',
  description: 'You are an expert in Stealth, adding your level + 4 to Stealth checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedStealth)],
  effects: [Effects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedSurvival = Traits.defineTrait('skill/survival/trained', {
  name: 'Trained in Survival',
  description: 'You are trained in Survival, adding your level + 2 to Survival checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Survival, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertSurvival = Traits.defineTrait('skill/survival/expert', {
  name: 'Expert in Survival',
  description: 'You are an expert in Survival, adding your level + 4 to Survival checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedSurvival)],
  effects: [Effects.modifyCharacteristic(Survival, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TrainedThievery = Traits.defineTrait('skill/thievery/trained', {
  name: 'Trained in Thievery',
  description: 'You are trained in Thievery, adding your level + 2 to Thievery checks.',
  tags: [TrainedSkill],
  effects: [Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertThievery = Traits.defineTrait('skill/thievery/expert', {
  name: 'Expert in Thievery',
  description: 'You are an expert in Thievery, adding your level + 4 to Thievery checks.',
  tags: [ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedThievery)],
  effects: [Effects.modifyCharacteristic(Thievery, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const SelectTrainedSkill = CharacterOptions.selectTraitOption('skill/select-trained', {
  name: 'Trained Skill',
  filter: { tags: [TrainedSkill] },
})

// A skill increase makes you trained in a new skill or an expert in a skill you're trained in
export const SelectSkillIncrease = CharacterOptions.selectTraitOption('skill/select-increase', {
  name: 'Skill Increase',
  filter: { tags: [[TrainedSkill, ExpertSkill]] },
})

export const AllSkillTraits = [
  TrainedAcrobatics,
  ExpertAcrobatics,
  TrainedArcana,
  ExpertArcana,
  TrainedAthletics,
  ExpertAthletics,
  TrainedCrafting,
  ExpertCrafting,
  TrainedDeception,
  ExpertDeception,
  TrainedDiplomacy,
  ExpertDiplomacy,
  TrainedIntimidation,
  ExpertIntimidation,
  TrainedMedicine,
  ExpertMedicine,
  TrainedNature,
  ExpertNature,
  TrainedOccultism,
  ExpertOccultism,
  TrainedPerformance,
  ExpertPerformance,
  TrainedReligion,
  ExpertReligion,
  TrainedSociety,
  ExpertSociety,
  TrainedStealth,
  ExpertStealth,
  TrainedSurvival,
  ExpertSurvival,
  TrainedThievery,
  ExpertThievery,
]
