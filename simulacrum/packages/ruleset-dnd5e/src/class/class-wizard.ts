import { Abilities, Tags, Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/tag/saving-throw-proficiency'
import { Class, Wizard } from '@simulacrum/ruleset-dnd5e/tag'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/tag/skill-proficiency'
import * as Spells from '@simulacrum/ruleset-dnd5e/tag/spell'
import * as SkillExpertise from '@simulacrum/ruleset-dnd5e/tag/skill-expertise'
import { SelectFeat } from '@simulacrum/ruleset-dnd5e/tag/feat'
import { CharacterOptions } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import { Arrays, Patches } from '@bessemer/cornerstone'
import { CantripLoadout, PreparedSpellLoadout } from '@simulacrum/ruleset-dnd5e/loadout'

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('wizard/select-skill-proficiency', {
  name: 'Skill Proficiency',
  filter: {
    tags: [SkillProficiencies.SkillProficiency],
    specificOptions: [
      SkillProficiencies.Arcana,
      SkillProficiencies.History,
      SkillProficiencies.Insight,
      SkillProficiencies.Investigation,
      SkillProficiencies.Medicine,
      SkillProficiencies.Nature,
      SkillProficiencies.Religion,
    ],
  },
})

export const SelectSpellUpToRank1 = CharacterOptions.selectAbilityOption('wizard/select-spell-up-to-rank-1', {
  name: 'Spells Known',
  filter: { tags: [Wizard, [Spells.Rank1]] },
  loadout: PreparedSpellLoadout,
})

export const SelectSpellUpToRank2 = CharacterOptions.selectAbilityOption('wizard/select-spell-up-to-rank-2', {
  name: 'Spells Known',
  filter: { tags: [Wizard, [Spells.Rank1, Spells.Rank2]] },
  loadout: PreparedSpellLoadout,
})

export const SelectSpellUpToRank3 = CharacterOptions.selectAbilityOption('wizard/select-spell-up-to-rank-3', {
  name: 'Spells Known',
  filter: { tags: [Wizard, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  loadout: PreparedSpellLoadout,
})

export const Level1 = Traits.defineTrait('wizard/level-1', {
  name: 'Wizard',
  description: 'A scholar of arcane magic who records spells in a **spellbook** and casts them with **Intelligence**.',
  tags: [Class],
  effects: [
    CharacterEffects.gainTrait(SavingThrowProficiencies.Intelligence),
    CharacterEffects.gainTrait(SavingThrowProficiencies.Wisdom),
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(6))),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    ...Spells.All.filter((it) => Arrays.containsAll(it.tags, [Wizard.id, Spells.Cantrip.id])).map((it) =>
      CharacterEffects.gainAbility(it, CantripLoadout)
    ),
    CharacterEffects.gainLoadoutSlot(PreparedSpellLoadout),
    CharacterEffects.gainLoadoutSlot(PreparedSpellLoadout),
    CharacterEffects.gainLoadoutSlot(PreparedSpellLoadout),
    CharacterEffects.gainLoadoutSlot(PreparedSpellLoadout),
  ],
})

export const Spellcasting = Abilities.defineAbility('wizard/spellcasting', {
  name: 'Spellcasting',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  effects: [
    CharacterEffects.descriptive(
      'You cast Wizard spells using **Intelligence**, with an Arcane Focus or your spellbook as your focus. You know three cantrips, gaining a fourth at level 4, and can swap one after a Long Rest.'
    ),
    CharacterEffects.descriptive(
      'Your **spellbook** starts with six level 1 Wizard spells, and you add two more each time you gain a Wizard level, of a level you have slots for. You can also copy spells you find into it (2 hours and 50 GP per spell level).'
    ),
    CharacterEffects.descriptive(
      'After a Long Rest, you prepare a list of spells from the book to cast with your spell slots: 4 at level 1, rising to 9 by level 5. You regain all spell slots on a Long Rest.'
    ),
  ],
})

export const RitualAdept = Abilities.defineAbility('wizard/ritual-adept', {
  name: 'Ritual Adept',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  effects: [
    CharacterEffects.descriptive(
      'You can cast any Ritual spell in your spellbook as a ritual without preparing it, as long as you read it from the book.'
    ),
  ],
})

export const ArcaneRecovery = Abilities.defineAbility('wizard/arcane-recovery', {
  name: 'Arcane Recovery',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  effects: [
    CharacterEffects.descriptive(
      'Once per Long Rest, when you finish a Short Rest, you can recover expended spell slots with a combined level of up to half your Wizard level (rounded up). None of them can be level 6 or higher.'
    ),
  ],
})

export const SelectScholarExpertise = CharacterOptions.selectTraitOption('wizard/select-scholar-expertise', {
  name: 'Skill Expertise',
  filter: {
    tags: [SkillExpertise.SkillExpertise],
    specificOptions: [
      SkillExpertise.Arcana,
      SkillExpertise.History,
      SkillExpertise.Investigation,
      SkillExpertise.Medicine,
      SkillExpertise.Nature,
      SkillExpertise.Religion,
    ],
  },
})

export const Level2 = Traits.defineTrait('wizard/level-2', {
  name: 'Wizard (2)',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))),
    CharacterEffects.gainLoadoutSlot(PreparedSpellLoadout),
    CharacterEffects.gainCharacterOption(SelectScholarExpertise),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
  ],
})

