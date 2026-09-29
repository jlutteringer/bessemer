'use client'

import * as React from 'react'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SaveIcon from '@mui/icons-material/Save'
import { Arrays } from '@bessemer/cornerstone'
import { CharacterRecord } from '@simulacrum/common/character/character'
import { Trait } from '@simulacrum/common/trait'
import { ApplicationContext } from '@simulacrum/common/application'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { useClientContext } from '@simulacrum/ui/application/use-client-context'
import { saveCharacter, useStoredCharacter } from '@simulacrum/ui/character/character-storage'
import {
  getInitialValue,
  getInitialValueCharacteristics,
  getOptionLabel,
  getTraitSlots,
  MaxLevel,
  newCharacter,
  selectTrait,
  setInitialValue,
  setLevel,
  TraitSlot,
} from '@simulacrum/ui/character/builder/character-builder-model'

// The rules engine only reads `client.ruleset`, which is available from the hydrated client context
const useRulesContext = (): ApplicationContext => {
  return useClientContext() as unknown as ApplicationContext
}

/**
 * Creates a new character when `characterId` is null, otherwise edits the stored character with that id.
 */
export const CharacterBuilder = ({ characterId }: { characterId: string | null }) => {
  const context = useRulesContext()
  const stored = useStoredCharacter(characterId)

  // Local storage is only readable once the client has hydrated
  if (stored === null) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (characterId !== null && stored === undefined) {
    return (
      <Alert
        severity="warning"
        action={
          <Button
            component={Link}
            href="/characters"
            color="inherit"
            size="small"
          >
            Back to characters
          </Button>
        }
      >
        This character could not be found.
      </Alert>
    )
  }

  return (
    <CharacterEditor
      key={characterId ?? 'new'}
      characterId={characterId}
      initialCharacter={stored?.character ?? newCharacter(context)}
    />
  )
}

const CharacterEditor = ({ characterId, initialCharacter }: { characterId: string | null; initialCharacter: CharacterRecord }) => {
  const context = useRulesContext()
  const router = useRouter()
  const [character, setCharacter] = useState(initialCharacter)
  const [savedCharacter, setSavedCharacter] = useState<CharacterRecord | null>(characterId === null ? null : initialCharacter)
  const [showSaved, setShowSaved] = useState(false)

  const traitSlots = useMemo(() => getTraitSlots(character, context), [character, context])
  const hasUnsavedChanges = savedCharacter === null || JSON.stringify(savedCharacter) !== JSON.stringify(character)

  const handleSave = () => {
    const saved = saveCharacter(characterId, character)
    setSavedCharacter(character)
    setShowSaved(true)

    if (characterId === null) {
      // Move to the saved character's URL so further saves update it rather than creating another copy
      router.replace(`/characters/${saved.id}/builder`)
    }
  }

  return (
    <Box>
      <StandardPageHeader
        title={character.name.trim() || 'New Character'}
        content={
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center' }}
          >
            {hasUnsavedChanges && (
              <Chip
                label="Unsaved changes"
                size="small"
              />
            )}
            <Button
              component={Link}
              href="/characters"
              startIcon={<ArrowBackIcon />}
            >
              Characters
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSave}
            >
              Save
            </Button>
          </Stack>
        }
      />

      <Stack spacing={3}>
        <Card>
          <CardHeader title="Details" />
          <CardContent>
            <Grid
              container
              spacing={2}
            >
              <Grid size={{ xs: 12, sm: 8 }}>
                <TextField
                  label="Name"
                  fullWidth
                  value={character.name}
                  onChange={(event) => setCharacter({ ...character, name: event.target.value })}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  select
                  label="Level"
                  fullWidth
                  value={character.level}
                  onChange={(event) => setCharacter(setLevel(character, Number(event.target.value), context))}
                >
                  {Arrays.range([1, MaxLevel]).map((level) => (
                    <MenuItem
                      key={level}
                      value={level}
                    >
                      {level}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Ability Scores" />
          <CardContent>
            <Grid
              container
              spacing={2}
            >
              {getInitialValueCharacteristics(context).map((characteristic) => (
                <Grid
                  key={characteristic.id}
                  size={{ xs: 6, sm: 4, md: 2 }}
                >
                  <TextField
                    label={characteristic.name}
                    type="number"
                    fullWidth
                    value={getInitialValue(character, characteristic)}
                    onChange={(event) => setCharacter(setInitialValue(character, characteristic, Number(event.target.value)))}
                    slotProps={{ htmlInput: { min: 1, max: 30 } }}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        <Box>
          <Typography
            variant="h5"
            gutterBottom
          >
            Traits
          </Typography>
          <Stack spacing={3}>
            {Arrays.range([1, character.level]).map((level) => (
              <LevelTraits
                key={level}
                level={level}
                slots={traitSlots.filter((it) => it.level === level)}
                onSelect={(slot, trait) => setCharacter(selectTrait(character, slot.level, slot.option, trait, context))}
              />
            ))}
          </Stack>
        </Box>
      </Stack>

      <Snackbar
        open={showSaved}
        autoHideDuration={3000}
        onClose={() => setShowSaved(false)}
        message="Character saved"
      />
    </Box>
  )
}

const LevelTraits = ({
  level,
  slots,
  onSelect,
}: {
  level: number
  slots: Array<TraitSlot>
  onSelect: (slot: TraitSlot, trait: Trait | null) => void
}) => {
  const context = useRulesContext()

  return (
    <Card variant="outlined">
      <CardHeader title={`Level ${level}`} />
      <CardContent>
        {Arrays.isEmpty(slots) ? (
          <Typography sx={{ color: 'text.secondary' }}>No trait choices at this level.</Typography>
        ) : (
          <Stack spacing={3}>
            {slots.map((slot) => (
              <Box key={slot.key}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                >
                  {getOptionLabel(slot.option, context)}
                </Typography>
                <Grid
                  container
                  spacing={2}
                >
                  {slot.values.map((trait) => (
                    <TraitCard
                      key={trait.id}
                      trait={trait}
                      selected={slot.selection?.id === trait.id}
                      // Clicking the selected trait again clears the selection
                      onClick={() => onSelect(slot, slot.selection?.id === trait.id ? null : trait)}
                    />
                  ))}
                </Grid>
              </Box>
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  )
}

const TraitCard = ({ trait, selected, onClick }: { trait: Trait; selected: boolean; onClick: () => void }) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card sx={{ height: '100%' }}>
        {/* Selectable card pattern from the MUI docs */}
        <CardActionArea
          onClick={onClick}
          data-active={selected ? '' : undefined}
          sx={{
            height: '100%',
            '&[data-active]': {
              backgroundColor: 'action.selected',
              '&:hover': {
                backgroundColor: 'action.selectedHover',
              },
            },
          }}
        >
          <CardContent sx={{ height: '100%' }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Typography variant="h6">{trait.name}</Typography>
              {selected && <CheckCircleIcon color="primary" />}
            </Stack>
            {trait.description && <Typography sx={{ color: 'text.secondary' }}>{trait.description}</Typography>}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
