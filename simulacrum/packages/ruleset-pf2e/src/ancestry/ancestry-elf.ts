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
  FeatLevel9,
  Heritage,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/tag'
import { Constitution, Dexterity, HitPoints, Intelligence, Speed } from '@simulacrum/ruleset-pf2e/characteristic'
import {
  CharismaAncestryBoost,
  ConstitutionAncestryBoost,
  StrengthAncestryBoost,
  WisdomAncestryBoost,
} from '@simulacrum/ruleset-pf2e/attribute-boost'
import { TrainedArcana, TrainedNature } from '@simulacrum/ruleset-pf2e/skill'
import { SingleAction } from '@simulacrum/ruleset-pf2e/action-type'
import { Darkvision, ElfHeritage, LowLightVision } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AiuvarinHeritage } from '@simulacrum/ruleset-pf2e/ancestry/versatile-heritage'
import { AdditionalLore } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const AncientElf = Traits.defineTrait('heritage/ancient-elf', {
  name: 'Ancient Elf',
  description:
    "In your long life, you've dabbled in many paths and many styles. A typical ancient elf is at least 100 years old, though you might be younger at the GM's discretion. Choose a class other than your own. You gain the [multiclass dedication](content:traits/multiclass) feat for that class, even though you don't meet its level prerequisite. You must still meet its other prerequisites to gain the feat.",
  tags: [Heritage, ElfHeritage],
  effects: [],
})

export const ArcticElf = Traits.defineTrait('heritage/arctic-elf', {
  name: 'Arctic Elf',
  description:
    'You dwell deep in the frozen north and have gained incredible resilience against cold environments, granting you cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).',
  tags: [Heritage, ElfHeritage],
  effects: [],
})

export const CavernElf = Traits.defineTrait('heritage/cavern-elf', {
  name: 'Cavern Elf',
  description:
    'You were born or spent many years in underground tunnels or caverns where light is scarce. You gain [darkvision](content:playing-the-game/darkvision-and-greater-darkvision).',
  tags: [Heritage, ElfHeritage],
  effects: [Effects.gainTrait(Darkvision)],
})

export const SeerElf = Traits.defineTrait('heritage/seer-elf', {
  name: 'Seer Elf',
  description:
    'You have an inborn ability to detect and understand magical phenomena. You can cast the [_detect magic_](ability:spell/detect-magic) cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. In addition, you gain a +1 circumstance bonus to checks to [Identify Magic](content:skills/identify-magic) and to [Decipher Writing](content:skills/decipher-writing) of a magical nature. These skill actions typically use the [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), or [Religion](characteristic:skill/religion) skill.',
  tags: [Heritage, ElfHeritage],
  effects: [],
})

export const WhisperElf = Traits.defineTrait('heritage/whisper-elf', {
  name: 'Whisper Elf',
  description:
    "Your ears are finely tuned, able to detect even the slightest whispers of sound. You gain a +2 circumstance bonus when using the [Seek](content:playing-the-game/seek) action to find [hidden](content:conditions/hidden) or [undetected](content:conditions/undetected) creatures within 30 feet of you. When you target an opponent that is [concealed](content:conditions/concealed) from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one. This benefit doesn't apply if you can't hear or if the creature is incapable of making sound (for example, if it's affected by a [_silence_](ability:spell/silence) spell).",
  tags: [Heritage, ElfHeritage],
  effects: [],
})

export const WoodlandElf = Traits.defineTrait('heritage/woodland-elf', {
  name: 'Woodland Elf',
  description:
    "You're adapted to life in the forest, the deep jungle, or a similar environment, and you know how to climb trees and use foliage to your advantage. When [Climbing](content:skills/climb) trees, vines, and other foliage, you move at half your [Speed](characteristic:speed) on a success and at full Speed on a critical success (and you move at full Speed on a success if you have [Quick Climb](trait:feat/quick-climb)). This doesn't affect you if you're using a climb Speed.\n\nYou can always use the [Take Cover](content:playing-the-game/take-cover) action when you are within forest terrain to gain cover, even if you're not next to an obstacle you can Take Cover behind.",
  tags: [Heritage, ElfHeritage],
  effects: [],
})

export const SelectElfHeritage = CharacterOptions.selectTraitOption('ancestry/elf/select-heritage', {
  name: 'Elf Heritage',
  filter: { tags: [[ElfHeritage, VersatileHeritage]] },
})

export const SelectElfFeat1 = CharacterOptions.selectTraitOption('ancestry/elf/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { tags: [AncestryFeat, [ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectElfFeat5 = CharacterOptions.selectTraitOption('ancestry/elf/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: { tags: [AncestryFeat, [ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]] },
})

export const SelectElfFeat9 = CharacterOptions.selectTraitOption('ancestry/elf/select-feat-9', {
  name: 'Ancestry Feat (Level 9)',
  filter: { tags: [AncestryFeat, [ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5, FeatLevel9]] },
})

