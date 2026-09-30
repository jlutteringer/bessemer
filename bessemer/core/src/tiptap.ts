import { RichText, RichTextJson, RichTextString } from '@bessemer/cornerstone/rich-text'
import { CoreApplicationContext } from '@bessemer/core/application'
import { Extension } from '@tiptap/core'
import { StarterKit } from '@tiptap/starter-kit'
import { generateHTML, generateJSON } from '@tiptap/html'
import { RichTexts, Strings } from '@bessemer/cornerstone'

export type TiptapExtension = Extension

export const DefaultExtensions: Array<TiptapExtension> = [StarterKit]

const getExtensions = (context: CoreApplicationContext): Array<TiptapExtension> => {
  return context.tiptapExtensions
}

export const textToJson = (text: RichText, context: CoreApplicationContext): RichTextJson => {
  return textToJsonWithExtensions(text, getExtensions(context))
}

/**
 * Converts rich text to JSON with an explicit set of extensions, for when there's no application context to supply them.
 */
export const textToJsonWithExtensions = (text: RichText, extensions: Array<TiptapExtension>): RichTextJson => {
  if (RichTexts.isJson(text)) {
    return text
  }

  return generateJSON(text, extensions) as RichTextJson
}

export const jsonToString = (text: RichTextJson, context: CoreApplicationContext): RichTextString => {
  let html = generateHTML(text, getExtensions(context))
  html = Strings.removeStart(html, '<p>')
  html = Strings.removeEnd(html, '</p>')
  return html
}
