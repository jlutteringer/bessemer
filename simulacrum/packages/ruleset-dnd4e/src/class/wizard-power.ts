import { Abilities, Effects, Traits } from '@simulacrum/ruleset'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import * as ActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import {
  AtWillPower,
  AttackPower,
  Cantrip,
  DailyPower,
  EncounterPower,
  PowerLevel1,
  PowerLevel2,
  PowerLevel3,
  PowerLevel5,
  UtilityPower,
} from '@simulacrum/ruleset-dnd4e/tag'
import { Wizard, WizardCantrips } from '@simulacrum/ruleset-dnd4e/class/class-wizard'

// Generated from the Player's Handbook Wizard powers, levels 1-5. Powers are learned through character options, so they
// aren't universal (except cantrips, which every wizard has). Encounter powers come back after a short rest, daily powers after an
// extended rest.

export const GhostSound = Abilities.defineAbility('wizard/power/ghost-sound', {
  name: 'Ghost Sound',
  description: '*With a wink, you create an illusory sound that emanates from somewhere close by.*',
  tags: [AtWillPower, Cantrip, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(WizardCantrips)],
  effects: [
    Effects.descriptive(
      '**Wizard Cantrip**\n\n**At-Will** ✦ Arcane, Illusion\n\n**Standard Action** · Ranged 10\n\n**Target:** One object or unoccupied square\n\n**Effect:** You cause a sound as quiet as a whisper or as loud as a yelling or fighting creature to emanate from the target. You can produce nonvocal sounds such as the ringing of a sword blow, jingling armor, or scraping stone. If you whisper, you can whisper quietly enough that only creatures adjacent to the target can hear your words.'
    ),
  ],
  actions: [{ name: 'Ghost Sound', action: ActionTypes.StandardAction }],
})

export const Light = Abilities.defineAbility('wizard/power/light', {
  name: 'Light',
  description:
    '*With a wave of your hand, you cause a bright light to appear on the tip of your staff, upon some other object, or in a nearby space.*',
  tags: [AtWillPower, Cantrip, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(WizardCantrips)],
  effects: [
    Effects.descriptive(
      "**Wizard Cantrip**\n\n**At-Will** ✦ Arcane\n\n**Minor Action** · Ranged 5\n\n**Target:** One object or unoccupied square\n\n**Effect:** You cause the target to shed bright light. The light fills the target's square and all squares within 4 squares of it. The light lasts for 5 minutes. Putting out the light is a free action.\n\n**Special:** You can have only one light cantrip active at a time. If you create a new light, your previously cast light winks out."
    ),
  ],
  actions: [{ name: 'Light', action: ActionTypes.MinorAction }],
})

export const MageHand = Abilities.defineAbility('wizard/power/mage-hand', {
  name: 'Mage Hand',
  description: '*You gesture toward an object nearby, and a spectral floating hand lifts the object into the air and moves it where you wish.*',
  tags: [AtWillPower, Cantrip, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(WizardCantrips)],
  effects: [
    Effects.descriptive(
      '**Wizard Cantrip**\n\n**At-Will** ✦ Arcane, Conjuration\n\n**Minor Action** · Ranged 5\n\n**Effect:** You conjure a spectral, floating hand in an unoccupied square within range. The hand picks up, moves, or manipulates an adjacent object weighing 20 pounds or less and carries it up to 5 squares. If you are holding the object when you use this power, the hand can move the object into a pack, a pouch, a sheath, or a similar container and simultaneously move any one object carried or worn anywhere on your body into your hand.\n\nAs a move action, you can move the hand up to 5 squares. As a free action, you can cause the hand to drop an object it is holding, and as a minor action, you can cause the hand to pick up or manipulate a different object.\n\n**Sustain Minor:** You can sustain the hand indefinitely.\n\n**Special:** You can create only one hand at a time.'
    ),
  ],
  actions: [{ name: 'Mage Hand', action: ActionTypes.MinorAction }],
})

