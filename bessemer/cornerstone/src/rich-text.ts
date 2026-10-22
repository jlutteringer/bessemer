import Zod, { ZodArray, ZodOptional } from 'zod'
import { TaggedType } from '@bessemer/cornerstone/types'

// These are to match TipTap types, but without us having to depend on the TipTap library
export const RichTextJsonSchema = Zod.looseObject({
  type: Zod.string().optional(),
  attrs: Zod.record(Zod.string(), Zod.any()).optional(),
  get content(): ZodOptional<ZodArray<typeof RichTextJsonSchema>> {
    return Zod.array(RichTextJsonSchema).optional()
  },
  marks: Zod.array(
    Zod.looseObject({
      type: Zod.string(),
      attrs: Zod.record(Zod.string(), Zod.any()).optional(),
    })
  ).optional(),
  text: Zod.string().optional(),
})

export type RichTextJson = Zod.infer<typeof RichTextJsonSchema>

export type RichTextString = TaggedType<string, 'RichTextString'>

export type RichText = RichTextString | RichTextJson
