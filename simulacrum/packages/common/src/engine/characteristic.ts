export * from '@simulacrum/ruleset/characteristic'
import { Characteristic, CharacteristicGroup } from '@simulacrum/ruleset/characteristic'
import { Ruleset } from '@simulacrum/common/engine/ruleset'
import * as Rulesets from '@simulacrum/common/engine/ruleset'
import { RulesetEntities } from '@simulacrum/ruleset'
import { Attribute, AttributeValue, Modifier } from '@simulacrum/common/engine/attribute'
import { Attributes, CharacterEffects } from '@simulacrum/common/engine/engine'
import { CharacterEffect } from '@simulacrum/common/engine/character-effect'
import { CharacterInitialValues, CharacterSheet } from '@simulacrum/common/engine/character/character'
import { ExpressionEvaluator } from '@bessemer/cornerstone/expression/expression-evaluator'
import { Assertions, Maths, ObjectPaths, Objects } from '@bessemer/cornerstone'

export const getCharacteristics = (ruleset: Ruleset): Array<Characteristic> => {
  return Rulesets.getEntities(ruleset, RulesetEntities.RulesetEntityType.Characteristic)
}

export const getCharacteristicGroups = (ruleset: Ruleset): Array<CharacteristicGroup> => {
  return Rulesets.getEntities(ruleset, RulesetEntities.RulesetEntityType.CharacteristicGroup)
}

export interface CharacteristicValue extends Characteristic, AttributeValue<number> {}

export const buildAttribute = (characteristic: Characteristic, initialValues: CharacterInitialValues): Attribute<number> => {
  if (Objects.isPresent(characteristic.baseValue)) {
    return Attributes.attribute(characteristic.baseValue, characteristic.optimizer)
  }

  const initialValue = ObjectPaths.getAnyValue(characteristic.path, initialValues)
  if (!Maths.isNumber(initialValue)) {
    throw new Error(`Characteristic [${characteristic.id}] has no numeric initial value`)
  }

  return Attributes.attribute(initialValue, characteristic.optimizer)
}

export const simpleValue = (value: number, characteristic: Characteristic, initialValues: CharacterInitialValues): CharacteristicValue => {
  return { ...characteristic, ...Attributes.simpleAttributeValue(value, buildAttribute(characteristic, initialValues)) }
}

export const evaluateCharacteristic = (
  characteristic: Characteristic,
  initialValues: CharacterInitialValues,
  effects: Array<CharacterEffect>,
  evaluator: ExpressionEvaluator
): CharacteristicValue => {
  const attribute = buildAttribute(characteristic, initialValues)

  const modifiers = CharacterEffects.getModifiers(
    effects,
    CharacterEffects.ModifyCharacteristic,
    (it) => it.characteristic === characteristic.id
  ) as Array<Modifier<number>>

  const attributeValue = Attributes.evaluateAttribute(attribute, modifiers, evaluator)

  return { ...characteristic, ...attributeValue }
}

export const getCharacteristicValue = (character: CharacterSheet, characteristic: Characteristic): CharacteristicValue => {
  const value = character.characteristics[characteristic.id]
  Assertions.assertPresent(value, () => `Character has no value for characteristic [${characteristic.id}]`)
  return value
}
