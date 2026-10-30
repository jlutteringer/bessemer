import { AreaShape } from '@simulacrum/ruleset/targeting'
import { AbilityFilterProps } from '@simulacrum/ruleset/ability'
import { Expression } from '@bessemer/cornerstone/expression'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { AbilityEffect, CharacterEffectTypeEnum } from '@simulacrum/ruleset/character-effect'
import {
  Action,
  ActionCreature,
  Duration,
  ActionEffect,
  ActionEffectType,
  Examples,
  Lasts,
  ModifyTarget,
  ActionOutcome,
  ActionKind,
  BasicAction,
  Resolution,
  TriggeredAction,
  ActionOutcomes,
  KdOutcome,
  Dnd4eOutcome,
  Pf2eOutcome,
  ActionOverrides,
  ActionZone,
  AnyNumber,
  ActionTargeting,
  ActionRelation,
  ActionSelection,
  ActionTrigger,
  TriggerEvent,
  TriggerParty,
} from './action-model'

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
  unit: [string, string]
  rangeNames: Record<number, string>
  outcomes: Array<{ outcome: ActionOutcome; label: string; opposite: ActionOutcome }>
}

const KhydrianDrift: Vocabulary = {
  unit: ['square', 'squares'],
  rangeNames: { 1: 'touch', 4: 'short range', 8: 'medium range', 12: 'long range', 24: 'extreme range' },
  outcomes: [
    { outcome: KdOutcome.Hit, label: 'Hit', opposite: KdOutcome.Miss },
    { outcome: KdOutcome.Miss, label: 'Miss', opposite: KdOutcome.Hit },
  ],
}

const Dnd4e: Vocabulary = {
  unit: ['square', 'squares'],
  rangeNames: {},
  outcomes: [
    { outcome: Dnd4eOutcome.Hit, label: 'Hit', opposite: Dnd4eOutcome.Miss },
    { outcome: Dnd4eOutcome.Miss, label: 'Miss', opposite: Dnd4eOutcome.Hit },
  ],
}

