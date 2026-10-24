import { CharacterOptions } from '@simulacrum/ruleset'
import { Class, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { SkillProficiency } from '@simulacrum/ruleset-khydrian-drift/skill-proficiency'
import { AttributeIncrease } from '@simulacrum/ruleset-khydrian-drift/attribute-increase'

export const SelectClassOption = CharacterOptions.selectTraitOption('select-class-option', {
  name: 'Class',
  description: `Class is the primary definition of what your character can do. It’s more than a profession; it’s your character’s calling. Class shapes the way you think about the world, how you interact with it, and your relationship with other people and powers in the universe.

Your class gives you its own trait tree and abilities, such as a Commando’s mastery of weapons and tactics or a Warblade’s elemental strikes. At low levels, your class grants only a few [traits](content:characters/traits), but as you advance in level, you unlock more of its trait tree and gain access to more powerful abilities.`,
  filter: { tags: [Class] },
})
export const SelectTraitOption = CharacterOptions.selectTraitOption('select-trait-option', {
  name: 'Select Trait',
  filter: { tags: [Primary] },
})
export const SelectSkillProficiency = CharacterOptions.selectTraitOption('select-skill-proficiency', {
  name: 'Skill Proficiency',
  filter: {
    tags: [SkillProficiency],
  },
})

export const SelectAttributeIncrease = CharacterOptions.selectTraitOption('select-attribute-increase', {
  name: 'Attribute +1',
  filter: { tags: [AttributeIncrease] },
})
