import { Abilities } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/tag'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'

export const AgileFeet = Abilities.defineAbility('spell/agile-feet', {
  name: 'Agile Feet',
  description: '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Travel',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Agile Feet',
      description:
        '**Duration** until the end of the current turn\n\nThe blessings of your god make your feet faster and your movements more fluid. You gain a +5-foot status bonus to your [Speed](characteristic:speed) and ignore [difficult terrain](content:playing-the-game/difficult-terrain). As part of casting agile feet, you can [Step](content:playing-the-game/step), [Stride](content:playing-the-game/stride), or [Tumble Through](content:skills/tumble-through); you can instead [Burrow](content:playing-the-game/burrow), [Climb](content:skills/climb), [Fly](content:playing-the-game/fly), or [Swim](content:skills/swim) if you have the appropriate Speed.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const AppearanceOfWealth = Abilities.defineAbility('spell/appearance-of-wealth', {
  name: 'Appearance of Wealth',
  description: '*Uncommon, Cleric, Concentrate, Focus, Illusion, Manipulate*\n\n**Domain** Wealth',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Appearance of Wealth',
      description:
        "**Range** 30 feet\n\n**Area** 5-foot burst\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nYou create a brief vision of immense wealth filling the spell's area. Each creature within 20 feet of the area that could be enticed by material wealth must attempt a [Will saving throw](characteristic:will). A creature that enters the area automatically disbelieves the illusion, and disbelieving the illusion ends any [fascinated](content:conditions/fascinated) condition imposed by the spell. As long as you [Sustain](content:playing-the-game/sustain) the spell, other creatures react to the treasure like they would any other illusion, but they are not at risk of becoming fascinated.\n\n**Critical Success** The creature disbelieves the illusion and is unaffected by it.\n\n**Success** The creature is fascinated by the wealth until it has completed its first action on its next turn.\n\n**Failure** The creature is fascinated by the illusion.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, area: { type: AreaShape.Sphere, radius: 5 }, count: 1 } },
    },
  ],
})

export const AthleticRush = Abilities.defineAbility('spell/athletic-rush', {
  name: 'Athletic Rush',
  description: '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Might',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Athletic Rush',
      description:
        "**Duration** 1 round\n\nYour body fills with physical power and skill. You gain a +10- foot status bonus to [Speed](characteristic:speed) and a +2 status bonus to [Athletics](characteristic:skill/athletics) checks. As a part of Casting this Spell, you can use a [Stride](content:playing-the-game/stride), [Leap](content:playing-the-game/leap), [Climb](content:skills/climb), or [Swim](content:skills/swim) action. The spell's bonuses apply during that action.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const BitOfLuck = Abilities.defineAbility('spell/bit-of-luck', {
  name: 'Bit of Luck',
  description: '*Uncommon, Cleric, Concentrate, Focus, Fortune, Manipulate*\n\n**Domain** Luck',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Bit of Luck',
      description:
        "**Range** 30 feet\n\n**Target** 1 willing creature\n\n**Duration** 1 minute\n\nYou tilt the scales of luck slightly to protect a creature from disaster. When the target would attempt a saving throw, it can roll twice and use the better result. Once it does this, the spell ends. If you cast _bit of luck_ again, any previous bit of luck you cast that's still in effect ends. After a creature has been targeted with _bit of luck_, it becomes temporarily immune for 24 hours.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const CharmingTouch = Abilities.defineAbility('spell/charming-touch', {
  name: 'Charming Touch',
  description: '*Uncommon, Cleric, Emotion, Focus, Incapacitation, Manipulate, Mental, Subtle*\n\n**Domain** Passion',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Charming Touch',
      description:
        "**Range** touch\n\n**Target** 1 creature that could find you attractive\n\n**Defense** Will\n\n**Duration** 10 minutes\n\nYou infuse your target with attraction, causing it to act friendlier toward you. The target attempts a [Will save](characteristic:will). It gains a +4 circumstance bonus to this save if you or your allies recently threatened or were hostile to it.\n\n**Critical Success** The target is unaffected and aware you tried to charm it.\n\n**Success** The target is unaffected but thinks your spell was something harmless instead of charming touch, unless it identifies the spell (see Identifying Spells on page 303).\n\n**Failure** The target's attitude becomes [friendly](content:conditions/friendly) toward you. If it was friendly, it becomes [helpful](content:conditions/helpful). It can't use [hostile actions](content:spells/hostile-actions) against you. If you use a hostile action against the target, the spell ends. You can Dismiss the spell. After the spell ends, the target doesn't necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations. If it doesn't realize you charmed it, you could potentially convince it to continue being your friend via mundane means.\n\n**Critical Failure** As failure, but the target is helpful.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const CloakOfShadow = Abilities.defineAbility('spell/cloak-of-shadow', {
  name: 'Cloak of Shadow',
  description: '*Uncommon, Aura, Cleric, Darkness, Focus, Manipulate, Shadow*\n\n**Domain** Darkness',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Cloak of Shadow',
      description:
        "**Range** touch\n\n**Target** 1 willing creature\n\n**Duration** 1 minute\n\nYou drape the target in a mantle of swirling shadows that make it harder to see. The cloak reduces [bright light](content:playing-the-game/bright-light) within a 20-foot [emanation](content:playing-the-game/emanation) to [dim light](content:playing-the-game/dim-light). This is a form of magical [darkness](content:traits/darkness) and can therefore overcome non-magical light or attempt to [counteract](content:playing-the-game/counteracting) magical light.\n\nThe target can use [concealed](content:conditions/concealed) condition gained from the shadows to [Hide](content:skills/hide), though observant creatures can still follow the moving aura of shadow, making it difficult for the target to become completely [undetected](content:conditions/undetected). The target can use an [Interact](content:playing-the-game/interact) action to remove the cloak and leave it behind as a decoy, where it remains, reducing light for the rest of the spell's duration. If anyone picks up the cloak after it's been removed by the original target, the cloak evaporates and the spell ends.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const CreativeSplash = Abilities.defineAbility('spell/creative-splash', {
  name: 'Creative Splash',
  description: '*Uncommon, Cleric, Concentrate, Focus, Illusion, Manipulate, Visual*\n\n**Domain** Creation',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Creative Splash',
      description:
        '**Range** 30 feet\n\n**Area** 5-foot burst\n\n**Defense** Will\n\n**Duration** varies\n\nA deluge of paint or colorful illusions descend on the area, reflecting your personal creative specialty. Roll 1d4 to determine the color of the illusion. Each creature in the area must succeed at a [Will save](characteristic:will) or take the effect listed on the table for the color.\n\n## Creative Splash\n\n| **1d4** | **Color** | **Failure** | **Critical Failure** |\n|---|---|---|---|\n| 1 | White | [Dazzled](content:conditions/dazzled) 1 round | Dazzled 1 minute |\n| 2 | Red | [Enfeebled 1](content:conditions/enfeebled) for 1 round | Enfeebled 2 for 1 round |\n| 3 | Yellow | [Frightened 1](content:conditions/frightened) | Frightened 2 |\n| 4 | Blue | [Clumsy 1](content:conditions/clumsy) for 1 round | Clumsy 2 for 1 round |',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, area: { type: AreaShape.Sphere, radius: 5 }, count: 1 } },
    },
  ],
})

export const CryOfDestruction = Abilities.defineAbility('spell/cry-of-destruction', {
  name: 'Cry of Destruction',
  description: '*Uncommon, Cleric, Concentrate, Focus, Manipulate, Sonic*\n\n**Domain** Destruction',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Cry of Destruction',
      description:
        "**Area** 15-foot cone\n\n**Defense** [basic](content:playing-the-game/basic-saving-throws) [Fortitude](characteristic:fortitude)\n\nYour voice booms, smashing what's in front of you. Each creature and unattended object in the area takes 1d8 sonic damage. If you already dealt damage to an enemy this turn with a [Strike](content:playing-the-game/strike) or spell, increase the damage dice from this spell to d12s.\n\n**Heightened (+1)** The damage increases by 1d8.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Cone, length: 15 }, count: 1 } },
    },
  ],
})

