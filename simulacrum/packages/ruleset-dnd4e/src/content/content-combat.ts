import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import * as Common from '@simulacrum/ruleset-dnd4e/common'

export const CombatSection = Content.defineSection('combat', {
  content: {
    name: 'Combat',
    description:
      'Whether it’s a skirmish against a handful of orcs or an all-out battle with Orcus, Demon Prince of the Undead, combat is a staple of a Dungeons & Dragons adventure.\n\nCombat encounters usually begin when you enter an area containing monsters. Sometimes the monsters enter your area instead—when werewolves attack your camp at night, for example—or you and the monsters stumble upon each other. You might meet on a road, or you might be exploring a dungeon when you run into a hostile patrol.\n\nThis chapter details the rules for combat.\n\n- **[The Combat Sequence](content:combat/the-combat-sequence):** The sequence of rounds and turns that make up a battle. Includes rules for rolling initiative.\n- **[Action Types](content:combat/action-types):** The different types of actions that you can take on your turn and on other combatants’ turns.\n- **[Taking Your Turn](content:combat/taking-your-turn):** What to do at the start of your turn, during your turn, and at the end of your turn.\n- **[Attacks and Defenses](content:combat/attacks-and-defenses):** How to choose a target, make an attack roll, deal damage, inflict various effects on your enemies, and make saving throws.\n- **[Attack Modifiers](content:combat/attack-modifiers):** Various factors that affect attack rolls, including combat advantage, cover, and concealment.\n- **[Movement and Position](content:combat/movement-and-position):** Rules for speed, creature size, difficult terrain, obstacles, flanking, teleportation, and forced movement.\n- **[Actions in Combat](content:combat/actions-in-combat):** The most common actions in a battle, from spending an action point to walking.\n- **[Healing](content:combat/healing):** Rules on hit points, healing surges, temporary hit points, and regeneration.\n- **[Death and Dying](content:combat/death-and-dying):** What happens when you drop to 0 hit points or fewer and how to escape death.',
  },
})

export const TheCombatSequenceSection = Content.defineSection('combat/the-combat-sequence', {
  parent: CombatSection,
  content: {
    name: 'The Combat Sequence',
    description:
      'A typical combat encounter is a clash between two sides, a flurry of weapon swings, feints, parries, footwork, and spellcasting. The Dungeons & Dragons game organizes the chaos of combat into a cycle of rounds and turns.\n\n**Rounds and Turns**\n\n- **Round:** In a round, every combatant takes a turn. A round represents about 6 seconds in the game world.\n- **Turn:** On your turn, you take actions: a standard action, a move action, a minor action, and any number of free actions, in any order you wish. See “[Action Types](content:combat/action-types),” page 267, for what you can do with these different actions.\n\nThe actions in a combat encounter happen almost simultaneously in the game world, but to make combat manageable, combatants take turns acting—like taking turns in a board game. If your turn comes up before an enemy’s, your actions take place before the enemy’s actions do. The order of turns is determined at the beginning of a combat encounter, when combatants roll initiative.\n\nA combat encounter follows these steps:\n\n1. **Determine surprise.** The DM determines whether any combatants are surprised. If any combatants notice enemy combatants without being noticed in return, the aware combatants gain a surprise round.\n2. **Establish positions.** The DM decides where the combatants are positioned on the battle grid. For example, if the PCs have just opened a door into a room, the DM might draw or arrange a depiction of the door and the room on the battle grid and then ask the players to arrange their miniatures near the door. Then the DM places miniatures that represent the monsters in the room.\n3. **Roll initiative.** Everyone involved in a combat encounter rolls initiative, determining the order of combatants’ turns. You roll initiative only at the beginning of a combat encounter.\n4. **Take surprise round actions.** If any combatants gained a surprise round, they act in initiative order, each one taking a single action. (Surprised combatants take no actions during the surprise round.) The surprise round then ends, and the first regular round of combat begins.\n5. **Take turns.** In initiative order, every combatant takes a turn, which includes various actions. (Combatants can also take certain actions on one another’s turns.)\n6. **Begin the next round.** When every combatant has had a turn, the round ends. Begin the next round with the combatant who has the highest initiative.\n7. **End the encounter.** Repeat steps 5 and 6 until the the combatants on one side are captured, fleeing, unconscious, or dead. The encounter ends when the other side then takes a short rest or an extended rest.',
  },
})

export const VisualizingTheActionSection = Content.defineSection('combat/visualizing-the-action', {
  parent: TheCombatSequenceSection,
  content: {
    name: 'Visualizing the Action',
    description:
      'When a combat encounter starts, it’s time to turn your attention to the **battle grid**. The combat rules assume that you use D&D _Dungeon Tiles_, a poster map, a gridded white board, or an erasable, gridded mat to show the area where a battle takes place. The rules also assume that you use D&D Miniatures to represent the adventurers and the enemies they face.\n\nA combat encounter can be played without such visual representations, but there are good reasons to use them.\n\n- **Position is everything.** With a battle grid, you can easily determine whether your character can see a monster, whether the monster has cover, and whether you flank the monster.\n- **Combat can be complex.** With five player characters and a bunch of monsters involved, having miniatures on the table helps everyone remember which monsters are down, who’s attacking whom, and where everyone is.\n- **Terrain matters.** An exciting combat encounter includes terrain features and hazards that make the environment an important part of the encounter. If you want to claim the magic circle or avoid the cursed stone, you need to know where they are.\n- **Imagination sometimes needs help.** Your DM might describe a room with bubbling lava, a narrow stone bridge, overlooking ledges, and acid pits. It’s a great scene, but sometimes it’s a little hard to imagine how all those pieces fit together. The battle grid helps by showing you exactly where all the elements of the scene are in relation to one another.\n\nA 1-inch square on the battle grid represents a 5-foot square in the game world. So a dungeon room that is 40 feet by 50 feet would be 8 squares by 10 squares, which is a huge room but a good size for a busy combat encounter.\n\nCharacters and monsters are represented on the grid with miniature figures. If you don’t have miniatures available, you can use coins, beads, or cardboard markers. You can use a creature in the game without having the exact miniature for it. If your character is a dwarf fighter with a mace, and all your dwarf miniatures have axes or swords (or you don’t have any dwarf miniatures), choose the figure you like best. Just make sure that everyone at the table knows which object on the table stands for which combatant.\n\nMiniatures for human-sized characters and monsters are a little more than 1 inch tall (about 32 millimeters) and stand on a base that fits in a 1-inch square. Plenty of creatures in the D&D game aren’t human-sized, though. Larger creatures take up more space on the battle grid. For information about creature sizes on the battle grid, see “[Creature Size and Space](content:combat/creature-size-and-space),” page 282.',
  },
})

export const InitiativeSection = Content.defineSection('combat/initiative', {
  parent: TheCombatSequenceSection,
  content: {
    name: 'Initiative',
    description:
      'Before the first round of combat, you roll [initiative](characteristic:initiative). Rolling initiative is a [Dexterity](characteristic:dexterity) check and follows the normal rules for ability checks. The DM rolls initiative for your enemies.\n\nThroughout a battle, combatants act in order, from highest initiative result to lowest. The order in which combatants take their turns is called the **initiative order**. The initiative order remains the same from round to round, although a combatant’s position in the order can change after delaying ([page 288](content:combat/delay)) or readying an action ([page 291](content:combat/ready-an-action)).\n\n**Rolling Initiative**\n\nTo determine a combat encounter’s initiative order, roll initiative. To do so, make a Dexterity check.\n\nRoll 1d20 and add the following:\n\n- One-half your level\n- Your [Dexterity modifier](characteristic:dexterity-modifier)\n- Any bonuses or penalties that apply\n\nThe result is your initiative for this encounter.\n\nWhen combatants have the same initiative, the combatant with the higher initiative bonus (the total of one-half your level, your Dexterity modifier, and any bonuses) goes before the other. If their bonuses are the same, they can roll a die or flip a coin to break the tie.',
  },
})

export const TheSurpriseRoundSection = Content.defineSection('combat/the-surprise-round', {
  parent: TheCombatSequenceSection,
  content: {
    name: 'The Surprise Round',
    description:
      'Some battles begin with a surprise round. A surprise round occurs if any combatants are unaware of enemy combatants’ presence or hostile intentions. For example, if you fail your [Perception](characteristic:skill/perception) check to notice concealed enemies, you’re surprised. Or if supposed allies spring an attack and you failed your [Insight](characteristic:skill/insight) check to notice the attackers’ traitorous intentions, you’re surprised. But if any of your allies made their Perception or Insight checks, they’re not surprised.\n\nWhen any combatants achieve surprise, they act in initiative order during the surprise round. Surprised combatants don’t act at all during the surprise round.\n\n**The Surprise Round**\n\nTwo special rules apply to the surprise round.\n\n- **Limited Action:** If you get to act in the surprise round, you can take a [standard action](action-type:standard-action), a [move action](action-type:move-action), or a [minor action](action-type:minor-action) (see “[Action Types](content:combat/action-types)”). You can also take [free actions](action-type:free-action), but you can’t spend action points. After every nonsurprised combatant has acted, the surprise round ends, and you can act normally in subsequent rounds.\n- **[Surprised](content:combat/surprised):** If you’re surprised, you can’t take any actions (not even free actions, immediate actions, or opportunity actions), and you grant combat advantage ([page 279](content:combat/combat-advantage)) to all attackers. As soon as the surprise round ends, you are no longer surprised.',
  },
})

export const ActionTypesSection = Content.defineSection('combat/action-types', {
  parent: CombatSection,
  content: {
    name: 'Action Types',
    description:
      'A combat round is made up of actions. Firing an arrow, casting a spell, running across a room, opening a door—each of these activities, along with many others, is considered an action. You use different action types to do different things. For example, most attack powers are standard actions, and moving from one spot on the battlefield to another is normally a move action. (A few powers don’t require an action to use.) See “[Actions in Combat](content:combat/actions-in-combat),” page 286, for rules on many specific actions.',
  },
})

export const TheMainActionTypesSection = Content.defineSection('combat/the-main-action-types', {
  parent: ActionTypesSection,
  content: {
    name: 'The Main Action Types',
    description:
      'A typical combat round includes actions of four types: standard actions, move actions, minor actions, and free actions.\n\n**The Main Action Types**\n\n- **[Standard Action](action-type:standard-action):** Standard actions are the core of combat. You can normally take one standard action on your turn. _Examples:_ most attack powers, charging an enemy, using your [second wind](ability:common/second-wind).\n- **[Move Action](action-type:move-action):** Move actions involve movement from one place to another. You can normally take them only on your turn. _Examples:_ walking, shifting.\n- **[Minor Action](action-type:minor-action):** Minor actions are enabling actions, simple actions that usually lead to more exciting actions. You can normally take them only on your turn. _Examples:_ pulling an item from a pouch or a sheath, opening a door or a treasure chest, picking up an item in your space or in an unoccupied square within reach.\n- **[Free Action](action-type:free-action):** Free actions take almost no time or effort. You can take as many free actions as you want during your or another combatant’s turn. The DM can restrict the number of free actions in a turn. _Examples:_ speaking a few sentences, dropping a held item, letting go of a grabbed enemy.',
  },
})

export const TriggeredActionTypesSection = Content.defineSection('combat/triggered-action-types', {
  parent: ActionTypesSection,
  content: {
    name: 'Triggered Action Types',
    description:
      'Two action types—opportunity actions and immediate actions—require triggers. A **trigger** is an action, an event, or an effect that allows you to use a triggered action. (Some powers require a trigger but are free actions or aren’t actions at all.)\n\n**[Opportunity Action](action-type:opportunity-action)**\n\n- **Trigger:** Opportunity actions allow you to take an action in response to an enemy letting its guard down. The one type of opportunity action that every combatant can take is an opportunity attack ([page 290](content:combat/opportunity-attack)). Opportunity attacks are triggered by an enemy leaving a square adjacent to you or by an adjacent enemy making a ranged attack or an area attack.\n- **Once per Combatant’s Turn:** You can take no more than one opportunity action on each other combatant’s turn. You can’t take an opportunity action on your own turn.\n- **Interrupts Action:** An opportunity action interrupts the action that triggered it.\n\nThere are two kinds of immediate actions: interrupts and reactions. Certain rules govern all immediate actions, whether they’re immediate interrupts or immediate reactions.\n\n**Immediate Action**\n\n- **Trigger:** Each immediate action—usually a power—defines its specific trigger. The one type of immediate action that every combatant can take is a readied action (see “[Ready an Action](content:combat/ready-an-action),” page 291).\n- **Once per Round:** You can take only one immediate action per round, either an immediate interrupt or an immediate reaction. If you haven’t taken an immediate action since the end of your last turn, you can take one when a trigger allows you to. You can’t take an immediate action on your own turn.\n- **[Interrupt](action-type:immediate-interrupt):** An immediate interrupt lets you jump in when a certain trigger condition arises, acting before the trigger resolves. If an interrupt invalidates a triggering action, that action is lost. For example, an enemy makes a melee attack against you, but you use a power that lets you shift away as an immediate interrupt. If your enemy can no longer reach you, the enemy’s attack action is lost.\n- **[Reaction](action-type:immediate-reaction):** An immediate reaction lets you act in response to a trigger. The triggering action, event, or condition occurs and is completely resolved before you take your reaction, except that you can interrupt a creature’s movement. If a creature triggers your immediate reaction while moving (by coming into range, for example), you take your action before the creature finishes moving but after it has moved at least 1 square.\n\n  An immediate reaction might interrupt other actions a combatant takes after its triggering action. For example, if a power lets you attack as an immediate reaction when an attack hits you, your action happens before the monster that hit you can take any other action. If a monster has a power that lets it make two attack rolls against you as a standard action, and the first one hits, you can use an immediate reaction before the next attack roll.',
  },
})

export const TakingYourTurnSection = Content.defineSection('combat/taking-your-turn', {
  parent: CombatSection,
  content: {
    name: 'Taking Your Turn',
    description:
      'When your turn comes up in the initiative order, it’s time for you to act. Your turn has three parts: the start of your turn, the actions on your turn, and the end of your turn.',
  },
})

export const TheStartOfYourTurnSection = Content.defineSection('combat/the-start-of-your-turn', {
  parent: TakingYourTurnSection,
  content: {
    name: 'The Start of Your Turn',
    description:
      'Before you act, you keep track of certain effects. The start of your turn always takes place, even if you’re unconscious, and it takes no time in the game world.\n\n**The Start of Your Turn**\n\n- **Ongoing Damage:** If you’re suffering ongoing damage ([page 278](content:combat/ongoing-damage)), you take the damage now.\n- **Regeneration:** If you have regeneration ([page 293](content:combat/regeneration)), you regain hit points now.\n- **Other Effects:** Deal with any other effects that occur at the start of your turn.\n- **End Effects:** Some effects end automatically at the start of your turn.\n- **No Actions:** You can’t take any actions at the start of your turn.',
  },
})

export const SubstitutingActionsSection = Content.defineSection('combat/substituting-actions', {
  parent: TakingYourTurnSection,
  content: {
    name: 'Substituting Actions',
    description:
      'On your turn, you can take a move action or a minor action instead of a standard action, and you can take a minor action instead of a move action. Because you can substitute actions in this way, the three actions you get on your turn (in addition to any free actions) can vary.\n\n| Option | Actions |\n| :--- | :--- |\n| Option A | Standard action, Move action, Minor action |\n| Option B | Standard action, Two minor actions |\n| Option C | Two move actions, Minor action |\n| Option D | Move action, Two minor actions |\n| Option E | Three minor actions |',
  },
})

