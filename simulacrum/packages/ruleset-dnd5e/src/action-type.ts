import { ActionTypes } from '@simulacrum/ruleset'

export const Action = ActionTypes.defineActionType('action', { name: 'Action', description: '' })

export const BonusAction = ActionTypes.defineActionType('bonus-action', { name: 'Bonus Action', description: '' })

export const Reaction = ActionTypes.defineActionType('reaction', { name: 'Reaction', description: '' })

export const Free = ActionTypes.defineActionType('free', { name: 'Free', description: '' })

export const AllActionTypes = [Action, BonusAction, Reaction, Free]
