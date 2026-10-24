import { CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Background } from '@simulacrum/ruleset-pf2e/tag'
import {
  CharismaBackgroundBoost,
  ConstitutionBackgroundBoost,
  DexterityBackgroundBoost,
  IntelligenceBackgroundBoost,
  SelectBackgroundBoost,
  StrengthBackgroundBoost,
  WisdomBackgroundBoost,
} from '@simulacrum/ruleset-pf2e/attribute-boost'
import {
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
  AllLoreEntities,
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
import {
  Assurance,
  BargainHunter,
  BattleMedicine,
  CatFall,
  CharmingLiar,
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
  LieToMe,
  Multilingual,
  NaturalMedicine,
  OddityIdentification,
  Pickpocket,
  QuickCoercion,
  QuickJump,
  SchooledInSecrets,
  Seasoned,
  SpecialtyCrafting,
  SteadyBalance,
  Streetwise,
  StudentOfTheCanon,
  SurveyWildlife,
  TerrainExpertise,
  TrainAnimal,
  UnderwaterMarauder,
} from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const SelectIntelligenceOrWisdomBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/intelligence-wisdom', {
  name: 'Background Boost (Intelligence or Wisdom)',
  filter: { specificOptions: [IntelligenceBackgroundBoost, WisdomBackgroundBoost] },
})

export const SelectStrengthOrDexterityBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/strength-dexterity', {
  name: 'Background Boost (Strength or Dexterity)',
  filter: { specificOptions: [StrengthBackgroundBoost, DexterityBackgroundBoost] },
})

export const SelectWisdomOrCharismaBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/wisdom-charisma', {
  name: 'Background Boost (Wisdom or Charisma)',
  filter: { specificOptions: [WisdomBackgroundBoost, CharismaBackgroundBoost] },
})

export const SelectStrengthOrIntelligenceBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/strength-intelligence', {
  name: 'Background Boost (Strength or Intelligence)',
  filter: { specificOptions: [StrengthBackgroundBoost, IntelligenceBackgroundBoost] },
})

export const SelectDexterityOrCharismaBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/dexterity-charisma', {
  name: 'Background Boost (Dexterity or Charisma)',
  filter: { specificOptions: [DexterityBackgroundBoost, CharismaBackgroundBoost] },
})

export const SelectConstitutionOrCharismaBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/constitution-charisma', {
  name: 'Background Boost (Constitution or Charisma)',
  filter: { specificOptions: [ConstitutionBackgroundBoost, CharismaBackgroundBoost] },
})

export const SelectIntelligenceOrCharismaBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/intelligence-charisma', {
  name: 'Background Boost (Intelligence or Charisma)',
  filter: { specificOptions: [IntelligenceBackgroundBoost, CharismaBackgroundBoost] },
})

export const SelectStrengthOrWisdomBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/strength-wisdom', {
  name: 'Background Boost (Strength or Wisdom)',
  filter: { specificOptions: [StrengthBackgroundBoost, WisdomBackgroundBoost] },
})

export const SelectConstitutionOrIntelligenceBackgroundBoost = CharacterOptions.selectTraitOption(
  'background/select-boost/constitution-intelligence',
  {
    name: 'Background Boost (Constitution or Intelligence)',
    filter: { specificOptions: [ConstitutionBackgroundBoost, IntelligenceBackgroundBoost] },
  }
)

export const SelectDexterityOrIntelligenceBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/dexterity-intelligence', {
  name: 'Background Boost (Dexterity or Intelligence)',
  filter: { specificOptions: [DexterityBackgroundBoost, IntelligenceBackgroundBoost] },
})

export const SelectConstitutionOrWisdomBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/constitution-wisdom', {
  name: 'Background Boost (Constitution or Wisdom)',
  filter: { specificOptions: [ConstitutionBackgroundBoost, WisdomBackgroundBoost] },
})

export const SelectStrengthOrCharismaBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/strength-charisma', {
  name: 'Background Boost (Strength or Charisma)',
  filter: { specificOptions: [StrengthBackgroundBoost, CharismaBackgroundBoost] },
})

export const SelectDexterityOrWisdomBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/dexterity-wisdom', {
  name: 'Background Boost (Dexterity or Wisdom)',
  filter: { specificOptions: [DexterityBackgroundBoost, WisdomBackgroundBoost] },
})

export const SelectStrengthOrConstitutionBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/strength-constitution', {
  name: 'Background Boost (Strength or Constitution)',
  filter: { specificOptions: [StrengthBackgroundBoost, ConstitutionBackgroundBoost] },
})

export const SelectDexterityOrConstitutionBackgroundBoost = CharacterOptions.selectTraitOption('background/select-boost/dexterity-constitution', {
  name: 'Background Boost (Dexterity or Constitution)',
  filter: { specificOptions: [DexterityBackgroundBoost, ConstitutionBackgroundBoost] },
})

