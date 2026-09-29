import { Archetypes, Effects, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'

export const FightingStyle = Archetypes.defineArchetype('81126abc-71f9-4586-9c92-8272a9d2cff1', { name: 'Fighting Style' })

export const SelectFightingStyle = CharacterOptions.selectTraitOption('0dc1e769-c1a7-42aa-bb9b-67972b6e2216', { archetypes: [FightingStyle] })

export const Archery = Traits.defineTrait('c34e35a7-4753-4e6b-8138-70708c622597', {
  name: 'Archery',
  description: '',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Archery!')],
})

export const BlindFighting = Traits.defineTrait('3ccda400-0d2c-4d77-ba4f-b8822a1ffeeb', {
  name: 'Blind Fighting',
  description: '',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('BlindFighting!')],
})

export const Defense = Traits.defineTrait('b0729a45-8f19-4e72-adca-58350bdf945d', {
  name: 'Defense',
  description: '',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Defense!')],
})

export const Dueling = Traits.defineTrait('5fb2fd0f-ace5-4454-8425-b348650082a7', {
  name: 'Dueling',
  description: '',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Dueling!')],
})

export const GreatWeaponFighting = Traits.defineTrait('8371fc5e-025d-482a-9cd7-55510038f97d', {
  name: 'Great Weapon Fighting',
  description: '',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('GreatWeaponFighting!')],
})

export const Interception = Traits.defineTrait('37dd1a94-0cf6-4fe1-8bad-fc92cbcc731c', {
  name: 'Interception',
  description: '',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Interception!')],
})

export const Protection = Traits.defineTrait('80d27328-ee61-4230-9c79-1443049f504c', {
  name: 'Protection',
  description: '',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Protection!')],
})

export const ThrownWeaponFighting = Traits.defineTrait('4d7e79a6-ebc2-41c2-ab43-b734ae454717', {
  name: 'Thrown Weapon Fighting',
  description: '',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('ThrownWeaponFighting!')],
})

export const TwoWeaponFighting = Traits.defineTrait('f215cc99-6eab-4bf0-be91-3026839576c8', {
  name: 'Two-Weapon Fighting',
  description: '',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('TwoWeaponFighting!')],
})

export const UnarmedFighting = Traits.defineTrait('2827ec67-59ae-4b34-956f-8d13a6af11d3', {
  name: 'Unarmed Fighting',
  description: '',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('UnarmedFighting!')],
})
