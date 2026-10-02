import { Reference } from '@bessemer/cornerstone/reference'
import { Assertions } from '@bessemer/cornerstone'
import { AbilityReference } from '@simulacrum/common/ability'
import { ApplicationContext } from '@simulacrum/common/application'

export type LoadoutTypeReference = Reference<'LoadoutType'>

export type LoadoutProps = {
  name: string
}

export type LoadoutType = { id: LoadoutTypeReference } & LoadoutProps & {}

export type LoadoutSlot = {
  type: LoadoutTypeReference
  ability: AbilityReference | null
}

export const defineLoadoutType = (reference: string, props: LoadoutProps): LoadoutType => {
  return {
    id: reference as LoadoutTypeReference,
    ...props,
  }
}

export const getLoadoutType = (reference: LoadoutTypeReference, context: ApplicationContext): LoadoutType => {
  const loadoutType = context.client.ruleset.loadoutTypes.find((it) => it.id === reference)
  Assertions.assertPresent(loadoutType, () => `Unable to find Loadout Type for Reference: ${JSON.stringify(reference)}`)
  return loadoutType
}
