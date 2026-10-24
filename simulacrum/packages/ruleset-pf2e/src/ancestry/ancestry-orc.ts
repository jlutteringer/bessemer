import { Abilities, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import {
  AiuvarinFeat,
  Ancestry,
  AncestryFeat,
  ChangelingFeat,
  DromaarFeat,
  ElfFeat,
  Feat,
  FeatLevel1,
  FeatLevel5,
  Heritage,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/archetype'
import { HitPoints, Speed } from '@simulacrum/ruleset-pf2e/characteristic'
import { SelectAncestryBoost } from '@simulacrum/ruleset-pf2e/attribute-boost'
import {
  TrainedAthletics,
  TrainedDiplomacy,
  TrainedIntimidation,
  TrainedNature,
  TrainedReligion,
  TrainedSurvival,
} from '@simulacrum/ruleset-pf2e/skill'
import { Reaction } from '@simulacrum/ruleset-pf2e/action-type'
import { Darkvision, OrcHeritage } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { DromaarHeritage } from '@simulacrum/ruleset-pf2e/ancestry/versatile-heritage'
import { Diehard, Pet } from '@simulacrum/ruleset-pf2e/feat/general-feat'
import { AdditionalLore, CombatClimber, IntimidatingGlare, TerrainExpertise, TrainAnimal } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const BadlandsOrc = Traits.defineTrait('heritage/badlands-orc', {
  name: 'Badlands Orc',
  description:
    'You come from sun-scorched badlands, where long legs and an ability to withstand the elements helped you thrive. You can Hustle twice as long while exploring before you have to stop, and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).',
  archetypes: [Heritage, OrcHeritage],
  effects: [],
})

export const BattleReadyOrc = Traits.defineTrait('heritage/battle-ready-orc', {
  name: 'Battle-Ready Orc',
  description:
    'You descend from a line of terrifying battlefield commanders. You become trained in Intimidation, and you gain the Intimidating Glare skill feat.',
  archetypes: [Heritage, OrcHeritage],
  effects: [Effects.gainTrait(TrainedIntimidation), Effects.gainTrait(IntimidatingGlare)],
})

export const DeepOrc = Traits.defineTrait('heritage/deep-orc', {
  name: 'Deep Orc',
  description:
    'Your calloused hands and red eyes speak to a life spent in the deep darkness of mountain caverns, where you learned to battle on rocky cliffs and survive with minimal resources. You gain the Terrain Expertise skill feat for underground terrain and the Combat Climber skill feat.',
  archetypes: [Heritage, OrcHeritage],
  effects: [Effects.gainTrait(TerrainExpertise), Effects.gainTrait(CombatClimber)],
})

export const GraveOrc = Traits.defineTrait('heritage/grave-orc', {
  name: 'Grave Orc',
  description:
    'You were exposed to powerful necromantic energies that should have killed you—but you survived. Your skin is cold, clammy, and gray. You gain resistance to void damage equal to half your level (minimum 1). You also gain a +1 circumstance bonus to saving throws against effects with the death or void trait.',
  archetypes: [Heritage, OrcHeritage],
  effects: [],
})

export const HoldScarredOrc = Traits.defineTrait('heritage/hold-scarred-orc', {
  name: 'Hold-Scarred Orc',
  description:
    'You are part of an orc community that participates in ritual scarification or tattooing. The marks on your skin show your exceptional hardiness and vitality. You gain 12 Hit Points from your ancestry instead of 10. You also gain the Diehard feat.',
  archetypes: [Heritage, OrcHeritage],
  effects: [Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(2))), Effects.gainTrait(Diehard)],
})

export const RainfallOrc = Traits.defineTrait('heritage/rainfall-orc', {
  name: 'Rainfall Orc',
  description:
    "You were born in a rain forest with only tangles of trees providing protection from torrential rainstorms and flash floods. You've learned to move adeptly through jungle terrain and resist the various ailments common in humid environs. You gain a +2 circumstance bonus to Athletics checks to Climb or Swim and a +1 circumstance bonus to saving throws against diseases.",
  archetypes: [Heritage, OrcHeritage],
  effects: [],
})

