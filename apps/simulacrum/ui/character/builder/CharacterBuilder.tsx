'use client'

import * as React from 'react'
import { createContext, useContext, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, useForm, useWatch } from 'react-hook-form'
import Alert from '@mui/material/Alert'
import Autocomplete from '@mui/material/Autocomplete'
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
import SaveIcon from '@mui/icons-material/Save'
import { Arrays, Assertions, Maps, Objects } from '@bessemer/cornerstone'
import { CharacterRecord, CharacterSheet } from '@simulacrum/common/character/character'
import { Characters } from '@simulacrum/common/character'
import { Trait, TraitReference } from '@simulacrum/common/trait'
import { ProgressionTable } from '@simulacrum/common/progression-table'
import { Abilities, Effects, Loadout } from '@simulacrum/common'
import { Ability } from '@simulacrum/common/ability'
import { CharacterOptionValue } from '@simulacrum/common/character/character-option'
import { LoadoutTypeReference } from '@simulacrum/common/loadout'
import { ApplicationContext } from '@simulacrum/common/application'
import * as Rulesets from '@simulacrum/common/ruleset'
import { Ruleset } from '@simulacrum/common/ruleset'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { useClientContext } from '@simulacrum/ui/application/use-client-context'
import { saveCharacter, useStoredCharacter } from '@simulacrum/ui/character/character-storage'
import { RichTextDescription } from '@simulacrum/ui/character/builder/RichTextDescription'
import { Ulid } from '@bessemer/cornerstone/uuid/ulid'
import {
  getAbilityResourceLabels,
  getActionLabel,
  getActionTypeLabel,
  hasDescribedActions,
  getCharacteristicValue,
  getCharacteristicSections,
  getGrantedTraits,
  getInitialValueFieldName,
  getLoadoutAbilities,
  getOptionLabel,
  getCharacterOptionChoices,
  getValueCaption,
  MaxAbilityScore,
  MaxLevel,
  MinAbilityScore,
  newCharacter,
  selectLoadoutAbilities,
  selectValue,
  selectValuesForChoices,
  setLevel,
  CharacterOptionChoice,
  isTrait,
} from '@simulacrum/ui/character/builder/character-builder-model'

const useRulesets = (): Array<Ruleset> => {
  return (useClientContext() as unknown as ApplicationContext).client.rulesets
}

const RulesetContext = createContext<Ruleset | null>(null)

const useRuleset = (): Ruleset => {
  const ruleset = useContext(RulesetContext)
  Assertions.assertPresent(ruleset)
  return ruleset
}

// The character being edited, for cards deep in the page that show character-specific values (e.g. how many uses an ability has)
const CharacterSheetContext = createContext<CharacterSheet | null>(null)

/**
 * Creates a new character when `characterId` is null, otherwise edits the stored character with that id.
 */
export const CharacterBuilder = ({ characterId }: { characterId: Ulid | null }) => {
  const rulesets = useRulesets()
  const stored = useStoredCharacter(characterId)
  const [newCharacterRuleset, setNewCharacterRuleset] = useState<Ruleset | null>(null)

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

  const ruleset = Objects.isPresent(stored) ? Rulesets.getRuleset(stored.character.ruleset, rulesets) : newCharacterRuleset
  if (Objects.isNil(ruleset)) {
    return (
      <RulesetSelection
        rulesets={rulesets}
        onSelect={setNewCharacterRuleset}
      />
    )
  }

  return (
    <RulesetContext.Provider value={ruleset}>
      <CharacterEditor
        key={characterId ?? ruleset.id}
        characterId={characterId}
        initialCharacter={stored?.character ?? newCharacter(ruleset)}
      />
    </RulesetContext.Provider>
  )
}

