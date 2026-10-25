import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'

export const AdventuringSection = Content.defineSection('adventuring', {
  content: {
    name: 'Adventuring',
    description:
      'Explore the ruins of an ancient drow city, delve into miles of winding tunnels and vast caverns far below the surface, uncover the wicked vizier’s plot to overthrow the baron, travel to the fabled City of Brass in search of a long-forgotten ritual—these are the kinds of adventures you might have when you play the Dungeons & Dragons game.\n\nNow that you’ve created and equipped your character, it’s time to get into the details of what happens during a game session and a campaign. This chapter explains the following topics:\n\n- **[Quests](content:adventuring/quests):** An introduction to quests and how they can lead you into adventure.\n- **[Encounters](content:adventuring/encounters):** A look at the game’s two kinds of encounters and the types of things you can do during an encounter.\n- **[Rewards](content:adventuring/rewards):** Information about experience points, action points, treasure, and other rewards your character can win by completing quests and encounters.\n- **[Exploration](content:adventuring/exploration):** Rules for moving through a dungeon or a trackless wilderness. This section covers the basics of movement, as well as vision and light and dealing with obstacles that block your path.\n- **[Rest and Recovery](content:adventuring/rest-and-recovery):** Details on recovering [hit points](characteristic:hit-points), [healing surges](characteristic:healing-surges), and powers, and on keeping watch while you rest.',
  },
})

export const QuestsSection = Content.defineSection('adventuring/quests', {
  parent: AdventuringSection,
  content: {
    name: 'Quests',
    description:
      'Most adventures have a goal, something you have to do to complete the adventure successfully. The goal might be a personal one, a cause shared by you and your allies, or a task you have been hired to perform. A goal in an adventure is called a quest.\n\nQuests connect a series of encounters into a meaningful story. The simplest adventures revolve around a single quest. For example, your quest might be to thwart goblin raiders in nearby ruins, to rescue a kidnapped merchant, or to behead the red dragon Kharathas.\n\nMost adventures are more complex, involving multiple quests. A single major quest might drive your adventure. For example, a high priest of Pelor calls upon you to venture into the Fortress of the Iron Ring to retrieve the ancient artifact called the Adamantine Scepter. Any number of minor quests could complicate that task. A wizard, hearing of your journey, offers to pay handsomely for one of the magic rings said to be found within the fortress. One of your friends believes that his mother, a paladin of Pelor, died while exploring the fortress, and he seeks to recover her remains for a proper burial. Once you approach the fortress, you discover that the slaads living around it hold a number of human prisoners, and you might decide to free those prisoners.\n\nSometimes a quest is spelled out for you at the start of an adventure. The town mayor might implore you to find the goblin raiders’ lair, or the priest of Pelor might relate the history of the Adamantine Scepter, before sending you on your quest. Other times, you figure out your quests while adventuring. Once you assemble clues you find, they might turn into new quests.\n\nYou can also, with your DM’s approval, create a quest for your character. Such a quest can tie into your character’s background. For instance, perhaps _your_ mother is the person whose remains lie in the Fortress of the Iron Ring. Quests can also relate to individual goals, such as a ranger searching for a magic bow to wield. Individual quests give you a stake in a campaign’s unfolding story and give your DM ingredients to help develop that story.\n\nWhen you complete quests, you earn rewards, including experience points, treasure, and possibly other kinds of rewards. The _Dungeon Master’s Guide_ includes guidelines for your DM about creating quests, evaluating player-created quests, and assigning rewards for completing quests.',
  },
})

export const EncountersSection = Content.defineSection('adventuring/encounters', {
  parent: AdventuringSection,
  content: {
    name: 'Encounters',
    description:
      'Encounters are where the action of the D&D game takes place, whether the encounter is a life-or-death battle against monstrous foes, a high-stakes negotiation with a duke and his vizier, or a death-defying climb up the Cliffs of Desolation.\n\nEncounters serve many purposes. They are the times when D&D is most like a game, rather than an exercise in cooperative storytelling. They are when you most often bring your powers and skills to bear, when the information on your character sheet is most important. Even so, they should advance the story of an adventure; a pitched battle should have a reason and consequences that relate to your overall quest.\n\nIn an encounter, either you succeed in overcoming a challenge or you fail and have to face the consequences. When an encounter begins, everyone has something to do, and it’s important for the whole group to work together to achieve success.\n\nTwo kinds of encounters occur in most D&D adventures: combat and noncombat encounters.',
  },
})

