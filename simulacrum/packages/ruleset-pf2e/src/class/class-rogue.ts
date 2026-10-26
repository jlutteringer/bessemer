import { Abilities, Attributes, CharacterOptions, CharacterValues, CharacterEffects, Traits } from '@simulacrum/ruleset'
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
  RogueFeat,
  SkillFeat,
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
  UnarmedAttacks,
  UnarmoredDefense,
  Will,
} from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Expert, Master, Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { SelectSkillIncrease, SelectSkillIncrease7, SelectTrainedSkill, TrainedStealth } from '@simulacrum/ruleset-pf2e/skill'
import { SelectSkillFeat1, SelectSkillFeat3, SelectSkillFeat5 } from '@simulacrum/ruleset-pf2e/character-option'
import { AllRogueRacketEntities, SelectRoguesRacket } from '@simulacrum/ruleset-pf2e/class/rogue-racket'
import { AllRogueFeatEntities } from '@simulacrum/ruleset-pf2e/class/rogue-feat'

export const RoguesRacketFeature = Traits.defineTrait('rogue/rogues-racket', {
  name: "Rogue's Racket",
  description:
    "You've begun to develop your techniques and approach to a job, while building your reputation in rogues' circles. Choose a rogue's racket.",
  tags: [ClassFeature],
  effects: [CharacterEffects.gainCharacterOption(SelectRoguesRacket)],
})

export const SneakAttack = Traits.defineTrait('rogue/sneak-attack', {
  name: 'Sneak Attack',
  description:
    "When your enemy can't properly defend itself, you take advantage to deal extra damage. If you [Strike](content:playing-the-game/strike) a creature that has the [off-guard](content:conditions/off-guard) condition with an [agile](content:traits/agile) or [finesse](content:traits/finesse) melee weapon, an agile or finesse unarmed attack, a ranged weapon attack, or a ranged [unarmed](content:traits/unarmed) attack, you deal an extra 1d6 precision damage. For a ranged attack with a [thrown](content:traits/thrown) melee weapon, that weapon must also be agile or finesse.\n\nAs your rogue level increases, so does the number of damage dice for your sneak attack. Increase the number of dice by one at 5th, 11th, and 17th levels.",
  tags: [ClassFeature],
  effects: [
    CharacterEffects.conditional(Expressions.lessThan(CharacterValues.Level, 5), [
      CharacterEffects.descriptive('**Sneak attack** 1d6 precision damage'),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.descriptive('**Sneak attack** 2d6 precision damage'),
    ]),
  ],
})

export const SurpriseAttack = Traits.defineTrait('rogue/surprise-attack', {
  name: 'Surprise Attack',
  description:
    "You spring into combat faster than foes can react. On the first round of combat, if you roll [Deception](characteristic:skill/deception) or [Stealth](characteristic:skill/stealth) for initiative, creatures that haven't acted are [off-guard](content:conditions/off-guard) to you.",
  tags: [ClassFeature],
  effects: [],
})

export const DenyAdvantage = Traits.defineTrait('rogue/deny-advantage', {
  name: 'Deny Advantage',
  description:
    "As someone who takes advantage of openings, you are careful not to leave such gaps yourself. You aren't [off-guard](content:conditions/off-guard) to [hidden](content:conditions/hidden), [undetected](content:conditions/undetected), or flanking creatures of your level or lower, or creatures of your level or lower using surprise attack. However, they can still help their allies flank.",
  tags: [ClassFeature],
  effects: [],
})

export const WeaponTricks = Traits.defineTrait('rogue/weapon-tricks', {
  name: 'Weapon Tricks',
  description:
    'You gain expert proficiency in simple weapons, martial weapons, and unarmed attacks. When you critically succeed at an attack roll against an [off-guard](content:conditions/off-guard) creature while using an [agile](content:traits/agile) or [finesse](content:traits/finesse) weapon or an agile or finesse unarmed attack, you apply the [critical specialization effect](content:equipment/critical-specialization) for that weapon or unarmed attack.',
  tags: [ClassFeature],
  effects: [],
})

export const EvasiveReflexes = Traits.defineTrait('rogue/evasive-reflexes', {
  name: 'Evasive Reflexes',
  description:
    "You've learned to move quickly to avoid explosions, dragons' breath, and worse. Your proficiency rank for [Reflex](characteristic:reflex) saves increases to master. When you roll a success on a Reflex save, you get a critical success instead.",
  tags: [ClassFeature],
  effects: [CharacterEffects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Master), { combinability: Proficiency }))],
})

export const RoguePerceptionMastery = Traits.defineTrait('rogue/perception-mastery', {
  name: 'Perception Mastery',
  description:
    "You've developed keen awareness and attention to detail. Your proficiency rank for [Perception](characteristic:perception) increases to master.",
  tags: [ClassFeature],
  effects: [CharacterEffects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Master), { combinability: Proficiency }))],
})

