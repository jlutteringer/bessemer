import { Combinability, CombinabilityType } from '@bessemer/cornerstone/combinable'

export const ArmorBonus: Combinability = { type: CombinabilityType.Singleton, class: 'armor' }
export const EnhancementBonus: Combinability = { type: CombinabilityType.Singleton, class: 'enhancement' }
export const FeatBonus: Combinability = { type: CombinabilityType.Singleton, class: 'feat' }
export const ItemBonus: Combinability = { type: CombinabilityType.Singleton, class: 'item' }
export const PowerBonus: Combinability = { type: CombinabilityType.Singleton, class: 'power' }
export const ProficiencyBonus: Combinability = { type: CombinabilityType.Singleton, class: 'proficiency' }
export const RacialBonus: Combinability = { type: CombinabilityType.Singleton, class: 'racial' }
export const ShieldBonus: Combinability = { type: CombinabilityType.Singleton, class: 'shield' }