export const SelectGuardLore = CharacterOptions.selectTraitOption('background/guard/select-lore', {
  name: 'Guard Lore',
  filter: { specificOptions: [TrainedLegalLore, TrainedWarfareLore] },
})

export const SelectHermitSkill = CharacterOptions.selectTraitOption('background/hermit/select-skill', {
  name: 'Hermit Skill',
  filter: { specificOptions: [TrainedNature, TrainedOccultism] },
})

export const MartialDiscipleAcrobatics = Traits.defineTrait('background/martial-disciple/acrobatics', {
  name: 'Martial Disciple (Acrobatics)',
  description: 'You are trained in Acrobatics and gain the Cat Fall skill feat.',
  effects: [Effects.gainTrait(TrainedAcrobatics), Effects.gainTrait(CatFall)],
})

export const MartialDiscipleAthletics = Traits.defineTrait('background/martial-disciple/athletics', {
  name: 'Martial Disciple (Athletics)',
  description: 'You are trained in Athletics and gain the Quick Jump skill feat.',
  effects: [Effects.gainTrait(TrainedAthletics), Effects.gainTrait(QuickJump)],
})

export const SelectMartialDiscipleTraining = CharacterOptions.selectTraitOption('background/martial-disciple/select', {
  name: 'Martial Disciple Training',
  filter: { specificOptions: [MartialDiscipleAcrobatics, MartialDiscipleAthletics] },
})

export const SelectNobleLore = CharacterOptions.selectTraitOption('background/noble/select-lore', {
  name: 'Noble Lore',
  filter: { specificOptions: [TrainedGenealogyLore, TrainedHeraldryLore] },
})

export const SelectScholarSkill = CharacterOptions.selectTraitOption('background/scholar/select-skill', {
  name: 'Scholar Skill',
  filter: { specificOptions: [TrainedArcana, TrainedNature, TrainedOccultism, TrainedReligion] },
})

export const SelectTeacherSkill = CharacterOptions.selectTraitOption('background/teacher/select-skill', {
  name: 'Teacher Skill',
  filter: { specificOptions: [TrainedPerformance, TrainedSociety] },
})

export const Acolyte = Traits.defineTrait('background/acolyte', {
  name: 'Acolyte',
  description:
    "You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast away the teachings of your faith, but deep down you’ll always carry within you the lessons you learned.\n\nChoose two attribute boosts. One must be to Intelligence or Wisdom, and one is a free attribute boost.\n\nYou're trained in the [Religion](characteristic:skill/religion) skill, and the Scribing Lore skill. You gain the [Student of the Canon](trait:feat/student-of-the-canon) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedReligion),
    Effects.gainTrait(TrainedScribingLore),
    Effects.gainTrait(StudentOfTheCanon),
  ],
})

export const Acrobat = Traits.defineTrait('background/acrobat', {
  name: 'Acrobat',
  description:
    "In a circus or on the streets, you earned your pay by performing as an acrobat. You might have turned to adventuring when the money dried up, or simply decided to put your skills to better use.\n\nChoose two attribute boosts. One must be to Strength or Dexterity, and one is a free attribute boost.\n\nYou're trained in the [Acrobatics](characteristic:skill/acrobatics) skill, and the Circus Lore skill. You gain the [Steady Balance](trait:feat/steady-balance) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrDexterityBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedAcrobatics),
    Effects.gainTrait(TrainedCircusLore),
    Effects.gainTrait(SteadyBalance),
  ],
})

export const AnimalWhisperer = Traits.defineTrait('background/animal-whisperer', {
  name: 'Animal Whisperer',
  description:
    "You have always felt a connection to animals, and it was only a small leap to learn to train them. As you travel, you continuously encounter different creatures, befriending them along the way.\n\nChoose two attribute boosts. One must be to Wisdom or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Nature](characteristic:skill/nature) skill, and a Lore skill related to one terrain inhabited by animals you like (such as Plains Lore or Swamp Lore). You gain the [Train Animal](trait:feat/train-animal) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectWisdomOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedNature),
    Effects.gainTrait(TrainedTerrainLore),
    Effects.gainTrait(TrainAnimal),
  ],
})

export const Artisan = Traits.defineTrait('background/artisan', {
  name: 'Artisan',
  description:
    "As an apprentice, you practiced a particular form of building or crafting, developing specialized skill. You might have been a blacksmith’s apprentice toiling over the forge for countless hours, a young tailor sewing garments of all kinds, or a shipwright shaping the hulls of ships.\n\nChoose two attribute boosts. One must be to Strength or Intelligence, and one is a free attribute boost.\n\nYou're trained in the [Crafting](characteristic:skill/crafting) skill, and the Guild Lore skill. You gain the [Specialty Crafting](trait:feat/specialty-crafting) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrIntelligenceBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedCrafting),
    Effects.gainTrait(TrainedGuildLore),
    Effects.gainTrait(SpecialtyCrafting),
  ],
})

