import { Abilities, CharacterOptions, CharacterValues, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Expressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { ExpertSkill, Feat, FeatLevel1, FeatLevel2, FeatLevel7, GeneralFeat, Lore, SkillFeat, TrainedSkill } from '@simulacrum/ruleset-pf2e/tag'
import { Intelligence, Strength } from '@simulacrum/ruleset-pf2e/characteristic'
import {
  ExpertAcrobatics,
  ExpertArcana,
  ExpertAthletics,
  ExpertCrafting,
  ExpertDeception,
  ExpertDiplomacy,
  ExpertIntimidation,
  ExpertMedicine,
  ExpertNature,
  ExpertOccultism,
  ExpertReligion,
  ExpertSociety,
  ExpertStealth,
  ExpertThievery,
  MasterAcrobatics,
  MasterArcana,
  MasterAthletics,
  MasterCrafting,
  MasterDeception,
  MasterDiplomacy,
  MasterIntimidation,
  MasterMedicine,
  MasterNature,
  MasterOccultism,
  MasterReligion,
  MasterStealth,
  MasterSurvival,
  MasterThievery,
  SelectTrainedSkill,
  TrainedAcrobatics,
  TrainedArcana,
  TrainedAthletics,
  TrainedCrafting,
  TrainedDeception,
  TrainedDiplomacy,
  TrainedIntimidation,
  TrainedMedicine,
  TrainedNature,
  TrainedOccultism,
  TrainedPerformance,
  TrainedReligion,
  TrainedSociety,
  TrainedStealth,
  TrainedSurvival,
  TrainedThievery,
} from '@simulacrum/ruleset-pf2e/skill'
import {
  ExpertAcademiaLore,
  ExpertAlcoholLore,
  ExpertArtLore,
  ExpertCircusLore,
  ExpertCityLore,
  ExpertCookingLore,
  ExpertDeityLore,
  ExpertEngineeringLore,
  ExpertFarmingLore,
  ExpertFortuneTellingLore,
  ExpertGamesLore,
  ExpertGenealogyLore,
  ExpertGladiatorialLore,
  ExpertGuildLore,
  ExpertHeraldryLore,
  ExpertHerbalismLore,
  ExpertLaborLore,
  ExpertLegalLore,
  ExpertMercantileLore,
  ExpertMiningLore,
  ExpertSailingLore,
  ExpertScribingLore,
  ExpertTanningLore,
  ExpertTerrainLore,
  ExpertTheaterLore,
  ExpertUnderworldLore,
  ExpertWarfareLore,
  TrainedAcademiaLore,
  TrainedAlcoholLore,
  TrainedArtLore,
  TrainedCircusLore,
  TrainedCityLore,
  TrainedCookingLore,
  TrainedDeityLore,
  TrainedEngineeringLore,
  TrainedFarmingLore,
  TrainedFortuneTellingLore,
  TrainedGamesLore,
  TrainedGenealogyLore,
  TrainedGladiatorialLore,
  TrainedGuildLore,
  TrainedHeraldryLore,
  TrainedHerbalismLore,
  TrainedLaborLore,
  TrainedLegalLore,
  TrainedMercantileLore,
  TrainedMiningLore,
  TrainedSailingLore,
  TrainedScribingLore,
  TrainedTanningLore,
  TrainedTerrainLore,
  TrainedTheaterLore,
  TrainedUnderworldLore,
  TrainedWarfareLore,
} from '@simulacrum/ruleset-pf2e/lore'

export const SelectAdditionalLore = CharacterOptions.selectTraitOption('feat/additional-lore/select', {
  name: 'Additional Lore',
  filter: { tags: [Lore, TrainedSkill] },
})

export const SelectAdditionalLoreExpertise = CharacterOptions.selectTraitOption('feat/additional-lore/select-expertise', {
  name: 'Additional Lore (Expert)',
  filter: { tags: [Lore, ExpertSkill] },
})

export const AdditionalLore = Traits.defineTrait('feat/additional-lore', {
  name: 'Additional Lore',
  description:
    '*General, Skill*\n\nYour knowledge has expanded to encompass a new field. Choose a Lore skill subcategory. You become trained in it. At 3rd, 7th, and 15th levels, you gain an additional skill increase you can apply only to the chosen Lore subcategory.\n\n**Special** You can select this feat more than once. Each time you must select a new subcategory of Lore and you gain the additional skill increases to that subcategory for the listed levels.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  repeatable: true,
  effects: [
    CharacterEffects.gainCharacterOption(SelectAdditionalLore),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainCharacterOption(SelectAdditionalLoreExpertise),
    ]),
  ],
})

export const AlchemicalCrafting = Traits.defineTrait('feat/alchemical-crafting', {
  name: 'Alchemical Crafting',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Crafting](characteristic:skill/crafting)\n\nYou can use the [Craft](content:skills/craft) activity to create alchemical items. When you select this feat, you immediately add the formulas for four common 1st-level alchemical items to your formula book.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedCrafting)],
  effects: [],
})

export const ArcaneSense = Traits.defineTrait('feat/arcane-sense', {
  name: 'Arcane Sense',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Arcana](characteristic:skill/arcana)\n\nYour study of magic allows you to instinctively sense its presence. You can cast 1st-rank [detect magic](ability:spell/detect-magic) at will as an arcane innate spell. If you're a master in [Arcana](characteristic:skill/arcana), the spell is heightened to 3rd rank; if you're legendary, it is heightened to 4th rank.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedArcana)],
  effects: [],
})

export const Assurance = Traits.defineTrait('feat/assurance', {
  name: 'Assurance',
  description:
    "*Fortune, General, Skill*\n\n**Prerequisites** trained in at least one skill\n\nEven in the worst circumstances, you can perform basic tasks. Choose a skill you're trained in. You can forgo rolling a skill check for that skill to instead receive a result of 10 + your proficiency bonus (do not apply any other bonuses, penalties, or modifiers).\n\n**Special** You can select this feat multiple times. Each time, choose a different skill and gain the benefits for that skill.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(TrainedAcrobatics),
      Traits.traitPrerequisite(TrainedArcana),
      Traits.traitPrerequisite(TrainedAthletics),
      Traits.traitPrerequisite(TrainedCrafting),
      Traits.traitPrerequisite(TrainedDeception),
      Traits.traitPrerequisite(TrainedDiplomacy),
      Traits.traitPrerequisite(TrainedIntimidation),
      Traits.traitPrerequisite(TrainedMedicine),
      Traits.traitPrerequisite(TrainedNature),
      Traits.traitPrerequisite(TrainedOccultism),
      Traits.traitPrerequisite(TrainedPerformance),
      Traits.traitPrerequisite(TrainedReligion),
      Traits.traitPrerequisite(TrainedSociety),
      Traits.traitPrerequisite(TrainedStealth),
      Traits.traitPrerequisite(TrainedSurvival),
      Traits.traitPrerequisite(TrainedThievery),
    ]),
  ],
  repeatable: true,
  effects: [],
})

export const BargainHunter = Traits.defineTrait('feat/bargain-hunter', {
  name: 'Bargain Hunter',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Diplomacy](characteristic:skill/diplomacy)\n\nYou can [Earn Income](content:skills/earn-income) using [Diplomacy](characteristic:skill/diplomacy), spending your days hunting for bargains and reselling at a profit. You can also spend time specifically sniffing out a great bargain on an item; this works as if you were using Earn Income with Diplomacy, except instead of gaining money, you purchase the item at a discount equal to the money you would have gained, gaining the item for free if your earned income equals or exceeds its cost. Finally, if you select Bargain Hunter during character creation at 1st level, you start play with an additional 2 gp.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedDiplomacy)],
  effects: [],
})

export const BattleMedicine = Traits.defineTrait('feat/battle-medicine', {
  name: 'Battle Medicine',
  description:
    "*General, Healing, Manipulate, Skill*\n\n**Prerequisites** Trained in [Medicine](characteristic:skill/medicine)\n\n**Requirements** You're holding or wearing a healer's toolkit.\n\nYou can patch up wounds, even in combat. Attempt a [Medicine](characteristic:skill/medicine) check with the same DC as for [Treat Wounds](content:skills/treat-wounds) and restore the corresponding amount of HP; this doesn't remove the [wounded](content:conditions/wounded) condition. As with Treat Wounds, you can attempt checks against higher DCs if you have the minimum proficiency rank. The target is then immune to your Battle Medicine for 1 day. This does not make them immune to, or otherwise count as, Treat Wounds.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedMedicine)],
  effects: [],
})

export const BattleMedicineAction = Abilities.defineAbility('feat/battle-medicine/action', {
  name: 'Battle Medicine',
  description: '*General, Healing, Manipulate, Skill*',
  prerequisites: [Traits.traitPrerequisite(BattleMedicine)],
  actions: [
    {
      name: 'Battle Medicine',
      description:
        "**Prerequisites** Trained in [Medicine](characteristic:skill/medicine)\n\n**Requirements** You're holding or wearing a healer's toolkit.\n\nYou can patch up wounds, even in combat. Attempt a [Medicine](characteristic:skill/medicine) check with the same DC as for [Treat Wounds](content:skills/treat-wounds) and restore the corresponding amount of HP; this doesn't remove the [wounded](content:conditions/wounded) condition. As with Treat Wounds, you can attempt checks against higher DCs if you have the minimum proficiency rank. The target is then immune to your Battle Medicine for 1 day. This does not make them immune to, or otherwise count as, Treat Wounds.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const CatFall = Traits.defineTrait('feat/cat-fall', {
  name: 'Cat Fall',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Acrobatics](characteristic:skill/acrobatics)\n\nYour catlike aerial acrobatics allow you to cushion your falls. Treat falls as 10 feet shorter. If you're an expert in [Acrobatics](characteristic:skill/acrobatics), treat falls as 25 feet shorter and 50 feet if you're a master. If you're legendary in Acrobatics, you always land on your feet and don't take damage, regardless of the distance of the fall.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedAcrobatics)],
  effects: [],
})

