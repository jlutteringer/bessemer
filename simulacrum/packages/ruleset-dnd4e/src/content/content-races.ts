import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import * as Race from '@simulacrum/ruleset-dnd4e/race'

export const RacesSection = Content.defineSection('races', {
  content: {
    name: 'Character Races',
    description:
      'A variety of cultures and societies populate the world of the DUNGEONS & DRAGONS game, some made up of humans but others made up of fantastic races such as elves, dwarves, and tieflings. Adventurers and heroes can arise from these various peoples. Your choice of character race provides you with a basic set of advantages and special abilities. If you’re a [fighter](trait:fighter), are you a stubborn dwarf monster-slayer, a graceful elf blademaster, or a fierce dragonborn gladiator? If you’re a [wizard](trait:wizard), are you a brave human spell-for-hire or a devious tiefling conjurer? Your character race not only affects your ability scores and powers but also provides the first cues for building your character’s story.',
  },
})

export const RacialTraitsSection = Content.defineSection('races/racial-traits', {
  parent: RacesSection,
  content: {
    name: 'Racial Traits',
    description:
      'Each character race offers the following types of benefits.\n\n**Ability Scores:** Your character race gives you a bonus to a particular ability score or two. Keep these bonuses in mind when you assign your ability scores (see “[Ability Scores](content:making-characters/ability-scores),” page 16).\n\n**Speed:** Your [speed](characteristic:speed) is the number of squares you can normally move when you walk (see “[Movement and Position](content:combat/movement-and-position),” page 282).\n\n**Vision:** Most races, including humans, have normal vision. Some races have low-light vision; they see better in darkness than humans do (see “[Vision and Light](content:adventuring/vision-and-light),” page 262).\n\n**Languages:** You start off knowing how to speak, read, and write a few languages. All races speak Common, the language passed on by the last human empire, and some races let you choose a language (see “[Languages and Scripts](content:making-characters/languages-and-scripts),” page 24).\n\n**Other Racial Traits:** Other traits include bonuses to your skills, weapon training, and a handful of other traits that give you capabilities or bonuses that members of other races don’t have.\n\n**Racial Power:** Several races give you access to a racial power, which is an extra power you gain at 1st level in addition to the powers your class gives you. See [page 54](content:classes/how-to-read-a-power) for an explanation of how to read a power description.',
  },
})

export const DragonbornSection = Content.defineSection('races/dragonborn', {
  parent: RacesSection,
  content: {
    name: 'Dragonborn',
    description:
      '_Proud, honorable warriors, born from the blood of an ancient dragon god_\n\nBorn to fight, dragonborn are a race of wandering mercenaries, soldiers, and adventurers. Long ago, their empire contended for worldwide dominion, but now only a few rootless clans of these honorable warriors remain to pass on their legends of ancient glory.\n\nPlay a dragonborn if you want . . .\n\n- to look like a dragon.\n- to be the proud heir of an ancient, fallen empire.\n- to breathe acid, cold, fire, lightning, or poison.\n- to be a member of a race that favors the [warlord](trait:warlord), [fighter](trait:fighter), and [paladin](trait:paladin) classes.',
  },
})

export const DragonbornRacialTraitsSection = Content.defineSection('races/dragonborn-racial-traits', {
  parent: DragonbornSection,
  content: {
    name: 'Racial Traits',
    description:
      '**Average Height:** 6´ 2˝–6´ 8˝\n\n**Average Weight:** 220–320 lb.\n\n**Ability Scores:** +2 [Strength](characteristic:strength), +2 [Charisma](characteristic:charisma)\n\n**Size:** Medium\n\n**Speed:** 6 squares\n\n**Vision:** Normal\n\n**Languages:** Common, Draconic\n\n**Skill Bonuses:** +2 [History](characteristic:skill/history), +2 [Intimidate](characteristic:skill/intimidate)\n\n**Dragonborn Fury:** When you’re [bloodied](characteristic:bloodied), you gain a +1 racial bonus to attack rolls.\n\n**Draconic Heritage:** Your healing surge value is equal to one-quarter of your maximum [hit points](characteristic:hit-points) + your [Constitution modifier](characteristic:constitution-modifier).\n\n**Dragon Breath:** You can use _dragon breath_ as an encounter power.',
  },
})

export const DragonBreathSection = Content.defineSection('races/dragon-breath', {
  parent: DragonbornRacialTraitsSection,
  content: {
    name: 'Dragon Breath',
    description:
      '**Dragonborn Racial Power**\n\n_As you open your mouth with a roar, the deadly power of your draconic kin blasts forth to engulf your foes._\n\n**Encounter** ✦ **Acid, Cold, Fire, Lightning,** or **Poison**\n\n**[Minor Action](action-type:minor-action)** · **Close** blast 3\n\n**Targets:** All creatures in area\n\n**Attack:** Strength + 2 vs. [Reflex](characteristic:reflex), Constitution + 2 vs. Reflex, or Dexterity + 2 vs. Reflex\n\n**Hit:** 1d6 + Constitution modifier damage.\n\nIncrease to +4 bonus and 2d6 + Constitution modifier damage at 11th level, and to +6 bonus and 3d6 + Constitution modifier damage at 21st level.\n\n**Special:** When you create your character, choose Strength, Constitution, or Dexterity as the ability score you use when making attack rolls with this power. You also choose the power’s damage type: acid, cold, fire, lightning, or poison. These two choices remain throughout your character’s life and do not change the power’s other effects.',
  },
})

export const DragonbornPhysicalQualitiesSection = Content.defineSection('races/dragonborn-physical-qualities', {
  parent: DragonbornSection,
  content: {
    name: 'Physical Qualities',
    description:
      'Dragonborn resemble humanoid dragons. They’re covered in scaly hide, but they don’t have tails. They are tall and strongly built, often standing close to 6½ feet in height and weighing 300 pounds or more. Their hands and feet are strong, talonlike claws with three fingers and a thumb on each hand. A dragonborn’s head features a blunt snout, a strong brow, and distinctive frills at the cheek and ear. Behind the brow, a crest of hornlike scales of various lengths resembles thick, ropy hair. Their eyes are shades of red or gold.\n\nA typical dragonborn’s scales can be scarlet, gold, rust, ocher, bronze, or brown. Rarely do an individual’s scales match the hue of a chromatic or metallic dragon, and scale color gives no indication of the type of breath weapon a dragonborn uses. Most dragonborn have very fine scales over most of their body, giving their skin a leathery texture, with regions of larger scales on the forearms, lower legs and feet, shoulders, and thighs.\n\nYoung dragonborn grow faster than human children do. They walk hours after hatching, reach the size and development of a 10-year-old human child by the age of 3 and reach adulthood by 15. They live about as long as humans do.',
  },
})

