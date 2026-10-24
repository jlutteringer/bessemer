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
    "*Uncommon, Changeling*\n\n_Changelings are the children of malevolent hags, born with occult magic and the potential to hear a psychic Call._\n\nTales of children stolen away and replaced by monsters exist across countless cultures—but the true monsters are the hags who bring these strange children into the world, either directly as their birth parents or indirectly when strange magic from their coven rituals affects babies in nearby villages. Such a child faces no end of challenges, often beginning life as an abandoned or orphaned outsider.\n\nThough a changeling generally resembles an ordinary member of their ancestry, their distinctive eyes—each a different color—set them apart. One of their eyes matches that of their father's lineage, while the other matches the color of their hag mother's, often in an unnatural shade such as violet or vivid green. Not everyone with differently colored eyes is a changeling, but this manifestation of changeling heritage makes it difficult for them to hide their nature and can lead to banishment. As they come of age, they manifest other characteristics from their mother, including supernatural abilities. Darkvision, clawlike fingernails, and innate magic are the most common.\n\nChangelings can be any gender, but women in particular are vulnerable to the Call, a psychic influence that urges them to abandon their mortal life, join the hag's coven, and eventually become a hag themselves. Changelings who understand their heritage often fear the Call and work to resist its pull. Those who remain ignorant of their origin may find themselves subject to a terrible compulsion without knowing why.\n\n**You Might...**\n\n- Cherish and protect those friends and family who accept you as you are.\n\n- Seek to better understand your hag mother and the gifts she gave you, for good or ill, or distance yourself from your heritage.\n\n- Fear the day you hear the Call and worry you might not be able to resist—or perhaps you already fight to resist it every day.\n\n**Others Probably...**\n\n- Assume you practice occult or primal magic, or that you participate in a coven.\n\n- Worry that you might secretly be a monster, or become one, and turn on them.\n\n- Notice and speculate about your distinctive eyes.\n\n**Changeling Heritage Mechanics**\n\nYour mother was a hag. Your eyes' heterochromia is the most obvious signifier of this parentage, but you likely also have a slighter build, paler skin, and darker hair than most members of your other parent's ancestry. You gain the changeling trait. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can select from changeling feats and feats from your other parent's ancestry whenever you gain an ancestry feat.",
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
    "*Uncommon, Nephilim*\n\n_Nephilim are influenced by the divine magic of the Outer Sphere, often with fiendish or celestial features._\n\nCountless legends tell of mortal dealings with immortal beings, and of the children born from those encounters. These children, known as planar scions, are mortals who inherit the supernatural essence of another plane, which manifests through their distinctive physical features and otherworldly powers. This section presents rules for nephilim, planar scions who can trace their extraplanar heritage back to celestials, fiends, monitors, and other entities who often become involved in the religious affairs of mortals.\n\nA faithful priest of Erastil is visited by an angel in his youth, and many years later he fathers a child with the head of an elk and a birthmark shaped like Erastil's religious symbol, a bow and arrow. A powerful sorceress prevents an incursion from the Outer Rifts, but a sliver of demonic power infuses the child she carries, who is born with fangs and a pair of tiny horns. A planar caravan travels the Multiverse until its ranks are filled with children who possess devilish hooves and angelic halos. These children, known as nephilim, possess the ambition and capacity for growth and change inherent in their mortal forebears, while also possessing some portion of the power and appearance of an immortal entity or entities whose energies influenced their bloodline.\n\nNephilim are difficult to categorize by nature. Some possess both demonic and angelic traits, while others possess abilities that defy the neat categories of scholars. Many nephilim do have traits that strongly point to their lineage, though. Nephilim who carry the power of archons, sometimes known as lawbringers, may display golden eyes or flaming auras, while nephilim descended from devils, known as hellspawn, may have red skin and hooved feet.\n\nWhile the term nephilim broadly describes these individuals, some cultures use the name empyrean or cambion to refer to nephilim with celestial influence or fiendish influence respectively. Other nephilim sometimes earn the names of aphorite or ganzi, though this entry only focuses on empyreans and cambions.\n\nIf you want a character who is supernaturally infused with the power of the Outer Planes, whose appearance is striking and notable, and whose personal connections might extend beyond the bounds of the Universe, you should play a nephilim.\n\n**You Might...**\n\n- Have a strong sense of self-confidence due to the power or influence of your extraplanar heritage.\n\n- Lean into or rebel against your perceived extraplanar nature, embracing angelic goodness or twisting demonic rage towards better ends.\n\n- Find that building relationships with others is difficult, but treasure those who value you for who, and not what, you are.\n\n**Others Probably...**\n\n- Assume you've faced numerous challenges or gained unfair advantages due to your heritage.\n\n- Mistake you for an agent of a holy or unholy organization.\n\n- Think you have associations with powerful extraplanar creatures, potentially trying to bargain with you for power of their own.\n\n**Nephilim Heritage Mechanics**\n\nYour nature is influenced by celestials, fiends, or monitors. This manifests as a combination of features that belie your heritage, such as golden eyes, a halo, horns, or a tail. You gain the nephilim trait, in addition to the traits from your ancestry. You gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from nephilim feats and feats from your ancestry whenever you gain an ancestry feat.",
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
    "*Aiuvarin, Elf*\n\n_Elves' children with people of other ancestries, and the children of their children, are called “aiuvarin”, an elven word that refers to a poem about leaves that fall too quickly to the ground._\n\nElves' children with people of other ancestries, and the children of their children, are called “aiuvarin”, an elven word that refers to a poem about leaves that fall too quickly to the ground. The most familiar aiuvarins in Golarion are born to an elf and a human, or to two aiuvarins. Those born of these unions are commonly referred to as “half-elves.” The life of an aiuvarin can be difficult, often marked by a struggle to fit in. Aiuvarins don't have their own homeland on Golarion, nor are populations of aiuvarins particularly tied to one another since they often have very disparate traditions from their parents' ancestries. Instead, they often attempt to find acceptance in their parents' cultures or settlements.\n\nAiuvarins often have pointed ears and can be lanky, along with manifesting traits from their non-elven ancestors. They lack the almost-alien eyes of their elf parents, and their work to find a place for themselves in communities where they're often out of sync with the dominant culture leads many to become artists or entertainers. Despite this innate socialization, many aiuvarins have difficulty forming lasting bonds with either of their parents' people due to the distance they feel from both communities as a whole.\n\nAiuvarins gain some, but not all, of their elven parent's longevity, and those with a human parent often live for around 150 years. This causes some of them to fear friendship and romance with humans, knowing that they'll likely outlive their companions.\n\n**You Might...**\n\n- Keep to yourself and find it difficult to form close bonds with others.\n\n- Strongly embrace or reject one side or the other of your parentage.\n\n- Identify strongly with and relate to other people with mixed ancestries.\n\n**Others Probably...**\n\n- Find you more approachable than elves.\n\n- See you primarily through the lens of your elven heritage.\n\n- Downplay the challenges of being caught between cultures.\n\n**Aiuvarin Heritage Mechanics**\n\nYou have elves, or possibly other aiuvarins, in your family tree. You have pointed ears and other telltale signs of elf heritage. You gain the elf trait, the aiuvarin trait, and low-light vision. In addition, when you gain an ancestry feat, you can choose from aiuvarin and elf feats in addition to those from your ancestry.",
  archetypes: [Heritage, VersatileHeritage],
  effects: [Effects.gainTrait(LowLightVision)],
})

