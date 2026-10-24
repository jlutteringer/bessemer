import { Content } from '@simulacrum/ruleset'
import * as AncestryDwarf from '@simulacrum/ruleset-pf2e/ancestry/ancestry-dwarf'
import * as AncestryElf from '@simulacrum/ruleset-pf2e/ancestry/ancestry-elf'
import * as AncestryGnome from '@simulacrum/ruleset-pf2e/ancestry/ancestry-gnome'
import * as AncestryGoblin from '@simulacrum/ruleset-pf2e/ancestry/ancestry-goblin'
import * as AncestryHalfling from '@simulacrum/ruleset-pf2e/ancestry/ancestry-halfling'
import * as AncestryHuman from '@simulacrum/ruleset-pf2e/ancestry/ancestry-human'
import * as AncestryLeshy from '@simulacrum/ruleset-pf2e/ancestry/ancestry-leshy'
import * as AncestryOrc from '@simulacrum/ruleset-pf2e/ancestry/ancestry-orc'
import * as VersatileHeritage from '@simulacrum/ruleset-pf2e/ancestry/versatile-heritage'
import * as Background from '@simulacrum/ruleset-pf2e/background'

export const AncestriesBackgroundsSection = Content.defineSection('ancestries-and-backgrounds', {
  content: {
    name: 'Ancestries & Backgrounds',
    description:
      "Your character's ancestry determines which people they call their own, whether it's diverse and ambitious humans, insular but vivacious elves, traditionalist and family-focused dwarves, or any of the other folk who call Golarion home. A character's ancestry and their experiences prior to their life as an adventurer—represented by a background—might be key parts of their identity, shape how they see the world, and help them find their place in it.\n\nA character has one ancestry and one background, both of which you select during character creation. You'll also select a number of languages for your character. Once chosen, your ancestry and background can't be changed.\n\nThis chapter is divided into four parts:\n\n- **Ancestries** express the culture your character hails from. Within ancestries are heritages—subgroups that have unique characteristics. An ancestry provides attribute boosts (and perhaps attribute flaws), [Hit Points](characteristic:hit-points),ancestry feats, and sometimes additional abilities.\n\n- **Versatile heritages**, starting on page 74, are heritage options available to all ancestries for extra customization, such as a character who has a mixed ancestry or one with a more unique or unusual origin.\n\n- **Backgrounds**, starting on page 84, describe training or environments your character experienced before becoming an adventurer. Your character's background provides attribute boosts, skill training, and a skill feat.\n\n- **Languages**, starting on page 89, let your character communicate with the wonderful and weird people and creatures of the world.",
  },
})

export const AncestryEntriesSection = Content.defineSection('ancestries-and-backgrounds/ancestry-entries', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Ancestry Entries',
    description: 'Each entry includes details about the ancestry and presents the rules elements described below',
  },
})

export const HitPointsSection = Content.defineSection('ancestries-and-backgrounds/hit-points', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Hit Points',
    description:
      'This tells you how many [Hit Points](characteristic:hit-points) your character gains from their ancestry at 1st level. You’ll add the Hit Points from your character’s class (including their [Constitution modifier](characteristic:constitution)) to this number. For more on calculating Hit Points, see [Step](content:playing-the-game/step) 7: Record Class Details, on page 24.',
  },
})

export const SizeSection = Content.defineSection('ancestries-and-backgrounds/size', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Size',
    description:
      'This tells you the physical size of members of the ancestry. Medium corresponds roughly to the height and weight range of a human adult, and Small is roughly half that.',
  },
})

export const SpeedSection = Content.defineSection('ancestries-and-backgrounds/speed', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Speed',
    description:
      'This entry lists how far a member of the ancestry can move each time they spend an action (such as [Stride](content:playing-the-game/stride)) to do so.',
  },
})

export const AttributeBoostsFlawsSection = Content.defineSection('ancestries-and-backgrounds/attribute-boosts-flaws', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Attribute Boosts & Flaws',
    description:
      'When creating a character of this ancestry, you apply attribute boosts to increases some attribute modifiers, and possibly attribute flaws to decrease others (depending on the ancestry). For more about attribute boosts and flaws, see page 19.\n\n**Alternate Ancestry Boosts**: Because of the wide variety of people within any ancestry, you can always choose to take two free boosts to represent your character, even if the ancestry normally has three boosts and a flaw.',
  },
})

export const LanguagesSection = Content.defineSection('ancestries-and-backgrounds/languages', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Languages',
    description:
      'This tells you the languages that members of the ancestry speak at 1st level. If your [Intelligence modifier](characteristic:intelligence) is +1 or higher, you can select more languages from a list given here. More about languages can be found [here](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages).',
  },
})

export const TraitsSection = Content.defineSection('ancestries-and-backgrounds/traits', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Traits',
    description:
      "The traits for this book's ancestries have no rules benefit, but are important for determining how spells, effects, and other aspects of the game interact with your character.",
  },
})

export const SpecialAbilitiesSection = Content.defineSection('ancestries-and-backgrounds/special-abilities', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Special Abilities',
    description:
      'Any other entries in the sidebar represent abilities, senses, and other qualities all members of the ancestry manifest. These are omitted for ancestries with no special rules.',
  },
})

export const HeritagesSection = Content.defineSection('ancestries-and-backgrounds/heritages', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Heritages',
    description:
      'You select a heritage at 1st level to reflect abilities passed down to you from your ancestors or common among those of your ancestry in the environment where you were born or grew up. You have only one heritage and can’t change it later. A heritage is not the same as a culture or ethnicity, though some cultures or ethnicities might have more or fewer members from a particular heritage.',
  },
})

export const AncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/ancestry-feats', {
  parent: AncestryEntriesSection,
  content: {
    name: 'Ancestry Feats',
    description:
      'This section presents ancestry feats, which allow you to customize your character. You gain your first ancestry feat at 1st level, and you gain another at 5th level, 9th level, 13th level, and 17th level, as indicated in the class advancement table in the descriptions of each class.\n\nAncestry feats are organized by level. As a starting character, you can choose from only 1st-level ancestry feats, but later choices can be made from any feat of your level or lower. These feats also sometimes list prerequisites—requirements that your character must fulfill to select that feat.',
  },
})

export const DwarvesSection = Content.defineSection('ancestries-and-backgrounds/dwarves', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Dwarves',
    description:
      "_Dwarves are a short, stocky people who are often stubborn, fierce, and devoted._\n\nDwarves have a well-earned reputation as a stoic and stern people, but they also have an unbridled zeal and deeply value artisanship. To a stranger, they can seem untrusting and clannish, but to their friends and family, they are warm and caring. While trust from a dwarf is hard-won, once gained it is as strong as iron.\n\nIf you want to play a character who is as hard as nails, a stubborn and unrelenting adventurer, with a mix of rugged toughness and deep wisdom, you should play a dwarf.\n\n**You Might...**\n\n- Strive to uphold your personal honor and refuse to back down\n\n- Appreciate quality craftsmanship in all forms and insist upon it for all your gear.\n\n**Others Probably...**\n\n- See you as stubborn, though whether this is an asset or a detriment changes from moment to moment.\n\n- Recognize the deep connection you have with your family, heritage, and friends.\n\n**Physical Description**\n\nDwarves are short and stocky, standing about a foot shorter than most humans. They have wide, compact bodies and burly frames. Dwarves of all genders pride themselves on the length of their hair and beards, which they often braid into intricate patterns, some of which represent specific clans. A long beard is a sign of maturity and honor among many dwarf clans.\n\nDwarves typically reach physical adulthood around the age of 25, though their traditionalist culture places more value on completing coming-of-age ceremonies unique to each clan than reaching a certain age. A typical dwarf can live to around 350 years old.\n\n**Society**\n\nThough the ancient dwarven empire fell long ago, overwhelmed by orc and goblinoid enemies, dwarves today retain many of the qualities that once propelled them to greatness: fierceness, gumption, and stubbornness in their endeavors. Dwarves live within mountain Sky Citadels dotted over the surface, which can create vast cultural divides between dwarf clans. Yet nearly all dwarven peoples share a passion for stonework, metalwork, and family.\n\nFew dwarves are seen without their clan dagger strapped to their belt. This dagger is forged just before a dwarf's birth and is distinctive to their clan. Dwarves honor their children with names of ancestors or dwarven heroes. When introducing themselves, dwarves tend to list their family and clan, plus any number of other familial connections and honorifics.\n\n**Alignment and Religion**\n\nDwarves tend to value honor and closely follow the traditions of their clans and kingdoms. They have a strong sense of friendship and justice, though they are often very particular about who they consider a friend. They work hard and play harder—especially when strong ale is involved. Torag, god of dwarvenkind, is dwarves' primary deity, though worship of Torag's family members is also common.\n\n**Popular Edicts** create art with utility, guard your community against those who would harm it, keep your clan dagger close\n**Popular Anathema** leave an activity or promise uncompleted, forsake your family\n\n**Names**\n\nAgna, Bodill, Edrukk, Grunyar, Ingra, Kotri, Morgrym, Rogar, Torra, Yangrit",
  },
})

export const DwarfSection = Content.linkEntity(DwarvesSection, AncestryDwarf.Dwarf)

export const DwarfHeritagesSection = Content.defineSection('ancestries-and-backgrounds/dwarf-heritages', {
  parent: DwarfSection,
  content: { name: 'Dwarf Heritages' },
})

export const DeathWardenDwarfSection = Content.linkEntity(DwarfHeritagesSection, AncestryDwarf.DeathWardenDwarf)

export const ForgeDwarfSection = Content.linkEntity(DwarfHeritagesSection, AncestryDwarf.ForgeDwarf)

export const RockDwarfSection = Content.linkEntity(DwarfHeritagesSection, AncestryDwarf.RockDwarf)

export const StrongBloodedDwarfSection = Content.linkEntity(DwarfHeritagesSection, AncestryDwarf.StrongBloodedDwarf)

export const AncientBloodedDwarfSection = Content.linkEntity(DwarfHeritagesSection, AncestryDwarf.AncientBloodedDwarf)

export const DwarfAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/dwarf-ancestry-feats', {
  parent: DwarfSection,
  content: { name: 'Dwarf Ancestry Feats' },
})

export const DwarvenDoughtinessSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.DwarvenDoughtiness)

export const DwarvenLoreSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.DwarvenLore)

export const DwarvenWeaponFamiliaritySection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.DwarvenWeaponFamiliarity)

export const MountainStrategySection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.MountainStrategy)

export const RockRunnerSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.RockRunner)

export const StonemasonsEyeSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.StonemasonsEye)

