import { Abilities } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Spell, SpellRank2, Arcane, Divine, Occult, Primal } from '@simulacrum/ruleset-pf2e/tag'
import { SpellRank2Loadout } from '@simulacrum/ruleset-pf2e/loadout'

export const AcidGrip = Abilities.defineAbility('spell/acid-grip', {
  name: 'Acid Grip',
  description:
    '*Acid, Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Acid Grip',
      description:
        '**Range** 120 feet\n\n**Target** 1 creature\n\n**Defense** [Reflex](characteristic:reflex)\n\nAn ephemeral, taloned hand grips the target, burning it with magical acid. The target takes 2d8 acid damage plus 1d6 [persistent acid damage](content:conditions/persistent-damage) depending on its Reflex save. A creature taking persistent damage from this spell takes a –10-foot status penalty to its Speeds.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes half damage and no persistent damage, and the claw [moves](content:playing-the-game/forced-movement) it up to 5 feet in a direction of your choice.\n\n**Failure** The creature takes full damage and persistent damage, and the claw moves it up to 10 feet in a direction of your choice.\n\n**Critical Failure** The creature takes double damage and full persistent damage, and the claw moves it up to 20 feet in a direction of your choice.\n\n**Heightened (+2)** The initial damage increases by 2d8, and the persistent acid damage increases by 1d6.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 120, count: 1 } },
    },
  ],
})

export const AnimalForm = Abilities.defineAbility('spell/animal-form', {
  name: 'Animal Form',
  description: '*Concentrate, Manipulate, Polymorph*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Animal Form',
      description:
        "**Duration** 1 minute\n\nYou call upon primal energy to transform yourself into a Medium animal battle form. When you Cast this Spell, choose a listed battle form. You can decide the specific type of animal (such as lion or snow leopard for cat), but this has no effect on the form's Size or statistics. While in this form, you gain the [animal](content:traits/animal) trait. You can Dismiss the spell.\n\nYou gain the following statistics and abilities regardless of which animal you choose:\n\n- [AC](characteristic:armor-class) = 16 + your level. Ignore your armor's check penalty and [Speed](characteristic:speed) reduction.\n\n- 5 temporary [Hit Points](characteristic:hit-points).\n\n- [Low-light vision](content:playing-the-game/low-light-vision) and [imprecise](content:playing-the-game/imprecise-senses) [scent](content:playing-the-game/scent) 30 feet.\n\n- One or more [unarmed](content:traits/unarmed) melee attacks specific to your battle form, which are the only attacks you can [Strike](content:playing-the-game/strike) with. You're trained with them. Your attack modifier is +9, and your damage bonus is +1. These attacks are Strength based (for the purpose of the [enfeebled](content:conditions/enfeebled) condition, for example). If your unarmed attack bonus is higher, you can use it instead.\n\n- [Athletics](characteristic:skill/athletics) modifier of +9, unless your own is higher.\n\nYou also gain specific abilities based on the animal you choose:\n\n- **Ape** Speed 25 feet, climb 20 feet; Melee ◆ fist, Damage 2d6 bludgeoning.\n- **Bear** Speed 30 feet; **Melee** ◆ jaws, **Damage** 2d8 piercing; **Melee** ◆ claw (agile), **Damage** 1d8 slashing.\n- **Bull** Speed 30 feet; **Melee** ◆ horn, **Damage** 2d8 piercing.\n- **Canine** Speed 40 feet; **Melee** ◆ jaws, **Damage** 2d8 piercing.\n- **Cat** Speed 40 feet; **Melee** ◆ jaws, **Damage** 2d6 piercing; **Melee** ◆ claw ([agile](content:traits/agile)), **Damage** 1d10 slashing.\n- **Deer** Speed 50 feet; **Melee** ◆ antler, **Damage** 2d6 piercing.\n- **Frog** Speed 25 feet, swim 25 feet; **Melee** ◆jaws, **Damage** 2d6 bludgeoning; **Melee** ◆ tongue ([reach 15 feet](content:traits/reach)), **Damage** 2d4 bludgeoning.\n- **Shark** swim 35 feet; **Melee** ◆ jaws, **Damage** 2d8 piercing; breathe underwater but not in air.\n- **Snake** Speed 20 feet, climb 20 feet, swim 20 feet; **Melee** ◆ fangs, **Damage** 2d4 piercing plus 1d6 poison.\n\n**Heightened (3rd)** You instead gain 10 temporary HP, AC = 17 + your level, attack modifier +14, damage bonus +5, and Athletics +14.\n\n**Heightened (4th)** Your battle form is Large and your attacks have 10-foot reach. You instead gain 15 temporary HP, AC = 18 + your level, attack modifier +16, damage bonus +9, and Athletics +16.\n\n**Heightened (5th)** Your battle form is Huge and your attacks have 15-foot reach. You instead gain 20 temporary HP, AC = 18 + your level, attack modifier +18, damage bonus +7 and double the number of damage dice, and Athletics +20.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const AnimalMessenger = Abilities.defineAbility('spell/animal-messenger', {
  name: 'Animal Messenger',
  description: '*Concentrate, Manipulate, Mental*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Animal Messenger',
      description:
        '**Cast** 1 minute\n\n**Range** 120 feet\n\n**Duration** see text\n\nYou offer food, and an ordinary Tiny animal within range approaches to eat it. You imprint the image, direction, and distance of an obvious place or landmark well known to you within the animal. You can also attach a small object or note up to light Bulk to it. The animal does its best to reach the destination; if it makes it there, it waits nearby and allows nonhostile creatures to approach and remove the attached object. The spell ends after the message is delivered or after 24 hours, whichever comes first. If there are no Tiny wild animals in range, the spell is lost.',
      action: ActionTypes.Activity,
    },
  ],
})

export const Augury = Abilities.defineAbility('spell/augury', {
  name: 'Augury',
  description:
    '*Concentrate, Manipulate, Prediction*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Divine, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Augury',
      description:
        "**Cast** 10 minutes\n\nYou gain a vague glimpse of the future. During the casting of this spell, ask about the results of a particular course of action. The spell can predict results up to 30 minutes into the future and reveal the GM's best guess among the following outcomes: good, bad, mixed (the results will be a mix of good and bad), and nothing (there won't be particularly good or bad results).\n\nThe GM rolls a [secret](content:traits/secret) DC 6 flat check. On a failure, the result is always “nothing.” This makes it impossible to tell whether a “nothing” result is accurate. If anyone asks about the same topic as the first casting of augury during an additional casting, the GM uses the secret roll result from the first casting. If circumstances change, though, it's possible to get a different result.",
      action: ActionTypes.Activity,
    },
  ],
})