export const Artist = Traits.defineTrait('background/artist', {
  name: 'Artist',
  description:
    "Your art is your greatest passion, whatever form it takes. Adventuring might help you find inspiration, or simply be a way to survive until you become a world-famous artist.\n\nChoose two attribute boosts. One must be to Dexterity or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Crafting](characteristic:skill/crafting) skill, and the Art Lore skill. You gain the [Specialty Crafting](trait:feat/specialty-crafting) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectDexterityOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedCrafting),
    Effects.gainTrait(TrainedArtLore),
    Effects.gainTrait(SpecialtyCrafting),
  ],
})

export const Bandit = Traits.defineTrait('background/bandit', {
  name: 'Bandit',
  description:
    "Your past includes no small amount of rural banditry, robbing travelers on the road and scraping by. Whether your robbery was sanctioned by a local noble or you did so of your own accord, you eventually got caught up in the adventuring life. Now, adventure is your stock and trade, and years of camping and skirmishing have only helped.\n\nChoose two attribute boosts. One must be to Dexterity or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Intimidation](characteristic:skill/intimidation) skill, and a Lore skill related to the terrain you worked in (such as Desert Lore or Plains Lore). You gain the [Group Coercion](trait:feat/group-coercion) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectDexterityOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedIntimidation),
    Effects.gainTrait(TrainedTerrainLore),
    Effects.gainTrait(GroupCoercion),
  ],
})

export const Barkeep = Traits.defineTrait('background/barkeep', {
  name: 'Barkeep',
  description:
    "You have five specialties: hefting barrels, drinking, polishing steins, drinking, and drinking. You worked in a bar, where you learned how to hold your liquor and rowdily socialize.\n\nChoose two attribute boosts. One must be to Constitution or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Diplomacy](characteristic:skill/diplomacy) skill, and the Alcohol Lore skill. You gain the [Hobnobber](trait:feat/hobnobber) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectConstitutionOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedDiplomacy),
    Effects.gainTrait(TrainedAlcoholLore),
    Effects.gainTrait(Hobnobber),
  ],
})

export const Barrister = Traits.defineTrait('background/barrister', {
  name: 'Barrister',
  description:
    "Piles of legal manuals, stern teachers, and experience in the courtroom have instructed you in legal matters. You’re capable of mounting a prosecution or defense in court, and you tend to keep abreast of local laws, as you never can tell when you might need to know them on short notice.\n\nChoose two attribute boosts. One must be to Intelligence or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Diplomacy](characteristic:skill/diplomacy) skill, and the Legal Lore skill. You gain the [Group Impression](trait:feat/group-impression) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedDiplomacy),
    Effects.gainTrait(TrainedLegalLore),
    Effects.gainTrait(GroupImpression),
  ],
})

export const BountyHunter = Traits.defineTrait('background/bounty-hunter', {
  name: 'Bounty Hunter',
  description:
    "Bringing in lawbreakers lined your pockets. Maybe you had an altruistic motive and sought to bring in criminals to make the streets safer, or maybe the coin was motivation enough. Your techniques for hunting down criminals transfer easily to the life of an adventurer.\n\nChoose two attribute boosts. One must be to Strength or Wisdom, and one is a free attribute boost.\n\nYou're trained in the [Survival](characteristic:skill/survival) skill, and the Legal Lore skill. You gain the [Experienced Tracker](trait:feat/experienced-tracker) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedSurvival),
    Effects.gainTrait(TrainedLegalLore),
    Effects.gainTrait(ExperiencedTracker),
  ],
})

export const Charlatan = Traits.defineTrait('background/charlatan', {
  name: 'Charlatan',
  description:
    "You traveled from place to place, peddling false fortunes and snake oil in one town, pretending to be royalty in exile to seduce a wealthy heir in the next. Becoming an adventurer might be your next big scam or an attempt to put your talents to use for a greater cause. Perhaps it’s a bit of both, as you realize that after pretending to be a hero, you’ve become the mask.\n\nChoose two attribute boosts. One must be to Intelligence or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Deception](characteristic:skill/deception) skill, and the Underworld Lore skill. You gain the [Charming Liar](trait:feat/charming-liar) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedDeception),
    Effects.gainTrait(TrainedUnderworldLore),
    Effects.gainTrait(CharmingLiar),
  ],
})

