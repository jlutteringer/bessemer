import { Combinability, CombinabilityType } from '@bessemer/cornerstone/combinable'

// Bonuses of the same type don't stack: only the highest applies. Proficiency is modelled the same way, so the best rank wins.
export const Proficiency: Combinability = { type: CombinabilityType.Singleton, class: 'proficiency' }
export const CircumstanceBonus: Combinability = { type: CombinabilityType.Singleton, class: 'circumstance' }
export const ItemBonus: Combinability = { type: CombinabilityType.Singleton, class: 'item' }
export const StatusBonus: Combinability = { type: CombinabilityType.Singleton, class: 'status' }
