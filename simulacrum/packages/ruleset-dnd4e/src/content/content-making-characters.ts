import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import * as Deities from '@simulacrum/ruleset-dnd4e/deity'

export const MakingCharactersSection = Content.defineSection('making-characters', {
  content: {
    name: 'Making Characters',
    description:
      'Your first step in playing D&D is to imagine and then create a character of your own. Your character is a combination of the fantastic hero in your mind’s eye and the different game rules that describe what he or she can do. You choose a race such as elf or dragonborn, a class such as wizard or fighter, and distinct powers such as magic spells or divine prayers. Then you invent a personality, description, and story for your character.\n\nYour character is your representative in the game, your avatar in the D&D world. A character is a combination of game statistics and roleplaying hooks; the statistics define the physical aspects of what the character does in the world, while roleplaying choices define who he or she is.\n\nThroughout this book, we use the word “you” interchangeably with “your character.” As far as the rules of the game are concerned, your character is you. You decide what your character does as you move through the world, exploring dungeons, fighting monsters, and interacting with other characters in the game.\n\nThis chapter includes the following sections.\n\n- **[Character Creation](content:making-characters/character-creation):** A guide to the character creation process.\n- **[Ability Scores](content:making-characters/ability-scores):** How to generate your character’s ability scores.\n- **[Roleplaying](content:making-characters/roleplaying):** Elements to help you shape your character, including alignment, deities, personality, appearance, background, and languages.\n- **[Making Checks](content:making-characters/making-checks):** Expanding on the core mechanic to explain the basic die rolls of the game.\n- **[Gaining Levels](content:making-characters/gaining-levels):** Rules for gaining experience levels and advancing your character.\n- **[Character Sheet](content:making-characters/character-sheet):** Explanation of a character sheet and where you can find information for each entry on the sheet.',
  },
})

export const CharacterCreationSection = Content.defineSection('making-characters/character-creation', {
  parent: MakingCharactersSection,
  content: {
    name: 'Character Creation',
    description:
      'First, take a minute to imagine your character. Think about the kind of hero you want your character to be. Your character exists in your imagination—all the game statistics do is help you determine what your character can do in the game. Do you like fantasy fiction featuring dwarves or elves? Try building a character of one of those races. Do you want your character to be the toughest adventurer at the table? Try choosing [fighter](trait:fighter) or [paladin](trait:paladin) for your character class. If you don’t know where else to begin, take a look at the art that appears throughout this book and the brief character descriptions in each race entry in Chapter 3, and see what catches your interest.\n\nFollow these steps to create your D&D character. You can take these out of order; for example, some people prefer to pick their powers last.\n\n1. **Choose Race.** Decide the race of your character. Your choice of race offers several racial advantages to your character. _[Chapter 3](content:races)._\n2. **Choose Class.** Your class represents your training or profession, and it is the most important part of your character’s capabilities. _[Chapter 4](content:classes)._\n3. **Determine Ability Scores.** Generate your ability scores. Your ability scores describe the fundamental strengths of your body and mind. Your race adjusts the scores you generate, and different classes rely on different ability scores. _[Chapter 2](content:making-characters/ability-scores)._\n4. **Choose Skills.** Skills measure your ability to perform tasks such as jumping across chasms, hiding from observers, and identifying monsters. _[Chapter 5](content:skills)._\n5. **Select Feats.** Feats are natural advantages or special training you possess. _[Chapter 6](content:feats)._\n6. **Choose Powers.** Each character class offers a different selection of powers to choose from. _[Chapter 4](content:classes)._\n7. **Choose Equipment.** Pick your character’s armor, weapons, implements, and basic adventuring gear. At higher levels, you’ll be able to find and create magic items. _[Chapter 7](content:equipment)._\n8. **Fill in the Numbers.** Calculate your [hit points](characteristic:hit-points), [Armor Class](characteristic:armor-class) and other defenses, [initiative](characteristic:initiative), attack bonuses, damage bonuses, and skill check bonuses. _[Chapter 2](content:making-characters/character-sheet)._\n9. **Roleplaying Character Details.** Flesh out your character with details about your personality, appearance, and beliefs. _[Chapter 2](content:making-characters/roleplaying)._',
  },
})

export const RaceClassAndRoleSection = Content.defineSection('making-characters/race-class-and-role', {
  parent: CharacterCreationSection,
  content: {
    name: 'Race, Class, and Role',
    description:
      'The first two decisions you make in character creation are picking your character’s race and choosing a class. Together, these describe your basic character concept; for example, dwarf fighter, eladrin wizard, or tiefling warlord. Your choice of character class also determines your character’s role—the job your character does when the adventuring party is in a fight.\n\nYou should pick the race and class combination that interests you the most. However, sometimes it’s a good idea to first consider the role you want your character to fill. For example, if you join an existing game and none of the other players are playing a character in the defender role, you would help them out by playing a [fighter](trait:fighter) or a [paladin](trait:paladin).',
  },
})

export const CharacterRaceSection = Content.defineSection('making-characters/character-race', {
  parent: RaceClassAndRoleSection,
  content: {
    name: 'Character Race',
    description:
      'A variety of fantastic races populate the world of the DUNGEONS & DRAGONS game—people such as dragonborn, dwarves, and elves. In any good-sized town or city, you typically run across at least a few individuals of each race, even if they are simply travelers or wandering mercenaries looking for their next challenge.\n\nMany different intelligent creatures populate the world, creatures such as dragons, mind flayers, and demons. These aren’t characters you can play; they’re monsters you fight. Your character is an adventurer of one of the civilized races of the world.\n\n**[Dragonborn](content:races/dragonborn)** are proud, honor-bound draconic humanoids. They wander the world as mercenaries and adventurers. They are strong and possess dragonlike abilities.\n\nLegendary for their toughness and strong will, **[dwarves](trait:race/dwarf)** are indomitable warriors and master artisans. Dwarven kingdoms are mighty mountain citadels, but clans of dwarf crafters can be found in any town or city.\n\n**[Eladrin](content:races/eladrin)** are a graceful, magical race born of the Feywild, the realm of Faerie. They love arcane magic, swordplay, and exquisite work in metal and stone. They live in shining cities on the borders of the Feywild.\n\nKin to the eladrin, **[elves](content:races/elf)** dwell in the deep forests of the world and love the beauty of nature. Many elves (and some eladrin, too) live in wandering companies that visit many lands, staying a season or two in each.\n\nElves and humans sometimes have children together, giving rise to **[half-elves](content:races/half-elf)**. With many of the best features of both humans and elves, half-elves have capabilities distinct from both races. They are charismatic and versatile.\n\n**[Halflings](content:races/halfling)**, the smallest of the civilized races, are a plucky, quick, and likable people. Halflings gather in small clans in the marshes and along the rivers of the world, traveling and trading widely with the other races.\n\nBrave and ambitious, **[humans](trait:race/human)** are somewhat more numerous than other races, and their city-states are among the brightest spots in a dark world. However, there still exist vast portions of the world where no human has set foot.\n\n**[Tieflings](content:races/tiefling)** are a race descended from ancient humans who bargained with infernal powers. Tieflings are loners who live in the shadows of human society, relying only on trusted allies.\n\nYou can learn more about these races in [Chapter 3](content:races).\n\nEach character race has innate strengths that make it more suited to particular classes. However, you can create any combination you like. There’s nothing wrong with playing against type; dwarves aren’t usually rogues, but you can create a capable and effective dwarf rogue by choosing your feats and powers carefully.',
  },
})

export const CharacterClassSection = Content.defineSection('making-characters/character-class', {
  parent: RaceClassAndRoleSection,
  content: {
    name: 'Character Class',
    description:
      'Many different types of heroes and villains inhabit the world: sneaky rogues, clever wizards, burly fighters, and more. Character race defines your basic appearance and natural talents, but character class is your chosen vocation, the specific trade you follow. You can learn more about these classes in [Chapter 4](content:classes).\n\n**[Cleric](trait:cleric):** Courageous and devout, clerics are holy warriors and healers. If you want to blast foes with divine powers, bolster your companions with healing and magical power, and lead them to victory with your wisdom and determination, play a cleric.\n\n**[Fighter](trait:fighter):** Fighters are experts in armed combat, relying on muscle, training, and pure grit to see them through. If you want to mix it up in close combat, protect your companions, and hack enemies into submission while their attacks rain down fruitlessly on your heavily armored body, be a fighter.\n\n**[Paladin](trait:paladin):** Devout warriors and champions of their deities, paladins are divinely inspired knights who fight at the front of a battle. If you want to challenge foes to single combat, fight for a cause, and smite your foes with divine might, then paladin is the class for you.\n\n**[Ranger](trait:ranger):** Expert trackers and scouts, rangers are wilderness warriors who excel at hit-and-run fighting. If you want to master both bow and blade, vanish into the woods like a ghost, and bring down your foes before they know you’re there, play a ranger.\n\n**[Rogue](trait:rogue):** Thieves, scoundrels, dungeon-delvers, jacks-of-all-trades—rogues have a reputation for larceny and trickery. If you want to slip into and out of the shadows on a whim, tumble across the field of battle with little fear of enemy reprisal, and appear from nowhere to plant a blade in your foe’s back, be a rogue.\n\n**[Warlock](trait:warlock):** Wielders of forbidden lore, warlocks are dangerous practitioners of magic who turn their baleful powers against their enemies. If you want to deal with mysterious powers, scour enemies with potent blasts of eldritch energy, and bedevil them with potent curses, warlock is the best choice for you.\n\n**[Warlord](trait:warlord):** Hardy and skilled in close combat, warlords are brilliant leaders who have the gift of inspiration. If you want to lead the battle with the point of your sword, coordinate brilliant tactics with your comrades, and bolster and heal them when they falter, play a warlord.\n\n**[Wizard](trait:wizard):** Masters of potent arcane powers, wizards disdain physical conflict in favor of awesome magic. If you want to hurl balls of fire that incinerate your enemies, cast spells that change the battlefield, or research arcane rituals that can alter time and space, you should be a wizard.',
  },
})