export const CharmingLiar = Traits.defineTrait('feat/charming-liar', {
  name: 'Charming Liar',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Deception](characteristic:skill/deception)\n\nYour charm allows you to win over those you lie to. When you get a critical success using the [Lie](content:skills/lie) action, the target's attitude toward you improves by one step, as though you'd succeeded at using [Diplomacy](characteristic:skill/diplomacy) to [Make an Impression](content:skills/make-an-impression). This works only once per conversation, and if you critically succeed against multiple targets using the same result, you choose one creature's attitude to improve. You must be lying to impart seemingly important information, inflate your status, or ingratiate yourself, which trivial or irrelevant lies can't achieve.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedDeception)],
  effects: [],
})

export const CombatClimber = Traits.defineTrait('feat/combat-climber', {
  name: 'Combat Climber',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYour techniques allow you to fight as you climb. You're not [off-guard](content:conditions/off-guard) while Climbing and can [Climb](content:skills/climb) with a hand occupied. You must still use another hand and both legs to Climb.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [],
})

export const CourtlyGraces = Traits.defineTrait('feat/courtly-graces', {
  name: 'Courtly Graces',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Society](characteristic:skill/society)\n\nYou were raised among the nobility or have learned proper etiquette and bearing, allowing you to present yourself as a noble and play games of influence and politics. Unless you are intentionally presenting yourself differently, anyone who speaks with you will assume you are a noble or closely associated with the nobility (such as a prominent servant). You can use [Society](characteristic:skill/society) to [Make an Impression](content:skills/make-an-impression) on a noble, as well as with [Impersonate](content:skills/impersonate) to pretend to be a type of noble or a specific individual noble. If you use the normal skills in those situations, you receive a +1 circumstance bonus to the check instead.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedSociety)],
  effects: [],
})

export const DubiousKnowledge = Traits.defineTrait('feat/dubious-knowledge', {
  name: 'Dubious Knowledge',
  description:
    "*General, Skill*\n\n**Prerequisites** trained in a skill with the [Recall Knowledge](content:skills/recall-knowledge) action\n\nYou're a treasure trove of information, but not all of it comes from reputable sources. When you fail (but don't critically fail) a [Recall Knowledge](content:skills/recall-knowledge) check using any skill, you learn the correct answer and an erroneous answer, but you don't have any way to differentiate which is which. This can occur as knowing something is significant, but not whether it's good or bad.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(TrainedArcana),
      Traits.traitPrerequisite(TrainedCrafting),
      Traits.traitPrerequisite(TrainedMedicine),
      Traits.traitPrerequisite(TrainedNature),
      Traits.traitPrerequisite(TrainedOccultism),
      Traits.traitPrerequisite(TrainedReligion),
      Traits.traitPrerequisite(TrainedSociety),
      Traits.traitPrerequisite(TrainedAcademiaLore),
      Traits.traitPrerequisite(TrainedAlcoholLore),
      Traits.traitPrerequisite(TrainedArtLore),
      Traits.traitPrerequisite(TrainedCircusLore),
      Traits.traitPrerequisite(TrainedCookingLore),
      Traits.traitPrerequisite(TrainedEngineeringLore),
      Traits.traitPrerequisite(TrainedFarmingLore),
      Traits.traitPrerequisite(TrainedFortuneTellingLore),
      Traits.traitPrerequisite(TrainedGamesLore),
      Traits.traitPrerequisite(TrainedGenealogyLore),
      Traits.traitPrerequisite(TrainedGladiatorialLore),
      Traits.traitPrerequisite(TrainedGuildLore),
      Traits.traitPrerequisite(TrainedHeraldryLore),
      Traits.traitPrerequisite(TrainedHerbalismLore),
      Traits.traitPrerequisite(TrainedLaborLore),
      Traits.traitPrerequisite(TrainedLegalLore),
      Traits.traitPrerequisite(TrainedMercantileLore),
      Traits.traitPrerequisite(TrainedMiningLore),
      Traits.traitPrerequisite(TrainedSailingLore),
      Traits.traitPrerequisite(TrainedScribingLore),
      Traits.traitPrerequisite(TrainedTanningLore),
      Traits.traitPrerequisite(TrainedTheaterLore),
      Traits.traitPrerequisite(TrainedUnderworldLore),
      Traits.traitPrerequisite(TrainedWarfareLore),
      Traits.traitPrerequisite(TrainedTerrainLore),
      Traits.traitPrerequisite(TrainedDeityLore),
      Traits.traitPrerequisite(TrainedCityLore),
    ]),
  ],
  effects: [],
})

export const ExperiencedProfessional = Traits.defineTrait('feat/experienced-professional', {
  name: 'Experienced Professional',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Lore](content:skills/lore)\n\nYou carefully safeguard your professional endeavors to prevent disaster. When you use [Lore](content:skills/lore) to [Earn Income](content:skills/earn-income), if you roll a critical failure, you instead get a failure. If you're an expert in Lore, you gain twice as much income from a failed check to Earn Income, unless it was originally a critical failure.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(TrainedAcademiaLore),
      Traits.traitPrerequisite(TrainedAlcoholLore),
      Traits.traitPrerequisite(TrainedArtLore),
      Traits.traitPrerequisite(TrainedCircusLore),
      Traits.traitPrerequisite(TrainedCookingLore),
      Traits.traitPrerequisite(TrainedEngineeringLore),
      Traits.traitPrerequisite(TrainedFarmingLore),
      Traits.traitPrerequisite(TrainedFortuneTellingLore),
      Traits.traitPrerequisite(TrainedGamesLore),
      Traits.traitPrerequisite(TrainedGenealogyLore),
      Traits.traitPrerequisite(TrainedGladiatorialLore),
      Traits.traitPrerequisite(TrainedGuildLore),
      Traits.traitPrerequisite(TrainedHeraldryLore),
      Traits.traitPrerequisite(TrainedHerbalismLore),
      Traits.traitPrerequisite(TrainedLaborLore),
      Traits.traitPrerequisite(TrainedLegalLore),
      Traits.traitPrerequisite(TrainedMercantileLore),
      Traits.traitPrerequisite(TrainedMiningLore),
      Traits.traitPrerequisite(TrainedSailingLore),
      Traits.traitPrerequisite(TrainedScribingLore),
      Traits.traitPrerequisite(TrainedTanningLore),
      Traits.traitPrerequisite(TrainedTheaterLore),
      Traits.traitPrerequisite(TrainedUnderworldLore),
      Traits.traitPrerequisite(TrainedWarfareLore),
      Traits.traitPrerequisite(TrainedTerrainLore),
      Traits.traitPrerequisite(TrainedDeityLore),
      Traits.traitPrerequisite(TrainedCityLore),
    ]),
  ],
  effects: [],
})

export const ExperiencedSmuggler = Traits.defineTrait('feat/experienced-smuggler', {
  name: 'Experienced Smuggler',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Stealth](characteristic:skill/stealth)\n\nYou often smuggle things past the authorities. When the GM rolls your [Stealth](characteristic:skill/stealth) check to see if a passive observer notices a small item you've concealed, the GM uses the number rolled or 10—whichever is higher—as the result of your die roll, adding it to your Stealth modifier to determine your Stealth check result. If you're a master in Stealth, the GM uses the number rolled or 15, and if you're legendary in Stealth, you automatically succeed at hiding a small concealed item from passive observers. This provides no benefits when a creature attempts a [Perception](characteristic:perception) check while actively searching you for hidden items.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedStealth)],
  effects: [],
})

export const ExperiencedTracker = Traits.defineTrait('feat/experienced-tracker', {
  name: 'Experienced Tracker',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Survival](characteristic:skill/survival)\n\nTracking is second nature to you, and when necessary you can follow a trail without pause. You can [Track](content:skills/track) while moving at full [Speed](characteristic:speed) by taking a –5 penalty to your Survival check. If you're a master in [Survival](characteristic:skill/survival), you don't take the –5 penalty. If you're legendary in Survival, you no longer need to roll a new Survival check every hour when tracking, though you still need to roll whenever there are significant changes in the trail.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedSurvival)],
  effects: [],
})

export const FascinatingPerformance = Traits.defineTrait('feat/fascinating-performance', {
  name: 'Fascinating Performance',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Performance](characteristic:skill/performance)\n\nWhen you [Perform](content:skills/perform), compare your result to the [Will DC](characteristic:will) of one observer. If you succeed, the target is [fascinated](content:conditions/fascinated) by you for 1 round. If the observer is in a situation that demands immediate attention, such as combat, you must critically succeed to fascinate it and the [Perform](content:skills/perform) action gains the [incapacitation](content:traits/incapacitation) trait. You must choose which creature you're trying to fascinate before you roll your check, and the target is then temporarily immune for 1 hour.\n\nIf you're an expert in Performance, you can fascinate up to four observers; if you're a master, you can fascinate up to 10 observers; and if you're legendary, you can fascinate any number of observers at the same time.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedPerformance)],
  effects: [],
})

export const Forager = Traits.defineTrait('feat/forager', {
  name: 'Forager',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Survival](characteristic:skill/survival)\n\nWhile using [Survival](characteristic:skill/survival) to [Subsist](content:skills/subsist), if you roll any result worse than a success, you get a success. On a success, you can provide subsistence living for yourself and four additional creatures, and on a critical success, you can take care of twice as many additional creatures. You can choose to support half the number of creatures with a comfortable living.\n\nIncrease the number of additional creatures you feed on a success to eight if you're an expert in Survival, 16 if you're a master, and 32 if you're legendary.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedSurvival)],
  effects: [],
})

export const GroupCoercion = Traits.defineTrait('feat/group-coercion', {
  name: 'Group Coercion',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Intimidation](characteristic:skill/intimidation)\n\nYou can strong-arm people effectively, even when you don't have them isolated. When you [Coerce](content:skills/coerce), you can compare your Intimidation check result to the Will DCs of up to five targets instead of one.\n\nIt's possible to get a different degree of success for each target. The number of targets you can Coerce in a single action increases to 10 if you're an expert, 25 if you're a master, and 50 if you're legendary.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedIntimidation)],
  effects: [],
})

