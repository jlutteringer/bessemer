import { Tags, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { CharacterOptions } from '@simulacrum/ruleset'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/tag/skill-proficiency'
import * as ArtisansTools from '@simulacrum/ruleset-dnd5e/tag/artisans-tools'
import * as Tools from '@simulacrum/ruleset-dnd5e/tag/tool'
import * as Feats from '@simulacrum/ruleset-dnd5e/tag/feat'
import * as AbilityScoreIncreases from '@simulacrum/ruleset-dnd5e/tag/ability-score-increase'

export const Background = Tags.defineTraitTag('background', { name: 'Background' })

export const SelectBackground = CharacterOptions.selectTraitOption('background/select', {
  name: 'Background',
  filter: { tags: [Background] },
})

const AcolyteAbilityScores = AbilityScoreIncreases.forBackground('background/acolyte', [
  AbilityScoreIncreases.Intelligence,
  AbilityScoreIncreases.Wisdom,
  AbilityScoreIncreases.Charisma,
])

export const Acolyte = Traits.defineTrait('background/acolyte', {
  name: 'Acolyte',
  description:
    "You devoted yourself to service in a temple, learning sacred rites and channeling a sliver of divine power.\n\n**Ability Scores:** Intelligence, Wisdom, Charisma\n\n**Feat:** Magic Initiate (Cleric)\n\n**Skill Proficiencies:** Insight, Religion\n\n**Tool Proficiency:** Calligrapher's Supplies",
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(AcolyteAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Insight),
    CharacterEffects.gainTrait(SkillProficiencies.Religion),
    CharacterEffects.gainTrait(Feats.MagicInitiateCleric),
    CharacterEffects.gainTrait(ArtisansTools.CalligraphersSupplies),
  ],
})

const ArtisanAbilityScores = AbilityScoreIncreases.forBackground('background/artisan', [
  AbilityScoreIncreases.Strength,
  AbilityScoreIncreases.Dexterity,
  AbilityScoreIncreases.Intelligence,
])

export const Artisan = Traits.defineTrait('background/artisan', {
  name: 'Artisan',
  description:
    "You began as an apprentice to a crafter, learning to make fine goods and to deal with demanding customers.\n\n**Ability Scores:** Strength, Dexterity, Intelligence\n\n**Feat:** Crafter\n\n**Skill Proficiencies:** Investigation, Persuasion\n\n**Tool Proficiency:** one kind of Artisan's Tools",
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(ArtisanAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Investigation),
    CharacterEffects.gainTrait(SkillProficiencies.Persuasion),
    CharacterEffects.gainTrait(Feats.Crafter),
    CharacterEffects.gainCharacterOption(ArtisansTools.SelectArtisansTools),
  ],
})

const CharlatanAbilityScores = AbilityScoreIncreases.forBackground('background/charlatan', [
  AbilityScoreIncreases.Dexterity,
  AbilityScoreIncreases.Constitution,
  AbilityScoreIncreases.Charisma,
])

export const Charlatan = Traits.defineTrait('background/charlatan', {
  name: 'Charlatan',
  description:
    'You made your way in taverns and back alleys, selling forgeries, false remedies, and tall tales to the gullible.\n\n**Ability Scores:** Dexterity, Constitution, Charisma\n\n**Feat:** Skilled\n\n**Skill Proficiencies:** Deception, Sleight of Hand\n\n**Tool Proficiency:** Forgery Kit',
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(CharlatanAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Deception),
    CharacterEffects.gainTrait(SkillProficiencies.SleightOfHand),
    CharacterEffects.gainTrait(Feats.Skilled),
    CharacterEffects.gainTrait(Tools.ForgeryKit),
  ],
})

const CriminalAbilityScores = AbilityScoreIncreases.forBackground('background/criminal', [
  AbilityScoreIncreases.Dexterity,
  AbilityScoreIncreases.Constitution,
  AbilityScoreIncreases.Intelligence,
])

