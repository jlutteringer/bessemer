import { Objects } from '@bessemer/cornerstone'
import * as Tiptap from '@bessemer/core/tiptap'
import { buildReference, RulesetEntity, RulesetEntityProps, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { Expressions, ExpressionVariable } from '@bessemer/cornerstone/expression'

export const Potency: ExpressionVariable<number> = Expressions.variable('potency')

export type DamageTypeReference = RulesetEntityReference<typeof RulesetEntityType.DamageType>

export type DamageType = RulesetEntity & {
  id: DamageTypeReference
}

export const defineDamageType = (reference: string, props: RulesetEntityProps): DamageType => {
  return {
    id: buildReference(RulesetEntityType.DamageType, reference),
    name: props.name,
    description: Objects.isNil(props.description) ? null : Tiptap.markdownToJson(props.description),
  }
}