export const GroupImpression = Traits.defineTrait('feat/group-impression', {
  name: 'Group Impression',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Diplomacy](characteristic:skill/diplomacy)\n\nWhen you [Make an Impression](content:skills/make-an-impression), you can compare your Diplomacy check result to the Will DCs of up to 10 targets you conversed with, with no penalty. The number of targets increases to 20 if you're an expert, 50 if you're a master, and 100 if you're legendary.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedDiplomacy)],
  effects: [],
})

export const HeftyHauler = Traits.defineTrait('feat/hefty-hauler', {
  name: 'Hefty Hauler',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou can carry more than your frame implies. Increase your maximum and [encumbered](content:conditions/encumbered) Bulk limits by 2.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [],
})

export const Hobnobber = Traits.defineTrait('feat/hobnobber', {
  name: 'Hobnobber',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Diplomacy](characteristic:skill/diplomacy)\n\nYou are skilled at learning information through conversation. The [Gather Information](content:skills/gather-information) exploration activity takes you half as long as normal (typically reducing the time to 1 hour). If you're a master in [Diplomacy](characteristic:skill/diplomacy) and roll a critical failure to Gather Information, you get a failure instead. There is still no guarantee that a rumor you learn with Gather Information is accurate.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedDiplomacy)],
  effects: [],
})

export const ImpressivePerformance = Traits.defineTrait('feat/impressive-performance', {
  name: 'Impressive Performance',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Performance](characteristic:skill/performance)\n\nYour performances inspire admiration and win you fans. You can [Make an Impression](content:skills/make-an-impression) using [Performance](characteristic:skill/performance) instead of [Diplomacy](characteristic:skill/diplomacy). If you spend at least 10 minutes performing in front of an audience, you can Make an Impression targeting up to 10 members of the audience who were there for the whole performance, without taking the normal penalty. The number of targets increases to 20 for a 1-hour performance and 50 for a 2-hour performance.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedPerformance)],
  effects: [],
})

export const IntimidatingGlare = Traits.defineTrait('feat/intimidating-glare', {
  name: 'Intimidating Glare',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Intimidation](characteristic:skill/intimidation)\n\nYou can [Demoralize](content:skills/demoralize) with a mere glare. When you do, Demoralize loses the [auditory](content:traits/auditory) trait and gains the [visual](content:traits/visual) trait, and you don’t take a penalty if the creature doesn’t understand your language.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedIntimidation)],
  effects: [],
})

export const LengthyDiversion = Traits.defineTrait('feat/lengthy-diversion', {
  name: 'Lengthy Diversion',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Deception](characteristic:skill/deception)\n\nWhen you critically succeed to [Create a Diversion](content:skills/create-a-diversion), you continue to remain hidden after the end of your turn. This effect lasts for an amount of time that depends on the diversion and situation, as determined by the GM (minimum 1 additional round).',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedDeception)],
  effects: [],
})

export const LieToMe = Traits.defineTrait('feat/lie-to-me', {
  name: 'Lie to Me',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Deception](characteristic:skill/deception)\n\nYou can use [Deception](characteristic:skill/deception) to weave traps to trip up anyone trying to deceive you. If you can engage in conversation with someone trying to [Lie](content:skills/lie) to you, use your Deception DC if it is higher than your [Perception](characteristic:perception) DC to determine whether they succeed. This doesn't apply if you don't have a back-and-forth dialogue, such as when someone attempts to Lie during a long speech.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedDeception)],
  effects: [],
})

export const Multilingual = Traits.defineTrait('feat/multilingual', {
  name: 'Multilingual',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Society](characteristic:skill/society)\n\nYou easily pick up new languages. You learn two new languages, chosen from common languages, uncommon languages, and any others you have access to. You learn an additional language if you are or become a master in [Society](characteristic:skill/society) and again if you are or become legendary.\n\n**Special** You can select this feat multiple times. Each time, you learn additional languages.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedSociety)],
  repeatable: true,
  effects: [],
})

export const NaturalMedicine = Traits.defineTrait('feat/natural-medicine', {
  name: 'Natural Medicine',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Nature](characteristic:skill/nature)\n\nYou can apply natural cures to heal your allies. You can use [Nature](characteristic:skill/nature) instead of [Medicine](characteristic:skill/medicine) to [Treat Wounds](content:skills/treat-wounds), including higher Nature proficiency letting you attempt more difficult checks. It doesn't replace Medicine for uses of the skill other than Treat Wounds or for feat prerequisites.\n\nIf you're in the wilderness, you might have easier access to fresh ingredients, allowing you to gain a +2 circumstance bonus to your check to Treat Wounds using Nature, subject to the GM's determination.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedNature)],
  effects: [],
})

export const NoCauseForAlarm = Traits.defineTrait('feat/no-cause-for-alarm', {
  name: 'No Cause for Alarm',
  description:
    "*Auditory, Concentrate, Emotion, General, Linguistic, Mental, Skill*\n\n**Prerequisites** Trained in [Diplomacy](characteristic:skill/diplomacy)\n\nYou attempt to reduce panic. Attempt a [Diplomacy](characteristic:skill/diplomacy) check, comparing it to the [Will DC](characteristic:will) of creatures in a 10-foot emanation around you who are [frightened](content:conditions/frightened). Each of them is temporarily immune for 1 hour.\n\n**Critical Success** Reduce the creature's frightened value by 2.\n\n**Success** Reduce the creature's frightened value by 1.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedDiplomacy)],
  effects: [],
})

export const NoCauseForAlarmAction = Abilities.defineAbility('feat/no-cause-for-alarm/action', {
  name: 'No Cause for Alarm',
  description: '*Auditory, Concentrate, Emotion, General, Linguistic, Mental, Skill*',
  prerequisites: [Traits.traitPrerequisite(NoCauseForAlarm)],
  actions: [
    {
      name: 'No Cause for Alarm',
      description:
        "**Prerequisites** Trained in [Diplomacy](characteristic:skill/diplomacy)\n\nYou attempt to reduce panic. Attempt a [Diplomacy](characteristic:skill/diplomacy) check, comparing it to the [Will DC](characteristic:will) of creatures in a 10-foot emanation around you who are [frightened](content:conditions/frightened). Each of them is temporarily immune for 1 hour.\n\n**Critical Success** Reduce the creature's frightened value by 2.\n\n**Success** Reduce the creature's frightened value by 1.",
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const OddityIdentification = Traits.defineTrait('feat/oddity-identification', {
  name: 'Oddity Identification',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Occultism](characteristic:skill/occultism)\n\nWhen you become aware of a magical effect or see a spell being cast, you can immediately determine if it twists minds (with the [mental](content:traits/mental) trait), fights against fortune (with the [fortune](content:traits/fortune) or [misfortune](content:traits/misfortune) trait), or reveals secrets (with the [detection](content:traits/detection), [prediction](content:traits/prediction), [revelation](content:traits/revelation), or [scrying](content:traits/scrying) traits). At the GM's discretion, similar effects can also fall into these categories. When you [Identify Magic](content:skills/identify-magic) or [Recall Knowledge](content:skills/recall-knowledge) to learn more about these effects, you can always use Occultism without penalty and gain a +2 circumstance bonus.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedOccultism)],
  effects: [],
})

export const Pickpocket = Traits.defineTrait('feat/pickpocket', {
  name: 'Pickpocket',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Thievery](characteristic:skill/thievery)\n\nYou can [Steal](content:skills/steal) or [Palm an Object](content:skills/palm-an-object) that's closely guarded, such as in a pocket, without taking the –5 penalty. You can't steal objects that would be extremely noticeable or time consuming to remove (like worn shoes or armor or actively wielded objects). If you're a master in Thievery, you can attempt to Steal from a creature in combat or otherwise on guard. When doing so, Stealing requires 2 actions instead of 1, and you take a –5 penalty.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedThievery)],
  effects: [],
})

export const QuickCoercion = Traits.defineTrait('feat/quick-coercion', {
  name: 'Quick Coercion',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Intimidation](characteristic:skill/intimidation)\n\nYou can bully others with just a few choice implications. You can [Coerce](content:skills/coerce) a creature after 1 round of conversation instead of 1 minute. You still can't Coerce a creature in the midst of combat, or without engaging in a conversation.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedIntimidation)],
  effects: [],
})

export const QuickIdentification = Traits.defineTrait('feat/quick-identification', {
  name: 'Quick Identification',
  description:
    "*General, Skill*\n\n**Prerequisites** trained in [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), or [Religion](characteristic:skill/religion)\n\nYou can [Identify Magic](content:skills/identify-magic) swiftly. You take only 1 minute when using Identify Magic to determine the properties of an item, ongoing effect, or location, rather than 10 minutes. If you're a master, it takes a 3-action activity, and if you're legendary, it takes 1 action.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(TrainedArcana),
      Traits.traitPrerequisite(TrainedNature),
      Traits.traitPrerequisite(TrainedOccultism),
      Traits.traitPrerequisite(TrainedReligion),
    ]),
  ],
  effects: [],
})

export const QuickJump = Traits.defineTrait('feat/quick-jump', {
  name: 'Quick Jump',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou can use [High Jump](content:skills/high-jump) and [Long Jump](content:skills/long-jump) as a single action instead of 2 actions. If you do, you don't perform the initial [Stride](content:playing-the-game/stride) (nor do you fail if you don't Stride 10 feet).",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [],
})

export const QuickRepair = Traits.defineTrait('feat/quick-repair', {
  name: 'Quick Repair',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Crafting](characteristic:skill/crafting)\n\nFor you, the [Repair](content:skills/repair) activity loses the exploration trait and takes 1 minute instead of 10 minutes. If you're a master in Crafting, it takes 3 actions. If you're legendary, it takes 1 action.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedCrafting)],
  effects: [],
})

export const QuickSqueeze = Traits.defineTrait('feat/quick-squeeze', {
  name: 'Quick Squeeze',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Acrobatics](characteristic:skill/acrobatics)\n\nYou [Squeeze](content:skills/squeeze) 5 feet per round (10 feet on a critical success). If you're legendary in Acrobatics, you Squeeze at full [Speed](characteristic:speed).",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedAcrobatics)],
  effects: [],
})

