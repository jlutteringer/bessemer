import { Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { LightArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/armor'
import { Class } from '@simulacrum/ruleset-khydrian-drift/archetype'
import { DefenseBonus, ReflexDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Scoundrel = Traits.defineTrait('scoundrel', {
  name: 'Scoundrel',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(ReflexDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    Effects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    Effects.gainTrait(LightArmorProficiency),
  ],
})
