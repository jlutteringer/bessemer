import { Archetypes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Expressions } from '@bessemer/cornerstone/expression'
import * as Spells from '@simulacrum/ruleset-pf2e/spell'
import { Arcane, Cantrip, ClassFeature, Divine, Occult, Primal, Spell, SpellRank1, SpellRank2, SpellRank3 } from '@simulacrum/ruleset-pf2e/archetype'
import { CantripLoadout, SpellRank1Loadout } from '@simulacrum/ruleset-pf2e/loadout'
import { TrainedArcana, TrainedNature, TrainedOccultism, TrainedReligion } from '@simulacrum/ruleset-pf2e/skill'

export const PatronTheme = Archetypes.defineTraitArchetype('witch/patron-theme', { name: 'Patron Theme' })

export const SelectWitchArcaneCantrip = CharacterOptions.selectAbilityOption('witch/select-arcane-cantrip', {
  name: 'Familiar Cantrip (Arcane)',
  filter: { archetypes: [Spell, Cantrip, Arcane] },
  loadout: CantripLoadout,
})

export const SelectWitchArcaneSpell1 = CharacterOptions.selectAbilityOption('witch/select-arcane-spell-1', {
  name: 'Familiar Spell (Arcane, Rank 1)',
  filter: { archetypes: [Spell, SpellRank1, Arcane] },
  loadout: SpellRank1Loadout,
})

export const SelectWitchArcaneSpell2 = CharacterOptions.selectAbilityOption('witch/select-arcane-spell-2', {
  name: 'Familiar Spell (Arcane, Rank 1–2)',
  filter: { archetypes: [Spell, [SpellRank1, SpellRank2], Arcane] },
})

export const SelectWitchArcaneSpell3 = CharacterOptions.selectAbilityOption('witch/select-arcane-spell-3', {
  name: 'Familiar Spell (Arcane, Rank 1–3)',
  filter: { archetypes: [Spell, [SpellRank1, SpellRank2, SpellRank3], Arcane] },
})

export const WitchArcaneSpellcasting = Traits.defineTrait('witch/spellcasting/arcane', {
  name: 'Witch Spellcasting (Arcane)',
  description:
    'Your patron grants you arcane spells. Your familiar starts off knowing 10 cantrips and five 1st-rank spells from the arcane tradition, and each time you gain a level, your patron teaches it two new spells of any rank for which you have spell slots.',
  archetypes: [ClassFeature],
  effects: [
    Effects.gainCharacterOption(SelectWitchArcaneCantrip),
    Effects.gainCharacterOption(SelectWitchArcaneCantrip),
    Effects.gainCharacterOption(SelectWitchArcaneCantrip),
    Effects.gainCharacterOption(SelectWitchArcaneCantrip),
    Effects.gainCharacterOption(SelectWitchArcaneCantrip),
    Effects.gainCharacterOption(SelectWitchArcaneCantrip),
    Effects.gainCharacterOption(SelectWitchArcaneCantrip),
    Effects.gainCharacterOption(SelectWitchArcaneCantrip),
    Effects.gainCharacterOption(SelectWitchArcaneCantrip),
    Effects.gainCharacterOption(SelectWitchArcaneCantrip),
    Effects.gainCharacterOption(SelectWitchArcaneSpell1),
    Effects.gainCharacterOption(SelectWitchArcaneSpell1),
    Effects.gainCharacterOption(SelectWitchArcaneSpell1),
    Effects.gainCharacterOption(SelectWitchArcaneSpell1),
    Effects.gainCharacterOption(SelectWitchArcaneSpell1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      Effects.gainCharacterOption(SelectWitchArcaneSpell1),
      Effects.gainCharacterOption(SelectWitchArcaneSpell1),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.gainCharacterOption(SelectWitchArcaneSpell2),
      Effects.gainCharacterOption(SelectWitchArcaneSpell2),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [
      Effects.gainCharacterOption(SelectWitchArcaneSpell2),
      Effects.gainCharacterOption(SelectWitchArcaneSpell2),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.gainCharacterOption(SelectWitchArcaneSpell3),
      Effects.gainCharacterOption(SelectWitchArcaneSpell3),
    ]),
  ],
})

