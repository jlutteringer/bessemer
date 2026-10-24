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
  HalflingFeat,
  Heritage,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/tag'
import { Dexterity, HitPoints, Speed, Strength, Wisdom } from '@simulacrum/ruleset-pf2e/characteristic'
import {
  CharismaAncestryBoost,
  ConstitutionAncestryBoost,
  IntelligenceAncestryBoost,
  StrengthAncestryBoost,
} from '@simulacrum/ruleset-pf2e/attribute-boost'
import { TrainedAcrobatics, TrainedNature, TrainedStealth } from '@simulacrum/ruleset-pf2e/skill'
import { FreeAction, Reaction, TwoActions } from '@simulacrum/ruleset-pf2e/action-type'
import { HalflingHeritage, LowLightVision } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AdoptedAncestry } from '@simulacrum/ruleset-pf2e/feat/general-feat'
import { AdditionalLore } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const GutsyHalfling = Traits.defineTrait('heritage/gutsy-halfling', {
  name: 'Gutsy Halfling',
  description:
    'Your family line is known for keeping a level head and staving off fear when the chips were down. When you roll a success on a saving throw against an [emotion](content:traits/emotion) effect, you get a critical success instead.',
  tags: [Heritage, HalflingHeritage],
  effects: [],
})

export const HillockHalfling = Traits.defineTrait('heritage/hillock-halfling', {
  name: 'Hillock Halfling',
  description:
    'Accustomed to a calm life in the hills, your people find rest and relaxation especially replenishing, particularly when indulging in creature comforts. When you regain [Hit Points](characteristic:hit-points) overnight, add your level to the Hit Points regained. When anyone uses the [Medicine](characteristic:skill/medicine) skill to [Treat your Wounds](content:skills/treat-wounds), you can eat a snack to add your level to the Hit Points you regain from their treatment.',
  tags: [Heritage, HalflingHeritage],
  effects: [],
})

export const NomadicHalfling = Traits.defineTrait('heritage/nomadic-halfling', {
  name: 'Nomadic Halfling',
  description:
    'Your ancestors have traveled from place to place for generations, never content to settle down. You gain two additional languages of your choice, chosen from among the common and uncommon languages available to you, and every time you take the [Multilingual](trait:feat/multilingual) feat, you gain another new language.',
  tags: [Heritage, HalflingHeritage],
  effects: [],
})

export const TwilightHalfling = Traits.defineTrait('heritage/twilight-halfling', {
  name: 'Twilight Halfling',
  description:
    'Your ancestors performed many secret acts under the concealing cover of dusk, whether for good or ill, and over time they developed the ability to see in twilight beyond even the usual keen sight of halflings. You gain [low-light vision](content:playing-the-game/low-light-vision).',
  tags: [Heritage, HalflingHeritage],
  effects: [Effects.gainTrait(LowLightVision)],
})

export const WildwoodHalfling = Traits.defineTrait('heritage/wildwood-halfling', {
  name: 'Wildwood Halfling',
  description:
    "You hail from deep within a jungle or forest, and you've learned how to use your small size to wriggle through undergrowth and other obstacles. You ignore any [difficult terrain](content:playing-the-game/difficult-terrain) caused by plants and fungi, such as bushes, vines, and undergrowth.",
  tags: [Heritage, HalflingHeritage],
  effects: [],
})

export const JinxedHalfling = Traits.defineTrait('heritage/jinxed-halfling', {
  name: 'Jinxed Halfling',
  description:
    '*Uncommon*\n\nYou were born with a strange blessing: bereft of the typical halfling luck, you can instead manipulate the fortunes of others. You can never take the [Halfling Luck](trait:ancestry/halfling/halfling-luck) feat, and you gain the Jinx action.\n\n**Jinx** ◆◆\n\n*Curse, Occult*\n\n**Frequency** once per day\n\nYou can curse another creature with clumsiness. This curse has a range of 30 feet, and you must be able to see your target. The target gets a [Will saving throw](characteristic:will) against your [class DC](characteristic:class-dc) or [spell DC](characteristic:spell-dc), whichever is higher.\n\n**Success** The target is unaffected and temporarily immune for 24 hours.\n\n**Failure** The target is [clumsy 1](content:conditions/clumsy) for 1 minute.\n\n**Critical Failure** The target is clumsy 2 for 1 minute.',
  tags: [Heritage, HalflingHeritage],
  effects: [],
})

