import { Tags, Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import {
  Athletics,
  Charm,
  Coercion,
  Computers,
  Coordination,
  Deception,
  Discipline,
  GridRunning,
  Investigation,
  Leadership,
  Lore,
  Mechanics,
  Medicine,
  Navigation,
  Performance,
  Piloting,
  ProficiencyBonus,
  Statecraft,
  Stealth,
  Streetwise,
  Survival,
  Vigilance,
} from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { Patches } from '@bessemer/cornerstone'

export const SkillProficiency = Tags.defineTraitTag('skill-proficiency', { name: 'Skill Proficiency' })

export const AthleticsProficiency = Traits.defineTrait('skill-proficiency/athletics', {
  name: 'Athletics',
  description: 'Add your proficiency bonus to the [Athletics](characteristic:skill/athletics) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Athletics, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const CharmProficiency = Traits.defineTrait('skill-proficiency/charm', {
  name: 'Charm',
  description: 'Add your proficiency bonus to the [Charm](characteristic:skill/charm) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Charm, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const CoercionProficiency = Traits.defineTrait('skill-proficiency/coercion', {
  name: 'Coercion',
  description: 'Add your proficiency bonus to the [Coercion](characteristic:skill/coercion) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Coercion, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const ComputersProficiency = Traits.defineTrait('skill-proficiency/computers', {
  name: 'Computers',
  description: 'Add your proficiency bonus to the [Computers](characteristic:skill/computers) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Computers, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const CoordinationProficiency = Traits.defineTrait('skill-proficiency/coordination', {
  name: 'Coordination',
  description: 'Add your proficiency bonus to the [Coordination](characteristic:skill/coordination) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Coordination, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const DeceptionProficiency = Traits.defineTrait('skill-proficiency/deception', {
  name: 'Deception',
  description: 'Add your proficiency bonus to the [Deception](characteristic:skill/deception) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Deception, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const DisciplineProficiency = Traits.defineTrait('skill-proficiency/discipline', {
  name: 'Discipline',
  description: 'Add your proficiency bonus to the [Discipline](characteristic:skill/discipline) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Discipline, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const GridRunningProficiency = Traits.defineTrait('skill-proficiency/grid-running', {
  name: 'Grid Running',
  description: 'Add your proficiency bonus to the [Grid Running](characteristic:skill/grid-running) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(GridRunning, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const InvestigationProficiency = Traits.defineTrait('skill-proficiency/investigation', {
  name: 'Investigation',
  description: 'Add your proficiency bonus to the [Investigation](characteristic:skill/investigation) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Investigation, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const LeadershipProficiency = Traits.defineTrait('skill-proficiency/leadership', {
  name: 'Leadership',
  description: 'Add your proficiency bonus to the [Leadership](characteristic:skill/leadership) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Leadership, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const LoreProficiency = Traits.defineTrait('skill-proficiency/lore', {
  name: 'Lore',
  description: 'Add your proficiency bonus to the [Lore](characteristic:skill/lore) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Lore, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const MechanicsProficiency = Traits.defineTrait('skill-proficiency/mechanics', {
  name: 'Mechanics',
  description: 'Add your proficiency bonus to the [Mechanics](characteristic:skill/mechanics) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Mechanics, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const MedicineProficiency = Traits.defineTrait('skill-proficiency/medicine', {
  name: 'Medicine',
  description: 'Add your proficiency bonus to the [Medicine](characteristic:skill/medicine) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Medicine, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const NavigationProficiency = Traits.defineTrait('skill-proficiency/navigation', {
  name: 'Navigation',
  description: 'Add your proficiency bonus to the [Navigation](characteristic:skill/navigation) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Navigation, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const PerformanceProficiency = Traits.defineTrait('skill-proficiency/performance', {
  name: 'Performance',
  description: 'Add your proficiency bonus to the [Performance](characteristic:skill/performance) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Performance, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const PilotingProficiency = Traits.defineTrait('skill-proficiency/piloting', {
  name: 'Piloting',
  description: 'Add your proficiency bonus to the [Piloting](characteristic:skill/piloting) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Piloting, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const StatecraftProficiency = Traits.defineTrait('skill-proficiency/statecraft', {
  name: 'Statecraft',
  description: 'Add your proficiency bonus to the [Statecraft](characteristic:skill/statecraft) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Statecraft, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const StealthProficiency = Traits.defineTrait('skill-proficiency/stealth', {
  name: 'Stealth',
  description: 'Add your proficiency bonus to the [Stealth](characteristic:skill/stealth) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Stealth, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const StreetwiseProficiency = Traits.defineTrait('skill-proficiency/streetwise', {
  name: 'Streetwise',
  description: 'Add your proficiency bonus to the [Streetwise](characteristic:skill/streetwise) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Streetwise, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const SurvivalProficiency = Traits.defineTrait('skill-proficiency/survival', {
  name: 'Survival',
  description: 'Add your proficiency bonus to the [Survival](characteristic:skill/survival) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Survival, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const VigilanceProficiency = Traits.defineTrait('skill-proficiency/vigilance', {
  name: 'Vigilance',
  description: 'Add your proficiency bonus to the [Vigilance](characteristic:skill/vigilance) skill.',
  tags: [SkillProficiency],
  effects: [CharacterEffects.modifyCharacteristic(Vigilance, Attributes.modifier(Patches.sum(ProficiencyBonus.variable)))],
})

export const AllSkillProficiencies = [
  AthleticsProficiency,
  CharmProficiency,
  CoercionProficiency,
  ComputersProficiency,
  CoordinationProficiency,
  DeceptionProficiency,
  DisciplineProficiency,
  GridRunningProficiency,
  InvestigationProficiency,
  LeadershipProficiency,
  LoreProficiency,
  MechanicsProficiency,
  MedicineProficiency,
  NavigationProficiency,
  PerformanceProficiency,
  PilotingProficiency,
  StatecraftProficiency,
  StealthProficiency,
  StreetwiseProficiency,
  SurvivalProficiency,
  VigilanceProficiency,
]
