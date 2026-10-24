import { Abilities, Effects, Traits } from '@simulacrum/ruleset'
import { Expressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import { AttackPower, EncounterPower, Feat, UtilityPower } from '@simulacrum/ruleset-dnd4e/tag'
import { ChannelDivinity } from '@simulacrum/ruleset-dnd4e/common'
import * as Deities from '@simulacrum/ruleset-dnd4e/deity'
import { ClericChannelDivinity } from '@simulacrum/ruleset-dnd4e/class/class-cleric'
import { ChannelDivinityFeature } from '@simulacrum/ruleset-dnd4e/class/class-paladin'

// Divinity feats grant characters who have the Channel Divinity class feature (clerics and paladins) a channel divinity power

export const ArmorOfBahamut = Traits.defineTrait('feat/armor-of-bahamut', {
  name: 'Armor of Bahamut',
  description:
    '**Prerequisites:** Channel Divinity class feature, must worship Bahamut\n\nYou can invoke the power of your deity to use *armor of Bahamut*.',
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.Bahamut),
  ],
  effects: [],
})

export const ArmorOfBahamutPower = Abilities.defineAbility('feat/power/armor-of-bahamut', {
  name: 'Channel Divinity: Armor of Bahamut',
  description: '*Bahamut protects you or a friend from devastating harm.*',
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(ArmorOfBahamut)],
  effects: [
    Effects.descriptive(
      '**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine\n\n**Immediate Interrupt** · Ranged 5\n\n**Trigger:** An enemy scores a critical hit on you or an ally\n\n**Effect:** Turn a critical hit against you or an ally within range into a normal hit.\n\n**Special:** You must take the Armor of Bahamut feat to use this power.'
    ),
  ],
  actions: [{ name: 'Channel Divinity: Armor of Bahamut', action: ActionTypes.ImmediateInterrupt, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const AvandrasRescue = Traits.defineTrait('feat/avandras-rescue', {
  name: "Avandra's Rescue",
  description:
    "**Prerequisites:** Channel Divinity class feature, must worship Avandra\n\nYou can invoke the power of your deity to use *Avandra's rescue*.",
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.Avandra),
  ],
  effects: [],
})

export const AvandrasRescuePower = Abilities.defineAbility('feat/power/avandras-rescue', {
  name: "Channel Divinity: Avandra's Rescue",
  description: '*Avandra smiles upon you and helps you rescue a friend in need.*',
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(AvandrasRescue)],
  effects: [
    Effects.descriptive(
      "**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine\n\n**Move Action** · Melee 1\n\n**Target:** One ally\n\n**Effect:** Shift into the space of an adjacent ally; that ally simultaneously shifts into your space. Your space and your ally's space must be the same size.\n\n**Special:** You must take the Avandra's Rescue feat to use this power."
    ),
  ],
  actions: [{ name: "Channel Divinity: Avandra's Rescue", action: ActionTypes.MoveAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const CorellonsGrace = Traits.defineTrait('feat/corellons-grace', {
  name: "Corellon's Grace",
  description:
    "**Prerequisites:** Channel Divinity class feature, must worship Corellon\n\nYou can invoke the power of your deity to use *Corellon's grace*.",
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.Corellon),
  ],
  effects: [],
})

export const CorellonsGracePower = Abilities.defineAbility('feat/power/corellons-grace', {
  name: "Channel Divinity: Corellon's Grace",
  description: "*Corellon's grace allows you to move when others take action.*",
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(CorellonsGrace)],
  effects: [
    Effects.descriptive(
      "**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine\n\n**Immediate Interrupt** · Ranged 10\n\n**Trigger:** Another creature within range spends an action point to take an extra action\n\n**Effect:** You take a move action.\n\n**Special:** You must take the Corellon's Grace feat to use this power."
    ),
  ],
  actions: [{ name: "Channel Divinity: Corellon's Grace", action: ActionTypes.ImmediateInterrupt, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const HarmonyOfErathis = Traits.defineTrait('feat/harmony-of-erathis', {
  name: 'Harmony of Erathis',
  description:
    '**Prerequisites:** Channel Divinity class feature, must worship Erathis\n\nYou can invoke the power of your deity to use *harmony of Erathis*.',
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.Erathis),
  ],
  effects: [],
})

export const HarmonyOfErathisPower = Abilities.defineAbility('feat/power/harmony-of-erathis', {
  name: 'Channel Divinity: Harmony of Erathis',
  description: '*Erathis brings harmony of purpose to like-minded allies.*',
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(HarmonyOfErathis)],
  effects: [
    Effects.descriptive(
      '**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine\n\n**Minor Action** · Ranged 10\n\n**Target:** One ally\n\n**Effect:** If you have at least three allies within range, grant one of those allies a +2 power bonus to the first attack roll he or she makes before the start of your next turn.\n\n**Special:** You must take the Harmony of Erathis feat to use this power.'
    ),
  ],
  actions: [{ name: 'Channel Divinity: Harmony of Erathis', action: ActionTypes.MinorAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const IounsPoise = Traits.defineTrait('feat/iouns-poise', {
  name: "Ioun's Poise",
  description:
    "**Prerequisites:** Channel Divinity class feature, must worship Ioun\n\nYou can invoke the power of your deity to use *Ioun's poise*.",
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.Ioun),
  ],
  effects: [],
})

export const IounsPoisePower = Abilities.defineAbility('feat/power/iouns-poise', {
  name: "Channel Divinity: Ioun's Poise",
  description: '*Ioun grants strength of will to those she favors.*',
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(IounsPoise)],
  effects: [
    Effects.descriptive(
      "**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine\n\n**Minor Action** · Ranged 5\n\n**Target:** You or one ally\n\n**Effect:** The target gains a +5 power bonus to Will defense until the start of your next turn.\n\n**Special:** You must take the Ioun's Poise feat to use this power."
    ),
  ],
  actions: [{ name: "Channel Divinity: Ioun's Poise", action: ActionTypes.MinorAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const KordsFavor = Traits.defineTrait('feat/kords-favor', {
  name: "Kord's Favor",
  description:
    "**Prerequisites:** Channel Divinity class feature, must worship Kord\n\nYou can invoke the power of your deity to use *Kord's favor*.",
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.Kord),
  ],
  effects: [],
})

export const KordsFavorPower = Abilities.defineAbility('feat/power/kords-favor', {
  name: "Channel Divinity: Kord's Favor",
  description: '*Kord favors a strong hit in combat with healing.*',
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(KordsFavor)],
  effects: [
    Effects.descriptive(
      "**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine, Healing\n\n**Free Action** · Ranged 5\n\n**Trigger:** You or an ally within range scores a critical hit with a melee attack\n\n**Effect:** You or the ally can spend a healing surge.\n\n**Special:** You must take the Kord's Favor feat to use this power."
    ),
  ],
  actions: [{ name: "Channel Divinity: Kord's Favor", action: ActionTypes.FreeAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const MelorasTide = Traits.defineTrait('feat/meloras-tide', {
  name: "Melora's Tide",
  description:
    "**Prerequisites:** Channel Divinity class feature, must worship Melora\n\nYou can invoke the power of your deity to use *Melora's tide*.",
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.Melora),
  ],
  effects: [],
})

export const MelorasTidePower = Abilities.defineAbility('feat/power/meloras-tide', {
  name: "Channel Divinity: Melora's Tide",
  description: '*Melora sends a tide of healing energy to aid you or a bloodied friend.*',
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(MelorasTide)],
  effects: [
    Effects.descriptive(
      "**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine, Healing\n\n**Minor Action** · Ranged 5\n\n**Target:** You or one ally; bloodied target only\n\n**Effect:** The target gains regeneration 2 until the end of the encounter or until he or she is no longer bloodied.\n\nIf you are 11th level or higher, this power grants regeneration 4 instead. If you are 21st level or higher, this power grants regeneration 6 instead.\n\n**Special:** You must take the Melora's Tide feat to use this power."
    ),
  ],
  actions: [{ name: "Channel Divinity: Melora's Tide", action: ActionTypes.MinorAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const MoradinsResolve = Traits.defineTrait('feat/moradins-resolve', {
  name: "Moradin's Resolve",
  description:
    "**Prerequisites:** Channel Divinity class feature, must worship Moradin\n\nYou can invoke the power of your deity to use *Moradin's resolve*.",
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.Moradin),
  ],
  effects: [],
})

export const MoradinsResolvePower = Abilities.defineAbility('feat/power/moradins-resolve', {
  name: "Channel Divinity: Moradin's Resolve",
  description: "*Moradin's blessing puts the small on more equal footing with the large.*",
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(MoradinsResolve)],
  effects: [
    Effects.descriptive(
      "**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine\n\n**Minor Action** · Personal\n\n**Effect:** Until the end of your next turn, you gain a +2 bonus to attack rolls against Large or larger creatures.\n\n**Special:** You must take the Moradin's Resolve feat to use this power."
    ),
  ],
  actions: [{ name: "Channel Divinity: Moradin's Resolve", action: ActionTypes.MinorAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const PelorsRadiance = Traits.defineTrait('feat/pelors-radiance', {
  name: "Pelor's Radiance",
  description:
    "**Prerequisites:** Channel Divinity class feature, must worship Pelor\n\nYou can invoke the power of your deity to use *Pelor's radiance*.",
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.Pelor),
  ],
  effects: [],
})

export const PelorsRadiancePower = Abilities.defineAbility('feat/power/pelors-radiance', {
  name: "Channel Divinity: Pelor's Radiance",
  description: "*When undead creatures abound, Pelor's radiance shines to aid the faithful.*",
  tags: [EncounterPower, AttackPower],
  prerequisites: [Traits.traitPrerequisite(PelorsRadiance)],
  effects: [
    Effects.descriptive(
      "**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Close burst 1 (3 at 11th level, 5 at 21st level)\n\n**Target:** Each undead creature in burst\n\n**Attack:** Wisdom vs. Will\n\n**Hit:** 1d12 + Wisdom modifier radiant damage, and the target is stunned until the end of your next turn.\n\nIncrease damage to 2d12 at 5th level, 3d12 at 11th, 4d12 at 15th, 5d12 at 21st, and 6d12 at 25th.\n\n**Special:** You must take the Pelor's Radiance feat to use this power."
    ),
  ],
  actions: [{ name: "Channel Divinity: Pelor's Radiance", action: ActionTypes.StandardAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const RavenQueensBlessing = Traits.defineTrait('feat/raven-queens-blessing', {
  name: "Raven Queen's Blessing",
  description:
    "**Prerequisites:** Channel Divinity class feature, must worship the Raven Queen\n\nYou can invoke the power of your deity to use *Raven Queen's blessing*.",
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.RavenQueen),
  ],
  effects: [],
})

export const RavenQueensBlessingPower = Abilities.defineAbility('feat/power/raven-queens-blessing', {
  name: "Channel Divinity: Raven Queen's Blessing",
  description: '*The Raven Queen grants a boon to those who send the dead on their way.*',
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(RavenQueensBlessing)],
  effects: [
    Effects.descriptive(
      "**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine, Healing\n\n**Free Action** · Ranged 10\n\n**Trigger:** Your attack drops an enemy within range to 0 hit points or fewer\n\n**Effect:** You or an ally within 5 squares of the enemy can spend a healing surge.\n\n**Special:** You must take the Raven Queen's Blessing feat to use this power."
    ),
  ],
  actions: [{ name: "Channel Divinity: Raven Queen's Blessing", action: ActionTypes.FreeAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const SehaninesReversal = Traits.defineTrait('feat/sehanines-reversal', {
  name: "Sehanine's Reversal",
  description:
    "**Prerequisites:** Channel Divinity class feature, must worship Sehanine\n\nYou can invoke the power of your deity to use *Sehanine's reversal*.",
  tags: [Feat],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(ClericChannelDivinity), Traits.traitPrerequisite(ChannelDivinityFeature)]),
    Traits.traitPrerequisite(Deities.Sehanine),
  ],
  effects: [],
})

export const SehaninesReversalPower = Abilities.defineAbility('feat/power/sehanines-reversal', {
  name: "Channel Divinity: Sehanine's Reversal",
  description: "*Sehanine's blessing turns the powers of your enemies against them.*",
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(SehaninesReversal)],
  effects: [
    Effects.descriptive(
      "**Channel Divinity Feat Power**\n\n**Encounter** ✦ Divine\n\n**No Action** · Ranged 5\n\n**Trigger:** You roll a natural 20 on a saving throw\n\n**Effect:** Choose an enemy within range; that creature gains the condition you just saved against.\n\n**Special:** You must take the Sehanine's Reversal feat to use this power."
    ),
  ],
  actions: [{ name: "Channel Divinity: Sehanine's Reversal", action: ActionTypes.NoAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const AllDivinityFeats = [
  ArmorOfBahamut,
  ArmorOfBahamutPower,
  AvandrasRescue,
  AvandrasRescuePower,
  CorellonsGrace,
  CorellonsGracePower,
  HarmonyOfErathis,
  HarmonyOfErathisPower,
  IounsPoise,
  IounsPoisePower,
  KordsFavor,
  KordsFavorPower,
  MelorasTide,
  MelorasTidePower,
  MoradinsResolve,
  MoradinsResolvePower,
  PelorsRadiance,
  PelorsRadiancePower,
  RavenQueensBlessing,
  RavenQueensBlessingPower,
  SehaninesReversal,
  SehaninesReversalPower,
]
