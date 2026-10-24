import { Attributes, CharacterOptions, CharacterValues, Effects, RulesetEntities, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import {
  AiuvarinFeat,
  AncestryFeat,
  ChangelingFeat,
  DromaarFeat,
  Feat,
  FeatLevel1,
  FeatLevel5,
  Heritage,
  NephilimFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/archetype'
import { Speed } from '@simulacrum/ruleset-pf2e/characteristic'
import {
  TrainedAthletics,
  TrainedDeception,
  TrainedDiplomacy,
  TrainedIntimidation,
  TrainedOccultism,
  TrainedPerformance,
  TrainedReligion,
  TrainedSociety,
} from '@simulacrum/ruleset-pf2e/skill'
import { Darkvision, ElfHeritage, LowLightVision } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { Diehard } from '@simulacrum/ruleset-pf2e/feat/general-feat'
import { AdditionalLore, CharmingLiar, ImpressivePerformance, LieToMe, Multilingual } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

const ElfAncestryReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/elf')
const GnomeAncestryReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/gnome')
const LeshyAncestryReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/leshy')
const BrineMayReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/changeling/brine-may')
const CallowMayReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/changeling/callow-may')
const DreamMayReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/changeling/dream-may')
const SlagMayReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/changeling/slag-may')
const AngelkinReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/nephilim/angelkin')
const GrimspawnReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/nephilim/grimspawn')
const HellspawnReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/nephilim/hellspawn')
const LawbringerReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/nephilim/lawbringer')
const MusetouchedReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/nephilim/musetouched')
const PitbornReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'ancestry/nephilim/pitborn')

export const ChangelingHeritage = Traits.defineTrait('heritage/changeling', {
  name: 'Changeling',
  description:
    "*Uncommon, Changeling*\n\n_Changelings are the children of malevolent hags, born with occult magic and the potential to hear a psychic Call._\n\nRead the full entry in [Changelings](content:ancestries-and-backgrounds/changelings).\n\nYour mother was a hag. Your eyes' heterochromia is the most obvious signifier of this parentage, but you likely also have a slighter build, paler skin, and darker hair than most members of your other parent's ancestry. You gain the changeling trait. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can select from changeling feats and feats from your other parent's ancestry whenever you gain an ancestry feat.",
  archetypes: [Heritage, VersatileHeritage],
  effects: [
    Effects.conditional(
      Expressions.or([
        Traits.traitPrerequisite(ElfAncestryReference),
        Traits.traitPrerequisite(GnomeAncestryReference),
        Traits.traitPrerequisite(LeshyAncestryReference),
      ]),
      [Effects.gainTrait(Darkvision)]
    ),
    Effects.conditional(
      Expressions.not(
        Expressions.or([
          Traits.traitPrerequisite(ElfAncestryReference),
          Traits.traitPrerequisite(GnomeAncestryReference),
          Traits.traitPrerequisite(LeshyAncestryReference),
        ])
      ),
      [Effects.gainTrait(LowLightVision)]
    ),
  ],
})

export const NephilimHeritage = Traits.defineTrait('heritage/nephilim', {
  name: 'Nephilim',
  description:
    '*Uncommon, Nephilim*\n\n_Nephilim are influenced by the divine magic of the Outer Sphere, often with fiendish or celestial features._\n\nIf you want a character who is supernaturally infused with the power of the Outer Planes, whose appearance is striking and notable, and whose personal connections might extend beyond the bounds of the Universe, you should play a nephilim.\n\nRead the full entry in [Nephilim](content:ancestries-and-backgrounds/nephilim).\n\nYour nature is influenced by celestials, fiends, or monitors. This manifests as a combination of features that belie your heritage, such as golden eyes, a halo, horns, or a tail. You gain the nephilim trait, in addition to the traits from your ancestry. You gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from nephilim feats and feats from your ancestry whenever you gain an ancestry feat.',
  archetypes: [Heritage, VersatileHeritage],
  effects: [
    Effects.conditional(
      Expressions.or([
        Traits.traitPrerequisite(ElfAncestryReference),
        Traits.traitPrerequisite(GnomeAncestryReference),
        Traits.traitPrerequisite(LeshyAncestryReference),
      ]),
      [Effects.gainTrait(Darkvision)]
    ),
    Effects.conditional(
      Expressions.not(
        Expressions.or([
          Traits.traitPrerequisite(ElfAncestryReference),
          Traits.traitPrerequisite(GnomeAncestryReference),
          Traits.traitPrerequisite(LeshyAncestryReference),
        ])
      ),
      [Effects.gainTrait(LowLightVision)]
    ),
  ],
})

export const AiuvarinHeritage = Traits.defineTrait('heritage/aiuvarin', {
  name: 'Aiuvarin',
  description:
    "*Aiuvarin, Elf*\n\n_Elves' children with people of other ancestries, and the children of their children, are called “aiuvarin”, an elven word that refers to a poem about leaves that fall too quickly to the ground._\n\nRead the full entry in [Aiuvarins](content:ancestries-and-backgrounds/aiuvarins).\n\nYou have elves, or possibly other aiuvarins, in your family tree. You have pointed ears and other telltale signs of elf heritage. You gain the [elf](content:traits/elf) trait, the [aiuvarin](content:traits/aiuvarin) trait, and [low-light vision](content:playing-the-game/low-light-vision). In addition, when you gain an ancestry feat, you can choose from aiuvarin and elf feats in addition to those from your ancestry.",
  archetypes: [Heritage, VersatileHeritage],
  effects: [Effects.gainTrait(LowLightVision)],
})

export const DromaarHeritage = Traits.defineTrait('heritage/dromaar', {
  name: 'Dromaar',
  description:
    '*Dromaar, Orc*\n\n_As the orcs of Belkzen have become a critical vanguard in the war against the Whispering Tyrant, sometimes fighting alongside allies of other ancestries, children with a mix of orc heritage and that of another ancestry (typically human) have grown in number._\n\nRead the full entry in [Dromaars](content:ancestries-and-backgrounds/dromaars).\n\nOrcish strength emboldens your bloodline. You have a green tinge to your skin and other indicators of orc heritage. You gain the [orc](content:traits/orc) trait, the [dromaar](content:traits/dromaar) trait, and [low-light vision](content:playing-the-game/low-light-vision). When you gain an ancestry feat, you can choose from dromaar and orc feats in addition to those from your ancestry.',
  archetypes: [Heritage, VersatileHeritage],
  effects: [Effects.gainTrait(LowLightVision)],
})

export const SelectNephilimLoreSkill = CharacterOptions.selectTraitOption('ancestry/nephilim/nephilim-lore/select-skill', {
  name: 'Nephilim Lore Skill',
  filter: { specificOptions: [TrainedDiplomacy, TrainedIntimidation] },
})

export const SelectElfAtavismHeritage = CharacterOptions.selectTraitOption('ancestry/aiuvarin/elf-atavism/select-heritage', {
  name: 'Elf Heritage',
  filter: { archetypes: [ElfHeritage] },
})

export const BrineMay = Traits.defineTrait('ancestry/changeling/brine-may', {
  name: 'Brine May',
  description:
    '*Changeling, Lineage*\n\nYour mother was a sea hag, granting you one sea-green or blue eye. You find comfort both in the sea and on the shore. Whenever you roll a success on an [Athletics](characteristic:skill/athletics) check to [Swim](content:skills/swim), you get a critical success instead. If you end your turn in water without having succeeded at a Swim action that round, you don’t sink (but you might still be moved by the current).',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(ChangelingHeritage),
    Expressions.not(
      Expressions.or([
        Traits.traitPrerequisite(CallowMayReference),
        Traits.traitPrerequisite(DreamMayReference),
        Traits.traitPrerequisite(SlagMayReference),
      ])
    ),
  ],
  effects: [],
})