export const ReadLips = Traits.defineTrait('feat/read-lips', {
  name: 'Read Lips',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Society](characteristic:skill/society)\n\nYou can read lips of others nearby who you can clearly see. The language read must be one that you know. When you're at your leisure, you can do this automatically. In encounter mode or when attempting a more difficult feat of lipreading, you're [fascinated](content:conditions/fascinated) and [off-guard](content:conditions/off-guard) during each round in which you focus on lip movements, and you must succeed at a [Society](characteristic:skill/society) check (DC determined by the GM) to successfully read someone's lips.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedSociety)],
  effects: [],
})

export const RecognizeSpell = Traits.defineTrait('feat/recognize-spell', {
  name: 'Recognize Spell',
  description:
    "*General, Secret, Skill*\n\n**Prerequisites** Trained in [Arcana](characteristic:skill/arcana), Trained in [Nature](characteristic:skill/nature), Trained in [Occultism](characteristic:skill/occultism), or Trained in [Religion](characteristic:skill/religion)\n\n**Trigger** A creature within line of sight casts a spell that you don’t have prepared or in your spell repertoire, or a trap or similar object casts such a spell. You must be aware of the casting.\n\nIf you are trained in the appropriate skill for the spell's tradition and it's a common spell of 2nd rank or lower, you automatically identify it (you still roll to attempt to get a critical success, but can't get a worse result than success). The highest rank of spell you automatically identify increases to 4 if you're an expert, 6 if you're a master, and 10 if you're legendary. The GM rolls a secret [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), or [Religion](characteristic:skill/religion) check, whichever corresponds to the tradition of the spell being cast. If you're not trained in the skill, you can't get a result better than failure.\n\n**Critical Success** You correctly recognize the spell and gain a +1 circumstance bonus to your saving throw or your [AC](characteristic:armor-class) against it.\n\n**Success** You correctly recognize the spell.\n\n**Failure** You fail to recognize the spell.\n\n**Critical Failure** You misidentify the spell as another spell entirely, of the GM’s choice.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(TrainedArcana),
      Traits.traitPrerequisite(TrainedNature),
      Traits.traitPrerequisite(TrainedOccultism),
      Traits.traitPrerequisite(TrainedReligion),
    ]),
  ],
  effects: [],
})

export const RecognizeSpellAction = Abilities.defineAbility('feat/recognize-spell/action', {
  name: 'Recognize Spell',
  description: '*General, Secret, Skill*',
  prerequisites: [Traits.traitPrerequisite(RecognizeSpell)],
  actions: [
    {
      name: 'Recognize Spell',
      description:
        "**Prerequisites** Trained in [Arcana](characteristic:skill/arcana), Trained in [Nature](characteristic:skill/nature), Trained in [Occultism](characteristic:skill/occultism), or Trained in [Religion](characteristic:skill/religion)\n\n**Trigger** A creature within line of sight casts a spell that you don’t have prepared or in your spell repertoire, or a trap or similar object casts such a spell. You must be aware of the casting.\n\nIf you are trained in the appropriate skill for the spell's tradition and it's a common spell of 2nd rank or lower, you automatically identify it (you still roll to attempt to get a critical success, but can't get a worse result than success). The highest rank of spell you automatically identify increases to 4 if you're an expert, 6 if you're a master, and 10 if you're legendary. The GM rolls a secret [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), or [Religion](characteristic:skill/religion) check, whichever corresponds to the tradition of the spell being cast. If you're not trained in the skill, you can't get a result better than failure.\n\n**Critical Success** You correctly recognize the spell and gain a +1 circumstance bonus to your saving throw or your [AC](characteristic:armor-class) against it.\n\n**Success** You correctly recognize the spell.\n\n**Failure** You fail to recognize the spell.\n\n**Critical Failure** You misidentify the spell as another spell entirely, of the GM’s choice.",
      action: ActionTypes.Reaction,
    },
  ],
})

export const SchooledInSecrets = Traits.defineTrait('feat/schooled-in-secrets', {
  name: 'Schooled in Secrets',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Occultism](characteristic:skill/occultism)\n\nYou notice the signs and symbols that members of mystery cults and other secret societies use to declare their affiliation to fellow members. You can use [Occultism](characteristic:skill/occultism) in place of [Diplomacy](characteristic:skill/diplomacy) to [Gather Information](content:skills/gather-information) about such groups and in place of [Deception](characteristic:skill/deception) to [Impersonate](content:skills/impersonate) a member of these groups.\n\nIf you belong to a secret cult, lodge, sect, or similar organization, you automatically recognize members of your group unless they are specifically attempting to conceal their presence from you. They also recognize your standing unless you are specifically concealing it.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedOccultism)],
  effects: [],
})

export const Seasoned = Traits.defineTrait('feat/seasoned', {
  name: 'Seasoned',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Alcohol Lore](content:skills/lore), Trained in [Cooking Lore](content:skills/lore), or Trained in [Crafting](characteristic:skill/crafting)\n\nYou've mastered the preparation of many types of food and drink. You gain a +1 circumstance bonus to checks to [Craft](content:skills/craft) food and drink, including elixirs if you have [Alchemical Crafting](trait:feat/alchemical-crafting) and potions if you have [Magical Crafting](trait:feat/magical-crafting). If you are a master in one of the prerequisite skills, this bonus increases to +2.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(TrainedAlcoholLore),
      Traits.traitPrerequisite(TrainedCookingLore),
      Traits.traitPrerequisite(TrainedCrafting),
    ]),
  ],
  effects: [],
})

export const SignLanguage = Traits.defineTrait('feat/sign-language', {
  name: 'Sign Language',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Society](characteristic:skill/society)\n\nYou learn the sign languages associated with the languages you know, allowing you to sign and understand signs. Sign languages typically require both hands to convey more complex concepts, and they are [visual](content:traits/visual) rather than [auditory](content:traits/auditory).\n\nSign language is difficult to understand during combat due to the level of attention needed, unlike basic gestures like pointing at a foe to suggest a target. Sign language is hard to use in areas of low visibility, just like speech is difficult in a noisy environment.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedSociety)],
  effects: [],
})

export const SkillTraining = Traits.defineTrait('feat/skill-training', {
  name: 'Skill Training',
  description:
    '*General, Skill*\n\n**Prerequisites** Intelligence +1\n\nYou become trained in the skill of your choice.\n\n**Special** You can select this feat multiple times, choosing a new skill to become trained in each time.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Expressions.greaterThanOrEqual(Intelligence.variable, 1)],
  repeatable: true,
  effects: [CharacterEffects.gainCharacterOption(SelectTrainedSkill)],
})

export const SpecialtyCrafting = Traits.defineTrait('feat/specialty-crafting', {
  name: 'Specialty Crafting',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Crafting](characteristic:skill/crafting)\n\nYour training focused on [Crafting](characteristic:skill/crafting) one particular kind of item. Select one of the specialties listed below; you gain a +1 circumstance bonus to Crafting checks to [Craft](content:skills/craft) items of that type. If you are a master in Crafting, this bonus increases to +2. If it's unclear whether the specialty applies, the GM decides. Some specialties might apply only partially. For example, if you were making a morningstar and had specialty in woodworking, the GM might give you half your bonus because the item requires both blacksmithing and woodworking.\n\n## Specialty Crafting\n\n| **Specialty** | **Applicable Items** |\n|---|---|\n| Alchemy* | Alchemical items such as elixirs |\n| Artistry | Fine art, including jewelry |\n| Blacksmithing | Durable metal goods, including metal armor |\n| Bookmaking | Books and paper |\n| Glassmaking | Glass, including glassware and windows |\n| Leatherworking | Leather goods, including leather armor |\n| Pottery | Ceramic goods |\n| Shipbuilding | Ships and boats |\n| Stonemasonry | Stone goods and structures |\n| Tailoring | Clothing |\n| Weaving | Textiles, baskets, and rugs |\n| Woodworking | Wooden goods and structures |\n\n* Requires [Alchemical Crafting](trait:feat/alchemical-crafting) to Craft.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedCrafting)],
  effects: [],
})

export const SteadyBalance = Traits.defineTrait('feat/steady-balance', {
  name: 'Steady Balance',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Acrobatics](characteristic:skill/acrobatics)\n\nYou can keep your balance easily, even in adverse conditions. Whenever you roll a success using the [Balance](content:skills/balance) action, you get a critical success instead. You're not [off-guard](content:conditions/off-guard) while attempting to Balance on narrow surfaces and uneven ground.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedAcrobatics)],
  effects: [],
})

export const Streetwise = Traits.defineTrait('feat/streetwise', {
  name: 'Streetwise',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Society](characteristic:skill/society)\n\nYou know about life on the streets and feel the pulse of your local settlement. You can use your Society modifier instead of your [Diplomacy](characteristic:skill/diplomacy) modifier to [Gather Information](content:skills/gather-information). In any settlement you frequent regularly, you can use the [Recall Knowledge](content:skills/recall-knowledge) action with Society to know the same sorts of information that you could discover with Diplomacy to Gather Information. The DC is usually significantly higher, but you know the information without spending time gathering it. If you fail to recall the information, you can still subsequently attempt to Gather Information normally.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedSociety)],
  effects: [],
})

export const StudentOfTheCanon = Traits.defineTrait('feat/student-of-the-canon', {
  name: 'Student of the Canon',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Religion](characteristic:skill/religion)\n\nYou've researched many faiths enough to recognize notions about them that are unlikely to be true. If you roll a critical failure at a [Religion](characteristic:skill/religion) check to [Decipher Writing](content:skills/decipher-writing) of a religious nature or to [Recall Knowledge](content:skills/recall-knowledge) about the tenets of faiths, you get a failure instead. When attempting to Recall Knowledge about the tenets of your own faith, if you roll a failure, you get a success instead, and if you roll a success, you get a critical success instead.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedReligion)],
  effects: [],
})

