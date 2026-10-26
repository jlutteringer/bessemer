import { CharacterEffect, CharacterEffectSourceType } from '@simulacrum/common/engine/character-effect'
import { CharacterProgression } from '@simulacrum/common/engine/engine'
import { CharacterProgress } from '@simulacrum/common/engine/character/character-progression'
import { Ability, AbilityState } from '@simulacrum/common/engine/ability'
import { Modifier } from '@simulacrum/common/engine/attribute'
import { LoadoutSlot } from '@simulacrum/common/engine/loadout'
import { CharacteristicReference, CharacteristicValue } from '@simulacrum/common/engine/characteristic'
import { ResourcePool, ResourcePoolReference, ResourcePoolValue } from '@simulacrum/common/engine/resource-pool'
import { ExpressionContext, Expressions } from '@bessemer/cornerstone/expression'
import { ExpressionEvaluator } from '@bessemer/cornerstone/expression/expression-evaluator'
import {
  Abilities,
  ActionEffects,
  Characteristics,
  CharacterEffects,
  ProgressionTables,
  ResourcePools,
  Traits,
} from '@simulacrum/common/engine/engine'
import { Arrays, Misc, Objects } from '@bessemer/cornerstone'
import { Ruleset } from '@simulacrum/common/engine/ruleset'
import { UnknownRecord } from 'type-fest'
import { CharacterValues } from '@simulacrum/ruleset'

import { CharacterRecord, CharacterSheet } from '@simulacrum/common/engine/character/character'

const getProgressionEffects = (character: CharacterSheet, ruleset: Ruleset): Array<CharacterEffect> => {
  return ProgressionTables.getValues(CharacterProgression.buildEffectsTable(character.level, character, ruleset))
}

const getLoadoutEffects = (character: CharacterSheet, ruleset: Ruleset): Array<CharacterEffect> => {
  return Arrays.fromNilable(character.loadout.map((it) => it.ability)).flatMap((reference) =>
    CharacterEffects.sourceEffects(Abilities.getAbilityById(reference, ruleset).effects, {
      type: CharacterEffectSourceType.Ability,
      ability: reference,
    })
  )
}

const getAllEffects = (character: CharacterSheet, ruleset: Ruleset): Array<CharacterEffect> => {
  return [...getProgressionEffects(character, ruleset), ...getLoadoutEffects(character, ruleset)]
}

