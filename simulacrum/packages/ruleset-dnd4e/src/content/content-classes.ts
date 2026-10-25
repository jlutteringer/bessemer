import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'

export const ClassesSection = Content.defineSection('classes', {
  content: {
    name: 'Character Classes',
    description:
      'Your class is the primary definition of what your character can do in the extraordinary magical landscape of the DUNGEONS & DRAGONS world.\n\nA class is more than a profession; it is your character’s calling. Your class choice shapes every action you take as you adventure across a spell-tangled, monster-ridden, battle-torn fantasy world.\n\nWill you be a gutsy, youthful sword fighter? A pact-sworn warlock with questionable ties? A gods-worshiping cleric who knows too much? A flamboyant rogue with a dagger up your sleeve? A tattooed wizard with a crystal staff? The choice is yours.\n\nThis chapter includes the following material:\n\n- **Introducing the Classes:** Discussion of the details that make up each class, and your first look at paragon paths and epic destinies.\n- **How to Read a Power:** The specifics on how to understand your class’s powers and each power’s format and effects.\n- **The Classes:** Class features and complete power descriptions for the cleric, the fighter, the paladin, the ranger, the rogue, the warlock, the warlord, and the wizard, as well as their paragon paths.\n- **Epic Destinies:** A selection of epic destinies that your character can achieve.',
  },
})

export const IntroducingTheClassesSection = Content.defineSection('classes/introducing-the-classes', {
  parent: ClassesSection,
  content: {
    name: 'Introducing the Classes',
    description:
      'This chapter presents full descriptions of the following eight classes:\n\n**[Cleric](trait:cleric) (page 60):** A divinely inspired warrior.\n\n**[Fighter](trait:fighter) (page 75):** A master of martial combat.\n\n**[Paladin](trait:paladin) (page 89):** A champion dedicated to a specific deity.\n\n**[Ranger](trait:ranger) (page 103):** A ranged or two-weapon combat specialist.\n\n**[Rogue](trait:rogue) (page 116):** A combatant who uses stealth and slyness to thwart enemies.\n\n**[Warlock](trait:warlock) (page 129):** A wielder of arcane power gleaned from otherworldly entities.\n\n**[Warlord](trait:warlord) (page 143):** A commander who leads from the front.\n\n**[Wizard](trait:wizard) (page 156):** The world’s most powerful purveyor of magic.\n\nEach class description opens with a summary of the class’s basic traits and an overview of the class’s place in the world.\n\n**Role:** In battle, do members of the class act as defenders, strikers, leaders, or controllers? (See [Chapter 2](content:making-characters) for an explanation of these roles.) Each class has a role associated with it. Different classes approach their role in different ways, and many classes include limited elements of one or more other roles as well. For example, both the fighter and the paladin are defenders, but the fighter adds some aspects of the striker to his repertoire, while the paladin has some abilities often associated with leaders, such as healing.\n\n**Power Source:** Each of the eight classes draws its power from the arcane, the divine, or the martial power source.\n\n**Key Abilities:** Most classes have powers and other features that rely on three different ability scores. Characters of these classes generally want their three best scores in these abilities.\n\n**Armor and Weapon Proficiencies:** Different classes are proficient with different kinds of armor and weapons, shown in these two entries. An armor or weapon proficiency you gain from a class counts as the appropriate Armor Proficiency or Weapon Proficiency feat (see [Chapter 6](content:feats)).\n\n**Implement:** If the class can use one or more kinds of implements, that information is noted here.\n\n**Bonus to Defense:** Each class gives you a bonus to one or more of your [defenses](characteristic-group:defenses).\n\n**Hit Points:** Each class description indicates how many [hit points](characteristic:hit-points) you have at 1st level and how many hit points you gain with each new level you attain.\n\n**Healing Surges:** Your class determines how many [healing surges](characteristic:healing-surges) you can spend in a day.\n\n**Trained Skills:** Every class has a list of class skills, and you choose a specific number of trained skills from that list. Some classes give you a predetermined trained skill.\n\nThe last few lines of the Class Traits section point to later parts of the class entry. Build Options and Class Features are more fully described in the next major sections.\n\n**Creating a Character:** The next section of a class entry describes each class build in more detail. A build is the theme you think about when choosing your powers and other abilities. The build you choose (if you choose one) suggests what abilities you should prioritize and gives you some guidance as you choose powers, at 1st level and as you gain levels.\n\nA build isn’t intended as a constraint, but as a way to help you make informed choices. If you want to be a fighter with a greataxe, rather than wielding a one-handed weapon and a shield, the great weapon fighter build points you toward the powers that are most effective in your hands. You can choose powers intended for the guardian fighter build instead, of course, and they might help your character be a little more balanced. Some of those powers, though, won’t be as good for you as they’d be for a fighter with a shield. Builds aren’t required; they exist to help guide your decisions.\n\nEach build includes suggestions for choosing feats, skills, and powers for your 1st-level character. These are only suggestions—you are free to choose the feats, skills, and powers that most appeal to you and best fit with your character concept.\n\n**Class Features:** Class features are abilities shared by every member of the class. Some class features are powers that every member of a class can use, such as the warlock’s _[eldritch blast](trait:warlock/eldritch-blast)_ or the cleric’s [Channel Divinity](trait:cleric/channel-divinity) ability. Others are more like racial traits—they’re not so much things you do as things that modify the effects of what you do.\n\n**Powers:** The longest section of a class description contains full descriptions of all the class’s at-will, encounter, and daily attack powers, as well as its utility powers.',
  },
})

