import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'

export const HowToPlaySection = Content.defineSection('how-to-play', {
  content: {
    name: 'How to Play',
    description:
      'Imagine a world of bold warriors, mighty wizards, and terrible monsters.\n\nImagine a world of ancient ruins, vast caverns, and great wild wastes where only the bravest heroes dare to tread.\n\nImagine a world of swords and magic, a world of elves and goblins, a world of giants and dragons.\n\nThis is the world of the DUNGEONS & DRAGONS® Roleplaying Game (also referred to as D&D), the pinnacle of fantasy roleplaying games. You take on the role of a legendary hero—a skilled [fighter](trait:fighter), a courageous [cleric](trait:cleric), a deadly [rogue](trait:rogue), or a spell-hurling [wizard](trait:wizard). With some willing friends and a little imagination, you strike out on daring missions and epic quests, testing yourself against an array of daunting challenges and bloodthirsty monsters.\n\nGet ready—the _Player’s Handbook_ contains everything you need to create a heroic character of your own! To start you on your first adventure, this chapter discusses the following topics.\n\n- **[A Roleplaying Game](content:how-to-play/a-roleplaying-game):** How the D&D game is different from any other game you’ve played.\n- **[What’s in a D&D Game](content:how-to-play/whats-in-a-dd-game):** The essential ingredients of the DUNGEONS & DRAGONS game.\n- **[How Do You Play?](content:how-to-play/how-do-you-play):** A look at what happens during the game, including a brief example of activity at the game table.\n- **[The Core Mechanic](content:how-to-play/the-core-mechanic):** The single fundamental rule you need to know for most challenges you face in the game.',
  },
})

export const ARoleplayingGameSection = Content.defineSection('how-to-play/a-roleplaying-game', {
  parent: HowToPlaySection,
  content: {
    name: 'A Roleplaying Game',
    description:
      'The DUNGEONS & DRAGONS game is a roleplaying game. In fact, D&D invented the roleplaying game and started an industry.\n\nA roleplaying game is a storytelling game that has elements of the games of make-believe that many of us played as children. However, a roleplaying game such as D&D provides form and structure, with robust gameplay and endless possibilities.\n\nD&D is a fantasy-adventure game. You create a character, team up with other characters (your friends), explore a world, and battle monsters. While the D&D game uses dice and miniatures, the action takes place in your imagination. There, you have the freedom to create anything you can imagine, with an unlimited special effects budget and the technology to make anything happen.\n\nWhat makes the D&D game unique is the Dungeon Master. The DM is a person who takes on the role of lead storyteller and game referee. The DM creates adventures for the characters and narrates the action for the players. The DM makes D&D infinitely flexible—he or she can react to any situation, any twist or turn suggested by the players, to make a D&D adventure vibrant, exciting, and unexpected.\n\nThe adventure is the heart of the D&D game. It’s like a fantasy movie or novel, except the characters that you and your friends create are the stars of the story. The DM sets the scene, but no one knows what’s going to happen until the characters do something—and then anything can happen! You might explore a dark dungeon, a ruined city, a lost temple deep in a jungle, or a lava-filled cavern beneath a mysterious mountain. You solve puzzles, talk with other characters, battle all kinds of fantastic monsters, and discover fabulous magic items and treasure.\n\nD&D is a cooperative game in which you and your friends work together to complete each adventure and have fun. It’s a storytelling game where the only limit is your imagination. It’s a fantasy-adventure game, building on the traditions of the greatest fantasy stories of all time. In an adventure, you can attempt anything you can think of. Want to talk to the dragon instead of fighting it? Want to disguise yourself as an orc and sneak into the foul lair? Go ahead and give it a try. Your actions might work or they might fail spectacularly, but either way you’ve contributed to the unfolding story of the adventure and probably had fun along the way.\n\nYou “win” the DUNGEONS & DRAGONS game by participating in an exciting story of bold adventurers confronting deadly perils. The game has no real end; when you finish one story or quest, you can start another one. Many people who play the D&D game keep their games going for months or years, meeting with their friends every week to pick up the story where they left off.\n\nYour character grows as the game continues. Each monster defeated, each adventure completed, and each treasure recovered not only adds to your continuing story, but also earns your character new abilities. This increase in power is reflected by your character’s level; as you continue to play, your character gains more experience, rising in level and mastering new and more powerful abilities.\n\nFrom time to time, your character might come to a grisly end, torn apart by ferocious monsters or done in by a nefarious villain. But even when your character is defeated, you don’t “lose.” Your companions can employ powerful magic to revive your character, or you might choose to create a new character to carry on from where the previous character fell. You might fail to complete the adventure, but if you had a good time and you created a story that everyone remembers for a long time, the whole group wins.',
  },
})

