import { Objects } from '@bessemer/cornerstone'
import * as Tiptap from '@bessemer/core/tiptap'
import { buildReference, RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'

export type TagEntityType = typeof RulesetEntityType.TraitTag | typeof RulesetEntityType.AbilityTag | typeof RulesetEntityType.CreatureTag

export type TagReference<T extends TagEntityType = TagEntityType> = RulesetEntityReference<T>

export type Tag<T extends TagEntityType = TagEntityType> = RulesetEntity & {
  id: TagReference<T>
}

export type TraitTag = Tag<typeof RulesetEntityType.TraitTag>
export type TraitTagReference = TagReference<typeof RulesetEntityType.TraitTag>

export type AbilityTag = Tag<typeof RulesetEntityType.AbilityTag>
export type AbilityTagReference = TagReference<typeof RulesetEntityType.AbilityTag>

export type CreatureTag = Tag<typeof RulesetEntityType.CreatureTag>
export type CreatureTagReference = TagReference<typeof RulesetEntityType.CreatureTag>

const defineTag = <T extends TagEntityType>(type: T, reference: string, props: RulesetEntityProps): Tag<T> => {
  return {
    id: buildReference(type, reference),
    name: props.name,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
  }
}

export const defineTraitTag = (reference: string, props: RulesetEntityProps): TraitTag => {
  return defineTag(RulesetEntityType.TraitTag, reference, props)
}

export const defineAbilityTag = (reference: string, props: RulesetEntityProps): AbilityTag => {
  return defineTag(RulesetEntityType.AbilityTag, reference, props)
}

export const defineCreatureTag = (reference: string, props: RulesetEntityProps): CreatureTag => {
  return defineTag(RulesetEntityType.CreatureTag, reference, props)
}

export type TagFilter<R extends TagReference = TagReference> = Array<Array<R>>

export type TagFilterProps<A extends Tag = Tag> = Array<A | Array<A>>

export const filter = <A extends Tag>(props: TagFilterProps<A>): TagFilter<A['id']> => {
  return props.map((group) => (Array.isArray(group) ? group.map((it) => it.id) : [group.id]))
}
