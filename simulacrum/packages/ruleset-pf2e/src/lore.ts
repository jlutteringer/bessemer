import { Attributes, Characteristics, Effects, Traits } from '@simulacrum/ruleset'
import { Characteristic } from '@simulacrum/ruleset/characteristic'
import { ObjectPaths, Patches } from '@bessemer/cornerstone'
import { ExpertSkill, Lore, TrainedSkill } from '@simulacrum/ruleset-pf2e/tag'
import { Intelligence } from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Expert, Trained } from '@simulacrum/ruleset-pf2e/proficiency'

export const LoreGroup = Characteristics.defineGroup('lore', { name: 'Lore' })

export const AcademiaLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/academia', {
    name: 'Academia Lore',
    description:
      "Academia Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('academiaLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedAcademiaLore = Traits.defineTrait('lore/academia/trained', {
  name: 'Trained in Academia Lore',
  description: 'You are trained in Academia Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(AcademiaLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertAcademiaLore = Traits.defineTrait('lore/academia/expert', {
  name: 'Expert in Academia Lore',
  description: 'You are an expert in Academia Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedAcademiaLore)],
  effects: [Effects.modifyCharacteristic(AcademiaLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const AlcoholLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/alcohol', {
    name: 'Alcohol Lore',
    description:
      "Alcohol Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('alcoholLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedAlcoholLore = Traits.defineTrait('lore/alcohol/trained', {
  name: 'Trained in Alcohol Lore',
  description: 'You are trained in Alcohol Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(AlcoholLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertAlcoholLore = Traits.defineTrait('lore/alcohol/expert', {
  name: 'Expert in Alcohol Lore',
  description: 'You are an expert in Alcohol Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedAlcoholLore)],
  effects: [Effects.modifyCharacteristic(AlcoholLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const ArtLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/art', {
    name: 'Art Lore',
    description:
      "Art Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('artLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedArtLore = Traits.defineTrait('lore/art/trained', {
  name: 'Trained in Art Lore',
  description: 'You are trained in Art Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(ArtLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertArtLore = Traits.defineTrait('lore/art/expert', {
  name: 'Expert in Art Lore',
  description: 'You are an expert in Art Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedArtLore)],
  effects: [Effects.modifyCharacteristic(ArtLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const CircusLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/circus', {
    name: 'Circus Lore',
    description:
      "Circus Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('circusLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedCircusLore = Traits.defineTrait('lore/circus/trained', {
  name: 'Trained in Circus Lore',
  description: 'You are trained in Circus Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(CircusLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertCircusLore = Traits.defineTrait('lore/circus/expert', {
  name: 'Expert in Circus Lore',
  description: 'You are an expert in Circus Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedCircusLore)],
  effects: [Effects.modifyCharacteristic(CircusLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const CookingLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/cooking', {
    name: 'Cooking Lore',
    description:
      "Cooking Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('cookingLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedCookingLore = Traits.defineTrait('lore/cooking/trained', {
  name: 'Trained in Cooking Lore',
  description: 'You are trained in Cooking Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(CookingLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertCookingLore = Traits.defineTrait('lore/cooking/expert', {
  name: 'Expert in Cooking Lore',
  description: 'You are an expert in Cooking Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedCookingLore)],
  effects: [Effects.modifyCharacteristic(CookingLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const EngineeringLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/engineering', {
    name: 'Engineering Lore',
    description:
      "Engineering Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('engineeringLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedEngineeringLore = Traits.defineTrait('lore/engineering/trained', {
  name: 'Trained in Engineering Lore',
  description: 'You are trained in Engineering Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(EngineeringLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertEngineeringLore = Traits.defineTrait('lore/engineering/expert', {
  name: 'Expert in Engineering Lore',
  description: 'You are an expert in Engineering Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedEngineeringLore)],
  effects: [Effects.modifyCharacteristic(EngineeringLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const FarmingLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/farming', {
    name: 'Farming Lore',
    description:
      "Farming Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('farmingLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedFarmingLore = Traits.defineTrait('lore/farming/trained', {
  name: 'Trained in Farming Lore',
  description: 'You are trained in Farming Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(FarmingLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertFarmingLore = Traits.defineTrait('lore/farming/expert', {
  name: 'Expert in Farming Lore',
  description: 'You are an expert in Farming Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedFarmingLore)],
  effects: [Effects.modifyCharacteristic(FarmingLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const FortuneTellingLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/fortune-telling', {
    name: 'Fortune-Telling Lore',
    description:
      "Fortune-Telling Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('fortuneTellingLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedFortuneTellingLore = Traits.defineTrait('lore/fortune-telling/trained', {
  name: 'Trained in Fortune-Telling Lore',
  description: 'You are trained in Fortune-Telling Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(FortuneTellingLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertFortuneTellingLore = Traits.defineTrait('lore/fortune-telling/expert', {
  name: 'Expert in Fortune-Telling Lore',
  description: 'You are an expert in Fortune-Telling Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedFortuneTellingLore)],
  effects: [Effects.modifyCharacteristic(FortuneTellingLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const GamesLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/games', {
    name: 'Games Lore',
    description:
      "Games Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('gamesLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedGamesLore = Traits.defineTrait('lore/games/trained', {
  name: 'Trained in Games Lore',
  description: 'You are trained in Games Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(GamesLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertGamesLore = Traits.defineTrait('lore/games/expert', {
  name: 'Expert in Games Lore',
  description: 'You are an expert in Games Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedGamesLore)],
  effects: [Effects.modifyCharacteristic(GamesLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const GenealogyLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/genealogy', {
    name: 'Genealogy Lore',
    description:
      "Genealogy Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('genealogyLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedGenealogyLore = Traits.defineTrait('lore/genealogy/trained', {
  name: 'Trained in Genealogy Lore',
  description: 'You are trained in Genealogy Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(GenealogyLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertGenealogyLore = Traits.defineTrait('lore/genealogy/expert', {
  name: 'Expert in Genealogy Lore',
  description: 'You are an expert in Genealogy Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedGenealogyLore)],
  effects: [Effects.modifyCharacteristic(GenealogyLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const GladiatorialLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/gladiatorial', {
    name: 'Gladiatorial Lore',
    description:
      "Gladiatorial Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('gladiatorialLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedGladiatorialLore = Traits.defineTrait('lore/gladiatorial/trained', {
  name: 'Trained in Gladiatorial Lore',
  description: 'You are trained in Gladiatorial Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(GladiatorialLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertGladiatorialLore = Traits.defineTrait('lore/gladiatorial/expert', {
  name: 'Expert in Gladiatorial Lore',
  description: 'You are an expert in Gladiatorial Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedGladiatorialLore)],
  effects: [Effects.modifyCharacteristic(GladiatorialLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const GuildLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/guild', {
    name: 'Guild Lore',
    description:
      "Guild Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('guildLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedGuildLore = Traits.defineTrait('lore/guild/trained', {
  name: 'Trained in Guild Lore',
  description: 'You are trained in Guild Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(GuildLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertGuildLore = Traits.defineTrait('lore/guild/expert', {
  name: 'Expert in Guild Lore',
  description: 'You are an expert in Guild Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedGuildLore)],
  effects: [Effects.modifyCharacteristic(GuildLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const HeraldryLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/heraldry', {
    name: 'Heraldry Lore',
    description:
      "Heraldry Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('heraldryLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedHeraldryLore = Traits.defineTrait('lore/heraldry/trained', {
  name: 'Trained in Heraldry Lore',
  description: 'You are trained in Heraldry Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(HeraldryLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertHeraldryLore = Traits.defineTrait('lore/heraldry/expert', {
  name: 'Expert in Heraldry Lore',
  description: 'You are an expert in Heraldry Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedHeraldryLore)],
  effects: [Effects.modifyCharacteristic(HeraldryLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const HerbalismLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/herbalism', {
    name: 'Herbalism Lore',
    description:
      "Herbalism Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('herbalismLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedHerbalismLore = Traits.defineTrait('lore/herbalism/trained', {
  name: 'Trained in Herbalism Lore',
  description: 'You are trained in Herbalism Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(HerbalismLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertHerbalismLore = Traits.defineTrait('lore/herbalism/expert', {
  name: 'Expert in Herbalism Lore',
  description: 'You are an expert in Herbalism Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedHerbalismLore)],
  effects: [Effects.modifyCharacteristic(HerbalismLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const LaborLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/labor', {
    name: 'Labor Lore',
    description:
      "Labor Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('laborLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedLaborLore = Traits.defineTrait('lore/labor/trained', {
  name: 'Trained in Labor Lore',
  description: 'You are trained in Labor Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(LaborLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertLaborLore = Traits.defineTrait('lore/labor/expert', {
  name: 'Expert in Labor Lore',
  description: 'You are an expert in Labor Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedLaborLore)],
  effects: [Effects.modifyCharacteristic(LaborLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const LegalLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/legal', {
    name: 'Legal Lore',
    description:
      "Legal Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('legalLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedLegalLore = Traits.defineTrait('lore/legal/trained', {
  name: 'Trained in Legal Lore',
  description: 'You are trained in Legal Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(LegalLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertLegalLore = Traits.defineTrait('lore/legal/expert', {
  name: 'Expert in Legal Lore',
  description: 'You are an expert in Legal Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedLegalLore)],
  effects: [Effects.modifyCharacteristic(LegalLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const MercantileLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/mercantile', {
    name: 'Mercantile Lore',
    description:
      "Mercantile Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('mercantileLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedMercantileLore = Traits.defineTrait('lore/mercantile/trained', {
  name: 'Trained in Mercantile Lore',
  description: 'You are trained in Mercantile Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(MercantileLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertMercantileLore = Traits.defineTrait('lore/mercantile/expert', {
  name: 'Expert in Mercantile Lore',
  description: 'You are an expert in Mercantile Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedMercantileLore)],
  effects: [Effects.modifyCharacteristic(MercantileLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const MiningLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/mining', {
    name: 'Mining Lore',
    description:
      "Mining Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('miningLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedMiningLore = Traits.defineTrait('lore/mining/trained', {
  name: 'Trained in Mining Lore',
  description: 'You are trained in Mining Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(MiningLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertMiningLore = Traits.defineTrait('lore/mining/expert', {
  name: 'Expert in Mining Lore',
  description: 'You are an expert in Mining Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedMiningLore)],
  effects: [Effects.modifyCharacteristic(MiningLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const SailingLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/sailing', {
    name: 'Sailing Lore',
    description:
      "Sailing Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('sailingLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedSailingLore = Traits.defineTrait('lore/sailing/trained', {
  name: 'Trained in Sailing Lore',
  description: 'You are trained in Sailing Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(SailingLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertSailingLore = Traits.defineTrait('lore/sailing/expert', {
  name: 'Expert in Sailing Lore',
  description: 'You are an expert in Sailing Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedSailingLore)],
  effects: [Effects.modifyCharacteristic(SailingLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const ScribingLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/scribing', {
    name: 'Scribing Lore',
    description:
      "Scribing Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('scribingLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedScribingLore = Traits.defineTrait('lore/scribing/trained', {
  name: 'Trained in Scribing Lore',
  description: 'You are trained in Scribing Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(ScribingLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertScribingLore = Traits.defineTrait('lore/scribing/expert', {
  name: 'Expert in Scribing Lore',
  description: 'You are an expert in Scribing Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedScribingLore)],
  effects: [Effects.modifyCharacteristic(ScribingLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TanningLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/tanning', {
    name: 'Tanning Lore',
    description:
      "Tanning Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('tanningLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedTanningLore = Traits.defineTrait('lore/tanning/trained', {
  name: 'Trained in Tanning Lore',
  description: 'You are trained in Tanning Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(TanningLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertTanningLore = Traits.defineTrait('lore/tanning/expert', {
  name: 'Expert in Tanning Lore',
  description: 'You are an expert in Tanning Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedTanningLore)],
  effects: [Effects.modifyCharacteristic(TanningLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TheaterLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/theater', {
    name: 'Theater Lore',
    description:
      "Theater Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('theaterLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedTheaterLore = Traits.defineTrait('lore/theater/trained', {
  name: 'Trained in Theater Lore',
  description: 'You are trained in Theater Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(TheaterLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertTheaterLore = Traits.defineTrait('lore/theater/expert', {
  name: 'Expert in Theater Lore',
  description: 'You are an expert in Theater Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedTheaterLore)],
  effects: [Effects.modifyCharacteristic(TheaterLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const UnderworldLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/underworld', {
    name: 'Underworld Lore',
    description:
      "Underworld Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('underworldLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedUnderworldLore = Traits.defineTrait('lore/underworld/trained', {
  name: 'Trained in Underworld Lore',
  description: 'You are trained in Underworld Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(UnderworldLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertUnderworldLore = Traits.defineTrait('lore/underworld/expert', {
  name: 'Expert in Underworld Lore',
  description: 'You are an expert in Underworld Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedUnderworldLore)],
  effects: [Effects.modifyCharacteristic(UnderworldLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const WarfareLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/warfare', {
    name: 'Warfare Lore',
    description:
      "Warfare Lore is a subcategory of the [Lore](content:skills/lore) skill.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('warfareLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedWarfareLore = Traits.defineTrait('lore/warfare/trained', {
  name: 'Trained in Warfare Lore',
  description: 'You are trained in Warfare Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(WarfareLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertWarfareLore = Traits.defineTrait('lore/warfare/expert', {
  name: 'Expert in Warfare Lore',
  description: 'You are an expert in Warfare Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedWarfareLore)],
  effects: [Effects.modifyCharacteristic(WarfareLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const TerrainLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/terrain', {
    name: 'Terrain Lore',
    description:
      "Terrain Lore is a subcategory of the [Lore](content:skills/lore) skill: a Lore skill about one terrain of your choice, such as Plains Lore or Swamp Lore.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('terrainLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedTerrainLore = Traits.defineTrait('lore/terrain/trained', {
  name: 'Trained in Terrain Lore',
  description:
    'You are trained in a Lore skill about one terrain of your choice, such as Plains Lore or Swamp Lore, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(TerrainLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertTerrainLore = Traits.defineTrait('lore/terrain/expert', {
  name: 'Expert in Terrain Lore',
  description:
    'You are an expert in a Lore skill about one terrain of your choice, such as Plains Lore or Swamp Lore, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedTerrainLore)],
  effects: [Effects.modifyCharacteristic(TerrainLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const DeityLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/deity', {
    name: 'Deity Lore',
    description:
      "Deity Lore is a subcategory of the [Lore](content:skills/lore) skill: a Lore skill about your deity or cult.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('deityLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedDeityLore = Traits.defineTrait('lore/deity/trained', {
  name: 'Trained in Deity Lore',
  description: 'You are trained in a Lore skill about your deity or cult, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(DeityLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertDeityLore = Traits.defineTrait('lore/deity/expert', {
  name: 'Expert in Deity Lore',
  description: 'You are an expert in a Lore skill about your deity or cult, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedDeityLore)],
  effects: [Effects.modifyCharacteristic(DeityLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const CityLore: Characteristic = Characteristics.defineCharacteristic({
  group: LoreGroup,
  template: Characteristics.defineTemplate('skill/lore/city', {
    name: 'City Lore',
    description:
      "City Lore is a subcategory of the [Lore](content:skills/lore) skill: a Lore skill about one city of your choice.\n\nYou have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.",
    path: ObjectPaths.from('cityLore'),
  }),
  baseValue: Intelligence.variable,
})

export const TrainedCityLore = Traits.defineTrait('lore/city/trained', {
  name: 'Trained in City Lore',
  description: 'You are trained in a Lore skill about one city of your choice, adding your level + 2 to its checks.',
  tags: [Lore, TrainedSkill],
  effects: [Effects.modifyCharacteristic(CityLore, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ExpertCityLore = Traits.defineTrait('lore/city/expert', {
  name: 'Expert in City Lore',
  description: 'You are an expert in a Lore skill about one city of your choice, adding your level + 4 to its checks.',
  tags: [Lore, ExpertSkill],
  prerequisites: [Traits.traitPrerequisite(TrainedCityLore)],
  effects: [Effects.modifyCharacteristic(CityLore, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const AllLoreEntities = [
  LoreGroup,
  AcademiaLore,
  TrainedAcademiaLore,
  ExpertAcademiaLore,
  AlcoholLore,
  TrainedAlcoholLore,
  ExpertAlcoholLore,
  ArtLore,
  TrainedArtLore,
  ExpertArtLore,
  CircusLore,
  TrainedCircusLore,
  ExpertCircusLore,
  CookingLore,
  TrainedCookingLore,
  ExpertCookingLore,
  EngineeringLore,
  TrainedEngineeringLore,
  ExpertEngineeringLore,
  FarmingLore,
  TrainedFarmingLore,
  ExpertFarmingLore,
  FortuneTellingLore,
  TrainedFortuneTellingLore,
  ExpertFortuneTellingLore,
  GamesLore,
  TrainedGamesLore,
  ExpertGamesLore,
  GenealogyLore,
  TrainedGenealogyLore,
  ExpertGenealogyLore,
  GladiatorialLore,
  TrainedGladiatorialLore,
  ExpertGladiatorialLore,
  GuildLore,
  TrainedGuildLore,
  ExpertGuildLore,
  HeraldryLore,
  TrainedHeraldryLore,
  ExpertHeraldryLore,
  HerbalismLore,
  TrainedHerbalismLore,
  ExpertHerbalismLore,
  LaborLore,
  TrainedLaborLore,
  ExpertLaborLore,
  LegalLore,
  TrainedLegalLore,
  ExpertLegalLore,
  MercantileLore,
  TrainedMercantileLore,
  ExpertMercantileLore,
  MiningLore,
  TrainedMiningLore,
  ExpertMiningLore,
  SailingLore,
  TrainedSailingLore,
  ExpertSailingLore,
  ScribingLore,
  TrainedScribingLore,
  ExpertScribingLore,
  TanningLore,
  TrainedTanningLore,
  ExpertTanningLore,
  TheaterLore,
  TrainedTheaterLore,
  ExpertTheaterLore,
  UnderworldLore,
  TrainedUnderworldLore,
  ExpertUnderworldLore,
  WarfareLore,
  TrainedWarfareLore,
  ExpertWarfareLore,
  TerrainLore,
  TrainedTerrainLore,
  ExpertTerrainLore,
  DeityLore,
  TrainedDeityLore,
  ExpertDeityLore,
  CityLore,
  TrainedCityLore,
  ExpertCityLore,
]