export const PlayingADragonbornSection = Content.defineSection('races/playing-a-dragonborn', {
  parent: DragonbornSection,
  content: {
    name: 'Playing a Dragonborn',
    description:
      'To a dragonborn, honor is more important than life itself. First and foremost, honor is tied to battlefield conduct. Adversaries should be treated with courtesy and respect, even if they are bitter enemies. Caution and discretion are key to a warrior’s survival, but fear is a disease and cowardice is a moral failing.\n\nThe drive to behave honorably extends into the rest of a dragonborn’s life: Breaking an oath is the height of dishonor, and attention to honesty extends to every word. A commitment made must be carried out. Ultimately, a dragonborn takes responsibility for his or her actions and their consequences.\n\nA continual drive for self-improvement reveals an additional aspect of dragonborn honor. Dragonborn value skill and excellence in all endeavors. They hate to fail, and they push themselves to extreme efforts before they give up on something. A dragonborn holds mastery of a particular skill as a lifetime goal. Members of other races who share the same commitment find it easy to earn the respect of a dragonborn.\n\nThe dragonborn dedication to honor and excellence sometimes leads others to view dragonborn as arrogant and proud. Most dragonborn share a great pride in their race’s past and present accomplishments, but they are also quick to admire the accomplishments of others. Even though the tiefling empire of Bael Turath was the enemy of the ancient dragonborn empire of Arkhosia, dragonborn recognize tieflings as worthy companions or opponents, admiring their strength and tenacity as friends or enemies.\n\nDragonborn seek adventure for the chance to prove their worth, win renown, and perhaps become champions about whom stories will be told for generations. To win everlasting glory through mighty deeds, daring exploits, and supreme skill—that is the dragonborn dream.\n\n**Dragonborn Characteristics:** Driven, honor-bound, noble, perfectionist, proud, reliable, reserved, rooted in ancient history\n\n**Male Names:** Arjhan, Balasar, Bharash, Donaar, Ghesh, Heskan, Kriv, Medrash, Nadarr, Patrin, Rhogar, Shamash, Shedinn, Torinn\n\n**Female Names:** Akra, Biri, Daar, Harann, Kava, Korinn, Mishann, Nala, Perra, Raiann, Sora, Surina, Thava',
  },
})

export const DragonbornAdventurersSection = Content.defineSection('races/dragonborn-adventurers', {
  parent: DragonbornSection,
  content: {
    name: 'Dragonborn Adventurers',
    description:
      'Three sample dragonborn adventurers are described below.\n\nBharash is a dragonborn [warlord](trait:warlord) who leads a group of adventurers in search of riches and glory. Inspired by tales of the ancient heroes of Arkhosia, he seeks his destiny in battle. He dreams of someday leading a mighty army against an orc horde or a hobgoblin host, but he is content in the meantime to coordinate strikes against the lesser forces of evil he encounters in dungeons and ruins. He reveres [Bahamut](trait:deity/bahamut) as the god of honor.\n\nHarann is a [fighter](trait:fighter) dedicated to the mastery of her chosen weapon, the bastard sword. She rises early every morning to practice combat maneuvers and constantly strives to master new techniques. Excellence with her weapon is symbolic to her; it represents excellence of character, the perfection of her spirit. When she has achieved perfect mastery of the bastard sword, she believes she will be perfect herself.\n\nDonaar is a [paladin](trait:paladin) of [Erathis](trait:deity/erathis), the god of cities and civilization. He believes that the dragonborn race is destined to rise from the ashes of its ancient empire and to form a new nation carved from the wilderness. And he intends to be instrumental in that process. As a reminder of his heritage, he keeps a piece of the shell from which he hatched in an amulet around his neck. Although he sometimes thinks that pillaging dungeons is a waste of his effort, he occasionally unearths a remnant of the long-lost dragonborn empire. He believes he can put such items to use one day in forging a new empire for his people.',
  },
})

export const DwarfSection = Content.defineSection('races/dwarf', {
  parent: RacesSection,
  content: {
    name: 'Dwarf',
    description:
      '_Masters of stone and iron, dauntless and unyielding in the face of adversity_\n\nCarved from the bedrock of the universe, dwarves endured an age of servitude to giants before winning their freedom. Their mighty mountain fortress-cities testify to the power of their ancient empires. Even those who live in human cities are counted among the staunchest defenders against the darkness that threatens to engulf the world.\n\nPlay a dwarf if you want . . .\n\n- to be tough, gruff, and strong as bedrock.\n- to bring glory to your ancestors or serve as your god’s right hand.\n- to be able to take as much punishment as you dish out.\n- to be a member of a race that favors the [paladin](trait:paladin), [cleric](trait:cleric), and [fighter](trait:fighter) classes.',
  },
})

export const DwarfRaceSection = Content.linkEntity(DwarfSection, Race.Dwarf)
export const CastIronStomachSection = Content.linkEntity(DwarfRaceSection, Race.CastIronStomach)
export const DwarvenResilienceSection = Content.linkEntity(DwarfRaceSection, Race.DwarvenResilience)
export const DwarvenWeaponProficiencySection = Content.linkEntity(DwarfRaceSection, Race.DwarvenWeaponProficiency)
export const EncumberedSpeedSection = Content.linkEntity(DwarfRaceSection, Race.EncumberedSpeed)
export const StandYourGroundSection = Content.linkEntity(DwarfRaceSection, Race.StandYourGround)

export const DwarfPhysicalQualitiesSection = Content.defineSection('races/dwarf-physical-qualities', {
  parent: DwarfSection,
  content: {
    name: 'Physical Qualities',
    description:
      'Dwarves average about 4½ feet in height and are very broad, weighing as much as an adult human. Dwarves have the same variety of skin, eye, and hair colors as humans, although dwarf skin is sometimes gray or sandstone red and red hair is more common among them. Male dwarves are often bald and braid their long beards into elaborate patterns. Female dwarves braid their hair to show clan and ancestry. Dwarven attire and equipment, including weapons and shields, are decorated with bold geometric shapes, natural gems, and ancestral faces.\n\nAlthough they reach physical maturity at roughly the same age as humans, dwarves age more slowly and remain vigorous well past 150 years of age, often living to see 200.',
  },
})

export const PlayingADwarfSection = Content.defineSection('races/playing-a-dwarf', {
  parent: DwarfSection,
  content: {
    name: 'Playing a Dwarf',
    description:
      'Proudly proclaiming they were made from the earth itself, dwarves share many qualities with the rock they love. They are strong, hardy, and dependable. They value their ancestral traditions, which they preserve through the ages as fiercely as they defend the carved structures of their mountain homes.\n\nDwarves believe in the importance of clan ties and ancestry. They deeply respect their elders, and they honor long-dead clan founders and ancestral heroes. They place great value on wisdom and the experience of years, and most are polite to elders of any race.\n\nMore so than most other races, dwarves seek guidance and protection from the gods. They look to the divine for strength, hope, and inspiration, or they seek to propitiate cruel or destructive gods. Individual dwarves might be impious or openly heretical, but temples and shrines of some sort are found in almost every dwarven community. Dwarves revere [Moradin](trait:deity/moradin) as their creator, but individual dwarves honor those deities who hold sway over their vocations; warriors pray to [Bahamut](trait:deity/bahamut) or [Kord](trait:deity/kord), architects to [Erathis](trait:deity/erathis), and merchants to [Avandra](trait:deity/avandra)—or even to Tiamat, if a dwarf is consumed by the dwarven taste for wealth.\n\nDwarves never forget their enemies, either individuals who have wronged them or entire races of monsters who have done ill to their kind. Dwarves harbor a fierce hatred for orcs, which often inhabit the same mountainous areas that dwarves favor and which wreak periodic devastation on dwarf communities. Dwarves also despise giants and titans, because the dwarf race once labored as the giants’ slaves. They feel a mixture of pity and disgust toward those corrupted dwarves who still have not freed themselves from the giants’ yoke—azers and galeb duhrs among them.\n\nTo a dwarf, it is a gift and a mark of deep respect to stand beside an ally in battle, and a sign of deepest loyalty to shield that ally from enemy attack. Dwarven legends honor many heroes who gave their lives to save their clans or their friends.\n\n**Dwarf Characteristics:** Acquisitive, brave, hardworking, loyal, organized, stern, stubborn, tenacious, vengeful\n\n**Male Names:** Adrik, Baern, Berend, Darrak, Eberk, Fargrim, Gardain, Harbek, Kildrak, Morgran, Orsik, Rangrim, Thoradin, Thorfin, Tordek, Travok, Vondal\n\n**Female Names:** Artin, Bardryn, Diesa, Eldeth, Falkrunn, Gurdis, Helja, Kathra, Kristryd, Mardred, Riswynn, Torbera, Vistra',
  },
})

