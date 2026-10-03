import { Trait, TraitReference } from '@simulacrum/common/trait'
import { Effect } from '@simulacrum/common/effect'
import { CharacterChoice, CharacterOptionType, CharacterSelection } from '@simulacrum/common/character/character-option'
import { CharacterOptions, CharacterProgression } from '@simulacrum/common/character/index'
import { ProgressionTable } from '@simulacrum/common/progression-table'
import { Ability, AbilityReference, AbilityState } from '@simulacrum/common/ability'
import { LoadoutSlot } from '@simulacrum/common/loadout'
import { Characteristic, CharacteristicValue } from '@simulacrum/common/characteristic'
import { ResourcePoolReference, ResourcePoolState } from '@simulacrum/common/resource-pool'
import { EvaluateExpression, ExpressionContext, Expressions, ExpressionVariable } from '@bessemer/cornerstone/expression'
import { Abilities, Characteristics, Effects, ProgressionTables, ResourcePools, Traits } from '@simulacrum/common'
import { Arrays, Assertions, Misc, ObjectPaths, Objects } from '@bessemer/cornerstone'
import { ApplicationContext } from '@simulacrum/common/application'
import { UnknownRecord } from 'type-fest'

export namespace CharacterValues {
  export const Level: ExpressionVariable<number> = Expressions.variable('Level')
  export const Traits: ExpressionVariable<Array<TraitReference>> = Expressions.variable('Traits')
}

export type CharacterInitialValues = UnknownRecord

export type CharacterRecord = {
  name: string
  level: number
  initialValues: CharacterInitialValues
  selections: ProgressionTable<CharacterSelection>
  selectedAbilities: Array<AbilityReference>
}

export type CharacterSheet = CharacterRecord & {
  characteristics: Record<string, CharacteristicValue<unknown>>
  traits: ProgressionTable<TraitReference>
  choices: ProgressionTable<CharacterChoice>
  abilities: Array<AbilityState>
  loadout: Array<LoadoutSlot>
  resources: Record<ResourcePoolReference, ResourcePoolState>
}

export type CharacterState = CharacterSheet & {}

export const selectOption = (character: CharacterRecord, selection: CharacterSelection, context: ApplicationContext): CharacterSheet => {
  const characterDefinition = buildCharacterDefinition(character, context)

  const level = CharacterOptions.validateSelection(characterDefinition.choices, selection)
  characterDefinition.selections[level]!.push(selection)

  return buildCharacterDefinition(characterDefinition, context)
}

export const buildCharacterDefinition = (character: CharacterRecord, context: ApplicationContext): CharacterSheet => {
  const { choices, traits } = evaluateCharacterOptions(character, context)

  // TODO If the computed selections didn't match up with the character... do some error thing...
  const characterState = buildCharacterState({ ...character, selections: getSelections(choices) }, traits, choices, context)
  characterState.choices = choices
  characterState.selectedAbilities = Arrays.fromNilable(characterState.loadout.map((it) => it.ability))
  return characterState
}

type CharacterProgress = {
  choices: ProgressionTable<CharacterChoice>
  traits: ProgressionTable<TraitReference>
  grantedTraits: Array<TraitReference>
}

/**
 * Walks the options granted to the character in order: level by level, and within a level a trait's options right after the option
 * that selected it, then those of traits granted outright. Each option is evaluated against the character as it stood just before
 * it, so its prerequisites and already-held traits account for everything selected at lower levels and earlier at the same level, but
 * nothing after it. A selection that isn't allowed at that point is dropped.
 *
 * A trait granted outright applies once its prerequisites are met, which may be at a later level (e.g. a subclass feature that improves
 * at a higher class level). Until then it waits, and is checked again whenever the character gains a trait and at each new level.
 *
 * Traits granted outright (e.g. a Background's skill proficiencies) take priority over choices wherever they're granted: no option
 * offers them, even one that comes before the trait that grants them. Which traits are granted depends on the selections the walk
 * accepts, so the walk starts from the traits the character's selections would grant and is repeated until they agree.
 */
