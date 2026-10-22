import { Content } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'

export const Combat = Content.defineSection('combat', {
  content: {
    name: 'Combat',
    description: `This section covers the rules for running combat in Khydrian Drift, from the moment a fight breaks out to the moment the last combatant falls, flees, or surrenders. Whether it’s a firefight in a neon-lit alley, a boarding action on a drifting freighter, or a duel between augmented soldiers, every combat encounter uses the same framework.

Combat is organized into rounds and turns, as described in [The Order of Combat](content:combat/order-of-combat). On its turn, a creature moves using the rules in [Movement and Position](content:combat/movement-and-position) and acts using the options in [Major Actions in Combat](content:combat/major-actions). Attacks are resolved as described in [Making an Attack](content:combat/making-an-attack), and their consequences are covered by [Damage and Healing](content:combat/damage-and-healing) and [Conditions](content:combat/conditions).`,
  },
})

export const OrderOfCombat = Content.defineSection('combat/order-of-combat', {
  parent: Combat,
  content: {
    name: 'The Order of Combat',
    description: `A typical combat encounter is a clash between two sides. The game organizes the chaos of combat into a cycle of rounds and turns. A round represents about 6 seconds in the game world. During a round, each participant in a battle takes a [turn](content:combat/turn). The order of turns is determined at the beginning of a combat encounter, when everyone rolls [initiative](content:combat/initiative). Once everyone has taken a turn, the fight continues to the next round if neither side has defeated the other.

1. Establish positions. The GM decides where all the characters and creatures are located. Given the characters’ stated positions in the room or other location, the GM figures out where, how far away, and in what direction the adversaries are.

2. [Roll initiative](content:combat/initiative). Everyone involved in the combat encounter rolls initiative, determining the order of combatants’ turns. Anyone who is surprised when combat starts rolls with disadvantage.

3. Begin the round. Each participant in the battle takes a [turn](content:combat/turn) in initiative order.

4. End the round. When everyone involved in the combat has had a turn, the round ends. Repeat step 3 until the fighting stops.`,
  },
})

export const Initiative = Content.defineSection('combat/initiative', {
  parent: OrderOfCombat,
  content: {
    name: 'Initiative',
    description: `Initiative determines the order of [turns](content:combat/turn) during combat. When combat starts, every participant makes an [agility](content:characters/agility) check to determine their place in the initiative order. To speed up combat, the GM can make one roll for an entire group of identical creatures, so each member of the group acts at the same time.

The GM ranks the combatants in order from the one with the highest check total to the one with the lowest. This is the order (called the initiative order) in which they act during each round. The initiative order remains the same from round to round, unless modified by other circumstances such as new combatants arriving or abilities which alter the initiative ordering.

If a tie occurs, the GM decides the order among tied NPCs, and the players decide the order among their tied characters. The GM can decide the order if the tie is between an NPC and a player character.

The GM determines whether anyone involved in a combat encounter is surprised. A creature is typically surprised when it is caught in an ambush, or when it fails to notice an enemy before the fight starts, such as when the enemy’s [Stealth](characteristic:skill/stealth) beats the creature’s [Vigilance](characteristic:skill/vigilance).

A creature that is surprised when combat starts has disadvantage on its initiative check.`,
  },
})

export const Turn = Content.defineSection('combat/turn', {
  parent: OrderOfCombat,
  content: {
    name: 'Turn',
    description: `On a turn, a creature can move a distance up to its [movement speed](content:creatures/movement-speed), take one [major action](action-type:major-action), take one [minor action](action-type:minor-action), and take any number of [free actions](action-type:free-action).

It decides whether to move first or take its action first. Its speed, sometimes called walking speed, is noted in its statistics.

A creature can forgo moving, taking an action, or doing anything at all on its turn. If you can’t decide what to do on your turn, consider taking the [Dodge](content:combat/dodge) or [Ready](content:combat/ready) major action.

At the end of its turn, as long as it is able to take actions, a creature always takes the [sustain action](content:combat/sustain-phase). This typically involves replenishing its [soak pool](content:creatures/soak-points) and maintaining any ongoing effects.`,
  },
})

export const MajorAction = Content.linkEntity(Turn, ActionTypes.MajorAction)

export const MinorAction = Content.linkEntity(Turn, ActionTypes.MinorAction)

export const FreeAction = Content.linkEntity(Turn, ActionTypes.FreeAction)

export const ReactionAction = Content.linkEntity(Turn, ActionTypes.Reaction)

export const SustainPhase = Content.defineSection('combat/sustain-phase', {
  parent: Turn,
  content: {
    name: 'Sustain Phase',
    description: `You automatically take the sustain steps at the end of your turn.`,
  },
})

export const MovementAndPosition = Content.defineSection('combat/movement-and-position', {
  parent: Combat,
  content: {
    name: 'Movement and Position',
    description: `In combat, characters and creatures are in constant motion, often using movement and position to gain the upper hand.

On your turn, you can move a distance up to your speed. You can use as much or as little of your speed as you like on your turn, following the rules here.

Your movement can include jumping, [climbing](content:combat/climbing), [flying](content:combat/flying-movement), and swimming. These different modes of movement can be combined with walking, or they can constitute your entire move. However you’re moving, you deduct the distance of each part of your move from your speed until it is used up or until you are done moving.`,
  },
})

export const BreakingUpYourMove = Content.defineSection('combat/breaking-up-your-move', {
  parent: MovementAndPosition,
  content: {
    name: 'Breaking Up Your Move',
    description: `You can break up your movement on your turn, using some of your speed before and after your action. For example, if you have a speed of 6, you can move 2, take your action, and then move 4.

If you take an action that includes more than one weapon attack, you can break up your movement even further by moving between those attacks. For example, a Warblade who can make two attacks and who has a speed of 5 could move 2, make an attack, move 3 feet, and then attack again.`,
  },
})

