import { CharacterValues } from '@simulacrum/common/character/character'
import { Characteristics } from '@simulacrum/common'
import { Characteristic, CharacteristicTemplate } from '@simulacrum/common/characteristic'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { RoundingMode } from '@bessemer/cornerstone/math'
import { ObjectPaths } from '@bessemer/cornerstone'

export namespace CharacteristicTemplates {
  export const HitPoints: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/hit-points',
    'Hit Points',
    ObjectPaths.from('hitPoints')
  )
  export const ArmorClass: CharacteristicTemplate<number> = Characteristics.defineTemplate(
    'characteristic/armor-class',
    'Armor Class',
    ObjectPaths.from('armorClass')
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
  export const HitPoints: Characteristic<number> = Characteristics.defineCharacteristic({
    template: CharacteristicTemplates.HitPoints,
    initialValue: true,
  })

  export const ArmorClass: Characteristic<number> = Characteristics.defineCharacteristic({
    template: CharacteristicTemplates.ArmorClass,
    initialValue: true,
  })

  export const Initiative: Characteristic<number> = Characteristics.defineCharacteristic({
    template: CharacteristicTemplates.Initiative,
    initialValue: true,
  })

  export const MovementSpeed: Characteristic<number> = Characteristics.defineCharacteristic({
    template: CharacteristicTemplates.Initiative,
    initialValue: true,
  })
}

export namespace PlayerCharacteristics {
  export const Strength: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/strength', 'Strength', ObjectPaths.from('strength')),
    initialValue: true,
  })

  export const Dexterity: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/dexterity', 'Dexterity', ObjectPaths.from('dexterity')),
    initialValue: true,
  })

  export const Constitution: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/constitution', 'Constitution', ObjectPaths.from('constitution')),
    initialValue: true,
  })

  export const Wisdom: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/wisdom', 'Wisdom', ObjectPaths.from('wisdom')),
    initialValue: true,
  })

  export const Intelligence: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/intelligence', 'Intelligence', ObjectPaths.from('intelligence')),
    initialValue: true,
  })

  export const Charisma: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/charisma', 'Charisma', ObjectPaths.from('charisma')),
    initialValue: true,
  })

  export const StrengthModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/strength-modifier', 'Strength Modifier', ObjectPaths.from('strengthModifier')),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Strength.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const DexterityModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/dexterity-modifier', 'Dexterity Modifier', ObjectPaths.from('dexterityModifier')),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Dexterity.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const ConstitutionModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate(
      'characteristic/constitution-modifier',
      'Constitution Modifier',
      ObjectPaths.from('constitutionModifier')
    ),
    baseValue: NumericExpressions.round(
      NumericExpressions.multiply([NumericExpressions.sum([Constitution.variable, -10]), 0.5]),
      0,
      RoundingMode.Down
    ),
  })

  export const WisdomModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/wisdom-modifier', 'Wisdom Modifier', ObjectPaths.from('wisdomModifier')),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Wisdom.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const IntelligenceModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate(
      'characteristic/intelligence-modifier',
      'Intelligence Modifier',
      ObjectPaths.from('intelligenceModifier')
    ),
    baseValue: NumericExpressions.round(
      NumericExpressions.multiply([NumericExpressions.sum([Intelligence.variable, -10]), 0.5]),
      0,
      RoundingMode.Down
    ),
  })

  export const CharismaModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    template: Characteristics.defineTemplate('characteristic/charisma-modifier', 'Charisma Modifier', ObjectPaths.from('charismaModifier')),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Charisma.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const HitPoints: Characteristic<number> = Characteristics.defineCharacteristic({
    template: CharacteristicTemplates.HitPoints,
    baseValue: NumericExpressions.multiply([CharacterValues.Level, ConstitutionModifier.variable]),
  })

  export const ArmorClass: Characteristic<number> = Characteristics.defineCharacteristic({
    template: CharacteristicTemplates.ArmorClass,
    baseValue: NumericExpressions.sum([10, DexterityModifier.variable]),
  })

  export const Initiative: Characteristic<number> = Characteristics.defineCharacteristic({
    template: CharacteristicTemplates.Initiative,
    baseValue: DexterityModifier.variable,
  })

  export const MovementSpeed: Characteristic<number> = Characteristics.defineCharacteristic({
    template: CharacteristicTemplates.MovementSpeed,
    baseValue: 30,
  })
}
