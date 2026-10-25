import { Abilities } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Spell, SpellRank5, Arcane, Divine, Occult, Primal } from '@simulacrum/ruleset-pf2e/tag'
import { SpellRank5Loadout } from '@simulacrum/ruleset-pf2e/loadout'

export const Banishment = Abilities.defineAbility('spell/banishment', {
  name: 'Banishment',
  description:
    '*Concentrate, Incapacitation, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Divine, Occult, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Banishment',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature that isn't on its home plane\n\n**Defense** Will\n\nYou send the target back to its home plane. The target must attempt a [Will save](characteristic:will). You can spend an extra action while Casting this Spell and add a cost to the spell to give the creature a –2 circumstance penalty to its save. The cost must be a specially gathered object that is anathema to the creature. This spell fails if you aren't on your home plane when you cast it.\n\n**Critical Success** The target resists being banished and you are [stunned 1](content:conditions/stunned).\n\n**Success** The target resists being banished.\n\n**Failure** The target is banished.\n\n**Critical Failure** The target is banished and can't return by any means to the plane it's banished from for 1 week.\n\n**Heightened (9th)** You can target up to 10 creatures. The extra cost affects targets to which it is anathema.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const BreathOfLife = Abilities.defineAbility('spell/breath-of-life', {
  name: 'Breath of Life',
  description: '*Concentrate, Healing, Vitality*\n\n**Tradition** [Divine](trait:spellcasting/divine-spell-list)',
  tags: [Spell, SpellRank5, Divine],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Breath of Life',
      description:
        "**Trigger** A living creature within range would die\n\n**Range** 60 feet\n\n**Target** the triggering creature\n\nYour blessing revives a creature at the moment of its death. You prevent the target from [dying](content:conditions/dying) and restore 5d8 [Hit Points](characteristic:hit-points) to the target. You can't use breath of life if the triggering effect was a [death](content:traits/death) effect or an effect that leaves no remains, such as _disintegrate_.\n\n**Heightened (+2)** The healing increases by 1d8.",
      action: ActionTypes.Reaction,
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const ControlWater = Abilities.defineAbility('spell/control-water', {
  name: 'Control Water',
  description:
    '*Concentrate, Manipulate, Water*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Control Water',
      description:
        '**Range** 500 feet\n\n**Area** 50 feet long by 50 feet wide\n\n**Defense** [Fortitude](characteristic:fortitude) (see text)\n\n**Duration** 1 hour\n\nBy imposing your will upon the water, you can raise or lower the level of water in the chosen area by 10 feet. Creatures that have the water trait and that are in the area when you Cast the Spell must attempt a Fortitude save, with the effects of the [_slow_](ability:spell/slow) spell.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DivineImmolation = Abilities.defineAbility('spell/divine-immolation', {
  name: 'Divine Immolation',
  description: '*Concentrate, Fire, Manipulate, Sanctified, Spirit*\n\n**Tradition** [Divine](trait:spellcasting/divine-spell-list)',
  tags: [Spell, SpellRank5, Divine],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Divine Immolation',
      description:
        '**Range** 120 feet\n\n**Area** 20-foot burst\n\n**Defense** [Reflex](characteristic:reflex)\n\nDivine flames scour creatures within the area. Creatures take 6d6 fire damage and 2d6 [persistent fire damage](content:conditions/persistent-damage). The divine power within the flames scorches the spirit as well; a creature takes spirit damage instead of fire damage from divine immolation if that would be more detrimental to the creature (as determined by the GM).\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes half damage and no persistent damage.\n\n**Failure** The creature takes full damage and persistent damage.\n\n**Critical Failure** The creature takes double damage and double persistent damage.\n\n**Heightened (+1)** The damage increases by 1d6 and persistent damage increases by 1d6.',
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

export const DreamingPotential = Abilities.defineAbility('spell/dreaming-potential', {
  name: 'Dreaming Potential',
  description: '*Concentrate, Manipulate, Mental*\n\n**Tradition** [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Dreaming Potential',
      description:
        "**Cast** 10 minutes\n\n**Range** touch\n\n**Target** 1 willing sleeping creature\n\n**Duration** 8 hours\n\nYou draw the target into a lucid dream where it can explore the endless possibilities of its own potential within the everchanging backdrop of its dreamscape. If it sleeps the full 8 hours uninterrupted, when it wakes, it counts as having spent a day of downtime [retraining](content:playing-the-game/retraining), though it can't use dreaming potential for any retraining that would require either an instructor or specialized knowledge it can't access within the dream.",
      action: ActionTypes.Activity,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const ElementalForm = Abilities.defineAbility('spell/elemental-form', {
  name: 'Elemental Form',
  description:
    '*Concentrate, Manipulate, Polymorph*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Elemental Form',
      description:
        "**Duration** 1 minute\n\nYou call upon the power of the planes to transform into a Medium elemental battle form. When you Cast this Spell, choose a listed element. While in this form, you gain the corresponding trait and the [elemental](content:traits/elemental) trait. You have hands in this battle form and can take [manipulate](content:traits/manipulate) actions. You can Dismiss the spell.\n\nYou gain the following statistics and abilities regardless of which battle form you choose:\n\n- [AC](characteristic:armor-class) = 19 + your level. Ignore your armor's check penalty and [Speed](characteristic:speed) reduction.\n\n- 10 temporary [Hit Points](characteristic:hit-points).\n\n- [Darkvision](content:playing-the-game/darkvision-and-greater-darkvision).\n\n- One or more [unarmed](content:traits/unarmed) melee attacks specific to the battle form you choose, which are the only attacks you can [Strike](content:playing-the-game/strike) with. You're trained with them. Your attack modifier is +18, and your damage bonus is +9. These are Dexterity based (air, fire, or metal) or Strength based (earth, water, or wood). If your corresponding unarmed attack modifier is higher, you can use it instead.\n\n- [Acrobatics](characteristic:skill/acrobatics) (air, fire, or metal) or [Athletics](characteristic:skill/athletics) (earth, water, or wood) modifier of +20; ignore this change if your own modifier is higher.\n\nYou gain specific abilities based on the element you choose:\n\n- **Air** fly 80 feet, movement doesn't trigger reactions; **Melee** ◆ gust, **Damage** 1d4 bludgeoning.\n- **Earth** Speed 20 feet, burrow 20 feet; **Melee** ◆ boulder, **Damage** 2d10 bludgeoning.\n- **Fire** Speed 50 feet; fire resistance 10, weakness 5 to cold and 5 to water; **Melee** ◆ tendril, **Damage** 1d8 fire plus 1d4 [persistent fire](content:conditions/persistent-damage).\n- **Metal** Speed 40 feet, fly 20 feet; Melee ◆ blade ([versatile piercing](content:traits/versatile)), Damage 1d8 slashing plus 1d4 electricity.\n- **Water** Speed 20 feet, swim 60 feet; fire resistance 5; **Melee** ◆ wave, **Damage** 1d12 bludgeoning, and you can spend an action immediately after a hit to push the target 5 feet with the effects of a successful [Shove](content:skills/shove).\n- **Wood** Speed 20 feet, climb 30 feet; **Melee** ◆ branch, **Damage** 2d10 bludgeoning.\n\n**Heightened (6th)** Your battle form is Large and your attacks have 10-foot reach. You instead gain AC = 22 + your level, 15 temporary HP, an attack modifier of +23, a damage bonus of +13, and Acrobatics or Athletics +23.\n\n**Heightened (7th)** Your battle form is Huge and your attacks have 15-foot reach. You instead gain AC = 22 + your level, 20 temporary HP, an attack modifier of +25, a damage bonus of +11, double the number of damage dice (including persistent damage), and Acrobatics or Athletics +25.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const FalseVision = Abilities.defineAbility('spell/false-vision', {
  name: 'False Vision',
  description:
    '*Uncommon, Concentrate, Illusion, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'False Vision',
      description:
        "**Cast** 10 minutes\n\n**Range** touch\n\n**Area** 100-foot burst\n\n**Duration** until your next daily preparations\n\nYou create a false image that fools any attempts to scry on an area. Any [scrying](content:traits/scrying) spell sees, hears, smells, and otherwise detects whatever you wish within the area, rather than what is actually in the area. You can [Sustain](content:playing-the-game/sustain) the spell each round to change the illusion as you desire, including playing out a complex scene. If the scrying spell is of a higher rank than _false vision_, the scryer can attempt a [Perception](characteristic:perception) check to disbelieve the illusion, though even if they're successful, they can't learn what's truly going on in the area.",
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

export const Hallucination = Abilities.defineAbility('spell/hallucination', {
  name: 'Hallucination',
  description:
    '*Illusion, Incapacitation, Manipulate, Mental, Subtle*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Hallucination',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** 1 hour\n\nThe target consistently detects one thing as another, can't detect something that's there, or detects something that's not there, though it doesn't alter their beliefs. You choose which of these effects applies, and you determine the specifics of the hallucination. For example, you could make the target see all elves as humans, be unable to detect the presence of their brother, see their beloved good luck charm on their person even when it isn't, or see a tower in the center of town.\n\nThe target can attempt an initial [Will save](characteristic:will), with effects below. They also receive a Will save to disbelieve the hallucination every time they [Seek](content:playing-the-game/seek) or directly interact with the hallucination. For example, the target could attempt to disbelieve the hallucination each time they interacted with an elf, bumped into their brother accidentally, tried to check their charm, or studied the tower. The target can attempt to disbelieve with a large circumstance bonus in situations determined by the GM, such as if the target attempted to climb the nonexistent tower.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature perceives what you chose until it disbelieves, but it knows what the hallucination is.\n\n**Failure** The creature perceives what you chose until it disbelieves.\n\n**Critical Failure** The creature perceives what you chose until it disbelieves, and it trusts its false senses, taking a –4 circumstance penalty to saves to disbelieve.\n\n**Heightened (6th)** Choose to either target up to 10 creatures or change the spell's duration to until your next daily preparations.\n\n**Heightened (8th)** Choose to either target any number of creatures or change the spell's duration to unlimited.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const HowlingBlizzard = Abilities.defineAbility('spell/howling-blizzard', {
  name: 'Howling Blizzard',
  description:
    '*Air, Cold, Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Howling Blizzard',
      description:
        '**Area** varies\n\n**Defense** basic [Reflex](characteristic:reflex)\n\nFreezing winds extend from your hands, pushing away from you with great force. If you Cast this Spell with 2 actions, it has an area of a 60-foot cone; if you Cast this Spell with 3 actions, it has a range of 500 feet and an area of a 30-foot burst. Each creature in the area takes 10d6 cold damage with a basic Reflex save. Snowdrifts and icy gales fill the area until the start of your next turn, making the area difficult terrain.\n\n**Heightened (+1)** The damage increases by 2d6.',
      action: ActionTypes.VariableActions,
    },
  ],
})

export const IllusoryScene = Abilities.defineAbility('spell/illusory-scene', {
  name: 'Illusory Scene',
  description:
    '*Auditory, Concentrate, Illusion, Manipulate, Olfactory, Visual*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Illusory Scene',
      description:
        "**Cast** 10 minutes\n\n**Range** 500 feet\n\n**Area** 30-foot burst\n\n**Duration** 1 hour\n\nYou craft an imaginary scene that includes up to 10 discrete creatures or objects of various sizes, all of which must be within the spell's area. These elements generate appropriate sounds and smells, and they feel right to the touch. Elements of an illusory scene are incapable of speech. Unlike with the illusory creature spell, creatures in your scene lack combat abilities and statistics. Your scene doesn't include changes to the environment around it, though you can place your scene within the illusory environment of a _mirage_ spell.\n\nWhen you create the scene, you can choose to have it be static or follow a program. Though a static scene is stationary, it includes basic natural movement. For example, wind blowing on an illusory piece of paper would rustle it. A program can be up to 1 minute long and repeats when finished. For instance, you could create a scene of two orcs fighting each other, and the fight would go the same way for each repetition. If you create a loop, the two fighters end up in the same place at the start of the scene and at the end of it, but you can smooth the program so it's hard to tell when the loop ends and begins. Anyone observing the scene for more than a few minutes almost always notices it looping. You're unable to alter the program after you create the illusion.\n\nAny creature that touches any part of the image or uses the [Seek](content:playing-the-game/seek) action to examine it can attempt to disbelieve your illusion. If they interact with a portion of the illusion, they disbelieve only that portion. They disbelieve the entire scene only on a critical success.\n\n**Heightened (6th)** Creatures or objects in your scene can speak. You must speak the specific lines for each actor when creating your program. The spell disguises your voice for each actor.\n\n**Heightened (8th)** As the 6th-rank version, and the duration is unlimited.",
      action: ActionTypes.Activity,
      targeting: {
        target: {
          range: 500,
          area: { type: AreaShape.Sphere, radius: 30 },
          count: 1,
        },
      },
    },
  ],
})

export const ImpalingSpike = Abilities.defineAbility('spell/impaling-spike', {
  name: 'Impaling Spike',
  description:
    '*Concentrate, Manipulate, Metal*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Impaling Spike',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** [Reflex](characteristic:reflex)\n\n**Duration** 1 minute\n\nYou conjure a spike that thrusts up from the earth beneath a target creature, potentially impaling it. The spike is made of cold iron and deals 8d6 piercing damage. The target must attempt a Reflex save.\n\n**Critical Success** The target dodges the spike and is unaffected.\n\n**Success** The target is struck by the spike and takes half damage.\n\n**Failure** The target is impaled through a leg or another non-vital body part. The creature takes full damage and, if it's standing on solid ground, becomes [immobilized](content:conditions/immobilized). It can attempt to [Escape](content:playing-the-game/escape) (the DC is your [spell DC](characteristic:spell-dc)). While it remains impaled, it takes damage from any weakness to cold iron it has at the end of each of its turns.\n\n**Critical Failure** As failure, but the creature is impaled through a vital organ or its center of mass, taking double damage, and it is [off-guard](content:conditions/off-guard) as long as it's impaled.\n\n**Heightened (+1)** The damage increases by 2d6.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const InvokeSpirits = Abilities.defineAbility('spell/invoke-spirits', {
  name: 'Invoke Spirits',
  description:
    '*Concentrate, Emotion, Fear, Manipulate, Mental, Void*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Divine, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Invoke Spirits',
      description:
        "**Range** 120 feet\n\n**Area** 10-foot burst\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nRagged apparitions of the dead rise to stalk the living. They deal 2d4 mental damage and 2d4 void damage to each living creature in the area, with a basic [Will save](characteristic:will). Additionally, creatures that critically fail the save are [frightened 2](content:conditions/frightened) and are [fleeing](content:conditions/fleeing) for 1 round.\n\nOn subsequent rounds, the first time you [Sustain](content:playing-the-game/sustain) the spell each round, you can move the area up to 30 feet within the range of the spell. Living creatures in the new area must attempt saves with the same effects as above, except that critically failing doesn't make them flee.\n\n**Heightened (+2)** The mental damage and void damage each increase by 1d4.",
      action: ActionTypes.TwoActions,
      targeting: {
        target: {
          range: 120,
          area: { type: AreaShape.Sphere, radius: 10 },
          count: 1,
        },
      },
    },
  ],
})

export const MagicPassage = Abilities.defineAbility('spell/magic-passage', {
  name: 'Magic Passage',
  description:
    '*Uncommon, Concentrate, Earth, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Magic Passage',
      description:
        "**Range** touch\n\n**Area** 5-foot-wide, 10-foot-tall, 10-foot-deep section of wooden, plaster, or stone wall\n\n**Duration** 1 hour\n\nYou create a visible tunnel through the wall in the chosen area, replacing the area with empty space. If the wall is thicker than 10 feet, the tunnel ends 10 feet in. Even a small layer of metal in the wall prevents this spell from functioning. This spell doesn't reduce the integrity of the structure. When the spell ends, anyone inside the tunnel is shunted to the nearest exit.\n\n**Heightened (7th)** The tunnel can be up to 20 feet deep. The areas of the wall that contain your tunnel's entrance appear completely normal (unless viewed with truesight or a similar effect), despite the tunnel's existence. The tunnel's entrance functions as a solid wall, but you can specify a password or a trigger (page 303), allowing creatures to enter freely.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const MarinersCurse = Abilities.defineAbility('spell/mariners-curse', {
  name: "Mariner's Curse",
  description:
    '*Concentrate, Curse, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Occult, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: "Mariner's Curse",
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Defense** Will\n\nYou afflict the target with the curse of the roiling, unforgiving sea. The target must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target becomes [sickened 1](content:conditions/sickened). Reducing its sickened condition to 0 ends the curse.\n\n**Failure** The target becomes sickened 1 and can't reduce its sickened condition below 1 while the curse remains. The curse can be lifted by 4th-rank [_cleanse affliction_](ability:spell/cleanse-affliction) or similar magic. Whenever the target is sickened and on the water at least a mile from shore, it is also [slowed 1](content:conditions/slowed).\n\n**Critical Failure** As failure, but the target becomes sickened 2.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const MindProbe = Abilities.defineAbility('spell/mind-probe', {
  name: 'Mind Probe',
  description:
    '*Uncommon, Concentrate, Linguistic, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Mind Probe',
      description:
        "**Cast** 1 minute\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nYou cast your thoughts through a creature's mind, sifting for information. You access the target's memories and knowledge unless it fends you off with a [Will save](characteristic:will).\n\n**Success** The target is unaffected.\n\n**Failure** Each round of the spell's duration, you can [Sustain](content:playing-the-game/sustain) the spell to ask a different question and attempt to uncover the answer. For each question, the target can attempt a [Deception](characteristic:skill/deception) check against your [spell DC](characteristic:spell-dc); if the target succeeds, you don't learn the answer, and on a critical success, the target gives you a false answer that you believe is truthful. Once you've asked the target a given question, asking it again, even with a separate casting of _mind probe_, produces the same result.\n\n**Critical Failure** As failure, and the target takes a –4 circumstance penalty to Deception checks against your questions",
      action: ActionTypes.Activity,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const MoonFrenzy = Abilities.defineAbility('spell/moon-frenzy', {
  name: 'Moon Frenzy',
  description: '*Concentrate, Manipulate, Morph*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Moon Frenzy',
      description:
        "**Range** 30 feet\n\n**Target** up to 5 willing creatures\n\n**Duration** 1 minute\n\nA feral aspect overcomes the targets, filling them with strength and ferocity. Targets gain 5 temporary [Hit Points](characteristic:hit-points), a +10-foot status bonus to their Speeds, and weakness 5 to silver. They also grow vicious fangs and claws, which are [unarmed](content:traits/unarmed) attacks. The fangs deal 2d8 piercing damage; the claws deal 2d6 slashing damage and have the [agile](content:traits/agile) and [finesse](content:traits/finesse) traits. The targets use their highest weapon or unarmed attack proficiency with these attacks, and if they have weapon specialization or greater weapon specialization, they add this damage as well. On a critical hit with one of these unarmed attacks, the creature struck takes 1d4 [persistent bleed damage](content:conditions/persistent-damage).\n\nThe targets can't use [concentrate](content:traits/concentrate) actions unless those actions also have the rage trait, with the exception of [Seek](content:playing-the-game/seek). A creature can attempt to end the spell's effect on itself by using a single action, which has the rage trait, to attempt a [Will save](characteristic:will) against your [spell DC](characteristic:spell-dc); on a success, it ends the spell's effect on itself.\n\nIf a target is in the light of a full moon, it also grows by one size if it were Medium or smaller. This increases the [reach](content:traits/reach) of a Medium or Tiny creature by 5 feet.\n\n**Heightened (6th)** The temporary Hit Points increase to 10, the silver weakness to 10, and the damage dealt by the attacks to three dice.\n\n**Heightened (10th)** The temporary Hit Points increase to 20, the silver weakness to 20, and the damage dealt by the attacks to four dice.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 5 } },
    },
  ],
})

export const NaturesPathway = Abilities.defineAbility('spell/natures-pathway', {
  name: "Nature's Pathway",
  description: '*Uncommon, Concentrate, Manipulate, Mental, Plant, Teleportation*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: "Nature's Pathway",
      description:
        "**Cast** 1 minute\n\nYou step into a living tree with a trunk big enough for you to fit inside it and instantly teleport to any tree within 5 miles that also has a sufficiently large trunk. Once you enter the first tree, you instantly know the rough locations of other sufficiently large trees within range and can exit from the original tree, if you prefer. You can't carry [extradimensional](content:traits/extradimensional) spaces with you; if you attempt to do so, the spell fails.\n\n**Heightened (6th)** The tree you exit can be up to 50 miles away.\n\n**Heightened (8th)** The tree you exit can be up to 500 miles away.\n\n**Heightened (9th)** The tree you exit can be anywhere on the same planet.",
      action: ActionTypes.Activity,
    },
  ],
})

export const PlantForm = Abilities.defineAbility('spell/plant-form', {
  name: 'Plant Form',
  description: '*Concentrate, Manipulate, Plant, Polymorph, Wood*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Plant Form',
      description:
        "**Duration** 1 minute\n\nTaking inspiration from verdant creatures, you transform into a Large plant battle form. When you Cast this Spell, choose a listed battle form. You can substitute a similar specific plant to turn into (such as a pitcher plant instead of a flytrap), but this has no effect on the form's Size or statistics. While in this form, you gain the [plant](content:traits/plant) trait. You can Dismiss the spell.\n\nYou gain the following statistics and abilities regardless of which battle form you choose:\n\n- [AC](characteristic:armor-class) = 19 + your level. Ignore your armor's check penalty and [Speed](characteristic:speed) reduction.\n\n- 12 temporary [Hit Points](characteristic:hit-points).\n\n- Resistance 10 to [poison](content:traits/poison).\n\n- [Low-light vision](content:playing-the-game/low-light-vision).\n\n- One or more [unarmed](content:traits/unarmed) melee attacks specific to the battle form you choose, which are the only attacks you can [Strike](content:playing-the-game/strike) with. You're trained with them. Your attack modifier is +17, and your damage bonus is +11. These attacks are Strength based (for the purpose of the [enfeebled](content:conditions/enfeebled) condition, for example). If your unarmed attack modifier is higher, you can use it instead.\n\n- [Athletics](characteristic:skill/athletics) modifier of +19, unless your own is higher.\n\nYou gain specific abilities based on the plant you choose:\n\n- **Arboreal** Speed 30 feet; Melee ◆ branch ([reach 15 feet](content:traits/reach)), **Damage** 2d10 bludgeoning; Melee ◆ foot, **Damage** 2d8 bludgeoning; you can speak in this form.\n- **Flytrap** Speed 15 feet; resistance 10 to [acid](content:traits/acid); **Melee** ◆ leaf ([reach 10 feet](content:traits/reach)), **Damage** 2d8 piercing, and you can spend an action after a hit to Grab the target.\n\n**Heightened (6th)** Your battle form is Huge, and the reach of your attacks increases by 5 feet. You instead gain AC = 22 + your level, 24 temporary HP, attack modifier +21, damage bonus +16, and Athletics +22.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const ScoutingEye = Abilities.defineAbility('spell/scouting-eye', {
  name: 'Scouting Eye',
  description:
    '*Concentrate, Manipulate, Scrying*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Divine, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Scouting Eye',
      description:
        '**Cast** 1 minute\n\n**Range** see text\n\n**Duration** sustained\n\nYou create an [invisible](content:conditions/invisible), floating eye, 1 inch in diameter, at a location you can see within 500 feet. It sees in all directions with your normal visual senses and continuously transmits what it sees to you.\n\nThe first time you [Sustain](content:playing-the-game/sustain) the spell each round, you can either move the eye up to 30 feet, seeing only things in front of the eye, or move it up to 10 feet, seeing everything in all directions around it. There is no limit to how far from you the eye can move, but the spell ends immediately if you and the eye ever cease to be on the same plane of existence. You can attempt [Seek](content:playing-the-game/seek) actions through the eye if you want to attempt [Perception](characteristic:perception) checks with it. Any damage dealt to the eye destroys it and ends the spell.',
      action: ActionTypes.Activity,
    },
  ],
})

export const Sending = Abilities.defineAbility('spell/sending', {
  name: 'Sending',
  description:
    '*Concentrate, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Divine, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Sending',
      description:
        '**Range** planetary\n\n**Target** 1 creature you know well\n\nYou send the creature a mental message of 25 words or fewer, and it can respond immediately with its own message of 25 words or fewer.',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const ShadowBlast = Abilities.defineAbility('spell/shadow-blast', {
  name: 'Shadow Blast',
  description:
    '*Concentrate, Manipulate, Shadow*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Divine, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Shadow Blast',
      description:
        "**Range** varies\n\n**Area** varies\n\n**Target** basic [Reflex](characteristic:reflex) or Will (target's choice)\n\nYou shape the shadow substance of the Netherworld into a blast. Choose acid, bludgeoning, cold, electricity, fire, force, piercing, slashing, sonic, or spirit damage, and choose a 30-foot cone, a 15-foot burst within 120 feet, or a 50-foot line. The blast deals 6d8 damage of the type you chose to each creature in the area.\n\n**Heightened (+1)** The damage increases by 1d8.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Slither = Abilities.defineAbility('spell/slither', {
  name: 'Slither',
  description:
    '*Concentrate, Manipulate, Shadow*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Slither',
      description:
        "**Range** 120 feet\n\n**Area** 20-foot burst\n\n**Defense** [Reflex](characteristic:reflex)\n\n**Duration** 1 minute\n\nA mass of snakes made of shadow rise up to capture creatures in the area. Each creature in the area when you Cast the Spell takes 3d6 piercing damage and 1d6 [persistent poison damage](content:conditions/persistent-damage) from a biting snake, and it's [grabbed](content:conditions/grabbed) or [restrained](content:conditions/restrained) depending on its Reflex save. A creature that ends its turn in the area must also attempt this save, even if it's already grabbed or restrained by the snakes. You can Dismiss the spell.\n\n**Success** The creature is unaffected.\n\n**Failure** The creature takes full damage and is grabbed by a snake. The snakes' [Escape](content:playing-the-game/escape) DC is equal to your [spell DC](characteristic:spell-dc). A creature can attack a snake to release the creature. A snake's [AC](characteristic:armor-class) is equal to your spell DC, and it's destroyed if it takes 12 or more damage at once. New snakes continually regrow as long as the spell lasts, so destroying snakes doesn't prevent slither from capturing more creatures.\n\n**Critical Failure** As failure, but the creature takes double damage and is restrained by a snake.\n\n**Heightened (+2)** The persistent poison damage increases by 1d6 and snake HP increases by 6.",
      action: ActionTypes.ThreeActions,
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

export const SpeakWithStones = Abilities.defineAbility('spell/speak-with-stones', {
  name: 'Speak with Stones',
  description:
    '*Concentrate, Earth, Manipulate*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Divine, Occult, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Speak with Stones',
      description:
        "**Duration** 1 hour\n\nYou can ask questions of and receive answers from natural or worked stone. While stone is not intelligent, you speak with the natural spirits of the stone, which have a personality colored by the type of stone, as well as by the type of structure the stone is part of, for worked stone. A stone's perspective, perception, and knowledge give it a worldview different enough from a human's that it doesn't consider the same details important. Stones can mostly answer questions about creatures that touched them in the past and what is concealed beneath or behind them.\n\n**Heightened (6th)** The duration is 8 hours.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const SpiritualGuardian = Abilities.defineAbility('spell/spiritual-guardian', {
  name: 'Spiritual Guardian',
  description: '*Concentrate, Manipulate, Sanctified, Spirit*\n\n**Tradition** [Divine](trait:spellcasting/divine-spell-list)',
  tags: [Spell, SpellRank5, Divine],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Spiritual Guardian',
      description:
        "**Range** 120 feet\n\n**Duration** sustained up to 1 minute\n\nA Medium guardian made of magical force appears in an unoccupied space in range. The spiritual guardian is translucent and wields a ghostly echo of one weapon you're wielding or wearing. If you have a deity, the guardian takes the form of one of your deity's attendants or servitors. If you sanctify the spell, the guardian's attacks are sanctified as well.\n\nCreatures can move through the guardian's space but can't end their movement in it. You and your allies can flank with the guardian. The guardian doesn't have any other attributes a creature would normally have, aside from 50 [Hit Points](characteristic:hit-points) that it can't recover by any means and that it can lose only when protecting a creature (see below).\n\nWhen you Cast the Spell and each time you [Sustain](content:playing-the-game/sustain) it, you can have the guardian move to any unoccupied space within 120 feet of you and either attack or protect.\n\n- **Attack** The guardian makes a melee spell attack against an adjacent creature, dealing 3d8 damage on a hit (or double damage on a critical hit). The damage type is the same as the chosen weapon (or any of its types for a versatile weapon). The attack deals spirit damage instead if that would be more detrimental to the creature (as determined by the GM). This attack uses and contributes to your multiple attack penalty.\n\n- **Protect** The guardian protects a creature of your choice. Each time the chosen creature would take damage and the guardian is adjacent to it, the guardian takes the first 10 damage instead of the ally. This protection lasts until you command the guardian to attack or to protect a different creature, or the guardian is destroyed.\n\n**Heightened (+2)** The guardian's damage increases by 1d8, and its Hit Points increase by 20.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const SubconsciousSuggestion = Abilities.defineAbility('spell/subconscious-suggestion', {
  name: 'Subconscious Suggestion',
  description:
    '*Concentrate, Incapacitation, Linguistic, Manipulate, Mental, Subtle*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)\n\n**Lesson** Lesson of Bargains',
  tags: [Spell, SpellRank5, Arcane, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Subconscious Suggestion',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** varies\n\nYou implant a subconscious suggestion deep within the target's mind for them to follow when a trigger you specify occurs (as described on page 303). You suggest a course of action to the target. Your directive must be phrased in such a way as to seem like a logical course of action to the target, and it can't be self-destructive or obviously against the target's self-interest. The target must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected and knows you tried to control it.\n\n**Success** The target is unaffected and thinks you were talking to them normally, not casting a spell on them.\n\n**Failure** The suggestion remains in the target's subconscious until the next time you prepare. If the trigger occurs before then, the target immediately follows your suggestion. The effect has a duration of 1 minute, or until the target has completed a finite suggestion or the suggestion becomes self-destructive or has other obvious negative effects.\n\n**Critical Failure** As failure, but the duration is 1 hour.\n\n**Heightened (9th)** You can target up to 10 creatures.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const SummonCelestial = Abilities.defineAbility('spell/summon-celestial', {
  name: 'Summon Celestial',
  description: '*Concentrate, Holy, Manipulate, Summon*\n\n**Tradition** [Divine](trait:spellcasting/divine-spell-list)',
  tags: [Spell, SpellRank5, Divine],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Celestial',
      description:
        "**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [celestial](content:traits/celestial) trait and whose level is 5 or lower to fight for you. The GM might determine your deity restricts the specific types of celestials you can summon in certain cases. For instance, Calistria doesn't typically allow her followers to summon aeons.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.",
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SummonDragon = Abilities.defineAbility('spell/summon-dragon', {
  name: 'Summon Dragon',
  description:
    '*Concentrate, Manipulate, Summon*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Divine, Occult, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Dragon',
      description:
        "**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [dragon](content:traits/dragon) trait and whose level is 5 or lower to fight for you. If the dragon has a magical tradition trait ([arcane](content:traits/arcane), [divine](content:traits/divine), [occult](content:traits/occult), or [primal](content:traits/primal)), you can summon it only if you're using that tradition to cast summon dragon.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.",
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SummonEntity = Abilities.defineAbility('spell/summon-entity', {
  name: 'Summon Entity',
  description: '*Concentrate, Manipulate, Summon*\n\n**Tradition** [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Entity',
      description:
        '**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [aberration](content:traits/aberration) trait and whose level is 5 or lower to fight for you.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SummonFiend = Abilities.defineAbility('spell/summon-fiend', {
  name: 'Summon Fiend',
  description: '*Concentrate, Manipulate, Summon, Unholy*\n\n**Tradition** [Divine](trait:spellcasting/divine-spell-list)',
  tags: [Spell, SpellRank5, Divine],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Fiend',
      description:
        '**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [fiend](content:traits/fiend) trait and whose level is 5 or lower to fight for you. The GM might determine your deity restricts the specific types of fiends you can summon in certain cases. For instance, archdevils typically allow their followers to summon devils, but not other fiends.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SummonGiant = Abilities.defineAbility('spell/summon-giant', {
  name: 'Summon Giant',
  description: '*Concentrate, Manipulate, Summon*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Giant',
      description:
        '**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [giant](content:traits/giant) trait and whose level is 5 or lower to fight for you.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SummonMonitor = Abilities.defineAbility('spell/summon-monitor', {
  name: 'Summon Monitor',
  description: '*Concentrate, Manipulate, Summon*\n\n**Tradition** [Divine](trait:spellcasting/divine-spell-list)',
  tags: [Spell, SpellRank5, Divine],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Monitor',
      description:
        "**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [monitor](content:traits/monitor) trait and whose level is 5 or lower to fight for you. The GM might determine your deity restricts the specific types of monitors you can summon in certain cases. For instance, Urgathoa typically doesn't allow her followers to summon psychopomps.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.",
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SynapticPulse = Abilities.defineAbility('spell/synaptic-pulse', {
  name: 'Synaptic Pulse',
  description: '*Concentrate, Incapacitation, Manipulate, Mental*\n\n**Tradition** [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Synaptic Pulse',
      description:
        '**Area** 30-foot emanation\n\n**Defense** Will\n\n**Duration** 1 round\n\nYou emit a pulsating mental blast that penetrates the minds of all enemies in the area. Each enemy in the area must attempt a [Will save](characteristic:will).\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature is [stunned 1](content:conditions/stunned).\n\n**Failure** The creature is stunned 2.\n\n**Critical Failure** The creature is stunned for 1 round.',
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

export const TelekineticHaul = Abilities.defineAbility('spell/telekinetic-haul', {
  name: 'Telekinetic Haul',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Telekinetic Haul',
      description:
        '**Range** 120 feet\n\n**Target** 1 unattended object of up to 80 Bulk with no dimension longer than 20 feet\n\n**Duration** sustained up to 1 minute\n\nYou move the target up to 20 feet, potentially suspending it in midair. When you [Sustain](content:playing-the-game/sustain) the spell, you can do so again, or you can shift your telekinetic focus to a different eligible target within range, moving it instead.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 120, count: 1 } },
    },
  ],
})

export const ToxicCloud = Abilities.defineAbility('spell/toxic-cloud', {
  name: 'Toxic Cloud',
  description:
    '*Concentrate, Death, Manipulate, Poison*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Toxic Cloud',
      description:
        '**Range** 120 feet\n\n**Area** 20-foot burst\n\n**Defense** [basic](content:playing-the-game/basic-saving-throws) [Fortitude](characteristic:fortitude)\n\n**Duration** 1 minute\n\nYou conjure a poisonous fog. This functions as [_mist_](ability:spell/mist), except the area moves 10 feet away from you each round. A breathing creature that starts its turn in the area takes 6d8 poison damage with a basic Fortitude save. You can Dismiss the spell.\n\n**Heightened (+1)** The damage increases by 1d8.',
      action: ActionTypes.ThreeActions,
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

export const Truespeech = Abilities.defineAbility('spell/truespeech', {
  name: 'Truespeech',
  description:
    '*Uncommon, Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Divine, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Truespeech',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Duration** 1 hour\n\nThe target can understand all words regardless of language and also speak the languages of other creatures. When in a mixed group of creatures, each time the target speaks, it can choose a creature and speak in a language that creature understands, even if the target doesn't know what language that is.\n\n**Heightened (7th)** The duration is 8 hours.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const UmbralJourney = Abilities.defineAbility('spell/umbral-journey', {
  name: 'Umbral Journey',
  description:
    '*Uncommon, Concentrate, Manipulate, Shadow, Teleportation*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Umbral Journey',
      description:
        '**Cast** 1 minute\n\n**Range** touch\n\n**Target** you and up to 10 willing creatures touched\n\n**Duration** 8 hours\n\nYou move partially into the Netherworld, using its warped nature to speed your travels. Each hour, you cover roughly as much ground as you [normally would in 3 days](content:playing-the-game/travel-speed). The landmarks are vague and symbolic rather than concrete, leaving you within a mile of your intended destination when you Dismiss the spell or its duration ends.',
      action: ActionTypes.Activity,
    },
  ],
})

export const WallOfIce = Abilities.defineAbility('spell/wall-of-ice', {
  name: 'Wall of Ice',
  description:
    '*Cold, Concentrate, Manipulate, Water*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Wall of Ice',
      description:
        "**Range** 120 feet\n\n**Duration** 1 minute\n\nYou sculpt an ice barrier that blocks sight and, once shattered, freezes foes. You create either a 1-foot-thick wall of ice in a straight line up to 60 feet long and 10 feet high (the wall doesn't have to be vertical, but it must be anchored on both sides to a solid surface) or a 1-foot-thick, 10-foot radius hemisphere of ice. The ice that makes up the wall is opaque. If you wish, the wall can be of a smaller length, height, or radius. You must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost.\n\nEach 10-foot-by-10-foot section of the wall has [AC](characteristic:armor-class) 10, Hardness 10, and 40 [Hit Points](characteristic:hit-points), and it's immune to critical hits, cold damage, and precision damage. A section also has weakness to fire 15; a section of the wall destroyed by fire melts, evaporating into water and steam. A section destroyed by means other than fire leaves behind a chilling mass of ice that is [difficult terrain](content:playing-the-game/difficult-terrain) and deals 2d6 cold damage to any creature passing through it.\n\n**Heightened (+2)** The Hit Points of each section of the wall increase by 10, and the cold damage dealt to creatures crossing a destroyed section increases by 1d6.",
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const WallOfStone = Abilities.defineAbility('spell/wall-of-stone', {
  name: 'Wall of Stone',
  description:
    '*Concentrate, Earth, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Primal],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Wall of Stone',
      description:
        "**Range** 120 feet\n\nYou shape a wall of solid stone. You create a 1-inch-thick wall of stone up to 120 feet long, and 20 feet high. You can shape the wall's path, placing each 5 feet of the wall on the border between squares. The wall doesn't need to stand vertically, so you can use it to form a bridge or set of stairs, for example. You must conjure the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost.\n\nEach 10-foot-by-10-foot section of the wall has [AC](characteristic:armor-class) 10, Hardness 14, and 50 [Hit Points](characteristic:hit-points), and it's immune to critical hits and precision damage. A destroyed section of the wall can be moved through, but the rubble created from it is [difficult terrain](content:playing-the-game/difficult-terrain).\n\n**Heightened (+2)** The Hit Points of each section of the wall increase by 15.",
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const WaveOfDespair = Abilities.defineAbility('spell/wave-of-despair', {
  name: 'Wave of Despair',
  description:
    '*Concentrate, Emotion, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank5, Arcane, Occult],
  loadout: SpellRank5Loadout,
  universal: false,
  actions: [
    {
      name: 'Wave of Despair',
      description:
        "**Area** 30-foot cone\n\n**Defense** Will\n\n**Duration** 1 or more rounds\n\nYou inflict despair on creatures in the area. The effects for each creature are determined by its [Will save](characteristic:will).\n\n**Critical Success** The creature is unaffected.\n\n**Success** For 1 round, the creature can't use reactions and must attempt another save at the start of its turn; on a failure, it is [slowed 1](content:conditions/slowed) for that turn as it sobs uncontrollably.\n\n**Failure** As success, but the duration is 1 minute.\n\n**Critical Failure** As failure, and the creature is automatically slowed 1 for 1 minute.\n\n**Heightened (7th)** The area increases to a 60-foot cone.",
      action: ActionTypes.TwoActions,
      targeting: {
        target: {
          range: 0,
          area: { type: AreaShape.Cone, length: 30 },
          count: 1,
        },
      },
    },
  ],
})

export const AllRank5Spells = [
  Banishment,
  BreathOfLife,
  ControlWater,
  DivineImmolation,
  DreamingPotential,
  ElementalForm,
  FalseVision,
  Hallucination,
  HowlingBlizzard,
  IllusoryScene,
  ImpalingSpike,
  InvokeSpirits,
  MagicPassage,
  MarinersCurse,
  MindProbe,
  MoonFrenzy,
  NaturesPathway,
  PlantForm,
  ScoutingEye,
  Sending,
  ShadowBlast,
  Slither,
  SpeakWithStones,
  SpiritualGuardian,
  SubconsciousSuggestion,
  SummonCelestial,
  SummonDragon,
  SummonEntity,
  SummonFiend,
  SummonGiant,
  SummonMonitor,
  SynapticPulse,
  TelekineticHaul,
  ToxicCloud,
  Truespeech,
  UmbralJourney,
  WallOfIce,
  WallOfStone,
  WaveOfDespair,
]