export const Criminal = Traits.defineTrait('background/criminal', {
  name: 'Criminal',
  description:
    "You earned your coin in dark alleys, cutting purses and burgling shops, perhaps as part of a thieves' guild.\n\n**Ability Scores:** Dexterity, Constitution, Intelligence\n\n**Feat:** Alert\n\n**Skill Proficiencies:** Sleight of Hand, Stealth\n\n**Tool Proficiency:** Thieves' Tools",
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(CriminalAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.SleightOfHand),
    CharacterEffects.gainTrait(SkillProficiencies.Stealth),
    CharacterEffects.gainTrait(Feats.Alert),
    CharacterEffects.gainTrait(Tools.ThievesTools),
  ],
})

const EntertainerAbilityScores = AbilityScoreIncreases.forBackground('background/entertainer', [
  AbilityScoreIncreases.Strength,
  AbilityScoreIncreases.Dexterity,
  AbilityScoreIncreases.Charisma,
])

export const Entertainer = Traits.defineTrait('background/entertainer', {
  name: 'Entertainer',
  description:
    'You spent your youth with traveling fairs and carnivals, learning to perform and to hold a crowd.\n\n**Ability Scores:** Strength, Dexterity, Charisma\n\n**Feat:** Musician\n\n**Skill Proficiencies:** Acrobatics, Performance\n\n**Tool Proficiency:** one kind of Musical Instrument',
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(EntertainerAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Acrobatics),
    CharacterEffects.gainTrait(SkillProficiencies.Performance),
    CharacterEffects.gainTrait(Feats.Musician),
    CharacterEffects.gainCharacterOption(Tools.SelectMusicalInstrument),
  ],
})

const FarmerAbilityScores = AbilityScoreIncreases.forBackground('background/farmer', [
  AbilityScoreIncreases.Strength,
  AbilityScoreIncreases.Constitution,
  AbilityScoreIncreases.Wisdom,
])

export const Farmer = Traits.defineTrait('background/farmer', {
  name: 'Farmer',
  description:
    "You grew up close to the land, tending crops and animals and learning patience and hardiness.\n\n**Ability Scores:** Strength, Constitution, Wisdom\n\n**Feat:** Tough\n\n**Skill Proficiencies:** Animal Handling, Nature\n\n**Tool Proficiency:** Carpenter's Tools",
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(FarmerAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.AnimalHandling),
    CharacterEffects.gainTrait(SkillProficiencies.Nature),
    CharacterEffects.gainTrait(Feats.Tough),
    CharacterEffects.gainTrait(ArtisansTools.CarpentersTools),
  ],
})

const GuardAbilityScores = AbilityScoreIncreases.forBackground('background/guard', [
  AbilityScoreIncreases.Strength,
  AbilityScoreIncreases.Intelligence,
  AbilityScoreIncreases.Wisdom,
])

export const Guard = Traits.defineTrait('background/guard', {
  name: 'Guard',
  description:
    'You stood watch on walls and gates, trained to spot trouble and to keep an eye on the crowd.\n\n**Ability Scores:** Strength, Intelligence, Wisdom\n\n**Feat:** Alert\n\n**Skill Proficiencies:** Athletics, Perception\n\n**Tool Proficiency:** one kind of Gaming Set',
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(GuardAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Athletics),
    CharacterEffects.gainTrait(SkillProficiencies.Perception),
    CharacterEffects.gainTrait(Feats.Alert),
    CharacterEffects.gainCharacterOption(Tools.SelectGamingSet),
  ],
})

const GuideAbilityScores = AbilityScoreIncreases.forBackground('background/guide', [
  AbilityScoreIncreases.Dexterity,
  AbilityScoreIncreases.Constitution,
  AbilityScoreIncreases.Wisdom,
])

export const Guide = Traits.defineTrait('background/guide', {
  name: 'Guide',
  description:
    "You came of age outdoors, far from settled lands, leading others through the wilds and learning nature's magic.\n\n**Ability Scores:** Dexterity, Constitution, Wisdom\n\n**Feat:** Magic Initiate (Druid)\n\n**Skill Proficiencies:** Stealth, Survival\n\n**Tool Proficiency:** Cartographer's Tools",
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(GuideAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Stealth),
    CharacterEffects.gainTrait(SkillProficiencies.Survival),
    CharacterEffects.gainTrait(Feats.MagicInitiateDruid),
    CharacterEffects.gainTrait(ArtisansTools.CartographersTools),
  ],
})