const Pf2e: Vocabulary = {
  unit: ['foot', 'feet'],
  rangeNames: {},
  outcomes: [
    { outcome: Pf2eOutcome.CriticalSuccess, label: 'Critical Success', opposite: Pf2eOutcome.CriticalFailure },
    { outcome: Pf2eOutcome.Success, label: 'Success', opposite: Pf2eOutcome.Failure },
    { outcome: Pf2eOutcome.Failure, label: 'Failure', opposite: Pf2eOutcome.Success },
    { outcome: Pf2eOutcome.CriticalFailure, label: 'Critical Failure', opposite: Pf2eOutcome.CriticalSuccess },
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

const named = (entity: { name: string } | string): string => (typeof entity === 'string' ? entity : entity.name)

const titleCase = (value: string): string =>
  value.replace(/(^|[\s-])(\w)/g, (_, space: string, letter: string) => `${space === '-' ? ' ' : space}${letter.toUpperCase()}`)

const record = (value: unknown): Record<string, unknown> => value as Record<string, unknown>

const formatExpression = (expression: Expression<unknown>): string => {
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
      return `${formatExpression(it['count'] as Expression<number>)}d${it['sides']}`
    case 'Roll.Sum':
    case 'Numeric.Sum':
      return (it['operands'] as Array<Expression<unknown>>).map(formatExpression).join(' + ')
    case 'Numeric.Multiply': {
      const operands = it['operands'] as Array<Expression<unknown>>
      return operands.includes(-1) ? `−${formatExpression(operands.find((operand) => operand !== -1)!)}` : operands.map(formatExpression).join(' × ')
    }
    case 'Roll.Multiply': {
      const factor = it['factor']
      const inner = formatExpression(it['roll'] as Expression<unknown>)
      return factor === 0.5 ? `half of ${inner}` : factor === 2 ? `double ${inner}` : `${inner} × ${formatExpression(factor as Expression<number>)}`
    }
    case 'Roll.Amount': {
      const multiplier = it['potencyMultiplier'] as Expression<number> | undefined
      const parts = [
        it['dice'] == null ? null : formatExpression(it['dice'] as Expression<unknown>),
        multiplier == null || multiplier === 0 ? null : multiplier === 1 ? 'P' : `${formatExpression(multiplier)}P`,
        it['bonus'] == null ? null : formatExpression(it['bonus'] as Expression<unknown>),
      ].filter((part) => part !== null)
      return parts.join(' + ')
    }
    case 'Roll.Total':
      return `the total of ${formatExpression(it['rolls'] as Expression<unknown>)}`
    case 'Array.Map':
      return `${formatExpression(record(it['mapper'])['body'] as Expression<unknown>)} of ${formatExpression(it['list'] as Expression<unknown>)}`
    case 'Array.Filter':
      return `${formatExpression(it['list'] as Expression<unknown>)} that are ${formatExpression(
        record(it['predicate'])['body'] as Expression<unknown>
      )}`
    case 'Creature.Conditions':
      return `the conditions on ${creatureName(it['creature'] as ActionCreature)}`
    case 'Condition.Is':
      return titleCase(String(it['condition']).split(/[:/]/).pop() ?? '')
    case 'Condition.Damage':
      return 'the damage'
    case 'Array.Count':
      return `the number of ${formatExpression(it['list'] as Expression<unknown>)}`
    case 'Creature.Within':
      return `creatures within ${formatExpression(it['range'] as Expression<unknown>)} of ${creatureName(it['creature'] as ActionCreature)}`
    case 'Creature.IsRelation':
      return `${String(it['relation']).toLowerCase()}`
    default:
      return `[${String(it['expressionKey'])}]`
  }
}

const formatDistance = (range: Expression<number>, context: Context): string => {
  if (typeof range === 'number' && context.vocabulary.rangeNames[range] != null) {
    return context.vocabulary.rangeNames[range]!
  }

  const [singular, plural] = context.vocabulary.unit
  return `${formatExpression(range)} ${range === 1 ? singular : plural}`
}

const creatureName = (creature: ActionCreature, context?: Context): string => {
  switch (creature) {
    case ActionCreature.You:
      return 'you'
    case ActionCreature.Target:
      return 'the target'
    case ActionCreature.Subject:
      return 'the triggering creature'
    case ActionCreature.Object:
      return 'the creature it targeted'
    case ActionCreature.Bearer:
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

  const area = selection.area
  const size = area.type === AreaShape.Sphere ? `${formatDistance(area.radius, context)} burst` : area.type
  return `a ${size} centered on a point${within}`
}

const describeZone = (zone: ActionZone, context: Context, depth: number): Array<string> => {
  const name = zone.name ?? 'the zone'
  const inner: Context = { ...context, current: 'a creature in it', condition: name, bearer: name, bearerIsPlace: true, currentIsPlace: false }
  return [
    `${indent(depth)}Creates ${name} in ${describeArea(zone, context)}${describeDuration(zone.duration)}.`,
    ...(zone.effects.some((it) => it.type !== ActionEffectType.Select)
      ? [`${indent(depth + 1)}When it appears, against each creature in ${name}:`]
      : []),
    ...zone.effects.flatMap((it) =>
      it.type === ActionEffectType.Select
        ? describeEffect(it, { ...context, current: name, currentIsPlace: true }, depth + 1)
        : describeEffect(it, { ...context, current: 'each of them', currentIsPlace: false }, depth + 2)
    ),
    ...(zone.conditions.length === 0 ? [] : [`${indent(depth + 1)}Creatures in ${name} are ${zone.conditions.map(named).join(' and ')}.`]),
    ...zone.triggers.flatMap((it) => describeTriggered(it, inner, depth + 1)),
    ...zone.actions.flatMap((it) => describeAction(it, inner, depth + 1)),
  ]
}

const describeSelection = (selection: ActionSelection, context: Context): string => {
  const origin = selection.from == null ? context.current : creatureName(selection.from, context)
  const tags = selection.filter.length === 0 ? '' : ` that is ${selection.filter.map(named).join(' and ')}`

  if (selection.range == null && selection.area == null) {
    if (selection.from === ActionCreature.Bearer && context.bearerIsPlace) {
      return `each creature in ${context.bearer}`
    }

    if (selection.from == null && context.currentIsPlace) {
      return `each creature in ${context.current}`
    }

    if (selection.from != null) {
      return creatureName(selection.from, context)
    }

    return selection.effects?.some((it) => it.type === ActionEffectType.UseAction) ? `one creature within reach${tags}` : context.current
  }

  const measuredFrom = origin === 'you' ? '' : ` of ${origin}`
  if (selection.area != null) {
    const area = selection.area!
    const size =
      area.type === AreaShape.Sphere
        ? `${formatDistance(area.radius, context)} burst`
        : area.type === AreaShape.Cone
        ? `${formatDistance(area.length, context)} cone`
        : area.type
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

const describeOverrides = ({ offense, defense, potency, range, dice, factor, attackBonus }: ActionOverrides, context: Context): string => {
  const parts = [
    offense != null || defense != null
      ? `${offense ? named(offense) : 'its usual attack'} vs. ${defense ? named(defense) : 'its usual defense'}`
      : null,
    dice != null ? `rolling its damage dice ${formatExpression(dice)} times` : null,
    potency != null ? `adding ${named(potency)} instead of its usual modifier` : null,
    range != null ? `with a range of ${formatDistance(range, context)}` : null,
    factor === 0.5 ? 'dealing half damage' : factor != null ? `dealing ${formatExpression(factor)}× damage` : null,
    attackBonus != null ? `with a bonus to the attack roll equal to ${formatExpression(attackBonus)}` : null,
  ].filter((part) => part !== null)
  return parts.length === 0 ? '' : `, using ${parts.join(', ')}`
}

const describeOutcomes = ({ outcomes }: ActionOutcomes, context: Context, depth: number, save = false): Array<string> => {
  return context.vocabulary.outcomes.flatMap(({ outcome, label, opposite }) => {
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
        : [`${indent(depth)}**Attack:** ${named(effect.offense)} vs. ${named(effect.defense)}`, ...describeOutcomes(effect, context, depth)]
    case ActionEffectType.UseAction: {
      const actor = effect.by == null ? 'You make' : `${titleCase(creatureName(effect.by, context))} makes`
      const against = effect.by === ActionCreature.Target ? '' : ` against ${context.current}`
      return [
        `${indent(depth)}${actor} ${describeFilter(effect.filter)}${against}${describeOverrides(effect.overrides, context)}.`,
        ...describeOutcomes(effect, effect.by === ActionCreature.Target ? { ...context, current: 'the creature it attacks' } : context, depth),
      ]
    }
    case ActionEffectType.Select:
      return [
        `${indent(depth)}Then, against ${describeSelection(effect, context)}:`,
        ...(effect.effects ?? []).flatMap((it) => describeEffect(it, { ...context, current: 'each of them', currentIsPlace: false }, depth + 1)),
      ]
    case ActionEffectType.Zone:
      return describeZone(effect, context, depth)
    case ActionEffectType.Damage:
      return line(
        `${titleCase(context.current)} takes ${formatExpression(effect.amount)}${effect.damageType ? ` ${named(effect.damageType)}` : ''} damage.`
      )
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
      const damage = effect.damage == null ? '' : ` (${formatExpression(effect.damage.amount)} ${named(effect.damage.type)})`
      const where = `${titleCase(context.current)} is ${name}`
      const passive = effect.effects.map((it) => `${indent(depth + 1)}${describePassive(it)}`)
      const inner: Context = {
        ...context,
        current: 'the affected creature',
        condition: name,
        bearer: 'the affected creature',
        bearerIsPlace: false,
        currentIsPlace: false,
      }
      const actions = effect.actions.flatMap((it) => describeAction(it, inner, depth + 1))
      const triggers = effect.triggers.flatMap((it) => describeTriggered(it, inner, depth + 1))
      return [`${indent(depth)}${where}${damage}${describeDuration(effect.duration)}.`, ...passive, ...triggers, ...actions]
    }
    case ActionEffectType.Choose: {
      const chooser = effect.by == null ? 'You choose' : `${titleCase(creatureName(effect.by, context))} chooses`
      return [
        `${indent(depth)}${chooser} one:`,
        ...effect.options.map((option) => `${indent(depth + 1)}- **${option.label}:** ${inline(option.effects, context, depth + 1)}`),
      ]
    }
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

  if (typeof party === 'string') {
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
    case TriggerEvent.End:
      return `${context.condition ?? 'This effect'} ends on ${subject}`
    case TriggerEvent.EachRound:
      return 'each round'
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
  const hit = context.vocabulary.outcomes[0]!
  const damage = `${titleCase('the target')} takes ${formatExpression(basic.dice)} + P ${named(basic.damageType)} damage.`
  const target: Context = { ...context, current: 'the target', currentIsPlace: false }
  const extra = describeOutcomes(basic, target, depth)
  const hitExtra = extra.find((it) => it.trimStart().startsWith(`**${hit.label}:**`))
  return [
    `${indent(depth)}**${header}**`,
    `${indent(depth)}**Target:** one creature within ${formatDistance(basic.range, context)}`,
    `${indent(depth)}**Attack:** ${named(basic.offense)} vs. ${named(basic.defense)}`,
    `${indent(depth)}**${hit.label}:** ${damage}${hitExtra === undefined ? '' : ` ${hitExtra.trim().replace(`**${hit.label}:** `, '')}`}`,
    ...extra.filter((it) => it !== hitExtra),
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

const describeResolution = (resolution: Resolution, context: Context, depth: number): Array<string> => {
  const lines: Array<string> = []
  const selections = resolution.targeting
  selections.forEach((selection) => {
    if (selection.type === ActionEffectType.Zone) {
      lines.push(...describeZone(selection, context, depth))
      return
    }

    const target = describeSelection(selection, context)
    const current = selection.range == null && selection.area == null && selection.from != null ? target : 'the target'
    lines.push(`${indent(depth)}**Target:** ${target}`)
    selection.effects.forEach((effect) => lines.push(...describeEffect(effect, { ...context, current, currentIsPlace: false }, depth)))
  })

  return lines.filter((it) => it.trim() !== '')
}

const vocabularyFor = (name: string): Vocabulary => (name.includes('(4e)') ? Dnd4e : name.includes('(PF2e)') ? Pf2e : KhydrianDrift)

export const describeExample = (example: (typeof Examples)[number]): string => {
  const context: Context = { vocabulary: vocabularyFor(example.name), current: 'you' }
  return [
    `## ${example.name}`,
    '',
    `> ${example.rules}`,
    '',
    ...(example.triggers ?? []).flatMap((it) => [...describeTriggered(it, context, 0), '']),
    ...(example.actions ?? []).flatMap((action) => [...describeAction(action, context), '']),
  ].join('\n')
}

if (process.argv[1]?.endsWith('describe.ts')) {
  console.log(Examples.map(describeExample).join('\n'))
}
