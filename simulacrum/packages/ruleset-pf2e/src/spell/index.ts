import { AllCantrips } from '@simulacrum/ruleset-pf2e/spell/cantrip'
import { AllRank1Spells } from '@simulacrum/ruleset-pf2e/spell/rank-1'
import { AllRank2Spells } from '@simulacrum/ruleset-pf2e/spell/rank-2'
import { AllRank3Spells } from '@simulacrum/ruleset-pf2e/spell/rank-3'
import { AllRank4Spells } from '@simulacrum/ruleset-pf2e/spell/rank-4'
import { AllRank5Spells } from '@simulacrum/ruleset-pf2e/spell/rank-5'

export * from '@simulacrum/ruleset-pf2e/spell/cantrip'
export * from '@simulacrum/ruleset-pf2e/spell/rank-1'
export * from '@simulacrum/ruleset-pf2e/spell/rank-2'
export * from '@simulacrum/ruleset-pf2e/spell/rank-3'
export * from '@simulacrum/ruleset-pf2e/spell/rank-4'
export * from '@simulacrum/ruleset-pf2e/spell/rank-5'

export const AllSpellEntities = [...AllCantrips, ...AllRank1Spells, ...AllRank2Spells, ...AllRank3Spells, ...AllRank4Spells, ...AllRank5Spells]
