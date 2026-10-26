import { Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { LightArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { Class } from '@simulacrum/ruleset-khydrian-drift/tag'
import { DefenseBonus, FortitudeDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Operator = Traits.defineTrait('operator', {
  name: 'Operator',
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    CharacterEffects.modifyCharacteristic(FortitudeDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    CharacterEffects.gainTrait(LightArmorProficiency),
  ],
})
