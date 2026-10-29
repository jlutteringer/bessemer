import { Loadout } from '@simulacrum/ruleset'

export const GeneralLoadoutSlot = Loadout.defineLoadoutType('general-slot', { name: 'Abilities' })

export const WeaponLoadout = Loadout.defineLoadoutType('weapon', { name: 'Weapons' })

export const ArmorLoadout = Loadout.defineLoadoutType('armor', { name: 'Armor' })

export const CyberwareLoadout = Loadout.defineLoadoutType('cyberware', { name: 'Cyberware' })

export const SmallTechHardpoint = Loadout.defineLoadoutType('small-tech-hardpoint', { name: 'Small Tech Hardpoint' })

export const MediumTechHardpoint = Loadout.defineLoadoutType('medium-tech-hardpoint', { name: 'Medium Tech Hardpoint' })

export const LargeTechHardpoint = Loadout.defineLoadoutType('large-tech-hardpoint', { name: 'Large Tech Hardpoint' })
