import { CharacterSheet } from '@simulacrum/common/engine/character/character'
import { Characteristics, Damage, CharacterEffects, ResourcePools, Rulesets } from '@simulacrum/common/engine/engine'
import { Trait } from '@simulacrum/common/engine/trait'
import { Ruleset } from '@simulacrum/common/engine/ruleset'
import { Ability, AbilityAction } from '@simulacrum/common/engine/ability'
import { Area, AreaShape, TargetSelection } from '@simulacrum/ruleset/targeting'
import { TagReference } from '@simulacrum/ruleset/tag'
import { Duration } from '@simulacrum/ruleset/duration'
import { ActionDamage, ActionEffect, ActionEffectType } from '@simulacrum/ruleset/action-effect'
import { ActionTest, ActionTestType } from '@simulacrum/ruleset/action-test'
import { Characteristic } from '@simulacrum/ruleset/characteristic'
import { ActionTypeReference } from '@simulacrum/ruleset/action-type'
import { CharacterEffectSource, CharacterEffectSourceType, DescriptiveEffect } from '@simulacrum/common/engine/character-effect'
import { ActionEffectValue } from '@simulacrum/common/engine/action-effect'
import { CooldownRate } from '@simulacrum/common/engine/resource-pool'
import { RulesetEntity, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { EvaluateExpression, Expression, ExpressionContext, Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { ExpressionMapper } from '@bessemer/cornerstone/expression/expression-mapper'
import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'
import { ValueExpression, VariableExpression } from '@bessemer/cornerstone/expression/core-expression'
import { Potency } from '@simulacrum/ruleset/damage'
import {
  DiceExpression,
  MultiplyExpression as RollMultiplyExpression,
  Roll,
  RollOperand,
  SumExpression as RollSumExpression,
} from '@simulacrum/ruleset/roll'
import { Rolls } from '@simulacrum/ruleset'
import { Arrays, Assertions, Maths, Objects } from '@bessemer/cornerstone'

export const getPassiveEffects = (trait: Trait): Array<DescriptiveEffect> => {
  return CharacterEffects.filter(trait.effects, CharacterEffects.Descriptive)
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
    const resource = sheet.resources[reference] ?? ResourcePools.getResourcePoolById(reference, ruleset)
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
  const distance = Maths.isNumber(range) ? range : evaluate?.(range) ?? null
  if (Objects.isNil(distance) || (Objects.isPresent(area) && distance === 0)) {
    return null
  }

  return distance <= 1 ? 'Touch' : `${distance} ${ruleset.distanceUnit.plural}`
}

const Ordinals = ['first', 'second', 'third', 'fourth', 'fifth']

export const getOriginLabel = (from: string, selectionKeys: Array<string>): string => {
  const index = selectionKeys.indexOf(from)
  return index === -1 ? 'another target' : `the ${Ordinals[index] ?? `#${index + 1}`} target`
}

export const getAreaLabel = (area: Area, ruleset: Ruleset, evaluate: EvaluateExpression | null): string | null => {
  const measure = (value: Expression<number>) => {
    const amount = Maths.isNumber(value) ? value : evaluate?.(value) ?? null
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

export type TargetDescription =
  | { type: 'area'; label: string }
  | { type: 'targets'; amount: number | null; qualifiers: Array<Array<TagReference>>; noun: string }

export const getTargetDescription = (
  { count, filter, area }: TargetSelection,
  ruleset: Ruleset,
  evaluate: EvaluateExpression | null
): TargetDescription => {
  if (Objects.isPresent(area)) {
    return { type: 'area', label: getAreaLabel(area, ruleset, evaluate) ?? 'area' }
  }

  const amount = Maths.isNumber(count) ? count : evaluate?.(count) ?? null
  return { type: 'targets', amount, qualifiers: filter.tags, noun: amount === 1 ? 'target' : 'targets' }
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

  const rounds = Maths.isNumber(duration.rounds) ? duration.rounds : evaluate?.(duration.rounds) ?? null
  return Objects.isNil(rounds) ? null : `${rounds} ${rounds === 1 ? 'round' : 'rounds'}`
}

const getAllActionEffects = (action: AbilityAction): Array<ActionEffect> => {
  return [...action.effects, ...(action.test?.success ?? []), ...(action.test?.failure ?? [])].map((it) => it.value)
}

const getActionTexts = (action: AbilityAction): Array<RichTextJson> => {
  return [
    ...(Objects.isPresent(action.description) ? [action.description] : []),
    ...getAllActionEffects(action).flatMap((it) => (it.type === ActionEffectType.Descriptive ? [it.description] : [])),
  ]
}

export const hasDescribedActions = (ability: Ability): boolean => {
  return ability.actions.length > 1 && ability.actions.some((it) => Objects.isPresent(it.description) || !Arrays.isEmpty(getAllActionEffects(it)))
}

const DamageFormatter = new ExpressionMapper<string, void>()

const formatSum = ({ operands }: { operands: Array<RollOperand> }, map: (expression: RollOperand) => string): string => {
  return operands.map((it, index) => (index === 0 ? map(it) : Maths.isNumber(it) && it < 0 ? ` − ${Math.abs(it)}` : ` + ${map(it)}`)).join('')
}

DamageFormatter.register(ValueExpression, ({ value }) => (Maths.isNumber(value) ? String(value) : Rolls.format(value as Roll)))
DamageFormatter.register(VariableExpression, ({ name }) => (name === Potency.name ? 'P' : name))
DamageFormatter.register(DiceExpression, ({ count, sides }, map) => `${map(count)}d${sides}`)
DamageFormatter.register(RollSumExpression, formatSum)
DamageFormatter.register(NumericExpressions.SumExpression, formatSum)
DamageFormatter.register(NumericExpressions.MultiplyExpression, ({ operands }, map) => operands.map(map).join(''))
DamageFormatter.register(RollMultiplyExpression, ({ roll, factor }, map) =>
  formatRollFactor(map(roll), roll, Maths.isNumber(factor) ? factor : map(factor))
)

const isCompoundRoll = (amount: RollOperand): boolean => {
  return ExpressionInternal.isType(amount, RollSumExpression)
}

const formatRollFactor = (label: string, roll: RollOperand, factor: number | string): string => {
  if (Maths.isNumber(factor)) {
    return Rolls.formatFactor(label, factor, isCompoundRoll(roll))
  }

  return `${isCompoundRoll(roll) ? `(${label})` : label} × ${factor}`
}

const formatDamage = (amount: RollOperand): string => {
  return DamageFormatter.map(amount, undefined)
}

const getDamageTermLabel = (term: RollOperand, context: ExpressionContext | null, isFirst: boolean): string => {
  const label = ExpressionInternal.isType(term, RollMultiplyExpression) ? getRollLabel(term, context) : getLeafLabel(term, context)
  if (isFirst) {
    return label
  }

  return label.startsWith('-') ? ` − ${label.slice(1)}` : ` + ${label}`
}

const getLeafLabel = (term: RollOperand, context: ExpressionContext | null): string => {
  const formula = formatDamage(term)
  const value = Objects.isNil(context) ? formula : Rolls.format(Damage.evaluate(term, context))
  return value === formula ? value : `${value}(${formula})`
}

const getRollLabel = (amount: RollOperand, context: ExpressionContext | null): string => {
  if (ExpressionInternal.isType(amount, RollMultiplyExpression)) {
    const factor = Maths.isNumber(amount.factor) || Objects.isNil(context) ? amount.factor : Expressions.evaluate(amount.factor, context)
    return formatRollFactor(getRollLabel(amount.roll, context), amount.roll, Maths.isNumber(factor) ? factor : formatDamage(factor))
  }

  return getDamageTerms(amount)
    .map((it, index) => getDamageTermLabel(it, context, index === 0))
    .join('')
}

export const getDamageLabel = (damage: ActionDamage, context: ExpressionContext | null): string => {
  const hasPotency = Objects.isPresent(context) && Maths.isNumber(context.variables[Potency.name])
  return getRollLabel(damage.amount, hasPotency ? Damage.buildDamageContext(damage, context) : null)
}

const getDamageTerms = (amount: RollOperand): Array<RollOperand> => {
  return ExpressionInternal.isType(amount, RollSumExpression) ? amount.operands : [amount]
}

const getEffectDamage = (effect: ActionEffect): ActionDamage | null => {
  return effect.type === ActionEffectType.Descriptive ? null : effect.damage
}

const getEffectDuration = (effect: ActionEffect): Duration | null => {
  return effect.type === ActionEffectType.Damage ? null : effect.duration
}

const getAmountChange = (previous: Expression<Roll>, next: Expression<Roll>): string => {
  const previousTerms = getDamageTerms(previous)
  const nextTerms = getDamageTerms(next)
  const isAppended = previousTerms.every((it, index) => Objects.deepEqual(it, nextTerms[index]))
  return isAppended
    ? nextTerms
        .slice(previousTerms.length)
        .map((it) => `+ ${formatDamage(it)}`)
        .join(' ')
    : `= ${formatDamage(next)}`
}

const getPotencyChange = (previous: Expression<number>, next: Expression<number>, evaluate: EvaluateExpression | null): string => {
  const difference = Objects.isNil(evaluate) ? null : evaluate(next) - evaluate(previous)
  return Maths.isNumber(difference) ? `${difference < 0 ? '−' : '+'} ${Math.abs(difference)} Potency` : 'modified Potency'
}

const getDamageChanges = (previous: ActionDamage | null, next: ActionDamage | null, evaluate: EvaluateExpression | null): Array<string> => {
  if (Objects.isNil(previous) || Objects.isNil(next)) {
    return []
  }

  return [
    ...(Objects.deepEqual(previous.amount, next.amount) ? [] : [`${getAmountChange(previous.amount, next.amount)} damage`]),
    ...(Objects.deepEqual(previous.potency, next.potency) ? [] : [getPotencyChange(previous.potency, next.potency, evaluate)]),
  ]
}

const getDurationChange = (previous: Duration | null, next: Duration | null, evaluate: EvaluateExpression | null): string => {
  const previousRounds = Objects.isNil(previous) || Objects.isNil(evaluate) ? null : evaluate(previous.rounds)
  const nextRounds = Objects.isNil(next) || Objects.isNil(evaluate) ? null : evaluate(next.rounds)
  if (Maths.isNumber(previousRounds) && Maths.isNumber(nextRounds)) {
    const difference = nextRounds - previousRounds
    return `${difference < 0 ? '−' : '+'} ${Math.abs(difference)} ${Math.abs(difference) === 1 ? 'round' : 'rounds'}`
  }

  return `= ${getDurationLabel(next, evaluate)}`
}

export const getEffectSourceEntity = (source: CharacterEffectSource | undefined, ruleset: Ruleset): RulesetEntity | null => {
  if (Objects.isNil(source) || source.type === CharacterEffectSourceType.Ruleset) {
    return null
  }

  return source.type === CharacterEffectSourceType.Trait
    ? Rulesets.getEntityById(source.trait, ruleset)
    : Rulesets.getEntityById(source.ability, ruleset)
}

export type ActionEffectBreakdown = {
  base: Array<{ label: string; value: string }>
  modifiers: Array<{ source: RulesetEntity | null; change: string }>
}

export const getActionEffectBreakdown = (
  value: ActionEffectValue,
  ruleset: Ruleset,
  evaluate: EvaluateExpression | null
): ActionEffectBreakdown | null => {
  if (Arrays.isEmpty(value.activeModifiers)) {
    return null
  }

  const initialDamage = getEffectDamage(value.initialValue)
  const initialDuration = getEffectDuration(value.initialValue)
  const isDurationModified = !Objects.deepEqual(initialDuration, getEffectDuration(value.value))

  const base = [
    ...(Objects.isNil(initialDamage) ? [] : [{ label: 'Damage', value: getDamageLabel(initialDamage, null) }]),
    ...(isDurationModified ? [{ label: 'Duration', value: getDurationLabel(initialDuration, evaluate) ?? '' }] : []),
  ]

  let previous = value.initialValue
  const modifiers = value.activeModifiers.map((it) => {
    const next = it.value
    const labels = [
      ...getDamageChanges(getEffectDamage(previous), getEffectDamage(next), evaluate),
      ...(!Objects.deepEqual(getEffectDuration(previous), getEffectDuration(next))
        ? [`${getDurationChange(getEffectDuration(previous), getEffectDuration(next), evaluate)} duration`]
        : []),
    ]

    previous = next
    return { source: getEffectSourceEntity(it.modifier.source, ruleset), change: labels.join(', ') }
  })

  return { base, modifiers }
}

export const getEntityTexts = (entity: RulesetEntity): Array<RichTextJson> => {
  const description = Objects.isPresent(entity.description) ? [entity.description] : []

  if (Rulesets.isEntityType(entity, RulesetEntityType.Trait)) {
    return [...description, ...getPassiveEffects(entity).map((it) => it.description)]
  }

  if (Rulesets.isEntityType(entity, RulesetEntityType.Ability)) {
    return [
      ...description,
      ...CharacterEffects.filter(entity.effects, CharacterEffects.Descriptive).map((it) => it.description),
      ...entity.actions.flatMap(getActionTexts),
    ]
  }

  return description
}
