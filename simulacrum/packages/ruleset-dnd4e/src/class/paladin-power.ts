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
import { Paladin } from '@simulacrum/ruleset-dnd4e/class/class-paladin'

// Generated from the Player's Handbook Paladin powers, levels 1-5. Powers are learned through character options, so they
// aren't universal. Encounter powers come back after a short rest, daily powers after an extended rest.

export const BolsteringStrike = Abilities.defineAbility('paladin/power/bolstering-strike', {
  name: 'Bolstering Strike',
  description: '*You attack your foe without mercy or reprieve, and your accuracy is rewarded with a divine gift of vigor.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**At-Will** ✦ Divine, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Charisma vs. AC\n\n**Hit:** 1[W] + Charisma modifier damage, and you gain temporary hit points equal to your Wisdom modifier.\n\nIncrease damage to 2[W] + Charisma modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Bolstering Strike', action: ActionTypes.StandardAction }],
})

export const EnfeeblingStrike = Abilities.defineAbility('paladin/power/enfeebling-strike', {
  name: 'Enfeebling Strike',
  description: '*Your brutal weapon attack leaves your foe weakened.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**At-Will** ✦ Divine, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Charisma vs. AC\n\n**Hit:** 1[W] + Charisma modifier damage. If you marked the target, it takes a –2 penalty to attack rolls until the end of your next turn.\n\nIncrease damage to 2[W] + Charisma modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Enfeebling Strike', action: ActionTypes.StandardAction }],
})

export const HolyStrike = Abilities.defineAbility('paladin/power/holy-strike', {
  name: 'Holy Strike',
  description: '*You strike an enemy with your weapon, which ignites with holy light.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**At-Will** ✦ Divine, Radiant, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier radiant damage. If you marked the target, you gain a bonus to the damage roll equal to your Wisdom modifier.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Holy Strike', action: ActionTypes.StandardAction }],
})

export const ValiantStrike = Abilities.defineAbility('paladin/power/valiant-strike', {
  name: 'Valiant Strike',
  description: '*As you bring your weapon to bear, the odds against you add strength to your attack.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**At-Will** ✦ Divine, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength + 1 per enemy adjacent to you vs. AC\n\n**Hit:** 1[W] + Strength modifier damage.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Valiant Strike', action: ActionTypes.StandardAction }],
})

