import { Abilities, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import * as ActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import {
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
import { Warlock } from '@simulacrum/ruleset-dnd4e/class/class-warlock'

// Generated from the Player's Handbook Warlock powers, levels 1-10. Powers are learned through character options, so they
// aren't universal. Encounter powers come back after a short rest, daily powers after an extended rest.

export const DiabolicGrasp = Abilities.defineAbility('warlock/power/diabolic-grasp', {
  name: 'Diabolic Grasp',
  description:
    '*You crook your hand into the shape of a claw, and a great talon of sulfurous darkness forms around your enemy. It rakes fiercely at him and drags him a short distance before dissipating again.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Attack 1**\n\n**Encounter** ✦ Arcane, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature of size Large or smaller\n\n**Attack:** Constitution vs. Fortitude\n\n**Hit:** 2d8 + Constitution modifier damage, and you slide the target 2 squares.\n\n**Infernal Pact:** You slide the target a number of squares equal to 1 + your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Diabolic Grasp', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DreadfulWord = Abilities.defineAbility('warlock/power/dreadful-word', {
  name: 'Dreadful Word',
  description: '*You whisper one word of an unthinkable cosmic secret to your foe. His mind reels in terror.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Star) Attack 1**\n\n**Encounter** ✦ Arcane, Fear, Implement, Psychic\n\n**Standard Action** · Ranged 5\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 2d8 + Charisma modifier psychic damage, and the target takes a –1 penalty to Will defense until the end of your next turn.\n\n**Star Pact:** The penalty to Will defense is equal to 1 + your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Dreadful Word', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const VampiricEmbrace = Abilities.defineAbility('warlock/power/vampiric-embrace', {
  name: 'Vampiric Embrace',
  description: "*A ribbon of twisting darkness streams from your hand to your target's heart, feeding on his vital force as you grow stronger.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Attack 1**\n\n**Encounter** ✦ Arcane, Implement, Necrotic\n\n**Standard Action** · Ranged 5\n\n**Target:** One creature\n\n**Attack:** Constitution vs. Will\n\n**Hit:** 2d8 + Constitution modifier necrotic damage, and you gain 5 temporary hit points.\n\n**Infernal Pact:** You gain temporary hit points equal to 5 + your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Vampiric Embrace', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Witchfire = Abilities.defineAbility('warlock/power/witchfire', {
  name: 'Witchfire',
  description:
    "*From the mystic energy of the Feywild, you draw a brilliant white flame and set it in your enemy's mind and body. Rivulets of argent fire stream up into the air from his eyes, mouth, and hands; agony disrupts his very thoughts.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Fey) Attack 1**\n\n**Encounter** ✦ Arcane, Fire, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Reflex\n\n**Hit:** 2d6 + Charisma modifier fire damage, and the target takes a –2 penalty to attack rolls until the end of your next turn.\n\n**Fey Pact:** The penalty to attack rolls is equal to 2 + your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Witchfire', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ArmorOfAgathys = Abilities.defineAbility('warlock/power/armor-of-agathys', {
  name: 'Armor of Agathys',
  description:
    '*You surround yourself in a sheath of black ice from a dark and doleful realm. It protects you from attack and radiates fierce cold.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Attack 1**\n\n**Daily** ✦ Arcane, Cold\n\n**Standard Action** · Personal\n\n**Effect:** You gain temporary hit points equal to 10 + your Intelligence modifier. Until the end of the encounter, an enemy that starts its turn adjacent to you takes 1d6 + Constitution modifier cold damage.'
    ),
  ],
  actions: [{ name: 'Armor of Agathys', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CurseOfTheDarkDream = Abilities.defineAbility('warlock/power/curse-of-the-dark-dream', {
  name: 'Curse of the Dark Dream',
  description:
    '*You inflict a waking nightmare upon your enemy so that he can no longer tell what is real and what exists only in his mind. Under its influence he staggers about, trying to avoid falling from imaginary heights or stepping on unreal serpents.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Fey) Attack 1**\n\n**Daily** ✦ Arcane, Charm, Implement, Psychic\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 3d8 + Charisma modifier psychic damage, and you slide the target 3 squares.\n\n**Sustain Minor:** You slide the target 1 square, whether you hit or miss (save ends).'
    ),
  ],
  actions: [{ name: 'Curse of the Dark Dream', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DreadStar = Abilities.defineAbility('warlock/power/dread-star', {
  name: 'Dread Star',
  description:
    '*You create a fist-sized orb of painful blue-white radiance that whirls around your enemy, searing him. Fierce rays shoot from it like jabbing daggers of light, fencing him in where he stands.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Star) Attack 1**\n\n**Daily** ✦ Arcane, Fear, Implement, Radiant\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 3d6 + Charisma modifier radiant damage, and the target is immobilized until the end of your next turn.\n\n**Effect:** The target takes a –2 penalty to Will defense (save ends).'
    ),
  ],
  actions: [{ name: 'Dread Star', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FlamesOfPhlegethos = Abilities.defineAbility('warlock/power/flames-of-phlegethos', {
  name: 'Flames of Phlegethos',
  description:
    '*Rivulets of clinging liquid fire appear and cascade over your target. Anything that is flammable ignites at once and burns long after the streams of magic fire fade away.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Attack 1**\n\n**Daily** ✦ Arcane, Fire, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Constitution vs. Reflex\n\n**Hit:** 3d10 + Constitution modifier fire damage.\n\n**Effect:** The target takes ongoing 5 fire damage (save ends).'
    ),
  ],
  actions: [{ name: 'Flames of Phlegethos', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BeguilingTongue = Abilities.defineAbility('warlock/power/beguiling-tongue', {
  name: 'Beguiling Tongue',
  description: '*You channel the grace and glibness of your fey patrons for a time. Your voice gains great power and eloquence.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Fey) Utility 2**\n\n**Encounter** ✦ Arcane\n\n**Minor Action** · Personal\n\n**Effect:** You gain a +5 power bonus to your next Bluff, Diplomacy, or Intimidate check during this encounter.'
    ),
  ],
  actions: [{ name: 'Beguiling Tongue', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const EtherealStride = Abilities.defineAbility('warlock/power/ethereal-stride', {
  name: 'Ethereal Stride',
  description:
    '*You shift your body out of phase with the world for an instant, teleporting a short distance. When you reappear, you are still somewhat out of phase and difficult to harm or hinder for a short time.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Star) Utility 2**\n\n**Encounter** ✦ Arcane, Teleportation\n\n**Move Action** · Personal\n\n**Effect:** You can teleport 3 squares, and you gain a +2 power bonus to all defenses until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Ethereal Stride', action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FiendishResilience = Abilities.defineAbility('warlock/power/fiendish-resilience', {
  name: 'Fiendish Resilience',
  description:
    '*You call upon your patron entities to protect you with their fell power. Your flesh is infused with mystic strength, lessening the effect of enemy blows.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Utility 2**\n\n**Daily** ✦ Arcane\n\n**Minor Action** · Personal\n\n**Effect:** You gain temporary hit points equal to 5 + your Constitution modifier.'
    ),
  ],
  actions: [{ name: 'Fiendish Resilience', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShadowVeil = Abilities.defineAbility('warlock/power/shadow-veil', {
  name: 'Shadow Veil',
  description: '*You garb yourself in a pall of murky darkness. While it lasts, you are difficult to see or hear.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Star) Utility 2**\n\n**Encounter** ✦ Arcane, Illusion\n\n**Minor Action** · Personal\n\n**Effect:** You gain a +5 power bonus to Stealth checks until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Shadow Veil', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const EldritchRain = Abilities.defineAbility('warlock/power/eldritch-rain', {
  name: 'Eldritch Rain',
  description: '*You fire purple rays of eldritch power at your foes.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      "**Warlock (Fey) Attack 3**\n\n**Encounter** ✦ Arcane, Implement\n\n**Standard Action** · Ranged 10\n\n**Targets:** One creature, or two creatures no more than 5 squares apart from each other\n\n**Attack:** Charisma vs. Reflex, one attack per target\n\n**Hit:** 1d10 + Charisma modifier damage.\n\n**Fey Pact:** Gain a bonus to each attack's damage roll equal to your Intelligence modifier."
    ),
  ],
  actions: [{ name: 'Eldritch Rain', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FieryBolt = Abilities.defineAbility('warlock/power/fiery-bolt', {
  name: 'Fiery Bolt',
  description: '*You call up a bolt of golden flame and hurl it at your foe. Anyone standing close to him is burned as well.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Attack 3**\n\n**Encounter** ✦ Arcane, Fire, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Constitution vs. Reflex\n\n**Hit:** 3d6 + Constitution modifier fire damage, and creatures adjacent to the target take 1d6 + Constitution modifier fire damage.\n\n**Infernal Pact:** Creatures adjacent to the target take extra fire damage equal to your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Fiery Bolt', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FrigidDarkness = Abilities.defineAbility('warlock/power/frigid-darkness', {
  name: 'Frigid Darkness',
  description:
    '*You create a freezing black shadow around your foe, a small taste of the icy darkness in the depths of the night sky. He is unable to see well enough to defend himself while the shadows cling to him.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Star) Attack 3**\n\n**Encounter** ✦ Arcane, Cold, Fear, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Constitution vs. Fortitude\n\n**Hit:** 2d8 + Constitution modifier cold damage, and the target grants combat advantage to all of your enemies until the end of your next turn.\n\n**Star Pact:** The target takes a penalty to AC equal to your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Frigid Darkness', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const OtherwindStride = Abilities.defineAbility('warlock/power/otherwind-stride', {
  name: 'Otherwind Stride',
  description:
    '*You call up an unseen maelstrom of fey power that lashes nearby creatures . . . and you step into the vortex and emerge somewhere a short distance away.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Fey) Attack 3**\n\n**Encounter** ✦ Arcane, Implement, Teleportation\n\n**Standard Action** · Close burst 1\n\n**Target:** Each creature in burst\n\n**Attack:** Charisma vs. Fortitude\n\n**Hit:** 1d8 + Charisma modifier damage, and the target is immobilized until the end of your next turn.\n\n**Effect:** You teleport 5 squares.\n\n**Fey Pact:** You teleport a number of squares equal to 5 + your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Otherwind Stride', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AvernianEruption = Abilities.defineAbility('warlock/power/avernian-eruption', {
  name: 'Avernian Eruption',
  description:
    '*Acrid orange fumes hiss up from beneath the ground, and then suddenly ignite in a thundering detonation. Any creature in the area is burned by the searing flames.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Attack 5**\n\n**Daily** ✦ Arcane, Fire, Implement\n\n**Standard Action** · Area burst 1 within 10 squares\n\n**Target:** Each creature in burst\n\n**Attack:** Constitution vs. Reflex\n\n**Hit:** 2d10 + Constitution modifier fire damage.\n\n**Effect:** The targets take ongoing 5 fire damage (save ends).'
    ),
  ],
  actions: [{ name: 'Avernian Eruption', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CrownOfMadness = Abilities.defineAbility('warlock/power/crown-of-madness', {
  name: 'Crown of Madness',
  description:
    "*You cause an illusory, twisted crown to appear around the target's head. Under its psychic assault, your enemy loses the ability to distinguish friend from foe.*",
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Fey) Attack 5**\n\n**Daily** ✦ Arcane, Charm, Implement, Psychic\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 2d6 + Charisma modifier psychic damage.\n\n**Miss:** Half damage.\n\n**Sustain Minor:** The target makes a melee basic attack against one of its adjacent allies of your choice (save ends).'
    ),
  ],
  actions: [{ name: 'Crown of Madness', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CurseOfTheBloodyFangs = Abilities.defineAbility('warlock/power/curse-of-the-bloody-fangs', {
  name: 'Curse of the Bloody Fangs',
  description:
    '*You call up a pack of ferocious, phantasmal beasts from the darkest and most savage depths of the Feywild. Only their slavering fangs appear in this world, snapping and rending in a mad frenzy at the foe you have cursed.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Fey) Attack 5**\n\n**Daily** ✦ Arcane, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma vs. AC\n\n**Hit:** 2d10 + Charisma modifier damage.\n\n**Miss:** Half damage.\n\n**Sustain Minor:** The target and any of your enemies adjacent to it take 1d10 damage (save ends).'
    ),
  ],
  actions: [{ name: 'Curse of the Bloody Fangs', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const HungerOfHadar = Abilities.defineAbility('warlock/power/hunger-of-hadar', {
  name: 'Hunger of Hadar',
  description:
    '*You create a zone of complete, impermeable darkness filled with flying, fluttering, fanged shadows. The shadows rend at the very life force of creatures caught within.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Star) Attack 5**\n\n**Daily** ✦ Arcane, Implement, Necrotic, Zone\n\n**Standard Action** · Area burst 1 within 10 squares\n\n**Effect:** The burst creates a zone of darkness until the end of your next turn, blocking line of sight. Creatures that enter the zone or start their turns there take 2d10 necrotic damage.\n\n**Sustain Minor:** When you sustain the power, you make a secondary attack.\n\n**Secondary Target:** Each creature within the zone\n\n**Secondary Attack:** Constitution vs. Fortitude\n\n**Hit:** 1d6 + Constitution modifier necrotic damage.'
    ),
  ],
  actions: [{ name: 'Hunger of Hadar', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const DarkOnesOwnLuck = Abilities.defineAbility('warlock/power/dark-ones-own-luck', {
  name: "Dark One's Own Luck",
  description: '*Refusing the result that fate has decreed for you, you invoke stars of uncertainty and try to rewrite what has been written.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Star) Utility 6**\n\n**Daily** ✦ Arcane\n\n**Free Action** · Personal\n\n**Trigger:** You make a roll you dislike\n\n**Effect:** Reroll the attack roll, skill check, ability check, or saving throw, using the higher of the two results.'
    ),
  ],
  actions: [{ name: "Dark One's Own Luck", action: ActionTypes.FreeAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FeySwitch = Abilities.defineAbility('warlock/power/fey-switch', {
  name: 'Fey Switch',
  description:
    '*You step through the veils of the Feywild to the place where an ally stands and return to the world in that spot. Your ally is instantly whisked back to the place you started from.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Fey) Utility 6**\n\n**Encounter** ✦ Arcane, Teleportation\n\n**Move Action** · Ranged 10\n\n**Targets:** You and one willing ally\n\n**Effect:** You and your ally trade spaces.'
    ),
  ],
  actions: [{ name: 'Fey Switch', action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShroudOfBlackSteel = Abilities.defineAbility('warlock/power/shroud-of-black-steel', {
  name: 'Shroud of Black Steel',
  description:
    '*Invoking the power of your dark patrons, you transform your skin into living steel, blackened and hard yet still supple enough to move. Your quickness suffers a bit, but you are much tougher and more resilient.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Utility 6**\n\n**Daily** ✦ Arcane, Polymorph\n\n**Minor Action** · Personal\n\n**Effect:** You change your skin into living steel. You gain a +2 power bonus to AC and Fortitude defense but take a –2 penalty to speed until the end of the encounter. You can end this effect as a minor action.'
    ),
  ],
  actions: [{ name: 'Shroud of Black Steel', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SpiderClimb = Abilities.defineAbility('warlock/power/spider-climb', {
  name: 'Spider Climb',
  description: '*You bestow on yourself the ability to cling to almost any surface and climb as easily as an insect.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel6],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Utility 6**\n\n**Encounter** ✦ Arcane\n\n**Move Action** · Personal\n\n**Effect:** On this move action, you move with a climb speed equal to your speed.'
    ),
  ],
  actions: [{ name: 'Spider Climb', action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const HowlOfDoom = Abilities.defineAbility('warlock/power/howl-of-doom', {
  name: 'Howl of Doom',
  description:
    '*You unleash a devastating shout that cracks stone and pulps flesh. Supernatural terror goes with your mighty blast, and your foes are driven back in fright.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Attack 7**\n\n**Encounter** ✦ Arcane, Fear, Implement, Thunder\n\n**Standard Action** · Close blast 3\n\n**Target:** Each creature in blast\n\n**Attack:** Constitution vs. Fortitude\n\n**Hit:** 2d6 + Constitution modifier thunder damage, and you push the target 2 squares.\n\n**Infernal Pact:** You push the target a number of squares equal to 1 + your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Howl of Doom', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const InfernalMoonCurse = Abilities.defineAbility('warlock/power/infernal-moon-curse', {
  name: 'Infernal Moon Curse',
  description:
    '*The shimmer of pale, ghostly silver envelops your foe and lifts him up into the air. Its sinister radiance seeps into his body, a strange and deadly poison.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Attack 7**\n\n**Encounter** ✦ Arcane, Implement, Poison\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Constitution vs. Fortitude\n\n**Hit:** 2d8 + Constitution modifier poison damage, and the target is held immobilized 5 feet off the ground until the end of your next turn.\n\n**Infernal Pact:** You gain a bonus to the damage roll equal to your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Infernal Moon Curse', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const MireTheMind = Abilities.defineAbility('warlock/power/mire-the-mind', {
  name: 'Mire the Mind',
  description: "*You assail your foe's mind with unreal images until he can see nothing else.*",
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Fey) Attack 7**\n\n**Encounter** ✦ Arcane, Illusion, Implement, Psychic\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 1d10 + Charisma modifier psychic damage, and you and all of your allies in range are invisible to the target until the end of your next turn.\n\n**Fey Pact:** You gain a power bonus to Stealth checks equal to your Intelligence modifier until the end of the encounter.'
    ),
  ],
  actions: [{ name: 'Mire the Mind', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SignOfIllOmen = Abilities.defineAbility('warlock/power/sign-of-ill-omen', {
  name: 'Sign of Ill Omen',
  description:
    '*You sketch a glowing rune in the air with your fingertip, invoking misfortune upon your enemy. Lines of eldritch power slash across his body as you draw your sign, and fate itself turns against him for a short time.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel7],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Star) Attack 7**\n\n**Encounter** ✦ Arcane, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 2d6 + Charisma modifier damage, and the target must roll twice for its next attack and use the lower of the two rolls.\n\n**Star Pact:** When the target rolls twice, it takes a penalty to both rolls equal to your Intelligence modifier.'
    ),
  ],
  actions: [{ name: 'Sign of Ill Omen', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const CurseOfTheBlackFrost = Abilities.defineAbility('warlock/power/curse-of-the-black-frost', {
  name: 'Curse of the Black Frost',
  description:
    '*You create a fence of sharp frost-needles around your foe. They slowly freeze him, and if he moves or touches them, they grow longer and sharper.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Fey) Attack 9**\n\n**Daily** ✦ Arcane, Cold, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Reflex\n\n**Hit:** 2d8 + Charisma modifier cold damage.\n\n**Effect:** If the target moves for any reason, it takes 1d8 cold damage (save ends). If the target saves, you cannot sustain this power.\n\n**Sustain Minor:** The target takes 2d8 cold damage.'
    ),
  ],
  actions: [{ name: 'Curse of the Black Frost', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const IronSpikeOfDis = Abilities.defineAbility('warlock/power/iron-spike-of-dis', {
  name: 'Iron Spike of Dis',
  description:
    '*You call up a spear of red iron from the infernal regions and hurl it at your foe. Transfixing clothing, armor, flesh, or skin, it nails him to the spot where he stands.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Attack 9**\n\n**Daily** ✦ Arcane, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Constitution vs. Reflex\n\n**Hit:** 3d10 + Constitution modifier damage, and the target is immobilized (save ends).\n\n**Miss:** Half damage, and the target is not immobilized.'
    ),
  ],
  actions: [{ name: 'Iron Spike of Dis', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SummonsOfKhirad = Abilities.defineAbility('warlock/power/summons-of-khirad', {
  name: 'Summons of Khirad',
  description:
    "*A pale blue flame springs up from your brow as you invoke Khirad, a star of dire portent. Your enemy's mind burns with Khirad's flame, and you teleport him where you wish.*",
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Star) Attack 9**\n\n**Daily** ✦ Arcane, Implement, Psychic, Teleportation\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Constitution vs. Will\n\n**Hit:** 2d10 + Constitution modifier psychic damage, and you teleport the target to an unoccupied square within 3 squares of you.\n\n**Sustain Minor:** Make a Constitution vs. Will attack against the target. On a hit, you teleport the target to an unoccupied square within 3 squares of you. On a miss, the effect ends.'
    ),
  ],
  actions: [{ name: 'Summons of Khirad', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ThiefOfFiveFates = Abilities.defineAbility('warlock/power/thief-of-five-fates', {
  name: 'Thief of Five Fates',
  description:
    "*You bind your target's fortunes to five ill-omened stars. Under their dire influence, all sorts of mischance and bad luck befall your enemy.*",
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel9],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      "**Warlock (Star) Attack 9**\n\n**Daily** ✦ Arcane, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** Until the end of your next turn, whenever the target makes a saving throw or an attack roll, you roll a d20 without modifiers. If your result is higher than the target's unmodified die roll, the target's attack misses or the target's saving throw fails.\n\n**Sustain Minor:** Make a Charisma vs. Will attack against the target. On a hit, the effect continues. On a miss, the effect ends."
    ),
  ],
  actions: [{ name: 'Thief of Five Fates', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AmbassadorImp = Abilities.defineAbility('warlock/power/ambassador-imp', {
  name: 'Ambassador Imp',
  description: '*You conjure forth an implike presence from the netherworld and give it a message to deliver to a far-off creature.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      '**Warlock (Infernal) Utility 10**\n\n**Daily** ✦ Arcane, Conjuration\n\n**Standard Action** · Ranged 100 miles\n\n**Effect:** You whisper a message into the air, and an implike presence appears next to the creature you wish to speak to and delivers your message. If the creature has a reply, the imp appears adjacent to you at the end of your next turn to utter it. If the creature has no reply or is not within range, the imp appears adjacent to you at the end of your next turn to tell you so. The imp then disappears.'
    ),
  ],
  actions: [{ name: 'Ambassador Imp', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShadowForm = Abilities.defineAbility('warlock/power/shadow-form', {
  name: 'Shadow Form',
  description: '*You fly apart into a swarm of batlike shadows.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      "**Warlock (Star) Utility 10**\n\n**Daily** ✦ Arcane, Polymorph\n\n**Minor Action** · Personal\n\n**Effect:** You assume a shadowy form until the end of the encounter or for 5 minutes. In this form you are insubstantial, gain fly 6, and can't take standard actions. Reverting to your normal form is a minor action."
    ),
  ],
  actions: [{ name: 'Shadow Form', action: ActionTypes.MinorAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShieldingShades = Abilities.defineAbility('warlock/power/shielding-shades', {
  name: 'Shielding Shades',
  description: '*You call up a swirling shield of darkness from some far domain, interposing it between yourself and dire peril.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      "**Warlock (Star) Utility 10**\n\n**Daily** ✦ Arcane\n\n**Immediate Reaction** · Personal\n\n**Trigger:** You are hit by an attack\n\n**Effect:** Reduce the attack's damage to 0. If the attack targets other creatures, they take damage as normal."
    ),
  ],
  actions: [{ name: 'Shielding Shades', action: ActionTypes.ImmediateReaction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const WarlocksLeap = Abilities.defineAbility('warlock/power/warlocks-leap', {
  name: "Warlock's Leap",
  description:
    '*You leap through the mystic veil into the Feywild. An instant later, you return a short distance away and alight without traveling through the intervening air.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel10],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    CharacterEffects.descriptive(
      "**Warlock (Fey) Utility 10**\n\n**Daily** ✦ Arcane, Teleportation\n\n**Move Action** · Personal\n\n**Effect:** You teleport 6 squares. You do not need line of sight to the destination, but if you attempt to teleport to a space you can't occupy, you don't move."
    ),
  ],
  actions: [{ name: "Warlock's Leap", action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AllWarlockPowers = [
  DiabolicGrasp,
  DreadfulWord,
  VampiricEmbrace,
  Witchfire,
  ArmorOfAgathys,
  CurseOfTheDarkDream,
  DreadStar,
  FlamesOfPhlegethos,
  BeguilingTongue,
  EtherealStride,
  FiendishResilience,
  ShadowVeil,
  EldritchRain,
  FieryBolt,
  FrigidDarkness,
  OtherwindStride,
  AvernianEruption,
  CrownOfMadness,
  CurseOfTheBloodyFangs,
  HungerOfHadar,
  DarkOnesOwnLuck,
  FeySwitch,
  ShroudOfBlackSteel,
  SpiderClimb,
  HowlOfDoom,
  InfernalMoonCurse,
  MireTheMind,
  SignOfIllOmen,
  CurseOfTheBlackFrost,
  IronSpikeOfDis,
  SummonsOfKhirad,
  ThiefOfFiveFates,
  AmbassadorImp,
  ShadowForm,
  ShieldingShades,
  WarlocksLeap,
]