export const WinterOrc = Traits.defineTrait('heritage/winter-orc', {
  name: 'Winter Orc',
  description:
    'Your ancestors survived in cold climates. You become trained in Survival, and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).',
  archetypes: [Heritage, OrcHeritage],
  effects: [Effects.gainTrait(TrainedSurvival)],
})

export const SelectOrcHeritage = CharacterOptions.selectTraitOption('ancestry/orc/select-heritage', {
  name: 'Orc Heritage',
  filter: { archetypes: [[OrcHeritage, VersatileHeritage]] },
})

export const SelectOrcFeat1 = CharacterOptions.selectTraitOption('ancestry/orc/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { archetypes: [AncestryFeat, [OrcFeat, ElfFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectOrcFeat5 = CharacterOptions.selectTraitOption('ancestry/orc/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: { archetypes: [AncestryFeat, [OrcFeat, ElfFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]] },
})

export const Orc = Traits.defineTrait('ancestry/orc', {
  name: 'Orc',
  description:
    "*Humanoid, Orc*\n\n_Orcs are proud, strong people with hardened physiques who value physical might and glory in combat._\n\nOrcs are forged in the fires of violence and conflict, often from the moment they are born. As they live lives that are frequently cut brutally short, orcs revel in testing their strength against worthy foes, often by challenging a higher-ranking member of their community for dominance. Orcs often struggle to gain acceptance among other communities, who frequently see them as brutes. Those who earn the loyalty of an orc friend, however, soon learn that an orc's fidelity and honesty are unparalleled. Orc culture teaches that they are shaped by the challenges they survive, and the most worthy survive the most hardships. Orcs who attain both a long life and great triumphs command immense respect.\n\nIf you want a character who is hardy, fearsome, and excels at feats of physical prowess, you should play an orc.\n\n**You Might...**\n\n- Eagerly meet any chance to prove your strength in a physical contest.\n\n- View dying in glorious combat as preferable to a mundane death from old age or illness.\n\n**Others Probably...**\n\n- See you as violent or lacking in discipline.\n\n- Admire your forthrightness and blunt honesty.\n\n**Physical Description**\n\nOrcs are tall and powerfully built, with long arms and stocky legs. Many orcs top 7 feet in height, though they tend to adopt broad, almost bow-legged stances and slouch forward at the shoulders. Orcs have rough skin, thick bones, and rock-hard muscles, making them suited to war and other physically demanding tasks. Orc skin color is typically some shade of green, though some orcs have other skin colors that reflect adaptations to their environments.\n\nOrcs consider powerful builds, heavily scarred skin, large tusks, and tattoos attractive, regardless of gender. Orcs reach physical adulthood around the age of 17, with many orcs living to be up to 60 years old.\n\n**Society**\n\nMost orc communities—known as holds—define themselves through two things: pain and glory. Each earns respect in near equal measure, so long as the pain is borne with stoicism. An orc with many scars who walks uncomplaining with a broken leg draws as much admiration as one who wins a great victory on the battlefield. Additionally, power defines the dynamics among families and holds. Weaker orcs work at the behest of the strong, with power constantly shifting between orcs that prove their might. Orcs tend to share in familial duties, raising children as a community and sharing responsibilities among the entire hold.\n\n**Alignment and Religion**\n\nA common orc saying is “you are the scars that shape you.” Violent, chaotic lives in violent, chaotic lands mean that most orcs tend to expect and accept violence. Lamashtu, and Rovagug are commonly worshiped among more war-minded orc communities, while less violent holds worship gods like Sarenrae, whose tenets of fire, redemption, and glory all hold some appeal to orc sensibilities.\n\nWhile there are orc deities, their worship is surprisingly uncommon among orcs. Orcs believe that if a creature has a face and a name, it can be killed, and so their own deities are often targets, rather than objects of reverence. Some orc holds teach that the greatest members of the hold can earn a chance to challenge the orc deities for a place amid the pantheon.\n\n**Popular Edicts** become even stronger, share knowledge you won through pain, destroy the undead\n**Popular Anathema** accept defeat without proof of strength, reshape or reanimate a creature into something lesser\n\n**Names**\n\nArkus, Durra, Grask, Grillgiss, Krugga, Mahja, Murdut, Ollak, Onyat, Thurk, Uirch, Unach\n\n**Orc Mechanics**\n\n**Hit Points**\n\n10\n\n**Size**\n\nMedium\n\n**Speed**\n\n25 feet\n\n**Attribute Boosts**\n\nTwo free ability boosts\n\n**Languages**\n\nCommon\n\nOrcish\n\nAdditional languages equal to your Intelligence modifier (if it's positive). Choose from Goblin, Jotun, Petran, Sakvroth, and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Darkvision**\n\nYou can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white.",
  archetypes: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(10))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(25))),
    Effects.gainCharacterOption(SelectAncestryBoost),
    Effects.gainCharacterOption(SelectAncestryBoost),
    Effects.gainTrait(Darkvision),
    Effects.gainCharacterOption(SelectOrcHeritage),
    Effects.gainCharacterOption(SelectOrcFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectOrcFeat5)]),
  ],
})

