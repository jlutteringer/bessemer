import { CharacterSheet } from '@simulacrum/common/engine/character/character'
import { Characteristics, Tags, Effects, ResourcePools, Rulesets } from '@simulacrum/common/engine/engine'
import { Trait } from '@simulacrum/common/engine/trait'
import { Ruleset } from '@simulacrum/common/engine/ruleset'
import { Ability, AbilityAction } from '@simulacrum/common/engine/ability'
import { Area, AreaShape, TargetSelection } from '@simulacrum/ruleset/targeting'
import { Duration } from '@simulacrum/ruleset/duration'
import { ActionTest, ActionTestType } from '@simulacrum/ruleset/action-test'
import { Characteristic } from '@simulacrum/ruleset/characteristic'
import { ActionTypeReference } from '@simulacrum/ruleset/action-type'
import { DescriptiveEffect } from '@simulacrum/common/engine/effect'
import { CooldownRate } from '@simulacrum/common/engine/resource-pool'
import { RulesetEntity, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { EvaluateExpression, Expression } from '@bessemer/cornerstone/expression'
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

export const getRangeLabel = ({ range, area }: TargetSelection, ruleset: Ruleset, evaluate: EvaluateExpression | null): string | null => {
  const distance = typeof range === 'number' ? range : evaluate?.(range) ?? null
  if (Objects.isNil(distance) || (Objects.isPresent(area) && distance === 0)) {
    return null
  }

  return distance === 0 ? 'Touch' : `${distance} ${distance === 1 ? ruleset.distanceUnit.singular : ruleset.distanceUnit.plural}`
}

export const getAreaLabel = (area: Area, ruleset: Ruleset, evaluate: EvaluateExpression | null): string | null => {
  const measure = (value: Expression<number>) => {
    const amount = typeof value === 'number' ? value : evaluate?.(value) ?? null
    return Objects.isNil(amount) ? null : `${amount}-${ruleset.distanceUnit.singular}`
  }

  switch (area.type) {
    case AreaShape.Sphere:
      return Objects.isNil(measure(area.radius)) ? null : `${measure(area.radius)} radius`
    case AreaShape.Cylinder:
      return Objects.isNil(measure(area.radius)) ? null : `${measure(area.radius)} radius cylinder`
    case AreaShape.Cone:
      return Objects.isNil(measure(area.length)) ? null : `${measure(area.length)} cone`
    case AreaShape.Cube:
      return Objects.isNil(measure(area.size)) ? null : `${measure(area.size)} cube`
    case AreaShape.Line:
      return Objects.isNil(measure(area.length)) ? null : `${measure(area.length)} line`
  }
}

export const getTargetLabel = ({ count, filter, area }: TargetSelection, ruleset: Ruleset, evaluate: EvaluateExpression | null): string => {
  if (Objects.isPresent(area)) {
    return getAreaLabel(area, ruleset, evaluate) ?? 'area'
  }

  const amount = typeof count === 'number' ? count : evaluate?.(count) ?? null
  const kinds = Arrays.isEmpty(filter.tags)
    ? 'target'
    : filter.tags.map((group) => group.map((it) => Tags.getTagById(it, ruleset).name).join(' or ')).join(' ')

  return Objects.isNil(amount) ? kinds : `${amount} ${kinds}`
}

export const getTestLabel = (test: ActionTest, ruleset: Ruleset, character: CharacterSheet | null): string => {
  const offense = Rulesets.getEntityById(test.offense, ruleset) as Characteristic
  const defense = Rulesets.getEntityById(test.defense, ruleset) as Characteristic
  const offenseValue = Objects.isNil(character) ? null : Characteristics.getCharacteristicValue(character, offense).value

  if (test.type === ActionTestType.Save) {
    const dc = Objects.isNil(offenseValue) ? '' : ` (${offenseValue})`
    return `${defense.name} save vs. ${offense.name}${dc}`
  }

  const modifier = Objects.isNil(offenseValue) ? '' : ` (${offenseValue >= 0 ? '+' : ''}${offenseValue})`
  return `${offense.name}${modifier} vs. ${defense.name}`
}

export const getDurationLabel = (duration: Duration | null, evaluate: EvaluateExpression | null): string | null => {
  if (Objects.isNil(duration)) {
    return 'Instant'
  }

  const rounds = typeof duration.rounds === 'number' ? duration.rounds : evaluate?.(duration.rounds) ?? null
  return Objects.isNil(rounds) ? null : `${rounds} ${rounds === 1 ? 'round' : 'rounds'}`
}

const getActionTexts = (action: AbilityAction): Array<RichTextJson> => {
  return [
    ...(Objects.isPresent(action.description) ? [action.description] : []),
    ...[...action.effects, ...(action.test?.success ?? []), ...(action.test?.failure ?? [])].map((it) => it.description),
  ]
}

export const hasDescribedActions = (ability: Ability): boolean => {
  return ability.actions.length > 1 && ability.actions.some((it) => !Arrays.isEmpty(getActionTexts(it)))
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
      ...entity.actions.flatMap(getActionTexts),
    ]
  }

  return description
}
