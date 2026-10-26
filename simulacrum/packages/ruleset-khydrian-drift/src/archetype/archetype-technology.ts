import { Abilities, ActionEffects, Loadout, Traits } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { GeneralLoadoutSlot } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Stamina } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import { DamageBand, FortitudeDefense, IntelligenceAttackRating, ReflexDefense, StaminaCost } from '@simulacrum/ruleset-khydrian-drift/characteristic'

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
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: 6, count: 1 } },
      test: {
        offense: IntelligenceAttackRating,
        defense: FortitudeDefense,
        success: [
          ActionEffects.descriptive(`The target is [Burning](content:combat/burning) (**${DamageBand.Low}** [Fire](content:combat/damage-types)).`, {
            duration: { rounds: 2 },
          }),
        ],
      },
    },
    {
      name: 'Detonation',
      action: ActionTypes.FreeAction,
      annotation: 'When Living Bomb ends on a Primed creature',
      targeting: { area: { range: 0, area: { type: AreaShape.Sphere, radius: 3 }, count: 1 } },
      test: {
        offense: IntelligenceAttackRating,
        defense: ReflexDefense,
        success: [
          ActionEffects.descriptive(
            `The target takes **${DamageBand.High}** [Fire](content:combat/damage-types) damage from the [detonation](content:combat/primed) and is affected by *[Living Bomb](ability:technology/living-bomb)*.`
          ),
        ],
        failure: [ActionEffects.descriptive('The target takes half the damage.')],
      },
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
