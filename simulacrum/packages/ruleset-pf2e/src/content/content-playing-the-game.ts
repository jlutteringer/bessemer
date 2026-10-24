import { Content } from '@simulacrum/ruleset'
import * as Characteristic from '@simulacrum/ruleset-pf2e/characteristic'
import * as AncestryCommon from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'

export const PlayingTheGameSection = Content.defineSection('playing-the-game', {
  content: {
    name: 'Playing the Game',
    description:
      "At this point, you have a character and are ready to play Pathfinder! Or maybe you're the GM and you're getting ready to run your first adventure. Either way, this chapter provides the full details for the rules outlined in [Chapter 1](content:introduction). This chapter begins by describing the general rules and conventions of how the game is played and then presents more in-depth explanations of the rules for each mode of play.\n\nBefore diving into how to play Pathfinder, it's important to understand the game's three modes of play, which determine the pace of your adventure and the specific rules you'll use at a given time. Each mode provides a different pace and presents a different level of risk to your characters. The Game Master (GM) determines which mode works best for the story and controls the transition between them. You'll likely talk about the modes less formally during your play session, simply transitioning between exploration and encounters during the adventure, before heading to a settlement to achieve something during downtime.\n\nThe most intricate of the modes is **[encounter mode](content:playing-the-game/encounter-mode)**. This is where most of the intense action takes place, and it's most often used for combat or other high-stakes situations. The GM typically switches to encounter mode by calling on the players to “roll for initiative” to determine the order in which all the actors take their turns during the encounter. Time is then divided into a series of rounds, each lasting roughly 6 seconds in the game world. Each round, player characters, other creatures, and sometimes even hazards or events take their turn in initiative order. At the start of a participant's turn, they gain the use of a number of actions (typically 3 in the case of PCs and other creatures) as well as a special action called a reaction. These actions, and what you do with them, are how you affect the world within an encounter.\n\nIn **[exploration mode](content:playing-the-game/exploration-mode)**, time is more flexible and the play more free-form. Minutes, hours, or even days in the game world pass quickly in the real world, as the characters travel cross-country, explore uninhabited sections of a dungeon, recover from a battle, or roleplay during a social gathering. Often, developments during exploration lead to encounters, and the GM will switch to that mode of play until the encounter ends, before returning to exploration mode.\n\nThe third mode is **[downtime](content:playing-the-game/downtime-mode)**. During downtime, the characters are at little risk, and the passage of time is measured in days or longer. This is when you might forge a magic sword, research a new spell, or prepare for your next adventure. Sections covering each of the modes of play detail how the structure of those modes works during a game session. The other portions of this chapter explain rules that come up throughout the course of the game.",
  },
})

export const MakingChoicesSection = Content.defineSection('playing-the-game/making-choices', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Making Choices',
    description:
      "Throughout the game, the GM describes what's happening in the world and then asks the players, “So what do you do?” Exactly what you choose to do, and how the GM responds to those choices, builds a unique story experience. Every game is different, because you'll rarely, if ever, make the same decisions as another group of players. This is true for the GM as well—two GMs running the exact same adventure will put different emphasis and flourishes on the way they present each scenario and encounter.\n\nOften, your choices have no immediate risk or consequences. If you're traveling along a forest path and come across a fork in the trail, the GM will ask, “Which way do you go?” You might choose to take the right fork or the left. You could also choose to leave the trail, or just go back to town. Once your choice is made, the GM tells you what happens next. Down the line, that choice may impact what you encounter later in the game, but in many cases nothing dangerous happens immediately.\n\nBut sometimes what happens as a result of your choices is less than certain. In those cases, you'll attempt a check, as described [here](content:playing-the-game/checks).",
  },
})

export const ThePathfinderBaselineSection = Content.defineSection('playing-the-game/the-pathfinder-baseline', {
  parent: PlayingTheGameSection,
  content: {
    name: 'The Pathfinder Baseline',
    description:
      "Your group will likely talk about what types of content you want in your game before your campaign begins. The following is a set of basic assumptions that works for many groups. The GM can find more guidance in GM Core.\n\n- Bloodshed, injuries, and even dismemberment might be described. However, excessive descriptions of gore and cruelty should be avoided.\n\n- Romantic and sexual relationships can happen in the game, but players should avoid being overly suggestive. Sex happens “off-screen.” One player character attempting to initiate a relationship with another should generally be avoided.\n\n- Avoid excessively gross or scatological descriptions.\n\nPlayer characters shouldn't perform the following acts:\n\n- Torture\n\n- Rape, nonconsensual sexual contact, or sexual threats\n\n- Harm to children, including sexual abuse\n\n- Owning slaves or profiting from slavery\n\n- Reprehensible uses of mind-control magic\n\nVillains might engage in such acts “off-screen,” but many groups choose to not have villains engage in these activities.",
  },
})

export const RulesOverviewSection = Content.defineSection('playing-the-game/rules-overview', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Rules Overview',
    description:
      "This section summarizes the rules found elsewhere in this chapter.\n\n**Game Conventions**\n\nPathfinder has many specific rules, but you'll also want to keep these general guidelines in mind when playing.\n\n**The Gm Has The Final Say**\n\nIf you're ever uncertain how to apply a rule, the GM decides. Of course, Pathfinder is a game, so when adjudicating the rules, the GM is encouraged to listen to everyone's point of view and make a decision that is both fair and fun.\n\n**Specific Overrides General**\n\nA core principle of Pathfinder is that specific rules override general ones. If two rules conflict, the more specific one takes precedence. If there's still ambiguity, the GM determines which rule to use. For example, the rules state that when attacking a concealed creature, you must attempt a DC 5 flat check to determine if you hit. Flat checks don't benefit from modifiers, bonuses, or penalties, but an ability that's specifically designed to overcome concealment might override and alter this. While some special rules may also state the normal rules to provide context, you should always default to the general rules presented in this chapter, even if effects don't specifically say to.\n\n**Rounding**\n\nYou may need to calculate a fraction of a value, like halving damage. Always round down unless otherwise specified. For example, if a spell deals 7 damage and a creature takes half damage from it, that creature takes 3 damage.\n\n**Multiplying**\n\nWhen more than one effect would multiply the same number, don't multiply more than once. Instead, combine all the multipliers into a single multiplier, with each multiple after the first adding 1 less than its value. For instance, if one ability doubled the duration of one of your spells and another one doubled the duration of the same spell, you would triple the duration, not quadruple it.\n\n**Duplicate Effects**\n\nWhen you're affected by the same thing multiple times, only one instance applies, using the higher level or rank of the effects, or the newer effect if the two are equal. For example, if you were using mystic armor and then cast it again, you'd still benefit from only one casting of that spell. Casting a spell again on the same target might get you a better duration or effect if it were cast at a higher rank the second time, but otherwise doing so gives you no advantage.\n\n**Ambiguous Rules**\n\nSometimes a rule could be interpreted multiple ways. If one version is too good to be true, it probably is. If a rule seems to have wording with problematic repercussions or doesn't work as intended, work with your group to find a good solution, rather than just playing with the rule as printed.",
  },
})

export const ModesOfPlaySection = Content.defineSection('playing-the-game/modes-of-play', {
  parent: RulesOverviewSection,
  content: {
    name: 'Modes of Play',
    description:
      "This game presents three main methods of structuring play.\n\n**[Encounter mode](content:playing-the-game/encounter-mode)** is highly structured and is most often used for combat or stressful situations. Everyone in an encounter rolls **[initiative](content:playing-the-game/step-1-roll-initiative)** to determine the order they act, with highest results going first. A participant takes their **[turn](content:playing-the-game/turns)** when their initiative comes up. You can **[Delay](content:playing-the-game/delay)** to change when you take your turn.\n\n**[Exploration mode](content:playing-the-game/exploration-mode)** takes place over minutes or hours. You use your [travel Speed](content:playing-the-game/travel-speed) if you're moving, and you engage in **[exploration activities](content:playing-the-game/exploration-activities)** like [Avoiding Notice](content:playing-the-game/avoid-notice), [Detecting Magic](content:playing-the-game/detect-magic), [Scouting](content:playing-the-game/scout), or [Searching](content:playing-the-game/search). You can rest for the night while exploring to recover HP and abilities, and make [daily preparations](content:playing-the-game/rest-and-daily-preparations) at the start of each day.\n\n**[Downtime mode](content:playing-the-game/downtime-mode)** takes place over days. You might [make money](content:playing-the-game/earning-income), [train](content:playing-the-game/retraining), or [recover](content:playing-the-game/long-term-rest), among other things.",
  },
})

export const ActionsSection = Content.defineSection('playing-the-game/actions', {
  parent: RulesOverviewSection,
  content: {
    name: 'Actions',
    description:
      "During an encounter, you get **3 actions and 1 reaction** per [turn](content:playing-the-game/turns). Icons indicate whether your abilities take a single action ◆, 2 actions ◆◆, 3 actions ◆◆◆, a reaction ⟲, or a free action ◇. **Reactions** have **[triggers](content:playing-the-game/actions-with-triggers)**, allowing you to take them whenever they come up. The **[Ready](content:playing-the-game/ready)** basic action lets you prepare to use a single action as a reaction. Free actions can have triggers like reactions; a free action with no trigger can be used like a single action, but don't cost any of your actions for the turn.\n\nThe most important actions to learn are the **[basic actions](content:playing-the-game/basic-actions)**. [Specialty basic actions](content:playing-the-game/specialty-basic-actions) come up less frequently, and you typically won't look them up until you need them. **Speaking** normally doesn't take an action.\n\n**Related:** [Activities](content:playing-the-game/activities), [disrupting actions](content:playing-the-game/disrupting-actions).",
  },
})

export const RollingChecksSection = Content.defineSection('playing-the-game/rolling-checks', {
  parent: RulesOverviewSection,
  content: {
    name: 'Rolling Checks',
    description:
      'An action that can potentially fail requires rolling a [check](content:playing-the-game/checks). Roll a d20 (20-sided die) and identify the modifiers, bonuses, and penalties that apply. Then, calculate the result, compare it to the DC (your target number), and determine the degree of success and the effect.\n\nMost checks are modified by your **[attribute modifier](content:playing-the-game/attribute-modifier)** (Strength, Dexterity, Constitution, Intelligence, Wisdom, or Charisma) and your **proficiency modifier** (untrained, trained, expert, master, or legendary) for the statistic. You might get a **circumstance**, **status**, or **item bonus** or **penalty** as well.\n\nThe **[degrees of success](content:playing-the-game/step-4-degree-of-success)** are critical success, success, failure, and critical failure. You get a success if you meet or exceed the DC, or a critical success if you exceed the DC by 10 or more. If your result is lower than the DC, you get a failure, or a critical failure if you failed by 10 or more.\n\n**Related**: [Flat checks](content:playing-the-game/checks), [fortune and misfortune](content:playing-the-game/step-1-roll-d20), [secret checks](content:playing-the-game/checks)',
  },
})

export const EffectsSection = Content.defineSection('playing-the-game/effects', {
  parent: RulesOverviewSection,
  content: {
    name: 'Effects',
    description:
      'An effect is the rules term for anything that occurs in the game world. Effects might have limited **[range](content:playing-the-game/range-and-reach)**, and you may need to designate **[targets](content:playing-the-game/targets)** or create **[areas](content:playing-the-game/areas)** for your effects. Areas include bursts from a single point, cones blasting out from you, emanations surrounding you or another creature, or straight lines.\n\nEffects that last for a period of time list a **[duration](content:playing-the-game/duration)**. These can last a set increment of time, or can end if certain requirements are met. Many effects apply **[conditions](content:conditions)**, which measure advantages or impediments like being [blinded](content:conditions/blinded), [frightened](content:conditions/frightened), or [invisible](content:conditions/invisible).',
  },
})

export const MovementSection = Content.defineSection('playing-the-game/movement', {
  parent: RulesOverviewSection,
  content: {
    name: 'Movement',
    description:
      "Your **[Speed](content:playing-the-game/speed)** governs how far you can move. **[Stride](content:playing-the-game/stride)** is an action that has the move trait and allows you to move a number of feet up to your [Speed](characteristic:speed). You may need to Stride multiple times in a turn! [Move](content:traits/move) actions can often **trigger reactions** or free actions. However, unlike other actions, a move action can trigger reactions not only when you first use the action, but also for every 5 feet you move during that action (see [Reactions to Movement](content:playing-the-game/tactical-movement)). The **[Step](content:playing-the-game/step)** action lets you move without triggering reactions, but only 5 feet. Other basic actions with the move trait include **[Crawl](content:playing-the-game/crawl)**, **[Drop Prone](content:playing-the-game/drop-prone)**, and **[Stand](content:playing-the-game/stand)**.\n\nThis game measures **[movement on a grid](content:playing-the-game/grid-movement)**. **[Difficult terrain](content:playing-the-game/difficult-terrain)** and other types of [terrain](content:playing-the-game/terrain) may impede your movement.\n\nCreatures can get tactical advantages by careful positioning. The most common are using [cover](content:playing-the-game/cover) from terrain and other creatures to increase your [AC](characteristic:armor-class), and **[flanking](content:playing-the-game/flanking)**, which requires you and an ally to be on the opposite sides of an enemy to reduce the enemy's AC.\n\n**Related:** [Escape a grab or restraint](content:playing-the-game/escape), [falling](content:playing-the-game/falling), [forced movement](content:playing-the-game/forced-movement), [moving through creatures](content:playing-the-game/moving-through-a-creatures-space), [special movement modes](content:playing-the-game/movement-types) ([burrow](content:playing-the-game/burrow-speed), [climb](content:playing-the-game/climb-speed), [fly](content:playing-the-game/fly-speed), and [swim](content:playing-the-game/swim-speed)), [travel speed outside of encounters](content:playing-the-game/travel-speed)",
  },
})

export const AttackingSection = Content.defineSection('playing-the-game/attacking', {
  parent: RulesOverviewSection,
  content: {
    name: 'Attacking',
    description:
      "**[Strike](content:playing-the-game/strike)** actions have the [attack](content:traits/attack) trait and allow you to attack with a weapon you're wielding or an unarmed attack (such as a fist). If you're using a melee weapon or unarmed attack, your target must be within your **[reach](content:playing-the-game/range-and-reach)**; if you're attacking with a ranged weapon, your target must be within your **[range](content:playing-the-game/range-and-reach)**. Ranged weapons get less effective as you exceed their **[range increments](content:playing-the-game/range-penalty)**. Striking multiple times in a turn has diminishing returns. A **[multiple attack penalty](content:playing-the-game/multiple-attack-penalty)** applies to each attack after the first.\n\n**Related:** [Cover](content:playing-the-game/cover), [flanking enemies](content:playing-the-game/flanking), [spell attacks](content:playing-the-game/spell-attack-rolls), [targeting creatures](content:playing-the-game/targets)",
  },
})

export const DefensesSection = Content.defineSection('playing-the-game/defenses', {
  parent: RulesOverviewSection,
  content: {
    name: 'Defenses',
    description:
      'Your **[Armor Class](content:playing-the-game/armor-class)** ([AC](characteristic:armor-class)) is the main DC used for attacks against you. You might also roll a type of check called a **[saving throw](content:playing-the-game/saving-throws)**, also called a save, against spells, afflictions, and a wide variety of other effects. There are three kinds of saving throw: **Fortitude**, **Reflex**, and **Will**.',
  },
})

export const DamageSection = Content.defineSection('playing-the-game/damage', {
  parent: RulesOverviewSection,
  content: {
    name: 'Damage',
    description:
      "Attacks, spells, and other dangers **[deal damage](content:playing-the-game/damage-rolls)**. The amount is typically determined by a **[damage roll](content:playing-the-game/damage-rolls)**, which can use a variety of sizes and numbers of dice.\n\nDamage reduces the **[Hit Points](content:classes/hit-points)** (HP) that measure a creature's overall health or an object's durability. A creature might have **[immunity](content:playing-the-game/immunity)** to damage or effects of certain kinds, a **[resistance](content:playing-the-game/resistance)** that reduces the damage it takes, or a **[weakness](content:playing-the-game/weakness)** that increases damage it takes. These are typically keyed to **[damage types](content:playing-the-game/step-2-damage-type)** such as slashing damage or fire damage.\n\n**Related**: [Persistent damage condition](content:conditions/persistent-damage)",
  },
})

export const SpellsSection = Content.defineSection('playing-the-game/spells', {
  parent: RulesOverviewSection,
  content: {
    name: 'Spells',
    description:
      "Most of the rules for casting spells are in [Chapter 7](content:spells). For a spell that requires an attack roll against the target's [AC](characteristic:armor-class), you'll calculate your **[spell attack modifier](content:playing-the-game/spell-attack-rolls)**. For one that causes its subject to attempt a saving throw, you'll need your **[spell DC](content:playing-the-game/spell-dc)**.\n\n**Related:** [Dismiss](content:playing-the-game/dismiss) and [Sustain](content:playing-the-game/sustain) basic actions",
  },
})

export const SkillsSection = Content.defineSection('playing-the-game/skills', {
  parent: RulesOverviewSection,
  content: {
    name: 'Skills',
    description:
      "Skill checks are required for all sorts of other tasks related to adventuring and life in general. Most of their rules are in [Chapter 4](content:skills). You'll find the rules for **calculating skill modifiers** [here](content:skills/skill-checks-and-dcs). Many **[exploration activities](content:playing-the-game/exploration-activities)**, such as [Avoid Notice](content:playing-the-game/avoid-notice) and [Investigate](content:playing-the-game/investigate), also use skill checks.",
  },
})

export const PerceptionAndDetectionSection = Content.defineSection('playing-the-game/perception-and-detection', {
  parent: RulesOverviewSection,
  content: {
    name: 'Perception and Detection',
    description:
      'Your **[Perception modifier](content:playing-the-game/perception)** indicates how good you are at noticing things around you. You typically use the **[Seek](content:playing-the-game/seek)** basic action to find physical things or the **[Sense Motive](content:playing-the-game/sense-motive)** basic action in social situations. While in exploration mode, the **[Search](content:playing-the-game/search)** activity lets you keep an eye out for things around you.\n\nFour main conditions indicate how well you can pinpoint and target a creature: **[observed](content:playing-the-game/observed)**, **[hidden](content:playing-the-game/hidden)**, **[undetected](content:playing-the-game/undetected)**, and **[unnoticed](content:playing-the-game/unnoticed)**. A creature with the **[concealed](content:playing-the-game/concealed)** or **[invisible](content:playing-the-game/invisible)** condition is harder to find and target.\n\n**Related**: [Light](content:playing-the-game/light), [special senses](content:playing-the-game/special-senses)',
  },
})

export const ChecksSection = Content.defineSection('playing-the-game/checks', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Checks',
    description:
      "When success isn't certain—whether you're swinging a sword at a foul beast, attempting to leap across a chasm, or straining to remember the name of the earl's second cousin at a soiree—you'll attempt a check.\n\nAll types of checks, from skill checks to attack rolls to saving throws, follow these basic steps.\n\n- **Roll a d20** and identify the modifiers, bonuses, and penalties that apply.\n\n- **Calculate the result.**\n\n- **Compare to the DC.**\n\n- Determine the **degree of success** and the effect.\n\nChecks and Difficulty Classes (DC) both come in many forms. When you swing your sword at that foul beast, you make an attack roll against its [Armor Class](content:playing-the-game/armor-class), which is the DC to hit another creature. As you try to [leap](content:playing-the-game/leap) across that chasm, you'll attempt an [Athletics](characteristic:skill/athletics) skill check with a DC based on the distance you're trying to jump. When calling to mind the name of the earl's second cousin, you attempt a check to [Recall Knowledge](content:skills/recall-knowledge). You might use either the [Society](characteristic:skill/society) skill or a [Lore](content:skills/lore) skill you have that's relevant to the task, and the DC depends on how common the knowledge of the cousin's name might be, or possibly how many drinks your character had when they were introduced to the cousin the night before.\n\nNo matter the details, for any check you must roll the d20 and achieve a result equal to or greater than the DC to succeed. Each of these steps is explained below.\n\n**Flat Checks**\n\nWhen the chance something will happen or fail to happen is based purely on chance, you'll attempt a flat check. A flat check never includes any modifiers, bonuses, or penalties—you just roll a d20 and compare the result on the die to the DC. Only abilities that specifically apply to flat checks can change the checks' DCs; most such effects affect only certain types of flat checks.\n\nIf more than one flat check would ever cause or prevent the same thing, just roll once and use the highest DC. In the rare circumstance that a flat check has a DC of 1 or lower, skip rolling; you automatically succeed. Conversely, if one ever has a DC of 21 or higher, you automatically fail.\n\n**Secret Checks**\n\nSometimes you as the player shouldn't know the exact result and effect of a check. In these situations, the rules (or the GM) will call for a secret check. The [secret](content:traits/secret) trait appears on anything that uses secret checks. This type of check uses the same formulas you normally would use for that check, but is rolled by the GM, who doesn't reveal the result. Instead, the GM simply describes the information or effects determined by the check's result. If you don't know a secret check is happening (for instance, if the GM rolls a secret [Fortitude](characteristic:fortitude) save against a poison that you failed to notice), you can't use any [fortune](content:traits/fortune) or [misfortune](content:traits/misfortune) abilities on that check, but if a fortune or misfortune effect would apply automatically, the GM applies it to the secret check. If you know that the GM is attempting a secret check—as often happens with [Recall Knowledge](content:skills/recall-knowledge) or [Seek](content:playing-the-game/seek)—you can usually activate fortune or misfortune abilities for that check. Just tell the GM, and they'll apply the ability to the check.\n\nThe GM can choose to make any check secret, even if it's not usually rolled secretly. Conversely, the GM can let you roll any check yourself, even if that check would usually be secret. Some groups find it simpler to have players roll all secret checks and just try to avoid acting on any out-of-character knowledge, while others enjoy the mystery.",
  },
})

export const Step1RollD20Section = Content.defineSection('playing-the-game/step-1-roll-d20', {
  parent: ChecksSection,
  content: {
    name: 'Step 1: Roll D20',
    description:
      "Start by rolling your d20. You'll then identify all the relevant **modifiers**, bonuses, and penalties that apply. A modifier can be either positive or negative, but a **bonus** is always positive, and a **penalty** is always negative. The sum of all the modifiers, bonuses, and penalties you apply to the d20 roll is called your total modifier for that statistic.\n\n**Fortune and Misfortune**\n\n[Fortune](content:traits/fortune) and [misfortune](content:traits/misfortune) effects can alter how you roll your dice. These abilities might allow you to reroll a failed roll, force you to reroll a successful roll, allow you to roll twice and use the higher result, or force you to roll twice and use the lower result.\n\nYou can never have more than one fortune effect or misfortune effect come into play on a single roll. For instance, if an effect lets you roll twice and use the higher roll, you can't then use [Halfling Luck](trait:ancestry/halfling/halfling-luck) (a fortune effect) to reroll if you fail. If multiple fortune effects would apply, you have to pick which to use. If two misfortune effects apply, the GM decides which is worse and applies it.\n\nIf both a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.",
  },
})

export const AttributeModifierSection = Content.defineSection('playing-the-game/attribute-modifier', {
  parent: Step1RollD20Section,
  content: {
    name: 'Attribute Modifier',
    description:
      "Nearly all checks allow you to add an **attribute modifier** to the roll. Attribute modifiers represent your raw capability and are described [here](content:introduction/character-creation). Exactly which attribute modifier you use is determined by what you're trying to accomplish. Usually, a sword swing applies your [Strength modifier](characteristic:strength), whereas remembering the name of the earl's cousin uses your [Intelligence modifier](characteristic:intelligence).",
  },
})

export const StrengthSection = Content.linkEntity(AttributeModifierSection, Characteristic.Strength)

export const DexteritySection = Content.linkEntity(AttributeModifierSection, Characteristic.Dexterity)

export const ConstitutionSection = Content.linkEntity(AttributeModifierSection, Characteristic.Constitution)

export const IntelligenceSection = Content.linkEntity(AttributeModifierSection, Characteristic.Intelligence)

export const WisdomSection = Content.linkEntity(AttributeModifierSection, Characteristic.Wisdom)

export const CharismaSection = Content.linkEntity(AttributeModifierSection, Characteristic.Charisma)

export const BonusesSection = Content.defineSection('playing-the-game/bonuses', {
  parent: Step1RollD20Section,
  content: {
    name: 'Bonuses',
    description:
      "When attempting a check that involves something you have some training in, you will also add your **proficiency bonus**. This bonus depends on your proficiency rank: untrained, trained, expert, master, or legendary. If you're untrained, your bonus is +0—you must rely on raw talent and any bonuses from the situation. Otherwise, the bonus equals your character's level plus a certain amount depending on your rank. If your proficiency rank is trained, this bonus is equal to your level + 2, and higher proficiency ranks further increase the amount you add to your level.\n\n## Proficiency Bonus\n\n| **Proficiency Rank** | **Proficiency Bonus** |\n|---|---|\n| Untrained | 0 |\n| Trained | Your level + 2 |\n| Expert | Your level + 4 |\n| Master | Your level + 6 |\n| Legendary | Your level + 8 |\n\nThere are three other types of bonus that frequently appear: circumstance bonuses, item bonuses, and status bonuses. If you have different types of bonuses that would apply to the same roll, you'll add them all. But if you have multiple bonuses of the same type, you can use only the highest bonus on a given roll—they aren't cumulative. For instance, if you have both a proficiency bonus and an item bonus, you add both to your d20 result, but if you have two item bonuses, you add only the higher of the two.\n\n**Circumstance bonuses** involve the situation you find yourself in when attempting a check. For instance, using [Raise a Shield](content:playing-the-game/raise-a-shield) with a [buckler](ability:shield/buckler) grants you a +1 circumstance bonus to [AC](characteristic:armor-class). Being behind [cover](content:playing-the-game/cover) grants you a +2 circumstance bonus to AC.\n\n**Item bonuses** are granted by some item that you are wearing or using, either mundane or magical. For example, armor gives you an item bonus to AC, while an expanded alchemist's toolkit grants you an item bonus to [Crafting](characteristic:skill/crafting) checks when making alchemical items.\n\n**Status bonuses** typically come from spells, other magical effects, or something applying a helpful, often temporary, condition to you. For instance, the 3rd-rank [_heroism_](ability:spell/heroism) spell grants a +1 status bonus to attack rolls, [Perception](characteristic:perception) checks, saving throws, and skill checks.",
  },
})

export const PenaltiesSection = Content.defineSection('playing-the-game/penalties', {
  parent: Step1RollD20Section,
  content: {
    name: 'Penalties',
    description:
      "Penalties work very much like bonuses. You can have **circumstance penalties**, **status penalties**, and sometimes even **item penalties**. Like bonuses of the same type, you take only the worst all of various penalties of a given type. However, you can apply both a bonus and a penalty of the same type on a single roll. For example, if you had a +1 status bonus from a [_heroism_](ability:spell/heroism) spell but a –2 status penalty from the [sickened](content:conditions/sickened) condition, you'd apply them both to your roll—so heroism still helps even though you're feeling unwell.\n\nUnlike bonuses, penalties can also be **untyped**, in which case they won't be classified as “circumstance,” “item,” or “status.” Unlike other penalties, you always add all your untyped penalties together rather than simply taking the worst one. For instance, when you use attack actions, you incur a [multiple attack penalty](content:playing-the-game/multiple-attack-penalty) on each attack you make on your turn after the first attack of the turn, and when you attack a target that's beyond your weapon's normal range increment, you incur a [range penalty](content:playing-the-game/range-penalty) on the attack. Because these are both untyped penalties, if you make multiple attacks at a faraway target, you'd apply both the multiple attack penalty and the range penalty to your roll.\n\nOnce you've identified all your various modifiers, bonuses, and penalties, you move on to the next step.",
  },
})

export const Step2CalculateResultSection = Content.defineSection('playing-the-game/step-2-calculate-result', {
  parent: ChecksSection,
  content: {
    name: 'Step 2: Calculate Result',
    description:
      'This step is simple. Add up all the various modifiers, bonuses, and penalties you identified in [Step](content:playing-the-game/step) 1—this is your total modifier. Next add that to the number that came up on your d20 roll. This total is your check result.',
  },
})

export const Step3CompareToDCSection = Content.defineSection('playing-the-game/step-3-compare-to-dc', {
  parent: ChecksSection,
  content: {
    name: 'Step 3: Compare to DC',
    description:
      "Whenever you attempt a check, you compare your result against the **Difficulty Class (DC)** of the check. Your check succeeds if it's equal to or greater than the DC. If you roll anything less than the DC, you fail.\n\nSometimes you'll know the DC and make the comparison yourself. Other times, you might not know the DC right away. [Swimming](content:skills/swim) across a river would require an [Athletics](characteristic:skill/athletics) check, but it doesn't have a specified DC—so how will you know if you succeed or fail? You call out your result to the GM and they'll let you know if it's a success, failure, or otherwise. While you might learn the exact DC through trial and error, DCs sometimes change, so asking the GM whether a check is successful is best.",
  },
})

