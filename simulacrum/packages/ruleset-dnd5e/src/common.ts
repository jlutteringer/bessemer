import { Abilities, CharacterEffects, CharacterValues } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-dnd5e/action-type'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'

export const Dodge = Abilities.defineAbility('common/dodge', {
  name: 'Dodge',
  effects: [
    CharacterEffects.descriptive(
      'You focus entirely on avoiding attacks. Until the start of your next turn, attack rolls against you have Disadvantage if you can see the attacker, and you make Dexterity saving throws with Advantage.\n\nYou lose these benefits if you have the Incapacitated condition or your Speed is 0.'
    ),
  ],
  actions: [
    {
      action: ActionTypes.Action,
    },
  ],
})

export const Disengage = Abilities.defineAbility('common/disengage', {
  name: 'Disengage',
  effects: [CharacterEffects.descriptive("You move carefully: your movement doesn't provoke Opportunity Attacks for the rest of the current turn.")],
  actions: [
    {
      action: ActionTypes.Action,
    },
  ],
})

export const Dash = Abilities.defineAbility('common/dash', {
  name: 'Dash',
  effects: [
    CharacterEffects.descriptive(
      'You gain extra movement for the current turn equal to your Speed, after applying any modifiers. With a Speed of 30 feet, for example, you can move up to 60 feet on your turn.'
    ),
  ],
  actions: [
    {
      action: ActionTypes.Action,
    },
  ],
})

// TODO need a way to indicate only useable during a rest...
export const HealingSurge = Abilities.defineAbility('common/healing-surge', {
  name: 'Healing Surge',
  effects: [
    CharacterEffects.descriptive(
      'When you finish a **Short Rest**, you can spend Hit Point Dice to recover. For each one you spend, roll it and add your Constitution modifier; you regain that many Hit Points.\n\nYou have a number of Hit Point Dice equal to your level, and regain all of them when you finish a Long Rest.'
    ),
  ],
  resource: { size: CharacterValues.Level, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      action: ActionTypes.Action,
    },
  ],
})