export const UnburdenedIronSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.UnburdenedIron)

export const BoulderRollSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.BoulderRoll)

export const DefyTheDarknessSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.DefyTheDarkness)

export const DwarvenReinforcementSection = Content.linkEntity(DwarfAncestryFeatsSection, AncestryDwarf.DwarvenReinforcement)

export const ElvesSection = Content.defineSection('ancestries-and-backgrounds/elves', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Elves',
    description:
      "_Elves are a tall, long-lived people with a strong tradition of art and magic._\n\nAs an ancient people, elves have seen great change and have the perspective that can come only from watching the arc of history. After leaving Golarion in ancient times, they returned to a changed land, and they still struggle to reclaim their ancestral homes. Elves value kindness, intellect, and beauty, with many elves striving to improve their manners, appearance, and culture. Their studies delve into a level of detail that most shorter-lived peoples find excessive or inefficient. Elves are often rather private people, steeped in the secrets of their groves and kinship groups. They're slow to build friendships outside their kinsfolk, as elves who spend their lives among shorter-lived peoples often become morose after watching generations of companions age and die. These elves are known as Forlorn among their fellow elves.\n\nIf you want a character who is magical, mystical, and mysterious, you should play an elf.\n\n**You Might...**\n\n- Carefully curate your relationships with people with shorter lifespans.\n\n- Adopt specialized or obscure interests simply for the sake of mastering them.\n\n**Others Probably...**\n\n- Focus on your appearance, either admiring your grace or treating you as if you're physically fragile.\n\n- Worry that you privately look down on them, or feel like you're condescending and aloof.\n\n**Physical Description**\n\nWhile generally taller than humans, elves possess a fragile grace, accentuated by long features and sharply pointed ears. Their eyes are wide and rounded, featuring large and often vibrantly colored pupils that make up the entire visible portion of the eye. These pupils give them an alien look and allow them to see sharply even in very little light.\n\nElves gradually adapt to their environment and their companions, and they often take on physical traits reflecting their surroundings. An elf who has dwelled in primeval forests for centuries, for example, might exhibit verdant hair and gnarled fingers, while one who's lived in a desert might have golden pupils and skin. Elves reach physical adulthood around the age of 20, though they aren't considered to be fully emotionally mature by other elves until closer to the passing of their first century. A typical elf can live to around 600 years old.\n\n**Society**\n\nThe inborn patience and intellectual curiosity of elves make them excellent sages, philosophers, and wizards, and their societies are built upon their inherent sense of wonder and knowledge.\n\nElves hold deeply seated ideals of individualism, allowing each elf to explore multiple occupations before alighting on a particular pursuit or passion that suits her best. Elves bear notorious grudges against rivals, which elves call ‘_ilduliel_,' but these antagonistic relationships can sometimes blossom into friendships over time. An elf keeps their personal name secret among their family, while giving a nickname when meeting other people. This nickname can change over time, due to events in the elf's life or even on a whim. A single elf might be known by many names by associates of different ages and regions.\n\nElven names consist of multiple syllables and are meant to flow lyrically—at least in the Elven tongue.\n\n**Alignment and Religion**\n\nElves are often emotional and capricious, yet they hold high ideals close to their hearts. They prefer deities who share their love of all things mystic and artistic. Desna and Shelyn are particular favorites, the former for her sense of wonder and the latter for her appreciation of artistry. Calistria is the most notorious of elven deities, as she represents many of the elven ideals taken to the extreme.\n\n**Popular Edicts** find beauty in nature and art, explore things others would keep hidden, demonstrate superiority to your rival\n**Popular Anathema** abandon your own path, force another creature to do something\n\n**Names**\n\nAerel, Amrunelara, Caladrel, Dardlara, Faunra, Heldalel, Jathal, Lanliss, Oparal, Seldlon, Soumral, Talathel, Tessara, Variel, Yalandlara, Zordlon",
  },
})

export const ElfSection = Content.linkEntity(ElvesSection, AncestryElf.Elf)

export const ElfHeritagesSection = Content.defineSection('ancestries-and-backgrounds/elf-heritages', {
  parent: ElfSection,
  content: { name: 'Elf Heritages' },
})

export const AncientElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.AncientElf)

export const ArcticElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.ArcticElf)

export const CavernElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.CavernElf)

export const SeerElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.SeerElf)

export const WhisperElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.WhisperElf)

export const WoodlandElfSection = Content.linkEntity(ElfHeritagesSection, AncestryElf.WoodlandElf)

export const ElfAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/elf-ancestry-feats', {
  parent: ElfSection,
  content: { name: 'Elf Ancestry Feats' },
})

export const AncestralLongevitySection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.AncestralLongevity)

export const ElvenLoreSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.ElvenLore)

export const ElvenWeaponFamiliaritySection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.ElvenWeaponFamiliarity)

export const ForlornSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.Forlorn)

export const NimbleElfSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.NimbleElf)

export const OtherworldlyMagicSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.OtherworldlyMagic)

export const UnwaveringMienSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.UnwaveringMien)

export const AgelessPatienceSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.AgelessPatience)

export const AncestralSuspicionSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.AncestralSuspicion)

export const MartialExperienceSection = Content.linkEntity(ElfAncestryFeatsSection, AncestryElf.MartialExperience)

export const GnomesSection = Content.defineSection('ancestries-and-backgrounds/gnomes', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Gnomes',
    description:
      "_Gnomes are short and hardy folk, with an unquenchable curiosity and eccentric habits._\n\nLong ago, early gnome ancestors emigrated from the First World, realm of the [fey](content:traits/fey). While it's unclear why the first gnomes wandered to Golarion, this lineage manifests in modern gnomes as bizarre reasoning, eccentricity, obsessive tendencies, and what some see as naivete.\n\nAlways hungry for new experiences, gnomes constantly wander both mentally and physically, attempting to stave off a terrible ailment that threatens all of their people. This affliction, known as the Bleaching, strikes gnomes who fail to dream, innovate, and take in new experiences. The Bleaching slowly drains the color— literally—from gnomes, and it plunges those affected into states of deep depression that eventually claim their lives. Very few gnomes survive this scourge, becoming deeply morose and wise survivors known as bleachlings.\n\nIf you want a character with boundless enthusiasm and an alien, fey outlook on morality and life, you should play a gnome.\n\n**You Might...**\n\n- Embrace learning and hop from one area of study to another without warning.\n\n- Speak, think, and move quickly, and lose patience with those who can't keep up.\n\n**Others Probably...**\n\n- Appreciate your enthusiasm and the energy with which you approach new situations.\n\n- Struggle to understand your motivations or adapt to your rapid changes of direction.\n\n**Physical Description**\n\nMost gnomes stand just over 3 feet in height and weigh little more than a human child. They exhibit a wide range of natural skin, hair, and eye colors. For gnomes that haven't begun the Bleaching, nearly any hair and eye color other than white is possible, with vibrant colors most frequent, while skin tones span a slightly narrower spectrum and tend toward earthy tones and pinkish hues, though occasionally green, black, or pale blue.\n\nGnomes typically reach physical maturity at the age of 18, though many gnomes maintain a childlike curiosity about the world even into adulthood. A gnome can theoretically live to any age if they can stave off the Bleaching indefinitely, but in practice gnomes rarely live longer than around 400 years.\n\n**Society**\n\nWhile most gnomes adopt some of the cultural practices of the region in which they live, they tend to pick and choose, adjusting their communities to fit their own fey logic. This often leads to majority gnome communities eventually consisting almost entirely of gnomes, as other people, bewildered by gnomish political decisions, choose to move elsewhere. Gnomes have little culture that they would consider entirely their own. Exceptionally few gnome kingdoms or nations exist on the surface of Golarion, and most gnomes wouldn't know what to do with such a state if they had one.\n\nBy necessity, few gnomes marry for life, instead allowing relationships to run their course before amicably moving on, the better to stave off the Bleaching with new experiences. Though gnome families tend to be small, many gnome communities raise children communally, with fluid family boundaries. Gnome names can get quite complex and polysyllabic. Gnomes rarely concern themselves with how easy their names are to pronounce, and they often go by shorter nicknames. Among gnomes, the shorter the name, the more feminine it's considered to be.\n\n**Alignment and Religion**\n\nThough gnomes are impulsive tricksters with inscrutable motives and confusing methods, many at least attempt to make the world a better place. They are [prone](content:conditions/prone) to fits of powerful emotion and are rarely shy about helping those they believe deserve it. Gnomes most commonly worship deities that value individuality and nature, such as Cayden Cailean, Desna, Gozreh, and Shelyn.\n\n**Popular Edicts** seek new experiences, embrace your inspiration, move from obsession to obsession\n**Popular Anathema** slow down to explain yourself, deprive someone of all stimulation\n\n**Names**\n\nAbroshtor, Bastargre, Besh, Fijit, Halungalom, Krolmnite, Neji, Majet, Pai, Poshment, Queck, Trig, Zarzuket, Zatqualmie",
  },
})

export const GnomeSection = Content.linkEntity(GnomesSection, AncestryGnome.Gnome)

export const GnomeHeritagesSection = Content.defineSection('ancestries-and-backgrounds/gnome-heritages', {
  parent: GnomeSection,
  content: { name: 'Gnome Heritages' },
})

export const ChameleonGnomeSection = Content.linkEntity(GnomeHeritagesSection, AncestryGnome.ChameleonGnome)

export const FeyTouchedGnomeSection = Content.linkEntity(GnomeHeritagesSection, AncestryGnome.FeyTouchedGnome)

export const SensateGnomeSection = Content.linkEntity(GnomeHeritagesSection, AncestryGnome.SensateGnome)

export const UmbralGnomeSection = Content.linkEntity(GnomeHeritagesSection, AncestryGnome.UmbralGnome)

export const WellspringGnomeSection = Content.linkEntity(GnomeHeritagesSection, AncestryGnome.WellspringGnome)

export const GnomeAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/gnome-ancestry-feats', {
  parent: GnomeSection,
  content: { name: 'Gnome Ancestry Feats' },
})

export const AnimalAccompliceSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.AnimalAccomplice)

export const AnimalElocutionistSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.AnimalElocutionist)

export const FeyFellowshipSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.FeyFellowship)

export const FirstWorldMagicSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.FirstWorldMagic)

export const GnomeObsessionSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.GnomeObsession)

export const GnomeWeaponFamiliaritySection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.GnomeWeaponFamiliarity)

export const IllusionSenseSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.IllusionSense)

export const RazzleDazzleSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.RazzleDazzle)

export const EnergizedFontSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.EnergizedFont)