export const DwarfAdventurersSection = Content.defineSection('races/dwarf-adventurers', {
  parent: DwarfSection,
  content: {
    name: 'Dwarf Adventurers',
    description:
      'Three sample dwarf adventurers are described below.\n\nTravok is a dwarf [paladin](trait:paladin) committed to the service of [Kord](trait:deity/kord). Wearing shining plate armor crafted and proudly worn by his great-grandfather, Travok presents an impenetrable line of defense, defying his enemies to get past him to reach his allies. True to his god and the honor of his ancestors, Travok relishes his physical strength and endurance, vowing that nothing will move him from his place. He is fiercely loyal to his friends, and if the need arises, he will lay down his life to ensure that they live.\n\nKathra is a dwarf [cleric](trait:cleric) devoted to [Moradin](trait:deity/moradin), the Great Carver who formed the dwarves out of stone and liberated them from their servitude to the giants. Swinging a warhammer engraved with the hammer-and-anvil symbol of her god, Kathra stands next to her fighter companion, trusting in divine power, the chainmail she made herself, and her own natural resilience to protect her from her enemies. Her dearest hope is to craft a legacy that will last through the ages, as beautiful and enduring as the finest dwarven jewelry—a legacy of peace and justice in this troubled world.\n\nTordek is a dwarf [fighter](trait:fighter), last in a long line of noble warriors. Three generations ago, his family’s ancestral fortress was overrun by orcs and laid to waste, leaving Tordek with nothing but a signet ring and tales of ancient glory as his birthright. He has sworn that he will rebuild the fortress one day, and that oath drives his every action. In the meantime, his adventuring companions know they can rely on him completely, and someday he will rely on them to help him reclaim his kingdom.',
  },
})

export const EladrinSection = Content.defineSection('races/eladrin', {
  parent: RacesSection,
  content: {
    name: 'Eladrin',
    description:
      '_Graceful warriors and wizards at home in the eldritch twilight of the Feywild_\n\nCreatures of magic with strong ties to nature, eladrin live in cities in the twilight realm of the Feywild. Their cities lie close enough to the world that they sometimes cross over, appearing briefly in mountain valleys or deep forest glades before fading back into the Feywild.\n\nPlay an eladrin if you want . . .\n\n- to be otherworldly and mysterious.\n- to be graceful and intelligent.\n- to teleport around the battlefield, cloaked in the magic of the Feywild.\n- to be a member of a race that favors the [wizard](trait:wizard), [rogue](trait:rogue), and [warlord](trait:warlord) classes.',
  },
})

export const EladrinRacialTraitsSection = Content.defineSection('races/eladrin-racial-traits', {
  parent: EladrinSection,
  content: {
    name: 'Racial Traits',
    description:
      '**Average Height:** 5´ 5˝–6´ 1˝\n\n**Average Weight:** 130–180 lb.\n\n**Ability Scores:** +2 [Dexterity](characteristic:dexterity), +2 [Intelligence](characteristic:intelligence)\n\n**Size:** Medium\n\n**Speed:** 6 squares\n\n**Vision:** Low-light\n\n**Languages:** Common, Elven\n\n**Skill Bonuses:** +2 [Arcana](characteristic:skill/arcana), +2 [History](characteristic:skill/history)\n\n**Eladrin Education:** You gain training in one additional skill selected from the skill list in [Chapter 5](content:skills).\n\n**Eladrin Weapon Proficiency:** You gain proficiency with the longsword.\n\n**Eladrin Will:** You gain a +1 racial bonus to your [Will](characteristic:will) defense.\n\nIn addition, you gain a +5 racial bonus to saving throws against charm effects.\n\n**Fey Origin:** Your ancestors were native to the Feywild, so you are considered a fey creature for the purpose of effects that relate to creature origin.\n\n**Trance:** Rather than sleep, eladrin enter a meditative state known as trance. You need to spend 4 hours in this state to gain the same benefits other races gain from taking a 6-hour extended rest. While in a trance, you are fully aware of your surroundings and notice approaching enemies and other events as normal.\n\n**Fey Step:** You can use _fey step_ as an encounter power.',
  },
})

export const FeyStepSection = Content.defineSection('races/fey-step', {
  parent: EladrinRacialTraitsSection,
  content: {
    name: 'Fey Step',
    description:
      '**Eladrin Racial Power**\n\n_With a step, you vanish from one place and appear in another._\n\n**Encounter** ✦ **Teleportation**\n\n**[Move Action](action-type:move-action)** · **Personal**\n\n**Effect:** Teleport up to 5 squares (see “[Teleportation](content:combat/teleportation),” page 286).',
  },
})

export const EladrinPhysicalQualitiesSection = Content.defineSection('races/eladrin-physical-qualities', {
  parent: EladrinSection,
  content: {
    name: 'Physical Qualities',
    description:
      'Eladrin are of human height. They are slim, and even the strongest simply look athletic rather than musclebound. They have the same range of complexions as humans, though they are more often fair than dark. Their straight, fine hair is often white, silver, or pale gold, and they wear it long and loose. Their ears are long and pointed, and their eyes are pearly and opalescent orbs of vibrant blue, violet, or green, lacking pupils. Eladrin can’t grow facial hair and have little body hair.\n\nEladrin children grow much as human children do, but their aging process slows to a crawl when they reach maturity. They enjoy youth and health for most of their lives and don’t begin to feel the effects of age until the middle of their third century. Most live for over 300 years, and even at the end they suffer few of the infirmities of old age.',
  },
})

export const PlayingAnEladrinSection = Content.defineSection('races/playing-an-eladrin', {
  parent: EladrinSection,
  content: {
    name: 'Playing an Eladrin',
    description:
      'Eladrin society straddles the boundary between the Feywild and the natural world. Eladrin build their elegant cities and towers in places of striking natural splendor, especially where the veil between the worlds is thin—isolated mountain vales, green islands along wild and storm-wracked coasts, and the deepest recesses of ancient forests. Some eladrin realms exist mostly in the Feywild, only rarely touching the world, while others appear in the world at sunset each day, only to fade back into the Feywild at dawn.\n\nLong-lived and strongly tied to the Feywild, eladrin have a detached view of the world. Eladrin often have difficulty believing that events in the world have much importance to them, and they consider courses of action that can last for centuries.\n\nTheir general detachment from the world can make eladrin seem distant and intimidating to other races. Their fey nature also makes them simultaneously alluring and a little frightening. However, eladrin take friendships and alliances to heart and can react with swift fury when their friends are endangered. Combined with their intellect, bravery, and magical power, this loyalty makes them powerful and respected allies.\n\nEladrin live by an aesthetic philosophy common to the Feywild and personified by [Corellon](trait:deity/corellon), the god of beauty and patron of the fey. Eladrin seek to exemplify grace, skill, and learning in every part of life, from dance and song to swordplay and magic. Their cities are places of stunning beauty that shape and guide their natural surroundings into elegant forms.\n\nEladrin are close cousins to the elves and are occasionally called high elves or gray elves. Eladrin favor the Feywild and arcane magic more than elves do, but the two races hold each other in high regard. They share a burning hatred for the third branch of their race—the drow.\n\nThe Feywild’s most powerful eladrin, called noble eladrin, become so infused with their realm’s inherent magic that they transform into entirely new creatures. These noble eladrin take on characteristics of the seasons and other natural phenomena.\n\n**Eladrin Characteristics:** Aesthetic, deliberative, detached, free, graceful, magical, otherworldly, patient, perceptive\n\n**Male Names:** Aramil, Arannis, Berrian, Dayereth, Erevan, Galinndan, Hadarai, Immeral, Mindartis, Paelias, Quarion, Riardon, Soveliss\n\n**Female Names:** Althaea, Anastrianna, Andraste, Bethrynna, Caelynna, Jelenneth, Leshanna, Meriele, Naivara, Quelenna, Sariel, Shanairra, Theirastra, Valenae',
  },
})

