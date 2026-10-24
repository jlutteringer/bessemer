import { Abilities, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import {
  Arcane,
  Cantrip,
  ClassFeature,
  FeatLevel1,
  FeatLevel2,
  FeatLevel3,
  FeatLevel4,
  Spell,
  SpellRank1,
  SpellRank2,
  SpellRank3,
  WizardFeat,
} from '@simulacrum/ruleset-pf2e/archetype'
import { Reflex } from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Expert } from '@simulacrum/ruleset-pf2e/proficiency'
import { CantripLoadout, SpellRank1Loadout, SpellRank2Loadout, SpellRank3Loadout } from '@simulacrum/ruleset-pf2e/loadout'

export const SelectSpellbookCantrip = CharacterOptions.selectAbilityOption('wizard/spellbook/select-cantrip', {
  name: 'Spellbook Cantrip',
  filter: { archetypes: [Spell, Cantrip, Arcane] },
  loadout: CantripLoadout,
})

export const SelectSpellbookRank1 = CharacterOptions.selectAbilityOption('wizard/spellbook/select-rank-1', {
  name: 'Spellbook Spell (Rank 1)',
  filter: { archetypes: [Spell, SpellRank1, Arcane] },
  loadout: SpellRank1Loadout,
})

export const SelectSpellbookRank2OrLower = CharacterOptions.selectAbilityOption('wizard/spellbook/select-rank-2', {
  name: 'Spellbook Spell (Rank 2 or Lower)',
  filter: { archetypes: [Spell, [SpellRank1, SpellRank2], Arcane] },
})

export const SelectSpellbookRank3OrLower = CharacterOptions.selectAbilityOption('wizard/spellbook/select-rank-3', {
  name: 'Spellbook Spell (Rank 3 or Lower)',
  filter: { archetypes: [Spell, [SpellRank1, SpellRank2, SpellRank3], Arcane] },
})

export const SelectWizardFeat1 = CharacterOptions.selectTraitOption('feat/select-wizard-1', {
  name: 'Wizard Feat (Level 1)',
  filter: { archetypes: [WizardFeat, FeatLevel1] },
})

