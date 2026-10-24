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
} from '@simulacrum/ruleset-pf2e/archetype'
import { HitPoints, Speed } from '@simulacrum/ruleset-pf2e/characteristic'
import { DexterityAncestryBoost, SelectAncestryBoost, StrengthAncestryFlaw, WisdomAncestryBoost } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { TrainedAcrobatics, TrainedNature, TrainedStealth } from '@simulacrum/ruleset-pf2e/skill'
import { FreeAction, Reaction, TwoActions } from '@simulacrum/ruleset-pf2e/action-type'
import { HalflingHeritage, LowLightVision } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AdoptedAncestry } from '@simulacrum/ruleset-pf2e/feat/general-feat'
import { AdditionalLore } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const GutsyHalfling = Traits.defineTrait('heritage/gutsy-halfling', {
  name: 'Gutsy Halfling',
  description:
    'Your family line is known for keeping a level head and staving off fear when the chips were down. When you roll a success on a saving throw against an emotion effect, you get a critical success instead.',
  archetypes: [Heritage, HalflingHeritage],
  effects: [],
})

export const HillockHalfling = Traits.defineTrait('heritage/hillock-halfling', {
  name: 'Hillock Halfling',
  description:
    'Accustomed to a calm life in the hills, your people find rest and relaxation especially replenishing, particularly when indulging in creature comforts. When you regain Hit Points overnight, add your level to the Hit Points regained. When anyone uses the Medicine skill to Treat your Wounds, you can eat a snack to add your level to the Hit Points you regain from their treatment.',
  archetypes: [Heritage, HalflingHeritage],
  effects: [],
})

export const NomadicHalfling = Traits.defineTrait('heritage/nomadic-halfling', {
  name: 'Nomadic Halfling',
  description:
    'Your ancestors have traveled from place to place for generations, never content to settle down. You gain two additional languages of your choice, chosen from among the common and uncommon languages available to you, and every time you take the Multilingual feat, you gain another new language.',
  archetypes: [Heritage, HalflingHeritage],
  effects: [],
})

export const TwilightHalfling = Traits.defineTrait('heritage/twilight-halfling', {
  name: 'Twilight Halfling',
  description:
    'Your ancestors performed many secret acts under the concealing cover of dusk, whether for good or ill, and over time they developed the ability to see in twilight beyond even the usual keen sight of halflings. You gain low-light vision.',
  archetypes: [Heritage, HalflingHeritage],
  effects: [Effects.gainTrait(LowLightVision)],
})

export const WildwoodHalfling = Traits.defineTrait('heritage/wildwood-halfling', {
  name: 'Wildwood Halfling',
  description:
    "You hail from deep within a jungle or forest, and you've learned how to use your small size to wriggle through undergrowth and other obstacles. You ignore any difficult terrain caused by plants and fungi, such as bushes, vines, and undergrowth.",
  archetypes: [Heritage, HalflingHeritage],
  effects: [],
})

export const JinxedHalfling = Traits.defineTrait('heritage/jinxed-halfling', {
  name: 'Jinxed Halfling',
  description:
    '*Uncommon*\n\nYou were born with a strange blessing: bereft of the typical halfling luck, you can instead manipulate the fortunes of others. You can never take the Halfling Luck feat, and you gain the Jinx action.\n\n**Jinx** ◆◆\n\n*Curse, Occult*\n\n**Frequency** once per day\n\nYou can curse another creature with clumsiness. This curse has a range of 30 feet, and you must be able to see your target. The target gets a Will saving throw against your class DC or spell DC, whichever is higher.\n\n**Success** The target is unaffected and temporarily immune for 24 hours.\n\n**Failure** The target is clumsy 1 for 1 minute.\n\n**Critical Failure** The target is clumsy 2 for 1 minute.',
  archetypes: [Heritage, HalflingHeritage],
  effects: [],
})

export const Jinx = Abilities.defineAbility('heritage/jinxed-halfling/jinx', {
  name: 'Jinx',
  description:
    '*Curse, Occult*\n\n**Frequency** once per day\n\nYou can curse another creature with clumsiness. This curse has a range of 30 feet, and you must be able to see your target. The target gets a Will saving throw against your class DC or spell DC, whichever is higher.\n\n**Success** The target is unaffected and temporarily immune for 24 hours.\n\n**Failure** The target is clumsy 1 for 1 minute.\n\n**Critical Failure** The target is clumsy 2 for 1 minute.',
  prerequisites: [Traits.traitPrerequisite(JinxedHalfling)],
  actions: [{ name: 'Jinx', action: TwoActions }],
})

