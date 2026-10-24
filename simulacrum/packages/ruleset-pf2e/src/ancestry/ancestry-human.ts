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
  ExpertSkill,
  Feat,
  FeatLevel1,
  FeatLevel5,
  Heritage,
  HumanFeat,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/archetype'
import { HitPoints, Speed } from '@simulacrum/ruleset-pf2e/characteristic'
import { SelectAncestryBoost } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { SelectTrainedSkill } from '@simulacrum/ruleset-pf2e/skill'
import { HumanHeritage, SelectAncestryClassFeat1, SelectAncestryGeneralFeat1 } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { UntrainedImprovisation } from '@simulacrum/ruleset-pf2e/feat/general-feat'

export const SelectSkilledHumanExpertSkill = CharacterOptions.selectTraitOption('heritage/skilled-human/select-expert-skill', {
  name: 'Skilled Human Expert Skill',
  filter: { archetypes: [ExpertSkill] },
})

export const SkilledHuman = Traits.defineTrait('heritage/skilled-human', {
  name: 'Skilled Human',
  description:
    'Your ingenuity allows you to train in a wide variety of skills. You become trained in one skill of your choice. At 5th level, you become an expert in the chosen skill.',
  archetypes: [Heritage, HumanHeritage],
  effects: [
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectSkilledHumanExpertSkill)]),
  ],
})

export const VersatileHuman = Traits.defineTrait('heritage/versatile-human', {
  name: 'Versatile Human',
  description:
    "Humanity's versatility and ambition have fueled its ascendance to be the most common ancestry in most nations throughout the world. Select a general feat of your choice for which you meet the prerequisites (as with your ancestry feat, you can select this general feat at any point during character creation).",
  archetypes: [Heritage, HumanHeritage],
  effects: [Effects.gainCharacterOption(SelectAncestryGeneralFeat1)],
})

export const SelectHumanHeritage = CharacterOptions.selectTraitOption('ancestry/human/select-heritage', {
  name: 'Human Heritage',
  filter: { archetypes: [[HumanHeritage, VersatileHeritage]] },
})

export const SelectHumanFeat1 = CharacterOptions.selectTraitOption('ancestry/human/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { archetypes: [AncestryFeat, [HumanFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectHumanFeat5 = CharacterOptions.selectTraitOption('ancestry/human/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    archetypes: [AncestryFeat, [HumanFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const Human = Traits.defineTrait('ancestry/human', {
  name: 'Human',
  description:
    "*Human, Humanoid*\n\n_Humans are diverse and adaptable people with wide potential and deep ambitions._\n\nAs unpredictable and varied as any of Golarion's peoples, humans have exceptional drive and the capacity to endure and expand. Though many civilizations thrived before humanity rose to prominence, humans have built some of the greatest and the most terrible societies throughout the course of history, and today they are the most populous people in the realms around the Inner Sea.\n\nHumans' ambition, versatility, and exceptional potential have led to their status as the world's predominant ancestry. Their empires and nations are vast, sprawling things, and their citizens carve names for themselves with the strength of their sword arms and the power of their spells. Humanity is diverse and tumultuous, running the gamut from nomadic to imperial, sinister to saintly. Many of them venture forth to explore, to map the expanse of the multiverse, to search for long-lost treasure, or to lead mighty armies to conquer their neighbors—for no better reason than because they can.\n\nIf you want a character who can be just about anything, you should play a human.\n\n**You Might...**\n\n- Strive to achieve greatness, either in your own right or on behalf of a cause.\n\n- Seek to understand your purpose in the world.\n\n- Cherish your relationships with family and friends.\n\n**Others Probably...**\n\n- Respect your flexibility, your adaptability, and—in most cases—your open-mindedness.\n\n- Distrust your intentions, fearing you seek only power or wealth.\n\n- Aren't sure what to expect from you and are hesitant to assume your intentions.\n\n**Physical Description**\n\nHumans' physical characteristics are as varied as the world's climes. Humans have a wide variety of skin and hair colors, body types, and facial features. Generally speaking, their skin has a darker hue the closer to the equator they or their ancestors lived.\n\nHumans reach physical adulthood around the age of 15, though mental maturity occurs a few years later. A typical human can live to be around 90 years old. Humans have exceptionally mutable physical characteristics compared to other ancestries, with greater variance in height, weight, and other physical parameters.\n\n**Society**\n\nHuman variety also manifests in terms of their governments, attitudes, and social norms. Though the oldest of human cultures can trace their shared histories thousands of years into the past, when compared to the societies of the elves or dwarves, human civilizations seem in a state of constant flux as empires fragment and new kingdoms subsume the old.\n\n**Popular Edicts** explore the world, strive for greatness, devote yourself to a moral outlook\n**Popular Anathema** waste what little time you have\n\n**Names**\n\nUnlike many ancestral cultures, which generally cleave to specific traditions and shared histories, humanity's diversity has resulted in a near-infinite set of names. The humans of northern tribes have different names than those dwelling in southern nation-states. Humans throughout much of the world speak Common (though some continents on Golarion have their own regional common languages), yet their names are as varied as their beliefs and appearances. Ethnicities</title>A variety of human ethnic groups populates the continents within Golarion's Inner Sea region and in the lands beyond it. Human characters can be of any ethnicity, regardless of what lands they call home. Some examples of Golarion's ethnicities are presented below. Characters of human ethnicities in the Inner Sea region speak Common (also known as Taldane), and some ethnicities grant access to an uncommon regional language.\n\n- **Garundi** span the nations along the southern shores of the Inner Sea.\n\n- **Keleshites** trace their origins to the Keleshite Empire in the eastern deserts.\n\n- **Kellids** live among the mountains and steppes of northern Avistan.\n\n- **Mwangi** are spread across the vast continent of Garund.\n\n- **Shoanti** make their homes in the harsh badlands of the Storval Plateau.\n\n- **Taldans** occupy much of Avistan thanks to a fallen empire.\n\n- **Tians** originally come from the far-off continent of Tian Xia.\n\n- **Ulfens** reside in coastal towns of western Avistan.\n\n- **Varisians** historically favored a nomadic life of roving caravans.\n\n**Human Mechanics**\n\n**Hit Points**\n\n8\n\n**Size**\n\nMedium\n\n**Speed**\n\n25 feet\n\n**Attribute Boosts**\n\nTwo free ability boosts\n\n**Languages**\n\nCommon\n\nAdditional languages equal to 1 + your Intelligence modifier (if it's positive). Choose from the list of common languages and any other languages to which you have access (such as the languages prevalent in your region).",
  archetypes: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(8))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(25))),
    Effects.gainCharacterOption(SelectAncestryBoost),
    Effects.gainCharacterOption(SelectAncestryBoost),
    Effects.gainCharacterOption(SelectHumanHeritage),
    Effects.gainCharacterOption(SelectHumanFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectHumanFeat5)]),
  ],
})

