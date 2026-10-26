import { Abilities, Tags, CharacterEffects } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-dnd5e/action-type'
import { Bard, Cleric, Wizard } from '@simulacrum/ruleset-dnd5e/tag'

export const Cantrip = Tags.defineAbilityTag('spell/cantrip', { name: 'Cantrip' })
export const Rank1 = Tags.defineAbilityTag('spell/rank-1', { name: 'Rank 1' })
export const Rank2 = Tags.defineAbilityTag('spell/rank-2', { name: 'Rank 2' })
export const Rank3 = Tags.defineAbilityTag('spell/rank-3', { name: 'Rank 3' })

export const Abjuration = Tags.defineAbilityTag('spell/abjuration', { name: 'Abjuration' })
export const Conjuration = Tags.defineAbilityTag('spell/conjuration', { name: 'Conjuration' })
export const Divination = Tags.defineAbilityTag('spell/divination', { name: 'Divination' })
export const Enchantment = Tags.defineAbilityTag('spell/enchantment', { name: 'Enchantment' })
export const Evocation = Tags.defineAbilityTag('spell/evocation', { name: 'Evocation' })
export const Illusion = Tags.defineAbilityTag('spell/illusion', { name: 'Illusion' })
export const Necromancy = Tags.defineAbilityTag('spell/necromancy', { name: 'Necromancy' })
export const Transmutation = Tags.defineAbilityTag('spell/transmutation', { name: 'Transmutation' })

export const Alarm = Abilities.defineAbility('spell/alarm', {
  name: 'Alarm',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · 1 minute or Ritual · 30 feet · V, S, M (a bell and silver wire) · 8 hours\n\nWard a door, window, or area up to a 20-foot Cube. Whenever a creature you didn't exempt touches or enters it, you're warned, either by a handbell sound heard within 60 feet or by a mental ping that reaches you within 1 mile (and wakes you if you're asleep)."
    ),
  ],
  tags: [Rank1, Abjuration, Wizard],
  actions: [{ name: 'Cast Alarm', action: ActionTypes.Action }],
})

export const BurningHands = Abilities.defineAbility('spell/burning-hands', {
  name: 'Burning Hands',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · Self · V, S · Instantaneous\n\nFlames fan out in a 15-foot Cone. Creatures there make a Dexterity save, taking 3d6 Fire damage on a failure or half on a success, and unattended flammable objects catch fire.\n\n**Higher Levels:** +1d6 damage per slot level above 1.'
    ),
  ],
  tags: [Rank1, Evocation, Wizard],
  actions: [{ name: 'Cast Burning Hands', action: ActionTypes.Action }],
})

export const CharmPerson = Abilities.defineAbility('spell/charm-person', {
  name: 'Charm Person',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Enchantment** · 30 feet · V, S · 1 hour\n\nA Humanoid you can see makes a Wisdom save (with Advantage if you or your allies are fighting it). On a failure it's Charmed by you and treats you as Friendly until the spell ends or it's harmed by you or your allies. It knows it was charmed once the spell ends.\n\n**Higher Levels:** one extra target per slot level above 1."
    ),
  ],
  tags: [Rank1, Enchantment, Wizard, Bard],
  actions: [{ name: 'Cast Charm Person', action: ActionTypes.Action }],
})

export const ChromaticOrb = Abilities.defineAbility('spell/chromatic-orb', {
  name: 'Chromatic Orb',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 90 feet · V, S, M (a diamond worth 50+ GP) · Instantaneous\n\nMake a ranged spell attack with an orb of Acid, Cold, Fire, Lightning, Poison, or Thunder energy, dealing 3d8 damage of that type on a hit. If two or more damage dice match, the orb jumps to a new target within 30 feet for another attack.\n\n**Higher Levels:** +1d8 damage per slot level above 1, and the orb can jump up to once per slot level (never hitting the same creature twice).'
    ),
  ],
  tags: [Rank1, Evocation, Wizard],
  actions: [{ name: 'Cast Chromatic Orb', action: ActionTypes.Action }],
})

export const ColorSpray = Abilities.defineAbility('spell/color-spray', {
  name: 'Color Spray',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Illusion** · Self · V, S, M (a pinch of colorful sand) · Instantaneous\n\nA burst of flashing colors fills a 15-foot Cone. Each creature in it must pass a Constitution save or be Blinded until the end of your next turn.'
    ),
  ],
  tags: [Rank1, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Color Spray', action: ActionTypes.Action }],
})

export const ComprehendLanguages = Abilities.defineAbility('spell/comprehend-languages', {
  name: 'Comprehend Languages',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · Action or Ritual · Self · V, S, M (a pinch of soot and salt) · 1 hour\n\nYou understand the literal meaning of any spoken or signed language, and can read any written language you touch (about a page per minute). Codes and secret messages stay hidden.'
    ),
  ],
  tags: [Rank1, Divination, Wizard, Bard],
  actions: [{ name: 'Cast Comprehend Languages', action: ActionTypes.Action }],
})

export const DetectMagic = Abilities.defineAbility('spell/detect-magic', {
  name: 'Detect Magic',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · Action or Ritual · Self · V, S · Concentration, up to 10 minutes\n\nYou sense magic within 30 feet. As a Magic action you can see an aura around magical creatures or objects in view and learn the school of any spell involved. Thick stone, dirt, wood, metal, or a sheet of lead blocks it.'
    ),
  ],
  tags: [Rank1, Divination, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Detect Magic', action: ActionTypes.Action }],
})

export const DisguiseSelf = Abilities.defineAbility('spell/disguise-self', {
  name: 'Disguise Self',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Illusion** · Self · V, S · 1 hour\n\nYou change how you and your gear look, including up to a foot of height and your build, as long as you keep the same basic body shape. The illusion doesn't survive touch, and a creature that Studies you can see through it with an Intelligence (Investigation) check against your spell save DC."
    ),
  ],
  tags: [Rank1, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Disguise Self', action: ActionTypes.Action }],
})

export const ExpeditiousRetreat = Abilities.defineAbility('spell/expeditious-retreat', {
  name: 'Expeditious Retreat',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Self · V, S · Concentration, up to 10 minutes\n\nYou Dash immediately, and for the duration you can Dash again as a Bonus Action.'
    ),
  ],
  tags: [Rank1, Transmutation, Wizard],
  actions: [{ name: 'Cast Expeditious Retreat', action: ActionTypes.BonusAction }],
})

export const FalseLife = Abilities.defineAbility('spell/false-life', {
  name: 'False Life',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Necromancy** · Self · V, S, M (a drop of alcohol) · Instantaneous\n\nYou gain 2d4 + 4 Temporary Hit Points.\n\n**Higher Levels:** +5 Temporary Hit Points per slot level above 1.'
    ),
  ],
  tags: [Rank1, Necromancy, Wizard],
  actions: [{ name: 'Cast False Life', action: ActionTypes.Action }],
})

export const FeatherFall = Abilities.defineAbility('spell/feather-fall', {
  name: 'Feather Fall',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Reaction, which you take when you or a creature you can see within 60 feet of you falls · 60 feet · V, M (a small feather or piece of down) · 1 minute\n\nUp to five falling creatures in range descend at only 60 feet per round and take no falling damage if they land while the spell lasts.'
    ),
  ],
  tags: [Rank1, Transmutation, Wizard, Bard],
  actions: [{ name: 'Cast Feather Fall', action: ActionTypes.Reaction }],
})

export const FindFamiliar = Abilities.defineAbility('spell/find-familiar', {
  name: 'Find Familiar',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Conjuration** · 1 hour or Ritual · 10 feet · V, S, M (burning incense worth 10+ GP, which the spell consumes) · Instantaneous\n\nA spirit serves you as a familiar in the form of a tiny animal (a Beast of Challenge Rating 0), but it counts as a Celestial, Fey, or Fiend. It obeys you but can't attack. Within 100 feet you can speak with it telepathically, borrow its senses as a Bonus Action, and have it deliver your touch spells with its Reaction.\n\nAt 0 Hit Points it vanishes until you cast the spell again. You can dismiss it to a pocket dimension and recall it, and you can only have one familiar at a time."
    ),
  ],
  tags: [Rank1, Conjuration, Wizard],
  actions: [{ name: 'Cast Find Familiar', action: ActionTypes.Action }],
})

export const FogCloud = Abilities.defineAbility('spell/fog-cloud', {
  name: 'Fog Cloud',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Conjuration** · 120 feet · V, S · Concentration, up to 1 hour\n\nA 20-foot-radius Sphere of fog makes its area Heavily Obscured until the spell ends or a strong wind scatters it.\n\n**Higher Levels:** radius +20 feet per slot level above 1.'
    ),
  ],
  tags: [Rank1, Conjuration, Wizard],
  actions: [{ name: 'Cast Fog Cloud', action: ActionTypes.Action }],
})

export const Grease = Abilities.defineAbility('spell/grease', {
  name: 'Grease',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Conjuration** · 60 feet · V, S, M (a bit of pork rind or butter) · 1 minute\n\nSlick grease makes a 10-foot square Difficult Terrain. Creatures standing there when it appears, entering it, or ending their turn in it must pass a Dexterity save or fall Prone.'
    ),
  ],
  tags: [Rank1, Conjuration, Wizard],
  actions: [{ name: 'Cast Grease', action: ActionTypes.Action }],
})

export const IceKnife = Abilities.defineAbility('spell/ice-knife', {
  name: 'Ice Knife',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Conjuration** · 60 feet · S, M (a drop of water or a piece of ice) · Instantaneous\n\nMake a ranged spell attack with a shard of ice for 1d10 Piercing damage on a hit. Hit or miss, it shatters, and the target and everything within 5 feet of it must pass a Dexterity save or take 2d6 Cold damage.\n\n**Higher Levels:** +1d6 Cold damage per slot level above 1.'
    ),
  ],
  tags: [Rank1, Conjuration, Wizard],
  actions: [{ name: 'Cast Ice Knife', action: ActionTypes.Action }],
})

export const Identify = Abilities.defineAbility('spell/identify', {
  name: 'Identify',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · 1 minute or Ritual · Touch · V, S, M (a pearl worth 100+ GP) · Instantaneous\n\nTouch an object while casting to learn its magical properties, how to use it, whether it needs Attunement, its charges, and any spells affecting or creating it. Touching a creature instead reveals the spells currently affecting it.'
    ),
  ],
  tags: [Rank1, Divination, Wizard, Bard],
  actions: [{ name: 'Cast Identify', action: ActionTypes.Action }],
})

export const IllusoryScript = Abilities.defineAbility('spell/illusory-script', {
  name: 'Illusory Script',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Illusion** · 1 minute or Ritual · Touch · S, M (ink worth 10+ GP, which the spell consumes) · 10 days\n\nYou write a message that only you and creatures you choose can read. To everyone else it looks like unreadable magical script, or you can make it look like a different message in a language you know. Truesight reveals the real text, and dispelling the spell erases both.'
    ),
  ],
  tags: [Rank1, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Illusory Script', action: ActionTypes.Action }],
})

export const Jump = Abilities.defineAbility('spell/jump', {
  name: 'Jump',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Touch · V, S, M (a grasshopper’s hind leg) · 1 minute\n\nA willing creature you touch can, once on each of its turns, spend 10 feet of movement to leap up to 30 feet.\n\n**Higher Levels:** one extra target per slot level above 1.'
    ),
  ],
  tags: [Rank1, Transmutation, Wizard],
  actions: [{ name: 'Cast Jump', action: ActionTypes.BonusAction }],
})

export const Longstrider = Abilities.defineAbility('spell/longstrider', {
  name: 'Longstrider',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Touch · V, S, M (a pinch of dirt) · 1 hour\n\nA creature you touch gains +10 feet of Speed.\n\n**Higher Levels:** one extra target per slot level above 1.'
    ),
  ],
  tags: [Rank1, Transmutation, Wizard, Bard],
  actions: [{ name: 'Cast Longstrider', action: ActionTypes.Action }],
})

export const MageArmor = Abilities.defineAbility('spell/mage-armor', {
  name: 'Mage Armor',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · Touch · V, S, M (a piece of cured leather) · 8 hours\n\nA willing creature you touch that isn't wearing armor has a base AC of 13 + its Dexterity modifier. The spell ends if it puts on armor."
    ),
  ],
  tags: [Rank1, Abjuration, Wizard],
  actions: [{ name: 'Cast Mage Armor', action: ActionTypes.Action }],
})

export const MagicMissile = Abilities.defineAbility('spell/magic-missile', {
  name: 'Magic Missile',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 120 feet · V, S · Instantaneous\n\nThree darts of force each automatically hit a creature you can see in range for 1d4 + 1 Force damage. You can split them between targets or focus them on one.\n\n**Higher Levels:** one extra dart per slot level above 1.'
    ),
  ],
  tags: [Rank1, Evocation, Wizard],
  actions: [{ name: 'Cast Magic Missile', action: ActionTypes.Action }],
})

