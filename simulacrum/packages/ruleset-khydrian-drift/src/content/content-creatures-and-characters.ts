import { Content } from '@simulacrum/ruleset'
import { SelectClassOption } from '@simulacrum/ruleset-khydrian-drift/character-option'
import {
  FortitudeDefense,
  ArmorClass,
  InitiativeRating,
  MovementSpeed,
  ProficiencyBonus,
  ReflexDefense,
  SoakRating,
  StaminaPool,
  VitalityPool,
  WillDefense,
  BrawnAttackRating,
  AgilityAttackRating,
  WillpowerAttackRating,
  IntelligenceAttackRating,
  Brawn,
  Agility,
  Willpower,
  Intelligence,
  Presence,
} from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const CreaturesAndCharacters = Content.defineSection('creatures-and-characters', {
  content: {
    name: 'Creatures and Characters',
    description: `This section details the core statistics, resources, and attributes for both creatures and player characters in Khydrian Drift, providing the essential framework for interaction and combat within the game world.

The distinction lies in their role: creatures are primarily non-player entities controlled by the GM, characterized by fixed statistics. In contrast, player characters are highly customizable, player-driven entities defined by their unique combination of [Class](character-option:select-class-option), [Race](content:characters/race), and [Attributes](content:characters/attributes).`,
  },
})

export const AnatomyOfACreature = Content.defineSection('creatures', {
  parent: CreaturesAndCharacters,
  content: {
    name: 'Anatomy of a Creature',
    description: `This section details the fundamental attributes and resources, such as [vitality](characteristic:vitality-pool), [defense](content:creatures/defense-rating), and [movement speed](characteristic:movement-speed), that collectively define a creature's core capabilities in the game world.`,
  },
})

export const CreatureVitalityPool = Content.linkEntity(AnatomyOfACreature, VitalityPool)

export const CreatureVitalityPoints = Content.defineSection('creatures/vitality-points', {
  parent: CreatureVitalityPool,
  content: {
    name: 'Vitality Points',
    description: `A creature's current vitality points can be any number from the creature's [vitality pool cap](characteristic:vitality-pool) down to 0. This number changes frequently as a creature [takes damage](content:combat/taking-damage) or [receives healing](content:combat/healing).

Whenever a character’s vitality points reaches zero, it is [incapacitated](content:combat/incapacitated) and dying. See [dropping to 0 vitality points](content:combat/dropping-to-0-vitality-points) for details on how this works. Typically, whenever a creature’s vitality points reaches zero, it does not go through the dying phase and is simply considered dead.`,
  },
})

export const CreatureStaminaPool = Content.linkEntity(AnatomyOfACreature, StaminaPool)

export const CreatureStaminaPoints = Content.defineSection('creatures/stamina-points', {
  parent: CreatureStaminaPool,
  content: {
    name: 'Stamina Points',
    description: `A creature's current stamina points can be any number from the creature's [stamina pool cap](characteristic:stamina-pool) down to 0. This number changes frequently as a creature uses actions.

If a creature does not have enough stamina points to cover an action’s cost then it cannot perform the action.`,
  },
})

export const CreatureSoakRating = Content.linkEntity(AnatomyOfACreature, SoakRating)

export const CreatureSoakPoints = Content.defineSection('creatures/soak-points', {
  parent: CreatureSoakRating,
  content: {
    name: 'Soak Points',
    description: `A creature's current soak points can be any number from the creature's [soak rating cap](characteristic:soak-rating) down to 0. This number changes frequently as a creature [takes damage](content:combat/taking-damage).`,
  },
})

export const CreatureDefenseRating = Content.defineSection('creatures/defense-rating', {
  parent: AnatomyOfACreature,
  content: {
    name: 'Defense Rating',
    description: `Defense rating represents how hard it is to hit a creature with an attack. The more defense rating a creature has, the harder it is to hit. There are four types of defenses: [Armor Class](characteristic:armor-class), [Fortitude](characteristic:fortitude), [Reflex](characteristic:reflex) and [Will](characteristic:will). Different attacks will target types of defenses.`,
  },
})

export const CreatureArmorClass = Content.linkEntity(CreatureDefenseRating, ArmorClass)

export const CreatureFortitudeDefense = Content.linkEntity(CreatureDefenseRating, FortitudeDefense)

export const CreatureReflexDefense = Content.linkEntity(CreatureDefenseRating, ReflexDefense)

export const CreatureWillDefense = Content.linkEntity(CreatureDefenseRating, WillDefense)