export const AdaptedCantrip = Traits.defineTrait('ancestry/human/adapted-cantrip', {
  name: 'Adapted Cantrip',
  description:
    '*Human*\n\n**Prerequisites** spellcasting class feature\n\nThrough study of multiple magical traditions, you’ve altered a spell to suit your spellcasting style. Choose one cantrip from a magical tradition other than your own. If you prepare spells, you can choose this spell when you prepare your cantrips, in addition to your other options. If you have a spell repertoire, replace one of your cantrips known with the chosen spell. You can cast this cantrip as a spell of your class’s tradition.\n\nIf you swap or retrain this cantrip later, you can choose its replacement from the same alternate tradition or a different one.',
  archetypes: [Feat, AncestryFeat, HumanFeat, FeatLevel1],
  effects: [],
})

export const CooperativeNature = Traits.defineTrait('ancestry/human/cooperative-nature', {
  name: 'Cooperative Nature',
  description:
    '*Human*\n\nThe short human life span lends perspective and has taught you from a young age to set aside differences and work with others to achieve greatness. You gain a +4 circumstance bonus on checks to Aid.',
  archetypes: [Feat, AncestryFeat, HumanFeat, FeatLevel1],
  effects: [],
})

export const GeneralTraining = Traits.defineTrait('ancestry/human/general-training', {
  name: 'General Training',
  description:
    '*Human*\n\nYour adaptability manifests in your mastery of a range of useful abilities. You gain a 1st-level general feat. You must meet the feat’s prerequisites, but if you select this feat during character creation, you can select the feat later in the process in order to determine which prerequisites you meet.\n\n**Special** You can select this feat multiple times, choosing a different feat each time.',
  archetypes: [Feat, AncestryFeat, HumanFeat, FeatLevel1],
  repeatable: true,
  effects: [Effects.gainCharacterOption(SelectAncestryGeneralFeat1)],
})

export const HaughtyObstinacy = Traits.defineTrait('ancestry/human/haughty-obstinacy', {
  name: 'Haughty Obstinacy',
  description:
    '*Human*\n\nYour powerful ego makes it harder for others to order you around. If you roll a success on a saving throw against a mental effect that attempts to directly control your actions, you critically succeed instead. If a creature rolls a failure on a check to Coerce you using Intimidation, it gets a critical failure instead (so it can’t try to Coerce you again for 1 week).',
  archetypes: [Feat, AncestryFeat, HumanFeat, FeatLevel1],
  effects: [],
})

