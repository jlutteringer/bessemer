import { Abilities, Archetypes, Attributes, Effects, Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'
import * as SkillProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/skill-proficiency'
import * as Spells from '@simulacrum/rulesets/dnd-5e/archetype/spell'
import * as SkillExpertise from '@simulacrum/rulesets/dnd-5e/archetype/skill-expertise'
import { SelectFeat } from '@simulacrum/rulesets/dnd-5e/archetype/feat'
import { CharacterOptions } from '@simulacrum/common/character'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { Patches } from '@bessemer/cornerstone'

// FUTURE these abilities are stubs: spells, spell slots, and the spellbook aren't modelled yet

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

export const SpellList = [
  Spells.Alarm,
  Spells.BurningHands,
  Spells.CharmPerson,
  Spells.ChromaticOrb,
  Spells.ColorSpray,
  Spells.ComprehendLanguages,
  Spells.DetectMagic,
  Spells.DisguiseSelf,
  Spells.ExpeditiousRetreat,
  Spells.FalseLife,
  Spells.FeatherFall,
  Spells.FindFamiliar,
  Spells.FogCloud,
  Spells.Grease,
  Spells.IceKnife,
  Spells.Identify,
  Spells.IllusoryScript,
  Spells.Jump,
  Spells.Longstrider,
  Spells.MageArmor,
  Spells.MagicMissile,
  Spells.ProtectionFromEvilAndGood,
  Spells.RayOfSickness,
  Spells.Shield,
  Spells.SilentImage,
  Spells.Sleep,
  Spells.TashasHideousLaughter,
  Spells.TensersFloatingDisk,
  Spells.Thunderwave,
  Spells.UnseenServant,
  Spells.WitchBolt,
  Spells.AlterSelf,
  Spells.ArcaneLock,
  Spells.ArcaneVigor,
  Spells.Augury,
  Spells.BlindnessDeafness,
  Spells.Blur,
  Spells.CloudOfDaggers,
  Spells.ContinualFlame,
  Spells.CrownOfMadness,
  Spells.Darkness,
  Spells.Darkvision,
  Spells.DetectThoughts,
  Spells.DragonsBreath,
  Spells.EnhanceAbility,
  Spells.EnlargeReduce,
  Spells.FlamingSphere,
  Spells.GentleRepose,
  Spells.GustOfWind,
  Spells.HoldPerson,
  Spells.Invisibility,
  Spells.Knock,
  Spells.Levitate,
  Spells.LocateObject,
  Spells.MagicMouth,
  Spells.MagicWeapon,
  Spells.MelfsAcidArrow,
  Spells.MindSpike,
  Spells.MirrorImage,
  Spells.MistyStep,
  Spells.NystulsMagicAura,
  Spells.PhantasmalForce,
  Spells.RayOfEnfeeblement,
  Spells.RopeTrick,
  Spells.ScorchingRay,
  Spells.SeeInvisibility,
  Spells.Shatter,
  Spells.SpiderClimb,
  Spells.Suggestion,
  Spells.Web,
  Spells.AnimateDead,
  Spells.BestowCurse,
  Spells.Blink,
  Spells.Clairvoyance,
  Spells.Counterspell,
  Spells.DispelMagic,
  Spells.Fear,
  Spells.FeignDeath,
  Spells.Fireball,
  Spells.Fly,
  Spells.GaseousForm,
  Spells.GlyphOfWarding,
  Spells.Haste,
  Spells.HypnoticPattern,
  Spells.LeomundsTinyHut,
  Spells.LightningBolt,
  Spells.MagicCircle,
  Spells.MajorImage,
  Spells.Nondetection,
  Spells.PhantomSteed,
  Spells.ProtectionFromEnergy,
  Spells.RemoveCurse,
  Spells.Sending,
  Spells.SleetStorm,
  Spells.Slow,
  Spells.SpeakWithDead,
  Spells.StinkingCloud,
  Spells.SummonFey,
  Spells.SummonUndead,
  Spells.Tongues,
  Spells.VampiricTouch,
  Spells.WaterBreathing,
]

// Spells added to the spellbook: six at level 1, then two per level of a rank the Wizard can cast
export const SelectSpellUpToRank1 = CharacterOptions.selectTraitOption(
  'wizard/select-spell-up-to-rank-1',
  {
    archetypes: Spells.UpToRank1,
    specificOptions: SpellList,
  },
  'Spells Known'
)

export const SelectSpellUpToRank2 = CharacterOptions.selectTraitOption(
  'wizard/select-spell-up-to-rank-2',
  {
    archetypes: Spells.UpToRank2,
    specificOptions: SpellList,
  },
  'Spells Known'
)

export const SelectSpellUpToRank3 = CharacterOptions.selectTraitOption(
  'wizard/select-spell-up-to-rank-3',
  {
    archetypes: Spells.UpToRank3,
    specificOptions: SpellList,
  },
  'Spells Known'
)

export const Spellcasting = Abilities.defineAbility('wizard/spellcasting', {
  name: 'Spellcasting',
  description:
    '<p>You cast Wizard spells using <strong>Intelligence</strong>, with an Arcane Focus or your spellbook as your focus. You know three cantrips, gaining a fourth at level 4, and can swap one after a Long Rest.</p><p>Your <strong>spellbook</strong> starts with six level 1 Wizard spells, and you add two more each time you gain a Wizard level, of a level you have slots for. You can also copy spells you find into it (2 hours and 50 GP per spell level).</p><p>After a Long Rest, you prepare a list of spells from the book to cast with your spell slots: 4 at level 1, rising to 9 by level 5. You regain all spell slots on a Long Rest.</p>',
  actions: [],
})

export const RitualAdept = Abilities.defineAbility('wizard/ritual-adept', {
  name: 'Ritual Adept',
  description: '<p>You can cast any Ritual spell in your spellbook as a ritual without preparing it, as long as you read it from the book.</p>',
  actions: [],
})

export const ArcaneRecovery = Abilities.defineAbility('wizard/arcane-recovery', {
  name: 'Arcane Recovery',
  description:
    '<p>Once per Long Rest, when you finish a Short Rest, you can recover expended spell slots with a combined level of up to half your Wizard level (rounded up). None of them can be level 6 or higher.</p>',
  actions: [],
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
    Effects.gainAbility(RitualAdept),
    Effects.gainAbility(ArcaneRecovery),
  ],
})