const RulesetSelection = ({ rulesets, onSelect }: { rulesets: Array<Ruleset>; onSelect: (ruleset: Ruleset) => void }) => {
  return (
    <Box>
      <StandardPageHeader title="New Character" />
      <Card>
        <CardHeader
          title="Choose a Ruleset"
          subheader="The rules your character is built with. This can't be changed later."
        />
        <CardContent>
          <Grid
            container
            spacing={2}
          >
            {rulesets.map((ruleset) => (
              <Grid
                key={ruleset.id}
                size={{ xs: 12, sm: 6 }}
              >
                <Card variant="outlined">
                  <CardActionArea onClick={() => onSelect(ruleset)}>
                    <CardContent>
                      <Typography variant="h6">{ruleset.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

const CharacterEditor = ({ characterId, initialCharacter }: { characterId: Ulid | null; initialCharacter: CharacterRecord }) => {
  const ruleset = useRuleset()
  const router = useRouter()
  const [showSaved, setShowSaved] = useState(false)
  const { control, handleSubmit, reset, getValues, setValue, formState } = useForm<CharacterRecord>({
    defaultValues: initialCharacter,
    mode: 'onChange',
  })

  const character = useWatch({ control }) as CharacterRecord
  const sheet = useMemo(() => Characters.buildCharacterDefinition(character, ruleset), [character, ruleset])
  const optionChoices = useMemo(() => getCharacterOptionChoices(sheet), [sheet])
  // A new character has nothing saved yet, so it's always unsaved
  const hasUnsavedChanges = characterId === null || formState.isDirty

  // Level and trait changes go through the builder model, which can also drop selections that are no longer valid
  const applyCharacter = (updated: CharacterRecord) => {
    setValue('level', updated.level, { shouldDirty: true })
    setValue('selections', updated.selections, { shouldDirty: true })
    setValue('selectedAbilities', updated.selectedAbilities, { shouldDirty: true })
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
    <CharacterSheetContext.Provider value={sheet}>
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
                    onChange={(event) => applyCharacter(setLevel(getValues(), Number(event.target.value), ruleset))}
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

          {getCharacteristicSections(ruleset).map((section) => (
            <Card key={section.group?.id ?? 'ungrouped'}>
              <CardHeader title={section.group?.name ?? 'Characteristics'} />
              <CardContent>
                <Grid
                  container
                  spacing={2}
                >
                  {section.characteristics.map((characteristic) => (
                    <Grid
                      key={characteristic.id}
                      size={{ xs: 6, sm: 4, md: 2 }}
                    >
                      {Objects.isNil(characteristic.baseValue) ? (
                        <Controller
                          name={getInitialValueFieldName(characteristic)}
                          control={control}
                          rules={{
                            validate: (value) =>
                              (typeof value === 'number' && Number.isInteger(value) && value >= MinAbilityScore && value <= MaxAbilityScore) ||
                              `Must be ${MinAbilityScore}–${MaxAbilityScore}`,
                          }}
                          render={({ field, fieldState }) => {
                            // Show the score after increases from traits (e.g. a Background), when they change it
                            const total = getCharacteristicValue(sheet, characteristic)
                            const increase = typeof field.value === 'number' ? total - field.value : 0

                            return (
                              <TextField
                                {...field}
                                value={field.value ?? ''}
                                // Keep the value numeric; an empty field stays empty so validation can flag it
                                onChange={(event) => field.onChange(event.target.value === '' ? '' : Number(event.target.value))}
                                label={characteristic.name}
                                type="number"
                                fullWidth
                                error={fieldState.invalid}
                                helperText={
                                  fieldState.error?.message ?? (increase !== 0 ? `${increase > 0 ? '+' : ''}${increase} → ${total}` : undefined)
                                }
                                slotProps={{ htmlInput: { min: MinAbilityScore, max: MaxAbilityScore } }}
                              />
                            )
                          }}
                        />
                      ) : (
                        <TextField
                          label={characteristic.name}
                          value={getCharacteristicValue(sheet, characteristic)}
                          fullWidth
                          slotProps={{ input: { readOnly: true } }}
                        />
                      )}
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          ))}

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
                  heldTraits={sheet.traits}
                  choices={optionChoices.filter((it) => it.level === level)}
                  onSelect={(choice, value) => applyCharacter(selectValue(getValues(), choice, value, ruleset))}
                  onSelectMany={(choices, values) => applyCharacter(selectValuesForChoices(getValues(), choices, values, ruleset))}
                />
              ))}
            </Stack>
          </Box>

          <AbilitiesSection
            sheet={sheet}
            onSelect={(loadoutType, abilities) => applyCharacter(selectLoadoutAbilities(getValues(), loadoutType, abilities, ruleset))}
          />
        </Stack>

        <Snackbar
          open={showSaved}
          autoHideDuration={3000}
          onClose={() => setShowSaved(false)}
          message="Character saved"
        />
      </Box>
    </CharacterSheetContext.Provider>
  )
}

const LevelTraits = ({
  level,
  heldTraits,
  choices,
  onSelect,
  onSelectMany,
}: {
  level: number
  // Every trait the character has, by level
  heldTraits: ProgressionTable<TraitReference>
  choices: Array<CharacterOptionChoice>
  onSelect: (choice: CharacterOptionChoice, value: CharacterOptionValue | null) => void
  onSelectMany: (choices: Array<CharacterOptionChoice>, values: Array<CharacterOptionValue>) => void
}) => {
  const ruleset = useRuleset()
  const choiceGroups = groupChoicesByOption(choices)

  return (
    <Card variant="outlined">
      <CardHeader title={`Level ${level}`} />
      <CardContent>
        {Arrays.isEmpty(choices) ? (
          <Typography>No trait choices at this level.</Typography>
        ) : (
          <Stack spacing={3}>
            {choiceGroups.map((group) => {
              // An option granted more than once at this level (e.g. three weapon masteries) is chosen with a single multi-select
              if (group.length > 1) {
                return (
                  <Box key={group[0]!.key}>
                    <MultiValueSelect
                      label={getOptionLabel(group[0]!.option, ruleset)}
                      choices={group}
                      onSelect={(values) => onSelectMany(group, values)}
                    />
                    <SelectedValues
                      values={Arrays.fromNilable(group.map((it) => it.selection))}
                      level={level}
                      heldTraits={heldTraits}
                    />
                  </Box>
                )
              }

              const choice = group[0]!
              return (
                <Box key={choice.key}>
                  <ValueSelect
                    label={getOptionLabel(choice.option, ruleset)}
                    choice={choice}
                    onSelect={(value) => onSelect(choice, value)}
                  />
                  <SelectedValues
                    values={Arrays.fromNilable([choice.selection])}
                    level={level}
                    heldTraits={heldTraits}
                  />
                </Box>
              )
            })}
          </Stack>
        )}
      </CardContent>
    </Card>
  )
}

// Groups choices for the same option together, in the order each option first appears
// (Arrays.groupBy only groups adjacent elements, and choices for the same option aren't always adjacent)
const groupChoicesByOption = (choices: Array<CharacterOptionChoice>): Array<Array<CharacterOptionChoice>> => {
  return [...Maps.groupBy(choices, (it) => it.option.id).values()]
}

const MultiValueSelect = ({
  label,
  choices,
  onSelect,
}: {
  label: string
  choices: Array<CharacterOptionChoice>
  onSelect: (values: Array<CharacterOptionValue>) => void
}) => {
  const selected = Arrays.fromNilable(choices.map((it) => it.selection))
  // Each choice's values exclude the other choices' selections, so combining them gives every value available to the group
  const options = Arrays.dedupeBy(
    choices.flatMap((it) => it.values),
    (it) => it.id
  )
  const isFull = selected.length >= choices.length

  return (
    <Autocomplete
      multiple
      options={options}
      value={selected}
      onChange={(_, values) => onSelect(values)}
      getOptionLabel={(value) => value.name}
      renderOption={({ key, ...props }, value) => (
        <li
          key={key}
          {...props}
        >
          <ValueOptionText value={value} />
        </li>
      )}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionDisabled={(value) => isFull && !selected.some((it) => it.id === value.id)}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label={`${label} (${selected.length}/${choices.length})`}
          sx={selected.length < choices.length ? UnselectedChoiceSx : undefined}
        />
      )}
    />
  )
}

// Highlights a choice that still needs a selection
const UnselectedChoiceSx = {
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main', borderWidth: 2 },
}

const ValueSelect = ({
  label,
  choice,
  onSelect,
}: {
  label: string
  choice: CharacterOptionChoice
  onSelect: (value: CharacterOptionValue | null) => void
}) => {
  return (
    <TextField
      select
      fullWidth
      label={label}
      sx={Objects.isNil(choice.selection) ? UnselectedChoiceSx : undefined}
      value={choice.selection?.id ?? ''}
      onChange={(event) => onSelect(choice.values.find((it) => it.id === event.target.value) ?? null)}
      // The closed select shows just the value's name, without its archetypes
      slotProps={{ select: { renderValue: () => choice.selection?.name ?? '' } }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {choice.values.map((value) => (
        <MenuItem
          key={value.id}
          value={value.id}
        >
          <ValueOptionText value={value} />
        </MenuItem>
      ))}
    </TextField>
  )
}

// A dropdown entry: the value's name, with its archetypes (for a trait) as a caption beside it
const ValueOptionText = ({ value }: { value: CharacterOptionValue }) => {
  const ruleset = useRuleset()
  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
      <Typography>{value.name}</Typography>
      <Typography variant="caption">{getValueCaption(value, ruleset)}</Typography>
    </Box>
  )
}

// Cards for the values selected for a choice: traits, along with the traits they grant, and abilities
const SelectedValues = ({
  values,
  level,
  heldTraits,
}: {
  values: Array<CharacterOptionValue>
  level: number
  heldTraits: ProgressionTable<TraitReference>
}) => {
  const abilities = values.filter((it): it is Ability => !isTrait(it))

  return (
    <>
      <SelectedTraits
        traits={values.filter(isTrait)}
        level={level}
        heldTraits={heldTraits}
      />
      {!Arrays.isEmpty(abilities) && (
        <Box sx={{ mt: 2 }}>
          <AbilityCards abilities={abilities} />
        </Box>
      )}
    </>
  )
}

// A card for each selected trait, shown under its dropdown, followed by the traits each one grants outright (e.g. a Background's
// skill proficiencies). A granted trait that applied at a later level (e.g. a subclass feature that improves) says so.
const SelectedTraits = ({ traits, level, heldTraits }: { traits: Array<Trait>; level: number; heldTraits: ProgressionTable<TraitReference> }) => {
  const ruleset = useRuleset()

  // One grid for all the selected traits (e.g. both skill proficiencies), each followed by what it grants. CardGrid gives each child its
  // own cell, so the cards are built as a flat list rather than grouped in fragments.
  const cards = traits.flatMap((trait) => {
    const grantedTraits = getGrantedTraits(trait, heldTraits, ruleset)
    // The abilities the trait grants, along with those of the traits it grants at this level (a trait granted at a later level, e.g. a
    // subclass feature that improves, doesn't count here)
    const abilities = getTraitAbilities([trait, ...grantedTraits.flatMap((it) => (it.level === level ? [it.trait] : []))], ruleset)

    return [
      <TraitCard
        key={trait.id}
        trait={trait}
      />,
      ...grantedTraits.map((it) => (
        <TraitCard
          key={`${trait.id}/${it.trait.id}`}
          trait={it.trait}
          caption={it.level === level ? null : `From level ${it.level}`}
        />
      )),
      ...abilities.map((it) => (
        <AbilityCard
          key={`${trait.id}/${it.id}`}
          ability={it}
        />
      )),
    ]
  })

  if (Arrays.isEmpty(cards)) {
    return null
  }

  return <CardGrid marginTop={2}>{cards}</CardGrid>
}

// The abilities the given traits grant outright. Abilities that take a loadout slot (e.g. a Wizard's cantrips) are shown in the Abilities
// section instead.
const getTraitAbilities = (traits: Array<Trait>, ruleset: Ruleset): Array<Ability> => {
  return traits.flatMap((trait) =>
    Effects.filter(trait.effects, Effects.GainAbility)
      .filter((it) => Objects.isNil(it.loadout))
      .map((it) => Abilities.getAbility(it.ability, ruleset))
  )
}

// Lays out cards three to a row on wide screens
const CardGrid = ({ children, marginTop = 0 }: { children: React.ReactNode; marginTop?: number }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: marginTop }}
    >
      {React.Children.map(children, (child) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>{child}</Grid>
      ))}
    </Grid>
  )
}

