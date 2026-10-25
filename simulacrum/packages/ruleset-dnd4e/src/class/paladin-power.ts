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
import { Paladin } from '@simulacrum/ruleset-dnd4e/class/class-paladin'

// Generated from the Player's Handbook Paladin powers, levels 1-10. Powers are learned through character options, so they
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

export const DivineBodyguard = Abilities.defineAbility('paladin/power/divine-bodyguard', {
  name: 'Divine Bodyguard',
  description: '*As your weapon connects with your enemies, so too does the magic of your god connect you to your allies.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      "**Paladin Utility 6**\n\n**Daily** ✦ Divine\n\n**Minor Action** · Ranged 5\n\n**Effect:** Choose an ally within 5 squares of you. You take half that ally's damage until the end of the encounter or until you end the effect as a free action. No power or effect can reduce the damage you take from this power."
    ),
  ],
  actions: [{ name: 'Divine Bodyguard', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const OneHeartOneMind = Abilities.defineAbility('paladin/power/one-heart-one-mind', {
  name: 'One Heart, One Mind',
  description: '*You and your trusted allies form a telepathic bond.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Utility 6**\n\n**Daily** ✦ Divine\n\n**Minor Action** · Close burst 6\n\n**Targets:** You and each ally in burst\n\n**Effect:** Until the end of the encounter, targets can communicate telepathically with each other out to a range of 20 squares, and your aid another actions give a +4 bonus instead of +2.'
    ),
  ],
  actions: [{ name: 'One Heart, One Mind', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const WrathOfTheGods = Abilities.defineAbility('paladin/power/wrath-of-the-gods', {
  name: 'Wrath of the Gods',
  description: '*A halo of divine light emanates from you, enabling you and nearby allies to strike down your enemies with greater determination.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Utility 6**\n\n**Daily** ✦ Divine\n\n**Minor Action** · Close burst 1\n\n**Targets:** You and each ally in burst\n\n**Effect:** The targets add your Charisma modifier to damage rolls until the end of the encounter.'
    ),
  ],
  actions: [{ name: 'Wrath of the Gods', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BeckonFoe = Abilities.defineAbility('paladin/power/beckon-foe', {
  name: 'Beckon Foe',
  description: '*You pull an enemy toward you, dealing grievous wounds as he tries to rebuke you.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 7**\n\n**Encounter** ✦ Divine, Implement\n\n**Standard Action** · Ranged 5\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 2d10 + Charisma modifier damage, and you pull the target a number of squares equal to your Wisdom modifier.'
    ),
  ],
  actions: [{ name: 'Beckon Foe', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BenignTransposition = Abilities.defineAbility('paladin/power/benign-transposition', {
  name: 'Benign Transposition',
  description: '*You call upon the power of your deity to switch places with an ally and strike a foe within reach of your new position.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 7**\n\n**Encounter** ✦ Divine, Teleportation, Weapon\n\n**Standard Action** · Melee weapon\n\n**Primary Target:** One ally within a number of squares equal to your Wisdom modifier\n\n**Effect:** You and the target swap places. If an enemy is now within your melee reach, you can make a secondary attack against it.\n\n**Secondary Target:** One enemy\n\n**Secondary Attack:** Charisma vs. AC\n\n**Hit:** 2[W] + Charisma modifier damage.'
    ),
  ],
  actions: [{ name: 'Benign Transposition', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DivineReverence = Abilities.defineAbility('paladin/power/divine-reverence', {
  name: 'Divine Reverence',
  description: '*You present yourself with such conviction that your enemies cannot help but be awestruck by the power of your faith.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 7**\n\n**Encounter** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Close burst 1\n\n**Target:** Each enemy in burst\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 1d8 + Charisma modifier radiant damage, and the target is dazed until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Divine Reverence', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ThunderSmite = Abilities.defineAbility('paladin/power/thunder-smite', {
  name: 'Thunder Smite',
  description: '*Your weapon flashes as it strikes, and moments later, a peal of thunder slams into your foe.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 7**\n\n**Encounter** ✦ Divine, Thunder, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC (can score a critical hit against a marked enemy on a roll of 19–20)\n\n**Hit:** 2[W] + Strength modifier thunder damage, and the target is knocked prone.'
    ),
  ],
  actions: [{ name: 'Thunder Smite', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CrownOfGlory = Abilities.defineAbility('paladin/power/crown-of-glory', {
  name: 'Crown of Glory',
  description: '*A scintillating crown of radiant energy appears above your head, then expands suddenly to cripple nearby enemies.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      "**Paladin Attack 9**\n\n**Daily** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Close burst 1\n\n**Target:** Each enemy in burst\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 2d8 + Charisma modifier radiant damage.\n\n**Effect:** Any enemy that starts its turn adjacent to you is slowed until the end of your next turn.\n\n**Sustain Minor:** You can sustain the power's effect."
    ),
  ],
  actions: [{ name: 'Crown of Glory', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const OneStandsAlone = Abilities.defineAbility('paladin/power/one-stands-alone', {
  name: 'One Stands Alone',
  description: '*Unable to fight alongside your allies, you turn to your faith for protection and press forward undaunted.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 9**\n\n**Daily** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Close burst 1\n\n**Target:** Each enemy in burst\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 2d8 + Charisma modifier radiant damage.\n\n**Effect:** The targets are weakened (save ends).\n\n**Special:** You cannot use this power if any allies are within 5 squares of you.'
    ),
  ],
  actions: [{ name: 'One Stands Alone', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RadiantPulse = Abilities.defineAbility('paladin/power/radiant-pulse', {
  name: 'Radiant Pulse',
  description: '*You target an enemy with a searing, pulsating light that also damages enemies adjacent to him and thrusts them back.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Attack 9**\n\n**Daily** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Ranged 10\n\n**Primary Target:** One creature\n\n**Attack:** Charisma vs. Fortitude\n\n**Hit:** 1d10 + Charisma modifier radiant damage. Make a secondary attack.\n\n**Secondary Target:** Each enemy adjacent to the primary target\n\n**Secondary Attack:** Charisma vs. Fortitude\n\n**Hit:** 1d10 + Charisma modifier radiant damage, and you push the target 3 squares.\n\n**Sustain Minor:** When you sustain this power, you can repeat the secondary attack (the primary target is the same each time).\n\n**Miss:** Half damage, and no secondary attack.'
    ),
  ],
  actions: [{ name: 'Radiant Pulse', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CleansingSpirit = Abilities.defineAbility('paladin/power/cleansing-spirit', {
  name: 'Cleansing Spirit',
  description:
    "*A translucent outline briefly appears above the creature you designate. The divine spirit gestures, relieving some of the creature's suffering, then fades instantly away.*",
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Utility 10**\n\n**Encounter** ✦ Divine\n\n**Minor Action** · Ranged 5\n\n**Target:** You or one ally\n\n**Effect:** The target makes a saving throw with a +2 bonus.'
    ),
  ],
  actions: [{ name: 'Cleansing Spirit', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const NobleShield = Abilities.defineAbility('paladin/power/noble-shield', {
  name: 'Noble Shield',
  description:
    '*You quickly throw up your hand, and a vortex of swirling energy surrounds you and your friends, shielding them from harm at your expense.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Utility 10**\n\n**Daily** ✦ Divine\n\n**Immediate Interrupt** · Personal\n\n**Trigger:** You are targeted by a close attack or an area attack\n\n**Effect:** A close attack or an area attack targeting you automatically hits you, and any of your allies who are also hit take only half damage. This power does not change other effects the attack might cause.'
    ),
  ],
  actions: [{ name: 'Noble Shield', action: ActionTypes.ImmediateInterrupt }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const TurnTheTide = Abilities.defineAbility('paladin/power/turn-the-tide', {
  name: 'Turn the Tide',
  description:
    '*You whisper a solemn hymn, and divine light washes gently over you and nearby allies, potentially negating harmful and debilitating afflictions.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Paladin)],
  effects: [
    Effects.descriptive(
      '**Paladin Utility 10**\n\n**Daily** ✦ Divine\n\n**Standard Action** · Close burst 3\n\n**Targets:** You and each ally in burst\n\n**Effect:** The targets make saving throws against every effect that a save can end.'
    ),
  ],
  actions: [{ name: 'Turn the Tide', action: ActionTypes.StandardAction }],
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
  DivineBodyguard,
  OneHeartOneMind,
  WrathOfTheGods,
  BeckonFoe,
  BenignTransposition,
  DivineReverence,
  ThunderSmite,
  CrownOfGlory,
  OneStandsAlone,
  RadiantPulse,
  CleansingSpirit,
  NobleShield,
  TurnTheTide,
]