export const CallowMay = Traits.defineTrait('ancestry/changeling/callow-may', {
  name: 'Callow May',
  description:
    '*Changeling, Lineage*\n\nYou are among the most common of changelings—those born to sweet hags—and a vibrant green eye signifies that parentage. Your mother’s manipulative nature and versatile voice gives you an edge when deceiving others. You gain the [Charming Liar](trait:feat/charming-liar) skill feat. If you roll [Deception](characteristic:skill/deception) for initiative, foes in that combat encounter that haven’t acted yet are [off-guard](content:conditions/off-guard) against you.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(ChangelingHeritage),
    Expressions.not(
      Expressions.or([
        Traits.traitPrerequisite(BrineMayReference),
        Traits.traitPrerequisite(DreamMayReference),
        Traits.traitPrerequisite(SlagMayReference),
      ])
    ),
  ],
  effects: [Effects.gainTrait(CharmingLiar)],
})

export const DreamMay = Traits.defineTrait('ancestry/changeling/dream-may', {
  name: 'Dream May',
  description:
    '*Changeling, Lineage*\n\nYou are the child of a cuckoo hag, making one of your eyes violet or even black. Your mother’s powers over sleep and dreams have given you a degree of resistance to those effects, granting you a +2 circumstance bonus to all saving throws against [sleep](content:traits/sleep) effects and effects that cause or alter dreams. In addition, sleep is more restorative for you. You regain HP equal to your [Constitution modifier](characteristic:constitution) × double your level (instead of just × your level), and you reduce any [drained](content:conditions/drained) and [doomed](content:conditions/doomed) conditions you have by 2 instead of by 1.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(ChangelingHeritage),
    Expressions.not(
      Expressions.or([
        Traits.traitPrerequisite(BrineMayReference),
        Traits.traitPrerequisite(CallowMayReference),
        Traits.traitPrerequisite(SlagMayReference),
      ])
    ),
  ],
  effects: [],
})

