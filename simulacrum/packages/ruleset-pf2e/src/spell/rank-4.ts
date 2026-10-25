import { Abilities } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Spell, SpellRank4, Arcane, Divine, Occult, Primal } from '@simulacrum/ruleset-pf2e/tag'
import { SpellRank4Loadout } from '@simulacrum/ruleset-pf2e/loadout'

export const AerialForm = Abilities.defineAbility('spell/aerial-form', {
  name: 'Aerial Form',
  description:
    '*Concentrate, Manipulate, Polymorph*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Aerial Form',
      description:
        "**Duration** 1 minute\n\nYou harness your mastery of the sky to reshape your body into a Medium flying animal battle form. When you Cast this Spell, choose a listed battle form. You can decide the specific type of animal (such as an owl or eagle for bird), but this has no effect on the form's Size or statistics. While in this form, you gain the [animal](content:traits/animal) trait. You can Dismiss the spell. You gain specific abilities based on the animal you choose:\n\n- [AC](characteristic:armor-class) = 18 + your level. Ignore your armor's check penalty and [Speed](characteristic:speed) reduction.\n\n- 5 temporary [Hit Points](characteristic:hit-points).\n\n- [Low-light vision](content:playing-the-game/low-light-vision).\n\n- One or more [unarmed](content:traits/unarmed) melee attacks specific to the battle form you choose, which are the only attacks you can [Strike](content:playing-the-game/strike) with. You're trained with them. Your attack modifier is +16, and your damage bonus is +5. These attacks are Dexterity based (for the purpose of the [clumsy](content:conditions/clumsy) condition, for example). If your attack modifier for Dexterity-based unarmed attacks is higher, you can use it instead.\n\n- [Acrobatics](characteristic:skill/acrobatics) modifier of +16, unless your own is higher.\n\nYou also gain specific abilities based on the form you choose:\n\n- **Bat** Speed 20 feet, fly 30 feet; precise echolocation 40 feet; **Melee** ◆ fangs, **Damage** 2d8 piercing; **Melee** ◆ wing ([agile](content:traits/agile)), **Damage** 2d6 bludgeoning.\n- **Bird** Speed 10 feet, fly 50 feet; **Melee** ◆ beak, **Damage** 2d8 piercing; **Melee** ◆ talon ([agile](content:traits/agile)), **Damage** 1d10 slashing.\n- **Pterosaur** Speed 10 feet, fly 40 feet; imprecise scent 30 feet; Melee ◆ beak, Damage 3d6 piercing.\n- **Wasp** Speed 20 feet, fly 40 feet; **Melee** ◆ stinger, **Damage** 1d8 piercing plus 1d6 persistent poison.\n\n**Heightened (5th)** Your battle form is Large and your fly Speed gains a +10-foot status bonus. You instead gain 10 temporary HP, attack modifier +18, damage bonus +8, and Acrobatics +20.\n\n**Heightened (6th)** Your battle form is Huge, your fly Speed gains a +15-foot status bonus, and your attacks have 10-foot reach. You instead gain AC = 21 + your level, 15 temporary HP, attack modifier +21, damage bonus +4 and double damage dice (including [persistent damage](content:conditions/persistent-damage)), and Acrobatics +23.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Clairvoyance = Abilities.defineAbility('spell/clairvoyance', {
  name: 'Clairvoyance',
  description:
    '*Concentrate, Manipulate, Scrying*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Clairvoyance',
      description:
        "**Cast** 1 minute\n\n**Range** 500 feet\n\n**Duration** 10 minutes\n\nYou create an [invisible](content:conditions/invisible) floating eye at a location within range (even if it's outside your line of sight or line of effect). The eye can't move, but you can see in all directions from that point as if using your normal visual senses.",
      action: ActionTypes.Activity,
    },
  ],
})

