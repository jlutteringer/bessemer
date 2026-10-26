'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { Arrays, Objects } from '@bessemer/cornerstone'
import { RulesetConfiguration } from '@simulacrum/common/engine/ruleset'
import { RulesetExtensionSummary, RulesetSummary } from '@simulacrum/common/ruleset/ruleset'

export const RulesetPicker = ({
  rulesets,
  value,
  onChange,
}: {
  rulesets: Array<RulesetSummary>
  value: RulesetConfiguration | null
  onChange: (configuration: RulesetConfiguration) => void
}) => {
  const selectRuleset = (ruleset: RulesetSummary) => {
    if (value?.id !== ruleset.id) {
      onChange({ id: ruleset.id, extensions: ruleset.extensions.map((it) => it.id) })
    }
  }

  const toggleExtension = (extension: RulesetExtensionSummary) => {
    if (Objects.isPresent(value)) {
      const { extensions } = value
      onChange({
        ...value,
        extensions: extensions.includes(extension.id) ? extensions.filter((it) => it !== extension.id) : [...extensions, extension.id],
      })
    }
  }

  return (
    <Grid
      container
      spacing={2}
    >
      {rulesets.map((ruleset) => {
        const selected = value?.id === ruleset.id
        const { extensions } = ruleset

        return (
          <Grid
            key={ruleset.id}
            size={{ xs: 12, sm: 6 }}
          >
            <Card
              variant="outlined"
              role="button"
              tabIndex={0}
              onClick={() => selectRuleset(ruleset)}
              onKeyDown={(event) => {
                if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault()
                  selectRuleset(ruleset)
                }
              }}
              sx={{
                height: '100%',
                cursor: 'pointer',
                borderColor: selected ? 'primary.main' : undefined,
                boxShadow: selected ? (theme) => `inset 0 0 0 1px ${theme.palette.primary.main}` : undefined,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="h6">{ruleset.name}</Typography>
                  {ruleset.hasRulebook && (
                    <IconButton
                      component="a"
                      href={`/rulebook/${ruleset.id}`}
                      target="_blank"
                      rel="noopener"
                      size="small"
                      color="primary"
                      aria-label={`${ruleset.name} rulebook`}
                      onClick={(event) => event.stopPropagation()}
                      sx={{ transform: 'translateY(-1px)' }}
                    >
                      <MenuBookIcon fontSize="small" />
                    </IconButton>
                  )}
                </Box>
              </CardContent>
              {!Arrays.isEmpty(extensions) && (
                <CardContent sx={{ pt: 0 }}>
                  <Typography
                    variant="overline"
                    color="text.secondary"
                  >
                    Extensions
                  </Typography>
                  <Stack sx={{ alignItems: 'flex-start' }}>
                    {extensions.map((extension) => (
                      <FormControlLabel
                        key={extension.id}
                        control={
                          <Checkbox
                            checked={selected && value.extensions.includes(extension.id)}
                            disabled={!selected}
                            onChange={() => toggleExtension(extension)}
                          />
                        }
                        label={extension.name}
                      />
                    ))}
                  </Stack>
                </CardContent>
              )}
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
