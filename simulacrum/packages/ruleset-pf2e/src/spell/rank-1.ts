import { Abilities } from '@simulacrum/ruleset'
import { AreaShape } from '@simulacrum/ruleset/targeting'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Spell, SpellRank1, Arcane, Divine, Occult, Primal } from '@simulacrum/ruleset-pf2e/tag'
import { SpellRank1Loadout } from '@simulacrum/ruleset-pf2e/loadout'

export const AirBubble = Abilities.defineAbility('spell/air-bubble', {
  name: 'Air Bubble',
  description:
    '*Air, Concentrate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Divine, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Air Bubble',
      description:
        "**Trigger** A creature within range enters an environment where it can't breathe.\n\n**Range** 60 feet\n\n**Target** the triggering creature\n\n**Duration** 1 minute\n\nA bubble of pure air appears around the target's head, allowing it to breathe normally. The effect ends as soon as the target returns to an environment where it can breathe normally.",
      action: ActionTypes.Reaction,
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const Alarm = Abilities.defineAbility('spell/alarm', {
  name: 'Alarm',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Alarm',
      description:
        "**Cast** 10 minutes\n\n**Range** touch\n\n**Area** 20-foot burst\n\n**Duration** 8 hours\n\nYou ward an area to alert you when creatures enter without your permission. When you cast alarm, select a password. Whenever a Small or larger corporeal creature enters the spell's area without speaking the password, alarm sends your choice of a mental alert (in which case the spell gains the [mental](content:traits/mental) trait) or an audible alarm with the sound and volume of a hand bell (in which case the spell gains the [auditory](content:traits/auditory) trait). Either option automatically awakens you, and the bell allows each creature in the area to attempt a DC 15 [Perception](characteristic:perception) check to wake up. A creature aware of the alarm must succeed at a [Stealth](characteristic:skill/stealth) check against the spell's DC or trigger the spell when moving into the area.\n\n**Heightened (3rd)** You can specify a trigger for which types of creatures sound the alarm spell, as described in Setting Triggers on page 303.",
      action: ActionTypes.Activity,
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 20 }, count: 1 } },
    },
  ],
})

export const AntHaul = Abilities.defineAbility('spell/ant-haul', {
  name: 'Ant Haul',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Ant Haul',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Duration** 8 hours\n\nYou reinforce the target's musculoskeletal system to bear more weight. The target can carry 3 more Bulk than normal before becoming [encumbered](content:conditions/encumbered) and up to a maximum of 6 more Bulk.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Bane = Abilities.defineAbility('spell/bane', {
  name: 'Bane',
  description:
    '*Aura, Concentrate, Manipulate, Mental*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Divine, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Bane',
      description:
        "**Area** 10-foot emanation\n\n**Defense** Will\n\n**Duration** 1 minute\n\nYou fill the minds of your enemies with doubt. Enemies in the area must succeed at a [Will save](characteristic:will) or take a –1 status penalty to attack rolls as long as they are in the area. Once per round on subsequent turns, you can [Sustain](content:playing-the-game/sustain) the spell to increase the emanation's radius by 10 feet and force enemies in the area that weren't yet affected to attempt another saving throw. _Bane_ can counteract [_bless_](ability:spell/bless).",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 10 }, count: 1 } },
    },
  ],
})

export const Bless = Abilities.defineAbility('spell/bless', {
  name: 'Bless',
  description:
    '*Aura, Concentrate, Manipulate, Mental*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Divine, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Bless',
      description:
        "**Area** 15-foot emanation\n\n**Duration** 1 minute\n\nBlessings from beyond help your companions strike true. You and your allies gain a +1 status bonus to attack rolls while within the emanation. Once per round on subsequent turns, you can [Sustain](content:playing-the-game/sustain) the spell to increase the emanation's radius by 10 feet. _Bless_ can counteract [_bane_](ability:spell/bane).",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, area: { type: AreaShape.Sphere, radius: 15 }, count: 1 } },
    },
  ],
})

export const BreatheFire = Abilities.defineAbility('spell/breathe-fire', {
  name: 'Breathe Fire',
  description:
    '*Concentrate, Fire, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Breathe Fire',
      description:
        '**Area** 15-foot cone\n\n**Defense** [basic](content:playing-the-game/basic-saving-throws) [Reflex](characteristic:reflex)\n\nA gout of flame sprays from your mouth. You deal 2d6 fire damage to creatures in the area with a basic Reflex save.\n\n**Heightened (+1)** The damage increases by 2d6.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, area: { type: AreaShape.Cone, length: 15 }, count: 1 } },
    },
  ],
})

