import { Reference } from '@bessemer/cornerstone/reference'

export type LoadoutTypeReference = Reference<'LoadoutType'>

export type LoadoutProps = {
  name: string
}

export type LoadoutType = { id: LoadoutTypeReference } & LoadoutProps & {}

export const defineLoadoutType = (reference: string, props: LoadoutProps): LoadoutType => {
  return {
    id: reference as LoadoutTypeReference,
    ...props,
  }
}
