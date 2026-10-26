import { CharacterEffects } from '@simulacrum/ruleset'
import { Ruleset, RulesetReference } from '@simulacrum/ruleset/ruleset'
import { Expressions } from '@bessemer/cornerstone/expression'
import { AllActionTypes } from '@simulacrum/ruleset-pf2e/action-type'
import { AllTags } from '@simulacrum/ruleset-pf2e/tag'
import { AllCharacteristicGroups, AllCharacteristics, Intelligence } from '@simulacrum/ruleset-pf2e/characteristic'
import { AllAttributeBoosts, SelectLevel1Boost, SelectLevel5Boost, SelectLevel10Boost } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { AllSkillTraits, SelectSkillIncrease, SelectSkillIncrease7, SelectTrainedSkill } from '@simulacrum/ruleset-pf2e/skill'
import { AllLoadouts, ArmorLoadout, ShieldLoadout } from '@simulacrum/ruleset-pf2e/loadout'
import { AllArmor } from '@simulacrum/ruleset-pf2e/armor'
import { AllSpellcasting } from '@simulacrum/ruleset-pf2e/spellcasting'
import {
  SelectAncestry,
  SelectBackground,
  SelectClass,
  SelectGeneralFeat3,
  SelectGeneralFeat7,
  SelectSkillFeat2,
  SelectSkillFeat4,
  SelectSkillFeat6,
  SelectSkillFeat8,
  SelectSkillFeat10,
} from '@simulacrum/ruleset-pf2e/character-option'
import { AllAncestryEntities } from '@simulacrum/ruleset-pf2e/ancestry/ancestry'
import { AllBackgroundEntities } from '@simulacrum/ruleset-pf2e/background'
import { AllGeneralFeatEntities } from '@simulacrum/ruleset-pf2e/feat/general-feat'
import { AllSpellEntities } from '@simulacrum/ruleset-pf2e/spell/spell'
import { AllAnimalCompanionEntities } from '@simulacrum/ruleset-pf2e/companion/animal-companion'
import { AllFamiliarEntities } from '@simulacrum/ruleset-pf2e/companion/familiar'
import { AllBardEntities } from '@simulacrum/ruleset-pf2e/class/class-bard'
import { AllClericEntities } from '@simulacrum/ruleset-pf2e/class/class-cleric'
import { AllDruidEntities } from '@simulacrum/ruleset-pf2e/class/class-druid'
import { AllFighterEntities } from '@simulacrum/ruleset-pf2e/class/class-fighter'
import { AllRangerEntities } from '@simulacrum/ruleset-pf2e/class/class-ranger'
import { AllRogueEntities } from '@simulacrum/ruleset-pf2e/class/class-rogue'
import { AllWitchEntities } from '@simulacrum/ruleset-pf2e/class/class-witch'
import { AllWizardEntities } from '@simulacrum/ruleset-pf2e/class/class-wizard'
import { IntroductionContent } from '@simulacrum/ruleset-pf2e/content/content-introduction'
import { AncestriesAndBackgroundsContent } from '@simulacrum/ruleset-pf2e/content/content-ancestries-and-backgrounds'
import { ClassesContent } from '@simulacrum/ruleset-pf2e/content/content-classes'
import { SkillsContent } from '@simulacrum/ruleset-pf2e/content/content-skills'
import { FeatsContent } from '@simulacrum/ruleset-pf2e/content/content-feats'
import { EquipmentContent } from '@simulacrum/ruleset-pf2e/content/content-equipment'
import { SpellsContent } from '@simulacrum/ruleset-pf2e/content/content-spells'
import { PlayingTheGameContent } from '@simulacrum/ruleset-pf2e/content/content-playing-the-game'
import { ConditionsContent } from '@simulacrum/ruleset-pf2e/content/content-conditions'
import { TraitsContent } from '@simulacrum/ruleset-pf2e/content/content-traits'