export const SubtleTheft = Traits.defineTrait('feat/subtle-theft', {
  name: 'Subtle Theft',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Thievery](characteristic:skill/thievery)\n\nWhen you successfully [Steal](content:skills/steal) something, observers (creatures other than the creature you stole from) take a –2 circumstance penalty to their [Perception](characteristic:perception) DCs to detect your theft. Additionally, if you first [Create a Diversion](content:skills/create-a-diversion) using [Deception](characteristic:skill/deception), taking a single [Palm an Object](content:skills/palm-an-object) or [Steal](content:skills/steal) action doesn't end your [undetected](content:conditions/undetected) condition.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedThievery)],
  effects: [],
})

export const SurveyWildlife = Traits.defineTrait('feat/survey-wildlife', {
  name: 'Survey Wildlife',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Survival](characteristic:skill/survival)\n\nYou can study details in the wilderness to determine the presence of nearby creatures. You can spend 10 minutes assessing the area around you to find out what creatures are nearby, based on nests, scat, and marks on vegetation. Attempt a [Survival](characteristic:skill/survival) check against a DC determined by the GM based on how obvious the signs are. On a success, you can attempt a [Recall Knowledge](content:skills/recall-knowledge) check with a –2 penalty to learn more about the creatures just from these signs. If you're a master in Survival, you don't take the penalty",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedSurvival)],
  effects: [],
})

export const TerrainExpertise = Traits.defineTrait('feat/terrain-expertise', {
  name: 'Terrain Expertise',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Survival](characteristic:skill/survival)\n\nYour experience in navigating a certain type of terrain makes you supremely confident while doing so. You gain a +1 circumstance bonus to [Survival](characteristic:skill/survival) checks in one of the following types of terrain, chosen when you select this feat: aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground.\n\n**Special** You can select this feat more than once, choosing a different type of terrain each time.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedSurvival)],
  repeatable: true,
  effects: [],
})

export const TerrainStalker = Traits.defineTrait('feat/terrain-stalker', {
  name: 'Terrain Stalker',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Stealth](characteristic:skill/stealth)\n\nSelect one type of [difficult terrain](content:playing-the-game/difficult-terrain) from the following list: rubble, snow, or underbrush. While undetected by all non-allies in that type of terrain, you can [Sneak](content:skills/sneak) without attempting a Stealth check as long as you move no more than 5 feet and do not pass within 10 feet of an enemy during your movement.\n\nDuring exploration, this also allows you to automatically approach within 15 feet of other creatures while [Avoiding their Notice](content:playing-the-game/avoid-notice), as long as they aren't actively [Searching](content:playing-the-game/search) or on guard.\n\n**Special** You can select this feat multiple times. Each time, choose a different type of terrain.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedStealth)],
  repeatable: true,
  effects: [],
})

export const TitanWrestler = Traits.defineTrait('feat/titan-wrestler', {
  name: 'Titan Wrestler',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou can attempt to [Disarm](content:skills/disarm), [Grapple](content:skills/grapple), [Reposition](content:skills/reposition), [Shove](content:skills/shove), or [Trip](content:skills/trip) creatures up to two sizes larger than you, or up to three sizes larger than you if you're legendary in Athletics.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [],
})

export const TrainAnimal = Traits.defineTrait('feat/train-animal', {
  name: 'Train Animal',
  description:
    "*Downtime, General, Manipulate, Skill*\n\n**Prerequisites** Trained in [Nature](characteristic:skill/nature)\n\nYou spend time teaching an animal to do a certain action. You can either select a basic action the animal already knows how to do (typically those listed in the [Command an Animal](content:skills/command-an-animal) action) or attempt to teach the animal a new basic action. The GM determines the DC of any check required and the amount of time the training takes (usually at least a week). It's usually impossible to teach an animal a trick that uses critical thinking. If you're expert, master, or legendary in [Nature](characteristic:skill/nature), you might be able to train more unusual creatures, at the GM's discretion.\n\n**Success** The animal learns the action. If it was an action the animal already knew, you can Command the Animal to take that action without attempting a Nature check. If it was a new basic action, add that action to the actions the animal can take when Commanded, but you must still roll.\n\n**Failure** The animal doesn’t learn the trick.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedNature)],
  effects: [],
})

export const TrickMagicItem = Traits.defineTrait('feat/trick-magic-item', {
  name: 'Trick Magic Item',
  description:
    "*General, Manipulate, Skill*\n\n**Prerequisites** Trained in [Arcana](characteristic:skill/arcana), Trained in [Nature](characteristic:skill/nature), Trained in [Occultism](characteristic:skill/occultism), or Trained in [Religion](characteristic:skill/religion)\n\nYou examine a magic item you normally couldn't use in an effort to fool it and activate it temporarily. For example, this might allow a fighter to cast a spell from a wand or allow a wizard to cast a spell that's not on the arcane list using a scroll. You must know what activating the item does, or you can't attempt to trick it.\n\nAttempt a check using the skill matching the item's magic tradition, or matching a tradition that has the spell on its list, if you're trying to cast a spell from the item. The relevant skills are [Arcana](characteristic:skill/arcana) for arcane, [Nature](characteristic:skill/nature) for primal, [Occultism](characteristic:skill/occultism) for occult, [Religion](characteristic:skill/religion) for divine, or any of the four for an item that has the [magical](content:traits/magical) trait and not a tradition trait. The GM determines the DC based on the item's level (possibly adjusted depending on the item or situation).\n\nIf you activate a magic item that requires a [spell attack modifier](characteristic:spell-attack) or [spell DC](characteristic:spell-dc) and you don't have proficiency in the relevant statistic, use your level as your proficiency bonus and the highest of your Intelligence, Wisdom, or Charisma modifiers. If you're a master in the appropriate skill for the item's tradition, you instead use the trained proficiency bonus; if you're legendary, you instead use the expert proficiency bonus.\n\n**Success** For the rest of the current turn, you can spend actions to activate the item as if you could normally use it.\n\n**Failure** You can’t use the item or try to trick it again this turn, but you can try again on subsequent turns.\n\n**Critical Failure** You can’t use the item, and you can’t try to trick it again until your next daily preparations.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(TrainedArcana),
      Traits.traitPrerequisite(TrainedNature),
      Traits.traitPrerequisite(TrainedOccultism),
      Traits.traitPrerequisite(TrainedReligion),
    ]),
  ],
  effects: [],
})

export const TrickMagicItemAction = Abilities.defineAbility('feat/trick-magic-item/action', {
  name: 'Trick Magic Item',
  description: '*General, Manipulate, Skill*',
  prerequisites: [Traits.traitPrerequisite(TrickMagicItem)],
  actions: [
    {
      name: 'Trick Magic Item',
      description:
        "**Prerequisites** Trained in [Arcana](characteristic:skill/arcana), Trained in [Nature](characteristic:skill/nature), Trained in [Occultism](characteristic:skill/occultism), or Trained in [Religion](characteristic:skill/religion)\n\nYou examine a magic item you normally couldn't use in an effort to fool it and activate it temporarily. For example, this might allow a fighter to cast a spell from a wand or allow a wizard to cast a spell that's not on the arcane list using a scroll. You must know what activating the item does, or you can't attempt to trick it.\n\nAttempt a check using the skill matching the item's magic tradition, or matching a tradition that has the spell on its list, if you're trying to cast a spell from the item. The relevant skills are [Arcana](characteristic:skill/arcana) for arcane, [Nature](characteristic:skill/nature) for primal, [Occultism](characteristic:skill/occultism) for occult, [Religion](characteristic:skill/religion) for divine, or any of the four for an item that has the [magical](content:traits/magical) trait and not a tradition trait. The GM determines the DC based on the item's level (possibly adjusted depending on the item or situation).\n\nIf you activate a magic item that requires a [spell attack modifier](characteristic:spell-attack) or [spell DC](characteristic:spell-dc) and you don't have proficiency in the relevant statistic, use your level as your proficiency bonus and the highest of your Intelligence, Wisdom, or Charisma modifiers. If you're a master in the appropriate skill for the item's tradition, you instead use the trained proficiency bonus; if you're legendary, you instead use the expert proficiency bonus.\n\n**Success** For the rest of the current turn, you can spend actions to activate the item as if you could normally use it.\n\n**Failure** You can’t use the item or try to trick it again this turn, but you can try again on subsequent turns.\n\n**Critical Failure** You can’t use the item, and you can’t try to trick it again until your next daily preparations.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const UnderwaterMarauder = Traits.defineTrait('feat/underwater-marauder', {
  name: 'Underwater Marauder',
  description:
    "*General, Skill*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou've learned to fight [underwater](content:playing-the-game/aquatic-combat). You are not [off-guard](content:conditions/off-guard) while in water, and you don't take the usual penalties for using a bludgeoning or slashing melee weapon in water.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [],
})

export const VirtuosicPerformer = Traits.defineTrait('feat/virtuosic-performer', {
  name: 'Virtuosic Performer',
  description:
    '*General, Skill*\n\n**Prerequisites** Trained in [Performance](characteristic:skill/performance)\n\nYou have exceptional talent with one type of performance. You gain a +1 circumstance bonus when making a certain type of performance. If you are a master in Performance, this bonus increases to +2. Select one of the following specialties and apply the bonus when attempting Performance checks of that type. If it’s unclear whether the specialty applies, the GM decides.\n\n## Virtuosic Performer\n\n| **Specialty** | **Examples** |\n|---|---|\n| Acting | Drama, pantomime, puppetry |\n| Comedy | Buffoonery, joke telling, limericks |\n| Dance | Ballet, huara, jig, macru |\n| Keyboards | Harpsichord, organ, piano |\n| Oratory | Epic, ode, poetry, storytelling |\n| Percussion | Chimes, drum, gong, xylophone |\n| Singing | Ballad, chant, melody, rhyming |\n| Strings | Fiddle, harp, lute, viol |\n| Winds | Bagpipe, flute, recorder, trumpet |',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedPerformance)],
  effects: [],
})