export const Charm = Abilities.defineAbility('spell/charm', {
  name: 'Charm',
  description:
    '*Concentrate, Emotion, Incapacitation, Manipulate, Mental, Subtle*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Occult, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Charm',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** 1 hour\n\nTo the target, your words are honey and your visage seems bathed in a dreamy haze. It must attempt a [Will save](characteristic:will), with a +4 circumstance bonus if you or your allies recently threatened it or used [hostile actions](content:spells/hostile-actions) against it.\n\nYou can Dismiss the spell. If you use hostile actions against the target, the spell ends. When the spell ends, the target doesn't necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations, meaning you could potentially convince the target to continue being your friend via mundane means.\n\n**Critical Success** The target is unaffected and aware you tried to charm it.\n\n**Success** The target is unaffected but thinks your spell was something harmless instead of _charm_, unless it [identifies the spell](content:spells/identifying-spells).\n\n**Failure** The target's attitude becomes [friendly](content:conditions/friendly) toward you. If it was friendly, it becomes [helpful](content:conditions/helpful). It can't use hostile actions against you.\n\n**Critical Failure** The target's attitude becomes helpful toward you, and it can't use hostile actions against you.\n\n**Heightened (4th)** The duration lasts until your next daily preparations.\n\n**Heightened (8th)** The duration lasts until your next daily preparations, and you can target up to 10 creatures.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const CleanseCuisine = Abilities.defineAbility('spell/cleanse-cuisine', {
  name: 'Cleanse Cuisine',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Divine, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Cleanse Cuisine',
      description:
        "**Range** 10 feet\n\n**Area** 1 cubic foot\n\nYou transform all food and beverages in the area into delicious fare, changing water into wine or another fine beverage, or enhancing the food's taste and ingredients to make it a gourmet treat. You can also choose to remove all toxins and contaminations from the food. This spell doesn't prevent future contamination, natural decay, or spoilage, nor does it make the food any more nutritious.\n\n**Heightened (+2)** Add another cubic foot to the area, which must be contiguous with the rest.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Command = Abilities.defineAbility('spell/command', {
  name: 'Command',
  description:
    "*Auditory, Concentrate, Linguistic, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)\n\n**Patron Themes** Faith's Flamekeeper, The Unseen Broker, The Unseen Broker",
  tags: [Spell, SpellRank1, Arcane, Divine, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Command',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** until the end of the target's next turn\n\nYou shout a command that's hard to ignore. You can command the target to approach you, run away (as if it had the [fleeing](content:conditions/fleeing) condition), release what it's holding, drop [prone](content:conditions/prone), or stand in place. It can't [Delay](content:playing-the-game/delay) or take any reactions until it has obeyed your command. The effects depend on the target's [Will save](characteristic:will).\n\n**Success** The creature is unaffected.\n\n**Failure** The creature must spend the first action on its next turn to obey your command.\n\n**Critical Failure** The target must use all its actions on its next turn to obey your command.\n\n**Heightened (5th)** You can target up to 10 creatures.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const CreateWater = Abilities.defineAbility('spell/create-water', {
  name: 'Create Water',
  description:
    '*Concentrate, Manipulate, Water*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Divine, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Create Water',
      description:
        '**Range** 0 feet\n\nAs you cup your hands, water begins to flow forth from them. You create 2 gallons of water. If no one drinks it, it evaporates after 1 day.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DetectPoison = Abilities.defineAbility('spell/detect-poison', {
  name: 'Detect Poison',
  description:
    '*Uncommon, Concentrate, Detection, Manipulate*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Divine, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Detect Poison',
      description:
        '**Range** 30 feet\n\n**Target** 1 object or creature\n\nYou detect whether a creature is venomous or poisonous, or if an object is poison or has been poisoned. You do not ascertain whether the target is poisonous in multiple ways, nor do you learn the type or types of poison. Certain substances, like lead and alcohol, are poisons and so mask other poisons.\n\n**Heightened (2nd)** You learn the number and types of poison.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const DisguiseMagic = Abilities.defineAbility('spell/disguise-magic', {
  name: 'Disguise Magic',
  description:
    '*Concentrate, Illusion, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Disguise Magic',
      description:
        "**Cast** 1 minute\n\n**Range** 30 feet\n\n**Target** 1 item or spell effect\n\n**Duration** until your next daily preparations\n\nYou alter how an item's or spell's magical aura appears to effects like [_detect magic_](ability:spell/detect-magic). You can hide the auras entirely, have an item register as a common item of lower level, or make a spell register as a common spell of the same or lower rank. You can Dismiss the spell.\n\nA caster using _detect magic_ or [_read aura_](ability:spell/read-aura) of a higher rank than _disguise magic_ can attempt to disbelieve the illusion using the skill matching the tradition of the spell ([Arcana](characteristic:skill/arcana) for [arcane](content:traits/arcane), [Religion](characteristic:skill/religion) for [divine](content:traits/divine), [Occultism](characteristic:skill/occultism) for [occult](content:traits/occult), or [Nature](characteristic:skill/nature) for [primal](content:traits/primal)). Further attempts by the same caster get the same result as the initial check to disbelieve.\n\n**Heightened (2nd)** You can Cast this Spell on a creature, disguising all items and spell effects on it.",
      action: ActionTypes.Activity,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const DizzyingColors = Abilities.defineAbility('spell/dizzying-colors', {
  name: 'Dizzying Colors',
  description:
    '*Concentrate, Illusion, Incapacitation, Manipulate, Visual*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Dizzying Colors',
      description:
        '**Area** 15-foot cone\n\n**Defense** Will\n\n**Duration** 1 or more rounds (see below)\n\nYou unleash a swirling multitude of colors that overwhelms creatures based on their [Will saves](characteristic:will).\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature is [dazzled](content:conditions/dazzled) for 1 round.\n\n**Failure** The creature is [stunned](content:conditions/stunned) 1, [blinded](content:conditions/blinded) for 1 round, and dazzled for 1 minute.\n\n**Critical Failure** The creature is stunned for 1 round and blinded for 1 minute.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, area: { type: AreaShape.Cone, length: 15 }, count: 1 } },
    },
  ],
})

export const Enfeeble = Abilities.defineAbility('spell/enfeeble', {
  name: 'Enfeeble',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)\n\n**Patron Themes** Devourer of Decay, The Resentment',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Enfeeble',
      description:
        "**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** [Fortitude](characteristic:fortitude)\n\n**Duration** varies\n\nYou sap the target's strength, depending on its Fortitude save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is [enfeebled 1](content:conditions/enfeebled) until the start of your next turn.\n\n**Failure** The target is enfeebled 2 for 1 minute.\n\n**Critical Failure** The target is enfeebled 3 for 1 minute.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Fear = Abilities.defineAbility('spell/fear', {
  name: 'Fear',
  description:
    '*Concentrate, Emotion, Fear, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)\n\n**Patron Theme** Starless Shadow',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Fear',
      description:
        '**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** varies\n\nYou plant fear in the target; it must attempt a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is [frightened 1](content:conditions/frightened).\n\n**Failure** The target is frightened 2.\n\n**Critical Failure** The target is frightened 3 and [fleeing](content:conditions/fleeing) for 1 round.\n\n**Heightened (3rd)** You can target up to five creatures.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const FleetStep = Abilities.defineAbility('spell/fleet-step', {
  name: 'Fleet Step',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Fleet Step',
      description: '**Duration** 1 minute\n\nYou gain a +30-foot status bonus to your [Speed](characteristic:speed).',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const ForceBarrage = Abilities.defineAbility('spell/force-barrage', {
  name: 'Force Barrage',
  description:
    '*Concentrate, Force, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Force Barrage',
      description:
        '**Range** 120 feet\n\n**Target** 1 creature\n\nYou fire a shard of solidified magic toward a creature that you can see. It automatically hits and deals 1d4+1 force damage. For each additional action you use when Casting the Spell, increase the number of shards you shoot by one, to a maximum of three shards for 3 actions. You choose the target for each shard individually. If you shoot more than one shard at the same target, combine the damage before applying bonuses or penalties to damage, resistances, weaknesses, and so forth.\n\n**Heightened (+2)** You fire one additional shard with each action you spend.',
      action: ActionTypes.VariableActions,
      targeting: { target: { range: 120, count: 1 } },
    },
  ],
})

export const GentleLanding = Abilities.defineAbility('spell/gentle-landing', {
  name: 'Gentle Landing',
  description:
    '*Air, Concentrate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)\n\n**Patron Theme** Whisper of Wings',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Gentle Landing',
      description:
        "**Trigger** A creature within range is falling\n\n**Range** 60 feet\n\n**Target** 1 falling creature\n\n**Duration** 1 minute\n\nYou raise a magical updraft to arrest a fall. The target's fall slows to 60 feet per round, and the portion of the fall during the spell's duration doesn't count when calculating [falling damage](content:playing-the-game/falling). If the target reaches the ground while the spell is in effect, it takes no damage from the fall. The spell ends as soon as the target lands.",
      action: ActionTypes.Reaction,
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const GoblinPox = Abilities.defineAbility('spell/goblin-pox', {
  name: 'Goblin Pox',
  description:
    '*Concentrate, Disease, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Goblin Pox',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nYour touch afflicts the target with goblin pox, an irritating allergenic rash. The target must attempt a Fortitude save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is [sickened 1](content:conditions/sickened).\n\n**Failure** The target is afflicted with goblin pox at stage 1.\n\n**Critical Failure** The target is afflicted with goblin pox at stage 2.\n\n**Goblin Pox** ([disease](content:traits/disease)) Level 1; Creatures that have the [goblin](content:traits/goblin) trait and goblin dogs are immune; **Stage 1** sickened 1 (1 round); **Stage 2** sickened 1 and [slowed 1](content:conditions/slowed) (1 round); **Stage 3** sickened 1 and the creature can't reduce its sickened value below 1 (1 day)",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Grease = Abilities.defineAbility('spell/grease', {
  name: 'Grease',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Grease',
      description:
        "**Range** 30 feet\n\n**Area** 4 contiguous 5-foot squares or\n\n**Target** 1 object of 1 Bulk or less\n\n**Duration** 1 minute\n\nYou conjure grease, choosing an area or target.\n\n- **Area** All solid ground in the area is covered with grease. Each creature standing on the greasy surface must succeed at a [Reflex](characteristic:reflex) save or an [Acrobatics](characteristic:skill/acrobatics) check against your [spell DC](characteristic:spell-dc) or fall [prone](content:conditions/prone). Creatures using an action to move onto the greasy surface during the spell's duration must attempt either a Reflex save or an Acrobatics check to [Balance](content:skills/balance). A creature that Steps or [Crawls](content:playing-the-game/crawl) doesn't have to attempt a check or save.\n\n- **Target** If you Cast the Spell on an unattended object, anyone trying to pick up the object must succeed at an Acrobatics check or Reflex save against your spell DC to do so. If you target an attended object, the creature that has the object must attempt an Acrobatics check or Reflex save. On a failure, the holder or wielder takes a –2 circumstance penalty to all checks that involve using the object; on a critical failure, the holder or wielder releases the item. The object lands in an adjacent square of the GM's choice. If you Cast this Spell on a worn object, the wearer gains a +2 circumstance bonus to [Fortitude](characteristic:fortitude) saves against attempts to grapple them.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const GrimTendrils = Abilities.defineAbility('spell/grim-tendrils', {
  name: 'Grim Tendrils',
  description:
    '*Concentrate, Manipulate, Void*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Grim Tendrils',
      description:
        '**Area** 30-foot line\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nTendrils of darkness curl out from your fingertips and race through the air. You deal 2d4 void damage and 1 [persistent bleed damage](content:conditions/persistent-damage) to living creatures in the line. Each living creature in the line must attempt a Fortitude save.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes half the void damage and no persistent bleed damage.\n\n**Failure** The creature takes full damage.\n\n**Critical Failure** The creature takes double void damage and double persistent bleed damage.\n\n**Heightened (+1)** The void damage increases by 2d4, and the persistent bleed damage increases by 1.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, area: { type: AreaShape.Line, length: 30, width: 5 }, count: 1 } },
    },
  ],
})

export const GustOfWind = Abilities.defineAbility('spell/gust-of-wind', {
  name: 'Gust of Wind',
  description:
    '*Air, Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)\n\n**Patron Theme** Silence in Snow',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Gust of Wind',
      description:
        "**Area** 60-foot line\n\n**Defense** [Fortitude](characteristic:fortitude)\n\n**Duration** until the start of your next turn\n\nA violent wind issues forth from your palm, blowing from the point where you are when you Cast the Spell to the line's opposite end. The wind extinguishes small non-magical fires, disperses fog and mist, blows objects of light Bulk or less around, and pushes larger objects. Large or smaller creatures in the area must attempt a Fortitude save. Large or smaller creatures that later move into the gust must attempt the save on entering.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature can't move against the wind.\n\n**Failure** The creature is knocked [prone](content:conditions/prone). If it was flying, it takes the effects of critical failure instead.\n\n**Critical Failure** The creature is pushed 30 feet in the wind's direction, knocked prone, and takes 2d6 bludgeoning damage.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, area: { type: AreaShape.Line, length: 60, width: 5 }, count: 1 } },
    },
  ],
})

