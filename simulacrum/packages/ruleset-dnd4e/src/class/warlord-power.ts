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
  PowerLevel6,
  PowerLevel7,
  PowerLevel9,
  PowerLevel10,
  UtilityPower,
} from '@simulacrum/ruleset-dnd4e/tag'
import { Warlord } from '@simulacrum/ruleset-dnd4e/class/class-warlord'

// Generated from the Player's Handbook Warlord powers, levels 1-10. Powers are learned through character options, so they
// aren't universal. Encounter powers come back after a short rest, daily powers after an extended rest.

export const CommandersStrike = Abilities.defineAbility('warlord/power/commanders-strike', {
  name: "Commander's Strike",
  description: '*With a shout, you command an ally to attack.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
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
  tags: [AtWillPower, AttackPower, PowerLevel1],
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
  tags: [AtWillPower, AttackPower, PowerLevel1],
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
  tags: [AtWillPower, AttackPower, PowerLevel1],
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
  tags: [EncounterPower, AttackPower, PowerLevel1],
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
  tags: [EncounterPower, AttackPower, PowerLevel1],
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
  tags: [EncounterPower, AttackPower, PowerLevel1],
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
  tags: [EncounterPower, AttackPower, PowerLevel1],
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
  tags: [DailyPower, AttackPower, PowerLevel1],
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
  tags: [DailyPower, AttackPower, PowerLevel1],
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
  tags: [DailyPower, AttackPower, PowerLevel1],
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
  tags: [DailyPower, AttackPower, PowerLevel1],
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
  tags: [EncounterPower, UtilityPower, PowerLevel2],
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
  tags: [EncounterPower, UtilityPower, PowerLevel2],
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
  tags: [EncounterPower, UtilityPower, PowerLevel2],
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
  tags: [EncounterPower, UtilityPower, PowerLevel2],
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
  tags: [EncounterPower, AttackPower, PowerLevel3],
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
  tags: [EncounterPower, AttackPower, PowerLevel3],
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
  tags: [EncounterPower, AttackPower, PowerLevel3],
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
  tags: [EncounterPower, AttackPower, PowerLevel3],
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
  tags: [DailyPower, AttackPower, PowerLevel5],
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
  tags: [DailyPower, AttackPower, PowerLevel5],
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
  tags: [DailyPower, AttackPower, PowerLevel5],
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

export const GuideTheCharge = Abilities.defineAbility('warlord/power/guide-the-charge', {
  name: 'Guide the Charge',
  description: "*You direct your ally's charge, allowing him to strike a deadlier blow and push his foe backward.*",
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      "**Warlord Utility 6**\n\n**Encounter** ✦ Martial\n\n**Immediate Interrupt** · Ranged 10\n\n**Trigger:** An ally charges\n\n**Effect:** If the ally hits, he or she adds your Intelligence modifier to the damage roll and pushes the attack's target 2 squares. The ally can shift 2 squares to remain adjacent to the target."
    ),
  ],
  actions: [{ name: 'Guide the Charge', action: ActionTypes.ImmediateInterrupt }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const InspiringReaction = Abilities.defineAbility('warlord/power/inspiring-reaction', {
  name: 'Inspiring Reaction',
  description: '*As soon as an ally is wounded, you spring forward with help and healing.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Utility 6**\n\n**Encounter** ✦ Healing, Martial\n\n**Immediate Reaction** · Melee touch\n\n**Trigger:** You or an adjacent ally takes damage\n\n**Effect:** You or the ally can spend a healing surge and regain additional hit points equal to your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Inspiring Reaction', action: ActionTypes.ImmediateReaction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const QuickStep = Abilities.defineAbility('warlord/power/quick-step', {
  name: 'Quick Step',
  description: '*You spur an ally to move faster.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      "**Warlord Utility 6**\n\n**Daily** ✦ Martial\n\n**Minor Action** · Ranged 10\n\n**Target:** One ally\n\n**Effect:** Increase the ally's speed by 2 until the end of the encounter."
    ),
  ],
  actions: [{ name: 'Quick Step', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const StandTough = Abilities.defineAbility('warlord/power/stand-tough', {
  name: 'Stand Tough',
  description: '*You fortify your allies with a few words of encouragement.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Utility 6**\n\n**Daily** ✦ Healing, Martial\n\n**Minor Action** · Close burst 5\n\n**Targets:** You and each ally in burst\n\n**Effect:** The targets regain hit points equal to 10 + your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Stand Tough', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const LionsRoar = Abilities.defineAbility('warlord/power/lions-roar', {
  name: "Lion's Roar",
  description:
    "*With a bloodcurdling roar, you swing your weapon in a wide, sweeping arc that breaks through your enemy's defenses. The blow reinvigorates you or one of your allies in need.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 7**\n\n**Encounter** ✦ Healing, Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage.\n\n**Effect:** You or one ally within 5 squares of you can spend a healing surge.\n\n**Inspiring Presence:** Your ally (but not you) gains additional hit points equal to your Charisma modifier.'
    ),
  ],
  actions: [{ name: "Lion's Roar", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SunderArmor = Abilities.defineAbility('warlord/power/sunder-armor', {
  name: 'Sunder Armor',
  description: "*You probe your opponent's defenses and eventually land a blow that creates a momentary chink in his armor.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage. Until the end of your next turn, any attack roll against the target can score a critical hit on a roll of 18–20.'
    ),
  ],
  actions: [{ name: 'Sunder Armor', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SurpriseAttack = Abilities.defineAbility('warlord/power/surprise-attack', {
  name: 'Surprise Attack',
  description: '*Despite the chaos of battle, you see a golden opportunity for an ally to make a surprising attack.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage. An ally within 5 squares of you makes a basic attack with combat advantage as a free action against a target of his or her choice.\n\n**Tactical Presence:** The ally gains a bonus to the attack roll equal to your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Surprise Attack', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SurroundFoe = Abilities.defineAbility('warlord/power/surround-foe', {
  name: 'Surround Foe',
  description: '*You contain your foe, enabling one of your allies to move around behind him.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      "**Warlord Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage.\n\n**Effect:** You slide one willing ally who is adjacent to the target to any other square adjacent to the target. The ally can move through the target's square."
    ),
  ],
  actions: [{ name: 'Surround Foe', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const IronDragonCharge = Abilities.defineAbility('warlord/power/iron-dragon-charge', {
  name: 'Iron Dragon Charge',
  description:
    '*Like a rampaging iron dragon, you hurl yourself at your adversary, landing a terrific blow that inspires your allies to charge as well.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 9**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Special:** You must charge as part of this attack.\n\n**Hit:** 3[W] + Strength modifier damage.\n\n**Effect:** Until the end of the encounter, as an immediate reaction, an ally of your choice within 5 squares of you can charge a target that you charge.'
    ),
  ],
  actions: [{ name: 'Iron Dragon Charge', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const KnockThemDown = Abilities.defineAbility('warlord/power/knock-them-down', {
  name: 'Knock Them Down',
  description: '*The rhythm of your enemies hitting the ground is music to your ears.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 9**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage, and the target is knocked prone. Every ally within 10 squares of you can move 3 squares and make a melee basic attack against one target of his or her choice as a free action. These attacks deal no damage but knock a target prone on a hit.\n\n**Miss:** Half damage, and the target is knocked prone.'
    ),
  ],
  actions: [{ name: 'Knock Them Down', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const WhiteRavenStrike = Abilities.defineAbility('warlord/power/white-raven-strike', {
  name: 'White Raven Strike',
  description: '*You land a punishing blow that ignites the fire within your allies and keeps them alive on the battlefield.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Attack 9**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage.\n\n**Effect:** One or two allies within 10 squares gain 15 temporary hit points. If you dropped the target to 0 hit points or fewer with this attack, add your Charisma modifier to the temporary hit points your allies gain.'
    ),
  ],
  actions: [{ name: 'White Raven Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DefensiveRally = Abilities.defineAbility('warlord/power/defensive-rally', {
  name: 'Defensive Rally',
  description: '*You marshal your comrades and provide instructions to help them prevail.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Utility 10**\n\n**Daily** ✦ Healing, Martial\n\n**Standard Action** · Close burst 5\n\n**Target:** Each ally in burst\n\n**Effect:** Each target can spend a healing surge and make a saving throw against any single effect that a save can end. In addition, all targets gain a +2 power bonus to all defenses until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Defensive Rally', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const EaseSuffering = Abilities.defineAbility('warlord/power/ease-suffering', {
  name: 'Ease Suffering',
  description: '*Your nearby presence is enough to ease the suffering of your allies.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Utility 10**\n\n**Daily** ✦ Martial\n\n**Minor Action** · Personal\n\n**Effect:** Allies ignore ongoing damage on any turn they start adjacent to you, neither taking ongoing damage nor making saving throws to end it. This effect persists until the end of the encounter or for 5 minutes.'
    ),
  ],
  actions: [{ name: 'Ease Suffering', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const TacticalShift = Abilities.defineAbility('warlord/power/tactical-shift', {
  name: 'Tactical Shift',
  description: "*Your mastery of battle tactics and stern commands allow you to move an allyout of harm's way.*",
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Warlord)],
  effects: [
    Effects.descriptive(
      '**Warlord Utility 10**\n\n**Daily** ✦ Martial\n\n**Immediate Interrupt** · Ranged 10\n\n**Trigger:** A creature hits your ally with a melee or a ranged attack\n\n**Effect:** The ally can shift a number of squares equal to 1 + your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Tactical Shift', action: ActionTypes.ImmediateInterrupt }],
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
  GuideTheCharge,
  InspiringReaction,
  QuickStep,
  StandTough,
  LionsRoar,
  SunderArmor,
  SurpriseAttack,
  SurroundFoe,
  IronDragonCharge,
  KnockThemDown,
  WhiteRavenStrike,
  DefensiveRally,
  EaseSuffering,
  TacticalShift,
]
