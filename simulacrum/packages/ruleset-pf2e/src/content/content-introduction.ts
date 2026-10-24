import { Content } from '@simulacrum/ruleset'
import * as ActionType from '@simulacrum/ruleset-pf2e/action-type'
import * as Characteristic from '@simulacrum/ruleset-pf2e/characteristic'

export const IntroductionSection = Content.defineSection('introduction', {
  content: {
    name: 'Introduction',
    description:
      "Pathfinder is a fantasy tabletop roleplaying game (RPG) where you and a group of friends gather to tell a tale of brave heroes and cunning villains in a world filled with terrifying monsters and amazing treasures. More importantly, Pathfinder is a game where your character's choices determine how the story unfolds.\n\n**The First Rule**\n\nThe first rule of Pathfinder is that this game is yours. Use it to tell the stories you want to tell, be the character you want to be, and share exciting adventures with friends. If any other rule gets in the way of your fun, as long as your group agrees, you can alter or ignore it to fit your story. The true goal of Pathfinder is for everyone to enjoy themselves.",
  },
})

export const WhatIsARoleplayingGameSection = Content.defineSection('introduction/what-is-a-roleplaying-game', {
  parent: IntroductionSection,
  content: {
    name: 'What is a Roleplaying Game?',
    description:
      "A roleplaying game is an interactive story where one player, the Game Master (GM), sets the scene and presents challenges, while other players take the roles of player characters (PCs) and attempt to overcome those challenges. Danger comes in the form of monsters, devious traps, and the machinations of adversarial agents, but Pathfinder also provides political schemes, puzzles, interpersonal drama, and much, much more.\n\nThe game is typically played in a group of four to seven players, with one of those players serving as the group's GM. The GM prepares, presents, and presides over the game's world and story, posing challenges and playing adversaries, allies, and bystanders alike. As each scene flows, each player contributes to the story, responding to situations according to the personality and abilities of their character. Dice rolls, combined with preassigned statistics, add an element of chance to the game and determine whether characters succeed or fail at actions.",
  },
})

export const TheFlowOfTheGameSection = Content.defineSection('introduction/the-flow-of-the-game', {
  parent: WhatIsARoleplayingGameSection,
  content: {
    name: 'The Flow of the Game',
    description:
      "Pathfinder is played in sessions, during which players gather in person or online for a few hours to play the game. A complete story can be as short as a single session, often referred to as a “one-shot,” or it can stretch for multiple sessions, forming a campaign that might last for months or even years. If the GM enjoys telling the story and the players are entertained, the game can go as long as you like.\n\nA session can be mostly action, featuring battles with vile beasts, escapes from fiendish traps, and the completion of heroic quests. Alternatively, it could include negotiating with a baron for rights to a fort, infiltrating an army of lumbering giants, or bargaining with an angel for a strand of hair to revive a slain friend. Ultimately, it's up to you and your group to determine what kind of game you're playing, from dungeon exploration to a nuanced political drama, or anything in between.",
  },
})

export const ThePlayersSection = Content.defineSection('introduction/the-players', {
  parent: WhatIsARoleplayingGameSection,
  content: {
    name: 'The Players',
    description:
      "Everyone involved in a Pathfinder game is a player, including the Game Master, but for the sake of simplicity, “player” usually refers to participants other than the GM. Before the game begins, players invent a history and personality for their characters, using the rules to determine their characters' statistics, abilities, strengths, and weaknesses. The GM might limit the options available during character creation, but the limits are discussed ahead of time so everyone can create interesting heroes. In general, the only limits to character concepts are the players' imaginations and the GM's guidelines.\n\nDuring the game, players describe the actions their characters take and roll dice, using their characters' abilities. The GM resolves the outcome of these actions. Some players enjoy acting out (or roleplaying) what they do as if they were their characters, while others describe their characters' actions as if telling a story. Do whatever feels best!\n\nIf this is your first experience with a roleplaying game, it's recommended that you take on the role of a player to familiarize yourself with the rules and the world.",
  },
})

export const TheGameMasterSection = Content.defineSection('introduction/the-game-master', {
  parent: WhatIsARoleplayingGameSection,
  content: {
    name: 'The Game Master',
    description:
      "While the other players create and control their characters, the Game Master (or GM) is in charge of the story and world. The GM describes all the situations player characters experience in an adventure, considers how the actions of player characters affect the story, and interprets the rules along the way. The Game Master uses the rules and advice found in Pathfinder GM Core.\n\nThe GM can create a new adventure—crafting a narrative, selecting monsters, and assigning treasure on their own—or they can instead rely on a published adventure, using it as a basis for the session and modifying it as needed to accommodate their individual players and the group's style of play. Some even run games that combine original and published content, mixing both together to form a new narrative.\n\nBeing the GM is a challenge, requiring you to adjudicate the rules, narrate the story, and juggle other responsibilities. But it can also be very rewarding and worth all the work required to run a good game. If it's your first time running a game, remember that the only thing that matters is that everyone, including you, has a fun time. Everything else will come naturally with practice and patience.",
  },
})

export const GamingIsForAllSection = Content.defineSection('introduction/gaming-is-for-all', {
  parent: WhatIsARoleplayingGameSection,
  content: {
    name: 'Gaming Is for All',
    description:
      "Whether you're the GM or a player, participating in a tabletop roleplaying game includes a social contract: everyone's gathered together to have fun. For many, roleplaying is a way to escape the troubles of everyday life. Be mindful of everyone at the table and what they want out of the game; when a group gathers for the first time, they should talk about what they hope to experience at the table, as well as any topics they'd like to avoid. Everyone should understand that elements might come up that make some players feel uncomfortable or even unwelcome, and everyone should agree to respect those boundaries during play. That way, everyone can enjoy the game together.\n\nPathfinder is a game for everyone, regardless of their age, gender, race or ethnicity, religion, sexual orientation, or any other identities and life experiences. It's the responsibility of all of the players, not just the GM, to make sure the table is fun and welcoming for everyone.",
  },
})

export const ToolsOfPlaySection = Content.defineSection('introduction/tools-of-play', {
  parent: WhatIsARoleplayingGameSection,
  content: {
    name: 'Tools of Play',
    description:
      "In addition to this book, there are a few things you will need to play Pathfinder. These supplies can be found at your local hobby shop or online at **paizo.com**.\n\n**Character Sheet:** Each player will need a character sheet to create their character and to record what happens to them during play. You can find a character sheet in the back of this book and online as a free PDF.\n\n**Dice:** The players and GM will need at least one set of polyhedral dice, although most participants bring their own. Six-sided dice are quite common, but all the dice in the set can be found at hobby game stores or online. See the Dice sidebar for more on the different kinds of dice and how they are discussed in the text.\n\n**Adventure:** Every table needs an adventure to play, whether it's designed by the GM or found in a published resource. You can find a variety of exciting adventures and even entire Adventure Path campaigns at paizo.com.\n\n**Pathfinder Monster Core:** From terrifying dragons to mischievous gremlins, monsters are a common threat that the PCs might face, and each type has its own statistics and abilities. These can be found in the Pathfinder Monster Core, an invaluable book for GMs. Monster statistics can also be found online for free at **paizo.com/prd**.\n\n**Maps and Miniatures:** The chaos of combat can be difficult to imagine, so many groups use maps to represent the battlefield. These maps are marked with a 1-inch grid, and each square represents 5 feet in the game. Miniatures and illustrated tokens called pawns are used to represent the characters and the adversaries they face.\n\n**Additional Accessories:** There are many additional accessories you can add to your game to enhance the experience, including tools that help you track turns in combat, decks of cards for referencing common rules, digital character-creation tools, virtual tabletops for online play, and even background music and sound-effect sets.\n\n**Dice**\n\nPathfinder requires a set of polyhedral dice. Each die has a different number of sides—four, six, eight, or more. When these dice are mentioned in the text, they’re indicated by a “d” followed by the number of sides on the die. Pathfinder uses 4-sided dice (or d4), 6-sided dice (d6), 8-sided dice (d8), 10-sided dice (d10), 12-sided dice (d12), and 20-sided dice (d20). If you need to roll multiple dice, a number before the “d” tells you how many. For example, “4d6” means you should roll four dice, all 6-sided. If a rule asks for d%, you generate a number from 1 to 100 by rolling two 10-sided dice, treating one as the tens place and the other as the ones place.",
  },
})

export const BasicsOfPlaySection = Content.defineSection('introduction/basics-of-play', {
  parent: IntroductionSection,
  content: {
    name: 'Basics of Play',
    description:
      'Before creating your first character or adventure, you should understand a number of basic concepts used in the game. New concepts are presented in bold to make them easy to find, but this chapter is only an introduction to the basics of play. The complete game rules are defined in later chapters, and the Glossary and Index in the back of this book will help you find specific rules you need.',
  },
})

export const DefiningCharactersSection = Content.defineSection('introduction/defining-characters', {
  parent: BasicsOfPlaySection,
  content: {
    name: 'Defining Characters',
    description:
      "In Pathfinder, the players take on the role of **player characters (PCs),** while the Game Master portrays **nonplayer characters (NPCs)** and **monsters**. While PCs and NPCs are both important to the story, they serve very different purposes in the game. PCs are the protagonists—the narrative is about them—while NPCs and monsters are allies, contacts, adversaries, and villains. That said, PCs, NPCs, and monsters share several characteristics.\n\n**Level** is one of the most important statistics of the game, as it conveys the approximate power and capabilities of every individual creature. PCs range in level from 1st, at the start of the character's adventuring career, to 20th, the very height of power. As the characters overcome challenges, defeat foes, and complete adventures, they accumulate **Experience Points (XP).** Every time a character amasses 1,000 XP, they go up a level, gaining new abilities so they can take on even greater challenges. A 1st-level PC might face off against a giant rat or a group of bandits, but at 20th level, that same character might be able to destroy an entire city with a single spell.\n\nIn addition to level, characters are defined by **attributes**, which measure a character's raw potential and are used to calculate most of their other statistics. There are six attributes in the game. **Strength** represents a character's physical might, while **Dexterity** represents agility and the ability to avoid danger. **Constitution** indicates a character's overall health and well-being. **Intelligence** represents raw knowledge and problem-solving ability, while Wisdom measures a character's insight and the ability to evaluate a situation. Finally, **Charisma** indicates charm, persuasiveness, and force of personality. Attribute modifiers for ordinary creatures range from as low as –5 to as high as +5, with +0 representing average human capabilities. High-level characters can have attribute modifiers that range much higher than +5. An attribute modifier above the average increases your chance of success at tasks related to the attribute, while those below the average decrease your chance.\n\nYour player character is also defined by some key choices you make. The first choice is a PC's **ancestry**, representing the character's parents and heritage, such as human, elf, or goblin. Next up is the PC's **background**, which describes their upbringing, from lowly street urchin to wealthy noble. Finally, and most importantly, a PC's class defines the majority of their aptitudes and abilities, like a wizard's command of powerful arcane spells or a druid's power to transform into a fearsome beast!\n\nIn addition to these key choices, player characters also have a number of **feats**—individual abilities selected during character creation and as the character increases in level. Every feat has a type to denote where its explanation can be found (for example, elf feats can be found in the elf ancestry) and its theme (wizard feats, for example, grant abilities that deal with spells). Finally, characters have **skills** that measure their ability to hide, swim, bargain, and perform other common tasks.",
  },
})

export const CreatingANarrativeSection = Content.defineSection('introduction/creating-a-narrative', {
  parent: BasicsOfPlaySection,
  content: {
    name: 'Creating a Narrative',
    description:
      "Characters and their choices create the story of Pathfinder, but how they interact with each other and the world around them is governed by rules. So, while you might decide that your character undertakes an epic journey to overcome terrifying foes and make the world a safer place, your character's chance of success is determined by their abilities, the choices you make, and the roll of the dice.\n\nThe Game Master determines the premise and background of most adventures, although character histories and personalities certainly play a part. Once a game session begins, the players take turns describing what their characters attempt to do, while the GM determines the outcome, with the table working together to create the story. The GM also describes the environment, other characters' actions, and events. For example, the GM might announce that the characters' hometown has been regularly attacked by marauding trolls. The characters might track the trolls to a nearby swamp—only to discover that the trolls were driven from their swamp by a fearsome dragon! The PCs then have the choice of taking on an entire tribe of trolls, the dragon, or both. Whatever they decide, their success depends on their choices and the die rolls they make during play.\n\nA single narrative—including the setup, plot, and conclusion—is called an **adventure**. A series of adventures creates an even larger narrative, called a **campaign**. An adventure might take several sessions to complete, whereas a campaign might take months or even years!\n\n**The World as a Participant**\n\nAside from characters and monsters, the world of Pathfinder itself can be a force at the table and in the narrative. While the presence of the larger world can sometimes be an obvious hazard, such as when a powerful storm wreaks the countryside, the world can also act in subtle, small ways. Traps and treasures are just as important in many tales as cunning beasts. To help you understand these game elements, many of them use the same characteristics as characters and monsters. For example, most environmental hazards have a level, which indicates how dangerous they are, and the level of a magic item gives you a sense of its overall power and impact on a story.",
  },
})

