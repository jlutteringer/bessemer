import { Abilities, Archetypes, Effects, Traits } from '@simulacrum/ruleset'
import { CharacterOptions } from '@simulacrum/ruleset'
import { ActionType } from '@simulacrum/ruleset/ability'
import { CharacterValues } from '@simulacrum/ruleset/character'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Expressions } from '@bessemer/cornerstone/expression'
import { SelectOriginFeat } from '@simulacrum/ruleset-dnd5e/archetype/feat'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/archetype/skill-proficiency'
import * as Spells from '@simulacrum/ruleset-dnd5e/archetype/spell'

export const Species = Archetypes.defineArchetype('species', { name: 'Species' })

export const SelectSpecies = CharacterOptions.selectTraitOption('species/select', { archetypes: [Species] })

export const Small = Traits.defineTrait('species/size/small', {
  name: 'Small',
  description: '<p>You are about 2 to 4 feet tall.</p>',
  effects: [],
})

export const Medium = Traits.defineTrait('species/size/medium', {
  name: 'Medium',
  description: '<p>You are about 4 to 7 feet tall.</p>',
  effects: [],
})

export const SelectSmallOrMedium = CharacterOptions.selectTraitOption('species/select-small-or-medium', { specificOptions: [Medium, Small] }, 'Size')

export const Darkvision = Abilities.defineAbility('species/darkvision', {
  name: 'Darkvision',
  effects: [
    Effects.descriptive(
      '<p>You can see in Dim Light within <strong>60 feet</strong> of you as if it were Bright Light, and in Darkness as if it were Dim Light. You discern colors in that Darkness only as shades of gray.</p>'
    ),
  ],
})

export const CelestialResistance = Abilities.defineAbility('species/aasimar/celestial-resistance', {
  name: 'Celestial Resistance',
  effects: [Effects.descriptive('<p>You have Resistance to <strong>Necrotic</strong> and <strong>Radiant</strong> damage.</p>')],
})

export const HealingHands = Abilities.defineAbility('species/aasimar/healing-hands', {
  name: 'Healing Hands',
  effects: [
    Effects.descriptive(
      "<p>As a <strong>Magic action</strong>, you touch a creature and roll a number of d4s equal to your Proficiency Bonus. The creature regains a number of Hit Points equal to the total rolled.</p><p>Once you use this trait, you can't use it again until you finish a Long Rest.</p>"
    ),
  ],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Use Healing Hands',
      action: ActionType.Standard,
    },
  ],
})

export const CelestialRevelation = Abilities.defineAbility('species/aasimar/celestial-revelation', {
  name: 'Celestial Revelation',
  effects: [
    Effects.descriptive(
      "<p>You transform for 1 minute or until you end it (no action required). Until the transformation ends, once on each of your turns you can deal extra damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your Proficiency Bonus, and is Necrotic for Necrotic Shroud or Radiant otherwise.</p><p>Once you transform, you can't do so again until you finish a Long Rest.</p>"
    ),
  ],
  // Available from character level 3
  prerequisites: [Expressions.greaterThanOrEqual(CharacterValues.Level, 3)],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Heavenly Wings',
      description: 'Two spectral wings sprout from your back temporarily. Until the transformation ends, you have a Fly Speed equal to your Speed.',
      action: ActionType.Bonus,
    },
    {
      name: 'Inner Radiance',
      description:
        'Searing light temporarily radiates from your eyes and mouth. For the duration, you shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes Radiant damage equal to your Proficiency Bonus.',
      action: ActionType.Bonus,
    },
    {
      name: 'Necrotic Shroud',
      description:
        'Your eyes briefly become pools of darkness, and flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you must succeed on a Charisma saving throw (DC 8 plus your Charisma modifier and Proficiency Bonus) or have the Frightened condition until the end of your next turn.',
      action: ActionType.Bonus,
    },
  ],
})