export const SelectHalflingHeritage = CharacterOptions.selectTraitOption('ancestry/halfling/select-heritage', {
  name: 'Halfling Heritage',
  filter: { archetypes: [[HalflingHeritage, VersatileHeritage]] },
})

export const SelectHalflingFeat1 = CharacterOptions.selectTraitOption('ancestry/halfling/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { archetypes: [AncestryFeat, [HalflingFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectHalflingFeat5 = CharacterOptions.selectTraitOption('ancestry/halfling/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    archetypes: [AncestryFeat, [HalflingFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const Halfling = Traits.defineTrait('ancestry/halfling', {
  name: 'Halfling',
  description:
    "*Halfling, Humanoid*\n\n_Halflings are a short, resilient people who exhibit remarkable curiosity and humor._\n\nClaiming no place as their own, halflings control few settlements larger than villages. Instead, they frequently live among humans within larger cities, carving out small communities alongside taller folk. Optimistic, cheerful, and driven by powerful wanderlust, halflings make up for their short stature with an abundance of bravado. At once excitable and easygoing, halflings are the best kind of opportunists, and their passions favor joy over violence. While their curiosity sometimes drives them toward adventure, halflings also carry strong ties to house and home.\n\nIf you want to play a character who must contend with these opposing drives toward adventure and comfort, you should play a halfling.\n\n**You Might...**\n\n- Get along well with a wide variety of people and enjoy meeting new friends.\n\n- Find it difficult to resist indulging your curiosity, even when you know it's going to lead to trouble.\n\n**Others Probably...**\n\n- Appreciate your ability to always find a silver lining or something to laugh about, no matter how dire the situation.\n\n- Think you bring good luck with you.\n\n**Physical Description**\n\nHalflings are short humanoids who look vaguely like smaller humans. They rarely grow to be more than 3 feet in height. Halfling proportions vary, with some looking like shorter adult humans with slightly larger heads and others having proportions closer to those of a human child. Most halflings prefer to walk barefoot rather than wear shoes, and those who do so develop roughly calloused soles on their feet over time. Tufts of thick, often-curly hair warm the tops of their broad, tanned feet. Halfling skin tones tend toward rich, tawny shades like amber or oak, and their hair color ranges from a light golden blond to raven black.\n\nHalflings reach physical adulthood around the age of 20. A typical halfling can live to be around 150 years old.\n\n**Society**\n\nDespite their jovial and friendly nature, halflings don't usually tend to congregate. They have few cultural centers in the Inner Sea region, and they instead tend to weave themselves throughout the societies of the world. Halflings eke out whatever living they can manage, many performing menial labor or holding simple service jobs. Some halflings reject city life, instead turning to the open road and traveling from place to place in search of fortune and fame. These nomadic halflings often travel in small groups, sharing hardships and simple pleasures among close friends and family. Halfling names are usually two to three syllables, with a gentle sound that avoids hard consonants. Preferring their names to sound humble, halflings see overly long or complex names as a sign of arrogance for their people. However, they understand that elves and humans might have longer names to suit their own aesthetics.\n\n**Alignment and Religion**\n\nHalflings are loyal to their friends and their family, but they aren't afraid to do what needs to be done in order to survive. Wherever halflings go, they seamlessly blend into the society they find themselves in, adapting to the culture and beliefs of the predominant ancestry around them and adding their uniquely halfling twists, creating a blend of cultural diffusion that enriches both cultures. Halflings favor gods that either grant luck, like Desna, or encourage guile, like Norgorber, and many appreciate Cayden Cailean's role as a liberator, as well as any religions common among other ancestries around them.\n\n**Popular Edicts** share good meals with friends and strangers alike, stand up to bullies and oppressors, stay beneath the taller folk's notice\n**Popular Anathema** take your luck for granted\n\n**Names**\n\nAnafa, Antal, Bellis, Boram, Etune, Filiu, Jamir, Kaleb, Linna, Marra, Miro, Rillka, Sistra, Sumak, Yamyra\n\n**Halfling Mechanics**\n\n**Hit Points**\n\n6\n\n**Size**\n\nSmall\n\n**Speed**\n\n25 feet\n\n**Attribute Boosts**\n\nDexterity, Wisdom, Free\n\n**Attribute Flaws**\n\nStrength\n\n**Languages**\n\nCommon\n\nHalfling\n\nAdditional languages equal to your Intelligence modifier (if it's positive). Choose from Dwarven, Elven, Gnomish, Goblin, and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Keen Eyes**\n\nYour eyes are sharp, allowing you to make out small details about concealed or even invisible creatures that others might miss. You gain a +2 circumstance bonus when using the Seek action to find hidden or undetected creatures within 30 feet of you. When you target an opponent that is concealed from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one.",
  archetypes: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(25))),
    Effects.gainTrait(DexterityAncestryBoost),
    Effects.gainTrait(WisdomAncestryBoost),
    Effects.gainTrait(StrengthAncestryFlaw),
    Effects.gainCharacterOption(SelectAncestryBoost),
    Effects.gainCharacterOption(SelectHalflingHeritage),
    Effects.gainCharacterOption(SelectHalflingFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectHalflingFeat5)]),
  ],
})

