import { Tags } from '@simulacrum/ruleset'

export const Class = Tags.defineTraitTag('class', { name: 'Class' })
export const Race = Tags.defineTraitTag('race', { name: 'Race' })
export const ClassFeature = Tags.defineTraitTag('class-feature', { name: 'Class Feature' })
export const RacialTrait = Tags.defineTraitTag('racial-trait', { name: 'Racial Trait' })
export const Feat = Tags.defineTraitTag('feat', { name: 'Feat' })
export const Deity = Tags.defineTraitTag('deity', { name: 'Deity' })

export const AtWillPower = Tags.defineAbilityTag('power/at-will', { name: 'At-Will' })
export const EncounterPower = Tags.defineAbilityTag('power/encounter', { name: 'Encounter' })
export const DailyPower = Tags.defineAbilityTag('power/daily', { name: 'Daily' })

export const AttackPower = Tags.defineAbilityTag('power/attack', { name: 'Attack' })
export const UtilityPower = Tags.defineAbilityTag('power/utility', { name: 'Utility' })
export const Cantrip = Tags.defineAbilityTag('power/cantrip', { name: 'Cantrip' })

export const PowerLevel1 = Tags.defineAbilityTag('power/level-1', { name: 'Level 1' })
export const PowerLevel2 = Tags.defineAbilityTag('power/level-2', { name: 'Level 2' })
export const PowerLevel3 = Tags.defineAbilityTag('power/level-3', { name: 'Level 3' })
export const PowerLevel5 = Tags.defineAbilityTag('power/level-5', { name: 'Level 5' })

export const AllTags = [
  Class,
  Race,
  ClassFeature,
  RacialTrait,
  Feat,
  Deity,
  AtWillPower,
  EncounterPower,
  DailyPower,
  AttackPower,
  UtilityPower,
  Cantrip,
  PowerLevel1,
  PowerLevel2,
  PowerLevel3,
  PowerLevel5,
]
