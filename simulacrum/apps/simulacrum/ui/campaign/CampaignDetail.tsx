'use client'

import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import * as React from 'react'
import { useState, useTransition } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Arrays } from '@bessemer/cornerstone'
import { CampaignDto } from '@simulacrum/common/campaign/campaign'
import { CharacterDto } from '@simulacrum/common/character/character'
import { isSameConfiguration } from '@simulacrum/common/engine/ruleset'
import { toConfiguration } from '@simulacrum/common/ruleset/ruleset'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { getRulesetLabel } from '@simulacrum/ui/ruleset/ruleset-label'
import { getUserName } from '@simulacrum/ui/user/user-name'
import { addCharacter, deleteCampaign, removeCharacter, removeMember, resetInviteCode } from '@simulacrum/application/campaign/campaign-actions'

type PendingConfirmation = {
  title: string
  message: string
  action: string
  onConfirm: () => Promise<void>
}

export const CampaignDetail = ({
  campaign,
  currentUserId,
  characters,
  inviteUrl,
}: {
  campaign: CampaignDto
  currentUserId: UuidV7
  characters: Array<CharacterDto>
  inviteUrl: string
}) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [failed, setFailed] = useState(false)
  const [confirmation, setConfirmation] = useState<PendingConfirmation | null>(null)
  const [selectedCharacterId, setSelectedCharacterId] = useState('')
  const isOwner = campaign.owner.id === currentUserId

  const eligibleCharacters = characters.filter(
    (it) => it.campaignId === null && isSameConfiguration(toConfiguration(it.ruleset), toConfiguration(campaign.ruleset))
  )

  const run = (action: () => Promise<void>) => {
    setFailed(false)
    startTransition(async () => {
      try {
        await action()
      } catch {
        setFailed(true)
      }
    })
  }

  const confirm = () => {
    const pending = confirmation
    setConfirmation(null)
    if (pending !== null) {
      run(pending.onConfirm)
    }
  }

  return (
    <Box>
      <StandardPageHeader
        title={campaign.name}
        content={
          isOwner ? (
            <Button
              color="error"
              disabled={isPending}
              onClick={() =>
                setConfirmation({
                  title: 'Delete campaign?',
                  message: `"${campaign.name}" will be permanently deleted. Its characters will be kept, but removed from the campaign.`,
                  action: 'Delete',
                  onConfirm: async () => {
                    await deleteCampaign(campaign.id)
                    router.push('/campaigns')
                  },
                })
              }
            >
              Delete Campaign
            </Button>
          ) : (
            <Button
              color="error"
              disabled={isPending}
              onClick={() =>
                setConfirmation({
                  title: 'Leave campaign?',
                  message: `You'll leave "${campaign.name}", and your characters will be removed from it.`,
                  action: 'Leave',
                  onConfirm: async () => {
                    await removeMember(campaign.id, currentUserId)
                    router.push('/campaigns')
                  },
                })
              }
            >
              Leave Campaign
            </Button>
          )
        }
      />
      <Typography
        variant="body1"
        sx={{ mb: 2 }}
      >
        {getRulesetLabel(campaign.ruleset)}
      </Typography>

      {failed && (
        <Alert
          severity="error"
          onClose={() => setFailed(false)}
          sx={{ mb: 2 }}
        >
          Something went wrong. Try again.
        </Alert>
      )}

      <Stack spacing={3}>
        <Card>
          <CardHeader
            title="Invite Players"
            subheader="Anyone signed in with this link can join the campaign."
            action={
              isOwner && (
                <Button
                  size="small"
                  disabled={isPending}
                  onClick={() =>
                    setConfirmation({
                      title: 'Reset invite link?',
                      message: "The current link will stop working. Members who already joined won't be affected.",
                      action: 'Reset',
                      onConfirm: () => resetInviteCode(campaign.id),
                    })
                  }
                >
                  Reset Link
                </Button>
              )
            }
          />
          <CardContent>
            <TextField
              value={inviteUrl}
              fullWidth
              size="small"
              slotProps={{
                input: {
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Copy invite link"
                        edge="end"
                        onClick={() => navigator.clipboard.writeText(inviteUrl)}
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Members" />
          <List disablePadding>
            {campaign.members.map((member) => (
              <ListItem
                key={member.id}
                secondaryAction={
                  isOwner &&
                  member.id !== campaign.owner.id && (
                    <Button
                      size="small"
                      color="error"
                      disabled={isPending}
                      onClick={() =>
                        setConfirmation({
                          title: 'Remove member?',
                          message: `${getUserName(member)} will be removed from the campaign, along with their characters.`,
                          action: 'Remove',
                          onConfirm: () => removeMember(campaign.id, member.id),
                        })
                      }
                    >
                      Remove
                    </Button>
                  )
                }
              >
                <ListItemText primary={getUserName(member)} />
                {member.id === campaign.owner.id && (
                  <Chip
                    label="Owner"
                    size="small"
                    sx={{ mr: 2 }}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Card>

        <Card>
          <CardHeader title="Characters" />
          {!Arrays.isEmpty(campaign.characters) && (
            <List disablePadding>
              {campaign.characters.map((character) => (
                <ListItem
                  key={character.id}
                  secondaryAction={
                    (isOwner || character.owner.id === currentUserId) && (
                      <Button
                        size="small"
                        disabled={isPending}
                        onClick={() => run(() => removeCharacter(campaign.id, character.id))}
                      >
                        Remove
                      </Button>
                    )
                  }
                >
                  <ListItemText
                    primary={character.name.trim() || 'Unnamed Character'}
                    secondary={`Level ${character.level} · ${getUserName(character.owner)}`}
                  />
                </ListItem>
              ))}
            </List>
          )}
          <CardContent>
            {Arrays.isEmpty(eligibleCharacters) ? (
              <Typography
                variant="body2"
                color="text.secondary"
              >
                You have no characters to add. Characters must use this campaign&apos;s ruleset and extensions, and can only be in one campaign.{' '}
                <Link href="/characters/new">Create a character</Link>
              </Typography>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  select
                  size="small"
                  label="Add one of your characters"
                  value={selectedCharacterId}
                  onChange={(event) => setSelectedCharacterId(event.target.value)}
                  sx={{ flexGrow: 1 }}
                >
                  {eligibleCharacters.map((character) => (
                    <MenuItem
                      key={character.id}
                      value={character.id}
                    >
                      {character.name.trim() || 'Unnamed Character'} · Level {character.level}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  variant="contained"
                  disabled={selectedCharacterId === '' || isPending}
                  onClick={() =>
                    run(async () => {
                      await addCharacter(campaign.id, selectedCharacterId as UuidV7)
                      setSelectedCharacterId('')
                    })
                  }
                >
                  Add
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Stack>

      <Dialog
        open={confirmation !== null}
        onClose={() => setConfirmation(null)}
      >
        <DialogTitle>{confirmation?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{confirmation?.message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmation(null)}>Cancel</Button>
          <Button
            color="error"
            onClick={confirm}
          >
            {confirmation?.action}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