export const ActionsOnYourTurnSection = Content.defineSection('combat/actions-on-your-turn', {
  parent: TakingYourTurnSection,
  content: {
    name: 'Actions on Your Turn',
    description:
      'During your turn, you can take a few actions. You decide what to do with each, considering how your actions can help you and your allies achieve victory. See “[Action Types](content:combat/action-types),” above, for definitions of the different actions you can take.\n\n**Actions on Your Turn**\n\n- **Your Actions:** You get the following three actions on your turn:\n  - [Standard action](action-type:standard-action)\n  - [Move action](action-type:move-action)\n  - [Minor action](action-type:minor-action)\n- **Free Actions:** You can take any number of [free actions](action-type:free-action) on your turn.\n- **Any Order:** You can take your actions in any order you wish, and you can skip any of them.\n- **Substitute Actions:** You can take a move action or a minor action instead of a standard action, and you can take a minor action instead of a move action.\n- **Extra Action:** You can take an extra action by spending an action point ([page 286](content:combat/action-points)).\n- **Other Combatants’ Actions:** Other combatants can take free actions on your turn, and you might take actions that trigger immediate actions or opportunity actions from other combatants.',
  },
})

export const TheEndOfYourTurnSection = Content.defineSection('combat/the-end-of-your-turn', {
  parent: TakingYourTurnSection,
  content: {
    name: 'The End of Your Turn',
    description:
      'After you act, you keep track of any effects that stop at the end of your turn or that continue. The end of your turn always takes place, even if you’re unconscious, and it takes no time in the game world.\n\n**The End of Your Turn**\n\n- **Saving Throws:** You now make a saving throw ([page 279](content:combat/saving-throws)) against any effect on you that a save can end.\n- **Check Actions Spent:** Some powers and effects can be sustained for multiple turns (see “[Durations](content:combat/durations),” page 278). Check that you spent the action required to sustain a power or an effect during your turn. If you didn’t spend the action, the power or effect ends now.\n- **End Effects:** Some effects end automatically at the end of your turn.\n- **No Actions:** You can’t take any actions at the end of your turn.',
  },
})

export const ActionsOnOtherTurnsSection = Content.defineSection('combat/actions-on-other-turns', {
  parent: TakingYourTurnSection,
  content: {
    name: 'Actions on Other Turns',
    description:
      'Most of your actions take place on your turn. But you can take free actions on anyone’s turn, and an event or another combatant’s actions might provide an opportunity for you to take an immediate action or an opportunity action on someone else’s turn. See “[Action Types](content:combat/action-types),” above, for definitions of the different actions you can take.\n\n**Actions on Other Turns**\n\n- **[Opportunity Actions](action-type:opportunity-action):** You can take one opportunity action on each other combatant’s turn. An opportunity action must be triggered by an enemy’s action.\n- **Immediate Actions:** You can take one immediate action per round, either an [immediate interrupt](action-type:immediate-interrupt) or an [immediate reaction](action-type:immediate-reaction). An immediate action must be triggered by an event or an action on another combatant’s turn.\n- **[Free Actions](action-type:free-action):** You can take any number of free actions on other combatants’ turns.',
  },
})

export const AttacksAndDefensesSection = Content.defineSection('combat/attacks-and-defenses', {
  parent: CombatSection,
  content: {
    name: 'Attacks and Defenses',
    description:
      'Battles in the D&D game are won through cleverly chosen attacks, able defenses, and luck. On a typical turn, you’ll use your standard action to make an attack, whether you’re a stalwart fighter, a wily rogue, or a devout cleric. And your defenses will be frequently tested by your foes’ attacks.\n\nWhen you attack, you make an attack roll to determine whether your attack hits your target. You roll a d20, add a bonus for whatever attack you’re using, and compare the result to one of the target’s four defenses: [Armor Class](characteristic:armor-class), [Fortitude](characteristic:fortitude), [Reflex](characteristic:reflex), or [Will](characteristic:will).\n\nEach character has a number of attacks to choose from, including a basic attack ([page 287](content:combat/basic-attack)). The exact attacks you have available depend on which powers you select for your character (see [Chapter 4](content:classes)).\n\n**Making an Attack**\n\nAll attacks follow the same basic process:\n\n1. Choose the attack you’ll use. Each attack has an **attack type**.\n2. Choose **targets** for the attack ([page 272](content:combat/choosing-targets)). Each target must be within **range** ([page 273](content:combat/range)). Check whether you can **see** and **target** your enemies ([page 273](content:combat/seeing-and-targeting)).\n3. Make an **attack roll** ([page 273](content:combat/attack-roll)).\n4. Compare your attack roll to the target’s **defense** ([page 274](content:combat/defenses)) to determine whether you **hit** or **miss**.\n5. Deal **damage** and apply other effects ([page 276](content:combat/damage)).',
  },
})

export const AttackTypesSection = Content.defineSection('combat/attack-types', {
  parent: AttacksAndDefensesSection,
  content: {
    name: 'Attack Types',
    description:
      'Attacks in the Dungeons & Dragons world take many forms. A fighter swings a greatsword at a foe. A ranger looses an arrow at a distant target. A dragon exhales a blast of fire. A wizard creates a burst of lightning. These examples illustrate the four attack types: melee, ranged, close, and area.',
  },
})

export const MeleeAttackSection = Content.defineSection('combat/melee-attack', {
  parent: AttackTypesSection,
  content: {
    name: 'Melee Attack',
    description:
      'A melee attack usually uses a weapon and targets one enemy within your melee reach (your reach is usually determined by the weapon you’re wielding). Attacking with a longsword or a polearm is a melee attack. Some powers allow you to make multiple melee attacks, against either multiple enemies or a single enemy.\n\n**Melee Attack**\n\n- **Targeted:** Melee attacks target individuals. A melee attack against multiple enemies consists of separate attacks, each with its own attack roll and damage roll. Melee attacks don’t create areas of effect ([page 272](content:combat/areas-of-effect)).\n- **Range:** A melee attack’s range usually equals your melee reach. (Sometimes a power specifies that it affects only adjacent targets, though, so even if you’re using a reach weapon, you can’t attack more distant targets with that power.)\n- **Reach:** Most characters have a reach of 1 square. Certain powers, feats, and weapons can increase your reach.\n\nSimply wielding a weapon in each hand doesn’t allow you to make two attacks in a round. If you hold two melee weapons, you can use either one to make a melee attack.',
  },
})

export const RangedAttackSection = Content.defineSection('combat/ranged-attack', {
  parent: AttackTypesSection,
  content: {
    name: 'Ranged Attack',
    description:
      'A ranged attack is a strike against a distant target. A ranged attack usually targets one creature within its range. Shooting a bow or casting a [_magic missile_](ability:wizard/power/magic-missile) is a ranged attack.\n\n**Ranged Attack**\n\n- **Targeted:** Ranged attacks target individuals. A ranged attack against multiple enemies consists of separate attacks, each with its own attack roll and damage roll. Ranged attacks don’t create areas of effect ([page 272](content:combat/areas-of-effect)).\n\n  If you’re using a projectile weapon to make a ranged attack against multiple targets, you need one piece of ammunition for each target, and if you’re using thrown weapons, you need one for each target.\n- **Range:** Some powers set a specific range (“Ranged 10”) or allow you to attack any target you can see (“Ranged sight”). If you’re using a weapon, the attack’s range is the range of your weapon, as shown on the Ranged Weapons table in [Chapter 7](content:equipment).\n\n  _Long Range:_ If you use a ranged weapon and your target is farther away than the weapon’s normal range but within its long range, you take a –2 penalty to your attack roll. You can’t hit a target beyond the weapon’s long range. A ranged power that doesn’t use a weapon has a normal range but no long range.\n- **Provoke Opportunity Attacks:** If you use a ranged power while adjacent to an enemy, that enemy can make an opportunity attack against you.',
  },
})

export const CloseAttackSection = Content.defineSection('combat/close-attack', {
  parent: AttackTypesSection,
  content: {
    name: 'Close Attack',
    description:
      'A close attack is an area of effect that comes directly from you; its origin square is within your space. Swinging your sword in an arc to hit every enemy next to you with one blow, creating a blast of fire from your hands, or causing radiant energy to burst from your holy symbol—these are all examples of close attacks.\n\nClose attacks include two basic categories of powers: weapon attacks that damage multiple enemies with one swing, and powers created from energy that flows directly from your body or an object you carry.\n\n**Close Attack**\n\n- **Area of Effect:** A close attack creates an area of effect, usually a blast or a burst. A close attack affects certain targets within its area of effect, which has a certain size. A close attack’s area of effect and targets are specified in its power description (see [Chapter 4](content:classes)).\n- **Origin Square:** A close attack’s area of effect defines the attack’s origin square, which is the attack’s starting point. A close burst uses your space as its origin square. A close blast uses a square within your space as its origin square. For a target to be affected by a close attack, there must be line of effect from the origin square to the target (see “[Seeing and Targeting](content:combat/seeing-and-targeting),” page 273).\n- **Multiple Attack Rolls but One Damage Roll:** When you make a close attack, you make a separate attack roll against each target in the area of effect, but you make a single damage roll that affects all the targets. A Large or larger creature hit by a close attack is affected only once by the attack, even if multiple squares of the creature’s space are in the area of effect.\n\n  If you’re using a projectile weapon to make a close attack, you need one piece of ammunition for each target, and if you’re using thrown weapons, you need one for each target.',
  },
})

export const AreaAttackSection = Content.defineSection('combat/area-attack', {
  parent: AttackTypesSection,
  content: {
    name: 'Area Attack',
    description:
      'Area attacks are similar to close attacks, except that the origin square can be some distance away from you. An area attack’s area of effect sets the shape of the attack and the targets it affects. A ball of fire that streaks across the battlefield and explodes is an example of an area attack. A magical wall of fog that springs from the ground to obscure a dungeon corridor is another example.\n\nArea attacks include two categories of powers: projectiles that detonate in their origin squares and effects that appear far away from you and fill an area.\n\n**Area Attack**\n\n- **Area of Effect:** An area attack creates an area of effect, usually a burst or a wall, within range. An area attack affects certain targets within its area of effect, which has a certain size. An area attack’s area of effect, range, and targets are specified in its power description (see [Chapter 4](content:classes)).\n- **Origin Square:** You choose a square within an area attack’s range as the attack’s origin square, which is where you center or start the area of effect. You need line of effect from a square in your space to the origin square (see “[Seeing and Targeting](content:combat/seeing-and-targeting),” page 273). For a target to be affected by an area attack, there needs to be line of effect from the origin square to the target. You don’t have to be able to see the origin square or the target, and concealment ([page 281](content:combat/concealment)) between the origin square and the target doesn’t apply.\n- **Multiple Attack Rolls but One Damage Roll:** When you make an area attack, you make a separate attack roll against each target in the area of effect, but you make a single damage roll that affects all the targets. A Large or larger creature hit by an area attack is affected only once by the attack, even if multiple squares of the creature’s space are in the area of effect.\n\n  If you’re using a projectile weapon to make an area attack, you need one piece of ammunition for each target, and if you’re using thrown weapons, you need one for each target.\n- **Provoke Opportunity Attacks:** If you use an area power while adjacent to an enemy, that enemy can make an opportunity attack against you.',
  },
})

export const AreasOfEffectSection = Content.defineSection('combat/areas-of-effect', {
  parent: AttackTypesSection,
  content: {
    name: 'Areas of Effect',
    description:
      'Most area attacks and close attacks have one of three areas of effect: a blast, a burst, or a wall.\n\n**Areas of Effect**\n\n- **Blast:** A blast fills an area adjacent to you that is a specified number of squares on a side. For example, the wizard power [_thunderwave_](ability:wizard/power/thunderwave) is a blast 3, which means the power affects a 3-square-by-3-square area adjacent to you. The blast must be adjacent to its origin square, which is a square in your space. The origin square is not affected by the blast. A blast affects a target only if the target is in the blast’s area and if there is line of effect from the origin square to the target.\n- **Burst:** A burst starts in an origin square and extends in all directions to a specified number of squares from the origin square. For example, the cleric power _flame strike_ is a burst 2 within 10 squares of you, which means the power originates in a square up to 10 squares away from you and affects the origin square and every square within 2 squares of it (a 5-square-by-5-square area). Unless a power description notes otherwise, a close burst you create does not affect you. However, an area burst you create does affect you. A burst affects a target only if there is line of effect from the burst’s origin square to the target.\n- **Wall:** A wall fills a specified number of contiguous squares within range, starting from an origin square. Each square of the wall must share a side—not just a corner—with at least one other square of the wall, but a square can share no more than two sides with other squares in the wall (this limitation does not apply when stacking squares on top of each other). You can shape the wall however you like within those limitations. A solid wall, such as a wall of ice, cannot be created in occupied squares.',
  },
})

export const ChoosingTargetsSection = Content.defineSection('combat/choosing-targets', {
  parent: AttacksAndDefensesSection,
  content: {
    name: 'Choosing Targets',
    description:
      'If you want to use a power against an enemy, the enemy must be within the range of your power, and you have to be able to target the enemy. Many powers allow you to target multiple enemies. Each of these enemies must be an eligible target.\n\nWhen you use a melee attack or a ranged attack, you can target a square instead of an enemy. This tactic is useful when an enemy has total concealment ([page 281](content:combat/concealment)) and you have to guess its location.',
  },
})

export const RangeSection = Content.defineSection('combat/range', {
  parent: ChoosingTargetsSection,
  content: {
    name: 'Range',
    description:
      'The first step in choosing targets for an attack is to check the attack’s range. Range is the distance from you to a target (or to the attack’s origin square). The range of each power is noted in its description.\n\nTo determine the range between you and a target, count the number of squares between you, including at least one square that the target occupies. If a target’s space is larger than 1 square, you can target that enemy if any square of its space is within range or within the area of effect of your attack.\n\n**Counting Distance:** When counting the distance from one square to another, start counting from any adjacent square (even one that is diagonally adjacent but around a corner) and then count around solid obstacles that fill their squares. You must choose the most direct path to a target when counting squares for range or when determining the extent of an area of effect.\n\n**Adjacent Squares:** Two squares are adjacent if a side or a corner of one touches a side or a corner of the other. Two creatures or objects are adjacent if one of them occupies a square adjacent to a square occupied by the other.\n\n**Nearest Creature or Square:** To determine the nearest creature or square to you, count distance normally. When two or more squares or creatures are equally close, you can pick either one as the nearest.\n\n**Personal:** When you use a power with a range of personal, you affect only yourself. Examples include creating magic armor on yourself or giving yourself the ability to fly.',
  },
})