export const GettingADCFromAModifierSection = Content.defineSection('playing-the-game/getting-a-dc-from-a-modifier', {
  parent: Step3CompareToDCSection,
  content: {
    name: 'Getting a DC from a Modifier',
    description:
      'When someone attempts a check against you, you might need to defend with one of your statistics that’s normally a modifier, such as your “[Reflex](characteristic:reflex) DC.” Rather than rolling a check of your own, you need to generate a fixed DC based on your modifier. Your DC for a given statistic is 10 + the total modifier for that statistic. So if you have a +4 Reflex save, your Reflex DC is 14.',
  },
})

export const Step4DegreeOfSuccessSection = Content.defineSection('playing-the-game/step-4-degree-of-success', {
  parent: ChecksSection,
  content: {
    name: 'Step 4: Degree of Success',
    description:
      "Many times, it's important to determine not only if you succeed or fail, but also how spectacularly you succeed or fail. Exceptional results—either good or bad—can cause you to critically succeed or critically fail at a check.\n\nYou **critically succeed** when the check's result meets or exceeds the DC by 10 or more. If the check is an attack roll, this is also known as a critical hit. You can also **critically fail** a check. The rules for critical failure—sometimes called a fumble—are the same as those for a critical success, but in the other direction: if you fail a check by 10 or more, that's a critical failure.\n\nSome actions and abilities have stronger effects on a critical success or failure. For example, a [Strike](content:playing-the-game/strike) deals double damage on a critical hit. If an effect doesn't list a critical success effect, the critical success effect is the same as the success effect, and the same goes for critical failures.",
  },
})

export const Natural1AndNatural20Section = Content.defineSection('playing-the-game/natural-1-and-natural-20', {
  parent: Step4DegreeOfSuccessSection,
  content: {
    name: 'Natural 1 and Natural 20',
    description:
      'If you rolled a 20 on the die (a “natural 20”), your result is one degree of success better than it would be by numbers alone. If you roll a 1 on the d20 (a “natural 1”), your result is one degree worse. This means that a natural 20 usually results in a critical success and natural 1 usually results in a critical failure. However, if you were going up against a very high DC, you might get only a success with a natural 20, or even a failure if 20 plus your total modifier is 10 or more below the DC. Likewise, if your modifier for a statistic is so high that adding it to a 1 from your d20 roll exceeds the DC by 10 or more, you can succeed even if you roll a natural 1!\n\nCertain abilities can change the degree of success on a roll. When resolving such an ability, apply the adjustment from a natural 20 or natural 1 before anything else.',
  },
})

export const AttackRollsSection = Content.defineSection('playing-the-game/attack-rolls', {
  parent: ChecksSection,
  content: {
    name: 'Attack Rolls',
    description:
      "When you use a [Strike](content:playing-the-game/strike) action or make a spell attack, you attempt a check called an attack roll. Attack rolls take a variety of forms and are often highly variable based on the weapon you are using for the attack, but there are three main types: melee attack rolls, ranged attack rolls, and [spell attack rolls](characteristic:spell-attack). Spell attack rolls work a little bit differently, so they are explained separately on the next page.\n\n**Melee** attack rolls use Strength as their attribute modifier by default. If you're using a weapon or attack with the finesse trait, then you can use your [Dexterity modifier](characteristic:dexterity) instead.\n\n**Melee attack roll result = d20 roll + Strength modifier (or optionally Dexterity modifier for a finesse weapon) + proficiency bonus + other bonuses + penalties**\n**Ranged** attack rolls use Dexterity as their attribute modifier.\n\n**Ranged attack roll result = d20 roll + Dexterity modifier + proficiency bonus + other bonuses + penalties** When attacking with a weapon, whether melee or ranged, you add your proficiency bonus for the weapon you're using. Your class determines your proficiency rank for various weapons. Sometimes, you'll have different proficiency ranks for different weapons or groups of weapons.\n\nThe bonuses you might apply to attack rolls can come from a variety of sources. Circumstance bonuses can come from the aid of an ally or a beneficial situation. Status bonuses are typically granted by spells and other magical aids. The item bonus to attack rolls comes from magic weapons—notably, a weapon's potency rune.\n\nPenalties to attack rolls come from situations and effects as well. Circumstance penalties come from risky tactics or detrimental circumstances, status penalties come from spells and magic working against you, and item penalties occur when you use a [shoddy item](content:equipment/shoddy-items). When making attack rolls, two main types of untyped penalties are likely to apply. The first is the [multiple attack penalty](content:playing-the-game/multiple-attack-penalty), and the second is the [range penalty](content:playing-the-game/range-penalty). The first applies anytime you make more than one attack action during the course of your turn, and the other applies only with ranged or thrown weapons. Both are described below.",
  },
})

export const MultipleAttackPenaltySection = Content.defineSection('playing-the-game/multiple-attack-penalty', {
  parent: AttackRollsSection,
  content: {
    name: 'Multiple Attack Penalty',
    description:
      "The more attacks you make beyond your first in a single turn, the less accurate you become, represented by the **multiple attack penalty**. The second time you use an attack action during your turn, you take a –5 penalty to your check. The third time you attack, and on any subsequent attacks, you take a –10 penalty to your check. Every check that has the [attack](content:traits/attack) trait counts toward your multiple attack penalty, including [Strikes](content:playing-the-game/strike), [spell attack rolls](characteristic:spell-attack), certain skill actions like [Shove](content:skills/shove), and many others.\n\nSome weapons and abilities reduce multiple attack penalties, such as [agile](content:traits/agile) weapons, which reduce these penalties to –4 on the second attack or –8 on further attacks.\n\n## Multiple Attack Penalty\n\n| **Attack** | **Multiple Attack Penalty** | **Agile** |\n|---|---|---|\n| First | None | None |\n| Second | -5 | -4 |\n| Third and subsequent | -10 | -8 |\n\nAlways calculate your multiple attack penalty based on the weapon you're using on that attack, not ones you used on previous attacks. For example, let's say you're wielding a longsword in one hand and a shortsword (which has the agile trait) in your other hand, and you make three Strikes with these weapons over the course of your turn. The first Strike you make during your turn has no penalty, no matter what weapon you are using. The second Strike will take either a –5 penalty if you use the longsword or a –4 penalty if you use the shortsword. Your third attack would be a –10 penalty with the longsword and a –8 penalty with the shortsword, no matter what weapon you used for your previous Strikes.\n\nThe multiple attack penalty applies only during your turn, so you don't have to keep track of it if you can perform a [Reactive Strike](content:playing-the-game/reactive-strike) or a similar reaction that lets you make a Strike on someone else's turn.",
  },
})

export const RangePenaltySection = Content.defineSection('playing-the-game/range-penalty', {
  parent: AttackRollsSection,
  content: {
    name: 'Range Penalty',
    description:
      "Ranged and thrown weapons each have a listed **range increment**, and attacks with them grow less accurate against targets farther away (range and range increments are covered in depth [here](content:playing-the-game/range-and-reach)). As long as your target is at or within the listed range increment, also called the first range increment, you take no penalty to the attack roll. If you're attacking beyond that range increment, you take a –2 penalty for each additional increment beyond the first. You can attempt to attack with a ranged weapon or [thrown](content:traits/thrown) weapon up to six range increments away, but the farther away you are, the harder it is to hit your target.\n\nFor example, the range increment of a crossbow is 120 feet. If you are shooting at a target no farther away than that distance, you take no penalty due to range. If they're beyond 120 feet but no more than 240 feet away, you take a –2 penalty due to range. If they're beyond 240 feet but no more than 360 feet away, you take a –4 penalty due to range, and so on, until you reach the last range increment: beyond 600 feet but no more than 720 feet away, where you take a –10 penalty due to range.",
  },
})

export const CompareToACSection = Content.defineSection('playing-the-game/compare-to-ac', {
  parent: AttackRollsSection,
  content: {
    name: 'Compare to AC',
    description:
      'You compare your attack roll to [Armor Class](characteristic:armor-class) (AC), a special type of DC. Learn how to calculate it on [here](content:playing-the-game/armor-class).',
  },
})

export const SpellAttackRollsSection = Content.defineSection('playing-the-game/spell-attack-rolls', {
  parent: ChecksSection,
  content: {
    name: 'Spell Attack Rolls',
    description:
      "If you cast spells, you might need to make a [spell attack roll](characteristic:spell-attack). These rolls are usually made when you cast a spell that targets a creature's [AC](characteristic:armor-class).\n\nThe attribute modifier for a spell attack roll depends on how you gained the spell. If your class grants you spellcasting, use your key attribute modifier (such as Intelligence for a [wizard](trait:wizard)). Innate spells use your [Charisma modifier](characteristic:charisma) unless the ability that granted them states otherwise. Focus spells and other sources of spells specify which attribute modifier you use for spell attack modifiers in the ability that granted them. If you have spells from multiple sources or traditions, you might use different attribute modifiers for spell attack modifiers for these different sources of spells. For example, a [dwarf](trait:ancestry/dwarf) [cleric](trait:cleric) with the Stonewalker ancestry feat would use her Charisma modifier when casting [_one with stone_](ability:spell/one-with-stone) from that feat, since it's a divine innate spell, but she would use her [Wisdom modifier](characteristic:wisdom) when casting [_heal_](ability:spell/heal) and other spells using her cleric divine spellcasting.\n\nIf you have the ability to cast spells, you'll have a proficiency rank for your spell attack modifier, so you'll always add a proficiency bonus. Spell attack rolls can benefit from circumstance bonuses and status bonuses, though item bonuses to spell attack rolls are rare. Penalties affect spell attack rolls just like any other attack roll—including your [multiple attack penalty](content:playing-the-game/multiple-attack-penalty).\n\nCalculate a **spell attack roll** with the following formula.\n\n**Spell attack roll result = d20 roll + spellcasting attribute modifier + proficiency bonus + other bonuses + penalties**\n\n**Writing Down Statistics**\n\nWhen creating your character and adventuring you'll record the total modifier for various important checks on your character sheet. Since many bonuses and penalties are due to the immediate circumstances, spells, and other temporary magical effects, you typically won't apply them to your notations.\n\nFor example, the number you write down for your **attack modifier** with your battle axe would likely be your [Strength modifier](characteristic:strength) + your proficiency bonus with martial weapons. Your **spell attack modifier** is typically just your spellcasting attribute modifier + your proficiency bonus, and your **spell DC** is usually the same number + 10.\n\nItem bonuses and penalties are often more persistent, so you will often want to record them ahead of time. For instance, if you upgraded your battle axe with a +1 weapon potency rune, you'll want to add the +1 item bonus into your attack modifier with the battle axe, since you will include that bonus every time you attack with that weapon.",
  },
})

export const SpellAttackSection = Content.linkEntity(SpellAttackRollsSection, Characteristic.SpellAttack)

export const SpellDCSection = Content.defineSection('playing-the-game/spell-dc', {
  parent: ChecksSection,
  content: {
    name: 'Spell DC',
    description:
      'Many times, instead of requiring you to make a [spell attack roll](characteristic:spell-attack), the spells you cast will require those within the area or targeted by the spell to attempt a saving throw against your **spell DC** to determine how the spell affects them. Calculate it using the following formula.\n\n**Spell DC = 10 + spellcasting attribute modifier + proficiency bonus + other bonuses + penalties**',
  },
})

export const SpellDCSpellDCSection = Content.linkEntity(SpellDCSection, Characteristic.SpellDC)

export const ChecksDefensesSection = Content.defineSection('playing-the-game/checks/defenses', {
  parent: ChecksSection,
  content: {
    name: 'Defenses',
    description:
      'Multiple statistics help you defend against attacks, spells, hazards, and other dangers of adventuring: [Armor Class](characteristic:armor-class) and three saving throws.',
  },
})

export const ArmorClassSection = Content.defineSection('playing-the-game/armor-class', {
  parent: ChecksDefensesSection,
  content: {
    name: 'Armor Class',
    description:
      "Attack rolls are compared to a special Difficulty Class called [Armor Class](characteristic:armor-class) (AC), which measures how hard it is for your foes to hit you with [Strikes](content:playing-the-game/strike), [spell attack rolls](characteristic:spell-attack), and other attacks. Just like for any other check and DC, the result of an attack roll must meet or exceed your AC to be successful, which allows your foe to deal damage to you. Armor Class is calculated using the following formula.\n\n**Armor Class = 10 + Dexterity modifier** (up to your armor's Dex Cap) **+ proficiency bonus + armor's item bonus to AC + other bonuses + penalties** Use your proficiency bonus for the category (light, medium, or heavy) or the specific type of armor you're wearing. If you're not wearing armor, use your proficiency in unarmored defense.\n\nArmor Class can benefit from bonuses with a variety of sources, much like attack rolls. Armor itself grants an item bonus, so other item bonuses usually won't apply to your AC, but magic armor can increase the item bonus granted by your armor.\n\nPenalties to AC come from situations and effects in much the same way bonuses do. Circumstance penalties come from unfavorable situations, and status penalties come from effects that impede your abilities or from [broken](content:conditions/broken) armor. You take an item penalty when you wear [shoddy armor](content:equipment/shoddy-items).",
  },
})

export const ArmorClassArmorClassSection = Content.linkEntity(ArmorClassSection, Characteristic.ArmorClass)

export const SavingThrowsSection = Content.defineSection('playing-the-game/saving-throws', {
  parent: ChecksDefensesSection,
  content: {
    name: 'Saving Throws',
    description:
      "There are three types of saving throws: Fortitude saves, [Reflex](characteristic:reflex) saves, and [Will saves](characteristic:will). These are frequently called “saves”—it's the same thing. Saving throws measure your ability to shrug off harmful effects in the form of afflictions, damage, or conditions. You'll always add a proficiency bonus to each save. Your class might give a different proficiency to each save, but you'll be trained at minimum. Some circumstances and spells might give you circumstance or status bonuses to saves, and you might find resilient armor or other magic items that give an item bonus.\n\n**Fortitude** saving throws allow you to reduce the effects of abilities and afflictions that can debilitate the body. They use your [Constitution modifier](characteristic:constitution) and are calculated as shown in the formula below.\n\n**Fortitude save result = d20 roll + Constitution modifier + proficiency bonus + other bonuses + penalties**\n**Reflex** saving throws measure how well you can respond quickly to a situation and how gracefully you can avoid effects that have been thrown at you. They use your [Dexterity modifier](characteristic:dexterity) and are calculated as shown in the formula below.\n\n**Reflex save result = d20 roll + Dexterity modifier + proficiency bonus + other bonuses + penalties**\n**Will** saving throws measure how well you can resist attacks to your mind and spirit. They use your [Wisdom modifier](characteristic:wisdom) and are calculated as shown in the formula below.\n\n**Will save result = d20 roll + Wisdom modifier + proficiency bonus + other bonuses + penalties** Sometimes you'll need to know your DC for a given saving throw (such as a [Grapple](content:skills/grapple) attempt requiring a roll against your [Fortitude](characteristic:fortitude) DC). Like any other DC derived from a modifier, the DC for a saving throw is 10 + the total modifier for that saving throw.\n\nMost of the time, when you attempt a saving throw, you don't have to use your actions or your reaction. You don't even need to be able to act to attempt saving throws. However, in some special cases you might have to take an action to attempt a save. For instance, you can try to recover from the [sickened](content:conditions/sickened) condition by spending an action to attempt a Fortitude save.",
  },
})

export const BasicSavingThrowsSection = Content.defineSection('playing-the-game/basic-saving-throws', {
  parent: SavingThrowsSection,
  content: {
    name: 'Basic Saving Throws',
    description:
      "Sometimes you will be called on to attempt a basic saving throw (or “basic save”). This type of saving throw works just like any other saving throw—the “basic” part refers to the effects. For a basic save, you'll attempt the check and determine whether you critically succeed, succeed, fail, or critically fail like you would any other saving throw. Then one of the following outcomes applies based on your degree of success—no matter what caused the saving throw. Some spells or abilities add an additional effect on certain results but still use a basic saving throw for brevity.\n\n**Critical Success** You take no damage from the effect.\n**Success** You take half the listed damage from the effect.\n**Failure** You take the full damage listed from the effect.\n**Critical Failure** You take double the listed damage from the effect.",
  },
})

export const FortitudeSection = Content.linkEntity(SavingThrowsSection, Characteristic.Fortitude)

export const ReflexSection = Content.linkEntity(SavingThrowsSection, Characteristic.Reflex)

export const WillSection = Content.linkEntity(SavingThrowsSection, Characteristic.Will)

export const PerceptionSection = Content.defineSection('playing-the-game/perception', {
  parent: ChecksSection,
  content: {
    name: 'Perception',
    description:
      "Perception measures your ability to be aware of your environment. Every creature has [Perception](characteristic:perception), which works with and is limited by a creature's senses. (Details on senses and detecting things are [here](content:playing-the-game/playing-the-game/perception-and-detection)). Whenever you need to attempt a check based on your awareness, you'll attempt a Perception check. Your Perception uses your [Wisdom modifier](characteristic:wisdom), so you'll use the following formula when attempting a Perception check.\n\n**Perception check result = d20 roll + Wisdom modifier + proficiency bonus + other bonuses + penalties** Nearly all creatures are at least trained in Perception, so you will almost always add a proficiency bonus to your Perception modifier. You might add a circumstance bonus for advantageous situations or environments and typically get status bonuses from spells or other magical effects. Items can also grant you a bonus to Perception, typically in a certain situation. For instance, a fine spyglass grants a +1 item bonus to Perception when attempting to see something a long distance away. Circumstance penalties to Perception occur when an environment or situation (such as fog) hampers your senses, while status penalties typically come from conditions, spells, and magic effects that foil the senses. You'll rarely encounter item penalties or untyped penalties for Perception.\n\nMany abilities are compared to your **Perception DC** to determine whether they succeed. As with any DC based on a modifier, your Perception DC is 10 + your total Perception modifier.",
  },
})

export const PerceptionForInitiativeSection = Content.defineSection('playing-the-game/perception-for-initiative', {
  parent: PerceptionSection,
  content: {
    name: 'Perception for Initiative',
    description:
      'Often, you’ll roll a [Perception](characteristic:perception) check to determine your order in initiative. When you do this, instead of comparing the result against a DC, the GM will put the results for everyone in the encounter in order. The creature with the highest result acts first, the creature with the second-highest result goes second, and so on. Sometimes you may be called on to roll a skill check for initiative instead, but you’ll compare results just as if you had rolled Perception. The full rules for initiative are found in the rules for [encounter mode](content:playing-the-game/encounter-mode).',
  },
})

export const PerceptionPerceptionSection = Content.linkEntity(PerceptionSection, Characteristic.Perception)

export const SkillChecksSection = Content.defineSection('playing-the-game/skill-checks', {
  parent: ChecksSection,
  content: {
    name: 'Skill Checks',
    description:
      "Pathfinder has a variety of skills, from [Athletics](characteristic:skill/athletics) to [Medicine](characteristic:skill/medicine) to [Occultism](characteristic:skill/occultism). Each grants you a set of related actions that rely on you rolling a skill check. Each skill has a key attribute modifier, based on the scope of the skill in question. For instance, Athletics deals with feats of physical prowess, like [swimming](content:skills/swim) and [jumping](content:playing-the-game/leap), so its key attribute modifier is Strength. Medicine deals with the ability to diagnose and [treat wounds](content:skills/treat-wounds) and ailments, so its key attribute modifier is Wisdom. The key attribute modifier for each skill is listed on their skill page. No matter which skill you're using, you calculate a check for it using the following formula.\n\n**Skill check result = d20 roll + the skill's key attribute modifier + proficiency bonus + other bonuses + penalties** You're unlikely to be trained in every skill. As normal, when using a skill in which you're untrained, your proficiency bonus is +0; otherwise, it equals your level plus 2 for trained, or higher once you become expert or better. The proficiency rank is specific to the skill you're using. [Aid](content:playing-the-game/aid) from another character or some other beneficial situation may grant you a circumstance bonus. A status bonus might come from a helpful spell or magical effect. Sometimes tools related to the skill grant you an item bonus to your skill checks. Conversely, unfavorable situations might give you a circumstance penalty to your skill check, while harmful spells, magic, or conditions might also impose a status penalty. Using [shoddy](content:equipment/shoddy-items) or makeshift tools might cause you to take an item penalty. Sometimes a skill action can be an attack, and in these cases, the skill check might take a [multiple attack penalty](content:playing-the-game/multiple-attack-penalty).\n\nWhen an ability calls for you to use the DC for a specific skill, you can calculate it by adding 10 + your total modifier for that skill.",
  },
})

export const DamageRollsSection = Content.defineSection('playing-the-game/damage-rolls', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Damage Rolls',
    description:
      "Strikes, spells, hazards, and all number of other dangers can deal damage, which can kill creatures and destroy objects.\n\nDamage decreases a creature's [Hit Points](characteristic:hit-points) (HP) on a 1-to- 1 basis (so a creature that takes 6 damage loses 6 Hit Points). The full rules for losing HP can be found in the [Hit Points, Healing, and Dying](content:playing-the-game/hit-points-healing-and-dying) section.\n\nDamage is sometimes given as a fixed amount, but more often than not you'll make a damage roll to determine how much damage you deal. A damage roll typically uses a number and type of dice determined by the weapon or unarmed attack used or the spell cast, and it's often enhanced by various modifiers, bonuses, and penalties. Like checks, a damage roll—especially a melee weapon damage roll—is often modified by a number of modifiers, penalties, and bonuses. When making a damage roll, you take the following steps, explained in detail below.\n\n- **Roll damage dice** indicated by the weapon, unarmed attack, or spell, and apply the modifiers, bonuses, and penalties that apply to the result of the roll.\n\n- Determine the **damage type.**\n\n- Apply **immunities**, **weaknesses**, and **resistances** the subject has to the damage.\n\n- If any damage remains, **reduce Hit Points** the target has by that amount.",
  },
})

export const Step1RollDamageDiceSection = Content.defineSection('playing-the-game/step-1-roll-damage-dice', {
  parent: DamageRollsSection,
  content: {
    name: 'Step 1: Roll Damage Dice',
    description:
      "Your weapon, unarmed attack, spell, or even a magic item determines what size and number of dice you roll for damage. For instance, if you're using a normal longsword, you'll roll 1d8. If you're casting a 3rd-rank [_fireball_](ability:spell/fireball) spell, you'll roll 6d6. Sometimes, especially in the case of weapons, you'll apply modifiers, bonuses, and penalties to the damage.\n\nDamage rolls for melee weapons and unarmed attacks typically add your Strength attribute modifier.\n\n**Melee damage roll = damage die of weapon or unarmed attack + Strength modifier + bonuses + penalties** Damage rolls for **ranged** weapons typically don't add an attribute modifier, though you add your [Strength modifier](characteristic:strength) to damage rolls for [thrown](content:traits/thrown) weapons or half the modifier to damage rolls for ranged weapons with the [propulsive](content:traits/propulsive) trait.\n\n**Ranged damage roll = damage die of weapon** (+ Strength modifier for a thrown weapon or half Strength modifier for a propulsive weapon) **+ bonuses + penalties** For damage rolls with **spells**, **[alchemical bombs](content:equipment/alchemical-bombs)**, and similar items, you don't add an attribute modifier unless otherwise noted.\n\n**Spell** (or similar effect) **damage roll = damage die of effect + bonuses + penalties** As with checks, you might add circumstance, status, or item bonuses to your damage rolls, but if you have multiple bonuses of the same type, you add only the highest bonus of that type. Again like checks, you may also apply circumstance, status, item, and untyped penalties to the damage roll, and again you apply only the greatest penalty of a specific type but apply all untyped penalties together.\n\nIf the combined penalties on an attack would reduce the damage to 0 or below, you still deal 1 damage. Sometimes there are other considerations, described below.",
  },
})

export const AddingDamageDiceSection = Content.defineSection('playing-the-game/adding-damage-dice', {
  parent: Step1RollDamageDiceSection,
  content: {
    name: 'Adding Damage Dice',
    description:
      "Each weapon lists the damage die used for its damage roll. A standard weapon deals one die of damage, but a magical _striking rune_ can increase the number of dice rolled, as can some special actions and spells. These additional dice use the same die size as the weapon or unarmed attack's normal damage die.",
  },
})

export const CountingDamageDiceSection = Content.defineSection('playing-the-game/counting-damage-dice', {
  parent: Step1RollDamageDiceSection,
  content: {
    name: 'Counting Damage Dice',
    description:
      "Effects based on a weapon's number of damage dice include only the weapon's damage die plus any extra dice from a _striking rune_. They don't count extra dice from abilities, critical specialization effects, property runes, weapon traits, or the like.",
  },
})

export const IncreasingDieSizeSection = Content.defineSection('playing-the-game/increasing-die-size', {
  parent: Step1RollDamageDiceSection,
  content: {
    name: 'Increasing Die Size',
    description:
      "When an effect calls on you to increase the size of your weapon damage dice, instead of using its normal weapon damage dice, use the next larger die, as listed below (so if you were using a d4, you'd use a d6, and so on). If you are already using a d12, the size is already at its maximum. You can't increase your weapon damage die size more than once.\n\n**1d4 » 1d6 » 1d8 » 1d10 » 1d12**",
  },
})

export const PersistentDamageSection = Content.defineSection('playing-the-game/persistent-damage', {
  parent: Step1RollDamageDiceSection,
  content: {
    name: 'Persistent Damage',
    description:
      '[Persistent damage](content:conditions/persistent-damage) is a condition that causes damage to recur beyond the original effect. Like normal damage, it can be doubled or halved based on the results of an attack roll or saving throw. Unlike with normal damage, when you are subject to persistent damage, you don’t take it right away. Instead, you take the specified damage at the end of your turns, after which you attempt a DC 15 flat check to see if you recover from the persistent damage.',
  },
})

export const DoublingAndHalvingDamageSection = Content.defineSection('playing-the-game/doubling-and-halving-damage', {
  parent: Step1RollDamageDiceSection,
  content: {
    name: 'Doubling and Halving Damage',
    description:
      "Sometimes you'll need to halve or double an amount of damage, such as when the outcome of your [Strike](content:playing-the-game/strike) is a critical hit or when you succeed at a basic [Reflex](characteristic:reflex) save against a spell. When this happens, you roll the damage normally, adding all the normal modifiers, bonuses, and penalties. Then you double or halve the amount as appropriate. As normal, round down if you halve the damage (though 1 damage halved remains at a minimum of 1 damage).\n\nWhen doubling, the GM might allow you to roll the dice twice and double the modifiers, bonuses, and penalties instead of doubling the entire result, but this usually works best for single-target attacks or spells at low levels when you have a small number of damage dice to roll. Benefits you gain specifically from a critical hit, like the extra damage die from the [fatal](content:traits/fatal) weapon trait, aren't doubled.",
  },
})

