import { Archetypes, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'

export const ArtisansTools = Archetypes.defineArchetype('artisans-tools', { name: "Artisan's Tools" })

export const SelectArtisansTools = CharacterOptions.selectTraitOption('artisans-tools/select', { archetypes: [ArtisansTools] })

export const AlchemistsSupplies = Traits.defineTrait('artisans-tools/alchemists-supplies', {
  name: "Alchemist's Supplies",
  description:
    "<p><strong>Ability:</strong> Intelligence</p><p>Identify unknown substances and prepare alchemical products such as acid, alchemist's fire, oils, and perfume.</p>",
  archetypes: [ArtisansTools],
  effects: [],
})

export const BrewersSupplies = Traits.defineTrait('artisans-tools/brewers-supplies', {
  name: "Brewer's Supplies",
  description: '<p><strong>Ability:</strong> Intelligence</p><p>Brew drinks, detect poisoned or contaminated drink, and purify water.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const CalligraphersSupplies = Traits.defineTrait('artisans-tools/calligraphers-supplies', {
  name: "Calligrapher's Supplies",
  description: '<p><strong>Ability:</strong> Dexterity</p><p>Write with elegant penmanship, and produce scrolls, inks, and decorative documents.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const CarpentersTools = Traits.defineTrait('artisans-tools/carpenters-tools', {
  name: "Carpenter's Tools",
  description:
    '<p><strong>Ability:</strong> Strength</p><p>Build or repair wooden structures and objects, such as walls, doors, furniture, and barricades.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const CartographersTools = Traits.defineTrait('artisans-tools/cartographers-tools', {
  name: "Cartographer's Tools",
  description:
    "<p><strong>Ability:</strong> Wisdom</p><p>Draft accurate maps, read and interpret existing ones, and keep track of where you've been.</p>",
  archetypes: [ArtisansTools],
  effects: [],
})

export const CobblersTools = Traits.defineTrait('artisans-tools/cobblers-tools', {
  name: "Cobbler's Tools",
  description: '<p><strong>Ability:</strong> Dexterity</p><p>Make and repair footwear, and modify boots to hide small compartments.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const CooksUtensils = Traits.defineTrait('artisans-tools/cooks-utensils', {
  name: "Cook's Utensils",
  description:
    '<p><strong>Ability:</strong> Wisdom</p><p>Prepare hearty meals, judge whether food is safe to eat, and make rations for the road.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const GlassblowersTools = Traits.defineTrait('artisans-tools/glassblowers-tools', {
  name: "Glassblower's Tools",
  description:
    '<p><strong>Ability:</strong> Intelligence</p><p>Shape glass into vessels, lenses, and other objects, and judge the quality of glasswork.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const JewelersTools = Traits.defineTrait('artisans-tools/jewelers-tools', {
  name: "Jeweler's Tools",
  description: '<p><strong>Ability:</strong> Intelligence</p><p>Cut and set gemstones, appraise jewelry, and identify precious stones.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const LeatherworkersTools = Traits.defineTrait('artisans-tools/leatherworkers-tools', {
  name: "Leatherworker's Tools",
  description: '<p><strong>Ability:</strong> Dexterity</p><p>Craft and repair leather goods, such as armor, pouches, saddles, and straps.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const MasonsTools = Traits.defineTrait('artisans-tools/masons-tools', {
  name: "Mason's Tools",
  description:
    '<p><strong>Ability:</strong> Strength</p><p>Work stone to build or repair walls and structures, and spot weaknesses in stonework.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const PaintersSupplies = Traits.defineTrait('artisans-tools/painters-supplies', {
  name: "Painter's Supplies",
  description: '<p><strong>Ability:</strong> Wisdom</p><p>Paint recognizable images and portraits, and create decorative symbols and banners.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const PottersTools = Traits.defineTrait('artisans-tools/potters-tools', {
  name: "Potter's Tools",
  description:
    '<p><strong>Ability:</strong> Intelligence</p><p>Throw and fire clay into jugs, pots, and other ceramics, and learn about a culture from its pottery.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const SmithsTools = Traits.defineTrait('artisans-tools/smiths-tools', {
  name: "Smith's Tools",
  description: '<p><strong>Ability:</strong> Strength</p><p>Forge and repair metal weapons, armor, and tools, and pry open doors or containers.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const TinkersTools = Traits.defineTrait('artisans-tools/tinkers-tools', {
  name: "Tinker's Tools",
  description:
    '<p><strong>Ability:</strong> Dexterity</p><p>Assemble and repair small mechanical devices and gadgets, from locks and clockwork to toys.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const WeaversTools = Traits.defineTrait('artisans-tools/weavers-tools', {
  name: "Weaver's Tools",
  description: '<p><strong>Ability:</strong> Dexterity</p><p>Weave cloth, mend garments, and make nets, rope, and baskets.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})

export const WoodcarversTools = Traits.defineTrait('artisans-tools/woodcarvers-tools', {
  name: "Woodcarver's Tools",
  description: '<p><strong>Ability:</strong> Dexterity</p><p>Carve wood into objects such as arrows, bows, clubs, staffs, and figurines.</p>',
  archetypes: [ArtisansTools],
  effects: [],
})