export const ProtectionFromEvilAndGood = Abilities.defineAbility('spell/protection-from-evil-and-good', {
  name: 'Protection from Evil and Good',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · Touch · V, S, M (a flask of Holy Water worth 25+ GP, which the spell consumes) · Concentration up to 10 minutes\n\nA willing creature you touch is shielded from Aberrations, Celestials, Elementals, Fey, Fiends, and Undead. Such creatures have Disadvantage on attacks against it, and can't possess, Charm, or Frighten it. If it's already affected, it gets Advantage on new saves against the effect."
    ),
  ],
  tags: [Rank1, Abjuration, Cleric, Wizard],
  actions: [{ name: 'Cast Protection from Evil and Good', action: ActionTypes.Action }],
})

export const RayOfSickness = Abilities.defineAbility('spell/ray-of-sickness', {
  name: 'Ray of Sickness',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Necromancy** · 60 feet · V, S · Instantaneous\n\nMake a ranged spell attack with a sickly green ray. On a hit, the target takes 2d8 Poison damage and is Poisoned until the end of your next turn.\n\n**Higher Levels:** +1d8 damage per slot level above 1.'
    ),
  ],
  tags: [Rank1, Necromancy, Wizard],
  actions: [{ name: 'Cast Ray of Sickness', action: ActionTypes.Action }],
})

export const Shield = Abilities.defineAbility('spell/shield', {
  name: 'Shield',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · Reaction, which you take when you are hit by an attack roll or targeted by the Magic Missile spell · Self · V, S · 1 round\n\nAs a Reaction when you're hit or targeted by Magic Missile, you gain +5 AC (including against the triggering attack) and ignore Magic Missile until the start of your next turn."
    ),
  ],
  tags: [Rank1, Abjuration, Wizard],
  actions: [{ name: 'Cast Shield', action: ActionTypes.Reaction }],
})

export const SilentImage = Abilities.defineAbility('spell/silent-image', {
  name: 'Silent Image',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Illusion** · 60 feet · V, S, M (a bit of fleece) · Concentration, up to 10 minutes\n\nYou create a soundless visual illusion up to a 15-foot Cube, which you can move and animate as a Magic action. Things pass through it, and a creature that Studies it can see through it with an Intelligence (Investigation) check against your spell save DC.'
    ),
  ],
  tags: [Rank1, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Silent Image', action: ActionTypes.Action }],
})

export const Sleep = Abilities.defineAbility('spell/sleep', {
  name: 'Sleep',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Enchantment** · 60 feet · V, S, M (a pinch of sand or rose petals) · Concentration, up to 1 minute\n\nCreatures you choose in a 5-foot-radius Sphere must pass a Wisdom save or be Incapacitated until the end of their next turn. Those that then fail a second save fall Unconscious for the duration, until they take damage or someone nearby uses an action to wake them. Creatures that don't sleep or are immune to Exhaustion are unaffected."
    ),
  ],
  tags: [Rank1, Enchantment, Wizard, Bard],
  actions: [{ name: 'Cast Sleep', action: ActionTypes.Action }],
})

export const TashasHideousLaughter = Abilities.defineAbility('spell/tashas-hideous-laughter', {
  name: "Tasha's Hideous Laughter",
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Enchantment** · 30 feet · V, S, M (a tart and a feather) · Concentration, up to 1 minute\n\nA creature you can see must pass a Wisdom save or collapse with laughter, becoming Prone and Incapacitated, unable to stand up. It repeats the save at the end of each of its turns and whenever it takes damage (with Advantage), ending the spell on a success.\n\n**Higher Levels:** one extra target per slot level above 1.'
    ),
  ],
  tags: [Rank1, Enchantment, Wizard, Bard],
  actions: [{ name: "Cast Tasha's Hideous Laughter", action: ActionTypes.Action }],
})

export const TensersFloatingDisk = Abilities.defineAbility('spell/tensers-floating-disk', {
  name: "Tenser's Floating Disk",
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Conjuration** · Action or Ritual · 30 feet · V, S, M (a drop of mercury) · 1 hour\n\nA 3-foot disk of force floats at waist height and carries up to 500 pounds. It follows to stay within 20 feet of you but can't climb or drop 10 feet or more. The spell ends if it's overloaded or you get more than 100 feet away."
    ),
  ],
  tags: [Rank1, Conjuration, Wizard],
  actions: [{ name: "Cast Tenser's Floating Disk", action: ActionTypes.Action }],
})

export const Thunderwave = Abilities.defineAbility('spell/thunderwave', {
  name: 'Thunderwave',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Evocation** · Self · V, S · Instantaneous\n\nA thunderous wave fills a 15-foot Cube from you. Creatures there make a Constitution save: on a failure they take 2d8 Thunder damage and are pushed 10 feet away, and on a success they take half and aren't pushed. Loose objects are pushed too, and the boom can be heard 300 feet away.\n\n**Higher Levels:** +1d8 damage per slot level above 1."
    ),
  ],
  tags: [Rank1, Evocation, Wizard, Bard],
  actions: [{ name: 'Cast Thunderwave', action: ActionTypes.Action }],
})

export const UnseenServant = Abilities.defineAbility('spell/unseen-servant', {
  name: 'Unseen Servant',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Conjuration** · Action or Ritual · 60 feet · V, S, M (a bit of string and of wood) · 1 hour\n\nAn Invisible, mindless force (AC 10, 1 HP, Strength 2) does simple chores for you, like fetching, cleaning, or serving. As a Bonus Action, you can order it to move up to 15 feet and interact with an object. It can't attack, and the spell ends if it drops to 0 HP or goes more than 60 feet from you."
    ),
  ],
  tags: [Rank1, Conjuration, Wizard, Bard],
  actions: [{ name: 'Cast Unseen Servant', action: ActionTypes.Action }],
})

export const WitchBolt = Abilities.defineAbility('spell/witch-bolt', {
  name: 'Witch Bolt',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 60 feet · V, S, M (a twig struck by lightning) · Concentration, up to 1 minute\n\nMake a ranged spell attack with a crackling arc of lightning, dealing 2d12 Lightning damage on a hit. On later turns, as a Bonus Action, you can deal 1d12 Lightning damage to the target automatically, even if you missed at first. The spell ends if the target leaves range or gets Total Cover.\n\n**Higher Levels:** +1d12 initial damage per slot level above 1.'
    ),
  ],
  tags: [Rank1, Evocation, Wizard],
  actions: [{ name: 'Cast Witch Bolt', action: ActionTypes.Action }],
})

export const AlterSelf = Abilities.defineAbility('spell/alter-self', {
  name: 'Alter Self',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Self · V, S · Concentration, up to 1 hour\n\nYou reshape your body in one of three ways, and can switch as a Magic action: **Aquatic Adaptation** (breathe water and gain a Swim Speed), **Change Appearance** (look like anyone of your size and shape), or **Natural Weapons** (claws, fangs, horns, or hooves that make your Unarmed Strikes deal 1d6 damage using your spellcasting ability).'
    ),
  ],
  tags: [Rank2, Transmutation, Wizard],
  actions: [{ name: 'Cast Alter Self', action: ActionTypes.Action }],
})

export const ArcaneLock = Abilities.defineAbility('spell/arcane-lock', {
  name: 'Arcane Lock',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · Touch · V, S, M (gold dust worth 25+ GP, which the spell consumes) · Until dispelled\n\nA closed door, window, gate, container, or hatch you touch is magically locked and can't be opened by nonmagical means. You and creatures you choose can still use it, and you can set a password that unlocks it for 1 minute."
    ),
  ],
  tags: [Rank2, Abjuration, Wizard],
  actions: [{ name: 'Cast Arcane Lock', action: ActionTypes.Action }],
})

export const ArcaneVigor = Abilities.defineAbility('spell/arcane-vigor', {
  name: 'Arcane Vigor',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · Self · V, S · Instantaneous\n\nRoll one or two of your unspent Hit Point Dice and regain that many Hit Points plus your spellcasting ability modifier. The dice are then spent.\n\n**Higher Levels:** one extra die per slot level above 2.'
    ),
  ],
  tags: [Rank2, Abjuration, Wizard],
  actions: [{ name: 'Cast Arcane Vigor', action: ActionTypes.BonusAction }],
})

export const Augury = Abilities.defineAbility('spell/augury', {
  name: 'Augury',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Divination** · 1 minute or Ritual · Self · V, S, M (specially marked sticks, bones, cards, or other divinatory tokens worth 25+ GP) · Instantaneous\n\nAsk about a course of action you plan to take in the next 30 minutes and receive an omen: weal (good), woe (bad), weal and woe (both), or indifference (neither). It doesn't foresee outside changes. Each extra casting before a Long Rest has a cumulative 25 percent chance of getting no answer."
    ),
  ],
  tags: [Rank2, Divination, Cleric, Wizard],
  actions: [{ name: 'Cast Augury', action: ActionTypes.Action }],
})

export const BlindnessDeafness = Abilities.defineAbility('spell/blindness-deafness', {
  name: 'Blindness/Deafness',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · 120 feet · V · 1 minute\n\nA creature you can see must pass a Constitution save or be Blinded or Deafened (your choice). It repeats the save at the end of each of its turns, ending the effect on a success.\n\n**Higher Levels:** one extra target per slot level above 2.'
    ),
  ],
  tags: [Rank2, Transmutation, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Blindness/Deafness', action: ActionTypes.Action }],
})

export const Blur = Abilities.defineAbility('spell/blur', {
  name: 'Blur',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Illusion** · Self · V · Concentration, up to 1 minute\n\nYour form shimmers, and attacks against you have Disadvantage, unless the attacker perceives you with Blindsight or Truesight.'
    ),
  ],
  tags: [Rank2, Illusion, Wizard],
  actions: [{ name: 'Cast Blur', action: ActionTypes.Action }],
})

export const CloudOfDaggers = Abilities.defineAbility('spell/cloud-of-daggers', {
  name: 'Cloud of Daggers',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Conjuration** · 60 feet · V, S, M (a sliver of glass) · Concentration, up to 1 minute\n\nWhirling blades fill a 5-foot Cube, dealing 4d4 Slashing damage to creatures in it, entering it, ending a turn there, or caught when it moves (once per turn). On later turns, you can teleport it up to 30 feet as a Magic action.\n\n**Higher Levels:** +2d4 damage per slot level above 2.'
    ),
  ],
  tags: [Rank2, Conjuration, Wizard, Bard],
  actions: [{ name: 'Cast Cloud of Daggers', action: ActionTypes.Action }],
})

export const ContinualFlame = Abilities.defineAbility('spell/continual-flame', {
  name: 'Continual Flame',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · Touch · V, S, M (ruby dust worth 50+ GP, which the spell consumes) · Until dispelled\n\nAn object you touch bursts into a heatless, fuelless flame that sheds Bright Light for 20 feet and Dim Light for 20 more. It can be covered but never put out.'
    ),
  ],
  tags: [Rank2, Evocation, Cleric, Wizard],
  actions: [{ name: 'Cast Continual Flame', action: ActionTypes.Action }],
})

export const CrownOfMadness = Abilities.defineAbility('spell/crown-of-madness', {
  name: 'Crown of Madness',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Enchantment** · 120 feet · V, S · Concentration, up to 1 minute\n\nA Humanoid you can see must pass a Wisdom save or be Charmed. Each turn, before moving, it must use its action to make a melee attack against a creature you mentally pick (other than itself), if one is in reach. It repeats the save at the end of each of its turns, and you must use a Magic action each turn to keep control.'
    ),
  ],
  tags: [Rank2, Enchantment, Wizard, Bard],
  actions: [{ name: 'Cast Crown of Madness', action: ActionTypes.Action }],
})

export const Darkness = Abilities.defineAbility('spell/darkness', {
  name: 'Darkness',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Evocation** · 60 feet · V, M (bat fur and a piece of coal) · Concentration, up to 10 minutes\n\nMagical Darkness fills a 15-foot-radius Sphere, or a 15-foot Emanation from an unattended object (which you can cover to block it). Darkvision and nonmagical light can't pierce it, and it dispels overlapping light from spells of level 2 or lower."
    ),
  ],
  tags: [Rank2, Evocation, Wizard],
  actions: [{ name: 'Cast Darkness', action: ActionTypes.Action }],
})

export const Darkvision = Abilities.defineAbility('spell/darkvision', {
  name: 'Darkvision',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Touch · V, S, M (a dried carrot) · 8 hours\n\nA willing creature you touch gains Darkvision out to 150 feet.'
    ),
  ],
  tags: [Rank2, Transmutation, Wizard],
  actions: [{ name: 'Cast Darkvision', action: ActionTypes.Action }],
})

