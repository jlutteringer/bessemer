import { Archetypes, Attributes, Effects, Traits } from '@simulacrum/common'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { Patches } from '@bessemer/cornerstone'

export const SkillProficiency = Archetypes.defineArchetype('skill-proficiency', { name: 'Skill Proficiency' })

export const Acrobatics = Traits.defineTrait('skill-proficiency/acrobatics', {
  name: 'Acrobatics',
  description:
    '<p><strong>Ability:</strong> Dexterity</p><p>Keep your footing in tricky situations, such as on ice or a tightrope, or pull off acrobatic stunts like dives, rolls, and flips.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Acrobatics, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const AnimalHandling = Traits.defineTrait('skill-proficiency/animal-handling', {
  name: 'Animal Handling',
  description: "<p><strong>Ability:</strong> Wisdom</p><p>Calm a frightened animal, keep a mount under control, or read an animal's intentions.</p>",
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
    '<p><strong>Ability:</strong> Intelligence</p><p>Recall lore about spells, magic items, eldritch symbols, magical traditions, and the planes of existence.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Arcana, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Athletics = Traits.defineTrait('skill-proficiency/athletics', {
  name: 'Athletics',
  description:
    '<p><strong>Ability:</strong> Strength</p><p>Climb, jump, and swim in difficult conditions, or apply raw strength to break, lift, or hold something.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Athletics, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Deception = Traits.defineTrait('skill-proficiency/deception', {
  name: 'Deception',
  description: '<p><strong>Ability:</strong> Charisma</p><p>Tell a convincing lie, mislead someone with ambiguity, or keep up a disguise.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Deception, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const History = Traits.defineTrait('skill-proficiency/history', {
  name: 'History',
  description:
    '<p><strong>Ability:</strong> Intelligence</p><p>Recall lore about historical events, notable people, ancient kingdoms, lost civilizations, and past conflicts.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.History, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Insight = Traits.defineTrait('skill-proficiency/insight', {
  name: 'Insight',
  description:
    "<p><strong>Ability:</strong> Wisdom</p><p>Read body language and speech to discern someone's true mood and intentions, or tell when they're lying.</p>",
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Insight, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Intimidation = Traits.defineTrait('skill-proficiency/intimidation', {
  name: 'Intimidation',
  description: '<p><strong>Ability:</strong> Charisma</p><p>Influence someone through threats, hostile actions, or a menacing presence.</p>',
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
    '<p><strong>Ability:</strong> Intelligence</p><p>Look for clues and make deductions: find hidden details, work out how something functions, or dig information out of books.</p>',
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
  description: '<p><strong>Ability:</strong> Wisdom</p><p>Stabilize a dying companion, diagnose an illness, or determine what caused a death.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Medicine, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Nature = Traits.defineTrait('skill-proficiency/nature', {
  name: 'Nature',
  description: '<p><strong>Ability:</strong> Intelligence</p><p>Recall lore about terrain, plants, animals, weather, and natural cycles.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Nature, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Perception = Traits.defineTrait('skill-proficiency/perception', {
  name: 'Perception',
  description:
    '<p><strong>Ability:</strong> Wisdom</p><p>Use your senses to notice things around you, like an overheard conversation, a hidden foe, or something out of place.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Perception, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Performance = Traits.defineTrait('skill-proficiency/performance', {
  name: 'Performance',
  description:
    '<p><strong>Ability:</strong> Charisma</p><p>Entertain an audience through music, dance, acting, storytelling, or some other performance.</p>',
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
  description: '<p><strong>Ability:</strong> Charisma</p><p>Influence someone with tact, good faith, or reasoned argument.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Persuasion, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Religion = Traits.defineTrait('skill-proficiency/religion', {
  name: 'Religion',
  description:
    '<p><strong>Ability:</strong> Intelligence</p><p>Recall lore about deities, rites, prayers, religious hierarchies, holy symbols, and cults.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Religion, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const SleightOfHand = Traits.defineTrait('skill-proficiency/sleight-of-hand', {
  name: 'Sleight of Hand',
  description:
    '<p><strong>Ability:</strong> Dexterity</p><p>Pick a pocket, plant something on someone, conceal an object on your person, or perform other feats of manual trickery.</p>',
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
  description: '<p><strong>Ability:</strong> Dexterity</p><p>Move quietly and stay out of sight to slip past foes or sneak up on them.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Stealth, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})

export const Survival = Traits.defineTrait('skill-proficiency/survival', {
  name: 'Survival',
  description:
    '<p><strong>Ability:</strong> Wisdom</p><p>Follow tracks, hunt wild game, find your way through the wilderness, predict the weather, and avoid natural hazards.</p>',
  archetypes: [SkillProficiency],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.Survival, Attributes.modifier(Patches.sum(PlayerCharacteristics.ProficiencyBonus.variable))),
  ],
})
