import { Characteristic } from '@simulacrum/ruleset/characteristic'
import { ActionType } from '@simulacrum/ruleset/action-type'
import { Area, AreaShape, Range } from '@simulacrum/ruleset/targeting'
import { CreatureTag } from '@simulacrum/ruleset/tag'
import { DamageType, Potency } from '@simulacrum/ruleset/damage'
import { Roll } from '@simulacrum/ruleset/roll'
import { AbilityEffect } from '@simulacrum/ruleset/character-effect'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { AbilityFilterProps } from '@simulacrum/ruleset/ability'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { ArrayExpressions, Expression, NumericExpressions } from '@bessemer/cornerstone/expression'
import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'
import { Assertions, Patches } from '@bessemer/cornerstone'
import { Attributes, CharacterEffects, Damage, Rolls, Tags } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import * as Dnd4eActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import * as Pf2eActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import * as Dnd4e from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Pf2e from '@simulacrum/ruleset-pf2e/characteristic'
import { MeleeBasicAttack } from '@simulacrum/ruleset-dnd4e/common'
import { Weapon } from '@simulacrum/ruleset-khydrian-drift/weapon'
import { Acid, Electric, Fire, Physical } from '@simulacrum/ruleset-khydrian-drift/damage-type'
import {
  AgilityAttackRating,
  AgilityPotency,
  ArmorClass,
  BrawnAttackRating,
  BrawnPotency,
  FortitudeDefense,
  IntelligenceAttackRating,
  IntelligencePotency,
  RangeBand,
  ReflexDefense,
} from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { Blinded, Burning, Deafened, Poisoned, Primed, Prone, Stunned, Unconscious } from '@simulacrum/ruleset-khydrian-drift/condition'

export enum KdOutcome {
  Hit = 'Hit',
  Miss = 'Miss',
}

export enum Dnd4eOutcome {
  Hit = 'Hit',
  Miss = 'Miss',
}

export enum Pf2eOutcome {
  CriticalSuccess = 'CriticalSuccess',
  Success = 'Success',
  Failure = 'Failure',
  CriticalFailure = 'CriticalFailure',
}

export enum ActionRelation {
  Origin = 'Origin',
  Ally = 'Ally',
  Enemy = 'Enemy',
}

export const AnyNumber = 'AnyNumber'

export enum ActionCreature {
  You = 'You',
  Target = 'Target',
  Subject = 'Subject',
  Object = 'Object',
  Bearer = 'Bearer',
}

export type ActionTargetingBaseProps = {
  from?: ActionCreature
  range?: Range
  area?: Area
  effects?: Array<ActionEffect>
}

export type ActionTargetingBase = {
  from: ActionCreature | null
  range: Range | null
  area: Area | null
  effects: Array<ActionEffect>
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
    count?: Expression<number> | typeof AnyNumber
    distinct?: boolean
    repeats?: boolean
  }

export type ActionSelection = ActionTargetingBase &
  CreatureCriteria & {
    type: ActionEffectType.Select
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

export type ActionZoneProps = ActionTargetingBaseProps &
  AbilityBaseProps & {
    name?: string
    duration: Lasts
    conditions?: Array<CreatureTag>
  }

export type ActionZone = ActionTargetingBase &
  AbilityBase & {
    type: ActionEffectType.Zone
    name: string | null
    duration: Lasts
    conditions: Array<CreatureTag>
  }

export type ActionTargeting = ActionSelection | ActionZone

export enum TriggerEvent {
  End = 'End',
  EachRound = 'EachRound',
  StartOfTurn = 'StartOfTurn',
  FailedSave = 'FailedSave',
  Attacks = 'Attacks',
  Hits = 'Hits',
  Hit = 'Hit',
  Missed = 'Missed',
  Damaged = 'Damaged',
  FailsCheck = 'FailsCheck',
  Casts = 'Casts',
}

export enum Duration {
  SaveEnds = 'SaveEnds',
  Encounter = 'Encounter',
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
  Modify = 'Modify',
  Redirect = 'Redirect',
  Reroll = 'Reroll',
  Cancel = 'Cancel',
  End = 'End',
  Refund = 'Refund',
  Descriptive = 'Descriptive',
}

export enum ModifyTarget {
  Roll = 'Roll',
  Damage = 'Damage',
  Cost = 'Cost',
}

export enum MoveKind {
  Stride = 'Stride',
  Shift = 'Shift',
  Slide = 'Slide',
  Push = 'Push',
  Pull = 'Pull',
  Teleport = 'Teleport',
}

export type TriggerPartyProps = ActionCreature | CreatureCriteriaProps

export type TriggerParty = ActionCreature | CreatureCriteria

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
  Full = 'Full',
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
  damage?: { amount: Expression<Roll>; type: DamageType }
  effects?: Array<AbilityEffect>
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

export type ActionOutcomesProps = { outcomes?: Partial<Record<ActionOutcome, Array<ActionEffect>>> }

export type ActionOutcomes = { outcomes: Partial<Record<ActionOutcome, Array<ActionEffect>>> }

export type ActionTest = { type: ActionEffectType.Test; offense: Characteristic; defense: Characteristic; defenderRolls: boolean } & ActionOutcomes

export type ActionEffect =
  | ActionTest
  | ({
      type: ActionEffectType.UseAction
      filter: AbilityFilterProps
      basic: boolean
      by: ActionCreature | null
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
      damage: { amount: Expression<Roll>; type: DamageType } | null
      effects: Array<AbilityEffect>
    })
  | { type: ActionEffectType.Choose; by: ActionCreature | null; options: Array<{ label: string; effects: Array<ActionEffect> }> }
  | { type: ActionEffectType.Modify; what: ModifyTarget; amount: Expression<number> }
  | { type: ActionEffectType.Redirect | ActionEffectType.Reroll | ActionEffectType.Cancel | ActionEffectType.Refund }
  | { type: ActionEffectType.End; condition: CreatureTag | null }
  | { type: ActionEffectType.Descriptive; description: string }

const outcomes = (props: ActionOutcomesProps): ActionOutcomes => ({ outcomes: props.outcomes ?? {} })

const triggerParty = (props: TriggerPartyProps | undefined): TriggerParty | null => {
  if (props === undefined || typeof props === 'string') {
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

const action = (props: ActionProps): Action => ({
  kind: ActionKind.Full,
  ...resolution(props),
  name: props.name ?? null,
  action: props.action,
  trigger: props.trigger === undefined ? null : resolveTrigger(props.trigger),
  requirement: props.requirement ?? null,
})

const trigger = (props: TriggeredActionProps): TriggeredAction => ({ ...resolution(props), ...resolveTrigger(props) })

const test = (props: {
  offense: Characteristic
  defense: Characteristic
  defenderRolls?: boolean
  outcomes: Partial<Record<ActionOutcome, Array<ActionEffect>>>
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

const basic = (props: BasicActionProps): BasicAction => ({
  kind: ActionKind.Basic,
  ...props,
  name: props.name ?? null,
  ...outcomes(props),
  effects: props.effects ?? [],
})

const useAction = (filter: AbilityFilterProps, props: { by?: ActionCreature } & ActionOutcomesProps = {}): ActionEffect => ({
  type: ActionEffectType.UseAction,
  filter,
  basic: false,
  by: props.by ?? null,
  overrides: {},
  ...outcomes(props),
})

const useBasic = (filter: AbilityFilterProps, props: { by?: ActionCreature } & ActionOverrides & ActionOutcomesProps = {}): ActionEffect => {
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
  effects: props.effects ?? [],
})

const select = (props: ActionSelectionProps): ActionSelection => ({
  type: ActionEffectType.Select,
  ...targetingBase(props),
  ...creatureCriteria(props),
  count: props.count ?? null,
  distinct: props.distinct ?? false,
  repeats: props.repeats ?? false,
})

const zone = (props: ActionZoneProps): ActionZone => ({
  type: ActionEffectType.Zone,
  ...targetingBase(props),
  ...abilityBase(props),
  name: props.name ?? null,
  duration: props.duration,
  conditions: props.conditions ?? [],
})

const damage = (amount: Expression<Roll>, damageType?: DamageType): ActionEffect => ({
  type: ActionEffectType.Damage,
  amount,
  damageType: damageType ?? null,
})

const healing = (amount: Expression<Roll>, props: { temporary?: boolean } = {}): ActionEffect => ({
  type: ActionEffectType.Healing,
  amount,
  temporary: props.temporary ?? false,
})

const move = (kind: MoveKind, distance: Expression<number>, props: { towardYou?: boolean } = {}): ActionEffect => ({
  type: ActionEffectType.Move,
  kind,
  distance,
  towardYou: props.towardYou ?? false,
})

const condition = (condition: CreatureTag | string, props: ConditionProps = {}): ActionEffect => ({
  type: ActionEffectType.Condition,
  condition,
  ...abilityBase(props),
  duration: props.duration ?? null,
  damage: props.damage ?? null,
  effects: props.effects ?? [],
})

const choose = (options: Array<{ label: string; effects: Array<ActionEffect> }>, props: { by?: ActionCreature } = {}): ActionEffect => ({
  type: ActionEffectType.Choose,
  by: props.by ?? null,
  options,
})

const modify = (what: ModifyTarget, amount: Expression<number>): ActionEffect => ({ type: ActionEffectType.Modify, what, amount })

const redirect = (): ActionEffect => ({ type: ActionEffectType.Redirect })
const reroll = (): ActionEffect => ({ type: ActionEffectType.Reroll })
const cancel = (): ActionEffect => ({ type: ActionEffectType.Cancel })
const end = (condition?: CreatureTag): ActionEffect => ({ type: ActionEffectType.End, condition: condition ?? null })
const refund = (): ActionEffect => ({ type: ActionEffectType.Refund })

export type ConditionInstance = { condition: CreatureTag | string; damage: Roll | null }

const ConditionsExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Creature.Conditions',
  builder: (creature: ActionCreature) => ({ creature }),
  resolver: (): Array<ConditionInstance> => {
    throw new Error("Needs the creature's current conditions")
  },
})

const conditions = ConditionsExpression.builder

export type CreatureInstance = { id: string }

const CreaturesWithinExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Creature.Within',
  builder: (creature: ActionCreature, range: Range) => ({ creature, range }),
  resolver: (): Array<CreatureInstance> => {
    throw new Error('Needs creature positions')
  },
})