export const HoldMarkBurningSun = Traits.defineTrait('ancestry/orc/hold-mark/burning-sun', {
  name: 'Hold Mark: Burning Sun',
  description: 'You are trained in Diplomacy and gain a +1 status bonus to saves against arcane spells.',
  effects: [Effects.gainTrait(TrainedDiplomacy)],
})

export const HoldMarkDeathsHead = Traits.defineTrait('ancestry/orc/hold-mark/deaths-head', {
  name: "Hold Mark: Death's Head",
  description: 'You are trained in Survival and gain a +1 status bonus to saves against primal spells.',
  effects: [Effects.gainTrait(TrainedSurvival)],
})

export const HoldMarkDefiledCorpse = Traits.defineTrait('ancestry/orc/hold-mark/defiled-corpse', {
  name: 'Hold Mark: Defiled Corpse',
  description: 'You are trained in Religion and gain a +1 status bonus to saves against divine spells.',
  effects: [Effects.gainTrait(TrainedReligion)],
})

export const HoldMarkEmptyHand = Traits.defineTrait('ancestry/orc/hold-mark/empty-hand', {
  name: 'Hold Mark: Empty Hand',
  description: 'You are trained in Intimidation and gain a +1 status bonus to saves against occult spells.',
  effects: [Effects.gainTrait(TrainedIntimidation)],
})

export const SelectHoldMarkEmblem = CharacterOptions.selectTraitOption('ancestry/orc/hold-mark/select-emblem', {
  name: 'Hold Mark Emblem',
  filter: { specificOptions: [HoldMarkBurningSun, HoldMarkDeathsHead, HoldMarkDefiledCorpse, HoldMarkEmptyHand] },
})

export const SelectBeastTrainerFeat = CharacterOptions.selectTraitOption('ancestry/orc/beast-trainer/select-feat', {
  name: 'Beast Trainer Feat',
  filter: { specificOptions: [Pet, TrainAnimal] },
})

export const BeastTrainer = Traits.defineTrait('ancestry/orc/beast-trainer', {
  name: 'Beast Trainer',
  description:
    '*Orc*\n\nYou have an impressive innate ability to tame and command ferocious beasts. You become trained in the Nature skill and gain your choice of the Pet general feat or the Train Animal skill feat.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [Effects.gainTrait(TrainedNature), Effects.gainCharacterOption(SelectBeastTrainerFeat)],
})

