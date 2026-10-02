import { RulesetReference } from '@simulacrum/common/ruleset'
import { Ruleset } from '@simulacrum/common/ruleset'
import {
  AdvancedOperations,
  Arsenal,
  BaselineQuickGuy,
  Commando,
  Momentum,
  OfficerTrait,
  SentinelTrait,
  SoldiersStamina,
} from '@simulacrum/rulesets/khydrian-drift/class/class-commando'
import { BasicCombatTraining } from '@simulacrum/rulesets/khydrian-drift/archetype/archetype-combat'
import { TacticPoints } from '@simulacrum/rulesets/khydrian-drift/resource-pool'
import { AdvancedHardpointLoadoutSlot, GeneralLoadoutSlot } from '@simulacrum/rulesets/khydrian-drift/loadout'
import { Effects, Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/khydrian-drift/archetype'
import { CharacterOptions } from '@simulacrum/common/character'
import { CreatureCharacteristics, PlayerCharacteristics } from '@simulacrum/rulesets/khydrian-drift/characteristic'

export const SelectClassOption = CharacterOptions.selectTraitOption('select-class-option', { archetypes: [Class] })
export const SelectTraitOption = CharacterOptions.selectTraitOption('select-trait-option', {})

export const KhydrianDrift: Ruleset = {
  id: 'khydrian-drift' as RulesetReference,
  name: 'Khydrian Drift',
  creatureCharacteristics: Object.values(CreatureCharacteristics),
  playerCharacteristics: Object.values(PlayerCharacteristics),
  archetypes: [Class],
  traits: [Commando, BasicCombatTraining, Arsenal, SoldiersStamina, Momentum, OfficerTrait, AdvancedOperations, SentinelTrait, BaselineQuickGuy],
  abilities: [],
  resourcePools: [TacticPoints],
  loadoutTypes: [GeneralLoadoutSlot, AdvancedHardpointLoadoutSlot],
  progressionTable: {
    1: [Effects.gainCharacterOption(SelectClassOption)],
    2: [Effects.gainCharacterOption(SelectTraitOption)],
    3: [Effects.gainCharacterOption(SelectTraitOption)],
    4: [Effects.gainCharacterOption(SelectTraitOption)],
    5: [Effects.gainCharacterOption(SelectTraitOption)],
    6: [Effects.gainCharacterOption(SelectTraitOption)],
    7: [Effects.gainCharacterOption(SelectTraitOption)],
    8: [Effects.gainCharacterOption(SelectTraitOption)],
    9: [Effects.gainCharacterOption(SelectTraitOption)],
    10: [Effects.gainCharacterOption(SelectTraitOption)],
  },
}
