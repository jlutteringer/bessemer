import { Loadout } from '@simulacrum/ruleset'

// Prepared casters fill these slots after their daily preparations
export const ArmorLoadout = Loadout.defineLoadoutType('armor', { name: 'Armor' })
export const ShieldLoadout = Loadout.defineLoadoutType('shield', { name: 'Shield' })
export const CantripLoadout = Loadout.defineLoadoutType('prepared-cantrip', { name: 'Prepared Cantrip' })
export const SpellRank1Loadout = Loadout.defineLoadoutType('spell-slot/rank-1', { name: 'Spell Slot (Rank 1)' })
export const SpellRank2Loadout = Loadout.defineLoadoutType('spell-slot/rank-2', { name: 'Spell Slot (Rank 2)' })
export const SpellRank3Loadout = Loadout.defineLoadoutType('spell-slot/rank-3', { name: 'Spell Slot (Rank 3)' })

export const AllLoadouts = [ArmorLoadout, ShieldLoadout, CantripLoadout, SpellRank1Loadout, SpellRank2Loadout, SpellRank3Loadout]
