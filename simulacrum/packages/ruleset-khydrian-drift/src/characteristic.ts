import { Characteristics } from '@simulacrum/ruleset'
import { CharacterValues } from '@simulacrum/ruleset/character'
import { Characteristic, CharacteristicTemplate } from '@simulacrum/ruleset/characteristic'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { ObjectPaths } from '@bessemer/cornerstone'

export namespace CharacteristicTemplates {
  export const VitalityPool: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/vitality-pool',
    'Vitality Pool',
    ObjectPaths.from('vitalityPool')
  )
  export const StaminaPool: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/stamina-pool',
    'Stamina Pool',
    ObjectPaths.from('staminaPool')
  )
  export const SoakRating: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/soak-rating',
    'Soak Rating',
    ObjectPaths.from('soakRating')
  )
  export const MovementSpeed: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/movement-speed',
    'Movement Speed',
    ObjectPaths.from('movementSpeed')
  )
  export const InitiativeRating: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/initiative-rating',
    'Initiative Rating',
    ObjectPaths.from('initiativeRating')
  )
  export const PhysicalDefenseRating: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/physical-defense-rating',
    'Physical Defense Rating',
    ObjectPaths.from('physicalDefenseRating')
  )
  export const FortitudeDefenseRating: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/fortitude-defense-rating',
    'Fortitude Defense Rating',
    ObjectPaths.from('fortitudeDefenseRating')
  )
  export const ReflexDefenseRating: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/reflex-defense-rating',
    'Reflex Defense Rating',
    ObjectPaths.from('reflexDefenseRating')
  )
  export const WillpowerDefenseRating: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/willpower-defense-rating',
    'Willpower Defense Rating',
    ObjectPaths.from('willpowerDefenseRating')
  )
}

export namespace CreatureCharacteristics {
  export const VitalityPool: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.VitalityPool,
    initialValue: true,
  })

  export const StaminaPool: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.StaminaPool,
    initialValue: true,
  })

  export const SoakRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.SoakRating,
    initialValue: true,
  })

  export const MovementSpeed: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.MovementSpeed,
    initialValue: true,
  })

  export const InitiativeRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.InitiativeRating,
    initialValue: true,
  })

  export const PhysicalDefenseRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.PhysicalDefenseRating,
    initialValue: true,
  })

  export const FortitudeDefenseRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.FortitudeDefenseRating,
    initialValue: true,
  })

  export const ReflexDefenseRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.ReflexDefenseRating,
    initialValue: true,
  })

  export const WillpowerDefenseRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.WillpowerDefenseRating,
    initialValue: true,
  })
}

export namespace CharacteristicGroups {
  export const Attributes = Characteristics.defineGroup('characteristic-group/attributes', { name: 'Attributes' })
  export const Combat = Characteristics.defineGroup('characteristic-group/combat', { name: 'Combat' })
  export const Defenses = Characteristics.defineGroup('characteristic-group/defenses', { name: 'Defenses' })
}

// FUTURE the Standard Progression table only gives a Proficiency Bonus (+2) for levels 1 to 5
const ProficiencyBonus = 2

export namespace PlayerCharacteristics {
  export const Brawn: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Attributes,
    template: Characteristics.defineTemplate('characteristic/brawn', 'Brawn', ObjectPaths.from('brawn')),
    initialValue: true,
  })

  export const Agility: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Attributes,
    template: Characteristics.defineTemplate('characteristic/agility', 'Agility', ObjectPaths.from('agility')),
    initialValue: true,
  })

  export const Willpower: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Attributes,
    template: Characteristics.defineTemplate('characteristic/willpower', 'Willpower', ObjectPaths.from('willpower')),
    initialValue: true,
  })

  export const Intelligence: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Attributes,
    template: Characteristics.defineTemplate('characteristic/intelligence', 'Intelligence', ObjectPaths.from('intelligence')),
    initialValue: true,
  })

  export const Presence: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Attributes,
    template: Characteristics.defineTemplate('characteristic/presence', 'Presence', ObjectPaths.from('presence')),
    initialValue: true,
  })

  export const VitalityPool: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.VitalityPool,
    baseValue: NumericExpressions.sum([10, NumericExpressions.multiply([CharacterValues.Level, 5])]),
  })

  // From the Standard Progression table's Endurance Points column
  export const StaminaPool: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.StaminaPool,
    baseValue: NumericExpressions.sum([24, NumericExpressions.multiply([Presence.variable, 4])]),
  })

  export const SoakRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.SoakRating,
    baseValue: Brawn.variable,
  })

  export const MovementSpeed: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.MovementSpeed,
    baseValue: 4,
  })

  export const InitiativeRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.InitiativeRating,
    baseValue: Agility.variable,
  })

  export const PhysicalDefenseRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    group: CharacteristicGroups.Defenses,
    template: CharacteristicTemplates.PhysicalDefenseRating,
    baseValue: NumericExpressions.sum([8, ProficiencyBonus, Agility.variable]),
  })

  export const FortitudeDefenseRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    group: CharacteristicGroups.Defenses,
    template: CharacteristicTemplates.FortitudeDefenseRating,
    baseValue: NumericExpressions.sum([8, ProficiencyBonus, Brawn.variable]),
  })

  export const ReflexDefenseRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    group: CharacteristicGroups.Defenses,
    template: CharacteristicTemplates.ReflexDefenseRating,
    baseValue: NumericExpressions.sum([8, ProficiencyBonus, Agility.variable]),
  })

  export const WillpowerDefenseRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    group: CharacteristicGroups.Defenses,
    template: CharacteristicTemplates.WillpowerDefenseRating,
    baseValue: NumericExpressions.sum([8, ProficiencyBonus, Willpower.variable]),
  })
}
