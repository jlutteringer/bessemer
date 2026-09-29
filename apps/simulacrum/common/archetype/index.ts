import { Reference } from '@bessemer/cornerstone/reference'

export type ArchetypeReference = Reference<'Archetype'>

export type ArchetypeProps = {
  name: string
}

export type Archetype = { id: ArchetypeReference } & ArchetypeProps & {}

export const defineArchetype = (reference: string, props: ArchetypeProps): Archetype => {
  return {
    id: reference as ArchetypeReference,
    ...props,
  }
}
