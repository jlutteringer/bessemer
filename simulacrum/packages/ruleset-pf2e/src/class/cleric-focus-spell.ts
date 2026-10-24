import { Abilities } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/archetype'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'

export const AgileFeet = Abilities.defineAbility('spell/agile-feet', {
  name: 'Agile Feet',
  description:
    '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Travel\n\n**Duration** until the end of the current turn\n\nThe blessings of your god make your feet faster and your movements more fluid. You gain a +5-foot status bonus to your Speed and ignore difficult terrain. As part of casting agile feet, you can Step, Stride, or Tumble Through; you can instead Burrow, Climb, Fly, or Swim if you have the appropriate Speed.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Agile Feet', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const AppearanceOfWealth = Abilities.defineAbility('spell/appearance-of-wealth', {
  name: 'Appearance of Wealth',
  description:
    "*Uncommon, Cleric, Concentrate, Focus, Illusion, Manipulate*\n\n**Domain** Wealth\n\n**Range** 30 feet\n\n**Area** 5-foot burst\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nYou create a brief vision of immense wealth filling the spell's area. Each creature within 20 feet of the area that could be enticed by material wealth must attempt a Will saving throw. A creature that enters the area automatically disbelieves the illusion, and disbelieving the illusion ends any fascinated condition imposed by the spell. As long as you Sustain the spell, other creatures react to the treasure like they would any other illusion, but they are not at risk of becoming fascinated.\n\n**Critical Success** The creature disbelieves the illusion and is unaffected by it.\n\n**Success** The creature is fascinated by the wealth until it has completed its first action on its next turn.\n\n**Failure** The creature is fascinated by the illusion.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Appearance of Wealth', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const AthleticRush = Abilities.defineAbility('spell/athletic-rush', {
  name: 'Athletic Rush',
  description:
    "*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Might\n\n**Duration** 1 round\n\nYour body fills with physical power and skill. You gain a +10- foot status bonus to Speed and a +2 status bonus to Athletics checks. As a part of Casting this Spell, you can use a Stride, Leap, Climb, or Swim action. The spell's bonuses apply during that action.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Athletic Rush', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const BitOfLuck = Abilities.defineAbility('spell/bit-of-luck', {
  name: 'Bit of Luck',
  description:
    "*Uncommon, Cleric, Concentrate, Focus, Fortune, Manipulate*\n\n**Domain** Luck\n\n**Range** 30 feet\n\n**Target** 1 willing creature\n\n**Duration** 1 minute\n\nYou tilt the scales of luck slightly to protect a creature from disaster. When the target would attempt a saving throw, it can roll twice and use the better result. Once it does this, the spell ends. If you cast _bit of luck_ again, any previous bit of luck you cast that's still in effect ends. After a creature has been targeted with _bit of luck_, it becomes temporarily immune for 24 hours.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Bit of Luck', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const CharmingTouch = Abilities.defineAbility('spell/charming-touch', {
  name: 'Charming Touch',
  description:
    "*Uncommon, Cleric, Emotion, Focus, Incapacitation, Manipulate, Mental, Subtle*\n\n**Domain** Passion\n\n**Range** touch\n\n**Target** 1 creature that could find you attractive\n\n**Defense** Will\n\n**Duration** 10 minutes\n\nYou infuse your target with attraction, causing it to act friendlier toward you. The target attempts a Will save. It gains a +4 circumstance bonus to this save if you or your allies recently threatened or were hostile to it.\n\n**Critical Success** The target is unaffected and aware you tried to charm it.\n\n**Success** The target is unaffected but thinks your spell was something harmless instead of charming touch, unless it identifies the spell (see Identifying Spells on page 303).\n\n**Failure** The target's attitude becomes friendly toward you. If it was friendly, it becomes helpful. It can't use hostile actions against you. If you use a hostile action against the target, the spell ends. You can Dismiss the spell. After the spell ends, the target doesn't necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations. If it doesn't realize you charmed it, you could potentially convince it to continue being your friend via mundane means.\n\n**Critical Failure** As failure, but the target is helpful.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Charming Touch', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const CloakOfShadow = Abilities.defineAbility('spell/cloak-of-shadow', {
  name: 'Cloak of Shadow',
  description:
    "*Uncommon, Aura, Cleric, Darkness, Focus, Manipulate, Shadow*\n\n**Domain** Darkness\n\n**Range** touch\n\n**Target** 1 willing creature\n\n**Duration** 1 minute\n\nYou drape the target in a mantle of swirling shadows that make it harder to see. The cloak reduces bright light within a 20-foot emanation to dim light. This is a form of magical darkness and can therefore overcome non-magical light or attempt to counteract magical light.\n\nThe target can use concealed condition gained from the shadows to Hide, though observant creatures can still follow the moving aura of shadow, making it difficult for the target to become completely undetected. The target can use an Interact action to remove the cloak and leave it behind as a decoy, where it remains, reducing light for the rest of the spell's duration. If anyone picks up the cloak after it's been removed by the original target, the cloak evaporates and the spell ends.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Cloak of Shadow', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const CreativeSplash = Abilities.defineAbility('spell/creative-splash', {
  name: 'Creative Splash',
  description:
    '*Uncommon, Cleric, Concentrate, Focus, Illusion, Manipulate, Visual*\n\n**Domain** Creation\n\n**Range** 30 feet\n\n**Area** 5-foot burst\n\n**Defense** Will\n\n**Duration** varies\n\nA deluge of paint or colorful illusions descend on the area, reflecting your personal creative specialty. Roll 1d4 to determine the color of the illusion. Each creature in the area must succeed at a Will save or take the effect listed on the table for the color.\n\n## Creative Splash\n\n| **1d4** | **Color** | **Failure** | **Critical Failure** |\n|---|---|---|---|\n| 1 | White | Dazzled 1 round | Dazzled 1 minute |\n| 2 | Red | Enfeebled 1 for 1 round | Enfeebled 2 for 1 round |\n| 3 | Yellow | Frightened 1 | Frightened 2 |\n| 4 | Blue | Clumsy 1 for 1 round | Clumsy 2 for 1 round |',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Creative Splash', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const CryOfDestruction = Abilities.defineAbility('spell/cry-of-destruction', {
  name: 'Cry of Destruction',
  description:
    "*Uncommon, Cleric, Concentrate, Focus, Manipulate, Sonic*\n\n**Domain** Destruction\n\n**Area** 15-foot cone\n\n**Defense** basic Fortitude\n\nYour voice booms, smashing what's in front of you. Each creature and unattended object in the area takes 1d8 sonic damage. If you already dealt damage to an enemy this turn with a Strike or spell, increase the damage dice from this spell to d12s.\n\n**Heightened (+1)** The damage increases by 1d8.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Cry of Destruction', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const DazzlingFlash = Abilities.defineAbility('spell/dazzling-flash', {
  name: 'Dazzling Flash',
  description:
    '*Uncommon, Cleric, Concentrate, Focus, Light, Manipulate, Visual*\n\n**Domain** Sun\n\n**Area** 15-foot cone\n\n**Defense** Fortitude\n\nYou raise your religious symbol and create a blinding flash of light. Each creature in the area must attempt a Fortitude save.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature is dazzled for 1 round.\n\n**Failure** The creature is blinded for 1 round and dazzled for 1 minute. The creature can spend an Interact action rubbing its eyes to end the blinded condition.\n\n**Critical Failure** The creature is blinded for 1 round and dazzled for 1 hour.\n\n**Heightened (3rd)** The area increases to a 30-foot cone.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Dazzling Flash', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const DeathsCall = Abilities.defineAbility('spell/deaths-call', {
  name: "Death's Call",
  description:
    "*Uncommon, Cleric, Concentrate, Focus*\n\n**Domain** Death\n\n**Trigger** A living creature within 20 feet of you dies, or an undead creature within 20 feet of you is destroyed\n\n**Duration** 1 minute\n\nSeeing another pass from this world invigorates you. You gain temporary Hit Points equal to the triggering creature's level plus your spellcasting attribute modifier. If the triggering creature was undead, double the number of temporary Hit Points you gain. These last for the duration of the spell, and the spell ends if all the temporary Hit Points are depleted earlier.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: "Death's Call", action: ActionTypes.Reaction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const FaceInTheCrowd = Abilities.defineAbility('spell/face-in-the-crowd', {
  name: 'Face in the Crowd',
  description:
    "*Uncommon, Cleric, Focus, Manipulate, Visual*\n\n**Domain** Cities\n\n**Duration** 1 minute\n\nWhile in a crowd of roughly similar creatures, your appearance becomes bland and nondescript. You gain a +2 status bonus to Deception and Stealth checks to go incognito among the crowd, and you ignore difficult terrain caused by the crowd. This counts as setting up a disguise for the Impersonate use of Deception and you add your level even if you're untrained.\n\n**Heightened (3rd)** The spell gains a range of 10 feet and can target up to 10 creatures.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Face in the Crowd', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const FireRay = Abilities.defineAbility('spell/fire-ray', {
  name: 'Fire Ray',
  description:
    "*Uncommon, Attack, Cleric, Concentrate, Fire, Focus, Manipulate*\n\n**Domain** Fire\n\n**Range** 60 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\n**Duration** until the end of the target's next turn\n\nA blazing band of fire arcs through the air, lighting your opponent and the ground they stand upon on fire. Make a spell attack roll against the target's AC. The ray deals 2d6 fire damage on a hit (or double damage on a critical hit). On any result other than a critical failure, the ground in the target's space catches fire, dealing 1d6 fire damage to each creature that ends its turn in one of the squares.\n\n**Heightened (+1)** The ray's initial damage increases by 2d6, and the fire damage dealt by the burning space increases by 1d6.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Fire Ray', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const HealersBlessing = Abilities.defineAbility('spell/healers-blessing', {
  name: "Healer's Blessing",
  description:
    "*Uncommon, Cleric, Concentrate, Focus*\n\n**Domain** Healing\n\n**Range** 30 feet\n\n**Target** 1 willing living creature\n\n**Duration** 1 minute\n\nYour words bless a creature with an enhanced connection to vital energy. When the target regains Hit Points from a healing vitality spell, it regains 2 additional Hit Points.\n\nThe target regains additional Hit Points from _healer's blessing_ only the first time it regains HP from a given healing spell, so a spell that heals the creature repeatedly over a duration would restore additional Hit Points only once, when they are first healed.\n\n**Heightened (+1)** The additional healing increases by 2 HP.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: "Healer's Blessing", action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const HurtlingStone = Abilities.defineAbility('spell/hurtling-stone', {
  name: 'Hurtling Stone',
  description:
    "*Uncommon, Attack, Cleric, Earth, Focus, Manipulate*\n\n**Domain** Earth\n\n**Range** 60 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\nYou evoke a magical stone and throw it, with divine guide to your aim. The stone deals 2d6 bludgeoning damage depending on your spell attack roll against the target's AC.\n\n**Critical Success** The target takes double damage and you can push it up to 10 feet.\n\n**Success** The target takes full damage and you can push it up to 5 feet.\n\n**Heightened (+1)** The stone's damage increases by 1d6.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Hurtling Stone', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const IgniteAmbition = Abilities.defineAbility('spell/ignite-ambition', {
  name: 'Ignite Ambition',
  description:
    "*Uncommon, Cleric, Concentrate, Emotion, Focus, Mental, Subtle*\n\n**Domain** Ambition\n\n**Trigger** You or an ally in range attempt to use a mental effect to convince a creature to do something (such as a Coerce, Request, or a suggestion spell)\n\n**Range** 60 feet\n\n**Target** one creature being influenced\n\n**Defense** Will\n\nYou strengthen the target's ambition, increase its resentment of its allies, and make its allegiances more susceptible to change. It must attempt a Will save.\n\n**Critical Success** The target is unaffected and realized you attempted to influence its reaction with magic.\n\n**Success** The target takes a –1 status penalty to its defenses against the triggering effect. This penalty is –2 if the target is being encouraged to advance its own ambitions. The target doesn't realize you Cast the Spell on it.\n\n**Failure** As success, but the status penalty is –4 if the target is being encouraged to advance its own ambitions.\n\n**Critical Failure** As success, but the creature automatically follows a suggestion that advances its own ambitions.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Ignite Ambition', action: ActionTypes.Reaction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const MagicsVessel = Abilities.defineAbility('spell/magics-vessel', {
  name: "Magic's Vessel",
  description:
    "*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Magic\n\n**Range** touch\n\n**Target** 1 creature\n\n**Duration** sustained up to 1 minute\n\nA creature becomes a divine receptacle for pure magical energy. The target gains a +1 status bonus to saving throws. Each time you Cast a Spell from your spell slots, you automatically Sustain this spell and grant its target resistance to damage from spells equal to the spell's rank, until the start of your next turn.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: "Magic's Vessel", action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const Moonbeam = Abilities.defineAbility('spell/moonbeam', {
  name: 'Moonbeam',
  description:
    "*Uncommon, Attack, Cleric, Concentrate, Fire, Focus, Light, Manipulate*\n\n**Domain** Moon\n\n**Range** 120 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\nYou shine a ray of moonlight. Make a spell attack roll. The beam of light deals 2d6 fire damage. This is silver damage for the purposes of weaknesses, resistances, and the like.\n\n**Critical Success** The beam deals double damage, and the target is dazzled for 1 minute.\n\n**Success** The beam deals full damage, and the target is dazzled for 1 round.\n\n**Heightened (+1)** The ray's damage increases by 1d6.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Moonbeam', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const Overstuff = Abilities.defineAbility('spell/overstuff', {
  name: 'Overstuff',
  description:
    "*Uncommon, Cleric, Concentrate, Focus, Manipulate*\n\n**Domain** Indulgence\n\n**Range** 30 feet\n\n**Target** 1 living creature\n\n**Defense** Fortitude\n\nHuge amounts of food and drink fill the target. It receives a full meal's worth of nourishment and must attempt a Fortitude save. A target sickened by this spell takes a –10-foot status penalty to its Speed until it's no longer sickened.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is sickened 1, but if it spends an action to end the condition, it succeeds automatically.\n\n**Failure** The target is sickened 1.\n\n**Critical Failure** The target is sickened 2.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Overstuff', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const PerfectedMind = Abilities.defineAbility('spell/perfected-mind', {
  name: 'Perfected Mind',
  description:
    '*Uncommon, Cleric, Concentrate, Focus*\n\n**Domain** Perfection\n\nYou meditate upon perfection to remove all distractions from your mind. Attempt a new Will save against one mental effect currently affecting you that required a Will save. Use the result of this new save to determine the outcome of the mental effect, unless the new save would have a worse result than the original save, in which case nothing happens. You can use _perfected mind_ against a given effect only once.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Perfected Mind', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const ProtectorsSacrifice = Abilities.defineAbility('spell/protectors-sacrifice', {
  name: "Protector's Sacrifice",
  description:
    "*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Protection\n\n**Trigger** An ally within 30 feet takes damage\n\n**Range** 30 feet\n\nYou protect your ally by suffering in their stead. Reduce the damage the ally would take by 3. You redirect this damage to yourself, but your immunities, weaknesses, resistances and so on do not apply\n\nYou aren't subject to any conditions or other effects of whatever damaged your ally (such as poison from a venomous bite). Your ally is still subject to those effects even if you redirect all of the triggering damage to yourself.\n\n**Heightened (+1)** The damage you redirect increases by 3.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: "Protector's Sacrifice", action: ActionTypes.Reaction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const PushingGust = Abilities.defineAbility('spell/pushing-gust', {
  name: 'Pushing Gust',
  description:
    '*Uncommon, Air, Cleric, Concentrate, Focus, Manipulate*\n\n**Domain** Air\n\n**Range** 500 feet\n\n**Target** 1 creature\n\n**Defense** Fortitude\n\nGiving the air a push, you buffet the target with a powerful gust of wind; it must attempt a Fortitude save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is pushed 5 feet away from you.\n\n**Failure** The target is pushed 10 feet away from you.\n\n**Critical Failure** The target is pushed 10 feet away from you and knocked prone.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Pushing Gust', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const ReadFate = Abilities.defineAbility('spell/read-fate', {
  name: 'Read Fate',
  description:
    "*Uncommon, Cleric, Concentrate, Focus, Manipulate, Prediction*\n\n**Domain** Fate\n\n**Range** 30 feet\n\n**Target** 1 creature other than you\n\nYou attempt to learn more about the target's fate in the short term, usually within the next day for most prosaic creatures, or the next hour or less for someone likely to have multiple rapid experiences, such as someone actively adventuring.\n\nYou learn a single enigmatic word connected to the creature's fate in that time frame. Fate is notoriously inscrutable, and the word isn't necessarily meant to be taken at face value, so the meaning is often clear only in hindsight. The GM rolls a secret DC 6 flat check. If the creature's fate is too uncertain, or on a failed flat check, the spell yields the word “inconclusive.” Either way, the creature is then temporarily immune for 24 hours.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Read Fate', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const SavorTheSting = Abilities.defineAbility('spell/savor-the-sting', {
  name: 'Savor the Sting',
  description:
    '*Uncommon, Cleric, Focus, Manipulate, Mental, Nonlethal*\n\n**Domain** Pain\n\n**Range** touch\n\n**Target** 1 creature\n\n**Defense** Will\n\nYou inflict pain upon the target and revel in their anguish. This deals 1d4 mental damage and 1d4 persistent mental damage; the target must attempt a Will save. As long as the target is taking persistent damage from this spell, you gain a +1 status bonus to attack rolls and skill checks against the target.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes half damage and no persistent damage.\n\n**Failure** The target takes full initial and persistent damage.\n\n**Critical Failure** The target takes double initial and persistent damage.\n\n**Heightened (+1)** The initial damage increases by 1d4 and the persistent damage increases by 1d4.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Savor the Sting', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const ScholarlyRecollection = Abilities.defineAbility('spell/scholarly-recollection', {
  name: 'Scholarly Recollection',
  description:
    "*Uncommon, Cleric, Focus, Fortune*\n\n**Domain** Knowledge\n\n**Trigger** You attempt a Perception check to Seek, or you attempt a skill check to Recall Knowledge with a skill you’re trained in\n\nSpeaking a short prayer as you gather your thoughts, you're blessed to find yourself pointed in the right direction. The GM rolls the triggering check twice and uses the better result.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Scholarly Recollection', action: ActionTypes.Reaction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const SoothingWords = Abilities.defineAbility('spell/soothing-words', {
  name: 'Soothing Words',
  description:
    '*Uncommon, Cleric, Concentrate, Emotion, Focus, Mental*\n\n**Domain** Family\n\n**Range** 30 feet\n\n**Target** 1 ally\n\n**Duration** 1 minute\n\nYou attempt to calm the target by uttering soothing words in a calm and even tone. The target gains a +1 status bonus to Will saving throws. This bonus increases to +2 against emotion effects.\n\nIn addition, when you Cast this Spell, you can attempt to counteract one emotion effect on the target.\n\n**Heightened (5th)** The bonus to saves increases to +2, or +3 against emotion effects.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Soothing Words', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const SuddenShift = Abilities.defineAbility('spell/sudden-shift', {
  name: 'Sudden Shift',
  description:
    '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Trickery\n\n**Trigger** An enemy misses you with a melee attack\n\n**Duration** until the end of your next turn\n\nYou swiftly move from a dangerous spot and veil yourself. You Step and become concealed.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Sudden Shift', action: ActionTypes.Reaction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const SweetDream = Abilities.defineAbility('spell/sweet-dream', {
  name: 'Sweet Dream',
  description:
    "*Uncommon, Auditory, Cleric, Concentrate, Focus, Linguistic, Manipulate, Mental, Sleep*\n\n**Domain** Dreams\n\n**Range** 30 feet\n\n**Target** 1 willing creature\n\n**Duration** 1 hour\n\nWith soothing words, you lull the target into an enchanting dream. When you Cast the Spell, the target falls unconscious if it wasn't already. While unconscious, it experiences a dream of your choice, though lucidly enough it can wake when it pleases. If it wakes up before 1 minute of sleep has passed, the spell ends.\n\n- **Dream of Insight** +1 status bonus to Intelligence-based skill checks\n\n- **Dream of Glamor** +1 status bonus to Charisma-based skill checks\n\n- **Dream of Voyaging** +5-foot status bonus to Speed.\n\nIf you Cast this Spell again, any previous sweet dream you cast ends.\n\n**Heightened (4th)** The bonus for a dream of insight or glamor is +2.\n\n**Heightened (7th)** The bonus for a dream of insight or glamor is +3.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Sweet Dream', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const TidalSurge = Abilities.defineAbility('spell/tidal-surge', {
  name: 'Tidal Surge',
  description:
    '*Uncommon, Cleric, Focus, Manipulate, Water*\n\n**Domain** Water\n\n**Range** 60 feet\n\n**Target** 1 creature\n\nYou call forth a tremendous wave to move the target either in a body of water or on the ground. You move the target up to 10 feet in any direction along the ground or 20 feet through a body of water. An unwilling target can attempt a Fortitude save, and it avoids being moved if it succeeds.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Tidal Surge', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const TouchOfObedience = Abilities.defineAbility('spell/touch-of-obedience', {
  name: 'Touch of Obedience',
  description:
    "*Uncommon, Cleric, Focus, Manipulate, Mental*\n\n**Domain** Tyranny\n\n**Range** touch\n\n**Target** 1 living creature\n\n**Defense** Will\n\n**Duration** varies\n\nYour imperious touch erodes the target's willpower, making it easier to control. The target attempts a Will save. Regardless of the result, it's then temporarily immune for 1 hour.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is stupefied 1 until the end of your next turn.\n\n**Failure** The target is stupefied 2 until the end of your next turn.\n\n**Critical Failure** The target is stupefied 2 for 1 minute and is forced to its knees, becoming prone.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Touch of Obedience', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const TouchOfUndeath = Abilities.defineAbility('spell/touch-of-undeath', {
  name: 'Touch of Undeath',
  description:
    "*Uncommon, Cleric, Focus, Manipulate, Void*\n\n**Domain** Undeath\n\n**Range** touch\n\n**Target** 1 living creature\n\n**Defense** Fortitude\n\n**Duration** varies\n\nYou attack the target's life force with undeath, dealing 1d6 void damage. The target must attempt a Fortitude save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes half damage.\n\n**Failure** The target takes full damage, and vitality effects heal it only half as much as normal for 1 round.\n\n**Critical Failure** The target takes double damage, and vitality effects heal it only half as much as normal for 1 minute.\n\n**Heightened (+1)** The damage increases by 1d6.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Touch of Undeath', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const UnimpededStride = Abilities.defineAbility('spell/unimpeded-stride', {
  name: 'Unimpeded Stride',
  description:
    '*Uncommon, Cleric, Focus, Manipulate*\n\n**Domain** Freedom\n\nDivine grace ensure that nothing can keep you prisoner or hold you back. You immediately escape from every magical effect that has you immobilized or grabbed unless the effect is of a higher rank than your _unimpeded stride_ spell. You then Stride. During this movement, you ignore difficult terrain and any circumstance or status penalties to your Speed.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Unimpeded Stride', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const VeilOfConfidence = Abilities.defineAbility('spell/veil-of-confidence', {
  name: 'Veil of Confidence',
  description:
    '*Uncommon, Cleric, Concentrate, Focus, Mental*\n\n**Domain** Confidence\n\n**Duration** 1 minute\n\nYou surround yourself in confidence. You reduce your current frightened condition by 1, and whenever you would become frightened during the duration, reduce the amount by 1. If you critically fail a save against a fear effect, _veil of confidence_ reduces your frightened value from that effect, and then ends.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Veil of Confidence', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const VibrantThorns = Abilities.defineAbility('spell/vibrant-thorns', {
  name: 'Vibrant Thorns',
  description:
    "*Uncommon, Cleric, Focus, Manipulate, Morph, Plant, Wood*\n\n**Domain** Nature\n\n**Duration** 1 minute\n\nYour body sprouts brambly thorns that thrive on life magic. Adjacent creatures that hit you with a melee attack, as well as creatures that hit you with unarmed attacks, take 1 piercing damage each time they do. Anytime you cast a vitality spell, the thorns' damage increases to 1d6 until the start of your next turn.\n\n**Heightened (+1)** The damage increases by 1, or 1d6 after you cast a vitality spell.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Vibrant Thorns', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const WakingNightmare = Abilities.defineAbility('spell/waking-nightmare', {
  name: 'Waking Nightmare',
  description:
    "*Uncommon, Cleric, Concentrate, Emotion, Fear, Focus, Manipulate, Mental*\n\n**Domain** Nightmares\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** varies\n\nYou fill the creature's mind with a terrifying vision. The target must attempt a Will save. A creature frightened by this spell takes 1 additional mental damage each time it's hit by a Strike.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is frightened 1.\n\n**Failure** The target is frightened 2. If it's asleep, it wakes up and is paralyzed for 1 round.\n\n**Critical Failure** As failure, but frightened 3.\n\n**Heightened (+1)** The mental damage increases by 1.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Waking Nightmare', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const WeaponSurge = Abilities.defineAbility('spell/weapon-surge', {
  name: 'Weapon Surge',
  description:
    "*Uncommon, Cleric, Focus, Manipulate, Sanctified*\n\n**Domain** Zeal\n\n**Range** touch\n\n**Target** 1 weapon you're wielding\n\n**Duration** until the start of your next turn\n\nHolding your weapon aloft, you fill it with divine energy. On your next Strike with that weapon before the start of your next turn, you gain a +1 status bonus to the attack roll, the weapon deals an additional 1d6 spirit damage, and the Strike gains the sanctified trait. Weapon surge ends once you complete this Strike or the weapon leaves your possession.\n\n**Heightened (5th)** The attack deals 2d6 additional spirit damage.\n\n**Heightened (9th)** The attack deals 3d6 additional spirit damage.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Weapon Surge', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const WhisperingQuiet = Abilities.defineAbility('spell/whispering-quiet', {
  name: 'Whispering Quiet',
  description:
    "*Uncommon, Cleric, Focus, Manipulate, Sonic*\n\n**Domain** Secrecy\n\n**Range** 60 feet\n\n**Area** 15-foot burst\n\n**Duration** 1 minute\n\nYou suppress sound in an area, preventing anyone from giving away valuable secrets. This doesn't prevent those in the area from talking or Casting a Spell, but no creature more than 5 feet away can hear its voice without succeeding at a Perception check against your spell DC, which might interfere with auditory or linguistic effects as well as communication. Other sounds created in the area are muffled to a similar volume unless that sound is created by an effect with the sonic trait.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Whispering Quiet', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const WordOfTruth = Abilities.defineAbility('spell/word-of-truth', {
  name: 'Word of Truth',
  description:
    "*Uncommon, Cleric, Concentrate, Focus*\n\n**Domain** Truth\n\n**Duration** sustained up to 1 minute\n\nYou speak a statement that you believe to be true and that is free of any attempt to deceive through twisting words, omission, and so on. The statement must be 25 words or fewer. A symbol of your deity glows above your head and lasts for the spell's duration, and anyone who sees you and hears you speak knows instinctively that you believe what you say is true. This assurance of honesty grants you a +2 status bonus to Diplomacy checks as long as the symbol persists. You can Dismiss the spell, and if you say something that you don't believe is entirely true, the spell ends before you complete your statement.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Word of Truth', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
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
]
