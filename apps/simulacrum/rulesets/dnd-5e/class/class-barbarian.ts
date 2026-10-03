import { Abilities, Archetypes, Attributes, Effects, Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'
import * as SkillProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/skill-proficiency'
import * as Spells from '@simulacrum/rulesets/dnd-5e/archetype/spell'
import { SelectFeat } from '@simulacrum/rulesets/dnd-5e/archetype/feat'
import { WeaponMasteryLoadout } from '@simulacrum/rulesets/dnd-5e/loadout'
import { CharacterOptions } from '@simulacrum/common/character'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { ActionType } from '@simulacrum/common/ability'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/common/types'
import { ResourcePool } from '@simulacrum/common/resource-pool'
import { Patches } from '@bessemer/cornerstone'

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('barbarian/select-skill-proficiency', {
  archetypes: [SkillProficiencies.SkillProficiency],
  specificOptions: [
    SkillProficiencies.AnimalHandling,
    SkillProficiencies.Athletics,
    SkillProficiencies.Intimidation,
    SkillProficiencies.Nature,
    SkillProficiencies.Perception,
    SkillProficiencies.Survival,
  ],
})

export const Rage = Abilities.defineAbility('barbarian/rage', {
  name: 'Rage',
  effects: [
    Effects.descriptive("<p>As a <strong>Bonus Action</strong>, if you aren't wearing Heavy armor, you enter a primal Rage.</p>"),
    Effects.descriptive(
      '<p><strong>Damage Resistance:</strong> while raging, you have Resistance to Bludgeoning, Piercing, and Slashing damage.</p>'
    ),
    Effects.descriptive(
      '<p><strong>Rage Damage:</strong> while raging, your Strength-based attacks with weapons or Unarmed Strikes deal <strong>+2</strong> damage (rising as you gain Barbarian levels).</p>'
    ),
    Effects.descriptive('<p><strong>Strength Advantage:</strong> while raging, you have Advantage on Strength checks and saves.</p>'),
    Effects.descriptive("<p><strong>No Concentration or Spells:</strong> while raging, you can't concentrate or cast spells.</p>"),
    Effects.descriptive(
      '<p>The Rage lasts until the end of your next turn, and you can keep extending it a round at a time (up to 10 minutes) by attacking an enemy, forcing an enemy to make a save, or using a Bonus Action. It ends early if you put on Heavy armor or are Incapacitated.</p>'
    ),
    Effects.descriptive(
      '<p>You have <strong>two</strong> uses, regaining one when you finish a Short Rest and all of them when you finish a Long Rest. You gain more uses as you gain Barbarian levels (three at level 3).</p>'
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
  actions: [{ name: 'Enter Rage', action: ActionType.Bonus }],
})

// FUTURE stub: Armor Class isn't adjusted for Unarmored Defense yet
export const UnarmoredDefense = Traits.defineTrait('barbarian/unarmored-defense', {
  name: 'Unarmored Defense',
  description:
    '<p>While you wear no armor, your base Armor Class equals <strong>10 + your Dexterity modifier + your Constitution modifier</strong>. You can still use a Shield and keep this benefit.</p>',
  effects: [],
})

export const WeaponMastery = Traits.defineTrait('barbarian/weapon-mastery', {
  name: 'Weapon Mastery',
  description:
    '<p>Your training with weapons lets you use the mastery properties of <strong>two kinds</strong> of Simple or Martial <strong>Melee</strong> weapons of your choice, such as Greataxes and Handaxes. Whenever you finish a Long Rest, you can practice weapon drills and change one of those choices.</p><p>You can use the mastery properties of more kinds of weapons as you gain Barbarian levels: three at level 4 and four at level 10.</p>',
  effects: [Effects.gainLoadoutSlot(WeaponMasteryLoadout), Effects.gainLoadoutSlot(WeaponMasteryLoadout)],
})

export const Level1 = Traits.defineTrait('barbarian/level-1', {
  name: 'Barbarian',
  description:
    '<p>A fierce warrior fueled by a primal <strong>Rage</strong>, shrugging off blows and fighting with savage strength.</p><p><strong>Saving Throws:</strong> Strength and Constitution. <strong>Armor:</strong> Light and Medium armor, and Shields. <strong>Weapons:</strong> Simple and Martial weapons.</p>',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(12))),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainAbility(Rage),
    Effects.gainTrait(UnarmoredDefense),
    Effects.gainTrait(WeaponMastery),
  ],
})