export const AutomaticKnowledge = Traits.defineTrait('feat/automatic-knowledge', {
  name: 'Automatic Knowledge',
  description:
    "*General, Skill*\n\n**Prerequisites** expert in a skill with the [Recall Knowledge](content:skills/recall-knowledge) action; [Assurance](trait:feat/assurance) in that skill\n\nYou know basic facts off the top of your head. Choose a skill you're an expert in that has the [Recall Knowledge](content:skills/recall-knowledge) action and for which you have the [Assurance](trait:feat/assurance) feat. You can use the Recall Knowledge action with that skill as a free action once per round. If you do, you must use Assurance on the skill check.\n\n**Special** You can select this feat multiple times, choosing a different skill each time. You can use Automatic Knowledge with any skills you have chosen, but you can still use Automatic Knowledge only once per round.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(ExpertArcana),
      Traits.traitPrerequisite(ExpertCrafting),
      Traits.traitPrerequisite(ExpertMedicine),
      Traits.traitPrerequisite(ExpertNature),
      Traits.traitPrerequisite(ExpertOccultism),
      Traits.traitPrerequisite(ExpertReligion),
      Traits.traitPrerequisite(ExpertSociety),
    ]),
    Traits.traitPrerequisite(Assurance),
  ],
  repeatable: true,
  effects: [],
})

export const BondedAnimal = Traits.defineTrait('feat/bonded-animal', {
  name: 'Bonded Animal',
  description:
    "*Downtime, General, Skill*\n\n**Prerequisites** Expert in [Nature](characteristic:skill/nature)\n\nYou forge strong connections with animals. You can spend 7 days of downtime regularly interacting with a normal animal (not a companion or other special animal) that is friendly or helpful to you. After this duration, attempt a [Nature](characteristic:skill/nature) check against the animal's [Will DC](characteristic:will). If successful, you bond with the animal. The animal is permanently bonded to you until you form a bond with a different animal or do something egregious to break your bond.\n\nA helpful animal is easier to [direct](content:skills/command-an-animal). If your bonded animal is level –1, it gains the [minion](content:traits/minion) trait, allowing you to command it more efficiently. The maximum level of creature that can be your minion increases to 3 if you're a master in Nature and to 11 if you're legendary.\n\n**Special** You can’t have both a bonded animal and an animal companion (though you can have both a bonded animal and a pet or familiar).",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertNature)],
  effects: [],
})

export const CommunalCrafting = Traits.defineTrait('feat/communal-crafting', {
  name: 'Communal Crafting',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Crafting](characteristic:skill/crafting)\n\nYou can have other PCs help you [Craft](content:skills/craft) an item, under your direction. A helper PC rolls a check with a skill in which they're trained. The skill must be Crafting or another skill relevant to the item, as determined by the GM. For example, a PC might use [Religion](characteristic:skill/religion) to help you Craft an item with the divine trait or Warfare Lore to help you Craft a weapon. Your roll still determines whether you successfully create the item. Any helper's roll contributes toward reducing the cost of raw materials using the numbers from the [Earn Income](content:skills/earn-income) table on page 229; this uses the ally PC's proficiency rank in the skill and their level – 1 for their level.\n\nHelping PCs must accompany you throughout the Craft activity (preventing them from pursuing other downtime activities) or the benefit is lost. The GM might determine that only a certain number of PCs can help depending on the circumstances.\n\nCommunal Crafting also allows you to take the role of a helper when someone else is crafting, provided they accept your help.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertCrafting)],
  effects: [],
})

export const Confabulator = Traits.defineTrait('feat/confabulator', {
  name: 'Confabulator',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Deception](characteristic:skill/deception)\n\nEven when caught in falsehoods, you pile lie upon lie. Reduce the circumstance bonus a target gains for your previous attempts to [Create a Diversion](content:skills/create-a-diversion) or [Lie](content:skills/lie) to it from +4 to +2. If you're a master in [Deception](characteristic:skill/deception), reduce the bonus to +1, and if you're legendary, your targets don't get these bonuses at all.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertDeception)],
  effects: [],
})

export const ContinualRecovery = Traits.defineTrait('feat/continual-recovery', {
  name: 'Continual Recovery',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Medicine](characteristic:skill/medicine)\n\nYou zealously monitor a patient's progress to administer treatment faster. When you [Treat Wounds](content:skills/treat-wounds), your patient becomes immune for only 10 minutes instead of 1 hour. This applies only to your Treat Wounds activities, not any other the patient receives.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertMedicine)],
  effects: [],
})

export const GladHand = Traits.defineTrait('feat/glad-hand', {
  name: 'Glad-Hand',
  description:
    '*General, Skill*\n\n**Prerequisites** Expert in [Diplomacy](characteristic:skill/diplomacy)\n\nFirst impressions are your strong suit. When you meet someone in a casual or social situation, you can immediately attempt a Diplomacy check to [Make an Impression](content:skills/make-an-impression) on that creature rather than needing to converse for 1 minute. If you fail, you can engage in 1 minute of conversation and attempt a new check at the end of that time rather than accepting the failure or critical failure result.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertDiplomacy)],
  effects: [],
})

export const IntimidatingProwess = Traits.defineTrait('feat/intimidating-prowess', {
  name: 'Intimidating Prowess',
  description:
    '*General, Skill*\n\n**Prerequisites** Strength +3; Expert in [Intimidation](characteristic:skill/intimidation)\n\nIn situations where you can physically menace the target when you [Coerce](content:skills/coerce) or [Demoralize](content:skills/demoralize), you gain a +1 circumstance bonus to your Intimidation check and you ignore the penalty for not sharing a language. If your [Strength modifier](characteristic:strength) is +5 or higher and you are a master in Intimidation, this bonus increases to +2.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Expressions.greaterThanOrEqual(Strength.variable, 3), Traits.traitPrerequisite(ExpertIntimidation)],
  effects: [],
})

export const Inventor = Traits.defineTrait('feat/inventor', {
  name: 'Inventor',
  description:
    "*Downtime, General, Skill*\n\n**Prerequisites** Expert in [Crafting](characteristic:skill/crafting)\n\nYou are a genius at [Crafting](characteristic:skill/crafting), easily able to determine how things are made and create new inventions. You can spend downtime to invent a common formula that you don't know. This works just like the [Craft](content:skills/craft) activity: you spend half the Price of the formula up front, attempt a Crafting check, and on a success either finish the formula by paying the difference or work for longer to decrease the Price. The difference is that you spend the additional time in research, design, and development, rather than in creating an item. Once it's complete, you add the new formula you invented to your formula book.\n\nThe GM might allow you to invent uncommon or rare formulas, typically with an increased DC. You need the Alchemical Crafting feat to invent alchemical formulas and the Magical Crafting feat to invent magical formulas.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertCrafting)],
  effects: [],
})

export const LastingCoercion = Traits.defineTrait('feat/lasting-coercion', {
  name: 'Lasting Coercion',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Intimidation](characteristic:skill/intimidation)\n\nWhen you successfully [Coerce](content:skills/coerce) someone, the maximum time they comply increases to a week, still determined by the GM. If you're legendary, the maximum increases to a month.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertIntimidation)],
  effects: [],
})

export const MagicalCrafting = Traits.defineTrait('feat/magical-crafting', {
  name: 'Magical Crafting',
  description:
    '*General, Skill*\n\n**Prerequisites** Expert in [Crafting](characteristic:skill/crafting)\n\nYou can [Craft](content:skills/craft) magic items, though some have other requirements, as listed in GM Core. When you select this feat, you gain formulas for four common magic items of 2nd level or lower.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertCrafting)],
  effects: [],
})

export const MagicalShorthand = Traits.defineTrait('feat/magical-shorthand', {
  name: 'Magical Shorthand',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Arcana](characteristic:skill/arcana), Expert in [Nature](characteristic:skill/nature), Expert in [Occultism](characteristic:skill/occultism), or Expert in [Religion](characteristic:skill/religion)\n\nLearning spells comes easily to you. When you succeed at [Learning a Spell](content:skills/learn-a-spell), it takes 10 minutes regardless of the spell's rank. If you would succeed on the check, you critically succeed instead. If you fail, you can try again after a week or after you gain a level, whichever is first.\n\nYou can use downtime to learn and inscribe new spells. This works as if you were using [Earn Income](content:skills/earn-income) with the tradition's associated skill, but instead of gaining money, you choose a spell available to you to learn and gain a discount on learning it, learning it for free if your earned income equals or exceeds its cost.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(ExpertArcana),
      Traits.traitPrerequisite(ExpertNature),
      Traits.traitPrerequisite(ExpertOccultism),
      Traits.traitPrerequisite(ExpertReligion),
    ]),
  ],
  effects: [],
})

export const NimbleCrawl = Traits.defineTrait('feat/nimble-crawl', {
  name: 'Nimble Crawl',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Acrobatics](characteristic:skill/acrobatics)\n\nYou can [Crawl](content:playing-the-game/crawl) incredibly swiftly—up to half your [Speed](characteristic:speed), rather than 5 feet. If you're a master in Acrobatics, you can Crawl at full Speed, and if you're legendary, you aren't [off-guard](content:conditions/off-guard) while [prone](content:conditions/prone).",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertAcrobatics)],
  effects: [],
})

export const PowerfulLeap = Traits.defineTrait('feat/powerful-leap', {
  name: 'Powerful Leap',
  description:
    '*General, Skill*\n\n**Prerequisites** Expert in [Athletics](characteristic:skill/athletics)\n\nYou can jump 5 feet up with a vertical Leap without making a [High Jump](content:skills/high-jump). You also increase the horizontal distance when you [Leap](content:playing-the-game/leap), including as part of a High Jump or [Long Jump](content:skills/long-jump), by 5 feet.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertAthletics)],
  effects: [],
})

export const QuickDisguise = Traits.defineTrait('feat/quick-disguise', {
  name: 'Quick Disguise',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Deception](characteristic:skill/deception)\n\nYou can set up a disguise in one-tenth the usual time (generally 1 minute). If you're a master in [Deception](characteristic:skill/deception), you can create a full disguise and [Impersonate](content:skills/impersonate) as a 3-action activity. If you're legendary, it takes a single action.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertDeception)],
  effects: [],
})

