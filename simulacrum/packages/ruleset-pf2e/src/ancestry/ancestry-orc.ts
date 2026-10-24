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
} from '@simulacrum/ruleset-pf2e/tag'
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
    'You come from sun-scorched badlands, where long legs and an ability to withstand the elements helped you thrive. You can [Hustle](content:playing-the-game/hustle) twice as long while exploring before you have to stop, and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).',
  tags: [Heritage, OrcHeritage],
  effects: [],
})

export const BattleReadyOrc = Traits.defineTrait('heritage/battle-ready-orc', {
  name: 'Battle-Ready Orc',
  description:
    'You descend from a line of terrifying battlefield commanders. You become trained in [Intimidation](characteristic:skill/intimidation), and you gain the [Intimidating Glare](trait:feat/intimidating-glare) skill feat.',
  tags: [Heritage, OrcHeritage],
  effects: [Effects.gainTrait(TrainedIntimidation), Effects.gainTrait(IntimidatingGlare)],
})

export const DeepOrc = Traits.defineTrait('heritage/deep-orc', {
  name: 'Deep Orc',
  description:
    'Your calloused hands and red eyes speak to a life spent in the deep darkness of mountain caverns, where you learned to battle on rocky cliffs and survive with minimal resources. You gain the [Terrain Expertise](trait:feat/terrain-expertise) skill feat for underground terrain and the [Combat Climber](trait:feat/combat-climber) skill feat.',
  tags: [Heritage, OrcHeritage],
  effects: [Effects.gainTrait(TerrainExpertise), Effects.gainTrait(CombatClimber)],
})

export const GraveOrc = Traits.defineTrait('heritage/grave-orc', {
  name: 'Grave Orc',
  description:
    'You were exposed to powerful necromantic energies that should have killed you—but you survived. Your skin is cold, clammy, and gray. You gain resistance to void damage equal to half your level (minimum 1). You also gain a +1 circumstance bonus to saving throws against effects with the [death](content:traits/death) or [void](content:traits/void) trait.',
  tags: [Heritage, OrcHeritage],
  effects: [],
})

export const HoldScarredOrc = Traits.defineTrait('heritage/hold-scarred-orc', {
  name: 'Hold-Scarred Orc',
  description:
    'You are part of an orc community that participates in ritual scarification or tattooing. The marks on your skin show your exceptional hardiness and vitality. You gain 12 [Hit Points](characteristic:hit-points) from your ancestry instead of 10. You also gain the [Diehard](trait:feat/diehard) feat.',
  tags: [Heritage, OrcHeritage],
  effects: [Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(2))), Effects.gainTrait(Diehard)],
})

export const RainfallOrc = Traits.defineTrait('heritage/rainfall-orc', {
  name: 'Rainfall Orc',
  description:
    "You were born in a rain forest with only tangles of trees providing protection from torrential rainstorms and flash floods. You've learned to move adeptly through jungle terrain and resist the various ailments common in humid environs. You gain a +2 circumstance bonus to [Athletics](characteristic:skill/athletics) checks to [Climb](content:skills/climb) or [Swim](content:skills/swim) and a +1 circumstance bonus to saving throws against [diseases](content:traits/disease).",
  tags: [Heritage, OrcHeritage],
  effects: [],
})

export const WinterOrc = Traits.defineTrait('heritage/winter-orc', {
  name: 'Winter Orc',
  description:
    'Your ancestors survived in cold climates. You become trained in [Survival](characteristic:skill/survival), and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).',
  tags: [Heritage, OrcHeritage],
  effects: [Effects.gainTrait(TrainedSurvival)],
})

export const SelectOrcHeritage = CharacterOptions.selectTraitOption('ancestry/orc/select-heritage', {
  name: 'Orc Heritage',
  filter: { tags: [[OrcHeritage, VersatileHeritage]] },
})

export const SelectOrcFeat1 = CharacterOptions.selectTraitOption('ancestry/orc/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { tags: [AncestryFeat, [OrcFeat, ElfFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectOrcFeat5 = CharacterOptions.selectTraitOption('ancestry/orc/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: { tags: [AncestryFeat, [OrcFeat, ElfFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]] },
})