export const CharacterRoleSection = Content.defineSection('making-characters/character-role', {
  parent: RaceClassAndRoleSection,
  content: {
    name: 'Character Role',
    description:
      'Each character class specializes in one of four basic functions in combat: control and area offense, defense, healing and support, and focused offense. The roles embodied by these functions are **controller**, **defender**, **leader**, and **striker**. The classic adventuring party includes one character of each role: wizard, fighter, cleric, and rogue.\n\nCharacter roles identify which classes can stand in for each other. For example, if you don’t have a cleric in your party, a warlord serves just as well in the leader role.\n\nRoles also serve as handy tools for building adventuring parties. It’s a good idea to cover each role with at least one character. If you have five or six players in your group, it’s best to double up on defender first, then striker. If you don’t have all the roles covered, that’s okay too—it just means that the characters need to compensate for the missing function.\n\nFuture volumes of the _Player’s Handbook_ will introduce additional classes for all these roles.',
  },
})

export const ControllerSection = Content.defineSection('making-characters/controller-wizard', {
  parent: CharacterRoleSection,
  content: {
    name: 'Controller (Wizard)',
    description:
      'Controllers deal with large numbers of enemies at the same time. They favor offense over defense, using powers that deal damage to multiple foes at once, as well as subtler powers that weaken, confuse, or delay their foes.',
  },
})

export const DefenderSection = Content.defineSection('making-characters/defender-fighter-paladin', {
  parent: CharacterRoleSection,
  content: {
    name: 'Defender (Fighter, Paladin)',
    description:
      'Defenders have the highest defenses in the game and good close-up offense. They are the party’s front-line combatants; wherever they’re standing, that’s where the action is. Defenders have abilities and powers that make it difficult for enemies to move past them or to ignore them in battle.',
  },
})

export const LeaderSection = Content.defineSection('making-characters/leader-cleric-warlord', {
  parent: CharacterRoleSection,
  content: {
    name: 'Leader (Cleric, Warlord)',
    description:
      'Leaders inspire, heal, and aid the other characters in an adventuring group. Leaders have good defenses, but their strength lies in powers that protect their companions and target specific foes for the party to concentrate on.\n\nClerics and warlords (and other leaders) encourage and motivate their adventuring companions, but just because they fill the leader role doesn’t mean they’re necessarily a group’s spokesperson or commander. The party leader—if the group has one—might as easily be a charismatic warlock or an authoritative paladin. Leaders (the role) fulfill their function through their mechanics; party leaders are born through roleplaying.',
  },
})

export const StrikerSection = Content.defineSection('making-characters/striker-ranger-rogue-warlock', {
  parent: CharacterRoleSection,
  content: {
    name: 'Striker (Ranger, Rogue, Warlock)',
    description:
      'Strikers specialize in dealing high amounts of damage to a single target at a time. They have the most concentrated offense of any character in the game. Strikers rely on superior mobility, trickery, or magic to move around tough foes and single out the enemy they want to attack.',
  },
})

export const AttackPowersAndUtilityPowersSection = Content.defineSection('making-characters/attack-powers-and-utility-powers', {
  parent: CharacterCreationSection,
  content: {
    name: 'Attack Powers and Utility Powers',
    description:
      'Every class gives you access to **attack** powers you can use to harm or hinder your enemies and **utility** powers that help you and your allies. Powers in each of these broad categories are further defined by how often you can use them.\n\nYou can use **at-will** powers as often as you choose. You can use **encounter** powers many times during a day of adventuring, but you have to rest a few minutes between each use, so you can use them each once per encounter. **Daily** powers are so dramatic and powerful that you can use each one only once a day.',
  },
})

export const AbilityScoresSection = Content.defineSection('making-characters/ability-scores', {
  parent: MakingCharactersSection,
  content: {
    name: 'Ability Scores',
    description:
      'After you choose your race and class, determine your ability scores. Six abilities provide a quick description of your character’s physical and mental characteristics. Are you muscle-bound and insightful? Brilliant and charming? Nimble and hardy? Your ability scores define these qualities—your strengths as well as your weaknesses.\n\n**[Strength](characteristic:strength) (Str)** measures your character’s physical power. It’s important for most characters who fight hand-to-hand.\n\n- [Melee basic attacks](ability:common/melee-basic-attack) are based on Strength.\n- Clerics, fighters, paladins, rangers, and warlords have powers based on Strength.\n- Your Strength might contribute to your [Fortitude](characteristic:fortitude) defense.\n- Strength is the key ability for [Athletics](characteristic:skill/athletics) skill checks.\n\n**[Constitution](characteristic:constitution) (Con)** represents your character’s health, stamina, and vital force. All characters benefit from a high Constitution score.\n\n- Your Constitution score is added to your [hit points](characteristic:hit-points) at 1st level.\n- The number of [healing surges](characteristic:healing-surges) you can use each day is influenced by your Constitution.\n- Many warlock powers are based on Constitution.\n- Your Constitution might contribute to your Fortitude defense.\n- Constitution is the key ability for [Endurance](characteristic:skill/endurance) skill checks.\n\n**[Dexterity](characteristic:dexterity) (Dex)** measures hand-eye coordination, agility, reflexes, and balance.\n\n- [Ranged basic attacks](ability:common/ranged-basic-attack) are based on Dexterity.\n- Many ranger and rogue powers are based on Dexterity.\n- Your Dexterity might contribute to your [Reflex](characteristic:reflex) defense.\n- If you wear light armor, your Dexterity might contribute to your [Armor Class](characteristic:armor-class).\n- Dexterity is the key ability for [Acrobatics](characteristic:skill/acrobatics), [Stealth](characteristic:skill/stealth), and [Thievery](characteristic:skill/thievery) skill checks.\n\n**[Intelligence](characteristic:intelligence) (Int)** describes how well your character learns and reasons.\n\n- Wizard powers are based on Intelligence.\n- Your Intelligence might contribute to your Reflex defense.\n- If you wear light armor, your Intelligence might contribute to your Armor Class.\n- Intelligence is the key ability for [Arcana](characteristic:skill/arcana), [History](characteristic:skill/history), and [Religion](characteristic:skill/religion) skill checks.\n\n**[Wisdom](characteristic:wisdom) (Wis)** measures your common sense, perception, self-discipline, and empathy. You use your Wisdom score to notice details, sense danger, and get a read on other people.\n\n- Many cleric powers are based on Wisdom.\n- Your Wisdom might contribute to your [Will](characteristic:will) defense.\n- Wisdom is the key ability for [Dungeoneering](characteristic:skill/dungeoneering), [Heal](characteristic:skill/heal), [Insight](characteristic:skill/insight), [Nature](characteristic:skill/nature), and [Perception](characteristic:skill/perception) skill checks.\n\n**[Charisma](characteristic:charisma) (Cha)** measures your force of personality, persuasiveness, and leadership.\n\n- Many paladin and warlock powers are based on Charisma.\n- Your Charisma might contribute to your Will defense.\n- Charisma is the key ability for [Bluff](characteristic:skill/bluff), [Diplomacy](characteristic:skill/diplomacy), [Intimidate](characteristic:skill/intimidate), and [Streetwise](characteristic:skill/streetwise) skill checks.\n\nEach of your ability scores is a number that measures the power of that ability. A character with a 16 Strength is much stronger than a character with a 6 Strength. A score of 10 or 11 is the normal human average, but player characters are a cut above average in most abilities. As you advance in levels, your ability scores keep getting better.\n\nYour ability score determines an ability modifier that you add to any attack, check, roll, or defense based on that ability. For instance, making a melee attack with a battleaxe is a Strength attack, so you add the ability modifier for your Strength score to your attack rolls and damage rolls. If your score is 17, you’re pretty strong; you add +3 to your attack rolls and damage rolls when you make that attack.\n\nYour ability scores also influence your defenses (see [page 275](content:combat/defenses)), since you add your ability modifier to your defense score.\n\n- For **Fortitude defense,** you add the higher of your [Strength](characteristic:strength-modifier) or [Constitution](characteristic:constitution-modifier) ability modifiers.\n- For **Reflex defense,** you add the higher of your [Dexterity](characteristic:dexterity-modifier) or [Intelligence](characteristic:intelligence-modifier) ability modifiers.\n- For **Will defense,** you add the higher of your [Wisdom](characteristic:wisdom-modifier) or [Charisma](characteristic:charisma-modifier) ability modifiers.\n- If you wear light armor or no armor, you also add the higher of your Dexterity or Intelligence ability modifiers to your **Armor Class.**\n\n**Ability Modifiers**\n\n| Ability Score | Ability Modifier | Ability Score | Ability Modifier |\n| :--- | :--- | :--- | :--- |\n| 1 | –5 | 18–19 | +4 |\n| 2–3 | –4 | 20–21 | +5 |\n| 4–5 | –3 | 22–23 | +6 |\n| 6–7 | –2 | 24–25 | +7 |\n| 8–9 | –1 | 26–27 | +8 |\n| 10–11 | +0 | 28–29 | +9 |\n| 12–13 | +1 | 30–31 | +10 |\n| 14–15 | +2 | 32–33 | +11 |\n| 16–17 | +3 | and so on . . . | |',
  },
})

