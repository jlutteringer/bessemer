import { Area, AreaShape } from '@simulacrum/ruleset/targeting'
import { AbilityFilterProps } from '@simulacrum/ruleset/ability'
import { Strings } from '@bessemer/cornerstone'
import { Expression } from '@bessemer/cornerstone/expression'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { AbilityEffect, CharacterEffectTypeEnum } from '@simulacrum/ruleset/character-effect'
import {
  Action,
  ActionRole,
  ActionEffect,
  ActionEffectType,
  ActionKind,
  ActionOutcome,
  ActionOutcomes,
  ActionChoice,
  ActionOverrides,
  ActionRelation,
  ActionSelection,
  ActionTrigger,
  ActionZone,
  AnyNumber,
  BasicAction,
  Duration,
  Lasts,
  ModifyTarget,
  Resolution,
  TriggeredAction,
  TriggerEvent,
  TriggerParty,
} from './action-model'
import { Examples } from './examples'

const toPlainText = (node: RichTextJson): string => {
  if (node.text != null) {
    return node.text
  }

  return (node.content ?? [])
    .map((it) => (it.type === 'text' ? toPlainText(it) : `${toPlainText(it)} `))
    .join('')
    .trim()
}

const referenceName = (reference: string): string => titleCase(reference.split(/[:/]/).pop() ?? reference)

const describePassive = (effect: AbilityEffect): string => {
  if (effect.type === CharacterEffectTypeEnum.Descriptive) {
    return toPlainText(effect.description)
  }

  const patch = record(effect.modifier.patch)
  const value = formatExpression(patch['value'] as Expression<unknown>)
  const reducer = record(patch['reducer'] ?? {})['expressionKey']
  const name = referenceName(effect.characteristic)
  if (patch['type'] === 'Set') {
    return `${name} becomes ${value}`
  }

  return reducer === 'Numeric.Sum' ? `+${value} ${name}` : reducer === 'Numeric.Multiply' ? `${name} ×${value}` : `${name} modified by ${value}`
}

type Vocabulary = {
  rangeUnit: [string, string]
  additionalOutcomes: Array<{ outcome: ActionOutcome; label: string; opposite: ActionOutcome }>
}

const KhydrianDrift: Vocabulary = {
  rangeUnit: ['square', 'squares'],
  additionalOutcomes: [],
}

const Dnd4e: Vocabulary = {
  rangeUnit: ['square', 'squares'],
  additionalOutcomes: [],
}

const Pf2e: Vocabulary = {
  rangeUnit: ['foot', 'feet'],
  additionalOutcomes: [
    { outcome: 'criticalSuccess', label: 'Critical Success', opposite: 'criticalFailure' },
    { outcome: 'criticalFailure', label: 'Critical Failure', opposite: 'criticalSuccess' },
  ],
}

type Context = {
  vocabulary: Vocabulary
  current: string
  condition?: string
  bearer?: string
  bearerIsPlace?: boolean
  currentIsPlace?: boolean
}

const named = (entity: { name: string } | string): string => (Strings.isString(entity) ? entity : entity.name)

const describeAttack = (
  { offense, defense, attackBonus }: { offense?: { name: string }; defense?: { name: string }; attackBonus?: Expression<number> },
  context: Context
): string => {
  const bonus = attackBonus == null ? '' : `, with a bonus to the attack roll equal to ${formatExpression(attackBonus)}`
  return `**Attack:** ${offense ? named(offense) : 'its usual attack'} vs. ${defense ? named(defense) : 'its usual defense'}${bonus}`
}

const titleCase = (value: string): string =>
  value.replace(/(^|[\s-])(\w)/g, (_, space: string, letter: string) => `${space === '-' ? ' ' : space}${letter.toUpperCase()}`)

const record = (value: unknown): Record<string, unknown> => value as Record<string, unknown>

