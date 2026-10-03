export * from '@simulacrum/ruleset/character'
import { CharacterValues } from '@simulacrum/ruleset/character'
import { Trait, TraitReference } from '@simulacrum/engine/trait'
import { Effect } from '@simulacrum/engine/effect'
import { CharacterChoice, CharacterOptionType, CharacterSelection } from '@simulacrum/engine/character/character-option'
import { CharacterOptions, CharacterProgression } from '@simulacrum/engine/character/index'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { AbilityReference, AbilityState } from '@simulacrum/engine/ability'
import { LoadoutSlot } from '@simulacrum/engine/loadout'
import { Characteristic, CharacteristicValue } from '@simulacrum/engine/characteristic'
import { ResourcePoolReference, ResourcePoolState } from '@simulacrum/engine/resource-pool'
import { EvaluateExpression, ExpressionContext, Expressions } from '@bessemer/cornerstone/expression'
import { Abilities, Characteristics, Effects, ProgressionTables, ResourcePools, Traits } from '@simulacrum/engine'
import { Arrays, Assertions, Misc, ObjectPaths, Objects } from '@bessemer/cornerstone'
import { Ruleset, RulesetReference } from '@simulacrum/engine/ruleset'
import { UnknownRecord } from 'type-fest'

export type CharacterInitialValues = UnknownRecord

