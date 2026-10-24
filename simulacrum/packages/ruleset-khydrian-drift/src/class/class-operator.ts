import { Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { LightArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/armor'
import { Class } from '@simulacrum/ruleset-khydrian-drift/archetype'
import { DefenseBonus, FortitudeDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Operator = Traits.defineTrait('operator', {
  name: 'Operator',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    Effects.modifyCharacteristic(FortitudeDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    Effects.gainTrait(LightArmorProficiency),
  ],
})