const evaluateCharacterOptions = (character: CharacterRecord, context: ApplicationContext): CharacterProgress => {
  type Walk = { reservedTraits: Array<TraitReference>; progress: CharacterProgress }

  const { progress } = Misc.doUntilConsistent<Walk>(
    (previous) => {
      const reservedTraits = Objects.isNil(previous) ? guessGrantedTraits(character, context) : previous.progress.grantedTraits

      // The previous walk already used these granted traits, so walking again would give the same result
      if (Objects.isPresent(previous) && isSameTraits(previous.reservedTraits, reservedTraits)) {
        return previous
      }

      return { reservedTraits, progress: walkCharacterOptions(character, reservedTraits, context) }
    },
    (first, second) => isSameTraits(first.reservedTraits, second.reservedTraits)
  )

  return progress
}

const isSameTraits = (first: Array<TraitReference>, second: Array<TraitReference>): boolean => {
  return Arrays.containsAll(first, second) && Arrays.containsAll(second, first)
}

const guessGrantedTraits = (character: CharacterRecord, context: ApplicationContext): Array<TraitReference> => {
  const getGranted = (effects: Array<Effect>): Array<TraitReference> => {
    return Effects.filter(effects, Effects.GainTrait).flatMap((it) => [it.trait, ...getGranted(Traits.getTrait(it.trait, context).effects)])
  }

  const rulesetEffects = ProgressionTables.getValues(ProgressionTables.capAtLevel(context.client.ruleset.progressionTable, character.level))

  const selections = ProgressionTables.getValues(character.selections)
  const selectedTraits = context.client.ruleset.traits.filter((trait) => selections.some((it) => it.selection === trait.id))
  return [...getGranted(rulesetEffects), ...selectedTraits.flatMap((it) => getGranted(it.effects))]
}

const walkCharacterOptions = (character: CharacterRecord, reservedTraits: Array<TraitReference>, context: ApplicationContext): CharacterProgress => {
  const choices = ProgressionTables.empty<CharacterChoice>(character.level)
  const traits = ProgressionTables.empty<TraitReference>(character.level)
  const grantedTraits: Array<TraitReference> = []

  const waitingTraits: Array<Trait> = []

  const getEvaluatorSoFar = (level: number): EvaluateExpression => {
    const traitsSoFar = ProgressionTables.map(traits, (it) => it)
    const choicesSoFar = ProgressionTables.map(choices, (it) => it)
    const buildCharacterSoFar = () =>
      buildCharacterState({ ...character, level, selections: getSelections(choicesSoFar) }, traitsSoFar, choicesSoFar, context)
    return Expressions.evaluator(buildLazyExpressionContext(level, ProgressionTables.getValues(traitsSoFar), buildCharacterSoFar, context))
  }

  const visit = (effects: Array<Effect>, level: number, unmatchedSelections: Array<CharacterSelection>) => {
    Effects.filter(effects, Effects.GainCharacterOption).forEach(({ option }) => {
      const held = {
        traits: [...ProgressionTables.getValues(traits), ...reservedTraits],
        abilities: getGrantedAbilities(CharacterProgression.buildEffectsTable(level, traits, choices, context)),
      }
      const choice = CharacterOptions.evaluateChoice(option, held, getEvaluatorSoFar(level), context)

      const match = Arrays.findWithIndex(
        unmatchedSelections,
        (it) => it.option === option.id && CharacterOptions.isAllowedValue(choice, it.selection)
      )
      const selection = Objects.isNil(match) ? null : unmatchedSelections.splice(match[1], 1)[0]!
      choices[level]!.push({ ...choice, selection })

      if (Objects.isPresent(selection) && option.type === CharacterOptionType.SelectTrait) {
        gain(Traits.getTrait(selection.selection as TraitReference, context), level, unmatchedSelections)
      }
    })

    Effects.filter(effects, Effects.GainTrait).forEach(({ trait }) => {
      waitingTraits.push(Traits.getTrait(trait, context))
      grantWaitingTraits(level, unmatchedSelections)
    })
  }

  const gain = (trait: Trait, level: number, unmatchedSelections: Array<CharacterSelection>) => {
    traits[level]!.push(trait.id)
    visit(trait.effects, level, unmatchedSelections)
    grantWaitingTraits(level, unmatchedSelections)
  }

  const grantWaitingTraits = (level: number, unmatchedSelections: Array<CharacterSelection>) => {
    const evaluate = getEvaluatorSoFar(level)
    const match = Arrays.findWithIndex(waitingTraits, (it) => it.prerequisites.every(evaluate))
    if (Objects.isNil(match)) {
      return
    }

    const [trait, index] = match
    waitingTraits.splice(index, 1)
    grantedTraits.push(trait.id)
    gain(trait, level, unmatchedSelections)
  }

  Arrays.range([1, character.level]).forEach((level) => {
    const unmatchedSelections = [...(character.selections[level] ?? [])]
    grantWaitingTraits(level, unmatchedSelections)
    visit(context.client.ruleset.progressionTable[level] ?? [], level, unmatchedSelections)
  })

  return { choices, traits, grantedTraits }
}

