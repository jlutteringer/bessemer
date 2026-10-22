'use client'

import * as React from 'react'
import { ReactNode } from 'react'
import { Box, Link } from '@mui/material'
import { Objects } from '@bessemer/cornerstone'
import { RulesetEntity } from '@simulacrum/ruleset/ruleset-entity'
import { StackedPopover } from '@simulacrum/ui/components/StackedPopover'
import { SimulacrumRichText } from '@simulacrum/ui/components/SimulacrumRichText'
import { Rulesets } from '@simulacrum/engine'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'

export const RulesetEntityPopover = ({ entity, trigger }: { entity: RulesetEntity; trigger: ReactNode }) => {
  const ruleset = useRuleset()
  const section = Rulesets.findContentSectionById(entity.id, ruleset)

  return (
    <StackedPopover
      trigger={trigger}
      title={entity.name}
    >
      <SimulacrumRichText text={entity.description} />

      {Objects.isPresent(section) && (
        <Box sx={{ mt: 1 }}>
          <Link
            href={`/rulebook/${ruleset.id}#${section.id}`}
            variant="body2"
          >
            View in rulebook
          </Link>
        </Box>
      )}
    </StackedPopover>
  )
}
