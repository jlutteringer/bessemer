import { Abilities, Effects, ResourcePools } from '@simulacrum/ruleset'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import * as ActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import { AtWillPower, AttackPower, EncounterPower, UtilityPower } from '@simulacrum/ruleset-dnd4e/tag'

// Powers every character has

export const MeleeBasicAttack = Abilities.defineAbility('common/melee-basic-attack', {
  name: 'Melee Basic Attack',
  description: '*You resort to the simple attack you learned when you first picked up a melee weapon.*',
  tags: [AtWillPower, AttackPower],
  effects: [
    Effects.descriptive(
      '**Basic Attack**\n\n**At-Will** ✦ Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.\n\n**Special:** You can use an unarmed attack as a weapon to make a melee basic attack.'
    ),
  ],
  actions: [{ name: 'Melee Basic Attack', action: ActionTypes.StandardAction }],
})

export const RangedBasicAttack = Abilities.defineAbility('common/ranged-basic-attack', {
  name: 'Ranged Basic Attack',
  description: '*You resort to the simple attack you learned when you first picked up a ranged weapon.*',
  tags: [AtWillPower, AttackPower],
  effects: [
    Effects.descriptive(
      '**Basic Attack**\n\n**At-Will** ✦ Weapon\n\n**Standard Action** · Ranged weapon\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 1[W] + Dexterity modifier damage.\n\nIncrease damage to 2[W] + Dexterity modifier at 21st level.\n\n**Special:** Weapons with the heavy thrown property (see [page 216](content:equipment/weapon-properties)) use Strength instead of Dexterity for attack rolls and damage rolls.\n\n**Special:** Warlocks can use *[eldritch blast](ability:warlock/power/eldritch-blast)* as a ranged basic attack, and wizards can use *[magic missile](ability:wizard/power/magic-missile)* as a ranged basic attack.'
    ),
  ],
  actions: [{ name: 'Ranged Basic Attack', action: ActionTypes.StandardAction }],
})

export const SecondWind = Abilities.defineAbility('common/second-wind', {
  name: 'Second Wind',
  description: '*You dig deep for the strength to keep fighting.*',
  tags: [EncounterPower, UtilityPower],
  effects: [
    Effects.descriptive(
      '**Second Wind**\n\n**Encounter** ✦ Healing\n\n**Standard Action** · Personal\n\n**Effect:** You spend a healing surge and regain hit points equal to your surge value. You gain a +2 bonus to all defenses until the start of your next turn.'
    ),
  ],
  actions: [{ name: 'Second Wind', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

// Shared by every class with the Channel Divinity class feature (cleric, paladin)
export const ChannelDivinity = ResourcePools.defineResourcePool('channel-divinity', {
  name: 'Channel Divinity',
  description: 'You can use only one channel divinity power per encounter, even if you know more than one.',
  size: 1,
  refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }],
})

export const AllCommonPowers = [MeleeBasicAttack, RangedBasicAttack, SecondWind]