export const CombatEncountersSection = Content.defineSection('adventuring/combat-encounters', {
  parent: EncountersSection,
  content: {
    name: 'Combat Encounters',
    description:
      'Combat encounters rely on your attack powers, movement abilities, skills, feats, and magic items—just about every bit of rules material that appears on your character sheet. A combat encounter might include elements of a noncombat encounter. [Chapter 9](content:combat) provides the rules for combat encounters.',
  },
})

export const NoncombatEncountersSection = Content.defineSection('adventuring/noncombat-encounters', {
  parent: EncountersSection,
  content: {
    name: 'Noncombat Encounters',
    description:
      'Noncombat encounters focus on skills, utility powers, and your own wits (not your character’s), although sometimes attack powers can come in handy as well. Such encounters include dealing with traps and hazards, solving puzzles, and a broad category of situations called **skill challenges**.\n\nA skill challenge occurs when exploration ([page 260](content:adventuring/exploration)) or social interaction becomes an encounter, with serious consequences for success or failure. When you’re making your way through a dungeon or across the trackless wilderness, you typically don’t take turns or make checks. But when you spring a trap or face a serious obstacle or hazard, you’re in a skill challenge. When you try to persuade a dragon to help you against an oncoming orc horde, you’re also in a skill challenge.\n\nIn a skill challenge, your goal is to accumulate a certain number of successful skill checks before rolling too many failures. Powers you use might give you bonuses on your checks, make some checks unnecessary, or otherwise help you through the challenge. Your DM sets the stage for a skill challenge by describing the obstacle you face and giving you some idea of the options you have in the encounter. Then you describe your actions and make checks until you either successfully complete the challenge or fail.\n\n[Chapter 5](content:skills) describes the sorts of things you can attempt with your skills in a skill challenge. You can use a wide variety of skills, from [Acrobatics](characteristic:skill/acrobatics) and [Athletics](characteristic:skill/athletics) to [Nature](characteristic:skill/nature) and [Stealth](characteristic:skill/stealth). You might also use combat powers and ability checks. The _Dungeon Master’s Guide_ contains rules for designing and running skill challenges.',
  },
})

export const RewardsSection = Content.defineSection('adventuring/rewards', {
  parent: AdventuringSection,
  content: {
    name: 'Rewards',
    description:
      'Although encounters involve risk, they also hold the promise of great rewards. Every successful encounter brings experience, measured in experience points (XP). As you adventure, you also gain action points, treasure, and perhaps rewards of reputation, status, or other intangibles.\n\nThis table summarizes the rewards you gain as you adventure.\n\n| Frequency | Reward |\n| :--- | :--- |\n| Every encounter | XP |\n| Every milestone | Action point |\n| Every few encounters | Treasure |\n| Every quest | XP, treasure, other |\n| After about ten encounters | A new level |',
  },
})

export const ExperiencePointsSection = Content.defineSection('adventuring/experience-points', {
  parent: RewardsSection,
  content: {
    name: 'Experience Points',
    description:
      'Experience points are a measure of your character’s learning and growth. When you complete an encounter or a quest, the DM awards you experience points (XP). The amount of XP depends on the difficulty of the encounter or the quest. Completing a major quest is comparable to completing an encounter, while minor quests bring smaller rewards.\n\nA 1st-level character starts with 0 XP. You accumulate XP from each encounter, quest, and adventure, always adding to your XP total. You never lose XP, and your total never resets to 0.\n\nAs you accumulate XP, you gain levels. The amount of XP you need for each level varies. For example, you need 1,000 XP to reach 2nd level but 2,250 to reach 3rd. When you gain 1,000,000 XP, you reach 30th level, the pinnacle of accomplishment. See “[Gaining Levels](content:making-characters/gaining-levels),” page 27, for all you need to know about level advancement.\n\nThe _Dungeon Master’s Guide_ contains guidelines for your DM on awarding experience points.',
  },
})

export const MilestonesSection = Content.defineSection('adventuring/milestones', {
  parent: RewardsSection,
  content: {
    name: 'Milestones',
    description:
      'You gain certain benefits when you reach a milestone—when you complete two encounters without stopping for an extended rest (see [page 263](content:adventuring/extended-rest)).',
  },
})

