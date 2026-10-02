import { Archetypes, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'
import { ArtisansTools } from '@simulacrum/rulesets/dnd-5e/archetype/artisans-tools'

// Tools other than Artisan's Tools (which have their own module): kits and other single tools, Gaming Sets, and Musical Instruments
export const Tool = Archetypes.defineArchetype('tool', { name: 'Tool' })
export const GamingSet = Archetypes.defineArchetype('gaming-set', { name: 'Gaming Set' })
export const MusicalInstrument = Archetypes.defineArchetype('musical-instrument', { name: 'Musical Instrument' })

// Every kind of tool, for options that offer any tool (e.g. the Skilled feat)
export const AllTools = [ArtisansTools, Tool, GamingSet, MusicalInstrument]

export const DisguiseKit = Traits.defineTrait('tool/disguise-kit', {
  name: 'Disguise Kit',
  description: '<p><strong>Ability:</strong> Charisma</p><p>Apply makeup to change your appearance, and craft costumes.</p>',
  archetypes: [Tool],
  effects: [],
})

export const ForgeryKit = Traits.defineTrait('tool/forgery-kit', {
  name: 'Forgery Kit',
  description: "<p><strong>Ability:</strong> Dexterity</p><p>Mimic someone else's handwriting, or duplicate a wax seal.</p>",
  archetypes: [Tool],
  effects: [],
})

export const HerbalismKit = Traits.defineTrait('tool/herbalism-kit', {
  name: 'Herbalism Kit',
  description:
    "<p><strong>Ability:</strong> Intelligence</p><p>Identify plants, and craft antitoxin, candles, Healer's Kits, and Potions of Healing.</p>",
  archetypes: [Tool],
  effects: [],
})

export const NavigatorsTools = Traits.defineTrait('tool/navigators-tools', {
  name: "Navigator's Tools",
  description: '<p><strong>Ability:</strong> Wisdom</p><p>Plot a course, or work out your position by stargazing.</p>',
  archetypes: [Tool],
  effects: [],
})

export const PoisonersKit = Traits.defineTrait('tool/poisoners-kit', {
  name: "Poisoner's Kit",
  description: '<p><strong>Ability:</strong> Intelligence</p><p>Detect a poisoned object, and craft basic poison.</p>',
  archetypes: [Tool],
  effects: [],
})

export const ThievesTools = Traits.defineTrait('tool/thieves-tools', {
  name: "Thieves' Tools",
  description: '<p><strong>Ability:</strong> Dexterity</p><p>Pick a lock, or disarm a trap.</p>',
  archetypes: [Tool],
  effects: [],
})

const GamingSetDescription = '<p><strong>Ability:</strong> Wisdom</p><p>Discern whether someone is cheating, or win a game.</p>'

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

const MusicalInstrumentDescription = '<p><strong>Ability:</strong> Charisma</p><p>Play a known tune, or improvise a song.</p>'

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

export const SelectGamingSet = CharacterOptions.selectTraitOption('gaming-set/select', { archetypes: [GamingSet] })

export const SelectMusicalInstrument = CharacterOptions.selectTraitOption('musical-instrument/select', { archetypes: [MusicalInstrument] })
