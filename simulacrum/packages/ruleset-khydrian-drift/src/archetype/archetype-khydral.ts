import { Abilities, Effects, Traits } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/archetype'
import { GeneralLoadoutSlot } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Stamina, StaminaCost } from '@simulacrum/ruleset-khydrian-drift/resource-pool'

export const KhydralSensitivity = Traits.defineTrait('khydral/sensitivity', {
  name: 'Khydral Sensitivity',
  description: '',
  archetypes: [Primary],
  prerequisites: [],
  effects: [],
})

export const KhydralInitiate = Traits.defineTrait('khydral/initiate', {
  name: 'Khydral Initiate',
  description: '',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(KhydralSensitivity)],
  effects: [],
})

export const TimeDilation = Abilities.defineAbility('khydral/time-dilation', {
  name: 'Time Dilation',
  description: '',
  actions: [
    {
      name: 'Time Dilation',
      description:
        "Choose a friendly creature you can see within 12 squares. For 10 rounds, the target has a pool of Deferred Damage, which starts empty. Whenever the target takes damage, that damage is added to the pool instead.\n\nDuring the target's Sustain Phase, it takes damage equal to half the damage in the pool (rounded up), and that amount is removed from the pool. When the effect ends, the target immediately takes all damage remaining in the pool. Damage taken from the pool can't be deferred.",
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.High, resource: Stamina }],
      targeting: { target: { range: 12, count: 1 } },
    },
  ],
})

export const KhydralAdept = Traits.defineTrait('khydral/adept', {
  name: 'Khydral Adept',
  description: '',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(KhydralInitiate)],
  effects: [Effects.gainAbility(TimeDilation, GeneralLoadoutSlot)],
})

export const Rewind = Abilities.defineAbility('khydral/rewind', {
  name: 'Rewind',
  description: '',
  actions: [
    {
      name: 'Rewind',
      description:
        'When a target you can see within 12 squares is hit by an effect, you can take a Reaction to rewind that effect on the target, undoing it.',
      action: ActionTypes.Reaction,
      costs: [{ cost: StaminaCost.High, resource: Stamina }],
      targeting: { target: { range: 12, count: 1 } },
    },
  ],
})

export const KhydralMastery = Traits.defineTrait('khydral/mastery', {
  name: 'Khydral Mastery',
  description: '',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(KhydralAdept)],
  effects: [Effects.gainAbility(Rewind, GeneralLoadoutSlot)],
})