export const Confusion = Abilities.defineAbility('spell/confusion', {
  name: 'Confusion',
  description:
    '*Concentrate, Emotion, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Confusion',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** 1 minute\n\nYou befuddle your target with strange impulses, causing it to act randomly. The effects are determined by the target's [Will save](characteristic:will). You can Dismiss the spell.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target babbles incoherently and is [stunned 1](content:conditions/stunned).\n\n**Failure** The target is [confused](content:conditions/confused) for 1 minute. It can attempt a new save at the end of each of its turns to end the confusion.\n\n**Critical Failure** The target is confused for 1 minute, with no save to end early.\n\n**Heightened (8th)** You can target up to 10 creatures.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Creation = Abilities.defineAbility('spell/creation', {
  name: 'Creation',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Creation',
      description:
        "**Cast** 1 minute\n\n**Range** 0 feet\n\n**Duration** 1 hour\n\nYou conjure a temporary object from magical energy. It must consist of earthen or plant-derived matter (such as wood, paper, brick, or stone) and be 5 cubic feet or smaller. It can't rely on intricate artistry or complex moving parts, never fulfills a cost or the like, and can't be made of precious materials or materials with a rarity of [uncommon](content:traits/uncommon) or higher. It is obviously temporarily conjured, and thus can't be sold or passed off as a genuine item. The spell gains the appropriate trait for the item created, typically [earth](content:traits/earth), [plant](content:traits/plant), or [wood](content:traits/wood).\n\n**Heightened (5th)** The item is metal and can include common minerals, like feldspar or quartz. The spell gains the [metal](content:traits/metal) trait if used to create a metal object.",
      action: ActionTypes.Activity,
    },
  ],
})

export const DetectScrying = Abilities.defineAbility('spell/detect-scrying', {
  name: 'Detect Scrying',
  description:
    '*Uncommon, Concentrate, Detection, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Detect Scrying',
      description:
        '**Area** 30-foot emanation\n\n**Duration** 1 hour\n\nBy reading trace auras, you detect the presence of [scrying](content:traits/scrying) effects in the area. If _detect scrying_ is higher rank than a scrying effect, you gain a glimpse of the scrying creature and learn its approximate distance and direction.\n\n**Heightened (6th)** The duration is until your next daily preparations.',
      action: ActionTypes.TwoActions,
      targeting: {
        target: {
          range: 0,
          area: { type: AreaShape.Sphere, radius: 30 },
          count: 1,
        },
      },
    },
  ],
})