export const DazzlingFlash = Abilities.defineAbility('spell/dazzling-flash', {
  name: 'Dazzling Flash',
  description: '*Uncommon, Cleric, Concentrate, Focus, Light, Manipulate, Visual*\n\n**Domain** Sun',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Dazzling Flash',
      description:
        '**Area** 15-foot cone\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nYou raise your religious symbol and create a blinding flash of light. Each creature in the area must attempt a Fortitude save.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature is [dazzled](content:conditions/dazzled) for 1 round.\n\n**Failure** The creature is [blinded](content:conditions/blinded) for 1 round and dazzled for 1 minute. The creature can spend an [Interact](content:playing-the-game/interact) action rubbing its eyes to end the blinded condition.\n\n**Critical Failure** The creature is blinded for 1 round and dazzled for 1 hour.\n\n**Heightened (3rd)** The area increases to a 30-foot cone.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Cone, length: 15 }, count: 1 } },
    },
  ],
})

export const DeathsCall = Abilities.defineAbility('spell/deaths-call', {
  name: "Death's Call",
  description: '*Uncommon, Cleric, Concentrate, Focus*\n\n**Domain** Death',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Death's Call",
      description:
        "**Trigger** A living creature within 20 feet of you dies, or an undead creature within 20 feet of you is destroyed\n\n**Duration** 1 minute\n\nSeeing another pass from this world invigorates you. You gain temporary [Hit Points](characteristic:hit-points) equal to the triggering creature's level plus your spellcasting attribute modifier. If the triggering creature was [undead](content:traits/undead), double the number of temporary Hit Points you gain. These last for the duration of the spell, and the spell ends if all the temporary Hit Points are depleted earlier.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const FaceInTheCrowd = Abilities.defineAbility('spell/face-in-the-crowd', {
  name: 'Face in the Crowd',
  description: '*Uncommon, Cleric, Focus, Manipulate, Visual*\n\n**Domain** Cities',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Face in the Crowd',
      description:
        "**Duration** 1 minute\n\nWhile in a crowd of roughly similar creatures, your appearance becomes bland and nondescript. You gain a +2 status bonus to [Deception](characteristic:skill/deception) and [Stealth](characteristic:skill/stealth) checks to go incognito among the crowd, and you ignore [difficult terrain](content:playing-the-game/difficult-terrain) caused by the crowd. This counts as setting up a disguise for the [Impersonate](content:skills/impersonate) use of Deception and you add your level even if you're untrained.\n\n**Heightened (3rd)** The spell gains a range of 10 feet and can target up to 10 creatures.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const FireRay = Abilities.defineAbility('spell/fire-ray', {
  name: 'Fire Ray',
  description: '*Uncommon, Attack, Cleric, Concentrate, Fire, Focus, Manipulate*\n\n**Domain** Fire',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Fire Ray',
      description:
        "**Range** 60 feet\n\n**Target** 1 creature\n\n**Defense** [AC](characteristic:armor-class)\n\n**Duration** until the end of the target's next turn\n\nA blazing band of fire arcs through the air, lighting your opponent and the ground they stand upon on fire. Make a [spell attack roll](characteristic:spell-attack) against the target's AC. The ray deals 2d6 fire damage on a hit (or double damage on a critical hit). On any result other than a critical failure, the ground in the target's space catches fire, dealing 1d6 fire damage to each creature that ends its turn in one of the squares.\n\n**Heightened (+1)** The ray's initial damage increases by 2d6, and the fire damage dealt by the burning space increases by 1d6.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const HealersBlessing = Abilities.defineAbility('spell/healers-blessing', {
  name: "Healer's Blessing",
  description: '*Uncommon, Cleric, Concentrate, Focus*\n\n**Domain** Healing',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Healer's Blessing",
      description:
        "**Range** 30 feet\n\n**Target** 1 willing living creature\n\n**Duration** 1 minute\n\nYour words bless a creature with an enhanced connection to vital energy. When the target regains [Hit Points](characteristic:hit-points) from a [healing](content:traits/healing) [vitality](content:traits/vitality) spell, it regains 2 additional Hit Points.\n\nThe target regains additional Hit Points from _healer's blessing_ only the first time it regains HP from a given healing spell, so a spell that heals the creature repeatedly over a duration would restore additional Hit Points only once, when they are first healed.\n\n**Heightened (+1)** The additional healing increases by 2 HP.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const HurtlingStone = Abilities.defineAbility('spell/hurtling-stone', {
  name: 'Hurtling Stone',
  description: '*Uncommon, Attack, Cleric, Earth, Focus, Manipulate*\n\n**Domain** Earth',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Hurtling Stone',
      description:
        "**Range** 60 feet\n\n**Target** 1 creature\n\n**Defense** [AC](characteristic:armor-class)\n\nYou evoke a magical stone and throw it, with divine guide to your aim. The stone deals 2d6 bludgeoning damage depending on your [spell attack roll](characteristic:spell-attack) against the target's AC.\n\n**Critical Success** The target takes double damage and you can [push](content:playing-the-game/forced-movement) it up to 10 feet.\n\n**Success** The target takes full damage and you can push it up to 5 feet.\n\n**Heightened (+1)** The stone's damage increases by 1d6.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const IgniteAmbition = Abilities.defineAbility('spell/ignite-ambition', {
  name: 'Ignite Ambition',
  description: '*Uncommon, Cleric, Concentrate, Emotion, Focus, Mental, Subtle*\n\n**Domain** Ambition',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Ignite Ambition',
      description:
        "**Trigger** You or an ally in range attempt to use a mental effect to convince a creature to do something (such as a [Coerce](content:skills/coerce), [Request](content:skills/request), or a suggestion spell)\n\n**Range** 60 feet\n\n**Target** one creature being influenced\n\n**Defense** Will\n\nYou strengthen the target's ambition, increase its resentment of its allies, and make its allegiances more susceptible to change. It must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected and realized you attempted to influence its reaction with magic.\n\n**Success** The target takes a –1 status penalty to its defenses against the triggering effect. This penalty is –2 if the target is being encouraged to advance its own ambitions. The target doesn't realize you Cast the Spell on it.\n\n**Failure** As success, but the status penalty is –4 if the target is being encouraged to advance its own ambitions.\n\n**Critical Failure** As success, but the creature automatically follows a suggestion that advances its own ambitions.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const MagicsVessel = Abilities.defineAbility('spell/magics-vessel', {
  name: "Magic's Vessel",
  description: '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Magic',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Magic's Vessel",
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Duration** sustained up to 1 minute\n\nA creature becomes a divine receptacle for pure magical energy. The target gains a +1 status bonus to saving throws. Each time you [Cast a Spell](content:spells/cast-a-spell) from your spell slots, you automatically [Sustain](content:playing-the-game/sustain) this spell and grant its target resistance to damage from spells equal to the spell's rank, until the start of your next turn.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Moonbeam = Abilities.defineAbility('spell/moonbeam', {
  name: 'Moonbeam',
  description: '*Uncommon, Attack, Cleric, Concentrate, Fire, Focus, Light, Manipulate*\n\n**Domain** Moon',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Moonbeam',
      description:
        "**Range** 120 feet\n\n**Target** 1 creature\n\n**Defense** [AC](characteristic:armor-class)\n\nYou shine a ray of moonlight. Make a [spell attack roll](characteristic:spell-attack). The beam of light deals 2d6 fire damage. This is silver damage for the purposes of weaknesses, resistances, and the like.\n\n**Critical Success** The beam deals double damage, and the target is [dazzled](content:conditions/dazzled) for 1 minute.\n\n**Success** The beam deals full damage, and the target is dazzled for 1 round.\n\n**Heightened (+1)** The ray's damage increases by 1d6.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 120, count: 1 } },
    },
  ],
})

