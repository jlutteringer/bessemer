import { Abilities, Effects, Traits } from '@simulacrum/ruleset'
import { ActionType } from '@simulacrum/ruleset/ability'
import { CyberwareLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { gainCyberware } from '@simulacrum/ruleset-khydrian-drift/cyberware'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/archetype'

export const ModularCybernetics = Traits.defineTrait('cybernetics/modular-cybernetics', {
  name: 'Modular Cybernetics',
  description:
    '<p><em>"If thy right hand offend thee, cut it off."</em></p><p>Mass-produced implants fill the clinics and chop shops of every city on Earth, sold on payment plans to anyone desperate to keep up. Next year\'s model is always better.</p>',
  archetypes: [Primary],
  prerequisites: [],
  effects: [Effects.gainLoadoutSlot(CyberwareLoadout), ...gainCyberware()],
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

export const BrainCybernetics = Traits.defineTrait('cybernetics/brain-cybernetics', {
  name: 'Brain Cybernetics',
  description: '',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(AnatomicalIntegration)],
  effects: [],
})

export const TheFleshIsWeak = Traits.defineTrait('cybernetics/the-flesh-is-weak', {
  name: 'The Flesh Is Weak',
  description: '',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(ClosedLoopCirculation), Traits.traitPrerequisite(BrainCybernetics)],
  effects: [],
})

export const JudgementDay = Traits.defineTrait('cybernetics/judgement-day', {
  name: 'Judgement Day',
  description: '',
  archetypes: [Primary],
  prerequisites: [Traits.traitPrerequisite(TheFleshIsWeak)],
  effects: [],
})