export const SeeingAndTargetingSection = Content.defineSection('combat/seeing-and-targeting', {
  parent: ChoosingTargetsSection,
  content: {
    name: 'Seeing and Targeting',
    description:
      'Cluttered dungeon chambers, dense forests, or brooding ruins offer plenty of places for your enemies to hide. Figuring out whether you can see and target a particular enemy from where you’re standing is often important.\n\n**Line of Sight:** The first question is what you can see in an encounter area—that is, what is in your line of sight.\n\nTo determine whether you can see a target, pick a corner of your space and trace an imaginary line from that corner to any part of the target’s space. You can see the target if at least one line doesn’t pass through or touch an object or an effect—such as a wall, a thick curtain, or a cloud of fog—that blocks your vision.\n\nEven if you can see a target, objects and effects can still partially block your view. If you can see a target but at least one line passes through an obstruction, the target has cover or concealment ([page 280](content:combat/cover-and-concealment)). You can see a gnoll archer crouching behind a rock wall, but the wall makes him more difficult to hit, because the wall gives him cover. You can see a goblin standing at the edge of a fog cloud, but the fog makes him a shadowy figure, giving him concealment.\n\n**Line of Effect:** You can target a creature or a square if there’s an unblocked path between it and you—that is, if you have line of effect to it. If every imaginary line you trace to a target passes through or touches a solid obstacle, you don’t have line of effect to the target.\n\nFog, darkness, and other types of obscured squares block vision, but they don’t block line of effect. If you hurl a fireball into a pitch-black room, you don’t have to see your enemies for the fireball to hit them. In contrast, you can see through a transparent wall of magical force, but you don’t have line of effect through it. You can see the snarling demon on the other side, but the wall blocks attacks.\n\nYou need line of effect to any target you attack and to any space in which you wish to create an effect. When you make an area attack, you need line of effect to the attack’s origin square. To hit a target with the attack, there must be line of effect from the origin square to the target.',
  },
})

export const AttackRollSection = Content.defineSection('combat/attack-roll', {
  parent: AttacksAndDefensesSection,
  content: {
    name: 'Attack Roll',
    description:
      'To determine whether an attack succeeds, you make an attack roll. You roll a d20 and add your base attack bonus for that power. A power’s base attack bonus measures your accuracy with that attack and is the total of all modifiers that normally apply to it.\n\n**Attack Roll**\n\nRoll 1d20 and add the following:\n\n- The attack power’s base attack bonus\n- Situational attack modifiers ([page 279](content:combat/attack-modifiers)) that apply\n- Bonuses and penalties from powers affecting you\n\nThe power you use dictates which ability modifier adds to your base attack bonus and which of your target’s defenses you compare the result against. For example:\n\n| Power | Attack |\n| :--- | :--- |\n| [Melee basic attack](ability:common/melee-basic-attack) | Strength vs. AC |\n| [Ranged basic attack](ability:common/ranged-basic-attack) | Dexterity vs. AC |\n| _Stunning steel_ | Strength vs. Fortitude |\n| [_Fireball_](ability:wizard/power/fireball) | Intelligence vs. Reflex |\n| [_Cause fear_](ability:cleric/power/cause-fear) | Wisdom vs. Will |\n\nYour base attack bonus can change temporarily in certain circumstances, such as when you’re affected by a power that gives you an attack bonus or penalty, when a feat or a magic item gives you a bonus in certain circumstances, or when attack modifiers apply ([page 279](content:combat/attack-modifiers)).\n\n**Attack Bonuses**\n\nWhen you create your character, you should determine your base attack bonus for each power you know, including your basic attacks. Your base attack bonus for a power includes the following:\n\n- One-half your level\n- The ability score modifier used for the attack (the power you use specifies which ability)\n\nIn addition, any of the following factors might apply to an attack’s base attack bonus:\n\n- Your weapon’s proficiency bonus (if you’re using a weapon you’re proficient with)\n- Racial or feat bonuses\n- An enhancement bonus (usually from a magic weapon or an implement)\n- An item bonus\n- A power bonus\n- Untyped bonuses\n\n**Example:** Melech, a 7th-level tiefling wizard, attempts to hit three enemies with [_fireball_](ability:wizard/power/fireball), an Intelligence vs. Reflex attack. His attack roll against each target gets a +10 bonus, which includes +3 for one-half his level, his +5 Intelligence modifier, the +1 feat bonus from Hellfire Blood, and the +1 enhancement bonus from his _+1 wand of witchfire_. He could add a +2 bonus from his [Wand of Accuracy](trait:wizard/implement-mastery/wand-of-accuracy) class feature against one of his targets and a +1 racial bonus against any bloodied targets from his Bloodhunt racial trait.',
  },
})

export const DefensesSection = Content.defineSection('combat/defenses', {
  parent: AttacksAndDefensesSection,
  content: {
    name: 'Defenses',
    description:
      'Your ability to avoid injury and other ill effects is measured by four defenses: Armor Class, Fortitude, Reflex, and Will. Your defense scores rate how hard it is for an enemy to affect you with attacks.\n\n**[Armor Class](characteristic:armor-class) (AC)** measures how hard it is for your enemies to land a significant blow on you with a weapon or a magical effect that works like a weapon. Some characters have a high AC because they are extremely quick or intelligent and able to dodge well, while other characters have a high AC because they wear heavy protective armor that is difficult to penetrate.\n\n**[Fortitude](characteristic:fortitude)** measures the inherent toughness, mass, strength, and resilience of your physique. It is the key defense against attacks that include effects such as disease, poison, and forced movement.\n\n**[Reflex](characteristic:reflex)** measures your ability to predict attacks or to deflect or dodge an attack. It’s useful against areas of effect such as dragon breath or a [_fireball_](ability:wizard/power/fireball) spell.\n\n**[Will](characteristic:will)** is your defense against effects that daze, disorient, confuse, or overpower your mind. It measures your strength of will, self-discipline, and devotion.\n\n**Defense Scores**\n\nYou determine your defense scores as follows.\n\n- **Base Defense:** All defenses start with 10 + one-half your level.\n- **Armor Class:** Add the armor bonus of the armor you wear and the shield bonus of the shield you carry. If you’re wearing light armor or no armor, also add your Dexterity modifier or Intelligence modifier, whichever is higher.\n- **Fortitude:** Add your Strength modifier or Constitution modifier, whichever is higher.\n- **Reflex:** Add your Dexterity modifier or Intelligence modifier, whichever is higher. If you’re using a shield, add its shield bonus.\n- **Will:** Add your Wisdom modifier or Charisma modifier, whichever is higher.\n\nAlso add any of the following that apply:\n\n- Racial or feat bonuses\n- An enhancement bonus (usually from a neck slot magic item)\n- An item bonus\n- A power bonus\n- Untyped bonuses\n\nYour defenses can change temporarily in certain circumstances—for instance, if you’re affected by a power or condition that increases or lowers your defense scores, or if a feat or a magic item gives you a bonus under certain circumstances.\n\n**Example:** Brandis, a 23rd-level human fighter, has the following defenses.\n\n**AC 38** = 10 + 11 (one-half level) + 11 (armor bonus from warplate armor) + 2 (shield bonus from a heavy shield) + 4 (enhancement bonus from _+4 battleforged armor_).\n\n**Reflex 31** = 10 + 11 (one-half level) + 1 (racial bonus) + 2 (Dexterity modifier) + 2 (shield bonus from a heavy shield) + 5 (enhancement bonus from _cloak of resistance +5_).\n\n**Fortitude 35** = 10 + 11 (one-half level) + 1 (racial bonus) + 2 (fighter class) + 6 (Strength modifier) + 5 (enhancement bonus from _cloak of resistance +5_)\n\n**Will 31** = 10 + 11 (one-half level) + 1 (racial bonus) + 2 (Wisdom modifier) + 2 (feat bonus from Iron Will) + 5 (enhancement bonus from _cloak of resistance +5_)\n\nWhen Brandis’s warlord ally uses her _hallowed ground_ power, he gains a +2 power bonus to all defenses when he stands within the power’s zone.',
  },
})

export const BonusesAndPenaltiesSection = Content.defineSection('combat/bonuses-and-penalties', {
  parent: DefensesSection,
  content: {
    name: 'Bonuses and Penalties',
    description:
      'Attack rolls, damage rolls, defenses, skill checks, and ability checks are often modified by bonuses and penalties.\n\n**Bonuses:** There’s one important rule for bonuses: Don’t add together bonuses of the same type to the same roll or score. If you have two bonuses of the same type that apply to the same roll or score, use the higher bonus.\n\nAn **armor bonus** is granted by your armor. The bonus applies as long as you wear the armor.\n\nAn **enhancement bonus** augments your attack rolls and damage rolls or your defenses. You gain an enhancement bonus to AC when wearing magic armor, an enhancement bonus to attack rolls and damage rolls when wielding a magic weapon or implement, and an enhancement bonus to Fortitude, Reflex, and Will when wearing a magic item that occupies the neck item slot (see [page 249](content:equipment/neck-slot-items)). You can benefit from a magic weapon, magic armor, and a magic cloak at the same time, since their enhancement bonuses add to different rolls or scores.\n\nA **feat bonus** is granted by a feat. The bonus applies as long as you have the feat.\n\nAn **item bonus** is granted by certain magic items. The bonus applies as long as you wear the item.\n\nA **power bonus** derives from a power or a class feature. Power bonuses are usually temporary or situational.\n\nThe **proficiency bonus** gained from proficiency with a weapon applies to attack rolls made using that weapon. You gain the proficiency bonus only when using powers that have the weapon keyword.\n\nA **racial bonus** is granted by your race. An elf’s Group Awareness trait, for example, grants non-elf allies within 5 squares a +1 racial bonus to Perception checks.\n\nA **shield bonus** is granted by your shield. Shield bonuses apply to AC and Reflex defense. Powers, feats, or magic items might provide a shield bonus; these typically help only characters who aren’t using shields.\n\nSome bonuses are **untyped** (“a +2 bonus”). Most of these are situational and add together with other bonus you have, including other untyped bonuses.\n\n**Penalties:** Unlike bonuses, penalties don’t have types. Penalties add together, unless they’re from the same power. If two monsters attack you with the same power and each causes you to take a penalty to a particular roll or score, you don’t add the penalties together; you take the worst penalty.\n\nA penalty might be effectively canceled by a bonus and vice versa. If you gain a +2 bonus to attack rolls and take a –2 penalty to attack rolls at the same time, you end up with a +0 modifier.',
  },
})

export const AttackResultsSection = Content.defineSection('combat/attack-results', {
  parent: AttacksAndDefensesSection,
  content: {
    name: 'Attack Results',
    description:
      'You resolve an attack by comparing the total of your attack roll (1d20 + base attack bonus + attack modifiers) to the appropriate defense score. If your roll is higher than or equal to the defense score, you hit. Otherwise, you miss.\n\nWhen you hit, you usually deal damage and sometimes produce some other effect. When you’re using a power, the power description tells you what happens when you hit. Some descriptions also say what happens when you miss or when you score a critical hit.\n\n**Attack Results**\n\nWhen you make an attack, compare your attack roll to the appropriate defense score of the target.\n\n- **Hit:** If the attack roll is higher than or equal to the defense score, the attack hits and deals damage, has a special effect, or both.\n\n  _Automatic Hit:_ If you roll a natural 20 (the die shows a 20), your attack automatically hits.\n\n  _Critical Hit:_ If you roll a natural 20 (the die shows a 20), your attack might be a critical hit ([page 278](content:combat/critical-hits)). A critical hit deals maximum damage, and some powers and magic items have an extra effect on a critical hit.\n- **Miss:** If your attack roll is lower than the defense score, the attack misses. Usually, there’s no effect. Some powers have an effect on a miss, such as dealing half damage.\n\n  _Automatic Miss:_ If you roll a natural 1 (the die shows a 1), your attack automatically misses.',
  },
})

export const DamageSection = Content.defineSection('combat/damage', {
  parent: AttackResultsSection,
  content: {
    name: 'Damage',
    description:
      'When you hit with an attack, you normally deal damage to your target, reducing the target’s [hit points](characteristic:hit-points). The damage you deal depends on the power you use for the attack. Most powers deal more damage than basic attacks do, and high-level powers generally deal more damage than low-level ones. If you use a weapon to make the attack, your weapon also affects your damage. If you use a greataxe to deliver a power, you deal more damage than if you use a dagger with the same power.\n\n**Damage Rolls**\n\n- Roll the damage indicated in the power description. If you’re using a weapon for the attack, the damage is some multiple of your weapon damage dice.\n- Add the ability modifier specified in the power description. Usually, this is the same ability modifier you used to determine your base attack bonus for the attack.\n\nIn addition, any of the following factors might apply to a damage roll:\n\n- Racial or feat bonuses\n- An enhancement bonus (usually from a magic weapon or an implement)\n- An item bonus\n- A power bonus\n- Untyped bonuses\n\n**Weapon Damage Dice:** A [W] in a damage expression stands for your weapon’s damage dice. (The weapon tables on [pages 218–219](content:equipment/melee-weapons) show damage dice for all weapons.) The number before the [W] indicates the number of times you roll your weapon dice. If a power’s damage is “2[W] + Strength modifier” and you use a dagger (1d4 damage), roll 2d4, then add your Strength modifier. If you use a heavy flail (2d6 damage) with the same power, roll 4d6, then add your Strength modifier.\n\n**Damage Types:** In addition to normal damage, such as the damage a weapon or a monster’s claws deal, powers and other effects can deal specific types of damage. For example, a hell hound’s breath deals fire damage, a scorpion’s sting deals poison damage, a mind flayer’s telepathic blast deals psychic damage, and a wraith’s touch deals necrotic damage.\n\nWhen a power deals a specific type of damage, the power description specifies the type before the word “damage.” A [_fireball_](ability:wizard/power/fireball) deals 3d6 + Intelligence modifier fire damage, for example. All the damage it deals is fire damage. If a power doesn’t specify a damage type, the damage has no type.\n\n**Example:** Valenae. a 12th-level eladrin paladin, hits a foe with _thunder smite_. The attack deals 2[W] + Strength modifier thunder damage and knocks the target prone. The damage would be 2d8 (longsword’s 1d8 × 2) + 7. The +7 bonus includes her +3 Strength modifier, a +2 feat bonus ([Weapon Focus](trait:feat/weapon-focus)), and a +2 enhancement bonus (from her _+2 thundering longsword_).\n\nIf she scores a critical hit, she deals maximum damage of 23 points and adds 2d6 thunder damage from her _thundering longsword_. If she wanted to use her _thundering longword_’s encounter power on this hit, she would add 10 thunder damage and push 1.',
  },
})

export const ResistanceAndVulnerabilitySection = Content.defineSection('combat/resistance-and-vulnerability', {
  parent: AttackResultsSection,
  content: {
    name: 'Resistance and Vulnerability',
    description:
      'Some creatures are resistant or vulnerable to certain types of damage. Some powers can grant you a similar resistance, or impose vulnerability on an enemy.\n\n**Resist:** Resistance means you take less damage from a specific damage type. If you have resist 5 fire, then any time you take fire damage, you reduce that damage by 5. (An attack can’t do less than 0 damage to you.)\n\n**Vulnerable:** Being vulnerable to a damage type means you take extra damage from that damage type. If you have vulnerable 5 fire, then any time you take fire damage, you take an additional 5 fire damage.\n\nSome creatures have additional weaknesses tied to damage types. For example, if you use cold against an elemental made of magma, you might slow it or otherwise hinder its moves or attacks.',
  },
})

export const ConditionsSection = Content.defineSection('combat/conditions', {
  parent: AttackResultsSection,
  content: {
    name: 'Conditions',
    description:
      'Powers, monsters, traps, and the environment can all cause conditions. A condition imposes a penalty, a vulnerability, a hindrance, or a combination of effects.\n\nThe Remove Affliction ritual (page 311) can be useful for eliminating a long-lasting condition that affects you.',
  },
})

