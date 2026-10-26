'use client'

import { ReactNode } from 'react'
import { Link, Typography } from '@mui/material'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { Dictionary } from '@bessemer/cornerstone/types'
import { Arrays, Objects, Results, Strings, Uris } from '@bessemer/cornerstone'
import { RichTextElement } from '@bessemer/react/component/RichTextRenderer'
import { MuiRichTextRenderer, RichTextMarkElement, TextTextElement } from '@bessemer/mui/component/MuiRichTextRenderer'
import { RulesetEntityReference } from '@simulacrum/ruleset/ruleset-entity'
import { RulesetEntities } from '@simulacrum/ruleset'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { Rulesets } from '@simulacrum/common/engine/engine'
import { RulesetEntityPopover } from '@simulacrum/ui/components/RulesetEntityPopover'

export const SimulacrumRichText = ({ text, variant = 'body1' }: { text: RichTextJson; variant?: 'body1' | 'body2' }) => {
  if (Arrays.isEmpty(text.content ?? [])) {
    return null
  }

  return (
    <MuiRichTextRenderer
      content={text}
      handlers={variant === 'body2' ? Body2Handlers : RuleLinkHandlers}
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
    <RulesetEntityPopover
      entity={entity}
      trigger={<RuleLinkTrigger>{children}</RuleLinkTrigger>}
    />
  )
}

export const RuleLinkTrigger = ({ children }: { children?: ReactNode }) => {
  return (
    <Link
      component="span"
      sx={{ cursor: 'pointer', font: 'inherit' }}
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

const Body2Paragraph: RichTextElement = (props) => (
  <Typography
    variant="body2"
    sx={{ '&:not(:last-child)': { mb: 1 } }}
  >
    {props.children}
  </Typography>
)

const Body2Handlers: Dictionary<RichTextElement> = { ...RuleLinkHandlers, paragraph: Body2Paragraph }
