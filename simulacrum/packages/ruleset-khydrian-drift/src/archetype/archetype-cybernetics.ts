import { Abilities, Effects, Loadout, Traits } from '@simulacrum/ruleset'
import { ActionType } from '@simulacrum/ruleset/ability'
import { AllCyberware } from '@simulacrum/ruleset-khydrian-drift/cyberware'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/archetype'

export const CyberwareLoadout = Loadout.defineLoadoutType('loadout/cyberware', { name: 'Cyberware' })

export const ModularCybernetics = Traits.defineTrait('cybernetics/modular-cybernetics', {
  name: 'Modular Cybernetics',
  description:
    '<p><em>"If thy right hand offend thee, cut it off."</em></p><p>Mass-produced implants fill the clinics and chop shops of every city on Earth, sold on payment plans to anyone desperate to keep up. Next year\'s model is always better.</p>',
  archetypes: [Primary],
  prerequisites: [],
  effects: [Effects.gainLoadoutSlot(CyberwareLoadout), ...AllCyberware.map((it) => Effects.gainAbility(it, CyberwareLoadout))],
})

export const HardLanding = Abilities.defineAbility('cybernetics/hard-landing', {
  name: 'Hard Landing',
  effects: [
    Effects.descriptive(
      '<p>When you fall, you can take a Reaction to land without taking damage from a fall of 6 squares or less. If you fell at least 2 squares, make a Brawn attack against the Fortitude Defense of each creature adjacent to where you land. On a hit, the creature is knocked prone.</p>'
    ),
  ],
  actions: [{ name: 'Use Hard Landing', action: ActionType.Reaction }],
})

export const AnatomicalIntegration = Traits.defineTrait('cybernetics/anatomical-integration', {
  name: 'Anatomical Integration',
  description:
    '<p><em>"This is now bone of my bones, and flesh of my flesh."</em></p><p>There is a point past which augmentation stops being an accessory. It begins on an operating table, with a corporate surgeon and a skeleton that will never be fully organic again.</p>',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(ModularCybernetics)],
  effects: [Effects.gainLoadoutSlot(CyberwareLoadout), Effects.gainAbility(HardLanding)],
})

export const ClosedLoopCirculation = Traits.defineTrait('cybernetics/closed-loop-circulation', {
  name: 'Closed-Loop Circulation',
  description:
    '<p><em>"Cease ye from man, whose breath is in his nostrils."</em></p><p>Synthetic blood carries its own oxygen through a sealed, self-scrubbing loop. Your lungs have become a formality.</p>',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(AnatomicalIntegration)],
  effects: [
    Effects.gainLoadoutSlot(CyberwareLoadout),
    Effects.descriptive(
      "<p>You don't need to breathe. You can't drown or suffocate, and you can survive underwater and in a vacuum. You are immune to effects that must be inhaled, such as gases, smoke, and airborne toxins.</p>"
    ),
  ],
})

export const NeuralLace = Traits.defineTrait('cybernetics/neural-lace', {
  name: 'Neural Lace',
  description:
    '<p><em>"Search me, O God, and know my heart: try me, and know my thoughts."</em></p><p>Microscopic threads lace every fold of the brain, translating thought into signal and back again. Reflexes quicken, memory sharpens, and the mind can interface directly with the Grid.</p>',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(AnatomicalIntegration)],
  effects: [],
})

export const TheFleshIsWeak = Traits.defineTrait('cybernetics/the-flesh-is-weak', {
  name: 'The Flesh Is Weak',
  description:
    '<p><em>"For this corruptible must put on incorruption, and this mortal must put on immortality."</em></p><p>Few ever take augmentation this far, replacing nearly every organ and tissue with machinery until little of the original body remains. What is left no longer sickens, tires, or ages, and is serviced in a workshop rather than healed in a hospital.</p>',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(ClosedLoopCirculation), Traits.traitPrerequisite(NeuralLace)],
  effects: [],
})

export const JudgementDay = Traits.defineTrait('cybernetics/judgement-day', {
  name: 'Judgement Day',
  description:
    '<p><em>"Flesh and blood cannot inherit the kingdom of God."</em></p><p>A miniature fusion reactor is installed where the heart once was, ending the body\'s dependence on food, rest, and external power. Its output can sustain the most demanding cyberware indefinitely, and in the right hands it can be turned into a weapon.</p>',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(TheFleshIsWeak)],
  effects: [],
})