export const GeneratingAbilityScoresSection = Content.defineSection('making-characters/generating-ability-scores', {
  parent: AbilityScoresSection,
  content: {
    name: 'Generating Ability Scores',
    description:
      'You can use one of three methods to generate ability scores. In each method, you can take the numbers you generate and assign them to whichever ability score you want. Remember, your class determines which ability scores are important to you, and your race modifies certain ability scores.\n\nAbility scores increase as a character gains levels (see the [Character Advancement](content:making-characters/character-advancement) table on page 29). When you assign your initial scores, remember that they’ll improve with time.',
  },
})

export const StandardArraySection = Content.defineSection('making-characters/method-1-standard-array', {
  parent: GeneratingAbilityScoresSection,
  content: {
    name: 'Method 1: Standard Array',
    description:
      'Take these six numbers and assign them to your abilities any way you like: **16**, **14**, **13**, **12**, **11**, **10**.\n\nApply your [racial ability adjustments](trait-tag:ability-score/racial) (see [Chapter 3](content:races)) after you assign the scores to your abilities.',
  },
})

export const CustomizingScoresSection = Content.defineSection('making-characters/method-2-customizing-scores', {
  parent: GeneratingAbilityScoresSection,
  content: {
    name: 'Method 2: Customizing Scores',
    description:
      'This method is a little more complicated than the standard array, but it gives comparable results. With this method, you can build a character who’s really good in one ability score, but at the cost of having average scores in the other five.\n\nStart with these six scores: 8, 10, 10, 10, 10, 10. You have 22 points to spend on improving them. The cost of raising a score from one number to a higher number is shown on the table below.\n\n| Score | Cost | Score | Cost |\n| :--- | :--- | :--- | :--- |\n| 9 | — (1)* | 14 | 5 |\n| 10 | 0 (2)* | 15 | 7 |\n| 11 | 1 | 16 | 9 |\n| 12 | 2 | 17 | 12 |\n| 13 | 3 | 18 | 16 |\n\n\\* If your score is 8, you can pay 1 to make it 9 or 2 to make it 10. You must buy your score up to 10 before you can improve it further.\n\nHere are some sample ability arrays you can generate using this method:\n\n| | | | | | |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| 14 | 13 | 13 | 13 | 13 | 13 |\n| 14 | 14 | 13 | 13 | 13 | 11 |\n| 14 | 14 | 14 | 12 | 12 | 11 |\n| 14 | 14 | 14 | 14 | 12 | 8 |\n| 15 | 14 | 13 | 12 | 12 | 11 |\n| 15 | 15 | 13 | 12 | 11 | 10 |\n| 16 | 15 | 12 | 11 | 11 | 10 |\n| 16 | 14 | 14 | 12 | 11 | 8 |\n| 16 | 16 | 12 | 10 | 10 | 10 |\n| 16 | 16 | 12 | 11 | 11 | 8 |\n| 17 | 15 | 12 | 11 | 10 | 8 |\n| 17 | 14 | 12 | 11 | 10 | 10 |\n| 18 | 13 | 13 | 10 | 10 | 8 |\n| 18 | 14 | 11 | 10 | 10 | 8 |\n| 18 | 12 | 12 | 10 | 10 | 10 |\n\nApply your racial ability adjustments (see Chapter 3) after you determine your scores.',
  },
})

export const RollingScoresSection = Content.defineSection('making-characters/method-3-rolling-scores', {
  parent: GeneratingAbilityScoresSection,
  content: {
    name: 'Method 3: Rolling Scores',
    description:
      'Some players like the idea of generating ability scores randomly. The result of this method can be really good, or it can be really bad. On average, you’ll come out a little worse than if you had used the standard array. If you roll well, you can come out way ahead, but if you roll poorly, you might generate a character who’s virtually unplayable. Use this method with caution.\n\nRoll four 6-sided dice (4d6) and add up the highest three numbers. Do that six times, and then assign the numbers you generated to your six ability scores. Apply your racial ability adjustments.\n\nIf the total of your ability modifiers is lower than +4 or higher than +8 before racial ability adjustments, your DM might rule that your character is too weak or too strong compared to the other characters in the group and decide to adjust your scores to fit better within his or her campaign preferences.\n\nYou can’t roll ability scores for a character you plan to use in RPGA® events.',
  },
})

export const SkillsFeatsPowersAndEquipmentSection = Content.defineSection('making-characters/skills-feats-powers-and-equipment', {
  parent: AbilityScoresSection,
  content: {
    name: 'Skills, Feats, Powers, and Equipment',
    description:
      'To round out the unique aspects of your character, choose skills, feats, powers, and equipment.\n\nYour class tells you how many skills you start with at 1st level. Some races give you an additional skill choice as well. See [Chapter 5](content:skills) for details on skills.\n\nYou also choose one heroic tier feat at 1st level (or two, if you’re a human). Some classes grant bonus feats as well. See [Chapter 6](content:feats) for feat descriptions.\n\nYour choice of class powers defines how your character functions in and out of combat. Each class section in [Chapter 4](content:classes) offers recommendations on choosing powers that reflect your approach.\n\nFinally, consult [Chapter 7](content:equipment) to pick your equipment. You begin your career at 1st level with 100 gold pieces, enough to equip yourself with basic gear (and maybe have a few coins left over).',
  },
})

export const FillInTheNumbersSection = Content.defineSection('making-characters/fill-in-the-numbers', {
  parent: AbilityScoresSection,
  content: {
    name: 'Fill in the Numbers',
    description:
      'Once you’ve picked all the other aspects of your character, it’s time to fill in the numbers. The calculations you need are described on [page 30](content:making-characters/character-sheet) in the instructions on completing your character sheet.',
  },
})

export const RoleplayingSection = Content.defineSection('making-characters/roleplaying', {
  parent: MakingCharactersSection,
  content: {
    name: 'Roleplaying',
    description:
      'The DUNGEONS & DRAGONS game is, first and foremost, a roleplaying game, which means that it’s all about taking on the role of a character in the game. Some people take to this playacting naturally and easily; others find it more of a challenge. This section is here to help you out, whether you’re comfortable and familiar with roleplaying or you’re new to the concept.\n\nYour character is more than a combination of race, class, and feats. He or she is also one of the protagonists in a living, evolving story line. Like the hero of any fantasy novel or film, he or she has ambitions and fears, likes and dislikes, motivations and mannerisms, moments of glory and of failure. The best D&D characters blend the ongoing story of their adventuring careers with memorable characteristics or traits. Jaden the 4th-level human fighter is a perfectly playable character even without any embellishment, but Jaden the Grim’s personality—brooding, fatalistic, and honest—suggests a particular approach to negotiating with NPCs or discussing issues with the other characters. A well-crafted character personality expands your experience of the game dramatically.\n\nD&D is a roleplaying game but not necessarily an exercise in improvisational theater. Sometimes, the role you play is defender or leader—the character you’re playing is engaged in combat and has a job to do so that your team comes out victorious. Even in combat, though, you can interject bits of personality and dialogue that make your character more than just the statistics on your character sheet.',
  },
})

export const AlignmentSection = Content.defineSection('making-characters/alignment', {
  parent: RoleplayingSection,
  content: {
    name: 'Alignment',
    description:
      'If you choose an alignment, you’re indicating your character’s dedication to a set of moral principles: good, lawful good, evil, or chaotic evil. In a cosmic sense, it’s the team you believe in and fight for most strongly.\n\n**Alignment**\n\nA character’s alignment (or lack thereof) describes his or her moral stance:\n\n- **Good:** Freedom and kindness.\n- **Lawful Good:** Civilization and order.\n- **Evil:** Tyranny and hatred.\n- **Chaotic Evil:** Entropy and destruction.\n- **Unaligned:** Having no alignment; not taking a stand.\n\nFor the purpose of determining whether an effect functions on a character, someone of lawful good alignment is considered good and someone of chaotic evil alignment is considered evil. For instance, a lawful good character can use a magic item that is usable only by good-aligned characters.\n\nAlignments are tied to universal forces bigger than deities or any other allegiance you might have. If you’re a high-level cleric with a lawful good alignment, you’re on the same team as [Bahamut](trait:deity/bahamut), regardless of whether you worship that deity. Bahamut is not in any sense the captain of your team, just a particularly important player (who has a large number of supporters). Most people in the world, and plenty of player characters, haven’t signed up to play on any team—they’re unaligned. Picking and adhering to an alignment represents a distinct choice.\n\nIf you choose an alignment for your character, you should pick either good or lawful good. Unless your DM is running a campaign in which all the characters are evil or chaotic evil, playing an evil or chaotic evil character disrupts an adventuring party and, frankly, makes all the other players angry at you.\n\nHere’s what the four alignments (and being unaligned) mean.',
  },
})

export const TheGoodAlignmentSection = Content.defineSection('making-characters/the-good-alignment', {
  parent: AlignmentSection,
  content: {
    name: 'The Good Alignment',
    description:
      '_Protecting the weak from those who would dominate or kill them is just the right thing to do._\n\nIf you’re a good character, you believe it is right to aid and protect those in need. You’re not required to sacrifice yourself to help others or to completely ignore your own needs, but you might be asked to place others’ needs above your own . . . in some cases, even if that means putting yourself in harm’s way. In many ways, that’s the essence of being a heroic adventurer: The people of the town can’t defend themselves from the marauding goblins, so you descend into the dungeon—at significant personal risk—to put an end to the goblin raids.\n\nYou can follow rules and respect authority, but you’re keenly aware that power tends to corrupt those who wield it, too often leading them to exploit their power for selfish or evil ends. When that happens, you feel no obligation to follow the law blindly. It’s better for authority to rest in the members of a community rather than the hands of any individual or social class. When law becomes exploitation, it crosses into evil territory, and good characters feel compelled to fight it.\n\nGood and evil represent fundamentally different viewpoints, cosmically opposed and unable to coexist in peace. Good and lawful good characters, though, get along fine—even if a good character thinks a lawful good companion might be a little too focused on following the law, rather than simply doing the right thing.',
  },
})