const creaturesWithin = CreaturesWithinExpression.builder

const IsRelationExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Creature.IsRelation',
  builder: (creature: Expression<CreatureInstance>, relation: ActionRelation) => ({ creature, relation }),
  resolver: (): boolean => {
    throw new Error('Needs creature sides')
  },
})

const isRelation = IsRelationExpression.builder

const IsConditionExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Condition.Is',
  builder: (instance: Expression<ConditionInstance>, condition: CreatureTag) => ({ instance, condition: condition.id }),
  resolver: ({ instance, condition }, evaluate): boolean => {
    const value = evaluate(instance).condition
    return typeof value === 'string' ? value === condition : value.id === condition
  },
})

const isCondition = IsConditionExpression.builder

const ConditionDamageExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Condition.Damage',
  builder: (instance: Expression<ConditionInstance>) => ({ instance }),
  resolver: ({ instance }, evaluate): Roll => evaluate(instance).damage ?? Rolls.constant(0),
})

const conditionDamage = ConditionDamageExpression.builder

const TotalExpression = ExpressionInternal.defineExpression({
  expressionKey: 'Roll.Total',
  builder: (rolls: Expression<Array<Roll>>) => ({ rolls }),
  resolver: ({ rolls }, evaluate): Roll => Rolls.toRoll(evaluate(Rolls.sum(evaluate(rolls)))),
})

const total = TotalExpression.builder

const descriptive = (description: string): ActionEffect => ({ type: ActionEffectType.Descriptive, description })

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

const amount = (props: ActionAmountProps): Expression<Roll> => AmountExpression.builder(props)

const half = (amount: Expression<Roll>): Expression<Roll> => Rolls.multiply(amount, 0.5)
const double = (amount: Expression<Roll>): Expression<Roll> => Rolls.multiply(amount, 2)
const negative = (amount: Expression<number>): Expression<number> => NumericExpressions.multiply([amount, -1])
const bonus = (characteristic: Characteristic, amount: number): AbilityEffect =>
  CharacterEffects.modifyCharacteristic(characteristic, Attributes.modifier(Patches.sum(amount)))

const Band = {
  Low: amount({ dice: Rolls.dice(1, 6), potencyMultiplier: 1 }),
  Medium: amount({ dice: Rolls.dice(2, 6), potencyMultiplier: 2 }),
  High: amount({ dice: Rolls.dice(3, 6), potencyMultiplier: 3 }),
}

const PerDay: ResourcePool = { size: 1, refresh: [{ period: GameTimeUnit.Day, amount: RelativeAmount.All }] }
const PerEncounter: ResourcePool = { size: 1, refresh: [{ period: GameTimeUnit.Encounter, amount: RelativeAmount.All }] }

// Placeholders for tags, conditions and damage types the 4e and PF2e rulesets don't define

const placeholderTag = (name: string) => Tags.defineAbilityTag(`scratch/${name.toLowerCase().replace(/ /g, '-')}`, { name })
const placeholderCreatureTag = (name: string) => Tags.defineCreatureTag(`scratch/${name.toLowerCase().replace(/ /g, '-')}`, { name })
const placeholderDamageType = (name: string) => Damage.defineDamageType(`scratch/${name.toLowerCase()}`, { name })

const LightBlade = placeholderTag('Light Blade')
const MeleeAttack = placeholderTag('Melee')
const RangedAttack = placeholderTag('Ranged')
const Spell = placeholderTag('Spell')
const HealSpell = placeholderTag('Heal Spell')
const HarmSpell = placeholderTag('Harm Spell')
const Slowed = placeholderCreatureTag('Slowed')
const Grabbed = placeholderCreatureTag('Grabbed')
const Weakened = placeholderCreatureTag('Weakened')
const Covered = placeholderCreatureTag('Covered')
const Cold = placeholderDamageType('Cold')
const Radiant = placeholderDamageType('Radiant')
const Vitality = placeholderDamageType('Vitality')
const Bleed = placeholderDamageType('Bleed')

export const Decisions = [
  'Builders apply defaults: each takes props with optional fields and returns complete data, with absent values as null, false or []. Meaningful absences stay null (count, from, range, area) and are interpreted where they are used, not filled in. Actions are built with action(...); a condition resolves its own actions.',
  "Actions and triggers share a Resolution (potency plus targeting). An action is something you choose to do: it always has an action type, and can have a trigger (a reaction), a requirement and a name. A trigger is something that happens on its own: it has a trigger event and no action type. Uses per day or encounter come from the ability's resource pool.",
  "Targeting is select(...) or zone(...), or an ordered list of them resolved in order. select picks creatures (from, range, area, count, targets, filter) and applies its effects to each, once. zone places a lasting area (name, from, range, area, required duration) whose effects, conditions and triggers concern the creatures inside it: effects apply once to each of them when it is placed, conditions apply while they are inside, and triggers and actions work while it lasts. A select nested in a zone's effects is measured from the zone instead (Bigby's hand attacking an adjacent creature).",
  "targets: [ActionRelation.Origin | Ally | Enemy] says who a selection can be, relative to the creature it is measured from (its from, default you), so Origin is that creature and [Ally, Enemy] means everyone but it. A selection measured from a place is relative to the place's owner; trigger parties are relative to you. Default: all three. filter is for tags that are true of a creature on its own (Undead, Primed). There are no ally or enemy tags.",
  'count says how many creatures you choose. With no count, a select with a area takes every qualifying creature in it, and one with only a range takes 1. count: N means you choose up to N of the candidates (with or without a area). count: AnyNumber means you choose any number of them.',
  'A selection picks distinct creatures unless repeats: true. distinct: true also skips creatures this action already selected (Split Shot).',
  "Effects resolve in order. end() fires the ended condition's End triggers, so ending Burning on a Living Bomb target while it is still Primed sets off the detonation (Combustion relies on this).",
  "Selections nest: select(selection) is an effect, measured from the current creature by default. There are no user-defined names, only built-ins in the ActionCreature enum: You, Target (the current creature), Subject/Object in triggered actions, and Bearer (the creature or place a condition is on) in a condition's actions.",
  'from: ActionCreature.X on its own selects that creature; with a range or area it is measured from that creature. A selection with neither range nor from takes the range of the action its effects use.',
  "Tests have offense, defense and outcomes keyed by the ruleset's own results (KdOutcome.Hit/Miss, Dnd4eOutcome.Hit/Miss, Pf2eOutcome.CriticalSuccess/Success/Failure/CriticalFailure), always from the actor's side. The model has no built-in notion of criticals. defenderRolls: true means the target rolls its defense against your offense (a saving throw); the outcomes are still from your side.",
  "A basic action (basic({...})) is a simple stored attack: name, action type, range, offense, defense, dice, damage type, potency. It targets one creature within range, makes its test, and on the first outcome (a hit) deals dice + potency damage. The test's own outcomes add to the result and effects always apply. Anything that targets differently, makes more than one test, or doesn't deal standard damage is a full action. Weapons are abilities with a basic action.",
  "useBasic(filter, { by?, ...overrides, outcomes? }) performs a basic action and can override its offense, defense, potency, range, dice (N rolls its dice N times), factor or attackBonus. useAction(filter, { by?, outcomes? }) performs any action, with no overrides. Both act against the current creature; with by: ActionCreature.Target the current creature performs it and picks its own targets. ActionOutcomes add to the used action's own and apply to whoever it targeted.",
  'Amounts are structured: amount({ dice, potencyMultiplier, bonus }) is an Expression<Roll>, so half and double damage are just Rolls.multiply around it. potencyMultiplier is how many times the action\'s potency is added (the N in 2d6 + NP) (KD bands, 4e "+ ability modifier"). dice: N in overrides rolls the dice N times ([W] counting).',
  'Damage, healing (temporary: true for temporary hit points) and move are the only amount effects.',
  'A condition grants a temporary ability: { duration, effects (passive character effects), actions, triggers }. Shared conditions are creature tags (Burning); local ones are named by the ability.',
  "Abilities and conditions have both actions and triggers. A condition's actions (Sustain, Riposte's interrupt) are available while it lasts; its triggers (Living Bomb's detonation, the gas cloud) fire on their own while it lasts. A passive aura is a trigger on the ability itself. Abilities, conditions and zones share AbilityBase (actions and triggers); conditions and zones add a duration.",
  "A trigger is { event, subject?, object?, source? }. subject is who the event is about; object is the other party. subject defaults to the condition's creature on a condition, and to you otherwise.",
  'Durations: rounds, save ends, encounter, or sustained.',
  "TriggerEvent.EachRound recurs once per round, and the ruleset decides when: in KD, during the Sustain Phase of whoever created it; in PF2e, at the start of each affected creature's turn. Abilities say what recurs, not when.",
  'A select measured from a zone (nested in its effects, or ActionCreature.Bearer in its triggers and actions) with no range or area selects every creature inside it. Conditions only ever go on creatures.',
  'Event verbs change the triggering event or the enclosing condition: modify(ModifyTarget.Roll | Damage | Cost, amount), redirect, reroll, cancel, end, refund.',
  'choose(options, { by }) lets someone pick a branch. Anything else stays descriptive text.',
  'Whose sheet: characteristics written in an ability are evaluated on the character who has the ability. Numbers inside a used action come from whoever performs it.',
]

export const Gaps = [
  'Heightening tables (Summon Animal, Untamed Shift), and target-trait branches (Heal vs undead) stay as text.',
  "Targets that are not creatures (Dispel Magic's zone, Grease's object) have no selection filter.",
  'Text costs (expend a heal spell, a Focus Point, a material component) and DCs from tables (Battle Medicine, Recognize Spell) are stand-ins.',
  "Placeholders: 4e and PF2e examples borrow KD's Weapon, conditions and damage types, plus scratch-local tags and damage types.",
]

export type Example = AbilityBaseProps & {
  name: string
  rules: string
  resource?: ResourcePool
}

