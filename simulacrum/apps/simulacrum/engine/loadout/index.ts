export * from '@simulacrum/ruleset/loadout'
import { LoadoutType, LoadoutTypeReference } from '@simulacrum/ruleset/loadout'
import { AbilityReference } from '@simulacrum/engine/ability'
import { Ruleset } from '@simulacrum/engine/ruleset'
import * as Rulesets from '@simulacrum/engine/ruleset'

export type LoadoutSlot = {
  type: LoadoutTypeReference
  ability: AbilityReference | null
}

export const getLoadoutTypeById = (reference: LoadoutTypeReference, ruleset: Ruleset): LoadoutType => {
  return Rulesets.getEntityById(reference, ruleset)
}
