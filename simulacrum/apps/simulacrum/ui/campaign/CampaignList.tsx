'use client'

import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Box, Button, Card, CardActionArea, CardContent, Grid, Paper, TextField, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutlined'
import { Arrays } from '@bessemer/cornerstone'
import { CampaignDto } from '@simulacrum/common/campaign/campaign'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { getRulesetLabel } from '@simulacrum/ui/ruleset/ruleset-label'

const getInviteCode = (value: string): string => {
  return value.trim().split('/').filter(Boolean).at(-1) ?? ''
}

export const CampaignList = ({ campaigns }: { campaigns: Array<CampaignDto> }) => {
  const router = useRouter()
  const [invite, setInvite] = useState('')
  const inviteCode = getInviteCode(invite)

  return (
    <div>
      <StandardPageHeader
        title="Campaigns"
        content={
          <Button
            component={Link}
            href="/campaigns/new"
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
            Create a Campaign
          </Button>
        }
      />

      <Box
        component="form"
        onSubmit={(event) => {
          event.preventDefault()
          if (inviteCode !== '') {
            router.push(`/campaigns/join/${encodeURIComponent(inviteCode)}`)
          }
        }}
        sx={{ display: 'flex', gap: 2, mb: 3 }}
      >
        <TextField
          size="small"
          placeholder="Paste an invite link or code"
          value={invite}
          onChange={(event) => setInvite(event.target.value)}
          sx={{ flexGrow: 1, maxWidth: { sm: '60%' } }}
        />
        <Button
          type="submit"
          variant="outlined"
          disabled={inviteCode === ''}
        >
          Join
        </Button>
      </Box>

      {Arrays.isEmpty(campaigns) ? (
        <Paper
          variant="outlined"
          sx={{ p: 4, textAlign: 'center' }}
        >
          <Typography gutterBottom>You aren&apos;t in any campaigns yet.</Typography>
          <Button
            component={Link}
            href="/campaigns/new"
            variant="contained"
          >
            Create a Campaign
          </Button>
        </Paper>
      ) : (
        <Grid
          container
          spacing={2}
        >
          {campaigns.map((campaign) => (
            <Grid
              key={campaign.id}
              size={{ xs: 12, sm: 6 }}
            >
              <Card>
                <CardActionArea href={`/campaigns/${campaign.id}`}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      noWrap
                    >
                      {campaign.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      noWrap
                    >
                      {getRulesetLabel(campaign.ruleset)}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {campaign.members.length} {campaign.members.length === 1 ? 'member' : 'members'} · {campaign.characters.length}{' '}
                      {campaign.characters.length === 1 ? 'character' : 'characters'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}