export const UsingDifferentSpeeds = Content.defineSection('combat/using-different-speeds', {
  parent: MovementAndPosition,
  content: {
    name: 'Using Different Speeds',
    description: `If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move.

Whenever you switch, subtract the distance you’ve already moved from the new speed. The result determines how much farther you can move. If the result is 0 or less, you can’t use the new speed during the current move.

For example, if you have a speed of 6 and a flying speed of 12 because you have a jetpack, you could fly 4, then walk 2, and then leap into the air to fly 30 feet more.`,
  },
})

export const DifficultTerrain = Content.defineSection('combat/difficult-terrain', {
  parent: MovementAndPosition,
  content: {
    name: 'Difficult Terrain',
    description: `Combat rarely takes place in bare rooms or on featureless plains. Boulder-strewn caverns, briar-choked forests, treacherous staircases—the setting of a typical encounter contains difficult terrain.

Every square of movement in difficult terrain costs 1 extra square. This rule is true even if multiple things in a space count as difficult terrain.

Low furniture, rubble, undergrowth, steep stairs, snow, and shallow bogs are examples of difficult terrain. The space of another creature, whether hostile or not, also counts as difficult terrain.`,
  },
})

export const BeingProne = Content.defineSection('combat/being-prone', {
  parent: MovementAndPosition,
  content: {
    name: 'Being Prone',
    description: `Combatants often find themselves lying on the ground, either because they are knocked down or because they throw themselves down. In the game, they are Prone.

You can drop prone without using any of your speed. Standing up takes more effort; doing so costs an amount of movement equal to half your speed.

For example, if your speed is 6 moves, you must spend 3 moves to stand up. You can’t stand up if you don’t have enough moves left or if your speed is 0.

To move while prone, you must crawl or use magic such as teleportation. Every unit of movement while crawling costs 1 move. Crawling 1 unit in difficult terrain, therefore, costs 3 moves instead.`,
  },
})

export const InteractingWithObjects = Content.defineSection('combat/interacting-with-objects', {
  parent: MovementAndPosition,
  content: {
    name: 'Interacting with Objects Around You',
    description: `Here are a few examples of the sorts of things you can do in tandem with your movement and action:

- draw or sheathe a sword
- open or close a door
- withdraw a potion from your backpack
- pick up a dropped axe
- take a bauble from a table
- remove a ring from your finger
- stuff some food into your mouth
- plant a banner in the ground
- fish a few coins from your belt pouch
- drink all the ale in a flagon
- throw a lever or a switch
- pull a torch from a sconce
- take a book from a shelf you can reach
- extinguish a small flame
- don a mask
- pull the hood of your cloak up and over your head
- put your ear to a door
- kick a small stone
- turn a key in a lock
- tap the floor with a 10-foot pole
- hand an item to another character`,
  },
})

export const MovingAroundOtherCreatures = Content.defineSection('combat/moving-around-other-creatures', {
  parent: MovementAndPosition,
  content: {
    name: 'Moving Around Other Creatures',
    description: `You can move through a non hostile creature’s space. In contrast, you can move through a hostile creature’s space only if the creature is at least two sizes larger or smaller than you. Remember that another creature’s space is difficult terrain for you.

Whether a creature is a friend or an enemy, you can’t willingly end your move in its space.

If you leave a hostile creature’s reach during your move, you provoke an opportunity attack.`,
  },
})

export const Climbing = Content.defineSection('combat/climbing', {
  parent: MovementAndPosition,
  content: {
    name: 'Climbing',
    description: `While climbing, each square a creature moves costs 1 extra square of movement, unless it has a climbing speed. A creature with a climbing speed can use it to move up, down and across vertical surfaces without paying this extra cost.

Climbing a slippery surface, or one with few handholds, may require a successful [Athletics](characteristic:skill/athletics) check, as determined by the GM. If the check fails, the creature makes no progress, or falls if the GM decides the surface is dangerous enough.`,
  },
})

export const FlyingMovement = Content.defineSection('combat/flying-movement', {
  parent: MovementAndPosition,
  content: {
    name: 'Flying Movement',
    description: `Flying creatures enjoy many benefits of mobility, but they must also deal with the danger of falling. If a flying creature is knocked prone, has its speed reduced to 0, or is otherwise deprived of the ability to move, the creature falls, unless it has the ability to hover or it is being held aloft by magic, such as by the fly spell.`,
  },
})

export const Space = Content.defineSection('combat/space', {
  parent: MovementAndPosition,
  content: {
    name: 'Space',
    description: `A creature’s space is the area, in squares, that it effectively controls in combat, not an expression of its physical dimensions. A typical [Medium](content:creatures/medium) creature isn’t a full square wide, for example, but it does control a 1-square space. If a Medium security guard stands in a 1-square-wide doorway, other creatures can’t get through unless the guard lets them.

A creature’s space also reflects the area it needs to fight effectively. For that reason, there’s a limit to the number of creatures that can surround another creature in combat. Assuming Medium combatants, eight creatures can fit in the squares around another one.

Because larger creatures take up more space, fewer of them can surround a creature. If five [Large](content:creatures/large) creatures crowd around a Medium or smaller one, there’s little room for anyone else. In contrast, as many as twenty Medium creatures can surround a [Gargantuan](content:creatures/gargantuan) one.`,
  },
})