export const ActionPointsSection = Content.defineSection('adventuring/action-points', {
  parent: MilestonesSection,
  content: {
    name: 'Action Points',
    description:
      'Your character starts with 1 action point. No more than once per encounter, you can spend an action point to take an extra action (see [page 286](content:combat/action-points)), use certain feats, or use paragon path powers.\n\nWhen you spend an action point, it’s gone, but you can gain more in two ways: by reaching a milestone or by taking an extended rest. Each time you reach a milestone, you gain an action point. After you take an extended rest, you lose any action points you haven’t spent, but you start fresh with 1 action point.',
  },
})

export const MagicItemsSection = Content.defineSection('adventuring/magic-items', {
  parent: MilestonesSection,
  content: {
    name: 'Magic Items',
    description:
      'Each time you reach a milestone, you gain one additional use of a magic item daily power (see [page 226](content:equipment/power)). Some magic items, particularly rings, also grow more powerful after you reach a milestone. See “[Magic Items](content:equipment/magic-items),” page 223, for more information.',
  },
})

export const TreasureSection = Content.defineSection('adventuring/treasure', {
  parent: RewardsSection,
  content: {
    name: 'Treasure',
    description:
      'Treasure comes in a variety of forms, but it falls into two basic categories: magic items you can use, and money you can spend to acquire items and services. Money can be coins, gemstones, fine art, or magic items you sell instead of use.\n\nYou don’t necessarily receive treasure at the completion of each encounter. Treasure is usually a reward for completing several encounters, a quest, or an adventure. Some creatures might carry—and use—magic items that become treasure after you defeat the creatures. Other creatures might keep chests of gold, or you might find treasure suspended in the slimy body of a gelatinous cube. Sometimes you find treasure locked in a vault, stockpiled in an armory, or heaped in a dragon’s hoard.\n\nAs your group finds treasure, having one person keep track of the items can be helpful. When the treasure includes an item that a character wants to use, that character can take the item, but make a note of the item on the group treasure list. Ideally, you end up with a fair distribution of magic items among the characters in your group.\n\nYou don’t need to divide the remaining treasure until you get back to town or until some other opportunity arises to spend your hard-earned spoils. Before dividing up the treasure, you might want to use it to pay for group expenses. Group expenses might include the cost for a ritual to resurrect a dead companion or to remove a curse. It’s up to your group to decide what is and isn’t a group expense.\n\nWhen the time comes to divide your treasure, parcel it out as evenly as you can after paying for group expenses. Sell or disenchant magic items that no one wants, and add the value to the monetary treasure you found. Then, you can approach the distribution of monetary treasure in one of two ways:\n\n1. Divide monetary treasure evenly among all the party members.\n2. Divide monetary treasure among only the characters who didn’t get magic items.',
  },
})

export const IntangibleRewardsSection = Content.defineSection('adventuring/intangible-rewards', {
  parent: RewardsSection,
  content: {
    name: 'Intangible Rewards',
    description:
      'Intangible rewards include noble titles, medals and honors, favors, and reputation. Such rewards appear most often as quest rewards, as recognition of your work in completing a quest. If you save the baron’s son from kidnappers, the baron might reward you with a medal or even a minor noble title, in addition to granting some monetary reward. If you retrieve a magic orb from the bleak ruins of Havoc Hall and bring it to the mysterious wizard who sent you there, he might promise you a later favor, along with the money he promised you up front. When you save a village from goblin raiders, the village honors you as local heroes, and word of your deeds begins to spread.\n\nYou can’t buy anything with intangible rewards, and they don’t grant any combat bonuses. But they can be important in the campaign’s story, and they can help you out in social encounters. Don’t overlook the importance of contacts, favors, and fame, even if they don’t translate directly into fortune.',
  },
})

export const ExplorationSection = Content.defineSection('adventuring/exploration', {
  parent: AdventuringSection,
  content: {
    name: 'Exploration',
    description:
      'A significant part of D&D adventures is exploration, which takes place between encounters. Exploration includes making your way through unmapped dungeon corridors, untracked wilderness, or a sprawling city and exploring the environment’s dangers and wonders.\n\nExploration usually involves movement, so this section covers the rules for moving when you’re not in an encounter. When you’re exploring, you need to know what you can see, particularly in a dark dungeon, so a discussion of vision and light follows the movement rules. During exploration, you interact with your environment in various ways: pushing objects around, fiddling with levers, searching rooms, picking locks, and smashing open chests. The last part of this section includes rules for doing such things.',
  },
})