export const PlayingTheGameSection = Content.defineSection('introduction/playing-the-game', {
  parent: IntroductionSection,
  content: {
    name: 'Playing the Game',
    description:
      "In a Pathfinder game, three [modes of play](content:playing-the-game/modes-of-play) determine the pacing of each scene in the story. Most of your character's time is spent in **[exploration](content:playing-the-game/exploration-mode)**, uncovering mysteries, solving problems, and interacting with other characters. [The Age of Lost Omens](content:introduction/the-age-of-lost-omens) abounds with danger, however, and characters often find themselves in an **[encounter](content:playing-the-game/encounter-mode)**, fighting savage beasts and terrifying monsters. Finally, time moves quickly when the characters enjoy **[downtime](content:playing-the-game/downtime-mode)**, a respite from the world's troubles and a chance to rest and train for future expeditions. Throughout an adventure, gameplay moves between these three modes many times, as needed for the story. The more you play the game, the more you'll see that each mode has its own play style, but moving from mode to mode has few hard boundaries.\n\nDuring the game, your character will face situations where the outcome is uncertain. A character might need to climb a sheer cliff, track down a [wounded](content:conditions/wounded) chimera, or sneak past a sleeping dragon, all of which are dangerous tasks with a price for failure. In such cases, the acting character (or characters) will be asked to attempt a [check](content:playing-the-game/checks) to determine whether or not they succeed. A check is usually made by rolling a single 20-sided die (a d20) and adding a number based on the relevant attribute. In such cases, rolling high is always good.\n\nOnce a check is rolled, the GM compares the result to a target number called the **difficulty class (DC)** to determine the outcome. If the result of the check is equal to or greater than the DC, the check is successful. If it is less, the check is a failure. Beating the DC by 10 or more is referred to as a **critical success**, which usually grants an especially positive outcome. Similarly, failing the check by 10 or more is a **critical failure** (sometimes called a fumble). This sometimes results in additional negative effects. You also often score a critical success by rolling a 20 on the die when attempting a check (before adding anything). Likewise, rolling a 1 on the die when attempting a check often results in a critical failure. Note that not all checks have a special effect on a critical success or critical failure and such results should be treated just like an ordinary success or failure instead.\n\nFor example, in pursuit of the wounded chimera, your character might find the path blocked by a fast-moving river. You decide to swim across, but the GM declares this a dangerous task and asks you to roll an [Athletics](characteristic:skill/athletics) skill check (since swimming is covered by the Athletics skill). On your character sheet, you see that your character has a +8 modifier for such checks. Rolling the d20, you get an 18, for a total of 26. The GM compares this to the DC (which was 16) and finds that you got a critical success (since the result exceeded the DC by 10). Your character swims quickly across the river and continues the pursuit, drenched but unharmed. Had you gotten a result less than 26 but equal to or greater than 16, your character would have made it halfway across the river. Had your result been less than 16, your character might have been swept downriver or, worse, been pulled under the current and begun to drown!\n\nChecks like this are the heart of the game and are rolled all the time, in every mode of play, to determine the outcome of tasks. While the roll of the die is critical, the statistic you add to the roll (called a **modifier**) often makes the difference between success and failure. Every character is made up of many such statistics governing what the character is good at, each consisting of a relevant attribute modifier plus a **proficiency bonus**, and sometimes modified further by other factors, such as bonuses or penalties from gear, spells, feats, magic items, and other special circumstances.\n\n**Proficiency** is a simple way of assessing your character's general level of training and aptitude for a given task. It is broken into five different ranks: **untrained**, **trained**, **expert**, **master**, and **legendary**. Each rank grants a different proficiency bonus. If you're untrained at a statistic, your proficiency bonus is +0—you must rely solely on the raw potential represented by your attribute modifier. If your proficiency rank for a statistic is trained, expert, master, and legendary, your bonus equals your character's level plus another number based on the rank (2, 4, 6, and 8, respectively). Proficiency ranks are part of almost every statistic in the game.",
  },
})

export const ExplorationSection = Content.defineSection('introduction/exploration', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Exploration',
    description:
      "Most of the time, your character will explore the world, interact with characters, travel from place to place, and overcome challenges. This is called [exploration](content:playing-the-game/exploration-mode). Gameplay is relatively free-form during exploration, with players responding to the narrative whenever they have an idea of what to do next. Leaving town via horseback, following the trail of a marauding orc tribe, avoiding the tribe's scouts, and convincing a local hunter to help in an upcoming fight are all examples of things that might occur during exploration.\n\nThroughout this mode of play, the GM asks the players what their characters are doing as they explore. This is important in case a conflict arises. If combat breaks out, the tasks the PCs undertook while exploring might give them an edge or otherwise inform how the combat begins.",
  },
})

export const EncountersSection = Content.defineSection('introduction/encounters', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Encounters',
    description:
      "In the course of your adventures, there will be times when a simple skill check is not enough to resolve a challenge—when fearsome monsters stand in your character's way and the only choice is to do battle. In Pathfinder, this is called an [encounter](content:playing-the-game/encounter-mode). Encounters usually involve combat, but they can also be used in situations where timing is critical, such as during a chase or when dodging hazards.\n\nWhile exploration is handled in a free-form manner, encounters are more structured. The players and GM roll **initiative** to determine who acts in what order. The encounter occurs over a number of **rounds**, each of which is equal to about 6 seconds of time in the world of the game. During a round, each participant takes a **turn**. When it's your turn to act, you can use up to three **actions**. Most simple things, such as drawing a weapon, moving a short distance, opening a door, or swinging a sword, use a single action to perform. There are also **activities** that use more than a single action to perform; these are often special abilities from your character's class and feats. One common activity in the game is casting a spell, which usually uses two actions.\n\n**Free actions**, such as dropping an object, don't count toward the three actions you can take on your turn. Finally, each character can use up to one reaction during a round. This special type of action can be used even when it's not your turn, but only in response to certain events, and only if you have an ability that allows it. Rogues, for example, can select a feat that lets them use their reaction to dodge an incoming attack.\n\nAttacking another creature is one of the most common actions in combat, and is done by using the **[Strike](content:playing-the-game/strike)** action. This requires an attack roll—a kind of check made against the **[Armor Class (AC)](content:playing-the-game/armor-class)** of the creature you're attacking. Strikes can be made using weapons, spells, or even parts of a creature's body, like a fist, claw, or tail. You add a modifier to this roll based on your proficiency rank with the type of attack you're using, your attributes, and any other bonuses or penalties based on the situation. The target's [AC](characteristic:armor-class) is calculated using their proficiency rank in the armor they're wearing and their [Dexterity modifier](characteristic:dexterity). An attack deals damage if it hits, and rolling a critical success results in the attack dealing double damage!\n\nYou can use more than one Strike action on your turn, but each additional attack after the first becomes less accurate. This is reflected by a **[multiple attack penalty](content:playing-the-game/multiple-attack-penalty)** that starts at –5 on the second attack, but increases to –10 on the third. There are many ways to reduce this penalty, and it resets at the end of your turn.\n\nIf your character finds themself the target of a magical [_lightning bolt_](ability:spell/lightning-bolt) or the victim of a venomous snake bite, you will be called on to attempt a saving throw, representing your character's ability to avoid danger or otherwise withstand an assault to their mind or body. A saving throw is a check attempted against the DC of the spell or special ability targeting your character. There are three types of saving throws, and a character's proficiency in each says a great deal about what they can endure. A **Fortitude** saving throw is used when your character's health or vitality is under attack, such as from poison or disease. A [Reflex](characteristic:reflex) saving throw is called for when your character must dodge away from danger, usually something that affects a large area, such as the scorching blast of a [_fireball_](ability:spell/fireball) spell. Finally, a [Will saving throw](characteristic:will) is often your defense against spells and effects that target your character's mind, such as a [_charm_](ability:spell/charm) or _confusion_ spell. For all saving throws, a success lessens the harmful effect, and scoring a critical success usually means your character escapes unscathed.\n\nAttacks, spells, hazards, and special abilities frequently either deal **damage** to a character or impose one or more **conditions**—and sometimes both. Damage is subtracted from a creature's **Hit Points (HP)**—a measure of health—and when a creature is reduced to 0 HP, it falls [unconscious](content:conditions/unconscious) and may die! A combat encounter typically lasts until one side has been defeated, and while this can mean retreat or surrender, it most often happens because one side is dead or [dying](content:conditions/dying). Conditions can hinder a creature for a time, limiting the actions they can use and applying penalties to future checks. Some conditions are even permanent, requiring a character to seek out powerful magic to undo their effects.",
  },
})

export const DowntimeSection = Content.defineSection('introduction/downtime', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Downtime',
    description:
      'PCs don’t have to spend every waking moment adventuring. They might also recover from wounds, plan future conquests, or pursue a trade. In Pathfinder, this is called [downtime](content:playing-the-game/downtime-mode), and it allows time to pass quickly while characters work on long-term tasks or objectives. Most characters can practice a trade in downtime, earning a few coins, but those with the right skills can also spend time crafting, creating new gear or even magic items. Characters can also use downtime to retrain, replacing one character choice with another to reflect their evolving priorities. They might also research a problem, learn new spells, or even run a business or kingdom!',
  },
})

export const KeyTermsSection = Content.defineSection('introduction/key-terms', {
  parent: PlayingTheGameSection,
  content: {
    name: 'Key Terms',
    description:
      "There are a number of important terms that you'll need to know as you create your first character or adventure. Some of the most important terms mentioned on previous pages are also included here for reference.",
  },
})

export const ActionSection = Content.defineSection('introduction/action', {
  parent: KeyTermsSection,
  content: {
    name: 'Action',
    description:
      'During encounters, each creature gets three [actions](content:playing-the-game/playing-the-game/actions) during their turn. These actions are spent to attack, interact with objects, move, and use special abilities. Actions available to all characters can be found in [Chapter 8](content:playing-the-game/basic-actions).',
  },
})

export const AncestrySection = Content.defineSection('introduction/ancestry', {
  parent: KeyTermsSection,
  content: {
    name: 'Ancestry',
    description:
      "An ancestry is the broad family of people that a character belongs to. Ancestry determines a character's starting [Hit Points](content:playing-the-game/hit-points), [languages](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [senses](content:playing-the-game/senses), and [Speed](content:playing-the-game/speed), and it grants access to ancestry feats. Ancestries can be found in [Chapter 2](content:ancestries-and-backgrounds).",
  },
})

export const ArmorClassACSection = Content.defineSection('introduction/armor-class-ac', {
  parent: KeyTermsSection,
  content: {
    name: 'Armor Class (AC)',
    description:
      'All creatures in the game have an [Armor Class](content:playing-the-game/armor-class). This score represents how hard it is to hit and damage a creature. It serves as the Difficulty Class for hitting a creature with an attack.',
  },
})

export const AttackSection = Content.defineSection('introduction/attack', {
  parent: KeyTermsSection,
  content: {
    name: 'Attack',
    description:
      'When a creature tries to harm another creature, it makes a [Strike](content:playing-the-game/strike) or uses some other attack action. Most attacks are Strikes made with a weapon, but a character might Strike with their fist, [grapple](content:skills/grapple) or [shove](content:skills/shove) with their hands, or attack with a [spell](content:spells).',
  },
})

export const AttributeModifierSection = Content.defineSection('introduction/attribute-modifier', {
  parent: KeyTermsSection,
  content: {
    name: 'Attribute Modifier',
    description:
      "Each creature has six attribute modifiers: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. Each of these numbers represents a creature's raw potential and general training. Attributes are described in full [later in this chapter](content:introduction/character-creation).",
  },
})

export const BackgroundSection = Content.defineSection('introduction/background', {
  parent: KeyTermsSection,
  content: {
    name: 'Background',
    description:
      'A background represents what a character experienced before they took up the life of an adventurer. Each background grants a feat and training in one or more skills. You can read more about backgrounds in [Chapter 2](content:ancestries-and-backgrounds/backgrounds).',
  },
})

export const BonusesAndPenaltiesSection = Content.defineSection('introduction/bonuses-and-penalties', {
  parent: KeyTermsSection,
  content: {
    name: 'Bonuses And Penalties',
    description:
      '[Bonuses](content:playing-the-game/bonuses) and [penalties](content:playing-the-game/penalties) apply to checks and certain statistics. There are several types of bonuses and penalties. If you have more than one bonus of the same type, you use only the highest bonus. Likewise, you use only the worst penalty of each type.',
  },
})

export const CheckSection = Content.defineSection('introduction/check', {
  parent: KeyTermsSection,
  content: {
    name: 'Check',
    description:
      'When a character attempts an action where success is uncertain, they may roll a [check](content:playing-the-game/checks). This is a roll of one twenty-sided die plus the named proficiency bonus. For example, a [Perception](content:playing-the-game/perception) check would add your [Perception](characteristic:perception) proficiency.',
  },
})

export const ClassSection = Content.defineSection('introduction/class', {
  parent: KeyTermsSection,
  content: {
    name: 'Class',
    description:
      "A class represents the adventuring profession chosen by a character. A character's class determines most of their proficiencies, grants the character [Hit Points](characteristic:hit-points) each time they gain a new level, and gives access to a set of class feats. Classes appear in [Chapter 3](content:classes).",
  },
})

export const ConditionSection = Content.defineSection('introduction/condition', {
  parent: KeyTermsSection,
  content: {
    name: 'Condition',
    description:
      'An ongoing effect that changes how a character can act, or that alters some of their statistics, is called a condition. The rules for the basic conditions used in the game can be found in the [Conditions Appendix](content:conditions) at the back of this book.',
  },
})

export const CurrencySection = Content.defineSection('introduction/currency', {
  parent: KeyTermsSection,
  content: {
    name: 'Currency',
    description:
      'The most common currencies in the game are gold pieces (gp) and silver pieces (sp). One gp is worth 10 sp. In addition, 1 sp is worth 10 copper pieces (cp), and 10 gp are worth 1 platinum piece (pp). Characters begin play with 15 gp (or 150 sp) to spend on equipment.',
  },
})