export const DetectThoughts = Abilities.defineAbility('spell/detect-thoughts', {
  name: 'Detect Thoughts',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Divination** · Self · V, S, M (1 Copper Piece) · Concentration, up to 1 minute\n\n**Sense Thoughts:** detect thinking creatures within 30 feet (blocked by thick materials or lead). **Read Thoughts:** learn a creature's surface thoughts. On your next turn, you can probe deeper (Wisdom save) to learn its reasoning, emotions, and preoccupations. The target knows it's being probed and can try to push you out with an Intelligence (Arcana) check."
    ),
  ],
  tags: [Rank2, Divination, Wizard, Bard],
  actions: [{ name: 'Cast Detect Thoughts', action: ActionTypes.Action }],
})

export const DragonsBreath = Abilities.defineAbility('spell/dragons-breath', {
  name: "Dragon's Breath",
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Touch · V, S, M (a hot pepper) · Concentration, up to 1 minute\n\nA willing creature you touch can, as a Magic action, exhale a 15-foot Cone of Acid, Cold, Fire, Lightning, or Poison (your choice when casting). Creatures in it make a Dexterity save, taking 3d6 damage on a failure or half on a success.\n\n**Higher Levels:** +1d6 damage per slot level above 2.'
    ),
  ],
  tags: [Rank2, Transmutation, Wizard],
  actions: [{ name: "Cast Dragon's Breath", action: ActionTypes.BonusAction }],
})

export const EnhanceAbility = Abilities.defineAbility('spell/enhance-ability', {
  name: 'Enhance Ability',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Touch · V, S, M (fur or a feather) · Concentration, up to 1 hour\n\nA creature you touch has Advantage on ability checks with one ability of your choice (Strength, Dexterity, Intelligence, Wisdom, or Charisma).\n\n**Higher Levels:** one extra target per slot level above 2, each with its own ability.'
    ),
  ],
  tags: [Rank2, Transmutation, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Enhance Ability', action: ActionTypes.Action }],
})

export const EnlargeReduce = Abilities.defineAbility('spell/enlarge-reduce', {
  name: 'Enlarge/Reduce',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · 30 feet · V, S, M (a pinch of powdered iron) · Concentration, up to 1 minute\n\nA creature or unattended object you can see grows or shrinks by one size category, along with its gear (an unwilling creature can make a Constitution save). **Enlarge** gives Advantage on Strength checks and saves and +1d4 weapon and Unarmed Strike damage. **Reduce** gives Disadvantage on them and −1d4 damage (minimum 1).'
    ),
  ],
  tags: [Rank2, Transmutation, Wizard, Bard],
  actions: [{ name: 'Cast Enlarge/Reduce', action: ActionTypes.Action }],
})

export const FlamingSphere = Abilities.defineAbility('spell/flaming-sphere', {
  name: 'Flaming Sphere',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Conjuration** · 60 feet · V, S, M (a ball of wax) · Concentration, up to 1 minute\n\nA 5-foot ball of fire sits on the ground and sheds light. Creatures ending their turn within 5 feet of it make a Dexterity save, taking 2d6 Fire damage on a failure or half on a success. As a Bonus Action you can roll it up to 30 feet, and ramming a creature forces the save and stops it.\n\n**Higher Levels:** +1d6 damage per slot level above 2.'
    ),
  ],
  tags: [Rank2, Conjuration, Wizard],
  actions: [{ name: 'Cast Flaming Sphere', action: ActionTypes.Action }],
})

export const GentleRepose = Abilities.defineAbility('spell/gentle-repose', {
  name: 'Gentle Repose',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Necromancy** · Action or Ritual · Touch · V, S, M (2 Copper Pieces, which the spell consumes) · 10 days\n\nRemains you touch don't decay and can't become Undead, and the time doesn't count against the limit for raising them from the dead."
    ),
  ],
  tags: [Rank2, Necromancy, Cleric, Wizard],
  actions: [{ name: 'Cast Gentle Repose', action: ActionTypes.Action }],
})

export const GustOfWind = Abilities.defineAbility('spell/gust-of-wind', {
  name: 'Gust of Wind',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · Self · V, S, M (a legume seed) · Concentration, up to 1 minute\n\nA 60-foot by 10-foot Line of wind blasts from you. Creatures in it must pass a Strength save or be pushed 15 feet away, and moving toward you costs double. It scatters gas and snuffs out unprotected flames, and you can redirect it as a Bonus Action.'
    ),
  ],
  tags: [Rank2, Evocation, Wizard],
  actions: [{ name: 'Cast Gust of Wind', action: ActionTypes.Action }],
})

export const HoldPerson = Abilities.defineAbility('spell/hold-person', {
  name: 'Hold Person',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Enchantment** · 60 feet · V, S, M (a straight piece of iron) · Concentration, up to 1 minute\n\nA Humanoid you can see must pass a Wisdom save or be Paralyzed. It repeats the save at the end of each of its turns, ending the effect on a success.\n\n**Higher Levels:** one extra Humanoid per slot level above 2.'
    ),
  ],
  tags: [Rank2, Enchantment, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Hold Person', action: ActionTypes.Action }],
})

export const Invisibility = Abilities.defineAbility('spell/invisibility', {
  name: 'Invisibility',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Illusion** · Touch · V, S, M (an eyelash in gum arabic) · Concentration, up to 1 hour\n\nA creature you touch is Invisible until it attacks, deals damage, or casts a spell.\n\n**Higher Levels:** one extra target per slot level above 2.'
    ),
  ],
  tags: [Rank2, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Invisibility', action: ActionTypes.Action }],
})

export const Knock = Abilities.defineAbility('spell/knock', {
  name: 'Knock',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Transmutation** · 60 feet · V · Instantaneous\n\nAn object you can see that's locked, stuck, or barred comes open (one lock at a time). Arcane Lock on it is suppressed for 10 minutes. The spell makes a loud knock heard up to 300 feet away."
    ),
  ],
  tags: [Rank2, Transmutation, Wizard, Bard],
  actions: [{ name: 'Cast Knock', action: ActionTypes.Action }],
})

export const Levitate = Abilities.defineAbility('spell/levitate', {
  name: 'Levitate',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · 60 feet · V, S, M (a metal spring) · Concentration, up to 10 minutes\n\nA creature or loose object (up to 500 pounds) rises up to 20 feet and hangs there. An unwilling creature can resist with a Constitution save. It can only move by pulling itself along surfaces, but you can raise or lower it 20 feet on your turn. It drifts gently down when the spell ends.'
    ),
  ],
  tags: [Rank2, Transmutation, Wizard],
  actions: [{ name: 'Cast Levitate', action: ActionTypes.Action }],
})

export const LocateObject = Abilities.defineAbility('spell/locate-object', {
  name: 'Locate Object',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Divination** · Self · V, S, M (a forked twig) · Concentration, up to 10 minutes\n\nYou sense the direction of a familiar object within 1,000 feet, or the nearest object of a named kind, and whether it's moving. You need to have seen a specific object up close before, and lead blocks the spell."
    ),
  ],
  tags: [Rank2, Divination, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Locate Object', action: ActionTypes.Action }],
})

export const MagicMouth = Abilities.defineAbility('spell/magic-mouth', {
  name: 'Magic Mouth',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Illusion** · 1 minute or Ritual · 30 feet · V, S, M (jade dust worth 10+ GP, which the spell consumes) · Until dispelled\n\nYou store a message of 25 words or fewer in an unattended object. A magical mouth speaks it in your voice when a trigger you set, based on sight or sound within 30 feet, occurs. It can speak once or every time the trigger happens.'
    ),
  ],
  tags: [Rank2, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Magic Mouth', action: ActionTypes.Action }],
})

export const MagicWeapon = Abilities.defineAbility('spell/magic-weapon', {
  name: 'Magic Weapon',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Touch · V, S · 1 hour\n\nA nonmagical weapon you touch becomes magical, with +1 to attack and damage rolls.\n\n**Higher Levels:** +2 with a level 3–5 slot, or +3 with a level 6+ slot.'
    ),
  ],
  tags: [Rank2, Transmutation, Wizard],
  actions: [{ name: 'Cast Magic Weapon', action: ActionTypes.BonusAction }],
})

export const MelfsAcidArrow = Abilities.defineAbility('spell/melfs-acid-arrow', {
  name: "Melf's Acid Arrow",
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 90 feet · V, S, M (powdered rhubarb leaf) · Instantaneous\n\nMake a ranged spell attack with an acid arrow. On a hit, the target takes 4d4 Acid damage now and 2d4 more at the end of its next turn. On a miss, it takes half the initial damage.\n\n**Higher Levels:** +1d4 to both the initial and later damage per slot level above 2.'
    ),
  ],
  tags: [Rank2, Evocation, Wizard],
  actions: [{ name: "Cast Melf's Acid Arrow", action: ActionTypes.Action }],
})

export const MindSpike = Abilities.defineAbility('spell/mind-spike', {
  name: 'Mind Spike',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Divination** · 120 feet · S · Concentration, up to 1 hour\n\nA creature you can see makes a Wisdom save, taking 3d8 Psychic damage on a failure or half on a success. On a failure, you also always know where it is on the same plane, so it can't hide from you and gains nothing from being Invisible against you.\n\n**Higher Levels:** +1d8 damage per slot level above 2."
    ),
  ],
  tags: [Rank2, Divination, Wizard],
  actions: [{ name: 'Cast Mind Spike', action: ActionTypes.Action }],
})

export const MirrorImage = Abilities.defineAbility('spell/mirror-image', {
  name: 'Mirror Image',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Illusion** · Self · V, S · 1 minute\n\nThree illusory copies of you appear. When an attack hits you, roll a d6 for each remaining copy. If any roll 3 or higher, a copy takes the hit and vanishes instead. Attackers that are Blinded or have Blindsight or Truesight aren't fooled."
    ),
  ],
  tags: [Rank2, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Mirror Image', action: ActionTypes.Action }],
})

export const MistyStep = Abilities.defineAbility('spell/misty-step', {
  name: 'Misty Step',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Conjuration** · Self · V · Instantaneous\n\nAs a Bonus Action, you teleport up to 30 feet to an unoccupied space you can see.'
    ),
  ],
  tags: [Rank2, Conjuration, Wizard],
  actions: [{ name: 'Cast Misty Step', action: ActionTypes.BonusAction }],
})

export const NystulsMagicAura = Abilities.defineAbility('spell/nystuls-magic-aura', {
  name: "Nystul's Magic Aura",
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Illusion** · Touch · V, S, M (a small square of silk) · 24 hours\n\nA willing creature you touch appears to magic as a different creature type (**Mask**), or an unattended object's magical aura is falsified (**False Aura**): it seems magical or not, or of another school. Cast it daily for 30 days to make it last until dispelled."
    ),
  ],
  tags: [Rank2, Illusion, Wizard],
  actions: [{ name: "Cast Nystul's Magic Aura", action: ActionTypes.Action }],
})

export const PhantasmalForce = Abilities.defineAbility('spell/phantasmal-force', {
  name: 'Phantasmal Force',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Illusion** · 60 feet · V, S, M (a bit of fleece) · Concentration, up to 1 minute\n\nA creature you can see must pass an Intelligence save or perceive a lifelike illusion, up to a 10-foot Cube, that only it can sense. It explains away any inconsistencies. A dangerous phantasm can deal 2d8 Psychic damage to it each turn. The target can Study the illusion and see through it with an Intelligence (Investigation) check.'
    ),
  ],
  tags: [Rank2, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Phantasmal Force', action: ActionTypes.Action }],
})

export const RayOfEnfeeblement = Abilities.defineAbility('spell/ray-of-enfeeblement', {
  name: 'Ray of Enfeeblement',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Necromancy** · 60 feet · V, S · Concentration, up to 1 minute\n\nA creature makes a Constitution save. On a failure it has Disadvantage on Strength-based D20 Tests and subtracts 1d8 from its damage rolls, repeating the save each turn to end it. On a success, it just has Disadvantage on its next attack roll.'
    ),
  ],
  tags: [Rank2, Necromancy, Wizard],
  actions: [{ name: 'Cast Ray of Enfeeblement', action: ActionTypes.Action }],
})

export const RopeTrick = Abilities.defineAbility('spell/rope-trick', {
  name: 'Rope Trick',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Touch · V, S, M (a segment of rope) · 1 hour\n\nA rope you touch rises to an Invisible portal leading to an extradimensional room that holds up to eight Medium creatures. Nothing can pass in or out except by climbing the rope, which can be pulled up after you, but those inside can see out.'
    ),
  ],
  tags: [Rank2, Transmutation, Wizard],
  actions: [{ name: 'Cast Rope Trick', action: ActionTypes.Action }],
})

export const ScorchingRay = Abilities.defineAbility('spell/scorching-ray', {
  name: 'Scorching Ray',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 120 feet · V, S · Instantaneous\n\nFire three rays at one or more targets, making a ranged spell attack for each. Each hit deals 2d6 Fire damage.\n\n**Higher Levels:** one extra ray per slot level above 2.'
    ),
  ],
  tags: [Rank2, Evocation, Wizard],
  actions: [{ name: 'Cast Scorching Ray', action: ActionTypes.Action }],
})

