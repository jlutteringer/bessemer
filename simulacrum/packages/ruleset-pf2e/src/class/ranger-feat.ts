import { Abilities, Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { Patches } from '@bessemer/cornerstone'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Feat, ClassFeat, RangerFeat, RogueFeat, FeatLevel1, FeatLevel2, FeatLevel4 } from '@simulacrum/ruleset-pf2e/archetype'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { SpellAttack, SpellDC, Wisdom } from '@simulacrum/ruleset-pf2e/characteristic'
import { Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import {
  AnimalFeature,
  EnlargeCompanion,
  GravityWeapon,
  HealCompanion,
  HuntersLuck,
  MagicHide,
  SoothingMist,
} from '@simulacrum/ruleset-pf2e/class/ranger-focus-spell'

export const SelectInitiateWardenSpell = CharacterOptions.selectAbilityOption('ranger/select-initiate-warden-spell', {
  name: 'Initiate Warden Spell',
  filter: { specificOptions: [GravityWeapon, HealCompanion, MagicHide] },
})

export const SelectAdvancedWardenSpell = CharacterOptions.selectAbilityOption('ranger/select-advanced-warden-spell', {
  name: 'Advanced Warden Spell',
  filter: { specificOptions: [AnimalFeature, EnlargeCompanion, HuntersLuck, SoothingMist] },
})

export const CrossbowAce = Traits.defineTrait('feat/crossbow-ace', {
  name: 'Crossbow Ace',
  description:
    '*Ranger*\n\n**Requirements** You are wielding a crossbow with reload 1 or higher\n\nYour deep understanding of the crossbow allows you to reload efficiently while moving yourself out of the line of return fire. Either Create a Diversion or Take Cover, then Interact to reload. As normal, you must meet the requirements to Take Cover; you must be prone, benefiting from cover, or near a feature that allows you to Take Cover',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  effects: [],
})

export const CrossbowAceAction = Abilities.defineAbility('feat/crossbow-ace/action', {
  name: 'Crossbow Ace',
  description:
    '*Ranger*\n\n**Requirements** You are wielding a crossbow with reload 1 or higher\n\nYour deep understanding of the crossbow allows you to reload efficiently while moving yourself out of the line of return fire. Either Create a Diversion or Take Cover, then Interact to reload. As normal, you must meet the requirements to Take Cover; you must be prone, benefiting from cover, or near a feature that allows you to Take Cover',
  prerequisites: [Traits.traitPrerequisite(CrossbowAce)],
  actions: [{ name: 'Crossbow Ace', action: ActionTypes.SingleAction }],
})

export const HuntedShot = Traits.defineTrait('feat/hunted-shot', {
  name: 'Hunted Shot',
  description:
    '*Flourish, Ranger*\n\n**Requirements** You are wielding a ranged weapon with reload 0\n\nYou take two quick shots against the one you hunt. Make two Strikes against your prey with the required weapon. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to each Strike normally',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  effects: [],
})

export const HuntedShotAction = Abilities.defineAbility('feat/hunted-shot/action', {
  name: 'Hunted Shot',
  description:
    '*Flourish, Ranger*\n\n**Requirements** You are wielding a ranged weapon with reload 0\n\nYou take two quick shots against the one you hunt. Make two Strikes against your prey with the required weapon. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to each Strike normally',
  prerequisites: [Traits.traitPrerequisite(HuntedShot)],
  actions: [{ name: 'Hunted Shot', action: ActionTypes.SingleAction }],
})

export const InitiateWarden = Traits.defineTrait('feat/initiate-warden', {
  name: 'Initiate Warden',
  description:
    '*Ranger*\n\nYou’ve trained with one of the ranger sects known as wardens, who practice a specialized type of primal magic. You gain your choice of one warden spell from the initial warden spells (or another you have access to).\n\n**Special** You can take this feat multiple times, choosing a different initial warden spell each time.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  effects: [
    Effects.gainResourcePool(FocusPoints),
    Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Wisdom.variable))),
    Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Wisdom.variable))),
    Effects.gainCharacterOption(SelectInitiateWardenSpell),
  ],
})