export const Cook = Traits.defineTrait('background/cook', {
  name: 'Cook',
  description:
    "You grew up in the kitchens of a tavern or other dining establishment and excelled there, becoming an exceptional cook. Baking, cooking, a little brewing on the side—you’ve spent lots of time out of sight. It’s about time you went out into the world to catch some sights for yourself.\n\nChoose two attribute boosts. One must be to Constitution or Intelligence, and one is a free attribute boost.\n\nYou're trained in the [Survival](characteristic:skill/survival) skill, and the Cooking Lore skill. You gain the [Seasoned](trait:feat/seasoned) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectConstitutionOrIntelligenceBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedSurvival),
    Effects.gainTrait(TrainedCookingLore),
    Effects.gainTrait(Seasoned),
  ],
})

export const Criminal = Traits.defineTrait('background/criminal', {
  name: 'Criminal',
  description:
    "As an unscrupulous independent or as a member of an underworld organization, you lived a life of crime. You might have become an adventurer to seek redemption, to escape the law, or simply to get access to bigger and better loot.\n\nChoose two attribute boosts. One must be to Dexterity or Intelligence, and one is a free attribute boost.\n\nYou're trained in the [Stealth](characteristic:skill/stealth) skill, and the Underworld Lore skill. You gain the [Experienced Smuggler](trait:feat/experienced-smuggler) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectDexterityOrIntelligenceBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedStealth),
    Effects.gainTrait(TrainedUnderworldLore),
    Effects.gainTrait(ExperiencedSmuggler),
  ],
})

export const Cultist = Traits.defineTrait('background/cultist', {
  name: 'Cultist',
  description:
    "You were (or still are) a member of a cult whose rites may involve sacred dances to ensure a strong harvest or dire rituals that call upon dark powers. You might have taken up adventuring to further your cult’s aims, to initiate yourself into the world’s grander mysteries, or to flee unsavory practices or strictures.\n\nChoose two attribute boosts. One must be to Intelligence or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Occultism](characteristic:skill/occultism) skill, and a Lore skill related to your deity or cult. You gain the [Schooled in Secrets](trait:feat/schooled-in-secrets) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedOccultism),
    Effects.gainTrait(TrainedDeityLore),
    Effects.gainTrait(SchooledInSecrets),
  ],
})

export const Detective = Traits.defineTrait('background/detective', {
  name: 'Detective',
  description:
    "You solved crimes as a police inspector or took jobs for wealthy clients as a private investigator. You might have become an adventurer as part of your next big mystery, but likely it was due to the consequences or aftermath of a prior case.\n\nChoose two attribute boosts. One must be to Intelligence or Wisdom, and one is a free attribute boost.\n\nYou're trained in the [Society](characteristic:skill/society) skill, and the Underworld Lore skill. You gain the [Streetwise](trait:feat/streetwise) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedSociety),
    Effects.gainTrait(TrainedUnderworldLore),
    Effects.gainTrait(Streetwise),
  ],
})

export const Emissary = Traits.defineTrait('background/emissary', {
  name: 'Emissary',
  description:
    "As a diplomat or messenger, you traveled to lands far and wide. Communicating with new people and forming alliances were your stock and trade.\n\nChoose two attribute boosts. One must be to Intelligence or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Society](characteristic:skill/society) skill, and a Lore skill related to one city you've visited often. You gain the [Multilingual](trait:feat/multilingual) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedSociety),
    Effects.gainTrait(TrainedCityLore),
    Effects.gainTrait(Multilingual),
  ],
})

export const Entertainer = Traits.defineTrait('background/entertainer', {
  name: 'Entertainer',
  description:
    "Through an education in the arts or sheer dogged practice, you learned to entertain crowds. You might have been an actor, a dancer, a musician, a street magician, or any other sort of performer.\n\nChoose two attribute boosts. One must be to Dexterity or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Performance](characteristic:skill/performance) skill, and the Theater Lore skill. You gain the [Fascinating Performance](trait:feat/fascinating-performance) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectDexterityOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedPerformance),
    Effects.gainTrait(TrainedTheaterLore),
    Effects.gainTrait(FascinatingPerformance),
  ],
})

export const Farmhand = Traits.defineTrait('background/farmhand', {
  name: 'Farmhand',
  description:
    "With a strong back and an understanding of seasonal cycles, you tilled the land and tended crops. Your farm could have been razed by invaders, you could have lost the family tying you to the land, or you might have simply tired of the drudgery, but at some point you became an adventurer.\n\nChoose two attribute boosts. One must be to Constitution or Wisdom, and one is a free attribute boost.\n\nYou're trained in the [Athletics](characteristic:skill/athletics) skill, and the Farming Lore skill. You gain the [Assurance](trait:feat/assurance) skill feat with [Athletics](characteristic:skill/athletics).",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectConstitutionOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedAthletics),
    Effects.gainTrait(TrainedFarmingLore),
    Effects.gainTrait(Assurance),
  ],
})