export const Harm = Abilities.defineAbility('spell/harm', {
  name: 'Harm',
  description: '*Manipulate, Void*\n\n**Tradition** [Divine](trait:spellcasting/divine-spell-list)',
  tags: [Spell, SpellRank1, Divine],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Harm',
      description:
        "**Range** varies\n\n**Target** 1 living creature or 1 willing undead creature\n\nYou channel void energy to harm the living or heal the [undead](content:traits/undead). If the target is a living creature, you deal 1d8 void damage to it, and it gets a basic [Fortitude](characteristic:fortitude) save. If the target is a willing undead creature, you restore that amount of [Hit Points](characteristic:hit-points). The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.\n\n◆ The spell has a range of touch. ◆◆([concentrate](content:traits/concentrate)) The spell has a range of 30 feet. If you're healing an undead creature, increase the Hit Points restored by 8. ◆◆◆ ([concentrate](content:traits/concentrate)) You disperse void energy in a 30-foot emanation. This targets all living and undead creatures in the area.\n\n**Heightened (+1)** The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.",
      action: ActionTypes.VariableActions,
    },
  ],
})

export const Heal = Abilities.defineAbility('spell/heal', {
  name: 'Heal',
  description:
    '*Healing, Manipulate, Vitality*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Divine, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Heal',
      description:
        "**Range** varies\n\n**Target** 1 willing living creature or 1 undead creature\n\nYou channel vital energy to heal the living or damage the [undead](content:traits/undead). If the target is a willing living creature, you restore 1d8 [Hit Points](characteristic:hit-points). If the target is undead, you deal that amount of vitality damage to it, and it gets a basic [Fortitude](characteristic:fortitude) save. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.\n\n◆ The spell has a range of touch. ◆◆ ([concentrate](content:traits/concentrate)) The spell has a range of 30 feet. If you're healing a living creature, increase the Hit Points restored by 8. ◆◆◆ ([concentrate](content:traits/concentrate)) You disperse vital energy in a 30-foot emanation. This targets all living and undead creatures in the burst.\n\n**Heightened (+1)** The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.",
      action: ActionTypes.VariableActions,
    },
  ],
})

