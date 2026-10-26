import { Abilities, Loadout, Traits } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { GeneralLoadoutSlot } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Stamina } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import { DamageBand, StaminaCost } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const SmallTechHardpoint = Loadout.defineLoadoutType('small-tech-hardpoint', { name: 'Small Tech Hardpoint' })

export const MediumTechHardpoint = Loadout.defineLoadoutType('medium-tech-hardpoint', { name: 'Medium Tech Hardpoint' })

export const LargeTechHardpoint = Loadout.defineLoadoutType('large-tech-hardpoint', { name: 'Large Tech Hardpoint' })

export const TechNovice = Traits.defineTrait('technology/novice', {
  name: 'Tech Novice',
  tags: [Primary],
  prerequisites: [],
  effects: [],
})

export const LivingBomb = Abilities.defineAbility('technology/living-bomb', {
  name: 'Living Bomb',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  actions: [
    {
      name: 'Living Bomb',
      description: `**Attack:** [Intelligence](characteristic:intelligence) vs. [Fortitude](characteristic:fortitude)\n\n**Hit:** The target takes **${DamageBand.Low}** [Fire](content:combat/damage-types) damage during your [Sustain Phase](content:combat/sustain-phase). When the effect ends, if the target is [Primed](content:combat/primed), it explodes and you make a secondary attack against each creature in a 3-square emanation around the target.\n\n**Secondary Attack:** [Intelligence](characteristic:intelligence) vs. [Reflex](characteristic:reflex)\n\n**Hit:** The creature takes **${DamageBand.High}** [Fire](content:combat/damage-types) damage and is affected by *[Living Bomb](ability:technology/living-bomb)*.`,
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: 6, count: 1 } },
      duration: { rounds: 2 },
    },
  ],
})

export const TechAdept = Traits.defineTrait('technology/adept', {
  name: 'Tech Adept',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  effects: [],
})

export const TechMaster = Traits.defineTrait('technology/master', {
  name: 'Tech Master',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(TechAdept)],
  effects: [],
})
