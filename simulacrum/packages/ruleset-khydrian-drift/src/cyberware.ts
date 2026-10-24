import { Abilities, Archetypes, Traits } from '@simulacrum/ruleset'
import { CyberwareLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { ModularCybernetics } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-cybernetics'

export const Cyberware = Archetypes.defineAbilityArchetype('cyberware', { name: 'Cyberware' })

export const OcularImplants = Abilities.defineAbility('cyberware/ocular-implants', {
  name: 'Ocular Implants',
  archetypes: [Cyberware],
  loadout: CyberwareLoadout,
  prerequisites: [Traits.traitPrerequisite(ModularCybernetics)],
})

export const MyomerArmature = Abilities.defineAbility('cyberware/myomer-armature', {
  name: 'Myomer Armature',
  archetypes: [Cyberware],
  loadout: CyberwareLoadout,
  prerequisites: [Traits.traitPrerequisite(ModularCybernetics)],
})

export const KineticLimbs = Abilities.defineAbility('cyberware/kinetic-limbs', {
  name: 'Kinetic Limbs',
  archetypes: [Cyberware],
  loadout: CyberwareLoadout,
  prerequisites: [Traits.traitPrerequisite(ModularCybernetics)],
})

export const AllCyberware = [OcularImplants, MyomerArmature, KineticLimbs]