export const Orc = Traits.defineTrait('ancestry/orc', {
  name: 'Orc',
  description:
    "*Humanoid, Orc*\n\n_Orcs are proud, strong people with hardened physiques who value physical might and glory in combat._\n\nIf you want a character who is hardy, fearsome, and excels at feats of physical prowess, you should play an orc.\n\nRead the full entry in [Orcs](content:ancestries-and-backgrounds/orcs).\n\n**Hit Points** 10\n\n**Size** Medium\n\n**Speed** 25 feet\n\n**Attribute Boosts** Two free ability boosts\n\n**Languages** [Common](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) [Orcish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) Additional languages equal to your [Intelligence modifier](characteristic:intelligence) (if it's positive). Choose from [Goblin](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Jotun](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Petran](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Sakvroth](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Darkvision** You can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white.",
  tags: [Ancestry],
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
    '*Orc*\n\nYou have an impressive innate ability to tame and command ferocious beasts. You become trained in the [Nature](characteristic:skill/nature) skill and gain your choice of the [Pet](trait:feat/pet) general feat or the [Train Animal](trait:feat/train-animal) skill feat.',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [Effects.gainTrait(TrainedNature), Effects.gainCharacterOption(SelectBeastTrainerFeat)],
})

export const IronFists = Traits.defineTrait('ancestry/orc/iron-fists', {
  name: 'Iron Fists',
  description:
    '*Orc*\n\nYour fists have been forged by battle, your naturally tough skin and dense bone further hardened by conflict. Your fist unarmed attacks no longer have the [nonlethal](content:traits/nonlethal) trait and gain the [shove](content:traits/shove) weapon trait.',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const OrcFerocity = Traits.defineTrait('ancestry/orc/orc-ferocity', {
  name: 'Orc Ferocity',
  description:
    '*Orc*\n\n**Frequency** once per day\n\n**Trigger** You would be reduced to 0 [Hit Points](characteristic:hit-points) but not immediately killed\n\nFierceness in battle runs through your blood, and you refuse to fall from your injuries no matter how terrible they may be. You avoid being knocked out and remain at 1 Hit Point, and your [wounded](content:conditions/wounded) condition increases by 1.',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const OrcLore = Traits.defineTrait('ancestry/orc/orc-lore', {
  name: 'Orc Lore',
  description:
    '*Orc*\n\nThe hold elders taught you your people’s histories, told tales of great athletic feats, and shared with you the hardships your ancestors endured so that you can pass this wisdom down to future generations. You become trained in [Athletics](characteristic:skill/athletics) and [Survival](characteristic:skill/survival). If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the [Additional Lore](trait:feat/additional-lore) general feat for Orc [Lore](content:skills/lore).',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [Effects.gainTrait(TrainedAthletics), Effects.gainTrait(TrainedSurvival), Effects.gainTrait(AdditionalLore)],
})

export const OrcSuperstition = Traits.defineTrait('ancestry/orc/orc-superstition', {
  name: 'Orc Superstition',
  description:
    '*Concentrate, Orc*\n\n**Trigger** You attempt a saving throw against a spell or magical effect, and have not yet rolled\n\nYou defend yourself against magic by relying on techniques derived from orc cultural superstitions. You gain a +1 circumstance bonus to your saving throw against the triggering spell or magical effect.',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const HoldMark = Traits.defineTrait('ancestry/orc/hold-mark', {
  name: 'Hold Mark',
  description:
    '*Orc*\n\nYou bear scars or tattoos enhanced by the mark of your community’s prowess. When you select this feat, choose one of the options from the below table. You are trained in the listed skill and gain a +1 status bonus to saves against spells from the listed tradition. You gain a large brand or tattoo in the shape of the chosen emblem or a similar concept (for example, the Burning Sun could be a torch, sun, volcano, or other fiery symbol, while the Empty Hand could be a fist or claw).\n\n## Hold Mark\n\n| Hold Mark Emblem | Skill | Tradition |\n|---|---|---|\n| Burning Sun | Diplomacy | Arcane |\n| Death’s Head | Survival | Primal |\n| Defiled Corpse | Religion | Divine |\n| Empty Hand | Intimidation | Occult |\n| |',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [Effects.gainCharacterOption(SelectHoldMarkEmblem)],
})

export const OrcWeaponFamiliarity = Traits.defineTrait('ancestry/orc/orc-weapon-familiarity', {
  name: 'Orc Weapon Familiarity',
  description:
    '*Orc*\n\nIn combat, you favor the brutal weapons that are traditional for your orc ancestors. You gain access to all uncommon weapons with the [orc](content:traits/orc) trait. You have familiarity with weapons with the orc trait plus the falchion and greataxe—for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const Tusks = Traits.defineTrait('ancestry/orc/tusks', {
  name: 'Tusks',
  description:
    '*Orc*\n\nYou have particularly long, jagged tusks perfect for tearing meat from bone. You gain a tusks unarmed attack that deals 1d6 piercing damage. Your tusks are in the brawling group and have the [finesse](content:traits/finesse) and [unarmed](content:traits/unarmed) traits.\n\n**Special** You can take this feat only at 1st level, and you can’t retrain into this feat. You can retrain out of this feat only through drastic measures, such as breaking, filing, or extracting your tusks.',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel1],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)]),
    Expressions.lessThanOrEqual(CharacterValues.Level, 1),
  ],
  effects: [],
})

export const AthleticMight = Traits.defineTrait('ancestry/orc/athletic-might', {
  name: 'Athletic Might',
  description:
    '*Orc*\n\nSurviving in hostile terrain has given you a great talent for mobility. Whenever you roll a success on an [Athletics](characteristic:skill/athletics) check to [Climb](content:skills/climb) or [Swim](content:skills/swim), you get a critical success instead.',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const BloodyBlows = Traits.defineTrait('ancestry/orc/bloody-blows', {
  name: 'Bloody Blows',
  description:
    '*Orc*\n\nYour lethal unarmed attacks leave bloody gouges or cause severe internal bleeding. When you critically hit with a [Strike](content:playing-the-game/strike) using an unarmed attack that isn’t [nonlethal](content:traits/nonlethal), the target takes 1d4 persistent bleed damage. This can be because you’re taking the penalty to use a fist for a lethal attack or because you have an unarmed attack without the nonlethal trait due to Tusks or a similar ability.',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const DefyDeath = Traits.defineTrait('ancestry/orc/defy-death', {
  name: 'Defy Death',
  description:
    '*Orc*\n\n**Prerequisites** [Orc Ferocity](trait:ancestry/orc/orc-ferocity)\n\nYou’re exceptionally difficult to kill. The DC of your [recovery checks](content:playing-the-game/recovery-checks) is equal to 9 + your [dying](content:conditions/dying) value, or 8 + your dying value if you have the [Toughness](trait:feat/toughness) general feat. In addition, whenever someone returns you to life using magic that would normally leave you debilitated for a week (such as raise dead or the resurrect ritual), you don’t suffer that condition.',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)]), Traits.traitPrerequisite(OrcFerocity)],
  effects: [],
})

export const ScarThickSkin = Traits.defineTrait('ancestry/orc/scar-thick-skin', {
  name: 'Scar-Thick Skin',
  description:
    '*Orc*\n\nGlorious, storied scars cover and protect much of your body, girding you in fleshly armor that resists any wound weaker than those you have already survived. Your DC on flat checks to end [persistent bleed damage](content:conditions/persistent-damage) is reduced from 15 to 10, or from 10 to 5 after receiving especially appropriate assistance.',
  tags: [Feat, AncestryFeat, OrcFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Orc), Traits.traitPrerequisite(DromaarHeritage)])],
  effects: [],
})

