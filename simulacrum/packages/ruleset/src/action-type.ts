import Zod from 'zod'
import { Uris } from '@bessemer/cornerstone'
import * as Tiptap from '@bessemer/core/tiptap'
import { RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntitySchema, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'

export type ActionTypeReference = RulesetEntityReference<typeof RulesetEntityType.ActionType>

export const ActionTypeSchema = RulesetEntitySchema.extend({
  id: Zod.string().transform((it) => it as ActionTypeReference),
})

export type ActionType = RulesetEntity & {
  id: ActionTypeReference
}

export const defineActionType = (reference: string, props: RulesetEntityProps): ActionType => {
  return ActionTypeSchema.parse({
    id: Uris.format({ scheme: RulesetEntityType.ActionType, location: { path: reference } }),
    name: props.name,
    description: Tiptap.markdownToJson(props.description),
  })
}
