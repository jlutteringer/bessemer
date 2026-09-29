'use client'

import * as React from 'react'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, useForm, useWatch } from 'react-hook-form'
import Alert from '@mui/material/Alert'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SaveIcon from '@mui/icons-material/Save'
import { Arrays } from '@bessemer/cornerstone'
import { CharacterRecord } from '@simulacrum/common/character/character'
import { Trait } from '@simulacrum/common/trait'
import { Abilities, Effects } from '@simulacrum/common'
import { ApplicationContext } from '@simulacrum/common/application'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { useClientContext } from '@simulacrum/ui/application/use-client-context'
import { saveCharacter, useStoredCharacter } from '@simulacrum/ui/character/character-storage'
import {
  getInitialValueCharacteristics,
  getInitialValueFieldName,
  getOptionLabel,
  getTraitSlots,
  MaxAbilityScore,
  MaxLevel,
  MinAbilityScore,
  newCharacter,
  selectTrait,
  selectTraitsForSlots,
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
  const [showSaved, setShowSaved] = useState(false)
  const { control, handleSubmit, reset, getValues, setValue, formState } = useForm<CharacterRecord>({
    defaultValues: initialCharacter,
    mode: 'onChange',
  })

  const character = useWatch({ control }) as CharacterRecord
  const traitSlots = useMemo(() => getTraitSlots(character, context), [character, context])
  // A new character has nothing saved yet, so it's always unsaved
  const hasUnsavedChanges = characterId === null || formState.isDirty

  // Level and trait changes go through the builder model, which can also drop selections that are no longer valid
  const applyCharacter = (updated: CharacterRecord) => {
    setValue('level', updated.level, { shouldDirty: true })
    setValue('selections', updated.selections, { shouldDirty: true })
  }

  const handleSave = handleSubmit((values) => {
    const saved = saveCharacter(characterId, values)
    reset(values)
    setShowSaved(true)

    if (characterId === null) {
      // Move to the saved character's URL so further saves update it rather than creating another copy
      router.replace(`/characters/${saved.id}/builder`)
    }
  })

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
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Name"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  select
                  label="Level"
                  fullWidth
                  value={character.level}
                  onChange={(event) => applyCharacter(setLevel(getValues(), Number(event.target.value), context))}
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
                  <Controller
                    name={getInitialValueFieldName(characteristic)}
                    control={control}
                    rules={{
                      validate: (value) =>
                        (typeof value === 'number' && Number.isInteger(value) && value >= MinAbilityScore && value <= MaxAbilityScore) ||
                        `Must be ${MinAbilityScore}–${MaxAbilityScore}`,
                    }}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        value={field.value ?? ''}
                        // Keep the value numeric; an empty field stays empty so validation can flag it
                        onChange={(event) => field.onChange(event.target.value === '' ? '' : Number(event.target.value))}
                        label={characteristic.name}
                        type="number"
                        fullWidth
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                        slotProps={{ htmlInput: { min: MinAbilityScore, max: MaxAbilityScore } }}
                      />
                    )}
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
                onSelect={(slot, trait) => applyCharacter(selectTrait(getValues(), slot, trait, context))}
                onSelectMany={(slots, traits) => applyCharacter(selectTraitsForSlots(getValues(), slots, traits, context))}
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
  onSelectMany,
}: {
  level: number
  slots: Array<TraitSlot>
  onSelect: (slot: TraitSlot, trait: Trait | null) => void
  onSelectMany: (slots: Array<TraitSlot>, traits: Array<Trait>) => void
}) => {
  const context = useRulesContext()
  const slotGroups = groupSlotsByOption(slots)

  return (
    <Card variant="outlined">
      <CardHeader title={`Level ${level}`} />
      <CardContent>
        {Arrays.isEmpty(slots) ? (
          <Typography sx={{ color: 'text.secondary' }}>No trait choices at this level.</Typography>
        ) : (
          <Stack spacing={3}>
            {slotGroups.map((group) => {
              // An option granted more than once at this level (e.g. three weapon masteries) is chosen with a single multi-select
              if (group.length > 1) {
                return (
                  <Box key={group[0]!.key}>
                    <MultiTraitSelect
                      label={getOptionLabel(group[0]!.option, context)}
                      slots={group}
                      onSelect={(traits) => onSelectMany(group, traits)}
                    />
                    <SelectedTraits traits={group.flatMap((it) => (it.selection === null ? [] : [it.selection]))} />
                  </Box>
                )
              }

              const slot = group[0]!
              return (
                <Box key={slot.key}>
                  <TraitSelect
                    label={getOptionLabel(slot.option, context)}
                    slot={slot}
                    onSelect={(trait) => onSelect(slot, trait)}
                  />
                  <SelectedTraits traits={slot.selection === null ? [] : [slot.selection]} />
                </Box>
              )
            })}
            <TraitAbilities traits={slots.flatMap((it) => (it.selection === null ? [] : [it.selection]))} />
          </Stack>
        )}
      </CardContent>
    </Card>
  )
}

