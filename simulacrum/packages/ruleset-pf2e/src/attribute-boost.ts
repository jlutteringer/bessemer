import { Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { AncestryBoost, BackgroundBoost, KeyAttribute, Level1Boost, Level5Boost } from '@simulacrum/ruleset-pf2e/archetype'
import { ClassDC, Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma } from '@simulacrum/ruleset-pf2e/characteristic'

// Each source of boosts has its own traits, so the boosts from one source always go to different attributes

export const StrengthAncestryBoost = Traits.defineTrait('ancestry-boost/strength', {
  name: 'Strength (Ancestry Boost)',
  description: 'Your ancestry increases your Strength modifier by 1.',
  archetypes: [AncestryBoost],
  effects: [Effects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1)))],
})

export const DexterityAncestryBoost = Traits.defineTrait('ancestry-boost/dexterity', {
  name: 'Dexterity (Ancestry Boost)',
  description: 'Your ancestry increases your Dexterity modifier by 1.',
  archetypes: [AncestryBoost],
  effects: [Effects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const ConstitutionAncestryBoost = Traits.defineTrait('ancestry-boost/constitution', {
  name: 'Constitution (Ancestry Boost)',
  description: 'Your ancestry increases your Constitution modifier by 1.',
  archetypes: [AncestryBoost],
  effects: [Effects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const IntelligenceAncestryBoost = Traits.defineTrait('ancestry-boost/intelligence', {
  name: 'Intelligence (Ancestry Boost)',
  description: 'Your ancestry increases your Intelligence modifier by 1.',
  archetypes: [AncestryBoost],
  effects: [Effects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const WisdomAncestryBoost = Traits.defineTrait('ancestry-boost/wisdom', {
  name: 'Wisdom (Ancestry Boost)',
  description: 'Your ancestry increases your Wisdom modifier by 1.',
  archetypes: [AncestryBoost],
  effects: [Effects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const CharismaAncestryBoost = Traits.defineTrait('ancestry-boost/charisma', {
  name: 'Charisma (Ancestry Boost)',
  description: 'Your ancestry increases your Charisma modifier by 1.',
  archetypes: [AncestryBoost],
  effects: [Effects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const StrengthBackgroundBoost = Traits.defineTrait('background-boost/strength', {
  name: 'Strength (Background Boost)',
  description: 'Your background increases your Strength modifier by 1.',
  archetypes: [BackgroundBoost],
  effects: [Effects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1)))],
})

export const DexterityBackgroundBoost = Traits.defineTrait('background-boost/dexterity', {
  name: 'Dexterity (Background Boost)',
  description: 'Your background increases your Dexterity modifier by 1.',
  archetypes: [BackgroundBoost],
  effects: [Effects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const ConstitutionBackgroundBoost = Traits.defineTrait('background-boost/constitution', {
  name: 'Constitution (Background Boost)',
  description: 'Your background increases your Constitution modifier by 1.',
  archetypes: [BackgroundBoost],
  effects: [Effects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const IntelligenceBackgroundBoost = Traits.defineTrait('background-boost/intelligence', {
  name: 'Intelligence (Background Boost)',
  description: 'Your background increases your Intelligence modifier by 1.',
  archetypes: [BackgroundBoost],
  effects: [Effects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const WisdomBackgroundBoost = Traits.defineTrait('background-boost/wisdom', {
  name: 'Wisdom (Background Boost)',
  description: 'Your background increases your Wisdom modifier by 1.',
  archetypes: [BackgroundBoost],
  effects: [Effects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const CharismaBackgroundBoost = Traits.defineTrait('background-boost/charisma', {
  name: 'Charisma (Background Boost)',
  description: 'Your background increases your Charisma modifier by 1.',
  archetypes: [BackgroundBoost],
  effects: [Effects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const StrengthLevel1Boost = Traits.defineTrait('level-1-boost/strength', {
  name: 'Strength (Level 1 Boost)',
  description: 'Increase your Strength modifier by 1.',
  archetypes: [Level1Boost],
  effects: [Effects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1)))],
})

export const DexterityLevel1Boost = Traits.defineTrait('level-1-boost/dexterity', {
  name: 'Dexterity (Level 1 Boost)',
  description: 'Increase your Dexterity modifier by 1.',
  archetypes: [Level1Boost],
  effects: [Effects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const ConstitutionLevel1Boost = Traits.defineTrait('level-1-boost/constitution', {
  name: 'Constitution (Level 1 Boost)',
  description: 'Increase your Constitution modifier by 1.',
  archetypes: [Level1Boost],
  effects: [Effects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const IntelligenceLevel1Boost = Traits.defineTrait('level-1-boost/intelligence', {
  name: 'Intelligence (Level 1 Boost)',
  description: 'Increase your Intelligence modifier by 1.',
  archetypes: [Level1Boost],
  effects: [Effects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const WisdomLevel1Boost = Traits.defineTrait('level-1-boost/wisdom', {
  name: 'Wisdom (Level 1 Boost)',
  description: 'Increase your Wisdom modifier by 1.',
  archetypes: [Level1Boost],
  effects: [Effects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const CharismaLevel1Boost = Traits.defineTrait('level-1-boost/charisma', {
  name: 'Charisma (Level 1 Boost)',
  description: 'Increase your Charisma modifier by 1.',
  archetypes: [Level1Boost],
  effects: [Effects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const StrengthLevel5Boost = Traits.defineTrait('level-5-boost/strength', {
  name: 'Strength (Level 5 Boost)',
  description:
    'Increase your Strength modifier by 1. A boost to an attribute that is already +4 or higher is a partial boost, which only takes effect with a second partial boost at 10th level, so it is not offered here.',
  archetypes: [Level5Boost],
  prerequisites: [Expressions.lessThan(Strength.variable, 4)],
  effects: [Effects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1)))],
})

export const DexterityLevel5Boost = Traits.defineTrait('level-5-boost/dexterity', {
  name: 'Dexterity (Level 5 Boost)',
  description:
    'Increase your Dexterity modifier by 1. A boost to an attribute that is already +4 or higher is a partial boost, which only takes effect with a second partial boost at 10th level, so it is not offered here.',
  archetypes: [Level5Boost],
  prerequisites: [Expressions.lessThan(Dexterity.variable, 4)],
  effects: [Effects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const ConstitutionLevel5Boost = Traits.defineTrait('level-5-boost/constitution', {
  name: 'Constitution (Level 5 Boost)',
  description:
    'Increase your Constitution modifier by 1. A boost to an attribute that is already +4 or higher is a partial boost, which only takes effect with a second partial boost at 10th level, so it is not offered here.',
  archetypes: [Level5Boost],
  prerequisites: [Expressions.lessThan(Constitution.variable, 4)],
  effects: [Effects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const IntelligenceLevel5Boost = Traits.defineTrait('level-5-boost/intelligence', {
  name: 'Intelligence (Level 5 Boost)',
  description:
    'Increase your Intelligence modifier by 1. A boost to an attribute that is already +4 or higher is a partial boost, which only takes effect with a second partial boost at 10th level, so it is not offered here.',
  archetypes: [Level5Boost],
  prerequisites: [Expressions.lessThan(Intelligence.variable, 4)],
  effects: [Effects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const WisdomLevel5Boost = Traits.defineTrait('level-5-boost/wisdom', {
  name: 'Wisdom (Level 5 Boost)',
  description:
    'Increase your Wisdom modifier by 1. A boost to an attribute that is already +4 or higher is a partial boost, which only takes effect with a second partial boost at 10th level, so it is not offered here.',
  archetypes: [Level5Boost],
  prerequisites: [Expressions.lessThan(Wisdom.variable, 4)],
  effects: [Effects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const CharismaLevel5Boost = Traits.defineTrait('level-5-boost/charisma', {
  name: 'Charisma (Level 5 Boost)',
  description:
    'Increase your Charisma modifier by 1. A boost to an attribute that is already +4 or higher is a partial boost, which only takes effect with a second partial boost at 10th level, so it is not offered here.',
  archetypes: [Level5Boost],
  prerequisites: [Expressions.lessThan(Charisma.variable, 4)],
  effects: [Effects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const StrengthKeyAttribute = Traits.defineTrait('key-attribute/strength', {
  name: 'Strength (Key Attribute)',
  description:
    'Strength is your key attribute. Your class increases your Strength modifier by 1, and you add your Strength modifier to your class DC.',
  archetypes: [KeyAttribute],
  effects: [
    Effects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Strength.variable))),
  ],
})

export const DexterityKeyAttribute = Traits.defineTrait('key-attribute/dexterity', {
  name: 'Dexterity (Key Attribute)',
  description:
    'Dexterity is your key attribute. Your class increases your Dexterity modifier by 1, and you add your Dexterity modifier to your class DC.',
  archetypes: [KeyAttribute],
  effects: [
    Effects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Dexterity.variable))),
  ],
})

export const ConstitutionKeyAttribute = Traits.defineTrait('key-attribute/constitution', {
  name: 'Constitution (Key Attribute)',
  description:
    'Constitution is your key attribute. Your class increases your Constitution modifier by 1, and you add your Constitution modifier to your class DC.',
  archetypes: [KeyAttribute],
  effects: [
    Effects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Constitution.variable))),
  ],
})

export const IntelligenceKeyAttribute = Traits.defineTrait('key-attribute/intelligence', {
  name: 'Intelligence (Key Attribute)',
  description:
    'Intelligence is your key attribute. Your class increases your Intelligence modifier by 1, and you add your Intelligence modifier to your class DC.',
  archetypes: [KeyAttribute],
  effects: [
    Effects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Intelligence.variable))),
  ],
})

export const WisdomKeyAttribute = Traits.defineTrait('key-attribute/wisdom', {
  name: 'Wisdom (Key Attribute)',
  description: 'Wisdom is your key attribute. Your class increases your Wisdom modifier by 1, and you add your Wisdom modifier to your class DC.',
  archetypes: [KeyAttribute],
  effects: [
    Effects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Wisdom.variable))),
  ],
})

export const CharismaKeyAttribute = Traits.defineTrait('key-attribute/charisma', {
  name: 'Charisma (Key Attribute)',
  description:
    'Charisma is your key attribute. Your class increases your Charisma modifier by 1, and you add your Charisma modifier to your class DC.',
  archetypes: [KeyAttribute],
  effects: [
    Effects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Charisma.variable))),
  ],
})

export const SelectAncestryBoost = CharacterOptions.selectTraitOption('attribute/select-ancestry-boost', {
  name: 'Ancestry Boost',
  filter: { archetypes: [AncestryBoost] },
})

export const SelectBackgroundBoost = CharacterOptions.selectTraitOption('attribute/select-background-boost', {
  name: 'Background Boost',
  filter: { archetypes: [BackgroundBoost] },
})

export const SelectLevel1Boost = CharacterOptions.selectTraitOption('attribute/select-level-1-boost', {
  name: 'Level 1 Boost',
  filter: { archetypes: [Level1Boost] },
})

export const SelectLevel5Boost = CharacterOptions.selectTraitOption('attribute/select-level-5-boost', {
  name: 'Level 5 Boost',
  filter: { archetypes: [Level5Boost] },
})

export const AllAttributeBoosts = [
  StrengthAncestryBoost,
  DexterityAncestryBoost,
  ConstitutionAncestryBoost,
  IntelligenceAncestryBoost,
  WisdomAncestryBoost,
  CharismaAncestryBoost,
  StrengthBackgroundBoost,
  DexterityBackgroundBoost,
  ConstitutionBackgroundBoost,
  IntelligenceBackgroundBoost,
  WisdomBackgroundBoost,
  CharismaBackgroundBoost,
  StrengthLevel1Boost,
  DexterityLevel1Boost,
  ConstitutionLevel1Boost,
  IntelligenceLevel1Boost,
  WisdomLevel1Boost,
  CharismaLevel1Boost,
  StrengthLevel5Boost,
  DexterityLevel5Boost,
  ConstitutionLevel5Boost,
  IntelligenceLevel5Boost,
  WisdomLevel5Boost,
  CharismaLevel5Boost,
  StrengthKeyAttribute,
  DexterityKeyAttribute,
  ConstitutionKeyAttribute,
  IntelligenceKeyAttribute,
  WisdomKeyAttribute,
  CharismaKeyAttribute,
]
