import { CharacterOptions, Traits } from '@simulacrum/ruleset'
import { Deity } from '@simulacrum/ruleset-dnd4e/archetype'

export const SelectDeity = CharacterOptions.selectTraitOption('deity/select', {
  name: 'Deity',
  description:
    'Clerics and paladins more often serve a single deity, championing that god’s particular cause in the world. Steer clear of choosing an evil or chaotic evil deity unless you have permission from your DM to choose one.',
  filter: { archetypes: [Deity] },
})

export const Avandra = Traits.defineTrait('deity/avandra', {
  name: 'Avandra',
  description:
    '**Good** · Change, luck, trade, travel\n\nThe god of change, Avandra delights in freedom, trade, travel, adventure, and the frontier. Her temples are few in civilized lands, but her wayside shrines appear throughout the world. Halflings, merchants, and all types of adventurers are drawn to her worship, and many people raise a glass in her honor, viewing her as the god of luck. Her commandments are few:\n\n- Luck favors the bold. Take your fate into your own hands, and Avandra smiles upon you.\n- Strike back against those who would rob you of your freedom and urge others to fight for their own liberty.\n- Change is inevitable, but it takes the work of the faithful to ensure that change is for the better.',
  archetypes: [Deity],
  effects: [],
})

export const Bahamut = Traits.defineTrait('deity/bahamut', {
  name: 'Bahamut',
  description:
    '**Lawful Good** · Justice, honor, nobility, protection\n\nCalled the Platinum Dragon, Bahamut is the god of justice, protection, nobility, and honor. Lawful good paladins often revere him, and metallic dragons worship him as the first of their kind. Monarchs are crowned in his name. He commands his followers thus:\n\n- Uphold the highest ideals of honor and justice.\n- Be constantly vigilant against evil and oppose it on all fronts.\n- Protect the weak, liberate the oppressed, and defend just order.',
  archetypes: [Deity],
  effects: [],
})

export const Corellon = Traits.defineTrait('deity/corellon', {
  name: 'Corellon',
  description:
    '**Unaligned** · Arcane magic, spring, beauty, the arts\n\nThe god of spring, beauty, and the arts, Corellon is the patron of arcane magic and the fey. He seeded the world with arcane magic and planted the most ancient forests. Artists and musicians worship him, as do those who view their spellcasting as an art, and his shrines can be found throughout the Feywild. He despises Lolth and her priestesses for leading the drow astray. He urges his followers thus:\n\n- Cultivate beauty in all that you do, whether you’re casting a spell, composing a saga, strumming a lute, or practicing the arts of war.\n- Seek out lost magic items, forgotten rituals, and ancient works of art. Corellon might have inspired them in the world’s first days.\n- Thwart the followers of Lolth at every opportunity.',
  archetypes: [Deity],
  effects: [],
})

export const Erathis = Traits.defineTrait('deity/erathis', {
  name: 'Erathis',
  description:
    '**Unaligned** · Civilization, invention, laws\n\nErathis is the god of civilization. She is the muse of great invention, founder of cities, and author of laws. Rulers, judges, pioneers, and devoted citizens revere her, and her temples hold prominent places in most of the world’s major cities. Her laws are many, but their purpose is straightforward:\n\n- Work with others to achieve your goals. Community and order are always stronger than the disjointed efforts of lone individuals.\n- Tame the wilderness to make it fit for habitation, and defend the light of civilization against the encroaching darkness.\n- Seek out new ideas, new inventions, new lands to inhabit, new wilderness to conquer. Build machines, build cities, build empires.',
  archetypes: [Deity],
  effects: [],
})

export const Ioun = Traits.defineTrait('deity/ioun', {
  name: 'Ioun',
  description:
    '**Unaligned** · Knowledge, prophecy, skill\n\nIoun is the god of knowledge, skill, and prophecy. Sages, seers, and tacticians revere her, as do all who live by their knowledge and mental power. Corellon is the patron of arcane magic, but Ioun is the patron of its study. Libraries and wizard academies are built in her name. Her commands are also teachings:\n\n- Seek the perfection of your mind by bringing reason, perception, and emotion into balance with one another.\n- Accumulate, preserve, and distribute knowledge in all forms. Pursue education, build libraries, and seek out lost and ancient lore.\n- Be watchful at all times for the followers of Vecna, who seek to control knowledge and keep secrets. Oppose their schemes, unmask their secrets, and blind them with the light of truth and reason.',
  archetypes: [Deity],
  effects: [],
})

