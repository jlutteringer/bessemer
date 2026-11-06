import { Characteristic } from '@simulacrum/ruleset/characteristic'
import { ActionType } from '@simulacrum/ruleset/action-type'
import { Area, Range } from '@simulacrum/ruleset/targeting'
import { CreatureTag } from '@simulacrum/ruleset/tag'
import { DamageType, Potency } from '@simulacrum/ruleset/damage'
import { Roll } from '@simulacrum/ruleset/roll'
import { AbilityEffect } from '@simulacrum/ruleset/character-effect'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { AbilityFilterProps } from '@simulacrum/ruleset/ability'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Expression, NumericExpressions } from '@bessemer/cornerstone/expression'
import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'
import { Assertions, Patches, Strings } from '@bessemer/cornerstone'
import { Attributes, CharacterEffects, Rolls } from '@simulacrum/ruleset'

/** Who a selection can pick, relative to the creature it is measured from (its from, default you). */
export enum ActionRelation {
  /** The creature the selection is measured from. */
  Origin = 'Origin',
  /** Its allies, not counting itself. */
  Ally = 'Ally',
  /** Its enemies. */
  Enemy = 'Enemy',
}

export const AnyNumber = 'AnyNumber'

/** A creature (or place) by the role it plays where it is referenced. */
export enum ActionRole {
  /** The creature using the ability. */
  You = 'You',
  /** The creature the current effect applies to. Changes inside each nested select. */
  Target = 'Target',
  /** In a triggered action: the creature the trigger event is about (the attacker in "when a creature attacks you"). */
  Subject = 'Subject',
  /** In a triggered action: the other party to the event (the creature attacked). */
  Object = 'Object',
  /** Inside a condition or zone: the creature the condition is on, or the zone itself. Fixed however deeply effects nest. */
  Bearer = 'Bearer',
}

export type ActionTargetingBaseProps = {
  from?: ActionRole
  range?: Range
  area?: Area
}

export type ActionTargetingBase = {
  from: ActionRole | null
  range: Range | null
  area: Area | null
}

export type CreatureCriteriaProps = {
  range?: Range
  targets?: Array<ActionRelation>
  filter?: Array<CreatureTag>
}

export type CreatureCriteria = {
  range: Range | null
  targets: Array<ActionRelation>
  filter: Array<CreatureTag>
}

export type ActionSelectionProps = ActionTargetingBaseProps &
  CreatureCriteriaProps & {
    effects?: Array<ActionEffect>
    count?: Expression<number> | typeof AnyNumber
    distinct?: boolean
    repeats?: boolean
  }

export type ActionSelection = ActionTargetingBase &
  CreatureCriteria & {
    type: ActionEffectType.Select
    effects: Array<ActionEffect>
    count: Expression<number> | typeof AnyNumber | null
    distinct: boolean
    repeats: boolean
  }

export type AbilityBaseProps = {
  actions?: Array<Action | BasicAction>
  triggers?: Array<TriggeredAction>
}

export type AbilityBase = {
  actions: Array<Action | BasicAction>
  triggers: Array<TriggeredAction>
}

export type ActionZoneProps = ActionTargetingBaseProps & {
  name?: string
  duration: Lasts
  immediateEffects?: Array<ActionEffect>
  ongoingEffects?: Array<ActionEffect>
  endEffects?: Array<ActionEffect>
  actions?: Array<Action | BasicAction>
}

export type ActionZone = ActionTargetingBase & {
  type: ActionEffectType.Zone
  name: string | null
  duration: Lasts
  immediateEffects: Array<ActionEffect>
  ongoingEffects: Array<ActionEffect>
  endEffects: Array<ActionEffect>
  actions: Array<Action | BasicAction>
}

export type ActionChoice = {
  type: ActionEffectType.Choose
  by: ActionRole | null
  optional: boolean
  options: Array<{ label: string | null; effects: Array<ActionEffect> }>
}

export type ActionTargeting = ActionSelection | ActionZone | ActionChoice