export const SqueezingIntoASmallerSpace = Content.defineSection('combat/squeezing-into-a-smaller-space', {
  parent: Space,
  content: {
    name: 'Squeezing into a Smaller Space',
    description: `A creature can squeeze through a space that is large enough for a creature one [size](content:creatures/size) smaller than it. Thus, a Large creature can squeeze through a passage that’s only 1 square wide. While squeezing through a space, each square the creature moves there costs 1 extra square of movement, and it has disadvantage on attack rolls. Attack rolls against the creature have advantage while it’s in the smaller space.`,
  },
})

export const MajorActions = Content.defineSection('combat/major-actions', {
  parent: Combat,
  content: {
    name: 'Major Actions in Combat',
    description: `When you take your major action on your turn, you can take one of the actions presented here, an action from one of your abilities, or an action that you improvise. Many monsters have action options of their own in their stat blocks.

When you describe an action not detailed elsewhere in the rules, the GM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure.`,
  },
})

export const BasicAttack = Content.defineSection('combat/basic-attack', {
  parent: MajorActions,
  content: {
    name: 'Basic Attack',
    description: `The most common action to take in combat is the Attack action, whether you are swinging a sword, firing an arrow from a bow, or brawling with your fists.With this action, you make one melee or ranged Attack. See the [Making an Attack](content:combat/making-an-attack) section for the rules that govern attacks.Certain abilities allow you to make more than one attack with this action.`,
  },
})

export const UseAnAbility = Content.defineSection('combat/use-an-ability', {
  parent: MajorActions,
  content: {
    name: 'Use an Ability',
    description: `Spellcasters such as wizards and clerics, as well as many Monsters, have access to Spells and can use them to great effect in combat. Each spell has a Casting Time, which specifies whether the caster must use an action, a Reaction, minutes, or even hours to cast the spell. Casting a Spell is, therefore, not necessarily an action. Most Spells do have a Casting Time of 1 action, so a spellcaster often uses his or her action in combat to cast such a spell.`,
  },
})

export const Dash = Content.defineSection('combat/dash', {
  parent: MajorActions,
  content: {
    name: 'Dash',
    description: `When you take the dash action, you gain extra movement for the current turn. The increase equals your speed, after applying any modifiers. With a speed of 4 squares, for example, you can move up to 8 squares on your turn if you dash.

Any increase or decrease to your speed changes this additional movement by the same amount. If your speed of 4 squares is reduced to 3 squares, for instance, you can move up to 6 squares this turn if you dash.`,
  },
})

export const Disengage = Content.defineSection('combat/disengage', {
  parent: MajorActions,
  content: {
    name: 'Disengage',
    description: `If you take the Disengage action, your Movement doesn’t provoke Opportunity Attacks for the rest of the turn.`,
  },
})

export const Dodge = Content.defineSection('combat/dodge', {
  parent: MajorActions,
  content: {
    name: 'Dodge',
    description: `When you take the Dodge action, you focus entirely on avoiding attacks. Until the start of your next turn, any Attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity Saving Throws with advantage. You lose this benefit if you are Incapacitated (as explained in [Conditions](content:combat/conditions)) or if your speed drops to 0.`,
  },
})

export const Help = Content.defineSection('combat/help', {
  parent: MajorActions,
  content: {
    name: 'Help',
    description: `You can lend your aid to another creature in the completion of a task. When you take the help action, the creature you aid gains advantage on the next ability check it makes to perform the task you are helping with, provided that it makes the check before the start of your next turn.

Alternatively, you can aid a friendly creature in attacking a creature within 5 feet of you. You feint, distract the target, or in some other way team up to make your ally’s attack more effective. If your ally attacks the target before your next turn, the first attack roll is made with advantage.`,
  },
})

export const Hide = Content.defineSection('combat/hide', {
  parent: MajorActions,
  content: {
    name: 'Hide',
    description: `When you take the Hide action, you make a Dexterity (Stealth) check in an attempt to hide, following the rules for Hiding. If you succeed, you gain certain benefits, as described in the [Unseen Attackers and Targets](content:combat/unseen-attackers-and-targets) section.`,
  },
})

export const Ready = Content.defineSection('combat/ready', {
  parent: MajorActions,
  content: {
    name: 'Ready',
    description: `Sometimes you want to get the jump on a foe or wait for a particular circumstance before you act. To do so, you can take the Ready action on Your Turn, which lets you act using your Reaction before the start of your next turn.

First, you decide what perceivable circumstance will trigger your Reaction. Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it. Examples include “If the Cultist steps on the trapdoor, I’ll pull the lever that opens it,” and “If the Goblin steps next to me, I move away.”

When the trigger occurs, you can either take your Reaction right after the trigger finishes or ignore the trigger. Remember that you can take only one Reaction per round.

When you ready a spell, you cast it as normal but hold its energy, which you release with your Reaction when the trigger occurs. To be readied, a spell must have a Casting Time of 1 action, and holding onto the spell’s magic requires Concentration. If your Concentration is broken, the spell dissipates without taking effect. For example, if you are concentrating on the *web* spell and ready *Magic Missile*, your *web* spell ends, and if you take damage before you release *Magic Missile* with your Reaction, your Concentration might be broken.`,
  },
})

export const Search = Content.defineSection('combat/search', {
  parent: MajorActions,
  content: {
    name: 'Search',
    description: `When you take the Search action, you devote your attention to finding something. Depending on the Nature of your Search, the GM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check.`,
  },
})

export const UseAnObject = Content.defineSection('combat/use-an-object', {
  parent: MajorActions,
  content: {
    name: 'Use an Object',
    description: `You normally interact with an object while doing something else, such as when you draw a sword as part of an Attack. When an object requires your action for its use, you take the Use an Object action. This action is also useful when you want to interact with more than one object on Your Turn.`,
  },
})