const HermitAbilityScores = AbilityScoreIncreases.forBackground('background/hermit', [
  AbilityScoreIncreases.Constitution,
  AbilityScoreIncreases.Wisdom,
  AbilityScoreIncreases.Charisma,
])

export const Hermit = Traits.defineTrait('background/hermit', {
  name: 'Hermit',
  description:
    'You spent your early years in seclusion, tending to others with herbal remedies and pondering the mysteries of creation.\n\n**Ability Scores:** Constitution, Wisdom, Charisma\n\n**Feat:** Healer\n\n**Skill Proficiencies:** Medicine, Religion\n\n**Tool Proficiency:** Herbalism Kit',
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(HermitAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Medicine),
    CharacterEffects.gainTrait(SkillProficiencies.Religion),
    CharacterEffects.gainTrait(Feats.Healer),
    CharacterEffects.gainTrait(Tools.HerbalismKit),
  ],
})

const MerchantAbilityScores = AbilityScoreIncreases.forBackground('background/merchant', [
  AbilityScoreIncreases.Constitution,
  AbilityScoreIncreases.Intelligence,
  AbilityScoreIncreases.Charisma,
])

export const Merchant = Traits.defineTrait('background/merchant', {
  name: 'Merchant',
  description:
    "You were apprenticed to a trader or caravan master, learning to haggle, move goods, and find the next opportunity.\n\n**Ability Scores:** Constitution, Intelligence, Charisma\n\n**Feat:** Lucky\n\n**Skill Proficiencies:** Animal Handling, Persuasion\n\n**Tool Proficiency:** Navigator's Tools",
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(MerchantAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.AnimalHandling),
    CharacterEffects.gainTrait(SkillProficiencies.Persuasion),
    CharacterEffects.gainTrait(Feats.Lucky),
    CharacterEffects.gainTrait(Tools.NavigatorsTools),
  ],
})

const NobleAbilityScores = AbilityScoreIncreases.forBackground('background/noble', [
  AbilityScoreIncreases.Strength,
  AbilityScoreIncreases.Intelligence,
  AbilityScoreIncreases.Charisma,
])

export const Noble = Traits.defineTrait('background/noble', {
  name: 'Noble',
  description:
    'You were raised in a castle among wealth, power, and privilege, taught to lead and to carry your family name.\n\n**Ability Scores:** Strength, Intelligence, Charisma\n\n**Feat:** Skilled\n\n**Skill Proficiencies:** History, Persuasion\n\n**Tool Proficiency:** one kind of Gaming Set',
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(NobleAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.History),
    CharacterEffects.gainTrait(SkillProficiencies.Persuasion),
    CharacterEffects.gainTrait(Feats.Skilled),
    CharacterEffects.gainCharacterOption(Tools.SelectGamingSet),
  ],
})

const SageAbilityScores = AbilityScoreIncreases.forBackground('background/sage', [
  AbilityScoreIncreases.Constitution,
  AbilityScoreIncreases.Intelligence,
  AbilityScoreIncreases.Wisdom,
])

export const Sage = Traits.defineTrait('background/sage', {
  name: 'Sage',
  description:
    "You spent your formative years among manuscripts and libraries, studying lore and the rudiments of magic.\n\n**Ability Scores:** Constitution, Intelligence, Wisdom\n\n**Feat:** Magic Initiate (Wizard)\n\n**Skill Proficiencies:** Arcana, History\n\n**Tool Proficiency:** Calligrapher's Supplies",
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(SageAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Arcana),
    CharacterEffects.gainTrait(SkillProficiencies.History),
    CharacterEffects.gainTrait(Feats.MagicInitiateWizard),
    CharacterEffects.gainTrait(ArtisansTools.CalligraphersSupplies),
  ],
})

const SailorAbilityScores = AbilityScoreIncreases.forBackground('background/sailor', [
  AbilityScoreIncreases.Strength,
  AbilityScoreIncreases.Dexterity,
  AbilityScoreIncreases.Wisdom,
])

