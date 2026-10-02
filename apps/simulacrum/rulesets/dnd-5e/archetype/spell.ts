import { Abilities, Archetypes } from '@simulacrum/common'
import { ActionType } from '@simulacrum/common/ability'

export const Cantrip = Archetypes.defineArchetype('spell/cantrip', { name: 'Cantrip' })
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

export const UpToRank1 = [Rank1, ...Schools]
export const UpToRank2 = [Rank1, Rank2, ...Schools]
export const UpToRank3 = [Rank1, Rank2, Rank3, ...Schools]

export const Alarm = Abilities.defineAbility('spell/alarm', {
  name: 'Alarm',
  description:
    "<p><strong>Abjuration</strong> · 1 minute or Ritual · 30 feet · V, S, M (a bell and silver wire) · 8 hours</p><p>Ward a door, window, or area up to a 20-foot Cube. Whenever a creature you didn't exempt touches or enters it, you're warned, either by a handbell sound heard within 60 feet or by a mental ping that reaches you within 1 mile (and wakes you if you're asleep).</p>",
  archetypes: [Rank1, Abjuration],
  actions: [{ name: 'Cast Alarm', action: ActionType.Standard }],
})

export const BurningHands = Abilities.defineAbility('spell/burning-hands', {
  name: 'Burning Hands',
  description:
    '<p><strong>Evocation</strong> · Self · V, S · Instantaneous</p><p>Flames fan out in a 15-foot Cone. Creatures there make a Dexterity save, taking 3d6 Fire damage on a failure or half on a success, and unattended flammable objects catch fire.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 1.</p>',
  archetypes: [Rank1, Evocation],
  actions: [{ name: 'Cast Burning Hands', action: ActionType.Standard }],
})

export const CharmPerson = Abilities.defineAbility('spell/charm-person', {
  name: 'Charm Person',
  description:
    "<p><strong>Enchantment</strong> · 30 feet · V, S · 1 hour</p><p>A Humanoid you can see makes a Wisdom save (with Advantage if you or your allies are fighting it). On a failure it's Charmed by you and treats you as Friendly until the spell ends or it's harmed by you or your allies. It knows it was charmed once the spell ends.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 1.</p>",
  archetypes: [Rank1, Enchantment],
  actions: [{ name: 'Cast Charm Person', action: ActionType.Standard }],
})

export const ChromaticOrb = Abilities.defineAbility('spell/chromatic-orb', {
  name: 'Chromatic Orb',
  description:
    '<p><strong>Evocation</strong> · 90 feet · V, S, M (a diamond worth 50+ GP) · Instantaneous</p><p>Make a ranged spell attack with an orb of Acid, Cold, Fire, Lightning, Poison, or Thunder energy, dealing 3d8 damage of that type on a hit. If two or more damage dice match, the orb jumps to a new target within 30 feet for another attack.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 1, and the orb can jump up to once per slot level (never hitting the same creature twice).</p>',
  archetypes: [Rank1, Evocation],
  actions: [{ name: 'Cast Chromatic Orb', action: ActionType.Standard }],
})

export const ColorSpray = Abilities.defineAbility('spell/color-spray', {
  name: 'Color Spray',
  description:
    '<p><strong>Illusion</strong> · Self · V, S, M (a pinch of colorful sand) · Instantaneous</p><p>A burst of flashing colors fills a 15-foot Cone. Each creature in it must pass a Constitution save or be Blinded until the end of your next turn.</p>',
  archetypes: [Rank1, Illusion],
  actions: [{ name: 'Cast Color Spray', action: ActionType.Standard }],
})

export const ComprehendLanguages = Abilities.defineAbility('spell/comprehend-languages', {
  name: 'Comprehend Languages',
  description:
    '<p><strong>Divination</strong> · Action or Ritual · Self · V, S, M (a pinch of soot and salt) · 1 hour</p><p>You understand the literal meaning of any spoken or signed language, and can read any written language you touch (about a page per minute). Codes and secret messages stay hidden.</p>',
  archetypes: [Rank1, Divination],
  actions: [{ name: 'Cast Comprehend Languages', action: ActionType.Standard }],
})

export const DetectMagic = Abilities.defineAbility('spell/detect-magic', {
  name: 'Detect Magic',
  description:
    '<p><strong>Divination</strong> · Action or Ritual · Self · V, S · Concentration, up to 10 minutes</p><p>You sense magic within 30 feet. As a Magic action you can see an aura around magical creatures or objects in view and learn the school of any spell involved. Thick stone, dirt, wood, metal, or a sheet of lead blocks it.</p>',
  archetypes: [Rank1, Divination],
  actions: [{ name: 'Cast Detect Magic', action: ActionType.Standard }],
})

export const DisguiseSelf = Abilities.defineAbility('spell/disguise-self', {
  name: 'Disguise Self',
  description:
    "<p><strong>Illusion</strong> · Self · V, S · 1 hour</p><p>You change how you and your gear look, including up to a foot of height and your build, as long as you keep the same basic body shape. The illusion doesn't survive touch, and a creature that Studies you can see through it with an Intelligence (Investigation) check against your spell save DC.</p>",
  archetypes: [Rank1, Illusion],
  actions: [{ name: 'Cast Disguise Self', action: ActionType.Standard }],
})

export const ExpeditiousRetreat = Abilities.defineAbility('spell/expeditious-retreat', {
  name: 'Expeditious Retreat',
  description:
    '<p><strong>Transmutation</strong> · Self · V, S · Concentration, up to 10 minutes</p><p>You Dash immediately, and for the duration you can Dash again as a Bonus Action.</p>',
  archetypes: [Rank1, Transmutation],
  actions: [{ name: 'Cast Expeditious Retreat', action: ActionType.Bonus }],
})

export const FalseLife = Abilities.defineAbility('spell/false-life', {
  name: 'False Life',
  description:
    '<p><strong>Necromancy</strong> · Self · V, S, M (a drop of alcohol) · Instantaneous</p><p>You gain 2d4 + 4 Temporary Hit Points.</p><p><strong>Higher Levels:</strong> +5 Temporary Hit Points per slot level above 1.</p>',
  archetypes: [Rank1, Necromancy],
  actions: [{ name: 'Cast False Life', action: ActionType.Standard }],
})

export const FeatherFall = Abilities.defineAbility('spell/feather-fall', {
  name: 'Feather Fall',
  description:
    '<p><strong>Transmutation</strong> · Reaction, which you take when you or a creature you can see within 60 feet of you falls · 60 feet · V, M (a small feather or piece of down) · 1 minute</p><p>Up to five falling creatures in range descend at only 60 feet per round and take no falling damage if they land while the spell lasts.</p>',
  archetypes: [Rank1, Transmutation],
  actions: [{ name: 'Cast Feather Fall', action: ActionType.Reaction }],
})

export const FindFamiliar = Abilities.defineAbility('spell/find-familiar', {
  name: 'Find Familiar',
  description:
    "<p><strong>Conjuration</strong> · 1 hour or Ritual · 10 feet · V, S, M (burning incense worth 10+ GP, which the spell consumes) · Instantaneous</p><p>A spirit serves you as a familiar in the form of a tiny animal (a Beast of Challenge Rating 0), but it counts as a Celestial, Fey, or Fiend. It obeys you but can't attack. Within 100 feet you can speak with it telepathically, borrow its senses as a Bonus Action, and have it deliver your touch spells with its Reaction.</p><p>At 0 Hit Points it vanishes until you cast the spell again. You can dismiss it to a pocket dimension and recall it, and you can only have one familiar at a time.</p>",
  archetypes: [Rank1, Conjuration],
  actions: [{ name: 'Cast Find Familiar', action: ActionType.Standard }],
})

export const FogCloud = Abilities.defineAbility('spell/fog-cloud', {
  name: 'Fog Cloud',
  description:
    '<p><strong>Conjuration</strong> · 120 feet · V, S · Concentration, up to 1 hour</p><p>A 20-foot-radius Sphere of fog makes its area Heavily Obscured until the spell ends or a strong wind scatters it.</p><p><strong>Higher Levels:</strong> radius +20 feet per slot level above 1.</p>',
  archetypes: [Rank1, Conjuration],
  actions: [{ name: 'Cast Fog Cloud', action: ActionType.Standard }],
})

export const Grease = Abilities.defineAbility('spell/grease', {
  name: 'Grease',
  description:
    '<p><strong>Conjuration</strong> · 60 feet · V, S, M (a bit of pork rind or butter) · 1 minute</p><p>Slick grease makes a 10-foot square Difficult Terrain. Creatures standing there when it appears, entering it, or ending their turn in it must pass a Dexterity save or fall Prone.</p>',
  archetypes: [Rank1, Conjuration],
  actions: [{ name: 'Cast Grease', action: ActionType.Standard }],
})

export const IceKnife = Abilities.defineAbility('spell/ice-knife', {
  name: 'Ice Knife',
  description:
    '<p><strong>Conjuration</strong> · 60 feet · S, M (a drop of water or a piece of ice) · Instantaneous</p><p>Make a ranged spell attack with a shard of ice for 1d10 Piercing damage on a hit. Hit or miss, it shatters, and the target and everything within 5 feet of it must pass a Dexterity save or take 2d6 Cold damage.</p><p><strong>Higher Levels:</strong> +1d6 Cold damage per slot level above 1.</p>',
  archetypes: [Rank1, Conjuration],
  actions: [{ name: 'Cast Ice Knife', action: ActionType.Standard }],
})

export const Identify = Abilities.defineAbility('spell/identify', {
  name: 'Identify',
  description:
    '<p><strong>Divination</strong> · 1 minute or Ritual · Touch · V, S, M (a pearl worth 100+ GP) · Instantaneous</p><p>Touch an object while casting to learn its magical properties, how to use it, whether it needs Attunement, its charges, and any spells affecting or creating it. Touching a creature instead reveals the spells currently affecting it.</p>',
  archetypes: [Rank1, Divination],
  actions: [{ name: 'Cast Identify', action: ActionType.Standard }],
})

export const IllusoryScript = Abilities.defineAbility('spell/illusory-script', {
  name: 'Illusory Script',
  description:
    '<p><strong>Illusion</strong> · 1 minute or Ritual · Touch · S, M (ink worth 10+ GP, which the spell consumes) · 10 days</p><p>You write a message that only you and creatures you choose can read. To everyone else it looks like unreadable magical script, or you can make it look like a different message in a language you know. Truesight reveals the real text, and dispelling the spell erases both.</p>',
  archetypes: [Rank1, Illusion],
  actions: [{ name: 'Cast Illusory Script', action: ActionType.Standard }],
})