export const SelectWitchDivineCantrip = CharacterOptions.selectAbilityOption('witch/select-divine-cantrip', {
  name: 'Familiar Cantrip (Divine)',
  filter: { archetypes: [Spell, Cantrip, Divine] },
  loadout: CantripLoadout,
})

export const SelectWitchDivineSpell1 = CharacterOptions.selectAbilityOption('witch/select-divine-spell-1', {
  name: 'Familiar Spell (Divine, Rank 1)',
  filter: { archetypes: [Spell, SpellRank1, Divine] },
  loadout: SpellRank1Loadout,
})

export const SelectWitchDivineSpell2 = CharacterOptions.selectAbilityOption('witch/select-divine-spell-2', {
  name: 'Familiar Spell (Divine, Rank 1–2)',
  filter: { archetypes: [Spell, [SpellRank1, SpellRank2], Divine] },
})

export const SelectWitchDivineSpell3 = CharacterOptions.selectAbilityOption('witch/select-divine-spell-3', {
  name: 'Familiar Spell (Divine, Rank 1–3)',
  filter: { archetypes: [Spell, [SpellRank1, SpellRank2, SpellRank3], Divine] },
})

export const WitchDivineSpellcasting = Traits.defineTrait('witch/spellcasting/divine', {
  name: 'Witch Spellcasting (Divine)',
  description:
    'Your patron grants you divine spells. Your familiar starts off knowing 10 cantrips and five 1st-rank spells from the divine tradition, and each time you gain a level, your patron teaches it two new spells of any rank for which you have spell slots.',
  archetypes: [ClassFeature],
  effects: [
    Effects.gainCharacterOption(SelectWitchDivineCantrip),
    Effects.gainCharacterOption(SelectWitchDivineCantrip),
    Effects.gainCharacterOption(SelectWitchDivineCantrip),
    Effects.gainCharacterOption(SelectWitchDivineCantrip),
    Effects.gainCharacterOption(SelectWitchDivineCantrip),
    Effects.gainCharacterOption(SelectWitchDivineCantrip),
    Effects.gainCharacterOption(SelectWitchDivineCantrip),
    Effects.gainCharacterOption(SelectWitchDivineCantrip),
    Effects.gainCharacterOption(SelectWitchDivineCantrip),
    Effects.gainCharacterOption(SelectWitchDivineCantrip),
    Effects.gainCharacterOption(SelectWitchDivineSpell1),
    Effects.gainCharacterOption(SelectWitchDivineSpell1),
    Effects.gainCharacterOption(SelectWitchDivineSpell1),
    Effects.gainCharacterOption(SelectWitchDivineSpell1),
    Effects.gainCharacterOption(SelectWitchDivineSpell1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      Effects.gainCharacterOption(SelectWitchDivineSpell1),
      Effects.gainCharacterOption(SelectWitchDivineSpell1),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.gainCharacterOption(SelectWitchDivineSpell2),
      Effects.gainCharacterOption(SelectWitchDivineSpell2),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [
      Effects.gainCharacterOption(SelectWitchDivineSpell2),
      Effects.gainCharacterOption(SelectWitchDivineSpell2),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.gainCharacterOption(SelectWitchDivineSpell3),
      Effects.gainCharacterOption(SelectWitchDivineSpell3),
    ]),
  ],
})

export const SelectWitchOccultCantrip = CharacterOptions.selectAbilityOption('witch/select-occult-cantrip', {
  name: 'Familiar Cantrip (Occult)',
  filter: { archetypes: [Spell, Cantrip, Occult] },
  loadout: CantripLoadout,
})

export const SelectWitchOccultSpell1 = CharacterOptions.selectAbilityOption('witch/select-occult-spell-1', {
  name: 'Familiar Spell (Occult, Rank 1)',
  filter: { archetypes: [Spell, SpellRank1, Occult] },
  loadout: SpellRank1Loadout,
})

export const SelectWitchOccultSpell2 = CharacterOptions.selectAbilityOption('witch/select-occult-spell-2', {
  name: 'Familiar Spell (Occult, Rank 1–2)',
  filter: { archetypes: [Spell, [SpellRank1, SpellRank2], Occult] },
})

export const SelectWitchOccultSpell3 = CharacterOptions.selectAbilityOption('witch/select-occult-spell-3', {
  name: 'Familiar Spell (Occult, Rank 1–3)',
  filter: { archetypes: [Spell, [SpellRank1, SpellRank2, SpellRank3], Occult] },
})

