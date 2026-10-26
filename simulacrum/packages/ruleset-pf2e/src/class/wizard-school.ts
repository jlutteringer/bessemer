import { Tags, Attributes, CharacterOptions, CharacterValues, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import * as Spells from '@simulacrum/ruleset-pf2e/spell/spell'
import * as WizardFocusSpells from '@simulacrum/ruleset-pf2e/class/wizard-focus-spell'
import { ClassFeature } from '@simulacrum/ruleset-pf2e/tag'
import {
  CantripLoadout,
  SpellRank1Loadout,
  SpellRank2Loadout,
  SpellRank3Loadout,
  SpellRank4Loadout,
  SpellRank5Loadout,
} from '@simulacrum/ruleset-pf2e/loadout'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import { DrainBondedItem, SelectSpellbookRank1, SelectWizardFeat1 } from '@simulacrum/ruleset-pf2e/class/wizard-feature'

export const ArcaneSchool = Tags.defineTraitTag('wizard/arcane-school', { name: 'Arcane School' })

export const SelectArsGrammaticaCurriculumRank1 = CharacterOptions.selectAbilityOption(
  'wizard/arcane-school/ars-grammatica/select-curriculum-rank-1',
  {
    name: 'Curriculum Spell (Rank 1)',
    filter: { specificOptions: [Spells.Command, Spells.DisguiseMagic, Spells.RunicBody, Spells.RunicWeapon] },
    loadout: SpellRank1Loadout,
  }
)

export const SelectArsGrammaticaCurriculumRank2 = CharacterOptions.selectAbilityOption(
  'wizard/arcane-school/ars-grammatica/select-curriculum-rank-2',
  {
    name: 'Curriculum Spell (Rank 2)',
    filter: { specificOptions: [Spells.DispelMagic, Spells.Translate] },
    loadout: SpellRank2Loadout,
  }
)

export const SelectArsGrammaticaCurriculumRank3 = CharacterOptions.selectAbilityOption(
  'wizard/arcane-school/ars-grammatica/select-curriculum-rank-3',
  {
    name: 'Curriculum Spell (Rank 3)',
    filter: { specificOptions: [Spells.Enthrall, Spells.VeilOfPrivacy] },
    loadout: SpellRank3Loadout,
  }
)

export const SelectArsGrammaticaCurriculumRank4 = CharacterOptions.selectAbilityOption(
  'wizard/arcane-school/ars-grammatica/select-curriculum-rank-4',
  {
    name: 'Curriculum Spell (Rank 4)',
    filter: { specificOptions: [Spells.DispellingGlobe, Spells.Suggestion] },
    loadout: SpellRank4Loadout,
  }
)

export const SelectArsGrammaticaCurriculumRank5 = CharacterOptions.selectAbilityOption(
  'wizard/arcane-school/ars-grammatica/select-curriculum-rank-5',
  {
    name: 'Curriculum Spell (Rank 5)',
    filter: { specificOptions: [Spells.Sending, Spells.Truespeech] },
    loadout: SpellRank5Loadout,
  }
)

export const ArsGrammatica = Traits.defineTrait('wizard/arcane-school/ars-grammatica', {
  name: 'School of Ars Grammatica',
  description:
    "Runes and wards, numbers and letters—they underpin all magic, making them the logical subject for a wizard who studies fundamental forces. Perhaps you studied at the Pathfinder Society's School of Spells or a similar institution, but whether you're lacing your words with magic to compel others, casting wards around your workshop, or destabilizing the very structure of an opponent's spells, you know this unassuming school carries elegant power.\n\n**Curriculum**\n- Cantrips: Message, Sigil\n- 1st: Command, Disguise Magic, Runic Body, Runic Weapon\n- 2nd: Dispel Magic, Translate\n- 3rd: Enthrall, Veil of Privacy\n- 4th: Dispelling Globe, Suggestion\n- 5th: Sending, Truespeech\n- 6th: Repulsion, Spellwrack\n- 7th: Contingency, Planar Seal\n- 8th: Quandary, Unrelenting Observation\n- 9th: Detonate Magic\n\n**School Spells**\n- Initial: Protective Wards\n- Advanced: Rune of Observation",
  tags: [ArcaneSchool],
  effects: [
    CharacterEffects.gainAbility(WizardFocusSpells.ProtectiveWards),
    CharacterEffects.gainResourcePool(FocusPoints),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(SpellRank1Loadout),
    CharacterEffects.gainCharacterOption(SelectArsGrammaticaCurriculumRank1),
    CharacterEffects.gainCharacterOption(SelectArsGrammaticaCurriculumRank1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainLoadoutSlot(SpellRank2Loadout),
      CharacterEffects.gainCharacterOption(SelectArsGrammaticaCurriculumRank2),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainLoadoutSlot(SpellRank3Loadout),
      CharacterEffects.gainCharacterOption(SelectArsGrammaticaCurriculumRank3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainLoadoutSlot(SpellRank4Loadout),
      CharacterEffects.gainCharacterOption(SelectArsGrammaticaCurriculumRank4),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainLoadoutSlot(SpellRank5Loadout),
      CharacterEffects.gainCharacterOption(SelectArsGrammaticaCurriculumRank5),
    ]),
  ],
})

export const SelectBattleMagicCurriculumRank1 = CharacterOptions.selectAbilityOption('wizard/arcane-school/battle-magic/select-curriculum-rank-1', {
  name: 'Curriculum Spell (Rank 1)',
  filter: { specificOptions: [Spells.BreatheFire, Spells.ForceBarrage, Spells.MysticArmor] },
  loadout: SpellRank1Loadout,
})

export const SelectBattleMagicCurriculumRank2 = CharacterOptions.selectAbilityOption('wizard/arcane-school/battle-magic/select-curriculum-rank-2', {
  name: 'Curriculum Spell (Rank 2)',
  filter: { specificOptions: [Spells.Mist, Spells.ResistEnergy] },
  loadout: SpellRank2Loadout,
})

export const SelectBattleMagicCurriculumRank3 = CharacterOptions.selectAbilityOption('wizard/arcane-school/battle-magic/select-curriculum-rank-3', {
  name: 'Curriculum Spell (Rank 3)',
  filter: { specificOptions: [Spells.Earthbind, Spells.Fireball] },
  loadout: SpellRank3Loadout,
})

export const SelectBattleMagicCurriculumRank4 = CharacterOptions.selectAbilityOption('wizard/arcane-school/battle-magic/select-curriculum-rank-4', {
  name: 'Curriculum Spell (Rank 4)',
  filter: { specificOptions: [Spells.WallOfFire, Spells.WeaponStorm] },
  loadout: SpellRank4Loadout,
})

export const SelectBattleMagicCurriculumRank5 = CharacterOptions.selectAbilityOption('wizard/arcane-school/battle-magic/select-curriculum-rank-5', {
  name: 'Curriculum Spell (Rank 5)',
  filter: { specificOptions: [Spells.HowlingBlizzard, Spells.ImpalingSpike] },
  loadout: SpellRank5Loadout,
})

export const BattleMagic = Traits.defineTrait('wizard/arcane-school/battle-magic', {
  name: 'School of Battle Magic',
  description:
    'Magic is power, and there are always those who will use power for the art of battle. You may have studied in the military of a nation of the brink of war—Cheliax and Andoran perhaps, or Geb and Nex. You summon whirling energies that can lay waste to both soldiers and armies, while being sure not to neglect arcane countermeasures for common tactical complications or the shields and defenses that keep combatants alive on the battlefield.\n\n**Curriculum**\n- Cantrips: Shield, Telekinetic Projectile\n- 1st: Breathe Fire, Force Barrage, Mystic Armor\n- 2nd: Mist, Resist Energy\n- 3rd: Earthbind, Fireball\n- 4th: Wall of Fire, Weapon Storm\n- 5th: Howling Blizzard, Impaling Spike\n- 6th: Chain Lightning, Disintegrate\n- 7th: Energy Aegis, True Target\n- 8th: Arctic Rift, Desiccate\n- 9th: Falling Stars\n\n**School Spells**\n- Initial: Force Bolt\n- Advanced: Energy Absorption',
  tags: [ArcaneSchool],
  effects: [
    CharacterEffects.gainAbility(WizardFocusSpells.ForceBolt),
    CharacterEffects.gainResourcePool(FocusPoints),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(SpellRank1Loadout),
    CharacterEffects.gainCharacterOption(SelectBattleMagicCurriculumRank1),
    CharacterEffects.gainCharacterOption(SelectBattleMagicCurriculumRank1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainLoadoutSlot(SpellRank2Loadout),
      CharacterEffects.gainCharacterOption(SelectBattleMagicCurriculumRank2),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainLoadoutSlot(SpellRank3Loadout),
      CharacterEffects.gainCharacterOption(SelectBattleMagicCurriculumRank3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainLoadoutSlot(SpellRank4Loadout),
      CharacterEffects.gainCharacterOption(SelectBattleMagicCurriculumRank4),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainLoadoutSlot(SpellRank5Loadout),
      CharacterEffects.gainCharacterOption(SelectBattleMagicCurriculumRank5),
    ]),
  ],
})

export const SelectCivicWizardryCurriculumRank1 = CharacterOptions.selectAbilityOption(
  'wizard/arcane-school/civic-wizardry/select-curriculum-rank-1',
  {
    name: 'Curriculum Spell (Rank 1)',
    filter: { specificOptions: [Spells.HydraulicPush, Spells.PummelingRubble, Spells.SummonConstruct] },
    loadout: SpellRank1Loadout,
  }
)

export const SelectCivicWizardryCurriculumRank2 = CharacterOptions.selectAbilityOption(
  'wizard/arcane-school/civic-wizardry/select-curriculum-rank-2',
  {
    name: 'Curriculum Spell (Rank 2)',
    filter: { specificOptions: [Spells.RevealingLight, Spells.WaterWalk] },
    loadout: SpellRank2Loadout,
  }
)

export const SelectCivicWizardryCurriculumRank3 = CharacterOptions.selectAbilityOption(
  'wizard/arcane-school/civic-wizardry/select-curriculum-rank-3',
  {
    name: 'Curriculum Spell (Rank 3)',
    filter: { specificOptions: [Spells.CozyCabin, Spells.SafePassage] },
    loadout: SpellRank3Loadout,
  }
)

export const SelectCivicWizardryCurriculumRank4 = CharacterOptions.selectAbilityOption(
  'wizard/arcane-school/civic-wizardry/select-curriculum-rank-4',
  {
    name: 'Curriculum Spell (Rank 4)',
    filter: { specificOptions: [Spells.Creation, Spells.UnfetteredMovement] },
    loadout: SpellRank4Loadout,
  }
)

export const SelectCivicWizardryCurriculumRank5 = CharacterOptions.selectAbilityOption(
  'wizard/arcane-school/civic-wizardry/select-curriculum-rank-5',
  {
    name: 'Curriculum Spell (Rank 5)',
    filter: { specificOptions: [Spells.ControlWater, Spells.WallOfStone] },
    loadout: SpellRank5Loadout,
  }
)

export const CivicWizardry = Traits.defineTrait('wizard/arcane-school/civic-wizardry', {
  name: 'School of Civic Wizardry',
  description:
    "Whether you studied in Manaket's Occularium or the Academy of Applied Magic, you learned that the fruits of arcane studies—like any other field—should ultimately help the common citizen. You've learned the humble art of construction, of finding lost people and things, of moving speedily among buildings and moats—yet these same arts can be turned to demolition, and the constructs you animate to build bridges can just as easily tear them down.\n\n**Curriculum**\n- Cantrips: Prestidigitation, Read Aura\n- 1st: Hydraulic Push, Pummeling Rubble, Summon Construct\n- 2nd: Revealing Light, Water Walk\n- 3rd: Cozy Cabin, Safe Passage\n- 4th: Creation, Unfettered Movement\n- 5th: Control Water, Wall of Stone\n- 6th: Disintegrate, Wall of Force\n- 7th: Planar Palace, Retrocognition\n- 8th: Earthquake, Pinpoint\n- 9th: Foresight\n\n**School Spells**\n- Initial: Earthworks\n- Advanced: Community Restoration",
  tags: [ArcaneSchool],
  effects: [
    CharacterEffects.gainAbility(WizardFocusSpells.Earthworks),
    CharacterEffects.gainResourcePool(FocusPoints),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(SpellRank1Loadout),
    CharacterEffects.gainCharacterOption(SelectCivicWizardryCurriculumRank1),
    CharacterEffects.gainCharacterOption(SelectCivicWizardryCurriculumRank1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainLoadoutSlot(SpellRank2Loadout),
      CharacterEffects.gainCharacterOption(SelectCivicWizardryCurriculumRank2),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainLoadoutSlot(SpellRank3Loadout),
      CharacterEffects.gainCharacterOption(SelectCivicWizardryCurriculumRank3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainLoadoutSlot(SpellRank4Loadout),
      CharacterEffects.gainCharacterOption(SelectCivicWizardryCurriculumRank4),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainLoadoutSlot(SpellRank5Loadout),
      CharacterEffects.gainCharacterOption(SelectCivicWizardryCurriculumRank5),
    ]),
  ],
})

export const SelectMentalismCurriculumRank1 = CharacterOptions.selectAbilityOption('wizard/arcane-school/mentalism/select-curriculum-rank-1', {
  name: 'Curriculum Spell (Rank 1)',
  filter: { specificOptions: [Spells.DizzyingColors, Spells.Sleep, Spells.SureStrike] },
  loadout: SpellRank1Loadout,
})

export const SelectMentalismCurriculumRank2 = CharacterOptions.selectAbilityOption('wizard/arcane-school/mentalism/select-curriculum-rank-2', {
  name: 'Curriculum Spell (Rank 2)',
  filter: { specificOptions: [Spells.IllusoryCreature, Spells.Stupefy] },
  loadout: SpellRank2Loadout,
})

export const SelectMentalismCurriculumRank3 = CharacterOptions.selectAbilityOption('wizard/arcane-school/mentalism/select-curriculum-rank-3', {
  name: 'Curriculum Spell (Rank 3)',
  filter: { specificOptions: [Spells.DreamMessage, Spells.MindReading] },
  loadout: SpellRank3Loadout,
})

export const SelectMentalismCurriculumRank4 = CharacterOptions.selectAbilityOption('wizard/arcane-school/mentalism/select-curriculum-rank-4', {
  name: 'Curriculum Spell (Rank 4)',
  filter: { specificOptions: [Spells.Nightmare, Spells.VisionOfDeath] },
  loadout: SpellRank4Loadout,
})

export const SelectMentalismCurriculumRank5 = CharacterOptions.selectAbilityOption('wizard/arcane-school/mentalism/select-curriculum-rank-5', {
  name: 'Curriculum Spell (Rank 5)',
  filter: { specificOptions: [Spells.Hallucination, Spells.IllusoryScene] },
  loadout: SpellRank5Loadout,
})

export const Mentalism = Traits.defineTrait('wizard/arcane-school/mentalism', {
  name: 'School of Mentalism',
  description:
    'As a scholar, you know all too well the importance of a sound mind. Thus, you attended a school—like the Farseer Tower or the Stone of the Seers—that taught the arts of befuddling lesser minds with figments and illusions or implanted sensations and memories.\n\n**Curriculum**\n- Cantrips: Daze, Figment\n- 1st: Dizzying Colors, Sleep, Sure Strike\n- 2nd: Illusory Creature, Stupefy\n- 3rd: Dream Message, Mind Reading\n- 4th: Nightmare, Vision of Death\n- 5th: Hallucination, Illusory Scene\n- 6th: Never Mind, Phantasmal Calamity\n- 7th: Project Image, Warp Mind\n- 8th: Disappearance, Uncontrollable Dance\n- 9th: Phantasmagoria\n\n**School Spells**\n- Initial: Charming Push\n- Advanced: Invisibility Cloak',
  tags: [ArcaneSchool],
  effects: [
    CharacterEffects.gainAbility(WizardFocusSpells.CharmingPush),
    CharacterEffects.gainResourcePool(FocusPoints),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(SpellRank1Loadout),
    CharacterEffects.gainCharacterOption(SelectMentalismCurriculumRank1),
    CharacterEffects.gainCharacterOption(SelectMentalismCurriculumRank1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainLoadoutSlot(SpellRank2Loadout),
      CharacterEffects.gainCharacterOption(SelectMentalismCurriculumRank2),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainLoadoutSlot(SpellRank3Loadout),
      CharacterEffects.gainCharacterOption(SelectMentalismCurriculumRank3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainLoadoutSlot(SpellRank4Loadout),
      CharacterEffects.gainCharacterOption(SelectMentalismCurriculumRank4),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainLoadoutSlot(SpellRank5Loadout),
      CharacterEffects.gainCharacterOption(SelectMentalismCurriculumRank5),
    ]),
  ],
})

export const SelectProteanFormCurriculumRank1 = CharacterOptions.selectAbilityOption('wizard/arcane-school/protean-form/select-curriculum-rank-1', {
  name: 'Curriculum Spell (Rank 1)',
  filter: { specificOptions: [Spells.Jump, Spells.PestForm, Spells.SpiderSting] },
  loadout: SpellRank1Loadout,
})

export const SelectProteanFormCurriculumRank2 = CharacterOptions.selectAbilityOption('wizard/arcane-school/protean-form/select-curriculum-rank-2', {
  name: 'Curriculum Spell (Rank 2)',
  filter: { specificOptions: [Spells.Enlarge, Spells.HumanoidForm] },
  loadout: SpellRank2Loadout,
})

export const SelectProteanFormCurriculumRank3 = CharacterOptions.selectAbilityOption('wizard/arcane-school/protean-form/select-curriculum-rank-3', {
  name: 'Curriculum Spell (Rank 3)',
  filter: { specificOptions: [Spells.FeetToFins, Spells.VampiricFeast] },
  loadout: SpellRank3Loadout,
})

export const SelectProteanFormCurriculumRank4 = CharacterOptions.selectAbilityOption('wizard/arcane-school/protean-form/select-curriculum-rank-4', {
  name: 'Curriculum Spell (Rank 4)',
  filter: { specificOptions: [Spells.MountainResilience, Spells.VaporForm] },
  loadout: SpellRank4Loadout,
})

export const SelectProteanFormCurriculumRank5 = CharacterOptions.selectAbilityOption('wizard/arcane-school/protean-form/select-curriculum-rank-5', {
  name: 'Curriculum Spell (Rank 5)',
  filter: { specificOptions: [Spells.ElementalForm, Spells.ToxicCloud] },
  loadout: SpellRank5Loadout,
})

export const ProteanForm = Traits.defineTrait('wizard/arcane-school/protean-form', {
  name: 'School of Protean Form',
  description:
    "The uninitiated often think of wizards as cerebral, focused on their studies more than the body, yet your school of magic taught of the relationship between the two. Your magic, whether learned at a storied institution like Kintargo's Alabaster Academy or someplace more sinister, like the Fleshforges of Nex, focuses on the ways that living matter can be convinced into another shape for a time, allowing you to polymorph a seed into a vine, a human into a beast, or a harmless germ into a deadly toxin.\n\n**Curriculum**\n- Cantrips: Gouging Claw, Tangle Vine\n- 1st: Jump, Pest Form, Spider Sting\n- 2nd: Enlarge, Humanoid Form\n- 3rd: Feet to Fins, Vampiric Feast\n- 4th: Mountain Resilience, Vapor Form\n- 5th: Elemental Form, Toxic Cloud\n- 6th: Cursed Metamorphosis, Petrify\n- 7th: Duplicate Foe, Fiery Body\n- 8th: Desiccate, Monstrosity Form\n- 9th: Metamorphosis\n\n**School Spells**\n- Initial: Scramble Body\n- Advanced: Shifting Form",
  tags: [ArcaneSchool],
  effects: [
    CharacterEffects.gainAbility(WizardFocusSpells.ScrambleBody),
    CharacterEffects.gainResourcePool(FocusPoints),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(SpellRank1Loadout),
    CharacterEffects.gainCharacterOption(SelectProteanFormCurriculumRank1),
    CharacterEffects.gainCharacterOption(SelectProteanFormCurriculumRank1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainLoadoutSlot(SpellRank2Loadout),
      CharacterEffects.gainCharacterOption(SelectProteanFormCurriculumRank2),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainLoadoutSlot(SpellRank3Loadout),
      CharacterEffects.gainCharacterOption(SelectProteanFormCurriculumRank3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainLoadoutSlot(SpellRank4Loadout),
      CharacterEffects.gainCharacterOption(SelectProteanFormCurriculumRank4),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainLoadoutSlot(SpellRank5Loadout),
      CharacterEffects.gainCharacterOption(SelectProteanFormCurriculumRank5),
    ]),
  ],
})

export const UnifiedMagicalTheory = Traits.defineTrait('wizard/arcane-school/unified-magical-theory', {
  name: 'School of Unified Magical Theory',
  description:
    "You eschew the idea that magic can be neatly expressed by the teachings of any single school or college, instead directing your self-study to pick up the best of every school of magic. In doing so, you'll find the truths that lie at the intersection of each school, coming closer to the ideal nature of arcane magic. One day, you'll uncover that single elegant theory detailing all magic (perhaps a theory bearing your name?), but until then, your studies continue.\n\n**No Curriculum** You don't have a set curriculum, and so you don't have curriculum spells and can't benefit from abilities that specifically affect them. Instead, you gain an additional 1st-level wizard class feat, and you add one 1st- rank spell of your choice to your spellbook to represent your diverse studies. Your studies into the very nature of magic itself have let you use it more efficiently—instead of using Drain Bonded Item only once per day, you can use it once per day for each rank of spell you can cast, recalling a spell of that rank each time.\n\n**School Spells**\n- Initial: Hand of the Apprentice\n- Advanced: Interdisciplinary Incantation",
  tags: [ArcaneSchool],
  effects: [
    CharacterEffects.gainAbility(WizardFocusSpells.HandOfTheApprentice),
    CharacterEffects.gainResourcePool(FocusPoints),
    CharacterEffects.gainCharacterOption(SelectWizardFeat1),
    CharacterEffects.gainCharacterOption(SelectSpellbookRank1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.modifyResourcePool(DrainBondedItem.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.modifyResourcePool(DrainBondedItem.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.modifyResourcePool(DrainBondedItem.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.modifyResourcePool(DrainBondedItem.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
  ],
})

export const SelectBoundaryCurriculumRank1 = CharacterOptions.selectAbilityOption('wizard/arcane-school/boundary/select-curriculum-rank-1', {
  name: 'Curriculum Spell (Rank 1)',
  filter: { specificOptions: [Spells.GrimTendrils, Spells.PhantasmalMinion, Spells.SummonUndead] },
  loadout: SpellRank1Loadout,
})

export const SelectBoundaryCurriculumRank2 = CharacterOptions.selectAbilityOption('wizard/arcane-school/boundary/select-curriculum-rank-2', {
  name: 'Curriculum Spell (Rank 2)',
  filter: { specificOptions: [Spells.Darkness, Spells.SeeTheUnseen] },
  loadout: SpellRank2Loadout,
})

export const SelectBoundaryCurriculumRank3 = CharacterOptions.selectAbilityOption('wizard/arcane-school/boundary/select-curriculum-rank-3', {
  name: 'Curriculum Spell (Rank 3)',
  filter: { specificOptions: [Spells.BindUndead, Spells.GhostlyWeapon] },
  loadout: SpellRank3Loadout,
})

export const SelectBoundaryCurriculumRank4 = CharacterOptions.selectAbilityOption('wizard/arcane-school/boundary/select-curriculum-rank-4', {
  name: 'Curriculum Spell (Rank 4)',
  filter: { specificOptions: [Spells.Flicker, Spells.Translocate] },
  loadout: SpellRank4Loadout,
})

export const SelectBoundaryCurriculumRank5 = CharacterOptions.selectAbilityOption('wizard/arcane-school/boundary/select-curriculum-rank-5', {
  name: 'Curriculum Spell (Rank 5)',
  filter: { specificOptions: [Spells.Banishment, Spells.InvokeSpirits] },
  loadout: SpellRank5Loadout,
})

export const Boundary = Traits.defineTrait('wizard/arcane-school/boundary', {
  name: 'School of the Boundary',
  description:
    "Why use your magic to affect something as pedestrian as the physical world? Whether you studied at the College of Dimensional Studies in Katapesh or an underground school in haunted Ustalav, you've turned your magic past the Universe to the forces beyond, summoning spirits and shades, manipulating dimensions and planes, and treading in a place not meant for mortals.\n\n**Curriculum**\n- Cantrips: Telekinetic Hand, Void Warp\n- 1st: Grim Tendrils, Phantasmal Minion, Summon Undead\n- 2nd: Darkness, See the Unseen\n- 3rd: Bind Undead, Ghostly Weapon\n- 4th: Flicker, Translocate\n- 5th: Banishment, Invoke Spirits\n- 6th: Teleport, Vampiric Exsanguination\n- 7th: Eclipse Burst, Interplanar Teleport\n- 8th: Quandary, Unrelenting Observation\n- 9th: Massacre\n\n**School Spells**\n- Initial: Fortify Summoning\n- Advanced: Spiral of Horrors",
  tags: [ArcaneSchool],
  effects: [
    CharacterEffects.gainAbility(WizardFocusSpells.FortifySummoning),
    CharacterEffects.gainResourcePool(FocusPoints),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(SpellRank1Loadout),
    CharacterEffects.gainCharacterOption(SelectBoundaryCurriculumRank1),
    CharacterEffects.gainCharacterOption(SelectBoundaryCurriculumRank1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainLoadoutSlot(SpellRank2Loadout),
      CharacterEffects.gainCharacterOption(SelectBoundaryCurriculumRank2),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainLoadoutSlot(SpellRank3Loadout),
      CharacterEffects.gainCharacterOption(SelectBoundaryCurriculumRank3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainLoadoutSlot(SpellRank4Loadout),
      CharacterEffects.gainCharacterOption(SelectBoundaryCurriculumRank4),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainLoadoutSlot(SpellRank5Loadout),
      CharacterEffects.gainCharacterOption(SelectBoundaryCurriculumRank5),
    ]),
  ],
})

export const SelectArcaneSchool = CharacterOptions.selectTraitOption('wizard/arcane-school/select', {
  name: 'Arcane School',
  filter: { tags: [ArcaneSchool] },
})

export const ArcaneSchoolFeature = Traits.defineTrait('wizard/arcane-school', {
  name: 'Arcane School',
  description:
    'Most wizards acquire their knowledge of spells from a formal educational institution, such as the Arcanamirium or the Magaambya. At 1st level, you choose your arcane school, which grants you magical abilities.\n\nYou gain additional spells and spell slots from the curriculum taught at the school you attended. Some wizards follow the school of unified magical theory, which attempts to forge a new school by studying independently and drawing information from a multitude of texts and tutors. Though a wizard with this approach lacks the focus of formal training, they have greater flexibility.',
  tags: [ClassFeature],
  effects: [CharacterEffects.gainCharacterOption(SelectArcaneSchool)],
})

export const AllWizardSchoolEntities = [
  ArcaneSchool,
  SelectArsGrammaticaCurriculumRank1,
  SelectArsGrammaticaCurriculumRank2,
  SelectArsGrammaticaCurriculumRank3,
  SelectArsGrammaticaCurriculumRank4,
  SelectArsGrammaticaCurriculumRank5,
  ArsGrammatica,
  SelectBattleMagicCurriculumRank1,
  SelectBattleMagicCurriculumRank2,
  SelectBattleMagicCurriculumRank3,
  SelectBattleMagicCurriculumRank4,
  SelectBattleMagicCurriculumRank5,
  BattleMagic,
  SelectCivicWizardryCurriculumRank1,
  SelectCivicWizardryCurriculumRank2,
  SelectCivicWizardryCurriculumRank3,
  SelectCivicWizardryCurriculumRank4,
  SelectCivicWizardryCurriculumRank5,
  CivicWizardry,
  SelectMentalismCurriculumRank1,
  SelectMentalismCurriculumRank2,
  SelectMentalismCurriculumRank3,
  SelectMentalismCurriculumRank4,
  SelectMentalismCurriculumRank5,
  Mentalism,
  SelectProteanFormCurriculumRank1,
  SelectProteanFormCurriculumRank2,
  SelectProteanFormCurriculumRank3,
  SelectProteanFormCurriculumRank4,
  SelectProteanFormCurriculumRank5,
  ProteanForm,
  UnifiedMagicalTheory,
  SelectBoundaryCurriculumRank1,
  SelectBoundaryCurriculumRank2,
  SelectBoundaryCurriculumRank3,
  SelectBoundaryCurriculumRank4,
  SelectBoundaryCurriculumRank5,
  Boundary,
  SelectArcaneSchool,
  ArcaneSchoolFeature,
]