export const Aasimar = Traits.defineTrait('species/aasimar', {
  name: 'Aasimar',
  description:
    '<p>Mortals who carry a spark of the Upper Planes within their souls, able to fan that spark to bring light, ease wounds, and unleash the fury of the heavens.</p><p><strong>Size:</strong> Medium or Small. <strong>Speed:</strong> 30 feet.</p>',
  archetypes: [Species],
  effects: [
    Effects.gainCharacterOption(SelectSmallOrMedium),
    Effects.gainAbility(CelestialResistance),
    Effects.gainAbility(Darkvision),
    Effects.gainAbility(HealingHands),
    Effects.gainAbility(Spells.Light),
    Effects.gainAbility(CelestialRevelation),
  ],
})

export const Dragonborn = Traits.defineTrait('species/dragonborn', {
  name: 'Dragonborn',
  description:
    "<p>Descendants of dragons, with draconic features and a dragon's breath. <strong>Size:</strong> Medium. <strong>Speed:</strong> 30 feet.</p><p><strong>Draconic Ancestry:</strong> choose a dragon (Black, Blue, Brass, Bronze, Copper, Gold, Green, Red, Silver, or White), which sets your damage type.</p><p><strong>Breath Weapon:</strong> in place of an attack, exhale a 15-foot Cone or 30-foot Line; creatures make a Dexterity save or take 1d10 damage (rising with level), half on a success. Usable a number of times equal to your Proficiency Bonus per Long Rest.</p><p><strong>Damage Resistance:</strong> Resistance to your ancestry's damage type.</p><p><strong>Darkvision:</strong> 60 feet.</p><p><strong>Draconic Flight:</strong> at level 5, sprout spectral wings for 10 minutes as a Bonus Action, gaining a Fly Speed equal to your Speed (once per Long Rest).</p>",
  archetypes: [Species],
  effects: [],
})

export const Dwarf = Traits.defineTrait('species/dwarf', {
  name: 'Dwarf',
  description:
    '<p>Hardy folk raised from the earth, with a deep connection to stone. <strong>Size:</strong> Medium. <strong>Speed:</strong> 30 feet.</p><p><strong>Darkvision:</strong> 120 feet.</p><p><strong>Dwarven Resilience:</strong> Resistance to Poison damage, and Advantage on saves to avoid or end the Poisoned condition.</p><p><strong>Dwarven Toughness:</strong> your Hit Point maximum increases by 1, and by 1 more each time you gain a level.</p><p><strong>Stonecunning:</strong> as a Bonus Action, gain Tremorsense with a range of 60 feet for 10 minutes while on or touching stone. Usable a number of times equal to your Proficiency Bonus per Long Rest.</p>',
  archetypes: [Species],
  effects: [],
})

export const Elf = Traits.defineTrait('species/elf', {
  name: 'Elf',
  description:
    "'<p>Long-lived people touched by the magic of the Feywild. <strong>Size:</strong> Medium. <strong>Speed:</strong> 30 feet.</p><p><strong>Darkvision:</strong> 60 feet.</p><p><strong>Elven Lineage:</strong> choose Drow, High Elf, or Wood Elf, each granting a cantrip and further spells at levels 3 and 5.</p><p><strong>Fey Ancestry:</strong> Advantage on saves to avoid or end the Charmed condition.</p><p><strong>Keen Senses:</strong> proficiency in Insight, Perception, or Survival.</p><p><strong>Trance:</strong> you finish a Long Rest in 4 hours of meditation, and magic can't put you to sleep.</p>",
  archetypes: [Species],
  effects: [],
})

export const Gnome = Traits.defineTrait('species/gnome', {
  name: 'Gnome',
  description:
    '<p>Small, curious folk with a knack for magic and invention. <strong>Size:</strong> Small. <strong>Speed:</strong> 30 feet.</p><p><strong>Darkvision:</strong> 60 feet.</p><p><strong>Gnomish Cunning:</strong> Advantage on Intelligence, Wisdom, and Charisma saving throws.</p><p><strong>Gnomish Lineage:</strong> choose Forest Gnome (Minor Illusion, and Speak with Animals a number of times equal to your Proficiency Bonus per Long Rest) or Rock Gnome (Mending and Prestidigitation, and tiny clockwork devices).</p>',
  archetypes: [Species],
  effects: [],
})