// Expertise in one skill the Wizard is already proficient in; each Expertise trait requires its matching proficiency
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
    Effects.gainCharacterOption(SelectWizardSubclass),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

export const AbjurationSavant = Abilities.defineAbility('wizard/abjuration-savant', {
  name: 'Abjuration Savant',
  description:
    '<p>Add two Abjuration spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Abjuration spell you can cast for free.</p>',
  actions: [],
})

// Spells from the Savant feature are added to the spellbook for free, on top of the ones gained each level
export const SelectAbjurationSavantSpell = CharacterOptions.selectTraitOption(
  'wizard/select-abjuration-savant-spell',
  { archetypes: [Spells.Rank1, Spells.Rank2, Spells.Abjuration], specificOptions: SpellList },
  'Abjuration Savant'
)

export const ArcaneWard = Abilities.defineAbility('wizard/arcane-ward', {
  name: 'Arcane Ward',
  description:
    '<p>When you cast an Abjuration spell with a spell slot, you can create a protective ward on yourself that lasts until you finish a Long Rest (once per Long Rest). It has maximum Hit Points equal to twice your Wizard level + your Intelligence modifier and absorbs damage you take, with any excess passing through to you.</p><p>The ward regains Hit Points equal to twice the slot level whenever you cast an Abjuration spell with a slot, or when you spend a slot as a Bonus Action.</p>',
  actions: [],
})

export const Abjurer = Traits.defineTrait('wizard/abjurer', {
  name: 'Abjurer',
  description:
    '<p>A specialist in magic that <strong>blocks, banishes, and protects</strong>, sought out to exorcise spirits, guard against scrying, and close planar portals.</p>',
  archetypes: [WizardSubclass],
  effects: [
    Effects.gainAbility(AbjurationSavant),
    Effects.gainCharacterOption(SelectAbjurationSavantSpell),
    Effects.gainCharacterOption(SelectAbjurationSavantSpell),
    Effects.gainAbility(ArcaneWard),
  ],
})

export const DivinationSavant = Abilities.defineAbility('wizard/divination-savant', {
  name: 'Divination Savant',
  description:
    '<p>Add two Divination spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Divination spell you can cast for free.</p>',
  actions: [],
})

export const SelectDivinationSavantSpell = CharacterOptions.selectTraitOption(
  'wizard/select-divination-savant-spell',
  { archetypes: [Spells.Rank1, Spells.Rank2, Spells.Divination], specificOptions: SpellList },
  'Divination Savant'
)

export const Portent = Abilities.defineAbility('wizard/portent', {
  name: 'Portent',
  description:
    '<p>After each Long Rest, roll two d20s and record the results. Before a D20 Test is rolled by you or a creature you can see, you can replace it with one of these results (once per turn). Each result can be used once, and unused ones are lost on your next Long Rest.</p>',
  actions: [],
})

