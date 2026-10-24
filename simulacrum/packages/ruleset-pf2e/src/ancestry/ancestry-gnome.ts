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
  GnomeFeat,
  Heritage,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/archetype'
import { HitPoints, Speed } from '@simulacrum/ruleset-pf2e/characteristic'
import { CharismaAncestryBoost, ConstitutionAncestryBoost, SelectAncestryBoost, StrengthAncestryFlaw } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { FreeAction, SingleAction } from '@simulacrum/ruleset-pf2e/action-type'
import { Darkvision, GnomeHeritage, LowLightVision } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AdditionalLore, Assurance } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const ChameleonGnome = Traits.defineTrait('heritage/chameleon-gnome', {
  name: 'Chameleon Gnome',
  description:
    "The color of your hair and skin is mutable, possibly due to latent magic from First World influences or lingering illusion effects. You can slowly change the vibrancy and the exact color, and the coloration can be different across your body, allowing you to create patterns or other colorful designs. It takes a single action for minor localized shifts and up to an hour for dramatic shifts throughout your body. While you're asleep, the colors shift on their own in tune with your dreams, giving you an unusual coloration each morning. When you're in an area where your coloration is roughly similar to the environment (for instance, forest green in a forest), you can use the single action to make minor localized shifts designed to help you blend into your surroundings. This grants you a +2 circumstance bonus to Stealth checks until your surroundings shift in coloration or pattern.",
  archetypes: [Heritage, GnomeHeritage],
  effects: [],
})

export const FeyTouchedGnome = Traits.defineTrait('heritage/fey-touched-gnome', {
  name: 'Fey-touched Gnome',
  description:
    'The blood of the fey flows through your veins, saturating you with their magic and making you truly one of them. You gain the fey trait, in addition to the gnome and humanoid traits. Choose one cantrip from the primal spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. You can change this cantrip to a different one from the same list once per day by meditating to realign yourself with the First World; this is a 10-minute activity that has the concentrate trait.',
  archetypes: [Heritage, GnomeHeritage],
  effects: [],
})

export const SensateGnome = Traits.defineTrait('heritage/sensate-gnome', {
  name: 'Sensate Gnome',
  description:
    "You see all colors as brighter, hear all sounds as richer, and especially smell all scents with incredible detail. You gain a special sense: imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine the exact location of a creature. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind.\n\nIn addition, you gain a +2 circumstance bonus to Perception checks whenever you're trying to locate an undetected creature that is within the range of your scent.",
  archetypes: [Heritage, GnomeHeritage],
  effects: [],
})

export const UmbralGnome = Traits.defineTrait('heritage/umbral-gnome', {
  name: 'Umbral Gnome',
  description:
    'Whether from a connection to dark or shadowy fey, from the underground gnomes known as drathnelar, or from another source, you can see in complete darkness. You gain darkvision.',
  archetypes: [Heritage, GnomeHeritage],
  effects: [Effects.gainTrait(Darkvision)],
})

export const WellspringGnome = Traits.defineTrait('heritage/wellspring-gnome', {
  name: 'Wellspring Gnome',
  description:
    "Some other source of magic has a greater hold on you than the primal magic of your fey lineage does. This connection might come from an occult plane or an ancient occult song; a deity, celestial, or fiend; magical effluent left behind by a mage war; or ancient rune magic.\n\nChoose arcane, divine, or occult. You gain one cantrip from that magical tradition's spell list. You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell rank equal to half your level rounded up. Whenever you gain a primal innate spell from a gnome ancestry feat, change its tradition from primal to your chosen tradition.",
  archetypes: [Heritage, GnomeHeritage],
  effects: [],
})

export const SelectGnomeHeritage = CharacterOptions.selectTraitOption('ancestry/gnome/select-heritage', {
  name: 'Gnome Heritage',
  filter: { archetypes: [[GnomeHeritage, VersatileHeritage]] },
})