export const FearsomeSmite = Abilities.defineAbility('paladin/power/fearsome-smite', {
  name: 'Fearsome Smite',
  description: '*When you strike a foe with your weapon, the force of the blow causes him to shudder and second-guess his tactics.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**Encounter** ✦ Divine, Fear, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Charisma vs. AC\n\n**Hit:** 2[W] + Charisma modifier damage. Until the end of your next turn, the target takes a penalty to attack rolls equal to your Wisdom modifier.'
    ),
  ],
  actions: [{ name: 'Fearsome Smite', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const PiercingSmite = Abilities.defineAbility('paladin/power/piercing-smite', {
  name: 'Piercing Smite',
  description: "*Silvery spikes cover your weapon, punching through your foe's armor.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**Encounter** ✦ Divine, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. Reflex\n\n**Hit:** 2[W] + Strength modifier damage, and the target and a number of enemies adjacent to you equal to your Wisdom modifier are marked until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Piercing Smite', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RadiantSmite = Abilities.defineAbility('paladin/power/radiant-smite', {
  name: 'Radiant Smite',
  description:
    '*Your weapon glows with a pearly luminescence. Enemies shrink from its pure light, especially creatures of supernatural evil such as demons and devils.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**Encounter** ✦ Divine, Radiant, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier + Wisdom modifier radiant damage.'
    ),
  ],
  actions: [{ name: 'Radiant Smite', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShieldingSmite = Abilities.defineAbility('paladin/power/shielding-smite', {
  name: 'Shielding Smite',
  description: '*A translucent golden shield forms in front of a nearby ally as you attack with your weapon.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**Encounter** ✦ Divine, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Charisma vs. AC\n\n**Hit:** 2[W] + Charisma modifier damage.\n\n**Effect:** Until the end of your next turn, one ally within 5 squares of you gains a power bonus to AC equal to your Wisdom modifier.'
    ),
  ],
  actions: [{ name: 'Shielding Smite', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const OnPainOfDeath = Abilities.defineAbility('paladin/power/on-pain-of-death', {
  name: 'On Pain of Death',
  description: '*You invoke a prayer that wracks your foe with terrible pain and causes further pain whenever he makes an attack.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**Daily** ✦ Divine, Implement\n\n**Standard Action** · Ranged 5\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 3d8 + Charisma modifier damage. Once per round, the target takes 1d8 damage after making any attacks on its turn (save ends).\n\n**Miss:** Half damage. Once per round, the target takes 1d4 damage after making any attacks on its turn (save ends).'
    ),
  ],
  actions: [{ name: 'On Pain of Death', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const PaladinsJudgment = Abilities.defineAbility('paladin/power/paladins-judgment', {
  name: "Paladin's Judgment",
  description: '*Your melee attack punishes your enemy and heals an ally.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**Daily** ✦ Divine, Healing, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 3[W] + Strength modifier damage, and one ally within 5 squares of you can spend a healing surge.\n\n**Miss:** One ally within 5 squares of you can spend a healing surge.'
    ),
  ],
  actions: [{ name: "Paladin's Judgment", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RadiantDelirium = Abilities.defineAbility('paladin/power/radiant-delirium', {
  name: 'Radiant Delirium',
  description: '*You engulf your enemy in searing ribbons of radiance.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 1**\n\n**Daily** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Ranged 5\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Reflex\n\n**Hit:** 3d8 + Charisma modifier radiant damage, and the target is dazed until the end of your next turn. In addition, the target takes a –2 penalty to AC (save ends).\n\n**Miss:** Half damage, and the target is dazed until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Radiant Delirium', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AstralSpeech = Abilities.defineAbility('paladin/power/astral-speech', {
  name: 'Astral Speech',
  description: '*You speak with such compelling conviction that others find it difficult to refute your beliefs and claims.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Utility 2**\n\n**Daily** ✦ Divine\n\n**Minor Action** · Personal\n\n**Effect:** You gain a +4 power bonus to Diplomacy checks until the end of the encounter.'
    ),
  ],
  actions: [{ name: 'Astral Speech', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const MartyrsBlessing = Abilities.defineAbility('paladin/power/martyrs-blessing', {
  name: "Martyr's Blessing",
  description: '*You step into an attack made against an adjacent ally to save your comrade.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Utility 2**\n\n**Daily** ✦ Divine\n\n**Immediate Interrupt** · Close burst 1\n\n**Trigger:** An adjacent ally is hit by a melee or a ranged attack\n\n**Effect:** You are hit by the attack instead.'
    ),
  ],
  actions: [{ name: "Martyr's Blessing", action: ActionTypes.ImmediateInterrupt }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SacredCircle = Abilities.defineAbility('paladin/power/sacred-circle', {
  name: 'Sacred Circle',
  description:
    '*You trace a circle around you with your hand, and it quickly expands into a wide circle of faintly glowing runes that glows brightly and protects you and your close allies.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Utility 2**\n\n**Daily** ✦ Divine, Implement, Zone\n\n**Standard Action** · Close burst 3\n\n**Effect:** The burst creates a zone that, until the end of the encounter, gives you and allies within it a +1 power bonus to AC.'
    ),
  ],
  actions: [{ name: 'Sacred Circle', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ArcingSmite = Abilities.defineAbility('paladin/power/arcing-smite', {
  name: 'Arcing Smite',
  description: '*You swing your weapon in a wide arc that strikes not one but two creatures within your reach.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 3**\n\n**Encounter** ✦ Divine, Weapon\n\n**Standard Action** · Melee weapon\n\n**Targets:** One or two creatures\n\n**Attack:** Strength vs. AC, one attack per target\n\n**Hit:** 1[W] + Strength modifier damage, and the target is marked until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Arcing Smite', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const InvigoratingSmite = Abilities.defineAbility('paladin/power/invigorating-smite', {
  name: 'Invigorating Smite',
  description: '*When you hit an enemy with your weapon, you and your allies suddenly feel invigorated by the divine power of your faith.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 3**\n\n**Encounter** ✦ Divine, Healing, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 2[W] + Charisma modifier damage. If you are bloodied, you regain hit points equal to 5 + your Wisdom modifier. Bloodied allies within 5 squares of you also regain hit points equal to 5 + your Wisdom modifier.'
    ),
  ],
  actions: [{ name: 'Invigorating Smite', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RighteousSmite = Abilities.defineAbility('paladin/power/righteous-smite', {
  name: 'Righteous Smite',
  description: '*Your righteous blow fills you and your nearby allies with preternatural resolve.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 3**\n\n**Encounter** ✦ Divine, Healing, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Charisma vs. AC\n\n**Hit:** 2[W] + Charisma modifier damage, and you and each ally within 5 squares of you gain temporary hit points equal to 5 + your Wisdom modifier.'
    ),
  ],
  actions: [{ name: 'Righteous Smite', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const StaggeringSmite = Abilities.defineAbility('paladin/power/staggering-smite', {
  name: 'Staggering Smite',
  description: '*With a mighty swing of your weapon, you knock your enemy back.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 3**\n\n**Encounter** ✦ Divine, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and you push the target a number of squares equal to your Wisdom modifier.'
    ),
  ],
  actions: [{ name: 'Staggering Smite', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const HallowedCircle = Abilities.defineAbility('paladin/power/hallowed-circle', {
  name: 'Hallowed Circle',
  description:
    '*You wave your hand through the air, and a wide circle of faintly glowing symbols appears around you, damaging enemies and protecting allies within its confines.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 5**\n\n**Daily** ✦ Divine, Implement, Zone\n\n**Standard Action** · Close burst 3\n\n**Target:** Each enemy in burst\n\n**Attack:** Charisma vs. Reflex\n\n**Hit:** 2d6 + Charisma modifier damage.\n\n**Effect:** The burst creates a zone of bright light. You and each ally within the zone gain a +1 power bonus to all defenses until the end of the encounter.'
    ),
  ],
  actions: [{ name: 'Hallowed Circle', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const MartyrsRetribution = Abilities.defineAbility('paladin/power/martyrs-retribution', {
  name: "Martyr's Retribution",
  description: '*Divine light engulfs your weapon as you sacrifice your ability to heal in order to strike down your enemy.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 5**\n\n**Daily** ✦ Divine, Radiant, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC, and you must spend a healing surge without regaining any hit points\n\n**Hit:** 4[W] + Strength modifier radiant damage.\n\n**Miss:** Half damage.'
    ),
  ],
  actions: [{ name: "Martyr's Retribution", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SignOfVulnerability = Abilities.defineAbility('paladin/power/sign-of-vulnerability', {
  name: 'Sign of Vulnerability',
  description: '*You cause a nearby foe to convulse with pain and render it more susceptible to radiant energy.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 5**\n\n**Daily** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Ranged 5\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Fortitude\n\n**Hit:** 3d8 + Charisma modifier radiant damage, and the target gains vulnerability 5 to radiant damage until the end of the encounter.\n\n**Miss:** Half damage, and the target gains no vulnerability.'
    ),
  ],
  actions: [{ name: 'Sign of Vulnerability', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AllPaladinPowers = [
  BolsteringStrike,
  EnfeeblingStrike,
  HolyStrike,
  ValiantStrike,
  FearsomeSmite,
  PiercingSmite,
  RadiantSmite,
  ShieldingSmite,
  OnPainOfDeath,
  PaladinsJudgment,
  RadiantDelirium,
  AstralSpeech,
  MartyrsBlessing,
  SacredCircle,
  ArcingSmite,
  InvigoratingSmite,
  RighteousSmite,
  StaggeringSmite,
  HallowedCircle,
  MartyrsRetribution,
  SignOfVulnerability,
]
