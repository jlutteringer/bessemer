import { Archetypes, Effects, Traits } from '@simulacrum/ruleset'
import { CharacterOptions } from '@simulacrum/ruleset'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/archetype/skill-proficiency'
import * as ArtisansTools from '@simulacrum/ruleset-dnd5e/archetype/artisans-tools'
import * as Tools from '@simulacrum/ruleset-dnd5e/archetype/tool'
import * as Feats from '@simulacrum/ruleset-dnd5e/archetype/feat'
import * as AbilityScoreIncreases from '@simulacrum/ruleset-dnd5e/archetype/ability-score-increase'

export const Background = Archetypes.defineArchetype('background', { name: 'Background' })

export const SelectBackground = CharacterOptions.selectTraitOption('background/select', { archetypes: [Background] })

const AcolyteAbilityScores = AbilityScoreIncreases.forBackground('background/acolyte', [
  AbilityScoreIncreases.Intelligence,
  AbilityScoreIncreases.Wisdom,
  AbilityScoreIncreases.Charisma,
])

export const Acolyte = Traits.defineTrait('background/acolyte', {
  name: 'Acolyte',
  description:
    "<p>You devoted yourself to service in a temple, learning sacred rites and channeling a sliver of divine power.</p><p><strong>Ability Scores:</strong> Intelligence, Wisdom, Charisma</p><p><strong>Feat:</strong> Magic Initiate (Cleric)</p><p><strong>Skill Proficiencies:</strong> Insight, Religion</p><p><strong>Tool Proficiency:</strong> Calligrapher's Supplies</p>",
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(AcolyteAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Insight),
    Effects.gainTrait(SkillProficiencies.Religion),
    Effects.gainTrait(Feats.MagicInitiateCleric),
    Effects.gainTrait(ArtisansTools.CalligraphersSupplies),
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
    "<p>You began as an apprentice to a crafter, learning to make fine goods and to deal with demanding customers.</p><p><strong>Ability Scores:</strong> Strength, Dexterity, Intelligence</p><p><strong>Feat:</strong> Crafter</p><p><strong>Skill Proficiencies:</strong> Investigation, Persuasion</p><p><strong>Tool Proficiency:</strong> one kind of Artisan's Tools</p>",
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(ArtisanAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Investigation),
    Effects.gainTrait(SkillProficiencies.Persuasion),
    Effects.gainTrait(Feats.Crafter),
    Effects.gainCharacterOption(ArtisansTools.SelectArtisansTools),
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
    '<p>You made your way in taverns and back alleys, selling forgeries, false remedies, and tall tales to the gullible.</p><p><strong>Ability Scores:</strong> Dexterity, Constitution, Charisma</p><p><strong>Feat:</strong> Skilled</p><p><strong>Skill Proficiencies:</strong> Deception, Sleight of Hand</p><p><strong>Tool Proficiency:</strong> Forgery Kit</p>',
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(CharlatanAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Deception),
    Effects.gainTrait(SkillProficiencies.SleightOfHand),
    Effects.gainTrait(Feats.Skilled),
    Effects.gainTrait(Tools.ForgeryKit),
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
    "<p>You earned your coin in dark alleys, cutting purses and burgling shops, perhaps as part of a thieves' guild.</p><p><strong>Ability Scores:</strong> Dexterity, Constitution, Intelligence</p><p><strong>Feat:</strong> Alert</p><p><strong>Skill Proficiencies:</strong> Sleight of Hand, Stealth</p><p><strong>Tool Proficiency:</strong> Thieves' Tools</p>",
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(CriminalAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.SleightOfHand),
    Effects.gainTrait(SkillProficiencies.Stealth),
    Effects.gainTrait(Feats.Alert),
    Effects.gainTrait(Tools.ThievesTools),
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
    '<p>You spent your youth with traveling fairs and carnivals, learning to perform and to hold a crowd.</p><p><strong>Ability Scores:</strong> Strength, Dexterity, Charisma</p><p><strong>Feat:</strong> Musician</p><p><strong>Skill Proficiencies:</strong> Acrobatics, Performance</p><p><strong>Tool Proficiency:</strong> one kind of Musical Instrument</p>',
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(EntertainerAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Acrobatics),
    Effects.gainTrait(SkillProficiencies.Performance),
    Effects.gainTrait(Feats.Musician),
    Effects.gainCharacterOption(Tools.SelectMusicalInstrument),
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
    "<p>You grew up close to the land, tending crops and animals and learning patience and hardiness.</p><p><strong>Ability Scores:</strong> Strength, Constitution, Wisdom</p><p><strong>Feat:</strong> Tough</p><p><strong>Skill Proficiencies:</strong> Animal Handling, Nature</p><p><strong>Tool Proficiency:</strong> Carpenter's Tools</p>",
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(FarmerAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.AnimalHandling),
    Effects.gainTrait(SkillProficiencies.Nature),
    Effects.gainTrait(Feats.Tough),
    Effects.gainTrait(ArtisansTools.CarpentersTools),
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
    '<p>You stood watch on walls and gates, trained to spot trouble and to keep an eye on the crowd.</p><p><strong>Ability Scores:</strong> Strength, Intelligence, Wisdom</p><p><strong>Feat:</strong> Alert</p><p><strong>Skill Proficiencies:</strong> Athletics, Perception</p><p><strong>Tool Proficiency:</strong> one kind of Gaming Set</p>',
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(GuardAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Athletics),
    Effects.gainTrait(SkillProficiencies.Perception),
    Effects.gainTrait(Feats.Alert),
    Effects.gainCharacterOption(Tools.SelectGamingSet),
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
    "<p>You came of age outdoors, far from settled lands, leading others through the wilds and learning nature's magic.</p><p><strong>Ability Scores:</strong> Dexterity, Constitution, Wisdom</p><p><strong>Feat:</strong> Magic Initiate (Druid)</p><p><strong>Skill Proficiencies:</strong> Stealth, Survival</p><p><strong>Tool Proficiency:</strong> Cartographer's Tools</p>",
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(GuideAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Stealth),
    Effects.gainTrait(SkillProficiencies.Survival),
    Effects.gainTrait(Feats.MagicInitiateDruid),
    Effects.gainTrait(ArtisansTools.CartographersTools),
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
    '<p>You spent your early years in seclusion, tending to others with herbal remedies and pondering the mysteries of creation.</p><p><strong>Ability Scores:</strong> Constitution, Wisdom, Charisma</p><p><strong>Feat:</strong> Healer</p><p><strong>Skill Proficiencies:</strong> Medicine, Religion</p><p><strong>Tool Proficiency:</strong> Herbalism Kit</p>',
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(HermitAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Medicine),
    Effects.gainTrait(SkillProficiencies.Religion),
    Effects.gainTrait(Feats.Healer),
    Effects.gainTrait(Tools.HerbalismKit),
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
    "<p>You were apprenticed to a trader or caravan master, learning to haggle, move goods, and find the next opportunity.</p><p><strong>Ability Scores:</strong> Constitution, Intelligence, Charisma</p><p><strong>Feat:</strong> Lucky</p><p><strong>Skill Proficiencies:</strong> Animal Handling, Persuasion</p><p><strong>Tool Proficiency:</strong> Navigator's Tools</p>",
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(MerchantAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.AnimalHandling),
    Effects.gainTrait(SkillProficiencies.Persuasion),
    Effects.gainTrait(Feats.Lucky),
    Effects.gainTrait(Tools.NavigatorsTools),
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
    '<p>You were raised in a castle among wealth, power, and privilege, taught to lead and to carry your family name.</p><p><strong>Ability Scores:</strong> Strength, Intelligence, Charisma</p><p><strong>Feat:</strong> Skilled</p><p><strong>Skill Proficiencies:</strong> History, Persuasion</p><p><strong>Tool Proficiency:</strong> one kind of Gaming Set</p>',
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(NobleAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.History),
    Effects.gainTrait(SkillProficiencies.Persuasion),
    Effects.gainTrait(Feats.Skilled),
    Effects.gainCharacterOption(Tools.SelectGamingSet),
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
    "<p>You spent your formative years among manuscripts and libraries, studying lore and the rudiments of magic.</p><p><strong>Ability Scores:</strong> Constitution, Intelligence, Wisdom</p><p><strong>Feat:</strong> Magic Initiate (Wizard)</p><p><strong>Skill Proficiencies:</strong> Arcana, History</p><p><strong>Tool Proficiency:</strong> Calligrapher's Supplies</p>",
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(SageAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Arcana),
    Effects.gainTrait(SkillProficiencies.History),
    Effects.gainTrait(Feats.MagicInitiateWizard),
    Effects.gainTrait(ArtisansTools.CalligraphersSupplies),
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
    "<p>You lived as a seafarer, weathering storms and brawling in port taverns.</p><p><strong>Ability Scores:</strong> Strength, Dexterity, Wisdom</p><p><strong>Feat:</strong> Tavern Brawler</p><p><strong>Skill Proficiencies:</strong> Acrobatics, Perception</p><p><strong>Tool Proficiency:</strong> Navigator's Tools</p>",
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(SailorAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Acrobatics),
    Effects.gainTrait(SkillProficiencies.Perception),
    Effects.gainTrait(Feats.TavernBrawler),
    Effects.gainTrait(Tools.NavigatorsTools),
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
    "<p>You spent years copying texts in a scriptorium or government office, with an eye for detail and error.</p><p><strong>Ability Scores:</strong> Dexterity, Intelligence, Wisdom</p><p><strong>Feat:</strong> Skilled</p><p><strong>Skill Proficiencies:</strong> Investigation, Perception</p><p><strong>Tool Proficiency:</strong> Calligrapher's Supplies</p>",
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(ScribeAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Investigation),
    Effects.gainTrait(SkillProficiencies.Perception),
    Effects.gainTrait(Feats.Skilled),
    Effects.gainTrait(ArtisansTools.CalligraphersSupplies),
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
    '<p>You trained for war from a young age, learning to survive on the battlefield and to strike hard.</p><p><strong>Ability Scores:</strong> Strength, Dexterity, Constitution</p><p><strong>Feat:</strong> Savage Attacker</p><p><strong>Skill Proficiencies:</strong> Athletics, Intimidation</p><p><strong>Tool Proficiency:</strong> one kind of Gaming Set</p>',
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(SoldierAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Athletics),
    Effects.gainTrait(SkillProficiencies.Intimidation),
    Effects.gainTrait(Feats.SavageAttacker),
    Effects.gainCharacterOption(Tools.SelectGamingSet),
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
    "<p>You grew up on the streets among other castoffs, surviving on your wits and a little luck.</p><p><strong>Ability Scores:</strong> Dexterity, Wisdom, Charisma</p><p><strong>Feat:</strong> Lucky</p><p><strong>Skill Proficiencies:</strong> Insight, Stealth</p><p><strong>Tool Proficiency:</strong> Thieves' Tools</p>",
  archetypes: [Background],
  effects: [
    Effects.gainCharacterOption(WayfarerAbilityScores.option),
    Effects.gainTrait(SkillProficiencies.Insight),
    Effects.gainTrait(SkillProficiencies.Stealth),
    Effects.gainTrait(Feats.Lucky),
    Effects.gainTrait(Tools.ThievesTools),
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