const formatExpression = (expression: Expression<unknown>, context?: Context): string => {
  if (typeof expression === 'number') {
    return `${expression}`
  }

  const it = record(expression)
  switch (it['expressionKey']) {
    case 'Variable': {
      const name = String(it['name'])
      return name === 'potency' ? 'P' : titleCase(name.split(/[:/]/).pop() ?? name)
    }
    case 'Roll.Dice':
      return `${formatExpression(it['count'] as Expression<number>, context)}d${it['sides']}`
    case 'Roll.Sum':
    case 'Numeric.Sum':
      return (it['operands'] as Array<Expression<unknown>>).map((operand) => formatExpression(operand, context)).join(' + ')
    case 'Numeric.Multiply': {
      const operands = it['operands'] as Array<Expression<unknown>>
      return operands.includes(-1)
        ? `−${formatExpression(operands.find((operand) => operand !== -1)!)}`
        : operands.map((operand) => formatExpression(operand, context)).join(' × ')
    }
    case 'Roll.Multiply': {
      const factor = it['factor']
      const inner = formatExpression(it['roll'] as Expression<unknown>, context)
      return factor === 0.5
        ? `half of ${inner}`
        : factor === 2
        ? `double ${inner}`
        : `${inner} × ${formatExpression(factor as Expression<number>, context)}`
    }
    case 'Roll.Amount': {
      const multiplier = it['potencyMultiplier'] as Expression<number> | undefined
      const parts = [
        it['dice'] == null ? null : formatExpression(it['dice'] as Expression<unknown>, context),
        multiplier == null || multiplier === 0 ? null : multiplier === 1 ? 'P' : `${formatExpression(multiplier, context)}P`,
        it['bonus'] == null ? null : formatExpression(it['bonus'] as Expression<unknown>, context),
      ].filter((part) => part !== null)
      return parts.join(' + ')
    }
    case 'Roll.Total':
      return `the total of ${formatExpression(it['rolls'] as Expression<unknown>, context)}`
    case 'Array.Map':
      return `${formatExpression(record(it['mapper'])['body'] as Expression<unknown>, context)} of ${formatExpression(
        it['list'] as Expression<unknown>,
        context
      )}`
    case 'Array.Filter':
      return `${formatExpression(it['list'] as Expression<unknown>, context)} that are ${formatExpression(
        record(it['predicate'])['body'] as Expression<unknown>,
        context
      )}`
    case 'Creature.Conditions':
      return `the conditions on ${creatureName(it['creature'] as ActionRole, context)}`
    case 'Condition.Is':
      return titleCase(String(it['condition']).split(/[:/]/).pop() ?? '')
    case 'Creature.OngoingDamage':
      return `the total ongoing damage of ${
        it['creature'] === ActionRole.Target ? context?.current ?? 'the target' : creatureName(it['creature'] as ActionRole, context)
      }'s ${titleCase(String(it['condition']).split(/[:/]/).pop() ?? '')} conditions`
    case 'Condition.Damage':
      return 'the damage'
    case 'Array.Length':
      return `the number of ${formatExpression(it['list'] as Expression<unknown>, context)}`
    case 'Creature.Within':
      return `creatures within ${formatExpression(it['range'] as Expression<unknown>, context)} of ${creatureName(
        it['creature'] as ActionRole,
        context
      )}`
    case 'Creature.HasTag':
      return `${
        it['creature'] === ActionRole.Target ? context?.current ?? 'the target' : creatureName(it['creature'] as ActionRole, context)
      } is ${titleCase(String(it['tag']).split(/[:/]/).pop() ?? '')}`
    case 'Creature.IsRelation':
      return `${String(it['relation']).toLowerCase()}`
    default:
      return `[${String(it['expressionKey'])}]`
  }
}

const formatDistance = (range: Expression<number>, context: Context): string => {
  const [singular, plural] = context.vocabulary.rangeUnit
  return `${formatExpression(range)} ${range === 1 ? singular : plural}`
}

const formatSize = (size: Expression<number>, context: Context): string => `${formatExpression(size)}-${context.vocabulary.rangeUnit[0]}`

const formatArea = (area: Area, context: Context): string => {
  switch (area.type) {
    case AreaShape.Sphere:
      return `${formatSize(area.radius, context)} burst`
    case AreaShape.Cone:
      return `${formatSize(area.length, context)} cone`
    case AreaShape.Cube:
      return `${formatSize(area.size, context)} cube`
    default:
      return area.type
  }
}

