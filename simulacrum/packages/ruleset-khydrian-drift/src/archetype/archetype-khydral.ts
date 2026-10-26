import { Abilities, Effects, Traits } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { GeneralLoadoutSlot } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Stamina } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import { StaminaCost } from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { LightArmor } from '@simulacrum/ruleset-khydrian-drift/armor'

export const KhydralSensitivity = Traits.defineTrait('khydral/sensitivity', {
  name: 'Khydral Sensitivity',
  tags: [Primary],
  prerequisites: [],
  effects: [],
})

export const KhydralInitiate = Traits.defineTrait('khydral/initiate', {
  name: 'Khydral Initiate',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(KhydralSensitivity)],
  effects: [],
})

export const CloakOfTheMagi = Abilities.defineAbility('khydral/cloak-of-the-magi', {
  name: 'Cloak of the Magi',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(KhydralInitiate)],
  effects: [...LightArmor.effects, Effects.descriptive('You gain the benefits of [Light Armor](ability:armor/light).')],
})

export const KhydralAdept = Traits.defineTrait('khydral/adept', {
  name: 'Khydral Adept',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(KhydralInitiate)],
  effects: [],
})

export const TimeDilation = Abilities.defineAbility('khydral/time-dilation', {
  name: 'Time Dilation',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(KhydralAdept)],
  actions: [
    {
      name: 'Time Dilation',
      description:
        "Choose a friendly creature you can see within 12 squares. For 10 rounds, the target has a pool of Deferred Damage, which starts empty. Whenever the target takes damage, that damage is added to the pool instead.\n\nDuring your Sustain Phase, the target takes damage equal to half the damage in the pool (rounded up), and that amount is removed from the pool. When the effect ends, the target immediately takes all damage remaining in the pool. Damage taken from the pool can't be deferred.",
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.High, resource: Stamina }],
      targeting: { target: { range: 12, count: 1 } },
    },
  ],
})

export const KhydralMastery = Traits.defineTrait('khydral/mastery', {
  name: 'Khydral Mastery',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(KhydralAdept)],
  effects: [],
})

export const Rewind = Abilities.defineAbility('khydral/rewind', {
  name: 'Rewind',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(KhydralMastery)],
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