export const BlazingBolt = Abilities.defineAbility('spell/blazing-bolt', {
  name: 'Blazing Bolt',
  description:
    '*Attack, Concentrate, Fire, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Blazing Bolt',
      description:
        "**Range** 60 feet\n\n**Target** 1 or more creatures\n\n**Defense** [AC](characteristic:armor-class)\n\nYou fire a ray of heat and flame. Make a [spell attack roll](characteristic:spell-attack) against a single creature. On a hit, the target takes 2d6 fire damage, and on a critical hit, the target takes double damage.\n\nFor each additional action you use when Casting the Spell, you can fire an additional ray at a different target, to a maximum of three rays targeting three different targets for 3 actions.\n\nThese attacks each increase your multiple attack penalty, but you don't increase your multiple attack penalty until after you make all the spell attack rolls for blazing bolt. If you spend 2 or more actions Casting the Spell, the damage increases to 4d6 fire damage on a hit, and it still deals double damage on a critical hit.\n\n**Heightened (+1)** The damage to each target increases by 1d6 for the 1-action version, or by 2d6 for the 2- and 3-action versions.",
      action: ActionTypes.VariableActions,
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const BloodVendetta = Abilities.defineAbility('spell/blood-vendetta', {
  name: 'Blood Vendetta',
  description:
    '*Curse*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Blood Vendetta',
      description:
        '**Trigger** A creature deals piercing, slashing, or persistent bleed damage to you\n\n**Requirements** You can bleed\n\n**Range** 30 feet\n\n**Target** the triggering creature\n\n**Defense** Will\n\n**Duration** varies\n\nYou curse the target, punishing it for having the audacity to spill your blood. The target takes 2d6 [persistent bleed damage](content:conditions/persistent-damage) and must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes half the persistent bleed damage.\n\n**Failure** The target takes the full persistent bleed damage. Until the bleeding stops, the target has weakness 1 to piercing and slashing damage.\n\n**Critical Failure** As failure, but the target takes double the persistent bleed damage.\n\n**Heightened (+2)** The persistent bleed damage increases by 2d6.',
      action: ActionTypes.Reaction,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Blur = Abilities.defineAbility('spell/blur', {
  name: 'Blur',
  description:
    '*Concentrate, Illusion, Manipulate, Visual*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Blur',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Duration** 1 minute\n\nThe target's form appears blurry. It becomes [concealed](content:conditions/concealed). As the nature of this effect still leaves the target's location obvious, the target can't use this concealment to [Hide](content:skills/hide) or [Sneak](content:skills/sneak).",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Calm = Abilities.defineAbility('spell/calm', {
  name: 'Calm',
  description:
    '*Concentrate, Emotion, Incapacitation, Manipulate, Mental*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Divine, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Calm',
      description:
        "**Range** 120 feet\n\n**Area** 10-foot burst\n\n**Defense** Will\n\n**Duration** sustained up to 1 minute\n\nYou forcibly calm creatures in the area, soothing them into a nonviolent state; each creature must attempt a [Will save](characteristic:will).\n\n**Critical Success** The creature is unaffected.\n\n**Success** Calming urges impose a –1 status penalty to the creature's attack rolls.\n\n**Failure** Any [emotion](content:traits/emotion) effects that would affect the creature are suppressed and the creature can't use [hostile actions](content:spells/hostile-actions). If the target is subject to hostility from any other creature, it ceases to be affected by _calm_.\n\n**Critical Failure** As failure, but hostility doesn't end the effect.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 120, area: { type: AreaShape.Sphere, radius: 10 }, count: 1 } },
    },
  ],
})

export const CleanseAffliction = Abilities.defineAbility('spell/cleanse-affliction', {
  name: 'Cleanse Affliction',
  description:
    '*Concentrate, Healing, Manipulate*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Cleanse Affliction',
      description:
        "**Range** touch\n\n**Target** 1 willing creature\n\nGentle restorative magic pushes back the effects of toxins and more complex maladies. Choose an affliction on the target, such as a [curse](content:traits/curse), [disease](content:traits/disease), or [poison](content:traits/poison). If it has advanced past stage one, reduce the stage by one. This reduction can be applied only once to a given case of an affliction, with the case ending when it's completely cured. Although the reduction can't occur again, heightened versions of this spell attempt to counteract with each casting.\n\n**Heightened (3rd)** Attempt to [counteract](content:playing-the-game/counteracting) the affliction if it is a disease or poison.\n\n**Heightened (4th)** Attempt to counteract the affliction if it is a curse, disease, or poison.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const ClearMind = Abilities.defineAbility('spell/clear-mind', {
  name: 'Clear Mind',
  description:
    '*Concentrate, Healing, Manipulate, Mental*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Clear Mind',
      description:
        "**Range** touch\n\n**Target** 1 willing creature\n\nYou drive mental contamination from the target's mind. Attempt to [counteract](content:playing-the-game/counteracting) an effect of your choice imposing one of these conditions on the target: [fleeing](content:conditions/fleeing), [frightened](content:conditions/frightened), and [stupefied](content:conditions/stupefied). If you failed to counteract the effect but you would have if its counteract rank were 2 lower, instead suppress the effect until the beginning of your next turn. The effect's duration doesn't elapse while it's suppressed. This spell can't counteract or suppress conditions that are part of curses, diseases, or a natural state of the target.\n\n**Heightened (4th)** Add [confused](content:conditions/confused), [controlled](content:conditions/controlled), and [slowed](content:conditions/slowed) to the list of conditions.\n\n**Heightened (6th)** As 4th rank, plus add [doomed](content:conditions/doomed).\n\n**Heightened (8th)** As 4th rank, plus add [doomed](content:conditions/doomed) and [stunned](content:conditions/stunned).",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const CreateFood = Abilities.defineAbility('spell/create-food', {
  name: 'Create Food',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Create Food',
      description:
        '**Cast** 1 hour\n\n**Range** 30 feet\n\nYou create enough food to feed six Medium creatures for a day. This food is bland and unappealing, but it is nourishing. After 1 day, if no one has eaten the food, it decays and becomes inedible. Most Small creatures eat one-quarter as much as a Medium creature (one-sixteenth as much for most Tiny creatures), and most Large creatures eat 10 times as much (100 times as much for Huge creatures and so on).\n\n**Heightened (4th)** You can feed 12 Medium creatures.\n\n**Heightened (6th)** You can feed 50 Medium creatures.\n\n**Heightened (8th)** You can feed 200 Medium creatures.',
      action: ActionTypes.Activity,
    },
  ],
})

export const Darkness = Abilities.defineAbility('spell/darkness', {
  name: 'Darkness',
  description:
    '*Concentrate, Darkness, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Darkness',
      description:
        "**Range** 120 feet\n\n**Area** 20-foot burst\n\n**Duration** 1 minute\n\nYou create a shroud of darkness that prevents light from penetrating or emanating within the area. Light does not enter the area and any non-magical light sources, such as a torch or lantern, do not emanate any light while inside the area, even if their light radius would extend beyond the darkness. This also suppresses magical [light](content:traits/light) of your _darkness_ spell's rank or lower. Light can't pass through, so creatures in the area can't see outside. From outside, it appears as a globe of pure darkness.\n\n**Heightened (4th)** Even creatures with [darkvision](content:playing-the-game/darkvision-and-greater-darkvision) (but not greater darkvision) can barely see through the darkness. They treat targets seen through the darkness as [concealed](content:conditions/concealed).",
      action: ActionTypes.ThreeActions,
      targeting: { target: { range: 120, area: { type: AreaShape.Sphere, radius: 20 }, count: 1 } },
    },
  ],
})

