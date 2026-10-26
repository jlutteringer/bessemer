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
import { AllWarbladeEntities } from '@simulacrum/ruleset-khydrian-drift/class/class-warblade'
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
  AllArmorProficiencies,
  ArmorProficiency,
} from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { Stamina, TacticPoints } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import { ArmorLoadout, CyberwareLoadout, GeneralLoadoutSlot, WeaponLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { AllArmor, Armor } from '@simulacrum/ruleset-khydrian-drift/armor'
import * as Weapons from '@simulacrum/ruleset-khydrian-drift/weapon'
import * as Cyberware from '@simulacrum/ruleset-khydrian-drift/cyberware'
import { Effects } from '@simulacrum/ruleset'
import { Class, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { AllCharacteristicGroups, AllCharacteristics } from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { AllSkillProficiencies, SkillProficiency } from '@simulacrum/ruleset-khydrian-drift/skill-proficiency'
import { SkillsContent } from '@simulacrum/ruleset-khydrian-drift/content/content-skills'
import { CreaturesAndCharactersContent } from '@simulacrum/ruleset-khydrian-drift/content/content-creatures-and-characters'
import { CombatContent } from '@simulacrum/ruleset-khydrian-drift/content/content-combat'
import { AllActionTypes } from '@simulacrum/ruleset-khydrian-drift/action-type'
import {
  SelectAttributeIncrease,
  SelectClassOption,
  SelectSkillProficiency,
  SelectTraitOption,
} from '@simulacrum/ruleset-khydrian-drift/character-option'
import { AllAttributeIncreases, AttributeIncrease } from '@simulacrum/ruleset-khydrian-drift/attribute-increase'

export const KhydrianDrift: Ruleset = {
  id: 'khydrian-drift' as RulesetReference,
  name: 'Khydrian Drift',
  distanceUnit: { singular: 'square', plural: 'squares' },
  entities: [
    SelectClassOption,
    SelectTraitOption,
    SelectSkillProficiency,
    SelectAttributeIncrease,
    ...AllCharacteristics,
    ...AllCharacteristicGroups,
    Class,
    Primary,
    SkillProficiency,
    AttributeIncrease,
    Weapons.Weapon,
    Armor,
    ArmorProficiency,
    ...AllArmorProficiencies,
    Cyberware.Cyberware,
    Commando,
    ...AllWarbladeEntities,
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
    Technology.TechNovice,
    Technology.TechAdept,
    Technology.TechMaster,
    Technology.LivingBomb,
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
    ...AllAttributeIncreases,
    ...Weapons.Weapons,
    ...AllArmor,
    ...Cyberware.AllCyberware,
    Cybernetics.HardLanding,
    Khydral.Rewind,
    Khydral.TimeDilation,
    Khydral.CloakOfTheMagi,
    BackInTheFight,
    Blackjack,
    Tumble,
    ActionSurge,
    TacticPoints,
    Stamina,
    ...AllActionTypes,
    GeneralLoadoutSlot,
    WeaponLoadout,
    ArmorLoadout,
    CyberwareLoadout,
    Technology.SmallTechHardpoint,
    Technology.MediumTechHardpoint,
    Technology.LargeTechHardpoint,
  ],
  progressionTable: {
    1: [
      Effects.gainCharacterOption(SelectClassOption),
      Effects.gainCharacterOption(SelectAttributeIncrease),
      Effects.gainCharacterOption(SelectAttributeIncrease),
      Effects.gainCharacterOption(SelectAttributeIncrease),
      Effects.gainCharacterOption(SelectAttributeIncrease),
      Effects.gainCharacterOption(SelectAttributeIncrease),
      Effects.gainCharacterOption(SelectSkillProficiency),
      Effects.gainCharacterOption(SelectSkillProficiency),
      Effects.gainResourcePool(Stamina),
      Effects.gainLoadoutSlot(GeneralLoadoutSlot),
      Effects.gainLoadoutSlot(GeneralLoadoutSlot),
      Effects.gainLoadoutSlot(WeaponLoadout),
      Effects.gainLoadoutSlot(WeaponLoadout),
      Effects.gainLoadoutSlot(ArmorLoadout),
    ],
    2: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    3: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    4: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    5: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    6: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    7: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    8: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    9: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    10: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    11: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    12: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    13: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    14: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    15: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    16: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    17: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    18: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    19: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
    20: [Effects.gainCharacterOption(SelectAttributeIncrease), Effects.gainCharacterOption(SelectTraitOption)],
  },
  content: [...CreaturesAndCharactersContent, ...CombatContent, ...SkillsContent],
}