export const TheLawfulGoodAlignmentSection = Content.defineSection('making-characters/the-lawful-good-alignment', {
  parent: AlignmentSection,
  content: {
    name: 'The Lawful Good Alignment',
    description:
      '_An ordered society protects us from evil._\n\nIf you’re lawful good, you respect the authority of personal codes of conduct, laws, and leaders, and you believe that those codes are the best way of achieving your ideals. Just authority promotes the well-being of its subjects and prevents them from harming one another. Lawful good characters believe just as strongly as good ones do in the value of life, and they put even more emphasis on the need for the powerful to protect the weak and lift up the downtrodden. The exemplars of the lawful good alignment are shining champions of what’s right, honorable, and true, risking or even sacrificing their lives to stop the spread of evil in the world.\n\nWhen leaders exploit their authority for personal gain, when laws grant privileged status to some citizens and reduce others to slavery or untouchable status, law has given in to evil and just authority becomes tyranny. You are not only capable of challenging such injustice, but morally bound to do so. However, you would prefer to work within the system to right such problems rather than resorting to more rebellious and lawless methods.',
  },
})

export const TheEvilAlignmentSection = Content.defineSection('making-characters/the-evil-alignment', {
  parent: AlignmentSection,
  content: {
    name: 'The Evil Alignment',
    description:
      '_It is my right to claim what others possess._\n\nEvil characters don’t necessarily go out of their way to hurt people, but they’re perfectly willing to take advantage of the weakness of others to acquire what they want.\n\nEvil characters use rules and order to maximize personal gain. They don’t care whether laws hurt other people. They support institutional structures that give them power, even if that power comes at the expense of others’ freedom. Slavery and rigid caste structures are not only acceptable but desirable to evil characters, as long as they are in a position to benefit from them.',
  },
})

export const TheChaoticEvilAlignmentSection = Content.defineSection('making-characters/the-chaotic-evil-alignment', {
  parent: AlignmentSection,
  content: {
    name: 'The Chaotic Evil Alignment',
    description:
      '_I don’t care what I have to do to get what I want._\n\nChaotic evil characters have a complete disregard for others. Each believes he or she is the only being that matters and kills, steals, and betrays others to gain power. Their word is meaningless and their actions destructive. Their worldviews can be so warped that they destroy anything and anyone that doesn’t directly contribute to their interests.\n\nBy the standards of good and lawful good people, chaotic evil is as abhorrent as evil, perhaps even more so. Chaotic evil monsters such as demons and orcs are at least as much of a threat to civilization and general well-being as evil monsters are. An evil creature and a chaotic evil creature are both opposed to good, but they don’t have much respect for each other either and rarely cooperate toward common goals.',
  },
})

export const UnalignedSection = Content.defineSection('making-characters/unaligned', {
  parent: AlignmentSection,
  content: {
    name: 'Unaligned',
    description:
      '_Just let me go about my business._\n\nIf you’re unaligned, you don’t actively seek to harm others or wish them ill. But you also don’t go out of your way to put yourself at risk without some hope for reward. You support law and order when doing so benefits you. You value your own freedom, without worrying too much about protecting the freedom of others.\n\nA few unaligned people, and most unaligned deities, aren’t undecided about alignment. Rather, they’ve chosen not to choose, either because they see the benefits of both good and evil or because they see themselves as above the concerns of morality. [The Raven Queen](trait:deity/raven-queen) and her devotees fall into the latter camp, believing that moral choices are irrelevant to their mission since death comes to all creatures regardless of alignment.',
  },
})

export const AlignmentVsPersonalitySection = Content.defineSection('making-characters/alignment-vs-personality', {
  parent: AlignmentSection,
  content: {
    name: 'Alignment vs. Personality',
    description:
      'Isn’t alignment just another part of your personality? Yes and no.\n\nCertain personality traits have moral weight, particularly those that influence how you interact with others. Cruelty and generosity can be considered personality traits, but they’re also manifestations of your beliefs about the importance and worth of other people. A character who aspires to good might have a cruel streak, but if that streak manifests too frequently or in extreme ways, it’s hard to say he’s really upholding his moral ideals.\n\nOther personality traits have no moral weight at all. A fastidious and well-organized person can just as easily be evil as good. An impulsive prankster can also be good or evil. These quirks of personality are mostly unrelated to alignment, but your alignment might affect the way your personality translates into action. An evil prankster might favor cruel practical jokes that cause personal harm and damage property, while a good one would steer away from such injurious acts.',
  },
})

export const DeitiesSection = Content.defineSection('making-characters/deities', {
  parent: RoleplayingSection,
  content: {
    name: 'Deities',
    description:
      'Deities are the most powerful immortal creatures, residents of the countless dominions that swirl through the Astral Sea. They appear in dreams and visions to their followers and wear countless different faces, and artwork depicting them shows them in a variety of forms. Their true nature is beyond any physical form. [Corellon](trait:deity/corellon) is often depicted as an eladrin, but he is no more an eladrin than he is a fey panther—he is a god, and he transcends the physical laws that bind even angels to their concrete forms.\n\nSome deities are good or lawful good, some are evil or chaotic evil, and some are unaligned. Each deity has a vision of how the world should be, and the agents of the deities seek to bring that vision to life in the world. Except for the chaotic evil gods (Gruumsh and Lolth), all deities are enemies of the demons, which would rather destroy the world than govern it.\n\nMost people revere more than one deity, praying to different gods at different times. Commoners in a small town might visit a temple that has three altars, where they pray to [Bahamut](trait:deity/bahamut) for protection, [Pelor](trait:deity/pelor) for fertile crops, and [Moradin](trait:deity/moradin) to aid their skill at crafting. Clerics and paladins more often serve a single deity, championing that god’s particular cause in the world. Other adventurers range across the spectrum, from paying lip service to the whole pantheon, to fervently serving a single god, to ignoring the gods entirely as they pursue their own divine ascension.\n\nMany deities have contradictory versions of how the world should work. Even the agents and worshipers of deities who share an alignment can come into conflict.',
  },
})

export const AvandraSection = Content.linkEntity(DeitiesSection, Deities.Avandra)
export const BahamutSection = Content.linkEntity(DeitiesSection, Deities.Bahamut)
export const CorellonSection = Content.linkEntity(DeitiesSection, Deities.Corellon)
export const ErathisSection = Content.linkEntity(DeitiesSection, Deities.Erathis)
export const IounSection = Content.linkEntity(DeitiesSection, Deities.Ioun)
export const KordSection = Content.linkEntity(DeitiesSection, Deities.Kord)
export const MeloraSection = Content.linkEntity(DeitiesSection, Deities.Melora)
export const MoradinSection = Content.linkEntity(DeitiesSection, Deities.Moradin)
export const PelorSection = Content.linkEntity(DeitiesSection, Deities.Pelor)
export const RavenQueenSection = Content.linkEntity(DeitiesSection, Deities.RavenQueen)
export const SehanineSection = Content.linkEntity(DeitiesSection, Deities.Sehanine)

export const EvilAndChaoticEvilDeitiesSection = Content.defineSection('making-characters/evil-and-chaotic-evil-deities', {
  parent: DeitiesSection,
  content: {
    name: 'Evil and Chaotic Evil Deities',
    description:
      'Your character can worship an evil or a chaotic evil deity without being of the same alignment, but that’s walking a fine line. The commandments of these deities exhort their followers to pursue evil ends or commit destructive deeds.\n\nThe commandments of evil and chaotic evil deities aren’t included here. They’re described in the _Dungeon Master’s Guide_.\n\n**Asmodeus** is the evil god of the Nine Hells. He is patron of the powerful, god of tyranny and domination, and the commander of devils.\n\n**Bane** is the evil god of war and conquest. Militaristic nations of humans and goblins serve him and conquer in his name.\n\n**Gruumsh** is the chaotic evil god of destruction, lord of marauding barbarian hordes. Where Bane commands conquest, Gruumsh exhorts his followers to slaughter and pillage. Orcs are his most fervent followers.\n\n**Lolth** is the chaotic evil god of shadow, lies, and spiders. Scheming and treachery are her commands, and her clerics are a constant force of disruption in the otherwise stable society of the evil drow.\n\n**Tiamat** is the evil god of wealth, greed, and envy. She urges her followers to take vengeance for every slight, and she is the patron of chromatic dragons.\n\n**Torog** is the evil god of the Underdark, patron of jailers and torturers. Common superstition holds that if his name is spoken, the King that Crawls will burrow up from below and drag the hapless speaker underground to an eternity of imprisonment and torture.\n\n**Vecna** is the evil god of undead, necromancy, and secrets. He rules that which is not meant to be known and that which people wish to keep secret.\n\n**Zehir** is the evil god of darkness, poison, and assassins. Snakes are his favored creation, and the yuan-ti revere him above all other gods.',
  },
})

