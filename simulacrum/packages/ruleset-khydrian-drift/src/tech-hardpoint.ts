import { Abilities, ActionEffects, Attributes, CharacterEffects, Rolls } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import { Blinded, Burning, Deafened, Primed } from '@simulacrum/ruleset-khydrian-drift/condition'
import { Acid, Fire, Physical } from '@simulacrum/ruleset-khydrian-drift/damage-type'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { Patches } from '@bessemer/cornerstone'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import {
  AgilityAttackRating,
  AgilityPotency,
  DamageBand,
  FlightSpeed,
  FortitudeDefense,
  IntelligencePotency,
  MovementSpeed,
  RangeBand,
  ReflexDefense,
} from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { LargeTechHardpoint, MediumTechHardpoint, SmallTechHardpoint } from '@simulacrum/ruleset-khydrian-drift/loadout'

export const GrenadeBandolier = Abilities.defineAbility('hardpoint/grenade-bandolier', {
  name: 'Grenade Bandolier',
  loadout: SmallTechHardpoint,
  resource: { size: 3, refresh: [{ period: GameTimeUnit.Day, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Impact Grenade',
      action: ActionTypes.MajorAction,
      targeting: { area: { range: RangeBand.Medium, area: { type: AreaShape.Sphere, radius: 2 }, count: 1 } },
      potency: AgilityPotency,
      test: {
        offense: AgilityAttackRating,
        defense: ReflexDefense,
        success: [ActionEffects.damage(DamageBand.Medium, Physical)],
        failure: [ActionEffects.damage(Rolls.multiply(DamageBand.Medium, 0.5), Physical)],
      },
    },
    {
      name: 'Flashbang',
      action: ActionTypes.MajorAction,
      targeting: { area: { range: RangeBand.Medium, area: { type: AreaShape.Sphere, radius: 2 }, count: 1 } },
      test: {
        offense: AgilityAttackRating,
        defense: FortitudeDefense,
        success: [
          ActionEffects.condition(Blinded, { duration: { rounds: 1 } }),
          ActionEffects.condition(Deafened, { duration: { rounds: 1 } }),
          ActionEffects.condition(Primed, { duration: { rounds: 1 } }),
        ],
      },
    },
    {
      name: 'Smoke Grenade',
      action: ActionTypes.MajorAction,
      targeting: { area: { range: RangeBand.Medium, area: { type: AreaShape.Sphere, radius: 3 }, count: 1 } },
      effects: [ActionEffects.descriptive('A cloud of thick smoke fills the area.', { duration: { rounds: 3 } })],
    },
    {
      name: 'Gas Grenade',
      action: ActionTypes.MajorAction,
      targeting: { area: { range: RangeBand.Medium, area: { type: AreaShape.Sphere, radius: 2 }, count: 1 } },
      potency: AgilityPotency,
      test: {
        offense: AgilityAttackRating,
        defense: FortitudeDefense,
        success: [ActionEffects.damage(DamageBand.Low, Acid)],
      },
      effects: [ActionEffects.descriptive('A cloud of toxic gas fills the area.', { duration: { rounds: 3 } })],
    },
  ],
})

export const Medkit = Abilities.defineAbility('hardpoint/medkit', {
  name: 'Medkit',
  loadout: SmallTechHardpoint,
  resource: { size: 3, refresh: [{ period: GameTimeUnit.Day, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      action: ActionTypes.MajorAction,
      targeting: { target: { range: RangeBand.Touch, count: 1 } },
      potency: IntelligencePotency,
      effects: [ActionEffects.healing(DamageBand.Low)],
    },
  ],
})

export const GridIntegratedVisor = Abilities.defineAbility('hardpoint/grid-integrated-visor', {
  name: 'Grid Integrated Visor',
  loadout: SmallTechHardpoint,
})

export const InfraredVisor = Abilities.defineAbility('hardpoint/infrared-visor', {
  name: 'Infrared Visor',
  loadout: SmallTechHardpoint,
})

export const PlasteelExplosive = Abilities.defineAbility('hardpoint/plasteel-explosive', {
  name: 'Plasteel Explosive',
  loadout: SmallTechHardpoint,
})

export const DuelingBrace = Abilities.defineAbility('hardpoint/dueling-brace', {
  name: 'Dueling Brace',
  loadout: SmallTechHardpoint,
})

export const Rebreather = Abilities.defineAbility('hardpoint/rebreather', {
  name: 'Rebreather',
  loadout: SmallTechHardpoint,
})

export const CardioModule = Abilities.defineAbility('hardpoint/cardio-module', {
  name: 'Cardio Module',
  loadout: SmallTechHardpoint,
})

export const GravityBoots = Abilities.defineAbility('hardpoint/gravity-boots', {
  name: 'Gravity Boots',
  loadout: SmallTechHardpoint,
})

export const OpticalSight = Abilities.defineAbility('hardpoint/optical-sight', {
  name: 'Optical Sight',
  loadout: SmallTechHardpoint,
})

export const ExtraAmmunition = Abilities.defineAbility('hardpoint/extra-ammunition', {
  name: 'Extra Ammunition',
  loadout: SmallTechHardpoint,
})

export const GrenadeLauncher = Abilities.defineAbility('hardpoint/grenade-launcher', {
  name: 'Grenade Launcher',
  loadout: MediumTechHardpoint,
})

export const GrapplingHookLauncher = Abilities.defineAbility('hardpoint/grappling-hook-launcher', {
  name: 'Grappling Hook Launcher',
  loadout: MediumTechHardpoint,
})

export const JetBoots = Abilities.defineAbility('hardpoint/jet-boots', {
  name: 'Jet Boots',
  loadout: MediumTechHardpoint,
})

export const Omnitool = Abilities.defineAbility('hardpoint/omnitool', {
  name: 'Omnitool',
  description:
    'A compact fabrication rig that synthesizes the compounds and charges your tech abilities draw on. Tech abilities require an equipped Omnitool.',
  loadout: MediumTechHardpoint,
})

export const Flamethrower = Abilities.defineAbility('hardpoint/flamethrower', {
  name: 'Flamethrower',
  loadout: MediumTechHardpoint,
  resource: { size: 3, refresh: [{ period: GameTimeUnit.Day, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      action: ActionTypes.MajorAction,
      targeting: { area: { range: 0, count: 1, area: { type: AreaShape.Cone, length: 3 } } },
      potency: AgilityPotency,
      test: {
        offense: AgilityAttackRating,
        defense: ReflexDefense,
        success: [ActionEffects.condition(Burning, { duration: { rounds: 2 }, damage: { amount: DamageBand.Low, type: Fire } })],
      },
    },
  ],
})

export const EmpLauncher = Abilities.defineAbility('hardpoint/emp-launcher', {
  name: 'EMP Launcher',
  loadout: MediumTechHardpoint,
})

export const NetLauncher = Abilities.defineAbility('hardpoint/net-launcher', {
  name: 'Net Launcher',
  loadout: MediumTechHardpoint,
})

export const AimStabilizer = Abilities.defineAbility('hardpoint/aim-stabilizer', {
  name: 'Aim Stabilizer',
  loadout: MediumTechHardpoint,
})

export const EraduStrengthAmplifier = Abilities.defineAbility('hardpoint/eradu-strength-amplifier', {
  name: 'Eradu Strength Amplifier',
  loadout: MediumTechHardpoint,
})

export const EnvironmentalControlSystems = Abilities.defineAbility('hardpoint/environmental-control-systems', {
  name: 'Environmental Control Systems',
  loadout: MediumTechHardpoint,
})

export const Jetpack = Abilities.defineAbility('hardpoint/jetpack', {
  name: 'Jetpack',
  loadout: LargeTechHardpoint,
  effects: [
    CharacterEffects.modifyCharacteristic(FlightSpeed, Attributes.modifier(Patches.set(NumericExpressions.sum([MovementSpeed.variable, 1])))),
  ],
})

export const ShieldGenerator = Abilities.defineAbility('hardpoint/shield-generator', {
  name: 'Shield Generator',
  loadout: LargeTechHardpoint,
})

export const JavelinMissileSystem = Abilities.defineAbility('hardpoint/javelin-missile-system', {
  name: 'Javelin Missile System',
  loadout: LargeTechHardpoint,
})

export const SentryDronePackage = Abilities.defineAbility('hardpoint/sentry-drone-package', {
  name: 'Sentry Drone Package',
  loadout: LargeTechHardpoint,
})

export const AllHardpoints = [
  GrenadeBandolier,
  Medkit,
  InfraredVisor,
  PlasteelExplosive,
  DuelingBrace,
  Rebreather,
  CardioModule,
  GravityBoots,
  OpticalSight,
  GridIntegratedVisor,
  ExtraAmmunition,
  GrenadeLauncher,
  GrapplingHookLauncher,
  JetBoots,
  Omnitool,
  Flamethrower,
  EmpLauncher,
  NetLauncher,
  AimStabilizer,
  EraduStrengthAmplifier,
  EnvironmentalControlSystems,
  Jetpack,
  ShieldGenerator,
  JavelinMissileSystem,
  SentryDronePackage,
]