export const ProjectPersonaSection = Content.linkEntity(GnomeAncestryFeatsSection, AncestryGnome.ProjectPersona)

export const GoblinsSection = Content.defineSection('ancestries-and-backgrounds/goblins', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Goblins',
    description:
      "_Goblins are a short, scrappy, energetic people who have spent millennia maligned and feared._\n\nThe convoluted histories other people cling to don't interest goblins. These small folk live in the moment, and they prefer tall tales over factual records. Goblin virtues are about being present, creative, and honest. They strive to lead fulfilled lives, rather than worrying about how their journeys will end. To tell stories, not nitpick the facts. To be small, but dream big. Many goblins enjoy simpler delights like songs, fire, and eating, and hate reading, dogs, and horses. Other goblins might have more complex pursuits, though, such as tinkering with scraps or concocting snacks and explosives from most anything.\n\nIf you want a character who is eccentric, enthusiastic, and fun-loving, you should play a goblin.\n\n**You Might...**\n\n- Strive to prove that you have a place among other civilized peoples, perhaps even to yourself.\n\n- Lighten the heavy emotional burdens others carry (and amuse yourself) with antics and pranks.\n\n**Others Probably...**\n\n- Work to ensure you don't accidentally (or intentionally) set too many things on fire.\n\n- Wonder how you survive given your ancestry's typical gastronomic choices, reckless behavior, and love of fire.\n\n**Physical Description**\n\nGoblins are stumpy humanoids with large bodies, scrawny limbs, and massively oversized heads with large ears and beady red eyes. Their skin ranges from green to gray to blue, and they often bear scars, boils, and rashes. Goblins average 3 feet tall. Most are bald, with little or no body hair. Their jagged teeth fall out and regrow constantly, and their fast metabolism means they eat constantly and nap frequently. Mutations are also more common among goblins than other peoples, and goblins usually view particularly salient mutations as a sign of power or fortune.\n\nGoblins reach adolescence by the age of 3 and adulthood 4 or 5 years later. Goblins can live 50 years or more, but without anyone to protect them from each other or themselves, few live past 20 years of age.\n\n**Society**\n\nGoblins tend to flock to strong leaders, forming small tribes. These tribes rarely number more than a hundred, though the larger a tribe is, the more diligent the leader must be to keep order—a notoriously difficult task. Play and creativity matter more to goblins than productivity or study, and their encampments erupt with songs and laughter.\n\nGoblins bond closely with their allies, fiercely protecting those companions who have protected them or offered a sympathetic ear. Goblins tend to assume for their own protection that members of taller ancestries, which goblins often refer to colloquially as “longshanks,” won't treat them kindly. Learning to trust longshanks is difficult for a goblin, and it's been only in recent years that such a partnership has even been an option. Goblins keep their names simple. A good name should be easy to pronounce, short enough to shout without getting winded, and taste good to say. The namer often picks a word that rhymes with something they like so that writing songs is easier.\n\n**Alignment and Religion**\n\nEven the most well-intentioned goblins have trouble following the rules, meaning goblin adventurers are often unsure whether they're on the right side of the law. Organized worship likewise confounds goblins, and most of them would rather pick their own deities, choosing powerful monsters, natural wonders, or anything else they find fascinating— sometimes even attributing deific status to fellow goblins of note. Goblins who spend time around people of other ancestries might adopt some of their beliefs, though, and many goblin adventurers adopt the worship of Cayden Cailean.\n\n**Popular Edicts** invent songs for every occasion, turn trash into your treasures, solve problems with fire\n**Popular Anathema** trust a dog or horse, learn to read\n\n**Names**\n\nAk, Bokker, Frum, Guzmuk, Krobby, Loohi, Mazmord, Neeka, Omgot, Ranzak, Rickle, Tup, Wakla, Yonk, Zibini",
  },
})

export const GoblinSection = Content.linkEntity(GoblinsSection, AncestryGoblin.Goblin)

export const GoblinHeritagesSection = Content.defineSection('ancestries-and-backgrounds/goblin-heritages', {
  parent: GoblinSection,
  content: { name: 'Goblin Heritages' },
})

export const CharhideGoblinSection = Content.linkEntity(GoblinHeritagesSection, AncestryGoblin.CharhideGoblin)

export const IrongutGoblinSection = Content.linkEntity(GoblinHeritagesSection, AncestryGoblin.IrongutGoblin)

export const RazortoothGoblinSection = Content.linkEntity(GoblinHeritagesSection, AncestryGoblin.RazortoothGoblin)

export const SnowGoblinSection = Content.linkEntity(GoblinHeritagesSection, AncestryGoblin.SnowGoblin)

export const UnbreakableGoblinSection = Content.linkEntity(GoblinHeritagesSection, AncestryGoblin.UnbreakableGoblin)

export const GoblinAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/goblin-ancestry-feats', {
  parent: GoblinSection,
  content: { name: 'Goblin Ancestry Feats' },
})

export const BurnItSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.BurnIt)

export const CityScavengerSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.CityScavenger)

export const GoblinLoreSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.GoblinLore)

export const GoblinScuttleSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.GoblinScuttle)

export const GoblinSongSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.GoblinSong)

export const GoblinWeaponFamiliaritySection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.GoblinWeaponFamiliarity)

export const JunkTinkerSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.JunkTinker)

export const RoughRiderSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.RoughRider)

export const VerySneakySection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.VerySneaky)

export const KneecapSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.Kneecap)

export const LoudSingerSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.LoudSinger)

export const VandalSection = Content.linkEntity(GoblinAncestryFeatsSection, AncestryGoblin.Vandal)

export const HalflingsSection = Content.defineSection('ancestries-and-backgrounds/halflings', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Halflings',
    description:
      "_Halflings are a short, resilient people who exhibit remarkable curiosity and humor._\n\nClaiming no place as their own, halflings control few settlements larger than villages. Instead, they frequently live among humans within larger cities, carving out small communities alongside taller folk. Optimistic, cheerful, and driven by powerful wanderlust, halflings make up for their short stature with an abundance of bravado. At once excitable and easygoing, halflings are the best kind of opportunists, and their passions favor joy over violence. While their curiosity sometimes drives them toward adventure, halflings also carry strong ties to house and home.\n\nIf you want to play a character who must contend with these opposing drives toward adventure and comfort, you should play a halfling.\n\n**You Might...**\n\n- Get along well with a wide variety of people and enjoy meeting new friends.\n\n- Find it difficult to resist indulging your curiosity, even when you know it's going to lead to trouble.\n\n**Others Probably...**\n\n- Appreciate your ability to always find a silver lining or something to laugh about, no matter how dire the situation.\n\n- Think you bring good luck with you.\n\n**Physical Description**\n\nHalflings are short humanoids who look vaguely like smaller humans. They rarely grow to be more than 3 feet in height. Halfling proportions vary, with some looking like shorter adult humans with slightly larger heads and others having proportions closer to those of a human child. Most halflings prefer to walk barefoot rather than wear shoes, and those who do so develop roughly calloused soles on their feet over time. Tufts of thick, often-curly hair warm the tops of their broad, tanned feet. Halfling skin tones tend toward rich, tawny shades like amber or oak, and their hair color ranges from a light golden blond to raven black.\n\nHalflings reach physical adulthood around the age of 20. A typical halfling can live to be around 150 years old.\n\n**Society**\n\nDespite their jovial and friendly nature, halflings don't usually tend to congregate. They have few cultural centers in the Inner Sea region, and they instead tend to weave themselves throughout the societies of the world. Halflings eke out whatever living they can manage, many performing menial labor or holding simple service jobs. Some halflings reject city life, instead turning to the open road and traveling from place to place in search of fortune and fame. These nomadic halflings often travel in small groups, sharing hardships and simple pleasures among close friends and family. Halfling names are usually two to three syllables, with a gentle sound that avoids hard consonants. Preferring their names to sound humble, halflings see overly long or complex names as a sign of arrogance for their people. However, they understand that elves and humans might have longer names to suit their own aesthetics.\n\n**Alignment and Religion**\n\nHalflings are loyal to their friends and their family, but they aren't afraid to do what needs to be done in order to survive. Wherever halflings go, they seamlessly blend into the society they find themselves in, adapting to the culture and beliefs of the predominant ancestry around them and adding their uniquely halfling twists, creating a blend of cultural diffusion that enriches both cultures. Halflings favor gods that either grant luck, like Desna, or encourage guile, like Norgorber, and many appreciate Cayden Cailean's role as a liberator, as well as any religions common among other ancestries around them.\n\n**Popular Edicts** share good meals with friends and strangers alike, stand up to bullies and oppressors, stay beneath the taller folk's notice\n**Popular Anathema** take your luck for granted\n\n**Names**\n\nAnafa, Antal, Bellis, Boram, Etune, Filiu, Jamir, Kaleb, Linna, Marra, Miro, Rillka, Sistra, Sumak, Yamyra",
  },
})

export const HalflingSection = Content.linkEntity(HalflingsSection, AncestryHalfling.Halfling)

export const HalflingHeritagesSection = Content.defineSection('ancestries-and-backgrounds/halfling-heritages', {
  parent: HalflingSection,
  content: { name: 'Halfling Heritages' },
})

export const GutsyHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.GutsyHalfling)

export const HillockHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.HillockHalfling)

export const NomadicHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.NomadicHalfling)

export const TwilightHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.TwilightHalfling)

export const WildwoodHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.WildwoodHalfling)

export const JinxedHalflingSection = Content.linkEntity(HalflingHeritagesSection, AncestryHalfling.JinxedHalfling)

export const HalflingAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/halfling-ancestry-feats', {
  parent: HalflingSection,
  content: { name: 'Halfling Ancestry Feats' },
})

export const DistractingShadowsSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.DistractingShadows)

export const FolksyPatterSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.FolksyPatter)

export const HalflingLoreSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.HalflingLore)

export const HalflingLuckSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.HalflingLuck)

export const HalflingWeaponFamiliaritySection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.HalflingWeaponFamiliarity)

export const PrairieRiderSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.PrairieRider)

export const SureFeetSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.SureFeet)

export const TitanSlingerSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.TitanSlinger)

export const UnfetteredHalflingSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.UnfetteredHalfling)

export const WatchfulHalflingSection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.WatchfulHalfling)

export const CulturalAdaptabilitySection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.CulturalAdaptability)

export const StepLivelySection = Content.linkEntity(HalflingAncestryFeatsSection, AncestryHalfling.StepLively)

