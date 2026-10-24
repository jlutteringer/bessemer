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
} from '@simulacrum/ruleset-dnd4e/tag'
import { Ranger } from '@simulacrum/ruleset-dnd4e/class/class-ranger'

// Generated from the Player's Handbook Ranger powers, levels 1-5. Powers are learned through character options, so they
// aren't universal. Encounter powers come back after a short rest, daily powers after an extended rest.

export const CarefulAttack = Abilities.defineAbility('ranger/power/careful-attack', {
  name: 'Careful Attack',
  description: '*You study the enemy, looking for a gap in his defenses. Only when you find it do you strike.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding two melee weapons or a ranged weapon.\n\n**Target:** One creature\n\n**Attack:** Strength + 2 vs. AC (melee) or Dexterity + 2 vs. AC (ranged).\n\n**Hit:** 1[W] damage (melee) or 1[W] damage (ranged).\n\nIncrease damage to 2[W] (melee) or 2[W] (ranged) at 21st level.'
    ),
  ],
  actions: [{ name: 'Careful Attack', action: ActionTypes.StandardAction }],
})

export const HitAndRun = Abilities.defineAbility('ranger/power/hit-and-run', {
  name: 'Hit and Run',
  description: '*Let the fighter stand toe to toe with the monster. You prefer to make your attack, then withdraw to safer ground.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage\n\nIncrease damage to 2[W] + Strength modifier at 21st level.\n\n**Effect:** If you move in the same turn after this attack, leaving the first square adjacent to the target does not provoke an opportunity attack from the target.'
    ),
  ],
  actions: [{ name: 'Hit and Run', action: ActionTypes.StandardAction }],
})

export const NimbleStrike = Abilities.defineAbility('ranger/power/nimble-strike', {
  name: 'Nimble Strike',
  description: "*You slink past your enemy's guard to make your attack, or you make your attack and then withdraw to a more advantageous position.*",
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Ranged weapon\n\n**Target:** One creature\n\n**Special:** Shift 1 square before or after you attack\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 1[W] + Dexterity modifier damage.\n\nIncrease damage to 2[W] + Dexterity modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Nimble Strike', action: ActionTypes.StandardAction }],
})

export const TwinStrike = Abilities.defineAbility('ranger/power/twin-strike', {
  name: 'Twin Strike',
  description: "*If the first attack doesn't kill it, the second one might.*",
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding two melee weapons or a ranged weapon.\n\n**Targets:** One or two creatures\n\n**Attack:** Strength vs. AC (melee; main weapon and off-hand weapon) or Dexterity vs. AC (ranged), two attacks\n\n**Hit:** 1[W] damage per attack.\n\nIncrease damage to 2[W] at 21st level.'
    ),
  ],
  actions: [{ name: 'Twin Strike', action: ActionTypes.StandardAction }],
})

