import { Abilities } from '@simulacrum/common'
import { ActionType } from '@simulacrum/common/ability'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/common/types'
import { CharacterValues } from '@simulacrum/common/character/character'

export const Dodge = Abilities.defineAbility('common/dodge', {
  name: 'Dodge',
  description: '',
  actions: [
    {
      action: ActionType.Standard,
    },
  ],
})

export const Disengage = Abilities.defineAbility('common/disengage', {
  name: 'Disengage',
  description: '',
  actions: [
    {
      action: ActionType.Standard,
    },
  ],
})

export const Dash = Abilities.defineAbility('common/dash', {
  name: 'Dash',
  description: '',
  actions: [
    {
      action: ActionType.Standard,
    },
  ],
})

// TODO healing surge is going to need its own resource pool or something...
// TODO need a way to indicate only useable during a rest...
export const HealingSurge = Abilities.defineAbility('common/healing-surge', {
  name: 'Healing Surge',
  description: '',
  actions: [
    {
      action: ActionType.Standard,
      costs: [{ cost: 1, resource: { size: CharacterValues.Level, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.Half }] } }],
    },
  ],
})
