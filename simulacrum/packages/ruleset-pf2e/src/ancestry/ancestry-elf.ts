import { Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
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
import {
  ConstitutionAncestryFlaw,
  DexterityAncestryBoost,
  IntelligenceAncestryBoost,
  SelectAncestryBoost,
} from '@simulacrum/ruleset-pf2e/attribute-boost'
import { TrainedArcana, TrainedNature } from '@simulacrum/ruleset-pf2e/skill'
import { Darkvision, ElfHeritage, LowLightVision } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AiuvarinHeritage } from '@simulacrum/ruleset-pf2e/ancestry/versatile-heritage'
import { AdditionalLore } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const AncientElf = Traits.defineTrait('heritage/ancient-elf', {
  name: 'Ancient Elf',
  description:
    "In your long life, you've dabbled in many paths and many styles. A typical ancient elf is at least 100 years old, though you might be younger at the GM's discretion. Choose a class other than your own. You gain the multiclass dedication feat for that class, even though you don't meet its level prerequisite. You must still meet its other prerequisites to gain the feat.",
  archetypes: [Heritage, ElfHeritage],
  effects: [],
})

export const ArcticElf = Traits.defineTrait('heritage/arctic-elf', {
  name: 'Arctic Elf',
  description:
    'You dwell deep in the frozen north and have gained incredible resilience against cold environments, granting you cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).',
  archetypes: [Heritage, ElfHeritage],
  effects: [],
})

export const CavernElf = Traits.defineTrait('heritage/cavern-elf', {
  name: 'Cavern Elf',
  description: 'You were born or spent many years in underground tunnels or caverns where light is scarce. You gain darkvision.',
  archetypes: [Heritage, ElfHeritage],
  effects: [Effects.gainTrait(Darkvision)],
})

export const SeerElf = Traits.defineTrait('heritage/seer-elf', {
  name: 'Seer Elf',
  description:
    'You have an inborn ability to detect and understand magical phenomena. You can cast the _detect magic_ cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. In addition, you gain a +1 circumstance bonus to checks to Identify Magic and to Decipher Writing of a magical nature. These skill actions typically use the Arcana, Nature, Occultism, or Religion skill.',
  archetypes: [Heritage, ElfHeritage],
  effects: [],
})

export const WhisperElf = Traits.defineTrait('heritage/whisper-elf', {
  name: 'Whisper Elf',
  description:
    "Your ears are finely tuned, able to detect even the slightest whispers of sound. You gain a +2 circumstance bonus when using the Seek action to find hidden or undetected creatures within 30 feet of you. When you target an opponent that is concealed from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one. This benefit doesn't apply if you can't hear or if the creature is incapable of making sound (for example, if it's affected by a _silence_ spell).",
  archetypes: [Heritage, ElfHeritage],
  effects: [],
})

export const WoodlandElf = Traits.defineTrait('heritage/woodland-elf', {
  name: 'Woodland Elf',
  description:
    "You're adapted to life in the forest, the deep jungle, or a similar environment, and you know how to climb trees and use foliage to your advantage. When Climbing trees, vines, and other foliage, you move at half your Speed on a success and at full Speed on a critical success (and you move at full Speed on a success if you have Quick Climb). This doesn't affect you if you're using a climb Speed.\n\nYou can always use the Take Cover action when you are within forest terrain to gain cover, even if you're not next to an obstacle you can Take Cover behind.",
  archetypes: [Heritage, ElfHeritage],
  effects: [],
})

export const SelectElfHeritage = CharacterOptions.selectTraitOption('ancestry/elf/select-heritage', {
  name: 'Elf Heritage',
  filter: { archetypes: [[ElfHeritage, VersatileHeritage]] },
})

export const SelectElfFeat1 = CharacterOptions.selectTraitOption('ancestry/elf/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { archetypes: [AncestryFeat, [ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectElfFeat5 = CharacterOptions.selectTraitOption('ancestry/elf/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: { archetypes: [AncestryFeat, [ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]] },
})

