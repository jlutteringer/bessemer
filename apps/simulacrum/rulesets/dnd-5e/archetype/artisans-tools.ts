import { Archetypes, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'

export const ArtisansTools = Archetypes.defineArchetype('7b67cd63-9390-41ab-9a37-8bdf2e9bc88e', { name: "Artisan's Tools" })

export const SelectArtisansTools = CharacterOptions.selectTraitOption('e3793927-9007-4e99-a48d-f057a3f87df4', { archetypes: [ArtisansTools] })

export const AlchemistsSupplies = Traits.defineTrait('2181b7fe-e757-4c88-9b24-1af21a1c4ddd', {
  name: "Alchemist's Supplies",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const BrewersSupplies = Traits.defineTrait('cbade7cf-650b-4efa-872a-2e66c4d87fc8', {
  name: "Brewer's Supplies",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const CalligraphersSupplies = Traits.defineTrait('90641957-c2f2-4e1b-867f-49616eadeb57', {
  name: "Calligrapher's Supplies",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const CarpentersTools = Traits.defineTrait('5bc3af92-2fe0-48f3-bec6-909a291b73b5', {
  name: "Carpenter's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const CartographersTools = Traits.defineTrait('8a9cee33-144c-4cc4-a9b5-3d733ed945eb', {
  name: "Cartographer's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const CobblersTools = Traits.defineTrait('2010ac60-6904-498c-9365-7be251f2e617', {
  name: "Cobbler's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const CooksUtensils = Traits.defineTrait('c3881c27-e1d0-42dd-9af3-c4aea71a22ae', {
  name: "Cook's Utensils",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const GlassblowersTools = Traits.defineTrait('8ac00baa-1a50-48b7-9ed6-4417d5634586', {
  name: "Glassblower's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const JewelersTools = Traits.defineTrait('fbfc40ca-5be8-4b26-b22d-e00616a573f9', {
  name: "Jeweler's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const LeatherworkersTools = Traits.defineTrait('4427cd75-fd03-4dc0-9f51-4b735073c2ae', {
  name: "Leatherworker's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const MasonsTools = Traits.defineTrait('29b4e957-095d-4089-8da0-bed7d9bf6f18', {
  name: "Mason's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const PaintersSupplies = Traits.defineTrait('2675ded6-d665-4ce8-9db7-670d2bfa7902', {
  name: "Painter's Supplies",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const PottersTools = Traits.defineTrait('ce911d77-b38c-49ef-aefc-5a60bfb75451', {
  name: "Potter's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const SmithsTools = Traits.defineTrait('93cc0fa8-5179-44d9-82c9-8d44c00d38ae', {
  name: "Smith's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const TinkersTools = Traits.defineTrait('e5b8b8d7-e9b7-4767-9498-cb6a43e1c9f3', {
  name: "Tinker's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const WeaversTools = Traits.defineTrait('576842f1-02c8-4bc1-9666-e22812c94747', {
  name: "Weaver's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})

export const WoodcarversTools = Traits.defineTrait('5333fd72-0ea3-42a0-b899-dacfb9adf03c', {
  name: "Woodcarver's Tools",
  description: '',
  archetypes: [ArtisansTools],
  effects: [],
})
