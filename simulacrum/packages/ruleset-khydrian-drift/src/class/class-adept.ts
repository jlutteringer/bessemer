import { Traits } from '@simulacrum/ruleset'
import { Class } from '@simulacrum/ruleset-khydrian-drift/archetype'

export const Adept = Traits.defineTrait('adept', {
  name: 'Adept',
  description: '',
  archetypes: [Class],
  effects: [],
})
