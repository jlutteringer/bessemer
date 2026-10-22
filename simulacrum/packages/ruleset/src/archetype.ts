import { Arrays } from '@bessemer/cornerstone'
import Zod from 'zod'
import { Uris } from '@bessemer/cornerstone'
import * as Tiptap from '@bessemer/core/tiptap'
import { RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntitySchema, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'

export type ArchetypeReference = RulesetEntityReference<typeof RulesetEntityType.Archetype>

export const ArchetypeSchema = RulesetEntitySchema.extend({
  id: Zod.string().transform((it) => it as ArchetypeReference),
})

export type Archetype = RulesetEntity & {
  id: ArchetypeReference
}

export const defineArchetype = (reference: string, props: RulesetEntityProps): Archetype => {
  return ArchetypeSchema.parse({
    id: Uris.format({ scheme: RulesetEntityType.Archetype, location: { path: reference } }),
    name: props.name,
    description: Tiptap.markdownToJson(props.description),
  })
}

export type ArchetypeFilter = Array<Array<ArchetypeReference>>

export type ArchetypeFilterProps = Array<Archetype | Array<Archetype>>

export const filter = (props: ArchetypeFilterProps): ArchetypeFilter => {
  return props.map((group) => (Array.isArray(group) ? group.map((it) => it.id) : [group.id]))
}
