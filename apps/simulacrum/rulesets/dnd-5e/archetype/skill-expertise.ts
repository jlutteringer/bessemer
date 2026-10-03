import { Archetypes, Attributes, Effects, Traits } from '@simulacrum/common'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { Patches } from '@bessemer/cornerstone'
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
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Acrobatics, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const AnimalHandling = Traits.defineTrait('skill-expertise/animal-handling', {
  name: 'Animal Handling (Expertise)',
  description: expertiseDescription('Animal Handling'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.AnimalHandling)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.AnimalHandling,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Arcana = Traits.defineTrait('skill-expertise/arcana', {
  name: 'Arcana (Expertise)',
  description: expertiseDescription('Arcana'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Arcana)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Arcana, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Athletics = Traits.defineTrait('skill-expertise/athletics', {
  name: 'Athletics (Expertise)',
  description: expertiseDescription('Athletics'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Athletics)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Athletics, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Deception = Traits.defineTrait('skill-expertise/deception', {
  name: 'Deception (Expertise)',
  description: expertiseDescription('Deception'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Deception)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Deception, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const History = Traits.defineTrait('skill-expertise/history', {
  name: 'History (Expertise)',
  description: expertiseDescription('History'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.History)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.History, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Insight = Traits.defineTrait('skill-expertise/insight', {
  name: 'Insight (Expertise)',
  description: expertiseDescription('Insight'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Insight)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Insight, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Intimidation = Traits.defineTrait('skill-expertise/intimidation', {
  name: 'Intimidation (Expertise)',
  description: expertiseDescription('Intimidation'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Intimidation)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.Intimidation,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Investigation = Traits.defineTrait('skill-expertise/investigation', {
  name: 'Investigation (Expertise)',
  description: expertiseDescription('Investigation'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Investigation)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.Investigation,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Medicine = Traits.defineTrait('skill-expertise/medicine', {
  name: 'Medicine (Expertise)',
  description: expertiseDescription('Medicine'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Medicine)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Medicine, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Nature = Traits.defineTrait('skill-expertise/nature', {
  name: 'Nature (Expertise)',
  description: expertiseDescription('Nature'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Nature)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Nature, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Perception = Traits.defineTrait('skill-expertise/perception', {
  name: 'Perception (Expertise)',
  description: expertiseDescription('Perception'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Perception)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Perception, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Performance = Traits.defineTrait('skill-expertise/performance', {
  name: 'Performance (Expertise)',
  description: expertiseDescription('Performance'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Performance)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.Performance,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Persuasion = Traits.defineTrait('skill-expertise/persuasion', {
  name: 'Persuasion (Expertise)',
  description: expertiseDescription('Persuasion'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Persuasion)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Persuasion, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Religion = Traits.defineTrait('skill-expertise/religion', {
  name: 'Religion (Expertise)',
  description: expertiseDescription('Religion'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Religion)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Religion, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const SleightOfHand = Traits.defineTrait('skill-expertise/sleight-of-hand', {
  name: 'Sleight of Hand (Expertise)',
  description: expertiseDescription('Sleight of Hand'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.SleightOfHand)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.SleightOfHand,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Stealth = Traits.defineTrait('skill-expertise/stealth', {
  name: 'Stealth (Expertise)',
  description: expertiseDescription('Stealth'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Stealth)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Stealth, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Survival = Traits.defineTrait('skill-expertise/survival', {
  name: 'Survival (Expertise)',
  description: expertiseDescription('Survival'),
  prerequisites: [Traits.traitPrerequisite(SkillProficiencies.Survival)],
  archetypes: [SkillExpertise],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Survival, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})
