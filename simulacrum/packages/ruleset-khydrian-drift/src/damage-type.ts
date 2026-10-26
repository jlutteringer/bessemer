import { Damage } from '@simulacrum/ruleset'

export const Acid = Damage.defineDamageType('acid', {
  name: 'Acid',
  description: 'Corrosive chemicals, industrial solvents, and caustic compounds that eat through armor and flesh.',
})

export const Ballistic = Damage.defineDamageType('ballistic', {
  name: 'Ballistic',
  description: 'Bullets, flechettes, and other projectiles fired from guns.',
})

export const Electric = Damage.defineDamageType('electric', {
  name: 'Electric',
  description: 'Tasers, arc weapons, overloaded implants, and live wires.',
})

export const Fire = Damage.defineDamageType('fire', {
  name: 'Fire',
  description: 'Flames, incendiaries, and superheated plasma.',
})

export const Physical = Damage.defineDamageType('physical', {
  name: 'Physical',
  description: 'Blades, blunt weapons, fists, falls, and other kinetic force.',
})

export const AllDamageTypes = [Acid, Ballistic, Electric, Fire, Physical]
