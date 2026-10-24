import { Abilities, Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { ClassFeat, ClericFeat, Feat, FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4 } from '@simulacrum/ruleset-pf2e/archetype'
import { HeavyArmor } from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { HarmfulFont, HealingFont, Holy, Unholy, Warpriest } from '@simulacrum/ruleset-pf2e/class/cleric-doctrine'

export const DeadlySimplicity = Traits.defineTrait('feat/deadly-simplicity', {
  name: 'Deadly Simplicity',
  description:
    "*Cleric*\n\n**Prerequisites** deity with a simple or unarmed attack favored weapon, trained with your deity's favored weapon\n\nWhen you are wielding your deity’s favored weapon, increase the damage die size of that weapon by one step.\n\nIf your deity’s favored weapon is an unarmed attack (such as a fist, if you worship Irori) and its damage die is smaller than d6, instead increase its damage die size to d6.",
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  effects: [],
})

export const DivineCastigation = Traits.defineTrait('feat/divine-castigation', {
  name: 'Divine Castigation',
  description:
    '*Cleric*\n\n**Prerequisites** holy or unholy trait\n\nYour deity’s grace doesn’t extend to your sworn enemies. When you cast a harm or heal spell, you can add your holy or unholy trait to it. If you do, the spell deals damage to creatures with the opposing trait, even if it wouldn’t normally damage them. The spell deals spirit damage when used this way. For example, if you are holy, you could add the holy trait to a heal spell and deal spirit damage to a fiend that has the unholy trait.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Holy), Traits.traitPrerequisite(Unholy)])],
  effects: [],
})

export const HarmingHands = Traits.defineTrait('feat/harming-hands', {
  name: 'Harming Hands',
  description:
    '*Cleric*\n\n**Prerequisites** harmful font\n\nThe mordant power of your void energy grows. When you cast _harm_, you roll d10s instead of d8s.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(HarmfulFont)],
  effects: [],
})

export const HealingHands = Traits.defineTrait('feat/healing-hands', {
  name: 'Healing Hands',
  description:
    '*Cleric*\n\n**Prerequisites** healing font\n\nYour vitality is even more vibrant and restorative. When you cast _heal_, you roll d10s instead of d8s.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(HealingFont)],
  effects: [],
})

export const PremonitionOfAvoidance = Traits.defineTrait('feat/premonition-of-avoidance', {
  name: 'Premonition of Avoidance',
  description:
    '*Cleric, Divine, Prediction*\n\n**Trigger** You are about to roll a saving throw against a hazard\n\nYour deity grants you a moment’s foresight. You gain a +2 circumstance bonus to the triggering saving throw.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  effects: [],
})

export const PremonitionOfAvoidanceAction = Abilities.defineAbility('feat/premonition-of-avoidance/action', {
  name: 'Premonition of Avoidance',
  description:
    '*Cleric, Divine, Prediction*\n\n**Trigger** You are about to roll a saving throw against a hazard\n\nYour deity grants you a moment’s foresight. You gain a +2 circumstance bonus to the triggering saving throw.',
  prerequisites: [Traits.traitPrerequisite(PremonitionOfAvoidance)],
  actions: [{ name: 'Premonition of Avoidance', action: ActionTypes.Reaction }],
})

export const CommunalHealing = Traits.defineTrait('feat/communal-healing', {
  name: 'Communal Healing',
  description:
    '*Cleric, Healing, Vitality*\n\nYou’re an exceptional conduit for vitality and, as you channel it through you, you can divert some to heal yourself or another creature. When you cast the heal spell to heal a single creature, choose another willing living creature within range of your heal to regain Hit Points equal to the heal spell’s rank.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  effects: [],
})

export const EmblazonArmament = Traits.defineTrait('feat/emblazon-armament', {
  name: 'Emblazon Armament',
  description:
    '*Cleric, Exploration*\n\nCarefully etching a sacred image into a physical object, you steel yourself for battle. You can spend 10 minutes emblazoning a symbol of your deity upon a weapon or shield. The symbol doesn’t fade until 1 year has passed, but if you Emblazon an Armament, any symbol you previously emblazoned, and any symbol already emblazoned on that item instantly disappears. The emblazoned item is a religious symbol of your deity in addition to its normal purpose, and it gains another benefit determined by the type of item. The benefit applies only to followers of the deity the symbol represents, but others can use the item normally.\n\n- **Shield** The shield gains a +1 status bonus to its Hardness. (This causes it to reduce more damage with the Shield Block reaction.).\n\n- **Weapon** The wielder gains a +1 status bonus to damage rolls with the weapon.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  effects: [],
})

export const PanicTheDead = Traits.defineTrait('feat/panic-the-dead', {
  name: 'Panic the Dead',
  description:
    '*Cleric, Emotion, Fear, Mental*\n\nVitality strikes terror in the undead. When you use a heal spell to damage undead, any undead that fails its saving throw is also frightened 1. If it critically failed, the creature also gains the fleeing condition until the start of your next turn. Mindless undead are not immune to this effect due to being mindless.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  effects: [],
})

export const RapidResponse = Traits.defineTrait('feat/rapid-response', {
  name: 'Rapid Response',
  description:
    '*Cleric*\n\n**Trigger** An ally is reduced to 0 Hit Points\n\nYou work quickly in emergencies. You Stride towards the triggering ally. You gain a +10-foot circumstance bonus to your Speed during this movement.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  effects: [],
})

export const RapidResponseAction = Abilities.defineAbility('feat/rapid-response/action', {
  name: 'Rapid Response',
  description:
    '*Cleric*\n\n**Trigger** An ally is reduced to 0 Hit Points\n\nYou work quickly in emergencies. You Stride towards the triggering ally. You gain a +10-foot circumstance bonus to your Speed during this movement.',
  prerequisites: [Traits.traitPrerequisite(RapidResponse)],
  actions: [{ name: 'Rapid Response', action: ActionTypes.Reaction }],
})

export const SapLife = Traits.defineTrait('feat/sap-life', {
  name: 'Sap Life',
  description:
    "*Cleric, Healing*\n\nYou draw the life force out of your enemies. When you cast a _harm_ spell and damage at least one living creature, you regain Hit Points equal to the spell rank of your harm spell. If you aren't a living creature, you gain no benefit from this feat.",
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  effects: [],
})

export const VersatileFont = Traits.defineTrait('feat/versatile-font', {
  name: 'Versatile Font',
  description:
    '*Cleric*\n\n**Prerequisites** harmful font or healing font; deity that allows clerics to have both fonts\n\nAs you explore your deity’s aspects, you move beyond restrictions on healing or harming. You can prepare either harm or heal in the spell slots gained from the harmful font or healing font.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(HarmfulFont), Traits.traitPrerequisite(HealingFont)])],
  effects: [],
})

export const WarpriestsArmor = Traits.defineTrait('feat/warpriests-armor', {
  name: 'Warpriest’s Armor',
  description:
    '*Cleric*\n\n**Prerequisites** warpriest doctrine\n\nYour training has helped you adapt to ever-heavier armor. You are trained in heavy armor. Whenever you gain a class feature that grants you expert or greater proficiency in medium armor, you also gain that proficiency in heavy armor. You treat armor you wear of 2 Bulk or higher as though it were 1 Bulk lighter (to a minimum of 1 Bulk).',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(Warpriest)],
  effects: [Effects.modifyCharacteristic(HeavyArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ChannelSmite = Traits.defineTrait('feat/channel-smite', {
  name: 'Channel Smite',
  description:
    '*Cleric, Divine*\n\n**Cost** Expend a harm or heal spell\n\nYou siphon the energies of life and death through a melee attack and into your foe. Make a melee Strike. On a hit, you cast the 1-action version of the expended spell to damage the target, in addition to the normal damage from your Strike. The target automatically gets a failure on its save (or a critical failure if your Strike was a critical hit). The spell doesn’t have the manipulate trait when cast this way.\n\nThe spell is expended with no effect if your Strike fails or hits a creature that isn’t damaged by that energy type (such as if you hit a non-undead creature with a heal spell).',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  effects: [],
})

export const ChannelSmiteAction = Abilities.defineAbility('feat/channel-smite/action', {
  name: 'Channel Smite',
  description:
    '*Cleric, Divine*\n\n**Cost** Expend a harm or heal spell\n\nYou siphon the energies of life and death through a melee attack and into your foe. Make a melee Strike. On a hit, you cast the 1-action version of the expended spell to damage the target, in addition to the normal damage from your Strike. The target automatically gets a failure on its save (or a critical failure if your Strike was a critical hit). The spell doesn’t have the manipulate trait when cast this way.\n\nThe spell is expended with no effect if your Strike fails or hits a creature that isn’t damaged by that energy type (such as if you hit a non-undead creature with a heal spell).',
  prerequisites: [Traits.traitPrerequisite(ChannelSmite)],
  actions: [{ name: 'Channel Smite', action: ActionTypes.TwoActions }],
})

export const DirectedChannel = Traits.defineTrait('feat/directed-channel', {
  name: 'Directed Channel',
  description:
    '*Cleric*\n\nYou can shape the energy you channel in a single direction. When you cast a version of harm or heal that has an area, you can make its area a 60-foot cone instead of a 30-foot emanation.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  effects: [],
})

export const DivineInfusion = Traits.defineTrait('feat/divine-infusion', {
  name: 'Divine Infusion',
  description:
    '*Cleric, Concentrate, Spellshape*\n\nYou pour energy into the subject of your healing to empower its attacks. If the next action you use is to cast harm or heal to restore Hit Points to a single creature, the target then deals an additional 1d6 damage with its melee weapons and unarmed attacks until the end of its next turn. The damage type is void if you cast harm and vitality if you cast heal.\n\nIf the spell cast is at least 5th rank, this damage increases to 2d6, and if the spell is at least 8th rank, the damage increases to 3d6.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  effects: [],
})

export const DivineInfusionAction = Abilities.defineAbility('feat/divine-infusion/action', {
  name: 'Divine Infusion',
  description:
    '*Cleric, Concentrate, Spellshape*\n\nYou pour energy into the subject of your healing to empower its attacks. If the next action you use is to cast harm or heal to restore Hit Points to a single creature, the target then deals an additional 1d6 damage with its melee weapons and unarmed attacks until the end of its next turn. The damage type is void if you cast harm and vitality if you cast heal.\n\nIf the spell cast is at least 5th rank, this damage increases to 2d6, and if the spell is at least 8th rank, the damage increases to 3d6.',
  prerequisites: [Traits.traitPrerequisite(DivineInfusion)],
  actions: [{ name: 'Divine Infusion', action: ActionTypes.SingleAction }],
})

export const RaiseSymbol = Traits.defineTrait('feat/raise-symbol', {
  name: 'Raise Symbol',
  description:
    '*Cleric*\n\n**Requirements** You are wielding a religious symbol\n\nYou present your religious symbol emphatically. You gain a +2 circumstance bonus to saving throws until the start of your next turn. While it’s raised, if you roll a success at a saving throw against a vitality or void effect, you get a critical success instead.\n\nIf the religious symbol you’re raising is a shield, such as with Emblazon Armaments, you gain the effects of Raise a Shield when you use this action and the effects of this action when you Raise a Shield.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  effects: [],
})

export const RaiseSymbolAction = Abilities.defineAbility('feat/raise-symbol/action', {
  name: 'Raise Symbol',
  description:
    '*Cleric*\n\n**Requirements** You are wielding a religious symbol\n\nYou present your religious symbol emphatically. You gain a +2 circumstance bonus to saving throws until the start of your next turn. While it’s raised, if you roll a success at a saving throw against a vitality or void effect, you get a critical success instead.\n\nIf the religious symbol you’re raising is a shield, such as with Emblazon Armaments, you gain the effects of Raise a Shield when you use this action and the effects of this action when you Raise a Shield.',
  prerequisites: [Traits.traitPrerequisite(RaiseSymbol)],
  actions: [{ name: 'Raise Symbol', action: ActionTypes.SingleAction }],
})

export const RestorativeStrike = Traits.defineTrait('feat/restorative-strike', {
  name: 'Restorative Strike',
  description:
    "*Cleric*\n\n**Requirements** You have a harm or heal spell you can cast\n\nYou balance both sides of the scales, restoring yourself while striking a foe. Cast a 1-action _harm_ or _heal_ spell to heal yourself, expending the spell normally. It loses the manipulate trait when cast this way. Then make a melee Strike. If you make this Strike with your deity's favored weapon, you gain a +1 status bonus to the attack roll.\n\nIf the Strike hits, you can target a second willing creature to heal the same amount from the spell. This creature can be outside of the spell's range, provided it's adjacent to the enemy you hit.",
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  effects: [],
})

export const RestorativeStrikeAction = Abilities.defineAbility('feat/restorative-strike/action', {
  name: 'Restorative Strike',
  description:
    "*Cleric*\n\n**Requirements** You have a harm or heal spell you can cast\n\nYou balance both sides of the scales, restoring yourself while striking a foe. Cast a 1-action _harm_ or _heal_ spell to heal yourself, expending the spell normally. It loses the manipulate trait when cast this way. Then make a melee Strike. If you make this Strike with your deity's favored weapon, you gain a +1 status bonus to the attack roll.\n\nIf the Strike hits, you can target a second willing creature to heal the same amount from the spell. This creature can be outside of the spell's range, provided it's adjacent to the enemy you hit.",
  prerequisites: [Traits.traitPrerequisite(RestorativeStrike)],
  actions: [{ name: 'Restorative Strike', action: ActionTypes.TwoActions }],
})

export const SacredGround = Traits.defineTrait('feat/sacred-ground', {
  name: 'Sacred Ground',
  description:
    '*Cleric, Consecration, Divine, Exploration*\n\n**Frequency** once per 10 minutes\n\n**Prerequisites** harmful font or healing font\n\nYou pray continuously for 1 minute to call a subtle shadow of your deity’s realm over a 30-foot burst centered on you. It lasts for 10 minutes, and a creature that remains in the area for the entire 10 minutes regains Hit Points equal to your level. If you have a healing font, this activity has the healing and vitality traits and heals living creatures.\n\nIf you have a harmful font, this activity has the healing and void traits and heals undead creatures (or other creatures with void healing). Clerics with Versatile Font can choose either or both. It can’t damage creatures in any case.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(HarmfulFont), Traits.traitPrerequisite(HealingFont)])],
  effects: [],
})

export const SelectClericFeat2 = CharacterOptions.selectTraitOption('cleric/select-feat-2', {
  name: 'Cleric Feat (Level 2)',
  filter: { archetypes: [ClericFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectClericFeat4 = CharacterOptions.selectTraitOption('cleric/select-feat-4', {
  name: 'Cleric Feat (Level 4)',
  filter: { archetypes: [ClericFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const AllClericFeatEntities = [
  DeadlySimplicity,
  DivineCastigation,
  HarmingHands,
  HealingHands,
  PremonitionOfAvoidance,
  PremonitionOfAvoidanceAction,
  CommunalHealing,
  EmblazonArmament,
  PanicTheDead,
  RapidResponse,
  RapidResponseAction,
  SapLife,
  VersatileFont,
  WarpriestsArmor,
  ChannelSmite,
  ChannelSmiteAction,
  DirectedChannel,
  DivineInfusion,
  DivineInfusionAction,
  RaiseSymbol,
  RaiseSymbolAction,
  RestorativeStrike,
  RestorativeStrikeAction,
  SacredGround,
]
