import { Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Class, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { BasicCombatTraining } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { DefenseBonus, FortitudeDefense, SoakRating, WillDefense, Willpower } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Warforged = Traits.defineTrait('warblade/warforged', {
  name: 'Warforged',
  tags: [Primary],
  effects: [],
})

export const Stagger = Traits.defineTrait('warblade/stagger', {
  name: 'Stagger',
  tags: [Primary],
  effects: [
    Effects.descriptive(
      'You gain a delayed damage pool called the stagger pool that allows you to forestall the effects of many injuries. The pool begins at 0 with each encounter. When you take damage, instead of applying as normal it is stored in your stagger pool. At the end of your sustain action, you take damage equal to the total stored in your stagger pool which then resets to 0. Any healing you receive can either increase your current hit point total as normal or reduce the total damage in your stagger pool.\n\nSpecial effects tied to an attack such as poison, stun and so forth still affect you as normal. Their effects are not delayed by this ability.'
    ),
  ],
})

export const Warblade = Traits.defineTrait('warblade', {
  name: 'Warblade',
  tags: [Class],
  effects: [
    Effects.modifyCharacteristic(FortitudeDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    Effects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    Effects.gainTrait(Warforged),
    Effects.gainTrait(Stagger),
  ],
})

export const WillOfTheElements = Traits.defineTrait('warblade/will-of-the-elements', {
  name: 'Will of the Elements',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Warblade), Traits.traitPrerequisite(BasicCombatTraining)],
  effects: [Effects.descriptive('Will of the Elements unlocks additional Warblade special abilities.')],
})

export const TitansGrip = Traits.defineTrait('warblade/titans-grip', {
  name: 'Titan’s Grip',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Warblade), Traits.traitPrerequisite(BasicCombatTraining)],
  effects: [
    Effects.descriptive(
      'The Warblade may simultaneously wield both a two handed melee weapon in his main hand and a shield in his off hand, however while equipped in this manner his speed is reduced by 1 square.'
    ),
  ],
})

export const IronWill = Traits.defineTrait('warblade/iron-will', {
  name: 'Iron Will',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Warblade)],
  effects: [
    Effects.modifyCharacteristic(SoakRating, Attributes.modifier(Patches.sum(Willpower.variable))),
    Effects.descriptive(
      'You may add your Willpower modifier to soak rating and substitute your Brawn modifier for Willpower when making basic melee attack rolls. This bonus does not apply to damage rolls.'
    ),
  ],
})

export const AllWarbladeEntities = [Warblade, Warforged, Stagger, WillOfTheElements, TitansGrip, IronWill]