export const HumansSection = Content.defineSection('ancestries-and-backgrounds/humans', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Humans',
    description:
      "_Humans are diverse and adaptable people with wide potential and deep ambitions._\n\nAs unpredictable and varied as any of Golarion's peoples, humans have exceptional drive and the capacity to endure and expand. Though many civilizations thrived before humanity rose to prominence, humans have built some of the greatest and the most terrible societies throughout the course of history, and today they are the most populous people in the realms around the Inner Sea.\n\nHumans' ambition, versatility, and exceptional potential have led to their status as the world's predominant ancestry. Their empires and nations are vast, sprawling things, and their citizens carve names for themselves with the strength of their sword arms and the power of their spells. Humanity is diverse and tumultuous, running the gamut from nomadic to imperial, sinister to saintly. Many of them venture forth to explore, to map the expanse of the multiverse, to search for long-lost treasure, or to lead mighty armies to conquer their neighbors—for no better reason than because they can.\n\nIf you want a character who can be just about anything, you should play a human.\n\n**You Might...**\n\n- Strive to achieve greatness, either in your own right or on behalf of a cause.\n\n- [Seek](content:playing-the-game/seek) to understand your purpose in the world.\n\n- Cherish your relationships with family and friends.\n\n**Others Probably...**\n\n- Respect your flexibility, your adaptability, and—in most cases—your open-mindedness.\n\n- Distrust your intentions, fearing you seek only power or wealth.\n\n- Aren't sure what to expect from you and are hesitant to assume your intentions.\n\n**Physical Description**\n\nHumans' physical characteristics are as varied as the world's climes. Humans have a wide variety of skin and hair colors, body types, and facial features. Generally speaking, their skin has a darker hue the closer to the equator they or their ancestors lived.\n\nHumans reach physical adulthood around the age of 15, though mental maturity occurs a few years later. A typical human can live to be around 90 years old. Humans have exceptionally mutable physical characteristics compared to other ancestries, with greater variance in height, weight, and other physical parameters.\n\n**Society**\n\nHuman variety also manifests in terms of their governments, attitudes, and social norms. Though the oldest of human cultures can trace their shared histories thousands of years into the past, when compared to the societies of the elves or dwarves, human civilizations seem in a state of constant flux as empires fragment and new kingdoms subsume the old.\n\n**Popular Edicts** explore the world, strive for greatness, devote yourself to a moral outlook\n**Popular Anathema** waste what little time you have\n\n**Names**\n\nUnlike many ancestral cultures, which generally cleave to specific traditions and shared histories, humanity's diversity has resulted in a near-infinite set of names. The humans of northern tribes have different names than those dwelling in southern nation-states. Humans throughout much of the world speak Common (though some continents on Golarion have their own regional common languages), yet their names are as varied as their beliefs and appearances.\n\n**Ethnicities**\n\nA variety of human ethnic groups populates the continents within Golarion's Inner Sea region and in the lands beyond it. Human characters can be of any ethnicity, regardless of what lands they call home. Some examples of Golarion's ethnicities are presented below. Characters of human ethnicities in the Inner Sea region speak [Common](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) (also known as Taldane), and some ethnicities grant access to an uncommon regional language.\n\n- **Garundi** span the nations along the southern shores of the Inner Sea.\n\n- **Keleshites** trace their origins to the Keleshite Empire in the eastern deserts.\n\n- **Kellids** live among the mountains and steppes of northern Avistan.\n\n- **Mwangi** are spread across the vast continent of Garund.\n\n- **Shoanti** make their homes in the harsh badlands of the Storval Plateau.\n\n- **Taldans** occupy much of Avistan thanks to a fallen empire.\n\n- **Tians** originally come from the far-off continent of Tian Xia.\n\n- **Ulfens** reside in coastal towns of western Avistan.\n\n- **Varisians** historically favored a nomadic life of roving caravans.",
  },
})

export const HumanSection = Content.linkEntity(HumansSection, AncestryHuman.Human)

export const HumanHeritagesSection = Content.defineSection('ancestries-and-backgrounds/human-heritages', {
  parent: HumanSection,
  content: { name: 'Human Heritages' },
})

export const SkilledHumanSection = Content.linkEntity(HumanHeritagesSection, AncestryHuman.SkilledHuman)

export const VersatileHumanSection = Content.linkEntity(HumanHeritagesSection, AncestryHuman.VersatileHuman)

export const HumanAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/human-ancestry-feats', {
  parent: HumanSection,
  content: { name: 'Human Ancestry Feats' },
})

export const AdaptedCantripSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.AdaptedCantrip)

export const CooperativeNatureSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.CooperativeNature)

export const GeneralTrainingSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.GeneralTraining)

export const HaughtyObstinacySection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.HaughtyObstinacy)

export const NaturalAmbitionSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.NaturalAmbition)

export const NaturalSkillSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.NaturalSkill)

export const UnconventionalWeaponrySection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.UnconventionalWeaponry)

export const AdaptiveAdeptSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.AdaptiveAdept)

export const CleverImproviserSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.CleverImproviser)

export const SenseAlliesSection = Content.linkEntity(HumanAncestryFeatsSection, AncestryHuman.SenseAllies)

export const LeshiesSection = Content.defineSection('ancestries-and-backgrounds/leshies', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Leshies',
    description:
      "_Leshies are immortal nature spirits placed in small plant bodies, seeking to experience the world._\n\nLeshies are immortal spirits of nature temporarily granted physical forms. As guardians and emissaries of the environment, leshies are “born” when a skilled druid or other master of primal magic conducts a ritual to create a suitable vessel, and then a spirit chooses that vessel to be their temporary home. Leshies are self-sufficient from the moment the ritual ends, though it isn't uncommon for leshies to maintain lifelong bonds with their creators. Many leshies relish the opportunity to interact with the physical world. While most leshy spirits are ancient, they rarely recall past lifetimes and see their new life as a chance to experience the wonders of the world once more.\n\nIf you want to play a character who is curious and connected to nature, you should play a leshy.\n\n**You Might...**\n\n- Act as a traveling agent for natural guardians who are unable to leave their territories.\n\n- Encourage civilizations to cooperate with nature and build their cities in ecologically friendly ways.\n\n**Others Probably...**\n\n- Think you are a curiosity due to your spiritual origins.\n\n- Assume you know only about nature and are unfamiliar with civilization and society.\n\n**Physical Description**\n\nLeshies are as varied as the material used to create their vessels, usually appearing as a bizarre mishmash of various plants or fungi. Their bodies are vaguely humanoid in shape, with numerous characteristics of the plant or fungus from which they were made. A typical leshy is about 3 feet tall. Leshies begin their lives as adults and don't age.\n\n**Society**\n\nTo most leshies, the concept of family is not a matter of birth, but rather determined by bonds of loyalty and friendship. Leshies are dedicated allies, but they have little tolerance for those who would despoil nature. As much as they are happy to accept someone who earns their trust into their family, they expect family members to look out for them and their natural wards in return.\n\nLeshies are grouped into categories akin to ethnicities, but these are not connected to physical features; rather, they represent broad categories of characteristics of their spirits. Certain spirits are more likely to gravitate toward particular physical bodies, though this predisposition is far from absolute. Leshies' genders are determined by the spirits that inhabit their bodies. Some leshies are exclusively male or female, while many consider themselves both. Others, particularly fungus leshies, tend toward far more complex expressions of gender, or eschew the concept entirely. Leshies choose and change their names multiple times throughout their lives.\n\n**Alignment and Religion**\n\nLeshies' beliefs generally focus on the natural world. Those with a philosophical bent lean toward the Green Faith, and Gozreh is the most popular deity among faithful leshies. Some leshies also venerate green men, powerful spirits of nature.\n\n**Popular Edicts** experience the physical world, form a family through loyalty and trust, protect parts of nature you embody\n**Popular Anathema** embrace unnatural magic or influences\n\n**Names**\n\nScarlet in Summer, Verdant Taleweaver, Lurking Hunter, Masterful Sun Drinker, Noon Sky Evening Song, Snowy Pine Branch, Cascading Rapids",
  },
})

export const LeshySection = Content.linkEntity(LeshiesSection, AncestryLeshy.Leshy)

export const LeshyHeritagesSection = Content.defineSection('ancestries-and-backgrounds/leshy-heritages', {
  parent: LeshySection,
  content: { name: 'Leshy Heritages' },
})

export const CactusLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.CactusLeshy)

export const FruitLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.FruitLeshy)

export const FungusLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.FungusLeshy)

export const GourdLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.GourdLeshy)

export const LeafLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.LeafLeshy)

export const LotusLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.LotusLeshy)

export const RootLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.RootLeshy)

export const SeaweedLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.SeaweedLeshy)

export const VineLeshySection = Content.linkEntity(LeshyHeritagesSection, AncestryLeshy.VineLeshy)

export const LeshyAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/leshy-ancestry-feats', {
  parent: LeshySection,
  content: { name: 'Leshy Ancestry Feats' },
})

export const GraspingReachSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.GraspingReach)

export const HarmlesslyCuteSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.HarmlesslyCute)

export const LeshyLoreSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.LeshyLore)

export const LeshySuperstitionSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.LeshySuperstition)

export const SeedpodSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.Seedpod)

export const ShadowOfTheWildsSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.ShadowOfTheWilds)

export const UndauntedSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.Undaunted)

export const AnchoringRootsSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.AnchoringRoots)

export const LeshyGlideSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.LeshyGlide)

export const RitualReversionSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.RitualReversion)

export const SpeakWithKindredSection = Content.linkEntity(LeshyAncestryFeatsSection, AncestryLeshy.SpeakWithKindred)