/** What fires a trigger. The subject is who the event is about; the object is the other party. */
export enum TriggerEvent {
  /** The subject starts its turn. */
  StartOfTurn = 'StartOfTurn',
  /** The subject fails a saving throw against the enclosing condition. */
  FailedSave = 'FailedSave',
  /** The subject attacks the object. */
  Attacks = 'Attacks',
  /** The subject hits with an attack. */
  Hits = 'Hits',
  /** The subject is hit by an attack. */
  Hit = 'Hit',
  /** An attack misses the subject. */
  Missed = 'Missed',
  /** The subject takes damage. */
  Damaged = 'Damaged',
  /** The subject fails a check. */
  FailsCheck = 'FailsCheck',
  /** The subject casts a spell (narrowed by the trigger's source). */
  Casts = 'Casts',
}

/** Durations other than a number of rounds. */
export enum Duration {
  /** Until the bearer succeeds on a saving throw against it (4e). */
  SaveEnds = 'SaveEnds',
  /** Until the end of the encounter. */
  Encounter = 'Encounter',
  /** For as long as its creator keeps sustaining it with a Sustain action. */
  Sustained = 'Sustained',
}

export enum ActionEffectType {
  Test = 'Test',
  UseAction = 'UseAction',
  Select = 'Select',
  Zone = 'Zone',
  Damage = 'Damage',
  Healing = 'Healing',
  Move = 'Move',
  Condition = 'Condition',
  Choose = 'Choose',
  When = 'When',
  Modify = 'Modify',
  Redirect = 'Redirect',
  Reroll = 'Reroll',
  Cancel = 'Cancel',
  End = 'End',
  Refund = 'Refund',
  Descriptive = 'Descriptive',
}

/** What modify(...) changes about the triggering event. */
export enum ModifyTarget {
  /** The triggering roll's result. */
  Roll = 'Roll',
  /** The triggering damage. */
  Damage = 'Damage',
  /** The triggering action's cost (Quickened Casting). */
  Cost = 'Cost',
}

/** How move(...) moves the current creature. */
export enum MoveKind {
  /** A normal move at its speed. */
  Stride = 'Stride',
  /** A careful move that doesn't provoke. */
  Shift = 'Shift',
  /** You move it in any direction. */
  Slide = 'Slide',
  /** You move it directly away from you. */
  Push = 'Push',
  /** You move it directly toward you. */
  Pull = 'Pull',
  /** It moves without crossing the space in between. */
  Teleport = 'Teleport',
}

export type TriggerPartyProps = ActionRole | CreatureCriteriaProps

export type TriggerParty = ActionRole | CreatureCriteria

export type ActionTriggerProps = {
  event: TriggerEvent
  subject?: TriggerPartyProps
  object?: TriggerPartyProps
  source?: AbilityFilterProps
}

export type ActionTrigger = {
  event: TriggerEvent
  subject: TriggerParty | null
  object: TriggerParty | null
  source: AbilityFilterProps | null
}

export type ResolutionProps = {
  potency?: Characteristic
  targeting: ActionTargeting | Array<ActionTargeting>
}

export type Resolution = {
  potency: Characteristic | null
  targeting: Array<ActionTargeting>
}

export type ActionBaseProps = {
  name?: string
  action: ActionType
}

export type ActionBase = {
  name: string | null
  action: ActionType
}

export type ActionProps = ActionBaseProps &
  ResolutionProps & {
    trigger?: ActionTriggerProps
    requirement?: string
  }

export enum ActionKind {
  /** Built with action(...): any targeting and effects. */
  Full = 'Full',
  /** Built with basic(...): a stored single-target attack that deals dice + potency damage on a hit. */
  Basic = 'Basic',
}

export type Action = ActionBase &
  Resolution & {
    kind: ActionKind.Full
    trigger: ActionTrigger | null
    requirement: string | null
  }

export type BasicActionProps = ActionBaseProps &
  ActionOutcomesProps & {
    range: Range
    offense: Characteristic
    defense: Characteristic
    dice: Expression<Roll>
    damageType: DamageType
    potency: Characteristic
    effects?: Array<ActionEffect>
  }

export type BasicAction = ActionBase &
  ActionOutcomes & {
    kind: ActionKind.Basic
    range: Range
    offense: Characteristic
    defense: Characteristic
    dice: Expression<Roll>
    damageType: DamageType
    potency: Characteristic
    effects: Array<ActionEffect>
  }