const creatureName = (creature: ActionRole, context?: Context): string => {
  switch (creature) {
    case ActionRole.You:
      return 'you'
    case ActionRole.Target:
      return 'the target'
    case ActionRole.Subject:
      return 'the triggering creature'
    case ActionRole.Object:
      return 'the creature it targeted'
    case ActionRole.Bearer:
      return context?.bearer ?? 'the affected creature'
  }
}

const relationNoun = (relations: Array<ActionRelation> | undefined, plural: boolean, origin: string): string => {
  const targets = relations == null || relations.length === 3 ? undefined : relations
  const has = (relation: ActionRelation) => targets == null || targets.includes(relation)
  const others =
    has(ActionRelation.Ally) && has(ActionRelation.Enemy)
      ? plural
        ? 'other creatures'
        : 'other creature'
      : has(ActionRelation.Ally)
      ? plural
        ? 'allies'
        : 'ally'
      : plural
      ? 'enemies'
      : 'enemy'
  if (targets == null) {
    return plural ? 'creatures' : 'creature'
  }

  if (!has(ActionRelation.Ally) && !has(ActionRelation.Enemy)) {
    return origin === 'you' ? 'yourself' : origin
  }

  return has(ActionRelation.Origin) ? `${origin === 'you' ? 'you' : origin} or ${plural ? '' : 'an '}${others}` : others
}

const describeArea = (selection: ActionZone, context: Context): string => {
  const origin = selection.from == null ? context.current : creatureName(selection.from, context)
  const measuredFrom = origin === 'you' ? '' : ` of ${origin}`
  const within = selection.range == null ? '' : ` within ${formatDistance(selection.range, context)}${measuredFrom}`
  if (selection.area == null) {
    return `a point${within}`
  }

  const size = formatArea(selection.area, context)
  return `a ${size} centered on a point${within}`
}

type LastingEffect = Extract<ActionEffect, { type: ActionEffectType.Condition }>

const describeZone = (zone: ActionZone, context: Context, depth: number): Array<string> => {
  const name = zone.name ?? 'the zone'
  const inner: Context = { ...context, current: 'a creature in it', condition: name, bearer: name, bearerIsPlace: true, currentIsPlace: false }
  const isLasting = (it: ActionEffect): it is LastingEffect => it.type === ActionEffectType.Condition && it.duration === null
  const lasting = zone.ongoingEffects.filter(isLasting)
  const recurring = zone.ongoingEffects.filter((it) => !isLasting(it))
  return [
    `${indent(depth)}Creates ${name} in ${describeArea(zone, context)}${describeDuration(zone.duration)}.`,
    ...describeZoneEffects(zone.immediateEffects, `When it appears, against each creature in ${name}:`, name, context, depth),
    ...(lasting.length === 0 ? [] : [`${indent(depth + 1)}Creatures in ${name} are ${lasting.map((it) => named(it.condition)).join(' and ')}.`]),
    ...describeZoneEffects(recurring, `Ongoing, against each creature in ${name}:`, name, context, depth),
    ...describeZoneEffects(zone.endEffects, `When it ends, against each creature in ${name}:`, name, context, depth),
    ...zone.actions.flatMap((it) => describeAction(it, inner, depth + 1)),
  ]
}

const describeZoneEffects = (effects: Array<ActionEffect>, header: string, name: string, context: Context, depth: number): Array<string> => [
  ...(effects.some((it) => it.type !== ActionEffectType.Select) ? [`${indent(depth + 1)}${header}`] : []),
  ...effects.flatMap((it) =>
    it.type === ActionEffectType.Select
      ? describeEffect(it, { ...context, current: name, currentIsPlace: true }, depth + 1)
      : describeEffect(it, { ...context, current: 'each of them', currentIsPlace: false }, depth + 2)
  ),
]

