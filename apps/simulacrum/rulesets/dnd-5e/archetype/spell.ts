import { Archetypes, Traits } from '@simulacrum/common'

// Each spell has two archetypes: its rank and its school. An option offers a trait only when all of the trait's archetypes are in
// the option's filter, so a filter lists the ranks it allows alongside the schools it allows (e.g. ranks 1-2 of any school, or
// ranks 1-2 of Evocation only). Class spell lists are passed as specificOptions, since a spell can be on several classes' lists.
// FUTURE these are stubs: spell effects, components, and casting time aren't modelled yet
export const Rank1 = Archetypes.defineArchetype('spell/rank-1', { name: 'Rank 1' })
export const Rank2 = Archetypes.defineArchetype('spell/rank-2', { name: 'Rank 2' })
export const Rank3 = Archetypes.defineArchetype('spell/rank-3', { name: 'Rank 3' })

export const Abjuration = Archetypes.defineArchetype('spell/abjuration', { name: 'Abjuration' })
export const Conjuration = Archetypes.defineArchetype('spell/conjuration', { name: 'Conjuration' })
export const Divination = Archetypes.defineArchetype('spell/divination', { name: 'Divination' })
export const Enchantment = Archetypes.defineArchetype('spell/enchantment', { name: 'Enchantment' })
export const Evocation = Archetypes.defineArchetype('spell/evocation', { name: 'Evocation' })
export const Illusion = Archetypes.defineArchetype('spell/illusion', { name: 'Illusion' })
export const Necromancy = Archetypes.defineArchetype('spell/necromancy', { name: 'Necromancy' })
export const Transmutation = Archetypes.defineArchetype('spell/transmutation', { name: 'Transmutation' })

export const Schools = [Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, Transmutation]

// Spells of the given rank or lower, of any school
export const UpToRank1 = [Rank1, ...Schools]
export const UpToRank2 = [Rank1, Rank2, ...Schools]
export const UpToRank3 = [Rank1, Rank2, Rank3, ...Schools]

export const Alarm = Traits.defineTrait('spell/alarm', {
  name: 'Alarm',
  description:
    "<p><strong>Abjuration</strong> · 1 minute or Ritual · 30 feet · V, S, M (a bell and silver wire) · 8 hours</p><p>Ward a door, window, or area up to a 20-foot Cube. Whenever a creature you didn't exempt touches or enters it, you're warned, either by a handbell sound heard within 60 feet or by a mental ping that reaches you within 1 mile (and wakes you if you're asleep).</p>",
  archetypes: [Rank1, Abjuration],
  effects: [],
})

export const BurningHands = Traits.defineTrait('spell/burning-hands', {
  name: 'Burning Hands',
  description:
    '<p><strong>Evocation</strong> · Action · Self · V, S · Instantaneous</p><p>Flames fan out in a 15-foot Cone. Creatures there make a Dexterity save, taking 3d6 Fire damage on a failure or half on a success, and unattended flammable objects catch fire.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 1.</p>',
  archetypes: [Rank1, Evocation],
  effects: [],
})

export const CharmPerson = Traits.defineTrait('spell/charm-person', {
  name: 'Charm Person',
  description:
    "<p><strong>Enchantment</strong> · Action · 30 feet · V, S · 1 hour</p><p>A Humanoid you can see makes a Wisdom save (with Advantage if you or your allies are fighting it). On a failure it's Charmed by you and treats you as Friendly until the spell ends or it's harmed by you or your allies. It knows it was charmed once the spell ends.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 1.</p>",
  archetypes: [Rank1, Enchantment],
  effects: [],
})

export const ChromaticOrb = Traits.defineTrait('spell/chromatic-orb', {
  name: 'Chromatic Orb',
  description:
    '<p><strong>Evocation</strong> · Action · 90 feet · V, S, M (a diamond worth 50+ GP) · Instantaneous</p><p>Make a ranged spell attack with an orb of Acid, Cold, Fire, Lightning, Poison, or Thunder energy, dealing 3d8 damage of that type on a hit. If two or more damage dice match, the orb jumps to a new target within 30 feet for another attack.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 1, and the orb can jump up to once per slot level (never hitting the same creature twice).</p>',
  archetypes: [Rank1, Evocation],
  effects: [],
})

export const ColorSpray = Traits.defineTrait('spell/color-spray', {
  name: 'Color Spray',
  description:
    '<p><strong>Illusion</strong> · Action · Self · V, S, M (a pinch of colorful sand) · Instantaneous</p><p>A burst of flashing colors fills a 15-foot Cone. Each creature in it must pass a Constitution save or be Blinded until the end of your next turn.</p>',
  archetypes: [Rank1, Illusion],
  effects: [],
})

export const ComprehendLanguages = Traits.defineTrait('spell/comprehend-languages', {
  name: 'Comprehend Languages',
  description:
    '<p><strong>Divination</strong> · Action or Ritual · Self · V, S, M (a pinch of soot and salt) · 1 hour</p><p>You understand the literal meaning of any spoken or signed language, and can read any written language you touch (about a page per minute). Codes and secret messages stay hidden.</p>',
  archetypes: [Rank1, Divination],
  effects: [],
})

export const DetectMagic = Traits.defineTrait('spell/detect-magic', {
  name: 'Detect Magic',
  description:
    '<p><strong>Divination</strong> · Action or Ritual · Self · V, S · Concentration, up to 10 minutes</p><p>You sense magic within 30 feet. As a Magic action you can see an aura around magical creatures or objects in view and learn the school of any spell involved. Thick stone, dirt, wood, metal, or a sheet of lead blocks it.</p>',
  archetypes: [Rank1, Divination],
  effects: [],
})

export const DisguiseSelf = Traits.defineTrait('spell/disguise-self', {
  name: 'Disguise Self',
  description:
    "<p><strong>Illusion</strong> · Action · Self · V, S · 1 hour</p><p>You change how you and your gear look, including up to a foot of height and your build, as long as you keep the same basic body shape. The illusion doesn't survive touch, and a creature that Studies you can see through it with an Intelligence (Investigation) check against your spell save DC.</p>",
  archetypes: [Rank1, Illusion],
  effects: [],
})

export const ExpeditiousRetreat = Traits.defineTrait('spell/expeditious-retreat', {
  name: 'Expeditious Retreat',
  description:
    '<p><strong>Transmutation</strong> · Bonus Action · Self · V, S · Concentration, up to 10 minutes</p><p>You Dash immediately, and for the duration you can Dash again as a Bonus Action.</p>',
  archetypes: [Rank1, Transmutation],
  effects: [],
})

export const FalseLife = Traits.defineTrait('spell/false-life', {
  name: 'False Life',
  description:
    '<p><strong>Necromancy</strong> · Action · Self · V, S, M (a drop of alcohol) · Instantaneous</p><p>You gain 2d4 + 4 Temporary Hit Points.</p><p><strong>Higher Levels:</strong> +5 Temporary Hit Points per slot level above 1.</p>',
  archetypes: [Rank1, Necromancy],
  effects: [],
})