const evaluateLoadout = (character: CharacterSheet, ruleset: Ruleset): Array<LoadoutSlot> => {
  const slots: Array<LoadoutSlot> = CharacterEffects.filter(getProgressionEffects(character, ruleset), CharacterEffects.GainLoadoutSlot).map(
    (it) => ({
      type: it.loadoutType,
      ability: null,
    })
  )

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

export const buildCharacterState = (character: CharacterRecord, progress: CharacterProgress, ruleset: Ruleset): CharacterSheet => {
  return Misc.doUntilConsistent<CharacterSheet>(
    (previous) => {
      const characterState = Objects.isNil(previous) ? buildInitialCharacterState(character, progress, ruleset) : { ...previous }

      const evaluator = Expressions.createEvaluator(buildExpressionContext(characterState, ruleset))
      characterState.characteristics = evaluateCharacteristics(characterState, evaluator, ruleset)
      characterState.abilities = evaluateCharacterAbilities(characterState, evaluator, ruleset)
      characterState.loadout = evaluateLoadout(characterState, ruleset)
      characterState.resources = evaluateResourcePools(characterState, evaluator, ruleset)
      return characterState
    },
    (first, second) => {
      return Arrays.equalWith(Object.values(first.characteristics), Object.values(second.characteristics), (first, second) => {
        if (first.id !== second.id) {
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

const buildInitialCharacteristics = (character: CharacterRecord, ruleset: Ruleset): Record<CharacteristicReference, CharacteristicValue> => {
  return Object.fromEntries(
    Characteristics.getCharacteristics(ruleset).map((characteristic) => [
      characteristic.id,
      Characteristics.simpleValue(0, characteristic, character.initialValues),
    ])
  )
}

const evaluateCharacteristics = (
  character: CharacterSheet,
  evaluator: ExpressionEvaluator,
  ruleset: Ruleset
): Record<CharacteristicReference, CharacteristicValue> => {
  const effects = getAllEffects(character, ruleset)
  return Object.fromEntries(
    Characteristics.getCharacteristics(ruleset).map((characteristic) => [
      characteristic.id,
      Characteristics.evaluateCharacteristic(characteristic, character.initialValues, effects, evaluator),
    ])
  )
}

const evaluateCharacterAbilities = (character: CharacterSheet, evaluator: ExpressionEvaluator, ruleset: Ruleset): Array<AbilityState> => {
  const effects = getProgressionEffects(character, ruleset)
  const gainAbilityEffects = CharacterEffects.filter(effects, CharacterEffects.GainAbility)
  const modifyActionEffects = CharacterEffects.filter(getAllEffects(character, ruleset), CharacterEffects.ModifyActionEffect)
  const universalAbilities = Abilities.getAbilities(ruleset)
    .filter((it) => it.universal)
    .map((it) => it.id)
  const abilities = Abilities.getAbilitiesByIds(
    Arrays.dedupe([...gainAbilityEffects.map((it) => it.ability), ...universalAbilities]),
    ruleset
  ).filter((it) => it.prerequisites.every(evaluator.evaluate))

  return abilities.map((ability) => {
    const loadouts = gainAbilityEffects.filter((it) => it.ability === ability.id).map((it) => it.loadout)
    const loadout = Arrays.isEmpty(loadouts) ? ability.loadout : loadouts.includes(null) ? null : loadouts[0]!
    const modifiers = CharacterEffects.getModifiers(effects, CharacterEffects.ModifyAbility, (it) => it.ability === ability.id) as Array<
      Modifier<Ability>
    >
    const modified = Abilities.evaluateModifiers(ability, modifiers, evaluator)
    return { ability: ActionEffects.evaluateAbility(modified, modifyActionEffects, character, evaluator, ruleset), loadout }
  })
}

const isUsable = (ability: AbilityState, character: CharacterSheet): boolean => {
  return Objects.isNil(ability.loadout) || character.loadout.some((it) => it.ability === ability.ability.id)
}

const evaluateResourcePools = (
  character: CharacterSheet,
  evaluator: ExpressionEvaluator,
  ruleset: Ruleset
): Record<ResourcePoolReference, ResourcePoolValue> => {
  const effects = getProgressionEffects(character, ruleset)

  const resourcePools = Arrays.dedupe([
    ...CharacterEffects.filter(effects, CharacterEffects.GainResourcePool).map((it) => it.resourcePool),
    ...Arrays.filterMap(
      character.abilities.filter((it) => isUsable(it, character)),
      (it) => it.ability.resource?.id
    ),
  ])

  const states = resourcePools.map((resourcePool) => {
    const modifiers = CharacterEffects.getModifiers(effects, CharacterEffects.ModifyResourcePool, (it) => it.resourcePool === resourcePool) as Array<
      Modifier<ResourcePool>
    >
    return ResourcePools.buildInitialState(resourcePool, modifiers, evaluator, ruleset)
  })

  return Object.fromEntries(states.map((it) => [it.id, it]))
}

export const buildExpressionContext = (character: CharacterSheet, ruleset: Ruleset): ExpressionContext => {
  const characterAttributes = Characteristics.getCharacteristics(ruleset)
  const attributeVariables = characterAttributes.map((it) =>
    Expressions.buildVariable(it.variable, Characteristics.getCharacteristicValue(character, it).value)
  )

  const variables: UnknownRecord = {
    ...Expressions.buildVariable(CharacterValues.Level, character.level),
    ...Expressions.buildVariable(CharacterValues.Traits, ProgressionTables.getValues(character.traits)),
    ...Objects.deepMergeAll(attributeVariables),
  }

  return { variables }
}