export const SlagMay = Traits.defineTrait('ancestry/changeling/slag-may', {
  name: 'Slag May',
  description:
    '*Changeling, Lineage*\n\nYour mother was an iron hag known for physical prowess, and you have one violet or steel-gray eye. You have thick, sturdy claws made of cold iron that grow naturally from your body. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group, have the [unarmed](content:traits/unarmed) and [grapple](content:traits/grapple) traits, and are cold iron.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(ChangelingHeritage),
    Expressions.not(
      Expressions.or([
        Traits.traitPrerequisite(BrineMayReference),
        Traits.traitPrerequisite(CallowMayReference),
        Traits.traitPrerequisite(DreamMayReference),
      ])
    ),
  ],
  effects: [],
})

export const ChangelingLore = Traits.defineTrait('ancestry/changeling/changeling-lore', {
  name: 'Changeling Lore',
  description:
    '*Changeling*\n\nAll too aware of your true nature, you’ve studied hags and their powers. You gain the trained proficiency rank in [Deception](characteristic:skill/deception) and [Occultism](characteristic:skill/occultism). If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the [Additional Lore](trait:feat/additional-lore) general feat for Hag [Lore](content:skills/lore).',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(ChangelingHeritage)],
  effects: [Effects.gainTrait(TrainedDeception), Effects.gainTrait(TrainedOccultism), Effects.gainTrait(AdditionalLore)],
})

export const HagClaws = Traits.defineTrait('ancestry/changeling/hag-claws', {
  name: 'Hag Claws',
  description:
    '*Changeling*\n\nWhen you came of age, your fingernails grew long and sharp. You gain a claw unarmed attack that deals 1d4 slashing damage. Your claws are in the brawling group and have the [agile](content:traits/agile), [finesse](content:traits/finesse), and [unarmed](content:traits/unarmed) traits.\n\n**Special** Hag claws can develop at any point in a changeling’s life. You can select this feat anytime you would gain an ancestry feat, but you can’t retrain out of it.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(ChangelingHeritage)],
  effects: [],
})