export const Pf2e: Ruleset = {
  id: 'pf2e' as RulesetReference,
  name: 'Pathfinder 2e',
  distanceUnit: { singular: 'foot', plural: 'feet' },
  entities: [
    ...AllCharacteristics,
    ...AllCharacteristicGroups,
    ...AllTags,
    ...AllActionTypes,
    ...AllAttributeBoosts,
    ...AllSkillTraits,
    ...AllLoadouts,
    ...AllArmor,
    ...AllSpellcasting,
    ...AllAncestryEntities,
    ...AllBackgroundEntities,
    ...AllGeneralFeatEntities,
    ...AllSpellEntities,
    ...AllAnimalCompanionEntities,
    ...AllFamiliarEntities,
    ...AllBardEntities,
    ...AllClericEntities,
    ...AllDruidEntities,
    ...AllFighterEntities,
    ...AllRangerEntities,
    ...AllRogueEntities,
    ...AllWitchEntities,
    ...AllWizardEntities,
  ],
  progressionTable: {
    1: [
      CharacterEffects.gainCharacterOption(SelectAncestry),
      CharacterEffects.gainCharacterOption(SelectBackground),
      CharacterEffects.gainCharacterOption(SelectClass),
      CharacterEffects.gainCharacterOption(SelectLevel1Boost),
      CharacterEffects.gainCharacterOption(SelectLevel1Boost),
      CharacterEffects.gainCharacterOption(SelectLevel1Boost),
      CharacterEffects.gainCharacterOption(SelectLevel1Boost),
      CharacterEffects.gainLoadoutSlot(ArmorLoadout),
      CharacterEffects.gainLoadoutSlot(ShieldLoadout),
      // An Intelligence modifier of +1 or more trains you in that many additional skills
      CharacterEffects.conditional(Expressions.greaterThanOrEqual(Intelligence.variable, 1), [
        CharacterEffects.gainCharacterOption(SelectTrainedSkill),
      ]),
      CharacterEffects.conditional(Expressions.greaterThanOrEqual(Intelligence.variable, 2), [
        CharacterEffects.gainCharacterOption(SelectTrainedSkill),
      ]),
      CharacterEffects.conditional(Expressions.greaterThanOrEqual(Intelligence.variable, 3), [
        CharacterEffects.gainCharacterOption(SelectTrainedSkill),
      ]),
      CharacterEffects.conditional(Expressions.greaterThanOrEqual(Intelligence.variable, 4), [
        CharacterEffects.gainCharacterOption(SelectTrainedSkill),
      ]),
    ],
    2: [CharacterEffects.gainCharacterOption(SelectSkillFeat2)],
    3: [CharacterEffects.gainCharacterOption(SelectGeneralFeat3), CharacterEffects.gainCharacterOption(SelectSkillIncrease)],
    4: [CharacterEffects.gainCharacterOption(SelectSkillFeat4)],
    5: [
      CharacterEffects.gainCharacterOption(SelectLevel5Boost),
      CharacterEffects.gainCharacterOption(SelectLevel5Boost),
      CharacterEffects.gainCharacterOption(SelectLevel5Boost),
      CharacterEffects.gainCharacterOption(SelectLevel5Boost),
      CharacterEffects.gainCharacterOption(SelectSkillIncrease),
    ],
    6: [CharacterEffects.gainCharacterOption(SelectSkillFeat6)],
    7: [CharacterEffects.gainCharacterOption(SelectGeneralFeat7), CharacterEffects.gainCharacterOption(SelectSkillIncrease7)],
    8: [CharacterEffects.gainCharacterOption(SelectSkillFeat8)],
    9: [CharacterEffects.gainCharacterOption(SelectSkillIncrease7)],
    10: [
      CharacterEffects.gainCharacterOption(SelectLevel10Boost),
      CharacterEffects.gainCharacterOption(SelectLevel10Boost),
      CharacterEffects.gainCharacterOption(SelectLevel10Boost),
      CharacterEffects.gainCharacterOption(SelectLevel10Boost),
      CharacterEffects.gainCharacterOption(SelectSkillFeat10),
    ],
  },
  content: [
    ...IntroductionContent,
    ...AncestriesAndBackgroundsContent,
    ...ClassesContent,
    ...SkillsContent,
    ...FeatsContent,
    ...EquipmentContent,
    ...SpellsContent,
    ...PlayingTheGameContent,
    ...ConditionsContent,
    ...TraitsContent,
  ],
}
