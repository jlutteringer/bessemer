import { Tags, CharacterOptions, Traits } from '@simulacrum/ruleset'
import { ClassFeat, FeatLevel1, GeneralFeat } from '@simulacrum/ruleset-pf2e/tag'

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

export const DwarfHeritage = Tags.defineTraitTag('heritage/dwarf', { name: 'Dwarf Heritage' })
export const ElfHeritage = Tags.defineTraitTag('heritage/elf', { name: 'Elf Heritage' })
export const GnomeHeritage = Tags.defineTraitTag('heritage/gnome', { name: 'Gnome Heritage' })
export const GoblinHeritage = Tags.defineTraitTag('heritage/goblin', { name: 'Goblin Heritage' })
export const HalflingHeritage = Tags.defineTraitTag('heritage/halfling', { name: 'Halfling Heritage' })
export const HumanHeritage = Tags.defineTraitTag('heritage/human', { name: 'Human Heritage' })
export const LeshyHeritage = Tags.defineTraitTag('heritage/leshy', { name: 'Leshy Heritage' })
export const OrcHeritage = Tags.defineTraitTag('heritage/orc', { name: 'Orc Heritage' })

export const SelectAncestryGeneralFeat1 = CharacterOptions.selectTraitOption('ancestry/select-general-feat-1', {
  name: 'General Feat (Level 1)',
  filter: { tags: [GeneralFeat, FeatLevel1] },
})

export const SelectAncestryClassFeat1 = CharacterOptions.selectTraitOption('ancestry/select-class-feat-1', {
  name: 'Class Feat (Level 1)',
  filter: { tags: [ClassFeat, FeatLevel1] },
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