export const Step2DamageTypeSection = Content.defineSection('playing-the-game/step-2-damage-type', {
  parent: DamageRollsSection,
  content: {
    name: 'Step 2: Damage Type',
    description:
      "Once you've calculated how much damage you deal, you'll need to determine the damage type. The smack of a club deals bludgeoning damage. The shock of a _[lightning bolt](ability:spell/lightning-bolt)_ spell deals electricity damage. Sometimes you might apply precision damage, dealing more damage for hitting a creature in a vulnerable spot or when the target is somehow vulnerable.\n\n**Damage Types**\n\nDamage has a number of different types and categories, which are described below.\n\n**Physical Damage**\n\nDamage dealt by weapons, many physical hazards, and a handful of spells is collectively called physical damage. The main types of physical damage are bludgeoning, piercing, and slashing. **Bludgeoning** damage comes from weapons and hazards that deal blunt-force trauma, like a hit from a club or being dashed against rocks. **Piercing** damage is dealt from stabs and punctures, whether from a dragon's fangs or the thrust of a spear. **Slashing** damage is delivered by a cut, be it the swing of the sword or the blow from a scythe blades trap.\n\nGhosts and other incorporeal creatures have a high resistance to physical attacks that aren't magical (attacks that lack the magical trait). Furthermore, most incorporeal creatures have additional, though lower, resistance to magical physical damage (such as damage dealt from a mace with the [magical](content:traits/magical) trait) and most other damage types.\n\n**Energy Damage**\n\nMany spells and other magical effects deal energy damage. Energy damage is also dealt from effects in the world, such as the biting cold of a blizzard to a raging forest fire. The main types of energy damage are acid, cold, electricity, fire, and sonic. **[Acid](content:traits/acid)** damage can be delivered by gases, liquids, and certain solids that dissolve flesh, and sometimes harder materials. **[Cold](content:traits/cold)** damage freezes material by way of contact with chilling gases and ice. **[Electricity](content:traits/electricity)** damage comes from the discharge of powerful lightning and sparks. **[Fire](content:traits/fire)** damage burns through heat and combustion. **[Sonic](content:traits/sonic)** damage assaults matter with high-frequency vibration and sound waves. Many times, you deal energy damage by casting magic spells, and doing so is often useful against creatures that have immunities or resistances to physical damage.\n\nTwo special types of energy damage specifically target the living and the undead. **[Vitality](content:traits/vitality)** damage harms only undead creatures, withering undead bodies and disrupting incorporeal undead. **[Void](content:traits/void)** damage saps life, damaging only living creatures.\n\nPowerful and pure magical energy can manifest itself as **[force](content:traits/force)** damage. Few things can resist this type of damage—not even incorporeal creatures such as ghosts and wraiths.\n\n**Spirit Damage**\n\nDirectly affecting the spiritual essence of a creature, **[spirit](content:traits/spirit)** damage can damage a target projecting its consciousness or possessing another creature even if the target's body is elsewhere. The possessed creature isn't harmed by the blast. Spirit damage doesn't harm creatures that have no spirit, such as [constructs](content:traits/construct). Many effects that deal spirit damage also have the [sanctified](content:traits/sanctified), [holy](content:traits/holy), or [unholy](content:traits/unholy) trait.\n\n**Mental Damage**\n\nSometimes an effect can target the mind with enough psychic force to actually deal damage to the creature. When it does, it deals **[mental](content:traits/mental)** damage. [Mindless](content:traits/mindless) creatures and those with only programmed or rudimentary intelligence are often immune to mental damage and effects.\n\n**Poison Damage**\n\nVenoms, toxins and the like can deal **[poison](content:traits/poison)** damage, which affects creatures by way of contact, ingestion, inhalation, or injury. In addition to coming from monster attacks, alchemical items, and spells, poison damage is often caused by ongoing afflictions, which follow special rules described [here](content:playing-the-game/afflictions).\n\n**Bleed Damage**\n\nAnother special type of physical damage is **bleed** damage. This is typically [persistent damage](content:conditions/persistent-damage), and represents loss of blood. Typically nonliving creatures and living ones that don't need blood to live are immune to bleed. Weaknesses and resistances to physical damage apply. Bleed damage ends automatically if you're healed to your full [Hit Points](characteristic:hit-points).\n\n**Precision Damage**\n\nSometimes you are able to make the most of your attack through sheer precision. When you hit with an ability that grants you **precision** damage, you increase the attack's listed damage, using the same damage type, rather than tracking a separate pool of damage. For example, a nonmagical dagger [Strike](content:playing-the-game/strike) that deals 1d6 precision damage from a [rogue's](trait:rogue) sneak attack increases the piercing damage by 1d6.\n\nSome creatures are immune to precision damage, regardless of the damage type; these are often amorphous creatures that lack vulnerable anatomy. A creature immune to precision damage would ignore the 1d6 precision damage in the example above, but it would still take the rest of the piercing damage from the Strike. Since precision damage is always the same type of damage as the attack it's augmenting, a creature that is resistant to physical damage, like a gargoyle, would resist not only the dagger's damage but also the precision damage, even though it is not specifically resistant to precision damage.\n\n**Precious Materials**\n\nWhile not their own damage category, precious materials can modify damage to penetrate a creature's resistances or take advantage of its weaknesses. For instance, silver weapons are particularly effective against werecreatures and bypass the resistances to physical damage that most [devils](content:traits/devil) have.",
  },
})

export const Step3ApplyImmunitiesWeaknessesAndResistancesSection = Content.defineSection(
  'playing-the-game/step-3-apply-immunities-weaknesses-and-resistances',
  {
    parent: DamageRollsSection,
    content: {
      name: 'Step 3: Apply Immunities, Weaknesses, and Resistances',
      description:
        'Defenses against certain types of damage or effects are called immunities or resistances, while vulnerabilities are called weaknesses. Apply immunities first, then weaknesses, and resistances third. See [Immunity, Weakness, and Resistance](content:playing-the-game/immunity-weakness-and-resistance).',
    },
  }
)

export const Step4ReduceHitPointsSection = Content.defineSection('playing-the-game/step-4-reduce-hit-points', {
  parent: DamageRollsSection,
  content: {
    name: 'Step 4: Reduce Hit Points',
    description:
      'Any remaining damage reduces the target’s [Hit Points](characteristic:hit-points) on a 1-to-1 basis. More information can be found in the [Hit Points, Healing, and Dying](content:playing-the-game/hit-points-healing-and-dying) section.',
  },
})

export const NonlethalAttacksSection = Content.defineSection('playing-the-game/nonlethal-attacks', {
  parent: Step4ReduceHitPointsSection,
  content: {
    name: 'Nonlethal Attacks',
    description:
      'You can make a nonlethal attack to knock someone out instead of killing them (see [Knocked Out](content:playing-the-game/getting-knocked-out) and [Dying](content:playing-the-game/dying)). Weapons with the [nonlethal](content:traits/nonlethal) trait (including fists) do this automatically. You take a –2 circumstance penalty to the attack roll when you make a nonlethal attack using a weapon or unarmed attack that doesn’t have the nonlethal trait. You also take this penalty when making a lethal attack using a nonlethal weapon. Spells and other effects with the nonlethal trait that reduce a creature to 0 [Hit Points](characteristic:hit-points) knock the creature out instead of killing them.',
  },
})

export const ImmunityWeaknessAndResistanceSection = Content.defineSection('playing-the-game/immunity-weakness-and-resistance', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Immunity, Weakness, and Resistance',
    description: 'Damage and effects can be negated, deal less damage, or deal more damage due to the recipient’s immunity, weakness, or resistance.',
  },
})

export const ImmunitySection = Content.defineSection('playing-the-game/immunity', {
  parent: ImmunityWeaknessAndResistanceSection,
  content: {
    name: 'Immunity',
    description:
      "When you have immunity to a specific type of damage, you ignore all damage of that type. If you have immunity to a specific condition or type of effect, you can't be affected by that condition or any effect of that type. You can still be targeted by an ability that includes an effect or condition you are immune to; you just don't apply that particular effect or condition.\n\nIf you have immunity to effects with a certain trait (such as [death](content:traits/death) effects, [poison](content:traits/poison), or [disease](content:traits/disease)), you are unaffected by effects with that trait. An immunity might match both a trait and a damage type (such as [electricity](content:traits/electricity)). The immunity applies to effects with the trait as well as damage of that type. Some complex effects might have parts that affect you even if you're immune to one of the effect's traits; for instance, a creature immune to death effects wouldn't ignore the poison damage or [concealed](content:conditions/concealed) condition from a _toxic cloud_ spell.",
  },
})

export const ImmunityToCriticalHitsSection = Content.defineSection('playing-the-game/immunity-to-critical-hits', {
  parent: ImmunitySection,
  content: {
    name: 'Immunity to Critical Hits',
    description:
      'Immunity to critical hits works a little differently. When a creature immune to critical hits is critically hit by a [Strike](content:playing-the-game/strike) or other attack that deals damage, it takes normal damage instead of double damage. This does not make it immune to any other critical success effects of the actions, such as a critical specialization effect or the extra damage of the [deadly](content:traits/deadly) trait. However, in some cases the GM might determine the added effects don’t apply.',
  },
})

export const ImmunityToNonlethalSection = Content.defineSection('playing-the-game/immunity-to-nonlethal', {
  parent: ImmunitySection,
  content: {
    name: 'Immunity to Nonlethal',
    description:
      'Another exception is immunity to the [nonlethal](content:traits/nonlethal) trait. If you’re immune to nonlethal, you’re immune to all damage from attacks and effects with the nonlethal trait, no matter what other type the damage has. For instance, a typical [construct](content:traits/construct) has immunity to nonlethal attacks. No matter how hard you hit it with your fist, you’re not going to damage it. However, you can take a penalty to remove the nonlethal trait from your fist, and some abilities give you unarmed attacks without the nonlethal trait.',
  },
})

export const TemporaryImmunitySection = Content.defineSection('playing-the-game/temporary-immunity', {
  parent: ImmunitySection,
  content: {
    name: 'Temporary Immunity',
    description:
      "Some effects grant you immunity to the same effect for a set amount of time. If an effect grants you temporary immunity, repeated applications of that effect don't affect you for as long as the temporary immunity lasts. Unless the effect says it applies only to a certain creature's ability, it doesn't matter who created the effect. For example, the [_blindness_](ability:spell/blindness) spell says, “The target is temporarily immune to blindness for 1 minute.” If anyone casts blindness on that creature again before 1 minute passes, the spell has no effect.\n\nTemporary immunity doesn't prevent or end ongoing effects of the source of the temporary immunity. For instance, if an ability makes you [frightened](content:conditions/frightened) and you then gain temporary immunity to the ability, you don't immediately lose the frightened condition due to the immunity you just gained—you simply don't become frightened if you're targeted by the ability again before the immunity ends.",
  },
})

export const WeaknessSection = Content.defineSection('playing-the-game/weakness', {
  parent: ImmunityWeaknessAndResistanceSection,
  content: {
    name: 'Weakness',
    description:
      "If you have a weakness to a certain type of damage, that type of damage is extra effective against you. Whenever you would take that type of damage, increase the amount of damage by the value of the weakness. For instance, if you are dealt 2d6 fire damage and have weakness 5 to fire, you take 2d6+5 fire damage.\n\nA single effect can activate more than one weakness at a time, but adds each of the subject's weaknesses only once. For example, if you made a [Strike](content:playing-the-game/strike) with a _flaming cold iron battle axe_ benefiting from a spell that gives it additional fire damage, and you targeted a creature with weakness to cold iron, fire, and slashing, the Strike would benefit from all three weaknesses but wouldn't apply the fire weakness twice.\n\nSome weaknesses can apply when a creature wouldn't normally take damage, as determined by the GM. In such cases, you take damage equal to the weakness value when touched or affected by something with that characteristic. For example, a creature with weakness to water would take extra damage if it were targeted by a spell with the [water](content:traits/water) trait or splashed with water.",
  },
})

export const ResistanceSection = Content.defineSection('playing-the-game/resistance', {
  parent: ImmunityWeaknessAndResistanceSection,
  content: {
    name: 'Resistance',
    description:
      "After any weaknesses, apply resistances. If you have resistance to a type of damage, each time you would take damage of that type, reduce the amount of damage by the listed number (to a minimum of 0 damage).\n\nResistance can specify combinations of damage types and other characteristics. For instance, you might encounter a monster resistant to non-magical bludgeoning damage, meaning it would take less damage from bludgeoning attacks that aren't magical, but would take normal damage from a _+1 mace_ (since it's magical) or a non-magical spear (since it deals piercing damage). A resistance also might have an exception. Resistance 10 to physical damage (except silver) would reduce any physical damage by 10 unless that damage was dealt by a silver weapon. A damage source can be changed by both a resistance and a weakness. For instance, a cold iron battle axe's damage could both increase due to cold iron weakness and decrease due to resistance to slashing damage.\n\nA single effect can activate more than one resistance at a time, but subtracts each of the subject's resistances only once. If the subject has more than one resistance to the same damage type, they apply only one, usually the highest. For a resistance to a category including multiple damage types, like resistance to physical damage, to spells, or to all damage, if the subject is taking damage of multiple types included in the category, the subject can choose which damage type to use the resistance against.",
  },
})

export const HitPointsHealingAndDyingSection = Content.defineSection('playing-the-game/hit-points-healing-and-dying', {
  parent: PlayingTheGameSection,
  content: { name: 'Hit Points, Healing, and Dying', description: 'For adventurers, injury and death lurk around every corner.' },
})

export const HitPointsSection = Content.defineSection('playing-the-game/hit-points', {
  parent: HitPointsHealingAndDyingSection,
  content: {
    name: 'Hit Points',
    description:
      "All creatures and objects have **Hit Points (HP)**. Your maximum Hit Point value represents your health, wherewithal, and heroic drive when you're in good health and rested. Your maximum [Hit Points](characteristic:hit-points) include the Hit Points you gain at 1st level from your ancestry and class, those you gain at higher levels from your class, and any you gain from other sources (like the [Toughness](trait:feat/toughness) general feat). When you take damage, you reduce your current Hit Points by a number equal to the damage dealt.\n\nSome spells, items, and other effects, as well as simply resting, can heal creatures. When you're healed, you regain Hit Points equal to the amount healed, up to your maximum Hit Points.",
  },
})

export const TemporaryHitPointsSection = Content.defineSection('playing-the-game/temporary-hit-points', {
  parent: HitPointsSection,
  content: {
    name: 'Temporary Hit Points',
    description:
      'Some spells or abilities give you temporary [Hit Points](characteristic:hit-points). Track these separately from your current and maximum Hit Points; when you take damage, reduce your temporary Hit Points first. Most temporary Hit Points last for a limited duration. You can’t regain lost temporary Hit Points through healing, but you can gain more via other abilities. You can have temporary Hit Points from only one source at a time. If you gain temporary Hit Points when you already have some, choose whether to keep the amount you already have and their corresponding duration or to gain the new temporary Hit Points and their duration.',
  },
})

export const FastHealingAndRegenerationSection = Content.defineSection('playing-the-game/fast-healing-and-regeneration', {
  parent: HitPointsSection,
  content: {
    name: 'Fast Healing and Regeneration',
    description:
      'A creature with fast healing or regeneration regains the listed amount of [Hit Points](characteristic:hit-points) each round at the beginning of its turn. A creature with regeneration has additional benefits. Its [dying](content:conditions/dying) condition can’t increase to a value that would kill it (this stops most creatures from going beyond dying 3) as long as its regeneration is active. If it takes damage of a type listed in the regeneration entry, its regeneration deactivates until the end of its next turn.',
  },
})

export const ItemsAndHitPointsSection = Content.defineSection('playing-the-game/items-and-hit-points', {
  parent: HitPointsSection,
  content: {
    name: 'Items and Hit Points',
    description:
      'Items have [Hit Points](characteristic:hit-points) like creatures, but the rules for damaging them are different, as explained [here](content:equipment/item-damage). An item has a Hardness statistic that reduces damage the item takes by that amount. The item then takes any damage left over. If an item is reduced to 0 HP, it’s destroyed. An item also has a Broken Threshold. If its HP are reduced to this amount or lower, it’s [broken](content:conditions/broken), meaning it can’t be used for its normal function and it doesn’t grant bonuses. You usually can’t attack an attended object (one on a creature’s person).',
  },
})

export const HitPointsHitPointsSection = Content.linkEntity(HitPointsSection, Characteristic.HitPoints)

export const GettingKnockedOutSection = Content.defineSection('playing-the-game/getting-knocked-out', {
  parent: HitPointsHealingAndDyingSection,
  content: {
    name: 'Getting Knocked Out',
    description:
      "Creatures can't be reduced to fewer than 0 [Hit Points](characteristic:hit-points). When most creatures reach 0 Hit Points, they die and are removed from play unless the attack was [nonlethal](content:traits/nonlethal), in which case they're instead knocked out for a significant amount of time (usually 10 minutes or more). When [undead](content:traits/undead) and [constructs](content:traits/construct) reach 0 Hit Points, they're destroyed.\n\nPlayer characters, their companions, and other significant characters and creatures don't automatically die when they reach 0 Hit Points. Instead, they are knocked out and are at risk of death. The GM might determine that villains, powerful monsters, special NPCs, and enemies with special abilities that are likely to bring them back to the fight (like ferocity, regeneration, or healing magic) can use these rules as well.\n\nAs a player character, when you're reduced to 0 Hit Points, you're knocked out with the following effects:\n\n- **Move your initiative position** to directly before the turn in which you were reduced to 0 HP.\n\n- **Gain the [dying](content:conditions/dying) 1 condition**. If the effect that knocked you out was a critical success from the attacker or the result of your critical failure, you gain the dying 2 condition instead. If you have the [wounded](content:conditions/wounded) condition, increase your dying value by an amount equal to your wounded value. If the damage was dealt by a nonlethal attack or nonlethal effect, you don't gain the dying condition; you're instead [unconscious](content:conditions/unconscious) with 0 Hit Points.",
  },
})

export const DyingSection = Content.defineSection('playing-the-game/dying', {
  parent: HitPointsHealingAndDyingSection,
  content: {
    name: 'Dying',
    description:
      "While you have the [dying](content:conditions/dying) condition, you’re bleeding out or otherwise at death’s door. You’re [unconscious](content:conditions/unconscious) while you have the dying condition. Dying always includes a value. If this value ever reaches dying 4, you die. While you’re dying, your dying value can increase or decrease in two ways.\n\n**Conditions Related to Dying**\n\nThe effects of the dying condition are described under the Dying header on page 411, but you might also need to reference the unconscious, [wounded](content:conditions/wounded), and [doomed](content:conditions/doomed) conditions.\n\n**Unconscious**\n\nYou're sleeping, or you've been knocked out. You can't act. You take a –4 status penalty to [AC](characteristic:armor-class), [Perception](characteristic:perception), and [Reflex](characteristic:reflex) saves, and you have the [blinded](content:conditions/blinded) and [off-guard](content:conditions/off-guard) conditions. When you gain this condition, you fall [prone](content:conditions/prone) and drop items you're wielding or holding unless the effect states otherwise or the GM determines you're in a position in which you wouldn't.\n\n**If you're unconscious because you're dying**, you can't wake up as long as you have 0 [Hit Points](characteristic:hit-points). If you're restored to 1 Hit Point or more via healing, you lose the dying and unconscious conditions and can act normally on your next turn.\n\n**If you are unconscious and at 0 Hit Points, but not dying**, you naturally return to 1 Hit Point and awaken after sufficient time passes. The GM determines how long you remain unconscious, from a minimum of 10 minutes to several hours. If you receive healing during this time, you lose the unconscious condition and can act normally on your next turn.\n\n**If you're unconscious and have more than 1 Hit Point** (typically because you're asleep or unconscious due to an effect), you wake up in one of the following ways. Each causes you to lose the unconscious condition.\n\n- You take damage, provided the damage doesn't reduce you to 0 Hit Points. (If the damage reduces you to 0 Hit Points, you remain unconscious and gain the dying condition as normal.)\n\n- You receive healing other than the natural healing you get from resting.\n\n- Someone shakes you awake using an [Interact](content:playing-the-game/interact) action.\n\n- Loud noise is being made around you—though this isn't automatic. At the start of your turn, you automatically attempt a Perception check against the noise's DC (or the lowest DC if there's more than one noise), waking up if you succeed. This is often DC 5 for a battle, but if creatures are attempting to stay quiet around you, this Perception check uses their [Stealth](characteristic:skill/stealth) DC. Some magical effects make you sleep so deeply that they don't allow you to attempt this Perception check.\n\n- If you're simply asleep, the GM decides you wake up either because you've had a restful night's sleep or something disrupted that rest.\n\n**Wounded**\n\nYou've been seriously injured during a fight. Anytime you lose the dying condition, you become wounded 1 if you didn't already have the wounded condition. If you already have the wounded condition, your wounded condition value instead increases by 1. If you gain the dying condition while wounded, increase the dying condition's value by your wounded value. The wounded condition ends if someone successfully restores Hit Points to you with [Treat Wounds](content:skills/treat-wounds), or if you're restored to full Hit Points and rest for 10 minutes.\n\n**Doomed**\n\nYour life is ebbing away, bringing you ever closer to death. Some powerful spells and evil creatures can inflict the doomed condition on you. Doomed always includes a value. The maximum dying value at which you die is reduced by your doomed value. For example, if you were doomed 1, you would die upon reaching dying 3 instead of dying 4. If your maximum dying value is ever reduced to 0, you instantly die. When you die, you're no longer doomed.\n\nYour doomed value decreases by 1 each time you get a full night's rest.\n\n**Heroic Recovery**\n\nIf you have at least 1 Hero Point (page 413), you can spend all of your remaining Hero Points at the start of your turn or when your dying value would increase. You lose the dying condition entirely and stabilize with 0 Hit Points. You don’t gain the wounded condition or increase its value from losing the dying condition in this way, but if you already had that condition, you don’t lose it or decrease its value.",
  },
})

export const RecoveryChecksSection = Content.defineSection('playing-the-game/recovery-checks', {
  parent: DyingSection,
  content: {
    name: 'Recovery Checks',
    description:
      "While you're [dying](content:conditions/dying), attempt a recovery check at the start of each of your turns. This is a [flat check](content:playing-the-game/checks) with a DC equal to 10 + your current dying value to see if you get better or worse.\n\n**Critical Success** Your dying value is reduced by 2.\n**Success** Your dying value is reduced by 1.\n**Failure** Your dying value increases by 1.\n**Critical Failure** Your dying value increases by 2.",
  },
})

export const TakingDamageSection = Content.defineSection('playing-the-game/taking-damage', {
  parent: DyingSection,
  content: {
    name: 'Taking Damage',
    description:
      'If you take damage while you already have the [dying](content:conditions/dying) condition, increase your dying condition value by 1, or by 2 if the damage came from an attacker’s critical hit or your own critical failure.',
  },
})

export const LosingTheDyingConditionSection = Content.defineSection('playing-the-game/losing-the-dying-condition', {
  parent: DyingSection,
  content: {
    name: 'Losing the Dying Condition',
    description:
      "You lose the [dying](content:conditions/dying) condition if it ever reaches dying 0. If you're still at 0 [Hit Points](characteristic:hit-points), you remain [unconscious](content:conditions/unconscious), but you can wake up as described in that condition. You lose the dying condition automatically and wake up if you ever have 1 Hit Point or more.\n\nAnytime you lose the dying condition, you gain the [wounded](content:conditions/wounded) 1 condition, or increase your wounded value by 1 if you already have that condition.",
  },
})

export const DeathSection = Content.defineSection('playing-the-game/death', {
  parent: HitPointsHealingAndDyingSection,
  content: {
    name: 'Death',
    description:
      'After you die, you can’t act or regain actions, can’t be affected by spells that target creatures (unless they specifically target dead creatures), and for all other purposes, you’re an object. When you die, you’re reduced to 0 [Hit Points](characteristic:hit-points) if you had a different amount, and you can’t be brought above 0 Hit Points as long as you remain dead. Some magic can bring creatures back to life, such as the _resurrect_ ritual or the _raise dead_ spell, though these abilities aren’t without their risks or effects, and rare artifacts and powers can even interfere with them.',
  },
})

export const InstantDeathSection = Content.defineSection('playing-the-game/instant-death', {
  parent: HitPointsHealingAndDyingSection,
  content: {
    name: 'Instant Death',
    description: 'There are ways in which you can die instantly, without reaching [dying](content:conditions/dying) 0 first.',
  },
})

export const DeathEffectsSection = Content.defineSection('playing-the-game/death-effects', {
  parent: InstantDeathSection,
  content: {
    name: 'Death Effects',
    description:
      "Some spells and abilities can kill you immediately or bring you closer to death without needing to reduce you to 0 [Hit Points](characteristic:hit-points) first. These abilities have the [death](content:traits/death) trait and usually involve energy from the Void, the antithesis of life, or other effects that target the mind or soul. If you're reduced to 0 Hit Points by a death effect, you're slain instantly without needing to reach [dying](content:conditions/dying) 4. For instance, the _vision of death_ spell automatically kills those it reduces to 0 Hit Points as terrifying hallucinations cause them to drop dead.\n\nA death effect might state that it kills you outright, without dealing damage, in which case you die without having to first reach dying 4 or be reduced to 0 Hit Points. For instance, the Grim Reaper, an extremely powerful entity of death, can automatically slay creatures who fail their save against its death strike ability.",
  },
})

export const MassiveDamageSection = Content.defineSection('playing-the-game/massive-damage', {
  parent: InstantDeathSection,
  content: {
    name: 'Massive Damage',
    description:
      'You die instantly if you ever take damage equal to or greater than double your maximum [Hit Points](characteristic:hit-points) in one blow.',
  },
})

export const HeroPointsSection = Content.defineSection('playing-the-game/hero-points', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Hero Points',
    description:
      "Your heroic deeds earn you Hero Points, which grant you good fortune or let you recover from the brink of death. Unlike most aspects of your character, which persist over the long term, Hero Points last for only a single session.\n\nThe GM is in charge of awarding Hero Points. Usually, each character gets 1 Hero Point at the start of a session and can gain more later by performing heroic deeds—something selfless, daring, or beyond normal expectations. You can have a maximum of 3 Hero Points at a time, and you lose any remaining Hero Points at the end of a session.\n\nYou can spend your Hero Points in one of two ways. Neither of these is an action, and you can spend Hero Points even if you aren't able to act. You can spend a Hero Point on behalf of your familiar or animal companion.\n\n- **Spend 1 Hero Point to reroll a check**. You must use the second result. This is a fortune effect (which means you can't use more than 1 Hero Point on a check).\n\n- **Spend all your Hero Points (minimum 1) to avoid death**. You can do this when your [dying](content:conditions/dying) condition would increase. You lose the dying condition entirely and stabilize with 0 [Hit Points](characteristic:hit-points). You don't gain the [wounded](content:conditions/wounded) condition or increase its value from losing the dying condition in this way, but if you already had that condition, you don't lose it or decrease its value.",
  },
})

export const DescribingHeroicDeedsSection = Content.defineSection('playing-the-game/describing-heroic-deeds', {
  parent: HeroPointsSection,
  content: {
    name: 'Describing Heroic Deeds',
    description:
      "Because spending Hero Points reflects heroic deeds or tasks that surpass normal expectations, if you spend a Hero Point, you should describe the deed or task your character accomplishes with it to the other players.\n\nYour character's deed might invoke a lesson learned in a past adventure, could be spurred by a determination to save someone else, or might depend on an item that ended up on their person due to a previous exploit. If you don't want to describe the deed or don't have any strong ideas about how to do so, ask the GM to come up with something for you. This can be a collaborative process, too. The GM might remind you of a long-forgotten event in the campaign, and all you have to do is fill in how that event comes to mind just at the right time, motivating you to push past your limits.",
  },
})

export const PlayingTheGameActionsSection = Content.defineSection('playing-the-game/playing-the-game/actions', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Actions',
    description:
      "You affect the world around you primarily by using actions, which produce effects. Actions are most closely measured and restricted during the encounter mode of play, but even when it isn't important for you to keep strict track of actions, they remain the way in which you interact with the game world.\n\nYou will need to track your actions carefully in an encounter. At the start of each turn you take in an encounter, you regain 3 actions and 1 reaction to spend that round. (Regaining your actions is described in detail [here](content:playing-the-game/turns).) You can spend your actions in many different ways.\n\nThere are four types of actions: single actions, activities, reactions, and free actions.\n\n**Single actions** can be completed in a very short time. They're self-contained, and their effects are generated within the span of that single action.\n\n**Activities** usually take longer and require using multiple actions, which must be spent in succession. Stride is a single action, but Sudden Charge is an activity in which you use both the Stride and Strike actions to generate its effect.\n\n**Reactions** have triggers, which must be met for you to use the reaction. You can use a reaction anytime its trigger is met, whether it's your turn or not. Outside of encounters, your use of reactions is more flexible and up to the GM. Reactions are usually triggered by other creatures or by events outside your control.\n\n**Free actions** don't cost you any of your actions per turn, nor do they cost your reaction. A free action with no trigger follows the same rules as a single action (except the action cost). It must be used on your turn and can't be used during another action. A free action with a trigger follows the same rules as a reaction (except the reaction cost). It can be used any time its trigger is met.\n\n**Action Icon Key**\n\nThese icons appear in stat blocks as shorthand for each type of action. As a player, you'll usually see the icon in an action's header (such as in a basic action, skill action, feat, or spell). In a creature stat block, or a feat that gives you a new action in addition to other benefits, the icon will appear in the running text. For examples, see the [formatting of rules](content:introduction/format-of-rules). ◆ Single Action ◆◆ Two-Action Activity ◆◆◆ Three-Action Activity ⟲ Reaction ◇ Free Action\n\n**In-Depth Action Rules**\n\nThese rules clarify some of the specifics of using actions.\n\n**Simultaneous Actions**\n\nYou can use only one single action, activity, or free action that doesn't have a trigger at a time. You must complete one before beginning another. For example, the [Sudden Charge](trait:feat/sudden-charge) activity states you must [Stride](content:playing-the-game/stride) twice and then [Strike](content:playing-the-game/strike), so you couldn't use an [Interact](content:playing-the-game/interact) action to open a door in the middle of the movement, nor could you perform part of the move, make your attack, and then finish the move.\n\nFree actions with triggers and reactions work differently. You can use these whenever the trigger occurs, even if the trigger occurs in the middle of another action.\n\n**Subordinate Actions**\n\nAn action might allow you to use a simpler action—usually one of the [Basic Actions](content:playing-the-game/basic-actions)—in a different circumstance or with different effects. This subordinate action still has its normal traits and effects, but it's modified in any ways listed in the larger action. For example, an activity that tells you to Stride up to half your [Speed](characteristic:speed) alters the normal distance you can move in a Stride. The Stride would still have the [move](content:traits/move) trait, would still trigger reactions that occur based on movement, and so on. The subordinate action doesn't gain any of the traits of the larger action unless specified. The action that allows you to use a subordinate action doesn't require you to spend more actions or reactions to do so; that cost is already factored in.\n\nUsing an activity is not the same as using any of its subordinate actions. For example, the [quickened](content:conditions/quickened) condition you get from the [_haste_](ability:spell/haste) spell lets you spend an extra action each turn to Stride or Strike, but you couldn't use the extra action for an activity that includes a Stride or Strike. As another example, if you used an action that specified, “If the next action you use is a Strike,” an activity that includes a Strike wouldn't count, because the next thing you are doing is starting an activity, not using the Strike basic action",
  },
})

