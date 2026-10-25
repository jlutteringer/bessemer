import { Abilities, Tags, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import {
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
  RangerFeat,
} from '@simulacrum/ruleset-pf2e/tag'
import { DexterityKeyAttribute, StrengthKeyAttribute } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import {
  ClassDC,
  Constitution,
  Fortitude,
  HitPoints,
  LightArmor,
  MartialWeapons,
  MediumArmor,
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
import { SelectTrainedSkill, TrainedNature, TrainedSurvival } from '@simulacrum/ruleset-pf2e/skill'
import { AllRangerFeatEntities, InitiateWarden } from '@simulacrum/ruleset-pf2e/class/ranger-feat'
import { AllRangerFocusSpellEntities } from '@simulacrum/ruleset-pf2e/class/ranger-focus-spell'

export const HuntersEdge = Tags.defineTraitTag('ranger/hunters-edge', { name: "Hunter's Edge" })

export const SelectRangerKeyAttribute = CharacterOptions.selectTraitOption('ranger/select-key-attribute', {
  name: 'Ranger Key Attribute',
  filter: { specificOptions: [StrengthKeyAttribute, DexterityKeyAttribute] },
})

export const SelectRangerFeat1 = CharacterOptions.selectTraitOption('ranger/select-feat-1', {
  name: 'Ranger Feat (Level 1)',
  filter: { tags: [RangerFeat, FeatLevel1] },
})

export const SelectRangerFeat2 = CharacterOptions.selectTraitOption('ranger/select-feat-2', {
  name: 'Ranger Feat (Level 2)',
  filter: { tags: [RangerFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectRangerFeat4 = CharacterOptions.selectTraitOption('ranger/select-feat-4', {
  name: 'Ranger Feat (Level 4)',
  filter: { tags: [RangerFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const SelectRangerFeat6 = CharacterOptions.selectTraitOption('ranger/select-feat-6', {
  name: 'Ranger Feat (Level 6)',
  filter: { tags: [RangerFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6]] },
})

export const SelectRangerFeat8 = CharacterOptions.selectTraitOption('ranger/select-feat-8', {
  name: 'Ranger Feat (Level 8)',
  filter: { tags: [RangerFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8]] },
})

export const SelectRangerFeat10 = CharacterOptions.selectTraitOption('ranger/select-feat-10', {
  name: 'Ranger Feat (Level 10)',
  filter: {
    tags: [RangerFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8, FeatLevel9, FeatLevel10]],
  },
})

export const FlurryEdge = Traits.defineTrait('ranger/hunters-edge/flurry', {
  name: 'Flurry',
  description:
    'You have trained to unleash a devastating flurry of attacks upon your prey. Your multiple attack penalty for attacks against your hunted prey is –3 (–2 with an agile attack) on your second attack of the turn instead of –5, and –6 (–4 with an agile attack) on your third or subsequent attack of the turn, instead of –10.\n\n**Masterful Hunter** (Level 17)\n\nYou can blend your weapon mastery with skillful targeting to make a series of precise attacks. If you have master proficiency with your weapon, your multiple attack penalty for attacks against your hunted prey is –2 (–1 with an agile weapon) on your second attack of the turn, and –4 (–2 with an agile weapon) on your third and subsequent attacks of the turn.',
  tags: [HuntersEdge],
  effects: [],
})

export const OutwitEdge = Traits.defineTrait('ranger/hunters-edge/outwit', {
  name: 'Outwit',
  description:
    "You are talented at outwitting and evading your prey. You gain a +2 circumstance bonus to [Deception](characteristic:skill/deception) checks, [Intimidation](characteristic:skill/intimidation) checks, [Stealth](characteristic:skill/stealth) checks, and any checks to [Recall Knowledge](content:skills/recall-knowledge) about the prey, and a +1 circumstance bonus to [AC](characteristic:armor-class) against your prey's attacks.\n\n**Masterful Hunter** (Level 17)\n\nYour mastery of skills allows you to overwhelm your prey. If you have master proficiency in Deception, Intimidation, Stealth, or the skill you use to Recall Knowledge about your prey, increase the circumstance bonus against the prey with that skill from +2 to +4. If you have master proficiency with your armor, increase the circumstance bonus to AC against the prey from +1 to +2.",
  tags: [HuntersEdge],
  effects: [],
})

export const PrecisionEdge = Traits.defineTrait('ranger/hunters-edge/precision', {
  name: 'Precision',
  description:
    'You have trained to aim for your prey’s weak points. The first time you hit your hunted prey in a round, you also deal 1d8 additional precision damage. (Precision damage increases the damage you already deal, using the same type, but is ineffective against creatures that lack vital organs or weak points.) At 11th level, the extra damage increases to 2d8 precision damage, and at 19th level, the extra damage increases to 3d8 precision damage.\n\n**Masterful Hunter** (Level 17)\n\nYour weapon mastery allows you to hit your prey’s vital areas multiple times. The second time in a round you hit your hunted prey, you also deal 1d8 precision damage. At 19th level, your second hit in a round against your hunted prey deals 2d8 precision damage, and your third hit in a round against your hunted prey deals 1d8 precision damage.',
  tags: [HuntersEdge],
  effects: [],
})

export const SelectHuntersEdge = CharacterOptions.selectTraitOption('ranger/select-hunters-edge', {
  name: "Hunter's Edge",
  filter: { tags: [HuntersEdge] },
})

export const HuntPrey = Traits.defineTrait('ranger/hunt-prey', {
  name: 'Hunt Prey',
  description:
    "When you focus your attention on a single foe, you become unstoppable in your pursuit. You gain the Hunt Prey action.\n\n*Concentrate, Ranger*\n\nYou designate a single creature as your prey and focus your attacks against that creature. You must be able to see or hear the prey, or you must be tracking the prey during exploration. You gain a +2 circumstance bonus to [Perception](characteristic:perception) checks when you [Seek](content:playing-the-game/seek) your prey and a +2 circumstance bonus to [Survival](characteristic:skill/survival) checks when you [Track](content:skills/track) your prey. You also ignore the penalty for making ranged attacks within your second range increment against the prey you're hunting.\n\nYou can have only one creature designated as your prey at a time. If you use Hunt Prey against a creature when you already have a creature designated, the prior creature loses the designation and the new prey gains the designation. Your designation lasts until your next daily preparations.",
  tags: [ClassFeature],
  effects: [],
})

export const HuntPreyAction = Abilities.defineAbility('ranger/hunt-prey/action', {
  name: 'Hunt Prey',
  description: '*Concentrate, Ranger*',
  prerequisites: [Traits.traitPrerequisite(HuntPrey)],
  actions: [
    {
      name: 'Hunt Prey',
      description:
        "You designate a single creature as your prey and focus your attacks against that creature. You must be able to see or hear the prey, or you must be tracking the prey during exploration. You gain a +2 circumstance bonus to [Perception](characteristic:perception) checks when you [Seek](content:playing-the-game/seek) your prey and a +2 circumstance bonus to [Survival](characteristic:skill/survival) checks when you [Track](content:skills/track) your prey. You also ignore the penalty for making ranged attacks within your second range increment against the prey you're hunting.\n\nYou can have only one creature designated as your prey at a time. If you use Hunt Prey against a creature when you already have a creature designated, the prior creature loses the designation and the new prey gains the designation. Your designation lasts until your next daily preparations.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const HuntersEdgeFeature = Traits.defineTrait('ranger/hunters-edge', {
  name: "Hunter's Edge",
  description:
    "You have trained to become a skilled hunter and tracker, gaining an extra benefit when you Hunt Prey depending on the focus of your training. Choose a hunter's edge.",
  tags: [ClassFeature],
  effects: [Effects.gainCharacterOption(SelectHuntersEdge)],
})

export const RangerWillExpertise = Traits.defineTrait('ranger/will-expertise', {
  name: 'Will Expertise',
  description: 'Your mental defenses grow stronger. Your proficiency rank for [Will saves](characteristic:will) increases to expert.',
  tags: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const RangerWeaponExpertise = Traits.defineTrait('ranger/ranger-weapon-expertise', {
  name: 'Ranger Weapon Expertise',
  description:
    'You gain every advantage from your weapons. Your proficiency rank for martial weapons, simple weapons, and unarmed attacks increases to expert. You gain access to the [critical specialization effects](content:equipment/critical-specialization) of all such weapons and unarmed attacks when attacking your hunted prey.',
  tags: [ClassFeature],
  effects: [
    Effects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
  ],
})

export const TracklessJourney = Traits.defineTrait('ranger/trackless-journey', {
  name: 'Trackless Journey',
  description:
    'When you move through natural terrains, you are hard to track. You always gain the benefits of the [Cover Tracks](content:skills/cover-tracks) action in such terrains, without moving at half your [Speed](characteristic:speed).',
  tags: [ClassFeature],
  effects: [],
})

export const NaturalReflexes = Traits.defineTrait('ranger/natural-reflexes', {
  name: 'Natural Reflexes',
  description:
    "You've honed your reflexes dodging falling trees and pounding hail. Your proficiency rank for [Reflex](characteristic:reflex) saves increases to master. When you roll a success on a Reflex save, you get a critical success instead.",
  tags: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Master), { combinability: Proficiency }))],
})

export const RangerPerceptionMastery = Traits.defineTrait('ranger/perception-mastery', {
  name: 'Perception Mastery',
  description:
    'You have highly developed acuity and attention to detail. Your proficiency rank for [Perception](characteristic:perception) increases to master.',
  tags: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Master), { combinability: Proficiency }))],
})

export const RangerWeaponSpecialization = Traits.defineTrait('ranger/weapon-specialization', {
  name: 'Weapon Specialization',
  description:
    "You inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you're an expert. This damage increases to 3 if you're a master, and 4 if you're legendary.",
  tags: [ClassFeature],
  effects: [],
})

export const NaturesEdge = Traits.defineTrait('ranger/natures-edge', {
  name: "Nature's Edge",
  description:
    "You always find the weak points in your foes' defenses when they're on unfavorable terrain. Enemies are [off-guard](content:conditions/off-guard) to you if they're in [difficult terrain](content:playing-the-game/difficult-terrain).",
  tags: [ClassFeature],
  effects: [],
})

export const RangerExpertise = Traits.defineTrait('ranger/ranger-expertise', {
  name: 'Ranger Expertise',
  description:
    "You've gained techniques that improve your cunning and skill. Your proficiency rank for your ranger DC increases to expert. If you have warden spells, your proficiency rank for spell attacks and spell DCs increases to expert.",
  tags: [ClassFeature],
  effects: [
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.conditional(Traits.traitPrerequisite(InitiateWarden), [
      Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
      Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    ]),
  ],
})

export const Ranger = Traits.defineTrait('ranger', {
  name: 'Ranger',
  description:
    "_Some rangers believe civilization wears down the soul, but still needs to be protected from wild creatures. Others say nature needs to be protected from the greedy, who wish to tame its beauty and plunder its treasures. You could champion either goal, or both. You might be a scout, tracker, or hunter of fugitives or beasts, haunting the edge of civilization or exploring the wilds. You know how to live off the land and are skilled at spotting and taking down both opportune prey and hated enemies._\n\n**Key Attribute** Strength or Dexterity. At 1st level, your class gives you an attribute boost to your choice of Strength or Dexterity.\n\n**Hit Points** 10 plus your Constitution modifier. You increase your maximum number of HP by this number at 1st level and every level thereafter.\n\n**Initial Proficiencies**\n\n- **Perception** Expert in Perception\n- **Saving Throws** Expert in Fortitude, Expert in Reflex, Trained in Will\n- **Skills** Trained in Nature; Trained in Survival; Trained in a number of additional skills equal to 4 plus your Intelligence modifier\n- **Attacks** Trained in simple weapons; Trained in martial weapons; Trained in unarmed attacks\n- **Defenses** Trained in light armor; Trained in medium armor; Trained in unarmored defense\n- **Class DC** Trained in ranger class DC\n\nYou'll see these key terms in many ranger class features.\n\n**[Flourish](content:traits/flourish)**: Actions with the flourish trait are special techniques that require too much exertion for you to perform frequently. You can use only one action with the flourish trait per round.\n\n**[Press](content:traits/press)**: Actions with this trait allow you to follow up earlier attacks. An action with the press trait can be used only if you are currently affected by a multiple attack penalty. You can't use a press action when it's not your turn, even if you use the [Ready](content:playing-the-game/ready) activity. Some actions with the press trait also grant an effect on a failure. The effects that are added on a failure don't apply on a critical failure. If your press action succeeds, you can choose to apply the failure effect instead. (For example, you may wish to do this when an attack deals no damage due to resistance.)\n\n**Warden Spells** Your relationship with the world around you extends from the physical to the magical. Certain feats grant you warden spells, which are a type of focus spell. It costs 1 Focus Point to cast a focus spell. When you gain your first warden spell, you also gain a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you regain 1 Focus Point by spending 10 minutes using the [Refocus](content:spells/refocus) activity to commune with nature. Your warden spells are primal spells. When you first gain a warden spell, you become trained in spell attacks and spell DCs. Your spellcasting attribute is Wisdom. Focus spells are automatically heightened to half your level rounded up. Certain feats give you more focus spells. The maximum Focus Points your focus pool can hold is equal to the number of focus spells you have, but it can never be more than 3 points. The full rules for focus spells appear [here](content:spells/focus-spells).",
  tags: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.multiply([NumericExpressions.sum([10, Constitution.variable]), CharacterValues.Level])))
    ),
    Effects.gainCharacterOption(SelectRangerKeyAttribute),
    Effects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.gainTrait(TrainedNature),
    Effects.gainTrait(TrainedSurvival),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(LightArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(MediumArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmoredDefense, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.gainTrait(HuntPrey),
    Effects.gainTrait(HuntersEdgeFeature),
    Effects.gainCharacterOption(SelectRangerFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [Effects.gainCharacterOption(SelectRangerFeat2)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [Effects.gainTrait(RangerWillExpertise)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [Effects.gainCharacterOption(SelectRangerFeat4)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.gainTrait(RangerWeaponExpertise),
      Effects.gainTrait(TracklessJourney),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [Effects.gainCharacterOption(SelectRangerFeat6)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      Effects.gainTrait(NaturalReflexes),
      Effects.gainTrait(RangerPerceptionMastery),
      Effects.gainTrait(RangerWeaponSpecialization),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 8), [Effects.gainCharacterOption(SelectRangerFeat8)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      Effects.gainTrait(NaturesEdge),
      Effects.gainTrait(RangerExpertise),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [Effects.gainCharacterOption(SelectRangerFeat10)]),
  ],
})

export const AllRangerEntities = [
  ...AllRangerFocusSpellEntities,
  ...AllRangerFeatEntities,
  HuntersEdge,
  SelectRangerKeyAttribute,
  SelectRangerFeat1,
  SelectRangerFeat2,
  SelectRangerFeat4,
  SelectRangerFeat6,
  SelectRangerFeat8,
  SelectRangerFeat10,
  FlurryEdge,
  OutwitEdge,
  PrecisionEdge,
  SelectHuntersEdge,
  HuntPrey,
  HuntPreyAction,
  HuntersEdgeFeature,
  RangerWillExpertise,
  RangerWeaponExpertise,
  TracklessJourney,
  NaturalReflexes,
  RangerPerceptionMastery,
  RangerWeaponSpecialization,
  NaturesEdge,
  RangerExpertise,
  Ranger,
]