export const AFantasticWorldSection = Content.defineSection('how-to-play/a-fantastic-world', {
  parent: ARoleplayingGameSection,
  content: {
    name: 'A Fantastic World',
    description:
      'The world of the DUNGEONS & DRAGONS game is a place of magic and monsters, of brave warriors and spectacular adventures. It begins with a basis of medieval fantasy and then adds the creatures, places, and powers that make the D&D world unique.\n\nThe world of the D&D game is ancient, built upon and beneath the ruins of past empires, leaving the landscape dotted with places of adventure and mystery. Legends and artifacts of past empires still survive—as do terrible menaces.\n\nThe current age has no all-encompassing empire. The world is shrouded in a dark age, between the collapse of the last great empire and the rise of the next, which might be centuries away. Minor kingdoms prosper, to be sure: baronies, holdings, city-states. But each settlement appears as a point of light in the widespread darkness, a haven, an island of civilization in the wilderness that covers the world. Adventurers can rest and recuperate in settlements between adventures. No settlement is entirely safe, however, and adventures break out within (and under) such places as often as not.\n\nDuring your adventures, you might visit a number of fantastic locations: wide cavern passages cut by rivers of lava; towers held aloft in the sky by ancient magic; forests of strange, twisted trees, with shimmering fog in the air—anything you can imagine, your character might experience as the game unfolds.\n\nMonsters and supernatural creatures are a part of this world. They prowl in the dark places between the points of light. Some are threats, others are willing to aid you, and many fall into both camps and might react differently depending on how you approach them.\n\nMagic is everywhere. People believe in and accept the power that magic provides. However, true masters of magic are rare. Many people have access to a little magic, and such minor magic helps those living within the points of light to maintain their communities. But those who have the power to shape spells the way a blacksmith shapes metal are as rare as adventurers and appear as friends or foes to you and your companions.\n\nAt some point, all adventurers rely on magic in one form or another. [Wizards](trait:wizard) and [warlocks](trait:warlock) draw magic from the fabric of the universe, shape it with their will, and hurl it at their foes in explosive blasts. [Clerics](trait:cleric) and [paladins](trait:paladin) call down the wrath of their gods to sear their foes with divine radiance, or they invoke their gods’ mercy to heal their allies’ wounds. [Fighters](trait:fighter), [rangers](trait:ranger), [rogues](trait:rogue), and [warlords](trait:warlord) don’t use obviously magical powers, but their expertise with their magic weapons makes them masters of the battlefield. At the highest levels of play, even nonmagical adventurers perform deeds no mere mortal could dream of doing without magic—swinging great axes in wide swaths that shake the earth around them or cloaking themselves in shadow to become invisible.',
  },
})

export const WhatsInADDGameSection = Content.defineSection('how-to-play/whats-in-a-dd-game', {
  parent: HowToPlaySection,
  content: {
    name: 'What’s in a D&D Game?',
    description:
      'All DUNGEONS & DRAGONS games have four basic ingredients: at least one player (four or five players is best), a Dungeon Master, an adventure, and game books and dice.',
  },
})

export const PlayerCharactersSection = Content.defineSection('how-to-play/player-characters', {
  parent: WhatsInADDGameSection,
  content: {
    name: 'Player Characters',
    description:
      'As a player, you create a character—a heroic adventurer. This adventurer is part of a team that delves into dungeons, battles monsters, and explores the world’s dark wilderness. A player-generated character is known as a player character (PC). Like the protagonists of a novel or a movie, player characters are at the center of the game’s action.\n\nWhen you play your D&D character, you put yourself into your character’s shoes and make decisions as if you were that character. You decide which door your character opens next. You decide whether to attack a monster, to negotiate with a villain, or to attempt a dangerous quest. You can make these decisions based on your character’s personality, motivations, and goals, and you can even speak or act in character if you like. You have almost limitless control over what your character can do and say in the game.',
  },
})

