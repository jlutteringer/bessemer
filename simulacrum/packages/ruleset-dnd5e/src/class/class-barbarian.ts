import { Abilities, Tags, Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/tag/saving-throw-proficiency'
import { Class } from '@simulacrum/ruleset-dnd5e/tag'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/tag/skill-proficiency'
import * as Spells from '@simulacrum/ruleset-dnd5e/tag/spell'
import { SelectFeat } from '@simulacrum/ruleset-dnd5e/tag/feat'
import { WeaponMasteryLoadout } from '@simulacrum/ruleset-dnd5e/loadout'
import { CharacterOptions } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import * as ActionTypes from '@simulacrum/ruleset-dnd5e/action-type'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { Patches } from '@bessemer/cornerstone'

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('barbarian/select-skill-proficiency', {
  name: 'Skill Proficiency',
  filter: {
    tags: [SkillProficiencies.SkillProficiency],
    specificOptions: [
      SkillProficiencies.AnimalHandling,
      SkillProficiencies.Athletics,
      SkillProficiencies.Intimidation,
      SkillProficiencies.Nature,
      SkillProficiencies.Perception,
      SkillProficiencies.Survival,
    ],
  },
})

// FUTURE stub: Armor Class isn't adjusted for Unarmored Defense yet
export const UnarmoredDefense = Traits.defineTrait('barbarian/unarmored-defense', {
  name: 'Unarmored Defense',
  description:
    'While you wear no armor, your base Armor Class equals **10 + your Dexterity modifier + your Constitution modifier**. You can still use a Shield and keep this benefit.',
  effects: [],
})

export const WeaponMastery = Traits.defineTrait('barbarian/weapon-mastery', {
  name: 'Weapon Mastery',
  description:
    'Your training with weapons lets you use the mastery properties of **two kinds** of Simple or Martial **Melee** weapons of your choice, such as Greataxes and Handaxes. Whenever you finish a Long Rest, you can practice weapon drills and change one of those choices.\n\nYou can use the mastery properties of more kinds of weapons as you gain Barbarian levels: three at level 4 and four at level 10.',
  effects: [CharacterEffects.gainLoadoutSlot(WeaponMasteryLoadout), CharacterEffects.gainLoadoutSlot(WeaponMasteryLoadout)],
})

export const Level1 = Traits.defineTrait('barbarian/level-1', {
  name: 'Barbarian',
  description:
    'A fierce warrior fueled by a primal **Rage**, shrugging off blows and fighting with savage strength.\n\n**Saving Throws:** Strength and Constitution. **Armor:** Light and Medium armor, and Shields. **Weapons:** Simple and Martial weapons.',
  tags: [Class],
  effects: [
    CharacterEffects.gainTrait(SavingThrowProficiencies.Strength),
    CharacterEffects.gainTrait(SavingThrowProficiencies.Constitution),
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(12))),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainTrait(UnarmoredDefense),
    CharacterEffects.gainTrait(WeaponMastery),
  ],
})

export const Rage = Abilities.defineAbility('barbarian/rage', {
  name: 'Rage',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  effects: [
    CharacterEffects.descriptive("As a **Bonus Action**, if you aren't wearing Heavy armor, you enter a primal Rage."),
    CharacterEffects.descriptive('**Damage Resistance:** while raging, you have Resistance to Bludgeoning, Piercing, and Slashing damage.'),
    CharacterEffects.descriptive(
      '**Rage Damage:** while raging, your Strength-based attacks with weapons or Unarmed Strikes deal **+2** damage (rising as you gain Barbarian levels).'
    ),
    CharacterEffects.descriptive('**Strength Advantage:** while raging, you have Advantage on Strength checks and saves.'),
    CharacterEffects.descriptive("**No Concentration or Spells:** while raging, you can't concentrate or cast spells."),
    CharacterEffects.descriptive(
      'The Rage lasts until the end of your next turn, and you can keep extending it a round at a time (up to 10 minutes) by attacking an enemy, forcing an enemy to make a save, or using a Bonus Action. It ends early if you put on Heavy armor or are Incapacitated.'
    ),
    CharacterEffects.descriptive(
      'You have **two** uses, regaining one when you finish a Short Rest and all of them when you finish a Long Rest. You gain more uses as you gain Barbarian levels (three at level 3).'
    ),
  ],
  resource: {
    // Barbarian levels add uses with ModifyResourcePool effects (a third at level 3, rising to six by level 17)
    size: 2,
    refresh: [
      { period: GameTimeUnit.LongRest, amount: RelativeAmount.All },
      { period: GameTimeUnit.ShortRest, amount: 1 },
    ],
  },
  costs: [{ cost: 1 }],
  actions: [{ name: 'Enter Rage', action: ActionTypes.BonusAction }],
})