export const WitchOccultSpellcasting = Traits.defineTrait('witch/spellcasting/occult', {
  name: 'Witch Spellcasting (Occult)',
  description:
    'Your patron grants you occult spells. Your familiar starts off knowing 10 cantrips and five 1st-rank spells from the occult tradition, and each time you gain a level, your patron teaches it two new spells of any rank for which you have spell slots.',
  archetypes: [ClassFeature],
  effects: [
    Effects.gainCharacterOption(SelectWitchOccultCantrip),
    Effects.gainCharacterOption(SelectWitchOccultCantrip),
    Effects.gainCharacterOption(SelectWitchOccultCantrip),
    Effects.gainCharacterOption(SelectWitchOccultCantrip),
    Effects.gainCharacterOption(SelectWitchOccultCantrip),
    Effects.gainCharacterOption(SelectWitchOccultCantrip),
    Effects.gainCharacterOption(SelectWitchOccultCantrip),
    Effects.gainCharacterOption(SelectWitchOccultCantrip),
    Effects.gainCharacterOption(SelectWitchOccultCantrip),
    Effects.gainCharacterOption(SelectWitchOccultCantrip),
    Effects.gainCharacterOption(SelectWitchOccultSpell1),
    Effects.gainCharacterOption(SelectWitchOccultSpell1),
    Effects.gainCharacterOption(SelectWitchOccultSpell1),
    Effects.gainCharacterOption(SelectWitchOccultSpell1),
    Effects.gainCharacterOption(SelectWitchOccultSpell1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      Effects.gainCharacterOption(SelectWitchOccultSpell1),
      Effects.gainCharacterOption(SelectWitchOccultSpell1),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.gainCharacterOption(SelectWitchOccultSpell2),
      Effects.gainCharacterOption(SelectWitchOccultSpell2),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [
      Effects.gainCharacterOption(SelectWitchOccultSpell2),
      Effects.gainCharacterOption(SelectWitchOccultSpell2),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.gainCharacterOption(SelectWitchOccultSpell3),
      Effects.gainCharacterOption(SelectWitchOccultSpell3),
    ]),
  ],
})

export const SelectWitchPrimalCantrip = CharacterOptions.selectAbilityOption('witch/select-primal-cantrip', {
  name: 'Familiar Cantrip (Primal)',
  filter: { archetypes: [Spell, Cantrip, Primal] },
  loadout: CantripLoadout,
})

export const SelectWitchPrimalSpell1 = CharacterOptions.selectAbilityOption('witch/select-primal-spell-1', {
  name: 'Familiar Spell (Primal, Rank 1)',
  filter: { archetypes: [Spell, SpellRank1, Primal] },
  loadout: SpellRank1Loadout,
})

export const SelectWitchPrimalSpell2 = CharacterOptions.selectAbilityOption('witch/select-primal-spell-2', {
  name: 'Familiar Spell (Primal, Rank 1–2)',
  filter: { archetypes: [Spell, [SpellRank1, SpellRank2], Primal] },
})

export const SelectWitchPrimalSpell3 = CharacterOptions.selectAbilityOption('witch/select-primal-spell-3', {
  name: 'Familiar Spell (Primal, Rank 1–3)',
  filter: { archetypes: [Spell, [SpellRank1, SpellRank2, SpellRank3], Primal] },
})

