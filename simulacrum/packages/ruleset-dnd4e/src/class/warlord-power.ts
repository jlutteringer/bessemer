import { Abilities, Effects, Traits } from '@simulacrum/ruleset'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import * as ActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import {
  AtWillPower,
  AttackPower,
  DailyPower,
  EncounterPower,
  PowerLevel1,
  PowerLevel2,
  PowerLevel3,
  PowerLevel5,
  UtilityPower,
} from '@simulacrum/ruleset-dnd4e/archetype'
import { Warlord } from '@simulacrum/ruleset-dnd4e/class/class-warlord'

// Generated from the Player's Handbook Warlord powers, levels 1-5. Powers are learned through character options, so they
// aren't universal. Encounter powers come back after a short rest, daily powers after an extended rest.

export const CommandersStrike = Abilities.defineAbility('warlord/power/commanders-strike', {
  name: "Commander's Strike",
  description: '*With a shout, you command an ally to attack.*',
  universal: false,
  archetypes: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      "**Warlord Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** An ally of your choice makes a melee basic attack against the target\n\n**Hit:** Ally's basic attack damage + your Intelligence modifier."
    ),
  ],
  actions: [{ name: "Commander's Strike", action: ActionTypes.StandardAction }],
})

export const FuriousSmash = Abilities.defineAbility('warlord/power/furious-smash', {
  name: 'Furious Smash',
  description:
    "*You slam your shield into your enemy, bash him with your weapon's haft, or drive your shoulder into his gut. Your attack doesn't do much damage—but your anger inspires your ally to match your ferocity.*",
  universal: false,
  archetypes: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. Fortitude\n\n**Hit:** Deal damage equal to your Strength modifier, and then choose one ally adjacent to either you or the target. This ally applies your Charisma modifier as a power bonus to the attack roll and the damage roll on his or her next attack against the target. If the ally does not attack the target by the end of his or her next turn, the bonus is lost.'
    ),
  ],
  actions: [{ name: 'Furious Smash', action: ActionTypes.StandardAction }],
})

export const VipersStrike = Abilities.defineAbility('warlord/power/vipers-strike', {
  name: "Viper's Strike",
  description: '*You trick your adversary into making a tactical error that gives your comrade a chance to strike.*',
  universal: false,
  archetypes: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.\n\n**Effect:** If the target shifts before the start of your next turn, it provokes an opportunity attack from an ally of your choice.'
    ),
  ],
  actions: [{ name: "Viper's Strike", action: ActionTypes.StandardAction }],
})

export const WolfPackTactics = Abilities.defineAbility('warlord/power/wolf-pack-tactics', {
  name: 'Wolf Pack Tactics',
  description: '*Step by step, you and your friends surround the enemy.*',
  universal: false,
  archetypes: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Special:** Before you attack, you let one ally adjacent to either you or the target shift 1 square as a free action.\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Wolf Pack Tactics', action: ActionTypes.StandardAction }],
})