export const QuietAllies = Traits.defineTrait('feat/quiet-allies', {
  name: 'Quiet Allies',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Stealth](characteristic:skill/stealth)\n\nYou're skilled at moving with a group. When you are [Avoiding Notice](content:playing-the-game/avoid-notice) and your allies [Follow the Expert](content:playing-the-game/follow-the-expert), you and those allies can roll a single Stealth check, using the lowest modifier, instead of rolling separately. This doesn't apply for initiative rolls.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertStealth)],
  effects: [],
})

export const RapidMantel = Traits.defineTrait('feat/rapid-mantel', {
  name: 'Rapid Mantel',
  description:
    '*General, Skill*\n\n**Prerequisites** Expert in [Athletics](characteristic:skill/athletics)\n\nYou easily pull yourself onto ledges. When you [Grab an Edge](content:playing-the-game/grab-an-edge), you can pull yourself onto that surface and stand. You can use [Athletics](characteristic:skill/athletics) instead of a [Reflex](characteristic:reflex) save to Grab an Edge. If you [Climb](content:skills/climb) or [Leap](content:playing-the-game/leap) to within 5 feet beneath the top of an edge, you can pull yourself onto the surface and stand as part of that action.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertAthletics)],
  effects: [],
})

export const RobustRecovery = Traits.defineTrait('feat/robust-recovery', {
  name: 'Robust Recovery',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Medicine](characteristic:skill/medicine)\n\nYou learned folk medicine to help recover from diseases and poison, and using it diligently has made you especially resilient. When you [Treat a Disease](content:skills/treat-disease) or a [Poison](content:skills/treat-poison), or someone else uses one of these actions on you, increase the circumstance bonus granted on a success to +4, and if the result of the patient's saving throw is a success, the patient gets a critical success.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertMedicine)],
  effects: [],
})

export const UnmistakableLore = Traits.defineTrait('feat/unmistakable-lore', {
  name: 'Unmistakable Lore',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Lore](content:skills/lore)\n\nYou never get information about your areas of expertise wrong. When you [Recall Knowledge](content:skills/recall-knowledge) using any [Lore](content:skills/lore) subcategory in which you're trained, if you roll a critical failure, you get a failure instead. If you're a master in a Lore subcategory, on a critical success, you gain even more information or context than usual.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(ExpertAcademiaLore),
      Traits.traitPrerequisite(ExpertAlcoholLore),
      Traits.traitPrerequisite(ExpertArtLore),
      Traits.traitPrerequisite(ExpertCircusLore),
      Traits.traitPrerequisite(ExpertCookingLore),
      Traits.traitPrerequisite(ExpertEngineeringLore),
      Traits.traitPrerequisite(ExpertFarmingLore),
      Traits.traitPrerequisite(ExpertFortuneTellingLore),
      Traits.traitPrerequisite(ExpertGamesLore),
      Traits.traitPrerequisite(ExpertGenealogyLore),
      Traits.traitPrerequisite(ExpertGladiatorialLore),
      Traits.traitPrerequisite(ExpertGuildLore),
      Traits.traitPrerequisite(ExpertHeraldryLore),
      Traits.traitPrerequisite(ExpertHerbalismLore),
      Traits.traitPrerequisite(ExpertLaborLore),
      Traits.traitPrerequisite(ExpertLegalLore),
      Traits.traitPrerequisite(ExpertMercantileLore),
      Traits.traitPrerequisite(ExpertMiningLore),
      Traits.traitPrerequisite(ExpertSailingLore),
      Traits.traitPrerequisite(ExpertScribingLore),
      Traits.traitPrerequisite(ExpertTanningLore),
      Traits.traitPrerequisite(ExpertTheaterLore),
      Traits.traitPrerequisite(ExpertUnderworldLore),
      Traits.traitPrerequisite(ExpertWarfareLore),
      Traits.traitPrerequisite(ExpertTerrainLore),
      Traits.traitPrerequisite(ExpertDeityLore),
      Traits.traitPrerequisite(ExpertCityLore),
    ]),
  ],
  effects: [],
})

export const UnusualTreatment = Traits.defineTrait('feat/unusual-treatment', {
  name: 'Unusual Treatment',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Medicine](characteristic:skill/medicine)\n\nYour medical training extends to less obvious conditions. When you succeed against a DC 20 check to [Treat Wounds](content:skills/treat-wounds), you can also reduce the value of one [clumsy](content:conditions/clumsy), [enfeebled](content:conditions/enfeebled), or [stupefied](content:conditions/stupefied) condition on the patient by 1. If you're able to treat more than one creature at once, choose only one to gain this benefit. A creature can benefit from Unusual Treatment only once per day.\n\nIf the condition results from an [affliction](content:playing-the-game/afflictions), the affliction isn't cured, though the condition is reduced as long as the affliction remains at that stage.\n\nIf you are a master in Medicine, add the [drained](content:conditions/drained) condition to the list of conditions you can remove if you succeed at a DC 30 check. If you are legendary in Medicine, you reduce the chosen condition by 2 instead of by 1.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertMedicine)],
  effects: [],
})

export const WardMedic = Traits.defineTrait('feat/ward-medic', {
  name: 'Ward Medic',
  description:
    "*General, Skill*\n\n**Prerequisites** Expert in [Medicine](characteristic:skill/medicine)\n\nYou've studied in large medical wards, treating several patients at once and tending to all their needs. When you use [Treat Disease](content:skills/treat-disease) or [Treat Wounds](content:skills/treat-wounds), you can treat up to two targets. If you're a master in Medicine, you can treat up to four targets, and if you're legendary, you can treat up to eight targets.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertMedicine)],
  effects: [],
})

export const WaryDisarmament = Traits.defineTrait('feat/wary-disarmament', {
  name: 'Wary Disarmament',
  description:
    '*General, Skill*\n\n**Prerequisites** Expert in [Thievery](characteristic:skill/thievery)\n\nIf you trigger a device or set off a trap while disarming it, you gain a +2 circumstance bonus to your [AC](characteristic:armor-class) or saving throw against the device or trap. This applies only to attacks or effects triggered by your failed attempt, not to any later ones, such as additional attacks from a complex trap.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ExpertThievery)],
  effects: [],
})

export const AdvancedFirstAid = Traits.defineTrait('feat/advanced-first-aid', {
  name: 'Advanced First Aid',
  description:
    "*General, Healing, Manipulate, Skill*\n\n**Prerequisites** Master in [Medicine](characteristic:skill/medicine)\n\nYou use your medical training to ameliorate sickness or assuage fears. When you use [Medicine](characteristic:skill/medicine) to [Administer First Aid](content:skills/administer-first-aid), instead of Stabilizing a character or Stopping Bleeding, you can reduce an ally's [frightened](content:conditions/frightened) or [sickened](content:conditions/sickened) condition by 2, or remove either of those conditions entirely on a critical success. You can remove only one condition at a time. The DC for the Medicine check is usually the DC of the effect that caused the condition.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterMedicine)],
  effects: [],
})

export const BattleCry = Traits.defineTrait('feat/battle-cry', {
  name: 'Battle Cry',
  description:
    "*General, Skill*\n\n**Prerequisites** Master in [Intimidation](characteristic:skill/intimidation)\n\nWhen you roll initiative, you can yell a mighty battle cry and [Demoralize](content:skills/demoralize) an observed foe as a free action. If you're legendary in Intimidation, you can use a reaction to Demoralize your foe when you critically succeed at an attack roll.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterIntimidation)],
  effects: [],
})

export const BizarreMagic = Traits.defineTrait('feat/bizarre-magic', {
  name: 'Bizarre Magic',
  description:
    '*General, Skill*\n\n**Prerequisites** Master in [Occultism](characteristic:skill/occultism)\n\nYou can draw upon strange variations in your spellcasting, whether or not you can cast occult spells. The DCs to [Recognize Spells](trait:feat/recognize-spell) you cast and [Identify Magic](content:skills/identify-magic) you use increase by 5.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterOccultism)],
  effects: [],
})

export const BreakCurse = Traits.defineTrait('feat/break-curse', {
  name: 'Break Curse',
  description:
    "*Concentrate, Exploration, General, Healing, Skill*\n\n**Prerequisites** Master in [Occultism](characteristic:skill/occultism) or Master in [Religion](characteristic:skill/religion)\n\nYou spend 8 hours praying or performing occult rites over the target, weakening a curse's power over them. Attempt to [counteract](content:playing-the-game/counteracting) the curse, using Occultism or Religion for your counteract check and half your level rounded up for the counteract rank. Break Curse only takes 10 minutes of prayer and rites if you are legendary in Occultism or Religion.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(MasterOccultism), Traits.traitPrerequisite(MasterReligion)])],
  effects: [],
})

export const FoilSenses = Traits.defineTrait('feat/foil-senses', {
  name: 'Foil Senses',
  description:
    "*General, Skill*\n\n**Prerequisites** Master in [Stealth](characteristic:skill/stealth)\n\nYou are adept at foiling creatures' special senses and cautious enough to safeguard against them at all times. Whenever you use the [Avoid Notice](content:playing-the-game/avoid-notice), [Hide](content:skills/hide), or [Sneak](content:skills/sneak) actions, you are always considered to be taking [precautions against special senses](content:playing-the-game/senses).",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterStealth)],
  effects: [],
})

export const ImpeccableCrafting = Traits.defineTrait('feat/impeccable-crafting', {
  name: 'Impeccable Crafting',
  description:
    '*General, Skill*\n\n**Prerequisites** Master in [Crafting](characteristic:skill/crafting); [Specialty Crafting](trait:feat/specialty-crafting)\n\nYou craft flawless creations with great efficiency. Whenever you roll a success at a [Crafting](characteristic:skill/crafting) check to make an item of the type you chose with Specialty Crafting, you get a critical success instead.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterCrafting), Traits.traitPrerequisite(SpecialtyCrafting)],
  effects: [],
})

export const KipUp = Traits.defineTrait('feat/kip-up', {
  name: 'Kip Up',
  description:
    "*General, Skill*\n\n**Prerequisites** Master in [Acrobatics](characteristic:skill/acrobatics)\n\nYou [stand](content:playing-the-game/stand) up. This movement doesn't trigger reactions.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterAcrobatics)],
  effects: [],
})

