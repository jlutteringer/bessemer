import { Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { LightArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { Class } from '@simulacrum/ruleset-khydrian-drift/tag'
import { DefenseBonus, ReflexDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Scoundrel = Traits.defineTrait('scoundrel', {
  name: 'Scoundrel',
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(ReflexDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    CharacterEffects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    CharacterEffects.gainTrait(LightArmorProficiency),
  ],
})