export type TriggeredActionProps = ResolutionProps & ActionTriggerProps

export type TriggeredAction = Resolution & ActionTrigger

export type ActionAmountProps = {
  dice?: Expression<Roll>
  potencyMultiplier?: Expression<number>
  bonus?: Expression<number>
}

export type Lasts = { rounds: Expression<number> } | Duration

export type ConditionProps = AbilityBaseProps & {
  duration?: Lasts
  effects?: Array<AbilityEffect>
  ongoingEffects?: Array<ActionEffect>
  endEffects?: Array<ActionEffect>
}

export type ActionOverrides = {
  offense?: Characteristic
  defense?: Characteristic
  potency?: Characteristic
  range?: Range
  dice?: Expression<number>
  factor?: Expression<number>
  attackBonus?: Expression<number>
}

export type ActionOutcome = string

export type ActionOutcomeEffects = {
  success: Array<ActionEffect>
  failure: Array<ActionEffect>
  [outcome: ActionOutcome]: Array<ActionEffect> | undefined
}

export type ActionOutcomesProps = { outcomes?: Partial<ActionOutcomeEffects> }

export type ActionOutcomes = { outcomes: ActionOutcomeEffects }

export type ActionTest = { type: ActionEffectType.Test; offense: Characteristic; defense: Characteristic; defenderRolls: boolean } & ActionOutcomes

export type ActionEffect =
  | ActionTest
  | ({
      type: ActionEffectType.UseAction
      filter: AbilityFilterProps
      basic: boolean
      by: ActionRole | null
      overrides: ActionOverrides
    } & ActionOutcomes)
  | ActionSelection
  | ActionZone
  | { type: ActionEffectType.Damage; amount: Expression<Roll>; damageType: DamageType | null }
  | { type: ActionEffectType.Healing; amount: Expression<Roll>; temporary: boolean }
  | { type: ActionEffectType.Move; kind: MoveKind; distance: Expression<number>; towardYou: boolean }
  | (AbilityBase & {
      type: ActionEffectType.Condition
      condition: CreatureTag | string
      duration: Lasts | null
      effects: Array<AbilityEffect>
      ongoingEffects: Array<ActionEffect>
      endEffects: Array<ActionEffect>
    })
  | ActionChoice
  | { type: ActionEffectType.When; predicate: Expression<boolean>; effects: Array<ActionEffect>; otherwise: Array<ActionEffect> }
  | { type: ActionEffectType.Modify; what: ModifyTarget; amount: Expression<number> }
  | { type: ActionEffectType.Redirect | ActionEffectType.Reroll | ActionEffectType.Cancel | ActionEffectType.Refund }
  | { type: ActionEffectType.End; condition: CreatureTag | null }
  | { type: ActionEffectType.Descriptive; description: string }

const outcomes = (props: ActionOutcomesProps): ActionOutcomes => ({
  outcomes: { ...props.outcomes, success: props.outcomes?.success ?? [], failure: props.outcomes?.failure ?? [] },
})

const triggerParty = (props: TriggerPartyProps | undefined): TriggerParty | null => {
  if (props === undefined || Strings.isString(props)) {
    return props ?? null
  }

  return creatureCriteria(props)
}

const creatureCriteria = (props: CreatureCriteriaProps): CreatureCriteria => ({
  range: props.range ?? null,
  targets: props.targets ?? [ActionRelation.Origin, ActionRelation.Ally, ActionRelation.Enemy],
  filter: props.filter ?? [],
})

const resolution = (props: ResolutionProps): Resolution => ({
  potency: props.potency ?? null,
  targeting: Array.isArray(props.targeting) ? props.targeting : [props.targeting],
})

const resolveTrigger = (props: ActionTriggerProps): ActionTrigger => ({
  event: props.event,
  subject: triggerParty(props.subject),
  object: triggerParty(props.object),
  source: props.source ?? null,
})

export const action = (props: ActionProps): Action => ({
  kind: ActionKind.Full,
  ...resolution(props),
  name: props.name ?? null,
  action: props.action,
  trigger: props.trigger === undefined ? null : resolveTrigger(props.trigger),
  requirement: props.requirement ?? null,
})

