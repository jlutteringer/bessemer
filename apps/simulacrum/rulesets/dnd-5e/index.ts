import { RulesetReference } from '@simulacrum/common/ruleset'
import { Ruleset } from '@simulacrum/common/ruleset'
import { Effects } from '@simulacrum/common'
import {
  ActionSurge,
  BattleMaster,
  Champion,
  EldritchKnight,
  Fighter,
  Fighter2,
  Fighter3,
  Fighter4,
  Fighter5,
  FighterSubclass,
  PsiWarrior,
  SecondWind,
} from '@simulacrum/rulesets/dnd-5e/class/class-fighter'
import { Archery, BlindFighting, Defense, FightingStyle } from '@simulacrum/rulesets/dnd-5e/archetype/fighting-style'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'
import { Barbarian, Barbarian2, Barbarian3, Barbarian4, Barbarian5 } from '@simulacrum/rulesets/dnd-5e/class/class-barbarian'
import { CharacterOptions } from '@simulacrum/common/character'
import { Cleric, Cleric2, Cleric3, Cleric4, Cleric5 } from '@simulacrum/rulesets/dnd-5e/class/class-cleric'
import { Druid, Druid2, Druid3, Druid4, Druid5 } from '@simulacrum/rulesets/dnd-5e/class/class-druid'
import { Bard, Bard2, Bard3, Bard4, Bard5 } from '@simulacrum/rulesets/dnd-5e/class/class-bard'
import { Monk, Monk2, Monk3, Monk4, Monk5 } from '@simulacrum/rulesets/dnd-5e/class/class-monk'
import { Paladin, Paladin2, Paladin3, Paladin4, Paladin5 } from '@simulacrum/rulesets/dnd-5e/class/class-paladin'
import { Ranger, Ranger2, Ranger3, Ranger4, Ranger5 } from '@simulacrum/rulesets/dnd-5e/class/class-ranger'
import { Rogue, Rogue2, Rogue3, Rogue4, Rogue5 } from '@simulacrum/rulesets/dnd-5e/class/class-rogue'
import { Sorcerer, Sorcerer2, Sorcerer3, Sorcerer4, Sorcerer5 } from '@simulacrum/rulesets/dnd-5e/class/class-sorcerer'
import { Warlock, Warlock2, Warlock3, Warlock4, Warlock5 } from '@simulacrum/rulesets/dnd-5e/class/class-warlock'
import { Wizard, Wizard2, Wizard3, Wizard4, Wizard5 } from '@simulacrum/rulesets/dnd-5e/class/class-wizard'
import { CreatureCharacteristics, PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { Dash, Disengage, Dodge, HealingSurge } from '@simulacrum/rulesets/dnd-5e/common'
import { HitPointResourcePool } from '@simulacrum/rulesets/dnd-5e/resource-pool'

export const SelectClassLevel = CharacterOptions.selectTraitOption('afbef236-17a0-464f-b2d0-cb01ecf7931a', { archetypes: [Class] })

export const Dnd5e: Ruleset = {
  id: 'ca894259-d62d-4398-b417-cb4f0adf4ffe' as RulesetReference,
  name: 'Dungeons and Dragons 5e',
  creatureCharacteristics: Object.values(CreatureCharacteristics),
  playerCharacteristics: Object.values(PlayerCharacteristics),
  archetypes: [Class, FightingStyle, FighterSubclass],
  traits: [
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard,
    Archery,
    BlindFighting,
    Defense,
    Fighter2,
    Fighter3,
    Barbarian2,
    Barbarian3,
    Barbarian4,
    Barbarian5,
    Bard2,
    Bard3,
    Bard4,
    Bard5,
    Cleric2,
    Cleric3,
    Cleric4,
    Cleric5,
    Druid2,
    Druid3,
    Druid4,
    Druid5,
    Fighter4,
    Fighter5,
    Monk2,
    Monk3,
    Monk4,
    Monk5,
    Paladin2,
    Paladin3,
    Paladin4,
    Paladin5,
    Ranger2,
    Ranger3,
    Ranger4,
    Ranger5,
    Rogue2,
    Rogue3,
    Rogue4,
    Rogue5,
    Sorcerer2,
    Sorcerer3,
    Sorcerer4,
    Sorcerer5,
    Warlock2,
    Warlock3,
    Warlock4,
    Warlock5,
    Wizard2,
    Wizard3,
    Wizard4,
    Wizard5,
    BattleMaster,
    Champion,
    EldritchKnight,
    PsiWarrior,
  ],
  abilities: [Dodge, Disengage, Dash, HealingSurge, SecondWind, ActionSurge],
  resourcePools: [HitPointResourcePool],
  loadoutTypes: [],
  progressionTable: {
    1: [
      Effects.gainResourcePool(HitPointResourcePool),
      Effects.gainCharacterOption(SelectClassLevel),
      Effects.gainAbility(Dodge),
      Effects.gainAbility(Disengage),
      Effects.gainAbility(Dash),
      Effects.gainAbility(HealingSurge),
    ],
    2: [Effects.gainCharacterOption(SelectClassLevel)],
    3: [Effects.gainCharacterOption(SelectClassLevel)],
    4: [Effects.gainCharacterOption(SelectClassLevel)],
    5: [Effects.gainCharacterOption(SelectClassLevel)],
  },
}