export const Jump = Abilities.defineAbility('spell/jump', {
  name: 'Jump',
  description:
    '<p><strong>Transmutation</strong> · Touch · V, S, M (a grasshopper’s hind leg) · 1 minute</p><p>A willing creature you touch can, once on each of its turns, spend 10 feet of movement to leap up to 30 feet.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 1.</p>',
  archetypes: [Rank1, Transmutation],
  actions: [{ name: 'Cast Jump', action: ActionType.Bonus }],
})

export const Longstrider = Abilities.defineAbility('spell/longstrider', {
  name: 'Longstrider',
  description:
    '<p><strong>Transmutation</strong> · Touch · V, S, M (a pinch of dirt) · 1 hour</p><p>A creature you touch gains +10 feet of Speed.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 1.</p>',
  archetypes: [Rank1, Transmutation],
  actions: [{ name: 'Cast Longstrider', action: ActionType.Standard }],
})

export const MageArmor = Abilities.defineAbility('spell/mage-armor', {
  name: 'Mage Armor',
  description:
    "<p><strong>Abjuration</strong> · Touch · V, S, M (a piece of cured leather) · 8 hours</p><p>A willing creature you touch that isn't wearing armor has a base AC of 13 + its Dexterity modifier. The spell ends if it puts on armor.</p>",
  archetypes: [Rank1, Abjuration],
  actions: [{ name: 'Cast Mage Armor', action: ActionType.Standard }],
})

export const MagicMissile = Abilities.defineAbility('spell/magic-missile', {
  name: 'Magic Missile',
  description:
    '<p><strong>Evocation</strong> · 120 feet · V, S · Instantaneous</p><p>Three darts of force each automatically hit a creature you can see in range for 1d4 + 1 Force damage. You can split them between targets or focus them on one.</p><p><strong>Higher Levels:</strong> one extra dart per slot level above 1.</p>',
  archetypes: [Rank1, Evocation],
  actions: [{ name: 'Cast Magic Missile', action: ActionType.Standard }],
})

export const ProtectionFromEvilAndGood = Abilities.defineAbility('spell/protection-from-evil-and-good', {
  name: 'Protection from Evil and Good',
  description:
    "<p><strong>Abjuration</strong> · Touch · V, S, M (a flask of Holy Water worth 25+ GP, which the spell consumes) · Concentration up to 10 minutes</p><p>A willing creature you touch is shielded from Aberrations, Celestials, Elementals, Fey, Fiends, and Undead. Such creatures have Disadvantage on attacks against it, and can't possess, Charm, or Frighten it. If it's already affected, it gets Advantage on new saves against the effect.</p>",
  archetypes: [Rank1, Abjuration],
  actions: [{ name: 'Cast Protection from Evil and Good', action: ActionType.Standard }],
})

export const RayOfSickness = Abilities.defineAbility('spell/ray-of-sickness', {
  name: 'Ray of Sickness',
  description:
    '<p><strong>Necromancy</strong> · 60 feet · V, S · Instantaneous</p><p>Make a ranged spell attack with a sickly green ray. On a hit, the target takes 2d8 Poison damage and is Poisoned until the end of your next turn.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 1.</p>',
  archetypes: [Rank1, Necromancy],
  actions: [{ name: 'Cast Ray of Sickness', action: ActionType.Standard }],
})

export const Shield = Abilities.defineAbility('spell/shield', {
  name: 'Shield',
  description:
    "<p><strong>Abjuration</strong> · Reaction, which you take when you are hit by an attack roll or targeted by the Magic Missile spell · Self · V, S · 1 round</p><p>As a Reaction when you're hit or targeted by Magic Missile, you gain +5 AC (including against the triggering attack) and ignore Magic Missile until the start of your next turn.</p>",
  archetypes: [Rank1, Abjuration],
  actions: [{ name: 'Cast Shield', action: ActionType.Reaction }],
})

export const SilentImage = Abilities.defineAbility('spell/silent-image', {
  name: 'Silent Image',
  description:
    '<p><strong>Illusion</strong> · 60 feet · V, S, M (a bit of fleece) · Concentration, up to 10 minutes</p><p>You create a soundless visual illusion up to a 15-foot Cube, which you can move and animate as a Magic action. Things pass through it, and a creature that Studies it can see through it with an Intelligence (Investigation) check against your spell save DC.</p>',
  archetypes: [Rank1, Illusion],
  actions: [{ name: 'Cast Silent Image', action: ActionType.Standard }],
})

export const Sleep = Abilities.defineAbility('spell/sleep', {
  name: 'Sleep',
  description:
    "<p><strong>Enchantment</strong> · 60 feet · V, S, M (a pinch of sand or rose petals) · Concentration, up to 1 minute</p><p>Creatures you choose in a 5-foot-radius Sphere must pass a Wisdom save or be Incapacitated until the end of their next turn. Those that then fail a second save fall Unconscious for the duration, until they take damage or someone nearby uses an action to wake them. Creatures that don't sleep or are immune to Exhaustion are unaffected.</p>",
  archetypes: [Rank1, Enchantment],
  actions: [{ name: 'Cast Sleep', action: ActionType.Standard }],
})

export const TashasHideousLaughter = Abilities.defineAbility('spell/tashas-hideous-laughter', {
  name: "Tasha's Hideous Laughter",
  description:
    '<p><strong>Enchantment</strong> · 30 feet · V, S, M (a tart and a feather) · Concentration, up to 1 minute</p><p>A creature you can see must pass a Wisdom save or collapse with laughter, becoming Prone and Incapacitated, unable to stand up. It repeats the save at the end of each of its turns and whenever it takes damage (with Advantage), ending the spell on a success.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 1.</p>',
  archetypes: [Rank1, Enchantment],
  actions: [{ name: "Cast Tasha's Hideous Laughter", action: ActionType.Standard }],
})

export const TensersFloatingDisk = Abilities.defineAbility('spell/tensers-floating-disk', {
  name: "Tenser's Floating Disk",
  description:
    "<p><strong>Conjuration</strong> · Action or Ritual · 30 feet · V, S, M (a drop of mercury) · 1 hour</p><p>A 3-foot disk of force floats at waist height and carries up to 500 pounds. It follows to stay within 20 feet of you but can't climb or drop 10 feet or more. The spell ends if it's overloaded or you get more than 100 feet away.</p>",
  archetypes: [Rank1, Conjuration],
  actions: [{ name: "Cast Tenser's Floating Disk", action: ActionType.Standard }],
})

export const Thunderwave = Abilities.defineAbility('spell/thunderwave', {
  name: 'Thunderwave',
  description:
    "<p><strong>Evocation</strong> · Self · V, S · Instantaneous</p><p>A thunderous wave fills a 15-foot Cube from you. Creatures there make a Constitution save: on a failure they take 2d8 Thunder damage and are pushed 10 feet away, and on a success they take half and aren't pushed. Loose objects are pushed too, and the boom can be heard 300 feet away.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 1.</p>",
  archetypes: [Rank1, Evocation],
  actions: [{ name: 'Cast Thunderwave', action: ActionType.Standard }],
})

export const UnseenServant = Abilities.defineAbility('spell/unseen-servant', {
  name: 'Unseen Servant',
  description:
    "<p><strong>Conjuration</strong> · Action or Ritual · 60 feet · V, S, M (a bit of string and of wood) · 1 hour</p><p>An Invisible, mindless force (AC 10, 1 HP, Strength 2) does simple chores for you, like fetching, cleaning, or serving. As a Bonus Action, you can order it to move up to 15 feet and interact with an object. It can't attack, and the spell ends if it drops to 0 HP or goes more than 60 feet from you.</p>",
  archetypes: [Rank1, Conjuration],
  actions: [{ name: 'Cast Unseen Servant', action: ActionType.Standard }],
})

export const WitchBolt = Abilities.defineAbility('spell/witch-bolt', {
  name: 'Witch Bolt',
  description:
    '<p><strong>Evocation</strong> · 60 feet · V, S, M (a twig struck by lightning) · Concentration, up to 1 minute</p><p>Make a ranged spell attack with a crackling arc of lightning, dealing 2d12 Lightning damage on a hit. On later turns, as a Bonus Action, you can deal 1d12 Lightning damage to the target automatically, even if you missed at first. The spell ends if the target leaves range or gets Total Cover.</p><p><strong>Higher Levels:</strong> +1d12 initial damage per slot level above 1.</p>',
  archetypes: [Rank1, Evocation],
  actions: [{ name: 'Cast Witch Bolt', action: ActionType.Standard }],
})

export const AlterSelf = Abilities.defineAbility('spell/alter-self', {
  name: 'Alter Self',
  description:
    '<p><strong>Transmutation</strong> · Self · V, S · Concentration, up to 1 hour</p><p>You reshape your body in one of three ways, and can switch as a Magic action: <strong>Aquatic Adaptation</strong> (breathe water and gain a Swim Speed), <strong>Change Appearance</strong> (look like anyone of your size and shape), or <strong>Natural Weapons</strong> (claws, fangs, horns, or hooves that make your Unarmed Strikes deal 1d6 damage using your spellcasting ability).</p>',
  archetypes: [Rank2, Transmutation],
  actions: [{ name: 'Cast Alter Self', action: ActionType.Standard }],
})

export const ArcaneLock = Abilities.defineAbility('spell/arcane-lock', {
  name: 'Arcane Lock',
  description:
    "<p><strong>Abjuration</strong> · Touch · V, S, M (gold dust worth 25+ GP, which the spell consumes) · Until dispelled</p><p>A closed door, window, gate, container, or hatch you touch is magically locked and can't be opened by nonmagical means. You and creatures you choose can still use it, and you can set a password that unlocks it for 1 minute.</p>",
  archetypes: [Rank2, Abjuration],
  actions: [{ name: 'Cast Arcane Lock', action: ActionType.Standard }],
})

export const ArcaneVigor = Abilities.defineAbility('spell/arcane-vigor', {
  name: 'Arcane Vigor',
  description:
    '<p><strong>Abjuration</strong> · Self · V, S · Instantaneous</p><p>Roll one or two of your unspent Hit Point Dice and regain that many Hit Points plus your spellcasting ability modifier. The dice are then spent.</p><p><strong>Higher Levels:</strong> one extra die per slot level above 2.</p>',
  archetypes: [Rank2, Abjuration],
  actions: [{ name: 'Cast Arcane Vigor', action: ActionType.Bonus }],
})