export const EladrinAdventurersSection = Content.defineSection('races/eladrin-adventurers', {
  parent: EladrinSection,
  content: {
    name: 'Eladrin Adventurers',
    description:
      'Three sample eladrin adventurers are described below.\n\nMeriele is an eladrin [wizard](trait:wizard). Although her magic favors powers of thunder and lightning, she stands as a point of tranquility in the storm. To her friends, she seems above the world’s tumult, present in their midst but clearly apart by her nature. In the evenings, while her companions set up camp and settle in to rest, she slips into a trance and, in her mind, walks among the ageless trees of the Feywild. She smiles at the impatience and impulsiveness of her allies, but they are almost as dear to her as her spellbooks.\n\nQuarion is an eladrin [rogue](trait:rogue), as comfortable in the shadows of the world as in the twilight of the Feywild. He moves with the grace of a panther and can be uncannily silent when he chooses. In combat, he finds his mind slipping out of time, as though he were watching himself and his foes moving at a snail’s pace. His enemies’ attacks are easy to calculate, their defenses easy to anticipate and circumvent. Combat is a carefully choreographed dance in his mind, and he savors its elegance.\n\nAnastrianna is an eladrin [warlord](trait:warlord) who once served as the captain of the guard in the castle of a noble eladrin, a ghaele of winter. Banished at the ghaele’s angry whim, Anastrianna has turned her back on the Feywild entirely. She is haunted by beautiful visions of herself at the head of a fey army, banners fluttering against a sapphire sky and blood staining the perfect snow, and she imagines that her destiny will lead her against her former lady someday.',
  },
})

export const ElfSection = Content.defineSection('races/elf', {
  parent: RacesSection,
  content: {
    name: 'Elf',
    description:
      '_Quick, wary archers who freely roam the forests and wilds_\n\nWild and free, elves guard their forested lands using stealth and deadly arrows from the trees. They build their homes in close harmony with the forest, so perfectly joined that travelers often fail to notice that they have entered an elven community until it is too late.\n\nPlay an elf if you want . . .\n\n- to be quick, quiet, and wild.\n- to lead your companions through the deep woods and pepper your enemies with arrows.\n- to be a member of a race that favors the [ranger](trait:ranger), [rogue](trait:rogue), and [cleric](trait:cleric) classes.',
  },
})

export const ElfRacialTraitsSection = Content.defineSection('races/elf-racial-traits', {
  parent: ElfSection,
  content: {
    name: 'Racial Traits',
    description:
      '**Average Height:** 5´ 4˝–6´ 0˝\n\n**Average Weight:** 130–170 lb.\n\n**Ability Scores:** +2 [Dexterity](characteristic:dexterity), +2 [Wisdom](characteristic:wisdom)\n\n**Size:** Medium\n\n**Speed:** 7 squares\n\n**Vision:** Low-light\n\n**Languages:** Common, Elven\n\n**Skill Bonuses:** +2 [Nature](characteristic:skill/nature), +2 [Perception](characteristic:skill/perception)\n\n**Elven Weapon Proficiency:** You gain proficiency with the longbow and the shortbow.\n\n**Fey Origin:** Your ancestors were native to the Feywild, so you are considered a fey creature for the purpose of effects that relate to creature origin.\n\n**Group Awareness:** You grant non-elf allies within 5 squares of you a +1 racial bonus to Perception checks.\n\n**Wild Step:** You ignore difficult terrain when you shift (even if you have a power that allows you to shift multiple squares).\n\n**Elven Accuracy:** You can use _elven accuracy_ as an encounter power.',
  },
})

export const ElvenAccuracySection = Content.defineSection('races/elven-accuracy', {
  parent: ElfRacialTraitsSection,
  content: {
    name: 'Elven Accuracy',
    description:
      '**Elf Racial Power**\n\n_With an instant of focus, you take careful aim at your foe and strike with the legendary accuracy of the elves._\n\n**Encounter**\n\n**[Free Action](action-type:free-action)** · **Personal**\n\n**Effect:** Reroll an attack roll. Use the second roll, even if it’s lower.',
  },
})

export const ElfPhysicalQualitiesSection = Content.defineSection('races/elf-physical-qualities', {
  parent: ElfSection,
  content: {
    name: 'Physical Qualities',
    description:
      'Elves are slender, athletic folk about as tall as humans. They have the same range of complexions as humans, tending more toward tan or brown hues. A typical elf’s hair color is dark brown, autumn orange, mossy green, or deep gold. Elves’ ears are long and pointed, and their eyes are vibrant blue, violet, or green. Elves have little body hair, but they favor a wild and loose look to their hair.\n\nElves mature at about the same rate as humans, but show few effects of age past adulthood. The first sign of an elf’s advancing age is typically a change in hair color—sometimes graying but usually darkening or taking on more autumnal hues. Most elves live to be well over 200 years old and remain vigorous almost to the end.',
  },
})

export const PlayingAnElfSection = Content.defineSection('races/playing-an-elf', {
  parent: ElfSection,
  content: {
    name: 'Playing an Elf',
    description:
      'Elves are a people of deeply felt but short-lived passions. They are easily moved to delighted laughter, blinding wrath, or mournful tears. They are inclined to impulsive behavior, and members of other races sometimes see elves as flighty or impetuous, but elves do not shirk responsibility or forget commitments. Thanks in part to their long life span, elves sometimes have difficulty taking certain matters as seriously as other races do, but when genuine threats arise, elves are fierce and reliable allies.\n\nElves revere the natural world. Their connection to their surroundings enables them to perceive much. They never cut living trees, and when they create permanent communities, they do so by carefully growing or weaving arbors, tree houses, and catwalks from living branches. They prefer the primal power of the natural world to the arcane magic their eladrin cousins employ. Elves love to explore new forests and new lands, and it’s not unusual for individuals or small bands to wander hundreds of miles from their homelands.\n\nElves are loyal and merry friends. They love simple pleasures—dancing, singing, footraces, and contests of balance and skill—and rarely see a reason to tie themselves down to dull or disagreeable tasks. Despite how unpleasant war can be, a threat to their homes, families, or friends can make elves grimly serious and prompt them to take up arms.\n\nAt the dawn of creation, elves and eladrin were a single race dwelling both in the Feywild and in the world, and passing freely between the two. When the drow rebelled against their kin, under the leadership of the god Lolth, the resulting battles tore the fey kingdoms asunder. Ties between the peoples of the Feywild and the world grew tenuous, and eventually the elves and eladrin grew into two distinct races. Elves are descended from those who lived primarily in the world, and they no longer dream of the Feywild. They love the forests and wilds of the world that they have made their home.\n\n**Elf Characteristics:** Agile, friendly, intuitive, joyful, perceptive, quick, tempestuous, wild\n\n**Male Names:** Adran, Aelar, Beiro, Carric, Erdan, Gennal, Heian, Lucan, Peren, Rolen, Theren, Varis\n\n**Female Names:** Adrie, Birel, Chaedi, Dara, Enna, Faral, Irann, Keyleth, Lia, Mialee, Shava, Thia, Valna',
  },
})

