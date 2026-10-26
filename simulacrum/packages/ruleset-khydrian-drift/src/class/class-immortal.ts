import { Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { LightArmorProficiency, MediumArmorProficiency, HeavyArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { Class } from '@simulacrum/ruleset-khydrian-drift/tag'
import { DefenseBonus, FortitudeDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Immortal = Traits.defineTrait('immortal', {
  name: 'Immortal',
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(FortitudeDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    CharacterEffects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    CharacterEffects.gainTrait(LightArmorProficiency),
    CharacterEffects.gainTrait(MediumArmorProficiency),
    CharacterEffects.gainTrait(HeavyArmorProficiency),
  ],
})
