import { Abilities, ActionEffects, Attributes, CharacterEffects, Loadout, Rolls, Traits } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import { Burning, Primed, Stunned } from '@simulacrum/ruleset-khydrian-drift/condition'
import { Mechanical } from '@simulacrum/ruleset-khydrian-drift/creature-type'
import { Acid, Electric, Fire } from '@simulacrum/ruleset-khydrian-drift/damage-type'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { Allied, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { GeneralLoadoutSlot } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Stamina } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import {
  ArmorClass,
  DamageBand,
  FortitudeDefense,
  IntelligenceAttackRating,
  ReflexDefense,
  StaminaCost,
} from '@simulacrum/ruleset-khydrian-drift/characteristic'

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
        success: [ActionEffects.condition(Burning, { duration: { rounds: 2 }, damage: { amount: DamageBand.Low, type: Fire } })],
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
          ActionEffects.damage(DamageBand.High, Fire),
          ActionEffects.descriptive('The target is affected by *[Living Bomb](ability:technology/living-bomb)*.'),
        ],
        failure: [ActionEffects.damage(Rolls.multiply(DamageBand.High, 0.5), Fire)],
      },
    },
  ],
})

export const AcidSplash = Abilities.defineAbility('technology/acid-splash', {
  name: 'Acid Splash',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: 6, count: 1 } },
      test: {
        offense: IntelligenceAttackRating,
        defense: ReflexDefense,
        success: [
          ActionEffects.condition(Burning, { duration: { rounds: 2 }, damage: { amount: DamageBand.Low, type: Acid } }),
          ActionEffects.condition(Primed, { duration: { rounds: 2 } }),
        ],
      },
    },
  ],
})

export const Cauterize = Abilities.defineAbility('technology/cauterize', {
  name: 'Cauterize',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  actions: [
    {
      action: ActionTypes.MinorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: 1, count: 1, filter: { tags: [Allied] } } },
      effects: [
        ActionEffects.damage(Rolls.dice(2, 6), Fire),
        ActionEffects.descriptive('The target can end any number of [conditions](content:combat/conditions) affecting it.'),
      ],
    },
  ],
})

export const Combustion = Abilities.defineAbility('technology/combustion', {
  name: 'Combustion',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  actions: [
    {
      action: ActionTypes.MinorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: 6, count: 1, filter: { tags: [Primed, Burning] } } },
      effects: [
        ActionEffects.descriptive(
          'The target [Detonates](creature-tag:condition/primed) and immediately takes the damage from each of its [Burning](creature-tag:condition/burning) conditions. Then those conditions end.'
        ),
      ],
    },
  ],
})

export const GoutOfFlame = Abilities.defineAbility('technology/gout-of-flame', {
  name: 'Gout of Flame',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { area: { range: 0, area: { type: AreaShape.Cone, length: 3 }, count: 1 } },
      test: {
        offense: IntelligenceAttackRating,
        defense: ReflexDefense,
        success: [ActionEffects.damage(DamageBand.Medium, Fire)],
        failure: [ActionEffects.damage(Rolls.multiply(DamageBand.Medium, 0.5), Fire)],
      },
    },
  ],
})

export const Overload = Abilities.defineAbility('technology/overload', {
  name: 'Overload',
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
        success: [ActionEffects.damage(DamageBand.Low, Electric), ActionEffects.condition(Stunned, { duration: { rounds: 1 } })],
      },
    },
    {
      name: 'Mechanical Overload',
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: 6, count: 1, filter: { tags: [Mechanical] } } },
      test: {
        offense: IntelligenceAttackRating,
        defense: FortitudeDefense,
        success: [ActionEffects.damage(DamageBand.Medium, Electric), ActionEffects.condition(Stunned, { duration: { rounds: 2 } })],
      },
    },
  ],
})

export const ChainLightning = Abilities.defineAbility('technology/chain-lightning', {
  name: 'Chain Lightning',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  actions: [
    {
      description: 'The lightning strikes the first target, then arcs to up to three other creatures near it.',
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.VeryHigh, resource: Stamina }],
      targeting: {
        first: { range: 12, count: 1 },
        arc: { from: 'first', range: 6, count: 3 },
      },
      test: {
        offense: IntelligenceAttackRating,
        defense: ReflexDefense,
        success: [ActionEffects.damage(DamageBand.High, Electric)],
        failure: [ActionEffects.damage(Rolls.multiply(DamageBand.High, 0.5), Electric)],
      },
    },
  ],
})

export const Incinerate = Abilities.defineAbility('technology/incinerate', {
  name: 'Incinerate',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: 6, count: 1 } },
      test: {
        offense: IntelligenceAttackRating,
        defense: ReflexDefense,
        success: [ActionEffects.condition(Burning, { duration: { rounds: 10 }, damage: { amount: DamageBand.Low, type: Fire } })],
      },
    },
  ],
})

export const Arsonist = Traits.defineTrait('technology/arsonist', {
  name: 'Arsonist',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  effects: [
    CharacterEffects.modifyActionEffect(ActionEffects.damageFilter({ damageTypes: [Fire] }), Attributes.modifier(ActionEffects.increasePotency(1))),
    CharacterEffects.modifyActionEffect(
      ActionEffects.conditionFilter({ conditions: [Burning] }),
      Attributes.modifier(ActionEffects.extendDuration(1))
    ),
    CharacterEffects.descriptive('Your [Potency](content:characters/potency) increases by 1 for [Fire](damage-type:fire) damage.'),
    CharacterEffects.descriptive('[Burning](creature-tag:condition/burning) conditions you apply last 1 round longer.'),
  ],
})

export const Stormlord = Traits.defineTrait('technology/stormlord', {
  name: 'Stormlord',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  effects: [
    CharacterEffects.modifyActionEffect(
      ActionEffects.damageFilter({ damageTypes: [Electric] }),
      Attributes.modifier(ActionEffects.increasePotency(1))
    ),
    CharacterEffects.descriptive('Your [Potency](content:characters/potency) increases by 1 for [Electric](damage-type:electric) damage.'),
    CharacterEffects.descriptive(
      'When you deal [Electric](damage-type:electric) damage in an area, you can choose any creatures in the area to be unaffected.'
    ),
  ],
})

export const TechAdept = Traits.defineTrait('technology/adept', {
  name: 'Tech Adept',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  effects: [],
})

export const ScorchingRay = Abilities.defineAbility('technology/scorching-ray', {
  name: 'Scorching Ray',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(TechAdept)],
  actions: [
    {
      description: 'You fire three rays. They can strike the same target or different ones, and you make a separate attack for each ray.',
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.High, resource: Stamina }],
      targeting: { target: { range: 12, count: 3 } },
      test: {
        offense: IntelligenceAttackRating,
        defense: ArmorClass,
        success: [ActionEffects.damage(DamageBand.Low, Fire)],
      },
    },
  ],
})

export const LightningRail = Abilities.defineAbility('technology/lightning-rail', {
  name: 'Lightning Rail',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(TechNovice)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.High, resource: Stamina }],
      targeting: { area: { range: 0, area: { type: AreaShape.Line, length: 20, width: 1 }, count: 1 } },
      test: {
        offense: IntelligenceAttackRating,
        defense: ReflexDefense,
        success: [ActionEffects.damage(DamageBand.High, Electric)],
        failure: [ActionEffects.damage(Rolls.multiply(DamageBand.High, 0.5), Electric)],
      },
    },
  ],
})

export const TechMaster = Traits.defineTrait('technology/master', {
  name: 'Tech Master',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(TechAdept)],
  effects: [],
})
