'use client'

import * as React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Alert, Box, Button, Card, CardContent, CardHeader, TextField } from '@mui/material'
import { Objects } from '@bessemer/cornerstone'
import { RulesetConfiguration } from '@simulacrum/common/engine/ruleset'
import { RulesetSummary } from '@simulacrum/common/ruleset/ruleset'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { RulesetPicker } from '@simulacrum/ui/ruleset/RulesetPicker'
import { createCampaign } from '@simulacrum/application/campaign/campaign-actions'

export const CampaignCreate = ({ rulesets }: { rulesets: Array<RulesetSummary> }) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [ruleset, setRuleset] = useState<RulesetConfiguration | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [failed, setFailed] = useState(false)

  const create = async () => {
    if (Objects.isNil(ruleset)) {
      return
    }

    setIsSaving(true)
    setFailed(false)
    try {
      const campaign = await createCampaign({ name: name.trim(), ruleset })
      router.push(`/campaigns/${campaign.id}`)
    } catch {
      setFailed(true)
      setIsSaving(false)
    }
  }

  return (
    <Box>
      <StandardPageHeader title="New Campaign" />
      <Card>
        <CardHeader
          title="Campaign Details"
          subheader="Characters in this campaign must use its ruleset and extensions. These can't be changed later."
        />
        <CardContent>
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
            sx={{ mb: 3 }}
          />
          <RulesetPicker
            rulesets={rulesets}
            value={ruleset}
            onChange={setRuleset}
          />
          {failed && (
            <Alert
              severity="error"
              sx={{ mt: 2 }}
            >
              The campaign couldn&apos;t be created. Try again.
            </Alert>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              variant="contained"
              disabled={name.trim() === '' || Objects.isNil(ruleset)}
              loading={isSaving}
              onClick={create}
            >
              Create Campaign
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