export const MovementSection = Content.defineSection('adventuring/movement', {
  parent: ExplorationSection,
  content: {
    name: 'Movement',
    description:
      'Movement is what gets you from encounter to encounter and from one place to another within an encounter. This section provides rules for movement between encounters, whereas “[Movement and Position](content:combat/movement-and-position),” page 282, explains movement during a combat encounter.\n\nOften a DM can summarize your movement, without figuring out exact distances or travel times: “You travel for three days and reach the dungeon entrance.” Even in a dungeon, particularly a large dungeon or a cave network, your DM can summarize movement between encounters: “After killing the guardian at the entrance to the ancient dwarven stronghold, you wander through miles of echoing corridors before you arrive at a chasm bridged by a narrow stone arch, which is broken in the middle.”\n\nYour DM might evocatively describe the terrain you pass over, but the encounters along the way are the focus of your adventures. Sometimes it’s important, however, to know how long it takes to get from one encounter to another, whether the answer is in days, hours, or minutes. The rules to figure out travel time depend on two factors: your speed and the terrain you’re moving over.',
  },
})

export const SpeedSection = Content.defineSection('adventuring/speed', {
  parent: MovementSection,
  content: {
    name: 'Speed',
    description:
      'The Base Overland Speed table shows how much distance a character who has a given [speed](characteristic:speed) covers in a day, an hour, or a minute of travel. A group of travelers moves at the slowest traveler’s pace, so most groups use the table’s first row (to accommodate the group’s dwarves and heavily armored members).\n\n**Base Overland Speed**\n\n| Speed | Per Day | Per Hour | Per Minute |\n| :--- | :--- | :--- | :--- |\n| 5 | 25 miles | 2½ miles | 250 ft. |\n| 6 | 30 miles | 3 miles | 300 ft. |\n| 7 | 35 miles | 3½ miles | 350 ft. |\n\n**Speed per Day:** Player characters can sustain a normal walking pace for 10 hours of travel a day without tiring out. The _Dungeon Master’s Guide_ explains what happens if you travel for more than 10 hours. Ordinary people can’t walk for more than 6 or 8 hours in a day, so their travel rate is more like 15 to 25 miles per day.\n\n**Speed per Hour:** Your speed per hour on the Base Exploration Speed table assumes a walking pace. You can move overland at twice this speed, but it’s hard to sustain that pace. Rules in the _Dungeon Master’s Guide_ cover what happens if you push yourself too hard.\n\n**Speed per Minute:** Your speed per minute on the Base Exploration Speed table assumes a walking pace and is intended for travel that takes less than an hour. If you’re in a hurry, you can move overland at twice this speed.',
  },
})

export const TerrainSection = Content.defineSection('adventuring/terrain', {
  parent: MovementSection,
  content: {
    name: 'Terrain',
    description:
      'The distances on the Base Exploration Speed table assume relatively clear terrain—roads, open plains, or dungeon corridors that aren’t choked with rubble. Other terrain does slow your progress. How much? That depends on the prevalence of difficult terrain in the area.\n\n**Terrain and Movement**\n\n| Distance Multiplier | Terrain |\n| :--- | :--- |\n| × ½ | Mostly difficult terrain: dense forests, mountains, deep swamps, rubble-choked ruins |\n| × ¾ | Extensive difficult terrain: forests, hills, swamps, crumbling ruins, natural caves, cities |\n| × 1 | Very little difficult terrain: open fields, plains, roads, clear dungeon corridors |\n\nTo figure out how far you travel per day, hour, or minute, multiply the distance you travel, as shown on the Base Exploration Speed table, by the distance multiplier shown on the Terrain and Movement table.\n\nFlying creatures, when airborne, ignore distance multipliers for difficult terrain.',
  },
})