export const FeatSection = Content.defineSection('introduction/feat', {
  parent: KeyTermsSection,
  content: {
    name: 'Feat',
    description:
      'A feat is an ability you can select for your character due to their ancestry, background, class, general training, or skill training. Some feats grant the ability to use special actions, while others make your existing actions more effective.',
  },
})

export const GameMasterGMSection = Content.defineSection('introduction/game-master-gm', {
  parent: KeyTermsSection,
  content: {
    name: 'Game Master (GM)',
    description:
      'The Game Master is the player who adjudicates the rules and narrates the various elements of the Pathfinder story and world that the other players explore. The GM uses the rules found in Pathfinder GM Core.',
  },
})

export const GolarionSection = Content.defineSection('introduction/golarion', {
  parent: KeyTermsSection,
  content: {
    name: 'Golarion',
    description:
      'Pathfinder is set on the planet Golarion during the Age of Lost Omens. It is an ancient world with a rich diversity of people and cultures, exciting locations to explore, and deadly villains. More information on the Age of Lost Omens, the world of Golarion, and its deities can be found on [here](content:introduction/golarion-and-the-inner-sea).',
  },
})

export const HitPointsHPSection = Content.defineSection('introduction/hit-points-hp', {
  parent: KeyTermsSection,
  content: {
    name: 'Hit Points (HP)',
    description:
      '[Hit Points](content:playing-the-game/hit-points) represent the amount of punishment a creature can take before it falls [unconscious](content:conditions/unconscious) and begins [dying](content:conditions/dying). Damage decreases [Hit Points](characteristic:hit-points) on a 1-to-1 basis, while healing restores Hit Points at the same rate.',
  },
})

export const InitiativeSection = Content.defineSection('introduction/initiative', {
  parent: KeyTermsSection,
  content: {
    name: 'Initiative',
    description:
      'At the start of an encounter, all creatures involved roll for initiative to determine the order in which they act. The higher the result of its roll, the earlier a creature gets to act. Initiative and combat are described in [Chapter 8](content:playing-the-game/encounter-mode).',
  },
})

export const LevelSection = Content.defineSection('introduction/level', {
  parent: KeyTermsSection,
  content: {
    name: 'Level',
    description:
      "A level is a number that measures something's overall power. Player characters have a level, ranging from 1st to 20th, representing their level of experience. Monsters, NPCs, hazards, diseases, and poisons have levels ranging from –1 to 30 that measure the danger they pose. An item's level, usually within the range of 0 to 20 but sometimes higher, indicates its power and suitability as treasure.",
  },
})

export const NonplayerCharacterNPCSection = Content.defineSection('introduction/nonplayer-character-npc', {
  parent: KeyTermsSection,
  content: {
    name: 'Nonplayer Character (NPC)',
    description: 'A nonplayer character, controlled by the GM, interacts with players and helps advance the story.',
  },
})

export const PerceptionSection = Content.defineSection('introduction/perception', {
  parent: KeyTermsSection,
  content: {
    name: 'Perception',
    description:
      "Perception measures your character's ability to notice hidden objects or unusual situations, and it usually determines how quickly the character springs into action in combat. It is described in full in [Chapter 8](content:playing-the-game/perception).",
  },
})

export const PlayerCharacterPCSection = Content.defineSection('introduction/player-character-pc', {
  parent: KeyTermsSection,
  content: { name: 'Player Character (PC)', description: 'This is a character created and controlled by a player.' },
})

export const ProficiencySection = Content.defineSection('introduction/proficiency', {
  parent: KeyTermsSection,
  content: {
    name: 'Proficiency',
    description:
      "Proficiency is a system that measures a character's aptitude at a specific task or quality, and it has five ranks: untrained, trained, expert, master, and legendary. Proficiency gives you a bonus that's added when determining the following modifiers and statistics: AC, attack rolls, [Perception](characteristic:perception), saving throws, skills, and the effectiveness of spells. If you're untrained, your proficiency bonus is +0. If you're trained, expert, master, or legendary, your proficiency bonus equals your level plus 2, 4, 6, or 8, respectively.",
  },
})

export const RaritySection = Content.defineSection('introduction/rarity', {
  parent: KeyTermsSection,
  content: {
    name: 'Rarity',
    description:
      "Some elements of the game have a rarity to denote how often they're encountered in the game world. Rarity primarily applies to equipment and magic items, but spells, feats, and other rules elements also have a rarity. If no rarity appears in the traits of an item, spell, or other game element, it's of common rarity. [Uncommon](content:traits/uncommon) options are available only to those who have special training, grew up in a certain culture, or come from a particular part of the world. This can be explained with an “Access” entry, explaining criteria for characters to choose it as a common option. [Rare](content:traits/rare) options are almost impossible to find and are usually given out only by the GM, while [unique](content:traits/unique) ones are literally one-of-a-kind in the game. The GM might alter the way rarity works or change the rarity of individual items to suit the story they want to tell.",
  },
})

export const RoleplayingSection = Content.defineSection('introduction/roleplaying', {
  parent: KeyTermsSection,
  content: {
    name: 'Roleplaying',
    description:
      "Describing a character's actions, often while acting from the perspective of the character, is called roleplaying. When a player speaks or describes action from the perspective of a character, they are “in character.”",
  },
})

export const RoundSection = Content.defineSection('introduction/round', {
  parent: KeyTermsSection,
  content: {
    name: 'Round',
    description:
      'A round is a period of time during an [encounter](content:playing-the-game/encounter-mode) in which all participants get a chance to act. A round represents approximately 6 seconds in game time.',
  },
})

export const SavingThrowSaveSection = Content.defineSection('introduction/saving-throw-save', {
  parent: KeyTermsSection,
  content: {
    name: 'Saving Throw (Save)',
    description:
      "When a creature is subject to a dangerous effect that must be avoided, it attempts a saving throw to mitigate the effect. You attempt a saving throw automatically—you don't have to use an action or a reaction. Unlike for most checks, the character who isn't acting rolls the d20 for a saving throw, and the creature who is acting provides the DC.\n\nThere are three types of saving throws: Fortitude (to resist diseases, poisons, and physical effects), [Reflex](characteristic:reflex) (to evade effects a character could quickly dodge), and Will (to resist effects that target the mind and personality).",
  },
})

export const SkillSection = Content.defineSection('introduction/skill', {
  parent: KeyTermsSection,
  content: {
    name: 'Skill',
    description:
      "A skill represents a creature's ability to perform certain tasks that require instruction or practice. All characters are trained in certain skills due to their background and class. Skills are fully described in [Chapter 4](content:skills). Each skill includes ways anyone can use that skill even if untrained, as well as uses that require a character to be trained in the skill.",
  },
})

export const SpeedSection = Content.defineSection('introduction/speed', {
  parent: KeyTermsSection,
  content: { name: 'Speed', description: 'Speed is the distance a character can move using a single action, measured in feet.' },
})

export const SpellSection = Content.defineSection('introduction/spell', {
  parent: KeyTermsSection,
  content: {
    name: 'Spell',
    description:
      'Spells are magical effects created by performing mystical incantations and gestures known only to those with special training or inborn abilities. Casting a spell is an activity that usually uses 2 actions. Each spell specifies what it targets, the actions needed to cast it, its effects, and how it can be resisted. If a class grants spells, the basics of that ability are provided in the class description in [Chapter 3](content:classes), while the spells themselves are detailed in [Chapter 7](content:spells).\n\nSpells have ranks ranging from 1st to 10th, which measure their power; characters and monsters can usually cast only a certain number of spells of any given rank.',
  },
})

export const TraitSection = Content.defineSection('introduction/trait', {
  parent: KeyTermsSection,
  content: {
    name: 'Trait',
    description:
      'A trait is a keyword that conveys additional information about a rules element, such as which ancestry a feat belongs to or the rarity of an item. Often, a trait indicates how other rules interact with an ability, creature, item, or another rules element that has that trait.\n\nAll the traits used in this book appear in the Glossary and Index beginning on page 452. The traits page on Archives of Nethys can be found here.',
  },
})

export const TurnSection = Content.defineSection('introduction/turn', {
  parent: KeyTermsSection,
  content: {
    name: 'Turn',
    description:
      'During the course of a round, each creature takes a single turn according to initiative. A creature can typically use up to three actions during its turn.',
  },
})

export const ExampleOfPlaySection = Content.defineSection('introduction/example-of-play', {
  parent: IntroductionSection,
  content: {
    name: 'Example of Play',
    description:
      "The following example is presented to give you a better idea of how the game of Pathfinder is played. In this adventure, Erik is the GM. Luis is playing Valeros, a daring [human](trait:ancestry/human) [fighter](trait:fighter); Shay is playing Merisiel, a deadly [elven](trait:ancestry/elf) [rogue](trait:rogue), and Jessica is taking on the role of Kyra, Merisiel's wife and a compassionate human [cleric](trait:cleric) of Sarenrae. The group has chosen to investigate disappearances in a local mine.\n\nErik: The entrance to the mine is a simple iron ladder leading down into the darkness of a reinforced shaft. The sound of creaking metal echoes from below.\n\nMerisiel (Shay): The miners would need to have lights on when working. If it's dark, something must have gone wrong.\n\n**Kyra (Jessica):** I call upon the sacred light of Sarenrae and cast a golden [_light_](ability:spell/light) spell ahead of us.\n**Erik:** Radiance spills forth, illuminating further down the ladder. It descends about 20 feet before ending in a tunnel. There's nothing but packed earth and wooden reinforcement beams directly below you, and you can't see any further.\n**Merisiel (Shay):** I have [low-light vision](content:playing-the-game/low-light-vision), so I should go first to make sure it's safe. I put away my daggers so I can stealthily climb down the ladder, looking for traps as I go.\n**Erik:** Roll your [Stealth](characteristic:skill/stealth) check, but [looking for traps](content:playing-the-game/search) is a [secret](content:traits/secret) check, so I'll roll for that. What's your [Perception](content:playing-the-game/perception) modifier?\n**Merisiel (Shay):** I have a +6 to [Perception](characteristic:perception), and I rolled an 18 on Stealth.\n\nErik rolls a d20 behind his GM screen, hidden from the players' view, and gets a 17 on the die for a total of 23. There are no traps in the area that Merisiel is looking, but the result is more than enough to see a [frightened](content:conditions/frightened) kobold hiding behind a mine cart. Due to Merisiel's Stealth check, the kobold does not see her descend the ladder.\n\n**Erik:** You descend into a 30-foot-wide mining tunnel, with wooden beams reinforcing the walls and ceilings. You don't see any traps, but a reptilian face with large eyes peeks out from behind a mine cart. At a closer look, it's a kobold in a leather miner jacket.\n**Valeros (Luis):** I'll follow Merisiel down the ladder.\n**Kyra (Jessica):** Me too.\n**Erik:** As the sound of your footsteps on the iron ladder echoes through the mine, the kobold jumps out in panic! She takes a few steps further into the mine, then stops, as if she's more frightened of whatever is deeper in than of you.\n**Kyra (Jessica):** Oh no! Poor kobold!\n**Merisiel (Shay):** Can someone calm her down? I'm terrible with people!\n**Valeros (Luis):** I have a +3 [Diplomacy](characteristic:skill/diplomacy). I'll call out to her.\n**Erik:** What do you say?\n**Valeros (Luis):** \"Hello friend! Don't be scared, we're here to help!\" I rolled a 15 on my Diplomacy check.\n**Erik:** Okay! The kobold seems startled, but then runs to you for safety. \"Oh! Thank Torag you're here!\"\n**Merisiel (Shay):** Torag? She ought to thank us, or at least Sarenrae.\n**Kyra (Jessica):** That's sweet, but you don't need to scold her for my sake.\n**Valeros (Luis):** I ask the kobold who they are and what happened here.\n**Erik:** She says that her name is Krinek, and she's one of the miners who works here. \"We were looking for the miners who went missing, but when we found them, they were wrong and rotten! They attacked us and I ran away!\"\n**Valeros (Luis):** That doesn't sound good. I tell Krinek to get to safety, then advance down the tunnel with my sword and shield at the ready.\n**Kyra (Jessica):** I'll keep beside him, since I have the light, and draw my blade.\n**Erik:** As you proceed into the tunnel, you come across signs of a struggle. Half dried blood stains the earth, a trail of heavy smears suggesting that something or someone was bleeding here and then was dragged further into the mine. You think you can hear something faintly moving nearby.\n**Valeros (Luis):** That's probably not good. I vault over the mine cart to investigate.\n**Kyra (Jessica):** I'll go with him. If someone is hurt, they'll need my help.\n**Merisiel (Shay):** I'm going to draw a dagger and hide behind a mine cart.\n**Erik:** Merisiel takes cover while the two of you advance. As you approach, you begin to smell the faint but unmistakable scent of rot. Kyra's light suddenly illuminates a hulking humanoid figure with glassy eyes, its flesh rotting and beginning to peel from its bones. Despite its state of advanced decay, it moves toward you with a malevolent force. Roll for initiative! Valeros and Kyra need to roll Perception, while Merisiel should roll Stealth.\n\nEveryone rolls for their initiative. Luis gets a total of 13. Jessica rolls better for Kyra, getting a total of 14. Shay uses Stealth for Initiative, because Merisiel was hiding at the start of the fight, and rolls a 17 for a total of 25! Erik rolls for the creature, getting a 12. Erik records all these totals, putting everyone in order from highest to lowest.\n\n**Erik:** Looks like Merisiel gets to act first. Whatever that thing is, you're pretty sure it doesn't know you are there.\n**Merisiel (Shay):** Just the way I like it! For my first action, I want to move closer.\n**Erik:** You can get to within 15 feet of it with one [Stride](content:playing-the-game/stride) action.\n**Merisiel (Shay):** Excellent. For my next action, I'm going to throw my dagger at it, and then use my final action to draw another dagger.\n\nShay rolls a 13 and adds 8, due to Merisiel's skill at thrown daggers, for a total of 21, but the [range](content:playing-the-game/range-and-reach) means the attack takes a –2 penalty for a result of 19. Erik consults his notes to learn that the monster has an [AC](characteristic:armor-class) of 15.\n\n**Erik:** That's a hit! Go ahead and roll damage.\n**Merisiel (Shay):** Okay, and I get to add extra damage due to sneak attack.\n\nRogues have the ability to deal extra damage to foes that haven't acted yet in an encounter. This extra damage also applies to attacks against enemies that are distracted. Shay rolls 1d4 for the dagger and 1d6 for the sneak attack. Because Merisiel is attacking with a thrown weapon, Shay adds Merisiel's +1 Strength to damage, getting a total of 9.\n\n**Erik:** It hisses as the blade sinks into its shoulder. As it does, its flesh pops open, pus oozing in rivulets down its arm. Next up is Kyra!\n**Kyra (Jessica):** Gross! Okay, this creature looks [undead](content:traits/undead), do I know anything about that?\n**Erik:** You can think back to your cleric training to [Recall Knowledge](content:skills/recall-knowledge), spending one action. It's a secret check, so what's your [Religion](characteristic:skill/religion) modifier?\n**Kyra (Jessica):** It's +7.\n\nErik rolls a 12, adding Kyra's +7 with Religion to get a total of 19 against the DC of 16.\n\n**Erik:** Your initial suspicion was correct. This is a zombie. This one appears to be larger because it was enhanced by magic. Because you already had a hunch this was a zombie, why don't you ask another question?\n**Kyra (Jessica):** Does it have any notable weaknesses?\n**Erik:** Yes, it's vulnerable to both healing magic and slashing weapons.\n**Merisiel (Shay):** Augh! If I'd known, I would have slashed with my dagger!\n\nMerisiel's daggers have a trait called [versatile](content:traits/versatile) (slashing), which allow her to deal slashing damage instead of piercing if she chooses. Unfortunately, she didn't know that doing so would be more effective when she acted!\n\n**Kyra (Jessica):** I am going to spend my last two actions to cast [_runic weapon_](ability:spell/runic-weapon) on Valeros's sword. It gives him a +1 bonus to attack rolls and another die of damage. \"Valeros, get that thing!\"\n**Valeros (Luis):** I do what she says and get it! I spend one action to [raise my shield](content:playing-the-game/raise-a-shield) and use my final two actions to make a [Sudden Charge](trait:feat/sudden-charge)!\n\nSudden Charge is a fighter feat that lets Valeros move twice and attack at the end of his movement, all for only two actions. He rolls to attack and the die result is a 20.\n\n**Valeros (Luis):** A natural 20! With my bonus added, that must be a critical success!\n**Erik:** Your blade hits the putrid creature right in the neck, dealing double damage! However, as you do so, pus explodes out of the wound once more. Roll a [Fortitude](characteristic:fortitude) save.\n\nLuis gets to roll 2d8 because of Kyra's spell. He rolls a 9 total on those, then adds 4 because of Valeros's [Strength modifier](characteristic:strength). Because it's a critical success, he then doubles the damage. Erik adds an extra 10 damage from the zombie's slashing weakness, for a total of 36 of its 70 [Hit Points](characteristic:hit-points).\n\n**Valeros (Luis):** Aw, beans. Natural 1 on the save.\n**Erik:** And that's a critical failure, go figure. You are [sickened](content:conditions/sickened) 1, which gives you a –1 penalty to d20 rolls and AC.\n**Valeros (Luis):** I agree with Kyra, super gross. Did my strike kill it?\n**Erik:** I'm afraid not. It lunges at you, indifferent to its grievous wounds, trying to bludgeon you with its fists!\n\nErik rolls an attack roll for the zombie brute, getting a 7 on the die and adding 11 from its statistics for a total of 18. Valeros normally has an AC of 18. The attack would hit even if Valeros weren't sickened, but it misses because he Raised his Shield during his turn, increasing his AC by 2.\n\nThat is the end of the first round of combat. The second round begins immediately after this, using the same initiative order as before. The fight is far from over...",
  },
})

