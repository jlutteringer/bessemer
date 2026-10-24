import { Abilities, Effects, Traits } from '@simulacrum/ruleset'
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
  UtilityPower,
} from '@simulacrum/ruleset-dnd4e/tag'
import { Warlock } from '@simulacrum/ruleset-dnd4e/class/class-warlock'

// Generated from the Player's Handbook Warlock powers, levels 1-5. Powers are learned through character options, so they
// aren't universal. Encounter powers come back after a short rest, daily powers after an extended rest.

export const DiabolicGrasp = Abilities.defineAbility('warlock/power/diabolic-grasp', {
  name: 'Diabolic Grasp',
  description:
    '*You crook your hand into the shape of a claw, and a great talon of sulfurous darkness forms around your enemy. It rakes fiercely at him and drags him a short distance before dissipating again.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
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
    Effects.descriptive(
      '**Warlock (Star) Attack 5**\n\n**Daily** ✦ Arcane, Implement, Necrotic, Zone\n\n**Standard Action** · Area burst 1 within 10 squares\n\n**Effect:** The burst creates a zone of darkness until the end of your next turn, blocking line of sight. Creatures that enter the zone or start their turns there take 2d10 necrotic damage.\n\n**Sustain Minor:** When you sustain the power, you make a secondary attack.\n\n**Secondary Target:** Each creature within the zone\n\n**Secondary Attack:** Constitution vs. Fortitude\n\n**Hit:** 1d6 + Constitution modifier necrotic damage.'
    ),
  ],
  actions: [{ name: 'Hunger of Hadar', action: ActionTypes.StandardAction }],
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
]
