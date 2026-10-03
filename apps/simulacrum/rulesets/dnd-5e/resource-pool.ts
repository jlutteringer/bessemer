import { ResourcePools } from '@simulacrum/common'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/common/types'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'

export const HitPointResourcePool = ResourcePools.defineResourcePool('resource-pool/hit-point', {
  name: 'Hit Points',
  description: '',
  size: PlayerCharacteristics.HitPoints.variable,
  refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }],
})
