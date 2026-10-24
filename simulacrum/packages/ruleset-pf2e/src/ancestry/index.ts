import { AllAncestryCommonEntities } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AllVersatileHeritageEntities } from '@simulacrum/ruleset-pf2e/ancestry/versatile-heritage'
import { AllDwarfEntities } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-dwarf'
import { AllElfEntities } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-elf'
import { AllGnomeEntities } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-gnome'
import { AllGoblinEntities } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-goblin'
import { AllHalflingEntities } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-halfling'
import { AllHumanEntities } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-human'
import { AllLeshyEntities } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-leshy'
import { AllOrcEntities } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-orc'

export const AllAncestryEntities = [
  ...AllAncestryCommonEntities,
  ...AllVersatileHeritageEntities,
  ...AllDwarfEntities,
  ...AllElfEntities,
  ...AllGnomeEntities,
  ...AllGoblinEntities,
  ...AllHalflingEntities,
  ...AllHumanEntities,
  ...AllLeshyEntities,
  ...AllOrcEntities,
]
