import { Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Class } from '@simulacrum/ruleset-khydrian-drift/tag'
import { DefenseBonus, ReflexDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Adept = Traits.defineTrait('adept', {
  name: 'Adept',
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    CharacterEffects.modifyCharacteristic(ReflexDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
  ],
})