export const WitchPrimalSpellcasting = Traits.defineTrait('witch/spellcasting/primal', {
  name: 'Witch Spellcasting (Primal)',
  description:
    'Your patron grants you primal spells. Your familiar starts off knowing 10 cantrips and five 1st-rank spells from the primal tradition, and each time you gain a level, your patron teaches it two new spells of any rank for which you have spell slots.',
  archetypes: [ClassFeature],
  effects: [
    Effects.gainCharacterOption(SelectWitchPrimalCantrip),
    Effects.gainCharacterOption(SelectWitchPrimalCantrip),
    Effects.gainCharacterOption(SelectWitchPrimalCantrip),
    Effects.gainCharacterOption(SelectWitchPrimalCantrip),
    Effects.gainCharacterOption(SelectWitchPrimalCantrip),
    Effects.gainCharacterOption(SelectWitchPrimalCantrip),
    Effects.gainCharacterOption(SelectWitchPrimalCantrip),
    Effects.gainCharacterOption(SelectWitchPrimalCantrip),
    Effects.gainCharacterOption(SelectWitchPrimalCantrip),
    Effects.gainCharacterOption(SelectWitchPrimalCantrip),
    Effects.gainCharacterOption(SelectWitchPrimalSpell1),
    Effects.gainCharacterOption(SelectWitchPrimalSpell1),
    Effects.gainCharacterOption(SelectWitchPrimalSpell1),
    Effects.gainCharacterOption(SelectWitchPrimalSpell1),
    Effects.gainCharacterOption(SelectWitchPrimalSpell1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      Effects.gainCharacterOption(SelectWitchPrimalSpell1),
      Effects.gainCharacterOption(SelectWitchPrimalSpell1),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.gainCharacterOption(SelectWitchPrimalSpell2),
      Effects.gainCharacterOption(SelectWitchPrimalSpell2),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [
      Effects.gainCharacterOption(SelectWitchPrimalSpell2),
      Effects.gainCharacterOption(SelectWitchPrimalSpell2),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.gainCharacterOption(SelectWitchPrimalSpell3),
      Effects.gainCharacterOption(SelectWitchPrimalSpell3),
    ]),
  ],
})

export const FamiliarOfRestoredSpirit = Traits.defineTrait('witch/patron-familiar/familiar-of-restored-spirit', {
  name: 'Familiar of Restored Spirit',
  description:
    'Your familiar is pleasantly warm and soft, seeming to wash away worries with its mere presence. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, one willing creature within 15 feet of your familiar gains temporary [Hit Points](characteristic:hit-points) equal to 2 + half your level, which last until the start of your next turn.',
  effects: [],
})

export const FaithsFlamekeeper = Traits.defineTrait('witch/patron/faiths-flamekeeper', {
  name: "Faith's Flamekeeper",
  description:
    "Your patron contacted you in a moment your willpower was close to sputtering out. Their reassuring presence was like breath and kindling bringing an ember back aflame, their magic giving you the strength to carry on and bring others to your cause. Your patron is likely a divine being like an angel or aeon acting covertly, though the possibility exists they might be a more sinister entity, using you to unknown ends.\n\n**Spell List** [Divine](trait:spellcasting/divine-spell-list)\n\n**Patron Skill** [Religion](characteristic:skill/religion)\n\n**Lesson of Fervor's Grasp** Your patron has taught you that nothing can seize the heart like faith, whether used to inspire or direct. You gain the [_stoke the heart_](ability:spell/stoke-the-heart) hex cantrip and your familiar learns [_command_](ability:spell/command).\n\n**Familiar of Restored Spirit** Your familiar is pleasantly warm and soft, seeming to wash away worries with its mere presence. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, one willing creature within 15 feet of your familiar gains temporary [Hit Points](characteristic:hit-points) equal to 2 + half your level, which last until the start of your next turn.",
  archetypes: [PatronTheme],
  effects: [
    Effects.gainTrait(WitchDivineSpellcasting),
    Effects.gainTrait(TrainedReligion),
    Effects.gainAbility(Spells.StokeTheHeart),
    Effects.gainAbility(Spells.Command),
    Effects.gainTrait(FamiliarOfRestoredSpirit),
  ],
})

export const FamiliarOfFreezingRime = Traits.defineTrait('witch/patron-familiar/familiar-of-freezing-rime', {
  name: 'Familiar of Freezing Rime',
  description:
    "Your familiar is cold to the touch, its breath always visible. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, you can cause ice to form in a 5-foot burst centered on a square of your familiar's space. Those squares are [difficult terrain](content:playing-the-game/difficult-terrain) until the start of your next turn.",
  effects: [],
})