export const Augury = Abilities.defineAbility('spell/augury', {
  name: 'Augury',
  description:
    "<p><strong>Divination</strong> · 1 minute or Ritual · Self · V, S, M (specially marked sticks, bones, cards, or other divinatory tokens worth 25+ GP) · Instantaneous</p><p>Ask about a course of action you plan to take in the next 30 minutes and receive an omen: weal (good), woe (bad), weal and woe (both), or indifference (neither). It doesn't foresee outside changes. Each extra casting before a Long Rest has a cumulative 25 percent chance of getting no answer.</p>",
  archetypes: [Rank2, Divination],
  actions: [{ name: 'Cast Augury', action: ActionType.Standard }],
})

export const BlindnessDeafness = Abilities.defineAbility('spell/blindness-deafness', {
  name: 'Blindness/Deafness',
  description:
    '<p><strong>Transmutation</strong> · 120 feet · V · 1 minute</p><p>A creature you can see must pass a Constitution save or be Blinded or Deafened (your choice). It repeats the save at the end of each of its turns, ending the effect on a success.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 2.</p>',
  archetypes: [Rank2, Transmutation],
  actions: [{ name: 'Cast Blindness/Deafness', action: ActionType.Standard }],
})

export const Blur = Abilities.defineAbility('spell/blur', {
  name: 'Blur',
  description:
    '<p><strong>Illusion</strong> · Self · V · Concentration, up to 1 minute</p><p>Your form shimmers, and attacks against you have Disadvantage, unless the attacker perceives you with Blindsight or Truesight.</p>',
  archetypes: [Rank2, Illusion],
  actions: [{ name: 'Cast Blur', action: ActionType.Standard }],
})

export const CloudOfDaggers = Abilities.defineAbility('spell/cloud-of-daggers', {
  name: 'Cloud of Daggers',
  description:
    '<p><strong>Conjuration</strong> · 60 feet · V, S, M (a sliver of glass) · Concentration, up to 1 minute</p><p>Whirling blades fill a 5-foot Cube, dealing 4d4 Slashing damage to creatures in it, entering it, ending a turn there, or caught when it moves (once per turn). On later turns, you can teleport it up to 30 feet as a Magic action.</p><p><strong>Higher Levels:</strong> +2d4 damage per slot level above 2.</p>',
  archetypes: [Rank2, Conjuration],
  actions: [{ name: 'Cast Cloud of Daggers', action: ActionType.Standard }],
})

export const ContinualFlame = Abilities.defineAbility('spell/continual-flame', {
  name: 'Continual Flame',
  description:
    '<p><strong>Evocation</strong> · Touch · V, S, M (ruby dust worth 50+ GP, which the spell consumes) · Until dispelled</p><p>An object you touch bursts into a heatless, fuelless flame that sheds Bright Light for 20 feet and Dim Light for 20 more. It can be covered but never put out.</p>',
  archetypes: [Rank2, Evocation],
  actions: [{ name: 'Cast Continual Flame', action: ActionType.Standard }],
})

export const CrownOfMadness = Abilities.defineAbility('spell/crown-of-madness', {
  name: 'Crown of Madness',
  description:
    '<p><strong>Enchantment</strong> · 120 feet · V, S · Concentration, up to 1 minute</p><p>A Humanoid you can see must pass a Wisdom save or be Charmed. Each turn, before moving, it must use its action to make a melee attack against a creature you mentally pick (other than itself), if one is in reach. It repeats the save at the end of each of its turns, and you must use a Magic action each turn to keep control.</p>',
  archetypes: [Rank2, Enchantment],
  actions: [{ name: 'Cast Crown of Madness', action: ActionType.Standard }],
})

export const Darkness = Abilities.defineAbility('spell/darkness', {
  name: 'Darkness',
  description:
    "<p><strong>Evocation</strong> · 60 feet · V, M (bat fur and a piece of coal) · Concentration, up to 10 minutes</p><p>Magical Darkness fills a 15-foot-radius Sphere, or a 15-foot Emanation from an unattended object (which you can cover to block it). Darkvision and nonmagical light can't pierce it, and it dispels overlapping light from spells of level 2 or lower.</p>",
  archetypes: [Rank2, Evocation],
  actions: [{ name: 'Cast Darkness', action: ActionType.Standard }],
})

export const Darkvision = Abilities.defineAbility('spell/darkvision', {
  name: 'Darkvision',
  description:
    '<p><strong>Transmutation</strong> · Touch · V, S, M (a dried carrot) · 8 hours</p><p>A willing creature you touch gains Darkvision out to 150 feet.</p>',
  archetypes: [Rank2, Transmutation],
  actions: [{ name: 'Cast Darkvision', action: ActionType.Standard }],
})

export const DetectThoughts = Abilities.defineAbility('spell/detect-thoughts', {
  name: 'Detect Thoughts',
  description:
    "<p><strong>Divination</strong> · Self · V, S, M (1 Copper Piece) · Concentration, up to 1 minute</p><p><strong>Sense Thoughts:</strong> detect thinking creatures within 30 feet (blocked by thick materials or lead). <strong>Read Thoughts:</strong> learn a creature's surface thoughts. On your next turn, you can probe deeper (Wisdom save) to learn its reasoning, emotions, and preoccupations. The target knows it's being probed and can try to push you out with an Intelligence (Arcana) check.</p>",
  archetypes: [Rank2, Divination],
  actions: [{ name: 'Cast Detect Thoughts', action: ActionType.Standard }],
})

export const DragonsBreath = Abilities.defineAbility('spell/dragons-breath', {
  name: "Dragon's Breath",
  description:
    '<p><strong>Transmutation</strong> · Touch · V, S, M (a hot pepper) · Concentration, up to 1 minute</p><p>A willing creature you touch can, as a Magic action, exhale a 15-foot Cone of Acid, Cold, Fire, Lightning, or Poison (your choice when casting). Creatures in it make a Dexterity save, taking 3d6 damage on a failure or half on a success.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 2.</p>',
  archetypes: [Rank2, Transmutation],
  actions: [{ name: "Cast Dragon's Breath", action: ActionType.Bonus }],
})

export const EnhanceAbility = Abilities.defineAbility('spell/enhance-ability', {
  name: 'Enhance Ability',
  description:
    '<p><strong>Transmutation</strong> · Touch · V, S, M (fur or a feather) · Concentration, up to 1 hour</p><p>A creature you touch has Advantage on ability checks with one ability of your choice (Strength, Dexterity, Intelligence, Wisdom, or Charisma).</p><p><strong>Higher Levels:</strong> one extra target per slot level above 2, each with its own ability.</p>',
  archetypes: [Rank2, Transmutation],
  actions: [{ name: 'Cast Enhance Ability', action: ActionType.Standard }],
})

export const EnlargeReduce = Abilities.defineAbility('spell/enlarge-reduce', {
  name: 'Enlarge/Reduce',
  description:
    '<p><strong>Transmutation</strong> · 30 feet · V, S, M (a pinch of powdered iron) · Concentration, up to 1 minute</p><p>A creature or unattended object you can see grows or shrinks by one size category, along with its gear (an unwilling creature can make a Constitution save). <strong>Enlarge</strong> gives Advantage on Strength checks and saves and +1d4 weapon and Unarmed Strike damage. <strong>Reduce</strong> gives Disadvantage on them and −1d4 damage (minimum 1).</p>',
  archetypes: [Rank2, Transmutation],
  actions: [{ name: 'Cast Enlarge/Reduce', action: ActionType.Standard }],
})

export const FlamingSphere = Abilities.defineAbility('spell/flaming-sphere', {
  name: 'Flaming Sphere',
  description:
    '<p><strong>Conjuration</strong> · 60 feet · V, S, M (a ball of wax) · Concentration, up to 1 minute</p><p>A 5-foot ball of fire sits on the ground and sheds light. Creatures ending their turn within 5 feet of it make a Dexterity save, taking 2d6 Fire damage on a failure or half on a success. As a Bonus Action you can roll it up to 30 feet, and ramming a creature forces the save and stops it.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 2.</p>',
  archetypes: [Rank2, Conjuration],
  actions: [{ name: 'Cast Flaming Sphere', action: ActionType.Standard }],
})

export const GentleRepose = Abilities.defineAbility('spell/gentle-repose', {
  name: 'Gentle Repose',
  description:
    "<p><strong>Necromancy</strong> · Action or Ritual · Touch · V, S, M (2 Copper Pieces, which the spell consumes) · 10 days</p><p>Remains you touch don't decay and can't become Undead, and the time doesn't count against the limit for raising them from the dead.</p>",
  archetypes: [Rank2, Necromancy],
  actions: [{ name: 'Cast Gentle Repose', action: ActionType.Standard }],
})

export const GustOfWind = Abilities.defineAbility('spell/gust-of-wind', {
  name: 'Gust of Wind',
  description:
    '<p><strong>Evocation</strong> · Self · V, S, M (a legume seed) · Concentration, up to 1 minute</p><p>A 60-foot by 10-foot Line of wind blasts from you. Creatures in it must pass a Strength save or be pushed 15 feet away, and moving toward you costs double. It scatters gas and snuffs out unprotected flames, and you can redirect it as a Bonus Action.</p>',
  archetypes: [Rank2, Evocation],
  actions: [{ name: 'Cast Gust of Wind', action: ActionType.Standard }],
})

export const HoldPerson = Abilities.defineAbility('spell/hold-person', {
  name: 'Hold Person',
  description:
    '<p><strong>Enchantment</strong> · 60 feet · V, S, M (a straight piece of iron) · Concentration, up to 1 minute</p><p>A Humanoid you can see must pass a Wisdom save or be Paralyzed. It repeats the save at the end of each of its turns, ending the effect on a success.</p><p><strong>Higher Levels:</strong> one extra Humanoid per slot level above 2.</p>',
  archetypes: [Rank2, Enchantment],
  actions: [{ name: 'Cast Hold Person', action: ActionType.Standard }],
})

export const Invisibility = Abilities.defineAbility('spell/invisibility', {
  name: 'Invisibility',
  description:
    '<p><strong>Illusion</strong> · Touch · V, S, M (an eyelash in gum arabic) · Concentration, up to 1 hour</p><p>A creature you touch is Invisible until it attacks, deals damage, or casts a spell.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 2.</p>',
  archetypes: [Rank2, Illusion],
  actions: [{ name: 'Cast Invisibility', action: ActionType.Standard }],
})

export const Knock = Abilities.defineAbility('spell/knock', {
  name: 'Knock',
  description:
    "<p><strong>Transmutation</strong> · 60 feet · V · Instantaneous</p><p>An object you can see that's locked, stuck, or barred comes open (one lock at a time). Arcane Lock on it is suppressed for 10 minutes. The spell makes a loud knock heard up to 300 feet away.</p>",
  archetypes: [Rank2, Transmutation],
  actions: [{ name: 'Cast Knock', action: ActionType.Standard }],
})