export const MakingAnAttack = Content.defineSection('combat/making-an-attack', {
  parent: Combat,
  content: {
    name: 'Making an Attack',
    description: `Whether you’re striking with a melee weapon, firing a weapon at range, or making an attack roll as part of an ability, an attack has a simple structure.

1. **Choose a target.** Pick a target within your attack’s range: a creature, an object, or a location.
2. **Determine modifiers.** The GM determines whether the target has cover and whether you have advantage or disadvantage against the target. In addition, special abilities and other effects can apply penalties or bonuses to your attack roll.
3. **Resolve the Attack.** You make the attack roll. On a hit, you roll damage, unless the particular attack has rules that specify otherwise. Some attacks cause special effects in addition to or instead of dealing damage.

If there’s ever any question whether something you’re doing counts as an attack, the rule is simple: if you’re making an attack roll, you’re making an attack.`,
  },
})

export const AttackRolls = Content.defineSection('combat/attack-rolls', {
  parent: MakingAnAttack,
  content: {
    name: 'Attack Rolls',
    description: `When you make an attack, your attack roll determines whether the attack hits or misses. To make an attack roll, roll a d20 and add the appropriate modifiers. If the total of the roll plus modifiers equals or exceeds the target’s [defense](content:creatures/defense-rating) that the attack targets, the attack hits. A character’s defenses are calculated from its attributes, as described in [Defense Rating](content:characters/defense-rating), whereas a creature’s defenses are in its stat block.`,
  },
})

export const ModifiersToTheRoll = Content.defineSection('combat/modifiers-to-the-roll', {
  parent: AttackRolls,
  content: {
    name: 'Modifiers to the Roll',
    description: `When a character makes an Attack roll, the two most Common Modifiers to the Roll are an ability modifier and the character’s Proficiency Bonus. When a monster makes an Attack roll, it uses whatever modifier is provided in its stat block.

**Ability Modifier**: The ability modifier used for a melee weapon attack is Brawn, and the ability modifier used for a ranged weapon attack is Agility. Weapons sometimes have properties which break this rule. Many abilities also require an attack roll. The ability modifier used for an ability is typically specified in the ability text.

**Proficiency Bonus**: You add your proficiency bonus to your attack roll when you attack using a weapon with which you have proficiency, as well as when you attack with an ability.`,
  },
})

export const Rolling1Or20 = Content.defineSection('combat/rolling-1-or-20', {
  parent: AttackRolls,
  content: {
    name: 'Rolling 1 or 20',
    description: `Sometimes fate blesses or curses a combatant, causing the novice to hit and the veteran to miss.

If the d20 roll for an attack is a 20, the attack hits regardless of any modifiers or the target’s defense. This is called a critical hit. If the d20 roll for an attack is a 1, the attack misses regardless of any modifiers or the target’s defense.`,
  },
})

export const UnseenAttackersAndTargets = Content.defineSection('combat/unseen-attackers-and-targets', {
  parent: MakingAnAttack,
  content: {
    name: 'Unseen Attackers and Targets',
    description: `Combatants often try to escape their foes’ notice by hiding, cloaking themselves, or lurking in darkness.

When you attack a target that you can’t see, you have disadvantage on the attack roll. This is true whether you’re guessing the target’s location or you’re targeting a creature you can hear but not see. If the target isn’t in the location you targeted, you automatically miss, but the GM typically just says that the attack missed, not whether you guessed the target’s location correctly.

When a creature can’t see you, you have advantage on attack rolls against it. If you are hidden, both unseen and unheard, when you make an attack, you give away your location when the attack hits or misses.`,
  },
})

export const RangedAttacks = Content.defineSection('combat/ranged-attacks', {
  parent: MakingAnAttack,
  content: {
    name: 'Ranged Attacks',
    description: `When you make a ranged Attack, you fire a bow or a crossbow, hurl a Handaxe, or otherwise send projectiles to strike a foe at a distance. A monster might shoot spines from its tail. Many Spells also involve making a ranged Attack.`,
  },
})

export const Range = Content.defineSection('combat/range', {
  parent: RangedAttacks,
  content: {
    name: 'Range',
    description: `You can make Ranged Attacks only against Targets within a specified range.

If a ranged Attack, such as one made with a spell, has a single range, you can’t Attack a target beyond this range.

Some Ranged Attacks, such as those made with a Longbow or a Shortbow, have two ranges. The smaller number is the normal range, and the larger number is the long range. Your Attack roll has disadvantage when your target is beyond normal range, and you can’t Attack a target beyond the long range.`,
  },
})

export const RangedAttacksInCloseCombat = Content.defineSection('combat/ranged-attacks-in-close-combat', {
  parent: RangedAttacks,
  content: {
    name: 'Ranged Attacks in Close Combat',
    description: `Aiming a ranged Attack is more difficult when a foe is next to you. When you make a ranged Attack with a weapon, a spell, or some other means, you have disadvantage on the Attack roll if you are within 5 feet of a Hostile creature who can see you and who isn’t Incapacitated.`,
  },
})

export const MeleeAttacks = Content.defineSection('combat/melee-attacks', {
  parent: MakingAnAttack,
  content: {
    name: 'Melee Attacks',
    description: `Used in hand-to-hand combat, a melee Attack allows you to Attack a foe within your reach. A melee Attack typically uses a handheld weapon such as a sword, a Warhammer, or an axe. A typical monster makes a melee Attack when it strikes with its claws, horns, teeth, tentacles, or other body part. A few Spells also involve making a melee Attack.

Most creatures have a 5-foot reach and can thus Attack Targets within 5 feet of them when making a melee Attack. Certain creatures (typically those larger than Medium) have Melee Attacks with a greater reach than 5 feet, as noted in their descriptions.

Instead of using a weapon to make a melee weapon Attack, you can use an Unarmed Strike: a punch, kick, head-butt, or similar forceful blow (none of which count as weapons). On a hit, an Unarmed Strike deals bludgeoning damage equal to 1 + your Strength modifier. You are proficient with your unarmed strikes.`,
  },
})