export const ClassOverviewSection = Content.defineSection('classes/class-overview', {
  parent: IntroducingTheClassesSection,
  content: {
    name: 'Class Overview',
    description:
      'A sidebar in each class entry highlights a few key elements of the class.\n\n**Characteristics:** The features or qualities of the class that make it distinct. This section describes how the class fulfills its role.\n\n**Religion:** A selection of deities of the D&D pantheon best suited to the class.\n\n**Races:** The races best suited for each class.',
  },
})

export const ParagonPathsSection = Content.defineSection('classes/paragon-paths', {
  parent: IntroducingTheClassesSection,
  content: {
    name: 'Paragon Paths',
    description:
      'You have survived and thrived through ten levels of adventure.\n\nYou’ve explored dank dungeons, defeated vile monsters, and learned priceless secrets. You’ve started making a name for yourself.\n\nNow you’re ready to take the next step: you’re ready to choose a paragon path.\n\nAs your class describes your basic role in the party, your paragon path represents a particular area of expertise within that role. It’s a form of specialization beyond even what a build choice represents. You might be a battle cleric and specialize in melee powers, but starting at 11th level you can be a warpriest and specialize in battle prayers.\n\nAs shown on the [Character Advancement](content:making-characters/character-advancement) table on page 29, your paragon path gives you new capabilities from 11th level through 20th level. But adopting a paragon path doesn’t mean you stop advancing in your class. All the powers and features you gain from your paragon path come _in addition to_ your class powers and features, not instead of them. You don’t stop being a cleric when you become a radiant servant. Instead, you gain new capabilities that extend, enhance, and complement the abilities of your class.\n\nParagon paths also broaden the use of action points in different ways. Each paragon path features a different, extra capability that characters can unlock by spending action points. So, once you pick your paragon path, you can still spend an action point to take an extra action. But you’ll also have a new capability for action points that is unique to your path. Some of these capabilities come in addition to the extra action you get for spending an action point, some are used instead of getting an extra action.\n\nWhen you reach 11th level, choose a paragon path. All paths have prerequisites, conditions you have to fulfill before you can adopt that path.\n\n**Paragon Multiclassing:** You might choose to take on powers from a second class in place of a paragon path. See page 208 for more information on multiclassing.',
  },
})

export const IntroducingTheParagonPathsSection = Content.defineSection('classes/introducing-the-paragon-paths', {
  parent: ParagonPathsSection,
  content: {
    name: 'Introducing the Paragon Paths',
    description:
      'Paragon paths are presented in alphabetical order, following the appropriate classes in this chapter. Each paragon path description provides a general overview followed by game rule information.\n\n**Prerequisite:** If the paragon path has requirements for entry, they are noted here. If a paragon path has a specific class as a prerequisite, you must either be a member of that class or have selected a multiclass feat for the indicated class. For example, you can take the angelic avenger paragon path if you’re a cleric or if you have selected a cleric multiclass feat.\n\n**Path Features:** Every paragon path grants you specific path features, which are similar in nature to the features you gain from your class.\n\n**Powers:** Your paragon path gives you powers, which are described here.\n\n**Paragon Paths**\n\n| Cleric (page 72) | Rogue (page 126) |\n| :--- | :--- |\n| Angelic avenger | Cat burglar |\n| Divine oracle | Daggermaster |\n| Radiant servant | Master infiltrator |\n| Warpriest | Shadow assassin |\n| **Fighter (page 86)** | **Warlock (page 140)** |\n| Iron vanguard | Doomsayer |\n| Kensei | Feytouched |\n| Pit fighter | Life-stealer |\n| Swordmaster | |\n| **Paladin (page 100)** | **Warlord (page 153)** |\n| Astral weapon | Battle captain |\n| Champion of order | Combat veteran |\n| Hospitaler | Knight commander |\n| Justiciar | Sword marshal |\n| **Ranger (page 113)** | **Wizard (page 169)** |\n| Battlefield archer | Battle mage |\n| Beast stalker | Blood mage |\n| Pathfinder | Spellstorm mage |\n| Stormwarden | Wizard of the Spiral Tower |',
  },
})