// FUTURE this is where a trait's full description and details will go
const TraitCard = ({ trait, caption = null }: { trait: Trait; caption?: string | null }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6">{trait.name}</Typography>
        {Objects.isPresent(caption) && <Typography variant="caption">{caption}</Typography>}
        <RichTextDescription text={trait.description} />
      </CardContent>
    </Card>
  )
}

const AbilityCard = ({ ability: rulesetAbility }: { ability: Ability }) => {
  const ruleset = useRuleset()
  const sheet = useContext(CharacterSheetContext)
  const ability = sheet?.abilities.find((it) => it.ability.id === rulesetAbility.id)?.ability ?? rulesetAbility
  const resourceLabels = Objects.isNil(sheet) ? [] : getAbilityResourceLabels(ability, sheet, ruleset)

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6">{ability.name}</Typography>
        {!hasDescribedActions(ability) && Objects.isPresent(getActionLabel(ability)) && (
          <Typography variant="caption">{getActionLabel(ability)}</Typography>
        )}
        {resourceLabels.map((it) => (
          <Typography
            key={it}
            variant="caption"
            component="p"
          >
            {it}
          </Typography>
        ))}
        {Effects.filter(ability.effects, Effects.Descriptive).map((it, index) => (
          <RichTextDescription
            key={index}
            text={it.description}
          />
        ))}
        {hasDescribedActions(ability) && <AbilityActions ability={ability} />}
      </CardContent>
    </Card>
  )
}

