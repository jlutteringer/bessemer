import { Archetypes } from '@simulacrum/ruleset'

export const Class = Archetypes.defineArchetype('class', { name: 'Class' })
export const Race = Archetypes.defineArchetype('race', { name: 'Race' })
export const ClassFeature = Archetypes.defineArchetype('class-feature', { name: 'Class Feature' })
export const RacialTrait = Archetypes.defineArchetype('racial-trait', { name: 'Racial Trait' })
export const Feat = Archetypes.defineArchetype('feat', { name: 'Feat' })
export const Deity = Archetypes.defineArchetype('deity', { name: 'Deity' })

export const AtWillPower = Archetypes.defineArchetype('power/at-will', { name: 'At-Will' })
export const EncounterPower = Archetypes.defineArchetype('power/encounter', { name: 'Encounter' })
export const DailyPower = Archetypes.defineArchetype('power/daily', { name: 'Daily' })

export const AttackPower = Archetypes.defineArchetype('power/attack', { name: 'Attack' })
export const UtilityPower = Archetypes.defineArchetype('power/utility', { name: 'Utility' })
export const Cantrip = Archetypes.defineArchetype('power/cantrip', { name: 'Cantrip' })

export const PowerLevel1 = Archetypes.defineArchetype('power/level-1', { name: 'Level 1' })
export const PowerLevel2 = Archetypes.defineArchetype('power/level-2', { name: 'Level 2' })
export const PowerLevel3 = Archetypes.defineArchetype('power/level-3', { name: 'Level 3' })
export const PowerLevel5 = Archetypes.defineArchetype('power/level-5', { name: 'Level 5' })

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
