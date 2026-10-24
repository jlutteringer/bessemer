import { Objects } from '@bessemer/cornerstone'
import * as Tiptap from '@bessemer/core/tiptap'
import { buildReference, RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'

export type ArchetypeEntityType =
  | typeof RulesetEntityType.TraitArchetype
  | typeof RulesetEntityType.AbilityArchetype
  | typeof RulesetEntityType.CreatureArchetype

export type ArchetypeReference<T extends ArchetypeEntityType = ArchetypeEntityType> = RulesetEntityReference<T>

export type Archetype<T extends ArchetypeEntityType = ArchetypeEntityType> = RulesetEntity & {
  id: ArchetypeReference<T>
}

export type TraitArchetype = Archetype<typeof RulesetEntityType.TraitArchetype>
export type TraitArchetypeReference = ArchetypeReference<typeof RulesetEntityType.TraitArchetype>

export type AbilityArchetype = Archetype<typeof RulesetEntityType.AbilityArchetype>
export type AbilityArchetypeReference = ArchetypeReference<typeof RulesetEntityType.AbilityArchetype>

export type CreatureArchetype = Archetype<typeof RulesetEntityType.CreatureArchetype>
export type CreatureArchetypeReference = ArchetypeReference<typeof RulesetEntityType.CreatureArchetype>

const defineArchetype = <T extends ArchetypeEntityType>(type: T, reference: string, props: RulesetEntityProps): Archetype<T> => {
  return {
    id: buildReference(type, reference),
    name: props.name,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
  }
}

export const defineTraitArchetype = (reference: string, props: RulesetEntityProps): TraitArchetype => {
  return defineArchetype(RulesetEntityType.TraitArchetype, reference, props)
}

export const defineAbilityArchetype = (reference: string, props: RulesetEntityProps): AbilityArchetype => {
  return defineArchetype(RulesetEntityType.AbilityArchetype, reference, props)
}

export const defineCreatureArchetype = (reference: string, props: RulesetEntityProps): CreatureArchetype => {
  return defineArchetype(RulesetEntityType.CreatureArchetype, reference, props)
}

export type ArchetypeFilter<R extends ArchetypeReference = ArchetypeReference> = Array<Array<R>>

export type ArchetypeFilterProps<A extends Archetype = Archetype> = Array<A | Array<A>>

export const filter = <A extends Archetype>(props: ArchetypeFilterProps<A>): ArchetypeFilter<A['id']> => {
  return props.map((group) => (Array.isArray(group) ? group.map((it) => it.id) : [group.id]))
}