export const BlindedSection = Content.defineSection('combat/blinded', {
  parent: ConditionsSection,
  content: {
    name: 'Blinded',
    description:
      '- You grant [combat advantage](content:combat/combat-advantage).\n- You can’t see any target (your targets have total concealment).\n- You take a –10 penalty to [Perception](characteristic:skill/perception) checks.\n- You can’t [flank](content:combat/flanking) an enemy.',
  },
})

export const DazedSection = Content.defineSection('combat/dazed', {
  parent: ConditionsSection,
  content: {
    name: 'Dazed',
    description:
      '- You grant [combat advantage](content:combat/combat-advantage).\n- You can take either a [standard action](action-type:standard-action), a [move action](action-type:move-action), or a [minor action](action-type:minor-action) on your turn (you can also take [free actions](action-type:free-action)). You can’t take immediate actions or opportunity actions.\n- You can’t [flank](content:combat/flanking) an enemy.',
  },
})

export const DeafenedSection = Content.defineSection('combat/deafened', {
  parent: ConditionsSection,
  content: {
    name: 'Deafened',
    description: '- You can’t hear anything.\n- You take a –10 penalty to [Perception](characteristic:skill/perception) checks.',
  },
})

export const DominatedSection = Content.defineSection('combat/dominated', {
  parent: ConditionsSection,
  content: {
    name: 'Dominated',
    description:
      '- You’re [dazed](content:combat/dazed).\n- The dominating creature chooses your action. The only powers it can make you use are at-will powers.',
  },
})

export const DyingSection = Content.defineSection('combat/dying', {
  parent: ConditionsSection,
  content: {
    name: 'Dying',
    description:
      '- You’re [unconscious](content:combat/unconscious).\n- You’re at 0 or negative [hit points](characteristic:hit-points).\n- You make a death saving throw every round.',
  },
})

export const HelplessSection = Content.defineSection('combat/helpless', {
  parent: ConditionsSection,
  content: {
    name: 'Helpless',
    description:
      '- You grant [combat advantage](content:combat/combat-advantage).\n- You can be the target of a [coup de grace](content:combat/coup-de-grace).\n\n_Note:_ Usually you’re helpless because you’re unconscious.',
  },
})

export const ImmobilizedSection = Content.defineSection('combat/immobilized', {
  parent: ConditionsSection,
  content: {
    name: 'Immobilized',
    description: '- You can’t move from your space, although you can teleport and can be forced to move by a pull, a push, or a slide.',
  },
})

export const MarkedSection = Content.defineSection('combat/marked', {
  parent: ConditionsSection,
  content: {
    name: 'Marked',
    description: '- You take a –2 penalty to attack rolls for any attack that doesn’t target the creature that marked you.',
  },
})

export const PetrifiedSection = Content.defineSection('combat/petrified', {
  parent: ConditionsSection,
  content: {
    name: 'Petrified',
    description:
      '- You have been turned to stone.\n- You can’t take actions.\n- You gain resist 20 to all damage.\n- You are unaware of your surroundings.\n- You don’t age.',
  },
})

export const ProneSection = Content.defineSection('combat/prone', {
  parent: ConditionsSection,
  content: {
    name: 'Prone',
    description:
      '- You grant [combat advantage](content:combat/combat-advantage) to enemies making melee attacks against you.\n- You get a +2 bonus to all defenses against ranged attacks from nonadjacent enemies.\n- You’re lying on the ground. (If you’re flying, you safely descend a distance equal to your fly speed. If you don’t reach the ground, you fall.)\n- You take a –2 penalty to attack rolls.\n- You can drop prone as a [minor action](action-type:minor-action).',
  },
})

export const RestrainedSection = Content.defineSection('combat/restrained', {
  parent: ConditionsSection,
  content: {
    name: 'Restrained',
    description:
      '- You grant [combat advantage](content:combat/combat-advantage).\n- You’re [immobilized](content:combat/immobilized).\n- You can’t be forced to move by a pull, a push, or a slide.\n- You take a –2 penalty to attack rolls.',
  },
})

export const SlowedSection = Content.defineSection('combat/slowed', {
  parent: ConditionsSection,
  content: {
    name: 'Slowed',
    description:
      '- Your [speed](characteristic:speed) becomes 2. This speed applies to all your movement modes, but it does not apply to teleportation or to a pull, a push, or a slide. You can’t increase your speed above 2, and your speed doesn’t increase if it was lower than 2. If you’re slowed while moving, stop moving if you have already moved 2 or more squares.',
  },
})

export const StunnedSection = Content.defineSection('combat/stunned', {
  parent: ConditionsSection,
  content: {
    name: 'Stunned',
    description:
      '- You grant [combat advantage](content:combat/combat-advantage).\n- You can’t take actions.\n- You can’t [flank](content:combat/flanking) an enemy.',
  },
})

export const SurprisedSection = Content.defineSection('combat/surprised', {
  parent: ConditionsSection,
  content: {
    name: 'Surprised',
    description:
      '- You grant [combat advantage](content:combat/combat-advantage).\n- You can’t take actions, other than [free actions](action-type:free-action).\n- You can’t [flank](content:combat/flanking) an enemy.',
  },
})

export const UnconsciousSection = Content.defineSection('combat/unconscious', {
  parent: ConditionsSection,
  content: {
    name: 'Unconscious',
    description:
      '- You’re [helpless](content:combat/helpless).\n- You take a –5 penalty to all defenses.\n- You can’t take actions.\n- You fall [prone](content:combat/prone), if possible.\n- You can’t [flank](content:combat/flanking) an enemy.',
  },
})

export const WeakenedSection = Content.defineSection('combat/weakened', {
  parent: ConditionsSection,
  content: { name: 'Weakened', description: '- Your attacks deal half damage. Ongoing damage you deal is not affected.' },
})

export const InsubstantialSection = Content.defineSection('combat/insubstantial', {
  parent: AttackResultsSection,
  content: {
    name: 'Insubstantial',
    description:
      'Some creatures, such as wailing ghosts, are insubstantial, and some powers can make you insubstantial. When you are insubstantial, you take half damage from any attack that deals damage to you. Ongoing damage is also halved.',
  },
})

export const OngoingDamageSection = Content.defineSection('combat/ongoing-damage', {
  parent: AttackResultsSection,
  content: {
    name: 'Ongoing Damage',
    description:
      'Some powers deal extra damage on consecutive turns after the initial attack. An efreet might hit you with a burst of fire that sets you alight, dealing ongoing fire damage. When a snake’s venom courses through your blood, it deals ongoing poison damage. A mummy’s rotting touch deals ongoing necrotic damage, and a kruthik’s corrosive spittle deals ongoing acid damage.\n\n**Ongoing Damage**\n\n- **Start of Your Turn:** You take the specified damage at the start of your turn. _Example:_ If you’re taking ongoing 5 fire damage, you take 5 points of fire damage at the start of your turn.\n- **Saving Throw:** Each round at the end of your turn, make a saving throw ([page 279](content:combat/saving-throws)) against ongoing damage. If you succeed, you stop taking the ongoing damage.\n- **Different Types of Ongoing Damage:** If effects deal ongoing damage of different types, you take damage from each effect every round. You make a separate saving throw against each damage type.\n- **The Same Type of Ongoing Damage:** If effects deal ongoing damage of the same type, or if the damage has no type, only the higher number applies. _Example:_ You’re taking ongoing 5 damage (no type) when a power causes you to take ongoing 10 damage. You’re now taking ongoing 10 damage, not 15.',
  },
})

export const CriticalHitsSection = Content.defineSection('combat/critical-hits', {
  parent: AttackResultsSection,
  content: {
    name: 'Critical Hits',
    description:
      'When you roll a natural 20 and your total attack roll is high enough to hit your target’s defense, you score a critical hit, also known as a crit.\n\n**Critical Hit Damage**\n\n- **Natural 20:** If you roll a 20 on the die when making an attack roll, you score a critical hit if your total attack roll is high enough to hit your target’s defense. If your attack roll is too low to score a critical hit, you still hit automatically.\n- **Precision:** Some class features and powers allow you to score a critical hit when you roll numbers other than 20 (only a natural 20 is an automatic hit).\n- **Maximum Damage:** Rather than roll damage, determine the maximum damage you can roll with your attack. This is your critical damage. (Attacks that don’t deal damage still don’t deal damage on a critical hit.)\n- **Extra Damage:** Magic weapons and implements, as well as high crit weapons, can increase the damage you deal when you score a critical hit. If this extra damage is a die roll, it’s not automatically maximum damage; you add the result of the roll.\n\nYou automatically score a critical hit when you deal a coup de grace ([page 288](content:combat/coup-de-grace)).',
  },
})

export const ForcingMovementSection = Content.defineSection('combat/forcing-movement', {
  parent: AttackResultsSection,
  content: {
    name: 'Forcing Movement',
    description:
      'Some powers allow you to force your target to move in specific ways. Depending on the power, you can pull, push, or slide your target (see “[Pull, Push, and Slide](content:combat/pull-push-and-slide),” page 285).',
  },
})

export const DurationsSection = Content.defineSection('combat/durations', {
  parent: AttacksAndDefensesSection,
  content: {
    name: 'Durations',
    description:
      'Many powers take effect and then end; their effects are instantaneous, perhaps as brief as a single swing of your sword. Some powers last beyond your turn, however.\n\nUnless otherwise noted, a power is instantaneous and has no lasting effect. The two types of durations are conditional and sustained.\n\n**Durations**\n\n- **Conditional Durations:** These effects last until a specified event occurs.\n\n  _Until the Start of Your Next Turn:_ The effect ends when your next turn starts.\n\n  _Until the End of Your Next Turn:_ The effect ends when your next turn ends.\n\n  _Until the End of the Encounter:_ The effect ends when you take a rest (short or extended) or after 5 minutes.\n\n  _Save Ends:_ The effect ends when the target makes a successful saving throw against it.\n- **Sustained Durations:** An effect that has a “sustain standard,” a “sustain move,” or a “sustain minor” duration lasts as long as you sustain it. Starting on the turn after you create an effect, you sustain the effect by taking the indicated action: a [standard action](action-type:standard-action), a [move action](action-type:move-action), or a [minor action](action-type:minor-action). (You can sustain an effect once per turn.) Some effects do something, such as attack, when you sustain them. A power’s description indicates what happens when you sustain it or let it lapse. At the end of your turn, if you haven’t spent the required action to sustain the effect, the effect ends.\n- **Overlapping Durations:** If a target is affected by multiple powers that have the same effect but end at different times, the effect with the most time remaining applies.\n\nUnless a description says otherwise, you can sustain a power with a sustained duration for as long as 5 minutes. However, you can’t rest while sustaining a power, so you can’t regain the use of your encounter powers or [second wind](ability:common/second-wind) until you stop sustaining a power.\n\nRituals (see [Chapter 10](content:rituals)) can create effects that last for hours, days, or years.',
  },
})

export const SavingThrowsSection = Content.defineSection('combat/saving-throws', {
  parent: AttacksAndDefensesSection,
  content: {
    name: 'Saving Throws',
    description:
      'When you’re under a persistent effect or condition that can be ended by a save (“save ends”), you have a chance to escape the effect each round at the end of your turn. You do that by making a saving throw, which is a d20 roll unmodified by your level or ability modifiers. A successful saving throw is called a **save**.\n\n**Saving Throws**\n\n- **End of Turn:** At the end of your turn, you make a saving throw against each effect on you that a save can end. Roll a d20, with one of the following results:\n\n  _Lower than 10:_ Failure. The effect continues.\n\n  _10 or higher:_ Success. The effect ends.\n- **Choose Order:** Whenever you make a saving throw, you choose which effect to roll against first, which effect to roll against second, and so on.\n- **Modifiers:** A saving throw normally doesn’t include modifiers; it’s just a d20 roll. Some powers, feats, or racial traits might modify a saving throw.\n\nA saving throw gives you slightly better than even odds to shake off an effect. Most of the time, you can’t improve the odds, and your chance of success doesn’t have anything to do with an effect’s severity. What makes a giant snake’s poison worse than a normal snake’s is not how hard it is to shake off the poison’s effects, but how easily it affects you in the first place (its attack bonus) and what it does to you while it remains in your system (its ongoing damage or other effect).\n\nEach round, at the end of your turn, you roll a saving throw against each effect on you. Sometimes an effect is a single condition or one type of ongoing damage ([page 278](content:combat/ongoing-damage)). Another kind of effect is like an imp’s hellish poison, which includes both ongoing poison damage and a –2 penalty to Will defense. You don’t make separate saving throws against the ongoing poison damage and the Will defense penalty; you make a single saving throw each round against the hellish poison itself.\n\nSome powers create effects that require multiple saving throws to fully escape. These powers include aftereffects that apply after you save against the initial effect. For example, a power might knock you unconscious until you save but have an aftereffect that slows you. Once you save against the unconscious condition, you need to save against the slowed condition before you’ve fully escaped the power’s effects.\n\nAn aftereffect doesn’t begin until after you’ve rolled all your saving throws at the end of your turn. This means you can’t make a saving throw against an aftereffect at the end of the same turn when you saved against the initial effect.',
  },
})

export const AttackModifiersSection = Content.defineSection('combat/attack-modifiers', {
  parent: CombatSection,
  content: {
    name: 'Attack Modifiers',
    description:
      'Combat rarely consists of foes standing toe to toe and bashing each other. Movement and position are key; if one archer can fire from behind a tree at an enemy archer out in the open, the one using the tree for cover enjoys an advantage. Similarly, the use of magic or special abilities often creates opportunities you can exploit. If your wizard ally turns you invisible, you can easily evade your enemies, but if an enemy wizard stuns you with a spell, you drop your guard, and your enemies can easily gang up on you.\n\nTemporary advantages and disadvantages in combat are reflected in a set of common attack modifiers. An attack modifier is a bonus or a penalty that applies to your attack roll. Add the modifier to your base attack bonus when you make an attack.\n\n**Attack Modifiers**\n\n| Circumstance | Modifier |\n| :--- | :--- |\n| Combat advantage against target | +2 |\n| Attacker is prone | –2 |\n| Attacker is restrained | –2 |\n| Target has cover | –2 |\n| Target has superior cover | –5 |\n| Target has concealment (melee and ranged only) | –2 |\n| Target has total concealment (melee and ranged only) | –5 |\n| Long range (weapon attacks only) | –2 |\n| Charge attack (melee only) | +1 |',
  },
})

export const CombatAdvantageSection = Content.defineSection('combat/combat-advantage', {
  parent: AttackModifiersSection,
  content: {
    name: 'Combat Advantage',
    description:
      'One of the most common attack modifiers is combat advantage. Combat advantage represents a situation in which the defender can’t give full attention to defense. The defender is pressed by multiple enemies at the same time, stunned, distracted, or otherwise caught off guard. When you have combat advantage against a target, you gain a +2 bonus to your attack rolls against that target.\n\nSome powers require you to have combat advantage in order to use them against a target, and other powers have a better effect against a target you have combat advantage against. If a feat, power, or other ability grants you a benefit when you have combat advantage, that benefit applies only against a target you have combat advantage against.\n\n**Combat Advantage**\n\n- **+2 Bonus to Attack Rolls:** You gain a +2 bonus to your attack roll when you have combat advantage against the target of your attack.\n- **Able to See Target:** You must be able to see a target to gain combat advantage against it.\n\nThe following situations give an attacker combat advantage against a defender.\n\nWhen a defender is . . .\n\n- Balancing ([page 180](characteristic:skill/acrobatics))\n- [Blinded](content:combat/blinded) (page 277)\n- Climbing ([page 182](characteristic:skill/athletics))\n- [Dazed](content:combat/dazed) (page 277)\n- Flanked by the attacker ([page 285](content:combat/flanking))\n- [Helpless](content:combat/helpless) (page 277)\n- [Prone](content:combat/prone) (melee attacks only) (page 277)\n- [Restrained](content:combat/restrained) (page 277)\n- Running ([page 291](content:combat/run))\n- Squeezing ([page 292](content:combat/squeeze))\n- [Stunned](content:combat/stunned) (page 277)\n- [Surprised](content:combat/surprised) (page 277)\n- Unable to see the attacker ([page 281](content:combat/concealment))\n- Unaware of you ([page 188](characteristic:skill/stealth))\n- [Unconscious](content:combat/unconscious) (page 277)\n\nOnce per encounter, you can try to gain combat advantage against a target by making a [Bluff](characteristic:skill/bluff) check (page 183).\n\nCombat advantage is relative. In any given pair of combatants, either, both, or neither might have combat advantage against the other. It’s possible for a single creature to be adjacent to one enemy that has combat advantage against it and a second enemy that does not.',
  },
})