export const UsingThisBookSection = Content.defineSection('introduction/using-this-book', {
  parent: IntroductionSection,
  content: {
    name: 'Using this book',
    description:
      'While this chapter is here to teach you the basics of Pathfinder, the rest of this rulebook serves as a reference manual during play, and it is organized to make finding the rule you need as easy as possible. Rules are grouped together in chapters, with the early chapters focusing on character creation. The following is a summary of what you can expect to find in each chapter.',
  },
})

export const Chapter1IntroductionSection = Content.defineSection('introduction/chapter-1-introduction', {
  parent: UsingThisBookSection,
  content: {
    name: 'Chapter 1: Introduction',
    description:
      'This introduction is designed to help you understand the basics of Pathfinder. This chapter also includes the rules for building and leveling up a character, as well as an example of the character creation process. The chapter ends with an introduction to the Age of Lost Omens and its gods.',
  },
})

export const Chapter2AncestriesBackgroundsSection = Content.defineSection('introduction/chapter-2-ancestries-backgrounds', {
  parent: UsingThisBookSection,
  content: {
    name: 'Chapter 2: Ancestries & Backgrounds',
    description:
      'The rules for ancestries and heritages representing the Age of Lost Omens are in this chapter, including their ancestry feat options. Backgrounds are at the end of this chapter, along with a section about languages, as these are most often influenced by your choice of ancestry.',
  },
})

export const Chapter3ClassesSection = Content.defineSection('introduction/chapter-3-classes', {
  parent: UsingThisBookSection,
  content: {
    name: 'Chapter 3: Classes',
    description:
      'This chapter contains the rules for 8 classes. Each class entry includes guidelines on playing the class, rules for building and advancing a character of that class, sample builds, and all of the class feats available to members of that class. This chapter also includes rules for animal companions and familiars, which can be acquired by members of several different classes. At the end of this chapter are the rules for archetypes—special options available to characters as they increase in level. These rules allow a character to dabble in the abilities of another class or concept.',
  },
})

export const Chapter4SkillsSection = Content.defineSection('introduction/chapter-4-skills', {
  parent: UsingThisBookSection,
  content: {
    name: 'Chapter 4: Skills',
    description:
      "The rules for using skills are presented in this chapter, and they detail what a character can do with a given skill, based on that character's proficiency rank. Ancestry, background, and class can define some of a character's skill proficiencies, and each character can also select a few additional skills to reflect their personality and training.",
  },
})

export const Chapter5FeatsSection = Content.defineSection('introduction/chapter-5-feats', {
  parent: UsingThisBookSection,
  content: {
    name: 'Chapter 5: Feats',
    description:
      'As a character advances in level, they gain additional feats to represent their growing abilities. General feats and skill feats (which are a subset of general feats) are presented in this chapter.',
  },
})

export const Chapter6EquipmentSection = Content.defineSection('introduction/chapter-6-equipment', {
  parent: UsingThisBookSection,
  content: {
    name: 'Chapter 6: Equipment',
    description:
      'Armor, weapons, and other gear can all be found in this chapter, along with the price for services, cost of living, and animals (such as horses, dogs, and pack animals).',
  },
})

export const Chapter7SpellsSection = Content.defineSection('introduction/chapter-7-spells', {
  parent: UsingThisBookSection,
  content: {
    name: 'Chapter 7: Spells',
    description:
      "This chapter starts with rules for casting spells, determining their effects, and negating foes' spells (called counteracting). After that, the spell lists for each spellcasting tradition are included, making it easy to quickly find spells by their rank. Next are rules for every spell, presented in alphabetical order. Following the spell descriptions are all of the focus spells—special spells granted by specific class abilities and feats. While most spells appear on multiple spell lists, focus spells are granted only to members of a specific class and are grouped together by class for ease of reference. Finally, at the end of the chapter are rules for rituals, complicated and risky spells that any character can attempt.",
  },
})

export const Chapter8PlayingTheGameSection = Content.defineSection('introduction/chapter-8-playing-the-game', {
  parent: UsingThisBookSection,
  content: {
    name: 'Chapter 8: Playing the Game',
    description:
      'This important chapter contains the universal rules needed to play Pathfinder, including rules for the various modes of play, the basic actions that every character can perform, the rules for combat, and the rules for death and [dying](content:conditions/dying). Every player should be familiar with this chapter, especially the GM.',
  },
})

export const AppendicesSection = Content.defineSection('introduction/appendices', {
  parent: UsingThisBookSection,
  content: {
    name: 'Appendices',
    description:
      "The back of this book has an appendix with the rules for all of the conditions that you will find in the game. This section also includes a blank character sheet, and an index with a comprehensive glossary of common terms and traits that you'll encounter in the game.",
  },
})

export const FormatOfRulesSection = Content.defineSection('introduction/format-of-rules', {
  parent: IntroductionSection,
  content: {
    name: 'Format of Rules',
    description:
      'Throughout this rulebook, you will see formatting standards that might look a bit unusual at first. These standards are in place to make the rules elements in this book easier to recognize.\n\nThe names of specific statistics, skills, feats, actions, and some other mechanical elements in Pathfinder are capitalized. This way, when you see the statement "a [Strike](content:playing-the-game/strike) targets [Armor Class](characteristic:armor-class)," you know that both Strike and Armor Class are referring to rules.\n\nIf a word or a phrase is italicized, it\'s describing a spell or a magic item. This way, when you see the statement "the door is sealed by _lock_," you know that the word denotes the [_lock_](ability:spell/lock) spell, rather than a physical item.\n\nPathfinder also uses many terms that are typically expressed as abbreviations, like AC for Armor Class, DC for Difficulty Class, and HP for [Hit Points](characteristic:hit-points). If you\'re ever [confused](content:conditions/confused) about a game term or an abbreviation, you can always turn to the Glossary and Index, beginning on page 452, and look it up.',
  },
})

export const UnderstandingActionsSection = Content.defineSection('introduction/understanding-actions', {
  parent: FormatOfRulesSection,
  content: {
    name: 'Understanding Actions',
    description:
      'Characters and their adversaries affect the world of Pathfinder by using actions and producing effects. This is especially the case during encounters, when every action counts. When you use an action, you generate an effect. This effect might be automatic, but sometimes actions necessitate that you roll a die, and the effect is based on what you rolled.\n\nThroughout this book, you will see special icons to denote actions.',
  },
})

export const SingleActionsSection = Content.defineSection('introduction/single-actions', {
  parent: UnderstandingActionsSection,
  content: {
    name: 'Single Actions',
    description:
      "Single actions use this symbol: ◆. They're the simplest, most common type of action. You can use three single actions on your turn in an encounter, in any order you see fit.",
  },
})

export const ReactionsSection = Content.defineSection('introduction/reactions', {
  parent: UnderstandingActionsSection,
  content: {
    name: 'Reactions',
    description:
      "Reactions use this symbol: ⟲. These actions can be used even when it's not your turn. You only get one reaction per encounter round, and you can use it only when its specific trigger is fulfilled. Often, the trigger is another creature's action.",
  },
})

export const FreeActionsSection = Content.defineSection('introduction/free-actions', {
  parent: UnderstandingActionsSection,
  content: {
    name: 'Free Actions',
    description:
      "Free actions use this symbol: ◇. Free actions don't require you to spend any of your three single actions or your reaction. A free action might have a trigger like a reaction does. If so, you can use it just like a reaction—even if it's not your turn. However, you can use only one free action per trigger, so if you have multiple free actions with the same trigger, you have to decide which to use. If a free action doesn't have a trigger, you use it like a single action, just without spending any of your actions for the turn.",
  },
})

export const ActivitiesSection = Content.defineSection('introduction/activities', {
  parent: UnderstandingActionsSection,
  content: {
    name: 'Activities',
    description:
      'Activities are special tasks that you complete by spending one or more of your actions together. Usually, an activity uses two or more actions and lets you do more than a single action would allow. You have to spend all the actions an activity requires for its effects to happen. Spellcasting is one of the most common activities, as most spells take more than a single action to cast.\n\nActivities that use two actions use this symbol: ◆◆. Activities that use three actions use this symbol: ◆◆◆. A few special activities, such as spells you can cast in an instant, use a free action or a reaction.\n\nAll tasks that take longer than a turn are activities. If an activity is meant to be done during exploration, it has the exploration trait. An activity that takes a day or more of commitment and that can be done only during downtime has the downtime trait.\n\n**Action Icon Key**\n\n◆Single Action ◆◆Two-Action Activity ◆◆◆Three-Action Activity ⟲Reaction ◇Free Action',
  },
})

export const SingleActionSection = Content.linkEntity(UnderstandingActionsSection, ActionType.SingleAction)

export const TwoActionsSection = Content.linkEntity(UnderstandingActionsSection, ActionType.TwoActions)

export const ThreeActionsSection = Content.linkEntity(UnderstandingActionsSection, ActionType.ThreeActions)

export const VariableActionsSection = Content.linkEntity(UnderstandingActionsSection, ActionType.VariableActions)

export const FreeActionSection = Content.linkEntity(UnderstandingActionsSection, ActionType.FreeAction)

export const ReactionSection = Content.linkEntity(UnderstandingActionsSection, ActionType.Reaction)

export const ActivitySection = Content.linkEntity(UnderstandingActionsSection, ActionType.Activity)

