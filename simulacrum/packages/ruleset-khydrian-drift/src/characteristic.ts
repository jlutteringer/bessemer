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
}

export namespace PlayerCharacteristics {
  export const Brawn: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/brawn', 'Brawn', ObjectPaths.from('brawn')),
    initialValue: true,
  })

  export const Agility: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/agility', 'Agility', ObjectPaths.from('agility')),
    initialValue: true,
  })

  export const Willpower: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/willpower', 'Willpower', ObjectPaths.from('willpower')),
    initialValue: true,
  })

  export const Intelligence: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/intelligence', 'Intelligence', ObjectPaths.from('intelligence')),
    initialValue: true,
  })

  export const Presence: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/presence', 'Presence', ObjectPaths.from('presence')),
    initialValue: true,
  })

  export const VitalityPool: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.VitalityPool,
    baseValue: NumericExpressions.sum([10, NumericExpressions.multiply([CharacterValues.Level, 5])]),
  })

  // From the Standard Progression table's Endurance Points column
  export const StaminaPool: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.StaminaPool,
    baseValue: NumericExpressions.sum([24, NumericExpressions.multiply([Presence.variable, 4])]),
  })

  export const SoakRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.SoakRating,
    baseValue: Brawn.variable,
  })

  export const MovementSpeed: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.MovementSpeed,
    baseValue: 4,
  })

  export const InitiativeRating: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.InitiativeRating,
    baseValue: Agility.variable,
  })
}