export const CoverAndConcealmentSection = Content.defineSection('combat/cover-and-concealment', {
  parent: AttackModifiersSection,
  content: {
    name: 'Cover and Concealment',
    description:
      'Many types of terrain offer you places to hide or obstructions you can duck behind in order to avoid attacks. Solid obstructions that can physically deflect or stop objects are considered cover. Objects or effects that don’t physically impede an attack but instead hide you from an enemy’s view are considered concealment.',
  },
})

export const CoverSection = Content.defineSection('combat/cover', {
  parent: CoverAndConcealmentSection,
  content: {
    name: 'Cover',
    description:
      'Enemies behind a low wall, around a corner, or behind a tree enjoy some amount of cover; you can’t hit them as easily as you normally could.\n\n**Cover**\n\n- **Cover (–2 Penalty to Attack Rolls):** The target is around a corner or protected by terrain. For example, the target might be in the same square as a small tree, obscured by a small pillar or a large piece of furniture, or behind a low wall.\n- **Superior Cover (–5 Penalty to Attack Rolls):** The target is protected by a significant terrain advantage, such as when fighting from behind a window, a portcullis, a grate, or an arrow slit.\n- **Area Attacks and Close Attacks:** When you make an area attack or a close attack, a target has cover if there is an obstruction between the origin square and the target, not between you and the target.\n- **Reach:** If a creature that has reach attacks through terrain that would grant cover if the target were in it, the target has cover. For example, even if you’re not in the same square as a small pillar, it gives you cover from the attack of an ogre on the other side of the pillar.\n- **Creatures and Cover:** When you make a ranged attack against an enemy and other enemies are in the way, your target has cover. Your allies never grant cover to your enemies, and neither allies nor enemies give cover against melee, close, or area attacks.\n- **Determining Cover:** To determine if a target has cover, choose a corner of a square you occupy (or a corner of your attack’s origin square) and trace imaginary lines from that corner to every corner of any one square the target occupies. If one or two of those lines are blocked by an obstacle or an enemy, the target has cover. (A line isn’t blocked if it runs along the edge of an obstacle’s or an enemy’s square.) If three or four of those lines are blocked but you have line of effect, the target has superior cover.',
  },
})

export const ConcealmentSection = Content.defineSection('combat/concealment', {
  parent: CoverAndConcealmentSection,
  content: {
    name: 'Concealment',
    description:
      'If you can’t get a good look at your target, it has concealment from you, which means your attack rolls take a penalty against that target. You might be fighting in an area of dim light (see “[Vision and Light](content:adventuring/vision-and-light),” page 262), in an area filled with smoke or mist, or among terrain features that get in the way of your vision, such as foliage.\n\n**Obscured Squares**\n\n- **Lightly Obscured:** Squares of dim light, foliage, fog, smoke, heavy falling snow, or rain are lightly obscured.\n- **Heavily Obscured:** Squares of heavy fog, heavy smoke, or heavy foliage are heavily obscured.\n- **Totally Obscured:** Squares of darkness are totally obscured.\n\nEffects that cause concealment obscure vision without preventing attacks.\n\n**Concealment**\n\n- **Concealment (–2 Penalty to Attack Rolls):** The target is in a lightly obscured square or in a heavily obscured square but adjacent to you.\n- **Total Concealment (–5 Penalty to Attack Rolls):** You can’t see the target. The target is invisible, in a totally obscured square, or in a heavily obscured square and not adjacent to you.\n- **Melee Attacks and Ranged Attacks Only:** Attack penalties from concealment apply only to the targets of melee or ranged attacks.\n\nPart of the challenge of attacking a target you can’t see is knowing where to direct your attack. You have to choose a square to attack, and the target might not even be in that square (see “[Targeting What You Can’t See](content:combat/targeting-what-you-cant-see),” below).\n\nA variety of powers and other effects can render you invisible, effectively giving you total concealment.',
  },
})

export const InvisibleSection = Content.defineSection('combat/invisible', {
  parent: ConcealmentSection,
  content: {
    name: 'Invisible',
    description:
      '- You can’t be seen by normal forms of vision.\n- You have [combat advantage](content:combat/combat-advantage) against any enemy that can’t see you.\n- You don’t provoke [opportunity attacks](content:combat/opportunity-attack) from enemies that can’t see you.',
  },
})

export const TargetingWhatYouCantSeeSection = Content.defineSection('combat/targeting-what-you-cant-see', {
  parent: CoverAndConcealmentSection,
  content: {
    name: 'Targeting What You Can’t See',
    description:
      'If you’re fighting a creature you can’t see—when a creature is invisible, you’re blinded, or you’re fighting in darkness you can’t see through—you have to target a square rather than the creature. You also have to figure out which square to attack. Here’s how it works.\n\n**Invisible Creature Uses Stealth:** At the end of a concealed creature’s turn, it makes a [Stealth](characteristic:skill/stealth) check opposed by your passive [Perception](characteristic:skill/perception) check. If you beat it, you know there’s a creature present that you can’t see, and you know the direction to its location. If you beat it by 10 or more, you know exactly what square the creature ended its turn in. The concealed creature also makes a Stealth check if it takes an immediate action or an opportunity action.\n\n**Make a Perception Check:** On your turn, you can make an active Perception check as a minor action, comparing the result to the concealed creature’s last Stealth check. If you win, you know the direction to the creature’s location, or its exact location if you beat it by 10 or more.\n\n**Pick a Square and Attack:** Choose a square to attack, using whatever information you’ve gleaned so far about the target’s location. Roll the attack normally (taking the –5 penalty for attacking a creature that has total concealment). If you pick the wrong square, your attack automatically misses, but only the DM knows whether you guessed the wrong square or your attack just missed.\n\n**Close or Area Attacks:** You can make a close attack or an area attack that includes the square you think (or know) the concealed creature is in. Your attack roll doesn’t take a penalty from the target’s concealment.',
  },
})

export const MovementAndPositionSection = Content.defineSection('combat/movement-and-position', {
  parent: CombatSection,
  content: {
    name: 'Movement and Position',
    description:
      'During a pitched battle, heroes and monsters are in constant motion. The rogue skirts the melee, looking for a chance to set up a deadly flanking attack. The wizard keeps a distance from the enemy and tries to find a position to make the best use of area attacks, while goblin archers move to get clear shots with their bows. You can increase your effectiveness in battle by learning how to use movement and position to your advantage.',
  },
})

export const CreatureSizeAndSpaceSection = Content.defineSection('combat/creature-size-and-space', {
  parent: MovementAndPositionSection,
  content: {
    name: 'Creature Size and Space',
    description:
      'Each creature falls into one of six size categories, which correspond to the number of squares a creature occupies on the battle grid. A creature’s space is an expression of the number of squares it occupies.\n\n**Special Rules for Size**\n\nCreatures smaller than Small or larger than Medium have special rules relating to position and attacking.\n\n- **Tiny:** Four individual Tiny creatures can fit in a square, but a swarm of Tiny creatures might consist of hundreds, or even thousands, of them in a square. Most Tiny creatures can’t attack, and if they can, they can’t attack adjacent targets. They can attack only targets in the space they occupy. They can enter and end their turn in a larger creature’s space.\n- **Small:** Small creatures occupy the same amount of space as Medium creatures. However, Small creatures cannot use two-handed weapons. If a one-handed weapon can be used two-handed for extra damage, a Small creature must use it two-handed and doesn’t extra damage by doing so.\n- **Large, Huge, and Gargantuan:** Very large creatures take up more than 1 square. For example, an ogre takes up a space 2 squares by 2 squares. Most Large and larger creatures have melee reach greater than 1 square—that is, they can make melee attacks against creatures that aren’t adjacent to them. A creature’s basic body shape usually determines its reach—a Large ogre has a reach of 2, but a Large horse has a reach of 1.\n\n| Size | Example | Space | Reach |\n| :--- | :--- | :--- | :--- |\n| Tiny | Rat | 1/2\\* | 0 |\n| Small | Goblin | 1 | 1 |\n| Medium | Human | 1 | 1 |\n| Large | Troll | 2 × 2 | 1–2 |\n| Huge | Death titan | 3 × 3 | 2–3 |\n| Gargantuan | Ancient dragon | 4 × 4 or larger | 3–4 |\n\n\\*Four individual Tiny creatures can fit in a square. More can fit if the creatures are a swarm.',
  },
})

export const SpeedSection = Content.defineSection('combat/speed', {
  parent: MovementAndPositionSection,
  content: {
    name: 'Speed',
    description:
      'Your [speed](characteristic:speed) is measured in squares on the battle grid, with each 1-inch square representing a 5-foot square in the game world. A character who has a speed of 6 can move up to 6 squares (or 30 feet) on the battle grid by using a [move action](action-type:move-action). Your speed is determined by your race and the armor you wear.\n\n**Determining Speed**\n\nDetermine your speed as follows:\n\n- Start with your race’s speed.\n- Take your armor’s speed penalty, if applicable.\n- Add any bonuses that apply.\n\nYour speed is your base walking speed, in contrast to your speed while swimming or, if you’re affected by a power, flying.',
  },
})

export const TacticalMovementSection = Content.defineSection('combat/tactical-movement', {
  parent: MovementAndPositionSection,
  content: {
    name: 'Tactical Movement',
    description:
      'During your turn, you can use a move action to move some distance across the battlefield and still use a standard action to launch an attack. See “[Actions in Combat](content:combat/actions-in-combat),” page 286, for various move actions you can use in combat. All move actions are governed by the following rules.',
  },
})

export const DiagonalMovementSection = Content.defineSection('combat/diagonal-movement', {
  parent: TacticalMovementSection,
  content: {
    name: 'Diagonal Movement',
    description:
      'Moving diagonally works the same as other movement, except you can’t cross the corner of a wall or another obstacle that fills the corner between the square you’re in and the square you want to move to. You can move diagonally past most creatures, since they don’t completely fill their squares.',
  },
})

export const OccupiedSquaresSection = Content.defineSection('combat/occupied-squares', {
  parent: TacticalMovementSection,
  content: {
    name: 'Occupied Squares',
    description:
      'A creature is considered to occupy the square or squares within its space.\n\n**Moving through Occupied Squares**\n\n- **Ally:** You can move through a square occupied by an ally.\n- **Enemy:** You normally can’t move through an enemy’s space unless that enemy is helpless or two size categories larger or smaller than you.\n\n  Moving into a nonhelpless enemy’s space provokes an opportunity attack from that enemy, because you left a square adjacent to the enemy. (Some powers let you move through an enemy’s square without provoking an opportunity attack.)\n- **Ending Movement:** You can end your movement in an ally’s square only if the ally is prone. You can end your movement in an enemy’s square only if the enemy is helpless. However, Tiny creatures can end their movement in a larger creature’s square. If you don’t have enough movement remaining to reach a square you are allowed to be in, your move ends in the last square you could occupy.\n- **Standing Up:** If you’re prone and in the same square as another creature, see “[Stand Up](content:combat/stand-up),” page 292, for how to stand up.',
  },
})

export const TerrainAndObstaclesSection = Content.defineSection('combat/terrain-and-obstacles', {
  parent: TacticalMovementSection,
  content: {
    name: 'Terrain and Obstacles',
    description:
      'Most battles don’t take place in bare rooms or plains. Adventurers fight in boulder-strewn caverns, briar-choked forests, and steep staircases. Each battleground offers its own combination of cover, concealment, and poor footing.\n\nThis section explains how terrain affects movement. For information about how it affects vision and defense, see “[Cover and Concealment](content:combat/cover-and-concealment),” page 280.\n\n**Difficult Terrain**\n\nRubble, undergrowth, shallow bogs, steep stairs, and all sorts of other impediments are difficult terrain that hampers movement.\n\n- **Costs 1 Extra Square:** Each square of difficult terrain you enter costs 1 extra square of movement.\n- **Large, Huge, and Gargantuan Creatures:** If such a creature enters two or more squares with different types of terrain, count that square of movement according to the most difficult terrain. Count only squares it is entering for the first time, not squares it already occupies.\n- **Ending Movement:** If you don’t have enough movement remaining to enter a square of difficult terrain, you can’t enter it.\n- **Flying:** Creatures are not hampered by difficult terrain when flying.\n- **Terrain Walk:** Some creatures have a special ability to ignore difficult terrain in specific kinds of environments. For example, dryads have forest walk, which allows them to ignore difficult terrain in forests.\n\nBecause difficult terrain costs 1 extra square of movement to enter, you can’t normally shift into a square of difficult terrain. On the other hand, if a power lets you shift 2, you can shift into a square of difficult terrain.\n\n**Obstacles**\n\nLike difficult terrain, obstacles can hamper movement.\n\n- **Obstacles Filling Squares:** An obstacle such as a large tree, a pillar, or a floor-to-ceiling wall blocks a square entirely by completely filling it. You can’t enter a square that is filled by an obstacle.\n\n  _Corners:_ When an obstacle fills a square, you can’t move diagonally across the corner of that square ([page 283](content:combat/diagonal-movement)).\n- **Obstacles Between Squares:** Some obstacles run along the edges of squares instead of through squares. An obstacle such as a low wall between two squares makes moving from one square to the other just like entering a square of difficult terrain, even if the squares on each side of the wall are not difficult.',
  },
})

export const DoubleMoveSection = Content.defineSection('combat/double-move', {
  parent: TacticalMovementSection,
  content: {
    name: 'Double Move',
    description:
      'On your turn, you can move twice if you take a move action instead of a standard action. If you take the same move action twice in a row—two walks, two runs, two shifts, two crawls—you’re taking a double move.\n\n**Double Move**\n\n- **Same Move Action:** To double move, you have to take the same move action twice in a row on the same turn.\n- **One Speed:** When you double move, add the speeds of the two move actions together and then move.\n- **Occupied Squares:** When you double move, your first move action can end in an ally’s space, because you’re not stopping. Your second move action can’t end in an ally’s space, as normal.\n- **Difficult Terrain:** When you double move, you can sometimes move over more squares of difficult terrain than normal, because you add the speeds of the two move actions together and then move. For example, if your speed is 5, you can enter only 2 squares of difficult terrain when you walk. If you double move by walking twice in a row, you can enter 5 squares of difficult terrain, not 4.',
  },
})

