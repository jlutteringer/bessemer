import { Tags, Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import * as Characteristics from '@simulacrum/ruleset-dnd4e/characteristic'

export const RacialAbilityBonus = Tags.defineTraitTag('ability-score/racial', { name: 'Racial Ability Bonus' })
export const AbilityIncrease = Tags.defineTraitTag('ability-score/increase', { name: 'Ability Increase' })

// A human's +2 to one ability score of its choice

export const HumanStrength = Traits.defineTrait('ability-score/human/strength', {
  name: 'Strength +2',
  description: 'Increase your Strength score by 2.',
  tags: [RacialAbilityBonus],
  effects: [Effects.modifyCharacteristic(Characteristics.Strength, Attributes.modifier(Patches.sum(2)))],
})

export const HumanConstitution = Traits.defineTrait('ability-score/human/constitution', {
  name: 'Constitution +2',
  description: 'Increase your Constitution score by 2.',
  tags: [RacialAbilityBonus],
  effects: [Effects.modifyCharacteristic(Characteristics.Constitution, Attributes.modifier(Patches.sum(2)))],
})

export const HumanDexterity = Traits.defineTrait('ability-score/human/dexterity', {
  name: 'Dexterity +2',
  description: 'Increase your Dexterity score by 2.',
  tags: [RacialAbilityBonus],
  effects: [Effects.modifyCharacteristic(Characteristics.Dexterity, Attributes.modifier(Patches.sum(2)))],
})

export const HumanIntelligence = Traits.defineTrait('ability-score/human/intelligence', {
  name: 'Intelligence +2',
  description: 'Increase your Intelligence score by 2.',
  tags: [RacialAbilityBonus],
  effects: [Effects.modifyCharacteristic(Characteristics.Intelligence, Attributes.modifier(Patches.sum(2)))],
})

export const HumanWisdom = Traits.defineTrait('ability-score/human/wisdom', {
  name: 'Wisdom +2',
  description: 'Increase your Wisdom score by 2.',
  tags: [RacialAbilityBonus],
  effects: [Effects.modifyCharacteristic(Characteristics.Wisdom, Attributes.modifier(Patches.sum(2)))],
})

export const HumanCharisma = Traits.defineTrait('ability-score/human/charisma', {
  name: 'Charisma +2',
  description: 'Increase your Charisma score by 2.',
  tags: [RacialAbilityBonus],
  effects: [Effects.modifyCharacteristic(Characteristics.Charisma, Attributes.modifier(Patches.sum(2)))],
})

// The two +1s at 4th and 8th level each go to different ability scores, so the second can't repeat the first

export const FirstStrengthIncrease = Traits.defineTrait('ability-score/increase/strength-first', {
  name: 'Strength +1',
  description: 'Increase your Strength score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Strength, Attributes.modifier(Patches.sum(1)))],
})

export const SecondStrengthIncrease = Traits.defineTrait('ability-score/increase/strength-second', {
  name: 'Strength +1',
  description: 'Increase your Strength score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(FirstStrengthIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Strength, Attributes.modifier(Patches.sum(1)))],
})

export const FirstConstitutionIncrease = Traits.defineTrait('ability-score/increase/constitution-first', {
  name: 'Constitution +1',
  description: 'Increase your Constitution score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const SecondConstitutionIncrease = Traits.defineTrait('ability-score/increase/constitution-second', {
  name: 'Constitution +1',
  description: 'Increase your Constitution score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(FirstConstitutionIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const FirstDexterityIncrease = Traits.defineTrait('ability-score/increase/dexterity-first', {
  name: 'Dexterity +1',
  description: 'Increase your Dexterity score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const SecondDexterityIncrease = Traits.defineTrait('ability-score/increase/dexterity-second', {
  name: 'Dexterity +1',
  description: 'Increase your Dexterity score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(FirstDexterityIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const FirstIntelligenceIncrease = Traits.defineTrait('ability-score/increase/intelligence-first', {
  name: 'Intelligence +1',
  description: 'Increase your Intelligence score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const SecondIntelligenceIncrease = Traits.defineTrait('ability-score/increase/intelligence-second', {
  name: 'Intelligence +1',
  description: 'Increase your Intelligence score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(FirstIntelligenceIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const FirstWisdomIncrease = Traits.defineTrait('ability-score/increase/wisdom-first', {
  name: 'Wisdom +1',
  description: 'Increase your Wisdom score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const SecondWisdomIncrease = Traits.defineTrait('ability-score/increase/wisdom-second', {
  name: 'Wisdom +1',
  description: 'Increase your Wisdom score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(FirstWisdomIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const FirstCharismaIncrease = Traits.defineTrait('ability-score/increase/charisma-first', {
  name: 'Charisma +1',
  description: 'Increase your Charisma score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const SecondCharismaIncrease = Traits.defineTrait('ability-score/increase/charisma-second', {
  name: 'Charisma +1',
  description: 'Increase your Charisma score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(FirstCharismaIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const ThirdStrengthIncrease = Traits.defineTrait('ability-score/increase/strength-third', {
  name: 'Strength +1',
  description: 'Increase your Strength score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Strength, Attributes.modifier(Patches.sum(1)))],
})

export const FourthStrengthIncrease = Traits.defineTrait('ability-score/increase/strength-fourth', {
  name: 'Strength +1',
  description: 'Increase your Strength score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(ThirdStrengthIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Strength, Attributes.modifier(Patches.sum(1)))],
})

export const ThirdConstitutionIncrease = Traits.defineTrait('ability-score/increase/constitution-third', {
  name: 'Constitution +1',
  description: 'Increase your Constitution score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const FourthConstitutionIncrease = Traits.defineTrait('ability-score/increase/constitution-fourth', {
  name: 'Constitution +1',
  description: 'Increase your Constitution score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(ThirdConstitutionIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const ThirdDexterityIncrease = Traits.defineTrait('ability-score/increase/dexterity-third', {
  name: 'Dexterity +1',
  description: 'Increase your Dexterity score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const FourthDexterityIncrease = Traits.defineTrait('ability-score/increase/dexterity-fourth', {
  name: 'Dexterity +1',
  description: 'Increase your Dexterity score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(ThirdDexterityIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const ThirdIntelligenceIncrease = Traits.defineTrait('ability-score/increase/intelligence-third', {
  name: 'Intelligence +1',
  description: 'Increase your Intelligence score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const FourthIntelligenceIncrease = Traits.defineTrait('ability-score/increase/intelligence-fourth', {
  name: 'Intelligence +1',
  description: 'Increase your Intelligence score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(ThirdIntelligenceIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const ThirdWisdomIncrease = Traits.defineTrait('ability-score/increase/wisdom-third', {
  name: 'Wisdom +1',
  description: 'Increase your Wisdom score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const FourthWisdomIncrease = Traits.defineTrait('ability-score/increase/wisdom-fourth', {
  name: 'Wisdom +1',
  description: 'Increase your Wisdom score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(ThirdWisdomIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const ThirdCharismaIncrease = Traits.defineTrait('ability-score/increase/charisma-third', {
  name: 'Charisma +1',
  description: 'Increase your Charisma score by 1.',
  tags: [AbilityIncrease],
  effects: [Effects.modifyCharacteristic(Characteristics.Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const FourthCharismaIncrease = Traits.defineTrait('ability-score/increase/charisma-fourth', {
  name: 'Charisma +1',
  description: 'Increase your Charisma score by 1.',
  tags: [AbilityIncrease],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(ThirdCharismaIncrease))],
  effects: [Effects.modifyCharacteristic(Characteristics.Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const SelectHumanAbilityBonus = CharacterOptions.selectTraitOption('ability-score/select-human', {
  name: 'Ability Score +2',
  filter: { specificOptions: [HumanStrength, HumanConstitution, HumanDexterity, HumanIntelligence, HumanWisdom, HumanCharisma] },
})

export const SelectFirstAbilityIncrease = CharacterOptions.selectTraitOption('ability-score/select-first-increase', {
  name: 'Ability Score +1',
  filter: {
    specificOptions: [
      FirstStrengthIncrease,
      FirstConstitutionIncrease,
      FirstDexterityIncrease,
      FirstIntelligenceIncrease,
      FirstWisdomIncrease,
      FirstCharismaIncrease,
    ],
  },
})

export const SelectSecondAbilityIncrease = CharacterOptions.selectTraitOption('ability-score/select-second-increase', {
  name: 'Ability Score +1',
  filter: {
    specificOptions: [
      SecondStrengthIncrease,
      SecondConstitutionIncrease,
      SecondDexterityIncrease,
      SecondIntelligenceIncrease,
      SecondWisdomIncrease,
      SecondCharismaIncrease,
    ],
  },
})

export const SelectThirdAbilityIncrease = CharacterOptions.selectTraitOption('ability-score/select-third-increase', {
  name: 'Ability Score +1',
  filter: {
    specificOptions: [
      ThirdStrengthIncrease,
      ThirdConstitutionIncrease,
      ThirdDexterityIncrease,
      ThirdIntelligenceIncrease,
      ThirdWisdomIncrease,
      ThirdCharismaIncrease,
    ],
  },
})

export const SelectFourthAbilityIncrease = CharacterOptions.selectTraitOption('ability-score/select-fourth-increase', {
  name: 'Ability Score +1',
  filter: {
    specificOptions: [
      FourthStrengthIncrease,
      FourthConstitutionIncrease,
      FourthDexterityIncrease,
      FourthIntelligenceIncrease,
      FourthWisdomIncrease,
      FourthCharismaIncrease,
    ],
  },
})

export const AllAbilityScoreTraits = [
  HumanStrength,
  HumanConstitution,
  HumanDexterity,
  HumanIntelligence,
  HumanWisdom,
  HumanCharisma,
  FirstStrengthIncrease,
  SecondStrengthIncrease,
  FirstConstitutionIncrease,
  SecondConstitutionIncrease,
  FirstDexterityIncrease,
  SecondDexterityIncrease,
  FirstIntelligenceIncrease,
  SecondIntelligenceIncrease,
  FirstWisdomIncrease,
  SecondWisdomIncrease,
  FirstCharismaIncrease,
  SecondCharismaIncrease,
  ThirdStrengthIncrease,
  FourthStrengthIncrease,
  ThirdConstitutionIncrease,
  FourthConstitutionIncrease,
  ThirdDexterityIncrease,
  FourthDexterityIncrease,
  ThirdIntelligenceIncrease,
  FourthIntelligenceIncrease,
  ThirdWisdomIncrease,
  FourthWisdomIncrease,
  ThirdCharismaIncrease,
  FourthCharismaIncrease,
]