export const Jinx = Abilities.defineAbility('heritage/jinxed-halfling/jinx', {
  name: 'Jinx',
  description:
    '*Curse, Occult*\n\n**Frequency** once per day\n\nYou can curse another creature with clumsiness. This curse has a range of 30 feet, and you must be able to see your target. The target gets a [Will saving throw](characteristic:will) against your [class DC](characteristic:class-dc) or [spell DC](characteristic:spell-dc), whichever is higher.\n\n**Success** The target is unaffected and temporarily immune for 24 hours.\n\n**Failure** The target is [clumsy 1](content:conditions/clumsy) for 1 minute.\n\n**Critical Failure** The target is clumsy 2 for 1 minute.',
  prerequisites: [Traits.traitPrerequisite(JinxedHalfling)],
  actions: [{ name: 'Jinx', action: TwoActions }],
})

export const SelectHalflingHeritage = CharacterOptions.selectTraitOption('ancestry/halfling/select-heritage', {
  name: 'Halfling Heritage',
  filter: { tags: [[HalflingHeritage, VersatileHeritage]] },
})

export const SelectHalflingFeat1 = CharacterOptions.selectTraitOption('ancestry/halfling/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { tags: [AncestryFeat, [HalflingFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectHalflingFeat5 = CharacterOptions.selectTraitOption('ancestry/halfling/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    tags: [AncestryFeat, [HalflingFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const SelectHalflingAncestryBoost = CharacterOptions.selectTraitOption('ancestry/halfling/select-boost', {
  name: 'Ancestry Boost',
  filter: { specificOptions: [StrengthAncestryBoost, ConstitutionAncestryBoost, IntelligenceAncestryBoost, CharismaAncestryBoost] },
})

export const Halfling = Traits.defineTrait('ancestry/halfling', {
  name: 'Halfling',
  description:
    "*Halfling, Humanoid*\n\n_Halflings are a short, resilient people who exhibit remarkable curiosity and humor._\n\nIf you want to play a character who must contend with these opposing drives toward adventure and comfort, you should play a halfling.\n\nRead the full entry in [Halflings](content:ancestries-and-backgrounds/halflings).\n\n**Hit Points** 6\n\n**Size** Small\n\n**Speed** 25 feet\n\n**Attribute Boosts** Dexterity, Wisdom, Free\n\n**Attribute Flaws** Strength\n\n**Languages** [Common](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) [Halfling](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) Additional languages equal to your [Intelligence modifier](characteristic:intelligence) (if it's positive). Choose from [Dwarven](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Elven](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Gnomish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Goblin](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Keen Eyes** Your eyes are sharp, allowing you to make out small details about [concealed](content:conditions/concealed) or even [invisible](content:conditions/invisible) creatures that others might miss. You gain a +2 circumstance bonus when using the [Seek](content:playing-the-game/seek) action to find [hidden](content:conditions/hidden) or [undetected](content:conditions/undetected) creatures within 30 feet of you. When you target an opponent that is concealed from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one.",
  tags: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(25))),
    Effects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(-1))),
    Effects.gainCharacterOption(SelectHalflingAncestryBoost),
    Effects.gainCharacterOption(SelectHalflingHeritage),
    Effects.gainCharacterOption(SelectHalflingFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectHalflingFeat5)]),
  ],
})