export const PersonalitySection = Content.defineSection('making-characters/personality', {
  parent: RoleplayingSection,
  content: {
    name: 'Personality',
    description:
      'DUNGEONS & DRAGONS is a game of heroic extremes, populated by legendary heroes and unrepentant villains. Your character needs only a few personality traits that you can use as roleplaying touchstones, key traits that you can focus on and that are fun to play. A complex background and extensive motivations aren’t necessary, although you can flesh out your character’s personality as much as you like.\n\nA typical D&D adventure offers many opportunities for your character’s personality to shine. Those roleplaying opportunities usually arise in three kinds of situations: social interactions, decision points, and dire straits. The following sections pose questions to help you choose personality traits for your character, which you can write on your character sheet. Select one personality trait for each kind of situation. If you already have a personality in mind for your character, you can skip this section; the information here is for inspiration only.',
  },
})

export const SocialInteractionsSection = Content.defineSection('making-characters/social-interactions', {
  parent: PersonalitySection,
  content: {
    name: 'Social Interactions',
    description:
      'When you communicate with a nonplayer character outside combat and try to influence that individual, that’s a social interaction. You might try to persuade a guardian monster to let you pass, negotiate with a merchant lord to increase the pay offered for a dangerous mission, or question a surly centaur about the goblins that ambush travelers in the forest. The DM plays the part of any NPC you talk to, while you and the other players decide what your characters say, even speaking in character if you like.\n\n_How do others perceive you in social interactions?_\n\n| | | |\n| :--- | :--- | :--- |\n| Cheerful | Talkative | Reserved |\n| Charming | Witty | Relaxed |\n\n_How optimistic are you?_\n\n| | | |\n| :--- | :--- | :--- |\n| Enthusiastic | Hopeful | Fatalistic |\n| Grim | Self-assured | Brooding |\n\n_How trusting are you?_\n\n| | | |\n| :--- | :--- | :--- |\n| Gullible | Open-minded | Skeptical |\n| Suspicious | Naive | Trusting |',
  },
})

export const DecisionPointsSection = Content.defineSection('making-characters/decision-points', {
  parent: PersonalitySection,
  content: {
    name: 'Decision Points',
    description:
      'When you face tough choices in an adventure, your character’s personality can influence the decisions you make. Do you try to sneak past the dragon’s cave, approach openly to parley, or storm in with blades drawn and spells blazing? Which of the six stone doors in the entry hall do you open first? Do you save the captives from the trap or pursue the slavers? When your group tries to decide what to do next, how do you approach such conversations?\n\n_How assertive are you at a decision point?_\n\n| | | |\n| :--- | :--- | :--- |\n| Humble | Adaptable | Commanding |\n| Timid | Easygoing | Impatient |\n\n_How conscientious are you about following rules?_\n\n| | | |\n| :--- | :--- | :--- |\n| Scrupulous | Pragmatic | Dutiful |\n| Honest | Flexible | Wild |\n\n_How empathetic are you?_\n\n| | | |\n| :--- | :--- | :--- |\n| Kind | Stern | Thoughtful |\n| Protective | Hard-hearted | Oblivious |',
  },
})

export const DireStraitsSection = Content.defineSection('making-characters/dire-straits', {
  parent: PersonalitySection,
  content: {
    name: 'Dire Straits',
    description:
      'Some of the most memorable demonstrations of a character’s personality appear in dire straits. A character retorts to a villain’s threat with a trademark one-liner, shouts a famous battle cry, leaps into harm’s way to protect others, or turns and flees in the face of overwhelming odds. Every battle, hazard, or other dire situation offers opportunities for roleplaying, especially if things go awry. When your character lands in a dire situation, how does he or she usually react? Do you follow a code? Do you follow your heart? Do you look out for yourself or others?\n\n_How courageous are you in dire straits?_\n\n| | | |\n| :--- | :--- | :--- |\n| Brave | Competitive | Steady |\n| Cautious | Reckless | Fierce |\n\n_How do you feel when faced by setbacks?_\n\n| | | |\n| :--- | :--- | :--- |\n| Stoic | Driven | Happy-go-lucky |\n| Vengeful | Bold | Impassioned |\n\n_How are your nerves?_\n\n| | | |\n| :--- | :--- | :--- |\n| Calm | Skittish | Restless |\n| Impulsive | Patient | Unshakable |',
  },
})

export const MannerismsSection = Content.defineSection('making-characters/mannerisms', {
  parent: RoleplayingSection,
  content: {
    name: 'Mannerisms',
    description:
      'The easiest way to bring your character to life at the gaming table is to adopt distinctive mannerisms—particular patterns of speech or other behaviors that you can take on at the table to convey how your character looks, sounds, and acts. If you are naturally inclined to spin dice or shuffle cards while the game takes place, you might consider incorporating that behavior into your character. Perhaps your character carries a deck of cards that he shuffles when he’s bored or nervous, or maybe she crouches to the ground and creates little sculptures out of rubble while she’s waiting for her companions to decide where to go next. By contrast, another character might vociferously participate in those deliberations, frequently resorting to exclamations such as “By Kord’s right arm!” to emphasize his opinion.\n\nSpeech patterns can be even more distinctive. A dwarf who never enters battle without shouting, “The dwarves are upon you!” injects a dose of fun roleplaying just as the die rolling is getting most intense. A wizard who never speaks except in haiku might be carrying the idea of distinctive speech to an extreme, but if you can pull it off (try writing a page full of standbys to cover common situations before the game begins), everyone at the table will remember your character for years!\n\nAnother good way to think about speech and other mannerisms is to create specific prompts your character says or does when using certain powers. For example, your paladin might yell, “Feel the might of Bahamut!” every time she uses the _[righteous smite](ability:paladin/power/righteous-smite)_ power, and murmur, “Bahamut’s healing breath wash over you,” when she uses _[lay on hands](ability:paladin/power/lay-on-hands)_.',
  },
})

export const AppearanceSection = Content.defineSection('making-characters/appearance', {
  parent: RoleplayingSection,
  content: {
    name: 'Appearance',
    description:
      'Is your character tall, short, or in between? Solid and muscular, or lean and wiry? Male or female? Old or young? These decisions have no real impact on the game, but they might affect the way that nonplayer characters—and even the other players—think about your character.\n\nEach race description in [Chapter 3](content:races) gives the average height and weight for a character of that race. You can decide for your character to be above or below average.\n\nYou should also decide what color skin, hair, and eyes your character has. Most races approximate the human range of coloration, but some races also have unusual coloration, such as the stony gray skin of dwarves or the violet eyes of some elves.\n\nFinally, consider features that distinguish your character from others. Some of these might be inborn, such as an unusual eye color or skin color, while others might be habits of fashion or the scars of past injuries. Jewelry, clothing, tattoos and birthmarks, hairstyles and colors, and posture—one unusual feature from among those choices can make your character stand out in the other players’ minds.',
  },
})

export const BackgroundSection = Content.defineSection('making-characters/background', {
  parent: RoleplayingSection,
  content: {
    name: 'Background',
    description:
      'Your character’s background often stays there—in the background. What’s most important about your character is what you do in the course of your adventures, not what happened to you in the past. Even so, thinking about your birthplace, family, and upbringing can help you decide how to play your character.\n\nThese questions can help you start thinking about your background.\n\n- Why did you decide to be an adventurer?\n- How did you acquire your class? If you’re a fighter, for example, you might have been in a militia, come from a family of soldiers, or trained in a martial school, or you might be a self-taught warrior.\n- How did you acquire your starting equipment? Did you assemble it piece by piece over time? Was it a gift from a parent or a mentor? Do any of your personal items have special significance?\n- What’s the worst event of your life?\n- What’s the best thing that’s ever happened to you?\n- Do you stay in contact with your family? What do your relatives think of you and your chosen career?',
  },
})

export const LanguagesAndScriptsSection = Content.defineSection('making-characters/languages-and-scripts', {
  parent: RoleplayingSection,
  content: {
    name: 'Languages and Scripts',
    description:
      'Ten languages form the basis of every dialect spoken throughout the D&D game’s many worlds. These languages are transcribed in different scripts, most of which are alphabets, from the flowing characters of the Rellanic alphabet to the runes of the Davek alphabet. The Supernal script is a system of hieroglyphics.\n\nDepending on your character’s race, you start off knowing two or three languages and the script associated with each. You can learn additional languages by taking the [Linguist](trait:feat/linguist) feat (page 198).\n\nYou can’t choose the Abyssal or Supernal languages as a 1st-level character.\n\n| Language | Spoken by . . . | Script |\n| :--- | :--- | :--- |\n| Common | Humans, halflings, tieflings | Common |\n| Deep Speech | Mind flayers, githyanki, kuo-toas | Rellanic |\n| Draconic | Dragons, dragonborn, kobolds | Iokharic |\n| Dwarven | Dwarves, azer | Davek |\n| Elven | Elves, eladrin, fomorians | Rellanic |\n| Giant | Giants, orcs, ogres | Davek |\n| Goblin | Goblins, hobgoblins, bugbears | Common |\n| Primordial | Efreets, archons, elementals | Barazhad |\n| Supernal | Angels, devils, gods | Supernal |\n| Abyssal | Demons, gnolls, sahuagin | Barazhad |\n\nThe _Dungeon Master’s Guide_ has more information about languages and scripts.',
  },
})