export const OrcFerocityAction = Abilities.defineAbility('ancestry/orc/orc-ferocity/action', {
  name: 'Orc Ferocity',
  description: '*Orc*',
  prerequisites: [Traits.traitPrerequisite(OrcFerocity)],
  actions: [
    {
      name: 'Orc Ferocity',
      description:
        '**Frequency** once per day\n\n**Trigger** You would be reduced to 0 [Hit Points](characteristic:hit-points) but not immediately killed\n\nFierceness in battle runs through your blood, and you refuse to fall from your injuries no matter how terrible they may be. You avoid being knocked out and remain at 1 Hit Point, and your [wounded](content:conditions/wounded) condition increases by 1.',
      action: Reaction,
    },
  ],
})

export const OrcSuperstitionAction = Abilities.defineAbility('ancestry/orc/orc-superstition/action', {
  name: 'Orc Superstition',
  description: '*Concentrate, Orc*',
  prerequisites: [Traits.traitPrerequisite(OrcSuperstition)],
  actions: [
    {
      name: 'Orc Superstition',
      description:
        '**Trigger** You attempt a saving throw against a spell or magical effect, and have not yet rolled\n\nYou defend yourself against magic by relying on techniques derived from orc cultural superstitions. You gain a +1 circumstance bonus to your saving throw against the triggering spell or magical effect.',
      action: Reaction,
    },
  ],
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