export const DromaarHeritage = Traits.defineTrait('heritage/dromaar', {
  name: 'Dromaar',
  description:
    "*Dromaar, Orc*\n\n_As the orcs of Belkzen have become a critical vanguard in the war against the Whispering Tyrant, sometimes fighting alongside allies of other ancestries, children with a mix of orc heritage and that of another ancestry (typically human) have grown in number._\n\nMany of these “half-orcs” refer to themselves as “dromaars,” an orcish word referring to those drummers whose music sends the hordes marching to war, seeing themselves as heralds of a new age for orcs in the Inner Sea region. Some intolerant humanoids see orcs as more akin to monsters than people, hating and fearing them simply due to their lineage. This can push dromaars to the margins of society, where some find work in manual labor, as mercenaries, or in crime. Many who can't stand the indignities heaped on them in human society find a home among their orc kin or trek into the wilderness.\n\nSome humans assume dromaars are less intelligent or uncivilized, and dromaars rarely find acceptance among societies with many such folk. To an orc hold, a dromaar is often considered a valuable addition, making up for anything they might lack in physical strength with gifts inherited from their other ancestral line. While some dromaars struggle to claim a name for themselves in the unforgiving hierarchies of orc holds, others may find that orcish society is far more tolerant and can create opportunities to rise high.\n\nA dromaar with a human parent can typically live to around 70 years old.\n\n**You Might...**\n\n- Ignore, embrace, or actively counter the common stereotypes about dromaars.\n\n- Make the most of your size and strength, either physically or socially.\n\n- Keep your distance from people of most other ancestries, in case they unfairly reject you due to your orc ancestors.\n\n**Others Probably...**\n\n- Assume you enjoy and excel at fighting but aren't inclined toward magical or intellectual pursuits.\n\n- Pity you for the tragic circumstances they assume were involved in your birth.\n\n- Get out of your way and back down rather than face your anger.\n\n**Dromaar Heritage Mechanics**\n\nOrcish strength emboldens your bloodline. You have a green tinge to your skin and other indicators of orc heritage. You gain the orc trait, the dromaar trait, and low-light vision. When you gain an ancestry feat, you can choose from dromaar and orc feats in addition to those from your ancestry.",
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
    '*Changeling, Lineage*\n\nYour mother was a sea hag, granting you one sea-green or blue eye. You find comfort both in the sea and on the shore. Whenever you roll a success on an Athletics check to Swim, you get a critical success instead. If you end your turn in water without having succeeded at a Swim action that round, you don’t sink (but you might still be moved by the current).',
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
    '*Changeling, Lineage*\n\nYou are among the most common of changelings—those born to sweet hags—and a vibrant green eye signifies that parentage. Your mother’s manipulative nature and versatile voice gives you an edge when deceiving others. You gain the Charming Liar skill feat. If you roll Deception for initiative, foes in that combat encounter that haven’t acted yet are off-guard against you.',
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
    '*Changeling, Lineage*\n\nYou are the child of a cuckoo hag, making one of your eyes violet or even black. Your mother’s powers over sleep and dreams have given you a degree of resistance to those effects, granting you a +2 circumstance bonus to all saving throws against sleep effects and effects that cause or alter dreams. In addition, sleep is more restorative for you. You regain HP equal to your Constitution modifier × double your level (instead of just × your level), and you reduce any drained and doomed conditions you have by 2 instead of by 1.',
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
    '*Changeling, Lineage*\n\nYour mother was an iron hag known for physical prowess, and you have one violet or steel-gray eye. You have thick, sturdy claws made of cold iron that grow naturally from your body. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group, have the unarmed and grapple traits, and are cold iron.',
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
    '*Changeling*\n\nAll too aware of your true nature, you’ve studied hags and their powers. You gain the trained proficiency rank in Deception and Occultism. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the Additional Lore general feat for Hag Lore.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(ChangelingHeritage)],
  effects: [Effects.gainTrait(TrainedDeception), Effects.gainTrait(TrainedOccultism), Effects.gainTrait(AdditionalLore)],
})