export const trigger = (props: TriggeredActionProps): TriggeredAction => ({ ...resolution(props), ...resolveTrigger(props) })

export const test = (props: {
  offense: Characteristic
  defense: Characteristic
  defenderRolls?: boolean
  outcomes: Partial<ActionOutcomeEffects>
}): ActionTest => {
  Assertions.assert(
    Object.values(props.outcomes).some((it) => (it ?? []).length > 0),
    () => 'A test needs at least one outcome'
  )
  return {
    type: ActionEffectType.Test,
    offense: props.offense,
    defense: props.defense,
    defenderRolls: props.defenderRolls ?? false,
    ...outcomes(props),
  }
}

export const basic = (props: BasicActionProps): BasicAction => ({
  kind: ActionKind.Basic,
  ...props,
  name: props.name ?? null,
  ...outcomes(props),
  effects: props.effects ?? [],
})

export const useAction = (filter: AbilityFilterProps, props: { by?: ActionRole } & ActionOutcomesProps = {}): ActionEffect => ({
  type: ActionEffectType.UseAction,
  filter,
  basic: false,
  by: props.by ?? null,
  overrides: {},
  ...outcomes(props),
})

export const useBasic = (filter: AbilityFilterProps, props: { by?: ActionRole } & ActionOverrides & ActionOutcomesProps = {}): ActionEffect => {
  const { by, outcomes: outcomeProps, ...overrides } = props
  return { type: ActionEffectType.UseAction, filter, basic: true, by: by ?? null, overrides, ...outcomes({ outcomes: outcomeProps }) }
}

const abilityBase = (props: AbilityBaseProps): AbilityBase => ({
  actions: props.actions ?? [],
  triggers: props.triggers ?? [],
})

const targetingBase = (props: ActionTargetingBaseProps): ActionTargetingBase => ({
  from: props.from ?? null,
  range: props.range ?? null,
  area: props.area ?? null,
})

export const select = (props: ActionSelectionProps): ActionSelection => ({
  type: ActionEffectType.Select,
  ...targetingBase(props),
  ...creatureCriteria(props),
  effects: props.effects ?? [],
  count: props.count ?? null,
  distinct: props.distinct ?? false,
  repeats: props.repeats ?? false,
})

export const zone = (props: ActionZoneProps): ActionZone => ({
  type: ActionEffectType.Zone,
  ...targetingBase(props),
  name: props.name ?? null,
  duration: props.duration,
  immediateEffects: props.immediateEffects ?? [],
  ongoingEffects: props.ongoingEffects ?? [],
  endEffects: props.endEffects ?? [],
  actions: props.actions ?? [],
})

export const damage = (amount: Expression<Roll>, damageType?: DamageType): ActionEffect => ({
  type: ActionEffectType.Damage,
  amount,
  damageType: damageType ?? null,
})

export const healing = (amount: Expression<Roll>, props: { temporary?: boolean } = {}): ActionEffect => ({
  type: ActionEffectType.Healing,
  amount,
  temporary: props.temporary ?? false,
})

export const move = (kind: MoveKind, distance: Expression<number>, props: { towardYou?: boolean } = {}): ActionEffect => ({
  type: ActionEffectType.Move,
  kind,
  distance,
  towardYou: props.towardYou ?? false,
})

export const condition = (condition: CreatureTag | string, props: ConditionProps = {}): ActionEffect => ({
  type: ActionEffectType.Condition,
  condition,
  ...abilityBase(props),
  duration: props.duration ?? null,
  effects: props.effects ?? [],
  ongoingEffects: props.ongoingEffects ?? [],
  endEffects: props.endEffects ?? [],
})

export const choose = (
  options: Array<{ label?: string; effects: Array<ActionEffect> }>,
  props: { by?: ActionRole; optional?: boolean } = {}
): ActionChoice => ({
  type: ActionEffectType.Choose,
  by: props.by ?? null,
  optional: props.optional ?? false,
  options: options.map((it) => ({ label: it.label ?? null, effects: it.effects })),
})

export const when = (
  predicate: Expression<boolean>,
  effects: Array<ActionEffect>,
  props: { otherwise?: Array<ActionEffect> } = {}
): ActionEffect => ({
  type: ActionEffectType.When,
  predicate,
  effects,
  otherwise: props.otherwise ?? [],
})

