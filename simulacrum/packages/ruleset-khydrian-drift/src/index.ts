import { RulesetReference } from '@simulacrum/ruleset/ruleset'
import { Ruleset } from '@simulacrum/ruleset/ruleset'
import {
  AdvancedOperations,
  Arsenal,
  Commando,
  Momentum,
  OfficerTrait,
  SentinelTrait,
  SoldiersStamina,
} from '@simulacrum/ruleset-khydrian-drift/class/class-commando'
import { Warblade } from '@simulacrum/ruleset-khydrian-drift/class/class-warblade'
import { Operator } from '@simulacrum/ruleset-khydrian-drift/class/class-operator'
import { Scoundrel } from '@simulacrum/ruleset-khydrian-drift/class/class-scoundrel'
import { Immortal } from '@simulacrum/ruleset-khydrian-drift/class/class-immortal'
import { Jaeger } from '@simulacrum/ruleset-khydrian-drift/class/class-jaeger'
import { Adept } from '@simulacrum/ruleset-khydrian-drift/class/class-adept'
import * as Cybernetics from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-cybernetics'
import { BasicCombatTraining } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { TacticPoints } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import { AdvancedHardpointLoadoutSlot, CyberwareLoadout, GeneralLoadoutSlot, WeaponLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import * as Weapons from '@simulacrum/ruleset-khydrian-drift/weapon'
import * as Cyberware from '@simulacrum/ruleset-khydrian-drift/cyberware'
import { Effects, Traits } from '@simulacrum/ruleset'
import { Class, Primary } from '@simulacrum/ruleset-khydrian-drift/archetype'
import { CharacterOptions } from '@simulacrum/ruleset'
import { CreatureCharacteristics, PlayerCharacteristics } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const SelectClassOption = CharacterOptions.selectTraitOption('select-class-option', { archetypes: [Class] })
export const SelectTraitOption = CharacterOptions.selectTraitOption('select-trait-option', { archetypes: [Primary] }, 'Select Trait')

export const KhydrianDrift: Ruleset = {
  id: 'khydrian-drift' as RulesetReference,
  name: 'Khydrian Drift',
  creatureCharacteristics: Object.values(CreatureCharacteristics),
  playerCharacteristics: Object.values(PlayerCharacteristics),
  characteristicGroups: [],
  archetypes: [Class, Primary, Weapons.Weapon, Cyberware.Cyberware],
  traits: [
    Commando,
    Warblade,
    Operator,
    Scoundrel,
    Immortal,
    Jaeger,
    Adept,
    BasicCombatTraining,
    Cybernetics.ModularCybernetics,
    Cybernetics.AnatomicalIntegration,
    Cybernetics.ClosedLoopCirculation,
    Cybernetics.BrainCybernetics,
    Cybernetics.TheFleshIsWeak,
    Cybernetics.JudgementDay,
    Arsenal,
    SoldiersStamina,
    Momentum,
    OfficerTrait,
    AdvancedOperations,
    SentinelTrait,
  ],
  abilities: [...Weapons.Weapons, ...Cyberware.AllCyberware, Cybernetics.HardLanding],
  resourcePools: [TacticPoints],
  loadoutTypes: [GeneralLoadoutSlot, AdvancedHardpointLoadoutSlot, WeaponLoadout, CyberwareLoadout],
  progressionTable: {
    1: [
      Effects.gainCharacterOption(SelectClassOption),
      Effects.gainLoadoutSlot(WeaponLoadout),
      Effects.gainLoadoutSlot(WeaponLoadout),
      ...Weapons.gainWeapons(),
    ],
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