export const FeatherFall = Traits.defineTrait('spell/feather-fall', {
  name: 'Feather Fall',
  description:
    '<p><strong>Transmutation</strong> · Reaction, which you take when you or a creature you can see within 60 feet of you falls · 60 feet · V, M (a small feather or piece of down) · 1 minute</p><p>Up to five falling creatures in range descend at only 60 feet per round and take no falling damage if they land while the spell lasts.</p>',
  archetypes: [Rank1, Transmutation],
  effects: [],
})

export const FindFamiliar = Traits.defineTrait('spell/find-familiar', {
  name: 'Find Familiar',
  description:
    "<p><strong>Conjuration</strong> · 1 hour or Ritual · 10 feet · V, S, M (burning incense worth 10+ GP, which the spell consumes) · Instantaneous</p><p>A spirit serves you as a familiar in the form of a tiny animal (a Beast of Challenge Rating 0), but it counts as a Celestial, Fey, or Fiend. It obeys you but can't attack. Within 100 feet you can speak with it telepathically, borrow its senses as a Bonus Action, and have it deliver your touch spells with its Reaction.</p><p>At 0 Hit Points it vanishes until you cast the spell again. You can dismiss it to a pocket dimension and recall it, and you can only have one familiar at a time.</p>",
  archetypes: [Rank1, Conjuration],
  effects: [],
})

export const FogCloud = Traits.defineTrait('spell/fog-cloud', {
  name: 'Fog Cloud',
  description:
    '<p><strong>Conjuration</strong> · Action · 120 feet · V, S · Concentration, up to 1 hour</p><p>A 20-foot-radius Sphere of fog makes its area Heavily Obscured until the spell ends or a strong wind scatters it.</p><p><strong>Higher Levels:</strong> radius +20 feet per slot level above 1.</p>',
  archetypes: [Rank1, Conjuration],
  effects: [],
})

export const Grease = Traits.defineTrait('spell/grease', {
  name: 'Grease',
  description:
    '<p><strong>Conjuration</strong> · Action · 60 feet · V, S, M (a bit of pork rind or butter) · 1 minute</p><p>Slick grease makes a 10-foot square Difficult Terrain. Creatures standing there when it appears, entering it, or ending their turn in it must pass a Dexterity save or fall Prone.</p>',
  archetypes: [Rank1, Conjuration],
  effects: [],
})

export const IceKnife = Traits.defineTrait('spell/ice-knife', {
  name: 'Ice Knife',
  description:
    '<p><strong>Conjuration</strong> · Action · 60 feet · S, M (a drop of water or a piece of ice) · Instantaneous</p><p>Make a ranged spell attack with a shard of ice for 1d10 Piercing damage on a hit. Hit or miss, it shatters, and the target and everything within 5 feet of it must pass a Dexterity save or take 2d6 Cold damage.</p><p><strong>Higher Levels:</strong> +1d6 Cold damage per slot level above 1.</p>',
  archetypes: [Rank1, Conjuration],
  effects: [],
})

export const Identify = Traits.defineTrait('spell/identify', {
  name: 'Identify',
  description:
    '<p><strong>Divination</strong> · 1 minute or Ritual · Touch · V, S, M (a pearl worth 100+ GP) · Instantaneous</p><p>Touch an object while casting to learn its magical properties, how to use it, whether it needs Attunement, its charges, and any spells affecting or creating it. Touching a creature instead reveals the spells currently affecting it.</p>',
  archetypes: [Rank1, Divination],
  effects: [],
})

export const IllusoryScript = Traits.defineTrait('spell/illusory-script', {
  name: 'Illusory Script',
  description:
    '<p><strong>Illusion</strong> · 1 minute or Ritual · Touch · S, M (ink worth 10+ GP, which the spell consumes) · 10 days</p><p>You write a message that only you and creatures you choose can read. To everyone else it looks like unreadable magical script, or you can make it look like a different message in a language you know. Truesight reveals the real text, and dispelling the spell erases both.</p>',
  archetypes: [Rank1, Illusion],
  effects: [],
})

export const Jump = Traits.defineTrait('spell/jump', {
  name: 'Jump',
  description:
    '<p><strong>Transmutation</strong> · Bonus Action · Touch · V, S, M (a grasshopper’s hind leg) · 1 minute</p><p>A willing creature you touch can, once on each of its turns, spend 10 feet of movement to leap up to 30 feet.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 1.</p>',
  archetypes: [Rank1, Transmutation],
  effects: [],
})

export const Longstrider = Traits.defineTrait('spell/longstrider', {
  name: 'Longstrider',
  description:
    '<p><strong>Transmutation</strong> · Action · Touch · V, S, M (a pinch of dirt) · 1 hour</p><p>A creature you touch gains +10 feet of Speed.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 1.</p>',
  archetypes: [Rank1, Transmutation],
  effects: [],
})

export const MageArmor = Traits.defineTrait('spell/mage-armor', {
  name: 'Mage Armor',
  description:
    "<p><strong>Abjuration</strong> · Action · Touch · V, S, M (a piece of cured leather) · 8 hours</p><p>A willing creature you touch that isn't wearing armor has a base AC of 13 + its Dexterity modifier. The spell ends if it puts on armor.</p>",
  archetypes: [Rank1, Abjuration],
  effects: [],
})

export const MagicMissile = Traits.defineTrait('spell/magic-missile', {
  name: 'Magic Missile',
  description:
    '<p><strong>Evocation</strong> · Action · 120 feet · V, S · Instantaneous</p><p>Three darts of force each automatically hit a creature you can see in range for 1d4 + 1 Force damage. You can split them between targets or focus them on one.</p><p><strong>Higher Levels:</strong> one extra dart per slot level above 1.</p>',
  archetypes: [Rank1, Evocation],
  effects: [],
})

export const ProtectionFromEvilAndGood = Traits.defineTrait('spell/protection-from-evil-and-good', {
  name: 'Protection from Evil and Good',
  description:
    "<p><strong>Abjuration</strong> · Action · Touch · V, S, M (a flask of Holy Water worth 25+ GP, which the spell consumes) · Concentration up to 10 minutes</p><p>A willing creature you touch is shielded from Aberrations, Celestials, Elementals, Fey, Fiends, and Undead. Such creatures have Disadvantage on attacks against it, and can't possess, Charm, or Frighten it. If it's already affected, it gets Advantage on new saves against the effect.</p>",
  archetypes: [Rank1, Abjuration],
  effects: [],
})

export const RayOfSickness = Traits.defineTrait('spell/ray-of-sickness', {
  name: 'Ray of Sickness',
  description:
    '<p><strong>Necromancy</strong> · Action · 60 feet · V, S · Instantaneous</p><p>Make a ranged spell attack with a sickly green ray. On a hit, the target takes 2d8 Poison damage and is Poisoned until the end of your next turn.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 1.</p>',
  archetypes: [Rank1, Necromancy],
  effects: [],
})

export const Shield = Traits.defineTrait('spell/shield', {
  name: 'Shield',
  description:
    "<p><strong>Abjuration</strong> · Reaction, which you take when you are hit by an attack roll or targeted by the Magic Missile spell · Self · V, S · 1 round</p><p>As a Reaction when you're hit or targeted by Magic Missile, you gain +5 AC (including against the triggering attack) and ignore Magic Missile until the start of your next turn.</p>",
  archetypes: [Rank1, Abjuration],
  effects: [],
})