// Groups slots for the same option together, in the order each option first appears
const groupSlotsByOption = (slots: Array<TraitSlot>): Array<Array<TraitSlot>> => {
  const groups = new Map<string, Array<TraitSlot>>()
  slots.forEach((slot) => groups.set(slot.option.id, [...(groups.get(slot.option.id) ?? []), slot]))
  return [...groups.values()]
}

const MultiTraitSelect = ({ label, slots, onSelect }: { label: string; slots: Array<TraitSlot>; onSelect: (traits: Array<Trait>) => void }) => {
  const selected = slots.flatMap((it) => (it.selection === null ? [] : [it.selection]))
  // Each slot's values exclude the other slots' selections, so combining them gives every trait available to the group
  const options = Arrays.dedupeBy(
    slots.flatMap((it) => it.values),
    (it) => it.id
  )
  const isFull = selected.length >= slots.length

  return (
    <Autocomplete
      multiple
      options={options}
      value={selected}
      onChange={(_, traits) => onSelect(traits)}
      getOptionLabel={(trait) => trait.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionDisabled={(trait) => isFull && !selected.some((it) => it.id === trait.id)}
      filterSelectedOptions
      renderOption={({ key, ...props }, trait) => (
        <li
          key={key}
          {...props}
        >
          <ListItemText
            primary={trait.name}
            secondary={trait.description || undefined}
          />
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={`${label} (${selected.length}/${slots.length})`}
        />
      )}
    />
  )
}

const TraitSelect = ({ label, slot, onSelect }: { label: string; slot: TraitSlot; onSelect: (trait: Trait | null) => void }) => {
  return (
    <TextField
      select
      fullWidth
      label={label}
      value={slot.selection?.id ?? ''}
      onChange={(event) => onSelect(slot.values.find((it) => it.id === event.target.value) ?? null)}
      // Show just the name when closed; the menu items also include the description
      slotProps={{ select: { renderValue: () => slot.selection?.name ?? '' } }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {slot.values.map((trait) => (
        <MenuItem
          key={trait.id}
          value={trait.id}
        >
          <ListItemText
            primary={trait.name}
            secondary={trait.description || undefined}
          />
        </MenuItem>
      ))}
    </TextField>
  )
}

// A card for each selected trait, shown under its dropdown
// FUTURE this is where a trait's full description and details will go
const SelectedTraits = ({ traits }: { traits: Array<Trait> }) => {
  if (Arrays.isEmpty(traits)) {
    return null
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 2 }}
    >
      {traits.map((trait) => (
        <Grid
          key={trait.id}
          size={{ xs: 12, sm: 6, md: 4 }}
        >
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6">{trait.name}</Typography>
              {trait.description && <Typography sx={{ color: 'text.secondary' }}>{trait.description}</Typography>}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

// Shows the abilities granted by the level's selected traits, after the level's choices
// FUTURE only abilities are shown so far; other effect types will be added one at a time
const TraitAbilities = ({ traits }: { traits: Array<Trait> }) => {
  const context = useRulesContext()
  const abilities = traits.flatMap((trait) =>
    Effects.filter(trait.effects, Effects.GainAbility).map((it) => Abilities.getAbility(it.ability, context))
  )

  if (Arrays.isEmpty(abilities)) {
    return null
  }

  return (
    <Box>
      <Typography
        variant="subtitle1"
        gutterBottom
      >
        Abilities
      </Typography>
      <Grid
        container
        spacing={2}
      >
        {abilities.map((ability) => (
          <Grid
            key={ability.id}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6">{ability.name}</Typography>
                {ability.description && <Typography sx={{ color: 'text.secondary' }}>{ability.description}</Typography>}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
