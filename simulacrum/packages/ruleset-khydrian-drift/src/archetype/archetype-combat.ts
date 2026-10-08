import { Traits } from '@simulacrum/ruleset'
import { TraitReference } from '@simulacrum/ruleset/trait'
import { Expressions } from '@bessemer/cornerstone/expression'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/archetype'

export const BasicCombatTraining = Traits.defineTrait('combat/basic-training', {
  name: 'Basic Combat Training',
  description:
    '<p><em>"Blessed be the LORD my strength, which teacheth my hands to war, and my fingers to fight."</em></p><p>Every corporate security force, street gang, and private militia teaches the same fundamentals: how to hold a weapon, move under fire, and keep your head when the shooting starts. It is the foundation every other fighting discipline is built on.</p>',
  archetypes: [Primary],
  prerequisites: [],
  effects: [],
})

export const AdvancedCombatTraining = Traits.defineTrait('combat/advanced-training', {
  name: 'Advanced Combat Training',
  description:
    '<p><em>"Iron sharpeneth iron."</em></p><p>Beyond the fundamentals lies training reserved for corporate strike teams, special forces, and veteran mercenaries: coordinated assaults, breaching, and fighting through chaos without hesitation. It is where a fighter begins to specialize, toward the blade or toward the gun.</p>',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(BasicCombatTraining)],
  effects: [],
})

// Melee and Ranged Combat Mastery are mutually exclusive, so each refers to the other by reference before both are defined
const MeleeCombatMasteryReference = 'combat/melee-mastery' as TraitReference
const RangedCombatMasteryReference = 'combat/ranged-mastery' as TraitReference

export const MeleeCombatMastery = Traits.defineTrait(MeleeCombatMasteryReference, {
  name: 'Melee Combat Mastery',
  description:
    '<p><em>"With the jawbone of an ass have I slain a thousand men."</em></p><p>In a world of guns, the fighters who choose to close the distance are either desperate or very, very good. Melee mastery covers blades, blunt weapons, and bare hands, and turns every step inside an enemy\'s reach into an advantage.</p>',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(AdvancedCombatTraining), Expressions.not(Traits.traitPrerequisite(RangedCombatMasteryReference))],
  effects: [],
})

export const RangedCombatMastery = Traits.defineTrait(RangedCombatMasteryReference, {
  name: 'Ranged Combat Mastery',
  description:
    '<p><em>"He hath bent his bow, and made it ready."</em></p><p>Whether with a pistol at ten paces or a rifle across a city block, the discipline is the same: preparation, patience, and precision. Ranged mastery lets a fighter control an engagement from beyond the reach of most enemies.</p>',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(AdvancedCombatTraining), Expressions.not(Traits.traitPrerequisite(MeleeCombatMasteryReference))],
  effects: [],
})