export const SeeInvisibility = Abilities.defineAbility('spell/see-invisibility', {
  name: 'See Invisibility',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · Self · V, S, M (a pinch of talc) · 1 hour\n\nYou can see Invisible creatures and objects, and see into the Ethereal Plane.'
    ),
  ],
  tags: [Rank2, Divination, Wizard, Bard],
  actions: [{ name: 'Cast See Invisibility', action: ActionTypes.Action }],
})

export const Shatter = Abilities.defineAbility('spell/shatter', {
  name: 'Shatter',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 60 feet · V, S, M (a chip of mica) · Instantaneous\n\nA thunderous crack hits a 10-foot-radius Sphere. Creatures there make a Constitution save (Constructs with Disadvantage), taking 3d8 Thunder damage on a failure or half on a success. Unattended objects are damaged too.\n\n**Higher Levels:** +1d8 damage per slot level above 2.'
    ),
  ],
  tags: [Rank2, Evocation, Wizard, Bard],
  actions: [{ name: 'Cast Shatter', action: ActionTypes.Action }],
})

export const SpiderClimb = Abilities.defineAbility('spell/spider-climb', {
  name: 'Spider Climb',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Touch · V, S, M (a drop of bitumen and a spider) · Concentration, up to 1 hour\n\nA willing creature you touch can walk on walls and ceilings with its hands free and gains a Climb Speed equal to its Speed.\n\n**Higher Levels:** one extra target per slot level above 2.'
    ),
  ],
  tags: [Rank2, Transmutation, Wizard],
  actions: [{ name: 'Cast Spider Climb', action: ActionTypes.Action }],
})

export const Suggestion = Abilities.defineAbility('spell/suggestion', {
  name: 'Suggestion',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Enchantment** · 30 feet · V, M (a drop of honey) · Concentration, up to 8 hours\n\nA creature that can hear and understand you must pass a Wisdom save or be Charmed and follow a reasonable-sounding suggestion of 25 words or fewer that isn't obviously harmful. It ends early if the task is done or you or your allies hurt it."
    ),
  ],
  tags: [Rank2, Enchantment, Wizard, Bard],
  actions: [{ name: 'Cast Suggestion', action: ActionTypes.Action }],
})

export const Web = Abilities.defineAbility('spell/web', {
  name: 'Web',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Conjuration** · 60 feet · V, S, M (a bit of spiderweb) · Concentration, up to 1 hour\n\nSticky webs fill a 20-foot Cube, creating Difficult Terrain and Light Obscurement (they collapse unless anchored). Creatures entering or starting their turn there must pass a Dexterity save or be Restrained, and can break free with a Strength (Athletics) check. Fire burns the webs away.'
    ),
  ],
  tags: [Rank2, Conjuration, Wizard],
  actions: [{ name: 'Cast Web', action: ActionTypes.Action }],
})

export const AnimateDead = Abilities.defineAbility('spell/animate-dead', {
  name: 'Animate Dead',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Necromancy** · 1 minute · 10 Feet · V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust) · Instantaneous\n\nRaise a Small or Medium Humanoid corpse as a Zombie, or bones as a Skeleton. As a Bonus Action, you can command your creations within 60 feet, giving them specific orders or a standing task. Control lasts 24 hours, and recasting the spell on up to four of them renews it instead of making a new one.\n\n**Higher Levels:** two extra Undead per slot level above 3.'
    ),
  ],
  tags: [Rank3, Necromancy, Cleric, Wizard],
  actions: [{ name: 'Cast Animate Dead', action: ActionTypes.Action }],
})

export const BestowCurse = Abilities.defineAbility('spell/bestow-curse', {
  name: 'Bestow Curse',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Necromancy** · Touch · V, S · Concentration, up to 1 minute\n\nA creature you touch must pass a Wisdom save or be cursed with one effect: Disadvantage on checks and saves with one ability, Disadvantage on attacks against you, a Wisdom save each turn or it must Dodge, or +1d8 Necrotic damage whenever you hit it.\n\n**Higher Levels:** longer durations at level 4+, with no Concentration needed at level 5+, and permanent until dispelled at level 9.'
    ),
  ],
  tags: [Rank3, Necromancy, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Bestow Curse', action: ActionTypes.Action }],
})

export const Blink = Abilities.defineAbility('spell/blink', {
  name: 'Blink',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Self · V, S · 1 minute\n\nAt the end of each of your turns, roll a d6. On a 4–6 you slip into the Ethereal Plane, where only other ethereal creatures can affect you. You return within 10 feet of where you left at the start of your next turn.'
    ),
  ],
  tags: [Rank3, Transmutation, Wizard],
  actions: [{ name: 'Cast Blink', action: ActionTypes.Action }],
})

export const Clairvoyance = Abilities.defineAbility('spell/clairvoyance', {
  name: 'Clairvoyance',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · 10 minutes · 1 mile · V, S, M (a focus worth 100+ GP, either a jeweled horn for hearing or a glass eye for seeing) · Concentration, up to 10 minutes\n\nCreate an Invisible, intangible sensor in a familiar or obvious nearby location and see or hear through it as if you were there, switching senses as a Bonus Action. Creatures that can see the Invisible notice a small glowing orb.'
    ),
  ],
  tags: [Rank3, Divination, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Clairvoyance', action: ActionTypes.Action }],
})

export const Counterspell = Abilities.defineAbility('spell/counterspell', {
  name: 'Counterspell',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · Reaction, which you take when you see a creature within 60 feet of yourself casting a spell with Verbal, Somatic, or Material components · 60 feet · S · Instantaneous\n\nAs a Reaction when you see a creature casting a spell, it makes a Constitution save. On a failure the spell fizzles and the action used to cast it is wasted, but any spell slot it used isn't spent."
    ),
  ],
  tags: [Rank3, Abjuration, Wizard],
  actions: [{ name: 'Cast Counterspell', action: ActionTypes.Reaction }],
})

export const DispelMagic = Abilities.defineAbility('spell/dispel-magic', {
  name: 'Dispel Magic',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · 120 feet · V, S · Instantaneous\n\nEnd every spell of level 3 or lower on a creature, object, or magical effect. For each higher-level spell, make a spellcasting ability check against DC 10 + its level to end it.\n\n**Higher Levels:** automatically ends spells up to the level of the slot used.'
    ),
  ],
  tags: [Rank3, Abjuration, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Dispel Magic', action: ActionTypes.Action }],
})

export const Fear = Abilities.defineAbility('spell/fear', {
  name: 'Fear',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Illusion** · Self · V, S, M (a white feather) · Concentration, up to 1 minute\n\nCreatures in a 30-foot Cone must pass a Wisdom save or drop what they're holding and become Frightened, using the Dash action to flee from you each turn. They can repeat the save only when they end a turn out of your sight."
    ),
  ],
  tags: [Rank3, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Fear', action: ActionTypes.Action }],
})

export const FeignDeath = Abilities.defineAbility('spell/feign-death', {
  name: 'Feign Death',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Necromancy** · Action or Ritual · Touch · V, S, M (a pinch of graveyard dirt) · 1 hour\n\nA willing creature you touch appears dead, even to magic. It's Blinded and Incapacitated with Speed 0, but it resists all damage except Psychic and can't be Poisoned."
    ),
  ],
  tags: [Rank3, Necromancy, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Feign Death', action: ActionTypes.Action }],
})

export const Fireball = Abilities.defineAbility('spell/fireball', {
  name: 'Fireball',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 150 feet · V, S, M (a ball of bat guano and sulfur) · Instantaneous\n\nA 20-foot-radius Sphere explodes in flame. Creatures there make a Dexterity save, taking 8d6 Fire damage on a failure or half on a success, and unattended flammable objects ignite.\n\n**Higher Levels:** +1d6 damage per slot level above 3.'
    ),
  ],
  tags: [Rank3, Evocation, Wizard],
  actions: [{ name: 'Cast Fireball', action: ActionTypes.Action }],
})

export const Fly = Abilities.defineAbility('spell/fly', {
  name: 'Fly',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Transmutation** · Touch · V, S, M (a feather) · Concentration, up to 10 minutes\n\nA willing creature you touch gains a Fly Speed of 60 feet and can hover. It falls if it's still airborne when the spell ends.\n\n**Higher Levels:** one extra target per slot level above 3."
    ),
  ],
  tags: [Rank3, Transmutation, Wizard],
  actions: [{ name: 'Cast Fly', action: ActionTypes.Action }],
})

export const GaseousForm = Abilities.defineAbility('spell/gaseous-form', {
  name: 'Gaseous Form',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Transmutation** · Touch · V, S, M (a bit of gauze) · Concentration, up to 1 hour\n\nA willing creature you touch turns into mist with a 10-foot Fly Speed. It can seep through small gaps and into other creatures' spaces, resists Bludgeoning, Piercing, and Slashing damage, and has Advantage on Strength, Dexterity, and Constitution saves. It can't talk, attack, cast spells, or use objects.\n\n**Higher Levels:** one extra target per slot level above 3."
    ),
  ],
  tags: [Rank3, Transmutation, Wizard],
  actions: [{ name: 'Cast Gaseous Form', action: ActionTypes.Action }],
})

export const GlyphOfWarding = Abilities.defineAbility('spell/glyph-of-warding', {
  name: 'Glyph of Warding',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · 1 hour · Touch · V, S, M (powdered diamond worth 200+ GP, which the spell consumes) · Until dispelled or triggered\n\nInscribe a hidden glyph (found with Wisdom (Perception) against your spell save DC) on a surface or inside a closed object, with a trigger you define. It either explodes for 5d8 damage of a chosen element in a 20-foot radius (Dexterity save for half), or releases a spell of level 3 or lower stored in it on whoever triggered it. It breaks if moved more than 10 feet.\n\n**Higher Levels:** +1d8 explosion damage, or a higher-level stored spell, per slot level above 3.'
    ),
  ],
  tags: [Rank3, Abjuration, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Glyph of Warding', action: ActionTypes.Action }],
})

export const Haste = Abilities.defineAbility('spell/haste', {
  name: 'Haste',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Transmutation** · 30 feet · V, S, M (a shaving of licorice root) · Concentration, up to 1 minute\n\nA willing creature you can see doubles its Speed, gains +2 AC and Advantage on Dexterity saves, and gets an extra action each turn (one attack, Dash, Disengage, Hide, or Utilize). When the spell ends, it's Incapacitated with Speed 0 until the end of its next turn."
    ),
  ],
  tags: [Rank3, Transmutation, Wizard],
  actions: [{ name: 'Cast Haste', action: ActionTypes.Action }],
})

export const HypnoticPattern = Abilities.defineAbility('spell/hypnotic-pattern', {
  name: 'Hypnotic Pattern',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Illusion** · 120 feet · S, M (a pinch of confetti) · Concentration, up to 1 minute\n\nA swirl of colors in a 30-foot Cube forces creatures that see it to pass a Wisdom save or be Charmed, which leaves them Incapacitated with Speed 0. The effect ends for a creature if it takes damage or someone uses an action to shake it awake.'
    ),
  ],
  tags: [Rank3, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Hypnotic Pattern', action: ActionTypes.Action }],
})

export const LeomundsTinyHut = Abilities.defineAbility('spell/leomunds-tiny-hut', {
  name: "Leomund's Tiny Hut",
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Evocation** · 1 minute or Ritual · Self · V, S, M (a crystal bead) · 8 hours\n\nA stationary 10-foot dome forms around you. Those inside when it's cast can come and go, but nothing else can enter, and spells of level 3 or lower can't reach through it. Inside it's dry and comfortable, lit as you like, and opaque from outside. It ends if you leave."
    ),
  ],
  tags: [Rank3, Evocation, Wizard, Bard],
  actions: [{ name: "Cast Leomund's Tiny Hut", action: ActionTypes.Action }],
})

export const LightningBolt = Abilities.defineAbility('spell/lightning-bolt', {
  name: 'Lightning Bolt',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · Self · V, S, M (a bit of fur and a crystal rod) · Instantaneous\n\nA 100-foot by 5-foot Line of lightning blasts from you. Creatures in it make a Dexterity save, taking 8d6 Lightning damage on a failure or half on a success.\n\n**Higher Levels:** +1d6 damage per slot level above 3.'
    ),
  ],
  tags: [Rank3, Evocation, Wizard],
  actions: [{ name: 'Cast Lightning Bolt', action: ActionTypes.Action }],
})

export const MagicCircle = Abilities.defineAbility('spell/magic-circle', {
  name: 'Magic Circle',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · 1 minute · 10 feet · V, S, M (salt and powdered silver worth 100+ GP, which the spell consumes) · 1 hour\n\nA 10-foot-radius, 20-foot-tall Cylinder wards against the creature types you choose (Celestials, Elementals, Fey, Fiends, or Undead). They can't enter it without magic (and a Charisma save to teleport in), have Disadvantage attacking those inside, and can't Charm, Frighten, or possess them. You can reverse it to trap a creature inside instead.\n\n**Higher Levels:** +1 hour of duration per slot level above 3."
    ),
  ],
  tags: [Rank3, Abjuration, Cleric, Wizard],
  actions: [{ name: 'Cast Magic Circle', action: ActionTypes.Action }],
})