export const SilenceInSnow = Traits.defineTrait('witch/patron/silence-in-snow', {
  name: 'Silence in Snow',
  description:
    "Bitter cold heralded your patron's appearance, in the depths of the winter solstice or on a frozen peak at the end of the world. Your patron might be a winter hag, ice yai, or other spirit of the cold, but one thing is clear as ice—their power is not to be underestimated.\n\n**Spell List** [Primal](trait:spellcasting/primal-spell-list)\n\n**Patron Skill** [Nature](characteristic:skill/nature)\n\n**Lesson of Winter's Chill** Your patron taught you the power of winter firsthand by subjecting you to frost and snow. You learn the [_clinging ice_](ability:spell/clinging-ice) hex cantrip and your familiar learns [_gust of wind_](ability:spell/gust-of-wind).\n\n**Familiar of Freezing Rime** Your familiar is cold to the touch, its breath always visible. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, you can cause ice to form in a 5-foot burst centered on a square of your familiar's space. Those squares are [difficult terrain](content:playing-the-game/difficult-terrain) until the start of your next turn.",
  archetypes: [PatronTheme],
  effects: [
    Effects.gainTrait(WitchPrimalSpellcasting),
    Effects.gainTrait(TrainedNature),
    Effects.gainAbility(Spells.ClingingIce),
    Effects.gainAbility(Spells.GustOfWind),
    Effects.gainTrait(FamiliarOfFreezingRime),
  ],
})

export const FamiliarOfBalancedLuck = Traits.defineTrait('witch/patron-familiar/familiar-of-balanced-luck', {
  name: 'Familiar of Balanced Luck',
  description:
    'Your familiar has a spot on its body that looks like a good luck charm or a bad omen, depending on the angle. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, one creature within 15 feet of your familiar gets your choice of either a +1 status bonus to its [AC](characteristic:armor-class) or a –1 status penalty to its AC until the start of your next turn.',
  effects: [],
})

export const SpinnerOfThreads = Traits.defineTrait('witch/patron/spinner-of-threads', {
  name: 'Spinner of Threads',
  description:
    "You met your patron in a memory of an encounter yet to come or a premonition of something long since passed, as they untangled and re-spun the tapestry of time and fate. Was your patron a norn? A herald of a deity like Pharasma, Alseta, or Grandmother Spider? Could it even be a single individual appearing at three or more points in its timeline—multiple versions of the same being, parallel threads converging on a single moment?\n\n**Spell List** [Occult](trait:spellcasting/occult-spell-list)\n\n**Patron Skill** [Occultism](characteristic:skill/occultism)\n\n**Lesson of Fate's Vicissitudes** Your patron's harsh lesson is that fate spares no one, rising and falling in turn for all. You gain the [_nudge fate_](ability:spell/nudge-fate) hex cantrip and your familiar learns [_sure strike_](ability:spell/sure-strike).\n\n**Familiar of Balanced Luck** Your familiar has a spot on its body that looks like a good luck charm or a bad omen, depending on the angle. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, one creature within 15 feet of your familiar gets your choice of either a +1 status bonus to its [AC](characteristic:armor-class) or a –1 status penalty to its AC until the start of your next turn.",
  archetypes: [PatronTheme],
  effects: [
    Effects.gainTrait(WitchOccultSpellcasting),
    Effects.gainTrait(TrainedOccultism),
    Effects.gainAbility(Spells.NudgeFate),
    Effects.gainAbility(Spells.SureStrike),
    Effects.gainTrait(FamiliarOfBalancedLuck),
  ],
})

export const FamiliarOfStalkingNight = Traits.defineTrait('witch/patron-familiar/familiar-of-stalking-night', {
  name: 'Familiar of Stalking Night',
  description:
    "Your familiar is dark of fur or feather, and light seems to disappear into it. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, and your familiar is adjacent to an enemy to which it's concealed, hidden, or undetected, the enemy becomes [frightened](content:conditions/frightened) 1.",
  effects: [],
})

