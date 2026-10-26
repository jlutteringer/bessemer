import { Attributes, CharacterOptions, CharacterValues, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { Class, ClassFeature, Feat } from '@simulacrum/ruleset-dnd4e/tag'
import { Constitution, Fortitude, HealingSurges, HitPoints, Wisdom } from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Armor from '@simulacrum/ruleset-dnd4e/armor'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import * as Powers from '@simulacrum/ruleset-dnd4e/power'
import { Human } from '@simulacrum/ruleset-dnd4e/race'

export const CombatChallenge = Traits.defineTrait('fighter/combat-challenge', {
  name: 'Combat Challenge',
  description:
    "In combat, it's dangerous to ignore a fighter. Every time you attack an enemy, whether the attack hits or misses, you can choose to mark that target. The mark lasts until the end of your next turn. While a target is marked, it takes a –2 penalty to attack rolls for any attack that doesn't include you as a target. A creature can be subject to only one mark at a time. A new mark supersedes a mark that was already in place.\n\nIn addition, whenever a marked enemy that is adjacent to you shifts or makes an attack that does not include you, you can make a melee basic attack against that enemy as an immediate interrupt.",
  tags: [ClassFeature],
  effects: [],
})

export const CombatSuperiority = Traits.defineTrait('fighter/combat-superiority', {
  name: 'Combat Superiority',
  description:
    'You gain a bonus to opportunity attacks equal to your Wisdom modifier. An enemy struck by your opportunity attack stops moving, if a move provoked the attack. If it still has actions remaining, it can use them to resume moving.',
  tags: [ClassFeature],
  effects: [],
})

export const OneHandedWeaponTalent = Traits.defineTrait('fighter/weapon-talent/one-handed', {
  name: 'Fighter Weapon Talent: One-Handed',
  description: 'When using a one-handed weapon, you gain a +1 bonus to attack rolls.',
  tags: [ClassFeature],
  effects: [],
})

export const TwoHandedWeaponTalent = Traits.defineTrait('fighter/weapon-talent/two-handed', {
  name: 'Fighter Weapon Talent: Two-Handed',
  description: 'When using a two-handed weapon, you gain a +1 bonus to attack rolls.',
  tags: [ClassFeature],
  effects: [],
})

export const SelectWeaponTalent = CharacterOptions.selectTraitOption('fighter/select-weapon-talent', {
  name: 'Fighter Weapon Talent',
  description: 'Choose either one-handed or two-handed weapons. When using a weapon of your chosen style, you gain a +1 bonus to attack rolls.',
  filter: { specificOptions: [OneHandedWeaponTalent, TwoHandedWeaponTalent] },
})

export const SelectSkill = CharacterOptions.selectTraitOption('fighter/select-skill', {
  name: 'Trained Skill',
  filter: {
    specificOptions: [Skills.TrainedAthletics, Skills.TrainedEndurance, Skills.TrainedHeal, Skills.TrainedIntimidate, Skills.TrainedStreetwise],
  },
})

export const Fighter = Traits.defineTrait('fighter', {
  name: 'Fighter',
  description:
    '**Role:** Defender. You are very tough and have the exceptional ability to contain enemies in melee.\n\n**Power Source:** Martial. You have become a master of combat through endless hours of practice, determination, and your own sheer physical toughness.\n\n**Key Abilities:** [Strength](characteristic:strength), [Dexterity](characteristic:dexterity), [Wisdom](characteristic:wisdom), [Constitution](characteristic:constitution)\n\n**Armor Proficiencies:** [Cloth](ability:armor/cloth), [leather](ability:armor/leather), [hide](ability:armor/hide), [chainmail](ability:armor/chainmail), [scale](ability:armor/scale); [light shield](ability:shield/light), [heavy shield](ability:shield/heavy)\n\n**Weapon Proficiencies:** Simple melee, military melee, simple ranged, military ranged\n\n**Bonus to Defense:** +2 [Fortitude](characteristic:fortitude)\n\n**Hit Points at 1st Level:** 15 + Constitution score\n\n**Hit Points per Level Gained:** 6\n\n**Healing Surges per Day:** 9 + Constitution modifier\n\n**Trained Skills:** From the class skills list below, choose three trained skills at 1st level.\n\n**Class Skills:** [Athletics](characteristic:skill/athletics) (Str), [Endurance](characteristic:skill/endurance) (Con), [Heal](characteristic:skill/heal) (Wis), [Intimidate](characteristic:skill/intimidate) (Cha), [Streetwise](characteristic:skill/streetwise) (Cha)\n\n**Build Options:** [Great weapon fighter](content:classes/great-weapon-fighter), [guardian fighter](content:classes/guardian-fighter)\n\n**Class Features:** [Combat Challenge](trait:fighter/combat-challenge), [Combat Superiority](trait:fighter/combat-superiority), [Fighter Weapon Talent](character-option:fighter/select-weapon-talent)',
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.sum([9, NumericExpressions.multiply([CharacterValues.Level, 6])])))
    ),
    CharacterEffects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(9))),
    CharacterEffects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(2))),
    CharacterEffects.gainTrait(CombatChallenge),
    CharacterEffects.gainTrait(CombatSuperiority),
    CharacterEffects.gainCharacterOption(SelectWeaponTalent),
    CharacterEffects.gainTrait(Armor.LeatherProficiency),
    CharacterEffects.gainTrait(Armor.HideProficiency),
    CharacterEffects.gainTrait(Armor.ChainmailProficiency),
    CharacterEffects.gainTrait(Armor.ScaleProficiency),
    CharacterEffects.gainTrait(Armor.LightShieldProficiency),
    CharacterEffects.gainTrait(Armor.HeavyShieldProficiency),
    CharacterEffects.gainCharacterOption(SelectSkill),
    CharacterEffects.gainCharacterOption(SelectSkill),
    CharacterEffects.gainCharacterOption(SelectSkill),
    CharacterEffects.gainCharacterOption(Powers.SelectAtWillAttack),
    CharacterEffects.gainCharacterOption(Powers.SelectAtWillAttack),
    CharacterEffects.gainCharacterOption(Powers.SelectEncounterAttack1),
    CharacterEffects.gainCharacterOption(Powers.SelectDailyAttack1),
    // A human gains training in one additional skill from its class skill list
    CharacterEffects.conditional(Traits.traitPrerequisite(Human), [CharacterEffects.gainCharacterOption(SelectSkill)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      CharacterEffects.gainCharacterOption(Powers.SelectUtility2),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainCharacterOption(Powers.SelectEncounterAttack3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainCharacterOption(Powers.SelectDailyAttack5),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [
      CharacterEffects.gainCharacterOption(Powers.SelectUtility6),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainCharacterOption(Powers.SelectEncounterAttack7),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainCharacterOption(Powers.SelectDailyAttack9),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [
      CharacterEffects.gainCharacterOption(Powers.SelectUtility10),
    ]),
  ],
})

