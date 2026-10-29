import { Abilities, ActionEffects, Attributes, CharacterEffects, Rolls, Traits } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import { Burning, Primed, Stunned } from '@simulacrum/ruleset-khydrian-drift/condition'
import { Mechanical } from '@simulacrum/ruleset-khydrian-drift/creature-type'
import { Acid, Electric, Fire } from '@simulacrum/ruleset-khydrian-drift/damage-type'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { Allied, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { GeneralLoadoutSlot, LargeTechHardpoint, MediumTechHardpoint, SmallTechHardpoint } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Omnitool } from '@simulacrum/ruleset-khydrian-drift/tech-hardpoint'
import { Stamina } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import {
  ArmorClass,
  DamageBand,
  FortitudeDefense,
  IntelligenceAttackRating,
  IntelligencePotency,
  RangeBand,
  ReflexDefense,
  StaminaCost,
} from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const FutureWarfare = Traits.defineTrait('technology/future-warfare', {
  name: 'Future Warfare',
  description:
    '*"And now nothing will be restrained from them, which they have imagined to do."*\n\nMegacorp research divisions treat the battlefield as a testing ground, and their prototypes leak onto the street within a product cycle. Future Warfare is the practice of mastering that bleeding-edge hardware before it\'s patched, recalled or replaced by the next model.',
  tags: [Primary],
  prerequisites: [],
  effects: [CharacterEffects.gainLoadoutSlot(SmallTechHardpoint), CharacterEffects.gainLoadoutSlot(MediumTechHardpoint)],
})

export const MountedSystems = Traits.defineTrait('technology/mounted-systems', {
  name: 'Mounted Systems',
  description:
    '*"Furbish the spears, and put on the brigandines."*\n\nChop shops along every freight corridor will weld a hardpoint mount to anything that walks in with cash, and corporate armorers do the same work with better tolerances and a non-disclosure agreement. Either way the result is the same: a second rig fixed to your frame, ready to take whatever module the next job calls for.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(FutureWarfare)],
  effects: [
    CharacterEffects.gainLoadoutSlot(SmallTechHardpoint),
    CharacterEffects.gainLoadoutSlot(SmallTechHardpoint),
    CharacterEffects.gainLoadoutSlot(MediumTechHardpoint),
  ],
})

export const WeaponsPlatform = Traits.defineTrait('technology/weapons-platform', {
  name: 'Weapons Platform',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(MountedSystems)],
  effects: [CharacterEffects.gainLoadoutSlot(LargeTechHardpoint)],
})

export const LivingBomb = Abilities.defineAbility('technology/living-bomb', {
  name: 'Living Bomb',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(FutureWarfare), Abilities.abilityPrerequisite(Omnitool)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: RangeBand.Medium, count: 1 } },
      potency: IntelligencePotency,
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
      targeting: { area: { range: 0, count: 1, area: { type: AreaShape.Sphere, radius: 3 } } },
      potency: IntelligencePotency,
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
  prerequisites: [Traits.traitPrerequisite(FutureWarfare), Abilities.abilityPrerequisite(Omnitool)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: RangeBand.Medium, count: 1 } },
      potency: IntelligencePotency,
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
  prerequisites: [Traits.traitPrerequisite(FutureWarfare), Abilities.abilityPrerequisite(Omnitool)],
  actions: [
    {
      action: ActionTypes.MinorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: RangeBand.Touch, count: 1, filter: { tags: [Allied] } } },
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
  prerequisites: [Traits.traitPrerequisite(FutureWarfare), Abilities.abilityPrerequisite(Omnitool)],
  actions: [
    {
      action: ActionTypes.MinorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: RangeBand.Medium, count: 1, filter: { tags: [Primed, Burning] } } },
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
  prerequisites: [Traits.traitPrerequisite(FutureWarfare), Abilities.abilityPrerequisite(Omnitool)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { area: { range: 0, count: 1, area: { type: AreaShape.Cone, length: 3 } } },
      potency: IntelligencePotency,
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
  prerequisites: [Traits.traitPrerequisite(FutureWarfare), Abilities.abilityPrerequisite(Omnitool)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: RangeBand.Medium, count: 1 } },
      potency: IntelligencePotency,
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
      targeting: { target: { range: RangeBand.Medium, count: 1, filter: { tags: [Mechanical] } } },
      potency: IntelligencePotency,
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
  prerequisites: [Traits.traitPrerequisite(FutureWarfare), Abilities.abilityPrerequisite(Omnitool)],
  actions: [
    {
      description: 'The lightning strikes the first target, then arcs to up to three other creatures near it.',
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.VeryHigh, resource: Stamina }],
      targeting: {
        first: { range: RangeBand.Long, count: 1 },
        arc: { from: 'first', range: RangeBand.Medium, count: 3 },
      },
      potency: IntelligencePotency,
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
  prerequisites: [Traits.traitPrerequisite(FutureWarfare), Abilities.abilityPrerequisite(Omnitool)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: RangeBand.Medium, count: 1 } },
      potency: IntelligencePotency,
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
  prerequisites: [Traits.traitPrerequisite(FutureWarfare)],
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
  prerequisites: [Traits.traitPrerequisite(FutureWarfare)],
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

export const TacticalPayloads = Traits.defineTrait('technology/tactical-payloads', {
  name: 'Tactical Payloads',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(FutureWarfare)],
  effects: [],
})

export const ScorchingRay = Abilities.defineAbility('technology/scorching-ray', {
  name: 'Scorching Ray',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(TacticalPayloads), Abilities.abilityPrerequisite(Omnitool)],
  actions: [
    {
      description: 'You fire three rays. They can strike the same target or different ones, and you make a separate attack for each ray.',
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.High, resource: Stamina }],
      targeting: { target: { range: RangeBand.Long, count: 3 } },
      potency: IntelligencePotency,
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
  prerequisites: [Traits.traitPrerequisite(FutureWarfare), Abilities.abilityPrerequisite(Omnitool)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.High, resource: Stamina }],
      targeting: { area: { range: 0, count: 1, area: { type: AreaShape.Line, length: 20, width: 1 } } },
      potency: IntelligencePotency,
      test: {
        offense: IntelligenceAttackRating,
        defense: ReflexDefense,
        success: [ActionEffects.damage(DamageBand.High, Electric)],
        failure: [ActionEffects.damage(Rolls.multiply(DamageBand.High, 0.5), Electric)],
      },
    },
  ],
})

export const AreaDenial = Traits.defineTrait('technology/area-denial', {
  name: 'Area Denial',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(TacticalPayloads)],
  effects: [],
})