export const FallingSection = Content.defineSection('combat/falling', {
  parent: MovementAndPositionSection,
  content: {
    name: 'Falling',
    description:
      'Some kinds of terrain present a unique danger: a precipitous drop. When you fall at least 10 feet, you take damage.\n\n**Falling**\n\n- **Falling Damage:** You take 1d10 damage for each 10 feet you fall.\n\n  _Fast Alternative:_ If you fall more than 50 feet, take 25 damage per 50 feet, plus 1d10 per 10 extra feet.\n- **Prone:** You fall [prone](content:combat/prone) when you land, unless you take no damage from the fall.\n- **Jumping Down:** If you are trained in [Acrobatics](characteristic:skill/acrobatics), you can make a check to reduce the amount of damage you take from a fall. See page 181.\n- **Catching Yourself:** If a power or a bull rush ([page 287](content:combat/bull-rush)) forces you over a precipice or into a pit, you can immediately make a saving throw to avoid going over the edge. This saving throw works just like a normal saving throw, except you make it as soon as you reach the edge, not at the end of your turn.\n\n  _Lower than 10:_ Failure. You fall over the edge.\n\n  _10 or higher:_ Success. You fall prone at the edge, in the last square you occupied before you would have fallen. The forced movement ends.\n- **Large, Huge, and Gargantuan Creatures:** If only part of a creature’s space is over a pit or a precipice, the creature doesn’t fall.',
  },
})

export const FlankingSection = Content.defineSection('combat/flanking', {
  parent: MovementAndPositionSection,
  content: {
    name: 'Flanking',
    description:
      'One of the simplest combat tactics is for you and an ally to move to flanking positions adjacent to an enemy.\n\n**Flanking**\n\n- **Combat Advantage:** You have combat advantage ([page 279](content:combat/combat-advantage)) against an enemy you flank.\n- **Opposite Sides:** To flank an enemy, you and an ally must be adjacent to the enemy and on opposite sides or corners of the enemy’s space.\n\n  When in doubt about whether two characters flank an enemy, trace an imaginary line between the centers of the characters’ squares. If the line passes through opposite sides or corners of the enemy’s space, the enemy is flanked.\n- **Must Be Able to Attack:** You and your ally must be able to attack the enemy, whether you’re armed or unarmed. If there’s no line of effect between your enemy and either you or your ally, you don’t flank. If you’re affected by an effect that prevents you from taking opportunity actions, you don’t flank.\n- **Large, Huge, and Gargantuan Creatures:** If a flanking creature’s space takes up more than 1 square, the creature gains combat advantage if any square it occupies counts for flanking.',
  },
})

export const PullPushAndSlideSection = Content.defineSection('combat/pull-push-and-slide', {
  parent: MovementAndPositionSection,
  content: {
    name: 'Pull, Push, and Slide',
    description:
      'Certain powers and effects allow you to pull, push, or slide a target.\n\n**Pull, Push, and Slide**\n\n- **Pull:** When you pull a creature, each square you move it must bring it nearer to you.\n- **Push:** When you push a creature, each square you move it must place it farther away from you.\n- **Slide:** When you slide a creature, there’s no restriction on the direction you can move it.\n\nWhether you’re pulling, pushing, or sliding a target, certain rules govern all forced movement.\n\n**Forced Movement**\n\n- **Line of Effect:** You must have line of effect to any square you pull, push, or slide a creature into.\n- **Distance in Squares:** The power you’re using specifies how many squares you can move a target. You can choose to move the target fewer squares or not to move it at all. You can’t move the target vertically.\n- **Specific Destination:** Some powers don’t specify a distance in squares but instead specify a destination, such as “adjacent” (a square adjacent to you).\n- **No Opportunity Attacks:** Forced movement does not provoke opportunity attacks or other opportunity actions.\n- **Ignore Difficult Terrain:** Forced movement isn’t hindered by difficult terrain.\n- **Not a Move:** Forced movement doesn’t count against a target’s ability to move on its turn. A target’s speed is irrelevant to the distance you move it.\n- **Clear Path:** Forced movement can’t move a target into a space it couldn’t enter by walking. The target can’t be forced into an obstacle or made to squeeze into a space.\n- **Catching Yourself:** If you’re forced over a precipice or a pit, you can try to catch yourself before you fall. See “[Falling](content:combat/falling),” page 284.\n- **Swapping Places:** Some powers let you swap places with a target. You slide the target so that its space overlaps your space, and then you shift so your space includes at least one square that the target just left.',
  },
})

export const TeleportationSection = Content.defineSection('combat/teleportation', {
  parent: MovementAndPositionSection,
  content: {
    name: 'Teleportation',
    description:
      'Many powers and rituals allow you to teleport—to move instantaneously from one point to another. Unless a power or a ritual specifies otherwise, teleportation follows these rules.\n\n**Teleportation**\n\n- **Line of Sight:** You have to be able to see your destination.\n- **No Line of Effect:** You can teleport to a place you can see even if you don’t have line of effect to it.\n- **No Opportunity Attacks:** Your movement doesn’t provoke opportunity attacks.\n- **Destination:** Your destination must be a space you can occupy without squeezing.\n- **Instantaneous:** When you teleport, you disappear from the space you occupy and immediately appear in a new space you choose. Creatures, objects, and terrain between you and your destination don’t hinder your movement in any way.\n- **Immobilized:** Being [immobilized](content:combat/immobilized) doesn’t prevent you from teleporting. If you were immobilized because of a physical effect, such as a creature grabbing you, you can teleport away and are no longer immobilized or restrained, if applicable. If you were immobilized because of an effect on your mind or body, teleporting does not end that effect; you’re still immobilized when you reach your destination.',
  },
})

export const PhasingSection = Content.defineSection('combat/phasing', {
  parent: MovementAndPositionSection,
  content: {
    name: 'Phasing',
    description:
      'Some creatures, such as shadow snakes, have a special ability called phasing, and some powers allow you to phase. When you are phasing, you ignore difficult terrain, and you can move through obstacles and other creatures but must end your movement in an unoccupied space.',
  },
})

export const ActionsInCombatSection = Content.defineSection('combat/actions-in-combat', {
  parent: CombatSection,
  content: {
    name: 'Actions in Combat',
    description:
      'During your turn, you can choose from a wide variety of actions. Usually, the most important decision you make in combat is what to do with your standard action each turn. Do you use one of your powers? If so, which one? Or does the situation demand a different approach, such as using your standard action to drink a healing potion, try to call a parley and talk to your foes, or instead get a second move action this turn? This section describes how to perform the most common actions that are available to you on your turn.\n\nThe list isn’t exhaustive—you can try to do anything you can imagine your character doing in the game world. The rules in this section cover the most common actions, and they can serve as a guide for figuring out what happens when you try something not in the rules.',
  },
})

export const ActionPointsSection = Content.defineSection('combat/action-points', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Action Points',
    description:
      'Once per encounter, you can spend an action point. When you spend an action point, it’s gone, but you can earn more.\n\n**Earning Action Points**\n\n- You start with 1 action point. (Monsters usually have no action points.)\n- You gain 1 action point when you reach a milestone ([page 259](content:adventuring/milestones)).\n- After you take an extended rest ([page 263](content:adventuring/extended-rest)), you lose any unspent action points, but you start fresh with 1 action point.\n\nMost often, you spend an action point to take an extra action during your turn.\n\n**Spend an Action Point: [Free Action](action-type:free-action)**\n\n- **During Your Turn:** You can spend an action point only during your turn, but never during a surprise round.\n- **Gain an Extra Action:** You gain an extra action this turn. You decide if the action is a standard action, a move action, or a minor action.\n- **Once per Encounter:** After you spend an action point, you must take a short rest ([page 263](content:adventuring/short-rest)) before you can spend another. (Some monsters can spend more than 1 action point per encounter.)\n\nIf you spend an action point to take an extra action and are within sight of an allied warlord, the [warlord](trait:warlord)’s Commanding Presence grants you a benefit.\n\nInstead of taking an extra action when you spend an action point, you can use a paragon path feature or a feat that requires an action point. Whatever you use an action point for, you can spend only 1 per encounter.',
  },
})

export const AidAnotherSection = Content.defineSection('combat/aid-another', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Aid Another',
    description:
      'You use your action to aid another character. You can aid an ally’s attack roll against one enemy or grant an ally a bonus against an enemy’s next attack. You can also use this action to aid someone else’s skill check or ability check.\n\n**Aid Another: [Standard Action](action-type:standard-action)**\n\n- **Attack Roll:** Choose a target within your melee reach and make a [melee basic attack](ability:common/melee-basic-attack) vs. AC 10. If you succeed, deal no damage, but choose one ally. That ally gets a +2 bonus to his or her next attack roll against the target or to all defenses against the target’s next attack. This bonus ends if not used by the end of your next turn.\n- **Skill or Ability Check:** You can instead aid a skill check or an ability check made by an adjacent ally. Make a DC 10 skill check or ability check. If you succeed, you give a +2 bonus to your ally’s next check using the same skill or ability. This bonus ends if not used by the end of the ally’s next turn.',
  },
})

export const BasicAttackSection = Content.defineSection('combat/basic-attack', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Basic Attack',
    description:
      'A basic attack is an at-will attack power that everyone possesses, regardless of class. The power comes in two forms: melee and ranged. You calculate the attack bonuses of a basic attack like those of any other attack power ([page 274](content:combat/attack-roll)).\n\nWhen a power allows you to make a basic attack, you can make either a melee basic attack or a ranged basic attack. If a power specifically calls for a melee basic attack or a ranged basic attack, you must use that type.\n\nYou use a melee basic attack to make an opportunity attack, and some powers or effects (especially warlord powers) give you the ability to make a basic attack when it isn’t your turn.\n\nLike other ranged attacks, ranged basic attacks provoke opportunity attacks.',
  },
})

export const MeleeBasicAttackLink = Content.linkEntity(BasicAttackSection, Common.MeleeBasicAttack)

export const RangedBasicAttackLink = Content.linkEntity(BasicAttackSection, Common.RangedBasicAttack)

export const BullRushSection = Content.defineSection('combat/bull-rush', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Bull Rush',
    description:
      'You try to push an enemy away. This tactic is useful for forcing an enemy out of a defensive position or into a dangerous one, such as in a pool of lava or over a cliff.\n\n**Bull Rush: [Standard Action](action-type:standard-action)**\n\n- **Target:** You can bull rush a target adjacent to you that is smaller than you, the same size category as you, or one category larger than you.\n- **Strength Attack:** Make a [Strength](characteristic:strength) attack vs. [Fortitude](characteristic:fortitude) defense. Do not add any modifiers for the weapon you use.\n\n  _Hit:_ Push the target 1 square, and shift into the vacated space.\n- **Impossible Push:** If there’s no square you can push the target into, your bull rush has no effect.',
  },
})

export const ChargeSection = Content.defineSection('combat/charge', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Charge',
    description:
      'You throw yourself into the fight, dashing forward and launching an attack.\n\n**Charge: [Standard Action](action-type:standard-action)**\n\n- **Move and Attack:** Move your [speed](characteristic:speed) as part of the charge and make a [melee basic attack](ability:common/melee-basic-attack) or a [bull rush](content:combat/bull-rush) at the end of your move.\n- **+1 Bonus to the Attack Roll:** You gain a +1 bonus to the attack roll of your basic attack or bull rush.\n- **Movement Requirements:** You must move at least 2 squares from your starting position, and you must move directly to the nearest square from which you can attack the enemy. You can’t charge if the nearest square is occupied. Moving over difficult terrain costs extra squares of movement as normal.\n- **Provoke Opportunity Attacks:** If you leave a square adjacent to an enemy, that enemy can make an opportunity attack against you.\n- **No Further Actions:** After you resolve a charge attack, you can’t take any further actions this turn, unless you spend an action point to take an extra action.',
  },
})

export const CoupDeGraceSection = Content.defineSection('combat/coup-de-grace', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Coup de Grace',
    description:
      'Sometimes, you have the opportunity to attack a foe who is completely defenseless. It’s not chivalrous to do so, but it is viciously effective. This action is known as a coup de grace.\n\n**Coup de Grace: [Standard Action](action-type:standard-action)**\n\n- **Helpless Target:** You can deliver a coup de grace against a [helpless](content:combat/helpless) enemy adjacent to you. Use any attack power you could normally use against the enemy, including a basic attack.\n\n  _Hit:_ You score a [critical hit](content:combat/critical-hits).\n- **Slaying the Target Outright:** If you deal damage greater than or equal to the target’s [bloodied](characteristic:bloodied) value, the target dies.',
  },
})

export const CrawlSection = Content.defineSection('combat/crawl', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Crawl',
    description:
      'When you are prone, you can crawl.\n\n**Crawl: [Move Action](action-type:move-action)**\n\n- **Prone:** You must be [prone](content:combat/prone) to crawl.\n- **Movement:** Move up to half your [speed](characteristic:speed).\n- **Provoke Opportunity Attacks:** If you leave a square adjacent to an enemy, that enemy can make an opportunity attack against you.',
  },
})

export const DelaySection = Content.defineSection('combat/delay', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Delay',
    description:
      'You can choose to wait to take your turn until later in the round. You can wait until after your allies take actions so you can plan out tactics, or you can wait for enemies to move into range.\n\n**Delay: [No Action](action-type:no-action)**\n\n- **Delay Entire Turn:** You must delay your entire turn, so you can’t delay if you’ve already taken an action on your turn. You also can’t delay if you’re [dazed](content:combat/dazed) or if you’re unable to take actions.\n- **Coming Back into the Initiative Order:** After any other combatant has completed a turn, you can step back into the initiative order. Perform your actions as desired and adjust your initiative to your new position in the order.\n- **Losing a Delayed Turn:** If you don’t take your delayed turn before your initiative comes up, you lose the delayed turn and your initiative remains where it was.\n- **Start of Your Turn:** At the moment you delay, carry out the start of your turn normally.\n- **End of Your Turn:** You don’t have a normal end of your turn ([page 269](content:combat/the-end-of-your-turn)). Instead, the things you do at the end of your turn happen at two separate times.\n\n  _End Beneficial Effects when You Delay:_ At the moment you delay, end effects that last until the end of your turn and that are beneficial to you or your allies. For example, if on your previous turn you stunned an enemy until the end of your next turn, the stunned condition ends. You can’t prolong a beneficial effect by delaying.\n\n  _End Sustained Effects when You Delay:_ You can’t sustain a power if you delay. At the moment you delay your action, the “check actions spent” part of the end of your turn occurs. Because you haven’t spent an action to sustain any active powers, sustainable effects end.\n\n  _End Harmful Effects after You Act:_ After you return to the initiative order and take your actions, end effects that last until the end of your turn and that are harmful to you. For example, if an enemy stunned you until the end of your next turn, the stunned condition ends. You can’t avoid a harmful effect by delaying.\n\n  _Make Saving Throws after You Act:_ After you return to the initiative order and take your actions, you make saving throws against effects on you.',
  },
})

export const EscapeSection = Content.defineSection('combat/escape', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Escape',
    description:
      'You attempt to escape from an enemy who has grabbed you (see “[Grab](content:combat/grab)”). Other immobilizing effects might let you make escape attempts.\n\n**Escape: [Move Action](action-type:move-action)**\n\n- **Acrobatics or Athletics:** Make an [Acrobatics](characteristic:skill/acrobatics) check vs. [Reflex](characteristic:reflex) or an [Athletics](characteristic:skill/athletics) check vs. [Fortitude](characteristic:fortitude) against the creature or effect that immobilized you.\n- **Check:** Resolve your check.\n\n  _Success:_ You end the grab and can shift as part of this move action.\n\n  _Failure:_ You’re still grabbed.',
  },
})

