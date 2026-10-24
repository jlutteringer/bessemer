import { Abilities, Tags, Effects, ResourcePools } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-dnd5e/action-type'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { CharacterOptions } from '@simulacrum/ruleset'

// Maneuvers are abilities that spend the Battle Master's Superiority Dice. A Battle Master learns them as it gains levels (and can swap
// one each time it gains a Fighter level), so they're chosen rather than prepared in a loadout.
export const Maneuver = Tags.defineAbilityTag('maneuver', { name: 'Maneuver' })

export const SelectManeuver = CharacterOptions.selectAbilityOption('maneuver/select', {
  name: 'Maneuvers',
  filter: { tags: [Maneuver] },
})

// FUTURE the dice grow to d10s at Fighter level 10 and d12s at 18, and the Battle Master gains more at levels 7 and 15
export const SuperiorityDice = ResourcePools.defineResourcePool('maneuver/superiority-dice', {
  name: 'Superiority Dice',
  size: 4,
  refresh: [
    { period: GameTimeUnit.ShortRest, amount: RelativeAmount.All },
    { period: GameTimeUnit.LongRest, amount: RelativeAmount.All },
  ],
})

export const Ambush = Abilities.defineAbility('maneuver/ambush', {
  name: 'Ambush',
  universal: false,
  effects: [
    Effects.descriptive(
      'When you make a Dexterity (Stealth) check or an Initiative roll, you can expend a Superiority Die and add it to the roll, unless you have the Incapacitated condition.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const BaitAndSwitch = Abilities.defineAbility('maneuver/bait-and-switch', {
  name: 'Bait and Switch',
  universal: false,
  effects: [
    Effects.descriptive(
      "When you're within 5 feet of a willing creature on your turn, you can expend a Superiority Die and swap places with it, as long as you spend at least 5 feet of movement and it isn't Incapacitated. This movement doesn't provoke Opportunity Attacks.\n\nRoll the die: you or the other creature (your choice) gain a bonus to **Armor Class** equal to the roll until the start of your next turn."
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const CommandersStrike = Abilities.defineAbility('maneuver/commanders-strike', {
  name: "Commander's Strike",
  universal: false,
  effects: [
    Effects.descriptive(
      'When you take the Attack action on your turn, you can give up one of your attacks to direct a companion who can see or hear you. That creature can immediately use its **Reaction** to make one attack with a weapon or an Unarmed Strike, adding your Superiority Die to the damage roll.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const CommandingPresence = Abilities.defineAbility('maneuver/commanding-presence', {
  name: 'Commanding Presence',
  universal: false,
  effects: [
    Effects.descriptive(
      'When you make a Charisma (Intimidation, Performance, or Persuasion) check, you can expend a Superiority Die and add it to the check.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const DisarmingAttack = Abilities.defineAbility('maneuver/disarming-attack', {
  name: 'Disarming Attack',
  universal: false,
  effects: [
    Effects.descriptive(
      "When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The target must succeed on a **Strength** saving throw or drop one object of your choice that it's holding, which lands in its space."
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const DistractingStrike = Abilities.defineAbility('maneuver/distracting-strike', {
  name: 'Distracting Strike',
  universal: false,
  effects: [
    Effects.descriptive(
      "When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The next attack roll made against the target by someone other than you has **Advantage** if it's made before the start of your next turn."
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const EvasiveFootwork = Abilities.defineAbility('maneuver/evasive-footwork', {
  name: 'Evasive Footwork',
  universal: false,
  effects: [
    Effects.descriptive(
      'You can expend a Superiority Die and take the Disengage action. Roll the die and add the number to your **Armor Class** until the start of your next turn.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.BonusAction, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const FeintingAttack = Abilities.defineAbility('maneuver/feinting-attack', {
  name: 'Feinting Attack',
  universal: false,
  effects: [
    Effects.descriptive(
      'You can expend a Superiority Die to feint at one creature within 5 feet of you. You have **Advantage** on your next attack roll against it this turn, and if that attack hits, you add the die to the damage roll.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.BonusAction, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const GoadingAttack = Abilities.defineAbility('maneuver/goading-attack', {
  name: 'Goading Attack',
  universal: false,
  effects: [
    Effects.descriptive(
      'When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The target must succeed on a **Wisdom** saving throw or have **Disadvantage** on attack rolls against anyone other than you until the end of your next turn.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const LungingAttack = Abilities.defineAbility('maneuver/lunging-attack', {
  name: 'Lunging Attack',
  universal: false,
  effects: [
    Effects.descriptive(
      "You can expend a Superiority Die and take the Dash action. If you move at least 5 feet in a straight line immediately before hitting with a melee attack as part of the Attack action this turn, you add the die to that attack's damage roll."
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.BonusAction, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const ManeuveringAttack = Abilities.defineAbility('maneuver/maneuvering-attack', {
  name: 'Maneuvering Attack',
  universal: false,
  effects: [
    Effects.descriptive(
      'When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. Choose a willing creature who can see or hear you: it can use its **Reaction** to move up to half its Speed without provoking Opportunity Attacks from the target.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const MenacingAttack = Abilities.defineAbility('maneuver/menacing-attack', {
  name: 'Menacing Attack',
  universal: false,
  effects: [
    Effects.descriptive(
      'When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The target must succeed on a **Wisdom** saving throw or have the **Frightened** condition until the end of your next turn.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const Parry = Abilities.defineAbility('maneuver/parry', {
  name: 'Parry',
  universal: false,
  effects: [
    Effects.descriptive(
      'When another creature damages you with a melee attack roll, you can expend a Superiority Die to reduce the damage by the number rolled plus your Strength or Dexterity modifier.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Reaction, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const PrecisionAttack = Abilities.defineAbility('maneuver/precision-attack', {
  name: 'Precision Attack',
  universal: false,
  effects: [
    Effects.descriptive(
      'When you miss with an attack roll, you can expend a Superiority Die, roll it, and add it to the attack roll, potentially turning the miss into a hit.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const PushingAttack = Abilities.defineAbility('maneuver/pushing-attack', {
  name: 'Pushing Attack',
  universal: false,
  effects: [
    Effects.descriptive(
      'When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. If the target is Large or smaller, it must succeed on a **Strength** saving throw or be pushed up to **15 feet** straight away from you.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const Rally = Abilities.defineAbility('maneuver/rally', {
  name: 'Rally',
  universal: false,
  effects: [
    Effects.descriptive(
      'You can expend a Superiority Die to bolster an ally who can see or hear you. That creature gains **Temporary Hit Points** equal to the roll plus half your Fighter level (rounded down).'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.BonusAction, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const Riposte = Abilities.defineAbility('maneuver/riposte', {
  name: 'Riposte',
  universal: false,
  effects: [
    Effects.descriptive(
      'When a creature misses you with a melee attack roll, you can expend a Superiority Die to make a melee attack against it with a weapon or an Unarmed Strike. If you hit, you add the die to the damage roll.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Reaction, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const SweepingAttack = Abilities.defineAbility('maneuver/sweeping-attack', {
  name: 'Sweeping Attack',
  universal: false,
  effects: [
    Effects.descriptive(
      'When you hit a creature with a melee attack roll using a weapon or an Unarmed Strike, you can expend a Superiority Die to try to damage another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the roll, of the same type the original attack dealt.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const TacticalAssessment = Abilities.defineAbility('maneuver/tactical-assessment', {
  name: 'Tactical Assessment',
  universal: false,
  effects: [
    Effects.descriptive(
      'When you make an Intelligence (History or Investigation) check or a Wisdom (Insight) check, you can expend a Superiority Die and add it to the check.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})

export const TripAttack = Abilities.defineAbility('maneuver/trip-attack', {
  name: 'Trip Attack',
  universal: false,
  effects: [
    Effects.descriptive(
      'When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. If the target is Large or smaller, it must succeed on a **Dexterity** saving throw or have the **Prone** condition.'
    ),
  ],
  tags: [Maneuver],
  actions: [{ action: ActionTypes.Free, costs: [{ cost: 1, resource: SuperiorityDice }] }],
})
