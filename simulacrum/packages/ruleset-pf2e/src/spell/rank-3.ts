import { Abilities } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Spell, SpellRank3, Arcane, Divine, Occult, Primal } from '@simulacrum/ruleset-pf2e/archetype'
import { SpellRank3Loadout } from '@simulacrum/ruleset-pf2e/loadout'

export const AqueousOrb = Abilities.defineAbility('spell/aqueous-orb', {
  name: 'Aqueous Orb',
  description:
    "*Concentrate, Manipulate, Water*\n\n**Traditions** Arcane, Primal\n\n**Range** 60 feet\n\n**Defense** Reflex\n\n**Duration** sustained up to 1 minute\n\nA sphere of water 10 feet in diameter forms in an unoccupied space in range, either on the ground or on the surface of a liquid. When you Cast this Spell and each time you Sustain it, you can roll the orb, moving it up to 10 feet along the ground or the surface of a liquid. The orb can move through the spaces of any creatures or obstacles that wouldn't stop the flow of water. It extinguishes non-magical fires it moves through of its size or smaller, and it attempts to counteract any magical fires it moves through. If it fails to counteract a given fire, it can't counteract that fire for the duration of the spell.\n\nThe orb can engulf Large or smaller creatures it moves through, and it can contain as many creatures as fit in its space. The orb can try to engulf the same creature only once per turn, even if you roll it onto a creature's space more than once. Any Large or smaller creature whose space the orb tries to move through can attempt a Reflex save.\n\n**Success** The creature can either let the orb pass (remaining in its space or moving out of the orb's path into a space of the creature's choice) or allow itself to be pushed in front of the orb to the end of the orb's movement.\n\n**Failure** The creature is engulfed in the orb. It moves along with the orb and must hold its breath or begin suffocating (unless it can breathe in water). An engulfed Medium or smaller creature and anyone trying to affect that creature follow the normal rules for aquatic battles. An engulfed Large creature is usually big enough that parts of it stick out from the water, and it can reach out of the water. The creature can get free either by Swimming with a successful DC 10 Athletics check or by Escaping against your spell DC. A freed creature exits the orb's space and can immediately breathe.\n\n**Critical Failure** As failure, but the creature can't Swim to get free.",
  archetypes: [Spell, SpellRank3, Arcane, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Aqueous Orb', action: ActionTypes.TwoActions }],
})

export const BindUndead = Abilities.defineAbility('spell/bind-undead', {
  name: 'Bind Undead',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** Arcane, Divine, Occult\n\n**Range** 30 feet\n\n**Target** 1 mindless undead creature with a level no greater than bind undead ’s spell rank\n\n**Duration** 1 day\n\nWith a word of power, you seize control of the target. It gains the minion trait. If you or an ally uses any hostile actions against the target, the spell ends.',
  archetypes: [Spell, SpellRank3, Arcane, Divine, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Bind Undead', action: ActionTypes.TwoActions }],
})

export const Blindness = Abilities.defineAbility('spell/blindness', {
  name: 'Blindness',
  description:
    "*Concentrate, Incapacitation, Manipulate*\n\n**Traditions** Arcane, Divine, Occult, Primal\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Fortitude\n\nYou blind the target. The effect is determined by the target's Fortitude save. The target then becomes temporarily immune for 1 minute.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is blinded until its next turn begins.\n\n**Failure** The target is blinded for 1 minute.\n\n**Critical Failure** The target is blinded permanently.",
  archetypes: [Spell, SpellRank3, Arcane, Divine, Occult, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Blindness', action: ActionTypes.TwoActions }],
})

export const ChillingDarkness = Abilities.defineAbility('spell/chilling-darkness', {
  name: 'Chilling Darkness',
  description:
    "*Attack, Cold, Concentrate, Darkness, Manipulate, Unholy*\n\n**Tradition** Divine\n\n**Lesson** Lesson of Shadow\n\n**Range** 120 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\nYou shoot an utterly cold ray of darkness tinged with unholy energy. Make a ranged spell attack. The ray deals 5d6 cold damage. If the target has the holy trait, you deal an extra 5d6 spirit damage.\n\n**Critical Success** The target takes double damage.\n\n**Success** The target takes full damage.\n\nIf the ray passes through an area of magical light or targets a creature affected by magical light, _chilling darkness_ attempts to counteract the light. If you need to determine whether the ray passes through an area of light, draw a line between yourself and the spell's target.\n\n**Heightened (+1)** The cold damage increases by 2d6, and the spirit damage against holy creatures increases by 2d6.",
  archetypes: [Spell, SpellRank3, Divine],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Chilling Darkness', action: ActionTypes.TwoActions }],
})

export const Clairaudience = Abilities.defineAbility('spell/clairaudience', {
  name: 'Clairaudience',
  description:
    "*Concentrate, Manipulate, Scrying*\n\n**Traditions** Arcane, Occult\n\n**Cast** 1 minute\n\n**Range** 500 feet\n\n**Duration** 10 minutes\n\nYou create an invisible floating ear at a location within range (even if it's outside your line of sight or line of effect). It can't move, but you can hear through the ear as if using your normal auditory senses.",
  archetypes: [Spell, SpellRank3, Arcane, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Clairaudience', action: ActionTypes.Activity }],
})

export const CozyCabin = Abilities.defineAbility('spell/cozy-cabin', {
  name: 'Cozy Cabin',
  description:
    "*Concentrate, Manipulate, Wood*\n\n**Traditions** Arcane, Occult\n\n**Cast** 1 minute\n\n**Range** 30 feet\n\n**Duration** 12 hours\n\nYou shape a cabin 20 feet on each side and 10 feet high. This cabin has the structure trait and the same restrictions as magic items that create structures. The walls of the hut are simple and wooden, with small, square glass windows, and it has one wooden door. It doesn't include its own lock, but it has a fastener to which a lock can be applied.\n\nThe interior contains three cots, one chamber pot, and a small fireplace holding a magical fire. The interior is lit with a small magical light that you can light or extinguish at will using a Sustain action. The climate inside the hut is comfortable and allows creatures inside it to withstand most hostile weather conditions, but incredible heat or cold, powerful storms, and winds of hurricane force or greater destroy the hut. Other creatures can freely enter and exit the hut without damaging it, but if you exit the hut, the spell ends. You can Dismiss the spell.",
  archetypes: [Spell, SpellRank3, Arcane, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Cozy Cabin', action: ActionTypes.Activity }],
})

export const CrisisOfFaith = Abilities.defineAbility('spell/crisis-of-faith', {
  name: 'Crisis of Faith',
  description:
    "*Concentrate, Manipulate, Mental*\n\n**Tradition** Divine\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\nYou assault the target's faith, riddling the creature with doubt and mental turmoil that deal 6d6 mental damage, or 6d8 mental damage if it can cast divine spells. The effects are determined by its Will save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes half damage.\n\n**Failure** The target takes full damage; if the target can cast divine spells, it's stupefied 1 for 1 round.\n\n**Critical Failure** The target takes double damage, is stupefied 1 for 1 round, and can't cast divine spells for 1 round.\n\nTo many deities, casting this spell on a follower of your own deity without significant cause is anathema.\n\n**Heightened (+1)** The damage increases by 2d6 (or by 2d8 if the target is a divine spellcaster).",
  archetypes: [Spell, SpellRank3, Divine],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Crisis of Faith', action: ActionTypes.TwoActions }],
})

export const DreamMessage = Abilities.defineAbility('spell/dream-message', {
  name: 'Dream Message',
  description:
    "*Concentrate, Manipulate, Mental*\n\n**Traditions** Arcane, Divine, Occult\n\n**Cast** 10 minutes\n\n**Range** planetary\n\n**Target** 1 creature you know by name and have met in person\n\n**Duration** until your next daily preparations\n\nYou send a message to your target's dream. The message is one-way, up to 1 minute of speech (roughly 150 words). If the target is asleep, they receive the message instantly. If not, they receive it the next time they sleep. As soon as they receive it, the spell ends, and you know the message was sent.\n\n**Heightened (4th)** You can target up to 10 creatures you know by name and have met in person. You must send the same message to all of them; the spell ends for each creature individually.",
  archetypes: [Spell, SpellRank3, Arcane, Divine, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Dream Message', action: ActionTypes.Activity }],
})

export const Earthbind = Abilities.defineAbility('spell/earthbind', {
  name: 'Earthbind',
  description:
    "*Concentrate, Earth, Manipulate*\n\n**Traditions** Arcane, Primal\n\n**Range** 120 feet\n\n**Target** 1 flying creature\n\n**Defense** Fortitude\n\n**Duration** varies\n\nUsing the weight of earth, you hamper a target's flight, with effects based on its Fortitude save. If the creature reaches the ground safely, it doesn't take falling damage.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target falls safely up to 120 feet.\n\n**Failure** The target falls safely up to 120 feet. If it hits the ground, it can't Fly, _levitate_, or otherwise leave the ground for 1 round.\n\n**Critical Failure** The target falls safely up to 120 feet. If it hits the ground, it can't Fly, _levitate_, or otherwise leave the ground for 1 minute.",
  archetypes: [Spell, SpellRank3, Arcane, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Earthbind', action: ActionTypes.TwoActions }],
})

export const Enthrall = Abilities.defineAbility('spell/enthrall', {
  name: 'Enthrall',
  description:
    "*Auditory, Concentrate, Emotion, Manipulate*\n\n**Traditions** Arcane, Occult\n\n**Range** 120 feet\n\n**Target** all creatures in range\n\n**Defense** Will\n\n**Duration** sustained\n\nYour words fascinate your targets. You speak or sing without interruption throughout the casting and duration. Targets who notice your speech or song might give their undivided attention; each target must attempt a Will save. The GM might grant a circumstance bonus (to a maximum of +4) if the target is of an opposing religion, ancestry, or political leaning, or is otherwise unlikely to agree with what you're saying.\n\nEach creature that comes within range has to attempt a save when you Sustain the spell. If you're speaking, _enthrall_ gains the linguistic trait.\n\n**Critical Success** The target is unaffected and notices that you tried to use magic.\n\n**Success** The target needn't pay attention but doesn't notice you tried to use magic (it might notice others are enthralled).\n\n**Failure** The target is fascinated with you. It can attempt another Will save if it witnesses actions or speech with which it disagrees. If it succeeds, it's no longer fascinated and is temporarily immune for 1 hour. If the target is subject to a hostile act, or if another creature succeeds at a Diplomacy or Intimidation check against it, the fascination ends immediately.\n\n**Critical Failure** As failure, but the target can't attempt a save to end the fascination if it disagrees with you.",
  archetypes: [Spell, SpellRank3, Arcane, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Enthrall', action: ActionTypes.TwoActions }],
})

export const FeetToFins = Abilities.defineAbility('spell/feet-to-fins', {
  name: 'Feet to Fins',
  description:
    "*Concentrate, Manipulate, Morph*\n\n**Traditions** Arcane, Primal\n\n**Lesson** Lesson of the Shark\n\n**Range** touch\n\n**Target** 1 willing creature\n\n**Duration** 10 minutes\n\nThe target's feet transform into fins, improving mobility in the water but reducing it on land. The target gains a swim Speed equal to its normal land Speed, but its land Speed becomes 5 feet.\n\n**Heightened (6th)** The spell lasts until your next daily preparations.",
  archetypes: [Spell, SpellRank3, Arcane, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Feet to Fins', action: ActionTypes.TwoActions }],
})

export const Fireball = Abilities.defineAbility('spell/fireball', {
  name: 'Fireball',
  description:
    '*Concentrate, Fire, Manipulate*\n\n**Traditions** Arcane, Primal\n\n**Range** 500 feet\n\n**Area** 20-foot burst\n\n**Defense** basic Reflex\n\nA roaring blast of fire detonates at a spot you designate, dealing 6d6 fire damage.\n\n**Heightened (+1)** The damage increases by 2d6.',
  archetypes: [Spell, SpellRank3, Arcane, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Fireball', action: ActionTypes.TwoActions }],
})

export const GhostlyWeapon = Abilities.defineAbility('spell/ghostly-weapon', {
  name: 'Ghostly Weapon',
  description:
    "*Concentrate, Manipulate*\n\n**Traditions** Arcane, Occult\n\n**Range** touch\n\n**Target** 1 weapon that is either unattended or wielded by you or a willing ally\n\n**Duration** 5 minutes\n\nThe target weapon becomes translucent and ghostly, and it can affect material and incorporeal creatures and objects. It gains the effects of the _ghost touch_ property rune, meaning it is magical if it wasn't already, is especially effective against incorporeal creatures, and can be wielded by a corporeal or incorporeal creature.",
  archetypes: [Spell, SpellRank3, Arcane, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Ghostly Weapon', action: ActionTypes.TwoActions }],
})

export const Haste = Abilities.defineAbility('spell/haste', {
  name: 'Haste',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** Arcane, Occult, Primal\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** 1 minute\n\nMagic empowers the target to act faster. It gains the quickened condition and can use the extra action each round for only Strike and Stride actions.\n\n**Heightened (7th)** You can target up to 6 creatures.',
  archetypes: [Spell, SpellRank3, Arcane, Occult, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Haste', action: ActionTypes.TwoActions }],
})

export const Heroism = Abilities.defineAbility('spell/heroism', {
  name: 'Heroism',
  description:
    "*Concentrate, Manipulate, Mental*\n\n**Traditions** Divine, Occult\n\n**Range** touch\n\n**Target** 1 creature\n\n**Duration** 10 minutes\n\nYou unlock the target's inner heroism, granting it a +1 status bonus to attack rolls, Perception checks, saving throws, and skill checks.\n\n**Heightened (6th)** The status bonus increases to +2.\n\n**Heightened (9th)** The status bonus increases to +3.",
  archetypes: [Spell, SpellRank3, Divine, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Heroism', action: ActionTypes.TwoActions }],
})

export const HolyLight = Abilities.defineAbility('spell/holy-light', {
  name: 'Holy Light',
  description:
    "*Attack, Concentrate, Fire, Holy, Light, Manipulate*\n\n**Traditions** Divine, Primal\n\n**Range** 120 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\nYou shine a blazing ray of light tinged with holy energy. Make a ranged spell attack. The ray deals 5d6 fire damage. If the target has the unholy trait, you deal an extra 5d6 spirit damage.\n\n**Critical Success** The target takes double damage.\n\n**Success** The target takes full damage.\n\nIf the light passes through an area of magical darkness or targets a creature affected by magical darkness, _holy light_ attempts to counteract the darkness. If you need to determine whether the light passes through an area of darkness, draw a line between yourself and the spell's target.\n\n**Heightened (+1)** The fire damage increases by 2d6, and the spirit damage against unholy creatures increases by 2d6.",
  archetypes: [Spell, SpellRank3, Divine, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Holy Light', action: ActionTypes.TwoActions }],
})

export const Hypercognition = Abilities.defineAbility('spell/hypercognition', {
  name: 'Hypercognition',
  description:
    "*Concentrate*\n\n**Tradition** Occult\n\n**Lesson** Lesson of Memory\n\nYou rapidly catalog and collate information relevant to your current situation. You can instantly use up to 6 Recall Knowledge actions as part of Casting this Spell. For these actions, you can't use any special abilities, reactions, or free actions that trigger when you Recall Knowledge.",
  archetypes: [Spell, SpellRank3, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Hypercognition', action: ActionTypes.SingleAction }],
})

export const Hypnotize = Abilities.defineAbility('spell/hypnotize', {
  name: 'Hypnotize',
  description:
    "*Illusion, Manipulate, Subtle, Visual*\n\n**Traditions** Arcane, Occult\n\n**Range** 120 feet\n\n**Area** 10-foot burst\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nYou create a cloud of mesmerizing patterns and colors that hovers in the air. Creatures are dazzled while inside the cloud. In addition, a creature must attempt a Will saving throw if it is inside the cloud when you cast it, when it enters the cloud, when it ends its turn within the cloud, or if it uses a Seek or Interact action on the cloud. A creature currently fascinated by _hypnotize_ doesn't attempt new saves.\n\n**Success** The target is unaffected.\n\n**Failure** The target is fascinated by the cloud.\n\n**Critical Failure** The target is fascinated by the cloud. While it remains fascinated, it can't use reactions.",
  archetypes: [Spell, SpellRank3, Arcane, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Hypnotize', action: ActionTypes.TwoActions }],
})

export const InsectForm = Abilities.defineAbility('spell/insect-form', {
  name: 'Insect Form',
  description:
    "*Concentrate, Manipulate, Polymorph*\n\n**Traditions** Arcane, Primal\n\n**Lesson** Lesson of Decay\n\n**Duration** 1 minute\n\nYou envision a simple bug and transform into a Medium animal battle form. When you Cast this Spell, choose a listed battle form. You can decide the specific type of animal (such as such as a ladybug or scarab for beetle), but this has no effect on the form's Size or statistics. While in this form, you gain the animal trait. You can Dismiss this spell.\n\nYou gain the following statistics and abilities regardless of which battle form you choose:\n\n- AC = 18 + your level. Ignore your armor's check penalty and Speed reduction.\n\n- 10 temporary Hit Points.\n\n- Low-light vision.\n\n- One or more attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +13, and your damage bonus is +2. These attacks are Strength based (for the purpose of the enfeebled condition). If your unarmed attack modifier is higher, you can use it instead.\n\n- Athletics modifier of +13, unless your own is higher.\n\nYou gain specific abilities based on the form you choose:\n\n- **Beetle** Speed 25 feet; **Melee** ◆ mandibles, **Damage** 2d10 bludgeoning.\n- **Centipede** Speed 25 feet, climb 25 feet; darkvision; **Melee** ◆ mandibles, **Damage** 1d8 piercing plus 1d4 persistent poison.\n- **Mantis** Speed 40 feet; imprecise scent 30 feet; **Melee** ◆ foreleg, **Damage** 2d8 piercing.\n- **Scorpion** Speed 40 feet; darkvision, imprecise tremorsense 60 feet; **Melee** ◆ stinger, **Damage** 1d8 piercing plus 1d4 persistent poison; **Melee** ◆ pincer (agile), **Damage** 1d6 bludgeoning.\n- **Spider** Speed 25 feet, climb 25 feet; darkvision; **Melee** ◆ fangs, **Damage** 1d6 piercing plus 1d4 persistent poison; **Ranged** ◆ web (range increment 20 feet), **Damage** immobilizes the target for 1 round or until it Escapes.\n- **Ant** Speed 30 feet, climb 30 feet; **Melee** ◆ mandibles, **Damage** 2d6 bludgeoning.\n\n**Heightened (4th)** Your battle form is Large, and your attacks have 10-foot reach. You instead gain 15 temporary HP, attack modifier +16, damage bonus +6, and Athletics +16.\n\n**Heightened (5th)** Your battle form is Huge, and your attacks have 15-foot reach. You instead gain 20 temporary HP, attack modifier +18, damage bonus +2 and double damage dice (including persistent damage), and Athletics +20.",
  archetypes: [Spell, SpellRank3, Arcane, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Insect Form', action: ActionTypes.TwoActions }],
})

export const Levitate = Abilities.defineAbility('spell/levitate', {
  name: 'Levitate',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** Arcane, Occult\n\n**Lesson** Lesson of the Flock\n\n**Range** touch\n\n**Target** 1 unattended object or willing creature\n\n**Duration** 5 minutes\n\nYou defy gravity and levitate the target 5 feet off the ground. You can Sustain the spell to move the target up or down 10 feet. A creature floating in the air from _levitate_ takes a –2 circumstance penalty to attack rolls. A floating creature can spend an Interact action to stabilize itself and negate this penalty for the remainder of its turn. If the target is adjacent to a fixed object or terrain of suitable stability, it can move across the surface by climbing (if the surface is vertical, like a wall) or crawling (if the surface is horizontal, such as a ceiling). The GM determines which surfaces can be climbed or crawled across.',
  archetypes: [Spell, SpellRank3, Arcane, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Levitate', action: ActionTypes.TwoActions }],
})

export const LightningBolt = Abilities.defineAbility('spell/lightning-bolt', {
  name: 'Lightning Bolt',
  description:
    '*Concentrate, Electricity, Manipulate*\n\n**Traditions** Arcane, Primal\n\n**Area** 120-foot line\n\n**Defense** basic Reflex\n\nA bolt of lightning strikes outward from your hand, dealing 4d12 electricity damage with a basic Reflex save.\n\n**Heightened (+1)** The damage increases by 1d12.',
  archetypes: [Spell, SpellRank3, Arcane, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Lightning Bolt', action: ActionTypes.TwoActions }],
})

export const Locate = Abilities.defineAbility('spell/locate', {
  name: 'Locate',
  description:
    "*Uncommon, Concentrate, Detection, Manipulate*\n\n**Traditions** Arcane, Divine, Occult\n\n**Cast** 10 minutes\n\n**Range** 500 feet\n\n**Target** 1 specific object or type of object\n\n**Duration** sustained\n\nYou learn the direction to the target (if you picked a specific object, such as “my mother's sword”) or the nearest target (if you picked a type of object, such as “swords”). If the target is a specific object, you must have observed it directly with your own senses. If it's a type of object, you still need to have an accurate mental image of the type of object. If there's lead or running water between you and the target, this spell can't locate the object. This means you might find a type of object farther away if the nearest one is behind lead or running water.\n\n**Heightened (5th)** You can target a specific creature or ancestry instead of an object, but you must have met or seen up close the creature or ancestry you want to target.",
  archetypes: [Spell, SpellRank3, Arcane, Divine, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Locate', action: ActionTypes.Activity }],
})

export const MadMonkeys = Abilities.defineAbility('spell/mad-monkeys', {
  name: 'Mad Monkeys',
  description:
    "*Concentrate, Manipulate*\n\n**Tradition** Primal\n\n**Lesson** Lesson of Mischief\n\n**Range** 30 feet\n\n**Area** 5-foot burst\n\n**Duration** sustained up to 1 minute\n\nMagical monkey spirits fill the area as they pile and climb on top of one another. Because the monkeys are magical spirits, they can't be attacked or hurt. Casting calm or a similar effect over the monkeys makes them docile, causing them to cease making mischief for the duration of _mad monkeys_.\n\nChoose the kind of mischief your monkeys make when you Cast the Spell. They produce the effect listed for that mischief when you Cast the Spell and the first time each round when you Sustain the spell. The first time each round when you Sustain the spell, you can move the area of the monkeys by 5 feet.\n\n- **Flagrant Burglary** The monkeys try to Steal any one item from one creature in the area. Use your spell DC – 10 as the monkeys' Thievery modifier. Their attempt relies more on distraction than subtlety, so the victim knows what item the monkeys were trying to take and whether it was taken. Getting a stolen item from the monkeys— even for the caster—requires Stealing it from them or Disarming them, using your spell DC. When the spell ends, any stolen items fall to the ground in any square of the spell's area you choose.\n- **Raucous Din** The monkeys screech loudly, potentially deafening creatures in the spell's area. Each creature in the spell's area must attempt a Fortitude save.\n\n**Critical Success** The creature is unaffected and is temporarily immune for 10 minutes.\n\n**Success** The creature is unaffected.\n\n**Failure** The creature is deafened for 1 round.\n\n**Critical Failure** The creature is deafened for 1 minute.\n- **Tumultuous Gymnastics** The monkeys jump and climb all over creatures in the spell's area, interfering with complex movements. Each creature in the spell's area must attempt a Reflex save.\n\n**Critical Success** The creature is unaffected and is temporarily immune for 10 minutes.\n\n**Success** The creature is unaffected.\n\n**Failure** For 1 round, the creature must succeed at a DC 5 flat check whenever it attempts a manipulate action. If it fails this check, the action is disrupted.\n\n**Critical Failure** As failure, but the monkeys cling to the creature tenaciously, and the effect lasts until the spell ends, even if the creature leaves the spell's area.",
  archetypes: [Spell, SpellRank3, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Mad Monkeys', action: ActionTypes.TwoActions }],
})

export const MindReading = Abilities.defineAbility('spell/mind-reading', {
  name: 'Mind Reading',
  description:
    "*Uncommon, Concentrate, Detection, Manipulate, Mental*\n\n**Traditions** Arcane, Occult\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** 1 round or sustained up to 1 minute\n\nWith a cursory mental touch, you attempt to read the target's mind. It must attempt a Will save. The target then becomes temporarily immune to your _mind reading_ for 1 hour.\n\n**Critical Success** The target perceives vague surface thoughts from you when you Cast the Spell.\n\n**Success** You find out whether the target's Intelligence modifier is higher than, equal to, or lower than yours.\n\n**Failure** You perceive vague surface thoughts from the target when you Cast the Spell, and you find out whether its Intelligence is higher than, equal to, or lower than yours.\n\n**Critical Failure** As failure, and for the duration of the spell, you can Sustain the spell to detect the target's surface thoughts again. The target doesn't receive any additional saves.",
  archetypes: [Spell, SpellRank3, Arcane, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Mind Reading', action: ActionTypes.TwoActions }],
})

export const OneWithStone = Abilities.defineAbility('spell/one-with-stone', {
  name: 'One with Stone',
  description:
    '*Concentrate, Earth, Manipulate, Polymorph*\n\n**Traditions** Arcane, Primal\n\n**Duration** 10 minutes or 8 hours\n\nYou can either transform into a stone or merge with stone. This spell has the same effects as _one with plants_, but lets you merge with or turn into stone. A stone you turn into has AC 23. You can Dismiss this spell.',
  archetypes: [Spell, SpellRank3, Arcane, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'One with Stone', action: ActionTypes.TwoActions }],
})

export const Paralyze = Abilities.defineAbility('spell/paralyze', {
  name: 'Paralyze',
  description:
    "*Concentrate, Incapacitation, Manipulate, Mental*\n\n**Traditions** Arcane, Occult\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** varies\n\nYou block the target's motor impulses before they can leave its mind, freezing target in place. The target must attempt a Will save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is stunned 1.\n\n**Failure** The target is paralyzed for 1 round.\n\n**Critical Failure** The target is paralyzed for 4 rounds. At the end of each of its turns, it can attempt a new Will save to reduce the remaining duration by 1 round, or end it entirely on a critical success.\n\n**Heightened (7th)** You can target up to 10 creatures.",
  archetypes: [Spell, SpellRank3, Arcane, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Paralyze', action: ActionTypes.TwoActions }],
})

export const RingOfTruth = Abilities.defineAbility('spell/ring-of-truth', {
  name: 'Ring of Truth',
  description:
    '*Uncommon, Concentrate, Detection, Manipulate, Mental*\n\n**Traditions** Divine, Occult\n\n**Lesson** Lesson of Vows\n\n**Range** 30 feet\n\n**Area** 20-foot burst\n\n**Defense** Will\n\n**Duration** 10 minutes\n\nYou designate an area in which lies are revealed. Creatures in the area also take a –2 status penalty to Deception checks. Each time a creature in the area speaks a true statement, the soft ring of a bell sounds in the area. Creatures are aware of the magic; therefore, they can avoid answering questions to which they would normally respond with a lie, or they can be evasive as long as they remain within the boundaries of the truth. If a creature is in the area when the spell is cast or later enters the area, that creature attempts a Will save. It uses the results of this initial save if it leaves and reenters the area.\n\n**Critical Success** The target is so convincing that the bell rings even if they lie.\n\n**Success** If the target lies and succeeds at their Deception check against all targets, the bell still rings.\n\n**Failure** The bell accurately sees through their deception and will never ring if they lie.',
  archetypes: [Spell, SpellRank3, Divine, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Ring of Truth', action: ActionTypes.TwoActions }],
})

export const SafePassage = Abilities.defineAbility('spell/safe-passage', {
  name: 'Safe Passage',
  description:
    "*Concentrate, Manipulate*\n\n**Traditions** Arcane, Divine, Primal\n\n**Range** touch\n\n**Area** 10-foot-wide, 10-foot-tall 60-foot-long section of terrain\n\n**Duration** sustained up to 1 minute\n\nYou make passage through the area safe for a brief amount of time. Anyone passing through the area gains the following benefits against harmful effects of the terrain and environment, including environmental damage, hazardous terrain, and hazards in the area. The spell grants a +2 status bonus to AC and saves against such effects, and resistance 5 to all damage from such effects. Furthermore, the spell prevents anything in the area that's prone to collapse, such as a rickety bridge or an unstable ceiling, from collapsing, except under extreme strain that would collapse a normal structure of its type.\n\n_Safe passage_ protects only against harm, not inconvenience, and it doesn't reduce difficult terrain, remove the concealed condition caused by precipitation, or the like, nor does it protect against creatures within the spell's area.\n\n**Heightened (5th)** The granted resistance increases to 10, and the area can be 120 feet long.\n\n**Heightened (8th)** The granted resistance increases to 15, and the area can be 500 feet long.",
  archetypes: [Spell, SpellRank3, Arcane, Divine, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Safe Passage', action: ActionTypes.ThreeActions }],
})

export const Slow = Abilities.defineAbility('spell/slow', {
  name: 'Slow',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** Arcane, Occult, Primal\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Fortitude\n\n**Duration** varies\n\nYou dilate the flow of time around the target, slowing its actions.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is slowed 1 for 1 round.\n\n**Failure** The target is slowed 1 for 1 minute.\n\n**Critical Failure** The target is slowed 2 for 1 minute.\n\n**Heightened (6th)** You can target up to 10 creatures.',
  archetypes: [Spell, SpellRank3, Arcane, Occult, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Slow', action: ActionTypes.TwoActions }],
})

export const SpeakWithPlants = Abilities.defineAbility('spell/speak-with-plants', {
  name: 'Speak with Plants',
  description:
    "*Concentrate, Manipulate, Plant, Wood*\n\n**Traditions** Divine, Occult, Primal\n\n**Duration** 1 hour\n\nYou can ask questions of and receive answers from plants and fungi, but the spell doesn't make them more friendly or intelligent than normal. Most normal plants and fungi have a distinctive view of the world around them, so they don't recognize details about creatures or know anything about the world beyond their immediate vicinity. Cunning plant or fungus monsters are likely to be terse and evasive, while less intelligent ones often make inane comments.\n\n**Heightened (4th)** The duration is 8 hours.",
  archetypes: [Spell, SpellRank3, Divine, Occult, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Speak with Plants', action: ActionTypes.TwoActions }],
})

export const VampiricFeast = Abilities.defineAbility('spell/vampiric-feast', {
  name: 'Vampiric Feast',
  description:
    '*Concentrate, Death, Manipulate, Void*\n\n**Traditions** Arcane, Divine, Occult\n\n**Range** touch\n\n**Target** 1 living creature\n\n**Defense** basic Fortitude\n\nYour touch leeches the lifeblood out of a target to empower yourself. You deal 6d6 void damage to the target. You gain temporary Hit Points equal to half the void damage the target takes (after applying resistances and the like). You lose any remaining temporary Hit Points after 1 minute.\n\n**Heightened (+1)** The damage increases by 2d6.',
  archetypes: [Spell, SpellRank3, Arcane, Divine, Occult],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Vampiric Feast', action: ActionTypes.TwoActions }],
})

export const VeilOfPrivacy = Abilities.defineAbility('spell/veil-of-privacy', {
  name: 'Veil of Privacy',
  description:
    "*Uncommon, Concentrate, Manipulate*\n\n**Traditions** Arcane, Occult, Primal\n\n**Cast** 10 minutes\n\n**Range** touch\n\n**Target** 1 creature or object\n\n**Duration** 8 hours\n\nYou erect protective wards that make the target difficult to detect via magic. _Veil of privacy_ attempts to counteract all detection, revelation, and scrying effects used against the target or the target's gear throughout the duration, counting cantrips as 1st-rank spells for this purpose. Successfully counteracting a spell that targets an area or multiple targets negates the effects for only _veil of privacy's_ target.",
  archetypes: [Spell, SpellRank3, Arcane, Occult, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Veil of Privacy', action: ActionTypes.Activity }],
})

export const WallOfThorns = Abilities.defineAbility('spell/wall-of-thorns', {
  name: 'Wall of Thorns',
  description:
    "*Concentrate, Manipulate, Plant, Wood*\n\n**Traditions** Arcane, Primal\n\n**Range** 60 feet\n\n**Duration** 1 minute\n\nYou grow a wall of thorny brambles from the ground. You create a 5-foot-thick wall of brambles and thorns in a straight line up to 60 feet long and 10 feet high. You must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. The wall stands vertically. If you wish, the wall can be of a shorter length or height. Everything on each side of the wall has cover from creatures on the opposite side, and the wall's spaces are difficult terrain. For every move action a creature uses to enter at least one of the wall's spaces, that creature takes 3d4 piercing damage.\n\nEach 10-foot-by-10-foot section of the wall has AC 10, Hardness 10, and 20 Hit Points. It's immune to critical hits and precision damage. A destroyed section can be moved through freely.\n\n**Heightened (+1)** The Hit Points of each section of the wall increase by 5, and the piercing damage increases by 1d4.",
  archetypes: [Spell, SpellRank3, Arcane, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Wall of Thorns', action: ActionTypes.ThreeActions }],
})

export const WallOfWind = Abilities.defineAbility('spell/wall-of-wind', {
  name: 'Wall of Wind',
  description:
    "*Air, Concentrate, Manipulate*\n\n**Traditions** Arcane, Primal\n\n**Lesson** Lesson of Snow\n\n**Range** 120 feet\n\n**Duration** 1 minute\n\nYou create a barrier of gusting winds that hinders anything moving through it. The wall of swirling winds is 5 feet thick, 60 feet long, and 30 feet high. The wall stands vertically, but you can shape its path. Though the wall of wind distorts the air, it does not hamper sight. The wall has the following effects.\n\n- Ammunition from physical ranged attacks—such as arrows, bolts, sling bullets, and other objects of similar size—can't pass through the wall. Attacks with bigger ranged weapons, such as javelins, take a –2 circumstance penalty to their attack rolls if their paths pass through the wall. Massive ranged weapons and spell effects that don't create physical objects pass through the wall with no penalty.\n\n- The wall is difficult terrain to creatures attempting to move overland through it. Gases, including creatures in _vapor form_, can't pass through the wall.\n\n- A creature that attempts to fly through the wall using a move action must attempt a Fortitude save.\n\n**Critical Success** The creature can move through the wall normally this turn.\n\n**Success** The flying creature can move through the wall this turn, but the wall is difficult terrain.\n\n**Failure** The wall stops the movement of the flying creature, and any remaining movement from its current action is wasted.\n\n**Critical Failure** As failure, and the creature is pushed 10 feet away from the wall.",
  archetypes: [Spell, SpellRank3, Arcane, Primal],
  loadout: SpellRank3Loadout,
  universal: false,
  actions: [{ name: 'Wall of Wind', action: ActionTypes.ThreeActions }],
})

export const AllRank3Spells = [
  AqueousOrb,
  BindUndead,
  Blindness,
  ChillingDarkness,
  Clairaudience,
  CozyCabin,
  CrisisOfFaith,
  DreamMessage,
  Earthbind,
  Enthrall,
  FeetToFins,
  Fireball,
  GhostlyWeapon,
  Haste,
  Heroism,
  HolyLight,
  Hypercognition,
  Hypnotize,
  InsectForm,
  Levitate,
  LightningBolt,
  Locate,
  MadMonkeys,
  MindReading,
  OneWithStone,
  Paralyze,
  RingOfTruth,
  SafePassage,
  Slow,
  SpeakWithPlants,
  VampiricFeast,
  VeilOfPrivacy,
  WallOfThorns,
  WallOfWind,
]