export const EpicDestiniesSection = Content.defineSection('classes/epic-destinies', {
  parent: IntroducingTheClassesSection,
  content: {
    name: 'Epic Destinies',
    description:
      'After twenty levels of adventure, what trials could be left to challenge you? You have conquered countless foes and become a hero to common folk everywhere. Deadly dragons and powerful mages alike have fallen to your might. Your gaze has begun to turn to the planes beyond the world, and even to the gods themselves. Finally, you realize there are no heights you cannot achieve.\n\nIt’s time for you to assume your epic destiny and shape your legend in the universe forevermore.\n\nLike a paragon path, an epic destiny grants special powers in addition to your class powers and features. Unlike paragon paths, epic destinies are not extensions of your class. Instead, they offer extraordinary abilities that represent your journey toward your ultimate fate . . . as you define it.\n\nSee page 172 for more about epic destinies.\n\n| Epic Destiny | Description |\n| :--- | :--- |\n| Archmage | Ultimate master of arcane spells |\n| Deadly trickster | A wanderer, thief, pragmatist, and survivor |\n| Demigod | You are on the path to godhood |\n| Eternal seeker | Your destiny finds you |',
  },
})

export const PowerTypesAndUsageSection = Content.defineSection('classes/power-types-and-usage', {
  parent: ClassesSection,
  content: {
    name: 'Power Types and Usage',
    description:
      'Every class has access to a mix of attack powers (used to harm your enemies in combat, more or less directly) and utility powers (used to overcome a variety of obstacles both in and out of combat). Within each type, different powers have different restrictions on how often you can use them: at-will, encounter, or daily.\n\nYou can use a power whenever you are able to take the action the power requires. (Certain conditions, as defined in [Chapter 9](content:combat), prohibit you from taking actions.) Your DM might rule that you can’t use powers in special circumstances, such as when your hands are tied.',
  },
})

export const AtWillPowersSection = Content.defineSection('classes/at-will-powers', {
  parent: PowerTypesAndUsageSection,
  content: {
    name: 'At-Will Powers',
    description:
      'You can use your **at-will powers** as often as you want. They represent easy weapon swings or simple magical effects that don’t put any unusual strain on you or tax your resources in any way.',
  },
})

export const EncounterPowersSection = Content.defineSection('classes/encounter-powers', {
  parent: PowerTypesAndUsageSection,
  content: {
    name: 'Encounter Powers',
    description:
      'An **encounter power** can be used once per encounter. You need to take a [short rest](content:adventuring/short-rest) (page 263) before you can use one again. Encounter powers produce more powerful, more dramatic effects than at-will powers. If you’re a martial character, they are exploits you’ve practiced extensively but can pull off only once in a while. If you’re an arcane or divine character, these are spells or prayers of such power that they take time to re-form in your mind after you unleash their magic energy.',
  },
})

export const DailyPowersSection = Content.defineSection('classes/daily-powers', {
  parent: PowerTypesAndUsageSection,
  content: {
    name: 'Daily Powers',
    description:
      'A **daily power** can be used once per day. Daily powers are the most powerful effects you can produce, and using one takes a significant toll on your physical and mental resources. If you’re a martial character, you’re reaching into your deepest reserves of energy to pull off an amazing exploit. If you’re an arcane magic-user, you’re reciting a spell of such complexity that your mind can only hold it in place for so long, and once it’s recited, it’s wiped from your memory. If you’re a divine character, the divine might that you channel to invoke these powers is so strong that you can harness it only once a day.\n\nDaily powers usually include an effect that takes place regardless of whether the power is used successfully. As a result, these limited resources are at least slightly beneficial every time you use them. Once you use a daily power, you need to take an [extended rest](content:adventuring/extended-rest) (page 263) before you can use it again.',
  },
})

export const PowerSourcesSection = Content.defineSection('classes/power-sources', {
  parent: PowerTypesAndUsageSection,
  content: {
    name: 'Power Sources',
    description:
      'Every class relies on a particular source of energy for the “fuel” that enables members of that class to use powers. The three power sources associated with the classes in this book are arcane, divine, and martial.\n\n**Arcane:** Drawing on magical energy that permeates the cosmos, the arcane power source can be used for a wide variety of effects, from fireballs to flight to invisibility. Warlocks and wizards, for example, use arcane magic. Each class is the representative of a different tradition of arcane study, and other traditions exist. Arcane powers are called **spells**.\n\n**Divine:** Divine magic comes from the gods. The gods grant power to their devotees, which clerics and paladins, for example, access through prayers and litanies. Divine magic excels at healing, protection, and smiting the enemies of the gods. Divine powers are called **prayers**.\n\n**Martial:** Martial powers are not magic in the traditional sense, although some martial powers stand well beyond the capabilities of ordinary mortals. Martial characters use their own strength and willpower to vanquish their enemies. Training and dedication replace arcane formulas and prayers to grant fighters, rangers, rogues, and warlords, among others, their power. Martial powers are called **exploits**.\n\n**Other Power Sources:** Additional power sources and techniques provide characters of different classes with powers and abilities. These will appear in future _Player’s Handbook_ volumes. For example, barbarians and druids draw on the primal forces of nature, monks harness the power of their soul energy (or ki), and psions call upon the mind to generate psionic powers. Future power sources include elemental, ki, primal, psionic, and shadow.',
  },
})

