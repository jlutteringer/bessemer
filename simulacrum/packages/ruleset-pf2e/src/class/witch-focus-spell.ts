import { Abilities } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/tag'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'

export const BloodWard = Abilities.defineAbility('spell/blood-ward', {
  name: 'Blood Ward',
  description: '*Uncommon, Focus, Hex, Manipulate, Witch*\n\n**Lesson** Lesson of Protection',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Blood Ward',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** sustained up to 1 minute\n\nYour patron's aegis descends to shield a target from harm. Designate one of the following creature traits: [aberration](content:traits/aberration), [animal](content:traits/animal), [beast](content:traits/beast), [celestial](content:traits/celestial), [construct](content:traits/construct), [dragon](content:traits/dragon), [elemental](content:traits/elemental), [fey](content:traits/fey), [fiend](content:traits/fiend), [fungus](content:traits/fungus), [monitor](content:traits/monitor), [ooze](content:traits/ooze), [plant](content:traits/plant), or [undead](content:traits/undead). The target gains a +1 status bonus to its saving throws and [AC](characteristic:armor-class) against creatures with that trait.\n\n**Heightened (5th)** The status bonus increases to +2.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Cackle = Abilities.defineAbility('spell/cackle', {
  name: 'Cackle',
  description: '*Uncommon, Concentrate, Focus, Hex, Witch*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Cackle',
      description:
        'With a quick burst of laughter, you prolong a magical effect you created. You [Sustain](content:playing-the-game/sustain) a spell.',
      action: ActionTypes.FreeAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const ElementalBetrayal = Abilities.defineAbility('spell/elemental-betrayal', {
  name: 'Elemental Betrayal',
  description: '*Uncommon, Concentrate, Focus, Hex, Witch*\n\n**Lesson** Lesson of the Elements',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Elemental Betrayal',
      description:
        '**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** sustained up to 1 minute\n\nYour patron uses its superior command of the elements, empowering them to undermine your foe. When you Cast this Spell, choose [air](content:traits/air), [earth](content:traits/earth), [metal](content:traits/metal), [fire](content:traits/fire), [water](content:traits/water), or [wood](content:traits/wood). The target gains weakness 2 to that trait.\n\n**Heightened (+2)** Increase the weakness by 1.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const LifeBoost = Abilities.defineAbility('spell/life-boost', {
  name: 'Life Boost',
  description: '*Uncommon, Focus, Healing, Hex, Manipulate, Vitality, Witch*\n\n**Lesson** Lesson of Life',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Life Boost',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** 4 rounds\n\nLife force from your patron floods into the target, ensuring they can continue doing your patron's will for just a little longer. The target gains fast healing 2.\n\n**Heightened (+1)** The fast healing increases by 2.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const NeedleOfVengeance = Abilities.defineAbility('spell/needle-of-vengeance', {
  name: 'Needle of Vengeance',
  description: '*Uncommon, Focus, Hex, Manipulate, Mental, Witch*\n\n**Lesson** Lesson of Vengeance',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Needle of Vengeance',
      description:
        "**Range** 30 feet\n\n**Target** 1 enemy\n\n**Defense** [basic](content:playing-the-game/basic-saving-throws) Will\n\n**Duration** sustained up to 1 minute\n\nA long, jagged needle jabs into the target foe's psyche whenever it tries to attack a creature your patron holds in special regard. Name yourself or one of your allies. The target takes 2 mental damage any time it uses a [hostile action](content:spells/hostile-actions) against the named creature, with a basic [Will save](characteristic:will).\n\n**Heightened (+1)** Increase the damage by 2.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const PatronsPuppet = Abilities.defineAbility('spell/patrons-puppet', {
  name: "Patron's Puppet",
  description: '*Uncommon, Focus, Hex, Witch*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Patron's Puppet",
      description:
        '**Trigger** Your turn begins\n\nAt your unspoken plea, your patron temporarily assumes control over your familiar. You Command your familiar, allowing it to take its normal actions this turn. Your Command does not have the [auditory](content:traits/auditory) or concentrate traits; your patron simply moves its agent directly.',
      action: ActionTypes.FreeAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const PhaseFamiliar = Abilities.defineAbility('spell/phase-familiar', {
  name: 'Phase Familiar',
  description: '*Uncommon, Focus, Hex, Manipulate, Witch*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Phase Familiar',
      description:
        '**Trigger** Your familiar would take damage\n\n**Range** 60 feet\n\n**Target** your familiar\n\nYour patron momentarily recalls your familiar to the ether, shifting it from its solid, physical form into a ghostly version of itself. Against the triggering damage, your familiar gains resistance 5 to all damage and is immune to precision damage.\n\n**Heightened (+1)** Increase the resistance by 2.',
      action: ActionTypes.Reaction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const VeilOfDreams = Abilities.defineAbility('spell/veil-of-dreams', {
  name: 'Veil of Dreams',
  description: '*Uncommon, Focus, Hex, Manipulate, Mental, Witch*\n\n**Lesson** Lesson of Dreams',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Veil of Dreams',
      description:
        '**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nYour patron draws the target into a drowsy state, causing daydreams and sluggishness. The target must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes a –1 status penalty to [Perception](characteristic:perception), attack rolls, and Will saves. This penalty increases to –2 for Will saves against [sleep](content:traits/sleep) effects.\n\n**Failure** As success, and any time the target uses a [concentrate](content:traits/concentrate) action, it must succeed at a DC 5 flat check or the action is disrupted.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const DeceiversCloak = Abilities.defineAbility('spell/deceivers-cloak', {
  name: "Deceiver's Cloak",
  description: '*Uncommon, Concentrate, Focus, Hex, Illusion, Manipulate, Witch*\n\n**Lesson** Lesson of Mischief',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Deceiver's Cloak",
      description:
        '**Duration** 1 hour\n\nYour patron drapes a cloak of illusion about you, making you appear as another creature of the same body shape with roughly similar height and weight as yourself. This has the effects of 3rd-rank [_illusory disguise_](ability:spell/illusory-disguise).\n\n**Heightened (6th)** You can appear as any creature of the same size, even with a completely different body shape.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const MaliciousShadow = Abilities.defineAbility('spell/malicious-shadow', {
  name: 'Malicious Shadow',
  description: '*Uncommon, Concentrate, Focus, Hex, Manipulate, Shadow, Witch*\n\n**Lesson** Lesson of Shadow',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Malicious Shadow',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** [AC](characteristic:armor-class)\n\n**Duration** sustained up to 1 minute\n\nYour patron warps the target's shadow into a deadly form, such as strangling hands, a dangerous weapon, harrying runes, or the like. The shadow moves along with the target, always remaining within reach. When you Cast the Spell, and each time you [Sustain](content:playing-the-game/sustain) it, the shadow Strikes the target. The shadow's Strikes are melee spell attacks that deal 2d10 damage. You choose the type of damage (bludgeoning, piercing, or slashing) when you Cast the Spell. The shadow uses and contributes to your multiple attack penalty. The shadow doesn't take up space, grant flanking, or have any other attributes a creature would. The shadow can't make any attacks other than its [Strike](content:playing-the-game/strike).\n\nThe shadow vanishes if the target ceases to cast a shadow (usually if it moves into complete darkness or light). If another effect is controlling the target's shadow when you cast _malicious shadow_, you can attempt to [counteract](content:playing-the-game/counteracting) that effect to temporarily take control of the shadow for _malicious shadow's_ duration.\n\n**Heightened (+2)** The Strike damage increases by 1d10.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const PersonalBlizzard = Abilities.defineAbility('spell/personal-blizzard', {
  name: 'Personal Blizzard',
  description: '*Uncommon, Cold, Focus, Hex, Witch*\n\n**Lesson** Lesson of Snow',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Personal Blizzard',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** [Fortitude](characteristic:fortitude)\n\n**Duration** sustained up to 1 minute\n\nYour patron's breath becomes a blizzard of obscuring, scouring ice that follows your target. The target attempts a Fortitude save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes 1d6 cold damage, and the spell ends.\n\n**Failure** The target takes 1d6 cold damage and 1d6 [persistent cold damage](content:conditions/persistent-damage). The persistent damage automatically ends when the spell ends. It is [concealed](content:conditions/concealed) to other creatures, and other creatures are concealed to it.\n\n**Critical Failure** As failure, but both the cold damage and the persistent cold damage are 2d6.\n\n**Heightened (+1)** The cold damage and persistent cold damage increase by 1 (2 on a critical failure).",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
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
