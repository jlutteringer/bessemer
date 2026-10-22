'use client'

import * as React from 'react'
import { ReactNode } from 'react'
import { Box, Link, Typography } from '@mui/material'
import { Objects } from '@bessemer/cornerstone'
import { RulesetEntity } from '@simulacrum/ruleset/ruleset-entity'
import { StackedTooltip } from '@simulacrum/ui/components/StackedTooltip'
import { SimulacrumRichText } from '@simulacrum/ui/components/SimulacrumRichText'
import { Rulesets } from '@simulacrum/engine'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'

export const RulesetEntityTooltip = ({ entity, trigger }: { entity: RulesetEntity; trigger: ReactNode }) => {
  const ruleset = useRuleset()
  const section = Rulesets.findContentSectionById(entity.id, ruleset)

  return (
    <StackedTooltip trigger={trigger}>
      <Typography
        variant="subtitle1"
        sx={{ mb: 1 }}
      >
        {entity.name}
      </Typography>

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
    </StackedTooltip>
  )
}
