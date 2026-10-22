import { ActionTypes } from '@simulacrum/ruleset'

export const MajorAction = ActionTypes.defineActionType('major-action', {
  name: 'Major Action',
  description: `Your major action is the main thing you do on your turn. You can take one major action on each of your turns.

When you take your major action, you can take one of the actions described in [Major Actions in Combat](content:combat/major-actions), such as a [Basic Attack](content:combat/basic-attack) or [Dash](content:combat/dash), use an ability that requires a major action, or improvise an action.

Instead of using your major action this way, you can use it to take an additional [minor action](action-type:minor-action). For example, if you want to interact with a second object on your turn, you can use your major action to do so.

Anything that deprives you of your ability to take actions also prevents you from taking a major action.`,
})

export const MinorAction = ActionTypes.defineActionType('minor-action', {
  name: 'Minor Action',
  description: `Your minor action is a quick action you can take on your turn alongside your [major action](action-type:major-action). You can use it to interact with one object or feature of the environment, such as opening a door during your move as you stride toward a foe. Some abilities can also be used as a Minor Action, when the ability states that you can do so.

You can take only one Minor Action on your turn, unless you use your major action to take a second one. Some special items always require a major action to use, as stated in their descriptions. The GM might also require a major action for an activity that needs special care or presents an unusual obstacle, such as opening a stuck door or turning a crank to open a hangar door.

You choose when to take a Minor Action during your turn, unless the minor action’s timing is specified, and anything that deprives you of your ability to take actions also prevents you from taking a Minor Action.`,
})

export const FreeAction = ActionTypes.defineActionType('free-action', {
  name: 'Free Action',
  description: `Free actions take so little time or effort that you can take any number of them on your turn, as long as you are able to take actions. They cover the flourishes that need neither your action nor your move. For example, you can communicate however you are able, through brief utterances and gestures, as you take your turn.

Some abilities can also be used as a Free Action, when the ability states that you can do so. The GM may limit free actions that would be unreasonable to repeat many times in a single turn.`,
})

export const Reaction = ActionTypes.defineActionType('reaction', {
  name: 'Reaction',
  description: `Certain abilities and situations allow you to take a special action called a Reaction. A Reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else’s turn. The Opportunity Attack is the most common type of Reaction.

When you take a Reaction, you can’t take another one until the start of your next turn. If the Reaction interrupts another creature’s turn, that creature can continue its turn right after the Reaction.`,
})

export const AllActionTypes = [MajorAction, MinorAction, FreeAction, Reaction]