export const OrcsSection = Content.defineSection('ancestries-and-backgrounds/orcs', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Orcs',
    description:
      "_Orcs are proud, strong people with hardened physiques who value physical might and glory in combat._\n\nOrcs are forged in the fires of violence and conflict, often from the moment they are born. As they live lives that are frequently cut brutally short, orcs revel in testing their strength against worthy foes, often by challenging a higher-ranking member of their community for dominance. Orcs often struggle to gain acceptance among other communities, who frequently see them as brutes. Those who earn the loyalty of an orc friend, however, soon learn that an orc's fidelity and honesty are unparalleled. Orc culture teaches that they are shaped by the challenges they survive, and the most worthy survive the most hardships. Orcs who attain both a long life and great triumphs command immense respect.\n\nIf you want a character who is hardy, fearsome, and excels at feats of physical prowess, you should play an orc.\n\n**You Might...**\n\n- Eagerly meet any chance to prove your strength in a physical contest.\n\n- View [dying](content:conditions/dying) in glorious combat as preferable to a mundane death from old age or illness.\n\n**Others Probably...**\n\n- See you as violent or lacking in discipline.\n\n- Admire your forthrightness and blunt honesty.\n\n**Physical Description**\n\nOrcs are tall and powerfully built, with long arms and stocky legs. Many orcs top 7 feet in height, though they tend to adopt broad, almost bow-legged stances and slouch forward at the shoulders. Orcs have rough skin, thick bones, and rock-hard muscles, making them suited to war and other physically demanding tasks. Orc skin color is typically some shade of green, though some orcs have other skin colors that reflect adaptations to their environments.\n\nOrcs consider powerful builds, heavily scarred skin, large tusks, and tattoos attractive, regardless of gender. Orcs reach physical adulthood around the age of 17, with many orcs living to be up to 60 years old.\n\n**Society**\n\nMost orc communities—known as holds—define themselves through two things: pain and glory. Each earns respect in near equal measure, so long as the pain is borne with stoicism. An orc with many scars who walks uncomplaining with a broken leg draws as much admiration as one who wins a great victory on the battlefield. Additionally, power defines the dynamics among families and holds. Weaker orcs work at the behest of the strong, with power constantly shifting between orcs that prove their might. Orcs tend to share in familial duties, raising children as a community and sharing responsibilities among the entire hold.\n\n**Alignment and Religion**\n\nA common orc saying is “you are the scars that shape you.” Violent, chaotic lives in violent, chaotic lands mean that most orcs tend to expect and accept violence. Lamashtu, and Rovagug are commonly worshiped among more war-minded orc communities, while less violent holds worship gods like Sarenrae, whose tenets of fire, redemption, and glory all hold some appeal to orc sensibilities.\n\nWhile there are orc deities, their worship is surprisingly uncommon among orcs. Orcs believe that if a creature has a face and a name, it can be killed, and so their own deities are often targets, rather than objects of reverence. Some orc holds teach that the greatest members of the hold can earn a chance to challenge the orc deities for a place amid the pantheon.\n\n**Popular Edicts** become even stronger, share knowledge you won through pain, destroy the undead\n**Popular Anathema** accept defeat without proof of strength, reshape or reanimate a creature into something lesser\n\n**Names**\n\nArkus, Durra, Grask, Grillgiss, Krugga, Mahja, Murdut, Ollak, Onyat, Thurk, Uirch, Unach",
  },
})

export const OrcSection = Content.linkEntity(OrcsSection, AncestryOrc.Orc)

export const OrcHeritagesSection = Content.defineSection('ancestries-and-backgrounds/orc-heritages', {
  parent: OrcSection,
  content: { name: 'Orc Heritages' },
})

export const BadlandsOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.BadlandsOrc)

export const BattleReadyOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.BattleReadyOrc)

export const DeepOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.DeepOrc)

export const GraveOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.GraveOrc)

export const HoldScarredOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.HoldScarredOrc)

export const RainfallOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.RainfallOrc)

export const WinterOrcSection = Content.linkEntity(OrcHeritagesSection, AncestryOrc.WinterOrc)

export const OrcAncestryFeatsSection = Content.defineSection('ancestries-and-backgrounds/orc-ancestry-feats', {
  parent: OrcSection,
  content: { name: 'Orc Ancestry Feats' },
})

export const BeastTrainerSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.BeastTrainer)

export const IronFistsSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.IronFists)

export const OrcFerocitySection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.OrcFerocity)

export const OrcLoreSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.OrcLore)

export const OrcSuperstitionSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.OrcSuperstition)

export const HoldMarkSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.HoldMark)

export const HoldMarkBurningSunSection = Content.linkEntity(HoldMarkSection, AncestryOrc.HoldMarkBurningSun)

export const HoldMarkDeathsHeadSection = Content.linkEntity(HoldMarkSection, AncestryOrc.HoldMarkDeathsHead)

export const HoldMarkDefiledCorpseSection = Content.linkEntity(HoldMarkSection, AncestryOrc.HoldMarkDefiledCorpse)

export const HoldMarkEmptyHandSection = Content.linkEntity(HoldMarkSection, AncestryOrc.HoldMarkEmptyHand)

export const OrcWeaponFamiliaritySection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.OrcWeaponFamiliarity)

export const TusksSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.Tusks)

export const AthleticMightSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.AthleticMight)

export const BloodyBlowsSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.BloodyBlows)

export const DefyDeathSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.DefyDeath)

export const ScarThickSkinSection = Content.linkEntity(OrcAncestryFeatsSection, AncestryOrc.ScarThickSkin)

export const VersatileHeritagesSection = Content.defineSection('ancestries-and-backgrounds/versatile-heritages', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Versatile Heritages',
    description:
      "The peoples of Golarion are many, and they have a long history of intermingling or dabbling with forces capable of altering the very fabric of a mortal body or soul. The children born to such parents might have traits from each of their parents or physiological manifestations of the forces their ancestors were influenced by, manifesting as a specific heritage.\n\nThe most common of these by far are the aiuvarin and dromaar versatile heritages, usually born to a human parent on one side and either an elf or orc parent on the other. Other individuals are born under far stranger circumstances, such as having a parent who was affected by monstrous, undead, or extraplanar energies. As these circumstances aren't unique to a single ancestry, these heritages—called versatile heritages—are likewise shared by many ancestries.\n\nGolarion is home to a variety of versatile heritages. Some are born to unusual creatures or arise through specific mundane or supernatural circumstances. Many, however, result from an infusion of extraplanar energy, whether through direct parentage, more distant ancestors, or simply direct exposure to the quintessence of that plane. These individuals are known as planar scions.\n\nBecause the circumstances that give rise to versatile heritages aren't limited to a single ancestry, a versatile heritage can be chosen by a character of nearly any ancestry. Some versatile heritages are more common among some ancestries than others, and some might list additional restrictions specific to that heritage. Your GM may place other restrictions on which ancestries can use a given versatile heritage based on the story and setting.",
  },
})

export const UnlimitedPossibilitiesSection = Content.defineSection('ancestries-and-backgrounds/unlimited-possibilities', {
  parent: VersatileHeritagesSection,
  content: {
    name: 'Unlimited Possibilities!',
    description:
      'Though a character can have only one heritage and one lineage feat, the possible permutations of a character’s background and family tree are virtually unlimited. An aiuvarin character might still have a changeling parent whose nature is visible in the coloration of their eyes even if they don’t have access to changeling ancestry feats, and a pitborn dwarf might very well have an ancestor with fey influences on their bloodline, reflected with a fey muse or patron gained through their class alongside their ancestral fiendishness.',
  },
})

export const PlayingAVersatileHeritageSection = Content.defineSection('ancestries-and-backgrounds/playing-a-versatile-heritage', {
  parent: VersatileHeritagesSection,
  content: {
    name: 'Playing a Versatile Heritage',
    description:
      "To play a character with a versatile heritage, first select your ancestry, just like you would for any character. You gain [Hit Points](characteristic:hit-points), size, [Speed](characteristic:speed), attribute boosts and attribute flaws, languages, traits, and other abilities from that ancestry. Then, instead of choosing a heritage from those normally available to that ancestry, apply your chosen versatile heritage. You gain all the features from your versatile heritage, some of which might modify or replace statistics, abilities, or traits from your ancestry.\n\nSince a versatile heritage is a heritage, you can have only one, and you can't have any other heritage in addition to your versatile heritage.\n\nSometimes a versatile heritage might give you an ability that conflicts with an ability from your ancestry. In these cases, you choose which of the conflicting abilities your character has.\n\nWhen selecting ancestry feats, you can choose from those available to your ancestry as well as those specific to your versatile heritage.",
  },
})

export const LineageFeatsSection = Content.defineSection('ancestries-and-backgrounds/lineage-feats', {
  parent: PlayingAVersatileHeritageSection,
  content: {
    name: 'Lineage Feats',
    description:
      'Some ancestry feats within a versatile heritage have the lineage trait. These feats specify a physiological lineage your character has—such as the type of hag that birthed a changeling character, or the type of extraplanar entity that influenced a nephilim’s birth. You can have only one lineage feat; you can select such a feat only at 1st level, and you can’t retrain into or out of this feat.',
  },
})

export const InThisBookSection = Content.defineSection('ancestries-and-backgrounds/in-this-book', {
  parent: VersatileHeritagesSection,
  content: { name: 'In This Book', description: 'This book includes the rules for three kinds of versatile heritages' },
})

export const ChangelingSection = Content.defineSection('ancestries-and-backgrounds/changeling', {
  parent: InThisBookSection,
  content: {
    name: 'Changeling',
    description:
      "Children of the malevolent, magical creatures known as hags, changelings share some of their mothers' abilities, such as sharp claws and occult magic. Many changelings experience or dread the psychic summons of their hag mothers, known as the Call, urging them to seek out their mothers so they might be transformed into hags themselves.\n\nChangeling lineages affect the appearance of one of the changeling's eyes, and are as follows: brine may for the child of a sea hag, callow may for a sweet hag, dream may for a cuckoo hag, and slag may for an iron hag.",
  },
})

export const ChangelingsSection = Content.defineSection('ancestries-and-backgrounds/changelings', {
  parent: ChangelingSection,
  content: {
    name: 'Changelings',
    description:
      "_Changelings are the children of malevolent hags, born with occult magic and the potential to hear a psychic Call._\n\nTales of children stolen away and replaced by monsters exist across countless cultures—but the true monsters are the hags who bring these strange children into the world, either directly as their birth parents or indirectly when strange magic from their coven rituals affects babies in nearby villages. Such a child faces no end of challenges, often beginning life as an abandoned or orphaned outsider.\n\nThough a changeling generally resembles an ordinary member of their ancestry, their distinctive eyes—each a different color—set them apart. One of their eyes matches that of their father's lineage, while the other matches the color of their hag mother's, often in an unnatural shade such as violet or vivid green. Not everyone with differently colored eyes is a changeling, but this manifestation of changeling heritage makes it difficult for them to hide their nature and can lead to banishment. As they come of age, they manifest other characteristics from their mother, including supernatural abilities. Darkvision, clawlike fingernails, and innate magic are the most common.\n\nChangelings can be any gender, but women in particular are vulnerable to the Call, a psychic influence that urges them to abandon their mortal life, join the hag's coven, and eventually become a hag themselves. Changelings who understand their heritage often fear the Call and work to resist its pull. Those who remain ignorant of their origin may find themselves subject to a terrible compulsion without knowing why.\n\n**You Might...**\n\n- Cherish and protect those friends and family who accept you as you are.\n\n- [Seek](content:playing-the-game/seek) to better understand your hag mother and the gifts she gave you, for good or ill, or distance yourself from your heritage.\n\n- Fear the day you hear the Call and worry you might not be able to resist—or perhaps you already fight to resist it every day.\n\n**Others Probably...**\n\n- Assume you practice occult or primal magic, or that you participate in a coven.\n\n- Worry that you might secretly be a monster, or become one, and turn on them.\n\n- Notice and speculate about your distinctive eyes.",
  },
})