export const ActivitiesSection = Content.defineSection('playing-the-game/activities', {
  parent: PlayingTheGameActionsSection,
  content: {
    name: 'Activities',
    description:
      "An activity typically involves using multiple actions to create an effect greater than you can produce with a single action, or combining multiple single actions to produce an effect that's different from merely the sum of those actions. In some cases, usually when spellcasting, an activity can consist of only 1 action, 1 reaction, or even 1 free action.\n\nAn activity might cause you to use specific actions within it. You don't have to spend additional actions to perform them—they're already factored into the activity's required actions. (See [Subordinate Actions](content:playing-the-game/playing-the-game/actions).)\n\nYou have to spend all the actions of an activity at once to gain its effects. In an encounter, this means you must complete it during your turn. If an activity gets [interrupted or disrupted](content:playing-the-game/disrupting-actions) in an encounter, you lose all the actions you committed to it.",
  },
})

export const ExplorationAndDowntimeActivitiesSection = Content.defineSection('playing-the-game/exploration-and-downtime-activities', {
  parent: ActivitiesSection,
  content: {
    name: 'Exploration and Downtime Activities',
    description:
      "Outside of encounters, activities can take minutes, hours, or even days. These activities usually have the exploration or downtime trait to indicate they're meant to be used during these modes of play. You can often do other things off and on as you carry out these activities, provided they aren't significant activities of their own. For instance, if you're [Repairing](content:skills/repair) an item, you might stretch your legs or have a brief discussion, but you couldn't [Decipher Writing](content:skills/decipher-writing) at the same time.\n\nIf an activity outside of an encounter is interrupted or disrupted, as described in [Disrupting Actions](content:playing-the-game/disrupting-actions), you usually lose the time you put in, but no additional time.",
  },
})

export const ActionsWithTriggersSection = Content.defineSection('playing-the-game/actions-with-triggers', {
  parent: PlayingTheGameActionsSection,
  content: {
    name: 'Actions with Triggers',
    description:
      "You can use free actions that have triggers and reactions only in response to certain events. Each such reaction and free action lists the trigger that must happen for you to perform it. When its trigger is satisfied—and only when it is satisfied—you can use the reaction or free action, though you don't have to use the action if you don't want to.\n\nThere are only a few basic reactions and free actions that all characters can use. You’re more likely to gain actions with triggers from your class, feats, and magic items.",
  },
})

export const LimitationsOnTriggersSection = Content.defineSection('playing-the-game/limitations-on-triggers', {
  parent: ActionsWithTriggersSection,
  content: {
    name: 'Limitations on Triggers',
    description:
      "The triggers listed in the stat blocks of reactions and some free actions limit when you can use those actions. You can use only one action in response to a given trigger. For example, if you had a reaction and a free action that both had a trigger of “your turn begins,” you could use either of them at the start of your turn—but not both. If two triggers are similar, but not identical, the GM determines whether you can use one action in response to each or whether they're effectively the same thing. Usually, this decision will be based on what's happening in the narrative.\n\nThis limitation of one action per trigger is per creature; more than one creature can use a reaction or free action in response to a given trigger. If multiple actions would be occurring at the same time, and it's unclear in what order they happen, the GM determines the order based on the narrative.",
  },
})

export const OtherActionsSection = Content.defineSection('playing-the-game/other-actions', {
  parent: PlayingTheGameActionsSection,
  content: {
    name: 'Other Actions',
    description:
      'Sometimes you need to attempt something not already covered by defined actions in the game. When this happens, the rules tell you how many actions you need to spend, as well as any traits your action might have. For example, a spell that lets you switch targets might say you can do so “by spending a single action, which has the [concentrate](content:traits/concentrate) trait.” Game Masters can also use this approach when a character tries to do something that isn’t covered in the rules.',
  },
})

export const GainingAndLosingActionsSection = Content.defineSection('playing-the-game/gaining-and-losing-actions', {
  parent: PlayingTheGameActionsSection,
  content: {
    name: 'Gaining and Losing Actions',
    description:
      "Effects can change the number of actions you can use on your turn, or whether you can use actions at all. The [slowed](content:conditions/slowed) condition, for example, causes you to lose actions, while the [quickened](content:conditions/quickened) condition causes you to gain them. Conditions are detailed in the [conditions appendix here.](content:conditions) Whenever you lose a number of actions—whether from these conditions or in any other way—you choose which to lose if there's any difference between them. For instance, the [_haste_](ability:spell/haste) spell makes you quickened, but it limits what you can use your extra action to do. If you lost an action while _haste_ was active, you might want to lose the action from haste first, since it's more limited than your normal actions.\n\nSome effects are even more restrictive. Certain abilities, instead of or in addition to changing the number of actions you can use, say specifically that you can't use reactions. The most restrictive form of reducing actions is when an effect states that you can't act: this means you can't use any actions, or even speak. When you can't act, you still regain your actions unless another effect (like the [stunned](content:conditions/stunned) condition) prevents it.",
  },
})

export const DisruptingActionsSection = Content.defineSection('playing-the-game/disrupting-actions', {
  parent: PlayingTheGameActionsSection,
  content: {
    name: 'Disrupting Actions',
    description:
      "Various abilities and conditions, such as a [Reactive Strike](content:playing-the-game/reactive-strike), can disrupt an action. When an action is disrupted, you still use the actions or reactions you committed and you still expend any costs, but the action's effects don't occur. In the case of an activity, you usually lose all actions spent for the activity up through the end of that turn. For instance, if you began to [Cast a Spell](content:spells/cast-a-spell) requiring 3 actions and the first action was disrupted, you lose all 3 actions that you committed to that activity.\n\nThe GM decides what effects a disruption causes beyond simply negating the effects that would have occurred from the disrupted action. For instance, a [Leap](content:playing-the-game/leap) disrupted midway wouldn't transport you back to the start of your jump, and a disrupted item hand off might cause the item to fall to the ground instead of staying in the hand of the creature who was trying to give it away.",
  },
})

export const BasicActionsSection = Content.defineSection('playing-the-game/basic-actions', {
  parent: PlayingTheGameActionsSection,
  content: {
    name: 'Basic Actions',
    description:
      "Basic actions represent common tasks like moving around, attacking, and helping others. As such, every creature can use basic actions except in some extreme circumstances, and many of those actions are used very frequently. Most notably, you'll use [Interact](content:playing-the-game/interact), [Step](content:playing-the-game/step), [Stride](content:playing-the-game/stride), and [Strike](content:playing-the-game/strike) a great deal. Many feats and other actions call upon you to use one of these basic actions or modify them to produce different effects. For example, a more complex action might let you Stride twice, and a large number of activities include a Strike. An action or activity might also modify a basic action, such as having you Stride up to half your [Speed](characteristic:speed).\n\nActions that are used less frequently but are still available to most creatures are presented in [Specialty Basic Actions](content:playing-the-game/specialty-basic-actions). These typically have requirements that not all characters are likely to meet, such as wielding a shield, having a burrow Speed, or falling through the air.\n\nIn addition to the actions in these two sections, the actions for spellcasting can be found [here](content:spells/casting-spells), and the actions for using magic items appear here.\n\n**Delay and Ready:** If you want to change when you take actions, two basic actions let you do so. [Delay](content:playing-the-game/delay) shifts your entire turn later in the round, and [Ready](content:playing-the-game/ready) lets you prepare to take one specific action when a trigger you choose is met.\n\n**Speaking**\n\nAs long as you can act, you can also speak. You don't need to spend any type of action to speak, but because a round represents 6 seconds of time, you can usually speak at most a single sentence or so per round. Special uses of speech, such as attempting a [Deception](characteristic:skill/deception) skill check to Lie, require spending actions and follow their own rules. All speech has the auditory trait. If you communicate in some way other than speech, other rules might apply. For instance, using sign language is visual instead of auditory.",
  },
})

export const AidSection = Content.defineSection('playing-the-game/aid', {
  parent: BasicActionsSection,
  content: {
    name: 'Aid',
    description:
      "⟲\n\n**Trigger** An ally is about to use an action that requires a skill check or attack roll.\n\n**Requirements** The ally is willing to accept your aid, and you have prepared to help (see below).\n\nYou try to help your ally with a task. To use this reaction, you must first prepare to help, usually by using an action during your turn. You must explain to the GM exactly how you're trying to help, and they determine whether you can Aid your ally.\n\nWhen you use your Aid reaction, attempt a skill check or attack roll of a type decided by the GM. The typical DC is 15, but the GM might adjust this DC for particularly hard or easy tasks. The GM can add any relevant traits to your preparatory action or to your Aid reaction depending on the situation, or even allow you to Aid checks other than skill checks and attack rolls.\n\n**Critical Success** You grant your ally a +2 circumstance bonus to the triggering check. If you're a master with the check you attempted, the bonus is +3, and if you're legendary, it's +4.\n\n**Success** You grant your ally a +1 circumstance bonus to the triggering check.\n\n**Critical Failure** Your ally takes a –1 circumstance penalty to the triggering check.",
  },
})

export const CrawlSection = Content.defineSection('playing-the-game/crawl', {
  parent: BasicActionsSection,
  content: {
    name: 'Crawl',
    description:
      '◆ *[Move](content:traits/move)*\n\n**Requirements** You are [prone](content:conditions/prone) and your [Speed](characteristic:speed) is at least 10 feet.\n\nYou move 5 feet by crawling and continue to stay prone.',
  },
})

export const DelaySection = Content.defineSection('playing-the-game/delay', {
  parent: BasicActionsSection,
  content: {
    name: 'Delay',
    description:
      "◇\n\n**Trigger** Your turn begins.\n\nYou wait for the right moment to act. The rest of your turn doesn't happen yet. Instead, you're removed from the initiative order. You can return to the initiative order as a free action triggered by the end of any other creature's turn. This permanently changes your initiative to the new position. You can't use reactions until you return to the initiative order. If you Delay an entire round without returning to the initiative order, the actions from the Delayed turn are lost, your initiative doesn't change, and your next turn occurs at your original position in the initiative order.\n\nWhen you Delay, any [persistent damage](content:conditions/persistent-damage) or other negative effects that normally occur at the start or end of your turn occur immediately when you use the Delay action. Any beneficial effects that would end at any point during your turn also end. The GM might determine that other effects end when you Delay as well. Essentially, you can't Delay to avoid negative consequences that would happen on your turn or to extend beneficial effects that would end on your turn.",
  },
})

export const DropProneSection = Content.defineSection('playing-the-game/drop-prone', {
  parent: BasicActionsSection,
  content: { name: 'Drop Prone', description: '◆ *[Move](content:traits/move)*\n\nYou fall [prone](content:conditions/prone).' },
})

export const EscapeSection = Content.defineSection('playing-the-game/escape', {
  parent: BasicActionsSection,
  content: {
    name: 'Escape',
    description:
      "◆ *[Attack](content:traits/attack)*\n\nYou attempt to escape from being [grabbed](content:conditions/grabbed), [immobilized](content:conditions/immobilized), or [restrained](content:conditions/restrained). Choose one creature, object, spell effect, hazard, or other impediment imposing any of those conditions on you. Attempt a check using your unarmed attack modifier against the DC of the effect. This is typically the [Athletics](characteristic:skill/athletics) DC of a creature grabbing you, the [Thievery](characteristic:skill/thievery) DC of a creature who tied you up, the [spell DC](characteristic:spell-dc) for a spell effect, or the listed Escape DC of an object, hazard, or other impediment. You can attempt an [Acrobatics](characteristic:skill/acrobatics) or [Athletics](characteristic:skill/athletics) check instead of using your attack modifier if you choose (but this action still has the [attack](content:traits/attack) trait).\n\n**Critical Success** You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target. You can then [Stride](content:playing-the-game/stride) up to 5 feet.\n\n**Success** You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target.\n\n**Critical Failure** You don't get free, and you can't attempt to Escape again until your next turn.",
  },
})

export const InteractSection = Content.defineSection('playing-the-game/interact', {
  parent: BasicActionsSection,
  content: {
    name: 'Interact',
    description:
      '◆ *[Manipulate](content:traits/manipulate)*\n\nYou use your hand or hands to manipulate an object or the terrain. You can grab an unattended or stored object, draw a weapon, [swap a held item for another](content:equipment/drawing-and-stowing-items), open a door, or achieve a similar effect. On rare occasions, you might have to attempt a skill check to determine if your Interact action was successful.',
  },
})

export const LeapSection = Content.defineSection('playing-the-game/leap', {
  parent: BasicActionsSection,
  content: {
    name: 'Leap',
    description:
      "◆ *[Move](content:traits/move)*\n\nYou take a short horizontal or vertical jump. Jumping a greater distance requires using the [Athletics](characteristic:skill/athletics) skill for a [High Jump](content:skills/high-jump) or [Long Jump](content:skills/long-jump).\n\n- **Horizontal Jump** up to 10 feet horizontally if your [Speed](characteristic:speed) is at least 15 feet, or up to 15 feet horizontally if your Speed is at least 30 feet. You land in the space where your Leap ends (meaning you can typically clear a 5-foot gap, or a 10-foot gap if your Speed is 30 feet or more). You can't make a horizontal Leap if your Speed is less than 15 feet.\n\n- **Vertical Jump** up to 3 feet vertically and 5 feet horizontally onto an elevated surface.",
  },
})

export const ReadySection = Content.defineSection('playing-the-game/ready', {
  parent: BasicActionsSection,
  content: {
    name: 'Ready',
    description:
      "◆◆ *[Concentrate](content:traits/concentrate)*\n\nYou prepare to use an action that will occur outside your turn. Choose a single action or free action you can use, and designate a trigger. Your turn then ends. If the trigger you designated occurs before the start of your next turn, you can use the chosen action as a reaction (provided you still meet the requirements to use it). You can't Ready a free action that already has a trigger.\n\nIf you have a multiple attack penalty and your readied action is an [attack](content:traits/attack) action, your readied attack takes the multiple attack penalty you had at the time you used Ready. This is one of the few times the multiple attack penalty applies when it's not your turn.",
  },
})

export const ReleaseSection = Content.defineSection('playing-the-game/release', {
  parent: BasicActionsSection,
  content: {
    name: 'Release',
    description:
      "◇ *[Manipulate](content:traits/manipulate)*\n\nYou release something you're holding in your hand or hands. This might mean dropping an item, removing one hand from your weapon while continuing to hold it in another hand, releasing a rope suspending a chandelier, or performing a similar action. Unlike most [manipulate](content:traits/manipulate) actions, Release does not trigger reactions that can be triggered by actions with the manipulate trait (such as [Reactive Strike](content:playing-the-game/reactive-strike)).\n\nIf you want to prepare to Release something outside of your turn, use the [Ready](content:playing-the-game/ready) activity.",
  },
})

export const SeekSection = Content.defineSection('playing-the-game/seek', {
  parent: BasicActionsSection,
  content: {
    name: 'Seek',
    description:
      "◆ *[Concentrate](content:traits/concentrate), [Secret](content:traits/secret)*\n\nYou scan an area for signs of creatures or objects, possibly including secret doors or hazards. Choose an area to scan. The GM determines the area you can scan with one Seek action—almost always 30 feet or less in any dimension. The GM might impose a penalty if you search far away from you or adjust the number of actions it takes to Seek a particularly cluttered area.\n\nThe GM attempts a single [secret](content:traits/secret) [Perception](characteristic:perception) check for you and compares the result to the [Stealth](characteristic:skill/stealth) DCs of any [undetected](content:conditions/undetected) or [hidden](content:conditions/hidden) creatures in the area, or the DC to detect each object in the area (as determined by the GM or by someone [Concealing the Object](content:skills/conceal-an-object)). A creature you detect might remain hidden, rather than becoming [observed](content:conditions/observed), if you're using an [imprecise](content:playing-the-game/imprecise-senses) sense or if an effect (such as [_invisibility_](ability:spell/invisibility)) prevents the subject from being observed.\n\n**Critical Success** Any undetected or hidden creature you critically succeeded against becomes observed by you. You learn the location of objects in the area you critically succeeded against.\n\n**Success** Any undetected creature you succeeded against becomes hidden from you instead of undetected, and any hidden creature you succeeded against becomes observed by you. You learn the location of any object or get a clue to its whereabouts, as determined by the GM.",
  },
})

export const SenseMotiveSection = Content.defineSection('playing-the-game/sense-motive', {
  parent: BasicActionsSection,
  content: {
    name: 'Sense Motive',
    description:
      "◆ *[Concentrate](content:traits/concentrate), [Secret](content:traits/secret)*\n\nYou try to tell whether a creature's behavior is abnormal. Choose one creature and assess it for odd body language, signs of nervousness, and other indicators that it might be trying to deceive someone. The GM attempts a single [secret](content:traits/secret) [Perception](characteristic:perception) check for you and compares the result to the [Deception](characteristic:skill/deception) DC of the creature, the DC of a spell affecting the creature's mental state, or another appropriate DC determined by the GM. You typically can't try to Sense the Motive of the same creature again until the situation changes significantly.\n\n**Critical Success** You determine the creature's true intentions and get a solid idea of any mental magic affecting it.\n\n**Success** You can tell whether the creature is behaving normally, but you don't know its exact intentions or what magic might be affecting it.\n\n**Failure** You detect what a deceptive creature wants you to believe. If they're not being deceptive, you believe they're behaving normally.\n\n**Critical Failure** You get a false sense of the creature's intentions.",
  },
})

export const StandSection = Content.defineSection('playing-the-game/stand', {
  parent: BasicActionsSection,
  content: { name: 'Stand', description: '◆ *[Move](content:traits/move)*\n\nYou stand up from being [prone](content:conditions/prone).' },
})

export const StepSection = Content.defineSection('playing-the-game/step', {
  parent: BasicActionsSection,
  content: {
    name: 'Step',
    description:
      "◆ *[Move](content:traits/move)*\n\n**Requirements** Your [Speed](characteristic:speed) is at least 10 feet.\n\nYou carefully move 5 feet. Unlike most types of movement, Stepping doesn't trigger reactions, such as [Reactive Strike](content:playing-the-game/reactive-strike), that can be triggered by move actions or upon leaving or entering a square.\n\nYou can't Step into [difficult terrain](content:playing-the-game/difficult-terrain), and you can't Step using a Speed other than your land Speed.",
  },
})

export const StrideSection = Content.defineSection('playing-the-game/stride', {
  parent: BasicActionsSection,
  content: { name: 'Stride', description: '◆ *[Move](content:traits/move)*\n\nYou move up to your [Speed](content:playing-the-game/speed).' },
})

export const StrikeSection = Content.defineSection('playing-the-game/strike', {
  parent: BasicActionsSection,
  content: {
    name: 'Strike',
    description:
      "◆ *[Attack](content:traits/attack)*\n\nYou attack with a weapon you're wielding or with an unarmed attack, targeting one creature within your reach (for a melee attack) or within range (for a ranged attack). Roll an attack roll using the attack modifier for the weapon or unarmed attack you're using, and compare the result to the target creature's [AC](characteristic:armor-class) to determine the effect.\n\n**Critical Success** You make a damage roll according to the weapon or unarmed attack and deal double damage (see [Doubling and Halving Damage](content:playing-the-game/doubling-and-halving-damage) for rules on doubling damage).\n\n**Success** You make a damage roll according to the weapon or unarmed attack and deal damage.",
  },
})

export const TakeCoverSection = Content.defineSection('playing-the-game/take-cover', {
  parent: BasicActionsSection,
  content: {
    name: 'Take Cover',
    description:
      "◆\n\n**Requirements** You are benefiting from [standard cover](content:playing-the-game/cover), are near a feature that allows you to take cover, or are [prone](content:conditions/prone).\n\nYou press yourself against a wall or duck behind an obstacle to take better advantage of cover. If you would have standard cover, you instead gain greater cover, which provides a +4 circumstance bonus to [AC](characteristic:armor-class); to [Reflex](characteristic:reflex) saves against area effects; and to [Stealth](characteristic:skill/stealth) checks to [Hide](content:skills/hide), [Sneak](content:skills/sneak), or otherwise avoid detection. Otherwise, you gain standard cover (a +2 circumstance bonus instead). If you're prone, you gain greater cover against ranged attacks. Take Cover lasts until you move from your current space, use an [attack](content:traits/attack) action, become [unconscious](content:conditions/unconscious), or end it as a free action.",
  },
})

export const SpecialtyBasicActionsSection = Content.defineSection('playing-the-game/specialty-basic-actions', {
  parent: PlayingTheGameActionsSection,
  content: {
    name: 'Specialty Basic Actions',
    description:
      'These actions are useful under specific circumstances. The [Arrest a Fall](content:playing-the-game/arrest-a-fall), [Burrow](content:playing-the-game/burrow), and [Fly](content:playing-the-game/fly) actions require you to have a special [movement type](content:playing-the-game/movement-types). The climb and swim Speeds use the corresponding actions from the [Athletics](characteristic:skill/athletics) skill.',
  },
})

export const ArrestAFallSection = Content.defineSection('playing-the-game/arrest-a-fall', {
  parent: SpecialtyBasicActionsSection,
  content: {
    name: 'Arrest a Fall',
    description:
      '⟲\n\n**Trigger** You fall.\n\n**Requirements** You have a fly [Speed](characteristic:speed).\n\nYou attempt your choice of an [Acrobatics](characteristic:skill/acrobatics) check or [Reflex](characteristic:reflex) save to slow your fall. The DC is typically 15, but it might be higher due to air turbulence or other circumstances.\n\n**Success** You take no damage from the fall.',
  },
})

export const AvertGazeSection = Content.defineSection('playing-the-game/avert-gaze', {
  parent: SpecialtyBasicActionsSection,
  content: {
    name: 'Avert Gaze',
    description:
      "◆\n\nYou avert your gaze from danger, such as a medusa's gaze. You gain a +2 circumstance bonus to saves against [visual](content:traits/visual) abilities that require you to look at a creature or object, such as a medusa's petrifying gaze. Your gaze remains averted until the start of your next turn.",
  },
})

export const BurrowSection = Content.defineSection('playing-the-game/burrow', {
  parent: SpecialtyBasicActionsSection,
  content: {
    name: 'Burrow',
    description:
      "◆ *[Move](content:traits/move)*\n\n**Requirements** You have a burrow [Speed](characteristic:speed).\n\nYou dig your way through dirt, sand, or a similar loose material at a rate up to your burrow Speed. You can't burrow through rock or other substances denser than dirt unless you have an ability that allows you to do so.",
  },
})

export const DismissSection = Content.defineSection('playing-the-game/dismiss', {
  parent: SpecialtyBasicActionsSection,
  content: {
    name: 'Dismiss',
    description:
      '◆ *[Concentrate](content:traits/concentrate)*\n\nYou end an effect that states you can Dismiss it. Dismissing ends the entire effect unless noted otherwise.',
  },
})

export const FlySection = Content.defineSection('playing-the-game/fly', {
  parent: SpecialtyBasicActionsSection,
  content: {
    name: 'Fly',
    description:
      "◆ *[Move](content:traits/move)*\n\n**Requirements** You have a fly [Speed](characteristic:speed).\n\nYou move through the air up to your fly Speed. Moving upward (straight up or diagonally) uses the rules for moving through [difficult terrain](content:playing-the-game/difficult-terrain). You can move straight down 10 feet for every 5 feet of movement you spend. If you Fly to the ground, you don't take [falling damage](content:playing-the-game/falling). You can use an action to Fly 0 feet to hover in place. If you're airborne at the end of your turn and didn't use a Fly action this round, you fall.",
  },
})

export const GrabAnEdgeSection = Content.defineSection('playing-the-game/grab-an-edge', {
  parent: SpecialtyBasicActionsSection,
  content: {
    name: 'Grab an Edge',
    description:
      "⟲ *[Manipulate](content:traits/manipulate)*\n\n**Trigger** You fall from or past an edge or handhold.\n\n**Requirements** Your hands are not tied behind your back or otherwise [restrained](content:conditions/restrained)\n\nWhen you fall off or past an edge or other handhold, you can try to grab it, potentially stopping your fall. You must succeed at your choice of an [Acrobatics](characteristic:skill/acrobatics) check or a [Reflex](characteristic:reflex) save, usually at the Climb DC. If you grab the edge or handhold, you can then [Climb](content:skills/climb) up using [Athletics](characteristic:skill/athletics).\n\n**Critical Success** You grab the edge or handhold, whether or not you have a hand free, typically by using a suitable held item to catch yourself (catching a battle axe on a ledge, for example). You still take [damage from the distance fallen](content:playing-the-game/falling) so far, but you treat the fall as though it were 30 feet shorter.\n\n**Success** If you have at least one hand free, you grab the edge or handhold, stopping your fall. You still take damage from the distance fallen so far, but you treat the fall as though it were 20 feet shorter. If you have no hands free, you continue to fall as if you had failed the check.\n\n**Critical Failure** You continue to fall, and if you've fallen 20 feet or more before you use this reaction, you take 10 bludgeoning damage from the impact for every 20 feet fallen.",
  },
})

export const MountSection = Content.defineSection('playing-the-game/mount', {
  parent: SpecialtyBasicActionsSection,
  content: {
    name: 'Mount',
    description:
      "◆ *[Move](content:traits/move)*\n\n**Requirements** You are adjacent to a creature that is at least one size larger than you and is willing to be your mount.\n\nYou move onto the creature and ride it. If you're already mounted, you can instead use this action to dismount, moving off the mount into a space adjacent to it.",
  },
})

export const PointOutSection = Content.defineSection('playing-the-game/point-out', {
  parent: SpecialtyBasicActionsSection,
  content: {
    name: 'Point Out',
    description:
      "◆ *[Auditory](content:traits/auditory), [Manipulate](content:traits/manipulate), [Visual](content:traits/visual)*\n\n**Requirements** A creature is [undetected](content:conditions/undetected) by one or more of your allies but isn't undetected by you.\n\nYou indicate a creature that you can see to one or more allies, gesturing in a direction and describing the distance verbally. That creature is [hidden](content:conditions/hidden) to your allies, rather than undetected. This works only for allies who can see you and are in a position where they could potentially detect the target. If your allies can't hear or understand you, they must succeed at a [Perception](characteristic:perception) check against the creature's [Stealth](characteristic:skill/stealth) DC or they misunderstand and believe the target is in a different location.",
  },
})

export const RaiseAShieldSection = Content.defineSection('playing-the-game/raise-a-shield', {
  parent: SpecialtyBasicActionsSection,
  content: {
    name: 'Raise a Shield',
    description:
      '◆\n\n**Requirements** You are wielding a shield.\n\nYou position your shield to protect yourself. When you have Raised a Shield, you gain its listed circumstance bonus to [AC](characteristic:armor-class). Your shield remains raised until the start of your next turn.',
  },
})

export const SustainSection = Content.defineSection('playing-the-game/sustain', {
  parent: SpecialtyBasicActionsSection,
  content: {
    name: 'Sustain',
    description:
      "◆ *[Concentrate](content:traits/concentrate)*\n\nChoose one of your effects that has a sustained duration or lists a special benefit when you Sustain it. Most such effects come from spells or magic item activations. If the effect has a sustained duration, its duration extends until the end of your next turn. (Sustaining more than once in the same turn doesn't extend the duration to subsequent turns.) If an ability can be sustained but doesn't list how long, it can be sustained up to 10 minutes.\n\nAn effect might list an additional benefit that occurs if you Sustain it, and this can even appear on effects that don't have a sustained duration. If the effect has both a special benefit and a sustained duration, your Sustain action extends the duration as well as having the special benefit.\n\nIf your Sustain action is disrupted, the ability ends.",
  },
})

