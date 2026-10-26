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
import { ProgressionTables, CharacterOptions, Characters } from '@simulacrum/common/engine/engine'
import { useFetchRuleset } from '@simulacrum/ui/ruleset/use-fetch-ruleset'
import { getRulesetLabel } from '@simulacrum/ui/ruleset/ruleset-label'
import { CharacterDto, toCharacterRecord } from '@simulacrum/common/character/character'
import { toConfiguration } from '@simulacrum/common/ruleset/ruleset'
import { createCharacter, deleteCharacter } from '@simulacrum/application/character/character-actions'

enum SortOrder {
  CreatedOldest = 'CreatedOldest',
  CreatedNewest = 'CreatedNewest',
}

export const CharacterSection = ({ characters }: { characters: Array<CharacterDto> }) => {
  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState(SortOrder.CreatedOldest)
  const [characterToDelete, setCharacterToDelete] = useState<CharacterDto | null>(null)

  const visibleCharacters = useMemo(() => {
    const matching = characters.filter((it) => it.name.toLowerCase().includes(search.trim().toLowerCase()))
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

const getDisplayName = (character: CharacterDto): string => {
  return character.name.trim() || 'Unnamed Character'
}

const CharacterCard = ({ character, onDelete }: { character: CharacterDto; onDelete: () => void }) => {
  const { data: ruleset } = useFetchRuleset(toConfiguration(character.ruleset))
  const traitNames = useMemo(() => {
    if (Objects.isNil(ruleset)) {
      return []
    }

    const sheet = Characters.buildCharacterDefinition(character, ruleset)
    return ProgressionTables.getValues(sheet.choices).flatMap((it) => CharacterOptions.getSelectedValue(it)?.name ?? [])
  }, [character, ruleset])

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
          onClick={() =>
            createCharacter({ ...toCharacterRecord(character), name: `${character.name} (Copy)`, ruleset: toConfiguration(character.ruleset) })
          }
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
