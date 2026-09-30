import { Archetypes, Traits } from '@simulacrum/common'
import * as SkillProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/skill-proficiency'

// FUTURE once skills are modelled as characteristics, these should require (and raise) a proficiency level rather than a specific
// proficiency trait
export const SkillExpertise = Archetypes.defineArchetype('skill-expertise', { name: 'Skill Expertise' })

const expertiseDescription = (skill: string): string => {
  return `<p>You have <strong>Expertise</strong> in ${skill}: your Proficiency Bonus is doubled for any ability check you make with it.</p>`
}

export const Acrobatics = Traits.defineTrait('skill-expertise/acrobatics', {
  name: 'Acrobatics (Expertise)',
  description: expertiseDescription('Acrobatics'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Acrobatics)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const AnimalHandling = Traits.defineTrait('skill-expertise/animal-handling', {
  name: 'Animal Handling (Expertise)',
  description: expertiseDescription('Animal Handling'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.AnimalHandling)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Arcana = Traits.defineTrait('skill-expertise/arcana', {
  name: 'Arcana (Expertise)',
  description: expertiseDescription('Arcana'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Arcana)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Athletics = Traits.defineTrait('skill-expertise/athletics', {
  name: 'Athletics (Expertise)',
  description: expertiseDescription('Athletics'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Athletics)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Deception = Traits.defineTrait('skill-expertise/deception', {
  name: 'Deception (Expertise)',
  description: expertiseDescription('Deception'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Deception)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const History = Traits.defineTrait('skill-expertise/history', {
  name: 'History (Expertise)',
  description: expertiseDescription('History'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.History)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Insight = Traits.defineTrait('skill-expertise/insight', {
  name: 'Insight (Expertise)',
  description: expertiseDescription('Insight'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Insight)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Intimidation = Traits.defineTrait('skill-expertise/intimidation', {
  name: 'Intimidation (Expertise)',
  description: expertiseDescription('Intimidation'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Intimidation)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Investigation = Traits.defineTrait('skill-expertise/investigation', {
  name: 'Investigation (Expertise)',
  description: expertiseDescription('Investigation'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Investigation)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Medicine = Traits.defineTrait('skill-expertise/medicine', {
  name: 'Medicine (Expertise)',
  description: expertiseDescription('Medicine'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Medicine)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Nature = Traits.defineTrait('skill-expertise/nature', {
  name: 'Nature (Expertise)',
  description: expertiseDescription('Nature'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Nature)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Perception = Traits.defineTrait('skill-expertise/perception', {
  name: 'Perception (Expertise)',
  description: expertiseDescription('Perception'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Perception)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Performance = Traits.defineTrait('skill-expertise/performance', {
  name: 'Performance (Expertise)',
  description: expertiseDescription('Performance'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Performance)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Persuasion = Traits.defineTrait('skill-expertise/persuasion', {
  name: 'Persuasion (Expertise)',
  description: expertiseDescription('Persuasion'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Persuasion)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Religion = Traits.defineTrait('skill-expertise/religion', {
  name: 'Religion (Expertise)',
  description: expertiseDescription('Religion'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Religion)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const SleightofHand = Traits.defineTrait('skill-expertise/sleightof-hand', {
  name: 'Sleight of Hand (Expertise)',
  description: expertiseDescription('Sleight of Hand'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.SleightofHand)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Stealth = Traits.defineTrait('skill-expertise/stealth', {
  name: 'Stealth (Expertise)',
  description: expertiseDescription('Stealth'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Stealth)],
  archetypes: [SkillExpertise],
  effects: [],
})

export const Survival = Traits.defineTrait('skill-expertise/survival', {
  name: 'Survival (Expertise)',
  description: expertiseDescription('Survival'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Survival)],
  archetypes: [SkillExpertise],
  effects: [],
})