export const StarlessShadow = Traits.defineTrait('witch/patron/starless-shadow', {
  name: 'Starless Shadow',
  description:
    "Your patron first contacted you at the witching hour, as your body lay [paralyzed](content:conditions/paralyzed) by sleep while your mind had yet to escape the waking world. Your patron might be a creature of the Netherworld or a long-forgotten spirit of twilight—all you remember of them are haunting eyes of moonlight, offering you power from the darkness.\n\n**Spell List** [Occult](trait:spellcasting/occult-spell-list)\n\n**Patron Skill** [Occultism](characteristic:skill/occultism)\n\n**Lesson of Night's Terrors** Your patron taught you that the darkness can hide all manner of things best left unseen. You gain the [_shroud of night_](ability:spell/shroud-of-night) hex cantrip, and your familiar learns [_fear_](ability:spell/fear).\n\n**Familiar of Stalking Night** Your familiar is dark of fur or feather, and light seems to disappear into it. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, and your familiar is adjacent to an enemy to which it's concealed, hidden, or undetected, the enemy becomes [frightened](content:conditions/frightened) 1.",
  archetypes: [PatronTheme],
  effects: [
    Effects.gainTrait(WitchOccultSpellcasting),
    Effects.gainTrait(TrainedOccultism),
    Effects.gainAbility(Spells.ShroudOfNight),
    Effects.gainAbility(Spells.Fear),
    Effects.gainTrait(FamiliarOfStalkingNight),
  ],
})

export const FamiliarOfFlowingScript = Traits.defineTrait('witch/patron-familiar/familiar-of-flowing-script', {
  name: 'Familiar of Flowing Script',
  description:
    'Your familiar is covered in a pattern that looks similar to letters in an unknown language, one that seems to draw attention even as it eludes understanding. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, the letters begin to rapidly change, causing a distraction. Until the start of your next turn, your familiar can provide flanking for you and your allies as though it were able to attack and had a reach of 5 feet; this is a visual effect.',
  effects: [],
})

export const TheInscribedOne = Traits.defineTrait('witch/patron/the-inscribed-one', {
  name: 'The Inscribed One',
  description:
    "No words passed your patron's lips in the moment you met; instead, words and glyphs danced across their skin while symbols and numbers swam in the depths of their eyes, spelling out their will in a torrent of words and wisdom. Your patron might be a powerful archmage, or even one of their abandoned artifacts, searching for a successor.\n\n**Spell List** [Arcane](trait:spellcasting/arcane-spell-list)\n\n**Patron Skill** [Arcana](characteristic:skill/arcana)\n\n**Lesson of Glyph's Supremacy** Your patron teaches that the written word can accomplish so much more than it seems. You gain the [_discern secrets_](ability:spell/discern-secrets) hex and your familiar learns [_runic weapon_](ability:spell/runic-weapon).\n\n**Familiar of Flowing Script** Your familiar is covered in a pattern that looks similar to letters in an unknown language, one that seems to draw attention even as it eludes understanding. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, the letters begin to rapidly change, causing a distraction. Until the start of your next turn, your familiar can provide flanking for you and your allies as though it were able to attack and had a reach of 5 feet; this is a visual effect.",
  archetypes: [PatronTheme],
  effects: [
    Effects.gainTrait(WitchArcaneSpellcasting),
    Effects.gainTrait(TrainedArcana),
    Effects.gainAbility(Spells.DiscernSecrets),
    Effects.gainAbility(Spells.RunicWeapon),
    Effects.gainTrait(FamiliarOfFlowingScript),
  ],
})

export const FamiliarOfOngoingMisery = Traits.defineTrait('witch/patron-familiar/familiar-of-ongoing-misery', {
  name: 'Familiar of Ongoing Misery',
  description:
    'Your familiar seems hostile to all creatures other than you, hissing at them if they get too near. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, your familiar can curse a creature within 15 feet of it, prolonging one negative condition of your choice affecting the creature by 1 round. This extension can be applied only once to a given case of a condition. This is a curse effect. This prolongs only conditions with a timed duration (such as "1 round" or "until the end of your next turn") and doesn\'t prevent conditions from being removed by other means.',
  effects: [],
})