export const HagClaws = Traits.defineTrait('ancestry/changeling/hag-claws', {
  name: 'Hag Claws',
  description:
    '*Changeling*\n\nWhen you came of age, your fingernails grew long and sharp. You gain a claw unarmed attack that deals 1d4 slashing damage. Your claws are in the brawling group and have the agile, finesse, and unarmed traits.\n\n**Special** Hag claws can develop at any point in a changeling’s life. You can select this feat anytime you would gain an ancestry feat, but you can’t retrain out of it.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(ChangelingHeritage)],
  effects: [],
})

export const HagsSight = Traits.defineTrait('ancestry/changeling/hags-sight', {
  name: "Hag's Sight",
  description: '*Changeling*\n\nYou’ve nurtured the supernatural abilities gifted by your hag mother, particularly your sight. You gain darkvision.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(ChangelingHeritage)],
  effects: [Effects.gainTrait(Darkvision)],
})

export const Angelkin = Traits.defineTrait('ancestry/nephilim/angelkin', {
  name: 'Angelkin',
  description:
    '*Lineage, Nephilim*\n\nYou descend from an angel, a winged messenger from Nirvana or one of the other celestial realms. You gain the trained proficiency rank in Society. If you would automatically become trained in Society (from your background or class, for example), you instead become trained in a skill of your choice. You know the Empyrean language, and you gain the Multilingual skill feat.',
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
    '*Lineage, Nephilim*\n\nYour lineage traces back to a daemon, one of the manifestations of horrific forms of death that devour souls within their foul home of Abaddon. As a result, you cling tenaciously to the last shreds of your own life force. You gain the Diehard general feat.',
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
    '*Lineage, Nephilim*\n\nYour lineage descends from devils, conniving schemers of Hell. You’re as skilled at noticing lies and twisted wordings as you are at constructing them. You are trained in Deception and Legal Lore. If you were already trained in Deception (from your background or class, for example), you instead become trained in a skill of your choice. You also gain the Lie to Me skill feat.',
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
    '*Lineage, Nephilim*\n\nYou trace your lineage to archons, guardians of the seventiered mountain of Heaven and nurturers of law and virtue within mortals. You gain a +1 circumstance bonus to saves against emotion effects, and if you roll a success on a save against an emotion effect, you get a critical success instead.',
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
    '*Lineage, Nephilim*\n\nYour blood sings with the liberating power of the azatas, living embodiments of freedom from the wild realm of Elysium. You gain a +1 circumstance bonus to Escape. When you roll a critical failure on a check to Escape, you get a failure instead, and when you roll a success, you get a critical success instead.',
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
    '*Lineage, Nephilim*\n\nYour blood bears the mark of a demon, a living embodiment of sin from the fetid depths of the Outer Rifts. Demonic power pulses through your veins and manifests in a different way for each pitborn, whether you have webbed fingers and thrive in the water, large hands capable of wrestling larger foes, or some other manifestation. You are trained in Athletics. If you were already trained in Athletics (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain any one common 1st-level skill feat with a prerequisite of trained in Athletics, as reflects the manifestation of your fiendish blood.',
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
    '*Nephilim*\n\nPart of your body has an animalistic influence from a planar creature. Your hands end in claws, you have hooves instead of feet, sharp teeth fill your mouth, or a tail extends from your spine. You gain your choice of one of the following unarmed attacks. The attack is in the brawling group and has the listed damage die and traits.\n\n- **Claw** 1d4 slashing (agile, finesse, unarmed, versatile piercing)\n\n- **Hoof** 1d6 bludgeoning (finesse, unarmed)\n\n- **Jaws** 1d6 piercing (finesse, unarmed)\n\n- **Tail** 1d4 bludgeoning (agile, finesse, unarmed)\n\n**Special** You can select this feat only at 1st level, and you can’t retrain into or out of this feat, nor can you change the type of attack you gained.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage), Expressions.lessThanOrEqual(CharacterValues.Level, 1)],
  effects: [],
})