export type CharacterRecord = {
  ruleset: RulesetReference
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

export const selectOption = (character: CharacterRecord, selection: CharacterSelection, ruleset: Ruleset): CharacterSheet => {
  const characterDefinition = buildCharacterDefinition(character, ruleset)

  const level = CharacterOptions.validateSelection(characterDefinition.choices, selection)
  characterDefinition.selections[level]!.push(selection)

  return buildCharacterDefinition(characterDefinition, ruleset)
}

export const buildCharacterDefinition = (character: CharacterRecord, ruleset: Ruleset): CharacterSheet => {
  const { choices, traits } = evaluateCharacterOptions(character, ruleset)

  // TODO If the computed selections didn't match up with the character... do some error thing...
  const characterState = buildCharacterState({ ...character, selections: getSelections(choices) }, traits, choices, ruleset)
  characterState.choices = choices
  characterState.selectedAbilities = Arrays.fromNilable(characterState.loadout.map((it) => it.ability))
  return characterState
}

type CharacterProgress = {
  choices: ProgressionTable<CharacterChoice>
  traits: ProgressionTable<TraitReference>
  grantedTraits: ProgressionTable<TraitReference>
}

/**
 * Walks the options granted to the character in order: level by level, and within a level a trait's options right after the option
 * that selected it, then those of traits granted outright. Each option is evaluated against the character as it stood just before
 * it, so its prerequisites and already-held traits account for everything selected at lower levels and earlier at the same level, but
 * no later selections. Its prerequisites also count traits granted outright at its level or earlier, wherever they're granted (e.g. a
 * Background's skill proficiency for a class's Expertise). A selection that isn't allowed at that point is dropped.
 *
 * A trait granted outright applies once its prerequisites are met, which may be at a later level (e.g. a subclass feature that improves
 * at a higher class level). Until then it waits, and is checked again whenever the character gains a trait and at each new level.
 *
 * Traits granted outright (e.g. a Background's skill proficiencies) take priority over choices wherever they're granted: no option
 * offers them, even one that comes before the trait that grants them. Which traits are granted depends on the selections the walk
 * accepts, so the walk starts from the traits the character's selections would grant and is repeated until they agree.
 */
const evaluateCharacterOptions = (character: CharacterRecord, ruleset: Ruleset): CharacterProgress => {
  type Walk = { reservedTraits: ProgressionTable<TraitReference>; progress: CharacterProgress }

  const { progress } = Misc.doUntilConsistent<Walk>(
    (previous) => {
      const reservedTraits = Objects.isNil(previous) ? guessGrantedTraits(character, ruleset) : previous.progress.grantedTraits

      // The previous walk already used these granted traits, so walking again would give the same result
      if (Objects.isPresent(previous) && isSameTraits(previous.reservedTraits, reservedTraits)) {
        return previous
      }

      return { reservedTraits, progress: walkCharacterOptions(character, reservedTraits, ruleset) }
    },
    (first, second) => isSameTraits(first.reservedTraits, second.reservedTraits)
  )

  return progress
}

const isSameTraits = (first: ProgressionTable<TraitReference>, second: ProgressionTable<TraitReference>): boolean => {
  const firstEntries = ProgressionTables.getEntries(first).map(([level, trait]) => `${level}/${trait}`)
  const secondEntries = ProgressionTables.getEntries(second).map(([level, trait]) => `${level}/${trait}`)
  return Arrays.containsAll(firstEntries, secondEntries) && Arrays.containsAll(secondEntries, firstEntries)
}

const guessGrantedTraits = (character: CharacterRecord, ruleset: Ruleset): ProgressionTable<TraitReference> => {
  const getGranted = (effects: Array<Effect>): Array<TraitReference> => {
    return Effects.filter(effects, Effects.GainTrait).flatMap((it) => [it.trait, ...getGranted(Traits.getTrait(it.trait, ruleset).effects)])
  }

  const rulesetEffects = ProgressionTables.getEntries(ProgressionTables.capAtLevel(ruleset.progressionTable, character.level))
  const selectedTraits = ProgressionTables.getEntries(character.selections).flatMap(([level, selection]) =>
    ruleset.traits.filter((trait) => trait.id === selection.selection).map<[number, Trait]>((trait) => [level, trait])
  )

  const granted = [
    ...rulesetEffects.flatMap(([level, effect]) => getGranted([effect]).map<[number, TraitReference]>((trait) => [level, trait])),
    ...selectedTraits.flatMap(([level, trait]) => getGranted(trait.effects).map<[number, TraitReference]>((it) => [level, it])),
  ]
  const table = ProgressionTables.empty<TraitReference>(character.level)
  granted.forEach(([level, trait]) => table[level]!.push(trait))
  return table
}

const walkCharacterOptions = (character: CharacterRecord, reservedTraits: ProgressionTable<TraitReference>, ruleset: Ruleset): CharacterProgress => {
  const choices = ProgressionTables.empty<CharacterChoice>(character.level)
  const traits = ProgressionTables.empty<TraitReference>(character.level)
  const grantedTraits = ProgressionTables.empty<TraitReference>(character.level)

  const waitingTraits: Array<Trait> = []

  const getEvaluatorSoFar = (level: number): EvaluateExpression => {
    const traitsSoFar = ProgressionTables.map(traits, (it) => it)
    const choicesSoFar = ProgressionTables.map(choices, (it) => it)
    const buildCharacterSoFar = () =>
      buildCharacterState({ ...character, level, selections: getSelections(choicesSoFar) }, traitsSoFar, choicesSoFar, ruleset)
    const reservedSoFar = ProgressionTables.getValues(ProgressionTables.capAtLevel(reservedTraits, level))
    return Expressions.evaluator(
      buildLazyExpressionContext(level, [...ProgressionTables.getValues(traitsSoFar), ...reservedSoFar], buildCharacterSoFar, ruleset)
    )
  }

  const visit = (effects: Array<Effect>, level: number, unmatchedSelections: Array<CharacterSelection>) => {
    Effects.filter(effects, Effects.GainCharacterOption).forEach(({ option }) => {
      const held = {
        traits: [...ProgressionTables.getValues(traits), ...ProgressionTables.getValues(reservedTraits)],
        abilities: getGrantedAbilities(CharacterProgression.buildEffectsTable(level, traits, choices, ruleset)),
      }
      const choice = CharacterOptions.evaluateChoice(option, held, getEvaluatorSoFar(level), ruleset)

      const match = Arrays.findWithIndex(
        unmatchedSelections,
        (it) => it.option === option.id && CharacterOptions.isAllowedValue(choice, it.selection)
      )
      const selection = Objects.isNil(match) ? null : unmatchedSelections.splice(match[1], 1)[0]!
      choices[level]!.push({ ...choice, selection })

      if (Objects.isPresent(selection) && option.type === CharacterOptionType.SelectTrait) {
        gain(Traits.getTrait(selection.selection as TraitReference, ruleset), level, unmatchedSelections)
      }
    })

    Effects.filter(effects, Effects.GainTrait).forEach(({ trait }) => {
      waitingTraits.push(Traits.getTrait(trait, ruleset))
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
    grantedTraits[level]!.push(trait.id)
    gain(trait, level, unmatchedSelections)
  }

  Arrays.range([1, character.level]).forEach((level) => {
    const unmatchedSelections = [...(character.selections[level] ?? [])]
    grantWaitingTraits(level, unmatchedSelections)
    visit(ruleset.progressionTable[level] ?? [], level, unmatchedSelections)
  })

  return { choices, traits, grantedTraits }
}

const buildLazyExpressionContext = (
  level: number,
  traits: Array<TraitReference>,
  buildCharacter: () => CharacterState,
  ruleset: Ruleset
): ExpressionContext => {
  let fullContext: ExpressionContext | null = null
  const variables: UnknownRecord = {
    ...Expressions.buildVariable(CharacterValues.Level, level),
    ...Expressions.buildVariable(CharacterValues.Traits, traits),
  }

  ruleset.playerCharacteristics.forEach((characteristic) => {
    Object.defineProperty(variables, characteristic.variable.name, {
      enumerable: true,
      get: () => {
        fullContext ??= buildExpressionContext(buildCharacter(), ruleset)
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

// The effects of the character's progression. An ability's effects describe what it does and aren't applied to the character.
const getAllEffects = (character: CharacterSheet, ruleset: Ruleset): Array<Effect> => {
  return ProgressionTables.getValues(CharacterProgression.buildEffectsTable(character.level, character.traits, character.choices, ruleset))
}

const evaluateLoadout = (character: CharacterState, ruleset: Ruleset): Array<LoadoutSlot> => {
  const slots: Array<LoadoutSlot> = Effects.filter(getAllEffects(character, ruleset), Effects.GainLoadoutSlot).map((it) => ({
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
  ruleset: Ruleset
): CharacterState => {
  const result = Misc.doUntilConsistent<CharacterState>(
    (previous) => {
      let characterState
      if (Objects.isNil(previous)) {
        characterState = buildInitialCharacterState(character, choices, ruleset)
        characterState.traits = traits
      } else {
        characterState = { ...previous }
      }

      const evaluator = Expressions.evaluator(buildExpressionContext(characterState, ruleset))
      characterState.characteristics = evaluateCharacteristics(characterState, evaluator, ruleset)
      characterState.abilities = evaluateCharacterAbilities(characterState, evaluator, ruleset)
      characterState.loadout = evaluateLoadout(characterState, ruleset)
      characterState.resources = evaluateResourcePools(characterState, evaluator, ruleset)
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

const buildInitialCharacterState = (character: CharacterRecord, choices: ProgressionTable<CharacterChoice>, ruleset: Ruleset): CharacterState => {
  return {
    ...character,
    characteristics: buildInitialCharacteristics(character, ruleset),
    traits: [],
    choices,
    abilities: [],
    loadout: [],
    resources: {},
  }
}

const buildInitialCharacteristics = (character: CharacterRecord, ruleset: Ruleset): Record<string, CharacteristicValue<unknown>> => {
  const characterAttributes = Object.values(ruleset.playerCharacteristics)

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
  ruleset: Ruleset
): Record<string, CharacteristicValue<unknown>> => {
  const effects = getAllEffects(character, ruleset)
  const characterAttributes = Object.values(ruleset.playerCharacteristics)

  const characteristicValues = characterAttributes.map((initialCharacteristic) => {
    // TODO we don't support non-numeric characteristics... not sure if we even should...
    const characteristic = initialCharacteristic as Characteristic<number>
    const characteristicValue = Characteristics.evaluateCharacteristic(characteristic, character.initialValues, effects, evaluate)
    return ObjectPaths.applyAnyValue(characteristic.path, {}, characteristicValue)
  })

  return Objects.deepMergeAll(characteristicValues) as Record<string, CharacteristicValue<unknown>>
}

const evaluateCharacterAbilities = (character: CharacterState, evaluate: EvaluateExpression, ruleset: Ruleset): Array<AbilityState> => {
  const effects = getAllEffects(character, ruleset)
  const gainAbilityEffects = Effects.filter(effects, Effects.GainAbility)
  const modifyAbilityEffects = Effects.filter(effects, Effects.ModifyAbility)
  const abilities = Arrays.dedupe(gainAbilityEffects.map((it) => it.ability)).filter((it) =>
    Abilities.getAbility(it, ruleset).prerequisites.every(evaluate)
  )

  return abilities.map((ability) => {
    const grants = gainAbilityEffects.filter((it) => it.ability === ability)
    const loadout = grants.some((it) => Objects.isNil(it.loadout)) ? null : grants[0]!.loadout
    const modifiers = modifyAbilityEffects.filter((it) => it.ability === ability).map((it) => it.modifier)
    return Abilities.buildInitialState(ability, loadout, modifiers, evaluate, ruleset)
  })
}

const evaluateResourcePools = (
  character: CharacterState,
  evaluate: EvaluateExpression,
  ruleset: Ruleset
): Record<ResourcePoolReference, ResourcePoolState> => {
  const effects = getAllEffects(character, ruleset)
  const modifyResourcePoolEffects = Effects.filter(effects, Effects.ModifyResourcePool)

  const resourcePools = Arrays.dedupe([
    ...Effects.filter(effects, Effects.GainResourcePool).map((it) => it.resourcePool),
    ...Arrays.filterMap(character.abilities, (it) => it.ability.resource?.id),
  ])

  const states = resourcePools.map((resourcePool) => {
    const modifiers = modifyResourcePoolEffects.filter((it) => it.resourcePool === resourcePool).map((it) => it.modifier)
    return ResourcePools.buildInitialState(resourcePool, modifiers, evaluate, ruleset)
  })

  return Object.fromEntries(states.map((it) => [it.resource.id, it]))
}

export const buildExpressionContext = (character: CharacterState, ruleset: Ruleset): ExpressionContext => {
  const characterAttributes = ruleset.playerCharacteristics
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
