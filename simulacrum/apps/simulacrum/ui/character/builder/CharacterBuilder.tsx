'use client'

import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
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
import { Arrays, Maps, Objects } from '@bessemer/cornerstone'
import { CharacterRecord, CharacterSheet } from '@simulacrum/common/engine/character/character'
import { Trait, TraitReference } from '@simulacrum/common/engine/trait'
import { RulesetEntity } from '@simulacrum/ruleset/ruleset-entity'
import { CharacterOption } from '@simulacrum/ruleset/character-option'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { Abilities, Characteristics, Characters, Effects, Loadout, ProgressionTables } from '@simulacrum/common/engine/engine'
import { Ability } from '@simulacrum/common/engine/ability'
import { CharacterOptionValue } from '@simulacrum/common/engine/character/character-option'
import { LoadoutTypeReference } from '@simulacrum/common/engine/loadout'
import { Ruleset, RulesetConfiguration } from '@simulacrum/common/engine/ruleset'
import { RulesetSummary, toConfiguration } from '@simulacrum/common/ruleset/ruleset'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { CharacterDto, toCharacterRecord } from '@simulacrum/common/character/character'
import { createCharacter, updateCharacter } from '@simulacrum/application/character/character-actions'
import { RulesetEntityPopover } from '@simulacrum/ui/components/RulesetEntityPopover'
import { RulesetEntityContent, TraitPassiveEffects } from '@simulacrum/ui/components/RulesetEntityContent'
import { CharacterSheetContext } from '@simulacrum/ui/character/character-sheet-context'
import { RulesetContext, useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { useFetchRuleset } from '@simulacrum/ui/ruleset/use-fetch-ruleset'
import { RulesetPicker } from '@simulacrum/ui/ruleset/RulesetPicker'
import {
  CharacterOptionChoice,
  getCharacteristicSections,
  getCharacterOptionChoices,
  getGrantedTraits,
  getInitialValueFieldName,
  getLoadoutAbilities,
  getPassiveTraits,
  getValueCaption,
  isTrait,
  newCharacter,
  selectLoadoutAbilities,
  selectValue,
  selectValuesForChoices,
  setLevel,
} from '@simulacrum/ui/character/builder/character-builder-model'

export const CharacterBuilder = ({ character, rulesets }: { character: CharacterDto | null; rulesets: Array<RulesetSummary> }) => {
  const [newCharacterConfiguration, setNewCharacterConfiguration] = useState<RulesetConfiguration | null>(null)
  const configuration = Objects.isPresent(character) ? toConfiguration(character.ruleset) : newCharacterConfiguration

  const { data: ruleset, isPending: isRulesetPending } = useFetchRuleset(configuration ?? null)

  if (Objects.isPresent(configuration) && isRulesetPending) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (Objects.isNil(configuration)) {
    return (
      <RulesetSelection
        rulesets={rulesets}
        onSelect={setNewCharacterConfiguration}
      />
    )
  }

  if (Objects.isNil(ruleset)) {
    return <Alert severity="error">This character's ruleset could not be loaded.</Alert>
  }

  return (
    <RulesetContext.Provider value={ruleset}>
      <CharacterEditor
        key={character?.id ?? ruleset.id}
        characterId={character?.id ?? null}
        configuration={configuration}
        initialCharacter={Objects.isPresent(character) ? toCharacterRecord(character) : newCharacter(ruleset)}
      />
    </RulesetContext.Provider>
  )
}

const RulesetSelection = ({ rulesets, onSelect }: { rulesets: Array<RulesetSummary>; onSelect: (configuration: RulesetConfiguration) => void }) => {
  const [configuration, setConfiguration] = useState<RulesetConfiguration | null>(null)

  return (
    <Box>
      <StandardPageHeader title="New Character" />
      <Card>
        <CardHeader
          title="Choose a Ruleset"
          subheader="The rules your character is built with, and any optional extensions to include. These can't be changed later."
        />
        <CardContent>
          <RulesetPicker
            rulesets={rulesets}
            value={configuration}
            onChange={setConfiguration}
          />
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

const RulesetEntityInfo = ({ entity }: { entity: RulesetEntity }) => {
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

const CharacterEditor = ({
  characterId,
  configuration,
  initialCharacter,
}: {
  characterId: UuidV7 | null
  configuration: RulesetConfiguration
  initialCharacter: CharacterRecord
}) => {
  const ruleset = useRuleset()
  const router = useRouter()
  const [showSaved, setShowSaved] = useState(false)
  const [saveFailed, setSaveFailed] = useState(false)
  const { control, handleSubmit, reset, getValues, setValue, formState } = useForm<CharacterRecord>({
    defaultValues: initialCharacter,
    mode: 'onChange',
  })

  const characterRecord = useWatch({ control }) as CharacterRecord
  const character = useMemo(() => Characters.buildCharacterDefinition(characterRecord, ruleset), [characterRecord, ruleset])
  const characterContext = useMemo(
    () => ({ character, expressionContext: Characters.buildExpressionContext(character, ruleset) }),
    [character, ruleset]
  )
  const optionChoices = useMemo(() => getCharacterOptionChoices(character), [character])
  const hasUnsavedChanges = characterId === null || formState.isDirty

  const applyCharacter = (updated: CharacterRecord) => {
    setValue('level', updated.level, { shouldDirty: true })
    setValue('selections', updated.selections, { shouldDirty: true })
    setValue('selectedAbilities', updated.selectedAbilities, { shouldDirty: true })
  }

  const handleSave = handleSubmit(async (values) => {
    try {
      if (characterId === null) {
        const created = await createCharacter({ ...values, ruleset: configuration })
        reset(values)
        router.replace(`/characters/${created.id}/builder`)
      } else {
        await updateCharacter(characterId, values)
        reset(values)
      }

      setShowSaved(true)
    } catch {
      setSaveFailed(true)
    }
  })

  return (
    <CharacterSheetContext.Provider value={characterContext}>
      <Box>
        <StandardPageHeader
          title={characterRecord.name.trim() || 'New Character'}
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
                loading={formState.isSubmitting}
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
                    value={characterRecord.level}
                    onChange={(event) => applyCharacter(setLevel(getValues(), Number(event.target.value), ruleset))}
                  >
                    {Arrays.range([1, ProgressionTables.getMaxLevel(ruleset.progressionTable)]).map((level) => (
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
                            const total = Characteristics.getCharacteristicValue(character, characteristic).value
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
                          value={Characteristics.getCharacteristicValue(character, characteristic).value}
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
              {Arrays.range([1, characterRecord.level]).map((level) => (
                <LevelTraits
                  key={level}
                  level={level}
                  heldTraits={character.traits}
                  choices={optionChoices.filter((it) => it.level === level)}
                  onSelect={(choice, value) => applyCharacter(selectValue(getValues(), choice, value, ruleset))}
                  onSelectMany={(choices, values) => applyCharacter(selectValuesForChoices(getValues(), choices, values, ruleset))}
                />
              ))}
            </Stack>
          </Box>

          <AbilitiesSection
            character={character}
            onSelect={(loadoutType, abilities) => applyCharacter(selectLoadoutAbilities(getValues(), loadoutType, abilities, ruleset))}
          />
        </Stack>

        <Snackbar
          open={showSaved}
          autoHideDuration={3000}
          onClose={() => setShowSaved(false)}
          message="Character saved"
        />
        <Snackbar
          open={saveFailed}
          autoHideDuration={5000}
          onClose={() => setSaveFailed(false)}
        >
          <Alert
            severity="error"
            onClose={() => setSaveFailed(false)}
          >
            The character couldn&apos;t be saved. Try again.
          </Alert>
        </Snackbar>
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
  character,
  onSelect,
}: {
  character: CharacterSheet
  onSelect: (loadoutType: LoadoutTypeReference, abilities: Array<Ability>) => void
}) => {
  const ruleset = useRuleset()
  const loadoutTypes = Arrays.dedupe(character.loadout.map((it) => it.type)).map((it) => Loadout.getLoadoutTypeById(it, ruleset))
  const alwaysAvailable = character.abilities.filter((it) => Objects.isNil(it.loadout)).map((it) => it.ability)
  const passiveTraits = getPassiveTraits(character, ruleset)

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
            const slotCount = character.loadout.filter((it) => it.type === loadoutType.id).length
            const options = getLoadoutAbilities(character, loadoutType.id)
            const selected = character.loadout.flatMap((it) =>
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