export const MountsAndVehiclesSection = Content.defineSection('adventuring/mounts-and-vehicles', {
  parent: MovementSection,
  content: {
    name: 'Mounts and Vehicles',
    description:
      'When traveling long distances outdoors, you can use mounts or vehicles to increase your speed, your carrying capacity, or both. This table shows the effective speed of common mounts and vehicles. The table assumes a day of travel is 10 hours long, although sailing ships can sail 24 hours a day if properly crewed. For mount and vehicle carrying capacities, see [page 222](content:equipment/mounts-and-transport).\n\n**Mounts and Vehicles**\n\n| Mount/Vehicle | Speed | Per Day | Per Hour |\n| :--- | :--- | :--- | :--- |\n| Riding horse | 10 | 50 miles | 5 miles |\n| Warhorse | 8 | 40 miles | 4 miles |\n| Cart or wagon | 5 | 25 miles | 2½ miles |\n| Rowboat | 3 | 15 miles | 1½ miles |\n| Downstream | 4–6 | 20–30 miles | 2–3 miles |\n| Sailing ship | 7 | 84 miles | 3½ miles |',
  },
})

export const MarchingOrderSection = Content.defineSection('adventuring/marching-order', {
  parent: MovementSection,
  content: {
    name: 'Marching Order',
    description:
      'It’s a good idea for your group to establish a standard marching order, the way your characters are normally arranged when traveling. You can change your marching order any time, but having it set out before you get into an encounter lets the DM know exactly where everyone is when the encounter begins.\n\nYou can record your marching order any way you like: Write it on paper or a whiteboard, or arrange your miniatures on the battle grid to show your relative position. You can also create different marching orders for different situations—one marching order for corridors that are 2 squares wide and one for open areas, for example.\n\nDanger in a dungeon environment often comes from the front, so it’s a good idea to put a defender at the front of the marching order, protecting your controllers. Leaders make a good choice for the back of the group, since they’re tough enough to withstand an attack if you get ambushed from behind. Strikers might scout ahead, but most prefer to stay nearer to the middle of a group.\n\nFind a balance between clustering and spreading out. Staying close ensures that everyone can get to the action quickly when an encounter begins, but being bunched up leaves you vulnerable to area attacks from traps or ambushers.',
  },
})

export const VisionAndLightSection = Content.defineSection('adventuring/vision-and-light', {
  parent: ExplorationSection,
  content: {
    name: 'Vision and Light',
    description:
      'As you explore an adventure environment, the DM tells you what you see, from the obvious, such as the dimensions of a corridor, to the hidden, such as a pit trap.\n\nYou automatically see the obvious, but you use the [Perception](characteristic:skill/perception) skill (page 186) to try to see the hidden. If you aren’t actively searching an area, the DM determines whether you see hidden objects or creatures by using your passive Perception check (see page 186).\n\nYou can’t see anything without some light. Many dungeons are illuminated, since only a few monsters are at home in utter darkness.\n\nDungeons are often illuminated by torches (sometimes magic torches that never stop burning), ceiling panels magically imbued with light, great oil-filled braziers or stone channels that burn continuously, or even globes of light that drift through the air.\n\nCaverns might be filled with phosphorescent fungi or lichen, extraordinary mineral veins that glimmer in the dark, streams of glowing lava, or eerie auroralike veils of magic fire undulating high above a cavern floor.',
  },
})

export const CategoriesOfLightSection = Content.defineSection('adventuring/categories-of-light', {
  parent: VisionAndLightSection,
  content: {
    name: 'Categories of Light',
    description:
      'Light in the D&D game is defined in three categories: bright light, dim light, and darkness.\n\n**Bright Light:** This category includes the light provided by most portable light sources, daylight, and the light cast by surrounding fires or lava. There are no special rules for vision in bright light.\n\n**Dim Light:** This category includes the light provided by a candle or another dim light source, moonlight, indirect illumination (such as in a cave interior whose entrance is nearby or in a subterranean passageway that has narrow shafts extending to the surface), and the light cast by things such as phosphorescent fungi. Characters who have normal vision can’t see well in dim light: Creatures in the area have concealment ([page 281](content:combat/concealment)). Characters who have low-light vision or darkvision see normally in dim light.\n\n**Darkness:** Darkness prevails outside on a moonless night or in rooms with no light sources. Characters who have normal vision or low-light vision can’t see creatures or objects in darkness. Characters who have darkvision can see without penalty.',
  },
})