export const DangerSense = Traits.defineTrait('barbarian/danger-sense', {
  name: 'Danger Sense',
  description: "An uncanny sense of when things aren't right gives you **Advantage on Dexterity saving throws**, unless you're Incapacitated.",
  effects: [],
})

export const Level2 = Traits.defineTrait('barbarian/level-2', {
  name: 'Barbarian (2)',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(7))),
    CharacterEffects.gainTrait(DangerSense),
  ],
})

export const RecklessAttack = Abilities.defineAbility('barbarian/reckless-attack', {
  name: 'Reckless Attack',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  effects: [
    CharacterEffects.descriptive(
      'When you make your first attack roll on your turn, you can choose to attack recklessly. Until the start of your next turn, you have **Advantage on attack rolls using Strength**, but attack rolls against you also have Advantage.'
    ),
  ],
  actions: [{ name: 'Attack Recklessly', action: ActionTypes.Free }],
})

export const BarbarianSubclass = Tags.defineTraitTag('barbarian/subclass', { name: 'Barbarian Subclass' })
export const SelectBarbarianSubclass = CharacterOptions.selectTraitOption('barbarian/select-subclass', {
  name: 'Barbarian Subclass',
  filter: {
    tags: [BarbarianSubclass],
  },
})

export const PrimalKnowledge = Traits.defineTrait('barbarian/primal-knowledge', {
  name: 'Primal Knowledge',
  description:
    'You gain proficiency in **another skill** from the Barbarian skill list.\n\nWhile your Rage is active, you can make Acrobatics, Intimidation, Perception, Stealth, and Survival checks as **Strength** checks, channeling primal power through your body.',
  effects: [CharacterEffects.gainCharacterOption(SelectSkillProficiency)],
})

