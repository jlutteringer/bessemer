import { Abilities } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/archetype'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'

export const BloodWard = Abilities.defineAbility('spell/blood-ward', {
  name: 'Blood Ward',
  description:
    "*Uncommon, Focus, Hex, Manipulate, Witch*\n\n**Lesson** Lesson of Protection\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** sustained up to 1 minute\n\nYour patron's aegis descends to shield a target from harm. Designate one of the following creature traits: aberration, animal, beast, celestial, construct, dragon, elemental, fey, fiend, fungus, monitor, ooze, plant, or undead. The target gains a +1 status bonus to its saving throws and AC against creatures with that trait.\n\n**Heightened (5th)** The status bonus increases to +2.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Blood Ward', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const Cackle = Abilities.defineAbility('spell/cackle', {
  name: 'Cackle',
  description:
    '*Uncommon, Concentrate, Focus, Hex, Witch*\n\nWith a quick burst of laughter, you prolong a magical effect you created. You Sustain a spell.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Cackle', action: ActionTypes.FreeAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const ElementalBetrayal = Abilities.defineAbility('spell/elemental-betrayal', {
  name: 'Elemental Betrayal',
  description:
    '*Uncommon, Concentrate, Focus, Hex, Witch*\n\n**Lesson** Lesson of the Elements\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** sustained up to 1 minute\n\nYour patron uses its superior command of the elements, empowering them to undermine your foe. When you Cast this Spell, choose air, earth, metal, fire, water, or wood. The target gains weakness 2 to that trait.\n\n**Heightened (+2)** Increase the weakness by 1.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Elemental Betrayal', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const LifeBoost = Abilities.defineAbility('spell/life-boost', {
  name: 'Life Boost',
  description:
    "*Uncommon, Focus, Healing, Hex, Manipulate, Vitality, Witch*\n\n**Lesson** Lesson of Life\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** 4 rounds\n\nLife force from your patron floods into the target, ensuring they can continue doing your patron's will for just a little longer. The target gains fast healing 2.\n\n**Heightened (+1)** The fast healing increases by 2.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Life Boost', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const NeedleOfVengeance = Abilities.defineAbility('spell/needle-of-vengeance', {
  name: 'Needle of Vengeance',
  description:
    "*Uncommon, Focus, Hex, Manipulate, Mental, Witch*\n\n**Lesson** Lesson of Vengeance\n\n**Range** 30 feet\n\n**Target** 1 enemy\n\n**Defense** basic Will\n\n**Duration** sustained up to 1 minute\n\nA long, jagged needle jabs into the target foe's psyche whenever it tries to attack a creature your patron holds in special regard. Name yourself or one of your allies. The target takes 2 mental damage any time it uses a hostile action against the named creature, with a basic Will save.\n\n**Heightened (+1)** Increase the damage by 2.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Needle of Vengeance', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const PatronsPuppet = Abilities.defineAbility('spell/patrons-puppet', {
  name: "Patron's Puppet",
  description:
    '*Uncommon, Focus, Hex, Witch*\n\n**Trigger** Your turn begins\n\nAt your unspoken plea, your patron temporarily assumes control over your familiar. You Command your familiar, allowing it to take its normal actions this turn. Your Command does not have the auditory or concentrate traits; your patron simply moves its agent directly.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: "Patron's Puppet", action: ActionTypes.FreeAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const PhaseFamiliar = Abilities.defineAbility('spell/phase-familiar', {
  name: 'Phase Familiar',
  description:
    '*Uncommon, Focus, Hex, Manipulate, Witch*\n\n**Trigger** Your familiar would take damage\n\n**Range** 60 feet\n\n**Target** your familiar\n\nYour patron momentarily recalls your familiar to the ether, shifting it from its solid, physical form into a ghostly version of itself. Against the triggering damage, your familiar gains resistance 5 to all damage and is immune to precision damage.\n\n**Heightened (+1)** Increase the resistance by 2.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Phase Familiar', action: ActionTypes.Reaction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const VeilOfDreams = Abilities.defineAbility('spell/veil-of-dreams', {
  name: 'Veil of Dreams',
  description:
    '*Uncommon, Focus, Hex, Manipulate, Mental, Witch*\n\n**Lesson** Lesson of Dreams\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nYour patron draws the target into a drowsy state, causing daydreams and sluggishness. The target must attempt a Will save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes a –1 status penalty to Perception, attack rolls, and Will saves. This penalty increases to –2 for Will saves against sleep effects.\n\n**Failure** As success, and any time the target uses a concentrate action, it must succeed at a DC 5 flat check or the action is disrupted.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Veil of Dreams', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const DeceiversCloak = Abilities.defineAbility('spell/deceivers-cloak', {
  name: "Deceiver's Cloak",
  description:
    '*Uncommon, Concentrate, Focus, Hex, Illusion, Manipulate, Witch*\n\n**Lesson** Lesson of Mischief\n\n**Duration** 1 hour\n\nYour patron drapes a cloak of illusion about you, making you appear as another creature of the same body shape with roughly similar height and weight as yourself. This has the effects of 3rd-rank _illusory disguise_.\n\n**Heightened (6th)** You can appear as any creature of the same size, even with a completely different body shape.',
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: "Deceiver's Cloak", action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const MaliciousShadow = Abilities.defineAbility('spell/malicious-shadow', {
  name: 'Malicious Shadow',
  description:
    "*Uncommon, Concentrate, Focus, Hex, Manipulate, Shadow, Witch*\n\n**Lesson** Lesson of Shadow\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\n**Duration** sustained up to 1 minute\n\nYour patron warps the target's shadow into a deadly form, such as strangling hands, a dangerous weapon, harrying runes, or the like. The shadow moves along with the target, always remaining within reach. When you Cast the Spell, and each time you Sustain it, the shadow Strikes the target. The shadow's Strikes are melee spell attacks that deal 2d10 damage. You choose the type of damage (bludgeoning, piercing, or slashing) when you Cast the Spell. The shadow uses and contributes to your multiple attack penalty. The shadow doesn't take up space, grant flanking, or have any other attributes a creature would. The shadow can't make any attacks other than its Strike.\n\nThe shadow vanishes if the target ceases to cast a shadow (usually if it moves into complete darkness or light). If another effect is controlling the target's shadow when you cast _malicious shadow_, you can attempt to counteract that effect to temporarily take control of the shadow for _malicious shadow's_ duration.\n\n**Heightened (+2)** The Strike damage increases by 1d10.",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Malicious Shadow', action: ActionTypes.TwoActions, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const PersonalBlizzard = Abilities.defineAbility('spell/personal-blizzard', {
  name: 'Personal Blizzard',
  description:
    "*Uncommon, Cold, Focus, Hex, Witch*\n\n**Lesson** Lesson of Snow\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Fortitude\n\n**Duration** sustained up to 1 minute\n\nYour patron's breath becomes a blizzard of obscuring, scouring ice that follows your target. The target attempts a Fortitude save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes 1d6 cold damage, and the spell ends.\n\n**Failure** The target takes 1d6 cold damage and 1d6 persistent cold damage. The persistent damage automatically ends when the spell ends. It is concealed to other creatures, and other creatures are concealed to it.\n\n**Critical Failure** As failure, but both the cold damage and the persistent cold damage are 2d6.\n\n**Heightened (+1)** The cold damage and persistent cold damage increase by 1 (2 on a critical failure).",
  archetypes: [Spell, FocusSpell],
  universal: false,
  actions: [{ name: 'Personal Blizzard', action: ActionTypes.SingleAction, costs: [{ cost: 1, resource: FocusPoints }] }],
})

export const AllWitchFocusSpells = [
  BloodWard,
  Cackle,
  ElementalBetrayal,
  LifeBoost,
  NeedleOfVengeance,
  PatronsPuppet,
  PhaseFamiliar,
  VeilOfDreams,
  DeceiversCloak,
  MaliciousShadow,
  PersonalBlizzard,
]