export const DistractingShadows = Traits.defineTrait('ancestry/halfling/distracting-shadows', {
  name: 'Distracting Shadows',
  description:
    "*Halfling*\n\nYou have learned to remain hidden by using larger folk as a distraction to avoid drawing attention to yourself. You can use creatures that are at least one [size](content:playing-the-game/size-space-and-reach) larger than you (usually Medium or larger) as cover for the [Hide](content:skills/hide) and [Sneak](content:skills/sneak) actions, though you still can't use such creatures as cover for other uses, such as the [Take Cover](content:playing-the-game/take-cover) action.",
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const FolksyPatter = Traits.defineTrait('ancestry/halfling/folksy-patter', {
  name: 'Folksy Patter',
  description:
    '*Halfling*\n\nYou are adept at disguising coded messages as folksy idioms. Using slang, jokes, halfling loanwords, and the like, you convey a simple message consisting of three basic words (such as “Danger assassin flee” or “Meet me moonrise”). Your intended listener can attempt a DC 20 [Perception](characteristic:perception) check to discern the message. This DC is reduced by 5 if the listener is a halfling or has Folksy Patter, or by 10 if both apply. Eavesdroppers can also attempt a Perception check against your [Deception](characteristic:skill/deception) DC to discern your meaning. Any bonuses or penalties to Perception checks to [Sense Motive](content:playing-the-game/sense-motive) apply to checks to understand Folksy Patter.',
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const HalflingLore = Traits.defineTrait('ancestry/halfling/halfling-lore', {
  name: 'Halfling Lore',
  description:
    "*Halfling*\n\nYou've dutifully learned how to keep your balance and how to stick to the shadows where it's safe, important skills passed down through generations of halfling tradition. You gain the trained proficiency rank in [Acrobatics](characteristic:skill/acrobatics) and [Stealth](characteristic:skill/stealth). If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the [Additional Lore](trait:feat/additional-lore) general feat for Halfling [Lore](content:skills/lore).",
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [Effects.gainTrait(TrainedAcrobatics), Effects.gainTrait(TrainedStealth), Effects.gainTrait(AdditionalLore)],
})

export const HalflingLuck = Traits.defineTrait('ancestry/halfling/halfling-luck', {
  name: 'Halfling Luck',
  description:
    "*Fortune, Halfling*\n\n**Frequency** once per day\n\n**Trigger** You fail a skill check or saving throw\n\nYour happy-go-lucky nature makes it seem like misfortune avoids you, and to an extent, that might even be true. You can reroll the triggering check, but you must use the new result, even if it's worse.",
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(JinxedHalfling))],
  effects: [],
})

export const HalflingWeaponFamiliarity = Traits.defineTrait('ancestry/halfling/halfling-weapon-familiarity', {
  name: 'Halfling Weapon Familiarity',
  description:
    "*Halfling*\n\nYou favor traditional halfling weapons, so you've learned how to use them more effectively. You gain access to all uncommon weapons with the [halfling](content:traits/halfling) trait. You have familiarity with weapons with the halfling trait plus the sling and shortsword— for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.",
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const PrairieRider = Traits.defineTrait('ancestry/halfling/prairie-rider', {
  name: 'Prairie Rider',
  description:
    "*Halfling*\n\nYou grew up riding your clan's shaggy ponies and riding dogs. You become trained in [Nature](characteristic:skill/nature). If you would automatically become trained in Nature (from your background or class, for example), you instead become trained in a skill of your choice. You also get a +1 circumstance bonus to [Command an Animal](content:skills/command-an-animal) if the target is a traditional halfling mount, such as a pony or riding dog.",
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [Effects.gainTrait(TrainedNature)],
})

export const SureFeet = Traits.defineTrait('ancestry/halfling/sure-feet', {
  name: 'Sure Feet',
  description:
    "*Halfling*\n\nWhether keeping your balance or climbing, your feet easily find purchase. If you roll a success on an [Acrobatics](characteristic:skill/acrobatics) check to [Balance](content:skills/balance) or an [Athletics](characteristic:skill/athletics) check to [Climb](content:skills/climb), you get a critical success instead. You're not [off-guard](content:conditions/off-guard) when you attempt to Balance or Climb.",
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const TitanSlinger = Traits.defineTrait('ancestry/halfling/titan-slinger', {
  name: 'Titan Slinger',
  description:
    '*Halfling*\n\nYou have learned how to use your sling to fell enormous creatures. When you hit on an attack with a weapon of the sling group against a Large or larger creature, increase the size of the weapon damage die by one step (details on increasing weapon damage die sizes can be found on page 276).',
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const UnfetteredHalfling = Traits.defineTrait('ancestry/halfling/unfettered-halfling', {
  name: 'Unfettered Halfling',
  description:
    "*Halfling*\n\nYou were either pressed into indentured servitude or shackled in a prison, but you've since escaped and have trained to ensure you'll never be caught again. Whenever you roll a success on a check to [Escape](content:playing-the-game/escape) or a saving throw against an effect that would impose the [grabbed](content:conditions/grabbed), [immobilized](content:conditions/immobilized), or [restrained](content:conditions/restrained) condition on you, you get a critical success instead. Whenever a creature rolls a failure on a check to [Grapple](content:skills/grapple) you, it gets a critical failure instead.",
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const WatchfulHalfling = Traits.defineTrait('ancestry/halfling/watchful-halfling', {
  name: 'Watchful Halfling',
  description:
    "*Halfling*\n\nYou pay close attention to the people around you, allowing you to more easily notice when they act out of character. You gain a +2 circumstance bonus to [Perception](characteristic:perception) checks when using the [Sense Motive](content:playing-the-game/sense-motive) basic action to notice enchanted or possessed characters. If you aren't actively using Sense Motive on an enchanted or possessed character, the GM rolls a secret check, without your usual circumstance bonus, for you to potentially notice the enchantment or possession anyway.\n\nIn addition to using it for skill checks, you can use the [Aid](content:playing-the-game/aid) basic action to grant a bonus to another creature's saving throw or other check to overcome enchantment or possession. As usual for Aid, you need to prepare by using an action on your turn to encourage the creature to fight against the effect.",
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const CulturalAdaptability = Traits.defineTrait('ancestry/halfling/cultural-adaptability', {
  name: 'Cultural Adaptability',
  description:
    "*Halfling*\n\nDuring your adventures, you've honed your ability to adapt to the culture of the predominant ancestry around you. You gain the [Adopted Ancestry](trait:feat/adopted-ancestry) general feat, and you also gain one 1st-level ancestry feat from the ancestry you chose for the Adopted Ancestry feat.",
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel5],
  effects: [Effects.gainTrait(AdoptedAncestry)],
})

export const StepLively = Traits.defineTrait('ancestry/halfling/step-lively', {
  name: 'Step Lively',
  description:
    '*Halfling*\n\n**Trigger** A Large or larger enemy ends a move action adjacent to you\n\nYou are an expert at avoiding the lumbering footsteps of larger creatures. You [Step](content:playing-the-game/step) to another space adjacent to the enemy.',
  tags: [Feat, AncestryFeat, HalflingFeat, FeatLevel5],
  effects: [],
})

export const HalflingLuckAction = Abilities.defineAbility('ancestry/halfling/halfling-luck/action', {
  name: 'Halfling Luck',
  description: '*Fortune, Halfling*',
  prerequisites: [Traits.traitPrerequisite(HalflingLuck)],
  actions: [
    {
      name: 'Halfling Luck',
      description:
        "**Frequency** once per day\n\n**Trigger** You fail a skill check or saving throw\n\nYour happy-go-lucky nature makes it seem like misfortune avoids you, and to an extent, that might even be true. You can reroll the triggering check, but you must use the new result, even if it's worse.",
      action: FreeAction,
    },
  ],
})

export const StepLivelyAction = Abilities.defineAbility('ancestry/halfling/step-lively/action', {
  name: 'Step Lively',
  description: '*Halfling*',
  prerequisites: [Traits.traitPrerequisite(StepLively)],
  actions: [
    {
      name: 'Step Lively',
      description:
        '**Trigger** A Large or larger enemy ends a move action adjacent to you\n\nYou are an expert at avoiding the lumbering footsteps of larger creatures. You [Step](content:playing-the-game/step) to another space adjacent to the enemy.',
      action: Reaction,
    },
  ],
})

export const AllHalflingEntities = [
  GutsyHalfling,
  HillockHalfling,
  NomadicHalfling,
  TwilightHalfling,
  WildwoodHalfling,
  JinxedHalfling,
  Jinx,
  SelectHalflingHeritage,
  SelectHalflingFeat1,
  SelectHalflingFeat5,
  SelectHalflingAncestryBoost,
  Halfling,
  DistractingShadows,
  FolksyPatter,
  HalflingLore,
  HalflingLuck,
  HalflingLuckAction,
  HalflingWeaponFamiliarity,
  PrairieRider,
  SureFeet,
  TitanSlinger,
  UnfetteredHalfling,
  WatchfulHalfling,
  CulturalAdaptability,
  StepLively,
  StepLivelyAction,
]
