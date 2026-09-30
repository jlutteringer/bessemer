import { Archetypes, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'

// Maneuvers use the Battle Master's Superiority Dice. Saving throws against them use DC 8 + Strength or Dexterity modifier +
// Proficiency Bonus. FUTURE superiority dice and save DCs aren't modelled yet
export const Maneuver = Archetypes.defineArchetype('3d29602e-eb2a-4c63-895e-16e8fd9e2225', { name: 'Maneuver' })

export const SelectManeuver = CharacterOptions.selectTraitOption('c7a1d283-8d6f-43ed-ba3b-ff6fb7949eeb', { archetypes: [Maneuver] })

export const Ambush = Traits.defineTrait('579f8980-3e79-4216-91e1-0126e3c7c303', {
  name: 'Ambush',
  description:
    '<p>When you make a Dexterity (Stealth) check or an Initiative roll, you can expend a Superiority Die and add it to the roll, unless you have the Incapacitated condition.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const BaitandSwitch = Traits.defineTrait('680f6acf-f1a5-41a4-a045-226af2c0ac02', {
  name: 'Bait and Switch',
  description:
    "<p>When you're within 5 feet of a willing creature on your turn, you can expend a Superiority Die and swap places with it, as long as you spend at least 5 feet of movement and it isn't Incapacitated. This movement doesn't provoke Opportunity Attacks.</p><p>Roll the die: you or the other creature (your choice) gain a bonus to <strong>Armor Class</strong> equal to the roll until the start of your next turn.</p>",
  archetypes: [Maneuver],
  effects: [],
})

export const CommandersStrike = Traits.defineTrait('42025973-c95e-40af-ac41-a653473f6eeb', {
  name: "Commander's Strike",
  description:
    '<p>When you take the Attack action on your turn, you can give up one of your attacks to direct a companion who can see or hear you. That creature can immediately use its <strong>Reaction</strong> to make one attack with a weapon or an Unarmed Strike, adding your Superiority Die to the damage roll.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const CommandingPresence = Traits.defineTrait('d7aea428-639f-4dec-9c43-87e33ac08894', {
  name: 'Commanding Presence',
  description:
    '<p>When you make a Charisma (Intimidation, Performance, or Persuasion) check, you can expend a Superiority Die and add it to the check.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const DisarmingAttack = Traits.defineTrait('db6151f5-8746-40b7-bc90-5adcc97f9f0b', {
  name: 'Disarming Attack',
  description:
    "<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The target must succeed on a <strong>Strength</strong> saving throw or drop one object of your choice that it's holding, which lands in its space.</p>",
  archetypes: [Maneuver],
  effects: [],
})

export const DistractingStrike = Traits.defineTrait('2e997477-5292-4e19-b070-a5ee71cf11cb', {
  name: 'Distracting Strike',
  description:
    "<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The next attack roll made against the target by someone other than you has <strong>Advantage</strong> if it's made before the start of your next turn.</p>",
  archetypes: [Maneuver],
  effects: [],
})

export const EvasiveFootwork = Traits.defineTrait('95275c19-1745-4878-97c5-47d467799c6b', {
  name: 'Evasive Footwork',
  description:
    '<p>As a <strong>Bonus Action</strong>, you can expend a Superiority Die and take the Disengage action. Roll the die and add the number to your <strong>Armor Class</strong> until the start of your next turn.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const FeintingAttack = Traits.defineTrait('0e24a419-e7f9-4371-a90a-8952cc16153b', {
  name: 'Feinting Attack',
  description:
    '<p>As a <strong>Bonus Action</strong>, you can expend a Superiority Die to feint at one creature within 5 feet of you. You have <strong>Advantage</strong> on your next attack roll against it this turn, and if that attack hits, you add the die to the damage roll.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const GoadingAttack = Traits.defineTrait('866ae9e5-0133-4697-9f52-ff94a3848dce', {
  name: 'Goading Attack',
  description:
    '<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The target must succeed on a <strong>Wisdom</strong> saving throw or have <strong>Disadvantage</strong> on attack rolls against anyone other than you until the end of your next turn.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const LungingAttack = Traits.defineTrait('f7c68376-583e-4b0c-a9a2-013dd29f051d', {
  name: 'Lunging Attack',
  description:
    "<p>As a <strong>Bonus Action</strong>, you can expend a Superiority Die and take the Dash action. If you move at least 5 feet in a straight line immediately before hitting with a melee attack as part of the Attack action this turn, you add the die to that attack's damage roll.</p>",
  archetypes: [Maneuver],
  effects: [],
})

export const ManeuveringAttack = Traits.defineTrait('8d33f8b1-ffc6-4de8-a59d-40ed18d4b29c', {
  name: 'Maneuvering Attack',
  description:
    '<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. Choose a willing creature who can see or hear you: it can use its <strong>Reaction</strong> to move up to half its Speed without provoking Opportunity Attacks from the target.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const MenacingAttack = Traits.defineTrait('8f77b00c-a26c-42a7-aa82-f42b26892d69', {
  name: 'Menacing Attack',
  description:
    '<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. The target must succeed on a <strong>Wisdom</strong> saving throw or have the <strong>Frightened</strong> condition until the end of your next turn.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const Parry = Traits.defineTrait('f4f9d400-c8e6-4220-99de-ea0216fc3a6a', {
  name: 'Parry',
  description:
    '<p>When another creature damages you with a melee attack roll, you can take a <strong>Reaction</strong> and expend a Superiority Die to reduce the damage by the number rolled plus your Strength or Dexterity modifier.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const PrecisionAttack = Traits.defineTrait('ab1195ca-d63f-4173-b698-84de4dbd6b13', {
  name: 'Precision Attack',
  description:
    '<p>When you miss with an attack roll, you can expend a Superiority Die, roll it, and add it to the attack roll, potentially turning the miss into a hit.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const PushingAttack = Traits.defineTrait('da67c1c3-dadd-461f-9c94-10e0fa19c889', {
  name: 'Pushing Attack',
  description:
    '<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. If the target is Large or smaller, it must succeed on a <strong>Strength</strong> saving throw or be pushed up to <strong>15 feet</strong> straight away from you.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const Rally = Traits.defineTrait('3c06820e-f0fd-4eff-99e9-5684c5c15fdc', {
  name: 'Rally',
  description:
    '<p>As a <strong>Bonus Action</strong>, you can expend a Superiority Die to bolster an ally who can see or hear you. That creature gains <strong>Temporary Hit Points</strong> equal to the roll plus half your Fighter level (rounded down).</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const Riposte = Traits.defineTrait('713272d9-815a-4d06-9baf-906492ccfe81', {
  name: 'Riposte',
  description:
    '<p>When a creature misses you with a melee attack roll, you can take a <strong>Reaction</strong> and expend a Superiority Die to make a melee attack against it with a weapon or an Unarmed Strike. If you hit, you add the die to the damage roll.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const SweepingAttack = Traits.defineTrait('d6c5ebb2-8ee0-4cfa-bbec-a54dd027293b', {
  name: 'Sweeping Attack',
  description:
    '<p>When you hit a creature with a melee attack roll using a weapon or an Unarmed Strike, you can expend a Superiority Die to try to damage another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the roll, of the same type the original attack dealt.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const TacticalAssessment = Traits.defineTrait('ece2f60d-e389-4f3d-b02e-7a44ab6faafd', {
  name: 'Tactical Assessment',
  description:
    '<p>When you make an Intelligence (History or Investigation) check or a Wisdom (Insight) check, you can expend a Superiority Die and add it to the check.</p>',
  archetypes: [Maneuver],
  effects: [],
})

export const TripAttack = Traits.defineTrait('b49b7407-4649-4fd5-b771-9f566e552b3b', {
  name: 'Trip Attack',
  description:
    '<p>When you hit a creature with an attack roll, you can expend a Superiority Die to add it to the damage roll. If the target is Large or smaller, it must succeed on a <strong>Dexterity</strong> saving throw or have the <strong>Prone</strong> condition.</p>',
  archetypes: [Maneuver],
  effects: [],
})