export const ChangelingsChangelingSection = Content.linkEntity(ChangelingsSection, VersatileHeritage.ChangelingHeritage)

export const ChangelingFeatsSection = Content.defineSection('ancestries-and-backgrounds/changeling-feats', {
  parent: ChangelingsChangelingSection,
  content: { name: 'Changeling Feats' },
})

export const BrineMaySection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.BrineMay)

export const CallowMaySection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.CallowMay)

export const DreamMaySection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.DreamMay)

export const SlagMaySection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.SlagMay)

export const ChangelingLoreSection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.ChangelingLore)

export const HagClawsSection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.HagClaws)

export const HagsSightSection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.HagsSight)

export const CalledSection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.Called)

export const MistChildSection = Content.linkEntity(ChangelingFeatsSection, VersatileHeritage.MistChild)

export const PlanarScionsNephilimSection = Content.defineSection('ancestries-and-backgrounds/planar-scions-nephilim', {
  parent: InThisBookSection,
  content: {
    name: 'Planar Scions: Nephilim',
    description:
      'Life is present everywhere across the planes of the Multiverse, and the intermingling of mortals from the Universe with extraplanar energy is no rare thing. Whether their origins are from a direct physical relationship between a mortal and an extraplanar being or from some other infusion of extraplanar energy, mortals who carry the power of another plane are known as planar scions. There are numerous types of planar scions, just as there are countless types of beings across the planes whose power might be shared with a mortal. This book focuses on nephilim, planar scions from planes strongly associated with concepts of good, evil, order, or dissolution, and presents lineages associated with fiendish and celestial beings.\n\nNephilim are planar scions—mortals influenced by planes beyond the Universe—whose bodies or spirits have been influenced by energies from an outer plane, often one strongly associated with mortal religions or philosophies, like Elysium or the Outer Rifts. Some nephilim are even born with seemingly contradictory influences, displaying traits of both celestials and fiends.\n\nThe angelkin, lawbringers, and musetouched lineages each represent different aspects of the celestial planes, while the grimspawn, hellspawn, and pitborn lineages represent beings with fiendish bloodlines or influences.',
  },
})

export const NephilimSection = Content.defineSection('ancestries-and-backgrounds/nephilim', {
  parent: PlanarScionsNephilimSection,
  content: {
    name: 'Nephilim',
    description:
      "_Nephilim are influenced by the divine magic of the Outer Sphere, often with fiendish or celestial features._\n\nCountless legends tell of mortal dealings with immortal beings, and of the children born from those encounters. These children, known as planar scions, are mortals who inherit the supernatural essence of another plane, which manifests through their distinctive physical features and otherworldly powers. This section presents rules for nephilim, planar scions who can trace their extraplanar heritage back to celestials, fiends, monitors, and other entities who often become involved in the religious affairs of mortals.\n\nA faithful priest of Erastil is visited by an angel in his youth, and many years later he fathers a child with the head of an elk and a birthmark shaped like Erastil's religious symbol, a bow and arrow. A powerful sorceress prevents an incursion from the Outer Rifts, but a sliver of demonic power infuses the child she carries, who is born with fangs and a pair of tiny horns. A planar caravan travels the Multiverse until its ranks are filled with children who possess devilish hooves and angelic halos. These children, known as nephilim, possess the ambition and capacity for growth and change inherent in their mortal forebears, while also possessing some portion of the power and appearance of an immortal entity or entities whose energies influenced their bloodline.\n\nNephilim are difficult to categorize by nature. Some possess both demonic and angelic traits, while others possess abilities that defy the neat categories of scholars. Many nephilim do have traits that strongly point to their lineage, though. Nephilim who carry the power of archons, sometimes known as lawbringers, may display golden eyes or flaming auras, while nephilim descended from devils, known as hellspawn, may have red skin and hooved feet.\n\nWhile the term nephilim broadly describes these individuals, some cultures use the name empyrean or cambion to refer to nephilim with celestial influence or fiendish influence respectively. Other nephilim sometimes earn the names of aphorite or ganzi, though this entry only focuses on empyreans and cambions.\n\nIf you want a character who is supernaturally infused with the power of the Outer Planes, whose appearance is striking and notable, and whose personal connections might extend beyond the bounds of the Universe, you should play a nephilim.\n\n**You Might...**\n\n- Have a strong sense of self-confidence due to the power or influence of your extraplanar heritage.\n\n- Lean into or rebel against your perceived extraplanar nature, embracing angelic goodness or twisting demonic rage towards better ends.\n\n- Find that building relationships with others is difficult, but treasure those who value you for who, and not what, you are.\n\n**Others Probably...**\n\n- Assume you've faced numerous challenges or gained unfair advantages due to your heritage.\n\n- Mistake you for an agent of a holy or unholy organization.\n\n- Think you have associations with powerful extraplanar creatures, potentially trying to bargain with you for power of their own.",
  },
})

export const NephilimNephilimSection = Content.linkEntity(NephilimSection, VersatileHeritage.NephilimHeritage)

export const NephilimFeatsSection = Content.defineSection('ancestries-and-backgrounds/nephilim-feats', {
  parent: NephilimNephilimSection,
  content: { name: 'Nephilim Feats' },
})

export const AngelkinSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Angelkin)

export const GrimspawnSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Grimspawn)

export const HellspawnSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Hellspawn)

export const LawbringerSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Lawbringer)

export const MusetouchedSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Musetouched)

export const PitbornSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Pitborn)

export const BestialManifestationSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.BestialManifestation)

export const HaloSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.Halo)

export const NephilimEyesSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.NephilimEyes)

export const NephilimLoreSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.NephilimLore)

export const NimbleHoovesSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.NimbleHooves)

export const BlessedBloodNephilimSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.BlessedBloodNephilim)

export const ExtraplanarSupplicationSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.ExtraplanarSupplication)

export const NephilimResistanceSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.NephilimResistance)

export const ScionOfManyPlanesSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.ScionOfManyPlanes)

export const SkillfulTailSection = Content.linkEntity(NephilimFeatsSection, VersatileHeritage.SkillfulTail)

export const MixedAncestryHeritagesSection = Content.defineSection('ancestries-and-backgrounds/mixed-ancestry-heritages', {
  parent: InThisBookSection,
  content: {
    name: 'Mixed Ancestry Heritages',
    description:
      "Golarion has numerous metropolises where people from a wide variety of ancestries intermingle. Moreover, adventurers of all backgrounds and ancestries often find themselves thrust together and discover that from adversity can come common ground, and even love. As a result, the world is full of people whose bloodline can be traced to at least two different ancestries. The most common examples of this are aiuvarins and dromaars, who have elf and orc ancestors respectively. While all known dromaars and aiuvarins in the Inner Sea share human as the other part of their origin, it's possible that other combinations could exist.\n\nThis section also describes how to create a custom mixed ancestry heritage when creating your own world.",
  },
})

export const AiuvarinsSection = Content.defineSection('ancestries-and-backgrounds/aiuvarins', {
  parent: MixedAncestryHeritagesSection,
  content: {
    name: 'Aiuvarins',
    description:
      "_Elves' children with people of other ancestries, and the children of their children, are called “aiuvarin”, an elven word that refers to a poem about leaves that fall too quickly to the ground._\n\nElves' children with people of other ancestries, and the children of their children, are called “aiuvarin”, an elven word that refers to a poem about leaves that fall too quickly to the ground. The most familiar aiuvarins in Golarion are born to an elf and a human, or to two aiuvarins. Those born of these unions are commonly referred to as “half-elves.” The life of an aiuvarin can be difficult, often marked by a struggle to fit in. Aiuvarins don't have their own homeland on Golarion, nor are populations of aiuvarins particularly tied to one another since they often have very disparate traditions from their parents' ancestries. Instead, they often attempt to find acceptance in their parents' cultures or settlements.\n\nAiuvarins often have pointed ears and can be lanky, along with manifesting traits from their non-elven ancestors. They lack the almost-alien eyes of their elf parents, and their work to find a place for themselves in communities where they're often out of sync with the dominant culture leads many to become artists or entertainers. Despite this innate socialization, many aiuvarins have difficulty forming lasting bonds with either of their parents' people due to the distance they feel from both communities as a whole.\n\nAiuvarins gain some, but not all, of their elven parent's longevity, and those with a human parent often live for around 150 years. This causes some of them to fear friendship and romance with humans, knowing that they'll likely outlive their companions.\n\n**You Might...**\n\n- Keep to yourself and find it difficult to form close bonds with others.\n\n- Strongly embrace or reject one side or the other of your parentage.\n\n- Identify strongly with and relate to other people with mixed ancestries.\n\n**Others Probably...**\n\n- Find you more approachable than elves.\n\n- See you primarily through the lens of your elven heritage.\n\n- Downplay the challenges of being caught between cultures.",
  },
})

export const AiuvarinSection = Content.linkEntity(AiuvarinsSection, VersatileHeritage.AiuvarinHeritage)

export const AiuvarinFeatsSection = Content.defineSection('ancestries-and-backgrounds/aiuvarin-feats', {
  parent: AiuvarinSection,
  content: { name: 'Aiuvarin Feats' },
})

export const EarnedGlorySection = Content.linkEntity(AiuvarinFeatsSection, VersatileHeritage.EarnedGlory)

export const ElfAtavismSection = Content.linkEntity(AiuvarinFeatsSection, VersatileHeritage.ElfAtavism)

export const InspireImitationSection = Content.linkEntity(AiuvarinFeatsSection, VersatileHeritage.InspireImitation)

export const SupernaturalCharmSection = Content.linkEntity(AiuvarinFeatsSection, VersatileHeritage.SupernaturalCharm)

