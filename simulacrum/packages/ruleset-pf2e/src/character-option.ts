import { CharacterOptions } from '@simulacrum/ruleset'
import {
  Ancestry,
  Background,
  Class,
  FeatLevel1,
  FeatLevel2,
  FeatLevel3,
  FeatLevel4,
  GeneralFeat,
  SkillFeat,
} from '@simulacrum/ruleset-pf2e/archetype'

export const SelectAncestry = CharacterOptions.selectTraitOption('ancestry/select', { name: 'Ancestry', filter: { archetypes: [Ancestry] } })

export const SelectBackground = CharacterOptions.selectTraitOption('background/select', { name: 'Background', filter: { archetypes: [Background] } })

export const SelectClass = CharacterOptions.selectTraitOption('class/select', { name: 'Class', filter: { archetypes: [Class] } })

// A feat slot accepts feats of its level or lower

export const SelectSkillFeat1 = CharacterOptions.selectTraitOption('feat/select-skill-1', {
  name: 'Skill Feat (Level 1)',
  filter: { archetypes: [SkillFeat, FeatLevel1] },
})

export const SelectSkillFeat2 = CharacterOptions.selectTraitOption('feat/select-skill-2', {
  name: 'Skill Feat (Level 2)',
  filter: { archetypes: [SkillFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectSkillFeat3 = CharacterOptions.selectTraitOption('feat/select-skill-3', {
  name: 'Skill Feat (Level 3)',
  filter: { archetypes: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3]] },
})

export const SelectSkillFeat4 = CharacterOptions.selectTraitOption('feat/select-skill-4', {
  name: 'Skill Feat (Level 4)',
  filter: { archetypes: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const SelectSkillFeat5 = CharacterOptions.selectTraitOption('feat/select-skill-5', {
  name: 'Skill Feat (Level 5)',
  filter: { archetypes: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const SelectGeneralFeat3 = CharacterOptions.selectTraitOption('feat/select-general-3', {
  name: 'General Feat (Level 3)',
  filter: { archetypes: [GeneralFeat, [FeatLevel1, FeatLevel2, FeatLevel3]] },
})
