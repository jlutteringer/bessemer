import { Assertions, Objects } from '@bessemer/cornerstone'
import { CharacterEffect } from '@simulacrum/ruleset/character-effect'
import * as Tags from '@simulacrum/ruleset/tag'
import { TagFilter, TagFilterProps, TraitTag, TraitTagReference } from '@simulacrum/ruleset/tag'
import * as CharacterValues from '@simulacrum/ruleset/character-value'
import { buildReference, RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import * as Tiptap from '@bessemer/core/tiptap'
import { Expression, Expressions } from '@bessemer/cornerstone/expression'

export type TraitReference = RulesetEntityReference<typeof RulesetEntityType.Trait>

export type TraitProps = RulesetEntityProps & {
  effects: Array<CharacterEffect>

  tags?: Array<TraitTag>
  prerequisites?: Array<Expression<boolean>>
  repeatable?: boolean
}

export type Trait = RulesetEntity & {
  id: TraitReference
  effects: Array<CharacterEffect>

  tags: Array<TraitTagReference>
  prerequisites: Array<Expression<boolean>>
  repeatable: boolean
}

export const defineTrait = (reference: string, props: TraitProps): Trait => {
  return {
    ...props,
    id: buildReference(RulesetEntityType.Trait, reference),
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
    tags: (props.tags ?? []).map((it) => (typeof it === 'string' ? it : it.id)),
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
  tags?: TagFilterProps<TraitTag>
  specificOptions?: Array<TraitReference | Trait>
}

export type TraitFilter = {
  tags: TagFilter<TraitTagReference>
  specificOptions: Array<TraitReference>
}

export const filter = (props: TraitFilterProps): TraitFilter => {
  return {
    tags: Tags.filter(props.tags ?? []),
    specificOptions: (props.specificOptions ?? []).map((it) => (typeof it === 'string' ? it : it.id)),
  }
}
