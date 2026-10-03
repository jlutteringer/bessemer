import { Abilities, Archetypes, Attributes, Effects, Traits } from '@simulacrum/common'
import { Class, Wizard } from '@simulacrum/rulesets/dnd-5e/archetype'
import * as SkillProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/skill-proficiency'
import * as Spells from '@simulacrum/rulesets/dnd-5e/archetype/spell'
import * as SkillExpertise from '@simulacrum/rulesets/dnd-5e/archetype/skill-expertise'
import { SelectFeat } from '@simulacrum/rulesets/dnd-5e/archetype/feat'
import { CharacterOptions } from '@simulacrum/common/character'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { Patches } from '@bessemer/cornerstone'
import { CantripLoadout, PreparedSpellLoadout } from '@simulacrum/rulesets/dnd-5e/loadout'

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('wizard/select-skill-proficiency', {
  archetypes: [SkillProficiencies.SkillProficiency],
  specificOptions: [
    SkillProficiencies.Arcana,
    SkillProficiencies.History,
    SkillProficiencies.Insight,
    SkillProficiencies.Investigation,
    SkillProficiencies.Medicine,
    SkillProficiencies.Nature,
    SkillProficiencies.Religion,
  ],
})

export const SelectSpellUpToRank1 = CharacterOptions.selectAbilityOption(
  'wizard/select-spell-up-to-rank-1',
  { archetypes: [Wizard, [Spells.Rank1]] },
  'Spells Known',
  PreparedSpellLoadout
)

export const SelectSpellUpToRank2 = CharacterOptions.selectAbilityOption(
  'wizard/select-spell-up-to-rank-2',
  { archetypes: [Wizard, [Spells.Rank1, Spells.Rank2]] },
  'Spells Known',
  PreparedSpellLoadout
)

export const SelectSpellUpToRank3 = CharacterOptions.selectAbilityOption(
  'wizard/select-spell-up-to-rank-3',
  { archetypes: [Wizard, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  'Spells Known',
  PreparedSpellLoadout
)

export const Spellcasting = Abilities.defineAbility('wizard/spellcasting', {
  name: 'Spellcasting',
  effects: [
    Effects.descriptive(
      '<p>You cast Wizard spells using <strong>Intelligence</strong>, with an Arcane Focus or your spellbook as your focus. You know three cantrips, gaining a fourth at level 4, and can swap one after a Long Rest.</p>'
    ),
    Effects.descriptive(
      '<p>Your <strong>spellbook</strong> starts with six level 1 Wizard spells, and you add two more each time you gain a Wizard level, of a level you have slots for. You can also copy spells you find into it (2 hours and 50 GP per spell level).</p>'
    ),
    Effects.descriptive(
      '<p>After a Long Rest, you prepare a list of spells from the book to cast with your spell slots: 4 at level 1, rising to 9 by level 5. You regain all spell slots on a Long Rest.</p>'
    ),
  ],
})

export const RitualAdept = Abilities.defineAbility('wizard/ritual-adept', {
  name: 'Ritual Adept',
  effects: [
    Effects.descriptive(
      '<p>You can cast any Ritual spell in your spellbook as a ritual without preparing it, as long as you read it from the book.</p>'
    ),
  ],
})

export const ArcaneRecovery = Abilities.defineAbility('wizard/arcane-recovery', {
  name: 'Arcane Recovery',
  effects: [
    Effects.descriptive(
      '<p>Once per Long Rest, when you finish a Short Rest, you can recover expended spell slots with a combined level of up to half your Wizard level (rounded up). None of them can be level 6 or higher.</p>'
    ),
  ],
})

export const Level1 = Traits.defineTrait('wizard/level-1', {
  name: 'Wizard',
  description:
    '<p>A scholar of arcane magic who records spells in a <strong>spellbook</strong> and casts them with <strong>Intelligence</strong>.</p>',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainAbility(Spellcasting),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    ...Abilities.applyFilter(Spells.All, Abilities.filter({ archetypes: [Wizard, Spells.Cantrip] })).map((it) =>
      Effects.gainAbility(it, CantripLoadout)
    ),
    Effects.gainLoadoutSlot(PreparedSpellLoadout),
    Effects.gainLoadoutSlot(PreparedSpellLoadout),
    Effects.gainLoadoutSlot(PreparedSpellLoadout),
    Effects.gainLoadoutSlot(PreparedSpellLoadout),
    Effects.gainAbility(RitualAdept),
    Effects.gainAbility(ArcaneRecovery),
  ],
})

export const SelectScholarExpertise = CharacterOptions.selectTraitOption('wizard/select-scholar-expertise', {
  archetypes: [SkillExpertise.SkillExpertise],
  specificOptions: [
    SkillExpertise.Arcana,
    SkillExpertise.History,
    SkillExpertise.Investigation,
    SkillExpertise.Medicine,
    SkillExpertise.Nature,
    SkillExpertise.Religion,
  ],
})

export const Level2 = Traits.defineTrait('wizard/level-2', {
  name: 'Wizard (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))),
    Effects.gainLoadoutSlot(PreparedSpellLoadout),
    Effects.gainCharacterOption(SelectScholarExpertise),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
  ],
})