export const Kord = Traits.defineTrait('deity/kord', {
  name: 'Kord',
  description:
    '**Unaligned** · Storms, strength, battle\n\nKord is the storm god and the lord of battle. He revels in strength, battlefield prowess, and thunder. Fighters and athletes revere him. He is a mercurial god, unbridled and wild, who summons storms over land and sea; those who hope for better weather appease him with prayers and spirited toasts. He gives few commands:\n\n- Be strong, but do not use your strength for wanton destruction.\n- Be brave and scorn cowardice in any form.\n- Prove your might in battle to win glory and renown.',
  archetypes: [Deity],
  effects: [],
})

export const Melora = Traits.defineTrait('deity/melora', {
  name: 'Melora',
  description:
    '**Unaligned** · Wilderness, sea\n\nMelora is the god of the wilderness and the sea. She is both the wild beast and the peaceful forest, the raging whirlpool and the quiet desert. Rangers, hunters, and elves revere her, and sailors make offerings to her before beginning their voyages. Her strictures are these:\n\n- Protect the wild places of the world from destruction and overuse. Oppose the rampant spread of cities and empires.\n- Hunt aberrant monsters and other abominations of nature.\n- Do not fear or condemn the savagery of nature. Live in harmony with the wild.',
  archetypes: [Deity],
  effects: [],
})

export const Moradin = Traits.defineTrait('deity/moradin', {
  name: 'Moradin',
  description:
    '**Lawful Good** · Creation, artisans, family\n\nMoradin is the god of creation and patron of artisans, especially miners and smiths. He carved the mountains from primordial earth and is the guardian and protector of the hearth and the family. Dwarves from all walks of life follow him. He demands these behaviors of his followers:\n\n- Meet adversity with stoicism and tenacity.\n- Demonstrate loyalty to your family, your clan, your leaders, and your people.\n- Strive to make a mark on the world, a lasting legacy. To make something that lasts is the highest good, whether you are a smith working at a forge or a ruler building a dynasty.',
  archetypes: [Deity],
  effects: [],
})

export const Pelor = Traits.defineTrait('deity/pelor', {
  name: 'Pelor',
  description:
    '**Good** · Sun, summer, agriculture, time\n\nGod of the sun and summer, Pelor is the keeper of time. He supports those in need and opposes all that is evil. As the lord of agriculture and the bountiful harvest, he is the deity most commonly worshiped by ordinary humans, and his priests are well received wherever they go. Paladins and rangers are found among his worshipers. He directs his followers thus:\n\n- Alleviate suffering wherever you find it.\n- Bring Pelor’s light into places of darkness, showing kindness, mercy, and compassion.\n- Be watchful against evil.',
  archetypes: [Deity],
  effects: [],
})

export const RavenQueen = Traits.defineTrait('deity/raven-queen', {
  name: 'The Raven Queen',
  description:
    '**Unaligned** · Death, fate, winter\n\nThe name of the god of death is long forgotten, but she is called the Raven Queen. She is the spinner of fate and the patron of winter. She marks the end of each mortal life, and mourners call upon her during funeral rites, in the hope that she will guard the departed from the curse of undeath. She expects her followers to abide by these commandments:\n\n- Hold no pity for those who suffer and die, for death is the natural end of life.\n- Bring down the proud who try to cast off the chains of fate. As the instrument of the Raven Queen, you must punish hubris where you find it.\n- Watch for the cults of Orcus and stamp them out whenever they arise. The Demon Prince of the Undead seeks to claim the Raven Queen’s throne.',
  archetypes: [Deity],
  effects: [],
})

export const Sehanine = Traits.defineTrait('deity/sehanine', {
  name: 'Sehanine',
  description:
    '**Unaligned** · Trickery, moon, love, autumn\n\nGod of the moon and autumn, Sehanine is the patron of trickery and illusions. She has close ties to Corellon and Melora and is a favorite deity among elves and halflings. She is also the god of love, who sends shadows to cloak lovers’ trysts. Scouts and thieves ask for her blessing on their work. Her teachings are simple:\n\n- Follow your goals and seek your own destiny.\n- Keep to the shadows, avoiding the blazing light of zealous good and the utter darkness of evil.\n- Seek new horizons and new experiences, and let nothing tie you down.',
  archetypes: [Deity],
  effects: [],
})

export const AllDeities = [Avandra, Bahamut, Corellon, Erathis, Ioun, Kord, Melora, Moradin, Pelor, RavenQueen, Sehanine]
