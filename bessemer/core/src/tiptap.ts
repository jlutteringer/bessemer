import { RichText, RichTextJson, RichTextString } from '@bessemer/cornerstone/rich-text'
import { CoreApplicationContext } from '@bessemer/core/application'
import { Extension } from '@tiptap/core'
import { StarterKit } from '@tiptap/starter-kit'
import { TableKit } from '@tiptap/extension-table'
import { generateHTML, generateJSON } from '@tiptap/html'
import { MarkdownManager } from '@tiptap/markdown'
import { Objects, Strings } from '@bessemer/cornerstone'

export type TiptapExtension = Extension

export const DefaultExtensions: Array<TiptapExtension> = [StarterKit, TableKit]

export const textToJson = (text: RichText, context?: CoreApplicationContext): RichTextJson => {
  if (Objects.isObject(text)) {
    return text
  }

  return generateJSON(text, Objects.isNil(context) ? DefaultExtensions : context.tiptapExtensions) as RichTextJson
}

// Building a MarkdownManager is far more expensive than parsing with one, so each set of extensions shares a single manager
const markdownManagers = new WeakMap<Array<TiptapExtension>, MarkdownManager>()

const getMarkdownManager = (extensions: Array<TiptapExtension>): MarkdownManager => {
  let manager = markdownManagers.get(extensions)
  if (Objects.isNil(manager)) {
    manager = new MarkdownManager({ extensions })
    markdownManagers.set(extensions, manager)
  }

  return manager
}

export const markdownToJson = (markdown: string, context?: CoreApplicationContext): RichTextJson => {
  return getMarkdownManager(Objects.isNil(context) ? DefaultExtensions : context.tiptapExtensions).parse(markdown) as RichTextJson
}

export const jsonToString = (text: RichTextJson, context: CoreApplicationContext): RichTextString => {
  let html = generateHTML(text, context.tiptapExtensions)
  html = Strings.removeStart(html, '<p>')
  html = Strings.removeEnd(html, '</p>')
  return html
}