export const DangerSense = Traits.defineTrait('barbarian/danger-sense', {
  name: 'Danger Sense',
  description:
    "<p>An uncanny sense of when things aren't right gives you <strong>Advantage on Dexterity saving throws</strong>, unless you're Incapacitated.</p>",
  effects: [],
})

export const RecklessAttack = Abilities.defineAbility('barbarian/reckless-attack', {
  name: 'Reckless Attack',
  effects: [
    Effects.descriptive(
      '<p>When you make your first attack roll on your turn, you can choose to attack recklessly. Until the start of your next turn, you have <strong>Advantage on attack rolls using Strength</strong>, but attack rolls against you also have Advantage.</p>'
    ),
  ],
  actions: [{ name: 'Attack Recklessly', action: ActionType.Free }],
})

export const Level2 = Traits.defineTrait('barbarian/level-2', {
  name: 'Barbarian (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(7))),
    Effects.gainTrait(DangerSense),
    Effects.gainAbility(RecklessAttack),
  ],
})

export const BarbarianSubclass = Archetypes.defineArchetype('barbarian/subclass', { name: 'Barbarian Subclass' })
export const SelectBarbarianSubclass = CharacterOptions.selectTraitOption('barbarian/select-subclass', { archetypes: [BarbarianSubclass] })

export const PrimalKnowledge = Traits.defineTrait('barbarian/primal-knowledge', {
  name: 'Primal Knowledge',
  description:
    '<p>You gain proficiency in <strong>another skill</strong> from the Barbarian skill list.</p><p>While your Rage is active, you can make Acrobatics, Intimidation, Perception, Stealth, and Survival checks as <strong>Strength</strong> checks, channeling primal power through your body.</p>',
  effects: [Effects.gainCharacterOption(SelectSkillProficiency)],
})

