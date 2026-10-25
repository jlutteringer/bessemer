import { Abilities, Traits } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { ClassFeat, Feat, FeatLevel1, FeatLevel10, FeatLevel2, FeatLevel4, FeatLevel6, FeatLevel8, RogueFeat } from '@simulacrum/ruleset-pf2e/tag'
import { ExpertStealth, MasterStealth, TrainedAthletics, TrainedDeception, TrainedIntimidation, TrainedStealth } from '@simulacrum/ruleset-pf2e/skill'
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

export const AnalyzeWeakness = Traits.defineTrait('feat/analyze-weakness', {
  name: 'Analyze Weakness',
  description:
    '*Rogue*\n\n**Prerequisites** sneak attack 2d6\n\n**Requirements** You have identified a creature with [Recall Knowledge](content:skills/recall-knowledge)\n\nYour knowledge of a creature’s physiology helps you attack with pinpoint accuracy. You carefully study a creature that you’ve identified to scope out particularly weak points in its positioning or physical form. The next time you deal sneak attack damage to the chosen creature with a [Strike](content:playing-the-game/strike) before the end of your turn, add an additional 2d6 precision damage.\n\nAt 11th level, the additional damage becomes 3d6, and at 17th level it becomes 4d6.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel6],
  effects: [],
})