export const TheDungeonMasterSection = Content.defineSection('how-to-play/the-dungeon-master', {
  parent: WhatsInADDGameSection,
  content: {
    name: 'The Dungeon Master',
    description:
      'One person has a special role in a D&D game: the Dungeon Master (DM). The Dungeon Master presents the adventure and the challenges that the players try to overcome. Every D&D game needs a Dungeon Master—you can’t play without one.\n\nThe Dungeon Master has several functions in the game.\n\n- **Adventure Builder:** The DM creates adventures (or selects premade adventures) for you and the other players to play through.\n- **Narrator:** The DM sets the pace of the story and presents the various challenges and encounters the players must overcome.\n- **Monster Controller:** The Dungeon Master controls the monsters and villains the player characters battle against, choosing their actions and rolling dice for their attacks.\n- **Referee:** When it’s not clear what ought to happen next, the DM decides how to apply the rules and adjudicate the story.\n\nThe Dungeon Master controls the monsters and villains in the adventure, but he isn’t your adversary. The DM’s job is to provide a framework for the whole group to enjoy an exciting adventure. That means challenging the player characters with interesting encounters and tests, keeping the game moving, and applying the rules fairly.\n\nMany D&D players find that being the Dungeon Master is the best part of the game. Taking on the Dungeon Master role isn’t necessarily a permanent post—you and your friends can take turns being the DM from adventure to adventure. If you think you’d like to be the Dungeon Master in your group, you can find all the tools to help you in the _Dungeon Master’s Guide_.',
  },
})

export const TheAdventureSection = Content.defineSection('how-to-play/the-adventure', {
  parent: WhatsInADDGameSection,
  content: {
    name: 'The Adventure',
    description:
      'Adventurers need adventures. A DUNGEONS & DRAGONS adventure consists of a series of events. When the players decide which way to go next and how their characters meet the resulting encounters and challenges, they turn the adventure into an exciting story about their characters. D&D adventures feature action, combat, mystery, magic, challenges, and lots of monsters!\n\nAdventures come in three forms:\n\n- **Ready to Play:** The DM can buy or obtain professionally written, ready-to-play adventures from a number of sources, including www.dndinsider.com.\n- **Adventure Hooks and Components:** Most D&D supplements offer pieces of adventures—story ideas, maps, interesting villains or monsters—that the DM can assemble into an adventure. DUNGEON MAGAZINE (www.dndinsider.com) is also a rich source of adventure material.\n- **Homemade:** Many DMs choose to create their own dungeons and adventures, building challenging encounters and stocking them with monsters from the _Monster Manual_ and treasure from the _Player’s Handbook_.\n\nAn adventure can be a simple “dungeon crawl”—a series of rooms filled with monsters and traps, with little story to explain why the adventurers need to explore them—or as complex as a murder mystery or a tale of political intrigue. It can last for a single game session or stretch out over many sessions of play. For example, exploring a haunted castle might take half a dozen game sessions over the course of a couple of months of real time.\n\nWhen the same group of player characters plays with the same Dungeon Master through multiple adventures, you’ve got a campaign. The story of the heroes doesn’t end with a single adventure, but continues on for as long as you like!',
  },
})

export const GameBooksAndDiceSection = Content.defineSection('how-to-play/game-books-and-dice', {
  parent: WhatsInADDGameSection,
  content: {
    name: 'Game Books and Dice',
    description:
      'The action of the game takes place mostly in your imagination, but you still need a few “game pieces” to play D&D.\n\n- **_Player’s Handbook_:** Every player needs a _Player’s Handbook_ for reference.\n- **_Dungeon Master’s Guide_ and _Monster Manual_:** The Dungeon Master needs a copy of each of these books (and players might also enjoy perusing the contents).\n- **Dice:** The DUNGEONS & DRAGONS game requires a special set of game dice (see the [sidebar](content:how-to-play/game-dice)).\n- **Character Sheet:** To keep track of all the important information about your character, use the character sheet at the back of this book, or check out www.dndinsider.com.\n\nYou might find some of the following items and accessories useful at your game table.\n\n- **Miniatures:** Each player needs a miniature to represent his or her character, and the DM needs minis for monsters. Official _D&D Miniatures_ are custom-made to be used with the D&D game.\n- **Battle Grid or _Dungeon Tiles_:** Combat in D&D plays out on a grid of 1-inch squares. You can pick up an erasable battle grid at many hobby game stores, or try _D&D Dungeon Tiles_—heavy cardstock tiles that can be set up to create a wide variety of locations—or you can create your own grid.',
  },
})