export const DistractingShield = Traits.defineTrait('feat/distracting-shield', {
  name: 'Distracting Shield',
  description:
    '**Prerequisites:** Wis 15, fighter, Combat Challenge class feature\n\nIf you hit a foe with an attack granted by your Combat Challenge class feature, the target takes a –2 penalty to attack rolls until the start of your next turn.\n\n**Special:** You must have a shield equipped to benefit from this feat.',
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Wisdom.variable, 15), Traits.traitPrerequisite(Fighter), Traits.traitPrerequisite(CombatChallenge)],
  effects: [],
})

export const PotentChallenge = Traits.defineTrait('feat/potent-challenge', {
  name: 'Potent Challenge',
  description:
    '**Prerequisites:** Con 15, fighter, Combat Challenge class feature\n\nIf you hit a foe with an attack granted by your Combat Challenge class feature, add your Constitution modifier to the damage roll.\n\n**Special:** This benefit applies only to attacks made with two-handed weapons.',
  tags: [Feat],
  prerequisites: [
    Expressions.greaterThanOrEqual(Constitution.variable, 15),
    Traits.traitPrerequisite(Fighter),
    Traits.traitPrerequisite(CombatChallenge),
  ],
  effects: [],
})

export const ShieldPush = Traits.defineTrait('feat/shield-push', {
  name: 'Shield Push',
  description:
    '**Prerequisites:** Fighter, Combat Challenge class feature\n\nIf you hit a foe with an attack granted by your Combat Challenge class feature, you push the target 1 square after dealing damage.\n\n**Special:** You must carry a shield to benefit from this feat.',
  tags: [Feat],
  prerequisites: [Traits.traitPrerequisite(Fighter), Traits.traitPrerequisite(CombatChallenge)],
  effects: [],
})

export const AllFighterTraits = [
  Fighter,
  CombatChallenge,
  CombatSuperiority,
  OneHandedWeaponTalent,
  TwoHandedWeaponTalent,
  DistractingShield,
  PotentChallenge,
  ShieldPush,
]