export const Elf = Traits.defineTrait('ancestry/elf', {
  name: 'Elf',
  description:
    "*Elf, Humanoid*\n\n_Elves are a tall, long-lived people with a strong tradition of art and magic._\n\nAs an ancient people, elves have seen great change and have the perspective that can come only from watching the arc of history. After leaving Golarion in ancient times, they returned to a changed land, and they still struggle to reclaim their ancestral homes. Elves value kindness, intellect, and beauty, with many elves striving to improve their manners, appearance, and culture. Their studies delve into a level of detail that most shorter-lived peoples find excessive or inefficient. Elves are often rather private people, steeped in the secrets of their groves and kinship groups. They're slow to build friendships outside their kinsfolk, as elves who spend their lives among shorter-lived peoples often become morose after watching generations of companions age and die. These elves are known as Forlorn among their fellow elves.\n\nIf you want a character who is magical, mystical, and mysterious, you should play an elf.\n\n**You Might...**\n\n- Carefully curate your relationships with people with shorter lifespans.\n\n- Adopt specialized or obscure interests simply for the sake of mastering them.\n\n**Others Probably...**\n\n- Focus on your appearance, either admiring your grace or treating you as if you're physically fragile.\n\n- Worry that you privately look down on them, or feel like you're condescending and aloof.\n\n**Physical Description**\n\nWhile generally taller than humans, elves possess a fragile grace, accentuated by long features and sharply pointed ears. Their eyes are wide and rounded, featuring large and often vibrantly colored pupils that make up the entire visible portion of the eye. These pupils give them an alien look and allow them to see sharply even in very little light.\n\nElves gradually adapt to their environment and their companions, and they often take on physical traits reflecting their surroundings. An elf who has dwelled in primeval forests for centuries, for example, might exhibit verdant hair and gnarled fingers, while one who's lived in a desert might have golden pupils and skin. Elves reach physical adulthood around the age of 20, though they aren't considered to be fully emotionally mature by other elves until closer to the passing of their first century. A typical elf can live to around 600 years old.\n\n**Society**\n\nThe inborn patience and intellectual curiosity of elves make them excellent sages, philosophers, and wizards, and their societies are built upon their inherent sense of wonder and knowledge.\n\nElves hold deeply seated ideals of individualism, allowing each elf to explore multiple occupations before alighting on a particular pursuit or passion that suits her best. Elves bear notorious grudges against rivals, which elves call ‘_ilduliel_,' but these antagonistic relationships can sometimes blossom into friendships over time. An elf keeps their personal name secret among their family, while giving a nickname when meeting other people. This nickname can change over time, due to events in the elf's life or even on a whim. A single elf might be known by many names by associates of different ages and regions.\n\nElven names consist of multiple syllables and are meant to flow lyrically—at least in the Elven tongue.\n\n**Alignment and Religion**\n\nElves are often emotional and capricious, yet they hold high ideals close to their hearts. They prefer deities who share their love of all things mystic and artistic. Desna and Shelyn are particular favorites, the former for her sense of wonder and the latter for her appreciation of artistry. Calistria is the most notorious of elven deities, as she represents many of the elven ideals taken to the extreme.\n\n**Popular Edicts** find beauty in nature and art, explore things others would keep hidden, demonstrate superiority to your rival\n**Popular Anathema** abandon your own path, force another creature to do something\n\n**Names**\n\nAerel, Amrunelara, Caladrel, Dardlara, Faunra, Heldalel, Jathal, Lanliss, Oparal, Seldlon, Soumral, Talathel, Tessara, Variel, Yalandlara, Zordlon\n\n**Elf Mechanics**\n\n**Hit Points**\n\n6\n\n**Size**\n\nMedium\n\n**Speed**\n\n30 feet\n\n**Attribute Boosts**\n\nDexterity, Intelligence, Free\n\n**Attribute Flaws**\n\nConstitution\n\n**Languages**\n\nCommon\n\nElven\n\nAdditional languages equal to your Intelligence modifier (if it's positive). Choose from Draconic, Empyrean, Fey, Gnomish, Goblin, Kholo, Orcish, and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Low-Light Vision**\n\nYou can see in dim light as though it were bright light, so you ignore the concealed condition due to dim light.",
  archetypes: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(30))),
    Effects.gainTrait(DexterityAncestryBoost),
    Effects.gainTrait(IntelligenceAncestryBoost),
    Effects.gainTrait(ConstitutionAncestryFlaw),
    Effects.gainCharacterOption(SelectAncestryBoost),
    Effects.gainTrait(LowLightVision),
    Effects.gainCharacterOption(SelectElfHeritage),
    Effects.gainCharacterOption(SelectElfFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectElfFeat5)]),
  ],
})

