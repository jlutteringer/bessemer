import { Characteristics, CharacterValues } from '@simulacrum/ruleset'
import { Characteristic, CharacteristicTemplate } from '@simulacrum/ruleset/characteristic'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { RoundingMode } from '@bessemer/cornerstone/math'
import { ObjectPaths } from '@bessemer/cornerstone'

export namespace CharacteristicTemplates {
  export const HitPoints: CharacteristicTemplate = Characteristics.defineTemplate('hit-points', {
    name: 'Hit Points',
    path: ObjectPaths.from('hitPoints'),
  })
  export const ArmorClass: CharacteristicTemplate = Characteristics.defineTemplate('armor-class', {
    name: 'Armor Class',
    path: ObjectPaths.from('armorClass'),
  })
  export const Initiative: CharacteristicTemplate = Characteristics.defineTemplate('initiative', {
    name: 'Initiative',
    path: ObjectPaths.from('initiative'),
  })
  export const MovementSpeed: CharacteristicTemplate = Characteristics.defineTemplate('movement-speed', {
    name: 'Movement Speed',
    path: ObjectPaths.from('movementSpeed'),
  })
}

export namespace CharacteristicGroups {
  export const Abilities = Characteristics.defineGroup('abilities', { name: 'Abilities' })
  export const SavingThrows = Characteristics.defineGroup('saving-throws', { name: 'Saving Throws' })
  export const Combat = Characteristics.defineGroup('combat', { name: 'Combat' })
  export const Skills = Characteristics.defineGroup('skills', { name: 'Skills' })
}