export const HydraulicPush = Abilities.defineAbility('spell/hydraulic-push', {
  name: 'Hydraulic Push',
  description:
    '*Attack, Concentrate, Manipulate, Water*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Hydraulic Push',
      description:
        '**Range** 60 feet\n\n**Target** 1 creature or unattended object\n\n**Defense** [AC](characteristic:armor-class)\n\nYou call forth a powerful blast of pressurized water that bludgeons the target and knocks it back. Make a ranged [spell attack roll](characteristic:spell-attack).\n\n**Critical Success** The target takes 6d6 bludgeoning damage and is [knocked back](content:playing-the-game/forced-movement) 10 feet.\n\n**Success** The target takes 3d6 bludgeoning damage and is knocked back 5 feet.\n\n**Heightened (+1)** The bludgeoning damage increases by 2d6.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 60, count: 1 } },
    },
  ],
})

export const IllOmen = Abilities.defineAbility('spell/ill-omen', {
  name: 'Ill Omen',
  description: '*Concentrate, Curse, Manipulate, Misfortune*\n\n**Tradition** [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Ill Omen',
      description:
        '**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** 1 round\n\nThe target is struck with misfortune, which throws it off balance. The target must attempt a [Will save](characteristic:will).\n\n**Success** The target is unaffected.\n\n**Failure** The first time during the duration that the target attempts an attack roll or skill check, it must roll twice and use the worse result.\n\n**Critical Failure** Every time during the duration that the target attempts an attack roll or skill check, it must roll twice and use the worse result.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const IllusoryDisguise = Abilities.defineAbility('spell/illusory-disguise', {
  name: 'Illusory Disguise',
  description:
    '*Concentrate, Illusion, Manipulate, Visual*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Illusory Disguise',
      description:
        '**Range** 30 feet\n\n**Target** 1 willing creature\n\n**Duration** 1 hour\n\nYou create an illusion that causes the target to appear as another creature of the same body shape, and with roughly similar height (within 6 inches) and weight (within 50 pounds). The disguise is typically good enough to hide their identity, but not to impersonate a specific individual. The spell changes their appearance and voice, but not mannerisms. You can change the appearance of its clothing and worn items, such as making its armor look like a dress. Held items are unaffected, and any worn item removed from the creature returns to its true appearance.\n\nCasting _illusory disguise_ counts as setting up a disguise for the [Impersonate](content:skills/impersonate) use of [Deception](characteristic:skill/deception); it ignores any circumstance penalties the target might take for disguising itself as a dissimilar creature, gives a +4 status bonus to Deception checks to prevent others from seeing through the disguise, and lets the target add its level to such Deception checks even if untrained. You can Dismiss this spell.\n\n**Heightened (3rd)** The target can appear as any creature of the same size, even a specific individual. You must have seen an individual to replicate its appearance, and must have heard its voice to replicate its voice.\n\n**Heightened (4th)** You can target up to 10 willing creatures. If you target multiple creatures, you can choose a different disguise for each target, but none can impersonate a specific individual. You can Dismiss each disguise individually or all collectively.\n\n**Heightened (7th)** As 4th, but you can choose disguises that impersonate specific individuals. You must have seen an individual to replicate its appearance, and must have heard its voice to replicate its voice.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const IllusoryObject = Abilities.defineAbility('spell/illusory-object', {
  name: 'Illusory Object',
  description:
    '*Concentrate, Illusion, Manipulate, Visual*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Illusory Object',
      description:
        "**Range** 500 feet\n\n**Area** 20-foot burst\n\n**Duration** 10 minutes\n\nYou create an illusory visual image of a stationary object. The entire image must fit within the spell's area. The object appears to animate naturally, but it doesn't make sounds or generate smells. For example, water would appear to pour down an illusory waterfall, but it would be silent.\n\nAny creature that touches the image or uses the [Seek](content:playing-the-game/seek) action to examine it can attempt to disbelieve your illusion.\n\n**Heightened (2nd)** Your image makes appropriate sounds, generates normal smells, and feels right to the touch. The spell gains the [auditory](content:traits/auditory) and [olfactory](content:traits/olfactory) traits. The duration increases to 1 hour.\n\n**Heightened (5th)** As the 2nd-rank version, but the duration is unlimited.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 500, area: { type: AreaShape.Sphere, radius: 20 }, count: 1 } },
    },
  ],
})