export const Overstuff = Abilities.defineAbility('spell/overstuff', {
  name: 'Overstuff',
  description: '*Uncommon, Cleric, Concentrate, Focus, Manipulate*\n\n**Domain** Indulgence',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Overstuff',
      description:
        "**Range** 30 feet\n\n**Target** 1 living creature\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nHuge amounts of food and drink fill the target. It receives a full meal's worth of nourishment and must attempt a Fortitude save. A target [sickened](content:conditions/sickened) by this spell takes a –10-foot status penalty to its [Speed](characteristic:speed) until it's no longer sickened.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is sickened 1, but if it spends an action to end the condition, it succeeds automatically.\n\n**Failure** The target is sickened 1.\n\n**Critical Failure** The target is sickened 2.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const PerfectedMind = Abilities.defineAbility('spell/perfected-mind', {
  name: 'Perfected Mind',
  description: '*Uncommon, Cleric, Concentrate, Focus*\n\n**Domain** Perfection',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Perfected Mind',
      description:
        'You meditate upon perfection to remove all distractions from your mind. Attempt a new [Will save](characteristic:will) against one [mental](content:traits/mental) effect currently affecting you that required a Will save. Use the result of this new save to determine the outcome of the mental effect, unless the new save would have a worse result than the original save, in which case nothing happens. You can use _perfected mind_ against a given effect only once.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const ProtectorsSacrifice = Abilities.defineAbility('spell/protectors-sacrifice', {
  name: "Protector's Sacrifice",
  description: '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Protection',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Protector's Sacrifice",
      description:
        "**Trigger** An ally within 30 feet takes damage\n\n**Range** 30 feet\n\nYou protect your ally by suffering in their stead. Reduce the damage the ally would take by 3. You redirect this damage to yourself, but your immunities, weaknesses, resistances and so on do not apply\n\nYou aren't subject to any conditions or other effects of whatever damaged your ally (such as poison from a venomous bite). Your ally is still subject to those effects even if you redirect all of the triggering damage to yourself.\n\n**Heightened (+1)** The damage you redirect increases by 3.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const PushingGust = Abilities.defineAbility('spell/pushing-gust', {
  name: 'Pushing Gust',
  description: '*Uncommon, Air, Cleric, Concentrate, Focus, Manipulate*\n\n**Domain** Air',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Pushing Gust',
      description:
        '**Range** 500 feet\n\n**Target** 1 creature\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nGiving the air a push, you buffet the target with a powerful gust of wind; it must attempt a Fortitude save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is [pushed](content:playing-the-game/forced-movement) 5 feet away from you.\n\n**Failure** The target is pushed 10 feet away from you.\n\n**Critical Failure** The target is pushed 10 feet away from you and knocked [prone](content:conditions/prone).',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 500, count: 1 } },
    },
  ],
})

