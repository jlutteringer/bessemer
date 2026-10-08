import { Traits } from '@simulacrum/ruleset'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/archetype'

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

export const KhydralAdept = Traits.defineTrait('khydral/adept', {
  name: 'Khydral Adept',
  description: '',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(KhydralInitiate)],
  effects: [],
})

export const KhydralMastery = Traits.defineTrait('khydral/mastery', {
  name: 'Khydral Mastery',
  description: '',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(KhydralAdept)],
  effects: [],
})
