import { Traits } from '@simulacrum/ruleset'
import { Class } from '@simulacrum/ruleset-khydrian-drift/archetype'

export const Immortal = Traits.defineTrait('immortal', {
  name: 'Immortal',
  description: '',
  archetypes: [Class],
  effects: [],
})