export const ElfAdventurersSection = Content.defineSection('races/elf-adventurers', {
  parent: ElfSection,
  content: {
    name: 'Elf Adventurers',
    description:
      'Three sample elf adventurers are described below.\n\nVaris is an elf [ranger](trait:ranger) and a devout worshiper of [Melora](trait:deity/melora), the god of the wilds. When a goblin army forced his people from their woodland village, the elves took refuge in the nearest human town, walled and guarded by soldiers. Varis now leads other elves and some human townsfolk in raids against the goblins. Although he maintains a cheerful disposition, he frequently stares into the distance, listening, expecting at any moment to hear signs of approaching foes.\n\nLia is an elf [rogue](trait:rogue) whose ancestral forest burned to the ground decades ago. Lia grew up on the wasteland’s fringes in a large human city, unable to quite fit in. Her dreams called her to the forests, while her waking hours were spent in the dirtiest parts of civilization. She joined a group of adventurers after trying to cut a warlock’s purse, and she fell in love with the wide world beyond the city.\n\nHeian is an elf [cleric](trait:cleric) of [Sehanine](trait:deity/sehanine), the god of the moon. The elven settlement where he was born still thrives in a forest untouched by the darkness spreading through the world, but he left home years ago, in search of new horizons and adventures. His travels lately have brought rumors to his ears that danger might be brewing in the ancient forest, and he is torn between a desire to seek his own way in the world and a sense of duty to his homeland.',
  },
})

export const HalfElfSection = Content.defineSection('races/half-elf', {
  parent: RacesSection,
  content: {
    name: 'Half-Elf',
    description:
      '_Born heroes and leaders who combine the best features of humans and elves_\n\nDescended from elves and humans, half-elves are a vital race in which the best features of elves and humans often appear.\n\nPlay a half-elf if you want . . .\n\n- to be an outgoing, enthusiastic leader.\n- to be a charismatic hero equally at home in two different cultures.\n- to be a member of a race that favors the [warlord](trait:warlord), [paladin](trait:paladin), and [warlock](trait:warlock) classes.',
  },
})

export const HalfElfRacialTraitsSection = Content.defineSection('races/half-elf-racial-traits', {
  parent: HalfElfSection,
  content: {
    name: 'Racial Traits',
    description:
      '**Average Height:** 5´ 5˝–6´ 2˝\n\n**Average Weight:** 130–190 lb.\n\n**Ability Scores:** +2 [Constitution](characteristic:constitution), +2 [Charisma](characteristic:charisma)\n\n**Size:** Medium\n\n**Speed:** 6 squares\n\n**Vision:** Low-light\n\n**Languages:** Common, Elven, choice of one other\n\n**Skill Bonuses:** +2 [Diplomacy](characteristic:skill/diplomacy), +2 [Insight](characteristic:skill/insight)\n\n**Dilettante:** At 1st level, you choose an at-will power from a class different from yours. You can use that power as an encounter power.\n\n**Dual Heritage:** You can take feats that have either elf or human as a prerequisite (as well as those specifically for half-elves), as long as you meet any other requirements.\n\n**Group Diplomacy:** You grant allies within 10 squares of you a +1 racial bonus to Diplomacy checks.',
  },
})

export const HalfElfPhysicalQualitiesSection = Content.defineSection('races/half-elf-physical-qualities', {
  parent: HalfElfSection,
  content: {
    name: 'Physical Qualities',
    description:
      'Half-elves tend to be sturdier of build than elves but more slender than most humans. Half-elves have the same range of complexions as humans and elves, and like elves, half-elves often have eye or hair colors not normally found among humans. Male half-elves can grow facial hair, unlike male elves, and often sport thin mustaches, goatees, or short beards. Half-elves’ ears are about the size of human ears, but they are tapered, like the ears of their elven ancestors.\n\nHalf-elves usually adopt the dress and hairstyles of the society they spend the most time with; for example, a half-elf raised among a barbaric human tribe dresses in the furs and skins favored by the tribe and adopts the tribe’s style of braids and face paint. However, it would not be unusual for half-elves raised among humans to seek out articles of elven clothing or jewelry so that they can proudly display signs of their dual heritage.\n\nHalf-elves have life spans comparable to humans, but like elves they remain vigorous well into old age.',
  },
})

export const PlayingAHalfElfSection = Content.defineSection('races/playing-a-half-elf', {
  parent: HalfElfSection,
  content: {
    name: 'Playing a Half-Elf',
    description:
      'Half-elves are more than just a combination of two races—the combination of human and elf blood produces a unique race with qualities all its own. They share some of the natural grace, athleticism, and keen perceptiveness of elves, along with the passion and drive of humans. But in their own right, they are charismatic, confident, and open-minded and are natural diplomats, negotiators, and leaders.\n\nHalf-elves like to be around people, the more diverse the better. They gravitate toward population centers, especially larger settlements where members of many races mingle freely. Half-elves cultivate large networks of acquaintances, as much out of genuine friendliness as for practical purposes. They like to establish relationships with humans, elves, and members of other races so they can learn about them, the way they live, and how they make their way in the world.\n\nHalf-elves rarely settle down for any length of time. Their wanderlust makes them natural adventurers, and they quickly make themselves at home wherever they end up. When their paths take them back to a place they have visited before, they track down old friends and renew old contacts.\n\nUltimately, half-elves are survivors, able to adapt to almost any situation. They are generally well liked and admired by everyone, not just elves and humans. They are empathetic, better at putting themselves in others’ shoes than most.\n\nHalf-elves naturally inspire loyalty in others, and they return that feeling with deep friendship and a keen sense of responsibility for those who place themselves in their care. Half-elf warlords and generals do not order their followers into danger that they would not face themselves, and they usually lead from the front, trusting their allies to follow.\n\nHalf-elves have no culture of their own and are not a numerous people. They usually bear human or elf names, sometimes using one name among elves and a different one among humans. Some are anxious about their place in the world, feeling no kinship with any race, except other half-elves, but most call themselves citizens of the world and kin to all.\n\n**Half-Elf Characteristics:** Accommodating, adaptable, charming, confident, gregarious, open-minded\n\n**Half-Elf Names:** Typically elf or human names, though some half-elves have names more typical of other races',
  },
})

export const HalfElfAdventurersSection = Content.defineSection('races/half-elf-adventurers', {
  parent: HalfElfSection,
  content: {
    name: 'Half-Elf Adventurers',
    description:
      'Three sample half-elf adventurers are described below.\n\nDaran is a half-elf [warlord](trait:warlord) and an enthusiastic tactician. He has no aspirations to march at the head of an army; he is content leading a small band of friends in a quest for personal glory. Wealth is a welcome benefit of adventuring, and between adventures, he enjoys spending his time and wealth in the world’s cities. He wins friends easily, draws on a wide network of contacts to find adventuring opportunities, and can call in favors across the land.\n\nShuva is a half-elf [warlock](trait:warlock) whose brooding force of personality inspires more fear than loyalty. Unlike many of her kind, she grew up feeling part of neither human nor elven society. She has always been a loner and is accustomed to relying only on herself. Now that she’s part of an adventuring group, she’s slowly learning to trust her companions.\n\nCalder is a half-elf [paladin](trait:paladin) of [Pelor](trait:deity/pelor), the god of the sun. A strong sense of compassion leads Calder to aid those in need and alleviate their suffering in any way he can. Often he fights against evil forces that prey on the weak, whether the forces are bandits harrying caravans or gnolls laying waste to farmsteads. He refuses to let fighting define him, however, and spends more time helping the victims of hardship than he does celebrating his successes.',
  },
})

