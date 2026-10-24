import { Archetypes, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { AbilityPatchProps } from '@simulacrum/ruleset/ability'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Class, ClassFeature, FeatLevel1, WizardFeat } from '@simulacrum/ruleset-pf2e/archetype'
import {
  ClassDC,
  Constitution,
  Fortitude,
  HitPoints,
  Intelligence,
  Perception,
  Reflex,
  SimpleWeapons,
  SpellAttack,
  SpellDC,
  UnarmedAttacks,
  UnarmoredDefense,
  Will,
} from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Expert, Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { SelectTrainedSkill, TrainedArcana } from '@simulacrum/ruleset-pf2e/skill'
import { IntelligenceKeyAttribute } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { SelectFamiliarAbility } from '@simulacrum/ruleset-pf2e/companion/familiar'
import {
  AllWizardFeatureEntities,
  ArcaneBond,
  DrainBondedItem,
  ReflexExpertise,
  SelectWizardFeat2,
  SelectWizardFeat4,
  WizardFeats,
  WizardSpellcasting,
} from '@simulacrum/ruleset-pf2e/class/wizard-feature'
import { AllWizardSchoolEntities, ArcaneSchoolFeature } from '@simulacrum/ruleset-pf2e/class/wizard-school'
import { AllWizardFeatEntities, Familiar } from '@simulacrum/ruleset-pf2e/class/wizard-feat'
import { AllWizardFocusSpells } from '@simulacrum/ruleset-pf2e/class/wizard-focus-spell'

export const ArcaneThesis = Archetypes.defineTraitArchetype('wizard/arcane-thesis', { name: 'Arcane Thesis' })

export const SelectExperimentalSpellshapingFeat = CharacterOptions.selectTraitOption('wizard/arcane-thesis/experimental-spellshaping/select-feat', {
  name: 'Spellshape Wizard Feat (Level 1)',
  description: 'Choose a 1st-level wizard feat with the spellshape trait.',
  filter: { archetypes: [WizardFeat, FeatLevel1] },
})

export const ExperimentalSpellshaping = Traits.defineTrait('wizard/arcane-thesis/experimental-spellshaping', {
  name: 'Experimental Spellshaping',
  description:
    'Your thesis posits that the magical practice of spellshaping can be realized more efficiently by altering variables and parameters as you cast, imitating the wizards of long ago who had to work out their own spells themselves. This allows you efficient access to various spellshape effects. You gain one 1st-level [spellshape](content:traits/spellshape) wizard feat of your choice. Starting at 4th level, during your daily preparations, you can gain a spellshape wizard feat of your choice that has a level requirement of no more than half your level, which you can use until your next daily preparations.',
  archetypes: [ArcaneThesis],
  effects: [Effects.gainCharacterOption(SelectExperimentalSpellshapingFeat)],
})

export const ImprovedFamiliarAttunement = Traits.defineTrait('wizard/arcane-thesis/improved-familiar-attunement', {
  name: 'Improved Familiar Attunement',
  description:
    "You've long held that fine-tuning the magic that bonds a wizard and their familiar can improve the mystic connection and yield greater results, compared to the safe yet generic bond most wizards currently use. You've formed such a pact with your familiar, gaining more advantages from it than most wizards. You gain the [Familiar](trait:feat/familiar) wizard feat. Your familiar gains an extra ability, and it gains an additional extra ability when you reach 6th, 12th, and 18th levels. Your connection with your familiar alters your arcane bond class feature so that you store your magical energy in your familiar, rather than an item you own; you also gain the Drain Familiar free action instead of Drain Bonded Item. Drain Familiar can be used any time an ability would allow you to use Drain Bonded Item and functions identically, except that you draw magic from your familiar instead of an item.",
  archetypes: [ArcaneThesis],
  effects: [
    Effects.gainTrait(Familiar),
    Effects.gainCharacterOption(SelectFamiliarAbility),
    Effects.modifyAbility(
      DrainBondedItem,
      Attributes.modifier(
        Patches.patch<AbilityPatchProps>({
          name: 'Drain Familiar',
          actions: Patches.set([{ name: 'Drain Familiar', action: ActionTypes.FreeAction }]),
        })
      )
    ),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [Effects.gainCharacterOption(SelectFamiliarAbility)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 12), [Effects.gainCharacterOption(SelectFamiliarAbility)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 18), [Effects.gainCharacterOption(SelectFamiliarAbility)]),
  ],
})

