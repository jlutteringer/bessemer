import { Characteristics, CharacterValues } from '@simulacrum/ruleset'
import { Characteristic, CharacteristicTemplate } from '@simulacrum/ruleset/characteristic'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { RoundingMode } from '@bessemer/cornerstone/math'
import { ObjectPaths } from '@bessemer/cornerstone'

export namespace CharacteristicTemplates {
  export const HitPoints: CharacteristicTemplate<number> = Characteristics.defineTemplate('hit-points', {
    name: 'Hit Points',
    description: '',
    path: ObjectPaths.from('hitPoints'),
  })
  export const ArmorClass: CharacteristicTemplate<number> = Characteristics.defineTemplate('armor-class', {
    name: 'Armor Class',
    description: '',
    path: ObjectPaths.from('armorClass'),
  })
  export const Initiative: CharacteristicTemplate<number> = Characteristics.defineTemplate('initiative', {
    name: 'Initiative',
    description: '',
    path: ObjectPaths.from('initiative'),
  })
  export const MovementSpeed: CharacteristicTemplate<number> = Characteristics.defineTemplate('movement-speed', {
    name: 'Movement Speed',
    description: '',
    path: ObjectPaths.from('movementSpeed'),
  })
}

export namespace CharacteristicGroups {
  export const Abilities = Characteristics.defineGroup('abilities', { name: 'Abilities', description: '' })
  export const SavingThrows = Characteristics.defineGroup('saving-throws', { name: 'Saving Throws', description: '' })
  export const Combat = Characteristics.defineGroup('combat', { name: 'Combat', description: '' })
  export const Skills = Characteristics.defineGroup('skills', { name: 'Skills', description: '' })
}