export const AncestralLongevity = Traits.defineTrait('ancestry/elf/ancestral-longevity', {
  name: 'Ancestral Longevity',
  description:
    '*Elf*\n\n**Prerequisites** at least 100 years old\n\nYou have accumulated a vast array of lived knowledge over the years. During your daily preparations, you can reflect upon your life experiences to gain the trained proficiency rank in one skill of your choice. This proficiency lasts until you prepare again. Since this proficiency is temporary, you can’t use it as a prerequisite for a skill increase or a permanent character option like a feat.',
  archetypes: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const ElvenLore = Traits.defineTrait('ancestry/elf/elven-lore', {
  name: 'Elven Lore',
  description:
    "*Elf*\n\nYou've studied traditional elven arts, learning about arcane magic and the world around you. You gain the trained proficiency rank in Arcana and Nature. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the Additional Lore general feat for Elf Lore",
  archetypes: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [Effects.gainTrait(TrainedArcana), Effects.gainTrait(TrainedNature), Effects.gainTrait(AdditionalLore)],
})

export const ElvenWeaponFamiliarity = Traits.defineTrait('ancestry/elf/elven-weapon-familiarity', {
  name: 'Elven Weapon Familiarity',
  description:
    '*Elf*\n\nYou favor bows and other elegant weapons. You gain access to all uncommon weapons with the elf trait. You have familiarity with weapons with the elf trait plus longbows, composite longbows, rapiers, shortbows, and composite shortbows—for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.',
  archetypes: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const Forlorn = Traits.defineTrait('ancestry/elf/forlorn', {
  name: 'Forlorn',
  description:
    '*Elf*\n\nWatching your friends age and die fills you with moroseness that protects you against harmful emotions. You gain a +1 circumstance bonus to saving throws against emotion effects. If you roll a success on a saving throw against an emotion effect, you get a critical success instead.',
  archetypes: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const NimbleElf = Traits.defineTrait('ancestry/elf/nimble-elf', {
  name: 'Nimble Elf',
  description: '*Elf*\n\nYour muscles are tightly honed. Your Speed increases by 5 feet.',
  archetypes: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5)))],
})

export const OtherworldlyMagic = Traits.defineTrait('ancestry/elf/otherworldly-magic', {
  name: 'Otherworldly Magic',
  description:
    "*Elf*\n\nYour elven magic manifests as a simple arcane spell, even if you aren't formally trained in magic. Choose one cantrip from the arcane spell list. You can cast this cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.",
  archetypes: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const UnwaveringMien = Traits.defineTrait('ancestry/elf/unwavering-mien', {
  name: 'Unwavering Mien',
  description:
    '*Elf*\n\nYour mystic control and meditations allow you to resist external influences upon your consciousness. Whenever you are affected by a mental effect that lasts at least 2 rounds, you can reduce the duration by 1 round.\n\nYou still require natural sleep, but you treat your saving throws against effects that would cause you to fall asleep as one degree of success better. This protects only against sleep effects, not against other forms of falling unconscious.',
  archetypes: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const AgelessPatience = Traits.defineTrait('ancestry/elf/ageless-patience', {
  name: 'Ageless Patience',
  description:
    "*Elf*\n\nYou work at a pace born from longevity that enhances your thoroughness. You can voluntarily spend twice as much time as normal on a Perception check or skill check that takes 1 action or longer. If you do, you gain a +2 circumstance bonus to the check and don't automatically reduce your degree of success on a natural 1 (you get a critical failure only if your result is 10 lower than the DC). For example, you could get these benefits if you spent 2 actions to Seek, which normally takes 1 action. You can get these benefits during exploration by taking twice as long exploring as normal, or in downtime by spending twice as much downtime.\n\nThe GM might determine a situation doesn't grant you a benefit if a delay would be directly counterproductive to your success, such as a tense negotiation with an impatient creature.",
  archetypes: [Feat, AncestryFeat, ElfFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const AncestralSuspicion = Traits.defineTrait('ancestry/elf/ancestral-suspicion', {
  name: 'Ancestral Suspicion',
  description:
    "*Elf*\n\nLong-lived elves have seen civilizations rise and fall, often at the hands of outside forces. As a result, they have developed a wariness of others who might seek to influence or control them. You've been trained to resist such manipulation, gaining a +2 circumstance bonus to saving throws against effects that would make you controlled, such as _dominate_, and to Perception checks to Sense Motive when trying to determine if a creature is under the influence of such an effect. When you roll a success on a saving throw against such an effect, you get a critical success instead.",
  archetypes: [Feat, AncestryFeat, ElfFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const MartialExperience = Traits.defineTrait('ancestry/elf/martial-experience', {
  name: 'Martial Experience',
  description:
    "*Elf*\n\nYou've crossed blades with a wide variety of foes wielding a wide variety of weapons, and you've learned the basics of fighting with nearly any of them. When wielding a weapon you aren't proficient with, treat your level as your proficiency bonus.\n\nAt 11th level, you become trained in all weapons.",
  archetypes: [Feat, AncestryFeat, ElfFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const AllElfEntities = [
  AncientElf,
  ArcticElf,
  CavernElf,
  SeerElf,
  WhisperElf,
  WoodlandElf,
  SelectElfHeritage,
  SelectElfFeat1,
  SelectElfFeat5,
  Elf,
  AncestralLongevity,
  ElvenLore,
  ElvenWeaponFamiliarity,
  Forlorn,
  NimbleElf,
  OtherworldlyMagic,
  UnwaveringMien,
  AgelessPatience,
  AncestralSuspicion,
  MartialExperience,
]