export const InitiateWardenAdditional = Traits.defineTrait('feat/initiate-warden/additional', {
  name: 'Initiate Warden (Additional Spell)',
  description:
    '*Ranger*\n\nYou’ve trained with one of the ranger sects known as wardens, who practice a specialized type of primal magic. You gain your choice of one warden spell from the initial warden spells (or another you have access to).\n\n**Special** You can take this feat multiple times, choosing a different initial warden spell each time.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(InitiateWarden)],
  repeatable: true,
  effects: [
    Effects.gainCharacterOption(SelectInitiateWardenSpell),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const MonsterHunter = Traits.defineTrait('feat/monster-hunter', {
  name: 'Monster Hunter',
  description:
    '*Ranger*\n\nYou quickly assess your prey and apply what you know. As part of the action used to Hunt your Prey, you can attempt a check to Recall Knowledge about your prey. When you critically succeed at identifying your hunted prey with Recall Knowledge, you note a weakness in the creature’s defenses in addition to any other benefits. You gain a +1 circumstance bonus to your next attack roll against that prey, and any ally you tell gains the same benefit. You can give bonuses from Monster Hunter only once per day against a particular creature.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  effects: [],
})

export const TwinTakedown = Traits.defineTrait('feat/twin-takedown', {
  name: 'Twin Takedown',
  description:
    '*Flourish, Ranger*\n\n**Requirements** You are wielding two melee weapons, each in a different hand\n\nYou swiftly attack your hunted prey with each of your weapons, potentially combining their damage into a single devastating attack. Make two Strikes against your hunted prey, one with each of the required weapons. If both hit the same hunted prey, combine their damage for the purpose of its resistances and weaknesses. Apply your multiple attack penalty to each Strike normally.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  effects: [],
})

export const TwinTakedownAction = Abilities.defineAbility('feat/twin-takedown/action', {
  name: 'Twin Takedown',
  description:
    '*Flourish, Ranger*\n\n**Requirements** You are wielding two melee weapons, each in a different hand\n\nYou swiftly attack your hunted prey with each of your weapons, potentially combining their damage into a single devastating attack. Make two Strikes against your hunted prey, one with each of the required weapons. If both hit the same hunted prey, combine their damage for the purpose of its resistances and weaknesses. Apply your multiple attack penalty to each Strike normally.',
  prerequisites: [Traits.traitPrerequisite(TwinTakedown)],
  actions: [{ name: 'Twin Takedown', action: ActionTypes.SingleAction }],
})

export const AnimalEmpathy = Traits.defineTrait('feat/animal-empathy', {
  name: 'Animal Empathy',
  description:
    '*Ranger*\n\nYou have a connection to the creatures of the natural world that allows you to communicate with them on a rudimentary level. You can use Diplomacy to Make an Impression on animals and to make very simple Requests of them. In most cases, wild animals will give you time to make your case.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel2],
  effects: [],
})

export const FavoredTerrain = Traits.defineTrait('feat/favored-terrain', {
  name: 'Favored Terrain',
  description:
    '*Ranger*\n\nYou have studied a specific terrain to overcome its challenges. Choose aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground as your favored terrain. When in that terrain, you can ignore the effects of non-magical difficult terrain. If you have the unimpeded journey class feature, you gain a second benefit while in your favored terrain, depending on your choice:\n\n- **Aquatic** You gain a swim Speed equal to your Speed. If you already had a swim Speed, you instead gain a +10-foot status bonus to your swim Speed.\n\n- **Arctic** You need to eat and drink only one-tenth as much as usual, you aren’t affected by severe or extreme cold, and you can walk across ice and snow at full Speed without needing to Balance.\n\n- **Desert** You need to eat and drink only one-tenth as much as usual, you aren’t affected by severe or extreme heat, and you can walk along sand at full Speed without needing to Balance.\n\n- **Forest, Mountain, or Underground** You gain a climb Speed equal to your Speed. If you already had a climb Speed, you instead gain a +10-foot status bonus to your climb Speed.\n\n- **Plains** You gain a +10-foot status bonus to your land Speed.\n\n- **Sky** You gain a +10-foot status bonus to your fly Speed, if you have one.\n\n- **Swamp** You can move across bogs at full Speed, even if they are deep enough to be greater difficult terrain or to normally require you to Swim.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel2],
  effects: [],
})

export const HuntersAim = Traits.defineTrait('feat/hunters-aim', {
  name: "Hunter's Aim",
  description:
    '*Concentrate, Ranger*\n\nWhen you focus on aiming, your attack becomes particularly accurate. Make a ranged weapon Strike against your hunted prey. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore your prey’s concealed condition and any lesser cover.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel2],
  effects: [],
})

export const HuntersAimAction = Abilities.defineAbility('feat/hunters-aim/action', {
  name: "Hunter's Aim",
  description:
    '*Concentrate, Ranger*\n\nWhen you focus on aiming, your attack becomes particularly accurate. Make a ranged weapon Strike against your hunted prey. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore your prey’s concealed condition and any lesser cover.',
  prerequisites: [Traits.traitPrerequisite(HuntersAim)],
  actions: [{ name: "Hunter's Aim", action: ActionTypes.TwoActions }],
})

export const MonsterWarden = Traits.defineTrait('feat/monster-warden', {
  name: 'Monster Warden',
  description:
    '*Ranger*\n\n**Prerequisites** Monster Hunter\n\nYou understand how to defend against your prey. When you grant bonuses from Monster Hunter, each creature who benefits also gains a +2 circumstance bonus either to their AC the next time the creature attacks them or to their next saving throw against an effect from that particular creature (whichever comes first.)',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(MonsterHunter)],
  effects: [],
})

export const QuickDraw = Traits.defineTrait('feat/quick-draw', {
  name: 'Quick Draw',
  description:
    '*Gunslinger, Ranger, Rogue*\n\nYou draw your weapon and attack with the same motion. You Interact to draw a weapon, then Strike with that weapon.',
  archetypes: [Feat, ClassFeat, RangerFeat, RogueFeat, FeatLevel2],
  effects: [],
})

export const QuickDrawAction = Abilities.defineAbility('feat/quick-draw/action', {
  name: 'Quick Draw',
  description:
    '*Gunslinger, Ranger, Rogue*\n\nYou draw your weapon and attack with the same motion. You Interact to draw a weapon, then Strike with that weapon.',
  prerequisites: [Traits.traitPrerequisite(QuickDraw)],
  actions: [{ name: 'Quick Draw', action: ActionTypes.SingleAction }],
})

export const AdvancedWarden = Traits.defineTrait('feat/advanced-warden', {
  name: 'Advanced Warden',
  description:
    '*Ranger*\n\n**Prerequisites** Initiate Warden\n\nYou unlock more powerful primal spells. You gain your choice of one warden spell from the advanced warden spells (or another you have access to).\n\n**Special** You can take this feat multiple times, choosing a different advanced warden spell each time.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(InitiateWarden)],
  repeatable: true,
  effects: [
    Effects.gainCharacterOption(SelectAdvancedWardenSpell),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const CompanionsCry = Traits.defineTrait('feat/companions-cry', {
  name: "Companion's Cry",
  description:
    '*Ranger*\n\n**Prerequisites** an animal companion\n\nYou can urge your companion to do its utmost. You can spend 2 actions to Command an Animal instead of 1 when commanding your animal companion. If you do, your animal companion uses an additional action.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const DisruptPrey = Traits.defineTrait('feat/disrupt-prey', {
  name: 'Disrupt Prey',
  description:
    '*Ranger*\n\n**Trigger** Your hunted prey is within your reach, and it uses a manipulate action, uses a move action, or leaves a square during a move action it’s using\n\nMake a melee Strike against your prey. If the attack is a critical hit, you disrupt the triggering action.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const DisruptPreyAction = Abilities.defineAbility('feat/disrupt-prey/action', {
  name: 'Disrupt Prey',
  description:
    '*Ranger*\n\n**Trigger** Your hunted prey is within your reach, and it uses a manipulate action, uses a move action, or leaves a square during a move action it’s using\n\nMake a melee Strike against your prey. If the attack is a critical hit, you disrupt the triggering action.',
  prerequisites: [Traits.traitPrerequisite(DisruptPrey)],
  actions: [{ name: 'Disrupt Prey', action: ActionTypes.Reaction }],
})

export const FarShot = Traits.defineTrait('feat/far-shot', {
  name: 'Far Shot',
  description:
    '*Ranger*\n\nYour experience in the field has taught you how to focus your aim at a distance, increasing your accuracy. Double your weapons’ range increments.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const FavoredPrey = Traits.defineTrait('feat/favored-prey', {
  name: 'Favored Prey',
  description:
    '*Ranger*\n\nYou have studied a specific type of wild creature and can hunt it more easily. When you gain this feat, choose animals, beasts, dragons, or both fungi and plants as your favored prey. When you roll initiative and can see an enemy that belongs to the chosen category, you can Hunt Prey as a free action, designating that enemy.\n\nYou can use this free action even if you haven’t identified the creature yet with Recall Knowledge. The benefit doesn’t apply against favored enemies disguised as other creatures, and the GM determines whether it applies against a creature disguised as a favored prey',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const RunningReload = Traits.defineTrait('feat/running-reload', {
  name: 'Running Reload',
  description: '*Gunslinger, Ranger*\n\nYou can reload your weapon on the move. You Stride, Step, or Sneak, then Interact to reload.',
  archetypes: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const RunningReloadAction = Abilities.defineAbility('feat/running-reload/action', {
  name: 'Running Reload',
  description: '*Gunslinger, Ranger*\n\nYou can reload your weapon on the move. You Stride, Step, or Sneak, then Interact to reload.',
  prerequisites: [Traits.traitPrerequisite(RunningReload)],
  actions: [{ name: 'Running Reload', action: ActionTypes.SingleAction }],
})

export const ScoutsWarning = Traits.defineTrait('feat/scouts-warning', {
  name: "Scout's Warning",
  description:
    "*Ranger, Rogue*\n\n**Trigger** You are about to roll a Perception or Survival check for initiative\n\nYou visually or audibly warn your allies of danger, granting them each a +1 circumstance bonus to their initiative rolls, or a +2 circumstance bonus if you're using the Scout exploration activity. Depending on whether you use gestures or call out, this action gains either the visual or the auditory trait, respectively.",
  archetypes: [Feat, ClassFeat, RangerFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const ScoutsWarningAction = Abilities.defineAbility('feat/scouts-warning/action', {
  name: "Scout's Warning",
  description:
    "*Ranger, Rogue*\n\n**Trigger** You are about to roll a Perception or Survival check for initiative\n\nYou visually or audibly warn your allies of danger, granting them each a +1 circumstance bonus to their initiative rolls, or a +2 circumstance bonus if you're using the Scout exploration activity. Depending on whether you use gestures or call out, this action gains either the visual or the auditory trait, respectively.",
  prerequisites: [Traits.traitPrerequisite(ScoutsWarning)],
  actions: [{ name: "Scout's Warning", action: ActionTypes.FreeAction }],
})

export const AllRangerFeatEntities = [
  SelectInitiateWardenSpell,
  SelectAdvancedWardenSpell,
  CrossbowAce,
  CrossbowAceAction,
  HuntedShot,
  HuntedShotAction,
  InitiateWarden,
  InitiateWardenAdditional,
  MonsterHunter,
  TwinTakedown,
  TwinTakedownAction,
  AnimalEmpathy,
  FavoredTerrain,
  HuntersAim,
  HuntersAimAction,
  MonsterWarden,
  QuickDraw,
  QuickDrawAction,
  AdvancedWarden,
  CompanionsCry,
  DisruptPrey,
  DisruptPreyAction,
  FarShot,
  FavoredPrey,
  RunningReload,
  RunningReloadAction,
  ScoutsWarning,
  ScoutsWarningAction,
]