export const HalflingSection = Content.defineSection('races/halfling', {
  parent: RacesSection,
  content: {
    name: 'Halfling',
    description:
      '_Quick and resourceful wanderers, small in stature but great in courage_\n\nHalflings are a small race known for their resourcefulness, quick wits, and steady nerves. They are a nomadic folk who roam waterways and marshlands. No people travel farther or see more of what happens in the world than halflings.\n\nPlay a halfling if you want . . .\n\n- to be a plucky hero who is all too easy to underestimate.\n- to be likable, warm, and friendly.\n- to be a member of a race that favors the [rogue](trait:rogue), [ranger](trait:ranger), and [warlock](trait:warlock) classes.',
  },
})

export const HalflingRacialTraitsSection = Content.defineSection('races/halfling-racial-traits', {
  parent: HalflingSection,
  content: {
    name: 'Racial Traits',
    description:
      '**Average Height:** 3´ 10˝–4´ 2˝\n\n**Average Weight:** 75–85 lb.\n\n**Ability Scores:** +2 [Dexterity](characteristic:dexterity), +2 [Charisma](characteristic:charisma)\n\n**Size:** Small\n\n**Speed:** 6 squares\n\n**Vision:** Normal\n\n**Languages:** Common, choice of one other\n\n**Skill Bonuses:** +2 [Acrobatics](characteristic:skill/acrobatics), +2 [Thievery](characteristic:skill/thievery)\n\n**Bold:** You gain a +5 racial bonus to saving throws against fear.\n\n**Nimble Reaction:** You gain a +2 racial bonus to [AC](characteristic:armor-class) against opportunity attacks.\n\n**Second Chance:** You can use _second chance_ as an encounter power.',
  },
})

export const SecondChanceSection = Content.defineSection('races/second-chance', {
  parent: HalflingRacialTraitsSection,
  content: {
    name: 'Second Chance',
    description:
      '**Racial Power**\n\n_Luck and small size combine to work in your favor as you dodge your enemy’s attack._\n\n**Encounter**\n\n**[Immediate Interrupt](action-type:immediate-interrupt)** · **Personal**\n\n**Effect:** When an attack hits you, force an enemy to roll the attack again. The enemy uses the second roll, even if it’s lower.',
  },
})

export const BeingSmallSection = Content.defineSection('races/being-small', {
  parent: HalflingSection,
  content: {
    name: 'Being Small',
    description:
      'Small characters follow most of the same rules as Medium ones, with the following exceptions.\n\n- You can’t use two-handed weapons ([page 215](content:equipment/weapon-categories)), such as greatswords and halberds.\n- When you use a versatile weapon ([page 217](content:equipment/weapon-properties)), such as a longsword, you must use it two-handed, but you don’t deal additional damage for doing so.',
  },
})

export const HalflingPhysicalQualitiesSection = Content.defineSection('races/halfling-physical-qualities', {
  parent: HalflingSection,
  content: {
    name: 'Physical Qualities',
    description:
      'Halflings stand about 4 feet tall and weigh about 80 pounds. They resemble small humans and are proportioned like human adults. Halflings have the same range of complexions as humans, but most halflings have dark hair and eyes. Halfling males don’t have beards, but many have long, full sideburns. Halflings of both genders often wear complicated hairstyles, featuring complex braiding and weaving.\n\nHalflings typically dress in clothes that match their surroundings and prefer earth tones and various shades of green. Their clothing and gear feature woven textures and stitching. Birds, river patterns, boats, and fish are common images in halfling art and decoration.\n\nHalflings have life spans comperable to humans.',
  },
})

export const PlayingAHalflingSection = Content.defineSection('races/playing-a-halfling', {
  parent: HalflingSection,
  content: {
    name: 'Playing a Halfling',
    description:
      'Halflings are an affable, warm, and cheerful people. They survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. They appear harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife.\n\nHalflings are practical and down-to-earth. They concern themselves with basic needs and simple pleasures, harboring few dreams of gold or glory. Adventurers are no more rare among halflings than among other races, but they usually pursue the adventurer’s life for reasons of community, friendship, wanderlust, or curiosity. Halfling adventurers are brave and faithful companions, relying on stealth and trickery in battle rather than raw might or magic.\n\nTight-knit halfling communities are found near the settlements of other races, often along or even on the surface of a body of water. Halflings have never built a kingdom of their own or even held much land. They don’t recognize any sort of royalty or nobility of their own, instead looking to family elders to guide them. This emphasis on family and community has enabled halflings to maintain their traditional ways for thousands of years, unaffected by the rise and fall of empires.\n\nAccording to halfling legend, [Melora](trait:deity/melora) and [Sehanine](trait:deity/sehanine) created the halflings together, giving the race a love of nature and the gift of stealth. When their interest waned, Melora and Sehanine stopped looking after the race, or so the legends go, and halflings made their own way in the world. They say [Avandra](trait:deity/avandra), the god of luck, admired their resourcefulness and adopted them, favoring them with good fortune. Not all halflings worship Avandra, but nearly all breathe a prayer of thanks to her when fortune favors them.\n\nHalflings are fond of stories and legends such as the myth of Avandra, and their culture is rich in oral tradition. Few members of other races realize that halfling folktales contain a vast amount of lore about people and places long past. Many halflings are able to dredge up knowledge about the history, religion, or culture of other races, but that knowledge is usually wrapped in a fable.\n\n**Halfling Characteristics:** Brave, curious, determined, down-to-earth, friendly, good-natured, lucky, nimble, optimistic, practical, resourceful, warm\n\n**Male Names:** Ander, Corrin, Dannad, Errich, Finnan, Garret, Lazam, Lindal, Merric, Nebin, Ostran, Perrin, Reed, Shardon, Ulmo, Wenner\n\n**Female Names:** Andrey, Bree, Callie, Chenna, Eida, Kithri, Lidda, Nedda, Paela, Shaena, Tryn, Vani, Verna, Wella',
  },
})

export const HalflingAdventurersSection = Content.defineSection('races/halfling-adventurers', {
  parent: HalflingSection,
  content: {
    name: 'Halfling Adventurers',
    description:
      'Three sample halfling adventurers are described below.\n\nLidda is a halfling [rogue](trait:rogue) with a quick wit and an acid tongue. At a young age, she left her family out of a desire to see more of the world and experience firsthand the wonders described in the stories she grew up hearing. She has joined several different adventuring groups during her career, and even though her displays of sarcasm and wry humor at her companions’ expense would suggest otherwise, she counts each of them as a close friend.\n\nGarret is a halfling [ranger](trait:ranger). Several years ago, his grandfather sent him to look for a distant branch of his family that had stopped responding to messages. Garret found the whole clan had been killed, and he returned to bring the sad news to his family. From that time, he has been unable to stay in one place for long. He doesn’t know who or what killed his relatives and doesn’t dream of vengeance, but he hopes to do some good in the world that might somehow balance out the atrocity of their murders.\n\nVerna is a halfling [warlock](trait:warlock)—and among the most cheerful and gregarious of halflings. The infernal powers she channels seem to leave no mark on her spirit or mind. She takes no delight in killing but uses lethal powers as a practical matter, to protect herself and her allies. She doesn’t often talk of the event that propelled her into a life of adventuring and a pact with infernal powers: Without warning, a devil appeared to her and offered her power, in exchange for a favor to be named later. In what she still regards as a moment of folly, she accepted. Nightmares of her unknown future haunt her sleep, but she never speaks of them.',
  },
})

export const HumanSection = Content.defineSection('races/human', {
  parent: RacesSection,
  content: {
    name: 'Human',
    description:
      '_Ambitious, driven, pragmatic—a race of heroes, and also a race of villains_\n\nOf all the civilized races, humans are the most adaptable and diverse. Human settlements can be found almost anywhere, and human morals, customs, and interests vary greatly.\n\nPlay a human if you want . . .\n\n- to be a decisive, resourceful hero with enough determination to face any challenge.\n- to have the most versatility and flexibility of any race.\n- to be able to excel at any class you choose.',
  },
})