export const SelectElfAncestryBoost = CharacterOptions.selectTraitOption('ancestry/elf/select-boost', {
  name: 'Ancestry Boost',
  filter: { specificOptions: [StrengthAncestryBoost, ConstitutionAncestryBoost, WisdomAncestryBoost, CharismaAncestryBoost] },
})

export const Elf = Traits.defineTrait('ancestry/elf', {
  name: 'Elf',
  description:
    "*Elf, Humanoid*\n\n_Elves are a tall, long-lived people with a strong tradition of art and magic._\n\nIf you want a character who is magical, mystical, and mysterious, you should play an elf.\n\nRead the full entry in [Elves](content:ancestries-and-backgrounds/elves).\n\n**Hit Points** 6\n\n**Size** Medium\n\n**Speed** 30 feet\n\n**Attribute Boosts** Dexterity, Intelligence, Free\n\n**Attribute Flaws** Constitution\n\n**Languages** [Common](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) [Elven](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) Additional languages equal to your [Intelligence modifier](characteristic:intelligence) (if it's positive). Choose from [Draconic](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Empyrean](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Fey](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Gnomish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Goblin](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Kholo](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Orcish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Low-Light Vision** You can see in dim light as though it were bright light, so you ignore the [concealed](content:conditions/concealed) condition due to dim light.",
  tags: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(30))),
    Effects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(-1))),
    Effects.gainCharacterOption(SelectElfAncestryBoost),
    Effects.gainTrait(LowLightVision),
    Effects.gainCharacterOption(SelectElfHeritage),
    Effects.gainCharacterOption(SelectElfFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectElfFeat5)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [Effects.gainCharacterOption(SelectElfFeat9)]),
  ],
})