export const InfuseVitality = Abilities.defineAbility('spell/infuse-vitality', {
  name: 'Infuse Vitality',
  description: '*Concentrate, Manipulate, Vitality*\n\n**Tradition** [Divine](trait:spellcasting/divine-spell-list)',
  tags: [Spell, SpellRank1, Divine],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Infuse Vitality',
      description:
        "**Range** 30 feet\n\n**Target** 1 to 3 willing creatures\n\n**Duration** 1 minute\n\nYou empower attacks with vital energy. The number of targets is equal to the number of actions you spent casting this spell. Each target's [unarmed](content:traits/unarmed) and weapon Strikes deal an extra 1d4 vitality damage. (This damage typically [damages only undead](content:playing-the-game/step-2-damage-type).) If you have the [holy](content:traits/holy) trait, you can add that trait to this spell and to the Strikes affected by the spell.\n\n**Heightened (3rd)** The damage increases to 2d4 damage.\n\n**Heightened (5th)** The damage increases to 3d4 damage.",
      action: ActionTypes.VariableActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const ItemFacade = Abilities.defineAbility('spell/item-facade', {
  name: 'Item Facade',
  description:
    '*Concentrate, Illusion, Manipulate, Visual*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Item Facade',
      description:
        "**Range** touch\n\n**Target** 1 object no more than 10 feet by 10 feet by 10 feet\n\n**Duration** 1 hour\n\nYou make the target object look and feel as though it were in much better or worse physical condition. When you Cast this Spell, decide whether you want to make the object look decrepit or perfect. An item made to look decrepit appears broken and shoddy. An intact item made to look better appears as though it's brand new and highly polished or well maintained. A [broken](content:conditions/broken) item appears to be intact and functional. Destroyed items can't be affected by this spell. A creature that Interacts with the item can attempt to disbelieve the illusion.\n\n**Heightened (2nd)** The duration is 24 hours.\n\n**Heightened (3rd)** The duration is unlimited.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Jump = Abilities.defineAbility('spell/jump', {
  name: 'Jump',
  description: '*Manipulate, Move*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Jump',
      description:
        'Your legs surge with strength, ready to leap high and far. You jump 30 feet in any direction without touching the ground. You must land on a space of solid ground within 30 feet of you, or else you fall after using your next action.\n\n**Heightened (3rd)** The range becomes touch, the target changes to one touched creature, and the duration becomes 1 minute, allowing the target to jump as described whenever it takes the [Leap](content:playing-the-game/leap) action.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const Lock = Abilities.defineAbility('spell/lock', {
  name: 'Lock',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Lock',
      description:
        "**Range** touch\n\n**Target** 1 lock, or a door or container with a latch\n\n**Duration** until your next daily preparations\n\nThe target's latch mechanism clinks shut, held fast by unseen magical wards. When you magically lock a target, you set an [Athletics](characteristic:skill/athletics) and [Thievery](characteristic:skill/thievery) DC to open it equal to your [spell DC](characteristic:spell-dc) or the base lock DC with a +4 status bonus, whichever is higher. Any key or combination that once opened a lock affected by this spell does not do so for the duration of the spell, though the key or combination does grant a +4 circumstance bonus to checks to open the door.\n\nIf the target is opened, the spell ends. Assuming the target is not barred or locked in some additional way, you can unlock and open it with an [Interact](content:playing-the-game/interact) action during which you touch the target. This does not end the spell. You can Dismiss this spell at any time and from any distance.\n\n**Heightened (2nd)** The duration is unlimited, but you must expend 6 gp worth of precious metals as an additional cost.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Mending = Abilities.defineAbility('spell/mending', {
  name: 'Mending',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Mending',
      description:
        "**Cast** 10 minutes\n\n**Range** touch\n\n**Target** non-magical object of light Bulk or less\n\nYou repair the target item. You restore 5 [Hit Points](characteristic:hit-points) per spell rank to the target, potentially removing the [broken](content:conditions/broken) condition if this repairs it past the item's Broken Threshold. You can't replace lost pieces or repair an object that's been completely destroyed.\n\n**Heightened (2nd)** You can target a non-magical object of 1 Bulk or less.\n\n**Heightened (3rd)** You can target a non-magical object of 2 Bulk or less, or a magical object of 1 Bulk or less.",
      action: ActionTypes.Activity,
    },
  ],
})

