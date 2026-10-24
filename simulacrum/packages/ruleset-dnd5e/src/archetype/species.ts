import { Abilities, Archetypes, Effects, Traits, CharacterValues } from '@simulacrum/ruleset'
import { CharacterOptions } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-dnd5e/action-type'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Expressions } from '@bessemer/cornerstone/expression'
import { SelectOriginFeat } from '@simulacrum/ruleset-dnd5e/archetype/feat'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/archetype/skill-proficiency'
import * as Spells from '@simulacrum/ruleset-dnd5e/archetype/spell'

export const Species = Archetypes.defineTraitArchetype('species', { name: 'Species' })

export const SelectSpecies = CharacterOptions.selectTraitOption('species/select', {
  name: 'Species',
  filter: { archetypes: [Species] },
})

export const Small = Traits.defineTrait('species/size/small', {
  name: 'Small',
  description: 'You are about 2 to 4 feet tall.',
  effects: [],
})

export const Medium = Traits.defineTrait('species/size/medium', {
  name: 'Medium',
  description: 'You are about 4 to 7 feet tall.',
  effects: [],
})

export const SelectSmallOrMedium = CharacterOptions.selectTraitOption('species/select-small-or-medium', {
  name: 'Size',
  filter: { specificOptions: [Medium, Small] },
})

export const Aasimar = Traits.defineTrait('species/aasimar', {
  name: 'Aasimar',
  description:
    'Mortals who carry a spark of the Upper Planes within their souls, able to fan that spark to bring light, ease wounds, and unleash the fury of the heavens.\n\n**Size:** Medium or Small. **Speed:** 30 feet.',
  archetypes: [Species],
  effects: [Effects.gainCharacterOption(SelectSmallOrMedium), Effects.gainAbility(Spells.Light)],
})

export const Darkvision = Abilities.defineAbility('species/darkvision', {
  name: 'Darkvision',
  prerequisites: [Traits.traitPrerequisite(Aasimar)],
  effects: [
    Effects.descriptive(
      'You can see in Dim Light within **60 feet** of you as if it were Bright Light, and in Darkness as if it were Dim Light. You discern colors in that Darkness only as shades of gray.'
    ),
  ],
})

export const CelestialResistance = Abilities.defineAbility('species/aasimar/celestial-resistance', {
  name: 'Celestial Resistance',
  prerequisites: [Traits.traitPrerequisite(Aasimar)],
  effects: [Effects.descriptive('You have Resistance to **Necrotic** and **Radiant** damage.')],
})

export const HealingHands = Abilities.defineAbility('species/aasimar/healing-hands', {
  name: 'Healing Hands',
  prerequisites: [Traits.traitPrerequisite(Aasimar)],
  effects: [
    Effects.descriptive(
      "As a **Magic action**, you touch a creature and roll a number of d4s equal to your Proficiency Bonus. The creature regains a number of Hit Points equal to the total rolled.\n\nOnce you use this trait, you can't use it again until you finish a Long Rest."
    ),
  ],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Use Healing Hands',
      action: ActionTypes.Action,
    },
  ],
})

export const CelestialRevelation = Abilities.defineAbility('species/aasimar/celestial-revelation', {
  name: 'Celestial Revelation',
  effects: [
    Effects.descriptive(
      "You transform for 1 minute or until you end it (no action required). Until the transformation ends, once on each of your turns you can deal extra damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your Proficiency Bonus, and is Necrotic for Necrotic Shroud or Radiant otherwise.\n\nOnce you transform, you can't do so again until you finish a Long Rest."
    ),
  ], // Available from character level 3
  prerequisites: [Traits.traitPrerequisite(Aasimar), Expressions.greaterThanOrEqual(CharacterValues.Level, 3)],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Heavenly Wings',
      description: 'Two spectral wings sprout from your back temporarily. Until the transformation ends, you have a Fly Speed equal to your Speed.',
      action: ActionTypes.BonusAction,
    },
    {
      name: 'Inner Radiance',
      description:
        'Searing light temporarily radiates from your eyes and mouth. For the duration, you shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes Radiant damage equal to your Proficiency Bonus.',
      action: ActionTypes.BonusAction,
    },
    {
      name: 'Necrotic Shroud',
      description:
        'Your eyes briefly become pools of darkness, and flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you must succeed on a Charisma saving throw (DC 8 plus your Charisma modifier and Proficiency Bonus) or have the Frightened condition until the end of your next turn.',
      action: ActionTypes.BonusAction,
    },
  ],
})

export const Dragonborn = Traits.defineTrait('species/dragonborn', {
  name: 'Dragonborn',
  description:
    "Descendants of dragons, with draconic features and a dragon's breath. **Size:** Medium. **Speed:** 30 feet.\n\n**Draconic Ancestry:** choose a dragon (Black, Blue, Brass, Bronze, Copper, Gold, Green, Red, Silver, or White), which sets your damage type.\n\n**Breath Weapon:** in place of an attack, exhale a 15-foot Cone or 30-foot Line; creatures make a Dexterity save or take 1d10 damage (rising with level), half on a success. Usable a number of times equal to your Proficiency Bonus per Long Rest.\n\n**Damage Resistance:** Resistance to your ancestry's damage type.\n\n**Darkvision:** 60 feet.\n\n**Draconic Flight:** at level 5, sprout spectral wings for 10 minutes as a Bonus Action, gaining a Fly Speed equal to your Speed (once per Long Rest).",
  archetypes: [Species],
  effects: [],
})

