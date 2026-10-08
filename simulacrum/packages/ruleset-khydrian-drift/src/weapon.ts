import { Abilities, Archetypes, Effects } from '@simulacrum/ruleset'
import { ActionType } from '@simulacrum/ruleset/ability'
import { WeaponLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'

export const Weapon = Archetypes.defineArchetype('weapon', { name: 'Weapon' })

export const Handgun = Abilities.defineAbility('weapon/handgun', {
  name: 'Handgun',
  effects: [
    Effects.descriptive(
      '<p>Make a ranged weapon attack against a creature in <strong>Medium</strong> range, dealing <strong>1d4 Ballistic</strong> damage.</p><p>One-Handed</p>'
    ),
  ],
  archetypes: [Weapon],
  actions: [{ name: 'Attack with Handgun', action: ActionType.Standard }],
})

export const Dagger = Abilities.defineAbility('weapon/dagger', {
  name: 'Dagger',
  effects: [
    Effects.descriptive('<p>Make a melee weapon attack against a creature, dealing <strong>1d6 Physical</strong> damage.</p><p>Dual Wield</p>'),
  ],
  archetypes: [Weapon],
  actions: [{ name: 'Attack with Dagger', action: ActionType.Standard }],
})

export const SubmachineGun = Abilities.defineAbility('weapon/submachine-gun', {
  name: 'Submachine Gun',
  effects: [
    Effects.descriptive(
      '<p>Make a ranged weapon attack against a creature in <strong>Medium</strong> range, dealing <strong>1d6 Ballistic</strong> damage.</p><p>One-Handed</p>'
    ),
  ],
  archetypes: [Weapon],
  actions: [{ name: 'Attack with Submachine Gun', action: ActionType.Standard }],
})

export const HandCannon = Abilities.defineAbility('weapon/hand-cannon', {
  name: 'Hand Cannon',
  effects: [
    Effects.descriptive(
      '<p>Make a ranged weapon attack against a creature in <strong>Short</strong> range, dealing <strong>1d8 Ballistic</strong> damage.</p><p>One-Handed</p>'
    ),
  ],
  archetypes: [Weapon],
  actions: [{ name: 'Attack with Hand Cannon', action: ActionType.Standard }],
})

export const Carbine = Abilities.defineAbility('weapon/carbine', {
  name: 'Carbine',
  effects: [
    Effects.descriptive(
      '<p>Make a ranged weapon attack against a creature in <strong>Long</strong> range, dealing <strong>1d10 Ballistic</strong> damage.</p><p>Two-Handed</p>'
    ),
  ],
  archetypes: [Weapon],
  actions: [{ name: 'Attack with Carbine', action: ActionType.Standard }],
})

export const Shotgun = Abilities.defineAbility('weapon/shotgun', {
  name: 'Shotgun',
  effects: [
    Effects.descriptive(
      '<p>Make a ranged weapon attack against a creature in <strong>Short</strong> range, dealing <strong>2d6 Ballistic</strong> damage.</p><p>Two-Handed</p>'
    ),
  ],
  archetypes: [Weapon],
  actions: [{ name: 'Attack with Shotgun', action: ActionType.Standard }],
})

export const SniperRifle = Abilities.defineAbility('weapon/sniper-rifle', {
  name: 'Sniper Rifle',
  effects: [
    Effects.descriptive(
      '<p>Make a ranged weapon attack against a creature in <strong>Extreme</strong> range, dealing <strong>1d12 Ballistic</strong> damage. You have Disadvantage when attacking targets in Medium range or closer.</p><p>Two-Handed</p>'
    ),
  ],
  archetypes: [Weapon],
  actions: [{ name: 'Attack with Sniper Rifle', action: ActionType.Standard }],
})

export const Bow = Abilities.defineAbility('weapon/bow', {
  name: 'Bow',
  effects: [
    Effects.descriptive(
      '<p>Make a ranged weapon attack against a creature in <strong>Long</strong> range, dealing <strong>1d8 Physical</strong> damage.</p><p>Two-Handed</p>'
    ),
  ],
  archetypes: [Weapon],
  actions: [{ name: 'Attack with Bow', action: ActionType.Standard }],
})

export const Weapons = [Handgun, Dagger, SubmachineGun, HandCannon, Carbine, Shotgun, SniperRifle, Bow]

export const gainWeapons = () => Weapons.map((it) => Effects.gainAbility(it, WeaponLoadout))
