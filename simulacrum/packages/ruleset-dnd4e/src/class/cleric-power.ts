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
import { Cleric } from '@simulacrum/ruleset-dnd4e/class/class-cleric'

// Generated from the Player's Handbook Cleric powers, levels 1-5. Powers are learned through character options, so they
// aren't universal. Encounter powers come back after a short rest, daily powers after an extended rest.

export const LanceOfFaith = Abilities.defineAbility('cleric/power/lance-of-faith', {
  name: 'Lance of Faith',
  description:
    "*A brilliant ray of light sears your foe with golden radiance. Sparkles of light linger around the target, guiding your ally's attack.*",
  universal: false,
  archetypes: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**At-Will** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Ranged 5\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. Reflex\n\n**Hit:** 1d8 + Wisdom modifier radiant damage, and one ally you can see gains a +2 power bonus to his or her next attack roll against the target.\n\nIncrease damage to 2d8 + Wisdom modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Lance of Faith', action: ActionTypes.StandardAction }],
})

export const PriestsShield = Abilities.defineAbility('cleric/power/priests-shield', {
  name: "Priest's Shield",
  description: '*You utter a minor defensive prayer as you attack with your weapon.*',
  universal: false,
  archetypes: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**At-Will** ✦ Divine, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage, and you and one adjacent ally gain a +1 power bonus to AC until the end of your next turn.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.'
    ),
  ],
  actions: [{ name: "Priest's Shield", action: ActionTypes.StandardAction }],
})

export const RighteousBrand = Abilities.defineAbility('cleric/power/righteous-brand', {
  name: 'Righteous Brand',
  description:
    "*You smite your foe with your weapon and brand it with a ghostly, glowing symbol of your deity's anger. By naming one of your allies when the symbol appears, you add divine power to that ally's attacks against the branded foe.*",
  universal: false,
  archetypes: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**At-Will** ✦ Divine, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier damage, and one ally within 5 squares of you gains a power bonus to melee attack rolls against the target equal to your Strength modifier until the end of your next turn.\n\nIncrease damage to 2[W] + Strength modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Righteous Brand', action: ActionTypes.StandardAction }],
})

export const SacredFlame = Abilities.defineAbility('cleric/power/sacred-flame', {
  name: 'Sacred Flame',
  description:
    '*Sacred light shines from above, searing a single enemy with its radiance while at the same time aiding an ally with its beneficent power.*',
  universal: false,
  archetypes: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**At-Will** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Ranged 5\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. Reflex\n\n**Hit:** 1d6 + Wisdom modifier radiant damage, and one ally you can see chooses either to gain temporary hit points equal to your Charisma modifier + one-half your level or to make a saving throw.\n\nIncrease damage to 2d6 + Wisdom modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Sacred Flame', action: ActionTypes.StandardAction }],
})

