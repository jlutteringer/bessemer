import { Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { SubclassLevelPrerequisite } from '@simulacrum/ruleset-khydrian-drift/class/class'
import { LightArmorProficiency, MediumArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { FutureWarfare } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-technology'
import { Class, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { DefenseBonus, FortitudeDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Operator = Traits.defineTrait('operator', {
  name: 'Operator',
  description:
    '*"And I have filled him with the spirit of God, in wisdom, and in understanding, and in knowledge, and in all manner of workmanship, to devise cunning works."*\n\nOperators are the closest thing the sprawl has to sorcerers. With a Omnitool strapped to their wrist they command clouds of nanites that build whatever the moment demands, faster than the eye can follow: arcs of lightning, gouts of flame, walls of hardened alloy, swarms that stitch torn flesh back together. They are rarely the ones holding the line, but they decide how the line holds. And no operator works alone. At their side is a droid companion of their own making, tuned to their craft and trusted with their life.',
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    CharacterEffects.modifyCharacteristic(FortitudeDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    CharacterEffects.gainTrait(LightArmorProficiency),
    CharacterEffects.gainTrait(MediumArmorProficiency),
    CharacterEffects.gainTrait(FutureWarfare),
  ],
})

export const Medic = Traits.defineTrait('operator/medic', {
  name: 'Medic',
  description:
    '*"The Sun of righteousness arise with healing in his wings."*\n\nMedics turn the Omnitool to the most delicate work of all: keeping people alive. Where other operators build barricades and weapons, a medic builds sutures, synthetic blood, and nanite swarms that seal wounds from the inside, often in the middle of a firefight. Their droid companion is a winged field surgeon in its own right, flying above the fight to stabilize anyone the medic cannot reach. In a sprawl where a hospital bed costs more than most people earn in a year, a good medic is worth more than any gun.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Operator), SubclassLevelPrerequisite],
  effects: [],
})

export const AllOperatorEntities = [Operator, Medic]