export const Darkvision = Abilities.defineAbility('spell/darkvision', {
  name: 'Darkvision',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Darkvision',
      description:
        "**Duration** 1 hour\n\nYou grant yourself supernatural sight in areas of darkness. You gain [darkvision](content:playing-the-game/darkvision-and-greater-darkvision).\n\n**Heightened (3rd)** The spell's range is touch and it targets 1 willing creature.\n\n**Heightened (5th)** The spell's range is touch and it targets 1 willing creature. The duration is until your next daily preparations.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Deafness = Abilities.defineAbility('spell/deafness', {
  name: 'Deafness',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Deafness',
      description:
        '**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nThe target loses its hearing. It must attempt a Fortitude save, and it is then temporarily immune for 1 minute.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is [deafened](content:conditions/deafened) for 1 round.\n\n**Failure** The target is deafened for 10 minutes.\n\n**Critical Failure** The target is deafened permanently.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const DispelMagic = Abilities.defineAbility('spell/dispel-magic', {
  name: 'Dispel Magic',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Dispel Magic',
      description:
        "**Range** 120 feet\n\n**Target** 1 spell effect or unattended magic item\n\nYou unravel the magic behind a spell or effect. Attempt a [counteract](content:playing-the-game/counteracting) check against the target. If you successfully counteract a magic item, it becomes a mundane item of its type for 10 minutes. This doesn't change the item's non-magical properties. If the target is an artifact or similar item, you automatically fail.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 120, count: 1 } },
    },
  ],
})

