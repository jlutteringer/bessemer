import { Abilities } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/tag'

import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
export const CounterPerformance = Abilities.defineAbility('spell/counter-performance', {
  name: 'Counter Performance',
  description: '*Uncommon, Bard, Composition, Concentrate, Focus, Fortune, Mental*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Counter Performance',
      description:
        '**Area** 60-foot emanation\n\nYour performance protects you and your allies. Roll a [Performance](characteristic:skill/performance) check for a type you know—it must be an auditory performance if the trigger was auditory or a visual one for a visual trigger, and this action gains the traits for the type of performance. You and allies in the area can use the better result between your Performance check and the saving throw.',
      action: ActionTypes.Reaction,
      annotation: 'You or an ally within 60 feet rolls a saving throw against an auditory or visual effect',
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 60 }, count: 1 } },
    },
  ],
})

export const HymnOfHealing = Abilities.defineAbility('spell/hymn-of-healing', {
  name: 'Hymn of Healing',
  description: '*Uncommon, Bard, Composition, Concentrate, Focus, Healing, Vitality*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Hymn of Healing',
      description:
        '**Range** 30 feet\n\n**Target** you or 1 ally\n\n**Duration** sustained up to 4 rounds\n\nYour glorious singing mends wounds and provides a temporary respite from harm. The target gains fast healing 2. When you Cast the Spell and the first time each round you [Sustain](content:playing-the-game/sustain) the Spell, the target gains 2 temporary [Hit Points](characteristic:hit-points), which last for 1 round.\n\n**Heightened (+1)** The fast healing and temporary Hit Points each increase by 2',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const LingeringComposition = Abilities.defineAbility('spell/lingering-composition', {
  name: 'Lingering Composition',
  description: '*Uncommon, Bard, Concentrate, Focus, Spellshape*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Lingering Composition',
      description:
        "You add a flourish to your composition to extend its benefits. If your next action is to cast a cantrip composition with a duration of 1 round, attempt a [Performance](characteristic:skill/performance) check. The DC is usually a standard-difficulty DC of a level equal to the highest-level target of your composition, but the GM can assign a different DC based on the circumstances. The effect depends on the result of your check.\n\n**Critical Success** The composition lasts 4 rounds.\n\n**Success** The composition lasts 3 rounds.\n\n**Failure** The composition lasts 1 round, but you don't spend the Focus Point for casting this spell.",
      action: ActionTypes.FreeAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const LoremastersEtude = Abilities.defineAbility('spell/loremasters-etude', {
  name: "Loremaster's Etude",
  description: '*Uncommon, Bard, Composition, Focus, Fortune, Manipulate*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Loremaster's Etude",
      description:
        "**Trigger** You or an ally within range attempts a skill check to Recall Knowledge\n\n**Range** 30 feet\n\n**Target** you or the triggering ally\n\nYou call upon your muse's deep mysteries, granting the target a greater ability to think and recall information. Roll the triggering [Recall Knowledge](content:skills/recall-knowledge) skill check twice and use the higher result.",
      action: ActionTypes.FreeAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const FortissimoComposition = Abilities.defineAbility('spell/fortissimo-composition', {
  name: 'Fortissimo Composition',
  description: '*Uncommon, Bard, Concentrate, Focus, Spellshape*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Fortissimo Composition',
      description:
        "You call upon your muse to greatly increase the benefits you provide with your courageous anthem, rallying anthem, or song of strength composition. If your next action is to cast one of these compositions, attempt a [Performance](characteristic:skill/performance) check. The DC is usually the highest [Will DC](characteristic:will) of the composition's targets, but the GM can assign a different DC based on the circumstances. The effect of your composition depends on the result of your check.\n\n**Critical Success** The status bonus from your composition increases to +3.\n\n**Success** The status bonus from your composition increases to +2.\n\n**Failure** Your composition provides only its normal bonus of +1, but you don't spend the Focus Point for casting this spell.",
      action: ActionTypes.FreeAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const OdeToOuroboros = Abilities.defineAbility('spell/ode-to-ouroboros', {
  name: 'Ode to Ouroboros',
  description: '*Uncommon, Bard, Composition, Concentrate, Focus*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Ode to Ouroboros',
      description:
        "**Trigger** A creature’s dying condition would reach the value at which they would die\n\n**Range** 60 feet\n\n**Target** the triggering creature\n\nYour ode staves off death. The target's [dying](content:conditions/dying) condition remains 1 below the value at which it dies. This doesn't help prevent death from effects that kill the target without increasing its dying condition, such as _disintegrate_ and [death](content:traits/death) effects.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const SymphonyOfTheUnfetteredHeart = Abilities.defineAbility('spell/symphony-of-the-unfettered-heart', {
  name: 'Symphony of the Unfettered Heart',
  description: '*Uncommon, Bard, Composition, Concentrate, Focus*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Symphony of the Unfettered Heart',
      description:
        "**Range** 30 feet\n\n**Target** you or 1 ally\n\nYour symphony lifts listeners from their worldly concerns. Attempt a [Performance](characteristic:skill/performance) check to [counteract](content:spells/counteracting) an effect applying one of the following conditions to the target: [grabbed](content:conditions/grabbed), [immobilized](content:conditions/immobilized), [paralyzed](content:conditions/paralyzed), [restrained](content:conditions/restrained), [slowed](content:conditions/slowed), or [stunned](content:conditions/stunned). If you fail, you can't target the same effect on the target for 1 day. Use the condition's source to determine the counteract DC (for example, the [Escape](content:playing-the-game/escape) DC for grabbed).\n\n**Heightened (9th)** You can target up to four creatures.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const AllBardFocusSpells = [
  CounterPerformance,
  HymnOfHealing,
  LingeringComposition,
  LoremastersEtude,
  FortissimoComposition,
  OdeToOuroboros,
  SymphonyOfTheUnfetteredHeart,
]
