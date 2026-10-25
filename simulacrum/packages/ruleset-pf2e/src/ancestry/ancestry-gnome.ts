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
  GnomeFeat,
  Heritage,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/tag'
import { Charisma, Constitution, HitPoints, Speed, Strength } from '@simulacrum/ruleset-pf2e/characteristic'
import {
  DexterityAncestryBoost,
  IntelligenceAncestryBoost,
  StrengthAncestryBoost,
  WisdomAncestryBoost,
} from '@simulacrum/ruleset-pf2e/attribute-boost'
import { FreeAction, SingleAction } from '@simulacrum/ruleset-pf2e/action-type'
import { Darkvision, GnomeHeritage, LowLightVision } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AdditionalLore, Assurance } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const ChameleonGnome = Traits.defineTrait('heritage/chameleon-gnome', {
  name: 'Chameleon Gnome',
  description:
    "The color of your hair and skin is mutable, possibly due to latent magic from First World influences or lingering illusion effects. You can slowly change the vibrancy and the exact color, and the coloration can be different across your body, allowing you to create patterns or other colorful designs. It takes a single action for minor localized shifts and up to an hour for dramatic shifts throughout your body. While you're asleep, the colors shift on their own in tune with your dreams, giving you an unusual coloration each morning. When you're in an area where your coloration is roughly similar to the environment (for instance, forest green in a forest), you can use the single action to make minor localized shifts designed to help you blend into your surroundings. This grants you a +2 circumstance bonus to [Stealth](characteristic:skill/stealth) checks until your surroundings shift in coloration or pattern.",
  tags: [Heritage, GnomeHeritage],
  effects: [],
})

export const FeyTouchedGnome = Traits.defineTrait('heritage/fey-touched-gnome', {
  name: 'Fey-touched Gnome',
  description:
    'The blood of the fey flows through your veins, saturating you with their magic and making you truly one of them. You gain the [fey](content:traits/fey) trait, in addition to the [gnome](content:traits/gnome) and [humanoid](content:traits/humanoid) traits. Choose one cantrip from the [primal](trait:spellcasting/primal-spell-list) spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. You can change this cantrip to a different one from the same list once per day by meditating to realign yourself with the First World; this is a 10-minute activity that has the [concentrate](content:traits/concentrate) trait.',
  tags: [Heritage, GnomeHeritage],
  effects: [],
})

export const SensateGnome = Traits.defineTrait('heritage/sensate-gnome', {
  name: 'Sensate Gnome',
  description:
    "You see all colors as brighter, hear all sounds as richer, and especially smell all scents with incredible detail. You gain a special sense: [imprecise](content:playing-the-game/imprecise-senses) [scent](content:playing-the-game/scent) with a range of 30 feet. This means you can use your sense of smell to determine the exact location of a creature. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind.\n\nIn addition, you gain a +2 circumstance bonus to [Perception](characteristic:perception) checks whenever you're trying to locate an undetected creature that is within the range of your scent.",
  tags: [Heritage, GnomeHeritage],
  effects: [],
})

export const UmbralGnome = Traits.defineTrait('heritage/umbral-gnome', {
  name: 'Umbral Gnome',
  description:
    'Whether from a connection to dark or shadowy fey, from the underground gnomes known as drathnelar, or from another source, you can see in complete darkness. You gain [darkvision](content:playing-the-game/darkvision-and-greater-darkvision).',
  tags: [Heritage, GnomeHeritage],
  effects: [Effects.gainTrait(Darkvision)],
})

