import { Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { Class, ClassFeature, FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, RogueFeat } from '@simulacrum/ruleset-pf2e/archetype'
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
import { Expert, Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { SelectSkillIncrease, SelectTrainedSkill, TrainedStealth } from '@simulacrum/ruleset-pf2e/skill'
import { SelectSkillFeat1, SelectSkillFeat3, SelectSkillFeat5 } from '@simulacrum/ruleset-pf2e/character-option'
import { AllRogueRacketEntities, SelectRoguesRacket } from '@simulacrum/ruleset-pf2e/class/rogue-racket'
import { AllRogueFeatEntities } from '@simulacrum/ruleset-pf2e/class/rogue-feat'

export const RoguesRacketFeature = Traits.defineTrait('rogue/rogues-racket', {
  name: "Rogue's Racket",
  description:
    "You've begun to develop your techniques and approach to a job, while building your reputation in rogues' circles. Choose a rogue's racket.",
  archetypes: [ClassFeature],
  effects: [Effects.gainCharacterOption(SelectRoguesRacket)],
})

export const SneakAttack = Traits.defineTrait('rogue/sneak-attack', {
  name: 'Sneak Attack',
  description:
    "When your enemy can't properly defend itself, you take advantage to deal extra damage. If you Strike a creature that has the off-guard condition with an agile or finesse melee weapon, an agile or finesse unarmed attack, a ranged weapon attack, or a ranged unarmed attack, you deal an extra 1d6 precision damage. For a ranged attack with a thrown melee weapon, that weapon must also be agile or finesse.\n\nAs your rogue level increases, so does the number of damage dice for your sneak attack. Increase the number of dice by one at 5th, 11th, and 17th levels.",
  archetypes: [ClassFeature],
  effects: [
    Effects.conditional(Expressions.lessThan(CharacterValues.Level, 5), [Effects.descriptive('**Sneak attack** 1d6 precision damage')]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.descriptive('**Sneak attack** 2d6 precision damage')]),
  ],
})

export const SurpriseAttack = Traits.defineTrait('rogue/surprise-attack', {
  name: 'Surprise Attack',
  description:
    "You spring into combat faster than foes can react. On the first round of combat, if you roll Deception or Stealth for initiative, creatures that haven't acted are off-guard to you.",
  archetypes: [ClassFeature],
  effects: [],
})

export const DenyAdvantage = Traits.defineTrait('rogue/deny-advantage', {
  name: 'Deny Advantage',
  description:
    "As someone who takes advantage of openings, you are careful not to leave such gaps yourself. You aren't off-guard to hidden, undetected, or flanking creatures of your level or lower, or creatures of your level or lower using surprise attack. However, they can still help their allies flank.",
  archetypes: [ClassFeature],
  effects: [],
})

export const WeaponTricks = Traits.defineTrait('rogue/weapon-tricks', {
  name: 'Weapon Tricks',
  description:
    'You gain expert proficiency in simple weapons, martial weapons, and unarmed attacks. When you critically succeed at an attack roll against an off-guard creature while using an agile or finesse weapon or an agile or finesse unarmed attack, you apply the critical specialization effect for that weapon or unarmed attack.',
  archetypes: [ClassFeature],
  effects: [],
})

export const SelectRogueFeat1 = CharacterOptions.selectTraitOption('feat/select-rogue-1', {
  name: 'Rogue Feat (Level 1)',
  filter: { archetypes: [RogueFeat, FeatLevel1] },
})

export const SelectRogueFeat2 = CharacterOptions.selectTraitOption('feat/select-rogue-2', {
  name: 'Rogue Feat (Level 2)',
  filter: { archetypes: [RogueFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectRogueFeat4 = CharacterOptions.selectTraitOption('feat/select-rogue-4', {
  name: 'Rogue Feat (Level 4)',
  filter: { archetypes: [RogueFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const Rogue = Traits.defineTrait('rogue', {
  name: 'Rogue',
  description:
    "_You are skilled and opportunistic. Using your sharp wits and quick reactions, you take advantage of your opponents’ missteps and strike where it hurts most. You play a dangerous game, seeking thrills and testing your skills, and likely don’t care much for any laws that happen to get in your way. While the path of every rogue is unique and riddled with danger, the one thing you all share in common is the breadth and depth of your skills._\n\n**Key Attribute: Dexterity or other**\n\nAt 1st level, your class gives you an attribute boost to Dexterity or an option from rogue's racket.\n\n**Hit Points: 8 plus your Constitution modifier**\n\nYou increase your maximum number of HP by this number at 1st level and every level thereafter.\n\n**Initial Proficiencies**\n\nAt 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.\n\n**Perception**\n\nExpert in Perception\n\n**Saving Throws**\n\nTrained in Fortitude\n\nExpert in Reflex\n\nExpert in Will\n\n**Skills**\n\nTrained in Stealth\n\nTrained in one or more skills determined by your rogue's racket\n\nTrained in a number of additional skills equal to 7 plus your Intelligence modifier\n\n**Attacks**\n\nTrained in simple weapons\n\nTrained in martial weapons\n\nTrained in unarmed attacks\n\n**Defenses**\n\nTrained in light armor\n\nTrained in unarmored defense\n\n**Class DC**\n\nTrained in rogue class DC\n\n**Class Features**\n\nYou gain these features as Rogue. Features gained at higher levels list the levels at which you gain them next to the features' names.\n\n| Your Level | Class Features |\n|---|---|\n| 1 | Ancestry and background, attribute boosts, initial proficiencies, rogue’s racket, sneak attack 1d6, surprise attack, rogue feat, skill feat |\n| 2 | Rogue feat, skill feat, skill increase |\n| 3 | Deny advantage, general feat, skill feat, skill increase |\n| 4 | Rogue feat, skill feat, skill increase |\n| 5 | Attribute boosts, ancestry feat, skill feat, skill increase, sneak attack 2d6, weapon tricks |",
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.multiply([NumericExpressions.sum([8, Constitution.variable]), CharacterValues.Level])))
    ),
    Effects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(LightArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmoredDefense, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.gainTrait(TrainedStealth),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainTrait(RoguesRacketFeature),
    Effects.gainTrait(SneakAttack),
    Effects.gainTrait(SurpriseAttack),
    Effects.gainCharacterOption(SelectRogueFeat1),
    Effects.gainCharacterOption(SelectSkillFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      Effects.gainCharacterOption(SelectRogueFeat2),
      Effects.gainCharacterOption(SelectSkillIncrease),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.gainTrait(DenyAdvantage),
      Effects.gainCharacterOption(SelectSkillFeat3),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [
      Effects.gainCharacterOption(SelectRogueFeat4),
      Effects.gainCharacterOption(SelectSkillIncrease),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.gainTrait(WeaponTricks),
      Effects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
      Effects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
      Effects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
      Effects.gainCharacterOption(SelectSkillFeat5),
    ]),
  ],
})

export const AllRogueEntities = [
  RoguesRacketFeature,
  SneakAttack,
  SurpriseAttack,
  DenyAdvantage,
  WeaponTricks,
  SelectRogueFeat1,
  SelectRogueFeat2,
  SelectRogueFeat4,
  Rogue,
  ...AllRogueRacketEntities,
  ...AllRogueFeatEntities,
]
