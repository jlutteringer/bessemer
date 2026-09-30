import { Archetypes, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'

// Maneuvers use the Battle Master's Superiority Dice. Saving throws against them use DC 8 + Strength or Dexterity modifier +
// Proficiency Bonus. FUTURE superiority dice and save DCs aren't modelled yet
export const Maneuver = Archetypes.defineArchetype('maneuver', { name: 'Maneuver' })

export const SelectManeuver = CharacterOptions.selectTraitOption('maneuver/select', { archetypes: [Maneuver] })

export const Ambush = Traits.defineTrait('maneuver/ambush', {
  name: 'Ambush',
  description:
    '<p>When you make a Dexterity (Stealth) check or an Initiative roll, you can expend a Superiority Die and add it to the roll, unless you have the Incapacitated condition.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const BaitandSwitch = Traits.defineTrait('maneuver/baitand-switch', {
  name: 'Bait and Switch',
  description:
    "<p>When you're within 5 feet of a willing creature on your turn, you can expend a Superiority Die and swap places with it, as long as you spend at least 5 feet of movement and it isn't Incapacitated. This movement doesn't provoke Opportunity Attacks.</p><p>Roll the die: you or the other creature (your choice) gain a bonus to <strong>Armor Class</strong> equal to the roll until the start of your next turn.</p>",
  archetypes: [Maneuver],
  effects: [],
})

export const CommandersStrike = Traits.defineTrait('maneuver/commanders-strike', {
  name: "Commander's Strike",
  description:
    '<p>When you take the Attack action on your turn, you can give up one of your attacks to direct a companion who can see or hear you. That creature can immediately use its <strong>Reaction</strong> to make one attack with a weapon or an Unarmed Strike, adding your Superiority Die to the damage roll.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const CommandingPresence = Traits.defineTrait('maneuver/commanding-presence', {
  name: 'Commanding Presence',
  description:
    '<p>When you make a Charisma (Intimidation, Performance, or Persuasion) check, you can expend a Superiority Die and add it to the check.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const DisarmingAttack = Traits.defineTrait('maneuver/disarming-attack', {
  name: 'Disarming Attack',
  description:
    "<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The target must succeed on a <strong>Strength</strong> saving throw or drop one object of your choice that it's holding, which lands in its space.</p>",
  archetypes: [Maneuver],
  effects: [],
})

export const DistractingStrike = Traits.defineTrait('maneuver/distracting-strike', {
  name: 'Distracting Strike',
  description:
    "<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The next attack roll made against the target by someone other than you has <strong>Advantage</strong> if it's made before the start of your next turn.</p>",
  archetypes: [Maneuver],
  effects: [],
})

export const EvasiveFootwork = Traits.defineTrait('maneuver/evasive-footwork', {
  name: 'Evasive Footwork',
  description:
    '<p>As a <strong>Bonus Action</strong>, you can expend a Superiority Die and take the Disengage action. Roll the die and add the number to your <strong>Armor Class</strong> until the start of your next turn.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const FeintingAttack = Traits.defineTrait('maneuver/feinting-attack', {
  name: 'Feinting Attack',
  description:
    '<p>As a <strong>Bonus Action</strong>, you can expend a Superiority Die to feint at one creature within 5 feet of you. You have <strong>Advantage</strong> on your next attack roll against it this turn, and if that attack hits, you add the die to the damage roll.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const GoadingAttack = Traits.defineTrait('maneuver/goading-attack', {
  name: 'Goading Attack',
  description:
    '<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The target must succeed on a <strong>Wisdom</strong> saving throw or have <strong>Disadvantage</strong> on attack rolls against anyone other than you until the end of your next turn.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const LungingAttack = Traits.defineTrait('maneuver/lunging-attack', {
  name: 'Lunging Attack',
  description:
    "<p>As a <strong>Bonus Action</strong>, you can expend a Superiority Die and take the Dash action. If you move at least 5 feet in a straight line immediately before hitting with a melee attack as part of the Attack action this turn, you add the die to that attack's damage roll.</p>",
  archetypes: [Maneuver],
  effects: [],
})

export const ManeuveringAttack = Traits.defineTrait('maneuver/maneuvering-attack', {
  name: 'Maneuvering Attack',
  description:
    '<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. Choose a willing creature who can see or hear you: it can use its <strong>Reaction</strong> to move up to half its Speed without provoking Opportunity Attacks from the target.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const MenacingAttack = Traits.defineTrait('maneuver/menacing-attack', {
  name: 'Menacing Attack',
  description:
    '<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The target must succeed on a <strong>Wisdom</strong> saving throw or have the <strong>Frightened</strong> condition until the end of your next turn.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const Parry = Traits.defineTrait('maneuver/parry', {
  name: 'Parry',
  description:
    '<p>When another creature damages you with a melee attack roll, you can take a <strong>Reaction</strong> and expend a Superiority Die to reduce the damage by the number rolled plus your Strength or Dexterity modifier.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const PrecisionAttack = Traits.defineTrait('maneuver/precision-attack', {
  name: 'Precision Attack',
  description:
    '<p>When you miss with an attack roll, you can expend a Superiority Die, roll it, and add it to the attack roll, potentially turning the miss into a hit.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const PushingAttack = Traits.defineTrait('maneuver/pushing-attack', {
  name: 'Pushing Attack',
  description:
    '<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. If the target is Large or smaller, it must succeed on a <strong>Strength</strong> saving throw or be pushed up to <strong>15 feet</strong> straight away from you.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const Rally = Traits.defineTrait('maneuver/rally', {
  name: 'Rally',
  description:
    '<p>As a <strong>Bonus Action</strong>, you can expend a Superiority Die to bolster an ally who can see or hear you. That creature gains <strong>Temporary Hit Points</strong> equal to the roll plus half your Fighter level (rounded down).</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const Riposte = Traits.defineTrait('maneuver/riposte', {
  name: 'Riposte',
  description:
    '<p>When a creature misses you with a melee attack roll, you can take a <strong>Reaction</strong> and expend a Superiority Die to make a melee attack against it with a weapon or an Unarmed Strike. If you hit, you add the die to the damage roll.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const SweepingAttack = Traits.defineTrait('maneuver/sweeping-attack', {
  name: 'Sweeping Attack',
  description:
    '<p>When you hit a creature with a melee attack roll using a weapon or an Unarmed Strike, you can expend a Superiority Die to try to damage another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the roll, of the same type the original attack dealt.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const TacticalAssessment = Traits.defineTrait('maneuver/tactical-assessment', {
  name: 'Tactical Assessment',
  description:
    '<p>When you make an Intelligence (History or Investigation) check or a Wisdom (Insight) check, you can expend a Superiority Die and add it to the check.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const TripAttack = Traits.defineTrait('maneuver/trip-attack', {
  name: 'Trip Attack',
  description:
    '<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. If the target is Large or smaller, it must succeed on a <strong>Dexterity</strong> saving throw or have the <strong>Prone</strong> condition.</p>',
  archetypes: [Maneuver],
  effects: [],
})