export const Levitate = Abilities.defineAbility('spell/levitate', {
  name: 'Levitate',
  description:
    '<p><strong>Transmutation</strong> · 60 feet · V, S, M (a metal spring) · Concentration, up to 10 minutes</p><p>A creature or loose object (up to 500 pounds) rises up to 20 feet and hangs there. An unwilling creature can resist with a Constitution save. It can only move by pulling itself along surfaces, but you can raise or lower it 20 feet on your turn. It drifts gently down when the spell ends.</p>',
  archetypes: [Rank2, Transmutation],
  actions: [{ name: 'Cast Levitate', action: ActionType.Standard }],
})

export const LocateObject = Abilities.defineAbility('spell/locate-object', {
  name: 'Locate Object',
  description:
    "<p><strong>Divination</strong> · Self · V, S, M (a forked twig) · Concentration, up to 10 minutes</p><p>You sense the direction of a familiar object within 1,000 feet, or the nearest object of a named kind, and whether it's moving. You need to have seen a specific object up close before, and lead blocks the spell.</p>",
  archetypes: [Rank2, Divination],
  actions: [{ name: 'Cast Locate Object', action: ActionType.Standard }],
})

export const MagicMouth = Abilities.defineAbility('spell/magic-mouth', {
  name: 'Magic Mouth',
  description:
    '<p><strong>Illusion</strong> · 1 minute or Ritual · 30 feet · V, S, M (jade dust worth 10+ GP, which the spell consumes) · Until dispelled</p><p>You store a message of 25 words or fewer in an unattended object. A magical mouth speaks it in your voice when a trigger you set, based on sight or sound within 30 feet, occurs. It can speak once or every time the trigger happens.</p>',
  archetypes: [Rank2, Illusion],
  actions: [{ name: 'Cast Magic Mouth', action: ActionType.Standard }],
})

export const MagicWeapon = Abilities.defineAbility('spell/magic-weapon', {
  name: 'Magic Weapon',
  description:
    '<p><strong>Transmutation</strong> · Touch · V, S · 1 hour</p><p>A nonmagical weapon you touch becomes magical, with +1 to attack and damage rolls.</p><p><strong>Higher Levels:</strong> +2 with a level 3–5 slot, or +3 with a level 6+ slot.</p>',
  archetypes: [Rank2, Transmutation],
  actions: [{ name: 'Cast Magic Weapon', action: ActionType.Bonus }],
})

export const MelfsAcidArrow = Abilities.defineAbility('spell/melfs-acid-arrow', {
  name: "Melf's Acid Arrow",
  description:
    '<p><strong>Evocation</strong> · 90 feet · V, S, M (powdered rhubarb leaf) · Instantaneous</p><p>Make a ranged spell attack with an acid arrow. On a hit, the target takes 4d4 Acid damage now and 2d4 more at the end of its next turn. On a miss, it takes half the initial damage.</p><p><strong>Higher Levels:</strong> +1d4 to both the initial and later damage per slot level above 2.</p>',
  archetypes: [Rank2, Evocation],
  actions: [{ name: "Cast Melf's Acid Arrow", action: ActionType.Standard }],
})

export const MindSpike = Abilities.defineAbility('spell/mind-spike', {
  name: 'Mind Spike',
  description:
    "<p><strong>Divination</strong> · 120 feet · S · Concentration, up to 1 hour</p><p>A creature you can see makes a Wisdom save, taking 3d8 Psychic damage on a failure or half on a success. On a failure, you also always know where it is on the same plane, so it can't hide from you and gains nothing from being Invisible against you.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 2.</p>",
  archetypes: [Rank2, Divination],
  actions: [{ name: 'Cast Mind Spike', action: ActionType.Standard }],
})

export const MirrorImage = Abilities.defineAbility('spell/mirror-image', {
  name: 'Mirror Image',
  description:
    "<p><strong>Illusion</strong> · Self · V, S · 1 minute</p><p>Three illusory copies of you appear. When an attack hits you, roll a d6 for each remaining copy. If any roll 3 or higher, a copy takes the hit and vanishes instead. Attackers that are Blinded or have Blindsight or Truesight aren't fooled.</p>",
  archetypes: [Rank2, Illusion],
  actions: [{ name: 'Cast Mirror Image', action: ActionType.Standard }],
})

export const MistyStep = Abilities.defineAbility('spell/misty-step', {
  name: 'Misty Step',
  description:
    '<p><strong>Conjuration</strong> · Self · V · Instantaneous</p><p>As a Bonus Action, you teleport up to 30 feet to an unoccupied space you can see.</p>',
  archetypes: [Rank2, Conjuration],
  actions: [{ name: 'Cast Misty Step', action: ActionType.Bonus }],
})

export const NystulsMagicAura = Abilities.defineAbility('spell/nystuls-magic-aura', {
  name: "Nystul's Magic Aura",
  description:
    "<p><strong>Illusion</strong> · Touch · V, S, M (a small square of silk) · 24 hours</p><p>A willing creature you touch appears to magic as a different creature type (<strong>Mask</strong>), or an unattended object's magical aura is falsified (<strong>False Aura</strong>): it seems magical or not, or of another school. Cast it daily for 30 days to make it last until dispelled.</p>",
  archetypes: [Rank2, Illusion],
  actions: [{ name: "Cast Nystul's Magic Aura", action: ActionType.Standard }],
})

export const PhantasmalForce = Abilities.defineAbility('spell/phantasmal-force', {
  name: 'Phantasmal Force',
  description:
    '<p><strong>Illusion</strong> · 60 feet · V, S, M (a bit of fleece) · Concentration, up to 1 minute</p><p>A creature you can see must pass an Intelligence save or perceive a lifelike illusion, up to a 10-foot Cube, that only it can sense. It explains away any inconsistencies. A dangerous phantasm can deal 2d8 Psychic damage to it each turn. The target can Study the illusion and see through it with an Intelligence (Investigation) check.</p>',
  archetypes: [Rank2, Illusion],
  actions: [{ name: 'Cast Phantasmal Force', action: ActionType.Standard }],
})

export const RayOfEnfeeblement = Abilities.defineAbility('spell/ray-of-enfeeblement', {
  name: 'Ray of Enfeeblement',
  description:
    '<p><strong>Necromancy</strong> · 60 feet · V, S · Concentration, up to 1 minute</p><p>A creature makes a Constitution save. On a failure it has Disadvantage on Strength-based D20 Tests and subtracts 1d8 from its damage rolls, repeating the save each turn to end it. On a success, it just has Disadvantage on its next attack roll.</p>',
  archetypes: [Rank2, Necromancy],
  actions: [{ name: 'Cast Ray of Enfeeblement', action: ActionType.Standard }],
})

export const RopeTrick = Abilities.defineAbility('spell/rope-trick', {
  name: 'Rope Trick',
  description:
    '<p><strong>Transmutation</strong> · Touch · V, S, M (a segment of rope) · 1 hour</p><p>A rope you touch rises to an Invisible portal leading to an extradimensional room that holds up to eight Medium creatures. Nothing can pass in or out except by climbing the rope, which can be pulled up after you, but those inside can see out.</p>',
  archetypes: [Rank2, Transmutation],
  actions: [{ name: 'Cast Rope Trick', action: ActionType.Standard }],
})

export const ScorchingRay = Abilities.defineAbility('spell/scorching-ray', {
  name: 'Scorching Ray',
  description:
    '<p><strong>Evocation</strong> · 120 feet · V, S · Instantaneous</p><p>Fire three rays at one or more targets, making a ranged spell attack for each. Each hit deals 2d6 Fire damage.</p><p><strong>Higher Levels:</strong> one extra ray per slot level above 2.</p>',
  archetypes: [Rank2, Evocation],
  actions: [{ name: 'Cast Scorching Ray', action: ActionType.Standard }],
})

export const SeeInvisibility = Abilities.defineAbility('spell/see-invisibility', {
  name: 'See Invisibility',
  description:
    '<p><strong>Divination</strong> · Self · V, S, M (a pinch of talc) · 1 hour</p><p>You can see Invisible creatures and objects, and see into the Ethereal Plane.</p>',
  archetypes: [Rank2, Divination],
  actions: [{ name: 'Cast See Invisibility', action: ActionType.Standard }],
})

export const Shatter = Abilities.defineAbility('spell/shatter', {
  name: 'Shatter',
  description:
    '<p><strong>Evocation</strong> · 60 feet · V, S, M (a chip of mica) · Instantaneous</p><p>A thunderous crack hits a 10-foot-radius Sphere. Creatures there make a Constitution save (Constructs with Disadvantage), taking 3d8 Thunder damage on a failure or half on a success. Unattended objects are damaged too.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 2.</p>',
  archetypes: [Rank2, Evocation],
  actions: [{ name: 'Cast Shatter', action: ActionType.Standard }],
})

export const SpiderClimb = Abilities.defineAbility('spell/spider-climb', {
  name: 'Spider Climb',
  description:
    '<p><strong>Transmutation</strong> · Touch · V, S, M (a drop of bitumen and a spider) · Concentration, up to 1 hour</p><p>A willing creature you touch can walk on walls and ceilings with its hands free and gains a Climb Speed equal to its Speed.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 2.</p>',
  archetypes: [Rank2, Transmutation],
  actions: [{ name: 'Cast Spider Climb', action: ActionType.Standard }],
})

export const Suggestion = Abilities.defineAbility('spell/suggestion', {
  name: 'Suggestion',
  description:
    "<p><strong>Enchantment</strong> · 30 feet · V, M (a drop of honey) · Concentration, up to 8 hours</p><p>A creature that can hear and understand you must pass a Wisdom save or be Charmed and follow a reasonable-sounding suggestion of 25 words or fewer that isn't obviously harmful. It ends early if the task is done or you or your allies hurt it.</p>",
  archetypes: [Rank2, Enchantment],
  actions: [{ name: 'Cast Suggestion', action: ActionType.Standard }],
})

export const Web = Abilities.defineAbility('spell/web', {
  name: 'Web',
  description:
    '<p><strong>Conjuration</strong> · 60 feet · V, S, M (a bit of spiderweb) · Concentration, up to 1 hour</p><p>Sticky webs fill a 20-foot Cube, creating Difficult Terrain and Light Obscurement (they collapse unless anchored). Creatures entering or starting their turn there must pass a Dexterity save or be Restrained, and can break free with a Strength (Athletics) check. Fire burns the webs away.</p>',
  archetypes: [Rank2, Conjuration],
  actions: [{ name: 'Cast Web', action: ActionType.Standard }],
})

