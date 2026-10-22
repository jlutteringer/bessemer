import Zod from 'zod'
import { Uris } from '@bessemer/cornerstone'
import * as Tiptap from '@bessemer/core/tiptap'
import {
  buildReference,
  RulesetEntity,
  RulesetEntityProps,
  RulesetEntityReference,
  RulesetEntitySchema,
  RulesetEntityType,
} from '@simulacrum/ruleset/ruleset-entity'
import {
  EvaluateExpression,
  Expression,
  Expressions,
  ExpressionVariable,
  NumericExpressions,
  ReducingExpression,
} from '@bessemer/cornerstone/expression'
import { ObjectPath } from '@bessemer/cornerstone/object/object-path'

export type CharacteristicReference<T> = RulesetEntityReference<typeof RulesetEntityType.Characteristic>

export type CharacteristicGroupReference = RulesetEntityReference<typeof RulesetEntityType.CharacteristicGroup>

export const CharacteristicGroupSchema = RulesetEntitySchema.extend({
  id: Zod.string().transform((it) => it as CharacteristicGroupReference),
})

export type CharacteristicGroup = RulesetEntity & {
  id: CharacteristicGroupReference
}

export type CharacteristicTemplate<T> = RulesetEntity & {
  id: CharacteristicReference<T>
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

export type CharacteristicTemplateProps = RulesetEntityProps & {
  path: ObjectPath
}

export const defineTemplate = <T>(reference: string, props: CharacteristicTemplateProps): CharacteristicTemplate<T> => {
  return {
    id: buildReference(RulesetEntityType.Characteristic, reference),
    name: props.name,
    description: Tiptap.markdownToJson(props.description),
    path: props.path,
    // TODO another instance of us 'hardcoding' numeric attributes...
    optimizer: Expressions.reference(NumericExpressions.MaxExpression) as ReducingExpression<T, T>,
  }
}

export const defineGroup = (reference: string, props: RulesetEntityProps): CharacteristicGroup => {
  return CharacteristicGroupSchema.parse({
    id: Uris.format({ scheme: RulesetEntityType.CharacteristicGroup, location: { path: reference } }),
    name: props.name,
    description: Tiptap.markdownToJson(props.description),
  })
}

export const defineCharacteristic = <T>(props: CharacteristicProps<T>): Characteristic<T> => {
  return {
    ...props.template,
    baseValue: 'baseValue' in props ? props.baseValue : null,
    variable: Expressions.variable(props.template.id),
    group: props.group?.id ?? null,
  }
}