export const HumanRaceSection = Content.linkEntity(HumanSection, Race.Human)

export const HumanPhysicalQualitiesSection = Content.defineSection('races/human-physical-qualities', {
  parent: HumanSection,
  content: {
    name: 'Physical Qualities',
    description:
      'Humans come in a wide variety of heights, weights, and colors. Some humans have black or dark brown skin, others are as pale as snow, and they cover the whole range of tans and browns in between. Their hair is black, brown, or a range of blonds and reds. Their eyes are most often brown, blue, or hazel.\n\nHuman attire varies wildly, depending on the environment and society in which they live. Their clothing can be simple, ostentatious, or anything in between. It’s not unusual for several distinct human cultures to live side by side in a particular area and mingle, so human armor, weaponry, and other items incorporate a variety of designs and motifs.\n\nHumans average life spans of about 75 years, though some venerable members of the race live as long as 90 or more years.',
  },
})

export const PlayingAHumanSection = Content.defineSection('races/playing-a-human', {
  parent: HumanSection,
  content: {
    name: 'Playing a Human',
    description:
      'Humans are decisive and sometimes rash. They explore the darkest reaches of the world in search of knowledge and power. They hurl themselves into danger, dealing with consequences as they arise. They act first and ponder later, trusting their will to prevail and their native resourcefulness to see them through perilous situations.\n\nHumans always look to the horizon, seeking to expand their influence and their territory. They chase power and want to change the world, for good or for ill. Their settlements are among the brightest lights in a dark and untamed world, and humans constantly seek to explore new lands and settle new frontiers.\n\nTheir self-reliance and bravery inclines humans toward martial classes such as [fighter](trait:fighter), [warlord](trait:warlord), and [rogue](trait:rogue). They often prefer to find hidden reserves of strength in themselves rather than trust to the magic of [wizards](trait:wizard) or [clerics](trait:cleric).\n\nThat said, humans tend to be a pious race, worshiping the whole pantheon of gods. Their myths name no god as the creator of the race. Some tales say the gods worked together to create them, infusing them with the best qualities of each race that had come before. Other tales say that humans were the creation of a god whose name is no longer known, a god killed in the war against the primordials or perhaps assassinated by another deity (Asmodeus and Zehir are often accused of the deed).\n\nHumans are tolerant of other races, different beliefs, and foreign cultures. Most human settlements are diverse places where different races live together in relative peace. The human empire of Nerath, the last great world power, united many different peoples. Most of the human towns that have survived the empire’s fall are fortified bastions against the encroaching darkness. When elven forests are razed or dwarven mines overrun, the survivors often flee to the nearest human town for protection.\n\nDespite the far reach and power of Nerath, humans in the present day are a scattered and divided people. Dozens of small kingdoms, fiefdoms, and free cities have arisen from Nerath’s ruins, and many of these realms are petty, weak, or isolated. Tensions and misunderstandings among them often precipitate skirmishes, espionage, betrayal, and even open warfare.\n\n**Human Characteristics:** Adaptable, ambitious, bold, corruptible, creative, driven, hardy, pragmatic, resourceful, territorial, tolerant\n\n**Male Names:** Alain, Alek, Benn, Brandis, Donn, Drew, Erik, Gregg, Jonn, Kris, Marc, Mikal, Pieter, Regdar, Quinn, Samm, Thom, Wil\n\n**Female Names:** Ana, Cassi, Eliza, Gwenn, Jenn, Kat, Keira, Luusi, Mari, Mika, Miri, Stasi, Shawna, Zanne',
  },
})

export const HumanAdventurersSection = Content.defineSection('races/human-adventurers', {
  parent: HumanSection,
  content: {
    name: 'Human Adventurers',
    description:
      'Three sample human adventurers are described below.\n\nBrandis is a human [fighter](trait:fighter), a mercenary who has sold his sword arm to every baronet, duke, and princeling from the mountains to the coast. His armor is practical, lacking any decoration, and his sword is intended only for battle, not as a mark of prestige. He prays daily to [the Raven Queen](trait:deity/raven-queen)—not out of devotion but because he knows that death is inevitable and he hopes to postpone it as long as possible. He began adventuring after a mission ended in disaster. His soldier companions were all dead, and he was captured by hobgoblins and held for a ransom that no one cared enough to pay. He joined the band of adventurers that slew the hobgoblins. He has since found adventuring both more lucrative and more satisfying than his previous life.\n\nMari is a human [ranger](trait:ranger), her eyes always on the horizon. She is driven by a passion for exploration and a love of new places. She dreams of ultimately establishing a new settlement in a place where people can live in peace and freedom. She prays to [Avandra](trait:deity/avandra) for protection in her wandering and to [Erathis](trait:deity/erathis) for help in achieving her dream. She is aware of her life’s contradiction: She is a creature of the wilderness, but her dream is to tame and cultivate it. A part of her wonders whether she would be able to settle in the village she dreams of founding.\n\nThom is a human [wizard](trait:wizard), and his one desire is for power. He adventures in search of arcane lore and ancient artifacts that will increase his mastery of magic. He prays to [Ioun](trait:deity/ioun) because he sees knowledge as the key to power, but he is also drawn to Vecna, wondering what power the god of secrets might offer him in exchange for his devotion.',
  },
})

export const TieflingSection = Content.defineSection('races/tiefling', {
  parent: RacesSection,
  content: {
    name: 'Tiefling',
    description:
      '_Heirs of a shattered empire who live in the shadows and do not fear the dark_\n\nHeirs to an ancient, infernal bloodline, tieflings have no realms of their own but instead live within human kingdoms and cities. They are descended from human nobles who bargained with dark powers, and long ago their empire subjugated half the world. But the empire was cast down into ruin, and tieflings were left to make their own way in a world that often fears and resents them.\n\nPlay a tiefling if you want . . .\n\n- to be a hero who has a dark side to overcome.\n- to be good at tricking, intimidating, or persuading others to do your will.\n- to be a member of a race that favors the [warlock](trait:warlock), [warlord](trait:warlord), and [rogue](trait:rogue) classes.',
  },
})

export const TieflingRacialTraitsSection = Content.defineSection('races/tiefling-racial-traits', {
  parent: TieflingSection,
  content: {
    name: 'Racial Traits',
    description:
      '**Average Height:** 5´ 6˝–6´ 2˝\n\n**Average Weight:** 140–230 lb.\n\n**Ability Scores:** +2 [Intelligence](characteristic:intelligence), +2 [Charisma](characteristic:charisma)\n\n**Size:** Medium\n\n**Speed:** 6 squares\n\n**Vision:** Low-light\n\n**Languages:** Common, choice of one other\n\n**Skill Bonuses:** +2 [Bluff](characteristic:skill/bluff), +2 [Stealth](characteristic:skill/stealth)\n\n**Bloodhunt:** You gain a +1 racial bonus to attack rolls against [bloodied](characteristic:bloodied) foes.\n\n**Fire Resistance:** You have resist fire 5 + one-half your level.\n\n**Infernal Wrath:** You can use _infernal wrath_ as an encounter power.',
  },
})

