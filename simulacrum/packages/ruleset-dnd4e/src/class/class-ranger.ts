import { Abilities, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import { AtWillPower, Class, ClassFeature, Feat } from '@simulacrum/ruleset-dnd4e/tag'
import { Dexterity, Fortitude, HealingSurges, HitPoints, Reflex } from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Armor from '@simulacrum/ruleset-dnd4e/armor'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import * as Powers from '@simulacrum/ruleset-dnd4e/power'
import { DefensiveMobility, Toughness } from '@simulacrum/ruleset-dnd4e/feat'
import { Human } from '@simulacrum/ruleset-dnd4e/race'

export const ArcherFightingStyle = Traits.defineTrait('ranger/fighting-style/archer', {
  name: 'Archer Fighting Style',
  description: 'Because of your focus on ranged attacks, you gain Defensive Mobility as a bonus feat.',
  tags: [ClassFeature],
  effects: [Effects.gainTrait(DefensiveMobility)],
})

export const TwoBladeFightingStyle = Traits.defineTrait('ranger/fighting-style/two-blade', {
  name: 'Two-Blade Fighting Style',
  description:
    'Because of your focus on two-weapon melee attacks, you can wield a one-handed weapon in your off hand as if it were an off-hand weapon. (Make sure to designate on your character sheet which weapon is main and which is off-hand.) In addition, you gain Toughness as a bonus feat.',
  tags: [ClassFeature],
  effects: [Effects.gainTrait(Toughness)],
})

export const SelectFightingStyle = CharacterOptions.selectTraitOption('ranger/select-fighting-style', {
  name: 'Fighting Style',
  description: 'Choose one of the following fighting styles and gain its benefit.',
  filter: { specificOptions: [ArcherFightingStyle, TwoBladeFightingStyle] },
})

export const HuntersQuarry = Traits.defineTrait('ranger/hunters-quarry', {
  name: "Hunter's Quarry",
  description:
    "Once per turn as a minor action, you can designate the enemy nearest to you as your quarry.\n\nOnce per round, you deal extra damage to your quarry. The extra damage is based on your level. If you can make multiple attacks in a round, you decide which attack to apply the extra damage to after all the attacks are rolled.\n\nThe hunter's quarry effect remains active until the end of the encounter, until the quarry is defeated, or until you designate a different target as your quarry.\n\nYou can designate one enemy as your quarry at a time.\n\n| Level | Hunter's Quarry Extra Damage |\n|---|---|\n| 1st–10th | +1d6 |\n| 11th–20th | +2d6 |\n| 21st–30th | +3d6 |",
  tags: [ClassFeature],
  effects: [],
})

export const HuntersQuarryPower = Abilities.defineAbility('ranger/power/hunters-quarry', {
  name: "Hunter's Quarry",
  tags: [AtWillPower],
  prerequisites: [Traits.traitPrerequisite(HuntersQuarry)],
  effects: [
    Effects.descriptive(
      "**Ranger Class Feature**\n\n**At-Will**\n\n**Minor Action**\n\nOnce per turn as a minor action, you can designate the enemy nearest to you as your quarry.\n\nOnce per round, you deal extra damage to your quarry. The extra damage is based on your level. If you can make multiple attacks in a round, you decide which attack to apply the extra damage to after all the attacks are rolled.\n\nThe hunter's quarry effect remains active until the end of the encounter, until the quarry is defeated, or until you designate a different target as your quarry.\n\nYou can designate one enemy as your quarry at a time.\n\n| Level | Hunter's Quarry Extra Damage |\n|---|---|\n| 1st–10th | +1d6 |\n| 11th–20th | +2d6 |\n| 21st–30th | +3d6 |"
    ),
  ],
  actions: [{ name: "Hunter's Quarry", action: ActionTypes.MinorAction }],
})

export const PrimeShot = Traits.defineTrait('ranger/prime-shot', {
  name: 'Prime Shot',
  description: 'If none of your allies are nearer to your target than you are, you receive a +1 bonus to ranged attack rolls against that target.',
  tags: [ClassFeature],
  effects: [],
})

export const SelectDungeoneeringOrNature = CharacterOptions.selectTraitOption('ranger/select-dungeoneering-or-nature', {
  name: 'Trained Skill: Dungeoneering or Nature',
  filter: { specificOptions: [Skills.TrainedDungeoneering, Skills.TrainedNature] },
})

export const SelectSkill = CharacterOptions.selectTraitOption('ranger/select-skill', {
  name: 'Trained Skill',
  filter: {
    specificOptions: [
      Skills.TrainedAcrobatics,
      Skills.TrainedAthletics,
      Skills.TrainedDungeoneering,
      Skills.TrainedEndurance,
      Skills.TrainedHeal,
      Skills.TrainedNature,
      Skills.TrainedPerception,
      Skills.TrainedStealth,
    ],
  },
})

export const Ranger = Traits.defineTrait('ranger', {
  name: 'Ranger',
  description:
    '**Striker.** You concentrate on either ranged attacks or two-weapon melee fighting to deal a lot of damage to one enemy at a time. Your attacks rely on speed and mobility, since you prefer to use hit-and-run tactics whenever possible.\n\n**Power Source:** Martial · **Key Abilities:** Strength, Dexterity, Wisdom\n\n**Armor Proficiencies:** Cloth, leather, hide\n\n**Weapon Proficiencies:** Simple melee, military melee, simple ranged, military ranged\n\n**Bonus to Defense:** +1 Fortitude, +1 Reflex · **Hit Points:** 12 + Constitution score at 1st level, 5 per level gained · **Healing Surges:** 6 + Constitution modifier',
  tags: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.sum([7, NumericExpressions.multiply([CharacterValues.Level, 5])])))
    ),
    Effects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(6))),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(1))),
    Effects.gainCharacterOption(SelectFightingStyle),
    Effects.gainTrait(HuntersQuarry),
    Effects.gainTrait(PrimeShot),
    Effects.gainTrait(Armor.LeatherProficiency),
    Effects.gainTrait(Armor.HideProficiency),
    Effects.gainCharacterOption(SelectDungeoneeringOrNature),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(Powers.SelectAtWillAttack),
    Effects.gainCharacterOption(Powers.SelectAtWillAttack),
    Effects.gainCharacterOption(Powers.SelectEncounterAttack1),
    Effects.gainCharacterOption(Powers.SelectDailyAttack1),
    Effects.conditional(Traits.traitPrerequisite(Human), [Effects.gainCharacterOption(SelectSkill)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [Effects.gainCharacterOption(Powers.SelectUtility2)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [Effects.gainCharacterOption(Powers.SelectEncounterAttack3)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(Powers.SelectDailyAttack5)]),
  ],
})

export const AgileHunter = Traits.defineTrait('feat/agile-hunter', {
  name: 'Agile Hunter',
  description:
    "**Prerequisites:** Dex 15, ranger, Hunter's Quarry class feature\n\nWhen you score a critical hit with a melee attack against the target of your Hunter's Quarry, you can shift as a free action, and the enemy takes a –2 penalty on attack rolls against you until the end of your next turn.",
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Dexterity.variable, 15), Traits.traitPrerequisite(Ranger), Traits.traitPrerequisite(HuntersQuarry)],
  effects: [],
})

export const LethalHunter = Traits.defineTrait('feat/lethal-hunter', {
  name: 'Lethal Hunter',
  description:
    "**Prerequisites:** Ranger, Hunter's Quarry class feature\n\nThe extra damage dice from your Hunter's Quarry class feature increase from d6s to d8s.",
  tags: [Feat],
  prerequisites: [Traits.traitPrerequisite(Ranger), Traits.traitPrerequisite(HuntersQuarry)],
  effects: [],
})

export const AllRangerTraits = [
  Ranger,
  ArcherFightingStyle,
  TwoBladeFightingStyle,
  HuntersQuarry,
  HuntersQuarryPower,
  PrimeShot,
  AgileHunter,
  LethalHunter,
]