export const EmbedMessage = Abilities.defineAbility('spell/embed-message', {
  name: 'Embed Message',
  description:
    '*Concentrate, Illusion, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Embed Message',
      description:
        '**Range** touch\n\n**Target** 1 object or willing creature\n\n**Duration** unlimited\n\nYou specify a trigger and a message up to 25 words long. When the specified trigger occurs within 30 feet of the target, illusory text of your message circles the target accompanied by a disembodied voice. You can choose a language you know for the text and speech, and can choose what the voice sounds like. Once the message is completed, the spell ends.\n\n**Heightened (4th)** You can add a simple sensory component to emphasize the message, such as an odor, visual effect, or physical sensation. This addition is obviously illusory and part of the message, lasting only while the message is being read.\n\n**Heightened (6th)** As 4th rank, but you can choose how many times the spell repeats the message before it ends; there is no limit to the number of repetitions.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Enlarge = Abilities.defineAbility('spell/enlarge', {
  name: 'Enlarge',
  description:
    '*Concentrate, Manipulate, Polymorph*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Enlarge',
      description:
        "**Range** 30 feet\n\n**Target** 1 willing creature\n\n**Duration** 5 minutes\n\nBolstered by magical power, the target grows to size Large. Its equipment grows with it but returns to natural size if removed. The creature is [clumsy 1](content:conditions/clumsy). Its [reach](content:traits/reach) increases by 5 feet (or by 10 feet if it started out Tiny), and it gains a +2 status bonus to damage rolls on melee Strikes. This spell has no effect on a Large or larger creature.\n\n**Heightened (4th)** The creature instead grows to size Huge. The status bonus to melee damage is +4 and the creature's reach increases by 10 feet (or 15 feet if the creature started out Tiny). The spell has no effect on a Huge or larger creature.\n\n**Heightened (6th)** Choose either the 2nd-rank or 4th-rank version of this spell and apply its effects to up to 10 willing creatures.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const EntanglingFlora = Abilities.defineAbility('spell/entangling-flora', {
  name: 'Entangling Flora',
  description:
    '*Concentrate, Manipulate, Plant, Wood*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Entangling Flora',
      description:
        "**Range** 120 feet\n\n**Area** all squares in a 20-foot burst\n\n**Duration** 1 minute\n\nPlants and fungi burst out or quickly grow, entangling creatures. All surfaces in the area are [difficult terrain](content:playing-the-game/difficult-terrain). Each round that a creature starts its turn in the area, it must attempt a [Reflex](characteristic:reflex) save. On a failure, it takes a –10-foot circumstance penalty to its Speeds until it leaves the area, and on a critical failure, it's also [immobilized](content:conditions/immobilized) for 1 round. Creatures can attempt to [Escape](content:playing-the-game/escape) to remove these effects.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const EnvironmentalEndurance = Abilities.defineAbility('spell/environmental-endurance', {
  name: 'Environmental Endurance',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Environmental Endurance',
      description:
        '**Cast** 10 minutes\n\n**Range** touch\n\n**Target** 1 willing creature\n\n**Duration** until your next daily preparations\n\nYou shield the target against dangerous temperatures. Choose severe cold or heat. The target is protected from the temperature you chose (but not extreme cold or heat).\n\n**Heightened (3rd)** The target is protected from severe cold and severe heat.\n\n**Heightened (5th)** The target is protected from severe cold, severe heat, extreme cold, and extreme heat.',
      action: ActionTypes.Activity,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Everlight = Abilities.defineAbility('spell/everlight', {
  name: 'Everlight',
  description:
    '*Concentrate, Light, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Everlight',
      description:
        '**Range** touch\n\n**Target** a gemstone worth 6 gp or more\n\n**Duration** unlimited\n\nThe gemstone you touch glows, spreading [bright light](content:playing-the-game/bright-light) with a color of your choice in a 20-foot radius (and [dim light](content:playing-the-game/dim-light) for the next 20 feet). The spell ends immediately if the gemstone is [broken](content:conditions/broken).',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const FalseVitality = Abilities.defineAbility('spell/false-vitality', {
  name: 'False Vitality',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'False Vitality',
      description:
        '**Duration** 8 hours\n\nYou augment your flesh with the energies typically used to manipulate the undead. You gain 10 temporary [Hit Points](characteristic:hit-points).\n\n**Heightened (+1)** The temporary Hit Points increase by 3.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const FloatingFlame = Abilities.defineAbility('spell/floating-flame', {
  name: 'Floating Flame',
  description:
    '*Concentrate, Fire, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Floating Flame',
      description:
        '**Range** 30 feet\n\n**Area** 1 5-foot square\n\n**Defense** [Reflex](characteristic:reflex)\n\n**Duration** sustained up to 1 minute\n\nYou create a fire that burns without fuel and moves to your commands. The flame deals 3d6 fire damage to each creature in the square in which it appears, with a [basic](content:playing-the-game/basic-saving-throws) Reflex save. When you [Sustain](content:playing-the-game/sustain) this spell, you can levitate the flame up to 10 feet. It then deals damage to each creature whose space it shared at any point during its flight. This uses the same damage and save, and you roll the damage once each time you Sustain. A given creature can take damage from _floating flame_ only once per round.\n\n**Heightened (+1)** The damage increases by 1d6.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const GeckoGrip = Abilities.defineAbility('spell/gecko-grip', {
  name: 'Gecko Grip',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Gecko Grip',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Duration** 10 minutes\n\nTiny clinging hairs sprout across the creature's hands and feet, offering purchase on nearly any surface. The target gains a climb [Speed](characteristic:speed) equal to its Speed.\n\n**Heightened (5th)** The duration increases to 1 hour.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const GhostlyCarrier = Abilities.defineAbility('spell/ghostly-carrier', {
  name: 'Ghostly Carrier',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Ghostly Carrier',
      description:
        '**Range** 120 feet\n\n**Duration** 1 minute\n\nYou create a Tiny, semi-corporeal figure with a form you choose. It hovers near you for the duration. When you [Cast a Spell](content:spells/cast-a-spell) that has a range of touch, you can have the carrier move within range, deliver the spell to a creature there, and return to you. If the carrier must attempt a [spell attack roll](characteristic:spell-attack), it uses your normal bonuses. The carrier has your [AC](characteristic:armor-class) and saves, but it is destroyed by any damage.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const HumanoidForm = Abilities.defineAbility('spell/humanoid-form', {
  name: 'Humanoid Form',
  description:
    '*Concentrate, Manipulate, Polymorph*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Humanoid Form',
      description:
        "**Duration** 10 minutes\n\nYou transform your appearance to that of a Small or Medium humanoid, such as a dwarf, elf, goblin, halfling, human, or orc. You gain the [humanoid](content:traits/humanoid) trait in addition to your other traits while in this form, as well as any trait related to the creature's kind (such as [goblin](content:traits/goblin) or [human](content:traits/human)). If this transformation reduces your size, it reduces your reach accordingly (typically to 5 feet). This transformation doesn't change your statistics in any way, and you don't gain any special abilities of the humanoid form you assume. You can still wear and use your gear, which changes size (if necessary) to match your new form. If items leave your person, they return to their usual size.\n\n_Humanoid form_ grants you a +4 status bonus to [Deception](characteristic:skill/deception) checks to pass as a generic member of the chosen ancestry, and you add your level even if you're untrained, but you can't make yourself look like a specific person. If you want to [Impersonate](content:skills/impersonate) an individual, you still need to create a disguise, though the GM won't factor in the difference in ancestry when determining the DC of your Deception check. You can Dismiss this spell.\n\n**Heightened (3rd)** You gain [darkvision](content:playing-the-game/darkvision-and-greater-darkvision) or [low-light vision](content:playing-the-game/low-light-vision) if the form you assume has that ability.\n\n**Heightened (5th)** You can take on the appearance of a Large humanoid. If this increases your size, you gain the effects of the [_enlarge_](ability:spell/enlarge) spell.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const IllusoryCreature = Abilities.defineAbility('spell/illusory-creature', {
  name: 'Illusory Creature',
  description:
    '*Auditory, Concentrate, Illusion, Manipulate, Olfactory, Visual*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Illusory Creature',
      description:
        "**Range** 500 feet\n\n**Duration** sustained\n\nYou create an illusory image of a Large or smaller creature. It generates the appropriate sounds, smells, and feels believable to the touch. If you and the image are ever farther than 500 feet apart, the spell ends.\n\nThe image can't speak, but you can use your actions to speak through the creature, with the spell disguising your voice as appropriate. You might need to attempt a [Deception](characteristic:skill/deception) or [Performance](characteristic:skill/performance) check to mimic the creature, as determined by the GM. This is especially likely if you're trying to imitate a specific person and engage with someone that person knows.\n\nIn combat, the illusion can use 2 actions per turn, which it uses when you [Sustain](content:playing-the-game/sustain) the spell. It uses your [spell attack modifier](characteristic:spell-attack) for attack rolls and your [spell DC](characteristic:spell-dc) for its [AC](characteristic:armor-class). Its saving throw modifiers are equal to your spell DC – 10. It is substantial enough that it can flank other creatures. If the image is hit by an attack or fails a save, the spell ends.\n\nThe illusion can cause damage by making the target believe the illusion's attacks are real, but it cannot otherwise directly affect the physical world. If the illusory creature hits with a [Strike](content:playing-the-game/strike), the target takes 3d4 mental damage. The illusion's Strikes are [nonlethal](content:traits/nonlethal). If the damage doesn't correspond to the image of the monster—for example, if an illusory Large dragon deals only 5 damage—the GM might allow the target to attempt an immediate [Perception](characteristic:perception) check to disbelieve the spell. Any relevant resistances and weaknesses apply if the target thinks they do, as judged by the GM. For example, if the illusion wields a warhammer and attacks a creature resistant to bludgeoning damage, the creature would take less mental damage. However, illusory damage does not deactivate regeneration or trigger other effects that require a certain damage type. The GM should track illusory damage dealt by the illusion.\n\nAny creature that touches the image or uses the [Seek](content:playing-the-game/seek) action to examine it can attempt to disbelieve your illusion. When a creature disbelieves the illusion, it recovers from half the damage it had taken from it (if any) and doesn't take any further damage from it.\n\n**Heightened (+1)** The damage of the image's Strikes increases by 1d4, and the maximum size of creature you can create increases by one (to a maximum of Gargantuan).",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Invisibility = Abilities.defineAbility('spell/invisibility', {
  name: 'Invisibility',
  description:
    '*Illusion, Manipulate, Subtle*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Invisibility',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Duration** 10 minutes\n\nIllusions bend light around the target, rendering it [invisible](content:conditions/invisible). This makes it [undetected](content:conditions/undetected) to all creatures, though the creatures can attempt to find the target, making it [hidden](content:conditions/hidden) to them instead. If the target uses a [hostile action](content:spells/hostile-actions), the spell ends after that hostile action is completed.\n\n**Heightened (4th)** The spell lasts 1 minute, but it doesn't end if the target uses a hostile action.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Knock = Abilities.defineAbility('spell/knock', {
  name: 'Knock',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Knock',
      description:
        "**Range** 30 feet\n\n**Target** 1 door, lock, or container\n\n**Duration** 1 minute\n\nYou make the target easier to open. _Knock_ grants a +4 status bonus to any creature that tries to open the target door, lock, or container with an [Athletics](characteristic:skill/athletics) or a [Thievery](characteristic:skill/thievery) check. You can attempt a Thievery check to open the target as part of casting _knock_, and you add your level even if you're untrained.\n\n_Knock_ [counteracts](content:playing-the-game/counteracting) _lock_.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const LaughingFit = Abilities.defineAbility('spell/laughing-fit', {
  name: 'Laughing Fit',
  description:
    '*Concentrate, Emotion, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Laughing Fit',
      description:
        "**Range** 30 feet\n\n**Target** 1 living creature\n\n**Defense** Will\n\n**Duration** sustained\n\nThe target is overtaken with uncontrollable laughter. It must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is plagued with uncontrollable laughter. It can't use reactions.\n\n**Failure** The target is [slowed 1](content:conditions/slowed) and can't use reactions.\n\n**Critical Failure** The target falls [prone](content:conditions/prone) and can't use actions or reactions for 1 round. It then takes the effects of a failure.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const MarvelousMount = Abilities.defineAbility('spell/marvelous-mount', {
  name: 'Marvelous Mount',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Marvelous Mount',
      description:
        "**Cast** 10 minutes\n\n**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** 8 hours\n\nYou conjure a Large fantastical creature to serve as a mount for the target. The mount is the target's [minion](content:traits/minion), has a [Speed](characteristic:speed) of 40 feet, and can bear the target with any carried possessions. It can't carry any other creature. The mount uses the target's [AC](characteristic:armor-class) and saves, but it's destroyed if it takes more than 10 damage at one time, ending the spell.\n\n**Heightened (3rd)** The mount can walk on water, but it must end its turn on solid ground or sink.\n\n**Heightened (4th)** The mount has a Speed of 60 feet and can walk on water.\n\n**Heightened (5th)** The mount has a Speed of 60 feet and can walk on water. It also has a fly Speed of 60 feet, but it must end its turn on a surface or fall.\n\n**Heightened (6th)** The mount has a Speed and fly Speed of 80 feet.",
      action: ActionTypes.Activity,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Mist = Abilities.defineAbility('spell/mist', {
  name: 'Mist',
  description:
    '*Concentrate, Manipulate, Water*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Mist',
      description:
        '**Range** 120 feet\n\n**Area** 20-foot burst\n\n**Duration** 1 minute\n\nYou call forth a cloud of mist. All creatures within the mist become [concealed](content:conditions/concealed), and all creatures outside the mist become concealed to creatures within it. You can Dismiss the cloud.',
      action: ActionTypes.ThreeActions,
      targeting: { target: { range: 120, area: { type: AreaShape.Sphere, radius: 20 }, count: 1 } },
    },
  ],
})

export const NoiseBlast = Abilities.defineAbility('spell/noise-blast', {
  name: 'Noise Blast',
  description:
    '*Concentrate, Manipulate, Sonic*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Noise Blast',
      description:
        '**Range** 30 feet\n\n**Area** 10-foot burst\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nA cacophonous noise blasts out, dealing 2d10 sonic damage. Each creature must attempt a Fortitude save.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes half damage.\n\n**Failure** The creature takes full damage and is [deafened](content:conditions/deafened) for 1 round.\n\n**Critical Failure** The creature takes double damage and is deafened for 1 minute, and [stunned](content:conditions/stunned) 1.\n\n**Heightened (+1)** The damage increases by 1d10.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, area: { type: AreaShape.Sphere, radius: 10 }, count: 1 } },
    },
  ],
})

export const OakenResilience = Abilities.defineAbility('spell/oaken-resilience', {
  name: 'Oaken Resilience',
  description:
    '*Concentrate, Manipulate, Plant, Wood*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Oaken Resilience',
      description:
        "**Range** touch\n\n**Target** 1 willing creature\n\n**Duration** 10 minutes\n\nThe target's skin becomes tough, with a consistency like bark or wood. The target gains resistance 2 to bludgeoning and piercing damage and weakness 3 to fire. After the target takes fire damage, it can Dismiss the spell as a free action triggered by taking the damage; doing so doesn't reduce the fire damage the target was dealt.\n\n**Heightened (+2)** The resistances increase by 2, and the weakness increases by 3.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const OneWithPlants = Abilities.defineAbility('spell/one-with-plants', {
  name: 'One with Plants',
  description: '*Concentrate, Manipulate, Plant, Polymorph, Wood*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'One with Plants',
      description:
        "**Duration** 10 minutes or 8 hours\n\nYou can either transform into a plant or merge with plant matter. While transformed, you can't move or affect anything outside the plant, but you can cast spells as long as they don't require line of effect beyond the plant. You can Dismiss this spell.\n\n- **Merge with Plants** The spell's duration is 10 minutes. While casting the spell, you must touch a plant with enough volume to fit you and your possessions or the spell is disrupted. While merged, you can hear, but not see, what's going on outside the plant. If the plant takes damage while you're inside it, you're expelled from the plant and take 10d6 damage. _Magic passage_ expels you without dealing damage. The spell ends if you're ever outside the plant.\n- **Turn into a Plant** The spell's duration is 8 hours. You become a Large plant—typically a tree. Perception checks don't reveal your true nature, but a successful [Nature](characteristic:skill/nature) or [Survival](characteristic:skill/survival) check against your [spell DC](characteristic:spell-dc) reveals that you appear to be a plant that is strangely new to the area. While in this form, you can observe everything around you, using your normal senses. As a plant, your [AC](characteristic:armor-class) is 20, and only status bonuses, status penalties, circumstance bonuses, and circumstance penalties affect you. Any successes and critical successes you roll on [Reflex](characteristic:reflex) saves are failures.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Paranoia = Abilities.defineAbility('spell/paranoia', {
  name: 'Paranoia',
  description: '*Concentrate, Illusion, Manipulate, Mental*\n\n**Tradition** [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Paranoia',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** 1 minute\n\nYou cause the target to see all other creatures as dire threats. The target is stricken by intense paranoia toward all creatures around it and must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target believes everyone it sees is a potential threat. It becomes [unfriendly](content:conditions/unfriendly) to all creatures to which it wasn't already [hostile](content:conditions/hostile), even those that were previously allies. It treats no one as an ally. The spell ends after 1 round.\n\n**Failure** As success, but the effect lasts 1 minute.\n\n**Critical Failure** As failure, except the target believes that everyone it sees is a mortal enemy. It uses its reactions and free actions against everyone, regardless of whether they were previously its allies, as determined by the GM. It otherwise acts as rationally as it normally does and likely prefers to attack creatures that are actively attacking or hindering it over those leaving it alone.\n\n**Heightened (6th)** You can target up to 5 creatures.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const PeacefulRest = Abilities.defineAbility('spell/peaceful-rest', {
  name: 'Peaceful Rest',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Peaceful Rest',
      description:
        "**Range** touch\n\n**Target** 1 corpse\n\n**Duration** until your next daily preparations\n\nThe targeted corpse doesn't decay, nor can it be transformed into an [undead](content:traits/undead). If the corpse is subject to a spell that requires the corpse to have died within a certain amount of time (for example, _raise dead_), do not count the duration of _peaceful rest_ against that time. This spell also prevents ordinary bugs and pests (such as maggots) from consuming the body.\n\n**Heightened (5th)** The spell's duration is unlimited, but the spell takes one more action to cast and requires a cost (embalming fluid worth 6 gp).",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const ResistEnergy = Abilities.defineAbility('spell/resist-energy', {
  name: 'Resist Energy',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Resist Energy',
      description:
        '**Range** touch\n\n**Target** 1 creature\n\n**Duration** 10 minutes\n\nA shield of elemental energy protects a creature against one type of energy damage. Choose acid, cold, electricity, fire, or sonic damage. The target and its gear gain resistance 5 against the damage type you chose.\n\n**Heightened (4th)** The resistance increases to 10, and you can target up to two creatures.\n\n**Heightened (7th)** The resistance increases to 15, and you can target up to five creatures.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const RevealingLight = Abilities.defineAbility('spell/revealing-light', {
  name: 'Revealing Light',
  description:
    '*Concentrate, Light, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Revealing Light',
      description:
        '**Range** 120 feet\n\n**Area** 10-foot burst\n\n**Defense** [Reflex](characteristic:reflex)\n\n**Duration** varies\n\nA wave of magical light washes over the area. You choose the appearance of the light, such as colorful, heatless flames or sparkling motes. A creature affected by revealing light is [dazzled](content:conditions/dazzled). If the creature was [invisible](content:conditions/invisible), it becomes [concealed](content:conditions/concealed) instead. If the creature was already concealed for any other reason, it is no longer concealed.\n\n**Critical Success** The target is unaffected.\n\n**Success** The light affects the creature for 2 rounds.\n\n**Failure** The light affects the creature for 1 minute.\n\n**Critical Failure** The light affects the creature for 10 minutes.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 120, area: { type: AreaShape.Sphere, radius: 10 }, count: 1 } },
    },
  ],
})

export const SeeTheUnseen = Abilities.defineAbility('spell/see-the-unseen', {
  name: 'See the Unseen',
  description:
    '*Concentrate, Manipulate, Revelation*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'See the Unseen',
      description:
        "**Duration** 10 minutes\n\nYour gaze pierces through illusions and finds [invisible](content:conditions/invisible) creatures and spirits. You can see invisible creatures as though they weren't invisible, although their features are blurred, making them [concealed](content:conditions/concealed) and difficult to identify. You can also see incorporeal creatures, like ghosts, phased through an object from within 10 feet of an object's surface as blurry shapes seen through those objects. Subtler clues also grant you a +2 status bonus to checks you make to disbelieve [illusions](content:traits/illusion).\n\n**Heightened (5th)** This spell has a duration of 8 hours.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const ShapeWood = Abilities.defineAbility('spell/shape-wood', {
  name: 'Shape Wood',
  description:
    '*Concentrate, Manipulate, Plant, Wood*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Shape Wood',
      description:
        "**Range** touch\n\n**Target** an unworked piece of wood up to 20 cubic feet in volume\n\nYou shape the wood into a rough shape of your choice. The shaping power is too crude to produce with intricate parts, fine details, moving pieces, or the like. You can't use this spell to enhance the value of the wooden object you are shaping.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const ShareLife = Abilities.defineAbility('spell/share-life', {
  name: 'Share Life',
  description: '*Concentrate, Manipulate*\n\n**Tradition** [Divine](trait:spellcasting/divine-spell-list)',
  tags: [Spell, SpellRank2, Divine],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Share Life',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** 10 minutes\n\nYou forge a temporary link between the target's life essence and your own. The target takes half damage from all effects that deal Hit Point damage, and you take the remainder of the damage. When you take damage through this link, you don't apply any resistances, weaknesses, or other abilities you have to that damage; you simply take that amount of damage. The spell ends if the target is ever more than 30 feet away from you. If either you or the target is reduced to 0 [Hit Points](characteristic:hit-points), any damage from this spell is resolved and then the spell ends.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Shatter = Abilities.defineAbility('spell/shatter', {
  name: 'Shatter',
  description:
    '*Concentrate, Manipulate, Sonic*\n\n**Traditions** [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Shatter',
      description:
        "**Range** 30 feet\n\n**Target** 1 unattended object\n\nA high-frequency sonic attack shatters a nearby object. You deal 2d10 sonic damage to the object, ignoring the object's Hardness if it is 4 or lower.\n\n**Heightened (+1)** The damage increases by 1d10, and the Hardness the spell ignores increases by 2.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Shrink = Abilities.defineAbility('spell/shrink', {
  name: 'Shrink',
  description:
    '*Concentrate, Manipulate, Polymorph*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Shrink',
      description:
        "**Range** 30 feet\n\n**Target** 1 willing creature\n\n**Duration** 5 minutes\n\nYou warp space to make a creature smaller. The target shrinks to become Tiny in size. Its equipment shrinks with it but returns to its original size if removed. The creature's [reach](content:traits/reach) changes to 0 feet. This spell has no effect on a Tiny creature.\n\n**Heightened (6th)** The spell can target up to 10 creatures.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Silence = Abilities.defineAbility('spell/silence', {
  name: 'Silence',
  description:
    '*Illusion, Manipulate, Subtle*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Divine, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Silence',
      description:
        "**Range** touch\n\n**Target** 1 willing creature\n\n**Duration** 1 minute\n\nThe target makes no sound, preventing creatures from noticing it using hearing alone. The target can't use [sonic](content:traits/sonic) attacks, nor can it use [auditory](content:traits/auditory) actions. This also prevents the target from casting spells due to the magical words involved in casting, with the exception of [subtle](content:traits/subtle) spells.\n\n**Heightened (4th)** The spell creates an aura in a 10-foot emanation around the touched creature, silencing all sound in or passing through it. While within the aura, creatures are subject to the same effects as the target. Depending upon the position of the effect, a creature might notice the lack of sound reaching it (blocking off the noise coming from a party, for example).",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const SoundBody = Abilities.defineAbility('spell/sound-body', {
  name: 'Sound Body',
  description:
    '*Concentrate, Healing, Manipulate, Vitality*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Sound Body',
      description:
        "**Range** touch\n\n**Target** 1 willing creature\n\nYou send a surge of healing energy to restore the target's body. Attempt to [counteract](content:playing-the-game/counteracting) an effect of your choice imposing one of these conditions on the target: [blinded](content:conditions/blinded), [dazzled](content:conditions/dazzled), [deafened](content:conditions/deafened), [enfeebled](content:conditions/enfeebled), or [sickened](content:conditions/sickened). If you didn't counteract the effect, but you would have if its counteract rank were 2 lower, instead suppress the effect until the beginning of your next turn. The effect's duration doesn't elapse while it's suppressed. This spell can't counteract or suppress [curses](content:traits/curse), [diseases](content:traits/disease), or conditions that are part of the target's normal state.\n\n**Heightened (4th)** Add [drained](content:conditions/drained) and [slowed](content:conditions/slowed) to the list of conditions.\n\n**Heightened (6th)** As 4th rank, plus add [petrified](content:conditions/petrified).\n\n**Heightened (8th)** As 4th rank, plus add [petrified](content:conditions/petrified) and [stunned](content:conditions/stunned).",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const SpeakWithAnimals = Abilities.defineAbility('spell/speak-with-animals', {
  name: 'Speak with Animals',
  description: '*Concentrate, Manipulate*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Speak with Animals',
      description:
        "**Duration** 1 hour\n\nYou can ask questions of, receive answers from, and use the [Diplomacy](characteristic:skill/diplomacy) skill with [animals](content:traits/animal). The spell doesn't make them more friendly than normal. Cunning animals are likely to be terse and evasive, while less intelligent ones often make inane comments.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const SpiritualArmament = Abilities.defineAbility('spell/spiritual-armament', {
  name: 'Spiritual Armament',
  description:
    '*Concentrate, Manipulate, Sanctified, Spirit*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Divine, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Spiritual Armament',
      description:
        "**Range** 120 feet\n\n**Target** 1 target\n\n**Defense** [AC](characteristic:armor-class)\n\n**Duration** sustained up to 1 minute\n\nYou create a ghostly, magical echo of one weapon you're wielding or wearing and fling it. Attempt a [spell attack roll](characteristic:spell-attack) against the target's AC, dealing 2d8 damage on a hit (or double damage on a critical hit). The damage type is the same as the chosen weapon (or any of its types for a versatile weapon). The attack deals spirit damage instead if that would be more detrimental to the creature (as determined by the GM). This attack uses and contributes to your multiple attack penalty. After the attack, the weapon returns to your side. If you sanctify the spell, the attacks are sanctified as well.\n\nEach time you [Sustain](content:playing-the-game/sustain) the spell, you can repeat the attack against any creature within 120 feet.\n\n**Heightened (+2)** The damage increases by 1d8.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 120, count: 1 } },
    },
  ],
})

export const Status = Abilities.defineAbility('spell/status', {
  name: 'Status',
  description:
    '*Concentrate, Detection, Manipulate*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Status',
      description:
        "**Range** touch\n\n**Target** 1 willing living creature\n\n**Duration** until your next daily preparations\n\nAs long as you and the target are on the same plane of existence and both alive, you remain aware of its present state. You know the target's direction from you, distance from you, and any conditions affecting it.\n\n**Heightened (4th)** The spell's range increases to 30 feet, and you can target up to 10 creatures.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Stupefy = Abilities.defineAbility('spell/stupefy', {
  name: 'Stupefy',
  description:
    '*Concentrate, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Stupefy',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** varies\n\nYou dull the target's mind, depending on its [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is [stupefied 1](content:conditions/stupefied) until the start of your next turn.\n\n**Failure** The target is stupefied 2 for 1 minute.\n\n**Critical Failure** The target is stupefied 3 for 1 minute.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const SummonElemental = Abilities.defineAbility('spell/summon-elemental', {
  name: 'Summon Elemental',
  description:
    '*Concentrate, Manipulate, Summon*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Elemental',
      description:
        '**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [elemental](content:traits/elemental) trait and whose level is 1 or lower to fight for you.\n\n**Heightened (3rd)** Level 2.\n\n**Heightened (4th)** Level 3.\n\n**Heightened (5th)** Level 5.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SureFooting = Abilities.defineAbility('spell/sure-footing', {
  name: 'Sure Footing',
  description:
    '*Concentrate, Healing, Manipulate*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Divine, Occult, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Sure Footing',
      description:
        "**Range** touch\n\n**Target** 1 willing creature\n\nYou free the target's limbs from ailments that impede mobility. Attempt to [counteract](content:playing-the-game/counteracting) an effect of your choice imposing one of these conditions on the target: [clumsy](content:conditions/clumsy), [grabbed](content:conditions/grabbed), or [paralyzed](content:conditions/paralyzed). If you didn't counteract the effect, but you would have if its counteract rank were 2 lower, instead suppress the effect until the beginning of your next turn. The effect's duration doesn't elapse while it's suppressed.\n\nThis spell can't counteract or suppress [curses](content:traits/curse), [diseases](content:traits/disease), or conditions that are part of the target's normal state.\n\n**Heightened (4th)** Add [immobilized](content:conditions/immobilized), [restrained](content:conditions/restrained), and [slowed](content:conditions/slowed) to the list of conditions.\n\n**Heightened (6th)** As 4th rank, plus add [petrified](content:conditions/petrified).\n\n**Heightened (8th)** As 4th rank, plus add [petrified](content:conditions/petrified) and [stunned](content:conditions/stunned).",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const TelekineticManeuver = Abilities.defineAbility('spell/telekinetic-maneuver', {
  name: 'Telekinetic Maneuver',
  description:
    '*Attack, Concentrate, Force, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Telekinetic Maneuver',
      description:
        '**Range** 60 feet\n\n**Target** 1 creature\n\nWith a rush of telekinetic power, you move a foe or something they carry. You can attempt to [Disarm](content:skills/disarm), [Reposition](content:skills/reposition), [Shove](content:skills/shove), or [Trip](content:skills/trip) the target using a [spell attack roll](characteristic:spell-attack) instead of an [Athletics](characteristic:skill/athletics) check.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const Translate = Abilities.defineAbility('spell/translate', {
  name: 'Translate',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Occult],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Translate',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Duration** 1 hour\n\nThe target can understand the meaning of a single language it is hearing or reading when you Cast the Spell. This doesn't let it understand codes, language couched in metaphor, and the like (subject to GM discretion). If the target can hear multiple languages and knows that, it can choose which language to understand; otherwise, choose one of the languages randomly.\n\n**Heightened (3rd)** The target can also speak the language.\n\n**Heightened (4th)** You can target up to 10 creatures, and targets can also speak the language.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const WaterBreathing = Abilities.defineAbility('spell/water-breathing', {
  name: 'Water Breathing',
  description:
    '*Concentrate, Manipulate, Water*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Water Breathing',
      description:
        '**Cast** 1 minute\n\n**Range** 30 feet\n\n**Target** up to 5 creatures\n\n**Duration** 1 hour\n\nThe targets can breathe underwater.\n\n**Heightened (3rd)** The duration is 8 hours.\n\n**Heightened (4th)** The duration is until your next daily preparations.',
      action: ActionTypes.Activity,
      targeting: { target: { range: 30, count: 5 } },
    },
  ],
})

export const WaterWalk = Abilities.defineAbility('spell/water-walk', {
  name: 'Water Walk',
  description:
    '*Concentrate, Manipulate, Water*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank2, Arcane, Divine, Primal],
  loadout: SpellRank2Loadout,
  universal: false,
  actions: [
    {
      name: 'Water Walk',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Duration** 10 minutes\n\nThe target can walk on the surface of water and other liquids without falling through. It can go underwater if it wishes, but in that case it must [Swim](content:skills/swim) normally. This spell doesn't grant the ability to breathe underwater.\n\n**Heightened (4th)** The spell's range increases to 30 feet, the duration increases to 1 hour, and you can target up to 10 creatures.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const AllRank2Spells = [
  AcidGrip,
  AnimalForm,
  AnimalMessenger,
  Augury,
  BlazingBolt,
  BloodVendetta,
  Blur,
  Calm,
  CleanseAffliction,
  ClearMind,
  CreateFood,
  Darkness,
  Darkvision,
  Deafness,
  DispelMagic,
  EmbedMessage,
  Enlarge,
  EntanglingFlora,
  EnvironmentalEndurance,
  Everlight,
  FalseVitality,
  FloatingFlame,
  GeckoGrip,
  GhostlyCarrier,
  HumanoidForm,
  IllusoryCreature,
  Invisibility,
  Knock,
  LaughingFit,
  MarvelousMount,
  Mist,
  NoiseBlast,
  OakenResilience,
  OneWithPlants,
  Paranoia,
  PeacefulRest,
  ResistEnergy,
  RevealingLight,
  SeeTheUnseen,
  ShapeWood,
  ShareLife,
  Shatter,
  Shrink,
  Silence,
  SoundBody,
  SpeakWithAnimals,
  SpiritualArmament,
  Status,
  Stupefy,
  SummonElemental,
  SureFooting,
  TelekineticManeuver,
  Translate,
  WaterBreathing,
  WaterWalk,
]