export const Halo = Traits.defineTrait('ancestry/nephilim/halo', {
  name: 'Halo',
  description:
    '*Nephilim*\n\nYou have a halo of light and goodness that sheds light with the effects of a divine _light_ cantrip. A cantrip is heightened to a spell rank equal to half your level rounded up. You can Sustain to suppress or reestablish the halo.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const NephilimEyes = Traits.defineTrait('ancestry/nephilim/nephilim-eyes', {
  name: 'Nephilim Eyes',
  description:
    '*Nephilim*\n\n**Prerequisites** low-light vision\n\nYour eyes can see through darkness with visual acuity akin to that possessed by most extraplanar beings. You gain darkvision.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage), Traits.traitPrerequisite(LowLightVision)],
  effects: [Effects.gainTrait(Darkvision)],
})

export const NephilimLore = Traits.defineTrait('ancestry/nephilim/nephilim-lore', {
  name: 'Nephilim Lore',
  description:
    '*Nephilim*\n\nYou know the secrets of the Multiverse. You gain the trained proficiency rank in either Diplomacy or Intimidation, and Religion. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the Additional Lore general feat for a Lore subcategory of a plane to which you trace your lineage.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [Effects.gainCharacterOption(SelectNephilimLoreSkill), Effects.gainTrait(TrainedReligion), Effects.gainTrait(AdditionalLore)],
})