export const CreatureMovementSpeed = Content.linkEntity(AnatomyOfACreature, MovementSpeed)

export const CreatureInitiativeRating = Content.linkEntity(AnatomyOfACreature, InitiativeRating)

export const CreatureSize = Content.defineSection('creatures/size', {
  parent: AnatomyOfACreature,
  content: {
    name: 'Size',
    description: `Each creature takes up a different amount of space on the combat grid, typically measured in 5-foot squares. Objects sometimes use the same size categories.

The creature sizes are [Tiny](content:creatures/tiny), [Small](content:creatures/small), [Medium](content:creatures/medium), [Large](content:creatures/large), [Huge](content:creatures/huge) and [Gargantuan](content:creatures/gargantuan).`,
  },
})

export const SizeTiny = Content.defineSection('creatures/tiny', {
  parent: CreatureSize,
  content: {
    name: 'Tiny',
    description: `A Tiny creature occupies a 1-square area (1 x 1).`,
  },
})

export const SizeSmall = Content.defineSection('creatures/small', {
  parent: CreatureSize,
  content: {
    name: 'Small',
    description: `A Small creature occupies a 1-square area (1 x 1).`,
  },
})

export const SizeMedium = Content.defineSection('creatures/medium', {
  parent: CreatureSize,
  content: {
    name: 'Medium',
    description: `A Medium creature occupies a 1-square area (1 x 1).`,
  },
})

export const SizeLarge = Content.defineSection('creatures/large', {
  parent: CreatureSize,
  content: {
    name: 'Large',
    description: `A Large creature occupies a 4-square area (2 x 2).`,
  },
})

export const SizeHuge = Content.defineSection('creatures/huge', {
  parent: CreatureSize,
  content: {
    name: 'Huge',
    description: `A Huge creature occupies a 9-square area (3 x 3).`,
  },
})

export const SizeGargantuan = Content.defineSection('creatures/gargantuan', {
  parent: CreatureSize,
  content: {
    name: 'Gargantuan',
    description: `A Gargantuan creature occupies a 16-square area (4 x 4).`,
  },
})

export const CreatureSenses = Content.defineSection('creatures/senses', {
  parent: AnatomyOfACreature,
  content: {
    name: 'Senses',
    description: `Senses determine how a creature perceives its environment. Most creatures rely on their vision, but some possess specialized senses that allow them to detect foes, objects, and hazards in ways that are impossible for others.

The senses are [Normal Vision](content:creatures/normal-vision), [Darkvision](content:creatures/darkvision), [Blindsight](content:creatures/blindsight), [Omnisight](content:creatures/omnisight) and [Tremorsight](content:creatures/tremorsight).`,
  },
})

export const NormalVision = Content.defineSection('creatures/normal-vision', {
  parent: CreatureSenses,
  content: {
    name: 'Normal Vision',
    description: `This is the default sense for most [humanoids](content:creatures/humanoid). A creature with normal vision can see clearly in bright light, but dim light imposes disadvantage on [Vigilance](characteristic:skill/vigilance) checks that rely on sight. They cannot see in total darkness.`,
  },
})

export const Darkvision = Content.defineSection('creatures/darkvision', {
  parent: CreatureSenses,
  content: {
    name: 'Darkvision',
    description: `A creature with darkvision can see in dim light within a specified range as if it were bright light, and in darkness as if it were dim light. Darkvision is usually presented in shades of gray.`,
  },
})

export const Blindsight = Content.defineSection('creatures/blindsight', {
  parent: CreatureSenses,
  content: {
    name: 'Blindsight',
    description: `A creature with blindsight perceives its surroundings without relying on sight, typically by using heightened senses like sound, echo location, or acute scent. Within a specified range, the creature can perceive everything, including [invisible](content:combat/invisible) creatures, regardless of lighting conditions.`,
  },
})

export const Omnisight = Content.defineSection('creatures/omnisight', {
  parent: CreatureSenses,
  content: {
    name: 'Omnisight',
    description: `Omnisight is a superior sense that allows a creature to see things as they truly are within a specified range. A creature with omnisight can see in any darkness, see [invisible](content:combat/invisible) creatures and objects, automatically detect holograms and other visual illusions, and perceive a creature's true form if it is disguised.`,
  },
})

export const Tremorsight = Content.defineSection('creatures/tremorsight', {
  parent: CreatureSenses,
  content: {
    name: 'Tremorsight',
    description: `A creature with tremorsight can detect and pinpoint the origin of vibrations in the ground or other solid surfaces. Within a specified range, the creature can perceive the location of anything in contact with the ground or that is creating vibrations, even if it is [invisible](content:combat/invisible) or behind [total cover](content:combat/cover).`,
  },
})

