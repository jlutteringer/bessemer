import { Abilities } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/archetype'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'

export const GravityWeapon = Abilities.defineAbility('spell/gravity-weapon', {
  name: 'Gravity Weapon',
  description:
    '*Uncommon, Focus, Ranger*\n\n**Duration** 1 minute\n\nYou build up gravitational force and funnel it into your blows, leading to more powerful attacks with blade and bow alike. On your first weapon Strike each round, you gain a status bonus to damage equal to twice the number of weapon damage dice.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Gravity Weapon', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const HealCompanion = Abilities.defineAbility('spell/heal-companion', {
  name: 'Heal Companion',
  description:
    "*Uncommon, Focus, Healing, Ranger, Vitality*\n\n**Range** touch or 30 feet\n\n**Target** your animal companion\n\nYou heal your animal companion's wounds. You restore 1d10 Hit Points to your animal companion. The number of actions you spend Casting this Spell determines range and other parameters.\n\n◆ (manipulate) The spell has a range of touch. ◆◆ (concentrate, manipulate) The spell has a range of 30 feet and restores an additional 8 Hit Points to the target.\n\n**Heightened (+1)** The amount of healing increases by 1d10, and the additional healing for the 2-action version increases by 8.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Heal Companion', action: ActionTypes.VariableActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const MagicHide = Abilities.defineAbility('spell/magic-hide', {
  name: 'Magic Hide',
  description:
    '*Uncommon, Focus, Manipulate, Ranger*\n\n**Range** 30 feet\n\n**Target** your animal companion\n\n**Duration** 1 minute\n\nYour animal companion grows a thicker hide, matted fur, or a harder shell, granting it a +1 status bonus to AC.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Magic Hide', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const AnimalFeature = Abilities.defineAbility('spell/animal-feature', {
  name: 'Animal Feature',
  description:
    '*Uncommon, Concentrate, Focus, Manipulate, Morph, Ranger*\n\n**Duration** 1 minute\n\nWithout fully transforming your body, you gain one animalistic feature, which you select from the list below each time you Cast the Spell.\n\n- **Cat Eyes** You gain low-light vision.\n\n- **Claws** You gain a claw attack that deals 1d6 slashing damage and has the agile, finesse, and unarmed traits.\n\n- **Jaws** You gain a jaws attack that deals 1d8 piercing damage and has the unarmed trait.\n\n**Heightened (4th)** Add the following options to the list.\n\n- **Fish Tail** You gain a swim Speed equal to your land Speed.\n\n- **Owl Eyes** You gain darkvision.\n\n- **Wings** You gain a fly Speed equal to your land Speed.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Animal Feature', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const EnlargeCompanion = Abilities.defineAbility('spell/enlarge-companion', {
  name: 'Enlarge Companion',
  description:
    '*Uncommon, Concentrate, Focus, Manipulate, Polymorph, Ranger*\n\n**Range** 30 feet\n\n**Target** your animal companion\n\n**Duration** 1 minute\n\nYour animal companion grows much larger, towering over its foes in battle. Your animal companion becomes Large, gaining the effects of a 2nd-rank _enlarge_ spell.\n\n**Heightened (4th)** Your animal companion instead becomes Huge, gaining the benefits of a 4th-rank _enlarge_ spell.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Enlarge Companion', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const HuntersLuck = Abilities.defineAbility('spell/hunters-luck', {
  name: "Hunter's Luck",
  description:
    '*Uncommon, Concentrate, Focus, Fortune, Ranger*\n\n**Trigger** You attempt a check to Recall Knowledge about a creature, but you haven’t rolled yet\n\nYou have a preternatural ability to remember details about your foes. Roll the triggering check twice and use the better result.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: "Hunter's Luck", action: ActionTypes.FreeAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const SoothingMist = Abilities.defineAbility('spell/soothing-mist', {
  name: 'Soothing Mist',
  description:
    '*Uncommon, Concentrate, Focus, Healing, Manipulate, Ranger, Vitality*\n\n**Range** 30 feet\n\n**Target** 1 willing living creature or 1 undead creature\n\nYou call forth a magical mist that envelops a creature. The mist restores 2d8 Hit Points to a target living creature and ends one source of persistent acid, bleed, fire, poison, or void damage affecting it. If the creature is taking persistent damage from multiple sources, you select which one is removed. Against an undead target, you deal 2d8 vitality damage (basic Fortitude save); if it fails the save, it also takes 2 persistent vitality damage.\n\n**Heightened (+1)** The amount of healing (or damage to an undead target) increases by 1d8, and the persistent vitality damage to an undead creature increases by 1.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Soothing Mist', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const EphemeralTracking = Abilities.defineAbility('spell/ephemeral-tracking', {
  name: 'Ephemeral Tracking',
  description:
    "*Uncommon, Concentrate, Focus, Manipulate, Ranger*\n\n**Duration** 1 hour\n\nYou can look at currents in the air and water and see tracks that you can follow just as you would on land. You can use Survival to Track through both air and water, noticing aerial or aquatic “tracks” of all creatures who passed nearby in the last hour. It's more difficult to Track in this way: the DC to Track through air or water is always at least 30, or higher after precipitation or wind (in the air) or heavy tides or currents (in the water). It's possible to Cover Tracks against this spell, but creatures might not realize they need to do so.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Ephemeral Tracking', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const RangersBramble = Abilities.defineAbility('spell/rangers-bramble', {
  name: "Ranger's Bramble",
  description:
    "*Uncommon, Concentrate, Focus, Manipulate, Plant, Ranger*\n\n**Range** 100 feet\n\n**Area** all squares that contain plants in a 5-foot burst\n\n**Duration** 1 minute\n\nYou cause plants in the area to entangle your foes, with the effects of _entangling flora_. A creature that critically fails the save takes 2d4 persistent bleed damage in addition to being immobilized. Escaping your bramble doesn't end the bleed damage.\n\n**Heightened (+1)** The bleed damage on a critical failure increases by 1d4.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: "Ranger's Bramble", action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const AllRangerFocusSpellEntities = [
  GravityWeapon,
  HealCompanion,
  MagicHide,
  AnimalFeature,
  EnlargeCompanion,
  HuntersLuck,
  SoothingMist,
  EphemeralTracking,
  RangersBramble,
]