export const OpportunityAttacks = Content.defineSection('combat/opportunity-attacks', {
  parent: MeleeAttacks,
  content: {
    name: 'Opportunity Attacks',
    description: `In a fight, everyone is constantly watching for a chance to strike an enemy who is fleeing or passing by. Such a strike is called an opportunity Attack.

You can make an opportunity Attack when a Hostile creature that you can see moves out of your reach. To make the opportunity Attack, you use your Reaction to make one melee Attack against the provoking creature. The Attack occurs right before the creature leaves your reach.

You can avoid provoking an opportunity Attack by taking the Disengage action. You also don’t provoke an opportunity Attack when you Teleport or when someone or something moves you without using your Movement, action, or Reaction. For example, you don’t provoke an opportunity Attack if an explosion hurls you out of a foe’s reach or if gravity causes you to fall past an enemy.`,
  },
})

export const TwoWeaponFighting = Content.defineSection('combat/two-weapon-fighting', {
  parent: MeleeAttacks,
  content: {
    name: 'Two-Weapon Fighting',
    description: `When you take the Attack action and Attack with a light melee weapon that you’re holding in one hand, you can use a Minor Action to Attack with a different light melee weapon that you’re holding in the other hand. You don’t add your ability modifier to the damage of the bonus Attack, unless that modifier is negative.

If either weapon has the Thrown property, you can throw the weapon, instead of making a melee Attack with it.`,
  },
})

export const Grappling = Content.defineSection('combat/grappling', {
  parent: MeleeAttacks,
  content: {
    name: 'Grappling',
    description: `When you want to grab a creature or wrestle with it, you can use the Attack action to make a Special melee Attack, a grapple. If you’re able to make multiple attacks with the Attack action, this Attack replaces one of them.

The target of your grapple must be no more than one size larger than you and must be within your reach. Using at least one free hand, you try to seize the target by making a grapple check instead of an Attack roll: a Strength (Athletics) check contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use). If you succeed, you subject the target to the Grappled condition (see [Conditions](content:combat/conditions)). The condition specifies the things that end it, and you can release the target whenever you like (no action required).

**Escaping a Grapple**: A Grappled creature can use its action to escape. To do so, it must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by your Strength (Athletics) check.

**Moving a Grappled Creature**: When you move, you can drag or carry the Grappled creature with you, but your speed is halved, unless the creature is two or more sizes smaller than you.`,
  },
})

export const ContestsInCombat = Content.defineSection('combat/contests-in-combat', {
  parent: MakingAnAttack,
  content: {
    name: 'Contests in Combat',
    description: `Battle often involves pitting your Prowess against that of your foe. Such a Challenge is represented by a contest. This section includes the most Common Contests that require an action in combat: Grappling and Shoving a Creature. The GM can use these Contests as models for improvising others.`,
  },
})

export const ShovingACreature = Content.defineSection('combat/shoving-a-creature', {
  parent: ContestsInCombat,
  content: {
    name: 'Shoving a Creature',
    description: `Using the Attack action, you can make a Special melee Attack to shove a creature, either to knock it prone or push it away from you. If you’re able to make multiple attacks with the Attack action, this Attack replaces one of them.

The target must be no more than one size larger than you and must be within your reach. Instead of Making an Attack roll, you make a Strength (Athletics) check contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use). If you win the contest, you either knock the target prone or push it 5 feet away from you.`,
  },
})

export const Cover = Content.defineSection('combat/cover', {
  parent: Combat,
  content: {
    name: 'Cover',
    description: `Walls, trees, creatures, and other obstacles can provide cover during combat, making a target more difficult to harm. A creature benefits from cover only when an attack or other effect originates on the opposite side of the cover.

There are three degrees of cover. If a target is behind multiple sources of cover, only the most protective degree of cover applies—the bonuses are not cumulative. For example, if a target is behind a creature that gives half cover and a tree trunk that gives three-quarters cover, the target has three-quarters cover.

A target with **half cover** has a +2 bonus to its Guard and Reflex defense. A target has half cover if an obstacle blocks at least half of its body. Examples include a low wall, a large piece of furniture, a narrow tree trunk, or another creature (enemy or friend).

A target with **three-quarters cover** has a +5 bonus to its Guard and Reflex defense. A target has three-quarters cover if approximately three-quarters of it is covered by an obstacle, such as a gate, a bunker, or a thick tree trunk.

A target with **total cover** cannot be targeted directly by abilities. However, some abilities can reach such a target by including it in an area of effect. A target has total cover if it is completely concealed by an obstacle.`,
  },
})

export const DamageAndHealing = Content.defineSection('combat/damage-and-healing', {
  parent: Combat,
  content: {
    name: 'Damage and Healing',
    description: `The [Vitality Pool](characteristic:vitality-pool) points represent a combination of physical and mental durability, the will to live, and luck. Creatures with a higher Vitality Pool points are more difficult to kill. Those with a lower Vitality Pool are more fragile.

There are three amounts that come into play when taking damage: vitality points, temporary vitality points, and [soak points](content:creatures/soak-points). Whenever a creature takes damage, soak points absorb damage first, then excess damage is absorbed by temporary vitality points, and then the remainder of the damage, if any, is finally removed from the vitality pool.`,
  },
})

