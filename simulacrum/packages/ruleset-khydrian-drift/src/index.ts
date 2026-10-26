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
  ExploitWeakness,
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
import { CharacterEffects } from '@simulacrum/ruleset'
import { Allied, Class, Hostile, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { AllCharacteristicGroups, AllCharacteristics } from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { AllSkillProficiencies, SkillProficiency } from '@simulacrum/ruleset-khydrian-drift/skill-proficiency'
import { SkillsContent } from '@simulacrum/ruleset-khydrian-drift/content/content-skills'
import { CreaturesAndCharactersContent } from '@simulacrum/ruleset-khydrian-drift/content/content-creatures-and-characters'
import { CombatContent } from '@simulacrum/ruleset-khydrian-drift/content/content-combat'
import { AllConditions } from '@simulacrum/ruleset-khydrian-drift/condition'
import { AllDamageTypes } from '@simulacrum/ruleset-khydrian-drift/damage-type'
import { AllCreatureTypes } from '@simulacrum/ruleset-khydrian-drift/creature-type'
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
    Allied,
    Hostile,
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
    Technology.Arsonist,
    Technology.Stormlord,
    Technology.LivingBomb,
    Technology.AcidSplash,
    Technology.Cauterize,
    Technology.Combustion,
    Technology.GoutOfFlame,
    Technology.ScorchingRay,
    Technology.LightningRail,
    Technology.Overload,
    Technology.ChainLightning,
    Technology.Incinerate,
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
    ExploitWeakness,
    Tumble,
    ActionSurge,
    TacticPoints,
    Stamina,
    ...AllActionTypes,
    ...AllConditions,
    ...AllDamageTypes,
    ...AllCreatureTypes,
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
      CharacterEffects.gainCharacterOption(SelectClassOption),
      CharacterEffects.gainCharacterOption(SelectAttributeIncrease),
      CharacterEffects.gainCharacterOption(SelectAttributeIncrease),
      CharacterEffects.gainCharacterOption(SelectAttributeIncrease),
      CharacterEffects.gainCharacterOption(SelectAttributeIncrease),
      CharacterEffects.gainCharacterOption(SelectAttributeIncrease),
      CharacterEffects.gainCharacterOption(SelectSkillProficiency),
      CharacterEffects.gainCharacterOption(SelectSkillProficiency),
      CharacterEffects.gainResourcePool(Stamina),
      ...Array.from({ length: 10 }, () => CharacterEffects.gainLoadoutSlot(GeneralLoadoutSlot)),
      CharacterEffects.gainLoadoutSlot(WeaponLoadout),
      CharacterEffects.gainLoadoutSlot(WeaponLoadout),
      CharacterEffects.gainLoadoutSlot(ArmorLoadout),
    ],
    2: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    3: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    4: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    5: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    6: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    7: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    8: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    9: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    10: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    11: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    12: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    13: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    14: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    15: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    16: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    17: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    18: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    19: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
    20: [CharacterEffects.gainCharacterOption(SelectAttributeIncrease), CharacterEffects.gainCharacterOption(SelectTraitOption)],
  },
  content: [...CreaturesAndCharactersContent, ...CombatContent, ...SkillsContent],
}