export const modify = (what: ModifyTarget, amount: Expression<number>): ActionEffect => ({ type: ActionEffectType.Modify, what, amount })

export const redirect = (): ActionEffect => ({ type: ActionEffectType.Redirect })
export const reroll = (): ActionEffect => ({ type: ActionEffectType.Reroll })
export const cancel = (): ActionEffect => ({ type: ActionEffectType.Cancel })
export const end = (condition?: CreatureTag): ActionEffect => ({ type: ActionEffectType.End, condition: condition ?? null })
export const refund = (): ActionEffect => ({ type: ActionEffectType.Refund })

export type ConditionInstance = { condition: CreatureTag | string; ongoingEffects: Array<ActionEffect> }

const ConditionsExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Creature.Conditions',
  builder: (creature: ActionRole) => ({ creature }),
  resolver: (): Array<ConditionInstance> => {
    throw new Error("Needs the creature's current conditions")
  },
})

export const conditions = ConditionsExpression.builder

export type CreatureInstance = { id: string }

const CreaturesWithinExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Creature.Within',
  builder: (creature: ActionRole, range: Range) => ({ creature, range }),
  resolver: (): Array<CreatureInstance> => {
    throw new Error('Needs creature positions')
  },
})

export const creaturesWithin = CreaturesWithinExpression.builder

const IsRelationExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Creature.IsRelation',
  builder: (creature: Expression<CreatureInstance>, relation: ActionRelation) => ({ creature, relation }),
  resolver: (): boolean => {
    throw new Error('Needs creature sides')
  },
})

export const isRelation = IsRelationExpression.builder

const HasTagExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Creature.HasTag',
  builder: (tag: CreatureTag, creature: ActionRole = ActionRole.Target) => ({ creature, tag: tag.id }),
  resolver: (): boolean => {
    throw new Error("Needs the creature's tags")
  },
})

export const hasTag = HasTagExpression.builder

const IsConditionExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Condition.Is',
  builder: (instance: Expression<ConditionInstance>, condition: CreatureTag) => ({ instance, condition: condition.id }),
  resolver: ({ instance, condition }, evaluate): boolean => {
    const value = evaluate(instance).condition
    return Strings.isString(value) ? value === condition : value.id === condition
  },
})

export const isCondition = IsConditionExpression.builder

const ConditionDamageExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Condition.Damage',
  builder: (instance: Expression<ConditionInstance>) => ({ instance }),
  resolver: ({ instance }, evaluate): Roll =>
    Rolls.toRoll(
      evaluate(Rolls.sum(evaluate(instance).ongoingEffects.flatMap((it) => (it.type === ActionEffectType.Damage ? [evaluate(it.amount)] : []))))
    ),
})

export const conditionDamage = ConditionDamageExpression.builder

const TotalExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Roll.Total',
  builder: (rolls: Expression<Array<Roll>>) => ({ rolls }),
  resolver: ({ rolls }, evaluate): Roll => Rolls.toRoll(evaluate(Rolls.sum(evaluate(rolls)))),
})

export const total = TotalExpression.builder

const OngoingDamageExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Creature.OngoingDamage',
  builder: (condition: CreatureTag, creature: ActionRole = ActionRole.Target) => ({ creature, condition: condition.id }),
  resolver: ({ creature, condition }, evaluate): Roll => {
    const rolls = evaluate(conditions(creature))
      .filter((it) => !Strings.isString(it.condition) && it.condition.id === condition)
      .map((it) => evaluate(conditionDamage(it)))
    return Rolls.toRoll(evaluate(Rolls.sum(rolls)))
  },
})

export const ongoingDamage = OngoingDamageExpression.builder

export const descriptive = (description: string): ActionEffect => ({ type: ActionEffectType.Descriptive, description })

// Helpers

const AmountExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Roll.Amount',
  builder: (amount: ActionAmountProps) => ({
    dice: amount.dice ?? null,
    potencyMultiplier: amount.potencyMultiplier ?? 0,
    bonus: amount.bonus ?? null,
  }),
  resolver: ({ dice, potencyMultiplier, bonus }, evaluate): Roll =>
    Rolls.toRoll(evaluate(Rolls.sum([dice ?? 0, NumericExpressions.multiply([potencyMultiplier ?? 0, Potency]), bonus ?? 0]))),
})

