import { Traits } from '@simulacrum/ruleset'
import { Class } from '@simulacrum/ruleset-khydrian-drift/archetype'

export const Operator = Traits.defineTrait('operator', {
  name: 'Operator',
  description: '',
  archetypes: [Class],
  effects: [],
})
