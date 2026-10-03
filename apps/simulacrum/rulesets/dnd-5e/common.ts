import { Abilities, Effects } from '@simulacrum/common'
import { ActionType } from '@simulacrum/common/ability'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/common/types'
import { CharacterValues } from '@simulacrum/common/character/character'

export const Dodge = Abilities.defineAbility('common/dodge', {
  name: 'Dodge',
  effects: [
    Effects.descriptive(
      '<p>You focus entirely on avoiding attacks. Until the start of your next turn, attack rolls against you have Disadvantage if you can see the attacker, and you make Dexterity saving throws with Advantage.</p><p>You lose these benefits if you have the Incapacitated condition or your Speed is 0.</p>'
    ),
  ],
  actions: [
    {
      action: ActionType.Standard,
    },
  ],
})

export const Disengage = Abilities.defineAbility('common/disengage', {
  name: 'Disengage',
  effects: [Effects.descriptive("<p>You move carefully: your movement doesn't provoke Opportunity Attacks for the rest of the current turn.</p>")],
  actions: [
    {
      action: ActionType.Standard,
    },
  ],
})

export const Dash = Abilities.defineAbility('common/dash', {
  name: 'Dash',
  effects: [
    Effects.descriptive(
      '<p>You gain extra movement for the current turn equal to your Speed, after applying any modifiers. With a Speed of 30 feet, for example, you can move up to 60 feet on your turn.</p>'
    ),
  ],
  actions: [
    {
      action: ActionType.Standard,
    },
  ],
})

// TODO need a way to indicate only useable during a rest...
export const HealingSurge = Abilities.defineAbility('common/healing-surge', {
  name: 'Healing Surge',
  effects: [
    Effects.descriptive(
      '<p>When you finish a <strong>Short Rest</strong>, you can spend Hit Point Dice to recover. For each one you spend, roll it and add your Constitution modifier; you regain that many Hit Points.</p><p>You have a number of Hit Point Dice equal to your level, and regain all of them when you finish a Long Rest.</p>'
    ),
  ],
  resource: { size: CharacterValues.Level, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      action: ActionType.Standard,
    },
  ],
})