export const DinosaurForm = Abilities.defineAbility('spell/dinosaur-form', {
  name: 'Dinosaur Form',
  description: '*Concentrate, Manipulate, Polymorph*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Dinosaur Form',
      description:
        "**Duration** 1 minute\n\nYou channel the primal forces of nature to transform into a Large animal battle form, specifically that of a powerful and terrifying dinosaur. When you Cast this Spell, choose a listed battle form. You can decide the specific type of animal, but this has no effect on the form's Size or statistics. While in this form, you gain the [animal](content:traits/animal) and [dinosaur](content:traits/dinosaur) traits. You can Dismiss the spell.\n\nYou gain the following statistics and abilities regardless of which battle form you choose:\n\n- [AC](characteristic:armor-class) = 18 + your level. Ignore your armor's check penalty and [Speed](characteristic:speed) reduction.\n\n- 15 temporary [Hit Points](characteristic:hit-points).\n\n- Low-light vision and imprecise scent 30 feet.\n\n- One or more [unarmed](content:traits/unarmed) melee attacks specific to the battle form you choose, which are the only attacks you can [Strike](content:playing-the-game/strike) with. You're trained with them. Your attack modifier is +16, and your damage bonus is +9. These attacks are Strength based (for the purpose of the [enfeebled](content:conditions/enfeebled) condition, for example). If your unarmed attack modifier is higher, you can use it instead.\n\n- [Athletics](characteristic:skill/athletics) modifier of +18, unless your own is higher.\n\nYou also gain specific abilities based on the form you choose:\n\n- **Ankylosaurus** Speed 25 feet; **Melee** ◆ tail ([backswing](content:traits/backswing), [reach 10 feet](content:traits/reach)), **Damage** 2d6 bludgeoning; **Melee** ◆ foot, **Damage** 2d6 bludgeoning.\n- **Brontosaurus** Speed 25 feet; **Melee** ◆ tail ([reach 15 feet](content:traits/reach)), **Damage** 2d6 bludgeoning; **Melee** ◆ foot, **Damage** 2d8 bludgeoning.\n- **Deinonychus** Speed 40 feet; **Melee** ◆ talon ([agile](content:traits/agile)), **Damage** 2d4 piercing plus 1 [persistent bleed](content:conditions/persistent-damage); **Melee** ◆ jaws, **Damage** 1d10 piercing.\n- **Stegosaurus** Speed 30 feet; **Melee** ◆ tail ([reach 10 feet](content:traits/reach)), **Damage** 2d8 piercing.\n- **Triceratops** Speed 30 feet; **Melee** ◆ horn, **Damage** 2d8 piercing, plus 1d6 [persistent bleed](content:conditions/persistent-damage) on a critical hit; **Melee** ◆ foot, **Damage** 2d6 bludgeoning.\n- **Tyrannosaurus** Speed 30 feet; **Melee** ◆ jaws ([deadly d12](content:traits/deadly), [reach 10 feet](content:traits/reach)), **Damage** 1d12 piercing; **Melee** ◆ tail ([reach 10 feet](content:traits/reach)), **Damage** 1d10 bludgeoning.\n\n**Heightened (5th)** Your battle form is Huge and your attacks have 15-foot reach, or 20-foot reach if they started with 15-foot reach. You instead gain 20 temporary HP, an attack modifier of +18, a damage bonus of +6, double the damage dice, and Athletics +21.\n\n**Heightened (7th)** Your battle form is Gargantuan and your attacks have 20-foot reach, or 25-foot reach if they started with 15-foot reach. You instead gain AC = 21 + your level, 25 temporary HP, an attack modifier of +25, a damage bonus of +15, double the damage dice, and Athletics +25.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DispellingGlobe = Abilities.defineAbility('spell/dispelling-globe', {
  name: 'Dispelling Globe',
  description:
    '*Uncommon, Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Divine, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Dispelling Globe',
      description:
        "**Area** 10-foot burst centered on one corner of your space\n\n**Duration** 10 minutes\n\nYou create an immobile globe around yourself. It attempts to [counteract](content:playing-the-game/counteracting) any spell from outside the globe whose area or targets enter into it, as if the globe were a [_dispel magic_](ability:spell/dispel-magic) spell 1 rank lower than its actual spell rank. If the counteract attempt succeeds, it prevents only the portion of the spell that would have entered the globe (so if the spell also has targets outside the globe, or part of its area is beyond the globe, those targets or that area are affected normally). You must form the sphere in an unbroken open space, so its edges don't pass through any creatures or objects, or the spell is lost (though creatures can enter the globe after the spell is cast).",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DivineWrath = Abilities.defineAbility('spell/divine-wrath', {
  name: 'Divine Wrath',
  description: '*Concentrate, Manipulate, Sanctified, Spirit*\n\n**Tradition** [Divine](trait:spellcasting/divine-spell-list)',
  tags: [Spell, SpellRank4, Divine],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Divine Wrath',
      description:
        "**Range** 120 feet\n\n**Area** 20-foot burst\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nYou channel the fury of divinity against your foes. You deal 4d10 spirit damage to enemies in the area, depending on their Fortitude save.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes half damage.\n\n**Failure** The creature takes full damage and is [sickened](content:conditions/sickened) 1.\n\n**Critical Failure** The creature takes full damage and is sickened 2; while it's sickened, it's also [slowed](content:conditions/slowed) 1.\n\n**Heightened (+1)** The damage increases by 1d10.",
      action: ActionTypes.TwoActions,
      targeting: {
        target: {
          range: 120,
          area: { type: AreaShape.Sphere, radius: 20 },
          count: 1,
        },
      },
    },
  ],
})

