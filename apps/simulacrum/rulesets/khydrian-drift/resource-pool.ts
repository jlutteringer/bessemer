import { ResourcePools } from '@simulacrum/common'
import { GameTimeUnit } from '@simulacrum/common/types'
import { PlayerCharacteristics } from '@simulacrum/rulesets/khydrian-drift/characteristic'
import { NumericExpressions } from '@bessemer/cornerstone/expression'

export const TacticPoints = ResourcePools.defineResourcePool('resource-pool/tactic-points', {
  name: 'Tactic Points',
  path: 'tacticPoints',
  description: '',
  size: NumericExpressions.floor(PlayerCharacteristics.Presence.variable, 1),
  refresh: [
    {
      period: GameTimeUnit.LongRest,
      amount: NumericExpressions.floor(PlayerCharacteristics.Presence.variable, 1),
    },
  ],
})
