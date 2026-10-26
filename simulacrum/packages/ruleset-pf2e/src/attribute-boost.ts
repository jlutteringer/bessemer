import { Attributes, CharacterOptions, CharacterEffects, Tags, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { AncestryBoost, BackgroundBoost, KeyAttribute, Level1Boost, Level5Boost } from '@simulacrum/ruleset-pf2e/tag'
import { ClassDC, Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma } from '@simulacrum/ruleset-pf2e/characteristic'

export const Level10Boost = Tags.defineTraitTag('attribute/level-10-boost', { name: 'Level 10 Boost' })

// Each source of boosts has its own traits, so the boosts from one source always go to different attributes

export const StrengthAncestryBoost = Traits.defineTrait('ancestry-boost/strength', {
  name: 'Strength (Ancestry Boost)',
  description: 'Your ancestry increases your Strength modifier by 1.',
  tags: [AncestryBoost],
  effects: [CharacterEffects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1)))],
})

export const DexterityAncestryBoost = Traits.defineTrait('ancestry-boost/dexterity', {
  name: 'Dexterity (Ancestry Boost)',
  description: 'Your ancestry increases your Dexterity modifier by 1.',
  tags: [AncestryBoost],
  effects: [CharacterEffects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const ConstitutionAncestryBoost = Traits.defineTrait('ancestry-boost/constitution', {
  name: 'Constitution (Ancestry Boost)',
  description: 'Your ancestry increases your Constitution modifier by 1.',
  tags: [AncestryBoost],
  effects: [CharacterEffects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const IntelligenceAncestryBoost = Traits.defineTrait('ancestry-boost/intelligence', {
  name: 'Intelligence (Ancestry Boost)',
  description: 'Your ancestry increases your Intelligence modifier by 1.',
  tags: [AncestryBoost],
  effects: [CharacterEffects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const WisdomAncestryBoost = Traits.defineTrait('ancestry-boost/wisdom', {
  name: 'Wisdom (Ancestry Boost)',
  description: 'Your ancestry increases your Wisdom modifier by 1.',
  tags: [AncestryBoost],
  effects: [CharacterEffects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const CharismaAncestryBoost = Traits.defineTrait('ancestry-boost/charisma', {
  name: 'Charisma (Ancestry Boost)',
  description: 'Your ancestry increases your Charisma modifier by 1.',
  tags: [AncestryBoost],
  effects: [CharacterEffects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const StrengthBackgroundBoost = Traits.defineTrait('background-boost/strength', {
  name: 'Strength (Background Boost)',
  description: 'Your background increases your Strength modifier by 1.',
  tags: [BackgroundBoost],
  effects: [CharacterEffects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1)))],
})

export const DexterityBackgroundBoost = Traits.defineTrait('background-boost/dexterity', {
  name: 'Dexterity (Background Boost)',
  description: 'Your background increases your Dexterity modifier by 1.',
  tags: [BackgroundBoost],
  effects: [CharacterEffects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const ConstitutionBackgroundBoost = Traits.defineTrait('background-boost/constitution', {
  name: 'Constitution (Background Boost)',
  description: 'Your background increases your Constitution modifier by 1.',
  tags: [BackgroundBoost],
  effects: [CharacterEffects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const IntelligenceBackgroundBoost = Traits.defineTrait('background-boost/intelligence', {
  name: 'Intelligence (Background Boost)',
  description: 'Your background increases your Intelligence modifier by 1.',
  tags: [BackgroundBoost],
  effects: [CharacterEffects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const WisdomBackgroundBoost = Traits.defineTrait('background-boost/wisdom', {
  name: 'Wisdom (Background Boost)',
  description: 'Your background increases your Wisdom modifier by 1.',
  tags: [BackgroundBoost],
  effects: [CharacterEffects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const CharismaBackgroundBoost = Traits.defineTrait('background-boost/charisma', {
  name: 'Charisma (Background Boost)',
  description: 'Your background increases your Charisma modifier by 1.',
  tags: [BackgroundBoost],
  effects: [CharacterEffects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const StrengthLevel1Boost = Traits.defineTrait('level-1-boost/strength', {
  name: 'Strength (Level 1 Boost)',
  description: 'Increase your Strength modifier by 1.',
  tags: [Level1Boost],
  effects: [CharacterEffects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1)))],
})

export const DexterityLevel1Boost = Traits.defineTrait('level-1-boost/dexterity', {
  name: 'Dexterity (Level 1 Boost)',
  description: 'Increase your Dexterity modifier by 1.',
  tags: [Level1Boost],
  effects: [CharacterEffects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const ConstitutionLevel1Boost = Traits.defineTrait('level-1-boost/constitution', {
  name: 'Constitution (Level 1 Boost)',
  description: 'Increase your Constitution modifier by 1.',
  tags: [Level1Boost],
  effects: [CharacterEffects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const IntelligenceLevel1Boost = Traits.defineTrait('level-1-boost/intelligence', {
  name: 'Intelligence (Level 1 Boost)',
  description: 'Increase your Intelligence modifier by 1.',
  tags: [Level1Boost],
  effects: [CharacterEffects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const WisdomLevel1Boost = Traits.defineTrait('level-1-boost/wisdom', {
  name: 'Wisdom (Level 1 Boost)',
  description: 'Increase your Wisdom modifier by 1.',
  tags: [Level1Boost],
  effects: [CharacterEffects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const CharismaLevel1Boost = Traits.defineTrait('level-1-boost/charisma', {
  name: 'Charisma (Level 1 Boost)',
  description: 'Increase your Charisma modifier by 1.',
  tags: [Level1Boost],
  effects: [CharacterEffects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const StrengthLevel5Boost = Traits.defineTrait('level-5-boost/strength', {
  name: 'Strength (Level 5 Boost)',
  description:
    'Increase your Strength modifier by 1. This boost is only available while your Strength modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level5Boost],
  prerequisites: [Expressions.lessThan(Strength.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1)))],
})

export const DexterityLevel5Boost = Traits.defineTrait('level-5-boost/dexterity', {
  name: 'Dexterity (Level 5 Boost)',
  description:
    'Increase your Dexterity modifier by 1. This boost is only available while your Dexterity modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level5Boost],
  prerequisites: [Expressions.lessThan(Dexterity.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const ConstitutionLevel5Boost = Traits.defineTrait('level-5-boost/constitution', {
  name: 'Constitution (Level 5 Boost)',
  description:
    'Increase your Constitution modifier by 1. This boost is only available while your Constitution modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level5Boost],
  prerequisites: [Expressions.lessThan(Constitution.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const IntelligenceLevel5Boost = Traits.defineTrait('level-5-boost/intelligence', {
  name: 'Intelligence (Level 5 Boost)',
  description:
    'Increase your Intelligence modifier by 1. This boost is only available while your Intelligence modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level5Boost],
  prerequisites: [Expressions.lessThan(Intelligence.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const WisdomLevel5Boost = Traits.defineTrait('level-5-boost/wisdom', {
  name: 'Wisdom (Level 5 Boost)',
  description:
    'Increase your Wisdom modifier by 1. This boost is only available while your Wisdom modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level5Boost],
  prerequisites: [Expressions.lessThan(Wisdom.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const CharismaLevel5Boost = Traits.defineTrait('level-5-boost/charisma', {
  name: 'Charisma (Level 5 Boost)',
  description:
    'Increase your Charisma modifier by 1. This boost is only available while your Charisma modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level5Boost],
  prerequisites: [Expressions.lessThan(Charisma.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const StrengthLevel5PartialBoost = Traits.defineTrait('level-5-boost/strength-partial', {
  name: 'Strength (Level 5 Partial Boost)',
  description:
    'Your Strength modifier is already +4 or higher, so this boost is a partial boost: it doesn’t change your modifier yet. A second partial boost to Strength at 10th level increases your Strength modifier by 1.',
  tags: [Level5Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Strength.variable, 4), Expressions.not(Traits.traitPrerequisite(StrengthLevel5Boost))],
  effects: [],
})

export const DexterityLevel5PartialBoost = Traits.defineTrait('level-5-boost/dexterity-partial', {
  name: 'Dexterity (Level 5 Partial Boost)',
  description:
    'Your Dexterity modifier is already +4 or higher, so this boost is a partial boost: it doesn’t change your modifier yet. A second partial boost to Dexterity at 10th level increases your Dexterity modifier by 1.',
  tags: [Level5Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Dexterity.variable, 4), Expressions.not(Traits.traitPrerequisite(DexterityLevel5Boost))],
  effects: [],
})

export const ConstitutionLevel5PartialBoost = Traits.defineTrait('level-5-boost/constitution-partial', {
  name: 'Constitution (Level 5 Partial Boost)',
  description:
    'Your Constitution modifier is already +4 or higher, so this boost is a partial boost: it doesn’t change your modifier yet. A second partial boost to Constitution at 10th level increases your Constitution modifier by 1.',
  tags: [Level5Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Constitution.variable, 4), Expressions.not(Traits.traitPrerequisite(ConstitutionLevel5Boost))],
  effects: [],
})

export const IntelligenceLevel5PartialBoost = Traits.defineTrait('level-5-boost/intelligence-partial', {
  name: 'Intelligence (Level 5 Partial Boost)',
  description:
    'Your Intelligence modifier is already +4 or higher, so this boost is a partial boost: it doesn’t change your modifier yet. A second partial boost to Intelligence at 10th level increases your Intelligence modifier by 1.',
  tags: [Level5Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Intelligence.variable, 4), Expressions.not(Traits.traitPrerequisite(IntelligenceLevel5Boost))],
  effects: [],
})

export const WisdomLevel5PartialBoost = Traits.defineTrait('level-5-boost/wisdom-partial', {
  name: 'Wisdom (Level 5 Partial Boost)',
  description:
    'Your Wisdom modifier is already +4 or higher, so this boost is a partial boost: it doesn’t change your modifier yet. A second partial boost to Wisdom at 10th level increases your Wisdom modifier by 1.',
  tags: [Level5Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Wisdom.variable, 4), Expressions.not(Traits.traitPrerequisite(WisdomLevel5Boost))],
  effects: [],
})

export const CharismaLevel5PartialBoost = Traits.defineTrait('level-5-boost/charisma-partial', {
  name: 'Charisma (Level 5 Partial Boost)',
  description:
    'Your Charisma modifier is already +4 or higher, so this boost is a partial boost: it doesn’t change your modifier yet. A second partial boost to Charisma at 10th level increases your Charisma modifier by 1.',
  tags: [Level5Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Charisma.variable, 4), Expressions.not(Traits.traitPrerequisite(CharismaLevel5Boost))],
  effects: [],
})

export const StrengthLevel10Boost = Traits.defineTrait('level-10-boost/strength', {
  name: 'Strength (Level 10 Boost)',
  description:
    'Increase your Strength modifier by 1. This boost is only available while your Strength modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level10Boost],
  prerequisites: [Expressions.lessThan(Strength.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1)))],
})

export const StrengthLevel10PartialBoost = Traits.defineTrait('level-10-boost/strength-partial', {
  name: 'Strength (Level 10 Partial Boost)',
  description:
    'Your Strength modifier is already +4 or higher, so this boost is a partial boost. Two partial boosts to the same attribute increase its modifier by 1: if you also took the partial boost to Strength at 5th level, your Strength modifier increases by 1.',
  tags: [Level10Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Strength.variable, 4), Expressions.not(Traits.traitPrerequisite(StrengthLevel10Boost))],
  effects: [
    CharacterEffects.conditional(Traits.traitPrerequisite(StrengthLevel5PartialBoost), [
      CharacterEffects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1))),
    ]),
  ],
})

export const DexterityLevel10Boost = Traits.defineTrait('level-10-boost/dexterity', {
  name: 'Dexterity (Level 10 Boost)',
  description:
    'Increase your Dexterity modifier by 1. This boost is only available while your Dexterity modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level10Boost],
  prerequisites: [Expressions.lessThan(Dexterity.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const DexterityLevel10PartialBoost = Traits.defineTrait('level-10-boost/dexterity-partial', {
  name: 'Dexterity (Level 10 Partial Boost)',
  description:
    'Your Dexterity modifier is already +4 or higher, so this boost is a partial boost. Two partial boosts to the same attribute increase its modifier by 1: if you also took the partial boost to Dexterity at 5th level, your Dexterity modifier increases by 1.',
  tags: [Level10Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Dexterity.variable, 4), Expressions.not(Traits.traitPrerequisite(DexterityLevel10Boost))],
  effects: [
    CharacterEffects.conditional(Traits.traitPrerequisite(DexterityLevel5PartialBoost), [
      CharacterEffects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1))),
    ]),
  ],
})

export const ConstitutionLevel10Boost = Traits.defineTrait('level-10-boost/constitution', {
  name: 'Constitution (Level 10 Boost)',
  description:
    'Increase your Constitution modifier by 1. This boost is only available while your Constitution modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level10Boost],
  prerequisites: [Expressions.lessThan(Constitution.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const ConstitutionLevel10PartialBoost = Traits.defineTrait('level-10-boost/constitution-partial', {
  name: 'Constitution (Level 10 Partial Boost)',
  description:
    'Your Constitution modifier is already +4 or higher, so this boost is a partial boost. Two partial boosts to the same attribute increase its modifier by 1: if you also took the partial boost to Constitution at 5th level, your Constitution modifier increases by 1.',
  tags: [Level10Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Constitution.variable, 4), Expressions.not(Traits.traitPrerequisite(ConstitutionLevel10Boost))],
  effects: [
    CharacterEffects.conditional(Traits.traitPrerequisite(ConstitutionLevel5PartialBoost), [
      CharacterEffects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1))),
    ]),
  ],
})

export const IntelligenceLevel10Boost = Traits.defineTrait('level-10-boost/intelligence', {
  name: 'Intelligence (Level 10 Boost)',
  description:
    'Increase your Intelligence modifier by 1. This boost is only available while your Intelligence modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level10Boost],
  prerequisites: [Expressions.lessThan(Intelligence.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const IntelligenceLevel10PartialBoost = Traits.defineTrait('level-10-boost/intelligence-partial', {
  name: 'Intelligence (Level 10 Partial Boost)',
  description:
    'Your Intelligence modifier is already +4 or higher, so this boost is a partial boost. Two partial boosts to the same attribute increase its modifier by 1: if you also took the partial boost to Intelligence at 5th level, your Intelligence modifier increases by 1.',
  tags: [Level10Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Intelligence.variable, 4), Expressions.not(Traits.traitPrerequisite(IntelligenceLevel10Boost))],
  effects: [
    CharacterEffects.conditional(Traits.traitPrerequisite(IntelligenceLevel5PartialBoost), [
      CharacterEffects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1))),
    ]),
  ],
})

export const WisdomLevel10Boost = Traits.defineTrait('level-10-boost/wisdom', {
  name: 'Wisdom (Level 10 Boost)',
  description:
    'Increase your Wisdom modifier by 1. This boost is only available while your Wisdom modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level10Boost],
  prerequisites: [Expressions.lessThan(Wisdom.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1)))],
})

export const WisdomLevel10PartialBoost = Traits.defineTrait('level-10-boost/wisdom-partial', {
  name: 'Wisdom (Level 10 Partial Boost)',
  description:
    'Your Wisdom modifier is already +4 or higher, so this boost is a partial boost. Two partial boosts to the same attribute increase its modifier by 1: if you also took the partial boost to Wisdom at 5th level, your Wisdom modifier increases by 1.',
  tags: [Level10Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Wisdom.variable, 4), Expressions.not(Traits.traitPrerequisite(WisdomLevel10Boost))],
  effects: [
    CharacterEffects.conditional(Traits.traitPrerequisite(WisdomLevel5PartialBoost), [
      CharacterEffects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1))),
    ]),
  ],
})

export const CharismaLevel10Boost = Traits.defineTrait('level-10-boost/charisma', {
  name: 'Charisma (Level 10 Boost)',
  description:
    'Increase your Charisma modifier by 1. This boost is only available while your Charisma modifier is below +4; otherwise, take the partial boost instead.',
  tags: [Level10Boost],
  prerequisites: [Expressions.lessThan(Charisma.variable, 4)],
  effects: [CharacterEffects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const CharismaLevel10PartialBoost = Traits.defineTrait('level-10-boost/charisma-partial', {
  name: 'Charisma (Level 10 Partial Boost)',
  description:
    'Your Charisma modifier is already +4 or higher, so this boost is a partial boost. Two partial boosts to the same attribute increase its modifier by 1: if you also took the partial boost to Charisma at 5th level, your Charisma modifier increases by 1.',
  tags: [Level10Boost],
  prerequisites: [Expressions.greaterThanOrEqual(Charisma.variable, 4), Expressions.not(Traits.traitPrerequisite(CharismaLevel10Boost))],
  effects: [
    CharacterEffects.conditional(Traits.traitPrerequisite(CharismaLevel5PartialBoost), [
      CharacterEffects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1))),
    ]),
  ],
})

export const StrengthKeyAttribute = Traits.defineTrait('key-attribute/strength', {
  name: 'Strength (Key Attribute)',
  description:
    'Strength is your key attribute. Your class increases your Strength modifier by 1, and you add your Strength modifier to your class DC.',
  tags: [KeyAttribute],
  effects: [
    CharacterEffects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Strength.variable))),
  ],
})

export const DexterityKeyAttribute = Traits.defineTrait('key-attribute/dexterity', {
  name: 'Dexterity (Key Attribute)',
  description:
    'Dexterity is your key attribute. Your class increases your Dexterity modifier by 1, and you add your Dexterity modifier to your class DC.',
  tags: [KeyAttribute],
  effects: [
    CharacterEffects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Dexterity.variable))),
  ],
})

export const ConstitutionKeyAttribute = Traits.defineTrait('key-attribute/constitution', {
  name: 'Constitution (Key Attribute)',
  description:
    'Constitution is your key attribute. Your class increases your Constitution modifier by 1, and you add your Constitution modifier to your class DC.',
  tags: [KeyAttribute],
  effects: [
    CharacterEffects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Constitution.variable))),
  ],
})

export const IntelligenceKeyAttribute = Traits.defineTrait('key-attribute/intelligence', {
  name: 'Intelligence (Key Attribute)',
  description:
    'Intelligence is your key attribute. Your class increases your Intelligence modifier by 1, and you add your Intelligence modifier to your class DC.',
  tags: [KeyAttribute],
  effects: [
    CharacterEffects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Intelligence.variable))),
  ],
})

export const WisdomKeyAttribute = Traits.defineTrait('key-attribute/wisdom', {
  name: 'Wisdom (Key Attribute)',
  description: 'Wisdom is your key attribute. Your class increases your Wisdom modifier by 1, and you add your Wisdom modifier to your class DC.',
  tags: [KeyAttribute],
  effects: [
    CharacterEffects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Wisdom.variable))),
  ],
})

export const CharismaKeyAttribute = Traits.defineTrait('key-attribute/charisma', {
  name: 'Charisma (Key Attribute)',
  description:
    'Charisma is your key attribute. Your class increases your Charisma modifier by 1, and you add your Charisma modifier to your class DC.',
  tags: [KeyAttribute],
  effects: [
    CharacterEffects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Charisma.variable))),
  ],
})

export const SelectAncestryBoost = CharacterOptions.selectTraitOption('attribute/select-ancestry-boost', {
  name: 'Ancestry Boost',
  filter: { tags: [AncestryBoost] },
})

export const SelectBackgroundBoost = CharacterOptions.selectTraitOption('attribute/select-background-boost', {
  name: 'Background Boost',
  filter: { tags: [BackgroundBoost] },
})

export const SelectLevel1Boost = CharacterOptions.selectTraitOption('attribute/select-level-1-boost', {
  name: 'Level 1 Boost',
  filter: { tags: [Level1Boost] },
})

export const SelectLevel5Boost = CharacterOptions.selectTraitOption('attribute/select-level-5-boost', {
  name: 'Level 5 Boost',
  filter: { tags: [Level5Boost] },
})

export const SelectLevel10Boost = CharacterOptions.selectTraitOption('attribute/select-level-10-boost', {
  name: 'Level 10 Boost',
  filter: { tags: [Level10Boost] },
})

export const AllAttributeBoosts = [
  Level10Boost,
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
  StrengthLevel5PartialBoost,
  DexterityLevel5PartialBoost,
  ConstitutionLevel5PartialBoost,
  IntelligenceLevel5PartialBoost,
  WisdomLevel5PartialBoost,
  CharismaLevel5PartialBoost,
  StrengthLevel10Boost,
  StrengthLevel10PartialBoost,
  DexterityLevel10Boost,
  DexterityLevel10PartialBoost,
  ConstitutionLevel10Boost,
  ConstitutionLevel10PartialBoost,
  IntelligenceLevel10Boost,
  IntelligenceLevel10PartialBoost,
  WisdomLevel10Boost,
  WisdomLevel10PartialBoost,
  CharismaLevel10Boost,
  CharismaLevel10PartialBoost,
  StrengthKeyAttribute,
  DexterityKeyAttribute,
  ConstitutionKeyAttribute,
  IntelligenceKeyAttribute,
  WisdomKeyAttribute,
  CharismaKeyAttribute,
]
