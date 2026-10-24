import { Archetypes, Effects, Traits } from '@simulacrum/ruleset'
import { CharacterOptions } from '@simulacrum/ruleset'

export const FightingStyle = Archetypes.defineArchetype('fighting-style', { name: 'Fighting Style' })

export const SelectFightingStyle = CharacterOptions.selectTraitOption('fighting-style/select', {
  name: 'Fighting Style',
  filter: { archetypes: [FightingStyle] },
})

export const Archery = Traits.defineTrait('fighting-style/archery', {
  name: 'Archery',
  description: 'You gain a **+2 bonus** to attack rolls you make with Ranged weapons.',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Archery!')],
})

export const BlindFighting = Traits.defineTrait('fighting-style/blind-fighting', {
  name: 'Blind Fighting',
  description: 'You have **Blindsight** with a range of 10 feet.',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('BlindFighting!')],
})

export const Defense = Traits.defineTrait('fighting-style/defense', {
  name: 'Defense',
  description: "While you're wearing Light, Medium, or Heavy armor, you gain a **+1 bonus** to Armor Class.",
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Defense!')],
})

export const Dueling = Traits.defineTrait('fighting-style/dueling', {
  name: 'Dueling',
  description: "When you're holding a Melee weapon in one hand and no other weapons, you gain a **+2 bonus** to damage rolls with that weapon.",
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Dueling!')],
})

export const GreatWeaponFighting = Traits.defineTrait('fighting-style/great-weapon-fighting', {
  name: 'Great Weapon Fighting',
  description:
    "When you roll damage for an attack with a Melee weapon you're holding in two hands, you can treat any **1 or 2** on a damage die as a **3**. The weapon must have the Two-Handed or Versatile property.",
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('GreatWeaponFighting!')],
})

export const Interception = Traits.defineTrait('fighting-style/interception', {
  name: 'Interception',
  description:
    'When a creature you can see hits another creature within 5 feet of you with an attack roll, you can take a **Reaction** to reduce the damage dealt to the target by **1d10 + your Proficiency Bonus**. You must be holding a Shield or a Simple or Martial weapon to do so.',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Interception!')],
})

export const Protection = Traits.defineTrait('fighting-style/protection', {
  name: 'Protection',
  description:
    'When a creature you can see attacks a target other than you that is within 5 feet of you, you can take a **Reaction** to interpose your Shield. The attack roll, and any other attack rolls against that target, have **Disadvantage** until the start of your next turn, as long as you stay within 5 feet of it. You must be holding a Shield.',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('Protection!')],
})

export const ThrownWeaponFighting = Traits.defineTrait('fighting-style/thrown-weapon-fighting', {
  name: 'Thrown Weapon Fighting',
  description: 'When you hit with a ranged attack using a weapon that has the Thrown property, you gain a **+2 bonus** to the damage roll.',
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('ThrownWeaponFighting!')],
})

export const TwoWeaponFighting = Traits.defineTrait('fighting-style/two-weapon-fighting', {
  name: 'Two-Weapon Fighting',
  description:
    "When you make an extra attack as a result of using a weapon that has the Light property, you can add your **ability modifier** to the damage of that attack if you aren't already adding it.",
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('TwoWeaponFighting!')],
})

export const UnarmedFighting = Traits.defineTrait('fighting-style/unarmed-fighting', {
  name: 'Unarmed Fighting',
  description:
    "Your Unarmed Strikes can deal Bludgeoning damage equal to **1d6 + your Strength modifier**, or **1d8** if you aren't holding any weapons or a Shield.\n\nAt the start of each of your turns, you can deal **1d4** Bludgeoning damage to one creature Grappled by you.",
  archetypes: [FightingStyle],
  effects: [Effects.descriptive('UnarmedFighting!')],
})