export const PlayingTheGameMovementSection = Content.defineSection('playing-the-game/playing-the-game/movement', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Movement',
    description:
      'Your movement and position determine how you interact with the world. Moving in exploration and downtime modes is relatively fluid. Movement in encounter mode follows additional rules explained in [Tactical Movement](content:playing-the-game/tactical-movement). The rules below apply in all modes of play.',
  },
})

export const MovementTypesSection = Content.defineSection('playing-the-game/movement-types', {
  parent: PlayingTheGameMovementSection,
  content: {
    name: 'Movement Types',
    description:
      "Creatures in Pathfinder soar through the clouds, scale sheer cliffs, and tunnel underfoot. The majority of creatures have a [Speed](characteristic:speed), which is how fast they can move across the ground.\n\nSome abilities give you different ways to move, such as through the air or underground. Each of these special movement types has its own Speed value. Many creatures have these Speeds naturally, such as a bird having a fly Speed or a fish having a swim Speed. The various types of movement are listed below. Since the [Stride](content:playing-the-game/stride) action can be used only with your normal Speed, moving using one of these movement types requires using a special action, and you can't [Step](content:playing-the-game/step) while using one of these movement types. Since Speed by itself refers to your land Speed, rules text concerning these special movement types specifies the movement types to which it applies. Speeds can be increased or decreased with item, circumstance, and status bonuses and penalties. Penalties can't reduce your Speeds below 5 feet unless stated otherwise.\n\nSwitching from one movement type to another requires ending your action that has the first movement type and using a new action that has the second movement type. For instance, if you [Climbed](content:skills/climb) 10 feet to the top of a cliff, you could then Stride forward 10 feet. In some cases, the GM might rule otherwise, especially if you're moving a very short distance using one of the types of movement.",
  },
})

export const SpeedSection = Content.defineSection('playing-the-game/speed', {
  parent: MovementTypesSection,
  content: {
    name: 'Speed',
    description:
      "Most characters and monsters have a [Speed](characteristic:speed) statistic that indicates how quickly they can move across the ground. This statistic is referred to as land Speed when it's necessary to differentiate it from special Speeds.\n\nWhen you use the [Stride](content:playing-the-game/stride) action, you move a number of feet equal to your Speed. Numerous other abilities also allow you to move, from [Crawling](content:playing-the-game/crawl) to [Leaping](content:playing-the-game/leap), and most of them are based on your Speed in some way. Whenever a rule mentions your Speed without specifying a type, it's referring to your land Speed.",
  },
})

export const SpeedSpeedSection = Content.linkEntity(SpeedSection, Characteristic.Speed)

export const BurrowSpeedSection = Content.defineSection('playing-the-game/burrow-speed', {
  parent: MovementTypesSection,
  content: {
    name: 'Burrow Speed',
    description:
      'A burrow [Speed](characteristic:speed) lets you tunnel through the ground. You can use the [Burrow](content:playing-the-game/burrow) action if you have a burrow Speed. Burrowing doesn’t normally leave behind a tunnel unless the ability specifically states that it does. Most creatures need to hold their breath when burrowing, and they might need [tremorsense](content:playing-the-game/tremorsense) to navigate.',
  },
})

export const ClimbSpeedSection = Content.defineSection('playing-the-game/climb-speed', {
  parent: MovementTypesSection,
  content: {
    name: 'Climb Speed',
    description:
      "A climb [Speed](characteristic:speed) allows you to move up or down inclines and vertical surfaces. Most creatures need to succeed at [Athletics](characteristic:skill/athletics) checks to [Climb](content:skills/climb), but if you have a climb Speed, you automatically succeed and move up to your climb Speed instead of the listed distance.\n\nYou might still have to attempt Athletics checks to Climb in hazardous conditions, to Climb extremely difficult surfaces, or to cross horizontal planes such as ceilings. You can also choose to roll an Athletics check to Climb rather than accept an automatic success in hopes of getting a critical success. Your climb Speed grants you a +4 circumstance bonus to Athletics checks to Climb.\n\nIf you have a climb Speed, you're not [off-guard](content:conditions/off-guard) while you're climbing.",
  },
})

export const FlySpeedSection = Content.defineSection('playing-the-game/fly-speed', {
  parent: MovementTypesSection,
  content: {
    name: 'Fly Speed',
    description:
      "As long as you have a fly [Speed](characteristic:speed), you can use the [Fly](content:playing-the-game/fly) and [Arrest a Fall](content:playing-the-game/arrest-a-fall) actions. You can also attempt to [Maneuver in Flight](content:skills/maneuver-in-flight) if you're trained in the [Acrobatics](characteristic:skill/acrobatics) skill.\n\nWind conditions can affect how you use the Fly action. In general, moving against the wind uses the same rules as moving through [difficult terrain](content:playing-the-game/difficult-terrain) (or greater difficult terrain, if you're also flying upward), and moving with the wind allows you to move 10 feet for every 5 feet of movement you spend (not cumulative with moving straight downward). For more information on spending movement, see [Tactical Movement](content:playing-the-game/tactical-movement).\n\nUpward and downward movement are both relative to the gravity in your area; if you're in zero gravity, moving up or down is no different from moving horizontally.",
  },
})

export const SwimSpeedSection = Content.defineSection('playing-the-game/swim-speed', {
  parent: MovementTypesSection,
  content: {
    name: 'Swim Speed',
    description:
      "With a swim [Speed](characteristic:speed), you can propel yourself through the water with little impediment. Instead of attempting [Athletics](characteristic:skill/athletics) checks to [Swim](content:skills/swim), you automatically succeed and move up to your swim Speed instead of the listed distance. Moving up or down is still moving through [difficult terrain](content:playing-the-game/difficult-terrain).\n\nYou might still have to attempt checks to Swim in hazardous conditions or to cross turbulent water. You can also choose to roll an Athletics check to Swim rather than accept an automatic success in hopes of getting a critical success. Your swim Speed grants you a +4 circumstance bonus to Athletics checks to Swim.\n\nHaving a swim Speed doesn't necessarily mean you can breathe in water, so you might still have to hold your breath if you're underwater to avoid [drowning](content:playing-the-game/drowning-and-suffocating).",
  },
})

export const FallingSection = Content.defineSection('playing-the-game/falling', {
  parent: PlayingTheGameMovementSection,
  content: {
    name: 'Falling',
    description:
      "If you fall more than 5 feet, when you land you take bludgeoning damage equal to half the distance you fell. Treat falls longer than 1,500 feet as though they were 1,500 feet (750 damage). If you take any damage from a fall, you land [prone](content:conditions/prone). You fall about 500 feet in the first round of falling and about 1,500 feet each round thereafter.\n\nYou can [Grab an Edge](content:playing-the-game/grab-an-edge) as a reaction to reduce the damage from some falls, or [Arrest a Fall](content:playing-the-game/arrest-a-fall) if you have a fly [Speed](characteristic:speed). In addition, if you fall into water, snow, or another relatively soft substance, you can treat the fall as though it were 20 feet shorter, or 30 feet shorter if you intentionally dove in. The effective reduction can't be greater than the depth (so when falling into 10-foot-deep water, you treat the fall as 10 feet shorter).",
  },
})

export const FallingOnACreatureSection = Content.defineSection('playing-the-game/falling-on-a-creature', {
  parent: FallingSection,
  content: {
    name: 'Falling on a Creature',
    description:
      'If you land on a creature, that creature must attempt a DC 15 [Reflex](characteristic:reflex) save. Intentionally aiming yourself to land on a creature after a long fall is almost impossible.\n**Critical Success** The creature takes no damage.\n**Success** The creature takes bludgeoning damage equal to one-quarter the falling damage you took.\n**Failure** The creature takes bludgeoning damage equal to half the falling damage you took.\n**Critical Failure** The creature takes the same amount of bludgeoning damage you took from the fall.',
  },
})

export const FallingObjectsSection = Content.defineSection('playing-the-game/falling-objects', {
  parent: FallingSection,
  content: {
    name: 'Falling Objects',
    description:
      'A dropped object takes damage just like a falling creature. If the object lands on a creature, that creature can attempt a [Reflex](characteristic:reflex) save using the same rules as for a creature falling on a creature. Hazards and spells that involve falling objects, such as a rock slide, have their own rules about how they interact with creatures and the damage they deal.',
  },
})

export const TacticalMovementSection = Content.defineSection('playing-the-game/tactical-movement', {
  parent: PlayingTheGameMovementSection,
  content: {
    name: 'Tactical Movement',
    description:
      "Your movement during encounter mode—and at other times where precise movement matters—depends on the actions and other abilities you use. Whether you [Stride](content:playing-the-game/stride), [Step](content:playing-the-game/step), [Swim](content:skills/swim), or [Climb](content:skills/climb), the maximum distance you can move is based on your [Speed](characteristic:speed). Certain feats or magic items can grant you other [movement types](content:playing-the-game/movement-types), allowing you to swiftly [burrow](content:playing-the-game/burrow-speed), [climb](content:playing-the-game/climb-speed), [fly](content:playing-the-game/fly-speed), or [swim](content:playing-the-game/swim-speed).\n\nWhen the rules refer to a “movement cost” or “spending movement,” they are describing how many feet of your Speed you must use to move from one point to another. Normally, movement costs the number of feet you're moving. However, sometimes it's harder to move a certain distance due to [difficult terrain](content:playing-the-game/difficult-terrain) or other factors. In such a case, you might have to spend a different amount of movement to move from one place to another.\n\n**Reactions to Movement**\n\nSome reactions and free actions are triggered by a creature using an action with the move trait. The most notable example is Reactive [Strike](content:playing-the-game/strike) (reproduced below). Actions with the move trait can trigger reactions or free actions throughout the course of the distance traveled. Each time you exit a square within a creature's reach, your movement triggers those reactions and free actions (although no more than once per move action for a given reacting creature). If you use a move action but don't move out of a square, the trigger instead happens at the end of that action or ability.\n\nSome actions, such as Step, specifically state they don't trigger reactions or free actions based on movement.",
  },
})

export const ReactiveStrikeSection = Content.defineSection('playing-the-game/reactive-strike', {
  parent: TacticalMovementSection,
  content: {
    name: 'Reactive Strike',
    description:
      "⟲\n\n**Trigger** A creature within your reach uses a [manipulate](content:traits/manipulate) action or a [move](content:traits/move) action, makes a ranged attack, or leaves a square during a move action it's using.\n\nYou lash out at a foe that leaves an opening. Make a melee [Strike](content:playing-the-game/strike) against the triggering creature. If your attack is a critical hit and the trigger was a [manipulate](content:traits/manipulate) action, you [disrupt](content:playing-the-game/disrupting-actions) that action. This Strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike.",
  },
})

export const GridMovementSection = Content.defineSection('playing-the-game/grid-movement', {
  parent: TacticalMovementSection,
  content: {
    name: 'Grid Movement',
    description:
      'If an encounter involves combat, it’s often a good idea to track the movement and relative position of the participants using a Pathfinder Flip-Mat or some other form of grid to display the terrain, and miniatures to represent the combatants. When a character moves on a grid, every 1-inch square of the play area is 5 feet across in the game world. Hence, a creature moving in a straight line spends 5 feet of its movement for every map square traveled. [Difficult terrain](content:playing-the-game/difficult-terrain) can make some squares cost more of your movement.',
  },
})

export const DiagonalMovementSection = Content.defineSection('playing-the-game/diagonal-movement', {
  parent: GridMovementSection,
  content: {
    name: 'Diagonal Movement',
    description:
      'Because moving diagonally covers more ground, you count that movement differently. The first square of diagonal movement you make in a turn counts as 5 feet, but the second counts as 10 feet, and your count thereafter alternates between the two. For example, as you move across 4 squares diagonally, you would count 5 feet, then 10, then 5, and then 10, for a total of 30 feet. You track your total diagonal movement across all your movement during your turn, but reset your count at the end of your turn. The diagram on this page shows an example.',
  },
})

export const Section3DMovementSection = Content.defineSection('playing-the-game/3d-movement', {
  parent: GridMovementSection,
  content: {
    name: '3D Movement',
    description:
      'Most movement in a game can be represented on a flat map. If creatures are flying, swimming, or otherwise moving through three-dimensional space, see the advice under [Special Battles](content:playing-the-game/special-battles).',
  },
})

export const SizeSpaceAndReachSection = Content.defineSection('playing-the-game/size-space-and-reach', {
  parent: TacticalMovementSection,
  content: {
    name: 'Size, Space, and Reach',
    description:
      "Creatures and objects of different sizes occupy different amounts of space. The sizes and the spaces they each take up on a grid are listed in the Size and Reach table (see below). The table also lists the typical reach for creatures of each size, for both tall creatures (most bipeds) and long creatures (most quadrupeds). See [here](content:playing-the-game/range-and-reach) for more about reach.\n\nThe Space entry lists how many feet on a side a creature's space is, so a Large creature fills a 10-foot-by- 10-foot space, or 4 squares on the grid. (If you need to measure in three dimensions, their space is also 10 feet high.) Sometimes part of a creature extends beyond its space, such as if a giant octopus is grabbing you with its tentacles. In that case, the GM will usually allow attacking the extended portion, even if you can't reach the main creature.\n\n## Table 9-1: Size and Reach\n\n| **Size** | **Space** | **Reach (Tall)** | **Reach (Long)** |\n|---|---|---|---|\n| Tiny | Less than 5 feet | 0 feet | 0 feet |\n| Small | 5 feet | 5 feet | 5 feet |\n| Medium | 5 feet | 5 feet | 5 feet |\n| Large | 10 feet | 10 feet | 5 feet |\n| Huge | 15 feet | 15 feet | 10 feet |\n| Gargantuan | 20 feet or more | 20 feet | 15 feet |\n\nA Small or larger creature or object takes up at least 1 square on a grid, and creatures of these sizes can't usually share spaces except in situations like a character riding a mount.\n\nMultiple Tiny creatures can occupy the same square. At least four can fit in a single square, though the GM might determine that even more can fit. Tiny creatures can share a space occupied by a larger creature as well. If a Tiny creature's reach is 0 feet, it must share a space with a creature in order to attack it.",
  },
})

export const MovingThroughACreaturesSpaceSection = Content.defineSection('playing-the-game/moving-through-a-creatures-space', {
  parent: TacticalMovementSection,
  content: {
    name: 'Moving Through a Creature’s Space',
    description:
      'You can move through the space of a willing creature. If you want to move through an unwilling creature’s space, you can [Tumble Through](content:skills/tumble-through) it. You can’t end your turn in a square occupied by another creature, though you can end a move action in its square provided that you immediately use another move action to leave that square. If two creatures end up in the same square by accident, the GM determines which one is forced out of the square (or whether one falls [prone](content:conditions/prone)).',
  },
})

export const ProneAndIncapacitatedCreaturesSection = Content.defineSection('playing-the-game/prone-and-incapacitated-creatures', {
  parent: MovingThroughACreaturesSpaceSection,
  content: {
    name: 'Prone and Incapacitated Creatures',
    description:
      'You can share a space with a [prone](content:conditions/prone) creature if that creature is willing, [unconscious](content:conditions/unconscious), or dead and if it is your size or smaller. The GM might allow you to climb atop the corpse or unconscious body of a larger creature in some situations. A prone creature can’t stand up while someone else occupies its space, but it can [Crawl](content:playing-the-game/crawl) to a space where it’s able to stand, or it can attempt to [Shove](content:skills/shove) the other creature out of the way.',
  },
})

export const CreaturesOfDifferentSizesSection = Content.defineSection('playing-the-game/creatures-of-different-sizes', {
  parent: MovingThroughACreaturesSpaceSection,
  content: {
    name: 'Creatures of Different Sizes',
    description:
      "In most cases, you can move through the space of a creature three sizes larger than you or larger. This means a Medium creature can move through the space of a Gargantuan creature and a Small creature can move through the space of a Huge or Gargantuan creature. Likewise, a bigger creature can move through the space of a creature three sizes smaller than itself or smaller. You still can't end your movement in a space occupied by a creature.\n\nTiny creatures are an exception, just like with sharing a space. They can move through creatures' spaces and can even end their movement there.\n\nSimilarly, other creatures can move through and end their movement in a Tiny creature's space.",
  },
})

export const ObjectsSection = Content.defineSection('playing-the-game/objects', {
  parent: MovingThroughACreaturesSpaceSection,
  content: {
    name: 'Objects',
    description:
      'Because objects aren’t as mobile as creatures are, they’re more likely to fill a space. This means you can’t always move through their spaces like you might move through a space occupied by a creature. You might be able to occupy the same square as a statue of your size, but not a wide column. The GM determines whether you can move into an object’s square normally, whether special rules apply, or if you are unable to move into the square at all.',
  },
})

export const ForcedMovementSection = Content.defineSection('playing-the-game/forced-movement', {
  parent: TacticalMovementSection,
  content: {
    name: 'Forced Movement',
    description:
      "When an effect forces you to move, or if you start [falling](content:playing-the-game/falling), the distance you move is defined by the effect that moved you, not by your [Speed](characteristic:speed). Forced movement doesn't trigger reactions that are triggered by movement. Some common causes of forced movement include the [Reposition](content:skills/reposition) and [Shove](content:skills/shove) actions of [Athletics](characteristic:skill/athletics). In the rare cases where it's unclear whether your movement is voluntary or forced, the GM makes the determination.\n\nIf forced movement would move you into a space you can't occupy—because objects are in the way or because you lack the movement type needed to reach it, for example—you stop moving in the last space you can occupy.\n\nUsually the creature or effect forcing the movement chooses the path the victim takes. If you're pushed or pulled, you can usually be moved through [hazardous terrain](content:playing-the-game/hazardous-terrain), pushed off a ledge, or the like. Abilities that reposition you in some other way can't put you in such dangerous places unless they specify otherwise. In all cases, the GM makes the final call if there's doubt on where forced movement can move a creature.\n\nSome abilities allow a creature to move while carrying another along with it. This is forced movement for the carried creature. Unless noted otherwise, they both move on the same path while this happens—the carrying creature can't drag its victim through dangers while avoiding them itself, for example.",
  },
})

export const TerrainSection = Content.defineSection('playing-the-game/terrain', {
  parent: PlayingTheGameMovementSection,
  content: {
    name: 'Terrain',
    description:
      'Several types of terrain can complicate your movement by slowing you down, damaging you, or endangering you. Navigating these types of terrain can be challenging, but it can also let you get an advantage over your foes.',
  },
})

export const DifficultTerrainSection = Content.defineSection('playing-the-game/difficult-terrain', {
  parent: TerrainSection,
  content: {
    name: 'Difficult Terrain',
    description:
      "Difficult terrain is any terrain that impedes your movement, ranging from particularly rough or unstable surfaces to thick ground cover and countless other impediments. Moving into a square of **difficult terrain** (or moving 5 feet into or within an area of difficult terrain, if you're not using a grid) costs an extra 5 feet of movement. Moving into a square of **greater difficult terrain** instead costs 10 additional feet of movement. This additional cost is not increased further when moving diagonally. You can't [Step](content:playing-the-game/step) into difficult terrain.\n\nMovement you make while jumping ignores the terrain you're jumping over. Some abilities (such as [flight](content:playing-the-game/fly) or being incorporeal) allow you to avoid the movement reduction from some types of difficult terrain.",
  },
})

export const IgnoreDifficultTerrainSection = Content.defineSection('playing-the-game/ignore-difficult-terrain', {
  parent: DifficultTerrainSection,
  content: {
    name: 'Ignore Difficult Terrain',
    description:
      'Certain abilities let you ignore difficult terrain. If you can ignore difficult terrain, you can also move through greater difficult terrain at the extra movement cost difficult terrain normally imposes. An ability doesn’t let you entirely ignore greater difficult terrain unless the ability specifies otherwise.',
  },
})

export const HazardousTerrainSection = Content.defineSection('playing-the-game/hazardous-terrain', {
  parent: TerrainSection,
  content: {
    name: 'Hazardous Terrain',
    description:
      'Hazardous terrain damages you whenever you move through it. An acid pool and a pit of burning embers are both examples of hazardous terrain. The amount and type of damage depend on the specific hazardous terrain.',
  },
})

export const NarrowSurfacesSection = Content.defineSection('playing-the-game/narrow-surfaces', {
  parent: TerrainSection,
  content: {
    name: 'Narrow Surfaces',
    description:
      'A narrow surface is so precariously thin that you need to [Balance](content:skills/balance) or risk falling. Even on a success, you are [off-guard](content:conditions/off-guard) on a narrow surface. Each time you are hit by an attack or fail a save on a narrow surface, you must succeed at a [Reflex](characteristic:reflex) save (with the same DC as the [Acrobatics](characteristic:skill/acrobatics) check to Balance) or [fall](content:playing-the-game/falling).',
  },
})

export const UnevenGroundSection = Content.defineSection('playing-the-game/uneven-ground', {
  parent: TerrainSection,
  content: {
    name: 'Uneven Ground',
    description:
      'Uneven ground is an area unsteady enough that you need to [Balance](content:skills/balance) or risk falling [prone](content:conditions/prone) and possibly injuring yourself, depending on the specifics of the uneven ground. You are [off-guard](content:conditions/off-guard) on uneven ground. Each time you are hit by an attack or fail a save on uneven ground, you must succeed at a [Reflex](characteristic:reflex) save (with the same DC as the [Acrobatics](characteristic:skill/acrobatics) check to Balance) or fall prone.',
  },
})

export const InclinesSection = Content.defineSection('playing-the-game/inclines', {
  parent: TerrainSection,
  content: {
    name: 'Inclines',
    description:
      'An incline is an area so steep that you need to [Climb](content:skills/climb) using the [Athletics](characteristic:skill/athletics) skill in order to progress upward. You’re [off-guard](content:conditions/off-guard) when Climbing an incline.',
  },
})

export const CoverSection = Content.defineSection('playing-the-game/cover', {
  parent: PlayingTheGameMovementSection,
  content: {
    name: 'Cover',
    description:
      "When you're behind an obstacle that could block weapons, guard you against explosions, and make you harder to detect, you're behind cover. Standard cover gives you a +2 circumstance bonus to [AC](characteristic:armor-class), to [Reflex](characteristic:reflex) saves against area effects, and to Stealth checks to Hide, [Sneak](content:skills/sneak), or otherwise avoid detection. You can increase this to greater cover using the [Take Cover](content:playing-the-game/take-cover) basic action, increasing the circumstance bonus to +4. If cover is especially light, typically when it's provided by a creature, you have lesser cover, which grants a +1 circumstance bonus to AC. A creature with standard cover or greater cover can attempt to use [Stealth](characteristic:skill/stealth) to [Hide](content:skills/hide), but lesser cover isn't sufficient.\n\n## Cover\n\n| **Type of Cover** | **Bonus** | **Can Hide** |\n|---|---|---|\n| Lesser | +1 to AC | No |\n| Standard | +2 to AC, Reflex, Stealth | Yes |\n| Greater | +4 to AC, Reflex, Stealth | Yes |\n\nCover is relative, so you might simultaneously have cover against one creature and not another. Cover applies only if your path to the target is partially blocked. If a creature is entirely behind a wall or the like, you don't have [line of effect](content:playing-the-game/line-of-effect) and typically can't target it at all.\n\nUsually, the GM can quickly decide whether your target has cover. If you're uncertain or need to be more precise, draw a line from the center of your space to the center of the target's space. If that line passes through any terrain or object that would block the effect, the target has standard cover (or greater cover if the obstruction is extreme or the target has Taken Cover). If the line passes through a creature instead, the target has lesser cover. When measuring cover against an area effect, draw the line from the effect's point of origin to the center of the creature's space. See the diagram for examples.",
  },
})

export const CoverAndLargeCreaturesSection = Content.defineSection('playing-the-game/cover-and-large-creatures', {
  parent: CoverSection,
  content: {
    name: 'Cover and Large Creatures',
    description:
      'If a creature between you and a target is two or more sizes larger than both you and your target, that creature’s space blocks the effect enough to provide standard cover instead of lesser cover. The GM might determine that a creature doesn’t gain cover from terrain that it’s significantly larger than. For example, a Huge dragon probably wouldn’t receive any benefit from being behind a 1-foot-wide pillar.',
  },
})

export const SpecialCircumstancesSection = Content.defineSection('playing-the-game/special-circumstances', {
  parent: CoverSection,
  content: {
    name: 'Special Circumstances',
    description:
      'Your GM might allow you to overcome your target’s cover in some situations. If you’re right next to an arrow slit, you can shoot without penalty, but you have greater cover against someone shooting back at you from far away. Your GM might let you reduce or negate cover by leaning around a corner to shoot or the like. This usually takes an action to set up, and the GM might measure cover from an edge or corner of your space instead of your center.',
  },
})

export const FlankingSection = Content.defineSection('playing-the-game/flanking', {
  parent: PlayingTheGameMovementSection,
  content: {
    name: 'Flanking',
    description:
      "When you and an ally are flanking a foe, it has a harder time defending against you. A creature is [off-guard](content:conditions/off-guard) (taking a –2 circumstance penalty to [AC](characteristic:armor-class)) to melee attacks from creatures that are flanking it.\n\nTo flank a foe, you and your ally must be on opposite sides of the creature. A line drawn between the center of your space and the center of your ally's space must pass through opposite sides or opposite corners of the foe's space. Additionally, both you and the ally have to be able to act, you must be wielding melee weapons or be able to make an unarmed attack, you can't be under any effects that prevent you from attacking, and you must both have the enemy within reach. If you are wielding a [reach](content:traits/reach) weapon, you use your reach with that weapon for this purpose.\n\n**Avoiding Flanking**\n\nFlanking is an excellent battle tactic that can cause the flanked creature to get hit much more often. Escaping and avoiding flanks can be crucial for a player character's survival.\n\n**Movement:** The most straightforward means to escape a flank is usually to [Stride](content:playing-the-game/stride). It's often worth it to avoid the hits you'd take due to being [off-guard](content:conditions/off-guard) and to make enemies spend actions moving to catch you.\n\n**All-Around Vision:** Some monsters are covered in eyes that face multiple directions or are otherwise hard to distract, making them immune to flanking.\n\n**Deny Advantage:** Some classes, such as [rogue](trait:rogue), can gain the deny advantage class feature, makes them harder to outflank. You can't flank a creature with deny advantage unless your level is higher than the creature's.\n\n**Tiny Creatures and Flanking**\n\nTiny creatures usually have reach of 0 feet and need to be in a creature's space to attack it. This makes a Tiny creature unable to flank unless it's able to use a weapon with [reach](content:traits/reach) or has a melee unarmed attack with reach greater than 0 feet.\n\nThe GM might allow Tiny creatures to flank other Tiny creatures if they're all in the same square, but this is best left for special circumstances and uses the GM's best judgment.",
  },
})

export const Section3DFlankingSection = Content.defineSection('playing-the-game/3d-flanking', {
  parent: FlankingSection,
  content: {
    name: '3D Flanking',
    description:
      "Though battle grids are often two-dimensional, the game world isn't! Sometimes you might need to visualize a creature's space as a cube for flanking. For instance, if Valeros is underneath a flying sphinx while Lini is flying above the sphinx, they might be flanking it even if they're piled in an odd stack on your battle grid. And if Valeros were mounted on a horse, he might be able to measure from farther off the ground than normal.\n\nIn these cases, it's usually best to have the GM make the call on who's flanking rather than trying to do meticulous measurements in three dimensions.",
  },
})