const buildLazyExpressionContext = (
  level: number,
  traits: Array<TraitReference>,
  buildCharacter: () => CharacterState,
  context: ApplicationContext
): ExpressionContext => {
  let fullContext: ExpressionContext | null = null
  const variables: UnknownRecord = {
    ...Expressions.buildVariable(CharacterValues.Level, level),
    ...Expressions.buildVariable(CharacterValues.Traits, traits),
  }

  context.client.ruleset.playerCharacteristics.forEach((characteristic) => {
    Object.defineProperty(variables, characteristic.variable.name, {
      enumerable: true,
      get: () => {
        fullContext ??= buildExpressionContext(buildCharacter(), context)
        return fullContext.variables[characteristic.variable.name]
      },
    })
  })

  return { variables }
}

const getGrantedAbilities = (effects: ProgressionTable<Effect>): Array<AbilityReference> => {
  return Effects.filter(ProgressionTables.getValues(effects), Effects.GainAbility).map((it) => it.ability)
}

const getSelections = (choices: ProgressionTable<CharacterChoice>): ProgressionTable<CharacterSelection> => {
  return ProgressionTables.flatMap(choices, (it) => Arrays.fromNilable([it.selection]))
}

const getAllEffects = (character: CharacterSheet, context: ApplicationContext): Array<Effect> => {
  const progressionEffects = ProgressionTables.getValues(
    CharacterProgression.buildEffectsTable(character.level, character.traits, character.choices, context)
  )
  const abilityEffects = getActiveAbilities(character).flatMap((ability) => Abilities.getEffectsForAbility(ability))
  return [...progressionEffects, ...abilityEffects]
}

const getActiveAbilities = (character: CharacterSheet): Array<Ability> => {
  const slottedAbilities = Arrays.fromNilable(character.loadout.map((it) => it.ability))
  return character.abilities.filter((it) => Objects.isNil(it.loadout) || Arrays.contains(slottedAbilities, it.ability.id)).map((it) => it.ability)
}

const evaluateLoadout = (character: CharacterState, context: ApplicationContext): Array<LoadoutSlot> => {
  const slots: Array<LoadoutSlot> = Effects.filter(getAllEffects(character, context), Effects.GainLoadoutSlot).map((it) => ({
    type: it.loadoutType,
    ability: null,
  }))

  character.selectedAbilities.forEach((reference) => {
    const ability = character.abilities.find((it) => it.ability.id === reference)
    const isSlotted = slots.some((it) => it.ability === reference)
    const slot = slots.find((it) => Objects.isNil(it.ability) && it.type === ability?.loadout)
    if (Objects.isPresent(ability) && !isSlotted && Objects.isPresent(slot)) {
      slot.ability = reference
    }
  })

  return slots
}

const buildCharacterState = (
  character: CharacterRecord,
  traits: ProgressionTable<TraitReference>,
  choices: ProgressionTable<CharacterChoice>,
  context: ApplicationContext
): CharacterState => {
  const result = Misc.doUntilConsistent<CharacterState>(
    (previous) => {
      let characterState
      if (Objects.isNil(previous)) {
        characterState = buildInitialCharacterState(character, choices, context)
        characterState.traits = traits
      } else {
        characterState = { ...previous }
      }

      const evaluator = Expressions.evaluator(buildExpressionContext(characterState, context))
      characterState.characteristics = evaluateCharacteristics(characterState, evaluator, context)
      characterState.abilities = evaluateCharacterAbilities(characterState, evaluator, context)
      characterState.loadout = evaluateLoadout(characterState, context)
      characterState.resources = evaluateResourcePools(characterState, evaluator, context)
      return characterState
    },
    (first, second) => {
      return Arrays.equalWith(Object.values(first.characteristics), Object.values(second.characteristics), (first, second) => {
        if (first.characteristic !== second.characteristic) {
          return false
        }

        return first.value === second.value
      })
    }
  )

  return result
}