export const AnimateDead = Abilities.defineAbility('spell/animate-dead', {
  name: 'Animate Dead',
  description:
    '<p><strong>Necromancy</strong> · 1 minute · 10 Feet · V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust) · Instantaneous</p><p>Raise a Small or Medium Humanoid corpse as a Zombie, or bones as a Skeleton. As a Bonus Action, you can command your creations within 60 feet, giving them specific orders or a standing task. Control lasts 24 hours, and recasting the spell on up to four of them renews it instead of making a new one.</p><p><strong>Higher Levels:</strong> two extra Undead per slot level above 3.</p>',
  archetypes: [Rank3, Necromancy],
  actions: [{ name: 'Cast Animate Dead', action: ActionType.Standard }],
})

export const BestowCurse = Abilities.defineAbility('spell/bestow-curse', {
  name: 'Bestow Curse',
  description:
    '<p><strong>Necromancy</strong> · Touch · V, S · Concentration, up to 1 minute</p><p>A creature you touch must pass a Wisdom save or be cursed with one effect: Disadvantage on checks and saves with one ability, Disadvantage on attacks against you, a Wisdom save each turn or it must Dodge, or +1d8 Necrotic damage whenever you hit it.</p><p><strong>Higher Levels:</strong> longer durations at level 4+, with no Concentration needed at level 5+, and permanent until dispelled at level 9.</p>',
  archetypes: [Rank3, Necromancy],
  actions: [{ name: 'Cast Bestow Curse', action: ActionType.Standard }],
})

export const Blink = Abilities.defineAbility('spell/blink', {
  name: 'Blink',
  description:
    '<p><strong>Transmutation</strong> · Self · V, S · 1 minute</p><p>At the end of each of your turns, roll a d6. On a 4–6 you slip into the Ethereal Plane, where only other ethereal creatures can affect you. You return within 10 feet of where you left at the start of your next turn.</p>',
  archetypes: [Rank3, Transmutation],
  actions: [{ name: 'Cast Blink', action: ActionType.Standard }],
})

export const Clairvoyance = Abilities.defineAbility('spell/clairvoyance', {
  name: 'Clairvoyance',
  description:
    '<p><strong>Divination</strong> · 10 minutes · 1 mile · V, S, M (a focus worth 100+ GP, either a jeweled horn for hearing or a glass eye for seeing) · Concentration, up to 10 minutes</p><p>Create an Invisible, intangible sensor in a familiar or obvious nearby location and see or hear through it as if you were there, switching senses as a Bonus Action. Creatures that can see the Invisible notice a small glowing orb.</p>',
  archetypes: [Rank3, Divination],
  actions: [{ name: 'Cast Clairvoyance', action: ActionType.Standard }],
})

export const Counterspell = Abilities.defineAbility('spell/counterspell', {
  name: 'Counterspell',
  description:
    "<p><strong>Abjuration</strong> · Reaction, which you take when you see a creature within 60 feet of yourself casting a spell with Verbal, Somatic, or Material components · 60 feet · S · Instantaneous</p><p>As a Reaction when you see a creature casting a spell, it makes a Constitution save. On a failure the spell fizzles and the action used to cast it is wasted, but any spell slot it used isn't spent.</p>",
  archetypes: [Rank3, Abjuration],
  actions: [{ name: 'Cast Counterspell', action: ActionType.Reaction }],
})

export const DispelMagic = Abilities.defineAbility('spell/dispel-magic', {
  name: 'Dispel Magic',
  description:
    '<p><strong>Abjuration</strong> · 120 feet · V, S · Instantaneous</p><p>End every spell of level 3 or lower on a creature, object, or magical effect. For each higher-level spell, make a spellcasting ability check against DC 10 + its level to end it.</p><p><strong>Higher Levels:</strong> automatically ends spells up to the level of the slot used.</p>',
  archetypes: [Rank3, Abjuration],
  actions: [{ name: 'Cast Dispel Magic', action: ActionType.Standard }],
})

export const Fear = Abilities.defineAbility('spell/fear', {
  name: 'Fear',
  description:
    "<p><strong>Illusion</strong> · Self · V, S, M (a white feather) · Concentration, up to 1 minute</p><p>Creatures in a 30-foot Cone must pass a Wisdom save or drop what they're holding and become Frightened, using the Dash action to flee from you each turn. They can repeat the save only when they end a turn out of your sight.</p>",
  archetypes: [Rank3, Illusion],
  actions: [{ name: 'Cast Fear', action: ActionType.Standard }],
})

export const FeignDeath = Abilities.defineAbility('spell/feign-death', {
  name: 'Feign Death',
  description:
    "<p><strong>Necromancy</strong> · Action or Ritual · Touch · V, S, M (a pinch of graveyard dirt) · 1 hour</p><p>A willing creature you touch appears dead, even to magic. It's Blinded and Incapacitated with Speed 0, but it resists all damage except Psychic and can't be Poisoned.</p>",
  archetypes: [Rank3, Necromancy],
  actions: [{ name: 'Cast Feign Death', action: ActionType.Standard }],
})

export const Fireball = Abilities.defineAbility('spell/fireball', {
  name: 'Fireball',
  description:
    '<p><strong>Evocation</strong> · 150 feet · V, S, M (a ball of bat guano and sulfur) · Instantaneous</p><p>A 20-foot-radius Sphere explodes in flame. Creatures there make a Dexterity save, taking 8d6 Fire damage on a failure or half on a success, and unattended flammable objects ignite.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 3.</p>',
  archetypes: [Rank3, Evocation],
  actions: [{ name: 'Cast Fireball', action: ActionType.Standard }],
})

export const Fly = Abilities.defineAbility('spell/fly', {
  name: 'Fly',
  description:
    "<p><strong>Transmutation</strong> · Touch · V, S, M (a feather) · Concentration, up to 10 minutes</p><p>A willing creature you touch gains a Fly Speed of 60 feet and can hover. It falls if it's still airborne when the spell ends.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 3.</p>",
  archetypes: [Rank3, Transmutation],
  actions: [{ name: 'Cast Fly', action: ActionType.Standard }],
})

export const GaseousForm = Abilities.defineAbility('spell/gaseous-form', {
  name: 'Gaseous Form',
  description:
    "<p><strong>Transmutation</strong> · Touch · V, S, M (a bit of gauze) · Concentration, up to 1 hour</p><p>A willing creature you touch turns into mist with a 10-foot Fly Speed. It can seep through small gaps and into other creatures' spaces, resists Bludgeoning, Piercing, and Slashing damage, and has Advantage on Strength, Dexterity, and Constitution saves. It can't talk, attack, cast spells, or use objects.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 3.</p>",
  archetypes: [Rank3, Transmutation],
  actions: [{ name: 'Cast Gaseous Form', action: ActionType.Standard }],
})

export const GlyphOfWarding = Abilities.defineAbility('spell/glyph-of-warding', {
  name: 'Glyph of Warding',
  description:
    '<p><strong>Abjuration</strong> · 1 hour · Touch · V, S, M (powdered diamond worth 200+ GP, which the spell consumes) · Until dispelled or triggered</p><p>Inscribe a hidden glyph (found with Wisdom (Perception) against your spell save DC) on a surface or inside a closed object, with a trigger you define. It either explodes for 5d8 damage of a chosen element in a 20-foot radius (Dexterity save for half), or releases a spell of level 3 or lower stored in it on whoever triggered it. It breaks if moved more than 10 feet.</p><p><strong>Higher Levels:</strong> +1d8 explosion damage, or a higher-level stored spell, per slot level above 3.</p>',
  archetypes: [Rank3, Abjuration],
  actions: [{ name: 'Cast Glyph of Warding', action: ActionType.Standard }],
})

export const Haste = Abilities.defineAbility('spell/haste', {
  name: 'Haste',
  description:
    "<p><strong>Transmutation</strong> · 30 feet · V, S, M (a shaving of licorice root) · Concentration, up to 1 minute</p><p>A willing creature you can see doubles its Speed, gains +2 AC and Advantage on Dexterity saves, and gets an extra action each turn (one attack, Dash, Disengage, Hide, or Utilize). When the spell ends, it's Incapacitated with Speed 0 until the end of its next turn.</p>",
  archetypes: [Rank3, Transmutation],
  actions: [{ name: 'Cast Haste', action: ActionType.Standard }],
})

export const HypnoticPattern = Abilities.defineAbility('spell/hypnotic-pattern', {
  name: 'Hypnotic Pattern',
  description:
    '<p><strong>Illusion</strong> · 120 feet · S, M (a pinch of confetti) · Concentration, up to 1 minute</p><p>A swirl of colors in a 30-foot Cube forces creatures that see it to pass a Wisdom save or be Charmed, which leaves them Incapacitated with Speed 0. The effect ends for a creature if it takes damage or someone uses an action to shake it awake.</p>',
  archetypes: [Rank3, Illusion],
  actions: [{ name: 'Cast Hypnotic Pattern', action: ActionType.Standard }],
})

export const LeomundsTinyHut = Abilities.defineAbility('spell/leomunds-tiny-hut', {
  name: "Leomund's Tiny Hut",
  description:
    "<p><strong>Evocation</strong> · 1 minute or Ritual · Self · V, S, M (a crystal bead) · 8 hours</p><p>A stationary 10-foot dome forms around you. Those inside when it's cast can come and go, but nothing else can enter, and spells of level 3 or lower can't reach through it. Inside it's dry and comfortable, lit as you like, and opaque from outside. It ends if you leave.</p>",
  archetypes: [Rank3, Evocation],
  actions: [{ name: "Cast Leomund's Tiny Hut", action: ActionType.Standard }],
})

export const LightningBolt = Abilities.defineAbility('spell/lightning-bolt', {
  name: 'Lightning Bolt',
  description:
    '<p><strong>Evocation</strong> · Self · V, S, M (a bit of fur and a crystal rod) · Instantaneous</p><p>A 100-foot by 5-foot Line of lightning blasts from you. Creatures in it make a Dexterity save, taking 8d6 Lightning damage on a failure or half on a success.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 3.</p>',
  archetypes: [Rank3, Evocation],
  actions: [{ name: 'Cast Lightning Bolt', action: ActionType.Standard }],
})

