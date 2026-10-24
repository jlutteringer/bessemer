import { Attributes, Effects, RulesetEntities, Traits, CharacterValues } from '@simulacrum/ruleset'
import { BasicCombatTraining } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { TacticPoints } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import { HeavyArmorProficiency, LightArmorProficiency, MediumArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/armor'
import { Class, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import {
  Agility,
  DefenseBonus,
  FortitudeDefense,
  MovementSpeed,
  ReflexDefense,
  VitalityPool,
} from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'

export const Commando = Traits.defineTrait('commando', {
  name: 'Commando',
  description:
    '*"For by wise counsel thou shalt make thy war: and in multitude of counsellors there is safety."*\n\nCommandos are the professional soldiers of the sprawl, trained by corporate armies and mercenary outfits to lead squads through the worst fighting the city has to offer. They pin enemies down with suppressing fire, adapt their tactics as a fight turns, and draw on tech hardpoints and weapon specializations to fill whatever role their squad needs.',
  tags: [Class],
  effects: [
    Effects.modifyCharacteristic(FortitudeDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    Effects.modifyCharacteristic(ReflexDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    Effects.gainTrait(LightArmorProficiency),
    Effects.gainTrait(MediumArmorProficiency),
    Effects.gainTrait(HeavyArmorProficiency),
    Effects.modifyCharacteristic(VitalityPool, Attributes.modifier(Patches.sum(NumericExpressions.multiply([CharacterValues.Level, 2])))),
    Effects.gainTrait(BasicCombatTraining),
    // Effects.modifyLoadoutSlotQuantity(GeneralLoadoutSlot, 2),
  ],
})

export const Arsenal = Traits.defineTrait('commando/arsenal', {
  name: 'Arsenal',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando)],
  effects: [Effects.descriptive('All equipped weapons are considered wielded.')],
})

export const SoldiersStamina = Traits.defineTrait('commando/soldiers-stamina', {
  name: "Soldier's Stamina",
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando)],
  effects: [Effects.descriptive('Gain healing surges...')],
})

export const Momentum = Traits.defineTrait('commando/momentum', {
  name: 'Momentum',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando)],
  effects: [Effects.modifyCharacteristic(MovementSpeed, Attributes.modifier(Patches.sum(NumericExpressions.max([Agility.variable, 1]))))],
})

export const Officer = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'commando/officer')
export const Sentinel = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'commando/sentinel')

export const OfficerTrait = Traits.defineTrait('commando/officer', {
  name: 'Officer',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando), Traits.traitPrerequisite(Momentum), Expressions.not(Traits.traitPrerequisite(Sentinel))],
  effects: [
    Effects.gainResourcePool(TacticPoints),
    // TODO this solution doesn't work - its supposed to add 2 not set 2 - Patch solves!
    // Effects.modifyLoadoutSlotQuantity(GeneralLoadoutSlot, 2)
  ],
})

export const AdvancedOperations = Traits.defineTrait('commando/advanced-operations', {
  name: 'Advanced Operations',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando), Traits.traitPrerequisite(Officer)],
  effects: [
    // TODO this solution doesn't work - its supposed to add 2 not set 2 - Patch solves!
    // Effects.modifyResourcePool({ resource: TacticPoints.id, size: 2 }),
    // Effects.modifyLoadoutSlotQuantity(GeneralLoadoutSlot, 2),
  ],
})

export const SentinelTrait = Traits.defineTrait('commando/sentinel', {
  name: 'Sentinel',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando), Expressions.not(Traits.traitPrerequisite(Officer))],
  effects: [],
})
