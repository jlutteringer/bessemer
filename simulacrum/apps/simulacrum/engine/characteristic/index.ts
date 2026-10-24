export * from '@simulacrum/ruleset/characteristic'
import { Characteristic, CharacteristicGroup, CharacteristicReference } from '@simulacrum/ruleset/characteristic'
import { Ruleset } from '@simulacrum/engine/ruleset'
import * as Rulesets from '@simulacrum/engine/ruleset'
import { RulesetEntities } from '@simulacrum/ruleset'
import { Attribute, AttributeValue, Modifier } from '@simulacrum/engine/attribute'
import { Attributes, Effects } from '@simulacrum/engine'
import { Effect } from '@simulacrum/engine/effect'
import { CharacterInitialValues } from '@simulacrum/engine/character/character'
import { EvaluateExpression } from '@bessemer/cornerstone/expression'
import { Assertions, ObjectPaths, Objects } from '@bessemer/cornerstone'

export const getCharacteristics = (ruleset: Ruleset): Array<Characteristic> => {
  return Rulesets.getEntities(ruleset, RulesetEntities.RulesetEntityType.Characteristic)
}

export const getCharacteristicGroups = (ruleset: Ruleset): Array<CharacteristicGroup> => {
  return Rulesets.getEntities(ruleset, RulesetEntities.RulesetEntityType.CharacteristicGroup)
}

export type CharacteristicValue = AttributeValue<number> & {
  name: string
  characteristic: CharacteristicReference
}

export const buildAttribute = (characteristic: Characteristic, initialValues: CharacterInitialValues): Attribute<number> => {
  let baseValue
  if (Objects.isPresent(characteristic.baseValue)) {
    baseValue = characteristic.baseValue
  } else {
    // FUTURE cast...
    const initialValue = ObjectPaths.getValue(characteristic.path as any, initialValues) as any as number | undefined
    Assertions.assertPresent(initialValue)
    baseValue = initialValue
  }

  return Attributes.attribute(baseValue, characteristic.optimizer)
}

export const simpleValue = (value: number, characteristic: Characteristic, initialValues: CharacterInitialValues): CharacteristicValue => {
  return {
    name: characteristic.name,
    characteristic: characteristic.id,
    ...Attributes.simpleAttributeValue(value, buildAttribute(characteristic, initialValues)),
  }
}

export const evaluateCharacteristic = (
  characteristic: Characteristic,
  initialValues: CharacterInitialValues,
  effects: Array<Effect>,
  evaluate: EvaluateExpression
): CharacteristicValue => {
  const attribute = buildAttribute(characteristic, initialValues)

  // TODO need to set sources or something... gotta figure that one out!
  const modifiers = Effects.filter(effects, Effects.ModifyCharacteristic)
    .filter((it) => it.characteristic === characteristic.id)
    .map((it) => it.modifier) as Array<Modifier<number>>

  const attributeValue = Attributes.evaluateAttribute(attribute, modifiers, evaluate)

  return {
    name: characteristic.name,
    characteristic: characteristic.id,
    ...attributeValue,
  }
}
