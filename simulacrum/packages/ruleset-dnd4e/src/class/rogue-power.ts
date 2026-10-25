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
import { Rogue } from '@simulacrum/ruleset-dnd4e/class/class-rogue'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'

// Generated from the Player's Handbook Rogue powers, levels 1-10. Powers are learned through character options, so they
// aren't universal. Encounter powers come back after a short rest, daily powers after an extended rest.

export const DeftStrike = Abilities.defineAbility('rogue/power/deft-strike', {
  name: 'Deft Strike',
  description: '*A final lunge brings you into an advantageous position.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding a crossbow, a light blade, or a sling.\n\n**Target:** One creature\n\n**Special:** You can move 2 squares before the attack.\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 1[W] + Dexterity modifier damage.\n\nIncrease damage to 2[W] + Dexterity modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Deft Strike', action: ActionTypes.StandardAction }],
})

export const PiercingStrike = Abilities.defineAbility('rogue/power/piercing-strike', {
  name: 'Piercing Strike',
  description: '*A needle-sharp point slips past armor and into tender flesh.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. Reflex\n\n**Hit:** 1[W] + Dexterity modifier damage.\n\nIncrease damage to 2[W] + Dexterity modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Piercing Strike', action: ActionTypes.StandardAction }],
})

export const RiposteStrike = Abilities.defineAbility('rogue/power/riposte-strike', {
  name: 'Riposte Strike',
  description: '*With a calculated strike, you leave your foe vulnerable to an adroit riposte should he dare attack you.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 1[W] + Dexterity modifier damage. If the target attacks you before the start of your next turn, you make your riposte against the target as an immediate interrupt: a Strength vs. AC attack that deals 1[W] + Strength modifier damage.\n\nIncrease damage to 2[W] + Dexterity modifier and riposte to 2[W] + Strength modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Riposte Strike', action: ActionTypes.StandardAction }],
})

export const SlyFlourish = Abilities.defineAbility('rogue/power/sly-flourish', {
  name: 'Sly Flourish',
  description: '*A distracting flourish causes the enemy to forget the blade at his throat.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding a crossbow, a light blade, or a sling.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 1[W] + Dexterity modifier + Charisma modifier damage.\n\nIncrease damage to 2[W] + Dexterity modifier + Charisma modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Sly Flourish', action: ActionTypes.StandardAction }],
})