export namespace PlayerCharacteristics {
  export const Strength: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('strength', { name: 'Strength', path: ObjectPaths.from('strength') }),
    initialValue: true,
  })

  export const Dexterity: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('dexterity', { name: 'Dexterity', path: ObjectPaths.from('dexterity') }),
    initialValue: true,
  })

  export const Constitution: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('constitution', { name: 'Constitution', path: ObjectPaths.from('constitution') }),
    initialValue: true,
  })

  export const Wisdom: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('wisdom', { name: 'Wisdom', path: ObjectPaths.from('wisdom') }),
    initialValue: true,
  })

  export const Intelligence: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('intelligence', { name: 'Intelligence', path: ObjectPaths.from('intelligence') }),
    initialValue: true,
  })

  export const Charisma: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('charisma', { name: 'Charisma', path: ObjectPaths.from('charisma') }),
    initialValue: true,
  })

  export const StrengthModifier: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('strength-modifier', {
      name: 'Strength Modifier',
      path: ObjectPaths.from('strengthModifier'),
    }),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Strength.variable, -10]), 0.5]), 0, RoundingMode.Floor),
  })

  export const DexterityModifier: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('dexterity-modifier', {
      name: 'Dexterity Modifier',
      path: ObjectPaths.from('dexterityModifier'),
    }),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Dexterity.variable, -10]), 0.5]), 0, RoundingMode.Floor),
  })

  export const ConstitutionModifier: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('constitution-modifier', {
      name: 'Constitution Modifier',
      path: ObjectPaths.from('constitutionModifier'),
    }),
    baseValue: NumericExpressions.round(
      NumericExpressions.multiply([NumericExpressions.sum([Constitution.variable, -10]), 0.5]),
      0,
      RoundingMode.Floor
    ),
  })

  export const WisdomModifier: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('wisdom-modifier', {
      name: 'Wisdom Modifier',
      path: ObjectPaths.from('wisdomModifier'),
    }),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Wisdom.variable, -10]), 0.5]), 0, RoundingMode.Floor),
  })

  export const IntelligenceModifier: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('intelligence-modifier', {
      name: 'Intelligence Modifier',
      path: ObjectPaths.from('intelligenceModifier'),
    }),
    baseValue: NumericExpressions.round(
      NumericExpressions.multiply([NumericExpressions.sum([Intelligence.variable, -10]), 0.5]),
      0,
      RoundingMode.Floor
    ),
  })

  export const CharismaModifier: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('charisma-modifier', {
      name: 'Charisma Modifier',
      path: ObjectPaths.from('charismaModifier'),
    }),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Charisma.variable, -10]), 0.5]), 0, RoundingMode.Floor),
  })

  export const ProficiencyBonus: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: Characteristics.defineTemplate('proficiency-bonus', {
      name: 'Proficiency Bonus',
      path: ObjectPaths.from('proficiencyBonus'),
    }),
    baseValue: NumericExpressions.sum([
      2,
      NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([CharacterValues.Level, -1]), 0.25]), 0, RoundingMode.Floor),
    ]),
  })

  export const HitPoints: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.HitPoints,
    baseValue: NumericExpressions.multiply([CharacterValues.Level, ConstitutionModifier.variable]),
  })

  export const ArmorClass: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.ArmorClass,
    baseValue: NumericExpressions.sum([10, DexterityModifier.variable]),
  })

  export const Initiative: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.Initiative,
    baseValue: DexterityModifier.variable,
  })

  export const MovementSpeed: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: CharacteristicTemplates.MovementSpeed,
    baseValue: 30,
  })

  export const Acrobatics: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/acrobatics', { name: 'Acrobatics', path: ObjectPaths.from('acrobatics') }),
    baseValue: DexterityModifier.variable,
  })

  export const AnimalHandling: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/animal-handling', {
      name: 'Animal Handling',
      path: ObjectPaths.from('animalHandling'),
    }),
    baseValue: WisdomModifier.variable,
  })

  export const Arcana: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/arcana', { name: 'Arcana', path: ObjectPaths.from('arcana') }),
    baseValue: IntelligenceModifier.variable,
  })

  export const Athletics: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/athletics', { name: 'Athletics', path: ObjectPaths.from('athletics') }),
    baseValue: StrengthModifier.variable,
  })

  export const Deception: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/deception', { name: 'Deception', path: ObjectPaths.from('deception') }),
    baseValue: CharismaModifier.variable,
  })

  export const History: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/history', { name: 'History', path: ObjectPaths.from('history') }),
    baseValue: IntelligenceModifier.variable,
  })

  export const Insight: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/insight', { name: 'Insight', path: ObjectPaths.from('insight') }),
    baseValue: WisdomModifier.variable,
  })

  export const Intimidation: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/intimidation', { name: 'Intimidation', path: ObjectPaths.from('intimidation') }),
    baseValue: CharismaModifier.variable,
  })

  export const Investigation: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/investigation', {
      name: 'Investigation',
      path: ObjectPaths.from('investigation'),
    }),
    baseValue: IntelligenceModifier.variable,
  })

  export const Medicine: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/medicine', { name: 'Medicine', path: ObjectPaths.from('medicine') }),
    baseValue: WisdomModifier.variable,
  })

  export const Nature: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/nature', { name: 'Nature', path: ObjectPaths.from('nature') }),
    baseValue: IntelligenceModifier.variable,
  })

  export const Perception: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/perception', { name: 'Perception', path: ObjectPaths.from('perception') }),
    baseValue: WisdomModifier.variable,
  })

  export const Performance: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/performance', { name: 'Performance', path: ObjectPaths.from('performance') }),
    baseValue: CharismaModifier.variable,
  })

  export const Persuasion: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/persuasion', { name: 'Persuasion', path: ObjectPaths.from('persuasion') }),
    baseValue: CharismaModifier.variable,
  })

  export const Religion: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/religion', { name: 'Religion', path: ObjectPaths.from('religion') }),
    baseValue: IntelligenceModifier.variable,
  })

  export const SleightOfHand: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/sleight-of-hand', {
      name: 'Sleight of Hand',
      path: ObjectPaths.from('sleightOfHand'),
    }),
    baseValue: DexterityModifier.variable,
  })

  export const Stealth: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/stealth', { name: 'Stealth', path: ObjectPaths.from('stealth') }),
    baseValue: DexterityModifier.variable,
  })

  export const Survival: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/survival', { name: 'Survival', path: ObjectPaths.from('survival') }),
    baseValue: WisdomModifier.variable,
  })

  export const StrengthSave: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/strength', {
      name: 'Strength Save',
      path: ObjectPaths.from('strengthSave'),
    }),
    baseValue: StrengthModifier.variable,
  })

  export const DexteritySave: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/dexterity', {
      name: 'Dexterity Save',
      path: ObjectPaths.from('dexteritySave'),
    }),
    baseValue: DexterityModifier.variable,
  })

  export const ConstitutionSave: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/constitution', {
      name: 'Constitution Save',
      path: ObjectPaths.from('constitutionSave'),
    }),
    baseValue: ConstitutionModifier.variable,
  })

  export const IntelligenceSave: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/intelligence', {
      name: 'Intelligence Save',
      path: ObjectPaths.from('intelligenceSave'),
    }),
    baseValue: IntelligenceModifier.variable,
  })

  export const WisdomSave: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/wisdom', { name: 'Wisdom Save', path: ObjectPaths.from('wisdomSave') }),
    baseValue: WisdomModifier.variable,
  })

  export const CharismaSave: Characteristic = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/charisma', {
      name: 'Charisma Save',
      path: ObjectPaths.from('charismaSave'),
    }),
    baseValue: CharismaModifier.variable,
  })
}
