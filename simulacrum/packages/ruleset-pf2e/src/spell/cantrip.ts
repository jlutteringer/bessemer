import { Abilities } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Spell, Cantrip, Arcane, Divine, Occult, Primal } from '@simulacrum/ruleset-pf2e/archetype'
import { CantripLoadout } from '@simulacrum/ruleset-pf2e/loadout'

export const Allegro = Abilities.defineAbility('spell/allegro', {
  name: 'Allegro',
  description:
    '*Uncommon, Bard, Cantrip, Composition, Concentrate, Emotion, Mental*\n\n**Range** 30 feet\n\n**Target** 1 ally\n\n**Duration** 1 round\n\nYou perform rapidly, speeding up your ally. The ally becomes quickened and can use the additional action to Strike, Stride, or Step.',
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Allegro', action: ActionTypes.SingleAction }],
})

export const CausticBlast = Abilities.defineAbility('spell/caustic-blast', {
  name: 'Caustic Blast',
  description:
    '*Acid, Cantrip, Concentrate, Manipulate*\n\n**Traditions** Arcane, Primal\n\n**Range** 30 feet\n\n**Area** 5-foot burst\n\n**Defense** basic Reflex\n\nYou fling a large glob of acid that immediately detonates, spraying nearby creatures. Creatures in the area take 1d8 acid damage with a basic Reflex save; on a critical failure, the creature also takes 1 persistent acid damage.\n\n**Heightened (+2)** The initial damage increases by 1d8, and the persistent damage on a critical failure increases by 1.',
  archetypes: [Spell, Cantrip, Arcane, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Caustic Blast', action: ActionTypes.TwoActions }],
})

export const ClingingIce = Abilities.defineAbility('spell/clinging-ice', {
  name: 'Clinging Ice',
  description:
    "*Uncommon, Cantrip, Cold, Hex, Manipulate, Witch*\n\n**Patron Theme** Silence in Snow\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Reflex\n\n**Duration** sustained up to 1 minute\n\nFreezing sleet and heavy snowfall collect on the target's feet and legs, dealing 1d4 cold damage and other effects depending on its Reflex save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes half damage.\n\n**Failure** The target takes full damage and a –5-foot circumstance penalty to its Speeds until the spell ends.\n\n**Critical Failure** The target takes double damage and a –10-foot circumstance penalty to its Speeds until the spell ends.\n\n**Heightened (+1)** The damage increases by 1d4.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Clinging Ice', action: ActionTypes.SingleAction }],
})

export const CourageousAnthem = Abilities.defineAbility('spell/courageous-anthem', {
  name: 'Courageous Anthem',
  description:
    '*Uncommon, Bard, Cantrip, Composition, Concentrate, Emotion, Mental*\n\n**Area** 60-foot emanation\n\n**Duration** 1 round\n\nYou inspire yourself and your allies with words or tunes of encouragement. You and all allies in the area gain a +1 status bonus to attack rolls, damage rolls, and saves against fear effects.',
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Courageous Anthem', action: ActionTypes.SingleAction }],
})

export const Daze = Abilities.defineAbility('spell/daze', {
  name: 'Daze',
  description:
    "*Cantrip, Concentrate, Manipulate, Mental, Nonlethal*\n\n**Traditions** Arcane, Divine, Occult\n\n**Range** 60 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** 1 round\n\nYou push into the target's mind and daze it with a mental jolt. The jolt deals 1d6 mental damage, with a basic Will save. If the target critically fails the save, it is also stunned 1.\n\n**Heightened (+2)** The damage increases by 1d6.",
  archetypes: [Spell, Cantrip, Arcane, Divine, Occult],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Daze', action: ActionTypes.TwoActions }],
})

export const DetectMagic = Abilities.defineAbility('spell/detect-magic', {
  name: 'Detect Magic',
  description:
    "*Cantrip, Concentrate, Detection, Manipulate*\n\n**Traditions** Arcane, Divine, Occult, Primal\n\n**Area** 30-foot emanation\n\nYou send out a pulse that registers the presence of magic. You receive no information beyond the presence or absence of magic. You can choose to ignore magic you're fully aware of, such as the magic items and ongoing spells of you and your allies.\n\nYou detect illusion magic only if that magic's effect has a lower rank than the rank of your _detect magic_ spell. However, items that have an illusion aura but aren't deceptive in appearance (such as an _invisibility potion_) typically are detected normally.\n\n**Heightened (3rd)** You learn the rank or level of the most powerful magical effect the spell detects, as determined by the GM.\n\n**Heightened (4th)** As 3rd rank, but you also pinpoint the source of the highest-rank magic. Like for an imprecise sense, you don't learn the exact location, but can narrow down the source to within a 5-foot cube (or the nearest if larger than that).",
  archetypes: [Spell, Cantrip, Arcane, Divine, Occult, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Detect Magic', action: ActionTypes.TwoActions }],
})

export const DirgeOfDoom = Abilities.defineAbility('spell/dirge-of-doom', {
  name: 'Dirge of Doom',
  description:
    "*Uncommon, Bard, Cantrip, Composition, Concentrate, Emotion, Fear, Mental*\n\n**Area** 30-foot emanation\n\n**Duration** 1 round\n\nEnemies within the area are frightened 1. They can't reduce their frightened value below 1 while they remain in the area.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Dirge of Doom', action: ActionTypes.SingleAction }],
})

export const DiscernSecrets = Abilities.defineAbility('spell/discern-secrets', {
  name: 'Discern Secrets',
  description:
    '*Uncommon, Cantrip, Hex, Manipulate, Witch*\n\n**Patron Theme** The Inscribed One\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** sustained up to 1 minute\n\nYour patron deigns to whisper a few secrets. The target can Recall Knowledge, Seek, or Sense Motive as a free action. The target gains a +1 status bonus to the statistic used for the roll (a skill or Perception) on the roll and as long as you Sustain the spell. The target is temporarily immune to discern secrets for 1 minute.\n\n**Heightened (5th)** You can target two creatures instead of one.',
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Discern Secrets', action: ActionTypes.SingleAction }],
})

export const DivineLance = Abilities.defineAbility('spell/divine-lance', {
  name: 'Divine Lance',
  description:
    "*Attack, Cantrip, Concentrate, Manipulate, Sanctified, Spirit*\n\n**Tradition** Divine\n\n**Range** 60 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\nYou unleash a beam of divine energy. Make a ranged spell attack against the target's AC. On a hit, the target takes 2d4 spirit damage (double damage on a critical hit).\n\n**Heightened (+1)** The damage increases by 1d4.",
  archetypes: [Spell, Cantrip, Divine],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Divine Lance', action: ActionTypes.TwoActions }],
})

export const ElectricArc = Abilities.defineAbility('spell/electric-arc', {
  name: 'Electric Arc',
  description:
    '*Cantrip, Concentrate, Electricity, Manipulate*\n\n**Traditions** Arcane, Primal\n\n**Range** 30 feet\n\n**Target** 1 or 2 creatures\n\n**Defense** basic Reflex\n\nAn arc of lightning leaps from one target to another. Each target takes 2d4 electricity damage with a basic Reflex save.\n\n**Heightened (+1)** The damage increases by 1d4.',
  archetypes: [Spell, Cantrip, Arcane, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Electric Arc', action: ActionTypes.TwoActions }],
})

export const EvilEye = Abilities.defineAbility('spell/evil-eye', {
  name: 'Evil Eye',
  description:
    "*Uncommon, Cantrip, Curse, Hex, Manipulate, Witch*\n\n**Patron Theme** The Resentment\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nYour patron's resentment manifests in a baleful, envious gaze. The target becomes sickened 1 if it fails a Will save (or sickened 2 on a critical failure). This condition value can't be reduced below 1 while the spell is active and you can see the target.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Evil Eye', action: ActionTypes.SingleAction }],
})

export const Figment = Abilities.defineAbility('spell/figment', {
  name: 'Figment',
  description:
    "*Cantrip, Concentrate, Illusion, Manipulate, Subtle*\n\n**Traditions** Arcane, Occult\n\n**Range** 30 feet\n\n**Duration** sustained\n\nYou create a simple illusory sound or vision. A sound adds the auditory trait to the spell and the sound can't include intelligible words or elaborate music. A vision adds the visual trait, can be no larger than a 5-foot cube, and is clearly crude and undetailed if viewed from within 15 feet. When you Cast or Sustain the Spell, you can attempt to Create a Diversion with the illusion, gaining a +2 circumstance bonus to your Deception check. If the attempt fails against a creature, that creature disbelieves the figment.",
  archetypes: [Spell, Cantrip, Arcane, Occult],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Figment', action: ActionTypes.TwoActions }],
})

export const ForbiddingWard = Abilities.defineAbility('spell/forbidding-ward', {
  name: 'Forbidding Ward',
  description:
    "*Cantrip, Concentrate, Manipulate*\n\n**Traditions** Divine, Occult\n\n**Range** 30 feet\n\n**Target** 1 ally and 1 enemy\n\n**Duration** sustained up to 1 minute\n\nYou ward an ally against the attacks and hostile spells from the target enemy. The target ally gains a +1 status bonus to Armor Class and saving throws against the target enemy's attacks, spells, and other effects.\n\n**Heightened (6th)** The status bonus increases to +2.",
  archetypes: [Spell, Cantrip, Divine, Occult],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Forbidding Ward', action: ActionTypes.TwoActions }],
})

export const Frostbite = Abilities.defineAbility('spell/frostbite', {
  name: 'Frostbite',
  description:
    '*Cantrip, Cold, Concentrate, Manipulate*\n\n**Traditions** Arcane, Primal\n\n**Range** 60 feet\n\n**Target** 1 creature\n\n**Defense** basic Fortitude\n\nAn orb of biting cold coalesces around your target, freezing its body. The target takes 2d4 cold damage with a basic Fortitude save. On a critical failure, the target also gains weakness 1 to bludgeoning until the start of your next turn.\n\n**Heightened (+1)** The damage increases by 1d4 and the weakness on a critical failure increases by 1.',
  archetypes: [Spell, Cantrip, Arcane, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Frostbite', action: ActionTypes.TwoActions }],
})

export const GougingClaw = Abilities.defineAbility('spell/gouging-claw', {
  name: 'Gouging Claw',
  description:
    "*Attack, Cantrip, Concentrate, Manipulate, Morph*\n\n**Traditions** Arcane, Primal\n\n**Range** touch\n\n**Target** 1 creature\n\n**Defense** AC\n\nYou temporarily morph your limb into a clawed appendage. Make a melee spell attack roll against your target's AC. If you hit, you deal your choice of 2d6 slashing damage or 2d6 piercing damage, plus 2 persistent bleed damage. On a critical success, you deal double damage and double bleed damage.\n\n**Heightened (+1)** The damage increases by 1d6 and the persistent bleed damage increases by 1.",
  archetypes: [Spell, Cantrip, Arcane, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Gouging Claw', action: ActionTypes.TwoActions }],
})

export const Guidance = Abilities.defineAbility('spell/guidance', {
  name: 'Guidance',
  description:
    '*Cantrip, Concentrate*\n\n**Traditions** Divine, Occult, Primal\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** until the start of your next turn\n\nYou ask for the guidance of supernatural entities, granting the target a +1 status bonus to one attack roll, Perception check, saving throw, or skill check the target attempts before the duration ends. The target chooses which roll to use the bonus on before rolling. If the target uses the bonus, the spell ends. Either way, the target is then temporarily immune for 1 hour.',
  archetypes: [Spell, Cantrip, Divine, Occult, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Guidance', action: ActionTypes.SingleAction }],
})

export const HouseOfImaginaryWalls = Abilities.defineAbility('spell/house-of-imaginary-walls', {
  name: 'House of Imaginary Walls',
  description:
    "*Uncommon, Bard, Cantrip, Composition, Illusion, Manipulate, Visual*\n\n**Duration** 1 round\n\nYou mime an invisible 10-foot-by-10-foot wall adjacent to you and within your reach. The wall is solid to those creatures that don't disbelieve it, even incorporeal creatures. You and your allies can voluntarily believe the wall exists to continue to treat it as solid, for instance to climb onto it. A creature that disbelieves the illusion is temporarily immune to your _house of imaginary walls_ for 1 minute. The wall doesn't block creatures that didn't see your visual performance, nor does it block objects. The wall has AC 10, Hardness equal to double the spell's rank, and HP equal to quadruple the spell's rank.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'House of Imaginary Walls', action: ActionTypes.SingleAction }],
})

export const Ignition = Abilities.defineAbility('spell/ignition', {
  name: 'Ignition',
  description:
    "*Attack, Cantrip, Concentrate, Fire, Manipulate*\n\n**Traditions** Arcane, Primal\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\nYou snap your fingers and point at a target, which begins to smolder. Make a spell attack roll against the target's AC, dealing 2d4 fire damage on a hit. If the target is within your melee reach, you can choose to make a melee spell attack with the flame instead of a ranged spell attack, which increases all the spell's damage dice to d6s.\n\n**Critical Success** The target takes double damage and 1d4 persistent fire damage.\n\n**Success** The target takes full damage.\n\n**Heightened (+1)** The initial damage increases by 1d4 and the persistent fire damage on a critical hit increases by 1d4.",
  archetypes: [Spell, Cantrip, Arcane, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Ignition', action: ActionTypes.TwoActions }],
})

export const KnowTheWay = Abilities.defineAbility('spell/know-the-way', {
  name: 'Know the Way',
  description:
    "*Cantrip, Concentrate, Detection, Manipulate*\n\n**Traditions** Divine, Occult, Primal\n\nIn your mind's eye, you magically reorient yourself. You immediately know which direction is north (if it exists at your current location), and you can choose a location you were at within the last 24 hours and learn what direction it lies.\n\n**Heightened (3rd)** You can choose a location you were at within the last week.\n\n**Heightened (7th)** You can choose a location you were at regardless of how long ago you were there.",
  archetypes: [Spell, Cantrip, Divine, Occult, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Know the Way', action: ActionTypes.TwoActions }],
})

export const Light = Abilities.defineAbility('spell/light', {
  name: 'Light',
  description:
    '*Cantrip, Concentrate, Light, Manipulate*\n\n**Traditions** Arcane, Divine, Occult, Primal\n\n**Range** 120 feet\n\n**Duration** until your next daily preparations\n\nYou create an orb of light that sheds bright light in a 20-foot radius (and dim light for the next 20 feet) in a color you choose. If you create the light in the same space as a willing creature, you can attach the light to the creature, causing it to float near that creature as it moves. You can Sustain the spell to move the light up to 60 feet; you can attach or detach it from a creature as part of this movement.\n\nYou can Dismiss the spell. If you Cast the Spell while you already have four _light_ spells active, you must choose one of the existing spells to end.\n\n**Heightened (4th)** The orb sheds light in a 60-foot radius (and dim light for the next 60 feet).',
  archetypes: [Spell, Cantrip, Arcane, Divine, Occult, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Light', action: ActionTypes.TwoActions }],
})

export const Message = Abilities.defineAbility('spell/message', {
  name: 'Message',
  description:
    "*Auditory, Cantrip, Concentrate, Illusion, Linguistic, Mental, Subtle*\n\n**Traditions** Arcane, Divine, Occult\n\n**Range** 120 feet\n\n**Target** 1 creature\n\n**Duration** see below\n\nYou mouth words quietly, but instead of coming out of your mouth, they're transferred directly to the ears of the target. While others can't hear your words any better than if you normally mouthed them, the target can hear your words as if they were standing next to you. The target can give a brief response as a reaction, or as a free action on their next turn if they wish, but they must be able to see you and be within range to do so. If they respond, their response is delivered directly to your ear, just like the original message.\n\n**Heightened (3rd)** The spell's range increases to 500 feet.",
  archetypes: [Spell, Cantrip, Arcane, Divine, Occult],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Message', action: ActionTypes.SingleAction }],
})

export const NudgeFate = Abilities.defineAbility('spell/nudge-fate', {
  name: 'Nudge Fate',
  description:
    "*Uncommon, Cantrip, Concentrate, Hex, Witch*\n\n**Patron Theme** Spinner of Threads\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** 1 minute\n\nThe barest spin of your patron's spool is enough to alter fate. When the target fails an attack roll, skill check, or saving throw and a +1 status bonus would turn a critical failure into a failure, or failure into a success, you grant the target a +1 status bonus to the check retroactively, changing the outcome appropriately. The spell then ends.\n\nIf you cast _nudge fate_ while a previous casting of this hex is still in effect, the previous effect ends.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Nudge Fate', action: ActionTypes.SingleAction }],
})

export const Prestidigitation = Abilities.defineAbility('spell/prestidigitation', {
  name: 'Prestidigitation',
  description:
    "*Cantrip, Concentrate, Manipulate*\n\n**Traditions** Arcane, Divine, Occult, Primal\n\n**Range** 10 feet\n\n**Target** 1 object (cook, lift, or tidy only)\n\n**Duration** sustained\n\nThe simplest magic does your bidding. You can perform simple magical effects for as long as you Sustain the spell. Each time you Sustain the spell, you can choose one of four options.\n\n- **Cook** Cool, warm, or flavor 1 pound of nonliving material.\n\n- **Lift** Slowly lift an unattended object of light Bulk or less 1 foot off the ground.\n\n- **Make** Create a temporary object of negligible Bulk, made of congealed magical substance. The object looks crude and artificial and is extremely fragile—it can't be used as a tool, weapon, or locus or cost for a spell.\n\n- **Tidy** Color, clean, or soil an object of light Bulk or less. You can affect an object of 1 Bulk with 10 rounds of concentration, and a larger object a 1 minute per Bulk.\n\n_Prestidigitation_ can't deal damage or cause adverse conditions. Any actual change to an object (beyond what is noted above) persists only as long as you Sustain the spell.",
  archetypes: [Spell, Cantrip, Arcane, Divine, Occult, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Prestidigitation', action: ActionTypes.TwoActions }],
})

export const RallyingAnthem = Abilities.defineAbility('spell/rallying-anthem', {
  name: 'Rallying Anthem',
  description:
    "*Uncommon, Bard, Cantrip, Composition, Concentrate, Emotion, Mental*\n\n**Area** 60-foot emanation\n\n**Duration** 1 round\n\nYour song moves allies to protect themselves more effectively. You and all allies in the area gain a +1 status bonus to AC and saving throws, as well as resistance equal to half the spell's rank to physical damage.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Rallying Anthem', action: ActionTypes.SingleAction }],
})

export const ReadAura = Abilities.defineAbility('spell/read-aura', {
  name: 'Read Aura',
  description:
    "*Cantrip, Concentrate, Detection, Manipulate*\n\n**Traditions** Arcane, Divine, Occult, Primal\n\n**Cast** 1 minute\n\n**Range** 30 feet\n\n**Target** 1 object\n\nYou focus on the target object, opening your mind to perceive magical auras. When the casting is complete, you know whether that item is magical. You or anyone you advise about the aura gains a +2 circumstance bonus to Identify Magic on the item. If the object is illusory, you detect this only if the effect's rank is lower than the rank of your _read aura_ spell.\n\n**Heightened (3rd)** You can target up to 10 objects.\n\n**Heightened (6th)** You can target any number of objects.",
  archetypes: [Spell, Cantrip, Arcane, Divine, Occult, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Read Aura', action: ActionTypes.Activity }],
})

export const Shield = Abilities.defineAbility('spell/shield', {
  name: 'Shield',
  description:
    "*Cantrip, Concentrate, Force*\n\n**Traditions** Arcane, Divine, Occult\n\n**Duration** until the start of your next turn\n\nYou raise a magical shield of force. This counts as using the Raise a Shield action, giving you a +1 circumstance bonus to AC until the start of your next turn, but it doesn't require a hand to use.\n\nWhile the spell is in effect, you can use the Shield Block reaction with your magic shield. The shield has Hardness 5. You can use the spell's reaction to reduce damage from any spell or magical effect, even if it doesn't deal physical damage. After you use Shield Block, the spell ends and you can't cast it again for 10 minutes.\n\n**Heightened (+2)** The shield's Hardness increases by 5.",
  archetypes: [Spell, Cantrip, Arcane, Divine, Occult],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Shield', action: ActionTypes.SingleAction }],
})

export const ShroudOfNight = Abilities.defineAbility('spell/shroud-of-night', {
  name: 'Shroud of Night',
  description:
    "*Uncommon, Cantrip, Darkness, Hex, Manipulate, Witch*\n\n**Patron Theme** Starless Shadow\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nYour patron blankets the target's eyes in darkness. If you cast this hex on a willing ally (for instance, one with light blindness), the ally can choose which result it gets without rolling.\n\n**Success** The target is unaffected.\n\n**Failure** The target is shrouded in murky darkness. It treats bright light as dim light, and unless it has greater darkvision, all creatures are concealed to it.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Shroud of Night', action: ActionTypes.SingleAction }],
})

export const Sigil = Abilities.defineAbility('spell/sigil', {
  name: 'Sigil',
  description:
    "*Cantrip, Concentrate, Manipulate*\n\n**Traditions** Arcane, Divine, Occult, Primal\n\n**Range** touch\n\n**Target** 1 creature or object\n\n**Duration** unlimited (see below)\n\nYou harmlessly place your unique magical sigil, which is about 1 square inch in size, on the targeted creature or object. The mark can be visible or invisible, and you can change it from one state to another by using an Interact action to touch the target. The mark can be scrubbed or scraped off with 5 minutes of work. If it's on a creature, it fades naturally over the course of a week. The time before the mark fades increases depending on your heightened rank.\n\n**Heightened (3rd)** The sigil instead fades after 1 month.\n\n**Heightened (5th)** The sigil instead fades after 1 year.\n\n**Heightened (7th)** The sigil never fades.",
  archetypes: [Spell, Cantrip, Arcane, Divine, Occult, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Sigil', action: ActionTypes.TwoActions }],
})

export const SongOfMarching = Abilities.defineAbility('spell/song-of-marching', {
  name: 'Song of Marching',
  description:
    "*Uncommon, Bard, Cantrip, Composition, Concentrate, Mental*\n\n**Area** 60-foot emanation\n\n**Duration** sustained up to 1 hour\n\nYou maintain a brisk performance that keeps allies on the move. You and your allies in the area can Hustle for the spell's duration, in addition to your other exploration activities (your exploration activity is Sustaining this spell). You and your allies then become temporarily immune for 1 day. If you enter an encounter while performing this song, you can use your Performance modifier for the initiative roll. You and your affected allies also receive a +1 status bonus to that initiative roll.\n\n**Heightened (6th)** You can Sustain the Spell for up to 2 hours.\n\n**Heightened (9th)** You can Sustain the Spell for up to 4 hours.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Song of Marching', action: ActionTypes.SingleAction }],
})

export const SongOfStrength = Abilities.defineAbility('spell/song-of-strength', {
  name: 'Song of Strength',
  description:
    "*Uncommon, Bard, Cantrip, Composition, Concentrate, Emotion, Mental*\n\n**Area** 60-foot emanation\n\n**Duration** 1 round\n\nYou bolster your allies' physical strength with a hearty exhortation. You and your allies gain a +1 status bonus to Athletics checks and to their DCs against Athletics skill actions such as Disarm, Reposition, Shove, and Trip.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Song of Strength', action: ActionTypes.SingleAction }],
})

export const Stabilize = Abilities.defineAbility('spell/stabilize', {
  name: 'Stabilize',
  description:
    "*Cantrip, Concentrate, Healing, Manipulate, Vitality*\n\n**Traditions** Divine, Primal\n\n**Range** 30 feet\n\n**Target** 1 dying creature\n\nLife energy shuts death's door. The target loses the dying condition, though it remains unconscious at 0 Hit Points.",
  archetypes: [Spell, Cantrip, Divine, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Stabilize', action: ActionTypes.TwoActions }],
})

export const StokeTheHeart = Abilities.defineAbility('spell/stoke-the-heart', {
  name: 'Stoke the Heart',
  description:
    "*Uncommon, Cantrip, Concentrate, Emotion, Hex, Witch*\n\n**Patron Theme** Faith's Flamekeeper\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** sustained up to 1 minute\n\nYour patron fills a creature with fervor, empowering their blows. The target gains a +2 status bonus to damage rolls.\n\n**Heightened (+2)** The status bonus to damage increases by 1.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Stoke the Heart', action: ActionTypes.SingleAction }],
})

export const SummonInstrument = Abilities.defineAbility('spell/summon-instrument', {
  name: 'Summon Instrument',
  description:
    '*Cantrip, Concentrate, Manipulate*\n\n**Traditions** Arcane, Divine, Occult\n\n**Duration** 1 hour\n\nYou materialize a handheld musical instrument in your grasp. The instrument is typical for its type, but it plays for only you. It vanishes when the spell ends. If you cast _summon instrument_ again, any instrument you previously summoned disappears.\n\n**Heightened (5th)** The instrument is instead a virtuoso handheld instrument.',
  archetypes: [Spell, Cantrip, Arcane, Divine, Occult],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Summon Instrument', action: ActionTypes.ThreeActions }],
})

export const TangleVine = Abilities.defineAbility('spell/tangle-vine', {
  name: 'Tangle Vine',
  description:
    '*Attack, Cantrip, Concentrate, Manipulate, Plant, Wood*\n\n**Traditions** Arcane, Primal\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\nA vine appears from thin air, flicking from your hand and lashing itself to the target. Attempt a spell attack roll against the target.\n\n**Critical Success** The target gains the immobilized condition and takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty and the immobilized condition.\n\n**Success** The target takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty.\n\n**Failure** The target is unaffected.\n\n**Heightened (2nd)** The effects last for 2 rounds.\n\n**Heightened (4th)** The effects last for 1 minute.',
  archetypes: [Spell, Cantrip, Arcane, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Tangle Vine', action: ActionTypes.TwoActions }],
})

export const TelekineticHand = Abilities.defineAbility('spell/telekinetic-hand', {
  name: 'Telekinetic Hand',
  description:
    '*Cantrip, Concentrate, Manipulate*\n\n**Traditions** Arcane, Occult\n\n**Range** 30 feet\n\n**Target** 1 unattended object of Light bulk or less\n\n**Duration** sustained\n\nYou create a floating, magical hand, either invisible or ghostlike, that grasps the target object and levitates it slowly up to 20 feet in any direction. When you Sustain the spell, you can move the object an additional 20 feet. If the object is in the air when the spell ends, the object falls.\n\n**Heightened (3rd)** You can target an unattended object with a Bulk of 1 or less.\n\n**Heightened (5th)** The range increases to 60 feet, and you can target an unattended object with a Bulk of 1 or less.\n\n**Heightened (7th)** The range increases to 60 feet, and you can target an unattended object with a Bulk of 2 or less.',
  archetypes: [Spell, Cantrip, Arcane, Occult],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Telekinetic Hand', action: ActionTypes.TwoActions }],
})

export const TelekineticProjectile = Abilities.defineAbility('spell/telekinetic-projectile', {
  name: 'Telekinetic Projectile',
  description:
    "*Attack, Cantrip, Concentrate, Manipulate*\n\n**Traditions** Arcane, Occult\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** AC\n\nYou hurl a loose, unattended object that is within range and that has 1 Bulk or less at the target. Make a spell attack roll against the target's AC. If you hit, you deal 2d6 bludgeoning, piercing, or slashing damage—as appropriate for the object you hurled. No specific traits or magic properties of the hurled item affect the attack or the damage.\n\n**Critical Success** You deal double damage.\n\n**Success** You deal full damage.\n\n**Heightened (+1)** The damage increases by 1d6.",
  archetypes: [Spell, Cantrip, Arcane, Occult],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Telekinetic Projectile', action: ActionTypes.TwoActions }],
})

export const TripleTime = Abilities.defineAbility('spell/triple-time', {
  name: 'Triple Time',
  description:
    '*Uncommon, Bard, Cantrip, Composition, Emotion, Manipulate, Mental*\n\n**Area** 60-foot emanation\n\n**Duration** 1 round\n\nYour music sets a fast pace. You and all allies in the area gain a +10-foot status bonus to all Speeds for 1 round.',
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Triple Time', action: ActionTypes.SingleAction }],
})

export const UpliftingOverture = Abilities.defineAbility('spell/uplifting-overture', {
  name: 'Uplifting Overture',
  description:
    "*Uncommon, Bard, Cantrip, Composition, Concentrate, Emotion, Mental*\n\n**Range** 60 feet\n\n**Target** 1 ally\n\n**Duration** 1 round\n\nYour performance makes allies feel they can succeed at anything. This counts as having prepared to Aid your ally on a skill check of your choice. When you later use the Aid reaction, you can roll Performance instead of the normal skill check, and if you roll a failure, you get a success instead. If you are legendary in Performance, you automatically critically succeed. The GM might rule that you can't use this ability if the act of encouraging your ally would interfere with the skill check (such as a check to Sneak quietly or maintain a disguise).",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Uplifting Overture', action: ActionTypes.SingleAction }],
})

export const VitalityLash = Abilities.defineAbility('spell/vitality-lash', {
  name: 'Vitality Lash',
  description:
    "*Cantrip, Concentrate, Manipulate, Vitality*\n\n**Traditions** Divine, Primal\n\n**Range** 30 feet\n\n**Target** 1 creature that is undead or otherwise has void healing\n\n**Defense** basic Fortitude\n\nYou demolish the target's corrupted essence with energy from Creation's Forge. You deal 2d6 vitality damage with a basic Fortitude save. If the creature critically fails the save, it is also enfeebled 1 until the start of your next turn.\n\n**Heightened (+1)** The damage increases by 1d6.",
  archetypes: [Spell, Cantrip, Divine, Primal],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Vitality Lash', action: ActionTypes.TwoActions }],
})

export const VoidWarp = Abilities.defineAbility('spell/void-warp', {
  name: 'Void Warp',
  description:
    '*Cantrip, Concentrate, Manipulate, Void*\n\n**Traditions** Arcane, Divine, Occult\n\n**Range** 30 feet\n\n**Target** 1 living creature\n\n**Defense** basic Fortitude\n\nYou call upon the Void to harm life force. The target takes 2d4 void damage with a basic Fortitude save. On a critical failure, the target is also enfeebled 1 until the start of your next turn.\n\n**Heightened (+1)** The damage increases by 1d4.',
  archetypes: [Spell, Cantrip, Arcane, Divine, Occult],
  loadout: CantripLoadout,
  universal: false,
  actions: [{ name: 'Void Warp', action: ActionTypes.TwoActions }],
})

export const WildingWord = Abilities.defineAbility('spell/wilding-word', {
  name: 'Wilding Word',
  description:
    "*Uncommon, Cantrip, Hex, Mental, Witch*\n\n**Patron Theme** Wilding Steward\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nYour patron's majesty—or their displeasure—comes in a growl from your throat, making other creatures reluctant to harm you. The target must attempt a Will save; if the creature is an animal, fungus, or plant, it takes a –1 circumstance penalty to its save.\n\n**Critical Success** The target is unaffected.\n\n**Success** When the target attempts an attack roll or skill check that would harm you, it takes a –2 status penalty to its roll.\n\n**Failure** As success, but the target also becomes sickened 1 each time it damages you.\n\n**Critical Failure** As failure, but the sickened value is 2.",
  archetypes: [Spell, Cantrip],
  universal: false,
  actions: [{ name: 'Wilding Word', action: ActionTypes.SingleAction }],
})

export const AllCantrips = [
  Allegro,
  CausticBlast,
  ClingingIce,
  CourageousAnthem,
  Daze,
  DetectMagic,
  DirgeOfDoom,
  DiscernSecrets,
  DivineLance,
  ElectricArc,
  EvilEye,
  Figment,
  ForbiddingWard,
  Frostbite,
  GougingClaw,
  Guidance,
  HouseOfImaginaryWalls,
  Ignition,
  KnowTheWay,
  Light,
  Message,
  NudgeFate,
  Prestidigitation,
  RallyingAnthem,
  ReadAura,
  Shield,
  ShroudOfNight,
  Sigil,
  SongOfMarching,
  SongOfStrength,
  Stabilize,
  StokeTheHeart,
  SummonInstrument,
  TangleVine,
  TelekineticHand,
  TelekineticProjectile,
  TripleTime,
  UpliftingOverture,
  VitalityLash,
  VoidWarp,
  WildingWord,
]