export const TheResentment = Traits.defineTrait('witch/patron/the-resentment', {
  name: 'The Resentment',
  description:
    'A single feeling radiated from your patron in the moment you met them, as palpable as heat from a fire: the desire to see every tall poppy felled and every proud nail hammered down, whether to righteously bring justice for small folk or the base urge to see the powerful defeated. Your patron is likely far from the upper echelons of its kind, such as a hag ousted from its coven or a quasi-divinity or a lower-rank demon. This leaves it only subtler and weaker tools to see its ends met: curses, hexes, and you.\n\n**Spell List** [Occult](trait:spellcasting/occult-spell-list)\n\n**Patron Skill** [Occultism](characteristic:skill/occultism)\n\n**Lesson of Strength\'s Impermanence** Your patron has taught you that power can be taken much more easily that it can be built. You gain the [_evil eye_](ability:spell/evil-eye) hex cantrip and your familiar learns [_enfeeble_](ability:spell/enfeeble).\n\n**Familiar of Ongoing Misery** Your familiar seems hostile to all creatures other than you, hissing at them if they get too near. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, your familiar can curse a creature within 15 feet of it, prolonging one negative condition of your choice affecting the creature by 1 round. This extension can be applied only once to a given case of a condition. This is a curse effect. This prolongs only conditions with a timed duration (such as "1 round" or "until the end of your next turn") and doesn\'t prevent conditions from being removed by other means.',
  archetypes: [PatronTheme],
  effects: [
    Effects.gainTrait(WitchOccultSpellcasting),
    Effects.gainTrait(TrainedOccultism),
    Effects.gainAbility(Spells.EvilEye),
    Effects.gainAbility(Spells.Enfeeble),
    Effects.gainTrait(FamiliarOfOngoingMisery),
  ],
})

export const FamiliarOfKeenSenses = Traits.defineTrait('witch/patron-familiar/familiar-of-keen-senses', {
  name: 'Familiar of Keen Senses',
  description:
    "Your familiar has glinting eyes, twitching ears, or some other sign of a beast's powerful senses. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, your familiar gains your choice of an imprecise scent, tremorsense, or wavesense, with a range of 60 feet until the start of your next turn, and it can immediately Point Out as a free action.",
  effects: [],
})

export const SelectWildingStewardSpell = CharacterOptions.selectAbilityOption('witch/patron/wilding-steward/select-spell', {
  name: 'Wilding Steward Familiar Spell',
  filter: { specificOptions: [Spells.SummonAnimal, Spells.SummonPlantOrFungus] },
})

export const WildingSteward = Traits.defineTrait('witch/patron/wilding-steward', {
  name: 'Wilding Steward',
  description:
    "When your patron appeared before you, they moved with the grace and ferocity of the wilderness, their voice the creaking of trees and the sound of hoof against unspoiled earth. They might have been a dryad queen or a primeval beast, but it seemed all of nature was theirs to defend.\n\n**Spell List** [Primal](trait:spellcasting/primal-spell-list)\n\n**Patron Skill** [Nature](characteristic:skill/nature)\n\n**Lesson of Wild Speech** Your patron has taught you the complexities of nonverbal speech, letting you influence and call animals and plants to you. You gain the [_wilding word_](ability:spell/wilding-word) hex cantrip and your familiar learns your choice of [_summon animal_](ability:spell/summon-animal) or [_summon plant or fungus_](ability:spell/summon-plant-or-fungus)\n\n**Familiar of Keen Senses** Your familiar has glinting eyes, twitching ears, or some other sign of a beast's powerful senses. When you Cast or [Sustain](content:playing-the-game/sustain) a hex, your familiar gains your choice of an imprecise scent, tremorsense, or wavesense, with a range of 60 feet until the start of your next turn, and it can immediately Point Out as a free action.",
  archetypes: [PatronTheme],
  effects: [
    Effects.gainTrait(WitchPrimalSpellcasting),
    Effects.gainTrait(TrainedNature),
    Effects.gainAbility(Spells.WildingWord),
    Effects.gainCharacterOption(SelectWildingStewardSpell),
    Effects.gainTrait(FamiliarOfKeenSenses),
  ],
})

export const SelectWitchPatron = CharacterOptions.selectTraitOption('witch/select-patron', {
  name: 'Patron',
  filter: { archetypes: [PatronTheme] },
})

export const AllWitchPatronEntities = [
  PatronTheme,
  WitchArcaneSpellcasting,
  WitchDivineSpellcasting,
  WitchOccultSpellcasting,
  WitchPrimalSpellcasting,
  FamiliarOfRestoredSpirit,
  FamiliarOfFreezingRime,
  FamiliarOfBalancedLuck,
  FamiliarOfStalkingNight,
  FamiliarOfFlowingScript,
  FamiliarOfOngoingMisery,
  FamiliarOfKeenSenses,
  FaithsFlamekeeper,
  SilenceInSnow,
  SpinnerOfThreads,
  StarlessShadow,
  TheInscribedOne,
  TheResentment,
  WildingSteward,
]