export const Mindlink = Abilities.defineAbility('spell/mindlink', {
  name: 'Mindlink',
  description:
    '*Concentrate, Manipulate, Mental*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Mindlink',
      description:
        "**Range** touch\n\n**Target** 1 willing creature\n\nYou link your mind to the target's mind and mentally impart to that target an amount of information in an instant that could otherwise be communicated in 10 minutes.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const MysticArmor = Abilities.defineAbility('spell/mystic-armor', {
  name: 'Mystic Armor',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)\n\n**Lesson** Lesson of Protection',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Mystic Armor',
      description:
        '**Duration** until your next daily preparations\n\nYou ward yourself with shimmering magical energy, gaining a +1 item bonus to [AC](characteristic:armor-class) and a maximum [Dexterity modifier](characteristic:dexterity) of +5. While wearing _mystic armor_, you use your unarmored proficiency to calculate your AC.\n\n**Heightened (4th)** You gain a +1 item bonus to saving throws.\n\n**Heightened (6th)** The item bonus to AC increases to +2, and you gain a +1 item bonus to saving throws.\n\n**Heightened (8th)** The item bonus to AC increases to +2, and you gain a +2 item bonus to saving throws.\n\n**Heightened (10th)** The item bonus to AC increases to +3, and you gain a +3 item bonus to saving throws.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const PestForm = Abilities.defineAbility('spell/pest-form', {
  name: 'Pest Form',
  description:
    '*Concentrate, Manipulate, Polymorph*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)\n\n**Patron Theme** Mosquito Witch',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Pest Form',
      description:
        "**Duration** 10 minutes\n\nYou transform into the battle form of a Tiny animal, such as a cat, insect, lizard, or rat. You can decide the specific type of animal (such as a rat or praying mantis), but this has no effect on your Size or statistics. While in this form, you gain the [animal](content:traits/animal) trait, and you can't make Strikes. You can Dismiss the spell.\n\nYou gain the following statistics and abilities:\n\n- [AC](characteristic:armor-class) = 15 + your level. Ignore your armor's check penalty and [Speed](characteristic:speed) reduction.\n\n- Speed 20 feet.\n\n- Weakness 5 to physical damage. (If you take physical damage in this form, you take 5 additional damage.)\n\n- [Low-light vision](content:playing-the-game/low-light-vision) and [imprecise](content:playing-the-game/imprecise-senses) [scent](content:playing-the-game/scent) 30 feet.\n\n- [Acrobatics](characteristic:skill/acrobatics) and [Stealth](characteristic:skill/stealth) modifiers of +10, unless your own is higher; [Athletics](characteristic:skill/athletics) modifier –4.\n\n**Heightened (4th)** You can turn into a flying creature, such as a bird, which grants you a fly Speed of 20 feet.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const PetCache = Abilities.defineAbility('spell/pet-cache', {
  name: 'Pet Cache',
  description:
    '*Extradimensional, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Pet Cache',
      description:
        '**Range** touch\n\n**Target** 1 willing creature that is your companion\n\n**Duration** 8 hours\n\nYou open your cloak or create a gap with your hands, drawing the target into a pocket dimension just large enough for its basic comfort. No other creature can enter this extradimensional space, and the target can bring along objects only if they were designed to be worn by a creature of its kind. The space has enough air, food, and water to sustain the target for the duration.\n\nYou can Dismiss the spell. The spell also ends if you die or enter an extradimensional space. When the spell ends, the target reappears in the nearest unoccupied space (outside of any [extradimensional](content:traits/extradimensional) space you may have entered).',
      action: ActionTypes.SingleAction,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const PhantasmalMinion = Abilities.defineAbility('spell/phantasmal-minion', {
  name: 'Phantasmal Minion',
  description:
    '*Concentrate, Manipulate, Summon*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Phantasmal Minion',
      description:
        "**Range** 60 feet\n\n**Duration** sustained\n\nYou summon a phantasmal minion. The minion is roughly the shape of a humanoid. You can choose to have it be [invisible](content:conditions/invisible) or have an ephemeral appearance, but it's obviously a magical effect, not a real creature.",
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const PhantomPain = Abilities.defineAbility('spell/phantom-pain', {
  name: 'Phantom Pain',
  description:
    '*Concentrate, Illusion, Manipulate, Mental, Nonlethal*\n\n**Tradition** [Occult](trait:spellcasting/occult-spell-list)\n\n**Lesson** Lesson of Vengeance',
  tags: [Spell, SpellRank1, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Phantom Pain',
      description:
        '**Range** 30 feet\n\n**Target** 1 creature\n\n**Defense** Will\n\n**Duration** 1 minute\n\nIllusory pain wracks the target, dealing 2d4 mental damage and 1d4 [persistent mental damage](content:conditions/persistent-damage) with a [Will save](characteristic:will).\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes full initial damage but no persistent damage, and the spell ends immediately.\n\n**Failure** The target takes full initial and persistent damage, and the target is [sickened 1](content:conditions/sickened). If the target recovers from being sickened, the persistent damage ends and the spell ends.\n\n**Critical Failure** As failure, but the target is sickened 2.\n\n**Heightened (+1)** The damage increases by 2d4 and the persistent damage by 1d4.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const Protection = Abilities.defineAbility('spell/protection', {
  name: 'Protection',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Divine, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Protection',
      description:
        '**Range** touch\n\n**Target** 1 willing creature\n\n**Duration** 1 minute\n\nYou ward a creature against harm. The target gains a +1 status bonus to [Armor Class](characteristic:armor-class) and saving throws.\n\n**Heightened (3rd)** You can choose to have the benefits also affect all your allies in a 10-foot emanation around the target.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const PummelingRubble = Abilities.defineAbility('spell/pummeling-rubble', {
  name: 'Pummeling Rubble',
  description:
    '*Concentrate, Earth, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Pummeling Rubble',
      description:
        '**Area** 15-foot cone\n\n**Defense** [Reflex](characteristic:reflex)\n\nA spray of heavy rocks flies through the air in front of you. The rubble deals 2d4 bludgeoning damage to each creature in the area. Each creature must attempt a Reflex save.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes half damage.\n\n**Failure** The creature takes full damage and is [pushed](content:playing-the-game/forced-movement) 5 feet away from you.\n\n**Critical Failure** The creature takes double damage and is pushed 10 feet away from you.\n\n**Heightened (+1)** The damage increases by 2d4.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, area: { type: AreaShape.Cone, length: 15 }, count: 1 } },
    },
  ],
})

export const RunicBody = Abilities.defineAbility('spell/runic-body', {
  name: 'Runic Body',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Runic Body',
      description:
        "**Range** touch\n\n**Target** 1 willing creature\n\n**Duration** 1 minute\n\nGlowing runes appear on the target's body. All its [unarmed](content:traits/unarmed) attacks become _+1 striking_ unarmed attacks, gaining a +1 item bonus to attack rolls and increasing the number of damage dice to two.\n\n**Heightened (6th)** The unarmed attacks are _+2 greater striking_.\n\n**Heightened (9th)** The unarmed attacks are _+3 major striking_.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const RunicWeapon = Abilities.defineAbility('spell/runic-weapon', {
  name: 'Runic Weapon',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)\n\n**Patron Theme** The Inscribed One',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Runic Weapon',
      description:
        '**Range** touch\n\n**Target** 1 weapon that is unattended or wielded by a willing creature\n\n**Duration** 1 minute\n\nThe weapon glimmers with magic as temporary runes carve down its length. The target becomes a _+1 striking_ weapon, gaining a +1 item bonus to attack rolls and increasing the number of weapon damage dice to two.\n\n**Heightened (6th)** The weapon is _+2 greater striking_.\n\n**Heightened (9th)** The weapon is _+3 major striking_.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Sanctuary = Abilities.defineAbility('spell/sanctuary', {
  name: 'Sanctuary',
  description:
    '*Concentrate, Manipulate*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Divine, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Sanctuary',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Duration** 1 minute\n\nYou ward a creature with protective energy that deters attacks. Creatures attempting to attack the target must attempt a [Will save](characteristic:will) each time. If the target uses a [hostile action](content:spells/hostile-actions), the spell ends.\n\n**Critical Success** _Sanctuary_ ends.\n\n**Success** The creature can attempt its attack and any other attacks against the target this turn.\n\n**Failure** The creature can't attack the target and wastes the action. It can't attempt further attacks against the target this turn.\n\n**Critical Failure** The creature wastes the action and can't attempt to attack the target for the rest of sanctuary's duration.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const Sleep = Abilities.defineAbility('spell/sleep', {
  name: 'Sleep',
  description:
    '*Concentrate, Incapacitation, Manipulate, Mental, Sleep*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)\n\n**Lesson** Lesson of Dreams\n\n**Patron Theme** Paradox of Opposites',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Sleep',
      description:
        "**Range** 30 feet\n\n**Area** 5-foot burst\n\n**Defense** Will\n\nEach creature in the area becomes drowsy, possibly nodding off. A creature that falls [unconscious](content:conditions/unconscious) from this spell doesn't fall [prone](content:conditions/prone) or release what it's holding. This spell doesn't prevent creatures from waking up due to a successful [Perception](characteristic:perception) check, limiting its utility in combat.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes a –1 status penalty to Perception checks for 1 round.\n\n**Failure** The creature falls unconscious. If it's still unconscious after 1 minute, it wakes up automatically.\n\n**Critical Failure** The creature falls unconscious. If it's still unconscious after 1 hour, it wakes up automatically.\n\n**Heightened (4th)** The creatures fall unconscious for 1 round on a failure or 1 minute on a critical failure. They fall [prone](content:conditions/prone) and release what they're holding, and they can't attempt Perception checks to wake up. When the duration ends, the creature is sleeping normally instead of automatically waking up.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, area: { type: AreaShape.Sphere, radius: 5 }, count: 1 } },
    },
  ],
})

export const Soothe = Abilities.defineAbility('spell/soothe', {
  name: 'Soothe',
  description: '*Concentrate, Emotion, Healing, Manipulate, Mental*\n\n**Tradition** [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Soothe',
      description:
        "**Range** 30 feet\n\n**Target** 1 willing creature\n\n**Duration** 1 minute\n\nYou grace the target's mind, boosting its mental defenses and healing its wounds. The target regains 1d10+4 [Hit Points](characteristic:hit-points) when you Cast the Spell and gains a +2 status bonus to saves against [mental](content:traits/mental) effects for the duration.\n\n**Heightened (+1)** The amount of healing increases by 1d10+4.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const SpiderSting = Abilities.defineAbility('spell/spider-sting', {
  name: 'Spider Sting',
  description:
    '*Concentrate, Manipulate, Poison*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Spider Sting',
      description:
        "**Range** touch\n\n**Target** 1 creature\n\n**Defense** [Fortitude](characteristic:fortitude)\n\nYou magically duplicate a spider's venomous sting. You deal 1d4 piercing damage to the touched creature and afflict it with spider venom. The target must attempt a Fortitude save.\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes 1d4 poison damage.\n\n**Failure** The target is afflicted with spider venom at stage 1.\n\n**Critical Failure** The target is afflicted with spider venom at stage 2. **Spider Venom** ([poison](content:traits/poison)) Level 1; **Maximum Duration** 4 rounds; **Stage 1** 1d4 poison damage and [enfeebled 1](content:conditions/enfeebled) (1 round); **Stage 2** 1d4 poison damage and enfeebled 2 (1 round)",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 0, count: 1 } },
    },
  ],
})

