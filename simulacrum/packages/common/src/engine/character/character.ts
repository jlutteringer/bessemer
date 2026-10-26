import { Trait, TraitReference } from '@simulacrum/common/engine/trait'
import { ConditionalEffect, Effect, EffectSourceType } from '@simulacrum/common/engine/effect'
import { CharacterChoice, CharacterOptionType, CharacterSelection } from '@simulacrum/common/engine/character/character-option'
import { CharacterOptions, CharacterProgression } from '@simulacrum/common/engine/engine'
import { CharacterProgress } from '@simulacrum/common/engine/character/character-progression'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { AbilityReference, AbilityState } from '@simulacrum/common/engine/ability'
import { LoadoutSlot } from '@simulacrum/common/engine/loadout'
import { CharacteristicValue } from '@simulacrum/common/engine/characteristic'
import { ResourcePoolReference, ResourcePoolState } from '@simulacrum/common/engine/resource-pool'
import { EvaluateExpression, ExpressionContext, Expressions } from '@bessemer/cornerstone/expression'
import { Abilities, Characteristics, Effects, ProgressionTables, ResourcePools, Traits } from '@simulacrum/common/engine/engine'
import { Arrays, Assertions, Misc, ObjectPaths, Objects } from '@bessemer/cornerstone'
import * as Rulesets from '@simulacrum/common/engine/ruleset'
import { Ruleset, RulesetConfiguration } from '@simulacrum/common/engine/ruleset'
import { UnknownRecord } from 'type-fest'
import { CharacterValues, RulesetEntities } from '@simulacrum/ruleset'

export type CharacterInitialValues = UnknownRecord

export type CharacterRecord = {
  ruleset: RulesetConfiguration
  name: string
  level: number
  initialValues: CharacterInitialValues
  selections: ProgressionTable<CharacterSelection>
  selectedAbilities: Array<AbilityReference>
}

export type CharacterSheet = CharacterRecord & {
  characteristics: Record<string, CharacteristicValue>
  traits: ProgressionTable<TraitReference>
  choices: ProgressionTable<CharacterChoice>
  conditionalEffects: ProgressionTable<Effect>
  abilities: Array<AbilityState>
  loadout: Array<LoadoutSlot>
  resources: Record<ResourcePoolReference, ResourcePoolState>
}

export const selectOption = (character: CharacterRecord, selection: CharacterSelection, ruleset: Ruleset): CharacterSheet => {
  const characterDefinition = buildCharacterDefinition(character, ruleset)

  const level = CharacterOptions.validateSelection(characterDefinition.choices, selection)
  characterDefinition.selections[level]!.push(selection)

  return buildCharacterDefinition(characterDefinition, ruleset)
}

export const buildCharacterDefinition = (character: CharacterRecord, ruleset: Ruleset): CharacterSheet => {
  const { traits, choices, conditionalEffects } = evaluateCharacterOptions(character, ruleset)
  const characterState = buildCharacterState({ ...character, selections: getSelections(choices) }, { traits, choices, conditionalEffects }, ruleset)
  characterState.selectedAbilities = Arrays.fromNilable(characterState.loadout.map((it) => it.ability))
  return characterState
}

type WalkProgress = CharacterProgress & {
  grantedTraits: ProgressionTable<TraitReference>
}