export const InfernalWrathSection = Content.defineSection('races/infernal-wrath', {
  parent: TieflingRacialTraitsSection,
  content: {
    name: 'Infernal Wrath',
    description:
      '**Tiefling Racial Power**\n\n_You call upon your furious nature to improve your odds of harming your foe._\n\n**Encounter**\n\n**[Minor Action](action-type:minor-action)** · **Personal**\n\n**Effect:** You can channel your fury to gain a +1 power bonus to your next attack roll against an enemy that hit you since your last turn. If your attack hits and deals damage, add your [Charisma modifier](characteristic:charisma-modifier) as extra damage.',
  },
})

export const TieflingPhysicalQualitiesSection = Content.defineSection('races/tiefling-physical-qualities', {
  parent: TieflingSection,
  content: {
    name: 'Physical Qualities',
    description:
      'Tieflings’ appearance testifies to their infernal bloodline. They have large horns; thick, nonprehensile tails that range in length from 4 to 5 feet; sharply pointed teeth; and eyes that are solid orbs of black, red, white, silver, or gold. Their skin color covers the whole human range and also extends to reds, from a ruddy tan to a brick red. Their hair, cascading down from behind their horns, is as likely to be dark blue, red, or purple as more common human colors.\n\nTieflings favor dark colors and reds, leathers and glossy furs, small spikes and buckles. Tiefling-crafted arms and armor often have an archaic style, harkening back to the glory of their long-vanished empire.',
  },
})

export const PlayingATieflingSection = Content.defineSection('races/playing-a-tiefling', {
  parent: TieflingSection,
  content: {
    name: 'Playing a Tiefling',
    description:
      'Hundreds of years ago, the leaders of the human empire of Bael Turath made pacts with devils to solidify their hold over its enormous territory. Those humans became the first tieflings, and they governed their empire in the name of their infernal masters. In time, Bael Turath came into conflict with Arkhosia, the ancient empire of the dragonborn, and decades of warfare left both empires in ruins. Bael Turath’s grand capital was thrown down in ruin.\n\nTieflings are the heirs of the surviving noble dynasties that ruled the empire. Their bloodline is tainted by their diabolical connections, passing to their descendants through all generations. In many ways, they are human; they can have children with humans, for example, but their offspring are always tieflings.\n\nCenturies of other races’ distrust and outright hatred have made tieflings self-reliant and often too willing to live up to the stereotypes imposed on them. As a race without a homeland, tieflings know that they have to make their own way in the world and that they have to be strong to survive, and they are not quick to trust anyone who claims to be a friend. However, when a tiefling’s companions demonstrate that they trust him or her, the tiefling quickly learns to extend the same trust to them. And once a tiefling gives someone trust and loyalty, the tiefling is a firm friend and ally for life.\n\nAlthough the nobles of Bael Turath subjugated themselves to devils, most present-day tieflings give little thought to gods or patrons, preferring to look out for themselves. Therefore, they do not often follow the path of the divine; tiefling [clerics](trait:cleric) or [paladins](trait:paladin) are rare.\n\nTieflings are not numerous. Sometimes a tiefling merchant clan that is descended from a Bael Turath dynasty settles as a group in a land where wealth can purchase safety and comfort. But most tieflings are born outside such hidden dynasties and grow up in the roughest quarters of human cities and towns. These tieflings often become swindlers, thieves, or crime lords, who carve out a niche for themselves amid the squalor of their surroundings.\n\n**Tiefling Characteristics:** Cunning, disquieting, imposing, mysterious, proud, rebellious, self-reliant, sinister, sly, unconventional\n\n**Male Names:** Akmenos, Amnon, Barakas, Damakos, Ekemon, Iados, Kairon, Leucis, Melech, Morthos, Pelaios, Skamos, Therai\n\n**Female Names:** Akta, Bryseis, Damaia, Ea, Kallista, Lerissa, Makaria, Nemeia, Orianna, Phelaia, Rieta\n\nSome young tieflings, striving to find a place in the world, choose a name that signifies a concept and then try to embody the concept. For some, the chosen name is a noble quest. For others, it’s a grim destiny.\n\n**Modern Names:** Art, Carrion, Chant, Despair, Fear, Gladness, Hope, Ideal, Music, Nowhere, Open, Poetry, Quest, Random, Reverence, Sorrow, Torment, Weary',
  },
})

export const TieflingAdventurersSection = Content.defineSection('races/tiefling-adventurers', {
  parent: TieflingSection,
  content: {
    name: 'Tiefling Adventurers',
    description:
      'Three sample tiefling adventurers are described below.\n\nAkmenos is a tiefling [warlock](trait:warlock) torn between good and evil. He longs to fit into the human society in which he lives and would like to call himself genuinely good. At the same time, he fears that his soul is irretrievably tainted by the touch of evil—both the evil in his blood and the sinister nature of his infernal pact. He feels as if he is on a tightrope between good and evil and might eventually fall either way. His companions recognize the good in his heart and trust him, and that trust has been enough on some days to keep him from sliding into evil. His life is tormented, and though he believes he is called to a great destiny, he is not sure whether he will become a hero or a villain.\n\nKallista is a tiefling [warlord](trait:warlord) who prays daily that [Bahamut](trait:deity/bahamut) will help her keep her commitment to live justly and honorably. She has no love for Bahamut’s priests and temples, but she feels a personal connection to the Platinum Dragon, which inspires her to acts of nobility and sacrifice. She leads a group of adventurers in strikes against evil forces but dreams of one day leading an army under Bahamut’s banner. In his name, she struggles to keep her violent temper and cruel streak under tight control.\n\nRandom is a tiefling [rogue](trait:rogue), a native of the streets and alleys of a human city and no stranger to poverty, mistrust, or prejudice. As far as he’s concerned, good and evil are a matter for priests and philosophers to discuss in their marble temples and universities. The reality of life on the street is survival, and he’s willing to do what is necessary to survive. As part of an adventuring group, he has had his first taste of wealth and discovered that he likes it, but he hasn’t forgotten his roots. He has also had his first taste of trust and friendship, which are growing on him as well.',
  },
})

export const RacesContent: Array<ContentSection> = [
  RacesSection,
  RacialTraitsSection,
  DragonbornSection,
  DragonbornRacialTraitsSection,
  DragonBreathSection,
  DragonbornPhysicalQualitiesSection,
  PlayingADragonbornSection,
  DragonbornAdventurersSection,
  DwarfSection,
  DwarfRaceSection,
  CastIronStomachSection,
  DwarvenResilienceSection,
  DwarvenWeaponProficiencySection,
  EncumberedSpeedSection,
  StandYourGroundSection,
  DwarfPhysicalQualitiesSection,
  PlayingADwarfSection,
  DwarfAdventurersSection,
  EladrinSection,
  EladrinRacialTraitsSection,
  FeyStepSection,
  EladrinPhysicalQualitiesSection,
  PlayingAnEladrinSection,
  EladrinAdventurersSection,
  ElfSection,
  ElfRacialTraitsSection,
  ElvenAccuracySection,
  ElfPhysicalQualitiesSection,
  PlayingAnElfSection,
  ElfAdventurersSection,
  HalfElfSection,
  HalfElfRacialTraitsSection,
  HalfElfPhysicalQualitiesSection,
  PlayingAHalfElfSection,
  HalfElfAdventurersSection,
  HalflingSection,
  HalflingRacialTraitsSection,
  SecondChanceSection,
  BeingSmallSection,
  HalflingPhysicalQualitiesSection,
  PlayingAHalflingSection,
  HalflingAdventurersSection,
  HumanSection,
  HumanRaceSection,
  HumanPhysicalQualitiesSection,
  PlayingAHumanSection,
  HumanAdventurersSection,
  TieflingSection,
  TieflingRacialTraitsSection,
  InfernalWrathSection,
  TieflingPhysicalQualitiesSection,
  PlayingATieflingSection,
  TieflingAdventurersSection,
]