export const ReadFate = Abilities.defineAbility('spell/read-fate', {
  name: 'Read Fate',
  description: '*Uncommon, Cleric, Concentrate, Focus, Manipulate, Prediction*\n\n**Domain** Fate',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Read Fate',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature other than you\n\nYou attempt to learn more about the target's fate in the short term, usually within the next day for most prosaic creatures, or the next hour or less for someone likely to have multiple rapid experiences, such as someone actively adventuring.\n\nYou learn a single enigmatic word connected to the creature's fate in that time frame. Fate is notoriously inscrutable, and the word isn't necessarily meant to be taken at face value, so the meaning is often clear only in hindsight. The GM rolls a secret DC 6 flat check. If the creature's fate is too uncertain, or on a failed flat check, the spell yields the word “inconclusive.” Either way, the creature is then temporarily immune for 24 hours.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const SavorTheSting = Abilities.defineAbility('spell/savor-the-sting', {
  name: 'Savor the Sting',
  description: '*Uncommon, Cleric, Focus, Manipulate, Mental, Nonlethal*\n\n**Domain** Pain',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Savor the Sting',
      description:
        '**Range** touch\n\n**Target** 1 creature\n\n**Defense** Will\n\nYou inflict pain upon the target and revel in their anguish. This deals 1d4 mental damage and 1d4 [persistent mental damage](content:conditions/persistent-damage); the target must attempt a [Will save](characteristic:will). As long as the target is taking persistent damage from this spell, you gain a +1 status bonus to attack rolls and skill checks against the target.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes half damage and no persistent damage.\n\n**Failure** The target takes full initial and persistent damage.\n\n**Critical Failure** The target takes double initial and persistent damage.\n\n**Heightened (+1)** The initial damage increases by 1d4 and the persistent damage increases by 1d4.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const ScholarlyRecollection = Abilities.defineAbility('spell/scholarly-recollection', {
  name: 'Scholarly Recollection',
  description: '*Uncommon, Cleric, Focus, Fortune*\n\n**Domain** Knowledge',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Scholarly Recollection',
      description:
        "**Trigger** You attempt a [Perception](characteristic:perception) check to [Seek](content:playing-the-game/seek), or you attempt a skill check to [Recall Knowledge](content:skills/recall-knowledge) with a skill you’re trained in\n\nSpeaking a short prayer as you gather your thoughts, you're blessed to find yourself pointed in the right direction. The GM rolls the triggering check twice and uses the better result.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const SoothingWords = Abilities.defineAbility('spell/soothing-words', {
  name: 'Soothing Words',
  description: '*Uncommon, Cleric, Concentrate, Emotion, Focus, Mental*\n\n**Domain** Family',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Soothing Words',
      description:
        '**Range** 30 feet\n\n**Target** 1 ally\n\n**Duration** 1 minute\n\nYou attempt to calm the target by uttering soothing words in a calm and even tone. The target gains a +1 status bonus to [Will saving throws](characteristic:will). This bonus increases to +2 against [emotion](content:traits/emotion) effects.\n\nIn addition, when you Cast this Spell, you can attempt to [counteract](content:playing-the-game/counteracting) one emotion effect on the target.\n\n**Heightened (5th)** The bonus to saves increases to +2, or +3 against emotion effects.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const SuddenShift = Abilities.defineAbility('spell/sudden-shift', {
  name: 'Sudden Shift',
  description: '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Trickery',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Sudden Shift',
      description:
        '**Trigger** An enemy misses you with a melee attack\n\n**Duration** until the end of your next turn\n\nYou swiftly move from a dangerous spot and veil yourself. You [Step](content:playing-the-game/step) and become [concealed](content:conditions/concealed).',
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const SweetDream = Abilities.defineAbility('spell/sweet-dream', {
  name: 'Sweet Dream',
  description: '*Uncommon, Auditory, Cleric, Concentrate, Focus, Linguistic, Manipulate, Mental, Sleep*\n\n**Domain** Dreams',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Sweet Dream',
      description:
        "**Range** 30 feet\n\n**Target** 1 willing creature\n\n**Duration** 1 hour\n\nWith soothing words, you lull the target into an enchanting dream. When you Cast the Spell, the target falls [unconscious](content:conditions/unconscious) if it wasn't already. While unconscious, it experiences a dream of your choice, though lucidly enough it can wake when it pleases. If it wakes up before 1 minute of sleep has passed, the spell ends.\n\n- **Dream of Insight** +1 status bonus to Intelligence-based skill checks\n\n- **Dream of Glamor** +1 status bonus to Charisma-based skill checks\n\n- **Dream of Voyaging** +5-foot status bonus to [Speed](characteristic:speed).\n\nIf you Cast this Spell again, any previous sweet dream you cast ends.\n\n**Heightened (4th)** The bonus for a dream of insight or glamor is +2.\n\n**Heightened (7th)** The bonus for a dream of insight or glamor is +3.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const TidalSurge = Abilities.defineAbility('spell/tidal-surge', {
  name: 'Tidal Surge',
  description: '*Uncommon, Cleric, Focus, Manipulate, Water*\n\n**Domain** Water',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Tidal Surge',
      description:
        '**Range** 60 feet\n\n**Target** 1 creature\n\nYou call forth a tremendous wave to move the target either in a body of water or on the ground. You move the target up to 10 feet in any direction along the ground or 20 feet through a body of water. An unwilling target can attempt a [Fortitude](characteristic:fortitude) save, and it avoids being moved if it succeeds.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const TouchOfObedience = Abilities.defineAbility('spell/touch-of-obedience', {
  name: 'Touch of Obedience',
  description: '*Uncommon, Cleric, Focus, Manipulate, Mental*\n\n**Domain** Tyranny',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Touch of Obedience',
      description:
        "**Range** touch\n\n**Target** 1 living creature\n\n**Defense** Will\n\n**Duration** varies\n\nYour imperious touch erodes the target's willpower, making it easier to control. The target attempts a [Will save](characteristic:will). Regardless of the result, it's then temporarily immune for 1 hour.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is [stupefied](content:conditions/stupefied) 1 until the end of your next turn.\n\n**Failure** The target is stupefied 2 until the end of your next turn.\n\n**Critical Failure** The target is stupefied 2 for 1 minute and is forced to its knees, becoming [prone](content:conditions/prone).",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const TouchOfUndeath = Abilities.defineAbility('spell/touch-of-undeath', {
  name: 'Touch of Undeath',
  description: '*Uncommon, Cleric, Focus, Manipulate, Void*\n\n**Domain** Undeath',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Touch of Undeath',
      description:
        "**Range** touch\n\n**Target** 1 living creature\n\n**Defense** [Fortitude](characteristic:fortitude)\n\n**Duration** varies\n\nYou attack the target's life force with undeath, dealing 1d6 void damage. The target must attempt a Fortitude save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes half damage.\n\n**Failure** The target takes full damage, and [vitality](content:traits/vitality) effects heal it only half as much as normal for 1 round.\n\n**Critical Failure** The target takes double damage, and vitality effects heal it only half as much as normal for 1 minute.\n\n**Heightened (+1)** The damage increases by 1d6.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const UnimpededStride = Abilities.defineAbility('spell/unimpeded-stride', {
  name: 'Unimpeded Stride',
  description: '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Freedom',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Unimpeded Stride',
      description:
        'Divine grace ensure that nothing can keep you prisoner or hold you back. You immediately escape from every magical effect that has you [immobilized](content:conditions/immobilized) or [grabbed](content:conditions/grabbed) unless the effect is of a higher rank than your _unimpeded stride_ spell. You then [Stride](content:playing-the-game/stride). During this movement, you ignore [difficult terrain](content:playing-the-game/difficult-terrain) and any circumstance or status penalties to your [Speed](characteristic:speed).',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const VeilOfConfidence = Abilities.defineAbility('spell/veil-of-confidence', {
  name: 'Veil of Confidence',
  description: '*Uncommon, Cleric, Concentrate, Focus, Mental*\n\n**Domain** Confidence',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Veil of Confidence',
      description:
        '**Duration** 1 minute\n\nYou surround yourself in confidence. You reduce your current [frightened](content:conditions/frightened) condition by 1, and whenever you would become frightened during the duration, reduce the amount by 1. If you critically fail a save against a [fear](content:traits/fear) effect, _veil of confidence_ reduces your frightened value from that effect, and then ends.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const VibrantThorns = Abilities.defineAbility('spell/vibrant-thorns', {
  name: 'Vibrant Thorns',
  description: '*Uncommon, Cleric, Focus, Manipulate, Morph, Plant, Wood*\n\n**Domain** [Nature](characteristic:skill/nature)',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Vibrant Thorns',
      description:
        "**Duration** 1 minute\n\nYour body sprouts brambly thorns that thrive on life magic. Adjacent creatures that hit you with a melee attack, as well as creatures that hit you with [unarmed](content:traits/unarmed) attacks, take 1 piercing damage each time they do. Anytime you cast a [vitality](content:traits/vitality) spell, the thorns' damage increases to 1d6 until the start of your next turn.\n\n**Heightened (+1)** The damage increases by 1, or 1d6 after you cast a vitality spell.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const WakingNightmare = Abilities.defineAbility('spell/waking-nightmare', {
  name: 'Waking Nightmare',
  description: '*Uncommon, Cleric, Concentrate, Emotion, Fear, Focus, Manipulate, Mental*\n\n**Domain** Nightmares',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Waking Nightmare',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** varies\n\nYou fill the creature's mind with a terrifying vision. The target must attempt a [Will save](characteristic:will). A creature [frightened](content:conditions/frightened) by this spell takes 1 additional mental damage each time it's hit by a [Strike](content:playing-the-game/strike).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is frightened 1.\n\n**Failure** The target is frightened 2. If it's asleep, it wakes up and is [paralyzed](content:conditions/paralyzed) for 1 round.\n\n**Critical Failure** As failure, but frightened 3.\n\n**Heightened (+1)** The mental damage increases by 1.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const WeaponSurge = Abilities.defineAbility('spell/weapon-surge', {
  name: 'Weapon Surge',
  description: '*Uncommon, Cleric, Focus, Manipulate, Sanctified*\n\n**Domain** Zeal',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Weapon Surge',
      description:
        "**Range** touch\n\n**Target** 1 weapon you're wielding\n\n**Duration** until the start of your next turn\n\nHolding your weapon aloft, you fill it with divine energy. On your next [Strike](content:playing-the-game/strike) with that weapon before the start of your next turn, you gain a +1 status bonus to the attack roll, the weapon deals an additional 1d6 spirit damage, and the Strike gains the [sanctified](content:traits/sanctified) trait. Weapon surge ends once you complete this Strike or the weapon leaves your possession.\n\n**Heightened (5th)** The attack deals 2d6 additional spirit damage.\n\n**Heightened (9th)** The attack deals 3d6 additional spirit damage.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const WhisperingQuiet = Abilities.defineAbility('spell/whispering-quiet', {
  name: 'Whispering Quiet',
  description: '*Uncommon, Cleric, Focus, Manipulate, Sonic*\n\n**Domain** Secrecy',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Whispering Quiet',
      description:
        "**Range** 60 feet\n\n**Area** 15-foot burst\n\n**Duration** 1 minute\n\nYou suppress sound in an area, preventing anyone from giving away valuable secrets. This doesn't prevent those in the area from talking or Casting a Spell, but no creature more than 5 feet away can hear its voice without succeeding at a [Perception](characteristic:perception) check against your [spell DC](characteristic:spell-dc), which might interfere with [auditory](content:traits/auditory) or [linguistic](content:traits/linguistic) effects as well as communication. Other sounds created in the area are muffled to a similar volume unless that sound is created by an effect with the [sonic](content:traits/sonic) trait.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 60, area: { type: AreaShape.Sphere, radius: 15 }, count: 1 } },
    },
  ],
})

export const WordOfTruth = Abilities.defineAbility('spell/word-of-truth', {
  name: 'Word of Truth',
  description: '*Uncommon, Cleric, Concentrate, Focus*\n\n**Domain** Truth',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Word of Truth',
      description:
        "**Duration** sustained up to 1 minute\n\nYou speak a statement that you believe to be true and that is free of any attempt to deceive through twisting words, omission, and so on. The statement must be 25 words or fewer. A symbol of your deity glows above your head and lasts for the spell's duration, and anyone who sees you and hears you speak knows instinctively that you believe what you say is true. This assurance of honesty grants you a +2 status bonus to [Diplomacy](characteristic:skill/diplomacy) checks as long as the symbol persists. You can Dismiss the spell, and if you say something that you don't believe is entirely true, the spell ends before you complete your statement.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const ArtisticFlourish = Abilities.defineAbility('spell/artistic-flourish', {
  name: 'Artistic Flourish',
  description: '*Uncommon, Cleric, Concentrate, Focus, Manipulate*\n\n**Domain** Creation',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Artistic Flourish',
      description:
        "**Range** 15 feet\n\n**Target** 1 item or work of art that fits entirely within the range\n\n**Duration** 10 minutes\n\nYou transform the target into a form that more closes matches your creative vision. It's clearly the same item, but with aesthetic details you choose. The target is a beautiful and impressive piece for its new quality, but the effect is obviously magical and temporary, so its monetary value doesn't change. If you're an expert in [Crafting](characteristic:skill/crafting), the item grants a +1 item bonus to attack rolls if it's a weapon or skill checks if it's a skill tool. When you Cast this Spell, any previous casting ends.\n\n**Heightened (7th)** If you're a master in Crafting, the item grants a +2 item bonus.\n\n**Heightened (10th)** If you're legendary in Crafting, the item grants a +3 item bonus.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 15, count: 1 } },
    },
  ],
})

export const CaptivatingAdoration = Abilities.defineAbility('spell/captivating-adoration', {
  name: 'Captivating Adoration',
  description: '*Uncommon, Aura, Cleric, Concentrate, Emotion, Focus, Manipulate, Mental, Visual*\n\n**Domain** Passion',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Captivating Adoration',
      description:
        '**Area** 15-foot emanation\n\n**Defense** Will\n\n**Duration** 1 minute\n\nYou become intensely entrancing, and creatures are distracted by you as long as they remain within the area. You can exclude any creatures you choose from the effects. If a creature is in the aura when you Cast the Spell or when it enters the aura for the first time, it must attempt a [Will saving throw](characteristic:will). If a creature leaves and reenters, it uses the results of its original save.\n\n**Critical Success** The creature is unaffected and temporarily immune for 1 hour.\n\n**Success** The creature is [fascinated](content:conditions/fascinated) with you for its next action, then is temporarily immune for 1 hour.\n\n**Failure** The creature is fascinated with you.\n\n**Critical Failure** The creature is fascinated with you, and its attitude toward you improves by one step.\n\n**Heightened (+1)** Increase the size of the emanation by 15 feet.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 15 }, count: 1 } },
    },
  ],
})

export const CommandingLash = Abilities.defineAbility('spell/commanding-lash', {
  name: 'Commanding Lash',
  description: '*Uncommon, Cleric, Concentrate, Focus, Linguistic, Manipulate, Mental*\n\n**Domain** Tyranny',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Commanding Lash',
      description:
        "**Requirements** Your most recent action dealt damage to a target\n\n**Range** 100 feet\n\n**Target** a creature you dealt damage to on your most recent action\n\n**Defense** Will\n\n**Duration** until the end of the target's next turn\n\nWith the threat of more pain, you compel a creature you've recently harmed. You issue a command to the target, with the effects of the spell [_command_](ability:spell/command). If the target is [frightened](content:conditions/frightened), [stupefied](content:conditions/stupefied), or taking [persistent damage](content:conditions/persistent-damage), it takes a –2 circumstance penalty to the save. Regardless of the result, the target is then temporarily immune for 1 hour.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const CompetitiveEdge = Abilities.defineAbility('spell/competitive-edge', {
  name: 'Competitive Edge',
  description: '*Uncommon, Cleric, Concentrate, Emotion, Focus, Mental*\n\n**Domain** Ambition',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Competitive Edge',
      description:
        '**Duration** sustained up to 1 minute\n\nYour competitiveness drives you to prove yourself against the opposition. You gain a +1 status bonus to attack rolls and skill checks. If an enemy within 20 feet critically succeeds at an attack roll or skill check, your status bonus increases to +3 for attack rolls or that specific skill check (whichever the foe critically succeeded at) for 1 round.\n\n**Heightened (7th)** Increase the base bonus to +2 and the increased bonus after an enemy critically succeeds to +4.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const DarkenedSight = Abilities.defineAbility('spell/darkened-sight', {
  name: 'Darkened Sight',
  description: '*Uncommon, Cleric, Concentrate, Darkness, Focus, Manipulate*\n\n**Domain** Darkness',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Darkened Sight',
      description:
        "**Range** 60 feet\n\n**Target** 1 creature\n\n**Duration** 1 minute\n\nYou infuse a creature's vision with darkness. It receives greater darkvision, allowing it to see even in magical darkness.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const DelusionalPride = Abilities.defineAbility('spell/delusional-pride', {
  name: 'Delusional Pride',
  description: '*Uncommon, Cleric, Concentrate, Emotion, Focus, Manipulate, Mental*\n\n**Domain** Confidence',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Delusional Pride',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** varies\n\nYou make the target overconfident, leading it to ascribe failure to external factors. The target attempts a [Will save](characteristic:will) to determine the spell's duration and is temporarily immune for 24 hours regardless of the save's result.\n\n**Critical Success** The target is unaffected.\n\n**Success** The duration is 1 round. If the target fails at an attack roll or skill check, it takes a –1 status penalty to attack rolls and skill checks until the end of its turn (or the end of its next turn, if it attempted the roll outside its turn). If the creature fails a second time while taking this penalty, the penalty increases to –2.\n\n**Failure** As success, but the duration is 10 minutes.\n\n**Critical Failure** As success, but the duration is 24 hours.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const DestructiveAura = Abilities.defineAbility('spell/destructive-aura', {
  name: 'Destructive Aura',
  description: '*Uncommon, Aura, Cleric, Concentrate, Focus, Manipulate*\n\n**Domain** Destruction',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Destructive Aura',
      description:
        '**Area** 15-foot emanation\n\n**Duration** 1 minute\n\nSwirling sands of divine devastation surround you, weakening the defenses of all they touch. Reduce the resistances of yourself and creatures in the area by 2.\n\n**Heightened (+2)** Reduce the resistances by an additional 2.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 15 }, count: 1 } },
    },
  ],
})

