import { Archetypes, Traits } from '@simulacrum/common'

export const SkillProficiency = Archetypes.defineArchetype('2c410013-899d-418f-8b63-b90406662cbe', { name: 'Skill Proficiency' })

export const Acrobatics = Traits.defineTrait('5f263da9-1c65-4adb-af4f-57e2250ee43a', {
  name: 'Acrobatics',
  description:
    '<p><strong>Ability:</strong> Dexterity</p><p>Keep your footing in tricky situations, such as on ice or a tightrope, or pull off acrobatic stunts like dives, rolls, and flips.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const AnimalHandling = Traits.defineTrait('05682a61-72a0-4951-8d03-d9806ba99ae7', {
  name: 'Animal Handling',
  description: "<p><strong>Ability:</strong> Wisdom</p><p>Calm a frightened animal, keep a mount under control, or read an animal's intentions.</p>",
  archetypes: [SkillProficiency],
  effects: [],
})

export const Arcana = Traits.defineTrait('818ed992-0a25-4fee-a0d0-931a30469869', {
  name: 'Arcana',
  description:
    '<p><strong>Ability:</strong> Intelligence</p><p>Recall lore about spells, magic items, eldritch symbols, magical traditions, and the planes of existence.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Athletics = Traits.defineTrait('423d08ea-c131-417d-9c85-db106ebd6df3', {
  name: 'Athletics',
  description:
    '<p><strong>Ability:</strong> Strength</p><p>Climb, jump, and swim in difficult conditions, or apply raw strength to break, lift, or hold something.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Deception = Traits.defineTrait('e1b3e317-0fa9-415a-a43c-04ec199144b5', {
  name: 'Deception',
  description: '<p><strong>Ability:</strong> Charisma</p><p>Tell a convincing lie, mislead someone with ambiguity, or keep up a disguise.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const History = Traits.defineTrait('1da258e3-a2e5-479c-b553-b3e594ace3fd', {
  name: 'History',
  description:
    '<p><strong>Ability:</strong> Intelligence</p><p>Recall lore about historical events, notable people, ancient kingdoms, lost civilizations, and past conflicts.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Insight = Traits.defineTrait('2637ee7b-c926-4dbb-8cdb-f8306e1d3f3b', {
  name: 'Insight',
  description:
    "<p><strong>Ability:</strong> Wisdom</p><p>Read body language and speech to discern someone's true mood and intentions, or tell when they're lying.</p>",
  archetypes: [SkillProficiency],
  effects: [],
})

export const Intimidation = Traits.defineTrait('0f2ba082-24f3-4aa5-9681-08da6fdff21b', {
  name: 'Intimidation',
  description: '<p><strong>Ability:</strong> Charisma</p><p>Influence someone through threats, hostile actions, or a menacing presence.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Investigation = Traits.defineTrait('dc540743-7b8b-44a3-9155-167317b10939', {
  name: 'Investigation',
  description:
    '<p><strong>Ability:</strong> Intelligence</p><p>Look for clues and make deductions: find hidden details, work out how something functions, or dig information out of books.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Medicine = Traits.defineTrait('a3d6298b-32ce-4f8d-bb6e-eb5b8d267af8', {
  name: 'Medicine',
  description: '<p><strong>Ability:</strong> Wisdom</p><p>Stabilize a dying companion, diagnose an illness, or determine what caused a death.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Nature = Traits.defineTrait('06559804-8373-49f7-b252-002e76d38733', {
  name: 'Nature',
  description: '<p><strong>Ability:</strong> Intelligence</p><p>Recall lore about terrain, plants, animals, weather, and natural cycles.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Perception = Traits.defineTrait('e3d31ae3-7209-4778-9dd3-92bbc567284f', {
  name: 'Perception',
  description:
    '<p><strong>Ability:</strong> Wisdom</p><p>Use your senses to notice things around you, like an overheard conversation, a hidden foe, or something out of place.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Performance = Traits.defineTrait('02da6d71-d13d-4196-a711-7e5a26a3db45', {
  name: 'Performance',
  description:
    '<p><strong>Ability:</strong> Charisma</p><p>Entertain an audience through music, dance, acting, storytelling, or some other performance.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Persuasion = Traits.defineTrait('5f4d27e2-59d2-4088-919d-7f0ff07d1f48', {
  name: 'Persuasion',
  description: '<p><strong>Ability:</strong> Charisma</p><p>Influence someone with tact, good faith, or reasoned argument.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Religion = Traits.defineTrait('164c617b-9b5c-4f45-a3cb-489713b365f4', {
  name: 'Religion',
  description:
    '<p><strong>Ability:</strong> Intelligence</p><p>Recall lore about deities, rites, prayers, religious hierarchies, holy symbols, and cults.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const SleightofHand = Traits.defineTrait('fc4d1732-a23b-4fdb-b223-c4e9e32b586c', {
  name: 'Sleight of Hand',
  description:
    '<p><strong>Ability:</strong> Dexterity</p><p>Pick a pocket, plant something on someone, conceal an object on your person, or perform other feats of manual trickery.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Stealth = Traits.defineTrait('8e7b7932-58e6-47da-a1f9-0f4a8aa2c41a', {
  name: 'Stealth',
  description: '<p><strong>Ability:</strong> Dexterity</p><p>Move quietly and stay out of sight to slip past foes or sneak up on them.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})

export const Survival = Traits.defineTrait('a116831e-07de-4325-a17b-0e1edcf75853', {
  name: 'Survival',
  description:
    '<p><strong>Ability:</strong> Wisdom</p><p>Follow tracks, hunt wild game, find your way through the wilderness, predict the weather, and avoid natural hazards.</p>',
  archetypes: [SkillProficiency],
  effects: [],
})