export const TemporaryVitalityPoints = Content.defineSection('combat/temporary-vitality-points', {
  parent: DamageAndHealing,
  content: {
    name: 'Temporary Vitality Points',
    description: `Some abilities confer temporary vitality points to a creature. Temporary vitality points aren't actual vitality points; they are a buffer against damage, a pool of vitality points that protect you from injury.

Because temporary vitality points are separate from your actual vitality points, they can exceed your vitality pool maximum. A character can, therefore, be at full vitality points and receive temporary vitality points.

Healing can't restore temporary vitality points, and they can't be added together. If you have temporary vitality points and receive more of them, you decide whether to keep the ones you have or to gain the new ones. For example, if an ability grants you 12 temporary vitality points when you already have 10, you can have 12 or 10, not 22.

If your vitality point value is 0, receiving temporary vitality points doesn't restore you to consciousness or stabilize you. They can still absorb damage directed at you while you're in that state, but only true healing can save you.

Unless a feature that grants you temporary vitality points has a duration, they last until they're depleted or you finish a long rest.`,
  },
})

export const TakingDamage = Content.defineSection('combat/taking-damage', {
  parent: DamageAndHealing,
  content: {
    name: 'Taking Damage',
    description: `When a creature takes damage, it is applied in a specific order:

1. **Soak Points:** Damage is first reduced by any available soak points. If the damage is completely absorbed by the soak points, the creature takes no further damage.

2. **Temporary Vitality Points:** If damage remains after applying soak points, the remaining damage is applied to the creature's temporary vitality points. If temporary vitality points are reduced to zero, any excess damage continues to the next step.

3. **Vitality Pool:** Any damage remaining after temporary vitality points are depleted is then removed from the creature's vitality pool.

**Examples**

- **Example 1: Damage Absorbed by Soak:** A creature with 5 soak points, 0 temporary vitality points, and 20 vitality points takes 3 damage. The 3 damage is absorbed entirely by the soak points, reducing them to 2. The creature's temporary vitality points and vitality pool remain unchanged.
- **Example 2: Damage Absorbed by Temporary Vitality and Soak:** A creature with 2 soak points, 5 temporary vitality points, and 20 vitality points takes 10 damage. The 2 soak points are used first, reducing them to 0 and the incoming damage to 8. The remaining 8 damage is applied to temporary vitality points, reducing them to 0. Since only 5 temporary vitality points were available, 3 damage remains. The final 3 damage is removed from the vitality pool, reducing it from 20 to 17.
- **Example 3: Damage Reaches Vitality Pool:** A creature with 0 soak points, 0 temporary vitality points, and 15 vitality points takes 7 damage. The damage is applied directly to the vitality pool, reducing it to 8. If this damage reduces the vitality pool to 0, the creature becomes incapacitated and dying.`,
  },
})

export const Healing = Content.defineSection('combat/healing', {
  parent: DamageAndHealing,
  content: {
    name: 'Healing',
    description: `Damage is not permanent unless it results in death. Healing, whether from rest, a tech ability, or a medpack, restores vitality points instantly.

When a creature receives healing, the vitality points regained are added to its current total, but they cannot exceed its vitality pool maximum. Any excess vitality points are lost. For example, if a Commando with 14 current vitality points has a vitality pool maximum of 20, and a specialist grants 8 vitality points of healing, the commando regains 6 vitality points, not 8.

A creature that has died cannot regain vitality points unless it is first restored to life.`,
  },
})

export const HealingSurges = Content.defineSection('combat/healing-surges', {
  parent: Healing,
  content: {
    name: 'Healing Surges',
    description: `A healing surge heals approximately 1⁄4th of your max health when you use it. There are restrictions on when you can use a healing surge (such as in battle), and some effects can cause you to lose a healing surge without healing (poison, failure in a skill challenge, etc).

You start with a baseline of eight healing surges per day. Certain traits you gain as you level up may modify this limit.

Outside of combat you can usually use healing surges freely. After combat you must take a short rest before spending surges and then you can spend any number you desire.

However, you cannot simply use a healing surge any time you please during combat. Usually, an ability or passive effect granted by you or an ally might let you use a healing surge in combat.

The amount of vitality points a healing surge heals, known as your healing surge value, is 1/4th of your maximum vitality pool rounded down. Some traits can increase your healing surge value.

You generally regain half of your healing surge maximum after completing a long rest. Some effects like poisons or failures in skill challenges may prevent you from regaining all of your surges.`,
  },
})

export const DroppingTo0VitalityPoints = Content.defineSection('combat/dropping-to-0-vitality-points', {
  parent: DamageAndHealing,
  content: {
    name: 'Dropping to 0 Vitality Points',
    description: `Whenever a creature’s vitality pool reaches zero, it is incapacitated and dying. From here, it can either stabilize or die outright, as explained in the following sections.`,
  },
})

export const DeathSavingThrows = Content.defineSection('combat/death-saving-throws', {
  parent: DroppingTo0VitalityPoints,
  content: {
    name: 'Death Saving Throws',
    description: `Whenever you start your turn and are dying, you must make a special saving throw, called a death saving throw, to determine whether you creep closer to death or hang onto life. Unlike other saving throws, this one isn't tied to any ability score. You are in the hands of fate now, aided only by spells and features that improve your chances of succeeding on a saving throw.

Roll a d20. If the roll is 10 or higher, you succeed. Otherwise, you fail. A success or failure has no effect by itself. On your third success, you become stable (see below). On your fourth failure, you die. The successes and failures don't need to be consecutive; keep track of both until you collect three of a kind. The number of successes is reset to zero when you regain any hit points or become stable. The number of failures is reset to zero after you finish a long rest.

When you make a death saving throw and roll a 1 on the d20, it counts as two failures. If you roll a 20 on the d20, you regain 1 vitality point.

If you take any damage while you have 0 vitality, you suffer a death saving throw failure. If the damage is from a critical hit, you suffer two failures instead. If the damage equals or exceeds your vitality pool maximum, you suffer instant death.`,
  },
})

