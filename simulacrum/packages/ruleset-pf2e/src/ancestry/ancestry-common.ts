import { Archetypes, CharacterOptions, Traits } from '@simulacrum/ruleset'
import { ClassFeat, FeatLevel1, GeneralFeat } from '@simulacrum/ruleset-pf2e/archetype'

export const Darkvision = Traits.defineTrait('sense/darkvision', {
  name: 'Darkvision',
  description:
    'You can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white.',
  effects: [],
})

export const LowLightVision = Traits.defineTrait('sense/low-light-vision', {
  name: 'Low-Light Vision',
  description:
    'You can see in dim light as though it were bright light, so you ignore the [concealed](content:conditions/concealed) condition due to dim light.',
  effects: [],
})

export const DwarfHeritage = Archetypes.defineArchetype('heritage/dwarf', { name: 'Dwarf Heritage' })
export const ElfHeritage = Archetypes.defineArchetype('heritage/elf', { name: 'Elf Heritage' })
export const GnomeHeritage = Archetypes.defineArchetype('heritage/gnome', { name: 'Gnome Heritage' })
export const GoblinHeritage = Archetypes.defineArchetype('heritage/goblin', { name: 'Goblin Heritage' })
export const HalflingHeritage = Archetypes.defineArchetype('heritage/halfling', { name: 'Halfling Heritage' })
export const HumanHeritage = Archetypes.defineArchetype('heritage/human', { name: 'Human Heritage' })
export const LeshyHeritage = Archetypes.defineArchetype('heritage/leshy', { name: 'Leshy Heritage' })
export const OrcHeritage = Archetypes.defineArchetype('heritage/orc', { name: 'Orc Heritage' })

export const SelectAncestryGeneralFeat1 = CharacterOptions.selectTraitOption('ancestry/select-general-feat-1', {
  name: 'General Feat (Level 1)',
  filter: { archetypes: [GeneralFeat, FeatLevel1] },
})

export const SelectAncestryClassFeat1 = CharacterOptions.selectTraitOption('ancestry/select-class-feat-1', {
  name: 'Class Feat (Level 1)',
  filter: { archetypes: [ClassFeat, FeatLevel1] },
})

export const AllAncestryCommonEntities = [
  Darkvision,
  LowLightVision,
  DwarfHeritage,
  ElfHeritage,
  GnomeHeritage,
  GoblinHeritage,
  HalflingHeritage,
  HumanHeritage,
  LeshyHeritage,
  OrcHeritage,
  SelectAncestryGeneralFeat1,
  SelectAncestryClassFeat1,
]
