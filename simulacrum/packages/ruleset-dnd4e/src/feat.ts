import { Attributes, CharacterOptions, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { Feat } from '@simulacrum/ruleset-dnd4e/tag'
import {
  Constitution,
  Dexterity,
  HealingSurges,
  HitPoints,
  Initiative,
  Intelligence,
  Perception,
  Strength,
  Wisdom,
} from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Armor from '@simulacrum/ruleset-dnd4e/armor'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import { FeatBonus } from '@simulacrum/ruleset-dnd4e/bonus-type'

export const SelectFeat = CharacterOptions.selectTraitOption('feat/select', {
  name: 'Feat',
  filter: { tags: [Feat] },
})

export const ArmorProficiencyLeather = Traits.defineTrait('feat/armor-proficiency-leather', {
  name: 'Armor Proficiency (Leather)',
  description: 'You gain training with leather armor.',
  tags: [Feat],
  effects: [CharacterEffects.gainTrait(Armor.LeatherProficiency)],
})

export const ArmorProficiencyHide = Traits.defineTrait('feat/armor-proficiency-hide', {
  name: 'Armor Proficiency (Hide)',
  description:
    '**Prerequisites:** [Str](characteristic:strength) 13, [Con](characteristic:constitution) 13, training with [leather armor](trait:armor-proficiency/leather)\n\nYou gain training with hide armor.',
  tags: [Feat],
  prerequisites: [
    Expressions.greaterThanOrEqual(Strength.variable, 13),
    Expressions.greaterThanOrEqual(Constitution.variable, 13),
    Traits.traitPrerequisite(Armor.LeatherProficiency),
  ],
  effects: [CharacterEffects.gainTrait(Armor.HideProficiency)],
})

export const ArmorProficiencyChainmail = Traits.defineTrait('feat/armor-proficiency-chainmail', {
  name: 'Armor Proficiency (Chainmail)',
  description:
    '**Prerequisites:** [Str](characteristic:strength) 13, [Con](characteristic:constitution) 13, training with [leather](trait:armor-proficiency/leather) or [hide armor](trait:armor-proficiency/hide)\n\nYou gain training with chainmail.',
  tags: [Feat],
  prerequisites: [
    Expressions.greaterThanOrEqual(Strength.variable, 13),
    Expressions.greaterThanOrEqual(Constitution.variable, 13),
    Expressions.or([Traits.traitPrerequisite(Armor.LeatherProficiency), Traits.traitPrerequisite(Armor.HideProficiency)]),
  ],
  effects: [CharacterEffects.gainTrait(Armor.ChainmailProficiency)],
})

export const ArmorProficiencyScale = Traits.defineTrait('feat/armor-proficiency-scale', {
  name: 'Armor Proficiency (Scale)',
  description:
    '**Prerequisites:** [Str](characteristic:strength) 13, [Con](characteristic:constitution) 13, training with [chainmail](trait:armor-proficiency/chainmail)\n\nYou gain training with scale armor.',
  tags: [Feat],
  prerequisites: [
    Expressions.greaterThanOrEqual(Strength.variable, 13),
    Expressions.greaterThanOrEqual(Constitution.variable, 13),
    Traits.traitPrerequisite(Armor.ChainmailProficiency),
  ],
  effects: [CharacterEffects.gainTrait(Armor.ScaleProficiency)],
})

export const ArmorProficiencyPlate = Traits.defineTrait('feat/armor-proficiency-plate', {
  name: 'Armor Proficiency (Plate)',
  description:
    '**Prerequisites:** [Str](characteristic:strength) 15, [Con](characteristic:constitution) 15, training with [scale armor](trait:armor-proficiency/scale)\n\nYou gain training with plate armor.',
  tags: [Feat],
  prerequisites: [
    Expressions.greaterThanOrEqual(Strength.variable, 15),
    Expressions.greaterThanOrEqual(Constitution.variable, 15),
    Traits.traitPrerequisite(Armor.ScaleProficiency),
  ],
  effects: [CharacterEffects.gainTrait(Armor.PlateProficiency)],
})

export const ShieldProficiencyLight = Traits.defineTrait('feat/shield-proficiency-light', {
  name: 'Shield Proficiency (Light)',
  description: '**Prerequisite:** [Str](characteristic:strength) 13\n\nYou gain proficiency with light shields.',
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Strength.variable, 13)],
  effects: [CharacterEffects.gainTrait(Armor.LightShieldProficiency)],
})