export const CauseFear = Abilities.defineAbility('cleric/power/cause-fear', {
  name: 'Cause Fear',
  description: '*Your holy symbol ignites with the fury of your god. Uncontrollable terror grips your enemy, causing him to instantly recoil.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**Encounter** ✦ Divine, Fear, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. Will\n\n**Hit:** The target moves its speed + your Charisma modifier away from you. The fleeing target avoids unsafe squares and difficult terrain if it can. This movement provokes opportunity attacks.'
    ),
  ],
  actions: [{ name: 'Cause Fear', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DivineGlow = Abilities.defineAbility('cleric/power/divine-glow', {
  name: 'Divine Glow',
  description:
    '*Murmuring a prayer to your deity, you invoke a blast of white radiance from your holy symbol. Foes burn in its stern light, but your allies are heartened and guided by it.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**Encounter** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Close blast 3\n\n**Target:** Each enemy in blast\n\n**Attack:** Wisdom vs. Reflex\n\n**Hit:** 1d8 + Wisdom modifier radiant damage.\n\n**Effect:** Allies in the blast gain a +2 power bonus to attack rolls until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Divine Glow', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const HealingStrike = Abilities.defineAbility('cleric/power/healing-strike', {
  name: 'Healing Strike',
  description:
    '*Divine radiance gleams from your weapon. When you smite your enemy, your deity bestows a minor blessing in the form of healing for you or one of your allies.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**Encounter** ✦ Divine, Healing, Radiant, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier radiant damage, and the target is marked until the end of your next turn. In addition, you or one ally within 5 squares of you can spend a healing surge.'
    ),
  ],
  actions: [{ name: 'Healing Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const WrathfulThunder = Abilities.defineAbility('cleric/power/wrathful-thunder', {
  name: 'Wrathful Thunder',
  description: '*Your arm is made strong by the power of your deity. When you strike, a terrible thunder clap smites your adversary and dazes him.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**Encounter** ✦ Divine, Thunder, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier thunder damage, and the target is dazed until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Wrathful Thunder', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AvengingFlame = Abilities.defineAbility('cleric/power/avenging-flame', {
  name: 'Avenging Flame',
  description: '*You slam your weapon into your foe, who bursts into flame. Divine fire avenges each attack your enemy dares to make.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      "**Cleric Attack 1**\n\n**Daily** ✦ Divine, Fire, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and ongoing 5 fire damage (save ends).\n\n**Miss:** Half damage, and no ongoing fire damage.\n\n**Special:** If the target attacks on its turn, it can't attempt a saving throw against the ongoing damage."
    ),
  ],
  actions: [{ name: 'Avenging Flame', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BeaconOfHope = Abilities.defineAbility('cleric/power/beacon-of-hope', {
  name: 'Beacon of Hope',
  description:
    '*A burst of divine energy harms your foes and heals your allies. The radiant energy lingers around your holy symbol and improves your healing powers for the rest of the battle.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**Daily** ✦ Divine, Healing, Implement\n\n**Standard Action** · Close burst 3\n\n**Target:** Each enemy in burst\n\n**Attack:** Wisdom vs. Will\n\n**Hit:** The target is weakened until the end of its next turn.\n\n**Effect:** You and all your allies in the burst regain 5 hit points, and your healing powers restore +5 hit points until the end of the encounter.'
    ),
  ],
  actions: [{ name: 'Beacon of Hope', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CascadeOfLight = Abilities.defineAbility('cleric/power/cascade-of-light', {
  name: 'Cascade of Light',
  description: '*A burst of divine radiance sears your foe.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**Daily** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. Will\n\n**Hit:** 3d8 + Wisdom modifier radiant damage, and the target gains vulnerability 5 to all your attacks (save ends).\n\n**Miss:** Half damage, and the target gains no vulnerability.'
    ),
  ],
  actions: [{ name: 'Cascade of Light', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const GuardianOfFaith = Abilities.defineAbility('cleric/power/guardian-of-faith', {
  name: 'Guardian of Faith',
  description:
    "*You conjure a ghostly guardian, indistinct except for a glowing shield emblazoned with your deity's symbol. A burst of radiance erupts from it to sear foes that move next to it.*",
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 1**\n\n**Daily** ✦ Conjuration, Divine, Implement, Radiant\n\n**Standard Action** · Ranged 5\n\n**Effect:** You conjure a guardian that occupies 1 square within range. Every round, you can move the guardian 3 squares as a move action. The guardian lasts until the end of the encounter. Any creature that ends its turn next to the conjured guardian is subject to a Wisdom vs. Fortitude attack. On a hit, the attack deals 1d8 + Wisdom modifier radiant damage.'
    ),
  ],
  actions: [{ name: 'Guardian of Faith', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Bless = Abilities.defineAbility('cleric/power/bless', {
  name: 'Bless',
  description: '*You beseech your deity to bless you and your allies.*',
  universal: false,
  archetypes: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Utility 2**\n\n**Daily** ✦ Divine\n\n**Standard Action** · Close burst 20\n\n**Targets:** You and each ally in burst\n\n**Effect:** Until the end of the encounter, all targets gain a +1 power bonus to attack rolls.'
    ),
  ],
  actions: [{ name: 'Bless', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CureLightWounds = Abilities.defineAbility('cleric/power/cure-light-wounds', {
  name: 'Cure Light Wounds',
  description:
    '*You utter a simple prayer and gain the power to instantly heal wounds, and your touch momentarily suffuses you or a wounded creature with a dim silver light.*',
  universal: false,
  archetypes: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Utility 2**\n\n**Daily** ✦ Divine, Healing\n\n**Standard Action** · Melee touch\n\n**Target:** You or one creature\n\n**Effect:** The target regains hit points as if it had spent a healing surge.'
    ),
  ],
  actions: [{ name: 'Cure Light Wounds', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DivineAid = Abilities.defineAbility('cleric/power/divine-aid', {
  name: 'Divine Aid',
  description: '*You beseech your deity to grant you or one of your allies the strength to overcome a hindrance.*',
  universal: false,
  archetypes: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Utility 2**\n\n**Encounter** ✦ Divine\n\n**Standard Action** · Ranged 5\n\n**Target:** You or one ally\n\n**Effect:** The target makes a saving throw with a bonus equal to your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Divine Aid', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Sanctuary = Abilities.defineAbility('cleric/power/sanctuary', {
  name: 'Sanctuary',
  description: "*You cast a protective ward upon a creature that makes enemies' attacks less effective.*",
  universal: false,
  archetypes: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Utility 2**\n\n**Encounter** ✦ Divine\n\n**Standard Action** · Ranged 10\n\n**Target:** You or one creature\n\n**Effect:** The target receives a +5 bonus to all defenses. The effect lasts until the target attacks or until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Sanctuary', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShieldOfFaith = Abilities.defineAbility('cleric/power/shield-of-faith', {
  name: 'Shield of Faith',
  description: '*A gleaming shield of divine energy appears over you, granting you and nearby allies protection against attacks.*',
  universal: false,
  archetypes: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Utility 2**\n\n**Daily** ✦ Divine\n\n**Standard Action** · Close burst 5\n\n**Targets:** You and each ally in burst\n\n**Effect:** The targets gain a +2 power bonus to AC until the end of the encounter.'
    ),
  ],
  actions: [{ name: 'Shield of Faith', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BlazingBeacon = Abilities.defineAbility('cleric/power/blazing-beacon', {
  name: 'Blazing Beacon',
  description:
    "*You invoke your deity's name, and holy light envelops your weapon. When you strike your foe, a blazing beacon in the form of a holy rune floats above its head to guide your allies' ranged attacks as well.*",
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 3**\n\n**Encounter** ✦ Divine, Radiant, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 1[W] + Strength modifier radiant damage, and all ranged attack rolls against the target gain a +4 power bonus until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Blazing Beacon', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Command = Abilities.defineAbility('cleric/power/command', {
  name: 'Command',
  description:
    '*You utter a single word to your foe, a word that demands obedience. You can choose to drive the foe back, order it closer, or cause the foe to throw itself to the ground.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 3**\n\n**Encounter** ✦ Charm, Divine, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. Will\n\n**Hit:** The target is dazed until the end of your next turn. In addition, you can choose to knock the target prone or slide the target a number of squares equal to 3 + your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Command', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DauntingLight = Abilities.defineAbility('cleric/power/daunting-light', {
  name: 'Daunting Light',
  description: "*A burning column of light engulfs your foe. Its brilliance burns and hinders your foe's defense for a short time.*",
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 3**\n\n**Encounter** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. Reflex\n\n**Hit:** 2d10 + Wisdom modifier radiant damage.\n\n**Effect:** One ally you can see gains combat advantage against the target until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Daunting Light', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SplitTheSky = Abilities.defineAbility('cleric/power/split-the-sky', {
  name: 'Split the Sky',
  description:
    '*You invoke ancient words of wrath as you attack with your weapon. The thundering power of your melee strike causes your foe to stumble backward and fall.*',
  universal: false,
  archetypes: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 3**\n\n**Encounter** ✦ Divine, Thunder, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. Fortitude\n\n**Hit:** 1[W] + Strength modifier thunder damage, and you push the target 2 squares and knock it prone.'
    ),
  ],
  actions: [{ name: 'Split the Sky', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ConsecratedGround = Abilities.defineAbility('cleric/power/consecrated-ground', {
  name: 'Consecrated Ground',
  description:
    '*With a wave of your hand, jagged lines of radiant light spread across the ground around you like a crackling web, moving at your whim. Enemies that stand upon this ground suffer the wrath of your deity.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 5**\n\n**Daily** ✦ Divine, Healing, Radiant, Zone\n\n**Standard Action** · Close burst 1\n\n**Effect:** The burst creates a zone of sanctified ground that lasts until the end of your next turn. You can move the origin square of the zone 3 squares as a move action. Enemies that start their turns within the zone take 1d6 + your Charisma modifier radiant damage. You and any allies who are bloodied and start their turns within the zone regain hit points equal to 1 + your Charisma modifier.\n\n**Sustain Minor:** The zone persists.'
    ),
  ],
  actions: [{ name: 'Consecrated Ground', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RuneOfPeace = Abilities.defineAbility('cleric/power/rune-of-peace', {
  name: 'Rune of Peace',
  description: '*You smash your weapon into your foe, leaving behind a glowing rune that prevents your foe from making attacks.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      '**Cleric Attack 5**\n\n**Daily** ✦ Charm, Divine, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. Will\n\n**Hit:** 1[W] + Strength modifier damage, and the target cannot attack (save ends).\n\n**Miss:** The target cannot attack you until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Rune of Peace', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SpiritualWeapon = Abilities.defineAbility('cleric/power/spiritual-weapon', {
  name: 'Spiritual Weapon',
  description:
    "*You conjure a glowing weapon adorned with the symbol of your deity. The weapon attacks one of your foes and guides your allies' attacks against the same target.*",
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      "**Cleric Attack 5**\n\n**Daily** ✦ Conjuration, Divine, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. AC\n\n**Hit:** 1d10 + Wisdom modifier damage.\n\n**Effect:** You conjure a weapon that appears in the target's square and attacks. Your allies gain combat advantage against the target. You can move the weapon up to 10 squares to another enemy's square as a move action. The weapon lasts until the end of your next turn.\n\n**Sustain Minor:** When you sustain the power, repeat the attack. Your allies continue to gain combat advantage against the weapon's target."
    ),
  ],
  actions: [{ name: 'Spiritual Weapon', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const WeaponOfTheGods = Abilities.defineAbility('cleric/power/weapon-of-the-gods', {
  name: 'Weapon of the Gods',
  description: '*Your weapon glows with divine radiance, enhancing your attacks.*',
  universal: false,
  archetypes: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    Effects.descriptive(
      "**Cleric Attack 5**\n\n**Daily** ✦ Divine, Radiant, Weapon\n\n**Minor Action** · Melee touch\n\n**Target:** One held weapon\n\n**Effect:** Until the end of the encounter, all attacks made with the weapon deal an extra 1d6 radiant damage. When the weapon hits an enemy, the enemy takes a –2 penalty to AC until the end of the weapon wielder's next turn."
    ),
  ],
  actions: [{ name: 'Weapon of the Gods', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AllClericPowers = [
  LanceOfFaith,
  PriestsShield,
  RighteousBrand,
  SacredFlame,
  CauseFear,
  DivineGlow,
  HealingStrike,
  WrathfulThunder,
  AvengingFlame,
  BeaconOfHope,
  CascadeOfLight,
  GuardianOfFaith,
  Bless,
  CureLightWounds,
  DivineAid,
  Sanctuary,
  ShieldOfFaith,
  BlazingBeacon,
  Command,
  DauntingLight,
  SplitTheSky,
  ConsecratedGround,
  RuneOfPeace,
  SpiritualWeapon,
  WeaponOfTheGods,
]