export const ReadingRulesSection = Content.defineSection('introduction/reading-rules', {
  parent: FormatOfRulesSection,
  content: {
    name: 'Reading Rules',
    description:
      "**Action or Feat Name ◆** (Level)\n\n**Prerequisites** Any minimum attributes, feats, proficiency ranks, and so forth you must have to select this rules element are here. Feats also have a level prerequisite, listed above.\n**Frequency** The limit on how often you can use the ability.\n**Trigger** Reactions and some free actions have triggers that must be met before they can be used.\n**Requirements** Sometimes you must have a certain item or be in a certain circumstance to use an ability.\n\nThis section describes the effects or benefits of a rules element. If the rule is an action, it explains what the effect is or what you must roll. If it's a feat that modifies an existing action or grants a constant effect, the benefit is explained here.\n\n**Special** Any special qualities of the rule are explained in this section. Usually this section appears in feats you can select more than once, explaining what happens when you do.\n\nSometimes an ability will grant multiple actions or an action in addition to other benefits. These are condensed into a shorter format using the same categories.\n**Action Name** ◆ (traits) **Frequency** how often it can be used; **Trigger** when a reaction or free action can be used; **Requirements** some actions require specific circumstances, listed here; **Effect** this section explains how the ability changes the world.",
  },
})

export const CharacterCreationSection = Content.defineSection('introduction/character-creation', {
  parent: IntroductionSection,
  content: {
    name: 'Character Creation',
    description:
      "Unless you're the GM, the first thing you need to do when playing Pathfinder is create your character. It's up to you to imagine your character's past experiences, personality, and worldview, and this will set the stage for your roleplaying during the game. You'll use the game's mechanics to determine your character's ability to perform various tasks and use special abilities during the game.\n\nThis section provides a step-by-step guide for creating a character using the Pathfinder rules, preceded by a guide to help you understand attribute modifiers. These modifiers are a critical part of your character, and you will be asked to make choices about them during many of the following steps. The steps of character creation are presented in a suggested order, but you can complete them in whatever order you prefer.\n\nMany of the steps on pages 18–27 instruct you to fill out fields on your character sheet. The character sheet is shown on pages 22–23; you can find a copy in the back of this book or on **paizo.com** as a free PDF. The character sheet is designed to be easy to use when you're actually playing the game, but creating a character happens in a different order, so you'll move back and forth through the character sheet as you go through the character creation process. Additionally, the character sheet includes every field you might need, even though not all characters will have something to put in each field. If a field on your character sheet is not applicable to your character, you can just leave that field blank.\n\nAll the steps of character creation are detailed on the following pages; each is marked with a number that corresponds to the sample character sheet on pages 22–23, showing you where the information goes. If the field you need to fill out is on the third or fourth page of the character sheet, which aren't shown, the text will tell you.\n\nIf you're creating a higher-level character, it's a good idea to begin with the instructions here, then turn to page 29 for instructions on leveling up characters.\n\n**Attribute Modifier Overview**\n\nEach attribute modifier starts at +0, representing the human average, but as you make character choices, you'll adjust these modifiers by applying attribute boosts, which increase an attribute modifier, and attribute flaws, which decrease an attribute modifier. As you build your character, remember to apply attribute modifier adjustments when making the following decisions.\n\n**Ancestry:** Each ancestry provides attribute boosts, and sometimes an attribute flaw. If you are taking any voluntary flaws, apply them in this step (see the sidebar on page 24).\n\n**Background:** Your character's background provides two attribute boosts.\n\n**Class:** Your character's class applies an attribute boost to their key attribute: the attribute modifier most important for that class.\n\n**Four Free Boosts:** After the other steps, you apply four more attribute boosts to attributes of your choice to finalize your starting attribute modifiers.\n\n**Attribute Boosts**\n\nAn attribute boost normally increases an attribute modifier's value by 1. However, if the attribute modifier to which you're applying an attribute boost is already +4 or higher, instead mark “partial boost” on the character sheet for that attribute. If the attribute already has a partial boost invested in it, increase the modifier by 1 and uncheck the box. At 1st level, a character can never have any attribute modifier that's higher than +4.\n\nWhen your character receives an attribute boost, the rules indicate whether it must be applied to a specific attribute modifier, to one of a limited list, or whether it is a “free” attribute boost that can be applied to any attribute modifier of your choice. Dwarves, for example, receive an attribute boost to their [Constitution modifier](characteristic:constitution) and their [Wisdom modifier](characteristic:wisdom), as well as one free attribute boost, which can be applied to any other attribute.\n\nWhen you gain multiple attribute boosts at the same time, you must apply each one to a different modifier. This means you can't apply a partial boost to an attribute modifier and apply another boost simultaneously to increase it.\n\n**Attribute Flaws**\n\nAttribute flaws are not nearly as common in Pathfinder as attribute boosts. If your character has an attribute flaw—likely from their ancestry—you decrease that attribute modifier by 1.\n\n**Overview**\n\nWhen you turn the page, you'll see a visual representation of ancestries and classes that provides at-a-glance information for players looking to make the most of their starting attribute modifiers. In the ancestries overview on page 20, each entry lists which attribute modifiers it boosts, and also indicates any attribute flaws the ancestry might have. You can find more about attribute boosts and flaws in Attribute Modifiers on page 19.\n\nThe summaries of the classes on page 21 list each class's key attribute—the attribute modifier used to calculate the potency of many of their class abilities. Characters receive an attribute boost in their key attribute when you choose their class. This summary also lists one or more secondary attribute modifiers important to members of that class.\n\nA character's background also affects their attribute modifiers, though there's more flexibility in the attribute boosts from backgrounds than in those from classes. For descriptions of backgrounds, see pages 84–88.\n\n**The Six Attribute Modifiers**\n\nOne of the most important aspects of your character is their attribute modifiers. These numbers represent your character's raw potential, and they influence nearly every other statistic on your character sheet. Determining your attribute modifiers is not done all at once, but instead happens over several steps during character creation.\n\nAttribute modifiers are split into two main groups: physical and mental. Strength, Dexterity, and Constitution are physical attribute modifiers, measuring your character's physical power, agility, and stamina. In contrast, Intelligence, Wisdom, and Charisma are mental attribute modifiers and measure your character's learned prowess, awareness, and force of personality.\n\nExcellence in an attribute modifier improves the checks and statistics related to that ability, as described below. When imagining your character, you should also decide what attribute modifiers you want to focus on to give you the best chance at success.\n\n**Strength**\n\nStrength measures your character's physical power. Strength is important if your character plans to engage in hand-to-hand combat. Your [Strength modifier](characteristic:strength) gets added to melee damage rolls and determines how much your character can carry.\n\n**Dexterity**\n\nDexterity measures your character's agility, balance, and reflexes. Dexterity is important if your character plans to make attacks with ranged weapons or use stealth to surprise foes. Your [Dexterity modifier](characteristic:dexterity) is also added to your character's [AC](characteristic:armor-class) and [Reflex](characteristic:reflex) saving throws.\n\n**Constitution**\n\nConstitution measures your character's health and stamina. Constitution is important for all characters, especially those who fight in close range. Your Constitution modifier is added to your [Hit Points](characteristic:hit-points) and [Fortitude](characteristic:fortitude) saving throws.\n\n**Intelligence**\n\nIntelligence measures how well your character can learn and reason. A high Intelligence allows your character to analyze situations and understand patterns, and it means they can become trained in additional skills and might be able to master additional languages.\n\n**Wisdom**\n\nWisdom measures your character's common sense, awareness, and intuition. High Wisdom helps your character detect hidden things and resist mental effects. Your Wisdom modifier is added to your [Perception](characteristic:perception) and [Will saving throws](characteristic:will).\n\n**Charisma**\n\nCharisma measures your character's personal magnetism and strength of personality. A high [Charisma modifier](characteristic:charisma) helps you build relationships and influence the thoughts and moods of others with social skills.",
  },
})

export const Step1CreateAConceptSection = Content.defineSection('introduction/step-1-create-a-concept', {
  parent: CharacterCreationSection,
  content: {
    name: 'Step 1: Create a Concept',
    description:
      "What sort of hero do you want to play? The answer to this question might be as simple as \"a brave warrior,\" or as complicated as \"the child of elven wanderers, raised in a city dominated by humans and devoted to Sarenrae, goddess of the sun.\" Consider your character's personality, sketch out a few details about their past, and think about how and why they adventure. You'll want to peruse Pathfinder's available ancestries, backgrounds, and classes. The summaries on pages 20–21 might help you match your concept with some of these basic rule elements. Before a game begins, it's also a good idea for the players to discuss how their characters might know each other and how they'll work together throughout the course of their adventures.\n\nEach player takes a different approach to creating a character. Some want a character who will fit well into the story, while others look for a combination of abilities that complement each other mechanically. You might combine these two approaches. There is no wrong way!\n\nOnce you have a good idea of the character you'd like to play, move on to [Step](content:playing-the-game/step) 2 to start building your character.",
  },
})

export const AncestryBackgroundClassOrDetailsSection = Content.defineSection('introduction/ancestry-background-class-or-details', {
  parent: Step1CreateAConceptSection,
  content: {
    name: 'Ancestry, Background, Class, or Details',
    description:
      "If one of Pathfinder's character ancestries, backgrounds, or classes particularly intrigues you, it's easy to build a character concept around these options. The summaries of ancestries and classes on pages 20–21 give a brief overview of these options (full details appear in Chapters 2 and 3, respectively). Each ancestry also has several heritages that might refine your concept further, such as a gnome with a stronger connection to fey magic or one who comes from the underground, or an arctic or woodland elf. Some heritages, known as versatile heritages, can even be applied to any ancestry; for instance, mortals with divine influence can be born to any ancestry as nephilim. Additionally, the game has many backgrounds to choose from, representing your character's upbringing, their family's livelihood, or their earliest profession. Backgrounds are detailed later in Chapter 2, beginning on page 84.\n\nBuilding a character around a specific ancestry, background, or class can be a fun way to interact with the world's lore. Would you like to build a typical member of your character's ancestry or class, as described in the relevant entry, or would you prefer to play a character who defies commonly held notions about their people? For example, you could play a dwarf with a wide-eyed sense of wonder and a zest for change, or a performing rogue capable of amazing acrobatic feats but with little interest in sneaking about.\n\nYou can draw your concept from any aspect of a character's details. You can use roleplaying to challenge not only the norms of Pathfinder's fictional world but even real-life societal norms. Your character might challenge gender notions, explore cultural identity, have a disability, or any combination of these suggestions. Your character can live any life you see fit.",
  },
})

export const FaithSection = Content.defineSection('introduction/faith', {
  parent: AncestryBackgroundClassOrDetailsSection,
  content: {
    name: 'Faith',
    description:
      "Perhaps you'd like to play a character who is a devout follower of a specific deity. Pathfinder is a rich world with myriad faiths and philosophies spanning a wide pantheon, from Cayden Cailean, the Drunken Hero of good-hearted adventuring; to Desna, the Song of Spheres and goddess of dreaming and the stars; to Iomedae, the Inheritor, goddess of honor, justice, and rulership. Pathfinder's major deities appear on pages 35–39. Your character might be so drawn to a particular faith that you decide they should be a cleric of that deity; they might instead be a lay worshipper who applies their faith's teachings to daily life, or simply the child of devout parents.",
  },
})

export const YourAlliesSection = Content.defineSection('introduction/your-allies', {
  parent: AncestryBackgroundClassOrDetailsSection,
  content: {
    name: 'Your Allies',
    description:
      "You might want to coordinate with other players when forming your character concept. Your characters could have something in common already; perhaps they are relatives, or travelers from the same village, or maybe they met each other during a different adventure in their backstory. You might discuss mechanical aspects with the other players, creating characters whose combat abilities complement each other. In the latter case, it can be helpful for a party to include characters who deal damage, characters who can absorb damage, and characters who can heal and support their allies. However, Pathfinder's classes include a lot of choices, and there are many options for building each type of character, so don't let these broad categories restrict your decisions.\n\n**Character Sheet**\n\nOnce you’ve developed your character’s concept, jot down a few sentences summarizing your ideas under the Notes section on the third page of your character sheet. Record any of the details you’ve already decided, such as your character’s name, on the appropriate lines on the first page.",
  },
})

export const Step2StartBuildingAttributeModifiersSection = Content.defineSection('introduction/step-2-start-building-attribute-modifiers', {
  parent: CharacterCreationSection,
  content: {
    name: 'Step 2: Start Building Attribute Modifiers',
    description:
      "At this point, you need to start building your character's attribute modifiers. See the overview of attribute modifiers on page 19 for more information about these important aspects of your character and an overview of the process.\n\nYour character's attribute modifiers each start at +0, and as you select your ancestry, background, and class, you'll apply attribute boosts, which increase a modifier by 1, and attribute flaws, which decrease a modifier by 1. At this point, just note a +0 in each attribute modifier and familiarize yourself with the rules for attribute boosts and flaws on page 19. This is also a good time to identify which attribute modifiers will be most important to your character; for instance, if you want to play a dashing and nimble archer, you might want to focus on a character with a high Dexterity attribute (to ensure they're good with ranged weapons) who also has a bit of Charisma (to fast-talk the authorities if they get caught). See The Six Attribute Modifiers on page 19 and the class summaries on page 21 for more information.",
  },
})

