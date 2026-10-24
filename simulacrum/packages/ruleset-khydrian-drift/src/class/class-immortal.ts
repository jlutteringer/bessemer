import { Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { LightArmorProficiency, MediumArmorProficiency, HeavyArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/armor'
import { Class } from '@simulacrum/ruleset-khydrian-drift/archetype'
import { DefenseBonus, FortitudeDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Immortal = Traits.defineTrait('immortal', {
  name: 'Immortal',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(FortitudeDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    Effects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    Effects.gainTrait(LightArmorProficiency),
    Effects.gainTrait(MediumArmorProficiency),
    Effects.gainTrait(HeavyArmorProficiency),
  ],
})