export const DireWolverineStrike = Abilities.defineAbility('ranger/power/dire-wolverine-strike', {
  name: 'Dire Wolverine Strike',
  description: '*Enemies surround you—much to their chagrin, as you slash them to pieces with the ferocity of a wounded dire wolverine.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Close burst 1\n\n**Requirement:** You must be wielding two melee weapons.\n\n**Target:** Each enemy in burst you can see\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage.'
    ),
  ],
  actions: [{ name: 'Dire Wolverine Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const EvasiveStrike = Abilities.defineAbility('ranger/power/evasive-strike', {
  name: 'Evasive Strike',
  description: '*You confound enemies by weaving through the battlefield unscathed as you make your attacks.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Target:** One creature\n\n**Special:** You can shift a number of squares equal to 1 + your Wisdom modifier either before or after the attack.\n\n**Attack:** Strength vs. AC (melee) or Dexterity vs. AC (ranged)\n\n**Hit:** 2[W] + Strength modifier damage (melee) or 2[W] + Dexterity modifier damage (ranged).'
    ),
  ],
  actions: [{ name: 'Evasive Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FoxsCunning = Abilities.defineAbility('ranger/power/foxs-cunning', {
  name: "Fox's Cunning",
  description:
    "*Using the momentum from your enemy's blow to fall back or slip to one side, you make a sudden retaliatory attack as he stumbles to regain his composure.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Immediate Reaction** · Melee or Ranged weapon\n\n**Trigger:** An enemy makes a melee attack against you\n\n**Attack:** You can shift 1 square, then make a basic attack against the enemy.\n\n**Special:** Gain a power bonus to your basic attack roll equal to your Wisdom modifier.'
    ),
  ],
  actions: [{ name: "Fox's Cunning", action: ActionTypes.ImmediateReaction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const TwoFangedStrike = Abilities.defineAbility('ranger/power/two-fanged-strike', {
  name: 'Two-Fanged Strike',
  description: '*You sink two arrows or both of your blades into the flesh of your enemy, causing it to howl in pain.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding two melee weapons or a ranged weapon.\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC (melee; main weapon and off-hand weapon) or Dexterity vs. AC (ranged), two attacks\n\n**Hit:** 1[W] + Strength modifier damage (melee) or 1[W] + Dexterity modifier damage (ranged) per attack. If both attacks hit, you deal extra damage equal to your Wisdom modifier.'
    ),
  ],
  actions: [{ name: 'Two-Fanged Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const HuntersBearTrap = Abilities.defineAbility('ranger/power/hunters-bear-trap', {
  name: "Hunter's Bear Trap",
  description: '*A well-placed shot to the leg leaves your enemy hobbled and bleeding.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC (melee) or Dexterity vs. AC (ranged)\n\n**Hit:** 2[W] + Strength modifier damage (melee) or 2[W] + Dexterity modifier damage (ranged), and the target is slowed and takes ongoing 5 damage (save ends both).\n\n**Miss:** Half damage, no ongoing damage, and the target is slowed until the end of your next turn.'
    ),
  ],
  actions: [{ name: "Hunter's Bear Trap", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const JawsOfTheWolf = Abilities.defineAbility('ranger/power/jaws-of-the-wolf', {
  name: 'Jaws of the Wolf',
  description: '*You use your weapons to hedge in your foe and trick him into exposing a weak spot, at which point you strike.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding two melee weapons.\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC (main weapon and off-hand weapon), two attacks\n\n**Hit:** 2[W] + Strength modifier damage per attack.\n\n**Miss:** Half damage per attack.'
    ),
  ],
  actions: [{ name: 'Jaws of the Wolf', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SplitTheTree = Abilities.defineAbility('ranger/power/split-the-tree', {
  name: 'Split the Tree',
  description: '*You fire two arrows at once, which separate in mid-flight to strike two different targets.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Ranged weapon\n\n**Targets:** Two creatures within 3 squares of each other\n\n**Attack:** Dexterity vs. AC. Make two attack rolls, take the higher result, and apply it to both targets.\n\n**Hit:** 2[W] + Dexterity modifier damage.'
    ),
  ],
  actions: [{ name: 'Split the Tree', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SuddenStrike = Abilities.defineAbility('ranger/power/sudden-strike', {
  name: 'Sudden Strike',
  description:
    '*You hold your weapons blade-down and slash your foe across the face with one of them. As he spins away and drops his guard, you roll to one side, spring to your feet, and plunge your other blade into his back.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding two melee weapons.\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC (off-hand weapon)\n\n**Hit:** 1[W] damage (off-hand weapon).\n\n**Effect:** You shift 1 square and make a secondary attack against the target.\n\n**Secondary Attack:** Strength vs. AC (main weapon)\n\n**Hit:** 2[W] + Strength modifier damage (main weapon), and the target is weakened until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Sudden Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CrucialAdvice = Abilities.defineAbility('ranger/power/crucial-advice', {
  name: 'Crucial Advice',
  description: "*You are wise in all things. The sooner your friends realize this, the safer and better off they'll be.*",
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      "**Ranger Utility 2**\n\n**Encounter** ✦ Martial\n\n**Immediate Reaction** · Ranged 5\n\n**Trigger:** An ally within range that you can see or hear makes a skill check using a skill in which you're trained\n\n**Effect:** Grant the ally the ability to reroll the skill check, with a power bonus equal to your Wisdom modifier."
    ),
  ],
  actions: [{ name: 'Crucial Advice', action: ActionTypes.ImmediateReaction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const UnbalancingParry = Abilities.defineAbility('ranger/power/unbalancing-parry', {
  name: 'Unbalancing Parry',
  description: "*You deftly block your enemy's strike and turn his momentum against him, causing him to stumble to the side.*",
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Utility 2**\n\n**Encounter** ✦ Martial, Weapon\n\n**Immediate Reaction** · Melee 1\n\n**Trigger:** An enemy misses you with a melee attack\n\n**Effect:** Slide the enemy into a square adjacent to you and gain combat advantage against it until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Unbalancing Parry', action: ActionTypes.ImmediateReaction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const YieldGround = Abilities.defineAbility('ranger/power/yield-ground', {
  name: 'Yield Ground',
  description: '*Even as your foe connects, you leap backward, out of the way of further harm.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Utility 2**\n\n**Encounter** ✦ Martial\n\n**Immediate Reaction** · Personal\n\n**Trigger:** An enemy damages you with a melee attack\n\n**Effect:** You can shift a number of squares equal to your Wisdom modifier. Gain a +2 power bonus to all defenses until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Yield Ground', action: ActionTypes.ImmediateReaction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CutAndRun = Abilities.defineAbility('ranger/power/cut-and-run', {
  name: 'Cut and Run',
  description: '*You attack twice while maneuvering yourself into the most advantageous position possible.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding two melee weapons or a ranged weapon.\n\n**Target:** One or two creatures\n\n**Attack:** Strength vs. AC (melee; main weapon and off-hand weapon) or Dexterity vs. AC (ranged), two attacks\n\n**Special:** After the first or the second attack, you can shift a number of squares equal to 1 + your Wisdom modifier.\n\n**Hit:** 1[W] + Strength modifier damage (melee) or 1[W] + Dexterity modifier damage (ranged) per attack.'
    ),
  ],
  actions: [{ name: 'Cut and Run', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DisruptiveStrike = Abilities.defineAbility('ranger/power/disruptive-strike', {
  name: 'Disruptive Strike',
  description: "*You thwart an enemy's attack with a timely thrust of your blade or a quick shot from your bow.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Immediate Interrupt** · Melee or Ranged weapon\n\n**Trigger:** You or an ally is attacked by a creature\n\n**Target:** The attacking creature\n\n**Attack:** Strength vs. AC (melee) or Dexterity vs. AC (ranged)\n\n**Hit:** 1[W] + Strength modifier damage (melee) or 1[W] + Dexterity modifier damage (ranged). The target takes a penalty to its attack roll for the triggering attack equal to 3 + your Wisdom modifier.'
    ),
  ],
  actions: [{ name: 'Disruptive Strike', action: ActionTypes.ImmediateInterrupt }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShadowWaspStrike = Abilities.defineAbility('ranger/power/shadow-wasp-strike', {
  name: 'Shadow Wasp Strike',
  description: '*You strike quickly, like a shadow wasp flying out of the darkness, hitting where your foe is most vulnerable.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Target:** One creature that is your quarry\n\n**Attack:** Strength vs. AC (melee) or Dexterity vs. AC (ranged)\n\n**Hit:** 2[W] + Strength modifier damage (melee) or 2[W] + Dexterity modifier damage (ranged).'
    ),
  ],
  actions: [{ name: 'Shadow Wasp Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ThundertuskBoarStrike = Abilities.defineAbility('ranger/power/thundertusk-boar-strike', {
  name: 'Thundertusk Boar Strike',
  description: '*You attack twice, causing your foes to stagger backward.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee or Ranged weapon\n\n**Requirement:** You must be wielding two melee weapons or a ranged weapon.\n\n**Targets:** One or two creatures\n\n**Attack:** Strength vs. AC (melee; main weapon and off-hand weapon) or Dexterity vs. AC (ranged), two attacks\n\n**Hit:** 1[W] + Strength modifier damage (melee) or 1[W] + Dexterity modifier damage (ranged) per attack. With each hit, you push the target 1 square. If both attacks hit the same target, you push the target a number of squares equal to 1 + your Wisdom modifier.'
    ),
  ],
  actions: [{ name: 'Thundertusk Boar Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ExcruciatingShot = Abilities.defineAbility('ranger/power/excruciating-shot', {
  name: 'Excruciating Shot',
  description: '*One well-placed arrow leaves your enemy hunched over and howling in pain.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 5**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Ranged weapon\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 3[W] + Dexterity modifier damage, and the target is weakened (save ends).\n\n**Miss:** Half damage, and the target is not weakened.'
    ),
  ],
  actions: [{ name: 'Excruciating Shot', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FrenziedSkirmish = Abilities.defineAbility('ranger/power/frenzied-skirmish', {
  name: 'Frenzied Skirmish',
  description:
    '*You leap into the fray and unleash a torrent of steel upon your unsuspecting foes, staggering them with the ferocity of your attacks.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 5**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding two melee weapons.\n\n**Targets:** One or two creatures\n\n**Attack:** Strength vs. AC (main weapon and off-hand weapon), two attacks\n\n**Special:** Before or after these attacks, you can move your speed without provoking opportunity attacks.\n\n**Hit:** 1[W] + Strength modifier damage per attack. If an attack hits, the target is dazed until the end of your next turn. If both attacks hit the same target, it is dazed and slowed until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Frenzied Skirmish', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SplinteringShot = Abilities.defineAbility('ranger/power/splintering-shot', {
  name: 'Splintering Shot',
  description: '*Your arrow burrows into flesh and shatters, sending splinters of wood deep into the wound.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 5**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Ranged weapon\n\n**Target:** One creature\n\n**Attack:** Dexterity vs. AC\n\n**Hit:** 3[W] + Dexterity modifier damage, and the target takes a –2 penalty to attack rolls until the end of the encounter.\n\n**Miss:** Half damage, and the target takes a –1 penalty to attack rolls until the end of the encounter.'
    ),
  ],
  actions: [{ name: 'Splintering Shot', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const TwoWolfPounce = Abilities.defineAbility('ranger/power/two-wolf-pounce', {
  name: 'Two-Wolf Pounce',
  description: '*You set upon a foe with weapons bared, then weave to the side and deal a wound to another adversary.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Ranger)],
  effects: [
    Effects.descriptive(
      '**Ranger Attack 5**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be wielding two melee weapons.\n\n**Special:** You can shift 2 squares before making this attack.\n\n**Primary Target:** One creature\n\n**Attack:** Strength vs. AC, two attacks (main weapon and off-hand weapon)\n\n**Hit:** 2[W] + Strength modifier damage (main weapon) and 1[W] + Strength modifier damage (off-hand weapon).\n\n**Effect:** After attacking the primary target, you can shift 2 squares and make a secondary attack.\n\n**Secondary Target:** One creature other than the primary target\n\n**Secondary Attack:** Strength vs. AC (off-hand weapon)\n\n**Hit:** 2[W] damage (off-hand weapon).'
    ),
  ],
  actions: [{ name: 'Two-Wolf Pounce', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AllRangerPowers = [
  CarefulAttack,
  HitAndRun,
  NimbleStrike,
  TwinStrike,
  DireWolverineStrike,
  EvasiveStrike,
  FoxsCunning,
  TwoFangedStrike,
  HuntersBearTrap,
  JawsOfTheWolf,
  SplitTheTree,
  SuddenStrike,
  CrucialAdvice,
  UnbalancingParry,
  YieldGround,
  CutAndRun,
  DisruptiveStrike,
  ShadowWaspStrike,
  ThundertuskBoarStrike,
  ExcruciatingShot,
  FrenziedSkirmish,
  SplinteringShot,
  TwoWolfPounce,
]
