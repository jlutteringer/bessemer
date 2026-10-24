import { CharacterSheet } from '@simulacrum/engine/character/character'
import { Archetypes, Characters, Effects, ResourcePools, Rulesets } from '@simulacrum/engine'
import { Trait } from '@simulacrum/engine/trait'
import { Ruleset } from '@simulacrum/engine/ruleset'
import { Ability } from '@simulacrum/engine/ability'
import { TargetSelection } from '@simulacrum/ruleset/targeting'
import { Duration, DurationType } from '@simulacrum/ruleset/duration'
import { ActionTypeReference } from '@simulacrum/ruleset/action-type'
import { DescriptiveEffect } from '@simulacrum/engine/effect'
import { CooldownRate } from '@simulacrum/engine/resource-pool'
import { RulesetEntity, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { EvaluateExpression, Expressions } from '@bessemer/cornerstone/expression'
import { Arrays, Assertions, Objects } from '@bessemer/cornerstone'

/**
 * The effects of a trait shown as its passive effects, both on the trait's card and in the Abilities section.
 */
export const getPassiveEffects = (trait: Trait): Array<DescriptiveEffect> => {
  return Effects.filter(trait.effects, Effects.Descriptive)
}

export const getActionTypeLabel = (actionType: ActionTypeReference, ruleset: Ruleset): string => {
  return Rulesets.getEntityById(actionType, ruleset).name
}

// From shortest to longest
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

// Describes how a resource recovers, one label per period, shortest first, e.g. ["1 / Short Rest", "All / Long Rest"]
const getRecoveryLabels = (refresh: Array<CooldownRate>, evaluate: EvaluateExpression): Array<string> => {
  const periodOrder = Object.keys(RecoveryPeriods)
  return Arrays.sortBy(refresh, (it) => periodOrder.indexOf(it.period)).map((it) => {
    const amount = isRelativeAmount(it.amount) ? it.amount : String(evaluate(it.amount))
    return `${amount} / ${RecoveryPeriods[it.period]}`
  })
}

/**
 * Describes the resources an ability's actions spend, one line each. The ability's own resource (e.g. Rage) is labelled "Uses" with its
 * size, cost and recovery, e.g. "Uses: 3 · 1 / Short Rest · All / Long Rest". Sizes are the character's, so they include modifiers (e.g. a
 * Barbarian's extra Rage at level 3) and expressions (e.g. uses equal to the Wisdom modifier). A shared pool (e.g. Superiority Dice or
 * Stamina) isn't the ability's to describe, so it shows only the cost, e.g. "Stamina: 8".
 */
export const getAbilityResourceLabels = (ability: Ability, sheet: CharacterSheet, ruleset: Ruleset): Array<string> => {
  const evaluate = Expressions.evaluator(Characters.buildExpressionContext(sheet, ruleset))
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
  const kinds = Arrays.isEmpty(filter.archetypes)
    ? 'target'
    : filter.archetypes.map((group) => group.map((it) => Archetypes.getArchetypeById(it, ruleset).name).join(' or ')).join(' ')

  return Objects.isNil(amount) ? kinds : `${amount} ${kinds}`
}

export const getDurationLabel = (duration: Duration, evaluate: EvaluateExpression | null): string => {
  if (duration.type === DurationType.Instant) {
    return 'Instant'
  }

  const rounds = typeof duration.rounds === 'number' ? duration.rounds : evaluate?.(duration.rounds) ?? null
  return Objects.isNil(rounds) ? 'Sustained' : `Sustained · ${rounds} ${rounds === 1 ? 'round' : 'rounds'}`
}

/**
 * Whether an ability's actions are worth listing one by one: when it has several and any of them has a description of its own (e.g. the
 * options of a transformation). Otherwise the ability's action label is enough, and a lone action's description reads as the ability's own.
 */
export const hasDescribedActions = (ability: Ability): boolean => {
  return ability.actions.length > 1 && ability.actions.some((it) => Objects.isPresent(it.description))
}

/**
 * All the rules text RulesetEntityContent shows for an entity, e.g. for searching it or deciding whether it has anything to show.
 */
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
