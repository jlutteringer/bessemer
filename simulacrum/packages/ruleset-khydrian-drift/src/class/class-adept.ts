import { Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Class } from '@simulacrum/ruleset-khydrian-drift/archetype'
import { DefenseBonus, ReflexDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Adept = Traits.defineTrait('adept', {
  name: 'Adept',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    Effects.modifyCharacteristic(ReflexDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
  ],
})
