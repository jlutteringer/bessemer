import { CharacterOptions } from '@simulacrum/ruleset'
import {
  Ancestry,
  Background,
  Class,
  FeatLevel1,
  FeatLevel2,
  FeatLevel3,
  FeatLevel4,
  FeatLevel5,
  FeatLevel6,
  FeatLevel7,
  FeatLevel8,
  FeatLevel9,
  FeatLevel10,
  GeneralFeat,
  SkillFeat,
} from '@simulacrum/ruleset-pf2e/tag'

export const SelectAncestry = CharacterOptions.selectTraitOption('ancestry/select', { name: 'Ancestry', filter: { tags: [Ancestry] } })

export const SelectBackground = CharacterOptions.selectTraitOption('background/select', { name: 'Background', filter: { tags: [Background] } })

export const SelectClass = CharacterOptions.selectTraitOption('class/select', { name: 'Class', filter: { tags: [Class] } })

// A feat slot accepts feats of its level or lower

export const SelectSkillFeat1 = CharacterOptions.selectTraitOption('feat/select-skill-1', {
  name: 'Skill Feat (Level 1)',
  filter: { tags: [SkillFeat, FeatLevel1] },
})

export const SelectSkillFeat2 = CharacterOptions.selectTraitOption('feat/select-skill-2', {
  name: 'Skill Feat (Level 2)',
  filter: { tags: [SkillFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectSkillFeat3 = CharacterOptions.selectTraitOption('feat/select-skill-3', {
  name: 'Skill Feat (Level 3)',
  filter: { tags: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3]] },
})

export const SelectSkillFeat4 = CharacterOptions.selectTraitOption('feat/select-skill-4', {
  name: 'Skill Feat (Level 4)',
  filter: { tags: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const SelectSkillFeat5 = CharacterOptions.selectTraitOption('feat/select-skill-5', {
  name: 'Skill Feat (Level 5)',
  filter: { tags: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const SelectGeneralFeat3 = CharacterOptions.selectTraitOption('feat/select-general-3', {
  name: 'General Feat (Level 3)',
  filter: { tags: [GeneralFeat, [FeatLevel1, FeatLevel2, FeatLevel3]] },
})

export const SelectSkillFeat6 = CharacterOptions.selectTraitOption('feat/select-skill-6', {
  name: 'Skill Feat (Level 6)',
  filter: { tags: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6]] },
})

export const SelectSkillFeat8 = CharacterOptions.selectTraitOption('feat/select-skill-8', {
  name: 'Skill Feat (Level 8)',
  filter: { tags: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8]] },
})

export const SelectSkillFeat10 = CharacterOptions.selectTraitOption('feat/select-skill-10', {
  name: 'Skill Feat (Level 10)',
  filter: {
    tags: [SkillFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8, FeatLevel9, FeatLevel10]],
  },
})

export const SelectGeneralFeat7 = CharacterOptions.selectTraitOption('feat/select-general-7', {
  name: 'General Feat (Level 7)',
  filter: { tags: [GeneralFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7]] },
})
