import { Loadout } from '@simulacrum/ruleset'

export const GeneralLoadoutSlot = Loadout.defineLoadoutType('loadout/general-slot', { name: 'General' })

export const AdvancedHardpointLoadoutSlot = Loadout.defineLoadoutType('loadout/advanced-hardpoint-slot', { name: 'Advanced Hardpoint' })

export const WeaponLoadout = Loadout.defineLoadoutType('loadout/weapon', { name: 'Weapons' })

export const CyberwareLoadout = Loadout.defineLoadoutType('loadout/cyberware', { name: 'Cyberware' })
