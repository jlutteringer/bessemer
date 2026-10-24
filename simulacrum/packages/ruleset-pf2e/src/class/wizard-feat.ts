import { Abilities, Effects, Traits } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { ClassFeat, Feat, FeatLevel1, FeatLevel2, FeatLevel4, WizardFeat } from '@simulacrum/ruleset-pf2e/archetype'
import { TrainedArcana } from '@simulacrum/ruleset-pf2e/skill'
import { SelectFamiliarAbility } from '@simulacrum/ruleset-pf2e/companion/familiar'
import { ArcaneBond } from '@simulacrum/ruleset-pf2e/class/wizard-feature'
import { ArcaneSchoolFeature } from '@simulacrum/ruleset-pf2e/class/wizard-school'

export const Familiar = Traits.defineTrait('feat/familiar', {
  name: 'Familiar',
  description:
    '*Magus, Sorcerer, Thaumaturge, Wizard*\n\nYou make a pact with a creature that serves you and assists your spellcasting. You gain a familiar.',
  archetypes: [Feat, ClassFeat, WizardFeat, FeatLevel1],
  effects: [Effects.gainCharacterOption(SelectFamiliarAbility), Effects.gainCharacterOption(SelectFamiliarAbility)],
})

export const SpellbookProdigy = Traits.defineTrait('feat/spellbook-prodigy', {
  name: 'Spellbook Prodigy',
  description:
    '*Wizard*\n\n**Prerequisites** Trained in Arcana\n\nYou are particularly adept at learning spells to add to your spellbook. You gain the Magical Shorthand skill feat without needing to meet its prerequisites. Further, when you roll a critical failure on your check to Learn a Spell, you get a failure instead.',
  archetypes: [Feat, ClassFeat, WizardFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedArcana)],
  effects: [],
})

export const EnergyAblation = Traits.defineTrait('feat/energy-ablation', {
  name: 'Energy Ablation',
  description:
    '*Spellshape, Wizard*\n\nAs you direct destructive energy at a foe, you can divert some of its power into a protective barrier that shields you from harm. If your next action is to Cast a Spell that deals at least one type of energy damage (acid, cold, electricity, fire, force, sonic, vitality, or void), you gain resistance to an energy damage type of your choice equal to the spell’s rank. The resistance lasts until the end of your next turn. You get the resistance regardless of whether or not your spell dealt damage.',
  archetypes: [Feat, ClassFeat, WizardFeat, FeatLevel2],
  effects: [],
})

export const EnergyAblationAction = Abilities.defineAbility('feat/energy-ablation/action', {
  name: 'Energy Ablation',
  description:
    '*Spellshape, Wizard*\n\nAs you direct destructive energy at a foe, you can divert some of its power into a protective barrier that shields you from harm. If your next action is to Cast a Spell that deals at least one type of energy damage (acid, cold, electricity, fire, force, sonic, vitality, or void), you gain resistance to an energy damage type of your choice equal to the spell’s rank. The resistance lasts until the end of your next turn. You get the resistance regardless of whether or not your spell dealt damage.',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(EnergyAblation)],
  actions: [{ name: 'Energy Ablation', action: ActionTypes.SingleAction }],
})

export const NonlethalSpell = Traits.defineTrait('feat/nonlethal-spell', {
  name: 'Nonlethal Spell',
  description:
    "*Manipulate, Spellshape, Wizard*\n\nYou can alter offensive spells to be less deadly. If your next action is to Cast a Spell that deals damage and doesn't have the death or void trait, that spell gains the nonlethal trait.",
  archetypes: [Feat, ClassFeat, WizardFeat, FeatLevel2],
  effects: [],
})

export const NonlethalSpellAction = Abilities.defineAbility('feat/nonlethal-spell/action', {
  name: 'Nonlethal Spell',
  description:
    "*Manipulate, Spellshape, Wizard*\n\nYou can alter offensive spells to be less deadly. If your next action is to Cast a Spell that deals damage and doesn't have the death or void trait, that spell gains the nonlethal trait.",
  universal: true,
  prerequisites: [Traits.traitPrerequisite(NonlethalSpell)],
  actions: [{ name: 'Nonlethal Spell', action: ActionTypes.SingleAction }],
})

export const BespellStrikes = Traits.defineTrait('feat/bespell-strikes', {
  name: 'Bespell Strikes',
  description:
    '*Oracle, Sorcerer, Wizard*\n\n**Frequency** once per turn\n\n**Requirements** Your most recent action was to cast a non-cantrip spell\n\nYou siphon spell energy into one weapon you’re wielding, or into one of your unarmed attacks, such as a fist. Until the end of your turn, the weapon or unarmed attack deals an extra 1d6 force damage and gains the associated trait (see below) if it didn’t have it already. If the spell dealt a different type of damage, the Strike deals this type of damage instead (or one type of your choice if the spell could deal multiple types of damage).\n\n**Oracle**: Your strike gains the divine trait.\n\n**Sorcerer:** Your strike gains the trait of your bloodline’s magical tradition.\n\n**Wizard**: Your strike gains the arcane trait.',
  archetypes: [Feat, ClassFeat, WizardFeat, FeatLevel4],
  effects: [],
})

