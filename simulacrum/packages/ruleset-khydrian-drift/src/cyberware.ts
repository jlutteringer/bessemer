import { Abilities, Tags, Traits } from '@simulacrum/ruleset'
import { CyberwareLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { ModularCybernetics } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-cybernetics'

export const Cyberware = Tags.defineAbilityTag('cyberware', { name: 'Cyberware' })

export const OcularImplants = Abilities.defineAbility('cyberware/ocular-implants', {
  name: 'Ocular Implants',
  tags: [Cyberware],
  loadout: CyberwareLoadout,
  prerequisites: [Traits.traitPrerequisite(ModularCybernetics)],
})

export const MyomerArmature = Abilities.defineAbility('cyberware/myomer-armature', {
  name: 'Myomer Armature',
  tags: [Cyberware],
  loadout: CyberwareLoadout,
  prerequisites: [Traits.traitPrerequisite(ModularCybernetics)],
})

export const KineticLimbs = Abilities.defineAbility('cyberware/kinetic-limbs', {
  name: 'Kinetic Limbs',
  tags: [Cyberware],
  loadout: CyberwareLoadout,
  prerequisites: [Traits.traitPrerequisite(ModularCybernetics)],
})

export const AllCyberware = [OcularImplants, MyomerArmature, KineticLimbs]
