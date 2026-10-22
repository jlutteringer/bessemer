'use client'

import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from '@mui/material'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { Dictionary } from '@bessemer/cornerstone/types'
import { Arrays, Objects } from '@bessemer/cornerstone'
import { RichTextElement } from '@bessemer/react/component/RichTextRenderer'
import { MuiRichTextRenderer, RichTextMarkElement, TextTextElement } from '@bessemer/mui/component/MuiRichTextRenderer'
import * as RuleLinks from '@simulacrum/ui/ruleset/rule-link'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { RulesetEntityTooltip } from '@simulacrum/ui/components/RulesetEntityTooltip'

export const SimulacrumRichText = ({ text }: { text: RichTextJson }) => {
  if (Arrays.isEmpty(text.content ?? [])) {
    return null
  }

  return (
    <MuiRichTextRenderer
      content={text}
      handlers={RuleLinkHandlers}
    />
  )
}

const RuleLinkMark: RichTextMarkElement = ({ mark, children }) => {
  const ruleset = useRuleset()
  const href: string = mark.attrs?.href ?? ''
  const link = RuleLinks.parse(href)

  if (Objects.isNil(link)) {
    return <Link href={href}>{children}</Link>
  }

  const entity = RuleLinks.resolve(link, ruleset)
  if (Objects.isNil(entity)) {
    return <>{children}</>
  }

  return (
    <RulesetEntityTooltip
      entity={entity}
      trigger={<RuleLinkTrigger>{children}</RuleLinkTrigger>}
    />
  )
}

const RuleLinkTrigger = ({ children }: { children?: ReactNode }) => {
  return (
    <Link
      component="button"
      sx={{ verticalAlign: 'baseline', font: 'inherit' }}
    >
      {children}
    </Link>
  )
}

const RuleLinkMarks: Dictionary<RichTextMarkElement> = { link: RuleLinkMark }

const RuleLinkTextElement: RichTextElement = (props) => (
  <TextTextElement
    {...props}
    marks={RuleLinkMarks}
  />
)

const RuleLinkHandlers: Dictionary<RichTextElement> = { text: RuleLinkTextElement }