export const NimbleHooves = Traits.defineTrait('ancestry/nephilim/nimble-hooves', {
  name: 'Nimble Hooves',
  description:
    '*Nephilim*\n\nYou possess hooves, ankle wings, or some other feature that hastens your movement. Your Speed increases by 5 feet.\n\n**Special** The Speed increase from this feat isn’t cumulative with any Speed increase from other ancestry feats.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5)))],
})

export const EarnedGlory = Traits.defineTrait('ancestry/aiuvarin/earned-glory', {
  name: 'Earned Glory',
  description:
    '*Aiuvarin*\n\nElves often struggle with underestimating aiuvarins, and you are experienced at telling stories of your accomplishments to gain their respect. You are trained in Performance. If you would automatically become trained in Performance (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou gain the Impressive Performance feat. When you attempt a Performance check to Make an Impression on an elf, if you roll a critical failure, you get a failure instead.',
  archetypes: [Feat, AncestryFeat, AiuvarinFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(AiuvarinHeritage)],
  effects: [Effects.gainTrait(TrainedPerformance), Effects.gainTrait(ImpressivePerformance)],
})

export const ElfAtavism = Traits.defineTrait('ancestry/aiuvarin/elf-atavism', {
  name: 'Elf Atavism',
  description:
    '*Aiuvarin*\n\nYour elven blood runs particularly strong, granting you features far more elven than those of a typical aiuvarin. You may also have been raised among elves, steeped in your elven ancestors’ heritage. You gain the benefits of the elf heritage of your elven parent or ancestors. You typically can’t select a heritage that depends on or improves an elven feature you don’t have. For example, you couldn’t take the Ancient Elf heritage unless your non-elf ancestry also has a lifespan measured in multiple centuries. In these cases, at the GM’s discretion, you might gain a different benefit.\n\n**Special** You can take this feat only at 1st level, and you can’t retrain out of this feat or into this feat.',
  archetypes: [Feat, AncestryFeat, AiuvarinFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(AiuvarinHeritage), Expressions.lessThanOrEqual(CharacterValues.Level, 1)],
  effects: [Effects.gainCharacterOption(SelectElfAtavismHeritage)],
})

export const MonstrousPeacemaker = Traits.defineTrait('ancestry/dromaar/monstrous-peacemaker', {
  name: 'Monstrous Peacemaker',
  description:
    '*Dromaar*\n\nYour dual human and orc nature has given you a unique perspective, allowing you to bridge the gap between humans and the many intelligent creatures in the world that humans consider monsters. You gain a +1 circumstance bonus to Diplomacy checks against non-humanoid intelligent creatures and against humanoids that are marginalized in human society (at the GM’s discretion, but typically at least including giants, goblins, kobolds, and orcs). You also gain this bonus on Perception checks to Sense the Motives of such creatures.',
  archetypes: [Feat, AncestryFeat, DromaarFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(DromaarHeritage)],
  effects: [],
})

export const OrcSight = Traits.defineTrait('ancestry/dromaar/orc-sight', {
  name: 'Orc Sight',
  description:
    '*Dromaar*\n\n**Prerequisites** low-light vision\n\nYour orc blood grants you the keen vision of your forebears. You gain darkvision, allowing you to see in darkness and dim light just as well as you can in bright light. However, in darkness, you see in black and white only.\n\n**Special** You can take this feat only at 1st level, and you can’t retrain out of this feat or into this feat.',
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
    '*Changeling*\n\nYou’ve heard the Call, and by resisting it, you’ve developed a bulwark against effects that target your mind. You gain a +1 circumstance bonus to Will saving throws against mental effects. If you roll a success on your saving throw against a mental effect that would make you controlled, you get a critical success instead.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(ChangelingHeritage)],
  effects: [],
})