export const DazingStrike = Abilities.defineAbility('rogue/power/dazing-strike', {
  name: 'Dazing Strike',
  description: '*An expert strike catches your foe by surprise and leaves him reeling from the pain.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 1[W] + Dexterity modifier damage, and the target is dazed until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Dazing Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const KingsCastle = Abilities.defineAbility('rogue/power/kings-castle', {
  name: "King's Castle",
  description: "*It's hard to get to the little guy when he takes cover behind an ally who can crush plate armor in his teeth.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding a crossbow, a light blade, or a sling.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. Reflex\n\n**Hit:** 2[W] + Dexterity modifier damage.\n\n**Effect:** Switch places with a willing adjacent ally.'
    ),
  ],
  actions: [{ name: "King's Castle", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const PositioningStrike = Abilities.defineAbility('rogue/power/positioning-strike', {
  name: 'Positioning Strike',
  description: '*A false stumble and a shove place the enemy exactly where you want him.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. Will\n\n**Hit:** 1[W] + Dexterity modifier damage, and you slide the target 1 square.\n\n**Artful Dodger:** You slide the target a number of squares equal to your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Positioning Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const TorturousStrike = Abilities.defineAbility('rogue/power/torturous-strike', {
  name: 'Torturous Strike',
  description: '*If you twist the blade in the wound just so, you can make your enemy howl in pain.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 2[W] + Dexterity modifier damage.\n\n**Brutal Scoundrel:** You gain a bonus to the damage roll equal to your Strength modifier.'
    ),
  ],
  actions: [{ name: 'Torturous Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BlindingBarrage = Abilities.defineAbility('rogue/power/blinding-barrage', {
  name: 'Blinding Barrage',
  description: '*A rapid barrage of projectiles leaves your enemies clearing the blood from their eyes.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Close blast 3\n\n**Requirement:** You must be wielding a crossbow, a light thrown weapon, or a sling.\n\n**Target:** Each enemy in blast you can see\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 2[W] + Dexterity modifier damage, and the target is blinded until the end of your next turn.\n\n**Miss:** Half damage, and the target is not blinded.'
    ),
  ],
  actions: [{ name: 'Blinding Barrage', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const EasyTarget = Abilities.defineAbility('rogue/power/easy-target', {
  name: 'Easy Target',
  description: '*You deal a staggering blow to your enemy, setting it up for future attacks.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding a crossbow, a light blade, or a sling.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 2[W] + Dexterity modifier damage, and the target is slowed and grants combat advantage to you (save ends both).\n\n**Miss:** Half damage, and the target grants combat advantage to you until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Easy Target', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const TrickStrike = Abilities.defineAbility('rogue/power/trick-strike', {
  name: 'Trick Strike',
  description: '*Through a series of feints and lures, you maneuver your foe right where you want him.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding a crossbow, a light blade, or a sling.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 3[W] + Dexterity modifier damage, and you slide the target 1 square.\n\n**Effect:** Until the end of the encounter, each time you hit the target you slide it 1 square.'
    ),
  ],
  actions: [{ name: 'Trick Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FleetingGhost = Abilities.defineAbility('rogue/power/fleeting-ghost', {
  name: 'Fleeting Ghost',
  description: '*You are stealthy and fleet of foot at the same time.*',
  universal: false,
  tags: [AtWillPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedStealth)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 2**\n\n**At-Will** ✦ Martial\n\n**Move Action** · Personal\n\n**Prerequisite:** You must be trained in Stealth.\n\n**Effect:** You can move your speed and make a Stealth check. You do not take the normal penalty from movement on this check.'
    ),
  ],
  actions: [{ name: 'Fleeting Ghost', action: ActionTypes.MoveAction }],
})

export const GreatLeap = Abilities.defineAbility('rogue/power/great-leap', {
  name: 'Great Leap',
  description: '*You leap a great distance without a running start.*',
  universal: false,
  tags: [AtWillPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedAthletics)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 2**\n\n**At-Will** ✦ Martial\n\n**Move Action** · Personal\n\n**Prerequisite:** You must be trained in Athletics.\n\n**Effect:** Make a high jump or a long jump. Determine the DC of the Athletics check as though you had a running start. The distance you jump can exceed your speed.'
    ),
  ],
  actions: [{ name: 'Great Leap', action: ActionTypes.MoveAction }],
})

export const MasterOfDeceit = Abilities.defineAbility('rogue/power/master-of-deceit', {
  name: 'Master of Deceit',
  description: '*The line between truth and deception is thin, and you cross it with ease.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedBluff)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 2**\n\n**Encounter** ✦ Martial\n\n**Free Action** · Personal\n\n**Trigger:** You roll a Bluff check and dislike the result\n\n**Prerequisite:** You must be trained in Bluff.\n\n**Effect:** Reroll the Bluff check. You decide whether to make the reroll before the DM announces the result.'
    ),
  ],
  actions: [{ name: 'Master of Deceit', action: ActionTypes.FreeAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const QuickFingers = Abilities.defineAbility('rogue/power/quick-fingers', {
  name: 'Quick Fingers',
  description: '*You can pilfer a coin pouch in the blink of an eye.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedThievery)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 2**\n\n**Encounter** ✦ Martial\n\n**Minor Action** · Personal\n\n**Prerequisite:** You must be trained in Thievery.\n\n**Effect:** Make a Thievery check as part of this action, even if the check is normally a standard action.'
    ),
  ],
  actions: [{ name: 'Quick Fingers', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Tumble = Abilities.defineAbility('rogue/power/tumble', {
  name: 'Tumble',
  description: "*You tumble out of harm's way, dodging the opportunistic attacks of your enemies.*",
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedAcrobatics)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 2**\n\n**Encounter** ✦ Martial\n\n**Move Action** · Personal\n\n**Prerequisite:** You must be trained in Acrobatics.\n\n**Effect:** You can shift a number of squares equal to one-half your speed.'
    ),
  ],
  actions: [{ name: 'Tumble', action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BaitAndSwitch = Abilities.defineAbility('rogue/power/bait-and-switch', {
  name: 'Bait and Switch',
  description: '*You strike and weave, causing your foe to lurch forward so that you can duck around him and slip into his space.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. Will\n\n**Hit:** 2[W] + Dexterity modifier damage. In addition, you switch places with the target and can then shift 1 square.\n\n**Artful Dodger:** You can shift a number of squares equal to your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Bait and Switch', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SetupStrike = Abilities.defineAbility('rogue/power/setup-strike', {
  name: 'Setup Strike',
  description: '*You land a calculated blow that causes your enemy to drop his guard, leaving him vulnerable to subsequent attacks.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 2[W] + Dexterity modifier damage, and the target grants combat advantage to you until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Setup Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ToppleOver = Abilities.defineAbility('rogue/power/topple-over', {
  name: 'Topple Over',
  description: '*Balance and momentum are your allies as you lunge forward, strike deftly, and knock your opponent to the ground.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Brutal Scoundrel:** You gain a bonus to the attack roll equal to your Strength modifier.\n\n**Hit:** 1[W] + Dexterity modifier damage, and the target is knocked prone.'
    ),
  ],
  actions: [{ name: 'Topple Over', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const TrickstersBlade = Abilities.defineAbility('rogue/power/tricksters-blade', {
  name: "Trickster's Blade",
  description: '*You land an expert blow and follow up with a clever series of feints that bewilder your enemies.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding a crossbow, a light blade, or a sling.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 2[W] + Dexterity modifier damage. Add your Charisma modifier to your AC until the start of your next turn.'
    ),
  ],
  actions: [{ name: "Trickster's Blade", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CleverRiposte = Abilities.defineAbility('rogue/power/clever-riposte', {
  name: 'Clever Riposte',
  description: "*You follow up a fierce attack with a series of quick, painful strikes woven between your enemy's attacks.*",
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 5**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 2[W] + Dexterity modifier damage.\n\n**Effect:** Until the end of the encounter, the target takes damage equal to your Dexterity modifier each time it attacks you, and you can shift as an immediate reaction after such an attack.'
    ),
  ],
  actions: [{ name: 'Clever Riposte', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DeepCut = Abilities.defineAbility('rogue/power/deep-cut', {
  name: 'Deep Cut',
  description: "*Each drop of blood is another nail in your enemy's coffin.*",
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 5**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. Fortitude\n\n**Hit:** 2[W] + Dexterity modifier damage, and ongoing damage equal to 5 + your Strength modifier (save ends).\n\n**Miss:** Half damage, and no ongoing damage.'
    ),
  ],
  actions: [{ name: 'Deep Cut', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const WalkingWounded = Abilities.defineAbility('rogue/power/walking-wounded', {
  name: 'Walking Wounded',
  description: '*You topple your enemy with a crippling blow and force him to stumble around the battlefield.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 5**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding a crossbow, a light blade, or a sling.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. Fortitude\n\n**Hit:** 2[W] + Dexterity modifier damage, and the target is knocked prone. Until the end of the encounter, if the target moves more than half its speed in a single action, it falls prone at the end of its movement.\n\n**Miss:** Half damage, and the target is not knocked prone.'
    ),
  ],
  actions: [{ name: 'Walking Wounded', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Chameleon = Abilities.defineAbility('rogue/power/chameleon', {
  name: 'Chameleon',
  description: '*You blend into your surroundings.*',
  universal: false,
  tags: [AtWillPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedStealth)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 6**\n\n**At-Will** ✦ Martial\n\n**Immediate Interrupt** · Personal\n\n**Trigger:** You are hidden and lose cover or concealment against an opponent\n\n**Prerequisite:** You must be trained in Stealth.\n\n**Effect:** Make a Stealth check. Until the end of your next turn, you remain hidden if a creature that has a clear line of sight to you does not beat your check result with its Perception check. If at the end of your turn you do not have cover or concealment against a creature, that creature automatically notices you.'
    ),
  ],
  actions: [{ name: 'Chameleon', action: ActionTypes.ImmediateInterrupt }],
})

export const IgnobleEscape = Abilities.defineAbility('rogue/power/ignoble-escape', {
  name: 'Ignoble Escape',
  description: '*With nimble ease, you sidestep one perilous situation after another.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedAcrobatics)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 6**\n\n**Encounter** ✦ Martial\n\n**Move Action** · Personal\n\n**Prerequisite:** You must be trained in Acrobatics.\n\n**Effect:** If you are marked, end that condition. You can shift a number of squares equal to your speed.'
    ),
  ],
  actions: [{ name: 'Ignoble Escape', action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const MobMentality = Abilities.defineAbility('rogue/power/mob-mentality', {
  name: 'Mob Mentality',
  description: '*When it comes to lying, cajoling, or persuading others, your allies follow your lead.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedIntimidate)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 6**\n\n**Encounter** ✦ Martial\n\n**Standard Action** · Close burst 10\n\n**Prerequisite:** You must be trained in Intimidate.\n\n**Targets:** You and each ally in burst\n\n**Effect:** The targets gain a +2 power bonus to Charisma-based skill and ability checks until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Mob Mentality', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const NimbleClimb = Abilities.defineAbility('rogue/power/nimble-climb', {
  name: 'Nimble Climb',
  description: '*You climb surfaces with astounding ease.*',
  universal: false,
  tags: [AtWillPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedAthletics)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 6**\n\n**At-Will** ✦ Martial\n\n**Move Action** · Personal\n\n**Prerequisite:** You must be trained in Athletics.\n\n**Effect:** Make an Athletics check to climb a surface. You can move at your full speed during this climb.'
    ),
  ],
  actions: [{ name: 'Nimble Climb', action: ActionTypes.MoveAction }],
})

export const SlipperyMind = Abilities.defineAbility('rogue/power/slippery-mind', {
  name: 'Slippery Mind',
  description: '*You cloud your mind with vague thoughts that shield you against a sudden mental attack.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedBluff)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 6**\n\n**Encounter** ✦ Martial\n\n**Immediate Interrupt** · Personal\n\n**Trigger:** You are hit by an attack against your Will defense\n\n**Prerequisite:** You must be trained in Bluff.\n\n**Effect:** Gain a +2 power bonus to your Will defense against the triggering attack.'
    ),
  ],
  actions: [{ name: 'Slippery Mind', action: ActionTypes.ImmediateInterrupt }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CloudOfSteel = Abilities.defineAbility('rogue/power/cloud-of-steel', {
  name: 'Cloud of Steel',
  description: '*You shower your enemies in sharp metal.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Close blast 5\n\n**Requirement:** You must be wielding a crossbow, a light thrown weapon, or a sling.\n\n**Target:** Each enemy in blast you can see\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 1[W] + Dexterity modifier damage.'
    ),
  ],
  actions: [{ name: 'Cloud of Steel', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ImperilingStrike = Abilities.defineAbility('rogue/power/imperiling-strike', {
  name: 'Imperiling Strike',
  description: "*You deal a staggering blow, opening a hole in your enemy's defenses.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. Fortitude\n\n**Hit:** 1[W] + Dexterity modifier damage, and the target takes a –1 penalty to AC and Reflex defense until the end of your next turn.\n\n**Brutal Scoundrel:** The penalty to AC and Reflex defense is equal to your Strength modifier.'
    ),
  ],
  actions: [{ name: 'Imperiling Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RoguesLuck = Abilities.defineAbility('rogue/power/rogues-luck', {
  name: "Rogue's Luck",
  description: '*A gifted rogue can turn failure into fortune.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding a crossbow, a light blade, or a sling.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 2[W] + Dexterity modifier damage.\n\n**Miss:** Make a secondary attack against the target.\n\n**Secondary Attack:** Dexterity vs. AC\n\n**Artful Dodger:** You gain a bonus to the attack roll for the secondary attack equal to your Charisma modifier.\n\n**Hit:** 1[W] + Dexterity modifier damage.'
    ),
  ],
  actions: [{ name: "Rogue's Luck", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SandInTheEyes = Abilities.defineAbility('rogue/power/sand-in-the-eyes', {
  name: 'Sand in the Eyes',
  description: '*You scoop up a handful of sand or dirt or pebbles, strike your foe, and throw the grit in his face to blind him.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. Reflex\n\n**Hit:** 1[W] + Dexterity modifier damage, and the target is blinded until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Sand in the Eyes', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CrimsonEdge = Abilities.defineAbility('rogue/power/crimson-edge', {
  name: 'Crimson Edge',
  description: '*You deal your enemy a vicious wound that continues to bleed, and like a shark, you circle in for the kill.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 9**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. Fortitude\n\n**Hit:** 2[W] + Dexterity modifier damage, and the target takes ongoing damage equal to 5 + your Strength modifier and grants combat advantage to you (save ends both).\n\n**Miss:** Half damage, and no ongoing damage.'
    ),
  ],
  actions: [{ name: 'Crimson Edge', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DeadlyPositioning = Abilities.defineAbility('rogue/power/deadly-positioning', {
  name: 'Deadly Positioning',
  description: '*You adroitlyoutmaneuver your enemy, pushing and baiting him with every stride and strike.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 9**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee 1\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** You slide the target to any other square adjacent to you, and then make a Dexterity vs. AC attack.\n\n**Hit:** 3[W] + Dexterity modifier damage.\n\n**Effect:** Until the end of the encounter, as long as you are adjacent to the target, you slide the target 1 square before making a melee attack against it.'
    ),
  ],
  actions: [{ name: 'Deadly Positioning', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Knockout = Abilities.defineAbility('rogue/power/knockout', {
  name: 'Knockout',
  description: '*A well-placed blow takes your foe out of the fight.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Rogue)],
  effects: [
    Effects.descriptive(
      '**Rogue Attack 9**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding a light blade.\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. Fortitude\n\n**Hit:** 2[W] + Dexterity modifier damage, and the target is knocked unconscious (save ends). If the unconscious target takes any damage, it is no longer unconscious.\n\n**Miss:** Half damage, and the target is dazed until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Knockout', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CertainFreedom = Abilities.defineAbility('rogue/power/certain-freedom', {
  name: 'Certain Freedom',
  description: '*You are as slippery as an eel.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedAcrobatics)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 10**\n\n**Daily** ✦ Martial\n\n**Move Action** · Personal\n\n**Prerequisite:** You must be trained in Acrobatics.\n\n**Effect:** You automatically succeed on an Acrobatics check to escape from a grab or to escape from restraints.'
    ),
  ],
  actions: [{ name: 'Certain Freedom', action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CloseQuarters = Abilities.defineAbility('rogue/power/close-quarters', {
  name: 'Close Quarters',
  description: '*You take cover beneath a much larger creature, making it harder for the creature to hit you.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedAcrobatics)],
  effects: [
    Effects.descriptive(
      "**Rogue Utility 10**\n\n**Daily** ✦ Martial\n\n**Move Action** · Personal\n\n**Prerequisite:** You must be trained in Acrobatics.\n\n**Effect:** Move into the space of an adjacent creature larger than you and at least Large in size. (It gets its usual opportunity attack against you as you leave an adjacent square.) You gain combat advantage against the creature, and it takes a –4 penalty to attack rolls against you. When the creature moves, you move along with it, staying in the same portion of the creature's space. The creature can make a Strength or Dexterity vs. Reflex attack (as a standard action with no penalty) to slide you into an adjacent square and end this effect.\n\n**Special:** Allies of the target creature can attack you without penalty."
    ),
  ],
  actions: [{ name: 'Close Quarters', action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DangerousTheft = Abilities.defineAbility('rogue/power/dangerous-theft', {
  name: 'Dangerous Theft',
  description: '*You snatch an item from an enemy during combat.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedThievery)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 10**\n\n**Encounter** ✦ Martial\n\n**Free Action** · Personal\n\n**Prerequisite:** You must be trained in Thievery.\n\n**Effect:** On your next action, ignore the –10 penalty when you make a Thievery check to pick a pocket during combat.'
    ),
  ],
  actions: [{ name: 'Dangerous Theft', action: ActionTypes.FreeAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShadowStride = Abilities.defineAbility('rogue/power/shadow-stride', {
  name: 'Shadow Stride',
  description: '*You silently step from shadow to shadow, slipping past your foes unseen and unheard.*',
  universal: false,
  tags: [AtWillPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Rogue), Traits.traitPrerequisite(Skills.TrainedStealth)],
  effects: [
    Effects.descriptive(
      '**Rogue Utility 10**\n\n**At-Will** ✦ Martial\n\n**Move Action** · Personal\n\n**Prerequisite:** You must be trained in Stealth.\n\n**Effect:** You must be hiding to use this power. You can move your speed. At the end of that movement, if you have cover, you can make a Stealth check with no penalty for moving. If you make the Stealth check, you stay hidden during your movement.'
    ),
  ],
  actions: [{ name: 'Shadow Stride', action: ActionTypes.MoveAction }],
})

export const AllRoguePowers = [
  DeftStrike,
  PiercingStrike,
  RiposteStrike,
  SlyFlourish,
  DazingStrike,
  KingsCastle,
  PositioningStrike,
  TorturousStrike,
  BlindingBarrage,
  EasyTarget,
  TrickStrike,
  FleetingGhost,
  GreatLeap,
  MasterOfDeceit,
  QuickFingers,
  Tumble,
  BaitAndSwitch,
  SetupStrike,
  ToppleOver,
  TrickstersBlade,
  CleverRiposte,
  DeepCut,
  WalkingWounded,
  Chameleon,
  IgnobleEscape,
  MobMentality,
  NimbleClimb,
  SlipperyMind,
  CloudOfSteel,
  ImperilingStrike,
  RoguesLuck,
  SandInTheEyes,
  CrimsonEdge,
  DeadlyPositioning,
  Knockout,
  CertainFreedom,
  CloseQuarters,
  DangerousTheft,
  ShadowStride,
]