export const DisperseIntoAir = Abilities.defineAbility('spell/disperse-into-air', {
  name: 'Disperse into Air',
  description: '*Uncommon, Air, Cleric, Focus, Manipulate, Polymorph*\n\n**Domain** Air',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Disperse into Air',
      description:
        "**Trigger** You take damage from an enemy or a hazard\n\nAfter taking the triggering damage, you transform into air. Until the end of the current turn, you can't be attacked or targeted, you don't take up space, you can't act, and any auras or emanations you have are suppressed. At the end of the turn, you re-form in any space you can occupy within 15 feet of where you were when you dispersed. Any auras or emanations you had are restored as long as their duration didn't run out while you were dispersed.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const Downpour = Abilities.defineAbility('spell/downpour', {
  name: 'Downpour',
  description: '*Uncommon, Cleric, Concentrate, Focus, Manipulate, Water*\n\n**Domain** Water',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Downpour',
      description:
        '**Range** 120 feet\n\n**Area** 30-foot burst\n\n**Duration** 1 minute\n\nYou call forth a torrential downpour, which extinguishes non-magical flames. Creatures in the area are [concealed](content:conditions/concealed) and gain fire resistance 10. Creatures outside the area are concealed to those inside the area. If a creature with weakness to water ends its turn in the area, the downpour triggers its weakness.\n\n**Heightened (+1)** The fire resistance increases by 2.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 120, area: { type: AreaShape.Sphere, radius: 30 }, count: 1 } },
    },
  ],
})