export const FireShield = Abilities.defineAbility('spell/fire-shield', {
  name: 'Fire Shield',
  description:
    '*Concentrate, Fire, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Fire Shield',
      description:
        '**Duration** 1 minute\n\nYou create a hovering shield made of fire. As long as the shield persists, its heat grants you cold resistance 5 and makes you immune to mild and severe environmental cold. You can [Raise a Shield](content:playing-the-game/raise-a-shield) with the fire shield as a normal shield to gain a +1 circumstance bonus to [AC](characteristic:armor-class). You can use the [Shield Block](trait:feat/shield-block) reaction with the fire shield, which has Hardness 10, is immune to fire, and has 40 HP (with no Broken Threshold), and its Hardness is halved against effects that have the [water](content:traits/water) trait. If you Shield Block a melee attack that is either an unarmed attack or made by an adjacent attacker, the attacker takes 2d6 fire damage.\n\n**Heightened (+2)** The cold resistance increases by 5, the HP increase by 10, and the fire damage increases by 1d6.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Flicker = Abilities.defineAbility('spell/flicker', {
  name: 'Flicker',
  description:
    '*Concentrate, Manipulate, Teleportation*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Flicker',
      description:
        '**Duration** 1 minute\n\nYou flicker quickly between your current plane and another. You gain resistance 5 to all damage, except force. At the end of each of your turns, you automatically teleport 10 feet in a random direction, as determined by the GM. You can [Sustain](content:playing-the-game/sustain) the spell to teleport in this way.\n\n**Heightened (+2)** The resistance increases by 3.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Fly = Abilities.defineAbility('spell/fly', {
  name: 'Fly',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Divine, Occult, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Fly',
      description:
        '**Range** touch\n\n**Target** 1 creature\n\n**Duration** 5 minutes\n\nThe target can soar through the air, gaining a fly [Speed](characteristic:speed) equal to its Speed or 20 feet, whichever is greater.\n\n**Heightened (7th)** The duration increases to 1 hour.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const HoneyedWords = Abilities.defineAbility('spell/honeyed-words', {
  name: 'Honeyed Words',
  description: '*Concentrate, Manipulate, Mental*\n\n**Tradition** [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Honeyed Words',
      description:
        '**Duration** 10 minutes\n\nFalsehoods pass your lips as smoothly as silk. You gain a +4 status bonus to [Deception](characteristic:skill/deception) checks to [Lie](content:skills/lie) and against [Perception](characteristic:perception) checks to discern if you are telling the truth, and you add your level even if untrained. If the implausibility of your lies prompts a circumstance penalty or a DC increase, reduce that penalty by half or increase it by half.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const HydraulicTorrent = Abilities.defineAbility('spell/hydraulic-torrent', {
  name: 'Hydraulic Torrent',
  description: '*Concentrate, Manipulate, Water*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Hydraulic Torrent',
      description:
        '**Area** 60-foot line\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nA swirling torrent of water manifests along a straight line, battering creatures and unattended objects in its path and possibly [pushing](content:playing-the-game/forced-movement) them away from you. The torrent deals 8d6 bludgeoning damage. Each creature in the area must attempt a basic Fortitude save; unattended objects automatically fail. Creatures and objects that fail are also knocked back 5 feet (10 feet on a critical failure).\n\n**Heightened (+1)** The damage increases by 2d6.',
      action: ActionTypes.TwoActions,
      targeting: {
        target: {
          range: 0,
          area: { type: AreaShape.Line, length: 60, width: 5 },
          count: 1,
        },
      },
    },
  ],
})

export const LiminalDoorway = Abilities.defineAbility('spell/liminal-doorway', {
  name: 'Liminal Doorway',
  description:
    '*Uncommon, Concentrate, Extradimensional, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Liminal Doorway',
      description:
        '**Cast** 10 minutes\n\n**Range** touch\n\n**Duration** 8 hours\n\nYou draw a chalk doorway on an unbroken surface, which opens into an extradimensional space. Any creature treating the drawing as an actual door can [Interact](content:playing-the-game/interact) to touch the doorknob and pass through. The warped, chalk-drawn room beyond the door is 20 feet in width, depth, and height. The space is unadorned and empty, with chalk lines indicating the corners of the walls.\n\nIf the drawing is scrubbed away, the underlying surface is broken, or a creature attempts to enter the space that would put it over capacity, the space begins to collapse. The space ejects one creature at random each round, depositing it on the nearest open ground, until all creatures are returned outside.',
      action: ActionTypes.Activity,
    },
  ],
})

export const Mirage = Abilities.defineAbility('spell/mirage', {
  name: 'Mirage',
  description:
    '*Uncommon, Concentrate, Illusion, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Mirage',
      description:
        "**Cast** 10 minutes\n\n**Range** 500 feet\n\n**Area** 50-foot burst\n\n**Duration** until your next daily preparations\n\nYou create an illusion that causes natural terrain to look, sound, feel, and smell like a different kind of terrain. This doesn't disguise any structures or creatures in the area.\n\nAny creature that touches the illusion or uses the [Seek](content:playing-the-game/seek) action to examine it can attempt to disbelieve your illusion.\n\n**Heightened (5th)** Your image can also disguise structures or create illusory structures (but still doesn't disguise creatures).",
      action: ActionTypes.Activity,
      targeting: {
        target: {
          range: 500,
          area: { type: AreaShape.Sphere, radius: 50 },
          count: 1,
        },
      },
    },
  ],
})

