import { Attribute, AttributeValue, Modifier } from '@simulacrum/common/attribute'
import { Attributes, Effects } from '@simulacrum/common'
import { Effect } from '@simulacrum/common/effect'
import { CharacterInitialValues } from '@simulacrum/common/character/character'
import { Reference } from '@bessemer/cornerstone/reference'
import {
  EvaluateExpression,
  Expression,
  Expressions,
  ExpressionVariable,
  NumericExpressions,
  ReducingExpression,
} from '@bessemer/cornerstone/expression'
import { Assertions, ObjectPaths, Objects } from '@bessemer/cornerstone'
import { ObjectPath } from '@bessemer/cornerstone/object/object-path'

export type CharacteristicReference<T> = Reference<'Characteristic'>

export type CharacteristicTemplate<T> = { id: CharacteristicReference<T> } & {
  name: string
  path: ObjectPath
  optimizer: ReducingExpression<T, T>
}

export type CharacteristicProps<T> = {
  template: CharacteristicTemplate<T>
} & ({ baseValue: Expression<T> } | { initialValue: true })

export type Characteristic<T> = CharacteristicTemplate<T> & {
  baseValue: Expression<T> | null
  variable: ExpressionVariable<T>
}

export type CharacteristicValue<T> = AttributeValue<T> & {
  name: string
  characteristic: CharacteristicReference<T>
}

export const defineTemplate = <T>(id: string, name: string, path: ObjectPath): CharacteristicTemplate<T> => {
  return {
    id: id as CharacteristicReference<T>,
    name,
    path,
    // TODO another instance of us 'hardcoding' numeric attributes...
    optimizer: Expressions.reference(NumericExpressions.MaxExpression) as ReducingExpression<T, T>,
  }
}

export const defineCharacteristic = <T>(props: CharacteristicProps<T>): Characteristic<T> => {
  return {
    ...props.template,
    baseValue: 'baseValue' in props ? props.baseValue : null,
    variable: Expressions.variable(props.template.id),
  }
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
