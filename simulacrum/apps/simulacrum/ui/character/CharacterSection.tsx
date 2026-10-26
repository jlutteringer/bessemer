'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
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
import { getRulesetLabel } from '@simulacrum/ui/ruleset/ruleset-label'
import { CharacterSummaryDto } from '@simulacrum/common/character/character'
import { copyCharacter, deleteCharacter } from '@simulacrum/application/character/character-actions'

enum SortOrder {
  CreatedOldest = 'CreatedOldest',
  CreatedNewest = 'CreatedNewest',
}

export const CharacterSection = ({ characters }: { characters: Array<CharacterSummaryDto> }) => {
  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState(SortOrder.CreatedOldest)
  const [characterToDelete, setCharacterToDelete] = useState<CharacterSummaryDto | null>(null)

  const visibleCharacters = useMemo(() => {
    const matching = characters.filter((it) => it.name.toLowerCase().includes(search.trim().toLowerCase()))
    return sortOrder === SortOrder.CreatedNewest ? Arrays.reverse(matching) : matching
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

      {Arrays.isEmpty(characters) ? (
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
            onClick={async () => {
              await deleteCharacter(characterToDelete!.id)
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

const getDisplayName = (character: CharacterSummaryDto): string => {
  return character.name.trim() || 'Unnamed Character'
}

const CharacterCard = ({ character, onDelete }: { character: CharacterSummaryDto; onDelete: () => void }) => {
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
          {getRulesetLabel(character.ruleset)} · Level {character.level}
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
