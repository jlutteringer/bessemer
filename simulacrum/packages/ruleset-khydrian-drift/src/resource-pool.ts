import { ResourcePools } from '@simulacrum/ruleset'
import { GameTimeUnit } from '@simulacrum/ruleset/types'
import { PlayerCharacteristics } from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { NumericExpressions } from '@bessemer/cornerstone/expression'

export const TacticPoints = ResourcePools.defineResourcePool('resource-pool/tactic-points', {
  name: 'Tactic Points',
  description: '',
  size: NumericExpressions.floor(PlayerCharacteristics.Presence.variable, 1),
  refresh: [
    {
      period: GameTimeUnit.LongRest,
      amount: NumericExpressions.floor(PlayerCharacteristics.Presence.variable, 1),
    },
  ],
})

export const Stamina = ResourcePools.defineResourcePool('resource-pool/stamina', {
  name: 'Stamina',
  description: '',
  size: PlayerCharacteristics.StaminaPool.variable,
  refresh: [],
})

export const StaminaCost = {
  Low: 2,
  Medium: 4,
  High: 8,
  VeryHigh: 12,
}