export const HagsSight = Traits.defineTrait('ancestry/changeling/hags-sight', {
  name: "Hag's Sight",
  description:
    '*Changeling*\n\nYou’ve nurtured the supernatural abilities gifted by your hag mother, particularly your sight. You gain [darkvision](content:playing-the-game/darkvision-and-greater-darkvision).',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(ChangelingHeritage)],
  effects: [Effects.gainTrait(Darkvision)],
})

export const Angelkin = Traits.defineTrait('ancestry/nephilim/angelkin', {
  name: 'Angelkin',
  description:
    '*Lineage, Nephilim*\n\nYou descend from an angel, a winged messenger from Nirvana or one of the other celestial realms. You gain the trained proficiency rank in [Society](characteristic:skill/society). If you would automatically become trained in Society (from your background or class, for example), you instead become trained in a skill of your choice. You know the [Empyrean](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) language, and you gain the [Multilingual](trait:feat/multilingual) skill feat.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(NephilimHeritage),
    Expressions.not(
      Expressions.or([
        Traits.traitPrerequisite(GrimspawnReference),
        Traits.traitPrerequisite(HellspawnReference),
        Traits.traitPrerequisite(LawbringerReference),
        Traits.traitPrerequisite(MusetouchedReference),
        Traits.traitPrerequisite(PitbornReference),
      ])
    ),
  ],
  effects: [Effects.gainTrait(TrainedSociety), Effects.gainTrait(Multilingual)],
})

export const Grimspawn = Traits.defineTrait('ancestry/nephilim/grimspawn', {
  name: 'Grimspawn',
  description:
    '*Lineage, Nephilim*\n\nYour lineage traces back to a daemon, one of the manifestations of horrific forms of death that devour souls within their foul home of Abaddon. As a result, you cling tenaciously to the last shreds of your own life force. You gain the [Diehard](trait:feat/diehard) general feat.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(NephilimHeritage),
    Expressions.not(
      Expressions.or([
        Traits.traitPrerequisite(AngelkinReference),
        Traits.traitPrerequisite(HellspawnReference),
        Traits.traitPrerequisite(LawbringerReference),
        Traits.traitPrerequisite(MusetouchedReference),
        Traits.traitPrerequisite(PitbornReference),
      ])
    ),
  ],
  effects: [Effects.gainTrait(Diehard)],
})

export const Hellspawn = Traits.defineTrait('ancestry/nephilim/hellspawn', {
  name: 'Hellspawn',
  description:
    '*Lineage, Nephilim*\n\nYour lineage descends from devils, conniving schemers of Hell. You’re as skilled at noticing lies and twisted wordings as you are at constructing them. You are trained in [Deception](characteristic:skill/deception) and Legal [Lore](content:skills/lore). If you were already trained in Deception (from your background or class, for example), you instead become trained in a skill of your choice. You also gain the [Lie to Me](trait:feat/lie-to-me) skill feat.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(NephilimHeritage),
    Expressions.not(
      Expressions.or([
        Traits.traitPrerequisite(AngelkinReference),
        Traits.traitPrerequisite(GrimspawnReference),
        Traits.traitPrerequisite(LawbringerReference),
        Traits.traitPrerequisite(MusetouchedReference),
        Traits.traitPrerequisite(PitbornReference),
      ])
    ),
  ],
  effects: [Effects.gainTrait(TrainedDeception), Effects.gainTrait(LieToMe)],
})