export const AncestralLongevity = Traits.defineTrait('ancestry/elf/ancestral-longevity', {
  name: 'Ancestral Longevity',
  description:
    '*Elf*\n\n**Prerequisites** at least 100 years old\n\nYou have accumulated a vast array of lived knowledge over the years. During your daily preparations, you can reflect upon your life experiences to gain the trained proficiency rank in one skill of your choice. This proficiency lasts until you prepare again. Since this proficiency is temporary, you can’t use it as a prerequisite for a skill increase or a permanent character option like a feat.',
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const ElvenLore = Traits.defineTrait('ancestry/elf/elven-lore', {
  name: 'Elven Lore',
  description:
    "*Elf*\n\nYou've studied traditional elven arts, learning about arcane magic and the world around you. You gain the trained proficiency rank in [Arcana](characteristic:skill/arcana) and [Nature](characteristic:skill/nature). If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the [Additional Lore](trait:feat/additional-lore) general feat for Elf [Lore](content:skills/lore)",
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [Effects.gainTrait(TrainedArcana), Effects.gainTrait(TrainedNature), Effects.gainTrait(AdditionalLore)],
})

export const ElvenWeaponFamiliarity = Traits.defineTrait('ancestry/elf/elven-weapon-familiarity', {
  name: 'Elven Weapon Familiarity',
  description:
    '*Elf*\n\nYou favor bows and other elegant weapons. You gain access to all uncommon weapons with the [elf](content:traits/elf) trait. You have familiarity with weapons with the elf trait plus longbows, composite longbows, rapiers, shortbows, and composite shortbows—for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.',
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const Forlorn = Traits.defineTrait('ancestry/elf/forlorn', {
  name: 'Forlorn',
  description:
    '*Elf*\n\nWatching your friends age and die fills you with moroseness that protects you against harmful emotions. You gain a +1 circumstance bonus to saving throws against emotion effects. If you roll a success on a saving throw against an emotion effect, you get a critical success instead.',
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const NimbleElf = Traits.defineTrait('ancestry/elf/nimble-elf', {
  name: 'Nimble Elf',
  description: '*Elf*\n\nYour muscles are tightly honed. Your [Speed](characteristic:speed) increases by 5 feet.',
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5)))],
})

export const OtherworldlyMagic = Traits.defineTrait('ancestry/elf/otherworldly-magic', {
  name: 'Otherworldly Magic',
  description:
    "*Elf*\n\nYour elven magic manifests as a simple arcane spell, even if you aren't formally trained in magic. Choose one cantrip from the [arcane](trait:spellcasting/arcane-spell-list) spell list. You can cast this cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.",
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const UnwaveringMien = Traits.defineTrait('ancestry/elf/unwavering-mien', {
  name: 'Unwavering Mien',
  description:
    '*Elf*\n\nYour mystic control and meditations allow you to resist external influences upon your consciousness. Whenever you are affected by a mental effect that lasts at least 2 rounds, you can reduce the duration by 1 round.\n\nYou still require natural sleep, but you treat your saving throws against effects that would cause you to fall asleep as one degree of success better. This protects only against sleep effects, not against other forms of falling [unconscious](content:conditions/unconscious).',
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel1],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const AgelessPatience = Traits.defineTrait('ancestry/elf/ageless-patience', {
  name: 'Ageless Patience',
  description:
    "*Elf*\n\nYou work at a pace born from longevity that enhances your thoroughness. You can voluntarily spend twice as much time as normal on a [Perception](characteristic:perception) check or skill check that takes 1 action or longer. If you do, you gain a +2 circumstance bonus to the check and don't automatically reduce your degree of success on a natural 1 (you get a critical failure only if your result is 10 lower than the DC). For example, you could get these benefits if you spent 2 actions to [Seek](content:playing-the-game/seek), which normally takes 1 action. You can get these benefits during exploration by taking twice as long exploring as normal, or in downtime by spending twice as much downtime.\n\nThe GM might determine a situation doesn't grant you a benefit if a delay would be directly counterproductive to your success, such as a tense negotiation with an impatient creature.",
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const AncestralSuspicion = Traits.defineTrait('ancestry/elf/ancestral-suspicion', {
  name: 'Ancestral Suspicion',
  description:
    "*Elf*\n\nLong-lived elves have seen civilizations rise and fall, often at the hands of outside forces. As a result, they have developed a wariness of others who might seek to influence or control them. You've been trained to resist such manipulation, gaining a +2 circumstance bonus to saving throws against effects that would make you controlled, such as _dominate_, and to [Perception](characteristic:perception) checks to [Sense Motive](content:playing-the-game/sense-motive) when trying to determine if a creature is under the influence of such an effect. When you roll a success on a saving throw against such an effect, you get a critical success instead.",
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const MartialExperience = Traits.defineTrait('ancestry/elf/martial-experience', {
  name: 'Martial Experience',
  description:
    "*Elf*\n\nYou've crossed blades with a wide variety of foes wielding a wide variety of weapons, and you've learned the basics of fighting with nearly any of them. When wielding a weapon you aren't proficient with, treat your level as your proficiency bonus.\n\nAt 11th level, you become trained in all weapons.",
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const ElfStep = Traits.defineTrait('ancestry/elf/elf-step', {
  name: 'Elf Step',
  description: '*Elf*\n\nYou move in a graceful dance, and even your steps are broad. You [Step](content:playing-the-game/step) 5 feet twice.',
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel9],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const ExpertLongevity = Traits.defineTrait('ancestry/elf/expert-longevity', {
  name: 'Expert Longevity',
  description:
    "*Elf*\n\n**Prerequisites** [Ancestral Longevity](trait:ancestry/elf/ancestral-longevity)\n\nYou've continued to refine the knowledge and skills you've gained through your life. When you choose a skill in which to become trained with [Ancestral Longevity](trait:ancestry/elf/ancestral-longevity), you can also choose a skill in which you are already trained and become an expert in that skill. This lasts until your Ancestral Longevity expires.\n\nWhen the effects of Ancestral Longevity and [Expert Longevity](trait:ancestry/elf/expert-longevity) expire, you can retrain one of your skill increases. The skill increase you gain from this retraining must either make you trained in the skill you chose with Ancestral Longevity or make you an expert in the skill you chose with Expert Longevity.",
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel9],
  prerequisites: [
    Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)]),
    Traits.traitPrerequisite(AncestralLongevity),
  ],
  effects: [],
})

export const OtherworldlyAcumen = Traits.defineTrait('ancestry/elf/otherworldly-acumen', {
  name: 'Otherworldly Acumen',
  description:
    '*Elf*\n\n**Prerequisites** at least one innate spell gained from an elf ancestry feat\n\nThe arcane magic you possess grows in power and complexity. Choose one common 2nd-rank spell from the same tradition as an innate spell you previously gained from another elf ancestry feat (from the arcane list if you have [Otherworldly Magic](trait:ancestry/elf/otherworldly-magic), for example). You can cast that spell as an innate spell once per day, using the same tradition as the list you chose the spell from.\n\nYour magic is adaptable. By spending 1 day of downtime, you can change the spell you chose to a different common 2nd-rank spell from the same tradition.',
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel9],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const TreeClimber = Traits.defineTrait('ancestry/elf/tree-climber', {
  name: 'Tree Climber',
  description:
    "*Elf*\n\nYou've spent much of your life among the treetops and have become an expert at quickly and safely climbing them. You gain a climb [Speed](characteristic:speed) of 10 feet.",
  tags: [Feat, AncestryFeat, ElfFeat, FeatLevel9],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(Elf), Traits.traitPrerequisite(AiuvarinHeritage)])],
  effects: [],
})

export const ElfStepAction = Abilities.defineAbility('ancestry/elf/elf-step/action', {
  name: 'Elf Step',
  description: '*Elf*',
  prerequisites: [Traits.traitPrerequisite(ElfStep)],
  actions: [
    {
      name: 'Elf Step',
      description: 'You move in a graceful dance, and even your steps are broad. You [Step](content:playing-the-game/step) 5 feet twice.',
      action: SingleAction,
    },
  ],
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
  SelectElfFeat9,
  SelectElfAncestryBoost,
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
  ElfStep,
  ExpertLongevity,
  OtherworldlyAcumen,
  TreeClimber,
  ElfStepAction,
]
