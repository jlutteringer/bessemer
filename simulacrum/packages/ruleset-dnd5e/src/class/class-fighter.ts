import { Abilities, Tags, Attributes, CharacterOptions, Effects, Traits, CharacterValues } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/tag/saving-throw-proficiency'
import { Class } from '@simulacrum/ruleset-dnd5e/tag'
import { SelectFightingStyle } from '@simulacrum/ruleset-dnd5e/tag/fighting-style'
import { WeaponMasteryLoadout } from '@simulacrum/ruleset-dnd5e/loadout'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/tag/skill-proficiency'
import { SelectArtisansTools } from '@simulacrum/ruleset-dnd5e/tag/artisans-tools'
import { SelectManeuver, SuperiorityDice } from '@simulacrum/ruleset-dnd5e/tag/maneuver'
import { SelectFeat } from '@simulacrum/ruleset-dnd5e/tag/feat'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import { AbilityPatchProps } from '@simulacrum/ruleset/ability'
import * as ActionTypes from '@simulacrum/ruleset-dnd5e/action-type'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Expressions } from '@bessemer/cornerstone/expression'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { Patches } from '@bessemer/cornerstone'

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('fighter/select-skill-proficiency', {
  name: 'Skill Proficiency',
  filter: {
    tags: [SkillProficiencies.SkillProficiency],
    specificOptions: [
      SkillProficiencies.Acrobatics,
      SkillProficiencies.AnimalHandling,
      SkillProficiencies.Athletics,
      SkillProficiencies.History,
      SkillProficiencies.Insight,
      SkillProficiencies.Intimidation,
      SkillProficiencies.Persuasion,
      SkillProficiencies.Perception,
      SkillProficiencies.Survival,
    ],
  },
})

export const WeaponMastery = Traits.defineTrait('fighter/weapon-mastery', {
  name: 'Weapon Mastery',
  description:
    'Your training with weapons lets you use the mastery properties of **three kinds** of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those choices.\n\nYou can use the mastery properties of more kinds of weapons as you gain Fighter levels: four at level 4, five at level 10, and six at level 16.',
  effects: [
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
  ],
})

export const Level1 = Traits.defineTrait('fighter/level-1', {
  name: 'Fighter',
  description: 'A master of martial combat, at home with **any weapon** and **any armor**.',
  tags: [Class],
  effects: [
    Effects.gainTrait(SavingThrowProficiencies.Strength),
    Effects.gainTrait(SavingThrowProficiencies.Constitution),
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(10))),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectFightingStyle),
    Effects.gainTrait(WeaponMastery),
  ],
})

export const SecondWind = Abilities.defineAbility('fighter/second-wind', {
  name: 'Second Wind',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  effects: [
    Effects.descriptive(
      'You draw on a reserve of stamina to regain Hit Points equal to **1d10 + your Fighter level**.\n\nYou can use this feature twice. You regain one expended use when you finish a Short Rest and all expended uses when you finish a Long Rest. The number of uses increases as you gain Fighter levels (three at level 4 and four at level 10).'
    ),
  ],
  resource: {
    size: 2,
    refresh: [
      {
        period: GameTimeUnit.LongRest,
        amount: RelativeAmount.All,
      },
      {
        period: GameTimeUnit.ShortRest,
        amount: 1,
      },
    ],
  },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Use Second Wind',
      action: ActionTypes.BonusAction,
    },
  ],
})

export const TacticalMind = Traits.defineTrait('fighter/tactical-mind', {
  name: 'Tactical Mind',
  description:
    "When you fail an ability check, you can expend a use of your **Second Wind** to roll **1d10** and add it to the check, potentially turning the failure into a success.\n\nIf the check still fails, the use of Second Wind isn't expended.",
  effects: [
    Effects.modifyAbility(
      SecondWind,
      Attributes.modifier(
        Patches.patch<AbilityPatchProps>({
          actions: Patches.concatenate([
            {
              name: 'Tactical Mind',
              description: "When you fail an ability check, roll **1d10** and add it to the check. If it still fails, the use isn't expended.",
              action: ActionTypes.Free,
              costs: [{ cost: 1 }],
            },
          ]),
        })
      )
    ),
  ],
})

export const Level2 = Traits.defineTrait('fighter/level-2', {
  name: 'Fighter (2)',
  prerequisites: [Expressions.contains(CharacterValues.Traits, [Level1.id])],
  tags: [Class],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(6))), Effects.gainTrait(TacticalMind)],
})

