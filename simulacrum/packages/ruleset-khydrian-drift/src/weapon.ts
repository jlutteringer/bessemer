import { Abilities, Tags, CharacterEffects } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { WeaponLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'

export const Weapon = Tags.defineAbilityTag('weapon', { name: 'Weapon' })

export const Handgun = Abilities.defineAbility('weapon/handgun', {
  name: 'Handgun',
  effects: [
    CharacterEffects.descriptive(
      'Make a ranged weapon attack against a creature in **Medium** range, dealing **1d4** [Ballistic](damage-type:ballistic) damage.\n\nOne-Handed'
    ),
  ],
  tags: [Weapon],
  loadout: WeaponLoadout,
  actions: [{ name: 'Attack with Handgun', action: ActionTypes.MajorAction }],
})

export const Dagger = Abilities.defineAbility('weapon/dagger', {
  name: 'Dagger',
  effects: [
    CharacterEffects.descriptive(
      'Make a melee weapon attack against a creature, dealing **1d6** [Physical](damage-type:physical) damage.\n\nDual Wield'
    ),
  ],
  tags: [Weapon],
  loadout: WeaponLoadout,
  actions: [{ name: 'Attack with Dagger', action: ActionTypes.MajorAction }],
})

export const SubmachineGun = Abilities.defineAbility('weapon/submachine-gun', {
  name: 'Submachine Gun',
  effects: [
    CharacterEffects.descriptive(
      'Make a ranged weapon attack against a creature in **Medium** range, dealing **1d6** [Ballistic](damage-type:ballistic) damage.\n\nOne-Handed'
    ),
  ],
  tags: [Weapon],
  loadout: WeaponLoadout,
  actions: [{ name: 'Attack with Submachine Gun', action: ActionTypes.MajorAction }],
})

export const HandCannon = Abilities.defineAbility('weapon/hand-cannon', {
  name: 'Hand Cannon',
  effects: [
    CharacterEffects.descriptive(
      'Make a ranged weapon attack against a creature in **Short** range, dealing **1d8** [Ballistic](damage-type:ballistic) damage.\n\nOne-Handed'
    ),
  ],
  tags: [Weapon],
  loadout: WeaponLoadout,
  actions: [{ name: 'Attack with Hand Cannon', action: ActionTypes.MajorAction }],
})

export const Carbine = Abilities.defineAbility('weapon/carbine', {
  name: 'Carbine',
  effects: [
    CharacterEffects.descriptive(
      'Make a ranged weapon attack against a creature in **Long** range, dealing **1d10** [Ballistic](damage-type:ballistic) damage.\n\nTwo-Handed'
    ),
  ],
  tags: [Weapon],
  loadout: WeaponLoadout,
  actions: [{ name: 'Attack with Carbine', action: ActionTypes.MajorAction }],
})

export const Shotgun = Abilities.defineAbility('weapon/shotgun', {
  name: 'Shotgun',
  effects: [
    CharacterEffects.descriptive(
      'Make a ranged weapon attack against a creature in **Short** range, dealing **2d6** [Ballistic](damage-type:ballistic) damage.\n\nTwo-Handed'
    ),
  ],
  tags: [Weapon],
  loadout: WeaponLoadout,
  actions: [{ name: 'Attack with Shotgun', action: ActionTypes.MajorAction }],
})

export const SniperRifle = Abilities.defineAbility('weapon/sniper-rifle', {
  name: 'Sniper Rifle',
  effects: [
    CharacterEffects.descriptive(
      'Make a ranged weapon attack against a creature in **Extreme** range, dealing **1d12** [Ballistic](damage-type:ballistic) damage. You have Disadvantage when attacking targets in Medium range or closer.\n\nTwo-Handed'
    ),
  ],
  tags: [Weapon],
  loadout: WeaponLoadout,
  actions: [{ name: 'Attack with Sniper Rifle', action: ActionTypes.MajorAction }],
})

export const Bow = Abilities.defineAbility('weapon/bow', {
  name: 'Bow',
  effects: [
    CharacterEffects.descriptive(
      'Make a ranged weapon attack against a creature in **Long** range, dealing **1d8** [Physical](damage-type:physical) damage.\n\nTwo-Handed'
    ),
  ],
  tags: [Weapon],
  loadout: WeaponLoadout,
  actions: [{ name: 'Attack with Bow', action: ActionTypes.MajorAction }],
})

export const Weapons = [Handgun, Dagger, SubmachineGun, HandCannon, Carbine, Shotgun, SniperRifle, Bow]