export const StabilizingACreature = Content.defineSection('combat/stabilizing-a-creature', {
  parent: DroppingTo0VitalityPoints,
  content: {
    name: 'Stabilizing a Creature',
    description: `The best way to save a dying creature with 0 vitality is to heal it. If healing is unavailable, the creature can at least be stabilized so that it is no longer dying and doesn’t need to continue to make death saving throws.

You can use your action to administer first aid to an unconscious creature and attempt to stabilize it, which requires a successful DC 15 Medicine check.

A stable creature isn’t dying, and therefore doesn't make death saving throws, even though it has 0 hit points, but it does remain incapacitated. The creature stops being stable, and must start making death saving throws again, if it takes any damage. A stable creature that isn't healed regains 1 vitality point after 1d4 hours.`,
  },
})

export const InstantDeath = Content.defineSection('combat/instant-death', {
  parent: DroppingTo0VitalityPoints,
  content: {
    name: 'Instant Death',
    description: `Massive damage can kill you instantly. When damage reduces you to 0 vitality and there is damage remaining, you die if the remaining damage equals or exceeds your vitality pool maximum.

For example, an adept with a vitality pool maximum of 12 currently has 6 vitality points. If she takes 18 damage to vitality from an attack, she is reduced to 0 vitality, but 12 damage remains. Because the remaining damage equals or exceeds her vitality pool maximum, the adept dies.`,
  },
})

export const KnockingACreatureOut = Content.defineSection('combat/knocking-a-creature-out', {
  parent: DroppingTo0VitalityPoints,
  content: {
    name: 'Knocking a Creature Out',
    description: `Sometimes an attacker wants to incapacitate a foe, rather than deal a killing blow. When an attacker reduces a creature to 0 vitality points with a melee attack, the attacker can choose to knock the creature out. The attacker can make this choice the instant the damage is dealt. The creature falls unconscious and is stable.`,
  },
})

export const NpcsAndDeath = Content.defineSection('combat/npcs-and-death', {
  parent: DroppingTo0VitalityPoints,
  content: {
    name: 'NPCs and Death',
    description: `Most GMs have an NPC die the instant it drops to 0 vitality, rather than having it fall unconscious and make death saving throws.

Mighty villains and special nonplayer characters are common exceptions; the GM might have them fall unconscious and follow the same rules as player characters.`,
  },
})

export const Conditions = Content.defineSection('combat/conditions', {
  parent: Combat,
  content: {
    name: 'Conditions',
    description: ``,
  },
})

export const Blinded = Content.defineSection('combat/blinded', {
  parent: Conditions,
  content: {
    name: 'Blinded',
    description: `A blinded creature can’t see, whether from a flashbang, a damaged optical implant, or total darkness.

- The creature automatically fails any check that requires sight.
- Attack rolls against the creature have advantage.
- The creature’s attack rolls have disadvantage.`,
  },
})

export const Charmed = Content.defineSection('combat/charmed', {
  parent: Conditions,
  content: {
    name: 'Charmed',
    description: `A charmed creature has been swayed by another creature, through manipulation, neural hacking, or chemical influence.

- The creature can’t attack the charmer or target the charmer with harmful abilities or effects.
- The charmer has advantage on any check to interact socially with the creature.`,
  },
})

export const Deafened = Content.defineSection('combat/deafened', {
  parent: Conditions,
  content: {
    name: 'Deafened',
    description: `A deafened creature can’t hear, whether from a concussive blast, a damaged auditory implant, or overwhelming noise.

- The creature automatically fails any check that requires hearing.`,
  },
})

export const Exhaustion = Content.defineSection('combat/exhaustion', {
  parent: Conditions,
  content: {
    name: 'Exhaustion',
    description: `Exhaustion builds up in levels, from 1 to 6, as a creature is pushed beyond its limits. Each time a creature gains this condition, its exhaustion level increases by 1.

- The creature’s attack rolls and checks are reduced by 2 times its exhaustion level.
- The creature’s speed is reduced by 1 square for each exhaustion level.
- The creature dies if its exhaustion level reaches 6.
- Finishing a long rest reduces the creature’s exhaustion level by 1. The condition ends when its exhaustion level reaches 0.`,
  },
})

export const Frightened = Content.defineSection('combat/frightened', {
  parent: Conditions,
  content: {
    name: 'Frightened',
    description: `A frightened creature is overcome by fear of a particular source, such as an enemy or a threat it can’t overcome.

- The creature has disadvantage on attack rolls and checks while the source of its fear is within line of sight.
- The creature can’t willingly move closer to the source of its fear.`,
  },
})

export const Grappled = Content.defineSection('combat/grappled', {
  parent: Conditions,
  content: {
    name: 'Grappled',
    description: `A grappled creature is held in place by another creature, its grappler. See [Grappling](content:combat/grappling) for how a creature grapples another and how to escape.

- The creature’s speed is 0 and can’t increase.
- The creature has disadvantage on attack rolls against any target other than the grappler.
- The grappler can drag or carry the creature when it moves.
- The condition ends if the grappler is [incapacitated](content:combat/incapacitated), or if an effect moves the creature out of the grappler’s reach.`,
  },
})

export const Incapacitated = Content.defineSection('combat/incapacitated', {
  parent: Conditions,
  content: {
    name: 'Incapacitated',
    description: `An incapacitated creature is unable to act or defend itself.

- The creature can’t take actions.
- The creature cannot move.
- The creature drops whatever it’s holding and falls prone.
- Attack rolls against the creature have advantage.`,
  },
})

