import { Archetypes, Effects, Traits } from '@simulacrum/ruleset'
import { CharacterOptions } from '@simulacrum/ruleset'

export const FightingStyle = Archetypes.defineArchetype('fighting-style', { name: 'Fighting Style' })

export const SelectFightingStyle = CharacterOptions.selectTraitOption('fighting-style/select', { archetypes: [FightingStyle] })

export const Archery = Traits.defineTrait('fighting-style/archery', {
  name: 'Archery',
  description: '<p>You gain a <strong>+2 bonus</strong> to attack rolls you make with Ranged weapons.</p>',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Archery!')],
})

export const BlindFighting = Traits.defineTrait('fighting-style/blind-fighting', {
  name: 'Blind Fighting',
  description: '<p>You have <strong>Blindsight</strong> with a range of 10 feet.</p>',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('BlindFighting!')],
})

export const Defense = Traits.defineTrait('fighting-style/defense', {
  name: 'Defense',
  description: "<p>While you're wearing Light, Medium, or Heavy armor, you gain a <strong>+1 bonus</strong> to Armor Class.</p>",
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Defense!')],
})

export const Dueling = Traits.defineTrait('fighting-style/dueling', {
  name: 'Dueling',
  description:
    "<p>When you're holding a Melee weapon in one hand and no other weapons, you gain a <strong>+2 bonus</strong> to damage rolls with that weapon.</p>",
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Dueling!')],
})

export const GreatWeaponFighting = Traits.defineTrait('fighting-style/great-weapon-fighting', {
  name: 'Great Weapon Fighting',
  description:
    "<p>When you roll damage for an attack with a Melee weapon you're holding in two hands, you can treat any <strong>1 or 2</strong> on a damage die as a <strong>3</strong>. The weapon must have the Two-Handed or Versatile property.</p>",
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('GreatWeaponFighting!')],
})

export const Interception = Traits.defineTrait('fighting-style/interception', {
  name: 'Interception',
  description:
    '<p>When a creature you can see hits another creature within 5 feet of you with an attack roll, you can take a <strong>Reaction</strong> to reduce the damage dealt to the target by <strong>1d10 + your Proficiency Bonus</strong>. You must be holding a Shield or a Simple or Martial weapon to do so.</p>',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Interception!')],
})

export const Protection = Traits.defineTrait('fighting-style/protection', {
  name: 'Protection',
  description:
    '<p>When a creature you can see attacks a target other than you that is within 5 feet of you, you can take a <strong>Reaction</strong> to interpose your Shield. The attack roll, and any other attack rolls against that target, have <strong>Disadvantage</strong> until the start of your next turn, as long as you stay within 5 feet of it. You must be holding a Shield.</p>',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Protection!')],
})

export const ThrownWeaponFighting = Traits.defineTrait('fighting-style/thrown-weapon-fighting', {
  name: 'Thrown Weapon Fighting',
  description:
    '<p>When you hit with a ranged attack using a weapon that has the Thrown property, you gain a <strong>+2 bonus</strong> to the damage roll.</p>',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('ThrownWeaponFighting!')],
})

export const TwoWeaponFighting = Traits.defineTrait('fighting-style/two-weapon-fighting', {
  name: 'Two-Weapon Fighting',
  description:
    "<p>When you make an extra attack as a result of using a weapon that has the Light property, you can add your <strong>ability modifier</strong> to the damage of that attack if you aren't already adding it.</p>",
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('TwoWeaponFighting!')],
})

export const UnarmedFighting = Traits.defineTrait('fighting-style/unarmed-fighting', {
  name: 'Unarmed Fighting',
  description:
    "<p>Your Unarmed Strikes can deal Bludgeoning damage equal to <strong>1d6 + your Strength modifier</strong>, or <strong>1d8</strong> if you aren't holding any weapons or a Shield.</p><p>At the start of each of your turns, you can deal <strong>1d4</strong> Bludgeoning damage to one creature Grappled by you.</p>",
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('UnarmedFighting!')],
})