export const HowToReadAPowerSection = Content.defineSection('classes/how-to-read-a-power', {
  parent: ClassesSection,
  content: {
    name: 'How to Read a Power',
    description:
      'No part of the D&D game has as much variety as the powers that describe what characters can do. Even so, the way that various powers are described follows a structured format. Here’s the information you need to understand how a power works.',
  },
})

export const NameAndLevelSection = Content.defineSection('classes/name-and-level', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Name and Level',
    description:
      '**Acid Wave** · **Wizard Attack 19**\n\nThe first line of a power description gives the name of the power, the class it’s associated with, the kind of power it is (attack or utility), and the power’s level (or the fact that it’s a class feature). In the above example, _acid wave_ is an attack power that a wizard can choose at 19th level.\n\nSome powers, such as the racial powers in [Chapter 3](content:races) and the feat powers in [Chapter 6](content:feats), carry different information on the right side of this line.',
  },
})

export const FlavorTextSection = Content.defineSection('classes/flavor-text', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Flavor Text',
    description:
      '_A wave of acid dissolves all creatures that stand before you._\n\nThe next section of a power description gives a brief explanation of what the power does, sometimes including information about what it looks or sounds like. The flavor text for _acid wave_ appears here as an example.\n\nA power’s flavor text helps you understand what happens when you use a power and how you might describe it when you use it. You can alter this description as you like, to fit your own idea of what your power looks like. Your wizard’s _magic missile_ spell, for example, might create phantasmal skulls that howl through the air to strike your opponent, rather than simple bolts of magical energy.\n\nWhen you need to know the exact effect, look at the rules text that follows.',
  },
})

export const KeywordsSection = Content.defineSection('classes/keywords', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Keywords',
    description:
      '**At-Will** ✦ Martial, Weapon\n\n**Encounter** ✦ Divine\n\n**Daily** ✦ Acid, Arcane, Implement\n\nA power’s keyword entry gives you important rules information about the power. The first keyword indicates whether the power is an at-will, encounter, or daily power. (One example of each type is given above.) The color used in the line containing the power name also conveys this information: At-will powers have a green bar, encounter powers have a red bar, and daily powers have a black bar.\n\nThe other keywords define the fundamental effects of a power. For instance, a power that deals acid damage is an acid effect and thus has the acid keyword. A power that has the poison keyword might deal poison damage, or it might slow the target, immobilize the target, or stun the target. But the poison keyword indicates that it’s a poison effect, and other rules in the game relate to that fact in different ways. Dwarves have a bonus to saving throws against poison effects, for example.\n\nKeywords help to determine how, or if, a power works when the target has resistance, vulnerability, or immunity to a damage type or an effect type, or if the power interacts with existing effects. For example, a ritual that forbids teleportation could block a power that has the teleportation keyword.\n\nResistance or immunity to one keyword of a power does not protect a target from the power’s other effects. When damage of a power is described as more than one type, divide the damage evenly between the damage types (round up for the first damage type, round down for all others). For example, a power that deals 25 fire and thunder damage deals 13 fire damage and 12 thunder damage.\n\nIf a power allows you to choose the damage type, the power then has that keyword for feats, resistances, and any other information that applies. For example, the wizard spell _elemental maw_ does 6d6 + Intelligence modifier damage of a type chosen from the following list: acid, cold, fire, lightning, or thunder. If you choose lightning damage, the Astral Fire feat (+1 feat bonus to damage rolls when you use powers that have the fire or radiant keywords) doesn’t add to the power’s damage, but the Raging Storm feat (+1 feat bonus to damage rolls when you use powers that have the lightning or thunder keywords) does.',
  },
})