export const WizardSubclass = Tags.defineTraitTag('wizard/subclass', { name: 'Wizard Subclass' })
export const SelectWizardSubclass = CharacterOptions.selectTraitOption('wizard/select-subclass', {
  name: 'Wizard Subclass',
  filter: { tags: [WizardSubclass] },
})

export const Level3 = Traits.defineTrait('wizard/level-3', {
  name: 'Wizard (3)',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))),
    CharacterEffects.gainLoadoutSlot(PreparedSpellLoadout),
    CharacterEffects.gainCharacterOption(SelectWizardSubclass),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank2),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

export const Level4 = Traits.defineTrait('wizard/level-4', {
  name: 'Wizard (4)',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))),
    CharacterEffects.gainLoadoutSlot(PreparedSpellLoadout),
    CharacterEffects.gainCharacterOption(SelectFeat),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank2),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

export const Level5 = Traits.defineTrait('wizard/level-5', {
  name: 'Wizard (5)',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))),
    CharacterEffects.gainLoadoutSlot(PreparedSpellLoadout),
    CharacterEffects.gainLoadoutSlot(PreparedSpellLoadout),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank3),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank3),
  ],
})

export const MemorizeSpell = Abilities.defineAbility('wizard/memorize-spell', {
  name: 'Memorize Spell',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [
    CharacterEffects.descriptive(
      'When you finish a Short Rest, you can swap one of your prepared level 1+ Wizard spells for another level 1+ spell in your spellbook.'
    ),
  ],
})

export const SelectAbjurationSavantSpell = CharacterOptions.selectAbilityOption('wizard/select-abjuration-savant-spell', {
  name: 'Abjuration Savant',
  filter: { tags: [Wizard, Spells.Abjuration, [Spells.Rank1, Spells.Rank2]] },
  loadout: PreparedSpellLoadout,
})