export const AnalyzeWeaknessAction = Abilities.defineAbility('feat/analyze-weakness/action', {
  name: 'Analyze Weakness',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(AnalyzeWeakness)],
  actions: [
    {
      name: 'Analyze Weakness',
      description:
        '**Prerequisites** sneak attack 2d6\n\n**Requirements** You have identified a creature with [Recall Knowledge](content:skills/recall-knowledge)\n\nYour knowledge of a creature’s physiology helps you attack with pinpoint accuracy. You carefully study a creature that you’ve identified to scope out particularly weak points in its positioning or physical form. The next time you deal sneak attack damage to the chosen creature with a [Strike](content:playing-the-game/strike) before the end of your turn, add an additional 2d6 precision damage.\n\nAt 11th level, the additional damage becomes 3d6, and at 17th level it becomes 4d6.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const AnticipateAmbush = Traits.defineTrait('feat/anticipate-ambush', {
  name: 'Anticipate Ambush',
  description:
    '*Exploration, Rogue*\n\n**Prerequisites** Expert in [Stealth](characteristic:skill/stealth)\n\nYou keep watch for any hidden creatures or dangerous sites, moving at half your travel [Speed](characteristic:speed). If you’re Anticipating an Ambush at the start of an encounter, you roll a [Perception](characteristic:perception) check for initiative, and all enemies rolling Stealth for initiative take a –2 circumstance penalty to their Stealth checks.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(ExpertStealth)],
  effects: [],
})

export const FarThrow = Traits.defineTrait('feat/far-throw', {
  name: 'Far Throw',
  description:
    '*Rogue*\n\nWhen you [Strike](content:playing-the-game/strike) with a thrown weapon, you take only a –1 penalty for each additional range increment between you and the target, rather than a –2 penalty.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel6],
  effects: [],
})

export const GangUp = Traits.defineTrait('feat/gang-up', {
  name: 'Gang Up',
  description:
    '*Rogue*\n\nYou and your allies harry an opponent in concert. You can flank an enemy if it’s within reach of both of you and an ally—you and your ally don’t have to be on opposite sides. This benefits your allies as well as you, but only if they’re flanking with you, not each other. The other requirements for flanking must still be met.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel6],
  effects: [],
})

export const LightStep = Traits.defineTrait('feat/light-step', {
  name: 'Light Step',
  description:
    '*Rogue*\n\nYou aren’t bothered by tricky footing. When you [Stride](content:playing-the-game/stride) or [Step](content:playing-the-game/step), you can ignore difficult terrain.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel6],
  effects: [],
})

export const ShoveDown = Traits.defineTrait('feat/shove-down', {
  name: 'Shove Down',
  description:
    '*Rogue*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\n**Requirements** Your last action was a successful [Shove](content:skills/shove)\n\nYou leverage your weight to topple foes that you move. You attempt to [Trip](content:skills/trip) the target, even if the target is no longer in your reach.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [],
})

export const ShoveDownAction = Abilities.defineAbility('feat/shove-down/action', {
  name: 'Shove Down',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(ShoveDown)],
  actions: [
    {
      name: 'Shove Down',
      description:
        '**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\n**Requirements** Your last action was a successful [Shove](content:skills/shove)\n\nYou leverage your weight to topple foes that you move. You attempt to [Trip](content:skills/trip) the target, even if the target is no longer in your reach.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const SlyDisarm = Traits.defineTrait('feat/sly-disarm', {
  name: 'Sly Disarm',
  description:
    '*Rogue*\n\nYou can [Disarm](content:skills/disarm) a creature through sleight of hand rather than brute force. You can use [Thievery](characteristic:skill/thievery) instead of [Athletics](characteristic:skill/athletics) when you attempt a Disarm. When you use Thievery to attempt a Disarm and succeed, the target is [off-guard](content:conditions/off-guard) against the next attack you make before the end of your turn.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel6],
  effects: [],
})

export const TwistTheKnife = Traits.defineTrait('feat/twist-the-knife', {
  name: 'Twist The Knife',
  description:
    '*Rogue*\n\n**Requirements** Your last action was a melee [Strike](content:playing-the-game/strike) that dealt sneak attack damage to an [off-guard](content:conditions/off-guard) target\n\nAfter stabbing your opponent in a weak spot, you tear the wound open. You deal persistent bleed damage to the target equal to your number of sneak attack damage dice.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel6],
  effects: [],
})

export const TwistTheKnifeAction = Abilities.defineAbility('feat/twist-the-knife/action', {
  name: 'Twist The Knife',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(TwistTheKnife)],
  actions: [
    {
      name: 'Twist The Knife',
      description:
        '**Requirements** Your last action was a melee [Strike](content:playing-the-game/strike) that dealt sneak attack damage to an [off-guard](content:conditions/off-guard) target\n\nAfter stabbing your opponent in a weak spot, you tear the wound open. You deal persistent bleed damage to the target equal to your number of sneak attack damage dice.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const WatchYourBack = Traits.defineTrait('feat/watch-your-back', {
  name: 'Watch Your Back',
  description:
    '*Emotion, Fear, Mental, Rogue*\n\n**Prerequisites** Trained in [Intimidation](characteristic:skill/intimidation)\n\nYou menace the target, stoking their fears and drawing their attention. Attempt an Intimidation check against the [Will DC](characteristic:will) of a target within 30 feet. If you succeed, for 1 minute, that target gains a +2 status bonus to [Perception](characteristic:perception) checks against you, but it takes a –2 status penalty to Will saves against fear effects.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(TrainedIntimidation)],
  effects: [],
})

export const WatchYourBackAction = Abilities.defineAbility('feat/watch-your-back/action', {
  name: 'Watch Your Back',
  description: '*Emotion, Fear, Mental, Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(WatchYourBack)],
  actions: [
    {
      name: 'Watch Your Back',
      description:
        '**Prerequisites** Trained in [Intimidation](characteristic:skill/intimidation)\n\nYou menace the target, stoking their fears and drawing their attention. Attempt an Intimidation check against the [Will DC](characteristic:will) of a target within 30 feet. If you succeed, for 1 minute, that target gains a +2 status bonus to [Perception](characteristic:perception) checks against you, but it takes a –2 status penalty to Will saves against fear effects.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const Bullseye = Traits.defineTrait('feat/bullseye', {
  name: 'Bullseye',
  description:
    '*Rogue*\n\nYou carefully take aim to avoid your foe’s concealment and cover. On your next [Strike](content:playing-the-game/strike) with a thrown weapon before the end of your turn, you gain a +1 circumstance bonus to your attack roll and ignore your target’s concealed condition, as well as the target’s lesser cover or standard cover; if the target had greater cover, they instead have only standard cover against the Strike.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  effects: [],
})

export const BullseyeAction = Abilities.defineAbility('feat/bullseye/action', {
  name: 'Bullseye',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(Bullseye)],
  actions: [
    {
      name: 'Bullseye',
      description:
        'You carefully take aim to avoid your foe’s concealment and cover. On your next [Strike](content:playing-the-game/strike) with a thrown weapon before the end of your turn, you gain a +1 circumstance bonus to your attack roll and ignore your target’s concealed condition, as well as the target’s lesser cover or standard cover; if the target had greater cover, they instead have only standard cover against the Strike.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DelayTrap = Traits.defineTrait('feat/delay-trap', {
  name: 'Delay Trap',
  description:
    "*Rogue*\n\n**Trigger** A trap within your reach is triggered\n\nYou try to jam the workings of a trap to delay its effects. Attempt a [Thievery](characteristic:skill/thievery) check to [Disable a Device](content:skills/disable-a-device) on the trap with the following results instead of the normal ones for the action.\n\n**Critical Success** You either prevent the trap from being triggered or delay the activation until the start or end of your next turn.\n\n**Success** As above, but the GM chooses whichever is worse for you.\n\n**Failure** No effect.\n\n**Critical Failure** You're [off-guard](content:conditions/off-guard) until the start of your next turn.",
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  effects: [],
})

export const DelayTrapAction = Abilities.defineAbility('feat/delay-trap/action', {
  name: 'Delay Trap',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(DelayTrap)],
  actions: [
    {
      name: 'Delay Trap',
      description:
        "**Trigger** A trap within your reach is triggered\n\nYou try to jam the workings of a trap to delay its effects. Attempt a [Thievery](characteristic:skill/thievery) check to [Disable a Device](content:skills/disable-a-device) on the trap with the following results instead of the normal ones for the action.\n\n**Critical Success** You either prevent the trap from being triggered or delay the activation until the start or end of your next turn.\n\n**Success** As above, but the GM chooses whichever is worse for you.\n\n**Failure** No effect.\n\n**Critical Failure** You're [off-guard](content:conditions/off-guard) until the start of your next turn.",
      action: ActionTypes.Reaction,
    },
  ],
})

export const ImprovedPoisonWeapon = Traits.defineTrait('feat/improved-poison-weapon', {
  name: 'Improved Poison Weapon',
  description:
    '*Rogue*\n\n**Prerequisites** [Poison Weapon](trait:feat/poison-weapon)\n\nYou deliver poisons in ways that maximize their harmful effects. When you apply a simple poison with Poison Weapon, the poison deals 2d4 poison damage instead of 1d4 poison damage. You don’t waste a poison you apply with Poison Weapon on a critically failed attack roll.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(PoisonWeapon)],
  effects: [],
})

export const InspiredStratagem = Traits.defineTrait('feat/inspired-stratagem', {
  name: 'Inspired Stratagem',
  description:
    '*Rogue*\n\nDuring your daily preparations, you can review stratagems for the day’s adventures with up to five allies. Later, you can quickly advise them on your schemes using the below reaction.\n\n**Inspired Stratagem** ⟲ (fortune, linguistic) **Trigger** An ally you reviewed stratagems with is about to attempt an attack roll or skill check; **Effect** The ally rolls the triggering check twice and takes the better of the two results. That ally then becomes temporarily immune to your Inspired Stratagem until your next daily preparations.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  effects: [],
})

export const NimbleRoll = Traits.defineTrait('feat/nimble-roll', {
  name: 'Nimble Roll',
  description:
    '*Rogue*\n\n**Prerequisites** [Nimble Dodge](trait:feat/nimble-dodge)\n\nYou throw yourself into a roll to escape imminent danger. You can use Nimble Dodge before attempting a [Reflex](characteristic:reflex) save in addition to its original trigger. If you do, the circumstance bonus applies to your Reflex save against the triggering effect.\n\nWhen you use Nimble Dodge and the triggering attack fails or critically fails, or when you succeed or critically succeed at the saving throw, you can also [Stride](content:playing-the-game/stride) up to 10 feet as part of the reaction. If you do, the reaction gains the move trait. You can use Nimble Roll while Flying or Swimming instead of Striding if you have the corresponding movement type.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(NimbleDodge)],
  effects: [],
})

export const OpportuneBackstab = Traits.defineTrait('feat/opportune-backstab', {
  name: 'Opportune Backstab',
  description:
    '*Rogue*\n\n**Trigger** A creature within your melee reach is hit by a melee attack from one of your allies\n\nWhen your enemy is hit by your ally, you capitalize upon the distraction. Make a [Strike](content:playing-the-game/strike) against the triggering creature.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  effects: [],
})

export const OpportuneBackstabAction = Abilities.defineAbility('feat/opportune-backstab/action', {
  name: 'Opportune Backstab',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(OpportuneBackstab)],
  actions: [
    {
      name: 'Opportune Backstab',
      description:
        '**Trigger** A creature within your melee reach is hit by a melee attack from one of your allies\n\nWhen your enemy is hit by your ally, you capitalize upon the distraction. Make a [Strike](content:playing-the-game/strike) against the triggering creature.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const PredictivePurchaseRogue = Traits.defineTrait('feat/predictive-purchase-rogue', {
  name: 'Predictive Purchase',
  description:
    '*Rogue*\n\nYou somehow manage to have just the thing for the situation. You gain the [Prescient Planner](trait:feat/prescient-planner) and Prescient Consumable feats . When using Prescient Planner, you can draw the item from your backpack (or a similar container) as a 2-action activity, instead of taking 1 minute to do so.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  effects: [],
})

export const RicochetStanceRogue = Traits.defineTrait('feat/ricochet-stance-rogue', {
  name: 'Ricochet Stance',
  description:
    '*Rogue, Stance*\n\nYou adopt a stance to rebound your thrown weapons toward you. While you are in this stance, any thrown weapons you use as part of a ranged [Strike](content:playing-the-game/strike) to deal bludgeoning or slashing damage immediately return to your hand, enabling you to use them for additional Strikes. You must be within the weapon’s listed range increment and have a hand free to catch the weapon. If you make a ranged Strike with a thrown weapon outside of its listed range increment, it instead flies back toward you a number of feet equal to its listed range increment and then falls to the ground.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  effects: [],
})

export const RicochetStanceRogueAction = Abilities.defineAbility('feat/ricochet-stance-rogue/action', {
  name: 'Ricochet Stance',
  description: '*Rogue, Stance*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(RicochetStanceRogue)],
  actions: [
    {
      name: 'Ricochet Stance',
      description:
        'You adopt a stance to rebound your thrown weapons toward you. While you are in this stance, any thrown weapons you use as part of a ranged [Strike](content:playing-the-game/strike) to deal bludgeoning or slashing damage immediately return to your hand, enabling you to use them for additional Strikes. You must be within the weapon’s listed range increment and have a hand free to catch the weapon. If you make a ranged Strike with a thrown weapon outside of its listed range increment, it instead flies back toward you a number of feet equal to its listed range increment and then falls to the ground.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const Sidestep = Traits.defineTrait('feat/sidestep', {
  name: 'Sidestep',
  description:
    "*Rogue*\n\n**Trigger** The attack roll for a [Strike](content:playing-the-game/strike) targeting you fails or critically fails\n\nYou deftly step aside and gently redirect an attack. You redirect the triggering attack to a creature of your choice that is adjacent to you and within the attack's reach or maximum range. The attacker rerolls the Strike’s attack roll against the new target.",
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  effects: [],
})

export const SidestepAction = Abilities.defineAbility('feat/sidestep/action', {
  name: 'Sidestep',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(Sidestep)],
  actions: [
    {
      name: 'Sidestep',
      description:
        "**Trigger** The attack roll for a [Strike](content:playing-the-game/strike) targeting you fails or critically fails\n\nYou deftly step aside and gently redirect an attack. You redirect the triggering attack to a creature of your choice that is adjacent to you and within the attack's reach or maximum range. The attacker rerolls the Strike’s attack roll against the new target.",
      action: ActionTypes.Reaction,
    },
  ],
})

export const SlyStriker = Traits.defineTrait('feat/sly-striker', {
  name: 'Sly Striker',
  description:
    '*Rogue*\n\n**Prerequisites** sneak attack\n\nYour attacks deal more damage, even against creatures that aren’t [off-guard](content:conditions/off-guard). When you succeed or critically succeed at a [Strike](content:playing-the-game/strike) against a creature that isn’t off-guard, you also deal 1d6 precision damage. This applies only if you’re using a weapon or unarmed attack you could deal sneak attack damage with.\n\nAt 14th level, if you would normally deal 3d6 or more sneak attack damage to off-guard creatures, you deal 2d6 precision damage to creatures that aren’t off-guard.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  effects: [],
})

export const SwipeSouvenir = Traits.defineTrait('feat/swipe-souvenir', {
  name: 'Swipe Souvenir',
  description:
    '*Rogue*\n\n**Requirements** You’re [grabbed](content:conditions/grabbed) or [restrained](content:conditions/restrained) by a creature\n\nWhen you wriggle free from an enemy’s grasp, you take something of theirs with you. You attempt to [Escape](content:playing-the-game/escape) from being grabbed or restrained by a creature. If you succeed, you can also attempt to [Steal](content:skills/steal) from the creature, even if the creature is in combat.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  effects: [],
})

export const SwipeSouvenirAction = Abilities.defineAbility('feat/swipe-souvenir/action', {
  name: 'Swipe Souvenir',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(SwipeSouvenir)],
  actions: [
    {
      name: 'Swipe Souvenir',
      description:
        '**Requirements** You’re [grabbed](content:conditions/grabbed) or [restrained](content:conditions/restrained) by a creature\n\nWhen you wriggle free from an enemy’s grasp, you take something of theirs with you. You attempt to [Escape](content:playing-the-game/escape) from being grabbed or restrained by a creature. If you succeed, you can also attempt to [Steal](content:skills/steal) from the creature, even if the creature is in combat.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const TacticalEntry = Traits.defineTrait('feat/tactical-entry', {
  name: 'Tactical Entry',
  description:
    '*Rogue*\n\n**Prerequisites** Master in [Stealth](characteristic:skill/stealth)\n\n**Requirements** You rolled Stealth for initiative in this encounter, and neither you nor any enemies have acted yet\n\nYou [Stride](content:playing-the-game/stride). This movement doesn’t trigger any reactions.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(MasterStealth)],
  effects: [],
})

export const TacticalEntryAction = Abilities.defineAbility('feat/tactical-entry/action', {
  name: 'Tactical Entry',
  description: '*Rogue*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(TacticalEntry)],
  actions: [
    {
      name: 'Tactical Entry',
      description:
        '**Prerequisites** Master in [Stealth](characteristic:skill/stealth)\n\n**Requirements** You rolled Stealth for initiative in this encounter, and neither you nor any enemies have acted yet\n\nYou [Stride](content:playing-the-game/stride). This movement doesn’t trigger any reactions.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const MethodicalDebilitations = Traits.defineTrait('feat/methodical-debilitations', {
  name: 'Methodical Debilitations',
  description:
    '*Rogue*\n\n**Prerequisites** mastermind racket; Debilitating [Strike](content:playing-the-game/strike)\n\nYou strategically craft your debilitations to lessen or negate an enemy’s tactical advantages. Add the following debilitations to the list you can choose from when you use Debilitating Strike.\n\n- **Debilitation** The target can’t flank or contribute to allies’ flanking.\n\n- **Debilitation** The target doesn’t gain a circumstance bonus to [AC](characteristic:armor-class) from Raising a Shield, lesser cover, or standard cover; it gains a +2 circumstance bonus to AC only from greater cover or Taking Cover.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(MastermindRacket)],
  effects: [],
})

export const NimbleStrike = Traits.defineTrait('feat/nimble-strike', {
  name: 'Nimble Strike',
  description:
    '*Rogue*\n\n**Prerequisites** Nimble Roll\n\nYou’re cunning enough to find an opening in an opponent’s attack. When you use your Nimble Dodge reaction, you can make a melee [Strike](content:playing-the-game/strike) against the triggering creature. This Strike doesn’t count toward your multiple attack penalty, and your multiple attack penalty doesn’t apply to this Strike. If you use the Nimble Roll feat, you can make this Strike at any point during your roll.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(NimbleRoll)],
  effects: [],
})

export const PreciseDebilitations = Traits.defineTrait('feat/precise-debilitations', {
  name: 'Precise Debilitations',
  description:
    '*Rogue*\n\n**Prerequisites** thief racket; Debilitating [Strike](content:playing-the-game/strike)\n\nYou attack with great precision. Add the following debilitations to the list you can choose from when you use Debilitating Strike.\n\n- **Debilitation** The target takes an additional 2d6 precision damage from your attacks.\n\n- **Debilitation** The target becomes [off-guard](content:conditions/off-guard).',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(ThiefRacket)],
  effects: [],
})

export const SneakAdept = Traits.defineTrait('feat/sneak-adept', {
  name: 'Sneak Adept',
  description:
    '*Rogue*\n\n**Prerequisites** Master in [Stealth](characteristic:skill/stealth)\n\nIt’s almost impossible to spot you. When you roll a failure on a [Sneak](content:skills/sneak) action, you get a success instead. You can still critically fail.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(MasterStealth)],
  effects: [],
})

export const TacticalDebilitations = Traits.defineTrait('feat/tactical-debilitations', {
  name: 'Tactical Debilitations',
  description:
    '*Rogue*\n\n**Prerequisites** scoundrel racket; Debilitating [Strike](content:playing-the-game/strike)\n\nYou learn new debilitations that grant you tactical advantages against your foes. Add the following debilitations to the list you can choose from when you use Debilitating Strike.\n\n- **Debilitation** The target can’t use reactions.\n\n- **Debilitation** The target can’t flank or contribute to allies’ flanking.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(ScoundrelRacket)],
  effects: [],
})

export const ViciousDebilitations = Traits.defineTrait('feat/vicious-debilitations', {
  name: 'Vicious Debilitations',
  description:
    '*Rogue*\n\n**Prerequisites** ruffian racket; Debilitating [Strike](content:playing-the-game/strike)\n\nThe debilitations you dish out seriously impair your foes. Add the following debilitations to the list you can choose from when you use Debilitating Strike.\n\n- **Debilitation** The target gains weakness 5 to your choice of bludgeoning, piercing, or slashing damage.\n\n- **Debilitation** The target becomes [clumsy](content:conditions/clumsy) 1.',
  tags: [Feat, ClassFeat, RogueFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(RuffianRacket)],
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
  AnalyzeWeakness,
  AnalyzeWeaknessAction,
  AnticipateAmbush,
  FarThrow,
  GangUp,
  LightStep,
  ShoveDown,
  ShoveDownAction,
  SlyDisarm,
  TwistTheKnife,
  TwistTheKnifeAction,
  WatchYourBack,
  WatchYourBackAction,
  Bullseye,
  BullseyeAction,
  DelayTrap,
  DelayTrapAction,
  ImprovedPoisonWeapon,
  InspiredStratagem,
  NimbleRoll,
  OpportuneBackstab,
  OpportuneBackstabAction,
  PredictivePurchaseRogue,
  RicochetStanceRogue,
  RicochetStanceRogueAction,
  Sidestep,
  SidestepAction,
  SlyStriker,
  SwipeSouvenir,
  SwipeSouvenirAction,
  TacticalEntry,
  TacticalEntryAction,
  MethodicalDebilitations,
  NimbleStrike,
  PreciseDebilitations,
  SneakAdept,
  TacticalDebilitations,
  ViciousDebilitations,
]