export const DromaarsSection = Content.defineSection('ancestries-and-backgrounds/dromaars', {
  parent: MixedAncestryHeritagesSection,
  content: {
    name: 'Dromaars',
    description:
      "_As the orcs of Belkzen have become a critical vanguard in the war against the Whispering Tyrant, sometimes fighting alongside allies of other ancestries, children with a mix of orc heritage and that of another ancestry (typically human) have grown in number._\n\nMany of these “half-orcs” refer to themselves as “dromaars,” an orcish word referring to those drummers whose music sends the hordes marching to war, seeing themselves as heralds of a new age for orcs in the Inner Sea region. Some intolerant humanoids see orcs as more akin to monsters than people, hating and fearing them simply due to their lineage. This can push dromaars to the margins of society, where some find work in manual labor, as mercenaries, or in crime. Many who can't stand the indignities heaped on them in human society find a home among their orc kin or trek into the wilderness.\n\nSome humans assume dromaars are less intelligent or uncivilized, and dromaars rarely find acceptance among societies with many such folk. To an orc hold, a dromaar is often considered a valuable addition, making up for anything they might lack in physical strength with gifts inherited from their other ancestral line. While some dromaars struggle to claim a name for themselves in the unforgiving hierarchies of orc holds, others may find that orcish society is far more tolerant and can create opportunities to rise high.\n\nA dromaar with a human parent can typically live to around 70 years old.\n\n**You Might...**\n\n- Ignore, embrace, or actively counter the common stereotypes about dromaars.\n\n- Make the most of your size and strength, either physically or socially.\n\n- Keep your distance from people of most other ancestries, in case they unfairly reject you due to your orc ancestors.\n\n**Others Probably...**\n\n- Assume you enjoy and excel at fighting but aren't inclined toward magical or intellectual pursuits.\n\n- Pity you for the tragic circumstances they assume were involved in your birth.\n\n- Get out of your way and back down rather than face your anger.",
  },
})

export const DromaarSection = Content.linkEntity(DromaarsSection, VersatileHeritage.DromaarHeritage)

export const DromaarFeatsSection = Content.defineSection('ancestries-and-backgrounds/dromaar-feats', {
  parent: DromaarSection,
  content: { name: 'Dromaar Feats' },
})

export const MonstrousPeacemakerSection = Content.linkEntity(DromaarFeatsSection, VersatileHeritage.MonstrousPeacemaker)

export const OrcSightSection = Content.linkEntity(DromaarFeatsSection, VersatileHeritage.OrcSight)

export const MixedAncestrySection = Content.defineSection('ancestries-and-backgrounds/mixed-ancestry', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Mixed Ancestry',
    description:
      "You can choose a mixed ancestry to represent having two ancestral lines for your character. This doesn't preclude having more than two ancestries in your genealogy, but you'll need to work with your GM if you want to have more than two reflected in the rules. The possible combinations of ancestries are immeasurable, though most people in the Inner Sea region are familiar with only aiuvarins and dromaars, as those are the most common people of mixed ancestry they encounter.\n\n**Custom Mixed Heritage**: You can work with your GM to create a mixed heritage for an ancestry other than elf or orc. A custom mixed-ancestry heritage is an uncommon heritage. Choose an ancestry to tie to the heritage. You gain any traits of that ancestry and a new trait for your combined ancestry, similar to how the aiuvarin heritage below grants the “elf” and “aiuvarin” traits. You also gain low-light vision if the ancestry tied to the heritage has low-light vision or darkvision. The heritage lets you select ancestry feats for the chosen ancestry in addition to those from your base ancestry. The aiuvarin and dromaar heritages both have special feats, but a custom heritage will need you to work with your GM to create or adapt some.",
  },
})

export const BackgroundsSection = Content.defineSection('ancestries-and-backgrounds/backgrounds', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Backgrounds',
    description:
      "Backgrounds allow you to customize your character based on their life before adventuring. This is the next step in their life story after their ancestry, which reflects the circumstances of their birth. Your character's background can help you learn or portray more about their personality while also suggesting what sorts of things they're likely to know. Consider what events set your character on their path to the life of an adventurer and how those circumstances relate to their background.\n\nAt 1st level, when you create your character, you gain a background of your choice. This decision is permanent; you can't change it at later levels. Each background listed here grants two boosts, a skill feat, and the trained proficiency rank in two skills, one of which is a Lore skill. If you gain the trained proficiency rank in a skill from your background and would then gain the trained proficiency rank in the same skill from your class at 1st level, you instead become trained in another skill of your choice.\n\nLore skills represent deep knowledge of a specific subject and are described on page 240. If a Lore skill involves a choice (for instance, a choice of terrain), explain your preference to the GM, who has the final say on whether it's acceptable or not. If you'd like some suggestions, the Common Lore Subcategories sidebar on page 240 lists a number of Lore skills that are suitable for most campaigns.\n\nSkill feats expand the functions of your skills andappear in Chapter 5: Feats.",
  },
})

export const AcolyteSection = Content.linkEntity(BackgroundsSection, Background.Acolyte)

export const AcrobatSection = Content.linkEntity(BackgroundsSection, Background.Acrobat)

export const AnimalWhispererSection = Content.linkEntity(BackgroundsSection, Background.AnimalWhisperer)

export const ArtisanSection = Content.linkEntity(BackgroundsSection, Background.Artisan)

export const ArtistSection = Content.linkEntity(BackgroundsSection, Background.Artist)

export const BanditSection = Content.linkEntity(BackgroundsSection, Background.Bandit)

export const BarkeepSection = Content.linkEntity(BackgroundsSection, Background.Barkeep)

export const BarristerSection = Content.linkEntity(BackgroundsSection, Background.Barrister)

export const BountyHunterSection = Content.linkEntity(BackgroundsSection, Background.BountyHunter)

export const CharlatanSection = Content.linkEntity(BackgroundsSection, Background.Charlatan)

export const CookSection = Content.linkEntity(BackgroundsSection, Background.Cook)

export const CriminalSection = Content.linkEntity(BackgroundsSection, Background.Criminal)

export const CultistSection = Content.linkEntity(BackgroundsSection, Background.Cultist)

export const DetectiveSection = Content.linkEntity(BackgroundsSection, Background.Detective)

export const EmissarySection = Content.linkEntity(BackgroundsSection, Background.Emissary)

export const EntertainerSection = Content.linkEntity(BackgroundsSection, Background.Entertainer)

export const FarmhandSection = Content.linkEntity(BackgroundsSection, Background.Farmhand)

export const FieldMedicSection = Content.linkEntity(BackgroundsSection, Background.FieldMedic)

export const FortuneTellerSection = Content.linkEntity(BackgroundsSection, Background.FortuneTeller)

export const GamblerSection = Content.linkEntity(BackgroundsSection, Background.Gambler)

export const GladiatorSection = Content.linkEntity(BackgroundsSection, Background.Gladiator)

export const GuardSection = Content.linkEntity(BackgroundsSection, Background.Guard)

export const HerbalistSection = Content.linkEntity(BackgroundsSection, Background.Herbalist)

export const HermitSection = Content.linkEntity(BackgroundsSection, Background.Hermit)

export const HunterSection = Content.linkEntity(BackgroundsSection, Background.Hunter)

export const LaborerSection = Content.linkEntity(BackgroundsSection, Background.Laborer)

export const MartialDiscipleSection = Content.linkEntity(BackgroundsSection, Background.MartialDisciple)

export const MartialDiscipleAcrobaticsSection = Content.linkEntity(MartialDiscipleSection, Background.MartialDiscipleAcrobatics)

export const MartialDiscipleAthleticsSection = Content.linkEntity(MartialDiscipleSection, Background.MartialDiscipleAthletics)

export const MerchantSection = Content.linkEntity(BackgroundsSection, Background.Merchant)

export const MinerSection = Content.linkEntity(BackgroundsSection, Background.Miner)

export const NobleSection = Content.linkEntity(BackgroundsSection, Background.Noble)

export const NomadSection = Content.linkEntity(BackgroundsSection, Background.Nomad)

export const PrisonerSection = Content.linkEntity(BackgroundsSection, Background.Prisoner)

export const RaisedByBeliefSection = Content.linkEntity(BackgroundsSection, Background.RaisedByBelief)

export const SailorSection = Content.linkEntity(BackgroundsSection, Background.Sailor)

export const ScholarSection = Content.linkEntity(BackgroundsSection, Background.Scholar)

export const ScoutSection = Content.linkEntity(BackgroundsSection, Background.Scout)

export const StreetUrchinSection = Content.linkEntity(BackgroundsSection, Background.StreetUrchin)

export const TeacherSection = Content.linkEntity(BackgroundsSection, Background.Teacher)

export const TinkerSection = Content.linkEntity(BackgroundsSection, Background.Tinker)

export const WarriorSection = Content.linkEntity(BackgroundsSection, Background.Warrior)

export const AncestriesBackgroundsLanguagesSection = Content.defineSection('ancestries-and-backgrounds/ancestries-and-backgrounds/languages', {
  parent: AncestriesBackgroundsSection,
  content: {
    name: 'Languages',
    description:
      "The people of the Inner Sea region speak dozens of different languages, along with hundreds of dialects and regional variations. While a character can generally get by with Taldane, also known as Common, knowing another language is vital in some regions. Being able to speak these tongues can help you with negotiation, spying on enemies, or just conducting simple commerce. Languages also afford you the chance to contextualize your character in the world and give meaning to your other character choices.\n\nYour ancestry entry states which languages you know at 1st level. Typically, this means you can both speak and read these languages. Having a positive [Intelligence modifier](characteristic:intelligence) grants a number of additional languages equal to your Intelligence modifier. You can choose these languages from the list presented in your character's ancestry entry and from those available from your region or ethnicity. Ask your GM if there's a language you want to select that isn't on these lists.\n\nThe languages presented here are grouped according to how common they are throughout the Inner Sea region. Languages that are common are regularly encountered around the Inner Sea, even among those who aren't native speakers. Languages that are uncommon (see the Uncommon Languages table and Regional Languages) are most frequently spoken by native speakers, but they are also spoken by certain scholars and others interested in the associated cultures.\n\nMany uncommon languages are spoken by natives of other planes who rarely appear near the Inner Sea unless summoned. Mortals learning these languages might spend a lifetime without meeting a native speaker.\n\nIt is possible for your character to learn languages later in their adventuring career. Selecting the Multilingual feat, for example, grants a character two new languages chosen from those listed below. If your Intelligence changes later on, you also adjust your number of languages accordingly. Other abilities and effects might grant access to common or uncommon languages, as detailed in their descriptions. Rare or secret languages can only be discovered through play.\n\n## Common Languages\n\n| **Language** | **Speakers** |\n|---|---|\n| Common | Humans, dwarves, elves, halflings, and other common ancestries |\n| Draconic | Dragons, reptilian humanoids |\n| Dwarven | Dwarves |\n| Elven | Elves, aiuvarins |\n| Fey | Fey, centaurs, plant and fungus creatures |\n| Gnomish | Gnomes |\n| Goblin | Goblins, hobgoblins, bugbears |\n| Halfling | Halflings |\n| Jotun | Giants, ogres, trolls, ettins, cyclopes |\n| Orcish | Orcs, dromaars |\n| Sakvroth | Subterranean civilizations, serpentfolk |\n| |\n\n## Uncommon Languages\n\n| Language | Speakers |\n|---|---|\n| Aklo | Evil fey, otherworldly monsters |\n| Chthonian | Demons |\n| Diabolic | Devils |\n| Empyrean | Angels and other celestials |\n| Kholo | The hyena-like kholos |\n| Necril | Ghouls, intelligent undead |\n| Petran | Earth elemental creatures |\n| Pyric | Fire elemental creatures |\n| Shadowtongue | Nidalese, Netherworld creatures |\n| Sussuran | Air elemental creatures, flying creatures |\n| Thalassic | Aquatic creatures, water elemental creatures |\n| Muan | Wood elemental creatures |\n| Talican | Metal elemental creatures |",
  },
})

