import { Abilities, Attributes, CharacterOptions, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { Patches } from '@bessemer/cornerstone'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import {
  ClassFeat,
  Feat,
  FeatLevel1,
  FeatLevel10,
  FeatLevel2,
  FeatLevel4,
  FeatLevel6,
  FeatLevel8,
  RangerFeat,
  RogueFeat,
} from '@simulacrum/ruleset-pf2e/tag'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { SpellAttack, SpellDC, Wisdom } from '@simulacrum/ruleset-pf2e/characteristic'
import { Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import {
  AnimalFeature,
  EnlargeCompanion,
  EphemeralTracking,
  GravityWeapon,
  HealCompanion,
  HuntersLuck,
  HuntersVision,
  MagicHide,
  RangersBramble,
  SoothingMist,
  TerrainTransposition,
} from '@simulacrum/ruleset-pf2e/class/ranger-focus-spell'
import { SelectIncredibleAnimalCompanion } from '@simulacrum/ruleset-pf2e/companion/animal-companion'
import { AnimalCompanion } from '@simulacrum/ruleset-pf2e/class/druid-feat'
import { ExpertSurvival, MasterNature, MasterStealth, MasterSurvival } from '@simulacrum/ruleset-pf2e/skill'
import { ExperiencedTracker } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const SelectInitiateWardenSpell = CharacterOptions.selectAbilityOption('ranger/select-initiate-warden-spell', {
  name: 'Initiate Warden Spell',
  filter: { specificOptions: [GravityWeapon, HealCompanion, MagicHide] },
})

export const SelectAdvancedWardenSpell = CharacterOptions.selectAbilityOption('ranger/select-advanced-warden-spell', {
  name: 'Advanced Warden Spell',
  filter: { specificOptions: [AnimalFeature, EnlargeCompanion, HuntersLuck, SoothingMist] },
})

export const SelectMasterfulWardenSpell = CharacterOptions.selectAbilityOption('ranger/select-masterful-warden-spell', {
  name: 'Master Warden Spell',
  filter: { specificOptions: [EphemeralTracking, RangersBramble] },
})

export const SelectPeerlessWardenSpell = CharacterOptions.selectAbilityOption('ranger/select-peerless-warden-spell', {
  name: 'Peerless Warden Spell',
  filter: { specificOptions: [HuntersVision, TerrainTransposition] },
})

export const CrossbowAce = Traits.defineTrait('feat/crossbow-ace', {
  name: 'Crossbow Ace',
  description:
    '*Ranger*\n\n**Requirements** You are wielding a crossbow with reload 1 or higher\n\nYour deep understanding of the crossbow allows you to reload efficiently while moving yourself out of the line of return fire. Either [Create a Diversion](content:skills/create-a-diversion) or [Take Cover](content:playing-the-game/take-cover), then [Interact](content:playing-the-game/interact) to reload. As normal, you must meet the requirements to Take Cover; you must be [prone](content:conditions/prone), benefiting from cover, or near a feature that allows you to Take Cover',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  effects: [],
})

export const CrossbowAceAction = Abilities.defineAbility('feat/crossbow-ace/action', {
  name: 'Crossbow Ace',
  description: '*Ranger*',
  prerequisites: [Traits.traitPrerequisite(CrossbowAce)],
  actions: [
    {
      name: 'Crossbow Ace',
      description:
        '**Requirements** You are wielding a crossbow with reload 1 or higher\n\nYour deep understanding of the crossbow allows you to reload efficiently while moving yourself out of the line of return fire. Either [Create a Diversion](content:skills/create-a-diversion) or [Take Cover](content:playing-the-game/take-cover), then [Interact](content:playing-the-game/interact) to reload. As normal, you must meet the requirements to Take Cover; you must be [prone](content:conditions/prone), benefiting from cover, or near a feature that allows you to Take Cover',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const HuntedShot = Traits.defineTrait('feat/hunted-shot', {
  name: 'Hunted Shot',
  description:
    '*Flourish, Ranger*\n\n**Requirements** You are wielding a ranged weapon with reload 0\n\nYou take two quick shots against the one you hunt. Make two Strikes against your prey with the required weapon. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to each [Strike](content:playing-the-game/strike) normally',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  effects: [],
})

export const HuntedShotAction = Abilities.defineAbility('feat/hunted-shot/action', {
  name: 'Hunted Shot',
  description: '*Flourish, Ranger*',
  prerequisites: [Traits.traitPrerequisite(HuntedShot)],
  actions: [
    {
      name: 'Hunted Shot',
      description:
        '**Requirements** You are wielding a ranged weapon with reload 0\n\nYou take two quick shots against the one you hunt. Make two Strikes against your prey with the required weapon. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to each [Strike](content:playing-the-game/strike) normally',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const InitiateWarden = Traits.defineTrait('feat/initiate-warden', {
  name: 'Initiate Warden',
  description:
    '*Ranger*\n\nYou’ve trained with one of the ranger sects known as wardens, who practice a specialized type of primal magic. You gain your choice of one warden spell from the initial warden spells (or another you have access to).\n\n**Special** You can take this feat multiple times, choosing a different initial warden spell each time.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  effects: [
    CharacterEffects.gainResourcePool(FocusPoints),
    CharacterEffects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Wisdom.variable))),
    CharacterEffects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Wisdom.variable))),
    CharacterEffects.gainCharacterOption(SelectInitiateWardenSpell),
  ],
})

export const InitiateWardenAdditional = Traits.defineTrait('feat/initiate-warden/additional', {
  name: 'Initiate Warden (Additional Spell)',
  description:
    '*Ranger*\n\nYou’ve trained with one of the ranger sects known as wardens, who practice a specialized type of primal magic. You gain your choice of one warden spell from the initial warden spells (or another you have access to).\n\n**Special** You can take this feat multiple times, choosing a different initial warden spell each time.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(InitiateWarden)],
  repeatable: true,
  effects: [
    CharacterEffects.gainCharacterOption(SelectInitiateWardenSpell),
    CharacterEffects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const MonsterHunter = Traits.defineTrait('feat/monster-hunter', {
  name: 'Monster Hunter',
  description:
    '*Ranger*\n\nYou quickly assess your prey and apply what you know. As part of the action used to Hunt your Prey, you can attempt a check to [Recall Knowledge](content:skills/recall-knowledge) about your prey. When you critically succeed at identifying your hunted prey with Recall Knowledge, you note a weakness in the creature’s defenses in addition to any other benefits. You gain a +1 circumstance bonus to your next attack roll against that prey, and any ally you tell gains the same benefit. You can give bonuses from Monster Hunter only once per day against a particular creature.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  effects: [],
})

export const TwinTakedown = Traits.defineTrait('feat/twin-takedown', {
  name: 'Twin Takedown',
  description:
    '*Flourish, Ranger*\n\n**Requirements** You are wielding two melee weapons, each in a different hand\n\nYou swiftly attack your hunted prey with each of your weapons, potentially combining their damage into a single devastating attack. Make two Strikes against your hunted prey, one with each of the required weapons. If both hit the same hunted prey, combine their damage for the purpose of its resistances and weaknesses. Apply your multiple attack penalty to each [Strike](content:playing-the-game/strike) normally.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel1],
  effects: [],
})

export const TwinTakedownAction = Abilities.defineAbility('feat/twin-takedown/action', {
  name: 'Twin Takedown',
  description: '*Flourish, Ranger*',
  prerequisites: [Traits.traitPrerequisite(TwinTakedown)],
  actions: [
    {
      name: 'Twin Takedown',
      description:
        '**Requirements** You are wielding two melee weapons, each in a different hand\n\nYou swiftly attack your hunted prey with each of your weapons, potentially combining their damage into a single devastating attack. Make two Strikes against your hunted prey, one with each of the required weapons. If both hit the same hunted prey, combine their damage for the purpose of its resistances and weaknesses. Apply your multiple attack penalty to each [Strike](content:playing-the-game/strike) normally.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const AnimalEmpathy = Traits.defineTrait('feat/animal-empathy', {
  name: 'Animal Empathy',
  description:
    '*Ranger*\n\nYou have a connection to the creatures of the natural world that allows you to communicate with them on a rudimentary level. You can use [Diplomacy](characteristic:skill/diplomacy) to [Make an Impression](content:skills/make-an-impression) on animals and to make very simple Requests of them. In most cases, wild animals will give you time to make your case.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel2],
  effects: [],
})

export const FavoredTerrain = Traits.defineTrait('feat/favored-terrain', {
  name: 'Favored Terrain',
  description:
    '*Ranger*\n\nYou have studied a specific terrain to overcome its challenges. Choose aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground as your favored terrain. When in that terrain, you can ignore the effects of non-magical difficult terrain. If you have the unimpeded journey class feature, you gain a second benefit while in your favored terrain, depending on your choice:\n\n- **Aquatic** You gain a swim [Speed](characteristic:speed) equal to your Speed. If you already had a swim Speed, you instead gain a +10-foot status bonus to your swim Speed.\n\n- **Arctic** You need to eat and drink only one-tenth as much as usual, you aren’t affected by severe or extreme cold, and you can walk across ice and snow at full Speed without needing to Balance.\n\n- **Desert** You need to eat and drink only one-tenth as much as usual, you aren’t affected by severe or extreme heat, and you can walk along sand at full Speed without needing to Balance.\n\n- **Forest, Mountain, or Underground** You gain a climb Speed equal to your Speed. If you already had a climb Speed, you instead gain a +10-foot status bonus to your climb Speed.\n\n- **Plains** You gain a +10-foot status bonus to your land Speed.\n\n- **Sky** You gain a +10-foot status bonus to your fly Speed, if you have one.\n\n- **Swamp** You can move across bogs at full Speed, even if they are deep enough to be greater difficult terrain or to normally require you to [Swim](content:skills/swim).',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel2],
  effects: [],
})

export const HuntersAim = Traits.defineTrait('feat/hunters-aim', {
  name: "Hunter's Aim",
  description:
    '*Concentrate, Ranger*\n\nWhen you focus on aiming, your attack becomes particularly accurate. Make a ranged weapon [Strike](content:playing-the-game/strike) against your hunted prey. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore your prey’s concealed condition and any lesser cover.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel2],
  effects: [],
})

export const HuntersAimAction = Abilities.defineAbility('feat/hunters-aim/action', {
  name: "Hunter's Aim",
  description: '*Concentrate, Ranger*',
  prerequisites: [Traits.traitPrerequisite(HuntersAim)],
  actions: [
    {
      name: "Hunter's Aim",
      description:
        'When you focus on aiming, your attack becomes particularly accurate. Make a ranged weapon [Strike](content:playing-the-game/strike) against your hunted prey. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore your prey’s concealed condition and any lesser cover.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const MonsterWarden = Traits.defineTrait('feat/monster-warden', {
  name: 'Monster Warden',
  description:
    '*Ranger*\n\n**Prerequisites** [Monster Hunter](trait:feat/monster-hunter)\n\nYou understand how to defend against your prey. When you grant bonuses from Monster Hunter, each creature who benefits also gains a +2 circumstance bonus either to their [AC](characteristic:armor-class) the next time the creature attacks them or to their next saving throw against an effect from that particular creature (whichever comes first.)',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(MonsterHunter)],
  effects: [],
})

export const QuickDraw = Traits.defineTrait('feat/quick-draw', {
  name: 'Quick Draw',
  description:
    '*Gunslinger, Ranger, Rogue*\n\nYou draw your weapon and attack with the same motion. You [Interact](content:playing-the-game/interact) to draw a weapon, then [Strike](content:playing-the-game/strike) with that weapon.',
  tags: [Feat, ClassFeat, RangerFeat, RogueFeat, FeatLevel2],
  effects: [],
})

export const QuickDrawAction = Abilities.defineAbility('feat/quick-draw/action', {
  name: 'Quick Draw',
  description: '*Gunslinger, Ranger, Rogue*',
  prerequisites: [Traits.traitPrerequisite(QuickDraw)],
  actions: [
    {
      name: 'Quick Draw',
      description:
        'You draw your weapon and attack with the same motion. You [Interact](content:playing-the-game/interact) to draw a weapon, then [Strike](content:playing-the-game/strike) with that weapon.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const AdvancedWarden = Traits.defineTrait('feat/advanced-warden', {
  name: 'Advanced Warden',
  description:
    '*Ranger*\n\n**Prerequisites** [Initiate Warden](trait:feat/initiate-warden)\n\nYou unlock more powerful primal spells. You gain your choice of one warden spell from the advanced warden spells (or another you have access to).\n\n**Special** You can take this feat multiple times, choosing a different advanced warden spell each time.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(InitiateWarden)],
  repeatable: true,
  effects: [
    CharacterEffects.gainCharacterOption(SelectAdvancedWardenSpell),
    CharacterEffects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const CompanionsCry = Traits.defineTrait('feat/companions-cry', {
  name: "Companion's Cry",
  description:
    '*Ranger*\n\n**Prerequisites** an animal companion\n\nYou can urge your companion to do its utmost. You can spend 2 actions to [Command an Animal](content:skills/command-an-animal) instead of 1 when commanding your animal companion. If you do, your animal companion uses an additional action.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const DisruptPrey = Traits.defineTrait('feat/disrupt-prey', {
  name: 'Disrupt Prey',
  description:
    '*Ranger*\n\n**Trigger** Your hunted prey is within your reach, and it uses a manipulate action, uses a move action, or leaves a square during a move action it’s using\n\nMake a melee [Strike](content:playing-the-game/strike) against your prey. If the attack is a critical hit, you [disrupt](content:playing-the-game/disrupting-actions) the triggering action.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const DisruptPreyAction = Abilities.defineAbility('feat/disrupt-prey/action', {
  name: 'Disrupt Prey',
  description: '*Ranger*',
  prerequisites: [Traits.traitPrerequisite(DisruptPrey)],
  actions: [
    {
      name: 'Disrupt Prey',
      description:
        '**Trigger** Your hunted prey is within your reach, and it uses a manipulate action, uses a move action, or leaves a square during a move action it’s using\n\nMake a melee [Strike](content:playing-the-game/strike) against your prey. If the attack is a critical hit, you [disrupt](content:playing-the-game/disrupting-actions) the triggering action.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const FarShot = Traits.defineTrait('feat/far-shot', {
  name: 'Far Shot',
  description:
    '*Ranger*\n\nYour experience in the field has taught you how to focus your aim at a distance, increasing your accuracy. Double your weapons’ range increments.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const FavoredPrey = Traits.defineTrait('feat/favored-prey', {
  name: 'Favored Prey',
  description:
    '*Ranger*\n\nYou have studied a specific type of wild creature and can hunt it more easily. When you gain this feat, choose animals, beasts, dragons, or both fungi and plants as your favored prey. When you roll initiative and can see an enemy that belongs to the chosen category, you can Hunt Prey as a free action, designating that enemy.\n\nYou can use this free action even if you haven’t identified the creature yet with [Recall Knowledge](content:skills/recall-knowledge). The benefit doesn’t apply against favored enemies disguised as other creatures, and the GM determines whether it applies against a creature disguised as a favored prey',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const RunningReload = Traits.defineTrait('feat/running-reload', {
  name: 'Running Reload',
  description:
    '*Gunslinger, Ranger*\n\nYou can reload your weapon on the move. You [Stride](content:playing-the-game/stride), [Step](content:playing-the-game/step), or [Sneak](content:skills/sneak), then [Interact](content:playing-the-game/interact) to reload.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const RunningReloadAction = Abilities.defineAbility('feat/running-reload/action', {
  name: 'Running Reload',
  description: '*Gunslinger, Ranger*',
  prerequisites: [Traits.traitPrerequisite(RunningReload)],
  actions: [
    {
      name: 'Running Reload',
      description:
        'You can reload your weapon on the move. You [Stride](content:playing-the-game/stride), [Step](content:playing-the-game/step), or [Sneak](content:skills/sneak), then [Interact](content:playing-the-game/interact) to reload.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const ScoutsWarning = Traits.defineTrait('feat/scouts-warning', {
  name: "Scout's Warning",
  description:
    "*Ranger, Rogue*\n\n**Trigger** You are about to roll a [Perception](characteristic:perception) or [Survival](characteristic:skill/survival) check for initiative\n\nYou visually or audibly warn your allies of danger, granting them each a +1 circumstance bonus to their initiative rolls, or a +2 circumstance bonus if you're using the Scout exploration activity. Depending on whether you use gestures or call out, this action gains either the [visual](content:traits/visual) or the [auditory](content:traits/auditory) trait, respectively.",
  tags: [Feat, ClassFeat, RangerFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const ScoutsWarningAction = Abilities.defineAbility('feat/scouts-warning/action', {
  name: "Scout's Warning",
  description: '*Ranger, Rogue*',
  prerequisites: [Traits.traitPrerequisite(ScoutsWarning)],
  actions: [
    {
      name: "Scout's Warning",
      description:
        "**Trigger** You are about to roll a [Perception](characteristic:perception) or [Survival](characteristic:skill/survival) check for initiative\n\nYou visually or audibly warn your allies of danger, granting them each a +1 circumstance bonus to their initiative rolls, or a +2 circumstance bonus if you're using the Scout exploration activity. Depending on whether you use gestures or call out, this action gains either the [visual](content:traits/visual) or the [auditory](content:traits/auditory) trait, respectively.",
      action: ActionTypes.FreeAction,
    },
  ],
})

export const AdditionalRecollection = Traits.defineTrait('feat/additional-recollection', {
  name: 'Additional Recollection',
  description:
    '*Ranger*\n\n**Trigger** You succeed or critically succeed at a check to [Recall Knowledge](content:skills/recall-knowledge) on your hunted prey\n\nYou scan the battlefield quickly, remembering critical details about multiple opponents you face. You immediately attempt a check to Recall Knowledge about a different creature you can perceive.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel6],
  effects: [],
})

export const AdditionalRecollectionAction = Abilities.defineAbility('feat/additional-recollection/action', {
  name: 'Additional Recollection',
  description: '*Ranger*',
  prerequisites: [Traits.traitPrerequisite(AdditionalRecollection)],
  actions: [
    {
      name: 'Additional Recollection',
      description:
        '**Trigger** You succeed or critically succeed at a check to [Recall Knowledge](content:skills/recall-knowledge) on your hunted prey\n\nYou scan the battlefield quickly, remembering critical details about multiple opponents you face. You immediately attempt a check to Recall Knowledge about a different creature you can perceive.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const MasterfulWarden = Traits.defineTrait('feat/masterful-warden', {
  name: 'Masterful Warden',
  description:
    '*Ranger*\n\n**Prerequisites** [Initiate Warden](trait:feat/initiate-warden)\n\nYour mastery of warden magic increases. You gain your choice of one warden spell from the master warden spells(or another you have access to).\n\n**Special** You can take this feat multiple times, choosing a different master warden spell each time.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(InitiateWarden)],
  repeatable: true,
  effects: [
    CharacterEffects.gainCharacterOption(SelectMasterfulWardenSpell),
    CharacterEffects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const MatureAnimalCompanionRanger = Traits.defineTrait('feat/mature-animal-companion-ranger', {
  name: 'Mature Animal Companion (Ranger)',
  description:
    "*Ranger*\n\n**Prerequisites** [Animal Companion](trait:feat/animal-companion)\n\nYour animal companion becomes a mature animal companion and gains [additional capabilities](content:classes/mature-animal-companions).\n\nYour animal companion has greater independence. During an encounter, even if you don't use the [Command an Animal](content:skills/command-an-animal) action, your animal companion can still use 1 action that round on your turn to [Strike](content:playing-the-game/strike) or [Stride](content:playing-the-game/stride) (or Burrow, [Climb](content:skills/climb), Fly, or [Swim](content:skills/swim) if it has that [Speed](characteristic:speed)). It can do this at any point during your turn, as long as you aren’t currently taking an action. If it does, that’s all the actions it gets that round—you can’t Command it later.",
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(AnimalCompanion)],
  effects: [],
})

export const SkirmishStrike = Traits.defineTrait('feat/skirmish-strike', {
  name: 'Skirmish Strike',
  description:
    '*Flourish, Ranger, Rogue*\n\nYour feet and weapon move in tandem. Either [Step](content:playing-the-game/step) and then [Strike](content:playing-the-game/strike), or Strike and then Step.',
  tags: [Feat, ClassFeat, RangerFeat, RogueFeat, FeatLevel6],
  effects: [],
})

export const SkirmishStrikeAction = Abilities.defineAbility('feat/skirmish-strike/action', {
  name: 'Skirmish Strike',
  description: '*Flourish, Ranger, Rogue*',
  prerequisites: [Traits.traitPrerequisite(SkirmishStrike)],
  actions: [
    {
      name: 'Skirmish Strike',
      description:
        'Your feet and weapon move in tandem. Either [Step](content:playing-the-game/step) and then [Strike](content:playing-the-game/strike), or Strike and then Step.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const SnapShot = Traits.defineTrait('feat/snap-shot', {
  name: 'Snap Shot',
  description:
    '*Ranger*\n\nYou can react with ranged weapons when a creature is in close quarters. You can use a reaction that normally allows you to make a melee weapon [Strike](content:playing-the-game/strike) to instead make a ranged weapon Strike. You must be Striking an adjacent target. If necessary for the reaction’s trigger, you treat your ranged weapon as if it had a reach of 5 feet. If the reaction has other requirements, such as wielding a specific kind of weapon, Snap Shot doesn’t allow you to ignore them; it allows you only to replace a melee weapon Strike with a ranged weapon Strike.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel6],
  effects: [],
})

export const SwiftTracker = Traits.defineTrait('feat/swift-tracker', {
  name: 'Swift Tracker',
  description:
    '*Ranger*\n\n**Prerequisites** Expert in [Survival](characteristic:skill/survival); [Experienced Tracker](trait:feat/experienced-tracker)\n\nYour keen eyes catch signs of passage even when you’re moving. You can move at your full [Speed](characteristic:speed) while you [Track](content:skills/track). If you have master proficiency in Survival, you don’t need to attempt a new Survival check every hour while Tracking. If you have legendary proficiency in Survival, you can use another exploration activity while Tracking.\n\nIf you roll Survival for initiative while tracking your hunted prey, when you start your first turn of the encounter, you can [Stride](content:playing-the-game/stride) toward your hunted prey as a free action.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(ExpertSurvival), Traits.traitPrerequisite(ExperiencedTracker)],
  effects: [],
})

export const DeadlyAim = Traits.defineTrait('feat/deadly-aim', {
  name: 'Deadly Aim',
  description:
    '*Flourish, Ranger*\n\n**Prerequisites** weapon specialization\n\nYou aim for your prey’s weak spots, making your shot more challenging but dealing more damage if you hit. Make a ranged [Strike](content:playing-the-game/strike) against your hunted prey at a –2 penalty. You gain a +4 circumstance bonus to damage on that Strike. This bonus increases to +6 at 11th level and +8 at 15th level.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel8],
  effects: [],
})

export const DeadlyAimAction = Abilities.defineAbility('feat/deadly-aim/action', {
  name: 'Deadly Aim',
  description: '*Flourish, Ranger*',
  prerequisites: [Traits.traitPrerequisite(DeadlyAim)],
  actions: [
    {
      name: 'Deadly Aim',
      description:
        '**Prerequisites** weapon specialization\n\nYou aim for your prey’s weak spots, making your shot more challenging but dealing more damage if you hit. Make a ranged [Strike](content:playing-the-game/strike) against your hunted prey at a –2 penalty. You gain a +4 circumstance bonus to damage on that Strike. This bonus increases to +6 at 11th level and +8 at 15th level.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const HazardFinder = Traits.defineTrait('feat/hazard-finder', {
  name: 'Hazard Finder',
  description:
    '*Ranger*\n\nYou have an intuitive ability to sense hazards. You gain a +1 circumstance bonus to [Perception](characteristic:perception) checks to find traps and hazards, to [AC](characteristic:armor-class) against their attacks, and to saves against their effects. You can find hazards that would normally require you to Search even if you aren’t Searching.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel8],
  effects: [],
})

export const TerrainMaster = Traits.defineTrait('feat/terrain-master', {
  name: 'Terrain Master',
  description:
    '*Ranger*\n\n**Prerequisites** Master in [Survival](characteristic:skill/survival); [Favored Terrain](trait:feat/favored-terrain)\n\nYou are able to adapt to your surroundings in any natural terrain. You can spend 1 hour practicing in your current terrain in order to make it your favored terrain, replacing your current favored terrain temporarily. If you spend a full day out of the new favored terrain, your favored terrain reverts back to your original choice when you took the Favored Terrain feat.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(MasterSurvival), Traits.traitPrerequisite(FavoredTerrain)],
  effects: [],
})

export const WardensBoon = Traits.defineTrait('feat/wardens-boon', {
  name: "Warden's Boon",
  description:
    '*Ranger*\n\nYou point out vulnerabilities present in your hunted prey, granting the benefits listed in Hunt Prey and your hunter’s edge to an ally until the end of their next turn. Depending on whether you call out or use gestures, this action gains either the auditory or visual trait.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel8],
  effects: [],
})

export const WardensBoonAction = Abilities.defineAbility('feat/wardens-boon/action', {
  name: "Warden's Boon",
  description: '*Ranger*',
  prerequisites: [Traits.traitPrerequisite(WardensBoon)],
  actions: [
    {
      name: "Warden's Boon",
      description:
        'You point out vulnerabilities present in your hunted prey, granting the benefits listed in Hunt Prey and your hunter’s edge to an ally until the end of their next turn. Depending on whether you call out or use gestures, this action gains either the auditory or visual trait.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const Camouflage = Traits.defineTrait('feat/camouflage', {
  name: 'Camouflage',
  description:
    '*Ranger*\n\n**Prerequisites** Master in [Stealth](characteristic:skill/stealth)\n\nYou alter your appearance to blend in to the wilderness. In natural terrain, you can Hide and [Sneak](content:skills/sneak) even without cover or being concealed.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(MasterStealth)],
  effects: [],
})

export const IncredibleCompanionRanger = Traits.defineTrait('feat/incredible-companion-ranger', {
  name: 'Incredible Companion (Ranger)',
  description:
    '*Ranger*\n\n**Prerequisites** Mature Animal Companion (Ranger)\n\nYour animal companion continues to grow and develop. It becomes a nimble or savage animal companion (your choice), gaining additional capabilities determined by the type of companion.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(MatureAnimalCompanionRanger)],
  effects: [CharacterEffects.gainCharacterOption(SelectIncredibleAnimalCompanion)],
})

export const MasterMonsterHunter = Traits.defineTrait('feat/master-monster-hunter', {
  name: 'Master Monster Hunter',
  description:
    '*Ranger*\n\n**Prerequisites** Master in [Nature](characteristic:skill/nature); [Monster Hunter](trait:feat/monster-hunter)\n\nYou have a nearly encyclopedic knowledge of all creatures of the world. You can use Nature to [Recall Knowledge](content:skills/recall-knowledge) to identify any creature. In addition, you gain the benefits of Monster Hunter (and Monster Warden, if you have it) on a success as well as a critical success.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(MasterNature), Traits.traitPrerequisite(MonsterHunter)],
  effects: [],
})

export const PeerlessWarden = Traits.defineTrait('feat/peerless-warden', {
  name: 'Peerless Warden',
  description:
    '*Ranger*\n\n**Prerequisites** [Initiate Warden](trait:feat/initiate-warden)\n\nYour mastery of primal magic has given you access to the greatest secrets of warden magic. You gain your choice of one warden spell from the peerless warden spells (or another you have access to).\n\n**Special** You can take this feat multiple times, choosing a different peerless warden spell each time.',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(InitiateWarden)],
  repeatable: true,
  effects: [
    CharacterEffects.gainCharacterOption(SelectPeerlessWardenSpell),
    CharacterEffects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const PenetratingShot = Traits.defineTrait('feat/penetrating-shot', {
  name: 'Penetrating Shot',
  description:
    '*Ranger*\n\n**Requirements** You are wielding a ranged weapon\n\nYou shoot clear through an intervening creature to hit your prey. Choose a target that is giving lesser cover to your hunted prey. Make a single ranged [Strike](content:playing-the-game/strike) with the required weapon against the chosen target and your hunted prey. This attack ignores any lesser cover the chosen target provides your hunted prey. Roll damage only once, and apply it to each creature you hit. A Penetrating Shot counts as two attacks for your multiple attack penalty',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel10],
  effects: [],
})

export const PenetratingShotAction = Abilities.defineAbility('feat/penetrating-shot/action', {
  name: 'Penetrating Shot',
  description: '*Ranger*',
  prerequisites: [Traits.traitPrerequisite(PenetratingShot)],
  actions: [
    {
      name: 'Penetrating Shot',
      description:
        '**Requirements** You are wielding a ranged weapon\n\nYou shoot clear through an intervening creature to hit your prey. Choose a target that is giving lesser cover to your hunted prey. Make a single ranged [Strike](content:playing-the-game/strike) with the required weapon against the chosen target and your hunted prey. This attack ignores any lesser cover the chosen target provides your hunted prey. Roll damage only once, and apply it to each creature you hit. A Penetrating Shot counts as two attacks for your multiple attack penalty',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const WardensStep = Traits.defineTrait('feat/wardens-step', {
  name: "Warden's Step",
  description:
    '*Ranger*\n\n**Prerequisites** Master in [Stealth](characteristic:skill/stealth)\n\nYou can guide your allies to move quietly through the wilderness. When you [Avoid Notice](content:playing-the-game/avoid-notice) during exploration in natural terrain, you can designate any number of your allies to gain the benefits as if they were using that activity during that exploration. This requires no action on their part',
  tags: [Feat, ClassFeat, RangerFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(MasterStealth)],
  effects: [],
})

export const AllRangerFeatEntities = [
  SelectInitiateWardenSpell,
  SelectAdvancedWardenSpell,
  SelectMasterfulWardenSpell,
  SelectPeerlessWardenSpell,
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
  AdditionalRecollection,
  AdditionalRecollectionAction,
  MasterfulWarden,
  MatureAnimalCompanionRanger,
  SkirmishStrike,
  SkirmishStrikeAction,
  SnapShot,
  SwiftTracker,
  DeadlyAim,
  DeadlyAimAction,
  HazardFinder,
  TerrainMaster,
  WardensBoon,
  WardensBoonAction,
  Camouflage,
  IncredibleCompanionRanger,
  MasterMonsterHunter,
  PeerlessWarden,
  PenetratingShot,
  PenetratingShotAction,
  WardensStep,
]
