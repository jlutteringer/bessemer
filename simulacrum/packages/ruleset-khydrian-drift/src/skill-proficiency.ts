import { Archetypes, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { PlayerCharacteristics, ProficiencyBonus } from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { Patches } from '@bessemer/cornerstone'

export const SkillProficiency = Archetypes.defineArchetype('skill-proficiency', { name: 'Skill Proficiency', description: '' })

export const Athletics = Traits.defineTrait('skill-proficiency/athletics', {
  name: 'Athletics',
  description: 'Add your proficiency bonus to the [Athletics](characteristic:skill/athletics) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Athletics, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Charm = Traits.defineTrait('skill-proficiency/charm', {
  name: 'Charm',
  description: 'Add your proficiency bonus to the [Charm](characteristic:skill/charm) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Charm, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Coercion = Traits.defineTrait('skill-proficiency/coercion', {
  name: 'Coercion',
  description: 'Add your proficiency bonus to the [Coercion](characteristic:skill/coercion) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Coercion, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Computers = Traits.defineTrait('skill-proficiency/computers', {
  name: 'Computers',
  description: 'Add your proficiency bonus to the [Computers](characteristic:skill/computers) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Computers, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Coordination = Traits.defineTrait('skill-proficiency/coordination', {
  name: 'Coordination',
  description: 'Add your proficiency bonus to the [Coordination](characteristic:skill/coordination) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Coordination, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Deception = Traits.defineTrait('skill-proficiency/deception', {
  name: 'Deception',
  description: 'Add your proficiency bonus to the [Deception](characteristic:skill/deception) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Deception, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Discipline = Traits.defineTrait('skill-proficiency/discipline', {
  name: 'Discipline',
  description: 'Add your proficiency bonus to the [Discipline](characteristic:skill/discipline) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Discipline, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const GridRunning = Traits.defineTrait('skill-proficiency/grid-running', {
  name: 'Grid Running',
  description: 'Add your proficiency bonus to the [Grid Running](characteristic:skill/grid-running) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.GridRunning, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Investigation = Traits.defineTrait('skill-proficiency/investigation', {
  name: 'Investigation',
  description: 'Add your proficiency bonus to the [Investigation](characteristic:skill/investigation) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Investigation, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Leadership = Traits.defineTrait('skill-proficiency/leadership', {
  name: 'Leadership',
  description: 'Add your proficiency bonus to the [Leadership](characteristic:skill/leadership) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Leadership, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Lore = Traits.defineTrait('skill-proficiency/lore', {
  name: 'Lore',
  description: 'Add your proficiency bonus to the [Lore](characteristic:skill/lore) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Lore, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Mechanics = Traits.defineTrait('skill-proficiency/mechanics', {
  name: 'Mechanics',
  description: 'Add your proficiency bonus to the [Mechanics](characteristic:skill/mechanics) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Mechanics, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Medicine = Traits.defineTrait('skill-proficiency/medicine', {
  name: 'Medicine',
  description: 'Add your proficiency bonus to the [Medicine](characteristic:skill/medicine) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Medicine, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Navigation = Traits.defineTrait('skill-proficiency/navigation', {
  name: 'Navigation',
  description: 'Add your proficiency bonus to the [Navigation](characteristic:skill/navigation) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Navigation, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Performance = Traits.defineTrait('skill-proficiency/performance', {
  name: 'Performance',
  description: 'Add your proficiency bonus to the [Performance](characteristic:skill/performance) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Performance, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Piloting = Traits.defineTrait('skill-proficiency/piloting', {
  name: 'Piloting',
  description: 'Add your proficiency bonus to the [Piloting](characteristic:skill/piloting) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Piloting, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Statecraft = Traits.defineTrait('skill-proficiency/statecraft', {
  name: 'Statecraft',
  description: 'Add your proficiency bonus to the [Statecraft](characteristic:skill/statecraft) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Statecraft, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Stealth = Traits.defineTrait('skill-proficiency/stealth', {
  name: 'Stealth',
  description: 'Add your proficiency bonus to the [Stealth](characteristic:skill/stealth) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Stealth, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Streetwise = Traits.defineTrait('skill-proficiency/streetwise', {
  name: 'Streetwise',
  description: 'Add your proficiency bonus to the [Streetwise](characteristic:skill/streetwise) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Streetwise, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Survival = Traits.defineTrait('skill-proficiency/survival', {
  name: 'Survival',
  description: 'Add your proficiency bonus to the [Survival](characteristic:skill/survival) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Survival, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const Vigilance = Traits.defineTrait('skill-proficiency/vigilance', {
  name: 'Vigilance',
  description: 'Add your proficiency bonus to the [Vigilance](characteristic:skill/vigilance) skill.',
  archetypes: [SkillProficiency],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Vigilance, Attributes.modifier(Patches.sum(ProficiencyBonus)))],
})

export const AllSkillProficiencies = [
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
  Statecraft,
  Stealth,
  Streetwise,
  Survival,
  Vigilance,
]