export const GuardingAttack = Abilities.defineAbility('warlord/power/guarding-attack', {
  name: 'Guarding Attack',
  description:
    "*With a calculated strike, you knock your adversary off balance and grant your comrade-in-arms some protection against the villain's attacks.*",
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      "**Warlord Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage. Until the end of your next turn, one ally adjacent to either you or the target gains a +2 power bonus to AC against the target's attacks.\n\n**Inspiring Presence:** The power bonus to AC equals 1 + your Charisma modifier."
    ),
  ],
  actions: [{ name: 'Guarding Attack', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const HammerAndAnvil = Abilities.defineAbility('warlord/power/hammer-and-anvil', {
  name: 'Hammer and Anvil',
  description: '*You land a ringing blow against your foe, inspiring a nearby ally to strike a blow of his own.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. Reflex\n\n**Hit:** 1[W] + Strength modifier damage. One ally adjacent to the target makes a melee basic attack against it as a free action. The ally adds your Charisma modifier to the damage.'
    ),
  ],
  actions: [{ name: 'Hammer and Anvil', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const LeafOnTheWind = Abilities.defineAbility('warlord/power/leaf-on-the-wind', {
  name: 'Leaf on the Wind',
  description: '*Like a leaf caught in the autumn wind, your foe is driven by the flow of battle. Your fierce attacks force him to give ground.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage. You or an ally adjacent to the target swaps places with the target.'
    ),
  ],
  actions: [{ name: 'Leaf on the Wind', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const WarlordsFavor = Abilities.defineAbility('warlord/power/warlords-favor', {
  name: "Warlord's Favor",
  description: '*With a calculated blow, you leave your adversary exposed to an imminent attack from one of your closest allies.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage. One ally within 5 squares of you gains a +2 power bonus to attack rolls against the target until the end of your next turn.\n\n**Tactical Presence:** The bonus to attack rolls that you grant equals 1 + your Intelligence modifier.'
    ),
  ],
  actions: [{ name: "Warlord's Favor", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BastionOfDefense = Abilities.defineAbility('warlord/power/bastion-of-defense', {
  name: 'Bastion of Defense',
  description: '*Honorable warriors never fall!*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage. Allies within 5 squares of you gain a +1 power bonus to all defenses until the end of the encounter.\n\n**Effect:** Allies within 5 squares of you gain temporary hit points equal to 5 + your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Bastion of Defense', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const LeadTheAttack = Abilities.defineAbility('warlord/power/lead-the-attack', {
  name: 'Lead the Attack',
  description: '*Under your direction, arrows hit their marks and blades drive home.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage. Until the end of the encounter, you and each ally within 5 squares of you gain a power bonus to attack rolls against the target equal to 1 + your Intelligence modifier.\n\n**Miss:** Until the end of the encounter, you and each ally within 5 squares of you gain a +1 power bonus to attack rolls against the target.'
    ),
  ],
  actions: [{ name: 'Lead the Attack', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const PinTheFoe = Abilities.defineAbility('warlord/power/pin-the-foe', {
  name: 'Pin the Foe',
  description: '*No matter where your foe turns, one of your allies is waiting for him.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage.\n\n**Effect:** Until the end of the encounter, the target cannot shift if at least two of your allies (or you and one ally) are adjacent to it.'
    ),
  ],
  actions: [{ name: 'Pin the Foe', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const WhiteRavenOnslaught = Abilities.defineAbility('warlord/power/white-raven-onslaught', {
  name: 'White Raven Onslaught',
  description:
    '*You lead the way with a powerful attack, using your success to create an opportunity for one of your allies. Each of your comrades in turn seizes on your example and begins to display true teamwork.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage, and you slide an adjacent ally 1 square. Until the end of the encounter, whenever you or an ally within 10 squares of you makes a successful attack, the attacker slides an adjacent ally 1 square.\n\n**Miss:** Choose one ally within 10 squares. Until the end of the encounter, the ally slides an adjacent ally 1 square after making a successful attack.'
    ),
  ],
  actions: [{ name: 'White Raven Onslaught', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AidTheInjured = Abilities.defineAbility('warlord/power/aid-the-injured', {
  name: 'Aid the Injured',
  description: '*Your presence is both a comfort and an inspiration.*',
  universal: false,
  archetypes: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Utility 2**\n\n**Encounter** ✦ Healing, Martial\n\n**Standard Action** · Melee touch\n\n**Target:** You or one adjacent ally\n\n**Effect:** The target can spend a healing surge.'
    ),
  ],
  actions: [{ name: 'Aid the Injured', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CrescendoOfViolence = Abilities.defineAbility('warlord/power/crescendo-of-violence', {
  name: 'Crescendo of Violence',
  description: '*A timely critical hit affords you the opportunity to rally a wounded ally.*',
  universal: false,
  archetypes: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Utility 2**\n\n**Encounter** ✦ Martial\n\n**Immediate Reaction** · Ranged 5\n\n**Trigger:** An ally within range scores a critical hit\n\n**Effect:** The ally gains temporary hit points equal to your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Crescendo of Violence', action: ActionTypes.ImmediateReaction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const KnightsMove = Abilities.defineAbility('warlord/power/knights-move', {
  name: "Knight's Move",
  description: '*With a sharp wave of your arm, you direct one of your allies to a more tactically advantageous position.*',
  universal: false,
  archetypes: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Utility 2**\n\n**Encounter** ✦ Martial\n\n**Move Action** · Ranged 10\n\n**Target:** One ally\n\n**Effect:** The target takes a move action as a free action.'
    ),
  ],
  actions: [{ name: "Knight's Move", action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShakeItOff = Abilities.defineAbility('warlord/power/shake-it-off', {
  name: 'Shake It Off',
  description: '*You convince yourself or an ally to shake off a debilitating effect.*',
  universal: false,
  archetypes: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Utility 2**\n\n**Encounter** ✦ Martial\n\n**Minor Action** · Ranged 10\n\n**Target:** You or one ally\n\n**Effect:** The target makes a saving throw with a power bonus equal to your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Shake It Off', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const HoldTheLine = Abilities.defineAbility('warlord/power/hold-the-line', {
  name: 'Hold the Line',
  description: '*With a snap series of commands, you keep your allies in formation and well defended as you assault your adversary.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage.\n\n**Effect:** Until the end of your next turn, allies adjacent to you gain a +2 power bonus to AC and cannot be pulled, pushed, or slid.'
    ),
  ],
  actions: [{ name: 'Hold the Line', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const InspiringWarCry = Abilities.defineAbility('warlord/power/inspiring-war-cry', {
  name: 'Inspiring War Cry',
  description:
    '*As you strike, you shout a fierce war cry that heartens a nearby ally. He immediately attempts to shake off whatever condition troubles him most.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage.\n\n**Effect:** One ally who can hear you and is within 5 squares of you makes a saving throw.'
    ),
  ],
  actions: [{ name: 'Inspiring War Cry', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SteelMonsoon = Abilities.defineAbility('warlord/power/steel-monsoon', {
  name: 'Steel Monsoon',
  description:
    '*You leap into the fray with a wild, whirling attack—but your movements are carefully calculated to distract nearby enemies and give your allies a chance to move into position.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and one ally within 5 squares of you can shift 1 square.\n\n**Tactical Presence:** The number of allies who can shift equals your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Steel Monsoon', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const WarlordsStrike = Abilities.defineAbility('warlord/power/warlords-strike', {
  name: "Warlord's Strike",
  description: "*One convincing cut is all you need to reveal the enemy's weakness and spur your allies into finishing him off.*",
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage. Until the end of your next turn, all of your allies gain a +2 bonus to damage rolls against the target.\n\n**Inspiring Presence:** The bonus to damage rolls equals 1 + your Charisma modifier.'
    ),
  ],
  actions: [{ name: "Warlord's Strike", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const StandTheFallen = Abilities.defineAbility('warlord/power/stand-the-fallen', {
  name: 'Stand the Fallen',
  description:
    '*You will not be denied victory! A determined strike lifts the spirits of your beleaguered allies and restores their fighting spirit.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 5**\n\n**Daily** ✦ Healing, Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage.\n\n**Effect:** Each ally within 10 squares can spend a healing surge and regains additional hit points equal to your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Stand the Fallen', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const TurningPoint = Abilities.defineAbility('warlord/power/turning-point', {
  name: 'Turning Point',
  description: '*A well-placed strike catches your foe off guard and allows you or a nearby ally to shake off some effect.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 5**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage. You or one ally within 5 squares makes a saving throw.\n\n**Miss:** You or one ally makes a saving throw against one effect that the target caused and that a save can end.'
    ),
  ],
  actions: [{ name: 'Turning Point', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const VillainsNightmare = Abilities.defineAbility('warlord/power/villains-nightmare', {
  name: "Villain's Nightmare",
  description: '*You use weapon thrusts, lunges, and parries to hedge in your adversary, preventing him from moving away from you.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 5**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. Reflex\n\n**Hit:** 3[W] + Strength modifier damage.\n\n**Effect:** Until the end of the encounter, when you are adjacent to the target and it walks or runs, you can cancel that movement as an immediate interrupt.'
    ),
  ],
  actions: [{ name: "Villain's Nightmare", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AllWarlordPowers = [
  CommandersStrike,
  FuriousSmash,
  VipersStrike,
  WolfPackTactics,
  GuardingAttack,
  HammerAndAnvil,
  LeafOnTheWind,
  WarlordsFavor,
  BastionOfDefense,
  LeadTheAttack,
  PinTheFoe,
  WhiteRavenOnslaught,
  AidTheInjured,
  CrescendoOfViolence,
  KnightsMove,
  ShakeItOff,
  HoldTheLine,
  InspiringWarCry,
  SteelMonsoon,
  WarlordsStrike,
  StandTheFallen,
  TurningPoint,
  VillainsNightmare,
]
