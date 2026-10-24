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
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SaveIcon from '@mui/icons-material/Save'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { Arrays, Maps, Objects } from '@bessemer/cornerstone'
import { CharacterRecord, CharacterSheet } from '@simulacrum/engine/character/character'
import { Trait, TraitReference } from '@simulacrum/engine/trait'
import { RulesetEntity } from '@simulacrum/ruleset/ruleset-entity'
import { CharacterOption } from '@simulacrum/ruleset/character-option'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { Abilities, Characters, Effects, Loadout, Rulesets } from '@simulacrum/engine'
import { Ability } from '@simulacrum/engine/ability'
import { CharacterOptionValue } from '@simulacrum/engine/character/character-option'
import { LoadoutTypeReference } from '@simulacrum/engine/loadout'
import { ApplicationContext } from '@simulacrum/application'
import { Ruleset, RulesetConfiguration, RulesetExtension } from '@simulacrum/engine/ruleset'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { useClientContext } from '@simulacrum/ui/application/use-client-context'
import { saveCharacter, useStoredCharacter } from '@simulacrum/ui/character/character-storage'
import { RulesetEntityPopover } from '@simulacrum/ui/components/RulesetEntityPopover'
import { RulesetEntityContent, TraitPassiveEffects } from '@simulacrum/ui/components/RulesetEntityContent'
import { getEntityTexts } from '@simulacrum/ui/components/ruleset-entity-model'
import { CharacterSheetContext } from '@simulacrum/ui/character/character-sheet-context'
import { RulesetContext, useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { Ulid } from '@bessemer/cornerstone/uuid/ulid'
import {
  CharacterOptionChoice,
  getCharacteristicSections,
  getCharacteristicValue,
  getCharacterOptionChoices,
  getGrantedTraits,
  getInitialValueFieldName,
  getLoadoutAbilities,
  getPassiveTraits,
  getValueCaption,
  isTrait,
  MaxLevel,
  newCharacter,
  selectLoadoutAbilities,
  selectValue,
  selectValuesForChoices,
  setLevel,
} from '@simulacrum/ui/character/builder/character-builder-model'

const useRulesets = (): { rulesets: Array<Ruleset>; rulesetExtensions: Array<RulesetExtension> } => {
  const { rulesets, rulesetExtensions } = (useClientContext() as unknown as ApplicationContext).client
  return { rulesets, rulesetExtensions }
}

/**
 * Creates a new character when `characterId` is null, otherwise edits the stored character with that id.
 */
export const CharacterBuilder = ({ characterId }: { characterId: Ulid | null }) => {
  const { rulesets, rulesetExtensions } = useRulesets()
  const stored = useStoredCharacter(characterId)
  const [newCharacterConfiguration, setNewCharacterConfiguration] = useState<RulesetConfiguration | null>(null)
  const configuration = stored?.character.ruleset ?? newCharacterConfiguration

  const ruleset = useMemo(
    () => (Objects.isPresent(configuration) ? Rulesets.resolveRuleset(configuration, rulesets, rulesetExtensions) : null),
    [configuration, rulesets, rulesetExtensions]
  )

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

  if (Objects.isNil(configuration) || Objects.isNil(ruleset)) {
    return (
      <RulesetSelection
        rulesets={rulesets}
        rulesetExtensions={rulesetExtensions}
        onSelect={setNewCharacterConfiguration}
      />
    )
  }

  return (
    <RulesetContext.Provider value={ruleset}>
      <CharacterEditor
        key={characterId ?? ruleset.id}
        characterId={characterId}
        initialCharacter={stored?.character ?? newCharacter(configuration, ruleset)}
      />
    </RulesetContext.Provider>
  )
}

const RulesetSelection = ({
  rulesets,
  rulesetExtensions,
  onSelect,
}: {
  rulesets: Array<Ruleset>
  rulesetExtensions: Array<RulesetExtension>
  onSelect: (configuration: RulesetConfiguration) => void
}) => {
  const [configuration, setConfiguration] = useState<RulesetConfiguration | null>(null)

  const selectRuleset = (ruleset: Ruleset) => {
    if (configuration?.id !== ruleset.id) {
      setConfiguration({ id: ruleset.id, extensions: Rulesets.getAvailableExtensions(ruleset, rulesetExtensions).map((it) => it.id) })
    }
  }

  const toggleExtension = (extension: RulesetExtension) => {
    if (Objects.isPresent(configuration)) {
      const { extensions } = configuration
      setConfiguration({
        ...configuration,
        extensions: extensions.includes(extension.id) ? extensions.filter((it) => it !== extension.id) : [...extensions, extension.id],
      })
    }
  }

  return (
    <Box>
      <StandardPageHeader title="New Character" />
      <Card>
        <CardHeader
          title="Choose a Ruleset"
          subheader="The rules your character is built with, and any optional extensions to include. These can't be changed later."
        />
        <CardContent>
          <Grid
            container
            spacing={2}
          >
            {rulesets.map((ruleset) => {
              const selected = configuration?.id === ruleset.id
              const extensions = Rulesets.getAvailableExtensions(ruleset, rulesetExtensions)

              return (
                <Grid
                  key={ruleset.id}
                  size={{ xs: 12, sm: 6 }}
                >
                  {/* The whole card selects the ruleset; a CardActionArea can't wrap it, since the extension checkboxes can't be nested in a button */}
                  <Card
                    variant="outlined"
                    role="button"
                    tabIndex={0}
                    onClick={() => selectRuleset(ruleset)}
                    onKeyDown={(event) => {
                      if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
                        event.preventDefault()
                        selectRuleset(ruleset)
                      }
                    }}
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      borderColor: selected ? 'primary.main' : undefined,
                      // An inset shadow thickens the selected border without changing the card's size
                      boxShadow: selected ? (theme) => `inset 0 0 0 1px ${theme.palette.primary.main}` : undefined,
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography variant="h6">{ruleset.name}</Typography>
                        {!Arrays.isEmpty(ruleset.content) && (
                          <IconButton
                            component="a"
                            href={`/rulebook/${ruleset.id}`}
                            target="_blank"
                            rel="noopener"
                            size="small"
                            color="primary"
                            aria-label={`${ruleset.name} rulebook`}
                            onClick={(event) => event.stopPropagation()}
                            // Centred on the heading's capitals rather than its line, which leaves room for descenders
                            sx={{ transform: 'translateY(-1px)' }}
                          >
                            <MenuBookIcon fontSize="small" />
                          </IconButton>
                        )}
                      </Box>
                    </CardContent>
                    {!Arrays.isEmpty(extensions) && (
                      <CardContent sx={{ pt: 0 }}>
                        <Typography
                          variant="overline"
                          color="text.secondary"
                        >
                          Extensions
                        </Typography>
                        <Stack sx={{ alignItems: 'flex-start' }}>
                          {extensions.map((extension) => (
                            <FormControlLabel
                              key={extension.id}
                              control={
                                <Checkbox
                                  checked={selected && configuration.extensions.includes(extension.id)}
                                  disabled={!selected}
                                  onChange={() => toggleExtension(extension)}
                                />
                              }
                              label={extension.name}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                    )}
                  </Card>
                </Grid>
              )
            })}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              variant="contained"
              disabled={Objects.isNil(configuration)}
              onClick={() => Objects.isPresent(configuration) && onSelect(configuration)}
            >
              Create Character
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

/**
 * A number input that can be left blank while typing. A blank field is stored as 0, and shows 0 once the field loses focus.
 */
// An info icon at the end of an entity's field, opening its description; nothing for an entity without one
const RulesetEntityInfo = ({ entity }: { entity: RulesetEntity }) => {
  if (getEntityTexts(entity).every((it) => Arrays.isEmpty(it.content ?? []))) {
    return null
  }

  return (
    <InputAdornment position="end">
      <RulesetEntityPopover
        entity={entity}
        trigger={
          <IconButton
            size="small"
            edge="end"
            color="primary"
            aria-label={`About ${entity.name}`}
          >
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        }
      />
    </InputAdornment>
  )
}

const NumberField = ({
  value,
  onChange,
  onBlur,
  ...props
}: Omit<TextFieldProps, 'value' | 'onChange' | 'onBlur' | 'type'> & { value: number; onChange: (value: number) => void; onBlur: () => void }) => {
  const [text, setText] = useState(String(value))
  // Follow changes made outside the field (e.g. a reset), but keep what's typed while it still means the same number
  const displayed = Number(text) === value ? text : String(value)

  return (
    <TextField
      {...props}
      type="number"
      value={displayed}
      onChange={(event) => {
        setText(event.target.value)
        onChange(Number(event.target.value))
      }}
      onBlur={() => {
        setText(String(value))
        onBlur()
      }}
    />
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
                          render={({ field, fieldState }) => {
                            // Show the score after increases from traits (e.g. a Background), when they change it
                            const total = getCharacteristicValue(sheet, characteristic)
                            const increase = typeof field.value === 'number' ? total - field.value : 0

                            return (
                              <NumberField
                                name={field.name}
                                inputRef={field.ref}
                                value={typeof field.value === 'number' ? field.value : 0}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                label={characteristic.name}
                                fullWidth
                                slotProps={{ input: { endAdornment: <RulesetEntityInfo entity={characteristic} /> } }}
                                error={fieldState.invalid}
                                helperText={
                                  fieldState.error?.message ?? (increase !== 0 ? `${increase > 0 ? '+' : ''}${increase} → ${total}` : undefined)
                                }
                              />
                            )
                          }}
                        />
                      ) : (
                        <TextField
                          label={characteristic.name}
                          value={getCharacteristicValue(sheet, characteristic)}
                          fullWidth
                          slotProps={{ input: { readOnly: true, endAdornment: <RulesetEntityInfo entity={characteristic} /> } }}
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
                      option={group[0]!.option}
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
  option,
  choices,
  onSelect,
}: {
  option: CharacterOption
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
  const isRepeatable = options.every((it) => 'repeatable' in it && it.repeatable)
  const nextChoice = choices.find((it) => Objects.isNil(it.selection))

  return (
    <Autocomplete
      multiple
      disableCloseOnSelect={isRepeatable}
      options={options}
      value={isRepeatable ? [] : selected}
      onChange={(_, values) => onSelect(isRepeatable ? [...selected, ...values] : values)}
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
      getOptionDisabled={(value) =>
        isRepeatable ? !(nextChoice?.values.some((it) => it.id === value.id) ?? false) : isFull && !selected.some((it) => it.id === value.id)
      }
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label={`${option.name} (${selected.length}/${choices.length})`}
          sx={selected.length < choices.length ? UnselectedChoiceSx : undefined}
          slotProps={{
            ...params.slotProps,
            input: {
              ...params.slotProps.input,
              startAdornment: isRepeatable
                ? selected.map((value, index) => (
                    <Chip
                      key={index}
                      size="small"
                      label={value.name}
                      onDelete={() => onSelect(selected.filter((_, it) => it !== index))}
                      sx={{ m: 0.375 }}
                    />
                  ))
                : params.slotProps.input.startAdornment,
              endAdornment: (
                <>
                  <RulesetEntityInfo entity={option} />
                  {params.slotProps.input.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
    />
  )
}

const UnselectedChoiceSx = {
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main', borderWidth: 2 },
}

const ValueSelect = ({ choice, onSelect }: { choice: CharacterOptionChoice; onSelect: (value: CharacterOptionValue | null) => void }) => {
  return (
    <TextField
      select
      fullWidth
      label={choice.option.name}
      sx={Objects.isNil(choice.selection) ? UnselectedChoiceSx : undefined}
      value={choice.selection?.id ?? ''}
      onChange={(event) => onSelect(choice.values.find((it) => it.id === event.target.value) ?? null)}
      slotProps={{
        select: { renderValue: () => choice.selection?.name ?? '' },
        input: { endAdornment: <RulesetEntityInfo entity={choice.option} /> },
      }}
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

const ValueOptionText = ({ value }: { value: CharacterOptionValue }) => {
  const ruleset = useRuleset()
  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
      <Typography>{value.name}</Typography>
      <Typography variant="caption">{getValueCaption(value, ruleset)}</Typography>
    </Box>
  )
}

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
        traits={Arrays.dedupeBy(values.filter(isTrait), (it) => it.id)}
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

const SelectedTraits = ({ traits, level, heldTraits }: { traits: Array<Trait>; level: number; heldTraits: ProgressionTable<TraitReference> }) => {
  const ruleset = useRuleset()

  const cards = traits.flatMap((trait) => {
    const grantedTraits = getGrantedTraits(trait, heldTraits, ruleset)
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

const getTraitAbilities = (traits: Array<Trait>, ruleset: Ruleset): Array<Ability> => {
  return traits.flatMap((trait) =>
    Effects.filter(trait.effects, Effects.GainAbility)
      .filter((it) => Objects.isNil(it.loadout))
      .map((it) => Abilities.getAbilityById(it.ability, ruleset))
  )
}

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

const TraitCard = ({ trait, caption = null }: { trait: Trait; caption?: string | null }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6">{trait.name}</Typography>
        {Objects.isPresent(caption) && <Typography variant="caption">{caption}</Typography>}
        <RulesetEntityContent entity={trait} />
      </CardContent>
    </Card>
  )
}

const AbilityCard = ({ ability }: { ability: Ability }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6">{ability.name}</Typography>
        <RulesetEntityContent entity={ability} />
      </CardContent>
    </Card>
  )
}

// A trait in the Abilities section, which summarizes what it does in play rather than describing it
const PassiveTraitCard = ({ trait }: { trait: Trait }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6">{trait.name}</Typography>
        <TraitPassiveEffects trait={trait} />
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

const AbilitiesSection = ({
  sheet,
  onSelect,
}: {
  sheet: CharacterSheet
  onSelect: (loadoutType: LoadoutTypeReference, abilities: Array<Ability>) => void
}) => {
  const ruleset = useRuleset()
  const loadoutTypes = Arrays.dedupe(sheet.loadout.map((it) => it.type)).map((it) => Loadout.getLoadoutTypeById(it, ruleset))
  const alwaysAvailable = sheet.abilities.filter((it) => Objects.isNil(it.loadout)).map((it) => it.ability)
  const passiveTraits = getPassiveTraits(sheet, ruleset)

  if (Arrays.isEmpty(loadoutTypes) && Arrays.isEmpty(alwaysAvailable) && Arrays.isEmpty(passiveTraits)) {
    return null
  }

  return (
    <Card>
      <CardHeader title="Abilities" />
      <CardContent>
        <Stack spacing={3}>
          {(!Arrays.isEmpty(passiveTraits) || !Arrays.isEmpty(alwaysAvailable)) && (
            <CardGrid>
              {passiveTraits.map((it) => (
                <PassiveTraitCard
                  key={it.id}
                  trait={it}
                />
              ))}
              {alwaysAvailable.map((it) => (
                <AbilityCard
                  key={it.id}
                  ability={it}
                />
              ))}
            </CardGrid>
          )}
          {loadoutTypes.map((loadoutType) => {
            const slotCount = sheet.loadout.filter((it) => it.type === loadoutType.id).length
            const options = getLoadoutAbilities(sheet, loadoutType.id)
            const selected = sheet.loadout.flatMap((it) =>
              it.type === loadoutType.id && Objects.isPresent(it.ability) ? [Abilities.getAbilityById(it.ability, ruleset)] : []
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
