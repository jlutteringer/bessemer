'use client'

import * as React from 'react'
import { useMemo } from 'react'
import { RichText, RichTextJson } from '@bessemer/cornerstone/rich-text'
import { Strings } from '@bessemer/cornerstone'
import { MuiRichTextRenderer } from '@bessemer/mui/component/MuiRichTextRenderer'
import * as Tiptap from '@bessemer/core/tiptap'

// Ruleset descriptions are authored as HTML strings; they're converted with the default Tiptap extensions since the ruleset
// isn't tied to an application context
const toJson = (text: RichText): RichTextJson => {
  return Tiptap.textToJsonWithExtensions(text, Tiptap.DefaultExtensions)
}

export const RichTextDescription = ({ text }: { text: RichText }) => {
  const json = useMemo(() => toJson(text), [text])

  if (Strings.isString(text) && text.trim().length === 0) {
    return null
  }

  return <MuiRichTextRenderer content={json} />
}
