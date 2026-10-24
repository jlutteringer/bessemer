import { Abilities } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/tag'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'

export const Cornucopia = Abilities.defineAbility('spell/cornucopia', {
  name: 'Cornucopia',
  description: '*Uncommon, Concentrate, Druid, Focus, Healing, Manipulate, Plant, Vitality*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Cornucopia',
      description:
        '**Duration** 10 minutes\n\nVines twine into a wicker horn in your hands, and out spills a single fruit, nut, or similar small bit of produce. A creature who eats the produce with an [Interact](content:playing-the-game/interact) action regains 1d6+4 HP. The cornucopia, as well as any unconsumed pieces of fruit, wither away at the end of the duration.\n\n**Heightened (+1)** The cornucopia produces an additional piece of food. A creature can consume any amount of food from the same casting with a single Interact action. Eating six pieces of produce from the cornucopia gives as much nourishment as one square meal for a typical human.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const HealAnimal = Abilities.defineAbility('spell/heal-animal', {
  name: 'Heal Animal',
  description: '*Uncommon, Druid, Focus, Healing, Manipulate, Vitality*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Heal Animal',
      description:
        "**Range** touch or 30 feet (see text)\n\n**Target** 1 willing living animal\n\nYou heal an animal's wounds, restoring 1d8 [Hit Points](characteristic:hit-points) to the target. The number of actions spent Casting this Spell determines its effect.\n\n◆ The spell has a range of touch. ◆◆ ([concentrate](content:traits/concentrate)) The spell has a range of 30 feet and restores an additional 8 Hit Points to the target.\n\n**Heightened (+1)** The amount of healing increases by 1d8, and the additional healing for the 2-action version increases by 8.",
      action: ActionTypes.VariableActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const TempestSurge = Abilities.defineAbility('spell/tempest-surge', {
  name: 'Tempest Surge',
  description: '*Uncommon, Air, Concentrate, Druid, Electricity, Focus, Manipulate*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Tempest Surge',
      description:
        '**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** [basic](content:playing-the-game/basic-saving-throws) [Reflex](characteristic:reflex)\n\nYou surround a foe in a swirling storm of violent winds, roiling clouds, and crackling lightning. The storm deals 1d12 electricity damage to the target with a basic Reflex save. On a failure, the target also is [clumsy](content:conditions/clumsy) 2 for 1 round.\n\n**Heightened (+1)** The initial damage increases by 1d12.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const UntamedForm = Abilities.defineAbility('spell/untamed-form', {
  name: 'Untamed Form',
  description: '*Uncommon, Concentrate, Druid, Focus, Manipulate, Polymorph*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Untamed Form',
      description:
        "**Duration** varies\n\nYou reach within for a different part of yourself, and you set it free, transforming your body into another form. You polymorph into any form listed in [_pest form_](ability:spell/pest-form), which lasts 10 minutes. All other _untamed form_ shapes last 1 minute. You can add more shapes to your _untamed form_ list with druid feats; your feat might grant you some or all of the shapes from a given [polymorph](content:traits/polymorph) spell. When you transform into a shape granted by a spell, you gain all the effects of the shape you chose from a version of the spell heightened to _untamed form'_s rank. _Untamed form_ allows you to use your own shapeshifting training more easily than most polymorph spells. When you choose to use your own attack modifier while polymorphed instead of the form's default attack modifier, you gain a +2 status bonus to your attack rolls.\n\n**Heightened (2nd)** You can transform into shapes listed in [_animal form_](ability:spell/animal-form).",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const UntamedShift = Abilities.defineAbility('spell/untamed-shift', {
  name: 'Untamed Shift',
  description: '*Uncommon, Concentrate, Druid, Focus, Manipulate, Morph*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Untamed Shift',
      description:
        "**Duration** 1 minute\n\nYou transform just a part of your body. Choose any one effect that matches an untamed order feat you have.\n\n- **Untamed Form** Your hands transform into incredibly sharp claws. Untamed claws are an unarmed attack, have the [agile](content:traits/agile) and [finesse](content:traits/finesse) traits, and deal 1d6 slashing damage. You can still hold and use items with your hands while they're transformed by this spell, but you must have a hand free to attack with it.\n\n- **Insect Shape** Your mouth becomes deadly jaws. Untamed jaws are an unarmed attack that deal 1d8 piercing damage.\n\n- **Elemental Shape** You shift your body to be partially composed of elemental matter, granting you resistance 5 to critical hits and precision damage.\n\n- **Plant Shape** Your arms become long vines, increasing your [reach](content:traits/reach) to 10 feet (or 15 feet with a reach weapon).\n\n- **Soaring Shape** You must cast _untamed shift_ using 2 actions for this benefit. You grow wings from your back, gaining a fly [Speed](characteristic:speed) of 30 feet.\n\n**Heightened (6th)** You can choose up to two effects from the list. Untamed claws leave terrible, ragged wounds that also deal 2d6 [persistent bleed damage](content:conditions/persistent-damage) on a hit, and untamed jaws are envenomed, also dealing 2d6 persistent poison damage on a hit.\n\n**Heightened (10th)** You can choose up to three effects from the list. Untamed claws deal 4d6 persistent bleed damage on a hit, and untamed jaws deal 4d6 persistent poison damage on a hit.",
      action: ActionTypes.VariableActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const AllDruidFocusSpellEntities = [Cornucopia, HealAnimal, TempestSurge, UntamedForm, UntamedShift]