export const GameDiceSection = Content.defineSection('how-to-play/game-dice', {
  parent: WhatsInADDGameSection,
  content: {
    name: 'Game Dice',
    description:
      'The game uses polyhedral dice with different numbers of sides, as shown below. You can find dice like these in the store where you bought this book, in any game store, and in many bookstores.\n\nIn these rules, the different dice are referred to by the letter “d” followed by the number of sides: d4, d6 (the common six-sided die many games use), d8, d10, d12, and d20.\n\nWhen you need to roll dice, the rules tell you how many dice to roll, what size they are, and what modifiers to add. For example, “3d8 + 5” means you roll three eight-sided dice and add 5 to the total.\n\nYou can use d10s to roll percentages, if you ever need to. Roll 1d10 for the “tens” and 1d10 for the “ones” to generate a number between 1 and 100. Two 10s is 100, but otherwise a 10 on the tens die counts as 0—so a 10 on the tens die and a 7 on the ones die is a result of 7 (not 107!).',
  },
})

export const HowDoYouPlaySection = Content.defineSection('how-to-play/how-do-you-play', {
  parent: HowToPlaySection,
  content: {
    name: 'How Do You Play?',
    description:
      'Your “piece” in the DUNGEONS & DRAGONS game is your character. He or she is your representative in the game world. Through your character, you can interact with the game world in any way you want. The only limit is your imagination—and, sometimes, how high you roll on the dice.\n\nBasically, the D&D game consists of a group of player characters taking on an adventure presented by the Dungeon Master. Each adventure is made up of encounters—challenges of some sort that your characters face.\n\nEncounters come in two types.\n\n- **Combat encounters** are battles against nefarious foes. In a combat encounter, characters and monsters take turns attacking until one side or the other is defeated.\n- **Noncombat encounters** include deadly traps, difficult puzzles, and other obstacles to overcome. Sometimes you overcome noncombat encounters by using your character’s skills, sometimes you can defeat them with clever uses of magic, and sometimes you have to puzzle them out with nothing but your wits. Noncombat encounters also include social interactions, such as attempts to persuade, bargain with, or obtain information from a nonplayer character (NPC) controlled by the DM. Whenever you decide that your character wants to talk to a person or monster, it’s a noncombat encounter.',
  },
})

export const ExplorationSection = Content.defineSection('how-to-play/exploration', {
  parent: HowDoYouPlaySection,
  content: {
    name: 'Exploration',
    description:
      'Between encounters, your characters explore the world. You make decisions about which way your character travels and what he or she tries to do next. Exploration is the give-and-take of you telling the DM what you want your character to do, and the DM telling you what happens when your character does it.\n\nFor example, let’s say the player characters have just climbed down into a dark chasm. The DM tells you that your characters see three tunnels leading from the chasm floor into the gloom. You and the other players decide which tunnel your characters venture into first, and you tell the DM which way your characters are heading. That’s exploration. You might try almost anything else: finding a place to hide and set an ambush in case monsters come by, shouting “Hello, any monsters here?” as loud as you can, or searching the chasm floor carefully in case there’s anything interesting lying amid the boulders and moss. That’s all exploration, too.\n\nDecisions you make as you explore eventually lead to encounters. For example, one tunnel might lead into a nest of hungry gricks—if you decide to go that way, your characters are heading into a combat encounter. Another tunnel might lead to a door sealed by a magic lock that you have to break through—a noncombat encounter.\n\nWhile exploring a dungeon or other adventure location, you might try to do any of the following actions:\n\n- Move down a hallway, follow a passage, cross a room\n- Listen by a door to determine if you hear anything on the other side\n- Try a door to see if it’s locked\n- Break down a locked door\n- Search a room for treasure\n- Pull levers, push statues or furnishings around\n- Pick the lock of a treasure chest\n- Jury-rig a trap\n\nThe Dungeon Master decides whether or not something you try actually works. Some actions automatically succeed (you can move around without trouble, usually), some require one or more die rolls, called checks (breaking down a locked door, for example), and some simply can’t succeed. Your character is capable of any deeds a strong, smart, agile, and well-armed human action hero can pull off. You can’t punch your way through a door of 3-inch-thick iron plate with your bare hands, for example—not unless you have powerful magic to help you out!',
  },
})