export const DreamersCall = Abilities.defineAbility('spell/dreamers-call', {
  name: "Dreamer's Call",
  description: '*Uncommon, Cleric, Concentrate, Focus, Illusion, Incapacitation, Manipulate, Mental*\n\n**Domain** Dreams',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Dreamer's Call",
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** until the end of the target's next turn\n\nYou create a vivid, illusory daydream drawn from the images of the target's dreams. The daydream appears in an unoccupied space in range, and you attempt to draw the target toward it.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target's attention wavers. It becomes [fascinated](content:conditions/fascinated) by the daydream.\n\n**Failure** The target is fascinated with the daydream and pursues a course of action you choose as its first action after you Cast the Spell: approach the daydream, run away from it (as the [fleeing](content:conditions/fleeing) condition), Release what it's holding as an offering, or [Drop Prone](content:playing-the-game/drop-prone) in obeisance.\n\n**Critical Failure** As failure, but the target follows the course of action for as many actions as possible for the spell's duration, and does nothing else.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const EnduringMight = Abilities.defineAbility('spell/enduring-might', {
  name: 'Enduring Might',
  description: '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Might',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Enduring Might',
      description:
        '**Trigger** An attack or effect would deal damage to you\n\nYour own might mingles with divine power to protect you from harm. You gain resistance equal to 8 plus your [Strength modifier](characteristic:strength) against all damage from the triggering attack or effect.\n\n**Heightened (+1)** The resistance increases by 2.',
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const EradicateUndeath = Abilities.defineAbility('spell/eradicate-undeath', {
  name: 'Eradicate Undeath',
  description: '*Uncommon, Cleric, Concentrate, Focus, Manipulate, Vitality*\n\n**Domain** Death',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Eradicate Undeath',
      description:
        '**Area** 30-foot cone\n\n**Defense** [basic](content:playing-the-game/basic-saving-throws) [Fortitude](characteristic:fortitude)\n\nA massive deluge of life energy causes the undead to fall apart. Each [undead](content:traits/undead) creature in the area takes 4d12 vitality damage.\n\n**Heightened (+1)** The damage increases by 1d12.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Cone, length: 30 }, count: 1 } },
    },
  ],
})

export const FlameBarrier = Abilities.defineAbility('spell/flame-barrier', {
  name: 'Flame Barrier',
  description: '*Uncommon, Cleric, Concentrate, Focus*\n\n**Domain** Fire',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Flame Barrier',
      description:
        '**Trigger** An effect would deal fire damage to you or an ally within range\n\n**Range** 60 feet\n\n**Target** one creature that would take fire damage from the triggering effect\n\nYou swiftly deflect incoming flames. The target gains fire resistance 15 against the triggering effect.\n\n**Heightened (+2)** The resistance increases by 5.',
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const GlimpseTheTruth = Abilities.defineAbility('spell/glimpse-the-truth', {
  name: 'Glimpse the Truth',
  description: '*Uncommon, Aura, Cleric, Focus, Manipulate, Revelation*\n\n**Domain** Truth',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Glimpse the Truth',
      description:
        "**Area** 30-foot emanation\n\n**Duration** 1 round\n\nDivine insight lets you see things as they are, unveiled by attempts to magically cloak the truth. The GM attempts a [secret](content:traits/secret) [counteract](content:playing-the-game/counteracting) check against each illusion that is at least partially within the area. Instead of counteracting the illusion, you see through it (for instance, if the check succeeds against an [_illusory disguise_](ability:spell/illusory-disguise) spell, you see the creature's true form but _illusory disguise_ doesn't end). Each time a new illusion comes into the aura during the duration of the spell, the GM attempts a secret counteract check for that illusion.\n\n**Heightened (7th)** You can allow everyone within range of the emanation to see through any illusions you succeed against, not just yourself.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 30 }, count: 1 } },
    },
  ],
})

export const KnowTheEnemy = Abilities.defineAbility('spell/know-the-enemy', {
  name: 'Know the Enemy',
  description: '*Uncommon, Cleric, Focus, Fortune, Manipulate*\n\n**Domain** Knowledge',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Know the Enemy',
      description:
        "**Trigger** You roll initiative and can see a creature, you succeed at an attack roll against a creature, or a creature fails a saving throw against one of your spells\n\nYou quickly remind yourself of useful information. Use a [Recall Knowledge](content:skills/recall-knowledge) action, rolling the appropriate skill check to identify the triggering creature's abilities. You can roll your check twice and use the better result.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const LocalizedQuake = Abilities.defineAbility('spell/localized-quake', {
  name: 'Localized Quake',
  description: '*Uncommon, Cleric, Concentrate, Earth, Focus, Manipulate*\n\n**Domain** Earth',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Localized Quake',
      description:
        "**Area** 15-foot emanation or 15-foot cone\n\n**Defense** [basic](content:playing-the-game/basic-saving-throws) [Reflex](characteristic:reflex)\n\nYou shake the earth, toppling nearby creatures. Choose whether the spell's area is a 15-foot emanation or a 15-foot cone when you cast it. Each creature in the area standing on solid ground takes 4d6 bludgeoning damage with a basic Reflex saving throw. A creature that fails its save also falls [prone](content:conditions/prone).\n\n**Heightened (+1)** Increase the damage by 2d6.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const LuckyBreak = Abilities.defineAbility('spell/lucky-break', {
  name: 'Lucky Break',
  description: '*Uncommon, Cleric, Concentrate, Focus, Fortune*\n\n**Domain** Luck',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Lucky Break',
      description:
        '**Trigger** You fail, but don’t critically fail, a saving throw\n\nReroll the saving throw and use the better result. You then become temporarily immune for 10 minutes.',
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const MalignantSustenance = Abilities.defineAbility('spell/malignant-sustenance', {
  name: 'Malignant Sustenance',
  description: '*Uncommon, Cleric, Concentrate, Focus, Manipulate, Void*\n\n**Domain** Undeath',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Malignant Sustenance',
      description:
        '**Range** touch\n\n**Target** 1 willing undead creature\n\n**Duration** 1 minute\n\nYou embed a seed of void energy in an [undead](content:traits/undead) creature, restoring its unnatural vigor over time. The target gains fast healing 7.\n\n**Heightened (+1)** The fast healing increases by 2.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const MysticBeacon = Abilities.defineAbility('spell/mystic-beacon', {
  name: 'Mystic Beacon',
  description: '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Magic',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Mystic Beacon',
      description:
        '**Range** 30 feet\n\n**Target** 1 willing creature\n\n**Duration** until the start of your next turn\n\nThe next damaging or healing spell the target casts before the start of your next turn deals damage or restores [Hit Points](characteristic:hit-points) as if the spell were heightened 1 rank higher than its actual rank. This applies only to initial healing or damage when the spell is cast, not any ongoing effects. The spell otherwise functions at its actual rank. Once the target casts the spell, _mystic beacon_ ends.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const NaturesBounty = Abilities.defineAbility('spell/natures-bounty', {
  name: "Nature's Bounty",
  description: '*Uncommon, Cleric, Focus, Manipulate, Plant, Vitality*\n\n**Domain** [Nature](characteristic:skill/nature)',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Nature's Bounty",
      description:
        '**Requirements** You have a free hand\n\nA palm-sized raw fruit or vegetable of your choice appears in your open hand. A creature can consume the food with an [Interact](content:playing-the-game/interact) action to regain 3d10+12 [Hit Points](characteristic:hit-points) and be nourished as if it had eaten a meal. If uneaten, the food crumbles to dust after 1 minute.\n\n**Heightened (+1)** The Hit Points restored increase by 6.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const PerfectedBody = Abilities.defineAbility('spell/perfected-body', {
  name: 'Perfected Body',
  description: '*Uncommon, Cleric, Concentrate, Focus*\n\n**Domain** Perfection',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Perfected Body',
      description:
        "**Trigger** You fail or critically fail a saving throw against an effect that has the morph, poison, or polymorph trait, or that would make you [clumsy](content:conditions/clumsy), [doomed](content:conditions/doomed), [enfeebled](content:conditions/enfeebled), [petrified](content:conditions/petrified), or [sickened](content:conditions/sickened)\n\nYour body's perfection keeps you just a little bit healthier than most. You get a failure if you rolled a critical failure or a success if you rolled a failure.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const PreciousMetals = Abilities.defineAbility('spell/precious-metals', {
  name: 'Precious Metals',
  description: '*Uncommon, Cleric, Focus, Manipulate, Metal*\n\n**Domain** Wealth',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Precious Metals',
      description:
        "**Range** touch\n\n**Target** 1 metal shield or weapon, 1 suit of metal armor, or up to 1 Bulk of metal material (such as coins or metal-tipped ammunition)\n\n**Duration** 1 minute\n\nYour deity blesses base metals to transform them into precious materials. The metal in the target transforms from its normal metal into cold iron, copper, gold, iron, silver, or steel. If the spell's rank is 8th or higher, add adamantine and dawnsilver to the options. If you transform an object into copper, gold, or silver, its Hardness is reduced to 1. Otherwise, its Hardness is increased to 10 if it was lower. An item transmuted in this way deals damage according to its new material. For example, a steel sword transmuted to cold iron would deal additional damage to a creature with a weakness to cold iron. It can have other effects of the new material at the GM's discretion.\n\nThis change is clearly magical and temporary, so the item's monetary value doesn't change; you couldn't transmute copper coins to gold and use them to purchase something.\n\n**Heightened (+1)** If you increase the Hardness of the object, the new Hardness is 2 higher.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const ProtectorsSphere = Abilities.defineAbility('spell/protectors-sphere', {
  name: "Protector's Sphere",
  description: '*Uncommon, Aura, Cleric, Concentrate, Focus, Manipulate*\n\n**Domain** Protection',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Protector's Sphere",
      description:
        '**Area** 15-foot emanation\n\n**Duration** sustained up to 1 minute\n\nA protective aura emanates out from you, safeguarding you and your allies. You gain resistance 3 to all damage. Your allies also gain this resistance while in the aura.\n\n**Heightened (+1)** The resistance increases by 1.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 15 }, count: 1 } },
    },
  ],
})

