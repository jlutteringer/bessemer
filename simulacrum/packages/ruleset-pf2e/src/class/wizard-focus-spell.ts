import { Abilities } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/archetype'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'

export const CharmingPush = Abilities.defineAbility('spell/charming-push', {
  name: 'Charming Push',
  description:
    "*Uncommon, Concentrate, Focus, Incapacitation, Mental, Wizard*\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** until the start of your next turn\n\nYou push at the target's mind to deflect their ire. The target must attempt a Will save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes a –1 circumstance penalty to attack rolls and damage rolls against you.\n\n**Failure** The target can't use hostile actions against you.\n\n**Critical Failure** The target is stunned 1 and can't use hostile actions against you.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Charming Push', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const Earthworks = Abilities.defineAbility('spell/earthworks', {
  name: 'Earthworks',
  description:
    "*Uncommon, Concentrate, Earth, Focus, Manipulate, Wizard*\n\n**Range** 60 feet\n\n**Area** 5-foot burst or more\n\n**Duration** 1 minute\n\nWith a ripple of earth, you raise small barriers from the ground. The ground in the area becomes difficult terrain. The spell's area is a 5-foot burst if you spent 1 action to cast it, a 10-foot burst if you spent 2 actions, or a 15-foot burst if you spent 3 actions. A creature can Interact to clear the barriers from one 5-foot square adjacent to it.\n\n**Heightened (4th)** You pull the barriers to float in the air, causing the spell to function as difficult terrain for flying creatures.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Earthworks', action: ActionTypes.VariableActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const ForceBolt = Abilities.defineAbility('spell/force-bolt', {
  name: 'Force Bolt',
  description:
    '*Uncommon, Focus, Force, Manipulate, Wizard*\n\n**Range** 30 feet\n\n**Target** 1 creature\n\nYou fire an arrow-shaped bolt of force, one of the most common and reliable forms of battle magic. It automatically hits and deals 1d4+1 force damage to the target.\n\n**Heightened (+2)** The damage increases by 1d4+1.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Force Bolt', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const FortifySummoning = Abilities.defineAbility('spell/fortify-summoning', {
  name: 'Fortify Summoning',
  description:
    '*Uncommon, Concentrate, Focus, Wizard*\n\n**Range** 30 feet\n\n**Target** 1 creature you summoned\n\nAs you call a creature to your side, your magic transforms its body, heightening its ferocity and fortifying its resilience. The target gains a +1 status bonus to all checks and DCs (including its AC) for the duration of its summoning, up to 1 minute.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Fortify Summoning', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const HandOfTheApprentice = Abilities.defineAbility('spell/hand-of-the-apprentice', {
  name: 'Hand of the Apprentice',
  description:
    "*Uncommon, Attack, Focus, Manipulate, Wizard*\n\n**Range** 500 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\nYou take advantage of one of the most fundamental lessons of magic to levitate and propel your weapon. You hurl a held melee weapon with which you are trained at the target, making a spell attack roll. On a success, you deal the weapon's damage as if you had hit with a melee Strike, but add your spellcasting attribute modifier to damage, rather than your Strength modifier. On a critical success, you deal double damage, and you add the weapon's critical specialization effect. Regardless of the outcome, the weapon flies back to you and returns to your hand.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Hand of the Apprentice', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const ProtectiveWards = Abilities.defineAbility('spell/protective-wards', {
  name: 'Protective Wards',
  description:
    "*Uncommon, Aura, Focus, Manipulate, Wizard*\n\n**Area** 5-foot emanation centered on you\n\n**Duration** sustained up to 1 minute\n\nYou expand a ring of glyphs that shields your allies. You and any allies in the area gain a +1 status bonus to AC. Each time you Sustain the spell, the emanation's radius increases by 5 feet, to a maximum of 30 feet.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Protective Wards', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const ScrambleBody = Abilities.defineAbility('spell/scramble-body', {
  name: 'Scramble Body',
  description:
    "*Uncommon, Concentrate, Focus, Manipulate, Wizard*\n\n**Range** 30 feet\n\n**Target** 1 living creature\n\n**Defense** Fortitude\n\nYour magic throws the creature's biology into disarray, inducing nausea, fever, and other unpleasant conditions.\n\n**Success** The target is unaffected.\n\n**Failure** The target becomes sickened 1.\n\n**Critical Failure** The target becomes sickened 2 and slowed 1 as long as it's sickened.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Scramble Body', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const AllWizardFocusSpells = [CharmingPush, Earthworks, ForceBolt, FortifySummoning, HandOfTheApprentice, ProtectiveWards, ScrambleBody]