export const FieldMedic = Traits.defineTrait('background/field-medic', {
  name: 'Field Medic',
  description:
    "In the chaotic rush of battle, you learned to adapt to rapidly changing conditions as you administered to battle casualties. You patched up soldiers, guards, or other combatants, and learned a fair amount about the logistics of war.\n\nChoose two attribute boosts. One must be to Constitution or Wisdom, and one is a free attribute boost.\n\nYou're trained in the [Medicine](characteristic:skill/medicine) skill, and the Warfare Lore skill. You gain the [Battle Medicine](trait:feat/battle-medicine) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectConstitutionOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedMedicine),
    Effects.gainTrait(TrainedWarfareLore),
    Effects.gainTrait(BattleMedicine),
  ],
})

export const FortuneTeller = Traits.defineTrait('background/fortune-teller', {
  name: 'Fortune Teller',
  description:
    "The strands of fate are clear to you, as you have learned many traditional forms by which laypeople can divine the future. You might have used these skills to guide your community, or simply to make money. But even the slightest peek into these practices connects you to the occult mysteries of the universe.\n\nChoose two attribute boosts. One must be to Intelligence or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Occultism](characteristic:skill/occultism) skill, and the Fortune-Telling Lore skill. You gain the [Oddity Identification](trait:feat/oddity-identification) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedOccultism),
    Effects.gainTrait(TrainedFortuneTellingLore),
    Effects.gainTrait(OddityIdentification),
  ],
})

export const Gambler = Traits.defineTrait('background/gambler', {
  name: 'Gambler',
  description:
    "The thrill of the win drew you into games of chance. This might have been a lucrative sideline that paled in comparison to the real risks of adventuring, or you might have fallen on hard times due to your gambling and pursued adventuring as a way out of a spiral.\n\nChoose two attribute boosts. One must be to Dexterity or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Deception](characteristic:skill/deception) skill, and the Games Lore skill. You gain the [Lie to Me](trait:feat/lie-to-me) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectDexterityOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedDeception),
    Effects.gainTrait(TrainedGamesLore),
    Effects.gainTrait(LieToMe),
  ],
})

export const Gladiator = Traits.defineTrait('background/gladiator', {
  name: 'Gladiator',
  description:
    "The bloody games of the arena taught you the art of combat. Before you attained true fame, you departed—or escaped—the arena to explore the world. Your skill at drawing both blood and a crowd’s attention pay off in a new adventuring life.\n\nChoose two attribute boosts. One must be to Strength or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Performance](characteristic:skill/performance) skill, and the Gladiatorial Lore skill. You gain the [Impressive Performance](trait:feat/impressive-performance) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedPerformance),
    Effects.gainTrait(TrainedGladiatorialLore),
    Effects.gainTrait(ImpressivePerformance),
  ],
})

export const Guard = Traits.defineTrait('background/guard', {
  name: 'Guard',
  description:
    "You served in the guard, out of either patriotism or the need for coin. Either way, you know how to get a difficult suspect to talk. However you left the guard, you might think of adventuring as a way to use your skills on a wider stage.\n\nChoose two attribute boosts. One must be to Strength or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Intimidation](characteristic:skill/intimidation) skill, and the Legal Lore skill or Warfare Lore skill. You gain the [Quick Coercion](trait:feat/quick-coercion) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedIntimidation),
    Effects.gainCharacterOption(SelectGuardLore),
    Effects.gainTrait(QuickCoercion),
  ],
})

export const Herbalist = Traits.defineTrait('background/herbalist', {
  name: 'Herbalist',
  description:
    "As a formally trained apothecary or a rural practitioner of folk medicine, you learned the healing properties of various herbs. You’re adept at collecting the right natural cures in all sorts of environments and preparing them properly.\n\nChoose two attribute boosts. One must be to Constitution or Wisdom, and one is a free attribute boost.\n\nYou're trained in the [Nature](characteristic:skill/nature) skill, and the Herbalism Lore skill. You gain the [Natural Medicine](trait:feat/natural-medicine) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectConstitutionOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedNature),
    Effects.gainTrait(TrainedHerbalismLore),
    Effects.gainTrait(NaturalMedicine),
  ],
})