export const Step3SelectAnAncestrySection = Content.defineSection('introduction/step-3-select-an-ancestry', {
  parent: CharacterCreationSection,
  content: {
    name: 'Step 3: Select an Ancestry',
    description:
      "Select an ancestry for your character. The ancestry summaries on page 20 provide an overview of Pathfinder's core ancestry options, and each is fully detailed in Chapter 2. Ancestry determines your character's size, [Speed](characteristic:speed), and languages, and contributes to their [Hit Points](characteristic:hit-points). Each also grants attribute boosts and attribute flaws to represent the ancestry's basic capabilities.\n\nYou'll make four decisions when you select your character's ancestry:\n\n- Pick the ancestry itself.\n\n- Select a heritage from those available within that ancestry, further defining the traits your character was born with.\n\n- Assign any free attribute boosts and decide if you are taking any voluntary flaws.\n\n- Choose an ancestry feat, representing an ability your hero learned at an early age.\n\n**Alternate Ancestry Boosts**\n\nThe attribute boosts and flaws listed in each ancestry represent general trends or help guide players to create the kinds of characters from that ancestry most likely to pursue the life of an adventurer. However, ancestries aren’t a monolith. You always have the option to replace your ancestry’s listed attribute boosts and attribute flaws entirely and instead select two free attribute boosts when creating your character.\n\n**Character Sheet**\n\nWrite your character’s ancestry and heritage in the appropriate space at the top of your character sheet’s first page. Adjust your attribute modifiers, adding 1 to an attribute modifier if you gained an attribute boost from your ancestry, and subtracting 1 from an attribute modifier if you gained an attribute flaw from your ancestry. Note the number of Hit Points your character gains from their ancestry—you’ll add more to this number later. Finally, in the appropriate spaces, record your character’s size, Speed, and languages. If your character’s ancestry provides them with special abilities, write them in the appropriate spaces, such as darkvision in the Senses section on the first page and innate spells on the fourth page. Write the ancestry feat you selected in the Ancestry Feat section on your character sheet’s second page.\n\n**Optional: Voluntary Flaws**\n\nSometimes, it’s fun to play a character with a major flaw regardless of your ancestry. You can elect to take additional attribute flaws when applying the attribute boosts and attribute flaws from your ancestry. This is purely for roleplaying a highly flawed character, and you should consult with the rest of your group if you plan to do this! You can’t apply more than one flaw to any single attribute modifier.",
  },
})

export const Step4PickABackgroundSection = Content.defineSection('introduction/step-4-pick-a-background', {
  parent: CharacterCreationSection,
  content: {
    name: 'Step 4: Pick a Background',
    description:
      "Your character's background might represent their upbringing, an aptitude they've been honing since their youth, or another aspect of their life before they became an adventurer. Character backgrounds appear in Chapter 2, starting on page 84. They typically provide two attribute boosts (one that can be applied to either of two specific attribute modifiers, and one that is free), training in a specific skill, training in a Lore skill, and a specific skill feat.\n\n**Character Sheet**\n\nRecord your character’s background in the space at the top of the first page of your character sheet. Adjust your attribute modifiers, adding 1 to an attribute modifier if you gained an attribute boost from your background. Record the skill feat the background provides in the Skill Feat section of your character sheet’s second page. On the first page, check the “T” box next to the name of the specific skill and for one Lore skill to indicate your character is trained, then write the name of the Lore skill granted by your background.",
  },
})

export const Step5ChooseAClassSection = Content.defineSection('introduction/step-5-choose-a-class', {
  parent: CharacterCreationSection,
  content: {
    name: 'Step 5: Choose a Class',
    description:
      "At this point, you need to decide your character's class. A class gives your character access to a suite of heroic abilities, determines how effectively they fight, and governs how easily they can shake off or avoid certain harmful effects. Each class is fully detailed in Chapter 3, but the summaries on page 21 provide an overview of each.\n\nYou don't need to write down all of your character's class features yet. You simply need to know which class you want to play, which determines the attribute modifiers that will be most important for your character.\n\n**Character Sheet**\n\nWrite your character’s class in the space at the top of the first page of your character sheet, then write “1” in the Level box to indicate that your character is 1st level. Next to the attribute modifiers, note the class’s key attribute modifier, and add 1 to that attribute modifier from the attribute boost the class provides. Don’t worry about recording the rest of your character’s class features and abilities yet—you’ll handle that in [Step](content:playing-the-game/step) 7.",
  },
})

export const Step6FinishAttributeModifiersSection = Content.defineSection('introduction/step-6-finish-attribute-modifiers', {
  parent: CharacterCreationSection,
  content: {
    name: 'Step 6: Finish Attribute Modifiers',
    description:
      "Now that you've made the main mechanical choices about your character, it's time to finalize their attribute modifiers. Do these two things:\n\n- First, make sure you've applied all the attribute boosts and attribute flaws you've noted in previous steps (from your ancestry, background, and class).\n\n- Then, apply four free attribute boosts to your character's attribute modifiers. Choose a different attribute modifier for each and increase that attribute modifier by 1.\n\nRemember that each attribute boost adds 1 to the base modifier of +0, and each attribute flaw subtracts 1. You should have no attribute modifier lower than -1 or higher than +4.\n\n**Character Sheet**\n\nWrite your character’s starting attribute modifiers in the box provided for each on the first page.",
  },
})

export const Step7RecordClassDetailsSection = Content.defineSection('introduction/step-7-record-class-details', {
  parent: CharacterCreationSection,
  content: {
    name: 'Step 7: Record Class Details',
    description:
      "Now, record all the benefits and class features that your character receives from the class you've chosen. While you've already noted your key attribute modifier, you'll want to be sure to record the following class features:\n\n- To determine your character's total starting [Hit Points](characteristic:hit-points), add together the number of Hit Points your character gains from their ancestry (chosen in [Step](content:playing-the-game/step) 3) and the number of Hit Points they gain from their class.\n\n- The Initial Proficiencies section of your class entry indicates your character's starting proficiency ranks in a number of areas. Choose which skills your character is trained in and record those, along with the ones set by your class. If your class would make you trained in a skill you're already trained in (typically due to your background), you can select another skill to become trained in.\n\n- See the class advancement table in your class entry to learn the class features your character gains at 1st level. You already chose an ancestry, background, and free attribute boosts, but these are listed in the table as a reminder. Some class features require you to make additional choices, such as selecting spells.\n\n**Character Sheet**\n\nWrite your character’s total Hit Points on the first page of your character sheet. Use the proficiency fields (the boxes marked “T,” “E,” “M,” and “L”) on your character sheet to record your character’s initial proficiencies in [Perception](characteristic:perception), saving throws, and the skills granted by their class; mark “T” if your character is trained, or “E” if your character is an expert. Indicate which additional skills you chose for your character to be trained in by marking the “T” proficiency box for each skill you selected. Likewise, record your character’s armor proficiencies in the [Armor Class](characteristic:armor-class) section at the top of the first page and their weapon proficiencies at the bottom of the first page. Record all other class feats and abilities on the second page. Don’t worry yet about finalizing any values for your character’s statistics—you’ll handle that in Step 9.",
  },
})

export const Step8BuyEquipmentSection = Content.defineSection('introduction/step-8-buy-equipment', {
  parent: CharacterCreationSection,
  content: {
    name: 'Step 8: Buy Equipment',
    description:
      "At 1st level, your character has 15 gold pieces (150 silver pieces) to spend on armor, weapons, and other basic equipment. Your character's class lists the types of weapons and armor with which they are trained (or better!). Their weapons determine how much damage they deal in combat, and their armor influences their [Armor Class](characteristic:armor-class); these calculations are covered in more detail in [Step](content:playing-the-game/step) 10.\n\nYou'll also want equipment like rope, torches, and other traveling gear, and maybe even an alchemical healing item or two if you get into a pinch. For more on the available equipment and how much it costs, see Chapter 6—there are even starting loadouts listed for each class on page 268 for quicker selection and to give you a sense of what items and equipment certain classes prioritize.\n\n**Character Sheet**\n\nOnce you’ve spent your character’s starting wealth, calculate any remaining gp, sp, and cp they might still have and write those amounts in the Inventory section on the second page. Record your character’s weapons in the Melee Strikes and Ranged Strikes sections of the first page, depending on the weapon, and the rest of their equipment in the Inventory section on the second page. You’ll calculate specific numbers for melee Strikes and ranged Strikes with the weapons in Step 9 and for AC when wearing that armor in Step 10.",
  },
})

export const Step9CalculateModifiersSection = Content.defineSection('introduction/step-9-calculate-modifiers', {
  parent: CharacterCreationSection,
  content: {
    name: 'Step 9: Calculate Modifiers',
    description:
      "With most of the big decisions for your character made, it's time to calculate the modifiers for each of the following statistics. If your proficiency rank for a statistic is trained, expert, master, or legendary, your bonus equals your character's level plus another number based on the rank (2, 4, 6, and 8, respectively). If your character is untrained, your proficiency bonus is +0.\n\n**Spells and Spellcasting**\n\nMany characters can learn a few cantrips or focus spells, but the bard, cleric, druid, witch, and wizard all gain spellcasting—the ability to cast a wide variety of spells. If your character’s class grants spells, you should take time during [Step](content:playing-the-game/step) 7 to learn about the spells they know and how to cast them. The fourth page of the character sheet provides space to note your character’s magic tradition and their proficiency rank for their [spell attack modifier](characteristic:spell-attack) and [spell DC](characteristic:spell-dc). It also gives space to record the spells in your character’s repertoire or spellbook. Each class determines how and which spells a character can cast, but the spells themselves and detailed rules for spellcasting are located in Chapter 7.",
  },
})

export const Step9CalculateModifiersPerceptionSection = Content.defineSection('introduction/step-9-calculate-modifiers/perception', {
  parent: Step9CalculateModifiersSection,
  content: {
    name: 'Perception',
    description:
      "Your character's [Perception](characteristic:perception) modifier measures how alert they are and is equal to their proficiency bonus in Perception plus their [Wisdom modifier](characteristic:wisdom). See page 404 for more details.",
  },
})

export const SavingThrowsSection = Content.defineSection('introduction/saving-throws', {
  parent: Step9CalculateModifiersSection,
  content: {
    name: 'Saving Throws',
    description:
      "For each kind of saving throw, add your character's [Fortitude](characteristic:fortitude), [Reflex](characteristic:reflex), or Will proficiency bonus (as appropriate) plus the attribute modifier associated with that kind of saving throw. For Fortitude saving throws, use your character's [Constitution modifier](characteristic:constitution). For Reflex saving throws, use your character's [Dexterity modifier](characteristic:dexterity). For [Will saving throws](characteristic:will), use your character's [Wisdom modifier](characteristic:wisdom). Then add in any bonuses or penalties from abilities, feats, or items that always apply (but not modifiers, bonuses, or penalties that apply only in certain situations). Record this number on the line for that saving throw.",
  },
})

export const MeleeStrikesAndRangedStrikesSection = Content.defineSection('introduction/melee-strikes-and-ranged-strikes', {
  parent: Step9CalculateModifiersSection,
  content: {
    name: 'Melee Strikes and Ranged Strikes',
    description:
      "Next to where you've written your character's melee and ranged weapons, calculate the modifier to [Strike](content:playing-the-game/strike) with each weapon and how much damage that Strike deals. The modifier for a Strike is equal to your character's proficiency bonus with the weapon plus an attribute modifier (usually Strength for melee Strikes and Dexterity for ranged Strikes). You also add any item bonus from the weapon and any other permanent bonuses or penalties. You also need to calculate how much damage each weapon's Strike deals. Melee weapons usually add your character's [Strength modifier](characteristic:strength) to damage rolls, while ranged weapons might add some or all of your character's Strength modifier, depending on the weapon's traits. See the weapon entries in Chapter 6 for more information.",
  },
})

export const SkillsSection = Content.defineSection('introduction/skills', {
  parent: Step9CalculateModifiersSection,
  content: {
    name: 'Skills',
    description:
      "In the second box to the right of each skill on your character sheet, there's an abbreviation to remind you of the attribute modifier for that skill. For each skill in which your character is trained, add your proficiency bonus for that skill (typically +3 for a 1st-level character) to the indicated attribute's modifier, as well as any other applicable bonuses and penalties, to determine the total modifier for that skill. For skills your character is untrained in, use the same method, but your proficiency bonus is +0.\n\n**Character Sheet**\n\nFor [Perception](characteristic:perception) and saving throws, write your proficiency bonus and the appropriate attribute modifier in the boxes provided, then record the total modifier in the large space. Record the proficiency bonuses, attribute modifiers, and total modifiers for your melee Strikes and ranged Strikes in the box after the name of each weapon, and record the damage for each, along with the traits for that attack. For skills, record the attribute modifier and proficiency bonus in the appropriate box for each skill, and then write the total skill modifiers in the spaces to the left. If your character has any modifiers, bonuses, or penalties from feats or abilities that always apply, add them into the total modifiers. For ones that apply only in certain situations, note them next to the total modifiers.",
  },
})

export const Step10FinishingDetailsSection = Content.defineSection('introduction/step-10-finishing-details', {
  parent: CharacterCreationSection,
  content: {
    name: 'Step 10: Finishing Details',
    description:
      'Now add the following details to your character sheet. There are boxes for edicts and anathema, deity, age, and gender and pronouns on page 3 of the character sheet.',
  },
})

export const EdictsAndAnathemaSection = Content.defineSection('introduction/edicts-and-anathema', {
  parent: Step10FinishingDetailsSection,
  content: {
    name: 'Edicts and Anathema',
    description:
      "You can choose to take on edicts and anathema to reinforce your character's beliefs and guide how they'd react in certain situations. **Edicts** are behaviors your personal philosophy or code encourages. **Anathema** are the opposite: actions contrary to your point of view and violations of your personal code. For example, you might declare that you follow an edict to keep detailed records of any dungeon you explore, or you might consider it anathema to refuse to help a friend in need.\n\nFor most characters, these are entirely optional, though it's best to consider taking some on as you create your character to hone in on how they think. If you follow a deity, you might take inspiration from the edicts and anathema listed for them on pages 35–39. Ancestry entries list edicts and anathema prevalent among their societies.",
  },
})