export const ActionSurge = Abilities.defineAbility('fighter/action-surge', {
  name: 'Action Surge',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  effects: [
    Effects.descriptive(
      "On your turn, you can push yourself beyond your normal limits to take **one additional action**, as long as it isn't the Magic action.\n\nOnce you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest, but only once on the same turn."
    ),
  ],
  resource: {
    size: 1,
    refresh: [
      {
        period: GameTimeUnit.ShortRest,
        amount: RelativeAmount.All,
      },
    ],
  },
  costs: [{ cost: 1 }],
  actions: [
    {
      action: ActionTypes.Free,
    },
  ],
})

export const FighterSubclass = Tags.defineTraitTag('fighter/subclass', { name: 'Fighter Subclass' })
export const SelectFighterSubclass = CharacterOptions.selectTraitOption('fighter/select-subclass', {
  name: 'Fighter Subclass',
  filter: {
    tags: [FighterSubclass],
  },
})

export const Level3 = Traits.defineTrait('fighter/level-3', {
  name: 'Fighter (3)',
  prerequisites: [Expressions.contains(CharacterValues.Traits, [Level2.id])],
  tags: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.gainCharacterOption(SelectFighterSubclass),
  ],
})

export const CombatSuperiority = Traits.defineTrait('fighter/combat-superiority', {
  name: 'Combat Superiority',
  description:
    'You learn **three maneuvers** of your choice, fueled by special dice called Superiority Dice. You can use only one maneuver per attack. Each time you gain a Fighter level, you can replace one maneuver you know with a different one.\n\n**Superiority Dice:** you have **four** Superiority Dice, which are d8s. A die is expended when you use it, and you regain all of them when you finish a Short or Long Rest.\n\n**Saving Throws:** if a maneuver requires a saving throw, the DC equals 8 + your Strength or Dexterity modifier (your choice) + your Proficiency Bonus.',
  effects: [
    Effects.gainResourcePool(SuperiorityDice),
    Effects.gainCharacterOption(SelectManeuver),
    Effects.gainCharacterOption(SelectManeuver),
    Effects.gainCharacterOption(SelectManeuver),
  ],
})

export const BattleMaster = Traits.defineTrait('fighter/battle-master', {
  name: 'Battle Master',
  tags: [FighterSubclass],
  effects: [
    Effects.gainTrait(CombatSuperiority),
    // Student of War
    Effects.gainCharacterOption(SelectArtisansTools),
    Effects.gainCharacterOption(SelectSkillProficiency),
  ],
})

export const Champion = Traits.defineTrait('fighter/champion', {
  name: 'Champion',
  tags: [FighterSubclass],
  effects: [Effects.descriptive('Improved Critical!'), Effects.descriptive('Remarkable Athlete!')],
})

export const EldritchKnight = Traits.defineTrait('fighter/eldritch-knight', {
  name: 'Eldritch Knight',
  tags: [FighterSubclass],
  effects: [Effects.descriptive('Spells!'), Effects.descriptive('War Bond!')],
})

export const PsiWarrior = Traits.defineTrait('fighter/psi-warrior', {
  name: 'Psi Warrior',
  tags: [FighterSubclass],
  effects: [Effects.descriptive('Psionic Power!')],
})

export const Level4 = Traits.defineTrait('fighter/level-4', {
  name: 'Fighter (4)',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  tags: [Class],
  effects: [
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
    Effects.gainCharacterOption(SelectFeat),
    Effects.modifyResourcePool(SecondWind.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const TacticalShift = Traits.defineTrait('fighter/tactical-shift', {
  name: 'Tactical Shift',
  description:
    'Whenever you activate your **Second Wind** with a Bonus Action, you can move up to **half your Speed** without provoking Opportunity Attacks.',
  effects: [
    Effects.modifyAbility(
      SecondWind,
      Attributes.modifier(
        Patches.patch<AbilityPatchProps>({
          effects: Patches.concatenate([
            Effects.descriptive(
              '**Tactical Shift:** when you use Second Wind, you can also move up to **half your Speed** without provoking Opportunity Attacks.'
            ),
          ]),
        })
      )
    ),
  ],
})

export const Level5 = Traits.defineTrait('fighter/level-5', {
  name: 'Fighter (5)',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  tags: [Class],
  effects: [Effects.gainTrait(TacticalShift)],
})

export const ExtraAttack = Abilities.defineAbility('fighter/extra-attack', {
  name: 'Extra Attack',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.descriptive('You can attack **twice**, instead of once, whenever you take the Attack action on your turn.')],
})
