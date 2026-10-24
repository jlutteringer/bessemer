import { Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { Class, ClassFeature, Feat } from '@simulacrum/ruleset-dnd4e/archetype'
import { Constitution, Fortitude, HealingSurges, HitPoints, Wisdom } from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Armor from '@simulacrum/ruleset-dnd4e/armor'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import * as Powers from '@simulacrum/ruleset-dnd4e/power'
import { Human } from '@simulacrum/ruleset-dnd4e/race'

export const CombatChallenge = Traits.defineTrait('fighter/combat-challenge', {
  name: 'Combat Challenge',
  description:
    "In combat, it's dangerous to ignore a fighter. Every time you attack an enemy, whether the attack hits or misses, you can choose to mark that target. The mark lasts until the end of your next turn. While a target is marked, it takes a –2 penalty to attack rolls for any attack that doesn't include you as a target. A creature can be subject to only one mark at a time. A new mark supersedes a mark that was already in place.\n\nIn addition, whenever a marked enemy that is adjacent to you shifts or makes an attack that does not include you, you can make a melee basic attack against that enemy as an immediate interrupt.",
  archetypes: [ClassFeature],
  effects: [],
})

export const CombatSuperiority = Traits.defineTrait('fighter/combat-superiority', {
  name: 'Combat Superiority',
  description:
    'You gain a bonus to opportunity attacks equal to your Wisdom modifier. An enemy struck by your opportunity attack stops moving, if a move provoked the attack. If it still has actions remaining, it can use them to resume moving.',
  archetypes: [ClassFeature],
  effects: [],
})

export const OneHandedWeaponTalent = Traits.defineTrait('fighter/weapon-talent/one-handed', {
  name: 'Fighter Weapon Talent: One-Handed',
  description: 'When using a one-handed weapon, you gain a +1 bonus to attack rolls.',
  archetypes: [ClassFeature],
  effects: [],
})

export const TwoHandedWeaponTalent = Traits.defineTrait('fighter/weapon-talent/two-handed', {
  name: 'Fighter Weapon Talent: Two-Handed',
  description: 'When using a two-handed weapon, you gain a +1 bonus to attack rolls.',
  archetypes: [ClassFeature],
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
    '**Defender.** You are very tough and have the exceptional ability to contain enemies in melee.\n\n**Power Source:** Martial · **Key Abilities:** Strength, Dexterity, Wisdom, Constitution\n\n**Armor Proficiencies:** Cloth, leather, hide, chainmail, scale; light shield, heavy shield\n\n**Weapon Proficiencies:** Simple melee, military melee, simple ranged, military ranged\n\n**Bonus to Defense:** +2 Fortitude · **Hit Points:** 15 + Constitution score at 1st level, 6 per level gained · **Healing Surges:** 9 + Constitution modifier',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.sum([9, NumericExpressions.multiply([CharacterValues.Level, 6])])))
    ),
    Effects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(9))),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(2))),
    Effects.gainTrait(CombatChallenge),
    Effects.gainTrait(CombatSuperiority),
    Effects.gainCharacterOption(SelectWeaponTalent),
    Effects.gainTrait(Armor.LeatherProficiency),
    Effects.gainTrait(Armor.HideProficiency),
    Effects.gainTrait(Armor.ChainmailProficiency),
    Effects.gainTrait(Armor.ScaleProficiency),
    Effects.gainTrait(Armor.LightShieldProficiency),
    Effects.gainTrait(Armor.HeavyShieldProficiency),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(Powers.SelectAtWillAttack),
    Effects.gainCharacterOption(Powers.SelectAtWillAttack),
    Effects.gainCharacterOption(Powers.SelectEncounterAttack1),
    Effects.gainCharacterOption(Powers.SelectDailyAttack1),
    // A human gains training in one additional skill from its class skill list
    Effects.conditional(Traits.traitPrerequisite(Human), [Effects.gainCharacterOption(SelectSkill)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [Effects.gainCharacterOption(Powers.SelectUtility2)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [Effects.gainCharacterOption(Powers.SelectEncounterAttack3)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(Powers.SelectDailyAttack5)]),
  ],
})

export const DistractingShield = Traits.defineTrait('feat/distracting-shield', {
  name: 'Distracting Shield',
  description:
    '**Prerequisites:** Wis 15, fighter, Combat Challenge class feature\n\nIf you hit a foe with an attack granted by your Combat Challenge class feature, the target takes a –2 penalty to attack rolls until the start of your next turn.\n\n**Special:** You must have a shield equipped to benefit from this feat.',
  archetypes: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Wisdom.variable, 15), Traits.traitPrerequisite(Fighter), Traits.traitPrerequisite(CombatChallenge)],
  effects: [],
})

export const PotentChallenge = Traits.defineTrait('feat/potent-challenge', {
  name: 'Potent Challenge',
  description:
    '**Prerequisites:** Con 15, fighter, Combat Challenge class feature\n\nIf you hit a foe with an attack granted by your Combat Challenge class feature, add your Constitution modifier to the damage roll.\n\n**Special:** This benefit applies only to attacks made with two-handed weapons.',
  archetypes: [Feat],
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
  archetypes: [Feat],
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