export const ShieldProficiencyHeavy = Traits.defineTrait('feat/shield-proficiency-heavy', {
  name: 'Shield Proficiency (Heavy)',
  description:
    '**Prerequisites:** [Str](characteristic:strength) 15, [Shield Proficiency (Light)](trait:feat/shield-proficiency-light)\n\nYou gain proficiency with heavy shields.',
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Strength.variable, 15), Traits.traitPrerequisite(Armor.LightShieldProficiency)],
  effects: [CharacterEffects.gainTrait(Armor.HeavyShieldProficiency)],
})

export const Toughness = Traits.defineTrait('feat/toughness', {
  name: 'Toughness',
  description:
    'When you take this feat, you gain additional hit points. You gain an additional 5 hit points at each tier of play (at 1st, 11th, and 21st level).',
  tags: [Feat],
  effects: [CharacterEffects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(5)))],
})

export const ImprovedInitiative = Traits.defineTrait('feat/improved-initiative', {
  name: 'Improved Initiative',
  description: 'You gain a +4 feat bonus to [initiative](characteristic:initiative) checks.',
  tags: [Feat],
  effects: [CharacterEffects.modifyCharacteristic(Initiative, Attributes.modifier(Patches.sum(4), { combinability: FeatBonus }))],
})

export const Durable = Traits.defineTrait('feat/durable', {
  name: 'Durable',
  description: 'Increase your number of [healing surges](characteristic:healing-surges) by two.',
  tags: [Feat],
  effects: [CharacterEffects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(2)))],
})

export const Alertness = Traits.defineTrait('feat/alertness', {
  name: 'Alertness',
  description:
    "You don't grant enemies combat advantage during surprise rounds.\n\nYou also gain a +2 feat bonus to [Perception](characteristic:skill/perception) checks.",
  tags: [Feat],
  effects: [CharacterEffects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(2), { combinability: FeatBonus }))],
})

export const SkillTraining = Traits.defineTrait('feat/skill-training', {
  name: 'Skill Training',
  description:
    'You gain training in one skill. The skill need not be on your class skill list.\n\n**Special:** You can take this feat more than once. Each time you select this feat, choose a skill in which you are not trained.',
  tags: [Feat],
  repeatable: true,
  effects: [CharacterEffects.gainCharacterOption(Skills.SelectAnySkill)],
})

export const SkillFocus = Traits.defineTrait('feat/skill-focus', {
  name: 'Skill Focus',
  description:
    '**Prerequisite:** Training in chosen skill\n\nChoose a skill in which you have training. You have a +3 feat bonus to checks with that skill.\n\n**Special:** You can take this feat more than once. Each time you select this feat, choose a different skill.',
  tags: [Feat],
  repeatable: true,
  effects: [CharacterEffects.gainCharacterOption(Skills.SelectSkillFocus)],
})

export const WeaponFocus = Traits.defineTrait('feat/weapon-focus', {
  name: 'Weapon Focus',
  description:
    'Choose a specific weapon group, such as spears or heavy blades. You gain a +1 feat bonus to damage rolls with your chosen weapon group. At 11th level, this bonus increases to +2. At 21st level, it increases to +3.\n\n**Special:** You can take this feat more than once. Each time you select this feat, choose another weapon group.',
  tags: [Feat],
  repeatable: true,
  effects: [],
})

export const WeaponProficiency = Traits.defineTrait('feat/weapon-proficiency', {
  name: 'Weapon Proficiency',
  description:
    'You gain proficiency in a single weapon of your choice.\n\n**Special:** You can take this feat more than once. Each time you select this feat, choose another weapon.',
  tags: [Feat],
  repeatable: true,
  effects: [],
})

