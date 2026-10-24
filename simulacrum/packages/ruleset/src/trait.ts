import { Arrays, Assertions, Objects } from '@bessemer/cornerstone'
import { Effect } from '@simulacrum/ruleset/effect'
import * as Archetypes from '@simulacrum/ruleset/archetype'
import { Archetype, ArchetypeFilter, ArchetypeFilterProps, ArchetypeReference } from '@simulacrum/ruleset/archetype'
import * as CharacterValues from '@simulacrum/ruleset/character-value'
import { buildReference, RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import * as Tiptap from '@bessemer/core/tiptap'
import { Expression, Expressions } from '@bessemer/cornerstone/expression'

export type TraitReference = RulesetEntityReference<typeof RulesetEntityType.Trait>

export type TraitProps = RulesetEntityProps & {
  effects: Array<Effect>

  archetypes?: Array<ArchetypeReference | Archetype>
  prerequisites?: Array<Expression<boolean>>
  repeatable?: boolean
}

export type Trait = RulesetEntity & {
  id: TraitReference
  effects: Array<Effect>

  archetypes: Array<ArchetypeReference>
  prerequisites: Array<Expression<boolean>>
  repeatable: boolean
}

export const defineTrait = (reference: string, props: TraitProps): Trait => {
  return {
    ...props,
    id: buildReference(RulesetEntityType.Trait, reference),
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
    archetypes: (props.archetypes ?? []).map((it) => (typeof it === 'string' ? it : it.id)),
    prerequisites: props.prerequisites ?? [],
    repeatable: props.repeatable ?? false,
  }
}

export const traitPrerequisite = (trait: TraitReference | Trait): Expression<boolean> => {
  Assertions.assertPresent(
    trait,
    () => 'traitPrerequisite received an undefined trait, usually a circular import referencing it before it is defined'
  )
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