export const MajorImage = Abilities.defineAbility('spell/major-image', {
  name: 'Major Image',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Illusion** · 120 feet · V, S, M (a bit of fleece) · Concentration, up to 10 minutes\n\nCreate a convincing illusion up to a 20-foot Cube with sound, smell, and temperature. You can move it and make it speak as a Magic action, but it can't cause harm. Touch reveals it, and a creature that Studies it can see through it with an Intelligence (Investigation) check.\n\n**Higher Levels:** with a level 4+ slot, it lasts until dispelled without Concentration."
    ),
  ],
  tags: [Rank3, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Major Image', action: ActionTypes.Action }],
})

export const Nondetection = Abilities.defineAbility('spell/nondetection', {
  name: 'Nondetection',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · Touch · V, S, M (a pinch of diamond dust worth 25+ GP, which the spell consumes) · 8 hours\n\nA willing creature, or a place or object up to 10 feet across, that you touch can't be targeted by Divination spells or seen through scrying sensors."
    ),
  ],
  tags: [Rank3, Abjuration, Wizard, Bard],
  actions: [{ name: 'Cast Nondetection', action: ActionTypes.Action }],
})

export const PhantomSteed = Abilities.defineAbility('spell/phantom-steed', {
  name: 'Phantom Steed',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Illusion** · 1 minute or Ritual · 30 feet · V, S · 1 hour\n\nA Large, horselike creature of your design appears with tack, using Riding Horse statistics but with a 100-foot Speed (13 miles per hour). It fades when the spell ends, giving the rider a minute to dismount, and vanishes if it takes damage.'
    ),
  ],
  tags: [Rank3, Illusion, Wizard],
  actions: [{ name: 'Cast Phantom Steed', action: ActionTypes.Action }],
})

export const ProtectionFromEnergy = Abilities.defineAbility('spell/protection-from-energy', {
  name: 'Protection from Energy',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · Touch · V, S · Concentration, up to 1 hour\n\nA willing creature you touch gains Resistance to Acid, Cold, Fire, Lightning, or Thunder damage (your choice).'
    ),
  ],
  tags: [Rank3, Abjuration, Cleric, Wizard],
  actions: [{ name: 'Cast Protection from Energy', action: ActionTypes.Action }],
})

export const RemoveCurse = Abilities.defineAbility('spell/remove-curse', {
  name: 'Remove Curse',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · Touch · V, S · Instantaneous\n\nEnd every curse on a creature or object you touch. A cursed magic item stays cursed, but its owner's Attunement breaks so they can get rid of it."
    ),
  ],
  tags: [Rank3, Abjuration, Cleric, Wizard],
  actions: [{ name: 'Cast Remove Curse', action: ActionTypes.Action }],
})

export const Sending = Abilities.defineAbility('spell/sending', {
  name: 'Sending',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Divination** · Unlimited · V, S, M (a copper wire) · Instantaneous\n\nSend a message of 25 words or fewer to a creature you've met or had described to you, at any distance, and it can reply straight away. Messages to other planes have a 5 percent chance to fail, and a recipient can block you for 8 hours."
    ),
  ],
  tags: [Rank3, Divination, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Sending', action: ActionTypes.Action }],
})

export const SleetStorm = Abilities.defineAbility('spell/sleet-storm', {
  name: 'Sleet Storm',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Conjuration** · 150 feet · V, S, M (a miniature umbrella) · Concentration, up to 1 minute\n\nFreezing sleet fills a 20-foot-radius, 40-foot-tall Cylinder, making it Heavily Obscured and Difficult Terrain and putting out open flames. Creatures entering or starting their turn there must pass a Dexterity save or fall Prone and lose Concentration.'
    ),
  ],
  tags: [Rank3, Conjuration, Wizard],
  actions: [{ name: 'Cast Sleet Storm', action: ActionTypes.Action }],
})

export const Slow = Abilities.defineAbility('spell/slow', {
  name: 'Slow',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · 120 feet · V, S, M (a drop of molasses) · Concentration, up to 1 minute\n\nUp to six creatures in a 40-foot Cube must pass a Wisdom save or be slowed: half Speed, −2 to AC and Dexterity saves, no Reactions, only an action or a Bonus Action each turn (and only one attack), and a 25 percent chance for somatic spells to fail. They repeat the save each turn.'
    ),
  ],
  tags: [Rank3, Transmutation, Wizard, Bard],
  actions: [{ name: 'Cast Slow', action: ActionTypes.Action }],
})

export const SpeakWithDead = Abilities.defineAbility('spell/speak-with-dead', {
  name: 'Speak with Dead',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Necromancy** · 10 feet · V, S, M (burning incense) · 10 minutes\n\nA corpse with a mouth answers up to five questions using only what it knew in life. Answers tend to be brief or cryptic, and a hostile corpse may lie. It fails on former Undead or a corpse questioned in the past 10 days.'
    ),
  ],
  tags: [Rank3, Necromancy, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Speak with Dead', action: ActionTypes.Action }],
})

export const StinkingCloud = Abilities.defineAbility('spell/stinking-cloud', {
  name: 'Stinking Cloud',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Conjuration** · 90 feet · V, S, M (a rotten egg) · Concentration, up to 1 minute\n\nA 20-foot-radius Sphere of foul gas is Heavily Obscured. Creatures starting their turn in it must pass a Constitution save or be Poisoned that turn, losing their action and Bonus Action. Strong wind disperses it.'
    ),
  ],
  tags: [Rank3, Conjuration, Wizard, Bard],
  actions: [{ name: 'Cast Stinking Cloud', action: ActionTypes.Action }],
})

export const SummonFey = Abilities.defineAbility('spell/summon-fey', {
  name: 'Summon Fey',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Conjuration** · 90 feet · V, S, M (a gilded flower worth 300+ GP) · Concentration, up to 1 hour\n\nA Fey spirit (Fuming, Mirthful, or Tricksy) appears and fights beside you, taking its turn after yours and obeying your spoken commands. It attacks with force-infused blades and teleports as a Bonus Action with an effect based on its mood. It vanishes at 0 Hit Points.\n\n**Higher Levels:** the spirit's statistics scale with the slot level."
    ),
  ],
  tags: [Rank3, Conjuration, Wizard],
  actions: [{ name: 'Cast Summon Fey', action: ActionTypes.Action }],
})

export const SummonUndead = Abilities.defineAbility('spell/summon-undead', {
  name: 'Summon Undead',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Necromancy** · 90 feet · V, S, M (a gilded skull worth 300+ GP) · Concentration, up to 1 hour\n\nAn Undead spirit (Ghostly, Putrid, or Skeletal) appears and fights beside you, taking its turn after yours and obeying your spoken commands. Ghostly spirits frighten with a touch and pass through objects, Putrid ones poison and paralyze, and Skeletal ones hurl bolts from range. It vanishes at 0 Hit Points.\n\n**Higher Levels:** the spirit's statistics scale with the slot level."
    ),
  ],
  tags: [Rank3, Necromancy, Wizard],
  actions: [{ name: 'Cast Summon Undead', action: ActionTypes.Action }],
})

export const Tongues = Abilities.defineAbility('spell/tongues', {
  name: 'Tongues',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · Touch · V, M (a miniature ziggurat) · 1 hour\n\nA creature you touch understands every spoken and signed language, and anyone who knows a language understands what it says.'
    ),
  ],
  tags: [Rank3, Divination, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Tongues', action: ActionTypes.Action }],
})

export const VampiricTouch = Abilities.defineAbility('spell/vampiric-touch', {
  name: 'Vampiric Touch',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Necromancy** · Self · V, S · Concentration, up to 1 minute\n\nMake a melee spell attack. On a hit, the target takes 3d6 Necrotic damage and you regain Hit Points equal to half of it. You can repeat the attack as a Magic action on later turns.\n\n**Higher Levels:** +1d6 damage per slot level above 3.'
    ),
  ],
  tags: [Rank3, Necromancy, Wizard],
  actions: [{ name: 'Cast Vampiric Touch', action: ActionTypes.Action }],
})

export const WaterBreathing = Abilities.defineAbility('spell/water-breathing', {
  name: 'Water Breathing',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Action or Ritual · 30 feet · V, S, M (a short reed) · 24 hours\n\nUp to ten willing creatures can breathe underwater, as well as normally.'
    ),
  ],
  tags: [Rank3, Transmutation, Wizard],
  actions: [{ name: 'Cast Water Breathing', action: ActionTypes.Action }],
})

// Cleric domain spells

export const Bless = Abilities.defineAbility('spell/bless', {
  name: 'Bless',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Enchantment** · 30 feet · V, S, M (a Holy Symbol worth 5+ GP) · Concentration, up to 1 minute\n\nUp to three creatures you choose add 1d4 to their attack rolls and saving throws until the spell ends.\n\n**Higher Levels:** one extra target per slot level above 1.'
    ),
  ],
  tags: [Rank1, Enchantment, Cleric],
  actions: [{ name: 'Cast Bless', action: ActionTypes.Action }],
})

export const CureWounds = Abilities.defineAbility('spell/cure-wounds', {
  name: 'Cure Wounds',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · Touch · V, S · Instantaneous\n\nA creature you touch regains Hit Points equal to 2d8 plus your spellcasting ability modifier.\n\n**Higher Levels:** +2d8 healing per slot level above 1.'
    ),
  ],
  tags: [Rank1, Abjuration, Cleric, Bard],
  actions: [{ name: 'Cast Cure Wounds', action: ActionTypes.Action }],
})

export const FaerieFire = Abilities.defineAbility('spell/faerie-fire', {
  name: 'Faerie Fire',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Evocation** · 60 feet · V · Concentration, up to 1 minute\n\nObjects in a 20-foot Cube are outlined in blue, green, or violet light, as is each creature there that fails a Dexterity save. Outlined targets shed Dim Light in a 10-foot radius, can't benefit from the Invisible condition, and attack rolls against them have Advantage."
    ),
  ],
  tags: [Rank1, Evocation, Bard],
  actions: [{ name: 'Cast Faerie Fire', action: ActionTypes.Action }],
})

export const GuidingBolt = Abilities.defineAbility('spell/guiding-bolt', {
  name: 'Guiding Bolt',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 120 feet · V, S · 1 round\n\nMake a ranged spell attack against a creature, dealing 4d6 Radiant damage on a hit. The next attack roll against it before the end of your next turn has Advantage.\n\n**Higher Levels:** +1d6 damage per slot level above 1.'
    ),
  ],
  tags: [Rank1, Evocation, Cleric],
  actions: [{ name: 'Cast Guiding Bolt', action: ActionTypes.Action }],
})

export const ShieldOfFaith = Abilities.defineAbility('spell/shield-of-faith', {
  name: 'Shield of Faith',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · 60 feet · V, S, M (a prayer scroll) · Concentration, up to 10 minutes\n\nA shimmering field surrounds a creature of your choice, granting it a +2 bonus to Armor Class for the duration.'
    ),
  ],
  tags: [Rank1, Abjuration, Cleric],
  actions: [{ name: 'Cast Shield of Faith', action: ActionTypes.BonusAction }],
})

export const Aid = Abilities.defineAbility('spell/aid', {
  name: 'Aid',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · 30 feet · V, S, M (a strip of white cloth) · 8 hours\n\nUp to three creatures you choose each increase their Hit Point maximum and current Hit Points by 5 for the duration.\n\n**Higher Levels:** +5 Hit Points per slot level above 2.'
    ),
  ],
  tags: [Rank2, Abjuration, Cleric, Bard],
  actions: [{ name: 'Cast Aid', action: ActionTypes.Action }],
})

export const LesserRestoration = Abilities.defineAbility('spell/lesser-restoration', {
  name: 'Lesser Restoration',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · Touch · V, S · Instantaneous\n\nA creature you touch is no longer Blinded, Deafened, Paralyzed, or Poisoned; you choose one of these conditions to end.'
    ),
  ],
  tags: [Rank2, Abjuration, Cleric, Bard],
  actions: [{ name: 'Cast Lesser Restoration', action: ActionTypes.BonusAction }],
})

export const PassWithoutTrace = Abilities.defineAbility('spell/pass-without-trace', {
  name: 'Pass without Trace',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · Self · V, S, M (ashes from burned mistletoe) · Concentration, up to 1 hour\n\nYou radiate a concealing aura in a 30-foot Emanation. You and your allies in it have a +10 bonus to Dexterity (Stealth) checks and leave no tracks.'
    ),
  ],
  tags: [Rank2, Abjuration],
  actions: [{ name: 'Cast Pass without Trace', action: ActionTypes.Action }],
})