export const LightSourcesSection = Content.defineSection('adventuring/light-sources', {
  parent: VisionAndLightSection,
  content: {
    name: 'Light Sources',
    description:
      'Even though many dungeons are adequately lit, the cautious adventurer brings a torch or a sunrod when venturing into a cavern or an underground complex.\n\nAssuming nothing blocks your view, you can see most light sources from at least a quarter-mile away, and you can see exceptionally bright sources from up to a mile away.\n\nTypical light sources are described on the following table.\n\n| Source | Radius | Brightness | Duration |\n| :--- | :--- | :--- | :--- |\n| Candle | 2 | dim | 1 hour |\n| Torch | 5 | bright | 1 hour |\n| Lantern | 10 | bright | 8 hours/pint of oil |\n| Campfire | 10 | bright | 8 hours |\n| Sunrod | 20 | bright | 4 hours |\n\n**Radius:** A light source illuminates its square (your square if you’re carrying the light source) and all squares within the range shown on the table. For example, if you carry a torch, bright light illuminates your square and 5 squares in every direction from you.\n\n**Brightness:** Most light sources provide an area of bright light around them.\n\n**Duration:** A light source lasts only so long because it requires a fuel source.',
  },
})

export const InteractingWithTheEnvironmentSection = Content.defineSection('adventuring/interacting-with-the-environment', {
  parent: ExplorationSection,
  content: {
    name: 'Interacting with the Environment',
    description:
      'A typical adventure environment is full of dangers, surprises, and puzzles. A dungeon room might hold a complex bank of mysterious levers, a statue positioned over a trap door, a locked chest, or a teleportation circle. Sometimes you need to cut through a rope, break a chain, bash down a door, lift a portcullis, or smash the Golden Orb of Khadros the Reaver before the villain can use it.\n\nYour character’s interaction with the environment is often simple to resolve in the game. You tell the DM that you’re moving the lever on the right, and the DM tells you what happens, if anything. The lever might be part of a fiendishly clever puzzle that requires you to pull several levers in the right order before the room completely fills with water, testing your ingenuity to the limit, but rules aren’t necessary for pulling a lever. You simply tell the DM which lever you pull.\n\n**DCs to Break or Burst Common Items**\n\n| Strength Check to: | DC |\n| :--- | :--- |\n| Break down wooden door | 16 |\n| Break down barred door | 20 |\n| Break down iron door | 25 |\n| Break down adamantine door | 29 |\n| Force open wooden portcullis | 23 |\n| Force open iron portcullis | 28 |\n| Force open adamantine portcullis | 33 |\n| Burst rope bonds | 26 |\n| Burst iron chains | 30 |\n| Burst adamantine chains | 34 |\n| Smash wooden chest | 19 |\n| Smash iron box | 26 |\n| Smash adamantine box | 32 |\n| Break through wooden wall (6 in. thick) | 26 |\n| Break through masonry wall (1 ft. thick) | 35 |\n| Break through hewn stone wall (3 ft. thick) | 43 |\n\nIf a lever is rusted in position, though, you might need to force it. In such a situation, the DM might ask you to make an ability check (see [page 26](content:making-characters/ability-checks)); no particular skill is involved, just a raw test of your [Strength](characteristic:strength).\n\nSimilarly, the DM might call for Strength checks to see if you can break through a barred door or lift an adamantine portcullis. This table shows DCs to break through, break down, or break open some common dungeon features.\n\nWhen you’re a 1st-level character, breaking down a wooden door is a challenge well within reach if you have a high Strength score. When you reach epic levels, you can sometimes break through a masonry wall with a single blow, and with time, you can force your way through 3 feet of solid stone!',
  },
})

export const RestAndRecoverySection = Content.defineSection('adventuring/rest-and-recovery', {
  parent: AdventuringSection,
  content: {
    name: 'Rest and Recovery',
    description:
      'Sooner or later, even the toughest adventurers need to rest. When you’re not in an encounter, you can take one of two types of rest: a short rest or an extended rest.\n\nAbout 5 minutes long, a short rest consists of stretching your muscles and catching your breath after an encounter. At least 6 hours long, an extended rest includes relaxation, sometimes a meal, and usually sleep.',
  },
})