export const Invisible = Content.defineSection('combat/invisible', {
  parent: Conditions,
  content: {
    name: 'Invisible',
    description: `An invisible creature can’t be seen, whether through optical camouflage, a cloaking field, or similar technology.

- The creature has advantage on its initiative check.
- The creature isn’t affected by any effect that requires its target to be seen, unless the effect’s creator can somehow see it.
- Attack rolls against the creature have disadvantage.
- The creature’s attack rolls have advantage.`,
  },
})

export const Paralyzed = Content.defineSection('combat/paralyzed', {
  parent: Conditions,
  content: {
    name: 'Paralyzed',
    description: `A paralyzed creature’s body has locked up, from a neurotoxin, a nerve disruptor, or a hijacked cybernetic system.

- The creature is [incapacitated](content:combat/incapacitated).
- The creature’s speed is 0 and can’t increase.
- Attacks against the creature’s Fortitude and Reflex defense automatically hit.
- Attack rolls against the creature have advantage.
- Any attack that hits the creature is a critical hit if the attacker is within 1 square of it.`,
  },
})

export const Petrified = Content.defineSection('combat/petrified', {
  parent: Conditions,
  content: {
    name: 'Petrified',
    description: `A petrified creature has been turned into, or encased in, an inanimate substance such as stone or a stasis field. Its weight increases by a factor of ten, and it stops aging.

- The creature is [incapacitated](content:combat/incapacitated) and unaware of its surroundings.
- The creature’s speed is 0 and can’t increase.
- Attacks against the creature’s Fortitude and Reflex defense automatically hit.
- Attack rolls against the creature have advantage.
- The creature takes half damage from all sources.
- The creature can’t be [poisoned](content:combat/poisoned), and any poison already in its system is suspended.`,
  },
})

export const Poisoned = Content.defineSection('combat/poisoned', {
  parent: Conditions,
  content: {
    name: 'Poisoned',
    description: `A poisoned creature is weakened by a toxin, a disease, or a corrupted chemical implant.

- The creature has disadvantage on attack rolls and checks.`,
  },
})

export const Prone = Content.defineSection('combat/prone', {
  parent: Conditions,
  content: {
    name: 'Prone',
    description: `A prone creature is lying on the ground, either because it was knocked down or because it threw itself down. See [Being Prone](content:combat/being-prone) for how a prone creature moves and stands up.

- The creature’s only movement options are to crawl, or to spend half its speed to stand up and end the condition.
- The creature has disadvantage on attack rolls.
- Attack rolls against the creature have advantage if the attacker is within 1 square of it. Otherwise, they have disadvantage.`,
  },
})

export const Restrained = Content.defineSection('combat/restrained', {
  parent: Conditions,
  content: {
    name: 'Restrained',
    description: `A restrained creature is bound or entangled, whether by restraints, a net, or a gravity snare.

- The creature cannot move.
- Attack rolls against the creature’s Guard, Fortitude and Reflex defense have advantage.
- The creature’s attack rolls have disadvantage.`,
  },
})

export const Stunned = Content.defineSection('combat/stunned', {
  parent: Conditions,
  content: {
    name: 'Stunned',
    description: `A stunned creature is overwhelmed and can barely react, from a shock baton, an EMP to its implants, or a powerful blow.

- The creature can’t take actions.
- The creature cannot move.`,
  },
})

export const Unconscious = Content.defineSection('combat/unconscious', {
  parent: Conditions,
  content: {
    name: 'Unconscious',
    description: `An unconscious creature has been knocked out or has fallen unconscious from its injuries.

- The creature is [incapacitated](content:combat/incapacitated) and [prone](content:combat/prone).
- The creature’s speed is 0 and can’t increase.
- The creature is unaware of its surroundings.
- Attacks against the creature’s Fortitude and Reflex defense automatically hit.
- Attack rolls against the creature have advantage.
- Any attack that hits the creature is a critical hit if the attacker is within 1 square of it.`,
  },
})

export const CombatContent = [
  Combat,
  OrderOfCombat,
  Initiative,
  Turn,
  MajorAction,
  MinorAction,
  FreeAction,
  ReactionAction,
  SustainPhase,
  MovementAndPosition,
  BreakingUpYourMove,
  UsingDifferentSpeeds,
  DifficultTerrain,
  BeingProne,
  InteractingWithObjects,
  MovingAroundOtherCreatures,
  Climbing,
  FlyingMovement,
  Space,
  SqueezingIntoASmallerSpace,
  MajorActions,
  BasicAttack,
  UseAnAbility,
  Dash,
  Disengage,
  Dodge,
  Help,
  Hide,
  Ready,
  Search,
  UseAnObject,
  MakingAnAttack,
  AttackRolls,
  ModifiersToTheRoll,
  Rolling1Or20,
  UnseenAttackersAndTargets,
  RangedAttacks,
  Range,
  RangedAttacksInCloseCombat,
  MeleeAttacks,
  OpportunityAttacks,
  TwoWeaponFighting,
  Grappling,
  ContestsInCombat,
  ShovingACreature,
  Cover,
  DamageAndHealing,
  TemporaryVitalityPoints,
  TakingDamage,
  Healing,
  HealingSurges,
  DroppingTo0VitalityPoints,
  DeathSavingThrows,
  StabilizingACreature,
  InstantDeath,
  KnockingACreatureOut,
  NpcsAndDeath,
  Conditions,
  Blinded,
  Charmed,
  Deafened,
  Exhaustion,
  Frightened,
  Grappled,
  Incapacitated,
  Invisible,
  Paralyzed,
  Petrified,
  Poisoned,
  Prone,
  Restrained,
  Stunned,
  Unconscious,
]
