import { Archetypes, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'

export const Maneuver = Archetypes.defineArchetype('3d29602e-eb2a-4c63-895e-16e8fd9e2225', { name: 'Maneuver' })

export const SelectManeuver = CharacterOptions.selectTraitOption('c7a1d283-8d6f-43ed-ba3b-ff6fb7949eeb', { archetypes: [Maneuver] })

export const Ambush = Traits.defineTrait('579f8980-3e79-4216-91e1-0126e3c7c303', {
  name: 'Ambush',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const BaitandSwitch = Traits.defineTrait('680f6acf-f1a5-41a4-a045-226af2c0ac02', {
  name: 'Bait and Switch',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const CommandersStrike = Traits.defineTrait('42025973-c95e-40af-ac41-a653473f6eeb', {
  name: "Commander's Strike",
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const CommandingPresence = Traits.defineTrait('d7aea428-639f-4dec-9c43-87e33ac08894', {
  name: 'Commanding Presence',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const DisarmingAttack = Traits.defineTrait('db6151f5-8746-40b7-bc90-5adcc97f9f0b', {
  name: 'Disarming Attack',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const DistractingStrike = Traits.defineTrait('2e997477-5292-4e19-b070-a5ee71cf11cb', {
  name: 'Distracting Strike',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const EvasiveFootwork = Traits.defineTrait('95275c19-1745-4878-97c5-47d467799c6b', {
  name: 'Evasive Footwork',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const FeintingAttack = Traits.defineTrait('0e24a419-e7f9-4371-a90a-8952cc16153b', {
  name: 'Feinting Attack',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const GoadingAttack = Traits.defineTrait('866ae9e5-0133-4697-9f52-ff94a3848dce', {
  name: 'Goading Attack',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const LungingAttack = Traits.defineTrait('f7c68376-583e-4b0c-a9a2-013dd29f051d', {
  name: 'Lunging Attack',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const ManeuveringAttack = Traits.defineTrait('8d33f8b1-ffc6-4de8-a59d-40ed18d4b29c', {
  name: 'Maneuvering Attack',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const MenacingAttack = Traits.defineTrait('8f77b00c-a26c-42a7-aa82-f42b26892d69', {
  name: 'Menacing Attack',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const Parry = Traits.defineTrait('f4f9d400-c8e6-4220-99de-ea0216fc3a6a', {
  name: 'Parry',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const PrecisionAttack = Traits.defineTrait('ab1195ca-d63f-4173-b698-84de4dbd6b13', {
  name: 'Precision Attack',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const PushingAttack = Traits.defineTrait('da67c1c3-dadd-461f-9c94-10e0fa19c889', {
  name: 'Pushing Attack',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const Rally = Traits.defineTrait('3c06820e-f0fd-4eff-99e9-5684c5c15fdc', {
  name: 'Rally',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const Riposte = Traits.defineTrait('713272d9-815a-4d06-9baf-906492ccfe81', {
  name: 'Riposte',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const SweepingAttack = Traits.defineTrait('d6c5ebb2-8ee0-4cfa-bbec-a54dd027293b', {
  name: 'Sweeping Attack',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const TacticalAssessment = Traits.defineTrait('ece2f60d-e389-4f3d-b02e-7a44ab6faafd', {
  name: 'Tactical Assessment',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})

export const TripAttack = Traits.defineTrait('b49b7407-4649-4fd5-b771-9f566e552b3b', {
  name: 'Trip Attack',
  description: '',
  archetypes: [Maneuver],
  effects: [],
})
