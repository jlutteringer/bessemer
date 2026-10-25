import { Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Feat, Race, RacialTrait } from '@simulacrum/ruleset-dnd4e/tag'
import { SelectFeat } from '@simulacrum/ruleset-dnd4e/feat'
import { Constitution, Dungeoneering, Endurance, Fortitude, Reflex, Speed, Will, Wisdom } from '@simulacrum/ruleset-dnd4e/characteristic'
import { SelectHumanAbilityBonus } from '@simulacrum/ruleset-dnd4e/ability-score'
import { SelectAtWillAttack } from '@simulacrum/ruleset-dnd4e/power'
import { RacialBonus } from '@simulacrum/ruleset-dnd4e/bonus-type'

export const SelectRace = CharacterOptions.selectTraitOption('race/select', {
  name: 'Race',
  filter: { tags: [Race] },
})

// Human: the bonus skill is granted by each class, since it comes from the class skill list

export const Human = Traits.defineTrait('race/human', {
  name: 'Human',
  description:
    '**Average Height:** 5´ 6˝–6´ 2˝\n\n**Average Weight:** 135–220 lb.\n\n**Ability Scores:** +2 to one ability score of your choice\n\n**Size:** Medium\n\n**Speed:** 6 squares\n\n**Vision:** Normal\n\n**Languages:** Common, choice of one other\n\n**Bonus At-Will Power:** You know one extra at-will power from your class.\n\n**Bonus Feat:** You gain a bonus feat at 1st level. You must meet the feat’s prerequisites.\n\n**Bonus Skill:** You gain training in one additional skill from your class skill list.\n\n**Human Defense Bonuses:** +1 to [Fortitude](characteristic:fortitude), [Reflex](characteristic:reflex), and [Will](characteristic:will) defenses.',
  tags: [Race],
  effects: [
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(6))),
    Effects.gainCharacterOption(SelectHumanAbilityBonus),
    Effects.gainCharacterOption(SelectAtWillAttack),
    Effects.gainCharacterOption(SelectFeat),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(1))),
  ],
})

export const CastIronStomach = Traits.defineTrait('race/dwarf/cast-iron-stomach', {
  name: 'Cast-Iron Stomach',
  description: '+5 racial bonus to [saving throws](content:combat/saving-throws) against poison.',
  tags: [RacialTrait],
  effects: [],
})

export const DwarvenResilience = Traits.defineTrait('race/dwarf/dwarven-resilience', {
  name: 'Dwarven Resilience',
  description:
    'You can use your [second wind](ability:common/second-wind) as a [minor action](action-type:minor-action) instead of a [standard action](action-type:standard-action).',
  tags: [RacialTrait],
  effects: [],
})

export const DwarvenWeaponProficiency = Traits.defineTrait('race/dwarf/dwarven-weapon-proficiency', {
  name: 'Dwarven Weapon Proficiency',
  description: 'You gain proficiency with the throwing hammer and the warhammer.',
  tags: [RacialTrait],
  effects: [],
})

export const EncumberedSpeed = Traits.defineTrait('race/dwarf/encumbered-speed', {
  name: 'Encumbered Speed',
  description:
    'You move at your normal speed even when it would normally be reduced by armor or a heavy load. Other effects that limit speed (such as difficult terrain or magical effects) affect you normally.',
  tags: [RacialTrait],
  effects: [],
})

export const StandYourGround = Traits.defineTrait('race/dwarf/stand-your-ground', {
  name: 'Stand Your Ground',
  description:
    'When an effect forces you to move—through a pull, a push, or a slide—you can move 1 square less than the effect specifies. This means an effect that normally pulls, pushes, or slides a target 1 square does not force you to move unless you want to.\n\nIn addition, when an attack would knock you prone, you can immediately make a saving throw to avoid falling prone.',
  tags: [RacialTrait],
  effects: [],
})

export const Dwarf = Traits.defineTrait('race/dwarf', {
  name: 'Dwarf',
  description:
    '**Average Height:** 4´ 3˝–4´ 9˝\n\n**Average Weight:** 160–220 lb.\n\n**Ability Scores:** +2 [Constitution](characteristic:constitution), +2 [Wisdom](characteristic:wisdom)\n\n**Size:** Medium\n\n**Speed:** 5 squares\n\n**Vision:** Low-light\n\n**Languages:** Common, Dwarven\n\n**Skill Bonuses:** +2 [Dungeoneering](characteristic:skill/dungeoneering), +2 [Endurance](characteristic:skill/endurance)',
  tags: [Race],
  effects: [
    Effects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(2))),
    Effects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(2))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5))),
    Effects.modifyCharacteristic(Dungeoneering, Attributes.modifier(Patches.sum(2), { combinability: RacialBonus })),
    Effects.modifyCharacteristic(Endurance, Attributes.modifier(Patches.sum(2), { combinability: RacialBonus })),
    Effects.gainTrait(CastIronStomach),
    Effects.gainTrait(DwarvenResilience),
    Effects.gainTrait(DwarvenWeaponProficiency),
    Effects.gainTrait(EncumberedSpeed),
    Effects.gainTrait(StandYourGround),
  ],
})

// Racial feats

export const HumanPerseverance = Traits.defineTrait('feat/human-perseverance', {
  name: 'Human Perseverance',
  description: '**Prerequisite:** [Human](trait:race/human)\n\nYou gain a +1 feat bonus to [saving throws](content:combat/saving-throws).',
  tags: [Feat],
  prerequisites: [Traits.traitPrerequisite(Human)],
  effects: [],
})

export const ActionSurge = Traits.defineTrait('feat/action-surge', {
  name: 'Action Surge',
  description:
    '**Prerequisite:** [Human](trait:race/human)\n\nYou gain a +3 bonus to attack rolls you make during any action you gained by spending an action point.',
  tags: [Feat],
  prerequisites: [Traits.traitPrerequisite(Human)],
  effects: [],
})

export const DwarvenWeaponTraining = Traits.defineTrait('feat/dwarven-weapon-training', {
  name: 'Dwarven Weapon Training',
  description: '**Prerequisite:** [Dwarf](trait:race/dwarf)\n\nYou gain proficiency and a +2 feat bonus to damage rolls with axes and hammers.',
  tags: [Feat],
  prerequisites: [Traits.traitPrerequisite(Dwarf)],
  effects: [],
})

export const DodgeGiants = Traits.defineTrait('feat/dodge-giants', {
  name: 'Dodge Giants',
  description:
    '**Prerequisite:** [Dwarf](trait:race/dwarf)\n\nYou gain a +1 bonus to [AC](characteristic:armor-class) and [Reflex](characteristic:reflex) defense against the attacks of Large or larger foes.',
  tags: [Feat],
  prerequisites: [Traits.traitPrerequisite(Dwarf)],
  effects: [],
})

export const AllRaceTraits = [
  Human,
  Dwarf,
  CastIronStomach,
  DwarvenResilience,
  DwarvenWeaponProficiency,
  EncumberedSpeed,
  StandYourGround,
  HumanPerseverance,
  ActionSurge,
  DwarvenWeaponTraining,
  DodgeGiants,
]