export const KeywordCategoriesSection = Content.defineSection('classes/keyword-categories', {
  parent: KeywordsSection,
  content: {
    name: 'Keyword Categories',
    description:
      'Aside from usage keywords (**at-will**, **encounter**, and **daily**), keywords fall into four categories.\n\n**Power Source:** The power sources described in this book are **arcane**, **divine**, and **martial**. Basic attacks, racial powers, and epic destiny powers have no power source.\n\n**Damage Type:** Many powers create energy or a substance that deals damage to their targets.\n\n- **_Acid:_** Corrosive liquid.\n- **_Cold:_** Ice crystals, arctic air, or frigid liquid.\n- **_Fire:_** Explosive bursts, fiery rays, or simple ignition.\n- **_Force:_** Invisible energy formed into incredibly hard yet nonsolid shapes.\n- **_Lightning:_** Electrical energy.\n- **_Necrotic:_** Purple-black energy that deadens flesh and wounds the soul.\n- **_Poison:_** Toxins that reduce a creature’s hit points.\n- **_Psychic:_** Effects that target the mind.\n- **_Radiant:_** Searing white light or shimmering colors.\n- **_Thunder:_** Shock waves and deafening sounds.\n\n**Effect Type:** Some powers are classified according to how their effects work.\n\n- **_Charm:_** Mental effects that control or influence the subject’s actions.\n- **_Conjuration:_** Powers that create objects or creatures of magical energy.\n- **_Fear:_** Effects that inspire fright.\n- **_Healing:_** Powers that restore hit points.\n- **_Illusion:_** Powers that deceive the senses or the mind.\n- **_Poison:_** Substances that hamper or impede a creature.\n- **_Polymorph:_** Effects that alter a creature’s physical form.\n- **_Reliable:_** If you miss when using a reliable power, you don’t expend the use of that power.\n- **_Sleep:_** Powers that cause sleep or unconsciousness.\n- **_Stance:_** A stance power lasts until the end of the encounter, for 5 minutes, or until you use another stance power.\n- **_Teleportation:_** Powers that transport creatures instantaneously from one location to another.\n- **_Zone:_** Powers that create lingering effects that extend over an area.\n\n**Accessories:** These keywords identify items used with the power. If you have a proficiency bonus to attack rolls and damage rolls from your weapon or an enhancement bonus to your attack rolls and damage rolls from a magic weapon or an implement, you add that bonus when you use a power that has the associated keyword.\n\n- **_Implement:_** Many arcane spells are more effective when used in conjunction with an implement—a wizard’s staff, orb, or wand, or a warlock’s rod or wand. Many divine prayers use holy symbols as implements. To grant its benefit to a divine character, a holy symbol must represent the character’s patron deity or one of a group of deities the character serves. It’s not necessary to have an implement in order to use a power that has the implement keyword.\n- **_Weapon:_** Many martial powers, as well as several divine powers, can be used only if you’re wielding a weapon. (You can use an unarmed attack as your weapon.) A weapon’s reach or range determines the reach or range of a power it’s used with.',
  },
})

export const ActionTypeSection = Content.defineSection('classes/action-type', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Action Type',
    description:
      'The next line of a power description begins with what type of action you have to take when you use the power. Most powers require a **[standard action](action-type:standard-action)**. Some powers are **[move actions](action-type:move-action)**, a few are **[immediate interrupts](action-type:immediate-interrupt)** or **[immediate reactions](action-type:immediate-reaction)**, a handful are **[minor actions](action-type:minor-action)** or **[free actions](action-type:free-action)**, and a scant few require **[no action](action-type:no-action)**. Action types are described on [page 267](content:combat/action-types).\n\n**Trigger:** An ally in range is hit by an attack\n\n**Trigger:** An adjacent enemy moves away from you\n\n**Trigger:** Some powers come into effect only if a triggering condition occurs. Examples of some typical “Trigger” entries are given above.',
  },
})

export const AttackTypeAndRangeSection = Content.defineSection('classes/attack-type-and-range', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Attack Type and Range',
    description:
      'Following a power’s action type on the same line is the power’s attack type and its range. The four attack types are **melee**, **ranged**, **close**, and **area**. Each of these attack types (fully described in [Chapter 9](content:combat)) has rules for range and targeting.\n\nEven though these terms are called “attack types,” they apply to utility powers as well as attack powers.',
  },
})

export const MeleeSection = Content.defineSection('classes/melee', {
  parent: AttackTypeAndRangeSection,
  content: {
    name: 'Melee',
    description:
      'A melee power affects a target (or targets) within melee reach. Many melee powers require a weapon. You make a separate attack roll against each target.\n\n**Melee weapon:** A melee attack power that has a range of “weapon” allows you to attack a target within the reach of the weapon you’re wielding. Some weapons extend your reach beyond adjacent squares.\n\n_Example:_ If you use a “Melee weapon” power while you’re wielding a dagger, you can attack a target within 1 square of you. If you’re wielding a halberd (a reach weapon), you can attack a target within 2 squares of you.\n\n**Melee 1:** A melee power that has a range of 1 can be used only on an adjacent target.\n\n**Melee touch:** A melee power that has a range of “touch” can be used on any target you can reach. (Some creatures larger than Medium size have a reach of more than 1 square.)',
  },
})

export const RangedSection = Content.defineSection('classes/ranged', {
  parent: AttackTypeAndRangeSection,
  content: {
    name: 'Ranged',
    description:
      'A ranged power affects a target (or targets) at a distance. For details about how ranged attacks work, see [page 270](content:combat/ranged-attack).\n\n**Ranged weapon:** A ranged attack power that has a range of “weapon” allows you to attack a target within your weapon’s range (see the table on page 219). If the target is farther away than normal range but within long range, you take a –2 penalty to attack rolls.\n\n_Example:_ If you use a “Ranged weapon” power with a shortbow (normal range 15, long range 30), you take a –2 penalty when attacking targets 16–30 squares away, and you can’t attack creatures farther away than 30 squares.\n\n**Ranged [number]:** A ranged power that has a range expressed as a number can be used on a target within the indicated number of squares.\n\n**Ranged sight:** A ranged power that has a range of “sight” can be used on any target within line of sight. You still need line of effect to the target.',
  },
})