const AbilityCards = ({ abilities }: { abilities: Array<Ability> }) => {
  return (
    <CardGrid>
      {abilities.map((it) => (
        <AbilityCard
          key={it.id}
          ability={it}
        />
      ))}
    </CardGrid>
  )
}

// Each of an ability's actions, with what it takes to use it and its own description
const AbilityActions = ({ ability }: { ability: Ability }) => {
  return (
    <Stack
      spacing={1}
      sx={{ mt: 1 }}
    >
      {ability.actions.map((action, index) => (
        <Box key={index}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
            <Typography variant="subtitle2">{action.name ?? ability.name}</Typography>
            <Typography variant="caption">{getActionTypeLabel(action.action)}</Typography>
          </Box>
          {Objects.isPresent(action.description) && <RichTextDescription text={action.description} />}
        </Box>
      ))}
    </Stack>
  )
}

// The character's abilities: those that don't take a slot and so are always available, followed by a picker for each type of loadout
// slot (e.g. a Wizard's cantrips), filled from the abilities it has for that type
const AbilitiesSection = ({
  sheet,
  onSelect,
}: {
  sheet: CharacterSheet
  onSelect: (loadoutType: LoadoutTypeReference, abilities: Array<Ability>) => void
}) => {
  const ruleset = useRuleset()
  const loadoutTypes = Arrays.dedupe(sheet.loadout.map((it) => it.type)).map((it) => Loadout.getLoadoutType(it, ruleset))
  const alwaysAvailable = sheet.abilities.filter((it) => Objects.isNil(it.loadout)).map((it) => it.ability)

  if (Arrays.isEmpty(loadoutTypes) && Arrays.isEmpty(alwaysAvailable)) {
    return null
  }

  return (
    <Card>
      <CardHeader title="Abilities" />
      <CardContent>
        <Stack spacing={3}>
          {!Arrays.isEmpty(alwaysAvailable) && <AbilityCards abilities={alwaysAvailable} />}
          {loadoutTypes.map((loadoutType) => {
            const slotCount = sheet.loadout.filter((it) => it.type === loadoutType.id).length
            const options = getLoadoutAbilities(sheet, loadoutType.id)
            const selected = sheet.loadout.flatMap((it) =>
              it.type === loadoutType.id && Objects.isPresent(it.ability) ? [Abilities.getAbility(it.ability, ruleset)] : []
            )

            return (
              <Box key={loadoutType.id}>
                <Autocomplete
                  multiple
                  options={options}
                  value={selected}
                  onChange={(_, abilities) => onSelect(loadoutType.id, abilities)}
                  getOptionLabel={(ability) => ability.name}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  getOptionDisabled={(ability) => selected.length >= slotCount && !selected.some((it) => it.id === ability.id)}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={`${loadoutType.name} (${selected.length}/${slotCount})`}
                    />
                  )}
                />
                {!Arrays.isEmpty(selected) && (
                  <Box sx={{ mt: 2 }}>
                    <AbilityCards abilities={selected} />
                  </Box>
                )}
              </Box>
            )
          })}
        </Stack>
      </CardContent>
    </Card>
  )
}