export const PulseOfCivilization = Abilities.defineAbility('spell/pulse-of-civilization', {
  name: 'Pulse of Civilization',
  description: '*Uncommon, Cleric, Concentrate, Focus, Manipulate, Scrying*\n\n**Domain** Cities',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Pulse of Civilization',
      description:
        "**Range** 25 miles\n\n**Duration** 8 hours\n\nYou tap into the zeitgeist of any settlements in range. You learn the names of the settlements. On all [Lore](content:skills/lore) checks to [Recall Knowledge](content:skills/recall-knowledge) about those settlements or to [Gather Information](content:skills/gather-information) in or about those settlements, you gain a +2 status bonus and use your level as your proficiency bonus even if you're untrained. When you Cast the Spell, you can immediately Recall Knowledge about one of the settlements using its Lore skill (such as Absalom Lore), which benefits from the bonus. If you cast _pulse of civilization_ again, any previous casting ends.\n\n**Heightened (5th)** The range is 100 miles.\n\n**Heightened (7th)** The range is 500 miles and the bonus is +3.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const RebukeDeath = Abilities.defineAbility('spell/rebuke-death', {
  name: 'Rebuke Death',
  description: '*Uncommon, Cleric, Concentrate, Focus, Healing, Manipulate, Vitality*\n\n**Domain** Healing',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Rebuke Death',
      description:
        "**Area** 20-foot emanation\n\n**Target** 1 living creature per action spent to Cast this spell\n\nYou snatch creatures from the jaws of death, restoring them without the strain of a typical close call. You can spend 1 to 3 actions Casting this Spell, and you can target a number of creatures equal to the actions spent. Each target regains 3d6 [Hit Points](characteristic:hit-points). If the target had the [dying](content:conditions/dying) condition, coming back from dying due to this healing doesn't increase its [wounded](content:conditions/wounded) condition.\n\n**Heightened (+1)** Increase the healing by 1d6.",
      action: ActionTypes.VariableActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 20 }, count: 1 } },
    },
  ],
})