const describeSelection = (selection: ActionSelection, context: Context): string => {
  const origin = selection.from == null ? context.current : creatureName(selection.from, context)
  const tags = selection.filter.length === 0 ? '' : ` that is ${selection.filter.map(named).join(' and ')}`

  if (selection.range == null && selection.area == null) {
    if (selection.from === ActionRole.Bearer && context.bearerIsPlace) {
      return `each creature in ${context.bearer}`
    }

    if (selection.from == null && context.currentIsPlace) {
      return `each creature in ${context.current}`
    }

    if (selection.from != null) {
      return `${creatureName(selection.from, context)}${
        selection.filter.length === 0 ? '' : `, if it is ${selection.filter.map(named).join(' and ')}`
      }`
    }

    return selection.effects?.some((it) => it.type === ActionEffectType.UseAction) ? `one creature within reach${tags}` : context.current
  }

  const measuredFrom = origin === 'you' ? '' : ` of ${origin}`
  if (selection.area != null) {
    const size = formatArea(selection.area, context)
    const placed =
      selection.range == null
        ? origin === 'you'
          ? ' around you'
          : ` around ${origin}`
        : ` within ${formatDistance(selection.range, context)}${measuredFrom}`
    if (selection.count == null) {
      return `each ${relationNoun(selection.targets, false, origin)}${tags} in a ${size}${placed}`
    }

    const chosen = selection.count === AnyNumber ? 'any number of' : `up to ${formatExpression(selection.count)}`
    return `${chosen} ${relationNoun(selection.targets, true, origin)}${tags} of your choice in a ${size}${placed}`
  }

  const count = selection.count ?? 1
  const quantity =
    count === AnyNumber
      ? 'any number of'
      : count === 1
      ? selection.targets?.length === 1 && selection.targets[0] === ActionRelation.Ally
        ? 'an'
        : 'one'
      : `up to ${formatExpression(count)}`
  const distinct = selection.distinct ? ' different' : ''
  const repeats = selection.repeats ? ' (the same creature can be chosen more than once)' : ''
  return `${quantity}${distinct} ${relationNoun(selection.targets, count !== 1, origin)}${tags} within ${formatDistance(
    selection.range!,
    context
  )}${measuredFrom}${repeats}`
}

const describeFilter = (filter: AbilityFilterProps): string => {
  if (filter.specificOptions != null) {
    return `a ${filter.specificOptions.map(named).join(' or ')}`
  }

  const tags = (filter.tags ?? []).map((group) => (Array.isArray(group) ? group.map(named).join(' or ') : named(group)))
  return `a ${tags.join(' ')} action`
}

const describeDuration = (duration: Lasts | null): string => {
  if (duration == null) {
    return ''
  }

  switch (duration) {
    case Duration.SaveEnds:
      return ' (save ends)'
    case Duration.Encounter:
      return ' until the end of the encounter'
    case Duration.Sustained:
      return ' (sustained)'
    default:
      return ` for ${formatExpression(duration.rounds)} ${duration.rounds === 1 ? 'round' : 'rounds'}`
  }
}

const describeOverrideDamage = ({ dice, potency, factor }: ActionOverrides, context: Context): string | null => {
  const scaled = factor == null ? '' : factor === 0.5 ? 'half of ' : `${formatExpression(factor)}× `
  if (dice == null && potency == null) {
    return factor == null ? null : `${titleCase(context.current)} takes ${scaled}its usual damage.`
  }

  const rolled = dice == null ? 'ability damage dice' : `${formatExpression(dice)}× ability damage dice`
  return `${titleCase(context.current)} takes ${scaled}${rolled} + ${potency ? named(potency) : 'its usual modifier'} damage.`
}

const BaseOutcomes: Vocabulary['additionalOutcomes'] = [
  { outcome: 'success', label: 'Success', opposite: 'failure' },
  { outcome: 'failure', label: 'Failure', opposite: 'success' },
]

const withHit = (lines: Array<string>, hit: string | null, depth: number): Array<string> => {
  if (hit === null) {
    return lines
  }

  const label = `**${BaseOutcomes[0]!.label}:**`
  const extra = lines.find((it) => it.trimStart().startsWith(label))
  return [
    `${indent(depth)}${label} ${hit}${extra === undefined ? '' : ` ${extra.trim().replace(`${label} `, '')}`}`,
    ...lines.filter((it) => it !== extra),
  ]
}

const describeOutcomes = ({ outcomes }: ActionOutcomes, context: Context, depth: number, save = false): Array<string> => {
  return [...BaseOutcomes, ...context.vocabulary.additionalOutcomes].flatMap(({ outcome, label, opposite }) => {
    const effects = outcomes[save ? opposite : outcome] ?? []
    return effects.length === 0 ? [] : [`${indent(depth)}**${label}:** ${inline(effects, context, depth)}`]
  })
}

