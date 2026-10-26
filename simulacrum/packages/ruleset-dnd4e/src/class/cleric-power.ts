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
import { Cleric } from '@simulacrum/ruleset-dnd4e/class/class-cleric'

// Generated from the Player's Handbook Cleric powers, levels 1-10. Powers are learned through character options, so they
// aren't universal. Encounter powers come back after a short rest, daily powers after an extended rest.

export const LanceOfFaith = Abilities.defineAbility('cleric/power/lance-of-faith', {
  name: 'Lance of Faith',
  description:
    "*A brilliant ray of light sears your foe with golden radiance. Sparkles of light linger around the target, guiding your ally's attack.*",
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Attack 1**\n\n**At-Will** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Ranged 5\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. Reflex\n\n**Hit:** 1d8 + Wisdom modifier radiant damage, and one ally you can see gains a +2 power bonus to his or her next attack roll against the target.\n\nIncrease damage to 2d8 + Wisdom modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Lance of Faith', action: ActionTypes.StandardAction }],
})

export const PriestsShield = Abilities.defineAbility('cleric/power/priests-shield', {
  name: "Priest's Shield",
  description: '*You utter a minor defensive prayer as you attack with your weapon.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Attack 1**\n\n**At-Will** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Ranged 5\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. Reflex\n\n**Hit:** 1d6 + Wisdom modifier radiant damage, and one ally you can see chooses either to gain temporary hit points equal to your Charisma modifier + one-half your level or to make a saving throw.\n\nIncrease damage to 2d6 + Wisdom modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Sacred Flame', action: ActionTypes.StandardAction }],
})