export const RequiredEdictsAndAnathemaSection = Content.defineSection('introduction/required-edicts-and-anathema', {
  parent: EdictsAndAnathemaSection,
  content: {
    name: 'Required Edicts and Anathema',
    description:
      'Certain classes have anathema tied to them; for example, a cleric gains the edicts and anathema of their deity. Violating these can cause you to lose some class abilities until you atone or make amends, as described in the class.',
  },
})

export const ChangingEdictsAndAnathemaSection = Content.defineSection('introduction/changing-edicts-and-anathema', {
  parent: EdictsAndAnathemaSection,
  content: {
    name: 'Changing Edicts and Anathema',
    description:
      "Edicts and anathema can change during play as a character's beliefs evolve, or as you realize that your character's actions reflect a different set of values than you once thought. In most cases, you can just change a relevant edict or anathema and continue playing.",
  },
})

export const DeitySection = Content.defineSection('introduction/deity', {
  parent: Step10FinishingDetailsSection,
  content: {
    name: 'Deity',
    description:
      "Write down the deity your character worships, if any. Clerics must worship a deity. See pages 35–39 for more about Pathfinder's deities.",
  },
})

export const AgeSection = Content.defineSection('introduction/age', {
  parent: Step10FinishingDetailsSection,
  content: {
    name: 'Age',
    description:
      "Decide your character's age and note it on the third page of the character sheet. The description for your character's ancestry in Chapter 2 gives some guidance on the age ranges of members of that ancestry. Beyond that, you can play a character of whatever age you like. There aren't any mechanical adjustments to your character for being particularly old, but you might want to take it into account when considering your starting attribute modifiers and future advancement. Particularly young characters can change the tone of some of the game's threats, so it's recommended that characters are at least young adults.",
  },
})

export const GenderAndPronounsSection = Content.defineSection('introduction/gender-and-pronouns', {
  parent: Step10FinishingDetailsSection,
  content: {
    name: 'Gender and Pronouns',
    description:
      "Characters of all genders are equally likely to become adventurers. Record your character's gender, if applicable, and their pronouns on the third page of the character sheet.",
  },
})

export const ClassDCSection = Content.defineSection('introduction/class-dc', {
  parent: Step10FinishingDetailsSection,
  content: {
    name: 'Class DC',
    description:
      "A [class DC](characteristic:class-dc) sets the difficulty for certain abilities granted by your character's class. This DC equals 10 plus their proficiency bonus for their class DC (typically +3 for most 1st-level characters) plus the modifier for the class's key attribute modifier.",
  },
})

export const ClassDCClassDCSection = Content.linkEntity(ClassDCSection, Characteristic.ClassDC)

export const HeroPointsSection = Content.defineSection('introduction/hero-points', {
  parent: Step10FinishingDetailsSection,
  content: {
    name: 'Hero Points',
    description:
      'Your character usually begins each game session with 1 Hero Point, and you can gain additional Hero Points during sessions by performing heroic deeds or devising clever strategies. Your character can use Hero Points to gain certain benefits, such as staving off death or rerolling a d20. See page 413 for more about Hero Points.',
  },
})

export const Step10FinishingDetailsArmorClassACSection = Content.defineSection('introduction/step-10-finishing-details/armor-class-ac', {
  parent: Step10FinishingDetailsSection,
  content: {
    name: 'Armor Class (AC)',
    description:
      "Your character's [Armor Class](characteristic:armor-class) represents how difficult they are to hit in combat. To calculate your AC, add 10 plus your character's [Dexterity modifier](characteristic:dexterity) (up to their armor's Dexterity modifier cap; page 271), plus their proficiency bonus with their armor, plus their armor's item bonus to AC and any other permanent bonuses and penalties.",
  },
})

export const BulkSection = Content.defineSection('introduction/bulk', {
  parent: Step10FinishingDetailsSection,
  content: {
    name: 'Bulk',
    description:
      "Your character's maximum Bulk determines how much weight they can comfortably carry. If they're carrying a total amount of Bulk that exceeds 5 plus their [Strength modifier](characteristic:strength), they are [encumbered](content:conditions/encumbered). A character can't carry a total amount of Bulk that exceeds 10 plus their Strength modifier. The Bulk your character is carrying equals the sum of all of their items; keep in mind that 10 light items make up 1 Bulk. You can find out more about Bulk in Chapter 6.",
  },
})

export const SampleCharacterSection = Content.defineSection('introduction/sample-character', {
  parent: CharacterCreationSection,
  content: { name: 'Sample Character', description: 'This step-by-step example illustrates the process of creating a Pathfinder character.' },
})

export const Steps1And2Section = Content.defineSection('introduction/steps-1-and-2', {
  parent: SampleCharacterSection,
  content: {
    name: 'Steps 1 and 2',
    description:
      "Adam is making his first Pathfinder character. After talking about it with the rest of the group, he's decided to make a [dwarf](trait:ancestry/dwarf) [druid](trait:druid). After jotting down a few ideas, he begins by writing down a +0 for each attribute modifier.",
  },
})

export const Step3Section = Content.defineSection('introduction/step-3', {
  parent: SampleCharacterSection,
  content: {
    name: 'Step 3',
    description:
      'Adam looks up the dwarf entry in Chapter 2. He records the attribute boosts to his Constitution and Wisdom modifiers (bringing both up to +1). He also applies the attribute flaw to his Charisma, dropping it to –1. For his free attribute boost, he chooses Dexterity to boost his defenses, raising it to +1 as well. He also records the 10 [Hit Points](characteristic:hit-points) the ancestry gives him. Next, he returns to his character sheet to record the size, [Speed](characteristic:speed), language, and darkvision ability he gets from being a dwarf. Finally, he decides on a heritage, writing “rock dwarf” next to dwarf, and he picks an ancestry feat, deciding on [Rock Runner](trait:ancestry/dwarf/rock-runner), to show his character’s strong connection to stone.',
  },
})

export const Step4Section = Content.defineSection('introduction/step-4', {
  parent: SampleCharacterSection,
  content: {
    name: 'Step 4',
    description:
      'Looking through the backgrounds, Adam likes the idea of a solitary dwarven druid, and the [nomad](trait:background/nomad) background makes for a good choice. For the first attribute boost granted by the background, Adam chooses Wisdom, and for the free attribute boost, he chooses Constitution, taking both up to +2. On the second page, he writes “[Assurance](trait:feat/assurance) ([Survival](characteristic:skill/survival))” in the Skill Feats area, on the Background line. Finally, returning to the first page, he writes “cave” next to the first Lore skill entry and checks the box under the “T” for that skill and Survival.',
  },
})

export const Step5Section = Content.defineSection('introduction/step-5', {
  parent: SampleCharacterSection,
  content: {
    name: 'Step 5',
    description:
      'Adam writes “druid” on the class line of his character sheet and fills in the number 1 in the level box. The druid class grants an attribute boost to its key attribute, which is Wisdom, so Adam’s character has his Wisdom raised to +3.',
  },
})

export const Step6Section = Content.defineSection('introduction/step-6', {
  parent: SampleCharacterSection,
  content: {
    name: 'Step 6',
    description:
      'Adam applies four more attribute boosts to determine his starting attribute modifiers. After giving it some thought, he applies them to Wisdom (raising it to +4), since that’s the most important attribute modifier for his class, and to Strength, Dexterity, and Constitution (raising them to +1, +2, and +3, respectively) to make him better in combat. He then writes his final attribute modifiers down on his character sheet.',
  },
})

export const Step7Section = Content.defineSection('introduction/step-7', {
  parent: SampleCharacterSection,
  content: {
    name: 'Step 7',
    description:
      "As Adam applies his class, he has a number of things to figure out. First, he starts by recording all of his initial proficiencies, marking the appropriate boxes in the [Armor Class](characteristic:armor-class), Saving Throws, Weapon Proficiencies, Spell Attack Modifier, and Spell DC areas of his sheet. Turning to skills, he marks [Nature](characteristic:skill/nature) as trained and notes that once he picks his druid order, he'll become trained in another skill determined by that order. He then gets to choose two more skills (if he had a higher Intelligence, he would have gotten more). He decides on [Athletics](characteristic:skill/athletics) and [Medicine](characteristic:skill/medicine), marking both of them as trained. Next, he adds the 8 [Hit Points](characteristic:hit-points) from the druid class and his [Constitution modifier](characteristic:constitution) of +3 to the 10 Hit Points from his dwarf ancestry for an impressive 21 total Hit Points.\n\nMoving on to class features, Adam chooses the Animal Empathy feat from voice of nature and marks that and the [Shield Block](trait:feat/shield-block) feat in the class feats and features area. He makes note of the anathema for being a druid and records Wildsong in his language section. Next, he looks through the druid orders and decides upon the untamed order, which gives him his final trained skill ([Intimidation](characteristic:skill/intimidation)), the ability to cast [_untamed shift_](ability:spell/untamed-shift), and the [Untamed Form](trait:feat/untamed-form) feat, which lets him cast a focus spell to turn into an animal. He writes these spells in the focus spell area of his character sheet. Because he has two focus spells, he notes that he has 2 Focus Points to use to cast these spells.\n\nFinally, a druid can cast a limited number of primal spells. Although he can change them every morning, Adam is curious, and he turns to Chapter 7: Spells to decide what spells he might cast. He jots down five cantrips and two 1st-rank spells and marks them as prepared.",
  },
})

export const Step8Section = Content.defineSection('introduction/step-8', {
  parent: SampleCharacterSection,
  content: {
    name: 'Step 8',
    description:
      'Next up, Adam turns to Chapter 6: Equipment. He’s trained in medium armor and chooses hide armor. For weapons, he decides on a spear, but he buys two just in case he wants to throw the first one. He writes all of these on the front of his character sheet. Adam lists the spear under both melee Strikes and ranged Strikes, and he also writes the claws he gains from untamed shift under his melee Strikes, because he’s sure that he’ll be casting that spell a lot. He records the rest of his gear in the Inventory section on the second page, along with any currency left over after buying his starting gear.',
  },
})

export const Step9Section = Content.defineSection('introduction/step-9', {
  parent: SampleCharacterSection,
  content: {
    name: 'Step 9',
    description:
      'Adam records all of the attribute modifiers for [Perception](characteristic:perception), saving throws, Strikes, and skills. He then puts a "+3" in the box marked Prof to indicate his proficiency bonus for each statistic he’s trained in (1 for his level, plus 2 for being trained) and "+5" in any that he is an expert. Then, he adds up his modifiers for each statistic.',
  },
})

export const Step10Section = Content.defineSection('introduction/step-10', {
  parent: SampleCharacterSection,
  content: {
    name: 'Step 10',
    description:
      'Finally, Adam fills out the final details of his character, calculating his [AC](characteristic:armor-class) and Bulk limits. Last but not least, he fills in some last-minute information about his character and decides on a name. Gar the dwarf druid is ready for his first adventure!',
  },
})

export const LevelingUpSection = Content.defineSection('introduction/leveling-up', {
  parent: IntroductionSection,
  content: {
    name: 'Leveling Up',
    description:
      "With each terrifying beast and deadly trap bested, a character earns Experience Points (XP) that allow them to increase in level. Each level grants greater skill, increased resiliency, and new capabilities, allowing your character to face even greater challenges and go on to earn even more impressive rewards.\n\nEach time your character reaches 1,000 Experience Points, their level increases by 1. On your character sheet, indicate your character's new level beside the name of their class, and deduct 1,000 XP from their XP total. If you have any Experience Points left after this, record them—they count toward your next level, so your character is already on their way to advancing yet again!\n\nNext, return to your character's class entry. Increase your character's total [Hit Points](characteristic:hit-points) by the number indicated for your class. Then, take a look at the class advancement table and find the row for your character's new level. Your character gains all the abilities listed for that level, including new abilities specific to your class and additional benefits all characters gain as they level up. For example, all characters gain four attribute boosts at 5th level and every 5 levels thereafter.\n\nYou can find all the new abilities specific to your class, including class feats, right in your class entry, though you can also use class feats to take an archetype (page 215). Your character's class entry also explains how to apply any attribute boosts and skill increases your character gains. If they gain an ancestry feat, head back to the entry for your character's ancestry in Chapter 2 and select another ancestry feat from the list of options. If they gain a skill increase, refer to Chapter 4 when deciding which skill to apply it to. If they gain a general feat or a skill feat, you can choose from the feats listed in Chapter 5. If they can cast spells, see the class entry for details on adding spell slots and spells. It's also a good idea to review your character's spells in Chapter 7 and see if there are heightened versions they can now cast.\n\nOnce you've made all your choices for your character's new level, be sure to go over your character sheet and adjust any values that have changed. At a bare minimum, your trained or higher proficiency bonuses all increase by 1 because you've gained a level, so your [AC](characteristic:armor-class), attack rolls, [Perception](characteristic:perception), saving throws, skill modifiers, [spell DC](characteristic:spell-dc), and [class DC](characteristic:class-dc) all increase by at least 1. You might need to change other values because of skill increases, attribute boosts, or class features that either increase your proficiency rank or increase other statistics at certain levels. If an attribute boost increases your character's [Constitution modifier](characteristic:constitution), recalculate their maximum Hit Points using their new Constitution modifier (typically this adds 1 Hit Point per level). If an attribute boost increases your character's [Intelligence modifier](characteristic:intelligence), they become trained in an additional skill and language. Some feats grant a benefit based on your level, such as Toughness, and these benefits are adjusted whenever you gain a level as well.\n\nYou can perform the steps in the leveling-up process in whichever order you want. For example, if you wanted to take the skill feat Intimidating Prowess as your skill feat at 10th level, but your character's [Strength modifier](characteristic:strength) was only +2, you could first increase their Strength modifier to +3 using the attribute boosts gained at 10th level, and then take Intimidating Prowess as a skill feat at the same level.\n\n**Leveling-up Checklist**\n\nEvery time you gain a level, make sure you do each of the following:\n\n- Increase your level by 1 and subtract 1,000 XP from your XP total.\n\n- Increase your maximum Hit Points by the amount listed in your class entry in Chapter 3.\n\n- Add class features from your class advancement table, including attribute boosts and skill increases.\n\n- Select feats as indicated on your class advancement table. For ancestry feats, see Chapter 2. For class feats, see your class entry in Chapter 3. For general feats and skill feats, see Chapter 5.\n\n- Add spells and spell slots if your class grants spellcasting. See Chapter 7 for spells.\n\n- Increase all of your trained or higher proficiency bonuses by 1 from your new level, and make other increases to your proficiency bonuses as necessary from skill increases or other class features. Increase any other statistics that changed as a result of attribute boosts or other abilities.\n\n- Adjust bonuses from feats and other abilities that are based on your level.",
  },
})