export const NaturalAmbition = Traits.defineTrait('ancestry/human/natural-ambition', {
  name: 'Natural Ambition',
  description:
    '*Human*\n\nYou were raised to be ambitious and always reach for the stars, leading you to progress quickly in your chosen field. You gain a 1st-level class feat for your class. You must meet the prerequisites, but you can select the feat later in the character creation process in order to determine which prerequisites you meet.',
  archetypes: [Feat, AncestryFeat, HumanFeat, FeatLevel1],
  effects: [Effects.gainCharacterOption(SelectAncestryClassFeat1)],
})

export const NaturalSkill = Traits.defineTrait('ancestry/human/natural-skill', {
  name: 'Natural Skill',
  description:
    '*Human*\n\nYour ingenuity allows you to learn a wide variety of skills. You gain the trained proficiency rank in two skills of your choice.',
  archetypes: [Feat, AncestryFeat, HumanFeat, FeatLevel1],
  effects: [Effects.gainCharacterOption(SelectTrainedSkill), Effects.gainCharacterOption(SelectTrainedSkill)],
})

export const UnconventionalWeaponry = Traits.defineTrait('ancestry/human/unconventional-weaponry', {
  name: 'Unconventional Weaponry',
  description:
    '*Human*\n\nYou’ve familiarized yourself with a particular weapon, potentially from another ancestry or culture. Choose an uncommon simple or martial weapon with a trait corresponding to an ancestry (such as dwarf, goblin, or orc) or that is common in another culture. You gain access to that weapon, and for the purpose of proficiency, you treat it as a simple weapon.\n\nIf you are trained in all martial weapons, you can instead choose an uncommon advanced weapon that has an ancestry’s trait or is common in another culture. You gain access to that weapon and have familiarity with that weapon. For the purpose of proficiency, you treat it as a martial weapon.',
  archetypes: [Feat, AncestryFeat, HumanFeat, FeatLevel1],
  effects: [],
})

export const AdaptiveAdept = Traits.defineTrait('ancestry/human/adaptive-adept', {
  name: 'Adaptive Adept',
  description:
    '*Human*\n\n**Prerequisites** Adapted Cantrip; can cast 3rd-level spells\n\nYou’ve continued adapting your magic to blend your class’s tradition with your adapted tradition. Choose a cantrip or 1st-rank spell from the same magical tradition as your cantrip from Adapted Cantrip. You gain that spell, adding it to your spell options just like the cantrip from Adapted Cantrip. You can cast this spell as a spell of your class’s magical tradition. If you choose a 1st-rank spell, you don’t gain access to the heightened versions of that spell, meaning you can’t prepare them if you prepare spells and you can’t learn them or select the spell as a signature spell if you have a spell repertoire.',
  archetypes: [Feat, AncestryFeat, HumanFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(AdaptedCantrip)],
  effects: [],
})

export const CleverImproviser = Traits.defineTrait('ancestry/human/clever-improviser', {
  name: 'Clever Improviser',
  description:
    '*Human*\n\nYou’ve learned how to handle situations when you’re out of your depth. You gain the Untrained Improvisation general feat. In addition, you can attempt skill actions that normally require you to be trained, even if you are untrained.',
  archetypes: [Feat, AncestryFeat, HumanFeat, FeatLevel5],
  effects: [Effects.gainTrait(UntrainedImprovisation)],
})

export const SenseAllies = Traits.defineTrait('ancestry/human/sense-allies', {
  name: 'Sense Allies',
  description:
    '*Human*\n\nLike many humans raised in a close-knit community, you have always been strongly attuned to the presence of others. Willing allies that you are aware of within 60 feet that would otherwise be undetected by you are instead hidden from you. The flat check for you to target willing allies within 60 feet that are hidden from you is 5 instead of 11.',
  archetypes: [Feat, AncestryFeat, HumanFeat, FeatLevel5],
  effects: [],
})

export const AllHumanEntities = [
  SelectSkilledHumanExpertSkill,
  SkilledHuman,
  VersatileHuman,
  SelectHumanHeritage,
  SelectHumanFeat1,
  SelectHumanFeat5,
  Human,
  AdaptedCantrip,
  CooperativeNature,
  GeneralTraining,
  HaughtyObstinacy,
  NaturalAmbition,
  NaturalSkill,
  UnconventionalWeaponry,
  AdaptiveAdept,
  CleverImproviser,
  SenseAllies,
]