export const SelectGnomeFeat1 = CharacterOptions.selectTraitOption('ancestry/gnome/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { archetypes: [AncestryFeat, [GnomeFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectGnomeFeat5 = CharacterOptions.selectTraitOption('ancestry/gnome/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    archetypes: [AncestryFeat, [GnomeFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const Gnome = Traits.defineTrait('ancestry/gnome', {
  name: 'Gnome',
  description:
    "*Gnome, Humanoid*\n\n_Gnomes are short and hardy folk, with an unquenchable curiosity and eccentric habits._\n\nLong ago, early gnome ancestors emigrated from the First World, realm of the fey. While it's unclear why the first gnomes wandered to Golarion, this lineage manifests in modern gnomes as bizarre reasoning, eccentricity, obsessive tendencies, and what some see as naivete.\n\nAlways hungry for new experiences, gnomes constantly wander both mentally and physically, attempting to stave off a terrible ailment that threatens all of their people. This affliction, known as the Bleaching, strikes gnomes who fail to dream, innovate, and take in new experiences. The Bleaching slowly drains the color— literally—from gnomes, and it plunges those affected into states of deep depression that eventually claim their lives. Very few gnomes survive this scourge, becoming deeply morose and wise survivors known as bleachlings.\n\nIf you want a character with boundless enthusiasm and an alien, fey outlook on morality and life, you should play a gnome.\n\n**You Might...**\n\n- Embrace learning and hop from one area of study to another without warning.\n\n- Speak, think, and move quickly, and lose patience with those who can't keep up.\n\n**Others Probably...**\n\n- Appreciate your enthusiasm and the energy with which you approach new situations.\n\n- Struggle to understand your motivations or adapt to your rapid changes of direction.\n\n**Physical Description**\n\nMost gnomes stand just over 3 feet in height and weigh little more than a human child. They exhibit a wide range of natural skin, hair, and eye colors. For gnomes that haven't begun the Bleaching, nearly any hair and eye color other than white is possible, with vibrant colors most frequent, while skin tones span a slightly narrower spectrum and tend toward earthy tones and pinkish hues, though occasionally green, black, or pale blue.\n\nGnomes typically reach physical maturity at the age of 18, though many gnomes maintain a childlike curiosity about the world even into adulthood. A gnome can theoretically live to any age if they can stave off the Bleaching indefinitely, but in practice gnomes rarely live longer than around 400 years.\n\n**Society**\n\nWhile most gnomes adopt some of the cultural practices of the region in which they live, they tend to pick and choose, adjusting their communities to fit their own fey logic. This often leads to majority gnome communities eventually consisting almost entirely of gnomes, as other people, bewildered by gnomish political decisions, choose to move elsewhere. Gnomes have little culture that they would consider entirely their own. Exceptionally few gnome kingdoms or nations exist on the surface of Golarion, and most gnomes wouldn't know what to do with such a state if they had one.\n\nBy necessity, few gnomes marry for life, instead allowing relationships to run their course before amicably moving on, the better to stave off the Bleaching with new experiences. Though gnome families tend to be small, many gnome communities raise children communally, with fluid family boundaries. Gnome names can get quite complex and polysyllabic. Gnomes rarely concern themselves with how easy their names are to pronounce, and they often go by shorter nicknames. Among gnomes, the shorter the name, the more feminine it's considered to be.\n\n**Alignment and Religion**\n\nThough gnomes are impulsive tricksters with inscrutable motives and confusing methods, many at least attempt to make the world a better place. They are prone to fits of powerful emotion and are rarely shy about helping those they believe deserve it. Gnomes most commonly worship deities that value individuality and nature, such as Cayden Cailean, Desna, Gozreh, and Shelyn.\n\n**Popular Edicts** seek new experiences, embrace your inspiration, move from obsession to obsession\n**Popular Anathema** slow down to explain yourself, deprive someone of all stimulation\n\n**Names**\n\nAbroshtor, Bastargre, Besh, Fijit, Halungalom, Krolmnite, Neji, Majet, Pai, Poshment, Queck, Trig, Zarzuket, Zatqualmie\n\n**Gnome Mechanics**\n\n**Hit Points**\n\n8\n\n**Size**\n\nSmall\n\n**Speed**\n\n25 feet\n\n**Attribute Boosts**\n\nConstitution, Charisma, Free\n\n**Attribute Flaws**\n\nStrength\n\n**Languages**\n\nCommon\n\nFey\n\nGnomish\n\nAdditional languages equal to your Intelligence modifier (if it's positive). Choose from Draconic, Dwarven, Elven, Goblin, Jotun, Orcish, and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Low-Light Vision**\n\nYou can see in dim light as though it were bright light, so you ignore the concealed condition due to dim light.",
  archetypes: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(8))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(25))),
    Effects.gainTrait(ConstitutionAncestryBoost),
    Effects.gainTrait(CharismaAncestryBoost),
    Effects.gainTrait(StrengthAncestryFlaw),
    Effects.gainCharacterOption(SelectAncestryBoost),
    Effects.gainTrait(LowLightVision),
    Effects.gainCharacterOption(SelectGnomeHeritage),
    Effects.gainCharacterOption(SelectGnomeFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectGnomeFeat5)]),
  ],
})

