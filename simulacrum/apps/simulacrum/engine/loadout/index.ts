export * from '@simulacrum/ruleset/loadout'
import { LoadoutType, LoadoutTypeReference } from '@simulacrum/ruleset/loadout'
import { Assertions } from '@bessemer/cornerstone'
import { AbilityReference } from '@simulacrum/engine/ability'
import { Ruleset } from '@simulacrum/engine/ruleset'

export type LoadoutSlot = {
  type: LoadoutTypeReference
  ability: AbilityReference | null
}

export const getLoadoutType = (reference: LoadoutTypeReference, ruleset: Ruleset): LoadoutType => {
  const loadoutType = ruleset.loadoutTypes.find((it) => it.id === reference)
  Assertions.assertPresent(loadoutType, () => `Unable to find Loadout Type for Reference: ${JSON.stringify(reference)}`)
  return loadoutType
}
