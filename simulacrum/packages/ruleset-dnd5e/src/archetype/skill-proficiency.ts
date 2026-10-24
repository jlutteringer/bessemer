import { Archetypes, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import { Patches } from '@bessemer/cornerstone'

export const SkillProficiency = Archetypes.defineTraitArchetype('skill-proficiency', { name: 'Skill Proficiency' })

export const Acrobatics = Traits.defineTrait('skill-proficiency/acrobatics', {
  name: 'Acrobatics',
  description:
    '**Ability:** Dexterity\n\nKeep your footing in tricky situations, such as on ice or a tightrope, or pull off acrobatic stunts like dives, rolls, and flips.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Acrobatics, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const AnimalHandling = Traits.defineTrait('skill-proficiency/animal-handling', {
  name: 'Animal Handling',
  description: "**Ability:** Wisdom\n\nCalm a frightened animal, keep a mount under control, or read an animal's intentions.",
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.AnimalHandling,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Arcana = Traits.defineTrait('skill-proficiency/arcana', {
  name: 'Arcana',
  description:
    '**Ability:** Intelligence\n\nRecall lore about spells, magic items, eldritch symbols, magical traditions, and the planes of existence.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Arcana, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Athletics = Traits.defineTrait('skill-proficiency/athletics', {
  name: 'Athletics',
  description: '**Ability:** Strength\n\nClimb, jump, and swim in difficult conditions, or apply raw strength to break, lift, or hold something.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Athletics, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Deception = Traits.defineTrait('skill-proficiency/deception', {
  name: 'Deception',
  description: '**Ability:** Charisma\n\nTell a convincing lie, mislead someone with ambiguity, or keep up a disguise.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Deception, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const History = Traits.defineTrait('skill-proficiency/history', {
  name: 'History',
  description:
    '**Ability:** Intelligence\n\nRecall lore about historical events, notable people, ancient kingdoms, lost civilizations, and past conflicts.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.History, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Insight = Traits.defineTrait('skill-proficiency/insight', {
  name: 'Insight',
  description: "**Ability:** Wisdom\n\nRead body language and speech to discern someone's true mood and intentions, or tell when they're lying.",
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Insight, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Intimidation = Traits.defineTrait('skill-proficiency/intimidation', {
  name: 'Intimidation',
  description: '**Ability:** Charisma\n\nInfluence someone through threats, hostile actions, or a menacing presence.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.Intimidation,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Investigation = Traits.defineTrait('skill-proficiency/investigation', {
  name: 'Investigation',
  description:
    '**Ability:** Intelligence\n\nLook for clues and make deductions: find hidden details, work out how something functions, or dig information out of books.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.Investigation,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Medicine = Traits.defineTrait('skill-proficiency/medicine', {
  name: 'Medicine',
  description: '**Ability:** Wisdom\n\nStabilize a dying companion, diagnose an illness, or determine what caused a death.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Medicine, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Nature = Traits.defineTrait('skill-proficiency/nature', {
  name: 'Nature',
  description: '**Ability:** Intelligence\n\nRecall lore about terrain, plants, animals, weather, and natural cycles.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Nature, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Perception = Traits.defineTrait('skill-proficiency/perception', {
  name: 'Perception',
  description:
    '**Ability:** Wisdom\n\nUse your senses to notice things around you, like an overheard conversation, a hidden foe, or something out of place.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Perception, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Performance = Traits.defineTrait('skill-proficiency/performance', {
  name: 'Performance',
  description: '**Ability:** Charisma\n\nEntertain an audience through music, dance, acting, storytelling, or some other performance.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.Performance,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Persuasion = Traits.defineTrait('skill-proficiency/persuasion', {
  name: 'Persuasion',
  description: '**Ability:** Charisma\n\nInfluence someone with tact, good faith, or reasoned argument.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Persuasion, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Religion = Traits.defineTrait('skill-proficiency/religion', {
  name: 'Religion',
  description: '**Ability:** Intelligence\n\nRecall lore about deities, rites, prayers, religious hierarchies, holy symbols, and cults.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Religion, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const SleightOfHand = Traits.defineTrait('skill-proficiency/sleight-of-hand', {
  name: 'Sleight of Hand',
  description:
    '**Ability:** Dexterity\n\nPick a pocket, plant something on someone, conceal an object on your person, or perform other feats of manual trickery.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.SleightOfHand,
      Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))
    ),
  ],
})

export const Stealth = Traits.defineTrait('skill-proficiency/stealth', {
  name: 'Stealth',
  description: '**Ability:** Dexterity\n\nMove quietly and stay out of sight to slip past foes or sneak up on them.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Stealth, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Survival = Traits.defineTrait('skill-proficiency/survival', {
  name: 'Survival',
  description:
    '**Ability:** Wisdom\n\nFollow tracks, hunt wild game, find your way through the wilderness, predict the weather, and avoid natural hazards.',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Survival, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})
