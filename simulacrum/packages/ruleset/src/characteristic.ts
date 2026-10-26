import Zod from 'zod'
import { Uris, Objects } from '@bessemer/cornerstone'
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

export type CharacteristicReference = RulesetEntityReference<typeof RulesetEntityType.Characteristic>

export type CharacteristicGroupReference = RulesetEntityReference<typeof RulesetEntityType.CharacteristicGroup>

export const CharacteristicGroupSchema = RulesetEntitySchema.extend({
  id: Zod.string().transform((it) => it as CharacteristicGroupReference),
})

export type CharacteristicGroup = RulesetEntity & {
  id: CharacteristicGroupReference
}

export interface CharacteristicTemplate extends RulesetEntity {
  id: CharacteristicReference
  path: ObjectPath
  optimizer: ReducingExpression<number, number>
}

export type CharacteristicProps = {
  template: CharacteristicTemplate
  group?: CharacteristicGroup
} & ({ baseValue: Expression<number> } | { initialValue: true })

export interface Characteristic extends CharacteristicTemplate {
  baseValue: Expression<number> | null
  variable: ExpressionVariable<number>
  group: CharacteristicGroupReference | null
}

export type CharacteristicTemplateProps = RulesetEntityProps & {
  path: ObjectPath
}

export const defineTemplate = (reference: string, props: CharacteristicTemplateProps): CharacteristicTemplate => {
  return {
    id: buildReference(RulesetEntityType.Characteristic, reference),
    name: props.name,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
    path: props.path,
    optimizer: Expressions.reference(NumericExpressions.MaxExpression),
  }
}

export const defineGroup = (reference: string, props: RulesetEntityProps): CharacteristicGroup => {
  return CharacteristicGroupSchema.parse({
    id: Uris.format({ scheme: RulesetEntityType.CharacteristicGroup, location: { path: reference } }),
    name: props.name,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
  })
}

export const defineCharacteristic = (props: CharacteristicProps): Characteristic => {
  return {
    ...props.template,
    baseValue: 'baseValue' in props ? props.baseValue : null,
    variable: Expressions.variable(props.template.id),
    group: props.group?.id ?? null,
  }
}