export const WellspringGnome = Traits.defineTrait('heritage/wellspring-gnome', {
  name: 'Wellspring Gnome',
  description:
    "Some other source of magic has a greater hold on you than the primal magic of your fey lineage does. This connection might come from an occult plane or an ancient occult song; a deity, celestial, or fiend; magical effluent left behind by a mage war; or ancient rune magic.\n\nChoose [arcane](trait:spellcasting/arcane-spell-list), [divine](trait:spellcasting/divine-spell-list), or [occult](trait:spellcasting/occult-spell-list). You gain one cantrip from that magical tradition's spell list. You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell rank equal to half your level rounded up. Whenever you gain a primal innate spell from a gnome ancestry feat, change its tradition from primal to your chosen tradition.",
  tags: [Heritage, GnomeHeritage],
  effects: [],
})

export const SelectGnomeHeritage = CharacterOptions.selectTraitOption('ancestry/gnome/select-heritage', {
  name: 'Gnome Heritage',
  filter: { tags: [[GnomeHeritage, VersatileHeritage]] },
})

export const SelectGnomeFeat1 = CharacterOptions.selectTraitOption('ancestry/gnome/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { tags: [AncestryFeat, [GnomeFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectGnomeFeat5 = CharacterOptions.selectTraitOption('ancestry/gnome/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    tags: [AncestryFeat, [GnomeFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const SelectGnomeFeat9 = CharacterOptions.selectTraitOption('ancestry/gnome/select-feat-9', {
  name: 'Ancestry Feat (Level 9)',
  filter: {
    tags: [
      AncestryFeat,
      [GnomeFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat],
      [FeatLevel1, FeatLevel5, FeatLevel9],
    ],
  },
})

export const SelectGnomeAncestryBoost = CharacterOptions.selectTraitOption('ancestry/gnome/select-boost', {
  name: 'Ancestry Boost',
  filter: { specificOptions: [StrengthAncestryBoost, DexterityAncestryBoost, IntelligenceAncestryBoost, WisdomAncestryBoost] },
})

export const Gnome = Traits.defineTrait('ancestry/gnome', {
  name: 'Gnome',
  description:
    "*Gnome, Humanoid*\n\n_Gnomes are short and hardy folk, with an unquenchable curiosity and eccentric habits._\n\nIf you want a character with boundless enthusiasm and an alien, fey outlook on morality and life, you should play a gnome.\n\nRead the full entry in [Gnomes](content:ancestries-and-backgrounds/gnomes).\n\n**Hit Points** 8\n\n**Size** Small\n\n**Speed** 25 feet\n\n**Attribute Boosts** Constitution, Charisma, Free\n\n**Attribute Flaws** Strength\n\n**Languages** [Common](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) [Fey](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) [Gnomish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) Additional languages equal to your [Intelligence modifier](characteristic:intelligence) (if it's positive). Choose from [Draconic](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Dwarven](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Elven](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Goblin](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Jotun](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Orcish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Low-Light Vision** You can see in dim light as though it were bright light, so you ignore the [concealed](content:conditions/concealed) condition due to dim light.",
  tags: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(8))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(25))),
    Effects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Strength, Attributes.modifier(Patches.sum(-1))),
    Effects.gainCharacterOption(SelectGnomeAncestryBoost),
    Effects.gainTrait(LowLightVision),
    Effects.gainCharacterOption(SelectGnomeHeritage),
    Effects.gainCharacterOption(SelectGnomeFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectGnomeFeat5)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [Effects.gainCharacterOption(SelectGnomeFeat9)]),
  ],
})

