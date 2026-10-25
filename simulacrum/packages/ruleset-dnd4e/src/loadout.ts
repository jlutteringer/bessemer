import { Loadout } from '@simulacrum/ruleset'

export const ArmorLoadout = Loadout.defineLoadoutType('armor', { name: 'Armor' })

export const ShieldLoadout = Loadout.defineLoadoutType('shield', { name: 'Shield' })

// A wizard prepares daily and utility spells from its spellbook after each extended rest
export const PreparedDailySpell1Loadout = Loadout.defineLoadoutType('prepared-daily-spell-1', {
  name: 'Prepared Daily Spell (Level 1)',
})

export const PreparedUtilitySpell2Loadout = Loadout.defineLoadoutType('prepared-utility-spell-2', {
  name: 'Prepared Utility Spell (Level 2)',
})

export const PreparedDailySpell5Loadout = Loadout.defineLoadoutType('prepared-daily-spell-5', {
  name: 'Prepared Daily Spell (Level 5)',
})

export const PreparedUtilitySpell6Loadout = Loadout.defineLoadoutType('prepared-utility-spell-6', {
  name: 'Prepared Utility Spell (Level 6)',
})

export const PreparedDailySpell9Loadout = Loadout.defineLoadoutType('prepared-daily-spell-9', {
  name: 'Prepared Daily Spell (Level 9)',
})

export const PreparedUtilitySpell10Loadout = Loadout.defineLoadoutType('prepared-utility-spell-10', {
  name: 'Prepared Utility Spell (Level 10)',
})

export const AllLoadouts = [
  ArmorLoadout,
  ShieldLoadout,
  PreparedDailySpell1Loadout,
  PreparedUtilitySpell2Loadout,
  PreparedDailySpell5Loadout,
  PreparedUtilitySpell6Loadout,
  PreparedDailySpell9Loadout,
  PreparedUtilitySpell10Loadout,
]