export namespace PlayerCharacteristics {
  export const Strength: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('strength', { name: 'Strength', description: '', path: ObjectPaths.from('strength') }),
    initialValue: true,
  })

  export const Dexterity: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('dexterity', { name: 'Dexterity', description: '', path: ObjectPaths.from('dexterity') }),
    initialValue: true,
  })

  export const Constitution: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('constitution', { name: 'Constitution', description: '', path: ObjectPaths.from('constitution') }),
    initialValue: true,
  })

  export const Wisdom: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('wisdom', { name: 'Wisdom', description: '', path: ObjectPaths.from('wisdom') }),
    initialValue: true,
  })

  export const Intelligence: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('intelligence', { name: 'Intelligence', description: '', path: ObjectPaths.from('intelligence') }),
    initialValue: true,
  })

  export const Charisma: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('charisma', { name: 'Charisma', description: '', path: ObjectPaths.from('charisma') }),
    initialValue: true,
  })

  export const StrengthModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('strength-modifier', {
      name: 'Strength Modifier',
      description: '',
      path: ObjectPaths.from('strengthModifier'),
    }),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Strength.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const DexterityModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('dexterity-modifier', {
      name: 'Dexterity Modifier',
      description: '',
      path: ObjectPaths.from('dexterityModifier'),
    }),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Dexterity.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const ConstitutionModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('constitution-modifier', {
      name: 'Constitution Modifier',
      description: '',
      path: ObjectPaths.from('constitutionModifier'),
    }),
    baseValue: NumericExpressions.round(
      NumericExpressions.multiply([NumericExpressions.sum([Constitution.variable, -10]), 0.5]),
      0,
      RoundingMode.Down
    ),
  })

  export const WisdomModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('wisdom-modifier', {
      name: 'Wisdom Modifier',
      description: '',
      path: ObjectPaths.from('wisdomModifier'),
    }),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Wisdom.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const IntelligenceModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('intelligence-modifier', {
      name: 'Intelligence Modifier',
      description: '',
      path: ObjectPaths.from('intelligenceModifier'),
    }),
    baseValue: NumericExpressions.round(
      NumericExpressions.multiply([NumericExpressions.sum([Intelligence.variable, -10]), 0.5]),
      0,
      RoundingMode.Down
    ),
  })

  export const CharismaModifier: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Abilities,
    template: Characteristics.defineTemplate('charisma-modifier', {
      name: 'Charisma Modifier',
      description: '',
      path: ObjectPaths.from('charismaModifier'),
    }),
    baseValue: NumericExpressions.round(NumericExpressions.multiply([NumericExpressions.sum([Charisma.variable, -10]), 0.5]), 0, RoundingMode.Down),
  })

  export const ProficiencyBonus: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Combat,
    template: Characteristics.defineTemplate('proficiency-bonus', {
      name: 'Proficiency Bonus',
      description: '',
      path: ObjectPaths.from('proficiencyBonus'),
    }),
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
    template: Characteristics.defineTemplate('skill/acrobatics', { name: 'Acrobatics', description: '', path: ObjectPaths.from('acrobatics') }),
    baseValue: DexterityModifier.variable,
  })

  export const AnimalHandling: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/animal-handling', {
      name: 'Animal Handling',
      description: '',
      path: ObjectPaths.from('animalHandling'),
    }),
    baseValue: WisdomModifier.variable,
  })

  export const Arcana: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/arcana', { name: 'Arcana', description: '', path: ObjectPaths.from('arcana') }),
    baseValue: IntelligenceModifier.variable,
  })

  export const Athletics: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/athletics', { name: 'Athletics', description: '', path: ObjectPaths.from('athletics') }),
    baseValue: StrengthModifier.variable,
  })

  export const Deception: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/deception', { name: 'Deception', description: '', path: ObjectPaths.from('deception') }),
    baseValue: CharismaModifier.variable,
  })

  export const History: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/history', { name: 'History', description: '', path: ObjectPaths.from('history') }),
    baseValue: IntelligenceModifier.variable,
  })

  export const Insight: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/insight', { name: 'Insight', description: '', path: ObjectPaths.from('insight') }),
    baseValue: WisdomModifier.variable,
  })

  export const Intimidation: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/intimidation', { name: 'Intimidation', description: '', path: ObjectPaths.from('intimidation') }),
    baseValue: CharismaModifier.variable,
  })

  export const Investigation: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/investigation', {
      name: 'Investigation',
      description: '',
      path: ObjectPaths.from('investigation'),
    }),
    baseValue: IntelligenceModifier.variable,
  })

  export const Medicine: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/medicine', { name: 'Medicine', description: '', path: ObjectPaths.from('medicine') }),
    baseValue: WisdomModifier.variable,
  })

  export const Nature: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/nature', { name: 'Nature', description: '', path: ObjectPaths.from('nature') }),
    baseValue: IntelligenceModifier.variable,
  })

  export const Perception: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/perception', { name: 'Perception', description: '', path: ObjectPaths.from('perception') }),
    baseValue: WisdomModifier.variable,
  })

  export const Performance: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/performance', { name: 'Performance', description: '', path: ObjectPaths.from('performance') }),
    baseValue: CharismaModifier.variable,
  })

  export const Persuasion: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/persuasion', { name: 'Persuasion', description: '', path: ObjectPaths.from('persuasion') }),
    baseValue: CharismaModifier.variable,
  })

  export const Religion: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/religion', { name: 'Religion', description: '', path: ObjectPaths.from('religion') }),
    baseValue: IntelligenceModifier.variable,
  })

  export const SleightOfHand: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/sleight-of-hand', {
      name: 'Sleight of Hand',
      description: '',
      path: ObjectPaths.from('sleightOfHand'),
    }),
    baseValue: DexterityModifier.variable,
  })

  export const Stealth: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/stealth', { name: 'Stealth', description: '', path: ObjectPaths.from('stealth') }),
    baseValue: DexterityModifier.variable,
  })

  export const Survival: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.Skills,
    template: Characteristics.defineTemplate('skill/survival', { name: 'Survival', description: '', path: ObjectPaths.from('survival') }),
    baseValue: WisdomModifier.variable,
  })

  export const StrengthSave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/strength', {
      name: 'Strength Save',
      description: '',
      path: ObjectPaths.from('strengthSave'),
    }),
    baseValue: StrengthModifier.variable,
  })

  export const DexteritySave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/dexterity', {
      name: 'Dexterity Save',
      description: '',
      path: ObjectPaths.from('dexteritySave'),
    }),
    baseValue: DexterityModifier.variable,
  })

  export const ConstitutionSave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/constitution', {
      name: 'Constitution Save',
      description: '',
      path: ObjectPaths.from('constitutionSave'),
    }),
    baseValue: ConstitutionModifier.variable,
  })

  export const IntelligenceSave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/intelligence', {
      name: 'Intelligence Save',
      description: '',
      path: ObjectPaths.from('intelligenceSave'),
    }),
    baseValue: IntelligenceModifier.variable,
  })

  export const WisdomSave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/wisdom', { name: 'Wisdom Save', description: '', path: ObjectPaths.from('wisdomSave') }),
    baseValue: WisdomModifier.variable,
  })

  export const CharismaSave: Characteristic<number> = Characteristics.defineCharacteristic({
    group: CharacteristicGroups.SavingThrows,
    template: Characteristics.defineTemplate('saving-throw/charisma', {
      name: 'Charisma Save',
      description: '',
      path: ObjectPaths.from('charismaSave'),
    }),
    baseValue: CharismaModifier.variable,
  })
}