export const Lawbringer = Traits.defineTrait('ancestry/nephilim/lawbringer', {
  name: 'Lawbringer',
  description:
    '*Lineage, Nephilim*\n\nYou trace your lineage to archons, guardians of the seventiered mountain of Heaven and nurturers of law and virtue within mortals. You gain a +1 circumstance bonus to saves against [emotion](content:traits/emotion) effects, and if you roll a success on a save against an emotion effect, you get a critical success instead.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(NephilimHeritage),
    Expressions.not(
      Expressions.or([
        Traits.traitPrerequisite(AngelkinReference),
        Traits.traitPrerequisite(GrimspawnReference),
        Traits.traitPrerequisite(HellspawnReference),
        Traits.traitPrerequisite(MusetouchedReference),
        Traits.traitPrerequisite(PitbornReference),
      ])
    ),
  ],
  effects: [],
})

export const Musetouched = Traits.defineTrait('ancestry/nephilim/musetouched', {
  name: 'Musetouched',
  description:
    '*Lineage, Nephilim*\n\nYour blood sings with the liberating power of the azatas, living embodiments of freedom from the wild realm of Elysium. You gain a +1 circumstance bonus to [Escape](content:playing-the-game/escape). When you roll a critical failure on a check to Escape, you get a failure instead, and when you roll a success, you get a critical success instead.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(NephilimHeritage),
    Expressions.not(
      Expressions.or([
        Traits.traitPrerequisite(AngelkinReference),
        Traits.traitPrerequisite(GrimspawnReference),
        Traits.traitPrerequisite(HellspawnReference),
        Traits.traitPrerequisite(LawbringerReference),
        Traits.traitPrerequisite(PitbornReference),
      ])
    ),
  ],
  effects: [],
})

export const Pitborn = Traits.defineTrait('ancestry/nephilim/pitborn', {
  name: 'Pitborn',
  description:
    '*Lineage, Nephilim*\n\nYour blood bears the mark of a demon, a living embodiment of sin from the fetid depths of the Outer Rifts. Demonic power pulses through your veins and manifests in a different way for each pitborn, whether you have webbed fingers and thrive in the water, large hands capable of wrestling larger foes, or some other manifestation. You are trained in [Athletics](characteristic:skill/athletics). If you were already trained in Athletics (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain any one common 1st-level skill feat with a prerequisite of trained in Athletics, as reflects the manifestation of your fiendish blood.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(NephilimHeritage),
    Expressions.not(
      Expressions.or([
        Traits.traitPrerequisite(AngelkinReference),
        Traits.traitPrerequisite(GrimspawnReference),
        Traits.traitPrerequisite(HellspawnReference),
        Traits.traitPrerequisite(LawbringerReference),
        Traits.traitPrerequisite(MusetouchedReference),
      ])
    ),
  ],
  effects: [Effects.gainTrait(TrainedAthletics)],
})

export const BestialManifestation = Traits.defineTrait('ancestry/nephilim/bestial-manifestation', {
  name: 'Bestial Manifestation',
  description:
    '*Nephilim*\n\nPart of your body has an animalistic influence from a planar creature. Your hands end in claws, you have hooves instead of feet, sharp teeth fill your mouth, or a tail extends from your spine. You gain your choice of one of the following [unarmed attacks](content:equipment/unarmed-attacks). The attack is in the brawling group and has the listed damage die and traits.\n\n- **Claw** 1d4 slashing ([agile](content:traits/agile), [finesse](content:traits/finesse), [unarmed](content:traits/unarmed), [versatile](content:traits/versatile) piercing)\n\n- **Hoof** 1d6 bludgeoning (finesse, unarmed)\n\n- **Jaws** 1d6 piercing (finesse, unarmed)\n\n- **Tail** 1d4 bludgeoning (agile, finesse, unarmed)\n\n**Special** You can select this feat only at 1st level, and you can’t retrain into or out of this feat, nor can you change the type of attack you gained.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage), Expressions.lessThanOrEqual(CharacterValues.Level, 1)],
  effects: [],
})