export const CloseSection = Content.defineSection('classes/close', {
  parent: AttackTypeAndRangeSection,
  content: {
    name: 'Close',
    description:
      'A close power creates an area of effect ([page 272](content:combat/areas-of-effect)) that originates in a square of your space, and most close powers can hit multiple targets. For details about how close attacks work, see [page 271](content:combat/close-attack).\n\n**Close burst [number]:** A close burst power allows you to target creatures or objects within the indicated number of squares from you in all directions. See [page 272](content:combat/areas-of-effect) for how to determine the area of a burst.\n\n**Close blast [number]:** A close blast power allows you to target creatures or objects within an adjacent area that is the indicated number of squares on a side. See [page 272](content:combat/areas-of-effect) for how to determine the area of a blast.',
  },
})

export const AreaSection = Content.defineSection('classes/area', {
  parent: AttackTypeAndRangeSection,
  content: {
    name: 'Area',
    description:
      'An area power creates an area of effect ([page 272](content:combat/areas-of-effect)) that can originate in a distant square and hits multiple targets or creates an obstacle. For details about how area attacks work, see [page 271](content:combat/area-attack).\n\n**Area burst [number] within [number] squares:** To use an area burst power, choose a square within the range indicated by the second number. The power affects targets in that square or within a number of squares equal to the first number.\n\n**Area wall [number] within [number] squares:** To use an area wall power, choose a square within the range indicated by the second number to be the wall’s origin square ([page 272](content:combat/areas-of-effect)). The first number represents the number of squares the wall occupies (all of its squares must be within range).',
  },
})

export const PersonalSection = Content.defineSection('classes/personal', {
  parent: AttackTypeAndRangeSection,
  content: {
    name: 'Personal',
    description: 'A power that has a range of “personal” affects only you.',
  },
})

export const PrerequisiteOrRequirementSection = Content.defineSection('classes/prerequisite-or-requirement', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Prerequisite or Requirement',
    description:
      '**Prerequisite:** You must be trained in Stealth.\n\n**Requirement:** You must be wielding a light blade.\n\nCertain powers are usable only if you meet a predetermined condition.\n\n**Prerequisite:** You must meet this provision to select this power. If you ever lose a prerequisite for a power (for example, if you use the retraining system to replace training in a skill with training in a different skill), you can’t use that power thereafter.\n\n**Requirement:** You must meet this provision to use this power. You can have the power in your repertoire, but it is not available to you unless you fulfill the requirement.',
  },
})

export const TargetSection = Content.defineSection('classes/target', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Target',
    description:
      '**Target:** One creature\n\n**Target:** You or one ally\n\n**Target:** Each enemy in burst\n\n**Targets:** One, two, or three creatures\n\n**Target:** One object or unoccupied square\n\nIf a power directly affects one or more creatures or objects, it has a “Target” or “Targets” entry.\n\nWhen a power’s target entry specifies that it affects you and one or more of your allies, then you can take advantage of the power’s effect along with your teammates. Otherwise, “ally” or “allies” does not include you, and both terms assume willing targets. “Enemy” or “enemies” means a creature or creatures that aren’t your allies (whether those creatures are hostile toward you or not). “Creature” or “creatures” means allies and enemies both, as well as you.',
  },
})

export const AttackSection = Content.defineSection('classes/attack', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Attack',
    description:
      '**Attack:** Strength vs. AC\n\n**Attack:** Charisma vs. Will\n\n**Attack:** Constitution vs. Fortitude\n\n**Attack:** Intelligence + 4 vs. Reflex\n\n**Attack:** Dexterity vs. AC, one attack per target\n\nMost attack powers that deal damage require you to make an attack roll. The “Attack” entry specifies the kind of attack you make and which of the target’s [defenses](characteristic-group:defenses) you check against. If you have a modifier to your attack roll, that’s mentioned here as well. Example entries are given above.\n\nIf your power can attack multiple targets, you make a separate attack roll against each target.',
  },
})

