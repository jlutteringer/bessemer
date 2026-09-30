import { TraitReference } from '@simulacrum/common/trait'
import { Attributes, Effects, Traits } from '@simulacrum/common'
import { BasicCombatTraining } from '@simulacrum/rulesets/khydrian-drift/archetype/archetype-combat'
import { TacticPoints } from '@simulacrum/rulesets/khydrian-drift/resource-pool'
import { Class } from '@simulacrum/rulesets/khydrian-drift/archetype'
import { CharacterValues } from '@simulacrum/common/character/character'
import { PlayerCharacteristics } from '@simulacrum/rulesets/khydrian-drift/characteristic'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'

export const Commando = Traits.defineTrait('commando', {
  name: 'Commando',
  description: '',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.VitalityPool,
      Attributes.modifier(Patches.sum(NumericExpressions.multiply([CharacterValues.Level, 2])))
    ),
    Effects.gainTrait(BasicCombatTraining),
    // Effects.modifyLoadoutSlotQuantity(GeneralLoadoutSlot, 2),
    // Effects.modifyLoadoutSlotQuantity(AdvancedHardpointLoadoutSlot, 1),
  ],
})

export const Arsenal = Traits.defineTrait('commando/arsenal', {
  name: 'Arsenal',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Commando)],
  effects: [Effects.descriptive('All equipped weapons are considered wielded.')],
})

export const SoldiersStamina = Traits.defineTrait('commando/soldiers-stamina', {
  name: "Soldier's Stamina",
  description: '',
  prerequisites: [Traits.traitPrerequisite(Commando)],
  effects: [Effects.descriptive('Gain healing surges...')],
})

export const Momentum = Traits.defineTrait('commando/momentum', {
  name: 'Momentum',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Commando)],
  effects: [
    Effects.modifyCharacteristic(
      PlayerCharacteristics.MovementSpeed,
      Attributes.modifier(Patches.sum(NumericExpressions.floor(PlayerCharacteristics.Agility.variable, 1)))
    ),
  ],
})

export const BaselineQuickGuy = Traits.defineTrait('asdasdaSDasdasDasdasDd', {
  name: 'BaselineQuickGuy',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Commando)],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.MovementSpeed, Attributes.modifier(Patches.set(6)))],
})

export const Officer = 'commando/officer' as TraitReference
export const Sentinel = 'commando/sentinel' as TraitReference

export const OfficerTrait = Traits.defineTrait(Officer, {
  name: 'Officer',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Commando), Traits.traitPrerequisite(Momentum), Expressions.not(Traits.traitPrerequisite(Sentinel))],
  effects: [
    Effects.gainResourcePool(TacticPoints),
    // TODO this solution doesn't work - its supposed to add 2 not set 2 - Patch solves!
    // Effects.modifyLoadoutSlotQuantity(GeneralLoadoutSlot, 2)
  ],
})

export const AdvancedOperations = Traits.defineTrait('commando/advanced-operations', {
  name: 'Advanced Operations',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Commando), Traits.traitPrerequisite(Officer)],
  effects: [
    // TODO this solution doesn't work - its supposed to add 2 not set 2 - Patch solves!
    // Effects.modifyResourcePool({ resource: TacticPoints.id, size: 2 }),
    // Effects.modifyLoadoutSlotQuantity(GeneralLoadoutSlot, 2),
  ],
})

export const SentinelTrait = Traits.defineTrait(Sentinel, {
  name: 'Sentinel',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Commando), Expressions.not(Traits.traitPrerequisite(Officer))],
  effects: [],
})
