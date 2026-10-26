import { Attributes, CharacterOptions, CharacterValues, CharacterEffects, ResourcePools, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Cantrip, ClassFeature, Occult, Spell, SpellRank1, SpellRank2, SpellRank3, SpellRank4, SpellRank5 } from '@simulacrum/ruleset-pf2e/tag'
import { Charisma, SpellAttack, SpellDC } from '@simulacrum/ruleset-pf2e/characteristic'
import { Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'

export const BardSpellSlotsRank1 = ResourcePools.defineResourcePool('bard/spell-slots/rank-1', {
  name: 'Spell Slots (Rank 1)',
  description: 'The number of rank 1 occult spells you can cast each day from your spell repertoire.',
  size: 2,
  refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }],
})

export const BardSpellSlotsRank2 = ResourcePools.defineResourcePool('bard/spell-slots/rank-2', {
  name: 'Spell Slots (Rank 2)',
  description: 'The number of rank 2 occult spells you can cast each day from your spell repertoire.',
  size: 2,
  refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }],
})

export const BardSpellSlotsRank3 = ResourcePools.defineResourcePool('bard/spell-slots/rank-3', {
  name: 'Spell Slots (Rank 3)',
  description: 'The number of rank 3 occult spells you can cast each day from your spell repertoire.',
  size: 2,
  refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }],
})

export const BardSpellSlotsRank4 = ResourcePools.defineResourcePool('bard/spell-slots/rank-4', {
  name: 'Spell Slots (Rank 4)',
  description: 'The number of rank 4 occult spells you can cast each day from your spell repertoire.',
  size: 2,
  refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }],
})

export const BardSpellSlotsRank5 = ResourcePools.defineResourcePool('bard/spell-slots/rank-5', {
  name: 'Spell Slots (Rank 5)',
  description: 'The number of rank 5 occult spells you can cast each day from your spell repertoire.',
  size: 2,
  refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }],
})

export const SelectBardCantrip = CharacterOptions.selectAbilityOption('bard/select-cantrip', {
  name: 'Bard Cantrip',
  filter: { tags: [Spell, Cantrip, Occult] },
  loadout: null,
})

export const SelectBardSpellRank1 = CharacterOptions.selectAbilityOption('bard/select-spell-rank-1', {
  name: 'Bard Spell (Rank 1)',
  filter: { tags: [Spell, SpellRank1, Occult] },
  loadout: null,
})

export const SelectBardSpellRank2 = CharacterOptions.selectAbilityOption('bard/select-spell-rank-2', {
  name: 'Bard Spell (Rank 2)',
  filter: { tags: [Spell, SpellRank2, Occult] },
  loadout: null,
})

export const SelectBardSpellRank3 = CharacterOptions.selectAbilityOption('bard/select-spell-rank-3', {
  name: 'Bard Spell (Rank 3)',
  filter: { tags: [Spell, SpellRank3, Occult] },
  loadout: null,
})

export const SelectBardSpellRank4 = CharacterOptions.selectAbilityOption('bard/select-spell-rank-4', {
  name: 'Bard Spell (Rank 4)',
  filter: { tags: [Spell, SpellRank4, Occult] },
  loadout: null,
})

export const SelectBardSpellRank5 = CharacterOptions.selectAbilityOption('bard/select-spell-rank-5', {
  name: 'Bard Spell (Rank 5)',
  filter: { tags: [Spell, SpellRank5, Occult] },
  loadout: null,
})