export const BespellStrikesAction = Abilities.defineAbility('feat/bespell-strikes/action', {
  name: 'Bespell Strikes',
  description:
    '*Oracle, Sorcerer, Wizard*\n\n**Frequency** once per turn\n\n**Requirements** Your most recent action was to cast a non-cantrip spell\n\nYou siphon spell energy into one weapon you’re wielding, or into one of your unarmed attacks, such as a fist. Until the end of your turn, the weapon or unarmed attack deals an extra 1d6 force damage and gains the associated trait (see below) if it didn’t have it already. If the spell dealt a different type of damage, the Strike deals this type of damage instead (or one type of your choice if the spell could deal multiple types of damage).\n\n**Oracle**: Your strike gains the divine trait.\n\n**Sorcerer:** Your strike gains the trait of your bloodline’s magical tradition.\n\n**Wizard**: Your strike gains the arcane trait.',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(BespellStrikes)],
  actions: [{ name: 'Bespell Strikes', action: ActionTypes.FreeAction }],
})

export const CallWizardlyTools = Traits.defineTrait('feat/call-wizardly-tools', {
  name: 'Call Wizardly Tools',
  description:
    '*Concentrate, Teleportation, Wizard*\n\n**Prerequisites** arcane bond\n\nYou’re mystically connected to your wizardly tools, ensuring you can always find them when you’ve misplaced them. You teleport your bonded item or spellbook to you. It arrives in your hand if you have a free hand or at your feet if you don’t. The item must be within 1 mile and have 1 Bulk or less.',
  archetypes: [Feat, ClassFeat, WizardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(ArcaneBond)],
  effects: [],
})

export const CallWizardlyToolsAction = Abilities.defineAbility('feat/call-wizardly-tools/action', {
  name: 'Call Wizardly Tools',
  description:
    '*Concentrate, Teleportation, Wizard*\n\n**Prerequisites** arcane bond\n\nYou’re mystically connected to your wizardly tools, ensuring you can always find them when you’ve misplaced them. You teleport your bonded item or spellbook to you. It arrives in your hand if you have a free hand or at your feet if you don’t. The item must be within 1 mile and have 1 Bulk or less.',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(CallWizardlyTools)],
  actions: [{ name: 'Call Wizardly Tools', action: ActionTypes.SingleAction }],
})

export const LinkedFocus = Traits.defineTrait('feat/linked-focus', {
  name: 'Linked Focus',
  description:
    '*Wizard*\n\n**Prerequisites** arcane bond; arcane school\n\nYou have linked your bonded item to the well of energy that powers your school spells. Once per day when you Drain your Bonded Item to cast one of your arcane school’s curriculum spells, you also regain 1 Focus Point.',
  archetypes: [Feat, ClassFeat, WizardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(ArcaneBond), Traits.traitPrerequisite(ArcaneSchoolFeature)],
  effects: [],
})

export const SpellProtectionArray = Traits.defineTrait('feat/spell-protection-array', {
  name: 'Spell Protection Array',
  description:
    '*Arcane, Manipulate, Wizard*\n\nYou inscribe a circle of arcane runes that dampen enemies’ magic. You create a glowing magic circle in a 5-foot burst within 30 feet. Creatures in the circle gain a +1 status bonus to saving throws against magic. The circle lasts until the end of your next turn, and you can Sustain it, to a maximum duration of 1 minute.',
  archetypes: [Feat, ClassFeat, WizardFeat, FeatLevel4],
  effects: [],
})

export const SpellProtectionArrayAction = Abilities.defineAbility('feat/spell-protection-array/action', {
  name: 'Spell Protection Array',
  description:
    '*Arcane, Manipulate, Wizard*\n\nYou inscribe a circle of arcane runes that dampen enemies’ magic. You create a glowing magic circle in a 5-foot burst within 30 feet. Creatures in the circle gain a +1 status bonus to saving throws against magic. The circle lasts until the end of your next turn, and you can Sustain it, to a maximum duration of 1 minute.',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(SpellProtectionArray)],
  actions: [{ name: 'Spell Protection Array', action: ActionTypes.SingleAction }],
})

export const AllWizardFeatEntities = [
  Familiar,
  SpellbookProdigy,
  EnergyAblation,
  EnergyAblationAction,
  NonlethalSpell,
  NonlethalSpellAction,
  BespellStrikes,
  BespellStrikesAction,
  CallWizardlyTools,
  CallWizardlyToolsAction,
  LinkedFocus,
  SpellProtectionArray,
  SpellProtectionArrayAction,
]