const indent = (depth: number): string => '  '.repeat(depth)

const inline = (effects: Array<ActionEffect>, context: Context, depth: number): string => {
  const lines = effects.flatMap((effect) => describeEffect(effect, context, depth + 1))
  const [first = '', ...rest] = lines
  return [first.trim(), ...rest].join('\n')
}

const describeEffect = (effect: ActionEffect, context: Context, depth: number): Array<string> => {
  const line = (text: string) => [`${indent(depth)}${text}`]
  switch (effect.type) {
    case ActionEffectType.Test:
      return effect.defenderRolls
        ? [
            `${indent(depth)}**${named(effect.defense)} save** against your ${named(effect.offense)}`,
            ...describeOutcomes(effect, context, depth, true),
          ]
        : [`${indent(depth)}${describeAttack(effect, context)}`, ...describeOutcomes(effect, context, depth)]
    case ActionEffectType.UseAction: {
      const actor = effect.by == null ? 'You make' : `${titleCase(creatureName(effect.by, context))} makes`
      const against = effect.by === ActionRole.Target ? '' : ` against ${context.current}`
      const { offense, defense, attackBonus, range } = effect.overrides
      const outcomeContext = effect.by === ActionRole.Target ? { ...context, current: 'the creature it attacks' } : context
      return [
        `${indent(depth)}${actor} ${describeFilter(effect.filter)}${against}${
          range == null ? '' : `, with a range of ${formatDistance(range, context)}`
        }.`,
        ...(offense != null || defense != null || attackBonus != null ? [`${indent(depth)}${describeAttack(effect.overrides, context)}`] : []),
        ...withHit(describeOutcomes(effect, outcomeContext, depth), describeOverrideDamage(effect.overrides, outcomeContext), depth),
      ]
    }
    case ActionEffectType.Select: {
      const single =
        effect.from != null &&
        effect.from !== ActionRole.You &&
        effect.range == null &&
        effect.area == null &&
        !(effect.from === ActionRole.Bearer && context.bearerIsPlace)
      const current = single ? creatureName(effect.from!, context) : 'each of them'
      return [
        `${indent(depth)}Then, against ${describeSelection(effect, context)}:`,
        ...(effect.effects ?? []).flatMap((it) => describeEffect(it, { ...context, current, currentIsPlace: false }, depth + 1)),
      ]
    }
    case ActionEffectType.Zone:
      return describeZone(effect, context, depth)
    case ActionEffectType.Damage: {
      const type = effect.damageType ? `${named(effect.damageType)} ` : ''
      const computed = String(record(effect.amount)['expressionKey'] ?? '').startsWith('Creature.')
      return line(
        computed
          ? `${titleCase(context.current)} takes ${type}damage equal to ${formatExpression(effect.amount, context)}.`
          : `${titleCase(context.current)} takes ${formatExpression(effect.amount)} ${type}damage.`
      )
    }
    case ActionEffectType.Healing:
      return line(
        effect.temporary
          ? `${titleCase(context.current)} gains ${formatExpression(effect.amount)} temporary hit points.`
          : `${titleCase(context.current)} regains ${formatExpression(effect.amount)} hit points.`
      )
    case ActionEffectType.Move:
      return line(`${titleCase(effect.kind)} ${context.current} ${formatDistance(effect.distance, context)}${effect.towardYou ? ' toward you' : ''}.`)
    case ActionEffectType.Condition: {
      const name = named(effect.condition)
      const passive = effect.effects.map((it) => `${indent(depth + 1)}${describePassive(it)}`)
      const inner: Context = {
        ...context,
        current: 'the affected creature',
        condition: name,
        bearer: 'the affected creature',
        bearerIsPlace: false,
        currentIsPlace: false,
      }
      const ongoing =
        effect.ongoingEffects.length === 0
          ? []
          : [`${indent(depth + 1)}Ongoing:`, ...effect.ongoingEffects.flatMap((it) => describeEffect(it, inner, depth + 2))]
      const ending =
        effect.endEffects.length === 0
          ? []
          : [`${indent(depth + 1)}When it ends:`, ...effect.endEffects.flatMap((it) => describeEffect(it, inner, depth + 2))]
      const actions = effect.actions.flatMap((it) => describeAction(it, inner, depth + 1))
      const triggers = effect.triggers.flatMap((it) => describeTriggered(it, inner, depth + 1))
      return [
        `${indent(depth)}${titleCase(context.current)} is ${Strings.isString(effect.condition) ? `affected by ${name}` : name}${describeDuration(
          effect.duration
        )}.`,
        ...passive,
        ...ongoing,
        ...ending,
        ...triggers,
        ...actions,
      ]
    }
    case ActionEffectType.Choose:
      return describeChoice(effect, context, depth, (effects, at) => effects.flatMap((it) => describeEffect(it, context, at)))
    case ActionEffectType.When:
      return [
        `${indent(depth)}If ${formatExpression(effect.predicate, context)}:`,
        ...effect.effects.flatMap((it) => describeEffect(it, context, depth + 1)),
        ...(effect.otherwise.length === 0
          ? []
          : [`${indent(depth)}Otherwise:`, ...effect.otherwise.flatMap((it) => describeEffect(it, context, depth + 1))]),
      ]
    case ActionEffectType.Modify: {
      const what = effect.what === ModifyTarget.Roll ? 'roll' : effect.what === ModifyTarget.Damage ? 'damage' : 'action cost'
      return line(`The triggering ${what} is modified by ${formatExpression(effect.amount)}.`)
    }
    case ActionEffectType.Redirect:
      return line(`The triggering attack targets ${context.current} instead.`)
    case ActionEffectType.Reroll:
      return line('Reroll the triggering roll and use the new result.')
    case ActionEffectType.Cancel:
      return line('The triggering action has no effect.')
    case ActionEffectType.End:
      return line(
        effect.condition == null ? `${context.condition ?? 'This effect'} ends.` : `${titleCase(context.current)}'s ${named(effect.condition)} ends.`
      )
    case ActionEffectType.Refund:
      return line('This use is not expended.')
    case ActionEffectType.Descriptive:
      return line(effect.description)
  }
}

