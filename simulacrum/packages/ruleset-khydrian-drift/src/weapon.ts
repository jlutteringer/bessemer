import { Abilities, ActionEffects, Rolls, Tags } from '@simulacrum/ruleset'
import { Potency } from '@simulacrum/ruleset/damage'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { WeaponLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Ballistic, Physical } from '@simulacrum/ruleset-khydrian-drift/damage-type'
import {
  AgilityAttackRating,
  AgilityPotency,
  ArmorClass,
  BrawnAttackRating,
  BrawnPotency,
  RangeBand,
} from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Weapon = Tags.defineAbilityTag('weapon', { name: 'Weapon' })

export const OneHanded = Tags.defineAbilityTag('weapon/one-handed', {
  name: 'One-Handed',
  description: 'This weapon is wielded in one hand.',
})

export const TwoHanded = Tags.defineAbilityTag('weapon/two-handed', {
  name: 'Two-Handed',
  description: 'This weapon requires two hands to wield.',
})

export const DualWield = Tags.defineAbilityTag('weapon/dual-wield', {
  name: 'Dual Wield',
  description: 'This weapon can be wielded alongside another Dual Wield weapon for [two-weapon fighting](content:combat/two-weapon-fighting).',
})

export const Handgun = Abilities.defineAbility('weapon/handgun', {
  name: 'Handgun',
  tags: [Weapon, OneHanded],
  loadout: WeaponLoadout,
  actions: [
    {
      name: 'Attack with Handgun',
      action: ActionTypes.MajorAction,
      targeting: { target: { range: RangeBand.Medium, count: 1 } },
      potency: AgilityPotency,
      test: {
        offense: AgilityAttackRating,
        defense: ArmorClass,
        success: [ActionEffects.damage(Rolls.sum([Rolls.dice(1, 4), Potency]), Ballistic)],
      },
    },
  ],
})

export const Dagger = Abilities.defineAbility('weapon/dagger', {
  name: 'Dagger',
  tags: [Weapon, DualWield],
  loadout: WeaponLoadout,
  actions: [
    {
      name: 'Attack with Dagger',
      action: ActionTypes.MajorAction,
      targeting: { target: { range: RangeBand.Touch, count: 1 } },
      potency: BrawnPotency,
      test: {
        offense: BrawnAttackRating,
        defense: ArmorClass,
        success: [ActionEffects.damage(Rolls.sum([Rolls.dice(1, 6), Potency]), Physical)],
      },
    },
  ],
})

export const SubmachineGun = Abilities.defineAbility('weapon/submachine-gun', {
  name: 'Submachine Gun',
  tags: [Weapon, OneHanded],
  loadout: WeaponLoadout,
  actions: [
    {
      name: 'Attack with Submachine Gun',
      action: ActionTypes.MajorAction,
      targeting: { target: { range: RangeBand.Medium, count: 1 } },
      potency: AgilityPotency,
      test: {
        offense: AgilityAttackRating,
        defense: ArmorClass,
        success: [ActionEffects.damage(Rolls.sum([Rolls.dice(1, 6), Potency]), Ballistic)],
      },
    },
  ],
})

export const HandCannon = Abilities.defineAbility('weapon/hand-cannon', {
  name: 'Hand Cannon',
  tags: [Weapon, OneHanded],
  loadout: WeaponLoadout,
  actions: [
    {
      name: 'Attack with Hand Cannon',
      action: ActionTypes.MajorAction,
      targeting: { target: { range: RangeBand.Short, count: 1 } },
      potency: AgilityPotency,
      test: {
        offense: AgilityAttackRating,
        defense: ArmorClass,
        success: [ActionEffects.damage(Rolls.sum([Rolls.dice(1, 8), Potency]), Ballistic)],
      },
    },
  ],
})

export const Carbine = Abilities.defineAbility('weapon/carbine', {
  name: 'Carbine',
  tags: [Weapon, TwoHanded],
  loadout: WeaponLoadout,
  actions: [
    {
      name: 'Attack with Carbine',
      action: ActionTypes.MajorAction,
      targeting: { target: { range: RangeBand.Long, count: 1 } },
      potency: AgilityPotency,
      test: {
        offense: AgilityAttackRating,
        defense: ArmorClass,
        success: [ActionEffects.damage(Rolls.sum([Rolls.dice(1, 10), Potency]), Ballistic)],
      },
    },
  ],
})

export const Shotgun = Abilities.defineAbility('weapon/shotgun', {
  name: 'Shotgun',
  tags: [Weapon, TwoHanded],
  loadout: WeaponLoadout,
  actions: [
    {
      name: 'Attack with Shotgun',
      action: ActionTypes.MajorAction,
      targeting: { target: { range: RangeBand.Short, count: 1 } },
      potency: AgilityPotency,
      test: {
        offense: AgilityAttackRating,
        defense: ArmorClass,
        success: [ActionEffects.damage(Rolls.sum([Rolls.dice(2, 6), Potency]), Ballistic)],
      },
    },
  ],
})

export const SniperRifle = Abilities.defineAbility('weapon/sniper-rifle', {
  name: 'Sniper Rifle',
  tags: [Weapon, TwoHanded],
  loadout: WeaponLoadout,
  actions: [
    {
      name: 'Attack with Sniper Rifle',
      description: 'You have disadvantage when attacking targets within Medium range.',
      action: ActionTypes.MajorAction,
      targeting: { target: { range: RangeBand.Extreme, count: 1 } },
      potency: AgilityPotency,
      test: {
        offense: AgilityAttackRating,
        defense: ArmorClass,
        success: [ActionEffects.damage(Rolls.sum([Rolls.dice(1, 12), Potency]), Ballistic)],
      },
    },
  ],
})

export const Bow = Abilities.defineAbility('weapon/bow', {
  name: 'Bow',
  tags: [Weapon, TwoHanded],
  loadout: WeaponLoadout,
  actions: [
    {
      name: 'Attack with Bow',
      action: ActionTypes.MajorAction,
      targeting: { target: { range: RangeBand.Long, count: 1 } },
      potency: AgilityPotency,
      test: {
        offense: AgilityAttackRating,
        defense: ArmorClass,
        success: [ActionEffects.damage(Rolls.sum([Rolls.dice(1, 8), Potency]), Physical)],
      },
    },
  ],
})

export const WeaponTags = [Weapon, OneHanded, TwoHanded, DualWield]

export const Weapons = [Handgun, Dagger, SubmachineGun, HandCannon, Carbine, Shotgun, SniperRifle, Bow]
