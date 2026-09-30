import { Characteristics } from '@simulacrum/common'
import { CharacterValues } from '@simulacrum/common/character/character'
import { Characteristic, CharacteristicTemplate } from '@simulacrum/common/characteristic'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { ObjectPaths } from '@bessemer/cornerstone'

export namespace CharacteristicTemplates {
  export const VitalityPool: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/vitality-pool',
    'Vitality Pool',
    ObjectPaths.from('vitalityPool')
  )
  export const Initiative: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/initiative',
    'Initiative',
    ObjectPaths.from('initiative')
  )
  export const MovementSpeed: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/movement-speed',
    'Movement Speed',
    ObjectPaths.from('movementSpeed')
  )
}

export namespace CreatureCharacteristics {
  export const VitalityPool: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.VitalityPool,
    initialValue: true,
  })

  export const Initiative: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.Initiative,
    initialValue: true,
  })

  export const MovementSpeed: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.Initiative,
    initialValue: true,
  })
}

export namespace PlayerCharacteristics {
  export const Brawn: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/brawn', 'Strength', ObjectPaths.from('strength')),
    initialValue: true,
  })

  export const Agility: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/agility', 'Agility', ObjectPaths.from('agility')),
    initialValue: true,
  })

  export const Willpower: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/willpower', 'Wisdom', ObjectPaths.from('wisdom')),
    initialValue: true,
  })

  export const Intelligence: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/intelligence', 'Intelligence', ObjectPaths.from('intelligence')),
    initialValue: true,
  })

  export const Presence: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/presence', 'Charisma', ObjectPaths.from('charisma')),
    initialValue: true,
  })

  export const VitalityPool: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.VitalityPool,
    baseValue: NumericExpressions.sum([10, NumericExpressions.multiply([CharacterValues.Level, 5])]),
  })

  export const Initiative: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.Initiative,
    baseValue: Agility.variable,
  })

  export const MovementSpeed: Characteristic<number> = Characteristics.defineCharacteristic<number>({
    template: CharacteristicTemplates.MovementSpeed,
    baseValue: 4,
  })
}