const describeParty = (party: TriggerParty | null, fallback: string, context: Context): string => {
  if (party == null) {
    return fallback
  }

  if (Strings.isString(party)) {
    return creatureName(party, context)
  }

  const noun = relationNoun(party.targets, false, 'you')
  const article = noun.startsWith('you') ? '' : /^[aeiou]/.test(noun) ? 'an ' : 'a '
  const tags = party.filter.length === 0 ? '' : ` that is ${party.filter.map(named).join(' and ')}`
  return `${article}${noun}${tags}${party.range == null ? '' : ` within ${formatDistance(party.range, context)}`}`
}

const describeTrigger = (trigger: ActionTrigger, context: Context, onCondition: boolean): string => {
  const subject = describeParty(trigger.subject, onCondition ? context.current : 'you', context)
  const object = describeParty(trigger.object, 'a creature', context)
  const source = trigger.source == null ? '' : ` with ${describeFilter(trigger.source)}`
  switch (trigger.event) {
    case TriggerEvent.StartOfTurn:
      return `${subject} starts its turn`
    case TriggerEvent.FailedSave:
      return `${subject} fails a saving throw against ${context.condition ?? 'this effect'}`
    case TriggerEvent.Attacks:
      return `${subject} attacks ${object}${source}`
    case TriggerEvent.Hits:
      return `${subject} hits with an attack${source}`
    case TriggerEvent.Hit:
      return `${subject} is hit by an attack${source}`
    case TriggerEvent.Missed:
      return `an attack misses ${subject}`
    case TriggerEvent.Damaged:
      return `${subject} takes damage${source}`
    case TriggerEvent.FailsCheck:
      return `${subject} fails a check`
    case TriggerEvent.Casts:
      return `${subject} casts ${trigger.source == null ? 'a spell' : describeFilter(trigger.source).replace(/^a /, 'a ')}`
  }
}

const describeTriggered = (triggered: TriggeredAction, context: Context, depth: number): Array<string> => {
  return [
    `${indent(depth)}**Trigger:** ${describeTrigger(triggered, context, context.condition != null)}`,
    ...describeResolution(triggered, context, depth),
  ]
}

