import { ActionTypes } from '@simulacrum/ruleset'

export const Action = ActionTypes.defineActionType('action', { name: 'Action' })

export const BonusAction = ActionTypes.defineActionType('bonus-action', { name: 'Bonus Action' })

export const Reaction = ActionTypes.defineActionType('reaction', { name: 'Reaction' })

export const Free = ActionTypes.defineActionType('free', { name: 'Free' })

export const AllActionTypes = [Action, BonusAction, Reaction, Free]