export const SpiritualWeapon = Abilities.defineAbility('spell/spiritual-weapon', {
  name: 'Spiritual Weapon',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 60 feet · V, S · Concentration, up to 1 minute\n\nCreate a floating spectral weapon and make a melee spell attack against a creature within 5 feet of it, dealing 1d8 Force damage plus your spellcasting ability modifier on a hit. As a Bonus Action on later turns, you can move the weapon up to 20 feet and repeat the attack.\n\n**Higher Levels:** +1d8 damage per slot level above 2.'
    ),
  ],
  tags: [Rank2, Evocation, Cleric],
  actions: [{ name: 'Cast Spiritual Weapon', action: ActionTypes.BonusAction }],
})

export const CrusadersMantle = Abilities.defineAbility('spell/crusaders-mantle', {
  name: "Crusader's Mantle",
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · Self · V · Concentration, up to 1 minute\n\nYou radiate a holy aura in a 30-foot Emanation. While in it, you and your allies deal an extra 1d4 Radiant damage when hitting with a weapon or an Unarmed Strike.'
    ),
  ],
  tags: [Rank3, Evocation],
  actions: [{ name: "Cast Crusader's Mantle", action: ActionTypes.Action }],
})

export const Daylight = Abilities.defineAbility('spell/daylight', {
  name: 'Daylight',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 60 feet · V, S · 1 hour\n\nA 60-foot-radius Sphere of light spreads from a point or an object you choose: Bright Light, and Dim Light for another 60 feet. It dispels magical Darkness of level 3 or lower that it overlaps.'
    ),
  ],
  tags: [Rank3, Evocation, Cleric],
  actions: [{ name: 'Cast Daylight', action: ActionTypes.Action }],
})

export const MassHealingWord = Abilities.defineAbility('spell/mass-healing-word', {
  name: 'Mass Healing Word',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · 60 feet · V · Instantaneous\n\nUp to six creatures of your choice that you can see regain Hit Points equal to 2d4 plus your spellcasting ability modifier.\n\n**Higher Levels:** +1d4 healing per slot level above 3.'
    ),
  ],
  tags: [Rank3, Abjuration, Cleric, Bard],
  actions: [{ name: 'Cast Mass Healing Word', action: ActionTypes.BonusAction }],
})

export const Revivify = Abilities.defineAbility('spell/revivify', {
  name: 'Revivify',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Necromancy** · Touch · V, S, M (a diamond worth 300+ GP, which the spell consumes) · Instantaneous\n\nA creature that has died within the last minute returns to life with 1 Hit Point. The spell can't revive a creature that died of old age, and it doesn't restore missing body parts."
    ),
  ],
  tags: [Rank3, Necromancy, Cleric],
  actions: [{ name: 'Cast Revivify', action: ActionTypes.Action }],
})

export const SpiritGuardians = Abilities.defineAbility('spell/spirit-guardians', {
  name: 'Spirit Guardians',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Conjuration** · Self · V, S, M (a prayer scroll) · Concentration, up to 10 minutes\n\nProtective spirits flit around you in a 15-foot Emanation, and any creatures you designate are unaffected. Other creatures' Speed is halved there. Whenever the Emanation enters a creature's space, or a creature enters it or ends its turn there, the creature makes a Wisdom save, taking 3d8 Radiant damage (Necrotic if you're evil) on a failure or half on a success. A creature makes this save only once per turn.\n\n**Higher Levels:** +1d8 damage per slot level above 3."
    ),
  ],
  tags: [Rank3, Conjuration, Cleric],
  actions: [{ name: 'Cast Spirit Guardians', action: ActionTypes.Action }],
})

// Cleric level 1 spells

export const Bane = Abilities.defineAbility('spell/bane', {
  name: 'Bane',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Enchantment** · 30 feet · V, S, M (a drop of blood) · Concentration, up to 1 minute\n\nUp to three creatures of your choice that you can see make Charisma saves. Each one that fails subtracts 1d4 from its attack rolls and saving throws until the spell ends.\n\n**Higher Levels:** one extra target per slot level above 1.'
    ),
  ],
  tags: [Rank1, Enchantment, Cleric, Bard],
  actions: [{ name: 'Cast Bane', action: ActionTypes.Action }],
})

export const Command = Abilities.defineAbility('spell/command', {
  name: 'Command',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Enchantment** · 60 feet · V · Instantaneous\n\nSpeak a one-word command to a creature you can see: Approach, Drop, Flee, Grovel, or Halt. Unless it succeeds on a Wisdom save, it follows the command on its next turn.\n\n**Higher Levels:** one extra target per slot level above 1.'
    ),
  ],
  tags: [Rank1, Enchantment, Cleric, Bard],
  actions: [{ name: 'Cast Command', action: ActionTypes.Action }],
})

export const CreateOrDestroyWater = Abilities.defineAbility('spell/create-or-destroy-water', {
  name: 'Create or Destroy Water',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · 30 feet · V, S, M (a mix of water and sand) · Instantaneous\n\nCreate up to 10 gallons of clean water in an open container, or as rain in a 30-foot Cube that puts out exposed flames. Or destroy up to 10 gallons of water in an open container, or fog in a 30-foot Cube.\n\n**Higher Levels:** 10 more gallons, or a Cube 5 feet larger, per slot level above 1.'
    ),
  ],
  tags: [Rank1, Transmutation, Cleric],
  actions: [{ name: 'Cast Create or Destroy Water', action: ActionTypes.Action }],
})

export const DetectEvilAndGood = Abilities.defineAbility('spell/detect-evil-and-good', {
  name: 'Detect Evil and Good',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · Self · V, S · Concentration, up to 10 minutes\n\nYou sense the location of any Aberration, Celestial, Elemental, Fey, Fiend, or Undead within 30 feet of you, and whether a place or object there has been magically consecrated or desecrated.'
    ),
  ],
  tags: [Rank1, Divination, Cleric],
  actions: [{ name: 'Cast Detect Evil and Good', action: ActionTypes.Action }],
})

export const DetectPoisonAndDisease = Abilities.defineAbility('spell/detect-poison-and-disease', {
  name: 'Detect Poison and Disease',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · Action or Ritual · Self · V, S, M (a yew leaf) · Concentration, up to 10 minutes\n\nYou sense the location of poisons, poisonous or venomous creatures, and magical contagions within 30 feet of you, and the kind of each.'
    ),
  ],
  tags: [Rank1, Divination, Cleric],
  actions: [{ name: 'Cast Detect Poison and Disease', action: ActionTypes.Action }],
})

export const HealingWord = Abilities.defineAbility('spell/healing-word', {
  name: 'Healing Word',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · 60 feet · V · Instantaneous\n\nA creature of your choice that you can see regains Hit Points equal to 2d4 plus your spellcasting ability modifier.\n\n**Higher Levels:** +2d4 healing per slot level above 1.'
    ),
  ],
  tags: [Rank1, Abjuration, Cleric, Bard],
  actions: [{ name: 'Cast Healing Word', action: ActionTypes.BonusAction }],
})

export const InflictWounds = Abilities.defineAbility('spell/inflict-wounds', {
  name: 'Inflict Wounds',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Necromancy** · Touch · V, S · Instantaneous\n\nA creature you touch makes a Constitution save, taking 2d10 Necrotic damage on a failure or half as much on a success.\n\n**Higher Levels:** +1d10 damage per slot level above 1.'
    ),
  ],
  tags: [Rank1, Necromancy, Cleric],
  actions: [{ name: 'Cast Inflict Wounds', action: ActionTypes.Action }],
})

export const PurifyFoodAndDrink = Abilities.defineAbility('spell/purify-food-and-drink', {
  name: 'Purify Food and Drink',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Action or Ritual · 10 feet · V, S · Instantaneous\n\nYou remove poison and rot from nonmagical food and drink in a 5-foot-radius Sphere.'
    ),
  ],
  tags: [Rank1, Transmutation, Cleric],
  actions: [{ name: 'Cast Purify Food and Drink', action: ActionTypes.Action }],
})

export const Sanctuary = Abilities.defineAbility('spell/sanctuary', {
  name: 'Sanctuary',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · 30 feet · V, S, M (a shard of glass from a mirror) · 1 minute\n\nYou ward a creature. Until the spell ends, any creature that targets it with an attack roll or a damaging spell must succeed on a Wisdom save or choose a new target or lose the attack or spell. The ward doesn't protect against area effects, and it ends if the warded creature attacks, casts a spell, or deals damage."
    ),
  ],
  tags: [Rank1, Abjuration, Cleric],
  actions: [{ name: 'Cast Sanctuary', action: ActionTypes.BonusAction }],
})

// Cantrips

export const AcidSplash = Abilities.defineAbility('spell/acid-splash', {
  name: 'Acid Splash',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 60 feet · V, S · Instantaneous\n\nCreate an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in it makes a Dexterity save, taking 1d6 Acid damage on a failure.\n\n**Cantrip Upgrade:** the damage increases by 1d6 at levels 5, 11, and 17.'
    ),
  ],
  tags: [Cantrip, Evocation, Wizard],
  actions: [{ name: 'Cast Acid Splash', action: ActionTypes.Action }],
})

export const BladeWard = Abilities.defineAbility('spell/blade-ward', {
  name: 'Blade Ward',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · Self · V, S · Concentration, up to 1 minute\n\nWhenever a creature makes an attack roll against you before the spell ends, the attacker subtracts 1d4 from the roll.'
    ),
  ],
  tags: [Cantrip, Abjuration, Wizard, Bard],
  actions: [{ name: 'Cast Blade Ward', action: ActionTypes.Action }],
})

export const ChillTouch = Abilities.defineAbility('spell/chill-touch', {
  name: 'Chill Touch',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Necromancy** · Touch · V, S · Instantaneous\n\nMake a melee spell attack against a creature, dealing 1d10 Necrotic damage on a hit. The target can't regain Hit Points until the end of your next turn.\n\n**Cantrip Upgrade:** the damage increases by 1d10 at levels 5, 11, and 17."
    ),
  ],
  tags: [Cantrip, Necromancy, Wizard],
  actions: [{ name: 'Cast Chill Touch', action: ActionTypes.Action }],
})

export const DancingLights = Abilities.defineAbility('spell/dancing-lights', {
  name: 'Dancing Lights',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Illusion** · 120 feet · V, S, M (a bit of phosphorus) · Concentration, up to 1 minute\n\nCreate up to four torch-size lights, each shedding Dim Light in a 10-foot radius, or combine them into one glowing Medium form. As a Bonus Action, you can move them up to 60 feet, keeping each within 20 feet of another; a light winks out if it ends up beyond the spell's range."
    ),
  ],
  tags: [Cantrip, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Dancing Lights', action: ActionTypes.Action }],
})

export const Elementalism = Abilities.defineAbility('spell/elementalism', {
  name: 'Elementalism',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · 30 feet · V, S · Instantaneous\n\nExert minor control over the elements: create a breeze, a thin cloud of dust or sand, a harmless burst of embers or smoke, or a spray of mist, or sculpt dirt, sand, fire, smoke, mist, or water into a crude shape for 1 hour.'
    ),
  ],
  tags: [Cantrip, Transmutation, Wizard],
  actions: [{ name: 'Cast Elementalism', action: ActionTypes.Action }],
})

export const FireBolt = Abilities.defineAbility('spell/fire-bolt', {
  name: 'Fire Bolt',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Evocation** · 120 feet · V, S · Instantaneous\n\nMake a ranged spell attack against a creature or object, dealing 1d10 Fire damage on a hit. A flammable object hit by it starts burning if it isn't being worn or carried.\n\n**Cantrip Upgrade:** the damage increases by 1d10 at levels 5, 11, and 17."
    ),
  ],
  tags: [Cantrip, Evocation, Wizard],
  actions: [{ name: 'Cast Fire Bolt', action: ActionTypes.Action }],
})

export const Light = Abilities.defineAbility('spell/light', {
  name: 'Light',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · Touch · V, M (a firefly or phosphorescent moss) · 1 hour\n\nAn object no larger than 10 feet sheds Bright Light in a 20-foot radius and Dim Light for another 20 feet, in a color you choose. Covering it blocks the light. If a hostile creature holds or wears the object, it can make a Dexterity save to avoid the spell.'
    ),
  ],
  tags: [Cantrip, Evocation, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Light', action: ActionTypes.Action }],
})

export const MageHand = Abilities.defineAbility('spell/mage-hand', {
  name: 'Mage Hand',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Conjuration** · 30 feet · V, S · 1 minute\n\nA spectral, floating hand appears. As a Magic action, you can use it to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour out a vial, and move it up to 30 feet. It can't attack, activate magic items, or carry more than 10 pounds."
    ),
  ],
  tags: [Cantrip, Conjuration, Wizard, Bard],
  actions: [{ name: 'Cast Mage Hand', action: ActionTypes.Action }],
})

export const Mending = Abilities.defineAbility('spell/mending', {
  name: 'Mending',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Transmutation** · 1 minute · Touch · V, S, M (two lodestones) · Instantaneous\n\nRepair a single break or tear in an object, such as a broken chain link or a torn cloak, as long as it's no larger than 1 foot in any dimension. It can repair a magic item, but can't restore its magic."
    ),
  ],
  tags: [Cantrip, Transmutation, Cleric, Wizard, Bard],
  actions: [{ name: 'Cast Mending', action: ActionTypes.Action }],
})