export const HitSection = Content.defineSection('classes/hit', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Hit',
    description:
      '**Hit:** 1[W] + Strength modifier damage.\n\n**Hit:** 3d6 + Intelligence modifier force damage, and the target is dazed until the end of your next turn.\n\n**Hit:** 5d6 + Intelligence modifier acid damage, and ongoing 10 acid damage (save ends).\n\n**Hit:** The target is immobilized (save ends).\n\n**Hit:** 2[W] + Dexterity modifier damage, and the target is slowed and grants combat advantage to you (save ends both).\n\n**Hit:** 3d6 + Wisdom modifier thunder damage, and you push the target a number of squares equal to 3 + your Charisma modifier.\n\n**Hit:** 3[W] + Strength modifier damage, and you regain hit points as if you had spent a healing surge.\n\n**Hit:** 3[W] + Strength modifier damage, and you and each ally within 10 squares of you can spend a healing surge.\n\nEvery power that requires an attack roll includes a “Hit” entry, which explains what happens when an attack roll succeeds. Example entries are given above. See “[Attacks and Defenses](content:combat/attacks-and-defenses),” page 269, for how to make attack rolls, how to deal damage, and how to apply various effects, including conditions and forced movement.\n\nOngoing damage is a fixed amount rather than an amount determined by a die roll. Ongoing damage is applied to a target each round at the start of the target’s turn until the target makes a successful saving throw.\n\nIf a “Hit” (or “Effect”) entry contains “(save ends)” or “(save ends both),” the indicated consequence of the successful attack persists until the target makes a successful saving throw.\n\nIf a hit grants you the ability to compel the target to move, whether through forced movement or teleportation, you can move it any number of squares up to the number specified (or not move it at all, if you so choose).\n\nSome powers add modifiers to attack rolls or damage rolls. These modifiers apply to any roll of the dice, but not to ongoing damage or other static, nonvariable effects. The paladin’s _wrath of the gods_ prayer, for example, adds her Charisma modifier to her and her allies’ damage rolls until the end of the encounter. When her cleric ally invokes _flame strike_, the damage equals 2d10 + Wisdom modifier + the paladin’s Charisma modifier fire damage and ongoing 5 fire damage. The ongoing damage doesn’t increase, because it’s a static effect.\n\nWhenever you affect a creature with a power, that creature knows exactly what you’ve done to it and what conditions you’ve imposed. For example, when a paladin uses _[divine challenge](trait:paladin/divine-challenge)_ against an enemy, the enemy knows that it has been marked and that it will therefore take a penalty to attack rolls and some damage if it attacks anyone aside from the paladin.\n\n**Applying a Penalty:** When a power description includes wording such as “a penalty to attack rolls equal to your Charisma modifier,” that means you subtract the value of your ability modifier from the result or the numerical quantity that’s being penalized. If your ability modifier is not a positive number, it does not provide a penalty.\n\n**Regaining Hit Points:** Some powers allow you or someone else to regain [hit points](characteristic:hit-points). Sometimes the recipient of this benefit needs to spend a [healing surge](characteristic:healing-surges) ([page 293](content:combat/healing)), but if a power description includes the wording “as if . . . had spent a healing surge,” then the beneficiary gains the appropriate number of hit points but does not spend a healing surge to do so.\n\n**Within x Squares of You:** When this language appears in a power description, treat the effect it refers to as a close burst for the purpose of determining line of effect.\n\n**Duration:** Most powers take effect and then end—their effects are instantaneous, perhaps as brief as a single swing of your sword. Some powers last beyond your turn, however—for instance, until the end of the current encounter or until the end of your next turn. If you use a power outside combat, it lasts for 5 minutes unless otherwise noted. Durations are discussed in more detail on [page 278](content:combat/durations).',
  },
})

export const MissSection = Content.defineSection('classes/miss', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Miss',
    description:
      '**Miss:** Half damage.\n\n**Miss:** Half damage, and no ongoing fire damage.\n\n**Miss:** Half damage, and the target is not pushed or immobilized.\n\nSometimes the dice are against you, and you miss your target. Missing isn’t always the end of the story, however. A miss can indicate a splash effect, a glancing blow, or some other incidental effect of a power. Examples of some typical “Miss” entries are given above.\n\n**Half Damage:** When you calculate half damage, remember to apply the rule about rounding down ([page 11](content:how-to-play/always-round-down)). If a damage roll produces a result of 1, half of that damage is 0.',
  },
})

export const SecondaryTargetAndSecondaryAttackSection = Content.defineSection('classes/secondary-target-and-secondary-attack', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Secondary Target and Secondary Attack',
    description:
      '**Secondary Target:** One creature within 3 squares of you\n\n**Secondary Target:** The same or a different target\n\n**Secondary Target:** Each enemy adjacent to the primary target\n\n**Secondary Targets:** Two creatures within 10 squares of the primary target\n\nSome powers allow you to make secondary (or even tertiary) attacks. The power description indicates if you can make such an attack after the previous attack was a hit, if that attack was a miss, or regardless of whether the previous attack hits or misses.\n\nUnless otherwise noted, the range of a secondary (or tertiary) attack is the same as for the attack that preceded it.',
  },
})