export const SpiritLink = Abilities.defineAbility('spell/spirit-link', {
  name: 'Spirit Link',
  description:
    '*Concentrate, Healing, Manipulate, Spirit*\n\n**Traditions** [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)\n\n**Lesson** Lesson of Life',
  tags: [Spell, SpellRank1, Divine, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Spirit Link',
      description:
        "**Range** 30 feet\n\n**Target** 1 willing creature\n\n**Duration** 10 minutes\n\nYou form a spiritual link with another creature, taking in its pain. When you Cast this Spell and at the start of each of your turns, if the target is below maximum [Hit Points](characteristic:hit-points), it regains 2 Hit Points (or the difference between its current and maximum Hit Points, if that's lower). You lose as many Hit Points as the target regained.\n\nThis is a spiritual transfer, so no effects apply that would increase the Hit Points the target regains or decrease the Hit Points you lose. This transfer also ignores any temporary Hit Points you or the target have. Since this effect doesn't involve vitality or void energy, _spirit link_ works even if you or the target is [undead](content:traits/undead). While the duration persists, you gain no benefit from regeneration or fast healing. You can Dismiss this spell, and if you're ever at 0 Hit Points, _spirit link_ ends automatically.\n\n**Heightened (+1)** The number of Hit Points transferred each time increases by 2.",
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const SummonAnimal = Abilities.defineAbility('spell/summon-animal', {
  name: 'Summon Animal',
  description:
    '*Concentrate, Manipulate, Summon*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Animal',
      description:
        '**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [animal](content:traits/animal) trait and whose level is –1 to fight for you.\n\n**Heightened (2nd)** Level 1.\n\n**Heightened (3rd)** Level 2.\n\n**Heightened (4th)** Level 3.\n\n**Heightened (5th)** Level 5.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SummonConstruct = Abilities.defineAbility('spell/summon-construct', {
  name: 'Summon Construct',
  description: '*Concentrate, Manipulate, Summon*\n\n**Tradition** [Arcane](trait:spellcasting/arcane-spell-list)',
  tags: [Spell, SpellRank1, Arcane],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Construct',
      description:
        '**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [construct](content:traits/construct) trait and whose level is –1 to fight for you.\n\n**Heightened (2nd)** Level 1.\n\n**Heightened (3rd)** Level 2.\n\n**Heightened (4th)** Level 3.\n\n**Heightened (5th)** Level 5.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SummonFey = Abilities.defineAbility('spell/summon-fey', {
  name: 'Summon Fey',
  description:
    '*Concentrate, Manipulate, Summon*\n\n**Traditions** [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Occult, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Fey',
      description:
        '**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [fey](content:traits/fey) trait and whose level is –1 to fight for you.\n\n**Heightened (2nd)** Level 1.\n\n**Heightened (3rd)** Level 2.\n\n**Heightened (4th)** Level 3.\n\n**Heightened (5th)** Level 5.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SummonPlantOrFungus = Abilities.defineAbility('spell/summon-plant-or-fungus', {
  name: 'Summon Plant or Fungus',
  description: '*Concentrate, Manipulate, Summon*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Plant or Fungus',
      description:
        '**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [plant](content:traits/plant) or [fungus](content:traits/fungus) trait and whose level is –1 to fight for you.\n\n**Heightened (2nd)** Level 1.\n\n**Heightened (3rd)** Level 2.\n\n**Heightened (4th)** Level 3.\n\n**Heightened (5th)** Level 5.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SummonUndead = Abilities.defineAbility('spell/summon-undead', {
  name: 'Summon Undead',
  description:
    '*Concentrate, Manipulate, Summon*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Summon Undead',
      description:
        '**Range** 30 feet\n\n**Duration** sustained up to 1 minute\n\nYou summon a creature that has the [undead](content:traits/undead) trait and whose level is –1 to fight for you.\n\n**Heightened (2nd)** Level 1.\n\n**Heightened (3rd)** Level 2.\n\n**Heightened (4th)** Level 3.\n\n**Heightened (5th)** Level 5.\n\n**Heightened (6th)** Level 7.\n\n**Heightened (7th)** Level 9.\n\n**Heightened (8th)** Level 11.\n\n**Heightened (9th)** Level 13.\n\n**Heightened (10th)** Level 15.',
      action: ActionTypes.ThreeActions,
    },
  ],
})

export const SureStrike = Abilities.defineAbility('spell/sure-strike', {
  name: 'Sure Strike',
  description:
    '*Concentrate, Fortune*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Occult](trait:spellcasting/occult-spell-list)\n\n**Patron Theme** Spinner of Threads',
  tags: [Spell, SpellRank1, Arcane, Occult],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Sure Strike',
      description:
        '**Duration** until the end of your turn\n\nThe next time you make an attack roll before the end of your turn, roll it twice and use the better result. The attack ignores circumstance penalties to the attack roll and any flat check required due to the target being [concealed](content:conditions/concealed) or [hidden](content:conditions/hidden). You are then temporarily immune to sure strike for 10 minutes.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const Tailwind = Abilities.defineAbility('spell/tailwind', {
  name: 'Tailwind',
  description:
    '*Air, Concentrate, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Tailwind',
      description:
        '**Duration** 1 hour\n\nThe wind at your back pushes you to find new horizons. You gain a +10-foot status bonus to your [Speed](characteristic:speed).\n\n**Heightened (2nd)** The duration increases to 8 hours.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Thunderstrike = Abilities.defineAbility('spell/thunderstrike', {
  name: 'Thunderstrike',
  description:
    '*Concentrate, Electricity, Manipulate, Sonic*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Thunderstrike',
      description:
        '**Range** 120 feet\n\n**Target** 1 creature\n\n**Defense** [basic](content:playing-the-game/basic-saving-throws) [Reflex](characteristic:reflex)\n\nYou call down a tendril of lightning that cracks with thunder, dealing 1d12 electricity damage and 1d4 sonic damage to the target with a basic Reflex save. A target wearing metal armor or made of metal takes a –1 circumstance penalty to its save, and if damaged by the spell is [clumsy 1](content:conditions/clumsy) for 1 round.\n\n**Heightened (+1)** The damage increases by 1d12 electricity and 1d4 sonic.',
      action: ActionTypes.TwoActions,
      targeting: { target: { range: 120, count: 1 } },
    },
  ],
})