export const Halo = Traits.defineTrait('ancestry/nephilim/halo', {
  name: 'Halo',
  description:
    '*Nephilim*\n\nYou have a halo of light and goodness that sheds [light](content:playing-the-game/light) with the effects of a divine [_light_](ability:spell/light) cantrip. A cantrip is heightened to a spell rank equal to half your level rounded up. You can [Sustain](content:playing-the-game/sustain) to suppress or reestablish the halo.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const NephilimEyes = Traits.defineTrait('ancestry/nephilim/nephilim-eyes', {
  name: 'Nephilim Eyes',
  description:
    '*Nephilim*\n\n**Prerequisites** [low-light vision](content:playing-the-game/low-light-vision)\n\nYour eyes can see through darkness with visual acuity akin to that possessed by most extraplanar beings. You gain [darkvision](content:playing-the-game/darkvision-and-greater-darkvision).',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage), Traits.traitPrerequisite(LowLightVision)],
  effects: [Effects.gainTrait(Darkvision)],
})

export const NephilimLore = Traits.defineTrait('ancestry/nephilim/nephilim-lore', {
  name: 'Nephilim Lore',
  description:
    '*Nephilim*\n\nYou know the secrets of the Multiverse. You gain the trained proficiency rank in either [Diplomacy](characteristic:skill/diplomacy) or [Intimidation](characteristic:skill/intimidation), and [Religion](characteristic:skill/religion). If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the [Additional Lore](trait:feat/additional-lore) general feat for a [Lore](content:skills/lore) subcategory of a plane to which you trace your lineage.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [Effects.gainCharacterOption(SelectNephilimLoreSkill), Effects.gainTrait(TrainedReligion), Effects.gainTrait(AdditionalLore)],
})

export const NimbleHooves = Traits.defineTrait('ancestry/nephilim/nimble-hooves', {
  name: 'Nimble Hooves',
  description:
    '*Nephilim*\n\nYou possess hooves, ankle wings, or some other feature that hastens your movement. Your [Speed](characteristic:speed) increases by 5 feet.\n\n**Special** The Speed increase from this feat isn’t cumulative with any Speed increase from other ancestry feats.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5)))],
})

export const EarnedGlory = Traits.defineTrait('ancestry/aiuvarin/earned-glory', {
  name: 'Earned Glory',
  description:
    '*Aiuvarin*\n\nElves often struggle with underestimating aiuvarins, and you are experienced at telling stories of your accomplishments to gain their respect. You are trained in [Performance](characteristic:skill/performance). If you would automatically become trained in Performance (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou gain the [Impressive Performance](trait:feat/impressive-performance) feat. When you attempt a Performance check to [Make an Impression](content:skills/make-an-impression) on an elf, if you roll a critical failure, you get a failure instead.',
  archetypes: [Feat, AncestryFeat, AiuvarinFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(AiuvarinHeritage)],
  effects: [Effects.gainTrait(TrainedPerformance), Effects.gainTrait(ImpressivePerformance)],
})

export const ElfAtavism = Traits.defineTrait('ancestry/aiuvarin/elf-atavism', {
  name: 'Elf Atavism',
  description:
    '*Aiuvarin*\n\nYour elven blood runs particularly strong, granting you features far more elven than those of a typical aiuvarin. You may also have been raised among elves, steeped in your elven ancestors’ heritage. You gain the benefits of the elf heritage of your elven parent or ancestors. You typically can’t select a heritage that depends on or improves an elven feature you don’t have. For example, you couldn’t take the [Ancient Elf](trait:heritage/ancient-elf) heritage unless your non-elf ancestry also has a lifespan measured in multiple centuries. In these cases, at the GM’s discretion, you might gain a different benefit.\n\n**Special** You can take this feat only at 1st level, and you can’t retrain out of this feat or into this feat.',
  archetypes: [Feat, AncestryFeat, AiuvarinFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(AiuvarinHeritage), Expressions.lessThanOrEqual(CharacterValues.Level, 1)],
  effects: [Effects.gainCharacterOption(SelectElfAtavismHeritage)],
})