export const Dwarf = Traits.defineTrait('species/dwarf', {
  name: 'Dwarf',
  description:
    'Hardy folk raised from the earth, with a deep connection to stone. **Size:** Medium. **Speed:** 30 feet.\n\n**Darkvision:** 120 feet.\n\n**Dwarven Resilience:** Resistance to Poison damage, and Advantage on saves to avoid or end the Poisoned condition.\n\n**Dwarven Toughness:** your Hit Point maximum increases by 1, and by 1 more each time you gain a level.\n\n**Stonecunning:** as a Bonus Action, gain Tremorsense with a range of 60 feet for 10 minutes while on or touching stone. Usable a number of times equal to your Proficiency Bonus per Long Rest.',
  archetypes: [Species],
  effects: [],
})

export const Elf = Traits.defineTrait('species/elf', {
  name: 'Elf',
  description:
    "Long-lived people touched by the magic of the Feywild. **Size:** Medium. **Speed:** 30 feet.\n\n**Darkvision:** 60 feet.\n\n**Elven Lineage:** choose Drow, High Elf, or Wood Elf, each granting a cantrip and further spells at levels 3 and 5.\n\n**Fey Ancestry:** Advantage on saves to avoid or end the Charmed condition.\n\n**Keen Senses:** proficiency in Insight, Perception, or Survival.\n\n**Trance:** you finish a Long Rest in 4 hours of meditation, and magic can't put you to sleep.",
  archetypes: [Species],
  effects: [],
})

export const Gnome = Traits.defineTrait('species/gnome', {
  name: 'Gnome',
  description:
    'Small, curious folk with a knack for magic and invention. **Size:** Small. **Speed:** 30 feet.\n\n**Darkvision:** 60 feet.\n\n**Gnomish Cunning:** Advantage on Intelligence, Wisdom, and Charisma saving throws.\n\n**Gnomish Lineage:** choose Forest Gnome (Minor Illusion, and Speak with Animals a number of times equal to your Proficiency Bonus per Long Rest) or Rock Gnome (Mending and Prestidigitation, and tiny clockwork devices).',
  archetypes: [Species],
  effects: [],
})

export const Goliath = Traits.defineTrait('species/goliath', {
  name: 'Goliath',
  description:
    'Towering descendants of giants. **Size:** Medium. **Speed:** 35 feet.\n\n**Giant Ancestry:** choose a boon from your giant ancestors (Cloud, Fire, Frost, Hill, Stone, or Storm), usable a number of times equal to your Proficiency Bonus per Long Rest.\n\n**Large Form:** at level 5, become Large for 10 minutes as a Bonus Action, gaining Advantage on Strength checks and 10 feet of Speed (once per Long Rest).\n\n**Powerful Build:** Advantage on checks to end the Grappled condition, and you count as one size larger for carrying capacity.',
  archetypes: [Species],
  effects: [],
})

export const Halfling = Traits.defineTrait('species/halfling', {
  name: 'Halfling',
  description:
    'Small, cheerful folk who value home and comfort, yet are braver than their size suggests. **Size:** Small. **Speed:** 30 feet.\n\n**Brave:** Advantage on saves to avoid or end the Frightened condition.\n\n**Halfling Nimbleness:** you can move through the space of any creature that is a size larger than you.\n\n**Luck:** when you roll a 1 on the d20 of a D20 Test, you can reroll it and must use the new roll.\n\n**Naturally Stealthy:** you can take the Hide action when obscured only by a creature at least one size larger than you.',
  archetypes: [Species],
  effects: [],
})

// Skillful: proficiency in any one skill
export const SelectSkillfulProficiency = CharacterOptions.selectTraitOption('species/human/select-skillful-proficiency', {
  name: 'Skillful',
  filter: {
    archetypes: [SkillProficiencies.SkillProficiency],
  },
})

export const Human = Traits.defineTrait('species/human', {
  name: 'Human',
  description:
    'The most widespread and adaptable of the common peoples. **Size:** Medium or Small. **Speed:** 30 feet.\n\n**Resourceful:** you gain Heroic Inspiration whenever you finish a Long Rest.\n\n**Skillful:** proficiency in one skill of your choice.\n\n**Versatile:** you gain an Origin feat of your choice.',
  archetypes: [Species],
  effects: [Effects.gainCharacterOption(SelectSkillfulProficiency), Effects.gainCharacterOption(SelectOriginFeat)],
})

export const Orc = Traits.defineTrait('species/orc', {
  name: 'Orc',
  description:
    "Tireless wanderers gifted with the endurance to survive hardship. **Size:** Medium. **Speed:** 30 feet.\n\n**Adrenaline Rush:** take the Dash action as a Bonus Action, gaining Temporary Hit Points equal to your Proficiency Bonus. Usable a number of times equal to your Proficiency Bonus per Short or Long Rest.\n\n**Darkvision:** 120 feet.\n\n**Relentless Endurance:** when you're reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead (once per Long Rest).",
  archetypes: [Species],
  effects: [],
})

export const Tiefling = Traits.defineTrait('species/tiefling', {
  name: 'Tiefling',
  description:
    'Mortals bound by blood to the Lower Planes. **Size:** Medium or Small. **Speed:** 30 feet.\n\n**Darkvision:** 60 feet.\n\n**Fiendish Legacy:** choose Abyssal, Chthonic, or Infernal, granting a damage Resistance, a cantrip, and further spells at levels 3 and 5.\n\n**Otherworldly Presence:** you know the Thaumaturgy cantrip.',
  archetypes: [Species],
  effects: [],
})
