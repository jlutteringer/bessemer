import { ActionTypes } from '@simulacrum/ruleset'

export const SingleAction = ActionTypes.defineActionType('single-action', {
  name: 'Single Action ◆',
  description: 'An action that takes one of the three actions you get on your turn.',
})

export const TwoActions = ActionTypes.defineActionType('two-actions', {
  name: 'Two Actions ◆◆',
  description: 'An activity that takes two of the three actions you get on your turn.',
})

export const ThreeActions = ActionTypes.defineActionType('three-actions', {
  name: 'Three Actions ◆◆◆',
  description: 'An activity that takes all three of the actions you get on your turn.',
})

export const VariableActions = ActionTypes.defineActionType('variable-actions', {
  name: 'Variable Actions',
  description: 'An activity that takes a varying number of actions, with greater effects the more actions you spend.',
})

export const FreeAction = ActionTypes.defineActionType('free-action', {
  name: 'Free Action ◇',
  description: 'An action that doesn’t cost any of your actions. A free action with a trigger can be used any time its trigger occurs.',
})

export const Reaction = ActionTypes.defineActionType('reaction', {
  name: 'Reaction ⟲',
  description: 'An action you can use even when it’s not your turn, in response to its trigger. You get one reaction each round.',
})

export const Activity = ActionTypes.defineActionType('activity', {
  name: 'Activity',
  description: 'An activity that takes longer than a single turn, such as 1 minute or 10 minutes, usually used outside of encounters.',
})

export const AllActionTypes = [SingleAction, TwoActions, ThreeActions, VariableActions, FreeAction, Reaction, Activity]