export const TakingYourTurnSection = Content.defineSection('how-to-play/taking-your-turn', {
  parent: HowDoYouPlaySection,
  content: {
    name: 'Taking Your Turn',
    description:
      'In exploration, you don’t usually need to take turns. The DM normally prompts you by asking “What do you do?”, you answer, and then the DM tells you what happens. You can break in with questions, offer suggestions to other players, or tell the DM a new action any time you like. But try to be considerate of the other players. They want their characters to take actions, too.\n\nIn combat encounters, it works differently: The player characters and the monsters all take turns in a fixed rotation, called the [initiative](characteristic:initiative) order.',
  },
})

export const ExampleOfPlaySection = Content.defineSection('how-to-play/example-of-play', {
  parent: TakingYourTurnSection,
  content: {
    name: 'Example of Play',
    description:
      'Here’s a typical D&D game session. The adventurers are exploring the ruins of an old dwarven stronghold, now infested by monsters. The players in this session are:\n\nDave, the Dungeon Master;\n\nToby, whose character is the [human](trait:race/human) [fighter](trait:fighter) Ammar;\n\nCam, playing Isidro, a halfling [rogue](trait:rogue);\n\nDaneen, whose character is an eladrin [wizard](trait:wizard) named Serissa.\n\n**Dave** (_DM_): “Old stone steps climb up about 30 feet or so into the mountainside, alongside a cold stream splashing through the cave. The steps end at a landing in front of a big stone door carved with the image of a bearded dwarf face. The door stands open about a foot or so. There’s a bronze gong hanging from a bracket in the wall nearby. What do you do?”\n\n**Cam** (_Isidro_): “I’ll creep up and peek through the opening.”\n\n**Daneen** (_Serissa_): “I want to take a closer look at the gong.”\n\n**Toby** (_Ammar_): “I’m going to hang back and keep watch, in case Isidro gets into trouble.”\n\n**Cam** (_Isidro_): “Not a chance, I’m a pro.”\n\n**Dave** (_DM_): “Okay, first Serissa: It’s a battered old bronze gong. There’s a small hammer hanging beside it.”\n\n**Toby** (_Ammar_): “Don’t touch it!”\n\n**Daneen** (_Serissa_): “I wasn’t going to! It looks like the doorbell to me. No sense telling the monsters we’re here.”\n\n**Dave** (_DM_): “Okay. Now for Isidro: Since you’re trying to be sneaky, Cam, make a [Stealth](characteristic:skill/stealth) check.”\n\n**Cam** (_rolls a Stealth check for Isidro_): “I got a 22.”\n\n**Dave** (_DM_): “Isidro is pretty stealthy.” _Dave compares Isidro’s Stealth check result to the [Perception](characteristic:skill/perception) check result of the monsters he knows are in the next room. Cam’s roll beats the Perception check, so the monsters don’t know the halfling is there._\n\n**Daneen** (_Serissa_): “So what does he see?”\n\n**Dave** (_DM_): “You’re by the gong, remember? Isidro, you peek in the door’s opening, and you see a large stone hall with several thick pillars. There’s a large fire pit in the center of the room filled with dimming embers. You see four beastlike humanoids with hyena faces crouching around the fire pit, and a big animal—like a real hyena, but much bigger—dozing on the floor nearby. The hyena-men are armed with spears and axes.”\n\n**Toby** (_Ammar_): “Gnolls! I hate those guys.”\n\n**Daneen** (_Serissa_): “Looks like we’ll have to fight our way in. Can we take them?”\n\n**Cam** (_Isidro_): “No problem, we’ve got the drop on ’em.”\n\n**Dave** (_DM_): “So are you going through the door?” _The players all agree that they are._ “Show me where your characters are standing right before you go in.”\n\n_The players arrange their characters’ miniatures on the Dungeon Tiles that Dave has prepared for the encounter. They’re now on the landing just outside the room with the gnolls._\n\n**Toby** (_Ammar_): “All right, on the count of three. One . . . two . . . three!”\n\n**Dave** (_DM_): “You’ve surprised the gnolls! Everybody roll [initiative](characteristic:initiative), and we’ll see if you can take these guys or not.”\n\nWhat happens next? Can Ammar, Isidro, and Serissa defeat the gnolls? That depends on how the players play their characters, and how lucky they are with their dice!',
  },
})

