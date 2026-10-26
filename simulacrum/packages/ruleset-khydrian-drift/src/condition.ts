import { Tags } from '@simulacrum/ruleset'

export const Blinded = Tags.defineCreatureTag('condition/blinded', {
  name: 'Blinded',
  description: `A blinded creature can’t see, whether from a flashbang, a damaged optical implant, or total darkness.

- The creature automatically fails any check that requires sight.
- Attack rolls against the creature have advantage.
- The creature’s attack rolls have disadvantage.`,
})

export const Burning = Tags.defineCreatureTag('condition/burning', {
  name: 'Burning',
  description: `A burning creature keeps taking damage over time, whether from flames, a bleeding wound, or anything else that keeps hurting it after the initial hit. Burning always comes with a damage amount and a [damage type](content:combat/damage-types), written as Burning (1d6 + P Fire) for flames or Burning (1d4 Physical) for bleeding, and lasts for the duration of the effect that applied it.

- The creature takes the listed damage during the [Sustain Phase](content:combat/sustain-phase) of the creature that applied the condition.
- The condition ends when its duration runs out.
- Burning stacks. A creature can be burning from several effects at once, and takes the damage from each one, with each lasting for its own duration.`,
})

export const Charmed = Tags.defineCreatureTag('condition/charmed', {
  name: 'Charmed',
  description: `A charmed creature has been swayed by another creature, through manipulation, neural hacking, or chemical influence.

- The creature can’t attack the charmer or target the charmer with harmful abilities or effects.
- The charmer has advantage on any check to interact socially with the creature.`,
})

export const Deafened = Tags.defineCreatureTag('condition/deafened', {
  name: 'Deafened',
  description: `A deafened creature can’t hear, whether from a concussive blast, a damaged auditory implant, or overwhelming noise.

- The creature automatically fails any check that requires hearing.`,
})

export const Exhaustion = Tags.defineCreatureTag('condition/exhaustion', {
  name: 'Exhaustion',
  description: `Exhaustion builds up in levels, from 1 to 6, as a creature is pushed beyond its limits. Each time a creature gains this condition, its exhaustion level increases by 1.

- The creature’s attack rolls and checks are reduced by 2 times its exhaustion level.
- The creature’s speed is reduced by 1 square for each exhaustion level.
- The creature dies if its exhaustion level reaches 6.
- Finishing a long rest reduces the creature’s exhaustion level by 1. The condition ends when its exhaustion level reaches 0.`,
})

export const Frightened = Tags.defineCreatureTag('condition/frightened', {
  name: 'Frightened',
  description: `A frightened creature is overcome by fear of a particular source, such as an enemy or a threat it can’t overcome.

- The creature has disadvantage on attack rolls and checks while the source of its fear is within line of sight.
- The creature can’t willingly move closer to the source of its fear.`,
})

export const Grappled = Tags.defineCreatureTag('condition/grappled', {
  name: 'Grappled',
  description: `A grappled creature is held in place by another creature, its grappler. See [Grappling](content:combat/grappling) for how a creature grapples another and how to escape.

- The creature’s speed is 0 and can’t increase.
- The creature has disadvantage on attack rolls against any target other than the grappler.
- The grappler can drag or carry the creature when it moves.
- The condition ends if the grappler is [incapacitated](creature-tag:condition/incapacitated), or if an effect moves the creature out of the grappler’s reach.`,
})

export const Incapacitated = Tags.defineCreatureTag('condition/incapacitated', {
  name: 'Incapacitated',
  description: `An incapacitated creature is unable to act or defend itself.

- The creature can’t take actions.
- The creature cannot move.
- The creature drops whatever it’s holding and falls prone.
- Attack rolls against the creature have advantage.`,
})

export const Invisible = Tags.defineCreatureTag('condition/invisible', {
  name: 'Invisible',
  description: `An invisible creature can’t be seen, whether through optical camouflage, a cloaking field, or similar technology.

- The creature has advantage on its initiative check.
- The creature isn’t affected by any effect that requires its target to be seen, unless the effect’s creator can somehow see it.
- Attack rolls against the creature have disadvantage.
- The creature’s attack rolls have advantage.`,
})

