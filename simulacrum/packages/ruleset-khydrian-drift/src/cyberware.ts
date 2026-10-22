import { Abilities, Archetypes } from '@simulacrum/ruleset'

export const Cyberware = Archetypes.defineArchetype('cyberware', { name: 'Cyberware', description: '' })

export const OcularImplants = Abilities.defineAbility('cyberware/ocular-implants', {
  name: 'Ocular Implants',
  description: '',
  archetypes: [Cyberware],
})

export const MyomerArmature = Abilities.defineAbility('cyberware/myomer-armature', {
  name: 'Myomer Armature',
  description: '',
  archetypes: [Cyberware],
})

export const KineticLimbs = Abilities.defineAbility('cyberware/kinetic-limbs', { name: 'Kinetic Limbs', description: '', archetypes: [Cyberware] })

export const AllCyberware = [OcularImplants, MyomerArmature, KineticLimbs]