export const ActionsInCombatTableSection = Content.defineSection('combat/actions-in-combat-table', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Actions in Combat',
    description:
      '**[Standard Actions](action-type:standard-action)**\n\n| Action | Description |\n| :--- | :--- |\n| Administer a potion | Help an unconscious creature consume a potion |\n| [Aid another](content:combat/aid-another) | Improve an ally’s attack roll, defense, skill check, or ability check |\n| [Basic attack](content:combat/basic-attack) | Make a basic attack |\n| [Bull rush](content:combat/bull-rush) | Push a target 1 square and shift into the vacated space |\n| [Charge](content:combat/charge) | Move and then make a melee basic attack or a bull rush |\n| [Coup de grace](content:combat/coup-de-grace) | Make a critical hit against a helpless enemy |\n| Equip or stow a shield | Use a shield or put it away |\n| [Grab](content:combat/grab) | Grab an enemy |\n| [Ready an action](content:combat/ready-an-action) | Ready an action to perform when a specified trigger occurs |\n| [Second wind](content:combat/second-wind) | Spend a healing surge and gain a bonus to defenses (once per encounter) |\n| [Total defense](content:combat/total-defense) | Gain a +2 bonus to all your defenses until the start of your next turn |\n\n**[Move Actions](action-type:move-action)**\n\n| Action | Description |\n| :--- | :--- |\n| [Crawl](content:combat/crawl) | While prone, move up to half your speed |\n| [Escape](content:combat/escape) | Escape a grab and shift |\n| [Run](content:combat/run) | Move up to your speed + 2; grant combat advantage until next turn |\n| [Stand up](content:combat/stand-up) | Stand up from prone |\n| [Shift](content:combat/shift) | Move 1 square without provoking opportunity attacks |\n| [Squeeze](content:combat/squeeze) | Reduce your space by 1, move up to half your speed, and grant combat advantage |\n| [Walk](content:combat/walk) | Move up to your speed |\n\n**[Minor Actions](action-type:minor-action)**\n\n| Action | Description |\n| :--- | :--- |\n| Draw or sheathe a weapon | You can draw or sheathe a weapon |\n| Drink a potion | Consume a potion |\n| Drop prone | Drop down so that you are lying on the ground |\n| Load a crossbow | Load a crossbow so that you can fire it |\n| Open or close a door | Open or close a door or container that isn’t locked or stuck |\n| Pick up an item | Pick up an object in your space or in an unoccupied square within reach |\n| Retrieve or stow an Item | Retrieve or stow an item on your person |\n\n**Immediate Action**\n\n| Action | Description |\n| :--- | :--- |\n| [Readied action](content:combat/ready-an-action) | Take your readied action when its trigger occurs |\n\n**[Opportunity Action](action-type:opportunity-action)**\n\n| Action | Description |\n| :--- | :--- |\n| [Opportunity attack](content:combat/opportunity-attack) | Make a melee basic attack against an enemy that provokes an opportunity attack |\n\n**[Free Actions](action-type:free-action)**\n\n| Action | Description |\n| :--- | :--- |\n| Drop held items | Drop any items you currently hold |\n| End a grab | Let go of an enemy |\n| [Spend an action point](content:combat/action-points) | Spend an action point to take an extra action (once per encounter, not in a surprise round) |\n| Talk | Speak a few sentences |\n\n**[No Action](action-type:no-action)**\n\n| Action | Description |\n| :--- | :--- |\n| [Delay](content:combat/delay) | Put off your turn until later in the initiative order |',
  },
})

export const GrabSection = Content.defineSection('combat/grab', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Grab',
    description:
      'You seize a creature bodily and keep it from moving. The creature you grab can attempt to escape on its turn (see “[Escape](content:combat/escape)”).\n\n**Grab: [Standard Action](action-type:standard-action)**\n\n- **Target:** You can attempt to grab a creature that is smaller than you, the same size category as you, or one category larger than you. The creature must be within your melee reach (don’t count extra reach from a weapon).\n- **Strength Attack:** Make a [Strength](characteristic:strength) attack vs. [Reflex](characteristic:reflex). Do not add any weapon modifiers. You must have at least one hand free to make a grab attempt.\n\n  _Hit:_ The enemy is [immobilized](content:combat/immobilized) until it escapes or you end the grab. Your enemy can attempt to escape on its turn.\n- **Sustaining a Grab:** You sustain a grab as a [minor action](action-type:minor-action). You can end a grab as a [free action](action-type:free-action).\n- **Effects that End a Grab:** If you are affected by a condition that prevents you from taking opportunity actions (such as dazed, stunned, surprised, or unconscious), you immediately let go of a grabbed enemy. If you move away from the creature you’re grabbing, you let go and the grab ends. If a pull, a push, or a slide moves you or the creature you’re grabbing out of your reach, the grab ends.\n\nTo move a grabbed target, you must succeed on a Strength attack. However, helpless allies are treated as objects; you just pick them up and move them.\n\n**Move a Grabbed Target: [Standard Action](action-type:standard-action)**\n\n- **Strength Attack:** Make a Strength attack vs. [Fortitude](characteristic:fortitude). Do not add any weapon modifiers.\n\n  _Hit:_ Move up to half your speed and pull the grabbed target with you.\n- **Opportunity Attacks:** If you pull the target, you and the target do not provoke opportunity attacks from each other, and the target doesn’t provoke opportunity attacks from adjacent enemies. However, if you leave a square adjacent to an enemy, that enemy can make an opportunity attack against you.',
  },
})

export const OpportunityAttackSection = Content.defineSection('combat/opportunity-attack', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Opportunity Attack',
    description:
      'Combatants constantly watch for their enemies to drop their guard. When you’re adjacent to an enemy, that enemy can’t move past you or use a ranged power or an area power without putting itself in danger by allowing you to take an opportunity attack against it. The most common form of opportunity action is an opportunity attack—a melee basic attack against the creature that provokes it.\n\n**Opportunity Attack: [Opportunity Action](action-type:opportunity-action)**\n\n- **Melee Basic Attack:** An opportunity attack is a [melee basic attack](ability:common/melee-basic-attack) ([page 287](content:combat/basic-attack)).\n- **Moving Provokes:** If an enemy leaves a square adjacent to you, you can make an opportunity attack against that enemy. However, you can’t make one if the enemy shifts or teleports or is forced to move away by a pull, a push, or a slide.\n- **Ranged and Area Powers Provoke:** If an enemy adjacent to you uses a ranged power or an area power, you can make an opportunity attack against that enemy.\n- **One per Combatant’s Turn:** You can take only one opportunity action during another combatant’s turn, but you can take any number during a round.\n- **Able to Attack:** You can’t make an opportunity attack unless you are able to make a melee basic attack and you can see your enemy.\n- **Interrupts Target’s Action:** An opportunity action takes place before the target finishes its action. After the opportunity attack, the creature resumes its action. If the target is reduced to 0 hit points or fewer by the opportunity attack, it can’t finish its action because it’s dead or dying.\n- **Threatening Reach:** Some creatures have an ability called threatening reach. This lets them make opportunity attacks against nonadjacent enemies. If an enemy leaves a square that’s within the creature’s reach, or if an enemy anywhere within the creature’s reach makes a ranged attack or an area attack, the creature can make an opportunity attack against that enemy.',
  },
})

export const ReadyAnActionSection = Content.defineSection('combat/ready-an-action', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Ready an Action',
    description:
      'When you ready an action, you prepare to react to a creature’s action or an event. Readying an action is a way of saying, “As soon as _x_ happens, I’ll do _y_.” For instance, you could say, “As soon as the troll walks out from behind the corner, I’ll use my _pinning strike_ and interrupt its movement” or something like, “If the goblin attacks, I’ll react with a [_crushing blow_](ability:fighter/power/crushing-blow).”\n\n**Ready an Action: [Standard Action](action-type:standard-action)**\n\n- **Choose Action to Ready:** Choose the specific action you are readying (what attack you plan to use, for example) as well as your intended target. You can ready a standard action, a move action, or a minor action. Whichever action you choose, the act of readying it is a standard action.\n- **Choose Trigger:** Choose the action that will trigger your readied action. When that action occurs, you can use your readied action. If the trigger doesn’t occur or you choose to ignore it, you can’t use your readied action, and you take your next turn as normal.\n- **Immediate Reaction:** A readied action is an [immediate reaction](action-type:immediate-reaction). It takes place after your enemy completes the action that triggers it.\n- **Interrupting an Enemy:** If you want to use a readied action to attack before an enemy attacks, you should ready your action in response to the enemy’s movement. That way your attack will be triggered by a portion of the enemy’s move, and you will interrupt it and attack first. If you ready an action to be triggered by an enemy attack, your readied action will occur as a reaction to that attack, so you’ll attack after the enemy.\n\n  Note that an enemy might use a power that lets it move and then attack. If you readied an action to attack in response to that enemy’s movement, your readied action _interrupts_ the movement, and you can attack before the enemy does.\n- **Reset Initiative:** After you resolve your readied action, move your place in the initiative order to directly before the creature or the event that triggered your readied action.',
  },
})

export const RunSection = Content.defineSection('combat/run', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Run',
    description:
      'You can use an all-out sprint when you really need to cover ground fast. However, this is a dangerous tactic—you have to lower your guard to make your best speed, and you can’t attack very well.\n\n**Run: [Move Action](action-type:move-action)**\n\n- **Speed + 2:** Move up to your [speed](characteristic:speed) + 2. For example, if your speed is normally 6, you can move up to 8 squares when you run.\n- **–5 Penalty to Attack Rolls:** You have a –5 penalty to attack rolls until the start of your next turn.\n- **Grant Combat Advantage:** As soon as you begin running, you grant [combat advantage](content:combat/combat-advantage) to all enemies until the start of your next turn.\n- **Provoke Opportunity Attacks:** If you leave a square adjacent to an enemy, that enemy can make an opportunity attack against you.',
  },
})

export const SecondWindSection = Content.defineSection('combat/second-wind', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Second Wind',
    description:
      'You can dig into your resolve and endurance to find an extra burst of vitality. In game terms, you spend a [healing surge](characteristic:healing-surges) to regain some of your lost [hit points](characteristic:hit-points), and you focus on defending yourself.\n\nUnless otherwise noted in the statistics block of a monster or a nonplayer character, this action is available only to player characters.\n\n**[Second Wind](ability:common/second-wind): [Standard Action](action-type:standard-action)**\n\n- **Spend a Healing Surge:** Spend a healing surge to regain hit points (see “[Healing](content:combat/healing),” page 293).\n- **+2 Bonus to All Defenses:** You gain a +2 bonus to all defenses until the start of your next turn.\n- **Once per Encounter:** You can use your second wind once per encounter and can use it again after you take a short rest or an extended rest. Some powers (either yours or another character’s) allow you to spend healing surges without using your second wind.',
  },
})

export const ShiftSection = Content.defineSection('combat/shift', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Shift',
    description:
      'Moving through a fierce battle is dangerous; you must be careful to avoid a misstep that gives your foe a chance to strike a telling blow. The way you move safely when enemies are nearby is to shift.\n\n**Shift: [Move Action](action-type:move-action)**\n\n- **Movement:** Move 1 square.\n- **No Opportunity Attacks:** If you shift out of a square adjacent to an enemy, you don’t provoke an opportunity attack.\n- **Difficult Terrain:** Because each square of difficult terrain costs 1 extra square to enter, you can’t normally shift into a square of difficult terrain, unless you’re able to shift multiple squares or you’re able to ignore the effects of difficult terrain.\n- **Special Movement Modes:** You can’t shift when using a form of movement that requires a skill check. For example, if you’re climbing or swimming, you can’t shift if you would need to make an [Athletics](characteristic:skill/athletics) check to use that kind of movement.\n\nYou might find it useful to first shift away from an adjacent enemy, then walk or run.',
  },
})

export const SqueezeSection = Content.defineSection('combat/squeeze', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Squeeze',
    description:
      'You can squeeze through an area that isn’t as wide as the space you normally take up. Big creatures usually use this move action to fit into narrow corridors, but a Medium or a Small creature can use it to fit into a constrained space, such as a burrow.\n\n**Squeeze: [Move Action](action-type:move-action)**\n\n- **Smaller Space:** A Large, Huge, or Gargantuan creature reduces its space by 1. For example, a Large creature that squeezes has a space of 1 (1 square) instead of 2 (4 squares). A Huge creature’s space changes from 3 (9 squares) to 2 (4 squares). When a Medium or smaller creature squeezes, the DM decides how narrow a space the creature can occupy. If an effect prevents a creature from leaving a square in order to squeeze, the creature cannot squeeze.\n- **Half Speed:** As part of the same move action, move up to half your speed.\n- **–5 Penalty to Attack Rolls:** You have a –5 penalty to attack rolls until you return to your normal space.\n- **Grant Combat Advantage:** You grant [combat advantage](content:combat/combat-advantage) to all enemies until you return to your normal space.\n- **Provoke Opportunity Attacks:** If squeezing causes any part of your space to leave a square adjacent to an enemy, that enemy can make an opportunity attack against you.\n- **Ending a Squeeze:** You can end a squeeze as a free action. You return to your normal space. You have to occupy a space that includes the space you occupied when you stopped squeezing.',
  },
})

export const StandUpSection = Content.defineSection('combat/stand-up', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Stand Up',
    description:
      'If you’ve been knocked prone, you need to take a move action to get back on your feet.\n\n**Stand Up: [Move Action](action-type:move-action)**\n\n- **Unoccupied Space:** If your space is not occupied by another creature, you stand up where you are.\n- **Occupied Space:** If your space is occupied by another creature, you can shift 1 square, as part of this move action, to stand up in an adjacent unoccupied space. If your space and all adjacent squares are occupied by other creatures, you can’t stand up.',
  },
})

export const TotalDefenseSection = Content.defineSection('combat/total-defense', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Total Defense',
    description:
      'Sometimes it’s more important to stay alive than attack your foes, so you focus your attention on defense.\n\n**Total Defense: [Standard Action](action-type:standard-action)**\n\n- **+2 Bonus to All Defenses:** You gain a +2 bonus to all defenses until the start of your next turn.',
  },
})

export const UseAPowerSection = Content.defineSection('combat/use-a-power', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Use a Power',
    description:
      'The powers you know are among your most important tools in the game. Because of your at-will powers, you can potentially use a power every round.\n\n**Use a Power: Action Varies**\n\n- **Action:** Most powers require a [standard action](action-type:standard-action), but some require a [move action](action-type:move-action), a [minor action](action-type:minor-action), a [free action](action-type:free-action), or [no action](action-type:no-action).',
  },
})

export const WalkSection = Content.defineSection('combat/walk', {
  parent: ActionsInCombatSection,
  content: {
    name: 'Walk',
    description:
      'Walking is safe only when there are no enemies nearby. It’s dangerous to walk through the middle of a pitched battle, since any enemy can take an opportunity attack as you pass by. The way you move safely when enemies are nearby is to shift instead of walk.\n\n**Walk: [Move Action](action-type:move-action)**\n\n- **Movement:** Move a number of squares up to your [speed](characteristic:speed).\n- **Provoke Opportunity Attacks:** If you leave a square adjacent to an enemy, that enemy can make an opportunity attack against you.',
  },
})

