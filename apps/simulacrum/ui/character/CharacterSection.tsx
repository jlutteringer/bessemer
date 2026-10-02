'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { Arrays, Objects } from '@bessemer/cornerstone'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { ContentLabel } from '@bessemer/core/codex/component/ContentLabel'
import { ProgressionTables } from '@simulacrum/common'
import { CharacterOptions, Characters } from '@simulacrum/common/character'
import { ApplicationContext } from '@simulacrum/common/application'
import { useClientContext } from '@simulacrum/ui/application/use-client-context'
import { copyCharacter, deleteCharacter, StoredCharacter, useStoredCharacters } from '@simulacrum/ui/character/character-storage'

enum SortOrder {
  CreatedOldest = 'CreatedOldest',
  CreatedNewest = 'CreatedNewest',
}

export const CharacterSection = () => {
  const characters = useStoredCharacters()
  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState(SortOrder.CreatedOldest)
  const [characterToDelete, setCharacterToDelete] = useState<StoredCharacter | null>(null)

  const visibleCharacters = useMemo(() => {
    const matching = (characters ?? []).filter((it) => it.character.name.toLowerCase().includes(search.trim().toLowerCase()))
    const sorted = Arrays.sortBy(matching, (it) => it.createdAt)
    return sortOrder === SortOrder.CreatedNewest ? Arrays.reverse(sorted) : sorted
  }, [characters, search, sortOrder])

  return (
    <div>
      <StandardPageHeader
        title={
          <ContentLabel
            contentKey="characters.title"
            defaultValue="Characters"
          />
        }
        content={
          <Button
            component={Link}
            href="/characters/new"
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
            <ContentLabel
              contentKey="characters.create"
              defaultValue="Create a Character"
            />
          </Button>
        }
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          size="small"
          placeholder="Search by name"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          sx={{ flexGrow: 1, maxWidth: { sm: '60%' } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          select
          size="small"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value as SortOrder)}
        >
          <MenuItem value={SortOrder.CreatedOldest}>Created: Oldest</MenuItem>
          <MenuItem value={SortOrder.CreatedNewest}>Created: Newest</MenuItem>
        </TextField>
      </Box>

      {Objects.isNil(characters) ? (
        // Local storage is only readable once the client has hydrated
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      ) : Arrays.isEmpty(characters) ? (
        <Paper
          variant="outlined"
          sx={{ p: 4, textAlign: 'center' }}
        >
          <Typography gutterBottom>You haven&apos;t created any characters yet.</Typography>
          <Button
            component={Link}
            href="/characters/new"
            variant="contained"
          >
            Create a Character
          </Button>
        </Paper>
      ) : (
        <Grid
          container
          spacing={2}
        >
          {visibleCharacters.map((character) => (
            <Grid
              size={{ xs: 12, sm: 6 }}
              key={character.id}
            >
              <CharacterCard
                character={character}
                onDelete={() => setCharacterToDelete(character)}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <Dialog
        open={Objects.isPresent(characterToDelete)}
        onClose={() => setCharacterToDelete(null)}
      >
        <DialogTitle>Delete character?</DialogTitle>
        <DialogContent>
          <DialogContentText>{characterToDelete && `"${getDisplayName(characterToDelete)}" will be permanently deleted.`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCharacterToDelete(null)}>Cancel</Button>
          <Button
            color="error"
            onClick={() => {
              deleteCharacter(characterToDelete!.id)
              setCharacterToDelete(null)
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const getDisplayName = (character: StoredCharacter): string => {
  return character.character.name.trim() || 'Unnamed Character'
}

const CharacterCard = ({ character, onDelete }: { character: StoredCharacter; onDelete: () => void }) => {
  const context = useClientContext() as unknown as ApplicationContext
  // The names of the traits and abilities selected for the character's choices
  const traitNames = useMemo(() => {
    const sheet = Characters.buildCharacterDefinition(character.character, context)
    return ProgressionTables.getValues(sheet.choices).flatMap((it) => CharacterOptions.getSelectedValue(it)?.name ?? [])
  }, [character, context])

  return (
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          noWrap
        >
          {getDisplayName(character)}
        </Typography>
        <Typography
          variant="body2"
          noWrap
        >
          Level {character.character.level}
          {!Arrays.isEmpty(traitNames) && ` | ${traitNames.join(', ')}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={Link}
          href={`/characters/${character.id}/builder`}
        >
          Edit
        </Button>
        <Button
          size="small"
          onClick={() => copyCharacter(character.id)}
        >
          Copy
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          size="small"
          color="error"
          onClick={onDelete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}