export const Hermit = Traits.defineTrait('background/hermit', {
  name: 'Hermit',
  description:
    "In an isolated place—like a cave, remote oasis, or secluded mansion—you lived a life of solitude. Adventuring might represent your first foray out among other people in some time. This might be a welcome reprieve from solitude or an unwanted change, but in either case, you’re likely still rough around the edges.\n\nChoose two attribute boosts. One must be to Constitution or Intelligence, and one is a free attribute boost.\n\nYou're trained in your choice of either the [Nature](characteristic:skill/nature) or the [Occultism](characteristic:skill/occultism) skill, as well as a Lore skill related to the terrain you lived in as a hermit (such as Cave Lore or Desert Lore). You gain the [Dubious Knowledge](trait:feat/dubious-knowledge) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectConstitutionOrIntelligenceBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainCharacterOption(SelectHermitSkill),
    Effects.gainTrait(TrainedTerrainLore),
    Effects.gainTrait(DubiousKnowledge),
  ],
})

export const Hunter = Traits.defineTrait('background/hunter', {
  name: 'Hunter',
  description:
    "You stalked and took down animals and other creatures of the wild. Skinning animals, harvesting their flesh, and cooking them were also part of your training, all of which can give you useful resources while you adventure.\n\nChoose two attribute boosts. One must be to Dexterity or Wisdom, and one is a free attribute boost.\n\nYou're trained in the [Survival](characteristic:skill/survival) skill, and the Tanning Lore skill. You gain the [Survey Wildlife](trait:feat/survey-wildlife) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectDexterityOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedSurvival),
    Effects.gainTrait(TrainedTanningLore),
    Effects.gainTrait(SurveyWildlife),
  ],
})

export const Laborer = Traits.defineTrait('background/laborer', {
  name: 'Laborer',
  description:
    "You’ve spent years performing arduous physical labor. It was a difficult life, but you somehow survived. You may have embraced adventuring as an easier method to make your way in the world, or you might adventure under someone else’s command.\n\nChoose two attribute boosts. One must be to Strength or Constitution, and one is a free attribute boost.\n\nYou're trained in the [Athletics](characteristic:skill/athletics) skill, and the Labor Lore skill. You gain the [Hefty Hauler](trait:feat/hefty-hauler) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrConstitutionBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedAthletics),
    Effects.gainTrait(TrainedLaborLore),
    Effects.gainTrait(HeftyHauler),
  ],
})

export const MartialDisciple = Traits.defineTrait('background/martial-disciple', {
  name: 'Martial Disciple',
  description:
    "You dedicated yourself to intense training and rigorous study to become a great warrior. The school you attended might have been a traditionalist monastery, an elite military academy, or the local branch of a prestigious mercenary organization.\n\nChoose two attribute boosts. One must be to Strength or Dexterity, and one is a free attribute boost.\n\nYou're trained in your choice of either the [Acrobatics](characteristic:skill/acrobatics) or the [Athletics](characteristic:skill/athletics) skill, as well as the Warfare Lore skill. You gain a skill feat: [Cat Fall](trait:feat/cat-fall) if you chose [Acrobatics](characteristic:skill/acrobatics) or [Quick Jump](trait:feat/quick-jump) if you chose [Athletics](characteristic:skill/athletics).",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrDexterityBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainCharacterOption(SelectMartialDiscipleTraining),
    Effects.gainTrait(TrainedWarfareLore),
  ],
})

export const Merchant = Traits.defineTrait('background/merchant', {
  name: 'Merchant',
  description:
    "In a dusty shop, market stall, or merchant caravan, you bartered wares for coin and trade goods. The skills you picked up still apply in the adventuring life, in which a good deal on a suit of armor could prevent your death.\n\nChoose two attribute boosts. One must be to Intelligence or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Diplomacy](characteristic:skill/diplomacy) skill, and the Mercantile Lore skill. You gain the [Bargain Hunter](trait:feat/bargain-hunter) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedDiplomacy),
    Effects.gainTrait(TrainedMercantileLore),
    Effects.gainTrait(BargainHunter),
  ],
})

export const Miner = Traits.defineTrait('background/miner', {
  name: 'Miner',
  description:
    "You earned a living wrenching precious minerals from the lightless depths of the earth. Adventuring might have seemed lucrative or glamorous compared to this backbreaking labor— and if you have to head back underground, this time you plan to do so armed with a real weapon instead of a miner’s pick.\n\nChoose two attribute boosts. One must be to Strength or Wisdom, and one is a free attribute boost.\n\nYou're trained in the [Survival](characteristic:skill/survival) skill, and the Mining Lore skill. You gain the [Terrain Expertise](trait:feat/terrain-expertise) skill feat with underground terrain.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedSurvival),
    Effects.gainTrait(TrainedMiningLore),
    Effects.gainTrait(TerrainExpertise),
  ],
})