export const MagicCircle = Abilities.defineAbility('spell/magic-circle', {
  name: 'Magic Circle',
  description:
    "<p><strong>Abjuration</strong> · 1 minute · 10 feet · V, S, M (salt and powdered silver worth 100+ GP, which the spell consumes) · 1 hour</p><p>A 10-foot-radius, 20-foot-tall Cylinder wards against the creature types you choose (Celestials, Elementals, Fey, Fiends, or Undead). They can't enter it without magic (and a Charisma save to teleport in), have Disadvantage attacking those inside, and can't Charm, Frighten, or possess them. You can reverse it to trap a creature inside instead.</p><p><strong>Higher Levels:</strong> +1 hour of duration per slot level above 3.</p>",
  archetypes: [Rank3, Abjuration],
  actions: [{ name: 'Cast Magic Circle', action: ActionType.Standard }],
})

export const MajorImage = Abilities.defineAbility('spell/major-image', {
  name: 'Major Image',
  description:
    "<p><strong>Illusion</strong> · 120 feet · V, S, M (a bit of fleece) · Concentration, up to 10 minutes</p><p>Create a convincing illusion up to a 20-foot Cube with sound, smell, and temperature. You can move it and make it speak as a Magic action, but it can't cause harm. Touch reveals it, and a creature that Studies it can see through it with an Intelligence (Investigation) check.</p><p><strong>Higher Levels:</strong> with a level 4+ slot, it lasts until dispelled without Concentration.</p>",
  archetypes: [Rank3, Illusion],
  actions: [{ name: 'Cast Major Image', action: ActionType.Standard }],
})

export const Nondetection = Abilities.defineAbility('spell/nondetection', {
  name: 'Nondetection',
  description:
    "<p><strong>Abjuration</strong> · Touch · V, S, M (a pinch of diamond dust worth 25+ GP, which the spell consumes) · 8 hours</p><p>A willing creature, or a place or object up to 10 feet across, that you touch can't be targeted by Divination spells or seen through scrying sensors.</p>",
  archetypes: [Rank3, Abjuration],
  actions: [{ name: 'Cast Nondetection', action: ActionType.Standard }],
})

export const PhantomSteed = Abilities.defineAbility('spell/phantom-steed', {
  name: 'Phantom Steed',
  description:
    '<p><strong>Illusion</strong> · 1 minute or Ritual · 30 feet · V, S · 1 hour</p><p>A Large, horselike creature of your design appears with tack, using Riding Horse statistics but with a 100-foot Speed (13 miles per hour). It fades when the spell ends, giving the rider a minute to dismount, and vanishes if it takes damage.</p>',
  archetypes: [Rank3, Illusion],
  actions: [{ name: 'Cast Phantom Steed', action: ActionType.Standard }],
})

export const ProtectionFromEnergy = Abilities.defineAbility('spell/protection-from-energy', {
  name: 'Protection from Energy',
  description:
    '<p><strong>Abjuration</strong> · Touch · V, S · Concentration, up to 1 hour</p><p>A willing creature you touch gains Resistance to Acid, Cold, Fire, Lightning, or Thunder damage (your choice).</p>',
  archetypes: [Rank3, Abjuration],
  actions: [{ name: 'Cast Protection from Energy', action: ActionType.Standard }],
})

export const RemoveCurse = Abilities.defineAbility('spell/remove-curse', {
  name: 'Remove Curse',
  description:
    "<p><strong>Abjuration</strong> · Touch · V, S · Instantaneous</p><p>End every curse on a creature or object you touch. A cursed magic item stays cursed, but its owner's Attunement breaks so they can get rid of it.</p>",
  archetypes: [Rank3, Abjuration],
  actions: [{ name: 'Cast Remove Curse', action: ActionType.Standard }],
})

export const Sending = Abilities.defineAbility('spell/sending', {
  name: 'Sending',
  description:
    "<p><strong>Divination</strong> · Unlimited · V, S, M (a copper wire) · Instantaneous</p><p>Send a message of 25 words or fewer to a creature you've met or had described to you, at any distance, and it can reply straight away. Messages to other planes have a 5 percent chance to fail, and a recipient can block you for 8 hours.</p>",
  archetypes: [Rank3, Divination],
  actions: [{ name: 'Cast Sending', action: ActionType.Standard }],
})

export const SleetStorm = Abilities.defineAbility('spell/sleet-storm', {
  name: 'Sleet Storm',
  description:
    '<p><strong>Conjuration</strong> · 150 feet · V, S, M (a miniature umbrella) · Concentration, up to 1 minute</p><p>Freezing sleet fills a 20-foot-radius, 40-foot-tall Cylinder, making it Heavily Obscured and Difficult Terrain and putting out open flames. Creatures entering or starting their turn there must pass a Dexterity save or fall Prone and lose Concentration.</p>',
  archetypes: [Rank3, Conjuration],
  actions: [{ name: 'Cast Sleet Storm', action: ActionType.Standard }],
})

export const Slow = Abilities.defineAbility('spell/slow', {
  name: 'Slow',
  description:
    '<p><strong>Transmutation</strong> · 120 feet · V, S, M (a drop of molasses) · Concentration, up to 1 minute</p><p>Up to six creatures in a 40-foot Cube must pass a Wisdom save or be slowed: half Speed, −2 to AC and Dexterity saves, no Reactions, only an action or a Bonus Action each turn (and only one attack), and a 25 percent chance for somatic spells to fail. They repeat the save each turn.</p>',
  archetypes: [Rank3, Transmutation],
  actions: [{ name: 'Cast Slow', action: ActionType.Standard }],
})

export const SpeakWithDead = Abilities.defineAbility('spell/speak-with-dead', {
  name: 'Speak with Dead',
  description:
    '<p><strong>Necromancy</strong> · 10 feet · V, S, M (burning incense) · 10 minutes</p><p>A corpse with a mouth answers up to five questions using only what it knew in life. Answers tend to be brief or cryptic, and a hostile corpse may lie. It fails on former Undead or a corpse questioned in the past 10 days.</p>',
  archetypes: [Rank3, Necromancy],
  actions: [{ name: 'Cast Speak with Dead', action: ActionType.Standard }],
})

export const StinkingCloud = Abilities.defineAbility('spell/stinking-cloud', {
  name: 'Stinking Cloud',
  description:
    '<p><strong>Conjuration</strong> · 90 feet · V, S, M (a rotten egg) · Concentration, up to 1 minute</p><p>A 20-foot-radius Sphere of foul gas is Heavily Obscured. Creatures starting their turn in it must pass a Constitution save or be Poisoned that turn, losing their action and Bonus Action. Strong wind disperses it.</p>',
  archetypes: [Rank3, Conjuration],
  actions: [{ name: 'Cast Stinking Cloud', action: ActionType.Standard }],
})

export const SummonFey = Abilities.defineAbility('spell/summon-fey', {
  name: 'Summon Fey',
  description:
    "<p><strong>Conjuration</strong> · 90 feet · V, S, M (a gilded flower worth 300+ GP) · Concentration, up to 1 hour</p><p>A Fey spirit (Fuming, Mirthful, or Tricksy) appears and fights beside you, taking its turn after yours and obeying your spoken commands. It attacks with force-infused blades and teleports as a Bonus Action with an effect based on its mood. It vanishes at 0 Hit Points.</p><p><strong>Higher Levels:</strong> the spirit's statistics scale with the slot level.</p>",
  archetypes: [Rank3, Conjuration],
  actions: [{ name: 'Cast Summon Fey', action: ActionType.Standard }],
})

export const SummonUndead = Abilities.defineAbility('spell/summon-undead', {
  name: 'Summon Undead',
  description:
    "<p><strong>Necromancy</strong> · 90 feet · V, S, M (a gilded skull worth 300+ GP) · Concentration, up to 1 hour</p><p>An Undead spirit (Ghostly, Putrid, or Skeletal) appears and fights beside you, taking its turn after yours and obeying your spoken commands. Ghostly spirits frighten with a touch and pass through objects, Putrid ones poison and paralyze, and Skeletal ones hurl bolts from range. It vanishes at 0 Hit Points.</p><p><strong>Higher Levels:</strong> the spirit's statistics scale with the slot level.</p>",
  archetypes: [Rank3, Necromancy],
  actions: [{ name: 'Cast Summon Undead', action: ActionType.Standard }],
})

export const Tongues = Abilities.defineAbility('spell/tongues', {
  name: 'Tongues',
  description:
    '<p><strong>Divination</strong> · Touch · V, M (a miniature ziggurat) · 1 hour</p><p>A creature you touch understands every spoken and signed language, and anyone who knows a language understands what it says.</p>',
  archetypes: [Rank3, Divination],
  actions: [{ name: 'Cast Tongues', action: ActionType.Standard }],
})

export const VampiricTouch = Abilities.defineAbility('spell/vampiric-touch', {
  name: 'Vampiric Touch',
  description:
    '<p><strong>Necromancy</strong> · Self · V, S · Concentration, up to 1 minute</p><p>Make a melee spell attack. On a hit, the target takes 3d6 Necrotic damage and you regain Hit Points equal to half of it. You can repeat the attack as a Magic action on later turns.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 3.</p>',
  archetypes: [Rank3, Necromancy],
  actions: [{ name: 'Cast Vampiric Touch', action: ActionType.Standard }],
})

export const WaterBreathing = Abilities.defineAbility('spell/water-breathing', {
  name: 'Water Breathing',
  description:
    '<p><strong>Transmutation</strong> · Action or Ritual · 30 feet · V, S, M (a short reed) · 24 hours</p><p>Up to ten willing creatures can breathe underwater, as well as normally.</p>',
  archetypes: [Rank3, Transmutation],
  actions: [{ name: 'Cast Water Breathing', action: ActionType.Standard }],
})

// Cleric domain spells

export const Bless = Abilities.defineAbility('spell/bless', {
  name: 'Bless',
  description:
    '<p><strong>Enchantment</strong> · 30 feet · V, S, M (a Holy Symbol worth 5+ GP) · Concentration, up to 1 minute</p><p>Up to three creatures you choose add 1d4 to their attack rolls and saving throws until the spell ends.</p><p><strong>Higher Levels:</strong> one extra target per slot level above 1.</p>',
  archetypes: [Rank1, Enchantment],
  actions: [{ name: 'Cast Bless', action: ActionType.Standard }],
})

export const CureWounds = Abilities.defineAbility('spell/cure-wounds', {
  name: 'Cure Wounds',
  description:
    '<p><strong>Abjuration</strong> · Touch · V, S · Instantaneous</p><p>A creature you touch regains Hit Points equal to 2d8 plus your spellcasting ability modifier.</p><p><strong>Higher Levels:</strong> +2d8 healing per slot level above 1.</p>',
  archetypes: [Rank1, Abjuration],
  actions: [{ name: 'Cast Cure Wounds', action: ActionType.Standard }],
})

