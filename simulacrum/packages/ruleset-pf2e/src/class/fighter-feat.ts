import { Abilities, Effects, Traits } from '@simulacrum/ruleset'
import { Expressions } from '@bessemer/cornerstone/expression'
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
  FighterFeat,
  RangerFeat,
  RogueFeat,
} from '@simulacrum/ruleset-pf2e/tag'
import { TrainedAthletics } from '@simulacrum/ruleset-pf2e/skill'
import { ShieldBlock } from '@simulacrum/ruleset-pf2e/feat/general-feat'

export const CombatAssessmentAction = Abilities.defineAbility('feat/combat-assessment/action', {
  name: 'Combat Assessment',
  description: '*Commander, Fighter*',
  universal: false,
  actions: [
    {
      name: 'Combat Assessment',
      description:
        'You make a telegraphed attack to learn about your foe. Make a melee [Strike](content:playing-the-game/strike). On a hit, you can immediately attempt a check to [Recall Knowledge](content:skills/recall-knowledge) about the target. On a critical hit, you gain a +2 circumstance bonus to the check to Recall Knowledge. The target is temporarily immune to Combat Assessment for 1 day.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const CombatAssessment = Traits.defineTrait('feat/combat-assessment', {
  name: 'Combat Assessment',
  description:
    '*Commander, Fighter*\n\nYou make a telegraphed attack to learn about your foe. Make a melee [Strike](content:playing-the-game/strike). On a hit, you can immediately attempt a check to [Recall Knowledge](content:skills/recall-knowledge) about the target. On a critical hit, you gain a +2 circumstance bonus to the check to Recall Knowledge. The target is temporarily immune to Combat Assessment for 1 day.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [Effects.gainAbility(CombatAssessmentAction)],
})

export const DoubleSliceAction = Abilities.defineAbility('feat/double-slice/action', {
  name: 'Double Slice',
  description: '*Fighter*',
  universal: false,
  actions: [
    {
      name: 'Double Slice',
      description:
        '**Requirements** You are wielding two melee weapons, each in a different hand\n\nYou lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second [Strike](content:playing-the-game/strike) is made with a weapon that doesn’t have the agile trait, it takes a –2 penalty.\n\nIf both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DoubleSlice = Traits.defineTrait('feat/double-slice', {
  name: 'Double Slice',
  description:
    '*Fighter*\n\n**Requirements** You are wielding two melee weapons, each in a different hand\n\nYou lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second [Strike](content:playing-the-game/strike) is made with a weapon that doesn’t have the agile trait, it takes a –2 penalty.\n\nIf both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [Effects.gainAbility(DoubleSliceAction)],
})

export const ExactingStrikeAction = Abilities.defineAbility('feat/exacting-strike/action', {
  name: 'Exacting Strike',
  description: '*Fighter, Press*',
  universal: false,
  actions: [
    {
      name: 'Exacting Strike',
      description:
        'You make a controlled follow-up attack, fully accounting for your momentum. Make a [Strike](content:playing-the-game/strike). The Strike gains the following failure effect.\n\n**Failure** This attack does not count toward your multiple attack penalty.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const ExactingStrike = Traits.defineTrait('feat/exacting-strike', {
  name: 'Exacting Strike',
  description:
    '*Fighter, Press*\n\nYou make a controlled follow-up attack, fully accounting for your momentum. Make a [Strike](content:playing-the-game/strike). The Strike gains the following failure effect.\n\n**Failure** This attack does not count toward your multiple attack penalty.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [Effects.gainAbility(ExactingStrikeAction)],
})

export const PointBlankStanceAction = Abilities.defineAbility('feat/point-blank-stance/action', {
  name: 'Point Blank Stance',
  description: '*Fighter, Stance*',
  universal: false,
  actions: [
    {
      name: 'Point Blank Stance',
      description:
        '**Requirements** You are wielding a ranged weapon\n\nYou take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don’t take the penalty to your attack rolls from the volley trait. When using a ranged weapon that doesn’t have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon’s first range increment.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const PointBlankStance = Traits.defineTrait('feat/point-blank-stance', {
  name: 'Point Blank Stance',
  description:
    '*Fighter, Stance*\n\n**Requirements** You are wielding a ranged weapon\n\nYou take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don’t take the penalty to your attack rolls from the volley trait. When using a ranged weapon that doesn’t have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon’s first range increment.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [Effects.gainAbility(PointBlankStanceAction)],
})

export const ReactiveShieldAction = Abilities.defineAbility('feat/reactive-shield/action', {
  name: 'Reactive Shield',
  description: '*Fighter, Guardian*',
  universal: false,
  actions: [
    {
      name: 'Reactive Shield',
      description:
        '**Trigger** An enemy hits you with a melee [Strike](content:playing-the-game/strike)\n\n**Requirements** You are wielding a shield\n\nYou can snap your shield into place just as you would take a blow, avoiding the hit at the last second. You immediately use the [Raise a Shield](content:playing-the-game/raise-a-shield) action and gain your shield’s bonus to [AC](characteristic:armor-class). The circumstance bonus from the shield applies to your AC when you’re determining the outcome of the triggering attack.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const ReactiveShield = Traits.defineTrait('feat/reactive-shield', {
  name: 'Reactive Shield',
  description:
    '*Fighter, Guardian*\n\n**Trigger** An enemy hits you with a melee [Strike](content:playing-the-game/strike)\n\n**Requirements** You are wielding a shield\n\nYou can snap your shield into place just as you would take a blow, avoiding the hit at the last second. You immediately use the [Raise a Shield](content:playing-the-game/raise-a-shield) action and gain your shield’s bonus to [AC](characteristic:armor-class). The circumstance bonus from the shield applies to your AC when you’re determining the outcome of the triggering attack.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [Effects.gainAbility(ReactiveShieldAction)],
})

export const SnaggingStrikeAction = Abilities.defineAbility('feat/snagging-strike/action', {
  name: 'Snagging Strike',
  description: '*Fighter*',
  universal: false,
  actions: [
    {
      name: 'Snagging Strike',
      description:
        '**Requirements** You have one hand free, and your target is within reach of that hand\n\nYou combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach. Make a [Strike](content:playing-the-game/strike) while keeping one hand free. If this Strike hits, the target is [off-guard](content:conditions/off-guard) until the start of your next turn or until it’s no longer within the reach of your hand, whichever comes first.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const SnaggingStrike = Traits.defineTrait('feat/snagging-strike', {
  name: 'Snagging Strike',
  description:
    '*Fighter*\n\n**Requirements** You have one hand free, and your target is within reach of that hand\n\nYou combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach. Make a [Strike](content:playing-the-game/strike) while keeping one hand free. If this Strike hits, the target is [off-guard](content:conditions/off-guard) until the start of your next turn or until it’s no longer within the reach of your hand, whichever comes first.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [Effects.gainAbility(SnaggingStrikeAction)],
})

export const SuddenChargeAction = Abilities.defineAbility('feat/sudden-charge/action', {
  name: 'Sudden Charge',
  description: '*Barbarian, Fighter, Flourish*',
  universal: false,
  actions: [
    {
      name: 'Sudden Charge',
      description:
        'With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee [Strike](content:playing-the-game/strike) against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const SuddenCharge = Traits.defineTrait('feat/sudden-charge', {
  name: 'Sudden Charge',
  description:
    '*Barbarian, Fighter, Flourish*\n\nWith a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee [Strike](content:playing-the-game/strike) against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [Effects.gainAbility(SuddenChargeAction)],
})

export const ViciousSwingAction = Abilities.defineAbility('feat/vicious-swing/action', {
  name: 'Vicious Swing',
  description: '*Fighter, Flourish*',
  universal: false,
  actions: [
    {
      name: 'Vicious Swing',
      description:
        'You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee [Strike](content:playing-the-game/strike). This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you’re at least 10th level, increase this to two extra dice, and if you’re at least 18th level, increase it to three extra dice.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const ViciousSwing = Traits.defineTrait('feat/vicious-swing', {
  name: 'Vicious Swing',
  description:
    '*Fighter, Flourish*\n\nYou unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee [Strike](content:playing-the-game/strike). This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you’re at least 10th level, increase this to two extra dice, and if you’re at least 18th level, increase it to three extra dice.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [Effects.gainAbility(ViciousSwingAction)],
})

export const AggressiveBlockAction = Abilities.defineAbility('feat/aggressive-block/action', {
  name: 'Aggressive Block',
  description: '*Fighter, Guardian*',
  universal: false,
  actions: [
    {
      name: 'Aggressive Block',
      description:
        '**Trigger** You use the Shield Block reaction, and the opponent that triggered Shield Block is adjacent to you and is your size or smaller\n\nYou push back as you block, knocking your foe away or off balance. You use your shield to push the triggering creature, either automatically Shoving it 5 feet or causing it to become [off-guard](content:conditions/off-guard) until the start of your next turn. The triggering creature chooses whether to be moved or become off-guard. If it chooses to be moved, you choose the direction. If the [Shove](content:skills/shove) would cause it to hit a solid object, enter a square of difficult terrain, or enter another creature’s space, it must become off-guard instead of being moved.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const AggressiveBlock = Traits.defineTrait('feat/aggressive-block', {
  name: 'Aggressive Block',
  description:
    '*Fighter, Guardian*\n\n**Trigger** You use the Shield Block reaction, and the opponent that triggered Shield Block is adjacent to you and is your size or smaller\n\nYou push back as you block, knocking your foe away or off balance. You use your shield to push the triggering creature, either automatically Shoving it 5 feet or causing it to become [off-guard](content:conditions/off-guard) until the start of your next turn. The triggering creature chooses whether to be moved or become off-guard. If it chooses to be moved, you choose the direction. If the [Shove](content:skills/shove) would cause it to hit a solid object, enter a square of difficult terrain, or enter another creature’s space, it must become off-guard instead of being moved.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(AggressiveBlockAction)],
})

export const AssistingShotAction = Abilities.defineAbility('feat/assisting-shot/action', {
  name: 'Assisting Shot',
  description: '*Fighter, Press*',
  universal: false,
  actions: [
    {
      name: 'Assisting Shot',
      description:
        '**Requirements** You are wielding a ranged weapon\n\nUsing your last shot to gauge your accuracy, you can fire off a quick shot to interfere with a foe in combat. Make a [Strike](content:playing-the-game/strike) with a ranged weapon. If the Strike hits, the next creature other than you to attack the same target before the start of your next turn gains a +1 circumstance bonus to their roll, or a +2 circumstance bonus if your Strike was a critical hit.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const AssistingShot = Traits.defineTrait('feat/assisting-shot', {
  name: 'Assisting Shot',
  description:
    '*Fighter, Press*\n\n**Requirements** You are wielding a ranged weapon\n\nUsing your last shot to gauge your accuracy, you can fire off a quick shot to interfere with a foe in combat. Make a [Strike](content:playing-the-game/strike) with a ranged weapon. If the Strike hits, the next creature other than you to attack the same target before the start of your next turn gains a +1 circumstance bonus to their roll, or a +2 circumstance bonus if your Strike was a critical hit.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(AssistingShotAction)],
})

export const BladeBrakeAction = Abilities.defineAbility('feat/blade-brake/action', {
  name: 'Blade Brake',
  description: '*Fighter, Manipulate*',
  universal: false,
  actions: [
    {
      name: 'Blade Brake',
      description:
        '**Trigger** You would be moved by a forced movement effect\n\n**Requirements** You are wielding a melee weapon and are within reach of a hard surface\n\nYou plow your weapon into a floor, wall, or another sturdy surface, anchoring yourself in place. If you would be moved 20 feet or more, you are moved only 5 feet. Otherwise, you don’t move at all.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const BladeBrake = Traits.defineTrait('feat/blade-brake', {
  name: 'Blade Brake',
  description:
    '*Fighter, Manipulate*\n\n**Trigger** You would be moved by a forced movement effect\n\n**Requirements** You are wielding a melee weapon and are within reach of a hard surface\n\nYou plow your weapon into a floor, wall, or another sturdy surface, anchoring yourself in place. If you would be moved 20 feet or more, you are moved only 5 feet. Otherwise, you don’t move at all.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(BladeBrakeAction)],
})

export const BrutishShoveAction = Abilities.defineAbility('feat/brutish-shove/action', {
  name: 'Brutish Shove',
  description: '*Fighter, Press*',
  universal: false,
  actions: [
    {
      name: 'Brutish Shove',
      description:
        "**Requirements** You are wielding a two-handed melee weapon\n\nUsing the momentum of your last attack to throw your weight into another, you make your opponent stumble back. Make a [Strike](content:playing-the-game/strike) with a two-handed melee weapon. If you hit a target that is your size or smaller, that creature is [off-guard](content:conditions/off-guard) until the end of your current turn, and you can automatically [Shove ](content:skills/shove)it, with the same benefits as the Shove action (including the critical success effect, if your Strike was a critical hit). If you move to follow the target, your movement doesn't trigger reactions. This Strike has the following failure effect.\n\n**Failure** The target becomes off-guard until the end of your current turn.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const BrutishShove = Traits.defineTrait('feat/brutish-shove', {
  name: 'Brutish Shove',
  description:
    "*Fighter, Press*\n\n**Requirements** You are wielding a two-handed melee weapon\n\nUsing the momentum of your last attack to throw your weight into another, you make your opponent stumble back. Make a [Strike](content:playing-the-game/strike) with a two-handed melee weapon. If you hit a target that is your size or smaller, that creature is [off-guard](content:conditions/off-guard) until the end of your current turn, and you can automatically [Shove ](content:skills/shove)it, with the same benefits as the Shove action (including the critical success effect, if your Strike was a critical hit). If you move to follow the target, your movement doesn't trigger reactions. This Strike has the following failure effect.\n\n**Failure** The target becomes off-guard until the end of your current turn.",
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(BrutishShoveAction)],
})

export const CombatGrabAction = Abilities.defineAbility('feat/combat-grab/action', {
  name: 'Combat Grab',
  description: '*Fighter, Press*',
  universal: false,
  actions: [
    {
      name: 'Combat Grab',
      description:
        '**Requirements** You have one hand free, and your target is within reach of that hand\n\nUsing your prior attack to shift your opponent’s guard, you take another swing and grab them. Make a melee [Strike](content:playing-the-game/strike) while keeping one hand free. If the Strike hits, you grab the target using your free hand. The creature remains [grabbed](content:conditions/grabbed) until the end of your next turn or until it Escapes, whichever comes first.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const CombatGrab = Traits.defineTrait('feat/combat-grab', {
  name: 'Combat Grab',
  description:
    '*Fighter, Press*\n\n**Requirements** You have one hand free, and your target is within reach of that hand\n\nUsing your prior attack to shift your opponent’s guard, you take another swing and grab them. Make a melee [Strike](content:playing-the-game/strike) while keeping one hand free. If the Strike hits, you grab the target using your free hand. The creature remains [grabbed](content:conditions/grabbed) until the end of your next turn or until it Escapes, whichever comes first.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(CombatGrabAction)],
})

export const DuelingParryAction = Abilities.defineAbility('feat/dueling-parry/action', {
  name: 'Dueling Parry',
  description: '*Fighter*',
  universal: false,
  actions: [
    {
      name: 'Dueling Parry',
      description:
        '**Requirements** You are wielding a single one-handed melee weapon and hold nothing else in your hands\n\nYou can parry attacks against you with your one-handed weapon. You gain a +2 circumstance bonus to [AC](characteristic:armor-class) until the start of your next turn as long as you continue to meet the requirements.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DuelingParry = Traits.defineTrait('feat/dueling-parry', {
  name: 'Dueling Parry',
  description:
    '*Fighter*\n\n**Requirements** You are wielding a single one-handed melee weapon and hold nothing else in your hands\n\nYou can parry attacks against you with your one-handed weapon. You gain a +2 circumstance bonus to [AC](characteristic:armor-class) until the start of your next turn as long as you continue to meet the requirements.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(DuelingParryAction)],
})

export const IntimidatingStrikeAction = Abilities.defineAbility('feat/intimidating-strike/action', {
  name: 'Intimidating Strike',
  description: '*Barbarian, Emotion, Fear, Fighter, Mental*',
  universal: false,
  actions: [
    {
      name: 'Intimidating Strike',
      description:
        'Your blow not only wounds creatures but also shatters their confidence. Make a melee [Strike](content:playing-the-game/strike). If you hit and deal damage, the target is [frightened](content:conditions/frightened) 1, or frightened 2 on a critical hit.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const IntimidatingStrike = Traits.defineTrait('feat/intimidating-strike', {
  name: 'Intimidating Strike',
  description:
    '*Barbarian, Emotion, Fear, Fighter, Mental*\n\nYour blow not only wounds creatures but also shatters their confidence. Make a melee [Strike](content:playing-the-game/strike). If you hit and deal damage, the target is [frightened](content:conditions/frightened) 1, or frightened 2 on a critical hit.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(IntimidatingStrikeAction)],
})

export const LightningSwapAction = Abilities.defineAbility('feat/lightning-swap/action', {
  name: 'Lightning Swap',
  description: '*Exemplar, Fighter, Flourish*',
  universal: false,
  actions: [
    {
      name: 'Lightning Swap',
      description:
        '**Archetype** Hellbreaker (Level 2)\n\nYou have practiced quickly switching between combat styles and the equipment needed for them. You [Interact](content:playing-the-game/interact) to stow any number of items from your hands, then draw up to two weapons or a shield and a weapon.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const LightningSwap = Traits.defineTrait('feat/lightning-swap', {
  name: 'Lightning Swap',
  description:
    '*Exemplar, Fighter, Flourish*\n\n**Archetype** Hellbreaker (Level 2)\n\nYou have practiced quickly switching between combat styles and the equipment needed for them. You [Interact](content:playing-the-game/interact) to stow any number of items from your hands, then draw up to two weapons or a shield and a weapon.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(LightningSwapAction)],
})

export const LungeAction = Abilities.defineAbility('feat/lunge/action', {
  name: 'Lunge',
  description: '*Fighter*',
  universal: false,
  actions: [
    {
      name: 'Lunge',
      description:
        '**Archetype** Thlipit Contestant (Level 4)\n\n**Requirements** You are wielding a melee weapon\n\nYou attack an enemy at the edge of your reach. Make a [Strike](content:playing-the-game/strike) with a melee weapon, increasing your reach by 5 feet for that Strike. If the weapon has the disarm, shove, or trip trait, you can use the corresponding action instead of a Strike.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const Lunge = Traits.defineTrait('feat/lunge', {
  name: 'Lunge',
  description:
    '*Fighter*\n\n**Archetype** Thlipit Contestant (Level 4)\n\n**Requirements** You are wielding a melee weapon\n\nYou attack an enemy at the edge of your reach. Make a [Strike](content:playing-the-game/strike) with a melee weapon, increasing your reach by 5 feet for that Strike. If the weapon has the disarm, shove, or trip trait, you can use the corresponding action instead of a Strike.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(LungeAction)],
})

export const ReboundingTossAction = Abilities.defineAbility('feat/rebounding-toss/action', {
  name: 'Rebounding Toss',
  description: '*Fighter, Flourish*',
  universal: false,
  actions: [
    {
      name: 'Rebounding Toss',
      description:
        '**Requirements** You are wielding a thrown weapon\n\nYou bounce your weapon off one foe to strike another. Make a ranged [Strike](content:playing-the-game/strike) with a thrown weapon. If this Strike hits, the weapon rebounds toward an enemy within 10 feet of the original target. Make an additional Strike against this second target. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both attacks.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const ReboundingToss = Traits.defineTrait('feat/rebounding-toss', {
  name: 'Rebounding Toss',
  description:
    '*Fighter, Flourish*\n\n**Requirements** You are wielding a thrown weapon\n\nYou bounce your weapon off one foe to strike another. Make a ranged [Strike](content:playing-the-game/strike) with a thrown weapon. If this Strike hits, the weapon rebounds toward an enemy within 10 feet of the original target. Make an additional Strike against this second target. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both attacks.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(ReboundingTossAction)],
})

export const SleekRepositionAction = Abilities.defineAbility('feat/sleek-reposition/action', {
  name: 'Sleek Reposition',
  description: '*Fighter, Press*',
  universal: false,
  actions: [
    {
      name: 'Sleek Reposition',
      description:
        '**Requirements** You are wielding a finesse weapon or polearm\n\nWhile your opponent is still recovering from your prior attack, you snag its armor, clothing, or flesh to move it as you please. Make a melee [Strike](content:playing-the-game/strike) with a finesse weapon or polearm. If you hit a target that is your size or smaller, you can automatically [Reposition](content:skills/reposition) it, with the same benefits as the Reposition action (including the critical success effect, if your Strike was a critical hit). If you used a weapon with reach, use the weapon’s reach for this Reposition.\n\nThis Strike has the following failure effect.\n\n**Failure** The target becomes [off-guard](content:conditions/off-guard) until the end of your current turn.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const SleekReposition = Traits.defineTrait('feat/sleek-reposition', {
  name: 'Sleek Reposition',
  description:
    '*Fighter, Press*\n\n**Requirements** You are wielding a finesse weapon or polearm\n\nWhile your opponent is still recovering from your prior attack, you snag its armor, clothing, or flesh to move it as you please. Make a melee [Strike](content:playing-the-game/strike) with a finesse weapon or polearm. If you hit a target that is your size or smaller, you can automatically [Reposition](content:skills/reposition) it, with the same benefits as the Reposition action (including the critical success effect, if your Strike was a critical hit). If you used a weapon with reach, use the weapon’s reach for this Reposition.\n\nThis Strike has the following failure effect.\n\n**Failure** The target becomes [off-guard](content:conditions/off-guard) until the end of your current turn.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [Effects.gainAbility(SleekRepositionAction)],
})

export const BarrelingChargeAction = Abilities.defineAbility('feat/barreling-charge/action', {
  name: 'Barreling Charge',
  description: '*Barbarian, Fighter, Flourish*',
  universal: false,
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  actions: [
    {
      name: 'Barreling Charge',
      description:
        '**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou rush forward, moving enemies aside to reach your foe. You [Stride](content:playing-the-game/stride), attempting to move through your enemies’ spaces. Roll an [Athletics](characteristic:skill/athletics) check and compare the result to the [Fortitude](characteristic:fortitude) DC of each creature whose space you attempt to move through during your Stride, moving through its space on a success but ending your movement before entering its space on a failure. You can then [Strike](content:playing-the-game/strike), regardless of how your Stride ended. You can use Barreling Charge to [Burrow](content:playing-the-game/burrow), [Climb](content:skills/climb), [Fly](content:playing-the-game/fly), or [Swim](content:skills/swim) instead of Stride if you have the corresponding movement type.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const BarrelingCharge = Traits.defineTrait('feat/barreling-charge', {
  name: 'Barreling Charge',
  description:
    '*Barbarian, Fighter, Flourish*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou rush forward, moving enemies aside to reach your foe. You [Stride](content:playing-the-game/stride), attempting to move through your enemies’ spaces. Roll an [Athletics](characteristic:skill/athletics) check and compare the result to the [Fortitude](characteristic:fortitude) DC of each creature whose space you attempt to move through during your Stride, moving through its space on a success but ending your movement before entering its space on a failure. You can then [Strike](content:playing-the-game/strike), regardless of how your Stride ended. You can use Barreling Charge to [Burrow](content:playing-the-game/burrow), [Climb](content:skills/climb), [Fly](content:playing-the-game/fly), or [Swim](content:skills/swim) instead of Stride if you have the corresponding movement type.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [Effects.gainAbility(BarrelingChargeAction)],
})

export const DoubleShotAction = Abilities.defineAbility('feat/double-shot/action', {
  name: 'Double Shot',
  description: '*Fighter, Flourish*',
  universal: false,
  actions: [
    {
      name: 'Double Shot',
      description:
        '**Requirements** You are wielding a ranged weapon with reload 0\n\nYou shoot twice in blindingly fast succession. Make two Strikes, each against a separate target and with a –2 penalty. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both of them.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DoubleShot = Traits.defineTrait('feat/double-shot', {
  name: 'Double Shot',
  description:
    '*Fighter, Flourish*\n\n**Requirements** You are wielding a ranged weapon with reload 0\n\nYou shoot twice in blindingly fast succession. Make two Strikes, each against a separate target and with a –2 penalty. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both of them.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [Effects.gainAbility(DoubleShotAction)],
})

export const DualHandedAssaultAction = Abilities.defineAbility('feat/dual-handed-assault/action', {
  name: 'Dual-Handed Assault',
  description: '*Fighter, Flourish*',
  universal: false,
  actions: [
    {
      name: 'Dual-Handed Assault',
      description:
        '**Requirements** You are wielding a one-handed melee weapon and have a free hand\n\nYou snap your free hand over to grip your weapon just long enough to add momentum and deliver a more powerful blow to your opponent. Make a [Strike](content:playing-the-game/strike) with the required weapon. You quickly switch your grip during the Strike in order to make the attack with two hands. If the weapon doesn’t normally have the two-hand trait, increase its weapon damage die by one step for this attack. (Rules on increasing die size appear on page 276.) If the weapon has the two-hand trait, you gain the benefit of that trait and a circumstance bonus to damage equal to the weapon’s number of damage dice. When the Strike is complete, you resume gripping the weapon with only one hand. This action doesn’t end any stance or fighter feat effect that requires you to have one hand free.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DualHandedAssault = Traits.defineTrait('feat/dual-handed-assault', {
  name: 'Dual-Handed Assault',
  description:
    '*Fighter, Flourish*\n\n**Requirements** You are wielding a one-handed melee weapon and have a free hand\n\nYou snap your free hand over to grip your weapon just long enough to add momentum and deliver a more powerful blow to your opponent. Make a [Strike](content:playing-the-game/strike) with the required weapon. You quickly switch your grip during the Strike in order to make the attack with two hands. If the weapon doesn’t normally have the two-hand trait, increase its weapon damage die by one step for this attack. (Rules on increasing die size appear on page 276.) If the weapon has the two-hand trait, you gain the benefit of that trait and a circumstance bonus to damage equal to the weapon’s number of damage dice. When the Strike is complete, you resume gripping the weapon with only one hand. This action doesn’t end any stance or fighter feat effect that requires you to have one hand free.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [Effects.gainAbility(DualHandedAssaultAction)],
})

export const PartingShotAction = Abilities.defineAbility('feat/parting-shot/action', {
  name: 'Parting Shot',
  description: '*Fighter*',
  universal: false,
  actions: [
    {
      name: 'Parting Shot',
      description:
        '**Requirements** You are wielding a loaded ranged weapon or a ranged weapon with reload 0\n\nYou jump back and make a quick shot that catches your opponent by surprise. You [Step](content:playing-the-game/step) and then make a ranged [Strike](content:playing-the-game/strike) with the required weapon. Your target is [off-guard](content:conditions/off-guard) against the attack.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const PartingShot = Traits.defineTrait('feat/parting-shot', {
  name: 'Parting Shot',
  description:
    '*Fighter*\n\n**Requirements** You are wielding a loaded ranged weapon or a ranged weapon with reload 0\n\nYou jump back and make a quick shot that catches your opponent by surprise. You [Step](content:playing-the-game/step) and then make a ranged [Strike](content:playing-the-game/strike) with the required weapon. Your target is [off-guard](content:conditions/off-guard) against the attack.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [Effects.gainAbility(PartingShotAction)],
})

export const PowerfulShove = Traits.defineTrait('feat/powerful-shove', {
  name: 'Powerful Shove',
  description:
    '*Fighter*\n\n**Prerequisites** [Aggressive Block](trait:feat/aggressive-block) or [Brutish Shove](trait:feat/brutish-shove)\n\nYou can push larger foes around with your attack. You can use Aggressive Block or Brutish [Shove](content:skills/shove) against a creature up to two sizes larger than you.\n\nWhen a creature you Shove or knock back with a shield, polearm, or club’s critical specialization effect has to stop moving because it would hit an object, it takes damage equal to your [Strength modifier](characteristic:strength) (minimum 1).',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(AggressiveBlock), Traits.traitPrerequisite(BrutishShove)])],
  effects: [],
})

export const QuickReversalAction = Abilities.defineAbility('feat/quick-reversal/action', {
  name: 'Quick Reversal',
  description: '*Fighter, Flourish, Press*',
  universal: false,
  actions: [
    {
      name: 'Quick Reversal',
      description:
        '**Requirements** You are flanked by at least two enemies\n\nYou turn your foes’ flanking against them with a quick reverse. Make a melee [Strike](content:playing-the-game/strike) against one of the flanking enemies and make a second Strike with the same weapon or unarmed attack against a different enemy that is flanking you. This second Strike has the same multiple attack penalty of the initial attack and doesn’t count toward your multiple attack penalty.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const QuickReversal = Traits.defineTrait('feat/quick-reversal', {
  name: 'Quick Reversal',
  description:
    '*Fighter, Flourish, Press*\n\n**Requirements** You are flanked by at least two enemies\n\nYou turn your foes’ flanking against them with a quick reverse. Make a melee [Strike](content:playing-the-game/strike) against one of the flanking enemies and make a second Strike with the same weapon or unarmed attack against a different enemy that is flanking you. This second Strike has the same multiple attack penalty of the initial attack and doesn’t count toward your multiple attack penalty.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [Effects.gainAbility(QuickReversalAction)],
})

export const ShieldedStride = Traits.defineTrait('feat/shielded-stride', {
  name: 'Shielded Stride',
  description:
    '*Fighter*\n\nWhen your shield is up, your enemies’ blows can’t touch you. When you have your shield raised, you can [Stride](content:playing-the-game/stride) to move half your [Speed](characteristic:speed) without triggering reactions that are triggered by your movement (such as Reactive Strikes). You can use Shielded Stride while Flying or Swimming instead of Striding if you have the corresponding movement type.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [],
})

export const SlamDownAction = Abilities.defineAbility('feat/slam-down/action', {
  name: 'Slam Down',
  description: '*Fighter, Flourish*',
  universal: false,
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  actions: [
    {
      name: 'Slam Down',
      description:
        '**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou make an attack to knock a foe off balance, then follow up immediately with a sweep to topple them. Make a melee [Strike](content:playing-the-game/strike). If it hits and deals damage, you can attempt an Athletics check to [Trip](content:skills/trip) the creature you hit. If you’re wielding a two-handed melee weapon, you can ignore Trip’s requirement that you have a hand free. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both of them.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const SlamDown = Traits.defineTrait('feat/slam-down', {
  name: 'Slam Down',
  description:
    '*Fighter, Flourish*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou make an attack to knock a foe off balance, then follow up immediately with a sweep to topple them. Make a melee [Strike](content:playing-the-game/strike). If it hits and deals damage, you can attempt an Athletics check to [Trip](content:skills/trip) the creature you hit. If you’re wielding a two-handed melee weapon, you can ignore Trip’s requirement that you have a hand free. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both of them.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [Effects.gainAbility(SlamDownAction)],
})

export const SwipeAction = Abilities.defineAbility('feat/swipe/action', {
  name: 'Swipe',
  description: '*Barbarian, Fighter, Flourish*',
  universal: false,
  actions: [
    {
      name: 'Swipe',
      description:
        'You make a wide, arcing swing. Make a melee [Strike](content:playing-the-game/strike) and compare the attack roll result to the [AC](characteristic:armor-class) of up to two foes, each of whom must be within your melee reach and adjacent to each other. Roll damage only once and apply it to each creature you hit. A Swipe counts as two attacks for your multiple attack penalty.\n\nIf you’re using a weapon with the sweep trait, its modifier applies to all your Swipe attacks.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Swipe = Traits.defineTrait('feat/swipe', {
  name: 'Swipe',
  description:
    '*Barbarian, Fighter, Flourish*\n\nYou make a wide, arcing swing. Make a melee [Strike](content:playing-the-game/strike) and compare the attack roll result to the [AC](characteristic:armor-class) of up to two foes, each of whom must be within your melee reach and adjacent to each other. Roll damage only once and apply it to each creature you hit. A Swipe counts as two attacks for your multiple attack penalty.\n\nIf you’re using a weapon with the sweep trait, its modifier applies to all your Swipe attacks.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [Effects.gainAbility(SwipeAction)],
})

export const TwinParryAction = Abilities.defineAbility('feat/twin-parry/action', {
  name: 'Twin Parry',
  description: '*Fighter, Ranger*',
  universal: false,
  actions: [
    {
      name: 'Twin Parry',
      description:
        '**Requirements** You are wielding two melee weapons, one in each hand\n\nYou use your two weapons to parry attacks. You gain a +1 circumstance bonus to [AC](characteristic:armor-class) until the start of your next turn, or a +2 circumstance bonus if either weapon has the parry trait. You lose this circumstance bonus if you no longer meet this feat’s requirement.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const TwinParry = Traits.defineTrait('feat/twin-parry', {
  name: 'Twin Parry',
  description:
    '*Fighter, Ranger*\n\n**Requirements** You are wielding two melee weapons, one in each hand\n\nYou use your two weapons to parry attacks. You gain a +1 circumstance bonus to [AC](characteristic:armor-class) until the start of your next turn, or a +2 circumstance bonus if either weapon has the parry trait. You lose this circumstance bonus if you no longer meet this feat’s requirement.',
  tags: [Feat, ClassFeat, FighterFeat, RangerFeat, FeatLevel4],
  effects: [Effects.gainAbility(TwinParryAction)],
})

export const AdvancedWeaponTraining = Traits.defineTrait('feat/advanced-weapon-training', {
  name: 'Advanced Weapon Training',
  description:
    '*Fighter*\n\nYou’ve studied the art of wielding an advanced weapon. Choose a weapon group. You gain proficiency with all advanced weapons in that group as if they were martial weapons of their weapon group.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  effects: [],
})

export const AdvantageousAssaultAction = Abilities.defineAbility('feat/advantageous-assault/action', {
  name: 'Advantageous Assault',
  description: '*Fighter, Press*',
  universal: false,
  actions: [
    {
      name: 'Advantageous Assault',
      description:
        "After compromising your enemy’s movement, you deliver a more deadly blow. Make a [Strike](content:playing-the-game/strike) against a creature that is [grabbed](content:conditions/grabbed), [prone](content:conditions/prone), or [restrained](content:conditions/restrained). You gain a circumstance bonus to damage on this Strike equal to the number of weapon damage dice, or that number + 2 if you’re wielding the weapon in two hands. The Strike gains the following failure effect.\n\n**Failure** You deal damage to the target equal to the number of weapon damage dice, or that number + 2 if you're wielding the weapon in two hands. This damage has the same damage type as the weapon.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const AdvantageousAssault = Traits.defineTrait('feat/advantageous-assault', {
  name: 'Advantageous Assault',
  description:
    "*Fighter, Press*\n\nAfter compromising your enemy’s movement, you deliver a more deadly blow. Make a [Strike](content:playing-the-game/strike) against a creature that is [grabbed](content:conditions/grabbed), [prone](content:conditions/prone), or [restrained](content:conditions/restrained). You gain a circumstance bonus to damage on this Strike equal to the number of weapon damage dice, or that number + 2 if you’re wielding the weapon in two hands. The Strike gains the following failure effect.\n\n**Failure** You deal damage to the target equal to the number of weapon damage dice, or that number + 2 if you're wielding the weapon in two hands. This damage has the same damage type as the weapon.",
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  effects: [Effects.gainAbility(AdvantageousAssaultAction)],
})

export const DazingBlowAction = Abilities.defineAbility('feat/dazing-blow/action', {
  name: 'Dazing Blow',
  description: '*Fighter, Press*',
  universal: false,
  actions: [
    {
      name: 'Dazing Blow',
      description:
        '**Requirements** You have a creature [grabbed](content:conditions/grabbed)\n\nYou pummel a held foe, hoping to stagger them. Make a melee [Strike](content:playing-the-game/strike) against a creature you have grabbed. The weapon damage from this Strike is bludgeoning damage. If the Strike hits, the creature must attempt a [Fortitude](characteristic:fortitude) save against your [class DC](characteristic:class-dc); this is an incapacitation effect.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature is [stunned 1](content:conditions/stunned).\n\n**Failure** The creature is stunned 2.\n\n**Critical Failure** The creature is stunned 3.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DazingBlow = Traits.defineTrait('feat/dazing-blow', {
  name: 'Dazing Blow',
  description:
    '*Fighter, Press*\n\n**Requirements** You have a creature [grabbed](content:conditions/grabbed)\n\nYou pummel a held foe, hoping to stagger them. Make a melee [Strike](content:playing-the-game/strike) against a creature you have grabbed. The weapon damage from this Strike is bludgeoning damage. If the Strike hits, the creature must attempt a [Fortitude](characteristic:fortitude) save against your [class DC](characteristic:class-dc); this is an incapacitation effect.\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature is [stunned 1](content:conditions/stunned).\n\n**Failure** The creature is stunned 2.\n\n**Critical Failure** The creature is stunned 3.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  effects: [Effects.gainAbility(DazingBlowAction)],
})

export const DisarmingStanceAction = Abilities.defineAbility('feat/disarming-stance/action', {
  name: 'Disarming Stance',
  description: '*Fighter, Stance*',
  universal: false,
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  actions: [
    {
      name: 'Disarming Stance',
      description:
        '**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\n**Requirements** You are wielding a single one-handed melee weapon and hold nothing else in your hands\n\nYou adopt a fencing stance that improves your control over your weapon. While you are in this stance, you gain a +1 circumstance bonus to Athletics checks to [Disarm](content:skills/disarm) and a +2 circumstance bonus to your [Reflex](characteristic:reflex) DC when defending against checks to Disarm you. In addition, you can attempt to Disarm creatures up to two sizes larger than you.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DisarmingStance = Traits.defineTrait('feat/disarming-stance', {
  name: 'Disarming Stance',
  description:
    '*Fighter, Stance*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\n**Requirements** You are wielding a single one-handed melee weapon and hold nothing else in your hands\n\nYou adopt a fencing stance that improves your control over your weapon. While you are in this stance, you gain a +1 circumstance bonus to Athletics checks to [Disarm](content:skills/disarm) and a +2 circumstance bonus to your [Reflex](characteristic:reflex) DC when defending against checks to Disarm you. In addition, you can attempt to Disarm creatures up to two sizes larger than you.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [Effects.gainAbility(DisarmingStanceAction)],
})

export const FuriousFocus = Traits.defineTrait('feat/furious-focus', {
  name: 'Furious Focus',
  description:
    '*Fighter*\n\n**Prerequisites** [Vicious Swing](trait:feat/vicious-swing)\n\nYou’ve learned to maintain your balance even when swinging furiously. When you make a Vicious Swing with a melee weapon you’re wielding in two hands, it counts as one attack toward your multiple attack penalty instead of two.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(ViciousSwing)],
  effects: [],
})

export const GuardiansDeflectionAction = Abilities.defineAbility('feat/guardians-deflection/action', {
  name: "Guardian's Deflection",
  description: '*Fighter*',
  universal: false,
  actions: [
    {
      name: "Guardian's Deflection",
      description:
        '**Trigger** An ally within your melee reach is hit by an attack, you can see the attacker, and the ally gaining a +2 circumstance bonus to [AC](characteristic:armor-class) would turn the critical hit into a hit or the hit into a miss\n\n**Requirements** You are wielding a single one-handed melee weapon and hold nothing else in your hands.\n\nYou use your weapon to deflect the attack against your ally, granting a +2 circumstance bonus to their Armor Class against the triggering attack. This turns the triggering critical hit into a hit, or the triggering hit into a miss.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const GuardiansDeflection = Traits.defineTrait('feat/guardians-deflection', {
  name: "Guardian's Deflection",
  description:
    '*Fighter*\n\n**Trigger** An ally within your melee reach is hit by an attack, you can see the attacker, and the ally gaining a +2 circumstance bonus to [AC](characteristic:armor-class) would turn the critical hit into a hit or the hit into a miss\n\n**Requirements** You are wielding a single one-handed melee weapon and hold nothing else in your hands.\n\nYou use your weapon to deflect the attack against your ally, granting a +2 circumstance bonus to their Armor Class against the triggering attack. This turns the triggering critical hit into a hit, or the triggering hit into a miss.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  effects: [Effects.gainAbility(GuardiansDeflectionAction)],
})

export const ReflexiveShield = Traits.defineTrait('feat/reflexive-shield', {
  name: 'Reflexive Shield',
  description:
    '*Fighter, Guardian*\n\nYou can use your shield to fend off explosions and the like. When you Raise your Shield, you gain your shield’s circumstance bonus to [Reflex](characteristic:reflex) saves.\n\n**Special** If you have the Shield Block reaction, damage you take as a result of a Reflex save can trigger that reaction, even if the damage isn’t physical damage.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  effects: [],
})

export const RevealingStabAction = Abilities.defineAbility('feat/revealing-stab/action', {
  name: 'Revealing Stab',
  description: '*Fighter*',
  universal: false,
  actions: [
    {
      name: 'Revealing Stab',
      description:
        '**Requirements** You are wielding a melee weapon that can deal piercing damage\n\nYou drive your piercing weapon into an imperceptible foe, revealing its location to your allies. Make a [Strike](content:playing-the-game/strike) with a piercing melee weapon. If the target is concealed, you don’t need to attempt a flat check to target it, and if it’s hidden, the DC of the flat check to target it is 5. If you hit and deal damage, you can drive the weapon you attacked with into the target (if it’s corporeal), revealing its current position. You Release the weapon, and it becomes lodged in the target. If the target is concealed, no flat check is needed to target it, and if it’s hidden, the DC of the flat check to target it is 5, and the creature can’t become undetected. These benefits apply only for observers who can see your weapon stuck in the target. If the target is invisible, the weapon remains visible while lodged in it.\n\nThis benefit lasts until the weapon is removed from the creature. An adjacent creature or the target can remove the weapon with two [Interact](content:playing-the-game/interact) actions.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const RevealingStab = Traits.defineTrait('feat/revealing-stab', {
  name: 'Revealing Stab',
  description:
    '*Fighter*\n\n**Requirements** You are wielding a melee weapon that can deal piercing damage\n\nYou drive your piercing weapon into an imperceptible foe, revealing its location to your allies. Make a [Strike](content:playing-the-game/strike) with a piercing melee weapon. If the target is concealed, you don’t need to attempt a flat check to target it, and if it’s hidden, the DC of the flat check to target it is 5. If you hit and deal damage, you can drive the weapon you attacked with into the target (if it’s corporeal), revealing its current position. You Release the weapon, and it becomes lodged in the target. If the target is concealed, no flat check is needed to target it, and if it’s hidden, the DC of the flat check to target it is 5, and the creature can’t become undetected. These benefits apply only for observers who can see your weapon stuck in the target. If the target is invisible, the weapon remains visible while lodged in it.\n\nThis benefit lasts until the weapon is removed from the creature. An adjacent creature or the target can remove the weapon with two [Interact](content:playing-the-game/interact) actions.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  effects: [Effects.gainAbility(RevealingStabAction)],
})

export const RicochetStanceAction = Abilities.defineAbility('feat/ricochet-stance/action', {
  name: 'Ricochet Stance',
  description: '*Fighter, Stance*',
  universal: false,
  actions: [
    {
      name: 'Ricochet Stance',
      description:
        'You adopt a stance to rebound your thrown weapons toward you. While you are in this stance, any thrown weapons you use as part of a ranged [Strike](content:playing-the-game/strike) to deal bludgeoning or slashing damage immediately return to your hand, enabling you to use them for additional Strikes. You must be within the weapon’s listed range increment and have a hand free to catch the weapon. If you make a ranged Strike with a thrown weapon outside of its listed range increment, it instead flies back toward you a number of feet equal to its listed range increment and then falls to the ground.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const RicochetStance = Traits.defineTrait('feat/ricochet-stance', {
  name: 'Ricochet Stance',
  description:
    '*Fighter, Stance*\n\nYou adopt a stance to rebound your thrown weapons toward you. While you are in this stance, any thrown weapons you use as part of a ranged [Strike](content:playing-the-game/strike) to deal bludgeoning or slashing damage immediately return to your hand, enabling you to use them for additional Strikes. You must be within the weapon’s listed range increment and have a hand free to catch the weapon. If you make a ranged Strike with a thrown weapon outside of its listed range increment, it instead flies back toward you a number of feet equal to its listed range increment and then falls to the ground.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  effects: [Effects.gainAbility(RicochetStanceAction)],
})

export const ShatterDefensesAction = Abilities.defineAbility('feat/shatter-defenses/action', {
  name: 'Shatter Defenses',
  description: '*Fighter, Press*',
  universal: false,
  actions: [
    {
      name: 'Shatter Defenses',
      description:
        '**Requirements** A [frightened](content:conditions/frightened) creature is in your melee reach\n\nYour offense exploits your enemy’s fear. Make a melee [Strike](content:playing-the-game/strike) against a frightened creature. If you hit and deal damage, the target becomes [off-guard](content:conditions/off-guard) until its frightened condition ends. If the target was already off-guard to you when you damaged it with this Strike, it can’t reduce its frightened value below 1 until the start of your next turn.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const ShatterDefenses = Traits.defineTrait('feat/shatter-defenses', {
  name: 'Shatter Defenses',
  description:
    '*Fighter, Press*\n\n**Requirements** A [frightened](content:conditions/frightened) creature is in your melee reach\n\nYour offense exploits your enemy’s fear. Make a melee [Strike](content:playing-the-game/strike) against a frightened creature. If you hit and deal damage, the target becomes [off-guard](content:conditions/off-guard) until its frightened condition ends. If the target was already off-guard to you when you damaged it with this Strike, it can’t reduce its frightened value below 1 until the start of your next turn.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  effects: [Effects.gainAbility(ShatterDefensesAction)],
})

export const ShieldWarden = Traits.defineTrait('feat/shield-warden', {
  name: 'Shield Warden',
  description:
    '*Champion, Commander, Fighter*\n\n**Prerequisites** [Shield Block](trait:feat/shield-block)\n\nWhen you have a shield raised, you can use your Shield Block reaction when an attack is made against an ally adjacent to you. If you do, the shield prevents that ally from taking damage instead of preventing you from taking damage, following the normal rules for Shield Block.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(ShieldBlock)],
  effects: [],
})

export const TripleShot = Traits.defineTrait('feat/triple-shot', {
  name: 'Triple Shot',
  description:
    '*Fighter*\n\n**Prerequisites** [Double Shot](trait:feat/double-shot)\n\nYou can quickly fire multiple shots with greater control. When you use Double Shot, you can make the attacks against the same target. You can add an additional action to Double Shot to make three ranged Strikes instead of two. If you do, the penalty is –4. All attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made all of them.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(DoubleShot)],
  effects: [],
})

export const BlindFight = Traits.defineTrait('feat/blind-fight', {
  name: 'Blind-Fight',
  description:
    '*Fighter, Investigator, Ranger, Rogue*\n\n**Prerequisites** master in [Perception](characteristic:perception)\n\nYour battle instincts make you more aware of concealed and invisible opponents. You don’t need to succeed at a flat check to target concealed creatures. You’re not [off-guard](content:conditions/off-guard) to creatures that are hidden from you (unless you’re off-guard to them for reasons other than the hidden condition), and you need only a successful DC 5 flat check to target a hidden creature.\n\nWhile you’re adjacent to an undetected creature of your level or lower, it is instead only hidden from you',
  tags: [Feat, ClassFeat, FighterFeat, RangerFeat, RogueFeat, FeatLevel8],
  effects: [],
})

export const DisorientingOpening = Traits.defineTrait('feat/disorienting-opening', {
  name: 'Disorienting Opening',
  description:
    '*Fighter*\n\n**Prerequisites** [Reactive Strike](content:playing-the-game/reactive-strike)\n\nYou use your foes’ openings to expose even greater weaknesses. When you hit a creature as part of a Reactive [Strike](content:playing-the-game/strike), that creature becomes [off-guard](content:conditions/off-guard) until the start of your next turn.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel8],
  effects: [],
})

export const DuelingRiposteAction = Abilities.defineAbility('feat/dueling-riposte/action', {
  name: 'Dueling Riposte',
  description: '*Fighter*',
  universal: false,
  prerequisites: [Traits.traitPrerequisite(DuelingParry)],
  actions: [
    {
      name: 'Dueling Riposte',
      description:
        '**Prerequisites** Dueling Parry (Fighter)\n\n**Trigger** A creature within your reach critically fails a [Strike](content:playing-the-game/strike) against you\n\n**Requirements** You are benefiting from Dueling Parry\n\nYou elegantly counterattack against your flailing enemy. Make a melee Strike against or attempt to [Disarm](content:skills/disarm) the triggering creature.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const DuelingRiposte = Traits.defineTrait('feat/dueling-riposte', {
  name: 'Dueling Riposte',
  description:
    '*Fighter*\n\n**Prerequisites** Dueling Parry (Fighter)\n\n**Trigger** A creature within your reach critically fails a [Strike](content:playing-the-game/strike) against you\n\n**Requirements** You are benefiting from Dueling Parry\n\nYou elegantly counterattack against your flailing enemy. Make a melee Strike against or attempt to [Disarm](content:skills/disarm) the triggering creature.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(DuelingParry)],
  effects: [Effects.gainAbility(DuelingRiposteAction)],
})

export const FellingStrikeAction = Abilities.defineAbility('feat/felling-strike/action', {
  name: 'Felling Strike',
  description: '*Fighter*',
  universal: false,
  actions: [
    {
      name: 'Felling Strike',
      description:
        'Your attack can ground an airborne foe. Make a [Strike](content:playing-the-game/strike). If it hits and deals damage to a flying target, the target falls up to 120 feet. The fall is gradual enough that if it causes the target to hit the ground, the target takes no damage from the fall.\n\nIf the attack is a critical hit, the target can’t Fly, [Leap](content:playing-the-game/leap), levitate, or otherwise leave the ground until the end of your next turn.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const FellingStrike = Traits.defineTrait('feat/felling-strike', {
  name: 'Felling Strike',
  description:
    '*Fighter*\n\nYour attack can ground an airborne foe. Make a [Strike](content:playing-the-game/strike). If it hits and deals damage to a flying target, the target falls up to 120 feet. The fall is gradual enough that if it causes the target to hit the ground, the target takes no damage from the fall.\n\nIf the attack is a critical hit, the target can’t Fly, [Leap](content:playing-the-game/leap), levitate, or otherwise leave the ground until the end of your next turn.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel8],
  effects: [Effects.gainAbility(FellingStrikeAction)],
})

export const IncredibleAimAction = Abilities.defineAbility('feat/incredible-aim/action', {
  name: 'Incredible Aim',
  description: '*Concentrate, Fighter*',
  universal: false,
  actions: [
    {
      name: 'Incredible Aim',
      description:
        'By spending a moment to focus, you can ensure your attack strikes true. Make a ranged weapon [Strike](content:playing-the-game/strike). On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore the target’s concealed condition.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const IncredibleAim = Traits.defineTrait('feat/incredible-aim', {
  name: 'Incredible Aim',
  description:
    '*Concentrate, Fighter*\n\nBy spending a moment to focus, you can ensure your attack strikes true. Make a ranged weapon [Strike](content:playing-the-game/strike). On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore the target’s concealed condition.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel8],
  effects: [Effects.gainAbility(IncredibleAimAction)],
})

export const MobileShotStanceAction = Abilities.defineAbility('feat/mobile-shot-stance/action', {
  name: 'Mobile Shot Stance',
  description: '*Fighter, Stance*',
  universal: false,
  actions: [
    {
      name: 'Mobile Shot Stance',
      description:
        'Your shots become nimble and deadly. While you’re in this stance, your ranged Strikes don’t trigger Reactive [Strike](content:playing-the-game/strike) or other reactions that are triggered by a ranged attack.\n\n**Special** If you have Reactive Strike, you can use it with a loaded ranged weapon you’re wielding. The triggering creature must be within 5 feet of you for you to do so.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const MobileShotStance = Traits.defineTrait('feat/mobile-shot-stance', {
  name: 'Mobile Shot Stance',
  description:
    '*Fighter, Stance*\n\nYour shots become nimble and deadly. While you’re in this stance, your ranged Strikes don’t trigger Reactive [Strike](content:playing-the-game/strike) or other reactions that are triggered by a ranged attack.\n\n**Special** If you have Reactive Strike, you can use it with a loaded ranged weapon you’re wielding. The triggering creature must be within 5 feet of you for you to do so.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel8],
  effects: [Effects.gainAbility(MobileShotStanceAction)],
})

export const PositioningAssaultAction = Abilities.defineAbility('feat/positioning-assault/action', {
  name: 'Positioning Assault',
  description: '*Fighter, Flourish*',
  universal: false,
  actions: [
    {
      name: 'Positioning Assault',
      description:
        '**Requirements** You are wielding a two-handed melee weapon and your target is within your reach\n\nWith punishing blows, you force your opponent into position. Make a [Strike](content:playing-the-game/strike) with the required weapon. If you hit, you [Reposition](content:skills/reposition) the target 5 feet.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const PositioningAssault = Traits.defineTrait('feat/positioning-assault', {
  name: 'Positioning Assault',
  description:
    '*Fighter, Flourish*\n\n**Requirements** You are wielding a two-handed melee weapon and your target is within your reach\n\nWith punishing blows, you force your opponent into position. Make a [Strike](content:playing-the-game/strike) with the required weapon. If you hit, you [Reposition](content:skills/reposition) the target 5 feet.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel8],
  effects: [Effects.gainAbility(PositioningAssaultAction)],
})

export const QuickShieldBlock = Traits.defineTrait('feat/quick-shield-block', {
  name: 'Quick Shield Block',
  description:
    '*Champion, Fighter*\n\n**Prerequisites** [Shield Block](trait:feat/shield-block)\n\nYou can bring your shield into place with hardly a thought. At the start of each of your turns, you gain an additional reaction that you can use only to Shield Block.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(ShieldBlock)],
  effects: [],
})

export const ResoundingBravery = Traits.defineTrait('feat/resounding-bravery', {
  name: 'Resounding Bravery',
  description:
    '*Fighter*\n\n**Prerequisites** bravery\n\nEven your fears serve as fuel for your fighting spirit. When you critically succeed at a [Will save](characteristic:will) against a foe’s ability, you gain a +1 status bonus to saves and a number of temporary [Hit Points](characteristic:hit-points) equal to half your level for 1 minute. These benefits are doubled if you critically succeed against a fear effect.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel8],
  effects: [],
})

export const SuddenLeapAction = Abilities.defineAbility('feat/sudden-leap/action', {
  name: 'Sudden Leap',
  description: '*Barbarian, Fighter*',
  universal: false,
  actions: [
    {
      name: 'Sudden Leap',
      description:
        "You make an impressive leap and swing while you soar. Make a [Leap](content:playing-the-game/leap), [High Jump](content:skills/high-jump), or [Long Jump](content:skills/long-jump) and attempt one melee [Strike](content:playing-the-game/strike) at any point during your jump. Immediately after the Strike, you fall to the ground if you're in the air, even if you haven't reached the maximum distance of your jump. If the distance you fall is no more than the height of your jump, you take no damage and land upright.\n\nWhen attempting a High Jump or Long Jump during a Sudden Leap, determine the jump distance using Long Jump's rules, and change your maximum distance to double your [Speed](characteristic:speed).\n\n**Special** If you have Felling Strike, you can use Felling Strike instead of a normal Strike. This doesn’t change the number of actions Sudden Leap takes.",
      action: ActionTypes.TwoActions,
    },
  ],
})

export const SuddenLeap = Traits.defineTrait('feat/sudden-leap', {
  name: 'Sudden Leap',
  description:
    "*Barbarian, Fighter*\n\nYou make an impressive leap and swing while you soar. Make a [Leap](content:playing-the-game/leap), [High Jump](content:skills/high-jump), or [Long Jump](content:skills/long-jump) and attempt one melee [Strike](content:playing-the-game/strike) at any point during your jump. Immediately after the Strike, you fall to the ground if you're in the air, even if you haven't reached the maximum distance of your jump. If the distance you fall is no more than the height of your jump, you take no damage and land upright.\n\nWhen attempting a High Jump or Long Jump during a Sudden Leap, determine the jump distance using Long Jump's rules, and change your maximum distance to double your [Speed](characteristic:speed).\n\n**Special** If you have Felling Strike, you can use Felling Strike instead of a normal Strike. This doesn’t change the number of actions Sudden Leap takes.",
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel8],
  effects: [Effects.gainAbility(SuddenLeapAction)],
})

export const AgileGrace = Traits.defineTrait('feat/agile-grace', {
  name: 'Agile Grace',
  description:
    '*Fighter*\n\nYour graceful moves with agile weapons are beyond compare. Your multiple attack penalty with agile weapons and agile unarmed attacks becomes –3 for your second attack and –6 for subsequent attacks (rather than –4 and –8).',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  effects: [],
})

export const CertainStrikeAction = Abilities.defineAbility('feat/certain-strike/action', {
  name: 'Certain Strike',
  description: '*Fighter, Press*',
  universal: false,
  actions: [
    {
      name: 'Certain Strike',
      description:
        'Even when you don’t hit squarely, you can still score a glancing blow. Make a melee [Strike](content:playing-the-game/strike). It gains the following failure effect.\n\n**Failure** Your attack deals any damage it would have dealt on a hit, excluding all damage dice. (This removes damage dice from weapon runes, spells, and special abilities, in addition to weapon damage dice.)',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const CertainStrike = Traits.defineTrait('feat/certain-strike', {
  name: 'Certain Strike',
  description:
    '*Fighter, Press*\n\nEven when you don’t hit squarely, you can still score a glancing blow. Make a melee [Strike](content:playing-the-game/strike). It gains the following failure effect.\n\n**Failure** Your attack deals any damage it would have dealt on a hit, excluding all damage dice. (This removes damage dice from weapon runes, spells, and special abilities, in addition to weapon damage dice.)',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  effects: [Effects.gainAbility(CertainStrikeAction)],
})

export const CrashingSlam = Traits.defineTrait('feat/crashing-slam', {
  name: 'Crashing Slam',
  description:
    '*Fighter*\n\n**Prerequisites** [Slam Down](trait:feat/slam-down)\n\nYou can dash your foe to the ground with a single blow. When you use Slam Down, instead of making a [Strike](content:playing-the-game/strike) followed by a [Trip](content:skills/trip), you can attempt a single Strike. If the Strike you make with Slam Down hits, you can automatically get a critical success on your Trip instead of rolling a check. (Both the Strike and Trip still count toward your multiple attack penalty.) If you used a two-handed melee weapon for the Strike, you can use the weapon’s damage die size instead of the regular die size for the damage from a critical Trip.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(SlamDown)],
  effects: [],
})

export const CutFromTheAirAction = Abilities.defineAbility('feat/cut-from-the-air/action', {
  name: 'Cut from the Air',
  description: '*Fighter*',
  universal: false,
  actions: [
    {
      name: 'Cut from the Air',
      description:
        '**Trigger** You are the target of a physical ranged [Strike](content:playing-the-game/strike)\n\n**Requirements** You’re aware of the attack, not [off-guard](content:conditions/off-guard) against it, and either have a hand free or are wielding a melee weapon\n\nYou can knock aside ranged attacks. You gain a +4 circumstance bonus to [AC](characteristic:armor-class) against the triggering attack. If the attack misses, you knocked or cut it out of the air.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const CutFromTheAir = Traits.defineTrait('feat/cut-from-the-air', {
  name: 'Cut from the Air',
  description:
    '*Fighter*\n\n**Trigger** You are the target of a physical ranged [Strike](content:playing-the-game/strike)\n\n**Requirements** You’re aware of the attack, not [off-guard](content:conditions/off-guard) against it, and either have a hand free or are wielding a melee weapon\n\nYou can knock aside ranged attacks. You gain a +4 circumstance bonus to [AC](characteristic:armor-class) against the triggering attack. If the attack misses, you knocked or cut it out of the air.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  effects: [Effects.gainAbility(CutFromTheAirAction)],
})

export const DebilitatingShotAction = Abilities.defineAbility('feat/debilitating-shot/action', {
  name: 'Debilitating Shot',
  description: '*Fighter, Flourish*',
  universal: false,
  actions: [
    {
      name: 'Debilitating Shot',
      description:
        'Aiming for a weak point, you impede your foe with a precise shot. Make a ranged weapon [Strike](content:playing-the-game/strike). If it hits and deals damage, the target is [slowed](content:conditions/slowed) 1 until the end of its next turn.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DebilitatingShot = Traits.defineTrait('feat/debilitating-shot', {
  name: 'Debilitating Shot',
  description:
    '*Fighter, Flourish*\n\nAiming for a weak point, you impede your foe with a precise shot. Make a ranged weapon [Strike](content:playing-the-game/strike). If it hits and deals damage, the target is [slowed](content:conditions/slowed) 1 until the end of its next turn.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  effects: [Effects.gainAbility(DebilitatingShotAction)],
})

export const DisarmingTwistAction = Abilities.defineAbility('feat/disarming-twist/action', {
  name: 'Disarming Twist',
  description: '*Fighter, Press*',
  universal: false,
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  actions: [
    {
      name: 'Disarming Twist',
      description:
        '**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\n**Requirements** You are wielding a single one-handed melee weapon and hold nothing else in your hands\n\nAfter your initial attack redirects your foe’s defenses, your follow-up wrests their weapon from their grasp. Make a melee [Strike](content:playing-the-game/strike) with a one-handed melee weapon. In addition to its other effects, this Strike gains the success and critical success effects of the [Disarm](content:skills/disarm) action. The Strike also has the following failure effect.\n\n**Failure** The target becomes [off-guard](content:conditions/off-guard) until the end of your current turn.\n\n**Special** If you’re in Disarming Stance, you gain a +1 circumstance bonus to the attack roll.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DisarmingTwist = Traits.defineTrait('feat/disarming-twist', {
  name: 'Disarming Twist',
  description:
    '*Fighter, Press*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\n**Requirements** You are wielding a single one-handed melee weapon and hold nothing else in your hands\n\nAfter your initial attack redirects your foe’s defenses, your follow-up wrests their weapon from their grasp. Make a melee [Strike](content:playing-the-game/strike) with a one-handed melee weapon. In addition to its other effects, this Strike gains the success and critical success effects of the [Disarm](content:skills/disarm) action. The Strike also has the following failure effect.\n\n**Failure** The target becomes [off-guard](content:conditions/off-guard) until the end of your current turn.\n\n**Special** If you’re in Disarming Stance, you gain a +1 circumstance bonus to the attack roll.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [Effects.gainAbility(DisarmingTwistAction)],
})

export const DisruptiveStanceAction = Abilities.defineAbility('feat/disruptive-stance/action', {
  name: 'Disruptive Stance',
  description: '*Fighter, Stance*',
  universal: false,
  actions: [
    {
      name: 'Disruptive Stance',
      description:
        'The slightest distraction can provoke your wrath, and you’re prepared to foil enemies’ actions. As long as you are in this stance, you can use Reactive [Strike](content:playing-the-game/strike) when a creature within your reach uses a concentrate action, in addition to manipulate and move actions. Furthermore, you disrupt a triggering concentrate or manipulate action if your Strike hits (not only if it’s a critical hit).',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DisruptiveStance = Traits.defineTrait('feat/disruptive-stance', {
  name: 'Disruptive Stance',
  description:
    '*Fighter, Stance*\n\nThe slightest distraction can provoke your wrath, and you’re prepared to foil enemies’ actions. As long as you are in this stance, you can use Reactive [Strike](content:playing-the-game/strike) when a creature within your reach uses a concentrate action, in addition to manipulate and move actions. Furthermore, you disrupt a triggering concentrate or manipulate action if your Strike hits (not only if it’s a critical hit).',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  effects: [Effects.gainAbility(DisruptiveStanceAction)],
})

export const FearsomeBrute = Traits.defineTrait('feat/fearsome-brute', {
  name: 'Fearsome Brute',
  description:
    '*Fighter*\n\nFear makes your foes weak and more vulnerable to your attacks. You gain a circumstance bonus to damage rolls for Strikes against [frightened](content:conditions/frightened) creatures. The bonus is equal to double the target’s frightened value.\n\nIf you’re a master in [Intimidation](characteristic:skill/intimidation), increase the bonus to triple the target’s frightened value.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  effects: [],
})

export const FlingingChargeAction = Abilities.defineAbility('feat/flinging-charge/action', {
  name: 'Flinging Charge',
  description: '*Fighter, Flourish*',
  universal: false,
  actions: [
    {
      name: 'Flinging Charge',
      description:
        'You throw a weapon to distract your opponent as you close the gap to begin your assault. You [Stride](content:playing-the-game/stride) twice; at any point during this movement, you can make a ranged [Strike](content:playing-the-game/strike) with a thrown weapon. If the Strike hits, the target is [off-guard](content:conditions/off-guard) against the next melee attack that you attempt against it before the end of your current turn.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const FlingingCharge = Traits.defineTrait('feat/flinging-charge', {
  name: 'Flinging Charge',
  description:
    '*Fighter, Flourish*\n\nYou throw a weapon to distract your opponent as you close the gap to begin your assault. You [Stride](content:playing-the-game/stride) twice; at any point during this movement, you can make a ranged [Strike](content:playing-the-game/strike) with a thrown weapon. If the Strike hits, the target is [off-guard](content:conditions/off-guard) against the next melee attack that you attempt against it before the end of your current turn.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  effects: [Effects.gainAbility(FlingingChargeAction)],
})

export const MirrorShieldAction = Abilities.defineAbility('feat/mirror-shield/action', {
  name: 'Mirror Shield',
  description: '*Fighter*',
  universal: false,
  actions: [
    {
      name: 'Mirror Shield',
      description:
        '**Trigger** An opponent casting a spell that targets you critically fails a [spell attack roll](characteristic:spell-attack) against your [AC](characteristic:armor-class)\n\n**Requirements** You have a shield raised\n\nYou reflect the spell back against its caster. Make a ranged attack against the attacker using your highest proficiency with a ranged weapon. If you can cast spells, you can choose to make a spell attack roll instead. If you succeed, your opponent takes the effects of a successful spell attack roll for their own spell (or the effects of a critical success if your attack roll was a critical success).',
      action: ActionTypes.Reaction,
    },
  ],
})

export const MirrorShield = Traits.defineTrait('feat/mirror-shield', {
  name: 'Mirror Shield',
  description:
    '*Fighter*\n\n**Trigger** An opponent casting a spell that targets you critically fails a [spell attack roll](characteristic:spell-attack) against your [AC](characteristic:armor-class)\n\n**Requirements** You have a shield raised\n\nYou reflect the spell back against its caster. Make a ranged attack against the attacker using your highest proficiency with a ranged weapon. If you can cast spells, you can choose to make a spell attack roll instead. If you succeed, your opponent takes the effects of a successful spell attack roll for their own spell (or the effects of a critical success if your attack roll was a critical success).',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  effects: [Effects.gainAbility(MirrorShieldAction)],
})

export const OverpoweringCharge = Traits.defineTrait('feat/overpowering-charge', {
  name: 'Overpowering Charge',
  description:
    '*Barbarian, Fighter*\n\n**Prerequisites** [Barreling Charge](trait:feat/barreling-charge)\n\nYou trample foes as you charge past. When you use Barreling Charge and successfully move through a creature’s space, that creature takes bludgeoning damage equal to your [Strength modifier](characteristic:strength). On a critical success, the creature takes double damage and is [off-guard](content:conditions/off-guard) until the end of your next turn.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(BarrelingCharge)],
  effects: [],
})

export const TacticalReflexes = Traits.defineTrait('feat/tactical-reflexes', {
  name: 'Tactical Reflexes',
  description:
    '*Fighter*\n\nYou are particularly swift at punishing foes who leave you openings. At the start of each of your turns when you regain your actions, you gain an additional reaction that can be used only to make a Reactive [Strike](content:playing-the-game/strike).',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel10],
  effects: [],
})

export const TwinRiposteAction = Abilities.defineAbility('feat/twin-riposte/action', {
  name: 'Twin Riposte',
  description: '*Fighter, Ranger*',
  universal: false,
  actions: [
    {
      name: 'Twin Riposte',
      description:
        '**Trigger** A creature within your reach critically fails to [Strike](content:playing-the-game/strike) you\n\n**Requirements** You are benefiting from Twin Parry\n\nA clever parry with one weapon leaves your opponent open to an attack with the other weapon. Make a melee Strike or [Disarm](content:skills/disarm) action against the triggering opponent.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const TwinRiposte = Traits.defineTrait('feat/twin-riposte', {
  name: 'Twin Riposte',
  description:
    '*Fighter, Ranger*\n\n**Trigger** A creature within your reach critically fails to [Strike](content:playing-the-game/strike) you\n\n**Requirements** You are benefiting from Twin Parry\n\nA clever parry with one weapon leaves your opponent open to an attack with the other weapon. Make a melee Strike or [Disarm](content:skills/disarm) action against the triggering opponent.',
  tags: [Feat, ClassFeat, FighterFeat, RangerFeat, FeatLevel10],
  effects: [Effects.gainAbility(TwinRiposteAction)],
})

export const AllFighterFeatEntities = [
  CombatAssessment,
  CombatAssessmentAction,
  DoubleSlice,
  DoubleSliceAction,
  ExactingStrike,
  ExactingStrikeAction,
  PointBlankStance,
  PointBlankStanceAction,
  ReactiveShield,
  ReactiveShieldAction,
  SnaggingStrike,
  SnaggingStrikeAction,
  SuddenCharge,
  SuddenChargeAction,
  ViciousSwing,
  ViciousSwingAction,
  AggressiveBlock,
  AggressiveBlockAction,
  AssistingShot,
  AssistingShotAction,
  BladeBrake,
  BladeBrakeAction,
  BrutishShove,
  BrutishShoveAction,
  CombatGrab,
  CombatGrabAction,
  DuelingParry,
  DuelingParryAction,
  IntimidatingStrike,
  IntimidatingStrikeAction,
  LightningSwap,
  LightningSwapAction,
  Lunge,
  LungeAction,
  ReboundingToss,
  ReboundingTossAction,
  SleekReposition,
  SleekRepositionAction,
  BarrelingCharge,
  BarrelingChargeAction,
  DoubleShot,
  DoubleShotAction,
  DualHandedAssault,
  DualHandedAssaultAction,
  PartingShot,
  PartingShotAction,
  PowerfulShove,
  QuickReversal,
  QuickReversalAction,
  ShieldedStride,
  SlamDown,
  SlamDownAction,
  Swipe,
  SwipeAction,
  TwinParry,
  TwinParryAction,
  AdvancedWeaponTraining,
  AdvantageousAssault,
  AdvantageousAssaultAction,
  DazingBlow,
  DazingBlowAction,
  DisarmingStance,
  DisarmingStanceAction,
  FuriousFocus,
  GuardiansDeflection,
  GuardiansDeflectionAction,
  ReflexiveShield,
  RevealingStab,
  RevealingStabAction,
  RicochetStance,
  RicochetStanceAction,
  ShatterDefenses,
  ShatterDefensesAction,
  ShieldWarden,
  TripleShot,
  BlindFight,
  DisorientingOpening,
  DuelingRiposte,
  DuelingRiposteAction,
  FellingStrike,
  FellingStrikeAction,
  IncredibleAim,
  IncredibleAimAction,
  MobileShotStance,
  MobileShotStanceAction,
  PositioningAssault,
  PositioningAssaultAction,
  QuickShieldBlock,
  ResoundingBravery,
  SuddenLeap,
  SuddenLeapAction,
  AgileGrace,
  CertainStrike,
  CertainStrikeAction,
  CrashingSlam,
  CutFromTheAir,
  CutFromTheAirAction,
  DebilitatingShot,
  DebilitatingShotAction,
  DisarmingTwist,
  DisarmingTwistAction,
  DisruptiveStance,
  DisruptiveStanceAction,
  FearsomeBrute,
  FlingingCharge,
  FlingingChargeAction,
  MirrorShield,
  MirrorShieldAction,
  OverpoweringCharge,
  TacticalReflexes,
  TwinRiposte,
  TwinRiposteAction,
]
