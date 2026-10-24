import { Archetypes } from '@simulacrum/ruleset'

export const Class = Archetypes.defineTraitArchetype('class', { name: 'Class' })
export const Race = Archetypes.defineTraitArchetype('race', { name: 'Race' })
export const ClassFeature = Archetypes.defineTraitArchetype('class-feature', { name: 'Class Feature' })
export const RacialTrait = Archetypes.defineTraitArchetype('racial-trait', { name: 'Racial Trait' })
export const Feat = Archetypes.defineTraitArchetype('feat', { name: 'Feat' })
export const Deity = Archetypes.defineTraitArchetype('deity', { name: 'Deity' })

export const AtWillPower = Archetypes.defineAbilityArchetype('power/at-will', { name: 'At-Will' })
export const EncounterPower = Archetypes.defineAbilityArchetype('power/encounter', { name: 'Encounter' })
export const DailyPower = Archetypes.defineAbilityArchetype('power/daily', { name: 'Daily' })

export const AttackPower = Archetypes.defineAbilityArchetype('power/attack', { name: 'Attack' })
export const UtilityPower = Archetypes.defineAbilityArchetype('power/utility', { name: 'Utility' })
export const Cantrip = Archetypes.defineAbilityArchetype('power/cantrip', { name: 'Cantrip' })

export const PowerLevel1 = Archetypes.defineAbilityArchetype('power/level-1', { name: 'Level 1' })
export const PowerLevel2 = Archetypes.defineAbilityArchetype('power/level-2', { name: 'Level 2' })
export const PowerLevel3 = Archetypes.defineAbilityArchetype('power/level-3', { name: 'Level 3' })
export const PowerLevel5 = Archetypes.defineAbilityArchetype('power/level-5', { name: 'Level 5' })

export const AllArchetypes = [
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