const buildInitialCharacterState = (
  character: CharacterRecord,
  choices: ProgressionTable<CharacterChoice>,
  context: ApplicationContext
): CharacterState => {
  return {
    ...character,
    characteristics: buildInitialCharacteristics(character, context),
    traits: [],
    choices,
    abilities: [],
    loadout: [],
    resources: {},
  }
}

const buildInitialCharacteristics = (character: CharacterRecord, context: ApplicationContext): Record<string, CharacteristicValue<unknown>> => {
  const characterAttributes = Object.values(context.client.ruleset.playerCharacteristics)

  const characteristicValues = characterAttributes.map((initialCharacteristic) => {
    // TODO we don't support non-numeric characteristics... not sure if we even should...
    const characteristic = initialCharacteristic as Characteristic<number>
    const attributeValue = Characteristics.simpleValue(0, characteristic, character.initialValues)
    return ObjectPaths.applyAnyValue(characteristic.path, {}, attributeValue)
  })

  return Objects.deepMergeAll(characteristicValues) as Record<string, CharacteristicValue<unknown>>
}

const evaluateCharacteristics = (
  character: CharacterState,
  evaluate: EvaluateExpression,
  context: ApplicationContext
): Record<string, CharacteristicValue<unknown>> => {
  const effects = getAllEffects(character, context)
  const characterAttributes = Object.values(context.client.ruleset.playerCharacteristics)

  const characteristicValues = characterAttributes.map((initialCharacteristic) => {
    // TODO we don't support non-numeric characteristics... not sure if we even should...
    const characteristic = initialCharacteristic as Characteristic<number>
    const characteristicValue = Characteristics.evaluateCharacteristic(characteristic, character.initialValues, effects, evaluate)
    return ObjectPaths.applyAnyValue(characteristic.path, {}, characteristicValue)
  })

  return Objects.deepMergeAll(characteristicValues) as Record<string, CharacteristicValue<unknown>>
}

const evaluateCharacterAbilities = (character: CharacterState, evaluate: EvaluateExpression, context: ApplicationContext): Array<AbilityState> => {
  const gainAbilityEffects = Effects.filter(getAllEffects(character, context), Effects.GainAbility)
  const abilities = Arrays.dedupe(gainAbilityEffects.map((it) => it.ability)).filter((it) =>
    Abilities.getAbility(it, context).prerequisites.every(evaluate)
  )

  return abilities.map((ability) => {
    const grants = gainAbilityEffects.filter((it) => it.ability === ability)
    const loadout = grants.some((it) => Objects.isNil(it.loadout)) ? null : grants[0]!.loadout
    return Abilities.buildInitialState(ability, loadout, context)
  })
}

const evaluateResourcePools = (
  character: CharacterState,
  evaluate: EvaluateExpression,
  context: ApplicationContext
): Record<ResourcePoolReference, ResourcePoolState> => {
  const effects = getAllEffects(character, context)
  const modifyResourcePoolEffects = Effects.filter(effects, Effects.ModifyResourcePool)

  const resourcePools = Arrays.dedupe([
    ...Effects.filter(effects, Effects.GainResourcePool).map((it) => it.resourcePool),
    ...Arrays.filterMap(character.abilities, (it) => it.ability.resource?.id),
  ])

  const states = resourcePools.map((resourcePool) => {
    const modifiers = modifyResourcePoolEffects.filter((it) => it.resourcePool === resourcePool).map((it) => it.modifier)
    return ResourcePools.buildInitialState(resourcePool, modifiers, evaluate, context)
  })

  return Object.fromEntries(states.map((it) => [it.resource, it]))
}

export const buildExpressionContext = (character: CharacterState, context: ApplicationContext): ExpressionContext => {
  const characterAttributes = context.client.ruleset.playerCharacteristics
  const attributeVariables = characterAttributes.map((it) => {
    // FUTURE excessive casting - work on api
    const characteristic = ObjectPaths.getValue(it.path as any, character.characteristics) as any as CharacteristicValue<unknown>
    Assertions.assertPresent(characteristic)
    return Expressions.buildVariable(it.variable, characteristic.value)
  })

  const variables: UnknownRecord = {
    ...Expressions.buildVariable(CharacterValues.Level, character.level),
    ...Expressions.buildVariable(CharacterValues.Traits, ProgressionTables.getValues(character.traits)),
    ...Objects.deepMergeAll(attributeVariables),
  }

  return { variables }
}