export const RegionalLanguagesSection = Content.defineSection('ancestries-and-backgrounds/regional-languages', {
  parent: AncestriesBackgroundsLanguagesSection,
  content: {
    name: 'Regional Languages',
    description:
      "Regional languages depend on the game world you're playing in. Chapter 1: Introduction lists the regional languages of the Pathfinder world and [where they're spoken](content:introduction/regional-languages).\n\nRegional languages are uncommon, but characters from that region have access to choose them at character creation. For characters with less exposure to the region or language, check with your GM to make sure speaking that language makes sense for your character.\n\nMost characters learn the Common language. This is the most widely used language in the region where the campaign takes place. In the Inner Sea region of Golarion, the Common tongue is Taldane, for example. Characters with Common might face a language barrier if they travel somewhere with a different Common language.",
  },
})

export const SignLanguageSection = Content.defineSection('ancestries-and-backgrounds/sign-language', {
  parent: AncestriesBackgroundsLanguagesSection,
  content: {
    name: 'Sign Language',
    description:
      'The language entry for most characters lists languages they use to communicate in spoken words. However, you might know the signed languages associated with the languages you know, or how to read lips. You can learn these by taking the Sign Language or Read Lips skill feats, or both. If you are creating a character who is deaf, hard of hearing, or unable to speak, discuss with your GM whether it makes sense for your character to know sign languages or lip reading. If so, your GM might allow you to select one of these feats for free (even if you don’t meet the prerequisites) to represent your character concept.',
  },
})

export const AncestriesAndBackgroundsContent = [
  AncestriesBackgroundsSection,
  AncestryEntriesSection,
  HitPointsSection,
  SizeSection,
  SpeedSection,
  AttributeBoostsFlawsSection,
  LanguagesSection,
  TraitsSection,
  SpecialAbilitiesSection,
  HeritagesSection,
  AncestryFeatsSection,
  DwarvesSection,
  DwarfSection,
  DwarfHeritagesSection,
  DeathWardenDwarfSection,
  ForgeDwarfSection,
  RockDwarfSection,
  StrongBloodedDwarfSection,
  AncientBloodedDwarfSection,
  DwarfAncestryFeatsSection,
  DwarvenDoughtinessSection,
  DwarvenLoreSection,
  DwarvenWeaponFamiliaritySection,
  MountainStrategySection,
  RockRunnerSection,
  StonemasonsEyeSection,
  UnburdenedIronSection,
  BoulderRollSection,
  DefyTheDarknessSection,
  DwarvenReinforcementSection,
  ElvesSection,
  ElfSection,
  ElfHeritagesSection,
  AncientElfSection,
  ArcticElfSection,
  CavernElfSection,
  SeerElfSection,
  WhisperElfSection,
  WoodlandElfSection,
  ElfAncestryFeatsSection,
  AncestralLongevitySection,
  ElvenLoreSection,
  ElvenWeaponFamiliaritySection,
  ForlornSection,
  NimbleElfSection,
  OtherworldlyMagicSection,
  UnwaveringMienSection,
  AgelessPatienceSection,
  AncestralSuspicionSection,
  MartialExperienceSection,
  GnomesSection,
  GnomeSection,
  GnomeHeritagesSection,
  ChameleonGnomeSection,
  FeyTouchedGnomeSection,
  SensateGnomeSection,
  UmbralGnomeSection,
  WellspringGnomeSection,
  GnomeAncestryFeatsSection,
  AnimalAccompliceSection,
  AnimalElocutionistSection,
  FeyFellowshipSection,
  FirstWorldMagicSection,
  GnomeObsessionSection,
  GnomeWeaponFamiliaritySection,
  IllusionSenseSection,
  RazzleDazzleSection,
  EnergizedFontSection,
  ProjectPersonaSection,
  GoblinsSection,
  GoblinSection,
  GoblinHeritagesSection,
  CharhideGoblinSection,
  IrongutGoblinSection,
  RazortoothGoblinSection,
  SnowGoblinSection,
  UnbreakableGoblinSection,
  GoblinAncestryFeatsSection,
  BurnItSection,
  CityScavengerSection,
  GoblinLoreSection,
  GoblinScuttleSection,
  GoblinSongSection,
  GoblinWeaponFamiliaritySection,
  JunkTinkerSection,
  RoughRiderSection,
  VerySneakySection,
  KneecapSection,
  LoudSingerSection,
  VandalSection,
  HalflingsSection,
  HalflingSection,
  HalflingHeritagesSection,
  GutsyHalflingSection,
  HillockHalflingSection,
  NomadicHalflingSection,
  TwilightHalflingSection,
  WildwoodHalflingSection,
  JinxedHalflingSection,
  HalflingAncestryFeatsSection,
  DistractingShadowsSection,
  FolksyPatterSection,
  HalflingLoreSection,
  HalflingLuckSection,
  HalflingWeaponFamiliaritySection,
  PrairieRiderSection,
  SureFeetSection,
  TitanSlingerSection,
  UnfetteredHalflingSection,
  WatchfulHalflingSection,
  CulturalAdaptabilitySection,
  StepLivelySection,
  HumansSection,
  HumanSection,
  HumanHeritagesSection,
  SkilledHumanSection,
  VersatileHumanSection,
  HumanAncestryFeatsSection,
  AdaptedCantripSection,
  CooperativeNatureSection,
  GeneralTrainingSection,
  HaughtyObstinacySection,
  NaturalAmbitionSection,
  NaturalSkillSection,
  UnconventionalWeaponrySection,
  AdaptiveAdeptSection,
  CleverImproviserSection,
  SenseAlliesSection,
  LeshiesSection,
  LeshySection,
  LeshyHeritagesSection,
  CactusLeshySection,
  FruitLeshySection,
  FungusLeshySection,
  GourdLeshySection,
  LeafLeshySection,
  LotusLeshySection,
  RootLeshySection,
  SeaweedLeshySection,
  VineLeshySection,
  LeshyAncestryFeatsSection,
  GraspingReachSection,
  HarmlesslyCuteSection,
  LeshyLoreSection,
  LeshySuperstitionSection,
  SeedpodSection,
  ShadowOfTheWildsSection,
  UndauntedSection,
  AnchoringRootsSection,
  LeshyGlideSection,
  RitualReversionSection,
  SpeakWithKindredSection,
  OrcsSection,
  OrcSection,
  OrcHeritagesSection,
  BadlandsOrcSection,
  BattleReadyOrcSection,
  DeepOrcSection,
  GraveOrcSection,
  HoldScarredOrcSection,
  RainfallOrcSection,
  WinterOrcSection,
  OrcAncestryFeatsSection,
  BeastTrainerSection,
  IronFistsSection,
  OrcFerocitySection,
  OrcLoreSection,
  OrcSuperstitionSection,
  HoldMarkSection,
  HoldMarkBurningSunSection,
  HoldMarkDeathsHeadSection,
  HoldMarkDefiledCorpseSection,
  HoldMarkEmptyHandSection,
  OrcWeaponFamiliaritySection,
  TusksSection,
  AthleticMightSection,
  BloodyBlowsSection,
  DefyDeathSection,
  ScarThickSkinSection,
  VersatileHeritagesSection,
  UnlimitedPossibilitiesSection,
  PlayingAVersatileHeritageSection,
  LineageFeatsSection,
  InThisBookSection,
  ChangelingSection,
  ChangelingsSection,
  ChangelingsChangelingSection,
  ChangelingFeatsSection,
  BrineMaySection,
  CallowMaySection,
  DreamMaySection,
  SlagMaySection,
  ChangelingLoreSection,
  HagClawsSection,
  HagsSightSection,
  CalledSection,
  MistChildSection,
  PlanarScionsNephilimSection,
  NephilimSection,
  NephilimNephilimSection,
  NephilimFeatsSection,
  AngelkinSection,
  GrimspawnSection,
  HellspawnSection,
  LawbringerSection,
  MusetouchedSection,
  PitbornSection,
  BestialManifestationSection,
  HaloSection,
  NephilimEyesSection,
  NephilimLoreSection,
  NimbleHoovesSection,
  BlessedBloodNephilimSection,
  ExtraplanarSupplicationSection,
  NephilimResistanceSection,
  ScionOfManyPlanesSection,
  SkillfulTailSection,
  MixedAncestryHeritagesSection,
  AiuvarinsSection,
  AiuvarinSection,
  AiuvarinFeatsSection,
  EarnedGlorySection,
  ElfAtavismSection,
  InspireImitationSection,
  SupernaturalCharmSection,
  DromaarsSection,
  DromaarSection,
  DromaarFeatsSection,
  MonstrousPeacemakerSection,
  OrcSightSection,
  MixedAncestrySection,
  BackgroundsSection,
  AcolyteSection,
  AcrobatSection,
  AnimalWhispererSection,
  ArtisanSection,
  ArtistSection,
  BanditSection,
  BarkeepSection,
  BarristerSection,
  BountyHunterSection,
  CharlatanSection,
  CookSection,
  CriminalSection,
  CultistSection,
  DetectiveSection,
  EmissarySection,
  EntertainerSection,
  FarmhandSection,
  FieldMedicSection,
  FortuneTellerSection,
  GamblerSection,
  GladiatorSection,
  GuardSection,
  HerbalistSection,
  HermitSection,
  HunterSection,
  LaborerSection,
  MartialDiscipleSection,
  MartialDiscipleAcrobaticsSection,
  MartialDiscipleAthleticsSection,
  MerchantSection,
  MinerSection,
  NobleSection,
  NomadSection,
  PrisonerSection,
  RaisedByBeliefSection,
  SailorSection,
  ScholarSection,
  ScoutSection,
  StreetUrchinSection,
  TeacherSection,
  TinkerSection,
  WarriorSection,
  AncestriesBackgroundsLanguagesSection,
  RegionalLanguagesSection,
  SignLanguageSection,
]