export const HealingSection = Content.defineSection('combat/healing', {
  parent: CombatSection,
  content: {
    name: 'Healing',
    description:
      'Over the course of a battle, you take damage from attacks. **[Hit points](characteristic:hit-points) (hp)** measure your ability to stand up to punishment, turn deadly strikes into glancing blows, and stay on your feet throughout a battle. Hit points represent more than physical endurance. They represent your character’s skill, luck, and resolve—all the factors that combine to help you stay alive in a combat situation.\n\nWhen you create your character, you determine your **maximum hit points**. From this number, you derive your **[bloodied](characteristic:bloodied)** and **[healing surge](characteristic:surge-value)** values.\n\nWhen you take damage, subtract that number from your current hit points. As long as your current hit point total is higher than 0, you can keep on fighting. When your current total drops to 0 or lower, however, you are dying.\n\nPowers, abilities, and actions that restore hit points are known as **healing**. You might regain hit points through rest, heroic resolve, or magic. When you heal, add the number to your current hit points. You can heal up to your maximum hit point total, but you can’t exceed it.\n\n**Hit Points**\n\nDamage reduces your hit points.\n\n- **Maximum Hit Points:** Your class, level, and [Constitution](characteristic:constitution) score determine your maximum hit points. Your current hit points can’t exceed this number.\n- **Bloodied Value:** You are bloodied when your current hit points drop to your bloodied value or lower. Your bloodied value is one-half your maximum hit points (rounded down). Certain powers and effects work only against a bloodied enemy or work better.\n- **[Dying](content:combat/dying):** When your current hit points drop to 0 or lower, you fall unconscious and are dying.\n\n**[Healing Surges](characteristic:healing-surges)**\n\nMost healing requires you to spend a healing surge. When you spend a healing surge, you restore lost hit points to your current hit point total. Once per encounter, you can use your [second wind](ability:common/second-wind) ([page 291](content:combat/second-wind)) to spend a healing surge and heal yourself. After a short rest, you can spend as many healing surges as you like outside combat. You can spend a limited number of healing surges per day. When you take an extended rest ([page 263](content:adventuring/extended-rest)), your number of healing surges is replenished.\n\nSome powers (either your own or those of another character) allow you to heal as if you had spent a healing surge. When you receive such healing, you don’t actually spend a healing surge.\n\n- **Number of Healing Surges:** Your class and [Constitution modifier](characteristic:constitution-modifier) determine how many healing surges you can use in a day.\n- **Healing Surge Value:** When you spend a healing surge, you regain one-quarter of your maximum hit points (rounded down). This number is called your [healing surge value](characteristic:surge-value). You use it often, so note it on your character sheet.\n- **Monsters and NPCs:** As a general rule, monsters and nonplayer characters have a number of healing surges based on their tier: one healing surge at the heroic tier (1st–10th levels), two healing surges at the paragon tier (11th–20th levels), and three healing surges at the epic tier (21st–30th levels).',
  },
})

export const HealingInCombatSection = Content.defineSection('combat/healing-in-combat', {
  parent: HealingSection,
  content: {
    name: 'Healing in Combat',
    description:
      'Even in a heated battle, you can heal. You can heal yourself by using your [second wind](ability:common/second-wind) (see [page 291](content:combat/second-wind)), an ally can use the [Heal](characteristic:skill/heal) skill (see page 185) on you, and an ally can use a healing power on you.\n\nWhen a power heals you, you don’t have to take an action to spend a healing surge. Even if you’re unconscious, the power uses your healing surge and restores hit points. And some healing powers restore hit points without requiring you to spend a healing surge.',
  },
})

export const RegenerationSection = Content.defineSection('combat/regeneration', {
  parent: HealingSection,
  content: {
    name: 'Regeneration',
    description:
      'Regeneration is a special form of healing that restores a fixed number of hit points every round. Regeneration doesn’t rely on healing surges.\n\n**Regeneration**\n\n- **Heal Each Turn:** If you have regeneration and at least 1 hit point, you regain a specified number of hit points at the start of your turn. If your current hit point total is 0 or lower, you do not regain hit points through regeneration.\n- **Limited by Maximum Hit Points:** Like most forms of healing, regeneration can’t cause your current hit points to exceed your maximum hit points.\n- **Not Cumulative:** If you gain regeneration from more than one source, only the largest amount of regeneration applies.',
  },
})

export const TemporaryHitPointsSection = Content.defineSection('combat/temporary-hit-points', {
  parent: HealingSection,
  content: {
    name: 'Temporary Hit Points',
    description:
      'A variety of sources can grant you temporary hit points—small reservoirs of stamina that insulate you from losing actual hit points.\n\n**Temporary Hit Points**\n\n- **Not Real Hit Points:** Temporary hit points aren’t real hit points. They’re a layer of insulation that attacks have to get through before they start doing damage to you. Don’t add temporary hit points to your current hit points (if your current hit points are 0, you still have 0 when you receive temporary hit points). Keep track of them as a separate pool of hit points.\n- **Don’t Count toward Maximum:** Temporary hit points don’t count when you compare your current hit points to your maximum hit points, when you determine whether you’re bloodied, or for other effects that depend on your current hit points.\n- **Lose Temporary Hit Points First:** When you take damage, subtract it from your temporary hit points. If you take more damage than your temporary hit points, extra damage reduces your current hit points.\n- **Don’t Add Together:** If you get temporary hit points from different sources, use the higher value as your temporary hit point total instead of adding the values together.\n- **Last until You Rest:** Your temporary hit points last until they’re reduced to 0 by damage or until you take a rest.',
  },
})

export const DamageAndHealingInActionSection = Content.defineSection('combat/damage-and-healing-in-action', {
  parent: TemporaryHitPointsSection,
  content: {
    name: 'Damage and Healing in Action',
    description:
      'The 12th-level fighter Rieta is locked in combat with an otyugh, keeping it busy while her allies focus on the otyugh’s mind flayer master. Rieta has 96 maximum hit points, which means she is bloodied when her current hit points drop to 48 or lower. She has ten healing surges, which restore 24 hit points apiece.\n\nAt the start of the fight, Rieta fell 20 feet into the otyugh’s pit and took 16 damage. That brought her current hit point total to 80. Seeing her in danger, her warlord friend uses [_bastion of defense_](ability:warlord/power/bastion-of-defense) to grant her 8 temporary hit points. Her current hit points are still 80, but she uses the 8 temporary hit points to soak up damage before she starts subtracting hit points again.\n\nThe otyugh slams her with a tentacle, dealing 12 damage. Now she has no temporary hit points and 76 current hit points. On her turn, she strikes back.\n\nThen the otyugh scores a critical hit, dealing 14 damage. She now has 62 hit points. On her turn, as insurance she uses [_boundless endurance_](ability:fighter/power/boundless-endurance), which grants her regeneration 4 when she’s bloodied. The power is a minor action, so it doesn’t interfere with her attack.\n\nThen the otyugh scores another critical hit, dealing 14 damage. She’s down to 48 hit points and is bloodied.\n\nAt the start of her next turn, she regains 4 hit points from the regeneration, bringing her to 52 hit points. As a standard action, she uses her [second wind](ability:common/second-wind), which restores 24 hit points, bringing her to 76 hit points. Because using her second wind cost a healing surge, she has nine left for the day. She’s not bloodied anymore, and she’s ready to keep fighting.',
  },
})

export const DeathAndDyingSection = Content.defineSection('combat/death-and-dying', {
  parent: CombatSection,
  content: {
    name: 'Death and Dying',
    description:
      'In the unending exploration of the unknown and the fight against monsters, death looms as a constant danger.\n\n**Death and Dying**\n\n- **[Dying](content:combat/dying):** When your [hit points](characteristic:hit-points) drop to 0 or fewer, you fall unconscious and are dying. Any additional damage you take continues to reduce your current hit point total until your character dies.\n- **Death Saving Throw:** When you are dying, you need to make a saving throw at the end of your turn each round. The result of your saving throw determines how close you are to death.\n\n  _Lower than 10:_ You slip one step closer to death. If you get this result three times before you take a rest, you die.\n\n  _10–19:_ No change.\n\n  _20 or higher:_ Spend a healing surge. When you do so, you are considered to have 0 hit points, and then your healing surge restores hit points as normal. You are no longer dying, and you are conscious but still prone. If you roll 20 or higher but have no healing surges left expressed as a negative number, your condition doesn’t change.\n- **Death:** When you take damage that reduces your current hit points to your [bloodied](characteristic:bloodied) value expressed as a negative number, your character dies.\n\n**Example:** Anvil, a dwarf fighter, has a maximum hit point total of 53. He’s bloodied at 26 hit points, dying at 0 hit points, and dead at –26 hit points. In a fight with an umber hulk, Anvil is reduced to 18 hit points. The monster later hits him for 33 points of damage. This reduces Anvil’s current hit points to –15. He’s now unconscious, dying, and only 11 points of damage away from death.\n\nMonsters and characters controlled by the Dungeon Master usually die when they reach 0 hit points, unless you choose to knock them out (see “[Knocking Creatures Unconscious](content:combat/knocking-creatures-unconscious)”). You generally don’t need to stalk around the battlefield after a fight, making sure all your foes are dead.\n\nDeath is not necessarily the end in the Dungeons & Dragons game! Some powers and the Raise Dead ritual (page 311) can return a dead character to life.\n\nMost monsters don’t attack combatants who are dying; they focus on any characters still on their feet and posing a threat. But some particularly wicked monsters might attack a dying character on purpose (even using a coup de grace), and monsters make no effort to avoid including a dying character in an area attack or a close attack aimed at other characters who are still fighting.',
  },
})

export const SkillsInCombatSection = Content.defineSection('combat/skills-in-combat', {
  parent: DeathAndDyingSection,
  content: {
    name: 'Skills in Combat',
    description:
      'In the heat of combat, remember to use all the tools at your disposal, including your skills. For example, you can use [Athletics](characteristic:skill/athletics) to jump over a chasm or leap across difficult terrain. Use skills such as [Arcana](characteristic:skill/arcana) and [Nature](characteristic:skill/nature) to learn about your enemies’ weaknesses. Clever use of [Stealth](characteristic:skill/stealth) can give you combat advantage. And plenty of threats that aren’t monsters will give you opportunities to use [Perception](characteristic:skill/perception), [Thievery](characteristic:skill/thievery), [Endurance](characteristic:skill/endurance), and [Acrobatics](characteristic:skill/acrobatics) in the midst of combat. Watch for these opportunities, and be creative! [Chapter 5](content:skills) tells you more about how to use your skills.',
  },
})

export const KnockingCreaturesUnconsciousSection = Content.defineSection('combat/knocking-creatures-unconscious', {
  parent: DeathAndDyingSection,
  content: {
    name: 'Knocking Creatures Unconscious',
    description:
      'When you reduce a creature to 0 hit points or fewer, you can choose to knock it unconscious rather than kill it. Until it regains hit points, the creature is unconscious but not dying. Any healing makes the creature conscious.\n\nIf the creature doesn’t receive any healing, it is restored to 1 hit point and becomes conscious after a short rest.',
  },
})

export const HealingTheDyingSection = Content.defineSection('combat/healing-the-dying', {
  parent: DeathAndDyingSection,
  content: {
    name: 'Healing the Dying',
    description:
      'When you are dying, any healing restores you to at least 1 hit point. If someone has stabilized you using the [Heal](characteristic:skill/heal) skill but you receive no healing, you regain hit points after an extended rest.\n\n**Healing a Dying Character**\n\n- **Regain Hit Points:** When you are dying and receive healing, you go to 0 hit points and then regain hit points from the healing effect. If the healing effect requires you to spend a healing surge but you have none left, you are restored to 1 hit point.\n- **Become Conscious:** As soon as you have a current hit point total that’s higher than 0, you become conscious and are no longer dying. (You are still prone until you take an action to stand up.)\n\n**Example:** Anvil is at –15 hit points. His companion Terov, a cleric, uses [_healing word_](ability:cleric/feature/healing-word) to help him. This assistance immediately raises Anvil’s current hit points to 0 and allows him to spend a healing surge boosted by Terov’s extra healing from _healing word_ and the [Healer’s Lore](trait:cleric/healers-lore) class feature. The healing surge (13 hit points) plus Terov’s boost (6 hit points) restores Anvil to consciousness and increases his current hit point total to 19.',
  },
})

export const CombatContent: Array<ContentSection> = [
  CombatSection,
  TheCombatSequenceSection,
  VisualizingTheActionSection,
  InitiativeSection,
  TheSurpriseRoundSection,
  ActionTypesSection,
  TheMainActionTypesSection,
  TriggeredActionTypesSection,
  TakingYourTurnSection,
  TheStartOfYourTurnSection,
  SubstitutingActionsSection,
  ActionsOnYourTurnSection,
  TheEndOfYourTurnSection,
  ActionsOnOtherTurnsSection,
  AttacksAndDefensesSection,
  AttackTypesSection,
  MeleeAttackSection,
  RangedAttackSection,
  CloseAttackSection,
  AreaAttackSection,
  AreasOfEffectSection,
  ChoosingTargetsSection,
  RangeSection,
  SeeingAndTargetingSection,
  AttackRollSection,
  DefensesSection,
  BonusesAndPenaltiesSection,
  AttackResultsSection,
  DamageSection,
  ResistanceAndVulnerabilitySection,
  ConditionsSection,
  BlindedSection,
  DazedSection,
  DeafenedSection,
  DominatedSection,
  DyingSection,
  HelplessSection,
  ImmobilizedSection,
  MarkedSection,
  PetrifiedSection,
  ProneSection,
  RestrainedSection,
  SlowedSection,
  StunnedSection,
  SurprisedSection,
  UnconsciousSection,
  WeakenedSection,
  InsubstantialSection,
  OngoingDamageSection,
  CriticalHitsSection,
  ForcingMovementSection,
  DurationsSection,
  SavingThrowsSection,
  AttackModifiersSection,
  CombatAdvantageSection,
  CoverAndConcealmentSection,
  CoverSection,
  ConcealmentSection,
  InvisibleSection,
  TargetingWhatYouCantSeeSection,
  MovementAndPositionSection,
  CreatureSizeAndSpaceSection,
  SpeedSection,
  TacticalMovementSection,
  DiagonalMovementSection,
  OccupiedSquaresSection,
  TerrainAndObstaclesSection,
  DoubleMoveSection,
  FallingSection,
  FlankingSection,
  PullPushAndSlideSection,
  TeleportationSection,
  PhasingSection,
  ActionsInCombatSection,
  ActionPointsSection,
  AidAnotherSection,
  BasicAttackSection,
  MeleeBasicAttackLink,
  RangedBasicAttackLink,
  BullRushSection,
  ChargeSection,
  CoupDeGraceSection,
  CrawlSection,
  DelaySection,
  EscapeSection,
  ActionsInCombatTableSection,
  GrabSection,
  OpportunityAttackSection,
  ReadyAnActionSection,
  RunSection,
  SecondWindSection,
  ShiftSection,
  SqueezeSection,
  StandUpSection,
  TotalDefenseSection,
  UseAPowerSection,
  WalkSection,
  HealingSection,
  HealingInCombatSection,
  RegenerationSection,
  TemporaryHitPointsSection,
  DamageAndHealingInActionSection,
  DeathAndDyingSection,
  SkillsInCombatSection,
  KnockingCreaturesUnconsciousSection,
  HealingTheDyingSection,
]
