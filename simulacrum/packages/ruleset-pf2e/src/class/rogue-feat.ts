import { Abilities, Traits } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { ClassFeat, Feat, FeatLevel1, FeatLevel2, FeatLevel4, RogueFeat } from '@simulacrum/ruleset-pf2e/tag'
import { TrainedDeception, TrainedIntimidation, TrainedStealth } from '@simulacrum/ruleset-pf2e/skill'
import { Pickpocket } from '@simulacrum/ruleset-pf2e/feat/skill-feat'
import { MastermindRacket, RuffianRacket, ScoundrelRacket, ThiefRacket } from '@simulacrum/ruleset-pf2e/class/rogue-racket'

export const NimbleDodge = Traits.defineTrait('feat/nimble-dodge', {
  name: 'Nimble Dodge',
  description:
    '*Rogue*\n\n**Trigger** A creature targets you with an attack and you can see the attacker\n\n**Requirements** You are not [encumbered](content:conditions/encumbered)\n\nYou deftly dodge out of the way, gaining a +2 circumstance bonus to [AC](characteristic:armor-class) against the triggering attack.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel1],
  effects: [],
})

export const NimbleDodgeAction = Abilities.defineAbility('feat/nimble-dodge/action', {
  name: 'Nimble Dodge',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(NimbleDodge)],
  actions: [
    {
      name: 'Nimble Dodge',
      description:
        '**Trigger** A creature targets you with an attack and you can see the attacker\n\n**Requirements** You are not [encumbered](content:conditions/encumbered)\n\nYou deftly dodge out of the way, gaining a +2 circumstance bonus to [AC](characteristic:armor-class) against the triggering attack.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const OverextendingFeint = Traits.defineTrait('feat/overextending-feint', {
  name: 'Overextending Feint',
  description:
    '*Rogue*\n\n**Prerequisites** Trained in [Deception](characteristic:skill/deception)\n\nYou goad a foe into overextending. On a successful [Feint](content:skills/feint), you can use the following success and critical success effects instead of any other effects that would occur when you Feint.\n\n**Critical Success** The target takes a –2 circumstance penalty to all attack rolls against you before the end of its next turn.\n\n**Success** The target takes a –2 circumstance penalty to its next attack roll against you before the end of its next turn.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedDeception)],
  effects: [],
})

export const PlantEvidence = Traits.defineTrait('feat/plant-evidence', {
  name: 'Plant Evidence',
  description:
    '*Rogue*\n\n**Prerequisites** [Pickpocket](trait:feat/pickpocket)\n\nYou can put a single item you’re holding of light or negligible Bulk onto a person without them noticing by succeeding at a [Thievery](characteristic:skill/thievery) check against their [Perception](characteristic:perception) DC. If you have the ruffian racket, you can do this as a free action when you successfully [Shove](content:skills/shove) a target.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(Pickpocket)],
  effects: [],
})

export const PlantEvidenceAction = Abilities.defineAbility('feat/plant-evidence/action', {
  name: 'Plant Evidence',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(PlantEvidence)],
  actions: [
    {
      name: 'Plant Evidence',
      description:
        '**Prerequisites** [Pickpocket](trait:feat/pickpocket)\n\nYou can put a single item you’re holding of light or negligible Bulk onto a person without them noticing by succeeding at a [Thievery](characteristic:skill/thievery) check against their [Perception](characteristic:perception) DC. If you have the ruffian racket, you can do this as a free action when you successfully [Shove](content:skills/shove) a target.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const TrapFinder = Traits.defineTrait('feat/trap-finder', {
  name: 'Trap Finder',
  description:
    '*Investigator, Rogue*\n\nYou have an intuitive sense that alerts you to the presence of traps. You gain a +1 circumstance bonus to [Perception](characteristic:perception) checks to find traps, to [AC](characteristic:armor-class) against attacks made by traps, and to saves against traps. Even if you aren’t Searching, you get a check to find traps that normally require you to be Searching. You still need to meet any other requirements to find the trap.\n\nYou can disable traps that require a proficiency rank of master in [Thievery](characteristic:skill/thievery). If you have master proficiency in Thievery, you can disable traps that require a proficiency rank of legendary instead, and your circumstance bonuses against traps increase to +2.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel1],
  effects: [],
})

export const TumbleBehindRogue = Traits.defineTrait('feat/tumble-behind-rogue', {
  name: 'Tumble Behind',
  description:
    '*Rogue*\n\nYou tumble under and behind your foe, your rapid movement letting you catch them off guard. When you successfully [Tumble Through](content:skills/tumble-through), the foe whose space you passed through is [off-guard](content:conditions/off-guard) against the next attack you make before the end of your turn.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel1],
  effects: [],
})

export const TwinFeint = Traits.defineTrait('feat/twin-feint', {
  name: 'Twin Feint',
  description:
    '*Rogue*\n\n**Requirements** You are wielding two melee weapons, each in a different hand\n\nYou use an attack with one weapon to distract your foe from a second attack coming at a different angle. Make one [Strike](content:playing-the-game/strike) with each of your two melee weapons, both against the same target. The target is automatically [off-guard](content:conditions/off-guard) against the second attack. Apply your multiple attack penalty to the Strikes normally.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel1],
  effects: [],
})

export const TwinFeintAction = Abilities.defineAbility('feat/twin-feint/action', {
  name: 'Twin Feint',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(TwinFeint)],
  actions: [
    {
      name: 'Twin Feint',
      description:
        '**Requirements** You are wielding two melee weapons, each in a different hand\n\nYou use an attack with one weapon to distract your foe from a second attack coming at a different angle. Make one [Strike](content:playing-the-game/strike) with each of your two melee weapons, both against the same target. The target is automatically [off-guard](content:conditions/off-guard) against the second attack. Apply your multiple attack penalty to the Strikes normally.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const YoureNext = Traits.defineTrait('feat/youre-next', {
  name: "You're Next",
  description:
    '*Emotion, Fear, Mental, Rogue, Swashbuckler, Visual*\n\n**Prerequisites** Trained in [Intimidation](characteristic:skill/intimidation)\n\n**Trigger** You reduce an enemy to 0 [Hit Points](characteristic:hit-points)\n\nAfter downing a foe, you menace another. Attempt to [Demoralize](content:skills/demoralize) a creature within 60 feet, with a +2 circumstance bonus. If you have legendary proficiency in Intimidation, you can use this as a free action with the same trigger.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedIntimidation)],
  effects: [],
})

export const YoureNextAction = Abilities.defineAbility('feat/youre-next/action', {
  name: "You're Next",
  description: '*Emotion, Fear, Mental, Rogue, Swashbuckler, Visual*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(YoureNext)],
  actions: [
    {
      name: "You're Next",
      description:
        '**Prerequisites** Trained in [Intimidation](characteristic:skill/intimidation)\n\n**Trigger** You reduce an enemy to 0 [Hit Points](characteristic:hit-points)\n\nAfter downing a foe, you menace another. Attempt to [Demoralize](content:skills/demoralize) a creature within 60 feet, with a +2 circumstance bonus. If you have legendary proficiency in Intimidation, you can use this as a free action with the same trigger.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const BrutalBeating = Traits.defineTrait('feat/brutal-beating', {
  name: 'Brutal Beating',
  description:
    '*Emotion, Fear, Mental, Rogue*\n\n**Prerequisites** ruffian racket\n\nYour critical hits shakes your foes’ confidence. Whenever your [Strike](content:playing-the-game/strike) is a critical hit and deals damage, the target is [frightened](content:conditions/frightened) 1.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(RuffianRacket)],
  effects: [],
})

export const CleverGambit = Traits.defineTrait('feat/clever-gambit', {
  name: 'Clever Gambit',
  description:
    '*Rogue*\n\n**Prerequisites** mastermind racket\n\n**Trigger** Your [Strike](content:playing-the-game/strike) critically hits and deals damage to a creature you’ve identified with [Recall Knowledge](content:skills/recall-knowledge)\n\nYour battle tactics are aided by assessing your foe’s capabilities and range. You [Step](content:playing-the-game/step) or [Stride](content:playing-the-game/stride); this movement doesn’t trigger reactions from the triggering creature.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(MastermindRacket)],
  effects: [],
})

export const CleverGambitAction = Abilities.defineAbility('feat/clever-gambit/action', {
  name: 'Clever Gambit',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(CleverGambit)],
  actions: [
    {
      name: 'Clever Gambit',
      description:
        '**Prerequisites** mastermind racket\n\n**Trigger** Your [Strike](content:playing-the-game/strike) critically hits and deals damage to a creature you’ve identified with [Recall Knowledge](content:skills/recall-knowledge)\n\nYour battle tactics are aided by assessing your foe’s capabilities and range. You [Step](content:playing-the-game/step) or [Stride](content:playing-the-game/stride); this movement doesn’t trigger reactions from the triggering creature.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const DistractingFeint = Traits.defineTrait('feat/distracting-feint', {
  name: 'Distracting Feint',
  description:
    '*Rogue*\n\n**Prerequisites** scoundrel racket\n\nYour Feints are far more distracting than normal. While a creature is [off-guard](content:conditions/off-guard) by your [Feint](content:skills/feint), it also takes a –2 circumstance penalty to [Perception](characteristic:perception) checks and [Reflex](characteristic:reflex) saves.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ScoundrelRacket)],
  effects: [],
})

export const Mobility = Traits.defineTrait('feat/mobility', {
  name: 'Mobility',
  description:
    '*Rogue*\n\nYou move without leaving an opening. When you [Stride](content:playing-the-game/stride) and move half your [Speed](characteristic:speed) or less, that movement does not trigger reactions. You can use Mobility when Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel2],
  effects: [],
})

export const StrongArm = Traits.defineTrait('feat/strong-arm', {
  name: 'Strong Arm',
  description:
    '*Rogue*\n\nWhen you [Strike](content:playing-the-game/strike) with a thrown weapon, the weapon’s [range increment](content:equipment/range) increases by 10 feet.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel2],
  effects: [],
})

export const UnbalancingBlow = Traits.defineTrait('feat/unbalancing-blow', {
  name: 'Unbalancing Blow',
  description:
    '*Rogue*\n\n**Prerequisites** thief racket\n\nInterweaving attacks, you unbalance your foes. Whenever your [Strike](content:playing-the-game/strike) is a critical hit and deals damage, the target is offguard against your attacks until the end of your next turn.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(ThiefRacket)],
  effects: [],
})

export const UnderhandedAssault = Traits.defineTrait('feat/underhanded-assault', {
  name: 'Underhanded Assault',
  description:
    '*Rogue*\n\n**Prerequisites** Trained in [Stealth](characteristic:skill/stealth)\n\nYou capitalize on the distraction provided by an ally. You [Sneak](content:skills/sneak) up to a foe adjacent to one of your allies. You can roll against the foe you’re Sneaking up on, even if it’s currently observing you, as though you were hidden. You take a –2 penalty on your Stealth check. If your Stealth check against the chosen foe succeeds, you can make a melee [Strike](content:playing-the-game/strike) against that foe at the end of your Sneak.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel2],
  prerequisites: [Traits.traitPrerequisite(TrainedStealth)],
  effects: [],
})

export const UnderhandedAssaultAction = Abilities.defineAbility('feat/underhanded-assault/action', {
  name: 'Underhanded Assault',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(UnderhandedAssault)],
  actions: [
    {
      name: 'Underhanded Assault',
      description:
        '**Prerequisites** Trained in [Stealth](characteristic:skill/stealth)\n\nYou capitalize on the distraction provided by an ally. You [Sneak](content:skills/sneak) up to a foe adjacent to one of your allies. You can roll against the foe you’re Sneaking up on, even if it’s currently observing you, as though you were hidden. You take a –2 penalty on your Stealth check. If your Stealth check against the chosen foe succeeds, you can make a melee [Strike](content:playing-the-game/strike) against that foe at the end of your Sneak.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DreadStriker = Traits.defineTrait('feat/dread-striker', {
  name: 'Dread Striker',
  description:
    '*Rogue*\n\nYou capitalize on your enemies’ fear to slip past their defenses. Any creature that has the [frightened](content:conditions/frightened) condition is also [off-guard](content:conditions/off-guard) against your attacks.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const HeadStomp = Traits.defineTrait('feat/head-stomp', {
  name: 'Head Stomp',
  description:
    '*Rogue*\n\nMake an unarmed melee [Strike](content:playing-the-game/strike) against a [prone](content:conditions/prone) target. If it hits, until the end of your next turn the target is [stupefied](content:conditions/stupefied) 1 (or stupefied 2 on a critical hit) and [off-guard](content:conditions/off-guard).',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const HeadStompAction = Abilities.defineAbility('feat/head-stomp/action', {
  name: 'Head Stomp',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(HeadStomp)],
  actions: [
    {
      name: 'Head Stomp',
      description:
        'Make an unarmed melee [Strike](content:playing-the-game/strike) against a [prone](content:conditions/prone) target. If it hits, until the end of your next turn the target is [stupefied](content:conditions/stupefied) 1 (or stupefied 2 on a critical hit) and [off-guard](content:conditions/off-guard).',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const Mug = Traits.defineTrait('feat/mug', {
  name: 'Mug',
  description:
    '*Rogue*\n\nYou make a quick attack and rob your foe in the process. Make a melee [Strike](content:playing-the-game/strike) against an adjacent enemy. If you hit and deal sneak attack damage, you can also attempt to [Steal](content:skills/steal) from the target, even if the target is in combat.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const MugAction = Abilities.defineAbility('feat/mug/action', {
  name: 'Mug',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(Mug)],
  actions: [
    {
      name: 'Mug',
      description:
        'You make a quick attack and rob your foe in the process. Make a melee [Strike](content:playing-the-game/strike) against an adjacent enemy. If you hit and deal sneak attack damage, you can also attempt to [Steal](content:skills/steal) from the target, even if the target is in combat.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const PoisonWeapon = Traits.defineTrait('feat/poison-weapon', {
  name: 'Poison Weapon',
  description:
    '*Manipulate, Rogue*\n\n**Requirements** You are wielding a weapon.\n\nYou apply a contact poison or injury poison to the required weapon; if you have a free hand, you can [Interact](content:playing-the-game/interact) to draw a poison as part of this action. This poison can be one of the simple injury poisons you can create due to this feat (see Special), or another contact or injury poison you’ve acquired (such as those in GM Core).\n\n**Special** During your daily preparations, you can prepare a number of simple injury poisons equal to your level. These follow the rules for injury poisons (GM Core, page 248), except that they deal 1d4 poison damage with no saving throw. Only you can apply these poisons properly, and they expire the next time you prepare.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const PoisonWeaponAction = Abilities.defineAbility('feat/poison-weapon/action', {
  name: 'Poison Weapon',
  description: '*Manipulate, Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(PoisonWeapon)],
  actions: [
    {
      name: 'Poison Weapon',
      description:
        '**Requirements** You are wielding a weapon.\n\nYou apply a contact poison or injury poison to the required weapon; if you have a free hand, you can [Interact](content:playing-the-game/interact) to draw a poison as part of this action. This poison can be one of the simple injury poisons you can create due to this feat (see Special), or another contact or injury poison you’ve acquired (such as those in GM Core).\n\n**Special** During your daily preparations, you can prepare a number of simple injury poisons equal to your level. These follow the rules for injury poisons (GM Core, page 248), except that they deal 1d4 poison damage with no saving throw. Only you can apply these poisons properly, and they expire the next time you prepare.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const Predictable = Traits.defineTrait('feat/predictable', {
  name: 'Predictable!',
  description:
    "*Rogue*\n\nBy observing an opponent, you can get a sense of their next move and prepare to counter or resist it. Choose one target and attempt a [Perception](characteristic:perception) check to [Sense Motive](content:playing-the-game/sense-motive) against the foe’s [Deception](characteristic:skill/deception) DC or a hard DC of the foe’s level, whichever is higher.\n\n**Critical Success** You precisely discern the target's strategy, gaining a +2 circumstance bonus to [AC](characteristic:armor-class) against the creature until the start of your next turn and a +2 circumstance bonus to your next saving throw against the creature before the start of your next turn.\n\n**Success** You deduce the gist of the target's strategy; as critical success, except the circumstance bonus is only +1.\n\n**Failure** You fail to discern the target's strategy and gain no benefit.\n\n**Critical Failure** You misinterpret the target's strategy and take a –1 circumstance penalty to AC against the creature until the start of your next turn, and a –1 circumstance penalty to your next saving throw against the creature before the start of your next turn.",
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const PredictableAction = Abilities.defineAbility('feat/predictable/action', {
  name: 'Predictable!',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(Predictable)],
  actions: [
    {
      name: 'Predictable!',
      description:
        "By observing an opponent, you can get a sense of their next move and prepare to counter or resist it. Choose one target and attempt a [Perception](characteristic:perception) check to [Sense Motive](content:playing-the-game/sense-motive) against the foe’s [Deception](characteristic:skill/deception) DC or a hard DC of the foe’s level, whichever is higher.\n\n**Critical Success** You precisely discern the target's strategy, gaining a +2 circumstance bonus to [AC](characteristic:armor-class) against the creature until the start of your next turn and a +2 circumstance bonus to your next saving throw against the creature before the start of your next turn.\n\n**Success** You deduce the gist of the target's strategy; as critical success, except the circumstance bonus is only +1.\n\n**Failure** You fail to discern the target's strategy and gain no benefit.\n\n**Critical Failure** You misinterpret the target's strategy and take a –1 circumstance penalty to AC against the creature until the start of your next turn, and a –1 circumstance penalty to your next saving throw against the creature before the start of your next turn.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const ReactivePursuit = Traits.defineTrait('feat/reactive-pursuit', {
  name: 'Reactive Pursuit',
  description:
    '*Rogue*\n\n**Trigger** An adjacent foe moves away from you, and you can reach at least one space adjacent to the foe with a [Stride](content:playing-the-game/stride) action\n\nYou keep pace with a retreating foe. You Stride, but you must end your movement adjacent to the triggering enemy. Your move does not trigger reactions from the triggering enemy. You can use Reactive Pursuit to Burrow, [Climb](content:skills/climb), Fly, or [Swim](content:skills/swim) instead of Stride if you have the corresponding movement type.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const ReactivePursuitAction = Abilities.defineAbility('feat/reactive-pursuit/action', {
  name: 'Reactive Pursuit',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(ReactivePursuit)],
  actions: [
    {
      name: 'Reactive Pursuit',
      description:
        '**Trigger** An adjacent foe moves away from you, and you can reach at least one space adjacent to the foe with a [Stride](content:playing-the-game/stride) action\n\nYou keep pace with a retreating foe. You Stride, but you must end your movement adjacent to the triggering enemy. Your move does not trigger reactions from the triggering enemy. You can use Reactive Pursuit to Burrow, [Climb](content:skills/climb), Fly, or [Swim](content:skills/swim) instead of Stride if you have the corresponding movement type.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const Sabotage = Traits.defineTrait('feat/sabotage', {
  name: 'Sabotage',
  description:
    '*Incapacitation, Rogue*\n\n**Requirements** You have a free hand\n\nYou subtly damage others’ equipment. Choose one item that a creature within your reach wields or carries. The item must have moving parts that you could possibly sabotage (a shortbow could be sabotaged, but a longsword could not). Attempt a [Thievery](characteristic:skill/thievery) check against the [Reflex](characteristic:reflex) DC of the creature. Damage dealt by Sabotage can’t take the item below its Broken Threshold.\n\n**Critical Success** You deal damage equal to four times your Thievery proficiency bonus.\n\n**Success** You deal damage equal to double your Thievery proficiency bonus.\n\n**Critical Failure** Temporarily immune to your Sabotage for 1 day.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const SabotageAction = Abilities.defineAbility('feat/sabotage/action', {
  name: 'Sabotage',
  description: '*Incapacitation, Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(Sabotage)],
  actions: [
    {
      name: 'Sabotage',
      description:
        '**Requirements** You have a free hand\n\nYou subtly damage others’ equipment. Choose one item that a creature within your reach wields or carries. The item must have moving parts that you could possibly sabotage (a shortbow could be sabotaged, but a longsword could not). Attempt a [Thievery](characteristic:skill/thievery) check against the [Reflex](characteristic:reflex) DC of the creature. Damage dealt by Sabotage can’t take the item below its Broken Threshold.\n\n**Critical Success** You deal damage equal to four times your Thievery proficiency bonus.\n\n**Success** You deal damage equal to double your Thievery proficiency bonus.\n\n**Critical Failure** Temporarily immune to your Sabotage for 1 day.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const ScoundrelsSurprise = Traits.defineTrait('feat/scoundrels-surprise', {
  name: "Scoundrel's Surprise",
  description:
    '*Manipulate, Rogue*\n\nYou drop your disguise at the right moment and surprise your target. After you [Impersonate](content:skills/impersonate) someone else using a disguise kit, you can remove your disguise with a dramatic gesture. Any creatures that previously failed to see through your disguise are [off-guard](content:conditions/off-guard) against the next attack you make before the end of your turn.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const ScoundrelsSurpriseAction = Abilities.defineAbility('feat/scoundrels-surprise/action', {
  name: "Scoundrel's Surprise",
  description: '*Manipulate, Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(ScoundrelsSurprise)],
  actions: [
    {
      name: "Scoundrel's Surprise",
      description:
        'You drop your disguise at the right moment and surprise your target. After you [Impersonate](content:skills/impersonate) someone else using a disguise kit, you can remove your disguise with a dramatic gesture. Any creatures that previously failed to see through your disguise are [off-guard](content:conditions/off-guard) against the next attack you make before the end of your turn.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const TheHarderTheyFallRogue = Traits.defineTrait('feat/the-harder-they-fall-rogue', {
  name: 'The Harder They Fall',
  description:
    '*Rogue*\n\nYou make your foes fall painfully when you trip them. When you successfully [Trip](content:skills/trip) an [off-guard](content:conditions/off-guard) foe, your target takes 1d6 bludgeoning damage. On a critical success, the target takes 1d6 bludgeoning damage plus your sneak attack damage.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel4],
  effects: [],
})

export const TwinDistraction = Traits.defineTrait('feat/twin-distraction', {
  name: 'Twin Distraction',
  description:
    '*Rogue*\n\n**Prerequisites** [Twin Feint](trait:feat/twin-feint)\n\n**Requirements** You are wielding two melee weapons, each in a different hand\n\nYour movements with two weapons are so swift and disorienting that they befuddle your opponent. When using Twin [Feint](content:skills/feint), if both your Strikes deal damage to a targeted creature, the target must succeed at a [Will saving throw](characteristic:will) against your [class DC](characteristic:class-dc) or become [stupefied](content:conditions/stupefied) 1 until the end of your next turn.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(TwinFeint)],
  effects: [],
})

export const AllRogueFeatEntities = [
  NimbleDodge,
  NimbleDodgeAction,
  OverextendingFeint,
  PlantEvidence,
  PlantEvidenceAction,
  TrapFinder,
  TumbleBehindRogue,
  TwinFeint,
  TwinFeintAction,
  YoureNext,
  YoureNextAction,
  BrutalBeating,
  CleverGambit,
  CleverGambitAction,
  DistractingFeint,
  Mobility,
  StrongArm,
  UnbalancingBlow,
  UnderhandedAssault,
  UnderhandedAssaultAction,
  DreadStriker,
  HeadStomp,
  HeadStompAction,
  Mug,
  MugAction,
  PoisonWeapon,
  PoisonWeaponAction,
  Predictable,
  PredictableAction,
  ReactivePursuit,
  ReactivePursuitAction,
  Sabotage,
  SabotageAction,
  ScoundrelsSurprise,
  ScoundrelsSurpriseAction,
  TheHarderTheyFallRogue,
  TwinDistraction,
]
