import { Reference } from '@bessemer/cornerstone/reference'
import {
  EvaluateExpression,
  Expression,
  Expressions,
  ExpressionVariable,
  NumericExpressions,
  ReducingExpression,
} from '@bessemer/cornerstone/expression'
import { ObjectPath } from '@bessemer/cornerstone/object/object-path'

export type CharacteristicReference<T> = Reference<'Characteristic'>

export type CharacteristicGroupReference = Reference<'CharacteristicGroup'>

export type CharacteristicGroup = { id: CharacteristicGroupReference } & {
  name: string
}

export type CharacteristicTemplate<T> = { id: CharacteristicReference<T> } & {
  name: string
  path: ObjectPath
  optimizer: ReducingExpression<T, T>
}

export type CharacteristicProps<T> = {
  template: CharacteristicTemplate<T>
  group?: CharacteristicGroup
} & ({ baseValue: Expression<T> } | { initialValue: true })

export type Characteristic<T> = CharacteristicTemplate<T> & {
  baseValue: Expression<T> | null
  variable: ExpressionVariable<T>
  group: CharacteristicGroupReference | null
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

export const defineGroup = (reference: string, props: { name: string }): CharacteristicGroup => {
  return { id: reference as CharacteristicGroupReference, name: props.name }
}

export const defineCharacteristic = <T>(props: CharacteristicProps<T>): Characteristic<T> => {
  return {
    ...props.template,
    baseValue: 'baseValue' in props ? props.baseValue : null,
    variable: Expressions.variable(props.template.id),
    group: props.group?.id ?? null,
  }
}