export const MistChild = Traits.defineTrait('ancestry/changeling/mist-child', {
  name: 'Mist Child',
  description:
    '*Changeling*\n\nYou blend in with unnatural subtlety. When you are concealed or hidden, increase the DC of the flat check to target you to 6 if you’re concealed or 12 if you’re hidden.',
  archetypes: [Feat, AncestryFeat, ChangelingFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(ChangelingHeritage)],
  effects: [],
})

export const BlessedBloodNephilim = Traits.defineTrait('ancestry/nephilim/blessed-blood-nephilim', {
  name: 'Blessed Blood (Nephilim)',
  description:
    '*Nephilim*\n\nYour spilled blood is sanctified, with effects similar to those of holy water. Whenever a fiend, undead, or creature with a weakness to holy drinks your blood or deals piercing or slashing damage to you with jaws, fangs, or a similar attack, that creature takes 1d6 spirit damage with the holy trait. You gain a +4 circumstance bonus to Crafting checks to Craft holy water using your blood as one of the ingredients.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const ExtraplanarSupplication = Traits.defineTrait('ancestry/nephilim/extraplanar-supplication', {
  name: 'Extraplanar Supplication',
  description:
    '*Nephilim*\n\nYou call upon divine power to place a benediction upon your allies or a malediction upon your foes. Choose either _bless_ or _bane_. You can cast the chosen spell once per day as a 1st-rank divine innate spell.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const NephilimResistance = Traits.defineTrait('ancestry/nephilim/nephilim-resistance', {
  name: 'Nephilim Resistance',
  description:
    '*Nephilim*\n\nYou resist energy like your extraplanar predecessors. Choose one of the following energy damage types: acid, cold, electricity, fire, or sonic. You gain resistance 5 to that damage type. The damage type typically matches an extraplanar entity associated with your bloodline. For instance, an angelkin might choose resistance to cold, while a hellspawn might choose resistance to fire.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const ScionOfManyPlanes = Traits.defineTrait('ancestry/nephilim/scion-of-many-planes', {
  name: 'Scion of Many Planes',
  description:
    '*Nephilim*\n\nThe long and complicated history of your bloodline manifests in your ability to draw power from more planar sources than most other nephilim. Choose one nephilim lineage feat that you do not already possess; you gain that feat and all of its benefits, even if you already took a lineage feat at 1st level.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const SkillfulTail = Traits.defineTrait('ancestry/nephilim/skillful-tail', {
  name: 'Skillful Tail',
  description:
    '*Nephilim*\n\nYou’ve always had a tail, but with practice, you’ve learned to use it for more than signaling your mood. You can perform simple Interact actions with your tail, such as opening an unlocked door. Your tail can’t perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish, and you can’t use it to hold items.',
  archetypes: [Feat, AncestryFeat, NephilimFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(NephilimHeritage)],
  effects: [],
})

export const InspireImitation = Traits.defineTrait('ancestry/aiuvarin/inspire-imitation', {
  name: 'Inspire Imitation',
  description:
    '*Aiuvarin*\n\nYour actions inspire your allies to great achievements. Whenever you critically succeed at a skill check, you automatically qualify to use the Aid reaction when attempting to help an ally using the same skill, even without spending an action to prepare to do so.',
  archetypes: [Feat, AncestryFeat, AiuvarinFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(AiuvarinHeritage)],
  effects: [],
})

export const SupernaturalCharm = Traits.defineTrait('ancestry/aiuvarin/supernatural-charm', {
  name: 'Supernatural Charm',
  description:
    '*Aiuvarin*\n\nThe elven magic in your blood manifests as a force you can use to become more appealing or alluring. You can cast 1st-rank _charm_ as an arcane innate spell once per day.',
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
