import { Abilities, Archetypes, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/archetype/saving-throw-proficiency'
import { Class } from '@simulacrum/ruleset-dnd5e/archetype'
import { SelectFightingStyle } from '@simulacrum/ruleset-dnd5e/archetype/fighting-style'
import { WeaponMasteryLoadout } from '@simulacrum/ruleset-dnd5e/loadout'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/archetype/skill-proficiency'
import { SelectArtisansTools } from '@simulacrum/ruleset-dnd5e/archetype/artisans-tools'
import { SelectManeuver, SuperiorityDice } from '@simulacrum/ruleset-dnd5e/archetype/maneuver'
import { SelectFeat } from '@simulacrum/ruleset-dnd5e/archetype/feat'
import { CharacterOptions } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import { CharacterValues } from '@simulacrum/ruleset/character'
import { Ability, ActionType } from '@simulacrum/ruleset/ability'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Expressions } from '@bessemer/cornerstone/expression'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { Patches } from '@bessemer/cornerstone'

export const SecondWind = Abilities.defineAbility('fighter/second-wind', {
  name: 'Second Wind',
  effects: [
    Effects.descriptive(
      '<p>You draw on a reserve of stamina to regain Hit Points equal to <strong>1d10 + your Fighter level</strong>.</p><p>You can use this feature twice. You regain one expended use when you finish a Short Rest and all expended uses when you finish a Long Rest. The number of uses increases as you gain Fighter levels (three at level 4 and four at level 10).</p>'
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
      action: ActionType.Bonus,
    },
  ],
})

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('fighter/select-skill-proficiency', {
  archetypes: [SkillProficiencies.SkillProficiency],
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
})

export const WeaponMastery = Traits.defineTrait('fighter/weapon-mastery', {
  name: 'Weapon Mastery',
  description:
    '<p>Your training with weapons lets you use the mastery properties of <strong>three kinds</strong> of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those choices.</p><p>You can use the mastery properties of more kinds of weapons as you gain Fighter levels: four at level 4, five at level 10, and six at level 16.</p>',
  effects: [
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
  ],
})

export const Level1 = Traits.defineTrait('fighter/level-1', {
  name: 'Fighter',
  description: '<p>A master of martial combat, at home with <strong>any weapon</strong> and <strong>any armor</strong>.</p>',
  archetypes: [Class],
  effects: [
    Effects.gainTrait(SavingThrowProficiencies.Strength),
    Effects.gainTrait(SavingThrowProficiencies.Constitution),
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(10))),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectFightingStyle),
    Effects.gainTrait(WeaponMastery),
    Effects.gainAbility(SecondWind),
  ],
})

export const ActionSurge = Abilities.defineAbility('fighter/action-surge', {
  name: 'Action Surge',
  effects: [
    Effects.descriptive(
      "<p>On your turn, you can push yourself beyond your normal limits to take <strong>one additional action</strong>, as long as it isn't the Magic action.</p><p>Once you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest, but only once on the same turn.</p>"
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
      action: ActionType.Free,
    },
  ],
})

export const TacticalMind = Traits.defineTrait('fighter/tactical-mind', {
  name: 'Tactical Mind',
  description:
    "<p>When you fail an ability check, you can expend a use of your <strong>Second Wind</strong> to roll <strong>1d10</strong> and add it to the check, potentially turning the failure into a success.</p><p>If the check still fails, the use of Second Wind isn't expended.</p>",
  effects: [
    Effects.modifyAbility(
      SecondWind,
      Attributes.modifier(
        Patches.patch<Ability>({
          actions: Patches.concatenate([
            {
              name: 'Tactical Mind',
              description:
                "<p>When you fail an ability check, roll <strong>1d10</strong> and add it to the check. If it still fails, the use isn't expended.</p>",
              action: ActionType.Free,
              costs: [{ cost: 1 }],
              targeting: {},
            },
          ]),
        })
      )
    ),
  ],
})

export const Level2 = Traits.defineTrait('fighter/level-2', {
  name: 'Fighter (2)',
  description: '',
  prerequisites: [Expressions.contains(CharacterValues.Traits, [Level1.id])],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.gainAbility(ActionSurge),
    Effects.gainTrait(TacticalMind),
  ],
})