export const SpellBlending = Traits.defineTrait('wizard/arcane-thesis/spell-blending', {
  name: 'Spell Blending',
  description:
    "You theorize that spell slots are a shorthand for an underlying energy that powers all spellcasting, and you've found a way to tinker with the hierarchy of spell slots, combining them to fuel more powerful spells. During your daily preparations, you can trade two spell slots of the same spell rank for a bonus spell slot of up to 2 spell ranks higher than the traded spell slots. You can exchange as many spell slots as you have available. Bonus spell slots must be of a spell rank you can normally cast, and each bonus spell slot must be of a different spell rank. You can also trade any spell slot for two additional cantrips, though you can't trade more than one spell slot at a time for additional cantrips in this way.",
  archetypes: [ArcaneThesis],
  effects: [],
})

export const SpellSubstitution = Traits.defineTrait('wizard/arcane-thesis/spell-substitution', {
  name: 'Spell Substitution',
  description:
    "You don't accept the fact that once spells are prepared, they can't be changed until your next daily preparations, and you have uncovered a shortcut allowing you to substitute new spells for those you originally prepared. You can spend 10 minutes to empty one of your prepared spell slots and prepare a different spell from your spellbook in its place. If you are interrupted during such a swap, the original spell remains prepared and can still be cast. You can try again to swap out the spell later, but you must start the process over again.",
  archetypes: [ArcaneThesis],
  effects: [],
})

export const StaffNexus = Traits.defineTrait('wizard/arcane-thesis/staff-nexus', {
  name: 'Staff Nexus',
  description:
    "Your thesis maintains that early and intense adoption of staves from the first days of study can create a symbiotic bond between spellcaster and staff, allowing them to create remarkable magic together. You've formed such a connection with a makeshift staff you built, and you are ready to infuse any staff you encounter with greater power.\n\nYou begin play with a makeshift staff of your own invention. It has the magical trait and contains one cantrip and one 1st-rank spell, both from your spellbook. During your daily preparations, you can expend one spell to grant the staff a number of charges equal to that spell's rank, which dissipate after 24 hours. While you are holding the staff, you can Cast the Spells it contains. The 1st-rank spell consumes 1 charge but the cantrip doesn't require charges. If your staff is destroyed, you can create a new one over the course of 1 hour, though it has no charges.\n\nDuring your daily preparations, you can merge your makeshift staff with another staff in your possession, adding the two chosen spells to it. This staff gains charges from preparing it and from expending spells. Magical staves are described on the Staves page of _GM Core_.\n\nAt 8th level, you can expend two spells instead of one when preparing any staff, adding additional charges equal to the combined ranks of the expended spells. At 16th level, you can expend up to a total of three spells to add charges to the staff, adding additional charges equal to the combined ranks of all three spells.",
  archetypes: [ArcaneThesis],
  effects: [],
})

export const SelectArcaneThesis = CharacterOptions.selectTraitOption('wizard/arcane-thesis/select', {
  name: 'Arcane Thesis',
  filter: { archetypes: [ArcaneThesis] },
})

export const ArcaneThesisFeature = Traits.defineTrait('wizard/arcane-thesis', {
  name: 'Arcane Thesis',
  description:
    'During your studies to become a full-fledged wizard, you produced a thesis of unique magical research. You gain a special benefit depending on the topic of your thesis research. The arcane thesis topics presented in this book are below; your specific thesis probably has a much longer and more technical title like “_On the Methods of Spell Interpolation and the Genesis of a New Understanding of the Building Blocks of Magic_.”',
  archetypes: [ClassFeature],
  effects: [Effects.gainCharacterOption(SelectArcaneThesis)],
})

