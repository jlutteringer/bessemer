import { Content } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Skills = Content.defineSection('skills', {
  content: {
    name: 'Skills',
    description: `Skills in Khydrian Drift are categorized by type and are each associated with one of the primary attributes. These skills are used to resolve various actions and challenges outside of combat, reflecting your character’s specialized training and natural aptitude in the game world.`,
  },
})

export const Athletics = Content.linkEntity(Skills, PlayerCharacteristics.Athletics)

export const Charm = Content.linkEntity(Skills, PlayerCharacteristics.Charm)

export const Coercion = Content.linkEntity(Skills, PlayerCharacteristics.Coercion)

export const Computers = Content.linkEntity(Skills, PlayerCharacteristics.Computers)

export const Coordination = Content.linkEntity(Skills, PlayerCharacteristics.Coordination)

export const Deception = Content.linkEntity(Skills, PlayerCharacteristics.Deception)

export const Discipline = Content.linkEntity(Skills, PlayerCharacteristics.Discipline)

export const GridRunning = Content.linkEntity(Skills, PlayerCharacteristics.GridRunning)

export const Investigation = Content.linkEntity(Skills, PlayerCharacteristics.Investigation)

export const Leadership = Content.linkEntity(Skills, PlayerCharacteristics.Leadership)

export const Lore = Content.linkEntity(Skills, PlayerCharacteristics.Lore)

export const Mechanics = Content.linkEntity(Skills, PlayerCharacteristics.Mechanics)

export const Medicine = Content.linkEntity(Skills, PlayerCharacteristics.Medicine)

export const Navigation = Content.linkEntity(Skills, PlayerCharacteristics.Navigation)

export const Performance = Content.linkEntity(Skills, PlayerCharacteristics.Performance)

export const Piloting = Content.linkEntity(Skills, PlayerCharacteristics.Piloting)

export const Statecraft = Content.linkEntity(Skills, PlayerCharacteristics.Statecraft)

export const Stealth = Content.linkEntity(Skills, PlayerCharacteristics.Stealth)

export const Streetwise = Content.linkEntity(Skills, PlayerCharacteristics.Streetwise)

export const Survival = Content.linkEntity(Skills, PlayerCharacteristics.Survival)

export const Vigilance = Content.linkEntity(Skills, PlayerCharacteristics.Vigilance)

export const SkillsContent = [
  Skills,
  Athletics,
  Charm,
  Coercion,
  Computers,
  Coordination,
  Deception,
  Discipline,
  GridRunning,
  Investigation,
  Leadership,
  Lore,
  Mechanics,
  Medicine,
  Navigation,
  Performance,
  Piloting,
  Statecraft,
  Stealth,
  Streetwise,
  Survival,
  Vigilance,
]
