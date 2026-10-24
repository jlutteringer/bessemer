import { Abilities, Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import * as Spells from '@simulacrum/ruleset-pf2e/spell'
import * as BardFocusSpells from '@simulacrum/ruleset-pf2e/class/bard-focus-spell'
import {
  BardFeat,
  ClassFeat,
  ClericFeat,
  DruidFeat,
  Feat,
  FeatLevel1,
  FeatLevel2,
  FeatLevel4,
  WitchFeat,
  WizardFeat,
} from '@simulacrum/ruleset-pf2e/archetype'
import { ExpertOccultism } from '@simulacrum/ruleset-pf2e/skill'
import { CantripLoadout } from '@simulacrum/ruleset-pf2e/loadout'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import { SelectBardCantrip, SpellRepertoire } from '@simulacrum/ruleset-pf2e/class/bard-spellcasting'
import {
  Enigma,
  EnigmaMuseType,
  Maestro,
  MaestroMuseType,
  Polymath,
  PolymathMuseType,
  Warrior,
  WarriorMuseType,
} from '@simulacrum/ruleset-pf2e/class/bard-muse'

export const BardicLore = Traits.defineTrait('feat/bardic-lore', {
  name: 'Bardic Lore',
  description:
    '*Bard*\n\n**Prerequisites** enigma muse\n\nYour studies make you informed on every subject. You are trained in Bardic Lore, a special Lore skill that can be used only to Recall Knowledge, but on any topic. If you have legendary proficiency in Occultism, you gain expert proficiency in Bardic Lore, but you can’t increase your proficiency rank in Bardic Lore by any other means.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(EnigmaMuseType)],
  effects: [],
})

export const HymnOfHealing = Traits.defineTrait('feat/hymn-of-healing', {
  name: 'Hymn of Healing',
  description:
    '*Bard*\n\nYou learn the _hymn of healing_ composition spell, which imbues your music with rich melodies that help your allies recover from harm.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel1],
  effects: [
    Effects.gainAbility(BardFocusSpells.HymnOfHealing),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const LingeringComposition = Traits.defineTrait('feat/lingering-composition', {
  name: 'Lingering Composition',
  description:
    '*Bard*\n\n**Prerequisites** maestro muse\n\nBy adding a flourish, you make your compositions last longer. You learn the _lingering composition_ focus spell.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(MaestroMuseType)],
  effects: [
    Effects.gainAbility(BardFocusSpells.LingeringComposition),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const MartialPerformance = Traits.defineTrait('feat/martial-performance', {
  name: 'Martial Performance',
  description:
    '*Bard*\n\n**Prerequisites** warrior muse\n\nYour muse has taught you how to handle a wider variety of weapons than most bards, empowering you to effortlessly blend your performance into combat tools. When you have a _courageous anthem_ composition cantrip active, and you damage an enemy with a Strike, the spell’s duration is extended by 1 round. You can extend an individual casting only once in this way.\n\nIf you gain the _rallying anthem_ or _song of strength_ composition cantrips, you can apply this benefit to those cantrips as well.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(WarriorMuseType)],
  effects: [],
})

export const ReachSpell = Traits.defineTrait('feat/reach-spell', {
  name: 'Reach Spell',
  description:
    '*Bard, Cleric, Concentrate, Druid, Oracle, Sorcerer, Spellshape, Witch, Wizard*\n\nYou can extend your spells’ range. If the next action you use is to Cast a Spell that has a range, increase that spell’s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.',
  archetypes: [Feat, ClassFeat, BardFeat, ClericFeat, DruidFeat, WitchFeat, WizardFeat, FeatLevel1],
  effects: [],
})

export const ReachSpellAction = Abilities.defineAbility('feat/reach-spell/action', {
  name: 'Reach Spell',
  description:
    '*Bard, Cleric, Concentrate, Druid, Oracle, Sorcerer, Spellshape, Witch, Wizard*\n\nYou can extend your spells’ range. If the next action you use is to Cast a Spell that has a range, increase that spell’s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.',
  prerequisites: [Traits.traitPrerequisite(ReachSpell)],
  actions: [{ name: 'Reach Spell', action: ActionTypes.SingleAction }],
})

export const VersatilePerformance = Traits.defineTrait('feat/versatile-performance', {
  name: 'Versatile Performance',
  description:
    '*Bard*\n\n**Prerequisites** polymath muse\n\nYou can rely on the grandeur of your performances rather than ordinary social skills. You can use Performance instead of Diplomacy to Make an Impression and instead of Intimidation to Demoralize. You can also use an acting Performance instead of Deception to Impersonate. In addition, you can use your proficiency rank in Performance to meet the prerequisites of skill feats that require a particular proficiency rank in Deception, Diplomacy, or Intimidation.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(PolymathMuseType)],
  effects: [],
})

export const WellVersed = Traits.defineTrait('feat/well-versed', {
  name: 'Well-Versed',
  description:
    '*Bard*\n\nYou’re resilient to performative influences that aren’t your own. You gain a +1 circumstance bonus to saving throws against effects with the auditory, illusion, linguistic, sonic, or visual traits.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel1],
  effects: [],
})

export const CantripExpansion = Traits.defineTrait('feat/cantrip-expansion', {
  name: 'Cantrip Expansion',
  description:
    '*Bard, Cleric, Magus, Oracle, Psychic, Sorcerer, Witch, Wizard*\n\nStudy broadens your range of simple spells.\n\n**Prepared Caster (Cleric, Wizard, etc.)**: You can prepare two additional cantrips each day.\n\n**Spontaneous Caster (Bard, Sorcerer, etc.)**: Add two additional cantrips from your spell list to your repertoire.',
  archetypes: [Feat, ClassFeat, BardFeat, ClericFeat, WitchFeat, WizardFeat, FeatLevel2],
  effects: [
    Effects.conditional(Traits.traitPrerequisite(SpellRepertoire), [
      Effects.gainCharacterOption(SelectBardCantrip),
      Effects.gainCharacterOption(SelectBardCantrip),
    ]),
    Effects.conditional(Expressions.not(Traits.traitPrerequisite(SpellRepertoire)), [
      Effects.gainLoadoutSlot(CantripLoadout),
      Effects.gainLoadoutSlot(CantripLoadout),
    ]),
  ],
})

export const DirectedAudience = Traits.defineTrait('feat/directed-audience', {
  name: 'Directed Audience',
  description:
    '*Bard*\n\nYou can shape the area of your composition spells. Whenever you cast a composition spell whose area is an emanation, you can change the spell’s area to a cone 10 feet larger, to a maximum of twice the original area. For example, you could modify a composition spell that affects a 30-foot emanation to affect a 40-foot cone, but a 5-foot emanation could only become a 10-foot cone.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel2],
  effects: [],
})

export const EmotionalPush = Traits.defineTrait('feat/emotional-push', {
  name: 'Emotional Push',
  description:
    '*Bard, Concentrate*\n\n**Trigger** An enemy you’re aware of fails its save against an emotion spell\n\nYou prepare to take advantage of your enemy’s sudden change in emotions. The target is off-guard against your next attack before the end of your next turn.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel2],
  effects: [],
})

export const EmotionalPushAction = Abilities.defineAbility('feat/emotional-push/action', {
  name: 'Emotional Push',
  description:
    '*Bard, Concentrate*\n\n**Trigger** An enemy you’re aware of fails its save against an emotion spell\n\nYou prepare to take advantage of your enemy’s sudden change in emotions. The target is off-guard against your next attack before the end of your next turn.',
  prerequisites: [Traits.traitPrerequisite(EmotionalPush)],
  actions: [{ name: 'Emotional Push', action: ActionTypes.Reaction }],
})

export const EsotericPolymath = Traits.defineTrait('feat/esoteric-polymath', {
  name: 'Esoteric Polymath',
  description:
    '*Bard*\n\n**Prerequisites** polymath muse\n\nYou keep a book of occult spells, similar to a wizard’s spellbook, and can use its spells to supplement your spell repertoire. Add all the spells in your repertoire to this book for free. You can use the Occultism skill to Learn Spells and add them to your spellbook by paying the appropriate cost. During your daily preparations, choose any one spell from your book of occult spells. If that spell is already in your spell repertoire, you can treat it as an additional signature spell that day. If it isn’t in your repertoire, treat it as though it were until your next daily preparations.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(PolymathMuseType)],
  effects: [],
})

export const LoremastersEtude = Traits.defineTrait('feat/loremasters-etude', {
  name: "Loremaster's Etude",
  description:
    "*Bard, Fortune*\n\n**Prerequisites** enigma muse\n\nYou magically unlock memories, making them easier to recall. You learn the _loremaster's etude_ composition spell.",
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(EnigmaMuseType)],
  effects: [
    Effects.gainAbility(BardFocusSpells.LoremastersEtude),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const MultifariousMuseEnigma = Traits.defineTrait('feat/multifarious-muse/enigma', {
  name: 'Multifarious Muse (Enigma)',
  description: 'Your muse is also an enigma muse. You gain the Bardic Lore feat.',
  prerequisites: [Expressions.not(Traits.traitPrerequisite(Enigma))],
  effects: [Effects.gainTrait(EnigmaMuseType), Effects.gainTrait(BardicLore)],
})

export const MultifariousMuseMaestro = Traits.defineTrait('feat/multifarious-muse/maestro', {
  name: 'Multifarious Muse (Maestro)',
  description: 'Your muse is also a maestro muse. You gain the Lingering Composition feat.',
  prerequisites: [Expressions.not(Traits.traitPrerequisite(Maestro))],
  effects: [Effects.gainTrait(MaestroMuseType), Effects.gainTrait(LingeringComposition)],
})

export const MultifariousMusePolymath = Traits.defineTrait('feat/multifarious-muse/polymath', {
  name: 'Multifarious Muse (Polymath)',
  description: 'Your muse is also a polymath muse. You gain the Versatile Performance feat.',
  prerequisites: [Expressions.not(Traits.traitPrerequisite(Polymath))],
  effects: [Effects.gainTrait(PolymathMuseType), Effects.gainTrait(VersatilePerformance)],
})

export const MultifariousMuseWarrior = Traits.defineTrait('feat/multifarious-muse/warrior', {
  name: 'Multifarious Muse (Warrior)',
  description: 'Your muse is also a warrior muse. You gain the Martial Performance feat.',
  prerequisites: [Expressions.not(Traits.traitPrerequisite(Warrior))],
  effects: [Effects.gainTrait(WarriorMuseType), Effects.gainTrait(MartialPerformance)],
})

export const SelectMultifariousMuse = CharacterOptions.selectTraitOption('feat/multifarious-muse/select', {
  name: 'Multifarious Muse',
  filter: { specificOptions: [MultifariousMuseEnigma, MultifariousMuseMaestro, MultifariousMusePolymath, MultifariousMuseWarrior] },
})

export const MultifariousMuse = Traits.defineTrait('feat/multifarious-muse', {
  name: 'Multifarious Muse',
  description:
    '*Bard*\n\nYour muse doesn’t fall into a single label. Choose a type of muse other than that of your own. You gain a 1st-level feat that requires that muse, and your muse is now also a muse of that type, allowing you to take feats with the other muse as a prerequisite. You don’t gain any of the other effects of the muse you chose.\n\n**Special** You can take this feat multiple times. Each time you do, you must choose a different type of muse other than that of your own.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel2],
  repeatable: true,
  effects: [Effects.gainCharacterOption(SelectMultifariousMuse)],
})

export const SongOfStrength = Traits.defineTrait('feat/song-of-strength', {
  name: 'Song of Strength',
  description:
    '*Bard*\n\n**Prerequisites** warrior muse\n\nYour performances inspire strength in your allies to aid them at physical tasks. You learn the _song of strength_ composition cantrip.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(WarriorMuseType)],
  effects: [Effects.gainAbility(Spells.SongOfStrength)],
})

export const UpliftingOverture = Traits.defineTrait('feat/uplifting-overture', {
  name: 'Uplifting Overture',
  description:
    '*Bard*\n\n**Prerequisites** maestro muse\n\nYou learn the _uplifting overture_ composition cantrip, which aids your allies’ skills with the inspiring nature of your performance.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(MaestroMuseType)],
  effects: [Effects.gainAbility(Spells.UpliftingOverture)],
})

export const CombatReading = Traits.defineTrait('feat/combat-reading', {
  name: 'Combat Reading',
  description:
    "*Bard, Secret*\n\nYou use a performer’s cold reading techniques, aura reading, and other tricks to discover your foe’s strengths and weaknesses. The GM rolls a secret Occultism check for you against the Deception or Stealth DC (whichever is higher) of an enemy of your choice who is not concealed from you, hidden from you, or undetected by you, and who is engaged in combat. The GM might apply a penalty for the distance between you and the enemy. The enemy is then temporarily immune to your Combat Reading for 1 day.\n\n**Critical Success** The GM chooses and tells you two of the following pieces of information about the enemy: which of the enemy's weaknesses is highest, which of the enemy's saving throws has the lowest modifier, one immunity the enemy has, or which of the enemy's resistances is highest. In the event of a tie, the GM should pick one at random.\n\n**Success** The GM chooses one piece of information from the above list to tell you about the enemy.\n\n**Critical Failure** The GM gives you false information (the GM makes up the information).",
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel4],
  effects: [],
})

export const CombatReadingAction = Abilities.defineAbility('feat/combat-reading/action', {
  name: 'Combat Reading',
  description:
    "*Bard, Secret*\n\nYou use a performer’s cold reading techniques, aura reading, and other tricks to discover your foe’s strengths and weaknesses. The GM rolls a secret Occultism check for you against the Deception or Stealth DC (whichever is higher) of an enemy of your choice who is not concealed from you, hidden from you, or undetected by you, and who is engaged in combat. The GM might apply a penalty for the distance between you and the enemy. The enemy is then temporarily immune to your Combat Reading for 1 day.\n\n**Critical Success** The GM chooses and tells you two of the following pieces of information about the enemy: which of the enemy's weaknesses is highest, which of the enemy's saving throws has the lowest modifier, one immunity the enemy has, or which of the enemy's resistances is highest. In the event of a tie, the GM should pick one at random.\n\n**Success** The GM chooses one piece of information from the above list to tell you about the enemy.\n\n**Critical Failure** The GM gives you false information (the GM makes up the information).",
  prerequisites: [Traits.traitPrerequisite(CombatReading)],
  actions: [{ name: 'Combat Reading', action: ActionTypes.SingleAction }],
})

export const CourageousAdvance = Traits.defineTrait('feat/courageous-advance', {
  name: 'Courageous Advance',
  description:
    '*Auditory, Bard, Concentrate, Spellshape*\n\n**Prerequisites** warrior muse\n\nWith a rousing call, you exhort an ally to advance. If your next action is to cast the _courageous anthem_ composition cantrip, one ally of your choice who gains a status bonus from the spell can immediately use their reaction to Stride.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(WarriorMuseType)],
  effects: [],
})

export const CourageousAdvanceAction = Abilities.defineAbility('feat/courageous-advance/action', {
  name: 'Courageous Advance',
  description:
    '*Auditory, Bard, Concentrate, Spellshape*\n\n**Prerequisites** warrior muse\n\nWith a rousing call, you exhort an ally to advance. If your next action is to cast the _courageous anthem_ composition cantrip, one ally of your choice who gains a status bonus from the spell can immediately use their reaction to Stride.',
  prerequisites: [Traits.traitPrerequisite(CourageousAdvance)],
  actions: [{ name: 'Courageous Advance', action: ActionTypes.SingleAction }],
})

export const InTune = Traits.defineTrait('feat/in-tune', {
  name: 'In Tune',
  description:
    '*Bard, Concentrate, Spellshape*\n\n**Prerequisites** maestro muse\n\nYou attune your great skill in performing to another, granting them a small measure of your skill as though anyone could do it. If your next action is casting a composition spell with an emanation area, its area spreads from a willing ally of your choice within 60 feet instead of you.\n\nIf you have Directed Audience, you can have that cone originate from the ally instead.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(MaestroMuseType)],
  effects: [],
})

export const InTuneAction = Abilities.defineAbility('feat/in-tune/action', {
  name: 'In Tune',
  description:
    '*Bard, Concentrate, Spellshape*\n\n**Prerequisites** maestro muse\n\nYou attune your great skill in performing to another, granting them a small measure of your skill as though anyone could do it. If your next action is casting a composition spell with an emanation area, its area spreads from a willing ally of your choice within 60 feet instead of you.\n\nIf you have Directed Audience, you can have that cone originate from the ally instead.',
  prerequisites: [Traits.traitPrerequisite(InTune)],
  actions: [{ name: 'In Tune', action: ActionTypes.SingleAction }],
})

export const MelodiousSpell = Traits.defineTrait('feat/melodious-spell', {
  name: 'Melodious Spell',
  description:
    '*Bard, Concentrate, Spellshape*\n\nYou subtly weave your spellcasting into a performance. If the next action you use is to Cast a Spell, the spell gains the subtle trait, hiding the shining runes, sparks of magic, and other manifestations that would usually give away your spellcasting. The trait hides only the spell’s spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.\n\nAs part of using Melodious Spell, you can choose to Create a Diversion, Demoralize, Perform, or Request. If you do so, the spell you cast must have the auditory, emotion, sonic, or visual trait to gain the subtle trait.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel4],
  effects: [],
})

export const MelodiousSpellAction = Abilities.defineAbility('feat/melodious-spell/action', {
  name: 'Melodious Spell',
  description:
    '*Bard, Concentrate, Spellshape*\n\nYou subtly weave your spellcasting into a performance. If the next action you use is to Cast a Spell, the spell gains the subtle trait, hiding the shining runes, sparks of magic, and other manifestations that would usually give away your spellcasting. The trait hides only the spell’s spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.\n\nAs part of using Melodious Spell, you can choose to Create a Diversion, Demoralize, Perform, or Request. If you do so, the spell you cast must have the auditory, emotion, sonic, or visual trait to gain the subtle trait.',
  prerequisites: [Traits.traitPrerequisite(MelodiousSpell)],
  actions: [{ name: 'Melodious Spell', action: ActionTypes.SingleAction }],
})

export const RallyingAnthem = Traits.defineTrait('feat/rallying-anthem', {
  name: 'Rallying Anthem',
  description: '*Bard*\n\nYou learn the _rallying anthem_ composition cantrip, which protects you and allies.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel4],
  effects: [Effects.gainAbility(Spells.RallyingAnthem)],
})

export const RitualResearcher = Traits.defineTrait('feat/ritual-researcher', {
  name: 'Ritual Researcher',
  description:
    '*Uncommon, Bard*\n\n**Prerequisites** enigma muse; Expert in Occultism\n\nCareful research into the art of rituals has made you better at performing them. You gain a +2 circumstance bonus to all primary and secondary checks you attempt as part of casting a ritual.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(EnigmaMuseType), Traits.traitPrerequisite(ExpertOccultism)],
  effects: [],
})

export const TripleTime = Traits.defineTrait('feat/triple-time', {
  name: 'Triple Time',
  description: '*Bard*\n\nYou learn the _triple time_ composition cantrip, which speeds up you and your allies for a round.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel4],
  effects: [Effects.gainAbility(Spells.TripleTime)],
})

export const VersatileSignature = Traits.defineTrait('feat/versatile-signature', {
  name: 'Versatile Signature',
  description:
    '*Bard*\n\n**Prerequisites** polymath muse\n\nWhile most bards are known for certain signature performances and spells, you’re always tweaking your available repertoire. When you make your daily preparations, you can change one of your signature spells to a different spell of that rank from your repertoire.',
  archetypes: [Feat, ClassFeat, BardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(PolymathMuseType)],
  effects: [],
})

export const AllBardFeatEntities = [
  BardicLore,
  HymnOfHealing,
  LingeringComposition,
  MartialPerformance,
  ReachSpell,
  ReachSpellAction,
  VersatilePerformance,
  WellVersed,
  CantripExpansion,
  DirectedAudience,
  EmotionalPush,
  EmotionalPushAction,
  EsotericPolymath,
  LoremastersEtude,
  MultifariousMuseEnigma,
  MultifariousMuseMaestro,
  MultifariousMusePolymath,
  MultifariousMuseWarrior,
  MultifariousMuse,
  SongOfStrength,
  UpliftingOverture,
  CombatReading,
  CombatReadingAction,
  CourageousAdvance,
  CourageousAdvanceAction,
  InTune,
  InTuneAction,
  MelodiousSpell,
  MelodiousSpellAction,
  RallyingAnthem,
  RitualResearcher,
  TripleTime,
  VersatileSignature,
]