export const MonstrousPeacemaker = Traits.defineTrait('ancestry/dromaar/monstrous-peacemaker', {
  name: 'Monstrous Peacemaker',
  description:
    '*Dromaar*\n\nYour dual human and orc nature has given you a unique perspective, allowing you to bridge the gap between humans and the many intelligent creatures in the world that humans consider monsters. You gain a +1 circumstance bonus to [Diplomacy](characteristic:skill/diplomacy) checks against non-humanoid intelligent creatures and against humanoids that are marginalized in human society (at the GM’s discretion, but typically at least including giants, goblins, kobolds, and orcs). You also gain this bonus on [Perception](content:playing-the-game/playing-the-game/perception-and-detection) checks to [Sense the Motives](content:playing-the-game/sense-motive) of such creatures.',
  archetypes: [Feat, AncestryFeat, DromaarFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(DromaarHeritage)],
  effects: [],
})

export const OrcSight = Traits.defineTrait('ancestry/dromaar/orc-sight', {
  name: 'Orc Sight',
  description:
    '*Dromaar*\n\n**Prerequisites** [low-light vision](content:playing-the-game/low-light-vision)\n\nYour orc blood grants you the keen vision of your forebears. You gain [darkvision](content:playing-the-game/darkvision-and-greater-darkvision), allowing you to see in [darkness](content:playing-the-game/darkness) and [dim light](content:playing-the-game/dim-light) just as well as you can in [bright light](content:playing-the-game/bright-light). However, in darkness, you see in black and white only.\n\n**Special** You can take this feat only at 1st level, and you can’t retrain out of this feat or into this feat.',
  archetypes: [Feat, AncestryFeat, DromaarFeat, FeatLevel1],
  prerequisites: [
    Traits.traitPrerequisite(DromaarHeritage),
    Traits.traitPrerequisite(LowLightVision),
    Expressions.lessThanOrEqual(CharacterValues.Level, 1),
  ],
  effects: [Effects.gainTrait(Darkvision)],
})

export const Called = Traits.defineTrait('ancestry/changeling/called', {
  name: 'Called',
  description:
    '*Changeling*\n\nYou’ve heard the Call, and by resisting it, you’ve developed a bulwark against effects that target your mind. You gain a +1 circumstance bonus to [Will saving throws](characteristic:will) against [mental](content:traits/mental) effects. If you roll a success on your saving throw against a mental effect that would make you [controlled](content:conditions/controlled), you get a critical success instead.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(ChangelingHeritage)],
  effects: [],
})

export const MistChild = Traits.defineTrait('ancestry/changeling/mist-child', {
  name: 'Mist Child',
  description:
    '*Changeling*\n\nYou blend in with unnatural subtlety. When you are [concealed](content:conditions/concealed) or [hidden](content:conditions/hidden), increase the DC of the flat check to target you to 6 if you’re concealed or 12 if you’re hidden.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(ChangelingHeritage)],
  effects: [],
})