export const FaerieFire = Abilities.defineAbility('spell/faerie-fire', {
  name: 'Faerie Fire',
  description:
    "<p><strong>Evocation</strong> · 60 feet · V · Concentration, up to 1 minute</p><p>Objects in a 20-foot Cube are outlined in blue, green, or violet light, as is each creature there that fails a Dexterity save. Outlined targets shed Dim Light in a 10-foot radius, can't benefit from the Invisible condition, and attack rolls against them have Advantage.</p>",
  archetypes: [Rank1, Evocation],
  actions: [{ name: 'Cast Faerie Fire', action: ActionType.Standard }],
})

export const GuidingBolt = Abilities.defineAbility('spell/guiding-bolt', {
  name: 'Guiding Bolt',
  description:
    '<p><strong>Evocation</strong> · 120 feet · V, S · 1 round</p><p>Make a ranged spell attack against a creature, dealing 4d6 Radiant damage on a hit. The next attack roll against it before the end of your next turn has Advantage.</p><p><strong>Higher Levels:</strong> +1d6 damage per slot level above 1.</p>',
  archetypes: [Rank1, Evocation],
  actions: [{ name: 'Cast Guiding Bolt', action: ActionType.Standard }],
})

export const ShieldOfFaith = Abilities.defineAbility('spell/shield-of-faith', {
  name: 'Shield of Faith',
  description:
    '<p><strong>Abjuration</strong> · 60 feet · V, S, M (a prayer scroll) · Concentration, up to 10 minutes</p><p>A shimmering field surrounds a creature of your choice, granting it a +2 bonus to Armor Class for the duration.</p>',
  archetypes: [Rank1, Abjuration],
  actions: [{ name: 'Cast Shield of Faith', action: ActionType.Bonus }],
})

export const Aid = Abilities.defineAbility('spell/aid', {
  name: 'Aid',
  description:
    '<p><strong>Abjuration</strong> · 30 feet · V, S, M (a strip of white cloth) · 8 hours</p><p>Up to three creatures you choose each increase their Hit Point maximum and current Hit Points by 5 for the duration.</p><p><strong>Higher Levels:</strong> +5 Hit Points per slot level above 2.</p>',
  archetypes: [Rank2, Abjuration],
  actions: [{ name: 'Cast Aid', action: ActionType.Standard }],
})

export const LesserRestoration = Abilities.defineAbility('spell/lesser-restoration', {
  name: 'Lesser Restoration',
  description:
    '<p><strong>Abjuration</strong> · Touch · V, S · Instantaneous</p><p>A creature you touch is no longer Blinded, Deafened, Paralyzed, or Poisoned; you choose one of these conditions to end.</p>',
  archetypes: [Rank2, Abjuration],
  actions: [{ name: 'Cast Lesser Restoration', action: ActionType.Bonus }],
})

export const PassWithoutTrace = Abilities.defineAbility('spell/pass-without-trace', {
  name: 'Pass without Trace',
  description:
    '<p><strong>Abjuration</strong> · Self · V, S, M (ashes from burned mistletoe) · Concentration, up to 1 hour</p><p>You radiate a concealing aura in a 30-foot Emanation. You and your allies in it have a +10 bonus to Dexterity (Stealth) checks and leave no tracks.</p>',
  archetypes: [Rank2, Abjuration],
  actions: [{ name: 'Cast Pass without Trace', action: ActionType.Standard }],
})

export const SpiritualWeapon = Abilities.defineAbility('spell/spiritual-weapon', {
  name: 'Spiritual Weapon',
  description:
    '<p><strong>Evocation</strong> · 60 feet · V, S · Concentration, up to 1 minute</p><p>Create a floating spectral weapon and make a melee spell attack against a creature within 5 feet of it, dealing 1d8 Force damage plus your spellcasting ability modifier on a hit. As a Bonus Action on later turns, you can move the weapon up to 20 feet and repeat the attack.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 2.</p>',
  archetypes: [Rank2, Evocation],
  actions: [{ name: 'Cast Spiritual Weapon', action: ActionType.Bonus }],
})

export const CrusadersMantle = Abilities.defineAbility('spell/crusaders-mantle', {
  name: "Crusader's Mantle",
  description:
    '<p><strong>Evocation</strong> · Self · V · Concentration, up to 1 minute</p><p>You radiate a holy aura in a 30-foot Emanation. While in it, you and your allies deal an extra 1d4 Radiant damage when hitting with a weapon or an Unarmed Strike.</p>',
  archetypes: [Rank3, Evocation],
  actions: [{ name: "Cast Crusader's Mantle", action: ActionType.Standard }],
})

export const Daylight = Abilities.defineAbility('spell/daylight', {
  name: 'Daylight',
  description:
    '<p><strong>Evocation</strong> · 60 feet · V, S · 1 hour</p><p>A 60-foot-radius Sphere of light spreads from a point or an object you choose: Bright Light, and Dim Light for another 60 feet. It dispels magical Darkness of level 3 or lower that it overlaps.</p>',
  archetypes: [Rank3, Evocation],
  actions: [{ name: 'Cast Daylight', action: ActionType.Standard }],
})

export const MassHealingWord = Abilities.defineAbility('spell/mass-healing-word', {
  name: 'Mass Healing Word',
  description:
    '<p><strong>Abjuration</strong> · 60 feet · V · Instantaneous</p><p>Up to six creatures of your choice that you can see regain Hit Points equal to 2d4 plus your spellcasting ability modifier.</p><p><strong>Higher Levels:</strong> +1d4 healing per slot level above 3.</p>',
  archetypes: [Rank3, Abjuration],
  actions: [{ name: 'Cast Mass Healing Word', action: ActionType.Bonus }],
})

export const Revivify = Abilities.defineAbility('spell/revivify', {
  name: 'Revivify',
  description:
    "<p><strong>Necromancy</strong> · Touch · V, S, M (a diamond worth 300+ GP, which the spell consumes) · Instantaneous</p><p>A creature that has died within the last minute returns to life with 1 Hit Point. The spell can't revive a creature that died of old age, and it doesn't restore missing body parts.</p>",
  archetypes: [Rank3, Necromancy],
  actions: [{ name: 'Cast Revivify', action: ActionType.Standard }],
})

export const SpiritGuardians = Abilities.defineAbility('spell/spirit-guardians', {
  name: 'Spirit Guardians',
  description:
    "<p><strong>Conjuration</strong> · Self · V, S, M (a prayer scroll) · Concentration, up to 10 minutes</p><p>Protective spirits flit around you in a 15-foot Emanation, and any creatures you designate are unaffected. Other creatures' Speed is halved there. Whenever the Emanation enters a creature's space, or a creature enters it or ends its turn there, the creature makes a Wisdom save, taking 3d8 Radiant damage (Necrotic if you're evil) on a failure or half on a success. A creature makes this save only once per turn.</p><p><strong>Higher Levels:</strong> +1d8 damage per slot level above 3.</p>",
  archetypes: [Rank3, Conjuration],
  actions: [{ name: 'Cast Spirit Guardians', action: ActionType.Standard }],
})

// Cantrips

export const AcidSplash = Abilities.defineAbility('spell/acid-splash', {
  name: 'Acid Splash',
  description:
    '<p><strong>Evocation</strong> · 60 feet · V, S · Instantaneous</p><p>Create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in it makes a Dexterity save, taking 1d6 Acid damage on a failure.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by 1d6 at levels 5, 11, and 17.</p>',
  archetypes: [Cantrip, Evocation],
  actions: [{ name: 'Cast Acid Splash', action: ActionType.Standard }],
})

export const BladeWard = Abilities.defineAbility('spell/blade-ward', {
  name: 'Blade Ward',
  description:
    '<p><strong>Abjuration</strong> · Self · V, S · Concentration, up to 1 minute</p><p>Whenever a creature makes an attack roll against you before the spell ends, the attacker subtracts 1d4 from the roll.</p>',
  archetypes: [Cantrip, Abjuration],
  actions: [{ name: 'Cast Blade Ward', action: ActionType.Standard }],
})

export const ChillTouch = Abilities.defineAbility('spell/chill-touch', {
  name: 'Chill Touch',
  description:
    "<p><strong>Necromancy</strong> · Touch · V, S · Instantaneous</p><p>Make a melee spell attack against a creature, dealing 1d10 Necrotic damage on a hit. The target can't regain Hit Points until the end of your next turn.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by 1d10 at levels 5, 11, and 17.</p>",
  archetypes: [Cantrip, Necromancy],
  actions: [{ name: 'Cast Chill Touch', action: ActionType.Standard }],
})

export const DancingLights = Abilities.defineAbility('spell/dancing-lights', {
  name: 'Dancing Lights',
  description:
    "<p><strong>Illusion</strong> · 120 feet · V, S, M (a bit of phosphorus) · Concentration, up to 1 minute</p><p>Create up to four torch-size lights, each shedding Dim Light in a 10-foot radius, or combine them into one glowing Medium form. As a Bonus Action, you can move them up to 60 feet, keeping each within 20 feet of another; a light winks out if it ends up beyond the spell's range.</p>",
  archetypes: [Cantrip, Illusion],
  actions: [{ name: 'Cast Dancing Lights', action: ActionType.Standard }],
})

export const Elementalism = Abilities.defineAbility('spell/elementalism', {
  name: 'Elementalism',
  description:
    '<p><strong>Transmutation</strong> · 30 feet · V, S · Instantaneous</p><p>Exert minor control over the elements: create a breeze, a thin cloud of dust or sand, a harmless burst of embers or smoke, or a spray of mist, or sculpt dirt, sand, fire, smoke, mist, or water into a crude shape for 1 hour.</p>',
  archetypes: [Cantrip, Transmutation],
  actions: [{ name: 'Cast Elementalism', action: ActionType.Standard }],
})

export const FireBolt = Abilities.defineAbility('spell/fire-bolt', {
  name: 'Fire Bolt',
  description:
    "<p><strong>Evocation</strong> · 120 feet · V, S · Instantaneous</p><p>Make a ranged spell attack against a creature or object, dealing 1d10 Fire damage on a hit. A flammable object hit by it starts burning if it isn't being worn or carried.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by 1d10 at levels 5, 11, and 17.</p>",
  archetypes: [Cantrip, Evocation],
  actions: [{ name: 'Cast Fire Bolt', action: ActionType.Standard }],
})

export const Light = Abilities.defineAbility('spell/light', {
  name: 'Light',
  description:
    '<p><strong>Evocation</strong> · Touch · V, M (a firefly or phosphorescent moss) · 1 hour</p><p>An object no larger than 10 feet sheds Bright Light in a 20-foot radius and Dim Light for another 20 feet, in a color you choose. Covering it blocks the light. If a hostile creature holds or wears the object, it can make a Dexterity save to avoid the spell.</p>',
  archetypes: [Cantrip, Evocation],
  actions: [{ name: 'Cast Light', action: ActionType.Standard }],
})

