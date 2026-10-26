import { Abilities, CharacterEffects, Traits } from '@simulacrum/ruleset'
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
import { Fighter } from '@simulacrum/ruleset-dnd4e/class/class-fighter'

// Generated from the Player's Handbook Fighter powers, levels 1-10. Powers are learned through character options, so they
// aren't universal (except cantrips, which every wizard has). Encounter powers come back after a short rest, daily powers after an
// extended rest.

export const Cleave = Abilities.defineAbility('fighter/power/cleave', {
  name: 'Cleave',
  description: '*You hit one enemy, then cleave into another.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
      '**Fighter Attack 1**\n\n**At-Will** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Requirement:** You must be using a shield.\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage, and you push the target 1 square if it is your size, smaller than you, or one size category larger. You can shift into the space that the target occupied.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Tide of Iron', action: ActionTypes.StandardAction }],
})

export const CoveringAttack = Abilities.defineAbility('fighter/power/covering-attack', {
  name: 'Covering Attack',
  description:
    '*You launch a dizzying barrage of thrusts at your enemy, compelling him to give you all his attention. Under the cover of your ferocious attack, one of your allies can safely retreat from that same foe.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
      '**Fighter Attack 1**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage, and you knock the target prone.'
    ),
  ],
  actions: [{ name: 'Spinning Sweep', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SteelSerpentStrike = Abilities.defineAbility('fighter/power/steel-serpent-strike', {
  name: 'Steel Serpent Strike',
  description:
    "*You stab viciously at your foe's knee or foot to slow him down. No matter how tough he is, he's going to favor that leg for a time.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
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
    CharacterEffects.descriptive(
      '**Fighter Attack 5**\n\n**Daily** ✦ Martial, Stance, Weapon\n\n**Minor Action** · Personal\n\n**Effect:** Any enemy that starts its turn adjacent to you takes 1[W] damage, as long as you are able to make opportunity attacks.'
    ),
  ],
  actions: [{ name: 'Rain of Steel', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BattleAwareness = Abilities.defineAbility('fighter/power/battle-awareness', {
  name: 'Battle Awareness',
  description: '*No villain or monster can get the drop on you!*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Utility 6**\n\n**Daily** ✦ Martial\n\n**No Action** · Personal\n\n**Effect:** You gain a +10 bonus to your initiative check. Use this power after rolling your initiative.'
    ),
  ],
  actions: [{ name: 'Battle Awareness', action: ActionTypes.NoAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DefensiveTraining = Abilities.defineAbility('fighter/power/defensive-training', {
  name: 'Defensive Training',
  description: "*With a soldier's discipline, you fend off attacks that would overcome a lesser person.*",
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Utility 6**\n\n**Daily** ✦ Martial, Stance\n\n**Minor Action** · Personal\n\n**Effect:** Gain a +2 power bonus to your Fortitude, Reflex, or Will defense.'
    ),
  ],
  actions: [{ name: 'Defensive Training', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Unbreakable = Abilities.defineAbility('fighter/power/unbreakable', {
  name: 'Unbreakable',
  description: '*You steel yourself against a brutal attack.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Utility 6**\n\n**Encounter** ✦ Martial\n\n**Immediate Reaction** · Personal\n\n**Trigger:** You are hit by an attack\n\n**Effect:** Reduce the damage from the attack by 5 + your Constitution modifier.'
    ),
  ],
  actions: [{ name: 'Unbreakable', action: ActionTypes.ImmediateReaction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ComeAndGetIt = Abilities.defineAbility('fighter/power/come-and-get-it', {
  name: 'Come and Get It',
  description: '*You call your opponents toward you and deliver a blow they will never forget.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      "**Fighter Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Close burst 3\n\n**Target:** Each enemy in burst you can see\n\n**Effect:** Each target must shift 2 and end adjacent to you, if possible. A target that can't end adjacent to you doesn't move. You can then attack any targets that are adjacent to you (close burst 1).\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage."
    ),
  ],
  actions: [{ name: 'Come and Get It', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const GriffonsWrath = Abilities.defineAbility('fighter/power/griffons-wrath', {
  name: "Griffon's Wrath",
  description:
    '*You rain several heavy overhand blows down on your foe. They force him to raise his guard high to meet your attack, exposing a vulnerable spot for your next attack—the underarm, side, or belly.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and the target takes a –2 penalty to AC until the end of your next turn.'
    ),
  ],
  actions: [{ name: "Griffon's Wrath", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const IronBulwark = Abilities.defineAbility('fighter/power/iron-bulwark', {
  name: 'Iron Bulwark',
  description:
    '*You use your weapon or shield to parry one blow after another, denying your foes the satisfaction of getting in a solid hit against you.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      "**Fighter Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage.\n\n**Effect:** You gain a +1 power bonus to AC (or a +2 bonus if you're using a shield) until the end of your next turn."
    ),
  ],
  actions: [{ name: 'Iron Bulwark', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RecklessStrike = Abilities.defineAbility('fighter/power/reckless-strike', {
  name: 'Reckless Strike',
  description: '*You trade precision for power.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength –2 vs. AC\n\n**Hit:** 3[W] + Strength modifier damage.'
    ),
  ],
  actions: [{ name: 'Reckless Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SuddenSurge = Abilities.defineAbility('fighter/power/sudden-surge', {
  name: 'Sudden Surge',
  description: '*You throw your weight into a strike, using the momentum of the swing to surge forward.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Attack 7**\n\n**Encounter** ✦ Martial, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage.\n\n**Effect:** Move a number of squares equal to your Dexterity modifier (minimum 1).'
    ),
  ],
  actions: [{ name: 'Sudden Surge', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShiftTheBattlefield = Abilities.defineAbility('fighter/power/shift-the-battlefield', {
  name: 'Shift the Battlefield',
  description: '*With supreme skill and great resolve, you beat your enemies back.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Attack 9**\n\n**Daily** ✦ Martial, Weapon\n\n**Standard Action** · Close burst 1\n\n**Target:** Each enemy in burst you can see\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and you slide the target 1 square.\n\n**Miss:** Half damage.'
    ),
  ],
  actions: [{ name: 'Shift the Battlefield', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ThicketOfBlades = Abilities.defineAbility('fighter/power/thicket-of-blades', {
  name: 'Thicket of Blades',
  description: '*You sting and hinder nearby foes with a savage flurry of strikes aimed at their legs.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Attack 9**\n\n**Daily** ✦ Martial, Reliable, Weapon\n\n**Standard Action** · Close burst 1\n\n**Target:** Each enemy in burst you can see\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage, and the target is slowed (save ends).'
    ),
  ],
  actions: [{ name: 'Thicket of Blades', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const VictoriousSurge = Abilities.defineAbility('fighter/power/victorious-surge', {
  name: 'Victorious Surge',
  description: "*You strike true, and your enemy's howl of pain is like music to your ears, making you forget about your own wounds.*",
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Attack 9**\n\n**Daily** ✦ Healing, Martial, Reliable, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage, and you regain hit points as if you had spent a healing surge.'
    ),
  ],
  actions: [{ name: 'Victorious Surge', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const IntoTheFray = Abilities.defineAbility('fighter/power/into-the-fray', {
  name: 'Into the Fray',
  description: '*You unleash a fierce battle cry as you leap boldly into the fray.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Utility 10**\n\n**Encounter** ✦ Martial\n\n**Minor Action** · Personal\n\n**Effect:** You can move 3 squares, as long as you can end your move adjacent to an enemy.'
    ),
  ],
  actions: [{ name: 'Into the Fray', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const LastDitchEvasion = Abilities.defineAbility('fighter/power/last-ditch-evasion', {
  name: 'Last Ditch Evasion',
  description: '*Thanks to a combination of skill and luck, you narrowly avoid an attack but leave yourself perilously exposed.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      '**Fighter Utility 10**\n\n**Daily** ✦ Martial\n\n**Immediate Interrupt** · Personal\n\n**Trigger:** You are hit by an attack\n\n**Effect:** You take no damage from the attack that just hit you. However, you are stunned and take a –2 penalty to all defenses until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Last Ditch Evasion', action: ActionTypes.ImmediateInterrupt }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const StalwartGuard = Abilities.defineAbility('fighter/power/stalwart-guard', {
  name: 'Stalwart Guard',
  description: '*Your thoughts turn to defense as you begin using your weapon or shield to protect nearby allies.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Fighter)],
  effects: [
    CharacterEffects.descriptive(
      "**Fighter Utility 10**\n\n**Daily** ✦ Martial\n\n**Minor Action** · Close burst 1\n\n**Target:** Each ally in burst\n\n**Effect:** The targets gain a +1 shield bonus to AC until the end of the encounter. If you are using a shield, increase the bonus to +2 and apply it to your allies' Reflex defense as well."
    ),
  ],
  actions: [{ name: 'Stalwart Guard', action: ActionTypes.MinorAction }],
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
  BattleAwareness,
  DefensiveTraining,
  Unbreakable,
  ComeAndGetIt,
  GriffonsWrath,
  IronBulwark,
  RecklessStrike,
  SuddenSurge,
  ShiftTheBattlefield,
  ThicketOfBlades,
  VictoriousSurge,
  IntoTheFray,
  LastDitchEvasion,
  StalwartGuard,
]