export const Diviner = Traits.defineTrait('wizard/diviner', {
  name: 'Diviner',
  description:
    '<p>A seer who works to part the veils of <strong>space, time, and consciousness</strong>, mastering spells of discernment, remote viewing, and foresight.</p>',
  archetypes: [WizardSubclass],
  effects: [
    Effects.gainAbility(DivinationSavant),
    Effects.gainCharacterOption(SelectDivinationSavantSpell),
    Effects.gainCharacterOption(SelectDivinationSavantSpell),
    Effects.gainAbility(Portent),
  ],
})

export const EvocationSavant = Abilities.defineAbility('wizard/evocation-savant', {
  name: 'Evocation Savant',
  description:
    '<p>Add two Evocation spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Evocation spell you can cast for free.</p>',
  actions: [],
})

export const SelectEvocationSavantSpell = CharacterOptions.selectTraitOption(
  'wizard/select-evocation-savant-spell',
  { archetypes: [Spells.Rank1, Spells.Rank2, Spells.Evocation], specificOptions: SpellList },
  'Evocation Savant'
)

export const PotentCantrip = Abilities.defineAbility('wizard/potent-cantrip', {
  name: 'Potent Cantrip',
  description:
    "<p>When a creature avoids your cantrip, because your attack roll misses or it succeeds on its save, it still takes half the cantrip's damage but none of its other effects.</p>",
  actions: [],
})

export const Evoker = Traits.defineTrait('wizard/evoker', {
  name: 'Evoker',
  description:
    '<p>A wielder of <strong>explosive elemental magic</strong> such as frost, flame, thunder, lightning, and acid, often valued as living artillery.</p>',
  archetypes: [WizardSubclass],
  effects: [
    Effects.gainAbility(EvocationSavant),
    Effects.gainCharacterOption(SelectEvocationSavantSpell),
    Effects.gainCharacterOption(SelectEvocationSavantSpell),
    Effects.gainAbility(PotentCantrip),
  ],
})

export const IllusionSavant = Abilities.defineAbility('wizard/illusion-savant', {
  name: 'Illusion Savant',
  description:
    '<p>Add two Illusion spells of level 2 or lower from the Wizard list to your spellbook for free. Each time you gain a new level of spell slots, add one more Illusion spell you can cast for free.</p>',
  actions: [],
})

export const SelectIllusionSavantSpell = CharacterOptions.selectTraitOption(
  'wizard/select-illusion-savant-spell',
  { archetypes: [Spells.Rank1, Spells.Rank2, Spells.Illusion], specificOptions: SpellList },
  'Illusion Savant'
)

export const ImprovedIllusions = Abilities.defineAbility('wizard/improved-illusions', {
  name: 'Improved Illusions',
  description:
    '<p>Your Illusion spells need no Verbal components, and those with a range of 10 feet or more gain 60 feet of range.</p><p>You also learn <strong>Minor Illusion</strong> (or another Wizard cantrip if you already know it) without it counting against your cantrips. You can cast it as a Bonus Action and create both a sound and an image with one casting.</p>',
  actions: [],
})

export const Illusionist = Traits.defineTrait('wizard/illusionist', {
  name: 'Illusionist',
  description: '<p>A master of magic that <strong>dazzles the senses and tricks the mind</strong>, making the impossible seem real.</p>',
  archetypes: [WizardSubclass],
  effects: [
    Effects.gainAbility(IllusionSavant),
    Effects.gainCharacterOption(SelectIllusionSavantSpell),
    Effects.gainCharacterOption(SelectIllusionSavantSpell),
    Effects.gainAbility(ImprovedIllusions),
  ],
})

export const Level4 = Traits.defineTrait('wizard/level-4', {
  name: 'Wizard (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))),
    // Ability Score Improvement
    Effects.gainCharacterOption(SelectFeat),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

export const MemorizeSpell = Abilities.defineAbility('wizard/memorize-spell', {
  name: 'Memorize Spell',
  description:
    '<p>When you finish a Short Rest, you can swap one of your prepared level 1+ Wizard spells for another level 1+ spell in your spellbook.</p>',
  actions: [],
})

export const Level5 = Traits.defineTrait('wizard/level-5', {
  name: 'Wizard (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))),
    Effects.gainCharacterOption(SelectSpellUpToRank3),
    Effects.gainCharacterOption(SelectSpellUpToRank3),
    Effects.gainAbility(MemorizeSpell),
  ],
})