export const PlayingTheGameEffectsSection = Content.defineSection('playing-the-game/playing-the-game/effects', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Effects',
    description:
      "Anything you do in the game has an effect. Many of these outcomes are easy to adjudicate during the game. If you tell the GM that you draw your sword, no check is needed. Other times, the specific effect requires more detailed rules governing how your choice is resolved.\n\nMany spells, magic items, and feats create specific effects, and your character will be subject to effects caused by monsters, hazards, the environment, and other characters.\n\nEffects sometimes require checks, but not always. Casting a _fly_ spell on yourself creates an effect that allows you to soar through the air, but casting the spell does not require a check. Conversely, using the [Intimidate](characteristic:skill/intimidation) skill to [Demoralize](content:skills/demoralize) a foe does require a check, and your result on that check determines the effect's outcome.\n\n**Conditions**\n\nSome effects apply conditions to a creature or item. These change your state of being in some way. Conditions are persistent, lasting until the stated duration ends, the condition is removed, or terms dictated in the condition cause it to end. Full rules appear in the [Conditions Appendix](content:conditions).\n\n**[Blinded](content:conditions/blinded):** You're unable to see.\n**[Broken](content:conditions/broken):** This item can't be used for its normal function until repaired.\n**[Clumsy](content:conditions/clumsy):** You can't move as easily or gracefully as usual.\n**[Concealed](content:conditions/concealed):** Fog or similar obscuration makes you difficult to see and target.\n**[Confused](content:conditions/confused):** You attack indiscriminately.\n**[Controlled](content:conditions/controlled):** Another creature determines your actions.\n**[Dazzled](content:conditions/dazzled):** Everything is concealed to you.\n**[Deafened](content:conditions/deafened):** You're unable to hear.\n**[Doomed](content:conditions/doomed):** With your soul in peril, you are now closer to death.\n**[Drained](content:conditions/drained):** Blood loss or something similar has leached your vitality.\n**[Dying](content:conditions/dying):** You're slipping closer to death.\n**[Encumbered](content:conditions/encumbered):** You're carrying more weight than you can manage.\n**[Enfeebled](content:conditions/enfeebled):** Your strength has been sapped away.\n**[Fascinated](content:conditions/fascinated):** You are compelled to focus your attention on something.\n**[Fatigued](content:conditions/fatigued):** Your defenses are lower and you can't use exploration activities while traveling.\n**[Fleeing](content:conditions/fleeing):** You must run away.\n**[Friendly](content:conditions/friendly):** An NPC with this condition has a good attitude toward you.\n**[Frightened](content:conditions/frightened):** Fear makes you less capable of attacking and defending.\n**[Grabbed](content:conditions/grabbed):** A creature, object, or magic holds you in place.\n**[Helpful](content:conditions/helpful):** An NPC with this condition wants to assist you.\n**[Hidden](content:conditions/hidden):** A creature you're hidden from knows your location but can't see you.\n**[Hostile](content:conditions/hostile):** An NPC with this condition wants to harm you.\n**[Immobilized](content:conditions/immobilized):** You can't move.\n**[Indifferent](content:conditions/indifferent):** An NPC with this condition doesn't have a strong opinion about you.\n**[Invisible](content:conditions/invisible):** Creatures can't see you.\n**[Observed](content:conditions/observed):** You're in plain view.\n**[Off-Guard](content:conditions/off-guard):** You're unable to defend yourself to your full capability.\n**[Paralyzed](content:conditions/paralyzed):** Your body is frozen in place.\n**[Persistent Damage](content:conditions/persistent-damage):** You keep taking damage every round.\n**[Petrified](content:conditions/petrified):** You've been turned to stone.\n**[Prone](content:conditions/prone):** You're lying on the ground and easier to attack.\n**[Quickened](content:conditions/quickened):** You get an extra action each turn.\n**[Restrained](content:conditions/restrained):** You're tied up and can't move, or a grappling creature has you pinned.\n**[Sickened](content:conditions/sickened):** You're sick to your stomach.\n**[Slowed](content:conditions/slowed):** You lose actions each turn.\n**[Stunned](content:conditions/stunned):** You can't use actions.\n**[Stupefied](content:conditions/stupefied):** You can't access your full mental faculties, and you have trouble casting spells.\n**[Unconscious](content:conditions/unconscious):** You're asleep or knocked out.\n**[Undetected](content:conditions/undetected):** A creature you're undetected by doesn't know where you are.\n**[Unfriendly](content:conditions/unfriendly):** An NPC with this condition doesn't like you.\n**[Unnoticed](content:conditions/unnoticed):** A creature is entirely unaware you're present.\n**[Wounded](content:conditions/wounded):** You've been brought back from the brink of death but haven't fully recovered",
  },
})

export const DurationSection = Content.defineSection('playing-the-game/duration', {
  parent: PlayingTheGameEffectsSection,
  content: {
    name: 'Duration',
    description:
      "Most effects are discrete, creating an instantaneous effect when you let the GM know what actions you are going to use. Firing a bow, moving to a new space, or taking something out of your pack all resolve instantly. Other effects instead last for a certain duration. Once the duration has elapsed, the effect ends. The rules generally use the following conventions for durations, though spells have some special [durations](content:spells/durations).\n\nFor an effect that lasts a number of rounds, the remaining duration decreases by 1 at the start of each turn of the creature that created the effect. Detrimental effects often last “until the end of the target's next turn” or “through” a number of their turns (such as “through the target's next 3 turns”), which means that the effect's duration decreases at the end of the creature's turn, rather than the start.\n\nInstead of lasting a fixed number of rounds, a duration might end only when certain conditions are met (or cease to be true). If so, the effects last until those conditions are met.\n\nSome effects can be ended early with the [Dismiss](content:playing-the-game/dismiss) action. An effect with the sustained duration lasts until the end of your next turn, but it can be extended as described in the [Sustain](content:playing-the-game/sustain) action.",
  },
})

export const RangeAndReachSection = Content.defineSection('playing-the-game/range-and-reach', {
  parent: PlayingTheGameEffectsSection,
  content: {
    name: 'Range and Reach',
    description:
      "Abilities that generate an effect typically work within a specified range or a reach. Most spells and abilities list a **range**—the maximum distance from the creature or object creating the effect in which the effect can occur.\n\nRanged and [thrown](content:traits/thrown) weapons have a **range increment**. Attacks with such weapons work normally up to that range. Attacks against targets beyond that range take a –2 penalty, which worsens by 2 for every additional multiple of that range, to a maximum of a –10 penalty after five additional range increments. Attacks beyond this range are not possible. For example, using a shortbow, your attacks take no penalty against a target up to 60 feet away, a –2 penalty if a target is over 60 and up to 120 feet away, a –4 if they're over 120 and up to 180 feet away, and so on, up to a maximum of 360 feet.\n\n**Reach** is how far you can physically reach with your body or a weapon. Melee Strikes rely on reach. Your reach is typically 5 feet, but weapons with the [reach](content:traits/reach) trait can extend this. Larger creatures can have greater reach; for instance, an ogre has a 10-foot reach. Unlike with measuring most distances, 10-foot reach can reach 2 squares diagonally. Reach greater than 10 feet is measured normally: 20-foot reach can reach 3 squares diagonally, 30-foot reach can reach 4, and so on.",
  },
})

export const TargetsSection = Content.defineSection('playing-the-game/targets', {
  parent: PlayingTheGameEffectsSection,
  content: {
    name: 'Targets',
    description:
      "Some effects require you to choose specific targets. Targeting can be difficult or impossible if your chosen creature is undetected by you, if the creature doesn't match restrictions on who you can target, or if some other ability prevents it from being targeted.\n\nSome effects require a target to be willing. Only you can decide whether your PC is willing, and the GM decides whether an NPC is willing. Even if you or your character don't know what the effect is, such as if your character is [unconscious](content:conditions/unconscious), you still decide if you're willing.\n\nSome effects target or require an ally, or otherwise refer to an ally. This must be someone on your side, often another PC, but it might be a bystander you are trying to protect. You don't count as your own ally. If it isn't clear, the GM decides who counts as an ally or an enemy.",
  },
})

export const AreasSection = Content.defineSection('playing-the-game/areas', {
  parent: PlayingTheGameEffectsSection,
  content: {
    name: 'Areas',
    description:
      'Some effects occupy an area of a specified shape and size. An area effect always has a point of origin and extends out from that point. There are four types of areas: emanations, bursts, cones, and lines. See [Area](content:playing-the-game/area) for details.',
  },
})

export const LineOfEffectSection = Content.defineSection('playing-the-game/line-of-effect', {
  parent: PlayingTheGameEffectsSection,
  content: {
    name: 'Line of Effect',
    description:
      "When creating an effect, you usually need an unblocked path to the target of a spell, the origin point of an effect's area, or the place where you create something with a spell or other ability. This is called a line of effect. You have line of effect unless a creature is entirely behind a solid physical barrier. Visibility doesn't matter for line of effect, nor do portcullises and other barriers that aren't totally solid. Usually a 1-foot-square gap is enough to maintain a line of effect, though the GM makes the final call.\n\nIn an area effect, creatures or targets must have line of effect to the point of origin to be affected. If there's no line of effect between the origin of the area and the target, the effect doesn't apply to that target. For example, if there's a solid wall between the origin of a [_fireball_](ability:spell/fireball) and a creature that's within the burst radius, the wall blocks the effect—that creature is unaffected by the fireball and doesn't need to attempt a save against it. Likewise, any ongoing effects created by an ability with an area cease to affect anyone who moves outside of the line of effect.",
  },
})

export const LineOfSightSection = Content.defineSection('playing-the-game/line-of-sight', {
  parent: PlayingTheGameEffectsSection,
  content: {
    name: 'Line of Sight',
    description:
      'Some effects require you to have line of sight to your target. As long as you can precisely sense the area (as described in [Precise Senses](content:playing-the-game/precise-senses)) and it is not blocked by a solid barrier (as described in [Cover](content:playing-the-game/cover)), you have line of sight. An area of [darkness](content:playing-the-game/darkness) prevents line of sight if you don’t have [darkvision](content:playing-the-game/darkvision-and-greater-darkvision), but portcullises and other obstacles that aren’t totally solid do not. Usually a 1-foot-square gap is enough to maintain line of sight, though the GM makes the final call.',
  },
})

export const AreaSection = Content.defineSection('playing-the-game/area', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Area',
    description:
      "An area always has a point of origin and extends out from that point. There are four types of areas: emanations, bursts, cones, and lines.\n\nWhen you're playing in encounter mode and using a grid, areas are measured in the same way as [movement](content:playing-the-game/playing-the-game/movement), but areas' distances are never affected by [difficult terrain](content:playing-the-game/difficult-terrain). Standard or greater [cover](content:playing-the-game/cover) can apply against areas, but not lesser cover. You can use the diagrams on this page as common reference templates for areas, rather than measuring squares each time. Many area effects describe only the effects on creatures in the area. The GM determines any effects to the environment and unattended objects.",
  },
})

export const BurstSection = Content.defineSection('playing-the-game/burst', {
  parent: AreaSection,
  content: {
    name: 'Burst',
    description:
      'A burst effect issues forth in all directions from a single corner of a square within the range of the effect, spreading in all directions to a specified radius. For instance, when you cast [_fireball_](ability:spell/fireball), it detonates at the corner of a square within 500 feet of you and creates a 20-foot burst, meaning it extends out 20 feet in every direction from the corner of the square you chose, affecting each creature whose space (or even one square of its space) is within the burst.',
  },
})

export const ConeSection = Content.defineSection('playing-the-game/cone', {
  parent: AreaSection,
  content: {
    name: 'Cone',
    description:
      "A cone shoots out from you in a quarter circle on the grid. When you aim a cone, the first square of that cone must share an edge with your space if you're aiming orthogonally, or it must touch a corner of your space if you're aiming diagonally. If you're Large or larger, the first square can run along the edge of any square of your space. You can't aim a cone so that it overlaps your space. The cone extends out for a number of feet, widening as it goes, as shown in the [Areas](content:playing-the-game/area) diagram. For instance, if you cast the [_breathe fire_](ability:spell/breathe-fire) spell, you create a cone of flames that originates at the edge of one square of your space and affects a quarter-circle area 15 feet on each edge.\n\nIf you make a cone originate elsewhere, use these same rules, with the first square of the cone using an edge or corner of that creature or object's space instead of your own.",
  },
})

export const EmanationSection = Content.defineSection('playing-the-game/emanation', {
  parent: AreaSection,
  content: {
    name: 'Emanation',
    description:
      'An emanation issues forth from each side of your space, extending out to a specified number of feet in all directions. For instance, the [_bless_](ability:spell/bless) spell’s emanation radiates 15 or more feet outward from the caster. Because the sides of a creature’s space are the starting point for the emanation, an emanation from a Large or larger creature affects a greater overall area than that of a Medium or smaller creature. Unless the text states otherwise, the creature creating an emanation effect chooses whether the creature at its center is affected.',
  },
})

export const LineSection = Content.defineSection('playing-the-game/line', {
  parent: AreaSection,
  content: {
    name: 'Line',
    description:
      'A line shoots forth from you, following a straight path in a direction of your choosing. The line affects each creature whose space it overlaps. Unless a line effect says otherwise, it is 5 feet wide. For example, the [_lightning bolt_](ability:spell/lightning-bolt) spell’s area is a 60-foot line that’s 5 feet wide.',
  },
})

export const AfflictionsSection = Content.defineSection('playing-the-game/afflictions', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Afflictions',
    description:
      'Diseases and poisons are types of afflictions, as are curses and radiation. An affliction can infect a creature for a long time, progressing through different and often increasingly debilitating stages.',
  },
})

export const FormatSection = Content.defineSection('playing-the-game/format', {
  parent: AfflictionsSection,
  content: {
    name: 'Format',
    description: 'Whether appearing in a spell, as an item, or within a creature’s stat block, afflictions appear in the following format.',
  },
})

export const NameAndTraitsSection = Content.defineSection('playing-the-game/name-and-traits', {
  parent: FormatSection,
  content: {
    name: 'Name and Traits',
    description:
      'The affliction’s name is given first, followed by its traits in parentheses—including the trait for the type of affliction ([curse](content:traits/curse), [disease](content:traits/disease), [poison](content:traits/poison), and so forth). If the affliction needs to have a level specified, it follows the parentheses, followed by any unusual details, such as restrictions on removing the conditions imposed by an affliction. If no level is listed, the affliction matches the level of the creature, hazard, or item causing the affliction.',
  },
})

export const SavingThrowSection = Content.defineSection('playing-the-game/saving-throw', {
  parent: FormatSection,
  content: {
    name: 'Saving Throw',
    description:
      "When you're first exposed to the affliction, you must attempt a saving throw against it. This first attempt to stave off the affliction is called the initial save. An affliction usually requires a [Fortitude](characteristic:fortitude) save, but the exact save and its DC are listed after the name and type of affliction. Spells that can cause an affliction typically use the caster's [spell DC](characteristic:spell-dc).\n\nOn a successful initial saving throw, you are unaffected by that exposure to the affliction. You don't need to attempt further saving throws against it unless you are exposed to the affliction again.\n\nIf you fail the initial saving throw, you advance to stage 1 of the affliction and are subjected to the listed effect. On a critical failure, after its onset period (if applicable), you advance to stage 2 of the affliction and are subjected to that effect instead.",
  },
})

export const OnsetSection = Content.defineSection('playing-the-game/onset', {
  parent: FormatSection,
  content: {
    name: 'Onset',
    description:
      'Some afflictions have onset times. For these afflictions, once you fail your initial save, you don’t gain the effects for the first stage of the affliction until the onset time has elapsed. If this entry is absent, you gain the effects for the first stage (or the second stage on a critical failure) immediately upon failing the initial saving throw.',
  },
})

export const MaximumDurationSection = Content.defineSection('playing-the-game/maximum-duration', {
  parent: FormatSection,
  content: {
    name: 'Maximum Duration',
    description:
      'If an affliction lasts only a limited amount of time, it lists a maximum duration. Once this duration passes, the affliction ends. Otherwise, it lasts until you succeed at enough saves to recover, as described in [Stages](content:playing-the-game/stages) below.',
  },
})

export const StagesSection = Content.defineSection('playing-the-game/stages', {
  parent: FormatSection,
  content: {
    name: 'Stages',
    description:
      "An affliction typically has multiple stages, each of which lists an effect followed by an interval in parentheses. When you reach a given stage of an affliction, you are subjected to the effects listed for that stage.\n\nAt the end of a stage's listed interval, you must attempt a new saving throw. On a success, you reduce the stage by 1; on a critical success, you reduce the stage by 2. You are then subjected to the effects of the new stage. If the affliction's stage is ever reduced below stage 1, the affliction ends and you don't need to attempt further saves unless you're exposed to the affliction again.\n\nOn a failure, the stage increases by 1; on a critical failure, the stage increases by 2. You are then subjected to the effects listed for the new stage. If a failure or critical failure would increase the stage beyond the highest listed stage, the affliction instead repeats the effects of the highest stage.",
  },
})

export const DamageAndConditionsSection = Content.defineSection('playing-the-game/damage-and-conditions', {
  parent: AfflictionsSection,
  content: {
    name: 'Damage and Conditions',
    description:
      'Any damage listed for a stage happens immediately when you reach that stage. Conditions affect you when you reach the stage and last for their normal duration. For instance, if you were [drained](content:conditions/drained) for an affliction with a maximum duration of 5 minutes, you remain drained after the affliction ends, as normal for the drained condition. A condition that automatically changes its value or ends under certain circumstances, like [frightened](content:conditions/frightened), still does so. Any condition that doesn’t have a default duration, such as [clumsy](content:conditions/clumsy) or [paralyzed](content:conditions/paralyzed), lasts as long as you’re at that stage unless noted otherwise, as do any penalties or any other effect of the stage that doesn’t list a duration.',
  },
})

export const MultipleExposuresSection = Content.defineSection('playing-the-game/multiple-exposures', {
  parent: AfflictionsSection,
  content: {
    name: 'Multiple Exposures',
    description:
      'Multiple exposures to the same curse or disease currently affecting you have no effect. For a poison, however, failing the initial saving throw against a new exposure increases the stage by 1 (or by 2 if you critically fail) without affecting the maximum duration. This is true even if you’re within the poison’s onset period, though it doesn’t change the onset length. If the poison does not have an onset time or it’s already elapsed, you are immediately subject to the effects of the new stage.',
  },
})

export const VirulentAfflictionsSection = Content.defineSection('playing-the-game/virulent-afflictions', {
  parent: AfflictionsSection,
  content: {
    name: 'Virulent Afflictions',
    description:
      'Afflictions with the virulent trait are harder to remove. You must succeed at two consecutive saves to reduce a virulent affliction’s stage by 1. A critical success reduces a virulent affliction’s stage by only 1 instead of by 2.',
  },
})

export const RemovingAfflictionsSection = Content.defineSection('playing-the-game/removing-afflictions', {
  parent: AfflictionsSection,
  content: {
    name: 'Removing Afflictions',
    description:
      'Apart from waiting them out, afflictions can be removed through certain uses of the skills and spells. The [Treat Disease](content:skills/treat-disease) and [Treat Poison](content:skills/treat-poison) uses of [Medicine](characteristic:skill/medicine) are commonly used to treat those afflictions.\n\nThe [_cleanse affliction_](ability:spell/cleanse-affliction) spell is also available to most spellcasters. Spells that counteract conditions at the source, such as [_sound body_](ability:spell/sound-body), can also be effective against diseases and poisons that cause those conditions.\n\nCurses are trickier, requiring solutions that specifically mention them, such as a 4th-rank _cleanse affliction_ or the Break Curse skill feat.',
  },
})

export const CounteractingSection = Content.defineSection('playing-the-game/counteracting', {
  parent: AfflictionsSection,
  content: {
    name: 'Counteracting',
    description:
      "Some effects try to counteract spells, afflictions, conditions, or other effects. Counteract checks compare the power of two forces and determine which defeats the other. Successfully counteracting an effect [disrupts ](content:playing-the-game/disrupting-actions) it, preventing it from having any effect, unless noted otherwise.\n\nWhen attempting a counteract check, add the relevant skill modifier or other appropriate modifier to your check against the target's DC. If you're counteracting an [affliction](content:playing-the-game/afflictions), the DC is in the affliction's stat block. If it's a spell, use the caster's DC. The GM can also calculate a DC based on the target effect's level. For spells, the counteract check modifier is your spellcasting attribute modifier plus your spellcasting proficiency bonus, plus any bonuses and penalties that specifically apply to counteract checks.\n\nWhat you can counteract depends on the check result and the target's counteract rank. If an effect is a spell, its rank is the counteract rank. Otherwise, halve its level and round up to determine its counteract rank (minimum counteract rank 0). If an effect's level is unclear and it came from a creature, halve and round up the creature's level.\n\n**Critical Success** Counteract the target if its counteract rank is no more than 3 higher than your effect's counteract rank.\n**Success** Counteract the target if its counteract rank is no more than 1 higher than your effect's counteract rank.\n**Failure** Counteract the target if its counteract rank is lower than your effect's counteract rank.\n**Critical Failure** You fail to counteract the target.\n\n**Counteract Table**\n\nThis table provides a reference for what an effect can counteract based on its rank and the check result. The first number in each column is the counteract rank at which you can counteract an effect based on your degree of success. The numbers in parentheses are the typical level range corresponding to that rank.\n\n## Counteract\n\n| **Counteract Rank** | **Failure** | **Success** | **Critical Success** |\n|---|---|---|---|\n| 0 | — | 1 (1 to 2) | 3 (5 to 6) |\n| 1 | 0 (–1 to 0) | 2 (3 to 4) | 4 (7 to 8) |\n| 2 | 1 (1 to 2) | 3 (5 to 6) | 5 (9 to 10) |\n| 3 | 2 (3 to 4) | 4 (7 to 8) | 6 (11 to 12) |\n| 4 | 3 (5 to 6) | 5 (9 to 10) | 7 (13 to 14) |\n| 5 | 4 (7 to 8) | 6 (11 to 12) | 8 (15 to 16) |\n| 6 | 5 (9 to 10) | 7 (13 to 14) | 9 (17 to 18) |\n| 7 | 6 (11 to 12) | 8 (15 to 16) | 10 (19 to 20) |\n| 8 | 7 (13 to 14) | 9 (17 to 18) | 11 (21 to 22) |\n| 9 | 8 (15 to 16) | 10 (19 to 20) | 12 (23 to 24) |\n| 10 | 9 (17 to 18) | 11 (21 to 22) | 13 (25 to 26) |\n| |",
  },
})

export const PlayingTheGamePerceptionAndDetectionSection = Content.defineSection('playing-the-game/playing-the-game/perception-and-detection', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Perception and Detection',
    description:
      'Your [Perception](characteristic:perception) measures your ability to notice things, search for what’s hidden, and tell whether something about a situation is suspicious. Perception is frequently used for rolling initiative in an encounter, and for the [Seek](content:playing-the-game/seek) action. See [here](content:playing-the-game/perception) for the procedure for rolling a Perception check.',
  },
})

export const LightSection = Content.defineSection('playing-the-game/light', {
  parent: PlayingTheGamePerceptionAndDetectionSection,
  content: {
    name: 'Light',
    description:
      'There are three levels of light: bright light, dim light, and darkness. The rules in this book assume that all creatures are in bright light unless otherwise noted. A source of light lists the radius in which it sheds bright light, and it sheds dim light to double that radius.',
  },
})

export const BrightLightSection = Content.defineSection('playing-the-game/bright-light', {
  parent: LightSection,
  content: {
    name: 'Bright Light',
    description: 'In bright light, such as sunlight, creatures and objects can be observed clearly by anyone with average vision or better.',
  },
})

export const DimLightSection = Content.defineSection('playing-the-game/dim-light', {
  parent: LightSection,
  content: {
    name: 'Dim Light',
    description:
      'Areas in shadow or lit by weak light sources are in dim light. Creatures and objects in dim light have the [concealed](content:conditions/concealed) condition, unless the seeker has [darkvision](content:playing-the-game/darkvision-and-greater-darkvision) or [low-light vision](content:playing-the-game/low-light-vision), or a [precise sense](content:playing-the-game/precise-senses) other than vision.',
  },
})

export const DarknessSection = Content.defineSection('playing-the-game/darkness', {
  parent: LightSection,
  content: {
    name: 'Darkness',
    description:
      'A creature or object within darkness is [hidden](content:conditions/hidden) or [undetected](content:conditions/undetected) unless the seeker has [darkvision](content:playing-the-game/darkvision-and-greater-darkvision) or a [precise sense](content:playing-the-game/precise-senses) other than vision. A creature without darkvision or another means of perceiving in darkness has the [blinded](content:conditions/blinded) condition while in darkness, though it might be able to see illuminated areas beyond the darkness. If a creature can see into an illuminated area, it can observe creatures within that illuminated area normally. After being in darkness, sudden exposure to bright light might make you [dazzled](content:conditions/dazzled) for a short time, as determined by the GM.',
  },
})

export const SensesSection = Content.defineSection('playing-the-game/senses', {
  parent: PlayingTheGamePerceptionAndDetectionSection,
  content: {
    name: 'Senses',
    description:
      "The ways a creature can use [Perception](characteristic:perception) depend on what senses it has. The primary concepts you need to know for understanding senses are precise senses, imprecise senses, and the three states of detection a target can be in: [observed](content:playing-the-game/observed), [hidden](content:playing-the-game/hidden), or [undetected](content:playing-the-game/undetected). Vision, hearing, and scent are three prominent senses, but each has a different degree of acuity.\n\n**Detecting with Other Senses**\n\nMost abilities that designate “a creature you can see” or the like function just as well if the user can precisely sense the subject with a different sense. If a monster uses a sense other than vision, the GM can adapt ways of avoiding detection that work with the monster's senses. For example, a creature that has echolocation might use hearing as a primary sense. This could mean its quarry is [concealed](content:playing-the-game/concealed) in a noisy chamber, [hidden](content:playing-the-game/hidden) in a great enough din, or [invisible](content:playing-the-game/invisible) under a [_silence_](ability:spell/silence) spell.\n\n**Using Stealth With Other Senses**\n\nThe [Stealth](characteristic:skill/stealth) skill is designed to use [Hide](content:skills/hide) for avoiding visual detection and [Avoid Notice](content:playing-the-game/avoid-notice) and [Sneak](content:skills/sneak) to avoid being both seen and heard. For many special senses, a player can describe how they're avoiding detection by that special sense and use the most applicable Stealth action. For instance, a creature stepping lightly to avoid being detected via [tremorsense](content:playing-the-game/tremorsense) would be using Sneak. In some cases, rolling a Dexterity-based Stealth skill check to Sneak doesn't make the most sense. For example, a PC trying to avoid being detected by a creature that senses heartbeats might meditate to slow their heart rate, using Wisdom instead of Dexterity for their Stealth check. When a creature could detect you using multiple different senses, use your lowest applicable attribute modifier.",
  },
})

export const PreciseSensesSection = Content.defineSection('playing-the-game/precise-senses', {
  parent: SensesSection,
  content: {
    name: 'Precise Senses',
    description:
      'Average vision is a precise sense—a sense that can be used to perceive the world in nuanced detail. The only way to target a creature without having drawbacks is to use a precise sense. You can usually detect a creature automatically with a precise sense unless that creature is [hiding](content:skills/hide) or obscured by the environment, in which case you can use the [Seek](content:playing-the-game/seek) basic action to better detect the creature.',
  },
})

export const ImpreciseSensesSection = Content.defineSection('playing-the-game/imprecise-senses', {
  parent: SensesSection,
  content: {
    name: 'Imprecise Senses',
    description:
      'Average hearing is an imprecise sense—it can’t detect the full range of detail that a precise sense can. You can usually sense a creature automatically with an imprecise sense, but it has the [hidden](content:conditions/hidden) condition instead of the [observed](content:conditions/observed) condition. It might be [undetected](content:playing-the-game/undetected) by you if it’s using [Stealth](characteristic:skill/stealth) or is in an environment that distorts the sense, such as a noisy room in the case of hearing. In those cases, you have to use the [Seek](content:playing-the-game/seek) basic action to detect the creature. At best, an imprecise sense can be used to make an undetected creature (or one you didn’t even know was there) merely hidden—it can’t make the creature observed.',
  },
})

export const VagueSensesSection = Content.defineSection('playing-the-game/vague-senses', {
  parent: SensesSection,
  content: {
    name: 'Vague Senses',
    description:
      "A character also has many vague senses—ones that can alert you that something is there but aren't useful for zeroing in on it to determine exactly what it is. The most useful of these for a typical character is the sense of smell. At best, a vague sense can be used to detect the presence of an [unnoticed](content:playing-the-game/unnoticed) creature, making it [undetected](content:playing-the-game/undetected). Even then, the vague sense isn't sufficient to make the creature [hidden](content:playing-the-game/hidden) or [observed](content:playing-the-game/observed).\n\nWhen one creature might detect another, the GM almost always uses the most precise sense available.\n\nPathfinder's rules assume that a given creature has vision as its only precise sense and hearing as its only imprecise sense. Some characters and creatures, however, have precise or imprecise senses that don't match this assumption. For instance, a character with poor vision might treat that sense as imprecise, an animal with the scent ability can use its sense of smell as an imprecise sense, and a creature with echolocation or a similar ability can use hearing as a precise sense. Such senses are often given special names and appear as “echolocation (precise),” “scent (imprecise) 30 feet,” etc.",
  },
})

