import { Tags } from '@simulacrum/ruleset'

export const Humanoid = Tags.defineCreatureTag('creature-type/humanoid', {
  name: 'Humanoid',
  description: `Humanoid is the most common creature type, including all standard player races. Humanoids are generally susceptible to normal forms of combat and social interaction.`,
})

export const Mechanical = Tags.defineCreatureTag('creature-type/mechanical', {
  name: 'Mechanical',
  description: `Mechanical creatures are constructs, robots, and creatures heavily augmented by technology. They are often immune to effects that target organic biology, but may be vulnerable to tech-based attacks.`,
})

export const Aberration = Tags.defineCreatureTag('creature-type/aberration', {
  name: 'Aberration',
  description: `Aberrations are strange, often alien creatures whose biology and psychology defy natural laws. They are typically associated with Khydrian (psionic/magic) abilities and mental effects.`,
})

export const Beast = Tags.defineCreatureTag('creature-type/beast', {
  name: 'Beast',
  description: `Beasts are natural or engineered animals, from guard dogs and feral wildlife to bioengineered predators. They act on instinct rather than reason, and are generally unaffected by social interaction.`,
})

export const AllCreatureTypes = [Humanoid, Mechanical, Aberration, Beast]
