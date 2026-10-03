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

export namespace CharacteristicGroups {
  export const Abilities = Characteristics.defineGroup('characteristic-group/abilities', { name: 'Abilities' })
  export const SavingThrows = Characteristics.defineGroup('characteristic-group/saving-throws', { name: 'Saving Throws' })
  export const Combat = Characteristics.defineGroup('characteristic-group/combat', { name: 'Combat' })
  export const Skills = Characteristics.defineGroup('characteristic-group/skills', { name: 'Skills' })
}

export namespace PlayerCharacteristics {
  export const Strength: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('characteristic/strength', 'Strength', ObjectPaths.from('strength')),
    initialValue: true,
  })

  export const Dexterity: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('characteristic/dexterity', 'Dexterity', ObjectPaths.from('dexterity')),
    initialValue: true,
  })

  export const Constitution: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('characteristic/constitution', 'Constitution', ObjectPaths.from('constitution')),
    initialValue: true,
  })

  export const Wisdom: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('characteristic/wisdom', 'Wisdom', ObjectPaths.from('wisdom')),
    initialValue: true,
  })

  export const Intelligence: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('characteristic/intelligence', 'Intelligence', ObjectPaths.from('intelligence')),
    initialValue: true,
  })

  export const Charisma: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('characteristic/charisma', 'Charisma', ObjectPaths.from('charisma')),
    initialValue: true,
  })

  export const StrengthModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('characteristic/strength-modifier', 'Strength Modifier', ObjectPaths.from('strengthModifier')),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Strength.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const DexterityModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('characteristic/dexterity-modifier', 'Dexterity Modifier', ObjectPaths.from('dexterityModifier')),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Dexterity.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const ConstitutionModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
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
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('characteristic/wisdom-modifier', 'Wisdom Modifier', ObjectPaths.from('wisdomModifier')),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Wisdom.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const IntelligenceModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
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
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('characteristic/charisma-modifier', 'Charisma Modifier', ObjectPaths.from('charismaModifier')),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Charisma.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const ProficiencyBonus: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: Characteristics.defineTemplate('characteristic/proficiency-bonus', 'Proficiency Bonus', ObjectPaths.from('proficiencyBonus')),
    baseValue: NumericExpressions.sum([
      2,
      NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([CharacterValues.Level, -1]), 0.25]), 0, RoundingMode.Down),
    ]),
  })

  export const HitPoints: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.HitPoints,
    baseValue: NumericExpressions.multiply([CharacterValues.Level, ConstitutionModifier.variable]),
  })

  export const ArmorClass: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.ArmorClass,
    baseValue: NumericExpressions.sum([10, DexterityModifier.variable]),
  })

  export const Initiative: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.Initiative,
    baseValue: DexterityModifier.variable,
  })

  export const MovementSpeed: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.MovementSpeed,
    baseValue: 30,
  })

  export const Acrobatics: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/acrobatics', 'Acrobatics', ObjectPaths.from('acrobatics')),
    baseValue: DexterityModifier.variable,
  })

  export const AnimalHandling: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/animal-handling', 'Animal Handling', ObjectPaths.from('animalHandling')),
    baseValue: WisdomModifier.variable,
  })

  export const Arcana: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/arcana', 'Arcana', ObjectPaths.from('arcana')),
    baseValue: IntelligenceModifier.variable,
  })

  export const Athletics: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/athletics', 'Athletics', ObjectPaths.from('athletics')),
    baseValue: StrengthModifier.variable,
  })

  export const Deception: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/deception', 'Deception', ObjectPaths.from('deception')),
    baseValue: CharismaModifier.variable,
  })

  export const History: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/history', 'History', ObjectPaths.from('history')),
    baseValue: IntelligenceModifier.variable,
  })

  export const Insight: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/insight', 'Insight', ObjectPaths.from('insight')),
    baseValue: WisdomModifier.variable,
  })

  export const Intimidation: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/intimidation', 'Intimidation', ObjectPaths.from('intimidation')),
    baseValue: CharismaModifier.variable,
  })

  export const Investigation: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/investigation', 'Investigation', ObjectPaths.from('investigation')),
    baseValue: IntelligenceModifier.variable,
  })

  export const Medicine: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/medicine', 'Medicine', ObjectPaths.from('medicine')),
    baseValue: WisdomModifier.variable,
  })

  export const Nature: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/nature', 'Nature', ObjectPaths.from('nature')),
    baseValue: IntelligenceModifier.variable,
  })

  export const Perception: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/perception', 'Perception', ObjectPaths.from('perception')),
    baseValue: WisdomModifier.variable,
  })

  export const Performance: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/performance', 'Performance', ObjectPaths.from('performance')),
    baseValue: CharismaModifier.variable,
  })

  export const Persuasion: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/persuasion', 'Persuasion', ObjectPaths.from('persuasion')),
    baseValue: CharismaModifier.variable,
  })

  export const Religion: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/religion', 'Religion', ObjectPaths.from('religion')),
    baseValue: IntelligenceModifier.variable,
  })

  export const SleightOfHand: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/sleight-of-hand', 'Sleight of Hand', ObjectPaths.from('sleightOfHand')),
    baseValue: DexterityModifier.variable,
  })

  export const Stealth: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/stealth', 'Stealth', ObjectPaths.from('stealth')),
    baseValue: DexterityModifier.variable,
  })

  export const Survival: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('characteristic/skill/survival', 'Survival', ObjectPaths.from('survival')),
    baseValue: WisdomModifier.variable,
  })

  export const StrengthSave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('characteristic/saving-throw/strength', 'Strength Save', ObjectPaths.from('strengthSave')),
    baseValue: StrengthModifier.variable,
  })

  export const DexteritySave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('characteristic/saving-throw/dexterity', 'Dexterity Save', ObjectPaths.from('dexteritySave')),
    baseValue: DexterityModifier.variable,
  })

  export const ConstitutionSave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('characteristic/saving-throw/constitution', 'Constitution Save', ObjectPaths.from('constitutionSave')),
    baseValue: ConstitutionModifier.variable,
  })

  export const IntelligenceSave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('characteristic/saving-throw/intelligence', 'Intelligence Save', ObjectPaths.from('intelligenceSave')),
    baseValue: IntelligenceModifier.variable,
  })

  export const WisdomSave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('characteristic/saving-throw/wisdom', 'Wisdom Save', ObjectPaths.from('wisdomSave')),
    baseValue: WisdomModifier.variable,
  })

  export const CharismaSave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('characteristic/saving-throw/charisma', 'Charisma Save', ObjectPaths.from('charismaSave')),
    baseValue: CharismaModifier.variable,
  })
}