export const MakingChecksSection = Content.defineSection('making-characters/making-checks', {
  parent: MakingCharactersSection,
  content: {
    name: 'Making Checks',
    description:
      'Before you go any further, it’s important to understand the use of the [core mechanic](content:how-to-play/the-core-mechanic) and how it applies to every aspect of the game.\n\nEvery power, skill, and special feature in the game is keyed to one of the six ability scores. You resolve actions by making different kinds of **checks**, all of which use the same core mechanic: roll a d20, add any modifiers, and announce the result. Your Dungeon Master then compares your **check result** against a target number, the **Difficulty Class (DC)** of the test, task, or attack that you’re attempting. Most difficulty class numbers are set for the Dungeon Master; for example, an ogre savage has an [Armor Class](characteristic:armor-class) of 19, and climbing a typical dungeon wall has a DC of 15. Other times, your Dungeon Master estimates the DC of a task that isn’t specifically covered by the rules.\n\nThe D&D game uses three basic kinds of checks, which are described further below: attack rolls, skill checks, and ability checks.\n\nIf you try to hit a monster with a mace, you’re making a [Strength](characteristic:strength) attack against the monster’s AC; if you try to blast a monster with a _[fireball](ability:wizard/power/fireball)_ spell, it’s an [Intelligence](characteristic:intelligence) attack against [Reflex](characteristic:reflex) defense; if you try to balance on a tightrope, it’s an [Acrobatics](characteristic:skill/acrobatics) check against a DC set by the DM; if you try to bash down a door, it’s a Strength check against a set DC that depends on the nature of the door. The description of each power and skill tells you what ability you base its check on. Occasionally, you make a check that is compared against someone else’s check result. Doing this is called making an **opposed check**.\n\nA **modifier** is any number that adds to or subtracts from a die roll. The most commonly used modifiers are based on your ability scores. A **bonus** refers to positive values. If a feat adds your [Dexterity modifier](characteristic:dexterity-modifier) to damage, it won’t do anything if your Dexterity modifier isn’t positive. A **penalty** is the opposite: It’s always negative.\n\nPart of creating a character is figuring out your normal check modifiers for common tasks such as making attacks or using skills. Most checks in the game add additional modifiers, including the following:\n\n- Your bonus from your weapon proficiency if you’re making an attack\n- Your skill training bonus if you’re using a skill\n- Special bonuses for feats you’ve chosen or magic items you’re using\n- Bonuses that apply to the circumstances of the check (charge attacks or combat advantage, for example)\n- Penalties that apply to the circumstances (your target has cover, you’re attacking while prone, and so on)\n\nYour modifiers reflect everything about you that is relevant to the task at hand: your training, competence, and native ability. The d20 roll represents luck, fate, fortune, and unpredictable opportunities or sudden distractions. A battle is full of frantic action, and the random die roll represents that mayhem.',
  },
})

export const AttackRollsSection = Content.defineSection('making-characters/attack-rolls', {
  parent: MakingChecksSection,
  content: {
    name: 'Attack Rolls',
    description:
      'Perhaps the most frequent die rolls you make in a D&D game are **attack rolls**. All attack rolls are described in this way:\n\n**[Ability] vs. [Defense]**\n\nFor example, a wizard’s _[fireball](ability:wizard/power/fireball)_ spell is an [Intelligence](characteristic:intelligence) attack against the target’s [Reflex](characteristic:reflex) defense (written as Intelligence vs. Reflex). A fighter’s longsword attack is a [Strength](characteristic:strength) attack against [Armor Class](characteristic:armor-class) (or AC). The ability score and the defense involved depend on the attack you’re using. If the check result is higher than or equal to your opponent’s defense, you hit and (usually) deal damage.\n\nThe total of all the modifiers you add to an attack roll is your **base attack bonus**. You can find much more about attack rolls in [Chapter 9](content:combat).\n\n**Example:** Kiera, an 8th-level elf ranger with a [Dexterity](characteristic:dexterity) of 17 and a _+1 magic bow,_ shoots her bow at an ogre savage. Her base attack bonus is +10, which includes +4 for one-half her level, her +3 Dexterity modifier, her +2 bonus for being proficient with the bow, and the bow’s +1 enhancement bonus. To see if she hits the ogre, she rolls 1d20 and adds 10. If she rolls an 11, her check result is 21. Since an ogre savage has an Armor Class of 19, she has scored a hit!\n\n**Attack**\n\nTo make an attack, roll 1d20 and add the following:\n\n- One-half your level\n- The relevant ability score modifier\n- All other modifiers (see [page 279](content:combat/attack-modifiers))\n\nThe total is your attack result.',
  },
})

export const SkillChecksSection = Content.defineSection('making-characters/skill-checks', {
  parent: MakingChecksSection,
  content: {
    name: 'Skill Checks',
    description:
      'The knowledge and talents your character has learned are represented by **skill checks**. When you use a skill, you hope for a result higher than the DC of the task.\n\nFor example, a cleric’s [Heal](characteristic:skill/heal) check is a skill check against a specific DC. A rogue’s [Stealth](characteristic:skill/stealth) check is a skill check against a DC equal to the target’s [Perception](characteristic:skill/perception) check result (an opposed check). If the check result is higher than or equal to the DC, you succeed.\n\nThe total of the modifiers you add to a skill check is your **base skill check bonus**. You can find much more about skill checks in [Chapter 5](content:skills).\n\n**Example:** Alek, a 6th-level human wizard with an [Intelligence](characteristic:intelligence) of 18, is trying to identify a strange creature by using the [Arcana](characteristic:skill/arcana) skill. His base skill check bonus is +12, which includes +3 for one-half his level, his +4 Intelligence modifier, and a +5 bonus for being trained in Arcana. To see if he identifies the creature, he rolls 1d20 and adds 12. If he rolls a 7, his check result is 19. Since the DC to identify the creature is 15, he realizes it’s a quickling.\n\n**Skill Check**\n\nTo make a skill check, roll 1d20 and add the following:\n\n- One-half your level\n- The relevant ability score modifier\n- All other modifiers (see [page 178](content:skills/skill-check-bonuses))\n\nThe total is your skill check result.',
  },
})

export const AbilityChecksSection = Content.defineSection('making-characters/ability-checks', {
  parent: MakingChecksSection,
  content: {
    name: 'Ability Checks',
    description:
      'Sometimes you’re not making an attack or a skill check, but trying to accomplish a task that doesn’t fall into either category. You make an ability check. Ability checks give the DM a way to adjudicate actions when an attack or a skill check isn’t appropriate.\n\n**Ability Check**\n\nTo make an ability check, roll 1d20 and add the following:\n\n- One-half your level\n- The relevant ability score modifier\n- All other modifiers\n\nThe total is your ability check result.\n\n**Example:** A [Strength](characteristic:strength) check to break down a door is 1d20 + one-half your level + your [Strength ability modifier](characteristic:strength-modifier). A 4th-level character with a 16 Strength makes a Strength check by rolling 1d20 + 5 (+2 for level, +3 Strength modifier). If he rolls a 16, his result for that Strength check is 21.',
  },
})

export const ActionsAndCombatSection = Content.defineSection('making-characters/actions-and-combat', {
  parent: MakingChecksSection,
  content: {
    name: 'Actions and Combat',
    description:
      'Combat encounters are played out in rounds. Each round represents about 6 seconds in the game world, regardless of how long it takes to play out the round. Combat starts with [initiative](characteristic:initiative) checks to determine the order of play for the entire battle. There are four types of actions you can take in any round: [standard actions](action-type:standard-action), [move actions](action-type:move-action), [minor actions](action-type:minor-action), and [free actions](action-type:free-action). See [Chapter 9](content:combat) for complete rules on combat.',
  },
})

export const GainingLevelsSection = Content.defineSection('making-characters/gaining-levels', {
  parent: MakingCharactersSection,
  content: {
    name: 'Gaining Levels',
    description:
      'As you adventure and gain experience, you advance in level. Gaining a level (also called leveling or leveling up) is one of the biggest rewards you’ll receive for your success in the game—your character improves in several ways every time you go up a level.\n\nEach time you overcome a noncombat encounter, defeat monsters, or complete a quest, your Dungeon Master awards you **experience points (XP)**. When you earn enough XP, you reach a new level. For more about rewards, see [Chapter 8](content:adventuring).\n\nThe [Character Advancement](content:making-characters/character-advancement) table shows the total XP you need to reach each level and the abilities and other benefits you gain with each new level.',
  },
})

export const StepByStepSection = Content.defineSection('making-characters/step-by-step', {
  parent: GainingLevelsSection,
  content: {
    name: 'Step by Step',
    description:
      'Refer to the Character Advancement table and follow these steps when your character gains a level.\n\nAt most levels, you gain access to a new power or a new feat. Refer to your class description in [Chapter 4](content:classes) for the full listing of the powers available to you, and see [Chapter 6](content:feats) for the complete list of feats. The game assumes that you’ve been learning these powers in your spare time, studying musty tomes or practicing a complicated series of maneuvers. In game terms, though, as soon as you gain a level, you can immediately use your new powers and feats.',
  },
})

export const StepAbilityScoresSection = Content.defineSection('making-characters/1-ability-scores', {
  parent: StepByStepSection,
  content: {
    name: '1. Ability Scores',
    description:
      'Check the Ability Scores column to see if you can improve your ability scores. If you can, choose the abilities you want to increase. At 4th, 8th, 14th, 18th, 24th, and 28th levels, you [increase two ability scores by 1](trait-tag:ability-score/increase) (you can’t take both increases in the same score). At 11th and 21st level, you increase each of your ability scores by 1.\n\nIf you increase an ability score to an even number, your ability modifier goes up, and that change affects powers, skills, and defenses that rely on that ability score. Make a note of that fact, but don’t change any numbers just yet.',
  },
})

