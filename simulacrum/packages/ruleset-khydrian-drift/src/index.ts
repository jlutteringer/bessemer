import { Ruleset, RulesetReference } from '@simulacrum/ruleset/ruleset'
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
import * as Khydral from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-khydral'
import * as Technology from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-technology'
import {
  ActionSurge,
  AdvancedCombatTraining,
  BackInTheFight,
  BasicCombatTraining,
  Blackjack,
  MeleeCombatMastery,
  RangedCombatMastery,
  Tumble,
} from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { Stamina, TacticPoints } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import { GeneralLoadoutSlot, WeaponLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import * as Weapons from '@simulacrum/ruleset-khydrian-drift/weapon'
import * as Cyberware from '@simulacrum/ruleset-khydrian-drift/cyberware'
import { CharacterOptions, Effects } from '@simulacrum/ruleset'
import { Class, Primary } from '@simulacrum/ruleset-khydrian-drift/archetype'
import { CharacteristicGroups, PlayerCharacteristics } from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { AllSkillProficiencies, SkillProficiency } from '@simulacrum/ruleset-khydrian-drift/skill-proficiency'
import { SkillsContent } from '@simulacrum/ruleset-khydrian-drift/content/content-skills'
import { CreaturesAndCharactersContent } from '@simulacrum/ruleset-khydrian-drift/content/content-creatures-and-characters'
import { CombatContent } from '@simulacrum/ruleset-khydrian-drift/content/content-combat'
import { AllActionTypes } from '@simulacrum/ruleset-khydrian-drift/action-type'

export const SelectClassOption = CharacterOptions.selectTraitOption('select-class-option', {
  name: 'Class',
  description: '',
  filter: { archetypes: [Class] },
})
export const SelectTraitOption = CharacterOptions.selectTraitOption('select-trait-option', {
  name: 'Select Trait',
  description: '',
  filter: { archetypes: [Primary] },
})
export const SelectSkillProficiency = CharacterOptions.selectTraitOption('select-skill-proficiency', {
  name: 'Skill Proficiency',
  description: '',
  filter: {
    archetypes: [SkillProficiency],
  },
})

export const KhydrianDrift: Ruleset = {
  id: 'khydrian-drift' as RulesetReference,
  name: 'Khydrian Drift',
  entities: [
    ...Object.values(PlayerCharacteristics),
    ...Object.values(CharacteristicGroups),
    Class,
    Primary,
    SkillProficiency,
    Weapons.Weapon,
    Cyberware.Cyberware,
    Commando,
    Warblade,
    Operator,
    Scoundrel,
    Immortal,
    Jaeger,
    Adept,
    BasicCombatTraining,
    AdvancedCombatTraining,
    MeleeCombatMastery,
    RangedCombatMastery,
    Khydral.KhydralSensitivity,
    Khydral.KhydralInitiate,
    Khydral.KhydralAdept,
    Khydral.KhydralMastery,
    Cybernetics.ModularCybernetics,
    Cybernetics.AnatomicalIntegration,
    Cybernetics.ClosedLoopCirculation,
    Cybernetics.NeuralLace,
    Cybernetics.TheFleshIsWeak,
    Cybernetics.JudgementDay,
    Arsenal,
    SoldiersStamina,
    Momentum,
    OfficerTrait,
    AdvancedOperations,
    SentinelTrait,
    ...AllSkillProficiencies,
    ...Weapons.Weapons,
    ...Cyberware.AllCyberware,
    Cybernetics.HardLanding,
    Khydral.Rewind,
    Khydral.TimeDilation,
    BackInTheFight,
    Blackjack,
    Tumble,
    ActionSurge,
    TacticPoints,
    Stamina,
    ...AllActionTypes,
    GeneralLoadoutSlot,
    WeaponLoadout,
    Cybernetics.CyberwareLoadout,
    Technology.SmallTechHardpoint,
    Technology.MediumTechHardpoint,
    Technology.LargeTechHardpoint,
  ],
  progressionTable: {
    1: [
      Effects.gainCharacterOption(SelectClassOption),
      Effects.gainCharacterOption(SelectSkillProficiency),
      Effects.gainCharacterOption(SelectSkillProficiency),
      Effects.gainResourcePool(Stamina),
      Effects.gainLoadoutSlot(GeneralLoadoutSlot),
      Effects.gainLoadoutSlot(GeneralLoadoutSlot),
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
  content: [...CreaturesAndCharactersContent, ...CombatContent, ...SkillsContent],
}