export const CreatureType = Content.defineSection('creatures/creature-type', {
  parent: AnatomyOfACreature,
  content: {
    name: 'Creature Type',
    description: `Every creature is categorized into certain creature archetypes called creature type. Some actions and effects only apply to creatures of a certain type or have additional effects based on that creature’s type.

The creature types are [Humanoid](content:creatures/humanoid), [Mechanical](content:creatures/mechanical), [Aberration](content:creatures/aberration) and [Beast](content:creatures/beast).`,
  },
})

export const HumanoidType = Content.defineSection('creatures/humanoid', {
  parent: CreatureType,
  content: {
    name: 'Humanoid',
    description: `Humanoid is the most common creature type, including all standard player races. Humanoids are generally susceptible to normal forms of combat and social interaction.`,
  },
})

export const MechanicalType = Content.defineSection('creatures/mechanical', {
  parent: CreatureType,
  content: {
    name: 'Mechanical',
    description: `Mechanical creatures are constructs, robots, and creatures heavily augmented by technology. They are often immune to effects that target organic biology, but may be vulnerable to tech-based attacks.`,
  },
})

export const AberrationType = Content.defineSection('creatures/aberration', {
  parent: CreatureType,
  content: {
    name: 'Aberration',
    description: `Aberrations are strange, often alien creatures whose biology and psychology defy natural laws. They are typically associated with Khydrian (psionic/magic) abilities and mental effects.`,
  },
})

export const BeastType = Content.defineSection('creatures/beast', {
  parent: CreatureType,
  content: {
    name: 'Beast',
    description: `Beasts are natural or engineered animals, from guard dogs and feral wildlife to bioengineered predators. They act on instinct rather than reason, and are generally unaffected by social interaction.`,
  },
})

export const CreatureActions = Content.defineSection('creatures/actions', {
  parent: AnatomyOfACreature,
  content: {
    name: 'Actions',
    description: `Actions are the things a creature can do on its turn, or in response to something on another creature’s turn. Each action has a type that determines when it can be taken: a [major action](action-type:major-action), a [minor action](action-type:minor-action), a [free action](action-type:free-action) or a [reaction](action-type:reaction). See [Turn](content:combat/turn) for how many of each a creature can take.

Some actions are basic and free to use, such as a [Basic Attack](content:combat/basic-attack) or [Dash](content:combat/dash). Others come from a creature’s abilities, and may cost [stamina points](content:creatures/stamina-points) or have other prerequisites.`,
  },
})

export const CreatureEffects = Content.defineSection('creatures/effects', {
  parent: AnatomyOfACreature,
  content: {
    name: 'Effects',
    description: `Effects are passive abilities that do not require an action to activate. Some are always in effect, while others are situational and trigger only when specific criteria are met.`,
  },
})

export const AnatomyOfACharacter = Content.defineSection('characters', {
  parent: CreaturesAndCharacters,
  content: {
    name: 'Anatomy of a Character',
    description: `This section details the unique, customizable attributes, resources, and progression that define a player-driven character, establishing the core mechanics for their development and growth within the game world.`,
  },
})

export const CharacterClass = Content.linkEntity(AnatomyOfACharacter, SelectClassOption)

export const CharacterRace = Content.defineSection('characters/race', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Race',
    description: `A visit to one of the great cities in the worlds of Khydrian Drift overwhelms the senses. Voices chatter in countless different languages, the smells of cooking from dozens of different cuisines mingle with the odors of crowded streets, and buildings in myriad architectural styles display the diverse origins of their inhabitants.

The people themselves—of varying sizes, shapes, and colors, dressed in a dazzling spectrum of styles and hues—represent many different races, mingling among a variety of human ethnicities.`,
  },
})

export const CharacterAttributes = Content.defineSection('characters/attributes', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Attributes',
    description: `Much of what your character does in the game depends on five core attributes: [Brawn](characteristic:brawn), [Agility](characteristic:agility), [Willpower](characteristic:willpower), [Intelligence](characteristic:intelligence), and [Presence](characteristic:presence). Each attribute has a rating, which ranges from 0 to 6 and is a number you record on your character sheet.

These attributes and their use in the game are described in the Using Ability Scores section. The Ability Score Summary table provides a quick reference for what qualities are measured by each attribute, what races increase which attributes, and what classes consider each attribute particularly important.`,
  },
})

export const CharacterBrawn = Content.linkEntity(CharacterAttributes, Brawn)