export const CauseFear = Abilities.defineAbility('cleric/power/cause-fear', {
  name: 'Cause Fear',
  description: '*Your holy symbol ignites with the fury of your god. Uncontrollable terror grips your enemy, causing him to instantly recoil.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
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
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      "**Cleric Attack 5**\n\n**Daily** ✦ Divine, Radiant, Weapon\n\n**Minor Action** · Melee touch\n\n**Target:** One held weapon\n\n**Effect:** Until the end of the encounter, all attacks made with the weapon deal an extra 1d6 radiant damage. When the weapon hits an enemy, the enemy takes a –2 penalty to AC until the end of the weapon wielder's next turn."
    ),
  ],
  actions: [{ name: 'Weapon of the Gods', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BastionOfHealth = Abilities.defineAbility('cleric/power/bastion-of-health', {
  name: 'Bastion of Health',
  description: '*You invoke a prayer that instantly fortifies one of your allies.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Utility 6**\n\n**Encounter** ✦ Divine, Healing\n\n**Minor Action** · Ranged 10\n\n**Target:** You or one ally\n\n**Effect:** The target can spend a healing surge. Add your Charisma modifier to the hit points regained.'
    ),
  ],
  actions: [{ name: 'Bastion of Health', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CureSeriousWounds = Abilities.defineAbility('cleric/power/cure-serious-wounds', {
  name: 'Cure Serious Wounds',
  description:
    '*You utter a simple prayer and gain the power to instantly heal wounds, and your touch momentarily suffuses you or a wounded creature with bright silver light.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Utility 6**\n\n**Daily** ✦ Divine, Healing\n\n**Standard Action** · Melee touch\n\n**Target:** You or one creature\n\n**Effect:** The target regains hit points as if it had spent two healing surges.'
    ),
  ],
  actions: [{ name: 'Cure Serious Wounds', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DivineVigor = Abilities.defineAbility('cleric/power/divine-vigor', {
  name: 'Divine Vigor',
  description: '*You call upon your deity to invigorate you and your battle-weary allies.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Utility 6**\n\n**Daily** ✦ Divine, Healing\n\n**Minor Action** · Close burst 5\n\n**Targets:** You and each ally in burst\n\n**Effect:** Each target regains the use of his or her second wind.'
    ),
  ],
  actions: [{ name: 'Divine Vigor', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const HolyLantern = Abilities.defineAbility('cleric/power/holy-lantern', {
  name: 'Holy Lantern',
  description: '*A conjured beacon of divine light shines like a lantern, piercing shadows and deception.*',
  universal: false,
  tags: [AtWillPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Utility 6**\n\n**At-Will** ✦ Conjuration, Divine\n\n**Standard Action** · Ranged 3\n\n**Effect:** You conjure a lantern that appears in 1 square within range and sheds light 5 squares in all directions. You and allies in the light gain a +2 power bonus to Perception and Insight checks. You can move the lantern up to your speed as a minor action. The lantern lasts for 10 hours, but you can have only a single holy lantern active at a time.'
    ),
  ],
  actions: [{ name: 'Holy Lantern', action: ActionTypes.StandardAction }],
})

export const AweStrike = Abilities.defineAbility('cleric/power/awe-strike', {
  name: 'Awe Strike',
  description: '*The supernatural awe and dread that radiates from you as you swing your weapon leaves your foe momentarily frozen in terror.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Attack 7**\n\n**Encounter** ✦ Divine, Fear, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. Will\n\n**Hit:** 1[W] + Strength modifier damage, and the target is immobilized until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Awe Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BreakTheSpirit = Abilities.defineAbility('cleric/power/break-the-spirit', {
  name: 'Break the Spirit',
  description: '*Calling down the power of your god, you bathe your foe in agonizing radiance, driving strength out of its impending attacks.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Attack 7**\n\n**Encounter** ✦ Charm, Divine, Implement, Radiant\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. Will\n\n**Hit:** 2d8 + Wisdom modifier radiant damage, and the target takes a penalty to attack rolls equal to your Charisma modifier until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Break the Spirit', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SearingLight = Abilities.defineAbility('cleric/power/searing-light', {
  name: 'Searing Light',
  description:
    '*You invoke the power of your deity. From your holy symbol a searing ray of light flashes forth, striking and blinding your enemy for a short time.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Attack 7**\n\n**Encounter** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Wisdom vs. Reflex\n\n**Hit:** 2d6 + Wisdom modifier radiant damage, and the target is blinded until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Searing Light', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const StrengthenTheFaithful = Abilities.defineAbility('cleric/power/strengthen-the-faithful', {
  name: 'Strengthen the Faithful',
  description:
    '*You utter a solemn prayer as you bring your weapon down upon your foe, invoking the power of your deity to physically bolster you and nearby allies.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Attack 7**\n\n**Encounter** ✦ Divine, Healing, Weapon\n\n**Standard Action** · Melee weapon\n\n**Target:** One creature\n\n**Attack:** Strength vs. AC\n\n**Hit:** 2[W] + Strength modifier damage, and you and each ally adjacent to the target can spend a healing surge. Add your Charisma modifier to the hit points regained.'
    ),
  ],
  actions: [{ name: 'Strengthen the Faithful', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AstralDefenders = Abilities.defineAbility('cleric/power/astral-defenders', {
  name: 'Astral Defenders',
  description:
    '*You conjure two ghostly soldiers, indistinct except for glowing weapons. They lash out with divine radiance against enemies that pass.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      "**Cleric Attack 9**\n\n**Daily** ✦ Conjuration, Divine, Implement, Radiant\n\n**Standard Action** · Ranged 10\n\n**Effect:** You conjure two soldiers, each occupying 1 square within range. The conjured soldiers don't attack normally, but whenever an opportunity attack would be provoked from a conjured soldier, the soldier makes a Wisdom vs. Reflex attack. On a hit, the attack deals 1d10 + Wisdom modifier radiant damage.\n\nYou can move one soldier or both a total of 3 squares as a move action. Creatures can move through the spaces occupied by the soldiers. The soldiers last until the end of the encounter."
    ),
  ],
  actions: [{ name: 'Astral Defenders', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BladeBarrier = Abilities.defineAbility('cleric/power/blade-barrier', {
  name: 'Blade Barrier',
  description: '*A barrier of whirling blades appears, slashing at those who come too close or try to pass through.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      "**Cleric Attack 9**\n\n**Daily** ✦ Conjuration, Divine, Implement\n\n**Standard Action** · Area wall 5 within 10 squares\n\n**Effect:** You conjure a wall of contiguous squares filled with spinning blades of astral energy that lasts until the end of your next turn. The wall can be up to 5 squares long and up to 2 squares high. The spaces occupied by the blade barrier are difficult terrain.\n\nIf a creature enters the barrier's space or starts its turn there, it takes 3d6 + Wisdom modifier damage plus ongoing 5 damage (save ends).\n\n**Sustain Minor:** The barrier persists."
    ),
  ],
  actions: [{ name: 'Blade Barrier', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DivinePower = Abilities.defineAbility('cleric/power/divine-power', {
  name: 'Divine Power',
  description:
    '*You swing your weapon in a wide arc around you, creating a halo of divine energy that drives foes back while fortifying you and your allies.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Attack 9**\n\n**Daily** ✦ Divine, Healing, Radiant, Weapon\n\n**Standard Action** · Close burst 2\n\n**Target:** Each enemy in burst you can see\n\n**Attack:** Strength vs. Fortitude\n\n**Hit:** 2[W] + Strength modifier radiant damage, and you push the target 1 square.\n\n**Effect:** Until the end of the encounter, you gain regeneration 5, and you and each ally within the burst gain a +2 power bonus to AC.'
    ),
  ],
  actions: [{ name: 'Divine Power', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FlameStrike = Abilities.defineAbility('cleric/power/flame-strike', {
  name: 'Flame Strike',
  description: '*A column of flame roars downward to engulf your foes.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Attack 9**\n\n**Daily** ✦ Divine, Fire, Implement\n\n**Standard Action** · Area burst 2 within 10 squares\n\n**Target:** Each enemy in burst\n\n**Attack:** Wisdom vs. Reflex\n\n**Hit:** 2d10 + Wisdom modifier fire damage, and ongoing 5 + Wisdom modifier fire damage (save ends).\n\n**Miss:** Half damage, and no ongoing fire damage.'
    ),
  ],
  actions: [{ name: 'Flame Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AstralRefuge = Abilities.defineAbility('cleric/power/astral-refuge', {
  name: 'Astral Refuge',
  description:
    '*With a touch, you send one of your allies to a sequestered location in the Astral Sea, where he can recuperate for a brief time before rejoining the battle.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Utility 10**\n\n**Daily** ✦ Divine, Healing, Teleportation\n\n**Standard Action** · Melee touch\n\n**Target:** One willing ally\n\n**Effect:** The target is whisked away to a place of safety in the Astral Sea for 3 rounds. While there, the target can spend a healing surge each round but cannot take any other actions. At the end of the effect, the target reappears in the space he or she left or, if the space is not vacant, in the nearest unoccupied space.'
    ),
  ],
  actions: [{ name: 'Astral Refuge', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const KnightsOfUnyieldingValor = Abilities.defineAbility('cleric/power/knights-of-unyielding-valor', {
  name: 'Knights of Unyielding Valor',
  description: '*You conjure four ghostly knights that carry huge shields emblazoned with the symbol of your deity.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      "**Cleric Utility 10**\n\n**Daily** ✦ Conjuration, Divine\n\n**Standard Action** · Ranged 10\n\n**Effect:** You conjure four ghostly warriors, each occupying 1 square within range. As a move action, you can move any of the knights 2 squares. They can't attack or be attacked or damaged, and they last until the end of the encounter.\n\nEnemies can't enter a square occupied by a conjured knight, but allies can move through the knights' spaces as if the knights were allies. The conjured knights grant cover to allies but not enemies."
    ),
  ],
  actions: [{ name: 'Knights of Unyielding Valor', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const MassCureLightWounds = Abilities.defineAbility('cleric/power/mass-cure-light-wounds', {
  name: 'Mass Cure Light Wounds',
  description: '*With a wave of your hand, healing motes of silver light engulf you and all nearby allies.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Utility 10**\n\n**Daily** ✦ Divine, Healing\n\n**Standard Action** · Close burst 5\n\n**Targets:** You and each ally in burst\n\n**Effect:** The targets regain hit points as if they had spent a healing surge. Add your Charisma modifier to the hit points regained.'
    ),
  ],
  actions: [{ name: 'Mass Cure Light Wounds', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShieldingWord = Abilities.defineAbility('cleric/power/shielding-word', {
  name: 'Shielding Word',
  description: '*You invoke a prayer that instantly defends one of your allies.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Cleric)],
  effects: [
    CharacterEffects.descriptive(
      '**Cleric Utility 10**\n\n**Encounter** ✦ Divine\n\n**Immediate Interrupt** · Ranged 5\n\n**Trigger:** An ally in range is hit by an attack\n\n**Effect:** The ally gains a +4 power bonus to AC until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Shielding Word', action: ActionTypes.ImmediateInterrupt }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
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
  BastionOfHealth,
  CureSeriousWounds,
  DivineVigor,
  HolyLantern,
  AweStrike,
  BreakTheSpirit,
  SearingLight,
  StrengthenTheFaithful,
  AstralDefenders,
  BladeBarrier,
  DivinePower,
  FlameStrike,
  AstralRefuge,
  KnightsOfUnyieldingValor,
  MassCureLightWounds,
  ShieldingWord,
]