export const VanishingTracks = Abilities.defineAbility('spell/vanishing-tracks', {
  name: 'Vanishing Tracks',
  description: '*Concentrate, Manipulate*\n\n**Tradition** [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Vanishing Tracks',
      description:
        '**Duration** 1 hour\n\nYou obscure the tracks you leave behind. The DC of checks to [Track](content:skills/track) you gains a +4 status bonus or is equal to your [spell DC](characteristic:spell-dc), whichever results in a higher DC.\n\n**Heightened (2nd)** The duration increases to 8 hours.\n\n**Heightened (4th)** The duration increases to 8 hours. The spell has a range of 20 feet and targets up to 10 creatures.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Ventriloquism = Abilities.defineAbility('spell/ventriloquism', {
  name: 'Ventriloquism',
  description:
    '*Auditory, Concentrate, Illusion, Manipulate*\n\n**Traditions** [Arcane](trait:spellcasting/arcane-spell-list), [Divine](trait:spellcasting/divine-spell-list), [Occult](trait:spellcasting/occult-spell-list), [Primal](trait:spellcasting/primal-spell-list)',
  tags: [Spell, SpellRank1, Arcane, Divine, Occult, Primal],
  loadout: SpellRank1Loadout,
  universal: false,
  actions: [
    {
      name: 'Ventriloquism',
      description:
        "**Duration** 10 minutes\n\nWhenever you speak or make any other sound vocally, you can make your vocalization seem to originate from somewhere else within 60 feet, and you can change that apparent location freely as you vocalize. Any creature that hears the sound can attempt to disbelieve your illusion.\n\n**Heightened (2nd)** The spell's duration increases to 1 hour, and you can also change the tone, quality, and other aspects of your voice. Before a creature can attempt to disbelieve your illusion, it must actively attempt a [Perception](characteristic:perception) check or otherwise use actions to interact with the sound.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const AllRank1Spells = [
  AirBubble,
  Alarm,
  AntHaul,
  Bane,
  Bless,
  BreatheFire,
  Charm,
  CleanseCuisine,
  Command,
  CreateWater,
  DetectPoison,
  DisguiseMagic,
  DizzyingColors,
  Enfeeble,
  Fear,
  FleetStep,
  ForceBarrage,
  GentleLanding,
  GoblinPox,
  Grease,
  GrimTendrils,
  GustOfWind,
  Harm,
  Heal,
  HydraulicPush,
  IllOmen,
  IllusoryDisguise,
  IllusoryObject,
  InfuseVitality,
  ItemFacade,
  Jump,
  Lock,
  Mending,
  Mindlink,
  MysticArmor,
  PestForm,
  PetCache,
  PhantasmalMinion,
  PhantomPain,
  Protection,
  PummelingRubble,
  RunicBody,
  RunicWeapon,
  Sanctuary,
  Sleep,
  Soothe,
  SpiderSting,
  SpiritLink,
  SummonAnimal,
  SummonConstruct,
  SummonFey,
  SummonPlantOrFungus,
  SummonUndead,
  SureStrike,
  Tailwind,
  Thunderstrike,
  VanishingTracks,
  Ventriloquism,
]
