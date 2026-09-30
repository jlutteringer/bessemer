import { Effect } from '@simulacrum/common/effect'
import { Archetype, ArchetypeReference } from '@simulacrum/common/archetype'
import { CharacterValues } from '@simulacrum/common/character/character'
import { Reference } from '@bessemer/cornerstone/reference'
import { RichText } from '@bessemer/cornerstone/rich-text'
import { Expression, Expressions } from '@bessemer/cornerstone/expression'
import { Arrays, Assertions } from '@bessemer/cornerstone'
import { ApplicationContext } from '@simulacrum/common/application'

export type TraitReference = Reference<'Trait'>

export type TraitProps = {
  name: string
  description: RichText
  effects: Array<Effect>

  archetypes?: Array<ArchetypeReference | Archetype>
  prerequisites?: Array<Expression<boolean>>
}

export type Trait = { id: TraitReference } & {
  name: string
  description: RichText
  effects: Array<Effect>

  archetypes: Array<ArchetypeReference>
  prerequisites: Array<Expression<boolean>>
}

export const defineTrait = (reference: string, props: TraitProps): Trait => {
  return {
    id: reference as TraitReference,
    ...props,
    archetypes: (props.archetypes ?? []).map((it) => (typeof it === 'string' ? it : it.id)),
    prerequisites: props.prerequisites ?? [],
  }
}

export const getTrait = (trait: TraitReference, context: ApplicationContext): Trait => {
  const matchingTrait = context.client.ruleset.traits.find((it) => it.id === trait)
  Assertions.assertPresent(matchingTrait, () => `Unable to find Trait for Reference: ${JSON.stringify(trait)}`)
  return matchingTrait
}

export const getTraits = (traits: Array<TraitReference>, context: ApplicationContext): Array<Trait> => {
  return traits.map((trait) => getTrait(trait, context))
}

export const traitPrerequisite = (trait: TraitReference | Trait): Expression<boolean> => {
  return Expressions.contains(CharacterValues.Traits, [typeof trait === 'string' ? trait : trait.id])
}

export type TraitFilterProps = {
  archetypes?: Array<ArchetypeReference | Archetype>
  specificOptions?: Array<TraitReference | Trait>
}

export type TraitFilter = {
  archetypes: Array<ArchetypeReference>
  specificOptions: Array<TraitReference>
}

export const filter = (props: TraitFilterProps): TraitFilter => {
  return {
    archetypes: (props.archetypes ?? []).map((it) => (typeof it === 'string' ? it : it.id)),
    specificOptions: (props.specificOptions ?? []).map((it) => (typeof it === 'string' ? it : it.id)),
  }
}

export const filterNone = (): TraitFilter => {
  return filter({})
}

export const applyFilter = (traits: Array<Trait>, filter: TraitFilter): Array<Trait> => {
  let filteredTraits = traits
  if (!Arrays.isEmpty(filter.archetypes)) {
    filteredTraits = filteredTraits.filter((it) => Arrays.containsAll(filter.archetypes, it.archetypes))
  }
  if (!Arrays.isEmpty(filter.specificOptions)) {
    filteredTraits = filteredTraits.filter((it) => Arrays.contains(filter.specificOptions, it.id))
  }

  return filteredTraits
}