export const Sailor = Traits.defineTrait('background/sailor', {
  name: 'Sailor',
  description:
    "You lived as a seafarer, weathering storms and brawling in port taverns.\n\n**Ability Scores:** Strength, Dexterity, Wisdom\n\n**Feat:** Tavern Brawler\n\n**Skill Proficiencies:** Acrobatics, Perception\n\n**Tool Proficiency:** Navigator's Tools",
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(SailorAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Acrobatics),
    CharacterEffects.gainTrait(SkillProficiencies.Perception),
    CharacterEffects.gainTrait(Feats.TavernBrawler),
    CharacterEffects.gainTrait(Tools.NavigatorsTools),
  ],
})

const ScribeAbilityScores = AbilityScoreIncreases.forBackground('background/scribe', [
  AbilityScoreIncreases.Dexterity,
  AbilityScoreIncreases.Intelligence,
  AbilityScoreIncreases.Wisdom,
])

export const Scribe = Traits.defineTrait('background/scribe', {
  name: 'Scribe',
  description:
    "You spent years copying texts in a scriptorium or government office, with an eye for detail and error.\n\n**Ability Scores:** Dexterity, Intelligence, Wisdom\n\n**Feat:** Skilled\n\n**Skill Proficiencies:** Investigation, Perception\n\n**Tool Proficiency:** Calligrapher's Supplies",
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(ScribeAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Investigation),
    CharacterEffects.gainTrait(SkillProficiencies.Perception),
    CharacterEffects.gainTrait(Feats.Skilled),
    CharacterEffects.gainTrait(ArtisansTools.CalligraphersSupplies),
  ],
})

const SoldierAbilityScores = AbilityScoreIncreases.forBackground('background/soldier', [
  AbilityScoreIncreases.Strength,
  AbilityScoreIncreases.Dexterity,
  AbilityScoreIncreases.Constitution,
])

export const Soldier = Traits.defineTrait('background/soldier', {
  name: 'Soldier',
  description:
    'You trained for war from a young age, learning to survive on the battlefield and to strike hard.\n\n**Ability Scores:** Strength, Dexterity, Constitution\n\n**Feat:** Savage Attacker\n\n**Skill Proficiencies:** Athletics, Intimidation\n\n**Tool Proficiency:** one kind of Gaming Set',
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(SoldierAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Athletics),
    CharacterEffects.gainTrait(SkillProficiencies.Intimidation),
    CharacterEffects.gainTrait(Feats.SavageAttacker),
    CharacterEffects.gainCharacterOption(Tools.SelectGamingSet),
  ],
})

const WayfarerAbilityScores = AbilityScoreIncreases.forBackground('background/wayfarer', [
  AbilityScoreIncreases.Dexterity,
  AbilityScoreIncreases.Wisdom,
  AbilityScoreIncreases.Charisma,
])

export const Wayfarer = Traits.defineTrait('background/wayfarer', {
  name: 'Wayfarer',
  description:
    "You grew up on the streets among other castoffs, surviving on your wits and a little luck.\n\n**Ability Scores:** Dexterity, Wisdom, Charisma\n\n**Feat:** Lucky\n\n**Skill Proficiencies:** Insight, Stealth\n\n**Tool Proficiency:** Thieves' Tools",
  tags: [Background],
  effects: [
    CharacterEffects.gainCharacterOption(WayfarerAbilityScores.option),
    CharacterEffects.gainTrait(SkillProficiencies.Insight),
    CharacterEffects.gainTrait(SkillProficiencies.Stealth),
    CharacterEffects.gainTrait(Feats.Lucky),
    CharacterEffects.gainTrait(Tools.ThievesTools),
  ],
})

// The traits the Backgrounds' ability score choices can lead to, for the ruleset to register
export const AbilityScoreIncreaseTraits = [
  AcolyteAbilityScores,
  ArtisanAbilityScores,
  CharlatanAbilityScores,
  CriminalAbilityScores,
  EntertainerAbilityScores,
  FarmerAbilityScores,
  GuardAbilityScores,
  GuideAbilityScores,
  HermitAbilityScores,
  MerchantAbilityScores,
  NobleAbilityScores,
  SageAbilityScores,
  SailorAbilityScores,
  ScribeAbilityScores,
  SoldierAbilityScores,
  WayfarerAbilityScores,
].flatMap((it) => it.traits)