export const StepLevelModifierSection = Content.defineSection('making-characters/2-level-modifier', {
  parent: StepByStepSection,
  content: {
    name: '2. Level Modifier',
    description:
      'If your new level is an even number, everything that’s based on one-half your level becomes better—your attacks, defenses, [initiative](characteristic:initiative), skill checks, and ability checks. In combination with any increased ability modifiers, you now have the information you need to increase those numbers. Go through your character sheet and note those increases.',
  },
})

export const StepParagonAndEpicSection = Content.defineSection('making-characters/3-paragon-and-epic', {
  parent: StepByStepSection,
  content: {
    name: '3. Paragon and Epic',
    description:
      'If you just reached 11th or 21st level, you have some exciting decisions to make—you can choose a paragon path or an epic destiny, both of which are described in [Chapter 4](content:classes). Make that choice, and make a note of the new power or feature you gain.',
  },
})

export const StepHitPointsSection = Content.defineSection('making-characters/4-hit-points', {
  parent: StepByStepSection,
  content: {
    name: '4. Hit Points',
    description:
      'Check your class description in [Chapter 4](content:classes) to see how many [hit points](characteristic:hit-points) you gain with your new level. Add those to your total. If you increased your [Constitution](characteristic:constitution) score, increase your hit points by 1 (as if you had your new Constitution score when you were 1st level). Also, if you increased your Constitution score to an even number, increase your number of [healing surges](characteristic:healing-surges) by one.',
  },
})

export const StepClassFeaturesSection = Content.defineSection('making-characters/5-class-features', {
  parent: StepByStepSection,
  content: {
    name: '5. Class Features',
    description:
      'When you check your class description for hit points, also check your class features to see if any of your powers or other abilities improve with level. For example, the rogue’s [Sneak Attack](trait:rogue/sneak-attack) class feature improves at 11th and 21st levels.',
  },
})

export const StepFeatsSection = Content.defineSection('making-characters/6-feats', {
  parent: StepByStepSection,
  content: {
    name: '6. Feats',
    description:
      'Check the Powers and Features column of the Character Advancement table to see if you learn any new feats. You learn one feat at 1st level, one new feat at every even-numbered level after that, plus one new feat at 11th and 21st levels. If you increased an ability score, you might meet the prerequisites for some feats that you didn’t qualify for before. (The Feats Known column on the Character Advancement table enables you to double-check at every level to be sure you have the number of feats you’re entitled to.)',
  },
})

export const StepPowersSection = Content.defineSection('making-characters/7-powers', {
  parent: StepByStepSection,
  content: {
    name: '7. Powers',
    description:
      'At most levels, you gain access to a new power. You can take each power only once (you can’t choose the same power multiple times). Refer to your class description in [Chapter 4](content:classes) for a full listing of the powers available to you.\n\n**At-Will Attack Powers:** At 1st level, choose two at-will attack powers from the list in your class description. You don’t automatically learn new at-will powers as you advance, but as you gain levels you can choose to retrain (see “[Retraining](content:making-characters/retraining),” below) and replace an at-will power you know with a new one.\n\n**Encounter Attack Powers:** At 1st level, select one power from the list of 1st-level encounter attack powers in your class description. At 3rd and 7th levels, you learn a new encounter power of your level or lower.\n\nAt 11th level, you learn a new encounter power when you choose a paragon path. The path you choose determines the power you gain.\n\nAt 13th, 17th, 23rd, and 27th levels, you can replace any encounter attack power you know from your class with a new one of your new level (or an encounter attack power of a lower level, if you choose).\n\n**Daily Attack Powers:** At 1st level, choose one power from the list of 1st-level daily attack powers in your class description. You learn a new daily attack power of your level or lower at 5th level and again at 9th level.\n\nAt 20th level, you learn a new daily power, determined by your paragon path.\n\nAt 15th, 19th, 25th, and 29th levels, you can replace any daily attack power you know from your class with a new daily attack power of your new level (or a daily attack power of a lower level, if you choose).\n\n**Utility Powers:** At 2nd level, choose one utility power from the list of 2nd-level utility powers in your class description.\n\nYou learn a new power chosen from the list of utility powers of your level (or a utility power of a lower level, if you choose) at 6th level and again at 10th, 16th, and 22nd levels.\n\nAt 12th level, you learn a new utility power determined by your paragon path. At 26th level, you learn a new utility power from your epic destiny.',
  },
})

export const RetrainingSection = Content.defineSection('making-characters/retraining', {
  parent: GainingLevelsSection,
  content: {
    name: 'Retraining',
    description:
      'Sometimes you make decisions when you create or advance your character that you later regret. Perhaps a power you chose isn’t working with your character concept, or a feat never comes into play the way you anticipated. Fortunately in such a case, level advancement isn’t only a time to learn new powers—it’s also an opportunity to change some of those decisions.\n\nEvery time you gain a level, you can retrain your character: change one feat, power, or skill selection you made previously. You can make only one change at each level. When your class table tells you to replace a power you know with a different power of a higher level, that doesn’t count as retraining—you can still retrain an additional feat, power, or skill as normal.\n\n**Feat:** You can replace a feat with another feat. You must meet the prerequisites of the new feat. You can’t replace a feat if it’s a prerequisite for any other attribute you have (another feat or a paragon path, for example), or if the feat is a feature of your class, path, or destiny (as the [Ritual Caster](trait:feat/ritual-caster) feat is a class feature for wizards). You can replace heroic tier feats (see [page 193](content:feats/heroic-tier-feats)) with higher-tier feats, but only one at a time, once per level you gain. For instance, at 11th level, you gain one feat and you can also retrain one of your heroic tier feats, gaining a paragon tier feat in its place. At 12th level you can do the same, so you can potentially have four paragon tier feats at 12th level. (You might find that many of your heroic tier feats remain worthwhile well into higher levels, however.)\n\n**Power:** You can replace a power with another power of the same type (at-will attack power, encounter attack power, daily attack power, or utility power), of the same level or lower, and from the same class—a 5th-level attack power for another 5th-level attack power, for example, or a 22nd-level utility power for a different 22nd-level utility power.\n\nYou can’t replace a power that’s a class feature (such as a cleric’s _[healing word](ability:cleric/feature/healing-word)_ or a warlock’s _[eldritch blast](ability:warlock/power/eldritch-blast)_) or a power gained from a paragon path or epic destiny.\n\n**Skill:** You can replace a trained skill with another trained skill from your class list. You can’t replace a skill if it’s required for a feat, a power, or any other attribute you have, or if it’s predetermined by your class (such as [Arcana](characteristic:skill/arcana) for wizards or [Religion](characteristic:skill/religion) for clerics). If your class requires you to choose one of two skills (such as the ranger, which requires either [Dungeoneering](characteristic:skill/dungeoneering) or [Nature](characteristic:skill/nature)), you can alter your choice by retraining, but you’re limited to replacing one skill with the other.',
  },
})

export const CharacterAdvancementSection = Content.defineSection('making-characters/character-advancement', {
  parent: GainingLevelsSection,
  content: {
    name: 'Character Advancement',
    description:
      '| Total XP | Level | Ability Scores | Powers and Features | Feats Known | Total Powers Known (At-will/Encounter/Daily/Utility) |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| 0 | 1st | see race | class features; racial traits; gain 1 feat; train starting skills; gain 2 at-will attack powers; gain 1 encounter attack power; gain 1 daily attack power | 1† | 2/1/1/0 |\n| 1,000 | 2nd | — | gain 1 utility power; gain 1 feat | 2 | 2/1/1/1 |\n| 2,250 | 3rd | — | gain 1 encounter attack power | 2 | 2/2/1/1 |\n| 3,750 | 4th | [+1 to two](trait-tag:ability-score/increase) | gain 1 feat | 3 | 2/2/1/1 |\n| 5,500 | 5th | — | gain 1 daily attack power | 3 | 2/2/2/1 |\n| 7,500 | 6th | — | gain 1 utility power, gain 1 feat | 4 | 2/2/2/2 |\n| 10,000 | 7th | — | gain 1 encounter attack power | 4 | 2/3/2/2 |\n| 13,000 | 8th | [+1 to two](trait-tag:ability-score/increase) | gain 1 feat | 5 | 2/3/2/2 |\n| 16,500 | 9th | — | gain 1 daily attack power | 5 | 2/3/3/2 |\n| 20,500 | 10th | — | gain 1 utility power, gain 1 feat | 6 | 2/3/3/3 |\n\n**NOTE:** In addition to the benefits summarized on this table, you always get more hit points when you gain a level. See your class description for details.\n\n† Humans gain one additional feat at 1st level. Some classes grant additional feats as well.',
  },
})

