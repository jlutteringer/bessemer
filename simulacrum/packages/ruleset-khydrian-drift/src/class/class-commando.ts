import { Attributes, CharacterEffects, RulesetEntities, Traits, CharacterValues } from '@simulacrum/ruleset'
import { BasicCombatTraining, LightArmorProficiency, MediumArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { WeaponLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { TacticPoints } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import { Class, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import {
  Agility,
  AgilityAttackRating,
  Brawn,
  BrawnAttackRating,
  DefenseBonus,
  FortitudeDefense,
  MovementSpeed,
  ProficiencyBonus,
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
    CharacterEffects.modifyCharacteristic(FortitudeDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    CharacterEffects.modifyCharacteristic(ReflexDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    CharacterEffects.gainTrait(LightArmorProficiency),
    CharacterEffects.gainTrait(MediumArmorProficiency),
    CharacterEffects.modifyCharacteristic(VitalityPool, Attributes.modifier(Patches.sum(NumericExpressions.multiply([CharacterValues.Level, 2])))),
    CharacterEffects.gainTrait(BasicCombatTraining),
    // CharacterEffects.modifyLoadoutSlotQuantity(GeneralLoadoutSlot, 2),
  ],
})

const ArsenalAttackRating = NumericExpressions.sum([ProficiencyBonus.variable, NumericExpressions.max([Brawn.variable, Agility.variable])])

export const Arsenal = Traits.defineTrait('commando/arsenal', {
  name: 'Arsenal',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando)],
  effects: [
    CharacterEffects.gainLoadoutSlot(WeaponLoadout),
    CharacterEffects.modifyCharacteristic(BrawnAttackRating, Attributes.modifier(Patches.set(ArsenalAttackRating))),
    CharacterEffects.modifyCharacteristic(AgilityAttackRating, Attributes.modifier(Patches.set(ArsenalAttackRating))),
    CharacterEffects.descriptive('Any weapon you have equipped is also considered wielded.'),
    CharacterEffects.descriptive('You gain an additional Weapon slot.'),
    CharacterEffects.descriptive(
      'Your [Brawn](characteristic:brawn-attack-rating) and [Agility](characteristic:agility-attack-rating) attack ratings both use whichever of your [Brawn](characteristic:brawn) and [Agility](characteristic:agility) is higher.'
    ),
  ],
})

export const SoldiersStamina = Traits.defineTrait('commando/soldiers-stamina', {
  name: "Soldier's Stamina",
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando)],
  effects: [CharacterEffects.descriptive('Gain healing surges...')],
})

export const Momentum = Traits.defineTrait('commando/momentum', {
  name: 'Momentum',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando)],
  effects: [CharacterEffects.modifyCharacteristic(MovementSpeed, Attributes.modifier(Patches.sum(NumericExpressions.max([Agility.variable, 1]))))],
})

export const Officer = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'commando/officer')
export const Sentinel = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'commando/sentinel')

export const OfficerTrait = Traits.defineTrait('commando/officer', {
  name: 'Officer',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando), Traits.traitPrerequisite(Momentum), Expressions.not(Traits.traitPrerequisite(Sentinel))],
  effects: [
    CharacterEffects.gainResourcePool(TacticPoints),
    // TODO this solution doesn't work - its supposed to add 2 not set 2 - Patch solves!
    // CharacterEffects.modifyLoadoutSlotQuantity(GeneralLoadoutSlot, 2)
  ],
})

export const AdvancedOperations = Traits.defineTrait('commando/advanced-operations', {
  name: 'Advanced Operations',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando), Traits.traitPrerequisite(Officer)],
  effects: [
    // TODO this solution doesn't work - its supposed to add 2 not set 2 - Patch solves!
    // CharacterEffects.modifyResourcePool({ resource: TacticPoints.id, size: 2 }),
    // CharacterEffects.modifyLoadoutSlotQuantity(GeneralLoadoutSlot, 2),
  ],
})

export const SentinelTrait = Traits.defineTrait('commando/sentinel', {
  name: 'Sentinel',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Commando), Expressions.not(Traits.traitPrerequisite(Officer))],
  effects: [],
})
