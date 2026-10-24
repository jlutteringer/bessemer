import { Abilities, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Class, ClassFeature, FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FighterFeat } from '@simulacrum/ruleset-pf2e/archetype'
import { DexterityKeyAttribute, StrengthKeyAttribute } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import {
  AdvancedWeapons,
  ClassDC,
  Constitution,
  Fortitude,
  HeavyArmor,
  HitPoints,
  LightArmor,
  MartialWeapons,
  MediumArmor,
  Perception,
  Reflex,
  SimpleWeapons,
  UnarmedAttacks,
  UnarmoredDefense,
  Will,
} from '@simulacrum/ruleset-pf2e/characteristic'
import { ShieldBlock } from '@simulacrum/ruleset-pf2e/feat/general-feat'
import { Expert, Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { SelectTrainedSkill, TrainedAcrobatics, TrainedAthletics } from '@simulacrum/ruleset-pf2e/skill'
import { AllFighterFeatEntities } from '@simulacrum/ruleset-pf2e/class/fighter-feat'

export const SelectFighterKeyAttribute = CharacterOptions.selectTraitOption('fighter/select-key-attribute', {
  name: 'Fighter Key Attribute',
  filter: { specificOptions: [StrengthKeyAttribute, DexterityKeyAttribute] },
})

export const SelectFighterSkill = CharacterOptions.selectTraitOption('fighter/select-skill', {
  name: 'Fighter Skill (Acrobatics or Athletics)',
  filter: { specificOptions: [TrainedAcrobatics, TrainedAthletics] },
})

export const SelectFighterFeat1 = CharacterOptions.selectTraitOption('fighter/select-feat-1', {
  name: 'Fighter Feat (Level 1)',
  filter: { archetypes: [FighterFeat, FeatLevel1] },
})

export const SelectFighterFeat2 = CharacterOptions.selectTraitOption('fighter/select-feat-2', {
  name: 'Fighter Feat (Level 2)',
  filter: { archetypes: [FighterFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectFighterFeat4 = CharacterOptions.selectTraitOption('fighter/select-feat-4', {
  name: 'Fighter Feat (Level 4)',
  filter: { archetypes: [FighterFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const FighterWeaponMasteryAxe = Traits.defineTrait('fighter/fighter-weapon-mastery/axe', {
  name: 'Fighter Weapon Mastery (Axe)',
  description:
    "Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the axe group, and to expert with the advanced weapons in the axe group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Axe)** Choose one creature adjacent to the initial target and within reach. If its AC is lower than your attack roll result for the critical hit, you deal damage to that creature equal to the result of the weapon damage die you rolled (including extra dice for its _striking_ rune, if any). This amount isn't doubled, and no bonuses or other additional dice apply to this damage.",
  effects: [],
})

export const FighterWeaponMasteryBomb = Traits.defineTrait('fighter/fighter-weapon-mastery/bomb', {
  name: 'Fighter Weapon Mastery (Bomb)',
  description:
    "Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the bomb group, and to expert with the advanced weapons in the bomb group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Bomb)** Increase the radius of the bomb's splash damage (if any) to 10 feet.",
  effects: [],
})

export const FighterWeaponMasteryBow = Traits.defineTrait('fighter/fighter-weapon-mastery/bow', {
  name: 'Fighter Weapon Mastery (Bow)',
  description:
    "Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the bow group, and to expert with the advanced weapons in the bow group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Bow)** If the target of the critical hit is adjacent to a surface, it gets stuck to that surface by the missile. The target is immobilized and must spend an Interact action to attempt a DC 10 Athletics check to pull the missile free; it can't move from its space until it succeeds. The creature doesn't become stuck if it is incorporeal, is liquid (like a water elemental or some oozes), or could otherwise escape without effort.",
  effects: [],
})

export const FighterWeaponMasteryBrawling = Traits.defineTrait('fighter/fighter-weapon-mastery/brawling', {
  name: 'Fighter Weapon Mastery (Brawling)',
  description:
    'Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the brawling group, and to expert with the advanced weapons in the brawling group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Brawling)** The target must succeed at a Fortitude save against your class DC or be slowed 1 until the end of your next turn.',
  effects: [],
})

export const FighterWeaponMasteryClub = Traits.defineTrait('fighter/fighter-weapon-mastery/club', {
  name: 'Fighter Weapon Mastery (Club)',
  description:
    'Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the club group, and to expert with the advanced weapons in the club group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Club)** You knock the target away from you up to 10 feet (you choose the distance). This is forced movement.',
  effects: [],
})

export const FighterWeaponMasteryCrossbow = Traits.defineTrait('fighter/fighter-weapon-mastery/crossbow', {
  name: 'Fighter Weapon Mastery (Crossbow)',
  description:
    "Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the crossbow group, and to expert with the advanced weapons in the crossbow group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Crossbow)** The target takes 1d8 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon's item bonus to attack rolls.",
  effects: [],
})

export const FighterWeaponMasteryDart = Traits.defineTrait('fighter/fighter-weapon-mastery/dart', {
  name: 'Fighter Weapon Mastery (Dart)',
  description:
    "Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the dart group, and to expert with the advanced weapons in the dart group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Dart)** The target takes 1d6 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon's item bonus to attack rolls.",
  effects: [],
})

export const FighterWeaponMasteryFlail = Traits.defineTrait('fighter/fighter-weapon-mastery/flail', {
  name: 'Fighter Weapon Mastery (Flail)',
  description:
    'Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the flail group, and to expert with the advanced weapons in the flail group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Flail)** The target is knocked prone unless they succeed at a Reflex save against your class DC.',
  effects: [],
})

export const FighterWeaponMasteryHammer = Traits.defineTrait('fighter/fighter-weapon-mastery/hammer', {
  name: 'Fighter Weapon Mastery (Hammer)',
  description:
    'Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the hammer group, and to expert with the advanced weapons in the hammer group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Hammer)** The target is knocked prone unless they succeed at a Fortitude save against your class DC.',
  effects: [],
})

export const FighterWeaponMasteryKnife = Traits.defineTrait('fighter/fighter-weapon-mastery/knife', {
  name: 'Fighter Weapon Mastery (Knife)',
  description:
    "Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the knife group, and to expert with the advanced weapons in the knife group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Knife)** The target takes 1d6 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon's item bonus to attack rolls.",
  effects: [],
})

export const FighterWeaponMasteryPick = Traits.defineTrait('fighter/fighter-weapon-mastery/pick', {
  name: 'Fighter Weapon Mastery (Pick)',
  description:
    'Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the pick group, and to expert with the advanced weapons in the pick group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Pick)** The weapon viciously pierces the target, who takes 2 additional damage per weapon damage die.',
  effects: [],
})

export const FighterWeaponMasteryPolearm = Traits.defineTrait('fighter/fighter-weapon-mastery/polearm', {
  name: 'Fighter Weapon Mastery (Polearm)',
  description:
    'Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the polearm group, and to expert with the advanced weapons in the polearm group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Polearm)** The target is moved 5 feet in a direction of your choice. This is forced movement.',
  effects: [],
})

export const FighterWeaponMasteryShield = Traits.defineTrait('fighter/fighter-weapon-mastery/shield', {
  name: 'Fighter Weapon Mastery (Shield)',
  description:
    'Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the shield group, and to expert with the advanced weapons in the shield group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Shield)** You knock the target back from you 5 feet. This is forced movement.',
  effects: [],
})

export const FighterWeaponMasterySling = Traits.defineTrait('fighter/fighter-weapon-mastery/sling', {
  name: 'Fighter Weapon Mastery (Sling)',
  description:
    'Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the sling group, and to expert with the advanced weapons in the sling group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Sling)** The target must succeed at a Fortitude save against your class DC or be stunned 1.',
  effects: [],
})

export const FighterWeaponMasterySpear = Traits.defineTrait('fighter/fighter-weapon-mastery/spear', {
  name: 'Fighter Weapon Mastery (Spear)',
  description:
    'Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the spear group, and to expert with the advanced weapons in the spear group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Spear)** The weapon pierces the target, weakening its attacks. The target is clumsy 1 until the start of your next turn.',
  effects: [],
})

export const FighterWeaponMasterySword = Traits.defineTrait('fighter/fighter-weapon-mastery/sword', {
  name: 'Fighter Weapon Mastery (Sword)',
  description:
    'Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in the sword group, and to expert with the advanced weapons in the sword group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.\n\n**Critical Specialization (Sword)** The target is made off-balance by your attack, becoming off-guard until the start of your next turn.',
  effects: [],
})

export const SelectFighterWeaponMastery = CharacterOptions.selectTraitOption('fighter/select-fighter-weapon-mastery', {
  name: 'Fighter Weapon Mastery Group',
  filter: {
    specificOptions: [
      FighterWeaponMasteryAxe,
      FighterWeaponMasteryBomb,
      FighterWeaponMasteryBow,
      FighterWeaponMasteryBrawling,
      FighterWeaponMasteryClub,
      FighterWeaponMasteryCrossbow,
      FighterWeaponMasteryDart,
      FighterWeaponMasteryFlail,
      FighterWeaponMasteryHammer,
      FighterWeaponMasteryKnife,
      FighterWeaponMasteryPick,
      FighterWeaponMasteryPolearm,
      FighterWeaponMasteryShield,
      FighterWeaponMasterySling,
      FighterWeaponMasterySpear,
      FighterWeaponMasterySword,
    ],
  },
})

export const ReactiveStrike = Traits.defineTrait('fighter/reactive-strike', {
  name: 'Reactive Strike',
  description:
    "Ever watchful for weaknesses, you can quickly attack foes that leave an opening in their defenses. You gain the Reactive Strike reaction.\n\n**Trigger** A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n\nYou lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike.",
  archetypes: [ClassFeature],
  effects: [],
})

export const ReactiveStrikeAction = Abilities.defineAbility('fighter/reactive-strike/action', {
  name: 'Reactive Strike',
  description:
    "Ever watchful for weaknesses, you can quickly attack foes that leave an opening in their defenses. You gain the Reactive Strike reaction.\n\n**Trigger** A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n\nYou lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike.",
  prerequisites: [Traits.traitPrerequisite(ReactiveStrike)],
  actions: [{ name: 'Reactive Strike', action: ActionTypes.Reaction }],
})

export const FighterShieldBlock = Traits.defineTrait('fighter/shield-block', {
  name: 'Shield Block',
  description: 'You gain the Shield Block general feat, a reaction that lets you reduce damage with your shield.',
  archetypes: [ClassFeature],
  effects: [Effects.gainTrait(ShieldBlock)],
})

export const Bravery = Traits.defineTrait('fighter/bravery', {
  name: 'Bravery',
  description:
    'Having faced countless foes and the chaos of battle, you have learned how to stand strong in the face of fear. Your proficiency rank for Will saves increases to expert. When you roll a success at a Will save against a fear effect, you get a critical success instead. In addition, anytime you gain the frightened condition, reduce its value by 1.',
  archetypes: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const FighterWeaponMastery = Traits.defineTrait('fighter/fighter-weapon-mastery', {
  name: 'Fighter Weapon Mastery',
  description:
    'Hours spent training with your preferred weapons, learning and developing new combat techniques, have made you particularly effective with your weapons of choice. Choose one weapon group. Your proficiency rank increases to master with the simple weapons, martial weapons, and unarmed attacks in that group, and to expert with the advanced weapons in that group. You gain access to the critical specialization effects of all weapons and unarmed attacks for which you have master proficiency.',
  archetypes: [ClassFeature],
  effects: [Effects.gainCharacterOption(SelectFighterWeaponMastery)],
})

export const Fighter = Traits.defineTrait('fighter', {
  name: 'Fighter',
  description:
    "_Fighting for honor, greed, loyalty, or simply the thrill of battle, you are an undisputed master of weaponry and combat techniques. You combine your actions through clever combinations of opening moves, finishing strikes, and counterattacks whenever your foes are unwise enough to drop their guard. Whether you are a knight, mercenary, sharpshooter, or blade master, you have honed your martial skills into an art form and perform devastating critical attacks on your enemies._\n\n**Key Attribute** Strength or Dexterity. At 1st level, your class gives you an attribute boost to your choice of Strength or Dexterity.\n\n**Hit Points** 10 plus your Constitution modifier. You increase your maximum number of HP by this number at 1st level and every level thereafter.\n\n**Initial Proficiencies**\n\n- **Perception** Expert in Perception\n- **Saving Throws** Expert in Fortitude, Expert in Reflex, Trained in Will\n- **Skills** Trained in your choice of Acrobatics or Athletics; Trained in a number of additional skills equal to 3 plus your Intelligence modifier\n- **Attacks** Expert in simple weapons; Expert in martial weapons; Trained in advanced weapons; Expert in unarmed attacks\n- **Defenses** Trained in all armor; Trained in unarmored defense\n- **Class DC** Trained in fighter class DC\n\n**Key Terms**\n\nBelow are some key terms in many fighter class features.\n\n**Flourish** Actions with the flourish trait are special techniques that require too much exertion for you to perform frequently. You can use only one action with the flourish trait per round.\n\n**Press** Actions with this trait allow you to follow up earlier attacks. An action with the press trait can be used only if you are currently affected by a multiple attack penalty. You can't use a press action when it's not your turn, even if you use the Ready activity. Some actions with the press trait also grant an effect on a failure. The effects that are added on a failure don't apply on a critical failure. If your press action succeeds, you can choose to apply the failure effect instead. (For example, you may wish to do this when an attack deals no damage due to resistance.)\n\n**Stance** A stance is a general combat strategy that you enter by using an action with the stance trait, and you remain in for some time. A stance lasts until you get knocked out, until its requirements (if any) are violated, until the encounter ends, or until you use a stance action again, whichever comes first. After you take an action with the stance trait, you can't take another one for 1 round. You can enter or be in a stance only in encounter mode. You can Dismiss a stance.",
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.multiply([NumericExpressions.sum([10, Constitution.variable]), CharacterValues.Level])))
    ),
    Effects.gainCharacterOption(SelectFighterKeyAttribute),
    Effects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.gainCharacterOption(SelectFighterSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(AdvancedWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(LightArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(MediumArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(HeavyArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmoredDefense, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.gainTrait(ReactiveStrike),
    Effects.gainTrait(FighterShieldBlock),
    Effects.gainCharacterOption(SelectFighterFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [Effects.gainCharacterOption(SelectFighterFeat2)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [Effects.gainTrait(Bravery)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [Effects.gainCharacterOption(SelectFighterFeat4)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainTrait(FighterWeaponMastery)]),
  ],
})

export const AllFighterEntities = [
  ...AllFighterFeatEntities,
  SelectFighterKeyAttribute,
  SelectFighterSkill,
  SelectFighterFeat1,
  SelectFighterFeat2,
  SelectFighterFeat4,
  FighterWeaponMasteryAxe,
  FighterWeaponMasteryBomb,
  FighterWeaponMasteryBow,
  FighterWeaponMasteryBrawling,
  FighterWeaponMasteryClub,
  FighterWeaponMasteryCrossbow,
  FighterWeaponMasteryDart,
  FighterWeaponMasteryFlail,
  FighterWeaponMasteryHammer,
  FighterWeaponMasteryKnife,
  FighterWeaponMasteryPick,
  FighterWeaponMasteryPolearm,
  FighterWeaponMasteryShield,
  FighterWeaponMasterySling,
  FighterWeaponMasterySpear,
  FighterWeaponMasterySword,
  SelectFighterWeaponMastery,
  ReactiveStrike,
  ReactiveStrikeAction,
  FighterShieldBlock,
  Bravery,
  FighterWeaponMastery,
  Fighter,
]