export const RogueWeaponSpecialization = Traits.defineTrait('rogue/weapon-specialization', {
  name: 'Weapon Specialization',
  description:
    "You've learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you're an expert. This damage increases to 3 if you're a master, and 4 if you're legendary.",
  tags: [ClassFeature],
  effects: [],
})

export const RogueResilience = Traits.defineTrait('rogue/rogue-resilience', {
  name: 'Rogue Resilience',
  description:
    'Your physique is incredibly hardy. Your proficiency rank for [Fortitude](characteristic:fortitude) saves increases to expert. When you roll a success on a Fortitude save, you get a critical success instead.',
  tags: [ClassFeature],
  effects: [CharacterEffects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const DebilitatingStrike = Traits.defineTrait('rogue/debilitating-strike', {
  name: 'Debilitating Strike',
  description:
    'When taking advantage of an opening, you both hinder and harm your foe. You gain the Debilitating [Strike](content:playing-the-game/strike) free action.\n\n*Rogue*\n\n**Trigger** Your [Strike](content:playing-the-game/strike) hits an [off-guard](content:conditions/off-guard) creature and deals damage.\n\nYou apply one of the following debilitations, which lasts until the end of your next turn.\n\n- **Debilitation** The target takes a –10-foot status penalty to its Speeds.\n\n- **Debilitation** The target becomes [enfeebled 1](content:conditions/enfeebled).',
  tags: [ClassFeature],
  effects: [],
})

export const DebilitatingStrikeAction = Abilities.defineAbility('rogue/debilitating-strike/action', {
  name: 'Debilitating Strike',
  description: '*Rogue*',
  prerequisites: [Traits.traitPrerequisite(DebilitatingStrike)],
  actions: [
    {
      name: 'Debilitating Strike',
      description:
        '**Trigger** Your [Strike](content:playing-the-game/strike) hits an [off-guard](content:conditions/off-guard) creature and deals damage.\n\nYou apply one of the following debilitations, which lasts until the end of your next turn.\n\n- **Debilitation** The target takes a –10-foot status penalty to its Speeds.\n\n- **Debilitation** The target becomes [enfeebled 1](content:conditions/enfeebled).',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const SelectRogueFeat1 = CharacterOptions.selectTraitOption('feat/select-rogue-1', {
  name: 'Rogue Feat (Level 1)',
  filter: { tags: [RogueFeat, FeatLevel1] },
})

export const SelectRogueFeat2 = CharacterOptions.selectTraitOption('feat/select-rogue-2', {
  name: 'Rogue Feat (Level 2)',
  filter: { tags: [RogueFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectRogueFeat4 = CharacterOptions.selectTraitOption('feat/select-rogue-4', {
  name: 'Rogue Feat (Level 4)',
  filter: { tags: [RogueFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const SelectRogueFeat6 = CharacterOptions.selectTraitOption('feat/select-rogue-6', {
  name: 'Rogue Feat (Level 6)',
  filter: { tags: [RogueFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6]] },
})

export const SelectRogueFeat8 = CharacterOptions.selectTraitOption('feat/select-rogue-8', {
  name: 'Rogue Feat (Level 8)',
  filter: { tags: [RogueFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8]] },
})

export const SelectRogueFeat10 = CharacterOptions.selectTraitOption('feat/select-rogue-10', {
  name: 'Rogue Feat (Level 10)',
  filter: {
    tags: [RogueFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8, FeatLevel9, FeatLevel10]],
  },
})

export const SelectRogueSkillFeat7 = CharacterOptions.selectTraitOption('feat/select-rogue-skill-7', {
  name: 'Skill Feat (Level 7)',
  filter: { tags: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7]] },
})

export const SelectRogueSkillFeat9 = CharacterOptions.selectTraitOption('feat/select-rogue-skill-9', {
  name: 'Skill Feat (Level 9)',
  filter: { tags: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8, FeatLevel9]] },
})

export const Rogue = Traits.defineTrait('rogue', {
  name: 'Rogue',
  description:
    "_You are skilled and opportunistic. Using your sharp wits and quick reactions, you take advantage of your opponents’ missteps and strike where it hurts most. You play a dangerous game, seeking thrills and testing your skills, and likely don’t care much for any laws that happen to get in your way. While the path of every rogue is unique and riddled with danger, the one thing you all share in common is the breadth and depth of your skills._\n\n**Key Attribute: Dexterity or other**\n\nAt 1st level, your class gives you an attribute boost to Dexterity or an option from rogue's racket.\n\n**Hit Points: 8 plus your Constitution modifier**\n\nYou increase your maximum number of HP by this number at 1st level and every level thereafter.\n\n**Initial Proficiencies**\n\nAt 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.\n\n**Perception**\n\nExpert in [Perception](characteristic:perception)\n\n**Saving Throws**\n\nTrained in [Fortitude](characteristic:fortitude)\n\nExpert in [Reflex](characteristic:reflex)\n\nExpert in Will\n\n**Skills**\n\nTrained in [Stealth](characteristic:skill/stealth)\n\nTrained in one or more skills determined by your rogue's racket\n\nTrained in a number of additional skills equal to 7 plus your [Intelligence modifier](characteristic:intelligence)\n\n**Attacks**\n\nTrained in simple weapons\n\nTrained in martial weapons\n\nTrained in unarmed attacks\n\n**Defenses**\n\nTrained in light armor\n\nTrained in unarmored defense\n\n**Class DC**\n\nTrained in rogue [class DC](characteristic:class-dc)\n\n**Class Features**\n\nYou gain these features as Rogue. Features gained at higher levels list the levels at which you gain them next to the features' names.\n\n| Your Level | Class Features |\n|---|---|\n| 1 | Ancestry and background, attribute boosts, initial proficiencies, rogue’s racket, sneak attack 1d6, surprise attack, rogue feat, skill feat |\n| 2 | Rogue feat, skill feat, skill increase |\n| 3 | Deny advantage, general feat, skill feat, skill increase |\n| 4 | Rogue feat, skill feat, skill increase |\n| 5 | Attribute boosts, ancestry feat, skill feat, skill increase, sneak attack 2d6, weapon tricks |\n| 6 | Rogue feat, skill feat, skill increase |\n| 7 | Evasive reflexes, general feat, skill feat, skill increase, perception mastery, weapon specialization |\n| 8 | Rogue feat, skill feat, skill increase |\n| 9 | Ancestry feat, debilitating strike, rogue resilience, skill feat, skill increase |\n| 10 | Attribute boosts, rogue feat, skill feat, skill increase |",
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.multiply([NumericExpressions.sum([8, Constitution.variable]), CharacterValues.Level])))
    ),
    CharacterEffects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(LightArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(UnarmoredDefense, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.gainTrait(TrainedStealth),
    CharacterEffects.gainCharacterOption(SelectTrainedSkill),
    CharacterEffects.gainCharacterOption(SelectTrainedSkill),
    CharacterEffects.gainCharacterOption(SelectTrainedSkill),
    CharacterEffects.gainCharacterOption(SelectTrainedSkill),
    CharacterEffects.gainCharacterOption(SelectTrainedSkill),
    CharacterEffects.gainCharacterOption(SelectTrainedSkill),
    CharacterEffects.gainCharacterOption(SelectTrainedSkill),
    CharacterEffects.gainTrait(RoguesRacketFeature),
    CharacterEffects.gainTrait(SneakAttack),
    CharacterEffects.gainTrait(SurpriseAttack),
    CharacterEffects.gainCharacterOption(SelectRogueFeat1),
    CharacterEffects.gainCharacterOption(SelectSkillFeat1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      CharacterEffects.gainCharacterOption(SelectRogueFeat2),
      CharacterEffects.gainCharacterOption(SelectSkillIncrease),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainTrait(DenyAdvantage),
      CharacterEffects.gainCharacterOption(SelectSkillFeat3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [
      CharacterEffects.gainCharacterOption(SelectRogueFeat4),
      CharacterEffects.gainCharacterOption(SelectSkillIncrease),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainTrait(WeaponTricks),
      CharacterEffects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
      CharacterEffects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
      CharacterEffects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
      CharacterEffects.gainCharacterOption(SelectSkillFeat5),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [
      CharacterEffects.gainCharacterOption(SelectRogueFeat6),
      CharacterEffects.gainCharacterOption(SelectSkillIncrease),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainTrait(EvasiveReflexes),
      CharacterEffects.gainTrait(RoguePerceptionMastery),
      CharacterEffects.gainTrait(RogueWeaponSpecialization),
      CharacterEffects.gainCharacterOption(SelectRogueSkillFeat7),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 8), [
      CharacterEffects.gainCharacterOption(SelectRogueFeat8),
      CharacterEffects.gainCharacterOption(SelectSkillIncrease7),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainTrait(DebilitatingStrike),
      CharacterEffects.gainTrait(RogueResilience),
      CharacterEffects.gainCharacterOption(SelectRogueSkillFeat9),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [
      CharacterEffects.gainCharacterOption(SelectRogueFeat10),
      CharacterEffects.gainCharacterOption(SelectSkillIncrease7),
    ]),
  ],
})

export const AllRogueEntities = [
  RoguesRacketFeature,
  SneakAttack,
  SurpriseAttack,
  DenyAdvantage,
  WeaponTricks,
  EvasiveReflexes,
  RoguePerceptionMastery,
  RogueWeaponSpecialization,
  RogueResilience,
  DebilitatingStrike,
  DebilitatingStrikeAction,
  SelectRogueFeat1,
  SelectRogueFeat2,
  SelectRogueFeat4,
  SelectRogueFeat6,
  SelectRogueFeat8,
  SelectRogueFeat10,
  SelectRogueSkillFeat7,
  SelectRogueSkillFeat9,
  Rogue,
  ...AllRogueRacketEntities,
  ...AllRogueFeatEntities,
]
