import { Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { Class, ClassFeature, Feat } from '@simulacrum/ruleset-dnd4e/archetype'
import { Charisma, HealingSurges, HitPoints, Reflex, Strength } from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Armor from '@simulacrum/ruleset-dnd4e/armor'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import * as Powers from '@simulacrum/ruleset-dnd4e/power'
import { Human } from '@simulacrum/ruleset-dnd4e/race'

export const FirstStrike = Traits.defineTrait('rogue/first-strike', {
  name: 'First Strike',
  description: 'At the start of an encounter, you have combat advantage against any creatures that have not yet acted in that encounter.',
  archetypes: [ClassFeature],
  effects: [],
})

export const ArtfulDodger = Traits.defineTrait('rogue/tactics/artful-dodger', {
  name: 'Artful Dodger',
  description:
    'You gain a bonus to AC equal to your Charisma modifier against opportunity attacks.\n\nThis choice also provides bonuses to certain rogue powers. Individual powers detail the effects (if any) your Rogue Tactics selection has on them.',
  archetypes: [ClassFeature],
  effects: [],
})

export const BrutalScoundrel = Traits.defineTrait('rogue/tactics/brutal-scoundrel', {
  name: 'Brutal Scoundrel',
  description:
    'You gain a bonus to Sneak Attack damage equal to your Strength modifier.\n\nThis choice also provides bonuses to certain rogue powers. Individual powers detail the effects (if any) your Rogue Tactics selection has on them.',
  archetypes: [ClassFeature],
  effects: [],
})

export const SelectRogueTactics = CharacterOptions.selectTraitOption('rogue/select-tactics', {
  name: 'Rogue Tactics',
  description:
    'Rogues operate in a variety of ways. Some rogues use their natural charm and cunning trickery to deceive foes. Others rely on brute strength to overcome their enemies.\n\nChoose one of the following options.',
  filter: { specificOptions: [ArtfulDodger, BrutalScoundrel] },
})

export const RogueWeaponTalent = Traits.defineTrait('rogue/weapon-talent', {
  name: 'Rogue Weapon Talent',
  description:
    'When you wield a shuriken, your weapon damage die increases by one size. When you wield a dagger, you gain a +1 bonus to attack rolls.',
  archetypes: [ClassFeature],
  effects: [],
})

export const SneakAttack = Traits.defineTrait('rogue/sneak-attack', {
  name: 'Sneak Attack',
  description:
    'Once per round, when you have combat advantage against an enemy and are using a weapon from the light blade, the crossbow, or the sling weapon group, an attack you make against that enemy deals extra damage if the attack hits. You decide whether to apply the extra damage after making the damage roll. As you advance in level, your extra damage increases.\n\n| Level | Sneak Attack Damage |\n|---|---|\n| 1st–10th | +2d6 |\n| 11th–20th | +3d6 |\n| 21st–30th | +5d6 |',
  archetypes: [ClassFeature],
  effects: [],
})

export const SelectSkill = CharacterOptions.selectTraitOption('rogue/select-skill', {
  name: 'Trained Skill',
  filter: {
    specificOptions: [
      Skills.TrainedAcrobatics,
      Skills.TrainedAthletics,
      Skills.TrainedBluff,
      Skills.TrainedDungeoneering,
      Skills.TrainedInsight,
      Skills.TrainedIntimidate,
      Skills.TrainedPerception,
      Skills.TrainedStealth,
      Skills.TrainedStreetwise,
      Skills.TrainedThievery,
    ],
  },
})

export const Rogue = Traits.defineTrait('rogue', {
  name: 'Rogue',
  description:
    '**Striker.** You dart in to attack, do massive damage, and then retreat to safety. You do best when teamed with a defender to flank enemies.\n\n**Power Source:** Martial · **Key Abilities:** Dexterity, Strength, Charisma\n\n**Armor Proficiencies:** Cloth, leather\n\n**Weapon Proficiencies:** Dagger, hand crossbow, shuriken, sling, short sword\n\n**Bonus to Defense:** +2 Reflex · **Hit Points:** 12 + Constitution score at 1st level, 5 per level gained · **Healing Surges:** 6 + Constitution modifier',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.sum([7, NumericExpressions.multiply([CharacterValues.Level, 5])])))
    ),
    Effects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(6))),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(2))),
    Effects.gainTrait(FirstStrike),
    Effects.gainCharacterOption(SelectRogueTactics),
    Effects.gainTrait(RogueWeaponTalent),
    Effects.gainTrait(SneakAttack),
    Effects.gainTrait(Armor.LeatherProficiency),
    Effects.gainTrait(Skills.TrainedStealth),
    Effects.gainTrait(Skills.TrainedThievery),
    Effects.gainCharacterOption(SelectSkill),
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

export const Backstabber = Traits.defineTrait('feat/backstabber', {
  name: 'Backstabber',
  description:
    '**Prerequisites:** Rogue, Sneak Attack class feature\n\nThe extra damage dice from your Sneak Attack class feature increase from d6s to d8s.',
  archetypes: [Feat],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(SneakAttack)],
  effects: [],
})

export const PressTheAdvantage = Traits.defineTrait('feat/press-the-advantage', {
  name: 'Press the Advantage',
  description:
    '**Prerequisites:** Cha 15, rogue\n\nIf you score a critical hit while you have combat advantage, you gain combat advantage against the target until the end of your next turn.',
  archetypes: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Charisma.variable, 15), Traits.traitPrerequisite(Rogue)],
  effects: [],
})

export const SurpriseKnockdown = Traits.defineTrait('feat/surprise-knockdown', {
  name: 'Surprise Knockdown',
  description: '**Prerequisites:** Str 15, rogue\n\nIf you score a critical hit while you have combat advantage, you knock the target prone.',
  archetypes: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Strength.variable, 15), Traits.traitPrerequisite(Rogue)],
  effects: [],
})

export const AllRogueTraits = [
  Rogue,
  FirstStrike,
  ArtfulDodger,
  BrutalScoundrel,
  RogueWeaponTalent,
  SneakAttack,
  Backstabber,
  PressTheAdvantage,
  SurpriseKnockdown,
]