export const SelectAbjurationSavantSpellUpToRank3 = CharacterOptions.selectAbilityOption('wizard/select-abjuration-savant-spell-up-to-rank-3', {
  name: 'Abjuration Savant',
  filter: { tags: [Wizard, Spells.Abjuration, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  loadout: PreparedSpellLoadout,
})

export const AbjurationSavant = Traits.defineTrait('wizard/abjuration-savant', {
  name: 'Abjuration Savant',
  description:
    'Add two Abjuration spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Abjuration spell you can cast for free.',
  effects: [
    CharacterEffects.gainCharacterOption(SelectAbjurationSavantSpell),
    CharacterEffects.gainCharacterOption(SelectAbjurationSavantSpell),
    CharacterEffects.conditional(Traits.traitPrerequisite(Level5), [CharacterEffects.gainCharacterOption(SelectAbjurationSavantSpellUpToRank3)]),
  ],
})

export const Abjurer = Traits.defineTrait('wizard/abjurer', {
  name: 'Abjurer',
  description:
    'A specialist in magic that **blocks, banishes, and protects**, sought out to exorcise spirits, guard against scrying, and close planar portals.',
  tags: [WizardSubclass],
  effects: [CharacterEffects.gainTrait(AbjurationSavant)],
})

export const ArcaneWard = Abilities.defineAbility('wizard/arcane-ward', {
  name: 'Arcane Ward',
  prerequisites: [Traits.traitPrerequisite(Abjurer)],
  effects: [
    CharacterEffects.descriptive(
      'When you cast an Abjuration spell with a spell slot, you can create a protective ward on yourself that lasts until you finish a Long Rest (once per Long Rest). It has maximum Hit Points equal to twice your Wizard level + your Intelligence modifier and absorbs damage you take, with any excess passing through to you.\n\nThe ward regains Hit Points equal to twice the slot level whenever you cast an Abjuration spell with a slot, or when you spend a slot as a Bonus Action.'
    ),
  ],
})

export const SelectDivinationSavantSpell = CharacterOptions.selectAbilityOption('wizard/select-divination-savant-spell', {
  name: 'Divination Savant',
  filter: { tags: [Wizard, Spells.Divination, [Spells.Rank1, Spells.Rank2]] },
  loadout: PreparedSpellLoadout,
})

export const SelectDivinationSavantSpellUpToRank3 = CharacterOptions.selectAbilityOption('wizard/select-divination-savant-spell-up-to-rank-3', {
  name: 'Divination Savant',
  filter: { tags: [Wizard, Spells.Divination, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  loadout: PreparedSpellLoadout,
})

export const DivinationSavant = Traits.defineTrait('wizard/divination-savant', {
  name: 'Divination Savant',
  description:
    'Add two Divination spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Divination spell you can cast for free.',
  effects: [
    CharacterEffects.gainCharacterOption(SelectDivinationSavantSpell),
    CharacterEffects.gainCharacterOption(SelectDivinationSavantSpell),
    CharacterEffects.conditional(Traits.traitPrerequisite(Level5), [CharacterEffects.gainCharacterOption(SelectDivinationSavantSpellUpToRank3)]),
  ],
})

export const Diviner = Traits.defineTrait('wizard/diviner', {
  name: 'Diviner',
  description:
    'A seer who works to part the veils of **space, time, and consciousness**, mastering spells of discernment, remote viewing, and foresight.',
  tags: [WizardSubclass],
  effects: [CharacterEffects.gainTrait(DivinationSavant)],
})

export const Portent = Abilities.defineAbility('wizard/portent', {
  name: 'Portent',
  prerequisites: [Traits.traitPrerequisite(Diviner)],
  effects: [
    CharacterEffects.descriptive(
      'After each Long Rest, roll two d20s and record the results. Before a D20 Test is rolled by you or a creature you can see, you can replace it with one of these results (once per turn). Each result can be used once, and unused ones are lost on your next Long Rest.'
    ),
  ],
})

export const SelectEvocationSavantSpell = CharacterOptions.selectAbilityOption('wizard/select-evocation-savant-spell', {
  name: 'Evocation Savant',
  filter: { tags: [Wizard, Spells.Evocation, [Spells.Rank1, Spells.Rank2]] },
  loadout: PreparedSpellLoadout,
})

export const SelectEvocationSavantSpellUpToRank3 = CharacterOptions.selectAbilityOption('wizard/select-evocation-savant-spell-up-to-rank-3', {
  name: 'Evocation Savant',
  filter: { tags: [Wizard, Spells.Evocation, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  loadout: PreparedSpellLoadout,
})

export const EvocationSavant = Traits.defineTrait('wizard/evocation-savant', {
  name: 'Evocation Savant',
  description:
    'Add two Evocation spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Evocation spell you can cast for free.',
  effects: [
    CharacterEffects.gainCharacterOption(SelectEvocationSavantSpell),
    CharacterEffects.gainCharacterOption(SelectEvocationSavantSpell),
    CharacterEffects.conditional(Traits.traitPrerequisite(Level5), [CharacterEffects.gainCharacterOption(SelectEvocationSavantSpellUpToRank3)]),
  ],
})

export const Evoker = Traits.defineTrait('wizard/evoker', {
  name: 'Evoker',
  description: 'A wielder of **explosive elemental magic** such as frost, flame, thunder, lightning, and acid, often valued as living artillery.',
  tags: [WizardSubclass],
  effects: [CharacterEffects.gainTrait(EvocationSavant)],
})

export const PotentCantrip = Abilities.defineAbility('wizard/potent-cantrip', {
  name: 'Potent Cantrip',
  prerequisites: [Traits.traitPrerequisite(Evoker)],
  effects: [
    CharacterEffects.descriptive(
      "When a creature avoids your cantrip, because your attack roll misses or it succeeds on its save, it still takes half the cantrip's damage but none of its other effects."
    ),
  ],
})

export const SelectIllusionSavantSpell = CharacterOptions.selectAbilityOption('wizard/select-illusion-savant-spell', {
  name: 'Illusion Savant',
  filter: { tags: [Wizard, Spells.Illusion, [Spells.Rank1, Spells.Rank2]] },
  loadout: PreparedSpellLoadout,
})

export const SelectIllusionSavantSpellUpToRank3 = CharacterOptions.selectAbilityOption('wizard/select-illusion-savant-spell-up-to-rank-3', {
  name: 'Illusion Savant',
  filter: { tags: [Wizard, Spells.Illusion, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  loadout: PreparedSpellLoadout,
})

export const IllusionSavant = Traits.defineTrait('wizard/illusion-savant', {
  name: 'Illusion Savant',
  description:
    'Add two Illusion spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Illusion spell you can cast for free.',
  effects: [
    CharacterEffects.gainCharacterOption(SelectIllusionSavantSpell),
    CharacterEffects.gainCharacterOption(SelectIllusionSavantSpell),
    CharacterEffects.conditional(Traits.traitPrerequisite(Level5), [CharacterEffects.gainCharacterOption(SelectIllusionSavantSpellUpToRank3)]),
  ],
})

export const Illusionist = Traits.defineTrait('wizard/illusionist', {
  name: 'Illusionist',
  description: 'A master of magic that **dazzles the senses and tricks the mind**, making the impossible seem real.',
  tags: [WizardSubclass],
  effects: [CharacterEffects.gainTrait(IllusionSavant)],
})

export const ImprovedIllusions = Abilities.defineAbility('wizard/improved-illusions', {
  name: 'Improved Illusions',
  prerequisites: [Traits.traitPrerequisite(Illusionist)],
  effects: [
    CharacterEffects.descriptive('Your Illusion spells need no Verbal components, and those with a range of 10 feet or more gain 60 feet of range.'),
    CharacterEffects.descriptive(
      'You also learn **Minor Illusion** (or another Wizard cantrip if you already know it) without it counting against your cantrips. You can cast it as a Bonus Action and create both a sound and an image with one casting.'
    ),
  ],
})
