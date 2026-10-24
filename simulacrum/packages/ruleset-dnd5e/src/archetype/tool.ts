import { Archetypes, Traits } from '@simulacrum/ruleset'
import { CharacterOptions } from '@simulacrum/ruleset'
import { ArtisansTools } from '@simulacrum/ruleset-dnd5e/archetype/artisans-tools'

// Tools other than Artisan's Tools (which have their own module): kits and other single tools, Gaming Sets, and Musical Instruments
export const Tool = Archetypes.defineArchetype('tool', { name: 'Tool' })
export const GamingSet = Archetypes.defineArchetype('gaming-set', { name: 'Gaming Set' })
export const MusicalInstrument = Archetypes.defineArchetype('musical-instrument', { name: 'Musical Instrument' })

// Every kind of tool, for options that offer any tool (e.g. the Skilled feat)
export const AllTools = [ArtisansTools, Tool, GamingSet, MusicalInstrument]

export const DisguiseKit = Traits.defineTrait('tool/disguise-kit', {
  name: 'Disguise Kit',
  description: '**Ability:** Charisma\n\nApply makeup to change your appearance, and craft costumes.',
  archetypes: [Tool],
  effects: [],
})

export const ForgeryKit = Traits.defineTrait('tool/forgery-kit', {
  name: 'Forgery Kit',
  description: "**Ability:** Dexterity\n\nMimic someone else's handwriting, or duplicate a wax seal.",
  archetypes: [Tool],
  effects: [],
})

export const HerbalismKit = Traits.defineTrait('tool/herbalism-kit', {
  name: 'Herbalism Kit',
  description: "**Ability:** Intelligence\n\nIdentify plants, and craft antitoxin, candles, Healer's Kits, and Potions of Healing.",
  archetypes: [Tool],
  effects: [],
})

export const NavigatorsTools = Traits.defineTrait('tool/navigators-tools', {
  name: "Navigator's Tools",
  description: '**Ability:** Wisdom\n\nPlot a course, or work out your position by stargazing.',
  archetypes: [Tool],
  effects: [],
})

export const PoisonersKit = Traits.defineTrait('tool/poisoners-kit', {
  name: "Poisoner's Kit",
  description: '**Ability:** Intelligence\n\nDetect a poisoned object, and craft basic poison.',
  archetypes: [Tool],
  effects: [],
})

export const ThievesTools = Traits.defineTrait('tool/thieves-tools', {
  name: "Thieves' Tools",
  description: '**Ability:** Dexterity\n\nPick a lock, or disarm a trap.',
  archetypes: [Tool],
  effects: [],
})

const GamingSetDescription = '**Ability:** Wisdom\n\nDiscern whether someone is cheating, or win a game.'

export const DiceSet = Traits.defineTrait('gaming-set/dice', {
  name: 'Dice',
  description: GamingSetDescription,
  archetypes: [GamingSet],
  effects: [],
})

export const DragonchessSet = Traits.defineTrait('gaming-set/dragonchess', {
  name: 'Dragonchess',
  description: GamingSetDescription,
  archetypes: [GamingSet],
  effects: [],
})

export const PlayingCards = Traits.defineTrait('gaming-set/playing-cards', {
  name: 'Playing Cards',
  description: GamingSetDescription,
  archetypes: [GamingSet],
  effects: [],
})

export const ThreeDragonAnteSet = Traits.defineTrait('gaming-set/three-dragon-ante', {
  name: 'Three-Dragon Ante',
  description: GamingSetDescription,
  archetypes: [GamingSet],
  effects: [],
})

const MusicalInstrumentDescription = '**Ability:** Charisma\n\nPlay a known tune, or improvise a song.'

export const Bagpipes = Traits.defineTrait('musical-instrument/bagpipes', {
  name: 'Bagpipes',
  description: MusicalInstrumentDescription,
  archetypes: [MusicalInstrument],
  effects: [],
})

export const Drum = Traits.defineTrait('musical-instrument/drum', {
  name: 'Drum',
  description: MusicalInstrumentDescription,
  archetypes: [MusicalInstrument],
  effects: [],
})

export const Dulcimer = Traits.defineTrait('musical-instrument/dulcimer', {
  name: 'Dulcimer',
  description: MusicalInstrumentDescription,
  archetypes: [MusicalInstrument],
  effects: [],
})

export const Flute = Traits.defineTrait('musical-instrument/flute', {
  name: 'Flute',
  description: MusicalInstrumentDescription,
  archetypes: [MusicalInstrument],
  effects: [],
})

export const Horn = Traits.defineTrait('musical-instrument/horn', {
  name: 'Horn',
  description: MusicalInstrumentDescription,
  archetypes: [MusicalInstrument],
  effects: [],
})

export const Lute = Traits.defineTrait('musical-instrument/lute', {
  name: 'Lute',
  description: MusicalInstrumentDescription,
  archetypes: [MusicalInstrument],
  effects: [],
})

export const Lyre = Traits.defineTrait('musical-instrument/lyre', {
  name: 'Lyre',
  description: MusicalInstrumentDescription,
  archetypes: [MusicalInstrument],
  effects: [],
})

export const PanFlute = Traits.defineTrait('musical-instrument/pan-flute', {
  name: 'Pan Flute',
  description: MusicalInstrumentDescription,
  archetypes: [MusicalInstrument],
  effects: [],
})

export const Shawm = Traits.defineTrait('musical-instrument/shawm', {
  name: 'Shawm',
  description: MusicalInstrumentDescription,
  archetypes: [MusicalInstrument],
  effects: [],
})

export const Viol = Traits.defineTrait('musical-instrument/viol', {
  name: 'Viol',
  description: MusicalInstrumentDescription,
  archetypes: [MusicalInstrument],
  effects: [],
})

export const SelectGamingSet = CharacterOptions.selectTraitOption('gaming-set/select', {
  name: 'Gaming Set',
  filter: { archetypes: [GamingSet] },
})

export const SelectMusicalInstrument = CharacterOptions.selectTraitOption('musical-instrument/select', {
  name: 'Musical Instrument',
  filter: {
    archetypes: [MusicalInstrument],
  },
})