export const SilentImage = Traits.defineTrait('spell/silent-image', {
  name: 'Silent Image',
  description:
    '<p><strong>Illusion</strong> · Action · 60 feet · V, S, M (a bit of fleece) · Concentration, up to 10 minutes</p><p>You create a soundless visual illusion up to a 15-foot Cube, which you can move and animate as a Magic action. Things pass through it, and a creature that Studies it can see through it with an Intelligence (Investigation) check against your spell save DC.</p>',
  archetypes: [Rank1, Illusion],
  effects: [],
})

export const Sleep = Traits.defineTrait('spell/sleep', {
  name: 'Sleep',
  description:
    "<p><strong>Enchantment</strong> · Action · 60 feet · V, S, M (a pinch of sand or rose petals) · Concentration, up to 1 minute</p><p>Creatures you choose in a 5-foot-radius Sphere must pass a Wisdom save or be Incapacitated until the end of their next turn. Those that then fail a second save fall Unconscious for the duration, until they take damage or someone nearby uses an action to wake them. Creatures that don't sleep or are immune to Exhaustion are unaffected.</p>",
  archetypes: [Rank1, Enchantment],
  effects: [],
})

export const TashasHideousLaughter = Traits.defineTrait('spell/tashas-hideous-laughter', {
  name: "Tasha's Hideous Laughter",
  description:
    '<p><strong>Enchantment</strong> · Action · 30 feet · V, S, M (a tart and a feather) · Concentration, up to 1 minute</p><p>A creature you can see must pass a Wisdom save or collapse with laughter, becoming Prone and Incapacitated, unable to stand up. It repeats the save at the end of each of its turns and whenever it takes damage (with Advantage), ending the spell on a success.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 1.</p>',
  archetypes: [Rank1, Enchantment],
  effects: [],
})

export const TensersFloatingDisk = Traits.defineTrait('spell/tensers-floating-disk', {
  name: "Tenser's Floating Disk",
  description:
    "<p><strong>Conjuration</strong> · Action or Ritual · 30 feet · V, S, M (a drop of mercury) · 1 hour</p><p>A 3-foot disk of force floats at waist height and carries up to 500 pounds. It follows to stay within 20 feet of you but can't climb or drop 10 feet or more. The spell ends if it's overloaded or you get more than 100 feet away.</p>",
  archetypes: [Rank1, Conjuration],
  effects: [],
})

export const Thunderwave = Traits.defineTrait('spell/thunderwave', {
  name: 'Thunderwave',
  description:
    "<p><strong>Evocation</strong> · Action · Self · V, S · Instantaneous</p><p>A thunderous wave fills a 15-foot Cube from you. Creatures there make a Constitution save: on a failure they take 2d8 Thunder damage and are pushed 10 feet away, and on a success they take half and aren't pushed. Loose objects are pushed too, and the boom can be heard 300 feet away.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 1.</p>",
  archetypes: [Rank1, Evocation],
  effects: [],
})

export const UnseenServant = Traits.defineTrait('spell/unseen-servant', {
  name: 'Unseen Servant',
  description:
    "<p><strong>Conjuration</strong> · Action or Ritual · 60 feet · V, S, M (a bit of string and of wood) · 1 hour</p><p>An Invisible, mindless force (AC 10, 1 HP, Strength 2) does simple chores for you, like fetching, cleaning, or serving. As a Bonus Action, you can order it to move up to 15 feet and interact with an object. It can't attack, and the spell ends if it drops to 0 HP or goes more than 60 feet from you.</p>",
  archetypes: [Rank1, Conjuration],
  effects: [],
})

export const WitchBolt = Traits.defineTrait('spell/witch-bolt', {
  name: 'Witch Bolt',
  description:
    '<p><strong>Evocation</strong> · Action · 60 feet · V, S, M (a twig struck by lightning) · Concentration, up to 1 minute</p><p>Make a ranged spell attack with a crackling arc of lightning, dealing 2d12 Lightning damage on a hit. On later turns, as a Bonus Action, you can deal 1d12 Lightning damage to the target automatically, even if you missed at first. The spell ends if the target leaves range or gets Total Cover.</p><p><strong>Higher Levels:</strong> +1d12 initial damage per slot level above 1.</p>',
  archetypes: [Rank1, Evocation],
  effects: [],
})

