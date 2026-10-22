import Zod from 'zod'
import { Uris } from '@bessemer/cornerstone'
import * as Tiptap from '@bessemer/core/tiptap'
import { RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntitySchema, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'

export type LoadoutTypeReference = RulesetEntityReference<typeof RulesetEntityType.LoadoutType>

export const LoadoutTypeSchema = RulesetEntitySchema.extend({
  id: Zod.string().transform((it) => it as LoadoutTypeReference),
})

export type LoadoutType = RulesetEntity & {
  id: LoadoutTypeReference
}

export const defineLoadoutType = (reference: string, props: RulesetEntityProps): LoadoutType => {
  return LoadoutTypeSchema.parse({
    id: Uris.format({ scheme: RulesetEntityType.LoadoutType, location: { path: reference } }),
    name: props.name,
    description: Tiptap.markdownToJson(props.description),
  })
}