export const Message = Abilities.defineAbility('spell/message', {
  name: 'Message',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Transmutation** · 120 feet · S, M (a copper wire) · 1 round\n\nPoint toward a creature within range and whisper a message. Only the target hears it, and it can reply in a whisper that only you hear. The spell can pass through most solid objects if you're familiar with the target and know it's beyond the barrier."
    ),
  ],
  tags: [Cantrip, Transmutation, Wizard, Bard],
  actions: [{ name: 'Cast Message', action: ActionTypes.Action }],
})

export const MindSliver = Abilities.defineAbility('spell/mind-sliver', {
  name: 'Mind Sliver',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Enchantment** · 60 feet · V · 1 round\n\nDrive a spike of psionic energy into a creature's mind. It makes an Intelligence save, taking 1d6 Psychic damage on a failure and subtracting 1d4 from the next saving throw it makes before the end of your next turn.\n\n**Cantrip Upgrade:** the damage increases by 1d6 at levels 5, 11, and 17."
    ),
  ],
  tags: [Cantrip, Enchantment, Wizard],
  actions: [{ name: 'Cast Mind Sliver', action: ActionTypes.Action }],
})

export const MinorIllusion = Abilities.defineAbility('spell/minor-illusion', {
  name: 'Minor Illusion',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Illusion** · 30 feet · S, M (a bit of fleece) · 1 minute\n\nCreate a sound or an image of an object no larger than a 5-foot Cube. Physical interaction reveals an image to be an illusion, and a creature that takes the Study action can see through it with an Intelligence (Investigation) check against your spell save DC.'
    ),
  ],
  tags: [Cantrip, Illusion, Wizard, Bard],
  actions: [{ name: 'Cast Minor Illusion', action: ActionTypes.Action }],
})

export const PoisonSpray = Abilities.defineAbility('spell/poison-spray', {
  name: 'Poison Spray',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Necromancy** · 30 feet · V, S · Instantaneous\n\nSpray toxic mist at a creature: make a ranged spell attack, dealing 1d12 Poison damage on a hit.\n\n**Cantrip Upgrade:** the damage increases by 1d12 at levels 5, 11, and 17.'
    ),
  ],
  tags: [Cantrip, Necromancy, Wizard],
  actions: [{ name: 'Cast Poison Spray', action: ActionTypes.Action }],
})

export const Prestidigitation = Abilities.defineAbility('spell/prestidigitation', {
  name: 'Prestidigitation',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · 10 feet · V, S · Up to 1 hour\n\nCreate a minor magical trick: a harmless sensory effect, lighting or snuffing a small flame, cleaning or soiling a small object, chilling, warming, or flavoring food, a small mark or symbol, or a nonmagical trinket that lasts until your next turn. Up to three of its lasting effects can be active at once.'
    ),
  ],
  tags: [Cantrip, Transmutation, Wizard, Bard],
  actions: [{ name: 'Cast Prestidigitation', action: ActionTypes.Action }],
})

export const RayOfFrost = Abilities.defineAbility('spell/ray-of-frost', {
  name: 'Ray of Frost',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 60 feet · V, S · Instantaneous\n\nMake a ranged spell attack against a creature, dealing 1d8 Cold damage on a hit and reducing its Speed by 10 feet until the start of your next turn.\n\n**Cantrip Upgrade:** the damage increases by 1d8 at levels 5, 11, and 17.'
    ),
  ],
  tags: [Cantrip, Evocation, Wizard],
  actions: [{ name: 'Cast Ray of Frost', action: ActionTypes.Action }],
})

export const ShockingGrasp = Abilities.defineAbility('spell/shocking-grasp', {
  name: 'Shocking Grasp',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Evocation** · Touch · V, S · Instantaneous\n\nMake a melee spell attack against a creature, dealing 1d8 Lightning damage on a hit. It can't make Opportunity Attacks until the start of its next turn.\n\n**Cantrip Upgrade:** the damage increases by 1d8 at levels 5, 11, and 17."
    ),
  ],
  tags: [Cantrip, Evocation, Wizard],
  actions: [{ name: 'Cast Shocking Grasp', action: ActionTypes.Action }],
})

export const Thunderclap = Abilities.defineAbility('spell/thunderclap', {
  name: 'Thunderclap',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · Self · S · Instantaneous\n\nEach creature in a 5-foot Emanation originating from you makes a Constitution save, taking 1d6 Thunder damage on a failure. The sound can be heard up to 100 feet away.\n\n**Cantrip Upgrade:** the damage increases by 1d6 at levels 5, 11, and 17.'
    ),
  ],
  tags: [Cantrip, Evocation, Wizard, Bard],
  actions: [{ name: 'Cast Thunderclap', action: ActionTypes.Action }],
})

export const TollTheDead = Abilities.defineAbility('spell/toll-the-dead', {
  name: 'Toll the Dead',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Necromancy** · 60 feet · V, S · Instantaneous\n\nThe sound of a dolorous bell fills the air around a creature you can see. It makes a Wisdom save, taking 1d8 Necrotic damage on a failure, or 1d12 if it's missing any Hit Points.\n\n**Cantrip Upgrade:** the damage increases by one die at levels 5, 11, and 17."
    ),
  ],
  tags: [Cantrip, Necromancy, Cleric, Wizard],
  actions: [{ name: 'Cast Toll the Dead', action: ActionTypes.Action }],
})

export const TrueStrike = Abilities.defineAbility('spell/true-strike', {
  name: 'True Strike',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Divination** · Self · S, M (a weapon you have proficiency with) · Instantaneous\n\nMake one attack with the weapon used in the spell's casting, using your spellcasting ability for the attack and damage rolls instead of Strength or Dexterity. The damage can be Radiant or the weapon's normal damage type.\n\n**Cantrip Upgrade:** the attack deals an extra 1d6 Radiant damage at level 5, rising to 2d6 at level 11 and 3d6 at level 17."
    ),
  ],
  tags: [Cantrip, Divination, Wizard, Bard],
  actions: [{ name: 'Cast True Strike', action: ActionTypes.Action }],
})

export const Guidance = Abilities.defineAbility('spell/guidance', {
  name: 'Guidance',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · Touch · V, S · Concentration, up to 1 minute\n\nChoose a skill. One willing creature you touch can add 1d4 to any ability check it makes with that skill until the spell ends.'
    ),
  ],
  tags: [Cantrip, Divination, Cleric],
  actions: [{ name: 'Cast Guidance', action: ActionTypes.Action }],
})

export const Resistance = Abilities.defineAbility('spell/resistance', {
  name: 'Resistance',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · Touch · V, S · Concentration, up to 1 minute\n\nChoose a damage type: Acid, Bludgeoning, Cold, Fire, Lightning, Necrotic, Piercing, Poison, Radiant, Slashing, or Thunder. Once per turn, when the willing creature you touched takes damage of that type, it reduces the damage by 1d4.'
    ),
  ],
  tags: [Cantrip, Abjuration, Cleric],
  actions: [{ name: 'Cast Resistance', action: ActionTypes.Action }],
})

export const SacredFlame = Abilities.defineAbility('spell/sacred-flame', {
  name: 'Sacred Flame',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · 60 feet · V, S · Instantaneous\n\nFlame-like radiance descends on a creature you can see. It makes a Dexterity save, taking 1d8 Radiant damage on a failure, and gains no benefit from Half Cover or Three-Quarters Cover for this save.\n\n**Cantrip Upgrade:** the damage increases by 1d8 at levels 5, 11, and 17.'
    ),
  ],
  tags: [Cantrip, Evocation, Cleric],
  actions: [{ name: 'Cast Sacred Flame', action: ActionTypes.Action }],
})

export const SpareTheDying = Abilities.defineAbility('spell/spare-the-dying', {
  name: 'Spare the Dying',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Necromancy** · 15 feet · V, S · Instantaneous\n\nChoose a creature within range that has 0 Hit Points and isn't dead. It becomes Stable.\n\n**Cantrip Upgrade:** the range doubles at levels 5, 11, and 17."
    ),
  ],
  tags: [Cantrip, Necromancy, Cleric],
  actions: [{ name: 'Cast Spare the Dying', action: ActionTypes.Action }],
})

export const Thaumaturgy = Abilities.defineAbility('spell/thaumaturgy', {
  name: 'Thaumaturgy',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · 30 feet · V · Up to 1 minute\n\nCreate a minor wonder: your voice booms three times louder, flames flicker or change color, harmless tremors shake the ground, a sound echoes from a point you choose, an unlocked door or window flies open or slams shut, or your eyes change appearance. You can have up to three one-minute effects active at once.'
    ),
  ],
  tags: [Cantrip, Transmutation, Cleric],
  actions: [{ name: 'Cast Thaumaturgy', action: ActionTypes.Action }],
})

export const WordOfRadiance = Abilities.defineAbility('spell/word-of-radiance', {
  name: 'Word of Radiance',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Evocation** · Self · V, M (a sunburst token) · Instantaneous\n\nBurning radiance erupts from you in a 5-foot Emanation. Each creature you choose that you can see in it makes a Constitution save, taking 1d6 Radiant damage on a failure.\n\n**Cantrip Upgrade:** the damage increases by 1d6 at levels 5, 11, and 17.'
    ),
  ],
  tags: [Cantrip, Evocation, Cleric],
  actions: [{ name: 'Cast Word of Radiance', action: ActionTypes.Action }],
})

// Spells granted by Barbarian features. They're on the Druid and Ranger lists, which aren't modelled yet, so they have no class tag

export const SpeakWithAnimals = Abilities.defineAbility('spell/speak-with-animals', {
  name: 'Speak with Animals',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Divination** · Action or Ritual · Self · V, S · 10 minutes\n\nYou can understand and talk with Beasts, and use any of the Influence action's skill options on them. Most have little to say beyond survival and companionship, but they can tell you about nearby places and monsters, including anything they've perceived in the past day."
    ),
  ],
  tags: [Rank1, Divination, Bard],
  actions: [{ name: 'Cast Speak with Animals', action: ActionTypes.Action }],
})

export const BeastSense = Abilities.defineAbility('spell/beast-sense', {
  name: 'Beast Sense',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · Action or Ritual · Touch · S · Concentration, up to 1 hour\n\nA willing Beast you touch shares its senses with you, including any special senses it has, while still letting you use your own.'
    ),
  ],
  tags: [Rank2, Divination],
  actions: [{ name: 'Cast Beast Sense', action: ActionTypes.Action }],
})

// Bard spells

export const Friends = Abilities.defineAbility('spell/friends', {
  name: 'Friends',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Enchantment** · 10 feet · S, M (some makeup) · Concentration, up to 1 minute\n\nA creature you can see must pass a Wisdom save or be Charmed by you. It succeeds automatically if it isn't a Humanoid, you're fighting it, or you've used this on it in the past day. The spell ends if it takes damage or you attack, deal damage, or force a save, and it then knows it was charmed."
    ),
  ],
  tags: [Cantrip, Enchantment, Bard, Wizard],
  actions: [{ name: 'Cast Friends', action: ActionTypes.Action }],
})

export const StarryWisp = Abilities.defineAbility('spell/starry-wisp', {
  name: 'Starry Wisp',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Evocation** · 60 feet · V, S · Instantaneous\n\nMake a ranged spell attack with a mote of light, dealing 1d8 Radiant damage on a hit. Until the end of your next turn, the target sheds Dim Light in a 10-foot radius and can't benefit from being Invisible.\n\n**Cantrip Upgrade:** the damage increases by 1d8 at levels 5, 11, and 17."
    ),
  ],
  tags: [Cantrip, Evocation, Bard],
  actions: [{ name: 'Cast Starry Wisp', action: ActionTypes.Action }],
})

export const ViciousMockery = Abilities.defineAbility('spell/vicious-mockery', {
  name: 'Vicious Mockery',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Enchantment** · 60 feet · V · Instantaneous\n\nA creature you can see or hear must pass a Wisdom save or take 1d6 Psychic damage and have Disadvantage on its next attack roll before the end of its next turn.\n\n**Cantrip Upgrade:** the damage increases by 1d6 at levels 5, 11, and 17.'
    ),
  ],
  tags: [Cantrip, Enchantment, Bard],
  actions: [{ name: 'Cast Vicious Mockery', action: ActionTypes.Action }],
})

export const AnimalFriendship = Abilities.defineAbility('spell/animal-friendship', {
  name: 'Animal Friendship',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Enchantment** · 30 feet · V, S, M (a morsel of food) · 24 hours\n\nA Beast you can see must pass a Wisdom save or be Charmed by you for the duration. It ends if you or your allies damage it.\n\n**Higher Levels:** one extra Beast per slot level above 1.'
    ),
  ],
  tags: [Rank1, Enchantment, Bard],
  actions: [{ name: 'Cast Animal Friendship', action: ActionTypes.Action }],
})

