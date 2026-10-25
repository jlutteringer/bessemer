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
  FeatLevel6,
  FeatLevel8,
  FeatLevel10,
  WitchFeat,
  WizardFeat,
} from '@simulacrum/ruleset-pf2e/tag'
import { ExpertOccultism, MasterOccultism } from '@simulacrum/ruleset-pf2e/skill'
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
    '*Bard*\n\n**Prerequisites** enigma muse\n\nYour studies make you informed on every subject. You are trained in Bardic Lore, a special Lore skill that can be used only to [Recall Knowledge](content:skills/recall-knowledge), but on any topic. If you have legendary proficiency in [Occultism](characteristic:skill/occultism), you gain expert proficiency in Bardic Lore, but you can’t increase your proficiency rank in Bardic Lore by any other means.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(EnigmaMuseType)],
  effects: [],
})

export const HymnOfHealing = Traits.defineTrait('feat/hymn-of-healing', {
  name: 'Hymn of Healing',
  description:
    '*Bard*\n\nYou learn the [_hymn of healing_](ability:spell/hymn-of-healing) composition spell, which imbues your music with rich melodies that help your allies recover from harm.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel1],
  effects: [
    Effects.gainAbility(BardFocusSpells.HymnOfHealing),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const LingeringComposition = Traits.defineTrait('feat/lingering-composition', {
  name: 'Lingering Composition',
  description:
    '*Bard*\n\n**Prerequisites** maestro muse\n\nBy adding a flourish, you make your compositions last longer. You learn the [_lingering composition_](ability:spell/lingering-composition) focus spell.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(MaestroMuseType)],
  effects: [
    Effects.gainAbility(BardFocusSpells.LingeringComposition),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const MartialPerformance = Traits.defineTrait('feat/martial-performance', {
  name: 'Martial Performance',
  description:
    '*Bard*\n\n**Prerequisites** warrior muse\n\nYour muse has taught you how to handle a wider variety of weapons than most bards, empowering you to effortlessly blend your performance into combat tools. When you have a [_courageous anthem_](ability:spell/courageous-anthem) composition cantrip active, and you damage an enemy with a [Strike](content:playing-the-game/strike), the spell’s duration is extended by 1 round. You can extend an individual casting only once in this way.\n\nIf you gain the [_rallying anthem_](ability:spell/rallying-anthem) or [_song of strength_](ability:spell/song-of-strength) composition cantrips, you can apply this benefit to those cantrips as well.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(WarriorMuseType)],
  effects: [],
})

export const ReachSpell = Traits.defineTrait('feat/reach-spell', {
  name: 'Reach Spell',
  description:
    '*Bard, Cleric, Concentrate, Druid, Oracle, Sorcerer, Spellshape, Witch, Wizard*\n\nYou can extend your spells’ range. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell) that has a range, increase that spell’s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.',
  tags: [Feat, ClassFeat, BardFeat, ClericFeat, DruidFeat, WitchFeat, WizardFeat, FeatLevel1],
  effects: [],
})

export const ReachSpellAction = Abilities.defineAbility('feat/reach-spell/action', {
  name: 'Reach Spell',
  description: '*Bard, Cleric, Concentrate, Druid, Oracle, Sorcerer, Spellshape, Witch, Wizard*',
  prerequisites: [Traits.traitPrerequisite(ReachSpell)],
  actions: [
    {
      name: 'Reach Spell',
      description:
        'You can extend your spells’ range. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell) that has a range, increase that spell’s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const VersatilePerformance = Traits.defineTrait('feat/versatile-performance', {
  name: 'Versatile Performance',
  description:
    '*Bard*\n\n**Prerequisites** polymath muse\n\nYou can rely on the grandeur of your performances rather than ordinary social skills. You can use [Performance](characteristic:skill/performance) instead of [Diplomacy](characteristic:skill/diplomacy) to [Make an Impression](content:skills/make-an-impression) and instead of [Intimidation](characteristic:skill/intimidation) to [Demoralize](content:skills/demoralize). You can also use an acting Performance instead of [Deception](characteristic:skill/deception) to [Impersonate](content:skills/impersonate). In addition, you can use your proficiency rank in Performance to meet the prerequisites of skill feats that require a particular proficiency rank in Deception, Diplomacy, or Intimidation.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(PolymathMuseType)],
  effects: [],
})

export const WellVersed = Traits.defineTrait('feat/well-versed', {
  name: 'Well-Versed',
  description:
    '*Bard*\n\nYou’re resilient to performative influences that aren’t your own. You gain a +1 circumstance bonus to saving throws against effects with the [auditory](content:traits/auditory), [illusion](content:traits/illusion), [linguistic](content:traits/linguistic), [sonic](content:traits/sonic), or [visual](content:traits/visual) traits.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel1],
  effects: [],
})

export const CantripExpansion = Traits.defineTrait('feat/cantrip-expansion', {
  name: 'Cantrip Expansion',
  description:
    '*Bard, Cleric, Magus, Oracle, Psychic, Sorcerer, Witch, Wizard*\n\nStudy broadens your range of simple spells.\n\n**Prepared Caster (Cleric, Wizard, etc.)**: You can prepare two additional cantrips each day.\n\n**Spontaneous Caster (Bard, Sorcerer, etc.)**: Add two additional cantrips from your spell list to your repertoire.',
  tags: [Feat, ClassFeat, BardFeat, ClericFeat, WitchFeat, WizardFeat, FeatLevel2],
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
    '*Bard*\n\nYou can shape the area of your [composition](content:traits/composition) spells. Whenever you cast a composition spell whose area is an [emanation](content:playing-the-game/emanation), you can change the spell’s area to a cone 10 feet larger, to a maximum of twice the original area. For example, you could modify a composition spell that affects a 30-foot emanation to affect a 40-foot cone, but a 5-foot emanation could only become a 10-foot cone.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel2],
  effects: [],
})

export const EmotionalPush = Traits.defineTrait('feat/emotional-push', {
  name: 'Emotional Push',
  description:
    '*Bard, Concentrate*\n\n**Trigger** An enemy you’re aware of fails its save against an emotion spell\n\nYou prepare to take advantage of your enemy’s sudden change in emotions. The target is [off-guard](content:conditions/off-guard) against your next attack before the end of your next turn.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel2],
  effects: [],
})

export const EmotionalPushAction = Abilities.defineAbility('feat/emotional-push/action', {
  name: 'Emotional Push',
  description: '*Bard, Concentrate*',
  prerequisites: [Traits.traitPrerequisite(EmotionalPush)],
  actions: [
    {
      name: 'Emotional Push',
      description:
        '**Trigger** An enemy you’re aware of fails its save against an emotion spell\n\nYou prepare to take advantage of your enemy’s sudden change in emotions. The target is [off-guard](content:conditions/off-guard) against your next attack before the end of your next turn.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const EsotericPolymath = Traits.defineTrait('feat/esoteric-polymath', {
  name: 'Esoteric Polymath',
  description:
    '*Bard*\n\n**Prerequisites** polymath muse\n\nYou keep a book of occult spells, similar to a [wizard](trait:wizard)’s spellbook, and can use its spells to supplement your spell repertoire. Add all the spells in your repertoire to this book for free. You can use the [Occultism](characteristic:skill/occultism) skill to [Learn Spells](content:skills/learn-a-spell) and add them to your spellbook by paying the appropriate cost. During your daily preparations, choose any one spell from your book of occult spells. If that spell is already in your spell repertoire, you can treat it as an additional signature spell that day. If it isn’t in your repertoire, treat it as though it were until your next daily preparations.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(PolymathMuseType)],
  effects: [],
})

export const LoremastersEtude = Traits.defineTrait('feat/loremasters-etude', {
  name: "Loremaster's Etude",
  description:
    "*Bard, Fortune*\n\n**Prerequisites** enigma muse\n\nYou magically unlock memories, making them easier to recall. You learn the [_loremaster's etude_](ability:spell/loremasters-etude) composition spell.",
  tags: [Feat, ClassFeat, BardFeat, FeatLevel2],
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
  tags: [Feat, ClassFeat, BardFeat, FeatLevel2],
  repeatable: true,
  effects: [Effects.gainCharacterOption(SelectMultifariousMuse)],
})

export const SongOfStrength = Traits.defineTrait('feat/song-of-strength', {
  name: 'Song of Strength',
  description:
    '*Bard*\n\n**Prerequisites** warrior muse\n\nYour performances inspire strength in your allies to aid them at physical tasks. You learn the [_song of strength_](ability:spell/song-of-strength) composition cantrip.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(WarriorMuseType)],
  effects: [Effects.gainAbility(Spells.SongOfStrength)],
})

export const UpliftingOverture = Traits.defineTrait('feat/uplifting-overture', {
  name: 'Uplifting Overture',
  description:
    '*Bard*\n\n**Prerequisites** maestro muse\n\nYou learn the [_uplifting overture_](ability:spell/uplifting-overture) composition cantrip, which aids your allies’ skills with the inspiring nature of your performance.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(MaestroMuseType)],
  effects: [Effects.gainAbility(Spells.UpliftingOverture)],
})

export const CombatReading = Traits.defineTrait('feat/combat-reading', {
  name: 'Combat Reading',
  description:
    "*Bard, Secret*\n\nYou use a performer’s cold reading techniques, aura reading, and other tricks to discover your foe’s strengths and weaknesses. The GM rolls a secret [Occultism](characteristic:skill/occultism) check for you against the [Deception](characteristic:skill/deception) or [Stealth](characteristic:skill/stealth) DC (whichever is higher) of an enemy of your choice who is not [concealed](content:conditions/concealed) from you, [hidden](content:conditions/hidden) from you, or [undetected](content:conditions/undetected) by you, and who is engaged in combat. The GM might apply a penalty for the distance between you and the enemy. The enemy is then temporarily immune to your Combat Reading for 1 day.\n\n**Critical Success** The GM chooses and tells you two of the following pieces of information about the enemy: which of the enemy's weaknesses is highest, which of the enemy's saving throws has the lowest modifier, one immunity the enemy has, or which of the enemy's resistances is highest. In the event of a tie, the GM should pick one at random.\n\n**Success** The GM chooses one piece of information from the above list to tell you about the enemy.\n\n**Critical Failure** The GM gives you false information (the GM makes up the information).",
  tags: [Feat, ClassFeat, BardFeat, FeatLevel4],
  effects: [],
})

export const CombatReadingAction = Abilities.defineAbility('feat/combat-reading/action', {
  name: 'Combat Reading',
  description: '*Bard, Secret*',
  prerequisites: [Traits.traitPrerequisite(CombatReading)],
  actions: [
    {
      name: 'Combat Reading',
      description:
        "You use a performer’s cold reading techniques, aura reading, and other tricks to discover your foe’s strengths and weaknesses. The GM rolls a secret [Occultism](characteristic:skill/occultism) check for you against the [Deception](characteristic:skill/deception) or [Stealth](characteristic:skill/stealth) DC (whichever is higher) of an enemy of your choice who is not [concealed](content:conditions/concealed) from you, [hidden](content:conditions/hidden) from you, or [undetected](content:conditions/undetected) by you, and who is engaged in combat. The GM might apply a penalty for the distance between you and the enemy. The enemy is then temporarily immune to your Combat Reading for 1 day.\n\n**Critical Success** The GM chooses and tells you two of the following pieces of information about the enemy: which of the enemy's weaknesses is highest, which of the enemy's saving throws has the lowest modifier, one immunity the enemy has, or which of the enemy's resistances is highest. In the event of a tie, the GM should pick one at random.\n\n**Success** The GM chooses one piece of information from the above list to tell you about the enemy.\n\n**Critical Failure** The GM gives you false information (the GM makes up the information).",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const CourageousAdvance = Traits.defineTrait('feat/courageous-advance', {
  name: 'Courageous Advance',
  description:
    '*Auditory, Bard, Concentrate, Spellshape*\n\n**Prerequisites** warrior muse\n\nWith a rousing call, you exhort an ally to advance. If your next action is to cast the [_courageous anthem_](ability:spell/courageous-anthem) composition cantrip, one ally of your choice who gains a status bonus from the spell can immediately use their reaction to [Stride](content:playing-the-game/stride).',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(WarriorMuseType)],
  effects: [],
})

export const CourageousAdvanceAction = Abilities.defineAbility('feat/courageous-advance/action', {
  name: 'Courageous Advance',
  description: '*Auditory, Bard, Concentrate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(CourageousAdvance)],
  actions: [
    {
      name: 'Courageous Advance',
      description:
        '**Prerequisites** warrior muse\n\nWith a rousing call, you exhort an ally to advance. If your next action is to cast the [_courageous anthem_](ability:spell/courageous-anthem) composition cantrip, one ally of your choice who gains a status bonus from the spell can immediately use their reaction to [Stride](content:playing-the-game/stride).',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const InTune = Traits.defineTrait('feat/in-tune', {
  name: 'In Tune',
  description:
    '*Bard, Concentrate, Spellshape*\n\n**Prerequisites** maestro muse\n\nYou attune your great skill in performing to another, granting them a small measure of your skill as though anyone could do it. If your next action is casting a composition spell with an [emanation](content:playing-the-game/emanation) area, its area spreads from a willing ally of your choice within 60 feet instead of you.\n\nIf you have [Directed Audience](trait:feat/directed-audience), you can have that cone originate from the ally instead.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(MaestroMuseType)],
  effects: [],
})

export const InTuneAction = Abilities.defineAbility('feat/in-tune/action', {
  name: 'In Tune',
  description: '*Bard, Concentrate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(InTune)],
  actions: [
    {
      name: 'In Tune',
      description:
        '**Prerequisites** maestro muse\n\nYou attune your great skill in performing to another, granting them a small measure of your skill as though anyone could do it. If your next action is casting a composition spell with an [emanation](content:playing-the-game/emanation) area, its area spreads from a willing ally of your choice within 60 feet instead of you.\n\nIf you have [Directed Audience](trait:feat/directed-audience), you can have that cone originate from the ally instead.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const MelodiousSpell = Traits.defineTrait('feat/melodious-spell', {
  name: 'Melodious Spell',
  description:
    '*Bard, Concentrate, Spellshape*\n\nYou subtly weave your spellcasting into a performance. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell), the spell gains the [subtle](content:traits/subtle) trait, hiding the shining runes, sparks of magic, and other manifestations that would usually give away your spellcasting. The trait hides only the spell’s spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.\n\nAs part of using Melodious Spell, you can choose to [Create a Diversion](content:skills/create-a-diversion), [Demoralize](content:skills/demoralize), [Perform](content:skills/perform), or [Request](content:skills/request). If you do so, the spell you cast must have the [auditory](content:traits/auditory), [emotion](content:traits/emotion), [sonic](content:traits/sonic), or [visual](content:traits/visual) trait to gain the subtle trait.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel4],
  effects: [],
})

export const MelodiousSpellAction = Abilities.defineAbility('feat/melodious-spell/action', {
  name: 'Melodious Spell',
  description: '*Bard, Concentrate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(MelodiousSpell)],
  actions: [
    {
      name: 'Melodious Spell',
      description:
        'You subtly weave your spellcasting into a performance. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell), the spell gains the [subtle](content:traits/subtle) trait, hiding the shining runes, sparks of magic, and other manifestations that would usually give away your spellcasting. The trait hides only the spell’s spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.\n\nAs part of using Melodious Spell, you can choose to [Create a Diversion](content:skills/create-a-diversion), [Demoralize](content:skills/demoralize), [Perform](content:skills/perform), or [Request](content:skills/request). If you do so, the spell you cast must have the [auditory](content:traits/auditory), [emotion](content:traits/emotion), [sonic](content:traits/sonic), or [visual](content:traits/visual) trait to gain the subtle trait.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const RallyingAnthem = Traits.defineTrait('feat/rallying-anthem', {
  name: 'Rallying Anthem',
  description: '*Bard*\n\nYou learn the [_rallying anthem_](ability:spell/rallying-anthem) composition cantrip, which protects you and allies.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel4],
  effects: [Effects.gainAbility(Spells.RallyingAnthem)],
})

export const RitualResearcher = Traits.defineTrait('feat/ritual-researcher', {
  name: 'Ritual Researcher',
  description:
    '*Uncommon, Bard*\n\n**Prerequisites** enigma muse; Expert in [Occultism](characteristic:skill/occultism)\n\nCareful research into the art of rituals has made you better at performing them. You gain a +2 circumstance bonus to all primary and secondary checks you attempt as part of casting a ritual.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(EnigmaMuseType), Traits.traitPrerequisite(ExpertOccultism)],
  effects: [],
})

export const TripleTime = Traits.defineTrait('feat/triple-time', {
  name: 'Triple Time',
  description:
    '*Bard*\n\nYou learn the [_triple time_](ability:spell/triple-time) composition cantrip, which speeds up you and your allies for a round.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel4],
  effects: [Effects.gainAbility(Spells.TripleTime)],
})

export const VersatileSignature = Traits.defineTrait('feat/versatile-signature', {
  name: 'Versatile Signature',
  description:
    '*Bard*\n\n**Prerequisites** polymath muse\n\nWhile most bards are known for certain signature performances and spells, you’re always tweaking your available repertoire. When you make your daily preparations, you can change one of your signature spells to a different spell of that rank from your repertoire.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(PolymathMuseType)],
  effects: [],
})

export const AssuredKnowledge = Traits.defineTrait('feat/assured-knowledge', {
  name: 'Assured Knowledge',
  description:
    '*Bard, Fortune*\n\n**Prerequisites** enigma muse\n\nYou can procure information with confidence. Whenever you [Recall Knowledge](content:skills/recall-knowledge) using any skill (including [Bardic Lore](trait:feat/bardic-lore)), you can forgo rolling your check to instead receive a result of 10 + your proficiency bonus (don’t apply any other bonuses, penalties, or modifiers).\n\nAs long as you are an expert in a skill, you meet the prerequisites for the [Automatic Knowledge](trait:feat/automatic-knowledge) skill feat for that skill, even if you don’t have the [Assurance](trait:feat/assurance) feat for that skill.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(EnigmaMuseType)],
  effects: [],
})

export const DefensiveCoordination = Traits.defineTrait('feat/defensive-coordination', {
  name: 'Defensive Coordination',
  description:
    '*Auditory, Bard, Concentrate, Spellshape*\n\n**Prerequisites** warrior muse; [Rallying Anthem](trait:feat/rallying-anthem)\n\nLike the storied heroes who persist in the face of overwhelming odds, you and your allies will hold the line. If your next action is to cast the [_rallying anthem_](ability:spell/rallying-anthem) composition cantrip, you can [Raise a Shield](content:playing-the-game/raise-a-shield), and one ally of your choice who gains a status bonus from the spell can immediately use their reaction to Raise a Shield.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(WarriorMuseType), Traits.traitPrerequisite(RallyingAnthem)],
  effects: [],
})

export const DefensiveCoordinationAction = Abilities.defineAbility('feat/defensive-coordination/action', {
  name: 'Defensive Coordination',
  description: '*Auditory, Bard, Concentrate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(DefensiveCoordination)],
  actions: [
    {
      name: 'Defensive Coordination',
      description:
        '**Prerequisites** warrior muse; [Rallying Anthem](trait:feat/rallying-anthem)\n\nLike the storied heroes who persist in the face of overwhelming odds, you and your allies will hold the line. If your next action is to cast the [_rallying anthem_](ability:spell/rallying-anthem) composition cantrip, you can [Raise a Shield](content:playing-the-game/raise-a-shield), and one ally of your choice who gains a status bonus from the spell can immediately use their reaction to Raise a Shield.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DirgeOfDoom = Traits.defineTrait('feat/dirge-of-doom', {
  name: 'Dirge of Doom',
  description:
    '*Bard*\n\nYou learn the [_dirge of doom_](ability:spell/dirge-of-doom) composition cantrip, which frightens your enemies and keeps them from fully recovering from their fear.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel6],
  effects: [Effects.gainAbility(Spells.DirgeOfDoom)],
})

export const EducateAllies = Traits.defineTrait('feat/educate-allies', {
  name: 'Educate Allies',
  description:
    '*Bard, Concentrate*\n\n**Prerequisites** [Well-Versed](trait:feat/well-versed)\n\n**Trigger** An ally benefiting from one of your composition spells is subject to an effect with the auditory, illusion, linguistic, sonic, or visual trait\n\nYou tweak the properties of your [composition](content:traits/composition) spell to convey a bit of your defensive knowledge. All allies affected by your composition spell gain your +1 circumstance bonus from [Well-Versed](trait:feat/well-versed) until the start of your next turn. Teaching your allies also bolsters your own skills; your personal circumstance bonus from Well-Versed also increases to +2 until the start of your next turn.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(WellVersed)],
  effects: [],
})

export const EducateAlliesAction = Abilities.defineAbility('feat/educate-allies/action', {
  name: 'Educate Allies',
  description: '*Bard, Concentrate*',
  prerequisites: [Traits.traitPrerequisite(EducateAllies)],
  actions: [
    {
      name: 'Educate Allies',
      description:
        '**Prerequisites** [Well-Versed](trait:feat/well-versed)\n\n**Trigger** An ally benefiting from one of your composition spells is subject to an effect with the auditory, illusion, linguistic, sonic, or visual trait\n\nYou tweak the properties of your [composition](content:traits/composition) spell to convey a bit of your defensive knowledge. All allies affected by your composition spell gain your +1 circumstance bonus from [Well-Versed](trait:feat/well-versed) until the start of your next turn. Teaching your allies also bolsters your own skills; your personal circumstance bonus from Well-Versed also increases to +2 until the start of your next turn.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const Harmonize = Traits.defineTrait('feat/harmonize', {
  name: 'Harmonize',
  description:
    '*Bard, Concentrate, Manipulate, Spellshape*\n\n**Prerequisites** maestro muse\n\nYou can perform multiple compositions simultaneously, typically by performing in multiple ways at the same time, using special vocal techniques to double your voice, or creating occult magic that replicates your song or speech. If your next action is to cast a [composition](content:traits/composition), it becomes a harmonized composition. Unlike a normal composition, a harmonized composition doesn’t end if you cast another composition, and you can cast another composition on the same turn as a harmonized one. Casting another harmonized composition ends any harmonized composition you already have in effect.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(MaestroMuseType)],
  effects: [],
})

export const HarmonizeAction = Abilities.defineAbility('feat/harmonize/action', {
  name: 'Harmonize',
  description: '*Bard, Concentrate, Manipulate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(Harmonize)],
  actions: [
    {
      name: 'Harmonize',
      description:
        '**Prerequisites** maestro muse\n\nYou can perform multiple compositions simultaneously, typically by performing in multiple ways at the same time, using special vocal techniques to double your voice, or creating occult magic that replicates your song or speech. If your next action is to cast a [composition](content:traits/composition), it becomes a harmonized composition. Unlike a normal composition, a harmonized composition doesn’t end if you cast another composition, and you can cast another composition on the same turn as a harmonized one. Casting another harmonized composition ends any harmonized composition you already have in effect.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const SongOfMarching = Traits.defineTrait('feat/song-of-marching', {
  name: 'Song of Marching',
  description:
    '*Bard*\n\nYou learn the [_song of marching_](ability:spell/song-of-marching) composition cantrip, which enables you and your allies to cross vast distances without strain.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel6],
  effects: [Effects.gainAbility(Spells.SongOfMarching)],
})

export const SteadySpellcasting = Traits.defineTrait('feat/steady-spellcasting', {
  name: 'Steady Spellcasting',
  description:
    '*Bard, Cleric, Druid, Necromancer, Oracle, Psychic, Sorcerer, Witch, Wizard*\n\nYou don’t lose spells easily. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn’t disrupted.',
  tags: [Feat, ClassFeat, BardFeat, ClericFeat, DruidFeat, WitchFeat, WizardFeat, FeatLevel6],
  effects: [],
})

export const Accompany = Traits.defineTrait('feat/accompany', {
  name: 'Accompany',
  description:
    '*Bard, Concentrate, Manipulate*\n\n**Trigger** An ally within 30 feet Casts a Spell\n\nYou use your performance to supplement an ally’s spellcasting, providing magical energy for their spell in their stead. Attempt a [Performance](characteristic:skill/performance) check, using a very high DC for the ally’s level (GM Core 53), and either spend a Focus Point (if the triggering spell is a focus spell) or expend a spell slot at least 1 rank higher than the triggering spell. If you succeed at your Performance check, your ally’s spell doesn’t cost the Focus Point or spell slot that ally would normally need to spend.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel8],
  effects: [],
})

export const AccompanyAction = Abilities.defineAbility('feat/accompany/action', {
  name: 'Accompany',
  description: '*Bard, Concentrate, Manipulate*',
  prerequisites: [Traits.traitPrerequisite(Accompany)],
  actions: [
    {
      name: 'Accompany',
      description:
        '**Trigger** An ally within 30 feet Casts a Spell\n\nYou use your performance to supplement an ally’s spellcasting, providing magical energy for their spell in their stead. Attempt a [Performance](characteristic:skill/performance) check, using a very high DC for the ally’s level (GM Core 53), and either spend a Focus Point (if the triggering spell is a focus spell) or expend a spell slot at least 1 rank higher than the triggering spell. If you succeed at your Performance check, your ally’s spell doesn’t cost the Focus Point or spell slot that ally would normally need to spend.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const CallAndResponse = Traits.defineTrait('feat/call-and-response', {
  name: 'Call and Response',
  description:
    '*Auditory, Bard, Concentrate, Spellshape*\n\nYour composition takes the form of a call-and-response chant that lets your allies continue the effect without you. If your next action is to cast a composition cantrip with a duration of 1 round, it becomes a call. While the spell is active, one ally of your choice affected by the spell can respond to your call as a single action that has the auditory and concentrate traits to extend the spell’s duration by 1 round. Only one ally can respond to a given call, and responding to the ally’s response has no additional effect',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel8],
  effects: [],
})

export const CallAndResponseAction = Abilities.defineAbility('feat/call-and-response/action', {
  name: 'Call and Response',
  description: '*Auditory, Bard, Concentrate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(CallAndResponse)],
  actions: [
    {
      name: 'Call and Response',
      description:
        'Your composition takes the form of a call-and-response chant that lets your allies continue the effect without you. If your next action is to cast a composition cantrip with a duration of 1 round, it becomes a call. While the spell is active, one ally of your choice affected by the spell can respond to your call as a single action that has the auditory and concentrate traits to extend the spell’s duration by 1 round. Only one ally can respond to a given call, and responding to the ally’s response has no additional effect',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const EclecticSkill = Traits.defineTrait('feat/eclectic-skill', {
  name: 'Eclectic Skill',
  description:
    '*Bard*\n\n**Prerequisites** polymath muse; Master in [Occultism](characteristic:skill/occultism)\n\nYour broad experiences translate to a range of skills. Your proficiency bonus to untrained skill checks is equal to your level. You can attempt any skill check that normally requires you to be trained, even if you are untrained. If you have legendary proficiency in Occultism, you can attempt any skill check that normally requires you to have expert proficiency, even if untrained or trained.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(PolymathMuseType), Traits.traitPrerequisite(MasterOccultism)],
  effects: [],
})

export const FortissimoComposition = Traits.defineTrait('feat/fortissimo-composition', {
  name: 'Fortissimo Composition',
  description:
    '*Bard*\n\n**Prerequisites** maestro muse\n\nYour anthems grow louder and more potent, bolstered by your muse’s power. You learn the _fortissimo composition_ spellshape focus spell.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(MaestroMuseType)],
  effects: [
    Effects.gainAbility(BardFocusSpells.FortissimoComposition),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const KnowItAll = Traits.defineTrait('feat/know-it-all', {
  name: 'Know-It-All',
  description:
    '*Bard, Thaumaturge*\n\n**Prerequisites** [[Bard](trait:bard)] enigma muse\n\nWhen you succeed at a check to [Recall Knowledge](content:skills/recall-knowledge), you gain additional information or context. When you critically succeed at a check to Recall Knowledge, you get additional information or context or can ask an additional follow-up question (the GM chooses which).',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(EnigmaMuseType)],
  effects: [],
})

export const ReflexiveCourage = Traits.defineTrait('feat/reflexive-courage', {
  name: 'Reflexive Courage',
  description:
    '*Auditory, Bard, Concentrate*\n\n**Prerequisites** warrior muse\n\n**Trigger** A creature within your reach uses an auditory effect, manipulate action, or move action; makes a ranged attack; or leaves a square during its move action\n\n**Requirements** You are affected by courageous anthem\n\nYou bellow a ferocious call to arms, inspiring yourself to lash out at a foe. Make a melee [Strike](content:playing-the-game/strike) against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the action is disrupted.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(WarriorMuseType)],
  effects: [],
})

export const ReflexiveCourageAction = Abilities.defineAbility('feat/reflexive-courage/action', {
  name: 'Reflexive Courage',
  description: '*Auditory, Bard, Concentrate*',
  prerequisites: [Traits.traitPrerequisite(ReflexiveCourage)],
  actions: [
    {
      name: 'Reflexive Courage',
      description:
        '**Prerequisites** warrior muse\n\n**Trigger** A creature within your reach uses an auditory effect, manipulate action, or move action; makes a ranged attack; or leaves a square during its move action\n\n**Requirements** You are affected by courageous anthem\n\nYou bellow a ferocious call to arms, inspiring yourself to lash out at a foe. Make a melee [Strike](content:playing-the-game/strike) against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the action is disrupted.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const Soulsight = Traits.defineTrait('feat/soulsight', {
  name: 'Soulsight',
  description:
    '*Bard, Sorcerer*\n\nYour muse has opened your senses to the world beyond. You gain spiritsense as an imprecise sense with a range of 60 feet. Spiritsense enables you to sense the spirits of creatures, including living creatures, most non-mindless undead, and haunts within the listed range. As with your hearing and other imprecise senses, you still need to [Seek](content:playing-the-game/seek) to locate an undetected creature.\n\nAs spiritsense detects spiritual essence, not physical bodies, it can detect spirits projected by spells such as project image or possessing otherwise soulless objects. It can’t detect soulless bodies, constructs, or objects, and like most senses, it doesn’t penetrate through solid objects.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel8],
  effects: [],
})

export const AnnotateComposition = Traits.defineTrait('feat/annotate-composition', {
  name: 'Annotate Composition',
  description:
    '*Bard, Exploration, Linguistic*\n\nBy putting composition to paper, you can create a source of stirring words or song that others can read and understand. You spend 10 minutes and 1 Focus Point to transpose a composition spell on a special scroll that you or another creature can later activate. This composition spell must take a single action to cast. If the chosen composition spell requires a [Performance](characteristic:skill/performance) check as part of the casting, the GM rolls this check as a secret check when you annotate your score. If you have fortissimo composition or lingering composition, you can also use one of those spells to modify the annotated composition, provided the annotated composition can benefit from the modification. The GM rolls the secret Performance check. If you do, you spend an additional Focus Point, even if the secret check fails.\n\nAny creature that can read the language you used when annotating your composition can Activate the Item by spending a single action, which has the concentrate trait. This produces the effects of the composition as though the activating creature had Cast the Spell.\n\nA composition you create this way loses its power the next time you make your daily preparations. While the composition is in your possession, you can render it inert using a single action that has the concentrate trait. You can’t regain the Focus Points you spent to create the annotated composition until it is activated or loses its magic.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel10],
  effects: [],
})

export const CourageousAssault = Traits.defineTrait('feat/courageous-assault', {
  name: 'Courageous Assault',
  description:
    '*Auditory, Bard, Concentrate, Spellshape*\n\n**Prerequisites** warrior muse\n\nWith a mighty shout, you can stir an ally to attack. If your next action is to cast the [_courageous anthem_](ability:spell/courageous-anthem) composition cantrip, one ally of your choice who gains a status bonus from the spell can immediately use their reaction to make a melee [Strike](content:playing-the-game/strike).',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(WarriorMuseType)],
  effects: [],
})

export const CourageousAssaultAction = Abilities.defineAbility('feat/courageous-assault/action', {
  name: 'Courageous Assault',
  description: '*Auditory, Bard, Concentrate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(CourageousAssault)],
  actions: [
    {
      name: 'Courageous Assault',
      description:
        '**Prerequisites** warrior muse\n\nWith a mighty shout, you can stir an ally to attack. If your next action is to cast the [_courageous anthem_](ability:spell/courageous-anthem) composition cantrip, one ally of your choice who gains a status bonus from the spell can immediately use their reaction to make a melee [Strike](content:playing-the-game/strike).',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const HouseOfImaginaryWalls = Traits.defineTrait('feat/house-of-imaginary-walls', {
  name: 'House of Imaginary Walls',
  description:
    '*Bard*\n\nYou erect an imaginary barrier others believe to be real. You learn the [_house of imaginary walls_](ability:spell/house-of-imaginary-walls) [composition](content:traits/composition) cantrip.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel10],
  effects: [Effects.gainAbility(Spells.HouseOfImaginaryWalls)],
})

export const OdeToOuroboros = Traits.defineTrait('feat/ode-to-ouroboros', {
  name: 'Ode to Ouroboros',
  description:
    '*Bard*\n\nYou learn the _ode to ouroboros_ [composition](content:traits/composition) spell, which enables you to temporarily spare your allies from death.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel10],
  effects: [
    Effects.gainAbility(BardFocusSpells.OdeToOuroboros),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const QuickenedCasting = Traits.defineTrait('feat/quickened-casting', {
  name: 'Quickened Casting',
  description:
    '*Bard, Concentrate, Necromancer, Oracle, Sorcerer, Spellshape, Witch, Wizard*\n\n**Frequency** once per day\n\nIf your next action is to cast a [cantrip](content:traits/cantrip) or a spell that is at least 2 ranks lower than the highest-rank spell slot you have, reduce the number of actions to cast it by 1 (minimum 1 action).\n\n**Special** This feat can only be used on a cantrip or spell that is at least 2 ranks lower than the highest-rank spell slot from the class or archetype matching the one you gained this feat from.',
  tags: [Feat, ClassFeat, BardFeat, WitchFeat, WizardFeat, FeatLevel10],
  effects: [],
})

export const QuickenedCastingAction = Abilities.defineAbility('feat/quickened-casting/action', {
  name: 'Quickened Casting',
  description: '*Bard, Concentrate, Necromancer, Oracle, Sorcerer, Spellshape, Witch, Wizard*',
  prerequisites: [Traits.traitPrerequisite(QuickenedCasting)],
  actions: [
    {
      name: 'Quickened Casting',
      description:
        '**Frequency** once per day\n\nIf your next action is to cast a [cantrip](content:traits/cantrip) or a spell that is at least 2 ranks lower than the highest-rank spell slot you have, reduce the number of actions to cast it by 1 (minimum 1 action).\n\n**Special** This feat can only be used on a cantrip or spell that is at least 2 ranks lower than the highest-rank spell slot from the class or archetype matching the one you gained this feat from.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const SymphonyOfTheUnfetteredHeart = Traits.defineTrait('feat/symphony-of-the-unfettered-heart', {
  name: 'Symphony of the Unfettered Heart',
  description:
    '*Bard*\n\nYou learn the _symphony of the unfettered heart_ [composition](content:traits/composition) spell, which enables you to protect an ally against incapacitating conditions.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel10],
  effects: [
    Effects.gainAbility(BardFocusSpells.SymphonyOfTheUnfetteredHeart),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const UnusualComposition = Traits.defineTrait('feat/unusual-composition', {
  name: 'Unusual Composition',
  description:
    '*Bard, Concentrate, Manipulate, Spellshape*\n\n**Prerequisites** polymath muse\n\nYou can translate the emotion and power of a composition to other mediums. If your next action is to cast a [composition](content:traits/composition) spell that is [auditory](content:traits/auditory) or [visual](content:traits/visual), you can have it affect creatures who can witness it with any sense, not just those the traits indicate, even including [special senses](content:playing-the-game/special-senses) like [tremorsense](content:playing-the-game/tremorsense). You can choose to exclude any senses you choose.',
  tags: [Feat, ClassFeat, BardFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(PolymathMuseType)],
  effects: [],
})

export const UnusualCompositionAction = Abilities.defineAbility('feat/unusual-composition/action', {
  name: 'Unusual Composition',
  description: '*Bard, Concentrate, Manipulate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(UnusualComposition)],
  actions: [
    {
      name: 'Unusual Composition',
      description:
        '**Prerequisites** polymath muse\n\nYou can translate the emotion and power of a composition to other mediums. If your next action is to cast a [composition](content:traits/composition) spell that is [auditory](content:traits/auditory) or [visual](content:traits/visual), you can have it affect creatures who can witness it with any sense, not just those the traits indicate, even including [special senses](content:playing-the-game/special-senses) like [tremorsense](content:playing-the-game/tremorsense). You can choose to exclude any senses you choose.',
      action: ActionTypes.SingleAction,
    },
  ],
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
  AssuredKnowledge,
  DefensiveCoordination,
  DefensiveCoordinationAction,
  DirgeOfDoom,
  EducateAllies,
  EducateAlliesAction,
  Harmonize,
  HarmonizeAction,
  SongOfMarching,
  SteadySpellcasting,
  Accompany,
  AccompanyAction,
  CallAndResponse,
  CallAndResponseAction,
  EclecticSkill,
  FortissimoComposition,
  KnowItAll,
  ReflexiveCourage,
  ReflexiveCourageAction,
  Soulsight,
  AnnotateComposition,
  CourageousAssault,
  CourageousAssaultAction,
  HouseOfImaginaryWalls,
  OdeToOuroboros,
  QuickenedCasting,
  QuickenedCastingAction,
  SymphonyOfTheUnfetteredHeart,
  UnusualComposition,
  UnusualCompositionAction,
]