const evaluateCharacterOptions = (character: CharacterRecord, ruleset: Ruleset): WalkProgress => {
  type Walk = { reservedTraits: ProgressionTable<TraitReference>; progress: WalkProgress }

  const { progress } = Misc.doUntilConsistent<Walk>(
    (previous) => {
      const reservedTraits = Objects.isNil(previous) ? guessGrantedTraits(character, ruleset) : previous.progress.grantedTraits

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
    return Effects.filter(effects, Effects.GainTrait).flatMap((it) => [it.trait, ...getGranted(Traits.getTraitById(it.trait, ruleset).effects)])
  }

  const rulesetEffects = ProgressionTables.getEntries(ProgressionTables.capAtLevel(ruleset.progressionTable, character.level))
  const selectedTraits = ProgressionTables.getEntries(character.selections).flatMap<[number, Trait]>(([level, selection]) => {
    const entity = Rulesets.findEntityById(selection.selection, ruleset)
    return Objects.isPresent(entity) && Rulesets.isEntityType(entity, RulesetEntities.RulesetEntityType.Trait) ? [[level, entity]] : []
  })

  const granted = [
    ...rulesetEffects.flatMap(([level, effect]) => getGranted([effect]).map<[number, TraitReference]>((trait) => [level, trait])),
    ...selectedTraits.flatMap(([level, trait]) => getGranted(trait.effects).map<[number, TraitReference]>((it) => [level, it])),
  ]
  const table = ProgressionTables.empty<TraitReference>(character.level)
  granted.forEach(([level, trait]) => table[level]!.push(trait))
  return table
}

const walkCharacterOptions = (character: CharacterRecord, reservedTraits: ProgressionTable<TraitReference>, ruleset: Ruleset): WalkProgress => {
  const choices = ProgressionTables.empty<CharacterChoice>(character.level)
  const traits = ProgressionTables.empty<TraitReference>(character.level)
  const grantedTraits = ProgressionTables.empty<TraitReference>(character.level)
  const conditionalEffects = ProgressionTables.empty<Effect>(character.level)

  const waitingTraits: Array<Trait> = []
  const waitingConditionals: Array<ConditionalEffect> = []

  const getEvaluatorSoFar = (level: number): EvaluateExpression => {
    const progressSoFar: CharacterProgress = {
      traits: ProgressionTables.map(traits, (it) => it),
      choices: ProgressionTables.map(choices, (it) => it),
      conditionalEffects: ProgressionTables.map(conditionalEffects, (it) => it),
    }
    const buildCharacterSoFar = () =>
      buildCharacterState({ ...character, level, selections: getSelections(progressSoFar.choices) }, progressSoFar, ruleset)
    const reservedSoFar = ProgressionTables.getValues(ProgressionTables.capAtLevel(reservedTraits, level))
    return Expressions.evaluator(
      buildLazyExpressionContext(level, [...ProgressionTables.getValues(progressSoFar.traits), ...reservedSoFar], buildCharacterSoFar, ruleset)
    )
  }

  const visit = (effects: Array<Effect>, level: number, unmatchedSelections: Array<CharacterSelection>) => {
    Effects.filter(effects, Effects.GainCharacterOption).forEach(({ option }) => {
      const evaluate = getEvaluatorSoFar(level)
      const universalAbilities = Abilities.getAbilities(ruleset).filter((it) => it.universal && it.prerequisites.every(evaluate))
      const held = {
        traits: [...ProgressionTables.getValues(traits), ...ProgressionTables.getValues(reservedTraits)],
        abilities: [
          ...getGrantedAbilities(CharacterProgression.buildEffectsTable(level, { traits, choices, conditionalEffects }, ruleset)),
          ...universalAbilities.map((it) => it.id),
        ],
      }
      const choice = CharacterOptions.evaluateChoice(option, held, evaluate, ruleset)

      const match = Arrays.findWithIndex(
        unmatchedSelections,
        (it) => it.option === option.id && CharacterOptions.isAllowedValue(choice, it.selection)
      )
      const selection = Objects.isNil(match) ? null : unmatchedSelections.splice(match[1], 1)[0]!
      choices[level]!.push({ ...choice, selection })

      if (Objects.isPresent(selection) && option.type === CharacterOptionType.SelectTrait) {
        gain(Traits.getTraitById(selection.selection as TraitReference, ruleset), level, unmatchedSelections)
      }
    })

    Effects.filter(effects, Effects.GainTrait).forEach(({ trait }) => {
      waitingTraits.push(Traits.getTraitById(trait, ruleset))
      applyWaiting(level, unmatchedSelections)
    })

    Effects.filter(effects, Effects.Conditional).forEach((conditional) => {
      waitingConditionals.push(conditional)
      applyWaiting(level, unmatchedSelections)
    })
  }

  const gain = (trait: Trait, level: number, unmatchedSelections: Array<CharacterSelection>) => {
    traits[level]!.push(trait.id)
    visit(trait.effects, level, unmatchedSelections)
    applyWaiting(level, unmatchedSelections)
  }

  const applyWaiting = (level: number, unmatchedSelections: Array<CharacterSelection>) => {
    const evaluate = getEvaluatorSoFar(level)
    const traitMatch = Arrays.findWithIndex(waitingTraits, (it) => it.prerequisites.every(evaluate))
    if (Objects.isPresent(traitMatch)) {
      const [trait, index] = traitMatch
      waitingTraits.splice(index, 1)
      grantedTraits[level]!.push(trait.id)
      gain(trait, level, unmatchedSelections)
      return
    }

    const conditionalMatch = Arrays.findWithIndex(waitingConditionals, (it) => evaluate(it.condition))
    if (Objects.isPresent(conditionalMatch)) {
      const [conditional, index] = conditionalMatch
      waitingConditionals.splice(index, 1)
      conditionalEffects[level]!.push(...conditional.effects)
      visit(conditional.effects, level, unmatchedSelections)
      applyWaiting(level, unmatchedSelections)
    }
  }

  Arrays.range([1, character.level]).forEach((level) => {
    const unmatchedSelections = [...(character.selections[level] ?? [])]
    applyWaiting(level, unmatchedSelections)
    visit(ruleset.progressionTable[level] ?? [], level, unmatchedSelections)
  })

  return { choices, traits, grantedTraits, conditionalEffects }
}

const buildLazyExpressionContext = (
  level: number,
  traits: Array<TraitReference>,
  buildCharacter: () => CharacterSheet,
  ruleset: Ruleset
): ExpressionContext => {
  let fullContext: ExpressionContext | null = null
  const variables: UnknownRecord = {
    ...Expressions.buildVariable(CharacterValues.Level, level),
    ...Expressions.buildVariable(CharacterValues.Traits, traits),
  }

  Characteristics.getCharacteristics(ruleset).forEach((characteristic) => {
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

const getProgressionEffects = (character: CharacterSheet, ruleset: Ruleset): Array<Effect> => {
  return ProgressionTables.getValues(CharacterProgression.buildEffectsTable(character.level, character, ruleset))
}

const getLoadoutEffects = (character: CharacterSheet, ruleset: Ruleset): Array<Effect> => {
  return Arrays.fromNilable(character.loadout.map((it) => it.ability)).flatMap((reference) =>
    Effects.sourceEffects(Abilities.getAbilityById(reference, ruleset).effects, { type: EffectSourceType.Ability, ability: reference })
  )
}

const getAllEffects = (character: CharacterSheet, ruleset: Ruleset): Array<Effect> => {
  return [...getProgressionEffects(character, ruleset), ...getLoadoutEffects(character, ruleset)]
}

const evaluateLoadout = (character: CharacterSheet, ruleset: Ruleset): Array<LoadoutSlot> => {
  const slots: Array<LoadoutSlot> = Effects.filter(getProgressionEffects(character, ruleset), Effects.GainLoadoutSlot).map((it) => ({
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

const buildCharacterState = (character: CharacterRecord, progress: CharacterProgress, ruleset: Ruleset): CharacterSheet => {
  return Misc.doUntilConsistent<CharacterSheet>(
    (previous) => {
      const characterState = Objects.isNil(previous) ? buildInitialCharacterState(character, progress, ruleset) : { ...previous }

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
}

const buildInitialCharacterState = (character: CharacterRecord, progress: CharacterProgress, ruleset: Ruleset): CharacterSheet => {
  return {
    ...character,
    ...progress,
    characteristics: buildInitialCharacteristics(character, ruleset),
    abilities: [],
    loadout: [],
    resources: {},
  }
}

const buildInitialCharacteristics = (character: CharacterRecord, ruleset: Ruleset): Record<string, CharacteristicValue> => {
  const characteristicValues = Characteristics.getCharacteristics(ruleset).map((characteristic) => {
    const attributeValue = Characteristics.simpleValue(0, characteristic, character.initialValues)
    return ObjectPaths.applyAnyValue(characteristic.path, {}, attributeValue)
  })

  return Objects.deepMergeAll(characteristicValues) as Record<string, CharacteristicValue>
}

const evaluateCharacteristics = (character: CharacterSheet, evaluate: EvaluateExpression, ruleset: Ruleset): Record<string, CharacteristicValue> => {
  const effects = getAllEffects(character, ruleset)
  const characteristicValues = Characteristics.getCharacteristics(ruleset).map((characteristic) => {
    const characteristicValue = Characteristics.evaluateCharacteristic(characteristic, character.initialValues, effects, evaluate)
    return ObjectPaths.applyAnyValue(characteristic.path, {}, characteristicValue)
  })

  return Objects.deepMergeAll(characteristicValues) as Record<string, CharacteristicValue>
}

const evaluateCharacterAbilities = (character: CharacterSheet, evaluate: EvaluateExpression, ruleset: Ruleset): Array<AbilityState> => {
  const effects = getProgressionEffects(character, ruleset)
  const gainAbilityEffects = Effects.filter(effects, Effects.GainAbility)
  const modifyAbilityEffects = Effects.filter(effects, Effects.ModifyAbility)
  const universalAbilities = Abilities.getAbilities(ruleset)
    .filter((it) => it.universal)
    .map((it) => it.id)
  const abilities = Abilities.getAbilitiesByIds(
    Arrays.dedupe([...gainAbilityEffects.map((it) => it.ability), ...universalAbilities]),
    ruleset
  ).filter((it) => it.prerequisites.every(evaluate))

  return abilities.map((ability) => {
    const loadouts = gainAbilityEffects.filter((it) => it.ability === ability.id).map((it) => it.loadout)
    const loadout = Arrays.isEmpty(loadouts) ? ability.loadout : loadouts.includes(null) ? null : loadouts[0]!
    const modifiers = modifyAbilityEffects.filter((it) => it.ability === ability.id).map((it) => it.modifier)
    return Abilities.buildInitialState(ability.id, loadout, modifiers, evaluate, ruleset)
  })
}

const isUsable = (ability: AbilityState, character: CharacterSheet): boolean => {
  return Objects.isNil(ability.loadout) || character.loadout.some((it) => it.ability === ability.ability.id)
}

const evaluateResourcePools = (
  character: CharacterSheet,
  evaluate: EvaluateExpression,
  ruleset: Ruleset
): Record<ResourcePoolReference, ResourcePoolState> => {
  const effects = getProgressionEffects(character, ruleset)
  const modifyResourcePoolEffects = Effects.filter(effects, Effects.ModifyResourcePool)

  const resourcePools = Arrays.dedupe([
    ...Effects.filter(effects, Effects.GainResourcePool).map((it) => it.resourcePool),
    ...Arrays.filterMap(
      character.abilities.filter((it) => isUsable(it, character)),
      (it) => it.ability.resource?.id
    ),
  ])

  const states = resourcePools.map((resourcePool) => {
    const modifiers = modifyResourcePoolEffects.filter((it) => it.resourcePool === resourcePool).map((it) => it.modifier)
    return ResourcePools.buildInitialState(resourcePool, modifiers, evaluate, ruleset)
  })

  return Object.fromEntries(states.map((it) => [it.resource.id, it]))
}

export const buildExpressionContext = (character: CharacterSheet, ruleset: Ruleset): ExpressionContext => {
  const characterAttributes = Characteristics.getCharacteristics(ruleset)
  const attributeVariables = characterAttributes.map((it) => {
    const characteristic = ObjectPaths.getValue(it.path as any, character.characteristics) as any as CharacteristicValue
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