export const TheCoreMechanicSection = Content.defineSection('how-to-play/the-core-mechanic', {
  parent: HowToPlaySection,
  content: {
    name: 'The Core Mechanic',
    description:
      'How do you know if your sword-swing hurts the dragon, or just bounces off its iron-hard scales? How do you know if the ogre believes your outrageous bluff, or if you can swim the raging river and reach the other side?\n\nAll these actions depend on very basic, simple rules: Decide what you want your character to do and tell the Dungeon Master. The DM tells you to make a check and figures out your chance of success (a target number for the check).\n\nYou roll a twenty-sided die (d20), add some numbers, and try to hit the target number determined by the DM. That’s it!\n\n**The Core Mechanic**\n\n1. Roll a d20. You want to roll high!\n2. Add all relevant modifiers.\n3. Compare the total to a target number.\n\nIf your check result is higher than or equal to the target number, you succeed. If your check result is lower than the target number, you fail.\n\nIf your check succeeds, you determine the outcome. If your check was an attack, you roll damage. If it was a check to see if you managed to jump across a pit, your check result determines how far you jumped. If you succeed on a check when you’re trying to hide, the monsters don’t see you.\n\nThere’s a little more to it than that, but the core mechanic governs all game play. All the rest of the rules in the book are extensions and refinements of this simple mechanic.',
  },
})

export const ThreeBasicRulesSection = Content.defineSection('how-to-play/three-basic-rules', {
  parent: TheCoreMechanicSection,
  content: {
    name: 'Three Basic Rules',
    description:
      'In addition to the core mechanic, three principles are at the heart of the DUNGEONS & DRAGONS game. Many other rules are based on these assumptions.',
  },
})

export const SimpleRulesManyExceptionsSection = Content.defineSection('how-to-play/simple-rules-many-exceptions', {
  parent: ThreeBasicRulesSection,
  content: {
    name: 'Simple Rules, Many Exceptions',
    description:
      'Every class, race, feat, power, and monster in the D&D game lets you break the rules in some way. These can be very minor ways: Most characters don’t know how to use longbows, but every elf does. These exceptions can also appear in very significant ways: A swing with a sword normally does a few points of damage, but a high-level fighter can use a power that can fell multiple monsters in a single blow. All these game elements are little ways of breaking the rules—and most of the books published for the D&D game are full of these game elements.',
  },
})

export const SpecificBeatsGeneralSection = Content.defineSection('how-to-play/specific-beats-general', {
  parent: ThreeBasicRulesSection,
  content: {
    name: 'Specific Beats General',
    description:
      'If a specific rule contradicts a general rule, the specific rule wins. For example, a general rule states that you can’t use a daily power when you charge. But if you have a daily power that says you can use it when you charge, the power’s specific rule wins. It doesn’t mean that you can use any daily power when you charge, just that one.',
  },
})

export const AlwaysRoundDownSection = Content.defineSection('how-to-play/always-round-down', {
  parent: ThreeBasicRulesSection,
  content: {
    name: 'Always Round Down',
    description:
      'Unless otherwise noted, if you wind up with a fraction as the result of a calculation, round down even if the fraction is 1/2 or larger. For instance, this rule comes into play whenever you calculate one-half your level: If your level is an odd number, you always round down to the next lower whole number.',
  },
})

export const HowToPlayContent: Array<ContentSection> = [
  HowToPlaySection,
  ARoleplayingGameSection,
  AFantasticWorldSection,
  WhatsInADDGameSection,
  PlayerCharactersSection,
  TheDungeonMasterSection,
  TheAdventureSection,
  GameBooksAndDiceSection,
  GameDiceSection,
  HowDoYouPlaySection,
  ExplorationSection,
  TakingYourTurnSection,
  ExampleOfPlaySection,
  TheCoreMechanicSection,
  ThreeBasicRulesSection,
  SimpleRulesManyExceptionsSection,
  SpecificBeatsGeneralSection,
  AlwaysRoundDownSection,
]