export const Examples: Array<Example> = [
  {
    name: 'Dagger',
    rules: 'Brawn vs. AC against a creature within touch range. Hit: 1d6 + brawn potency physical damage.',
    actions: [
      basic({
        name: 'Attack with Dagger',
        action: ActionTypes.MajorAction,
        range: RangeBand.Touch,
        offense: BrawnAttackRating,
        defense: ArmorClass,
        dice: Rolls.dice(1, 6),
        damageType: Physical,
        potency: BrawnPotency,
      }),
    ],
  },
  // Rendered:
  // **Attack with Dagger · Major Action**
  // **Target:** one creature within touch
  // **Attack:** Brawn vs. Armor Class
  // **Hit:** The Target takes 1d6 + P Physical damage.
  {
    name: 'Impact Grenade',
    rules:
      'Throw at a point within medium range. Agility vs. Reflex against each creature in a 2-square sphere. Hit: Medium physical damage. Miss: half damage.',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: AgilityPotency,
        targeting: select({
          range: RangeBand.Medium,
          area: { type: AreaShape.Sphere, radius: 2 },
          effects: [
            test({
              offense: AgilityAttackRating,
              defense: ReflexDefense,
              outcomes: { [KdOutcome.Hit]: [damage(Band.Medium, Physical)], [KdOutcome.Miss]: [damage(half(Band.Medium), Physical)] },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** each creature in a 2 squares burst within medium range
  // **Attack:** Agility vs. Reflex
  // **Hit:** The Target takes 2d6 + 2P Physical damage.
  // **Miss:** The Target takes half of 2d6 + 2P Physical damage.
  {
    name: 'Medkit',
    rules: 'An adjacent ally heals Low + intelligence potency. No roll.',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: IntelligencePotency,
        targeting: select({ range: RangeBand.Touch, targets: [ActionRelation.Ally], effects: [healing(Band.Low)] }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** an ally within touch
  // The Target regains 1d6 + P hit points.
  {
    name: 'Flashbang',
    rules: 'Agility vs. Fortitude against each creature in a 2-square sphere within medium range. Hit: Blinded, Deafened and Primed for 1 round.',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        targeting: select({
          range: RangeBand.Medium,
          area: { type: AreaShape.Sphere, radius: 2 },
          effects: [
            test({
              offense: AgilityAttackRating,
              defense: FortitudeDefense,
              outcomes: {
                [KdOutcome.Hit]: [
                  condition(Blinded, { duration: { rounds: 1 } }),
                  condition(Deafened, { duration: { rounds: 1 } }),
                  condition(Primed, { duration: { rounds: 1 } }),
                ],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** each creature in a 2 squares burst within medium range
  // **Attack:** Agility vs. Fortitude
  // **Hit:** The Target is Blinded for 1 round.
  //   The Target is Deafened for 1 round.
  //   The Target is Primed for 1 round.
  {
    name: 'Smoke Grenade',
    rules: 'A 3-square sphere of smoke within medium range lasts 3 rounds. Creatures in the smoke are Covered.',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        targeting: zone({
          name: 'Smoke',
          range: RangeBand.Medium,
          area: { type: AreaShape.Sphere, radius: 3 },
          duration: { rounds: 3 },
          conditions: [Covered],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // Creates Smoke in a 3 squares burst centered on a point within medium range for 3 rounds.
  //   Creatures in Smoke are Covered.
  {
    name: 'Gas Grenade',
    rules:
      'Agility vs. Fortitude against each creature in a 2-square sphere within medium range. Hit: Low acid damage. The gas lingers for 3 rounds: during your Sustain Phase, Agility vs. Fortitude against each creature inside it. Hit: Poisoned for 1 round.',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: AgilityPotency,
        targeting: zone({
          name: 'Toxic Cloud',
          range: RangeBand.Medium,
          area: { type: AreaShape.Sphere, radius: 2 },
          duration: { rounds: 3 },
          effects: [test({ offense: AgilityAttackRating, defense: FortitudeDefense, outcomes: { [KdOutcome.Hit]: [damage(Band.Low, Acid)] } })],
          triggers: [
            trigger({
              event: TriggerEvent.EachRound,
              targeting: select({
                from: ActionCreature.Bearer,
                effects: [
                  test({
                    offense: AgilityAttackRating,
                    defense: FortitudeDefense,
                    outcomes: { [KdOutcome.Hit]: [condition(Poisoned, { duration: { rounds: 1 } })] },
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // Creates Toxic Cloud in a 2 squares burst centered on a point within medium range for 3 rounds.
  //   When it appears, against each creature in Toxic Cloud:
  //     **Attack:** Agility vs. Fortitude
  //     **Hit:** Each Of Them takes 1d6 + P Acid damage.
  //   **Trigger:** each round
  //   **Target:** each creature in Toxic Cloud
  //   **Attack:** Agility vs. Fortitude
  //   **Hit:** Each Creature In Toxic Cloud is Poisoned for 1 round.
  {
    name: 'Chain Lightning',
    rules:
      'Intelligence vs. Reflex against a creature within long range, then against up to three other creatures within medium range of it. Hit: High electric damage. Miss: half damage.',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: IntelligencePotency,
        targeting: select({
          range: RangeBand.Long,
          effects: [
            test({
              offense: IntelligenceAttackRating,
              defense: ReflexDefense,
              outcomes: { [KdOutcome.Hit]: [damage(Band.High, Electric)], [KdOutcome.Miss]: [damage(half(Band.High), Electric)] },
            }),
            select({
              range: RangeBand.Medium,
              count: 3,
              targets: [ActionRelation.Ally, ActionRelation.Enemy],
              effects: [
                test({
                  offense: IntelligenceAttackRating,
                  defense: ReflexDefense,
                  outcomes: { [KdOutcome.Hit]: [damage(Band.High, Electric)], [KdOutcome.Miss]: [damage(half(Band.High), Electric)] },
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** one creature within long range
  // **Attack:** Intelligence vs. Reflex
  // **Hit:** The Target takes 3d6 + 3P Electric damage.
  // **Miss:** The Target takes half of 3d6 + 3P Electric damage.
  // Then, against up to 3 other creatures within medium range of the target:
  //   **Attack:** Intelligence vs. Reflex
  //   **Hit:** Each Of Them takes 3d6 + 3P Electric damage.
  //   **Miss:** Each Of Them takes half of 3d6 + 3P Electric damage.
  {
    name: 'Living Bomb',
    rules:
      'Intelligence vs. Fortitude against a creature within medium range. Hit: Burning (Low fire) for 2 rounds. When it ends on a Primed creature, the creature detonates: Intelligence vs. Reflex against each creature in a 3-square sphere around it. Hit: High fire damage and they are affected by Living Bomb. Miss: half damage.',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: IntelligencePotency,
        targeting: select({
          range: RangeBand.Medium,
          effects: [
            test({
              offense: IntelligenceAttackRating,
              defense: FortitudeDefense,
              outcomes: {
                [KdOutcome.Hit]: [
                  condition(Burning, {
                    duration: { rounds: 2 },
                    damage: { amount: Band.Low, type: Fire },
                    triggers: [
                      trigger({
                        event: TriggerEvent.End,
                        subject: { filter: [Primed] },
                        targeting: [
                          select({ from: ActionCreature.Bearer, effects: [end(Primed)] }),
                          select({
                            area: { type: AreaShape.Sphere, radius: 3 },
                            targets: [ActionRelation.Ally, ActionRelation.Enemy],
                            effects: [
                              test({
                                offense: IntelligenceAttackRating,
                                defense: ReflexDefense,
                                outcomes: {
                                  [KdOutcome.Hit]: [
                                    damage(Band.High, Fire),
                                    descriptive('The target is affected by *[Living Bomb](ability:technology/living-bomb)*.'),
                                  ],
                                  [KdOutcome.Miss]: [damage(half(Band.High), Fire)],
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** one creature within medium range
  // **Attack:** Intelligence vs. Fortitude
  // **Hit:** The Target is Burning (1d6 + P Fire) for 2 rounds.
  //     **Trigger:** Burning ends on a creature that is Primed
  //     **Target:** the affected creature
  //     The Affected Creature's Primed ends.
  //     **Target:** each other creature in a 3 squares burst around the affected creature
  //     **Attack:** Intelligence vs. Reflex
  //     **Hit:** The Target takes 3d6 + 3P Fire damage.
  //       The target is affected by *[Living Bomb](ability:technology/living-bomb)*.
  //     **Miss:** The Target takes half of 3d6 + 3P Fire damage.
  {
    name: 'Combustion',
    rules:
      'Choose a creature within medium range that is Primed and Burning. It detonates and immediately takes the damage from each of its Burning conditions, then those conditions end.',
    actions: [
      action({
        action: ActionTypes.MinorAction,
        targeting: select({
          range: RangeBand.Medium,
          filter: [Primed, Burning],
          effects: [
            damage(
              total(
                ArrayExpressions.map(
                  ArrayExpressions.filter(conditions(ActionCreature.Target), (it) => isCondition(it, Burning)),
                  (it) => conditionDamage(it)
                )
              ),
              Fire
            ),
            end(Burning),
            end(Primed),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Minor Action**
  // **Target:** one creature that is Primed and Burning within medium range
  // The Target takes the total of the damage of the conditions on the target that are Burning Fire damage.
  // The Target's Burning ends.
  // The Target's Primed ends.
  {
    name: 'Split Shot',
    rules: 'Choose three different creatures within long range. The first takes Medium damage, the second is Prone, the third is Slowed.',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        targeting: [
          select({ range: RangeBand.Long, effects: [damage(Band.Medium, Physical)] }),
          select({ range: RangeBand.Long, distinct: true, effects: [condition(Prone)] }),
          select({ range: RangeBand.Long, distinct: true, effects: [condition(Slowed, { duration: { rounds: 1 } })] }),
        ],
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** one creature within long range
  // The Target takes 2d6 + 2P Physical damage.
  // **Target:** one different creature within long range
  // The Target is Prone.
  // **Target:** one different creature within long range
  // The Target is Slowed for 1 round.
  {
    name: "Commander's Strike (4e)",
    rules:
      'An ally within 6 squares makes a melee basic attack against a creature within its reach. Hit: the ally adds your Intelligence modifier to the damage.',
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 6,
          targets: [ActionRelation.Ally],
          effects: [
            useBasic(
              { specificOptions: [MeleeBasicAttack] },
              { by: ActionCreature.Target, outcomes: { [Dnd4eOutcome.Hit]: [damage(amount({ bonus: Dnd4e.IntelligenceModifier.variable }))] } }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** an ally within 6 squares
  // The Target makes a Melee Basic Attack.
  // **Hit:** The Creature It Attacks takes Intelligence Modifier damage.
  {
    name: 'White Raven Onslaught (4e)',
    rules:
      'Strength vs. AC. Hit: 3[W] + Str damage, and until the end of the encounter, whenever you or an ally within 10 squares hits, that creature can slide an adjacent ally 1 square. Miss: choose one ally to gain the same benefit until the end of the encounter.',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon] },
              {
                offense: Dnd4e.StrengthModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.StrengthModifier,
                dice: 3,
                outcomes: {
                  [Dnd4eOutcome.Hit]: [
                    select({
                      from: ActionCreature.You,
                      effects: [
                        condition('White Raven Onslaught', {
                          duration: Duration.Encounter,
                          triggers: [
                            trigger({
                              event: TriggerEvent.Hits,
                              subject: { range: 10, targets: [ActionRelation.Origin, ActionRelation.Ally] },
                              targeting: select({
                                from: ActionCreature.Subject,
                                range: 1,
                                targets: [ActionRelation.Ally],
                                effects: [move(MoveKind.Slide, 1)],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                  [Dnd4eOutcome.Miss]: [
                    descriptive(
                      'Choose one ally within 10 squares. Until the end of the encounter, whenever that ally hits, it can slide an ally adjacent to it 1 square.'
                    ),
                  ],
                },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // You make a Weapon action against the target, using Strength Modifier vs. Armor Class, rolling its damage dice 3 times, adding Strength Modifier instead of its usual modifier.
  // **Hit:** Then, against you:
  //     Each Of Them is White Raven Onslaught until the end of the encounter.
  //       **Trigger:** you or an ally within 10 squares hits with an attack
  //       **Target:** an ally within 1 square of the triggering creature
  //       Slide the target 1 square.
  // **Miss:** Choose one ally within 10 squares. Until the end of the encounter, whenever that ally hits, it can slide an ally adjacent to it 1 square.
  {
    name: 'Riposte Strike (4e)',
    rules:
      'Requirement: wielding a light blade. Dexterity vs. AC against one creature in melee. Hit: 1[W] + Dex damage. If the target attacks you before the start of your next turn, you make your riposte against it as an immediate interrupt: Strength vs. AC, 1[W] + Str damage.',
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon, LightBlade] },
              {
                offense: Dnd4e.DexterityModifier,
                potency: Dnd4e.DexterityModifier,
                outcomes: {
                  [Dnd4eOutcome.Hit]: [
                    condition('Riposte', {
                      duration: { rounds: 1 },
                      actions: [
                        action({
                          action: Dnd4eActionTypes.ImmediateInterrupt,
                          trigger: { event: TriggerEvent.Attacks, object: ActionCreature.You },
                          targeting: select({
                            from: ActionCreature.Subject,
                            effects: [useBasic({ tags: [Weapon, LightBlade] }, { offense: Dnd4e.StrengthModifier, potency: Dnd4e.StrengthModifier })],
                          }),
                        }),
                      ],
                    }),
                  ],
                },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // You make a Weapon Light Blade action against the target, using Dexterity Modifier vs. its usual defense, adding Dexterity Modifier instead of its usual modifier.
  // **Hit:** The Target is Riposte for 1 round.
  //     **Immediate Interrupt**
  //     **Trigger:** the affected creature attacks you
  //     **Target:** the triggering creature
  //     You make a Weapon Light Blade action against the triggering creature, using Strength Modifier vs. its usual defense, adding Strength Modifier instead of its usual modifier.
  {
    name: 'Summons of Khirad (4e)',
    rules:
      'Charisma vs. Will. Hit: you teleport the target 5 squares. Sustain Minor: repeat the attack; on a hit, teleport the target 5 squares again; on a miss, the power ends.',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 10,
          effects: [
            test({
              offense: Dnd4e.CharismaModifier,
              defense: Dnd4e.Will,
              outcomes: {
                [Dnd4eOutcome.Hit]: [
                  move(MoveKind.Teleport, 5),
                  condition('Summons of Khirad', {
                    duration: Duration.Sustained,
                    actions: [
                      action({
                        name: 'Sustain',
                        action: Dnd4eActionTypes.MinorAction,
                        targeting: select({
                          effects: [
                            test({
                              offense: Dnd4e.CharismaModifier,
                              defense: Dnd4e.Will,
                              outcomes: { [Dnd4eOutcome.Hit]: [move(MoveKind.Teleport, 5)], [Dnd4eOutcome.Miss]: [end()] },
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within 10 squares
  // **Attack:** Charisma Modifier vs. Will
  // **Hit:** Teleport the target 5 squares.
  //   The Target is Summons of Khirad (sustained).
  //     **Sustain · Minor Action**
  //     **Target:** the affected creature
  //     **Attack:** Charisma Modifier vs. Will
  //     **Hit:** Teleport the target 5 squares.
  //     **Miss:** Summons of Khirad ends.
  {
    name: "Bigby's Icy Grasp (4e)",
    rules:
      'Conjure a hand within 20 squares. It attacks an adjacent creature: Intelligence vs. Reflex. Hit: 2d8 + Int cold damage and the target is grabbed. Sustain Minor: the grabbed target takes 1d8 + Int cold damage, or you move the hand and attack again, releasing the grabbed creature.',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        potency: Dnd4e.IntelligenceModifier,
        targeting: zone({
          name: 'Icy Hand',
          range: 20,
          duration: Duration.Sustained,
          effects: [
            select({
              range: 1,
              effects: [
                test({
                  offense: Dnd4e.IntelligenceModifier,
                  defense: Dnd4e.Reflex,
                  outcomes: {
                    [Dnd4eOutcome.Hit]: [
                      damage(amount({ dice: Rolls.dice(2, 8), potencyMultiplier: 1 }), Cold),
                      condition(Grabbed, { duration: Duration.Sustained }),
                    ],
                  },
                }),
              ],
            }),
          ],
          actions: [
            action({
              name: 'Sustain',
              action: Dnd4eActionTypes.MinorAction,
              targeting: select({
                effects: [
                  choose([
                    {
                      label: 'Crush',
                      effects: [descriptive('The creature grabbed by the hand takes 1d8 + Intelligence modifier cold damage.')],
                    },
                    {
                      label: 'Move',
                      effects: [descriptive('Move the hand up to 6 squares and attack again, releasing any grabbed creature.')],
                    },
                  ]),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // Creates Icy Hand in a point within 20 squares (sustained).
  //   Then, against one creature within 1 square of Icy Hand:
  //     **Attack:** Intelligence Modifier vs. Reflex
  //     **Hit:** Each Of Them takes 2d8 + P Cold damage.
  //       Each Of Them is Grabbed (sustained).
  //   **Sustain · Minor Action**
  //   **Target:** a creature in it
  //   You choose one:
  //     - **Crush:** The creature grabbed by the hand takes 1d8 + Intelligence modifier cold damage.
  //     - **Move:** Move the hand up to 6 squares and attack again, releasing any grabbed creature.
  {
    name: "Martyr's Blessing (4e)",
    rules: 'Immediate Interrupt. Trigger: an adjacent ally is hit by a melee or ranged attack. Effect: you are hit by the attack instead.',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.ImmediateInterrupt,
        trigger: { event: TriggerEvent.Hit, subject: { range: 1, targets: [ActionRelation.Ally] }, source: { tags: [[MeleeAttack, RangedAttack]] } },
        targeting: select({ from: ActionCreature.You, effects: [redirect()] }),
      }),
    ],
  },
  // Rendered:
  // **Immediate Interrupt**
  // **Trigger:** an ally within 1 square is hit by an attack with a Melee or Ranged action
  // **Target:** you
  // The triggering attack targets you instead.
  {
    name: 'Disruptive Strike (4e)',
    rules:
      'Immediate Interrupt. Trigger: an enemy makes an attack against you or an ally. Strength vs. AC against the attacker. Hit: 1[W] + Str damage and the triggering attack takes a penalty equal to your Wisdom modifier.',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.ImmediateInterrupt,
        trigger: {
          event: TriggerEvent.Attacks,
          subject: { targets: [ActionRelation.Enemy] },
          object: { targets: [ActionRelation.Origin, ActionRelation.Ally] },
        },
        targeting: select({
          from: ActionCreature.Subject,
          effects: [
            useBasic(
              { tags: [Weapon] },
              {
                offense: Dnd4e.StrengthModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.StrengthModifier,
                outcomes: { [Dnd4eOutcome.Hit]: [modify(ModifyTarget.Roll, negative(Dnd4e.WisdomModifier.variable))] },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Immediate Interrupt**
  // **Trigger:** an enemy attacks you or an ally
  // **Target:** the triggering creature
  // You make a Weapon action against the triggering creature, using Strength Modifier vs. Armor Class, adding Strength Modifier instead of its usual modifier.
  // **Hit:** The triggering roll is modified by −Wisdom Modifier.
  {
    name: 'Attacks on the Run (4e)',
    rules: 'Move your speed. At any point during the move, make two attacks against one or two targets: Strength vs. AC, 1[W] + Str damage each.',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: [
          select({
            from: ActionCreature.You,
            effects: [move(MoveKind.Stride, Dnd4e.Speed.variable), descriptive('You can make the attacks at any point during the move.')],
          }),
          select({
            count: 2,
            repeats: true,
            effects: [useBasic({ tags: [Weapon] }, { offense: Dnd4e.StrengthModifier, defense: Dnd4e.ArmorClass, potency: Dnd4e.StrengthModifier })],
          }),
        ],
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** you
  // Stride you Speed squares.
  // You can make the attacks at any point during the move.
  // **Target:** one creature within reach
  // You make a Weapon action against the target, using Strength Modifier vs. Armor Class, adding Strength Modifier instead of its usual modifier.
  {
    name: 'Come and Get It (4e)',
    rules:
      'Effect: each enemy within 3 squares that can see you shifts to a square adjacent to you. Then make an attack against each enemy now adjacent: Strength vs. AC. Hit: 1[W] + Str damage.',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: [
          select({
            from: ActionCreature.You,
            area: { type: AreaShape.Sphere, radius: 3 },
            targets: [ActionRelation.Enemy],
            effects: [move(MoveKind.Shift, 3, { towardYou: true })],
          }),
          select({
            from: ActionCreature.You,
            area: { type: AreaShape.Sphere, radius: 1 },
            targets: [ActionRelation.Enemy],
            effects: [useBasic({ tags: [Weapon] }, { offense: Dnd4e.StrengthModifier, defense: Dnd4e.ArmorClass, potency: Dnd4e.StrengthModifier })],
          }),
        ],
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** each enemy in a 3 squares burst around you
  // Shift the target 3 squares toward you.
  // **Target:** each enemy in a 1 square burst around you
  // You make a Weapon action against the target, using Strength Modifier vs. Armor Class, adding Strength Modifier instead of its usual modifier.
  {
    name: 'Split the Tree (4e)',
    rules:
      'Roll two attack rolls against two creatures within 3 squares of each other, keep the higher, and use that single result against both targets.',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          count: 2,
          effects: [
            descriptive('Make two attack rolls and use the higher result against both targets.'),
            useBasic(
              { tags: [Weapon, RangedAttack] },
              { offense: Dnd4e.DexterityModifier, defense: Dnd4e.ArmorClass, potency: Dnd4e.DexterityModifier, dice: 2 }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // Make two attack rolls and use the higher result against both targets.
  // You make a Weapon Ranged action against the target, using Dexterity Modifier vs. Armor Class, rolling its damage dice 2 times, adding Dexterity Modifier instead of its usual modifier.
  {
    name: 'Trick Strike (4e)',
    rules: 'Primary attack: Dexterity vs. AC. Miss: make a secondary attack against the same target: Dexterity vs. AC, half damage.',
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon] },
              {
                offense: Dnd4e.DexterityModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.DexterityModifier,
                outcomes: {
                  [Dnd4eOutcome.Miss]: [
                    useBasic(
                      { tags: [Weapon] },
                      { offense: Dnd4e.DexterityModifier, defense: Dnd4e.ArmorClass, potency: Dnd4e.DexterityModifier, factor: 0.5 }
                    ),
                  ],
                },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // You make a Weapon action against the target, using Dexterity Modifier vs. Armor Class, adding Dexterity Modifier instead of its usual modifier.
  // **Miss:** You make a Weapon action against the target, using Dexterity Modifier vs. Armor Class, adding Dexterity Modifier instead of its usual modifier, dealing half damage.
  {
    name: 'Sleep (4e)',
    rules:
      'Area burst 2 within 20 squares. Intelligence vs. Will. Hit: the target is slowed (save ends). If the target fails its first saving throw, it becomes unconscious (save ends). Miss: the target is slowed (save ends).',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 20,
          area: { type: AreaShape.Sphere, radius: 2 },
          effects: [
            test({
              offense: Dnd4e.IntelligenceModifier,
              defense: Dnd4e.Will,
              outcomes: {
                [Dnd4eOutcome.Hit]: [
                  condition(Slowed, {
                    duration: Duration.SaveEnds,
                    triggers: [
                      trigger({
                        event: TriggerEvent.FailedSave,
                        targeting: select({ effects: [condition(Unconscious, { duration: Duration.SaveEnds }), end()] }),
                      }),
                    ],
                  }),
                ],
                [Dnd4eOutcome.Miss]: [condition(Slowed, { duration: Duration.SaveEnds })],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** each creature in a 2 squares burst within 20 squares
  // **Attack:** Intelligence Modifier vs. Will
  // **Hit:** The Target is Slowed (save ends).
  //     **Trigger:** the affected creature fails a saving throw against Slowed
  //     **Target:** the affected creature
  //     The Target is Unconscious (save ends).
  //     Slowed ends.
  // **Miss:** The Target is Slowed (save ends).
  {
    name: 'Mirror Image (4e)',
    rules: 'You gain a +6 bonus to AC until the end of the encounter. Each time an attack misses you, the bonus decreases by 2.',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.MinorAction,
        targeting: select({
          from: ActionCreature.You,
          effects: [
            condition('Mirror Image', {
              duration: Duration.Encounter,
              effects: [bonus(Dnd4e.ArmorClass, 6)],
              triggers: [
                trigger({
                  event: TriggerEvent.Missed,
                  targeting: select({ effects: [descriptive('The bonus decreases by 2. When it reaches 0, Mirror Image ends.')] }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Minor Action**
  // **Target:** you
  // You is Mirror Image until the end of the encounter.
  //   +6 Armor Class
  //   **Trigger:** an attack misses the affected creature
  //   **Target:** the affected creature
  //   The bonus decreases by 2. When it reaches 0, Mirror Image ends.
  {
    name: 'Command (4e)',
    rules: 'Wisdom vs. Will. Hit: choose one: the target is knocked prone, or you slide it 3 squares.',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 10,
          effects: [
            test({
              offense: Dnd4e.WisdomModifier,
              defense: Dnd4e.Will,
              outcomes: {
                [Dnd4eOutcome.Hit]: [
                  choose([
                    { label: 'Prone', effects: [condition(Prone)] },
                    { label: 'Slide', effects: [move(MoveKind.Slide, 3)] },
                  ]),
                ],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within 10 squares
  // **Attack:** Wisdom Modifier vs. Will
  // **Hit:** You choose one:
  //     - **Prone:** The Target is Prone.
  //     - **Slide:** Slide the target 3 squares.
  {
    name: 'Sacred Flame (4e)',
    rules:
      'Wisdom vs. Reflex. Hit: 1d6 + Wis radiant damage, and one ally you can see chooses either to gain temporary hit points equal to your Charisma modifier or to make a saving throw.',
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        potency: Dnd4e.WisdomModifier,
        targeting: select({
          range: 5,
          effects: [
            test({
              offense: Dnd4e.WisdomModifier,
              defense: Dnd4e.Reflex,
              outcomes: {
                [Dnd4eOutcome.Hit]: [
                  damage(amount({ dice: Rolls.dice(1, 6), potencyMultiplier: 1 }), Radiant),
                  select({
                    from: ActionCreature.You,
                    range: 10,
                    targets: [ActionRelation.Ally],
                    effects: [
                      choose(
                        [
                          {
                            label: 'Temporary hit points',
                            effects: [healing(amount({ bonus: Dnd4e.CharismaModifier.variable }), { temporary: true })],
                          },
                          { label: 'Saving throw', effects: [descriptive('The ally makes a saving throw.')] },
                        ],
                        { by: ActionCreature.Target }
                      ),
                    ],
                  }),
                ],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within 5 squares
  // **Attack:** Wisdom Modifier vs. Reflex
  // **Hit:** The Target takes 1d6 + P Radiant damage.
  //   Then, against an ally within 10 squares:
  //     The Target chooses one:
  //       - **Temporary hit points:** Each Of Them gains Charisma Modifier temporary hit points.
  //       - **Saving throw:** The ally makes a saving throw.
  {
    name: 'Sanctuary (4e)',
    rules: 'The target gains a +5 bonus to all defenses until it attacks or until the end of your next turn.',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 5,
          targets: [ActionRelation.Ally],
          effects: [
            condition('Sanctuary', {
              duration: { rounds: 1 },
              effects: [bonus(Dnd4e.ArmorClass, 5), bonus(Dnd4e.Fortitude, 5), bonus(Dnd4e.Reflex, 5), bonus(Dnd4e.Will, 5)],
              triggers: [trigger({ event: TriggerEvent.Attacks, targeting: select({ effects: [end()] }) })],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** an ally within 5 squares
  // The Target is Sanctuary for 1 round.
  //   +5 Armor Class
  //   +5 Fortitude
  //   +5 Reflex
  //   +5 Will
  //   **Trigger:** the affected creature attacks a creature
  //   **Target:** the affected creature
  //   Sanctuary ends.
  {
    name: 'One Stands Alone (4e)',
    rules:
      "Close burst 1, each enemy in the burst. Charisma vs. Will. Hit: 2d8 + Cha radiant damage. Effect: the targets are weakened (save ends). You can't use this power if any ally is within 5 squares of you.",
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        requirement: 'No ally is within 5 squares of you.',
        potency: Dnd4e.CharismaModifier,
        targeting: select({
          from: ActionCreature.You,
          area: { type: AreaShape.Sphere, radius: 1 },
          targets: [ActionRelation.Enemy],
          effects: [
            test({
              offense: Dnd4e.CharismaModifier,
              defense: Dnd4e.Will,
              outcomes: { [Dnd4eOutcome.Hit]: [damage(amount({ dice: Rolls.dice(2, 8), potencyMultiplier: 1 }), Radiant)] },
            }),
            condition(Weakened, { duration: Duration.SaveEnds }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action** · Requirement: No ally is within 5 squares of you.
  // **Target:** each enemy in a 1 square burst around you
  // **Attack:** Charisma Modifier vs. Will
  // **Hit:** The Target takes 2d8 + P Radiant damage.
  // The Target is Weakened (save ends).
  {
    name: 'Valiant Strike (4e)',
    rules: 'Strength vs. AC, with a +1 bonus to the attack roll for each enemy adjacent to you. Hit: 2[W] + Str damage.',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon] },
              {
                offense: Dnd4e.StrengthModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.StrengthModifier,
                dice: 2,
                attackBonus: ArrayExpressions.length(
                  ArrayExpressions.filter(creaturesWithin(ActionCreature.You, 1), (it) => isRelation(it, ActionRelation.Enemy))
                ),
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // You make a Weapon action against the target, using Strength Modifier vs. Armor Class, rolling its damage dice 2 times, adding Strength Modifier instead of its usual modifier, with a bonus to the attack roll equal to the number of creatures within 1 of you that are enemy.
  {
    name: 'Rain of Steel (4e)',
    rules:
      'Stance. Until the stance ends, any enemy that starts its turn adjacent to you takes 1[W] damage, as long as you are able to make opportunity attacks.',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.MinorAction,
        targeting: select({
          from: ActionCreature.You,
          effects: [
            condition('Rain of Steel', {
              duration: Duration.Encounter,
              effects: [CharacterEffects.descriptive('This is a stance. It ends when you take another stance.')],
              triggers: [
                trigger({
                  event: TriggerEvent.StartOfTurn,
                  subject: { range: 1, targets: [ActionRelation.Enemy] },
                  targeting: select({
                    from: ActionCreature.Subject,
                    effects: [descriptive('The target takes 1[W] damage, as long as you are able to make opportunity attacks.')],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Minor Action**
  // **Target:** you
  // You is Rain of Steel until the end of the encounter.
  //   This is a stance. It ends when you take another stance.
  //   **Trigger:** an enemy within 1 square starts its turn
  //   **Target:** the triggering creature
  //   The target takes 1[W] damage, as long as you are able to make opportunity attacks.
  {
    name: 'Dispel Magic (4e)',
    rules: 'Targets one conjuration or zone. Intelligence vs. the Will of its creator. Hit: the conjuration or zone is destroyed.',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 10,
          effects: [
            descriptive(
              'Target one conjuration or zone. Make an Intelligence attack against the Will of its creator. **Hit:** the conjuration or zone is destroyed.'
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within 10 squares
  // Target one conjuration or zone. Make an Intelligence attack against the Will of its creator. **Hit:** the conjuration or zone is destroyed.
  {
    name: 'Brute Strike (4e)',
    rules: 'Reliable. Strength vs. AC. Hit: 3[W] + Str damage. If you miss, the power is not expended.',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon] },
              {
                offense: Dnd4e.StrengthModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.StrengthModifier,
                dice: 3,
                outcomes: { [Dnd4eOutcome.Miss]: [refund()] },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // You make a Weapon action against the target, using Strength Modifier vs. Armor Class, rolling its damage dice 3 times, adding Strength Modifier instead of its usual modifier.
  // **Miss:** This use is not expended.
  {
    name: 'Channel Smite (PF2e)',
    rules:
      'Expend a heal or harm spell. Make a melee Strike. Hit: cast the 1-action version of the spell on the target, which automatically fails its save (critically fails on a critical hit). Miss: the spell is lost.',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        requirement: 'Expend a heal or harm spell.',
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon, MeleeAttack] },
              {
                outcomes: {
                  [Pf2eOutcome.Success]: [
                    useAction(
                      { tags: [[HealSpell, HarmSpell]] },
                      {
                        outcomes: {
                          [Pf2eOutcome.Success]: [
                            descriptive(
                              'Cast the 1-action version of the expended spell on the target. It automatically fails its save, or critically fails on a critical hit.'
                            ),
                          ],
                        },
                      }
                    ),
                  ],
                },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆** · Requirement: Expend a heal or harm spell.
  // **Target:** one creature within reach
  // You make a Weapon Melee action against the target.
  // **Success:** You make a Heal Spell or Harm Spell action against the target.
  //   **Success:** Cast the 1-action version of the expended spell on the target. It automatically fails its save, or critically fails on a critical hit.
  {
    name: 'Barreling Charge (PF2e)',
    rules:
      'Stride up to twice your speed. Roll one Athletics check and compare it to the Fortitude DC of each creature whose space you move through; on a success you pass through. Then Strike.',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: [
          select({
            from: ActionCreature.You,
            effects: [
              move(MoveKind.Stride, NumericExpressions.multiply([Pf2e.Speed.variable, 2])),
              select({
                from: ActionCreature.You,
                effects: [
                  descriptive('Roll one Athletics check and compare it to the Fortitude DC of each creature whose space you move through.'),
                  test({
                    offense: Pf2e.Athletics,
                    defense: Pf2e.Fortitude,
                    outcomes: { [Pf2eOutcome.Success]: [descriptive('You move through its space.')] },
                  }),
                ],
              }),
            ],
          }),
          select({ effects: [useBasic({ tags: [Weapon, MeleeAttack] })] }),
        ],
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // **Target:** you
  // Stride you Speed × 2 feet.
  // Then, against you:
  //   Roll one Athletics check and compare it to the Fortitude DC of each creature whose space you move through.
  //   **Attack:** Athletics vs. Fortitude
  //   **Success:** You move through its space.
  // **Target:** one creature within reach
  // You make a Weapon Melee action against the target.
  {
    name: 'Halfling Luck (PF2e)',
    rules: 'Free action, once per day. Trigger: you fail a check. Reroll it and use the new result.',
    resource: PerDay,
    actions: [
      action({
        action: Pf2eActionTypes.FreeAction,
        trigger: { event: TriggerEvent.FailsCheck },
        targeting: select({ from: ActionCreature.You, effects: [reroll()] }),
      }),
    ],
  },
  // Rendered:
  // **Free Action ◇**
  // **Trigger:** you fails a check
  // **Target:** you
  // Reroll the triggering roll and use the new result.
  {
    name: 'Shield Block (PF2e)',
    rules:
      "Reaction. Trigger: you would take physical damage while your shield is raised. Reduce the damage by the shield's Hardness; you and the shield each take the rest.",
    actions: [
      action({
        action: Pf2eActionTypes.Reaction,
        trigger: { event: TriggerEvent.Damaged },
        requirement: 'Your shield is raised.',
        targeting: select({
          from: ActionCreature.You,
          effects: [descriptive("Reduce the damage by your shield's Hardness. You and your shield each take any remaining damage.")],
        }),
      }),
    ],
  },
  // Rendered:
  // **Reaction ⟲** · Requirement: Your shield is raised.
  // **Trigger:** you takes damage
  // **Target:** you
  // Reduce the damage by your shield's Hardness. You and your shield each take any remaining damage.
  {
    name: 'Quickened Casting (PF2e)',
    rules:
      'Free action, once per day. Your next spell this turn costs 1 fewer action, if it is a cantrip or at least 2 ranks below your highest rank.',
    resource: PerDay,
    actions: [
      action({
        action: Pf2eActionTypes.FreeAction,
        targeting: select({
          from: ActionCreature.You,
          effects: [
            condition('Quickened Casting', {
              duration: { rounds: 1 },
              triggers: [
                trigger({
                  event: TriggerEvent.Casts,
                  source: { tags: [Spell] },
                  targeting: select({
                    effects: [
                      modify(ModifyTarget.Cost, -1),
                      end(),
                      descriptive('Only if the spell is a cantrip or at least 2 ranks below your highest rank.'),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Free Action ◇**
  // **Target:** you
  // You is Quickened Casting for 1 round.
  //   **Trigger:** the affected creature casts a Spell action
  //   **Target:** the affected creature
  //   The triggering action cost is modified by -1.
  //   Quickened Casting ends.
  //   Only if the spell is a cantrip or at least 2 ranks below your highest rank.
  {
    name: 'Spiritual Guardian (PF2e)',
    rules:
      'Summon a guardian with 50 HP within 120 feet. When you cast it and each time you Sustain it, move it up to 20 feet and choose: Attack (spell attack against an adjacent creature, counts toward your multiple attack penalty) or Protect (it takes up to 10 damage instead of an adjacent ally).',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: zone({
          name: 'Spiritual Guardian',
          range: 120,
          duration: Duration.Sustained,
          effects: [
            descriptive(
              'The guardian has 50 HP. When you cast this spell and each time you Sustain it, move the guardian up to 20 feet and choose Attack or Protect.'
            ),
          ],
          actions: [
            action({
              name: 'Sustain',
              action: Pf2eActionTypes.SingleAction,
              targeting: select({
                effects: [
                  move(MoveKind.Stride, 20),
                  choose([
                    {
                      label: 'Attack',
                      effects: [
                        select({
                          range: 1,
                          effects: [
                            test({
                              offense: Pf2e.SpellAttack,
                              defense: Pf2e.ArmorClass,
                              outcomes: { [Pf2eOutcome.Success]: [descriptive('Force damage, per the spell.')] },
                            }),
                          ],
                        }),
                      ],
                    },
                    {
                      label: 'Protect',
                      effects: [descriptive('Until your next turn, the guardian takes up to 10 damage instead of an adjacent ally.')],
                    },
                  ]),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // Creates Spiritual Guardian in a point within 120 feet (sustained).
  //   When it appears, against each creature in Spiritual Guardian:
  //     The guardian has 50 HP. When you cast this spell and each time you Sustain it, move the guardian up to 20 feet and choose Attack or Protect.
  //   **Sustain · Single Action ◆**
  //   **Target:** a creature in it
  //   Stride the target 20 feet.
  //   You choose one:
  //     - **Attack:** Then, against one creature within 1 foot of the target:
  //         **Attack:** Spell Attack vs. Armor Class
  //         **Success:** Force damage, per the spell.
  //     - **Protect:** Until your next turn, the guardian takes up to 10 damage instead of an adjacent ally.
  {
    name: 'Floating Flame (PF2e)',
    rules:
      'A 5-foot flame deals fire damage to creatures in its square (basic Reflex). Sustain: move it up to 10 feet, damaging each creature along its path; a creature can be damaged only once per round.',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: zone({
          name: 'Floating Flame',
          range: 30,
          area: { type: AreaShape.Sphere, radius: 0 },
          duration: Duration.Sustained,
          effects: [
            test({
              offense: Pf2e.SpellDC,
              defense: Pf2e.Reflex,
              defenderRolls: true,
              outcomes: {
                [Pf2eOutcome.CriticalSuccess]: [damage(double(amount({ dice: Rolls.dice(3, 6) })), Fire)],
                [Pf2eOutcome.Success]: [damage(amount({ dice: Rolls.dice(3, 6) }), Fire)],
                [Pf2eOutcome.Failure]: [damage(half(amount({ dice: Rolls.dice(3, 6) })), Fire)],
              },
            }),
          ],
          actions: [
            action({
              name: 'Sustain',
              action: Pf2eActionTypes.SingleAction,
              targeting: select({
                effects: [
                  descriptive(
                    'Move the flame up to 10 feet. Each creature it passes through takes the damage again (basic Reflex), but a creature can be damaged only once per round.'
                  ),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // Creates Floating Flame in a 0 feet burst centered on a point within 30 feet (sustained).
  //   When it appears, against each creature in Floating Flame:
  //     **Reflex save** against your Spell DC
  //     **Success:** Each Of Them takes half of 3d6 Fire damage.
  //     **Failure:** Each Of Them takes 3d6 Fire damage.
  //     **Critical Failure:** Each Of Them takes double 3d6 Fire damage.
  //   **Sustain · Single Action ◆**
  //   **Target:** a creature in it
  //   Move the flame up to 10 feet. Each creature it passes through takes the damage again (basic Reflex), but a creature can be damaged only once per round.
  {
    name: 'Heal (PF2e)',
    rules:
      '1 action: touch a willing living creature to restore 1d8 HP. 2 actions: range 30 feet, restore 1d8 + 8. 3 actions: every creature in a 30-foot emanation. Undead targets instead take that much vitality damage (basic Fortitude).',
    actions: [
      action({
        name: '1 action',
        action: Pf2eActionTypes.SingleAction,
        targeting: select({
          range: 1,
          effects: [
            healing(amount({ dice: Rolls.dice(1, 8) })),
            descriptive('An undead target instead takes that much vitality damage (basic Fortitude save).'),
          ],
        }),
      }),
      action({
        name: '2 actions',
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          range: 30,
          effects: [
            healing(amount({ dice: Rolls.dice(1, 8), bonus: 8 })),
            descriptive('An undead target instead takes that much vitality damage (basic Fortitude save).'),
          ],
        }),
      }),
      action({
        name: '3 actions',
        action: Pf2eActionTypes.ThreeActions,
        targeting: select({
          from: ActionCreature.You,
          area: { type: AreaShape.Sphere, radius: 30 },
          effects: [
            healing(amount({ dice: Rolls.dice(1, 8) })),
            descriptive('An undead target instead takes that much vitality damage (basic Fortitude save).'),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **1 action · Single Action ◆**
  // **Target:** one creature within 1 foot
  // The Target regains 1d8 hit points.
  // An undead target instead takes that much vitality damage (basic Fortitude save).
  //
  // **2 actions · Two Actions ◆◆**
  // **Target:** one creature within 30 feet
  // The Target regains 1d8 + 8 hit points.
  // An undead target instead takes that much vitality damage (basic Fortitude save).
  //
  // **3 actions · Three Actions ◆◆◆**
  // **Target:** each creature in a 30 feet burst around you
  // The Target regains 1d8 hit points.
  // An undead target instead takes that much vitality damage (basic Fortitude save).
  {
    name: 'Blazing Bolt (PF2e)',
    rules:
      'One ray per action spent (1 to 3), each against a different creature, each with its own spell attack roll. The multiple attack penalty increases only after all of the rays. At 2+ actions each ray deals more damage.',
    actions: [1, 2, 3].map((count) =>
      action({
        name: `${count} action${count === 1 ? '' : 's'}`,
        action: [Pf2eActionTypes.SingleAction, Pf2eActionTypes.TwoActions, Pf2eActionTypes.ThreeActions][count - 1]!,
        targeting: select({
          range: 60,
          count,
          effects: [
            test({
              offense: Pf2e.SpellAttack,
              defense: Pf2e.ArmorClass,
              outcomes: {
                [Pf2eOutcome.CriticalSuccess]: [damage(double(amount({ dice: Rolls.dice(count === 1 ? 2 : 4, 6) })), Fire)],
                [Pf2eOutcome.Success]: [damage(amount({ dice: Rolls.dice(count === 1 ? 2 : 4, 6) }), Fire)],
              },
            }),
          ],
        }),
      })
    ),
  },
  // Rendered:
  // **1 action · Single Action ◆**
  // **Target:** one creature within 60 feet
  // **Attack:** Spell Attack vs. Armor Class
  // **Critical Success:** The Target takes double 2d6 Fire damage.
  // **Success:** The Target takes 2d6 Fire damage.
  //
  // **2 actions · Two Actions ◆◆**
  // **Target:** up to 2 creatures within 60 feet
  // **Attack:** Spell Attack vs. Armor Class
  // **Critical Success:** The Target takes double 4d6 Fire damage.
  // **Success:** The Target takes 4d6 Fire damage.
  //
  // **3 actions · Three Actions ◆◆◆**
  // **Target:** up to 3 creatures within 60 feet
  // **Attack:** Spell Attack vs. Armor Class
  // **Critical Success:** The Target takes double 4d6 Fire damage.
  // **Success:** The Target takes 4d6 Fire damage.
  {
    name: 'Swipe (PF2e)',
    rules:
      'One Strike against two adjacent foes, both within reach. Roll once and compare the result to each AC; roll damage once. Counts as two attacks for your multiple attack penalty.',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          count: 2,
          targets: [ActionRelation.Enemy],
          effects: [descriptive("Roll once and compare the result to each target's AC."), useBasic({ tags: [Weapon, MeleeAttack] })],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // **Target:** one creature within reach
  // Roll once and compare the result to each target's AC.
  // You make a Weapon Melee action against the target.
  {
    name: 'Double Slice (PF2e)',
    rules:
      'Make two Strikes, one with each weapon, both at your current multiple attack penalty. If both hit the same target, add the damage together before applying resistances and weaknesses.',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        requirement: 'You are wielding two melee weapons, each in a different hand.',
        targeting: [
          select({ effects: [useBasic({ tags: [Weapon, MeleeAttack] })] }),
          select({
            effects: [
              useBasic({ tags: [Weapon, MeleeAttack] }),
              descriptive(
                'Use your other weapon. If both Strikes hit the same target, combine their damage before applying resistances and weaknesses.'
              ),
            ],
          }),
        ],
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆** · Requirement: You are wielding two melee weapons, each in a different hand.
  // **Target:** one creature within reach
  // You make a Weapon Melee action against the target.
  // **Target:** one creature within reach
  // You make a Weapon Melee action against the target.
  // Use your other weapon. If both Strikes hit the same target, combine their damage before applying resistances and weaknesses.
  {
    name: 'Counterspell (PF2e)',
    rules: 'Reaction. Trigger: a creature casts a spell you have prepared. Expend your prepared copy and attempt to counteract the triggering spell.',
    actions: [
      action({
        action: Pf2eActionTypes.Reaction,
        trigger: { event: TriggerEvent.Casts, subject: { range: 120 }, source: { tags: [Spell] } },
        requirement: 'Expend your prepared copy of the triggering spell.',
        targeting: select({
          from: ActionCreature.You,
          effects: [descriptive('Attempt to counteract the triggering spell. If you succeed, it has no effect.'), cancel()],
        }),
      }),
    ],
  },
  // Rendered:
  // **Reaction ⟲** · Requirement: Expend your prepared copy of the triggering spell.
  // **Trigger:** a creature within 120 feet casts a Spell action
  // **Target:** you
  // Attempt to counteract the triggering spell. If you succeed, it has no effect.
  // The triggering action has no effect.
  {
    name: 'Recognize Spell (PF2e)',
    rules:
      "Reaction. The GM rolls your check in secret. Critical success / success: you identify the spell. Critical failure: you misidentify it as another spell. Trained in the tradition: low-rank spells can't do worse than success.",
    actions: [
      action({
        action: Pf2eActionTypes.Reaction,
        trigger: { event: TriggerEvent.Casts, subject: { range: 120 }, source: { tags: [Spell] } },
        targeting: select({
          from: ActionCreature.You,
          effects: [
            descriptive('The GM rolls this check in secret.'),
            test({
              offense: Pf2e.Arcana,
              defense: Pf2e.SpellDC,
              outcomes: {
                [Pf2eOutcome.CriticalSuccess]: [descriptive('You identify the spell and gain a +1 bonus to your save or AC against it.')],
                [Pf2eOutcome.Success]: [descriptive('You identify the spell.')],
                [Pf2eOutcome.CriticalFailure]: [descriptive('You misidentify the spell as another spell entirely, of the GM’s choice.')],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Reaction ⟲**
  // **Trigger:** a creature within 120 feet casts a Spell action
  // **Target:** you
  // The GM rolls this check in secret.
  // **Attack:** Arcana vs. Spell DC
  // **Critical Success:** You identify the spell and gain a +1 bonus to your save or AC against it.
  // **Success:** You identify the spell.
  // **Critical Failure:** You misidentify the spell as another spell entirely, of the GM’s choice.
  {
    name: 'Lingering Composition (PF2e)',
    rules:
      "Make a Performance check. The result sets how long your next composition cantrip lasts (4 rounds on a critical success, 3 on a success). On a failure, the composition lasts 1 round and you don't spend the Focus Point.",
    actions: [
      action({
        action: Pf2eActionTypes.FreeAction,
        requirement: 'Spend 1 Focus Point.',
        targeting: select({
          from: ActionCreature.You,
          effects: [
            test({
              offense: Pf2e.Performance,
              defense: Pf2e.Will,
              outcomes: {
                [Pf2eOutcome.CriticalSuccess]: [descriptive('Your next composition cantrip lasts 4 rounds.')],
                [Pf2eOutcome.Success]: [descriptive('Your next composition cantrip lasts 3 rounds.')],
                [Pf2eOutcome.Failure]: [descriptive('Your next composition cantrip lasts 1 round.'), refund()],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Free Action ◇** · Requirement: Spend 1 Focus Point.
  // **Target:** you
  // **Attack:** Performance vs. Will
  // **Critical Success:** Your next composition cantrip lasts 4 rounds.
  // **Success:** Your next composition cantrip lasts 3 rounds.
  // **Failure:** Your next composition cantrip lasts 1 round.
  //   This use is not expended.
  {
    name: 'Command (PF2e)',
    rules:
      'Will save. Failure: the target spends its first action on its next turn obeying your command. Critical failure: it spends all its actions obeying.',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          range: 30,
          effects: [
            test({
              offense: Pf2e.SpellDC,
              defense: Pf2e.Will,
              defenderRolls: true,
              outcomes: {
                [Pf2eOutcome.Success]: [descriptive('The target spends its first action on its next turn obeying your command.')],
                [Pf2eOutcome.CriticalSuccess]: [descriptive('The target spends all its actions on its next turn obeying your command.')],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // **Target:** one creature within 30 feet
  // **Will save** against your Spell DC
  // **Failure:** The target spends its first action on its next turn obeying your command.
  // **Critical Failure:** The target spends all its actions on its next turn obeying your command.
  {
    name: 'Grease (PF2e)',
    rules:
      "Choose a mode. Area: a 4-square area becomes slippery; creatures entering or starting there must succeed at a Reflex save or Acrobatics check or fall prone. Object: an unattended object becomes slippery, or a held object's wielder must save or drop it.",
    actions: [
      action({
        name: 'Area',
        action: Pf2eActionTypes.TwoActions,
        targeting: zone({
          name: 'Grease',
          range: 30,
          area: { type: AreaShape.Sphere, radius: 5 },
          duration: { rounds: 10 },
          triggers: [
            trigger({
              event: TriggerEvent.EachRound,
              targeting: select({
                from: ActionCreature.Bearer,
                effects: [
                  descriptive('The creature can use Acrobatics instead of its Reflex save.'),
                  test({
                    offense: Pf2e.SpellDC,
                    defenderRolls: true,
                    defense: Pf2e.Reflex,
                    outcomes: { [Pf2eOutcome.Success]: [condition(Prone)] },
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      action({
        name: 'Object',
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          range: 30,
          effects: [
            descriptive(
              "Target one object of 1 Bulk or less. If it's unattended, it becomes slippery. If it's held, its wielder must succeed at a Reflex save or drop it."
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Area · Two Actions ◆◆**
  // Creates Grease in a 5 feet burst centered on a point within 30 feet for 10 rounds.
  //   **Trigger:** each round
  //   **Target:** each creature in Grease
  //   The creature can use Acrobatics instead of its Reflex save.
  //   **Reflex save** against your Spell DC
  //   **Failure:** Each Creature In Grease is Prone.
  //
  // **Object · Two Actions ◆◆**
  // **Target:** one creature within 30 feet
  // Target one object of 1 Bulk or less. If it's unattended, it becomes slippery. If it's held, its wielder must succeed at a Reflex save or drop it.
  {
    name: 'Banishment (PF2e)',
    rules:
      'Will save. Failure: the target is banished. You can spend an extra action and a material cost to give the target a −2 penalty to its save. Critical success: the target is unaffected and you are stunned 1.',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          range: 30,
          effects: [
            test({
              offense: Pf2e.SpellDC,
              defense: Pf2e.Will,
              defenderRolls: true,
              outcomes: {
                [Pf2eOutcome.CriticalFailure]: [select({ from: ActionCreature.You, effects: [condition(Stunned, { duration: { rounds: 1 } })] })],
                [Pf2eOutcome.Success]: [descriptive('The target is banished to its home plane.')],
                [Pf2eOutcome.CriticalSuccess]: [descriptive("The target is banished and can't return by any means for 1 week.")],
              },
            }),
          ],
        }),
      }),
      action({
        name: 'With material',
        action: Pf2eActionTypes.ThreeActions,
        requirement: 'A material component tied to the target.',
        targeting: select({
          range: 30,
          effects: [
            descriptive('The target takes a −2 status penalty to its save.'),
            test({
              offense: Pf2e.SpellDC,
              defense: Pf2e.Will,
              defenderRolls: true,
              outcomes: {
                [Pf2eOutcome.CriticalFailure]: [select({ from: ActionCreature.You, effects: [condition(Stunned, { duration: { rounds: 1 } })] })],
                [Pf2eOutcome.Success]: [descriptive('The target is banished to its home plane.')],
                [Pf2eOutcome.CriticalSuccess]: [descriptive("The target is banished and can't return by any means for 1 week.")],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // **Target:** one creature within 30 feet
  // **Will save** against your Spell DC
  // **Critical Success:** Then, against you:
  //     Each Of Them is Stunned for 1 round.
  // **Failure:** The target is banished to its home plane.
  // **Critical Failure:** The target is banished and can't return by any means for 1 week.
  //
  // **With material · Three Actions ◆◆◆** · Requirement: A material component tied to the target.
  // **Target:** one creature within 30 feet
  // The target takes a −2 status penalty to its save.
  // **Will save** against your Spell DC
  // **Critical Success:** Then, against you:
  //     Each Of Them is Stunned for 1 round.
  // **Failure:** The target is banished to its home plane.
  // **Critical Failure:** The target is banished and can't return by any means for 1 week.
  {
    name: 'Battle Medicine (PF2e)',
    rules: 'Make a Medicine check to restore HP to an adjacent creature. The target is then immune to your Battle Medicine for 1 day.',
    actions: [
      action({
        action: Pf2eActionTypes.SingleAction,
        targeting: select({
          range: 1,
          targets: [ActionRelation.Origin, ActionRelation.Ally],
          effects: [
            test({
              offense: Pf2e.Medicine,
              defense: Pf2e.ClassDC,
              outcomes: {
                [Pf2eOutcome.CriticalSuccess]: [healing(amount({ dice: Rolls.dice(4, 8), bonus: 10 }))],
                [Pf2eOutcome.Success]: [healing(amount({ dice: Rolls.dice(2, 8) }))],
                [Pf2eOutcome.CriticalFailure]: [damage(amount({ dice: Rolls.dice(1, 8) }))],
              },
            }),
            descriptive('The target is immune to your Battle Medicine for 1 day.'),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Single Action ◆**
  // **Target:** one you or an ally within 1 foot
  // **Attack:** Medicine vs. Class DC
  // **Critical Success:** The Target regains 4d8 + 10 hit points.
  // **Success:** The Target regains 2d8 hit points.
  // **Critical Failure:** The Target takes 1d8 damage.
  // The target is immune to your Battle Medicine for 1 day.
  {
    name: 'Blood Vendetta (PF2e)',
    rules:
      'Reaction. Trigger: a creature deals piercing, slashing or persistent bleed damage to you. The triggering creature takes persistent bleed damage (basic Will: half on a success, doubled on a critical failure). Failure also gives it weakness to piercing, slashing, and bludgeoning until the bleed ends.',
    actions: [
      action({
        action: Pf2eActionTypes.Reaction,
        trigger: { event: TriggerEvent.Damaged },
        requirement: 'Spend 1 Focus Point.',
        targeting: select({
          from: ActionCreature.Object,
          effects: [
            test({
              offense: Pf2e.SpellDC,
              defense: Pf2e.Will,
              defenderRolls: true,
              outcomes: {
                [Pf2eOutcome.CriticalSuccess]: [
                  condition('Persistent Bleed', { damage: { amount: double(amount({ dice: Rolls.dice(2, 6) })), type: Bleed } }),
                ],
                [Pf2eOutcome.Success]: [
                  condition('Persistent Bleed', {
                    damage: { amount: amount({ dice: Rolls.dice(2, 6) }), type: Bleed },
                    effects: [
                      CharacterEffects.descriptive('The creature has weakness 1 to piercing, slashing and bludgeoning damage until the bleed ends.'),
                    ],
                  }),
                ],
                [Pf2eOutcome.Failure]: [condition('Persistent Bleed', { damage: { amount: half(amount({ dice: Rolls.dice(2, 6) })), type: Bleed } })],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Reaction ⟲** · Requirement: Spend 1 Focus Point.
  // **Trigger:** you takes damage
  // **Target:** the creature it targeted
  // **Will save** against your Spell DC
  // **Success:** The Creature It Targeted is Persistent Bleed (half of 2d6 Bleed).
  // **Failure:** The Creature It Targeted is Persistent Bleed (2d6 Bleed).
  //     The creature has weakness 1 to piercing, slashing and bludgeoning damage until the bleed ends.
  // **Critical Failure:** The Creature It Targeted is Persistent Bleed (double 2d6 Bleed).
  {
    name: 'Spirit Link (PF2e)',
    rules:
      'When you cast it and at the start of each of your turns, you lose up to 2 HP and the target regains the same amount. This ignores modifiers and temporary HP.',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          range: 30,
          targets: [ActionRelation.Ally],
          effects: [
            descriptive('You lose up to 2 Hit Points and the target regains that many. This ignores modifiers and temporary Hit Points.'),
            condition('Spirit Link', {
              duration: { rounds: 100 },
              triggers: [
                trigger({
                  event: TriggerEvent.StartOfTurn,
                  subject: ActionCreature.You,
                  targeting: select({ effects: [descriptive('You lose up to 2 Hit Points and the target regains that many.')] }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // **Target:** an ally within 30 feet
  // You lose up to 2 Hit Points and the target regains that many. This ignores modifiers and temporary Hit Points.
  // The Target is Spirit Link for 100 rounds.
  //   **Trigger:** you starts its turn
  //   **Target:** the affected creature
  //   You lose up to 2 Hit Points and the target regains that many.
  {
    name: 'Untamed Shift (PF2e)',
    rules:
      'Choose one transformation from the options your feats grant; some options require the 2-action cast. Heightened, you can choose more at once (2 at 6th rank, 3 at 10th).',
    actions: [
      action({
        action: Pf2eActionTypes.SingleAction,
        targeting: select({
          from: ActionCreature.You,
          effects: [
            descriptive(
              'Choose one transformation granted by your untamed order feats. Heightened (6th): choose two. Heightened (10th): choose three.'
            ),
          ],
        }),
      }),
      action({
        name: '2 actions',
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          from: ActionCreature.You,
          effects: [descriptive('As the 1-action version, and you can also choose transformations that require the 2-action cast.')],
        }),
      }),
    ],
  },
  // Rendered:
  // **Single Action ◆**
  // **Target:** you
  // Choose one transformation granted by your untamed order feats. Heightened (6th): choose two. Heightened (10th): choose three.
  //
  // **2 actions · Two Actions ◆◆**
  // **Target:** you
  // As the 1-action version, and you can also choose transformations that require the 2-action cast.
  {
    name: 'Summon Animal (PF2e)',
    rules: 'Summon an animal whose level is set by a table by spell rank (level −1 at rank 1, level 1 at rank 2, ...). Sustained up to 1 minute.',
    actions: [
      action({
        action: Pf2eActionTypes.ThreeActions,
        targeting: zone({
          name: 'Summoned Animal',
          range: 30,
          duration: Duration.Sustained,
          effects: [
            descriptive(
              'You summon a creature with the animal trait of level −1 (rank 1), 1 (rank 2), 2 (rank 3), 3 (rank 4) or 5 (rank 5). It lasts up to 1 minute.'
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Three Actions ◆◆◆**
  // Creates Summoned Animal in a point within 30 feet (sustained).
  //   When it appears, against each creature in Summoned Animal:
  //     You summon a creature with the animal trait of level −1 (rank 1), 1 (rank 2), 2 (rank 3), 3 (rank 4) or 5 (rank 5). It lasts up to 1 minute.
]
