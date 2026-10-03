export * from '@simulacrum/ruleset/characteristic'
import { Characteristic, CharacteristicReference } from '@simulacrum/ruleset/characteristic'
import { Attribute, AttributeValue, Modifier } from '@simulacrum/engine/attribute'
import { Attributes, Effects } from '@simulacrum/engine'
import { Effect } from '@simulacrum/engine/effect'
import { CharacterInitialValues } from '@simulacrum/engine/character/character'
import { EvaluateExpression } from '@bessemer/cornerstone/expression'
import { Assertions, ObjectPaths, Objects } from '@bessemer/cornerstone'

export type CharacteristicValue<T> = AttributeValue<T> & {
  name: string
  characteristic: CharacteristicReference<T>
}

export const buildAttribute = <T>(characteristic: Characteristic<T>, initialValues: CharacterInitialValues): Attribute<T> => {
  let baseValue
  if (Objects.isPresent(characteristic.baseValue)) {
    baseValue = characteristic.baseValue
  } else {
    // FUTURE cast...
    const initialValue = ObjectPaths.getValue(characteristic.path as any, initialValues)
    Assertions.assertPresent(initialValue)
    baseValue = initialValue as T
  }

  return Attributes.attribute(baseValue, characteristic.optimizer)
}

export const simpleValue = <T>(value: T, characteristic: Characteristic<T>, initialValues: CharacterInitialValues): CharacteristicValue<T> => {
  return {
    name: characteristic.name,
    characteristic: characteristic.id,
    ...Attributes.simpleAttributeValue(value, buildAttribute(characteristic, initialValues)),
  }
}

export const evaluateCharacteristic = <T>(
  characteristic: Characteristic<T>,
  initialValues: CharacterInitialValues,
  effects: Array<Effect>,
  evaluate: EvaluateExpression
): CharacteristicValue<T> => {
  const attribute = buildAttribute(characteristic, initialValues)

  // TODO need to set sources or something... gotta figure that one out!
  const modifiers = Effects.filter(effects, Effects.ModifyCharacteristic)
    .filter((it) => it.characteristic === characteristic.id)
    .map((it) => it.modifier) as Array<Modifier<T>>

  const attributeValue = Attributes.evaluateAttribute(attribute, modifiers, evaluate)

  return {
    name: characteristic.name,
    characteristic: characteristic.id,
    ...attributeValue,
  }
}
