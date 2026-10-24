import { CharacterOptions } from '@simulacrum/ruleset'
import {
  AttackPower,
  AtWillPower,
  DailyPower,
  EncounterPower,
  PowerLevel1,
  PowerLevel2,
  PowerLevel3,
  PowerLevel5,
  UtilityPower,
} from '@simulacrum/ruleset-dnd4e/tag'
import { PreparedDailySpell1Loadout, PreparedDailySpell5Loadout, PreparedUtilitySpell2Loadout } from '@simulacrum/ruleset-dnd4e/loadout'

export const SelectAtWillAttack = CharacterOptions.selectAbilityOption('power/select-at-will-attack', {
  name: 'At-Will Attack Power',
  filter: { tags: [AtWillPower, AttackPower, PowerLevel1] },
})

export const SelectEncounterAttack1 = CharacterOptions.selectAbilityOption('power/select-encounter-attack-1', {
  name: 'Encounter Attack Power (Level 1)',
  filter: { tags: [EncounterPower, AttackPower, PowerLevel1] },
})

export const SelectDailyAttack1 = CharacterOptions.selectAbilityOption('power/select-daily-attack-1', {
  name: 'Daily Attack Power (Level 1)',
  filter: { tags: [DailyPower, AttackPower, PowerLevel1] },
})

export const SelectUtility2 = CharacterOptions.selectAbilityOption('power/select-utility-2', {
  name: 'Utility Power (Level 2)',
  filter: { tags: [UtilityPower, PowerLevel2] },
})

export const SelectEncounterAttack3 = CharacterOptions.selectAbilityOption('power/select-encounter-attack-3', {
  name: 'Encounter Attack Power (Level 3)',
  filter: { tags: [EncounterPower, AttackPower, PowerLevel3] },
})

export const SelectDailyAttack5 = CharacterOptions.selectAbilityOption('power/select-daily-attack-5', {
  name: 'Daily Attack Power (Level 5)',
  filter: { tags: [DailyPower, AttackPower, PowerLevel5] },
})

// A wizard adds two spells to its spellbook for each daily or utility power it gains, and prepares one of them after an extended rest
export const SelectSpellbookDaily1 = CharacterOptions.selectAbilityOption('power/select-spellbook-daily-1', {
  name: 'Spellbook: Daily Attack (Level 1)',
  filter: { tags: [DailyPower, AttackPower, PowerLevel1] },
  loadout: PreparedDailySpell1Loadout,
})

export const SelectSpellbookUtility2 = CharacterOptions.selectAbilityOption('power/select-spellbook-utility-2', {
  name: 'Spellbook: Utility (Level 2)',
  filter: { tags: [UtilityPower, PowerLevel2] },
  loadout: PreparedUtilitySpell2Loadout,
})

export const SelectSpellbookDaily5 = CharacterOptions.selectAbilityOption('power/select-spellbook-daily-5', {
  name: 'Spellbook: Daily Attack (Level 5)',
  filter: { tags: [DailyPower, AttackPower, PowerLevel5] },
  loadout: PreparedDailySpell5Loadout,
})

export const AllPowerOptions = [
  SelectAtWillAttack,
  SelectEncounterAttack1,
  SelectDailyAttack1,
  SelectUtility2,
  SelectEncounterAttack3,
  SelectDailyAttack5,
  SelectSpellbookDaily1,
  SelectSpellbookUtility2,
  SelectSpellbookDaily5,
]
