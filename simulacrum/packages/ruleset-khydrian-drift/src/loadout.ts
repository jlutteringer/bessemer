import { Loadout } from '@simulacrum/ruleset'

export const GeneralLoadoutSlot = Loadout.defineLoadoutType('general-slot', { name: 'Abilities' })

export const WeaponLoadout = Loadout.defineLoadoutType('weapon', { name: 'Weapons' })

export const ArmorLoadout = Loadout.defineLoadoutType('armor', { name: 'Armor' })

export const CyberwareLoadout = Loadout.defineLoadoutType('cyberware', { name: 'Cyberware' })
