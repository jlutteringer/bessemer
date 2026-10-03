import { Arrays } from '@bessemer/cornerstone'
import { Effect } from '@simulacrum/ruleset/effect'
import * as Archetypes from '@simulacrum/ruleset/archetype'
import { Archetype, ArchetypeFilter, ArchetypeFilterProps, ArchetypeReference } from '@simulacrum/ruleset/archetype'
import { CharacterValues } from '@simulacrum/ruleset/character'
import { Reference } from '@bessemer/cornerstone/reference'
import { RichText } from '@bessemer/cornerstone/rich-text'
import { Expression, Expressions } from '@bessemer/cornerstone/expression'

export type TraitReference = Reference<'Trait'>

export type TraitProps = {
  name: string
  description: RichText
  effects: Array<Effect>

  archetypes?: Array<ArchetypeReference | Archetype>
  prerequisites?: Array<Expression<boolean>>
  repeatable?: boolean
}

export type Trait = { id: TraitReference } & {
  name: string
  description: RichText
  effects: Array<Effect>

  archetypes: Array<ArchetypeReference>
  prerequisites: Array<Expression<boolean>>
  repeatable: boolean
}

export const defineTrait = (reference: string, props: TraitProps): Trait => {
  return {
    id: reference as TraitReference,
    ...props,
    archetypes: (props.archetypes ?? []).map((it) => (typeof it === 'string' ? it : it.id)),
    prerequisites: props.prerequisites ?? [],
    repeatable: props.repeatable ?? false,
  }
}

export const traitPrerequisite = (trait: TraitReference | Trait): Expression<boolean> => {
  return Expressions.contains(CharacterValues.Traits, [typeof trait === 'string' ? trait : trait.id])
}

export type TraitFilterProps = {
  archetypes?: ArchetypeFilterProps
  specificOptions?: Array<TraitReference | Trait>
}

export type TraitFilter = {
  archetypes: ArchetypeFilter
  specificOptions: Array<TraitReference>
}

export const filter = (props: TraitFilterProps): TraitFilter => {
  return {
    archetypes: Archetypes.filter(props.archetypes ?? []),
    specificOptions: (props.specificOptions ?? []).map((it) => (typeof it === 'string' ? it : it.id)),
  }
}

export const applyFilter = (traits: Array<Trait>, filter: TraitFilter): Array<Trait> => {
  let filteredTraits = traits
  if (!Arrays.isEmpty(filter.archetypes)) {
    filteredTraits = filteredTraits.filter((it) => Archetypes.matchesFilter(filter.archetypes, it.archetypes))
  }
  if (!Arrays.isEmpty(filter.specificOptions)) {
    filteredTraits = filteredTraits.filter((it) => Arrays.contains(filter.specificOptions, it.id))
  }

  return filteredTraits
}