export const MountainResilience = Abilities.defineAbility('spell/mountain-resilience', {
  name: 'Mountain Resilience',
  description:
    '*Concentrate, Earth, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Mountain Resilience',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Duration** 20 minutes\n\nThe target's skin hardens like the stone of a mountain face. It gains resistance 5 to physical damage, except adamantine. Each time the target is hit by a bludgeoning, piercing, or slashing attack, _mountain resilience's_ duration decreases by 1 minute.\n\n**Heightened (6th)** The resistance increases to 10.\n\n**Heightened (8th)** The resistance increases to 15.\n\n**Heightened (10th)** The resistance increases to 20.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Nightmare = Abilities.defineAbility('spell/nightmare', {
  name: 'Nightmare',
  description:
    '*Concentrate, Illusion, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Nightmare',
      description:
        '**Cast** 10 minutes\n\n**Range** planetary\n\n**Target** 1 creature you know by name\n\n**Defense** Will\n\n**Duration** 1 day\n\nYou send disturbing nightmares to your target. The next time the target falls asleep, it must attempt a [Will save](characteristic:will). If you know the target only by name and have never met them, the target gets a +4 circumstance bonus to the Will save.\n\n**Critical Success** The target is unaffected and is temporarily immune for 1 week.\n\n**Success** The target has the nightmares but has no adverse effects other than unpleasant memories.\n\n**Failure** The target has the nightmares and awakens [fatigued](content:conditions/fatigued).\n\n**Critical Failure** The target has the nightmares, awakens fatigued, and is [drained](content:conditions/drained) 2 until it is no longer fatigued.',
      action: ActionTypes.Activity,
    },
  ],
})

export const OutcastsCurse = Abilities.defineAbility('spell/outcasts-curse', {
  name: "Outcast's Curse",
  description:
    '*Concentrate, Curse, Manipulate, Mental, Misfortune*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Divine, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: "Outcast's Curse",
      description:
        '**Range** touch\n\n**Target** 1 creature\n\n**Defense** Will\n\nYou afflict the target with a curse that makes its presence abrasive and off-putting. The target must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** For 10 minutes, the target must roll twice and use the worse result whenever attempting a [Deception](characteristic:skill/deception), [Diplomacy](characteristic:skill/diplomacy), [Intimidation](characteristic:skill/intimidation), or [Performance](characteristic:skill/performance) check, and creatures they encounter have an initial attitude toward them of one step worse (for instance, [unfriendly](content:conditions/unfriendly) instead of [indifferent](content:conditions/indifferent)).\n\n**Failure** As success, but the effect is permanent.\n\n**Critical Failure** As failure, and creatures that the target encounters have an initial attitude toward them of two steps worse.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const PeacefulBubble = Abilities.defineAbility('spell/peaceful-bubble', {
  name: 'Peaceful Bubble',
  description:
    '*Uncommon, Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Peaceful Bubble',
      description:
        "**Cast** 10 minutes\n\n**Range** touch\n\n**Area** 100-foot burst\n\n**Duration** 24 hours\n\nAn opaque shell of drifting, iridescent runes covers the area, creating a bubble. You can choose to make the burst smaller, in 10-foot increments. The runes don't block travel, but those inside the bubble can't perceive those outside it and vice versa. [Detection](content:traits/detection) and [scrying](content:traits/scrying) effects are likewise blocked.\n\nCreatures sleeping within the bubble are immune to dreams sent by spells. Those sleeping 8 hours reduce their [doomed](content:conditions/doomed) condition by 2 instead of 1.",
      action: ActionTypes.Activity,
      targeting: {
        target: {
          range: 0,
          area: { type: AreaShape.Sphere, radius: 100 },
          count: 1,
        },
      },
    },
  ],
})

