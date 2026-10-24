import { Content } from '@simulacrum/ruleset'
import {
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
} from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Skills = Content.defineSection('skills', {
  content: {
    name: 'Skills',
    description: `Skills in Khydrian Drift are categorized by type and are each associated with one of the primary attributes. These skills are used to resolve various actions and challenges outside of combat, reflecting your character’s specialized training and natural aptitude in the game world.`,
  },
})

export const AthleticsSkill = Content.linkEntity(Skills, Athletics)

export const CharmSkill = Content.linkEntity(Skills, Charm)

export const CoercionSkill = Content.linkEntity(Skills, Coercion)

export const ComputersSkill = Content.linkEntity(Skills, Computers)

export const CoordinationSkill = Content.linkEntity(Skills, Coordination)

export const DeceptionSkill = Content.linkEntity(Skills, Deception)

export const DisciplineSkill = Content.linkEntity(Skills, Discipline)

export const GridRunningSkill = Content.linkEntity(Skills, GridRunning)

export const InvestigationSkill = Content.linkEntity(Skills, Investigation)

export const LeadershipSkill = Content.linkEntity(Skills, Leadership)

export const LoreSkill = Content.linkEntity(Skills, Lore)

export const MechanicsSkill = Content.linkEntity(Skills, Mechanics)

export const MedicineSkill = Content.linkEntity(Skills, Medicine)

export const NavigationSkill = Content.linkEntity(Skills, Navigation)

export const PerformanceSkill = Content.linkEntity(Skills, Performance)

export const PilotingSkill = Content.linkEntity(Skills, Piloting)

export const StatecraftSkill = Content.linkEntity(Skills, Statecraft)

export const StealthSkill = Content.linkEntity(Skills, Stealth)

export const StreetwiseSkill = Content.linkEntity(Skills, Streetwise)

export const SurvivalSkill = Content.linkEntity(Skills, Survival)

export const VigilanceSkill = Content.linkEntity(Skills, Vigilance)

export const SkillsContent = [
  Skills,
  AthleticsSkill,
  CharmSkill,
  CoercionSkill,
  ComputersSkill,
  CoordinationSkill,
  DeceptionSkill,
  DisciplineSkill,
  GridRunningSkill,
  InvestigationSkill,
  LeadershipSkill,
  LoreSkill,
  MechanicsSkill,
  MedicineSkill,
  NavigationSkill,
  PerformanceSkill,
  PilotingSkill,
  StatecraftSkill,
  StealthSkill,
  StreetwiseSkill,
  SurvivalSkill,
  VigilanceSkill,
]