export const BlessedBloodNephilim = Traits.defineTrait('ancestry/nephilim/blessed-blood-nephilim', {
  name: 'Blessed Blood (Nephilim)',
  description:
    '*Nephilim*\n\nYour spilled blood is sanctified, with effects similar to those of holy water. Whenever a [fiend](content:traits/fiend), [undead](content:traits/undead), or creature with a weakness to holy drinks your blood or deals piercing or slashing damage to you with jaws, fangs, or a similar attack, that creature takes 1d6 spirit damage with the [holy](content:traits/holy) trait. You gain a +4 circumstance bonus to [Crafting](characteristic:skill/crafting) checks to [Craft](content:skills/craft) holy water using your blood as one of the ingredients.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const ExtraplanarSupplication = Traits.defineTrait('ancestry/nephilim/extraplanar-supplication', {
  name: 'Extraplanar Supplication',
  description:
    '*Nephilim*\n\nYou call upon divine power to place a benediction upon your allies or a malediction upon your foes. Choose either [_bless_](ability:spell/bless) or [_bane_](ability:spell/bane). You can cast the chosen spell once per day as a 1st-rank divine [innate spell](content:spells/innate-spells).',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const NephilimResistance = Traits.defineTrait('ancestry/nephilim/nephilim-resistance', {
  name: 'Nephilim Resistance',
  description:
    '*Nephilim*\n\nYou resist energy like your extraplanar predecessors. Choose one of the following energy damage types: [acid](content:traits/acid), [cold](content:traits/cold), [electricity](content:traits/electricity), [fire](content:traits/fire), or [sonic](content:traits/sonic). You gain [resistance](content:playing-the-game/resistance) 5 to that damage type. The damage type typically matches an extraplanar entity associated with your bloodline. For instance, an [angelkin](trait:ancestry/nephilim/angelkin) might choose resistance to cold, while a [hellspawn](trait:ancestry/nephilim/hellspawn) might choose resistance to fire.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const ScionOfManyPlanes = Traits.defineTrait('ancestry/nephilim/scion-of-many-planes', {
  name: 'Scion of Many Planes',
  description:
    '*Nephilim*\n\nThe long and complicated history of your bloodline manifests in your ability to draw power from more planar sources than most other nephilim. Choose one nephilim lineage feat that you do not already possess; you gain that feat and all of its benefits, even if you already took a [lineage](content:traits/lineage) feat at 1st level.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const SkillfulTail = Traits.defineTrait('ancestry/nephilim/skillful-tail', {
  name: 'Skillful Tail',
  description:
    '*Nephilim*\n\nYou’ve always had a tail, but with practice, you’ve learned to use it for more than signaling your mood. You can perform simple [Interact](content:playing-the-game/interact) actions with your tail, such as opening an unlocked door. Your tail can’t perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish, and you can’t use it to hold items.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const InspireImitation = Traits.defineTrait('ancestry/aiuvarin/inspire-imitation', {
  name: 'Inspire Imitation',
  description:
    '*Aiuvarin*\n\nYour actions inspire your allies to great achievements. Whenever you critically succeed at a skill check, you automatically qualify to use the [Aid](content:playing-the-game/aid) reaction when attempting to help an ally using the same skill, even without spending an action to prepare to do so.',
  archetypes: [Feat, AncestryFeat, AiuvarinFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(AiuvarinHeritage)],
  effects: [],
})

export const SupernaturalCharm = Traits.defineTrait('ancestry/aiuvarin/supernatural-charm', {
  name: 'Supernatural Charm',
  description:
    '*Aiuvarin*\n\nThe elven magic in your blood manifests as a force you can use to become more appealing or alluring. You can cast 1st-rank [_charm_](ability:spell/charm) as an arcane [innate spell](content:spells/innate-spells) once per day.',
  archetypes: [Feat, AncestryFeat, AiuvarinFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(AiuvarinHeritage)],
  effects: [],
})

export const AllVersatileHeritageEntities = [
  ChangelingHeritage,
  NephilimHeritage,
  AiuvarinHeritage,
  DromaarHeritage,
  SelectNephilimLoreSkill,
  SelectElfAtavismHeritage,
  BrineMay,
  CallowMay,
  DreamMay,
  SlagMay,
  ChangelingLore,
  HagClaws,
  HagsSight,
  Angelkin,
  Grimspawn,
  Hellspawn,
  Lawbringer,
  Musetouched,
  Pitborn,
  BestialManifestation,
  Halo,
  NephilimEyes,
  NephilimLore,
  NimbleHooves,
  EarnedGlory,
  ElfAtavism,
  MonstrousPeacemaker,
  OrcSight,
  Called,
  MistChild,
  BlessedBloodNephilim,
  ExtraplanarSupplication,
  NephilimResistance,
  ScionOfManyPlanes,
  SkillfulTail,
  InspireImitation,
  SupernaturalCharm,
]