export const MageHand = Abilities.defineAbility('spell/mage-hand', {
  name: 'Mage Hand',
  description:
    "<p><strong>Conjuration</strong> · 30 feet · V, S · 1 minute</p><p>A spectral, floating hand appears. As a Magic action, you can use it to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour out a vial, and move it up to 30 feet. It can't attack, activate magic items, or carry more than 10 pounds.</p>",
  archetypes: [Cantrip, Conjuration],
  actions: [{ name: 'Cast Mage Hand', action: ActionType.Standard }],
})

export const Mending = Abilities.defineAbility('spell/mending', {
  name: 'Mending',
  description:
    "<p><strong>Transmutation</strong> · 1 minute · Touch · V, S, M (two lodestones) · Instantaneous</p><p>Repair a single break or tear in an object, such as a broken chain link or a torn cloak, as long as it's no larger than 1 foot in any dimension. It can repair a magic item, but can't restore its magic.</p>",
  archetypes: [Cantrip, Transmutation],
  actions: [{ name: 'Cast Mending', action: ActionType.Standard }],
})

export const Message = Abilities.defineAbility('spell/message', {
  name: 'Message',
  description:
    "<p><strong>Transmutation</strong> · 120 feet · S, M (a copper wire) · 1 round</p><p>Point toward a creature within range and whisper a message. Only the target hears it, and it can reply in a whisper that only you hear. The spell can pass through most solid objects if you're familiar with the target and know it's beyond the barrier.</p>",
  archetypes: [Cantrip, Transmutation],
  actions: [{ name: 'Cast Message', action: ActionType.Standard }],
})

export const MindSliver = Abilities.defineAbility('spell/mind-sliver', {
  name: 'Mind Sliver',
  description:
    "<p><strong>Enchantment</strong> · 60 feet · V · 1 round</p><p>Drive a spike of psionic energy into a creature's mind. It makes an Intelligence save, taking 1d6 Psychic damage on a failure and subtracting 1d4 from the next saving throw it makes before the end of your next turn.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by 1d6 at levels 5, 11, and 17.</p>",
  archetypes: [Cantrip, Enchantment],
  actions: [{ name: 'Cast Mind Sliver', action: ActionType.Standard }],
})

export const MinorIllusion = Abilities.defineAbility('spell/minor-illusion', {
  name: 'Minor Illusion',
  description:
    '<p><strong>Illusion</strong> · 30 feet · S, M (a bit of fleece) · 1 minute</p><p>Create a sound or an image of an object no larger than a 5-foot Cube. Physical interaction reveals an image to be an illusion, and a creature that takes the Study action can see through it with an Intelligence (Investigation) check against your spell save DC.</p>',
  archetypes: [Cantrip, Illusion],
  actions: [{ name: 'Cast Minor Illusion', action: ActionType.Standard }],
})

export const PoisonSpray = Abilities.defineAbility('spell/poison-spray', {
  name: 'Poison Spray',
  description:
    '<p><strong>Necromancy</strong> · 30 feet · V, S · Instantaneous</p><p>Spray toxic mist at a creature: make a ranged spell attack, dealing 1d12 Poison damage on a hit.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by 1d12 at levels 5, 11, and 17.</p>',
  archetypes: [Cantrip, Necromancy],
  actions: [{ name: 'Cast Poison Spray', action: ActionType.Standard }],
})

export const Prestidigitation = Abilities.defineAbility('spell/prestidigitation', {
  name: 'Prestidigitation',
  description:
    '<p><strong>Transmutation</strong> · 10 feet · V, S · Up to 1 hour</p><p>Create a minor magical trick: a harmless sensory effect, lighting or snuffing a small flame, cleaning or soiling a small object, chilling, warming, or flavoring food, a small mark or symbol, or a nonmagical trinket that lasts until your next turn. Up to three of its lasting effects can be active at once.</p>',
  archetypes: [Cantrip, Transmutation],
  actions: [{ name: 'Cast Prestidigitation', action: ActionType.Standard }],
})

export const RayOfFrost = Abilities.defineAbility('spell/ray-of-frost', {
  name: 'Ray of Frost',
  description:
    '<p><strong>Evocation</strong> · 60 feet · V, S · Instantaneous</p><p>Make a ranged spell attack against a creature, dealing 1d8 Cold damage on a hit and reducing its Speed by 10 feet until the start of your next turn.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by 1d8 at levels 5, 11, and 17.</p>',
  archetypes: [Cantrip, Evocation],
  actions: [{ name: 'Cast Ray of Frost', action: ActionType.Standard }],
})

export const ShockingGrasp = Abilities.defineAbility('spell/shocking-grasp', {
  name: 'Shocking Grasp',
  description:
    "<p><strong>Evocation</strong> · Touch · V, S · Instantaneous</p><p>Make a melee spell attack against a creature, dealing 1d8 Lightning damage on a hit. It can't make Opportunity Attacks until the start of its next turn.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by 1d8 at levels 5, 11, and 17.</p>",
  archetypes: [Cantrip, Evocation],
  actions: [{ name: 'Cast Shocking Grasp', action: ActionType.Standard }],
})

export const Thunderclap = Abilities.defineAbility('spell/thunderclap', {
  name: 'Thunderclap',
  description:
    '<p><strong>Evocation</strong> · Self · S · Instantaneous</p><p>Each creature in a 5-foot Emanation originating from you makes a Constitution save, taking 1d6 Thunder damage on a failure. The sound can be heard up to 100 feet away.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by 1d6 at levels 5, 11, and 17.</p>',
  archetypes: [Cantrip, Evocation],
  actions: [{ name: 'Cast Thunderclap', action: ActionType.Standard }],
})

export const TollTheDead = Abilities.defineAbility('spell/toll-the-dead', {
  name: 'Toll the Dead',
  description:
    "<p><strong>Necromancy</strong> · 60 feet · V, S · Instantaneous</p><p>The sound of a dolorous bell fills the air around a creature you can see. It makes a Wisdom save, taking 1d8 Necrotic damage on a failure, or 1d12 if it's missing any Hit Points.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by one die at levels 5, 11, and 17.</p>",
  archetypes: [Cantrip, Necromancy],
  actions: [{ name: 'Cast Toll the Dead', action: ActionType.Standard }],
})

export const TrueStrike = Abilities.defineAbility('spell/true-strike', {
  name: 'True Strike',
  description:
    "<p><strong>Divination</strong> · Self · S, M (a weapon you have proficiency with) · Instantaneous</p><p>Make one attack with the weapon used in the spell's casting, using your spellcasting ability for the attack and damage rolls instead of Strength or Dexterity. The damage can be Radiant or the weapon's normal damage type.</p><p><strong>Cantrip Upgrade:</strong> the attack deals an extra 1d6 Radiant damage at level 5, rising to 2d6 at level 11 and 3d6 at level 17.</p>",
  archetypes: [Cantrip, Divination],
  actions: [{ name: 'Cast True Strike', action: ActionType.Standard }],
})

export const Guidance = Abilities.defineAbility('spell/guidance', {
  name: 'Guidance',
  description:
    '<p><strong>Divination</strong> · Touch · V, S · Concentration, up to 1 minute</p><p>Choose a skill. One willing creature you touch can add 1d4 to any ability check it makes with that skill until the spell ends.</p>',
  archetypes: [Cantrip, Divination],
  actions: [{ name: 'Cast Guidance', action: ActionType.Standard }],
})

export const Resistance = Abilities.defineAbility('spell/resistance', {
  name: 'Resistance',
  description:
    '<p><strong>Abjuration</strong> · Touch · V, S · Concentration, up to 1 minute</p><p>Choose a damage type: Acid, Bludgeoning, Cold, Fire, Lightning, Necrotic, Piercing, Poison, Radiant, Slashing, or Thunder. Once per turn, when the willing creature you touched takes damage of that type, it reduces the damage by 1d4.</p>',
  archetypes: [Cantrip, Abjuration],
  actions: [{ name: 'Cast Resistance', action: ActionType.Standard }],
})

export const SacredFlame = Abilities.defineAbility('spell/sacred-flame', {
  name: 'Sacred Flame',
  description:
    '<p><strong>Evocation</strong> · 60 feet · V, S · Instantaneous</p><p>Flame-like radiance descends on a creature you can see. It makes a Dexterity save, taking 1d8 Radiant damage on a failure, and gains no benefit from Half Cover or Three-Quarters Cover for this save.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by 1d8 at levels 5, 11, and 17.</p>',
  archetypes: [Cantrip, Evocation],
  actions: [{ name: 'Cast Sacred Flame', action: ActionType.Standard }],
})

export const SpareTheDying = Abilities.defineAbility('spell/spare-the-dying', {
  name: 'Spare the Dying',
  description:
    "<p><strong>Necromancy</strong> · 15 feet · V, S · Instantaneous</p><p>Choose a creature within range that has 0 Hit Points and isn't dead. It becomes Stable.</p><p><strong>Cantrip Upgrade:</strong> the range doubles at levels 5, 11, and 17.</p>",
  archetypes: [Cantrip, Necromancy],
  actions: [{ name: 'Cast Spare the Dying', action: ActionType.Standard }],
})

export const Thaumaturgy = Abilities.defineAbility('spell/thaumaturgy', {
  name: 'Thaumaturgy',
  description:
    '<p><strong>Transmutation</strong> · 30 feet · V · Up to 1 minute</p><p>Create a minor wonder: your voice booms three times louder, flames flicker or change color, harmless tremors shake the ground, a sound echoes from a point you choose, an unlocked door or window flies open or slams shut, or your eyes change appearance. You can have up to three one-minute effects active at once.</p>',
  archetypes: [Cantrip, Transmutation],
  actions: [{ name: 'Cast Thaumaturgy', action: ActionType.Standard }],
})

export const WordOfRadiance = Abilities.defineAbility('spell/word-of-radiance', {
  name: 'Word of Radiance',
  description:
    '<p><strong>Evocation</strong> · Self · V, M (a sunburst token) · Instantaneous</p><p>Burning radiance erupts from you in a 5-foot Emanation. Each creature you choose that you can see in it makes a Constitution save, taking 1d6 Radiant damage on a failure.</p><p><strong>Cantrip Upgrade:</strong> the damage increases by 1d6 at levels 5, 11, and 17.</p>',
  archetypes: [Cantrip, Evocation],
  actions: [{ name: 'Cast Word of Radiance', action: ActionType.Standard }],
})