export const Level3 = Traits.defineTrait('barbarian/level-3', {
  name: 'Barbarian (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(7))),
    Effects.gainCharacterOption(SelectBarbarianSubclass),
    Effects.gainTrait(PrimalKnowledge),
    Effects.modifyResourcePool(Rage.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const Frenzy = Traits.defineTrait('barbarian/frenzy', {
  name: 'Frenzy',
  description:
    '<p>If you use Reckless Attack while your Rage is active, the first target you hit on your turn with a Strength-based attack takes extra damage: roll a number of <strong>d6s equal to your Rage Damage bonus</strong>. The damage is the same type as the weapon or Unarmed Strike.</p>',
  effects: [],
})

export const PathOfTheBerserker = Traits.defineTrait('barbarian/path-of-the-berserker', {
  name: 'Path of the Berserker',
  description: '<p>Barbarians who channel their Rage into <strong>untrammeled violence</strong>, thrilling in the chaos of battle.</p>',
  archetypes: [BarbarianSubclass],
  effects: [Effects.gainTrait(Frenzy)],
})

export const AnimalSpeaker = Traits.defineTrait('barbarian/animal-speaker', {
  name: 'Animal Speaker',
  description:
    '<p>You can cast <strong>Beast Sense</strong> and <strong>Speak with Animals</strong>, but only as Rituals. Wisdom is your spellcasting ability for them.</p>',
  effects: [Effects.gainAbility(Spells.BeastSense), Effects.gainAbility(Spells.SpeakWithAnimals)],
})

export const RageOfTheWilds = Traits.defineTrait('barbarian/rage-of-the-wilds', {
  name: 'Rage of the Wilds',
  description:
    '<p>Each time you activate your Rage, choose one of these for its duration:</p><p><strong>Bear:</strong> you have Resistance to every damage type except Force, Necrotic, Psychic, and Radiant.</p><p><strong>Eagle:</strong> you can Disengage and Dash as part of the Bonus Action that starts the Rage, and can take both together as a Bonus Action while it lasts.</p><p><strong>Wolf:</strong> your allies have Advantage on attack rolls against your enemies within 5 feet of you.</p>',
  effects: [],
})

export const PathOfTheWildHeart = Traits.defineTrait('barbarian/path-of-the-wild-heart', {
  name: 'Path of the Wild Heart',
  description:
    '<p>Barbarians who see themselves as <strong>kin to animals</strong>, speaking with them and drawing on their might when they Rage.</p>',
  archetypes: [BarbarianSubclass],
  effects: [Effects.gainTrait(AnimalSpeaker), Effects.gainTrait(RageOfTheWilds)],
})

export const VitalityOfTheTree = Traits.defineTrait('barbarian/vitality-of-the-tree', {
  name: 'Vitality of the Tree',
  description:
    '<p><strong>Vitality Surge:</strong> when you activate your Rage, you gain Temporary Hit Points equal to your Barbarian level.</p><p><strong>Life-Giving Force:</strong> at the start of each of your turns while raging, you can give another creature within 10 feet Temporary Hit Points equal to a number of <strong>d6s equal to your Rage Damage bonus</strong>. Any left when your Rage ends vanish.</p>',
  effects: [],
})

export const PathOfTheWorldTree = Traits.defineTrait('barbarian/path-of-the-world-tree', {
  name: 'Path of the World Tree',
  description:
    '<p>Barbarians whose Rage connects them to <strong>Yggdrasil</strong>, the cosmic tree linking the planes, drawing on its magic for vitality and travel.</p>',
  archetypes: [BarbarianSubclass],
  effects: [Effects.gainTrait(VitalityOfTheTree)],
})

export const DivineFury = Traits.defineTrait('barbarian/divine-fury', {
  name: 'Divine Fury',
  description:
    '<p>On each of your turns while your Rage is active, the first creature you hit with a weapon or an Unarmed Strike takes extra <strong>1d6 + half your Barbarian level</strong> (rounded down) damage, Necrotic or Radiant (your choice each time).</p>',
  effects: [],
})

export const WarriorOfTheGods = Abilities.defineAbility('barbarian/warrior-of-the-gods', {
  name: 'Warrior of the Gods',
  effects: [
    Effects.descriptive(
      '<p>You have a pool of <strong>four d12s</strong> to heal yourself. As a <strong>Bonus Action</strong>, spend any number of them, roll them, and regain that many Hit Points. The pool refills when you finish a Long Rest.</p><p>The pool grows by one die at Barbarian levels 6, 12, and 17.</p>'
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
      action: ActionType.Bonus,
    },
  ],
})

export const PathOfTheZealot = Traits.defineTrait('barbarian/path-of-the-zealot', {
  name: 'Path of the Zealot',
  description:
    '<p>Barbarians who rage in <strong>ecstatic union with a god</strong>, infused with divine power and often allied with its priests.</p>',
  archetypes: [BarbarianSubclass],
  effects: [Effects.gainTrait(DivineFury), Effects.gainAbility(WarriorOfTheGods)],
})

export const Level4 = Traits.defineTrait('barbarian/level-4', {
  name: 'Barbarian (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(7))),
    // Ability Score Improvement
    Effects.gainCharacterOption(SelectFeat),
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
  ],
})

// FUTURE stub: Extra Attack isn't modelled yet
export const ExtraAttack = Abilities.defineAbility('barbarian/extra-attack', {
  name: 'Extra Attack',
  effects: [Effects.descriptive('<p>You can attack <strong>twice</strong>, instead of once, whenever you take the Attack action on your turn.</p>')],
})

// FUTURE stub: Speed isn't adjusted for Fast Movement yet
export const FastMovement = Traits.defineTrait('barbarian/fast-movement', {
  name: 'Fast Movement',
  description: "<p>Your Speed increases by <strong>10 feet</strong> while you aren't wearing Heavy armor.</p>",
  effects: [],
})

export const Level5 = Traits.defineTrait('barbarian/level-5', {
  name: 'Barbarian (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(7))),
    Effects.gainAbility(ExtraAttack),
    Effects.gainTrait(FastMovement),
  ],
})
