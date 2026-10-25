import { Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import * as Spells from '@simulacrum/ruleset-pf2e/spell/spell'
import * as BardFocusSpells from '@simulacrum/ruleset-pf2e/class/bard-focus-spell'
import {
  BardFeat,
  Class,
  ClassFeature,
  FeatLevel1,
  FeatLevel2,
  FeatLevel3,
  FeatLevel4,
  FeatLevel5,
  FeatLevel6,
  FeatLevel7,
  FeatLevel8,
  FeatLevel9,
  FeatLevel10,
} from '@simulacrum/ruleset-pf2e/tag'
import {
  ClassDC,
  Constitution,
  Fortitude,
  HitPoints,
  LightArmor,
  MartialWeapons,
  Perception,
  Reflex,
  SimpleWeapons,
  SpellAttack,
  SpellDC,
  UnarmedAttacks,
  UnarmoredDefense,
  Will,
} from '@simulacrum/ruleset-pf2e/characteristic'
import { Expert, Master, Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { CharismaKeyAttribute } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { SelectTrainedSkill, TrainedOccultism, TrainedPerformance } from '@simulacrum/ruleset-pf2e/skill'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import { AllBardSpellcastingEntities, BardSpellcasting, SpellRepertoire } from '@simulacrum/ruleset-pf2e/class/bard-spellcasting'
import { AllBardMuseEntities, Enigma, Maestro, Polymath, SelectMuse, Warrior } from '@simulacrum/ruleset-pf2e/class/bard-muse'
import {
  AllBardFeatEntities,
  BardicLore,
  LingeringComposition,
  MartialPerformance,
  VersatilePerformance,
} from '@simulacrum/ruleset-pf2e/class/bard-feat'
import { AllBardFocusSpells } from '@simulacrum/ruleset-pf2e/class/bard-focus-spell'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'

export const SelectBardFeat2 = CharacterOptions.selectTraitOption('feat/select-bard-2', {
  name: 'Bard Feat (Level 2)',
  filter: { tags: [BardFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectBardFeat4 = CharacterOptions.selectTraitOption('feat/select-bard-4', {
  name: 'Bard Feat (Level 4)',
  filter: { tags: [BardFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const SelectBardFeat6 = CharacterOptions.selectTraitOption('feat/select-bard-6', {
  name: 'Bard Feat (Level 6)',
  filter: { tags: [BardFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6]] },
})

export const SelectBardFeat8 = CharacterOptions.selectTraitOption('feat/select-bard-8', {
  name: 'Bard Feat (Level 8)',
  filter: { tags: [BardFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8]] },
})

export const SelectBardFeat10 = CharacterOptions.selectTraitOption('feat/select-bard-10', {
  name: 'Bard Feat (Level 10)',
  filter: {
    tags: [BardFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8, FeatLevel9, FeatLevel10]],
  },
})

export const CompositionSpells = Traits.defineTrait('bard/composition-spells', {
  name: 'Composition Spells',
  description:
    "You can infuse your performances with magic to create unique effects called compositions. Compositions are a special type of spell that often require you to use the [Performance](characteristic:skill/performance) skill when casting them. Composition spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the [Refocus](content:spells/refocus) activity to perform, write a new composition, or otherwise engage your muse.\n\nFocus spells are automatically heightened to half your level rounded up, much like cantrips. Focus spells don't require spell slots, and you can't cast them using spell slots. Taking feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points. The full rules for focus spells appear [here](content:spells/focus-spells).\n\nYou learn the [_counter performance_](ability:spell/counter-performance) composition spell, protecting against [auditory](content:traits/auditory) and [visual](content:traits/visual) effects.\n\n**Composition Cantrips**\n\nComposition cantrips are special composition spells that don't cost Focus Points, so you can use them as often as you like. Composition cantrips are in addition to the cantrips you choose with bard spellcasting. Unlike other cantrips, you can't swap out composition cantrips gained from bard feats at a later level, unless you swap out the specific feat via [retraining](content:playing-the-game/retraining).\n\nYou learn the [_courageous anthem_](ability:spell/courageous-anthem) composition cantrip, which boosts your allies' attacks, damage, and defense against [fear](content:traits/fear).",
  tags: [ClassFeature],
  effects: [
    Effects.gainResourcePool(FocusPoints),
    Effects.gainAbility(BardFocusSpells.CounterPerformance),
    Effects.gainAbility(Spells.CourageousAnthem),
  ],
})

export const Muses = Traits.defineTrait('bard/muses', {
  name: 'Muses',
  description:
    'As a bard, you select one muse at 1st level. This muse leads you to great things and might be someone you know, a supernatural creature, location, deity, philosophy, or captivating mystery. Depending on the type of inspiration you receive, your 1st-level muse grants you a specific 1st-level bard feat and adds a spell to your repertoire.\n\nIn addition to this, each muse opens the door to many later bard feats. If one type of inspiration is not enough to represent your muse, consider the [Multifarious Muse](trait:feat/multifarious-muse) feat.',
  tags: [ClassFeature],
  effects: [
    Effects.gainCharacterOption(SelectMuse),
    Effects.conditional(Traits.traitPrerequisite(Enigma), [Effects.gainTrait(BardicLore)]),
    Effects.conditional(Traits.traitPrerequisite(Maestro), [Effects.gainTrait(LingeringComposition)]),
    Effects.conditional(Traits.traitPrerequisite(Polymath), [Effects.gainTrait(VersatilePerformance)]),
    Effects.conditional(Traits.traitPrerequisite(Warrior), [Effects.gainTrait(MartialPerformance)]),
  ],
})

export const ReflexExpertise = Traits.defineTrait('bard/reflex-expertise', {
  name: 'Reflex Expertise',
  description: "You've developed a knack for dodging danger. Your proficiency rank for [Reflex](characteristic:reflex) saves increases to expert.",
  tags: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const SignatureSpells = Traits.defineTrait('bard/signature-spells', {
  name: 'Signature Spells',
  description:
    "Experience allows you to cast some spells more flexibly. For each spell rank you have access to, choose one spell of that rank to be a signature spell. You don't need to learn heightened versions of signature spells separately; instead, you can heighten these spells freely. If you've learned a signature spell at a higher rank than its minimum, you can also cast all its lower-rank versions without learning those separately. If you swap out a signature spell, you can choose a replacement signature spell of the same spell rank at which you learned the previous spell. You can also retrain specifically to change a signature spell to a different spell of that rank without swapping any spells; this takes as much time as retraining a spell normally does.",
  tags: [ClassFeature],
  effects: [],
})

export const BardExpertSpellcaster = Traits.defineTrait('bard/expert-spellcaster', {
  name: 'Expert Spellcaster',
  description:
    'Your magical techniques grow stronger. Your proficiency ranks for [spell attack modifiers](characteristic:spell-attack) and [spell DCs](characteristic:spell-dc) increase to expert.',
  tags: [ClassFeature],
  effects: [
    Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
  ],
})

export const BardFortitudeExpertise = Traits.defineTrait('bard/fortitude-expertise', {
  name: 'Fortitude Expertise',
  description:
    'Your physique has grown hardy in your adventures. Your proficiency rank for [Fortitude](characteristic:fortitude) saves increases to expert.',
  tags: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const PerformersHeart = Traits.defineTrait('bard/performers-heart', {
  name: "Performer's Heart",
  description:
    'The greatest performances require an understanding of your own mind and flawless concentration. Your proficiency rank for [Will saves](characteristic:will) increases to master. When you roll a success on a Will save, you get a critical success instead.',
  tags: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Master), { combinability: Proficiency }))],
})

export const Bard = Traits.defineTrait('bard', {
  name: 'Bard',
  description:
    "_You are a master of artistry, a scholar of hidden secrets, and a captivating persuader. Using powerful performances, you influence minds and elevate souls to new levels of heroics. You might use your powers to become a charismatic leader, or perhaps you might instead be a counselor, manipulator, scholar, scoundrel, or virtuoso. While your versatility leads some to consider you a beguiling ne’erdo- well and a jack-of-all-trades, it’s dangerous to dismiss you as a master of none._\n\n**Key Attribute: Charisma**\n\nAt 1st level, your class gives you an attribute boost to Charisma.\n\n**Hit Points: 8 plus your Constitution modifier**\n\nYou increase your maximum number of HP by this number at 1st level and every level thereafter.\n\n**Key Terms**\n\nYou'll see the following key terms in many bard class features.\n\n**[Composition](content:traits/composition):** To cast a composition cantrip or focus spell, you use a type of [Performance](characteristic:skill/performance). If the spell requires an auditory performance, you might recite a poem, sing a song, or perform a dramatic monologue. If the spell requires a visual performance, you might dance or pantomime. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.\n\n**[Spellshape](content:traits/spellshape):** Actions with the spellshape trait tweak the properties of your spells. These actions usually come from spellshape feats. You must use a spellshape action directly before Casting the Spell you want to alter. If you use any action (including free actions and reactions) other than [Cast a Spell](content:spells/cast-a-spell) directly after, you waste the benefits of the spellshape action. Any additional effects added by a spellshape action are part of the spell's effect, not of the spellshape action itself.\n\n**Initial Proficiencies**\n\nAt 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.\n\n**Perception**\n\nExpert in [Perception](characteristic:perception)\n\n**Saving Throws**\n\nTrained in [Fortitude](characteristic:fortitude)\n\nTrained in [Reflex](characteristic:reflex)\n\nExpert in Will\n\n**Skills**\n\nTrained in [Occultism](characteristic:skill/occultism) Trained in [Performance](characteristic:skill/performance) Trained in a number of additional skills equal to 4 plus your [Intelligence modifier](characteristic:intelligence)\n\n**Attacks**\n\nTrained in simple weapons Trained in martial weapons Trained in unarmed attacks\n\n**Defenses**\n\nTrained in light armor Trained in unarmored defense\n\n**Class DC**\n\nTrained in bard [class DC](characteristic:class-dc)\n\n**Spells**\n\nTrained in [spell attack modifier](characteristic:spell-attack) Trained in [spell DC](characteristic:spell-dc)",
  tags: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.multiply([NumericExpressions.sum([8, Constitution.variable]), CharacterValues.Level])))
    ),
    Effects.gainTrait(CharismaKeyAttribute),
    Effects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(LightArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmoredDefense, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.gainTrait(TrainedOccultism),
    Effects.gainTrait(TrainedPerformance),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainTrait(BardSpellcasting),
    Effects.gainTrait(SpellRepertoire),
    Effects.gainTrait(CompositionSpells),
    Effects.gainTrait(Muses),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [Effects.gainCharacterOption(SelectBardFeat2)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.gainTrait(ReflexExpertise),
      Effects.gainTrait(SignatureSpells),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [Effects.gainCharacterOption(SelectBardFeat4)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [Effects.gainCharacterOption(SelectBardFeat6)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [Effects.gainTrait(BardExpertSpellcaster)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 8), [Effects.gainCharacterOption(SelectBardFeat8)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      Effects.gainTrait(BardFortitudeExpertise),
      Effects.gainTrait(PerformersHeart),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [Effects.gainCharacterOption(SelectBardFeat10)]),
  ],
})

export const AllBardEntities = [
  CompositionSpells,
  Muses,
  ReflexExpertise,
  SignatureSpells,
  BardExpertSpellcaster,
  BardFortitudeExpertise,
  PerformersHeart,
  Bard,
  ...AllBardMuseEntities,
  ...AllBardSpellcastingEntities,
  ...AllBardFeatEntities,
  ...AllBardFocusSpells,
]
