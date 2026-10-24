import { Archetypes, CharacterOptions, Traits } from '@simulacrum/ruleset'

// FUTURE only the plans available from Artificer level 2 are defined; the level 6+, 10+, and 14+ plans come with those levels

export const MagicItemPlan = Archetypes.defineTraitArchetype('artificer/magic-item-plan', { name: 'Magic Item Plan' })

export const SelectMagicItemPlan = CharacterOptions.selectTraitOption('artificer/select-magic-item-plan', {
  name: 'Plans Known',
  filter: {
    archetypes: [MagicItemPlan],
  },
})

export const AlchemyJug = Traits.defineTrait('artificer/plan/alchemy-jug', {
  name: 'Alchemy Jug',
  description:
    'As a Magic action, you command the jug to pour a liquid of your choice, such as fresh water, salt water, wine, oil, or acid. Each liquid can be produced only once until the next dawn.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const BagOfHolding = Traits.defineTrait('artificer/plan/bag-of-holding', {
  name: 'Bag of Holding',
  description: 'A bag whose interior is an extradimensional space that holds up to 500 pounds, while the bag itself always weighs 5 pounds.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const CapOfWaterBreathing = Traits.defineTrait('artificer/plan/cap-of-water-breathing', {
  name: 'Cap of Water Breathing',
  description:
    'While wearing this cap underwater, you can take a Magic action to create a bubble of air around your head that lets you breathe normally.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const CommonMagicItem = Traits.defineTrait('artificer/plan/common-magic-item', {
  name: 'Common Magic Item',
  description:
    "A Common magic item of your choice that isn't a Potion, a Scroll, or cursed. You can learn this plan multiple times, choosing a different item each time.",
  archetypes: [MagicItemPlan],
  repeatable: true,
  effects: [],
})

export const GogglesOfNight = Traits.defineTrait('artificer/plan/goggles-of-night', {
  name: 'Goggles of Night',
  description: 'While wearing these goggles, you have Darkvision out to 60 feet, or your existing Darkvision extends by 60 feet.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const ManifoldTool = Traits.defineTrait('artificer/plan/manifold-tool', {
  name: 'Manifold Tool',
  description:
    "**Requires Attunement.** As a Magic action, you touch this tool and transform it into a type of Artisan's Tools of your choice. You have proficiency with it in whatever form it takes.",
  archetypes: [MagicItemPlan],
  effects: [],
})

export const RepeatingShot = Traits.defineTrait('artificer/plan/repeating-shot', {
  name: 'Repeating Shot',
  description:
    '**Requires Attunement.** A weapon with the Ammunition property that grants +1 to attack and damage rolls for ranged attacks and ignores the Loading property. Without ammunition, it creates its own for each ranged attack, which vanishes after it hits or misses.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const ReturningWeapon = Traits.defineTrait('artificer/plan/returning-weapon', {
  name: 'Returning Weapon',
  description:
    'A weapon with the Thrown property that grants +1 to attack and damage rolls, and returns to your hand immediately after you make a ranged attack with it.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const RopeOfClimbing = Traits.defineTrait('artificer/plan/rope-of-climbing', {
  name: 'Rope of Climbing',
  description:
    'A 60-foot rope that, as a Magic action, you can command to move toward a destination, knot itself, fasten to an object, or unfasten and return to you.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const SendingStones = Traits.defineTrait('artificer/plan/sending-stones', {
  name: 'Sending Stones',
  description:
    "A pair of stones. While holding one, you can cast **Sending** from it, targeting whoever carries the other. Once used, the pair can't be used again until the next dawn.",
  archetypes: [MagicItemPlan],
  effects: [],
})

export const Shield1 = Traits.defineTrait('artificer/plan/shield-1', {
  name: 'Shield, +1',
  description: "While holding this Shield, you gain a +1 bonus to AC in addition to the Shield's normal bonus.",
  archetypes: [MagicItemPlan],
  effects: [],
})

export const WandOfMagicDetection = Traits.defineTrait('artificer/plan/wand-of-magic-detection', {
  name: 'Wand of Magic Detection',
  description: 'The wand has 3 charges. While holding it, you can expend 1 charge to cast **Detect Magic**. It regains 1d3 charges daily at dawn.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const WandOfSecrets = Traits.defineTrait('artificer/plan/wand-of-secrets', {
  name: 'Wand of Secrets',
  description:
    'The wand has 3 charges. As a Magic action, you can expend 1 charge, and if a secret door or trap is within 60 feet of you, the wand points at the nearest one. It regains 1d3 charges daily at dawn.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const WandOfTheWarMage1 = Traits.defineTrait('artificer/plan/wand-of-the-war-mage-1', {
  name: 'Wand of the War Mage, +1',
  description:
    '**Requires Attunement by a Spellcaster.** While holding this wand, you gain a +1 bonus to spell attack rolls and ignore Half Cover when making a spell attack.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const Weapon1 = Traits.defineTrait('artificer/plan/weapon-1', {
  name: 'Weapon, +1',
  description: 'You have a +1 bonus to attack and damage rolls made with this magic weapon.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const WrapsOfUnarmedPower1 = Traits.defineTrait('artificer/plan/wraps-of-unarmed-power-1', {
  name: 'Wraps of Unarmed Power, +1',
  description: 'While wearing these wraps, you have a +1 bonus to attack and damage rolls made with your Unarmed Strikes.',
  archetypes: [MagicItemPlan],
  effects: [],
})

export const Level2Plans = [
  AlchemyJug,
  BagOfHolding,
  CapOfWaterBreathing,
  CommonMagicItem,
  GogglesOfNight,
  ManifoldTool,
  RepeatingShot,
  ReturningWeapon,
  RopeOfClimbing,
  SendingStones,
  Shield1,
  WandOfMagicDetection,
  WandOfSecrets,
  WandOfTheWarMage1,
  Weapon1,
  WrapsOfUnarmedPower1,
]