export const AnimalAccomplice = Traits.defineTrait('ancestry/gnome/animal-accomplice', {
  name: 'Animal Accomplice',
  description:
    '*Gnome*\n\nYou build a rapport with an animal, which becomes magically bonded to you. You gain a familiar. The type of animal is up to you, but most gnomes choose animals with a burrow Speed.',
  archetypes: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const AnimalElocutionist = Traits.defineTrait('ancestry/gnome/animal-elocutionist', {
  name: 'Animal Elocutionist',
  description:
    '*Gnome*\n\nYou hear animal sounds as conversations instead of unintelligent noise, and you can respond in turn. You can ask questions of, receive answers from, and use the Diplomacy skill with animals. In most cases, wild animals will give you time to make your case. You gain a +1 circumstance bonus to Make an Impression on animals.',
  archetypes: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const FeyFellowship = Traits.defineTrait('ancestry/gnome/fey-fellowship', {
  name: 'Fey Fellowship',
  description:
    '*Gnome*\n\nYour enhanced fey connection (either through your blood or via prolonged contact with their kind) affords you a warmer reception from creatures of the First World as well as tools to foil their tricks or withstand their magic. You gain a +2 circumstance bonus to both Perception checks and saving throws against fey.\n\nIn addition, whenever you meet a fey creature in a social situation, you can immediately attempt a Diplomacy check to Make an Impression on that creature rather than needing to converse for 1 minute. You take a –5 penalty to the check. If you fail, you can engage in 1 minute of conversation and attempt a new check at the end of that time rather than accepting the failure or critical failure result.',
  archetypes: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const FirstWorldMagic = Traits.defineTrait('ancestry/gnome/first-world-magic', {
  name: 'First World Magic',
  description:
    '*Gnome*\n\nYour connection to the First World grants you a primal innate spell, much like those of the fey. Choose one cantrip from the primal spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.',
  archetypes: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const GnomeObsession = Traits.defineTrait('ancestry/gnome/gnome-obsession', {
  name: 'Gnome Obsession',
  description:
    '*Gnome*\n\nYou might have a flighty nature, but when a topic captures your attention, you dive into it headfirst. You gain the Additional Lore feat and the Assurance feat for the chosen Lore. As gnome obsessions can come and go quickly, you can retrain Gnome Obsession to a different Lore subcategory in 1 day of downtime.',
  archetypes: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [Effects.gainTrait(AdditionalLore), Effects.gainTrait(Assurance)],
})

export const GnomeWeaponFamiliarity = Traits.defineTrait('ancestry/gnome/gnome-weapon-familiarity', {
  name: 'Gnome Weapon Familiarity',
  description:
    '*Gnome*\n\nYou favor unusual weapons tied to your people, such as blades with curved and peculiar shapes. You gain access to kukris and all uncommon weapons with the gnome trait. You have familiarity with weapons with the gnome trait plus the glaive and kukri—for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.',
  archetypes: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const IllusionSense = Traits.defineTrait('ancestry/gnome/illusion-sense', {
  name: 'Illusion Sense',
  description:
    "*Gnome*\n\nYour ancestors spent their days cloaked and cradled in illusions, and as a result, sensing illusion magic is second nature to you. You gain a +1 circumstance bonus to both Perception checks and Will saves against illusions.\n\nWhen you come within 10 feet of an illusion that can be disbelieved, the GM rolls a secret check for you to disbelieve it, even if you didn't spend an action to Interact with the illusion.",
  archetypes: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const RazzleDazzle = Traits.defineTrait('ancestry/gnome/razzle-dazzle', {
  name: 'Razzle-Dazzle',
  description:
    "*Gnome*\n\n**Frequency** once per hour\n\n**Trigger** You blind or dazzle a creature\n\nYou've spent considerable time practicing the manipulation of light, weaponizing your blade's reflection or bolstering the luminosity of magical displays to unconventional heights. Extend the duration of the blinded or dazzled condition you give the target by 1 round.",
  archetypes: [Feat, AncestryFeat, GnomeFeat, FeatLevel1],
  effects: [],
})

export const EnergizedFont = Traits.defineTrait('ancestry/gnome/energized-font', {
  name: 'Energized Font',
  description:
    '*Gnome*\n\n**Frequency** once per day\n\n**Prerequisites** focus pool, at least one innate spell from a gnome heritage or ancestry feat that shares a tradition with at least one of your focus spells\n\nYou can focus your mind more quickly thanks to the magic that flows within you. You regain 1 Focus Point, up to your usual maximum.',
  archetypes: [Feat, AncestryFeat, GnomeFeat, FeatLevel5],
  effects: [],
})

export const ProjectPersona = Traits.defineTrait('ancestry/gnome/project-persona', {
  name: 'Project Persona',
  description:
    "*Concentrate, Gnome, Illusion, Primal, Visual*\n\nWhere others etch their armor to serve as a conduit for their imaginations, your vivid mind and bold personality allow you to project a more fitting persona over your lackluster armor. You change the shape and appearance of your armor to appear as ordinary or fine clothes of your imagining. The armor's statistics don't change. This effect lasts as long as you remain conscious and are wearing the armor. A creature can disbelieve the illusion by Seeking or touching your armor. The DC equals your Will DC.",
  archetypes: [Feat, AncestryFeat, GnomeFeat, FeatLevel5],
  effects: [],
})

export const RazzleDazzleAction = Abilities.defineAbility('ancestry/gnome/razzle-dazzle/action', {
  name: 'Razzle-Dazzle',
  description:
    "*Gnome*\n\n**Frequency** once per hour\n\n**Trigger** You blind or dazzle a creature\n\nYou've spent considerable time practicing the manipulation of light, weaponizing your blade's reflection or bolstering the luminosity of magical displays to unconventional heights. Extend the duration of the blinded or dazzled condition you give the target by 1 round.",
  prerequisites: [Traits.traitPrerequisite(RazzleDazzle)],
  actions: [{ name: 'Razzle-Dazzle', action: FreeAction }],
})

export const EnergizedFontAction = Abilities.defineAbility('ancestry/gnome/energized-font/action', {
  name: 'Energized Font',
  description:
    '*Gnome*\n\n**Frequency** once per day\n\n**Prerequisites** focus pool, at least one innate spell from a gnome heritage or ancestry feat that shares a tradition with at least one of your focus spells\n\nYou can focus your mind more quickly thanks to the magic that flows within you. You regain 1 Focus Point, up to your usual maximum.',
  prerequisites: [Traits.traitPrerequisite(EnergizedFont)],
  actions: [{ name: 'Energized Font', action: SingleAction }],
})

export const ProjectPersonaAction = Abilities.defineAbility('ancestry/gnome/project-persona/action', {
  name: 'Project Persona',
  description:
    "*Concentrate, Gnome, Illusion, Primal, Visual*\n\nWhere others etch their armor to serve as a conduit for their imaginations, your vivid mind and bold personality allow you to project a more fitting persona over your lackluster armor. You change the shape and appearance of your armor to appear as ordinary or fine clothes of your imagining. The armor's statistics don't change. This effect lasts as long as you remain conscious and are wearing the armor. A creature can disbelieve the illusion by Seeking or touching your armor. The DC equals your Will DC.",
  prerequisites: [Traits.traitPrerequisite(ProjectPersona)],
  actions: [{ name: 'Project Persona', action: SingleAction }],
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
]
