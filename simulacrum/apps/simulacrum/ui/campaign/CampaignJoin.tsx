'use client'

import * as React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Alert, Box, Button, Card, CardContent, Typography } from '@mui/material'
import { CampaignInviteDto } from '@simulacrum/common/campaign/campaign'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { getRulesetLabel } from '@simulacrum/ui/ruleset/ruleset-label'
import { getUserName } from '@simulacrum/ui/user/user-name'
import { joinCampaign } from '@simulacrum/application/campaign/campaign-actions'

export const CampaignJoin = ({ invite, inviteCode }: { invite: CampaignInviteDto; inviteCode: string }) => {
  const router = useRouter()
  const [isJoining, setIsJoining] = useState(false)
  const [failed, setFailed] = useState(false)

  const join = async () => {
    setIsJoining(true)
    setFailed(false)
    try {
      const campaign = await joinCampaign(inviteCode)
      router.push(campaign === null ? '/campaigns' : `/campaigns/${campaign.id}`)
    } catch {
      setFailed(true)
      setIsJoining(false)
    }
  }

  return (
    <Box>
      <StandardPageHeader title="Join Campaign" />
      <Card>
        <CardContent>
          <Typography variant="h5">{invite.campaign.name}</Typography>
          <Typography variant="body1">{getRulesetLabel(invite.campaign.ruleset)}</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
          >
            Run by {getUserName(invite.campaign.owner)}
          </Typography>
          {failed && (
            <Alert
              severity="error"
              sx={{ my: 2 }}
            >
              You couldn&apos;t join this campaign. Try again.
            </Alert>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              variant="contained"
              loading={isJoining}
              onClick={join}
            >
              Join Campaign
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
