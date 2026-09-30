import { Abilities, Archetypes, Attributes, Effects, Traits } from '@simulacrum/common'
import { Class } from '@simulacrum/rulesets/dnd-5e/archetype'
import * as SkillProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/skill-proficiency'
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

export const Spellcasting = Abilities.defineAbility('wizard/spellcasting', {
  name: 'Spellcasting',
  description: '',
  actions: [],
})

export const RitualAdept = Abilities.defineAbility('wizard/ritual-adept', {
  name: 'Ritual Adept',
  description: '',
  actions: [],
})

export const ArcaneRecovery = Abilities.defineAbility('wizard/arcane-recovery', {
  name: 'Arcane Recovery',
  description: '',
  actions: [],
})

export const Level1 = Traits.defineTrait('wizard/level-1', {
  name: 'Wizard',
  description: '',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainAbility(Spellcasting),
    Effects.gainAbility(RitualAdept),
    Effects.gainAbility(ArcaneRecovery),
  ],
})

// FUTURE Scholar grants Expertise in a skill the Wizard is already proficient in; the engine excludes already-selected traits
// from choices, so it's a stub ability for now
export const Scholar = Abilities.defineAbility('wizard/scholar', {
  name: 'Scholar',
  description: '',
  actions: [],
})

export const Level2 = Traits.defineTrait('wizard/level-2', {
  name: 'Wizard (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))), Effects.gainAbility(Scholar)],
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
  ],
})

export const AbjurationSavant = Abilities.defineAbility('wizard/abjuration-savant', {
  name: 'Abjuration Savant',
  description: '',
  actions: [],
})

export const ArcaneWard = Abilities.defineAbility('wizard/arcane-ward', {
  name: 'Arcane Ward',
  description: '',
  actions: [],
})

export const Abjurer = Traits.defineTrait('wizard/abjurer', {
  name: 'Abjurer',
  description: '',
  archetypes: [WizardSubclass],
  effects: [Effects.gainAbility(AbjurationSavant), Effects.gainAbility(ArcaneWard)],
})

export const DivinationSavant = Abilities.defineAbility('wizard/divination-savant', {
  name: 'Divination Savant',
  description: '',
  actions: [],
})

export const Portent = Abilities.defineAbility('wizard/portent', {
  name: 'Portent',
  description: '',
  actions: [],
})

export const Diviner = Traits.defineTrait('wizard/diviner', {
  name: 'Diviner',
  description: '',
  archetypes: [WizardSubclass],
  effects: [Effects.gainAbility(DivinationSavant), Effects.gainAbility(Portent)],
})

export const EvocationSavant = Abilities.defineAbility('wizard/evocation-savant', {
  name: 'Evocation Savant',
  description: '',
  actions: [],
})

export const PotentCantrip = Abilities.defineAbility('wizard/potent-cantrip', {
  name: 'Potent Cantrip',
  description: '',
  actions: [],
})

export const Evoker = Traits.defineTrait('wizard/evoker', {
  name: 'Evoker',
  description: '',
  archetypes: [WizardSubclass],
  effects: [Effects.gainAbility(EvocationSavant), Effects.gainAbility(PotentCantrip)],
})

export const IllusionSavant = Abilities.defineAbility('wizard/illusion-savant', {
  name: 'Illusion Savant',
  description: '',
  actions: [],
})

export const ImprovedIllusions = Abilities.defineAbility('wizard/improved-illusions', {
  name: 'Improved Illusions',
  description: '',
  actions: [],
})

export const Illusionist = Traits.defineTrait('wizard/illusionist', {
  name: 'Illusionist',
  description: '',
  archetypes: [WizardSubclass],
  effects: [Effects.gainAbility(IllusionSavant), Effects.gainAbility(ImprovedIllusions)],
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
  ],
})

export const MemorizeSpell = Abilities.defineAbility('wizard/memorize-spell', {
  name: 'Memorize Spell',
  description: '',
  actions: [],
})

export const Level5 = Traits.defineTrait('wizard/level-5', {
  name: 'Wizard (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(4))), Effects.gainAbility(MemorizeSpell)],
})
