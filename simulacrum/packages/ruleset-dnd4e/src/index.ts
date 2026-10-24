import { CharacterOptions, Effects } from '@simulacrum/ruleset'
import { Ruleset, RulesetReference } from '@simulacrum/ruleset/ruleset'
import { AllActionTypes } from '@simulacrum/ruleset-dnd4e/action-type'
import { AllArchetypes, Class } from '@simulacrum/ruleset-dnd4e/archetype'
import { AllCharacteristicGroups, AllCharacteristics } from '@simulacrum/ruleset-dnd4e/characteristic'
import { AllLoadouts, ArmorLoadout, ShieldLoadout } from '@simulacrum/ruleset-dnd4e/loadout'
import { AllArmor, AllArmorProficiencies, Armor, ArmorProficiency } from '@simulacrum/ruleset-dnd4e/armor'
import {
  AbilityIncrease,
  AllAbilityScoreTraits,
  RacialAbilityBonus,
  SelectFirstAbilityIncrease,
  SelectSecondAbilityIncrease,
} from '@simulacrum/ruleset-dnd4e/ability-score'
import { AllSkillTraits, SkillFocus, TrainedSkill } from '@simulacrum/ruleset-dnd4e/skill'
import { AllRaceTraits, SelectRace } from '@simulacrum/ruleset-dnd4e/race'
import { AllFeats, SelectFeat } from '@simulacrum/ruleset-dnd4e/feat'
import { AllDivinityFeats } from '@simulacrum/ruleset-dnd4e/divinity-feat'
import { AllDeities } from '@simulacrum/ruleset-dnd4e/deity'
import { AllCommonPowers, ChannelDivinity } from '@simulacrum/ruleset-dnd4e/common'
import { AllFighterTraits } from '@simulacrum/ruleset-dnd4e/class/class-fighter'
import { AllFighterPowers } from '@simulacrum/ruleset-dnd4e/class/fighter-power'
import { AllWizardTraits } from '@simulacrum/ruleset-dnd4e/class/class-wizard'
import { AllWizardPowers } from '@simulacrum/ruleset-dnd4e/class/wizard-power'
import { AllClericTraits } from '@simulacrum/ruleset-dnd4e/class/class-cleric'
import { AllClericPowers } from '@simulacrum/ruleset-dnd4e/class/cleric-power'
import { AllPaladinTraits } from '@simulacrum/ruleset-dnd4e/class/class-paladin'
import { AllPaladinPowers } from '@simulacrum/ruleset-dnd4e/class/paladin-power'
import { AllRangerTraits } from '@simulacrum/ruleset-dnd4e/class/class-ranger'
import { AllRangerPowers } from '@simulacrum/ruleset-dnd4e/class/ranger-power'
import { AllRogueTraits } from '@simulacrum/ruleset-dnd4e/class/class-rogue'
import { AllRoguePowers } from '@simulacrum/ruleset-dnd4e/class/rogue-power'
import { AllWarlockTraits } from '@simulacrum/ruleset-dnd4e/class/class-warlock'
import { AllWarlockPowers } from '@simulacrum/ruleset-dnd4e/class/warlock-power'
import { AllWarlordTraits } from '@simulacrum/ruleset-dnd4e/class/class-warlord'
import { AllWarlordPowers } from '@simulacrum/ruleset-dnd4e/class/warlord-power'

export const SelectClass = CharacterOptions.selectTraitOption('class/select', {
  name: 'Class',
  filter: { archetypes: [Class] },
})

export const Dnd4e: Ruleset = {
  id: 'dnd-4e' as RulesetReference,
  name: 'Dungeons and Dragons 4e',
  distanceUnit: { singular: 'square', plural: 'squares' },
  entities: [
    ...AllCharacteristics,
    ...AllCharacteristicGroups,
    ...AllArchetypes,
    ArmorProficiency,
    Armor,
    RacialAbilityBonus,
    AbilityIncrease,
    TrainedSkill,
    SkillFocus,
    ...AllActionTypes,
    ...AllLoadouts,
    ...AllArmorProficiencies,
    ...AllArmor,
    ...AllAbilityScoreTraits,
    ...AllSkillTraits,
    ...AllRaceTraits,
    ...AllFeats,
    ...AllDivinityFeats,
    ...AllDeities,
    ...AllCommonPowers,
    ChannelDivinity,
    ...AllFighterTraits,
    ...AllFighterPowers,
    ...AllWizardTraits,
    ...AllWizardPowers,
    ...AllClericTraits,
    ...AllClericPowers,
    ...AllPaladinTraits,
    ...AllPaladinPowers,
    ...AllRangerTraits,
    ...AllRangerPowers,
    ...AllRogueTraits,
    ...AllRoguePowers,
    ...AllWarlockTraits,
    ...AllWarlockPowers,
    ...AllWarlordTraits,
    ...AllWarlordPowers,
  ],
  progressionTable: {
    1: [
      Effects.gainCharacterOption(SelectClass),
      Effects.gainCharacterOption(SelectRace),
      Effects.gainCharacterOption(SelectFeat),
      Effects.gainLoadoutSlot(ArmorLoadout),
      Effects.gainLoadoutSlot(ShieldLoadout),
    ],
    2: [Effects.gainCharacterOption(SelectFeat)],
    4: [
      Effects.gainCharacterOption(SelectFeat),
      Effects.gainCharacterOption(SelectFirstAbilityIncrease),
      Effects.gainCharacterOption(SelectSecondAbilityIncrease),
    ],
  },
  content: [],
}