export const KipUpAction = Abilities.defineAbility('feat/kip-up/action', {
  name: 'Kip Up',
  description: '*General, Skill*',
  prerequisites: [Traits.traitPrerequisite(KipUp)],
  actions: [
    {
      name: 'Kip Up',
      description:
        "**Prerequisites** Master in [Acrobatics](characteristic:skill/acrobatics)\n\nYou [stand](content:playing-the-game/stand) up. This movement doesn't trigger reactions.",
      action: ActionTypes.FreeAction,
    },
  ],
})

export const MonsterCrafting = Traits.defineTrait('feat/monster-crafting', {
  name: 'Monster Crafting',
  description:
    "*General, Skill*\n\n**Prerequisites** Master in [Survival](characteristic:skill/survival)\n\nYou can use the parts of monsters to aid in crafting. You can use the body of a monster to help [Craft](content:skills/craft) items, using [Survival](characteristic:skill/survival) instead of [Crafting](characteristic:skill/crafting) for the Craft activity when you do so. If parts of the monster's body are valuable, you can expend them toward the item's raw material cost as well. (The GM makes the determination if the monster's entry doesn't list any valuable materials from its body.)\n\nIf you spend additional days working on the item, reduce the Price using the monster's level instead of your own. Certain items may require specific creatures in their Craft requirement.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterSurvival)],
  effects: [],
})

export const PlanarSurvival = Traits.defineTrait('feat/planar-survival', {
  name: 'Planar Survival',
  description:
    '*General, Skill*\n\n**Prerequisites** Master in [Survival](characteristic:skill/survival)\n\nYou can [Subsist](content:skills/subsist) using [Survival](characteristic:skill/survival) on different planes, even those without resources or natural phenomena you normally need. For instance, you can forage for food without penalty even if the plane lacks food that could normally sustain you. A success on your check to Subsist also prevents damage done by the plane to you and anyone else you support with Subsist. This applies only to damage dealt by the general conditions of the plane, not smaller hazards.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterSurvival)],
  effects: [],
})

export const QuickClimb = Traits.defineTrait('feat/quick-climb', {
  name: 'Quick Climb',
  description:
    "*General, Skill*\n\n**Prerequisites** Master in [Athletics](characteristic:skill/athletics)\n\nWhen [Climbing](content:skills/climb), you move 5 more feet on a success and 10 more feet on a critical success, up to your [Speed](characteristic:speed). If you're legendary in Athletics, you gain a climb Speed equal to your Speed.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterAthletics)],
  effects: [],
})

export const QuickRecognition = Traits.defineTrait('feat/quick-recognition', {
  name: 'Quick Recognition',
  description:
    '*General, Skill*\n\n**Prerequisites** Master in [Arcana](characteristic:skill/arcana), Master in [Nature](characteristic:skill/nature), Master in [Occultism](characteristic:skill/occultism), or Master in [Religion](characteristic:skill/religion); [Recognize Spell](trait:feat/recognize-spell)\n\nYou Recognize Spells swiftly. Once per round, you can Recognize a Spell using a skill in which you’re a master as a free action.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(MasterArcana),
      Traits.traitPrerequisite(MasterNature),
      Traits.traitPrerequisite(MasterOccultism),
      Traits.traitPrerequisite(MasterReligion),
    ]),
    Traits.traitPrerequisite(RecognizeSpell),
  ],
  effects: [],
})

export const QuickSwim = Traits.defineTrait('feat/quick-swim', {
  name: 'Quick Swim',
  description:
    '*General, Skill*\n\n**Prerequisites** Master in [Athletics](characteristic:skill/athletics)\n\nYou [Swim](content:skills/swim) 5 feet farther on a success and 10 feet farther on a critical success, to a maximum of your [Speed](characteristic:speed). If you’re legendary in Athletics, you gain a swim Speed equal to your Speed.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterAthletics)],
  effects: [],
})

export const QuickUnlock = Traits.defineTrait('feat/quick-unlock', {
  name: 'Quick Unlock',
  description:
    '*General, Skill*\n\n**Prerequisites** Master in [Thievery](characteristic:skill/thievery)\n\nYou can [Pick a Lock](content:skills/pick-a-lock) using 1 action instead of 2.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterThievery)],
  effects: [],
})

export const ShamelessRequest = Traits.defineTrait('feat/shameless-request', {
  name: 'Shameless Request',
  description:
    '*General, Skill*\n\n**Prerequisites** Master in [Diplomacy](characteristic:skill/diplomacy)\n\nYou can downplay the consequences or outrageousness of your requests using sheer brazenness and charm. When you [Request](content:skills/request) something, you reduce any DC increases for making an outrageous request by 2, and if you roll a critical failure for your Request, you get a failure instead. While this means you can never cause your target to reduce their attitude toward you by making a Request, they eventually tire of requests, even though they still have a positive attitude toward you.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterDiplomacy)],
  effects: [],
})

export const SlipperySecrets = Traits.defineTrait('feat/slippery-secrets', {
  name: 'Slippery Secrets',
  description:
    "*General, Skill*\n\n**Prerequisites** Master in [Deception](characteristic:skill/deception)\n\nYou elude and evade attempts to uncover your true nature or intentions. When a spell or magical effect tries to read your mind, detect whether you are lying, or reveal your identity, you can attempt a [Deception](characteristic:skill/deception) check against the spell or effect's DC. If you succeed, the effect reveals nothing.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterDeception)],
  effects: [],
})

export const SwiftSneak = Traits.defineTrait('feat/swift-sneak', {
  name: 'Swift Sneak',
  description:
    '*General, Skill*\n\n**Prerequisites** Master in [Stealth](characteristic:skill/stealth)\n\nYou can move your full [Speed](characteristic:speed) when you [Sneak](content:skills/sneak). You can use Swift Sneak while [Burrowing](content:playing-the-game/burrow), [Climbing](content:skills/climb), [Flying](content:playing-the-game/fly), or [Swimming](content:skills/swim) instead of Striding if you have the corresponding movement type.',
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterStealth)],
  effects: [],
})

export const TerrifiedRetreat = Traits.defineTrait('feat/terrified-retreat', {
  name: 'Terrified Retreat',
  description:
    "*General, Skill*\n\n**Prerequisites** Master in [Intimidation](characteristic:skill/intimidation)\n\nWhen you critically succeed at the [Demoralize](content:skills/demoralize) action, if the target's level is lower than yours, the target is [fleeing](content:conditions/fleeing) for 1 round.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterIntimidation)],
  effects: [],
})

export const WallJump = Traits.defineTrait('feat/wall-jump', {
  name: 'Wall Jump',
  description:
    "*General, Skill*\n\n**Prerequisites** Master in [Athletics](characteristic:skill/athletics)\n\nYou can use your momentum from a jump to propel yourself off a wall. If you're adjacent to a wall at the end of a jump (whether performing a [High Jump](content:skills/high-jump), [Long Jump](content:skills/long-jump), or [Leap](content:playing-the-game/leap)), you don't fall as long as your next action is another jump. Your previous jump gives you momentum, letting you use High Jump or Long Jump as a single action, but you don't get to [Stride](content:playing-the-game/stride) as part of the activity.\n\nYou can use Wall Jump only once in a turn, unless you're legendary in Athletics, in which case you can use it as many times as you can use consecutive jump actions in that turn.",
  tags: [Feat, GeneralFeat, SkillFeat, FeatLevel7],
  prerequisites: [Traits.traitPrerequisite(MasterAthletics)],
  effects: [],
})

export const AllSkillFeatEntities = [
  AdditionalLore,
  AlchemicalCrafting,
  ArcaneSense,
  Assurance,
  BargainHunter,
  BattleMedicine,
  BattleMedicineAction,
  CatFall,
  CharmingLiar,
  CombatClimber,
  CourtlyGraces,
  DubiousKnowledge,
  ExperiencedProfessional,
  ExperiencedSmuggler,
  ExperiencedTracker,
  FascinatingPerformance,
  Forager,
  GroupCoercion,
  GroupImpression,
  HeftyHauler,
  Hobnobber,
  ImpressivePerformance,
  IntimidatingGlare,
  LengthyDiversion,
  LieToMe,
  Multilingual,
  NaturalMedicine,
  NoCauseForAlarm,
  NoCauseForAlarmAction,
  OddityIdentification,
  Pickpocket,
  QuickCoercion,
  QuickIdentification,
  QuickJump,
  QuickRepair,
  QuickSqueeze,
  ReadLips,
  RecognizeSpell,
  RecognizeSpellAction,
  SchooledInSecrets,
  Seasoned,
  SignLanguage,
  SkillTraining,
  SpecialtyCrafting,
  SteadyBalance,
  Streetwise,
  StudentOfTheCanon,
  SubtleTheft,
  SurveyWildlife,
  TerrainExpertise,
  TerrainStalker,
  TitanWrestler,
  TrainAnimal,
  TrickMagicItem,
  TrickMagicItemAction,
  UnderwaterMarauder,
  VirtuosicPerformer,
  AutomaticKnowledge,
  BondedAnimal,
  CommunalCrafting,
  Confabulator,
  ContinualRecovery,
  GladHand,
  IntimidatingProwess,
  Inventor,
  LastingCoercion,
  MagicalCrafting,
  MagicalShorthand,
  NimbleCrawl,
  PowerfulLeap,
  QuickDisguise,
  QuietAllies,
  RapidMantel,
  RobustRecovery,
  UnmistakableLore,
  UnusualTreatment,
  WardMedic,
  WaryDisarmament,
  AdvancedFirstAid,
  BattleCry,
  BizarreMagic,
  BreakCurse,
  FoilSenses,
  ImpeccableCrafting,
  KipUp,
  KipUpAction,
  MonsterCrafting,
  PlanarSurvival,
  QuickClimb,
  QuickRecognition,
  QuickSwim,
  QuickUnlock,
  ShamelessRequest,
  SlipperySecrets,
  SwiftSneak,
  TerrifiedRetreat,
  WallJump,
]