export const Level3 = Traits.defineTrait('barbarian/level-3', {
  name: 'Barbarian (3)',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(7))),
    CharacterEffects.gainCharacterOption(SelectBarbarianSubclass),
    CharacterEffects.gainTrait(PrimalKnowledge),
    CharacterEffects.modifyResourcePool(Rage.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const Frenzy = Traits.defineTrait('barbarian/frenzy', {
  name: 'Frenzy',
  description:
    'If you use Reckless Attack while your Rage is active, the first target you hit on your turn with a Strength-based attack takes extra damage: roll a number of **d6s equal to your Rage Damage bonus**. The damage is the same type as the weapon or Unarmed Strike.',
  effects: [],
})

export const PathOfTheBerserker = Traits.defineTrait('barbarian/path-of-the-berserker', {
  name: 'Path of the Berserker',
  description: 'Barbarians who channel their Rage into **untrammeled violence**, thrilling in the chaos of battle.',
  tags: [BarbarianSubclass],
  effects: [CharacterEffects.gainTrait(Frenzy)],
})

export const AnimalSpeaker = Traits.defineTrait('barbarian/animal-speaker', {
  name: 'Animal Speaker',
  description: 'You can cast **Beast Sense** and **Speak with Animals**, but only as Rituals. Wisdom is your spellcasting ability for them.',
  effects: [CharacterEffects.gainAbility(Spells.BeastSense), CharacterEffects.gainAbility(Spells.SpeakWithAnimals)],
})

export const RageOfTheWilds = Traits.defineTrait('barbarian/rage-of-the-wilds', {
  name: 'Rage of the Wilds',
  description:
    'Each time you activate your Rage, choose one of these for its duration:\n\n**Bear:** you have Resistance to every damage type except Force, Necrotic, Psychic, and Radiant.\n\n**Eagle:** you can Disengage and Dash as part of the Bonus Action that starts the Rage, and can take both together as a Bonus Action while it lasts.\n\n**Wolf:** your allies have Advantage on attack rolls against your enemies within 5 feet of you.',
  effects: [],
})

export const PathOfTheWildHeart = Traits.defineTrait('barbarian/path-of-the-wild-heart', {
  name: 'Path of the Wild Heart',
  description: 'Barbarians who see themselves as **kin to animals**, speaking with them and drawing on their might when they Rage.',
  tags: [BarbarianSubclass],
  effects: [CharacterEffects.gainTrait(AnimalSpeaker), CharacterEffects.gainTrait(RageOfTheWilds)],
})

export const VitalityOfTheTree = Traits.defineTrait('barbarian/vitality-of-the-tree', {
  name: 'Vitality of the Tree',
  description:
    '**Vitality Surge:** when you activate your Rage, you gain Temporary Hit Points equal to your Barbarian level.\n\n**Life-Giving Force:** at the start of each of your turns while raging, you can give another creature within 10 feet Temporary Hit Points equal to a number of **d6s equal to your Rage Damage bonus**. Any left when your Rage ends vanish.',
  effects: [],
})

export const PathOfTheWorldTree = Traits.defineTrait('barbarian/path-of-the-world-tree', {
  name: 'Path of the World Tree',
  description:
    'Barbarians whose Rage connects them to **Yggdrasil**, the cosmic tree linking the planes, drawing on its magic for vitality and travel.',
  tags: [BarbarianSubclass],
  effects: [CharacterEffects.gainTrait(VitalityOfTheTree)],
})

export const DivineFury = Traits.defineTrait('barbarian/divine-fury', {
  name: 'Divine Fury',
  description:
    'On each of your turns while your Rage is active, the first creature you hit with a weapon or an Unarmed Strike takes extra **1d6 + half your Barbarian level** (rounded down) damage, Necrotic or Radiant (your choice each time).',
  effects: [],
})

export const PathOfTheZealot = Traits.defineTrait('barbarian/path-of-the-zealot', {
  name: 'Path of the Zealot',
  description: 'Barbarians who rage in **ecstatic union with a god**, infused with divine power and often allied with its priests.',
  tags: [BarbarianSubclass],
  effects: [CharacterEffects.gainTrait(DivineFury)],
})

export const WarriorOfTheGods = Abilities.defineAbility('barbarian/warrior-of-the-gods', {
  name: 'Warrior of the Gods',
  prerequisites: [Traits.traitPrerequisite(PathOfTheZealot)],
  effects: [
    CharacterEffects.descriptive(
      'You have a pool of **four d12s** to heal yourself. As a **Bonus Action**, spend any number of them, roll them, and regain that many Hit Points. The pool refills when you finish a Long Rest.\n\nThe pool grows by one die at Barbarian levels 6, 12, and 17.'
    ),
  ],
  resource: {
    size: 4,
    refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }],
  },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Use Warrior of the Gods',
      action: ActionTypes.BonusAction,
    },
  ],
})

export const Level4 = Traits.defineTrait('barbarian/level-4', {
  name: 'Barbarian (4)',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(7))),
    // Ability Score Improvement
    CharacterEffects.gainCharacterOption(SelectFeat),
    CharacterEffects.gainLoadoutSlot(WeaponMasteryLoadout),
  ],
})

// FUTURE stub: Speed isn't adjusted for Fast Movement yet
export const FastMovement = Traits.defineTrait('barbarian/fast-movement', {
  name: 'Fast Movement',
  description: "Your Speed increases by **10 feet** while you aren't wearing Heavy armor.",
  effects: [],
})

export const Level5 = Traits.defineTrait('barbarian/level-5', {
  name: 'Barbarian (5)',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(7))),
    CharacterEffects.gainTrait(FastMovement),
  ],
})

// FUTURE stub: Extra Attack isn't modelled yet
export const ExtraAttack = Abilities.defineAbility('barbarian/extra-attack', {
  name: 'Extra Attack',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [CharacterEffects.descriptive('You can attack **twice**, instead of once, whenever you take the Attack action on your turn.')],
})
