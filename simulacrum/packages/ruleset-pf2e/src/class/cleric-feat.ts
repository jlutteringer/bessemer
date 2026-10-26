import { Abilities, Attributes, CharacterOptions, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import {
  ClassFeat,
  ClericFeat,
  Feat,
  FeatLevel1,
  FeatLevel2,
  FeatLevel3,
  FeatLevel4,
  FeatLevel5,
  FeatLevel6,
  FeatLevel7,
  FeatLevel8,
  FeatLevel9,
  FeatLevel10,
} from '@simulacrum/ruleset-pf2e/tag'
import { HeavyArmor } from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { HarmfulFont, HealingFont, Holy, Unholy, Warpriest } from '@simulacrum/ruleset-pf2e/class/cleric-doctrine'
import { DomainInitiate } from '@simulacrum/ruleset-pf2e/class/cleric-domain'

export const DeadlySimplicity = Traits.defineTrait('feat/deadly-simplicity', {
  name: 'Deadly Simplicity',
  description:
    "*Cleric*\n\n**Prerequisites** deity with a simple or unarmed attack favored weapon, trained with your deity's favored weapon\n\nWhen you are wielding your deity’s favored weapon, increase the damage die size of that weapon by one step.\n\nIf your deity’s favored weapon is an unarmed attack (such as a fist, if you worship Irori) and its damage die is smaller than d6, instead increase its damage die size to d6.",
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  effects: [],
})

export const DivineCastigation = Traits.defineTrait('feat/divine-castigation', {
  name: 'Divine Castigation',
  description:
    '*Cleric*\n\n**Prerequisites** holy or unholy trait\n\nYour deity’s grace doesn’t extend to your sworn enemies. When you cast a harm or heal spell, you can add your holy or unholy trait to it. If you do, the spell deals damage to creatures with the opposing trait, even if it wouldn’t normally damage them. The spell deals spirit damage when used this way. For example, if you are holy, you could add the holy trait to a heal spell and deal spirit damage to a fiend that has the unholy trait.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Holy), Traits.traitPrerequisite(Unholy)])],
  effects: [],
})

export const HarmingHands = Traits.defineTrait('feat/harming-hands', {
  name: 'Harming Hands',
  description:
    '*Cleric*\n\n**Prerequisites** [harmful font](trait:cleric)\n\nThe mordant power of your void energy grows. When you cast [_harm_](ability:spell/harm), you roll d10s instead of d8s.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(HarmfulFont)],
  effects: [],
})

export const HealingHands = Traits.defineTrait('feat/healing-hands', {
  name: 'Healing Hands',
  description:
    '*Cleric*\n\n**Prerequisites** [healing font](trait:cleric)\n\nYour vitality is even more vibrant and restorative. When you cast [_heal_](ability:spell/heal), you roll d10s instead of d8s.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(HealingFont)],
  effects: [],
})

export const PremonitionOfAvoidance = Traits.defineTrait('feat/premonition-of-avoidance', {
  name: 'Premonition of Avoidance',
  description:
    '*Cleric, Divine, Prediction*\n\n**Trigger** You are about to roll a saving throw against a hazard\n\nYour deity grants you a moment’s foresight. You gain a +2 circumstance bonus to the triggering saving throw.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  effects: [],
})

export const PremonitionOfAvoidanceAction = Abilities.defineAbility('feat/premonition-of-avoidance/action', {
  name: 'Premonition of Avoidance',
  description: '*Cleric, Divine, Prediction*',
  prerequisites: [Traits.traitPrerequisite(PremonitionOfAvoidance)],
  actions: [
    {
      name: 'Premonition of Avoidance',
      description:
        '**Trigger** You are about to roll a saving throw against a hazard\n\nYour deity grants you a moment’s foresight. You gain a +2 circumstance bonus to the triggering saving throw.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const CommunalHealing = Traits.defineTrait('feat/communal-healing', {
  name: 'Communal Healing',
  description:
    '*Cleric, Healing, Vitality*\n\nYou’re an exceptional conduit for vitality and, as you channel it through you, you can divert some to heal yourself or another creature. When you cast the heal spell to heal a single creature, choose another willing living creature within range of your heal to regain [Hit Points](characteristic:hit-points) equal to the heal spell’s rank.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  effects: [],
})

export const EmblazonArmament = Traits.defineTrait('feat/emblazon-armament', {
  name: 'Emblazon Armament',
  description:
    '*Cleric, Exploration*\n\nCarefully etching a sacred image into a physical object, you steel yourself for battle. You can spend 10 minutes emblazoning a symbol of your deity upon a weapon or shield. The symbol doesn’t fade until 1 year has passed, but if you Emblazon an Armament, any symbol you previously emblazoned, and any symbol already emblazoned on that item instantly disappears. The emblazoned item is a religious symbol of your deity in addition to its normal purpose, and it gains another benefit determined by the type of item. The benefit applies only to followers of the deity the symbol represents, but others can use the item normally.\n\n- **Shield** The shield gains a +1 status bonus to its Hardness. (This causes it to reduce more damage with the Shield Block reaction.).\n\n- **Weapon** The wielder gains a +1 status bonus to damage rolls with the weapon.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  effects: [],
})

export const PanicTheDead = Traits.defineTrait('feat/panic-the-dead', {
  name: 'Panic the Dead',
  description:
    '*Cleric, Emotion, Fear, Mental*\n\nVitality strikes terror in the undead. When you use a heal spell to damage undead, any undead that fails its saving throw is also [frightened](content:conditions/frightened) 1. If it critically failed, the creature also gains the [fleeing](content:conditions/fleeing) condition until the start of your next turn. Mindless undead are not immune to this effect due to being mindless.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  effects: [],
})

export const RapidResponse = Traits.defineTrait('feat/rapid-response', {
  name: 'Rapid Response',
  description:
    '*Cleric*\n\n**Trigger** An ally is reduced to 0 [Hit Points](characteristic:hit-points)\n\nYou work quickly in emergencies. You [Stride](content:playing-the-game/stride) towards the triggering ally. You gain a +10-foot circumstance bonus to your [Speed](characteristic:speed) during this movement.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  effects: [],
})

export const RapidResponseAction = Abilities.defineAbility('feat/rapid-response/action', {
  name: 'Rapid Response',
  description: '*Cleric*',
  prerequisites: [Traits.traitPrerequisite(RapidResponse)],
  actions: [
    {
      name: 'Rapid Response',
      description:
        '**Trigger** An ally is reduced to 0 [Hit Points](characteristic:hit-points)\n\nYou work quickly in emergencies. You [Stride](content:playing-the-game/stride) towards the triggering ally. You gain a +10-foot circumstance bonus to your [Speed](characteristic:speed) during this movement.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const SapLife = Traits.defineTrait('feat/sap-life', {
  name: 'Sap Life',
  description:
    "*Cleric, Healing*\n\nYou draw the life force out of your enemies. When you cast a [_harm_](ability:spell/harm) spell and damage at least one living creature, you regain [Hit Points](characteristic:hit-points) equal to the spell rank of your harm spell. If you aren't a living creature, you gain no benefit from this feat.",
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  effects: [],
})

export const VersatileFont = Traits.defineTrait('feat/versatile-font', {
  name: 'Versatile Font',
  description:
    '*Cleric*\n\n**Prerequisites** [harmful font or healing font](trait:cleric); deity that allows clerics to have both fonts\n\nAs you explore your deity’s aspects, you move beyond restrictions on healing or harming. You can prepare either harm or heal in the spell slots gained from the harmful font or healing font.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(HarmfulFont), Traits.traitPrerequisite(HealingFont)])],
  effects: [],
})

export const WarpriestsArmor = Traits.defineTrait('feat/warpriests-armor', {
  name: 'Warpriest’s Armor',
  description:
    '*Cleric*\n\n**Prerequisites** warpriest doctrine\n\nYour training has helped you adapt to ever-heavier armor. You are trained in heavy armor. Whenever you gain a class feature that grants you expert or greater proficiency in medium armor, you also gain that proficiency in heavy armor. You treat armor you wear of 2 Bulk or higher as though it were 1 Bulk lighter (to a minimum of 1 Bulk).',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(Warpriest)],
  effects: [CharacterEffects.modifyCharacteristic(HeavyArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ChannelSmite = Traits.defineTrait('feat/channel-smite', {
  name: 'Channel Smite',
  description:
    '*Cleric, Divine*\n\n**Cost** Expend a harm or heal spell\n\nYou siphon the energies of life and death through a melee attack and into your foe. Make a melee [Strike](content:playing-the-game/strike). On a hit, you cast the 1-action version of the expended spell to damage the target, in addition to the normal damage from your Strike. The target automatically gets a failure on its save (or a critical failure if your Strike was a critical hit). The spell doesn’t have the manipulate trait when cast this way.\n\nThe spell is expended with no effect if your Strike fails or hits a creature that isn’t damaged by that energy type (such as if you hit a non-undead creature with a heal spell).',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  effects: [],
})

export const ChannelSmiteAction = Abilities.defineAbility('feat/channel-smite/action', {
  name: 'Channel Smite',
  description: '*Cleric, Divine*',
  prerequisites: [Traits.traitPrerequisite(ChannelSmite)],
  actions: [
    {
      name: 'Channel Smite',
      description:
        '**Cost** Expend a harm or heal spell\n\nYou siphon the energies of life and death through a melee attack and into your foe. Make a melee [Strike](content:playing-the-game/strike). On a hit, you cast the 1-action version of the expended spell to damage the target, in addition to the normal damage from your Strike. The target automatically gets a failure on its save (or a critical failure if your Strike was a critical hit). The spell doesn’t have the manipulate trait when cast this way.\n\nThe spell is expended with no effect if your Strike fails or hits a creature that isn’t damaged by that energy type (such as if you hit a non-undead creature with a heal spell).',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DirectedChannel = Traits.defineTrait('feat/directed-channel', {
  name: 'Directed Channel',
  description:
    '*Cleric*\n\nYou can shape the energy you channel in a single direction. When you cast a version of harm or heal that has an area, you can make its area a 60-foot cone instead of a 30-foot emanation.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  effects: [],
})

export const DivineInfusion = Traits.defineTrait('feat/divine-infusion', {
  name: 'Divine Infusion',
  description:
    '*Cleric, Concentrate, Spellshape*\n\nYou pour energy into the subject of your healing to empower its attacks. If the next action you use is to cast harm or heal to restore [Hit Points](characteristic:hit-points) to a single creature, the target then deals an additional 1d6 damage with its melee weapons and unarmed attacks until the end of its next turn. The damage type is void if you cast harm and vitality if you cast heal.\n\nIf the spell cast is at least 5th rank, this damage increases to 2d6, and if the spell is at least 8th rank, the damage increases to 3d6.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  effects: [],
})

export const DivineInfusionAction = Abilities.defineAbility('feat/divine-infusion/action', {
  name: 'Divine Infusion',
  description: '*Cleric, Concentrate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(DivineInfusion)],
  actions: [
    {
      name: 'Divine Infusion',
      description:
        'You pour energy into the subject of your healing to empower its attacks. If the next action you use is to cast harm or heal to restore [Hit Points](characteristic:hit-points) to a single creature, the target then deals an additional 1d6 damage with its melee weapons and unarmed attacks until the end of its next turn. The damage type is void if you cast harm and vitality if you cast heal.\n\nIf the spell cast is at least 5th rank, this damage increases to 2d6, and if the spell is at least 8th rank, the damage increases to 3d6.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const RaiseSymbol = Traits.defineTrait('feat/raise-symbol', {
  name: 'Raise Symbol',
  description:
    '*Cleric*\n\n**Requirements** You are wielding a religious symbol\n\nYou present your religious symbol emphatically. You gain a +2 circumstance bonus to saving throws until the start of your next turn. While it’s raised, if you roll a success at a saving throw against a vitality or void effect, you get a critical success instead.\n\nIf the religious symbol you’re raising is a shield, such as with Emblazon Armaments, you gain the effects of [Raise a Shield](content:playing-the-game/raise-a-shield) when you use this action and the effects of this action when you Raise a Shield.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  effects: [],
})

export const RaiseSymbolAction = Abilities.defineAbility('feat/raise-symbol/action', {
  name: 'Raise Symbol',
  description: '*Cleric*',
  prerequisites: [Traits.traitPrerequisite(RaiseSymbol)],
  actions: [
    {
      name: 'Raise Symbol',
      description:
        '**Requirements** You are wielding a religious symbol\n\nYou present your religious symbol emphatically. You gain a +2 circumstance bonus to saving throws until the start of your next turn. While it’s raised, if you roll a success at a saving throw against a vitality or void effect, you get a critical success instead.\n\nIf the religious symbol you’re raising is a shield, such as with Emblazon Armaments, you gain the effects of [Raise a Shield](content:playing-the-game/raise-a-shield) when you use this action and the effects of this action when you Raise a Shield.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const RestorativeStrike = Traits.defineTrait('feat/restorative-strike', {
  name: 'Restorative Strike',
  description:
    "*Cleric*\n\n**Requirements** You have a [harm](ability:spell/harm) or [heal](ability:spell/heal) spell you can cast\n\nYou balance both sides of the scales, restoring yourself while striking a foe. Cast a 1-action _harm_ or _heal_ spell to heal yourself, expending the spell normally. It loses the [manipulate](content:traits/manipulate) trait when cast this way. Then make a melee [Strike](content:playing-the-game/strike). If you make this Strike with your deity's favored weapon, you gain a +1 status bonus to the attack roll.\n\nIf the Strike hits, you can target a second willing creature to heal the same amount from the spell. This creature can be outside of the spell's range, provided it's adjacent to the enemy you hit.",
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  effects: [],
})

export const RestorativeStrikeAction = Abilities.defineAbility('feat/restorative-strike/action', {
  name: 'Restorative Strike',
  description: '*Cleric*',
  prerequisites: [Traits.traitPrerequisite(RestorativeStrike)],
  actions: [
    {
      name: 'Restorative Strike',
      description:
        "**Requirements** You have a [harm](ability:spell/harm) or [heal](ability:spell/heal) spell you can cast\n\nYou balance both sides of the scales, restoring yourself while striking a foe. Cast a 1-action _harm_ or _heal_ spell to heal yourself, expending the spell normally. It loses the [manipulate](content:traits/manipulate) trait when cast this way. Then make a melee [Strike](content:playing-the-game/strike). If you make this Strike with your deity's favored weapon, you gain a +1 status bonus to the attack roll.\n\nIf the Strike hits, you can target a second willing creature to heal the same amount from the spell. This creature can be outside of the spell's range, provided it's adjacent to the enemy you hit.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const SacredGround = Traits.defineTrait('feat/sacred-ground', {
  name: 'Sacred Ground',
  description:
    '*Cleric, Consecration, Divine, Exploration*\n\n**Frequency** once per 10 minutes\n\n**Prerequisites** [harmful font or healing font](trait:cleric)\n\nYou pray continuously for 1 minute to call a subtle shadow of your deity’s realm over a 30-foot burst centered on you. It lasts for 10 minutes, and a creature that remains in the area for the entire 10 minutes regains [Hit Points](characteristic:hit-points) equal to your level. If you have a healing font, this activity has the healing and vitality traits and heals living creatures.\n\nIf you have a harmful font, this activity has the healing and void traits and heals undead creatures (or other creatures with void healing). Clerics with Versatile Font can choose either or both. It can’t damage creatures in any case.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel4],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(HarmfulFont), Traits.traitPrerequisite(HealingFont)])],
  effects: [],
})

export const CastDown = Traits.defineTrait('feat/cast-down', {
  name: 'Cast Down',
  description:
    '*Cleric, Concentrate, Spellshape*\n\nThe sheer force of your faith can bring a foe crashing down. If the next action you use is to cast [_harm_](ability:spell/harm) or [_heal_](ability:spell/heal) to damage one creature, the target is knocked [prone](content:conditions/prone) if it takes any damage from the spell. If the target critically fails its save against the spell, it also takes a –10-foot status penalty to its [Speed](characteristic:speed) for 1 minute.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel6],
  effects: [],
})

export const CastDownAction = Abilities.defineAbility('feat/cast-down/action', {
  name: 'Cast Down',
  description: '*Cleric, Concentrate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(CastDown)],
  actions: [
    {
      name: 'Cast Down',
      description:
        'The sheer force of your faith can bring a foe crashing down. If the next action you use is to cast [_harm_](ability:spell/harm) or [_heal_](ability:spell/heal) to damage one creature, the target is knocked [prone](content:conditions/prone) if it takes any damage from the spell. If the target critically fails its save against the spell, it also takes a –10-foot status penalty to its [Speed](characteristic:speed) for 1 minute.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DivineRebuttal = Traits.defineTrait('feat/divine-rebuttal', {
  name: 'Divine Rebuttal',
  description:
    '*Cleric, Divine*\n\n**Trigger** Your ally is about to roll a saving throw against a magical ability of a creature you’re adjacent to\n\n**Requirements** You are wielding your deity’s favored weapon\n\nYou strive against magical threats physically and spiritually. You can [Strike](content:playing-the-game/strike) the adjacent creature with your deity’s favored weapon. If you are holy or unholy, the Strike gains that trait. If your Strike hits, all your allies gain a +2 circumstance bonus to the triggering saving throw (or a +3 circumstance bonus on a critical hit).',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel6],
  effects: [],
})

export const DivineRebuttalAction = Abilities.defineAbility('feat/divine-rebuttal/action', {
  name: 'Divine Rebuttal',
  description: '*Cleric, Divine*',
  prerequisites: [Traits.traitPrerequisite(DivineRebuttal)],
  actions: [
    {
      name: 'Divine Rebuttal',
      description:
        '**Trigger** Your ally is about to roll a saving throw against a magical ability of a creature you’re adjacent to\n\n**Requirements** You are wielding your deity’s favored weapon\n\nYou strive against magical threats physically and spiritually. You can [Strike](content:playing-the-game/strike) the adjacent creature with your deity’s favored weapon. If you are holy or unholy, the Strike gains that trait. If your Strike hits, all your allies gain a +2 circumstance bonus to the triggering saving throw (or a +3 circumstance bonus on a critical hit).',
      action: ActionTypes.Reaction,
    },
  ],
})

export const DivineWeapon = Traits.defineTrait('feat/divine-weapon', {
  name: 'Divine Weapon',
  description:
    '*Cleric*\n\n**Frequency** once per turn\n\n**Trigger** You finish Casting a Spell using one of your divine spell slots on your turn\n\nYou siphon residual spell energy into a weapon you’re wielding. Until the end of your turn, the weapon deals an additional 1d4 spirit damage. If you are holy or unholy, Strikes with the weapon also gain that trait, and the additional damage increases to 2d4 against creatures of the opposing trait.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel6],
  effects: [],
})

export const DivineWeaponAction = Abilities.defineAbility('feat/divine-weapon/action', {
  name: 'Divine Weapon',
  description: '*Cleric*',
  prerequisites: [Traits.traitPrerequisite(DivineWeapon)],
  actions: [
    {
      name: 'Divine Weapon',
      description:
        '**Frequency** once per turn\n\n**Trigger** You finish Casting a Spell using one of your divine spell slots on your turn\n\nYou siphon residual spell energy into a weapon you’re wielding. Until the end of your turn, the weapon deals an additional 1d4 spirit damage. If you are holy or unholy, Strikes with the weapon also gain that trait, and the additional damage increases to 2d4 against creatures of the opposing trait.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const MagicHands = Traits.defineTrait('feat/magic-hands', {
  name: 'Magic Hands',
  description:
    '*Cleric*\n\n**Prerequisites** [Healing Hands](trait:feat/healing-hands)\n\nThe blessing of your deity heightens your healing ability, integrating magical healing with the mundane. When you succeed at a [Medicine](characteristic:skill/medicine) check to [Treat Wounds](content:skills/treat-wounds), you can roll d10s instead of d8s for the healing and add a status bonus to the healing equal to your level.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(HealingHands)],
  effects: [],
})

export const SelectiveEnergy = Traits.defineTrait('feat/selective-energy', {
  name: 'Selective Energy',
  description:
    '*Cleric*\n\nAs you call down divine power, you can prevent some enemies from benefiting or some allies from being hurt. When you cast a version of harm or heal that has an area, you can designate up to 5 creatures in the area. They are not targeted by the spell.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel6],
  effects: [],
})

export const CremateUndead = Traits.defineTrait('feat/cremate-undead', {
  name: 'Cremate Undead',
  description:
    '*Cleric*\n\nYour overwhelming vitality sets undead alight. When you use a heal spell to damage undead, each undead that takes damage also takes persistent fire damage equal to the spell’s rank.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel8],
  effects: [],
})

export const EmblazonEnergy = Traits.defineTrait('feat/emblazon-energy', {
  name: 'Emblazon Energy',
  description:
    '*Cleric*\n\n**Prerequisites** [Emblazon Armament](trait:feat/emblazon-armament)\n\nWith elemental forces, you make your emblazoned symbols more potent. When you Emblazon an Armament, you can choose from the following effects instead of the effects listed in that feat. These effects have the same restrictions as the base options.\n\n- **Shield** Choose acid, cold, electricity, fire, or sonic. The wielder gains the shield’s circumstance bonus to saving throws against that damage type and can use Shield Block against damage of that type. The shield also gains resistance to that damage type equal to half your level if you have a domain spell with a trait matching that type (such as fire ray).\n\n- **Weapon** Choose acid, cold, electricity, fire, or sonic. The weapon deals an extra 1d4 damage of that type. Increase this extra damage to 1d6 if you have a domain spell with a trait matching that type (such as fire ray).',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(EmblazonArmament)],
  effects: [],
})

export const Martyr = Traits.defineTrait('feat/martyr', {
  name: 'Martyr',
  description:
    '*Cleric, Spellshape*\n\nYou go to extreme lengths to support your allies, even when it means bringing harm to yourself. If your next action is to cast harm or heal to restore [Hit Points](characteristic:hit-points) to a single ally, you can channel your own vitality along with the spell. You lose 1d8 Hit Points per rank of the spell, which can’t be reduced or mitigated in any way, and your ally regains an equal number of Hit Points',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel8],
  effects: [],
})

export const MartyrAction = Abilities.defineAbility('feat/martyr/action', {
  name: 'Martyr',
  description: '*Cleric, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(Martyr)],
  actions: [
    {
      name: 'Martyr',
      description:
        'You go to extreme lengths to support your allies, even when it means bringing harm to yourself. If your next action is to cast harm or heal to restore [Hit Points](characteristic:hit-points) to a single ally, you can channel your own vitality along with the spell. You lose 1d8 Hit Points per rank of the spell, which can’t be reduced or mitigated in any way, and your ally regains an equal number of Hit Points',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const RestorativeChannel = Traits.defineTrait('feat/restorative-channel', {
  name: 'Restorative Channel',
  description:
    "*Cleric*\n\n**Prerequisites** [healing font](trait:cleric)\n\nYou can remove conditions with divine grace. You can sacrifice one heal spell you've prepared in your extra slots from your healing font to cast one of the following spells instead: [_cleanse affliction_](ability:spell/cleanse-affliction), [_clear mind_](ability:spell/clear-mind), [_sound body_](ability:spell/sound-body), or [_sure footing_](ability:spell/sure-footing). The spell is heightened to the same rank as the spell you sacrificed.",
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(HealingFont)],
  effects: [],
})

export const SanctifyArmament = Traits.defineTrait('feat/sanctify-armament', {
  name: 'Sanctify Armament',
  description:
    '*Cleric, Divine*\n\n**Prerequisites** holy or unholy trait\n\nYou touch a weapon and bring it into concordance with your deity. For 1 round, that weapon gains your holy or unholy trait. It also deals an additional 2d6 spirit damage to creatures of the opposed trait. For example, if you are holy, the weapon would deal an extra 2d6 spirit damage to unholy creatures.\n\nIf you use Sanctify Armament again, any previous use of it expires.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel8],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Holy), Traits.traitPrerequisite(Unholy)])],
  effects: [],
})

export const SanctifyArmamentAction = Abilities.defineAbility('feat/sanctify-armament/action', {
  name: 'Sanctify Armament',
  description: '*Cleric, Divine*',
  prerequisites: [Traits.traitPrerequisite(SanctifyArmament)],
  actions: [
    {
      name: 'Sanctify Armament',
      description:
        '**Prerequisites** holy or unholy trait\n\nYou touch a weapon and bring it into concordance with your deity. For 1 round, that weapon gains your holy or unholy trait. It also deals an additional 2d6 spirit damage to creatures of the opposed trait. For example, if you are holy, the weapon would deal an extra 2d6 spirit damage to unholy creatures.\n\nIf you use Sanctify Armament again, any previous use of it expires.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const SurgingFocus = Traits.defineTrait('feat/surging-focus', {
  name: 'Surging Focus',
  description:
    '*Cleric*\n\n**Frequency** once per day\n\n**Trigger** An ally you can see falls to 0 [Hit Points](characteristic:hit-points)\n\nWhen an ally you can see falls in battle, your surge of righteous indignation allows you to draw upon untapped reserves of divine power. You instantly regain 1 Focus Point.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel8],
  effects: [],
})

export const SurgingFocusAction = Abilities.defineAbility('feat/surging-focus/action', {
  name: 'Surging Focus',
  description: '*Cleric*',
  prerequisites: [Traits.traitPrerequisite(SurgingFocus)],
  actions: [
    {
      name: 'Surging Focus',
      description:
        '**Frequency** once per day\n\n**Trigger** An ally you can see falls to 0 [Hit Points](characteristic:hit-points)\n\nWhen an ally you can see falls in battle, your surge of righteous indignation allows you to draw upon untapped reserves of divine power. You instantly regain 1 Focus Point.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const VoidSiphonCleric = Traits.defineTrait('feat/void-siphon-cleric', {
  name: 'Void Siphon (Cleric)',
  description:
    '*Cleric*\n\nThe raw energy of the Void saps the essence of the living. Any living creature that critically fails its save against a harm spell you cast is [drained](content:conditions/drained) 1.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel8],
  effects: [],
})

export const ZealousRush = Traits.defineTrait('feat/zealous-rush', {
  name: 'Zealous Rush',
  description:
    '*Cleric*\n\n**Trigger** You cast a divine spell that takes 1 action or more to cast and that affects only you or your equipment\n\nYou bless yourself on the move. Stride up to 10 feet. If the spell took 2 or more actions, you can [Stride](content:playing-the-game/stride) up to your full [Speed](characteristic:speed) instead.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel8],
  effects: [],
})

export const ZealousRushAction = Abilities.defineAbility('feat/zealous-rush/action', {
  name: 'Zealous Rush',
  description: '*Cleric*',
  prerequisites: [Traits.traitPrerequisite(ZealousRush)],
  actions: [
    {
      name: 'Zealous Rush',
      description:
        '**Trigger** You cast a divine spell that takes 1 action or more to cast and that affects only you or your equipment\n\nYou bless yourself on the move. Stride up to 10 feet. If the spell took 2 or more actions, you can [Stride](content:playing-the-game/stride) up to your full [Speed](characteristic:speed) instead.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const CastigatingWeapon = Traits.defineTrait('feat/castigating-weapon', {
  name: 'Castigating Weapon',
  description:
    '*Cleric*\n\n**Prerequisites** [Divine Castigation](trait:feat/divine-castigation)\n\nThe force of your deity’s castigation strengthens your body so you can strike down the enemy and its allies. After you deal spirit damage due to Divine Castigation, your weapon or unarmed Strikes gain your holy or unholy trait and deal additional spirit damage until the end of your turn. The spirit damage is equal to the rank of harm or heal you dealt spirit damage with, and is in addition to any spirit damage the weapon already deals (such as from a holy rune).',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(DivineCastigation)],
  effects: [],
})

export const HeroicRecovery = Traits.defineTrait('feat/heroic-recovery', {
  name: 'Heroic Recovery',
  description:
    '*Cleric, Concentrate, Spellshape*\n\n**Prerequisites** [healing font](trait:cleric)\n\nThe restorative power of your healing invigorates the recipient. If the next action you use is to cast [_heal_](ability:spell/heal) targeting a single living creature and the target regains [Hit Points](characteristic:hit-points) from the spell, the target also gains three bonuses until the end of its next turn: a +5-foot status bonus to its [Speed](characteristic:speed), a +1 status bonus to attack rolls, and a +1 status bonus to damage rolls. In addition, if the target is [prone](content:conditions/prone), it can immediately Stand as a free action that doesn’t trigger reactions.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(HealingFont)],
  effects: [],
})

export const HeroicRecoveryAction = Abilities.defineAbility('feat/heroic-recovery/action', {
  name: 'Heroic Recovery',
  description: '*Cleric, Concentrate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(HeroicRecovery)],
  actions: [
    {
      name: 'Heroic Recovery',
      description:
        '**Prerequisites** [healing font](trait:cleric)\n\nThe restorative power of your healing invigorates the recipient. If the next action you use is to cast [_heal_](ability:spell/heal) targeting a single living creature and the target regains [Hit Points](characteristic:hit-points) from the spell, the target also gains three bonuses until the end of its next turn: a +5-foot status bonus to its [Speed](characteristic:speed), a +1 status bonus to attack rolls, and a +1 status bonus to damage rolls. In addition, if the target is [prone](content:conditions/prone), it can immediately Stand as a free action that doesn’t trigger reactions.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const ReplenishmentOfWar = Traits.defineTrait('feat/replenishment-of-war', {
  name: 'Replenishment of War',
  description:
    '*Cleric*\n\n**Prerequisites** expert in your deity’s favored weapon\n\nStriking out against your enemies draws praise and protection from your deity. When you damage a creature with a [Strike](content:playing-the-game/strike) using your deity’s favored weapon, you gain a number of temporary [Hit Points](characteristic:hit-points) equal to half your level, or equal to your level if the Strike was a critical hit. These temporary Hit Points last until the start of your next turn.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel10],
  effects: [],
})

export const SharedAvoidance = Traits.defineTrait('feat/shared-avoidance', {
  name: 'Shared Avoidance',
  description:
    '*Cleric*\n\n**Prerequisites** [Premonition of Avoidance](trait:feat/premonition-of-avoidance)\n\nYou can project your premonitions of danger to your allies. When you use Premonition of Avoidance, allies within 20 feet of you who are rolling the same saving throw against the same hazard also gain a +2 circumstance bonus to their saving throws.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(PremonitionOfAvoidance)],
  effects: [],
})

export const ShieldOfFaith = Traits.defineTrait('feat/shield-of-faith', {
  name: 'Shield of Faith',
  description:
    '*Cleric*\n\n**Prerequisites** [Domain Initiate](trait:feat/domain-initiate)\n\nResidual energy from your domain spells bolsters your defenses. When you spend a Focus Point to cast a domain spell, you gain a +1 status bonus to your [AC](characteristic:armor-class) until the start of your next turn.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(DomainInitiate)],
  effects: [],
})

export const SelectClericFeat2 = CharacterOptions.selectTraitOption('cleric/select-feat-2', {
  name: 'Cleric Feat (Level 2)',
  filter: { tags: [ClericFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectClericFeat4 = CharacterOptions.selectTraitOption('cleric/select-feat-4', {
  name: 'Cleric Feat (Level 4)',
  filter: { tags: [ClericFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const SelectClericFeat6 = CharacterOptions.selectTraitOption('cleric/select-feat-6', {
  name: 'Cleric Feat (Level 6)',
  filter: { tags: [ClericFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6]] },
})

export const SelectClericFeat8 = CharacterOptions.selectTraitOption('cleric/select-feat-8', {
  name: 'Cleric Feat (Level 8)',
  filter: { tags: [ClericFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8]] },
})

export const SelectClericFeat10 = CharacterOptions.selectTraitOption('cleric/select-feat-10', {
  name: 'Cleric Feat (Level 10)',
  filter: {
    tags: [ClericFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8, FeatLevel9, FeatLevel10]],
  },
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
  CastDown,
  CastDownAction,
  DivineRebuttal,
  DivineRebuttalAction,
  DivineWeapon,
  DivineWeaponAction,
  MagicHands,
  SelectiveEnergy,
  CremateUndead,
  EmblazonEnergy,
  Martyr,
  MartyrAction,
  RestorativeChannel,
  SanctifyArmament,
  SanctifyArmamentAction,
  SurgingFocus,
  SurgingFocusAction,
  VoidSiphonCleric,
  ZealousRush,
  ZealousRushAction,
  CastigatingWeapon,
  HeroicRecovery,
  HeroicRecoveryAction,
  ReplenishmentOfWar,
  SharedAvoidance,
  ShieldOfFaith,
]
