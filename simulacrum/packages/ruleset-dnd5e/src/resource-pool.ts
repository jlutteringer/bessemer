import { ResourcePools } from '@simulacrum/ruleset'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'

export const HitPointResourcePool = ResourcePools.defineResourcePool('resource-pool/hit-point', {
  name: 'Hit Points',
  description: '',
  size: PlayerCharacteristics.HitPoints.variable,
  refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }],
})
