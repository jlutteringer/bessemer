import { Abilities, Archetypes, Effects } from '@simulacrum/ruleset'
import { CyberwareLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'

export const Cyberware = Archetypes.defineArchetype('cyberware', { name: 'Cyberware' })

export const OcularImplants = Abilities.defineAbility('cyberware/ocular-implants', {
  name: 'Ocular Implants',
  archetypes: [Cyberware],
})

export const MyomerArmature = Abilities.defineAbility('cyberware/myomer-armature', {
  name: 'Myomer Armature',
  archetypes: [Cyberware],
})

export const KineticLimbs = Abilities.defineAbility('cyberware/kinetic-limbs', {
  name: 'Kinetic Limbs',
  archetypes: [Cyberware],
})

export const AllCyberware = [OcularImplants, MyomerArmature, KineticLimbs]

export const gainCyberware = () => AllCyberware.map((it) => Effects.gainAbility(it, CyberwareLoadout))