export const CharacterAgility = Content.linkEntity(CharacterAttributes, Agility)

export const CharacterWillpower = Content.linkEntity(CharacterAttributes, Willpower)

export const CharacterIntelligence = Content.linkEntity(CharacterAttributes, Intelligence)

export const CharacterPresence = Content.linkEntity(CharacterAttributes, Presence)

export const CharacterVitalityPool = Content.defineSection('characters/vitality-pool', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Starting Vitality Pool',
    description: `At first level, characters start with a base [vitality pool](characteristic:vitality-pool) value derived from their [class](character-option:select-class-option). As a character gains levels, they automatically gain additional points added to their vitality pool. The amount gained is based on their class, which is outlined in the individual class sections later in this guide. There are also some effects which modify the vitality pool, changing it from the base values described previously.`,
  },
})

export const CharacterStaminaPool = Content.defineSection('characters/stamina-pool', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Stamina Pool',
    description: `A character's [stamina pool](characteristic:stamina-pool) is 24 plus four times their [presence rating](characteristic:presence). There are also some effects which modify the stamina pool, changing it from the base values described previously.`,
  },
})

export const CharacterProficiencyBonus = Content.linkEntity(AnatomyOfACharacter, ProficiencyBonus)

export const CharacterSoakRating = Content.defineSection('characters/soak-rating', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Soak Rating',
    description: `A character’s base [soak rating](characteristic:soak-rating) is equivalent to its [brawn rating](characteristic:brawn). There are also some effects which modify soak rating, changing it from the base values described previously.`,
  },
})

export const CharacterDefenseRating = Content.defineSection('characters/defense-rating', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Defense Rating',
    description: `Player defense rating is calculated differently according to the type and is based off of the attributes of the character. There are also some effects which modify defense rating, changing it from the base calculations described below.

- [Armor Class](characteristic:armor-class) is typically calculated by 8 + Proficiency + Agility Rating + Armor Rating, but some armor types are an exception to this rule
- [Fortitude](characteristic:fortitude) is calculated by 7 + Proficiency + Brawn Rating + half of Proficiency (rounded up)
- [Reflex](characteristic:reflex) is calculated by 7 + Proficiency + Agility Rating + half of Proficiency (rounded up)
- [Will](characteristic:will) is calculated by 7 + Proficiency + Willpower Rating + half of Proficiency (rounded up)`,
  },
})

export const CharacterAttackRating = Content.defineSection('characters/attack-rating', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Attack Rating',
    description: `Attack rating represents how easily a character can hit an enemy with an attack. The more attack rating a character has, the more likely they are to hit enemies. There are four types of attack rating: [Brawn](characteristic:brawn-attack-rating), [Agility](characteristic:agility-attack-rating), [Willpower](characteristic:willpower-attack-rating), and [Intelligence](characteristic:intelligence-attack-rating). Different types of abilities will use the different types of attack rating outlined below.`,
  },
})

export const CharacterBrawnAttackRating = Content.linkEntity(CharacterAttackRating, BrawnAttackRating)

export const CharacterAgilityAttackRating = Content.linkEntity(CharacterAttackRating, AgilityAttackRating)

export const CharacterWillpowerAttackRating = Content.linkEntity(CharacterAttackRating, WillpowerAttackRating)

export const CharacterIntelligenceAttackRating = Content.linkEntity(CharacterAttackRating, IntelligenceAttackRating)

export const CharacterPotency = Content.defineSection('characters/potency', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Potency',
    description: `Potency represents how much damage a character can do with certain kinds of attacks.`,
  },
})

export const CharacterMovementSpeed = Content.defineSection('characters/movement-speed', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Movement Speed',
    description: `A player character’s [movement speed](characteristic:movement-speed) will depend on their chosen [race](content:characters/race), but it is typically four squares.`,
  },
})

export const CharacterCreatureType = Content.defineSection('characters/creature-type', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Creature Type',
    description: `A player character’s [creature type](content:creatures/creature-type) will depend on their chosen [race](content:characters/race), but it is typically [humanoid](content:creatures/humanoid).`,
  },
})

export const CharacterTraits = Content.defineSection('characters/traits', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Traits',
    description: `Beyond [class selection](character-option:select-class-option), traits are the primary mechanism by which a player can customize their character. As a character levels, they gain trait points which can be used to unlock new traits in Khydrian Drift’s trait trees. These traits can either be selected from the character’s class trait tree or from one of the many archetype trait trees. Some traits may have prerequisites that must be met before they can be selected.

Typically, selecting a Trait will unlock Abilities that you can add to your Loadout or grant you passive [Effects](content:creatures/effects). Occasionally, Traits will also grant you [Actions](content:creatures/actions). Actions granted this way are always available and do not depend on which Abilities are in your Loadout.`,
  },
})

