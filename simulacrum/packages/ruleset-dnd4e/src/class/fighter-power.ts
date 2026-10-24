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
import { Fighter } from '@simulacrum/ruleset-dnd4e/class/class-fighter'

// Generated from the Player's Handbook Fighter powers, levels 1-5. Powers are learned through character options, so they
// aren't universal (except cantrips, which every wizard has). Encounter powers come back after a short rest, daily powers after an
// extended rest.

export const Cleave = Abilities.defineAbility('fighter/power/cleave', {
  name: 'Cleave',
  description: '*You hit one enemy, then cleave into another.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage, and an enemy adjacent to you takes damage equal to your Strength modifier.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Cleave', action: ActionTypes.StandardAction }],
})

export const ReapingStrike = Abilities.defineAbility('fighter/power/reaping-strike', {
  name: 'Reaping Strike',
  description: "*You punctuate your scything attacks with wicked jabs and small cutting blows that slip through your enemy's defenses.*",
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      "**Fighter Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.\n\n**Miss:** Half Strength modifier damage. If you're wielding a two-handed weapon, you deal damage equal to your Strength modifier."
    ),
  ],
  actions: [{ name: 'Reaping Strike', action: ActionTypes.StandardAction }],
})

export const SureStrike = Abilities.defineAbility('fighter/power/sure-strike', {
  name: 'Sure Strike',
  description: '*You trade power for precision.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength + 2 vs. AC\n\n**Hit:** 1[W] damage.\n\nIncrease damage to 2[W] at 21st level.'
    ),
  ],
  actions: [{ name: 'Sure Strike', action: ActionTypes.StandardAction }],
})

export const TideOfIron = Abilities.defineAbility('fighter/power/tide-of-iron', {
  name: 'Tide of Iron',
  description: '*After each mighty swing, you bring your shield to bear and use it to push your enemy back.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be using a shield.\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage, and you push the target 1 square if it is your size, smaller than you, or one size category larger. You can shift into the space that the target occupied.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Tide of Iron', action: ActionTypes.StandardAction }],
})

