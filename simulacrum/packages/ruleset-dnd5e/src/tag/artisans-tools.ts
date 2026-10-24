import { Tags, Traits } from '@simulacrum/ruleset'
import { CharacterOptions } from '@simulacrum/ruleset'

export const ArtisansTools = Tags.defineTraitTag('artisans-tools', { name: "Artisan's Tools" })

export const SelectArtisansTools = CharacterOptions.selectTraitOption('artisans-tools/select', {
  name: "Artisan's Tools",
  filter: { tags: [ArtisansTools] },
})

export const AlchemistsSupplies = Traits.defineTrait('artisans-tools/alchemists-supplies', {
  name: "Alchemist's Supplies",
  description:
    "**Ability:** Intelligence\n\nIdentify unknown substances and prepare alchemical products such as acid, alchemist's fire, oils, and perfume.",
  tags: [ArtisansTools],
  effects: [],
})

export const BrewersSupplies = Traits.defineTrait('artisans-tools/brewers-supplies', {
  name: "Brewer's Supplies",
  description: '**Ability:** Intelligence\n\nBrew drinks, detect poisoned or contaminated drink, and purify water.',
  tags: [ArtisansTools],
  effects: [],
})

export const CalligraphersSupplies = Traits.defineTrait('artisans-tools/calligraphers-supplies', {
  name: "Calligrapher's Supplies",
  description: '**Ability:** Dexterity\n\nWrite with elegant penmanship, and produce scrolls, inks, and decorative documents.',
  tags: [ArtisansTools],
  effects: [],
})

export const CarpentersTools = Traits.defineTrait('artisans-tools/carpenters-tools', {
  name: "Carpenter's Tools",
  description: '**Ability:** Strength\n\nBuild or repair wooden structures and objects, such as walls, doors, furniture, and barricades.',
  tags: [ArtisansTools],
  effects: [],
})

export const CartographersTools = Traits.defineTrait('artisans-tools/cartographers-tools', {
  name: "Cartographer's Tools",
  description: "**Ability:** Wisdom\n\nDraft accurate maps, read and interpret existing ones, and keep track of where you've been.",
  tags: [ArtisansTools],
  effects: [],
})

export const CobblersTools = Traits.defineTrait('artisans-tools/cobblers-tools', {
  name: "Cobbler's Tools",
  description: '**Ability:** Dexterity\n\nMake and repair footwear, and modify boots to hide small compartments.',
  tags: [ArtisansTools],
  effects: [],
})

export const CooksUtensils = Traits.defineTrait('artisans-tools/cooks-utensils', {
  name: "Cook's Utensils",
  description: '**Ability:** Wisdom\n\nPrepare hearty meals, judge whether food is safe to eat, and make rations for the road.',
  tags: [ArtisansTools],
  effects: [],
})

export const GlassblowersTools = Traits.defineTrait('artisans-tools/glassblowers-tools', {
  name: "Glassblower's Tools",
  description: '**Ability:** Intelligence\n\nShape glass into vessels, lenses, and other objects, and judge the quality of glasswork.',
  tags: [ArtisansTools],
  effects: [],
})

export const JewelersTools = Traits.defineTrait('artisans-tools/jewelers-tools', {
  name: "Jeweler's Tools",
  description: '**Ability:** Intelligence\n\nCut and set gemstones, appraise jewelry, and identify precious stones.',
  tags: [ArtisansTools],
  effects: [],
})

export const LeatherworkersTools = Traits.defineTrait('artisans-tools/leatherworkers-tools', {
  name: "Leatherworker's Tools",
  description: '**Ability:** Dexterity\n\nCraft and repair leather goods, such as armor, pouches, saddles, and straps.',
  tags: [ArtisansTools],
  effects: [],
})

export const MasonsTools = Traits.defineTrait('artisans-tools/masons-tools', {
  name: "Mason's Tools",
  description: '**Ability:** Strength\n\nWork stone to build or repair walls and structures, and spot weaknesses in stonework.',
  tags: [ArtisansTools],
  effects: [],
})

export const PaintersSupplies = Traits.defineTrait('artisans-tools/painters-supplies', {
  name: "Painter's Supplies",
  description: '**Ability:** Wisdom\n\nPaint recognizable images and portraits, and create decorative symbols and banners.',
  tags: [ArtisansTools],
  effects: [],
})

export const PottersTools = Traits.defineTrait('artisans-tools/potters-tools', {
  name: "Potter's Tools",
  description: '**Ability:** Intelligence\n\nThrow and fire clay into jugs, pots, and other ceramics, and learn about a culture from its pottery.',
  tags: [ArtisansTools],
  effects: [],
})

export const SmithsTools = Traits.defineTrait('artisans-tools/smiths-tools', {
  name: "Smith's Tools",
  description: '**Ability:** Strength\n\nForge and repair metal weapons, armor, and tools, and pry open doors or containers.',
  tags: [ArtisansTools],
  effects: [],
})

export const TinkersTools = Traits.defineTrait('artisans-tools/tinkers-tools', {
  name: "Tinker's Tools",
  description: '**Ability:** Dexterity\n\nAssemble and repair small mechanical devices and gadgets, from locks and clockwork to toys.',
  tags: [ArtisansTools],
  effects: [],
})

export const WeaversTools = Traits.defineTrait('artisans-tools/weavers-tools', {
  name: "Weaver's Tools",
  description: '**Ability:** Dexterity\n\nWeave cloth, mend garments, and make nets, rope, and baskets.',
  tags: [ArtisansTools],
  effects: [],
})

export const WoodcarversTools = Traits.defineTrait('artisans-tools/woodcarvers-tools', {
  name: "Woodcarver's Tools",
  description: '**Ability:** Dexterity\n\nCarve wood into objects such as arrows, bows, clubs, staffs, and figurines.',
  tags: [ArtisansTools],
  effects: [],
})