export const CharacterAbilities = Content.defineSection('characters/abilities', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Abilities',
  },
})

export const CharacterLoadout = Content.defineSection('characters/loadout', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Loadout',
  },
})

export const StandardProgression = Content.defineSection('characters/standard-progression', {
  parent: AnatomyOfACharacter,
  content: {
    name: 'Standard Progression',
    description: `All characters gain bonuses according to the following standard progression table as they level. In addition to these bonuses, characters may gain additional bonuses depending on their class, skills and abilities. This table shows the cumulative bonus per level, rather than the incremental change. For example, a level 3 character has 20 base hit points.

| Level | Prof | Hit Points | Endurance Points | Attribute Points | Skill Points | Ability Points | Feats |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | +2 | 15 | 24 + (PRES * 4) |  |  | 0 |  |
| 2 | +2 | 20 | 24 + (PRES * 4) |  |  | 1 |  |
| 3 | +2 | 25 | 24 + (PRES * 4) |  |  | 2 |  |
| 4 | +2 | 30 | 24 + (PRES * 4) |  |  | 3 |  |
| 5 | +2 | 35 | 24 + (PRES * 4) |  |  | 3 |  |
| 6 |  | 40 | 24 + (PRES * 4) |  |  | 5 |  |
| 7 |  |  | 24 + (PRES * 4) |  |  | 6 |  |
| 8 |  |  | 24 + (PRES * 4) |  |  | 7 |  |
| 9 |  |  | 24 + (PRES * 4) |  |  | 8 |  |
| 10 |  |  | 24 + (PRES * 4) |  |  | 9 |  |
| 11 |  |  | 24 + (PRES * 4) |  |  | 10 |  |
| 12 |  |  | 24 + (PRES * 4) |  |  | 11 |  |
| 13 |  |  | 24 + (PRES * 4) |  |  | 12 |  |
| 14 |  |  | 24 + (PRES * 4) |  |  | 13 |  |
| 15 |  |  | 24 + (PRES * 4) |  |  | 14 |  |
| 16 |  |  | 24 + (PRES * 4) |  |  | 15 |  |
| 17 |  |  | 24 + (PRES * 4) |  |  | 16 |  |
| 18 |  |  | 24 + (PRES * 4) |  |  | 17 |  |
| 19 |  |  | 24 + (PRES * 4) |  |  | 18 |  |
| 20 |  |  | 24 + (PRES * 4) |  |  | 19 |  |`,
  },
})

export const CreaturesAndCharactersContent = [
  CreaturesAndCharacters,
  AnatomyOfACreature,
  CreatureVitalityPool,
  CreatureVitalityPoints,
  CreatureStaminaPool,
  CreatureStaminaPoints,
  CreatureSoakRating,
  CreatureSoakPoints,
  CreatureMovementSpeed,
  CreatureInitiativeRating,
  CreatureDefenseRating,
  CreatureArmorClass,
  CreatureFortitudeDefense,
  CreatureReflexDefense,
  CreatureWillDefense,
  CreatureSize,
  SizeTiny,
  SizeSmall,
  SizeMedium,
  SizeLarge,
  SizeHuge,
  SizeGargantuan,
  CreatureSenses,
  NormalVision,
  Darkvision,
  Blindsight,
  Omnisight,
  Tremorsight,
  CreatureType,
  HumanoidType,
  MechanicalType,
  AberrationType,
  BeastType,
  CreatureActions,
  CreatureEffects,
  AnatomyOfACharacter,
  CharacterClass,
  CharacterRace,
  CharacterAttributes,
  CharacterBrawn,
  CharacterAgility,
  CharacterWillpower,
  CharacterIntelligence,
  CharacterPresence,
  CharacterVitalityPool,
  CharacterStaminaPool,
  CharacterProficiencyBonus,
  CharacterSoakRating,
  CharacterMovementSpeed,
  CharacterDefenseRating,
  CharacterAttackRating,
  CharacterBrawnAttackRating,
  CharacterAgilityAttackRating,
  CharacterWillpowerAttackRating,
  CharacterIntelligenceAttackRating,
  CharacterPotency,
  CharacterCreatureType,
  CharacterTraits,
  CharacterAbilities,
  CharacterLoadout,
  StandardProgression,
]