export const Goliath = Traits.defineTrait('species/goliath', {
  name: 'Goliath',
  description:
    '<p>Towering descendants of giants. <strong>Size:</strong> Medium. <strong>Speed:</strong> 35 feet.</p><p><strong>Giant Ancestry:</strong> choose a boon from your giant ancestors (Cloud, Fire, Frost, Hill, Stone, or Storm), usable a number of times equal to your Proficiency Bonus per Long Rest.</p><p><strong>Large Form:</strong> at level 5, become Large for 10 minutes as a Bonus Action, gaining Advantage on Strength checks and 10 feet of Speed (once per Long Rest).</p><p><strong>Powerful Build:</strong> Advantage on checks to end the Grappled condition, and you count as one size larger for carrying capacity.</p>',
  archetypes: [Species],
  effects: [],
})

export const Halfling = Traits.defineTrait('species/halfling', {
  name: 'Halfling',
  description:
    '<p>Small, cheerful folk who value home and comfort, yet are braver than their size suggests. <strong>Size:</strong> Small. <strong>Speed:</strong> 30 feet.</p><p><strong>Brave:</strong> Advantage on saves to avoid or end the Frightened condition.</p><p><strong>Halfling Nimbleness:</strong> you can move through the space of any creature that is a size larger than you.</p><p><strong>Luck:</strong> when you roll a 1 on the d20 of a D20 Test, you can reroll it and must use the new roll.</p><p><strong>Naturally Stealthy:</strong> you can take the Hide action when obscured only by a creature at least one size larger than you.</p>',
  archetypes: [Species],
  effects: [],
})

// Skillful: proficiency in any one skill
export const SelectSkillfulProficiency = CharacterOptions.selectTraitOption(
  'species/human/select-skillful-proficiency',
  { archetypes: [SkillProficiencies.SkillProficiency] },
  'Skillful'
)

export const Human = Traits.defineTrait('species/human', {
  name: 'Human',
  description:
    '<p>The most widespread and adaptable of the common peoples. <strong>Size:</strong> Medium or Small. <strong>Speed:</strong> 30 feet.</p><p><strong>Resourceful:</strong> you gain Heroic Inspiration whenever you finish a Long Rest.</p><p><strong>Skillful:</strong> proficiency in one skill of your choice.</p><p><strong>Versatile:</strong> you gain an Origin feat of your choice.</p>',
  archetypes: [Species],
  effects: [Effects.gainCharacterOption(SelectSkillfulProficiency), Effects.gainCharacterOption(SelectOriginFeat)],
})

export const Orc = Traits.defineTrait('species/orc', {
  name: 'Orc',
  description:
    "<p>Tireless wanderers gifted with the endurance to survive hardship. <strong>Size:</strong> Medium. <strong>Speed:</strong> 30 feet.</p><p><strong>Adrenaline Rush:</strong> take the Dash action as a Bonus Action, gaining Temporary Hit Points equal to your Proficiency Bonus. Usable a number of times equal to your Proficiency Bonus per Short or Long Rest.</p><p><strong>Darkvision:</strong> 120 feet.</p><p><strong>Relentless Endurance:</strong> when you're reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead (once per Long Rest).</p>",
  archetypes: [Species],
  effects: [],
})

export const Tiefling = Traits.defineTrait('species/tiefling', {
  name: 'Tiefling',
  description:
    '<p>Mortals bound by blood to the Lower Planes. <strong>Size:</strong> Medium or Small. <strong>Speed:</strong> 30 feet.</p><p><strong>Darkvision:</strong> 60 feet.</p><p><strong>Fiendish Legacy:</strong> choose Abyssal, Chthonic, or Infernal, granting a damage Resistance, a cantrip, and further spells at levels 3 and 5.</p><p><strong>Otherworldly Presence:</strong> you know the Thaumaturgy cantrip.</p>',
  archetypes: [Species],
  effects: [],
})
