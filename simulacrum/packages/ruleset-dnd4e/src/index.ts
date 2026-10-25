import { CharacterOptions, Effects } from '@simulacrum/ruleset'
import { Ruleset, RulesetReference } from '@simulacrum/ruleset/ruleset'
import { AllActionTypes } from '@simulacrum/ruleset-dnd4e/action-type'
import { AllTags, Class } from '@simulacrum/ruleset-dnd4e/tag'
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
import { AllFighterTraits, SelectWeaponTalent } from '@simulacrum/ruleset-dnd4e/class/class-fighter'
import { AllFighterPowers } from '@simulacrum/ruleset-dnd4e/class/fighter-power'
import { AllWizardTraits } from '@simulacrum/ruleset-dnd4e/class/class-wizard'
import { AllWizardPowers } from '@simulacrum/ruleset-dnd4e/class/wizard-power'
import { AllClericTraits } from '@simulacrum/ruleset-dnd4e/class/class-cleric'
import { AllClericPowers } from '@simulacrum/ruleset-dnd4e/class/cleric-power'
import { AllPaladinTraits } from '@simulacrum/ruleset-dnd4e/class/class-paladin'
import { AllPaladinPowers } from '@simulacrum/ruleset-dnd4e/class/paladin-power'
import { AllRangerTraits } from '@simulacrum/ruleset-dnd4e/class/class-ranger'
import { AllRangerPowers } from '@simulacrum/ruleset-dnd4e/class/ranger-power'
import { AllRogueTraits, SelectRogueTactics } from '@simulacrum/ruleset-dnd4e/class/class-rogue'
import { AllRoguePowers } from '@simulacrum/ruleset-dnd4e/class/rogue-power'
import { AllWarlockTraits, SelectEldritchPact } from '@simulacrum/ruleset-dnd4e/class/class-warlock'
import { AllWarlockPowers } from '@simulacrum/ruleset-dnd4e/class/warlock-power'
import { AllWarlordTraits, SelectCommandingPresence } from '@simulacrum/ruleset-dnd4e/class/class-warlord'
import { AllWarlordPowers } from '@simulacrum/ruleset-dnd4e/class/warlord-power'
import { HowToPlayContent } from '@simulacrum/ruleset-dnd4e/content/content-how-to-play'
import { MakingCharactersContent } from '@simulacrum/ruleset-dnd4e/content/content-making-characters'
import { RacesContent } from '@simulacrum/ruleset-dnd4e/content/content-races'
import { ClassesContent } from '@simulacrum/ruleset-dnd4e/content/content-classes'
import { ClericContent } from '@simulacrum/ruleset-dnd4e/content/content-class-cleric'
import { FighterContent } from '@simulacrum/ruleset-dnd4e/content/content-class-fighter'
import { PaladinContent } from '@simulacrum/ruleset-dnd4e/content/content-class-paladin'
import { RangerContent } from '@simulacrum/ruleset-dnd4e/content/content-class-ranger'
import { RogueContent } from '@simulacrum/ruleset-dnd4e/content/content-class-rogue'
import { WarlockContent } from '@simulacrum/ruleset-dnd4e/content/content-class-warlock'
import { WarlordContent } from '@simulacrum/ruleset-dnd4e/content/content-class-warlord'
import { WizardContent } from '@simulacrum/ruleset-dnd4e/content/content-class-wizard'
import { SkillsContent } from '@simulacrum/ruleset-dnd4e/content/content-skills'
import { FeatsContent } from '@simulacrum/ruleset-dnd4e/content/content-feats'
import { EquipmentContent } from '@simulacrum/ruleset-dnd4e/content/content-equipment'
import { AdventuringContent } from '@simulacrum/ruleset-dnd4e/content/content-adventuring'
import { CombatContent } from '@simulacrum/ruleset-dnd4e/content/content-combat'
import { RitualsContent } from '@simulacrum/ruleset-dnd4e/content/content-rituals'

export const SelectClass = CharacterOptions.selectTraitOption('class/select', {
  name: 'Class',
  filter: { tags: [Class] },
})

export const Dnd4e: Ruleset = {
  id: 'dnd-4e' as RulesetReference,
  name: 'Dungeons and Dragons 4e',
  distanceUnit: { singular: 'square', plural: 'squares' },
  entities: [
    ...AllCharacteristics,
    ...AllCharacteristicGroups,
    ...AllTags,
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
    SelectWeaponTalent,
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
    SelectRogueTactics,
    ...AllRoguePowers,
    ...AllWarlockTraits,
    SelectEldritchPact,
    ...AllWarlockPowers,
    ...AllWarlordTraits,
    SelectCommandingPresence,
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
    5: [],
  },
  content: [
    ...HowToPlayContent,
    ...MakingCharactersContent,
    ...RacesContent,
    ...ClassesContent,
    ...ClericContent,
    ...FighterContent,
    ...PaladinContent,
    ...RangerContent,
    ...RogueContent,
    ...WarlockContent,
    ...WarlordContent,
    ...WizardContent,
    ...SkillsContent,
    ...FeatsContent,
    ...EquipmentContent,
    ...AdventuringContent,
    ...CombatContent,
    ...RitualsContent,
  ],
}