export const Noble = Traits.defineTrait('background/noble', {
  name: 'Noble',
  description:
    "To the common folk, the life of a noble seems one of idyllic luxury, but growing up as a noble or member of the aspiring gentry, you know the reality: a noble’s lot is obligation and intrigue. Whether you seek to escape your duties by adventuring or to better your station, you have traded silks and pageantry for an adventurer’s life.\n\nChoose two attribute boosts. One must be to Intelligence or Charisma, and one is a free attribute boost.\n\nYou're trained in the [Society](characteristic:skill/society) skill, and the Genealogy Lore skill or Heraldry Lore skill. You gain the [Courtly Graces](trait:feat/courtly-graces) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrCharismaBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedSociety),
    Effects.gainCharacterOption(SelectNobleLore),
    Effects.gainTrait(CourtlyGraces),
  ],
})

export const Nomad = Traits.defineTrait('background/nomad', {
  name: 'Nomad',
  description:
    "Traveling far and wide, you picked up basic tactics for surviving on the road and in unknown lands, getting by with few supplies and even fewer comforts. As an adventurer, you travel still, often into even more dangerous places.\n\nChoose two attribute boosts. One must be to Constitution or Wisdom, and one is a free attribute boost.\n\nYou're trained in the [Survival](characteristic:skill/survival) skill, and a Lore skill related to one terrain you traveled in (such as Desert Lore or Swamp Lore). You gain the [Assurance](trait:feat/assurance) skill feat with [Survival](characteristic:skill/survival).",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectConstitutionOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedSurvival),
    Effects.gainTrait(TrainedTerrainLore),
    Effects.gainTrait(Assurance),
  ],
})

export const Prisoner = Traits.defineTrait('background/prisoner', {
  name: 'Prisoner',
  description:
    "You might have been imprisoned for crimes (whether you were guilty or not), or enslaved for some part of your upbringing. In your adventuring life, you take full advantage of your newfound freedom.\n\nChoose two attribute boosts. One must be to Strength or Constitution, and one is a free attribute boost.\n\nYou're trained in the [Stealth](characteristic:skill/stealth) skill, and the Underworld Lore skill. You gain the [Experienced Smuggler](trait:feat/experienced-smuggler) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrConstitutionBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedStealth),
    Effects.gainTrait(TrainedUnderworldLore),
    Effects.gainTrait(ExperiencedSmuggler),
  ],
})

export const RaisedByBelief = Traits.defineTrait('background/raised-by-belief', {
  name: 'Raised by Belief',
  description:
    'Whether in a monastery, a religious household, or just as part of your everyday life, your upbringing was steeped in the traditions of a faith or philosophy. You might remain committed or you may have turned from your childhood creed, but your skills are still founded in your devotion.\n\nChoose two ability boosts. One must be to an attribute specified in your deity’s Divine Attribute and the other is a free attribute boost.\n\nYou’re trained in your deity’s associated skill, and you gain [Assurance](trait:feat/assurance) with that skill. You gain a [Lore](content:skills/lore) skill with a subcategory associated with your deity (Abadar Lore, for instance).',
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainTrait(TrainedDeityLore),
    Effects.gainTrait(Assurance),
  ],
})

export const Sailor = Traits.defineTrait('background/sailor', {
  name: 'Sailor',
  description:
    "You heard the call of the sea from a young age. Perhaps you signed onto a merchant’s vessel, joined the navy, or even fell in with a crew of pirates and scalawags.\n\nChoose two attribute boosts. One must be to Strength or Dexterity, and one is a free attribute boost.\n\nYou're trained in the [Athletics](characteristic:skill/athletics) skill, and the Sailing Lore skill. You gain the [Underwater Marauder](trait:feat/underwater-marauder) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrDexterityBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedAthletics),
    Effects.gainTrait(TrainedSailingLore),
    Effects.gainTrait(UnderwaterMarauder),
  ],
})

export const Scholar = Traits.defineTrait('background/scholar', {
  name: 'Scholar',
  description:
    'You have a knack for learning, and sequestered yourself from the outside world to learn all you could. You read about so many wondrous places and things in your books, and always dreamed about one day seeing the real things. Eventually, that curiosity led you to leave your studies and become an adventurer.\n\nChoose two attribute boosts. One must be to Intelligence or Wisdom, and one is a free attribute boost.\n\nYou’re trained in your choice of the [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), or [Religion](characteristic:skill/religion) skill, and the Academia Lore skill. You gain the [Assurance](trait:feat/assurance) skill feat in your chosen skill.',
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainCharacterOption(SelectScholarSkill),
    Effects.gainTrait(TrainedAcademiaLore),
    Effects.gainTrait(Assurance),
  ],
})

export const Scout = Traits.defineTrait('background/scout', {
  name: 'Scout',
  description:
    "You called the wilderness home as you found trails and guided travelers. Your wanderlust could have called you to the adventuring life, or perhaps you served as a scout for soldiers and found you liked battle.\n\nChoose two attribute boosts. One must be to Dexterity or Wisdom, and one is a free attribute boost.\n\nYou're trained in the [Survival](characteristic:skill/survival) skill, and a Lore skill related to one terrain you scouted in (such as Forest Lore or Cavern Lore). You gain the [Forager](trait:feat/forager) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectDexterityOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedSurvival),
    Effects.gainTrait(TrainedTerrainLore),
    Effects.gainTrait(Forager),
  ],
})

