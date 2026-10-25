import { Abilities } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/tag'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'

export const CharmingPush = Abilities.defineAbility('spell/charming-push', {
  name: 'Charming Push',
  description: '*Uncommon, Concentrate, Focus, Incapacitation, Mental, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Charming Push',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** until the start of your next turn\n\nYou push at the target's mind to deflect their ire. The target must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes a –1 circumstance penalty to attack rolls and damage rolls against you.\n\n**Failure** The target can't use [hostile actions](content:spells/hostile-actions) against you.\n\n**Critical Failure** The target is [stunned 1](content:conditions/stunned) and can't use hostile actions against you.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Earthworks = Abilities.defineAbility('spell/earthworks', {
  name: 'Earthworks',
  description: '*Uncommon, Concentrate, Earth, Focus, Manipulate, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Earthworks',
      description:
        "**Range** 60 feet\n\n**Area** 5-foot burst or more\n\n**Duration** 1 minute\n\nWith a ripple of earth, you raise small barriers from the ground. The ground in the area becomes [difficult terrain](content:playing-the-game/difficult-terrain). The spell's area is a 5-foot burst if you spent 1 action to cast it, a 10-foot burst if you spent 2 actions, or a 15-foot burst if you spent 3 actions. A creature can [Interact](content:playing-the-game/interact) to clear the barriers from one 5-foot square adjacent to it.\n\n**Heightened (4th)** You pull the barriers to float in the air, causing the spell to function as difficult terrain for flying creatures.",
      action: ActionTypes.VariableActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const ForceBolt = Abilities.defineAbility('spell/force-bolt', {
  name: 'Force Bolt',
  description: '*Uncommon, Focus, Force, Manipulate, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Force Bolt',
      description:
        '**Range** 30 feet\n\n**Target** 1 creature\n\nYou fire an arrow-shaped bolt of force, one of the most common and reliable forms of battle magic. It automatically hits and deals 1d4+1 force damage to the target.\n\n**Heightened (+2)** The damage increases by 1d4+1.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const FortifySummoning = Abilities.defineAbility('spell/fortify-summoning', {
  name: 'Fortify Summoning',
  description: '*Uncommon, Concentrate, Focus, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Fortify Summoning',
      description:
        '**Range** 30 feet\n\n**Target** 1 creature you summoned\n\nAs you call a creature to your side, your magic transforms its body, heightening its ferocity and fortifying its resilience. The target gains a +1 status bonus to all checks and DCs (including its [AC](characteristic:armor-class)) for the duration of its summoning, up to 1 minute.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const HandOfTheApprentice = Abilities.defineAbility('spell/hand-of-the-apprentice', {
  name: 'Hand of the Apprentice',
  description: '*Uncommon, Attack, Focus, Manipulate, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Hand of the Apprentice',
      description:
        "**Range** 500 feet\n\n**Target** 1 creature\n\n**Defense** [AC](characteristic:armor-class)\n\nYou take advantage of one of the most fundamental lessons of magic to levitate and propel your weapon. You hurl a held melee weapon with which you are trained at the target, making a [spell attack roll](characteristic:spell-attack). On a success, you deal the weapon's damage as if you had hit with a melee [Strike](content:playing-the-game/strike), but add your spellcasting attribute modifier to damage, rather than your [Strength modifier](characteristic:strength). On a critical success, you deal double damage, and you add the weapon's [critical specialization effect](content:equipment/critical-specialization). Regardless of the outcome, the weapon flies back to you and returns to your hand.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 500, count: 1 } },
    },
  ],
})

