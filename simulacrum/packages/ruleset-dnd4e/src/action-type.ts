import { ActionTypes } from '@simulacrum/ruleset'

export const StandardAction = ActionTypes.defineActionType('standard-action', {
  name: 'Standard Action',
  description: 'The main action of your turn, usually an attack. You get one standard action on each of your turns.',
})

export const MoveAction = ActionTypes.defineActionType('move-action', {
  name: 'Move Action',
  description: 'An action that involves movement from one place to another. You get one move action on each of your turns.',
})

export const MinorAction = ActionTypes.defineActionType('minor-action', {
  name: 'Minor Action',
  description: 'A simple action, such as drawing a weapon or opening a door. You get one minor action on each of your turns.',
})

export const FreeAction = ActionTypes.defineActionType('free-action', {
  name: 'Free Action',
  description: 'An action that takes almost no time, such as dropping an item or speaking a few words. You can take any number of free actions.',
})

export const ImmediateInterrupt = ActionTypes.defineActionType('immediate-interrupt', {
  name: 'Immediate Interrupt',
  description: 'An action taken in response to a trigger, before the trigger resolves. You can take one immediate action per round.',
})

export const ImmediateReaction = ActionTypes.defineActionType('immediate-reaction', {
  name: 'Immediate Reaction',
  description: 'An action taken in response to a trigger, after the trigger resolves. You can take one immediate action per round.',
})

export const OpportunityAction = ActionTypes.defineActionType('opportunity-action', {
  name: 'Opportunity Action',
  description: 'An action taken in response to an enemy letting its guard down, such as an opportunity attack. You can take one per turn.',
})

export const NoAction = ActionTypes.defineActionType('no-action', {
  name: 'No Action',
  description: 'A response that takes no action at all, such as a power triggered by a die roll. It can be used even when it is not your turn.',
})

export const AllActionTypes = [
  StandardAction,
  MoveAction,
  MinorAction,
  FreeAction,
  ImmediateInterrupt,
  ImmediateReaction,
  OpportunityAction,
  NoAction,
]