export const PlanarTether = Abilities.defineAbility('spell/planar-tether', {
  name: 'Planar Tether',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Divine, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Planar Tether',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** varies\n\nYou stitch the target to its current plane. While the target is affected by _planar tether_, the spell attempts to [counteract](content:playing-the-game/counteracting) any [teleportation](content:traits/teleportation) effect that would move the target, or any effect that would transport it to a different plane. _Planar tether's_ duration is determined by the target's [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The duration is 1 minute.\n\n**Failure** The duration is 10 minutes.\n\n**Critical Failure** The duration is 1 hour.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const ReadOmens = Abilities.defineAbility('spell/read-omens', {
  name: 'Read Omens',
  description:
    '*Uncommon, Concentrate, Manipulate, Prediction*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Divine, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Read Omens',
      description:
        '**Cast** 10 minutes\n\nYou peek into the future. Choose a particular goal or activity you plan to engage in within 1 week, or an event you expect might happen within 1 week. You learn a cryptic clue or piece of advice that could help with the chosen event, often in the form of a rhyme or omen.',
      action: ActionTypes.Activity,
    },
  ],
})

export const RewriteMemory = Abilities.defineAbility('spell/rewrite-memory', {
  name: 'Rewrite Memory',
  description: '*Uncommon, Concentrate, Manipulate, Mental*\n\n**Tradition** [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Rewrite Memory',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** unlimited\n\nYou alter the target's memories by erasing a memory, enhancing a memory's clarity, altering a memory, or adding a false memory. The target can attempt a [Will save](characteristic:will) to resist the spell.\n\n**Critical Success** The target is unaffected and realizes you tried to alter its memory.\n\n**Success** The target is unaffected but thinks your spell was something harmless instead of _rewrite memory_, unless it identifies the spell.\n\n**Failure** During the first 5 minutes of the spell's duration, you can [Sustain](content:playing-the-game/sustain) the spell to modify a memory once each round. When you do, you imagine up to 6 seconds of memory to modify, to a maximum of 5 continuous minutes of memory.\n\nAny memories you've altered remain changed as long as the spell is active. If the target moves out of range before the 5 minutes is up, you can't alter any further memories.\n\n**Heightened (6th)** You can Cast the Spell on a willing target to suppress all memory of a particular topic, detailed in 50 words or fewer. The effect is permanent, and it patches these omissions with an indistinct haze.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const ShapeStone = Abilities.defineAbility('spell/shape-stone', {
  name: 'Shape Stone',
  description:
    '*Concentrate, Earth, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Shape Stone',
      description:
        '**Range** touch\n\n**Target** cube of stone 10 feet across or smaller\n\nYou shape the stone into a rough shape of your choice. The shaping process is too crude to produce intricate parts, fine details, moving pieces, or the like. Any creatures standing atop the stone when you reshape it must each attempt a [Reflex](characteristic:reflex) save or [Acrobatics](characteristic:skill/acrobatics) check.\n\n**Success** The creature is unaffected.\n\n**Failure** The creature falls [prone](content:conditions/prone) atop the stone.\n\n**Critical Failure** The creature falls off the stone (if applicable) and lands prone.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Suggestion = Abilities.defineAbility('spell/suggestion', {
  name: 'Suggestion',
  description:
    '*Concentrate, Incapacitation, Linguistic, Manipulate, Mental, Subtle*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Suggestion',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** varies\n\nYour honeyed words are difficult for creatures to resist. You suggest a course of action to the target, which must be phrased in such a way as to seem like a logical course of action to the target and can't be self-destructive or obviously against the target's self-interest. The target must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected and knows you tried to control it using a spell.\n\n**Success** The target is unaffected.\n\n**Failure** The target immediately follows your suggestion. The spell has a duration of 1 minute, or until the target has completed a finite suggestion or the suggestion becomes self-destructive or has other obvious negative effects.\n\n**Critical Failure** As failure, but the base duration is 1 hour.\n\n**Heightened (8th)** You can target up to 10 creatures.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const TalkingCorpse = Abilities.defineAbility('spell/talking-corpse', {
  name: 'Talking Corpse',
  description:
    '*Uncommon, Concentrate, Manipulate*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Divine, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Talking Corpse',
      description:
        "**Cast** 10 minutes\n\n**Range** touch\n\n**Target** 1 corpse\n\n**Defense** Will\n\n**Duration** 10 minutes\n\nYou grant the target corpse a semblance of life, which it uses to speak the answers to three questions posed to it. This spell calls on the physical body's latent memories rather than summoning back the deceased's spirit, so the corpse must be mostly intact for the spell to function. The more damage the corpse has taken, the more inaccurate or patchwork its answers are, and it must have a throat and mouth to speak at all. If anyone has previously cast this spell on the corpse in the last week, the spell automatically fails. The corpse can attempt a [Will save](characteristic:will) to resist answering the questions using the statistics of the original creature at its time of death, with the following effects.\n\n**Critical Success** The target can lie or refuse to answer, and the target's spirit haunts you for 24 hours, bothering you and causing you to be unable to gain any rest for that time.\n\n**Success** The target can provide false information or refuse to answer your questions.\n\n**Failure** The target must answer truthfully, but its answers can be brief, cryptic, and repetitive. It can still mislead you or attempt to stall so that the spell's duration runs out before you can ask all your questions.\n\n**Critical Failure** As failure, but the target's answers are more direct and less repetitive, though still cryptic. It takes a –2 status penalty to [Deception](characteristic:skill/deception) checks to deceive or mislead you.",
      action: ActionTypes.Activity,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Telepathy = Abilities.defineAbility('spell/telepathy', {
  name: 'Telepathy',
  description:
    '*Concentrate, Linguistic, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Telepathy',
      description:
        "**Duration** 10 minutes\n\nYou can communicate telepathically with creatures within 30 feet. Once you establish a connection by communicating with a creature, the communication is two-way. You can communicate with only creatures that share a language with you.\n\n**Heightened (6th)** You can communicate telepathically with creatures using shared mental imagery even if you don't share a language; _telepathy_ loses the [linguistic](content:traits/linguistic) trait.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Translocate = Abilities.defineAbility('spell/translocate', {
  name: 'Translocate',
  description:
    '*Concentrate, Manipulate, Teleportation*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Translocate',
      description:
        "**Range** 120 feet\n\nYou instantly transport yourself and any items you're wearing and holding from your current space to an unoccupied space within range you can see. If this would bring another creature with you—even if you're carrying it in an [extradimensional](content:traits/extradimensional) container—the spell is lost.\n\n**Heightened (5th)** The range increases to 1 mile. You don't need to be able to see your destination, as long as you have been there in the past and know its relative location and distance from you. You are then temporarily immune for 1 hour.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const UnfetteredMovement = Abilities.defineAbility('spell/unfettered-movement', {
  name: 'Unfettered Movement',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Divine, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Unfettered Movement',
      description:
        "**Range** touch\n\n**Target** 1 creature touched\n\n**Duration** 10 minutes\n\nYou repel hindrances that would affect a creature. While under this spell's effect, the target ignores effects that would give them a circumstance penalty to [Speed](characteristic:speed). When they attempt to [Escape](content:playing-the-game/escape) an effect that has them [immobilized](content:conditions/immobilized), [grabbed](content:conditions/grabbed), or [restrained](content:conditions/restrained), they automatically succeed unless the effect is [magical](content:traits/magical) and of a higher rank than the _unfettered movement_ spell.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const VaporForm = Abilities.defineAbility('spell/vapor-form', {
  name: 'Vapor Form',
  description:
    '*Air, Concentrate, Manipulate, Polymorph*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Vapor Form',
      description:
        "**Range** touch\n\n**Target** 1 willing creature\n\n**Duration** 5 minutes\n\nThe target transforms into a vaporous state. In this state, the target is amorphous. It loses any item bonus to [AC](characteristic:armor-class) and all other effects and bonuses from armor, and it uses its proficiency modifier for unarmored defense. It gains resistance 8 to physical damage and is immune to precision damage. It can't cast spells, activate items, or use actions that have the attack or manipulate trait. It gains a fly [Speed](characteristic:speed) of 10 feet and can slip through tiny cracks. The target can Dismiss the spell.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const VisionOfDeath = Abilities.defineAbility('spell/vision-of-death', {
  name: 'Vision of Death',
  description:
    '*Concentrate, Death, Emotion, Fear, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Occult],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Vision of Death',
      description:
        "**Range** 120 feet\n\n**Target** 1 living creature\n\n**Defense** Will\n\nYou force the target to see a vision of its own death. It takes 8d6 mental damage with a [Will save](characteristic:will). If the target is reduced to 0 HP by this spell, its vision becomes reality and kills it instantly.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes half damage and is [frightened 1](content:conditions/frightened).\n\n**Failure** The target takes full damage and is frightened 2.\n\n**Critical Failure** The target takes double damage, is frightened 4, and is [fleeing](content:conditions/fleeing) for as long as it's frightened.\n\n**Heightened (+1)** The damage increases by 2d6.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 120, count: 1 } },
    },
  ],
})

export const VitalBeacon = Abilities.defineAbility('spell/vital-beacon', {
  name: 'Vital Beacon',
  description:
    '*Concentrate, Healing, Manipulate, Vitality*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Divine, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Vital Beacon',
      description:
        '**Cast** 1 minute\n\n**Duration** until your next daily preparations\n\nVitality radiates outward from you, allowing others to supplicate and receive healing. Once per round, either you or an ally can use an [Interact](content:playing-the-game/interact) action to supplicate and lay hands upon you to regain [Hit Points](characteristic:hit-points). Each time the beacon heals someone, it decreases in strength. It restores 4d10 Hit Points to the first creature, 4d8 Hit Points to the second, 4d6 Hit Points to the third, and 4d4 Hit Points to the fourth, after which the spell ends. You can have only one _vital beacon_ active at a time.\n\n**Heightened (+1)** The beacon restores one additional die of HP each time it heals, using the normal die size for that step.',
      action: ActionTypes.Activity,
    },
  ],
})