const describeBasic = (basic: BasicAction, context: Context, depth: number): Array<string> => {
  const header = [basic.name, basic.action.name].filter(Boolean).join(' · ')
  const damage = `${titleCase('the target')} takes ${formatExpression(basic.dice)} + P ${named(basic.damageType)} damage.`
  const target: Context = { ...context, current: 'the target', currentIsPlace: false }
  return [
    `${indent(depth)}**${header}**`,
    `${indent(depth)}**Target:** one creature within ${formatDistance(basic.range, context)}`,
    `${indent(depth)}${describeAttack(basic, context)}`,
    ...withHit(describeOutcomes(basic, target, depth), damage, depth),
    ...basic.effects.flatMap((it) => describeEffect(it, target, depth)),
  ]
}

export const describeAction = (action: Action | BasicAction, context: Context, depth = 0): Array<string> => {
  if (action.kind === ActionKind.Basic) {
    return describeBasic(action, context, depth)
  }

  const header = [action.name, action.action.name].filter(Boolean).join(' · ')
  const lines: Array<string> = [`${indent(depth)}**${header}**${action.requirement ? ` · Requirement: ${action.requirement}` : ''}`]
  if (action.trigger != null) {
    lines.push(`${indent(depth)}**Trigger:** ${describeTrigger(action.trigger, context, context.condition != null)}`)
  }

  return [...lines, ...describeResolution(action, context, depth)]
}

const describeChoice = (
  choice: ActionChoice,
  context: Context,
  depth: number,
  describeEffects: (effects: Array<ActionEffect>, depth: number) => Array<string>
): Array<string> => {
  const chooser = choice.by == null ? 'You' : titleCase(creatureName(choice.by, context))
  if (choice.optional && choice.options.length === 1) {
    return [`${indent(depth)}${chooser} can:`, ...describeEffects(choice.options[0]!.effects, depth + 1)]
  }

  const verb = choice.optional ? 'can choose' : choice.by == null ? 'choose' : 'chooses'
  return [
    `${indent(depth)}${chooser} ${verb} one:`,
    ...choice.options.flatMap((option) => {
      const [first = '', ...rest] = describeEffects(option.effects, depth + 2)
      return [`${indent(depth + 1)}- ${option.label === null ? '' : `**${option.label}:** `}${first.trim()}`, ...rest]
    }),
  ]
}

const describeTargeting = (targeting: Array<ActionEffect>, context: Context, depth: number): Array<string> =>
  targeting.flatMap((it) => {
    switch (it.type) {
      case ActionEffectType.Zone:
        return describeZone(it, context, depth)
      case ActionEffectType.Choose:
        return describeChoice(it, context, depth, (effects, at) => describeTargeting(effects, context, at))
      case ActionEffectType.Select: {
        const target = describeSelection(it, context)
        const current = it.range == null && it.area == null && it.from != null ? target : 'the target'
        return [
          `${indent(depth)}**Target:** ${target}`,
          ...it.effects.flatMap((effect) => describeEffect(effect, { ...context, current, currentIsPlace: false }, depth)),
        ]
      }
      default:
        return describeEffect(it, context, depth)
    }
  })

const describeResolution = (resolution: Resolution, context: Context, depth: number): Array<string> =>
  describeTargeting(resolution.targeting, context, depth).filter((it) => it.trim() !== '')

const vocabularyFor = (name: string): Vocabulary => (name.includes('(4e)') ? Dnd4e : name.includes('(PF2e)') ? Pf2e : KhydrianDrift)

export const describeExample = (example: (typeof Examples)[number]): string => {
  const context: Context = { vocabulary: vocabularyFor(example.name), current: 'you' }
  return [
    `## ${example.name}`,
    '',
    ...(example.triggers ?? []).flatMap((it) => [...describeTriggered(it, context, 0), '']),
    ...(example.actions ?? []).flatMap((action) => [...describeAction(action, context), '']),
  ].join('\n')
}

if (process.argv[1]?.endsWith('describe.ts')) {
  console.log(Examples.map(describeExample).join('\n'))
}
