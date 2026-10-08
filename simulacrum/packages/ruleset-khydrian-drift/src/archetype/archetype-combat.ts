import { Traits } from '@simulacrum/ruleset'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/archetype'

export const BasicCombatTraining = Traits.defineTrait('combat/basic-training', {
  name: 'Basic Combat Training',
  description: '',
  archetypes: [Primary],
  prerequisites: [],
  effects: [],
})