export const Prestidigitation = Abilities.defineAbility('wizard/power/prestidigitation', {
  name: 'Prestidigitation',
  description:
    '*You perform an amusing magical trick, such as creating a dancing wisp of light, freshening a wilting flower, making a coin invisible, or warming a cold drink.*',
  tags: [AtWillPower, Cantrip, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(WizardCantrips)],
  effects: [
    Effects.descriptive(
      "**Wizard Cantrip**\n\n**At-Will** ✦ Arcane\n\n**Standard Action** · Ranged 2\n\n**Effect:** Use this cantrip to accomplish one of the effects given below.\n\n✦ Move up to 1 pound of material.\n\n✦ Create a harmless sensory effect, such as a shower of sparks, a puff of wind, faint music, or a strong odor.\n\n✦ Color, clean, or soil items in 1 cubic foot for up to 1 hour.\n\n✦ Instantly light (or snuff out) a candle, a torch, or a small campfire.\n\n✦ Chill, warm, or flavor up to 1 pound of nonliving material for up to 1 hour.\n\n✦ Make a small mark or symbol appear on a surface for up to 1 hour.\n\n✦ Produce out of nothingness a small item or image that exists until the end of your next turn.\n\n✦ Make a small, handheld item invisible until the end of your next turn.\n\nNothing you create with this cantrip can deal damage, serve as a weapon or a tool, or hinder another creature's actions. This cantrip cannot duplicate the effect of any other power.\n\n**Special:** You can have as many as three prestidigitation effects active at one time."
    ),
  ],
  actions: [{ name: 'Prestidigitation', action: ActionTypes.StandardAction }],
})

export const CloudOfDaggers = Abilities.defineAbility('wizard/power/cloud-of-daggers', {
  name: 'Cloud of Daggers',
  description: '*You create a small cloud of whirling daggers of force that relentlessly attack creatures in the area.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      "**Wizard Attack 1**\n\n**At-Will** ✦ Arcane, Force, Implement\n\n**Standard Action** · Area 1 square within 10 squares\n\n**Target:** Each creature in square\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 1d6 + Intelligence modifier force damage.\n\nIncrease damage to 2d6 + Intelligence modifier at 21st level.\n\n**Effect:** The power's area is filled with sharp daggers of force. Any creature that enters the area or starts its turn there takes force damage equal to your Wisdom modifier (minimum 1). The cloud remains in place until the end of your next turn. You can dispel it earlier as a minor action."
    ),
  ],
  actions: [{ name: 'Cloud of Daggers', action: ActionTypes.StandardAction }],
})

export const MagicMissile = Abilities.defineAbility('wizard/power/magic-missile', {
  name: 'Magic Missile',
  description: '*You launch a silvery bolt of force at an enemy.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**At-Will** ✦ Arcane, Force, Implement\n\n**Standard Action** · Ranged 20\n\n**Target:** One creature\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 2d4 + Intelligence modifier force damage.\n\nIncrease damage to 4d4 + Intelligence modifier at 21st level.\n\n**Special:** This power counts as a ranged basic attack. When a power allows you to make a ranged basic attack, you can use this power.'
    ),
  ],
  actions: [{ name: 'Magic Missile', action: ActionTypes.StandardAction }],
})

export const RayOfFrost = Abilities.defineAbility('wizard/power/ray-of-frost', {
  name: 'Ray of Frost',
  description: '*A blisteringly cold ray of white frost streaks to your target.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**At-Will** ✦ Arcane, Cold, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Intelligence vs. Fortitude\n\n**Hit:** 1d6 + Intelligence modifier cold damage, and the target is slowed until the end of your next turn.\n\nIncrease damage to 2d6 + Intelligence modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Ray of Frost', action: ActionTypes.StandardAction }],
})