export const GolarionAndTheInnerSeaSection = Content.defineSection('introduction/golarion-and-the-inner-sea', {
  parent: IntroductionSection,
  content: {
    name: 'Golarion and the Inner Sea',
    description:
      "While some players prefer to create a character and define them solely through roleplay, other players may wish to tie their character into the world through backstory and motives. Knowing the setting of the world you intend to play in can help flesh out your character, or even give rise to new ideas for a character that you hadn't considered.\n\nThe Pathfinder Roleplaying Game rules come with their own default setting, known as Golarion. Golarion is a world of magic, strange beasts and monsters, dragons, sword-fighting adventure, and even some elements of science fiction and technology. It draws inspiration from many real-world nations and cultures, while combining it with fantasy to make it a separate, unique place. Many disparate characters are at home in Golarion's setting, and there are many historical events, people, and plot hooks that a player can base a character around.",
  },
})

export const TheAgeOfLostOmensSection = Content.defineSection('introduction/the-age-of-lost-omens', {
  parent: GolarionAndTheInnerSeaSection,
  content: {
    name: 'The Age of Lost Omens',
    description:
      'For most of Golarion’s existence, arcane prophecy and divine visions foretold of major events and great heroes. In 4606 ar, prophecy decreed that the God of Humanity, Aroden, would return to Golarion and usher in a new age of glory. Instead, Aroden died, destroying the reliability of prophecy with him. Unbound and unguided by fate, the people of Golarion are now free to carve out their own destinies in the current era, the Age of Lost Omens.',
  },
})

export const WhatDoesMyCharacterKnowSection = Content.defineSection('introduction/what-does-my-character-know', {
  parent: TheAgeOfLostOmensSection,
  content: {
    name: 'What Does My Character Know?',
    description:
      "As someone who lives in a magical fantasy world, a person from Golarion has a different set of assumptions than someone from modern Earth. The following are some of these setting assumptions to keep in mind as you create your character. For more information on the world of Golarion, see the Pathfinder Lost Omens World Guide for a basic primer, and the Lost Omens setting line for a deeper look at different parts of the world.\n\n- Golarion is magical. Stories of wizards who can cast spells and pious servants of the gods who can conjure miracles are commonplace, and people know that they are real. While very powerful magicians are rare, most villages have a few people who have some minor magical ability.\n\n- Golarion has technology. The concept of a flintlock pistol or a clockwork machine isn't baffling to most people, though there are exceptions in some regions. However, the line between technology and magic is fuzzy for many, and they might easily mistake one for the other!\n\n- Golarion is multicultural. Much like the real world, Golarion has many different nations and cultures all across the globe. Magical transportation, historical explorations, and well-trod trade routes have seen people from all over the world travel to other locales. While immigrants and travelers from other continents may not be common, they're certainly not impossible.\n\n- Golarion is ancient. The known history of Golarion spans nearly 6,000 years, and that doesn't include the history that people don't know about! This long and storied past means that there's always some new secret or discovery to be dug up by scholars—or some ancient curse or threat waiting to be uncovered and set free.\n\n- Golarion is dangerous. There's almost always something causing trouble on Golarion, from bandits to dragons to corrupt nobles and would-be tyrants. Those who seek to travel look to brave adventurers to forge the way, ensuring their safety in a frightening world!\n\n**Adjusting the Setting**\n\nFeel free to make Golarion your own! If something we write in our books gets in the way of a concept you want to play, ask your group and your GM if you can change it. What's important isn't that you agree with the “official” material that we publish, but that the people you play with facilitate communal storytelling.\n\nIn fact, you don't have to use this setting! While the Pathfinder RPG rules do make some assumptions about the world, many of these assumptions are common within the fantasy genre. Elements that are more specific to Golarion are often confined to certain feats and archetypes, which you can change and remove as you see fit. You can easily use the rules of Pathfinder to run a different setting, or a world of your own creation.\n\n**Pathfinder Society**\n\nA prominent group of adventurers, explorers, and chronicle-keepers, the Pathfinder [Society](characteristic:skill/society) is well known across Golarion. This name is shared with Paizo's official organized play campaign played around our world. Visit **PathfinderSociety.club** to learn how you can participate!",
  },
})

export const TheInnerSeaRegionSection = Content.defineSection('introduction/the-inner-sea-region', {
  parent: GolarionAndTheInnerSeaSection,
  content: {
    name: 'The Inner Sea Region',
    description:
      'Because Golarion is so large, much of the adventures and information we publish is focused on a specific region of the world. This region is known as the Inner Sea region, consisting of the northern continent of Avistan and half of the southern continent known as Garund. The titular Inner Sea was created when a meteor struck the planet in an event known as Earthfall, which created a long gulf that is now filled with water.\n\nFor simplicity, the Inner Sea region is further divided into the following ten regions, which each have different themes. These themes can help you tie your character to the world, giving them a backstory that feels like part of a larger story. Note that some of these themes are based on rules and lore from other books, giving you even more character possibilities.',
  },
})

export const RegionalLanguagesSection = Content.defineSection('introduction/regional-languages', {
  parent: TheInnerSeaRegionSection,
  content: {
    name: 'Regional Languages',
    description:
      'These regional languages are uncommon outside the region of their genesis. A character hailing from one of the regions listed below automatically has access to that language. In the Inner Sea region, the language referred to as Common elsewhere in the rules is the same as Taldane.\n\n## Table 2-3: Regional Language\n\n| **Language** | **Speakers** |\n|---|---|\n| Hallit | Broken Lands, Eye of Dread, Saga Lands |\n| Kelish | Golden Road |\n| Mwangi | Mwangi Expanse, the Shackles, Thuvia, Vidrian |\n| Osiriani | Geb, Katapesh, Mana Wastes, Nex, Osirion, Rahadoum, Thuvia |\n| Shoanti | Hold of Belkzen, Varisia |\n| Skald | Irrisen, Lands of the Linnorm Kings |\n| Tien | Lands of the Linnorm Kings, Realm of the Mammoth Lords, Tian Xia |\n| Varisian | Brevoy, the Gravelands, Nidal, Nirmathas, Ustalav, Varisia |\n| Vudrani | Jalmeray, Katapesh, Nex, Vudra |\n| |',
  },
})

export const ReligionSection = Content.defineSection('introduction/religion', {
  parent: IntroductionSection,
  content: {
    name: 'Religion',
    description:
      'Selection of a deity is critical for clerics, but most characters pay respect to at least one deity to find a focus in life and guide their choices, especially in times of hardship or need. Some people instead worship a group of deities arranged in a pantheon, follow a non-deific religion like the Green Faith, or adhere to a specific philosophy. Note that far more deities, religions, and philosophies exist on any world, Golarion included, than those detailed below.',
  },
})

export const DeitiesSection = Content.defineSection('introduction/deities', {
  parent: ReligionSection,
  content: {
    name: 'Deities',
    description:
      'Anyone can worship a deity, but those who do so devoutly should take care to pursue the faith’s edicts (behaviors the faith encourages) and avoid its anathemas (actions considered blasphemous, and could cause a god to revoke their blessings). Each deity below has their name and title, followed by a short description and cultural information, including the attributes for characters who have the [Raised by Belief](trait:background/raised-by-belief) background. Following that are the benefits available to the most ardent devotees of the deities. You get these benefits only if you’re a [cleric](trait:cleric) of the deity or some other rule specifically gives you a devotee benefit.\n\n**Domains**\n\nClerics and some other devotees can gain domain spells from their deities. The following domains are used by the primary deities of Golarion. See page 113 to learn how clerics gain domain spells, and find the spells on pages 372–381.\n\n**Sanctification**\n\nSome deities sanctify their clerics and similarly devoted followers. This gives the follower the holy or unholy trait. The **[holy](content:traits/holy) trait** indicates a powerful devotion to altruism, helping others, and battling against unholy forces like fiends and undead. The **[unholy](content:traits/unholy) trait**, in turn, shows devotion to victimizing others, inflicting harm, and battling celestial powers. Deities that list "must choose" mandate gaining the trait and those that list "can choose" give the devotee the option to choose the trait or not. You can have the holy trait, unholy trait, or neither, but can never have both the holy and unholy traits.\n\nSpells and other effects can also have these traits, making them more powerful against creatures with the opposite trait. Some spells and abilities have the **[sanctified](content:traits/sanctified) trait**. If you have the holy or unholy trait, your sanctified actions and spells gain the same trait.',
  },
})

export const FaithsAndPhilosophiesSection = Content.defineSection('introduction/faiths-and-philosophies', {
  parent: ReligionSection,
  content: {
    name: 'Faiths and Philosophies',
    description:
      'Of course, faith can express itself in more ways than venerating a single deity—or a deity at all. A few examples of non-deific religions and philosophies are presented below. These faiths and philosophies don’t have an external godhead that offers benefits to devotees.',
  },
})

export const IntroductionContent = [
  IntroductionSection,
  WhatIsARoleplayingGameSection,
  TheFlowOfTheGameSection,
  ThePlayersSection,
  TheGameMasterSection,
  GamingIsForAllSection,
  ToolsOfPlaySection,
  BasicsOfPlaySection,
  DefiningCharactersSection,
  CreatingANarrativeSection,
  PlayingTheGameSection,
  ExplorationSection,
  EncountersSection,
  DowntimeSection,
  KeyTermsSection,
  ActionSection,
  AncestrySection,
  ArmorClassACSection,
  AttackSection,
  AttributeModifierSection,
  BackgroundSection,
  BonusesAndPenaltiesSection,
  CheckSection,
  ClassSection,
  ConditionSection,
  CurrencySection,
  FeatSection,
  GameMasterGMSection,
  GolarionSection,
  HitPointsHPSection,
  InitiativeSection,
  LevelSection,
  NonplayerCharacterNPCSection,
  PerceptionSection,
  PlayerCharacterPCSection,
  ProficiencySection,
  RaritySection,
  RoleplayingSection,
  RoundSection,
  SavingThrowSaveSection,
  SkillSection,
  SpeedSection,
  SpellSection,
  TraitSection,
  TurnSection,
  ExampleOfPlaySection,
  UsingThisBookSection,
  Chapter1IntroductionSection,
  Chapter2AncestriesBackgroundsSection,
  Chapter3ClassesSection,
  Chapter4SkillsSection,
  Chapter5FeatsSection,
  Chapter6EquipmentSection,
  Chapter7SpellsSection,
  Chapter8PlayingTheGameSection,
  AppendicesSection,
  FormatOfRulesSection,
  UnderstandingActionsSection,
  SingleActionsSection,
  ReactionsSection,
  FreeActionsSection,
  ActivitiesSection,
  SingleActionSection,
  TwoActionsSection,
  ThreeActionsSection,
  VariableActionsSection,
  FreeActionSection,
  ReactionSection,
  ActivitySection,
  ReadingRulesSection,
  CharacterCreationSection,
  Step1CreateAConceptSection,
  AncestryBackgroundClassOrDetailsSection,
  FaithSection,
  YourAlliesSection,
  Step2StartBuildingAttributeModifiersSection,
  Step3SelectAnAncestrySection,
  Step4PickABackgroundSection,
  Step5ChooseAClassSection,
  Step6FinishAttributeModifiersSection,
  Step7RecordClassDetailsSection,
  Step8BuyEquipmentSection,
  Step9CalculateModifiersSection,
  Step9CalculateModifiersPerceptionSection,
  SavingThrowsSection,
  MeleeStrikesAndRangedStrikesSection,
  SkillsSection,
  Step10FinishingDetailsSection,
  EdictsAndAnathemaSection,
  RequiredEdictsAndAnathemaSection,
  ChangingEdictsAndAnathemaSection,
  DeitySection,
  AgeSection,
  GenderAndPronounsSection,
  ClassDCSection,
  ClassDCClassDCSection,
  HeroPointsSection,
  Step10FinishingDetailsArmorClassACSection,
  BulkSection,
  SampleCharacterSection,
  Steps1And2Section,
  Step3Section,
  Step4Section,
  Step5Section,
  Step6Section,
  Step7Section,
  Step8Section,
  Step9Section,
  Step10Section,
  LevelingUpSection,
  GolarionAndTheInnerSeaSection,
  TheAgeOfLostOmensSection,
  WhatDoesMyCharacterKnowSection,
  TheInnerSeaRegionSection,
  RegionalLanguagesSection,
  ReligionSection,
  DeitiesSection,
  FaithsAndPhilosophiesSection,
]
