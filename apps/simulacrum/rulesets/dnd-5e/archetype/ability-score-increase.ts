import { Archetypes, Attributes, Effects, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'
import { CharacterOption } from '@simulacrum/common/character/character-option'
import { Characteristic } from '@simulacrum/common/characteristic'
import { Trait } from '@simulacrum/common/trait'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { Expressions } from '@bessemer/cornerstone/expression'
import { Patches } from '@bessemer/cornerstone'

export const AbilityScoreIncrease = Archetypes.defineArchetype('ability-score-increase', { name: 'Ability Score Increase' })

export type AbilityScore = {
  name: string
  // For Backgrounds, whose +2 and +1 have to go to different ability scores
  plusTwo: Trait
  plusOne: Trait
  // For feats. These stack, so a character can take them any number of times.
  featPlusOne: Trait
}

const defineAbilityScore = (key: string, name: string, characteristic: Characteristic<number>): AbilityScore => {
  const plusTwo = Traits.defineTrait(`ability-score-increase/${key}-plus-two`, {
    name: `${name} +2`,
    description: `<p>Increase your ${name} score by 2.</p>`,
    archetypes: [AbilityScoreIncrease],
    effects: [Effects.modifyCharacteristic(characteristic, Attributes.modifier(Patches.sum(2)))],
  })

  // The +2 is chosen before the +1, so this keeps both from going to the same ability score
  const plusOne = Traits.defineTrait(`ability-score-increase/${key}-plus-one`, {
    name: `${name} +1`,
    description: `<p>Increase your ${name} score by 1.</p>`,
    archetypes: [AbilityScoreIncrease],
    prerequisites: [Expressions.not(Traits.traitPrerequisite(plusTwo))],
    effects: [Effects.modifyCharacteristic(characteristic, Attributes.modifier(Patches.sum(1)))],
  })

  const featPlusOne = Traits.defineTrait(`ability-score-increase/feat/${key}-plus-one`, {
    name: `${name} +1`,
    description: `<p>Increase your ${name} score by 1.</p>`,
    archetypes: [AbilityScoreIncrease],
    repeatable: true,
    effects: [Effects.modifyCharacteristic(characteristic, Attributes.modifier(Patches.sum(1)))],
  })

  return { name, plusTwo, plusOne, featPlusOne }
}

export const Strength = defineAbilityScore('strength', 'Strength', PlayerCharacteristics.Strength)
export const Dexterity = defineAbilityScore('dexterity', 'Dexterity', PlayerCharacteristics.Dexterity)
export const Constitution = defineAbilityScore('constitution', 'Constitution', PlayerCharacteristics.Constitution)
export const Intelligence = defineAbilityScore('intelligence', 'Intelligence', PlayerCharacteristics.Intelligence)
export const Wisdom = defineAbilityScore('wisdom', 'Wisdom', PlayerCharacteristics.Wisdom)
export const Charisma = defineAbilityScore('charisma', 'Charisma', PlayerCharacteristics.Charisma)

export const AllAbilityScores = [Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma]

export const AbilityScoreTraits = AllAbilityScores.flatMap((it) => [it.plusTwo, it.plusOne, it.featPlusOne])

export type BackgroundAbilityScores = {
  // Granted by the Background; chooses between +2/+1 and +1 to all three
  option: CharacterOption
  // The traits for that choice, which the ruleset has to register
  traits: Array<Trait>
}

/**
 * A Background's ability score increase: either +2 to one of its three ability scores and +1 to another, or +1 to all three.
 */
export const forBackground = (reference: string, abilityScores: [AbilityScore, AbilityScore, AbilityScore]): BackgroundAbilityScores => {
  const prefix = `${reference}/ability-scores`

  const selectPlusTwo = CharacterOptions.selectTraitOption(
    `${prefix}/select-plus-two`,
    { specificOptions: abilityScores.map((it) => it.plusTwo) },
    'Ability Score +2'
  )

  const selectPlusOne = CharacterOptions.selectTraitOption(
    `${prefix}/select-plus-one`,
    { specificOptions: abilityScores.map((it) => it.plusOne) },
    'Ability Score +1'
  )

  const [first, second, third] = abilityScores.map((it) => it.name)
  const plusTwoPlusOne = Traits.defineTrait(`${prefix}/plus-two-plus-one`, {
    name: '+2 and +1',
    description: `<p>Increase one of ${first}, ${second}, or ${third} by 2 and another by 1.</p>`,
    archetypes: [AbilityScoreIncrease],
    effects: [Effects.gainCharacterOption(selectPlusTwo), Effects.gainCharacterOption(selectPlusOne)],
  })

  const plusOneToAll = Traits.defineTrait(`${prefix}/plus-one-to-all`, {
    name: '+1 to All Three',
    description: `<p>Increase ${first}, ${second}, and ${third} by 1 each.</p>`,
    archetypes: [AbilityScoreIncrease],
    effects: abilityScores.flatMap((it) => it.plusOne.effects),
  })

  const option = CharacterOptions.selectTraitOption(`${prefix}/select`, { specificOptions: [plusTwoPlusOne, plusOneToAll] }, 'Ability Scores')

  return { option, traits: [plusTwoPlusOne, plusOneToAll] }
}