export const PowerAttack = Traits.defineTrait('feat/power-attack', {
  name: 'Power Attack',
  description:
    '**Prerequisite:** [Str](characteristic:strength) 15\n\nWhen making a melee attack, you can take a –2 penalty to the attack roll. If the attack hits, you gain a +2 bonus to the damage roll (or a +3 bonus to the damage roll with a two-handed weapon).\n\nThis extra damage increases by level, as shown on the table below, but the attack penalty remains the same.\n\n| Level | Extra Damage (Two-Handed Weapon) |\n| :--- | :--- |\n| 1st–10th | +2 (+3) |\n| 11th–20th | +4 (+6) |\n| 21st–30th | +6 (+9) |',
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Strength.variable, 15)],
  effects: [],
})

export const RitualCaster = Traits.defineTrait('feat/ritual-caster', {
  name: 'Ritual Caster',
  description:
    '**Prerequisite:** Trained in [Arcana](characteristic:skill/arcana) or [Religion](characteristic:skill/religion)\n\nYou can master and perform rituals of your level or lower. See [Chapter 10](content:rituals) for information on acquiring, mastering, and performing rituals. Even though some rituals use the [Heal](characteristic:skill/heal) skill or the [Nature](characteristic:skill/nature) skill, the Arcana skill or the Religion skill is required to understand how to perform rituals.',
  tags: [Feat],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Skills.TrainedArcana), Traits.traitPrerequisite(Skills.TrainedReligion)])],
  effects: [],
})

export const JackOfAllTrades = Traits.defineTrait('feat/jack-of-all-trades', {
  name: 'Jack of All Trades',
  description: '**Prerequisite:** [Int](characteristic:intelligence) 13\n\nYou gain a +2 feat bonus to all untrained skill checks.',
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Intelligence.variable, 13)],
  effects: [],
})

export const Linguist = Traits.defineTrait('feat/linguist', {
  name: 'Linguist',
  description:
    '**Prerequisite:** [Int](characteristic:intelligence) 13\n\nChoose three languages. You can now speak, read, and write those languages fluently.\n\n**Special:** You can take this feat more than once. Each time you select this feat, choose three new languages to learn.',
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Intelligence.variable, 13)],
  repeatable: true,
  effects: [],
})

export const BurningBlizzard = Traits.defineTrait('feat/burning-blizzard', {
  name: 'Burning Blizzard',
  description:
    '**Prerequisites:** [Int](characteristic:intelligence) 13, [Wis](characteristic:wisdom) 13\n\nYou gain a +1 feat bonus to damage rolls when you use a power that has the acid or cold keyword.\n\nAt 11th level, this bonus increases to +2. At 21st level, it increases to +3.',
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Intelligence.variable, 13), Expressions.greaterThanOrEqual(Wisdom.variable, 13)],
  effects: [],
})

export const CombatReflexes = Traits.defineTrait('feat/combat-reflexes', {
  name: 'Combat Reflexes',
  description: '**Prerequisite:** [Dex](characteristic:dexterity) 13\n\nYou gain a +1 bonus to opportunity attack rolls.',
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Dexterity.variable, 13)],
  effects: [],
})

export const DefensiveMobility = Traits.defineTrait('feat/defensive-mobility', {
  name: 'Defensive Mobility',
  description: 'You gain a +2 bonus to [AC](characteristic:armor-class) against opportunity attacks.',
  tags: [Feat],
  effects: [],
})

export const AllFeats = [
  ArmorProficiencyLeather,
  ArmorProficiencyHide,
  ArmorProficiencyChainmail,
  ArmorProficiencyScale,
  ArmorProficiencyPlate,
  ShieldProficiencyLight,
  ShieldProficiencyHeavy,
  Toughness,
  ImprovedInitiative,
  Durable,
  Alertness,
  SkillTraining,
  SkillFocus,
  WeaponFocus,
  WeaponProficiency,
  PowerAttack,
  RitualCaster,
  JackOfAllTrades,
  Linguist,
  BurningBlizzard,
  CombatReflexes,
  DefensiveMobility,
]