export const EffectSection = Content.defineSection('classes/effect', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Effect',
    description:
      '**Effect:** Until the end of your next turn, the target’s attack rolls against you take a penalty equal to your Wisdom modifier.\n\n**Effect:** You become invisible and then teleport 4 squares. The invisibility lasts until the start of your next turn.\n\n**Effect:** The power’s area is difficult terrain until the end of your next turn. You can end this effect as a minor action.\n\n**Effect:** You gain temporary hit points equal to 2d6 + your Constitution modifier.\n\nMany powers produce effects that take place regardless of whether your attack roll succeeds, and other powers have effects that occur without an attack roll being required. Example entries are given above.\n\nThe effects of powers are as varied as the powers themselves. Some effects impose a condition on the power’s target. Other effects provide a bonus or a benefit (for you or your allies) or a penalty (for enemies). Still others change the nature of the battlefield or create something that didn’t exist a moment ago.\n\nTwo kinds of powers—conjurations and zones—produce distinctive effects that are governed by special rules.',
  },
})

export const ConjurationsSection = Content.defineSection('classes/conjurations', {
  parent: EffectSection,
  content: {
    name: 'Conjurations',
    description:
      'Powers that have the conjuration keyword create objects or creatures of magical energy.\n\nUnless a power description says otherwise, a conjuration can’t be attacked or physically affected, and allies of the conjuration’s creator can move through the space a conjuration occupies, but enemies can’t.\n\nA conjuration uses your ability scores and defenses to determine the outcome of attacks it makes and attacks against it (if such attacks are possible).\n\nEnvironmental phenomena and other forces have no effect on a conjuration unless a power description says otherwise. For example, a conjuration that produces an icy hand functions in a fiery, volcanic cavern without penalty.\n\nIf a power allows you to move a conjuration, at least 1 square that the conjuration occupies must remain within the power’s range. If you move far enough away from a conjuration that it is no longer in range, its effect immediately ends.\n\nIf a conjuration’s creator is slain, the conjuration immediately ends.',
  },
})

export const ZonesSection = Content.defineSection('classes/zones', {
  parent: EffectSection,
  content: {
    name: 'Zones',
    description:
      'The zone keyword applies to powers that create lingering effects that extend over an area. For example, some zones create terrain effects, such as difficult terrain or scorching fire that harms anyone who enters it.\n\nZones cannot be attacked or otherwise physically affected unless a power description says otherwise. If zones overlap and impose penalties to the same roll or score, creatures in the overlapping area are subject to the worst penalty; the penalties are not cumulative. Similarly, a target in the overlapping area takes damage from whichever zone deals the most damage, regardless of damage type.\n\nEnvironmental effects, attacks, and other forces have no effect on a zone unless a power description says otherwise. For example, a zone that deals fire damage is in no way diminished by a power that deals cold damage.\n\nIf a power allows you to move a zone, at least 1 square that the zone covers must remain within the power’s range. If you move far enough away from a zone that it is no longer in range, its effects immediately end.\n\nUnless otherwise specified, a zone fills a power’s area of effect. Use the standard rules for areas of effect to determine which squares it fills.\n\nIf a zone’s creator is slain, the zone immediately ends.',
  },
})

export const SustainSection = Content.defineSection('classes/sustain', {
  parent: HowToReadAPowerSection,
  content: {
    name: 'Sustain',
    description:
      '**Sustain Minor:** The zone persists.\n\n**Sustain Minor:** You slide the target 1 square, whether you hit or miss.\n\n**Sustain Minor:** When you sustain the power, you make a secondary attack.\n\n**Sustain Move:** You can sustain this power until the end of the encounter or for 5 minutes.\n\n**Sustain Standard:** You remain invisible as long as you don’t make an attack.\n\nIf a power has a “Sustain” entry, you can keep that power active by taking a specified type of action (minor, move, or standard) during your turn. The “Sustain” entry tells you if a power has an effect that occurs when you take the action to sustain it. See “[Durations](content:combat/durations),” page 278, for more about sustaining a power.',
  },
})

export const ClassesContent: Array<ContentSection> = [
  ClassesSection,
  IntroducingTheClassesSection,
  ClassOverviewSection,
  ParagonPathsSection,
  IntroducingTheParagonPathsSection,
  EpicDestiniesSection,
  PowerTypesAndUsageSection,
  AtWillPowersSection,
  EncounterPowersSection,
  DailyPowersSection,
  PowerSourcesSection,
  HowToReadAPowerSection,
  NameAndLevelSection,
  FlavorTextSection,
  KeywordsSection,
  KeywordCategoriesSection,
  ActionTypeSection,
  AttackTypeAndRangeSection,
  MeleeSection,
  RangedSection,
  CloseSection,
  AreaSection,
  PersonalSection,
  PrerequisiteOrRequirementSection,
  TargetSection,
  AttackSection,
  HitSection,
  MissSection,
  SecondaryTargetAndSecondaryAttackSection,
  EffectSection,
  ConjurationsSection,
  ZonesSection,
  SustainSection,
]