export const amount = (props: ActionAmountProps): Expression<Roll> => AmountExpression.builder(props)

export const half = (amount: Expression<Roll>): Expression<Roll> => Rolls.multiply(amount, 0.5)
export const double = (amount: Expression<Roll>): Expression<Roll> => Rolls.multiply(amount, 2)
export const negative = (amount: Expression<number>): Expression<number> => NumericExpressions.multiply([amount, -1])
export const bonus = (characteristic: Characteristic, amount: number): AbilityEffect =>
  CharacterEffects.modifyCharacteristic(characteristic, Attributes.modifier(Patches.sum(amount)))

export const PerDay: ResourcePool = { size: 1, refresh: [{ period: GameTimeUnit.Day, amount: RelativeAmount.All }] }
export const PerEncounter: ResourcePool = { size: 1, refresh: [{ period: GameTimeUnit.Encounter, amount: RelativeAmount.All }] }

export const Decisions = [
  'Builders apply defaults: each takes props with optional fields and returns complete data, with absent values as null, false or []. Meaningful absences stay null (count, from, range, area) and are interpreted where they are used, not filled in. Actions are built with action(...); a condition resolves its own actions.',
  "Actions and triggers share a Resolution (potency plus targeting). An action is something you choose to do: it always has an action type, and can have a trigger (a reaction), a requirement and a name. A trigger is something that happens on its own: it has a trigger event and no action type. Uses per day or encounter come from the ability's resource pool.",
  "Targeting is select(...) or zone(...), or an ordered list of them resolved in order. select picks creatures (from, range, area, count, targets, filter) and applies its effects to each, once. zone places a lasting area (name, from, range, area, required duration) whose effects concern the creatures inside it: immediateEffects apply once to each of them when it is placed, ongoingEffects apply while it lasts, and endEffects apply once to each of them when it ends. In ongoingEffects, a condition with no duration lasts while a creature is inside (it applies on entering and ends on leaving); every other effect recurs against each creature inside, and the ruleset decides when (in KD, during the Sustain Phase of whoever created the zone; in PF2e, at the start of each affected creature's turn). A zone's actions (Sustain) are available while it lasts. A select nested in a zone's effects is measured from the zone instead (Bigby's hand attacking an adjacent creature).",
  "targets: [ActionRelation.Origin | Ally | Enemy] says who a selection can be, relative to the creature it is measured from (its from, default you), so Origin is that creature and [Ally, Enemy] means everyone but it. A selection measured from a place is relative to the place's owner; trigger parties are relative to you. Default: all three. filter is for tags that are true of a creature on its own (Undead, Primed). There are no ally or enemy tags.",
  'count says how many creatures you choose. With no count, a select with a area takes every qualifying creature in it, and one with only a range takes 1. count: N means you choose up to N of the candidates (with or without a area). count: AnyNumber means you choose any number of them.',
  'A selection picks distinct creatures unless repeats: true. distinct: true also skips creatures this action already selected (Split Shot).',
  "Effects resolve in order. Ending something early with end() is the same as it running out: a condition's or zone's endEffects apply either way, so ending Burning on a Living Bomb target while it is still Primed sets off the detonation (Combustion relies on this).",
  "Selections nest: select(selection) is an effect, measured from the current creature by default. There are no user-defined names, only built-ins in the ActionRole enum: You, Target (the current creature), Subject/Object in triggered actions, and Bearer (the creature or place a condition is on) in a condition's actions and triggers.",
  'from: ActionRole.X on its own selects that creature; with a range or area it is measured from that creature. A selection with neither range nor from takes the range of the action its effects use.',
  "Tests have offense, defense and outcomes keyed by result, always from the actor's side. Every test has success and failure (KD and 4e call them hit and miss); a system can add its own keys (PF2e adds criticalSuccess and criticalFailure). The model has no built-in notion of criticals. defenderRolls: true means the target rolls its defense against your offense (a saving throw); the outcomes are still from your side.",
  "A basic action (basic({...})) is a simple stored attack: name, action type, range, offense, defense, dice, damage type, potency. It targets one creature within range, makes its test, and on success (a hit) deals dice + potency damage. The test's own outcomes add to the result and effects always apply. Anything that targets differently, makes more than one test, or doesn't deal standard damage is a full action. Weapons are abilities with a basic action.",
  "useBasic(filter, { by?, ...overrides, outcomes? }) performs a basic action and can override its offense, defense, potency, range, dice (N rolls its dice N times), factor or attackBonus. useAction(filter, { by?, outcomes? }) performs any action, with no overrides. Both act against the current creature; with by: ActionRole.Target the current creature performs it and picks its own targets. ActionOutcomes add to the used action's own and apply to whoever it targeted.",
  'Amounts are structured: amount({ dice, potencyMultiplier, bonus }) is an Expression<Roll>, so half and double damage are just Rolls.multiply around it. potencyMultiplier is how many times the action\'s potency is added (the N in 2d6 + NP) (KD bands, 4e "+ ability modifier"). dice: N in overrides rolls the dice N times ([W] counting).',
  'Damage, healing (temporary: true for temporary hit points) and move are the only amount effects.',
  "condition(tagOrName, { duration, effects, ongoingEffects, endEffects, actions, triggers }) applies a condition. A creature tag (Burning, Slowed) is a condition the ruleset defines; a name (Mirror Image, Corroded) is one the ability defines. Either way, the instance can carry its own behaviour on top (Living Bomb's detonation on Burning, Sleep's failed-save follow-up on Slowed).",
  "A condition's effects are passive character effects; ongoingEffects recur on the bearer on the ruleset's ongoing timing, as in a zone; endEffects apply to the bearer once when it ends (or is ended). There is no End trigger event: what happens when something ends goes in its endEffects. Damage over time is always ongoingEffects: [damage(...)]; the ruleset reads those damage effects for its stacking rules (4e and PF2e take the highest of each type, KD stacks each Burning), and ongoingDamage(tag) totals them across every instance of that condition on a creature (Combustion). When a stronger instance replaces a weaker one, the replaced instance's endEffects do not apply.",
  "Abilities and conditions have both actions and triggers. A condition's actions (Sustain, Riposte's interrupt) are available while it lasts; its triggers (Sleep's failed save) fire on their own while it lasts. A passive aura is a trigger on the ability itself. Abilities and conditions share AbilityBase (actions and triggers); conditions add a duration. Zones have actions but no triggers: what recurs in a zone goes in its ongoingEffects.",
  "A trigger is { event, subject?, object?, source? }. subject is who the event is about; object is the other party. subject defaults to the condition's creature on a condition, and to you otherwise.",
  'Durations: rounds, save ends, encounter, or sustained.',
  'A select measured from a zone (nested in its effects, or ActionRole.Bearer in its actions) with no range or area selects every creature inside it. Conditions only ever go on creatures.',
  'Event verbs change the triggering event or the enclosing condition: modify(ModifyTarget.Roll | Damage | Cost, amount), redirect, reroll, cancel, end, refund.',
  'choose(options, { by, optional }) lets someone pick a branch; optional: true lets them pick none, which is how "can" is modelled (a single unlabeled option reads "X can: ..."). A choose can also be a targeting, so the decision comes before any targets are picked (White Raven Onslaught\'s optional slide). when(predicate, effects, { otherwise }) branches on an Expression<boolean>, usually hasTag(tag), which checks the current creature (Living Bomb\'s Primed check, Heal against undead); hasTag(tag, role) checks someone else. Anything else stays descriptive text.',
  'Whose sheet: characteristics written in an ability are evaluated on the character who has the ability. Numbers inside a used action come from whoever performs it.',
]

export const Gaps = [
  'Heightening tables (Summon Animal, Untamed Shift) stay as text.',
  "Targets that are not creatures (Dispel Magic's zone, Grease's object) have no selection filter.",
  'Text costs (expend a heal spell, a Focus Point, a material component) and DCs from tables (Battle Medicine, Recognize Spell) are stand-ins.',
  "Placeholders: 4e and PF2e examples borrow KD's Weapon, conditions and damage types, plus scratch-local tags and damage types.",
]
