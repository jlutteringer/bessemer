import Zod from 'zod'
import { Uris } from '@bessemer/cornerstone'
import { RichTextJsonSchema } from '@bessemer/cornerstone/rich-text'
import * as Tiptap from '@bessemer/core/tiptap'
import { RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'

export type ContentEntityReference = RulesetEntityReference<typeof RulesetEntityType.Content>

// A section's own content, as an entity; it's synthetic, so it isn't listed among the ruleset's entities
export type ContentEntity = RulesetEntity & {
  id: ContentEntityReference
}

const ParentSchema = Zod.string()
  .transform((it) => it as RulesetEntityReference)
  .nullable()

// An embedded section has its own content; a linked section shows the entity its id refers to
export const EmbeddedContentSectionSchema = Zod.object({
  id: Zod.string().transform((it) => it as ContentEntityReference),
  parent: ParentSchema,
  content: Zod.object({
    name: Zod.string(),
    description: RichTextJsonSchema,
  }),
})

export const LinkedContentSectionSchema = Zod.object({
  id: Zod.string().transform((it) => it as RulesetEntityReference),
  parent: ParentSchema,
})

export const ContentSectionSchema = Zod.union([EmbeddedContentSectionSchema, LinkedContentSectionSchema])

export type ContentSection = Zod.infer<typeof ContentSectionSchema>

export type EmbeddedContentSection = Zod.infer<typeof EmbeddedContentSectionSchema>

export const isEmbedded = (section: ContentSection): section is EmbeddedContentSection => {
  return 'content' in section
}

export type ContentSectionProps = {
  parent?: ContentSection
  content: RulesetEntityProps
}

export const defineSection = (reference: string, props: ContentSectionProps): ContentSection => {
  return EmbeddedContentSectionSchema.parse({
    id: Uris.format({ scheme: RulesetEntityType.Content, location: { path: reference } }),
    parent: props.parent?.id ?? null,
    content: { name: props.content.name, description: Tiptap.markdownToJson(props.content.description) },
  })
}

export const linkEntity = (parent: ContentSection, entity: RulesetEntity): ContentSection => {
  return LinkedContentSectionSchema.parse({ id: entity.id, parent: parent.id })
}