export const ShortRestSection = Content.defineSection('adventuring/short-rest', {
  parent: RestAndRecoverySection,
  content: {
    name: 'Short Rest',
    description:
      'A short rest allows you to renew your encounter powers and spend [healing surges](characteristic:healing-surges) to regain [hit points](characteristic:hit-points).\n\n**Short Rest**\n\n- **Duration:** A short rest is about 5 minutes long.\n- **No Limit per Day:** You can take as many short rests per day as you want.\n- **No Strenuous Activity:** You have to rest during a short rest. You can stand guard, sit in place, ride on a wagon or other vehicle, or do other tasks that don’t require much exertion.\n- **Renew Powers:** After a short rest, you renew your encounter powers, so they are available for your next encounter.\n- **Spend Healing Surges:** After a short rest, you can spend as many healing surges as you want (see “[Healing](content:combat/healing),” page 293). If you run out of healing surges, you must take an extended rest to regain them.\n- **Using Powers while You Rest:** If you use an encounter power (such as a healing power) during a short rest, you need another short rest to renew it so that you can use it again.\n- **Interruptions:** If your short rest is interrupted, you need to rest another 5 minutes to get the benefits of a short rest.',
  },
})

export const ExtendedRestSection = Content.defineSection('adventuring/extended-rest', {
  parent: RestAndRecoverySection,
  content: {
    name: 'Extended Rest',
    description:
      'Once per day, you can gain the benefits of an extended rest.\n\n**Extended Rest**\n\n- **Duration:** An extended rest is at least 6 hours long.\n- **Once per Day:** After you finish an extended rest, you have to wait 12 hours before you can begin another one.\n- **No Strenuous Activity:** You normally sleep during an extended rest, though you don’t have to. You can engage in light activity that doesn’t require much exertion.\n- **Regain Hit Points and Healing Surges:** At the end of an extended rest, you regain any [hit points](characteristic:hit-points) you have lost and any [healing surges](characteristic:healing-surges) you have spent.\n- **Powers:** At the end of an extended rest, you regain all your encounter powers and daily powers.\n- **Action Points:** At the end of an extended rest, you lose any unspent action points, but you start fresh with 1 action point.\n- **Interruptions:** If anything interrupts your extended rest, such as an attack, add the time spent dealing with the interruption to the total time you need to spend in the extended rest.',
  },
})

export const SleepingAndWakingUpSection = Content.defineSection('adventuring/sleeping-and-waking-up', {
  parent: RestAndRecoverySection,
  content: {
    name: 'Sleeping and Waking Up',
    description:
      'You need at least 6 hours of sleep every day to keep functioning at your best. If, at the end of an extended rest, you haven’t slept at least 6 hours in the last 24, you gain no benefit from that extended rest.\n\nWhen you’re asleep, you’re unconscious (see “[Conditions](content:combat/conditions),” page 277). You wake up if you take damage or if you make a successful [Perception](characteristic:skill/perception) check (with a –5 penalty) to hear sounds of danger. An ally can wake you up by shaking you (a standard action) or by shouting (a free action).',
  },
})

export const KeepingWatchSection = Content.defineSection('adventuring/keeping-watch', {
  parent: RestAndRecoverySection,
  content: {
    name: 'Keeping Watch',
    description:
      'Adventurers typically take turns keeping watch while their companions sleep. If five characters are in your group, each of you can take a turn on watch duty for 1½ hours and sleep for 6 hours, so that you spend a total of 7½ hours resting.\n\nWhen it’s your turn on watch, you actively look for signs of danger. When you start your shift on watch, make a [Perception](characteristic:skill/perception) check. If something occurs during your watch, the DM uses the result of your Perception check to determine whether you notice.\n\nIf your entire group sleeps at the same time without setting a watch, the DM uses your individual passive Perception scores, counting the –5 penalty for being asleep, to determine whether you hear approaching danger and wake up.',
  },
})

export const AdventuringContent: Array<ContentSection> = [
  AdventuringSection,
  QuestsSection,
  EncountersSection,
  CombatEncountersSection,
  NoncombatEncountersSection,
  RewardsSection,
  ExperiencePointsSection,
  MilestonesSection,
  ActionPointsSection,
  MagicItemsSection,
  TreasureSection,
  IntangibleRewardsSection,
  ExplorationSection,
  MovementSection,
  SpeedSection,
  TerrainSection,
  MountsAndVehiclesSection,
  MarchingOrderSection,
  VisionAndLightSection,
  CategoriesOfLightSection,
  LightSourcesSection,
  InteractingWithTheEnvironmentSection,
  RestAndRecoverySection,
  ShortRestSection,
  ExtendedRestSection,
  SleepingAndWakingUpSection,
  KeepingWatchSection,
]