export const ProtectiveWards = Abilities.defineAbility('spell/protective-wards', {
  name: 'Protective Wards',
  description: '*Uncommon, Aura, Focus, Manipulate, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Protective Wards',
      description:
        "**Area** 5-foot emanation centered on you\n\n**Duration** sustained up to 1 minute\n\nYou expand a ring of glyphs that shields your allies. You and any allies in the area gain a +1 status bonus to [AC](characteristic:armor-class). Each time you [Sustain](content:playing-the-game/sustain) the spell, the emanation's radius increases by 5 feet, to a maximum of 30 feet.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const ScrambleBody = Abilities.defineAbility('spell/scramble-body', {
  name: 'Scramble Body',
  description: '*Uncommon, Concentrate, Focus, Manipulate, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Scramble Body',
      description:
        "**Range** 30 feet\n\n**Target** 1 living creature\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nYour magic throws the creature's biology into disarray, inducing nausea, fever, and other unpleasant conditions.\n\n**Success** The target is unaffected.\n\n**Failure** The target becomes [sickened 1](content:conditions/sickened).\n\n**Critical Failure** The target becomes sickened 2 and [slowed](content:conditions/slowed) 1 as long as it's sickened.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const CommunityRestoration = Abilities.defineAbility('spell/community-restoration', {
  name: 'Community Restoration',
  description: '*Uncommon, Concentrate, Focus, Healing, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Community Restoration',
      description:
        '**Trigger** You [Cast a Spell](content:spells/cast-a-spell) from a wizard spell slot, and the spell affects one or more willing allies without damaging them\n\nWhen you use your magic to support your allies, shared strength bolsters you all. You gain 2 temporary [Hit Points](characteristic:hit-points) per rank of the triggering spell, and can grant an equal number divided as you choose among allies affected by the triggering spell. These temporary Hit Points last for 1 minute.',
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const EnergyAbsorption = Abilities.defineAbility('spell/energy-absorption', {
  name: 'Energy Absorption',
  description: '*Uncommon, Focus, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Energy Absorption',
      description:
        "**Trigger** An effect would deal acid, cold, electricity, or fire damage to you\n\nYou're used to mitigating the damage done by bombs, siege engines, and magical artillery. You gain resistance 15 to your choice of acid, cold, electricity, or fire damage from the triggering effect. The resistance applies only to the triggering effect's initial damage.\n\n**Heightened (+1)** The resistance increases by 5.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const InterdisciplinaryIncantation = Abilities.defineAbility('spell/interdisciplinary-incantation', {
  name: 'Interdisciplinary Incantation',
  description: '*Uncommon, Concentrate, Focus, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Interdisciplinary Incantation',
      description:
        "**Trigger** A creature within 30 feet casts an arcane spell\n\nYou gather the embers of another caster's spell, using your understanding of unified magic to pick apart their formulas and incantations well enough to imitate the spell yourself, if only for a short time. Until the end of your next turn, you can Cast the triggering Spell by expending a wizard spell slot of the same rank. That caster's spells can't trigger your _interdisciplinary incantation_ again for 24 hours.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const InvisibilityCloak = Abilities.defineAbility('spell/invisibility-cloak', {
  name: 'Invisibility Cloak',
  description: '*Uncommon, Focus, Illusion, Manipulate, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Invisibility Cloak',
      description:
        '**Duration** 1 minute\n\nYou become invisible, with the same restrictions as the 2nd-rank [_invisibility_](ability:spell/invisibility) spell.\n\n**Heightened (6th)** The duration increases to 10 minutes.\n\n**Heightened (8th)** The duration increases to 1 hour.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const RuneOfObservation = Abilities.defineAbility('spell/rune-of-observation', {
  name: 'Rune of Observation',
  description: '*Uncommon, Concentrate, Focus, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Rune of Observation',
      description:
        "**Duration** 1 hour\n\nYou inscribe an invisible eye-shaped rune in the air, creating a sensor as [_clairvoyance_](ability:spell/clairvoyance). When created, this eye must be in your line of sight.\n\nEach time the spell's duration ends, you can spend 1 Focus Point as a free action to extend the duration for another hour, though as normal, it ends immediately during your next daily preparations.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const ShiftingForm = Abilities.defineAbility('spell/shifting-form', {
  name: 'Shifting Form',
  description: '*Uncommon, Concentrate, Focus, Morph, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Shifting Form',
      description:
        '**Duration** 1 minute\n\nYou change your body to better suit the moment. You gain one of the following abilities of your choice. You can Dismiss this spell.\n\n- You gain a 20-foot status bonus to your [Speed](characteristic:speed).\n\n- You gain a climb or swim Speed equal to half your Speed.\n\n- You gain [darkvision](content:playing-the-game/darkvision-and-greater-darkvision).\n\n- You gain a pair of claws. These are [agile](content:traits/agile) [finesse](content:traits/finesse) [unarmed](content:traits/unarmed) attacks that deal 1d8 slashing damage.\n\n- You gain [scent](content:playing-the-game/scent) 60 feet ([imprecise](content:playing-the-game/imprecise-senses)).',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const SpiralOfHorrors = Abilities.defineAbility('spell/spiral-of-horrors', {
  name: 'Spiral of Horrors',
  description: '*Uncommon, Aura, Concentrate, Emotion, Fear, Focus, Manipulate, Mental, Wizard*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Spiral of Horrors',
      description:
        "**Area** 30-foot emanation\n\n**Duration** sustained up to 1 minute\n\nShades and spirits howl and whirl around you in a display that strikes fear into the hearts of all who witness it. Enemies in the area are [frightened 1](content:conditions/frightened) and can't reduce their frightened value below 1 for the spell's duration.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 30 }, count: 1 } },
    },
  ],
})

export const AllWizardFocusSpells = [
  CharmingPush,
  Earthworks,
  ForceBolt,
  FortifySummoning,
  HandOfTheApprentice,
  ProtectiveWards,
  ScrambleBody,
  CommunityRestoration,
  EnergyAbsorption,
  InterdisciplinaryIncantation,
  InvisibilityCloak,
  RuneOfObservation,
  ShiftingForm,
  SpiralOfHorrors,
]