export const AlterSelf = Traits.defineTrait('spell/alter-self', {
  name: 'Alter Self',
  description:
    '<p><strong>Transmutation</strong> · Action · Self · V, S · Concentration, up to 1 hour</p><p>You reshape your body in one of three ways, and can switch as a Magic action: <strong>Aquatic Adaptation</strong> (breathe water and gain a Swim Speed), <strong>Change Appearance</strong> (look like anyone of your size and shape), or <strong>Natural Weapons</strong> (claws, fangs, horns, or hooves that make your Unarmed Strikes deal 1d6 damage using your spellcasting ability).</p>',
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const ArcaneLock = Traits.defineTrait('spell/arcane-lock', {
  name: 'Arcane Lock',
  description:
    "<p><strong>Abjuration</strong> · Action · Touch · V, S, M (gold dust worth 25+ GP, which the spell consumes) · Until dispelled</p><p>A closed door, window, gate, container, or hatch you touch is magically locked and can't be opened by nonmagical means. You and creatures you choose can still use it, and you can set a password that unlocks it for 1 minute.</p>",
  archetypes: [Rank2, Abjuration],
  effects: [],
})

export const ArcaneVigor = Traits.defineTrait('spell/arcane-vigor', {
  name: 'Arcane Vigor',
  description:
    '<p><strong>Abjuration</strong> · Bonus Action · Self · V, S · Instantaneous</p><p>Roll one or two of your unspent Hit Point Dice and regain that many Hit Points plus your spellcasting ability modifier. The dice are then spent.</p><p><strong>Higher Levels:</strong> one extra die per slot level above 2.</p>',
  archetypes: [Rank2, Abjuration],
  effects: [],
})

export const Augury = Traits.defineTrait('spell/augury', {
  name: 'Augury',
  description:
    "<p><strong>Divination</strong> · 1 minute or Ritual · Self · V, S, M (specially marked sticks, bones, cards, or other divinatory tokens worth 25+ GP) · Instantaneous</p><p>Ask about a course of action you plan to take in the next 30 minutes and receive an omen: weal (good), woe (bad), weal and woe (both), or indifference (neither). It doesn't foresee outside changes. Each extra casting before a Long Rest has a cumulative 25 percent chance of getting no answer.</p>",
  archetypes: [Rank2, Divination],
  effects: [],
})

export const BlindnessDeafness = Traits.defineTrait('spell/blindness-deafness', {
  name: 'Blindness/Deafness',
  description:
    '<p><strong>Transmutation</strong> · Action · 120 feet · V · 1 minute</p><p>A creature you can see must pass a Constitution save or be Blinded or Deafened (your choice). It repeats the save at the end of each of its turns, ending the effect on a success.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 2.</p>',
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const Blur = Traits.defineTrait('spell/blur', {
  name: 'Blur',
  description:
    '<p><strong>Illusion</strong> · Action · Self · V · Concentration, up to 1 minute</p><p>Your form shimmers, and attacks against you have Disadvantage, unless the attacker perceives you with Blindsight or Truesight.</p>',
  archetypes: [Rank2, Illusion],
  effects: [],
})

export const CloudOfDaggers = Traits.defineTrait('spell/cloud-of-daggers', {
  name: 'Cloud of Daggers',
  description:
    '<p><strong>Conjuration</strong> · Action · 60 feet · V, S, M (a sliver of glass) · Concentration, up to 1 minute</p><p>Whirling blades fill a 5-foot Cube, dealing 4d4 Slashing damage to creatures in it, entering it, ending a turn there, or caught when it moves (once per turn). On later turns, you can teleport it up to 30 feet as a Magic action.</p><p><strong>Higher Levels:</strong> +2d4 damage per slot level above 2.</p>',
  archetypes: [Rank2, Conjuration],
  effects: [],
})

export const ContinualFlame = Traits.defineTrait('spell/continual-flame', {
  name: 'Continual Flame',
  description:
    '<p><strong>Evocation</strong> · Action · Touch · V, S, M (ruby dust worth 50+ GP, which the spell consumes) · Until dispelled</p><p>An object you touch bursts into a heatless, fuelless flame that sheds Bright Light for 20 feet and Dim Light for 20 more. It can be covered but never put out.</p>',
  archetypes: [Rank2, Evocation],
  effects: [],
})

export const CrownOfMadness = Traits.defineTrait('spell/crown-of-madness', {
  name: 'Crown of Madness',
  description:
    '<p><strong>Enchantment</strong> · Action · 120 feet · V, S · Concentration, up to 1 minute</p><p>A Humanoid you can see must pass a Wisdom save or be Charmed. Each turn, before moving, it must use its action to make a melee attack against a creature you mentally pick (other than itself), if one is in reach. It repeats the save at the end of each of its turns, and you must use a Magic action each turn to keep control.</p>',
  archetypes: [Rank2, Enchantment],
  effects: [],
})

export const Darkness = Traits.defineTrait('spell/darkness', {
  name: 'Darkness',
  description:
    "<p><strong>Evocation</strong> · Action · 60 feet · V, M (bat fur and a piece of coal) · Concentration, up to 10 minutes</p><p>Magical Darkness fills a 15-foot-radius Sphere, or a 15-foot Emanation from an unattended object (which you can cover to block it). Darkvision and nonmagical light can't pierce it, and it dispels overlapping light from spells of level 2 or lower.</p>",
  archetypes: [Rank2, Evocation],
  effects: [],
})

export const Darkvision = Traits.defineTrait('spell/darkvision', {
  name: 'Darkvision',
  description:
    '<p><strong>Transmutation</strong> · Action · Touch · V, S, M (a dried carrot) · 8 hours</p><p>A willing creature you touch gains Darkvision out to 150 feet.</p>',
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const DetectThoughts = Traits.defineTrait('spell/detect-thoughts', {
  name: 'Detect Thoughts',
  description:
    "<p><strong>Divination</strong> · Action · Self · V, S, M (1 Copper Piece) · Concentration, up to 1 minute</p><p><strong>Sense Thoughts:</strong> detect thinking creatures within 30 feet (blocked by thick materials or lead). <strong>Read Thoughts:</strong> learn a creature's surface thoughts. On your next turn, you can probe deeper (Wisdom save) to learn its reasoning, emotions, and preoccupations. The target knows it's being probed and can try to push you out with an Intelligence (Arcana) check.</p>",
  archetypes: [Rank2, Divination],
  effects: [],
})

export const DragonsBreath = Traits.defineTrait('spell/dragons-breath', {
  name: "Dragon's Breath",
  description:
    '<p><strong>Transmutation</strong> · Bonus Action · Touch · V, S, M (a hot pepper) · Concentration, up to 1 minute</p><p>A willing creature you touch can, as a Magic action, exhale a 15-foot Cone of Acid, Cold, Fire, Lightning, or Poison (your choice when casting). Creatures in it make a Dexterity save, taking 3d6 damage on a failure or half on a success.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 2.</p>',
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const EnhanceAbility = Traits.defineTrait('spell/enhance-ability', {
  name: 'Enhance Ability',
  description:
    '<p><strong>Transmutation</strong> · Action · Touch · V, S, M (fur or a feather) · Concentration, up to 1 hour</p><p>A creature you touch has Advantage on ability checks with one ability of your choice (Strength, Dexterity, Intelligence, Wisdom, or Charisma).</p><p><strong>Higher Levels:</strong> one extra target per slot level above 2, each with its own ability.</p>',
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const EnlargeReduce = Traits.defineTrait('spell/enlarge-reduce', {
  name: 'Enlarge/Reduce',
  description:
    '<p><strong>Transmutation</strong> · Action · 30 feet · V, S, M (a pinch of powdered iron) · Concentration, up to 1 minute</p><p>A creature or unattended object you can see grows or shrinks by one size category, along with its gear (an unwilling creature can make a Constitution save). <strong>Enlarge</strong> gives Advantage on Strength checks and saves and +1d4 weapon and Unarmed Strike damage. <strong>Reduce</strong> gives Disadvantage on them and −1d4 damage (minimum 1).</p>',
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const FlamingSphere = Traits.defineTrait('spell/flaming-sphere', {
  name: 'Flaming Sphere',
  description:
    '<p><strong>Conjuration</strong> · Action · 60 feet · V, S, M (a ball of wax) · Concentration, up to 1 minute</p><p>A 5-foot ball of fire sits on the ground and sheds light. Creatures ending their turn within 5 feet of it make a Dexterity save, taking 2d6 Fire damage on a failure or half on a success. As a Bonus Action you can roll it up to 30 feet, and ramming a creature forces the save and stops it.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 2.</p>',
  archetypes: [Rank2, Conjuration],
  effects: [],
})

export const GentleRepose = Traits.defineTrait('spell/gentle-repose', {
  name: 'Gentle Repose',
  description:
    "<p><strong>Necromancy</strong> · Action or Ritual · Touch · V, S, M (2 Copper Pieces, which the spell consumes) · 10 days</p><p>Remains you touch don't decay and can't become Undead, and the time doesn't count against the limit for raising them from the dead.</p>",
  archetypes: [Rank2, Necromancy],
  effects: [],
})

export const GustOfWind = Traits.defineTrait('spell/gust-of-wind', {
  name: 'Gust of Wind',
  description:
    '<p><strong>Evocation</strong> · Action · Self · V, S, M (a legume seed) · Concentration, up to 1 minute</p><p>A 60-foot by 10-foot Line of wind blasts from you. Creatures in it must pass a Strength save or be pushed 15 feet away, and moving toward you costs double. It scatters gas and snuffs out unprotected flames, and you can redirect it as a Bonus Action.</p>',
  archetypes: [Rank2, Evocation],
  effects: [],
})

export const HoldPerson = Traits.defineTrait('spell/hold-person', {
  name: 'Hold Person',
  description:
    '<p><strong>Enchantment</strong> · Action · 60 feet · V, S, M (a straight piece of iron) · Concentration, up to 1 minute</p><p>A Humanoid you can see must pass a Wisdom save or be Paralyzed. It repeats the save at the end of each of its turns, ending the effect on a success.</p><p><strong>Higher Levels:</strong> one extra Humanoid per slot level above 2.</p>',
  archetypes: [Rank2, Enchantment],
  effects: [],
})

export const Invisibility = Traits.defineTrait('spell/invisibility', {
  name: 'Invisibility',
  description:
    '<p><strong>Illusion</strong> · Action · Touch · V, S, M (an eyelash in gum arabic) · Concentration, up to 1 hour</p><p>A creature you touch is Invisible until it attacks, deals damage, or casts a spell.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 2.</p>',
  archetypes: [Rank2, Illusion],
  effects: [],
})

export const Knock = Traits.defineTrait('spell/knock', {
  name: 'Knock',
  description:
    "<p><strong>Transmutation</strong> · Action · 60 feet · V · Instantaneous</p><p>An object you can see that's locked, stuck, or barred comes open (one lock at a time). Arcane Lock on it is suppressed for 10 minutes. The spell makes a loud knock heard up to 300 feet away.</p>",
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const Levitate = Traits.defineTrait('spell/levitate', {
  name: 'Levitate',
  description:
    '<p><strong>Transmutation</strong> · Action · 60 feet · V, S, M (a metal spring) · Concentration, up to 10 minutes</p><p>A creature or loose object (up to 500 pounds) rises up to 20 feet and hangs there. An unwilling creature can resist with a Constitution save. It can only move by pulling itself along surfaces, but you can raise or lower it 20 feet on your turn. It drifts gently down when the spell ends.</p>',
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const LocateObject = Traits.defineTrait('spell/locate-object', {
  name: 'Locate Object',
  description:
    "<p><strong>Divination</strong> · Action · Self · V, S, M (a forked twig) · Concentration, up to 10 minutes</p><p>You sense the direction of a familiar object within 1,000 feet, or the nearest object of a named kind, and whether it's moving. You need to have seen a specific object up close before, and lead blocks the spell.</p>",
  archetypes: [Rank2, Divination],
  effects: [],
})

export const MagicMouth = Traits.defineTrait('spell/magic-mouth', {
  name: 'Magic Mouth',
  description:
    '<p><strong>Illusion</strong> · 1 minute or Ritual · 30 feet · V, S, M (jade dust worth 10+ GP, which the spell consumes) · Until dispelled</p><p>You store a message of 25 words or fewer in an unattended object. A magical mouth speaks it in your voice when a trigger you set, based on sight or sound within 30 feet, occurs. It can speak once or every time the trigger happens.</p>',
  archetypes: [Rank2, Illusion],
  effects: [],
})

export const MagicWeapon = Traits.defineTrait('spell/magic-weapon', {
  name: 'Magic Weapon',
  description:
    '<p><strong>Transmutation</strong> · Bonus Action · Touch · V, S · 1 hour</p><p>A nonmagical weapon you touch becomes magical, with +1 to attack and damage rolls.</p><p><strong>Higher Levels:</strong> +2 with a level 3–5 slot, or +3 with a level 6+ slot.</p>',
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const MelfsAcidArrow = Traits.defineTrait('spell/melfs-acid-arrow', {
  name: "Melf's Acid Arrow",
  description:
    '<p><strong>Evocation</strong> · Action · 90 feet · V, S, M (powdered rhubarb leaf) · Instantaneous</p><p>Make a ranged spell attack with an acid arrow. On a hit, the target takes 4d4 Acid damage now and 2d4 more at the end of its next turn. On a miss, it takes half the initial damage.</p><p><strong>Higher Levels:</strong> +1d4 to both the initial and later damage per slot level above 2.</p>',
  archetypes: [Rank2, Evocation],
  effects: [],
})

export const MindSpike = Traits.defineTrait('spell/mind-spike', {
  name: 'Mind Spike',
  description:
    "<p><strong>Divination</strong> · Action · 120 feet · S · Concentration, up to 1 hour</p><p>A creature you can see makes a Wisdom save, taking 3d8 Psychic damage on a failure or half on a success. On a failure, you also always know where it is on the same plane, so it can't hide from you and gains nothing from being Invisible against you.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 2.</p>",
  archetypes: [Rank2, Divination],
  effects: [],
})

export const MirrorImage = Traits.defineTrait('spell/mirror-image', {
  name: 'Mirror Image',
  description:
    "<p><strong>Illusion</strong> · Action · Self · V, S · 1 minute</p><p>Three illusory copies of you appear. When an attack hits you, roll a d6 for each remaining copy. If any roll 3 or higher, a copy takes the hit and vanishes instead. Attackers that are Blinded or have Blindsight or Truesight aren't fooled.</p>",
  archetypes: [Rank2, Illusion],
  effects: [],
})

export const MistyStep = Traits.defineTrait('spell/misty-step', {
  name: 'Misty Step',
  description:
    '<p><strong>Conjuration</strong> · Bonus Action · Self · V · Instantaneous</p><p>As a Bonus Action, you teleport up to 30 feet to an unoccupied space you can see.</p>',
  archetypes: [Rank2, Conjuration],
  effects: [],
})

export const NystulsMagicAura = Traits.defineTrait('spell/nystuls-magic-aura', {
  name: "Nystul's Magic Aura",
  description:
    "<p><strong>Illusion</strong> · Action · Touch · V, S, M (a small square of silk) · 24 hours</p><p>A willing creature you touch appears to magic as a different creature type (<strong>Mask</strong>), or an unattended object's magical aura is falsified (<strong>False Aura</strong>): it seems magical or not, or of another school. Cast it daily for 30 days to make it last until dispelled.</p>",
  archetypes: [Rank2, Illusion],
  effects: [],
})

export const PhantasmalForce = Traits.defineTrait('spell/phantasmal-force', {
  name: 'Phantasmal Force',
  description:
    '<p><strong>Illusion</strong> · Action · 60 feet · V, S, M (a bit of fleece) · Concentration, up to 1 minute</p><p>A creature you can see must pass an Intelligence save or perceive a lifelike illusion, up to a 10-foot Cube, that only it can sense. It explains away any inconsistencies. A dangerous phantasm can deal 2d8 Psychic damage to it each turn. The target can Study the illusion and see through it with an Intelligence (Investigation) check.</p>',
  archetypes: [Rank2, Illusion],
  effects: [],
})

export const RayOfEnfeeblement = Traits.defineTrait('spell/ray-of-enfeeblement', {
  name: 'Ray of Enfeeblement',
  description:
    '<p><strong>Necromancy</strong> · Action · 60 feet · V, S · Concentration, up to 1 minute</p><p>A creature makes a Constitution save. On a failure it has Disadvantage on Strength-based D20 Tests and subtracts 1d8 from its damage rolls, repeating the save each turn to end it. On a success, it just has Disadvantage on its next attack roll.</p>',
  archetypes: [Rank2, Necromancy],
  effects: [],
})

export const RopeTrick = Traits.defineTrait('spell/rope-trick', {
  name: 'Rope Trick',
  description:
    '<p><strong>Transmutation</strong> · Action · Touch · V, S, M (a segment of rope) · 1 hour</p><p>A rope you touch rises to an Invisible portal leading to an extradimensional room that holds up to eight Medium creatures. Nothing can pass in or out except by climbing the rope, which can be pulled up after you, but those inside can see out.</p>',
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const ScorchingRay = Traits.defineTrait('spell/scorching-ray', {
  name: 'Scorching Ray',
  description:
    '<p><strong>Evocation</strong> · Action · 120 feet · V, S · Instantaneous</p><p>Fire three rays at one or more targets, making a ranged spell attack for each. Each hit deals 2d6 Fire damage.</p><p><strong>Higher Levels:</strong> one extra ray per slot level above 2.</p>',
  archetypes: [Rank2, Evocation],
  effects: [],
})

export const SeeInvisibility = Traits.defineTrait('spell/see-invisibility', {
  name: 'See Invisibility',
  description:
    '<p><strong>Divination</strong> · Action · Self · V, S, M (a pinch of talc) · 1 hour</p><p>You can see Invisible creatures and objects, and see into the Ethereal Plane.</p>',
  archetypes: [Rank2, Divination],
  effects: [],
})

export const Shatter = Traits.defineTrait('spell/shatter', {
  name: 'Shatter',
  description:
    '<p><strong>Evocation</strong> · Action · 60 feet · V, S, M (a chip of mica) · Instantaneous</p><p>A thunderous crack hits a 10-foot-radius Sphere. Creatures there make a Constitution save (Constructs with Disadvantage), taking 3d8 Thunder damage on a failure or half on a success. Unattended objects are damaged too.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 2.</p>',
  archetypes: [Rank2, Evocation],
  effects: [],
})

export const SpiderClimb = Traits.defineTrait('spell/spider-climb', {
  name: 'Spider Climb',
  description:
    '<p><strong>Transmutation</strong> · Action · Touch · V, S, M (a drop of bitumen and a spider) · Concentration, up to 1 hour</p><p>A willing creature you touch can walk on walls and ceilings with its hands free and gains a Climb Speed equal to its Speed.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 2.</p>',
  archetypes: [Rank2, Transmutation],
  effects: [],
})

export const Suggestion = Traits.defineTrait('spell/suggestion', {
  name: 'Suggestion',
  description:
    "<p><strong>Enchantment</strong> · Action · 30 feet · V, M (a drop of honey) · Concentration, up to 8 hours</p><p>A creature that can hear and understand you must pass a Wisdom save or be Charmed and follow a reasonable-sounding suggestion of 25 words or fewer that isn't obviously harmful. It ends early if the task is done or you or your allies hurt it.</p>",
  archetypes: [Rank2, Enchantment],
  effects: [],
})

export const Web = Traits.defineTrait('spell/web', {
  name: 'Web',
  description:
    '<p><strong>Conjuration</strong> · Action · 60 feet · V, S, M (a bit of spiderweb) · Concentration, up to 1 hour</p><p>Sticky webs fill a 20-foot Cube, creating Difficult Terrain and Light Obscurement (they collapse unless anchored). Creatures entering or starting their turn there must pass a Dexterity save or be Restrained, and can break free with a Strength (Athletics) check. Fire burns the webs away.</p>',
  archetypes: [Rank2, Conjuration],
  effects: [],
})

export const AnimateDead = Traits.defineTrait('spell/animate-dead', {
  name: 'Animate Dead',
  description:
    '<p><strong>Necromancy</strong> · 1 minute · 10 Feet · V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust) · Instantaneous</p><p>Raise a Small or Medium Humanoid corpse as a Zombie, or bones as a Skeleton. As a Bonus Action, you can command your creations within 60 feet, giving them specific orders or a standing task. Control lasts 24 hours, and recasting the spell on up to four of them renews it instead of making a new one.</p><p><strong>Higher Levels:</strong> two extra Undead per slot level above 3.</p>',
  archetypes: [Rank3, Necromancy],
  effects: [],
})

export const BestowCurse = Traits.defineTrait('spell/bestow-curse', {
  name: 'Bestow Curse',
  description:
    '<p><strong>Necromancy</strong> · Action · Touch · V, S · Concentration, up to 1 minute</p><p>A creature you touch must pass a Wisdom save or be cursed with one effect: Disadvantage on checks and saves with one ability, Disadvantage on attacks against you, a Wisdom save each turn or it must Dodge, or +1d8 Necrotic damage whenever you hit it.</p><p><strong>Higher Levels:</strong> longer durations at level 4+, with no Concentration needed at level 5+, and permanent until dispelled at level 9.</p>',
  archetypes: [Rank3, Necromancy],
  effects: [],
})

export const Blink = Traits.defineTrait('spell/blink', {
  name: 'Blink',
  description:
    '<p><strong>Transmutation</strong> · Action · Self · V, S · 1 minute</p><p>At the end of each of your turns, roll a d6. On a 4–6 you slip into the Ethereal Plane, where only other ethereal creatures can affect you. You return within 10 feet of where you left at the start of your next turn.</p>',
  archetypes: [Rank3, Transmutation],
  effects: [],
})

export const Clairvoyance = Traits.defineTrait('spell/clairvoyance', {
  name: 'Clairvoyance',
  description:
    '<p><strong>Divination</strong> · 10 minutes · 1 mile · V, S, M (a focus worth 100+ GP, either a jeweled horn for hearing or a glass eye for seeing) · Concentration, up to 10 minutes</p><p>Create an Invisible, intangible sensor in a familiar or obvious nearby location and see or hear through it as if you were there, switching senses as a Bonus Action. Creatures that can see the Invisible notice a small glowing orb.</p>',
  archetypes: [Rank3, Divination],
  effects: [],
})

export const Counterspell = Traits.defineTrait('spell/counterspell', {
  name: 'Counterspell',
  description:
    "<p><strong>Abjuration</strong> · Reaction, which you take when you see a creature within 60 feet of yourself casting a spell with Verbal, Somatic, or Material components · 60 feet · S · Instantaneous</p><p>As a Reaction when you see a creature casting a spell, it makes a Constitution save. On a failure the spell fizzles and the action used to cast it is wasted, but any spell slot it used isn't spent.</p>",
  archetypes: [Rank3, Abjuration],
  effects: [],
})

export const DispelMagic = Traits.defineTrait('spell/dispel-magic', {
  name: 'Dispel Magic',
  description:
    '<p><strong>Abjuration</strong> · Action · 120 feet · V, S · Instantaneous</p><p>End every spell of level 3 or lower on a creature, object, or magical effect. For each higher-level spell, make a spellcasting ability check against DC 10 + its level to end it.</p><p><strong>Higher Levels:</strong> automatically ends spells up to the level of the slot used.</p>',
  archetypes: [Rank3, Abjuration],
  effects: [],
})

export const Fear = Traits.defineTrait('spell/fear', {
  name: 'Fear',
  description:
    "<p><strong>Illusion</strong> · Action · Self · V, S, M (a white feather) · Concentration, up to 1 minute</p><p>Creatures in a 30-foot Cone must pass a Wisdom save or drop what they're holding and become Frightened, using the Dash action to flee from you each turn. They can repeat the save only when they end a turn out of your sight.</p>",
  archetypes: [Rank3, Illusion],
  effects: [],
})

export const FeignDeath = Traits.defineTrait('spell/feign-death', {
  name: 'Feign Death',
  description:
    "<p><strong>Necromancy</strong> · Action or Ritual · Touch · V, S, M (a pinch of graveyard dirt) · 1 hour</p><p>A willing creature you touch appears dead, even to magic. It's Blinded and Incapacitated with Speed 0, but it resists all damage except Psychic and can't be Poisoned.</p>",
  archetypes: [Rank3, Necromancy],
  effects: [],
})

export const Fireball = Traits.defineTrait('spell/fireball', {
  name: 'Fireball',
  description:
    '<p><strong>Evocation</strong> · Action · 150 feet · V, S, M (a ball of bat guano and sulfur) · Instantaneous</p><p>A 20-foot-radius Sphere explodes in flame. Creatures there make a Dexterity save, taking 8d6 Fire damage on a failure or half on a success, and unattended flammable objects ignite.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 3.</p>',
  archetypes: [Rank3, Evocation],
  effects: [],
})

export const Fly = Traits.defineTrait('spell/fly', {
  name: 'Fly',
  description:
    "<p><strong>Transmutation</strong> · Action · Touch · V, S, M (a feather) · Concentration, up to 10 minutes</p><p>A willing creature you touch gains a Fly Speed of 60 feet and can hover. It falls if it's still airborne when the spell ends.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 3.</p>",
  archetypes: [Rank3, Transmutation],
  effects: [],
})

export const GaseousForm = Traits.defineTrait('spell/gaseous-form', {
  name: 'Gaseous Form',
  description:
    "<p><strong>Transmutation</strong> · Action · Touch · V, S, M (a bit of gauze) · Concentration, up to 1 hour</p><p>A willing creature you touch turns into mist with a 10-foot Fly Speed. It can seep through small gaps and into other creatures' spaces, resists Bludgeoning, Piercing, and Slashing damage, and has Advantage on Strength, Dexterity, and Constitution saves. It can't talk, attack, cast spells, or use objects.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 3.</p>",
  archetypes: [Rank3, Transmutation],
  effects: [],
})

export const GlyphOfWarding = Traits.defineTrait('spell/glyph-of-warding', {
  name: 'Glyph of Warding',
  description:
    '<p><strong>Abjuration</strong> · 1 hour · Touch · V, S, M (powdered diamond worth 200+ GP, which the spell consumes) · Until dispelled or triggered</p><p>Inscribe a hidden glyph (found with Wisdom (Perception) against your spell save DC) on a surface or inside a closed object, with a trigger you define. It either explodes for 5d8 damage of a chosen element in a 20-foot radius (Dexterity save for half), or releases a spell of level 3 or lower stored in it on whoever triggered it. It breaks if moved more than 10 feet.</p><p><strong>Higher Levels:</strong> +1d8 explosion damage, or a higher-level stored spell, per slot level above 3.</p>',
  archetypes: [Rank3, Abjuration],
  effects: [],
})

export const Haste = Traits.defineTrait('spell/haste', {
  name: 'Haste',
  description:
    "<p><strong>Transmutation</strong> · Action · 30 feet · V, S, M (a shaving of licorice root) · Concentration, up to 1 minute</p><p>A willing creature you can see doubles its Speed, gains +2 AC and Advantage on Dexterity saves, and gets an extra action each turn (one attack, Dash, Disengage, Hide, or Utilize). When the spell ends, it's Incapacitated with Speed 0 until the end of its next turn.</p>",
  archetypes: [Rank3, Transmutation],
  effects: [],
})

export const HypnoticPattern = Traits.defineTrait('spell/hypnotic-pattern', {
  name: 'Hypnotic Pattern',
  description:
    '<p><strong>Illusion</strong> · Action · 120 feet · S, M (a pinch of confetti) · Concentration, up to 1 minute</p><p>A swirl of colors in a 30-foot Cube forces creatures that see it to pass a Wisdom save or be Charmed, which leaves them Incapacitated with Speed 0. The effect ends for a creature if it takes damage or someone uses an action to shake it awake.</p>',
  archetypes: [Rank3, Illusion],
  effects: [],
})

export const LeomundsTinyHut = Traits.defineTrait('spell/leomunds-tiny-hut', {
  name: "Leomund's Tiny Hut",
  description:
    "<p><strong>Evocation</strong> · 1 minute or Ritual · Self · V, S, M (a crystal bead) · 8 hours</p><p>A stationary 10-foot dome forms around you. Those inside when it's cast can come and go, but nothing else can enter, and spells of level 3 or lower can't reach through it. Inside it's dry and comfortable, lit as you like, and opaque from outside. It ends if you leave.</p>",
  archetypes: [Rank3, Evocation],
  effects: [],
})

export const LightningBolt = Traits.defineTrait('spell/lightning-bolt', {
  name: 'Lightning Bolt',
  description:
    '<p><strong>Evocation</strong> · Action · Self · V, S, M (a bit of fur and a crystal rod) · Instantaneous</p><p>A 100-foot by 5-foot Line of lightning blasts from you. Creatures in it make a Dexterity save, taking 8d6 Lightning damage on a failure or half on a success.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 3.</p>',
  archetypes: [Rank3, Evocation],
  effects: [],
})

export const MagicCircle = Traits.defineTrait('spell/magic-circle', {
  name: 'Magic Circle',
  description:
    "<p><strong>Abjuration</strong> · 1 minute · 10 feet · V, S, M (salt and powdered silver worth 100+ GP, which the spell consumes) · 1 hour</p><p>A 10-foot-radius, 20-foot-tall Cylinder wards against the creature types you choose (Celestials, Elementals, Fey, Fiends, or Undead). They can't enter it without magic (and a Charisma save to teleport in), have Disadvantage attacking those inside, and can't Charm, Frighten, or possess them. You can reverse it to trap a creature inside instead.</p><p><strong>Higher Levels:</strong> +1 hour of duration per slot level above 3.</p>",
  archetypes: [Rank3, Abjuration],
  effects: [],
})

export const MajorImage = Traits.defineTrait('spell/major-image', {
  name: 'Major Image',
  description:
    "<p><strong>Illusion</strong> · Action · 120 feet · V, S, M (a bit of fleece) · Concentration, up to 10 minutes</p><p>Create a convincing illusion up to a 20-foot Cube with sound, smell, and temperature. You can move it and make it speak as a Magic action, but it can't cause harm. Touch reveals it, and a creature that Studies it can see through it with an Intelligence (Investigation) check.</p><p><strong>Higher Levels:</strong> with a level 4+ slot, it lasts until dispelled without Concentration.</p>",
  archetypes: [Rank3, Illusion],
  effects: [],
})

export const Nondetection = Traits.defineTrait('spell/nondetection', {
  name: 'Nondetection',
  description:
    "<p><strong>Abjuration</strong> · Action · Touch · V, S, M (a pinch of diamond dust worth 25+ GP, which the spell consumes) · 8 hours</p><p>A willing creature, or a place or object up to 10 feet across, that you touch can't be targeted by Divination spells or seen through scrying sensors.</p>",
  archetypes: [Rank3, Abjuration],
  effects: [],
})

export const PhantomSteed = Traits.defineTrait('spell/phantom-steed', {
  name: 'Phantom Steed',
  description:
    '<p><strong>Illusion</strong> · 1 minute or Ritual · 30 feet · V, S · 1 hour</p><p>A Large, horselike creature of your design appears with tack, using Riding Horse statistics but with a 100-foot Speed (13 miles per hour). It fades when the spell ends, giving the rider a minute to dismount, and vanishes if it takes damage.</p>',
  archetypes: [Rank3, Illusion],
  effects: [],
})

export const ProtectionFromEnergy = Traits.defineTrait('spell/protection-from-energy', {
  name: 'Protection from Energy',
  description:
    '<p><strong>Abjuration</strong> · Action · Touch · V, S · Concentration, up to 1 hour</p><p>A willing creature you touch gains Resistance to Acid, Cold, Fire, Lightning, or Thunder damage (your choice).</p>',
  archetypes: [Rank3, Abjuration],
  effects: [],
})

export const RemoveCurse = Traits.defineTrait('spell/remove-curse', {
  name: 'Remove Curse',
  description:
    "<p><strong>Abjuration</strong> · Action · Touch · V, S · Instantaneous</p><p>End every curse on a creature or object you touch. A cursed magic item stays cursed, but its owner's Attunement breaks so they can get rid of it.</p>",
  archetypes: [Rank3, Abjuration],
  effects: [],
})

export const Sending = Traits.defineTrait('spell/sending', {
  name: 'Sending',
  description:
    "<p><strong>Divination</strong> · Action · Unlimited · V, S, M (a copper wire) · Instantaneous</p><p>Send a message of 25 words or fewer to a creature you've met or had described to you, at any distance, and it can reply straight away. Messages to other planes have a 5 percent chance to fail, and a recipient can block you for 8 hours.</p>",
  archetypes: [Rank3, Divination],
  effects: [],
})

export const SleetStorm = Traits.defineTrait('spell/sleet-storm', {
  name: 'Sleet Storm',
  description:
    '<p><strong>Conjuration</strong> · Action · 150 feet · V, S, M (a miniature umbrella) · Concentration, up to 1 minute</p><p>Freezing sleet fills a 20-foot-radius, 40-foot-tall Cylinder, making it Heavily Obscured and Difficult Terrain and putting out open flames. Creatures entering or starting their turn there must pass a Dexterity save or fall Prone and lose Concentration.</p>',
  archetypes: [Rank3, Conjuration],
  effects: [],
})

export const Slow = Traits.defineTrait('spell/slow', {
  name: 'Slow',
  description:
    '<p><strong>Transmutation</strong> · Action · 120 feet · V, S, M (a drop of molasses) · Concentration, up to 1 minute</p><p>Up to six creatures in a 40-foot Cube must pass a Wisdom save or be slowed: half Speed, −2 to AC and Dexterity saves, no Reactions, only an action or a Bonus Action each turn (and only one attack), and a 25 percent chance for somatic spells to fail. They repeat the save each turn.</p>',
  archetypes: [Rank3, Transmutation],
  effects: [],
})

export const SpeakWithDead = Traits.defineTrait('spell/speak-with-dead', {
  name: 'Speak with Dead',
  description:
    '<p><strong>Necromancy</strong> · Action · 10 feet · V, S, M (burning incense) · 10 minutes</p><p>A corpse with a mouth answers up to five questions using only what it knew in life. Answers tend to be brief or cryptic, and a hostile corpse may lie. It fails on former Undead or a corpse questioned in the past 10 days.</p>',
  archetypes: [Rank3, Necromancy],
  effects: [],
})

export const StinkingCloud = Traits.defineTrait('spell/stinking-cloud', {
  name: 'Stinking Cloud',
  description:
    '<p><strong>Conjuration</strong> · Action · 90 feet · V, S, M (a rotten egg) · Concentration, up to 1 minute</p><p>A 20-foot-radius Sphere of foul gas is Heavily Obscured. Creatures starting their turn in it must pass a Constitution save or be Poisoned that turn, losing their action and Bonus Action. Strong wind disperses it.</p>',
  archetypes: [Rank3, Conjuration],
  effects: [],
})

export const SummonFey = Traits.defineTrait('spell/summon-fey', {
  name: 'Summon Fey',
  description:
    "<p><strong>Conjuration</strong> · Action · 90 feet · V, S, M (a gilded flower worth 300+ GP) · Concentration, up to 1 hour</p><p>A Fey spirit (Fuming, Mirthful, or Tricksy) appears and fights beside you, taking its turn after yours and obeying your spoken commands. It attacks with force-infused blades and teleports as a Bonus Action with an effect based on its mood. It vanishes at 0 Hit Points.</p><p><strong>Higher Levels:</strong> the spirit's statistics scale with the slot level.</p>",
  archetypes: [Rank3, Conjuration],
  effects: [],
})

export const SummonUndead = Traits.defineTrait('spell/summon-undead', {
  name: 'Summon Undead',
  description:
    "<p><strong>Necromancy</strong> · Action · 90 feet · V, S, M (a gilded skull worth 300+ GP) · Concentration, up to 1 hour</p><p>An Undead spirit (Ghostly, Putrid, or Skeletal) appears and fights beside you, taking its turn after yours and obeying your spoken commands. Ghostly spirits frighten with a touch and pass through objects, Putrid ones poison and paralyze, and Skeletal ones hurl bolts from range. It vanishes at 0 Hit Points.</p><p><strong>Higher Levels:</strong> the spirit's statistics scale with the slot level.</p>",
  archetypes: [Rank3, Necromancy],
  effects: [],
})

export const Tongues = Traits.defineTrait('spell/tongues', {
  name: 'Tongues',
  description:
    '<p><strong>Divination</strong> · Action · Touch · V, M (a miniature ziggurat) · 1 hour</p><p>A creature you touch understands every spoken and signed language, and anyone who knows a language understands what it says.</p>',
  archetypes: [Rank3, Divination],
  effects: [],
})

export const VampiricTouch = Traits.defineTrait('spell/vampiric-touch', {
  name: 'Vampiric Touch',
  description:
    '<p><strong>Necromancy</strong> · Action · Self · V, S · Concentration, up to 1 minute</p><p>Make a melee spell attack. On a hit, the target takes 3d6 Necrotic damage and you regain Hit Points equal to half of it. You can repeat the attack as a Magic action on later turns.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 3.</p>',
  archetypes: [Rank3, Necromancy],
  effects: [],
})

export const WaterBreathing = Traits.defineTrait('spell/water-breathing', {
  name: 'Water Breathing',
  description:
    '<p><strong>Transmutation</strong> · Action or Ritual · 30 feet · V, S, M (a short reed) · 24 hours</p><p>Up to ten willing creatures can breathe underwater, as well as normally.</p>',
  archetypes: [Rank3, Transmutation],
  effects: [],
})