export const SpecialSensesSection = Content.defineSection('playing-the-game/special-senses', {
  parent: PlayingTheGamePerceptionAndDetectionSection,
  content: {
    name: 'Special Senses',
    description:
      'While a [human](trait:ancestry/human) might have a difficult time making creatures out in [dim light](content:playing-the-game/dim-light), an [elf](trait:ancestry/elf) can see those creatures just fine. And though elves have no problem seeing on a moonlit night, their vision can’t penetrate complete [darkness](content:playing-the-game/darkness), whereas a [dwarf’s](trait:ancestry/dwarf) can. Special senses allow a creature to ignore or reduce the effects of the [undetected](content:playing-the-game/undetected), [hidden](content:playing-the-game/hidden), or [concealed](content:playing-the-game/concealed) conditions when it comes to situations that foil average vision.',
  },
})

export const DarkvisionAndGreaterDarkvisionSection = Content.defineSection('playing-the-game/darkvision-and-greater-darkvision', {
  parent: SpecialSensesSection,
  content: {
    name: 'Darkvision and Greater Darkvision',
    description:
      'A creature with darkvision or greater darkvision can see perfectly well in areas of [darkness](content:playing-the-game/darkness) and [dim light](content:playing-the-game/dim-light), though such vision is in black and white only. Some forms of magical darkness, such as a 4th-rank [_darkness_](ability:spell/darkness) spell, block normal darkvision. A creature with greater darkvision, however, can see through even these forms of magical darkness.',
  },
})

export const DarkvisionSection = Content.linkEntity(DarkvisionAndGreaterDarkvisionSection, AncestryCommon.Darkvision)

export const LowLightVisionSection = Content.defineSection('playing-the-game/low-light-vision', {
  parent: SpecialSensesSection,
  content: {
    name: 'Low-Light Vision',
    description:
      'A creature with low-light vision can see in [dim light](content:playing-the-game/dim-light) as though it were [bright light](content:playing-the-game/bright-light), so it ignores the [concealed](content:conditions/concealed) condition due to dim light.',
  },
})

export const LowLightVisionLowLightVisionSection = Content.linkEntity(LowLightVisionSection, AncestryCommon.LowLightVision)

export const ScentSection = Content.defineSection('playing-the-game/scent', {
  parent: SpecialSensesSection,
  content: {
    name: 'Scent',
    description:
      'Scent involves sensing creatures or objects by smell, and is usually a vague sense. The range is listed in the ability, and it functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple the range of scent abilities used to detect that creature, and the GM can reduce the range if a creature is downwind.',
  },
})

export const TremorsenseSection = Content.defineSection('playing-the-game/tremorsense', {
  parent: SpecialSensesSection,
  content: {
    name: 'Tremorsense',
    description:
      'Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. It is usually an imprecise sense with a limited range (listed in the ability). Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or [burrowing](content:playing-the-game/burrow) through) the surface.',
  },
})

export const DetectingCreaturesSection = Content.defineSection('playing-the-game/detecting-creatures', {
  parent: PlayingTheGamePerceptionAndDetectionSection,
  content: {
    name: 'Detecting Creatures',
    description:
      "Three conditions measure the degree to which you can sense a creature: [observed](content:conditions/observed), [hidden](content:conditions/hidden), and [undetected](content:conditions/undetected). However, the [concealed](content:conditions/concealed) and [invisible](content:conditions/invisible) conditions can partially mask a creature, and the [unnoticed](content:conditions/unnoticed) condition indicates you have no idea a creature is around.\n\nWith the exception of invisible, these conditions are relative to the viewer—it's possible for a creature to be observed to you but hidden from your ally. Most of these rules apply to objects as well as creatures.\n\nTypically, the GM tracks how well creatures detect each other, since neither party has perfect information. For example, you might think a creature is in the last place you sensed it, but it was able to [Sneak](content:skills/sneak) away. Or you might think a creature can't see you in the dark, but it has [darkvision](content:playing-the-game/darkvision-and-greater-darkvision).\n\nYou can attempt to avoid detection by using the [Stealth](characteristic:skill/stealth) skill to [Avoid Notice](content:playing-the-game/avoid-notice), [Hide](content:skills/hide), or [Sneak](content:skills/sneak), or by using [Deception](characteristic:skill/deception) to [Create a Diversion](content:skills/create-a-diversion).",
  },
})

export const ObservedSection = Content.defineSection('playing-the-game/observed', {
  parent: DetectingCreaturesSection,
  content: {
    name: 'Observed',
    description:
      'In most circumstances, you can sense creatures without difficulty and target them normally. Creatures in this state are [observed](content:conditions/observed). Observing requires a [precise sense](content:playing-the-game/precise-senses), which for most creatures means sight. If you can’t observe the creature, it’s either [hidden](content:conditions/hidden), [undetected](content:conditions/undetected), or [unnoticed](content:conditions/unnoticed), and you’ll need to factor in the targeting restrictions. Even if a creature is observed, it might still be [concealed](content:conditions/concealed).',
  },
})

export const HiddenSection = Content.defineSection('playing-the-game/hidden', {
  parent: DetectingCreaturesSection,
  content: {
    name: 'Hidden',
    description:
      "A creature that's [hidden](content:conditions/hidden) is only barely perceptible. You know what space it occupies, but little else. Perhaps the creature just moved behind [cover](content:playing-the-game/cover) and successfully used the [Hide](content:skills/hide) action. Your target might be behind a waterfall, where you can see some movement but can't determine an exact location. Maybe you've been [blinded](content:conditions/blinded) or the creature is [invisible](content:conditions/invisible), but you used the [Seek](content:playing-the-game/seek) basic action to determine its general location based on hearing alone. Regardless of the specifics, you're [off-guard](content:conditions/off-guard) to a hidden creature.\n\nWhen targeting a hidden creature, before you roll to determine your effect, you must attempt a DC 11 flat check. If you fail, you don't affect the creature, though the actions you used are still expended—as well as any spell slots, costs, and other resources. You remain off-guard to the creature, whether you successfully target it or not.",
  },
})

export const UndetectedSection = Content.defineSection('playing-the-game/undetected', {
  parent: DetectingCreaturesSection,
  content: {
    name: 'Undetected',
    description:
      "If a creature is [undetected](content:conditions/undetected), you don't know what space it occupies, you're [off-guard](content:conditions/off-guard) to it, and you can't easily target it. Using the [Seek](content:playing-the-game/seek) basic action can help you find an undetected creature, usually making it [hidden](content:conditions/hidden) from you instead of undetected. If a creature is undetected, that doesn't necessarily mean you're unaware of its presence—you might suspect an undetected creature is in the room with you, even though you're unable to find its space. The [unnoticed](content:conditions/unnoticed) condition covers creatures you're unaware of.\n\nTargeting an undetected creature is difficult. If you suspect there's a creature around, you can pick a square and attempt an attack. This works like targeting a hidden creature, but the flat check and attack roll are both rolled in secret by the GM. The GM won't tell you why you missed—whether it was due to failing the flat check, rolling an insufficient attack roll, or choosing the wrong square. The GM might allow you to try targeting an undetected creature with some spells or other abilities in a similar fashion. Undetected creatures are subject to area effects normally.\n\nFor instance, suppose an enemy [elf](trait:ancestry/elf) [wizard](trait:wizard) cast [_invisibility_](ability:spell/invisibility) and then [Sneaked](content:skills/sneak) away. You suspect that with the elf's [Speed](characteristic:speed) of 30 feet, they probably moved 15 feet toward an open door. You move up and attack a space 15 feet from where the elf started and directly on the path to the door. The GM secretly rolls an attack roll and flat check, but they know that you were not quite correct—the elf was actually in the adjacent space! The GM tells you that you missed, so you decide to make your next attack on the adjacent space, just in case. This time, it's the right space, and the GM's secret attack roll and flat check both succeed, so you hit!",
  },
})

export const UnnoticedSection = Content.defineSection('playing-the-game/unnoticed', {
  parent: DetectingCreaturesSection,
  content: {
    name: 'Unnoticed',
    description:
      'If you have no idea a creature is even present, that creature is [unnoticed](content:conditions/unnoticed) by you. A creature that is [undetected](content:conditions/undetected) might also be unnoticed. This condition usually matters for abilities that can be used only against targets totally unaware of your presence.',
  },
})

export const ConcealedSection = Content.defineSection('playing-the-game/concealed', {
  parent: DetectingCreaturesSection,
  content: {
    name: 'Concealed',
    description:
      'A [concealed](content:conditions/concealed) creature is in mist, within [dim light](content:playing-the-game/dim-light), or amid something else that obscures sight but isn’t a physical barrier. When you target a creature that’s concealed from you, you must attempt a DC 5 flat check before you roll to determine your effect. If you fail, you don’t affect the target. The concealed condition doesn’t change which of the main categories of detection apply. A creature in a light fog bank is still observed even though it’s concealed.',
  },
})

export const InvisibleSection = Content.defineSection('playing-the-game/invisible', {
  parent: DetectingCreaturesSection,
  content: {
    name: 'Invisible',
    description:
      "A creature with the [invisible](content:conditions/invisible) condition (by way of an [_invisibility_](ability:spell/invisibility) spell, for example) is automatically [undetected](content:conditions/undetected) to any creatures relying on sight as their only [precise sense](content:playing-the-game/precise-senses). Precise senses other than sight ignore the invisible condition. You can [Seek](content:playing-the-game/seek) to attempt to figure out an invisible creature's location, making it only hidden from you. This lasts until the invisible creature successfully uses [Sneak](content:skills/sneak) to become undetected again. If you're already [observing](content:conditions/observed) a creature when it becomes invisible, it starts out [hidden](content:conditions/hidden), since you know where it was, though it can then Sneak to become undetected.\n\nOther effects might partially foil invisibility. For instance, if you were tracking an invisible creature's footprints through the snow, the footprints would make it hidden. Throwing a net over an invisible creature would make it observed but [concealed](content:conditions/concealed) for as long as the net is on it.",
  },
})

export const EncounterModeSection = Content.defineSection('playing-the-game/encounter-mode', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Encounter Mode',
    description:
      'When every individual action counts, you enter the encounter mode of play. In this mode, time is divided into rounds, each of which is 6 seconds of time in the game world. Every round, each participant takes a turn in an established order. During your turn, you can use actions, and depending on the details of the encounter, you might have the opportunity to use reactions and free actions on your own turn and on others’ turns.',
  },
})

export const StructureSection = Content.defineSection('playing-the-game/structure', {
  parent: EncounterModeSection,
  content: {
    name: 'Structure',
    description:
      'An encounter is played out in a series of rounds, during which the player characters, adversaries, and other participants in the encounter act in sequence. You roll initiative to determine this order at the start of the encounter and then play through rounds until a conclusion is reached and the encounter ends. The rules in this section assume a combat encounter—a battle—but the general structure can apply to any kind of encounter. Other types of encounters, like social encounters, might use longer rounds or have other modifications to the basic structure.',
  },
})

export const Step1RollInitiativeSection = Content.defineSection('playing-the-game/step-1-roll-initiative', {
  parent: StructureSection,
  content: {
    name: 'Step 1: Roll Initiative',
    description:
      "When the GM calls for it, you'll roll initiative to determine your place in the initiative order, which is the sequence in which the encounter's participants will take their turns. Rolling initiative marks the start of an encounter. More often than not, you'll roll initiative when you enter a battle.\n\nTypically, you'll roll a [Perception](content:playing-the-game/perception) check to determine your initiative—the more aware you are of your surroundings, the more quickly you can respond. Sometimes, though, the GM might call on you to roll some other type of check. For instance, if you were [Avoiding Notice](content:playing-the-game/avoid-notice) during [exploration](content:playing-the-game/exploration-mode), you'd roll a [Stealth](characteristic:skill/stealth) check. A social encounter could call for a [Deception](characteristic:skill/deception) or [Diplomacy](characteristic:skill/diplomacy) check. In most cases, you can still use [Perception](characteristic:perception) if you prefer.\n\nThe GM rolls initiative for anyone other than the player characters in the encounter. If these include a number of identical creatures, the GM could roll once for the group as a whole and have them take their turns within the group in any order. However, this can make battles less predictable and more dangerous, so the GM might want to roll initiative for some or all creatures individually unless it's too much of a burden.\n\nUnlike a check, where the result is compared to a DC, the results of initiative rolls are ranked. This ranking sets the order in which the encounter's participants act—the initiative order. The character with the highest result goes first. The second highest follows, and so on until whoever had the lowest result takes their turn last.\n\nIf your result is tied with an enemy's result, the enemy goes first. If your result is tied with another PC's, you can decide between yourselves who goes first when you reach that place in the initiative order. After that, your places in the initiative order usually don't change during the encounter. (But see the [Delay](content:playing-the-game/delay) basic action.)",
  },
})

export const Step2PlayARoundSection = Content.defineSection('playing-the-game/step-2-play-a-round', {
  parent: StructureSection,
  content: {
    name: 'Step 2: Play a Round',
    description:
      'A round begins when the participant with the highest initiative roll result starts their turn, and it ends when the one with the lowest initiative ends their turn. The process of taking a turn is detailed below. Creatures might also act outside their turns with reactions and free actions.',
  },
})

export const Step3BeginTheNextRoundSection = Content.defineSection('playing-the-game/step-3-begin-the-next-round', {
  parent: StructureSection,
  content: {
    name: 'Step 3: Begin the Next Round',
    description:
      'Once everyone in the encounter has taken a turn, the round is over and the next one begins. Don’t roll initiative again; the new round proceeds in the same order as the previous one, repeating the cycle until the encounter ends.',
  },
})

export const Step4EndTheEncounterSection = Content.defineSection('playing-the-game/step-4-end-the-encounter', {
  parent: StructureSection,
  content: {
    name: 'Step 4: End the Encounter',
    description:
      'When your foes are defeated, some sort of truce is reached, or some other event or circumstance ends the combat, the encounter is over. You and the other participants no longer follow the initiative order, and a more free-form style of play resumes, with the game typically moving into [exploration mode](content:playing-the-game/exploration-mode). Sometimes, at the end of an encounter, the GM will award Experience Points to the party or you’ll find treasure to divvy up.',
  },
})

export const TurnsSection = Content.defineSection('playing-the-game/turns', {
  parent: EncounterModeSection,
  content: {
    name: 'Turns',
    description:
      'When it’s your turn to act, you can use single actions (◆), short activities (◆◆ and ◆◆◆), reactions (⟲), and free actions (◇). When you’re finished, your turn ends and the character next in the initiative order begins their turn. Sometimes it’s important to note when during your turn something happens, so a turn is divided into three steps.',
  },
})

export const Step1StartYourTurnSection = Content.defineSection('playing-the-game/step-1-start-your-turn', {
  parent: TurnsSection,
  content: {
    name: 'Step 1: Start Your Turn',
    description:
      "Many things happen automatically at the start of your turn—it's a common point for tracking the passage of time for effects that last multiple rounds. At the start of each of your turns, take these steps in any order you choose:\n\n- If you created an effect lasting for a certain number of rounds, reduce the number of rounds remaining by 1. The effect ends if the duration is reduced to 0. For example, if you [cast a spell](content:spells/cast-a-spell) that lasts 3 rounds on yourself during your first turn of a fight, it would affect you during that turn, decrease to 2 rounds of duration at the start of your second turn, decrease to 1 round of duration at the start of your third turn, and expire at the start of your fourth turn.\n\n- You can use 1 free action or reaction with a trigger of “Your turn begins” or something similar.\n\n- If you're [dying](content:conditions/dying), roll a [recovery check](content:playing-the-game/recovery-checks).\n\n- Do anything else that is specified to happen at the start of your turn, such as regaining [Hit Points](characteristic:hit-points) from [fast healing or regeneration](content:playing-the-game/fast-healing-and-regeneration).\n\nThe last step of starting your turn is always the same.\n\n- Regain your 3 actions and 1 reaction. If you haven't spent your reaction from your last turn, you lose it—you can't “save” actions or reactions from one turn to use during the next turn. Some abilities or conditions (such as [quickened](content:conditions/quickened), [slowed](content:conditions/slowed), and [stunned](content:conditions/stunned)) can change how many actions you regain and whether you regain your reaction. (Details on [gaining and losing actions](content:conditions).)\n\n**Tracking Initiative**\n\nThe GM keeps track of the initiative order for an encounter. It's usually okay for the players to know this order, since they'll see who goes when and be aware of one another's results. However, the GM might want to conceal information about adversaries the PCs have yet to detect or identify.\n\nOnce the encounter's order is set, it's usually not necessary to track the original initiative numbers. The GM can create a simple list, use a series of cards or other indicators, or use a Pathfinder Combat Pad, which has magnetic markers to allow for easily rearranging the order.\n\n**Changing The Initiative Order**\n\nAny method used to track the initiative order needs to be flexible because the order can change. A creature can use the [Delay](content:playing-the-game/delay) basic action to change its place in the order, in which case you can erase it from the list or pull its marker aside until it reenters the initiative order. When a creature gets knocked out, its initiative order also changes (see [Getting Knocked Out](content:playing-the-game/getting-knocked-out)). Using the [Ready](content:playing-the-game/ready) basic action doesn't change a creature's place in the initiative order, though, because the designated action becomes a reaction.",
  },
})

export const Step2ActSection = Content.defineSection('playing-the-game/step-2-act', {
  parent: TurnsSection,
  content: {
    name: 'Step 2: Act',
    description:
      "You can use actions in any order you wish during your turn, but you have to complete one action or activity before beginning another; for example, you can't use a single action in the middle of performing a 2-action activity. What actions you can use often depend on your class features, skills, feats, and items, but there are default actions anyone can use, described in [Basic Actions](content:playing-the-game/basic-actions). Some effects might prevent you from acting. If you can't act, you can't use any actions, including reactions and free actions.\n\nIf you begin a 2-action or 3-action activity on your turn, you must be able to complete it on your turn. You can't, for example, begin to [High Jump](content:skills/high-jump) using your final action on one turn and then complete it as your first action on your next turn.\n\nOnce you have spent all 3 of your actions, your turn ends (as described in [Step 3](content:playing-the-game/step-3-end-your-turn)) and the next creature's turn begins. You can choose to end your turn early, losing all remaining actions (but not your reaction).",
  },
})

export const Step3EndYourTurnSection = Content.defineSection('playing-the-game/step-3-end-your-turn', {
  parent: TurnsSection,
  content: {
    name: 'Step 3: End Your Turn',
    description:
      "Once you've done all the things you want to do with the actions you have available, you reach the end of your turn. Take the following steps in any order you choose. Play then proceeds to the next creature in the initiative order.\n\n- End any effects that last until the end of your turn. For example, spells with a sustained duration end at the end of your turn unless you used the [Sustain a Spell](content:playing-the-game/sustain) action during your turn to extend them. Some effects caused by enemies might also last through a certain number of your turns, and you decrease the remaining duration by 1 during this step, ending the effect if its duration is reduced to 0.\n\n- If you have a [persistent damage](content:conditions/persistent-damage) condition, you take the damage at this point. After you take the damage, you can attempt the flat check to end the persistent damage. You then attempt any saving throws for ongoing [afflictions](content:playing-the-game/afflictions). Many other conditions change at the end of your turn, such as the [frightened](content:conditions/frightened) condition decreasing in severity. These take place after you've taken any persistent damage, attempted flat checks to end the persistent damage, and attempted saves against any afflictions.\n\n- You can use 1 free action or reaction with a trigger of “Your turn ends” or something similar.\n\n- Resolve anything else specified to happen at the end of your turn.",
  },
})

export const ActivitiesInEncountersSection = Content.defineSection('playing-the-game/activities-in-encounters', {
  parent: EncounterModeSection,
  content: {
    name: 'Activities in Encounters',
    description:
      'Activities that take longer than a turn can’t normally be performed during an encounter. Spells with a casting time of 1 minute or more are a common example, as are several skill actions. When you commit to an activity during your turn in an encounter, you commit to spending all of the actions it requires. If the activity gets interrupted partway through, you lose all of the actions you would have spent on that activity. Activities are described on [here](content:playing-the-game/activities).',
  },
})

export const ReactionsInEncountersSection = Content.defineSection('playing-the-game/reactions-in-encounters', {
  parent: EncounterModeSection,
  content: {
    name: 'Reactions in Encounters',
    description:
      'Your reactions let you respond immediately to what’s happening around you. The GM determines whether you can use reactions before your first turn begins, depending on the situation in which the encounter happens. Once your first turn begins, you gain your actions and reaction. You gain 1 reaction per round. You can use a reaction on anyone’s turn (including your own), but only when its trigger occurs. If you don’t use your reaction, you lose it at the start of your next turn, though you typically then gain a reaction at the start of that turn.',
  },
})

export const SpecialBattlesSection = Content.defineSection('playing-the-game/special-battles', {
  parent: EncounterModeSection,
  content: { name: 'Special Battles' },
})

export const MountedCombatSection = Content.defineSection('playing-the-game/mounted-combat', {
  parent: SpecialBattlesSection,
  content: {
    name: 'Mounted Combat',
    description:
      "You can ride some creatures into combat. As noted in the [Mount](content:playing-the-game/mount) specialty basic action, your mount needs to be willing and at least one size larger than you. Your mount acts on your initiative. You must use the [Command an Animal](content:skills/command-an-animal) action to get your mount to spend its actions. If you don't, the animal wastes its actions. If you have the [Ride](trait:feat/ride) general feat, you succeed automatically when you Command an Animal that's your mount.\n\nFor example, if you are mounted on a horse and you make three attacks, your horse would remain stationary since you didn't command it. If you instead spent your first action to Command an Animal and succeeded, you could get your mount to [Stride](content:playing-the-game/stride). You could spend your next action to attack or to command the horse to attack, but not both.",
  },
})

export const MountedAttacksSection = Content.defineSection('playing-the-game/mounted-attacks', {
  parent: MountedCombatSection,
  content: {
    name: 'Mounted Attacks',
    description:
      "You and your mount fight as a unit. Consequently, you share a [multiple attack penalty](content:playing-the-game/multiple-attack-penalty). For example, if you [Strike](content:playing-the-game/strike) and then [Command an Animal](content:skills/command-an-animal) to have your mount Strike, your mount's attack takes a –5 multiple attack penalty.\n\nYou occupy every square of your mount's space for the purpose of making attacks. If you were a Medium creature on a Large mount, you could attack a creature on one side of your mount, then attack on the opposite side. On a Medium or smaller mount, use the normal reach of an attack. On a Large or Huge mount, you can attack any square adjacent to the mount if you have 5- or 10-foot reach, or any square within 10 feet of the mount (including diagonally) if you have 15-foot reach. Use the adjusted reach for determining [flanking](content:playing-the-game/flanking) and other rules that depend on reach.",
  },
})

export const MountedDefensesSection = Content.defineSection('playing-the-game/mounted-defenses', {
  parent: MountedCombatSection,
  content: {
    name: 'Mounted Defenses',
    description:
      "Attackers can target either you or your mount. An area effect affects both of you as long as you're both in the area. You are in an attacker's reach or range if any square of your mount is within reach or range. Because your mount is larger than you and you share its space, you have lesser cover against attacks targeting you when you're mounted if the mount would be in the way (as determined by the GM).\n\nBecause you can't move your body as freely while you're riding a mount, you take a –2 circumstance penalty to [Reflex](characteristic:reflex) saves while mounted. Additionally, the only [move](content:traits/move) action you can use is the [Mount](content:playing-the-game/mount) action to dismount.",
  },
})

export const AerialCombatSection = Content.defineSection('playing-the-game/aerial-combat', {
  parent: SpecialBattlesSection,
  content: {
    name: 'Aerial Combat',
    description:
      "Many monsters can fly, and PCs can use spells and items to gain the ability to fly. Flying creatures have to use the [Fly](content:playing-the-game/fly) action to move through the air. Performing an especially tricky maneuver might require using [Acrobatics](characteristic:skill/acrobatics) to [Maneuver in Flight](content:skills/maneuver-in-flight). Creatures might fall from the sky, using the [falling](content:playing-the-game/falling) rules. At the GM’s discretion, some ground-based actions might not work in the air. For instance, a flying creature couldn’t [Leap](content:playing-the-game/leap).\n\n**Three-Dimensional Combat**\n\nIn aerial and aquatic combat, you might need to track positioning in three dimensions. For flying creatures, you might use one of the following methods:\n\n- Find platforms to place flying creatures' miniatures on.\n\n- Set a die next to a creature with the number indicating how many squares up in the air it is.\n\n- Make a stack of dice or tokens, 1 per 5 feet of elevation.\n\n- Write the elevation next to the monster on the grid.\n\nIn underwater combat, choose a plane to be the baseline, typically the waterline, the sea floor, or a stationary object you can measure from.\n\nAs with ground-based movement, moving diagonally up or down in 3-D space requires counting every other diagonal as 10 feet. Measure flanking in all directions—creatures above and below an enemy can flank it just as effectively as they can from opposite sides.",
  },
})

export const AquaticCombatSection = Content.defineSection('playing-the-game/aquatic-combat', {
  parent: SpecialBattlesSection,
  content: {
    name: 'Aquatic Combat',
    description:
      "Use these rules for battles in water or underwater:\n\n- You're [off-guard](content:conditions/off-guard) unless you have a [swim Speed](content:playing-the-game/swim-speed).\n\n- You gain [resistance](content:playing-the-game/resistance) 5 to [acid](content:traits/acid) and [fire](content:traits/fire).\n\n- You take a –2 circumstance penalty to your attack roll for bludgeoning or slashing attacks that pass through water.\n\n- Ranged attacks made by an underwater creature or against an underwater target have their [range increments](content:playing-the-game/range-and-reach) halved.\n\n- You can't cast fire spells or use actions with the fire trait underwater. As normal for how traits work, any part of the effect that's unrelated to fire still works. For example, an attack with a flaming battle axe could still deal its physical damage, just not its fire damage.\n\n- At the GM's discretion, some ground-based actions might not work underwater or while floating.",
  },
})

export const DrowningAndSuffocatingSection = Content.defineSection('playing-the-game/drowning-and-suffocating', {
  parent: AquaticCombatSection,
  content: {
    name: 'Drowning and Suffocating',
    description:
      "You can hold your breath for a number of rounds equal to 5 + your [Constitution modifier](characteristic:constitution). Reduce your remaining air by 1 round at the end of each of your turns, or by 2 if you attacked or cast any spells that turn. You also lose 1 round worth of air each time you are critically hit or critically fail a save against a damaging effect. If you speak (including [Casting a Spell](content:spells/cast-a-spell)) you lose all remaining air.\n\nWhen you run out of air, you fall [unconscious](content:conditions/unconscious) and start suffocating. You can't recover from being unconscious and must attempt a DC 20 [Fortitude](characteristic:fortitude) save at the end of each of your turns. On a failure, you take 1d10 damage, and on a critical failure, you die. On each check after the first, the DC increases by 5 and the damage by 1d10; these increases are cumulative. Once your access to air is restored, you stop suffocating and are no longer unconscious (unless you're at 0 [Hit Points](characteristic:hit-points)).",
  },
})

export const ExplorationModeSection = Content.defineSection('playing-the-game/exploration-mode', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Exploration Mode',
    description:
      "While encounters use rounds for combat, exploration is more free form. The GM determines the flow of time, as you could be traveling by horseback across craggy highlands, negotiating with merchants, or delving in a dungeon in search of danger and treasure. Exploration lacks the immediate danger of [encounter mode](content:playing-the-game/encounter-mode), but it offers its own challenges.\n\nMuch of exploration mode involves movement and roleplaying. You might be traveling from one town to another, chatting with a couple of merchants in an outpost along the way, or maybe having a terse conversation with the watchful city guards at your destination. Instead of measuring your rate of movement in 5-foot squares every round, you measure it in feet or miles per minute, hour, or day, using your [travel speed](content:playing-the-game/travel-speed). Rather than deciding on each action every turn, you'll engage in an [exploration activity](content:playing-the-game/exploration-activities), and you'll typically spend some time every day resting and making your daily preparations.",
  },
})

