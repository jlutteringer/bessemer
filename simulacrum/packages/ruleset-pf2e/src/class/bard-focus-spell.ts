import { Abilities } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/archetype'

import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
export const CounterPerformance = Abilities.defineAbility('spell/counter-performance', {
  name: 'Counter Performance',
  description: '*Uncommon, Bard, Composition, Concentrate, Focus, Fortune, Mental*',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Counter Performance',
      description:
        '**Trigger** You or an ally within 60 feet rolls a saving throw against an auditory or visual effect\n\n**Area** 60-foot emanation\n\nYour performance protects you and your allies. Roll a [Performance](characteristic:skill/performance) check for a type you know—it must be an auditory performance if the trigger was auditory or a visual one for a visual trigger, and this action gains the traits for the type of performance. You and allies in the area can use the better result between your Performance check and the saving throw.',
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 60 }, count: 1 } },
    },
  ],
})

export const HymnOfHealing = Abilities.defineAbility('spell/hymn-of-healing', {
  name: 'Hymn of Healing',
  description: '*Uncommon, Bard, Composition, Concentrate, Focus, Healing, Vitality*',
  archetypes: [Spell, FocusSpell],
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
  archetypes: [Spell, FocusSpell],
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
  archetypes: [Spell, FocusSpell],
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

export const AllBardFocusSpells = [CounterPerformance, HymnOfHealing, LingeringComposition, LoremastersEtude]
