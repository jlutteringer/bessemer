import { CharacterSheet } from '@simulacrum/common/engine/character/character'
import { Tags, Effects, ResourcePools, Rulesets } from '@simulacrum/common/engine/engine'
import { Trait } from '@simulacrum/common/engine/trait'
import { Ruleset } from '@simulacrum/common/engine/ruleset'
import { Ability } from '@simulacrum/common/engine/ability'
import { TargetSelection } from '@simulacrum/ruleset/targeting'
import { Duration } from '@simulacrum/ruleset/duration'
import { ActionTypeReference } from '@simulacrum/ruleset/action-type'
import { DescriptiveEffect } from '@simulacrum/common/engine/effect'
import { CooldownRate } from '@simulacrum/common/engine/resource-pool'
import { RulesetEntity, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { EvaluateExpression } from '@bessemer/cornerstone/expression'
import { Arrays, Assertions, Objects } from '@bessemer/cornerstone'

export const getPassiveEffects = (trait: Trait): Array<DescriptiveEffect> => {
  return Effects.filter(trait.effects, Effects.Descriptive)
}

export const getActionTypeLabel = (actionType: ActionTypeReference, ruleset: Ruleset): string => {
  return Rulesets.getEntityById(actionType, ruleset).name
}

const RecoveryPeriods: Record<GameTimeUnit, string> = {
  [GameTimeUnit.Turn]: 'Turn',
  [GameTimeUnit.Round]: 'Round',
  [GameTimeUnit.Encounter]: 'Encounter',
  [GameTimeUnit.ShortRest]: 'Short Rest',
  [GameTimeUnit.LongRest]: 'Long Rest',
  [GameTimeUnit.Day]: 'Day',
}

const isRelativeAmount = (amount: CooldownRate['amount']): amount is RelativeAmount => {
  return Object.values(RelativeAmount).includes(amount as RelativeAmount)
}

const getRecoveryLabels = (refresh: Array<CooldownRate>, evaluate: EvaluateExpression): Array<string> => {
  const periodOrder = Object.keys(RecoveryPeriods)
  return Arrays.sortBy(refresh, (it) => periodOrder.indexOf(it.period)).map((it) => {
    const amount = isRelativeAmount(it.amount) ? it.amount : String(evaluate(it.amount))
    return `${amount} / ${RecoveryPeriods[it.period]}`
  })
}

export const getAbilityResourceLabels = (ability: Ability, sheet: CharacterSheet, evaluate: EvaluateExpression, ruleset: Ruleset): Array<string> => {
  const costs = Arrays.dedupeBy(
    ability.actions.flatMap((it) => it.costs).map((it) => ({ cost: it.cost, reference: it.resource ?? ability.resource?.id })),
    (it) => it.reference
  )

  return costs.map(({ cost, reference }) => {
    Assertions.assertPresent(reference, () => `Ability [${ability.id}] has a cost without a resource, but no resource of its own`)
    const resource = sheet.resources[reference]?.resource ?? ResourcePools.getResourcePoolById(reference, ruleset)
    const costValue = evaluate(cost)

    if (resource.id !== ability.resource?.id) {
      return `${resource.name}: ${costValue}`
    }

    return [
      `Uses: ${evaluate(resource.size)}`,
      ...(costValue === 1 ? [] : [`costs ${costValue}`]),
      ...getRecoveryLabels(resource.refresh, evaluate),
    ].join(' · ')
  })
}

export const getRangeLabel = ({ range }: TargetSelection, ruleset: Ruleset, evaluate: EvaluateExpression | null): string | null => {
  const distance = typeof range === 'number' ? range : evaluate?.(range) ?? null
  if (Objects.isNil(distance)) {
    return null
  }

  return distance === 0 ? 'Touch' : `${distance} ${distance === 1 ? ruleset.distanceUnit.singular : ruleset.distanceUnit.plural}`
}

export const getTargetLabel = ({ count, filter }: TargetSelection, ruleset: Ruleset, evaluate: EvaluateExpression | null): string => {
  const amount = typeof count === 'number' ? count : evaluate?.(count) ?? null
  const kinds = Arrays.isEmpty(filter.tags)
    ? 'target'
    : filter.tags.map((group) => group.map((it) => Tags.getTagById(it, ruleset).name).join(' or ')).join(' ')

  return Objects.isNil(amount) ? kinds : `${amount} ${kinds}`
}

export const getDurationLabel = (duration: Duration | null, evaluate: EvaluateExpression | null): string | null => {
  if (Objects.isNil(duration)) {
    return 'Instant'
  }

  const rounds = typeof duration.rounds === 'number' ? duration.rounds : evaluate?.(duration.rounds) ?? null
  return Objects.isNil(rounds) ? null : `${rounds} ${rounds === 1 ? 'round' : 'rounds'}`
}

export const hasDescribedActions = (ability: Ability): boolean => {
  return ability.actions.length > 1 && ability.actions.some((it) => Objects.isPresent(it.description))
}

export const getEntityTexts = (entity: RulesetEntity): Array<RichTextJson> => {
  const description = Objects.isPresent(entity.description) ? [entity.description] : []

  if (Rulesets.isEntityType(entity, RulesetEntityType.Trait)) {
    return [...description, ...getPassiveEffects(entity).map((it) => it.description)]
  }

  if (Rulesets.isEntityType(entity, RulesetEntityType.Ability)) {
    return [
      ...description,
      ...Effects.filter(entity.effects, Effects.Descriptive).map((it) => it.description),
      ...entity.actions.flatMap((it) => (Objects.isPresent(it.description) ? [it.description] : [])),
    ]
  }

  return description
}