export const DistractingShadows = Traits.defineTrait('ancestry/halfling/distracting-shadows', {
  name: 'Distracting Shadows',
  description:
    "*Halfling*\n\nYou have learned to remain hidden by using larger folk as a distraction to avoid drawing attention to yourself. You can use creatures that are at least one size larger than you (usually Medium or larger) as cover for the Hide and Sneak actions, though you still can't use such creatures as cover for other uses, such as the Take Cover action.",
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const FolksyPatter = Traits.defineTrait('ancestry/halfling/folksy-patter', {
  name: 'Folksy Patter',
  description:
    '*Halfling*\n\nYou are adept at disguising coded messages as folksy idioms. Using slang, jokes, halfling loanwords, and the like, you convey a simple message consisting of three basic words (such as “Danger assassin flee” or “Meet me moonrise”). Your intended listener can attempt a DC 20 Perception check to discern the message. This DC is reduced by 5 if the listener is a halfling or has Folksy Patter, or by 10 if both apply. Eavesdroppers can also attempt a Perception check against your Deception DC to discern your meaning. Any bonuses or penalties to Perception checks to Sense Motive apply to checks to understand Folksy Patter.',
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const HalflingLore = Traits.defineTrait('ancestry/halfling/halfling-lore', {
  name: 'Halfling Lore',
  description:
    "*Halfling*\n\nYou've dutifully learned how to keep your balance and how to stick to the shadows where it's safe, important skills passed down through generations of halfling tradition. You gain the trained proficiency rank in Acrobatics and Stealth. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the Additional Lore general feat for Halfling Lore.",
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [Effects.gainTrait(TrainedAcrobatics), Effects.gainTrait(TrainedStealth), Effects.gainTrait(AdditionalLore)],
})

export const HalflingLuck = Traits.defineTrait('ancestry/halfling/halfling-luck', {
  name: 'Halfling Luck',
  description:
    "*Fortune, Halfling*\n\n**Frequency** once per day\n\n**Trigger** You fail a skill check or saving throw\n\nYour happy-go-lucky nature makes it seem like misfortune avoids you, and to an extent, that might even be true. You can reroll the triggering check, but you must use the new result, even if it's worse.",
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  prerequisites: [Expressions.not(Traits.traitPrerequisite(JinxedHalfling))],
  effects: [],
})

export const HalflingWeaponFamiliarity = Traits.defineTrait('ancestry/halfling/halfling-weapon-familiarity', {
  name: 'Halfling Weapon Familiarity',
  description:
    "*Halfling*\n\nYou favor traditional halfling weapons, so you've learned how to use them more effectively. You gain access to all uncommon weapons with the halfling trait. You have familiarity with weapons with the halfling trait plus the sling and shortsword— for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.",
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const PrairieRider = Traits.defineTrait('ancestry/halfling/prairie-rider', {
  name: 'Prairie Rider',
  description:
    "*Halfling*\n\nYou grew up riding your clan's shaggy ponies and riding dogs. You become trained in Nature. If you would automatically become trained in Nature (from your background or class, for example), you instead become trained in a skill of your choice. You also get a +1 circumstance bonus to Command an Animal if the target is a traditional halfling mount, such as a pony or riding dog.",
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [Effects.gainTrait(TrainedNature)],
})

export const SureFeet = Traits.defineTrait('ancestry/halfling/sure-feet', {
  name: 'Sure Feet',
  description:
    "*Halfling*\n\nWhether keeping your balance or climbing, your feet easily find purchase. If you roll a success on an Acrobatics check to Balance or an Athletics check to Climb, you get a critical success instead. You're not off-guard when you attempt to Balance or Climb.",
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const TitanSlinger = Traits.defineTrait('ancestry/halfling/titan-slinger', {
  name: 'Titan Slinger',
  description:
    '*Halfling*\n\nYou have learned how to use your sling to fell enormous creatures. When you hit on an attack with a weapon of the sling group against a Large or larger creature, increase the size of the weapon damage die by one step (details on increasing weapon damage die sizes can be found on page 276).',
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const UnfetteredHalfling = Traits.defineTrait('ancestry/halfling/unfettered-halfling', {
  name: 'Unfettered Halfling',
  description:
    "*Halfling*\n\nYou were either pressed into indentured servitude or shackled in a prison, but you've since escaped and have trained to ensure you'll never be caught again. Whenever you roll a success on a check to Escape or a saving throw against an effect that would impose the grabbed, immobilized, or restrained condition on you, you get a critical success instead. Whenever a creature rolls a failure on a check to Grapple you, it gets a critical failure instead.",
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const WatchfulHalfling = Traits.defineTrait('ancestry/halfling/watchful-halfling', {
  name: 'Watchful Halfling',
  description:
    "*Halfling*\n\nYou pay close attention to the people around you, allowing you to more easily notice when they act out of character. You gain a +2 circumstance bonus to Perception checks when using the Sense Motive basic action to notice enchanted or possessed characters. If you aren't actively using Sense Motive on an enchanted or possessed character, the GM rolls a secret check, without your usual circumstance bonus, for you to potentially notice the enchantment or possession anyway.\n\nIn addition to using it for skill checks, you can use the Aid basic action to grant a bonus to another creature's saving throw or other check to overcome enchantment or possession. As usual for Aid, you need to prepare by using an action on your turn to encourage the creature to fight against the effect.",
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel1],
  effects: [],
})

export const CulturalAdaptability = Traits.defineTrait('ancestry/halfling/cultural-adaptability', {
  name: 'Cultural Adaptability',
  description:
    "*Halfling*\n\nDuring your adventures, you've honed your ability to adapt to the culture of the predominant ancestry around you. You gain the Adopted Ancestry general feat, and you also gain one 1st-level ancestry feat from the ancestry you chose for the Adopted Ancestry feat.",
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel5],
  effects: [Effects.gainTrait(AdoptedAncestry)],
})

export const StepLively = Traits.defineTrait('ancestry/halfling/step-lively', {
  name: 'Step Lively',
  description:
    '*Halfling*\n\n**Trigger** A Large or larger enemy ends a move action adjacent to you\n\nYou are an expert at avoiding the lumbering footsteps of larger creatures. You Step to another space adjacent to the enemy.',
  archetypes: [Feat, AncestryFeat, HalflingFeat, FeatLevel5],
  effects: [],
})

export const HalflingLuckAction = Abilities.defineAbility('ancestry/halfling/halfling-luck/action', {
  name: 'Halfling Luck',
  description:
    "*Fortune, Halfling*\n\n**Frequency** once per day\n\n**Trigger** You fail a skill check or saving throw\n\nYour happy-go-lucky nature makes it seem like misfortune avoids you, and to an extent, that might even be true. You can reroll the triggering check, but you must use the new result, even if it's worse.",
  prerequisites: [Traits.traitPrerequisite(HalflingLuck)],
  actions: [{ name: 'Halfling Luck', action: FreeAction }],
})

export const StepLivelyAction = Abilities.defineAbility('ancestry/halfling/step-lively/action', {
  name: 'Step Lively',
  description:
    '*Halfling*\n\n**Trigger** A Large or larger enemy ends a move action adjacent to you\n\nYou are an expert at avoiding the lumbering footsteps of larger creatures. You Step to another space adjacent to the enemy.',
  prerequisites: [Traits.traitPrerequisite(StepLively)],
  actions: [{ name: 'Step Lively', action: Reaction }],
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