export const StreetUrchin = Traits.defineTrait('background/street-urchin', {
  name: 'Street Urchin',
  description:
    "You eked out a living by picking pockets on the streets of a major city, never knowing where you’d find your next meal. While some folk adventure for the glory, you do so to survive.\n\nChoose two attribute boosts. One must be to Dexterity or Constitution, and one is a free attribute boost.\n\nYou're trained in the [Thievery](characteristic:skill/thievery) skill, and a Lore skill for the city you lived in as a street urchin (such as Absalom Lore or Magnimar Lore). You gain the [Pickpocket](trait:feat/pickpocket) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectDexterityOrConstitutionBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedThievery),
    Effects.gainTrait(TrainedCityLore),
    Effects.gainTrait(Pickpocket),
  ],
})

export const Teacher = Traits.defineTrait('background/teacher', {
  name: 'Teacher',
  description:
    "You are incredibly knowledgeable, skilled, and perhaps even trained to teach children and adults about the world and its wonders. From books to classes, you’re committed to imparting knowledge to all. Not everything can be taught or learned from a book, though, so you’ve become an adventurer to learn subjects more directly and bring that wisdom back to your students.\n\nChoose two attribute boosts. One must be to Intelligence or Wisdom, and one is a free attribute boost.\n\nYou're trained in your choice of either the [Performance](characteristic:skill/performance) or the [Society](characteristic:skill/society) skill, as well as the Academia Lore skill. You gain the [Experienced Professional](trait:feat/experienced-professional) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectIntelligenceOrWisdomBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainCharacterOption(SelectTeacherSkill),
    Effects.gainTrait(TrainedAcademiaLore),
    Effects.gainTrait(ExperiencedProfessional),
  ],
})

export const Tinker = Traits.defineTrait('background/tinker', {
  name: 'Tinker',
  description:
    "Creating all sorts of minor inventions scratches your itch for problem-solving. Your engineering skills take a particularly creative bent, and no one know what you’ll come up with next. It might be a genius device with tremendous potential... or it might explode.\n\nChoose two attribute boosts. One must be to Dexterity or Intelligence, and one is a free attribute boost.\n\nYou're trained in the [Crafting](characteristic:skill/crafting) skill, and the Engineering Lore skill. You gain the [Specialty Crafting](trait:feat/specialty-crafting) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectDexterityOrIntelligenceBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedCrafting),
    Effects.gainTrait(TrainedEngineeringLore),
    Effects.gainTrait(SpecialtyCrafting),
  ],
})

export const Warrior = Traits.defineTrait('background/warrior', {
  name: 'Warrior',
  description:
    "In your younger days, you waded into battle as a mercenary, a warrior defending a nomadic people, or a member of a militia or army. You might have wanted to break out from the regimented structure of these forces, or you could have always been as independent a warrior as you are now.\n\nChoose two attribute boosts. One must be to Strength or Constitution, and one is a free attribute boost.\n\nYou're trained in the [Intimidation](characteristic:skill/intimidation) skill, and the Warfare Lore skill. You gain the [Intimidating Glare](trait:feat/intimidating-glare) skill feat.",
  tags: [Background],
  effects: [
    Effects.gainCharacterOption(SelectStrengthOrConstitutionBackgroundBoost),
    Effects.gainCharacterOption(SelectBackgroundBoost),
    Effects.gainTrait(TrainedIntimidation),
    Effects.gainTrait(TrainedWarfareLore),
    Effects.gainTrait(IntimidatingGlare),
  ],
})

export const AllBackgroundEntities = [
  Acolyte,
  Acrobat,
  AnimalWhisperer,
  Artisan,
  Artist,
  Bandit,
  Barkeep,
  Barrister,
  BountyHunter,
  Charlatan,
  Cook,
  Criminal,
  Cultist,
  Detective,
  Emissary,
  Entertainer,
  Farmhand,
  FieldMedic,
  FortuneTeller,
  Gambler,
  Gladiator,
  Guard,
  Herbalist,
  Hermit,
  Hunter,
  Laborer,
  MartialDisciple,
  Merchant,
  Miner,
  Noble,
  Nomad,
  Prisoner,
  RaisedByBelief,
  Sailor,
  Scholar,
  Scout,
  StreetUrchin,
  Teacher,
  Tinker,
  Warrior,
  MartialDiscipleAcrobatics,
  MartialDiscipleAthletics,
  ...AllLoreEntities,
]