export const TheThreeTiersSection = Content.defineSection('making-characters/the-three-tiers', {
  parent: MakingCharactersSection,
  content: {
    name: 'The Three Tiers',
    description:
      'The thirty levels of your career are divided into three tiers: the heroic tier (1st level through 10th level), the paragon tier (11th level through 20th level), and the epic tier (21st level through 30th level). When you leave one tier and cross the threshold into a new one, you experience some major increases in power. At the same time, the threats you face in a higher tier are much more lethal.\n\nIn the **heroic** tier, your character is already a hero, set apart from the common people by your natural talents, learned skills, and some hint of a greater destiny that lies before you. Your capabilities are largely determined by your choice of character class and to a lesser extent by your race. You move around on foot or on a relatively mundane mount such as a horse. In combat, you might make mighty leaps or incredible climbs, but you’re still basically earthbound. The fate of a village might hang on the success or failure of your adventures, to say nothing of the risk to your own life. You navigate dangerous terrain and explore haunted crypts, where you can expect to fight sneaky goblins, savage orcs, ferocious wolves, giant spiders, evil cultists, and bloodthirsty ghouls. If you face a dragon, it is a young one still searching for a lair, one that has not yet found its place in the world. One, in other words, that is much like you.\n\nIn the **paragon** tier, your character is a shining example of heroism, set well apart from the masses. Your class still largely determines your capabilities. In addition, you gain extra abilities in your specialty: your paragon path. When you reach 11th level, you choose a path of specialization, a course that defines who you are within a certain narrow range of criteria. You are able to travel more quickly from place to place, perhaps on a hippogriff mount or using a spell to grant your party flight. In combat, you might fly or even teleport short distances. Death becomes a surmountable obstacle, and the fate of a nation or even the world might hang in the balance as you undertake momentous quests. You navigate uncharted regions and explore long-forgotten dungeons, where you can expect to fight sneaky drow, savage giants, ferocious hydras, fearless golems, rampaging barbarian hordes, bloodthirsty vampires, and crafty mind flayers. When you face a dragon, it is a powerful adult who has established a lair and found its place in the world. Again, much like you.\n\nIn the **epic** tier, your character’s capabilities are truly superheroic. Your class still determines most of your abilities, but your most dramatic powers come from your choice of epic destiny, which you select at 21st level. You travel across nations in the blink of an eye, and your whole party might take to the air in combat. The success or failure of your adventures has far-reaching consequences, possibly determining the fate of millions in this world and even planes beyond. You navigate otherworldly realms and explore never-before-seen caverns of wonder, where you can expect to battle savage pit fiends, the ferocious tarrasque, sinister sorrowsworn deathlords, bloodthirsty lich archmages, and even demon princes. The dragons you encounter are ancient wyrms of truly earthshaking power, whose sleep troubles kingdoms and whose waking threatens the world.',
  },
})

export const CharacterSheetSection = Content.defineSection('making-characters/character-sheet', {
  parent: MakingCharactersSection,
  content: {
    name: 'Character Sheet',
    description:
      'You can record information about your character any way you like, but most players prefer to use a character sheet. You can find a blank character sheet at the end of this book.\n\nReproduced here, at half size, is an example of a typical character sheet. The various sections are keyed with numbers that correspond to the following information.\n\n1. **Character Name:** Choose a name for your character and write it here.\n2. **Level/Class/Paragon Path/Epic Destiny:** Record your level and character class. If you’re 11th level, you also choose a paragon path associated with your class (see the last few pages of each class description). If you’re 21st level, you add an epic destiny.\n3. **Total XP:** Keep track of your accumulated experience points here.\n4. **Race and Size:** Choose your character race ([Chapter 3](content:races)) and record your size. Most characters are Medium size; halflings are Small.\n5. **Age, Gender, Height, Weight:** These details are up to you. Most adventurers begin as young adults—say, 18 to 25 for humans.\n6. **Alignment, Deity, Adventuring Company or Other Affiliations:** Record your [alignment](content:making-characters/alignment), your character’s patron [deity](content:making-characters/deities) (if you choose one), and the name of the group you belong to (if any).\n7. **Initiative:** Determine your [initiative](characteristic:initiative) modifier and record it here. Note any conditional bonuses in the space provided. See [page 267](content:combat/initiative).\n8. **Defenses:** Record your [Armor Class](characteristic:armor-class), [Fortitude](characteristic:fortitude) Defense, [Reflex](characteristic:reflex) Defense, and [Will](characteristic:will) Defense here. These defenses are equal to 10 + one-half your level + the appropriate ability modifier. You also add the bonus from the armor you wear to your Armor Class. If you wear light armor, you add your Dexterity or Intelligence modifier to your Armor Class as well. Note any conditional bonuses in the space provided. See [page 275](content:combat/defenses).\n9. **Speed:** Determine your [speed](characteristic:speed) and record it here. If you have special movement, record it here.\n10. **Ability Scores:** Record your ability scores, ability modifiers, and the total of your ability modifier + one-half your level for each ability here (see “[Ability Scores](content:making-characters/ability-scores),” page 16). If you’re 1st level, one-half your level is +0.\n11. **Senses:** Determine your passive [Perception](characteristic:skill/perception) and passive [Insight](characteristic:skill/insight) modifiers and record them here. See [page 179](content:skills/passive-checks). Even if you don’t select the Perception and Insight skills, you still have to make these checks often. If your race provides a special sense, record it here.\n12. **Attack Workspace:** Use this space to determine your attack bonuses with your most frequent attacks.\n13. **Hit Points:** Your [hit points](characteristic:hit-points) are determined by your class and level; see the class descriptions in [Chapter 4](content:classes). Add your [Constitution](characteristic:constitution) score to your hit points. Your [bloodied](characteristic:bloodied) value is one-half your maximum hit points, and your [healing surge value](characteristic:surge-value) is one-quarter of your maximum hit points. Record the number of [healing surges](characteristic:healing-surges) you have per day. Your character class determines the number of healing surges you get; you add your [Constitution modifier](characteristic:constitution-modifier) to this number. See your class description in Chapter 4. See [Chapter 9](content:combat) for more about hit points and healing.\n14. **Second Wind:** Once per encounter, you can spend a healing surge as a standard action. See [page 291](content:combat/second-wind). Note any temporary hit points in the space provided.\n15. **Death Saving Throw Failures:** When you are dying, you make saving throws each round. Mark off each failure; when you have failed three death saving throws, you die. See [page 295](content:combat/death-and-dying). Use the boxes to record any saving throw modifiers, resistances to attacks or damage, or current conditions or effects you have.\n16. **Action Points:** Note any action points you’ve earned here. See [page 286](content:combat/action-points).\n17. **Race Features:** Record the special features and advantages your race provides you. Races are described in [Chapter 3](content:races).\n18. **Damage Workspace:** Use this space to determine your damage with your most frequent attacks.\n19. **Basic Attacks:** Record your bonus to attack rolls and the damage you deal when you make a basic attack with the melee weapon and the ranged weapon you normally carry. Use a basic attack when you make an opportunity attack or when a power grants you a basic attack. See [page 287](content:combat/basic-attack).\n20. **Skills:** Check off the skills you’re trained in and determine your base skill check bonus for each one. You have a +5 bonus to checks using skills you’re trained in. See [Chapter 5](content:skills).\n21. **Class/Path/Destiny Features:** Record the special features and advantages your class, paragon path, and epic destiny provide you. Classes, paragon paths, and epic destinies are described in [Chapter 4](content:classes).\n22. **Languages Known:** Record the languages you know from your race and any you might have learned through a feat here.\n23. **Feats:** List the feats you’ve selected, and note their effects. Feats are described in [Chapter 6](content:feats).\n24. **Power Index:** Use this portion of the sheet to list the powers you know, organized by whether they’re attack powers or utility powers. (You can also copy your powers onto index cards, if you prefer to keep track of them that way.) Attack powers are divided between at-will, encounter, and daily powers. Make a note of the type of action you have to spend to use the power (free, minor, move, or standard), which ability it’s based on, and which defense it attacks. Powers are described in Chapter 4.\n25. **Magic Item Index:** Use this portion of your character sheet to list your magic items and any powers they have. (You can also copy your items onto index cards, if you prefer to keep track of them that way.) Magic items are described in [Chapter 7](content:equipment).\n26. **Character Illustration:** Use this space for a picture of your character, if you wish.\n27. **Character Details, Session and Campaign Notes:** Record any notes about the topics in the space provided.\n28. **Other Equipment:** List any other equipment you’re carrying here.\n29. **Rituals:** List the rituals you know here.\n30. **Coins and Other Wealth:** Keep track of your hard-earned gains here.',
  },
})

export const MakingCharactersContent: Array<ContentSection> = [
  MakingCharactersSection,
  CharacterCreationSection,
  RaceClassAndRoleSection,
  CharacterRaceSection,
  CharacterClassSection,
  CharacterRoleSection,
  ControllerSection,
  DefenderSection,
  LeaderSection,
  StrikerSection,
  AttackPowersAndUtilityPowersSection,
  AbilityScoresSection,
  GeneratingAbilityScoresSection,
  StandardArraySection,
  CustomizingScoresSection,
  RollingScoresSection,
  SkillsFeatsPowersAndEquipmentSection,
  FillInTheNumbersSection,
  RoleplayingSection,
  AlignmentSection,
  TheGoodAlignmentSection,
  TheLawfulGoodAlignmentSection,
  TheEvilAlignmentSection,
  TheChaoticEvilAlignmentSection,
  UnalignedSection,
  AlignmentVsPersonalitySection,
  DeitiesSection,
  AvandraSection,
  BahamutSection,
  CorellonSection,
  ErathisSection,
  IounSection,
  KordSection,
  MeloraSection,
  MoradinSection,
  PelorSection,
  RavenQueenSection,
  SehanineSection,
  EvilAndChaoticEvilDeitiesSection,
  PersonalitySection,
  SocialInteractionsSection,
  DecisionPointsSection,
  DireStraitsSection,
  MannerismsSection,
  AppearanceSection,
  BackgroundSection,
  LanguagesAndScriptsSection,
  MakingChecksSection,
  AttackRollsSection,
  SkillChecksSection,
  AbilityChecksSection,
  ActionsAndCombatSection,
  GainingLevelsSection,
  StepByStepSection,
  StepAbilityScoresSection,
  StepLevelModifierSection,
  StepParagonAndEpicSection,
  StepHitPointsSection,
  StepClassFeaturesSection,
  StepFeatsSection,
  StepPowersSection,
  RetrainingSection,
  CharacterAdvancementSection,
  TheThreeTiersSection,
  CharacterSheetSection,
]