export const Wizard = Traits.defineTrait('wizard', {
  name: 'Wizard',
  description:
    "_You are an eternal student of the secrets of the universe, using your mastery of magic to cast powerful spells. You treat magic like a science, cross-referencing the latest texts on practical spellcraft with ancient tomes to discover and understand arcane magic. Yet magical theory is vast, and there's no way you can study it all. Most wizards learn through formal schooling, with their curriculum informing a specific rubric, although particularly driven researchers sometimes piece together their own theories._\n\n**Key Attribute: Intelligence**\n\nAt 1st level, your class gives you an attribute boost to Intelligence.\n\n**Hit Points: 6 plus your Constitution modifier**\n\nYou increase your maximum number of HP by this number at 1st level and every level thereafter.\n\n**Key Terms**\n\nYou'll see the following key term in many wizard abilities.\n\n**[Spellshape](content:traits/spellshape):** Actions with the spellshape trait tweak the properties of your spells. These actions usually come from spellshape feats. You must use a spellshape action directly before Casting the Spell you want to alter. If you use any action (including free actions and reactions) other than Cast a Spell directly after, you waste the benefits of the spellshape action. Any additional effects added by a spellshape action are part of the spell's effect, not of the spellshape action itself.\n\n**Initial Proficiencies**\n\nAt 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.\n\n**Perception**\n\nTrained in [Perception](characteristic:perception)\n\n**Saving Throws**\n\nTrained in [Fortitude](characteristic:fortitude)\n\nTrained in [Reflex](characteristic:reflex)\n\nExpert in Will\n\n**Skills**\n\nTrained in [Arcana](characteristic:skill/arcana)\n\nTrained in a number of additional skills equal to 2 plus your [Intelligence modifier](characteristic:intelligence)\n\n**Attacks**\n\nTrained in simple weapons\n\nTrained in unarmed attacks\n\n**Defenses**\n\nUntrained in all armor\n\nTrained in unarmored defense\n\n**Class DC**\n\nTrained in wizard [class DC](characteristic:class-dc)\n\n**Spells**\n\nTrained in [spell attack modifier](characteristic:spell-attack)\n\nTrained in [spell DC](characteristic:spell-dc)\n\n**Class Features**\n\nYou gain these features as Wizard. Features gained at higher levels list the levels at which you gain them next to the features' names.\n\n| Your Level | Class Features |\n|---|---|\n| 1 | Ancestry and background, attribute boosts, initial proficiencies, wizard spellcasting, arcane thesis, arcane school, arcane bond |\n| 2 | Skill feat, wizard feat |\n| 3 | 2nd-rank spells, general feat, skill increase |\n| 4 | Skill feat, wizard feat |\n| 5 | 3rd-rank spells, attribute boosts, ancestry feat, reflex expertise, skill increase |\n\n| Your Level | Cantrips | 1st | 2nd | 3rd |\n|---|---|---|---|---|\n| 1 | 5 | 2 | — | — |\n| 2 | 5 | 3 | — | — |\n| 3 | 5 | 3 | 2 | — |\n| 4 | 5 | 3 | 3 | — |\n| 5 | 5 | 3 | 3 | 2 |",
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.multiply([NumericExpressions.sum([6, Constitution.variable]), CharacterValues.Level])))
    ),
    Effects.gainTrait(IntelligenceKeyAttribute),
    Effects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmoredDefense, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Intelligence.variable))),
    Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Intelligence.variable))),
    Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.gainTrait(TrainedArcana),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainTrait(WizardSpellcasting),
    Effects.gainTrait(ArcaneThesisFeature),
    Effects.gainTrait(ArcaneSchoolFeature),
    Effects.gainTrait(ArcaneBond),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      Effects.gainTrait(WizardFeats),
      Effects.gainCharacterOption(SelectWizardFeat2),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [Effects.gainCharacterOption(SelectWizardFeat4)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainTrait(ReflexExpertise)]),
  ],
})

export const AllWizardEntities = [
  ArcaneThesis,
  SelectExperimentalSpellshapingFeat,
  ExperimentalSpellshaping,
  ImprovedFamiliarAttunement,
  SpellBlending,
  SpellSubstitution,
  StaffNexus,
  SelectArcaneThesis,
  ArcaneThesisFeature,
  Wizard,
  ...AllWizardFeatureEntities,
  ...AllWizardSchoolEntities,
  ...AllWizardFeatEntities,
  ...AllWizardFocusSpells,
]
