import { Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Class } from '@simulacrum/ruleset-khydrian-drift/tag'
import { DefenseBonus, ReflexDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { KhydralSensitivity } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-khydral'

export const Adept = Traits.defineTrait('adept', {
  name: 'Adept',
  description:
    '*"He stretcheth out the north over the empty place, and hangeth the earth upon nothing."*\n\nAdepts are khydral specialists, trained to turn a raw and dangerous sensitivity into precise control over space, time, and force. Where others bring guns and implants to a fight, an adept brings their mind: they throw enemies off their feet, slow the flow of time around an ally, and hold a collapsing position together for a few more seconds. Their discipline makes them hard to break, but every adept knows how thin the line is between control and catastrophe.',
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    CharacterEffects.modifyCharacteristic(ReflexDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    CharacterEffects.gainTrait(KhydralSensitivity),
  ],
})
