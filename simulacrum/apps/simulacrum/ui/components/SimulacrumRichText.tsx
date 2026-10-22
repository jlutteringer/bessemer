'use client'

import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from '@mui/material'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { Dictionary } from '@bessemer/cornerstone/types'
import { Arrays, Objects, Results, Strings, Uris } from '@bessemer/cornerstone'
import { RichTextElement } from '@bessemer/react/component/RichTextRenderer'
import { MuiRichTextRenderer, RichTextMarkElement, TextTextElement } from '@bessemer/mui/component/MuiRichTextRenderer'
import { RulesetEntityReference } from '@simulacrum/ruleset/ruleset-entity'
import { RulesetEntities } from '@simulacrum/ruleset'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { Rulesets } from '@simulacrum/engine'
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

const parseRuleLink = (href: string): RulesetEntityReference | null => {
  const result = Uris.parseString(href)
  if (Results.isFailure(result)) {
    return null
  }

  const { scheme, location } = result
  if (Objects.isNil(scheme) || Strings.isBlank(location.path) || !RulesetEntities.isRulesetEntityType(scheme)) {
    return null
  }

  return href as RulesetEntityReference
}

const RuleLinkMark: RichTextMarkElement = ({ mark, children }) => {
  const ruleset = useRuleset()
  const href: string = mark.attrs?.href ?? ''
  const link = parseRuleLink(href)

  if (Objects.isNil(link)) {
    return <Link href={href}>{children}</Link>
  }

  const entity = Rulesets.findEntityById(link, ruleset)
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
