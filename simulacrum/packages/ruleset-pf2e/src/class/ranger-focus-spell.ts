import { Abilities } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { FocusSpell, Spell } from '@simulacrum/ruleset-pf2e/tag'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'

export const GravityWeapon = Abilities.defineAbility('spell/gravity-weapon', {
  name: 'Gravity Weapon',
  description: '*Uncommon, Focus, Ranger*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Gravity Weapon',
      description:
        '**Duration** 1 minute\n\nYou build up gravitational force and funnel it into your blows, leading to more powerful attacks with blade and bow alike. On your first weapon [Strike](content:playing-the-game/strike) each round, you gain a status bonus to damage equal to twice the number of weapon damage dice.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const HealCompanion = Abilities.defineAbility('spell/heal-companion', {
  name: 'Heal Companion',
  description: '*Uncommon, Focus, Healing, Ranger, Vitality*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Heal Companion',
      description:
        "**Range** touch or 30 feet\n\n**Target** your animal companion\n\nYou heal your animal companion's wounds. You restore 1d10 [Hit Points](characteristic:hit-points) to your animal companion. The number of actions you spend Casting this Spell determines range and other parameters.\n\n◆ (manipulate) The spell has a range of touch. ◆◆ ([concentrate](content:traits/concentrate), [manipulate](content:traits/manipulate)) The spell has a range of 30 feet and restores an additional 8 Hit Points to the target.\n\n**Heightened (+1)** The amount of healing increases by 1d10, and the additional healing for the 2-action version increases by 8.",
      action: ActionTypes.VariableActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const MagicHide = Abilities.defineAbility('spell/magic-hide', {
  name: 'Magic Hide',
  description: '*Uncommon, Focus, Manipulate, Ranger*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Magic Hide',
      description:
        '**Range** 30 feet\n\n**Target** your animal companion\n\n**Duration** 1 minute\n\nYour animal companion grows a thicker hide, matted fur, or a harder shell, granting it a +1 status bonus to [AC](characteristic:armor-class).',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const AnimalFeature = Abilities.defineAbility('spell/animal-feature', {
  name: 'Animal Feature',
  description: '*Uncommon, Concentrate, Focus, Manipulate, Morph, Ranger*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Animal Feature',
      description:
        '**Duration** 1 minute\n\nWithout fully transforming your body, you gain one animalistic feature, which you select from the list below each time you Cast the Spell.\n\n- **Cat Eyes** You gain [low-light vision](content:playing-the-game/low-light-vision).\n\n- **Claws** You gain a claw attack that deals 1d6 slashing damage and has the [agile](content:traits/agile), [finesse](content:traits/finesse), and [unarmed](content:traits/unarmed) traits.\n\n- **Jaws** You gain a jaws attack that deals 1d8 piercing damage and has the [unarmed](content:traits/unarmed) trait.\n\n**Heightened (4th)** Add the following options to the list.\n\n- **Fish Tail** You gain a swim [Speed](characteristic:speed) equal to your land Speed.\n\n- **Owl Eyes** You gain [darkvision](content:playing-the-game/darkvision-and-greater-darkvision).\n\n- **Wings** You gain a fly Speed equal to your land Speed.',
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const EnlargeCompanion = Abilities.defineAbility('spell/enlarge-companion', {
  name: 'Enlarge Companion',
  description: '*Uncommon, Concentrate, Focus, Manipulate, Polymorph, Ranger*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Enlarge Companion',
      description:
        '**Range** 30 feet\n\n**Target** your animal companion\n\n**Duration** 1 minute\n\nYour animal companion grows much larger, towering over its foes in battle. Your animal companion becomes Large, gaining the effects of a 2nd-rank [_enlarge_](ability:spell/enlarge) spell.\n\n**Heightened (4th)** Your animal companion instead becomes Huge, gaining the benefits of a 4th-rank _enlarge_ spell.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const HuntersLuck = Abilities.defineAbility('spell/hunters-luck', {
  name: "Hunter's Luck",
  description: '*Uncommon, Concentrate, Focus, Fortune, Ranger*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Hunter's Luck",
      description:
        '**Trigger** You attempt a check to [Recall Knowledge](content:skills/recall-knowledge) about a creature, but you haven’t rolled yet\n\nYou have a preternatural ability to remember details about your foes. Roll the triggering check twice and use the better result.',
      action: ActionTypes.FreeAction,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const SoothingMist = Abilities.defineAbility('spell/soothing-mist', {
  name: 'Soothing Mist',
  description: '*Uncommon, Concentrate, Focus, Healing, Manipulate, Ranger, Vitality*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Soothing Mist',
      description:
        '**Range** 30 feet\n\n**Target** 1 willing living creature or 1 undead creature\n\nYou call forth a magical mist that envelops a creature. The mist restores 2d8 [Hit Points](characteristic:hit-points) to a target living creature and ends one source of [persistent acid, bleed, fire, poison, or void damage](content:conditions/persistent-damage) affecting it. If the creature is taking persistent damage from multiple sources, you select which one is removed. Against an [undead](content:traits/undead) target, you deal 2d8 vitality damage ([basic](content:playing-the-game/basic-saving-throws) [Fortitude](characteristic:fortitude) save); if it fails the save, it also takes 2 persistent vitality damage.\n\n**Heightened (+1)** The amount of healing (or damage to an undead target) increases by 1d8, and the persistent vitality damage to an undead creature increases by 1.',
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const EphemeralTracking = Abilities.defineAbility('spell/ephemeral-tracking', {
  name: 'Ephemeral Tracking',
  description: '*Uncommon, Concentrate, Focus, Manipulate, Ranger*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Ephemeral Tracking',
      description:
        "**Duration** 1 hour\n\nYou can look at currents in the air and water and see tracks that you can follow just as you would on land. You can use [Survival](characteristic:skill/survival) to [Track](content:skills/track) through both air and water, noticing aerial or aquatic “tracks” of all creatures who passed nearby in the last hour. It's more difficult to Track in this way: the DC to Track through air or water is always at least 30, or higher after precipitation or wind (in the air) or heavy tides or currents (in the water). It's possible to [Cover Tracks](content:skills/cover-tracks) against this spell, but creatures might not realize they need to do so.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const RangersBramble = Abilities.defineAbility('spell/rangers-bramble', {
  name: "Ranger's Bramble",
  description: '*Uncommon, Concentrate, Focus, Manipulate, Plant, Ranger*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Ranger's Bramble",
      description:
        "**Range** 100 feet\n\n**Area** all squares that contain plants in a 5-foot burst\n\n**Duration** 1 minute\n\nYou cause plants in the area to entangle your foes, with the effects of [_entangling flora_](ability:spell/entangling-flora). A creature that critically fails the save takes 2d4 [persistent bleed damage](content:conditions/persistent-damage) in addition to being [immobilized](content:conditions/immobilized). Escaping your bramble doesn't end the bleed damage.\n\n**Heightened (+1)** The bleed damage on a critical failure increases by 1d4.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const HuntersVision = Abilities.defineAbility('spell/hunters-vision', {
  name: "Hunter's Vision",
  description: '*Uncommon, Concentrate, Focus, Ranger*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: "Hunter's Vision",
      description:
        "**Range** 30 feet\n\n**Target** 1 hunted prey\n\n**Duration** 10 minutes\n\nYour target glows with a magical aura visible only to you and those who follow your lead. Your target is visible to you and others sharing your Hunt Prey benefits even if it wouldn't normally be due to lighting or the [concealed](content:conditions/concealed) or [invisible](content:conditions/invisible) conditions, though cover from opaque objects still blocks your sight. You ignore the flat check against the target due to the concealed condition, and the target isn't automatically hidden from you due to [darkness](content:playing-the-game/darkness) or being invisible.",
      action: ActionTypes.SingleAction,
      costs: [{ cost: 1, resource: FocusPoints }],
      targeting: { target: { range: 30, count: 1 } },
    },
  ],
})

export const TerrainTransposition = Abilities.defineAbility('spell/terrain-transposition', {
  name: 'Terrain Transposition',
  description: '*Uncommon, Concentrate, Focus, Manipulate, Ranger, Teleportation*',
  tags: [Spell, FocusSpell],
  universal: false,
  actions: [
    {
      name: 'Terrain Transposition',
      description:
        "**Range** 90 feet\n\nYou mystically transpose your current location with another. While in a wilderness environment, you transport yourself and items you're holding to a clear space you can see within range. If you have [Favored Terrain](trait:feat/favored-terrain) and both your starting and ending position are in your favored terrain, the range increases to 180 feet. If you have an animal companion and it is adjacent to you, you can transport it along with you to an adjacent open space, but if this spell would bring any other creature with you, even in an [extradimensional](content:traits/extradimensional) container, the spell is lost.",
      action: ActionTypes.TwoActions,
      costs: [{ cost: 1, resource: FocusPoints }],
    },
  ],
})

export const AllRangerFocusSpellEntities = [
  GravityWeapon,
  HealCompanion,
  MagicHide,
  AnimalFeature,
  EnlargeCompanion,
  HuntersLuck,
  SoothingMist,
  EphemeralTracking,
  RangersBramble,
  HuntersVision,
  TerrainTransposition,
]