export const ScorchingBurst = Abilities.defineAbility('wizard/power/scorching-burst', {
  name: 'Scorching Burst',
  description: '*A vertical column of golden flames burns all within.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**At-Will** ✦ Arcane, Fire, Implement\n\n**Standard Action** · Area burst 1 within 10 squares\n\n**Target:** Each creature in burst\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 1d6 + Intelligence modifier fire damage.\n\nIncrease damage to 2d6 + Intelligence modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Scorching Burst', action: ActionTypes.StandardAction }],
})

export const Thunderwave = Abilities.defineAbility('wizard/power/thunderwave', {
  name: 'Thunderwave',
  description: '*You create a whip-crack of sonic power that lashes up from the ground.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**At-Will** ✦ Arcane, Implement, Thunder\n\n**Standard Action** · Close blast 3\n\n**Target:** Each creature in blast\n\n**Attack:** Intelligence vs. Fortitude\n\n**Hit:** 1d6 + Intelligence modifier thunder damage, and you push the target a number of squares equal to your Wisdom modifier.\n\nIncrease damage to 2d6 + Intelligence modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Thunderwave', action: ActionTypes.StandardAction }],
})

export const BurningHands = Abilities.defineAbility('wizard/power/burning-hands', {
  name: 'Burning Hands',
  description: '*A fierce burst of flame erupts from your hands and scorches nearby foes.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**Encounter** ✦ Arcane, Fire, Implement\n\n**Standard Action** · Close blast 5\n\n**Target:** Each creature in blast\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 2d6 + Intelligence modifier fire damage.'
    ),
  ],
  actions: [{ name: 'Burning Hands', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ChillStrike = Abilities.defineAbility('wizard/power/chill-strike', {
  name: 'Chill Strike',
  description: '*You create a bolt of frigid purple energy around your hand and send it hurtling toward your foe.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**Encounter** ✦ Arcane, Cold, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Intelligence vs. Fortitude\n\n**Hit:** 2d8 + Intelligence modifier cold damage, and the target is dazed until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Chill Strike', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ForceOrb = Abilities.defineAbility('wizard/power/force-orb', {
  name: 'Force Orb',
  description: '*You hurl an orb of magical force at an enemy.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**Encounter** ✦ Arcane, Force, Implement\n\n**Standard Action** · Ranged 20\n\n**Primary Target:** One creature or object\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 2d8 + Intelligence modifier force damage. Make a secondary attack.\n\n**Secondary Target:** Each enemy adjacent to the primary target\n\n**Secondary Attack:** Intelligence vs. Reflex\n\n**Hit:** 1d10 + Intelligence modifier force damage.'
    ),
  ],
  actions: [{ name: 'Force Orb', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const IcyTerrain = Abilities.defineAbility('wizard/power/icy-terrain', {
  name: 'Icy Terrain',
  description: '*With frosty breath, you utter a single arcane word that creates a treacherous patch of ice on the ground, hampering your foes.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      "**Wizard Attack 1**\n\n**Encounter** ✦ Arcane, Cold, Implement\n\n**Standard Action** · Area burst 1 within 10 squares\n\n**Target:** Each creature in burst\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 1d6 + Intelligence modifier cold damage, and the target is knocked prone.\n\n**Effect:** The power's area is difficult terrain until the end of your next turn. You can end this effect as a minor action."
    ),
  ],
  actions: [{ name: 'Icy Terrain', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RayOfEnfeeblement = Abilities.defineAbility('wizard/power/ray-of-enfeeblement', {
  name: 'Ray of Enfeeblement',
  description: '*You point three fingers at your foe, curling them like talons.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**Encounter** ✦ Arcane, Implement, Necrotic\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Intelligence vs. Fortitude\n\n**Hit:** 1d10 + Intelligence modifier necrotic damage, and the target is weakened until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Ray of Enfeeblement', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AcidArrow = Abilities.defineAbility('wizard/power/acid-arrow', {
  name: 'Acid Arrow',
  description: '*A shimmering arrow of green, glowing liquid streaks to your target and bursts in a spray of sizzling acid.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**Daily** ✦ Acid, Arcane, Implement\n\n**Standard Action** · Ranged 20\n\n**Primary Target:** One creature\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 2d8 + Intelligence modifier acid damage, and ongoing 5 acid damage (save ends). Make a secondary attack.\n\n**Secondary Target:** Each creature adjacent to the primary target\n\n**Secondary Attack:** Intelligence vs. Reflex\n\n**Hit:** 1d8 + Intelligence modifier acid damage, and ongoing 5 acid damage (save ends).\n\n**Miss:** Half damage, and ongoing 2 acid damage to primary target (save ends), and no secondary attack.'
    ),
  ],
  actions: [{ name: 'Acid Arrow', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FlamingSphere = Abilities.defineAbility('wizard/power/flaming-sphere', {
  name: 'Flaming Sphere',
  description: '*You conjure a rolling ball of fire and control where it goes.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**Daily** ✦ Arcane, Conjuration, Fire, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature adjacent to the flaming sphere\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 2d6 + Intelligence modifier fire damage.\n\n**Effect:** You conjure a Medium flaming sphere in an unoccupied square within range, and the sphere attacks an adjacent creature. Any creature that starts its turn next to the flaming sphere takes 1d4 + Intelligence modifier fire damage. As a move action, you can move the sphere up to 6 squares.\n\n**Sustain Minor:** You can sustain this power until the end of the encounter. As a standard action, you can make another attack with the sphere.'
    ),
  ],
  actions: [{ name: 'Flaming Sphere', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FreezingCloud = Abilities.defineAbility('wizard/power/freezing-cloud', {
  name: 'Freezing Cloud',
  description: '*A pellet shoots from your hand and explodes into a cloud of icy mist at the point of impact.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**Daily** ✦ Arcane, Cold, Implement\n\n**Standard Action** · Area burst 2 within 10 squares\n\n**Target:** Each creature in burst\n\n**Attack:** Intelligence vs. Fortitude\n\n**Hit:** 1d8 + Intelligence modifier cold damage.\n\n**Miss:** Half damage.\n\n**Effect:** The cloud lasts until the end of your next turn. Any creature that enters the cloud or starts its turn there is subject to another attack. You can dismiss the cloud as a minor action.'
    ),
  ],
  actions: [{ name: 'Freezing Cloud', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Sleep = Abilities.defineAbility('wizard/power/sleep', {
  name: 'Sleep',
  description: '*You exert your will against your foes, seeking to overwhelm them with a tide of magical weariness.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 1**\n\n**Daily** ✦ Arcane, Implement, Sleep\n\n**Standard Action** · Area burst 2 within 20 squares\n\n**Target:** Each creature in burst\n\n**Attack:** Intelligence vs. Will\n\n**Hit:** The target is slowed (save ends). If the target fails its first saving throw against this power, the target becomes unconscious (save ends).\n\n**Miss:** The target is slowed (save ends).'
    ),
  ],
  actions: [{ name: 'Sleep', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ExpeditiousRetreat = Abilities.defineAbility('wizard/power/expeditious-retreat', {
  name: 'Expeditious Retreat',
  description: '*Your form blurs as you hastily withdraw from the battlefield.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive('**Wizard Utility 2**\n\n**Daily** ✦ Arcane\n\n**Move Action** · Personal\n\n**Effect:** Shift up to twice your speed.'),
  ],
  actions: [{ name: 'Expeditious Retreat', action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FeatherFall = Abilities.defineAbility('wizard/power/feather-fall', {
  name: 'Feather Fall',
  description: '*You or a creature you choose falls gently, like a feather.*',
  universal: false,
  tags: [DailyPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Utility 2**\n\n**Daily** ✦ Arcane\n\n**Free Action** · Ranged 10\n\n**Trigger:** You or one creature in range falls\n\n**Effect:** You or the creature takes no damage from the fall, regardless of its distance, and does not fall prone at the end of the fall.'
    ),
  ],
  actions: [{ name: 'Feather Fall', action: ActionTypes.FreeAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Jump = Abilities.defineAbility('wizard/power/jump', {
  name: 'Jump',
  description: '*You or another creature you choose can suddenly leap great distances.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Utility 2**\n\n**Encounter** ✦ Arcane\n\n**Move Action** · Ranged 10\n\n**Target:** You or one creature\n\n**Effect:** The target makes an Athletics check to jump with a +10 power bonus, and the target does not have to move to make a running jump.'
    ),
  ],
  actions: [{ name: 'Jump', action: ActionTypes.MoveAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Shield = Abilities.defineAbility('wizard/power/shield', {
  name: 'Shield',
  description: '*You throw up your hand, and a shield of arcane energy springs into existence, protecting you against imminent attacks.*',
  universal: false,
  tags: [EncounterPower, UtilityPower, PowerLevel2],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Utility 2**\n\n**Encounter** ✦ Arcane, Force\n\n**Immediate Interrupt** · Personal\n\n**Trigger:** You are hit by an attack\n\n**Effect:** You gain a +4 power bonus to AC and Reflex defense until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Shield', action: ActionTypes.ImmediateInterrupt }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ColorSpray = Abilities.defineAbility('wizard/power/color-spray', {
  name: 'Color Spray',
  description: '*A brilliant blast of flashing colors springs from your outstretched fingers, knocking nearby enemies senseless.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 3**\n\n**Encounter** ✦ Arcane, Implement, Radiant\n\n**Standard Action** · Close blast 5\n\n**Target:** Each creature in blast\n\n**Attack:** Intelligence vs. Will\n\n**Hit:** 1d6 + Intelligence modifier radiant damage, and the target is dazed until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Color Spray', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const FireShroud = Abilities.defineAbility('wizard/power/fire-shroud', {
  name: 'Fire Shroud',
  description: '*With a subtle gesture, you wreathe nearby enemies in flames.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 3**\n\n**Encounter** ✦ Arcane, Fire, Implement\n\n**Standard Action** · Close burst 3\n\n**Target:** Each enemy in burst\n\n**Attack:** Intelligence vs. Fortitude\n\n**Hit:** 1d8 + Intelligence modifier fire damage, and ongoing 5 fire damage (save ends).'
    ),
  ],
  actions: [{ name: 'Fire Shroud', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const IcyRays = Abilities.defineAbility('wizard/power/icy-rays', {
  name: 'Icy Rays',
  description: '*You fire two bolts of brilliant blue-white energy.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 3**\n\n**Encounter** ✦ Arcane, Cold, Implement\n\n**Standard Action** · Ranged 10\n\n**Targets:** One or two creatures\n\n**Attack:** Intelligence vs. Reflex, one attack per target\n\n**Hit:** 1d10 + Intelligence modifier cold damage, and the target is immobilized until the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Icy Rays', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const ShockSphere = Abilities.defineAbility('wizard/power/shock-sphere', {
  name: 'Shock Sphere',
  description:
    '*You hurl a crackling orb of lightning that explodes at a point you designate, engulfing all nearby creatures in its electric embrace.*',
  universal: false,
  tags: [EncounterPower, AttackPower, PowerLevel3],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 3**\n\n**Encounter** ✦ Arcane, Implement, Lightning\n\n**Standard Action** · Area burst 2 within 10 squares\n\n**Target:** Each creature in burst\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 2d6 + Intelligence modifier lightning damage.'
    ),
  ],
  actions: [{ name: 'Shock Sphere', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const BigbysIcyGrasp = Abilities.defineAbility('wizard/power/bigbys-icy-grasp', {
  name: "Bigby's Icy Grasp",
  description: '*You conjure a giant floating hand made of chiseled ice that clutches foes and freezes them.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 5**\n\n**Daily** ✦ Arcane, Cold, Conjuration, Implement\n\n**Standard Action** · Ranged 20\n\n**Effect:** You conjure a 5-foot-tall hand of ice in an unoccupied square within range, and the hand attacks. As a move action, you can move the hand up to 6 squares.\n\n**Target:** One creature adjacent to the hand\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 2d8 + Intelligence modifier cold damage, and the hand grabs the target. If the target attempts to escape, the hand uses your Fortitude or Reflex defense.\n\n**Sustain Minor:** A target grabbed by the hand takes 1d8 + Intelligence modifier cold damage when you sustain this power. As a standard action, you can attack another target with the hand, but it must release a target it has grabbed.'
    ),
  ],
  actions: [{ name: "Bigby's Icy Grasp", action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Fireball = Abilities.defineAbility('wizard/power/fireball', {
  name: 'Fireball',
  description: '*A globe of orange flame coalesces in your hand.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 5**\n\n**Daily** ✦ Arcane, Fire, Implement\n\n**Standard Action** · Area burst 3 within 20 squares\n\n**Target:** Each creature in burst\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** 3d6 + Intelligence modifier fire damage.\n\n**Miss:** Half damage.'
    ),
  ],
  actions: [{ name: 'Fireball', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const StinkingCloud = Abilities.defineAbility('wizard/power/stinking-cloud', {
  name: 'Stinking Cloud',
  description: '*You call forth a thick cloud of bilious yellow vapors.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 5**\n\n**Daily** ✦ Arcane, Implement, Poison, Zone\n\n**Standard Action** · Area burst 2 within 20 squares\n\n**Target:** Each creature in burst\n\n**Attack:** Intelligence vs. Fortitude\n\n**Hit:** 1d10 + Intelligence modifier poison damage.\n\n**Effect:** The burst creates a zone of poisonous vapor that blocks line of sight until the end of your next turn. Creatures that enter the zone or start their turns there take 1d10 + Intelligence modifier poison damage. As a move action, you can move the zone up to 6 squares.\n\n**Sustain Minor:** The zone persists.'
    ),
  ],
  actions: [{ name: 'Stinking Cloud', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const Web = Abilities.defineAbility('wizard/power/web', {
  name: 'Web',
  description: '*You call into being a giant web made of thick magical strands that hang in midair, trapping those within it.*',
  universal: false,
  tags: [DailyPower, AttackPower, PowerLevel5],
  prerequisites: [Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.descriptive(
      '**Wizard Attack 5**\n\n**Daily** ✦ Arcane, Implement, Zone\n\n**Standard Action** · Area burst 2 within 20 squares\n\n**Target:** Each creature in burst\n\n**Attack:** Intelligence vs. Reflex\n\n**Hit:** The target is immobilized (save ends).\n\n**Effect:** The burst creates a zone of webs that fills the area until the end of the encounter or for 5 minutes. The zone is considered difficult terrain. Any creature that ends its move in the web is immobilized (save ends).'
    ),
  ],
  actions: [{ name: 'Web', action: ActionTypes.StandardAction }],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const AllWizardPowers = [
  GhostSound,
  Light,
  MageHand,
  Prestidigitation,
  CloudOfDaggers,
  MagicMissile,
  RayOfFrost,
  ScorchingBurst,
  Thunderwave,
  BurningHands,
  ChillStrike,
  ForceOrb,
  IcyTerrain,
  RayOfEnfeeblement,
  AcidArrow,
  FlamingSphere,
  FreezingCloud,
  Sleep,
  ExpeditiousRetreat,
  FeatherFall,
  Jump,
  Shield,
  ColorSpray,
  FireShroud,
  IcyRays,
  ShockSphere,
  BigbysIcyGrasp,
  Fireball,
  StinkingCloud,
  Web,
]