export const WizardSubclass = Archetypes.defineArchetype('wizard/subclass', { name: 'Wizard Subclass' })
export const SelectWizardSubclass = CharacterOptions.selectTraitOption('wizard/select-subclass', { archetypes: [WizardSubclass] })

export const Level3 = Traits.defineTrait('wizard/level-3', {
  name: 'Wizard (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))),
    Effects.gainLoadoutSlot(PreparedSpellLoadout),
    Effects.gainCharacterOption(SelectWizardSubclass),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

export const Level4 = Traits.defineTrait('wizard/level-4', {
  name: 'Wizard (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))),
    Effects.gainLoadoutSlot(PreparedSpellLoadout),
    Effects.gainCharacterOption(SelectFeat),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

export const MemorizeSpell = Abilities.defineAbility('wizard/memorize-spell', {
  name: 'Memorize Spell',
  effects: [
    Effects.descriptive(
      '<p>When you finish a Short Rest, you can swap one of your prepared level 1+ Wizard spells for another level 1+ spell in your spellbook.</p>'
    ),
  ],
})

export const Level5 = Traits.defineTrait('wizard/level-5', {
  name: 'Wizard (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))),
    Effects.gainLoadoutSlot(PreparedSpellLoadout),
    Effects.gainLoadoutSlot(PreparedSpellLoadout),
    Effects.gainCharacterOption(SelectSpellUpToRank3),
    Effects.gainCharacterOption(SelectSpellUpToRank3),
    Effects.gainAbility(MemorizeSpell),
  ],
})

export const SelectAbjurationSavantSpell = CharacterOptions.selectAbilityOption(
  'wizard/select-abjuration-savant-spell',
  { archetypes: [Wizard, Spells.Abjuration, [Spells.Rank1, Spells.Rank2]] },
  'Abjuration Savant',
  PreparedSpellLoadout
)

export const SelectAbjurationSavantSpellUpToRank3 = CharacterOptions.selectAbilityOption(
  'wizard/select-abjuration-savant-spell-up-to-rank-3',
  { archetypes: [Wizard, Spells.Abjuration, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  'Abjuration Savant',
  PreparedSpellLoadout
)

export const AbjurationSavantRank3 = Traits.defineTrait('wizard/abjuration-savant-rank-3', {
  name: 'Abjuration Savant (Rank 3)',
  description:
    '<p>You gained a new level of spell slots: add one Abjuration spell of level 3 or lower from the Wizard list to your spellbook for free.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainCharacterOption(SelectAbjurationSavantSpellUpToRank3)],
})

export const AbjurationSavant = Traits.defineTrait('wizard/abjuration-savant', {
  name: 'Abjuration Savant',
  description:
    '<p>Add two Abjuration spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Abjuration spell you can cast for free.</p>',
  effects: [
    Effects.gainCharacterOption(SelectAbjurationSavantSpell),
    Effects.gainCharacterOption(SelectAbjurationSavantSpell),
    Effects.gainTrait(AbjurationSavantRank3),
  ],
})

export const ArcaneWard = Abilities.defineAbility('wizard/arcane-ward', {
  name: 'Arcane Ward',
  effects: [
    Effects.descriptive(
      '<p>When you cast an Abjuration spell with a spell slot, you can create a protective ward on yourself that lasts until you finish a Long Rest (once per Long Rest). It has maximum Hit Points equal to twice your Wizard level + your Intelligence modifier and absorbs damage you take, with any excess passing through to you.</p><p>The ward regains Hit Points equal to twice the slot level whenever you cast an Abjuration spell with a slot, or when you spend a slot as a Bonus Action.</p>'
    ),
  ],
})

export const Abjurer = Traits.defineTrait('wizard/abjurer', {
  name: 'Abjurer',
  description:
    '<p>A specialist in magic that <strong>blocks, banishes, and protects</strong>, sought out to exorcise spirits, guard against scrying, and close planar portals.</p>',
  archetypes: [WizardSubclass],
  effects: [Effects.gainTrait(AbjurationSavant), Effects.gainAbility(ArcaneWard)],
})

export const SelectDivinationSavantSpell = CharacterOptions.selectAbilityOption(
  'wizard/select-divination-savant-spell',
  { archetypes: [Wizard, Spells.Divination, [Spells.Rank1, Spells.Rank2]] },
  'Divination Savant',
  PreparedSpellLoadout
)

export const SelectDivinationSavantSpellUpToRank3 = CharacterOptions.selectAbilityOption(
  'wizard/select-divination-savant-spell-up-to-rank-3',
  { archetypes: [Wizard, Spells.Divination, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  'Divination Savant',
  PreparedSpellLoadout
)

export const DivinationSavantRank3 = Traits.defineTrait('wizard/divination-savant-rank-3', {
  name: 'Divination Savant (Rank 3)',
  description:
    '<p>You gained a new level of spell slots: add one Divination spell of level 3 or lower from the Wizard list to your spellbook for free.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainCharacterOption(SelectDivinationSavantSpellUpToRank3)],
})

export const DivinationSavant = Traits.defineTrait('wizard/divination-savant', {
  name: 'Divination Savant',
  description:
    '<p>Add two Divination spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Divination spell you can cast for free.</p>',
  effects: [
    Effects.gainCharacterOption(SelectDivinationSavantSpell),
    Effects.gainCharacterOption(SelectDivinationSavantSpell),
    Effects.gainTrait(DivinationSavantRank3),
  ],
})

export const Portent = Abilities.defineAbility('wizard/portent', {
  name: 'Portent',
  effects: [
    Effects.descriptive(
      '<p>After each Long Rest, roll two d20s and record the results. Before a D20 Test is rolled by you or a creature you can see, you can replace it with one of these results (once per turn). Each result can be used once, and unused ones are lost on your next Long Rest.</p>'
    ),
  ],
})

export const Diviner = Traits.defineTrait('wizard/diviner', {
  name: 'Diviner',
  description:
    '<p>A seer who works to part the veils of <strong>space, time, and consciousness</strong>, mastering spells of discernment, remote viewing, and foresight.</p>',
  archetypes: [WizardSubclass],
  effects: [Effects.gainTrait(DivinationSavant), Effects.gainAbility(Portent)],
})

export const SelectEvocationSavantSpell = CharacterOptions.selectAbilityOption(
  'wizard/select-evocation-savant-spell',
  { archetypes: [Wizard, Spells.Evocation, [Spells.Rank1, Spells.Rank2]] },
  'Evocation Savant',
  PreparedSpellLoadout
)

export const SelectEvocationSavantSpellUpToRank3 = CharacterOptions.selectAbilityOption(
  'wizard/select-evocation-savant-spell-up-to-rank-3',
  { archetypes: [Wizard, Spells.Evocation, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  'Evocation Savant',
  PreparedSpellLoadout
)

export const EvocationSavantRank3 = Traits.defineTrait('wizard/evocation-savant-rank-3', {
  name: 'Evocation Savant (Rank 3)',
  description:
    '<p>You gained a new level of spell slots: add one Evocation spell of level 3 or lower from the Wizard list to your spellbook for free.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainCharacterOption(SelectEvocationSavantSpellUpToRank3)],
})

export const EvocationSavant = Traits.defineTrait('wizard/evocation-savant', {
  name: 'Evocation Savant',
  description:
    '<p>Add two Evocation spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Evocation spell you can cast for free.</p>',
  effects: [
    Effects.gainCharacterOption(SelectEvocationSavantSpell),
    Effects.gainCharacterOption(SelectEvocationSavantSpell),
    Effects.gainTrait(EvocationSavantRank3),
  ],
})

export const PotentCantrip = Abilities.defineAbility('wizard/potent-cantrip', {
  name: 'Potent Cantrip',
  effects: [
    Effects.descriptive(
      "<p>When a creature avoids your cantrip, because your attack roll misses or it succeeds on its save, it still takes half the cantrip's damage but none of its other effects.</p>"
    ),
  ],
})

export const Evoker = Traits.defineTrait('wizard/evoker', {
  name: 'Evoker',
  description:
    '<p>A wielder of <strong>explosive elemental magic</strong> such as frost, flame, thunder, lightning, and acid, often valued as living artillery.</p>',
  archetypes: [WizardSubclass],
  effects: [Effects.gainTrait(EvocationSavant), Effects.gainAbility(PotentCantrip)],
})

export const SelectIllusionSavantSpell = CharacterOptions.selectAbilityOption(
  'wizard/select-illusion-savant-spell',
  { archetypes: [Wizard, Spells.Illusion, [Spells.Rank1, Spells.Rank2]] },
  'Illusion Savant',
  PreparedSpellLoadout
)

export const SelectIllusionSavantSpellUpToRank3 = CharacterOptions.selectAbilityOption(
  'wizard/select-illusion-savant-spell-up-to-rank-3',
  { archetypes: [Wizard, Spells.Illusion, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  'Illusion Savant',
  PreparedSpellLoadout
)

export const IllusionSavantRank3 = Traits.defineTrait('wizard/illusion-savant-rank-3', {
  name: 'Illusion Savant (Rank 3)',
  description:
    '<p>You gained a new level of spell slots: add one Illusion spell of level 3 or lower from the Wizard list to your spellbook for free.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainCharacterOption(SelectIllusionSavantSpellUpToRank3)],
})

export const IllusionSavant = Traits.defineTrait('wizard/illusion-savant', {
  name: 'Illusion Savant',
  description:
    '<p>Add two Illusion spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Illusion spell you can cast for free.</p>',
  effects: [
    Effects.gainCharacterOption(SelectIllusionSavantSpell),
    Effects.gainCharacterOption(SelectIllusionSavantSpell),
    Effects.gainTrait(IllusionSavantRank3),
  ],
})

export const ImprovedIllusions = Abilities.defineAbility('wizard/improved-illusions', {
  name: 'Improved Illusions',
  effects: [
    Effects.descriptive('<p>Your Illusion spells need no Verbal components, and those with a range of 10 feet or more gain 60 feet of range.</p>'),
    Effects.descriptive(
      '<p>You also learn <strong>Minor Illusion</strong> (or another Wizard cantrip if you already know it) without it counting against your cantrips. You can cast it as a Bonus Action and create both a sound and an image with one casting.</p>'
    ),
  ],
})

export const Illusionist = Traits.defineTrait('wizard/illusionist', {
  name: 'Illusionist',
  description: '<p>A master of magic that <strong>dazzles the senses and tricks the mind</strong>, making the impossible seem real.</p>',
  archetypes: [WizardSubclass],
  effects: [Effects.gainTrait(IllusionSavant), Effects.gainAbility(ImprovedIllusions)],
})