export const IronFists = Traits.defineTrait('ancestry/orc/iron-fists', {
  name: 'Iron Fists',
  description:
    '*Orc*\n\nYour fists have been forged by battle, your naturally tough skin and dense bone further hardened by conflict. Your fist unarmed attacks no longer have the nonlethal trait and gain the shove weapon trait.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const OrcFerocity = Traits.defineTrait('ancestry/orc/orc-ferocity', {
  name: 'Orc Ferocity',
  description:
    '*Orc*\n\n**Frequency** once per day\n\n**Trigger** You would be reduced to 0 Hit Points but not immediately killed\n\nFierceness in battle runs through your blood, and you refuse to fall from your injuries no matter how terrible they may be. You avoid being knocked out and remain at 1 Hit Point, and your wounded condition increases by 1.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const OrcLore = Traits.defineTrait('ancestry/orc/orc-lore', {
  name: 'Orc Lore',
  description:
    '*Orc*\n\nThe hold elders taught you your people’s histories, told tales of great athletic feats, and shared with you the hardships your ancestors endured so that you can pass this wisdom down to future generations. You become trained in Athletics and Survival. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the Additional Lore general feat for Orc Lore.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [Effects.gainTrait(TrainedAthletics), Effects.gainTrait(TrainedSurvival), Effects.gainTrait(AdditionalLore)],
})

export const OrcSuperstition = Traits.defineTrait('ancestry/orc/orc-superstition', {
  name: 'Orc Superstition',
  description:
    '*Concentrate, Orc*\n\n**Trigger** You attempt a saving throw against a spell or magical effect, and have not yet rolled\n\nYou defend yourself against magic by relying on techniques derived from orc cultural superstitions. You gain a +1 circumstance bonus to your saving throw against the triggering spell or magical effect.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const HoldMark = Traits.defineTrait('ancestry/orc/hold-mark', {
  name: 'Hold Mark',
  description:
    '*Orc*\n\nYou bear scars or tattoos enhanced by the mark of your community’s prowess. When you select this feat, choose one of the options from the below table. You are trained in the listed skill and gain a +1 status bonus to saves against spells from the listed tradition. You gain a large brand or tattoo in the shape of the chosen emblem or a similar concept (for example, the Burning Sun could be a torch, sun, volcano, or other fiery symbol, while the Empty Hand could be a fist or claw).\n\n## Hold Mark\n\n| Hold Mark Emblem | Skill | Tradition |\n|---|---|---|\n| Burning Sun | Diplomacy | Arcane |\n| Death’s Head | Survival | Primal |\n| Defiled Corpse | Religion | Divine |\n| Empty Hand | Intimidation | Occult |\n| |',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [Effects.gainCharacterOption(SelectHoldMarkEmblem)],
})

export const OrcWeaponFamiliarity = Traits.defineTrait('ancestry/orc/orc-weapon-familiarity', {
  name: 'Orc Weapon Familiarity',
  description:
    '*Orc*\n\nIn combat, you favor the brutal weapons that are traditional for your orc ancestors. You gain access to all uncommon weapons with the orc trait. You have familiarity with weapons with the orc trait plus the falchion and greataxe—for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const Tusks = Traits.defineTrait('ancestry/orc/tusks', {
  name: 'Tusks',
  description:
    '*Orc*\n\nYou have particularly long, jagged tusks perfect for tearing meat from bone. You gain a tusks unarmed attack that deals 1d6 piercing damage. Your tusks are in the brawling group and have the finesse and unarmed traits.\n\n**Special** You can take this feat only at 1st level, and you can’t retrain into this feat. You can retrain out of this feat only through drastic measures, such as breaking, filing, or extracting your tusks.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)]),
    Expressions.lessThanOrEqual(CharacterValues.Level, 1),
  ],
  effects: [],
})