export const DissonantWhispers = Abilities.defineAbility('spell/dissonant-whispers', {
  name: 'Dissonant Whispers',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Enchantment** · 60 feet · V · Instantaneous\n\nA creature you can see makes a Wisdom save. On a failure it takes 3d6 Psychic damage and must use its Reaction to move as far from you as it safely can. On a success it takes half damage.\n\n**Higher Levels:** +1d6 damage per slot level above 1.'
    ),
  ],
  tags: [Rank1, Enchantment, Bard],
  actions: [{ name: 'Cast Dissonant Whispers', action: ActionTypes.Action }],
})

export const Heroism = Abilities.defineAbility('spell/heroism', {
  name: 'Heroism',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Enchantment** · Touch · V, S · Concentration, up to 1 minute\n\nA willing creature you touch can't be Frightened and gains Temporary Hit Points equal to your spellcasting ability modifier at the start of each of its turns.\n\n**Higher Levels:** one extra target per slot level above 1."
    ),
  ],
  tags: [Rank1, Enchantment, Bard],
  actions: [{ name: 'Cast Heroism', action: ActionTypes.Action }],
})

export const AnimalMessenger = Abilities.defineAbility('spell/animal-messenger', {
  name: 'Animal Messenger',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Enchantment** · 30 feet · V, S, M (a morsel of food) · 24 hours\n\nA Tiny Beast you can see (of Challenge Rating 0) must pass a Charisma save or carry a message of up to 25 words to a place you've been and a recipient you describe, travelling about 25 miles a day (50 if it flies). It delivers the message in your voice, or returns if it runs out of time.\n\n**Higher Levels:** +48 hours of duration per slot level above 2."
    ),
  ],
  tags: [Rank2, Enchantment, Bard],
  actions: [{ name: 'Cast Animal Messenger', action: ActionTypes.Action }],
})

export const CalmEmotions = Abilities.defineAbility('spell/calm-emotions', {
  name: 'Calm Emotions',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Enchantment** · 60 feet · V, S · Concentration, up to 1 minute\n\nHumanoids in a 20-foot-radius Sphere must pass a Charisma save or be affected, as you choose for each: they become immune to being Charmed or Frightened (suppressing those conditions if they already have them), or they become Indifferent toward creatures of your choice they're hostile to, until they or their allies take damage."
    ),
  ],
  tags: [Rank2, Enchantment, Bard, Cleric],
  actions: [{ name: 'Cast Calm Emotions', action: ActionTypes.Action }],
})

export const Enthrall = Abilities.defineAbility('spell/enthrall', {
  name: 'Enthrall',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Enchantment** · 60 feet · V, S · Concentration, up to 1 minute\n\nCreatures you choose that can see you make a Wisdom save, which those you're fighting pass automatically. Those that fail take a −10 penalty to Wisdom (Perception) checks and Passive Perception."
    ),
  ],
  tags: [Rank2, Enchantment, Bard],
  actions: [{ name: 'Cast Enthrall', action: ActionTypes.Action }],
})

export const HeatMetal = Abilities.defineAbility('spell/heat-metal', {
  name: 'Heat Metal',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Transmutation** · 60 feet · V, S, M (a piece of iron and a flame) · Concentration, up to 1 minute\n\nA manufactured metal object you can see glows red-hot, dealing 2d8 Fire damage to anyone touching it, and you can repeat the damage as a Bonus Action on later turns. A creature holding or wearing it must pass a Constitution save or drop it if it can. If it doesn't, it has Disadvantage on attacks and ability checks until the start of your next turn.\n\n**Higher Levels:** +1d8 damage per slot level above 2."
    ),
  ],
  tags: [Rank2, Transmutation, Bard],
  actions: [{ name: 'Cast Heat Metal', action: ActionTypes.Action }],
})

export const LocateAnimalsOrPlants = Abilities.defineAbility('spell/locate-animals-or-plants', {
  name: 'Locate Animals or Plants',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Divination** · Self · V, S, M (fur from a bloodhound) · Instantaneous\n\nName a kind of Beast, Plant creature, or nonmagical plant to learn the direction and distance to the nearest one within 5 miles.'
    ),
  ],
  tags: [Rank2, Divination, Bard],
  actions: [{ name: 'Cast Locate Animals or Plants', action: ActionTypes.Action }],
})

export const Silence = Abilities.defineAbility('spell/silence', {
  name: 'Silence',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Illusion** · 120 feet · V, S · Concentration, up to 10 minutes\n\nNo sound can be made in or pass through a 20-foot-radius Sphere. Everything inside is immune to Thunder damage, creatures inside are Deafened, and spells with Verbal components can't be cast there."
    ),
  ],
  tags: [Rank2, Illusion, Bard, Cleric],
  actions: [{ name: 'Cast Silence', action: ActionTypes.Action }],
})

export const ZoneOfTruth = Abilities.defineAbility('spell/zone-of-truth', {
  name: 'Zone of Truth',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Enchantment** · 60 feet · V, S · 10 minutes\n\nCreatures entering or starting their turn in a 15-foot-radius Sphere make a Charisma save. Those that fail can't knowingly lie there, though they can stay silent or be evasive. You know who passed and who failed, and those affected know about the spell."
    ),
  ],
  tags: [Rank2, Enchantment, Bard, Cleric],
  actions: [{ name: 'Cast Zone of Truth', action: ActionTypes.Action }],
})

export const PlantGrowth = Abilities.defineAbility('spell/plant-growth', {
  name: 'Plant Growth',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · 150 feet · V, S · Instantaneous\n\n**Overgrowth** (an action): plants in a 100-foot-radius Sphere become so thick that moving through costs 4 feet for every foot, except in areas you exclude. **Enrichment** (8 hours): plants within half a mile yield double food for a year.'
    ),
  ],
  tags: [Rank3, Transmutation, Bard],
  actions: [{ name: 'Cast Plant Growth', action: ActionTypes.Action }],
})

export const SpeakWithPlants = Abilities.defineAbility('spell/speak-with-plants', {
  name: 'Speak with Plants',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · Self · V, S · 10 minutes\n\nPlants within 30 feet can talk with you and follow simple commands. They can tell you about the past day in the area, and you can clear plant-based Difficult Terrain or create it where plants grow. You can also speak with Plant creatures there.'
    ),
  ],
  tags: [Rank3, Transmutation, Bard],
  actions: [{ name: 'Cast Speak with Plants', action: ActionTypes.Action }],
})

export const ThornWhip = Abilities.defineAbility('spell/thorn-whip', {
  name: 'Thorn Whip',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Transmutation** · 30 feet · V, S, M (the stem of a plant with thorns) · Instantaneous\n\nMake a melee spell attack against a creature in range with a thorny vine, dealing 1d6 Piercing damage on a hit. If the target is Large or smaller, you can pull it up to 10 feet straight toward you.\n\n**Cantrip Upgrade:** the damage increases by 1d6 at levels 5, 11, and 17.'
    ),
  ],
  tags: [Cantrip, Transmutation],
  actions: [{ name: 'Cast Thorn Whip', action: ActionTypes.Action }],
})

export const ProtectionFromPoison = Abilities.defineAbility('spell/protection-from-poison', {
  name: 'Protection from Poison',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      '**Abjuration** · Touch · V, S · 1 hour\n\nYou touch a creature and end the Poisoned condition on it. For the duration, it has Advantage on saving throws to avoid or end the Poisoned condition, and it has Resistance to Poison damage.'
    ),
  ],
  tags: [Rank2, Abjuration, Cleric],
  actions: [{ name: 'Cast Protection from Poison', action: ActionTypes.Action }],
})

export const ShiningSmite = Abilities.defineAbility('spell/shining-smite', {
  name: 'Shining Smite',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Transmutation** · Bonus Action, immediately after hitting with a melee weapon or an Unarmed Strike · Self · V · Concentration, up to 1 minute\n\nThe target takes an extra 2d6 Radiant damage. Until the spell ends, it sheds Bright Light in a 5-foot radius, attack rolls against it have Advantage, and it can't benefit from the Invisible condition.\n\n**Higher Levels:** +1d6 damage per slot level above 2."
    ),
  ],
  tags: [Rank2, Transmutation],
  actions: [{ name: 'Cast Shining Smite', action: ActionTypes.BonusAction }],
})

export const WardingBond = Abilities.defineAbility('spell/warding-bond', {
  name: 'Warding Bond',
  universal: false,
  effects: [
    CharacterEffects.descriptive(
      "**Abjuration** · Touch · V, S, M (a pair of platinum rings worth 50+ GP each, which you and the target must wear) · 1 hour\n\nA willing creature you touch gains a +1 bonus to AC and saving throws and Resistance to all damage. Each time it takes damage, you take the same amount. The spell ends if you drop to 0 Hit Points, if you and the target are more than 60 feet apart, or if it's cast again on either of you.\n\n**Higher Levels:** one extra target per slot level above 2."
    ),
  ],
  tags: [Rank2, Abjuration, Cleric],
  actions: [{ name: 'Cast Warding Bond', action: ActionTypes.Action }],
})

export const All = [
  Alarm,
  BurningHands,
  CharmPerson,
  ChromaticOrb,
  ColorSpray,
  ComprehendLanguages,
  DetectMagic,
  DisguiseSelf,
  ExpeditiousRetreat,
  FalseLife,
  FeatherFall,
  FindFamiliar,
  FogCloud,
  Grease,
  IceKnife,
  Identify,
  IllusoryScript,
  Jump,
  Longstrider,
  MageArmor,
  MagicMissile,
  ProtectionFromEvilAndGood,
  RayOfSickness,
  Shield,
  SilentImage,
  Sleep,
  TashasHideousLaughter,
  TensersFloatingDisk,
  Thunderwave,
  UnseenServant,
  WitchBolt,
  AlterSelf,
  ArcaneLock,
  ArcaneVigor,
  Augury,
  BlindnessDeafness,
  Blur,
  CloudOfDaggers,
  ContinualFlame,
  CrownOfMadness,
  Darkness,
  Darkvision,
  DetectThoughts,
  DragonsBreath,
  EnhanceAbility,
  EnlargeReduce,
  FlamingSphere,
  GentleRepose,
  GustOfWind,
  HoldPerson,
  Invisibility,
  Knock,
  Levitate,
  LocateObject,
  MagicMouth,
  MagicWeapon,
  MelfsAcidArrow,
  MindSpike,
  MirrorImage,
  MistyStep,
  NystulsMagicAura,
  PhantasmalForce,
  RayOfEnfeeblement,
  RopeTrick,
  ScorchingRay,
  SeeInvisibility,
  Shatter,
  SpiderClimb,
  Suggestion,
  Web,
  AnimateDead,
  BestowCurse,
  Blink,
  Clairvoyance,
  Counterspell,
  DispelMagic,
  Fear,
  FeignDeath,
  Fireball,
  Fly,
  GaseousForm,
  GlyphOfWarding,
  Haste,
  HypnoticPattern,
  LeomundsTinyHut,
  LightningBolt,
  MagicCircle,
  MajorImage,
  Nondetection,
  PhantomSteed,
  ProtectionFromEnergy,
  RemoveCurse,
  Sending,
  SleetStorm,
  Slow,
  SpeakWithDead,
  StinkingCloud,
  SummonFey,
  SummonUndead,
  Tongues,
  VampiricTouch,
  WaterBreathing,
  Bless,
  CureWounds,
  FaerieFire,
  GuidingBolt,
  ShieldOfFaith,
  Aid,
  LesserRestoration,
  PassWithoutTrace,
  SpiritualWeapon,
  CrusadersMantle,
  Daylight,
  MassHealingWord,
  Revivify,
  SpiritGuardians,
  Bane,
  Command,
  CreateOrDestroyWater,
  DetectEvilAndGood,
  DetectPoisonAndDisease,
  HealingWord,
  InflictWounds,
  PurifyFoodAndDrink,
  Sanctuary,
  AcidSplash,
  BladeWard,
  ChillTouch,
  DancingLights,
  Elementalism,
  FireBolt,
  Light,
  MageHand,
  Mending,
  Message,
  MindSliver,
  MinorIllusion,
  PoisonSpray,
  Prestidigitation,
  RayOfFrost,
  ShockingGrasp,
  Thunderclap,
  TollTheDead,
  TrueStrike,
  Guidance,
  Resistance,
  SacredFlame,
  SpareTheDying,
  Thaumaturgy,
  WordOfRadiance,
  SpeakWithAnimals,
  BeastSense,
  Friends,
  StarryWisp,
  ViciousMockery,
  AnimalFriendship,
  DissonantWhispers,
  Heroism,
  AnimalMessenger,
  CalmEmotions,
  Enthrall,
  HeatMetal,
  LocateAnimalsOrPlants,
  Silence,
  ZoneOfTruth,
  PlantGrowth,
  SpeakWithPlants,
  ThornWhip,
  ProtectionFromPoison,
  ShiningSmite,
  WardingBond,
]