export const TravelSpeedSection = Content.defineSection('playing-the-game/travel-speed', {
  parent: ExplorationModeSection,
  content: {
    name: 'Travel Speed',
    description:
      'Depending on how the GM tracks movement, you move in feet or miles based on your character’s [Speed](characteristic:speed) with the relevant movement type. Typical rates are on the table below.\n\n## Travel Speed\n\n| **Speed** | **Feet per Minute** | **Miles per Hour** | **Miles per Day** |\n|---|---|---|---|\n| 10 feet | 100 | 1 | 8 |\n| 15 feet | 150 | 1-1/2 | 12 |\n| 20 feet | 200 | 2 | 16 |\n| 25 feet | 250 | 2-1/2 | 20 |\n| 30 feet | 300 | 3 | 24 |\n| 35 feet | 350 | 3-1/2 | 28 |\n| 40 feet | 400 | 4 | 32 |\n| 50 feet | 500 | 5 | 40 |\n| 60 feet | 600 | 6 | 48 |\n\nThe rates in the table assume traveling over flat and clear terrain at a determined pace, but one that’s not exhausting. Moving through [difficult terrain](content:playing-the-game/difficult-terrain) halves the listed movement rate. Greater difficult terrain reduces the distance traveled to one-third the listed amount. If the travel requires a skill check to accomplish, such as [mountain climbing](content:skills/climb) or [swimming](content:skills/swim), the GM might call for a check once per hour using the result and the table above to determine your progress.',
  },
})

export const ExplorationActivitiesSection = Content.defineSection('playing-the-game/exploration-activities', {
  parent: ExplorationModeSection,
  content: {
    name: 'Exploration Activities',
    description:
      "While you're traveling and exploring, tell the GM what you'd generally like to do along the way. If you do nothing more than make steady progress toward your goal, you move at the full travel speeds given in the table.\n\nWhen you want to do something other than simply travel, you describe what you are attempting to do. It isn't necessary to go into extreme detail, such as “Using my dagger, I nudge the door so I can check for devious traps.” Instead, “I'm searching the area for hazards” is sufficient. The GM finds the best exploration activity to match your description and describes the effects of that activity. Some exploration activities limit how fast you can travel and be effective.\n\nThese are most common exploration activities.\n\n**Skill Exploration Activities**\n\n[Chapter 4: Skills](content:skills) includes additional exploration activities.\n\n**[Borrow an Arcane Spell](content:skills/borrow-an-arcane-spell):** You use [Arcana](characteristic:skill/arcana) to prepare a spell from someone else's spellbook.\n**[Coerce](content:skills/coerce):** You use [Intimidation](characteristic:skill/intimidation) to threaten a creature so it does what you want.\n**[Cover Tracks](content:skills/cover-tracks):** You use [Survival](characteristic:skill/survival) to obscure your passing.\n**[Decipher Writing](content:skills/decipher-writing):** You use a suitable skill to understand archaic, esoteric, or obscure texts.\n**[Gather Information](content:skills/gather-information):** You use [Diplomacy](characteristic:skill/diplomacy) to canvass the area to learn about a specific individual or topic.\n**[Identify Alchemy](content:skills/identify-alchemy):** You use [Craft](characteristic:skill/crafting) and alchemist's tools to identify an [alchemical](content:traits/alchemical) item.\n**[Identify Magic](content:skills/identify-magic):** Using a variety of skills, you can learn about a magic item, location, or ongoing effect.\n**[Impersonate](content:skills/impersonate):** You use [Deception](characteristic:skill/deception) and usually a disguise kit to create a disguise.\n**[Learn a Spell](content:skills/learn-a-spell):** You use the skill corresponding to the spell's tradition to gain access to a new spell.\n**[Make an Impression](content:skills/make-an-impression):** You use Diplomacy to make a good impression on someone (page 239).\n**[Repair](content:skills/repair):** With a repair kit and the Crafting skill, you fix a damaged item.\n**[Sense Direction](content:skills/sense-direction):** You use Survival to get a sense of where you are or determine cardinal directions.\n**[Squeeze](content:skills/squeeze):** Using [Acrobatics](characteristic:skill/acrobatics), you squeeze though very tight spaces.\n**[Track](content:skills/track):** You use Survival to follow tracks.\n**[Treat Wounds](content:skills/treat-wounds):** You use [Medicine](characteristic:skill/medicine) to treat a living creature's wounds.",
  },
})

export const AvoidNoticeSection = Content.defineSection('playing-the-game/avoid-notice', {
  parent: ExplorationActivitiesSection,
  content: {
    name: 'Avoid Notice',
    description:
      "*[Exploration](content:traits/exploration)*\n\nYou attempt a [Stealth](characteristic:skill/stealth) check to avoid notice while traveling at half speed. If you're Avoiding Notice at the start of an encounter, you usually roll a Stealth check instead of a [Perception](characteristic:perception) check both to determine your initiative and to see if the enemies notice you (based on their Perception DCs, as normal for [Sneak](content:skills/sneak), regardless of their initiative check results).",
  },
})

export const DefendSection = Content.defineSection('playing-the-game/defend', {
  parent: ExplorationActivitiesSection,
  content: {
    name: 'Defend',
    description:
      '*[Exploration](content:traits/exploration)*\n\nYou move at half your travel speed with your shield raised. If combat breaks out, you gain the benefits of [Raising a Shield](content:playing-the-game/raise-a-shield) before your first turn begins.',
  },
})

export const DetectMagicSection = Content.defineSection('playing-the-game/detect-magic', {
  parent: ExplorationActivitiesSection,
  content: {
    name: 'Detect Magic',
    description:
      '*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration)*\n\nYou cast [_detect magic_](ability:spell/detect-magic) at regular intervals. You move at half your travel speed or slower. You have no chance of accidentally overlooking a magic aura at a travel speed up to 300 feet per minute, but must be traveling no more than 150 feet per minute to detect magic auras before the party moves into them.',
  },
})

export const FollowTheExpertSection = Content.defineSection('playing-the-game/follow-the-expert', {
  parent: ExplorationActivitiesSection,
  content: {
    name: 'Follow the Expert',
    description:
      "*[Auditory](content:traits/auditory), [Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration), [Visual](content:traits/visual)*\n\nChoose an ally attempting a recurring skill check while exploring, such as climbing, or performing a different exploration tactic that requires a skill check (like [Avoiding Notice](content:playing-the-game/avoid-notice)). The ally must be at least an expert in that skill and must be willing to provide assistance. While Following the Expert, you match their tactic or attempt similar skill checks.\n\nThanks to your ally's assistance, you can add your level as a proficiency bonus to the associated skill check, even if you're untrained. Additionally, you gain a circumstance bonus to your skill check based on your ally's proficiency (+2 for expert, +3 for master, and +4 for legendary).",
  },
})

export const HustleSection = Content.defineSection('playing-the-game/hustle', {
  parent: ExplorationActivitiesSection,
  content: {
    name: 'Hustle',
    description:
      '*[Exploration](content:traits/exploration), [Move](content:traits/move)*\n\nYou strain yourself to move at double your travel speed. You can Hustle only for a number of minutes equal to your [Constitution modifier](characteristic:constitution) × 10 (minimum 10 minutes). If you are in a group that is Hustling, use the lowest Constitution modifier among everyone to determine how fast the group can Hustle together.',
  },
})

export const InvestigateSection = Content.defineSection('playing-the-game/investigate', {
  parent: ExplorationActivitiesSection,
  content: {
    name: 'Investigate',
    description:
      '*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration)*\n\nYou seek out information about your surroundings while traveling at half speed. You use [Recall Knowledge](content:skills/recall-knowledge) as a [secret](content:traits/secret) check to discover clues among the various things you can see and engage with as you journey along. You can use any skill that has a Recall Knowledge action while Investigating, but the GM determines whether the skill is relevant to the clues you could find.',
  },
})

export const RepeatASpellSection = Content.defineSection('playing-the-game/repeat-a-spell', {
  parent: ExplorationActivitiesSection,
  content: {
    name: 'Repeat a Spell',
    description:
      '*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration)*\n\nYou repeatedly cast the same spell while moving at half speed. Typically, this spell is a [cantrip](content:traits/cantrip) that you want to have in effect in the event a combat breaks out, and it must be one you can cast in 2 actions or fewer. Repeating a spell that requires making complex decisions, such as [_figment_](ability:spell/figment), can make you [fatigued](content:conditions/fatigued), as determined by the GM.',
  },
})

export const ScoutSection = Content.defineSection('playing-the-game/scout', {
  parent: ExplorationActivitiesSection,
  content: {
    name: 'Scout',
    description:
      '*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration)*\n\nYou scout ahead and behind the group to watch danger, moving at half speed. At the start of the next encounter, every creature in your party gains a +1 circumstance bonus to their initiative rolls.',
  },
})

export const SearchSection = Content.defineSection('playing-the-game/search', {
  parent: ExplorationActivitiesSection,
  content: {
    name: 'Search',
    description:
      '*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration)*\n\nYou [Seek](content:playing-the-game/seek) meticulously for hidden doors, concealed hazards, and so on. You can usually make an educated guess as to which locations are best to check and move at half speed, but if you want to be thorough and guarantee you checked everything, you need to travel at a [Speed](characteristic:speed) of no more than 300 feet per minute, or 150 feet per minute to ensure you check everything before you walk into it. You can always move more slowly while Searching to cover the area more thoroughly, and the Expeditious Search feat increases these maximum Speeds. If you come across a secret door, item, or hazard while Searching, the GM will attempt a free secret check to Seek to see if you notice the hidden object or hazard. In locations with many objects to search, you have to stop and spend significantly longer to search thoroughly.',
  },
})

export const SustainAnEffectSection = Content.defineSection('playing-the-game/sustain-an-effect', {
  parent: ExplorationActivitiesSection,
  content: {
    name: 'Sustain an Effect',
    description:
      '*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration)*\n\nYou [Sustain](content:playing-the-game/sustain) one effect with a sustained duration while moving at half speed. Most such effects can be sustained for 10 minutes, though some specify they can be sustained for a different duration. Sustaining an effect that requires making complex decisions, such as [_spiritual armament_](ability:spell/spiritual-armament), can make you [fatigued](content:conditions/fatigued), as determined by the GM.',
  },
})

export const RestAndDailyPreparationsSection = Content.defineSection('playing-the-game/rest-and-daily-preparations', {
  parent: ExplorationModeSection,
  content: {
    name: 'Rest and Daily Preparations',
    description:
      "You're at your best when you take time to rest and prepare. Once every 24 hours, you can take a period of rest (typically 8 hours), during which you heal naturally, regaining [Hit Points](characteristic:hit-points) equal to your [Constitution modifier](characteristic:constitution) (minimum 1) times your level, and you might recover from or improve certain conditions. Sleeping in armor results in poor rest that leaves you [fatigued](content:conditions/fatigued). If you go more than 16 hours without resting, you become fatigued (you can't recover from this fatigue until you rest at least 8 continuous hours).\n\nAfter you rest, you make your daily preparations, which takes around 1 hour. You can prepare only if you've rested, and only once per day. During preparations:\n\n- Spellcasters regain spell slots, and prepared spellcasters choose spells to have available that day.\n\n- Focus Points, abilities that refresh during preparations, and abilities that can be used only a certain number of times per day, including magic item uses, are reset.\n\n- You don armor and equip weapons and other gear.\n\n- You invest up to 10 worn magic items to gain their benefits for the day.",
  },
})

export const DowntimeModeSection = Content.defineSection('playing-the-game/downtime-mode', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Downtime Mode',
    description:
      'Downtime mode is played day-by-day rather than minute-by-minute or scene-by-scene. Usually, this mode of play occurs when you are in the safety of a settlement, maybe recovering from your adventures or studying an artifact you found.\n\nDowntime gives you time to rest fully, engage in crafting or a professional endeavor, learn new spells, retrain feats, or just have fun. You can sell items acquired during your adventures, buy new goods, and perform other activities as determined by your feats, your skills, and the settlement where you are spending the downtime.',
  },
})

export const EarningIncomeSection = Content.defineSection('playing-the-game/earning-income', {
  parent: DowntimeModeSection,
  content: {
    name: 'Earning Income',
    description:
      "The [Earn Income](content:skills/earn-income) skill action allows you to make money using a wide variety of skills. You can get creative with the skills you attempt to use, working with the GM on the details. Some skills might be much harder to earn money with than others. [Crafting](characteristic:skill/crafting), [Lore](content:skills/lore), and [Performance](characteristic:skill/performance) are the most reliable. Jobs in a fantasy world tend not to be particularly stable, so you might need to look for new tasks on a fairly regular basis.\n\nThe GM determines the levels of jobs you can find, as noted in the Earn Income activity. It's often in your best interest to determine what types of jobs are available for a small variety of skills, so you can take on the most lucrative or interesting option.",
  },
})

export const LongTermRestSection = Content.defineSection('playing-the-game/long-term-rest', {
  parent: DowntimeModeSection,
  content: {
    name: 'Long-Term Rest',
    description:
      'You can spend an entire day and night resting during downtime to recover [Hit Points](characteristic:hit-points) equal to your [Constitution modifier](characteristic:constitution) (minimum 1) multiplied by double your level.\n\n*[Downtime](content:traits/downtime)*\n\nYou can spend an entire day and night resting during downtime to recover [Hit Points](characteristic:hit-points) equal to your [Constitution modifier](characteristic:constitution) (minimum 1) multiplied by twice your level.',
  },
})

export const RetrainingSection = Content.defineSection('playing-the-game/retraining', {
  parent: DowntimeModeSection,
  content: {
    name: 'Retraining',
    description:
      "Retraining offers a way to alter your character choices, which is helpful when you want to take your character in a new direction or change decisions that didn't meet your expectations. You can retrain feats, skills, and some selectable class features. You can't retrain your ancestry, heritage, background, class, or attribute modifiers. You can't perform other downtime activities while retraining.\n\nRetraining usually requires you to spend time learning from a teacher, whether that entails physical training, studying at a library, or falling into shared magical trances.\n\nYour GM determines whether you can get proper training or whether something can be retrained at all. In some cases, you'll have to pay your instructor. Some abilities can be difficult or impossible to retrain (for instance, witch can retrain their patron only in extraordinary circumstances).\n\nWhen retraining, you generally can't make choices you couldn't make when you selected the original option. For instance, you can't replace a skill feat you chose at 2nd level for a 4th-level one, or for one that requires prerequisites you didn't meet at the time you took the original feat. If you don't remember whether you met the prerequisites at the time, ask your GM to make the call. If you cease to meet the prerequisites for an ability due to retraining, you can't use that ability. You might need to retrain several abilities in sequence in order to get all the abilities you want.\n\n*[Downtime](content:traits/downtime)*\n\nRetraining offers a way to alter some of your character choices, which is helpful when you want to take your character in a new direction or change decisions that didn't meet your expectations. You can retrain feats, skills, and some selectable class features. You can't retrain your ancestry, heritage, background, class, or ability scores. You can't perform other downtime activities while retraining.\n\nRetraining usually requires you to spend time learning from a teacher, whether that entails physical training, studying at a library, or falling into shared magical trances. Your GM determines whether you can get proper training or whether something can be retrained at all. In some cases, you'll have to pay your instructor.\n\nSome abilities can be difficult or impossible to retrain (for instance, a sorcerer can retrain their bloodline only in extraordinary circumstances).\n\nWhen retraining, you generally can't make choices you couldn't make when you selected the original option. For instance, you can't exchange a 2nd-level skill feat for a 4th-level one, or for one that requires prerequisites you didn't meet at the time you took the original feat. If you don't remember whether you met the prerequisites at the time, ask your GM to make the call. If you cease to meet the prerequisites for an ability due to retraining, you can't use that ability. You might need to retrain several abilities in sequence in order to get all the abilities you want.\n\n**Feats**\n\nYou can spend a week of downtime retraining to swap out one of your feats. Remove the old feat and replace it with another of the same type. For example, you could swap a skill feat for another skill feat, but not for a wizard feat.\n\n**Skills**\n\nYou can spend a week of downtime retraining to swap out one of your skill increases. Reduce your proficiency rank in the skill losing its increase by one step and increase your proficiency rank in another skill by one step. The new proficiency rank has to be equal to or lower than the proficiency rank you traded away. For instance, if your bard is a master in [Performance](characteristic:skill/performance) and [Stealth](characteristic:skill/stealth), and an expert in [Occultism](characteristic:skill/occultism), you could reduce the character's proficiency in Stealth to expert and become a master in Occultism, but you couldn't reassign that skill increase to become legendary in Performance. Keep track of your level when you reassign skill increases; the level at which your skill proficiencies changed can influence your ability to retrain feats with skill prerequisites.\n\nYou can also spend a week to retrain an initial trained skill you gained during character creation.\n\n**Class Features**\n\nYou can change a class feature that required a choice, making a different choice instead. Some, like changing a spell in your spell repertoire, take a week. The GM will tell you how long it takes to retrain larger choices like a druid order or a wizard school—always at least a month.",
  },
})

export const FeatsSection = Content.defineSection('playing-the-game/feats', {
  parent: RetrainingSection,
  content: {
    name: 'Feats',
    description:
      'You can spend a week of downtime retraining to swap out one of your feats. Remove the old feat and replace it with another of the same type. For example, you could swap a [skill](content:traits/skill) feat for another skill feat, but not for a [wizard](content:traits/wizard) feat.',
  },
})

export const RetrainingSkillsSection = Content.defineSection('playing-the-game/retraining/skills', {
  parent: RetrainingSection,
  content: {
    name: 'Skills',
    description:
      "You can spend a week of downtime retraining to swap out one of your skill increases. Reduce your proficiency rank in the skill losing its increase by one step and increase your proficiency rank in another skill by one step. The new proficiency rank has to be equal to or lower than the proficiency rank you traded away. For instance, if your bard is a master in [Performance](characteristic:skill/performance) and [Stealth](characteristic:skill/stealth), and an expert in [Occultism](characteristic:skill/occultism), you could reduce the character's proficiency in Stealth to expert and become a master in Occultism, but you couldn't reassign that skill increase to become legendary in Performance. Keep track of your level when you reassign skill increases; the level at which your skill proficiencies changed can influence your ability to retrain feats with skill prerequisites.\n\nYou can also spend a week to retrain an initial trained skill you selected during character creation.",
  },
})

export const ClassFeaturesSection = Content.defineSection('playing-the-game/class-features', {
  parent: RetrainingSection,
  content: {
    name: 'Class Features',
    description:
      'You can change a class feature that required a choice, making a different choice instead. Some, like changing a spell in your spell repertoire, take a week. The GM will tell you how long it takes to retrain larger choices like a druid order or a wizard school—it is always at least a month.',
  },
})

export const ShoppingAndCraftingSection = Content.defineSection('playing-the-game/shopping-and-crafting', {
  parent: DowntimeModeSection,
  content: {
    name: 'Shopping and Crafting',
    description:
      "If you're at a location with shops that buy or sell magic items, you can buy, sell, or trade. Ask the GM what types of shopping options are available to you—it can vary greatly depending where you're spending your downtime!\n\nBecause of the complexities of finding shops that are looking for items you want to sell or that offer ones you want to buy, dedicated shopping takes 1 day of downtime. It might take longer if you're selling a large number of goods, expensive items that require a wealthy buyer, or items that aren't in high demand.\n\nThe Price of an item indicates the full cost to buy it. You can sell an item for half its Price. The GM might adjust these once in a while due to supply and demand or the particular merchants you're dealing with.\n\n**Cost of Living**\n\nYou might need to pay your [cost of living](content:equipment/cost-of-living) for days spent in downtime. To avoid paying the cost, you can [Subsist](content:skills/subsist), using [Society](characteristic:skill/society) in a settlement or [Survival](characteristic:skill/survival) in the wild. Experienced adventurers often have friends or patrons who take care of their living expenses. They might even have so much treasure that their cost of living—even one of the more expensive options—becomes a pittance.\n\n**Skill Downtime Activities**\n\n[Chapter 4: Skills](content:skills) includes several downtime activities, which are summarized here.\n\n**[Craft](content:skills/craft):** Using the [Crafting](characteristic:skill/crafting) skill, you can create items from raw materials.\n**[Create Forgery](content:skills/create-forgery):** You forge a document.\n**[Earn Income](content:skills/earn-income):** You earn money, typically using Crafting, [Lore](content:skills/lore), or [Performance](characteristic:skill/performance).\n**[Subsist](content:skills/subsist):** You find food and shelter in the wilderness or within a settlement.\n**[Treat Disease](content:skills/treat-disease):** You spend time caring for a diseased creature in the hope of curing that creature.",
  },
})

export const ItemCraftingSection = Content.defineSection('playing-the-game/item-crafting', {
  parent: ShoppingAndCraftingSection,
  content: {
    name: 'Item Crafting',
    description:
      'You can spend downtime to use the [Craft](content:skills/craft) skill activity, making new items out of raw materials. Crafting can be an excellent way to refine the gear the party uses, including upgrading items and preparing ones you’re likely to need on an upcoming quest.',
  },
})

export const OtherActivitiesSection = Content.defineSection('playing-the-game/other-activities', {
  parent: DowntimeModeSection,
  content: {
    name: 'Other Activities',
    description:
      'Work with your GM if there are other ways you want to spend downtime. You might acquire property, manage a business, become part of a guild, curry favor in a large city, take command of an army, take on an apprentice, start a family, or minister to a flock of the faithful. Though there are efficient options for making money or adjusting your character, it’s often better to seek out fun and interesting activities that can open up new opportunities for character building, adventures, or relationships.',
  },
})

export const GoalsSection = Content.defineSection('playing-the-game/goals', {
  parent: OtherActivitiesSection,
  content: {
    name: 'Goals',
    description:
      'You can help guide the course of the campaign by setting long-term goals that take multiple periods of downtime to complete. Talk them through with the GM and the rest of the group. Consider alliances you want to develop further or changes you want to see in the game world.',
  },
})

export const PlayingTheGameContent = [
  PlayingTheGameSection,
  MakingChoicesSection,
  ThePathfinderBaselineSection,
  RulesOverviewSection,
  ModesOfPlaySection,
  ActionsSection,
  RollingChecksSection,
  EffectsSection,
  MovementSection,
  AttackingSection,
  DefensesSection,
  DamageSection,
  SpellsSection,
  SkillsSection,
  PerceptionAndDetectionSection,
  ChecksSection,
  Step1RollD20Section,
  AttributeModifierSection,
  StrengthSection,
  DexteritySection,
  ConstitutionSection,
  IntelligenceSection,
  WisdomSection,
  CharismaSection,
  BonusesSection,
  PenaltiesSection,
  Step2CalculateResultSection,
  Step3CompareToDCSection,
  GettingADCFromAModifierSection,
  Step4DegreeOfSuccessSection,
  Natural1AndNatural20Section,
  AttackRollsSection,
  MultipleAttackPenaltySection,
  RangePenaltySection,
  CompareToACSection,
  SpellAttackRollsSection,
  SpellAttackSection,
  SpellDCSection,
  SpellDCSpellDCSection,
  ChecksDefensesSection,
  ArmorClassSection,
  ArmorClassArmorClassSection,
  SavingThrowsSection,
  BasicSavingThrowsSection,
  FortitudeSection,
  ReflexSection,
  WillSection,
  PerceptionSection,
  PerceptionForInitiativeSection,
  PerceptionPerceptionSection,
  SkillChecksSection,
  DamageRollsSection,
  Step1RollDamageDiceSection,
  AddingDamageDiceSection,
  CountingDamageDiceSection,
  IncreasingDieSizeSection,
  PersistentDamageSection,
  DoublingAndHalvingDamageSection,
  Step2DamageTypeSection,
  Step3ApplyImmunitiesWeaknessesAndResistancesSection,
  Step4ReduceHitPointsSection,
  NonlethalAttacksSection,
  ImmunityWeaknessAndResistanceSection,
  ImmunitySection,
  ImmunityToCriticalHitsSection,
  ImmunityToNonlethalSection,
  TemporaryImmunitySection,
  WeaknessSection,
  ResistanceSection,
  HitPointsHealingAndDyingSection,
  HitPointsSection,
  TemporaryHitPointsSection,
  FastHealingAndRegenerationSection,
  ItemsAndHitPointsSection,
  HitPointsHitPointsSection,
  GettingKnockedOutSection,
  DyingSection,
  RecoveryChecksSection,
  TakingDamageSection,
  LosingTheDyingConditionSection,
  DeathSection,
  InstantDeathSection,
  DeathEffectsSection,
  MassiveDamageSection,
  HeroPointsSection,
  DescribingHeroicDeedsSection,
  PlayingTheGameActionsSection,
  ActivitiesSection,
  ExplorationAndDowntimeActivitiesSection,
  ActionsWithTriggersSection,
  LimitationsOnTriggersSection,
  OtherActionsSection,
  GainingAndLosingActionsSection,
  DisruptingActionsSection,
  BasicActionsSection,
  AidSection,
  CrawlSection,
  DelaySection,
  DropProneSection,
  EscapeSection,
  InteractSection,
  LeapSection,
  ReadySection,
  ReleaseSection,
  SeekSection,
  SenseMotiveSection,
  StandSection,
  StepSection,
  StrideSection,
  StrikeSection,
  TakeCoverSection,
  SpecialtyBasicActionsSection,
  ArrestAFallSection,
  AvertGazeSection,
  BurrowSection,
  DismissSection,
  FlySection,
  GrabAnEdgeSection,
  MountSection,
  PointOutSection,
  RaiseAShieldSection,
  SustainSection,
  PlayingTheGameMovementSection,
  MovementTypesSection,
  SpeedSection,
  SpeedSpeedSection,
  BurrowSpeedSection,
  ClimbSpeedSection,
  FlySpeedSection,
  SwimSpeedSection,
  FallingSection,
  FallingOnACreatureSection,
  FallingObjectsSection,
  TacticalMovementSection,
  ReactiveStrikeSection,
  GridMovementSection,
  DiagonalMovementSection,
  Section3DMovementSection,
  SizeSpaceAndReachSection,
  MovingThroughACreaturesSpaceSection,
  ProneAndIncapacitatedCreaturesSection,
  CreaturesOfDifferentSizesSection,
  ObjectsSection,
  ForcedMovementSection,
  TerrainSection,
  DifficultTerrainSection,
  IgnoreDifficultTerrainSection,
  HazardousTerrainSection,
  NarrowSurfacesSection,
  UnevenGroundSection,
  InclinesSection,
  CoverSection,
  CoverAndLargeCreaturesSection,
  SpecialCircumstancesSection,
  FlankingSection,
  Section3DFlankingSection,
  PlayingTheGameEffectsSection,
  DurationSection,
  RangeAndReachSection,
  TargetsSection,
  AreasSection,
  LineOfEffectSection,
  LineOfSightSection,
  AreaSection,
  BurstSection,
  ConeSection,
  EmanationSection,
  LineSection,
  AfflictionsSection,
  FormatSection,
  NameAndTraitsSection,
  SavingThrowSection,
  OnsetSection,
  MaximumDurationSection,
  StagesSection,
  DamageAndConditionsSection,
  MultipleExposuresSection,
  VirulentAfflictionsSection,
  RemovingAfflictionsSection,
  CounteractingSection,
  PlayingTheGamePerceptionAndDetectionSection,
  LightSection,
  BrightLightSection,
  DimLightSection,
  DarknessSection,
  SensesSection,
  PreciseSensesSection,
  ImpreciseSensesSection,
  VagueSensesSection,
  SpecialSensesSection,
  DarkvisionAndGreaterDarkvisionSection,
  DarkvisionSection,
  LowLightVisionSection,
  LowLightVisionLowLightVisionSection,
  ScentSection,
  TremorsenseSection,
  DetectingCreaturesSection,
  ObservedSection,
  HiddenSection,
  UndetectedSection,
  UnnoticedSection,
  ConcealedSection,
  InvisibleSection,
  EncounterModeSection,
  StructureSection,
  Step1RollInitiativeSection,
  Step2PlayARoundSection,
  Step3BeginTheNextRoundSection,
  Step4EndTheEncounterSection,
  TurnsSection,
  Step1StartYourTurnSection,
  Step2ActSection,
  Step3EndYourTurnSection,
  ActivitiesInEncountersSection,
  ReactionsInEncountersSection,
  SpecialBattlesSection,
  MountedCombatSection,
  MountedAttacksSection,
  MountedDefensesSection,
  AerialCombatSection,
  AquaticCombatSection,
  DrowningAndSuffocatingSection,
  ExplorationModeSection,
  TravelSpeedSection,
  ExplorationActivitiesSection,
  AvoidNoticeSection,
  DefendSection,
  DetectMagicSection,
  FollowTheExpertSection,
  HustleSection,
  InvestigateSection,
  RepeatASpellSection,
  ScoutSection,
  SearchSection,
  SustainAnEffectSection,
  RestAndDailyPreparationsSection,
  DowntimeModeSection,
  EarningIncomeSection,
  LongTermRestSection,
  RetrainingSection,
  FeatsSection,
  RetrainingSkillsSection,
  ClassFeaturesSection,
  ShoppingAndCraftingSection,
  ItemCraftingSection,
  OtherActivitiesSection,
  GoalsSection,
]