export const AnimalAccomplice = Traits.defineTrait('ancestry/gnome/animal-accomplice', {
  name: 'Animal Accomplice',
  description:
    '*Gnome*\n\nYou build a rapport with an animal, which becomes magically bonded to you. You gain a familiar. The type of animal is up to you, but most gnomes choose animals with a burrow [Speed](characteristic:speed).',
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const AnimalElocutionist = Traits.defineTrait('ancestry/gnome/animal-elocutionist', {
  name: 'Animal Elocutionist',
  description:
    '*Gnome*\n\nYou hear animal sounds as conversations instead of unintelligent noise, and you can respond in turn. You can ask questions of, receive answers from, and use the [Diplomacy](characteristic:skill/diplomacy) skill with animals. In most cases, wild animals will give you time to make your case. You gain a +1 circumstance bonus to [Make an Impression](content:skills/make-an-impression) on animals.',
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const FeyFellowship = Traits.defineTrait('ancestry/gnome/fey-fellowship', {
  name: 'Fey Fellowship',
  description:
    '*Gnome*\n\nYour enhanced fey connection (either through your blood or via prolonged contact with their kind) affords you a warmer reception from creatures of the First World as well as tools to foil their tricks or withstand their magic. You gain a +2 circumstance bonus to both [Perception](characteristic:perception) checks and saving throws against fey.\n\nIn addition, whenever you meet a fey creature in a social situation, you can immediately attempt a [Diplomacy](characteristic:skill/diplomacy) check to [Make an Impression](content:skills/make-an-impression) on that creature rather than needing to converse for 1 minute. You take a –5 penalty to the check. If you fail, you can engage in 1 minute of conversation and attempt a new check at the end of that time rather than accepting the failure or critical failure result.',
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const FirstWorldMagic = Traits.defineTrait('ancestry/gnome/first-world-magic', {
  name: 'First World Magic',
  description:
    '*Gnome*\n\nYour connection to the First World grants you a primal innate spell, much like those of the fey. Choose one cantrip from the [primal](trait:spellcasting/primal-spell-list) spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.',
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const GnomeObsession = Traits.defineTrait('ancestry/gnome/gnome-obsession', {
  name: 'Gnome Obsession',
  description:
    '*Gnome*\n\nYou might have a flighty nature, but when a topic captures your attention, you dive into it headfirst. You gain the [Additional Lore](trait:feat/additional-lore) feat and the [Assurance](trait:feat/assurance) feat for the chosen [Lore](content:skills/lore). As gnome obsessions can come and go quickly, you can retrain Gnome Obsession to a different Lore subcategory in 1 day of downtime.',
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [Effects.gainTrait(AdditionalLore), Effects.gainTrait(Assurance)],
})

export const GnomeWeaponFamiliarity = Traits.defineTrait('ancestry/gnome/gnome-weapon-familiarity', {
  name: 'Gnome Weapon Familiarity',
  description:
    '*Gnome*\n\nYou favor unusual weapons tied to your people, such as blades with curved and peculiar shapes. You gain access to kukris and all uncommon weapons with the [gnome](content:traits/gnome) trait. You have familiarity with weapons with the gnome trait plus the glaive and kukri—for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.',
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const IllusionSense = Traits.defineTrait('ancestry/gnome/illusion-sense', {
  name: 'Illusion Sense',
  description:
    "*Gnome*\n\nYour ancestors spent their days cloaked and cradled in illusions, and as a result, sensing illusion magic is second nature to you. You gain a +1 circumstance bonus to both [Perception](characteristic:perception) checks and [Will saves](characteristic:will) against illusions.\n\nWhen you come within 10 feet of an illusion that can be disbelieved, the GM rolls a secret check for you to disbelieve it, even if you didn't spend an action to [Interact](content:playing-the-game/interact) with the illusion.",
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const RazzleDazzle = Traits.defineTrait('ancestry/gnome/razzle-dazzle', {
  name: 'Razzle-Dazzle',
  description:
    "*Gnome*\n\n**Frequency** once per hour\n\n**Trigger** You blind or dazzle a creature\n\nYou've spent considerable time practicing the manipulation of light, weaponizing your blade's reflection or bolstering the luminosity of magical displays to unconventional heights. Extend the duration of the [blinded](content:conditions/blinded) or [dazzled](content:conditions/dazzled) condition you give the target by 1 round.",
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const EnergizedFont = Traits.defineTrait('ancestry/gnome/energized-font', {
  name: 'Energized Font',
  description:
    '*Gnome*\n\n**Frequency** once per day\n\n**Prerequisites** focus pool, at least one innate spell from a gnome heritage or ancestry feat that shares a tradition with at least one of your focus spells\n\nYou can focus your mind more quickly thanks to the magic that flows within you. You regain 1 Focus Point, up to your usual maximum.',
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel5],
  effects: [],
})

export const ProjectPersona = Traits.defineTrait('ancestry/gnome/project-persona', {
  name: 'Project Persona',
  description:
    "*Concentrate, Gnome, Illusion, Primal, Visual*\n\nWhere others etch their armor to serve as a conduit for their imaginations, your vivid mind and bold personality allow you to project a more fitting persona over your lackluster armor. You change the shape and appearance of your armor to appear as ordinary or fine clothes of your imagining. The armor's statistics don't change. This effect lasts as long as you remain conscious and are wearing the armor. A creature can disbelieve the illusion by [Seeking](content:playing-the-game/seek) or touching your armor. The DC equals your [Will DC](characteristic:will).",
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel5],
  effects: [],
})

export const RazzleDazzleAction = Abilities.defineAbility('ancestry/gnome/razzle-dazzle/action', {
  name: 'Razzle-Dazzle',
  description: '*Gnome*',
  prerequisites: [Traits.traitPrerequisite(RazzleDazzle)],
  actions: [
    {
      name: 'Razzle-Dazzle',
      description:
        "**Frequency** once per hour\n\n**Trigger** You blind or dazzle a creature\n\nYou've spent considerable time practicing the manipulation of light, weaponizing your blade's reflection or bolstering the luminosity of magical displays to unconventional heights. Extend the duration of the [blinded](content:conditions/blinded) or [dazzled](content:conditions/dazzled) condition you give the target by 1 round.",
      action: FreeAction,
    },
  ],
})

export const EnergizedFontAction = Abilities.defineAbility('ancestry/gnome/energized-font/action', {
  name: 'Energized Font',
  description: '*Gnome*',
  prerequisites: [Traits.traitPrerequisite(EnergizedFont)],
  actions: [
    {
      name: 'Energized Font',
      description:
        '**Frequency** once per day\n\n**Prerequisites** focus pool, at least one innate spell from a gnome heritage or ancestry feat that shares a tradition with at least one of your focus spells\n\nYou can focus your mind more quickly thanks to the magic that flows within you. You regain 1 Focus Point, up to your usual maximum.',
      action: SingleAction,
    },
  ],
})

export const ProjectPersonaAction = Abilities.defineAbility('ancestry/gnome/project-persona/action', {
  name: 'Project Persona',
  description: '*Concentrate, Gnome, Illusion, Primal, Visual*',
  prerequisites: [Traits.traitPrerequisite(ProjectPersona)],
  actions: [
    {
      name: 'Project Persona',
      description:
        "Where others etch their armor to serve as a conduit for their imaginations, your vivid mind and bold personality allow you to project a more fitting persona over your lackluster armor. You change the shape and appearance of your armor to appear as ordinary or fine clothes of your imagining. The armor's statistics don't change. This effect lasts as long as you remain conscious and are wearing the armor. A creature can disbelieve the illusion by [Seeking](content:playing-the-game/seek) or touching your armor. The DC equals your [Will DC](characteristic:will).",
      action: SingleAction,
    },
  ],
})

export const CautiousCuriosity = Traits.defineTrait('ancestry/gnome/cautious-curiosity', {
  name: 'Cautious Curiosity',
  description:
    "*Gnome*\n\n**Prerequisites** at least one arcane or occult innate spell gained from a gnome heritage or gnome ancestry feat\n\nYou've learned a few magical techniques for getting yourself both into and out of trouble unnoticed. You gain [_disguise magic_](ability:spell/disguise-magic) and [_silence_](ability:spell/silence) as 2nd-rank arcane or occult innate spells. The tradition of these spells must match the tradition you use for your gnome ancestry options. You can cast each spell once per day and can target only yourself.",
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel9],
  effects: [],
})

export const FirstWorldAdept = Traits.defineTrait('ancestry/gnome/first-world-adept', {
  name: 'First World Adept',
  description:
    '*Gnome*\n\n**Prerequisites** at least one primal innate spell\n\nOver time your fey magic has grown stronger. You gain [_invisibility_](ability:spell/invisibility) and [_revealing light_](ability:spell/revealing-light) as 2nd-rank primal innate spells. You can cast each of these primal innate spells once per day.',
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel9],
  effects: [],
})

export const LifeLeap = Traits.defineTrait('ancestry/gnome/life-leap', {
  name: 'Life Leap',
  description:
    "*Gnome, Move, Teleportation*\n\n**Requirements** You must be adjacent to a living creature\n\nYou phase through a space that a living creature occupies in a flash, spontaneously appearing on the opposite side of it in a vibrant display of colorful light. You move from your current location to another location that's still adjacent to the same living creature, but on the opposite side or corner of the creature's space. To determine whether a position is valid, use the same rules as for flanking: a line through the center of the two spaces must pass through opposite sides or corners of the creature's space.\n\nYou pass through the creature's life force, appearing in the selected location; this doesn't trigger reactions based on movement. You must be able to see your destination, and you can't move farther than your [Speed](characteristic:speed) would allow.",
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel9],
  effects: [],
})

export const VivaciousConduit = Traits.defineTrait('ancestry/gnome/vivacious-conduit', {
  name: 'Vivacious Conduit',
  description:
    '*Gnome*\n\nYour connection to the First World has grown, and its vital energy flows into you rapidly. If you rest for 10 minutes, you regain [Hit Points](characteristic:hit-points) equal to your [Constitution modifier](characteristic:constitution) × half your level. This is a healing [vitality](content:traits/vitality) effect and is cumulative with any healing you receive from [Treat Wounds](content:skills/treat-wounds).',
  tags: [Feat, AncestryFeat, GnomeFeat, FeatLevel9],
  effects: [],
})

export const LifeLeapAction = Abilities.defineAbility('ancestry/gnome/life-leap/action', {
  name: 'Life Leap',
  description: '*Gnome, Move, Teleportation*',
  prerequisites: [Traits.traitPrerequisite(LifeLeap)],
  actions: [
    {
      name: 'Life Leap',
      description:
        "**Requirements** You must be adjacent to a living creature\n\nYou phase through a space that a living creature occupies in a flash, spontaneously appearing on the opposite side of it in a vibrant display of colorful light. You move from your current location to another location that's still adjacent to the same living creature, but on the opposite side or corner of the creature's space. To determine whether a position is valid, use the same rules as for flanking: a line through the center of the two spaces must pass through opposite sides or corners of the creature's space.\n\nYou pass through the creature's life force, appearing in the selected location; this doesn't trigger reactions based on movement. You must be able to see your destination, and you can't move farther than your [Speed](characteristic:speed) would allow.",
      action: SingleAction,
    },
  ],
})

export const AllGnomeEntities = [
  ChameleonGnome,
  FeyTouchedGnome,
  SensateGnome,
  UmbralGnome,
  WellspringGnome,
  SelectGnomeHeritage,
  SelectGnomeFeat1,
  SelectGnomeFeat5,
  SelectGnomeFeat9,
  SelectGnomeAncestryBoost,
  Gnome,
  AnimalAccomplice,
  AnimalElocutionist,
  FeyFellowship,
  FirstWorldMagic,
  GnomeObsession,
  GnomeWeaponFamiliarity,
  IllusionSense,
  RazzleDazzle,
  RazzleDazzleAction,
  EnergizedFont,
  EnergizedFontAction,
  ProjectPersona,
  ProjectPersonaAction,
  CautiousCuriosity,
  FirstWorldAdept,
  LifeLeap,
  VivaciousConduit,
  LifeLeapAction,
]