export const FighterSubclass = Archetypes.defineArchetype('fighter/subclass', { name: 'Fighter Subclass' })
export const SelectFighterSubclass = CharacterOptions.selectTraitOption('fighter/select-subclass', { archetypes: [FighterSubclass] })

export const Level3 = Traits.defineTrait('fighter/level-3', {
  name: 'Fighter (3)',
  description: '',
  prerequisites: [Expressions.contains(CharacterValues.Traits, [Level2.id])],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.gainCharacterOption(SelectFighterSubclass),
  ],
})

export const CombatSuperiority = Traits.defineTrait('fighter/combat-superiority', {
  name: 'Combat Superiority',
  description:
    '<p>You learn <strong>three maneuvers</strong> of your choice, fueled by special dice called Superiority Dice. You can use only one maneuver per attack. Each time you gain a Fighter level, you can replace one maneuver you know with a different one.</p><p><strong>Superiority Dice:</strong> you have <strong>four</strong> Superiority Dice, which are d8s. A die is expended when you use it, and you regain all of them when you finish a Short or Long Rest.</p><p><strong>Saving Throws:</strong> if a maneuver requires a saving throw, the DC equals 8 + your Strength or Dexterity modifier (your choice) + your Proficiency Bonus.</p>',
  effects: [
    Effects.gainResourcePool(SuperiorityDice),
    Effects.gainCharacterOption(SelectManeuver),
    Effects.gainCharacterOption(SelectManeuver),
    Effects.gainCharacterOption(SelectManeuver),
  ],
})

export const BattleMaster = Traits.defineTrait('fighter/battle-master', {
  name: 'Battle Master',
  description: '',
  archetypes: [FighterSubclass],
  effects: [
    Effects.gainTrait(CombatSuperiority),
    // Student of War
    Effects.gainCharacterOption(SelectArtisansTools),
    Effects.gainCharacterOption(SelectSkillProficiency),
  ],
})

export const Champion = Traits.defineTrait('fighter/champion', {
  name: 'Champion',
  description: '',
  archetypes: [FighterSubclass],
  effects: [Effects.descriptive('Improved Critical!'), Effects.descriptive('Remarkable Athlete!')],
})

export const EldritchKnight = Traits.defineTrait('fighter/eldritch-knight', {
  name: 'Eldritch Knight',
  description: '',
  archetypes: [FighterSubclass],
  effects: [Effects.descriptive('Spells!'), Effects.descriptive('War Bond!')],
})

export const PsiWarrior = Traits.defineTrait('fighter/psi-warrior', {
  name: 'Psi Warrior',
  description: '',
  archetypes: [FighterSubclass],
  effects: [Effects.descriptive('Psionic Power!')],
})

export const Level4 = Traits.defineTrait('fighter/level-4', {
  name: 'Fighter (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
    Effects.gainCharacterOption(SelectFeat),
    Effects.modifyResourcePool(SecondWind.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const ExtraAttack = Abilities.defineAbility('fighter/extra-attack', {
  name: 'Extra Attack',
  effects: [Effects.descriptive('<p>You can attack <strong>twice</strong>, instead of once, whenever you take the Attack action on your turn.</p>')],
})

export const TacticalShift = Traits.defineTrait('fighter/tactical-shift', {
  name: 'Tactical Shift',
  description:
    '<p>Whenever you activate your <strong>Second Wind</strong> with a Bonus Action, you can move up to <strong>half your Speed</strong> without provoking Opportunity Attacks.</p>',
  effects: [
    Effects.modifyAbility(
      SecondWind,
      Attributes.modifier(
        Patches.patch<Ability>({
          effects: Patches.concatenate([
            Effects.descriptive(
              '<p><strong>Tactical Shift:</strong> when you use Second Wind, you can also move up to <strong>half your Speed</strong> without provoking Opportunity Attacks.</p>'
            ),
          ]),
        })
      )
    ),
  ],
})

export const Level5 = Traits.defineTrait('fighter/level-5', {
  name: 'Fighter (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [Effects.gainAbility(ExtraAttack), Effects.gainTrait(TacticalShift)],
})