export const CoveringAttack = Abilities.defineAbility('fighter/power/covering-attack', {
  name: 'Covering Attack',
  description: '*You launch a dizzying barrage of thrusts at your enemy, compelling him to give you all his attention.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and an ally adjacent to the target can shift 2 squares.'
    ),
  ],
  actions: [{ name: 'Covering Attack', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const PassingAttack = Abilities.defineAbility('fighter/power/passing-attack', {
  name: 'Passing Attack',
  description: '*You strike at one foe and allow momentum to carry you forward into a second strike against a second foe.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Primary Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage, and you can shift 1 square. Make a secondary attack.\n\n**Secondary Target:** One creature other than the primary target\n\n**Secondary Attack:** Strength + 2 vs. AC\n\n**Hit:** 1[W] + Strength modifier damage.'
    ),
  ],
  actions: [{ name: 'Passing Attack', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SpinningSweep = Abilities.defineAbility('fighter/power/spinning-sweep', {
  name: 'Spinning Sweep',
  description:
    "*You spin beneath your enemy's guard with a long, powerful cut, and then sweep your leg through his an instant later to knock him head over heels.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage, and you knock the target prone.'
    ),
  ],
  actions: [{ name: 'Spinning Sweep', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SteelSerpentStrike = Abilities.defineAbility('fighter/power/steel-serpent-strike', {
  name: 'Steel Serpent Strike',
  description: "*You stab viciously at your foe's knee or foot to slow him down.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and the target is slowed and cannot shift until end of your next turn.'
    ),
  ],
  actions: [{ name: 'Steel Serpent Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BruteStrike = Abilities.defineAbility('fighter/power/brute-strike', {
  name: 'Brute Strike',
  description: '*You shatter armor and bone with a ringing blow.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 1**\n\n**Daily** ✦ Martial, Reliable, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage.'
    ),
  ],
  actions: [{ name: 'Brute Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ComebackStrike = Abilities.defineAbility('fighter/power/comeback-strike', {
  name: 'Comeback Strike',
  description: '*A timely strike against a hated foe invigorates you, giving you the strength and resolve to fight on.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 1**\n\n**Daily** ✦ Healing, Martial, Reliable, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and you can spend a healing surge.'
    ),
  ],
  actions: [{ name: 'Comeback Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const VillainsMenace = Abilities.defineAbility('fighter/power/villains-menace', {
  name: "Villain's Menace",
  description: '*You strike your enemy hard and hound him with skilled parries and stern reprisals.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 1**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and you gain a +2 power bonus to attack rolls and a +4 power bonus to damage rolls against the target until the end of the encounter.\n\n**Miss:** Gain a +1 power bonus to attack rolls and a +2 power bonus to damage rolls against the target until the end of the encounter.'
    ),
  ],
  actions: [{ name: "Villain's Menace", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BoundlessEndurance = Abilities.defineAbility('fighter/power/boundless-endurance', {
  name: 'Boundless Endurance',
  description: '*You shake off the worst of your wounds.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Utility 2**\n\n**Daily** ✦ Healing, Martial, Stance\n\n**Minor Action** · Personal\n\n**Effect:** You gain regeneration 2 + your Constitution modifier when you are bloodied.'
    ),
  ],
  actions: [{ name: 'Boundless Endurance', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const GetOverHere = Abilities.defineAbility('fighter/power/get-over-here', {
  name: 'Get Over Here',
  description: '*You pull one of your allies into a more advantageous position.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Utility 2**\n\n**Encounter** ✦ Martial\n\n**Move Action** · Melee 1\n\n**Target:** One willing adjacent ally\n\n**Effect:** You slide the target 2 squares to a square that is adjacent to you.'
    ),
  ],
  actions: [{ name: 'Get Over Here', action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const NoOpening = Abilities.defineAbility('fighter/power/no-opening', {
  name: 'No Opening',
  description: '*You raise your weapon or shield to block an opening in your defenses.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Utility 2**\n\n**Encounter** ✦ Martial\n\n**Immediate Interrupt** · Personal\n\n**Trigger:** An enemy attacks you and has combat advantage against you\n\n**Effect:** Cancel the combat advantage you were about to grant to the attack.'
    ),
  ],
  actions: [{ name: 'No Opening', action: ActionTypes.ImmediateInterrupt }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Unstoppable = Abilities.defineAbility('fighter/power/unstoppable', {
  name: 'Unstoppable',
  description: '*You let your adrenaline surge carry you through the battle.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Utility 2**\n\n**Daily** ✦ Healing, Martial\n\n**Minor Action** · Personal\n\n**Effect:** You gain temporary hit points equal to 2d6 + your Constitution modifier.'
    ),
  ],
  actions: [{ name: 'Unstoppable', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ArmorPiercingThrust = Abilities.defineAbility('fighter/power/armor-piercing-thrust', {
  name: 'Armor-Piercing Thrust',
  description: "*You drive your weapon through a weak point in your foe's defenses.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      "**Fighter Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. Reflex\n\n**Weapon:** If you're wielding a light blade or a spear, you gain a bonus to the attack roll equal to your Dexterity modifier.\n\n**Hit:** 1[W] + Strength modifier damage.\n\n**Weapon:** If you're wielding a light blade or a spear, you gain a bonus to the damage roll equal to your Dexterity modifier."
    ),
  ],
  actions: [{ name: 'Armor-Piercing Thrust', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CrushingBlow = Abilities.defineAbility('fighter/power/crushing-blow', {
  name: 'Crushing Blow',
  description: '*You wind up and deliver a devastating blow with your weapon.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      "**Fighter Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage.\n\n**Weapon:** If you're wielding an axe, a hammer, or a mace, you gain a bonus to the damage roll equal to your Constitution modifier."
    ),
  ],
  actions: [{ name: 'Crushing Blow', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DanceOfSteel = Abilities.defineAbility('fighter/power/dance-of-steel', {
  name: 'Dance of Steel',
  description: '*Weaving your weapon in a graceful figure-eight, you lash out with a sudden attack.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      "**Fighter Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage.\n\n**Weapon:** If you're wielding a polearm or a heavy blade, the target is slowed until the end of your next turn."
    ),
  ],
  actions: [{ name: 'Dance of Steel', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const PreciseStrike = Abilities.defineAbility('fighter/power/precise-strike', {
  name: 'Precise Strike',
  description: '*You trade damage for accuracy when you really want to land an attack on your opponent.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength + 4 vs. AC\n\n**Hit:** 1[W] + Strength modifier damage.'
    ),
  ],
  actions: [{ name: 'Precise Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RainOfBlows = Abilities.defineAbility('fighter/power/rain-of-blows', {
  name: 'Rain of Blows',
  description: '*You become a blur of motion, raining a series of blows upon your opponent.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      "**Fighter Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Primary Target:** One creature\n\n**Attack:** Strength vs. AC, two attacks\n\n**Hit:** 1[W] + Strength modifier damage.\n\n**Weapon:** If you're wielding a light blade, a spear, or a flail and have Dexterity 15 or higher, make a secondary attack.\n\n**Secondary Target:** The same or a different target\n\n**Secondary Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage."
    ),
  ],
  actions: [{ name: 'Rain of Blows', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SweepingBlow = Abilities.defineAbility('fighter/power/sweeping-blow', {
  name: 'Sweeping Blow',
  description: '*You put all your strength into a single mighty swing that strikes many enemies at once.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      "**Fighter Attack 3**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Close burst 1\n\n**Target:** Each enemy in burst you can see\n\n**Attack:** Strength vs. AC\n\n**Weapon:** If you're wielding an axe, a flail, a heavy blade, or a pick, you gain a bonus to the attack roll equal to one-half your Strength modifier.\n\n**Hit:** 1[W] + Strength modifier damage."
    ),
  ],
  actions: [{ name: 'Sweeping Blow', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CrackTheShell = Abilities.defineAbility('fighter/power/crack-the-shell', {
  name: 'Crack the Shell',
  description: "*You break through your enemy's armor and deal a painful bleeding wound.*",
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 5**\n\n**Daily** ✦ Martial, Reliable, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and the target takes ongoing 5 damage and a –2 penalty to AC (save ends both).'
    ),
  ],
  actions: [{ name: 'Crack the Shell', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DizzyingBlow = Abilities.defineAbility('fighter/power/dizzying-blow', {
  name: 'Dizzying Blow',
  description: '*You crack your foe upside the head.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 5**\n\n**Daily** ✦ Martial, Reliable, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage, and the target is immobilized (save ends).'
    ),
  ],
  actions: [{ name: 'Dizzying Blow', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RainOfSteel = Abilities.defineAbility('fighter/power/rain-of-steel', {
  name: 'Rain of Steel',
  description: '*You constantly swing your weapon about, slashing and cutting into nearby enemies.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    Effects.descriptive(
      '**Fighter Attack 5**\n\n**Daily** ✦ Martial, Stance, Weapon\n\n**Minor Action** · Personal\n\n**Effect:** Any enemy that starts its turn adjacent to you takes 1[W] damage, as long as you are able to make opportunity attacks.'
    ),
  ],
  actions: [{ name: 'Rain of Steel', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AllFighterPowers = [
  Cleave,
  ReapingStrike,
  SureStrike,
  TideOfIron,
  CoveringAttack,
  PassingAttack,
  SpinningSweep,
  SteelSerpentStrike,
  BruteStrike,
  ComebackStrike,
  VillainsMenace,
  BoundlessEndurance,
  GetOverHere,
  NoOpening,
  Unstoppable,
  ArmorPiercingThrust,
  CrushingBlow,
  DanceOfSteel,
  PreciseStrike,
  RainOfBlows,
  SweepingBlow,
  CrackTheShell,
  DizzyingBlow,
  RainOfSteel,
]