export const AthleticMight = Traits.defineTrait('ancestry/orc/athletic-might', {
  name: 'Athletic Might',
  description:
    '*Orc*\n\nSurviving in hostile terrain has given you a great talent for mobility. Whenever you roll a success on an Athletics check to Climb or Swim, you get a critical success instead.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const BloodyBlows = Traits.defineTrait('ancestry/orc/bloody-blows', {
  name: 'Bloody Blows',
  description:
    '*Orc*\n\nYour lethal unarmed attacks leave bloody gouges or cause severe internal bleeding. When you critically hit with a Strike using an unarmed attack that isn’t nonlethal, the target takes 1d4 persistent bleed damage. This can be because you’re taking the penalty to use a fist for a lethal attack or because you have an unarmed attack without the nonlethal trait due to Tusks or a similar ability.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const DefyDeath = Traits.defineTrait('ancestry/orc/defy-death', {
  name: 'Defy Death',
  description:
    '*Orc*\n\n**Prerequisites** Orc Ferocity\n\nYou’re exceptionally difficult to kill. The DC of your recovery checks is equal to 9 + your dying value, or 8 + your dying value if you have the Toughness general feat. In addition, whenever someone returns you to life using magic that would normally leave you debilitated for a week (such as raise dead or the resurrect ritual), you don’t suffer that condition.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)]), Traits.traitPrerequisite(OrcFerocity)],
  effects: [],
})

export const ScarThickSkin = Traits.defineTrait('ancestry/orc/scar-thick-skin', {
  name: 'Scar-Thick Skin',
  description:
    '*Orc*\n\nGlorious, storied scars cover and protect much of your body, girding you in fleshly armor that resists any wound weaker than those you have already survived. Your DC on flat checks to end persistent bleed damage is reduced from 15 to 10, or from 10 to 5 after receiving especially appropriate assistance.',
  archetypes: [Feat, AncestryFeat, OrcFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const OrcFerocityAction = Abilities.defineAbility('ancestry/orc/orc-ferocity/action', {
  name: 'Orc Ferocity',
  description:
    '*Orc*\n\n**Frequency** once per day\n\n**Trigger** You would be reduced to 0 Hit Points but not immediately killed\n\nFierceness in battle runs through your blood, and you refuse to fall from your injuries no matter how terrible they may be. You avoid being knocked out and remain at 1 Hit Point, and your wounded condition increases by 1.',
  prerequisites: [Traits.traitPrerequisite(OrcFerocity)],
  actions: [{ name: 'Orc Ferocity', action: Reaction }],
})

export const OrcSuperstitionAction = Abilities.defineAbility('ancestry/orc/orc-superstition/action', {
  name: 'Orc Superstition',
  description:
    '*Concentrate, Orc*\n\n**Trigger** You attempt a saving throw against a spell or magical effect, and have not yet rolled\n\nYou defend yourself against magic by relying on techniques derived from orc cultural superstitions. You gain a +1 circumstance bonus to your saving throw against the triggering spell or magical effect.',
  prerequisites: [Traits.traitPrerequisite(OrcSuperstition)],
  actions: [{ name: 'Orc Superstition', action: Reaction }],
})

export const AllOrcEntities = [
  BadlandsOrc,
  BattleReadyOrc,
  DeepOrc,
  GraveOrc,
  HoldScarredOrc,
  RainfallOrc,
  WinterOrc,
  SelectOrcHeritage,
  SelectOrcFeat1,
  SelectOrcFeat5,
  Orc,
  HoldMarkBurningSun,
  HoldMarkDeathsHead,
  HoldMarkDefiledCorpse,
  HoldMarkEmptyHand,
  SelectHoldMarkEmblem,
  SelectBeastTrainerFeat,
  BeastTrainer,
  IronFists,
  OrcFerocity,
  OrcFerocityAction,
  OrcLore,
  OrcSuperstition,
  OrcSuperstitionAction,
  HoldMark,
  OrcWeaponFamiliarity,
  Tusks,
  AthleticMight,
  BloodyBlows,
  DefyDeath,
  ScarThickSkin,
]