export const BardSpellcasting = Traits.defineTrait('bard/spellcasting', {
  name: 'Bard Spellcasting',
  description:
    "You draw upon magic from esoteric knowledge. You are a spellcaster and can cast spells of the [occult](trait:spellcasting/occult-spell-list) tradition using the [Cast a Spell](content:spells/cast-a-spell) activity (see [Casting Spells](content:spells/casting-spells)). As a bard, when you cast spells, your incantations might be musical riffs or clever limericks, your gestures might incorporate dance and dramatic pantomiming, and you might accompany your spellcasting by playing a musical instrument.\n\nEach day, you can cast up to two 1st-rank spells. You must know spells to cast them, and you learn them via the spell repertoire class feature. The number of spells you can cast each day is called your spell slots. As you increase in level as a bard, your number of spells per day increases, as does the highest rank of spells you can cast, as shown on the Bard Spells per Day table.\n\nSome of your spells require you to attempt a spell attack to see how effective they are or have your enemies roll against your [spell DC](characteristic:spell-dc) (typically by attempting a saving throw). Since your key attribute is Charisma, your spell attack modifiers and spell DCs use your [Charisma modifier](characteristic:charisma).\n\n**Heightening Spells**\n\nWhen you get spell slots of 2nd rank and higher, you can fill those slots with stronger versions of lower-rank spells. This increases the spell's rank, heightening it to match the spell slot. You must have a spell in your spell repertoire at the rank you want to cast in order to heighten it to that rank. Many spells have specific improvements when they are [heightened](content:spells/heightened-spells) to certain ranks. The signature spells class feature lets you heighten certain spells freely.\n\n**Cantrips**\n\nSome of your spells are cantrips. A cantrip is a special type of spell that doesn't use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is automatically heightened to half your level rounded up—this is usually equal to the highest rank of bard spell slot you have. For example, as a 1st-level bard, your cantrips are 1st-rank spells, and as a 5th-level bard, your cantrips are 3rd-rank spells.",
  tags: [ClassFeature],
  effects: [
    CharacterEffects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Charisma.variable))),
    CharacterEffects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Charisma.variable))),
    CharacterEffects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.gainResourcePool(BardSpellSlotsRank1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      CharacterEffects.modifyResourcePool(BardSpellSlotsRank1, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [CharacterEffects.gainResourcePool(BardSpellSlotsRank2)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [
      CharacterEffects.modifyResourcePool(BardSpellSlotsRank2, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [CharacterEffects.gainResourcePool(BardSpellSlotsRank3)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [
      CharacterEffects.modifyResourcePool(BardSpellSlotsRank3, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [CharacterEffects.gainResourcePool(BardSpellSlotsRank4)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 8), [
      CharacterEffects.modifyResourcePool(BardSpellSlotsRank4, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [CharacterEffects.gainResourcePool(BardSpellSlotsRank5)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [
      CharacterEffects.modifyResourcePool(BardSpellSlotsRank5, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
  ],
})

export const SpellRepertoire = Traits.defineTrait('bard/spell-repertoire', {
  name: 'Spell Repertoire',
  description:
    "The collection of spells you can cast is called your spell repertoire. At 1st level, you learn two 1st-rank occult spells of your choice and five occult cantrips of your choice. You choose these from the common spells from the [occult](trait:spellcasting/occult-spell-list) list or from other occult spells to which you have access. You can cast any spell in your spell repertoire by using a spell slot of an appropriate spell rank.\n\nYou add to this spell repertoire as you increase in level. Each time you get a spell slot (see the Bard Spells per Day table), you add a spell to your spell repertoire of the same rank. At 2nd level, you select another 1st-rank spell; at 3rd level, you select two 2nd-rank spells, and so on. When you add spells, you might add a higher-rank version of a spell you already have, so you can cast a heightened version of that spell.\n\nThough you gain them at the same rate, your spell slots and the spells in your spell repertoire are separate. If a feat or other ability adds a spell to your spell repertoire, it wouldn't give you another spell slot, and vice versa.\n\n**Swapping Spells In Your Repertoire**\n\nAs you gain new spells in your repertoire, you might want to replace some of the spells you previously learned. Each time you gain a level and learn new spells, you can swap out one of your old spells for a different spell of the same rank. This spell can be a cantrip. You can also swap out spells by retraining during [downtime](content:playing-the-game/retraining).",
  tags: [ClassFeature],
  effects: [
    CharacterEffects.gainCharacterOption(SelectBardCantrip),
    CharacterEffects.gainCharacterOption(SelectBardCantrip),
    CharacterEffects.gainCharacterOption(SelectBardCantrip),
    CharacterEffects.gainCharacterOption(SelectBardCantrip),
    CharacterEffects.gainCharacterOption(SelectBardCantrip),
    CharacterEffects.gainCharacterOption(SelectBardSpellRank1),
    CharacterEffects.gainCharacterOption(SelectBardSpellRank1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      CharacterEffects.gainCharacterOption(SelectBardSpellRank1),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainCharacterOption(SelectBardSpellRank2),
      CharacterEffects.gainCharacterOption(SelectBardSpellRank2),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [
      CharacterEffects.gainCharacterOption(SelectBardSpellRank2),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainCharacterOption(SelectBardSpellRank3),
      CharacterEffects.gainCharacterOption(SelectBardSpellRank3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [
      CharacterEffects.gainCharacterOption(SelectBardSpellRank3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainCharacterOption(SelectBardSpellRank4),
      CharacterEffects.gainCharacterOption(SelectBardSpellRank4),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 8), [
      CharacterEffects.gainCharacterOption(SelectBardSpellRank4),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainCharacterOption(SelectBardSpellRank5),
      CharacterEffects.gainCharacterOption(SelectBardSpellRank5),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [
      CharacterEffects.gainCharacterOption(SelectBardSpellRank5),
    ]),
  ],
})

export const AllBardSpellcastingEntities = [
  BardSpellSlotsRank1,
  BardSpellSlotsRank2,
  BardSpellSlotsRank3,
  BardSpellSlotsRank4,
  BardSpellSlotsRank5,
  BardSpellcasting,
  SpellRepertoire,
]