export const RetributivePain = Abilities.defineAbility('spell/retributive-pain', {
  name: 'Retributive Pain',
  description: '*Uncommon, Cleric, Focus, Manipulate, Mental, Nonlethal*\n\n**Domain** Pain',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Retributive Pain',
      description:
        '**Trigger** A creature in range damages you\n\n**Range** 30 feet\n\n**Target** the triggering creature\n\n**Defense** [basic](content:playing-the-game/basic-saving-throws) [Fortitude](characteristic:fortitude)\n\nYou vengefully reflect your pain upon your tormentor. The target takes mental damage equal to half the triggering damage.',
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const SafeguardSecret = Abilities.defineAbility('spell/safeguard-secret', {
  name: 'Safeguard Secret',
  description: '*Uncommon, Cleric, Concentrate, Focus, Manipulate, Mental*\n\n**Domain** Secrecy',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Safeguard Secret',
      description:
        '**Range** 30 feet\n\n**Target** you and any number of willing allies\n\n**Duration** 1 hour\n\nYou ensure a secret remains safe from prying spies. Choose one piece of information that at least some of the targets know, such as “the location of the stolen treasure” or “the password to enter the guild house.” The spell grants those who know the piece of knowledge you have chosen a +4 status bonus to skill checks (typically [Deception](characteristic:skill/deception) checks) to conceal this knowledge, to saving throws against spells that specifically attempt to obtain this knowledge from them, and to effects that would force them to reveal it.\n\nIf you Cast this Spell again, any previous _safeguard secret_ you had cast ends.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const SharedNightmare = Abilities.defineAbility('spell/shared-nightmare', {
  name: 'Shared Nightmare',
  description: '*Uncommon, Cleric, Concentrate, Emotion, Focus, Incapacitation, Manipulate, Mental*\n\n**Domain** Nightmares',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Shared Nightmare',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** varies\n\nMerging minds with the target, you swap distressing visions. One of you will become [confused](content:conditions/confused), based on the target's [Will save](characteristic:will).\n\n**Critical Success** You are confused for 1 round.\n\n**Success** At the start of your next turn, you spend your first action with the confused condition, then act normally.\n\n**Failure** The target spends the first action of each of its turns confused. The duration is 1 minute.\n\n**Critical Failure** The target is confused. The duration is 1 minute.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const TakeItsCourse = Abilities.defineAbility('spell/take-its-course', {
  name: 'Take its Course',
  description: '*Uncommon, Cleric, Concentrate, Focus, Fortune*\n\n**Domain** Indulgence',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Take its Course',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Defense** Will\n\nWhen someone has overindulged, you can hasten them past the worst of their affliction or intensify their misery. This spell attempts to progress a disease affliction, a poison affliction, or persistent poison damage affecting the target. If the target is affected by more than one of these, choose from among those you are aware of; otherwise, the GM chooses randomly. An unwilling target can attempt a [Will save](characteristic:will) to negate take its course.\n\nThe effect of this spell depends on whether you're attempting to end an affliction or persistent poison damage, and whether you are attempting to help or hinder the target's recovery.\n\n- **Affliction** The target immediately attempts its next saving throw against the affliction. You can grant the creature your choice of a +2 status bonus or a –2 status penalty to its saving throw against the affliction.\n\n- **Persistent Poison** You can cause the target to take the [persistent poison damage](content:conditions/persistent-damage) immediately when you Cast this Spell (in addition to taking it at the end of its next turn). Whether or not you do so, the target attempts an additional flat check against the persistent poison damage. You can set the DC of that flat check to 5 or 20 instead of the normal DC.\n\n**Heightened (7th)** You can attempt to progress any number of the target's eligible afflictions and persistent poison damage.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const TemptFate = Abilities.defineAbility('spell/tempt-fate', {
  name: 'Tempt Fate',
  description: '*Uncommon, Cleric, Focus, Fortune, Manipulate*\n\n**Domain** Fate',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Tempt Fate',
      description:
        "**Trigger** You or an ally within range attempts a saving throw\n\n**Range** 120 feet\n\n**Target** the triggering creature\n\nYou twist the forces of fate to make a moment dire or uneventful, with no in-between. The target gains a +1 status bonus to the triggering saving throw. If the saving throw's result is a success, it becomes a critical success. If it's a failure, it becomes a critical failure, and the critical failure can't be reduced by abilities that usually reduce critical failure.\n\nIf the triggering ability did not have both a critical success and critical failure condition, tempt fate fails, but you don't expend the Focus Point for Casting this Spell.\n\n**Heightened (8th)** The bonus on the saving throw is +2.",
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 120, count: 1 } },
    },
  ],
})

export const TouchOfTheMoon = Abilities.defineAbility('spell/touch-of-the-moon', {
  name: 'Touch of the Moon',
  description: '*Uncommon, Cleric, Focus, Light, Manipulate*\n\n**Domain** Moon',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Touch of the Moon',
      description:
        '**Range** touch\n\n**Target** 1 creature\n\n**Duration** 1 minute\n\nWhen you touch the target, a symbol of the moon appears on its forehead, glowing with soft moonlight. The target glows with [dim light](content:playing-the-game/dim-light) in a 20-foot radius. It also gets a benefit based on a phase of the moon, starting with the new moon and changing to the next phase at the end of each of its turns.\n\n- **New Moon** The target receives no benefit.\n\n- **Waxing Moon** The target gains a +1 status bonus to attack rolls and a +4 status bonus to damage rolls.\n\n- **Full Moon** The target gains a +1 status bonus to attack rolls, [AC](characteristic:armor-class), and saves, and a +4 status bonus to damage.\n\n- **Waning Moon** The target gains a +1 status bonus to AC and saving throws. After this phase, return to the new moon.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const TravelersTransit = Abilities.defineAbility('spell/travelers-transit', {
  name: "Traveler's Transit",
  description: '*Uncommon, Cleric, Concentrate, Focus, Manipulate*\n\n**Domain** Travel',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Traveler's Transit",
      description:
        '**Duration** 5 minutes\n\nYou add power to your muscles, allowing you to swim or climb walls with ease. When you Cast this Spell, you gain either a climb [Speed](characteristic:speed) or a swim Speed. The Speed is equal to your land Speed.\n\n**Heightened (5th)** You can choose to gain a fly Speed.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const TrickstersTwin = Abilities.defineAbility('spell/tricksters-twin', {
  name: "Trickster's Twin",
  description: '*Uncommon, Cleric, Concentrate, Focus, Illusion, Manipulate, Visual*\n\n**Domain** Trickery',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Trickster's Twin",
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** 1 minute\n\nYou rarely settle for being in just one place. Choose a location within 100 feet of the target that the target can see. You create an illusion of yourself there that only it can see and that mimics all your actions. The target must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target believes you're in the designated location and can't see you in your actual location. The target automatically disbelieves the illusion when you use an action that doesn't make sense in the illusion's position, or if the target attacks, touches, Seeks, or otherwise engages with the illusion. If you use a [hostile action](content:spells/hostile-actions) against the target, the spell ends.\n\n**Failure** As success, but the target must succeed at a Will save to disbelieve the illusion when one of the listed events occurs.\n\n**Critical Failure** As success, but the target must critically succeed at a Will save to disbelieve when one of the listed events occurs.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Unity = Abilities.defineAbility('spell/unity', {
  name: 'Unity',
  description: '*Uncommon, Cleric, Concentrate, Focus, Fortune*\n\n**Domain** Family',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Unity',
      description:
        '**Trigger** You and 1 or more allies within range are targeted by a spell or ability that allows a saving throw\n\n**Range** 30 feet\n\n**Target** each ally targeted by the triggering spell\n\nYou put up a united defense. Each ally can use your saving throw modifier instead of its own against the triggering spell. Each ally decides individually which modifier to use.',
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const VitalLuminance = Abilities.defineAbility('spell/vital-luminance', {
  name: 'Vital Luminance',
  description: '*Uncommon, Aura, Cleric, Focus, Light, Manipulate, Vitality*\n\n**Domain** Sun',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Vital Luminance',
      description:
        "**Duration** 1 minute\n\nDrawing life force into yourself, you become a beacon of vitality. You glow with [bright light](content:playing-the-game/bright-light) in a 30-foot emanation (and [dim light](content:playing-the-game/dim-light) to the next 30 feet), and you gain an internal pool of light called a luminance reservoir, which begins with a value of 4. At the start of each of your turns, increase your reservoir by 4.\n\nIf an [undead](content:traits/undead) creature damages you with an attack or spell while it's within the bright light of your aura, that creature takes vitality damage equal to half your luminance reservoir value. It takes this damage only the first time it damages you in a round.\n\nYou can Dismiss this Spell. When you do, you can target a creature within your light and direct the vitality energy into it. The target must be a willing living creature or an undead creature. This heals a living target or deals vitality damage to an undead target equal to your luminance reservoir's value. If you Cast this Spell again, any previous casting ends.\n\n**Heightened (+1)** Both the initial value of your luminance reservoir and the amount it increases each turn increase by 1.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const WordOfFreedom = Abilities.defineAbility('spell/word-of-freedom', {
  name: 'Word of Freedom',
  description: '*Uncommon, Cleric, Concentrate, Focus, Mental*\n\n**Domain** Freedom',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Word of Freedom',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** 1 round\n\nYou utter a liberating word of power that frees a creature. You suppress one of the following conditions of your choice: [confused](content:conditions/confused), [frightened](content:conditions/frightened), [grabbed](content:conditions/grabbed), [paralyzed](content:conditions/paralyzed), or [restrained](content:conditions/restrained). The target isn't affected by the chosen condition, and if you suppress the grabbed or restrained condition, the target automatically breaks free from the grab or restraint when you Cast the Spell.\n\nIf you don't remove the effect that provided the condition, the condition returns after the spell ends. For example, if a spell was making the target confused for 1 minute, _word of freedom_ would let the target act normally for a round, but the confused condition would return afterward.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const ZealForBattle = Abilities.defineAbility('spell/zeal-for-battle', {
  name: 'Zeal for Battle',
  description: '*Uncommon, Cleric, Concentrate, Emotion, Focus, Fortune, Mental*\n\n**Domain** Zeal',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Zeal for Battle',
      description:
        '**Trigger** You and at least 1 ally are about to roll initiative\n\n**Range** 10 feet\n\n**Target** you and the triggering ally\n\nYou stoke the righteous anger within yourself and an ally. You and the target ally each roll a d20 and use the higher result for both your initiative rolls. You each still use your own [Perception](characteristic:perception) modifier or other statistic to determine your results.',
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const AllClericFocusSpellEntities = [
  AgileFeet,
  AppearanceOfWealth,
  AthleticRush,
  BitOfLuck,
  CharmingTouch,
  CloakOfShadow,
  CreativeSplash,
  CryOfDestruction,
  DazzlingFlash,
  DeathsCall,
  FaceInTheCrowd,
  FireRay,
  HealersBlessing,
  HurtlingStone,
  IgniteAmbition,
  MagicsVessel,
  Moonbeam,
  Overstuff,
  PerfectedMind,
  ProtectorsSacrifice,
  PushingGust,
  ReadFate,
  SavorTheSting,
  ScholarlyRecollection,
  SoothingWords,
  SuddenShift,
  SweetDream,
  TidalSurge,
  TouchOfObedience,
  TouchOfUndeath,
  UnimpededStride,
  VeilOfConfidence,
  VibrantThorns,
  WakingNightmare,
  WeaponSurge,
  WhisperingQuiet,
  WordOfTruth,
  ArtisticFlourish,
  CaptivatingAdoration,
  CommandingLash,
  CompetitiveEdge,
  DarkenedSight,
  DelusionalPride,
  DestructiveAura,
  DisperseIntoAir,
  Downpour,
  DreamersCall,
  EnduringMight,
  EradicateUndeath,
  FlameBarrier,
  GlimpseTheTruth,
  KnowTheEnemy,
  LocalizedQuake,
  LuckyBreak,
  MalignantSustenance,
  MysticBeacon,
  NaturesBounty,
  PerfectedBody,
  PreciousMetals,
  ProtectorsSphere,
  PulseOfCivilization,
  RebukeDeath,
  RetributivePain,
  SafeguardSecret,
  SharedNightmare,
  TakeItsCourse,
  TemptFate,
  TouchOfTheMoon,
  TravelersTransit,
  TrickstersTwin,
  Unity,
  VitalLuminance,
  WordOfFreedom,
  ZealForBattle,
]
