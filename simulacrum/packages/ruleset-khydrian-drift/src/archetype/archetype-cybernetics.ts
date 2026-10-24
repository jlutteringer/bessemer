import { Abilities, Effects, Traits } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { CyberwareLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/tag'

export const ModularCybernetics = Traits.defineTrait('cybernetics/modular-cybernetics', {
  name: 'Modular Cybernetics',
  description:
    '*"If thy right hand offend thee, cut it off."*\n\nMass-produced implants fill the clinics and chop shops of every city on Earth, sold on payment plans to anyone desperate to keep up. Next year\'s model is always better.',
  tags: [Primary],
  prerequisites: [],
  effects: [Effects.gainLoadoutSlot(CyberwareLoadout)],
})

export const AnatomicalIntegration = Traits.defineTrait('cybernetics/anatomical-integration', {
  name: 'Anatomical Integration',
  description:
    '*"This is now bone of my bones, and flesh of my flesh."*\n\nThere is a point past which augmentation stops being an accessory. It begins on an operating table, with a corporate surgeon and a skeleton that will never be fully organic again.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(ModularCybernetics)],
  effects: [Effects.gainLoadoutSlot(CyberwareLoadout)],
})

export const HardLanding = Abilities.defineAbility('cybernetics/hard-landing', {
  name: 'Hard Landing',
  prerequisites: [Traits.traitPrerequisite(AnatomicalIntegration)],
  effects: [
    Effects.descriptive(
      'When you fall, you can take a Reaction to land without taking damage from a fall of 6 squares or less. If you fell at least 2 squares, make a Brawn attack against the Fortitude of each creature adjacent to where you land. On a hit, the creature is knocked prone.'
    ),
  ],
  actions: [{ name: 'Use Hard Landing', action: ActionTypes.Reaction }],
})

export const ClosedLoopCirculation = Traits.defineTrait('cybernetics/closed-loop-circulation', {
  name: 'Closed-Loop Circulation',
  description:
    '*"Cease ye from man, whose breath is in his nostrils."*\n\nSynthetic blood carries its own oxygen through a sealed, self-scrubbing loop. Your lungs have become a formality.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(AnatomicalIntegration)],
  effects: [
    Effects.gainLoadoutSlot(CyberwareLoadout),
    Effects.descriptive(
      "You don't need to breathe. You can't drown or suffocate, and you can survive underwater and in a vacuum. You are immune to effects that must be inhaled, such as gases, smoke, and airborne toxins."
    ),
  ],
})

export const NeuralLace = Traits.defineTrait('cybernetics/neural-lace', {
  name: 'Neural Lace',
  description:
    '*"Search me, O God, and know my heart: try me, and know my thoughts."*\n\nMicroscopic threads lace every fold of the brain, translating thought into signal and back again. Reflexes quicken, memory sharpens, and the mind can interface directly with the Grid.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(AnatomicalIntegration)],
  effects: [],
})

export const TheFleshIsWeak = Traits.defineTrait('cybernetics/the-flesh-is-weak', {
  name: 'The Flesh Is Weak',
  description:
    '*"For this corruptible must put on incorruption, and this mortal must put on immortality."*\n\nFew ever take augmentation this far, replacing nearly every organ and tissue with machinery until little of the original body remains. What is left no longer sickens, tires, or ages, and is serviced in a workshop rather than healed in a hospital.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(ClosedLoopCirculation), Traits.traitPrerequisite(NeuralLace)],
  effects: [],
})

export const JudgementDay = Traits.defineTrait('cybernetics/judgement-day', {
  name: 'Judgement Day',
  description:
    '*"Flesh and blood cannot inherit the kingdom of God."*\n\nA miniature fusion reactor is installed where the heart once was, ending the body\'s dependence on food, rest, and external power. Its output can sustain the most demanding cyberware indefinitely, and in the right hands it can be turned into a weapon.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(TheFleshIsWeak)],
  effects: [],
})
