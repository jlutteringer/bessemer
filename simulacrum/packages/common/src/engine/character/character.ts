import { Trait, TraitReference } from '@simulacrum/common/engine/trait'
import { ConditionalEffect, CharacterEffect } from '@simulacrum/common/engine/character-effect'
import { CharacterChoice, CharacterOptionType, CharacterSelection } from '@simulacrum/common/engine/character/character-option'
import { CharacterOptions, CharacterProgression } from '@simulacrum/common/engine/engine'
import { CharacterProgress } from '@simulacrum/common/engine/character/character-progression'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { AbilityReference, AbilityState } from '@simulacrum/common/engine/ability'
import { LoadoutSlot } from '@simulacrum/common/engine/loadout'
import { CharacteristicReference, CharacteristicValue } from '@simulacrum/common/engine/characteristic'
import { ResourcePoolReference, ResourcePoolValue } from '@simulacrum/common/engine/resource-pool'
import { EvaluateExpression, ExpressionContext, Expressions } from '@bessemer/cornerstone/expression'
import { Abilities, Characteristics, CharacterEffects, ProgressionTables, Traits } from '@simulacrum/common/engine/engine'
import { Arrays, Misc, Objects } from '@bessemer/cornerstone'
import * as Rulesets from '@simulacrum/common/engine/ruleset'
import { Ruleset } from '@simulacrum/common/engine/ruleset'
import { UnknownRecord } from 'type-fest'
import { CharacterValues, RulesetEntities } from '@simulacrum/ruleset'

import { buildCharacterState, buildExpressionContext } from '@simulacrum/common/engine/character/character-sheet'

export { buildExpressionContext }

export type CharacterInitialValues = UnknownRecord

export type CharacterRecord = {
  name: string
  level: number
  initialValues: CharacterInitialValues
  selections: ProgressionTable<CharacterSelection>
  selectedAbilities: Array<AbilityReference>
}

export type CharacterSheet = CharacterRecord & {
  characteristics: Record<CharacteristicReference, CharacteristicValue>
  traits: ProgressionTable<TraitReference>
  choices: ProgressionTable<CharacterChoice>
  conditionalEffects: ProgressionTable<CharacterEffect>
  abilities: Array<AbilityState>
  loadout: Array<LoadoutSlot>
  resources: Record<ResourcePoolReference, ResourcePoolValue>
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
  const getGranted = (effects: Array<CharacterEffect>): Array<TraitReference> => {
    return CharacterEffects.filter(effects, CharacterEffects.GainTrait).flatMap((it) => [
      it.trait,
      ...getGranted(Traits.getTraitById(it.trait, ruleset).effects),
    ])
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
  const conditionalEffects = ProgressionTables.empty<CharacterEffect>(character.level)

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

  const visit = (effects: Array<CharacterEffect>, level: number, unmatchedSelections: Array<CharacterSelection>) => {
    CharacterEffects.filter(effects, CharacterEffects.GainCharacterOption).forEach(({ option }) => {
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

    CharacterEffects.filter(effects, CharacterEffects.GainTrait).forEach(({ trait }) => {
      waitingTraits.push(Traits.getTraitById(trait, ruleset))
      applyWaiting(level, unmatchedSelections)
    })

    CharacterEffects.filter(effects, CharacterEffects.Conditional).forEach((conditional) => {
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

const getGrantedAbilities = (effects: ProgressionTable<CharacterEffect>): Array<AbilityReference> => {
  return CharacterEffects.filter(ProgressionTables.getValues(effects), CharacterEffects.GainAbility).map((it) => it.ability)
}

const getSelections = (choices: ProgressionTable<CharacterChoice>): ProgressionTable<CharacterSelection> => {
  return ProgressionTables.flatMap(choices, (it) => Arrays.fromNilable([it.selection]))
}

export const normalizeCharacter = <T extends CharacterRecord>(character: T, ruleset: Ruleset): T => {
  const sheet = buildCharacterDefinition(character, ruleset)
  return { ...character, selections: sheet.selections, selectedAbilities: sheet.selectedAbilities }
}