export const WallOfFire = Abilities.defineAbility('spell/wall-of-fire', {
  name: 'Wall of Fire',
  description:
    '*Concentrate, Fire, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Wall of Fire',
      description:
        "**Range** 120 feet\n\n**Duration** 1 minute\n\nYou raise a blazing wall that burns creatures passing through it. You create either a 5-foot-thick wall of flame in a straight line up to 60 feet long and 10 feet high, or a 5-foot-thick, 10-foot-radius ring of flame with the same height. The wall stands vertically in either form; if you wish, the wall can be of a shorter length or height. Everything on each side of the wall is concealed from creatures on the opposite side. Any creature that crosses the wall or is occupying the wall's area at the start of its turn takes 4d6 fire damage.\n\n**Heightened (+1)** The fire damage increases by 1d6.",
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const WeaponStorm = Abilities.defineAbility('spell/weapon-storm', {
  name: 'Weapon Storm',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank4, Arcane, Primal],
  loadout: SpellRank4Loadout,
  universal: false,
  actions: [
    {
      name: 'Weapon Storm',
      description:
        "**Area** 30-foot cone or 10-foot emanation\n\n**Defense** [Reflex](characteristic:reflex)\n\nYou swing a weapon you're holding, and the weapon magically multiplies into duplicates that swipe at all creatures in either a cone or an emanation. This flurry deals four dice of damage to creatures in the area. This damage has the same type as the weapon and uses the same die size. Determine the die size as if you were attacking with the weapon; for instance, if you were wielding a two-hand weapon in both hands, you'd use its [two-hand](content:traits/two-hand) damage die.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The target takes half damage.\n\n**Failure** The target takes full damage.\n\n**Critical Failure** The target takes double damage and is subject to the weapon's [critical specialization effect](content:equipment/critical-specialization).\n\n**Heightened (+1)** Add another damage die.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const AllRank4Spells = [
  AerialForm,
  Clairvoyance,
  Confusion,
  Creation,
  DetectScrying,
  DinosaurForm,
  DispellingGlobe,
  DivineWrath,
  FireShield,
  Flicker,
  Fly,
  HoneyedWords,
  HydraulicTorrent,
  LiminalDoorway,
  Mirage,
  MountainResilience,
  Nightmare,
  OutcastsCurse,
  PeacefulBubble,
  PlanarTether,
  ReadOmens,
  RewriteMemory,
  ShapeStone,
  Suggestion,
  TalkingCorpse,
  Telepathy,
  Translocate,
  UnfetteredMovement,
  VaporForm,
  VisionOfDeath,
  VitalBeacon,
  WallOfFire,
  WeaponStorm,
]
