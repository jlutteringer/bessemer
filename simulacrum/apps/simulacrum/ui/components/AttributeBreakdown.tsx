'use client'

import * as React from 'react'
import { ReactNode } from 'react'
import { Typography } from '@mui/material'
import { Arrays, Objects } from '@bessemer/cornerstone'
import { RulesetEntity } from '@simulacrum/ruleset/ruleset-entity'
import { RulesetEntityPopover } from '@simulacrum/ui/components/RulesetEntityPopover'
import { RuleLinkTrigger } from '@simulacrum/ui/components/SimulacrumRichText'

export type AttributeBaseLine = {
  label: string | null
  value: ReactNode
}

export type AttributeModifierLine = {
  source: RulesetEntity | null
  change: ReactNode
}

export const AttributeBreakdown = ({ base, modifiers }: { base: Array<AttributeBaseLine>; modifiers: Array<AttributeModifierLine> }) => {
  return (
    <>
      {!Arrays.isEmpty(base) && (
        <>
          <Typography variant="caption">Base Value</Typography>
          {base.map((it, index) => (
            <Typography
              key={index}
              variant="body2"
            >
              {Objects.isPresent(it.label) && `${it.label}: `}
              {it.value}
            </Typography>
          ))}
        </>
      )}
      {!Arrays.isEmpty(modifiers) && (
        <>
          <Typography
            variant="caption"
            component="p"
            sx={{ mt: Arrays.isEmpty(base) ? 0 : 0.5 }}
          >
            Modifiers
          </Typography>
          {modifiers.map((it, index) => (
            <Typography
              key={index}
              variant="body2"
            >
              {Objects.isPresent(it.source) && (
                <>
                  <RulesetEntityPopover
                    entity={it.source}
                    trigger={<RuleLinkTrigger>{it.source.name}</RuleLinkTrigger>}
                  />
                  {': '}
                </>
              )}
              {it.change}
            </Typography>
          ))}
        </>
      )}
    </>
  )
}