export const SelectWizardFeat2 = CharacterOptions.selectTraitOption('feat/select-wizard-2', {
  name: 'Wizard Feat (Level 2)',
  filter: { archetypes: [WizardFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectWizardFeat4 = CharacterOptions.selectTraitOption('feat/select-wizard-4', {
  name: 'Wizard Feat (Level 4)',
  filter: { archetypes: [WizardFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const WizardSpellcasting = Traits.defineTrait('wizard/wizard-spellcasting', {
  name: 'Wizard Spellcasting',
  description:
    "Through dedicated study and practice, you can construct spells with academic rigor by shaping arcane magic. You are a spellcaster, and you can cast spells of the arcane tradition using the [Cast a Spell](content:spells/cast-a-spell) activity. As a wizard, when you cast spells, your incantations likely specify exactly what forces you call on and how to shape them, and your gestures precisely shape and direct your magic while circles of arcane runes flare to life.\n\nAt 1st level, you can prepare up to two 1st-rank spells and five cantrips each morning from the spells in your spellbook, as well as one extra curriculum cantrip and one extra curriculum spell of each rank you can cast from your arcane school. Prepared spells remain available to you until you cast them or until you prepare your spells again. The number of spells you can prepare is called your spell slots.\n\nAs you increase in level as a wizard, the number of spells you can prepare each day increases, as does the highest rank of spell you can cast, as shown in the Wizard Spells per Day table.\n\nSome of your spells require you to attempt a spell attack to see how effective they are, or have your enemies roll against your [spell DC](characteristic:spell-dc) (typically by attempting a saving throw). Since your key attribute is Intelligence, your [spell attack modifier](characteristic:spell-attack) and spell DC use your [Intelligence modifier](characteristic:intelligence).\n\n**Heightening Spells**\n\nWhen you get spell slots of 2nd rank and higher, you can fill those slots with stronger versions of lower-rank spells. This increases the spell's rank, heightening it to match the spell slot. Many spells have specific improvements when they are heightened to certain ranks.\n\n**Cantrips**\n\nSome of your spells are cantrips. A cantrip is a special type of spell that doesn't use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up— this is usually equal to the highest rank of wizard spell slot you have. For example, as a 1st-level wizard, your cantrips are 1st-rank spells, and as a 5th-level wizard, your cantrips are 3rd-rank spells.\n\n**Spellbook**\n\nEvery arcane spell has a written version, which you record in your personalized book of spells. You start with a spellbook worth 10 sp or less, which you receive for free and must study each day to prepare your spells. Your spellbook's form and name are up to you. It might be a musty, leather-bound tome or an assortment of thin metal disks connected to a brass ring; its name might be esoteric, like _The Tome of Silent Shadows_ or something more academic, like _Advanced Pyromantic Applications of Jalmeri Elemental Theory_.\n\nThe spellbook contains your choice of 10 arcane cantrips and five 1st-rank arcane spells. You choose these from the common spells on the [arcane spell list](trait:spellcasting/arcane-spell-list) or from other arcane spells you gain access to. You also add two 1st-rank spells from the curriculum of your arcane school (except in the case of the school of unified magical theory, as described in that school).\n\nEach time you gain a level, you add two arcane spells to your spellbook, of any spell rank for which you have spell slots, chosen from common spells of your tradition or others you gain access to. You can also add spells to your spellbook with the [Learn a Spell](content:skills/learn-a-spell) activity. When you gain spell slots of a new rank, you also add an additional spell from your school's curriculum (unless it's the school of unified magical theory).",
  archetypes: [ClassFeature],
  effects: [
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(SpellRank1Loadout),
    Effects.gainLoadoutSlot(SpellRank1Loadout),
    Effects.gainCharacterOption(SelectSpellbookCantrip),
    Effects.gainCharacterOption(SelectSpellbookCantrip),
    Effects.gainCharacterOption(SelectSpellbookCantrip),
    Effects.gainCharacterOption(SelectSpellbookCantrip),
    Effects.gainCharacterOption(SelectSpellbookCantrip),
    Effects.gainCharacterOption(SelectSpellbookCantrip),
    Effects.gainCharacterOption(SelectSpellbookCantrip),
    Effects.gainCharacterOption(SelectSpellbookCantrip),
    Effects.gainCharacterOption(SelectSpellbookCantrip),
    Effects.gainCharacterOption(SelectSpellbookCantrip),
    Effects.gainCharacterOption(SelectSpellbookRank1),
    Effects.gainCharacterOption(SelectSpellbookRank1),
    Effects.gainCharacterOption(SelectSpellbookRank1),
    Effects.gainCharacterOption(SelectSpellbookRank1),
    Effects.gainCharacterOption(SelectSpellbookRank1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      Effects.gainLoadoutSlot(SpellRank1Loadout),
      Effects.gainCharacterOption(SelectSpellbookRank1),
      Effects.gainCharacterOption(SelectSpellbookRank1),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.gainLoadoutSlot(SpellRank2Loadout),
      Effects.gainLoadoutSlot(SpellRank2Loadout),
      Effects.gainCharacterOption(SelectSpellbookRank2OrLower),
      Effects.gainCharacterOption(SelectSpellbookRank2OrLower),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [
      Effects.gainLoadoutSlot(SpellRank2Loadout),
      Effects.gainCharacterOption(SelectSpellbookRank2OrLower),
      Effects.gainCharacterOption(SelectSpellbookRank2OrLower),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.gainLoadoutSlot(SpellRank3Loadout),
      Effects.gainLoadoutSlot(SpellRank3Loadout),
      Effects.gainCharacterOption(SelectSpellbookRank3OrLower),
      Effects.gainCharacterOption(SelectSpellbookRank3OrLower),
    ]),
  ],
})

export const ArcaneBond = Traits.defineTrait('wizard/arcane-bond', {
  name: 'Arcane Bond',
  description:
    'You place some of your magical power in a bonded item. Each day when you prepare your spells, you can designate a single item you own as your bonded item. This is typically an item associated with spellcasting, such as a wand, ring, or staff, but you are free to designate a weapon or other item. You gain the Drain Bonded Item free action.',
  archetypes: [ClassFeature],
  effects: [],
})

export const DrainBondedItem = Abilities.defineAbility('wizard/drain-bonded-item', {
  name: 'Drain Bonded Item',
  description:
    "*Arcane, Wizard*\n\n**Frequency** once per day\n\n**Requirements** Your bonded item is on your person.\n\nYou expend the magical power stored in your bonded item. During the current turn, you can cast one spell you prepared today and already cast, without spending a spell slot. You must still Cast the Spell and meet the spell's other requirements.",
  prerequisites: [Traits.traitPrerequisite(ArcaneBond)],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [{ name: 'Drain Bonded Item', action: ActionTypes.FreeAction }],
})

export const WizardFeats = Traits.defineTrait('wizard/wizard-feats', {
  name: 'Wizard Feats',
  description: 'At 2nd level and every even-numbered level thereafter, you gain a wizard class feat.',
  archetypes: [ClassFeature],
  effects: [],
})

export const ReflexExpertise = Traits.defineTrait('wizard/reflex-expertise', {
  name: 'Reflex Expertise',
  description: "You've developed a knack for dodging danger. Your proficiency rank for [Reflex](characteristic:reflex) saves increases to expert.",
  archetypes: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const AllWizardFeatureEntities = [
  SelectSpellbookCantrip,
  SelectSpellbookRank1,
  SelectSpellbookRank2OrLower,
  SelectSpellbookRank3OrLower,
  SelectWizardFeat1,
  SelectWizardFeat2,
  SelectWizardFeat4,
  WizardSpellcasting,
  ArcaneBond,
  DrainBondedItem,
  WizardFeats,
  ReflexExpertise,
]