export const Paralyzed = Tags.defineCreatureTag('condition/paralyzed', {
  name: 'Paralyzed',
  description: `A paralyzed creature’s body has locked up, from a neurotoxin, a nerve disruptor, or a hijacked cybernetic system.

- The creature is [incapacitated](creature-tag:condition/incapacitated).
- The creature’s speed is 0 and can’t increase.
- Attacks against the creature’s Fortitude and Reflex defense automatically hit.
- Attack rolls against the creature have advantage.
- Any attack that hits the creature is a critical hit if the attacker is within 1 square of it.`,
})

export const Petrified = Tags.defineCreatureTag('condition/petrified', {
  name: 'Petrified',
  description: `A petrified creature has been turned into, or encased in, an inanimate substance such as stone or a stasis field. Its weight increases by a factor of ten, and it stops aging.

- The creature is [incapacitated](creature-tag:condition/incapacitated) and unaware of its surroundings.
- The creature’s speed is 0 and can’t increase.
- Attacks against the creature’s Fortitude and Reflex defense automatically hit.
- Attack rolls against the creature have advantage.
- The creature takes half damage from all sources.
- The creature can’t be [poisoned](creature-tag:condition/poisoned), and any poison already in its system is suspended.`,
})

export const Poisoned = Tags.defineCreatureTag('condition/poisoned', {
  name: 'Poisoned',
  description: `A poisoned creature is weakened by a toxin, a disease, or a corrupted chemical implant.

- The creature has disadvantage on attack rolls and checks.`,
})

export const Primed = Tags.defineCreatureTag('condition/primed', {
  name: 'Primed',
  description: `Various effects prime creatures, and various effects detonate them.

- **Detonate:** When an effect causes a primed creature to detonate, the condition ends. The effect says how much damage the detonation deals and which creatures it affects.`,
})

export const Prone = Tags.defineCreatureTag('condition/prone', {
  name: 'Prone',
  description: `A prone creature is lying on the ground, either because it was knocked down or because it threw itself down. See [Being Prone](content:combat/being-prone) for how a prone creature moves and stands up.

- The creature’s only movement options are to crawl, or to spend half its speed to stand up and end the condition.
- The creature has disadvantage on attack rolls.
- Attack rolls against the creature have advantage if the attacker is within 1 square of it. Otherwise, they have disadvantage.`,
})

export const Restrained = Tags.defineCreatureTag('condition/restrained', {
  name: 'Restrained',
  description: `A restrained creature is bound or entangled, whether by restraints, a net, or a gravity snare.

- The creature cannot move.
- Attack rolls against the creature’s Armor Class, Fortitude and Reflex defense have advantage.
- The creature’s attack rolls have disadvantage.`,
})

export const Stunned = Tags.defineCreatureTag('condition/stunned', {
  name: 'Stunned',
  description: `A stunned creature is overwhelmed and can barely react, from a shock baton, an EMP to its implants, or a powerful blow.

- The creature can’t take actions.
- The creature cannot move.`,
})

export const Unconscious = Tags.defineCreatureTag('condition/unconscious', {
  name: 'Unconscious',
  description: `An unconscious creature has been knocked out or has fallen unconscious from its injuries.

- The creature is [incapacitated](creature-tag:condition/incapacitated) and [prone](creature-tag:condition/prone).
- The creature’s speed is 0 and can’t increase.
- The creature is unaware of its surroundings.
- Attacks against the creature’s Fortitude and Reflex defense automatically hit.
- Attack rolls against the creature have advantage.
- Any attack that hits the creature is a critical hit if the attacker is within 1 square of it.`,
})

export const Vulnerable = Tags.defineCreatureTag('condition/vulnerable', {
  name: 'Vulnerable',
  description: `A vulnerable creature has an opening in its defenses, from a cracked armor plate, a disrupted shield, or a moment of exposure.

- The next attack that hits the creature deals double damage, and the condition ends.`,
})

export const AllConditions = [
  Blinded,
  Burning,
  Charmed,
  Deafened,
  Exhaustion,
  Frightened,
  Grappled,
  Incapacitated,
  Invisible,
  Paralyzed,
  Petrified,
  Poisoned,
  Primed,
  Prone,
  Restrained,
  Stunned,
  Unconscious,
  Vulnerable,
]
