import { Abilities, Archetypes, Attributes, Effects, Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'
import { SelectFightingStyle } from '@simulacrum/rulesets/dnd-5e/archetype/fighting-style'
import { SelectWeaponMastery } from '@simulacrum/rulesets/dnd-5e/archetype/weapon-mastery'
import * as SkillProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/skill-proficiency'
import { SelectArtisansTools } from '@simulacrum/rulesets/dnd-5e/archetype/artisans-tools'
import { SelectManeuver } from '@simulacrum/rulesets/dnd-5e/archetype/maneuver'
import { SelectFeat } from '@simulacrum/rulesets/dnd-5e/archetype/feat'
import { CharacterOptions } from '@simulacrum/common/character'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { CharacterValues } from '@simulacrum/common/character/character'
import { ActionType } from '@simulacrum/common/ability'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/common/types'
import { Expressions } from '@bessemer/cornerstone/expression'
import { Patches } from '@bessemer/cornerstone'

export const SecondWind = Abilities.defineAbility('fighter/second-wind', {
  name: 'Second Wind',
  description:
    '<p>As a <strong>Bonus Action</strong>, you draw on a reserve of stamina to regain Hit Points equal to <strong>1d10 + your Fighter level</strong>.</p><p>You can use this feature twice. You regain one expended use when you finish a Short Rest and all expended uses when you finish a Long Rest. The number of uses increases as you gain Fighter levels (three at level 4 and four at level 10).</p>',
  actions: [
    {
      name: 'Use Second Wind',
      description: '',
      action: ActionType.Bonus,
      costs: [
        {
          cost: 1,
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
        },
      ],
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

export const Level1 = Traits.defineTrait('fighter/level-1', {
  name: 'Fighter',
  description: '<p>A master of martial combat, at home with <strong>any weapon</strong> and <strong>any armor</strong>.</p>',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(10))),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectFightingStyle),
    Effects.gainCharacterOption(SelectWeaponMastery),
    Effects.gainCharacterOption(SelectWeaponMastery),
    Effects.gainCharacterOption(SelectWeaponMastery),
    Effects.gainAbility(SecondWind),
  ],
})

export const ActionSurge = Abilities.defineAbility('fighter/action-surge', {
  name: 'Action Surge',
  description:
    "<p>On your turn, you can push yourself beyond your normal limits to take <strong>one additional action</strong>, as long as it isn't the Magic action.</p><p>Once you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest, but only once on the same turn.</p>",
  actions: [
    {
      action: ActionType.Bonus,
      costs: [
        {
          cost: 1,
          resource: {
            size: 1,
            refresh: [
              {
                period: GameTimeUnit.ShortRest,
                amount: RelativeAmount.All,
              },
            ],
          },
        },
      ],
    },
  ],
})

// FUTURE stub: Tactical Mind isn't modelled yet
export const TacticalMind = Abilities.defineAbility('fighter/tactical-mind', {
  name: 'Tactical Mind',
  description:
    "<p>When you fail an ability check, you can expend a use of your <strong>Second Wind</strong> to roll <strong>1d10</strong> and add it to the check, potentially turning the failure into a success.</p><p>If the check still fails, the use of Second Wind isn't expended.</p>",
  actions: [],
})

export const Level2 = Traits.defineTrait('fighter/level-2', {
  name: 'Fighter (2)',
  description: '',
  prerequisites: [Expressions.contains(CharacterValues.Traits, [Level1.id])],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.gainAbility(ActionSurge),
    Effects.gainAbility(TacticalMind),
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

export const BattleMaster = Traits.defineTrait('fighter/battle-master', {
  name: 'Battle Master',
  description: '',
  archetypes: [FighterSubclass],
  effects: [
    // Combat Superiority (FUTURE superiority dice aren't modelled yet)
    Effects.gainCharacterOption(SelectManeuver),
    Effects.gainCharacterOption(SelectManeuver),
    Effects.gainCharacterOption(SelectManeuver),
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
    // Weapon Mastery increases to four weapons
    Effects.gainCharacterOption(SelectWeaponMastery),
    // Ability Score Improvement
    Effects.gainCharacterOption(SelectFeat),
  ],
})

// FUTURE stubs: Extra Attack and Tactical Shift aren't modelled yet
export const ExtraAttack = Abilities.defineAbility('fighter/extra-attack', {
  name: 'Extra Attack',
  description: '<p>You can attack <strong>twice</strong>, instead of once, whenever you take the Attack action on your turn.</p>',
  actions: [],
})

export const TacticalShift = Abilities.defineAbility('fighter/tactical-shift', {
  name: 'Tactical Shift',
  description:
    '<p>Whenever you activate your <strong>Second Wind</strong> with a Bonus Action, you can move up to <strong>half your Speed</strong> without provoking Opportunity Attacks.</p>',
  actions: [],
})

export const Level5 = Traits.defineTrait('fighter/level-5', {
  name: 'Fighter (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [Effects.gainAbility(ExtraAttack), Effects.gainAbility(TacticalShift)],
})
