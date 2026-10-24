import { Abilities, Traits } from '@simulacrum/ruleset'
import { Expressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Feat, ClassFeat, FighterFeat, RangerFeat, FeatLevel1, FeatLevel2, FeatLevel4 } from '@simulacrum/ruleset-pf2e/tag'
import { TrainedAthletics } from '@simulacrum/ruleset-pf2e/skill'

export const CombatAssessment = Traits.defineTrait('feat/combat-assessment', {
  name: 'Combat Assessment',
  description:
    '*Commander, Fighter*\n\nYou make a telegraphed attack to learn about your foe. Make a melee [Strike](content:playing-the-game/strike). On a hit, you can immediately attempt a check to [Recall Knowledge](content:skills/recall-knowledge) about the target. On a critical hit, you gain a +2 circumstance bonus to the check to Recall Knowledge. The target is temporarily immune to Combat Assessment for 1 day.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [],
})

export const CombatAssessmentAction = Abilities.defineAbility('feat/combat-assessment/action', {
  name: 'Combat Assessment',
  description: '*Commander, Fighter*',
  prerequisites: [Traits.traitPrerequisite(CombatAssessment)],
  actions: [
    {
      name: 'Combat Assessment',
      description:
        'You make a telegraphed attack to learn about your foe. Make a melee [Strike](content:playing-the-game/strike). On a hit, you can immediately attempt a check to [Recall Knowledge](content:skills/recall-knowledge) about the target. On a critical hit, you gain a +2 circumstance bonus to the check to Recall Knowledge. The target is temporarily immune to Combat Assessment for 1 day.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DoubleSlice = Traits.defineTrait('feat/double-slice', {
  name: 'Double Slice',
  description:
    '*Fighter*\n\n**Requirements** You are wielding two melee weapons, each in a different hand\n\nYou lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second [Strike](content:playing-the-game/strike) is made with a weapon that doesn’t have the agile trait, it takes a –2 penalty.\n\nIf both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [],
})

export const DoubleSliceAction = Abilities.defineAbility('feat/double-slice/action', {
  name: 'Double Slice',
  description: '*Fighter*',
  prerequisites: [Traits.traitPrerequisite(DoubleSlice)],
  actions: [
    {
      name: 'Double Slice',
      description:
        '**Requirements** You are wielding two melee weapons, each in a different hand\n\nYou lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second [Strike](content:playing-the-game/strike) is made with a weapon that doesn’t have the agile trait, it takes a –2 penalty.\n\nIf both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const ExactingStrike = Traits.defineTrait('feat/exacting-strike', {
  name: 'Exacting Strike',
  description:
    '*Fighter, Press*\n\nYou make a controlled follow-up attack, fully accounting for your momentum. Make a [Strike](content:playing-the-game/strike). The Strike gains the following failure effect.\n\n**Failure** This attack does not count toward your multiple attack penalty.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [],
})

export const ExactingStrikeAction = Abilities.defineAbility('feat/exacting-strike/action', {
  name: 'Exacting Strike',
  description: '*Fighter, Press*',
  prerequisites: [Traits.traitPrerequisite(ExactingStrike)],
  actions: [
    {
      name: 'Exacting Strike',
      description:
        'You make a controlled follow-up attack, fully accounting for your momentum. Make a [Strike](content:playing-the-game/strike). The Strike gains the following failure effect.\n\n**Failure** This attack does not count toward your multiple attack penalty.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const PointBlankStance = Traits.defineTrait('feat/point-blank-stance', {
  name: 'Point Blank Stance',
  description:
    '*Fighter, Stance*\n\n**Requirements** You are wielding a ranged weapon\n\nYou take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don’t take the penalty to your attack rolls from the volley trait. When using a ranged weapon that doesn’t have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon’s first range increment.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [],
})

export const PointBlankStanceAction = Abilities.defineAbility('feat/point-blank-stance/action', {
  name: 'Point Blank Stance',
  description: '*Fighter, Stance*',
  prerequisites: [Traits.traitPrerequisite(PointBlankStance)],
  actions: [
    {
      name: 'Point Blank Stance',
      description:
        '**Requirements** You are wielding a ranged weapon\n\nYou take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don’t take the penalty to your attack rolls from the volley trait. When using a ranged weapon that doesn’t have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon’s first range increment.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const ReactiveShield = Traits.defineTrait('feat/reactive-shield', {
  name: 'Reactive Shield',
  description:
    '*Fighter, Guardian*\n\n**Trigger** An enemy hits you with a melee [Strike](content:playing-the-game/strike)\n\n**Requirements** You are wielding a shield\n\nYou can snap your shield into place just as you would take a blow, avoiding the hit at the last second. You immediately use the [Raise a Shield](content:playing-the-game/raise-a-shield) action and gain your shield’s bonus to [AC](characteristic:armor-class). The circumstance bonus from the shield applies to your AC when you’re determining the outcome of the triggering attack.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [],
})

export const ReactiveShieldAction = Abilities.defineAbility('feat/reactive-shield/action', {
  name: 'Reactive Shield',
  description: '*Fighter, Guardian*',
  prerequisites: [Traits.traitPrerequisite(ReactiveShield)],
  actions: [
    {
      name: 'Reactive Shield',
      description:
        '**Trigger** An enemy hits you with a melee [Strike](content:playing-the-game/strike)\n\n**Requirements** You are wielding a shield\n\nYou can snap your shield into place just as you would take a blow, avoiding the hit at the last second. You immediately use the [Raise a Shield](content:playing-the-game/raise-a-shield) action and gain your shield’s bonus to [AC](characteristic:armor-class). The circumstance bonus from the shield applies to your AC when you’re determining the outcome of the triggering attack.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const SnaggingStrike = Traits.defineTrait('feat/snagging-strike', {
  name: 'Snagging Strike',
  description:
    '*Fighter*\n\n**Requirements** You have one hand free, and your target is within reach of that hand\n\nYou combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach. Make a [Strike](content:playing-the-game/strike) while keeping one hand free. If this Strike hits, the target is [off-guard](content:conditions/off-guard) until the start of your next turn or until it’s no longer within the reach of your hand, whichever comes first.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [],
})

export const SnaggingStrikeAction = Abilities.defineAbility('feat/snagging-strike/action', {
  name: 'Snagging Strike',
  description: '*Fighter*',
  prerequisites: [Traits.traitPrerequisite(SnaggingStrike)],
  actions: [
    {
      name: 'Snagging Strike',
      description:
        '**Requirements** You have one hand free, and your target is within reach of that hand\n\nYou combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach. Make a [Strike](content:playing-the-game/strike) while keeping one hand free. If this Strike hits, the target is [off-guard](content:conditions/off-guard) until the start of your next turn or until it’s no longer within the reach of your hand, whichever comes first.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const SuddenCharge = Traits.defineTrait('feat/sudden-charge', {
  name: 'Sudden Charge',
  description:
    '*Barbarian, Fighter, Flourish*\n\nWith a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee [Strike](content:playing-the-game/strike) against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [],
})

export const SuddenChargeAction = Abilities.defineAbility('feat/sudden-charge/action', {
  name: 'Sudden Charge',
  description: '*Barbarian, Fighter, Flourish*',
  prerequisites: [Traits.traitPrerequisite(SuddenCharge)],
  actions: [
    {
      name: 'Sudden Charge',
      description:
        'With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee [Strike](content:playing-the-game/strike) against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const ViciousSwing = Traits.defineTrait('feat/vicious-swing', {
  name: 'Vicious Swing',
  description:
    '*Fighter, Flourish*\n\nYou unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee [Strike](content:playing-the-game/strike). This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you’re at least 10th level, increase this to two extra dice, and if you’re at least 18th level, increase it to three extra dice.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel1],
  effects: [],
})

export const ViciousSwingAction = Abilities.defineAbility('feat/vicious-swing/action', {
  name: 'Vicious Swing',
  description: '*Fighter, Flourish*',
  prerequisites: [Traits.traitPrerequisite(ViciousSwing)],
  actions: [
    {
      name: 'Vicious Swing',
      description:
        'You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee [Strike](content:playing-the-game/strike). This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you’re at least 10th level, increase this to two extra dice, and if you’re at least 18th level, increase it to three extra dice.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const AggressiveBlock = Traits.defineTrait('feat/aggressive-block', {
  name: 'Aggressive Block',
  description:
    '*Fighter, Guardian*\n\n**Trigger** You use the Shield Block reaction, and the opponent that triggered Shield Block is adjacent to you and is your size or smaller\n\nYou push back as you block, knocking your foe away or off balance. You use your shield to push the triggering creature, either automatically Shoving it 5 feet or causing it to become [off-guard](content:conditions/off-guard) until the start of your next turn. The triggering creature chooses whether to be moved or become off-guard. If it chooses to be moved, you choose the direction. If the [Shove](content:skills/shove) would cause it to hit a solid object, enter a square of difficult terrain, or enter another creature’s space, it must become off-guard instead of being moved.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const AggressiveBlockAction = Abilities.defineAbility('feat/aggressive-block/action', {
  name: 'Aggressive Block',
  description: '*Fighter, Guardian*',
  prerequisites: [Traits.traitPrerequisite(AggressiveBlock)],
  actions: [
    {
      name: 'Aggressive Block',
      description:
        '**Trigger** You use the Shield Block reaction, and the opponent that triggered Shield Block is adjacent to you and is your size or smaller\n\nYou push back as you block, knocking your foe away or off balance. You use your shield to push the triggering creature, either automatically Shoving it 5 feet or causing it to become [off-guard](content:conditions/off-guard) until the start of your next turn. The triggering creature chooses whether to be moved or become off-guard. If it chooses to be moved, you choose the direction. If the [Shove](content:skills/shove) would cause it to hit a solid object, enter a square of difficult terrain, or enter another creature’s space, it must become off-guard instead of being moved.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const AssistingShot = Traits.defineTrait('feat/assisting-shot', {
  name: 'Assisting Shot',
  description:
    '*Fighter, Press*\n\n**Requirements** You are wielding a ranged weapon\n\nUsing your last shot to gauge your accuracy, you can fire off a quick shot to interfere with a foe in combat. Make a [Strike](content:playing-the-game/strike) with a ranged weapon. If the Strike hits, the next creature other than you to attack the same target before the start of your next turn gains a +1 circumstance bonus to their roll, or a +2 circumstance bonus if your Strike was a critical hit.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const AssistingShotAction = Abilities.defineAbility('feat/assisting-shot/action', {
  name: 'Assisting Shot',
  description: '*Fighter, Press*',
  prerequisites: [Traits.traitPrerequisite(AssistingShot)],
  actions: [
    {
      name: 'Assisting Shot',
      description:
        '**Requirements** You are wielding a ranged weapon\n\nUsing your last shot to gauge your accuracy, you can fire off a quick shot to interfere with a foe in combat. Make a [Strike](content:playing-the-game/strike) with a ranged weapon. If the Strike hits, the next creature other than you to attack the same target before the start of your next turn gains a +1 circumstance bonus to their roll, or a +2 circumstance bonus if your Strike was a critical hit.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const BladeBrake = Traits.defineTrait('feat/blade-brake', {
  name: 'Blade Brake',
  description:
    '*Fighter, Manipulate*\n\n**Trigger** You would be moved by a forced movement effect\n\n**Requirements** You are wielding a melee weapon and are within reach of a hard surface\n\nYou plow your weapon into a floor, wall, or another sturdy surface, anchoring yourself in place. If you would be moved 20 feet or more, you are moved only 5 feet. Otherwise, you don’t move at all.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const BladeBrakeAction = Abilities.defineAbility('feat/blade-brake/action', {
  name: 'Blade Brake',
  description: '*Fighter, Manipulate*',
  prerequisites: [Traits.traitPrerequisite(BladeBrake)],
  actions: [
    {
      name: 'Blade Brake',
      description:
        '**Trigger** You would be moved by a forced movement effect\n\n**Requirements** You are wielding a melee weapon and are within reach of a hard surface\n\nYou plow your weapon into a floor, wall, or another sturdy surface, anchoring yourself in place. If you would be moved 20 feet or more, you are moved only 5 feet. Otherwise, you don’t move at all.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const BrutishShove = Traits.defineTrait('feat/brutish-shove', {
  name: 'Brutish Shove',
  description:
    "*Fighter, Press*\n\n**Requirements** You are wielding a two-handed melee weapon\n\nUsing the momentum of your last attack to throw your weight into another, you make your opponent stumble back. Make a [Strike](content:playing-the-game/strike) with a two-handed melee weapon. If you hit a target that is your size or smaller, that creature is [off-guard](content:conditions/off-guard) until the end of your current turn, and you can automatically [Shove ](content:skills/shove)it, with the same benefits as the Shove action (including the critical success effect, if your Strike was a critical hit). If you move to follow the target, your movement doesn't trigger reactions. This Strike has the following failure effect.\n\n**Failure** The target becomes off-guard until the end of your current turn.",
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const BrutishShoveAction = Abilities.defineAbility('feat/brutish-shove/action', {
  name: 'Brutish Shove',
  description: '*Fighter, Press*',
  prerequisites: [Traits.traitPrerequisite(BrutishShove)],
  actions: [
    {
      name: 'Brutish Shove',
      description:
        "**Requirements** You are wielding a two-handed melee weapon\n\nUsing the momentum of your last attack to throw your weight into another, you make your opponent stumble back. Make a [Strike](content:playing-the-game/strike) with a two-handed melee weapon. If you hit a target that is your size or smaller, that creature is [off-guard](content:conditions/off-guard) until the end of your current turn, and you can automatically [Shove ](content:skills/shove)it, with the same benefits as the Shove action (including the critical success effect, if your Strike was a critical hit). If you move to follow the target, your movement doesn't trigger reactions. This Strike has the following failure effect.\n\n**Failure** The target becomes off-guard until the end of your current turn.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const CombatGrab = Traits.defineTrait('feat/combat-grab', {
  name: 'Combat Grab',
  description:
    '*Fighter, Press*\n\n**Requirements** You have one hand free, and your target is within reach of that hand\n\nUsing your prior attack to shift your opponent’s guard, you take another swing and grab them. Make a melee [Strike](content:playing-the-game/strike) while keeping one hand free. If the Strike hits, you grab the target using your free hand. The creature remains [grabbed](content:conditions/grabbed) until the end of your next turn or until it Escapes, whichever comes first.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const CombatGrabAction = Abilities.defineAbility('feat/combat-grab/action', {
  name: 'Combat Grab',
  description: '*Fighter, Press*',
  prerequisites: [Traits.traitPrerequisite(CombatGrab)],
  actions: [
    {
      name: 'Combat Grab',
      description:
        '**Requirements** You have one hand free, and your target is within reach of that hand\n\nUsing your prior attack to shift your opponent’s guard, you take another swing and grab them. Make a melee [Strike](content:playing-the-game/strike) while keeping one hand free. If the Strike hits, you grab the target using your free hand. The creature remains [grabbed](content:conditions/grabbed) until the end of your next turn or until it Escapes, whichever comes first.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const DuelingParry = Traits.defineTrait('feat/dueling-parry', {
  name: 'Dueling Parry',
  description:
    '*Fighter*\n\n**Requirements** You are wielding a single one-handed melee weapon and hold nothing else in your hands\n\nYou can parry attacks against you with your one-handed weapon. You gain a +2 circumstance bonus to [AC](characteristic:armor-class) until the start of your next turn as long as you continue to meet the requirements.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const DuelingParryAction = Abilities.defineAbility('feat/dueling-parry/action', {
  name: 'Dueling Parry',
  description: '*Fighter*',
  prerequisites: [Traits.traitPrerequisite(DuelingParry)],
  actions: [
    {
      name: 'Dueling Parry',
      description:
        '**Requirements** You are wielding a single one-handed melee weapon and hold nothing else in your hands\n\nYou can parry attacks against you with your one-handed weapon. You gain a +2 circumstance bonus to [AC](characteristic:armor-class) until the start of your next turn as long as you continue to meet the requirements.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const IntimidatingStrike = Traits.defineTrait('feat/intimidating-strike', {
  name: 'Intimidating Strike',
  description:
    '*Barbarian, Emotion, Fear, Fighter, Mental*\n\nYour blow not only wounds creatures but also shatters their confidence. Make a melee [Strike](content:playing-the-game/strike). If you hit and deal damage, the target is [frightened](content:conditions/frightened) 1, or frightened 2 on a critical hit.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const IntimidatingStrikeAction = Abilities.defineAbility('feat/intimidating-strike/action', {
  name: 'Intimidating Strike',
  description: '*Barbarian, Emotion, Fear, Fighter, Mental*',
  prerequisites: [Traits.traitPrerequisite(IntimidatingStrike)],
  actions: [
    {
      name: 'Intimidating Strike',
      description:
        'Your blow not only wounds creatures but also shatters their confidence. Make a melee [Strike](content:playing-the-game/strike). If you hit and deal damage, the target is [frightened](content:conditions/frightened) 1, or frightened 2 on a critical hit.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const LightningSwap = Traits.defineTrait('feat/lightning-swap', {
  name: 'Lightning Swap',
  description:
    '*Exemplar, Fighter, Flourish*\n\n**Archetype** Hellbreaker (Level 2)\n\nYou have practiced quickly switching between combat styles and the equipment needed for them. You [Interact](content:playing-the-game/interact) to stow any number of items from your hands, then draw up to two weapons or a shield and a weapon.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const LightningSwapAction = Abilities.defineAbility('feat/lightning-swap/action', {
  name: 'Lightning Swap',
  description: '*Exemplar, Fighter, Flourish*',
  prerequisites: [Traits.traitPrerequisite(LightningSwap)],
  actions: [
    {
      name: 'Lightning Swap',
      description:
        '**Archetype** Hellbreaker (Level 2)\n\nYou have practiced quickly switching between combat styles and the equipment needed for them. You [Interact](content:playing-the-game/interact) to stow any number of items from your hands, then draw up to two weapons or a shield and a weapon.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const Lunge = Traits.defineTrait('feat/lunge', {
  name: 'Lunge',
  description:
    '*Fighter*\n\n**Archetype** Thlipit Contestant (Level 4)\n\n**Requirements** You are wielding a melee weapon\n\nYou attack an enemy at the edge of your reach. Make a [Strike](content:playing-the-game/strike) with a melee weapon, increasing your reach by 5 feet for that Strike. If the weapon has the disarm, shove, or trip trait, you can use the corresponding action instead of a Strike.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const LungeAction = Abilities.defineAbility('feat/lunge/action', {
  name: 'Lunge',
  description: '*Fighter*',
  prerequisites: [Traits.traitPrerequisite(Lunge)],
  actions: [
    {
      name: 'Lunge',
      description:
        '**Archetype** Thlipit Contestant (Level 4)\n\n**Requirements** You are wielding a melee weapon\n\nYou attack an enemy at the edge of your reach. Make a [Strike](content:playing-the-game/strike) with a melee weapon, increasing your reach by 5 feet for that Strike. If the weapon has the disarm, shove, or trip trait, you can use the corresponding action instead of a Strike.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const ReboundingToss = Traits.defineTrait('feat/rebounding-toss', {
  name: 'Rebounding Toss',
  description:
    '*Fighter, Flourish*\n\n**Requirements** You are wielding a thrown weapon\n\nYou bounce your weapon off one foe to strike another. Make a ranged [Strike](content:playing-the-game/strike) with a thrown weapon. If this Strike hits, the weapon rebounds toward an enemy within 10 feet of the original target. Make an additional Strike against this second target. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both attacks.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const ReboundingTossAction = Abilities.defineAbility('feat/rebounding-toss/action', {
  name: 'Rebounding Toss',
  description: '*Fighter, Flourish*',
  prerequisites: [Traits.traitPrerequisite(ReboundingToss)],
  actions: [
    {
      name: 'Rebounding Toss',
      description:
        '**Requirements** You are wielding a thrown weapon\n\nYou bounce your weapon off one foe to strike another. Make a ranged [Strike](content:playing-the-game/strike) with a thrown weapon. If this Strike hits, the weapon rebounds toward an enemy within 10 feet of the original target. Make an additional Strike against this second target. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both attacks.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const SleekReposition = Traits.defineTrait('feat/sleek-reposition', {
  name: 'Sleek Reposition',
  description:
    '*Fighter, Press*\n\n**Requirements** You are wielding a finesse weapon or polearm\n\nWhile your opponent is still recovering from your prior attack, you snag its armor, clothing, or flesh to move it as you please. Make a melee [Strike](content:playing-the-game/strike) with a finesse weapon or polearm. If you hit a target that is your size or smaller, you can automatically [Reposition](content:skills/reposition) it, with the same benefits as the Reposition action (including the critical success effect, if your Strike was a critical hit). If you used a weapon with reach, use the weapon’s reach for this Reposition.\n\nThis Strike has the following failure effect.\n\n**Failure** The target becomes [off-guard](content:conditions/off-guard) until the end of your current turn.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel2],
  effects: [],
})

export const SleekRepositionAction = Abilities.defineAbility('feat/sleek-reposition/action', {
  name: 'Sleek Reposition',
  description: '*Fighter, Press*',
  prerequisites: [Traits.traitPrerequisite(SleekReposition)],
  actions: [
    {
      name: 'Sleek Reposition',
      description:
        '**Requirements** You are wielding a finesse weapon or polearm\n\nWhile your opponent is still recovering from your prior attack, you snag its armor, clothing, or flesh to move it as you please. Make a melee [Strike](content:playing-the-game/strike) with a finesse weapon or polearm. If you hit a target that is your size or smaller, you can automatically [Reposition](content:skills/reposition) it, with the same benefits as the Reposition action (including the critical success effect, if your Strike was a critical hit). If you used a weapon with reach, use the weapon’s reach for this Reposition.\n\nThis Strike has the following failure effect.\n\n**Failure** The target becomes [off-guard](content:conditions/off-guard) until the end of your current turn.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const BarrelingCharge = Traits.defineTrait('feat/barreling-charge', {
  name: 'Barreling Charge',
  description:
    '*Barbarian, Fighter, Flourish*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou rush forward, moving enemies aside to reach your foe. You [Stride](content:playing-the-game/stride), attempting to move through your enemies’ spaces. Roll an [Athletics](characteristic:skill/athletics) check and compare the result to the [Fortitude](characteristic:fortitude) DC of each creature whose space you attempt to move through during your Stride, moving through its space on a success but ending your movement before entering its space on a failure. You can then [Strike](content:playing-the-game/strike), regardless of how your Stride ended. You can use Barreling Charge to [Burrow](content:playing-the-game/burrow), [Climb](content:skills/climb), [Fly](content:playing-the-game/fly), or [Swim](content:skills/swim) instead of Stride if you have the corresponding movement type.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [],
})

export const BarrelingChargeAction = Abilities.defineAbility('feat/barreling-charge/action', {
  name: 'Barreling Charge',
  description: '*Barbarian, Fighter, Flourish*',
  prerequisites: [Traits.traitPrerequisite(BarrelingCharge)],
  actions: [
    {
      name: 'Barreling Charge',
      description:
        '**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou rush forward, moving enemies aside to reach your foe. You [Stride](content:playing-the-game/stride), attempting to move through your enemies’ spaces. Roll an [Athletics](characteristic:skill/athletics) check and compare the result to the [Fortitude](characteristic:fortitude) DC of each creature whose space you attempt to move through during your Stride, moving through its space on a success but ending your movement before entering its space on a failure. You can then [Strike](content:playing-the-game/strike), regardless of how your Stride ended. You can use Barreling Charge to [Burrow](content:playing-the-game/burrow), [Climb](content:skills/climb), [Fly](content:playing-the-game/fly), or [Swim](content:skills/swim) instead of Stride if you have the corresponding movement type.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DoubleShot = Traits.defineTrait('feat/double-shot', {
  name: 'Double Shot',
  description:
    '*Fighter, Flourish*\n\n**Requirements** You are wielding a ranged weapon with reload 0\n\nYou shoot twice in blindingly fast succession. Make two Strikes, each against a separate target and with a –2 penalty. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both of them.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [],
})

export const DoubleShotAction = Abilities.defineAbility('feat/double-shot/action', {
  name: 'Double Shot',
  description: '*Fighter, Flourish*',
  prerequisites: [Traits.traitPrerequisite(DoubleShot)],
  actions: [
    {
      name: 'Double Shot',
      description:
        '**Requirements** You are wielding a ranged weapon with reload 0\n\nYou shoot twice in blindingly fast succession. Make two Strikes, each against a separate target and with a –2 penalty. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both of them.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const DualHandedAssault = Traits.defineTrait('feat/dual-handed-assault', {
  name: 'Dual-Handed Assault',
  description:
    '*Fighter, Flourish*\n\n**Requirements** You are wielding a one-handed melee weapon and have a free hand\n\nYou snap your free hand over to grip your weapon just long enough to add momentum and deliver a more powerful blow to your opponent. Make a [Strike](content:playing-the-game/strike) with the required weapon. You quickly switch your grip during the Strike in order to make the attack with two hands. If the weapon doesn’t normally have the two-hand trait, increase its weapon damage die by one step for this attack. (Rules on increasing die size appear on page 276.) If the weapon has the two-hand trait, you gain the benefit of that trait and a circumstance bonus to damage equal to the weapon’s number of damage dice. When the Strike is complete, you resume gripping the weapon with only one hand. This action doesn’t end any stance or fighter feat effect that requires you to have one hand free.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [],
})

export const DualHandedAssaultAction = Abilities.defineAbility('feat/dual-handed-assault/action', {
  name: 'Dual-Handed Assault',
  description: '*Fighter, Flourish*',
  prerequisites: [Traits.traitPrerequisite(DualHandedAssault)],
  actions: [
    {
      name: 'Dual-Handed Assault',
      description:
        '**Requirements** You are wielding a one-handed melee weapon and have a free hand\n\nYou snap your free hand over to grip your weapon just long enough to add momentum and deliver a more powerful blow to your opponent. Make a [Strike](content:playing-the-game/strike) with the required weapon. You quickly switch your grip during the Strike in order to make the attack with two hands. If the weapon doesn’t normally have the two-hand trait, increase its weapon damage die by one step for this attack. (Rules on increasing die size appear on page 276.) If the weapon has the two-hand trait, you gain the benefit of that trait and a circumstance bonus to damage equal to the weapon’s number of damage dice. When the Strike is complete, you resume gripping the weapon with only one hand. This action doesn’t end any stance or fighter feat effect that requires you to have one hand free.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const PartingShot = Traits.defineTrait('feat/parting-shot', {
  name: 'Parting Shot',
  description:
    '*Fighter*\n\n**Requirements** You are wielding a loaded ranged weapon or a ranged weapon with reload 0\n\nYou jump back and make a quick shot that catches your opponent by surprise. You [Step](content:playing-the-game/step) and then make a ranged [Strike](content:playing-the-game/strike) with the required weapon. Your target is [off-guard](content:conditions/off-guard) against the attack.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [],
})

export const PartingShotAction = Abilities.defineAbility('feat/parting-shot/action', {
  name: 'Parting Shot',
  description: '*Fighter*',
  prerequisites: [Traits.traitPrerequisite(PartingShot)],
  actions: [
    {
      name: 'Parting Shot',
      description:
        '**Requirements** You are wielding a loaded ranged weapon or a ranged weapon with reload 0\n\nYou jump back and make a quick shot that catches your opponent by surprise. You [Step](content:playing-the-game/step) and then make a ranged [Strike](content:playing-the-game/strike) with the required weapon. Your target is [off-guard](content:conditions/off-guard) against the attack.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const PowerfulShove = Traits.defineTrait('feat/powerful-shove', {
  name: 'Powerful Shove',
  description:
    '*Fighter*\n\n**Prerequisites** [Aggressive Block](trait:feat/aggressive-block) or [Brutish Shove](trait:feat/brutish-shove)\n\nYou can push larger foes around with your attack. You can use Aggressive Block or Brutish [Shove](content:skills/shove) against a creature up to two sizes larger than you.\n\nWhen a creature you Shove or knock back with a shield, polearm, or club’s critical specialization effect has to stop moving because it would hit an object, it takes damage equal to your [Strength modifier](characteristic:strength) (minimum 1).',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(AggressiveBlock), Traits.traitPrerequisite(BrutishShove)])],
  effects: [],
})

export const QuickReversal = Traits.defineTrait('feat/quick-reversal', {
  name: 'Quick Reversal',
  description:
    '*Fighter, Flourish, Press*\n\n**Requirements** You are flanked by at least two enemies\n\nYou turn your foes’ flanking against them with a quick reverse. Make a melee [Strike](content:playing-the-game/strike) against one of the flanking enemies and make a second Strike with the same weapon or unarmed attack against a different enemy that is flanking you. This second Strike has the same multiple attack penalty of the initial attack and doesn’t count toward your multiple attack penalty.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [],
})

export const QuickReversalAction = Abilities.defineAbility('feat/quick-reversal/action', {
  name: 'Quick Reversal',
  description: '*Fighter, Flourish, Press*',
  prerequisites: [Traits.traitPrerequisite(QuickReversal)],
  actions: [
    {
      name: 'Quick Reversal',
      description:
        '**Requirements** You are flanked by at least two enemies\n\nYou turn your foes’ flanking against them with a quick reverse. Make a melee [Strike](content:playing-the-game/strike) against one of the flanking enemies and make a second Strike with the same weapon or unarmed attack against a different enemy that is flanking you. This second Strike has the same multiple attack penalty of the initial attack and doesn’t count toward your multiple attack penalty.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const ShieldedStride = Traits.defineTrait('feat/shielded-stride', {
  name: 'Shielded Stride',
  description:
    '*Fighter*\n\nWhen your shield is up, your enemies’ blows can’t touch you. When you have your shield raised, you can [Stride](content:playing-the-game/stride) to move half your [Speed](characteristic:speed) without triggering reactions that are triggered by your movement (such as Reactive Strikes). You can use Shielded Stride while Flying or Swimming instead of Striding if you have the corresponding movement type.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [],
})

export const SlamDown = Traits.defineTrait('feat/slam-down', {
  name: 'Slam Down',
  description:
    '*Fighter, Flourish*\n\n**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou make an attack to knock a foe off balance, then follow up immediately with a sweep to topple them. Make a melee [Strike](content:playing-the-game/strike). If it hits and deals damage, you can attempt an Athletics check to [Trip](content:skills/trip) the creature you hit. If you’re wielding a two-handed melee weapon, you can ignore Trip’s requirement that you have a hand free. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both of them.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(TrainedAthletics)],
  effects: [],
})

export const SlamDownAction = Abilities.defineAbility('feat/slam-down/action', {
  name: 'Slam Down',
  description: '*Fighter, Flourish*',
  prerequisites: [Traits.traitPrerequisite(SlamDown)],
  actions: [
    {
      name: 'Slam Down',
      description:
        '**Prerequisites** Trained in [Athletics](characteristic:skill/athletics)\n\nYou make an attack to knock a foe off balance, then follow up immediately with a sweep to topple them. Make a melee [Strike](content:playing-the-game/strike). If it hits and deals damage, you can attempt an Athletics check to [Trip](content:skills/trip) the creature you hit. If you’re wielding a two-handed melee weapon, you can ignore Trip’s requirement that you have a hand free. Both attacks count toward your multiple attack penalty, but the penalty doesn’t increase until after you’ve made both of them.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const Swipe = Traits.defineTrait('feat/swipe', {
  name: 'Swipe',
  description:
    '*Barbarian, Fighter, Flourish*\n\nYou make a wide, arcing swing. Make a melee [Strike](content:playing-the-game/strike) and compare the attack roll result to the [AC](characteristic:armor-class) of up to two foes, each of whom must be within your melee reach and adjacent to each other. Roll damage only once and apply it to each creature you hit. A Swipe counts as two attacks for your multiple attack penalty.\n\nIf you’re using a weapon with the sweep trait, its modifier applies to all your Swipe attacks.',
  tags: [Feat, ClassFeat, FighterFeat, FeatLevel4],
  effects: [],
})

export const SwipeAction = Abilities.defineAbility('feat/swipe/action', {
  name: 'Swipe',
  description: '*Barbarian, Fighter, Flourish*',
  prerequisites: [Traits.traitPrerequisite(Swipe)],
  actions: [
    {
      name: 'Swipe',
      description:
        'You make a wide, arcing swing. Make a melee [Strike](content:playing-the-game/strike) and compare the attack roll result to the [AC](characteristic:armor-class) of up to two foes, each of whom must be within your melee reach and adjacent to each other. Roll damage only once and apply it to each creature you hit. A Swipe counts as two attacks for your multiple attack penalty.\n\nIf you’re using a weapon with the sweep trait, its modifier applies to all your Swipe attacks.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const TwinParry = Traits.defineTrait('feat/twin-parry', {
  name: 'Twin Parry',
  description:
    '*Fighter, Ranger*\n\n**Requirements** You are wielding two melee weapons, one in each hand\n\nYou use your two weapons to parry attacks. You gain a +1 circumstance bonus to [AC](characteristic:armor-class) until the start of your next turn, or a +2 circumstance bonus if either weapon has the parry trait. You lose this circumstance bonus if you no longer meet this feat’s requirement.',
  tags: [Feat, ClassFeat, FighterFeat, RangerFeat, FeatLevel4],
  effects: [],
})

export const TwinParryAction = Abilities.defineAbility('feat/twin-parry/action', {
  name: 'Twin Parry',
  description: '*Fighter, Ranger*',
  prerequisites: [Traits.traitPrerequisite(TwinParry)],
  actions: [
    {
      name: 'Twin Parry',
      description:
        '**Requirements** You are wielding two melee weapons, one in each hand\n\nYou use your two weapons to parry attacks. You gain a +1 circumstance bonus to [AC](characteristic:armor-class) until the start of your next turn, or a +2 circumstance bonus if either weapon has the parry trait. You lose this circumstance bonus if you no longer meet this feat’s requirement.',
      action: ActionTypes.SingleAction,
    },
  ],
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
]
